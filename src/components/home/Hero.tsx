import React from "react";
import { ArrowRight, Download, Linkedin, Send, Mail } from "lucide-react";
import { DIRECTOR_DATA, SOCIALS_DATA } from "@/lib/data";

export const Hero = () => {
  const { hero } = DIRECTOR_DATA;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-primary/5 -z-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-primary/20 text-primary-dark font-bold shadow-sm">
            👋 {hero.role}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-foreground)] leading-tight">
            {hero.name}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] leading-relaxed font-light">
            {hero.tagline}
          </p>
          <p className="text-md text-[var(--color-text-muted)] max-w-xl mx-auto md:mx-0 opacity-90">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 font-bold hover:scale-105 active:scale-95 cursor-pointer"
            >
              {hero.cta} <ArrowRight size={20} />
            </a>

            <a
              href="/cv.pdf"
              download="Alina_Riabova_Director_CV.pdf"
              className="flex items-center justify-center gap-2 bg-white text-[var(--color-foreground)] border-2 border-primary/20 px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all shadow-sm font-medium cursor-pointer"
            >
              <Download size={20} /> Завантажити CV
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
            <a
              href={SOCIALS_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[#0077b5] transition-colors transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={SOCIALS_DATA.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[#229ED9] transition-colors transform hover:scale-110"
            >
              <Send size={28} />
            </a>
            <a
              href={SOCIALS_DATA.email}
              className="text-[var(--color-text-muted)] hover:text-accent transition-colors transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary/10 mt-8">
            {hero.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary-dark">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative flex justify-center z-10">
          <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[520px]">
            <div className="absolute inset-0 border-[3px] border-accent/30 rounded-[2.5rem] transform rotate-6 translate-x-4"></div>
            <div className="absolute inset-0 border-[3px] border-primary/30 rounded-[2.5rem] transform -rotate-3 -translate-x-4"></div>

            <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 relative">
              <img
                src="/photo.jpg"
                alt="Аліна Рябова"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
