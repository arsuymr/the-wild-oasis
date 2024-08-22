import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ywldssuayqfruzlibowi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bGRzc3VheXFmcnV6bGlib3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMjcwODEsImV4cCI6MjAzOTkwMzA4MX0.ZVd4eEP4RX5I6vhYkNnjWDpUSQun0f8P392fyZbte6c";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
