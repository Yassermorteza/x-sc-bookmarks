const assert = require('assert');

const checkStyle = require('xt-sc-bookmarks');

describe('Bookmarks tool', function() {
  var elements;

  before(function() {
    browser.url('http://localhost:9090');
  });

  describe('normal design', function() {
    Object.keys(checkStyle.resolutions).forEach(key => {
      it('has the right styles for ' + key.split('-').join(' '), function () {
        checkStyle(browser, key, null, './docs/image-diffs', 5);
      });
    });
  });
});