module.exports = {
  src_folders: ['tests/e2e'],
  page_objects_path: [],
  custom_commands_path: [],
  custom_assertions_path: [],

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost:3000',

      screenshots: {
        enabled: true,
        path: 'tests/e2e/screenshots',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: ['--headless', '--no-sandbox', '--disable-gpu']
        }
      }
    }
  }
};
