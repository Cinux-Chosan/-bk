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

  if (isIE && !window.location.host) {
    // 通过本地文件方式在 IE 中打开
    window.localforage = myLocalStorage;
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
      title: "YTD Mens 100% Cotton Casual Slim Fit Long Sleeve Button Down Printed Dress Shirts",
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
      title: "LOCALMODE Men's 100% Cotton Long Sleeve Plaid Slim Fit Button Down Dress Shirt ",
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
      title: "Angashion Women Hoodies-Tops- Floral Printed Long Sleeve Pocket Drawstring Sweatshirt with Pocket",
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
      title: "Angashion Women's Dresses-Summer Floral Bohemian Spaghetti Strap Button Down Swing Midi Dress with Pockets    ",
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
      title: "Apple iPhone X, GSM Unlocked 5.8\", 256 GB - Space Gray",
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
      title: "Apple iPhone X, GSM Unlocked 5.8\", 256 GB - Space Gray",
      details: ["Super Speed Dual Pixel Camera ", "Infinity Display: edge-to-edge immersive screen, enhancing your entertainment experience*", "IP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free***", "Internal Memory 64 GB. Expandable Storage up to 400GB****", "Fast Wireless Charging: Avoid the wires and power up quickly by placing your phone on a Fast Wireless Charger.***** "],
      opts: [{
        cover: "img/amazon/phone_2/1_1.jpg",
        optDesc: "Coral Blue",
        title: "Samsung Galaxy S9 Unlocked Smartphone - Coral Blue - US Warranty",
        thumbnailList: [{ img: "img/amazon/phone_2/1_1.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_2.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_3.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_4.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_5.jpg", optDesc: "" }, { img: "img/amazon/phone_2/1_6.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/phone_2/2_1.jpg",
        optDesc: "Lilac Purple",
        title: "Samsung Galaxy S9 Unlocked Smartphone - Lilac Purple - US Warranty ",
        details: ["Super Speed Dual Pixel Camera ", "Infinity Display: edge-to-edge immersive screen, enhancing your entertainment experience*", "IP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free***", "Internal Memory 64 GB. Expandable Storage up to 400GB. Video Recording Resolution : UHD 4K (3840 x 2160)@60fps ", "Fast Wireless Charging: Avoid the wires and power up quickly by placing your phone on a Fast Wireless Charger.***** "],
        thumbnailList: [{ img: "img/amazon/phone_2/2_1.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_2.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_3.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_4.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_5.jpg", optDesc: "" }, { img: "img/amazon/phone_2/2_6.jpg", optDesc: "" }]
      }, {
        cover: "img/amazon/phone_2/2_1.jpg",
        optDesc: "Midnight Black",
        title: "Samsung Galaxy S9 Unlocked Smartphone - Midnight Black - US Warranty ",
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
  exports.default = Ember.HTMLBars.template({ "id": "Q7b/ZZxn", "block": "{\"symbols\":[\"goods\",\"review\",\"experienceRvw\",\"qualityRvw\",\"review\",\"detail\",\"info\",\"detail\",\"opt\",\"info\",\"thumbnail\",\"thumbnailIndex\"],\"statements\":[[4,\"with\",[[22,[\"activeGoods\"]]],null,{\"statements\":[[6,\"section\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"section1\"]]],null]]]],[8],[0,\"\\n  \"],[6,\"header\"],[8],[0,\"Overall Reviews\"],[9],[0,\"\\n  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"left\"]]],null]]]],[8],[0,\"\\n\"],[4,\"with\",[[21,1,[\"goodsInfo\"]]],null,{\"statements\":[[0,\"    \"],[6,\"ul\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"thumbnailList\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"activeOpt\",\"thumbnailList\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"thumbnail\"]]],null]]]],[3,\"action\",[[21,0,[]],\"setThumbnailIndex\",[21,12,[]]],[[\"on\"],[\"mouseEnter\"]]],[8],[0,\"\\n        \"],[6,\"img\"],[11,\"src\",[21,11,[\"img\"]],null],[10,\"alt\",\"\"],[8],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[11,12]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"preview\"]]],null]]]],[8],[0,\"\\n      \"],[1,[26,\"log\",[[22,[\"activeThumbnail\"]]],null],false],[0,\"\\n      \"],[6,\"img\"],[11,\"src\",[22,[\"activeThumbnail\",\"img\"]],null],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"previewImg\"]]],null]]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[10]},null],[0,\"  \"],[9],[0,\"\\n\\n  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"right\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"rRight\"]]],null]]]],[8],[0,\"\\n      \"],[6,\"img\"],[10,\"src\",\"img/amazon/share.png\"],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"shareImg\"]]],null]]]],[8],[9],[0,\"\\n      \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"addToCartContainer\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"button\"],[11,\"class\",[27,[\"btn \",[26,\"unbound\",[[22,[\"__styles__\",\"addToCartBtn\"]]],null]]]],[3,\"action\",[[21,0,[]],[22,[\"onAdding2Cart\"]]]],[8],[0,\"\\n          \"],[6,\"img\"],[10,\"src\",\"img/amazon/icon_cart.png\"],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"cartIcon\"]]],null]]]],[8],[9],[0,\" Add To Cart\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"rLeft\"]]],null]]]],[8],[0,\"\\n\"],[4,\"with\",[[21,1,[\"goodsInfo\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"goodsTitle\"]]],null]]]],[8],[0,\"\\n        \"],[1,[26,\"or\",[[22,[\"activeOpt\",\"title\"]],[21,7,[\"title\"]]],null],false],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"dl\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"goodsOpts\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"dt\"],[8],[0,\"\\n          \"],[6,\"b\"],[8],[0,\"Color\"],[9],[0,\": \"],[1,[22,[\"activeOpt\",\"optDesc\"]],false],[9],[0,\"\\n\"],[4,\"each\",[[21,7,[\"opts\"]]],null,{\"statements\":[[0,\"        \"],[6,\"dd\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"thumbnail \",[26,\"if\",[[26,\"eq\",[[21,9,[]],[22,[\"activeOpt\"]]],null],\"active\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[3,\"action\",[[21,0,[]],\"setActiveOpt\",[21,9,[]]],[[\"on\"],[\"mouseEnter\"]]],[8],[0,\"\\n          \"],[6,\"img\"],[11,\"src\",[21,9,[\"thumbnailList\",\"firstObject\",\"img\"]],null],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"      \"],[9],[0,\"\\n      \"],[6,\"ul\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"goodsDetails\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[26,\"or\",[[22,[\"activeOpt\",\"details\"]],[21,7,[\"details\"]]],null]],null,{\"statements\":[[0,\"        \"],[6,\"li\"],[8],[0,\"\\n          \"],[1,[21,8,[]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"      \"],[9],[0,\"\\n      \"]],\"parameters\":[7]},null],[0,\" \"],[4,\"with\",[[21,1,[\"reviewData\"]]],null,{\"statements\":[[0,\"\\n      \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"review\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewsSum\"]]],null]]]],[8],[0,\"\\n          \"],[6,\"h2\"],[8],[0,\"Customer Reviews\"],[9],[0,\"\\n          \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"imgAndCount\"]]],null]]]],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"img/amazon/stars_4.5.jpg\"],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewSumImg\"]]],null]]]],[8],[9],[0,\"\\n            \"],[6,\"b\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewSumCount\"]]],null]]]],[8],[1,[21,5,[\"total\"]],false],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"p\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewSumDesc\"]]],null]]]],[8],[0,\"4.7 out of 5 stars\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"ul\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewDetailList\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,5,[\"details\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[8],[0,\"\\n            \"],[1,[21,6,[\"label\"]],false],[0,\" \"],[1,[26,\"progress-bar\",null,[[\"ratio\",\"class\"],[[21,6,[\"ratio\"]],[26,\"concat\",[[26,\"unbound\",[[22,[\"__styles__\",\"progressBar\"]]],null]],null]]]],false],[0,\" \"],[1,[26,\"to-percent\",[[21,6,[\"ratio\"]]],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[6,\"section\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"section2\"]]],null]]]],[8],[0,\"\\n\"],[4,\"with\",[[21,1,[\"reviewData\"]]],null,{\"statements\":[[0,\"  \"],[6,\"header\"],[8],[0,\"Details of review content\"],[9],[0,\"\\n  \"],[6,\"section\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"reviewDetails\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"rvwLeft\"]]],null]]]],[8],[0,\"\\n      \"],[4,\"each\",[[21,2,[\"reviewQuality\"]]],null,{\"statements\":[[0,\" \"],[1,[26,\"amazon/user-review\",null,[[\"reviewData\"],[[21,4,[]]]]],false],[0,\" \"]],\"parameters\":[4]},null],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"rvwRight\"]]],null]]]],[8],[0,\"\\n      \"],[4,\"each\",[[21,2,[\"reviewExperience\"]]],null,{\"statements\":[[0,\" \"],[1,[26,\"amazon/user-review\",null,[[\"reviewData\"],[[21,3,[]]]]],false],[0,\" \"]],\"parameters\":[3]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/amazon/amazon-comp/template.hbs" } });
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

  var _dec, _desc, _value, _class;

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

  var SurveyController = (_dec = (0, _object.computed)('g'), (_class = function (_EmberController) {
    _inherits(SurveyController, _EmberController);

    function SurveyController() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SurveyController);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyController.__proto__ || Object.getPrototypeOf(SurveyController)).call.apply(_ref, [this].concat(args))), _this), _this.queryParams = ['g'], _temp), _possibleConstructorReturn(_this, _ret);
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
        myLocalStorage.setItem('goods', JSON.stringify(goodsList));
      }
    }, {
      key: 'gList',
      get: function get() {
        var gList = this.getWithDefault('g', '1_2');
        return gList.split('_');
      }
    }]);

    return SurveyController;
  }(Ember.Controller), (_applyDecoratedDescriptor(_class.prototype, 'gList', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'gList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onAdding2Cart', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'onAdding2Cart'), _class.prototype)), _class));
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
    "amazonContainer": "_amazonContainer_1bwi68"
  };
});
define("amazon/pod/amazon/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pN19hf8c", "block": "{\"symbols\":[\"g\"],\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"amazonContainer\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"gList\"]]],null,{\"statements\":[[0,\"    \"],[1,[26,\"amazon/amazon-comp\",null,[[\"goods\",\"onAdding2Cart\"],[[21,1,[]],[26,\"action\",[[21,0,[]],\"onAdding2Cart\",[21,1,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[9],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/amazon/template.hbs" } });
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
    "review": "_review_jyi9vx",
    "date": "_date_jyi9vx"
  };
});
define("amazon/pod/amazon/user-review/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7TJWXlsc", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"userInfo\"]]],null]]]],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[22,[\"reviewData\",\"userInfo\",\"avatar\"]],null],[10,\"alt\",\"\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"avatar\"]]],null]]]],[8],[9],[0,\" \"],[1,[22,[\"reviewData\",\"userInfo\",\"userName\"]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"review\"]]],null]]]],[8],[0,\"\\n  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"date\"]]],null]]]],[8],[0,\"\\n    \"],[1,[22,[\"reviewData\",\"date\"]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"p\"],[8],[0,\"\\n    \"],[1,[22,[\"reviewData\",\"reviewTxt\"]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/amazon/user-review/template.hbs" } });
});
define('amazon/pod/application/controller', ['exports', '@ember-decorators/object'], function (exports, _object) {
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

  var ApplicationController = (_class = function (_EmberController) {
    _inherits(ApplicationController, _EmberController);

    function ApplicationController() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ApplicationController);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApplicationController.__proto__ || Object.getPrototypeOf(ApplicationController)).call.apply(_ref, [this].concat(args))), _this), _this.queryParams = ['export', 'tip'], _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ApplicationController, [{
      key: 'closeExport',
      value: function closeExport() {
        this.set('tip', '');
        this.set('export', '');
      }
    }]);

    return ApplicationController;
  }(Ember.Controller), (_applyDecoratedDescriptor(_class.prototype, 'closeExport', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'closeExport'), _class.prototype)), _class);
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
      value: function redirect(model, trans) {
        this.replaceWith("survey", {
          queryParams: {
            s: 1
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
    "showTip": "_showTip_1t2jyk"
  };
});
define("amazon/pod/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LhlgIyjw", "block": "{\"symbols\":[\"exportXlsx\"],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"exportMask \",[26,\"if\",[[26,\"or\",[[22,[\"export\"]],[22,[\"tip\"]]],null],\"showMask\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[3,\"action\",[[21,0,[]],\"closeExport\"]],[8],[0,\" \"],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"tip \",[26,\"if\",[[22,[\"tip\"]],\"showTip\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n\"],[1,[20,\"tip\"],false],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[4,\"export-xlsx\",null,[[\"elementId\",\"class\"],[\"btn-export-xlsx\",[26,\"concat\",[[26,\"if\",[[22,[\"export\"]],[26,\"local-class\",[\"showExportBtn\"],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]],null],\" \",[26,\"unbound\",[[22,[\"__styles__\",\"initExportBtn\"]]],null]],null]]],{\"statements\":[[0,\"  \"],[1,[26,\"set\",[[21,0,[]],\"exportXlsx\",[21,1,[]]],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/application/template.hbs" } });
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
      key: 'doExport',
      value: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var svUserFills, xlsData, heads, i, svResultItem, item;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  debugger;
                  _context2.t0 = JSON;
                  _context2.next = 4;
                  return getItem('svUserFills');

                case 4:
                  _context2.t1 = _context2.sent;

                  if (_context2.t1) {
                    _context2.next = 7;
                    break;
                  }

                  _context2.t1 = false;

                case 7:
                  _context2.t2 = _context2.t1;
                  svUserFills = _context2.t0.parse.call(_context2.t0, _context2.t2);

                  if (!svUserFills) {
                    _context2.next = 38;
                    break;
                  }

                  xlsData = [];
                  heads = {};
                  i = 0;

                case 13:
                  if (!(i < svUserFills.length)) {
                    _context2.next = 35;
                    break;
                  }

                  svResultItem = svUserFills[i];
                  item = {};
                  _context2.prev = 16;
                  _context2.next = 19;
                  return this.buildXslData(svResultItem.sv1.items, item);

                case 19:
                  _context2.next = 21;
                  return this.buildXslData(svResultItem.sv2.items, item);

                case 21:
                  _context2.next = 23;
                  return this.buildXslData(svResultItem.sv3.items, item);

                case 23:
                  _context2.next = 25;
                  return this.buildXslData(svResultItem.sv4.items, item);

                case 25:
                  heads = _extends({}, heads, item, svResultItem.goods);
                  xlsData.push(_extends({}, item, svResultItem.goods));
                  _context2.next = 32;
                  break;

                case 29:
                  _context2.prev = 29;
                  _context2.t3 = _context2['catch'](16);

                  console.log(_context2.t3);

                case 32:
                  i++;
                  _context2.next = 13;
                  break;

                case 35:
                  try {
                    (0, _exportXlsx.downloadExl)(xlsData, Object.keys(heads), '问卷记录');
                  } catch (error) {
                    console.log(error);
                  }

                  _context2.next = 39;
                  break;

                case 38:
                  alert('没有数据');

                case 39:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[16, 29]]);
        }));

        function doExport() {
          return _ref3.apply(this, arguments);
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
  }(Ember.Component), (_applyDecoratedDescriptor(_class.prototype, 'doExport', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'doExport'), _class.prototype)), _class);
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
          window.myLocalStorage.clear();
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
define('amazon/pod/survey/survey-comp/component', ['exports', '@ember-decorators/object', 'amazon/pod/survey/survey-comp/surveys/survey.1', 'amazon/pod/survey/survey-comp/surveys/survey.2.1', 'amazon/pod/survey/survey-comp/surveys/survey.2.2', 'amazon/pod/survey/survey-comp/surveys/survey.2.3', 'amazon/utils/util', 'amazon/pod/survey/survey-comp/styles'], function (exports, _object, _survey3, _survey4, _survey5, _survey6, _util, _styles) {
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

  var _dec, _desc, _value, _class;

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

  var SurveyCompComponent = (_dec = (0, _object.computed)('s'), (_class = function (_EmberComponent) {
    _inherits(SurveyCompComponent, _EmberComponent);

    function SurveyCompComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SurveyCompComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SurveyCompComponent.__proto__ || Object.getPrototypeOf(SurveyCompComponent)).call.apply(_ref, [this].concat(args))), _this), _this.survey1 = Ember.copy(_survey3.default, true), _this.survey2 = Ember.copy(_survey4.default, true), _this.survey3 = Ember.copy(_survey5.default, true), _this.survey4 = Ember.copy(_survey6.default, true), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SurveyCompComponent, [{
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
        if (+random().toFixed()) {
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

        if (myLocalStorage.getItem('survey3')) {
          // 如果 survey3 有记录， 则证明衣服问卷已经填写， 则跳最后一个问卷
          appController.transitionToRoute({ queryParams: { s: 4 } });
        } else {
          // 否则跳转到衣服
          var _survey2 = JSON.parse(myLocalStorage.getItem('survey1'));
          var genderSelected = _survey2.items.findBy('desc', 'Gerder').opts.findBy('isChecked', true);
          if (genderSelected.optText === 'Male') {
            appController.transitionToRoute('amazon', { queryParams: { g: '1_2' } });
          } else {
            appController.transitionToRoute('amazon', { queryParams: { g: '3_4' } });
          }
        }
      }
    }, {
      key: 'surveySubmitAction3',
      value: function surveySubmitAction3() {
        var appController = this.get('appController');
        if (myLocalStorage.getItem('survey2')) {
          // 如果 survey2 有记录， 则证明手机问卷已经填写， 则跳最后一个问卷
          appController.transitionToRoute({ queryParams: { s: 4 } });
        } else {
          // 否则跳手机购买页面
          appController.transitionToRoute('amazon', { queryParams: { g: '5_6' } });
        }
      }
    }, {
      key: 'surveySubmitAction4',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var appController, _window$env, isIE, isLocalFile, exportXlsx;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // 存储数据到 indexDB 和 excel
                  appController = this.get('appController');
                  _context.next = 3;
                  return this.updateStorage();

                case 3:
                  _window$env = window.env, isIE = _window$env.isIE, isLocalFile = _window$env.isLocalFile;

                  debugger;

                  if (!(isIE && isLocalFile)) {
                    _context.next = 9;
                    break;
                  }

                  // appController.get('exportXlsx').send('doExport');
                  exportXlsx = appController.get('exportXlsx');
                  _context.next = 9;
                  return exportXlsx.actions.doExport.call(exportXlsx);

                case 9:
                  appController.transitionToRoute({ queryParams: { s: 1 } });

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function surveySubmitAction4() {
          return _ref2.apply(this, arguments);
        }

        return surveySubmitAction4;
      }()
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
      key: 'updateStorage',
      value: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var survey1, survey2, survey3, survey4, goods, sv1, sv2, sv3, sv4, svUserFills;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  survey1 = JSON.parse(myLocalStorage.getItem('survey1'));
                  survey2 = JSON.parse(myLocalStorage.getItem('survey2'));
                  survey3 = JSON.parse(myLocalStorage.getItem('survey3'));
                  survey4 = JSON.parse(myLocalStorage.getItem('survey4'));
                  goods = JSON.parse(myLocalStorage.getItem('goods'));
                  sv1 = { title: survey1.title, items: this.formatSurveyData(survey1.items) };
                  sv2 = { title: survey2.title, items: this.formatSurveyData(survey2.items) };
                  sv3 = { title: survey3.title, items: this.formatSurveyData(survey3.items) };
                  sv4 = { title: survey4.title, items: this.formatSurveyData(survey4.items) };
                  _context2.prev = 9;
                  _context2.t0 = JSON;
                  _context2.next = 13;
                  return getItem('svUserFills');

                case 13:
                  _context2.t1 = _context2.sent;

                  if (_context2.t1) {
                    _context2.next = 16;
                    break;
                  }

                  _context2.t1 = '[]';

                case 16:
                  _context2.t2 = _context2.t1;
                  svUserFills = _context2.t0.parse.call(_context2.t0, _context2.t2);

                  svUserFills.pushObject({ sv1: sv1, sv2: sv2, sv3: sv3, sv4: sv4, goods: goods });
                  _context2.next = 21;
                  return setItem('svUserFills', JSON.stringify(svUserFills));

                case 21:
                  _context2.next = 25;
                  break;

                case 23:
                  _context2.prev = 23;
                  _context2.t3 = _context2['catch'](9);

                case 25:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[9, 23]]);
        }));

        function updateStorage() {
          return _ref3.apply(this, arguments);
        }

        return updateStorage;
      }()
    }, {
      key: 'formatSurveyData',
      value: function formatSurveyData() {
        var _this3 = this;

        var svItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        svItem.forEach(function (item) {
          if (item.type === 'radio') {
            // radio
            item.result = item.opts.findBy('isChecked', true).optText;
            delete item.opts;
          } else if (item.type === 'group') {
            // group
            _this3.formatSurveyData(item.items);
          }
        });
        return svItem;
      }
    }, {
      key: 'activeSurvey',
      get: function get() {
        var s = this.getWithDefault('s', 1);
        return this.get('survey' + s);
      }
    }]);

    return SurveyCompComponent;
  }(Ember.Component), (_applyDecoratedDescriptor(_class.prototype, 'activeSurvey', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'activeSurvey'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'surveySubmitAction1', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'surveySubmitAction1'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'surveySubmitAction2', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'surveySubmitAction2'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'surveySubmitAction3', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'surveySubmitAction3'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'surveySubmitAction4', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'surveySubmitAction4'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'submit', [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, 'submit'), _class.prototype)), _class));
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
    "surveyFooter": "_surveyFooter_1oqx04"
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
      "desc": "Age",
      "type": "radio",
      "value": "",
      "opts": [{
        "optText": " < 18"
      }, {
        "optText": " 18 ~ 20"
      }, {
        "optText": " > 20"
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
      "desc": "Please indicate how much you disagree or agree with each of the following statements.",
      "type": "group",
      "items": [{
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
    title: "Survey 2",
    items: [{
      "desc": "Please indicate how much you disagree or agree with each of the following statements.",
      "type": "group",
      "items": [{
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
    title: "Survey 3",
    items: [{
      "desc": "Please indicate how much you disagree or agree with each of the following statements.",
      "type": "group",
      "items": [{
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
    title: "Survey 4",
    items: [{
      "desc": "Please indicate how much you disagree or agree with each of the following statements.",
      "type": "group",
      "items": [{
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
      }]
    }]
  };
});
define("amazon/pod/survey/survey-comp/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0u8jMo7U", "block": "{\"symbols\":[\"sv\",\"svItem\",\"svItemIndex\",\"opt\",\"optIndex\",\"subItem\",\"subIndex\",\"opt\",\"optIndex\"],\"statements\":[[0,\"\\n\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyBG\"]]],null]]]],[8],[9],[0,\"\\n\"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyCompMain\"]]],null]]]],[8],[0,\"\\n\"],[4,\"with\",[[22,[\"activeSurvey\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyHead\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"h1\"],[8],[0,\"\\n      \"],[1,[21,1,[\"title\"]],false],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyBody\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,1,[\"items\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[11,\"data-desc\",[21,2,[\"desc\"]],null],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyItem\"]]],null]]]],[8],[0,\"\\n        \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"desc\"]]],null]]]],[8],[0,\"\\n          \"],[1,[26,\"add\",[1,[21,3,[]]],null],false],[0,\"、\"],[1,[21,2,[\"desc\"]],true],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"eq\",[[21,2,[\"type\"]],\"group\"],null]],null,{\"statements\":[[4,\"each\",[[21,2,[\"items\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[11,\"data-desc\",[21,6,[\"desc\"]],null],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"subItem\"]]],null]]]],[8],[0,\"\\n            \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"desc\"]]],null]]]],[8],[0,\"\\n              \"],[1,[26,\"add\",[1,[21,3,[]]],null],false],[0,\".\"],[1,[26,\"add\",[1,[21,7,[]]],null],false],[0,\" \"],[1,[21,6,[\"desc\"]],true],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"ul\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"surveyOpts\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,6,[\"opts\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"surveyOpt \",[26,\"if\",[[26,\"gte\",[[21,6,[\"opts\",\"length\"]],5],null],\"largeOpts\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n                  \"],[6,\"label\"],[11,\"for\",[21,6,[\"desc\"]],null],[8],[0,\"\\n                    \"],[1,[26,\"i-check\",null,[[\"type\",\"name\",\"checked\",\"value\",\"elementId\"],[[21,6,[\"type\"]],[21,6,[\"desc\"]],[21,8,[\"isChecked\"]],[21,8,[\"optText\"]],[26,\"concat\",[\"i-check\",[21,2,[\"type\"]],[21,7,[]],[21,9,[]]],null]]]],false],[0,\" \"],[1,[21,8,[\"optText\"]],false],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[8,9]},null],[0,\"            \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[6,7]},null]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[6,\"ul\"],[11,\"class\",[27,[\"clearfix \",[26,\"unbound\",[[22,[\"__styles__\",\"surveyOpts\"]]],null]]]],[8],[0,\"\\n\"],[4,\"each\",[[21,2,[\"opts\"]]],null,{\"statements\":[[0,\"              \"],[6,\"li\"],[11,\"class\",[27,[[26,\"local-class\",[[26,\"concat\",[\"surveyOpt \",[26,\"if\",[[26,\"gte\",[[21,2,[\"opts\",\"length\"]],5],null],\"largeOpts\"],null]],null]],[[\"from\"],[[26,\"unbound\",[[22,[\"__styles__\"]]],null]]]]]]],[8],[0,\"\\n                \"],[6,\"label\"],[11,\"for\",[21,2,[\"desc\"]],null],[8],[0,\"\\n                  \"],[1,[26,\"i-check\",null,[[\"type\",\"name\",\"checked\",\"value\",\"elementId\"],[[21,2,[\"type\"]],[21,2,[\"desc\"]],[21,4,[\"isChecked\"]],[21,4,[\"optText\"]],[26,\"concat\",[\"i-check\",[21,2,[\"type\"]],[21,3,[]],[21,5,[]]],null]]]],false],[0,\" \"],[1,[21,4,[\"optText\"]],false],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[4,5]},null],[0,\"          \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[2,3]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[6,\"div\"],[11,\"class\",[27,[[26,\"unbound\",[[22,[\"__styles__\",\"surveyFooter\"]]],null]]]],[8],[0,\"\\n    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary\"],[10,\"type\",\"submit\"],[3,\"action\",[[21,0,[]],\"submit\"]],[8],[0,\"submit\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "amazon/pod/survey/survey-comp/template.hbs" } });
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

    function scrollTo(el) {
        el = Ember.$(el);
        if (el.length) {
            window.scrollTo(0, el.offset().top - 150);
        }
    }
    exports.scrollTo = scrollTo;
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
  require("amazon/app")["default"].create({"name":"amazon","version":"0.0.0+8767cc9d"});
}
//# sourceMappingURL=amazon.map
