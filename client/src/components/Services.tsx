import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import portoImg from "@assets/generated_images/porto_de_galinhas_natural_pools.png";
import maragogiImg from "@assets/generated_images/maragogi_beach.png";
import recifeImg from "@assets/generated_images/recife_skyline_and_beach.png";

const services = [
  {
    id: 1,
    title: "Porto de Galinhas",
    category: "Passeios & Transfers",
    image: portoImg,
    description: "Mergulhe nas piscinas naturais mais famosas do Brasil.",
  },
  {
    id: 2,
    title: "Maragogi",
    category: "Caribe Brasileiro",
    image: maragogiImg,
    description: "Águas cristalinas e bancos de areia inesquecíveis.",
  },
  {
    id: 3,
    title: "Recife & Olinda",
    category: "City Tour",
    image: recifeImg,
    description: "História, cultura e modernidade em um só roteiro.",
  },
];

function Card({ item }: { item: typeof services[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full cursor-pointer rounded-xl bg-card"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-background/50 shadow-lg"
      >
        {/* Image Background */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover opacity-60 transition-opacity duration-500 hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
            {item.category}
          </p>
          <h3 className="font-display text-3xl font-bold text-white">{item.title}</h3>
          <p className="mt-4 text-sm text-gray-300">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-background relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
       <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-white md:text-6xl"
          >
            Destinos <span className="text-primary">&</span> Experiências
          </motion.h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore o melhor do Nordeste com quem entende de hospitalidade.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 perspective-1000">
          {services.map((service) => (
            <div key={service.id} className="flex justify-center">
              <Card item={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
