export function add(a: unknown, b: unknown): number | string {
  //  return typeof a === 'number' && typeof b === 'number' ?  a + b : `${a}${b}`;
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 2));
console.log(add('A', 'B'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';

  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal) {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('isso é animal');
      console.log(obj.cor);
      return;
  }
}

mostraNome(new Aluno('João'));
mostraNome({ tipo: 'animal', cor: 'Rosa' });
