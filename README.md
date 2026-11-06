# Pabrik Vector — Perbaikan error deploy Vercel

Proyek Next.js + Tailwind CSS dari kode yang dikirim, ditambah file konfigurasi yang dibutuhkan.

## Yang diperbaiki
- `app/shop/[slug]/page.tsx`: hapus pemeriksaan status `sold` yang tidak dapat dicapai setelah TypeScript mempersempit status menjadi `available`.
- Produk yang sudah terjual tidak memiliki halaman detail yang bisa dipesan; URL detail produk terjual memanggil `notFound()`. Di katalog, produk terjual tetap dibuka dalam popup gambar melalui komponen `ProductCard`.
- Konfigurasi Next.js, Tailwind, TypeScript, PostCSS dan `.gitignore` disertakan karena tidak ada di `code.zip`.

## Menjalankan
```bash
npm install
npm run build
npm run dev
```

**Validasi:** 12 file TypeScript/TSX telah lolos pemeriksaan sintaks menggunakan transpiler TypeScript. Build penuh belum bisa diuji di lingkungan ini karena paket npm tidak tersedia di cache dan instalasi dependency gagal. Jalankan `npm run build` secara lokal atau deploy untuk verifikasi.

## GitHub
Salin file hasil ekstraksi ke root repository lalu jalankan:
```bash
git add .
git commit -m "Fix Vercel TypeScript build error"
git push
```
