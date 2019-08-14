const { getHighestScore } = require('../getHighestScore');

describe('Logar candidate', () => {
    it('pegar o melhor jogador do lol', () => {
        const jogadores = [{
            nome: 'Pedro',
            score: 99,
        },
        {
            nome: 'Thais',
            score: 20,
        }, {
            nome: 'Rebeca',
            score: 89,
        }];
        const top = getHighestScore(jogadores);
        expect(top).to.be.eql({
            nome: 'Pedro',
            score: 99,
        });
    });


});
