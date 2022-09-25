let x = 10; //eslint-disable-line
x = 0b1010;
//modulo mode
let a = 100 as const;//eslint-disable-line

const pessoa = {
  name: 'Bruno' as const,
  sobrenome: 'Eduardo',
};

function escolhaCor(cor: 'Vermelho ' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Azul'));
export default 1;
