<!-- FLEET:BEGIN -->
## Database access rules (added by Fleet)

- Keep row level security enabled on every table in a schema the app's API serves, such as `public`.
- Never add a policy that is always true (`USING (true)` or `WITH CHECK (true)`) for `anon`, `public` or no role: it lets anyone with the app's public key read or change every row.
- Don't turn row level security off, or drop a policy, to make an error go away. Add a policy that checks who is asking instead, such as `auth.uid() = user_id`.
- Change the database with a new file in `supabase/migrations`. Never edit a migration that has already run.
<!-- FLEET:END -->
