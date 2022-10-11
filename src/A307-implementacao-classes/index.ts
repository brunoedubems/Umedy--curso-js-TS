//export abstract class TipoPessoa {
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomecompleto(): string;
};

export class Pessoa1 implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomecompleto(): string {
    return this.nome + this.sobrenome;
  }
}

const pessoa1 = new Pessoa1('Bruno', 'Eduardo');

type TipoNome = {
  nome: string;
};

type Tiposobrenome = {
  sobrenome: string;
};
type TipoNomecompleto = {
  nomecompleto: () => string;
};

export class Pessoa implements TipoNome, Tiposobrenome, TipoNomecompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomecompleto(): string {
    return this.nome + this.sobrenome;
  }
}

const pessoa = new Pessoa('Bruno', 'Eduardo');
