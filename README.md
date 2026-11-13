# Portfolio Evan Azhar Hartana

Portofolio pribadi **Evan Azhar Hartana** — mahasiswa Sistem Komputer Universitas Pamulang yang berfokus pada pengembangan web full stack. Situs menampilkan profil, tech stack, perjalanan belajar, proyek, dan tulisan blog dalam antarmuka terminal yang responsif.

🔗 **Live:** [evanazhr.vercel.app](https://evanazhr.vercel.app)  
📄 **Product requirements:** [PRD.md](./PRD.md)

## Halaman

| Route | Isi |
| --- | --- |
| `/` | Perkenalan, ringkasan profil, dan perintah cepat |
| `/about` | Cerita singkat dan fakta profil |
| `/tech` | Tech stack, kelompok skill, perjalanan belajar, sertifikasi |
| `/projects` | Daftar proyek beserta demo dan tautan sumber |
| `/blogs` | Daftar tulisan |
| `/blogs/tutorial-html` | Artikel contoh berbasis MDX |
| `/404` | Halaman fallback bertema terminal |

Setiap halaman memenuhi satu layar dan memakai panel terminal dengan area konten yang bisa di-scroll. Default tema gelap; tombol tema tersedia di navigasi.

## Teknologi

| Kategori | Teknologi |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Bahasa | TypeScript |
| UI | Tailwind CSS v4, shadcn/ui |
| Animasi | Motion |
| Tema | next-themes |
| Konten | MDX (`@next/mdx`) |
| Ikon | Lucide, React Icons |
| Utilitas | clsx, tailwind-merge, class-variance-authority |
| Kualitas kode | ESLint, Prettier + `prettier-plugin-tailwindcss` |

## Menjalankan Secara Lokal

**Prasyarat:** Node.js 20.9+ dan npm.

```bash
git clone git@github.com:evanazhr/evanazhr-portfolio.git
cd evanazhr-portfolio
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Scripts

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server dengan Turbopack. |
| `npm run build` | Membuat build produksi statis ke folder `out/`. |
| `npm run lint` | Memformat `src/` dengan Prettier lalu menjalankan ESLint. |
| `npm run lint:fix` | Sama seperti `npm run lint` (format + lint). |

Karena proyek memakai `output: "export"`, hasil build tidak dijalankan dengan `next start`. Untuk melihat hasil statisnya:

```bash
npm run build
npx serve out
# atau
python3 -m http.server 4173 -d out
```

## Struktur Proyek

```text
.
├── public/
│   ├── assets/                 # ikon, gambar, dan thumbnail proyek
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── blogs/
│   │   │   ├── page.tsx
│   │   │   └── tutorial-html/page.mdx
│   │   ├── projects/page.tsx
│   │   ├── tech/page.tsx
│   │   ├── layout.tsx          # layout root, font, metadata, theme provider
│   │   ├── page.tsx            # Home
│   │   ├── not-found.tsx       # halaman 404
│   │   └── sitemap.ts
│   ├── assets/style/globals.css
│   ├── components/
│   │   ├── animation/          # fade-in halaman
│   │   ├── ui/                 # primitif shadcn/ui
│   │   ├── terminal-shell.tsx
│   │   ├── terminal-heading.tsx
│   │   ├── project.tsx
│   │   ├── tech-icons.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── contact.tsx
│   ├── data/
│   │   ├── profile.ts          # skill, perjalanan, sertifikasi
│   │   ├── projects.ts         # daftar proyek
│   │   └── tech-stack.ts       # registry ikon & tech unggulan
│   ├── lib/                    # theme provider & utilitas
│   └── mdx-components.tsx
├── next.config.ts              # Next.js + MDX + static export
├── vercel.json
└── wrangler.jsonc              # konfigurasi Cloudflare
```

## Mengubah Konten

- **Profil, skill, perjalanan, sertifikasi** → `src/data/profile.ts`
- **Daftar proyek** → `src/data/projects.ts`
- **Ikon dan tech unggulan** → `src/data/tech-stack.ts`
- **Tulisan blog**
  1. Buat folder `src/app/blogs/<slug>/` dengan file `page.mdx`.
  2. Tambahkan entri pada array `posts` di `src/app/blogs/page.tsx`.
  3. Simpan gambar pendukung di `public/assets/`.
- **Metadata SEO, Open Graph, dan JSON-LD** → `src/app/layout.tsx`
- **Warna, tipografi, dan utilitas visual** → `src/assets/style/globals.css`

## Deployment

Build menghasilkan situs statis di `out/`.

### Cloudflare

```bash
npm run build
npx wrangler deploy
```

Konfigurasi aset ada di `wrangler.jsonc` (`./out`).

### Vercel

Hubungkan repositori ke Vercel dan gunakan `npm run build` sebagai build command. Konfigurasi tambahan ada di `vercel.json`.

## Kontak

- GitHub: [github.com/evanazhr](https://github.com/evanazhr)
- LinkedIn: [linkedin.com/in/evan-azhar-hartana](https://www.linkedin.com/in/evan-azhar-hartana/)
- Email: [evanazhr@gmail.com](mailto:evanazhr@gmail.com)
- Instagram: [instagram.com/evanazh](https://www.instagram.com/evanazh/)
