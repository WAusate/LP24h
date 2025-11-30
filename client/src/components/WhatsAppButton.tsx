import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5581999999999" // Replace with actual number if provided, otherwise placeholder
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-green-500"
        />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/50 transition-transform hover:scale-110">
          <MessageCircle className="h-8 w-8 text-white fill-white" />
        </div>
        <span className="absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-sm font-bold text-green-900 shadow-md opacity-0 transition-opacity group-hover:opacity-100 hidden md:block">
          Fale Conosco Agora
        </span>
      </div>
    </motion.a>
  );
}
