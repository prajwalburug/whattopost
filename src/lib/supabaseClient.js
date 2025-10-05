import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ceimwqvhpumnfvghvhna.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlaW13cXZocHVtbmZ2Z2h2aG5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0ODk5MjYsImV4cCI6MjA3NTA2NTkyNn0.24HKHISpiNx3BgG1iLa2F3opEBqybFesklv_wWupSUw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
