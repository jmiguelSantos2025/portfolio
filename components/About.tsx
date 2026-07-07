"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Briefcase, Code } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Anos exp.", value: "1+" },
  { label: "Projetos", value: "2+" },
  { label: "Tecnologias", value: "8+" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Sobre mim
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Quem sou eu
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-3xl border border-emerald-500/15 overflow-hidden relative">
                <Image
                  src="/foto_perfil.jpg"
                  alt="João Miguel"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-[#111] border border-emerald-500/20 rounded-2xl flex items-center justify-center shadow-xl">
                <Code className="text-emerald-400" size={26} />
              </div>

              <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#111] border border-white/5 rounded-2xl flex items-center justify-center shadow-xl">
                <Briefcase className="text-zinc-400" size={20} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Desenvolvedor de software e entusiasta da tecnologia
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Meu nome é João Miguel, desenvolvedor de software residente em Manaus, AM. Com mais de
              1 ano de experiência, crio aplicações React Native e com outras tecnologias integrando
              Banco de Dados, IA e visão computacional.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Combino conhecimentos técnicos e necessidades dos clientes  para entregar
              produtos que resolvam dores do mercado
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: MapPin, text: "Manaus, AM — Brasil" },
                { icon: Calendar, text: "1+ ano de experiência" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-zinc-400 text-sm">
                  <Icon size={15} className="text-emerald-400 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-white/[0.04] rounded-2xl border border-white/5 text-center"
                >
                  <div className="text-2xl font-bold text-emerald-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
