//TUPLE
const dadosCliente1: readonly [number, string] = [1, 'Bruno'];
const dadosCliente2: [number, string, string] = [1, 'Bruno', 'Eduardo'];
const dadosCliente3: [number, string, string?] = [1, 'Bruno'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Bruno', 'eduardo'];

//dadosCliente1[0] = 100;
dadosCliente2[1] = 'Breno';
//dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//READONLY ARRAY
const array1: readonly string[] = ['bruno', 'eduardo'];
const array2: ReadonlyArray<string> = ['bruno', 'eduardo'];

console.log(array1);
console.log(array2);
