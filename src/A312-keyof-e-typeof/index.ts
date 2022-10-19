type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('azul', coresObj));

type EquipamentoValor = typeof equipamentos;
type EquipamentoChaves = keyof EquipamentoValor;

const equipamentos = {
  CRAS: 'CENTRO DE REFERENCIA DA FAMILIA',
  CREAS: 'CENTRO ESPECIAL DE REFERENCIAMENTO DA FAMILIA',
  UNIDADE: 'UNIDADE DE ACOLHIMENTO INSTITUCIONAL',
};

export function trazerNome(
  sigla: EquipamentoChaves,
  nome: EquipamentoValor,
): string {
  return nome[sigla];
}

console.log(trazerNome('CRAS', equipamentos));
