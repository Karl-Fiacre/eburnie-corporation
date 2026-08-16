CREATE TABLE public.corp_contact_messages (
  id uuid primary key default gen_random_uuid(),
  kind text not null default 'contact',
  name text not null,
  email text not null,
  company text,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);
ALTER TABLE public.corp_contact_messages
  ADD CONSTRAINT corp_contact_kind_chk CHECK (kind IN ('contact','partenariat','investisseur')),
  ADD CONSTRAINT corp_contact_name_chk CHECK (char_length(btrim(name)) BETWEEN 2 AND 100),
  ADD CONSTRAINT corp_contact_email_chk CHECK (char_length(email) BETWEEN 5 AND 150 AND position('@' in email) > 1),
  ADD CONSTRAINT corp_contact_company_chk CHECK (company IS NULL OR char_length(company) <= 120),
  ADD CONSTRAINT corp_contact_phone_chk CHECK (phone IS NULL OR char_length(phone) <= 30),
  ADD CONSTRAINT corp_contact_subject_chk CHECK (char_length(btrim(subject)) BETWEEN 3 AND 150),
  ADD CONSTRAINT corp_contact_message_chk CHECK (char_length(btrim(message)) BETWEEN 10 AND 2000);

GRANT INSERT ON public.corp_contact_messages TO anon, authenticated;
GRANT ALL ON public.corp_contact_messages TO service_role;
ALTER TABLE public.corp_contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can submit corporate contact messages"
  ON public.corp_contact_messages FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(btrim(name)) BETWEEN 2 AND 100
    AND position('@' in email) > 1
    AND char_length(btrim(message)) BETWEEN 10 AND 2000
  );

CREATE TABLE public.corp_job_applications (
  id uuid primary key default gen_random_uuid(),
  position_title text not null,
  full_name text not null,
  email text not null,
  phone text,
  linkedin_url text,
  cover_letter text not null,
  created_at timestamptz not null default now()
);
ALTER TABLE public.corp_job_applications
  ADD CONSTRAINT corp_job_position_chk CHECK (char_length(btrim(position_title)) BETWEEN 2 AND 150),
  ADD CONSTRAINT corp_job_name_chk CHECK (char_length(btrim(full_name)) BETWEEN 2 AND 100),
  ADD CONSTRAINT corp_job_email_chk CHECK (char_length(email) BETWEEN 5 AND 150 AND position('@' in email) > 1),
  ADD CONSTRAINT corp_job_phone_chk CHECK (phone IS NULL OR char_length(phone) <= 30),
  ADD CONSTRAINT corp_job_linkedin_chk CHECK (linkedin_url IS NULL OR char_length(linkedin_url) <= 300),
  ADD CONSTRAINT corp_job_letter_chk CHECK (char_length(btrim(cover_letter)) BETWEEN 20 AND 3000);

GRANT INSERT ON public.corp_job_applications TO anon, authenticated;
GRANT ALL ON public.corp_job_applications TO service_role;
ALTER TABLE public.corp_job_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can submit corporate job applications"
  ON public.corp_job_applications FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(btrim(full_name)) BETWEEN 2 AND 100
    AND position('@' in email) > 1
    AND char_length(btrim(cover_letter)) BETWEEN 20 AND 3000
  );

CREATE TABLE public.corp_newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);
ALTER TABLE public.corp_newsletter_subscribers
  ADD CONSTRAINT corp_news_email_chk CHECK (char_length(email) BETWEEN 5 AND 150 AND position('@' in email) > 1);
GRANT INSERT ON public.corp_newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.corp_newsletter_subscribers TO service_role;
ALTER TABLE public.corp_newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can subscribe to corporate newsletter"
  ON public.corp_newsletter_subscribers FOR INSERT TO anon, authenticated
  WITH CHECK (position('@' in email) > 1);