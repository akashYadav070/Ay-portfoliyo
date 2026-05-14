import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
          >
            <div className="mb-5 flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gradient-primary text-primary-foreground">
              <span className="font-display text-3xl font-bold opacity-90">
                {p.title.split(" ")[0]}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold">{p.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <ul className="mb-5 space-y-1.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-2">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <ExternalLink className="size-3.5" />
                  Live Demo
                </a>
              )}
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Github className="size-3.5" />
                Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
