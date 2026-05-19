import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollTop } from "@/components/ScrollTop";
import Certificates from "../components/Certificates";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash Yadav — Full Stack MERN Developer" },
      {
        name: "description",
        content:
          "Portfolio of Akash Yadav — Full Stack MERN Developer building scalable web apps with React, Node.js, Express, and MongoDB.",
      },
      { property: "og:title", content: "Akash Yadav — Full Stack MERN Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Akash Yadav — Full Stack MERN Developer building scalable web apps.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
