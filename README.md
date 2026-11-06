# Pabrik Vector — Website v4

Website katalog desain sekali beli dan jasa desain custom, dibuat dengan Next.js 14 (App Router), React, TypeScript, Tailwind CSS, dan Lucide React.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Update v4

- Produk **Terjual** dalam katalog membuka lightbox gambar saja saat diklik; tidak menampilkan halaman detail, harga, atau tombol pemesanan. Tutup melalui tombol X, klik latar, atau Escape.
- Halaman **Jasa Desain** mempunyai enam jenis contoh pesanan, termasuk desain aplikasi dan aset marketplace seperti Canva / Adobe Stock.
- Bagian **Cara Memesan Jasa** didesain ulang menjadi kartu langkah kontras dengan ikon dan CTA.
- UX copy tombol percakapan disederhanakan: “Chat Kami” dan “Ceritakan Proyekmu” (serta versi Inggrisnya).
- Bottom navigation mobile dari versi sebelumnya tetap dipertahankan.

## Ubah konten

- `lib/data.ts`: produk, status tersedia/terjual, kategori, nominal, dan nomor WhatsApp (`6283125562186`).
- `lib/i18n.ts`: teks terjemahan UI Bahasa Indonesia dan Inggris.
- `app/services/page.tsx`: enam contoh layanan dan proses pemesanan.
- `public/art/`: ilustrasi SVG contoh; ganti dengan desain final.
- `app/about/page.tsx`: logo klien masih berupa placeholder.
- `app/contact/page.tsx`: email masih berupa placeholder dan perlu diganti.

## Catatan

Status produk masih diatur manual di `lib/data.ts`. Tidak ada dashboard, checkout, atau pembayaran otomatis. Pengalihan ke WhatsApp adalah tautan dengan pesan yang terisi otomatis; transaksi harus dikonfirmasi penjual.

Folder `node_modules`, `.next`, dan file rahasia dikecualikan oleh `.gitignore`. Jangan upload folder dependencies ke GitHub.
