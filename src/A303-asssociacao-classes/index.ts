export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    // console.log(`${this.nome} está atacando.`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`);
  }
  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + 'Sou guerreira e estou atacando kkkk');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9Df}';
  bordao(): void {
    console.log(this.emoji + 'Sou guerreiro e estou atacando kkkk');
  }
}

const guerreira = new Guerreira('guerreira', 100, 1000);
const mostro = new Monstro('mostro', 87, 1000);

guerreira.atacar(mostro);
guerreira.atacar(mostro);
mostro.atacar(guerreira);
mostro.atacar(guerreira);
mostro.atacar(guerreira);
