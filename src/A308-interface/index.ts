//type TipoNome = {
interface TipoNome {
  nome: string;
}

interface Tiposobrenome {
  sobrenome: string;
}
//type TipoNomecompleto = {
interface TipoNomecompleto {
  nomecompleto(): string;
}

type TipoPessoa = TipoNome & Tiposobrenome & TipoNomecompleto;
interface TipoPessoa2 extends TipoNome, Tiposobrenome, TipoNomecompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomecompleto(): string {
    return this.nome + this.sobrenome;
  }
}

const pessoa = new Pessoa('Bruno', 'Eduardo');
