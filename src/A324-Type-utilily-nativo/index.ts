const objeto1: Record<string, string | number> = {
  nome: 'Bruno',
  sobrenome: 'Eduardo',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome: string;
  sobrenome?: string;
  idade?: number;
};

//required → pode ser modificado
type PessoaRequired = Required<PessoaProtocol>;

//partial→ deixa opcional
type PessoaPartial = Partial<PessoaProtocol>;

//Readonly→ nao altera
type PessoaReadonly = Readonly<PessoaProtocol>;

//pick
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Bruno',
  sobrenome: 'Eduardo',
  idade: 30,
};

console.log(objeto2);
//

//extract e exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; //pega os dados que NAO ESTAO em CDE, no caso o que nao repete
type TipoExtract = Extract<ABC, CDE>; //  pega todos os que ESTAO REPETIDOS NOS TYPE, NO CASO A LETRA "C"

export default 1;
