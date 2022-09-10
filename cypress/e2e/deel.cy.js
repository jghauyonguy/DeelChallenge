import {DeelPage} from "../support/page/DeelPage";
import { slowCypressDown } from 'cypress-slow-down';

const deelPage = new DeelPage();

describe('User Signing Up on Deel', () => {
  beforeEach(() => {
    cy.viewport(1600,1000)
    slowCypressDown(500)

  })

  it('Navigates to Deel website',  () => {
    cy.visit('/');
    cy.log('Validating Login container box is visible.');
    cy.get(deelPage.elements.loginContainer).should('be.visible', 'Title is expected to be visible');

  });

  it('User Signing Up as a Contractor',  () => {
    cy.visit('/signup')
    cy.get(deelPage.text.useDeelTitle).should('include.text', 'How will you use Deel?');
    cy.get(deelPage.elements.contractorSelect).click();
    cy.log('Verifying that description changed when click on Im a Contractor');
    cy.get(deelPage.text.contractorTittle).should('include.text', 'Sign up as a contractor to');
    cy.wait(2000)
    cy.get(deelPage.elements.nextButton).click();
  })

  it('Fill data to create Deel account',  () => {
    cy.wait(1000)
    cy.get(deelPage.elements.signupinputfields).should('be.visible');
    cy.get(deelPage.input.firstName).type('testFirstName');
    cy.get(deelPage.input.lastName).type('testLastName');

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testEmail = `testEmail${id}`

    cy.get(deelPage.input.email).type(testEmail + '@gmail.com');
    cy.get(deelPage.input.password).type('TestPassword12!');
    cy.get(deelPage.elements.deelMultiSelect).click();
    cy.get(deelPage.elements.optionsAboutDeel).click();
    cy.get(deelPage.input.heardAboutDeel).type('testingPurpose');
    cy.get(deelPage.elements.createDeelAccountBttn).click({force:true});









  })
})
