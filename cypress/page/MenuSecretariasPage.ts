export class MenuSecretariasPage {

    //clicar no menu Secretarias
    clickSecretarias() {
        cy.get('#pv_id_1_2 > :nth-child(1) > .p-menubar-item-link').click()
    }

    //clicar no submenu Prefeitos
    clickPrefeitos() {
        cy.get('#pv_id_1_2_0 > .p-menubar-item-content > [data-test="menu-item"]').click()
        cy.get('.section-title').should('have.text', 'Prefeitos')
    }

    //clicar no submenu Estrutura Organizacional / Organograma
    clickEstruturaOrganizacional() {
        cy.get('#pv_id_1_2_1 > .p-menubar-item-content > .p-menubar-item-link').click()
        //cy.get('.section-title').should('have.text', 'Prefeitos')
    }

    //clicar no submenu do submenu Secretarias
    clickSubSecretarias() {
        //cy.get('li[role="menuitem"][aria-label="Gabinete do Prefeito"] a').click()
        cy.contains('span', 'Secretarias')
            .trigger('mouseover', { force: true });
    }

}