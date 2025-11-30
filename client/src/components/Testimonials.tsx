import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Silva",
    role: "Turista - São Paulo",
    text: "Simplesmente incrível! O motorista foi super pontual e educado. O carro estava impecável.",
  },
  {
    name: "Carlos Eduardo",
    role: "Executivo",
    text: "Uso para todas as minhas viagens a negócios em Recife. Profissionalismo nota 1000.",
  },
  {
    name: "Mariana & Pedro",
    role: "Lua de Mel",
    text: "Fizemos o passeio para Maragogi e foi mágico. A equipe cuidou de tudo. Recomendo!",
  },
  {
    name: "Fernanda Lima",
    role: "Família",
    text: "Segurança total para viajar com crianças. Cadeirinhas novas e motorista muito prudente.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="font-display text-4xl font-bold text-white">
          Experiências <span className="text-primary">Reais</span>
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-8 min-w-max px-4"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] glass-panel rounded-2xl p-8 relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-6 font-light italic leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
