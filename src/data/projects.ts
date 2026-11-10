export interface ProjectItem {
  title: string;
  description: string;
  thumbnail?: string;
  link: string;
  repo: string;
  tech: string[]; // Mengacu pada kunci (key) di techRegistry (misal: "NextJs", "React")
}

export const projectItems: ProjectItem[] = [
  {
    title: "NutriCitra",
    description:
      "Platform untuk mengenali makanan melalui foto, memperkirakan nutrisi dan kalori dengan model AI, memantau asupan, serta memberi rekomendasi buah.",
    link: "https://nutri-citra-project-6eik.vercel.app",
    repo: "",
    tech: ["React", "Express.js", "TailwindCSS", "Supabase"],
  },
  {
    title: "PipeFoundation Mobile App",
    description:
      "Aplikasi mobile internal PT Krakatau Pipe Industries untuk berbagi pengetahuan secara online, sebagai versi mobile dari platform yang dikelola tim IT KPI.",
    link: "",
    repo: "https://github.com/evanazhr/kpi_pipefondation",
    tech: ["React Native", "Javascript", "WebView"],
  },
  {
    title: "Aplikasi Kasir NextJs",
    description:
      "Aplikasi kasir modern yang dibuat dengan Next.js dan TypeScript. Dilengkapi fitur autentikasi aman dengan Clerk, integrasi payment gateway Xendit, dan manajemen stok produk secara real-time.",
    thumbnail: "/assets/thumbnails/pos-dashboard.png",
    link: "",
    repo: "https://github.com/evanazhr/simple-pos_nextjs.git",
    tech: ["NextJs", "React", "Typescript", "TailwindCSS"],
  },
  {
    title: "Collosal Landing Page",
    description:
      "Slicing antarmuka web modern berkinerja tinggi untuk Landing Page Agensi Kreatif 'Collosal' berdasarkan desain profesional dari codedesign.dev.",
    thumbnail: "/assets/thumbnails/collosal.png",
    link: "https://collosal-landing-page-three.vercel.app/",
    repo: "https://github.com/evanazhr/collosal-landing-page.git",
    tech: ["NextJs", "React", "Typescript", "TailwindCSS"],
  },
  {
    title: "Slicing UI suxz-codedesign.dev",
    description:
      "Latihan slicing UI secara manual untuk platform e-learning Suxz menggunakan Vue.js dan Tailwind CSS.",
    thumbnail: "/assets/thumbnails/suxz.png",
    link: "https://suxz-codedesign-dev.vercel.app/",
    repo: "https://github.com/evanazhr/suxz-codedesign.dev.git",
    tech: ["Javascript", "VueJs", "TailwindCSS"],
  },
  {
    title: "Simple Realtime Chat App",
    description:
      "Aplikasi ruang obrolan (chatting) terdistribusi yang bekerja secara real-time menggunakan protokol komunikasi WebSocket dengan desain antarmuka modern.",
    thumbnail: "/assets/thumbnails/chat-app-ui.png",
    link: "",
    repo: "https://github.com/evanazhr/simple-realtime-chat-app.git",
    tech: ["Javascript", "TailwindCSS"],
  },
  {
    title: "Bouncing Hello World",
    description:
      "Sebuah proyek eksperimen fisika kanvas sederhana yang memantulkan teks 'Hello World' di layar menggunakan teknologi dasar HTML dan CSS vanilla.",
    thumbnail: "/assets/thumbnails/bouncing-hello-world.png",
    link: "https://bounced-hello-world.vercel.app/",
    repo: "https://github.com/evanazhr/hello-world.git",
    tech: ["HTML", "CSS"],
  },
  // Tambahkan project baru di sini di masa mendatang:
  // {
  //   title: "Nama Proyek Baru",
  //   description: "Deskripsi singkat mengenai proyek baru Anda.",
  //   thumbnail: "/assets/thumbnails/nama-file-gambar.png",
  //   link: "https://tautan-live-demo.com",
  //   repo: "https://github.com/evanazhr/repositori-anda",
  //   tech: ["React", "Typescript"],
  // }
];
