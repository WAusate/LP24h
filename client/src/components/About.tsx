import { motion } from "framer-motion";
import driverImg from "@assets/generated_images/professional_chauffeur_with_luxury_car.png";

export function About() {
  return (
    <section className="py-20 bg-background text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={driverImg}
            alt="Motorista e Frota 24h Turismo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre <span className="text-gradient">Nossa História</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Tudo começou com uma ideia simples: tratar cada viagem como se fosse
            a nossa própria. Quem chega ao Nordeste busca mais do que um
            deslocamento — busca tranquilidade, segurança e alguém que realmente
            cuide da jornada inteira.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            De um único carro a uma frota completa, crescemos mantendo um
            compromisso inegociável: acolher cada passageiro como convidado
            especial. Hoje atendemos famílias, casais, executivos e grupos,
            sempre com o mesmo cuidado e responsabilidade.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Não vendemos apenas um transfer. Vendemos a sensação de estar em
            boas mãos — com motoristas experientes, atendimento 24h e roteiros
            planejados sob medida.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
