import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Section } from "./Section";
import { personal } from "@/data/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") ?? ""));
    const body = encodeURIComponent(
      `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const items = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: "Location", value: personal.location },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {items.map((it, i) => (
            <motion.a
              key={it.label}
              href={it.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="rounded-xl bg-blue-400 p-3 text-white">
                <it.icon className="size-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {it.label}
                </p>
                <p className="font-medium">{it.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" required />
            <Field name="email" label="Email" type="email" required />
          </div>
          <Field name="subject" label="Subject" required />
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
           className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-400 px-6 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.02] sm:w-auto"
          >
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
            {sent ? "Opening mail…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
