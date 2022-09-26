"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLowerCase = exports.toUpperCase = exports.concatenaString = exports.multiplicaArgs = void 0;
// Array<T> - T[]
function multiplicaArgs(...args) {
    return args.reduce((ac, valor) => ac * valor, 1);
}
exports.multiplicaArgs = multiplicaArgs;
// Array<T> - T[]
function concatenaString(...args) {
    return args.reduce((ac, valor) => ac + valor);
}
exports.concatenaString = concatenaString;
function toUpperCase(...args) {
    return args.map((valor) => valor.toUpperCase());
}
exports.toUpperCase = toUpperCase;
const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');
console.log(result);
console.log(concatenacao);
console.log(upper);
//##################treinamento############
/*Coloque o array em minusculo*/
function toLowerCase(...args) {
    return args.map((valor) => valor.toLowerCase());
}
exports.toLowerCase = toLowerCase;
const lowerCase = toLowerCase('BRUNO', 'EDUARDO', 'MAGALHAES');
console.log(lowerCase);
