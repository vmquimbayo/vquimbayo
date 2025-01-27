import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ehbzsjwahyuwcrcrongn.supabase.co"; // Reemplaza con tu URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoYnpzandhaHl1d2NyY3JvbmduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0MTgzMDksImV4cCI6MjA1Mjk5NDMwOX0.-9m5jfsNalxB31oPazs-_ssg0nzIsvvWuahowW20GNQ"; // Reemplaza con tu clave anon
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
