
// Este arquivo não é mais necessário, pois as imagens estão sendo referenciadas localmente em data.ts
// e os dados JSON foram removidos.
// Manter um arquivo vazio ou removê-lo completamente são opções válidas.
// Para evitar erros de importação, vamos manter um export vazio.

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [];

    