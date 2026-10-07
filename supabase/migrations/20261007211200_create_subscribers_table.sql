/*
# Create subscribers table for email signups (single-tenant, no auth)

1. New Tables
- `subscribers`
  - `id` (uuid, primary key)
  - `email` (text, unique, not null) — the email address submitted through the landing page signup form
  - `created_at` (timestamptz, defaults to now()) — when the signup occurred
2. Security
- Enable RLS on `subscribers`.
- Allow anon + authenticated INSERT (the landing page is public, no sign-in).
- No SELECT/UPDATE/DELETE policies — subscribers cannot read or modify the list.
*/

CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_subscribers" ON subscribers;
CREATE POLICY "anon_insert_subscribers"
ON subscribers FOR INSERT
TO anon, authenticated
WITH CHECK (true);