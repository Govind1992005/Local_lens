/**
 * NightwatchJS End-to-End Test Suite for LocalLens
 * Verifies Next.js layout, state/city dynamic selection, hero background switching,
 * category filter cards, carousel interaction, interactive map, and AI trip planner.
 */

module.exports = {
  '@tags': ['e2e', 'frontend', 'locallens'],

  '1. Initial page load and Top Navigation bar': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .assert.visible('header')
      .assert.containsText('header', 'LocalLens')
      .assert.containsText('header', 'Discover a place like a local.')
      .assert.visible('button:contains("Login")');
  },

  '2. Dynamic State Selection updates Hero Section': function (browser) {
    browser
      .waitForElementVisible('#hero', 5000)
      .assert.containsText('#hero h1', 'DISCOVER YOUR')
      .assert.containsText('#hero h1', 'ANDHRA PRADESH')
      
      // Select Rajasthan state from dropdown
      .click('#hero select:first-of-type')
      .setValue('#hero select:first-of-type', 'rajasthan')
      .pause(500)
      .assert.containsText('#hero h1', 'RAJASTHAN');
  },

  '3. Dynamic City Dropdown population': function (browser) {
    browser
      // Verify city options for Rajasthan
      .assert.elementPresent('#hero select:nth-of-type(2) option[value="jaipur"]')
      .assert.elementPresent('#hero select:nth-of-type(2) option[value="udaipur"]')
      
      // Select Jaipur
      .setValue('#hero select:nth-of-type(2)', 'jaipur');
  },

  '4. Quick Category Cards Interaction': function (browser) {
    browser
      .waitForElementVisible('#categories', 5000)
      .assert.containsText('#categories', 'Browse by Category')
      .click('#categories > div:nth-child(2) > div:nth-child(1)') // Food category
      .pause(300);
  },

  '5. Popular Places and Taste the Region Carousels': function (browser) {
    browser
      .waitForElementVisible('#places', 5000)
      .assert.containsText('#places', 'Popular Places')
      .waitForElementVisible('#food', 5000)
      .assert.containsText('#food', 'Taste the Region')
      .assert.containsText('#food', 'Trust Score');
  },

  '6. Interactive Map landmark selector': function (browser) {
    browser
      .waitForElementVisible('#map', 5000)
      .assert.containsText('#map', 'Interactive Map')
      .click('#map div.cursor-pointer:first-of-type')
      .assert.visible('#map button:contains("Get Directions")');
  },

  '7. AI Trip Planner Itinerary Generation': function (browser) {
    browser
      .waitForElementVisible('#planner', 5000)
      .assert.containsText('#planner', 'AI Multi-Day Itinerary Generator')
      .click('#planner button[type="submit"]')
      .pause(1200)
      .assert.containsText('#planner', 'AI Generated Custom Plan')
      .assert.containsText('#planner', 'Day 1:')
      .end();
  }
};
