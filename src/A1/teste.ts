export class Equipamento {
  protected _nome: string;
  protected _sobrenome: string;
  protected _endereco: string;

  constructor(nome: string, sobrenome: string, endereco: string) {
    (this._nome = nome),
      (this._sobrenome = sobrenome),
      (this._endereco = endereco);
  }

  get nome(): string {
    return this._nome;
  }
  get sobrenome(): string {
    return this._sobrenome;
  }
  get endereco(): string {
    return this._endereco;
  }

  get nomeCompleto(): string {
    return `Isso vem do Equipamento ${this._nome} ${this._sobrenome}`;
  }
}

export class Cras extends Equipamento {
  constructor(
    nomeDoCras: string,
    sobrenome: string,
    endereco: string,
    public vunerabilidade: string,
  ) {
    super(nomeDoCras, sobrenome, endereco);
    // nomeDoCras = this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
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
console.log(cras.nomeCompleto);

cras.nome = 'bruno';
console.log(cras.nomeCompleto);
console.log(cras.nome);
