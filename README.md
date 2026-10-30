# MyCloud Storage

Aplikasi penyimpanan file pribadi berbasis Next.js dan Supabase.

## Cara Deploy ke Vercel (Tanpa Install Lokal)

Jika Anda mengalami kendala saat menjalankan `npm install` di komputer lokal, Anda bisa langsung mendeploy aplikasi ini ke [Vercel](https://vercel.com/) karena Vercel akan menangani proses build di server mereka.

### Langkah-langkah:

1.  **Siapkan Repository**:
    *   Pastikan folder `MyCloud` sudah menjadi repository git:
        ```bash
        cd MyCloud
        git init
        ```
    *   Buat repository baru di [GitHub](https://github.com/new).
    *   Push kode Anda ke repository tersebut:
        ```bash
        git remote add origin <URL_REPOSITORY_GITHUB_ANDA>
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git push -u origin main
        ```

2.  **Hubungkan ke Vercel**:
    *   Buka [Vercel Dashboard](https://vercel.com/dashboard).
    *   Klik **Add New...** > **Project**.
    *   Impor repository yang baru saja Anda buat di GitHub.
    *   Pada bagian **Environment Variables**, tambahkan:
        *   `NEXT_PUBLIC_SUPABASE_URL`: (Dapatkan dari Supabase Dashboard > Settings > API)
        *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Dapatkan dari Supabase Dashboard > Settings > API)
    *   Klik **Deploy**.

3.  **Supabase Setup**:
    *   Pastikan di [Supabase Dashboard](https://app.supabase.com/):
        *   Sudah membuat proyek baru.
        *   Masuk ke **Storage**, buat bucket bernama `user-files` (set menjadi *Public* untuk kemudahan akses awal).
        *   Masuk ke **Database**, buat tabel `files` (jika ingin menyimpan metadata file).

## Fitur yang akan dikembangkan:
- [ ] Autentikasi User (Login/Register).
- [ ] Upload & Download File ke Supabase Storage.
- [ ] Tampilan Dashboard yang responsif.
