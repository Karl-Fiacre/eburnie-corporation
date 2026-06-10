
-- 1) Tighten estimations_cargo INSERT policy
DO $$
DECLARE p record;
BEGIN
  FOR p IN SELECT policyname FROM pg_policies WHERE schemaname='public' AND tablename='estimations_cargo' AND cmd='INSERT'
  LOOP
    EXECUTE format('DROP POLICY %I ON public.estimations_cargo', p.policyname);
  END LOOP;
END $$;

CREATE POLICY "Estimations insert scoped to session"
ON public.estimations_cargo
FOR INSERT
TO anon, authenticated
WITH CHECK (
  (auth.uid() IS NULL AND user_id IS NULL)
  OR (auth.uid() IS NOT NULL AND user_id = auth.uid())
);

-- 2) Restrict realtime.messages to admin role only
DROP POLICY IF EXISTS "Authenticated can read realtime messages" ON realtime.messages;
DROP POLICY IF EXISTS "Authenticated can send realtime messages" ON realtime.messages;
DROP POLICY IF EXISTS "Authenticated can receive realtime messages" ON realtime.messages;

CREATE POLICY "Admins can read realtime messages"
ON realtime.messages
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can send realtime messages"
ON realtime.messages
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 3) Admin-only write policies for the vehicles storage bucket
DROP POLICY IF EXISTS "Admins can upload vehicle images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update vehicle images" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete vehicle images" ON storage.objects;

CREATE POLICY "Admins can upload vehicle images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'vehicles' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update vehicle images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'vehicles' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'vehicles' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete vehicle images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'vehicles' AND public.has_role(auth.uid(), 'admin'));
