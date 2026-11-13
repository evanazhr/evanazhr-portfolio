import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { projectItems } from "@/data/projects";

export default function Project() {
  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projectItems.map((item) => (
        <li key={item.title}>
          <article className="border-border bg-card/40 hover:border-primary/40 flex h-full flex-col rounded-sm border transition-colors">
            <div className="border-border bg-muted/20 relative aspect-[16/10] overflow-hidden border-b">
              {item.thumbnail ? (
                <Image
                  src={item.thumbnail}
                  width={600}
                  height={375}
                  sizes="(min-width: 1280px) 300px, (min-width: 768px) 45vw, 100vw"
                  alt={`Pratinjau antarmuka ${item.title}`}
                  className="size-full object-cover"
                />
              ) : (
                <div className="text-muted-foreground flex size-full flex-col items-center justify-center gap-2 font-mono text-[11px]">
                  <ImageIcon className="size-6 opacity-50" aria-hidden="true" />
                  <span>preview belum tersedia</span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h2 className="text-lg leading-snug font-semibold">
                {item.title}
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {item.description}
              </p>

              <div className="mt-auto pt-5">
                <p className="text-muted-foreground font-mono text-[11px]">
                  <span className="sr-only">Teknologi: </span>
                  {item.tech.join(" / ")}
                </p>

                {(item.link || item.repo) && (
                  <div className="border-border mt-4 flex gap-5 border-t pt-3 font-mono text-[11px]">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-demo-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                        aria-label={`Buka demo ${item.title} di tab baru`}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        demo
                      </a>
                    )}
                    {item.repo && (
                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`project-repo-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                        aria-label={`Buka kode sumber ${item.title} di tab baru`}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
