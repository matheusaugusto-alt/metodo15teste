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
            content: [
              'Objetivo: baixar o nível de excitação para o cão entrar mais calmo no box.',
              'É um “aquecimento emocional” de 3 a 6 minutos para o cachorro baixar a agitação antes do banho. Em vez de cansar com corrida e brincadeiras agitadas, usamos farejar, lamber/roer devagar e um sinal de começar (subir sozinho num tapetinho). Assim ele entra no box mais tranquilo e colaborativo.'
            ],
          },
          {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: 'HelpCircle',
            content: [
              '“Preciso gastar a energia do meu cão antes do banho?” Sim, mas não com brincadeiras de alta excitação (bola, pega-pega, cabo de guerra). Isso eleva adrenalina e dificulta a calma. Prefira gastar energia mental: farejar e mastigar/lamber.',
              '“E se eu der um passeio rápido?” Pode, se for passeio olfativo (curto, em ritmo lento, deixando cheirar). Evite corrida e puxões.',
              '“Meu cão não liga para petiscos quando está ansioso. E agora?” Afaste do box 1–2 m, comece com farejo mais longe e use um petisco mais saboroso. Se ainda recusar, pare hoje e tente outro horário.',
              'Quanto tempo dura? 3–6 min (sensíveis: 6–8 min). Mais importante que o relógio é ver corpo solto e aceitando petisco.'
            ],
          },
          {
            type: 'errors',
            title: 'Principais Erros',
            icon: 'AlertTriangle',
            content: [
              'Brincadeira agitada antes do banho (bola, pega-pega, cabo de guerra): Atrapalha - deixa o cachorro “aceso”. Corrija - troque por farejar e lamber/roer devagar.',
              'Não checar o estado emocional: Atrapalha - você começa com ele já tenso. Corrija - Analise o comportamento do cachorro conforme as orientações que serão passadas.',
              'Água ligada durante a descompressão: Atrapalha - barulho e respingos aumentam alerta. Corrija - água sempre desligada até terminar esta fase.',
              'Chão escorregadio: Atrapalha - medo de escorregar aumenta a tensão. Corrija - tapete antiderrapante já colocado dentro do box.',
              'Deixar roer/lamber por tempo demais: Atrapalha - perde foco e valor do prêmio. Corrija - 60 a 90 segundos e interrompa ainda com vontade.'
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
              '1º Passo: Medidor de calma (45s): Ofereça 1 micro-petisco. Se pegar e o corpo estiver solto, continue (nota 1). Se lamber o focinho, vá mais devagar (nota 2). Se recusar, afaste-se, tente um farejo fácil; persistindo, encerre (nota 3).',
              '2º Passo: Farejo fácil (2min): A 1,5-2m do chuveiro, espalhe 6-10 micro-petiscos em locais fáceis. Se farejar bem, aproxime-se do chuveiro.',
              '3º Passo: Lamber/Roer devagar (1min): Ofereça um brinquedo de lamber ou mordedor macio. Interrompa antes que ele enjoe e dê um micro-petisco.',
              '4º Passo: Sinal de começar (20s x3): Coloque um tapetinho a 1m do chuveiro. Quando ele subir sozinho, elogie e dê um micro-petisco. Repita 3x. Na última, coloque o tapete dentro do box.',
              '5º Passo: Entrar no box: Com a água desligada, convide-o a entrar. Dê 2-3 micro-petiscos no tapete antiderrapante. Se ficar tenso, saia e faça 30-45s de farejo antes de tentar novamente.',
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
    title: '2º Passo - Ambiente Previsível',
    description: 'Remova gatilhos e torne o ambiente previsível.',
    longDescription: 'O objetivo é remover gatilhos de medo/fuga e deixar o ambiente previsível. Medo de escorregar, água fria/quente demais e barulho antecipado sabotam a cooperação.',
    icon: Heart,
    image: placeholderImage('step2'),
    stages: [
      {
        id: 's2-stage1',
        title: 'Teoria',
        blocks: [
          {
            type: 'info',
            title: 'Informações Básicas',
            icon: 'Info',
            content: [
              'Objetivo: remover gatilhos de medo/fuga e deixar o ambiente previsível.',
              'Por que importa: medo de escorregar, água fria/quente demais e barulho antecipado sabotam a cooperação.',
              'É a etapa de tirar os sustos do ambiente (escorregar, barulho, água gelada/quente demais) e apresentar tudo de forma previsível. A regra é: mostrar primeiro sem assustar, depois avançar aos poucos.'
            ],
          },
          {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: 'HelpCircle',
            content: [
              'Precisa ligar a água já? Não. Primeiro deixe o cão seguro no espaço (chão firme, sem ruídos). A água entra só depois do ambiente estar tranquilo.',
              'Qual temperatura usar? Morna confortável. Teste no pulso: não pode queimar, nem gelar. Tem que parecer neutra.',
              'Pressão forte é melhor pra enxaguar mais rápido? Não. Comece fraco, com um filete fino. Velocidade vem depois.',
              'Mostro a duchinha no corpo logo? Não. Primeiro duchinha desligada; depois pingos no tapete, depois filete nas patas.'
            ],
          },
        ],
      },
      {
        id: 's2-stage2',
        title: 'Prática',
        blocks: [
          {
            type: 'guide',
            title: 'Passo a Passo (1 a 3 minutos)',
            icon: 'CheckSquare',
            content: [
              '1º Passo: Preparar o espaço (30-60s): Tapete antiderrapante no box, toalha à mão, água desligada e sem ruídos bruscos.',
              '2º Passo: Teste de piso (10-20s): Deixe o cão entrar e parar no tapete. Se hesitar, reforce a entrada com um petisco.',
              '3º Passo: Apresentação da duchinha desligada (10-20s): Mostre e toque o cão com a duchinha, observando se ele permanece relaxado.',
              '4º Passo: Pingos no tapete (10-20s): Ligue a água fraca, deixe pingar no tapete (longe do cão) e reforce com petisco.',
              '5º Passo: Ajuste de temperatura (10-20s): Com a água pingando, ajuste para morna, testando no seu pulso.',
              '6º Passo: Filete fino nas patas (10-30s): Direcione o filete para as patas dianteiras, pare, reforce, e repita nas traseiras.',
              '7º Passo: Pausa e decisão (5-10s): Se o cão estiver calmo, avance. Se tenso, desligue a água e volte um passo.'
            ],
          },
          {
            type: 'checklist',
            title: 'Checklist - Ambiente Previsível',
            icon: 'ListChecks',
            items: [
              { id: 's2-c1', text: 'Espaço preparado (tapete, toalha, sem ruídos)' },
              { id: 's2-c2', text: 'Cão entra no box e pisa firme no tapete' },
              { id: 's2-c3', text: 'Apresentação da duchinha desligada foi bem aceita' },
              { id: 's2-c4', text: 'Cão calmo com o som de pingos de água no tapete' },
              { id: 's2-c5', text: 'Temperatura da água ajustada para morna' },
              { id: 's2-c6', text: 'Filete de água nas patas foi bem tolerado' },
              { id: 's2-c7', text: 'Pausa realizada e cão avaliado como calmo para prosseguir' },
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
