import Link from "next/link";
import TerminalShell from "@/components/terminal-shell";

export default function NotFound() {
  return (
    <TerminalShell path="404" label="Halaman tidak ditemukan">
      <div className="flex h-full flex-col justify-center gap-4">
        <p className="text-muted-foreground font-mono text-xs">
          <span className="text-primary" aria-hidden="true">
            $
          </span>{" "}
          cd ./halaman-ini
        </p>
        <h1 className="font-mono text-lg font-medium md:text-2xl">
          bash: cd: halaman-ini: No such file or directory
        </h1>
        <p className="text-muted-foreground max-w-[52ch] text-sm leading-6">
          Halaman yang kamu cari tidak ada atau sudah dipindahkan. Kembali ke
          awal, atau lihat daftar proyek dan tulisan.
        </p>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
          <Link
            href="/"
            className="text-primary underline-offset-4 hover:underline"
          >
            <span aria-hidden="true">$</span> cd ~
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
          >
            <span aria-hidden="true">$</span> ls projects/
          </Link>
          <Link
            href="/blogs"
            className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
          >
            <span aria-hidden="true">$</span> ls blog/
          </Link>
        </div>
      </div>
    </TerminalShell>
  );
}
