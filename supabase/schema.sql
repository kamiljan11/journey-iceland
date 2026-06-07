-- Journey Iceland — availability-request (lead) storage.
-- Run once in the Supabase dashboard → SQL editor.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  tour        text,
  date        date,
  people      text,
  name        text not null,
  email       text not null,
  phone       text,
  message     text,
  lang        text,
  source      text default 'website'
);

-- RLS on, with NO public policies: only the server (service-role key) can read/write.
alter table public.leads enable row level security;
