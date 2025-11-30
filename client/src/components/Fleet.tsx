import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import suvImg from "@assets/generated_images/luxury_black_suv.png";
import sedanImg from "@assets/generated_images/executive_black_sedan.png";
import vanImg from "@assets/generated_images/modern_transfer_van.png";
import { CheckCircle2 } from "lucide-react";

const fleet = [
  {
    title: "SUV de Luxo",
    desc: "Para quem busca o máximo em conforto e status.",
    image: suvImg,
    features: ["Ar-condicionado Dual Zone", "Bancos de Couro", "Wi-Fi a Bordo"],
  },
  {
    title: "Sedan Executivo",
    desc: "Ideal para transfer corporativo e viagens rápidas.",
    image: sedanImg,
    features: ["Privacidade", "Carregador USB", "Água Mineral"],
  },
  {
    title: "Van Premium",
    desc: "Perfeito para grupos, famílias e city tours.",
    image: vanImg,
    features: ["Capacidade 15+ Lugares", "TV & Som", "Amplo Bagageiro"],
  },
];

function FleetCard({ car, index }: { car: typeof fleet[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col items-center gap-8 py-4 md:flex-row ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        <motion.div style={{ y }} className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img
            src={car.image}
            alt={car.title}
            className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>

      <div className="flex-1 px-6 md:px-12">
        <h3 className="font-display text-3xl font-bold text-white md:text-5xl">{car.title}</h3>
        <p className="mt-3 text-lg text-gray-400">{car.desc}</p>
        <ul className="mt-6 space-y-4">
          {car.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Fleet() {
  return (
    <section className="relative py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white md:text-6xl">
            Nossa <span className="text-gradient">Frota</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Veículos modernos, higienizados e revisados para sua segurança.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {fleet.map((car, i) => (
            <FleetCard key={i} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
