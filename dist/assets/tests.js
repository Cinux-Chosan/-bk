'use strict';

define('amazon/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/add.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/add.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/and.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/and.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/array.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/default.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/eq.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/eq.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/find-by.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/find-by.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/format-date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-date.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/gt.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/gt.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/gte.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/gte.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/in.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/in.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/inc.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/inc.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/lt.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/lt.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/lte.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/lte.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/minus.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/minus.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/not-eq.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/not-eq.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/not.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/not.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/number.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/number.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/object.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/or.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/or.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/set-and-return.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/set-and-return.js should pass ESLint\n\n6:10 - \'params\' is not defined. (no-undef)');
  });

  QUnit.test('helpers/string.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/string.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/to-fixed.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/to-fixed.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/xor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/xor.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/amazon-comp/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/amazon-comp/component.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/amazon-comp/goods/clothes.man.1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/amazon-comp/goods/clothes.man.1.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/amazon-comp/goods/clothes.man.2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/amazon-comp/goods/clothes.man.2.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/amazon-comp/goods/clothes.woman.1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/amazon-comp/goods/clothes.woman.1.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/amazon-comp/goods/clothes.woman.2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/amazon-comp/goods/clothes.woman.2.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/amazon-comp/goods/phone.1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/amazon-comp/goods/phone.1.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/amazon-comp/goods/phone.2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/amazon-comp/goods/phone.2.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pod/amazon/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/amazon/route.js should pass ESLint\n\n');
  });

  QUnit.test('pod/survey/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/survey/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pod/survey/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/survey/route.js should pass ESLint\n\n');
  });

  QUnit.test('pod/survey/survey-comp/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/survey/survey-comp/component.js should pass ESLint\n\n');
  });

  QUnit.test('pod/survey/survey-comp/surveys/survey.1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/survey/survey-comp/surveys/survey.1.js should pass ESLint\n\n');
  });

  QUnit.test('pod/survey/survey-comp/surveys/survey.2.1.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/survey/survey-comp/surveys/survey.2.1.js should pass ESLint\n\n');
  });

  QUnit.test('pod/survey/survey-comp/surveys/survey.2.2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/survey/survey-comp/surveys/survey.2.2.js should pass ESLint\n\n');
  });

  QUnit.test('pod/survey/survey-comp/surveys/survey.2.3.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pod/survey/survey-comp/surveys/survey.2.3.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('amazon/tests/integration/pod/components/amazon-comp/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
    'use strict';

    (0, _qunit.module)('Integration | Component | amazon-comp', function (hooks) {
        (0, _emberQunit.setupRenderingTest)(hooks);
        (0, _qunit.test)('it renders', async function (assert) {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.set('myAction', function(val) { ... });
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "goSWVSsi",
                "block": "{\"symbols\":[],\"statements\":[[1,[20,\"amazon-comp\"],false]],\"hasEval\":false}",
                "meta": {}
            }));
            assert.equal(this.element.textContent.trim(), '');
            // Template block usage:
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "iY1u/2aI",
                "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"amazon-comp\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                "meta": {}
            }));
            assert.equal(this.element.textContent.trim(), 'template block text');
        });
    });
});
define('amazon/tests/integration/pod/components/survey-comp/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
    'use strict';

    (0, _qunit.module)('Integration | Component | survey-comp', function (hooks) {
        (0, _emberQunit.setupRenderingTest)(hooks);
        (0, _qunit.test)('it renders', async function (assert) {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.set('myAction', function(val) { ... });
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "gPGURX8M",
                "block": "{\"symbols\":[],\"statements\":[[1,[20,\"survey-comp\"],false]],\"hasEval\":false}",
                "meta": {}
            }));
            assert.equal(this.element.textContent.trim(), '');
            // Template block usage:
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "Rdyfw0rE",
                "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"survey-comp\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                "meta": {}
            }));
            assert.equal(this.element.textContent.trim(), 'template block text');
        });
    });
});
define('amazon/tests/integration/pod/components/t-t-t/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
    'use strict';

    (0, _qunit.module)('Integration | Component | t-t-t', function (hooks) {
        (0, _emberQunit.setupRenderingTest)(hooks);
        (0, _qunit.test)('it renders', async function (assert) {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.set('myAction', function(val) { ... });
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "DTf9qvF8",
                "block": "{\"symbols\":[],\"statements\":[[1,[20,\"t-t-t\"],false]],\"hasEval\":false}",
                "meta": {}
            }));
            assert.equal(this.element.textContent.trim(), '');
            // Template block usage:
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "gkxCikgt",
                "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"t-t-t\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                "meta": {}
            }));
            assert.equal(this.element.textContent.trim(), 'template block text');
        });
    });
});
define('amazon/tests/integration/pod/components/t-t/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
    'use strict';

    (0, _qunit.module)('Integration | Component | t-t', function (hooks) {
        (0, _emberQunit.setupRenderingTest)(hooks);
        (0, _qunit.test)('it renders', async function (assert) {
            // Set any properties with this.set('myProperty', 'value');
            // Handle any actions with this.set('myAction', function(val) { ... });
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "92dGs/DA",
                "block": "{\"symbols\":[],\"statements\":[[1,[20,\"t-t\"],false]],\"hasEval\":false}",
                "meta": {}
            }));
            assert.equal(this.element.textContent.trim(), '');
            // Template block usage:
            await (0, _testHelpers.render)(Ember.HTMLBars.template({
                "id": "NYGYIqE9",
                "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"t-t\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                "meta": {}
            }));
            assert.equal(this.element.textContent.trim(), 'template block text');
        });
    });
});
define('amazon/tests/integration/pod/components/wenjuan/wenjuan-comp/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | wenjuan/wenjuan-comp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1L7TvlF6",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"wenjuan/wenjuan-comp\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "k4/Ux5K8",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"wenjuan/wenjuan-comp\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('amazon/tests/test-helper', ['amazon/app', 'amazon/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('amazon/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/pod/components/wenjuan/wenjuan-comp/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pod/components/wenjuan/wenjuan-comp/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pod/wenjuan/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pod/wenjuan/route-test.js should pass ESLint\n\n');
  });
});
define('amazon/tests/unit/pod/amazon/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
    'use strict';

    (0, _qunit.module)('Unit | Route | amazon', function (hooks) {
        (0, _emberQunit.setupTest)(hooks);
        (0, _qunit.test)('it exists', function (assert) {
            let route = this.owner.lookup('route:amazon');
            assert.ok(route);
        });
    });
});
define('amazon/tests/unit/pod/survey/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
    'use strict';

    (0, _qunit.module)('Unit | Controller | survey', function (hooks) {
        (0, _emberQunit.setupTest)(hooks);
        // Replace this with your real tests.
        (0, _qunit.test)('it exists', function (assert) {
            let controller = this.owner.lookup('controller:survey');
            assert.ok(controller);
        });
    });
});
define('amazon/tests/unit/pod/survey/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
    'use strict';

    (0, _qunit.module)('Unit | Route | survey', function (hooks) {
        (0, _emberQunit.setupTest)(hooks);
        (0, _qunit.test)('it exists', function (assert) {
            let route = this.owner.lookup('route:survey');
            assert.ok(route);
        });
    });
});
define('amazon/tests/unit/pod/wenjuan/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | wenjuan', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:wenjuan');
      assert.ok(route);
    });
  });
});
define('amazon/config/environment', [], function() {
  var prefix = 'amazon';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('amazon/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
