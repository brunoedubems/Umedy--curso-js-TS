export class Empresa {
  readonly nome: string; // public ja vai automatico
  protected readonly colaboladores: Colabolador[] = [];
  private readonly cnpj: string;

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
export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colabolador | null {
    const colaborador = this.colaboladores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colabolador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
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

const colaboradorRemovido = empresa1.popColaborador();
/*aula 294*/
console.log(empresa1.nome, empresa1.getNome());
console.log(colaboradorRemovido);
