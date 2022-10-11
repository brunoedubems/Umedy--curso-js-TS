//DECLARATION MERGING ---- OCORRE A UNIAO DAS INTERFACES
interface Pessoa {
  nome: string;
  sobrenome: string;
}
interface Pessoa {
  readonly idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Bruno',
  sobrenome: 'Eduardo',
};
