/*eslint-disable*/

let nome: string = 'luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer symbol')



//array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeString: string[] = ['a','b'];


//objetos
let pessoa: {
  nome:string,
  idade:number,
  adulto?:boolean}
  = {
  nome: 'bruno',
  idade: 31,
}

//function
function soma(x:number, y:number): number{
  return x+y;
}
const result = soma(2,2)


const soma2: (x:number, y: number) => number = (x,y) => x + y;

