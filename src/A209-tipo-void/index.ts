function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'bruno',
  sobrenome: 'eduardo',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
semRetorno('bruno', 'eduardo');

export { pessoa };
