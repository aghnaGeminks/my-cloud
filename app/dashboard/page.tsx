'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Dashboard() {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFiles() {
        // Placeholder for fetching from Supabase Storage
    }
    fetchFiles();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">MyCloud Dashboard</h1>
      <p>File Anda akan muncul di sini.</p>
    </main>
  );
}