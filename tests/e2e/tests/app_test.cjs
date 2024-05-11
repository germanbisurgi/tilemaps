/* global Feature Scenario */

Feature('app')

Scenario('@app should open app', ({ I }) => {
  I.amOnPage('/')
  I.click('Add Layer')
  I.waitForElement('.map-container .layer')
})
