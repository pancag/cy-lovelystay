/// <reference types="cypress"/>

describe('Lovely Stay', () => {
        it('User pesquisa por datas', () => {
            cy.visit('https://www.lovelystay.com/en/listings/1/');
                cy.get('[name=geoZoneId]').select("Lisboa");
                
                // check-in
                cy.get('[placeholder="Check-in"]').click();
                cy.get('[class="react-datepicker__month-select"]').select("June");
                cy.get('[aria-label="day-8"]').click();

                //check-out
                cy.get('[placeholder="Check-out"]').click();
                cy.get('[class="react-datepicker__month-select"]').select("June");
                cy.get('[aria-label="day-12"]').click();
                
                //guests
                cy.get('[name="numberOfGuests"]').select("2");
                cy.get('[rel="nofollow"]').click();
        });
});
