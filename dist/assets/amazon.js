"use strict";



define('amazon/app', ['exports', 'amazon/resolver', 'ember-load-initializers', 'amazon/config/environment', 'amazon/utils/local-storage'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;


  var base = {
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

  var env = window.env = {};
  var isIE = env.isIE = 'msSaveOrOpenBlob' in window.navigator;
  var isLocalFile = env.isLocalFile = !window.location.host;

  if (isIE && isLocalFile) {
    // 通过本地文件方式在 IE 中打开
    window.localforage = window.myLocalStorage;
  } else {
    // 配置 localforage
    window.localforage.config({
      name: 'amazon',
      version: 1.0,
      storeName: 'amazon', // Should be alphanumeric, with underscores.
      description: 'for amazon use'
    });
  }
});
define('amazon/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('amazon/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define('amazon/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define('amazon/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define('amazon/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define('amazon/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('amazon/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('amazon/components/i-check', ['exports', 'ember-cli-icheck/components/i-check'], function (exports, _iCheck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _iCheck.default;
});
define('amazon/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
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
    return params.reduce(function (prev, next) {
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
    return params.reduce(function (prev, next) {
      return prev && next;
    });
  }

  exports.default = Ember.Helper.helper(and);
});
define('amazon/helpers/app-version', ['exports', 'amazon/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

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
  function array() /*, hash*/{
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function deft(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        param = _ref2[0],
        def = _ref2[1];

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
    var first = params[0];
    return params.every(function (el) {
      return el == first;
    });
  }

  exports.default = Ember.Helper.helper(eq);
});
define('amazon/helpers/find-by', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.findBy = findBy;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function findBy(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 3),
        _ref2$ = _ref2[0],
        arr = _ref2$ === undefined ? [] : _ref2$,
        _ref2$2 = _ref2[1],
        valName = _ref2$2 === undefined ? '' : _ref2$2,
        val = _ref2[2];

    return arr.find(function (el) {
      return el[valName] == val;
    });
  }

  exports.default = Ember.Helper.helper(findBy);
});
define('amazon/helpers/format-date', ['exports', 'npm:moment'], function (exports, _npmMoment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fomatDate = fomatDate;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function fomatDate(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        timeStamp = _ref2[0],
        _ref2$ = _ref2[1],
        format = _ref2$ === undefined ? 'Y-M-D H:mm:ss' : _ref2$;

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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function gt(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        first = _ref2[0],
        second = _ref2[1];

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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function gte(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        first = _ref2[0],
        second = _ref2[1];

    return first >= second;
  }

  exports.default = Ember.Helper.helper(gte);
});
define('amazon/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define('amazon/helpers/in', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isIn = isIn;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function isIn(_ref) /*, hash*/{
    var _ref2 = _toArray(_ref),
        first = _ref2[0],
        rest = _ref2.slice(1);

    return rest.some(function (el) {
      return el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' ? first in el : el === first;
    });
  }

  exports.default = Ember.Helper.helper(isIn);
});
define('amazon/helpers/inc', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.inc = inc;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function inc(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        baseCount = _ref2[0],
        _ref2$ = _ref2[1],
        nInc = _ref2$ === undefined ? 1 : _ref2$;

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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function lt(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        first = _ref2[0],
        second = _ref2[1];

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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function lte(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        first = _ref2[0],
        second = _ref2[1];

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

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function minus(_ref) /*, hash*/{
    var _ref2 = _toArray(_ref),
        _ref2$ = _ref2[0],
        minuend = _ref2$ === undefined ? 0 : _ref2$,
        subtrahend = _ref2.slice(1);

    return subtrahend.reduce(function () {
      var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return prev - next;
    }, minuend);
  }

  exports.default = Ember.Helper.helper(minus);
});
define('amazon/helpers/not-eq', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.notEq = notEq;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function notEq() /*, hash*/{
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // return params.every((el, index) => !~params.indexOf(el, index + 1));
    params = [].concat(_toConsumableArray(params));
    var bRs = void 0,
        item = void 0;
    do {
      item = params.popObject();
      bRs = params.every(function (el) {
        return el != item;
      });
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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function not(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 1),
        truthy = _ref2[0];

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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function number(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 1),
        num = _ref2[0];

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
    return params.reduce(function (prev, next) {
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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function setAndReturn(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        o = _ref2[0],
        value = _ref2[1];

    Ember.set(o, value);
    return o;
  }

  exports.default = Ember.Helper.helper(setAndReturn);
});
define('amazon/helpers/set', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mySet = mySet;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function mySet(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 3),
        o = _ref2[0],
        key = _ref2[1],
        val = _ref2[2];

    return Ember.set(o, key, val);
  }

  exports.default = Ember.Helper.helper(mySet);
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
      return params[0].map(function (el) {
        return el + '';
      });
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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function toFixed(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 2),
        num = _ref2[0],
        fix = _ref2[1];

    return Number(num).toFixed(fix);
  }

  exports.default = Ember.Helper.helper(toFixed);
});
define('amazon/helpers/to-percent', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toPercent = toPercent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function toPercent(_ref) /*, hash*/{
    var _ref2 = _slicedToArray(_ref, 1),
        _ref2$ = _ref2[0],
        number = _ref2$ === undefined ? 0 : _ref2$;

    return number * 100 + '%';
  }

  exports.default = Ember.Helper.helper(toPercent);
});
define('amazon/helpers/xor', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.xor = xor;
  function xor(params /*, hash*/) {
    return params.reduce(function (prev, next) {
      return !prev ^ !next;
    });
  }

  exports.default = Ember.Helper.helper(xor);
});
define('amazon/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('amazon/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'amazon/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('amazon/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

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
          willDestroy: function willDestroy() {
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
define('amazon/initializers/inject-router', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initialize = initialize;
    function initialize(application) {
        application.inject('component', 'appController', 'controller:application');
    }
    exports.default = {
        initialize: initialize
    };
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
define('amazon/pod/amazon/amazon-comp/component', ['exports', '@ember-decorators/object', 'amazon/pod/amazon/amazon-comp/goods/clothes.man.1', 'amazon/pod/amazon/amazon-comp/goods/clothes.man.2', 'amazon/pod/amazon/amazon-comp/goods/clothes.woman.1', 'amazon/pod/amazon/amazon-comp/goods/clothes.woman.2', 'amazon/pod/amazon/amazon-comp/goods/phone.1', 'amazon/pod/amazon/amazon-comp/goods/phone.2'], function (exports, _object, _clothesMan, _clothesMan2, _clothesWoman, _clothesWoman2, _phone, _phone2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _dec, _dec2, _dec3, _desc, _value, _class;

  var AmazonCompComponent = (_dec = (0, _object.computed)('goods'), _dec2 = (0, _object.computed)('currentOpt'), _dec3 = (0, _object.computed)('currentThumbnailIndex', 'activeOpt'), (_class = function (_EmberComponent) {
    _inherits(AmazonCompComponent, _EmberComponent);

    function AmazonCompComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, AmazonCompComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AmazonCompComponent.__proto__ || Object.getPrototypeOf(AmazonCompComponent)).call.apply(_ref, [this].concat(args))), _this), _this.goods1 = _clothesMan.default, _this.goods2 = _clothesMan2.default, _this.goods3 = _clothesWoman.default, _this.goods4 = _clothesWoman2.default, _this.goods5 = _phone.default, _this.goods6 = _phone2.default, _this.currentOpt = null, _this.currentThumbnailIndex = 0, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AmazonCompComponent, [{
      key: 'didInsertElement',
      value: function didInsertElement() {
        document.title = 'Amazon';
      }
    }, {
      key: 'setThumbnailIndex',
      value: function setThumbnailIndex(currentThumbnailIndex) {
        this.set('currentThumbnailIndex', currentThumbnailIndex);
      }
    }, {
      key: 'setActiveOpt',
      value: function setActiveOpt(opt) {
        this.set('currentThumbnailIndex', 0);
        this.set('currentOpt', opt);
      }
    }, {
      key: 'activeGoods',
      get: function get() {
        var g = this.getWithDefault('goods', 1);
        return this.get('goods' + g);
      }
    }, {
      key: 'activeOpt',
      get: function get() {
        var _getProperties = this.getProperties(['currentOpt']),
            currentOpt = _getProperties.currentOpt;

        return currentOpt || this.get('activeGoods.goodsInfo.opts.firstObject');
      }
    }, {
      key: 'activeThumbnail',
      get: function get() {
        var _getProperties2 = this.getProperties(['currentThumbnailIndex', 'activeOpt']),
            _getProperties2$curre = _getProperties2.currentThumbnailIndex,
            currentThumbnailIndex = _getProperties2$curre === undefined ? 0 : _getProperties2$curre,
            activeOpt = _getProperties2.activeOpt;

        return Ember.get(activeOpt, 'thumbnailList.' + currentThumbnailIndex);
      }
    }]);

    return AmazonCompComponent;
  }(Ember.Component), (_applyDecoratedDescriptor(_class.prototype, 'activeGoods', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'activeGoods'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'activeOpt', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'activeOpt'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'activeThumbnail', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'activeThumbnail'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setThumbnailIndex', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setThumbnailIndex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'setActiveOpt', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setActiveOpt'), _class.prototype)), _class));
  exports.default = AmazonCompComponent;
});
define("amazon/pod/amazon/amazon-comp/goods/clothes.man.1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      // title: "100% Cotton Casual Slim Fit Long Sleeve Button Down Printed Dress Shirts",
      title: "Clothing1",
      details: ["US Size,100% Cotton", "Style: Casual, Fashion, Relax, Business, Date", "Machine washable, Hand Wash suggested and Dry", "Fashion Printed and Button-down Design, Concise and Easy, Fashionable Elegance, Convenient and Practical", "Notice: Please Check the Shirt Measurement on Product Description Carefully before Order !!!!!"],
      opts: [{
        cover: "img/amazon/clothes_man_1/1_1.jpg",
        optDesc: "Green",
        thumbnailList: [{ img: "img/amazon/clothes_man_1/1_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/1_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/1_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/1_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/1_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/1_6.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/1_7.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/clothes_man_1/2_1.jpg",
        optDesc: "Green",
        thumbnailList: [{ img: "img/amazon/clothes_man_1/2_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/2_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/2_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/2_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/2_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/1_7.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/clothes_man_2/3_1.jpg",
        optDesc: "Navy Blue",
        thumbnailList: [{ img: "img/amazon/clothes_man_1/3_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/3_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/3_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/3_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/3_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_1/1_7.jpg", optDesc: "" }]
      }]
    },
    reviewData: {
      total: 712,
      details: [{
        label: '5 star',
        ratio: .7
      }, {
        label: '4 star',
        ratio: .15
      }, {
        label: '3 star',
        ratio: .05
      }, {
        label: '2 star',
        ratio: .05
      }, {
        label: '1 star',
        ratio: .05
      }],
      reviewQuality: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Maribel'
        },
        reviewTxt: 'It is awesome. Just wish I looked as good as the model wearing it',
        date: 'June 27, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Caden Smith'
        },
        reviewTxt: 'Fits as expected, I have an athletic body and this shirt hugs just right',
        date: 'June 23, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Peter'
        },
        reviewTxt: 'Nice and stylish shirt. I get compliments about it all the time',
        date: 'June 14, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'emanuele'
        },
        reviewTxt: 'Looks very good, fit very well, and very much enjoying',
        date: 'June 9, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Mandy Atwell'
        },
        reviewTxt: 'Perfect. Wear it all of the time! Classy and Stylish look',
        date: 'June 5, 2018'
      }],
      reviewExperience: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'César Javier Corniel'
        },
        reviewTxt: 'Long Sleeve & Short Sleeve',
        date: 'June 24, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Kidlat'
        },
        reviewTxt: 'Handwash and machine availible',
        date: 'June 23, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'David'
        },
        reviewTxt: 'Slim Fit, Long Sleeve, Button Down, Printed Dress Shirts',
        date: 'June 12, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Californian'
        },
        reviewTxt: 'The pattern design is discrete but elegant, the shirt is good Quality for the price',
        date: 'June 5, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Amazon Customer'
        },
        reviewTxt: 'US size, 100% cotton',
        date: 'June 4, 2018'
      }]
    }
  };
});
define("amazon/pod/amazon/amazon-comp/goods/clothes.man.2", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      // title: "100% Cotton Long Sleeve Plaid Slim Fit Button Down Dress Shirt ",
      title: "Clothing2",

      details: ["Notice: If There is Smell in Your Package, Please Wash the Shirt in Cold Water before You Wear, we have asked our factory to wash it in the next goods.", "GUARANTEE from localmode: Some buyers say our shirt size is way off which we are so confused, we have updated our shirt size measurement on Product Description of the page. Please check the size chart carefully before you order and we will give you free exchange and full refund if you get wrong size from us. THANK YOU!!!", "100% High-grade Cotton Fabrics: Good capability of tenderness, air permeability and moisture absorption feels soft and comfy.", "Fashion Plaid and Button-down Design, Concise and Easy, Fashionable Elegance, Convenient and Practical, and both Individual Character and Sport Function.", "Suitable for: Sports, Casual, Business Work, Date, Party, Perfect gift for families, friends and boyfriend.", "Wash Instruction: Handwash in cold water <30¡æ, NO BLEACH, Low iron and tumble dry on low heat", "It will arrive you in 8-12 days if your order is fulfilled by merchant.Any questions please feel free to contact us directly!"],
      opts: [{
        cover: "img/amazon/clothes_man_2/1_1.jpg",
        optDesc: "Acid Blue",
        thumbnailList: [{ img: "img/amazon/clothes_man_2/1_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/1_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/1_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/1_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/1_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/1_6.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/1_7.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/clothes_man_2/2_1.jpg",
        optDesc: "Blue",
        thumbnailList: [{ img: "img/amazon/clothes_man_2/2_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/2_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/2_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/2_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/2_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/2_6.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/2_7.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/clothes_man_2/3_1.jpg",
        optDesc: "Grey",
        thumbnailList: [{ img: "img/amazon/clothes_man_2/3_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/3_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/3_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/3_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/3_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/3_6.jpg", optDesc: "" }, { img: "img/amazon/clothes_man_2/3_7.jpg", optDesc: "" }]
      }]
    },
    reviewData: {
      total: 723,
      details: [{
        label: '5 star',
        ratio: .7
      }, {
        label: '4 star',
        ratio: .15
      }, {
        label: '3 star',
        ratio: .05
      }, {
        label: '2 star',
        ratio: .05
      }, {
        label: '1 star',
        ratio: .05
      }],
      reviewQuality: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Jake Roehm'
        },
        reviewTxt: 'Amazing ! Shirt fits great looks great feels great',
        date: 'June 25, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'James Boyd'
        },
        reviewTxt: 'I\'d say the shirt fits like the picture shows',
        date: 'June 18, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Bexareagle'
        },
        reviewTxt: 'Really nice slim and thin shirt that fits perfectly and looks awesome',
        date: 'June 16, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Boden'
        },
        reviewTxt: 'I love it was exactly what I expected.',
        date: 'June 7, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Erica'
        },
        reviewTxt: 'I have gotten numerous compliments about how it fits me like its custom made',
        date: 'June 7, 2018'
      }],
      reviewExperience: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Crystal Garcia'
        },
        reviewTxt: 'This is a very attractive shirt with blue denim jeans or khaki slacks ',
        date: 'June 23, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'John'
        },
        reviewTxt: 'Variety of colors to choose from',
        date: 'June 11, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'C. Vasquez'
        },
        reviewTxt: 'high quality cotton, soft and the stitching is very good ',
        date: 'June 7, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'cappon'
        },
        reviewTxt: 'Turn down collar, Slim fit',
        date: 'June 7, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Miranda '
        },
        reviewTxt: '100% High-grade Cotton Fabrics',
        date: 'June 4, 2018'
      }]
    }
  };
});
define("amazon/pod/amazon/amazon-comp/goods/clothes.woman.1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      // title: "Hoodies-Tops- Floral Printed Long Sleeve Pocket Drawstring Sweatshirt with Pocket",
      title: "Clothing1",

      details: ["Catagory: Women Hoodies, Floral Printed Sweatshirt, Double Pocket Hooded Sweatshirt, Drawstring Hoodies ", "Material: Polyester+Cotton. 100% Brand New and high quality! ", "Occasion: Spring, Autumn, Winter, Outdoor, Daily, Casual, Club, Sports. ", "Please check measurements before ordering. Please allow 1 inch/2cm difference due to hand measurement. ", "Kindly note that Pink and Dark Grey 2 have eyelets on shoulders but don't have pockets. "],
      opts: [{
        cover: "img/amazon/clothes_woman_1/1_1.jpg",
        optDesc: "0962 Grey ",
        thumbnailList: [{ img: "img/amazon/clothes_woman_1/1_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/1_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/1_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/1_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/1_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/1_6.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/1_7.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/clothes_woman_1/2_1.jpg",
        optDesc: "0965 White ",
        thumbnailList: [{ img: "img/amazon/clothes_woman_1/2_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/2_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/2_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/2_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/2_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/1_6.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/clothes_man_2/3_1.jpg",
        optDesc: "Blue",
        thumbnailList: [{ img: "img/amazon/clothes_woman_1/3_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/3_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/3_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_1/3_4.jpg", optDesc: "" }]
      }]
    },
    reviewData: {
      total: 867,
      details: [{
        label: '5 star',
        ratio: .7
      }, {
        label: '4 star',
        ratio: .15
      }, {
        label: '3 star',
        ratio: .05
      }, {
        label: '2 star',
        ratio: .05
      }, {
        label: '1 star',
        ratio: .05
      }],
      reviewQuality: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Jessica Clark'
        },
        reviewTxt: 'It\'s so cute and soft. I wear it at least a few times a week',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'T Lynn '
        },
        reviewTxt: 'LOVE! So cute and comfortable!!',
        date: 'June 28, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Christopher  '
        },
        reviewTxt: 'Casual, cute, and great to throw on with pretty much anything',
        date: 'June 23, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Ana'
        },
        reviewTxt: 'Amazing top, love the way it feels and looks!',
        date: 'June 20, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Lemon253'
        },
        reviewTxt: 'Very comfy, looks great, feels very soft, is perfect for spring and early fall',
        date: 'June 19, 2018'
      }],
      reviewExperience: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Amazon Customer'
        },
        reviewTxt: 'The material is so warm, yet light',
        date: 'June 28, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Stephanie B'
        },
        reviewTxt: 'Love the sweatshirt. Comfortable and light weight for those cool nights',
        date: 'June 25, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Ashley M  '
        },
        reviewTxt: 'Fabric is stretchy. Medium is a little big ',
        date: 'June 20, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Elizabeth'
        },
        reviewTxt: 'The blue in this is slightly less greenish than it looks',
        date: 'June 20, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Erin Holzer'
        },
        reviewTxt: 'Soft fabric, light weight, cute top, Gorgeous colors',
        date: 'June 19, 2018'
      }]
    }
  };
});
define("amazon/pod/amazon/amazon-comp/goods/clothes.woman.2", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      // title: "Dresses-Summer Floral Bohemian Spaghetti Strap Button Down Swing Midi Dress with Pockets    ",
      title: "Clothing2",

      details: ["Catagory: Women Hoodies, Floral Printed Sweatshirt, Double Pocket Hooded Sweatshirt, Drawstring Hoodies ", "Material: Polyester+Cotton. 100% Brand New and high quality! ", "Occasion: Spring, Autumn, Winter, Outdoor, Daily, Casual, Club, Sports. ", "Please check measurements before ordering. Please allow 1 inch/2cm difference due to hand measurement. ", "Kindly note that Pink and Dark Grey 2 have eyelets on shoulders but don't have pockets. "],
      opts: [{
        cover: "img/amazon/clothes_woman_2/20_1.jpg",
        optDesc: "Pink",
        thumbnailList: [{ img: "img/amazon/clothes_woman_2/20_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/20_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/20_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/20_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/20_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/20_6.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/20_7.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/clothes_woman_2/2_1.jpg",
        optDesc: "0860 Red ",
        thumbnailList: [{ img: "img/amazon/clothes_woman_2/2_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/2_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/2_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/2_4.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/2_5.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/2_6.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/clothes_man_2/3_1.jpg",
        optDesc: "0860 White",
        thumbnailList: [{ img: "img/amazon/clothes_woman_2/3_1.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/3_2.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/3_3.jpg", optDesc: "" }, { img: "img/amazon/clothes_woman_2/3_4.jpg", optDesc: "" }]
      }]
    },
    reviewData: {
      total: 764,
      details: [{
        label: '5 star',
        ratio: .7
      }, {
        label: '4 star',
        ratio: .15
      }, {
        label: '3 star',
        ratio: .05
      }, {
        label: '2 star',
        ratio: .05
      }, {
        label: '1 star',
        ratio: .05
      }],
      reviewQuality: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'jesm'
        },
        reviewTxt: 'Super comfy and adorable. It\'s stretchy.',
        date: 'June 30, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Hoof Arted'
        },
        reviewTxt: 'This summer dress is now my favorite go-to dress in my closet',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Amazon Customer'
        },
        reviewTxt: 'Super cute summer dress! Loved the look and looks exactly like the picture',
        date: 'June 30, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Gary Lewis'
        },
        reviewTxt: 'Super comfy and perfect for summer',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Amanda'
        },
        reviewTxt: 'The dress is so light and airy. It is perfect for the summer! I love it!!',
        date: 'June 29, 2018'
      }],
      reviewExperience: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Kim'
        },
        reviewTxt: '85% Polyester+15% Cotton. 100% brand new and high quality',
        date: 'June 30, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Amazon Customer'
        },
        reviewTxt: 'it has POCKETS! The pockets are deep and super handy',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Jonathan Alves'
        },
        reviewTxt: 'The Style is Sexy, Floral, V Neck, Backless',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'MQ'
        },
        reviewTxt: 'A Line, Spaghetti Strap, Midi Length',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'cody fisher'
        },
        reviewTxt: 'It has two pockets',
        date: 'June 29, 2018'
      }]
    }
  };
});
define("amazon/pod/amazon/amazon-comp/goods/phone.1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      // title: "GSM Unlocked 5.8\", 256 GB - Space Gray",
      title: "Cellphone1",
      details: ["An all‑new 5.8‑inch Super Retina screen with all-screen OLED Multi-Touch display", "12MP wide-angle and telephoto cameras with Dual optical image stabilization", "Wireless Qi charging", "Splash, water, and dust resistant", "Sapphire crystal lens cover"],
      opts: [{
        cover: "img/amazon/phone_1/1_1.jpg",
        optDesc: "Silver",
        thumbnailList: [{ img: "img/amazon/phone_1/1_1.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/phone_1/2_1.jpg",
        optDesc: "Space Gray",
        thumbnailList: [{ img: "img/amazon/phone_1/2_1.jpg", optDesc: "" }, { img: "img/amazon/phone_1/2_2.jpg", optDesc: "" }, { img: "img/amazon/phone_1/2_3.jpg", optDesc: "" }, { img: "img/amazon/phone_1/2_4.jpg", optDesc: "" }, { img: "img/amazon/phone_1/2_5.jpg", optDesc: "" }]
      }]
    },
    reviewData: {
      total: 516,
      details: [{
        label: '5 star',
        ratio: .7
      }, {
        label: '4 star',
        ratio: .15
      }, {
        label: '3 star',
        ratio: .05
      }, {
        label: '2 star',
        ratio: .05
      }, {
        label: '1 star',
        ratio: .05
      }],
      reviewQuality: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Thomas King'
        },
        reviewTxt: 'Love my cell phone from every aspect and it is very sleek. ',
        date: 'January 1, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'V12 Vantage'
        },
        reviewTxt: 'I\'m loving it every day when I wake up and touch it',
        date: 'November 5, 2017'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Amazon Customer'
        },
        reviewTxt: 'it gives me new feeling of likeness since I started using it about two weeks now',
        date: 'February 22, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Keith H.'
        },
        reviewTxt: 'I have no issues phone works great I am enjoying it. Overall a good product.',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Buyer'
        },
        reviewTxt: 'I quickly became comfortable using my cell phone',
        date: 'June 27, 2018'
      }],
      reviewExperience: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Carl'
        },
        reviewTxt: 'This is a great phone with an amazing camera. ',
        date: 'June 19, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Kekan'
        },
        reviewTxt: '5.8” OLED is the most vibrant and clear screen ever produced ',
        date: 'June 8, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Amazon Customer '
        },
        reviewTxt: 'The cell phone uses a super retina display, with 2436-by-1125 pixel resolution and a contrast ratio of 1,000,000:1',
        date: 'June 4, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Anna'
        },
        reviewTxt: 'The cell phone boasts the largest battery in Apple history',
        date: 'May 31, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'steven hellmich'
        },
        reviewTxt: 'The cell phone has an amazing stainless-steel frame which is thought by ',
        date: 'May 23, 2018'
      }]
    }
  };
});
define("amazon/pod/amazon/amazon-comp/goods/phone.2", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    goodsInfo: {
      // title: "Unlocked Smartphone - Coral Blue - US Warranty",
      title: "Cellphone2",
      details: ["Super Speed Dual Pixel Camera ", "Infinity Display: edge-to-edge immersive screen, enhancing your entertainment experience*", "IP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free***", "Internal Memory 64 GB. Expandable Storage up to 400GB****", "Fast Wireless Charging: Avoid the wires and power up quickly by placing your phone on a Fast Wireless Charger.***** "],
      opts: [{
        cover: "img/amazon/phone_2/1_1.jpg",
        optDesc: "Coral Blue",
        // title: "Unlocked Smartphone - Coral Blue - US Warranty",
        title: "Cellphone2",

        thumbnailList: [{ img: "img/amazon/phone_2/1_1.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_2.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_3.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_4.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_5.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_6.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/phone_2/2_1.jpg",
        optDesc: "Lilac Purple",
        // title: "Unlocked Smartphone - Lilac Purple - US Warranty ",
        title: "Cellphone2",

        // details: [
        //   "Super Speed Dual Pixel Camera ",
        //   "Infinity Display: edge-to-edge immersive screen, enhancing your entertainment experience*",
        //   "IP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free***",
        //   "Internal Memory 64 GB. Expandable Storage up to 400GB. Video Recording Resolution : UHD 4K (3840 x 2160)@60fps ",
        //   "Fast Wireless Charging: Avoid the wires and power up quickly by placing your phone on a Fast Wireless Charger.***** "
        // ],
        thumbnailList: [{ img: "img/amazon/phone_2/2_1.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_2.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_3.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_4.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_5.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_6.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/phone_2/2_1.jpg",
        optDesc: "Midnight Black",
        // title: "Unlocked Smartphone - Midnight Black - US Warranty ",
        title: "Cellphone2",

        thumbnailList: [{ img: "img/amazon/phone_2/3_1.jpg", optDesc: "" }, { img: "img/amazon/phone_2/3_2.jpg", optDesc: "" }, { img: "img/amazon/phone_2/3_3.jpg", optDesc: "" }, { img: "img/amazon/phone_2/3_4.jpg", optDesc: "" }, { img: "img/amazon/phone_2/3_5.jpg", optDesc: "" }, { img: "img/amazon/phone_2/3_6.jpg", optDesc: "" }]
      }]
    },
    reviewData: {
      total: 509,
      details: [{
        label: '5 star',
        ratio: .7
      }, {
        label: '4 star',
        ratio: .15
      }, {
        label: '3 star',
        ratio: .05
      }, {
        label: '2 star',
        ratio: .05
      }, {
        label: '1 star',
        ratio: .05
      }],
      reviewQuality: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Win2000'
        },
        reviewTxt: 'The speakers are excellent, music sounds great and phone calls come through very clear',
        date: 'April 1, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'CVPI'
        },
        reviewTxt: 'This phone is really fast, great camera, speakers, screen',
        date: 'March 16, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'KG'
        },
        reviewTxt: 'The camera is nice, the pictures come out clean and clear',
        date: 'March 17, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Alex'
        },
        reviewTxt: 'Very nice upgrade. I\'m glad I went with the cell . I really like the big screen, and extra camera',
        date: 'June 14, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Mad Scientist'
        },
        reviewTxt: 'The S9 works VERY fast when loading apps and pages',
        date: 'May 16, 2018'
      }],
      reviewExperience: [{
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'sam surbrugg'
        },
        reviewTxt: 'It\'s gorgeous! I love the display and the infinity edge ',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Stephen '
        },
        reviewTxt: 'it feels good in the hand, excellent screen quality, finally an excellent cell',
        date: 'June 29, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'keithmichal '
        },
        reviewTxt: 'Great camera, awesome software, fast and productive',
        date: 'June 27, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'Margie Nunez'
        },
        reviewTxt: 'This phone features ability to record video at 4K 60fps',
        date: 'June 26, 2018'
      }, {
        userInfo: {
          avatar: 'img/amazon/defaultUserAvatar.jpg',
          userName: 'jon slusarz'
        },
        reviewTxt: 'The phone provides the security features like the fingerprint scanner and face detection',
        date: 'June 26, 2018'
      }]
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
    "section1": "_section1_fd9r4x",
    "left": "_left_fd9r4x",
    "right": "_right_fd9r4x",
    "rLeft": "_rLeft_fd9r4x",
    "goodsTitle": "_goodsTitle_fd9r4x",
    "goodsOpts": "_goodsOpts_fd9r4x",
    "rRight": "_rRight_fd9r4x",
    "shareImg": "_shareImg_fd9r4x",
    "addToCartContainer": "_addToCartContainer_fd9r4x",
    "addToCartBtn": "_addToCartBtn_fd9r4x",
    "cartIcon": "_cartIcon_fd9r4x",
    "preview": "_preview_fd9r4x",
    "previewImg": "_previewImg_fd9r4x",
    "thumbnailList": "_thumbnailList_fd9r4x",
    "thumbnail": "_thumbnail_fd9r4x",
    "active": "_active_fd9r4x",
    "goodsDetails": "_goodsDetails_fd9r4x",
    "review": "_review_fd9r4x",
    "reviewsSum": "_reviewsSum_fd9r4x",
    "imgAndCount": "_imgAndCount_fd9r4x",
    "reviewSumCount": "_reviewSumCount_fd9r4x",
    "reviewSumImg": "_reviewSumImg_fd9r4x",
    "reviewSumDesc": "_reviewSumDesc_fd9r4x",
    "reviewDetailList": "_reviewDetailList_fd9r4x",
    "progressBar": "_progressBar_fd9r4x",
    "section2": "_section2_fd9r4x",
    "reviewDetails": "_reviewDetails_fd9r4x",
    "rvwLeft": "_rvwLeft_fd9r4x",
    "rvwRight": "_rvwRight_fd9r4x"
  };
});
define("amazon/pod/amazon/amazon-comp/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JqdN67Pv", "block": "{\"symbols\":[\"goods\",\"review\",\"experienceRvw\",\"qualityRvw\",\"review\",\"detail\",\"info\",\"detail\",\"opt\",\"info\",\"thumbnail\",\"thumbnailIndex\"],\"statements\":[[4,\"with\",[[22,[\"activeGoods\"]]],null,{\"statements\":[[6,\"section\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"section1\"]]],null]]]],[8],[0,\"\\n\"],[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"left\"]]],null]]]],[8],[0,\"\\n\"],[4,\"with\",[[21,1,[\"goodsInfo\"]]],null,{\"statements\":[[0,\"    \"],[6,\"ul\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"thumbnailList\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"activeOpt\",\"thumbnailList\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"thumbnail\"]]],null]]]],[3,\"action\",[[21,0,[]],\"setThumbnailIndex\",[21,12,[]]],[[\"on\"],[\"mouseEnter\"]]],[8],[0,\"\\n        \"],[6,\"img\"],[11,\"src\",[21,11,[\"img\"]],null],[10,\"alt\",\"\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[11,12]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"preview\"]]],null]]]],[8],[0,\"\\n      \"],[6,\"img\"],[11,\"src\",[22,[\"activeThumbnail\",\"img\"]],null],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"previewImg\"]]],null]]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[10]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"right\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"rRight\"]]],null]]]],[8],[0,\"\\n      \"],[6,\"img\"],[10,\"src\",\"img/amazon/share.png\"],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"shareImg\"]]],null]]]],[8],[9],[0,\"\\n      \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"addToCartContainer\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"button\"],[11,\"class\",[27,[\"btn \",[26,\"unbound\",[[22,[\"__styles__\",\"addToCartBtn\"]]],null]]]],[3,\"action\",[[21,0,[]],[22,[\"onAdding2Cart\"]],[22,[\"activeThumbnail\"]],[22,[\"activeOpt\"]],[22,[\"activeGoods\"]]]],[8],[0,\"\\n          \"],[6,\"img\"],[10,\"src\",\"img/amazon/icon_cart.png\"],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"cartIcon\"]]],null]]]],[8],[9],[0,\" Add To Cart\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"rLeft\"]]],null]]]],[8],[0,\"\\n\"],[4,\"with\",[[21,1,[\"goodsInfo\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"goodsTitle\"]]],null]]]],[8],[0,\"\\n        \"],[1,[26,\"or\",[[22,[\"activeOpt\",\"title\"]],[21,7,[\"title\"]]],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"dl\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"goodsOpts\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"dt\"],[8],[0,\"\\n          \"],[6,\"b\"],[8],[0,\"Color\"],[9],[0,\": \"],[1,[22,[\"activeOpt\",\"optDesc\"]],false],[9],[0,\"\\n\"],[4,\"each\",[[21,7,[\"opts\"]]],null,{\"statements\":[[0,\"        \"],[6,\"dd\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"thumbnail \",[26,\"if\",[[26,\"eq\",[[21,9,[]],[22,[\"activeOpt\"]]],null],\"active\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[3,\"action\",[[21,0,[]],\"setActiveOpt\",[21,9,[]]],[[\"on\"],[\"mouseEnter\"]]],[8],[0,\"\\n          \"],[6,\"img\"],[11,\"src\",[21,9,[\"thumbnailList\",\"firstObject\",\"img\"]],null],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"ul\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"goodsDetails\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[26,\"or\",[[22,[\"activeOpt\",\"details\"]],[21,7,[\"details\"]]],null]],null,{\"statements\":[[0,\"        \"],[6,\"li\"],[8],[0,\"\\n          \"],[1,[21,8,[]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"      \"],[9],[0,\"\\n      \"]],\"parameters\":[7]},null],[0,\" \"],[4,\"with\",[[21,1,[\"reviewData\"]]],null,{\"statements\":[[0,\"\\n      \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"review\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewsSum\"]]],null]]]],[8],[0,\"\\n          \"],[6,\"h2\"],[8],[0,\"Customer Reviews\"],[9],[0,\"\\n          \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"imgAndCount\"]]],null]]]],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"img/amazon/stars_4.5.jpg\"],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewSumImg\"]]],null]]]],[8],[9],[0,\"\\n            \"],[6,\"b\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewSumCount\"]]],null]]]],[8],[1,[21,5,[\"total\"]],false],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"p\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewSumDesc\"]]],null]]]],[8],[0,\"4.7 out of 5 stars\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"ul\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewDetailList\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,5,[\"details\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[8],[0,\"\\n            \"],[1,[21,6,[\"label\"]],false],[0,\" \"],[1,[26,\"progress-bar\",null,[[\"ratio\",\"class\"],[[21,6,[\"ratio\"]],[26,\"concat\",[[26,\"unbound\",[[22,[\"__styles__\",\"progressBar\"]]],null]],null]]]],false],[0,\" \"],[1,[26,\"to-percent\",[[21,6,[\"ratio\"]]],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[6,\"section\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"section2\"]]],null]]]],[8],[0,\"\\n\"],[4,\"with\",[[21,1,[\"reviewData\"]]],null,{\"statements\":[[0,\"  \"],[6,\"section\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewDetails\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"rvwLeft\"]]],null]]]],[8],[0,\"\\n      \"],[4,\"each\",[[21,2,[\"reviewQuality\"]]],null,{\"statements\":[[0,\" \"],[1,[26,\"amazon/user-review\",null,[[\"reviewData\"],[[21,4,[]]]]],false],[0,\" \"]],\"parameters\":[4]},null],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"rvwRight\"]]],null]]]],[8],[0,\"\\n      \"],[4,\"each\",[[21,2,[\"reviewExperience\"]]],null,{\"statements\":[[0,\" \"],[1,[26,\"amazon/user-review\",null,[[\"reviewData\"],[[21,3,[]]]]],false],[0,\" \"]],\"parameters\":[3]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/amazon/amazon-comp/template.hbs" } });
});
define('amazon/pod/amazon/controller', ['exports', '@ember-decorators/object'], function (exports, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _dec, _dec2, _desc, _value, _class;

  var _window = window,
      myLocalStorage = _window.myLocalStorage;


  var GOODS = {
    CLOTHES_MAN_1: 1,
    CLOTHES_MAN_2: 2,
    CLOTHES_WOMAN_1: 3,
    CLOTHES_WOMAN_2: 4,
    PHONE_1: 5,
    PHONE_2: 6
  };

  var SurveyController = (_dec = (0, _object.computed)('g'), _dec2 = (0, _object.computed)('gList'), (_class = function (_EmberController) {
    _inherits(SurveyController, _EmberController);

    function SurveyController() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SurveyController);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyController.__proto__ || Object.getPrototypeOf(SurveyController)).call.apply(_ref, [this].concat(args))), _this), _this.queryParams = ['g'], _this.showConfirm = false, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SurveyController, [{
      key: 'onAdding2Cart',
      value: function onAdding2Cart(goods) {
        var goodsList = JSON.parse(myLocalStorage.getItem('goods') || '{}');
        switch (Number(goods)) {
          case GOODS.CLOTHES_MAN_1:
            goodsList.clothes_man_1 = 1;
            this.transitionToRoute('survey', { queryParams: { s: 3 } });
            break;
          case GOODS.CLOTHES_MAN_2:
            goodsList.clothes_man_2 = 1;
            this.transitionToRoute('survey', { queryParams: { s: 3 } });
            break;
          case GOODS.CLOTHES_WOMAN_1:
            goodsList.clothes_woman_1 = 1;
            this.transitionToRoute('survey', { queryParams: { s: 3 } });
            break;
          case GOODS.CLOTHES_WOMAN_2:
            goodsList.clothes_woman_2 = 1;
            this.transitionToRoute('survey', { queryParams: { s: 3 } });
            break;
          case GOODS.PHONE_1:
            goodsList.phone_1 = 1;
            this.transitionToRoute('survey', { queryParams: { s: 2 } });
            break;
          case GOODS.PHONE_2:
            goodsList.phone_2 = 1;
            this.transitionToRoute('survey', { queryParams: { s: 2 } });
            break;
          default:
            break;
        }
        // switch (Number(goods)) {
        //   case GOODS.CLOTHES_MAN_1:
        //     goodsList.clothes_man_1 = 1;
        //     this.transitionToRoute('survey', { queryParams: { s: 3 }});
        //   break;
        //   case GOODS.CLOTHES_MAN_2:
        //     goodsList.clothes_man_2 = 1;
        //     this.transitionToRoute('survey', { queryParams: { s: 3 }});
        //   break;
        //   case GOODS.CLOTHES_WOMAN_1:
        //     goodsList.clothes_woman_1 = 1;
        //     this.transitionToRoute('survey', { queryParams: { s: 3 }});
        //   break;
        //   case GOODS.CLOTHES_WOMAN_2:
        //     goodsList.clothes_woman_2 = 1;
        //     this.transitionToRoute('survey', { queryParams: { s: 3 }});
        //   break;
        //   case GOODS.PHONE_1:
        //     goodsList.phone_1 = 1;
        //     this.transitionToRoute('survey', { queryParams: { s: 2 }});
        //   break;
        //   case GOODS.PHONE_2:
        //     goodsList.phone_2 = 1;
        //     this.transitionToRoute('survey', { queryParams: { s: 2 }});
        //   break;
        //   default:
        //     break;
        // }
        myLocalStorage.setItem('goods', JSON.stringify(goodsList));
      }
    }, {
      key: 'showConfirm',
      value: function showConfirm(activeGoodsNumber, activeThumbnail, activeOpts, activeGoods) {
        this.set('activeGoodsNumber', activeGoodsNumber);
        this.set('activeThumbnail', activeThumbnail);
        this.set('activeGoods', activeGoods);
        this.set('activeOpts', activeOpts);
        this.set('showConfirm', true);
      }
    }, {
      key: 'confirm',
      value: function confirm(g) {
        this.send('onAdding2Cart', g);
        this.set('showConfirm', false);
      }
    }, {
      key: 'gList',
      get: function get() {
        var gList = this.getWithDefault('g', '1_2');
        return gList.split('_');
      }
    }, {
      key: 'isPhone',
      get: function get() {
        var goods = this.get('gList');
        return ~goods.indexOf('5') || ~goods.indexOf('6');
      }
    }]);

    return SurveyController;
  }(Ember.Controller), (_applyDecoratedDescriptor(_class.prototype, 'gList', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'gList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'isPhone', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'isPhone'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onAdding2Cart', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'onAdding2Cart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showConfirm', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'showConfirm'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'confirm', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'confirm'), _class.prototype)), _class));
  exports.default = SurveyController;
});
define('amazon/pod/amazon/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var AmazonRoute = function (_EmberRoute) {
    _inherits(AmazonRoute, _EmberRoute);

    function AmazonRoute() {
      _classCallCheck(this, AmazonRoute);

      return _possibleConstructorReturn(this, (AmazonRoute.__proto__ || Object.getPrototypeOf(AmazonRoute)).apply(this, arguments));
    }

    _createClass(AmazonRoute, [{
      key: 'model',
      value: function model(params) {
        if (params.g == '5_6') {
          window.myLocalStorage.clear();
        }
        // window.scrollTo(0, 0);
      }
    }, {
      key: 'activate',
      value: function activate() {
        window.scrollTo(0, 0);
      }
    }]);

    return AmazonRoute;
  }(Ember.Route);

  exports.default = AmazonRoute;
});
define("amazon/pod/amazon/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "amazonContainer": "_amazonContainer_1bwi68",
    "note": "_note_1bwi68",
    "confirmFooter": "_confirmFooter_1bwi68",
    "goodsPic": "_goodsPic_1bwi68"
  };
});
define("amazon/pod/amazon/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fukxJpse", "block": "{\"symbols\":[\"d\",\"g\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"amazonContainer\"]]],null]]]],[8],[0,\"\\n  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"note\"]]],null]]]],[8],[0,\"\\n  \"],[6,\"b\"],[8],[0,\" Notice:\"],[9],[0,\" You have a need to buy \"],[1,[26,\"if\",[[22,[\"isPhone\"]],\"a cellphone\",\"clothing\"],null],false],[0,\" from other countries in Amazon.com, and now you can browse two representative products, respectively. You have enough time to scrutinize these products and choose a product to a shopping cart.\\n  \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"gList\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"amazon/amazon-comp\",null,[[\"goods\",\"onAdding2Cart\"],[[21,2,[]],[26,\"action\",[[21,0,[]],\"showConfirm\",[21,2,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"showConfirm\"]]],null,{\"statements\":[[4,\"common-dialog\",null,[[\"title\",\"onClickOverlay\"],[\"Tip\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"showConfirm\"]]],null],[26,\"not\",[[22,[\"showConfirm\"]]],null]],null]]],{\"statements\":[[4,\"component\",[[21,1,[\"body\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"goodsPic\"]]],null]]]],[8],[0,\"\\n      \"],[6,\"img\"],[11,\"src\",[22,[\"activeThumbnail\",\"img\"]],null],[10,\"alt\",\"\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    Are you sure to put this term\\n\"],[0,\"    into the shopping cart?\\n\"]],\"parameters\":[]},null],[4,\"component\",[[21,1,[\"footer\"]]],[[\"class\"],[[26,\"concat\",[[26,\"unbound\",[[22,[\"__styles__\",\"confirmFooter\"]]],null]],null]]],{\"statements\":[[0,\"    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[3,\"action\",[[21,0,[]],\"confirm\",[22,[\"activeGoodsNumber\"]]]],[8],[0,\"Confirm\"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn\"],[3,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"showConfirm\"]]],null],[26,\"not\",[[22,[\"showConfirm\"]]],null]]],[8],[0,\"Cancel\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/amazon/template.hbs" } });
});
define('amazon/pod/amazon/user-review/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var UserReviewComponent = function (_EmberComponent) {
    _inherits(UserReviewComponent, _EmberComponent);

    function UserReviewComponent() {
      _classCallCheck(this, UserReviewComponent);

      return _possibleConstructorReturn(this, (UserReviewComponent.__proto__ || Object.getPrototypeOf(UserReviewComponent)).apply(this, arguments));
    }

    return UserReviewComponent;
  }(Ember.Component);

  exports.default = UserReviewComponent;
});
define("amazon/pod/amazon/user-review/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "root": "_root_jyi9vx",
    "userInfo": "_userInfo_jyi9vx",
    "avatar": "_avatar_jyi9vx",
    "userName": "_userName_jyi9vx",
    "date": "_date_jyi9vx",
    "review": "_review_jyi9vx",
    "userReview": "_userReview_jyi9vx"
  };
});
define("amazon/pod/amazon/user-review/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vjchXhfj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"userInfo\"]]],null]]]],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[22,[\"reviewData\",\"userInfo\",\"avatar\"]],null],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"avatar\"]]],null]]]],[8],[9],[0,\" \"],[6,\"span\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"userName\"]]],null]]]],[8],[1,[22,[\"reviewData\",\"userInfo\",\"userName\"]],false],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"date\"]]],null]]]],[8],[0,\"\\n    \"],[1,[22,[\"reviewData\",\"date\"]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"review\"]]],null]]]],[8],[0,\"\\n  \"],[6,\"p\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"userReview\"]]],null]]]],[8],[0,\"\\n    \"],[1,[22,[\"reviewData\",\"reviewTxt\"]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/amazon/user-review/template.hbs" } });
});
define('amazon/pod/application/controller', ['exports', '@ember-decorators/object'], function (exports, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _desc, _value, _class;

  var ApplicationController = (_class = function (_EmberController) {
    _inherits(ApplicationController, _EmberController);

    function ApplicationController() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ApplicationController);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApplicationController.__proto__ || Object.getPrototypeOf(ApplicationController)).call.apply(_ref, [this].concat(args))), _this), _this.queryParams = ['export', 'tip', 'clean', 'unclosable'], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ApplicationController, [{
      key: 'closeExport',
      value: function closeExport() {
        var unclosable = this.get('unclosable');
        if (!unclosable) {
          this.set('tip', '');
          this.set('export', '');
        }
      }
    }, {
      key: 'cleanStorage',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this2 = this;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return window.localforage.clear();

                case 2:
                  this.set('clean', '');
                  this.set('tip', 'Cleaned up, page reloading!');
                  Ember.run.later(function () {
                    _this2.set('tip', '');
                    window.location.reload();
                  }, 1000);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function cleanStorage() {
          return _ref2.apply(this, arguments);
        }

        return cleanStorage;
      }()
    }]);

    return ApplicationController;
  }(Ember.Controller), (_applyDecoratedDescriptor(_class.prototype, 'closeExport', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'closeExport'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'cleanStorage', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'cleanStorage'), _class.prototype)), _class);
  exports.default = ApplicationController;
});
define("amazon/pod/application/route", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ApplicationRoute = function (_EmberRoute) {
    _inherits(ApplicationRoute, _EmberRoute);

    function ApplicationRoute() {
      _classCallCheck(this, ApplicationRoute);

      return _possibleConstructorReturn(this, (ApplicationRoute.__proto__ || Object.getPrototypeOf(ApplicationRoute)).apply(this, arguments));
    }

    _createClass(ApplicationRoute, [{
      key: "redirect",
      value: function redirect() {
        // this.replaceWith("survey", {
        //   queryParams: {
        //     s: 1,
        //     tip: '',
        //     unclosable: ''
        //   }
        // });
        this.replaceWith("amazon", {
          queryParams: {
            g: '5_6',
            tip: '',
            unclosable: ''
          }
        });
      }
    }]);

    return ApplicationRoute;
  }(Ember.Route);

  exports.default = ApplicationRoute;
});
define("amazon/pod/application/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "exportMask": "_exportMask_1t2jyk",
    "showMask": "_showMask_1t2jyk",
    "initExportBtn": "_initExportBtn_1t2jyk",
    "showExportBtn": "_showExportBtn_1t2jyk",
    "tip": "_tip_1t2jyk",
    "showTip": "_showTip_1t2jyk",
    "cleanDialog": "_cleanDialog_1t2jyk",
    "textCenter": "_textCenter_1t2jyk"
  };
});
define("amazon/pod/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "d94QnQs3", "block": "{\"symbols\":[\"d\",\"exportXlsx\"],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"exportMask \",[26,\"if\",[[26,\"or\",[[22,[\"export\"]],[22,[\"tip\"]]],null],\"showMask\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[3,\"action\",[[21,0,[]],\"closeExport\"]],[8],[0,\" \"],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"tip \",[26,\"if\",[[22,[\"tip\"]],\"showTip\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n\"],[1,[20,\"tip\"],false],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[4,\"export-xlsx\",null,[[\"elementId\",\"class\"],[\"btn-export-xlsx\",[26,\"concat\",[[26,\"if\",[[22,[\"export\"]],[26,\"local-class\",[\"showExportBtn\"],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]],null],\" \",[26,\"unbound\",[[22,[\"__styles__\",\"initExportBtn\"]]],null]],null]]],{\"statements\":[[0,\"  \"],[1,[26,\"set\",[[21,0,[]],\"exportXlsx\",[21,2,[]]],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"if\",[[22,[\"clean\"]]],null,{\"statements\":[[4,\"common-dialog\",null,[[\"title\",\"onClickOverlay\"],[\"Tip\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"clean\"]]],null],\"\"],null]]],{\"statements\":[[4,\"component\",[[21,1,[\"body\"]]],null,{\"statements\":[[0,\"    是否删除所有本地数据? (Are you sure to clean up all the local storages)?\\n     \"],[6,\"p\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"textCenter\"]]],null]]]],[8],[6,\"small\"],[8],[0,\"(为了防止用户误删, 服务器数据需要联系开发人员进行清理)\"],[9],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[21,1,[\"footer\"]]],[[\"class\"],[[26,\"concat\",[[26,\"unbound\",[[22,[\"__styles__\",\"cleanDialog\"]]],null]],null]]],{\"statements\":[[0,\"    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[3,\"action\",[[21,0,[]],\"cleanStorage\"]],[8],[0,\"Confirm\"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn\"],[3,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"clean\"]]],null],\"\"]],[8],[0,\"Cancel\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/application/template.hbs" } });
});
define('amazon/pod/components/common-dialog/body/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var CommonDialogComponent = function (_EmberComponent) {
    _inherits(CommonDialogComponent, _EmberComponent);

    function CommonDialogComponent() {
      _classCallCheck(this, CommonDialogComponent);

      return _possibleConstructorReturn(this, (CommonDialogComponent.__proto__ || Object.getPrototypeOf(CommonDialogComponent)).apply(this, arguments));
    }

    return CommonDialogComponent;
  }(Ember.Component);

  exports.default = CommonDialogComponent;
});
define("amazon/pod/components/common-dialog/body/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "root": "_root_1wgwyh"
  };
});
define("amazon/pod/components/common-dialog/body/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3ABMk+dq", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"body\"]]],null]]]],[8],[0,\"\\n  \"],[13,1],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/components/common-dialog/body/template.hbs" } });
});
define('amazon/pod/components/common-dialog/component', ['exports', '@ember-decorators/object'], function (exports, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _desc, _value, _class;

  var CommonDialogComponent = (_class = function (_EmberComponent) {
    _inherits(CommonDialogComponent, _EmberComponent);

    function CommonDialogComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, CommonDialogComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommonDialogComponent.__proto__ || Object.getPrototypeOf(CommonDialogComponent)).call.apply(_ref, [this].concat(args))), _this), _this.clickOutsideToClose = false, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CommonDialogComponent, [{
      key: 'onClickOverlay',
      value: function onClickOverlay() {
        //
      }
    }]);

    return CommonDialogComponent;
  }(Ember.Component), (_applyDecoratedDescriptor(_class.prototype, 'onClickOverlay', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'onClickOverlay'), _class.prototype)), _class);
  exports.default = CommonDialogComponent;
});
define('amazon/pod/components/common-dialog/footer/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var CommonDialogComponent = function (_EmberComponent) {
    _inherits(CommonDialogComponent, _EmberComponent);

    function CommonDialogComponent() {
      _classCallCheck(this, CommonDialogComponent);

      return _possibleConstructorReturn(this, (CommonDialogComponent.__proto__ || Object.getPrototypeOf(CommonDialogComponent)).apply(this, arguments));
    }

    return CommonDialogComponent;
  }(Ember.Component);

  exports.default = CommonDialogComponent;
});
define("amazon/pod/components/common-dialog/footer/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "root": "_root_14viw5"
  };
});
define("amazon/pod/components/common-dialog/footer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VISeuvxa", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"footer\"]]],null]]]],[8],[0,\"\\n  \"],[13,1],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/components/common-dialog/footer/template.hbs" } });
});
define("amazon/pod/components/common-dialog/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "header": "_header_978i21",
    "dialog": "_dialog_978i21"
  };
});
define("amazon/pod/components/common-dialog/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W/b3OUw8", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"modal-dialog\",null,[[\"containerClass\",\"translucentOverlay\",\"onClickOverlay\",\"clickOutsideToClose\"],[[26,\"local-class\",[\"dialog\"],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]],true,[22,[\"onClickOverlay\"]],[22,[\"clickOutsideToClose\"]]]],{\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"header\"]]],null]]]],[8],[0,\"\\n  \"],[1,[20,\"title\"],false],[0,\"\\n\"],[9],[0,\"\\n\"],[13,1,[[26,\"hash\",null,[[\"body\",\"footer\"],[[26,\"component\",[\"components/common-dialog/body\"],null],[26,\"component\",[\"components/common-dialog/footer\"],null]]]]]],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/components/common-dialog/template.hbs" } });
});
define('amazon/pod/components/export-xlsx/component', ['exports', '@ember-decorators/object', 'amazon/utils/export-xlsx'], function (exports, _object, _exportXlsx) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _desc, _value, _class;

  var _window = window,
      getItem = _window.localforage.getItem;
  var ExportXlsxComponent = (_class = function (_EmberComponent) {
    _inherits(ExportXlsxComponent, _EmberComponent);

    function ExportXlsxComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ExportXlsxComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExportXlsxComponent.__proto__ || Object.getPrototypeOf(ExportXlsxComponent)).call.apply(_ref, [this].concat(args))), _this), _this.tagName = 'button', _this.classNames = ['btn'], _this.exportBtnText = '导出问卷数据', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ExportXlsxComponent, [{
      key: 'buildXslData',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var svItemList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var rt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var i, svItem;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  i = 0;

                case 1:
                  if (!(i < svItemList.length)) {
                    _context.next = 13;
                    break;
                  }

                  svItem = svItemList[i];

                  if (!(svItem.type === 'radio')) {
                    _context.next = 7;
                    break;
                  }

                  rt[svItem.desc] = svItem.result;
                  _context.next = 10;
                  break;

                case 7:
                  if (!(svItem.type === 'group')) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 10;
                  return this.buildXslData(svItem.items, rt);

                case 10:
                  i++;
                  _context.next = 1;
                  break;

                case 13:
                  return _context.abrupt('return', rt);

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function buildXslData() {
          return _ref2.apply(this, arguments);
        }

        return buildXslData;
      }()
    }, {
      key: 'doExportLast',
      value: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fileName) {
          var svUserFills, xlsData, heads, svResultItem, item, sv1, sv2, sv3, sv4;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = JSON;
                  _context2.next = 3;
                  return getItem('svUserFills');

                case 3:
                  _context2.t1 = _context2.sent;

                  if (_context2.t1) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.t1 = false;

                case 6:
                  _context2.t2 = _context2.t1;
                  svUserFills = _context2.t0.parse.call(_context2.t0, _context2.t2);

                  if (!svUserFills) {
                    _context2.next = 30;
                    break;
                  }

                  xlsData = [];
                  heads = {};
                  svResultItem = svUserFills[svUserFills.length - 1];
                  item = {};
                  _context2.prev = 13;
                  sv1 = this.buildXslData(svResultItem.sv1.items, item, 1);
                  sv2 = this.buildXslData(svResultItem.sv2.items, item, 2);
                  sv3 = this.buildXslData(svResultItem.sv3.items, item, 3);
                  sv4 = this.buildXslData(svResultItem.sv4.items, item, 4);
                  _context2.next = 20;
                  return Promise.all([sv1, sv2, sv3, sv4]);

                case 20:
                  heads = _extends({}, heads, item, svResultItem.goods, svResultItem.meta);
                  xlsData.push(_extends({}, item, svResultItem.goods, svResultItem.meta));
                  _context2.next = 27;
                  break;

                case 24:
                  _context2.prev = 24;
                  _context2.t3 = _context2['catch'](13);

                  console.log(_context2.t3);

                case 27:
                  try {
                    (0, _exportXlsx.downloadExl)(xlsData, Object.keys(heads), fileName || '问卷记录');
                  } catch (error) {
                    console.log(error);
                  }

                  _context2.next = 31;
                  break;

                case 30:
                  alert('没有数据');

                case 31:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[13, 24]]);
        }));

        function doExportLast(_x3) {
          return _ref3.apply(this, arguments);
        }

        return doExportLast;
      }()
    }, {
      key: 'doExport',
      value: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var svUserFills, xlsData, heads, i, svResultItem, item, sv1, sv2, sv3, sv4;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = JSON;
                  _context3.next = 3;
                  return getItem('svUserFills');

                case 3:
                  _context3.t1 = _context3.sent;

                  if (_context3.t1) {
                    _context3.next = 6;
                    break;
                  }

                  _context3.t1 = false;

                case 6:
                  _context3.t2 = _context3.t1;
                  svUserFills = _context3.t0.parse.call(_context3.t0, _context3.t2);

                  if (!svUserFills) {
                    _context3.next = 35;
                    break;
                  }

                  xlsData = [];
                  heads = {};
                  i = 0;

                case 12:
                  if (!(i < svUserFills.length)) {
                    _context3.next = 32;
                    break;
                  }

                  svResultItem = svUserFills[i];
                  item = {};
                  _context3.prev = 15;
                  sv1 = this.buildXslData(svResultItem.sv1.items, item);
                  sv2 = this.buildXslData(svResultItem.sv2.items, item);
                  sv3 = this.buildXslData(svResultItem.sv3.items, item);
                  sv4 = this.buildXslData(svResultItem.sv4.items, item);
                  _context3.next = 22;
                  return Promise.all([sv1, sv2, sv3, sv4]);

                case 22:
                  heads = _extends({}, heads, item, svResultItem.goods, svResultItem.meta);
                  xlsData.push(_extends({}, item, svResultItem.goods, svResultItem.meta));
                  _context3.next = 29;
                  break;

                case 26:
                  _context3.prev = 26;
                  _context3.t3 = _context3['catch'](15);

                  console.log(_context3.t3);

                case 29:
                  i++;
                  _context3.next = 12;
                  break;

                case 32:
                  try {
                    (0, _exportXlsx.downloadExl)(xlsData, Object.keys(heads), '问卷记录');
                  } catch (error) {
                    console.log(error);
                  }

                  _context3.next = 36;
                  break;

                case 35:
                  alert('没有数据');

                case 36:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[15, 26]]);
        }));

        function doExport() {
          return _ref4.apply(this, arguments);
        }

        return doExport;
      }()
    }, {
      key: 'click',
      value: function click() {
        this.send('doExport');
      }
    }]);

    return ExportXlsxComponent;
  }(Ember.Component), (_applyDecoratedDescriptor(_class.prototype, 'doExportLast', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'doExportLast'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'doExport', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'doExport'), _class.prototype)), _class);
  exports.default = ExportXlsxComponent;
});
define("amazon/pod/components/export-xlsx/demo.es5", [], function () {
    "use strict";

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }return target;
    };

    var jsono = [{ //测试数据
        "保质期临期预警(天)": "adventLifecycle",
        "商品标题": "title",
        "建议零售价": "defaultPrice",
        "高(cm)": "height",
        "商品描述": "Description",
        "保质期禁售(天)": "lockupLifecycle",
        "商品名称": "skuName",
        "商品简介": "brief",
        "宽(cm)": "width",
        "阿达": "asdz",
        "货号": "goodsNo",
        "商品条码": "skuNo",
        "商品品牌": "brand",
        "净容积(cm^3)": "netVolume",
        "是否保质期管理": "isShelfLifeMgmt",
        "是否串号管理": "isSNMgmt",
        "商品颜色": "color",
        "尺码": "size",
        "是否批次管理": "isBatchMgmt",
        "商品编号": "skuCode",
        "商品简称": "shortName",
        "毛重(g)": "grossWeight",
        "长(cm)": "length",
        "英文名称": "englishName",
        "净重(g)": "netWeight",
        "商品分类": "categoryId",
        "这里超过了": 1111.0,
        "保质期(天)": "expDate"
    }];
    function downloadExl(json, type) {
        var tmpDown; //导出的二进制对象
        var tmpdata = json[0];
        json.unshift({});
        var keyMap = []; //获取keys
        for (var k in tmpdata) {
            keyMap.push(k);
            json[0][k] = k;
        }
        var tmpdata = []; //用来保存转换好的json
        json.map(function (v, i) {
            return keyMap.map(function (k, j) {
                return _extends({}, {
                    v: v[k],
                    position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                });
            });
        }).reduce(function (prev, next) {
            return prev.concat(next);
        }).forEach(function (v, i) {
            return tmpdata[v.position] = {
                v: v.v
            };
        });
        var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
        var tmpWB = {
            SheetNames: ['mySheet'], //保存的表标题
            Sheets: {
                'mySheet': _extends({}, tmpdata, //内容
                {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                })
            }
        };
        tmpDown = new Blob([s2ab(XLSX.write(tmpWB, { bookType: type == undefined ? 'xlsx' : type, bookSST: false, type: 'binary' //这里的数据是用来定义导出的格式类型
        }))], {
            type: ""
        }); //创建二进制对象写入转换好的字节流

        if ("msSaveOrOpenBlob" in navigator) {
            window.navigator.msSaveOrOpenBlob(tmpDown, 'xxx.xlsx');
        } else {
            var href = URL.createObjectURL(tmpDown); //创建对象超链接
            var url = document.createElement("a");
            // document.body.appendChild(url);
            url.download = "xx.xlsx";
            url.href = href; //绑定a标签
            url.click(); //模拟点击实现下载
            setTimeout(function () {
                //延时释放
                URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
            }, 100);
        }
    }

    function s2ab(s) {
        //字符串转字符流
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }return buf;
    }
    // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
    function getCharCol(n) {
        var temCol = '',
            s = '',
            m = 0;
        while (n > 0) {
            m = n % 26 + 1;
            s = String.fromCharCode(m + 64) + s;
            n = (n - m) / 26;
        }
        return s;
    }
});
define("amazon/pod/components/export-xlsx/demo.origin", [], function () {
    "use strict";

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var jsono = [{ //测试数据
        "保质期临期预警(天)": "adventLifecycle",
        "商品标题": "title",
        "建议零售价": "defaultPrice",
        "高(cm)": "height",
        "商品描述": "Description",
        "保质期禁售(天)": "lockupLifecycle",
        "商品名称": "skuName",
        "商品简介": "brief",
        "宽(cm)": "width",
        "阿达": "asdz",
        "货号": "goodsNo",
        "商品条码": "skuNo",
        "商品品牌": "brand",
        "净容积(cm^3)": "netVolume",
        "是否保质期管理": "isShelfLifeMgmt",
        "是否串号管理": "isSNMgmt",
        "商品颜色": "color",
        "尺码": "size",
        "是否批次管理": "isBatchMgmt",
        "商品编号": "skuCode",
        "商品简称": "shortName",
        "毛重(g)": "grossWeight",
        "长(cm)": "length",
        "英文名称": "englishName",
        "净重(g)": "netWeight",
        "商品分类": "categoryId",
        "这里超过了": 1111.0,
        "保质期(天)": "expDate"
    }];
    function downloadExl(json, type) {
        var tmpDown; //导出的二进制对象
        var tmpdata = json[0];
        json.unshift({});
        var keyMap = []; //获取keys
        for (var k in tmpdata) {
            keyMap.push(k);
            json[0][k] = k;
        }
        var tmpdata = []; //用来保存转换好的json
        json.map(function (v, i) {
            return keyMap.map(function (k, j) {
                return _extends({}, {
                    v: v[k],
                    position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                });
            });
        }).reduce(function (prev, next) {
            return prev.concat(next);
        }).forEach(function (v, i) {
            return tmpdata[v.position] = {
                v: v.v
            };
        });
        var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
        var tmpWB = {
            SheetNames: ['mySheet'], //保存的表标题
            Sheets: {
                'mySheet': _extends({}, tmpdata, //内容
                {
                    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                })
            }
        };
        debugger;
        tmpDown = new Blob([s2ab(XLSX.write(tmpWB, { bookType: type == undefined ? 'xlsx' : type, bookSST: false, type: 'binary' //这里的数据是用来定义导出的格式类型
        }))], {
            type: ""
        }); //创建二进制对象写入转换好的字节流

        if ("msSaveOrOpenBlob" in navigator) {
            window.navigator.msSaveOrOpenBlob(tmpDown, 'xxx');
        } else {
            var href = URL.createObjectURL(tmpDown); //创建对象超链接
            var url = document.createElement("a");
            // document.body.appendChild(url);
            url.download = "xx.xlsx";
            url.href = href; //绑定a标签
            url.click(); //模拟点击实现下载
            setTimeout(function () {
                //延时释放
                URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
            }, 100);
        }
    }

    function s2ab(s) {
        //字符串转字符流
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }return buf;
    }
    // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
    function getCharCol(n) {
        var temCol = '',
            s = '',
            m = 0;
        while (n > 0) {
            m = n % 26 + 1;
            s = String.fromCharCode(m + 64) + s;
            n = (n - m) / 26;
        }
        return s;
    }
});
define("amazon/pod/components/export-xlsx/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "root": "_root_1k1ihv",
    "none": "_none_1k1ihv"
  };
});
define("amazon/pod/components/export-xlsx/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3B3LKvvf", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[20,\"exportBtnText\"],false],[0,\"\\n\"],[6,\"span\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"none\"]]],null]]]],[8],[0,\"\\n  \"],[13,1,[[21,0,[]]]],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/components/export-xlsx/template.hbs" } });
});
define('amazon/pod/components/progress-bar/component', ['exports', '@ember-decorators/object'], function (exports, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var ProgressBarComponent = (_dec = (0, _object.computed)('ratio'), (_class = function (_EmberComponent) {
    _inherits(ProgressBarComponent, _EmberComponent);

    function ProgressBarComponent() {
      _classCallCheck(this, ProgressBarComponent);

      return _possibleConstructorReturn(this, (ProgressBarComponent.__proto__ || Object.getPrototypeOf(ProgressBarComponent)).apply(this, arguments));
    }

    _createClass(ProgressBarComponent, [{
      key: 'width',
      get: function get() {
        var ratio = this.getWithDefault('ratio', 0);
        return ratio * 100 + '%';
      }
    }]);

    return ProgressBarComponent;
  }(Ember.Component), (_applyDecoratedDescriptor(_class.prototype, 'width', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'width'), _class.prototype)), _class));
  exports.default = ProgressBarComponent;
});
define("amazon/pod/components/progress-bar/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "root": "_root_1xzr5f",
    "ratio": "_ratio_1xzr5f"
  };
});
define("amazon/pod/components/progress-bar/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qyOQwTw6", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"style\",[27,[\"width:\",[20,\"width\"]]]],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"ratio\"]]],null]]]],[8],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/components/progress-bar/template.hbs" } });
});
define('amazon/pod/survey/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var SurveyController = function (_EmberController) {
    _inherits(SurveyController, _EmberController);

    function SurveyController() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SurveyController);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyController.__proto__ || Object.getPrototypeOf(SurveyController)).call.apply(_ref, [this].concat(args))), _this), _this.queryParams = ['s'], _this.s = 1, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return SurveyController;
  }(Ember.Controller);

  exports.default = SurveyController;
});
define('amazon/pod/survey/route', ['exports', '@ember-decorators/object'], function (exports, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _desc, _value, _class;

  var SurveyRoute = (_class = function (_EmberRoute) {
    _inherits(SurveyRoute, _EmberRoute);

    function SurveyRoute() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SurveyRoute);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyRoute.__proto__ || Object.getPrototypeOf(SurveyRoute)).call.apply(_ref, [this].concat(args))), _this), _this.queryParams = {
        s: {
          refreshModel: true
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SurveyRoute, [{
      key: 'model',
      value: function model(params) {
        if (params.s == 1) {
          // window.myLocalStorage.clear();
        }
        window.scrollTo(0, 0);
      }
    }, {
      key: 'willTransition',
      value: function willTransition() /*trans*/{
        // if (confirm('是否要离开当前页面？')) {
        //   return true;
        // } else {
        //   trans.abort();
        // }
      }
    }]);

    return SurveyRoute;
  }(Ember.Route), (_applyDecoratedDescriptor(_class.prototype, 'willTransition', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'willTransition'), _class.prototype)), _class);
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
define('amazon/pod/survey/survey-comp/component', ['exports', '@ember-decorators/object', 'amazon/pod/survey/survey-comp/surveys/survey.1', 'amazon/pod/survey/survey-comp/surveys/survey.2.1', 'amazon/pod/survey/survey-comp/surveys/survey.2.2', 'amazon/pod/survey/survey-comp/surveys/survey.2.3', 'amazon/utils/util', 'amazon/pod/survey/survey-comp/styles'], function (exports, _object, _survey2, _survey3, _survey4, _survey5, _util, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _dec, _dec2, _dec3, _desc, _value, _class;

  var _window = window,
      _window$localforage = _window.localforage,
      getItem = _window$localforage.getItem,
      setItem = _window$localforage.setItem,
      myLocalStorage = _window.myLocalStorage;
  var random = Math.random;


  var SURVEY = {
    SURVEY_1: 1,
    SURVEY_2: 2,
    SURVEY_3: 3,
    SURVEY_4: 4
  };

  var SurveyCompComponent = (_dec = (0, _object.computed)('s'), _dec2 = (0, _object.computed)('investigateCount'), _dec3 = (0, _object.computed)('s', 'formattedInvestigateCount'), (_class = function (_EmberComponent) {
    _inherits(SurveyCompComponent, _EmberComponent);

    function SurveyCompComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SurveyCompComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyCompComponent.__proto__ || Object.getPrototypeOf(SurveyCompComponent)).call.apply(_ref, [this].concat(args))), _this), _this.survey1 = Ember.copy(_survey2.default, true), _this.survey2 = Ember.copy(_survey3.default, true), _this.survey3 = Ember.copy(_survey4.default, true), _this.survey4 = Ember.copy(_survey5.default, true), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SurveyCompComponent, [{
      key: 'didRender',
      value: function didRender() {
        var activeSurvey = this.get('activeSurvey');
        document.title = Ember.get(activeSurvey, 'title');
      }
    }, {
      key: 'didInsertElement',
      value: function didInsertElement() {
        var radios = this.$('[id^="i-check"]');
        var ctx = this;
        radios.on('ifToggled', function () {
          if (this.checked) {
            ctx.$(this).closest('.' + _styles.default['error']).removeClass(_styles.default['error']);
          }
        });
      }
    }, {
      key: 'getinvestigateCount',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var svUserFills, _window$env, isIE, isLocalFile, _ref3, data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = JSON;
                  _context.next = 3;
                  return getItem('svUserFills');

                case 3:
                  _context.t1 = _context.sent;

                  if (_context.t1) {
                    _context.next = 6;
                    break;
                  }

                  _context.t1 = '[]';

                case 6:
                  _context.t2 = _context.t1;
                  svUserFills = _context.t0.parse.call(_context.t0, _context.t2);
                  _window$env = window.env, isIE = _window$env.isIE, isLocalFile = _window$env.isLocalFile;

                  if (!(isIE && isLocalFile)) {
                    _context.next = 23;
                    break;
                  }

                  _context.prev = 10;
                  _context.next = 13;
                  return Ember.$.get('http://mlo.kim:8888/queryCount?t=' + Date.now());

                case 13:
                  _ref3 = _context.sent;
                  data = _ref3.data;

                  this.set('investigateCount', +data + 1);
                  _context.next = 21;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t3 = _context['catch'](10);

                  this.set('investigateCount', svUserFills.length ? svUserFills.length + 1 : (window.investigateCount || 0) + 1);

                case 21:
                  _context.next = 24;
                  break;

                case 23:
                  this.set('investigateCount', svUserFills.length + 1);

                case 24:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[10, 18]]);
        }));

        function getinvestigateCount() {
          return _ref2.apply(this, arguments);
        }

        return getinvestigateCount;
      }()
    }, {
      key: 'formatDate',
      value: function formatDate(seconds) {
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getDate();
        var hour = time.getHours();
        var min = time.getMinutes();
        var strDate = '' + (year + String(month).padStart(2, '0') + String(day).padStart(2, '0'));
        return seconds ? '' + (strDate + String(hour).padStart(2, '0') + String(min).padStart(2, '0')) : strDate;
      }
    }, {
      key: 'validate',
      value: function validate(surveyItems) {
        var _this2 = this;

        return surveyItems.every(function (el) {
          if (el.type === 'radio') {
            if (!el.opts.some(function (opEl) {
              return opEl.isChecked;
            })) {
              // 该选项都没有选中
              var selector = '[data-desc="' + el.desc + '"]';
              (0, _util.scrollTo)(selector);
              _this2.$(selector).addClass(_styles.default['error']);
              return false;
            } else {
              return true;
            }
          } else if (el.type === 'group') {
            return _this2.validate(el.items);
          }
        });
      }
    }, {
      key: 'surveySubmitAction1',
      value: function surveySubmitAction1() {
        var appController = this.get('appController');
        if (false && +random().toFixed()) {
          // 随机跳手机、衣服
          appController.transitionToRoute('amazon', { queryParams: { g: '5_6' } }); // 跳手机页面
        } else {
          var _survey = JSON.parse(myLocalStorage.getItem('survey1'));
          var genderSelected = _survey.items.findBy('desc', 'Gerder').opts.findBy('isChecked', true);
          if (genderSelected.optText === 'Male') {
            appController.transitionToRoute('amazon', { queryParams: { g: '1_2' } }); // 跳男装
          } else {
            appController.transitionToRoute('amazon', { queryParams: { g: '3_4' } }); // 跳女装
          }
        }
      }
    }, {
      key: 'surveySubmitAction2',
      value: function surveySubmitAction2() {
        var _getProperties = this.getProperties(['appController']),
            appController = _getProperties.appController;

        appController.transitionToRoute({ queryParams: { s: 1 } });

        // if (myLocalStorage.getItem('survey3')) {
        //   // 如果 survey3 有记录， 则证明衣服问卷已经填写， 则跳最后一个问卷
        //   appController.transitionToRoute({ queryParams: { s: 4 }});
        // } else {
        //   // 否则跳转到衣服
        //   let survey1 = JSON.parse(myLocalStorage.getItem('survey1'));
        //   let genderSelected = survey1.items.findBy('desc', 'Gerder').opts.findBy('isChecked', true);
        //   if (genderSelected.optText === 'Male') {
        //     appController.transitionToRoute('amazon', { queryParams: { g: '1_2' }});
        //   } else {
        //     appController.transitionToRoute('amazon', { queryParams: { g: '3_4' }});
        //   }
        // }
      }
    }, {
      key: 'surveySubmitAction3',
      value: function surveySubmitAction3() {
        var appController = this.get('appController');
        appController.transitionToRoute({ queryParams: { s: 4 } });

        // if (myLocalStorage.getItem('survey2')) {
        //   // 如果 survey2 有记录， 则证明手机问卷已经填写， 则跳最后一个问卷
        //   appController.transitionToRoute({ queryParams: { s: 4 }});
        // } else {
        //   // 否则跳手机购买页面
        //   appController.transitionToRoute('amazon', { queryParams: { g: '5_6' }});
        // }
      }
    }, {
      key: 'surveySubmitAction4',
      value: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  // 存储数据到 indexDB 和 excel

                  // this.set('showshowSaveDialog', true);
                  this.send('showSaveDialog');

                  // 之前的自动调整逻辑，甲方需要手动确认进行跳转
                  // let redirectTime = 3;
                  // appController.set('tip', `Thanks for your filling out, Redirecting after ${redirectTime} seconds...`);
                  // let task_id = setInterval(async () => {
                  //   appController.set('tip', `Thanks for your filling out, Redirecting after ${--redirectTime} seconds...`);
                  //   if (redirectTime <= 0) {
                  //     clearInterval(task_id);
                  //     await wait(100);
                  //     appController.transitionToRoute({ queryParams: { s: 1, tip: '' }});
                  //   }
                  // }, 1000);

                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function surveySubmitAction4() {
          return _ref4.apply(this, arguments);
        }

        return surveySubmitAction4;
      }()
    }, {
      key: 'submitSurvey',
      value: function submitSurvey(s) {
        if (s == 4) {
          this.send('submit');
        } else {
          this.set('showNextPageDialog', true);
        }
      }
    }, {
      key: 'nextPageDialogConfirm',
      value: function nextPageDialogConfirm() {
        this.send('submit');
        this.set('showNextPageDialog', false);
      }
    }, {
      key: 'submit',
      value: function submit() {
        var activeSurvey = this.get('activeSurvey');
        var s = this.getWithDefault('s', 1);
        if (this.validate(activeSurvey.items)) {
          myLocalStorage.setItem('survey' + s, JSON.stringify(activeSurvey)); // 存储当前问卷数据
        } else {
          return;
        }

        switch (Number(s)) {
          case SURVEY.SURVEY_1:
            this.send('surveySubmitAction1'); // 填完第一个问卷
            break;
          case SURVEY.SURVEY_2:
            this.send('surveySubmitAction2'); // 填完手机问卷
            break;
          case SURVEY.SURVEY_3:
            this.send('surveySubmitAction3'); // 填完衣服问卷
            break;
          case SURVEY.SURVEY_4:
            this.send('surveySubmitAction4'); // 填完最终问卷
            break;
          default:
            break;
        }
      }
    }, {
      key: 'showSaveDialog',
      value: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var appController, _window$env2, isIE, isLocalFile, exportXlsx, fileName;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.set('showSaveTip', '');
                  appController = this.get('appController');
                  // appController.set('unclosable', true);
                  // appController.set('tip', 'Saving...');

                  this.set('disableConfirm', true);
                  _context3.next = 5;
                  return this.updateStorage();

                case 5:
                  _window$env2 = window.env, isIE = _window$env2.isIE, isLocalFile = _window$env2.isLocalFile;

                  if (!(true || isIE && isLocalFile)) {
                    _context3.next = 11;
                    break;
                  }

                  // 客户后来要求所有浏览器都填完了导出当前条, 不再将所有数据导出到一个 excel
                  exportXlsx = appController.get('exportXlsx');
                  // await exportXlsx.actions.doExport.call(exportXlsx);

                  fileName = this.formatDate(true) + '/' + this.get('formattedInvestigateCount');
                  _context3.next = 11;
                  return exportXlsx.actions.doExportLast.call(exportXlsx, fileName);

                case 11:
                  this.set('disableConfirm', false);
                  this.set('showSaveTip', true);
                  // appController.transitionToRoute({ queryParams: { s: 1, tip: '', unclosable: '' }});

                case 13:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function showSaveDialog() {
          return _ref5.apply(this, arguments);
        }

        return showSaveDialog;
      }()
    }, {
      key: 'showSaveConfirmDialog',
      value: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.set('showSaveTip', false);
                  this.set('showSaveConfirm', true);

                case 2:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function showSaveConfirmDialog() {
          return _ref6.apply(this, arguments);
        }

        return showSaveConfirmDialog;
      }()
    }, {
      key: 'saveConfirmed',
      value: function saveConfirmed() {
        this.set('showSaveConfirm', false);
        this.set('appController.unclosable', true);
        this.set('appController.tip', 'The experiment is over, thank you for your cooperation.');
        this.set('showNextStepBtn', true);
      }
    }, {
      key: 'startNewExperiment',
      value: function startNewExperiment() {
        var appController = this.get('appController');
        this.set('showNextStepBtn', false);
        appController.transitionToRoute('amazon', { queryParams: { g: '5_6', tip: '', unclosable: '' } });
      }
    }, {
      key: 'Quit',
      value: function Quit() {
        var browserName = navigator.appName;
        if (browserName == "Netscape") {
          window.location.href = "about:blank"; //关键是这句话
          window.close();
        } else if (browserName == "Microsoft Internet Explorer") {
          window.opener = null;
          window.open('', '_self');
          window.close();
        }
      }
    }, {
      key: 'updateStorage',
      value: function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var survey1, survey2, survey3, survey4, goods, sv1, sv2, sv3, sv4, svUserFills, formattedInvestigateCount, meta, data;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  survey1 = JSON.parse(myLocalStorage.getItem('survey1'));
                  survey2 = JSON.parse(myLocalStorage.getItem('survey2'));
                  survey3 = JSON.parse(myLocalStorage.getItem('survey3'));
                  survey4 = JSON.parse(myLocalStorage.getItem('survey4'));
                  goods = JSON.parse(myLocalStorage.getItem('goods'));
                  sv1 = { title: survey1.title, items: this.formatSurveyData(survey1.items, 1) };
                  sv2 = { title: survey2.title, items: this.formatSurveyData(survey2.items, 2) };
                  sv3 = { title: survey3.title, items: this.formatSurveyData(survey3.items, 3) };
                  sv4 = { title: survey4.title, items: this.formatSurveyData(survey4.items, 4) };
                  _context5.prev = 9;
                  _context5.t0 = JSON;
                  _context5.next = 13;
                  return getItem('svUserFills');

                case 13:
                  _context5.t1 = _context5.sent;

                  if (_context5.t1) {
                    _context5.next = 16;
                    break;
                  }

                  _context5.t1 = '[]';

                case 16:
                  _context5.t2 = _context5.t1;
                  svUserFills = _context5.t0.parse.call(_context5.t0, _context5.t2);
                  formattedInvestigateCount = this.get('formattedInvestigateCount');
                  meta = { date: new Date().toLocaleString(), 'No.': formattedInvestigateCount };
                  data = { sv1: sv1, sv2: sv2, sv3: sv3, sv4: sv4, goods: goods, meta: meta };

                  Ember.$.post('http://mlo.kim:8888/surveies?t=' + Date.now(), data).then(function (result) {
                    return console.log(result);
                  }, function (reason) {
                    return console.error(reason);
                  });
                  window.investigateCount = window.investigateCount || 0;
                  window.investigateCount += 1;
                  svUserFills.pushObject(data);
                  _context5.next = 27;
                  return setItem('svUserFills', JSON.stringify(svUserFills));

                case 27:
                  _context5.next = 31;
                  break;

                case 29:
                  _context5.prev = 29;
                  _context5.t3 = _context5['catch'](9);

                case 31:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[9, 29]]);
        }));

        function updateStorage() {
          return _ref7.apply(this, arguments);
        }

        return updateStorage;
      }()
    }, {
      key: 'formatSurveyData',
      value: function formatSurveyData() {
        var _this3 = this;

        var svItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var No = arguments[1];

        svItem.forEach(function (item, index) {
          if (item.type === 'radio') {
            // radio
            item.result = item.opts.findBy('isChecked', true).optText;
            if ((typeof No === 'undefined' ? 'undefined' : _typeof(No)) !== undefined) {
              item.desc = No + '.' + (index + 1) + '\u3001' + item.desc;
            }
            delete item.opts;
          } else if (item.type === 'group') {
            // group
            _this3.formatSurveyData(item.items, No);
          }
        });
        return svItem;
      }
    }, {
      key: 'activeSurvey',
      get: function get() {
        this.getinvestigateCount();
        var s = this.getWithDefault('s', 1);
        return this.get('survey' + s);
      }
    }, {
      key: 'formattedInvestigateCount',
      get: function get() {
        var investigateCount = this.getWithDefault('investigateCount', 1);
        return String(investigateCount).padStart(4, '0');
      }
    }, {
      key: 'investigateInfo',
      get: function get() {
        var date = this.formatDate();
        var formattedInvestigateCount = this.get('formattedInvestigateCount');
        return date + '/' + formattedInvestigateCount;
      }
    }]);

    return SurveyCompComponent;
  }(Ember.Component), (_applyDecoratedDescriptor(_class.prototype, 'activeSurvey', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'activeSurvey'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'formattedInvestigateCount', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'formattedInvestigateCount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'investigateInfo', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'investigateInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'surveySubmitAction1', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'surveySubmitAction1'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'surveySubmitAction2', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'surveySubmitAction2'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'surveySubmitAction3', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'surveySubmitAction3'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'surveySubmitAction4', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'surveySubmitAction4'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'submitSurvey', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'submitSurvey'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'nextPageDialogConfirm', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'nextPageDialogConfirm'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'submit', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'submit'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showSaveDialog', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'showSaveDialog'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showSaveConfirmDialog', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'showSaveConfirmDialog'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'saveConfirmed', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'saveConfirmed'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'startNewExperiment', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'startNewExperiment'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'Quit', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'Quit'), _class.prototype)), _class));
  exports.default = SurveyCompComponent;
});
define("amazon/pod/survey/survey-comp/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "root": "_root_1oqx04",
    "surveyBG": "_surveyBG_1oqx04",
    "surveyCompMain": "_surveyCompMain_1oqx04",
    "surveyHead": "_surveyHead_1oqx04",
    "surveyBody": "_surveyBody_1oqx04",
    "surveyItem": "_surveyItem_1oqx04",
    "error": "_error_1oqx04",
    "desc": "_desc_1oqx04",
    "surveyOpts": "_surveyOpts_1oqx04",
    "surveyOpt": "_surveyOpt_1oqx04",
    "largeOpts": "_largeOpts_1oqx04",
    "subItem": "_subItem_1oqx04",
    "surveyFooter": "_surveyFooter_1oqx04",
    "confirmFooter": "_confirmFooter_1oqx04",
    "investigateInfo": "_investigateInfo_1oqx04",
    "fixedBtnBox": "_fixedBtnBox_1oqx04",
    "show": "_show_1oqx04"
  };
});
define("amazon/pod/survey/survey-comp/surveys/survey.1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "Survey 1",
    items: [{
      "desc": "Gerder",
      "type": "radio",
      "opts": [{
        "optText": "Male"
      }, {
        "optText": "Female"
      }]
    }, {
      "desc": "How often do you shop online?",
      "type": "radio",
      "opts": [{
        "optText": "once two weeks"
      }, {
        "optText": "once a month"
      }, {
        "optText": "once several months"
      }, {
        "optText": "once a year"
      }, {
        "optText": "never"
      }]
    }, {
      "desc": "How often do you shop online from other countries?",
      "type": "radio",
      "opts": [{
        "optText": "once two weeks"
      }, {
        "optText": "once a month"
      }, {
        "optText": "once several months"
      }, {
        "optText": "once a year"
      }, {
        "optText": "never"
      }]
    }, {
      // "desc": "Please indicate how much you disagree or agree with each of the following statements.",
      // "type": "group",
      // "items": [{
      "desc": "People in higher positions should make most decisions without consulting people in lower positions.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "People in higher positions should not ask the opinions of people in lower positions too frequently.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "People in higher positions should avoid social interaction with people in lower positions. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "People in lower positions should not disagree with decisions by people in higher positions. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "People in higher positions should not delegate important tasks to people in lower positions.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "It is important to have instructions spelled out in detail so that I always know what I'm expected to do.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "It is important to closely follow instructions and procedures. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Rules and regulations are important because they inform me of what is expected of me. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Standardized work procedures are helpful. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Instructions for operations are important.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Individuals should sacrifice self-interest for the group. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Individuals should stick with the group even through difficulties. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Group welfare is more important than individual rewards.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Group success is more important than individual success. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Individuals should only pursue their goals after considering the welfare of the group. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Group loyalty should be encouraged even if individual goals suffer.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "It is important to careful manage money (Thrift). ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "It is important to go on resolutely in spite of opposition (Persistence).",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Personal steadiness and stability are important.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "It is important to make long-term planning. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Individuals should give up today's fun for success in the future.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Individuals should work hard for success in the future.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "It is more important for men to have a professional career than it is for women. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Men usually solve problems with logical analysis; women usually solve problems with intuition.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "Solving difficult problems usually requires an active, forcible approach, which is typical of men.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "There are some jobs that a man can always do better than a woman.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "I have some contacts with other consumers of amazon.com.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "I spend time in communicating with other consumers of amazon.com. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "I have communications with other consumers of amazon.com.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "The consumers of amazon.com do not take advantage of each other.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "The consumers of amazon.com have mutual trust.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "The consumers of amazon.com sincerely treat each other.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "I believe that consumers of amazon.com will help each other.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "I believe that other consumers of amazon.com will help me when I need.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "I will actively help other consumers of amazon.com.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "During shopping, I have similar interest with other consumers of amazom.com.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "During shopping, I have similar goals with other consumers of amazon.com. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "During shopping, I have similar values with other consumers of amazon.com.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
      // }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/surveys/survey.2.1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "Survey 2",
    items: [{
      // "desc": "Please indicate how much you disagree or agree with each of the following statements.",
      // "type": "group",
      // "items": [{
      "desc": "When I want to buy a cell phone, I have an expectation for searching for attribute-based reviews;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy cell phone, I have a brief in searching for attribute-based reviews; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy cell phone, I will pay more attention to attribute based reviews; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a cell phone, attribute-based reviews are more helpful for me to evaluate it; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a cell phone, attribute-based reviews are more valuable for me to make a decision;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "I think I have constructed a knowledge structure to evaluate a cell phone through attribute-based reviews",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a cell phone, I have an expectation for searching for experience-based reviews; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy cell phone, I have a brief in searching for experience -based reviews; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a cell phone, I will pay more attention to attribute based reviews; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a cell phone, experience -based reviews are more helpful for me to evaluate it;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a cell phone, experience-based reviews are more valuable for me to make a decision;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
      // }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/surveys/survey.2.2", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "Survey 3",
    items: [{
      // "desc": "Please indicate how much you disagree or agree with each of the following statements.",
      // "type": "group",
      // "items": [{
      "desc": "When I want to buy a clothing, I have an expectation for searching for experience -based reviews;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, I have a brief in searching for experience -based reviews; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, I will pay more attention to experience based reviews;  ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, experience -based reviews are more helpful for me to evaluate it;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, experience -based reviews are more valuable for me to make a decision;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "I think I have constructed a knowledge structure to evaluate a clothing through experience -based reviews",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, I have an expectation for searching for attribute-based reviews; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, I have a brief in searching for attribute-based reviews; ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, I will pay more attention to attribute based reviews;  ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, attribute-based reviews are more helpful for me to evaluate it;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "When I want to buy a clothing, attribute-based reviews are more valuable for me to make a decision;",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
      // }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/surveys/survey.2.3", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "Survey 4",
    items: [{
      // "desc": "Please indicate how much you disagree or agree with each of the following statements.",
      // "type": "group",
      // "items": [{
      "desc": "The quantity of the reviews released was large.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "The quantity of the reviews was enough to let me make decisions. ",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "The information from online reviews was accurate.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "The information from online reviews was relevant to my needs.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "The information from online reviews was of sufficient to make decisions.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
    }, {
      "desc": "The information from online reviews was based on facts.",
      "type": "radio",
      "opts": [{
        "optText": "Strongly Disagree"
      }, {
        "optText": "Disagree"
      }, {
        "optText": "Somewhat disagree"
      }, {
        "optText": "Neutral"
      }, {
        "optText": "Somewhat Agree"
      }, {
        "optText": "Agree"
      }, {
        "optText": "Strongly  Agree"
      }]
      // }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Gvf9ZKTt", "block": "{\"symbols\":[\"d\",\"d\",\"d\",\"sv\",\"svItem\",\"svItemIndex\",\"opt\",\"optIndex\",\"subItem\",\"subIndex\",\"opt\",\"optIndex\"],\"statements\":[[0,\"\\n\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyBG\"]]],null]]]],[8],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyCompMain\"]]],null]]]],[8],[0,\"\\n\"],[4,\"with\",[[22,[\"activeSurvey\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyHead\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"h1\"],[8],[0,\"\\n      \"],[1,[21,4,[\"title\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyBody\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,4,[\"items\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"data-desc\",[21,5,[\"desc\"]],null],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyItem\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"desc\"]]],null]]]],[8],[0,\"\\n          \"],[1,[20,\"s\"],false],[0,\".\"],[1,[26,\"add\",[1,[21,6,[]]],null],false],[0,\"、\"],[1,[21,5,[\"desc\"]],true],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"eq\",[[21,5,[\"type\"]],\"group\"],null]],null,{\"statements\":[[4,\"each\",[[21,5,[\"items\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[11,\"data-desc\",[21,9,[\"desc\"]],null],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"subItem\"]]],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"desc\"]]],null]]]],[8],[0,\"\\n              \"],[1,[26,\"add\",[1,[21,6,[]]],null],false],[0,\".\"],[1,[26,\"add\",[1,[21,10,[]]],null],false],[0,\" \"],[1,[21,9,[\"desc\"]],true],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"ul\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"surveyOpts\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,9,[\"opts\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"surveyOpt \",[26,\"if\",[[26,\"gte\",[[21,9,[\"opts\",\"length\"]],5],null],\"largeOpts\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n                  \"],[6,\"label\"],[11,\"for\",[21,9,[\"desc\"]],null],[8],[0,\"\\n                    \"],[1,[26,\"i-check\",null,[[\"type\",\"name\",\"checked\",\"value\",\"elementId\"],[[21,9,[\"type\"]],[21,9,[\"desc\"]],[21,11,[\"isChecked\"]],[21,11,[\"optText\"]],[26,\"concat\",[\"i-check\",[21,5,[\"type\"]],[21,10,[]],[21,12,[]]],null]]]],false],[0,\" \"],[1,[21,11,[\"optText\"]],false],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[11,12]},null],[0,\"            \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[9,10]},null]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"ul\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"surveyOpts\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,5,[\"opts\"]]],null,{\"statements\":[[0,\"              \"],[6,\"li\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"surveyOpt \",[26,\"if\",[[26,\"gte\",[[21,5,[\"opts\",\"length\"]],5],null],\"largeOpts\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n                \"],[6,\"label\"],[11,\"for\",[21,5,[\"desc\"]],null],[8],[0,\"\\n                  \"],[1,[26,\"i-check\",null,[[\"type\",\"name\",\"checked\",\"value\",\"elementId\"],[[21,5,[\"type\"]],[21,5,[\"desc\"]],[21,7,[\"isChecked\"]],[21,7,[\"optText\"]],[26,\"concat\",[\"i-check\",[21,5,[\"type\"]],[21,6,[]],[21,8,[]]],null]]]],false],[0,\" \"],[1,[21,7,[\"optText\"]],false],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[7,8]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[5,6]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyFooter\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"button\"],[11,\"disabled\",[20,\"disableConfirm\"],null],[10,\"class\",\"btn btn-primary\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"submitSurvey\",[22,[\"s\"]]]],[8],[0,\"submit\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[4,\"if\",[[26,\"eq\",[[22,[\"s\"]],2],null]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"investigateInfo\"]]],null]]]],[8],[0,\"\\n    \"],[1,[20,\"investigateInfo\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[22,[\"showNextPageDialog\"]]],null,{\"statements\":[[4,\"common-dialog\",null,[[\"title\"],[\"Tip\"]],{\"statements\":[[4,\"component\",[[21,3,[\"body\"]]],[[\"class\"],[\"text-center\"]],{\"statements\":[[0,\"      Next page?\\n\"]],\"parameters\":[]},null],[4,\"component\",[[21,3,[\"footer\"]]],[[\"class\"],[[26,\"concat\",[[26,\"unbound\",[[22,[\"__styles__\",\"confirmFooter\"]]],null]],null]]],{\"statements\":[[0,\"      \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[11,\"disabled\",[20,\"disableConfirm\"],null],[3,\"action\",[[21,0,[]],\"nextPageDialogConfirm\",[22,[\"activeGoodsNumber\"]]]],[8],[0,\"Confirm\"],[9],[0,\"\\n      \"],[6,\"button\"],[10,\"class\",\"btn\"],[3,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"showNextPageDialog\"]]],null],[26,\"not\",[[22,[\"showNextPageDialog\"]]],null]]],[8],[0,\"Cancel\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[22,[\"showSaveTip\"]]],null,{\"statements\":[[4,\"common-dialog\",null,[[\"title\"],[\"Tip\"]],{\"statements\":[[4,\"component\",[[21,2,[\"body\"]]],[[\"class\"],[\"text-center\"]],{\"statements\":[[0,\"    The current experiment has been completed, please save the data file below the window.\\n    \"],[2,\"The current experiment number is {{formattedInvestigateCount}}，Whether to conduct the investigate into the next one？\"],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[21,2,[\"footer\"]]],[[\"class\"],[[26,\"concat\",[[26,\"unbound\",[[22,[\"__styles__\",\"confirmFooter\"]]],null]],null]]],{\"statements\":[[0,\"    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[11,\"disabled\",[20,\"disableConfirm\"],null],[3,\"action\",[[21,0,[]],\"showSaveConfirmDialog\"]],[8],[0,\"Confirm\"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn\"],[3,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"showSaveTip\"]]],null],[26,\"not\",[[22,[\"showSaveTip\"]]],null]]],[8],[0,\"Cancel\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[22,[\"showSaveConfirm\"]]],null,{\"statements\":[[4,\"common-dialog\",null,[[\"title\"],[\"Tip\"]],{\"statements\":[[4,\"component\",[[21,1,[\"body\"]]],[[\"class\"],[\"text-center\"]],{\"statements\":[[0,\"    Have you saved the experiment data file?\\n\"]],\"parameters\":[]},null],[4,\"component\",[[21,1,[\"footer\"]]],[[\"class\"],[[26,\"concat\",[[26,\"unbound\",[[22,[\"__styles__\",\"confirmFooter\"]]],null]],null]]],{\"statements\":[[0,\"    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[11,\"disabled\",[20,\"disableConfirm\"],null],[3,\"action\",[[21,0,[]],\"saveConfirmed\",[22,[\"activeGoodsNumber\"]]]],[8],[0,\"Confirm\"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn\"],[3,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"showSaveConfirm\"]]],null],[26,\"not\",[[22,[\"showSaveConfirm\"]]],null]]],[8],[0,\"Cancel\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"\\n\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"fixedBtnBox \",[26,\"if\",[[22,[\"showNextStepBtn\"]],\"show\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n     \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[11,\"disabled\",[20,\"disableConfirm\"],null],[3,\"action\",[[21,0,[]],\"startNewExperiment\"]],[8],[0,\"Start new experiment\"],[9],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn\"],[3,\"action\",[[21,0,[]],\"Quit\"]],[8],[0,\"Quit\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/survey/survey-comp/template.hbs" } });
});
define("amazon/pod/survey/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uWtlomhB", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyContainer\"]]],null]]]],[8],[0,\"\\n  \"],[1,[26,\"survey/survey-comp\",null,[[\"s\"],[[22,[\"s\"]]]]],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/survey/template.hbs" } });
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


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
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
define('amazon/services/modal-dialog', ['exports', 'amazon/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed,
      Service = Ember.Service;


  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
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
define("amazon/utils/export-xlsx", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function downloadExl(json) {
    var heads = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var fileName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "导出数据";
    var bookType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "xlsx";

    var tmpDown; //导出的二进制对象
    // var heads = []; //获取keys
    json.unshift({});

    if (heads && heads.length) {
      heads.forEach(function (el) {
        return json[0][el] = el;
      });
    } else {
      var tmp = json[0];
      json.unshift({});
      for (var k in tmp) {
        heads.push(k);
        json[0][k] = k;
      }
    }

    var tmpdata = []; //用来保存转换好的json
    json.map(function (v, i) {
      return heads.map(function (k, j) {
        return _extends({}, {
          v: v[k],
          position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
        });
      });
    }).reduce(function (prev, next) {
      return prev.concat(next);
    }).forEach(function (v) {
      return tmpdata[v.position] = {
        v: v.v
      };
    });
    var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
    var tmpWB = {
      SheetNames: ["mySheet"], //保存的表标题
      Sheets: {
        mySheet: _extends({}, tmpdata, //内容
        {
          "!ref": outputPos[0] + ":" + outputPos[outputPos.length - 1] //设置填充区域
        })
      }
    };
    tmpDown = new Blob([s2ab(window.XLSX.write(tmpWB, { bookType: bookType, bookSST: false, type: "binary" //这里的数据是用来定义导出的格式类型
    }))], {
      type: ""
    }); //创建二进制对象写入转换好的字节流

    if ("msSaveOrOpenBlob" in navigator) {
      // IE 中
      window.navigator.msSaveOrOpenBlob(tmpDown, fileName + "." + bookType);
    } else {
      // Chrome 或其它
      var href = URL.createObjectURL(tmpDown); //创建对象超链接
      var url = document.createElement("a");
      url.download = fileName + "." + bookType;
      url.href = href;
      url.click();
      // document.getElementById("export-link").href = href; //绑定a标签
      // document.getElementById("export-link").click(); //模拟点击实现下载
      setTimeout(function () {
        //延时释放
        URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
      }, 100);
    }
  }

  function s2ab(s) {
    //字符串转字符流
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xff;
    }return buf;
  }
  // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
  function getCharCol(n) {
    var s = "",
        m = 0;
    while (n > 0) {
      m = n % 26 + 1;
      s = String.fromCharCode(m + 64) + s;
      n = (n - m) / 26;
    }
    return s;
  }

  exports.downloadExl = downloadExl;
});
define("amazon/utils/local-storage", [], function () {
  "use strict";

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  // 由于代码要在本地 ie 中运行， ie 的 localStorage 等需要在服务器环境的页面运行，而之前的开发阶段本地启动了开发服务器，未发现该问题，打包过后直接运行才发现。
  // 由于不做永久存储， 因此此代码作为临时补丁方案
  var data = {};

  var MyLocalStorage = function () {
    function MyLocalStorage() {
      _classCallCheck(this, MyLocalStorage);
    }

    _createClass(MyLocalStorage, [{
      key: "getItem",
      value: function getItem(name) {
        return data[name];
      }
    }, {
      key: "setItem",
      value: function setItem(k, v) {
        data[k] = v;
      }
    }, {
      key: "clear",
      value: function clear() {
        data = {};
      }
    }]);

    return MyLocalStorage;
  }();

  window.myLocalStorage =
  // window.localStorage ||
  new MyLocalStorage();
});
define('amazon/utils/util', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.scrollTo = scrollTo;
    exports.wait = wait;
    function scrollTo(el) {
        el = Ember.$(el);
        if (el.length) {
            window.scrollTo(0, el.offset().top - 150);
        }
    }
    function wait(time, data) {
        return new Promise(function (res) {
            return setTimeout(res.bind({}, data), time);
        });
    }
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
  require("amazon/app")["default"].create({"name":"amazon","version":"0.0.0+777eb4fa"});
}
//# sourceMappingURL=amazon.map
