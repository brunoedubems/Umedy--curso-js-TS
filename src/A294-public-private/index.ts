export class Empresas {
  readonly nome: string; // public ja vai automatico
  private readonly colaboladores: Colabolador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  public adicionaColaborador(colabolador: Colabolador): void {
    this.colaboladores.push(colabolador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboladores) {
      console.log(colaborador);
    }
  }

  public getNome(): string {
    return this.nome;
  }
}

export class Colabolador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresas('udemy', '11.1151.1515.454');
console.log(empresa1);
const colaborador1 = new Colabolador('Luiz', 'Otavio');
const colaborador2 = new Colabolador('Bruno', 'Eduardo');
const colaborador3 = new Colabolador('Marlon', 'tereza');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
empresa1.adicionaColaborador({
  nome: 'Bruno',
  sobrenome: 'Eduardoooo',
});
empresa1.mostrarColaboradores();
console.log(empresa1);

/*aula 294*/
console.log(empresa1.nome, empresa1.getNome());
