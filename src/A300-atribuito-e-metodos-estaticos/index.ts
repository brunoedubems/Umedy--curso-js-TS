export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
}

const pessoa = new Pessoa('Bruno', 'Eduardo', 31, '123.456.414-12');
pessoa.cpf = '123.456.414-44';
