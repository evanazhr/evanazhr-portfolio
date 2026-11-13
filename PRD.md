# PRD — Portfolio Evan Azhar Hartana

Dokumen ini menjelaskan tujuan, kebutuhan, dan arah desain situs portofolio. Untuk cara menjalankan, mengubah konten, dan deployment, lihat [README.md](./README.md).

## 1. Ringkasan

Situs portofolio pribadi untuk Evan Azhar Hartana, mahasiswa Sistem Komputer Universitas Pamulang yang berfokus pada pengembangan web full stack. Situs berfungsi sebagai profil profesional, bukti belajar, dan etalase proyek dalam satu pengalaman bertema terminal.

## 2. Latar belakang

Portofolio dibutuhkan untuk:

- Memberi rekruter dan kolaborator gambaran cepat tentang profil, kemampuan, dan proyek.
- Menunjukkan cara berpikir dan kualitas eksekusi melalui desain serta kode situs itu sendiri.
- Menjadi tempat publikasi catatan dan tutorial sambil belajar web development.

## 3. Tujuan

1. Menyampaikan identitas, fokus, dan status ketersediaan dalam waktu kurang dari satu menit.
2. Memudahkan akses ke proyek, tech stack, dan bukti belajar (perjalanan serta sertifikasi).
3. Menyediakan ruang publikasi artikel yang sederhana dan konsisten dengan identitas situs.
4. Menjaga situs tetap ringan, statis, mudah dirawat, dan aksesibel.

### Non-goals

- Bukan aplikasi dengan autentikasi, dashboard, atau database.
- Tidak ada formulir kontak dengan backend; kontak memakai tautan langsung.
- Tidak menargetkan multi-penulis, komentar, atau CMS pada versi ini.

## 4. Target pengguna

| Pengguna | Kebutuhan utama |
| --- | --- |
| Rekruter / hiring manager | Ringkasan profil, status ketersediaan, proyek, dan kontak yang cepat diakses |
| Sesama developer | Detail tech stack, sumber proyek, dan tulisan teknis |
| Dosen / mentor | Perjalanan belajar, sertifikasi, dan bukti pengerjaan proyek |

## 5. Arsitektur informasi

Satu section = satu halaman. Setiap halaman memenuhi satu layar dan memakai panel terminal dengan area konten yang bisa di-scroll.

| Route | Tujuan halaman | Konten utama |
| --- | --- | --- |
| `/` | Perkenalan | Nama, ringkasan, role, fokus, lokasi, status, perintah cepat, kontak, avatar |
| `/about` | Konteks personal | Narasi singkat, fakta profil, tautan ke tech dan projects |
| `/tech` | Bukti kemampuan | Ikon tech, kelompok skill + level, perjalanan belajar, sertifikasi |
| `/projects` | Bukti eksekusi | Kartu proyek, thumbnail, teknologi, tautan demo/sumber |
| `/blogs` | Indeks tulisan | Tanggal, kategori, judul, ringkasan, tautan baca |
| `/blogs/tutorial-html` | Artikel | Metadata artikel, judul, isi MDX, blok kode |
| fallback 404 | Pemulihan navigasi | Pesan error bergaya shell, tautan ke halaman utama, proyek, dan blog |

Navigasi global berisi lima item: Home, About, Tech, Projects, Blogs. Item aktif ditandai dengan `aria-current="page"` dan aksen warna.

## 6. Kebutuhan fungsional

### 6.1 Navigasi dan kerangka global

- Navbar desktop di atas; navigasi berlabel di bawah untuk mobile.
- Tema default gelap, dapat diganti ke terang, dan pilihan tersimpan antar kunjungan.
- Footer status bar di desktop berisi tahun, teknologi, dan tautan kontak.
- Skip link menuju konten utama.
- Panel terminal menampilkan prompt `evan@portfolio`, path halaman, dan area scroll yang dapat difokuskan dengan keyboard.

### 6.2 Home

- Menampilkan `h1` berisi nama lengkap.
- Menampilkan ringkasan satu kalimat, role, fokus, lokasi, dan status ketersediaan.
- Menyediakan perintah cepat ke About, Tech, dan Projects.
- Menampilkan tautan GitHub, LinkedIn, Email, dan Instagram.
- Avatar ditampilkan sebagai gambar prioritas dengan ukuran responsif.

### 6.3 About

- Narasi singkat tentang latar pendidikan dan minat.
- Tabel fakta: status, fokus, pendidikan, lokasi.
- Tautan lanjutan ke halaman Tech dan Projects.

### 6.4 Tech & Journey

- Menampilkan tech unggulan beserta ikon dan label.
- Kelompok skill ditampilkan sebagai baris data: nama kelompok, daftar skill, level.
- Perjalanan belajar ditampilkan kronologis dengan tanggal, judul, organisasi, dan deskripsi.
- Sertifikasi ditampilkan sebagai daftar dengan penanda selesai.

### 6.5 Projects

- Menampilkan seluruh proyek dari data terpusat.
- Setiap kartu berisi judul, deskripsi, daftar teknologi, serta tautan demo dan/atau sumber bila tersedia.
- Proyek tanpa thumbnail menampilkan placeholder yang jelas.

### 6.6 Blog

- Indeks menampilkan tanggal, kategori, judul, dan ringkasan tiap tulisan.
- Artikel memakai MDX, mendukung metadata judul/deskripsi, heading, daftar, dan blok kode.
- Artikel menyediakan tautan kembali ke indeks blog.

### 6.7 Tema

- Default gelap tanpa flash saat halaman dimuat.
- Mode terang memakai token warna terpisah, bukan inversi otomatis.
- Tombol tema punya label aksesibel yang berubah sesuai mode aktif.

## 7. Arah desain

### Identitas

Terminal/CLI sebagai metafora utama: panel, prompt, perintah, baris data, dan status bar. Struktur dan tipografi menjadi pembawa karakter; dekorasi diminimalkan.

### Palet

| Token | Gelap | Terang | Penggunaan |
| --- | --- | --- | --- |
| Background | `#080b09` | `#f5f6f3` | Latar halaman |
| Panel | `#0e120f` | `#fdfefc` | Permukaan panel terminal |
| Foreground | `#ebece6` | `#121813` | Teks utama |
| Muted foreground | `#a2a69e` | `#515752` | Teks sekunder |
| Primary (amber) | `#f6b933` | `#9e6300` | Prompt, aksen, tautan |
| Success | `#85c9a1` | `#2e734f` | Status tersedia |

Garis pemisah memakai warna foreground dengan opasitas rendah. Tidak ada gradient dekoratif, glow, atau bayangan kartu.

### Tipografi

- **Archivo** untuk display dan teks UI.
- **IBM Plex Mono** untuk perintah, label, metadata, dan data.
- Skala kecil dan disiplin: mono 9–13px, body 15–17px, display 32–56px.
- Lebar baris konten dijaga di bawah ~70 karakter.

### Layout

- Panel terminal satu layar dengan topbar dan area konten scroll.
- Hero Home asimetris (teks 7 kolom, avatar 5 kolom), bukan hero tengah.
- Skill, perjalanan, dan sertifikasi memakai baris/tabel, bukan grid kartu.
- Radius kecil dan konsisten; hierarki dibangun lewat garis, jarak, dan tipografi.

### Motion

- Satu fade-in halus saat halaman dimuat.
- Transisi hover hanya untuk warna/opasitas.
- Semua animasi dinonaktifkan saat `prefers-reduced-motion: reduce`.

## 8. Kebutuhan non-fungsional

### Responsif

- Berfungsi dari lebar 320px hingga desktop lebar tanpa horizontal scroll.
- Navigasi berubah dari bottom bar (mobile) ke header (desktop).
- Padding aman untuk perangkat dengan home indicator (`safe-area-inset`).

### Aksesibilitas

- Satu `h1` per halaman dan hierarki heading yang berurutan.
- Landmark semantik: `header`, `nav`, `main`, `footer`, `section`, `article`.
- Semua kontrol dapat dijangkau keyboard dengan `focus-visible` yang jelas.
- Skip link berfungsi dan memindahkan fokus ke `main`.
- Ikon dekoratif memakai `aria-hidden`; tautan ikon memiliki label.
- Kontras teks memenuhi WCAG AA.
- Tidak ada ID duplikat dalam satu halaman.
- Preferensi reduced motion dihormati.

### SEO

- Metadata judul dan deskripsi per halaman.
- Open Graph dan Twitter Card.
- JSON-LD `Person`.
- `sitemap.xml` mencakup seluruh halaman publik.
- `robots.txt` tersedia di `public/` dan menunjuk ke sitemap.

### Performa dan batasan teknis

- Static export (`output: "export"`), tanpa server runtime.
- Font di-self-host melalui `next/font`.
- Gambar memakai `next/image` dengan `sizes`; hero memakai `priority`.
- JavaScript client dibatasi pada navbar/tema dan fade-in.

## 9. Model konten

| Sumber | Isi |
| --- | --- |
| `src/data/profile.ts` | `skillGroups`, `journeyItems`, `certifications` |
| `src/data/projects.ts` | Daftar proyek: judul, deskripsi, thumbnail, tautan, teknologi |
| `src/data/tech-stack.ts` | Registry ikon dan daftar tech unggulan |
| `src/app/blogs/page.tsx` | Array `posts` untuk indeks blog |
| `src/app/blogs/<slug>/page.mdx` | Isi artikel dan metadata |

Menambah artikel berarti menambah folder MDX dan satu entri `posts`. Tidak ada langkah build khusus di luar `npm run build`.

## 10. Kriteria penerimaan

- [x] Seluruh halaman publik dapat diakses dari navigasi.
- [x] Build statis selesai tanpa error dan menghasilkan route yang diharapkan.
- [x] Setiap halaman memiliki tepat satu `h1`.
- [x] Tema gelap aktif secara default dan pilihan tema tersimpan.
- [x] Layout berfungsi di mobile 320px dan desktop.
- [x] Navigasi, tautan, dan tombol tema dapat dioperasikan dengan keyboard.
- [x] Tidak ada ID duplikat pada halaman yang diperiksa.
- [x] Kontras teks utama lolos WCAG AA.
- [x] `prefers-reduced-motion` menonaktifkan animasi.
- [x] `sitemap.xml` dan `robots.txt` tersedia di hasil build.

## 11. Di luar cakupan

- CMS atau panel admin.
- Formulir kontak dengan pengiriman email.
- Pencarian, filter, tag, dan pagination blog.
- Komentar dan multi-bahasa.
- Analytics dan pelacakan pengguna.
- RSS feed.

## 12. Rencana lanjutan

- Menambah artikel dan kategori saat konten bertumbuh.
- RSS feed dan halaman tag bila jumlah tulisan sudah cukup.
- Evaluasi view transition atau navigasi halaman tanpa reload penuh.
