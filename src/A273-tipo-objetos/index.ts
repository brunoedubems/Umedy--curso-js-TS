const objetoA: {
  readonly chaveA: string; //       readonly >>nao altera o valor
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveC = 'nova chave';
objetoA.chaveD = 'nova chave';
