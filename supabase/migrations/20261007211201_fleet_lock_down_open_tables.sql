-- Added by Fleet: lock down tables open to anyone with the project's public (anon) key.
-- For each table, it drops every policy that is always true for anon, public or no role,
-- and turns row level security on. It changes no data and adds no policy, so once it runs
-- nobody using the app, signed in or not, can read or change these rows until a policy that
-- checks who is asking is added. IF EXISTS lets it run where a table or policy isn't there.

DROP POLICY IF EXISTS "anon_insert_subscribers" ON "public"."subscribers";
ALTER TABLE IF EXISTS "public"."subscribers" ENABLE ROW LEVEL SECURITY;
