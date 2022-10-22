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

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

/*type AccountApi = {
  id: string;
  nome: string;
  idade: number;
};
*/
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'dasd23423b345lk',
  nome: 'bruno',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}
const accountApi = mapAccount(accountMongo);
console.log(accountApi);
export default 1;
