# Pabrik Vector

Responsive Indonesian-first digital design storefront built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide Icons. Includes English toggle, catalog/category filters, product detail pages, WhatsApp ordering, About Us, and Contact.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before launch

1. **WhatsApp:** Replace `WA_NUMBER` in `lib/data.ts` with your business number, country code included, without `+` or spaces. The current number is a placeholder.
2. **Email:** Replace `hello@pabrikvector.com` in `app/contact/page.tsx` with your real email.
3. **Exclusive one-time sale:** Every listing is an exclusive design sold to one buyer only. Set each product's `status` in `lib/data.ts` to `available`, `reserved`, or `sold`. Mark it `reserved` when a buyer starts a serious checkout and `sold` only after payment is confirmed. Reserved and sold products cannot be ordered using the normal order button. Statuses in this demo are **examples**, not actual sales.
4. **Products:** Edit the objects in `lib/data.ts` (names, descriptions, categories, prices, included assets, backgrounds, image paths).
5. **Images:** Replace SVGs inside `public/art/` with your own artwork. Keep filenames and paths, or update each product's `image` property.
6. **Clients:** Replace fictional placeholder logos in `app/about/page.tsx` with real clients; avoid publishing claims of collaboration until verified.
7. **Text:** Edit the Indonesian/English copy in `lib/i18n.ts`.
8. **Custom domain & metadata:** Update `app/layout.tsx` and deploy through Vercel or your preferred Next.js host.

## Features

- Home hero, featured products, categories, About excerpt and contact CTA
- Catalog with category tabs and title search
- Product details and prefilled order messages to WhatsApp
- About Us: services, replaceable client placeholders, four-step process
- Contact: WhatsApp and email
- ID / EN language switch saved via localStorage
- Mobile navigation and responsive grids
- Original temporary vector SVG artwork (not taken from the screenshot)

## Important limitations

This is a **static data catalog**, with product content managed by editing code. There is no CMS, shopping cart, checkout, user accounts, file downloads, online payment, or booking engine. WhatsApp order links transfer the customer to WhatsApp; transactions remain manual. A CMS can be integrated later if needed.

## Important: manual availability and exclusive ownership

This demo has **no live inventory backend or automatic sale locking**. Changing `status` in `lib/data.ts` and redeploying updates the public catalog, but WhatsApp enquiries can arrive at the same time; the owner **must confirm availability and payment manually** before promising exclusivity. For reliable one-buyer-only sales at scale, add a database, a server-side transactional reservation/lock, payment confirmation, an admin dashboard, and a clearly documented license/transfer agreement. A sold listing can remain visible as a showcase but its order button is disabled.


## Perubahan v1.2 (November 2026)
- WhatsApp bisnis: +62 831-2556-2186 (di `lib/data.ts`).
- Dua jalur bisnis terpisah: katalog produk satu pembeli dan jasa desain custom melalui `/services`.
- Tombol WhatsApp mengambang tersedia di semua halaman dengan dua opsi: tanya produk dan pesan jasa.
- Katalog dengan tab `Tersedia` dan `Terjual`, tanpa label eksklusif/dalam proses di kartu produk.
- Animasi halus untuk hero, cards, dan tombol WhatsApp (menghormati setting reduced motion).
- Status dan harga produk masih manual via `lib/data.ts`; belum ada back-end atau payment gateway.
- Nama klien, email, dan gambar produk merupakan contoh / placeholder, ganti sebelum produksi.
