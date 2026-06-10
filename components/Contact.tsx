"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jmiguel2021nt@gmail.com",
    href: "mailto:jmiguel2021nt@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (92) 99508-6720",
    href: "tel:+5592995086720",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Manaus, AM — Brasil",
    href: null,
  },
];

const socialLinks = [
  { href: "https://github.com/jmiguelSantos2025", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/joaomiguelsantos2025", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://instagram.com/jm_santos_oficial", icon: InstagramIcon, label: "Instagram" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Contato
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Vamos Trabalhar Juntos?
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-5 rounded-full" />
          <p className="text-zinc-500 mt-5 max-w-md mx-auto text-sm leading-relaxed">
            Tem um projeto em mente ou quer apenas bater um papo? Estou disponível
            para freelances e oportunidades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Informações</h3>

            <div className="flex flex-col gap-3 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-white/[0.04] rounded-2xl border border-white/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-zinc-600 text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white text-sm font-medium hover:text-emerald-400 transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-zinc-600 text-xs uppercase tracking-widest mb-4">
                Redes Sociais
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/5 rounded-xl text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all text-sm"
                  >
                    <Icon size={15} />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="João Silva"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/8 rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.06] transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="joao@email.com"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/8 rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.06] transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Conte sobre seu projeto ou ideia..."
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/8 rounded-xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.06] transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading || submitted}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm"
              >
                {submitted ? (
                  "Mensagem enviada! ✓"
                ) : loading ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send size={15} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-6xl mx-auto text-center mt-20 pt-8 border-t border-white/5"
      >
        <p className="text-zinc-700 text-sm">
          © 2025 João Miguel · Feito com Next.js, React & TypeScript
        </p>
      </motion.div>
    </section>
  );
}
