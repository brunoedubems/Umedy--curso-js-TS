import { Console } from 'console';

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  /*JEITO ANTIGO DE FAZER*/
  /*setCpf(valor: string): void {
    this.cpf = valor;
  }
  */
  getNome(): string {
    return this.nome;
  }

  //MODO NOVO DE FAZER
  set Cpf(valor: string) {
    Console.log('setter chamado');
    this._cpf = valor;
  }

  /* getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }*/

  get Cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Bruno', 'Eduardo', 31, '123.456.414-12');
console.log(pessoa.getNome());
//console.log(pessoa.getCpf());
//console.log(pessoa.setCpf('123.456.414-66'));

pessoa.Cpf = '123.456.414-44';
