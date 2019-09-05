describe('Home Page', function () {
  
  it('successfully loads', function () {
  
    cy.visit('http://localhost:8080/dashboard')
  
  })

})

describe('Click on hero Element', function () {

  beforeEach(() => {

    cy.visit('http://localhost:8080/dashboard')

  })

  it('Click on a hero', function () {

    cy.get('a[name=narco]').click()

  })

})

describe('Click on hero Element and go back', function () {

  beforeEach(() => {

    cy.visit('http://localhost:8080/dashboard')

  })

  it('Click on a hero and go back', function () {

    cy.get('a[name=bombasto]').click()

    cy.get('button[name=goback]').click()

    cy.url().should('include', '/dashboard')

  })

})

describe('Click on hero list and go back', function () {

  beforeEach(() => {

    cy.visit('http://localhost:8080/dashboard')

  })

  it('Click on hero list', function () {

    cy.get('a[href="/heroes"]').click()

    cy.url().should('include', '/heroes')

  })

  it('Click on hero list and go back to home', function () {

    cy.get('a[href="/heroes"]').click()

    cy.url().should('include', '/heroes')

    cy.get('button[name=goback]').click()

    cy.url().should('include', '/dashboard')

  })

  it('Click on hero, change it\'s name, go back to heroes list, validate new name and go back to home', function () {

    cy.get('a[href="/heroes"]').click()

    cy.url().should('include', '/heroes')

    cy.get('a').eq(2).click()

    cy.get('input').clear()

    cy.get('input').type('Fabio')

    cy.get('h2').eq(0).contains('FABIO')

    cy.get('button[name=goback]').click()

    cy.url().should('include', '/heroes')

    cy.get('a').eq(2).contains('Fabio')

    cy.get('button[name=goback]').click()

    cy.url().should('include', '/dashboard')

  })
  

})

// context('Actions', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:8080/dashboard')
//   })

//   it('.click() - click on a DOM element', () => {
//     // https://on.cypress.io/click
//     cy.get('narco').click()

//     // You can click on 9 specific positions of an element:
//     //  -----------------------------------
//     // | topLeft        top       topRight |
//     // |                                   |
//     // |                                   |
//     // |                                   |
//     // | left          center        right |
//     // |                                   |
//     // |                                   |
//     // |                                   |
//     // | bottomLeft   bottom   bottomRight |
//     //  -----------------------------------

//     // clicking in the center of the element is the default
//     cy.get('#action-canvas').click()

//     cy.get('#action-canvas').click('topLeft')
//     cy.get('#action-canvas').click('top')
//     cy.get('#action-canvas').click('topRight')
//     cy.get('#action-canvas').click('left')
//     cy.get('#action-canvas').click('right')
//     cy.get('#action-canvas').click('bottomLeft')
//     cy.get('#action-canvas').click('bottom')
//     cy.get('#action-canvas').click('bottomRight')

//   })

//   it('cy.scrollTo() - scroll the window or element to a position', () => {

//     // https://on.cypress.io/scrollTo

//     // You can scroll to 9 specific positions of an element:
//     //  -----------------------------------
//     // | topLeft        top       topRight |
//     // |                                   |
//     // |                                   |
//     // |                                   |
//     // | left          center        right |
//     // |                                   |
//     // |                                   |
//     // |                                   |
//     // | bottomLeft   bottom   bottomRight |
//     //  -----------------------------------

//     // if you chain .scrollTo() off of cy, we will
//     // scroll the entire window
//     cy.scrollTo('bottom')

//     cy.get('#scrollable-horizontal').scrollTo('right')

//     // or you can scroll to a specific coordinate:
//     // (x axis, y axis) in pixels
//     cy.get('#scrollable-vertical').scrollTo(250, 250)

//     // or you can scroll to a specific percentage
//     // of the (width, height) of the element
//     cy.get('#scrollable-both').scrollTo('75%', '25%')

//     // control the easing of the scroll (default is 'swing')
//     cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })

//     // control the duration of the scroll (in ms)
//     cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
//   })
// })
