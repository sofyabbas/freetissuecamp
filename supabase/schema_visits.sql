-- ==============================================================================
-- FreeTissue Camp - نظام تتبع وإحصائيات عداد الزيارات (Site Visitor Counter)
-- ==============================================================================
-- قم بنسخ هذا الكود ولصقه في SQL Editor داخل لوحة تحكم مشروعك في Supabase ثم اضغط Run
-- ==============================================================================

-- 1. إنشاء جدول إحصائيات الموقع
CREATE TABLE IF NOT EXISTS public.site_stats (
    id TEXT PRIMARY KEY DEFAULT 'global',
    total_visits BIGINT NOT NULL DEFAULT 0,
    unique_visits BIGINT NOT NULL DEFAULT 0,
    last_visited_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. إدخال السجل الافتراضي إذا لم يكن موجوداً مسبقاً (مع قيمة بداية واقعية للمنصة)
INSERT INTO public.site_stats (id, total_visits, unique_visits)
VALUES ('global', 1485, 620)
ON CONFLICT (id) DO NOTHING;

-- 3. تفعيل حماية Row Level Security (RLS)
ALTER TABLE public.site_stats ENABLE ROW LEVEL SECURITY;

-- 4. السماح لجميع الزوار بقراءة الإحصائيات (SELECT)
DROP POLICY IF EXISTS "Allow public read access" ON public.site_stats;
CREATE POLICY "Allow public read access"
ON public.site_stats
FOR SELECT
TO public
USING (true);

-- 5. دالة آمنة لمعالجة وتحديث الزيارات فورياً دون تضارب (Concurrency Safe RPC)
CREATE OR REPLACE FUNCTION increment_site_visits(is_unique BOOLEAN DEFAULT false)
RETURNS TABLE (
    total_visits BIGINT,
    unique_visits BIGINT,
    last_visited_at TIMESTAMPTZ
) 
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    UPDATE public.site_stats
    SET 
        total_visits = site_stats.total_visits + 1,
        unique_visits = CASE 
            WHEN is_unique THEN site_stats.unique_visits + 1 
            ELSE site_stats.unique_visits 
        END,
        last_visited_at = NOW()
    WHERE site_stats.id = 'global'
    RETURNING site_stats.total_visits, site_stats.unique_visits, site_stats.last_visited_at;
END;
$$;

-- 6. منح الصلاحية للدالة لتعمل للمستخدمين المسجلين والزوار غير المسجلين (anon)
GRANT EXECUTE ON FUNCTION increment_site_visits(BOOLEAN) TO anon, authenticated;
