interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Bruno',
  sobrenome: 'Miranda',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 345,
  idade: 30,
};

const aluno3: PessoaProtocolo = {
  nome: 'Bruno',
  sobrenome: 'Miranda',
  idade: 30,
};
