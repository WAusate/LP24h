import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Testimonials } from "@/components/Testimonials";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <div id="frota">
        <Fleet />
      </div>
      <Testimonials />
      
      <section id="contato" className="py-20 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">Pronto para viajar?</h2>
              <p className="text-gray-400 mb-8 text-lg">
                Entre em contato agora mesmo e agende seu transfer ou passeio com a melhor empresa do Nordeste.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <span>Atendimento 24h</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <span>Recife, Porto de Galinhas, Maragogi e Região</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <span>contato@24hturismo.com.br</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Instagram size={20} />
                  </div>
                  <span>@24hturismo</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Nome</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">WhatsApp</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Mensagem</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="Gostaria de um orçamento para..." />
                </div>
                <button className="w-full bg-primary text-background font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Solicitar Orçamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2025 24h Turismo e Executivo. Todos os direitos reservados. Cadastur 50.804.389/0001-04</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
