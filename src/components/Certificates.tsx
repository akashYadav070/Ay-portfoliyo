import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Certificates</h2>
          <p className="text-muted-foreground">
            My professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-card shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">
                    {certificate.title}
                  </h3>
                </div>

                <p className="font-medium">{certificate.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {certificate.issuer}
                </p>

                <p className="text-sm mt-3">
                  <b>Project:</b> {certificate.project}
                </p>

                <p className="text-sm text-muted-foreground mt-2">
                  {certificate.date}
                </p>

                <p className="text-sm mt-3">{certificate.description}</p>

                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg border hover:bg-accent transition"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}