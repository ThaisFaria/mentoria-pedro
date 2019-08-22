const { contandoCarneirinhos } = require('../../contandoCarneirinhos');

describe('Retornar uma string com a contagem dos carneirinhos', () => {
  it('Contando carneirinhos - 1', () => {
      const texto = contandoCarneirinhos(1);
      expect(texto).to.be.eql('1 carneirinhos...');
  });

  it('Contando carneirinhos - 2', () => {
    const texto = contandoCarneirinhos(2);
    expect(texto).to.be.eql('1 carneirinhos...2 carneirinhos...');
  });

  it('Contando carneirinhos - 3', () => {
    const texto = contandoCarneirinhos(3);
    expect(texto).to.be.eql('1 carneirinhos...2 carneirinhos...3 carneirinhos...');
  });

  it('Contando carneirinhos - 4', () => {
    const texto = contandoCarneirinhos(0);
    expect(texto).to.be.eql('Sem carneirinhos');
  });
});
