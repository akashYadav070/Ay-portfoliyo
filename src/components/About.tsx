import { Section } from "./Section";
import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Who I Am",
    body: "A curious developer who loves turning ideas into clean, working products. I care about details, performance, and great UX.",
  },
  {
    icon: Target,
    title: "Career Objective",
    body: "To grow as a Full Stack Engineer building scalable products, contributing to teams that ship meaningful software.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "MCA at JECRC University. BCA from University of Rajasthan. Always learning new tech.",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A quick intro.">
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
          >
            <div className="mb-4 inline-flex rounded-xl bg-white text-primary-foreground p-3 shadow-glow">
              <c.icon className=" size-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
