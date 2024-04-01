/* global Feature Scenario */

Feature('app')

Scenario('@app should open app', ({ I }) => {
  I.amOnPage('/')
  I.waitForText('Home')
})
