/*
# Create consultation_requests table

1. Purpose
   Stores contact form submissions from the trucking consulting website.
   This is a no-auth (single-tenant) site — visitors submit the form anonymously,
   so policies must allow anon + authenticated to INSERT. Reads are restricted
   to authenticated users only (site admins reviewing submissions).

2. New Tables
   - `consultation_requests`
     - `id` (uuid, primary key)
     - `name` (text, not null) — submitter's full name
     - `phone` (text, not null) — contact phone number
     - `email` (text, not null) — contact email address
     - `business_stage` (text, not null) — where they are in the process (e.g. "Just exploring", "Ready to start", "Already operating")
     - `message` (text) — optional additional details
     - `status` (text, default 'new') — tracking status for the team
     - `created_at` (timestamptz, default now())

3. Security
   - Enable RLS on `consultation_requests`.
   - INSERT: allow `anon, authenticated` — visitors submit the form without signing in.
   - SELECT/UPDATE/DELETE: `authenticated` only — only logged-in admins can read or manage submissions.
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  business_stage text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a consultation request
DROP POLICY IF EXISTS "anon_insert_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_insert_consultation_requests"
ON consultation_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Only authenticated admins can read submissions
DROP POLICY IF EXISTS "auth_select_consultation_requests" ON consultation_requests;
CREATE POLICY "auth_select_consultation_requests"
ON consultation_requests FOR SELECT
TO authenticated USING (true);

-- Only authenticated admins can update submission status
DROP POLICY IF EXISTS "auth_update_consultation_requests" ON consultation_requests;
CREATE POLICY "auth_update_consultation_requests"
ON consultation_requests FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated admins can delete submissions
DROP POLICY IF EXISTS "auth_delete_consultation_requests" ON consultation_requests;
CREATE POLICY "auth_delete_consultation_requests"
ON consultation_requests FOR DELETE
TO authenticated USING (true);
