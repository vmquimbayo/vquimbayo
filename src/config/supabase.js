const { createClient } = require('@supabase/supabase-js');

// Credenciales de Supabase desde las variables de entorno
const supabaseUrl = "https://cpibpoyzxouqgtbukpou.supabase.co"; // Reemplaza con tu URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwaWJwb3l6eG91cWd0YnVrcG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0MjUwOTcsImV4cCI6MjA1MzAwMTA5N30.mawH_645dqxdG12bAhvqga1GAf5e_2OMFUDbFlEwHpE"; // Reemplaza con tu clave anon
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
