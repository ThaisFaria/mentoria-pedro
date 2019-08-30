const { 
  numeroImpar,
  numeroPar,
  numeroMultiploDe10,
  numeroMultiploDe5e10,
  numeroMultiploDe5ou10,
  silvioSantosPin,
  silvioSantosPinPon,
 } = require('../../moduloMatematico');

describe('Modulo Matemático', () => {
  describe('Numero Ímpar', () => {
    it('Verifica se um número é ímpar', () => {
      expect(numeroImpar(6)).to.eql(false);
      expect(numeroImpar(9)).to.eql(true);
      expect(numeroImpar(-633)).to.eql(true);
      expect(numeroImpar(8)).to.eql(false);
      expect(numeroImpar(-29308)).to.eql(false);
      expect(numeroImpar(37)).to.eql(true);
    });
  });

  describe('Numero Par', () => {
    it('Verifica se um número é par', () => {
      expect(numeroPar(6)).to.eql(true);
      expect(numeroPar(9)).to.eql(false);
      expect(numeroPar(-633)).to.eql(false);
      expect(numeroPar(8)).to.eql(true);
      expect(numeroPar(-29308)).to.eql(true);
      expect(numeroPar(37)).to.eql(false);
    });
  });

  describe('Numero Multiplo de 10', () => {
    it('Verifica se um número é multiplo de 10', () => {
      expect(numeroMultiploDe10(10)).to.eql(true);
      expect(numeroMultiploDe10(9)).to.eql(false);
      expect(numeroMultiploDe10(-633)).to.eql(false);
      expect(numeroMultiploDe10(80)).to.eql(true);
      expect(numeroMultiploDe10(-29300)).to.eql(true);
      expect(numeroMultiploDe10(37)).to.eql(false);
    });
  });

  describe('Numero Multiplo de 5 e 10', () => {
    it('Verifica se um número é multiplo de 5 e 10, () => {
      expect(numeroMultiploDe5e10(50)).to.eql(true);
      expect(numeroMultiploDe5e10(9)).to.eql(false);
      expect(numeroMultiploDe5e10(-633)).to.eql(false);
      expect(numeroMultiploDe5e10(100)).to.eql(true);
      expect(numeroMultiploDe5e10(-350)).to.eql(true);
      expect(numeroMultiploDe5e10(37)).to.eql(false);
    });
  });

  describe('Numero Multiplo de 5 ou 10', () => {
    it('Verifica se um número é multiplo de 5 ou 10', () => {
      expect(numeroMultiploDe5ou10(50)).to.eql(true);
      expect(numeroMultiploDe5ou10(5)).to.eql(true);
      expect(numeroMultiploDe5ou10(-633)).to.eql(false);
      expect(numeroMultiploDe5ou10(105)).to.eql(true);
      expect(numeroMultiploDe5ou10(-335)).to.eql(true);
      expect(numeroMultiploDe5ou10(37)).to.eql(false);
    });
  });

  describe('Silvio Santos Pin', () => {
    it('Conta até o numero dado, substituindo multiplos de 4 por PIN', () => {
      expect(silvioSantosPin(3)).to.eql('1,2,3,');
      expect(silvioSantosPin(4)).to.eql('1,2,3,PIN,');
      expect(silvioSantosPin(7)).to.eql('1,2,3,PIN,5,6,7,');
      expect(silvioSantosPin(12)).to.eql('1,2,3,PIN,5,6,7,PIN,9,10,11,PIN,');
      expect(silvioSantosPin(18)).to.eql('1,2,3,PIN,5,6,7,PIN,9,10,11,PIN,13,14,15,PIN,17,18,');      
    });
  });

  describe('Silvio Santos PinPon', () => {
    it(`Conta até o numero dado, substituindo:
     multiplos de 3 por PIN,
     multiplos de 5 por PON,
     multiplos de 3 e 5 por PINPON`, () => {
      expect(silvioSantosPinPon(3)).to.eql('1,2,PIN,');
      expect(silvioSantosPinPon(4)).to.eql('1,2,PIN,4,PON,');
      expect(silvioSantosPinPon(7)).to.eql('1,2,PIN,4,PON,PIN,7,');
      expect(silvioSantosPinPon(12)).to.eql('1,2,PIN,4,PON,PIN,7,8,PIN,PON,11,PIN,13,14,PINPON');
      expect(silvioSantosPinPon(18)).to.eql('1,2,PIN,4,PON,PIN,7,8,PIN,PON,11,PIN,13,14,PINPON,16,17,PIN,');
    });
  });
});
