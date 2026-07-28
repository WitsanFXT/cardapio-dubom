/* ===================================
   CONFIGURAÇÃO DO SUPABASE
   Preencha com os dados do SEU projeto:
   Painel Supabase > Project Settings > API
=================================== */

const SUPABASE_URL = "https://xmvhuahizxucxgmaumkf.supabase.co"; // ex: https://xxxxxxxx.supabase.co
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtdmh1YWhpenh1Y3hnbWF1bWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyMjE5NjAsImV4cCI6MjEwMDc5Nzk2MH0.r6cxRGs9tXAIiPy9FD1OgpipS6dKbHBwafs53CXrCZg";

// Cliente único, compartilhado entre app.js e admin.js
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
);

window.db = supabaseClient;
