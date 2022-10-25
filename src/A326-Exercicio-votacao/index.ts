type VotationOption = {
  numberOfvotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(VotationOption: VotationOption): void {
    this._votationOptions.push(VotationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfvotes);
      }
    }
  }
}

const votations1 = new Votation('Qual sua Linguagem de programação Favorita');
votations1.addVotationOption({ option: 'JS', numberOfvotes: 0 });
votations1.addVotationOption({ option: 'Pyton', numberOfvotes: 0 });
votations1.addVotationOption({ option: 'typeScript', numberOfvotes: 0 });
votations1.vote(1);
votations1.vote(1);
votations1.vote(1);
votations1.vote(1);
const votations2 = new Votation('Qual sua cor');
votations2.addVotationOption({ option: 'amarelo', numberOfvotes: 0 });
votations2.addVotationOption({ option: 'azul', numberOfvotes: 0 });
votations2.addVotationOption({ option: 'vermelho', numberOfvotes: 0 });
votations2.addVotationOption({ option: 'marron', numberOfvotes: 0 });
votations2.vote(1);
votations2.vote(1);
votations2.vote(1);
votations2.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votations1);
votationApp.addVotation(votations2);
votationApp.showVotations();
