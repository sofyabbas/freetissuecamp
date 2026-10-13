'use client';

import React from 'react';
import { Info, Sparkles, CheckCircle2, ChevronLeft, Search, Image as ImageIcon } from 'lucide-react';

interface RichLessonViewerProps {
  content: string;
}

interface BlockItem {
  type: 'table' | 'math' | 'h1' | 'h2' | 'h3' | 'h4' | 'hr' | 'quote' | 'code' | 'ul' | 'ol' | 'p' | 'image';
  content?: string;
  items?: string[];
  alt?: string;
  src?: string;
}

/**
 * Extracts balanced curly braces starting at startIndex (where str[startIndex] === '{')
 */
function parseBraces(str: string, startIndex: number): { content: string; endIndex: number } | null {
  if (str[startIndex] !== '{') return null;
  let depth = 0;
  for (let i = startIndex; i < str.length; i++) {
    if (str[i] === '{') depth++;
    else if (str[i] === '}') {
      depth--;
      if (depth === 0) {
        return { content: str.substring(startIndex + 1, i), endIndex: i };
      }
    }
  }
  return null;
}

/**
 * Robustly unwraps \text{...}, \mathbf{...}, \mathit{...}, etc. taking into account nested braces
 */
function unwrapAllBracedCommands(str: string): string {
  let prev = '';
  let cur = str
    .replace(/\x09ext/g, '\\text')
    .replace(/\x0crac/g, '\\frac')
    .replace(/\x09imes/g, '\\times');

  // Loop until all nested commands are unwrapped
  while (cur !== prev) {
    prev = cur;
    let res = '';
    let i = 0;
    while (i < cur.length) {
      const match = cur.slice(i).match(/^(?:\\|\b)(text|mathbf|mathit|mathrm|bf)\{/);
      if (match) {
        const braceIdx = i + match[0].length - 1;
        const b = parseBraces(cur, braceIdx);
        if (b) {
          res += b.content;
          i = b.endIndex + 1;
          continue;
        }
      }
      res += cur[i];
      i++;
    }
    cur = res;
  }
  return cur;
}

interface FracPart {
  type: 'text' | 'frac';
  text?: string;
  num?: string;
  den?: string;
}

/**
 * Parses an equation string into alternating text and vertical fraction segments
 */
function extractFractions(str: string): FracPart[] {
  const parts: FracPart[] = [];
  let i = 0;
  let lastIdx = 0;
  while (i < str.length) {
    const fracMatch = str.slice(i).match(/^(?:\\|\b)frac\{/);
    if (fracMatch) {
      if (i > lastIdx) {
        parts.push({ type: 'text', text: str.slice(lastIdx, i) });
      }
      const numBraceIdx = i + fracMatch[0].length - 1;
      const num = parseBraces(str, numBraceIdx);
      if (num) {
        let denBraceIdx = num.endIndex + 1;
        while (denBraceIdx < str.length && /\s/.test(str[denBraceIdx])) denBraceIdx++;
        if (str[denBraceIdx] === '{') {
          const den = parseBraces(str, denBraceIdx);
          if (den) {
            parts.push({ type: 'frac', num: num.content, den: den.content });
            i = den.endIndex + 1;
            lastIdx = i;
            continue;
          }
        }
      }
    }
    i++;
  }
  if (lastIdx < str.length) {
    parts.push({ type: 'text', text: str.slice(lastIdx) });
  }
  return parts;
}

function cleanMathSymbols(str: string): string {
  // First unwrap all \text and font wrappers
  let s = unwrapAllBracedCommands(str);

  // Convert inline fractions \frac{a}{b} -> (a / b) using balanced braces
  let fracProcessed = '';
  let i = 0;
  let lastIdx = 0;
  while (i < s.length) {
    const fracMatch = s.slice(i).match(/^(?:\\|\b)frac\{/);
    if (fracMatch) {
      if (i > lastIdx) fracProcessed += s.slice(lastIdx, i);
      const numBraceIdx = i + fracMatch[0].length - 1;
      const num = parseBraces(s, numBraceIdx);
      if (num) {
        let denBraceIdx = num.endIndex + 1;
        while (denBraceIdx < s.length && /\s/.test(s[denBraceIdx])) denBraceIdx++;
        if (s[denBraceIdx] === '{') {
          const den = parseBraces(s, denBraceIdx);
          if (den) {
            fracProcessed += `(${cleanMathSymbols(num.content)} / ${cleanMathSymbols(den.content)})`;
            i = den.endIndex + 1;
            lastIdx = i;
            continue;
          }
        }
      }
    }
    i++;
  }
  if (lastIdx < s.length) fracProcessed += s.slice(lastIdx);
  s = fracProcessed;

  // Convert \sqrt{x} -> √(x) using balanced braces
  let sqrtProcessed = '';
  i = 0;
  lastIdx = 0;
  while (i < s.length) {
    const sqrtMatch = s.slice(i).match(/^(?:\\|\b)sqrt\{/);
    if (sqrtMatch) {
      if (i > lastIdx) sqrtProcessed += s.slice(lastIdx, i);
      const braceIdx = i + sqrtMatch[0].length - 1;
      const b = parseBraces(s, braceIdx);
      if (b) {
        sqrtProcessed += `√(${cleanMathSymbols(b.content)})`;
        i = b.endIndex + 1;
        lastIdx = i;
        continue;
      }
    }
    i++;
  }
  if (lastIdx < s.length) sqrtProcessed += s.slice(lastIdx);
  s = sqrtProcessed;

  const mapSup: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾', 'n': 'ⁿ'
  };
  const mapSub: Record<string, string> = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
  };

  return s
    // Brackets and delimiters
    .replace(/(?:\\left\[|\bleft\[)/g, '[')
    .replace(/(?:\\right\]|\bright\])/g, ']')
    .replace(/(?:\\left\(|\bleft\()/g, '(')
    .replace(/(?:\\right\)|\bright\))/g, ')')
    .replace(/(?:\\left|\bleft)\b/g, '')
    .replace(/(?:\\right|\bright)\b/g, '')
    // Superscripts
    .replace(/\^\{([0-9+\-n]+)\}/g, (_, exp) => exp.split('').map((c: string) => mapSup[c] || c).join(''))
    .replace(/\^([0-9n])/g, (_, exp) => mapSup[exp] || exp)
    .replace(/\^\\circ|\^circ|\^∘/g, '°')
    // Numeric subscripts
    .replace(/_\{([0-9]+)\}/g, (_, sub) => sub.split('').map((c: string) => mapSub[c] || c).join(''))
    .replace(/_([0-9])/g, (_, sub) => mapSub[sub] || sub)
    // Named subscripts & curly braces (f_{Short} -> f_Short)
    .replace(/_\{([^}]+)\}/g, '_$1')
    .replace(/\{([^}]+)\}/g, '$1')
    // Operators and symbols
    .replace(/(?:\\times|\btimes)\b/g, ' × ')
    .replace(/(?:\\cdot|\bcdot)\b/g, ' · ')
    .replace(/(?:\\approx|\bapprox)\b/g, ' ≈ ')
    .replace(/(?:\\le|\ble)\b/g, ' ≤ ')
    .replace(/(?:\\ge|\bge)\b/g, ' ≥ ')
    .replace(/(?:\\pm|\bpm)\b/g, ' ± ')
    .replace(/\\circ|\bcirc/g, '°')
    .replace(/\\mu|\bmu/g, 'μ')
    .replace(/(?:\\Delta|\bDelta)\b/g, 'Δ')
    .replace(/(?:\\sigma|\bsigma)\b/g, 'σ')
    .replace(/(?:\\theta|\btheta)\b/g, 'θ')
    .replace(/(?:\\gamma|\bgamma)\b/g, 'γ')
    .replace(/(?:\\eta|\beta)\b/g, 'η')
    .replace(/(?:\\pi|\bpi)\b/g, 'π')
    .replace(/(?:\\alpha|\balpha)\b/g, 'α')
    .replace(/(?:\\beta|\bbeta)\b/g, 'β')
    .replace(/(?:\\kappa|\bkappa)\b/g, 'κ')
    .replace(/(?:\\rho|\brho)\b/g, 'ρ')
    .replace(/(?:\\tau|\btau)\b/g, 'τ')
    .replace(/(?:\\quad|\bquad)\b/g, '  ')
    .replace(/(?:\\text|\btext)\b/g, '')
    .replace(/(?:\\mathbf|\bmathbf)\b/g, '')
    .replace(/(?:\\frac|\bfrac)\b/g, '')
    .replace(/\\%/g, '%')
    .replace(/\\\\/g, '')
    .replace(/\\/g, '')
    .trim();
}

/**
 * Helper to parse inline markdown (bold, code, quotes, and inline math)
 */
function renderInlineText(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*.*?\*\*|`.*?`|\$[^\$]+?\$)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    // Push preceding text
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      const boldText = token.slice(2, -2);
      parts.push(
        <strong key={match.index} className="font-bold text-charcoal-900 bg-amber-50/70 px-1 py-0.5 rounded border border-amber-200/50">
          {boldText.includes('$') ? renderInlineText(boldText) : boldText}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      const codeText = token.slice(1, -1);
      parts.push(
        <code key={match.index} className="font-mono text-xs bg-paper-100 text-primary-800 px-1.5 py-0.5 rounded border border-charcoal-200" dir="ltr">
          {codeText}
        </code>
      );
    } else if (token.startsWith('$') && token.endsWith('$')) {
      const mathInner = token.slice(1, -1);
      parts.push(
        <span key={match.index} className="font-semibold text-primary-950 bg-primary-50/70 px-1.5 py-0.5 rounded border border-primary-200/40 text-xs sm:text-sm font-sans mx-0.5" dir="ltr">
          {cleanMathSymbols(mathInner)}
        </span>
      );
    }

    lastIndex = regex.lastIndex;
  }

  // Push remainder
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

/**
 * Renders a Markdown table into a polished responsive HTML table
 */
function renderMarkdownTable(block: string, key: number) {
  const lines = block.trim().split('\n').filter((l) => l.includes('|'));
  if (lines.length < 2) return null;

  const parseRow = (line: string) => {
    return line
      .split('|')
      .map((c) => c.trim())
      .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
  };

  const headerCells = parseRow(lines[0]);
  const dataRows = lines.slice(2).map(parseRow);

  return (
    <div key={key} className="my-6 overflow-x-auto rounded-2xl border border-charcoal-200 shadow-sm bg-white">
      <table className="w-full text-right text-xs sm:text-sm border-collapse">
        <thead className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
          <tr>
            {headerCells.map((cell, idx) => (
              <th key={idx} className="p-3 sm:p-4 font-bold border-b border-primary-700 whitespace-nowrap">
                {renderInlineText(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-charcoal-100">
          {dataRows.map((row, rIdx) => (
            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white hover:bg-paper-50/80 transition-colors' : 'bg-paper-50/50 hover:bg-paper-100/60 transition-colors'}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3 sm:p-4 text-charcoal-800 leading-relaxed">
                  {renderInlineText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Parses raw markdown text line-by-line into strongly-typed block elements.
 * Guarantees that headings, paragraphs, lists, and equations are NEVER merged into each other.
 */
function parseBlocks(content: string): BlockItem[] {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: BlockItem[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // 0. Image (![alt](src))
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      let src = imgMatch[2];
      const urlMatch = src.match(/\/public\/images\/courses\/([^/?#]+)/);
      if (urlMatch) {
        src = `/images/courses/${urlMatch[1]}`;
      }
      blocks.push({
        type: 'image',
        alt: imgMatch[1],
        src: src,
      });
      i++;
      continue;
    }

    // 1. Table
    if (trimmed.startsWith('|') && i + 1 < lines.length && lines[i + 1].includes('|') && lines[i + 1].includes('-')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: 'table', content: tableLines.join('\n') });
      continue;
    }

    // 2. Block math ($$ ... $$)
    if (trimmed.startsWith('$$')) {
      if (trimmed.endsWith('$$') && trimmed.length > 2) {
        blocks.push({ type: 'math', content: trimmed });
        i++;
        continue;
      }
      const mathLines: string[] = [line];
      i++;
      while (i < lines.length) {
        mathLines.push(lines[i]);
        if (lines[i].trim().endsWith('$$')) {
          i++;
          break;
        }
        i++;
      }
      blocks.push({ type: 'math', content: mathLines.join('\n') });
      continue;
    }

    // 3. Headings (strictly single-line elements)
    if (trimmed.startsWith('# ')) {
      blocks.push({ type: 'h1', content: trimmed.replace('# ', '') });
      i++;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      blocks.push({ type: 'h2', content: trimmed.replace('## ', '') });
      i++;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      blocks.push({ type: 'h3', content: trimmed.replace('### ', '') });
      i++;
      continue;
    }
    if (trimmed.startsWith('#### ')) {
      blocks.push({ type: 'h4', content: trimmed.replace('#### ', '') });
      i++;
      continue;
    }

    // 4. Horizontal rule
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // 5. Blockquote
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
        i++;
      }
      blocks.push({ type: 'quote', content: quoteLines.join(' ') });
      continue;
    }

    // 6. Code block
    if (trimmed.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      blocks.push({ type: 'code', content: codeLines.join('\n') });
      continue;
    }

    // 7. Unordered list (- or *)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s*/, ''));
        i++;
      }
      blocks.push({ type: 'ul', items: listItems });
      continue;
    }

    // 8. Ordered list (1. 2. ...)
    if (/^\d+\.\s/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s*/, ''));
        i++;
      }
      blocks.push({ type: 'ol', items: listItems });
      continue;
    }

    // 9. Standard paragraph
    const pLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('#') &&
      !lines[i].trim().startsWith('$$') &&
      !lines[i].trim().startsWith('|') &&
      !lines[i].trim().startsWith('>') &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('- ') &&
      !lines[i].trim().startsWith('* ') &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      lines[i].trim() !== '---'
    ) {
      pLines.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: 'p', content: pLines.join(' ') });
  }

  return blocks;
}

export function RichLessonViewer({ content }: RichLessonViewerProps) {
  if (!content) return null;

  const blocks = parseBlocks(content);

  return (
    <div className="space-y-6 text-charcoal-800 leading-loose text-sm sm:text-base">
      {blocks.map((block, idx) => {
        // Table
        if (block.type === 'table' && block.content) {
          return renderMarkdownTable(block.content, idx);
        }

        // H1
        if (block.type === 'h1' && block.content) {
          return (
            <h1 key={idx} className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 pt-6 pb-2 border-b-2 border-primary-600">
              {renderInlineText(block.content)}
            </h1>
          );
        }

        // H2
        if (block.type === 'h2' && block.content) {
          return (
            <h2 key={idx} className="text-xl sm:text-2xl font-bold text-charcoal-900 pt-6 pb-2 border-b border-charcoal-200 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary-600 rounded-full inline-block" />
              <span>{renderInlineText(block.content)}</span>
            </h2>
          );
        }

        // H3
        if (block.type === 'h3' && block.content) {
          return (
            <h3 key={idx} className="text-lg sm:text-xl font-bold text-charcoal-900 pt-4 pb-1 text-primary-900">
              {renderInlineText(block.content)}
            </h3>
          );
        }

        // H4
        if (block.type === 'h4' && block.content) {
          return (
            <h4 key={idx} className="text-base sm:text-lg font-bold text-charcoal-800 pt-2 pb-1">
              {renderInlineText(block.content)}
            </h4>
          );
        }

        // Horizontal Rule
        if (block.type === 'hr') {
          return <hr key={idx} className="my-6 border-charcoal-200" />;
        }

        // Image Diagram
        if (block.type === 'image' && block.src) {
          return (
            <figure
              key={idx}
              className="my-8 rounded-3xl border border-charcoal-200/90 bg-white p-3 sm:p-5 shadow-sm overflow-hidden text-center group transition-all hover:shadow-md"
            >
              <div className="relative overflow-hidden rounded-2xl bg-paper-50/50 border border-charcoal-100 flex items-center justify-center p-2 sm:p-3 min-h-[200px]">
                <img
                  src={block.src}
                  alt={block.alt || 'مخطط توضيحي صناعي'}
                  className="w-full max-h-[460px] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
              {block.alt && (
                <figcaption className="mt-3.5 text-xs sm:text-sm font-bold text-charcoal-800 flex items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1 text-primary-800 bg-primary-100 border border-primary-200 px-2.5 py-0.5 rounded-full text-xs font-black">
                    <ImageIcon className="w-3.5 h-3.5 text-primary-600 inline" /> مخطط هندسي معتمد
                  </span>
                  <span>{renderInlineText(block.alt)}</span>
                </figcaption>
              )}
            </figure>
          );
        }

        // Quote
        if (block.type === 'quote' && block.content) {
          const isOem = block.content.includes('OEM') || block.content.includes('مراجع ومصطلحات البحث الصناعي');
          if (isOem) {
            return (
              <div
                key={idx}
                className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-charcoal-900 via-charcoal-800 to-primary-950 border border-charcoal-700 text-white shadow-md text-right"
              >
                <div className="flex items-center gap-2 mb-2 text-primary-300 text-xs font-bold">
                  <Search className="w-4 h-4 text-primary-400" />
                  <span>مراجع ومصطلحات البحث الموصى بها في الكتالوجات العالمية (OEM Search Queries):</span>
                </div>
                <div className="text-xs sm:text-sm text-paper-200 leading-relaxed font-sans" dir="auto">
                  {renderInlineText(block.content.replace(/^[*\s]+/, ''))}
                </div>
              </div>
            );
          }
          return (
            <div
              key={idx}
              className="my-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-kraft-100/90 to-paper-100 border-r-4 border-kraft-600 shadow-2xs flex items-start gap-3"
            >
              <Info className="w-5 h-5 text-kraft-800 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm font-medium text-charcoal-900 leading-relaxed">
                {renderInlineText(block.content)}
              </div>
            </div>
          );
        }

        // Code Block
        if (block.type === 'code' && block.content) {
          return (
            <pre key={idx} className="my-6 p-4 rounded-2xl bg-charcoal-900 text-paper-100 text-xs sm:text-sm font-mono overflow-x-auto" dir="ltr">
              <code>{block.content}</code>
            </pre>
          );
        }

        // Math Equation
        if (block.type === 'math' && block.content) {
          let formulaRaw = block.content.replace(/^\$\$|\$\$$/g, '').trim();
          formulaRaw = formulaRaw
            .replace(/\x0crac/g, '\\frac')
            .replace(/\text/g, '\\text')
            .replace(/\times/g, '\\times')
            .replace(/\theta/g, '\\theta')
            .replace(/\tau/g, '\\tau')
            .replace(/\right/g, '\\right')
            .replace(/\rho/g, '\\rho')
            .replace(/\nu/g, '\\nu');

          const unwrapped = unwrapAllBracedCommands(formulaRaw);
          const parts = extractFractions(unwrapped);
          const hasFrac = parts.some((p) => p.type === 'frac');

          return (
            <div
              key={idx}
              className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-paper-50 to-paper-100/80 border border-primary-200/70 shadow-sm text-center"
              dir="ltr"
            >
              <div className="text-xs text-primary-800 font-bold uppercase tracking-wider mb-3 flex items-center justify-center gap-1.5" dir="rtl">
                <span>📐 المعادلة الهندسية التطبيقية:</span>
              </div>
              {hasFrac ? (
                <div className="flex items-center justify-center flex-wrap gap-2 text-sm sm:text-base md:text-lg font-bold text-primary-950 font-sans">
                  {parts.map((p, pIdx) => {
                    if (p.type === 'frac' && p.num !== undefined && p.den !== undefined) {
                      return (
                        <div key={pIdx} className="inline-flex flex-col items-center align-middle mx-1.5 my-1">
                          <span className="border-b-2 border-primary-800/80 pb-1 px-3 text-center w-full font-bold">
                            {cleanMathSymbols(p.num)}
                          </span>
                          <span className="pt-1 px-3 text-center w-full font-bold">
                            {cleanMathSymbols(p.den)}
                          </span>
                        </div>
                      );
                    }
                    return <span key={pIdx}>{cleanMathSymbols(p.text || '')}</span>;
                  })}
                </div>
              ) : (
                <div className="text-sm sm:text-base md:text-lg font-bold text-primary-950 font-sans">
                  {cleanMathSymbols(unwrapped)}
                </div>
              )}
            </div>
          );
        }

        // Unordered List
        if (block.type === 'ul' && block.items) {
          return (
            <ul key={idx} className="space-y-2.5 my-4 pr-2">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    {renderInlineText(item)}
                  </div>
                </li>
              ))}
            </ul>
          );
        }

        // Ordered List
        if (block.type === 'ol' && block.items) {
          return (
            <div key={idx} className="space-y-3 my-4">
              {block.items.map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-paper-50 border border-charcoal-200/80 flex items-start gap-3 text-xs sm:text-sm">
                  <span className="w-6 h-6 rounded-lg bg-primary-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1 text-charcoal-800 leading-relaxed">
                    {renderInlineText(item)}
                  </div>
                </div>
              ))}
            </div>
          );
        }

        // Paragraph
        return (
          <p key={idx} className="leading-relaxed text-charcoal-800">
            {renderInlineText(block.content || '')}
          </p>
        );
      })}
    </div>
  );
}
