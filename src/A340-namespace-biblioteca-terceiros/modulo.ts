_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

global.MINHAGLOBAL = 'Inseri dentro da global';

// export default _;
