enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO, //2
}

enum Cores1 {
  VERMELHO = 10, //0
  AZUL = 100, //1
  AMARELO = 200, //2
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

console.log(Cores1[10]);
console.log(Cores1.ROXO);

enum Cores2 {
  VERMELHO = 10, //0
  AZUL = 100, //1
  AMARELO = 200, //2
}

enum Cores2 {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}
console.log(Cores2);

function escolhaACor(cor: Cores): void {
  console.log(Cores2[cor]);
}

escolhaACor(13123);

//########################## unknown #############
let x: unknown;
x = 100;
x = 'bruno';
x = 900;
x = '10';
const y = 800;
if (typeof x === 'number') console.log(x + y);
