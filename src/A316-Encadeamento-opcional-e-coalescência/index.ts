// encadeamento opcional e operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  //data: new Date(),
};
console.log(
  documento.data?.toDateString() ??
    '1 -Não existe data, só é ativado se retornar null ou undefided',
);
console.log(undefined ?? '2- undefided - Não existe data');
console.log(null ?? '3- null - Não existe data');
console.log(0 ?? '4- 0 - Não existe data');
console.log('' ?? '5- string vazia - Não existe data');
console.log('' ?? '5- string vazia - Não existe data');
console.log(false ?? '6- false vazia - Não existe data');
