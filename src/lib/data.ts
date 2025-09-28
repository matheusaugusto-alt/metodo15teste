import type { LucideIcon } from 'lucide-react';
import { Home, Heart, ShowerHead, Award, Info, HelpCircle, ListChecks, CheckSquare } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export type ChecklistItem = {
  id: string;
  text: string;
};

export type ContentBlock = {
  type: 'info' | 'faq' | 'guide' | 'checklist';
  title: string;
  icon: LucideIcon;
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
    title: 'Preparação do Ambiente',
    description: 'Crie um spa canino em casa.',
    longDescription: 'Preparar o ambiente é o primeiro passo para garantir que a hora do banho seja uma experiência positiva e sem estresse tanto para você quanto para o seu cão.',
    icon: Home,
    image: placeholderImage('step1'),
    stages: [
      {
        id: 's1-stage1',
        title: 'Organização',
        blocks: [
          {
            type: 'info',
            title: 'Informações Básicas',
            icon: Info,
            content: ['Reúna todos os materiais antes de começar: toalhas, shampoo específico para cães, condicionador (se necessário) e petiscos.'],
          },
          {
            type: 'checklist',
            title: 'Checklist de Materiais',
            icon: ListChecks,
            items: [
              { id: 's1-c1', text: 'Shampoo para cães' },
              { id: 's1-c2', text: 'Toalhas (mínimo 2)' },
              { id: 's1-c3', text: 'Petiscos de alto valor' },
              { id: 's1-c4', text: 'Tapete antiderrapante' },
            ],
          },
          {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: HelpCircle,
            content: ['Posso usar meu shampoo? Não, o pH da pele dos cães é diferente e shampoos humanos podem causar irritação.'],
          },
        ],
      },
      {
        id: 's1-stage2',
        title: 'Segurança',
        blocks: [
          {
            type: 'guide',
            title: 'Passo a Passo',
            icon: CheckSquare,
            content: ['Coloque um tapete antiderrapante no fundo da banheira ou box para evitar que o cão escorregue.', 'Ajuste a temperatura da água para morna. Teste no seu pulso antes de molhar o cão.'],
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
            icon: CheckSquare,
            content: ['Leve o cão ao banheiro com a água desligada. Dê petiscos e elogie.', 'Repita o processo, ligando a água brevemente sem molhá-lo, sempre associando com petiscos.'],
          },
          {
            type: 'checklist',
            title: 'Checklist de Ações',
            icon: ListChecks,
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
            icon: CheckSquare,
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
            icon: ListChecks,
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
            icon: CheckSquare,
            content: [
              'Envolva o cão em uma toalha e seque-o gentilmente, sem esfregar.',
              'Ofereça muitos elogios, carinho e um petisco especial ou brinquedo.',
              'Se usar secador, mantenha-o na temperatura fria ou morna e a uma distância segura.'
            ],
          },
          {
            type: 'checklist',
            title: 'Checklist Final',
            icon: ListChecks,
            items: [
              { id: 's4-c1', text: 'Secar com toalha' },
              { id: 's4-c2', text: 'Elogiar e dar carinho' },
              { id: 's4-c3', text: 'Oferecer recompensa final (petisco/brinquedo)' },
            ],
          },
           {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: HelpCircle,
            content: ['Com que frequência devo dar banho? Depende da raça e do estilo de vida, mas geralmente a cada 1-3 meses é suficiente para não ressecar a pele.'],
          },
        ]
      }
    ],
  },
];
