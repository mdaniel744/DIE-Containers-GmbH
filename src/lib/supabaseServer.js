import { createClient } from "@supabase/supabase-js";

export const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID || "";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Server-only Supabase client — no "use client", safe to import in server components and generateMetadata.
// auth.persistSession: false prevents any attempt to access browser storage (localStorage) server-side.
export const supabaseServer =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, { auth: { persistSession: false } })
    : null;
