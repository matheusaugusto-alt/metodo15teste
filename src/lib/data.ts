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
              'Objetivo: terminar com o cachorro calmo e entrando no box sem resistência.',
              '1º Passo: Medidor de calma (tempo gasto: 45 segundos): Ofereça 1 micro-petisco e observe o corpo: Se ele pegar o petisco, corpo solto → continue.(nota 1 - ok). Se ele lamber focinho, mais cauteloso → faça tudo mais devagar. (nota 2 - atenção). Se ele recusar petisco, tenta sair → não force. Afaste 2–3 m e tente farejo fácil. Persistindo, encerre e tente mais tarde (nota 3 - alto)',
              '2º Passo: Farejo fácil (tempo gasto: 2 minutos): Distância inicial: 1,5 a 2 m do chuveiro. Espalhe 6 a 10 micro-petiscos (tamanho de uma ervilha) em cantinhos fáceis (chão, rodapé, atrás da toalha). Se ele fareja e come com fluidez, aproxime aos poucos do chuveiro. Se travar ou ignorar, volte 1 passo (afaste e facilite).',
              '3º Passo: Lamber/Roer devagar (tempo gasto: 1 minuto): Ofereça brinquedo de lamber ou mordedor macio (sem disputar com ele, apenas ofereça). Interrompa antes de ele enjoar e dê 1 micro-petisco.',
              '4º Passo: Sinal de começar (tempo gasto: 20 segundos, 3 vezes): Coloque um tapetinho a 1 metro do chuveiro. Quando ele subir sozinho, marque (elogie) e dê 1 micro-petisco. Repita 3 vezes. Na última, leve o tapete dentro do box do chuveiro. Sinal válido: na 3ª, ele sobe sem convite.',
              '5º Passo: Entrar no box: Água ainda desligada. Convide com calma. Assim que entrar, dê 2–3 micro-petiscos no tapete antiderrapante e faça pausa de 2 segundos. Se ficar muito tenso, saia, faça 30–45 segundos de farejo fácil e tente novamente.',
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
              { id: 's1-c4', text: 'Brinquedo de lamber ou mordedor macio à mão' },
              { id: 's1-c5', text: 'Tapetinho de sinal (para ele subir sozinho)' },
              { id: 's1-c6', text: 'Medidor de calma 0–2' },
              { id: 's1-c7', text: 'Farejar por 2–3 min (ajustar distância)' },
              { id: 's1-c8', text: 'Lamber/Roer por 60–90 s (interromper no auge)' },
              { id: 's1-c9', text: 'Sinal de começar: 3 repetições (última na entrada do box)' },
              { id: 's1-c10', text: 'Entrou no box com reforço imediato (2–3 micro-petiscos)' },
              { id: 's1-c11', text: 'Voltar 1 passo (afastar, facilitar)' },
              { id: 's1-c12', text: 'Recusou 3 vezes? Encerre com um reforço simples fora do box e tente em outro horário' },
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
              'O que é: É a etapa de tirar os sustos do ambiente (escorregar, barulho, água gelada/quente demais) e apresentar tudo de forma previsível. A regra é: mostrar primeiro sem assustar, depois avançar aos poucos.'
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
              'Meta: remover gatilhos de medo e avisar cada novidade antes de acontecer.',
              '1º Passo: Preparar o espaço (30–60 s): Tapete antiderrapante dentro do box. Toalha à mão. Água desligada. Evite ruídos como fechar porta/janela batendo.',
              '2º Passo: Teste de piso (10–20 s): Deixe o cão entrar e parar no tapete. Se hesitar, volte ao tapetinho de sinal (da etapa anterior) na entrada do box, pague 1 micro-petisco e só então convide pra entrar.',
              '3º Passo: Apresentação da duchinha DESLIGADA (10–20 s): Mostre a duchinha perto do corpo, sem tocar; depois toque rápido no ombro ou costela. Observe: corpo solto? Aceita petisco? Sim → seguir. Não → repita mais devagar.',
              '4º Passo: Pingos no TAPETE (10–20 s): Ligue a água bem fraca e deixe pingar no tapete, fora do cão, por 10–20 s. Dica: fale calmo, pague 1 micro-petisco. Se tensionar: desligue, pausa de 5 s, volte ao passo anterior.',
              '5º Passo: Ajuste de temperatura (10–20 s, SEM encostar no cão): Com a água pingando fraca, ajuste até ficar morna confortável. Teste no pulso: sem queimar, sem gelar. Mantém filete fraco.',
              '6º Passo: Filete fino nas PATAS (10–30 s): Leve o filete fraco até as patas dianteiras por poucos segundos. Pare 2 s, pague 1 micro-petisco. Repita nas patas traseiras. Sinais de que pode avançar: corpo solto, sem recuar, aceita petisco.',
              '7º Passo: Pausa curta + decidir próximo passo (5–10 s): Está tranquilo? → Próxima etapa (peito/dorso no Pilar 3). Ficou tenso? → Desliga, 20–30 s farejo fácil fora do jato, e repete o passo 5.',
              'Dicas: Evite chamar para brincadeira agitada ou aumentar a pressão da água para “acabar logo”. Posição do tutor: lateral/traseira ao cão (não de frente bloqueando). Layout anti-fuga: porta/box fechados, caminho curto e seco até o box. Orelhas: objetivo é manter secas durante, e rosto será só pano úmido no fim.'
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
    title: '3º Passo - Condução do banho',
    description: 'Técnicas para um banho eficaz.',
    longDescription: 'Com o cão mais calmo e o ambiente preparado, o banho pode começar. Mantenha a calma e siga um processo lógico para ser rápido e eficiente.',
    icon: ShowerHead,
    image: placeholderImage('step3'),
    stages: [
      {
        id: 's3-stage1',
        title: 'Teoria',
        blocks: [
          {
            type: 'info',
            title: 'Informações Básicas',
            icon: 'Info',
            content: [
              'O que é: conduzir o banho com um comando, ordem fixa e pausas programadas, para o cão ficar no lugar.',
              'Por que importa: cérebro do cão responde melhor a tarefas curtas + pausas; sem ritmo, ele “estoura”.'
            ]
          },
          {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: 'HelpCircle',
            content: [
              'Qual comando usar? Use uma palavra só (ex.: “Fica”), sempre igual, em tom curto e neutro.',
              'Por que pausar? Não atrasa? Pausa evita sobrecarga. Com pausas, o banho costuma terminar mais rápido e com menos luta.',
              'Posso mudar a ordem das regiões? Evite. Mesma ordem sempre = previsibilidade e menos sustos.',
              'Como segurar o cão? Não segure no pescoço. Use a “mão parede”: mão aberta apoiada no quadril ou ombro, firme e suave, só como “apoio”, nunca forçando.',
              'E o rosto? Sem jato. Limpe no final com pano úmido.'
            ]
          },
          {
            type: 'errors',
            title: 'Aviso: Molhar por partes?',
            icon: 'AlertTriangle',
            content: [
                'Em cães ansiosos (banho comum): Melhor fazer por partes (ciclos curtos): molhar → ensaboar → enxaguar uma região de cada vez (traseiro/cauda → dorso/laterais → peito/pescoço → patas; rosto no pano úmido no final).',
                'Por quê? Reduz o tempo contínuo de água em cima do cão (menos estresse). Dá pausas programadas entre regiões (respira, lambe/ganha micro-petisco). Mantém previsibilidade: “termino aqui, pauso, depois a próxima parte”.',
                'Dica prática (fluxo híbrido): antes de começar os ciclos, faça um pré-molhado leve e rápido no corpo (exceto cabeça) por 10–20 s, só para tirar o “choque” do primeiro jato. Depois siga nos ciclos por região.',
                'Em cães tranquilos/experientes (banho comum): Pode molhar o corpo todo, ensaboar todo, e depois enxaguar todo — desde que: Você mantenha o ritmo (sem demorar com o shampoo parado na pele), a água esteja morna e com pressão baixa/média, e haja poucas pausas e o cão não mostre sinais de incômodo.',
                'Quando não fazer “por partes”: Shampoo terapêutico/medicado (dermatite, antipruriginoso etc.): quase sempre precisa de contato no corpo todo por X minutos (rótulo). O fluxo indicado é: Pré-molhar rápido o corpo (sem rosto). Aplicar shampoo diluído em todo o corpo (evitar olhos/narinas). Aguardar o tempo de contato (ex.: 5–10 min), água desligada, usando pausas curtas com lambe-lambe para manter o cão calmo. Enxaguar muito bem, de preferência por zonas (para garantir remoção total). Pelagem muito densa/longa com muita sujeira: espalhar o shampoo no corpo todo ajuda a penetrar melhor; depois enxágue caprichado por zonas.'
            ]
          }
        ]
      },
      {
        id: 's3-stage2',
        title: 'Prática',
        blocks: [
          {
            type: 'guide',
            title: 'Passo a Passo',
            icon: 'CheckSquare',
            content: [
              'Cuidados importantes: Preparar (30–60 s): tapete antiderrapante, toalha à mão, água morna (testada no pulso), pressão fraca a média, shampoo diluído (se usar diluição, já pronto).',
              'Ordem fixa das regiões: Traseiro/cauda → Dorso/laterais → Peito/pescoço → Patas → Rosto por último (pano úmido).',
              'Semáforo para decidir em tempo real: Verde (cooperando): corpo solto, aceita petisco → segue. Amarelo (sinais leves): lamber lábios, inquieto → pausa 30–45 s, ofereça lamber (rapidamente) e retome mais leve. Vermelho (fuga/rosnado): interrompa, reduza estímulo (menos jato/menos tempo), volte 1 etapa e recomece curto.',
              '1º Passo: Bloco 1 — Traseiro/cauda: Ação (40–60 s): molhar → ensaboar → enxaguar. Mão parede: apoio no quadril. Pausa (30–45 s): pare água, 1–2 micro-petiscos ou 20–30 s de lamber no box.',
              '2º Passo: Bloco 2 — Dorso e laterais: Ação (40–60 s): molhar → ensaboar → enxaguar, sempre de cima para baixo. Mão parede: apoio no ombro. Pausa (30–45 s) igual ao Bloco 1.',
              '3º Passo: Bloco 3 — Peito e pescoço: Ação (40–60 s): atenção para não direcionar jato ao rosto. Pausa (30–45 s).',
              '4º Passo: Bloco 4 — Patas (dianteiras e traseiras): Ação (40–60 s): filete fraco, pouco tempo; se precisar, faça uma pata por vez. Pausa (30–45 s).',
              '5º Passo: Final — Rosto (fora do jato): Ação (30–60 s): pano úmido com água morna; se usar um pingo de espuma bem diluída, evite olhos e narinas. Encerramento: 1–2 micro-petiscos, voz calma, toalha-pressão (sem esfregar forte).',
              'Duração típica: 6–12 min (varia por porte e pelagem). O importante é respeitar os blocos e as pausas.',
              'Opções de atividades calmas (para as pausas): Lamber rapidinho (20–30 s) em brinquedo/lambe-lambe (pequena quantidade). Cheiro conhecido (toalhinha com seu cheiro perto do peito, sem cobrir cabeça). Respiração do tutor + voz baixa (frases curtas: “muito bem”, “tá tudo bem”). Evite: brincadeira agitada, puxar brinquedo, aumentar pressão da água “para acabar logo”.'
            ]
          },
          {
            type: 'checklist',
            title: 'Checklist Completo - Condução do Banho',
            icon: 'ListChecks',
            items: [
              { id: 's3-c1', text: 'Tapete antiderrapante' },
              { id: 's3-c2', text: 'Água morna testada no pulso' },
              { id: 's3-c3', text: 'Pressão fraca/média ajustada' },
              { id: 's3-c4', text: 'Shampoo (se diluído, já pronto)' },
              { id: 's3-c5', text: 'Toalha à mão' },
              { id: 's3-c6', text: 'Comando único definido (ex.: “Fica”)' },
              { id: 's3-c7', text: 'Ordem fixa: traseiro/cauda → dorso/laterais → peito/pescoço → patas → rosto (pano)' },
              { id: 's3-c8', text: 'Blocos de 40–60 s de ação' },
              { id: 's3-c9', text: 'Pausas de 30–45 s entre blocos' },
              { id: 's3-c10', text: 'Mão parede em quadril/ombro (nunca pescoço)' },
              { id: 's3-c11', text: 'Semáforo usado (verde/amarelo/vermelho)' },
              { id: 's3-c12', text: 'Sem Jato no rosto' },
              { id: 's3-c13', text: 'Sem falar sem parar' },
              { id: 's3-c14', text: 'Sem pular pausas' },
              { id: 's3-c15', text: 'Plano de contingência: Parar, reduzir estímulo, voltar 1 etapa, pausar, ou encerrar.' },
            ]
          }
        ]
      }
    ],
  },
  {
    id: 'step-4',
    title: '4º Passo — Tolerância e Secagem',
    description: 'Finalize com carinho e diversão.',
    longDescription: 'A experiência do banho não termina quando a água desliga. A secagem e a recompensa final são essenciais para selar a experiência positiva.',
    icon: Award,
    image: placeholderImage('step4'),
    stages: [
      {
        id: 's4-stage1',
        title: 'Teoria',
        blocks: [
          {
            type: 'info',
            title: 'Informações Básicas',
            icon: 'Info',
            content: [
              'É a etapa para manter o cão ocupado e seguro enquanto ele se acostuma aos estímulos mais difíceis do pós-banho: secador, toques em áreas sensíveis e ruídos.',
              'Usamos lamber/roer devagar como “âncora de calma” e subimos o estímulo em passos curtos, sem sustos.',
              'Quando usar: Cão se assusta com secador ou barulho; Reclama com toques em patas/cabeça; Precisa secar com soprador (pelagem densa/longa).'
            ]
          },
          {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: 'HelpCircle',
            content: [
              'Preciso usar secador sempre? Não. Se a pelagem for curta e o clima ajudar, toalha já resolve. Use secador quando for necessário (pelagem densa/tempo frio).',
              'Qual a temperatura do ar? Morno confortável. O que seca é o fluxo de ar, não calor parado.',
              'Começo soprando a cabeça? Não. Cabeça e orelhas ficam por último ou fora; seque com toalha/pano.',
              'Lamber não vai “empanturrar”? Não, se for camada fina e por tempo curto (recolher antes de enjoar).',
              'E se ele tiver medo do barulho? Comece longe e fraco, com micro-janelas de 30–60 s. Suba de nível só se estiver calmo.'
            ]
          }
        ]
      },
      {
        id: 's4-stage2',
        title: 'Prática',
        blocks: [
          {
            type: 'guide',
            title: 'Como aplicar a tolerância:',
            icon: 'CheckSquare',
            content: [
              'Passe camada fina no lambe-lambe/brinquedo estável. Opções seguras: iogurte sem açúcar, abóbora cozida amassada, patê canino, ração umedecida.',
              'Deixe 40–60 s e recolha no 80% do interesse (antes de enjoar).',
              'Quanto oferecer (camada fina): P (≤10 kg): 1–2 colheres de chá; M (11–25 kg): 2–3 colheres de chá; G (≥26 kg): 3–4 colheres de chá.',
              'Momentos recomendados: Entrada da secagem: 40–60 s; No meio (se precisar): 20–30 s; Finalização: 20–30 s enquanto troca para toalha.'
            ]
          },
          {
            type: 'guide',
            title: 'Como fazer a secagem (Escadinha do secador)',
            icon: 'CheckSquare',
            content: [
              'Suba de nível apenas se o cão estiver calmo, aceitando petisco e com corpo solto.',
              'Nível 0 — Aparelho desligado (20–30 s): Secador visível na mão; cão lambe/roe à vontade. Calmo? → próximo.',
              'Nível 1 — Ligado longe, ar para longe (30–60 s): Barulho ao fundo, sem vento nele. Se tensionar: pausa, volte ao 0.',
              'Nível 2 — Ar na mão do tutor (30–60 s): A mão vira “escudo”; vento bate na mão a 30–50 cm do cão. Calmo? → próximo.',
              'Nível 3 — Dorso/laterais, longe (10–20 s): Ar em movimento, a >30 cm, passadas curtas. Nunca parar ar quente no mesmo ponto.',
              'Nível 4 — Mais perto, áreas menos sensíveis (20–30 s): A 20–30 cm, varredura rápida em dorso/laterais. Patas e cabeça por último (ou só toalha).',
            ]
          },
          {
            type: 'checklist',
            title: 'Se algo sair do plano',
            icon: 'ListChecks',
            items: [
                { id: 's4-c1', text: 'Desligar, fazer pausa' },
                { id: 's4-c2', text: 'Voltar 1 nível' },
                { id: 's4-c3', text: 'Repor lamber 20–30 s' },
                { id: 's4-c4', text: 'Persistiu? Encerrar e treinar “a seco” em outro momento' }
            ]
          }
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
