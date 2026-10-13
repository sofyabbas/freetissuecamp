const fs = require('fs');
const path = require('path');

const mode = process.argv[2]?.toLowerCase();
const baseDir = path.resolve(__dirname, '../src/lib/data');

const legacyFile = path.join(baseDir, 'seed-data.legacy.ts');
const v2File = path.join(baseDir, 'seed-data.v2.ts');
const targetFile = path.join(baseDir, 'seed-data.ts');

if (mode === 'v1' || mode === 'legacy') {
  if (!fs.existsSync(legacyFile)) {
    console.error('Error: seed-data.legacy.ts does not exist!');
    process.exit(1);
  }
  fs.copyFileSync(legacyFile, targetFile);
  console.log('✅ Switched to V1 Curriculum (Original 12 Courses)!');
} else if (mode === 'v2' || mode === 'new') {
  if (!fs.existsSync(v2File)) {
    console.error('Error: seed-data.v2.ts does not exist!');
    process.exit(1);
  }
  fs.copyFileSync(v2File, targetFile);
  console.log('✅ Switched to V2 Curriculum (New 6 Paths, 18 Courses Master Architecture)!');
} else {
  console.log('Usage: node scripts/switch-curriculum.js [v1 | v2]');
  console.log('  v1 (or legacy): Reverts to the original 12 courses curriculum.');
  console.log('  v2 (or new):    Applies the new 18 courses, 6 paths dual-audience curriculum.');
}
