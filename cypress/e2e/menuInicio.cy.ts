import { MenuInicioPage } from '../page/MenuInicioPage';

describe('Logout', () => {

  const menuInicioPage = new MenuInicioPage(); // ✅ cria instância

  beforeEach(() => {
    cy.visit('/');
  });

  it('logout sucess', () => {
    menuInicioPage.clickInicio(); // ✅ usa o método da instância
  });
});
