# Portfolio Evan Azhar Hartana

Situs portofolio pribadi **Evan Azhar Hartana** — mahasiswa Sistem Komputer Universitas Pamulang yang berfokus pada pengembangan web full stack. Portofolio ini menampilkan profil, tech stack, perjalanan belajar, proyek, serta tulisan blog.

🔗 **Live:** [evanazhr.vercel.app](https://evanazhr.vercel.app)

## Fitur

- **Desain bertema terminal/CLI** dengan panel, prompt `evan@portfolio:~$`, dan status bar di setiap halaman.
- **Satu section = satu halaman** — Home, About, Tech & Journey, dan Projects masing-masing punya route sendiri dan tampil memenuhi satu layar seperti panel terminal.
- **Default dark mode** dengan opsi light mode menggunakan `next-themes`.
- **Responsif dan aksesibel** — navigasi desktop di atas, navigasi mobile berlabel di bawah, skip link, focus-visible, dan dukungan `prefers-reduced-motion`.
- **Data-driven** — profil, proyek, dan daftar teknologi dikelola di folder `src/data`.
- **Blog berbasis MDX** dengan halaman daftar tulisan dan halaman artikel.
- **Animasi** masuk, hover, dan spotlight card menggunakan Motion/Framer Motion.
- **SEO** — metadata Open Graph/Twitter, JSON-LD, sitemap, dan `robots.txt`.
- **Static export** — hasil build berupa HTML statis di folder `out/`.

## Tech Stack

| Kategori | Teknologi |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4, shadcn/ui, Base UI, Radix Slot |
| Bahasa | TypeScript |
| Animasi | Motion / Framer Motion |
| Tema | next-themes |
| Konten | MDX (`@next/mdx`) |
| Ikon | Lucide, Remixicon, React Icons |
| Utilitas | class-variance-authority, clsx, tailwind-merge, tailwind-variants |
| Kualitas kode | ESLint, Prettier + `prettier-plugin-tailwindcss` |

## Menjalankan Secara Lokal

**Prasyarat:** Node.js 20.9+ dan npm.

```bash
# clone repositori
git clone git@github.com:evanazhr/evanazhr-portfolio.git
cd evanazhr-portfolio

# install dependency
npm install

# jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Scripts

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server dengan Turbopack. |
| `npm run build` | Membuat build produksi statis ke folder `out/`. |
| `npm run lint` | Memformat `src/` dengan Prettier lalu menjalankan ESLint. |
| `npm run lint:fix` | Sama seperti `npm run lint` (format + lint). |

> Karena proyek menggunakan `output: "export"`, hasil build tidak dijalankan dengan `next start`. Untuk melihat hasil statisnya secara lokal, gunakan static file server, misalnya:
>
> ```bash
> npx serve out
> ```

## Struktur Proyek

```text
.
├── public/
│   ├── assets/               # gambar, ikon, dan thumbnail proyek
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── about/            # halaman About
│   │   ├── tech/             # halaman Tech Stack, Journey, & sertifikasi
│   │   ├── projects/         # halaman Projects
│   │   ├── blogs/            # halaman daftar blog + artikel MDX
│   │   ├── layout.tsx        # layout root, metadata SEO, theme provider
│   │   ├── page.tsx          # halaman Home
│   │   ├── not-found.tsx     # halaman 404 bertema terminal
│   │   └── sitemap.ts        # sitemap statis
│   ├── assets/style/         # global CSS & tema Tailwind
│   ├── components/
│   │   ├── animation/        # komponen animasi
│   │   ├── ui/               # komponen shadcn/ui
│   │   ├── terminal-shell.tsx   # panel terminal full-screen
│   │   ├── terminal-heading.tsx # judul bergaya perintah terminal
│   │   ├── project.tsx       # kartu proyek
│   │   ├── tech-icons.tsx    # ikon tech stack
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── contact.tsx
│   ├── data/
│   │   ├── profile.ts        # skill, sertifikasi, perjalanan
│   │   ├── projects.ts       # daftar proyek
│   │   └── tech-stack.ts     # registry ikon & featured tech
│   ├── lib/                  # theme provider & utilitas
│   ├── utils/                # helper (mis. pembacaan folder)
│   └── mdx-components.tsx    # komponen MDX
├── next.config.ts            # konfigurasi Next.js + MDX + static export
├── vercel.json
└── wrangler.jsonc            # konfigurasi deploy Cloudflare
```

## Mengubah Konten

- **Profil, skill, sertifikasi, dan journey** → `src/data/profile.ts`
- **Daftar proyek** → `src/data/projects.ts`
- **Ikon & featured tech stack** → `src/data/tech-stack.ts`
- **Tulisan blog**
  1. Buat folder baru di `src/app/blogs/<slug>/` dengan file `page.mdx`.
  2. Tambahkan entri tulisan pada array `posts` di `src/app/blogs/page.tsx`.
  3. Taruh gambar pendukung di `public/assets/` bila diperlukan.
- **Metadata SEO, Open Graph, dan JSON-LD** → `src/app/layout.tsx`

## Deployment

Proyek ini menghasilkan situs statis melalui `npm run build` (folder `out/`).

### Cloudflare

Konfigurasi tersedia di `wrangler.jsonc` dengan aset dari `./out`:

```bash
npm run build
npx wrangler deploy
```

### Vercel

Hubungkan repositori ke Vercel, lalu gunakan konfigurasi build yang ada (`npm run build`). Konfigurasi tambahan berada di `vercel.json`.

## Kontak

- GitHub: [github.com/evanazhr](https://github.com/evanazhr)
- LinkedIn: [linkedin.com/in/evan-azhar-hartana](https://www.linkedin.com/in/evan-azhar-hartana/)
- Email: [evanazhr@gmail.com](mailto:evanazhr@gmail.com)
- Instagram: [instagram.com/evanazh](https://www.instagram.com/evanazh/)
