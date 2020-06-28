export interface Usuario {
  id: string;
  email: string;
  time: {
    nome: string,
    nomeTime: string
    scores: [
      {
        score: number
      }
      ];
    somaScores: number
  };
  carteira: {
    montanteCarteira: number
  };
}
