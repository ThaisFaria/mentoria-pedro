const { 
  somarDoisValores, 
  subtrairDoisValores,
  multiplicarDoisValores,
  dividirDoisValores,
 } = require('../../calculoDeValores');

describe('Testes de calculos matemáticos', () => {
  describe('SomarDoisValores', () => {
    it('Retornar a soma de dois valores - 1', () => {
        const resultado = somarDoisValores(1, 9);
        expect(resultado).to.be.eql(10);
    });

    it('Retornar a soma de dois valores - 2', () => {
      const resultado = somarDoisValores(0, 0);
      expect(resultado).to.be.eql(0);
    });

    it('Retornar a soma de dois valores - 3', () => {
      const resultado = somarDoisValores(-9, 29);
      expect(resultado).to.be.eql(20);
    });

    it('Retornar a soma de dois valores - 4', () => {
      const resultado = somarDoisValores(128098, 5);
      expect(resultado).to.be.eql(128103);
    });
  });

  describe('Subtrair dois valores', () => {
    it('Retornar a subtração de dois valores - 1', () => {
        const resultado = subtrairDoisValores(9, 1);
        expect(resultado).to.be.eql(8);
    });

    it('Retornar a subtração de dois valores - 2', () => {
      const resultado = subtrairDoisValores(0, 0);
      expect(resultado).to.be.eql(0);
    });

    it('Retornar a subtração de dois valores - 3', () => {
      const resultado = subtrairDoisValores(-9, 29);
      expect(resultado).to.be.eql(-38);
    });

    it('Retornar a subtração de dois valores - 4', () => {
      const resultado = subtrairDoisValores(128098, 5);
      expect(resultado).to.be.eql(128093);
    });
  });

  describe('Multiplicar dois valores', () => {
    it('Retornar o produto de dois valores - 1', () => {
        const resultado = multiplicarDoisValores(2, 10);
        expect(resultado).to.be.eql(20);
    });

    it('Retornar o produto de dois valores - 2', () => {
      const resultado = multiplicarDoisValores(7, 9);
      expect(resultado).to.be.eql(63);
    });

    it('Retornar o produto de dois valores - 3', () => {
      const resultado = multiplicarDoisValores(4, -30);
      expect(resultado).to.be.eql(-120);
    });

    it('Retornar o produto de dois valores - 4', () => {
      const resultado = multiplicarDoisValores(100, 100);
      expect(resultado).to.be.eql(10000);
    });
  });

  describe('Dividir dois valores', () => {
    it('Retornar o resultado da divisão de dois valores - 1', () => {
        const resultado = dividirDoisValores(10, 2);
        expect(resultado).to.be.eql(5);
    });

    it('Retornar o resultado da divisão de dois valores - 2', () => {
      const resultado = dividirDoisValores(15, 3);
      expect(resultado).to.be.eql(5);
    });

    it('Retornar o resultado da divisão de dois valores - 3', () => {
      const resultado = dividirDoisValores(4, 1);
      expect(resultado).to.be.eql(4);
    });

    it('Retornar o resultado da divisão de dois valores - 4', () => {
      const resultado = dividirDoisValores(-90, 2);
      expect(resultado).to.be.eql(-45);
    });
  });

});
