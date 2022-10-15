export class Equipamento {
  private readonly nome: string;
  private sobrenome: string;
  protected endereco: string;

  constructor(nome: string, sobrenome: string, endereco: string) {
    (this.nome = nome),
      (this.sobrenome = sobrenome),
      (this.endereco = endereco);
  }

  getNome(): string {
    return this.nome;
  }
  getSobrenome(): string {
    return this.sobrenome;
  }
  getEndereco(): string {
    return this.endereco;
  }

  getNomeCompleto(): string {
    return `Isso vem do Equipamento ${this.nome} ${this.sobrenome}`;
  }
}

export class Cras extends Equipamento {
  constructor(
    nome: string,
    sobrenome: string,
    endereco: string,
    public vunerabilidade: string,
  ) {
    super(nome, sobrenome, endereco);
  }

  getNomeCompleto(): string {
    return `Isso vem do CRAS ${this.getNome()}`;
  }
}
//

const cras = new Cras(
  'CRAS PORTEIRINHA',
  'CASA DAS CrasS',
  'Rua montes claros 328',
  'Material',
);

// console.log(cras);
// console.log(cras.getNome());
console.log(cras.getNomeCompleto());
