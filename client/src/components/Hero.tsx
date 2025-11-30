import { motion } from "framer-motion";
import videoSrc from "@assets/generated_videos/cinematic_coastal_drive_in_northeast_brazil.mp4";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-10" />
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md">
            24h Turismo e Executivo
          </span>
          <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
            Viaje com <br />
            <span className="text-gradient">Excelência</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl font-light">
            Transfers, passeios e transporte executivo pelo litoral nordestino.
            Conforto, segurança e pontualidade 24 horas por dia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10"
        >
          <a
            href="#servicos"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3 text-sm font-bold text-background transition-all hover:bg-primary/90 hover:scale-105"
          >
            Começar a Jornada
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
