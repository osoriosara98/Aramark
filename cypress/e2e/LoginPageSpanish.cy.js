 describe('Login Page Spanish', () => {

    beforeEach(() => {
      cy.visit('https://myportallogindev.aramark.com/login')
      cy.viewport(1280, 720)
    })



    it('Aramark logo should be displayed on the page', () => {
        cy.get('.auth__logo').should('be.visible')
      })


      it('should display "Welcome back!" title with the right characteristics', () => {
        cy.get('.typography.h1.text-preset-2--medium')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(0, 0, 0)')
          .contains('Bienvenido')
      })


      it('should display Auth banner on the right with an image', () => {
        cy.wait(500)
        cy.get('.auth__banner').should('be.visible')
      })


      it('should display a paragraph saying "Indica campos obligatorios"', () => {
        cy.get('.typography.p.text-preset-7')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(0, 0, 0)')
          .contains('* indicates a required field')
      })

      it('Nombre de usuario should be visible and have the right characteristics ', () => {
        cy.get('[data-testid="email"] > .input > label > .input__label > .input__label-main > :nth-child(1) > .typography')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(0, 0, 0)')
          .contains('Nombre de usuario')
      })
    
      it('should display a textbox to enter the email with the right characteristics', () => {
        cy.get('#email')
          .should('be.visible')
          .should('have.attr', 'placeholder','Nombre de usuario')
      })

      it('should highlight email textbox with a black box when hovering over it', () => {
        cy.get('input[type="email"]')
          .trigger('mouseover')
          .should('have.css', 'box-shadow')

       })

       it('Contraseña should be visible and have the right characteristics ', () => {
        cy.get('[data-testid="password"] > .input > label > .input__label > .input__label-main > :nth-child(1) > .typography')
          .should('be.visible')
          .should('have.css', 'color', 'rgb(0, 0, 0)')
          .contains('Contraseña')
      })

      it('should display a textbox to enter the password with the right characteristics', () => {
        cy.get('#password')
          .should('be.visible')
          .should('have.attr', 'placeholder','Contraseña')
      })

      //it's not finding the link
      it('Verify that hyperlink "¿Olvidaste tu contraseña?" exists and has the right characteristics', () => {
        cy.get('.link__label')
          .should('be.visible')
          .should('have.css', 'color','rgb(235, 0, 42)')
          .should('have.class','.link__label text-preset-9--underline text-preset-7--medium')
          .contains('Forgot password?')
      })


      it('Verify that checkbox "Recordarme" is visible and checkeable', () => {
        cy.get('#rememberme').check()
          .should('be.visible')
        
      })





      it('should display a textbox to enter the password with the right characteristics', () => {
        cy.get('aus-button')
          .should('be.visible')
          .contains('Conectar')
      })






















})  