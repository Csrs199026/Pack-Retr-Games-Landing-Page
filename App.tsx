import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  WifiOff, 
  Zap, 
  Download, 
  Check,
  Users,
  ChevronLeft,
  ChevronRight,
  Rocket,
  MessageCircle,
  Clock,
  Star
} from 'lucide-react';
import { PLANS, FAQS, GAME_LIST } from './constants';
import Accordion from './components/Accordion';
import NotificationToast from './components/NotificationToast';

const CAROUSEL_IMAGES = [
  'https://image2url.com/r2/default/images/1771129730759-8dd74651-f9c6-4841-bdd2-8b446d52a5da.jpg',
  'https://i.imgur.com/7nUXIWE.jpeg',
  'https://i.imgur.com/VJTdfSA.jpeg'
];

const App: React.FC = () => {
  const [todayDate, setTodayDate] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const date = new Date();
    const formatted = date.toLocaleDateString('pt-BR');
    setTodayDate(formatted);

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      const offset = 20;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePlanSelection = (planId: string) => {
    if (planId === 'basic') {
      window.location.href = 'https://pay.wiapy.com/J2_bBoniaa_';
      return;
    }
    if (planId === 'standard') {
      window.location.href = 'https://pay.wiapy.com/vbn9JZHpZK';
      return;
    }
    if (planId === 'premium') {
      window.location.href = 'https://pay.wiapy.com/WnZF8R5iUE';
      return;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-yellow-400 selection:text-black">
      {/* Banner de Urgência Vivido */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-2.5 px-2 text-center font-black text-[11px] md:text-sm uppercase tracking-tighter flex items-center justify-center gap-2 text-black shadow-lg shadow-yellow-400/20">
        <Zap className="w-4 h-4 animate-bounce fill-black" />
        OFERTA LIMITADA: {todayDate} - ACESSO VITALÍCIO LIBERADO
      </div>

      <main className="max-w-4xl mx-auto px-4 pt-8 pb-24 md:pb-12 relative">
        {/* Background Gradients decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        
        {/* Hero Section Otimizada */}
        <section className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-900/40 text-indigo-300 px-4 py-1.5 rounded-full text-[11px] font-black mb-6 border border-indigo-500/30 backdrop-blur-sm">
            <Users className="w-3.5 h-3.5" /> +7.340 GAMERS ATIVOS
          </div>
          
          <h1 className="text-[32px] md:text-6xl font-black leading-[1.05] mb-4 px-2 tracking-tight">
            <span className="text-white">O MAIOR PACK</span> <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_0_15px_rgba(129,140,248,0.4)]">RETRÔ DO BRASIL!</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-bold text-slate-300 mb-4 leading-tight">
            Reviva sua infância no <span className="text-green-400 font-black">Android</span> ou <span className="text-blue-400 font-black">iPhone</span>
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-[10px] md:text-xs font-black bg-slate-800 text-yellow-400 py-2 px-4 rounded-xl border border-slate-700 flex items-center gap-1.5 uppercase">
              <Star className="w-3 h-3 fill-yellow-400" /> Suporte VIP 24H
            </span>
            <span className="text-[10px] md:text-xs font-black bg-slate-800 text-green-400 py-2 px-4 rounded-xl border border-slate-700 flex items-center gap-1.5 uppercase">
              <ShieldCheck className="w-3 h-3 fill-green-400" /> 100% SEGURO
            </span>
          </div>

          {/* Grid de Benefícios com Cores Vibrantes */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="flex items-center gap-3 p-4 glass rounded-[1.5rem] border-white/5 shadow-xl">
              <div className="bg-yellow-400/20 p-2 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-[11px] font-black uppercase text-left leading-tight text-white">Garantia<br/>Total</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass rounded-[1.5rem] border-white/5 shadow-xl">
              <div className="bg-green-400/20 p-2 rounded-xl">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-[11px] font-black uppercase text-left leading-tight text-white">Acesso<br/>Imediato</span>
            </div>
          </div>

          {/* Hero Image Principal com Filtros de Qualidade */}
          <div className="relative mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] mb-10 max-w-lg border-[6px] border-slate-800 group">
            <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl animate-pulse">
              NOVIDADE 2025
            </div>
            <img 
              src="https://i.postimg.cc/GmTGnzTw/capa-01.webp" 
              alt="Pack Gamer Retrô" 
              className="w-full h-auto object-cover saturate-[1.4] contrast-[1.15] brightness-[1.05] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <button 
            onClick={scrollToPricing}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 py-6 rounded-2xl text-white font-black text-xl shadow-[0_15px_40px_rgba(34,197,94,0.4)] hover:scale-[1.02] hover:brightness-110 active:scale-95 transition-all mb-6 uppercase tracking-tight flex items-center justify-center gap-3"
          >
            QUERO O MEU PACK AGORA! <Rocket className="w-6 h-6 animate-bounce" />
          </button>
          
          <div className="flex justify-center items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-green-500"/> Compra Segura</span>
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-500"/> Envio via Email</span>
          </div>
        </section>

        {/* Carrossel de Consoles Livre (Sem moldura/quadrado) */}
        <section className="mb-16">
          <h2 className="text-2xl font-black text-center mb-8 px-4 leading-tight uppercase tracking-widest text-white flex items-center justify-center gap-3">
             <div className="h-px w-8 bg-indigo-500/50"></div>
             TUDO LIBERADO
             <div className="h-px w-8 bg-indigo-500/50"></div>
          </h2>
          
          <div className="relative overflow-visible">
            <div 
              className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {CAROUSEL_IMAGES.map((img, index) => (
                <div key={index} className="min-w-full aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
                  <img 
                    src={img} 
                    alt={`Console ${index + 1}`} 
                    className="w-full h-full object-contain saturate-[1.3] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2.5 mt-8">
              {CAROUSEL_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-10 bg-indigo-500' : 'w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Prova Social Section - Visual Boost */}
        <section className="mb-16 text-center space-y-12">
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight uppercase px-4 max-w-2xl mx-auto italic tracking-tighter">
            POR QUE SOMOS <span className="text-yellow-400 underline decoration-indigo-500 underline-offset-8">REFERÊNCIA?</span>
          </h2>
          
          {[
            { id: "tOfgjOZOZiE", title: "Site Seguro e Confiável" },
            { id: "Ta7ZqtwHuu8", title: "Depoimento: Carlos (Kaká) - MG" },
            { id: "fhlgBjm3GXY", title: "Depoimento: Marcelo Jorge - SP" }
          ].map((video, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-sm md:text-lg font-black text-indigo-300 uppercase tracking-widest">{video.title}</h3>
              <div className="flex justify-center px-2">
                <div className="rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.2)] border-[8px] border-slate-800 bg-black aspect-[9/16] w-full max-w-[320px]">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Lista de Jogos High Contrast */}
        <section className="bg-slate-900 rounded-[3rem] p-8 mb-16 shadow-2xl border border-indigo-500/20 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full"></div>
          <h2 className="text-3xl font-black text-center mb-2 uppercase italic text-white leading-none tracking-tighter">Jogue em 4K no Celular!</h2>
          <p className="text-indigo-400 text-center text-xs font-bold mb-10 tracking-[0.3em] uppercase">Pack Ultra HD Customizado</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-yellow-400 font-black text-sm uppercase mb-6 flex items-center gap-2 italic">
                <Star className="w-4 h-4 fill-current" /> TOP 10 JOGADOS
              </h3>
              <div className="space-y-3">
                {GAME_LIST.slice(0, 10).map((game, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-1.5 group">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors uppercase">{game}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block space-y-4">
               <img src="https://image2url.com/r2/default/images/1771101114689-8918114c-fdee-44f3-b46f-d85ea9ca2056.webp" className="rounded-3xl border border-white/5 saturate-150" alt="Games Preview" />
               <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20 flex items-center gap-3">
                 <WifiOff className="text-green-400 w-8 h-8" />
                 <p className="text-[10px] font-black text-green-400 uppercase">Não consome seus dados móveis!</p>
               </div>
            </div>
          </div>
        </section>

        {/* Planos de Preço - Visual Upgrade */}
        <section id="pricing" className="mb-20 scroll-mt-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase mb-3 italic tracking-tighter text-white">ESCOLHA SEU PACK</h2>
            <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-400 font-black text-xs uppercase tracking-widest">Acesso Vitalício • Envio Imediato</p>
          </div>
          
          <div className="space-y-10">
            {PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-[3rem] p-8 border-[3px] transition-all overflow-hidden ${
                  plan.recommended 
                  ? 'border-indigo-500 bg-slate-900 shadow-[0_40px_100px_-20px_rgba(99,102,241,0.4)] animate-pulse-subtle scale-[1.03]' 
                  : 'border-slate-800 bg-slate-900/50'
                }`}
              >
                {/* Visual Premium Header */}
                {plan.id === 'premium' && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                )}

                <div className="text-center mb-8">
                  {plan.recommended && (
                    <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest shadow-xl mb-6 border border-white/20">
                      🔥 CAMPEÃO DE VENDAS 🔥
                    </div>
                  )}

                  <h3 className={`text-xl md:text-2xl font-black leading-tight mb-2 uppercase italic tracking-tighter whitespace-pre-line ${
                    plan.id === 'premium' ? 'text-white' : 'text-slate-200'
                  }`}>
                    {plan.name}
                  </h3>
                </div>

                {/* Price Display - High Saliency */}
                <div className="bg-slate-950/60 rounded-[2rem] p-6 mb-8 text-center border border-white/5 relative overflow-hidden group">
                  <span className="text-[11px] font-black text-slate-500 line-through block mb-1">DE R$ {plan.originalPrice}</span>
                  <div className={`flex items-center justify-center ${plan.id === 'basic' ? 'text-slate-300' : 'text-green-400'}`}>
                    <span className="text-2xl font-black mt-2 mr-1">R$</span>
                    <span className="text-7xl font-black tracking-tighter price-glow">{plan.price.split(',')[0]}</span>
                    <span className="text-2xl font-black mt-2 ml-0.5">,{plan.price.split(',')[1]}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-10 px-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-1 shadow-lg ${plan.id === 'basic' ? 'bg-slate-700' : 'bg-green-500'}`}>
                        <Check className={`w-3.5 h-3.5 ${plan.id === 'basic' ? 'text-slate-400' : 'text-white'}`} />
                      </div>
                      <span className="text-[13px] font-bold text-slate-300 leading-tight uppercase tracking-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handlePlanSelection(plan.id)}
                  className={`w-full py-6 rounded-2xl font-black text-lg md:text-xl shadow-2xl hover:scale-[1.02] hover:brightness-125 active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-3 ${
                    plan.id === 'premium' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                    : plan.id === 'basic'
                    ? 'bg-slate-700 text-white'
                    : 'bg-green-500 text-white'
                  }`}
                >
                  {plan.ctaText} <Download className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ - Better Contrast */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-center mb-10 uppercase italic tracking-widest">DÚVIDAS FREQUENTES</h2>
          <div className="glass rounded-[2.5rem] border-white/10 overflow-hidden shadow-2xl">
            {FAQS.map((faq, idx) => (
              <Accordion key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Garantia Section - Selo Original com Cores Normais - Aumentado para 190px */}
        <section className="mb-20 text-center px-4 relative flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-indigo-500/10 blur-[120px] -z-10 rounded-full"></div>
          
          {/* Container para o selo de garantia com cores originais, aumentado conforme pedido */}
          <div className="max-w-[190px] w-full mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <img 
              src="https://i.imgur.com/aFUtLXW.png" 
              alt="Garantia de 100% de Satisfação" 
              className="w-full h-auto block mx-auto transition-transform duration-500 hover:scale-110"
              style={{ mixBlendMode: 'multiply' }} // Remove fundo branco se houver, preservando cores internas
            />
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter drop-shadow-sm">RISCO ZERO</h3>
          <p className="text-lg md:text-xl font-bold text-slate-300 mb-8 leading-tight max-w-sm">
            Satisfeito ou seu dinheiro de volta em <span className="text-white underline decoration-indigo-500 underline-offset-4 font-black">7 dias</span>.
          </p>
          <div className="flex flex-col items-center w-full max-w-xs">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-full mb-6"></div>
            <p className="text-xl md:text-3xl font-black text-white uppercase tracking-[0.2em] italic">REEMBOLSO IMEDIATO</p>
          </div>
        </section>
      </main>

      {/* Sticky Bottom CTA - Refined Visuals */}
      <div className="fixed bottom-0 left-0 right-0 glass border-t border-white/10 p-4 md:hidden z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
          <div className="flex-1">
             <p className="text-[10px] font-black text-slate-500 line-through">DE R$ 198,00</p>
             <p className="text-xl font-black text-green-400">R$ 47,90</p>
          </div>
          <button 
            onClick={scrollToPricing} 
            className="flex-[2] bg-gradient-to-r from-green-500 to-emerald-600 py-4 rounded-xl text-white font-black text-sm shadow-xl active:scale-95 transition-transform uppercase tracking-widest flex items-center justify-center gap-2"
          >
            QUERO AGORA <Rocket className="w-4 h-4" />
          </button>
        </div>
      </div>

      <NotificationToast />
    </div>
  );
};

export default App;