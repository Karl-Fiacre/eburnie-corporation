
-- 1. Revoke EXECUTE on internal/trigger SECURITY DEFINER functions
REVOKE ALL ON FUNCTION public.handle_new_user_china_deals() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user_boutique() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.log_admin_action() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon, authenticated;

-- 2. Public-facing RPCs: ensure only the expected roles can call them
REVOKE ALL ON FUNCTION public.create_guest_order(text, text, text, text, text, text, text, transport_mode, bigint, bigint, bigint, payment_method, text, jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_guest_order(text, text, text, text, text, text, text, transport_mode, bigint, bigint, bigint, payment_method, text, jsonb) TO anon, authenticated;

REVOKE ALL ON FUNCTION public.get_order_by_number(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_order_by_number(text) TO anon, authenticated;

REVOKE ALL ON FUNCTION public.get_taken_slots(date) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_taken_slots(date) TO anon, authenticated;

REVOKE ALL ON FUNCTION public.create_boutique_order(text, text, text, text, text, boutique_contact_mode, text, bigint, bigint, jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.create_boutique_order(text, text, text, text, text, boutique_contact_mode, text, bigint, bigint, jsonb) TO anon, authenticated;

REVOKE ALL ON FUNCTION public.upsert_ai_conversation(text, jsonb, jsonb, boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.upsert_ai_conversation(text, jsonb, jsonb, boolean) TO anon, authenticated;

-- 3. Replace overly permissive INSERT (with_check true) policies with basic validation
DROP POLICY IF EXISTS "Anyone can create a booking" ON public.bookings_event;
CREATE POLICY "Anyone can create a booking" ON public.bookings_event
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(full_name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 200
    AND length(phone) BETWEEN 4 AND 50
    AND booking_date >= CURRENT_DATE
  );

DROP POLICY IF EXISTS "Anyone can send a contact message" ON public.contact_messages_cargo;
CREATE POLICY "Anyone can send a contact message" ON public.contact_messages_cargo
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(full_name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 200
    AND length(subject) BETWEEN 1 AND 300
    AND length(message) BETWEEN 1 AND 5000
  );

DROP POLICY IF EXISTS "Anyone can record their cookie consent" ON public.cookie_consents;
CREATE POLICY "Anyone can record their cookie consent" ON public.cookie_consents
  FOR INSERT TO anon, authenticated
  WITH CHECK (length(version) BETWEEN 1 AND 20);

-- 4. Storage: drop broad SELECT policies that enable bucket listing.
-- Buckets remain public, so direct object URLs still resolve.
DROP POLICY IF EXISTS "Product images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Public read shipment images" ON storage.objects;
DROP POLICY IF EXISTS "Vehicle images are publicly readable" ON storage.objects;

-- 5. Realtime: restrict channel subscriptions and broadcasts to authenticated users
ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can read realtime messages" ON realtime.messages;
CREATE POLICY "Authenticated users can read realtime messages"
  ON realtime.messages FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Authenticated users can broadcast realtime messages" ON realtime.messages;
CREATE POLICY "Authenticated users can broadcast realtime messages"
  ON realtime.messages FOR INSERT
  TO authenticated
  WITH CHECK (true);
