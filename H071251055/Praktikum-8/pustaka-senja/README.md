# Pustaka Senja

Aplikasi multi-halaman ruang baca Pustaka Senja (Tugas Praktikum 8 - Next.js Intro).
Dibangun dengan Next.js (App Router), JavaScript, dan Tailwind CSS.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Halaman

| URL | Keterangan |
| --- | --- |
| `/` | Beranda: Hero, statistik koleksi, tombol ke katalog dan usulan |
| `/katalog` | Daftar buku, filter kategori, tombol favorit |
| `/katalog/[id]` | Detail buku dinamis (contoh `/katalog/1`) |
| `/usulan` | Formulir usulan buku baru |

## Catatan

- Data buku hanya ada di `src/data/dataBuku.js` dan diimpor lewat `@/data/dataBuku`.
- `"use client"` hanya dipakai di `Navbar`, `BukuCard`, `katalog/page.jsx`, dan `usulan/page.jsx`.
- Tema visual: perpustakaan klasik (kartu katalog, cap status, sekat laci) berpadu langit senja (gradasi ungu-jingga, matahari di atas rak buku).
- Font di-host lokal lewat paket `@fontsource` (Fraunces, Newsreader, Courier Prime), jadi tidak butuh koneksi ke Google Fonts.
- `Stempel.jsx` adalah komponen kecil untuk cap status "Tersedia" / "Sedang Dipinjam".
