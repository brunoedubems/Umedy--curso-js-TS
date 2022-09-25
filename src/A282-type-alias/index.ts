import { access } from 'fs';

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemIdade & TemSobrenome;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD;
const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(pessoa);
