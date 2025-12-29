import React from "react";
import { DIRECTOR_DATA } from "@/lib/data";
import { Quote } from "lucide-react";

export const Summary = () => {
  const { cv_summary } = DIRECTOR_DATA;

  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="relative bg-[var(--color-background)] rounded-[2rem] p-8 md:p-14 border border-primary/10 shadow-xl shadow-primary/5">
      
          <div className="absolute -top-6 left-8 bg-gradient-to-r from-primary to-primary-dark text-white p-4 rounded-2xl shadow-lg transform rotate-3">
            <Quote size={32} />
          </div>

          <h2 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 mt-4">
            {cv_summary.title}
          </h2>

          <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
            {cv_summary.text}
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-1.5 w-16 bg-accent rounded-full"></div>
            <span className="text-sm font-bold text-primary-dark uppercase tracking-widest">
              Мій підхід до роботи
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
