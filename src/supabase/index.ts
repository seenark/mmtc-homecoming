import { createClient } from "@supabase/supabase-js";
import { type Database } from "~/supabase";

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  "https://mfessrjzbkmxaririspp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mZXNzcmp6YmtteGFyaXJpc3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4Mzc2MzcsImV4cCI6MjAxOTQxMzYzN30.yI5bKRZ3unyjDI3-CgkarQO-fxt3l9dkRFTSRddIDVs",
);
