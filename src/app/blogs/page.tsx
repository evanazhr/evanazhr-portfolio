import Link from "next/link";

const posts = [
  {
    title: "Mengenal HTML: struktur dasar halaman web",
    description:
      "Mulai belajar HTML dari kerangka dokumen, elemen, hingga membuat halaman Hello World sederhana.",
    date: "2026-11-08",
    category: "Tutorial",
    href: "/blogs/tutorial-html",
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-28 pb-24 md:pt-36 lg:px-8">
      <header className="mb-12 max-w-2xl">
        <p className="text-primary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
          Catatan dan tutorial
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
        <p className="text-muted-foreground mt-5 text-lg leading-8">
          Tempat saya berbagi hal yang sedang dipelajari seputar web
          development, dari catatan kecil sampai tutorial praktis.
        </p>
      </header>

      <section aria-labelledby="latest-posts">
        <div className="mb-5 flex items-center justify-between">
          <h2 id="latest-posts" className="text-xl font-semibold">
            Tulisan terbaru
          </h2>
          <span className="text-muted-foreground text-sm">
            {posts.length} tulisan
          </span>
        </div>
        <div className="grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group border-border/70 bg-card/60 hover:border-primary/50 hover:bg-card rounded-2xl border p-6 transition-colors sm:p-8"
            >
              <div className="text-muted-foreground mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(`${post.date}T00:00:00`))}
                </time>
                <span aria-hidden="true">·</span>
                <span className="text-primary">{post.category}</span>
              </div>
              <h3 className="group-hover:text-primary text-2xl font-semibold tracking-tight transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mt-3 max-w-2xl leading-7">
                {post.description}
              </p>
              <span className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Baca tulisan <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
