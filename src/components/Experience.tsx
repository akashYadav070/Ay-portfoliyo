import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="space-y-6">
        {experience.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
          >
            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Briefcase className="size-3" />
                  {e.role}
                </div>
                <h3 className="text-xl font-bold md:text-2xl">{e.company}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {e.location}
                </p>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                {e.duration}
              </span>
            </div>
            <ul className="space-y-2">
              {e.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
