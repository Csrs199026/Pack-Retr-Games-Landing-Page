import { PricingPlan, FAQItem } from './types';

export const PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'JOGOS NINTENDO ANDROID',
    subtitle: 'Apenas Super Mario World + 10 Jogos',
    price: '10,00',
    originalPrice: '38,90',
    features: [
      'Apenas Super Mario World',
      '+ 10 Jogos',
      'ACESSO IMEDIATO + Suporte'
    ],
    ctaText: 'Baixar pack básico.',
    color: 'bg-gray-700 text-white'
  },
  {
    id: 'standard',
    name: '845 JOGOS - SUPER NINTENDO',
    subtitle: 'O Pack Clássico Favorito',
    price: '29,90',
    originalPrice: '38,90',
    features: [
      'Super Mario World',
      'Donkey Kong',
      'Top Gear',
      'Ultimate Mortal Kombat',
      'Street Fighter',
      'The Legend of Zelda',
      'Super Bomberman',
      'Aladdin & Rei Leão',
      'Suporte VIP no WhatsApp',
      'Suporte + Vídeo Aula exclusiva',
      'Novo benefício: Coleção Total: 945 Jogos'
    ],
    ctaText: 'Baixar + 845 Jogos Agora!',
    color: 'bg-green-500 text-white'
  },
  {
    id: 'premium',
    name: '🏆 PACK GAMER RETRÔ COMPLETO\n🎮 PS2 + 945 JOGOS SEGA GENESIS\n+ MEGA DRIVE, N64 E GAME BOY',
    subtitle: '', 
    price: '47,90',
    originalPrice: '198,00',
    recommended: true,
    features: [
      'Super Mario World',
      'Donkey Kong',
      'Top Gear',
      'Ultimate Mortal Kombat',
      'Street Fighter',
      'The Legend of Zelda',
      'Super Bomberman',
      'Aladdin & Rei Leão',
      'Suporte VIP no WhatsApp',
      'Suporte + Vídeo Aula exclusiva',
      '007 - NINTENDO 64',
      'POKEMON GAME-BOY',
      'MARIO KART - NINTENDO 64',
      'PACOTE ADICIONAL - JOGOS NINTENDO 64',
      'PACOTE ADICIONAL JOGOS MEGA-DRIVE',
      'PACOTE ADICIONAL - JOGOS GAME-BOY'
    ],
    ctaText: 'QUERO O PREMIUM',
    color: 'bg-yellow-400 text-black'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como vou receber o material?',
    answer: 'Você receberá o acesso imediato em seu e-mail logo após a confirmação do pagamento. O material consiste em links de download e vídeo aulas passo a passo.'
  },
  {
    question: 'Preciso de um celular "Gamer" ou potente?',
    answer: 'Não! O nosso pack foi otimizado para rodar em praticamente qualquer celular Android ou iOS moderno. Os jogos retrô são leves e fáceis de processar.'
  },
  {
    question: 'Ocupa muito espaço na memória?',
    answer: 'Você pode escolher quais jogos baixar. O sistema é modular, então você não precisa baixar tudo de uma vez, economizando espaço no seu dispositivo.'
  },
  {
    question: 'Funciona em iPhone (iOS)?',
    answer: 'Sim! Temos um guia exclusivo e compatibilidade total para dispositivos Apple (iPhone e iPad).'
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos Pix, Cartão de Crédito e Boleto Bancário. O Pix e Cartão garantem envio imediato.'
  },
  {
    question: 'E se eu não conseguir instalar? Tem garantia?',
    answer: 'Sim! Oferecemos suporte 24h via WhatsApp e temos uma garantia de satisfação de 7 dias. Se não funcionar, devolveremos seu dinheiro.'
  }
];

export const GAME_LIST = [
  'Prince of Persia 1, 2 e 3',
  'Spider-Man 2 e 3',
  'Street Fighter',
  'Midnight Club 3',
  'Dragon Ball Z: Budokai 3',
  'Tekken 5',
  'Need for Speed: Most Wanted',
  'Need for Speed: Underground 2',
  'Crash Nitro Kart Ratchet: Deadlocked',
  'WWE SmackDown!',
  'Final Fantasy XII',
  'Medal of Honor: European Assault',
  'Bully',
  'Ben 10: Alien Force',
  'Def Jam: Fight for NY',
  'Crash Bandicoot',
  'Ultimate Ninja 3',
  'E muitos Outros',
  'Solicite um Jogo sem Pagar adicional!'
];