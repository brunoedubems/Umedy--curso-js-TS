export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return `${this.nome}  ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log(
      `Isso vem do Aluno ${this.nome}  ${this.sobrenome}, fazendo isso antes`,
    );
    const result = super.getNomeCompleto();
    return result + 'posso alterar o valor da super classe';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do cliente ${this.nome}  ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Bruno', 'Eduardo', 31, '000.000.000-00');
const aluno = new Aluno('Bruno', 'Eduardo', 31, '000.000.000-00', 'asa');
const cliente = new Cliente('Bruno', 'Eduardo', 31, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
