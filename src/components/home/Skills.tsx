import React from "react";
import { DIRECTOR_DATA } from "@/lib/data";

export const Skills = () => {
  const { skills } = DIRECTOR_DATA;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[var(--color-background)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-foreground)] mb-6">
            Ключові Компетенції
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Поєднання жорстких стандартів фармацевтичної якості та гнучких
            методів управління персоналом
          </p>
        </div>

      
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-8 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border border-primary/5 hover:-translate-y-1 group"
            >
           
              <div className="w-16 h-16 bg-[var(--color-background)] text-primary-dark rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <skillGroup.icon size={32} />
              </div>

              <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
                {skillGroup.category}
              </h3>

              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[var(--color-text-muted)] font-medium"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
