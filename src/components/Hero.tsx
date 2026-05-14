import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { personal } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1fr_auto] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Available for opportunities
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-primary">{personal.name.split(" ")[0]}</span>.
            <br />I build for the web.
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground md:text-xl">
            {personal.title}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {personal.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="size-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { icon: Github, href: personal.github, label: "GitHub" },
              { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative size-64 overflow-hidden rounded-full border-4 border-primary md:size-80">
            <img
              src={profile}
              alt={personal.name}
              width={768}
              height={768}
              className="size-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
