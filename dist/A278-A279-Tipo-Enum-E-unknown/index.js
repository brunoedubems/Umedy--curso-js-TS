"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escolhaACor = void 0;
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHO"] = 0] = "VERMELHO";
    Cores[Cores["AZUL"] = 1] = "AZUL";
    Cores[Cores["AMARELO"] = 2] = "AMARELO";
})(Cores || (Cores = {}));
var Cores1;
(function (Cores1) {
    Cores1[Cores1["VERMELHO"] = 10] = "VERMELHO";
    Cores1[Cores1["AZUL"] = 100] = "AZUL";
    Cores1[Cores1["AMARELO"] = 200] = "AMARELO";
    Cores1["ROXO"] = "ROXO";
    Cores1[Cores1["VERDE"] = 201] = "VERDE";
    Cores1[Cores1["ROSA"] = 202] = "ROSA";
})(Cores1 || (Cores1 = {}));
console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores1[10]);
console.log(Cores1.ROXO);
var Cores2;
(function (Cores2) {
    Cores2[Cores2["VERMELHO"] = 10] = "VERMELHO";
    Cores2[Cores2["AZUL"] = 100] = "AZUL";
    Cores2[Cores2["AMARELO"] = 200] = "AMARELO";
})(Cores2 || (Cores2 = {}));
(function (Cores2) {
    Cores2["ROXO"] = "ROXO";
    Cores2[Cores2["VERDE"] = 201] = "VERDE";
    Cores2[Cores2["ROSA"] = 202] = "ROSA";
})(Cores2 || (Cores2 = {}));
console.log(Cores2);
function escolhaACor(cor) {
    console.log(Cores2[cor]);
}
exports.escolhaACor = escolhaACor;
escolhaACor(13123);
//########################## unknown #############
let x;
x = 100;
x = 'bruno';
x = 900;
x = '10';
const y = 800;
if (typeof x === 'number')
    console.log(x + y);
