import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: personal.github },
            { icon: Linkedin, href: personal.linkedin },
            { icon: Mail, href: `mailto:${personal.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Built with <span className="text-primary">React</span> &{" "}
          <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
