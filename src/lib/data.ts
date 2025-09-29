
import type { LucideIcon } from 'lucide-react';
import { Home, Heart, ShowerHead, Award, Info, HelpCircle, ListChecks, CheckSquare, AlertTriangle } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export type ChecklistItem = {
  id: string;
  text: string;
};

export type GuideItem = {
  id: string;
  title: string;
  actions: string[];
  time?: string;
  attention?: string;
  hint?: string;
  alert?: string;
}

export type ContentBlock = {
  type: 'info' | 'faq' | 'guide' | 'checklist' | 'errors';
  title: string;
  icon: keyof typeof iconMap;
  content?: string[];
  items?: ChecklistItem[] | GuideItem[];
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
        title: 'Teoria e Prática',
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
              '“Preciso gastar a energia do meu cão antes do banho?”: Sim, mas não com brincadeiras de alta excitação (bola, pega-pega, cabo de guerra). Isso eleva adrenalina e dificulta a calma. Prefira gastar energia mental: farejar e mastigar/lamber.',
              '“E se eu der um passeio rápido?”: Pode, se for passeio olfativo (curto, em ritmo lento, deixando cheirar). Evite corrida e puxões.',
              '“Meu cão não liga para petiscos quando está ansioso. E agora?”: Afaste do box 1–2 m, comece com farejo mais longe e use um petisco mais saboroso. Se ainda recusar, pare hoje e tente outro horário.',
              '“Quanto tempo dura?”: 3–6 min (sensíveis: 6–8 min). Mais importante que o relógio é ver corpo solto e aceitando petisco.'
            ],
          },
          {
            type: 'errors',
            title: 'Principais Erros',
            icon: 'AlertTriangle',
            content: [
              'Brincadeira agitada antes do banho (bola, pega-pega, cabo de guerra): Atrapalha: deixa o cachorro “aceso”; Corrija: troque por farejar e lamber/roer devagar.',
              'Não checar o estado emocional: Atrapalha: você começa com ele já tenso; Corrija: Analise o comportamento do cachorro conforme as orientações que serão passadas.',
              'Água ligada durante a descompressão: Atrapalha: barulho e respingos aumentam alerta; Corrija: água sempre desligada até terminar esta fase.',
              'Chão escorregadio: Atrapalha: medo de escorregar aumenta a tensão; Corrija: tapete antiderrapante já colocado dentro do box.',
              'Deixar roer/lamber por tempo demais: Atrapalha: perde foco e valor do prêmio; Corrija: 60 a 90 segundos e interrompa ainda com vontade.'
            ],
          },
          {
            type: 'guide',
            title: 'Passo a Passo (3 a 6 minutos)',
            icon: 'CheckSquare',
            items: [
              { id: 's1-g1', title: 'Medidor de calma', time: '45s', attention: 'Alto', actions: ['Ofereça 1 micro-petisco e observe o corpo.', 'Se ele pegar o petisco, corpo solto → continue (nota 1 - ok).', 'Se ele lamber focinho, mais cauteloso → faça tudo mais devagar (nota 2 - atenção).', 'Se ele recusar petisco, tenta sair → não force. Afaste 2–3 m e tente farejo fácil. Persistindo, encerre e tente mais tarde (nota 3 - alto).']},
              { id: 's1-g2', title: 'Farejo fácil', time: '2 min', attention: 'Médio', actions: ['Distância inicial: 1,5 a 2 m do chuveiro.', 'Espalhe 6 a 10 micro-petiscos (tamanho de uma ervilha) em cantinhos fáceis (chão, rodapé, atrás da toalha).', 'Se ele fareja e come com fluidez, aproxime aos poucos do chuveiro.'], alert: 'Se travar ou ignorar, volte 1 passo (afaste e facilite).'},
              { id: 's1-g3', title: 'Lamber/Roer devagar', time: '1 min', attention: 'Baixo', actions: ['Ofereça brinquedo de lamber ou mordedor macio (sem disputar com ele, apenas ofereça).', 'Interrompa antes de ele enjoar e dê 1 micro-petisco.']},
              { id: 's1-g4', title: 'Sinal de começar', time: '20s (x3)', attention: 'Médio', actions: ['Coloque um tapetinho a 1 metro do chuveiro.', 'Quando ele subir sozinho, marque (elogie) e dê 1 micro-petisco.', 'Repita 3 vezes. Na última, leve o tapete dentro do box do chuveiro.'], hint: 'Sinal válido: na 3ª, ele sobe sem convite.'},
              { id: 's1-g5', title: 'Entrar no box', time: '30s', attention: 'Alto', actions: ['Água ainda desligada. Convide com calma.', 'Assim que entrar, dê 2–3 micro-petiscos no tapete antiderrapante e faça pausa de 2 segundos.'], alert: 'Se ficar muito tenso, saia, faça 30–45 segundos de farejo fácil e tente novamente.'},
            ]
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
        title: 'Teoria e Prática',
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
              '“Precisa ligar a água já?”: Não. Primeiro deixe o cão seguro no espaço (chão firme, sem ruídos). A água entra só depois do ambiente estar tranquilo.',
              '“Qual temperatura usar?”: Morna confortável. Teste no pulso: não pode queimar, nem gelar. Tem que parecer neutra.',
              '“Pressão forte é melhor pra enxaguar mais rápido?”: Não. Comece fraco, com um filete fino. Velocidade vem depois.',
              '“Mostro a duchinha no corpo logo?”: Não. Primeiro duchinha desligada; depois pingos no tapete, depois filete nas patas.'
            ],
          },
           {
            type: 'guide',
            title: 'Passo a Passo (1 a 3 minutos)',
            icon: 'CheckSquare',
            items: [
              { id: 's2-g1', title: 'Preparar o espaço', time: '30-60s', attention: 'Baixo', actions: ['Coloque o tapete antiderrapante dentro do box.', 'Tenha a toalha à mão.', 'Verifique se a água está desligada.', 'Evite ruídos altos como portas batendo.'], hint: 'Um ambiente calmo começa antes do cão entrar.' },
              { id: 's2-g2', title: 'Teste de piso', time: '10-20s', attention: 'Médio', actions: ['Deixe o cão entrar e parar no tapete.', 'Se hesitar, use o tapetinho de sinal na entrada, pague 1 micro-petisco e convide novamente.'], alert: 'A segurança no piso é fundamental para a confiança.' },
              { id: 's2-g3', title: 'Apresentação da duchinha (DESLIGADA)', time: '10-20s', attention: 'Médio', actions: ['Mostre a duchinha perto do corpo, sem tocar.', 'Toque rapidamente no ombro ou costela.', 'Observe o corpo: se estiver solto e aceitando petisco, siga. Senão, repita mais devagar.'], hint: 'Familiaridade com o objeto diminui o medo.' },
              { id: 's2-g4', title: 'Pingos no TAPETE', time: '10-20s', attention: 'Alto', actions: ['Ligue a água bem fraca e deixe pingar no tapete, longe do cão.', 'Fale com calma e ofereça 1 micro-petisco.'], alert: 'Se tensionar: desligue, faça uma pausa de 5s, e volte ao passo anterior.' },
              { id: 's2-g5', title: 'Ajuste de temperatura', time: '10-20s', attention: 'Baixo', actions: ['Com a água pingando fraca, ajuste até ficar morna e confortável.', 'Teste no seu pulso: não deve queimar nem gelar.', 'Mantenha um filete fraco.'], hint: 'A temperatura certa evita choques térmicos.' },
              { id: 's2-g6', title: 'Filete fino nas PATAS', time: '10-30s', attention: 'Alto', actions: ['Leve o filete fraco até as patas dianteiras por alguns segundos.', 'Pare por 2s e pague 1 micro-petisco.', 'Repita nas patas traseiras.'], alert: 'Sinais para avançar: corpo solto, sem recuar, aceitando petisco.' },
              { id: 's2-g7', title: 'Pausa e Decisão', time: '5-10s', attention: 'Médio', actions: ['Está tranquilo? Prossiga para a próxima etapa (Condução do Banho).', 'Ficou tenso? Desligue a água, faça 20-30s de farejo fácil fora do jato e repita o passo 5 (Ajuste de temperatura).'], hint: 'Sempre termine em uma nota positiva.' }
            ]
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
        title: 'Teoria e Prática',
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
              'Qual comando usar?: Use uma palavra só (exemplo “Fica”), sempre igual, em tom curto e neutro.',
              'Por que pausar? Não atrasa?: Pausa evita sobrecarga. Com pausas, o banho costuma terminar mais rápido e com menos luta.',
              'Posso mudar a ordem das regiões?: Evite. Mesma ordem sempre = previsibilidade e menos sustos.',
              'Como segurar o cão?: Não segure no pescoço. Use a “mão parede”: mão aberta apoiada no quadril ou ombro, firme e suave, só como “apoio”, nunca forçando.',
              'E o rosto?: Sem jato. Limpe no final com pano úmido.'
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
          },
          {
            type: 'guide',
            title: 'Passo a Passo (6-12 minutos)',
            icon: 'CheckSquare',
            items: [
              { id: 's3-g1', title: 'Bloco 1: Traseiro/cauda', time: '40-60s', attention: 'Médio', actions: ['Molhar, ensaboar e enxaguar a região.', 'Use a "mão parede" como apoio no quadril.'], hint: 'Após a ação, faça uma pausa de 30-45s com 1-2 micro-petiscos ou 20-30s de atividade de lamber.'},
              { id: 's3-g2', title: 'Bloco 2: Dorso e laterais', time: '40-60s', attention: 'Médio', actions: ['Molhar, ensaboar e enxaguar, sempre de cima para baixo.', 'Use a "mão parede" como apoio no ombro.'], hint: 'Faça a mesma pausa de 30-45s do bloco anterior.'},
              { id: 's3-g3', title: 'Bloco 3: Peito e pescoço', time: '40-60s', attention: 'Alto', actions: ['Molhar, ensaboar e enxaguar com cuidado.'], alert: 'Atenção para não direcionar o jato de água para o rosto. Faça uma pausa de 30-45s.'},
              { id: 's3-g4', title: 'Bloco 4: Patas', time: '40-60s', attention: 'Alto', actions: ['Use um filete fraco e por pouco tempo.', 'Se necessário, lave uma pata de cada vez.'], hint: 'Termine com a pausa de 30-45s.'},
              { id: 's3-g5', title: 'Final: Rosto', time: '30-60s', attention: 'Alto', actions: ['Use um pano úmido com água morna.', 'Se usar shampoo, que seja bem diluído e evite olhos/narinas.'], alert: 'NUNCA use o jato de água diretamente no rosto.'},
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
        title: 'Teoria e Prática',
        blocks: [
          {
            type: 'info',
            title: 'Informações Básicas',
            icon: 'Info',
            content: [
              'O que é: É a etapa para manter o cão ocupado e seguro enquanto ele se acostuma aos estímulos mais difíceis do pós-banho: secador, toques em áreas sensíveis e ruídos.',
              'Usamos lamber/roer devagar como “âncora de calma” e subimos o estímulo em passos curtos, sem sustos.',
              'Quando usar: Cão se assusta com secador ou barulho; Reclama com toques em patas/cabeça; Precisa secar com soprador (pelagem densa/longa).'
            ]
          },
          {
            type: 'faq',
            title: 'Dúvidas Comuns',
            icon: 'HelpCircle',
            content: [
              '“Preciso usar secador sempre?”: Não. Se a pelagem for curta e o clima ajudar, toalha já resolve. Use secador quando for necessário (pelagem densa/tempo frio).',
              '“Qual a temperatura do ar?”: Morno confortável. O que seca é o fluxo de ar, não calor parado.',
              '“Começo soprando a cabeça?”: Não. Cabeça e orelhas ficam por último ou fora; seque com toalha/pano.',
              '“Lamber não vai “empanturrar”?”: Não, se for camada fina e por tempo curto (recolher antes de enjoar).',
              '“E se ele tiver medo do barulho?”: Comece longe e fraco, com micro-janelas de 30–60 s. Suba de nível só se estiver calmo.'
            ]
          },
          {
            type: 'guide',
            title: 'Como Aplicar a Tolerância',
            icon: 'CheckSquare',
            items: [
              { id: 's4-g1', title: 'Use uma "âncora de calma"', time: '40-60s', attention: 'Baixo', actions: ['Passe uma camada fina de um alimento pastoso em um brinquedo de lamber.', 'Opções seguras: iogurte sem açúcar, abóbora cozida, patê canino, ração umedecida.'], hint: 'Deixe o cão lamber por 40-60s e recolha o brinquedo antes que ele perca o interesse.' },
              { id: 's4-g2', title: 'Momentos recomendados', time: 'Variável', attention: 'Médio', actions: ['Entrada da secagem: 40–60 s.', 'No meio do processo (se precisar): 20–30 s.', 'Finalização (enquanto troca para toalha): 20–30 s.'], alert: 'A quantidade de comida deve ser pequena. Para cães de porte pequeno (≤10 kg), use 1–2 colheres de chá.' },
            ],
          },
          {
            type: 'guide',
            title: 'Como Fazer a Secagem',
            icon: 'CheckSquare',
            items: [
                { id: 's4-g3', title: 'Nível 0: Aparelho desligado', time: '20-30s', attention: 'Baixo', actions: ['Deixe o secador visível na sua mão enquanto o cão se ocupa com o brinquedo de lamber.'], hint: 'O cão precisa estar calmo para avançar.' },
                { id: 's4-g4', title: 'Nível 1: Ligado longe, ar para longe', time: '30-60s', attention: 'Médio', actions: ['Ligue o secador no modo mais fraco, com o barulho ao fundo e sem vento direcionado ao cão.'], alert: 'Se houver tensão, faça uma pausa e volte ao nível 0.' },
                { id: 's4-g5', title: 'Nível 2: Ar na mão do tutor', time: '30-60s', attention: 'Médio', actions: ['Use sua mão como um "escudo". O vento bate na sua mão a 30-50 cm do cão.'], hint: 'Avance se o cão permanecer calmo.' },
                { id: 's4-g6', title: 'Nível 3: Dorso/laterais, longe', time: '10-20s', attention: 'Alto', actions: ['Mantenha o ar em movimento, a mais de 30 cm de distância, com passadas curtas.'], alert: 'Nunca pare o ar quente em um mesmo ponto.' },
                { id: 's4-g7', title: 'Nível 4: Mais perto, áreas menos sensíveis', time: '20-30s', attention: 'Alto', actions: ['Aproxime o secador para 20-30 cm, fazendo uma varredura rápida no dorso e laterais.'], hint: 'Patas e cabeça devem ser secas por último, ou apenas com a toalha.' },
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
