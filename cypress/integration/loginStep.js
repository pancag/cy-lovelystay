/// <reference types="cypress"/>

import LoginPage from '../pageObjects/loginPage'
const loginPage = new LoginPage

Given("Que acesso a homepage do IMDb", () => {
    loginPage.acessarSite();
})