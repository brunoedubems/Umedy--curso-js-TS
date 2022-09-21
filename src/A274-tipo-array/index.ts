// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

// Array<T> - T[]
export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);

//##################treinamento############

/*Coloque o array em minusculo*/

export function toLowerCase(...args: string[]): string[] {
  return args.map((valor) => valor.toLowerCase());
}
const lowerCase = toLowerCase('BRUNO', 'EDUARDO', 'MAGALHAES');

console.log(lowerCase);
