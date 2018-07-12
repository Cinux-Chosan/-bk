"use strict";



define('amazon/app', ['exports', 'amazon/resolver', 'ember-load-initializers', 'amazon/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;


  let base = {
    localClassNames: 'root',
    _uid: Ember.computed(function () {
      return Ember.guidFor(this);
    }),
    _subId: Ember.computed(function () {
      return this.get('_uid') + '_';
    })
  };

  Ember.Component.reopen(base);
  Ember.Controller.reopen(base);
});
define('amazon/components/i-check', ['exports', 'ember-cli-icheck/components/i-check'], function (exports, _iCheck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _iCheck.default;
});
define('amazon/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('amazon/helpers/add', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.add = add;
  function add(params /*, hash*/) {
    return params.reduce((prev, next) => {
      return prev + next;
    });
  }

  exports.default = Ember.Helper.helper(add);
});
define('amazon/helpers/and', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.and = and;
  function and(params /*, hash*/) {
    return params.reduce((prev, next) => prev && next);
  }

  exports.default = Ember.Helper.helper(and);
});
define('amazon/helpers/app-version', ['exports', 'amazon/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('amazon/helpers/array', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.array = array;
  function array(...params /*, hash*/) {
    return params;
  }

  exports.default = Ember.Helper.helper(array);
});
define('amazon/helpers/default', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.deft = deft;
  function deft([param, def] /*, hash*/) {
    return typeof param !== 'undefined' ? param : def;
  }

  exports.default = Ember.Helper.helper(deft);
});
define('amazon/helpers/eq', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.eq = eq;
  function eq(params /*, hash*/) {
    if (params.length <= 1) return true;
    let first = params[0];
    return params.every(el => el == first);
  }

  exports.default = Ember.Helper.helper(eq);
});
define('amazon/helpers/find-by', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.findBy = findBy;
  function findBy([arr = [], valName = '', val] /*, hash*/) {
    return arr.find(el => el[valName] == val);
  }

  exports.default = Ember.Helper.helper(findBy);
});
define('amazon/helpers/format-date', ['exports', 'npm:moment'], function (exports, _npmMoment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fomatDate = fomatDate;
  function fomatDate([timeStamp, format = 'Y-M-D H:mm:ss'] /*, hash*/) {
    return timeStamp && (0, _npmMoment.default)(timeStamp).format(format);
  }

  exports.default = Ember.Helper.helper(fomatDate);
});
define('amazon/helpers/gt', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.gt = gt;
  function gt([first, second] /*, hash*/) {
    return first > second;
  }

  exports.default = Ember.Helper.helper(gt);
});
define('amazon/helpers/gte', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.gte = gte;
  function gte([first, second] /*, hash*/) {
    return first >= second;
  }

  exports.default = Ember.Helper.helper(gte);
});
define('amazon/helpers/in', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isIn = isIn;
  function isIn([first, ...rest] /*, hash*/) {
    return rest.some(el => el && typeof el === 'object' ? first in el : el === first);
  }

  exports.default = Ember.Helper.helper(isIn);
});
define('amazon/helpers/inc', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.inc = inc;
  function inc([baseCount, nInc = 1] /*, hash*/) {
    return +baseCount + +nInc;
  }

  exports.default = Ember.Helper.helper(inc);
});
define('amazon/helpers/local-class', ['exports', 'ember-css-modules/helpers/local-class'], function (exports, _localClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _localClass.default;
    }
  });
  Object.defineProperty(exports, 'localClass', {
    enumerable: true,
    get: function () {
      return _localClass.localClass;
    }
  });
});
define('amazon/helpers/lt', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.lt = lt;
  function lt([first, second] /*, hash*/) {
    return first < second;
  }

  exports.default = Ember.Helper.helper(lt);
});
define('amazon/helpers/lte', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.lte = lte;
  function lte([first, second] /*, hash*/) {
    return first <= second;
  }

  exports.default = Ember.Helper.helper(lte);
});
define('amazon/helpers/minus', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.minus = minus;
  function minus([minuend = 0, ...subtrahend] /*, hash*/) {
    return subtrahend.reduce((prev = 0, next = 0) => prev - next, minuend);
  }

  exports.default = Ember.Helper.helper(minus);
});
define('amazon/helpers/not-eq', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.notEq = notEq;
  function notEq(params = [] /*, hash*/) {
    // return params.every((el, index) => !~params.indexOf(el, index + 1));
    params = [...params];
    let bRs, item;
    do {
      item = params.popObject();
      bRs = params.every(el => el != item);
    } while (bRs && params.length);
    return bRs;
  }

  exports.default = Ember.Helper.helper(notEq);
});
define('amazon/helpers/not', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.not = not;
  function not([truthy] /*, hash*/) {
    return !truthy;
  }

  exports.default = Ember.Helper.helper(not);
});
define('amazon/helpers/number', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.number = number;
  function number([num] /*, hash*/) {
    return Number(num);
  }

  exports.default = Ember.Helper.helper(number);
});
define('amazon/helpers/object', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.object = object;
  function object() /*, hash*/{
    // 废弃, 请使用 hash
    return {};
  }

  exports.default = Ember.Helper.helper(object);
});
define('amazon/helpers/or', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.or = or;
  function or(params /*, hash*/) {
    return params.reduce((prev, next) => {
      return prev || next;
    });
  }

  exports.default = Ember.Helper.helper(or);
});
define('amazon/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('amazon/helpers/set-and-return', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setAndReturn = setAndReturn;
  function setAndReturn([o, value] /*, hash*/) {
    Ember.set(o, value);
    return params;
  }

  exports.default = Ember.Helper.helper(setAndReturn);
});
define('amazon/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('amazon/helpers/string', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.string = string;
  function string(params /*, hash*/) {
    if (params.length === 1 && !Array.isArray(params[0])) {
      return params[0] + '';
    } else {
      return params[0].map(el => el + '');
    }
  }

  exports.default = Ember.Helper.helper(string);
});
define('amazon/helpers/to-fixed', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toFixed = toFixed;
  function toFixed([num, fix] /*, hash*/) {
    return Number(num).toFixed(fix);
  }

  exports.default = Ember.Helper.helper(toFixed);
});
define('amazon/helpers/xor', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.xor = xor;
  function xor(params /*, hash*/) {
    return params.reduce((prev, next) => !prev ^ !next);
  }

  exports.default = Ember.Helper.helper(xor);
});
define('amazon/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'amazon/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('amazon/initializers/component-styles', ['exports', 'ember-component-css/initializers/component-styles', 'amazon/mixins/style-namespacing-extras'], function (exports, _componentStyles, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _componentStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _componentStyles.initialize;
    }
  });


  // eslint-disable-next-line ember/new-module-imports
  Ember.Component.reopen(_styleNamespacingExtras.default);
});
define('amazon/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('amazon/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('amazon/initializers/export-application-global', ['exports', 'amazon/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('amazon/initializers/route-styles', ['exports', 'ember-component-css/initializers/route-styles'], function (exports, _routeStyles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _routeStyles.initialize;
    }
  });
});
define("amazon/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('amazon/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
define('amazon/pod/amazon/amazon-comp/component', ['exports', '@ember-decorators/object', 'amazon/pod/amazon/amazon-comp/goods/clothes.man.1', 'amazon/pod/amazon/amazon-comp/goods/clothes.man.2', 'amazon/pod/amazon/amazon-comp/goods/clothes.woman.1', 'amazon/pod/amazon/amazon-comp/goods/clothes.woman.2', 'amazon/pod/amazon/amazon-comp/goods/phone.1', 'amazon/pod/amazon/amazon-comp/goods/phone.2'], function (exports, _object, _clothesMan, _clothesMan2, _clothesWoman, _clothesWoman2, _phone, _phone2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _desc, _value, _class;

  let AmazonCompComponent = (_dec = (0, _object.computed)('g'), (_class = class AmazonCompComponent extends Ember.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.goods1 = _clothesMan.default, this.goods2 = _clothesMan2.default, this.goods3 = _clothesWoman.default, this.goods4 = _clothesWoman2.default, this.goods5 = _phone.default, this.goods6 = _phone2.default, _temp;
    }

    get activeGoods() {
      let s = this.getWithDefault('goods', 1);
      return this.get(`goods${s}`);
    }

    thumbnailHoverOn(thumbnail) {
      this.set('activeThumbnail', thumbnail);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'activeGoods', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'activeGoods'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'thumbnailHoverOn', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'thumbnailHoverOn'), _class.prototype)), _class));
  exports.default = AmazonCompComponent;
});
define('amazon/pod/amazon/amazon-comp/goods/clothes.man.1', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      thumbnailList: ['/img/amazon/clothes_man_2/1.jpg', '/img/amazon/clothes_man_2/2.jpg', '/img/amazon/clothes_man_2/3.jpg', '/img/amazon/clothes_man_2/4.jpg', '/img/amazon/clothes_man_2/5.jpg', '/img/amazon/clothes_man_2/6.jpg', '/img/amazon/clothes_man_2/7.jpg']
    }
  };
});
define('amazon/pod/amazon/amazon-comp/goods/clothes.man.2', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      thumbnailList: ['/img/amazon/clothes_man_2/1.jpg', '/img/amazon/clothes_man_2/2.jpg', '/img/amazon/clothes_man_2/3.jpg', '/img/amazon/clothes_man_2/4.jpg', '/img/amazon/clothes_man_2/5.jpg', '/img/amazon/clothes_man_2/6.jpg', '/img/amazon/clothes_man_2/7.jpg']
    }
  };
});
define('amazon/pod/amazon/amazon-comp/goods/clothes.woman.1', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      thumbnailList: ['/img/amazon/clothes_man_2/1.jpg', '/img/amazon/clothes_man_2/2.jpg', '/img/amazon/clothes_man_2/3.jpg', '/img/amazon/clothes_man_2/4.jpg', '/img/amazon/clothes_man_2/5.jpg', '/img/amazon/clothes_man_2/6.jpg', '/img/amazon/clothes_man_2/7.jpg']
    }
  };
});
define('amazon/pod/amazon/amazon-comp/goods/clothes.woman.2', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      thumbnailList: ['/img/amazon/clothes_man_2/1.jpg', '/img/amazon/clothes_man_2/2.jpg', '/img/amazon/clothes_man_2/3.jpg', '/img/amazon/clothes_man_2/4.jpg', '/img/amazon/clothes_man_2/5.jpg', '/img/amazon/clothes_man_2/6.jpg', '/img/amazon/clothes_man_2/7.jpg']
    }
  };
});
define('amazon/pod/amazon/amazon-comp/goods/phone.1', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      thumbnailList: ['/img/amazon/clothes_man_2/1.jpg', '/img/amazon/clothes_man_2/2.jpg', '/img/amazon/clothes_man_2/3.jpg', '/img/amazon/clothes_man_2/4.jpg', '/img/amazon/clothes_man_2/5.jpg', '/img/amazon/clothes_man_2/6.jpg', '/img/amazon/clothes_man_2/7.jpg']
    }
  };
});
define('amazon/pod/amazon/amazon-comp/goods/phone.2', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      thumbnailList: ['/img/amazon/clothes_man_2/1.jpg', '/img/amazon/clothes_man_2/2.jpg', '/img/amazon/clothes_man_2/3.jpg', '/img/amazon/clothes_man_2/4.jpg', '/img/amazon/clothes_man_2/5.jpg', '/img/amazon/clothes_man_2/6.jpg', '/img/amazon/clothes_man_2/7.jpg']
    }
  };
});
define("amazon/pod/amazon/amazon-comp/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "root": "_root_fd9r4x",
    "left": "_left_fd9r4x",
    "thumbnailList": "_thumbnailList_fd9r4x",
    "thumbnail": "_thumbnail_fd9r4x",
    "right": "_right_fd9r4x",
    "preview": "_preview_fd9r4x",
    "previewImg": "_previewImg_fd9r4x"
  };
});
define("amazon/pod/amazon/amazon-comp/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JxMeTp1F", "block": "{\"symbols\":[\"goods\",\"thumbnail\"],\"statements\":[[0,\"\\n\"],[4,\"with\",[[22,[\"activeGoods\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"left\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"ul\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"thumbnailList\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,1,[\"goodsInfo\",\"thumbnailList\"]]],null,{\"statements\":[[0,\"        \"],[6,\"li\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"thumbnail\"]]],null]]]],[3,\"action\",[[21,0,[]],\"thumbnailHoverOn\",[21,2,[]]],[[\"on\"],[\"mouseEnter\"]]],[8],[0,\"\\n          \"],[6,\"img\"],[11,\"src\",[21,2,[]],null],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"preview\"]]],null]]]],[8],[0,\"\\n      \"],[6,\"img\"],[11,\"src\",[26,\"or\",[[22,[\"activeThumbnail\"]],[21,1,[\"goodsInfo\",\"thumbnailList\",\"firstObject\"]]],null],null],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"previewImg\"]]],null]]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"right\"]]],null]]]],[8],[0,\"\\n    rigth\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/amazon/amazon-comp/template.hbs" } });
});
define('amazon/pod/amazon/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let SurveyController = class SurveyController extends Ember.Controller {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.queryParams = ['g'], this.g = 1, _temp;
    }

  };
  exports.default = SurveyController;
});
define('amazon/pod/amazon/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let AmazonRoute = class AmazonRoute extends Ember.Route {};
  exports.default = AmazonRoute;
});
define("amazon/pod/amazon/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "amazonContainer": "_amazonContainer_1bwi68"
  };
});
define("amazon/pod/amazon/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "J0KUdi+1", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"amazonContainer\"]]],null]]]],[8],[0,\"\\n  \"],[1,[26,\"amazon/amazon-comp\",null,[[\"goods\"],[[22,[\"g\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/amazon/template.hbs" } });
});
define('amazon/pod/survey/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let SurveyController = class SurveyController extends Ember.Controller {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.queryParams = ['s'], this.s = 1, _temp;
    }

  };
  exports.default = SurveyController;
});
define('amazon/pod/survey/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let SurveyRoute = class SurveyRoute extends Ember.Route {};
  exports.default = SurveyRoute;
});
define("amazon/pod/survey/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "surveyContainer": "_surveyContainer_12uhau"
  };
});
define('amazon/pod/survey/survey-comp/component', ['exports', '@ember-decorators/object', 'amazon/pod/survey/survey-comp/surveys/survey.1', 'amazon/pod/survey/survey-comp/surveys/survey.2.1', 'amazon/pod/survey/survey-comp/surveys/survey.2.2', 'amazon/pod/survey/survey-comp/surveys/survey.2.3'], function (exports, _object, _survey, _survey2, _survey3, _survey4) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  var _dec, _desc, _value, _class;

  let SurveyCompComponent = (_dec = (0, _object.computed)('s'), (_class = class SurveyCompComponent extends Ember.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.survey1 = _survey.default, this.survey2 = _survey2.default, this.survey3 = _survey3.default, this.survey4 = _survey4.default, _temp;
    }

    get activeSurvey() {
      let s = this.getWithDefault('s', 1);
      return this.get(`survey${s}`);
    }
  }, (_applyDecoratedDescriptor(_class.prototype, 'activeSurvey', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'activeSurvey'), _class.prototype)), _class));
  exports.default = SurveyCompComponent;
});
define("amazon/pod/survey/survey-comp/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "root": "_root_1oqx04",
    "surveyCompMain": "_surveyCompMain_1oqx04",
    "surveyHead": "_surveyHead_1oqx04",
    "surveyBody": "_surveyBody_1oqx04",
    "surveyItem": "_surveyItem_1oqx04",
    "desc": "_desc_1oqx04",
    "surveyOpts": "_surveyOpts_1oqx04",
    "surveyOpt": "_surveyOpt_1oqx04",
    "largeOpts": "_largeOpts_1oqx04",
    "subItem": "_subItem_1oqx04",
    "surveyFooter": "_surveyFooter_1oqx04"
  };
});
define("amazon/pod/survey/survey-comp/surveys/survey.1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "问卷一",
    items: [{
      desc: "Gerder",
      type: "radio",
      opts: ["Mail", "Female"]
    }, {
      desc: "Age",
      type: "radio",
      opts: [" < 18", " 18 ~ 20", " > 20"]
    }, {
      desc: "How often do you shop online?",
      type: "radio",
      opts: ["once two weeks", "once a month", "once several months", "once a year", "never"]
    }, {
      desc: "How often do you shop online from other countries?",
      type: "radio",
      opts: ["once two weeks", "once a month", "once several months", "once a year", "never"]
    }, {
      desc: "Please indicate how much you disagree or agree with each of the following statements.",
      type: "group",
      opts: [{
        desc: "People in higher positions should make most decisions without consulting people in lower positions.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "People in higher positions should not ask the opinions of people in lower positions too frequently.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "People in higher positions should avoid social interaction with people in lower positions. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "People in lower positions should not disagree with decisions by people in higher positions. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "People in higher positions should not delegate important tasks to people in lower positions.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "It is important to have instructions spelled out in detail so that I always know what I'm expected to do.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "It is important to closely follow instructions and procedures. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Rules and regulations are important because they inform me of what is expected of me. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Standardized work procedures are helpful. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Instructions for operations are important.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Individuals should sacrifice self-interest for the group. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Individuals should stick with the group even through difficulties. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Group welfare is more important than individual rewards.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Group success is more important than individual success. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Individuals should only pursue their goals after considering the welfare of the group. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Group loyalty should be encouraged even if individual goals suffer.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "It is important to careful manage money (Thrift). ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "It is important to go on resolutely in spite of opposition (Persistence).",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Personal steadiness and stability are important.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "It is important to make long-term planning. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Individuals should give up today's fun for success in the future.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Individuals should work hard for success in the future.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "It is more important for men to have a professional career than it is for women. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Men usually solve problems with logical analysis; women usually solve problems with intuition.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "Solving difficult problems usually requires an active, forcible approach, which is typical of men.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "There are some jobs that a man can always do better than a woman.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "I have some contacts with other consumers of amazon.com.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "I spend time in communicating with other consumers of amazon.com. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "I have communications with other consumers of amazon.com.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "The consumers of amazon.com do not take advantage of each other.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "The consumers of amazon.com have mutual trust.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "The consumers of amazon.com sincerely treat each other.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "I believe that consumers of amazon.com will help each other.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "I believe that other consumers of amazon.com will help me when I need.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "I will actively help other consumers of amazon.com.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "During shopping, I have similar interest with other consumers of amazom.com.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "During shopping, I have similar goals with other consumers of amazon.com. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "During shopping, I have similar values with other consumers of amazon.com.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/surveys/survey.2.1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "问卷二",
    items: [{
      desc: "Please indicate how much you disagree or agree with each of the following statements.",
      type: "group",
      opts: [{
        desc: "When I want to buy a cell phone, I have an expectation for searching for attribute-based reviews;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy cell phone, I have a brief in searching for attribute-based reviews; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy cell phone, I will pay more attention to attribute based reviews; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a cell phone, attribute-based reviews are more helpful for me to evaluate it; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a cell phone, attribute-based reviews are more valuable for me to make a decision;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "I think I have constructed a knowledge structure to evaluate a cell phone through attribute-based reviews",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a cell phone, I have an expectation for searching for experience-based reviews; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy cell phone, I have a brief in searching for experience -based reviews; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a cell phone, I will pay more attention to attribute based reviews; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a cell phone, experience -based reviews are more helpful for me to evaluate it;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a cell phone, experience-based reviews are more valuable for me to make a decision;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/surveys/survey.2.2", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "问卷二",
    items: [{
      desc: "Please indicate how much you disagree or agree with each of the following statements.",
      type: "group",
      opts: [{
        desc: "When I want to buy a clothing, I have an expectation for searching for experience -based reviews;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, I have a brief in searching for experience -based reviews; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, I will pay more attention to experience based reviews;  ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, experience -based reviews are more helpful for me to evaluate it;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, experience -based reviews are more valuable for me to make a decision;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "I think I have constructed a knowledge structure to evaluate a clothing through experience -based reviews",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, I have an expectation for searching for attribute-based reviews; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, I have a brief in searching for attribute-based reviews; ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, I will pay more attention to attribute based reviews;  ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, attribute-based reviews are more helpful for me to evaluate it;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "When I want to buy a clothing, attribute-based reviews are more valuable for me to make a decision;",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/surveys/survey.2.3", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "问卷三",
    items: [{
      desc: "Please indicate how much you disagree or agree with each of the following statements.",
      type: "group",
      opts: [{
        desc: "The quantity of the reviews released was large.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "The quantity of the reviews was enough to let me make decisions. ",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "The information from online reviews was accurate.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "The information from online reviews was relevant to my needs.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "The information from online reviews was of sufficient to make decisions.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }, {
        desc: "The information from online reviews was based on facts.",
        type: "radio",
        opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
      }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XJekgkFW", "block": "{\"symbols\":[\"sv\",\"item\",\"index\",\"opt\",\"subItem\",\"subIndex\",\"opt\"],\"statements\":[[6,\"div\"],[10,\"class\",\"surveyCompMain\"],[8],[0,\"\\n\"],[4,\"with\",[[22,[\"activeSurvey\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyHead\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"h1\"],[8],[0,\"\\n      \"],[1,[21,1,[\"title\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyBody\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,1,[\"items\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyItem\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"desc\"]]],null]]]],[8],[0,\"\\n          \"],[1,[26,\"add\",[1,[21,3,[]]],null],false],[0,\"、\"],[1,[21,2,[\"desc\"]],true],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"eq\",[[21,2,[\"type\"]],\"group\"],null]],null,{\"statements\":[[4,\"each\",[[21,2,[\"opts\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"subItem\"]]],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"desc\"]]],null]]]],[8],[0,\"\\n              \"],[1,[26,\"add\",[1,[21,3,[]]],null],false],[0,\".\"],[1,[26,\"add\",[1,[21,6,[]]],null],false],[0,\" \"],[1,[21,5,[\"desc\"]],true],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"ul\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"surveyOpts\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,5,[\"opts\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"surveyOpt \",[26,\"if\",[[26,\"gte\",[[21,5,[\"opts\",\"length\"]],5],null],\"largeOpts\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n                  \"],[6,\"label\"],[10,\"for\",\"\"],[8],[0,\"\\n                    \"],[1,[26,\"i-check\",null,[[\"type\",\"name\"],[[21,5,[\"type\"]],[21,5,[\"desc\"]]]]],false],[0,\" \"],[1,[21,7,[]],false],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"            \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[5,6]},null]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"ul\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"surveyOpts\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,2,[\"opts\"]]],null,{\"statements\":[[0,\"              \"],[6,\"li\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"surveyOpt \",[26,\"if\",[[26,\"gte\",[[21,2,[\"opts\",\"length\"]],5],null],\"largeOpts\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"\"],[8],[0,\"\\n                  \"],[1,[26,\"i-check\",null,[[\"type\",\"name\"],[[21,2,[\"type\"]],[21,2,[\"desc\"]]]]],false],[0,\" \"],[1,[21,4,[]],false],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[2,3]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyFooter\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"type\",\"submit\"],[8],[0,\"提交问卷\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/survey/survey-comp/template.hbs" } });
});
define("amazon/pod/survey/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RsHkN4LG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyContainer\"]]],null]]]],[8],[0,\"\\n  \"],[1,[26,\"survey/survey-comp\",null,[[\"s\"],[[22,[\"s\"]]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/survey/template.hbs" } });
});
define('amazon/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('amazon/router', ['exports', 'amazon/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('wenjuan');
    this.route('survey');
    this.route('amazon');
  });

  exports.default = Router;
});
define('amazon/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("amazon/styles/app", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {};
});
define("amazon/styles/common", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "ember-view": "_ember-view_sj9897"
  };
});
define("amazon/styles/normalize", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {};
});
define("amazon/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RPAmEV6j", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "amazon/templates/application.hbs" } });
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

if (!runningTests) {
  require("amazon/app")["default"].create({"name":"amazon","version":"0.0.0+8548d04a"});
}
//# sourceMappingURL=amazon.map
