import type { LucideIcon } from 'lucide-react';
import { Home, Heart, ShowerHead, Award, Info, HelpCircle, ListChecks, CheckSquare, AlertTriangle } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export type ChecklistItem = {
  id: string;
  text: string;
};

export type ContentBlock = {
  type: 'info' | 'faq' | 'guide' | 'checklist' | 'errors';
  title: string;
  icon: keyof typeof iconMap;
  content?: string[];
  items?: ChecklistItem[];
};

export type Stage = {
  id: string;
  title: string;
  blocks: ContentBlock[];
};

export type Step = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: {
    url: string;
    hint: string;
  };
  stages: Stage[];
};

const placeholderImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) return { url: 'https://picsum.photos/seed/default/600/400', hint: 'placeholder' };
    return { url: img.imageUrl, hint: img.imageHint };
}

export const courseSteps: Step[] = [
  {
    id: 'step-1',
    title: '1º Passo - Descompressão',
    description: 'Acalme seu cão antes do banho.',
    longDescription: 'O objetivo é baixar o nível de excitação para o cão entrar mais calmo no box. Este é um "aquecimento emocional" para diminuir a agitação antes do banho.',
    icon: Home,
    image: placeholderImage('step1'),
    stages: [
      {
        id: 's1-stage1',
        title: 'Teoria',
        blocks: [
          {
            type: 'info',
            title: 'Informações Básicas',
            icon: 'Info',
            content: ['É um “aquecimento emocional” de 3 a 6 minutos para o cachorro baixar a agitação antes do banho. Em vez de cansar com corrida e brincadeiras agitadas, usamos farejar, lamber/roer devagar e um sinal de começar (subir sozinho num tapetinho). Assim ele entra no box mais tranquilo e colaborativo.'],
          },
          {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: 'HelpCircle',
            content: [
              'Preciso gastar a energia do meu cão antes do banho? Sim, mas com atividades que gastem energia mental (farejar, mastigar/lamber) e não com alta excitação (bola, pega-pega).',
              'E se eu der um passeio rápido? Pode, se for um passeio olfativo (curto, em ritmo lento, deixando cheirar), evitando corrida e puxões.',
              'Meu cão não liga para petiscos quando está ansioso. E agora? Afaste-se 1-2m do box, comece com farejo e use um petisco mais saboroso. Se ainda recusar, pare e tente em outro horário.',
              'Quanto tempo dura? 3 a 6 minutos (cães sensíveis: 6 a 8 min). O mais importante é observar o corpo do cão relaxado e aceitando petiscos.'
            ],
          },
          {
            type: 'errors',
            title: 'Principais Erros',
            icon: 'AlertTriangle',
            content: [
              'Brincadeira agitada antes do banho: Deixa o cão "aceso". Troque por farejar e lamber/roer devagar.',
              'Não checar o estado emocional: Começar com o cão já tenso. Analise o comportamento dele antes.',
              'Água ligada durante a descompressão: O barulho aumenta o alerta. Mantenha a água desligada nesta fase.',
              'Chão escorregadio: Aumenta a tensão. Use um tapete antiderrapante no box.',
              'Deixar roer/lamber por tempo demais: Perde o foco e valor do prêmio. Interrompa após 60-90 segundos.'
            ],
          },
        ],
      },
      {
        id: 's1-stage2',
        title: 'Prática',
        blocks: [
          {
            type: 'guide',
            title: 'Passo a Passo (3 a 6 minutos)',
            icon: 'CheckSquare',
            content: [
              '1. Medidor de calma (45s): Ofereça 1 micro-petisco. Se pegar e o corpo estiver solto, continue. Se lamber o focinho, vá mais devagar. Se recusar, afaste-se e tente um farejo fácil; se persistir, encerre por hoje.',
              '2. Farejo fácil (2min): A 1,5-2m do chuveiro, espalhe 6-10 micro-petiscos em locais fáceis. Se ele farejar bem, aproxime-se do chuveiro gradualmente.',
              '3. Lamber/Roer devagar (1min): Ofereça um brinquedo de lamber ou mordedor macio. Interrompa antes que ele enjoe e dê um micro-petisco.',
              '4. Sinal de começar (20s x3): Coloque um tapetinho a 1m do chuveiro. Quando ele subir sozinho, elogie e dê um micro-petisco. Repita 3 vezes. Na última, coloque o tapete dentro do box.',
              '5. Entrar no box: Com a água desligada, convide-o a entrar. Dê 2-3 micro-petiscos no tapete antiderrapante. Se ficar tenso, saia e faça mais 30-45s de farejo antes de tentar novamente.',
            ],
          },
          {
            type: 'checklist',
            title: 'Checklist Completo - Descompressão',
            icon: 'ListChecks',
            items: [
              { id: 's1-c1', text: 'Água desligada' },
              { id: 's1-c2', text: 'Tapete antiderrapante no box' },
              { id: 's1-c3', text: '10–12 micro-petiscos separados' },
              { id: 's1-c4', text: 'Brinquedo de lamber ou mordedor à mão' },
              { id: 's1-c5', text: 'Tapetinho de sinal pronto' },
              { id: 's1-c6', text: 'Medidor de calma checado (nota 1 ou 2)' },
              { id: 's1-c7', text: 'Farejo realizado por 2-3 min' },
              { id: 's1-c8', text: 'Lamber/Roer por 60-90s e interrompido' },
              { id: 's1-c9', text: 'Sinal de começar repetido 3x' },
              { id: 's1-c10', text: 'Entrada no box com reforço imediato' },
              { id: 's1-c11', text: 'Plano B: Voltar 1 passo se necessário' },
              { id: 's1-c12', text: 'Plano C: Encerrar se recusar 3x' },
            ],
          },
        ]
      }
    ],
  },
  {
    id: 'step-2',
    title: 'Acalmando o Cão',
    description: 'Transforme medo em confiança.',
    longDescription: 'A forma como você introduz o cão ao ambiente do banho é crucial. Use técnicas de reforço positivo para criar uma associação agradável com o local.',
    icon: Heart,
    image: placeholderImage('step2'),
    stages: [
      {
        id: 's2-stage1',
        title: 'Introdução Positiva',
        blocks: [
          {
            type: 'guide',
            title: 'Passo a Passo',
            icon: 'CheckSquare',
            content: ['Leve o cão ao banheiro com a água desligada. Dê petiscos e elogie.', 'Repita o processo, ligando a água brevemente sem molhá-lo, sempre associando com petiscos.'],
          },
          {
            type: 'checklist',
            title: 'Checklist de Ações',
            icon: 'ListChecks',
            items: [
              { id: 's2-c1', text: 'Levar o cão ao banheiro (seco) e dar petisco' },
              { id: 's2-c2', text: 'Ligar a água (sem molhar) e dar petisco' },
            ],
          },
        ]
      }
    ],
  },
  {
    id: 'step-3',
    title: 'A Hora do Banho',
    description: 'Técnicas para um banho eficaz.',
    longDescription: 'Com o cão mais calmo e o ambiente preparado, o banho pode começar. Mantenha a calma e siga um processo lógico para ser rápido e eficiente.',
    icon: ShowerHead,
    image: placeholderImage('step3'),
    stages: [
      {
        id: 's3-stage1',
        title: 'Processo',
        blocks: [
          {
            type: 'guide',
            title: 'Passo a Passo',
            icon: 'CheckSquare',
            content: [
              'Molhe o corpo do cão, evitando a cabeça e o rosto.', 
              'Aplique o shampoo e massageie suavemente.', 
              'Enxágue completamente, certificando-se de remover todo o produto.',
              'Lave o rosto por último, usando um pano úmido sem sabão.'
            ],
          },
          {
            type: 'checklist',
            title: 'Checklist do Banho',
            icon: 'ListChecks',
            items: [
              { id: 's3-c1', text: 'Molhar o corpo' },
              { id: 's3-c2', text: 'Aplicar e massagear shampoo' },
              { id: 's3-c3', text: 'Enxaguar completamente o corpo' },
              { id: 's3-c4', text: 'Limpar o rosto com pano úmido' },
            ],
          },
        ]
      }
    ],
  },
  {
    id: 'step-4',
    title: 'Pós-Banho e Recompensa',
    description: 'Finalize com carinho e diversão.',
    longDescription: 'A experiência do banho não termina quando a água desliga. A secagem e a recompensa final são essenciais para selar a experiência positiva.',
    icon: Award,
    image: placeholderImage('step4'),
    stages: [
      {
        id: 's4-stage1',
        title: 'Secagem e Celebração',
        blocks: [
          {
            type: 'guide',
            title: 'Passo a Passo',
            icon: 'CheckSquare',
            content: [
              'Envolva o cão em uma toalha e seque-o gentilmente, sem esfregar.',
              'Ofereça muitos elogios, carinho e um petisco especial ou brinquedo.',
              'Se usar secador, mantenha-o na temperatura fria ou morna e a uma distância segura.'
            ],
          },
          {
            type: 'checklist',
            title: 'Checklist Final',
            icon: 'ListChecks',
            items: [
              { id: 's4-c1', text: 'Secar com toalha' },
              { id: 's4-c2', text: 'Elogiar e dar carinho' },
              { id: 's4-c3', text: 'Oferecer recompensa final (petisco/brinquedo)' },
            ],
          },
           {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: 'HelpCircle',
            content: ['Com que frequência devo dar banho? Depende da raça e do estilo de vida, mas geralmente a cada 1-3 meses é suficiente para não ressecar a pele.'],
          },
        ]
      }
    ],
  },
];

export const iconMap = {
  Info,
  HelpCircle,
  ListChecks,
  CheckSquare,
  AlertTriangle
};
