import { CidadaoPage } from '../page/LoginPage';

describe('acesso rápido Cidadão', () => {

  const cidadaoPage = new CidadaoPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('Farmácia Móvel', () => {
    
  });

});