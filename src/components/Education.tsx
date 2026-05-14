import { motion } from "framer-motion";
import { GraduationCap, Languages as LangIcon } from "lucide-react";
import { Section } from "./Section";
import { education, languages } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education & Languages" title="Background.">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-3">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/40"
            >
              <div className="rounded-lg bg-gradient-primary p-3 text-primary-foreground">
                <GraduationCap className="size-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{ed.degree}</h3>
                <p className="text-sm text-muted-foreground">{ed.school}</p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                {ed.detail}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="mb-4 inline-flex rounded-lg bg-gradient-primary p-3 text-primary-foreground">
            <LangIcon className="size-5" />
          </div>
          <h3 className="mb-4 text-lg font-semibold">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <span
                key={l}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-medium"
              >
                {l}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
