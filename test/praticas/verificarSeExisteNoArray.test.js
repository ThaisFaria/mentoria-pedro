const { verificarSeExisteNoArray } = require('../../verificarSeExisteNoArray');

describe('Receber um array e um valor e retornar se o valor existe no array', () => {
    it('Valor que existe no array - 1', () => {
        const array = ['Pedro', 'Rebeca', 'Taylon'];
        const valor = 'Rebeca';
        const existe = verificarSeExisteNoArray(array, valor);
        expect(existe).to.be.true;
    });

    it('Valor que existe no array - 2', () => {
        const array = [1, 2, 3, 4, 5];
        const valor = 5;
        const existe = verificarSeExisteNoArray(array, valor);
        expect(existe).to.be.true;
    });

    it('Valor que existe no array - 3', () => {
        const array = [1, 2, 3, 4, 5];
        const valor = 1;
        const existe = verificarSeExisteNoArray(array, valor);
        expect(existe).to.be.true;
    });

    it('Valor que não existe no array - 1', () => {
        const array = ['Pedro', 'Rebeca', 'Taylon'];
        const valor = 'Thais';
        const existe = verificarSeExisteNoArray(array, valor);
        expect(existe).to.be.false;
    });

    it('Valor que não existe no array - 2', () => {
        const array = [1, 2, 3, 4, 5];
        const valor = 9;
        const existe = verificarSeExisteNoArray(array, valor);
        expect(existe).to.be.false;
    });
});
