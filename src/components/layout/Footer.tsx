import React from "react";
import { Linkedin, Send, Mail, ArrowUp, FileText } from "lucide-react";
import { SOCIALS_DATA } from "@/lib/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[var(--color-foreground)] text-white py-16 relative overflow-hidden"
    >
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Давайте <span className="text-accent">створювати</span> <br />
              успішні команди разом
            </h2>
            <p className="text-primary-100/80 text-lg max-w-md">
              Відкрита до пропозицій та обговорення нових викликів.
            </p>
          </div>

      
          <div className="flex flex-col gap-6 md:items-end">
         
            <a
              href={SOCIALS_DATA.email}
              className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-accent hover:border-accent transition-all group w-full md:w-auto md:min-w-[300px]"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-white/20 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-white/60 group-hover:text-white/80">
                  Написати листа
                </div>
                <div className="text-lg font-semibold truncate">
                  {SOCIALS_DATA.email.replace("mailto:", "")}
                </div>
              </div>
            </a>

      
            <div className="flex gap-4">
            
              <a
                href={SOCIALS_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl hover:bg-[#0077b5] hover:border-transparent transition-all group relative"
                title="LinkedIn"
              >
                <Linkedin size={28} />
              </a>

           
              <a
                href={SOCIALS_DATA.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl hover:bg-[#229ED9] hover:border-transparent transition-all group relative"
                title="Telegram"
              >
                <Send size={28} />
              </a>

             
              <a
                href={SOCIALS_DATA.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center border border-white/10 rounded-2xl hover:bg-white hover:text-[var(--color-foreground)] hover:border-transparent transition-all group relative"
                title="Переглянути резюме"
              >
                <FileText size={28} />
              </a>
            </div>
          </div>
        </div>

       
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {currentYear} Аліна Рябова. Всі права захищено.</p>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            Вгору <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
