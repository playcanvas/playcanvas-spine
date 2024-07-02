/* Copyright 2015-2024 PlayCanvas Ltd */

var spine = (function (pc) {
	'use strict';

	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n.default = e;
		return Object.freeze(n);
	}

	var pc__namespace = /*#__PURE__*/_interopNamespaceDefault(pc);

	function _iterableToArrayLimit(r, l) {
	  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (null != t) {
	    var e,
	      n,
	      i,
	      u,
	      a = [],
	      f = !0,
	      o = !1;
	    try {
	      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
	    } catch (r) {
	      o = !0, n = r;
	    } finally {
	      try {
	        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
	      } finally {
	        if (o) throw n;
	      }
	    }
	    return a;
	  }
	}
	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof(o);
	}
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}
	function _defineProperty(obj, key, value) {
	  key = _toPropertyKey(key);
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	  return obj;
	}
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}
	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}
	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	  return _setPrototypeOf(o, p);
	}
	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	  return self;
	}
	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }
	  return _assertThisInitialized(self);
	}
	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }
	  return object;
	}
	function _get() {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get.bind();
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);
	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);
	      if (desc.get) {
	        return desc.get.call(arguments.length < 3 ? target : receiver);
	      }
	      return desc.value;
	    };
	  }
	  return _get.apply(this, arguments);
	}
	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}
	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}
	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	  return arr2;
	}
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _createForOfIteratorHelper(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike  ) {
	      if (it) o = it;
	      var i = 0;
	      var F = function () {};
	      return {
	        s: F,
	        n: function () {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function (e) {
	          throw e;
	        },
	        f: F
	      };
	    }
	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  var normalCompletion = true,
	    didErr = false,
	    err;
	  return {
	    s: function () {
	      it = it.call(o);
	    },
	    n: function () {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function (e) {
	      didErr = true;
	      err = e;
	    },
	    f: function () {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}
	function _toPrimitive(input, hint) {
	  if (typeof input !== "object" || input === null) return input;
	  var prim = input[Symbol.toPrimitive];
	  if (prim !== undefined) {
	    var res = prim.call(input, hint );
	    if (typeof res !== "object") return res;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return (String )(input);
	}
	function _toPropertyKey(arg) {
	  var key = _toPrimitive(arg, "string");
	  return typeof key === "symbol" ? key : String(key);
	}

	function _callSuper$f(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var IntSet = function () {
	  function IntSet() {
	    _classCallCheck(this, IntSet);
	    this.array = new Array();
	  }
	  return _createClass(IntSet, [{
	    key: "add",
	    value: function add(value) {
	      var contains = this.contains(value);
	      this.array[value | 0] = value | 0;
	      return !contains;
	    }
	  }, {
	    key: "contains",
	    value: function contains(value) {
	      return this.array[value | 0] != undefined;
	    }
	  }, {
	    key: "remove",
	    value: function remove(value) {
	      this.array[value | 0] = undefined;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.array.length = 0;
	    }
	  }]);
	}();
	var StringSet = function () {
	  function StringSet() {
	    _classCallCheck(this, StringSet);
	    this.entries = {};
	    this.size = 0;
	  }
	  return _createClass(StringSet, [{
	    key: "add",
	    value: function add(value) {
	      var contains = this.entries[value];
	      this.entries[value] = true;
	      if (!contains) {
	        this.size++;
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: "addAll",
	    value: function addAll(values) {
	      var oldSize = this.size;
	      for (var i = 0, n = values.length; i < n; i++) this.add(values[i]);
	      return oldSize != this.size;
	    }
	  }, {
	    key: "contains",
	    value: function contains(value) {
	      return this.entries[value];
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.entries = {};
	      this.size = 0;
	    }
	  }]);
	}();
	var Color = function () {
	  function Color() {
	    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	    _classCallCheck(this, Color);
	    this.r = r;
	    this.g = g;
	    this.b = b;
	    this.a = a;
	  }
	  return _createClass(Color, [{
	    key: "set",
	    value: function set(r, g, b, a) {
	      this.r = r;
	      this.g = g;
	      this.b = b;
	      this.a = a;
	      return this.clamp();
	    }
	  }, {
	    key: "setFromColor",
	    value: function setFromColor(c) {
	      this.r = c.r;
	      this.g = c.g;
	      this.b = c.b;
	      this.a = c.a;
	      return this;
	    }
	  }, {
	    key: "setFromString",
	    value: function setFromString(hex) {
	      hex = hex.charAt(0) == '#' ? hex.substr(1) : hex;
	      this.r = parseInt(hex.substr(0, 2), 16) / 255;
	      this.g = parseInt(hex.substr(2, 2), 16) / 255;
	      this.b = parseInt(hex.substr(4, 2), 16) / 255;
	      this.a = hex.length != 8 ? 1 : parseInt(hex.substr(6, 2), 16) / 255;
	      return this;
	    }
	  }, {
	    key: "add",
	    value: function add(r, g, b, a) {
	      this.r += r;
	      this.g += g;
	      this.b += b;
	      this.a += a;
	      return this.clamp();
	    }
	  }, {
	    key: "clamp",
	    value: function clamp() {
	      if (this.r < 0) this.r = 0;else if (this.r > 1) this.r = 1;
	      if (this.g < 0) this.g = 0;else if (this.g > 1) this.g = 1;
	      if (this.b < 0) this.b = 0;else if (this.b > 1) this.b = 1;
	      if (this.a < 0) this.a = 0;else if (this.a > 1) this.a = 1;
	      return this;
	    }
	  }], [{
	    key: "rgba8888ToColor",
	    value: function rgba8888ToColor(color, value) {
	      color.r = ((value & 0xff000000) >>> 24) / 255;
	      color.g = ((value & 0x00ff0000) >>> 16) / 255;
	      color.b = ((value & 0x0000ff00) >>> 8) / 255;
	      color.a = (value & 0x000000ff) / 255;
	    }
	  }, {
	    key: "rgb888ToColor",
	    value: function rgb888ToColor(color, value) {
	      color.r = ((value & 0x00ff0000) >>> 16) / 255;
	      color.g = ((value & 0x0000ff00) >>> 8) / 255;
	      color.b = (value & 0x000000ff) / 255;
	    }
	  }, {
	    key: "fromString",
	    value: function fromString(hex) {
	      return new Color().setFromString(hex);
	    }
	  }]);
	}();
	Color.WHITE = new Color(1, 1, 1, 1);
	Color.RED = new Color(1, 0, 0, 1);
	Color.GREEN = new Color(0, 1, 0, 1);
	Color.BLUE = new Color(0, 0, 1, 1);
	Color.MAGENTA = new Color(1, 0, 1, 1);
	var MathUtils = function () {
	  function MathUtils() {
	    _classCallCheck(this, MathUtils);
	  }
	  return _createClass(MathUtils, null, [{
	    key: "clamp",
	    value: function clamp(value, min, max) {
	      if (value < min) return min;
	      if (value > max) return max;
	      return value;
	    }
	  }, {
	    key: "cosDeg",
	    value: function cosDeg(degrees) {
	      return Math.cos(degrees * MathUtils.degRad);
	    }
	  }, {
	    key: "sinDeg",
	    value: function sinDeg(degrees) {
	      return Math.sin(degrees * MathUtils.degRad);
	    }
	  }, {
	    key: "signum",
	    value: function signum(value) {
	      return value > 0 ? 1 : value < 0 ? -1 : 0;
	    }
	  }, {
	    key: "toInt",
	    value: function toInt(x) {
	      return x > 0 ? Math.floor(x) : Math.ceil(x);
	    }
	  }, {
	    key: "cbrt",
	    value: function cbrt(x) {
	      var y = Math.pow(Math.abs(x), 1 / 3);
	      return x < 0 ? -y : y;
	    }
	  }, {
	    key: "randomTriangular",
	    value: function randomTriangular(min, max) {
	      return MathUtils.randomTriangularWith(min, max, (min + max) * 0.5);
	    }
	  }, {
	    key: "randomTriangularWith",
	    value: function randomTriangularWith(min, max, mode) {
	      var u = Math.random();
	      var d = max - min;
	      if (u <= (mode - min) / d) return min + Math.sqrt(u * d * (mode - min));
	      return max - Math.sqrt((1 - u) * d * (max - mode));
	    }
	  }, {
	    key: "isPowerOfTwo",
	    value: function isPowerOfTwo(value) {
	      return value && (value & value - 1) === 0;
	    }
	  }]);
	}();
	MathUtils.PI = 3.1415927;
	MathUtils.PI2 = MathUtils.PI * 2;
	MathUtils.radiansToDegrees = 180 / MathUtils.PI;
	MathUtils.radDeg = MathUtils.radiansToDegrees;
	MathUtils.degreesToRadians = MathUtils.PI / 180;
	MathUtils.degRad = MathUtils.degreesToRadians;
	var Interpolation = function () {
	  function Interpolation() {
	    _classCallCheck(this, Interpolation);
	  }
	  return _createClass(Interpolation, [{
	    key: "apply",
	    value: function apply(start, end, a) {
	      return start + (end - start) * this.applyInternal(a);
	    }
	  }]);
	}();
	var Pow = function (_Interpolation) {
	  function Pow(power) {
	    var _this2;
	    _classCallCheck(this, Pow);
	    _this2 = _callSuper$f(this, Pow);
	    _this2.power = 2;
	    _this2.power = power;
	    return _this2;
	  }
	  _inherits(Pow, _Interpolation);
	  return _createClass(Pow, [{
	    key: "applyInternal",
	    value: function applyInternal(a) {
	      if (a <= 0.5) return Math.pow(a * 2, this.power) / 2;
	      return Math.pow((a - 1) * 2, this.power) / (this.power % 2 == 0 ? -2 : 2) + 1;
	    }
	  }]);
	}(Interpolation);
	var PowOut = function (_Pow) {
	  function PowOut(power) {
	    _classCallCheck(this, PowOut);
	    return _callSuper$f(this, PowOut, [power]);
	  }
	  _inherits(PowOut, _Pow);
	  return _createClass(PowOut, [{
	    key: "applyInternal",
	    value: function applyInternal(a) {
	      return Math.pow(a - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1;
	    }
	  }]);
	}(Pow);
	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);
	  }
	  return _createClass(Utils, null, [{
	    key: "arrayCopy",
	    value: function arrayCopy(source, sourceStart, dest, destStart, numElements) {
	      for (var i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
	        dest[j] = source[i];
	      }
	    }
	  }, {
	    key: "arrayFill",
	    value: function arrayFill(array, fromIndex, toIndex, value) {
	      for (var i = fromIndex; i < toIndex; i++) array[i] = value;
	    }
	  }, {
	    key: "setArraySize",
	    value: function setArraySize(array, size) {
	      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var oldSize = array.length;
	      if (oldSize == size) return array;
	      array.length = size;
	      if (oldSize < size) {
	        for (var i = oldSize; i < size; i++) array[i] = value;
	      }
	      return array;
	    }
	  }, {
	    key: "ensureArrayCapacity",
	    value: function ensureArrayCapacity(array, size) {
	      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      if (array.length >= size) return array;
	      return Utils.setArraySize(array, size, value);
	    }
	  }, {
	    key: "newArray",
	    value: function newArray(size, defaultValue) {
	      var array = new Array(size);
	      for (var i = 0; i < size; i++) array[i] = defaultValue;
	      return array;
	    }
	  }, {
	    key: "newFloatArray",
	    value: function newFloatArray(size) {
	      if (Utils.SUPPORTS_TYPED_ARRAYS) return new Float32Array(size);else {
	        var array = new Array(size);
	        for (var i = 0; i < array.length; i++) array[i] = 0;
	        return array;
	      }
	    }
	  }, {
	    key: "newShortArray",
	    value: function newShortArray(size) {
	      if (Utils.SUPPORTS_TYPED_ARRAYS) return new Int16Array(size);else {
	        var array = new Array(size);
	        for (var i = 0; i < array.length; i++) array[i] = 0;
	        return array;
	      }
	    }
	  }, {
	    key: "toFloatArray",
	    value: function toFloatArray(array) {
	      return Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
	    }
	  }, {
	    key: "toSinglePrecision",
	    value: function toSinglePrecision(value) {
	      return Utils.SUPPORTS_TYPED_ARRAYS ? Math.fround(value) : value;
	    }
	  }, {
	    key: "webkit602BugfixHelper",
	    value: function webkit602BugfixHelper(alpha, blend) {}
	  }, {
	    key: "contains",
	    value: function contains(array, element) {
	      for (var i = 0; i < array.length; i++) if (array[i] == element) return true;
	      return false;
	    }
	  }, {
	    key: "enumValue",
	    value: function enumValue(type, name) {
	      return type[name[0].toUpperCase() + name.slice(1)];
	    }
	  }]);
	}();
	Utils.SUPPORTS_TYPED_ARRAYS = typeof Float32Array !== "undefined";
	var DebugUtils = function () {
	  function DebugUtils() {
	    _classCallCheck(this, DebugUtils);
	  }
	  return _createClass(DebugUtils, null, [{
	    key: "logBones",
	    value: function logBones(skeleton) {
	      for (var i = 0; i < skeleton.bones.length; i++) {
	        var bone = skeleton.bones[i];
	        console.log(bone.data.name + ", " + bone.a + ", " + bone.b + ", " + bone.c + ", " + bone.d + ", " + bone.worldX + ", " + bone.worldY);
	      }
	    }
	  }]);
	}();
	var Pool = function () {
	  function Pool(instantiator) {
	    _classCallCheck(this, Pool);
	    this.items = new Array();
	    this.instantiator = instantiator;
	  }
	  return _createClass(Pool, [{
	    key: "obtain",
	    value: function obtain() {
	      return this.items.length > 0 ? this.items.pop() : this.instantiator();
	    }
	  }, {
	    key: "free",
	    value: function free(item) {
	      if (item.reset) item.reset();
	      this.items.push(item);
	    }
	  }, {
	    key: "freeAll",
	    value: function freeAll(items) {
	      for (var i = 0; i < items.length; i++) this.free(items[i]);
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.items.length = 0;
	    }
	  }]);
	}();
	var Vector2 = function () {
	  function Vector2() {
	    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    _classCallCheck(this, Vector2);
	    this.x = x;
	    this.y = y;
	  }
	  return _createClass(Vector2, [{
	    key: "set",
	    value: function set(x, y) {
	      this.x = x;
	      this.y = y;
	      return this;
	    }
	  }, {
	    key: "length",
	    value: function length() {
	      var x = this.x;
	      var y = this.y;
	      return Math.sqrt(x * x + y * y);
	    }
	  }, {
	    key: "normalize",
	    value: function normalize() {
	      var len = this.length();
	      if (len != 0) {
	        this.x /= len;
	        this.y /= len;
	      }
	      return this;
	    }
	  }]);
	}();
	var TimeKeeper = function () {
	  function TimeKeeper() {
	    _classCallCheck(this, TimeKeeper);
	    this.maxDelta = 0.064;
	    this.framesPerSecond = 0;
	    this.delta = 0;
	    this.totalTime = 0;
	    this.lastTime = Date.now() / 1000;
	    this.frameCount = 0;
	    this.frameTime = 0;
	  }
	  return _createClass(TimeKeeper, [{
	    key: "update",
	    value: function update() {
	      var now = Date.now() / 1000;
	      this.delta = now - this.lastTime;
	      this.frameTime += this.delta;
	      this.totalTime += this.delta;
	      if (this.delta > this.maxDelta) this.delta = this.maxDelta;
	      this.lastTime = now;
	      this.frameCount++;
	      if (this.frameTime > 1) {
	        this.framesPerSecond = this.frameCount / this.frameTime;
	        this.frameTime = 0;
	        this.frameCount = 0;
	      }
	    }
	  }]);
	}();
	var WindowedMean = function () {
	  function WindowedMean() {
	    var windowSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
	    _classCallCheck(this, WindowedMean);
	    this.addedValues = 0;
	    this.lastValue = 0;
	    this.mean = 0;
	    this.dirty = true;
	    this.values = new Array(windowSize);
	  }
	  return _createClass(WindowedMean, [{
	    key: "hasEnoughData",
	    value: function hasEnoughData() {
	      return this.addedValues >= this.values.length;
	    }
	  }, {
	    key: "addValue",
	    value: function addValue(value) {
	      if (this.addedValues < this.values.length) this.addedValues++;
	      this.values[this.lastValue++] = value;
	      if (this.lastValue > this.values.length - 1) this.lastValue = 0;
	      this.dirty = true;
	    }
	  }, {
	    key: "getMean",
	    value: function getMean() {
	      if (this.hasEnoughData()) {
	        if (this.dirty) {
	          var mean = 0;
	          for (var i = 0; i < this.values.length; i++) mean += this.values[i];
	          this.mean = mean / this.values.length;
	          this.dirty = false;
	        }
	        return this.mean;
	      }
	      return 0;
	    }
	  }]);
	}();

	function _callSuper$e(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var Attachment = _createClass(function Attachment(name) {
	  _classCallCheck(this, Attachment);
	  if (!name) throw new Error("name cannot be null.");
	  this.name = name;
	});
	var VertexAttachment = function (_Attachment) {
	  function VertexAttachment(name) {
	    var _this2;
	    _classCallCheck(this, VertexAttachment);
	    _this2 = _callSuper$e(this, VertexAttachment, [name]);
	    _this2.id = VertexAttachment.nextID++;
	    _this2.bones = null;
	    _this2.vertices = null;
	    _this2.worldVerticesLength = 0;
	    _this2.deformAttachment = _this2;
	    return _this2;
	  }
	  _inherits(VertexAttachment, _Attachment);
	  return _createClass(VertexAttachment, [{
	    key: "computeWorldVertices",
	    value: function computeWorldVertices(slot, start, count, worldVertices, offset, stride) {
	      count = offset + (count >> 1) * stride;
	      var skeleton = slot.bone.skeleton;
	      var deformArray = slot.deform;
	      var vertices = this.vertices;
	      var bones = this.bones;
	      if (!bones) {
	        if (deformArray.length > 0) vertices = deformArray;
	        var bone = slot.bone;
	        var x = bone.worldX;
	        var y = bone.worldY;
	        var a = bone.a,
	          b = bone.b,
	          c = bone.c,
	          d = bone.d;
	        for (var _v = start, w = offset; w < count; _v += 2, w += stride) {
	          var vx = vertices[_v],
	            vy = vertices[_v + 1];
	          worldVertices[w] = vx * a + vy * b + x;
	          worldVertices[w + 1] = vx * c + vy * d + y;
	        }
	        return;
	      }
	      var v = 0,
	        skip = 0;
	      for (var i = 0; i < start; i += 2) {
	        var n = bones[v];
	        v += n + 1;
	        skip += n;
	      }
	      var skeletonBones = skeleton.bones;
	      if (deformArray.length == 0) {
	        for (var _w = offset, _b = skip * 3; _w < count; _w += stride) {
	          var wx = 0,
	            wy = 0;
	          var _n = bones[v++];
	          _n += v;
	          for (; v < _n; v++, _b += 3) {
	            var _bone = skeletonBones[bones[v]];
	            var _vx = vertices[_b],
	              _vy = vertices[_b + 1],
	              weight = vertices[_b + 2];
	            wx += (_vx * _bone.a + _vy * _bone.b + _bone.worldX) * weight;
	            wy += (_vx * _bone.c + _vy * _bone.d + _bone.worldY) * weight;
	          }
	          worldVertices[_w] = wx;
	          worldVertices[_w + 1] = wy;
	        }
	      } else {
	        var deform = deformArray;
	        for (var _w2 = offset, _b2 = skip * 3, f = skip << 1; _w2 < count; _w2 += stride) {
	          var _wx = 0,
	            _wy = 0;
	          var _n2 = bones[v++];
	          _n2 += v;
	          for (; v < _n2; v++, _b2 += 3, f += 2) {
	            var _bone2 = skeletonBones[bones[v]];
	            var _vx2 = vertices[_b2] + deform[f],
	              _vy2 = vertices[_b2 + 1] + deform[f + 1],
	              _weight = vertices[_b2 + 2];
	            _wx += (_vx2 * _bone2.a + _vy2 * _bone2.b + _bone2.worldX) * _weight;
	            _wy += (_vx2 * _bone2.c + _vy2 * _bone2.d + _bone2.worldY) * _weight;
	          }
	          worldVertices[_w2] = _wx;
	          worldVertices[_w2 + 1] = _wy;
	        }
	      }
	    }
	  }, {
	    key: "copyTo",
	    value: function copyTo(attachment) {
	      if (this.bones) {
	        attachment.bones = new Array(this.bones.length);
	        Utils.arrayCopy(this.bones, 0, attachment.bones, 0, this.bones.length);
	      } else attachment.bones = null;
	      if (this.vertices) {
	        attachment.vertices = Utils.newFloatArray(this.vertices.length);
	        Utils.arrayCopy(this.vertices, 0, attachment.vertices, 0, this.vertices.length);
	      } else attachment.vertices = null;
	      attachment.worldVerticesLength = this.worldVerticesLength;
	      attachment.deformAttachment = this.deformAttachment;
	    }
	  }]);
	}(Attachment);
	VertexAttachment.nextID = 0;

	function _callSuper$d(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var Animation = function () {
	  function Animation(name, timelines, duration) {
	    _classCallCheck(this, Animation);
	    this.timelines = null;
	    this.timelineIds = null;
	    if (!name) throw new Error("name cannot be null.");
	    this.name = name;
	    this.setTimelines(timelines);
	    this.duration = duration;
	  }
	  return _createClass(Animation, [{
	    key: "setTimelines",
	    value: function setTimelines(timelines) {
	      if (!timelines) throw new Error("timelines cannot be null.");
	      this.timelines = timelines;
	      this.timelineIds = new StringSet();
	      for (var i = 0; i < timelines.length; i++) this.timelineIds.addAll(timelines[i].getPropertyIds());
	    }
	  }, {
	    key: "hasTimeline",
	    value: function hasTimeline(ids) {
	      for (var i = 0; i < ids.length; i++) if (this.timelineIds.contains(ids[i])) return true;
	      return false;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, loop, events, alpha, blend, direction) {
	      if (!skeleton) throw new Error("skeleton cannot be null.");
	      if (loop && this.duration != 0) {
	        time %= this.duration;
	        if (lastTime > 0) lastTime %= this.duration;
	      }
	      var timelines = this.timelines;
	      for (var i = 0, n = timelines.length; i < n; i++) timelines[i].apply(skeleton, lastTime, time, events, alpha, blend, direction);
	    }
	  }]);
	}();
	var MixBlend;
	(function (MixBlend) {
	  MixBlend[MixBlend["setup"] = 0] = "setup";
	  MixBlend[MixBlend["first"] = 1] = "first";
	  MixBlend[MixBlend["replace"] = 2] = "replace";
	  MixBlend[MixBlend["add"] = 3] = "add";
	})(MixBlend || (MixBlend = {}));
	var MixDirection;
	(function (MixDirection) {
	  MixDirection[MixDirection["mixIn"] = 0] = "mixIn";
	  MixDirection[MixDirection["mixOut"] = 1] = "mixOut";
	})(MixDirection || (MixDirection = {}));
	var Property = {
	  rotate: 0,
	  x: 1,
	  y: 2,
	  scaleX: 3,
	  scaleY: 4,
	  shearX: 5,
	  shearY: 6,
	  rgb: 7,
	  alpha: 8,
	  rgb2: 9,
	  attachment: 10,
	  deform: 11,
	  event: 12,
	  drawOrder: 13,
	  ikConstraint: 14,
	  transformConstraint: 15,
	  pathConstraintPosition: 16,
	  pathConstraintSpacing: 17,
	  pathConstraintMix: 18
	};
	var Timeline = function () {
	  function Timeline(frameCount, propertyIds) {
	    _classCallCheck(this, Timeline);
	    this.propertyIds = null;
	    this.frames = null;
	    this.propertyIds = propertyIds;
	    this.frames = Utils.newFloatArray(frameCount * this.getFrameEntries());
	  }
	  return _createClass(Timeline, [{
	    key: "getPropertyIds",
	    value: function getPropertyIds() {
	      return this.propertyIds;
	    }
	  }, {
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 1;
	    }
	  }, {
	    key: "getFrameCount",
	    value: function getFrameCount() {
	      return this.frames.length / this.getFrameEntries();
	    }
	  }, {
	    key: "getDuration",
	    value: function getDuration() {
	      return this.frames[this.frames.length - this.getFrameEntries()];
	    }
	  }], [{
	    key: "search1",
	    value: function search1(frames, time) {
	      var n = frames.length;
	      for (var i = 1; i < n; i++) if (frames[i] > time) return i - 1;
	      return n - 1;
	    }
	  }, {
	    key: "search",
	    value: function search(frames, time, step) {
	      var n = frames.length;
	      for (var i = step; i < n; i += step) if (frames[i] > time) return i - step;
	      return n - step;
	    }
	  }]);
	}();
	var CurveTimeline = function (_Timeline) {
	  function CurveTimeline(frameCount, bezierCount, propertyIds) {
	    var _this2;
	    _classCallCheck(this, CurveTimeline);
	    _this2 = _callSuper$d(this, CurveTimeline, [frameCount, propertyIds]);
	    _this2.curves = null;
	    _this2.curves = Utils.newFloatArray(frameCount + bezierCount * 18);
	    _this2.curves[frameCount - 1] = 1;
	    return _this2;
	  }
	  _inherits(CurveTimeline, _Timeline);
	  return _createClass(CurveTimeline, [{
	    key: "setLinear",
	    value: function setLinear(frame) {
	      this.curves[frame] = 0;
	    }
	  }, {
	    key: "setStepped",
	    value: function setStepped(frame) {
	      this.curves[frame] = 1;
	    }
	  }, {
	    key: "shrink",
	    value: function shrink(bezierCount) {
	      var size = this.getFrameCount() + bezierCount * 18;
	      if (this.curves.length > size) {
	        var newCurves = Utils.newFloatArray(size);
	        Utils.arrayCopy(this.curves, 0, newCurves, 0, size);
	        this.curves = newCurves;
	      }
	    }
	  }, {
	    key: "setBezier",
	    value: function setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
	      var curves = this.curves;
	      var i = this.getFrameCount() + bezier * 18;
	      if (value == 0) curves[frame] = 2 + i;
	      var tmpx = (time1 - cx1 * 2 + cx2) * 0.03,
	        tmpy = (value1 - cy1 * 2 + cy2) * 0.03;
	      var dddx = ((cx1 - cx2) * 3 - time1 + time2) * 0.006,
	        dddy = ((cy1 - cy2) * 3 - value1 + value2) * 0.006;
	      var ddx = tmpx * 2 + dddx,
	        ddy = tmpy * 2 + dddy;
	      var dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667,
	        dy = (cy1 - value1) * 0.3 + tmpy + dddy * 0.16666667;
	      var x = time1 + dx,
	        y = value1 + dy;
	      for (var n = i + 18; i < n; i += 2) {
	        curves[i] = x;
	        curves[i + 1] = y;
	        dx += ddx;
	        dy += ddy;
	        ddx += dddx;
	        ddy += dddy;
	        x += dx;
	        y += dy;
	      }
	    }
	  }, {
	    key: "getBezierValue",
	    value: function getBezierValue(time, frameIndex, valueOffset, i) {
	      var curves = this.curves;
	      if (curves[i] > time) {
	        var _x = this.frames[frameIndex],
	          _y = this.frames[frameIndex + valueOffset];
	        return _y + (time - _x) / (curves[i] - _x) * (curves[i + 1] - _y);
	      }
	      var n = i + 18;
	      for (i += 2; i < n; i += 2) {
	        if (curves[i] >= time) {
	          var _x2 = curves[i - 2],
	            _y2 = curves[i - 1];
	          return _y2 + (time - _x2) / (curves[i] - _x2) * (curves[i + 1] - _y2);
	        }
	      }
	      frameIndex += this.getFrameEntries();
	      var x = curves[n - 2],
	        y = curves[n - 1];
	      return y + (time - x) / (this.frames[frameIndex] - x) * (this.frames[frameIndex + valueOffset] - y);
	    }
	  }]);
	}(Timeline);
	var CurveTimeline1 = function (_CurveTimeline) {
	  function CurveTimeline1(frameCount, bezierCount, propertyId) {
	    _classCallCheck(this, CurveTimeline1);
	    return _callSuper$d(this, CurveTimeline1, [frameCount, bezierCount, [propertyId]]);
	  }
	  _inherits(CurveTimeline1, _CurveTimeline);
	  return _createClass(CurveTimeline1, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 2;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, value) {
	      frame <<= 1;
	      this.frames[frame] = time;
	      this.frames[frame + 1] = value;
	    }
	  }, {
	    key: "getCurveValue",
	    value: function getCurveValue(time) {
	      var frames = this.frames;
	      var i = frames.length - 2;
	      for (var ii = 2; ii <= i; ii += 2) {
	        if (frames[ii] > time) {
	          i = ii - 2;
	          break;
	        }
	      }
	      var curveType = this.curves[i >> 1];
	      switch (curveType) {
	        case 0:
	          var before = frames[i],
	            value = frames[i + 1];
	          return value + (time - before) / (frames[i + 2] - before) * (frames[i + 2 + 1] - value);
	        case 1:
	          return frames[i + 1];
	      }
	      return this.getBezierValue(time, i, 1, curveType - 2);
	    }
	  }]);
	}(CurveTimeline);
	var CurveTimeline2 = function (_CurveTimeline2) {
	  function CurveTimeline2(frameCount, bezierCount, propertyId1, propertyId2) {
	    _classCallCheck(this, CurveTimeline2);
	    return _callSuper$d(this, CurveTimeline2, [frameCount, bezierCount, [propertyId1, propertyId2]]);
	  }
	  _inherits(CurveTimeline2, _CurveTimeline2);
	  return _createClass(CurveTimeline2, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 3;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, value1, value2) {
	      frame *= 3;
	      this.frames[frame] = time;
	      this.frames[frame + 1] = value1;
	      this.frames[frame + 2] = value2;
	    }
	  }]);
	}(CurveTimeline);
	var RotateTimeline = function (_CurveTimeline3) {
	  function RotateTimeline(frameCount, bezierCount, boneIndex) {
	    var _this3;
	    _classCallCheck(this, RotateTimeline);
	    _this3 = _callSuper$d(this, RotateTimeline, [frameCount, bezierCount, Property.rotate + "|" + boneIndex]);
	    _this3.boneIndex = 0;
	    _this3.boneIndex = boneIndex;
	    return _this3;
	  }
	  _inherits(RotateTimeline, _CurveTimeline3);
	  return _createClass(RotateTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.rotation = bone.data.rotation;
	            return;
	          case MixBlend.first:
	            bone.rotation += (bone.data.rotation - bone.rotation) * alpha;
	        }
	        return;
	      }
	      var r = this.getCurveValue(time);
	      switch (blend) {
	        case MixBlend.setup:
	          bone.rotation = bone.data.rotation + r * alpha;
	          break;
	        case MixBlend.first:
	        case MixBlend.replace:
	          r += bone.data.rotation - bone.rotation;
	        case MixBlend.add:
	          bone.rotation += r * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline1);
	var TranslateTimeline = function (_CurveTimeline4) {
	  function TranslateTimeline(frameCount, bezierCount, boneIndex) {
	    var _this4;
	    _classCallCheck(this, TranslateTimeline);
	    _this4 = _callSuper$d(this, TranslateTimeline, [frameCount, bezierCount, Property.x + "|" + boneIndex, Property.y + "|" + boneIndex]);
	    _this4.boneIndex = 0;
	    _this4.boneIndex = boneIndex;
	    return _this4;
	  }
	  _inherits(TranslateTimeline, _CurveTimeline4);
	  return _createClass(TranslateTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.x = bone.data.x;
	            bone.y = bone.data.y;
	            return;
	          case MixBlend.first:
	            bone.x += (bone.data.x - bone.x) * alpha;
	            bone.y += (bone.data.y - bone.y) * alpha;
	        }
	        return;
	      }
	      var x = 0,
	        y = 0;
	      var i = Timeline.search(frames, time, 3);
	      var curveType = this.curves[i / 3];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          x = frames[i + 1];
	          y = frames[i + 2];
	          var t = (time - before) / (frames[i + 3] - before);
	          x += (frames[i + 3 + 1] - x) * t;
	          y += (frames[i + 3 + 2] - y) * t;
	          break;
	        case 1:
	          x = frames[i + 1];
	          y = frames[i + 2];
	          break;
	        default:
	          x = this.getBezierValue(time, i, 1, curveType - 2);
	          y = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	      }
	      switch (blend) {
	        case MixBlend.setup:
	          bone.x = bone.data.x + x * alpha;
	          bone.y = bone.data.y + y * alpha;
	          break;
	        case MixBlend.first:
	        case MixBlend.replace:
	          bone.x += (bone.data.x + x - bone.x) * alpha;
	          bone.y += (bone.data.y + y - bone.y) * alpha;
	          break;
	        case MixBlend.add:
	          bone.x += x * alpha;
	          bone.y += y * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline2);
	var TranslateXTimeline = function (_CurveTimeline5) {
	  function TranslateXTimeline(frameCount, bezierCount, boneIndex) {
	    var _this5;
	    _classCallCheck(this, TranslateXTimeline);
	    _this5 = _callSuper$d(this, TranslateXTimeline, [frameCount, bezierCount, Property.x + "|" + boneIndex]);
	    _this5.boneIndex = 0;
	    _this5.boneIndex = boneIndex;
	    return _this5;
	  }
	  _inherits(TranslateXTimeline, _CurveTimeline5);
	  return _createClass(TranslateXTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.x = bone.data.x;
	            return;
	          case MixBlend.first:
	            bone.x += (bone.data.x - bone.x) * alpha;
	        }
	        return;
	      }
	      var x = this.getCurveValue(time);
	      switch (blend) {
	        case MixBlend.setup:
	          bone.x = bone.data.x + x * alpha;
	          break;
	        case MixBlend.first:
	        case MixBlend.replace:
	          bone.x += (bone.data.x + x - bone.x) * alpha;
	          break;
	        case MixBlend.add:
	          bone.x += x * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline1);
	var TranslateYTimeline = function (_CurveTimeline6) {
	  function TranslateYTimeline(frameCount, bezierCount, boneIndex) {
	    var _this6;
	    _classCallCheck(this, TranslateYTimeline);
	    _this6 = _callSuper$d(this, TranslateYTimeline, [frameCount, bezierCount, Property.y + "|" + boneIndex]);
	    _this6.boneIndex = 0;
	    _this6.boneIndex = boneIndex;
	    return _this6;
	  }
	  _inherits(TranslateYTimeline, _CurveTimeline6);
	  return _createClass(TranslateYTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.y = bone.data.y;
	            return;
	          case MixBlend.first:
	            bone.y += (bone.data.y - bone.y) * alpha;
	        }
	        return;
	      }
	      var y = this.getCurveValue(time);
	      switch (blend) {
	        case MixBlend.setup:
	          bone.y = bone.data.y + y * alpha;
	          break;
	        case MixBlend.first:
	        case MixBlend.replace:
	          bone.y += (bone.data.y + y - bone.y) * alpha;
	          break;
	        case MixBlend.add:
	          bone.y += y * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline1);
	var ScaleTimeline = function (_CurveTimeline7) {
	  function ScaleTimeline(frameCount, bezierCount, boneIndex) {
	    var _this7;
	    _classCallCheck(this, ScaleTimeline);
	    _this7 = _callSuper$d(this, ScaleTimeline, [frameCount, bezierCount, Property.scaleX + "|" + boneIndex, Property.scaleY + "|" + boneIndex]);
	    _this7.boneIndex = 0;
	    _this7.boneIndex = boneIndex;
	    return _this7;
	  }
	  _inherits(ScaleTimeline, _CurveTimeline7);
	  return _createClass(ScaleTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.scaleX = bone.data.scaleX;
	            bone.scaleY = bone.data.scaleY;
	            return;
	          case MixBlend.first:
	            bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
	            bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
	        }
	        return;
	      }
	      var x, y;
	      var i = Timeline.search(frames, time, 3);
	      var curveType = this.curves[i / 3];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          x = frames[i + 1];
	          y = frames[i + 2];
	          var t = (time - before) / (frames[i + 3] - before);
	          x += (frames[i + 3 + 1] - x) * t;
	          y += (frames[i + 3 + 2] - y) * t;
	          break;
	        case 1:
	          x = frames[i + 1];
	          y = frames[i + 2];
	          break;
	        default:
	          x = this.getBezierValue(time, i, 1, curveType - 2);
	          y = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	      }
	      x *= bone.data.scaleX;
	      y *= bone.data.scaleY;
	      if (alpha == 1) {
	        if (blend == MixBlend.add) {
	          bone.scaleX += x - bone.data.scaleX;
	          bone.scaleY += y - bone.data.scaleY;
	        } else {
	          bone.scaleX = x;
	          bone.scaleY = y;
	        }
	      } else {
	        var bx = 0,
	          by = 0;
	        if (direction == MixDirection.mixOut) {
	          switch (blend) {
	            case MixBlend.setup:
	              bx = bone.data.scaleX;
	              by = bone.data.scaleY;
	              bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
	              bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
	              break;
	            case MixBlend.first:
	            case MixBlend.replace:
	              bx = bone.scaleX;
	              by = bone.scaleY;
	              bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
	              bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
	              break;
	            case MixBlend.add:
	              bone.scaleX += (x - bone.data.scaleX) * alpha;
	              bone.scaleY += (y - bone.data.scaleY) * alpha;
	          }
	        } else {
	          switch (blend) {
	            case MixBlend.setup:
	              bx = Math.abs(bone.data.scaleX) * MathUtils.signum(x);
	              by = Math.abs(bone.data.scaleY) * MathUtils.signum(y);
	              bone.scaleX = bx + (x - bx) * alpha;
	              bone.scaleY = by + (y - by) * alpha;
	              break;
	            case MixBlend.first:
	            case MixBlend.replace:
	              bx = Math.abs(bone.scaleX) * MathUtils.signum(x);
	              by = Math.abs(bone.scaleY) * MathUtils.signum(y);
	              bone.scaleX = bx + (x - bx) * alpha;
	              bone.scaleY = by + (y - by) * alpha;
	              break;
	            case MixBlend.add:
	              bone.scaleX += (x - bone.data.scaleX) * alpha;
	              bone.scaleY += (y - bone.data.scaleY) * alpha;
	          }
	        }
	      }
	    }
	  }]);
	}(CurveTimeline2);
	var ScaleXTimeline = function (_CurveTimeline8) {
	  function ScaleXTimeline(frameCount, bezierCount, boneIndex) {
	    var _this8;
	    _classCallCheck(this, ScaleXTimeline);
	    _this8 = _callSuper$d(this, ScaleXTimeline, [frameCount, bezierCount, Property.scaleX + "|" + boneIndex]);
	    _this8.boneIndex = 0;
	    _this8.boneIndex = boneIndex;
	    return _this8;
	  }
	  _inherits(ScaleXTimeline, _CurveTimeline8);
	  return _createClass(ScaleXTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.scaleX = bone.data.scaleX;
	            return;
	          case MixBlend.first:
	            bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
	        }
	        return;
	      }
	      var x = this.getCurveValue(time) * bone.data.scaleX;
	      if (alpha == 1) {
	        if (blend == MixBlend.add) bone.scaleX += x - bone.data.scaleX;else bone.scaleX = x;
	      } else {
	        var bx = 0;
	        if (direction == MixDirection.mixOut) {
	          switch (blend) {
	            case MixBlend.setup:
	              bx = bone.data.scaleX;
	              bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
	              break;
	            case MixBlend.first:
	            case MixBlend.replace:
	              bx = bone.scaleX;
	              bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
	              break;
	            case MixBlend.add:
	              bone.scaleX += (x - bone.data.scaleX) * alpha;
	          }
	        } else {
	          switch (blend) {
	            case MixBlend.setup:
	              bx = Math.abs(bone.data.scaleX) * MathUtils.signum(x);
	              bone.scaleX = bx + (x - bx) * alpha;
	              break;
	            case MixBlend.first:
	            case MixBlend.replace:
	              bx = Math.abs(bone.scaleX) * MathUtils.signum(x);
	              bone.scaleX = bx + (x - bx) * alpha;
	              break;
	            case MixBlend.add:
	              bone.scaleX += (x - bone.data.scaleX) * alpha;
	          }
	        }
	      }
	    }
	  }]);
	}(CurveTimeline1);
	var ScaleYTimeline = function (_CurveTimeline9) {
	  function ScaleYTimeline(frameCount, bezierCount, boneIndex) {
	    var _this9;
	    _classCallCheck(this, ScaleYTimeline);
	    _this9 = _callSuper$d(this, ScaleYTimeline, [frameCount, bezierCount, Property.scaleY + "|" + boneIndex]);
	    _this9.boneIndex = 0;
	    _this9.boneIndex = boneIndex;
	    return _this9;
	  }
	  _inherits(ScaleYTimeline, _CurveTimeline9);
	  return _createClass(ScaleYTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.scaleY = bone.data.scaleY;
	            return;
	          case MixBlend.first:
	            bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
	        }
	        return;
	      }
	      var y = this.getCurveValue(time) * bone.data.scaleY;
	      if (alpha == 1) {
	        if (blend == MixBlend.add) bone.scaleY += y - bone.data.scaleY;else bone.scaleY = y;
	      } else {
	        var by = 0;
	        if (direction == MixDirection.mixOut) {
	          switch (blend) {
	            case MixBlend.setup:
	              by = bone.data.scaleY;
	              bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
	              break;
	            case MixBlend.first:
	            case MixBlend.replace:
	              by = bone.scaleY;
	              bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
	              break;
	            case MixBlend.add:
	              bone.scaleY += (y - bone.data.scaleY) * alpha;
	          }
	        } else {
	          switch (blend) {
	            case MixBlend.setup:
	              by = Math.abs(bone.data.scaleY) * MathUtils.signum(y);
	              bone.scaleY = by + (y - by) * alpha;
	              break;
	            case MixBlend.first:
	            case MixBlend.replace:
	              by = Math.abs(bone.scaleY) * MathUtils.signum(y);
	              bone.scaleY = by + (y - by) * alpha;
	              break;
	            case MixBlend.add:
	              bone.scaleY += (y - bone.data.scaleY) * alpha;
	          }
	        }
	      }
	    }
	  }]);
	}(CurveTimeline1);
	var ShearTimeline = function (_CurveTimeline10) {
	  function ShearTimeline(frameCount, bezierCount, boneIndex) {
	    var _this10;
	    _classCallCheck(this, ShearTimeline);
	    _this10 = _callSuper$d(this, ShearTimeline, [frameCount, bezierCount, Property.shearX + "|" + boneIndex, Property.shearY + "|" + boneIndex]);
	    _this10.boneIndex = 0;
	    _this10.boneIndex = boneIndex;
	    return _this10;
	  }
	  _inherits(ShearTimeline, _CurveTimeline10);
	  return _createClass(ShearTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.shearX = bone.data.shearX;
	            bone.shearY = bone.data.shearY;
	            return;
	          case MixBlend.first:
	            bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
	            bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
	        }
	        return;
	      }
	      var x = 0,
	        y = 0;
	      var i = Timeline.search(frames, time, 3);
	      var curveType = this.curves[i / 3];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          x = frames[i + 1];
	          y = frames[i + 2];
	          var t = (time - before) / (frames[i + 3] - before);
	          x += (frames[i + 3 + 1] - x) * t;
	          y += (frames[i + 3 + 2] - y) * t;
	          break;
	        case 1:
	          x = frames[i + 1];
	          y = frames[i + 2];
	          break;
	        default:
	          x = this.getBezierValue(time, i, 1, curveType - 2);
	          y = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	      }
	      switch (blend) {
	        case MixBlend.setup:
	          bone.shearX = bone.data.shearX + x * alpha;
	          bone.shearY = bone.data.shearY + y * alpha;
	          break;
	        case MixBlend.first:
	        case MixBlend.replace:
	          bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
	          bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
	          break;
	        case MixBlend.add:
	          bone.shearX += x * alpha;
	          bone.shearY += y * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline2);
	var ShearXTimeline = function (_CurveTimeline11) {
	  function ShearXTimeline(frameCount, bezierCount, boneIndex) {
	    var _this11;
	    _classCallCheck(this, ShearXTimeline);
	    _this11 = _callSuper$d(this, ShearXTimeline, [frameCount, bezierCount, Property.shearX + "|" + boneIndex]);
	    _this11.boneIndex = 0;
	    _this11.boneIndex = boneIndex;
	    return _this11;
	  }
	  _inherits(ShearXTimeline, _CurveTimeline11);
	  return _createClass(ShearXTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.shearX = bone.data.shearX;
	            return;
	          case MixBlend.first:
	            bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
	        }
	        return;
	      }
	      var x = this.getCurveValue(time);
	      switch (blend) {
	        case MixBlend.setup:
	          bone.shearX = bone.data.shearX + x * alpha;
	          break;
	        case MixBlend.first:
	        case MixBlend.replace:
	          bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
	          break;
	        case MixBlend.add:
	          bone.shearX += x * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline1);
	var ShearYTimeline = function (_CurveTimeline12) {
	  function ShearYTimeline(frameCount, bezierCount, boneIndex) {
	    var _this12;
	    _classCallCheck(this, ShearYTimeline);
	    _this12 = _callSuper$d(this, ShearYTimeline, [frameCount, bezierCount, Property.shearY + "|" + boneIndex]);
	    _this12.boneIndex = 0;
	    _this12.boneIndex = boneIndex;
	    return _this12;
	  }
	  _inherits(ShearYTimeline, _CurveTimeline12);
	  return _createClass(ShearYTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var bone = skeleton.bones[this.boneIndex];
	      if (!bone.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.shearY = bone.data.shearY;
	            return;
	          case MixBlend.first:
	            bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
	        }
	        return;
	      }
	      var y = this.getCurveValue(time);
	      switch (blend) {
	        case MixBlend.setup:
	          bone.shearY = bone.data.shearY + y * alpha;
	          break;
	        case MixBlend.first:
	        case MixBlend.replace:
	          bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
	          break;
	        case MixBlend.add:
	          bone.shearY += y * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline1);
	var RGBATimeline = function (_CurveTimeline13) {
	  function RGBATimeline(frameCount, bezierCount, slotIndex) {
	    var _this13;
	    _classCallCheck(this, RGBATimeline);
	    _this13 = _callSuper$d(this, RGBATimeline, [frameCount, bezierCount, [Property.rgb + "|" + slotIndex, Property.alpha + "|" + slotIndex]]);
	    _this13.slotIndex = 0;
	    _this13.slotIndex = slotIndex;
	    return _this13;
	  }
	  _inherits(RGBATimeline, _CurveTimeline13);
	  return _createClass(RGBATimeline, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 5;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, r, g, b, a) {
	      frame *= 5;
	      this.frames[frame] = time;
	      this.frames[frame + 1] = r;
	      this.frames[frame + 2] = g;
	      this.frames[frame + 3] = b;
	      this.frames[frame + 4] = a;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var slot = skeleton.slots[this.slotIndex];
	      if (!slot.bone.active) return;
	      var frames = this.frames;
	      var color = slot.color;
	      if (time < frames[0]) {
	        var setup = slot.data.color;
	        switch (blend) {
	          case MixBlend.setup:
	            color.setFromColor(setup);
	            return;
	          case MixBlend.first:
	            color.add((setup.r - color.r) * alpha, (setup.g - color.g) * alpha, (setup.b - color.b) * alpha, (setup.a - color.a) * alpha);
	        }
	        return;
	      }
	      var r = 0,
	        g = 0,
	        b = 0,
	        a = 0;
	      var i = Timeline.search(frames, time, 5);
	      var curveType = this.curves[i / 5];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          r = frames[i + 1];
	          g = frames[i + 2];
	          b = frames[i + 3];
	          a = frames[i + 4];
	          var t = (time - before) / (frames[i + 5] - before);
	          r += (frames[i + 5 + 1] - r) * t;
	          g += (frames[i + 5 + 2] - g) * t;
	          b += (frames[i + 5 + 3] - b) * t;
	          a += (frames[i + 5 + 4] - a) * t;
	          break;
	        case 1:
	          r = frames[i + 1];
	          g = frames[i + 2];
	          b = frames[i + 3];
	          a = frames[i + 4];
	          break;
	        default:
	          r = this.getBezierValue(time, i, 1, curveType - 2);
	          g = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	          b = this.getBezierValue(time, i, 3, curveType + 18 * 2 - 2);
	          a = this.getBezierValue(time, i, 4, curveType + 18 * 3 - 2);
	      }
	      if (alpha == 1) color.set(r, g, b, a);else {
	        if (blend == MixBlend.setup) color.setFromColor(slot.data.color);
	        color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
	      }
	    }
	  }]);
	}(CurveTimeline);
	var RGBTimeline = function (_CurveTimeline14) {
	  function RGBTimeline(frameCount, bezierCount, slotIndex) {
	    var _this14;
	    _classCallCheck(this, RGBTimeline);
	    _this14 = _callSuper$d(this, RGBTimeline, [frameCount, bezierCount, [Property.rgb + "|" + slotIndex]]);
	    _this14.slotIndex = 0;
	    _this14.slotIndex = slotIndex;
	    return _this14;
	  }
	  _inherits(RGBTimeline, _CurveTimeline14);
	  return _createClass(RGBTimeline, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 4;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, r, g, b) {
	      frame <<= 2;
	      this.frames[frame] = time;
	      this.frames[frame + 1] = r;
	      this.frames[frame + 2] = g;
	      this.frames[frame + 3] = b;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var slot = skeleton.slots[this.slotIndex];
	      if (!slot.bone.active) return;
	      var frames = this.frames;
	      var color = slot.color;
	      if (time < frames[0]) {
	        var setup = slot.data.color;
	        switch (blend) {
	          case MixBlend.setup:
	            color.r = setup.r;
	            color.g = setup.g;
	            color.b = setup.b;
	            return;
	          case MixBlend.first:
	            color.r += (setup.r - color.r) * alpha;
	            color.g += (setup.g - color.g) * alpha;
	            color.b += (setup.b - color.b) * alpha;
	        }
	        return;
	      }
	      var r = 0,
	        g = 0,
	        b = 0;
	      var i = Timeline.search(frames, time, 4);
	      var curveType = this.curves[i >> 2];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          r = frames[i + 1];
	          g = frames[i + 2];
	          b = frames[i + 3];
	          var t = (time - before) / (frames[i + 4] - before);
	          r += (frames[i + 4 + 1] - r) * t;
	          g += (frames[i + 4 + 2] - g) * t;
	          b += (frames[i + 4 + 3] - b) * t;
	          break;
	        case 1:
	          r = frames[i + 1];
	          g = frames[i + 2];
	          b = frames[i + 3];
	          break;
	        default:
	          r = this.getBezierValue(time, i, 1, curveType - 2);
	          g = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	          b = this.getBezierValue(time, i, 3, curveType + 18 * 2 - 2);
	      }
	      if (alpha == 1) {
	        color.r = r;
	        color.g = g;
	        color.b = b;
	      } else {
	        if (blend == MixBlend.setup) {
	          var _setup = slot.data.color;
	          color.r = _setup.r;
	          color.g = _setup.g;
	          color.b = _setup.b;
	        }
	        color.r += (r - color.r) * alpha;
	        color.g += (g - color.g) * alpha;
	        color.b += (b - color.b) * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline);
	var AlphaTimeline = function (_CurveTimeline15) {
	  function AlphaTimeline(frameCount, bezierCount, slotIndex) {
	    var _this15;
	    _classCallCheck(this, AlphaTimeline);
	    _this15 = _callSuper$d(this, AlphaTimeline, [frameCount, bezierCount, Property.alpha + "|" + slotIndex]);
	    _this15.slotIndex = 0;
	    _this15.slotIndex = slotIndex;
	    return _this15;
	  }
	  _inherits(AlphaTimeline, _CurveTimeline15);
	  return _createClass(AlphaTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var slot = skeleton.slots[this.slotIndex];
	      if (!slot.bone.active) return;
	      var color = slot.color;
	      if (time < this.frames[0]) {
	        var setup = slot.data.color;
	        switch (blend) {
	          case MixBlend.setup:
	            color.a = setup.a;
	            return;
	          case MixBlend.first:
	            color.a += (setup.a - color.a) * alpha;
	        }
	        return;
	      }
	      var a = this.getCurveValue(time);
	      if (alpha == 1) color.a = a;else {
	        if (blend == MixBlend.setup) color.a = slot.data.color.a;
	        color.a += (a - color.a) * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline1);
	var RGBA2Timeline = function (_CurveTimeline16) {
	  function RGBA2Timeline(frameCount, bezierCount, slotIndex) {
	    var _this16;
	    _classCallCheck(this, RGBA2Timeline);
	    _this16 = _callSuper$d(this, RGBA2Timeline, [frameCount, bezierCount, [Property.rgb + "|" + slotIndex, Property.alpha + "|" + slotIndex, Property.rgb2 + "|" + slotIndex]]);
	    _this16.slotIndex = 0;
	    _this16.slotIndex = slotIndex;
	    return _this16;
	  }
	  _inherits(RGBA2Timeline, _CurveTimeline16);
	  return _createClass(RGBA2Timeline, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 8;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, r, g, b, a, r2, g2, b2) {
	      frame <<= 3;
	      this.frames[frame] = time;
	      this.frames[frame + 1] = r;
	      this.frames[frame + 2] = g;
	      this.frames[frame + 3] = b;
	      this.frames[frame + 4] = a;
	      this.frames[frame + 5] = r2;
	      this.frames[frame + 6] = g2;
	      this.frames[frame + 7] = b2;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var slot = skeleton.slots[this.slotIndex];
	      if (!slot.bone.active) return;
	      var frames = this.frames;
	      var light = slot.color,
	        dark = slot.darkColor;
	      if (time < frames[0]) {
	        var setupLight = slot.data.color,
	          setupDark = slot.data.darkColor;
	        switch (blend) {
	          case MixBlend.setup:
	            light.setFromColor(setupLight);
	            dark.r = setupDark.r;
	            dark.g = setupDark.g;
	            dark.b = setupDark.b;
	            return;
	          case MixBlend.first:
	            light.add((setupLight.r - light.r) * alpha, (setupLight.g - light.g) * alpha, (setupLight.b - light.b) * alpha, (setupLight.a - light.a) * alpha);
	            dark.r += (setupDark.r - dark.r) * alpha;
	            dark.g += (setupDark.g - dark.g) * alpha;
	            dark.b += (setupDark.b - dark.b) * alpha;
	        }
	        return;
	      }
	      var r = 0,
	        g = 0,
	        b = 0,
	        a = 0,
	        r2 = 0,
	        g2 = 0,
	        b2 = 0;
	      var i = Timeline.search(frames, time, 8);
	      var curveType = this.curves[i >> 3];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          r = frames[i + 1];
	          g = frames[i + 2];
	          b = frames[i + 3];
	          a = frames[i + 4];
	          r2 = frames[i + 5];
	          g2 = frames[i + 6];
	          b2 = frames[i + 7];
	          var t = (time - before) / (frames[i + 8] - before);
	          r += (frames[i + 8 + 1] - r) * t;
	          g += (frames[i + 8 + 2] - g) * t;
	          b += (frames[i + 8 + 3] - b) * t;
	          a += (frames[i + 8 + 4] - a) * t;
	          r2 += (frames[i + 8 + 5] - r2) * t;
	          g2 += (frames[i + 8 + 6] - g2) * t;
	          b2 += (frames[i + 8 + 7] - b2) * t;
	          break;
	        case 1:
	          r = frames[i + 1];
	          g = frames[i + 2];
	          b = frames[i + 3];
	          a = frames[i + 4];
	          r2 = frames[i + 5];
	          g2 = frames[i + 6];
	          b2 = frames[i + 7];
	          break;
	        default:
	          r = this.getBezierValue(time, i, 1, curveType - 2);
	          g = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	          b = this.getBezierValue(time, i, 3, curveType + 18 * 2 - 2);
	          a = this.getBezierValue(time, i, 4, curveType + 18 * 3 - 2);
	          r2 = this.getBezierValue(time, i, 5, curveType + 18 * 4 - 2);
	          g2 = this.getBezierValue(time, i, 6, curveType + 18 * 5 - 2);
	          b2 = this.getBezierValue(time, i, 7, curveType + 18 * 6 - 2);
	      }
	      if (alpha == 1) {
	        light.set(r, g, b, a);
	        dark.r = r2;
	        dark.g = g2;
	        dark.b = b2;
	      } else {
	        if (blend == MixBlend.setup) {
	          light.setFromColor(slot.data.color);
	          var _setupDark = slot.data.darkColor;
	          dark.r = _setupDark.r;
	          dark.g = _setupDark.g;
	          dark.b = _setupDark.b;
	        }
	        light.add((r - light.r) * alpha, (g - light.g) * alpha, (b - light.b) * alpha, (a - light.a) * alpha);
	        dark.r += (r2 - dark.r) * alpha;
	        dark.g += (g2 - dark.g) * alpha;
	        dark.b += (b2 - dark.b) * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline);
	var RGB2Timeline = function (_CurveTimeline17) {
	  function RGB2Timeline(frameCount, bezierCount, slotIndex) {
	    var _this17;
	    _classCallCheck(this, RGB2Timeline);
	    _this17 = _callSuper$d(this, RGB2Timeline, [frameCount, bezierCount, [Property.rgb + "|" + slotIndex, Property.rgb2 + "|" + slotIndex]]);
	    _this17.slotIndex = 0;
	    _this17.slotIndex = slotIndex;
	    return _this17;
	  }
	  _inherits(RGB2Timeline, _CurveTimeline17);
	  return _createClass(RGB2Timeline, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 7;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, r, g, b, r2, g2, b2) {
	      frame *= 7;
	      this.frames[frame] = time;
	      this.frames[frame + 1] = r;
	      this.frames[frame + 2] = g;
	      this.frames[frame + 3] = b;
	      this.frames[frame + 4] = r2;
	      this.frames[frame + 5] = g2;
	      this.frames[frame + 6] = b2;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var slot = skeleton.slots[this.slotIndex];
	      if (!slot.bone.active) return;
	      var frames = this.frames;
	      var light = slot.color,
	        dark = slot.darkColor;
	      if (time < frames[0]) {
	        var setupLight = slot.data.color,
	          setupDark = slot.data.darkColor;
	        switch (blend) {
	          case MixBlend.setup:
	            light.r = setupLight.r;
	            light.g = setupLight.g;
	            light.b = setupLight.b;
	            dark.r = setupDark.r;
	            dark.g = setupDark.g;
	            dark.b = setupDark.b;
	            return;
	          case MixBlend.first:
	            light.r += (setupLight.r - light.r) * alpha;
	            light.g += (setupLight.g - light.g) * alpha;
	            light.b += (setupLight.b - light.b) * alpha;
	            dark.r += (setupDark.r - dark.r) * alpha;
	            dark.g += (setupDark.g - dark.g) * alpha;
	            dark.b += (setupDark.b - dark.b) * alpha;
	        }
	        return;
	      }
	      var r = 0,
	        g = 0,
	        b = 0,
	        r2 = 0,
	        g2 = 0,
	        b2 = 0;
	      var i = Timeline.search(frames, time, 7);
	      var curveType = this.curves[i / 7];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          r = frames[i + 1];
	          g = frames[i + 2];
	          b = frames[i + 3];
	          r2 = frames[i + 4];
	          g2 = frames[i + 5];
	          b2 = frames[i + 6];
	          var t = (time - before) / (frames[i + 7] - before);
	          r += (frames[i + 7 + 1] - r) * t;
	          g += (frames[i + 7 + 2] - g) * t;
	          b += (frames[i + 7 + 3] - b) * t;
	          r2 += (frames[i + 7 + 4] - r2) * t;
	          g2 += (frames[i + 7 + 5] - g2) * t;
	          b2 += (frames[i + 7 + 6] - b2) * t;
	          break;
	        case 1:
	          r = frames[i + 1];
	          g = frames[i + 2];
	          b = frames[i + 3];
	          r2 = frames[i + 4];
	          g2 = frames[i + 5];
	          b2 = frames[i + 6];
	          break;
	        default:
	          r = this.getBezierValue(time, i, 1, curveType - 2);
	          g = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	          b = this.getBezierValue(time, i, 3, curveType + 18 * 2 - 2);
	          r2 = this.getBezierValue(time, i, 4, curveType + 18 * 3 - 2);
	          g2 = this.getBezierValue(time, i, 5, curveType + 18 * 4 - 2);
	          b2 = this.getBezierValue(time, i, 6, curveType + 18 * 5 - 2);
	      }
	      if (alpha == 1) {
	        light.r = r;
	        light.g = g;
	        light.b = b;
	        dark.r = r2;
	        dark.g = g2;
	        dark.b = b2;
	      } else {
	        if (blend == MixBlend.setup) {
	          var _setupLight = slot.data.color,
	            _setupDark2 = slot.data.darkColor;
	          light.r = _setupLight.r;
	          light.g = _setupLight.g;
	          light.b = _setupLight.b;
	          dark.r = _setupDark2.r;
	          dark.g = _setupDark2.g;
	          dark.b = _setupDark2.b;
	        }
	        light.r += (r - light.r) * alpha;
	        light.g += (g - light.g) * alpha;
	        light.b += (b - light.b) * alpha;
	        dark.r += (r2 - dark.r) * alpha;
	        dark.g += (g2 - dark.g) * alpha;
	        dark.b += (b2 - dark.b) * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline);
	var AttachmentTimeline = function (_Timeline2) {
	  function AttachmentTimeline(frameCount, slotIndex) {
	    var _this18;
	    _classCallCheck(this, AttachmentTimeline);
	    _this18 = _callSuper$d(this, AttachmentTimeline, [frameCount, [Property.attachment + "|" + slotIndex]]);
	    _this18.slotIndex = 0;
	    _this18.slotIndex = slotIndex;
	    _this18.attachmentNames = new Array(frameCount);
	    return _this18;
	  }
	  _inherits(AttachmentTimeline, _Timeline2);
	  return _createClass(AttachmentTimeline, [{
	    key: "getFrameCount",
	    value: function getFrameCount() {
	      return this.frames.length;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, attachmentName) {
	      this.frames[frame] = time;
	      this.attachmentNames[frame] = attachmentName;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, events, alpha, blend, direction) {
	      var slot = skeleton.slots[this.slotIndex];
	      if (!slot.bone.active) return;
	      if (direction == MixDirection.mixOut) {
	        if (blend == MixBlend.setup) this.setAttachment(skeleton, slot, slot.data.attachmentName);
	        return;
	      }
	      if (time < this.frames[0]) {
	        if (blend == MixBlend.setup || blend == MixBlend.first) this.setAttachment(skeleton, slot, slot.data.attachmentName);
	        return;
	      }
	      this.setAttachment(skeleton, slot, this.attachmentNames[Timeline.search1(this.frames, time)]);
	    }
	  }, {
	    key: "setAttachment",
	    value: function setAttachment(skeleton, slot, attachmentName) {
	      slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
	    }
	  }]);
	}(Timeline);
	var DeformTimeline = function (_CurveTimeline18) {
	  function DeformTimeline(frameCount, bezierCount, slotIndex, attachment) {
	    var _this19;
	    _classCallCheck(this, DeformTimeline);
	    _this19 = _callSuper$d(this, DeformTimeline, [frameCount, bezierCount, [Property.deform + "|" + slotIndex + "|" + attachment.id]]);
	    _this19.slotIndex = 0;
	    _this19.attachment = null;
	    _this19.vertices = null;
	    _this19.slotIndex = slotIndex;
	    _this19.attachment = attachment;
	    _this19.vertices = new Array(frameCount);
	    return _this19;
	  }
	  _inherits(DeformTimeline, _CurveTimeline18);
	  return _createClass(DeformTimeline, [{
	    key: "getFrameCount",
	    value: function getFrameCount() {
	      return this.frames.length;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, vertices) {
	      this.frames[frame] = time;
	      this.vertices[frame] = vertices;
	    }
	  }, {
	    key: "setBezier",
	    value: function setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
	      var curves = this.curves;
	      var i = this.getFrameCount() + bezier * 18;
	      if (value == 0) curves[frame] = 2 + i;
	      var tmpx = (time1 - cx1 * 2 + cx2) * 0.03,
	        tmpy = cy2 * 0.03 - cy1 * 0.06;
	      var dddx = ((cx1 - cx2) * 3 - time1 + time2) * 0.006,
	        dddy = (cy1 - cy2 + 0.33333333) * 0.018;
	      var ddx = tmpx * 2 + dddx,
	        ddy = tmpy * 2 + dddy;
	      var dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667,
	        dy = cy1 * 0.3 + tmpy + dddy * 0.16666667;
	      var x = time1 + dx,
	        y = dy;
	      for (var n = i + 18; i < n; i += 2) {
	        curves[i] = x;
	        curves[i + 1] = y;
	        dx += ddx;
	        dy += ddy;
	        ddx += dddx;
	        ddy += dddy;
	        x += dx;
	        y += dy;
	      }
	    }
	  }, {
	    key: "getCurvePercent",
	    value: function getCurvePercent(time, frame) {
	      var curves = this.curves;
	      var i = curves[frame];
	      switch (i) {
	        case 0:
	          var _x3 = this.frames[frame];
	          return (time - _x3) / (this.frames[frame + this.getFrameEntries()] - _x3);
	        case 1:
	          return 0;
	      }
	      i -= 2;
	      if (curves[i] > time) {
	        var _x4 = this.frames[frame];
	        return curves[i + 1] * (time - _x4) / (curves[i] - _x4);
	      }
	      var n = i + 18;
	      for (i += 2; i < n; i += 2) {
	        if (curves[i] >= time) {
	          var _x5 = curves[i - 2],
	            _y3 = curves[i - 1];
	          return _y3 + (time - _x5) / (curves[i] - _x5) * (curves[i + 1] - _y3);
	        }
	      }
	      var x = curves[n - 2],
	        y = curves[n - 1];
	      return y + (1 - y) * (time - x) / (this.frames[frame + this.getFrameEntries()] - x);
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
	      var slot = skeleton.slots[this.slotIndex];
	      if (!slot.bone.active) return;
	      var slotAttachment = slot.getAttachment();
	      if (!(slotAttachment instanceof VertexAttachment) || slotAttachment.deformAttachment != this.attachment) return;
	      var deform = slot.deform;
	      if (deform.length == 0) blend = MixBlend.setup;
	      var vertices = this.vertices;
	      var vertexCount = vertices[0].length;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        var vertexAttachment = slotAttachment;
	        switch (blend) {
	          case MixBlend.setup:
	            deform.length = 0;
	            return;
	          case MixBlend.first:
	            if (alpha == 1) {
	              deform.length = 0;
	              return;
	            }
	            deform.length = vertexCount;
	            if (!vertexAttachment.bones) {
	              var setupVertices = vertexAttachment.vertices;
	              for (var i = 0; i < vertexCount; i++) deform[i] += (setupVertices[i] - deform[i]) * alpha;
	            } else {
	              alpha = 1 - alpha;
	              for (var i = 0; i < vertexCount; i++) deform[i] *= alpha;
	            }
	        }
	        return;
	      }
	      deform.length = vertexCount;
	      if (time >= frames[frames.length - 1]) {
	        var lastVertices = vertices[frames.length - 1];
	        if (alpha == 1) {
	          if (blend == MixBlend.add) {
	            var _vertexAttachment = slotAttachment;
	            if (!_vertexAttachment.bones) {
	              var _setupVertices = _vertexAttachment.vertices;
	              for (var _i = 0; _i < vertexCount; _i++) deform[_i] += lastVertices[_i] - _setupVertices[_i];
	            } else {
	              for (var _i2 = 0; _i2 < vertexCount; _i2++) deform[_i2] += lastVertices[_i2];
	            }
	          } else Utils.arrayCopy(lastVertices, 0, deform, 0, vertexCount);
	        } else {
	          switch (blend) {
	            case MixBlend.setup:
	              {
	                var _vertexAttachment2 = slotAttachment;
	                if (!_vertexAttachment2.bones) {
	                  var _setupVertices2 = _vertexAttachment2.vertices;
	                  for (var _i3 = 0; _i3 < vertexCount; _i3++) {
	                    var setup = _setupVertices2[_i3];
	                    deform[_i3] = setup + (lastVertices[_i3] - setup) * alpha;
	                  }
	                } else {
	                  for (var _i4 = 0; _i4 < vertexCount; _i4++) deform[_i4] = lastVertices[_i4] * alpha;
	                }
	                break;
	              }
	            case MixBlend.first:
	            case MixBlend.replace:
	              for (var _i5 = 0; _i5 < vertexCount; _i5++) deform[_i5] += (lastVertices[_i5] - deform[_i5]) * alpha;
	              break;
	            case MixBlend.add:
	              var _vertexAttachment3 = slotAttachment;
	              if (!_vertexAttachment3.bones) {
	                var _setupVertices3 = _vertexAttachment3.vertices;
	                for (var _i6 = 0; _i6 < vertexCount; _i6++) deform[_i6] += (lastVertices[_i6] - _setupVertices3[_i6]) * alpha;
	              } else {
	                for (var _i7 = 0; _i7 < vertexCount; _i7++) deform[_i7] += lastVertices[_i7] * alpha;
	              }
	          }
	        }
	        return;
	      }
	      var frame = Timeline.search1(frames, time);
	      var percent = this.getCurvePercent(time, frame);
	      var prevVertices = vertices[frame];
	      var nextVertices = vertices[frame + 1];
	      if (alpha == 1) {
	        if (blend == MixBlend.add) {
	          var _vertexAttachment4 = slotAttachment;
	          if (!_vertexAttachment4.bones) {
	            var _setupVertices4 = _vertexAttachment4.vertices;
	            for (var _i8 = 0; _i8 < vertexCount; _i8++) {
	              var prev = prevVertices[_i8];
	              deform[_i8] += prev + (nextVertices[_i8] - prev) * percent - _setupVertices4[_i8];
	            }
	          } else {
	            for (var _i9 = 0; _i9 < vertexCount; _i9++) {
	              var _prev = prevVertices[_i9];
	              deform[_i9] += _prev + (nextVertices[_i9] - _prev) * percent;
	            }
	          }
	        } else {
	          for (var _i10 = 0; _i10 < vertexCount; _i10++) {
	            var _prev2 = prevVertices[_i10];
	            deform[_i10] = _prev2 + (nextVertices[_i10] - _prev2) * percent;
	          }
	        }
	      } else {
	        switch (blend) {
	          case MixBlend.setup:
	            {
	              var _vertexAttachment5 = slotAttachment;
	              if (!_vertexAttachment5.bones) {
	                var _setupVertices5 = _vertexAttachment5.vertices;
	                for (var _i11 = 0; _i11 < vertexCount; _i11++) {
	                  var _prev3 = prevVertices[_i11],
	                    _setup2 = _setupVertices5[_i11];
	                  deform[_i11] = _setup2 + (_prev3 + (nextVertices[_i11] - _prev3) * percent - _setup2) * alpha;
	                }
	              } else {
	                for (var _i12 = 0; _i12 < vertexCount; _i12++) {
	                  var _prev4 = prevVertices[_i12];
	                  deform[_i12] = (_prev4 + (nextVertices[_i12] - _prev4) * percent) * alpha;
	                }
	              }
	              break;
	            }
	          case MixBlend.first:
	          case MixBlend.replace:
	            for (var _i13 = 0; _i13 < vertexCount; _i13++) {
	              var _prev5 = prevVertices[_i13];
	              deform[_i13] += (_prev5 + (nextVertices[_i13] - _prev5) * percent - deform[_i13]) * alpha;
	            }
	            break;
	          case MixBlend.add:
	            var _vertexAttachment6 = slotAttachment;
	            if (!_vertexAttachment6.bones) {
	              var _setupVertices6 = _vertexAttachment6.vertices;
	              for (var _i14 = 0; _i14 < vertexCount; _i14++) {
	                var _prev6 = prevVertices[_i14];
	                deform[_i14] += (_prev6 + (nextVertices[_i14] - _prev6) * percent - _setupVertices6[_i14]) * alpha;
	              }
	            } else {
	              for (var _i15 = 0; _i15 < vertexCount; _i15++) {
	                var _prev7 = prevVertices[_i15];
	                deform[_i15] += (_prev7 + (nextVertices[_i15] - _prev7) * percent) * alpha;
	              }
	            }
	        }
	      }
	    }
	  }]);
	}(CurveTimeline);
	var EventTimeline = function (_Timeline3) {
	  function EventTimeline(frameCount) {
	    var _this20;
	    _classCallCheck(this, EventTimeline);
	    _this20 = _callSuper$d(this, EventTimeline, [frameCount, EventTimeline.propertyIds]);
	    _this20.events = null;
	    _this20.events = new Array(frameCount);
	    return _this20;
	  }
	  _inherits(EventTimeline, _Timeline3);
	  return _createClass(EventTimeline, [{
	    key: "getFrameCount",
	    value: function getFrameCount() {
	      return this.frames.length;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, event) {
	      this.frames[frame] = event.time;
	      this.events[frame] = event;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
	      if (!firedEvents) return;
	      var frames = this.frames;
	      var frameCount = this.frames.length;
	      if (lastTime > time) {
	        this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, blend, direction);
	        lastTime = -1;
	      } else if (lastTime >= frames[frameCount - 1]) return;
	      if (time < frames[0]) return;
	      var i = 0;
	      if (lastTime < frames[0]) i = 0;else {
	        i = Timeline.search1(frames, lastTime) + 1;
	        var frameTime = frames[i];
	        while (i > 0) {
	          if (frames[i - 1] != frameTime) break;
	          i--;
	        }
	      }
	      for (; i < frameCount && time >= frames[i]; i++) firedEvents.push(this.events[i]);
	    }
	  }]);
	}(Timeline);
	EventTimeline.propertyIds = ["" + Property.event];
	var DrawOrderTimeline = function (_Timeline4) {
	  function DrawOrderTimeline(frameCount) {
	    var _this21;
	    _classCallCheck(this, DrawOrderTimeline);
	    _this21 = _callSuper$d(this, DrawOrderTimeline, [frameCount, DrawOrderTimeline.propertyIds]);
	    _this21.drawOrders = null;
	    _this21.drawOrders = new Array(frameCount);
	    return _this21;
	  }
	  _inherits(DrawOrderTimeline, _Timeline4);
	  return _createClass(DrawOrderTimeline, [{
	    key: "getFrameCount",
	    value: function getFrameCount() {
	      return this.frames.length;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, drawOrder) {
	      this.frames[frame] = time;
	      this.drawOrders[frame] = drawOrder;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
	      if (direction == MixDirection.mixOut) {
	        if (blend == MixBlend.setup) Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
	        return;
	      }
	      if (time < this.frames[0]) {
	        if (blend == MixBlend.setup || blend == MixBlend.first) Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
	        return;
	      }
	      var drawOrderToSetupIndex = this.drawOrders[Timeline.search1(this.frames, time)];
	      if (!drawOrderToSetupIndex) Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);else {
	        var drawOrder = skeleton.drawOrder;
	        var slots = skeleton.slots;
	        for (var i = 0, n = drawOrderToSetupIndex.length; i < n; i++) drawOrder[i] = slots[drawOrderToSetupIndex[i]];
	      }
	    }
	  }]);
	}(Timeline);
	DrawOrderTimeline.propertyIds = ["" + Property.drawOrder];
	var IkConstraintTimeline = function (_CurveTimeline19) {
	  function IkConstraintTimeline(frameCount, bezierCount, ikConstraintIndex) {
	    var _this22;
	    _classCallCheck(this, IkConstraintTimeline);
	    _this22 = _callSuper$d(this, IkConstraintTimeline, [frameCount, bezierCount, [Property.ikConstraint + "|" + ikConstraintIndex]]);
	    _this22.ikConstraintIndex = 0;
	    _this22.ikConstraintIndex = ikConstraintIndex;
	    return _this22;
	  }
	  _inherits(IkConstraintTimeline, _CurveTimeline19);
	  return _createClass(IkConstraintTimeline, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 6;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, mix, softness, bendDirection, compress, stretch) {
	      frame *= 6;
	      this.frames[frame] = time;
	      this.frames[frame + 1] = mix;
	      this.frames[frame + 2] = softness;
	      this.frames[frame + 3] = bendDirection;
	      this.frames[frame + 4] = compress ? 1 : 0;
	      this.frames[frame + 5] = stretch ? 1 : 0;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
	      var constraint = skeleton.ikConstraints[this.ikConstraintIndex];
	      if (!constraint.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            constraint.mix = constraint.data.mix;
	            constraint.softness = constraint.data.softness;
	            constraint.bendDirection = constraint.data.bendDirection;
	            constraint.compress = constraint.data.compress;
	            constraint.stretch = constraint.data.stretch;
	            return;
	          case MixBlend.first:
	            constraint.mix += (constraint.data.mix - constraint.mix) * alpha;
	            constraint.softness += (constraint.data.softness - constraint.softness) * alpha;
	            constraint.bendDirection = constraint.data.bendDirection;
	            constraint.compress = constraint.data.compress;
	            constraint.stretch = constraint.data.stretch;
	        }
	        return;
	      }
	      var mix = 0,
	        softness = 0;
	      var i = Timeline.search(frames, time, 6);
	      var curveType = this.curves[i / 6];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          mix = frames[i + 1];
	          softness = frames[i + 2];
	          var t = (time - before) / (frames[i + 6] - before);
	          mix += (frames[i + 6 + 1] - mix) * t;
	          softness += (frames[i + 6 + 2] - softness) * t;
	          break;
	        case 1:
	          mix = frames[i + 1];
	          softness = frames[i + 2];
	          break;
	        default:
	          mix = this.getBezierValue(time, i, 1, curveType - 2);
	          softness = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	      }
	      if (blend == MixBlend.setup) {
	        constraint.mix = constraint.data.mix + (mix - constraint.data.mix) * alpha;
	        constraint.softness = constraint.data.softness + (softness - constraint.data.softness) * alpha;
	        if (direction == MixDirection.mixOut) {
	          constraint.bendDirection = constraint.data.bendDirection;
	          constraint.compress = constraint.data.compress;
	          constraint.stretch = constraint.data.stretch;
	        } else {
	          constraint.bendDirection = frames[i + 3];
	          constraint.compress = frames[i + 4] != 0;
	          constraint.stretch = frames[i + 5] != 0;
	        }
	      } else {
	        constraint.mix += (mix - constraint.mix) * alpha;
	        constraint.softness += (softness - constraint.softness) * alpha;
	        if (direction == MixDirection.mixIn) {
	          constraint.bendDirection = frames[i + 3];
	          constraint.compress = frames[i + 4] != 0;
	          constraint.stretch = frames[i + 5] != 0;
	        }
	      }
	    }
	  }]);
	}(CurveTimeline);
	var TransformConstraintTimeline = function (_CurveTimeline20) {
	  function TransformConstraintTimeline(frameCount, bezierCount, transformConstraintIndex) {
	    var _this23;
	    _classCallCheck(this, TransformConstraintTimeline);
	    _this23 = _callSuper$d(this, TransformConstraintTimeline, [frameCount, bezierCount, [Property.transformConstraint + "|" + transformConstraintIndex]]);
	    _this23.transformConstraintIndex = 0;
	    _this23.transformConstraintIndex = transformConstraintIndex;
	    return _this23;
	  }
	  _inherits(TransformConstraintTimeline, _CurveTimeline20);
	  return _createClass(TransformConstraintTimeline, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 7;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY) {
	      var frames = this.frames;
	      frame *= 7;
	      frames[frame] = time;
	      frames[frame + 1] = mixRotate;
	      frames[frame + 2] = mixX;
	      frames[frame + 3] = mixY;
	      frames[frame + 4] = mixScaleX;
	      frames[frame + 5] = mixScaleY;
	      frames[frame + 6] = mixShearY;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
	      var constraint = skeleton.transformConstraints[this.transformConstraintIndex];
	      if (!constraint.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        var data = constraint.data;
	        switch (blend) {
	          case MixBlend.setup:
	            constraint.mixRotate = data.mixRotate;
	            constraint.mixX = data.mixX;
	            constraint.mixY = data.mixY;
	            constraint.mixScaleX = data.mixScaleX;
	            constraint.mixScaleY = data.mixScaleY;
	            constraint.mixShearY = data.mixShearY;
	            return;
	          case MixBlend.first:
	            constraint.mixRotate += (data.mixRotate - constraint.mixRotate) * alpha;
	            constraint.mixX += (data.mixX - constraint.mixX) * alpha;
	            constraint.mixY += (data.mixY - constraint.mixY) * alpha;
	            constraint.mixScaleX += (data.mixScaleX - constraint.mixScaleX) * alpha;
	            constraint.mixScaleY += (data.mixScaleY - constraint.mixScaleY) * alpha;
	            constraint.mixShearY += (data.mixShearY - constraint.mixShearY) * alpha;
	        }
	        return;
	      }
	      var rotate, x, y, scaleX, scaleY, shearY;
	      var i = Timeline.search(frames, time, 7);
	      var curveType = this.curves[i / 7];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          rotate = frames[i + 1];
	          x = frames[i + 2];
	          y = frames[i + 3];
	          scaleX = frames[i + 4];
	          scaleY = frames[i + 5];
	          shearY = frames[i + 6];
	          var t = (time - before) / (frames[i + 7] - before);
	          rotate += (frames[i + 7 + 1] - rotate) * t;
	          x += (frames[i + 7 + 2] - x) * t;
	          y += (frames[i + 7 + 3] - y) * t;
	          scaleX += (frames[i + 7 + 4] - scaleX) * t;
	          scaleY += (frames[i + 7 + 5] - scaleY) * t;
	          shearY += (frames[i + 7 + 6] - shearY) * t;
	          break;
	        case 1:
	          rotate = frames[i + 1];
	          x = frames[i + 2];
	          y = frames[i + 3];
	          scaleX = frames[i + 4];
	          scaleY = frames[i + 5];
	          shearY = frames[i + 6];
	          break;
	        default:
	          rotate = this.getBezierValue(time, i, 1, curveType - 2);
	          x = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	          y = this.getBezierValue(time, i, 3, curveType + 18 * 2 - 2);
	          scaleX = this.getBezierValue(time, i, 4, curveType + 18 * 3 - 2);
	          scaleY = this.getBezierValue(time, i, 5, curveType + 18 * 4 - 2);
	          shearY = this.getBezierValue(time, i, 6, curveType + 18 * 5 - 2);
	      }
	      if (blend == MixBlend.setup) {
	        var _data = constraint.data;
	        constraint.mixRotate = _data.mixRotate + (rotate - _data.mixRotate) * alpha;
	        constraint.mixX = _data.mixX + (x - _data.mixX) * alpha;
	        constraint.mixY = _data.mixY + (y - _data.mixY) * alpha;
	        constraint.mixScaleX = _data.mixScaleX + (scaleX - _data.mixScaleX) * alpha;
	        constraint.mixScaleY = _data.mixScaleY + (scaleY - _data.mixScaleY) * alpha;
	        constraint.mixShearY = _data.mixShearY + (shearY - _data.mixShearY) * alpha;
	      } else {
	        constraint.mixRotate += (rotate - constraint.mixRotate) * alpha;
	        constraint.mixX += (x - constraint.mixX) * alpha;
	        constraint.mixY += (y - constraint.mixY) * alpha;
	        constraint.mixScaleX += (scaleX - constraint.mixScaleX) * alpha;
	        constraint.mixScaleY += (scaleY - constraint.mixScaleY) * alpha;
	        constraint.mixShearY += (shearY - constraint.mixShearY) * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline);
	var PathConstraintPositionTimeline = function (_CurveTimeline21) {
	  function PathConstraintPositionTimeline(frameCount, bezierCount, pathConstraintIndex) {
	    var _this24;
	    _classCallCheck(this, PathConstraintPositionTimeline);
	    _this24 = _callSuper$d(this, PathConstraintPositionTimeline, [frameCount, bezierCount, Property.pathConstraintPosition + "|" + pathConstraintIndex]);
	    _this24.pathConstraintIndex = 0;
	    _this24.pathConstraintIndex = pathConstraintIndex;
	    return _this24;
	  }
	  _inherits(PathConstraintPositionTimeline, _CurveTimeline21);
	  return _createClass(PathConstraintPositionTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
	      var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
	      if (!constraint.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            constraint.position = constraint.data.position;
	            return;
	          case MixBlend.first:
	            constraint.position += (constraint.data.position - constraint.position) * alpha;
	        }
	        return;
	      }
	      var position = this.getCurveValue(time);
	      if (blend == MixBlend.setup) constraint.position = constraint.data.position + (position - constraint.data.position) * alpha;else constraint.position += (position - constraint.position) * alpha;
	    }
	  }]);
	}(CurveTimeline1);
	var PathConstraintSpacingTimeline = function (_CurveTimeline22) {
	  function PathConstraintSpacingTimeline(frameCount, bezierCount, pathConstraintIndex) {
	    var _this25;
	    _classCallCheck(this, PathConstraintSpacingTimeline);
	    _this25 = _callSuper$d(this, PathConstraintSpacingTimeline, [frameCount, bezierCount, Property.pathConstraintSpacing + "|" + pathConstraintIndex]);
	    _this25.pathConstraintIndex = 0;
	    _this25.pathConstraintIndex = pathConstraintIndex;
	    return _this25;
	  }
	  _inherits(PathConstraintSpacingTimeline, _CurveTimeline22);
	  return _createClass(PathConstraintSpacingTimeline, [{
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
	      var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
	      if (!constraint.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            constraint.spacing = constraint.data.spacing;
	            return;
	          case MixBlend.first:
	            constraint.spacing += (constraint.data.spacing - constraint.spacing) * alpha;
	        }
	        return;
	      }
	      var spacing = this.getCurveValue(time);
	      if (blend == MixBlend.setup) constraint.spacing = constraint.data.spacing + (spacing - constraint.data.spacing) * alpha;else constraint.spacing += (spacing - constraint.spacing) * alpha;
	    }
	  }]);
	}(CurveTimeline1);
	var PathConstraintMixTimeline = function (_CurveTimeline23) {
	  function PathConstraintMixTimeline(frameCount, bezierCount, pathConstraintIndex) {
	    var _this26;
	    _classCallCheck(this, PathConstraintMixTimeline);
	    _this26 = _callSuper$d(this, PathConstraintMixTimeline, [frameCount, bezierCount, [Property.pathConstraintMix + "|" + pathConstraintIndex]]);
	    _this26.pathConstraintIndex = 0;
	    _this26.pathConstraintIndex = pathConstraintIndex;
	    return _this26;
	  }
	  _inherits(PathConstraintMixTimeline, _CurveTimeline23);
	  return _createClass(PathConstraintMixTimeline, [{
	    key: "getFrameEntries",
	    value: function getFrameEntries() {
	      return 4;
	    }
	  }, {
	    key: "setFrame",
	    value: function setFrame(frame, time, mixRotate, mixX, mixY) {
	      var frames = this.frames;
	      frame <<= 2;
	      frames[frame] = time;
	      frames[frame + 1] = mixRotate;
	      frames[frame + 2] = mixX;
	      frames[frame + 3] = mixY;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
	      var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
	      if (!constraint.active) return;
	      var frames = this.frames;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            constraint.mixRotate = constraint.data.mixRotate;
	            constraint.mixX = constraint.data.mixX;
	            constraint.mixY = constraint.data.mixY;
	            return;
	          case MixBlend.first:
	            constraint.mixRotate += (constraint.data.mixRotate - constraint.mixRotate) * alpha;
	            constraint.mixX += (constraint.data.mixX - constraint.mixX) * alpha;
	            constraint.mixY += (constraint.data.mixY - constraint.mixY) * alpha;
	        }
	        return;
	      }
	      var rotate, x, y;
	      var i = Timeline.search(frames, time, 4);
	      var curveType = this.curves[i >> 2];
	      switch (curveType) {
	        case 0:
	          var before = frames[i];
	          rotate = frames[i + 1];
	          x = frames[i + 2];
	          y = frames[i + 3];
	          var t = (time - before) / (frames[i + 4] - before);
	          rotate += (frames[i + 4 + 1] - rotate) * t;
	          x += (frames[i + 4 + 2] - x) * t;
	          y += (frames[i + 4 + 3] - y) * t;
	          break;
	        case 1:
	          rotate = frames[i + 1];
	          x = frames[i + 2];
	          y = frames[i + 3];
	          break;
	        default:
	          rotate = this.getBezierValue(time, i, 1, curveType - 2);
	          x = this.getBezierValue(time, i, 2, curveType + 18 - 2);
	          y = this.getBezierValue(time, i, 3, curveType + 18 * 2 - 2);
	      }
	      if (blend == MixBlend.setup) {
	        var data = constraint.data;
	        constraint.mixRotate = data.mixRotate + (rotate - data.mixRotate) * alpha;
	        constraint.mixX = data.mixX + (x - data.mixX) * alpha;
	        constraint.mixY = data.mixY + (y - data.mixY) * alpha;
	      } else {
	        constraint.mixRotate += (rotate - constraint.mixRotate) * alpha;
	        constraint.mixX += (x - constraint.mixX) * alpha;
	        constraint.mixY += (y - constraint.mixY) * alpha;
	      }
	    }
	  }]);
	}(CurveTimeline);

	var AnimationState = function () {
	  function AnimationState(data) {
	    _classCallCheck(this, AnimationState);
	    this.data = null;
	    this.tracks = new Array();
	    this.timeScale = 1;
	    this.unkeyedState = 0;
	    this.events = new Array();
	    this.listeners = new Array();
	    this.queue = new EventQueue(this);
	    this.propertyIDs = new StringSet();
	    this.animationsChanged = false;
	    this.trackEntryPool = new Pool(function () {
	      return new TrackEntry();
	    });
	    this.data = data;
	  }
	  return _createClass(AnimationState, [{
	    key: "update",
	    value: function update(delta) {
	      delta *= this.timeScale;
	      var tracks = this.tracks;
	      for (var i = 0, n = tracks.length; i < n; i++) {
	        var current = tracks[i];
	        if (!current) continue;
	        current.animationLast = current.nextAnimationLast;
	        current.trackLast = current.nextTrackLast;
	        var currentDelta = delta * current.timeScale;
	        if (current.delay > 0) {
	          current.delay -= currentDelta;
	          if (current.delay > 0) continue;
	          currentDelta = -current.delay;
	          current.delay = 0;
	        }
	        var next = current.next;
	        if (next) {
	          var nextTime = current.trackLast - next.delay;
	          if (nextTime >= 0) {
	            next.delay = 0;
	            next.trackTime += current.timeScale == 0 ? 0 : (nextTime / current.timeScale + delta) * next.timeScale;
	            current.trackTime += currentDelta;
	            this.setCurrent(i, next, true);
	            while (next.mixingFrom) {
	              next.mixTime += delta;
	              next = next.mixingFrom;
	            }
	            continue;
	          }
	        } else if (current.trackLast >= current.trackEnd && !current.mixingFrom) {
	          tracks[i] = null;
	          this.queue.end(current);
	          this.clearNext(current);
	          continue;
	        }
	        if (current.mixingFrom && this.updateMixingFrom(current, delta)) {
	          var from = current.mixingFrom;
	          current.mixingFrom = null;
	          if (from) from.mixingTo = null;
	          while (from) {
	            this.queue.end(from);
	            from = from.mixingFrom;
	          }
	        }
	        current.trackTime += currentDelta;
	      }
	      this.queue.drain();
	    }
	  }, {
	    key: "updateMixingFrom",
	    value: function updateMixingFrom(to, delta) {
	      var from = to.mixingFrom;
	      if (!from) return true;
	      var finished = this.updateMixingFrom(from, delta);
	      from.animationLast = from.nextAnimationLast;
	      from.trackLast = from.nextTrackLast;
	      if (to.mixTime > 0 && to.mixTime >= to.mixDuration) {
	        if (from.totalAlpha == 0 || to.mixDuration == 0) {
	          to.mixingFrom = from.mixingFrom;
	          if (from.mixingFrom) from.mixingFrom.mixingTo = to;
	          to.interruptAlpha = from.interruptAlpha;
	          this.queue.end(from);
	        }
	        return finished;
	      }
	      from.trackTime += delta * from.timeScale;
	      to.mixTime += delta;
	      return false;
	    }
	  }, {
	    key: "apply",
	    value: function apply(skeleton) {
	      if (!skeleton) throw new Error("skeleton cannot be null.");
	      if (this.animationsChanged) this._animationsChanged();
	      var events = this.events;
	      var tracks = this.tracks;
	      var applied = false;
	      for (var _i = 0, _n = tracks.length; _i < _n; _i++) {
	        var current = tracks[_i];
	        if (!current || current.delay > 0) continue;
	        applied = true;
	        var blend = _i == 0 ? MixBlend.first : current.mixBlend;
	        var mix = current.alpha;
	        if (current.mixingFrom) mix *= this.applyMixingFrom(current, skeleton, blend);else if (current.trackTime >= current.trackEnd && !current.next) mix = 0;
	        var animationLast = current.animationLast,
	          animationTime = current.getAnimationTime(),
	          applyTime = animationTime;
	        var applyEvents = events;
	        if (current.reverse) {
	          applyTime = current.animation.duration - applyTime;
	          applyEvents = null;
	        }
	        var timelines = current.animation.timelines;
	        var timelineCount = timelines.length;
	        if (_i == 0 && mix == 1 || blend == MixBlend.add) {
	          for (var ii = 0; ii < timelineCount; ii++) {
	            Utils.webkit602BugfixHelper(mix, blend);
	            var timeline = timelines[ii];
	            if (timeline instanceof AttachmentTimeline) this.applyAttachmentTimeline(timeline, skeleton, applyTime, blend, true);else timeline.apply(skeleton, animationLast, applyTime, applyEvents, mix, blend, MixDirection.mixIn);
	          }
	        } else {
	          var timelineMode = current.timelineMode;
	          var firstFrame = current.timelinesRotation.length != timelineCount << 1;
	          if (firstFrame) current.timelinesRotation.length = timelineCount << 1;
	          for (var _ii = 0; _ii < timelineCount; _ii++) {
	            var _timeline = timelines[_ii];
	            var timelineBlend = timelineMode[_ii] == SUBSEQUENT ? blend : MixBlend.setup;
	            if (_timeline instanceof RotateTimeline) {
	              this.applyRotateTimeline(_timeline, skeleton, applyTime, mix, timelineBlend, current.timelinesRotation, _ii << 1, firstFrame);
	            } else if (_timeline instanceof AttachmentTimeline) {
	              this.applyAttachmentTimeline(_timeline, skeleton, applyTime, blend, true);
	            } else {
	              Utils.webkit602BugfixHelper(mix, blend);
	              _timeline.apply(skeleton, animationLast, applyTime, applyEvents, mix, timelineBlend, MixDirection.mixIn);
	            }
	          }
	        }
	        this.queueEvents(current, animationTime);
	        events.length = 0;
	        current.nextAnimationLast = animationTime;
	        current.nextTrackLast = current.trackTime;
	      }
	      var setupState = this.unkeyedState + SETUP;
	      var slots = skeleton.slots;
	      for (var i = 0, n = skeleton.slots.length; i < n; i++) {
	        var slot = slots[i];
	        if (slot.attachmentState == setupState) {
	          var attachmentName = slot.data.attachmentName;
	          slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
	        }
	      }
	      this.unkeyedState += 2;
	      this.queue.drain();
	      return applied;
	    }
	  }, {
	    key: "applyMixingFrom",
	    value: function applyMixingFrom(to, skeleton, blend) {
	      var from = to.mixingFrom;
	      if (from.mixingFrom) this.applyMixingFrom(from, skeleton, blend);
	      var mix = 0;
	      if (to.mixDuration == 0) {
	        mix = 1;
	        if (blend == MixBlend.first) blend = MixBlend.setup;
	      } else {
	        mix = to.mixTime / to.mixDuration;
	        if (mix > 1) mix = 1;
	        if (blend != MixBlend.first) blend = from.mixBlend;
	      }
	      var attachments = mix < from.attachmentThreshold,
	        drawOrder = mix < from.drawOrderThreshold;
	      var timelines = from.animation.timelines;
	      var timelineCount = timelines.length;
	      var alphaHold = from.alpha * to.interruptAlpha,
	        alphaMix = alphaHold * (1 - mix);
	      var animationLast = from.animationLast,
	        animationTime = from.getAnimationTime(),
	        applyTime = animationTime;
	      var events = null;
	      if (from.reverse) applyTime = from.animation.duration - applyTime;else if (mix < from.eventThreshold) events = this.events;
	      if (blend == MixBlend.add) {
	        for (var i = 0; i < timelineCount; i++) timelines[i].apply(skeleton, animationLast, applyTime, events, alphaMix, blend, MixDirection.mixOut);
	      } else {
	        var timelineMode = from.timelineMode;
	        var timelineHoldMix = from.timelineHoldMix;
	        var firstFrame = from.timelinesRotation.length != timelineCount << 1;
	        if (firstFrame) from.timelinesRotation.length = timelineCount << 1;
	        from.totalAlpha = 0;
	        for (var _i2 = 0; _i2 < timelineCount; _i2++) {
	          var timeline = timelines[_i2];
	          var direction = MixDirection.mixOut;
	          var timelineBlend = void 0;
	          var alpha = 0;
	          switch (timelineMode[_i2]) {
	            case SUBSEQUENT:
	              if (!drawOrder && timeline instanceof DrawOrderTimeline) continue;
	              timelineBlend = blend;
	              alpha = alphaMix;
	              break;
	            case FIRST:
	              timelineBlend = MixBlend.setup;
	              alpha = alphaMix;
	              break;
	            case HOLD_SUBSEQUENT:
	              timelineBlend = blend;
	              alpha = alphaHold;
	              break;
	            case HOLD_FIRST:
	              timelineBlend = MixBlend.setup;
	              alpha = alphaHold;
	              break;
	            default:
	              timelineBlend = MixBlend.setup;
	              var holdMix = timelineHoldMix[_i2];
	              alpha = alphaHold * Math.max(0, 1 - holdMix.mixTime / holdMix.mixDuration);
	              break;
	          }
	          from.totalAlpha += alpha;
	          if (timeline instanceof RotateTimeline) this.applyRotateTimeline(timeline, skeleton, applyTime, alpha, timelineBlend, from.timelinesRotation, _i2 << 1, firstFrame);else if (timeline instanceof AttachmentTimeline) this.applyAttachmentTimeline(timeline, skeleton, applyTime, timelineBlend, attachments);else {
	            Utils.webkit602BugfixHelper(alpha, blend);
	            if (drawOrder && timeline instanceof DrawOrderTimeline && timelineBlend == MixBlend.setup) direction = MixDirection.mixIn;
	            timeline.apply(skeleton, animationLast, applyTime, events, alpha, timelineBlend, direction);
	          }
	        }
	      }
	      if (to.mixDuration > 0) this.queueEvents(from, animationTime);
	      this.events.length = 0;
	      from.nextAnimationLast = animationTime;
	      from.nextTrackLast = from.trackTime;
	      return mix;
	    }
	  }, {
	    key: "applyAttachmentTimeline",
	    value: function applyAttachmentTimeline(timeline, skeleton, time, blend, attachments) {
	      var slot = skeleton.slots[timeline.slotIndex];
	      if (!slot.bone.active) return;
	      if (time < timeline.frames[0]) {
	        if (blend == MixBlend.setup || blend == MixBlend.first) this.setAttachment(skeleton, slot, slot.data.attachmentName, attachments);
	      } else this.setAttachment(skeleton, slot, timeline.attachmentNames[Timeline.search1(timeline.frames, time)], attachments);
	      if (slot.attachmentState <= this.unkeyedState) slot.attachmentState = this.unkeyedState + SETUP;
	    }
	  }, {
	    key: "setAttachment",
	    value: function setAttachment(skeleton, slot, attachmentName, attachments) {
	      slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
	      if (attachments) slot.attachmentState = this.unkeyedState + CURRENT;
	    }
	  }, {
	    key: "applyRotateTimeline",
	    value: function applyRotateTimeline(timeline, skeleton, time, alpha, blend, timelinesRotation, i, firstFrame) {
	      if (firstFrame) timelinesRotation[i] = 0;
	      if (alpha == 1) {
	        timeline.apply(skeleton, 0, time, null, 1, blend, MixDirection.mixIn);
	        return;
	      }
	      var bone = skeleton.bones[timeline.boneIndex];
	      if (!bone.active) return;
	      var frames = timeline.frames;
	      var r1 = 0,
	        r2 = 0;
	      if (time < frames[0]) {
	        switch (blend) {
	          case MixBlend.setup:
	            bone.rotation = bone.data.rotation;
	          default:
	            return;
	          case MixBlend.first:
	            r1 = bone.rotation;
	            r2 = bone.data.rotation;
	        }
	      } else {
	        r1 = blend == MixBlend.setup ? bone.data.rotation : bone.rotation;
	        r2 = bone.data.rotation + timeline.getCurveValue(time);
	      }
	      var total = 0,
	        diff = r2 - r1;
	      diff -= (16384 - (16384.499999999996 - diff / 360 | 0)) * 360;
	      if (diff == 0) {
	        total = timelinesRotation[i];
	      } else {
	        var lastTotal = 0,
	          lastDiff = 0;
	        if (firstFrame) {
	          lastTotal = 0;
	          lastDiff = diff;
	        } else {
	          lastTotal = timelinesRotation[i];
	          lastDiff = timelinesRotation[i + 1];
	        }
	        var current = diff > 0,
	          dir = lastTotal >= 0;
	        if (MathUtils.signum(lastDiff) != MathUtils.signum(diff) && Math.abs(lastDiff) <= 90) {
	          if (Math.abs(lastTotal) > 180) lastTotal += 360 * MathUtils.signum(lastTotal);
	          dir = current;
	        }
	        total = diff + lastTotal - lastTotal % 360;
	        if (dir != current) total += 360 * MathUtils.signum(lastTotal);
	        timelinesRotation[i] = total;
	      }
	      timelinesRotation[i + 1] = diff;
	      bone.rotation = r1 + total * alpha;
	    }
	  }, {
	    key: "queueEvents",
	    value: function queueEvents(entry, animationTime) {
	      var animationStart = entry.animationStart,
	        animationEnd = entry.animationEnd;
	      var duration = animationEnd - animationStart;
	      var trackLastWrapped = entry.trackLast % duration;
	      var events = this.events;
	      var i = 0,
	        n = events.length;
	      for (; i < n; i++) {
	        var event = events[i];
	        if (event.time < trackLastWrapped) break;
	        if (event.time > animationEnd) continue;
	        this.queue.event(entry, event);
	      }
	      var complete = false;
	      if (entry.loop) complete = duration == 0 || trackLastWrapped > entry.trackTime % duration;else complete = animationTime >= animationEnd && entry.animationLast < animationEnd;
	      if (complete) this.queue.complete(entry);
	      for (; i < n; i++) {
	        var _event = events[i];
	        if (_event.time < animationStart) continue;
	        this.queue.event(entry, _event);
	      }
	    }
	  }, {
	    key: "clearTracks",
	    value: function clearTracks() {
	      var oldDrainDisabled = this.queue.drainDisabled;
	      this.queue.drainDisabled = true;
	      for (var i = 0, n = this.tracks.length; i < n; i++) this.clearTrack(i);
	      this.tracks.length = 0;
	      this.queue.drainDisabled = oldDrainDisabled;
	      this.queue.drain();
	    }
	  }, {
	    key: "clearTrack",
	    value: function clearTrack(trackIndex) {
	      if (trackIndex >= this.tracks.length) return;
	      var current = this.tracks[trackIndex];
	      if (!current) return;
	      this.queue.end(current);
	      this.clearNext(current);
	      var entry = current;
	      while (true) {
	        var from = entry.mixingFrom;
	        if (!from) break;
	        this.queue.end(from);
	        entry.mixingFrom = null;
	        entry.mixingTo = null;
	        entry = from;
	      }
	      this.tracks[current.trackIndex] = null;
	      this.queue.drain();
	    }
	  }, {
	    key: "setCurrent",
	    value: function setCurrent(index, current, interrupt) {
	      var from = this.expandToIndex(index);
	      this.tracks[index] = current;
	      current.previous = null;
	      if (from) {
	        if (interrupt) this.queue.interrupt(from);
	        current.mixingFrom = from;
	        from.mixingTo = current;
	        current.mixTime = 0;
	        if (from.mixingFrom && from.mixDuration > 0) current.interruptAlpha *= Math.min(1, from.mixTime / from.mixDuration);
	        from.timelinesRotation.length = 0;
	      }
	      this.queue.start(current);
	    }
	  }, {
	    key: "setAnimation",
	    value: function setAnimation(trackIndex, animationName) {
	      var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      var animation = this.data.skeletonData.findAnimation(animationName);
	      if (!animation) throw new Error("Animation not found: " + animationName);
	      return this.setAnimationWith(trackIndex, animation, loop);
	    }
	  }, {
	    key: "setAnimationWith",
	    value: function setAnimationWith(trackIndex, animation) {
	      var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      if (!animation) throw new Error("animation cannot be null.");
	      var interrupt = true;
	      var current = this.expandToIndex(trackIndex);
	      if (current) {
	        if (current.nextTrackLast == -1) {
	          this.tracks[trackIndex] = current.mixingFrom;
	          this.queue.interrupt(current);
	          this.queue.end(current);
	          this.clearNext(current);
	          current = current.mixingFrom;
	          interrupt = false;
	        } else this.clearNext(current);
	      }
	      var entry = this.trackEntry(trackIndex, animation, loop, current);
	      this.setCurrent(trackIndex, entry, interrupt);
	      this.queue.drain();
	      return entry;
	    }
	  }, {
	    key: "addAnimation",
	    value: function addAnimation(trackIndex, animationName) {
	      var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	      var animation = this.data.skeletonData.findAnimation(animationName);
	      if (!animation) throw new Error("Animation not found: " + animationName);
	      return this.addAnimationWith(trackIndex, animation, loop, delay);
	    }
	  }, {
	    key: "addAnimationWith",
	    value: function addAnimationWith(trackIndex, animation) {
	      var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	      if (!animation) throw new Error("animation cannot be null.");
	      var last = this.expandToIndex(trackIndex);
	      if (last) {
	        while (last.next) last = last.next;
	      }
	      var entry = this.trackEntry(trackIndex, animation, loop, last);
	      if (!last) {
	        this.setCurrent(trackIndex, entry, true);
	        this.queue.drain();
	      } else {
	        last.next = entry;
	        entry.previous = last;
	        if (delay <= 0) delay += last.getTrackComplete() - entry.mixDuration;
	      }
	      entry.delay = delay;
	      return entry;
	    }
	  }, {
	    key: "setEmptyAnimation",
	    value: function setEmptyAnimation(trackIndex) {
	      var mixDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var entry = this.setAnimationWith(trackIndex, AnimationState.emptyAnimation(), false);
	      entry.mixDuration = mixDuration;
	      entry.trackEnd = mixDuration;
	      return entry;
	    }
	  }, {
	    key: "addEmptyAnimation",
	    value: function addEmptyAnimation(trackIndex) {
	      var mixDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	      var entry = this.addAnimationWith(trackIndex, AnimationState.emptyAnimation(), false, delay);
	      if (delay <= 0) entry.delay += entry.mixDuration - mixDuration;
	      entry.mixDuration = mixDuration;
	      entry.trackEnd = mixDuration;
	      return entry;
	    }
	  }, {
	    key: "setEmptyAnimations",
	    value: function setEmptyAnimations() {
	      var mixDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var oldDrainDisabled = this.queue.drainDisabled;
	      this.queue.drainDisabled = true;
	      for (var i = 0, n = this.tracks.length; i < n; i++) {
	        var current = this.tracks[i];
	        if (current) this.setEmptyAnimation(current.trackIndex, mixDuration);
	      }
	      this.queue.drainDisabled = oldDrainDisabled;
	      this.queue.drain();
	    }
	  }, {
	    key: "expandToIndex",
	    value: function expandToIndex(index) {
	      if (index < this.tracks.length) return this.tracks[index];
	      Utils.ensureArrayCapacity(this.tracks, index + 1, null);
	      this.tracks.length = index + 1;
	      return null;
	    }
	  }, {
	    key: "trackEntry",
	    value: function trackEntry(trackIndex, animation, loop, last) {
	      var entry = this.trackEntryPool.obtain();
	      entry.reset();
	      entry.trackIndex = trackIndex;
	      entry.animation = animation;
	      entry.loop = loop;
	      entry.holdPrevious = false;
	      entry.eventThreshold = 0;
	      entry.attachmentThreshold = 0;
	      entry.drawOrderThreshold = 0;
	      entry.animationStart = 0;
	      entry.animationEnd = animation.duration;
	      entry.animationLast = -1;
	      entry.nextAnimationLast = -1;
	      entry.delay = 0;
	      entry.trackTime = 0;
	      entry.trackLast = -1;
	      entry.nextTrackLast = -1;
	      entry.trackEnd = Number.MAX_VALUE;
	      entry.timeScale = 1;
	      entry.alpha = 1;
	      entry.interruptAlpha = 1;
	      entry.mixTime = 0;
	      entry.mixDuration = !last ? 0 : this.data.getMix(last.animation, animation);
	      entry.mixBlend = MixBlend.replace;
	      return entry;
	    }
	  }, {
	    key: "clearNext",
	    value: function clearNext(entry) {
	      var next = entry.next;
	      while (next) {
	        this.queue.dispose(next);
	        next = next.next;
	      }
	      entry.next = null;
	    }
	  }, {
	    key: "_animationsChanged",
	    value: function _animationsChanged() {
	      this.animationsChanged = false;
	      this.propertyIDs.clear();
	      var tracks = this.tracks;
	      for (var i = 0, n = tracks.length; i < n; i++) {
	        var entry = tracks[i];
	        if (!entry) continue;
	        while (entry.mixingFrom) entry = entry.mixingFrom;
	        do {
	          if (!entry.mixingTo || entry.mixBlend != MixBlend.add) this.computeHold(entry);
	          entry = entry.mixingTo;
	        } while (entry);
	      }
	    }
	  }, {
	    key: "computeHold",
	    value: function computeHold(entry) {
	      var to = entry.mixingTo;
	      var timelines = entry.animation.timelines;
	      var timelinesCount = entry.animation.timelines.length;
	      var timelineMode = entry.timelineMode;
	      timelineMode.length = timelinesCount;
	      var timelineHoldMix = entry.timelineHoldMix;
	      timelineHoldMix.length = 0;
	      var propertyIDs = this.propertyIDs;
	      if (to && to.holdPrevious) {
	        for (var i = 0; i < timelinesCount; i++) timelineMode[i] = propertyIDs.addAll(timelines[i].getPropertyIds()) ? HOLD_FIRST : HOLD_SUBSEQUENT;
	        return;
	      }
	      outer: for (var _i3 = 0; _i3 < timelinesCount; _i3++) {
	        var timeline = timelines[_i3];
	        var ids = timeline.getPropertyIds();
	        if (!propertyIDs.addAll(ids)) timelineMode[_i3] = SUBSEQUENT;else if (!to || timeline instanceof AttachmentTimeline || timeline instanceof DrawOrderTimeline || timeline instanceof EventTimeline || !to.animation.hasTimeline(ids)) {
	          timelineMode[_i3] = FIRST;
	        } else {
	          for (var next = to.mixingTo; next; next = next.mixingTo) {
	            if (next.animation.hasTimeline(ids)) continue;
	            if (entry.mixDuration > 0) {
	              timelineMode[_i3] = HOLD_MIX;
	              timelineHoldMix[_i3] = next;
	              continue outer;
	            }
	            break;
	          }
	          timelineMode[_i3] = HOLD_FIRST;
	        }
	      }
	    }
	  }, {
	    key: "getCurrent",
	    value: function getCurrent(trackIndex) {
	      if (trackIndex >= this.tracks.length) return null;
	      return this.tracks[trackIndex];
	    }
	  }, {
	    key: "addListener",
	    value: function addListener(listener) {
	      if (!listener) throw new Error("listener cannot be null.");
	      this.listeners.push(listener);
	    }
	  }, {
	    key: "removeListener",
	    value: function removeListener(listener) {
	      var index = this.listeners.indexOf(listener);
	      if (index >= 0) this.listeners.splice(index, 1);
	    }
	  }, {
	    key: "clearListeners",
	    value: function clearListeners() {
	      this.listeners.length = 0;
	    }
	  }, {
	    key: "clearListenerNotifications",
	    value: function clearListenerNotifications() {
	      this.queue.clear();
	    }
	  }], [{
	    key: "emptyAnimation",
	    value: function emptyAnimation() {
	      if (!_emptyAnimation) _emptyAnimation = new Animation("<empty>", [], 0);
	      return _emptyAnimation;
	    }
	  }]);
	}();
	var TrackEntry = function () {
	  function TrackEntry() {
	    _classCallCheck(this, TrackEntry);
	    this.animation = null;
	    this.previous = null;
	    this.next = null;
	    this.mixingFrom = null;
	    this.mixingTo = null;
	    this.listener = null;
	    this.trackIndex = 0;
	    this.loop = false;
	    this.holdPrevious = false;
	    this.reverse = false;
	    this.eventThreshold = 0;
	    this.attachmentThreshold = 0;
	    this.drawOrderThreshold = 0;
	    this.animationStart = 0;
	    this.animationEnd = 0;
	    this.animationLast = 0;
	    this.nextAnimationLast = 0;
	    this.delay = 0;
	    this.trackTime = 0;
	    this.trackLast = 0;
	    this.nextTrackLast = 0;
	    this.trackEnd = 0;
	    this.timeScale = 0;
	    this.alpha = 0;
	    this.mixTime = 0;
	    this.mixDuration = 0;
	    this.interruptAlpha = 0;
	    this.totalAlpha = 0;
	    this.mixBlend = MixBlend.replace;
	    this.timelineMode = new Array();
	    this.timelineHoldMix = new Array();
	    this.timelinesRotation = new Array();
	  }
	  return _createClass(TrackEntry, [{
	    key: "reset",
	    value: function reset() {
	      this.next = null;
	      this.previous = null;
	      this.mixingFrom = null;
	      this.mixingTo = null;
	      this.animation = null;
	      this.listener = null;
	      this.timelineMode.length = 0;
	      this.timelineHoldMix.length = 0;
	      this.timelinesRotation.length = 0;
	    }
	  }, {
	    key: "getAnimationTime",
	    value: function getAnimationTime() {
	      if (this.loop) {
	        var duration = this.animationEnd - this.animationStart;
	        if (duration == 0) return this.animationStart;
	        return this.trackTime % duration + this.animationStart;
	      }
	      return Math.min(this.trackTime + this.animationStart, this.animationEnd);
	    }
	  }, {
	    key: "setAnimationLast",
	    value: function setAnimationLast(animationLast) {
	      this.animationLast = animationLast;
	      this.nextAnimationLast = animationLast;
	    }
	  }, {
	    key: "isComplete",
	    value: function isComplete() {
	      return this.trackTime >= this.animationEnd - this.animationStart;
	    }
	  }, {
	    key: "resetRotationDirections",
	    value: function resetRotationDirections() {
	      this.timelinesRotation.length = 0;
	    }
	  }, {
	    key: "getTrackComplete",
	    value: function getTrackComplete() {
	      var duration = this.animationEnd - this.animationStart;
	      if (duration != 0) {
	        if (this.loop) return duration * (1 + (this.trackTime / duration | 0));
	        if (this.trackTime < duration) return duration;
	      }
	      return this.trackTime;
	    }
	  }]);
	}();
	var EventQueue = function () {
	  function EventQueue(animState) {
	    _classCallCheck(this, EventQueue);
	    this.objects = [];
	    this.drainDisabled = false;
	    this.animState = null;
	    this.animState = animState;
	  }
	  return _createClass(EventQueue, [{
	    key: "start",
	    value: function start(entry) {
	      this.objects.push(EventType.start);
	      this.objects.push(entry);
	      this.animState.animationsChanged = true;
	    }
	  }, {
	    key: "interrupt",
	    value: function interrupt(entry) {
	      this.objects.push(EventType.interrupt);
	      this.objects.push(entry);
	    }
	  }, {
	    key: "end",
	    value: function end(entry) {
	      this.objects.push(EventType.end);
	      this.objects.push(entry);
	      this.animState.animationsChanged = true;
	    }
	  }, {
	    key: "dispose",
	    value: function dispose(entry) {
	      this.objects.push(EventType.dispose);
	      this.objects.push(entry);
	    }
	  }, {
	    key: "complete",
	    value: function complete(entry) {
	      this.objects.push(EventType.complete);
	      this.objects.push(entry);
	    }
	  }, {
	    key: "event",
	    value: function event(entry, _event2) {
	      this.objects.push(EventType.event);
	      this.objects.push(entry);
	      this.objects.push(_event2);
	    }
	  }, {
	    key: "drain",
	    value: function drain() {
	      if (this.drainDisabled) return;
	      this.drainDisabled = true;
	      var objects = this.objects;
	      var listeners = this.animState.listeners;
	      for (var i = 0; i < objects.length; i += 2) {
	        var type = objects[i];
	        var entry = objects[i + 1];
	        switch (type) {
	          case EventType.start:
	            if (entry.listener && entry.listener.start) entry.listener.start(entry);
	            for (var ii = 0; ii < listeners.length; ii++) if (listeners[ii].start) listeners[ii].start(entry);
	            break;
	          case EventType.interrupt:
	            if (entry.listener && entry.listener.interrupt) entry.listener.interrupt(entry);
	            for (var _ii2 = 0; _ii2 < listeners.length; _ii2++) if (listeners[_ii2].interrupt) listeners[_ii2].interrupt(entry);
	            break;
	          case EventType.end:
	            if (entry.listener && entry.listener.end) entry.listener.end(entry);
	            for (var _ii3 = 0; _ii3 < listeners.length; _ii3++) if (listeners[_ii3].end) listeners[_ii3].end(entry);
	          case EventType.dispose:
	            if (entry.listener && entry.listener.dispose) entry.listener.dispose(entry);
	            for (var _ii4 = 0; _ii4 < listeners.length; _ii4++) if (listeners[_ii4].dispose) listeners[_ii4].dispose(entry);
	            this.animState.trackEntryPool.free(entry);
	            break;
	          case EventType.complete:
	            if (entry.listener && entry.listener.complete) entry.listener.complete(entry);
	            for (var _ii5 = 0; _ii5 < listeners.length; _ii5++) if (listeners[_ii5].complete) listeners[_ii5].complete(entry);
	            break;
	          case EventType.event:
	            var event = objects[i++ + 2];
	            if (entry.listener && entry.listener.event) entry.listener.event(entry, event);
	            for (var _ii6 = 0; _ii6 < listeners.length; _ii6++) if (listeners[_ii6].event) listeners[_ii6].event(entry, event);
	            break;
	        }
	      }
	      this.clear();
	      this.drainDisabled = false;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.objects.length = 0;
	    }
	  }]);
	}();
	var EventType;
	(function (EventType) {
	  EventType[EventType["start"] = 0] = "start";
	  EventType[EventType["interrupt"] = 1] = "interrupt";
	  EventType[EventType["end"] = 2] = "end";
	  EventType[EventType["dispose"] = 3] = "dispose";
	  EventType[EventType["complete"] = 4] = "complete";
	  EventType[EventType["event"] = 5] = "event";
	})(EventType || (EventType = {}));
	var AnimationStateAdapter = function () {
	  function AnimationStateAdapter() {
	    _classCallCheck(this, AnimationStateAdapter);
	  }
	  return _createClass(AnimationStateAdapter, [{
	    key: "start",
	    value: function start(entry) {}
	  }, {
	    key: "interrupt",
	    value: function interrupt(entry) {}
	  }, {
	    key: "end",
	    value: function end(entry) {}
	  }, {
	    key: "dispose",
	    value: function dispose(entry) {}
	  }, {
	    key: "complete",
	    value: function complete(entry) {}
	  }, {
	    key: "event",
	    value: function event(entry, _event3) {}
	  }]);
	}();
	var SUBSEQUENT = 0;
	var FIRST = 1;
	var HOLD_SUBSEQUENT = 2;
	var HOLD_FIRST = 3;
	var HOLD_MIX = 4;
	var SETUP = 1;
	var CURRENT = 2;
	var _emptyAnimation = null;

	var AnimationStateData = function () {
	  function AnimationStateData(skeletonData) {
	    _classCallCheck(this, AnimationStateData);
	    this.skeletonData = null;
	    this.animationToMixTime = {};
	    this.defaultMix = 0;
	    if (!skeletonData) throw new Error("skeletonData cannot be null.");
	    this.skeletonData = skeletonData;
	  }
	  return _createClass(AnimationStateData, [{
	    key: "setMix",
	    value: function setMix(fromName, toName, duration) {
	      var from = this.skeletonData.findAnimation(fromName);
	      if (!from) throw new Error("Animation not found: " + fromName);
	      var to = this.skeletonData.findAnimation(toName);
	      if (!to) throw new Error("Animation not found: " + toName);
	      this.setMixWith(from, to, duration);
	    }
	  }, {
	    key: "setMixWith",
	    value: function setMixWith(from, to, duration) {
	      if (!from) throw new Error("from cannot be null.");
	      if (!to) throw new Error("to cannot be null.");
	      var key = from.name + "." + to.name;
	      this.animationToMixTime[key] = duration;
	    }
	  }, {
	    key: "getMix",
	    value: function getMix(from, to) {
	      var key = from.name + "." + to.name;
	      var value = this.animationToMixTime[key];
	      return value === undefined ? this.defaultMix : value;
	    }
	  }]);
	}();

	function _callSuper$c(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var BoundingBoxAttachment = function (_VertexAttachment) {
	  function BoundingBoxAttachment(name) {
	    var _this2;
	    _classCallCheck(this, BoundingBoxAttachment);
	    _this2 = _callSuper$c(this, BoundingBoxAttachment, [name]);
	    _this2.color = new Color(1, 1, 1, 1);
	    return _this2;
	  }
	  _inherits(BoundingBoxAttachment, _VertexAttachment);
	  return _createClass(BoundingBoxAttachment, [{
	    key: "copy",
	    value: function copy() {
	      var copy = new BoundingBoxAttachment(this.name);
	      this.copyTo(copy);
	      copy.color.setFromColor(this.color);
	      return copy;
	    }
	  }]);
	}(VertexAttachment);

	function _callSuper$b(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var ClippingAttachment = function (_VertexAttachment) {
	  function ClippingAttachment(name) {
	    var _this2;
	    _classCallCheck(this, ClippingAttachment);
	    _this2 = _callSuper$b(this, ClippingAttachment, [name]);
	    _this2.endSlot = null;
	    _this2.color = new Color(0.2275, 0.2275, 0.8078, 1);
	    return _this2;
	  }
	  _inherits(ClippingAttachment, _VertexAttachment);
	  return _createClass(ClippingAttachment, [{
	    key: "copy",
	    value: function copy() {
	      var copy = new ClippingAttachment(this.name);
	      this.copyTo(copy);
	      copy.endSlot = this.endSlot;
	      copy.color.setFromColor(this.color);
	      return copy;
	    }
	  }]);
	}(VertexAttachment);

	function _callSuper$a(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var Texture = function () {
	  function Texture(image) {
	    _classCallCheck(this, Texture);
	    this._image = image;
	  }
	  return _createClass(Texture, [{
	    key: "getImage",
	    value: function getImage() {
	      return this._image;
	    }
	  }]);
	}();
	var TextureFilter;
	(function (TextureFilter) {
	  TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
	  TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
	  TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
	  TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
	  TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
	  TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
	  TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear";
	})(TextureFilter || (TextureFilter = {}));
	var TextureWrap;
	(function (TextureWrap) {
	  TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
	  TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
	  TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat";
	})(TextureWrap || (TextureWrap = {}));
	var TextureRegion = _createClass(function TextureRegion() {
	  _classCallCheck(this, TextureRegion);
	  this.u = 0;
	  this.v = 0;
	  this.u2 = 0;
	  this.v2 = 0;
	  this.width = 0;
	  this.height = 0;
	  this.degrees = 0;
	  this.offsetX = 0;
	  this.offsetY = 0;
	  this.originalWidth = 0;
	  this.originalHeight = 0;
	});
	var FakeTexture = function (_Texture) {
	  function FakeTexture() {
	    _classCallCheck(this, FakeTexture);
	    return _callSuper$a(this, FakeTexture, arguments);
	  }
	  _inherits(FakeTexture, _Texture);
	  return _createClass(FakeTexture, [{
	    key: "setFilters",
	    value: function setFilters(minFilter, magFilter) {}
	  }, {
	    key: "setWraps",
	    value: function setWraps(uWrap, vWrap) {}
	  }, {
	    key: "dispose",
	    value: function dispose() {}
	  }]);
	}(Texture);

	function _callSuper$9(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var TextureAtlas = function () {
	  function TextureAtlas(atlasText) {
	    _classCallCheck(this, TextureAtlas);
	    this.pages = new Array();
	    this.regions = new Array();
	    var reader = new TextureAtlasReader(atlasText);
	    var entry = new Array(4);
	    var page = null;
	    var region = null;
	    var pageFields = {};
	    pageFields["size"] = function () {
	      page.width = parseInt(entry[1]);
	      page.height = parseInt(entry[2]);
	    };
	    pageFields["format"] = function () {};
	    pageFields["filter"] = function () {
	      page.minFilter = Utils.enumValue(TextureFilter, entry[1]);
	      page.magFilter = Utils.enumValue(TextureFilter, entry[2]);
	    };
	    pageFields["repeat"] = function () {
	      if (entry[1].indexOf('x') != -1) page.uWrap = TextureWrap.Repeat;
	      if (entry[1].indexOf('y') != -1) page.vWrap = TextureWrap.Repeat;
	    };
	    pageFields["pma"] = function () {
	      page.pma = entry[1] == "true";
	    };
	    var regionFields = {};
	    regionFields["xy"] = function () {
	      region.x = parseInt(entry[1]);
	      region.y = parseInt(entry[2]);
	    };
	    regionFields["size"] = function () {
	      region.width = parseInt(entry[1]);
	      region.height = parseInt(entry[2]);
	    };
	    regionFields["bounds"] = function () {
	      region.x = parseInt(entry[1]);
	      region.y = parseInt(entry[2]);
	      region.width = parseInt(entry[3]);
	      region.height = parseInt(entry[4]);
	    };
	    regionFields["offset"] = function () {
	      region.offsetX = parseInt(entry[1]);
	      region.offsetY = parseInt(entry[2]);
	    };
	    regionFields["orig"] = function () {
	      region.originalWidth = parseInt(entry[1]);
	      region.originalHeight = parseInt(entry[2]);
	    };
	    regionFields["offsets"] = function () {
	      region.offsetX = parseInt(entry[1]);
	      region.offsetY = parseInt(entry[2]);
	      region.originalWidth = parseInt(entry[3]);
	      region.originalHeight = parseInt(entry[4]);
	    };
	    regionFields["rotate"] = function () {
	      var value = entry[1];
	      if (value == "true") region.degrees = 90;else if (value != "false") region.degrees = parseInt(value);
	    };
	    regionFields["index"] = function () {
	      region.index = parseInt(entry[1]);
	    };
	    var line = reader.readLine();
	    while (line && line.trim().length == 0) line = reader.readLine();
	    while (true) {
	      if (!line || line.trim().length == 0) break;
	      if (reader.readEntry(entry, line) == 0) break;
	      line = reader.readLine();
	    }
	    var names = null;
	    var values = null;
	    while (true) {
	      if (line === null) break;
	      if (line.trim().length == 0) {
	        page = null;
	        line = reader.readLine();
	      } else if (!page) {
	        page = new TextureAtlasPage();
	        page.name = line.trim();
	        while (true) {
	          if (reader.readEntry(entry, line = reader.readLine()) == 0) break;
	          var field = pageFields[entry[0]];
	          if (field) field();
	        }
	        this.pages.push(page);
	      } else {
	        region = new TextureAtlasRegion();
	        region.page = page;
	        region.name = line;
	        while (true) {
	          var count = reader.readEntry(entry, line = reader.readLine());
	          if (count == 0) break;
	          var _field = regionFields[entry[0]];
	          if (_field) _field();else {
	            if (!names) {
	              names = [];
	              values = [];
	            }
	            names.push(entry[0]);
	            var entryValues = [];
	            for (var i = 0; i < count; i++) entryValues.push(parseInt(entry[i + 1]));
	            values.push(entryValues);
	          }
	        }
	        if (region.originalWidth == 0 && region.originalHeight == 0) {
	          region.originalWidth = region.width;
	          region.originalHeight = region.height;
	        }
	        if (names && names.length > 0) {
	          region.names = names;
	          region.values = values;
	          names = null;
	          values = null;
	        }
	        region.u = region.x / page.width;
	        region.v = region.y / page.height;
	        if (region.degrees == 90) {
	          region.u2 = (region.x + region.height) / page.width;
	          region.v2 = (region.y + region.width) / page.height;
	        } else {
	          region.u2 = (region.x + region.width) / page.width;
	          region.v2 = (region.y + region.height) / page.height;
	        }
	        this.regions.push(region);
	      }
	    }
	  }
	  return _createClass(TextureAtlas, [{
	    key: "findRegion",
	    value: function findRegion(name) {
	      for (var i = 0; i < this.regions.length; i++) {
	        if (this.regions[i].name == name) {
	          return this.regions[i];
	        }
	      }
	      return null;
	    }
	  }, {
	    key: "setTextures",
	    value: function setTextures(assetManager) {
	      var pathPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	      var _iterator = _createForOfIteratorHelper(this.pages),
	        _step;
	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var page = _step.value;
	          page.setTexture(assetManager.get(pathPrefix + page.name));
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	    }
	  }, {
	    key: "dispose",
	    value: function dispose() {
	      for (var i = 0; i < this.pages.length; i++) {
	        this.pages[i].texture.dispose();
	      }
	    }
	  }]);
	}();
	var TextureAtlasReader = function () {
	  function TextureAtlasReader(text) {
	    _classCallCheck(this, TextureAtlasReader);
	    this.lines = null;
	    this.index = 0;
	    this.lines = text.split(/\r\n|\r|\n/);
	  }
	  return _createClass(TextureAtlasReader, [{
	    key: "readLine",
	    value: function readLine() {
	      if (this.index >= this.lines.length) return null;
	      return this.lines[this.index++];
	    }
	  }, {
	    key: "readEntry",
	    value: function readEntry(entry, line) {
	      if (!line) return 0;
	      line = line.trim();
	      if (line.length == 0) return 0;
	      var colon = line.indexOf(':');
	      if (colon == -1) return 0;
	      entry[0] = line.substr(0, colon).trim();
	      for (var i = 1, lastMatch = colon + 1;; i++) {
	        var comma = line.indexOf(',', lastMatch);
	        if (comma == -1) {
	          entry[i] = line.substr(lastMatch).trim();
	          return i;
	        }
	        entry[i] = line.substr(lastMatch, comma - lastMatch).trim();
	        lastMatch = comma + 1;
	        if (i == 4) return 4;
	      }
	    }
	  }]);
	}();
	var TextureAtlasPage = function () {
	  function TextureAtlasPage() {
	    _classCallCheck(this, TextureAtlasPage);
	    this.name = null;
	    this.minFilter = TextureFilter.Nearest;
	    this.magFilter = TextureFilter.Nearest;
	    this.uWrap = TextureWrap.ClampToEdge;
	    this.vWrap = TextureWrap.ClampToEdge;
	    this.texture = null;
	    this.width = 0;
	    this.height = 0;
	    this.pma = false;
	  }
	  return _createClass(TextureAtlasPage, [{
	    key: "setTexture",
	    value: function setTexture(texture) {
	      this.texture = texture;
	      texture.setFilters(this.minFilter, this.magFilter);
	      texture.setWraps(this.uWrap, this.vWrap);
	    }
	  }]);
	}();
	var TextureAtlasRegion = function (_TextureRegion) {
	  function TextureAtlasRegion() {
	    var _this2;
	    _classCallCheck(this, TextureAtlasRegion);
	    _this2 = _callSuper$9(this, TextureAtlasRegion, arguments);
	    _this2.page = null;
	    _this2.name = null;
	    _this2.x = 0;
	    _this2.y = 0;
	    _this2.offsetX = 0;
	    _this2.offsetY = 0;
	    _this2.originalWidth = 0;
	    _this2.originalHeight = 0;
	    _this2.index = 0;
	    _this2.degrees = 0;
	    _this2.names = null;
	    _this2.values = null;
	    return _this2;
	  }
	  _inherits(TextureAtlasRegion, _TextureRegion);
	  return _createClass(TextureAtlasRegion);
	}(TextureRegion);

	function _callSuper$8(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var MeshAttachment = function (_VertexAttachment) {
	  function MeshAttachment(name) {
	    var _this2;
	    _classCallCheck(this, MeshAttachment);
	    _this2 = _callSuper$8(this, MeshAttachment, [name]);
	    _this2.region = null;
	    _this2.path = null;
	    _this2.regionUVs = null;
	    _this2.uvs = null;
	    _this2.triangles = null;
	    _this2.color = new Color(1, 1, 1, 1);
	    _this2.width = 0;
	    _this2.height = 0;
	    _this2.hullLength = 0;
	    _this2.edges = null;
	    _this2.parentMesh = null;
	    _this2.tempColor = new Color(0, 0, 0, 0);
	    return _this2;
	  }
	  _inherits(MeshAttachment, _VertexAttachment);
	  return _createClass(MeshAttachment, [{
	    key: "updateUVs",
	    value: function updateUVs() {
	      var regionUVs = this.regionUVs;
	      if (!this.uvs || this.uvs.length != regionUVs.length) this.uvs = Utils.newFloatArray(regionUVs.length);
	      var uvs = this.uvs;
	      var n = this.uvs.length;
	      var u = this.region.u,
	        v = this.region.v,
	        width = 0,
	        height = 0;
	      if (this.region instanceof TextureAtlasRegion) {
	        var region = this.region,
	          image = region.page.texture.getImage();
	        var textureWidth = image.width,
	          textureHeight = image.height;
	        switch (region.degrees) {
	          case 90:
	            u -= (region.originalHeight - region.offsetY - region.height) / textureWidth;
	            v -= (region.originalWidth - region.offsetX - region.width) / textureHeight;
	            width = region.originalHeight / textureWidth;
	            height = region.originalWidth / textureHeight;
	            for (var i = 0; i < n; i += 2) {
	              uvs[i] = u + regionUVs[i + 1] * width;
	              uvs[i + 1] = v + (1 - regionUVs[i]) * height;
	            }
	            return;
	          case 180:
	            u -= (region.originalWidth - region.offsetX - region.width) / textureWidth;
	            v -= region.offsetY / textureHeight;
	            width = region.originalWidth / textureWidth;
	            height = region.originalHeight / textureHeight;
	            for (var _i = 0; _i < n; _i += 2) {
	              uvs[_i] = u + (1 - regionUVs[_i]) * width;
	              uvs[_i + 1] = v + (1 - regionUVs[_i + 1]) * height;
	            }
	            return;
	          case 270:
	            u -= region.offsetY / textureWidth;
	            v -= region.offsetX / textureHeight;
	            width = region.originalHeight / textureWidth;
	            height = region.originalWidth / textureHeight;
	            for (var _i2 = 0; _i2 < n; _i2 += 2) {
	              uvs[_i2] = u + (1 - regionUVs[_i2 + 1]) * width;
	              uvs[_i2 + 1] = v + regionUVs[_i2] * height;
	            }
	            return;
	        }
	        u -= region.offsetX / textureWidth;
	        v -= (region.originalHeight - region.offsetY - region.height) / textureHeight;
	        width = region.originalWidth / textureWidth;
	        height = region.originalHeight / textureHeight;
	      } else if (!this.region) {
	        u = v = 0;
	        width = height = 1;
	      } else {
	        width = this.region.u2 - u;
	        height = this.region.v2 - v;
	      }
	      for (var _i3 = 0; _i3 < n; _i3 += 2) {
	        uvs[_i3] = u + regionUVs[_i3] * width;
	        uvs[_i3 + 1] = v + regionUVs[_i3 + 1] * height;
	      }
	    }
	  }, {
	    key: "getParentMesh",
	    value: function getParentMesh() {
	      return this.parentMesh;
	    }
	  }, {
	    key: "setParentMesh",
	    value: function setParentMesh(parentMesh) {
	      this.parentMesh = parentMesh;
	      if (parentMesh) {
	        this.bones = parentMesh.bones;
	        this.vertices = parentMesh.vertices;
	        this.worldVerticesLength = parentMesh.worldVerticesLength;
	        this.regionUVs = parentMesh.regionUVs;
	        this.triangles = parentMesh.triangles;
	        this.hullLength = parentMesh.hullLength;
	        this.worldVerticesLength = parentMesh.worldVerticesLength;
	      }
	    }
	  }, {
	    key: "copy",
	    value: function copy() {
	      if (this.parentMesh) return this.newLinkedMesh();
	      var copy = new MeshAttachment(this.name);
	      copy.region = this.region;
	      copy.path = this.path;
	      copy.color.setFromColor(this.color);
	      this.copyTo(copy);
	      copy.regionUVs = new Array(this.regionUVs.length);
	      Utils.arrayCopy(this.regionUVs, 0, copy.regionUVs, 0, this.regionUVs.length);
	      copy.uvs = new Array(this.uvs.length);
	      Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, this.uvs.length);
	      copy.triangles = new Array(this.triangles.length);
	      Utils.arrayCopy(this.triangles, 0, copy.triangles, 0, this.triangles.length);
	      copy.hullLength = this.hullLength;
	      if (this.edges) {
	        copy.edges = new Array(this.edges.length);
	        Utils.arrayCopy(this.edges, 0, copy.edges, 0, this.edges.length);
	      }
	      copy.width = this.width;
	      copy.height = this.height;
	      return copy;
	    }
	  }, {
	    key: "newLinkedMesh",
	    value: function newLinkedMesh() {
	      var copy = new MeshAttachment(this.name);
	      copy.region = this.region;
	      copy.path = this.path;
	      copy.color.setFromColor(this.color);
	      copy.deformAttachment = this.deformAttachment;
	      copy.setParentMesh(this.parentMesh ? this.parentMesh : this);
	      copy.updateUVs();
	      return copy;
	    }
	  }]);
	}(VertexAttachment);

	function _callSuper$7(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var PathAttachment = function (_VertexAttachment) {
	  function PathAttachment(name) {
	    var _this2;
	    _classCallCheck(this, PathAttachment);
	    _this2 = _callSuper$7(this, PathAttachment, [name]);
	    _this2.lengths = null;
	    _this2.closed = false;
	    _this2.constantSpeed = false;
	    _this2.color = new Color(1, 1, 1, 1);
	    return _this2;
	  }
	  _inherits(PathAttachment, _VertexAttachment);
	  return _createClass(PathAttachment, [{
	    key: "copy",
	    value: function copy() {
	      var copy = new PathAttachment(this.name);
	      this.copyTo(copy);
	      copy.lengths = new Array(this.lengths.length);
	      Utils.arrayCopy(this.lengths, 0, copy.lengths, 0, this.lengths.length);
	      copy.closed = closed;
	      copy.constantSpeed = this.constantSpeed;
	      copy.color.setFromColor(this.color);
	      return copy;
	    }
	  }]);
	}(VertexAttachment);

	function _callSuper$6(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var PointAttachment = function (_VertexAttachment) {
	  function PointAttachment(name) {
	    var _this2;
	    _classCallCheck(this, PointAttachment);
	    _this2 = _callSuper$6(this, PointAttachment, [name]);
	    _this2.x = 0;
	    _this2.y = 0;
	    _this2.rotation = 0;
	    _this2.color = new Color(0.38, 0.94, 0, 1);
	    return _this2;
	  }
	  _inherits(PointAttachment, _VertexAttachment);
	  return _createClass(PointAttachment, [{
	    key: "computeWorldPosition",
	    value: function computeWorldPosition(bone, point) {
	      point.x = this.x * bone.a + this.y * bone.b + bone.worldX;
	      point.y = this.x * bone.c + this.y * bone.d + bone.worldY;
	      return point;
	    }
	  }, {
	    key: "computeWorldRotation",
	    value: function computeWorldRotation(bone) {
	      var cos = MathUtils.cosDeg(this.rotation),
	        sin = MathUtils.sinDeg(this.rotation);
	      var x = cos * bone.a + sin * bone.b;
	      var y = cos * bone.c + sin * bone.d;
	      return Math.atan2(y, x) * MathUtils.radDeg;
	    }
	  }, {
	    key: "copy",
	    value: function copy() {
	      var copy = new PointAttachment(this.name);
	      copy.x = this.x;
	      copy.y = this.y;
	      copy.rotation = this.rotation;
	      copy.color.setFromColor(this.color);
	      return copy;
	    }
	  }]);
	}(VertexAttachment);

	function _callSuper$5(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var RegionAttachment = function (_Attachment) {
	  function RegionAttachment(name) {
	    var _this2;
	    _classCallCheck(this, RegionAttachment);
	    _this2 = _callSuper$5(this, RegionAttachment, [name]);
	    _this2.x = 0;
	    _this2.y = 0;
	    _this2.scaleX = 1;
	    _this2.scaleY = 1;
	    _this2.rotation = 0;
	    _this2.width = 0;
	    _this2.height = 0;
	    _this2.color = new Color(1, 1, 1, 1);
	    _this2.path = null;
	    _this2.rendererObject = null;
	    _this2.region = null;
	    _this2.offset = Utils.newFloatArray(8);
	    _this2.uvs = Utils.newFloatArray(8);
	    _this2.tempColor = new Color(1, 1, 1, 1);
	    return _this2;
	  }
	  _inherits(RegionAttachment, _Attachment);
	  return _createClass(RegionAttachment, [{
	    key: "updateOffset",
	    value: function updateOffset() {
	      this.region;
	      var regionScaleX = this.width / this.region.originalWidth * this.scaleX;
	      var regionScaleY = this.height / this.region.originalHeight * this.scaleY;
	      var localX = -this.width / 2 * this.scaleX + this.region.offsetX * regionScaleX;
	      var localY = -this.height / 2 * this.scaleY + this.region.offsetY * regionScaleY;
	      var localX2 = localX + this.region.width * regionScaleX;
	      var localY2 = localY + this.region.height * regionScaleY;
	      var radians = this.rotation * Math.PI / 180;
	      var cos = Math.cos(radians);
	      var sin = Math.sin(radians);
	      var x = this.x,
	        y = this.y;
	      var localXCos = localX * cos + x;
	      var localXSin = localX * sin;
	      var localYCos = localY * cos + y;
	      var localYSin = localY * sin;
	      var localX2Cos = localX2 * cos + x;
	      var localX2Sin = localX2 * sin;
	      var localY2Cos = localY2 * cos + y;
	      var localY2Sin = localY2 * sin;
	      var offset = this.offset;
	      offset[0] = localXCos - localYSin;
	      offset[1] = localYCos + localXSin;
	      offset[2] = localXCos - localY2Sin;
	      offset[3] = localY2Cos + localXSin;
	      offset[4] = localX2Cos - localY2Sin;
	      offset[5] = localY2Cos + localX2Sin;
	      offset[6] = localX2Cos - localYSin;
	      offset[7] = localYCos + localX2Sin;
	    }
	  }, {
	    key: "setRegion",
	    value: function setRegion(region) {
	      this.region = region;
	      var uvs = this.uvs;
	      if (region.degrees == 90) {
	        uvs[2] = region.u;
	        uvs[3] = region.v2;
	        uvs[4] = region.u;
	        uvs[5] = region.v;
	        uvs[6] = region.u2;
	        uvs[7] = region.v;
	        uvs[0] = region.u2;
	        uvs[1] = region.v2;
	      } else {
	        uvs[0] = region.u;
	        uvs[1] = region.v2;
	        uvs[2] = region.u;
	        uvs[3] = region.v;
	        uvs[4] = region.u2;
	        uvs[5] = region.v;
	        uvs[6] = region.u2;
	        uvs[7] = region.v2;
	      }
	    }
	  }, {
	    key: "computeWorldVertices",
	    value: function computeWorldVertices(bone, worldVertices, offset, stride) {
	      var vertexOffset = this.offset;
	      var x = bone.worldX,
	        y = bone.worldY;
	      var a = bone.a,
	        b = bone.b,
	        c = bone.c,
	        d = bone.d;
	      var offsetX = 0,
	        offsetY = 0;
	      offsetX = vertexOffset[0];
	      offsetY = vertexOffset[1];
	      worldVertices[offset] = offsetX * a + offsetY * b + x;
	      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
	      offset += stride;
	      offsetX = vertexOffset[2];
	      offsetY = vertexOffset[3];
	      worldVertices[offset] = offsetX * a + offsetY * b + x;
	      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
	      offset += stride;
	      offsetX = vertexOffset[4];
	      offsetY = vertexOffset[5];
	      worldVertices[offset] = offsetX * a + offsetY * b + x;
	      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
	      offset += stride;
	      offsetX = vertexOffset[6];
	      offsetY = vertexOffset[7];
	      worldVertices[offset] = offsetX * a + offsetY * b + x;
	      worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
	    }
	  }, {
	    key: "copy",
	    value: function copy() {
	      var copy = new RegionAttachment(this.name);
	      copy.region = this.region;
	      copy.rendererObject = this.rendererObject;
	      copy.path = this.path;
	      copy.x = this.x;
	      copy.y = this.y;
	      copy.scaleX = this.scaleX;
	      copy.scaleY = this.scaleY;
	      copy.rotation = this.rotation;
	      copy.width = this.width;
	      copy.height = this.height;
	      Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, 8);
	      Utils.arrayCopy(this.offset, 0, copy.offset, 0, 8);
	      copy.color.setFromColor(this.color);
	      return copy;
	    }
	  }]);
	}(Attachment);
	RegionAttachment.X1 = 0;
	RegionAttachment.Y1 = 1;
	RegionAttachment.C1R = 2;
	RegionAttachment.C1G = 3;
	RegionAttachment.C1B = 4;
	RegionAttachment.C1A = 5;
	RegionAttachment.U1 = 6;
	RegionAttachment.V1 = 7;
	RegionAttachment.X2 = 8;
	RegionAttachment.Y2 = 9;
	RegionAttachment.C2R = 10;
	RegionAttachment.C2G = 11;
	RegionAttachment.C2B = 12;
	RegionAttachment.C2A = 13;
	RegionAttachment.U2 = 14;
	RegionAttachment.V2 = 15;
	RegionAttachment.X3 = 16;
	RegionAttachment.Y3 = 17;
	RegionAttachment.C3R = 18;
	RegionAttachment.C3G = 19;
	RegionAttachment.C3B = 20;
	RegionAttachment.C3A = 21;
	RegionAttachment.U3 = 22;
	RegionAttachment.V3 = 23;
	RegionAttachment.X4 = 24;
	RegionAttachment.Y4 = 25;
	RegionAttachment.C4R = 26;
	RegionAttachment.C4G = 27;
	RegionAttachment.C4B = 28;
	RegionAttachment.C4A = 29;
	RegionAttachment.U4 = 30;
	RegionAttachment.V4 = 31;

	var AtlasAttachmentLoader = function () {
	  function AtlasAttachmentLoader(atlas) {
	    _classCallCheck(this, AtlasAttachmentLoader);
	    this.atlas = null;
	    this.atlas = atlas;
	  }
	  return _createClass(AtlasAttachmentLoader, [{
	    key: "newRegionAttachment",
	    value: function newRegionAttachment(skin, name, path) {
	      var region = this.atlas.findRegion(path);
	      if (!region) throw new Error("Region not found in atlas: " + path + " (region attachment: " + name + ")");
	      region.renderObject = region;
	      var attachment = new RegionAttachment(name);
	      attachment.setRegion(region);
	      return attachment;
	    }
	  }, {
	    key: "newMeshAttachment",
	    value: function newMeshAttachment(skin, name, path) {
	      var region = this.atlas.findRegion(path);
	      if (!region) throw new Error("Region not found in atlas: " + path + " (mesh attachment: " + name + ")");
	      region.renderObject = region;
	      var attachment = new MeshAttachment(name);
	      attachment.region = region;
	      return attachment;
	    }
	  }, {
	    key: "newBoundingBoxAttachment",
	    value: function newBoundingBoxAttachment(skin, name) {
	      return new BoundingBoxAttachment(name);
	    }
	  }, {
	    key: "newPathAttachment",
	    value: function newPathAttachment(skin, name) {
	      return new PathAttachment(name);
	    }
	  }, {
	    key: "newPointAttachment",
	    value: function newPointAttachment(skin, name) {
	      return new PointAttachment(name);
	    }
	  }, {
	    key: "newClippingAttachment",
	    value: function newClippingAttachment(skin, name) {
	      return new ClippingAttachment(name);
	    }
	  }]);
	}();

	var BoneData = _createClass(function BoneData(index, name, parent) {
	  _classCallCheck(this, BoneData);
	  this.index = 0;
	  this.name = null;
	  this.parent = null;
	  this.length = 0;
	  this.x = 0;
	  this.y = 0;
	  this.rotation = 0;
	  this.scaleX = 1;
	  this.scaleY = 1;
	  this.shearX = 0;
	  this.shearY = 0;
	  this.transformMode = TransformMode.Normal;
	  this.skinRequired = false;
	  this.color = new Color();
	  if (index < 0) throw new Error("index must be >= 0.");
	  if (!name) throw new Error("name cannot be null.");
	  this.index = index;
	  this.name = name;
	  this.parent = parent;
	});
	var TransformMode;
	(function (TransformMode) {
	  TransformMode[TransformMode["Normal"] = 0] = "Normal";
	  TransformMode[TransformMode["OnlyTranslation"] = 1] = "OnlyTranslation";
	  TransformMode[TransformMode["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
	  TransformMode[TransformMode["NoScale"] = 3] = "NoScale";
	  TransformMode[TransformMode["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
	})(TransformMode || (TransformMode = {}));

	var Bone = function () {
	  function Bone(data, skeleton, parent) {
	    _classCallCheck(this, Bone);
	    this.data = null;
	    this.skeleton = null;
	    this.parent = null;
	    this.children = new Array();
	    this.x = 0;
	    this.y = 0;
	    this.rotation = 0;
	    this.scaleX = 0;
	    this.scaleY = 0;
	    this.shearX = 0;
	    this.shearY = 0;
	    this.ax = 0;
	    this.ay = 0;
	    this.arotation = 0;
	    this.ascaleX = 0;
	    this.ascaleY = 0;
	    this.ashearX = 0;
	    this.ashearY = 0;
	    this.a = 0;
	    this.b = 0;
	    this.c = 0;
	    this.d = 0;
	    this.worldY = 0;
	    this.worldX = 0;
	    this.sorted = false;
	    this.active = false;
	    if (!data) throw new Error("data cannot be null.");
	    if (!skeleton) throw new Error("skeleton cannot be null.");
	    this.data = data;
	    this.skeleton = skeleton;
	    this.parent = parent;
	    this.setToSetupPose();
	  }
	  return _createClass(Bone, [{
	    key: "isActive",
	    value: function isActive() {
	      return this.active;
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      this.updateWorldTransformWith(this.ax, this.ay, this.arotation, this.ascaleX, this.ascaleY, this.ashearX, this.ashearY);
	    }
	  }, {
	    key: "updateWorldTransform",
	    value: function updateWorldTransform() {
	      this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
	    }
	  }, {
	    key: "updateWorldTransformWith",
	    value: function updateWorldTransformWith(x, y, rotation, scaleX, scaleY, shearX, shearY) {
	      this.ax = x;
	      this.ay = y;
	      this.arotation = rotation;
	      this.ascaleX = scaleX;
	      this.ascaleY = scaleY;
	      this.ashearX = shearX;
	      this.ashearY = shearY;
	      var parent = this.parent;
	      if (!parent) {
	        var skeleton = this.skeleton;
	        var rotationY = rotation + 90 + shearY;
	        var sx = skeleton.scaleX;
	        var sy = skeleton.scaleY;
	        this.a = MathUtils.cosDeg(rotation + shearX) * scaleX * sx;
	        this.b = MathUtils.cosDeg(rotationY) * scaleY * sx;
	        this.c = MathUtils.sinDeg(rotation + shearX) * scaleX * sy;
	        this.d = MathUtils.sinDeg(rotationY) * scaleY * sy;
	        this.worldX = x * sx + skeleton.x;
	        this.worldY = y * sy + skeleton.y;
	        return;
	      }
	      var pa = parent.a,
	        pb = parent.b,
	        pc = parent.c,
	        pd = parent.d;
	      this.worldX = pa * x + pb * y + parent.worldX;
	      this.worldY = pc * x + pd * y + parent.worldY;
	      switch (this.data.transformMode) {
	        case TransformMode.Normal:
	          {
	            var _rotationY = rotation + 90 + shearY;
	            var la = MathUtils.cosDeg(rotation + shearX) * scaleX;
	            var lb = MathUtils.cosDeg(_rotationY) * scaleY;
	            var lc = MathUtils.sinDeg(rotation + shearX) * scaleX;
	            var ld = MathUtils.sinDeg(_rotationY) * scaleY;
	            this.a = pa * la + pb * lc;
	            this.b = pa * lb + pb * ld;
	            this.c = pc * la + pd * lc;
	            this.d = pc * lb + pd * ld;
	            return;
	          }
	        case TransformMode.OnlyTranslation:
	          {
	            var _rotationY2 = rotation + 90 + shearY;
	            this.a = MathUtils.cosDeg(rotation + shearX) * scaleX;
	            this.b = MathUtils.cosDeg(_rotationY2) * scaleY;
	            this.c = MathUtils.sinDeg(rotation + shearX) * scaleX;
	            this.d = MathUtils.sinDeg(_rotationY2) * scaleY;
	            break;
	          }
	        case TransformMode.NoRotationOrReflection:
	          {
	            var s = pa * pa + pc * pc;
	            var prx = 0;
	            if (s > 0.0001) {
	              s = Math.abs(pa * pd - pb * pc) / s;
	              pa /= this.skeleton.scaleX;
	              pc /= this.skeleton.scaleY;
	              pb = pc * s;
	              pd = pa * s;
	              prx = Math.atan2(pc, pa) * MathUtils.radDeg;
	            } else {
	              pa = 0;
	              pc = 0;
	              prx = 90 - Math.atan2(pd, pb) * MathUtils.radDeg;
	            }
	            var rx = rotation + shearX - prx;
	            var ry = rotation + shearY - prx + 90;
	            var _la = MathUtils.cosDeg(rx) * scaleX;
	            var _lb = MathUtils.cosDeg(ry) * scaleY;
	            var _lc = MathUtils.sinDeg(rx) * scaleX;
	            var _ld = MathUtils.sinDeg(ry) * scaleY;
	            this.a = pa * _la - pb * _lc;
	            this.b = pa * _lb - pb * _ld;
	            this.c = pc * _la + pd * _lc;
	            this.d = pc * _lb + pd * _ld;
	            break;
	          }
	        case TransformMode.NoScale:
	        case TransformMode.NoScaleOrReflection:
	          {
	            var cos = MathUtils.cosDeg(rotation);
	            var sin = MathUtils.sinDeg(rotation);
	            var za = (pa * cos + pb * sin) / this.skeleton.scaleX;
	            var zc = (pc * cos + pd * sin) / this.skeleton.scaleY;
	            var _s = Math.sqrt(za * za + zc * zc);
	            if (_s > 0.00001) _s = 1 / _s;
	            za *= _s;
	            zc *= _s;
	            _s = Math.sqrt(za * za + zc * zc);
	            if (this.data.transformMode == TransformMode.NoScale && pa * pd - pb * pc < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0)) _s = -_s;
	            var r = Math.PI / 2 + Math.atan2(zc, za);
	            var zb = Math.cos(r) * _s;
	            var zd = Math.sin(r) * _s;
	            var _la2 = MathUtils.cosDeg(shearX) * scaleX;
	            var _lb2 = MathUtils.cosDeg(90 + shearY) * scaleY;
	            var _lc2 = MathUtils.sinDeg(shearX) * scaleX;
	            var _ld2 = MathUtils.sinDeg(90 + shearY) * scaleY;
	            this.a = za * _la2 + zb * _lc2;
	            this.b = za * _lb2 + zb * _ld2;
	            this.c = zc * _la2 + zd * _lc2;
	            this.d = zc * _lb2 + zd * _ld2;
	            break;
	          }
	      }
	      this.a *= this.skeleton.scaleX;
	      this.b *= this.skeleton.scaleX;
	      this.c *= this.skeleton.scaleY;
	      this.d *= this.skeleton.scaleY;
	    }
	  }, {
	    key: "setToSetupPose",
	    value: function setToSetupPose() {
	      var data = this.data;
	      this.x = data.x;
	      this.y = data.y;
	      this.rotation = data.rotation;
	      this.scaleX = data.scaleX;
	      this.scaleY = data.scaleY;
	      this.shearX = data.shearX;
	      this.shearY = data.shearY;
	    }
	  }, {
	    key: "getWorldRotationX",
	    value: function getWorldRotationX() {
	      return Math.atan2(this.c, this.a) * MathUtils.radDeg;
	    }
	  }, {
	    key: "getWorldRotationY",
	    value: function getWorldRotationY() {
	      return Math.atan2(this.d, this.b) * MathUtils.radDeg;
	    }
	  }, {
	    key: "getWorldScaleX",
	    value: function getWorldScaleX() {
	      return Math.sqrt(this.a * this.a + this.c * this.c);
	    }
	  }, {
	    key: "getWorldScaleY",
	    value: function getWorldScaleY() {
	      return Math.sqrt(this.b * this.b + this.d * this.d);
	    }
	  }, {
	    key: "updateAppliedTransform",
	    value: function updateAppliedTransform() {
	      var parent = this.parent;
	      if (!parent) {
	        this.ax = this.worldX - this.skeleton.x;
	        this.ay = this.worldY - this.skeleton.y;
	        this.arotation = Math.atan2(this.c, this.a) * MathUtils.radDeg;
	        this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c);
	        this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d);
	        this.ashearX = 0;
	        this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * MathUtils.radDeg;
	        return;
	      }
	      var pa = parent.a,
	        pb = parent.b,
	        pc = parent.c,
	        pd = parent.d;
	      var pid = 1 / (pa * pd - pb * pc);
	      var dx = this.worldX - parent.worldX,
	        dy = this.worldY - parent.worldY;
	      this.ax = dx * pd * pid - dy * pb * pid;
	      this.ay = dy * pa * pid - dx * pc * pid;
	      var ia = pid * pd;
	      var id = pid * pa;
	      var ib = pid * pb;
	      var ic = pid * pc;
	      var ra = ia * this.a - ib * this.c;
	      var rb = ia * this.b - ib * this.d;
	      var rc = id * this.c - ic * this.a;
	      var rd = id * this.d - ic * this.b;
	      this.ashearX = 0;
	      this.ascaleX = Math.sqrt(ra * ra + rc * rc);
	      if (this.ascaleX > 0.0001) {
	        var det = ra * rd - rb * rc;
	        this.ascaleY = det / this.ascaleX;
	        this.ashearY = Math.atan2(ra * rb + rc * rd, det) * MathUtils.radDeg;
	        this.arotation = Math.atan2(rc, ra) * MathUtils.radDeg;
	      } else {
	        this.ascaleX = 0;
	        this.ascaleY = Math.sqrt(rb * rb + rd * rd);
	        this.ashearY = 0;
	        this.arotation = 90 - Math.atan2(rd, rb) * MathUtils.radDeg;
	      }
	    }
	  }, {
	    key: "worldToLocal",
	    value: function worldToLocal(world) {
	      var invDet = 1 / (this.a * this.d - this.b * this.c);
	      var x = world.x - this.worldX,
	        y = world.y - this.worldY;
	      world.x = x * this.d * invDet - y * this.b * invDet;
	      world.y = y * this.a * invDet - x * this.c * invDet;
	      return world;
	    }
	  }, {
	    key: "localToWorld",
	    value: function localToWorld(local) {
	      var x = local.x,
	        y = local.y;
	      local.x = x * this.a + y * this.b + this.worldX;
	      local.y = x * this.c + y * this.d + this.worldY;
	      return local;
	    }
	  }, {
	    key: "worldToLocalRotation",
	    value: function worldToLocalRotation(worldRotation) {
	      var sin = MathUtils.sinDeg(worldRotation),
	        cos = MathUtils.cosDeg(worldRotation);
	      return Math.atan2(this.a * sin - this.c * cos, this.d * cos - this.b * sin) * MathUtils.radDeg + this.rotation - this.shearX;
	    }
	  }, {
	    key: "localToWorldRotation",
	    value: function localToWorldRotation(localRotation) {
	      localRotation -= this.rotation - this.shearX;
	      var sin = MathUtils.sinDeg(localRotation),
	        cos = MathUtils.cosDeg(localRotation);
	      return Math.atan2(cos * this.c + sin * this.d, cos * this.a + sin * this.b) * MathUtils.radDeg;
	    }
	  }, {
	    key: "rotateWorld",
	    value: function rotateWorld(degrees) {
	      var a = this.a,
	        b = this.b,
	        c = this.c,
	        d = this.d;
	      var cos = MathUtils.cosDeg(degrees),
	        sin = MathUtils.sinDeg(degrees);
	      this.a = cos * a - sin * c;
	      this.b = cos * b - sin * d;
	      this.c = sin * a + cos * c;
	      this.d = sin * b + cos * d;
	    }
	  }]);
	}();

	var ConstraintData = _createClass(function ConstraintData(name, order, skinRequired) {
	  _classCallCheck(this, ConstraintData);
	  this.name = name;
	  this.order = order;
	  this.skinRequired = skinRequired;
	});

	var AssetManagerBase = function () {
	  function AssetManagerBase(textureLoader) {
	    var pathPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	    var downloader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    _classCallCheck(this, AssetManagerBase);
	    this.pathPrefix = null;
	    this.assets = {};
	    this.errors = {};
	    this.toLoad = 0;
	    this.loaded = 0;
	    this.textureLoader = textureLoader;
	    this.pathPrefix = pathPrefix;
	    this.downloader = downloader || new Downloader();
	  }
	  return _createClass(AssetManagerBase, [{
	    key: "start",
	    value: function start(path) {
	      this.toLoad++;
	      return this.pathPrefix + path;
	    }
	  }, {
	    key: "success",
	    value: function success(callback, path, asset) {
	      this.toLoad--;
	      this.loaded++;
	      this.assets[path] = asset;
	      if (callback) callback(path, asset);
	    }
	  }, {
	    key: "error",
	    value: function error(callback, path, message) {
	      this.toLoad--;
	      this.loaded++;
	      this.errors[path] = message;
	      if (callback) callback(path, message);
	    }
	  }, {
	    key: "loadAll",
	    value: function loadAll() {
	      var _this = this;
	      var promise = new Promise(function (resolve, reject) {
	        var check = function check() {
	          if (_this.isLoadingComplete()) {
	            if (_this.hasErrors()) reject(_this.errors);else resolve(_this);
	            return;
	          }
	          requestAnimationFrame(check);
	        };
	        requestAnimationFrame(check);
	      });
	      return promise;
	    }
	  }, {
	    key: "setRawDataURI",
	    value: function setRawDataURI(path, data) {
	      this.downloader.rawDataUris[this.pathPrefix + path] = data;
	    }
	  }, {
	    key: "loadBinary",
	    value: function loadBinary(path) {
	      var _this2 = this;
	      var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      path = this.start(path);
	      this.downloader.downloadBinary(path, function (data) {
	        _this2.success(success, path, data);
	      }, function (status, responseText) {
	        _this2.error(error, path, "Couldn't load binary ".concat(path, ": status ").concat(status, ", ").concat(responseText));
	      });
	    }
	  }, {
	    key: "loadText",
	    value: function loadText(path) {
	      var _this3 = this;
	      var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      path = this.start(path);
	      this.downloader.downloadText(path, function (data) {
	        _this3.success(success, path, data);
	      }, function (status, responseText) {
	        _this3.error(error, path, "Couldn't load text ".concat(path, ": status ").concat(status, ", ").concat(responseText));
	      });
	    }
	  }, {
	    key: "loadJson",
	    value: function loadJson(path) {
	      var _this4 = this;
	      var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      path = this.start(path);
	      this.downloader.downloadJson(path, function (data) {
	        _this4.success(success, path, data);
	      }, function (status, responseText) {
	        _this4.error(error, path, "Couldn't load JSON ".concat(path, ": status ").concat(status, ", ").concat(responseText));
	      });
	    }
	  }, {
	    key: "loadTexture",
	    value: function loadTexture(path) {
	      var _this5 = this;
	      var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      path = this.start(path);
	      var isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
	      var isWebWorker = !isBrowser;
	      if (isWebWorker) {
	        fetch(path, {
	          mode: "cors"
	        }).then(function (response) {
	          if (response.ok) return response.blob();
	          _this5.error(error, path, "Couldn't load image: ".concat(path));
	          return null;
	        }).then(function (blob) {
	          return blob ? createImageBitmap(blob, {
	            premultiplyAlpha: "none",
	            colorSpaceConversion: "none"
	          }) : null;
	        }).then(function (bitmap) {
	          if (bitmap) _this5.success(success, path, _this5.textureLoader(bitmap));
	        });
	      } else {
	        var image = new Image();
	        image.crossOrigin = "anonymous";
	        image.onload = function () {
	          _this5.success(success, path, _this5.textureLoader(image));
	        };
	        image.onerror = function () {
	          _this5.error(error, path, "Couldn't load image: ".concat(path));
	        };
	        if (this.downloader.rawDataUris[path]) path = this.downloader.rawDataUris[path];
	        image.src = path;
	      }
	    }
	  }, {
	    key: "loadTextureAtlas",
	    value: function loadTextureAtlas(path) {
	      var _this6 = this;
	      var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var fileAlias = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	      var index = path.lastIndexOf("/");
	      var parent = index >= 0 ? path.substring(0, index + 1) : "";
	      path = this.start(path);
	      this.downloader.downloadText(path, function (atlasText) {
	        try {
	          var atlas = new TextureAtlas(atlasText);
	          var toLoad = atlas.pages.length,
	            abort = false;
	          var _iterator = _createForOfIteratorHelper(atlas.pages),
	            _step;
	          try {
	            var _loop = function _loop() {
	              var page = _step.value;
	              _this6.loadTexture(fileAlias == null ? parent + page.name : fileAlias[page.name], function (imagePath, texture) {
	                if (!abort) {
	                  page.setTexture(texture);
	                  if (--toLoad == 0) _this6.success(success, path, atlas);
	                }
	              }, function (imagePath, message) {
	                if (!abort) _this6.error(error, path, "Couldn't load texture atlas ".concat(path, " page image: ").concat(imagePath));
	                abort = true;
	              });
	            };
	            for (_iterator.s(); !(_step = _iterator.n()).done;) {
	              _loop();
	            }
	          } catch (err) {
	            _iterator.e(err);
	          } finally {
	            _iterator.f();
	          }
	        } catch (e) {
	          _this6.error(error, path, "Couldn't parse texture atlas ".concat(path, ": ").concat(e.message));
	        }
	      }, function (status, responseText) {
	        _this6.error(error, path, "Couldn't load texture atlas ".concat(path, ": status ").concat(status, ", ").concat(responseText));
	      });
	    }
	  }, {
	    key: "get",
	    value: function get(path) {
	      return this.assets[this.pathPrefix + path];
	    }
	  }, {
	    key: "require",
	    value: function require(path) {
	      path = this.pathPrefix + path;
	      var asset = this.assets[path];
	      if (asset) return asset;
	      var error = this.errors[path];
	      throw Error("Asset not found: " + path + (error ? "\n" + error : ""));
	    }
	  }, {
	    key: "remove",
	    value: function remove(path) {
	      path = this.pathPrefix + path;
	      var asset = this.assets[path];
	      if (asset.dispose) asset.dispose();
	      delete this.assets[path];
	      return asset;
	    }
	  }, {
	    key: "removeAll",
	    value: function removeAll() {
	      for (var key in this.assets) {
	        var asset = this.assets[key];
	        if (asset.dispose) asset.dispose();
	      }
	      this.assets = {};
	    }
	  }, {
	    key: "isLoadingComplete",
	    value: function isLoadingComplete() {
	      return this.toLoad == 0;
	    }
	  }, {
	    key: "getToLoad",
	    value: function getToLoad() {
	      return this.toLoad;
	    }
	  }, {
	    key: "getLoaded",
	    value: function getLoaded() {
	      return this.loaded;
	    }
	  }, {
	    key: "dispose",
	    value: function dispose() {
	      this.removeAll();
	    }
	  }, {
	    key: "hasErrors",
	    value: function hasErrors() {
	      return Object.keys(this.errors).length > 0;
	    }
	  }, {
	    key: "getErrors",
	    value: function getErrors() {
	      return this.errors;
	    }
	  }]);
	}();
	var Downloader = function () {
	  function Downloader() {
	    _classCallCheck(this, Downloader);
	    this.callbacks = {};
	    this.rawDataUris = {};
	  }
	  return _createClass(Downloader, [{
	    key: "dataUriToString",
	    value: function dataUriToString(dataUri) {
	      if (!dataUri.startsWith("data:")) {
	        throw new Error("Not a data URI.");
	      }
	      var base64Idx = dataUri.indexOf("base64,");
	      if (base64Idx != -1) {
	        base64Idx += "base64,".length;
	        return atob(dataUri.substr(base64Idx));
	      } else {
	        return dataUri.substr(dataUri.indexOf(",") + 1);
	      }
	    }
	  }, {
	    key: "base64ToUint8Array",
	    value: function base64ToUint8Array(base64) {
	      var binary_string = window.atob(base64);
	      var len = binary_string.length;
	      var bytes = new Uint8Array(len);
	      for (var i = 0; i < len; i++) {
	        bytes[i] = binary_string.charCodeAt(i);
	      }
	      return bytes;
	    }
	  }, {
	    key: "dataUriToUint8Array",
	    value: function dataUriToUint8Array(dataUri) {
	      if (!dataUri.startsWith("data:")) {
	        throw new Error("Not a data URI.");
	      }
	      var base64Idx = dataUri.indexOf("base64,");
	      if (base64Idx == -1) throw new Error("Not a binary data URI.");
	      base64Idx += "base64,".length;
	      return this.base64ToUint8Array(dataUri.substr(base64Idx));
	    }
	  }, {
	    key: "downloadText",
	    value: function downloadText(url, success, error) {
	      var _this7 = this;
	      if (this.start(url, success, error)) return;
	      if (this.rawDataUris[url]) {
	        try {
	          var dataUri = this.rawDataUris[url];
	          this.finish(url, 200, this.dataUriToString(dataUri));
	        } catch (e) {
	          this.finish(url, 400, JSON.stringify(e));
	        }
	        return;
	      }
	      var request = new XMLHttpRequest();
	      request.overrideMimeType("text/html");
	      request.open("GET", url, true);
	      var done = function done() {
	        _this7.finish(url, request.status, request.responseText);
	      };
	      request.onload = done;
	      request.onerror = done;
	      request.send();
	    }
	  }, {
	    key: "downloadJson",
	    value: function downloadJson(url, success, error) {
	      this.downloadText(url, function (data) {
	        success(JSON.parse(data));
	      }, error);
	    }
	  }, {
	    key: "downloadBinary",
	    value: function downloadBinary(url, success, error) {
	      var _this8 = this;
	      if (this.start(url, success, error)) return;
	      if (this.rawDataUris[url]) {
	        try {
	          var dataUri = this.rawDataUris[url];
	          this.finish(url, 200, this.dataUriToUint8Array(dataUri));
	        } catch (e) {
	          this.finish(url, 400, JSON.stringify(e));
	        }
	        return;
	      }
	      var request = new XMLHttpRequest();
	      request.open("GET", url, true);
	      request.responseType = "arraybuffer";
	      var onerror = function onerror() {
	        _this8.finish(url, request.status, request.response);
	      };
	      request.onload = function () {
	        if (request.status == 200 || request.status == 0) _this8.finish(url, 200, new Uint8Array(request.response));else onerror();
	      };
	      request.onerror = onerror;
	      request.send();
	    }
	  }, {
	    key: "start",
	    value: function start(url, success, error) {
	      var callbacks = this.callbacks[url];
	      try {
	        if (callbacks) return true;
	        this.callbacks[url] = callbacks = [];
	      } finally {
	        callbacks.push(success, error);
	      }
	    }
	  }, {
	    key: "finish",
	    value: function finish(url, status, data) {
	      var callbacks = this.callbacks[url];
	      delete this.callbacks[url];
	      var args = status == 200 || status == 0 ? [data] : [status, data];
	      for (var i = args.length - 1, n = callbacks.length; i < n; i += 2) callbacks[i].apply(null, args);
	    }
	  }]);
	}();

	var Event = _createClass(function Event(time, data) {
	  _classCallCheck(this, Event);
	  this.data = null;
	  this.intValue = 0;
	  this.floatValue = 0;
	  this.stringValue = null;
	  this.time = 0;
	  this.volume = 0;
	  this.balance = 0;
	  if (!data) throw new Error("data cannot be null.");
	  this.time = time;
	  this.data = data;
	});

	var EventData = _createClass(function EventData(name) {
	  _classCallCheck(this, EventData);
	  this.name = null;
	  this.intValue = 0;
	  this.floatValue = 0;
	  this.stringValue = null;
	  this.audioPath = null;
	  this.volume = 0;
	  this.balance = 0;
	  this.name = name;
	});

	var IkConstraint = function () {
	  function IkConstraint(data, skeleton) {
	    _classCallCheck(this, IkConstraint);
	    this.data = null;
	    this.bones = null;
	    this.target = null;
	    this.bendDirection = 0;
	    this.compress = false;
	    this.stretch = false;
	    this.mix = 1;
	    this.softness = 0;
	    this.active = false;
	    if (!data) throw new Error("data cannot be null.");
	    if (!skeleton) throw new Error("skeleton cannot be null.");
	    this.data = data;
	    this.mix = data.mix;
	    this.softness = data.softness;
	    this.bendDirection = data.bendDirection;
	    this.compress = data.compress;
	    this.stretch = data.stretch;
	    this.bones = new Array();
	    for (var i = 0; i < data.bones.length; i++) this.bones.push(skeleton.findBone(data.bones[i].name));
	    this.target = skeleton.findBone(data.target.name);
	  }
	  return _createClass(IkConstraint, [{
	    key: "isActive",
	    value: function isActive() {
	      return this.active;
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      if (this.mix == 0) return;
	      var target = this.target;
	      var bones = this.bones;
	      switch (bones.length) {
	        case 1:
	          this.apply1(bones[0], target.worldX, target.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
	          break;
	        case 2:
	          this.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.stretch, this.data.uniform, this.softness, this.mix);
	          break;
	      }
	    }
	  }, {
	    key: "apply1",
	    value: function apply1(bone, targetX, targetY, compress, stretch, uniform, alpha) {
	      var p = bone.parent;
	      var pa = p.a,
	        pb = p.b,
	        pc = p.c,
	        pd = p.d;
	      var rotationIK = -bone.ashearX - bone.arotation,
	        tx = 0,
	        ty = 0;
	      switch (bone.data.transformMode) {
	        case TransformMode.OnlyTranslation:
	          tx = targetX - bone.worldX;
	          ty = targetY - bone.worldY;
	          break;
	        case TransformMode.NoRotationOrReflection:
	          var s = Math.abs(pa * pd - pb * pc) / (pa * pa + pc * pc);
	          var sa = pa / bone.skeleton.scaleX;
	          var sc = pc / bone.skeleton.scaleY;
	          pb = -sc * s * bone.skeleton.scaleX;
	          pd = sa * s * bone.skeleton.scaleY;
	          rotationIK += Math.atan2(sc, sa) * MathUtils.radDeg;
	        default:
	          var x = targetX - p.worldX,
	            y = targetY - p.worldY;
	          var d = pa * pd - pb * pc;
	          tx = (x * pd - y * pb) / d - bone.ax;
	          ty = (y * pa - x * pc) / d - bone.ay;
	      }
	      rotationIK += Math.atan2(ty, tx) * MathUtils.radDeg;
	      if (bone.ascaleX < 0) rotationIK += 180;
	      if (rotationIK > 180) rotationIK -= 360;else if (rotationIK < -180) rotationIK += 360;
	      var sx = bone.ascaleX,
	        sy = bone.ascaleY;
	      if (compress || stretch) {
	        switch (bone.data.transformMode) {
	          case TransformMode.NoScale:
	          case TransformMode.NoScaleOrReflection:
	            tx = targetX - bone.worldX;
	            ty = targetY - bone.worldY;
	        }
	        var b = bone.data.length * sx,
	          dd = Math.sqrt(tx * tx + ty * ty);
	        if (compress && dd < b || stretch && dd > b && b > 0.0001) {
	          var _s = (dd / b - 1) * alpha + 1;
	          sx *= _s;
	          if (uniform) sy *= _s;
	        }
	      }
	      bone.updateWorldTransformWith(bone.ax, bone.ay, bone.arotation + rotationIK * alpha, sx, sy, bone.ashearX, bone.ashearY);
	    }
	  }, {
	    key: "apply2",
	    value: function apply2(parent, child, targetX, targetY, bendDir, stretch, uniform, softness, alpha) {
	      var px = parent.ax,
	        py = parent.ay,
	        psx = parent.ascaleX,
	        psy = parent.ascaleY,
	        sx = psx,
	        sy = psy,
	        csx = child.ascaleX;
	      var os1 = 0,
	        os2 = 0,
	        s2 = 0;
	      if (psx < 0) {
	        psx = -psx;
	        os1 = 180;
	        s2 = -1;
	      } else {
	        os1 = 0;
	        s2 = 1;
	      }
	      if (psy < 0) {
	        psy = -psy;
	        s2 = -s2;
	      }
	      if (csx < 0) {
	        csx = -csx;
	        os2 = 180;
	      } else os2 = 0;
	      var cx = child.ax,
	        cy = 0,
	        cwx = 0,
	        cwy = 0,
	        a = parent.a,
	        b = parent.b,
	        c = parent.c,
	        d = parent.d;
	      var u = Math.abs(psx - psy) <= 0.0001;
	      if (!u || stretch) {
	        cy = 0;
	        cwx = a * cx + parent.worldX;
	        cwy = c * cx + parent.worldY;
	      } else {
	        cy = child.ay;
	        cwx = a * cx + b * cy + parent.worldX;
	        cwy = c * cx + d * cy + parent.worldY;
	      }
	      var pp = parent.parent;
	      a = pp.a;
	      b = pp.b;
	      c = pp.c;
	      d = pp.d;
	      var id = 1 / (a * d - b * c),
	        x = cwx - pp.worldX,
	        y = cwy - pp.worldY;
	      var dx = (x * d - y * b) * id - px,
	        dy = (y * a - x * c) * id - py;
	      var l1 = Math.sqrt(dx * dx + dy * dy),
	        l2 = child.data.length * csx,
	        a1,
	        a2;
	      if (l1 < 0.0001) {
	        this.apply1(parent, targetX, targetY, false, stretch, false, alpha);
	        child.updateWorldTransformWith(cx, cy, 0, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
	        return;
	      }
	      x = targetX - pp.worldX;
	      y = targetY - pp.worldY;
	      var tx = (x * d - y * b) * id - px,
	        ty = (y * a - x * c) * id - py;
	      var dd = tx * tx + ty * ty;
	      if (softness != 0) {
	        softness *= psx * (csx + 1) * 0.5;
	        var td = Math.sqrt(dd),
	          sd = td - l1 - l2 * psx + softness;
	        if (sd > 0) {
	          var p = Math.min(1, sd / (softness * 2)) - 1;
	          p = (sd - softness * (1 - p * p)) / td;
	          tx -= p * tx;
	          ty -= p * ty;
	          dd = tx * tx + ty * ty;
	        }
	      }
	      outer: if (u) {
	        l2 *= psx;
	        var cos = (dd - l1 * l1 - l2 * l2) / (2 * l1 * l2);
	        if (cos < -1) {
	          cos = -1;
	          a2 = Math.PI * bendDir;
	        } else if (cos > 1) {
	          cos = 1;
	          a2 = 0;
	          if (stretch) {
	            a = (Math.sqrt(dd) / (l1 + l2) - 1) * alpha + 1;
	            sx *= a;
	            if (uniform) sy *= a;
	          }
	        } else a2 = Math.acos(cos) * bendDir;
	        a = l1 + l2 * cos;
	        b = l2 * Math.sin(a2);
	        a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
	      } else {
	        a = psx * l2;
	        b = psy * l2;
	        var aa = a * a,
	          bb = b * b,
	          ta = Math.atan2(ty, tx);
	        c = bb * l1 * l1 + aa * dd - aa * bb;
	        var c1 = -2 * bb * l1,
	          c2 = bb - aa;
	        d = c1 * c1 - 4 * c2 * c;
	        if (d >= 0) {
	          var q = Math.sqrt(d);
	          if (c1 < 0) q = -q;
	          q = -(c1 + q) * 0.5;
	          var r0 = q / c2,
	            r1 = c / q;
	          var r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
	          if (r * r <= dd) {
	            y = Math.sqrt(dd - r * r) * bendDir;
	            a1 = ta - Math.atan2(y, r);
	            a2 = Math.atan2(y / psy, (r - l1) / psx);
	            break outer;
	          }
	        }
	        var minAngle = MathUtils.PI,
	          minX = l1 - a,
	          minDist = minX * minX,
	          minY = 0;
	        var maxAngle = 0,
	          maxX = l1 + a,
	          maxDist = maxX * maxX,
	          maxY = 0;
	        c = -a * l1 / (aa - bb);
	        if (c >= -1 && c <= 1) {
	          c = Math.acos(c);
	          x = a * Math.cos(c) + l1;
	          y = b * Math.sin(c);
	          d = x * x + y * y;
	          if (d < minDist) {
	            minAngle = c;
	            minDist = d;
	            minX = x;
	            minY = y;
	          }
	          if (d > maxDist) {
	            maxAngle = c;
	            maxDist = d;
	            maxX = x;
	            maxY = y;
	          }
	        }
	        if (dd <= (minDist + maxDist) * 0.5) {
	          a1 = ta - Math.atan2(minY * bendDir, minX);
	          a2 = minAngle * bendDir;
	        } else {
	          a1 = ta - Math.atan2(maxY * bendDir, maxX);
	          a2 = maxAngle * bendDir;
	        }
	      }
	      var os = Math.atan2(cy, cx) * s2;
	      var rotation = parent.arotation;
	      a1 = (a1 - os) * MathUtils.radDeg + os1 - rotation;
	      if (a1 > 180) a1 -= 360;else if (a1 < -180) a1 += 360;
	      parent.updateWorldTransformWith(px, py, rotation + a1 * alpha, sx, sy, 0, 0);
	      rotation = child.arotation;
	      a2 = ((a2 + os) * MathUtils.radDeg - child.ashearX) * s2 + os2 - rotation;
	      if (a2 > 180) a2 -= 360;else if (a2 < -180) a2 += 360;
	      child.updateWorldTransformWith(cx, cy, rotation + a2 * alpha, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
	    }
	  }]);
	}();

	function _callSuper$4(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var IkConstraintData = function (_ConstraintData) {
	  function IkConstraintData(name) {
	    var _this2;
	    _classCallCheck(this, IkConstraintData);
	    _this2 = _callSuper$4(this, IkConstraintData, [name, 0, false]);
	    _this2.bones = new Array();
	    _this2.target = null;
	    _this2.bendDirection = 1;
	    _this2.compress = false;
	    _this2.stretch = false;
	    _this2.uniform = false;
	    _this2.mix = 1;
	    _this2.softness = 0;
	    return _this2;
	  }
	  _inherits(IkConstraintData, _ConstraintData);
	  return _createClass(IkConstraintData);
	}(ConstraintData);

	function _callSuper$3(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var PathConstraintData = function (_ConstraintData) {
	  function PathConstraintData(name) {
	    var _this2;
	    _classCallCheck(this, PathConstraintData);
	    _this2 = _callSuper$3(this, PathConstraintData, [name, 0, false]);
	    _this2.bones = new Array();
	    _this2.target = null;
	    _this2.positionMode = null;
	    _this2.spacingMode = null;
	    _this2.rotateMode = null;
	    _this2.offsetRotation = 0;
	    _this2.position = 0;
	    _this2.spacing = 0;
	    _this2.mixRotate = 0;
	    _this2.mixX = 0;
	    _this2.mixY = 0;
	    return _this2;
	  }
	  _inherits(PathConstraintData, _ConstraintData);
	  return _createClass(PathConstraintData);
	}(ConstraintData);
	var PositionMode;
	(function (PositionMode) {
	  PositionMode[PositionMode["Fixed"] = 0] = "Fixed";
	  PositionMode[PositionMode["Percent"] = 1] = "Percent";
	})(PositionMode || (PositionMode = {}));
	var SpacingMode;
	(function (SpacingMode) {
	  SpacingMode[SpacingMode["Length"] = 0] = "Length";
	  SpacingMode[SpacingMode["Fixed"] = 1] = "Fixed";
	  SpacingMode[SpacingMode["Percent"] = 2] = "Percent";
	  SpacingMode[SpacingMode["Proportional"] = 3] = "Proportional";
	})(SpacingMode || (SpacingMode = {}));
	var RotateMode;
	(function (RotateMode) {
	  RotateMode[RotateMode["Tangent"] = 0] = "Tangent";
	  RotateMode[RotateMode["Chain"] = 1] = "Chain";
	  RotateMode[RotateMode["ChainScale"] = 2] = "ChainScale";
	})(RotateMode || (RotateMode = {}));

	var PathConstraint = function () {
	  function PathConstraint(data, skeleton) {
	    _classCallCheck(this, PathConstraint);
	    this.data = null;
	    this.bones = null;
	    this.target = null;
	    this.position = 0;
	    this.spacing = 0;
	    this.mixRotate = 0;
	    this.mixX = 0;
	    this.mixY = 0;
	    this.spaces = new Array();
	    this.positions = new Array();
	    this.world = new Array();
	    this.curves = new Array();
	    this.lengths = new Array();
	    this.segments = new Array();
	    this.active = false;
	    if (!data) throw new Error("data cannot be null.");
	    if (!skeleton) throw new Error("skeleton cannot be null.");
	    this.data = data;
	    this.bones = new Array();
	    for (var i = 0, n = data.bones.length; i < n; i++) this.bones.push(skeleton.findBone(data.bones[i].name));
	    this.target = skeleton.findSlot(data.target.name);
	    this.position = data.position;
	    this.spacing = data.spacing;
	    this.mixRotate = data.mixRotate;
	    this.mixX = data.mixX;
	    this.mixY = data.mixY;
	  }
	  return _createClass(PathConstraint, [{
	    key: "isActive",
	    value: function isActive() {
	      return this.active;
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      var attachment = this.target.getAttachment();
	      if (!(attachment instanceof PathAttachment)) return;
	      var mixRotate = this.mixRotate,
	        mixX = this.mixX,
	        mixY = this.mixY;
	      if (mixRotate == 0 && mixX == 0 && mixY == 0) return;
	      var data = this.data;
	      var tangents = data.rotateMode == RotateMode.Tangent,
	        scale = data.rotateMode == RotateMode.ChainScale;
	      var bones = this.bones;
	      var boneCount = bones.length,
	        spacesCount = tangents ? boneCount : boneCount + 1;
	      var spaces = Utils.setArraySize(this.spaces, spacesCount),
	        lengths = scale ? this.lengths = Utils.setArraySize(this.lengths, boneCount) : null;
	      var spacing = this.spacing;
	      switch (data.spacingMode) {
	        case SpacingMode.Percent:
	          if (scale) {
	            for (var i = 0, n = spacesCount - 1; i < n; i++) {
	              var bone = bones[i];
	              var setupLength = bone.data.length;
	              if (setupLength < PathConstraint.epsilon) lengths[i] = 0;else {
	                var x = setupLength * bone.a,
	                  y = setupLength * bone.c;
	                lengths[i] = Math.sqrt(x * x + y * y);
	              }
	            }
	          }
	          Utils.arrayFill(spaces, 1, spacesCount, spacing);
	          break;
	        case SpacingMode.Proportional:
	          var sum = 0;
	          for (var _i = 0, _n = spacesCount - 1; _i < _n;) {
	            var _bone = bones[_i];
	            var _setupLength = _bone.data.length;
	            if (_setupLength < PathConstraint.epsilon) {
	              if (scale) lengths[_i] = 0;
	              spaces[++_i] = spacing;
	            } else {
	              var _x = _setupLength * _bone.a,
	                _y = _setupLength * _bone.c;
	              var length = Math.sqrt(_x * _x + _y * _y);
	              if (scale) lengths[_i] = length;
	              spaces[++_i] = length;
	              sum += length;
	            }
	          }
	          if (sum > 0) {
	            sum = spacesCount / sum * spacing;
	            for (var _i2 = 1; _i2 < spacesCount; _i2++) spaces[_i2] *= sum;
	          }
	          break;
	        default:
	          var lengthSpacing = data.spacingMode == SpacingMode.Length;
	          for (var _i3 = 0, _n2 = spacesCount - 1; _i3 < _n2;) {
	            var _bone2 = bones[_i3];
	            var _setupLength2 = _bone2.data.length;
	            if (_setupLength2 < PathConstraint.epsilon) {
	              if (scale) lengths[_i3] = 0;
	              spaces[++_i3] = spacing;
	            } else {
	              var _x2 = _setupLength2 * _bone2.a,
	                _y2 = _setupLength2 * _bone2.c;
	              var _length = Math.sqrt(_x2 * _x2 + _y2 * _y2);
	              if (scale) lengths[_i3] = _length;
	              spaces[++_i3] = (lengthSpacing ? _setupLength2 + spacing : spacing) * _length / _setupLength2;
	            }
	          }
	      }
	      var positions = this.computeWorldPositions(attachment, spacesCount, tangents);
	      var boneX = positions[0],
	        boneY = positions[1],
	        offsetRotation = data.offsetRotation;
	      var tip = false;
	      if (offsetRotation == 0) tip = data.rotateMode == RotateMode.Chain;else {
	        tip = false;
	        var p = this.target.bone;
	        offsetRotation *= p.a * p.d - p.b * p.c > 0 ? MathUtils.degRad : -MathUtils.degRad;
	      }
	      for (var _i4 = 0, _p = 3; _i4 < boneCount; _i4++, _p += 3) {
	        var _bone3 = bones[_i4];
	        _bone3.worldX += (boneX - _bone3.worldX) * mixX;
	        _bone3.worldY += (boneY - _bone3.worldY) * mixY;
	        var _x3 = positions[_p],
	          _y3 = positions[_p + 1],
	          dx = _x3 - boneX,
	          dy = _y3 - boneY;
	        if (scale) {
	          var _length2 = lengths[_i4];
	          if (_length2 != 0) {
	            var s = (Math.sqrt(dx * dx + dy * dy) / _length2 - 1) * mixRotate + 1;
	            _bone3.a *= s;
	            _bone3.c *= s;
	          }
	        }
	        boneX = _x3;
	        boneY = _y3;
	        if (mixRotate > 0) {
	          var a = _bone3.a,
	            b = _bone3.b,
	            c = _bone3.c,
	            d = _bone3.d,
	            r = 0,
	            cos = 0,
	            sin = 0;
	          if (tangents) r = positions[_p - 1];else if (spaces[_i4 + 1] == 0) r = positions[_p + 2];else r = Math.atan2(dy, dx);
	          r -= Math.atan2(c, a);
	          if (tip) {
	            cos = Math.cos(r);
	            sin = Math.sin(r);
	            var _length3 = _bone3.data.length;
	            boneX += (_length3 * (cos * a - sin * c) - dx) * mixRotate;
	            boneY += (_length3 * (sin * a + cos * c) - dy) * mixRotate;
	          } else {
	            r += offsetRotation;
	          }
	          if (r > MathUtils.PI) r -= MathUtils.PI2;else if (r < -MathUtils.PI) r += MathUtils.PI2;
	          r *= mixRotate;
	          cos = Math.cos(r);
	          sin = Math.sin(r);
	          _bone3.a = cos * a - sin * c;
	          _bone3.b = cos * b - sin * d;
	          _bone3.c = sin * a + cos * c;
	          _bone3.d = sin * b + cos * d;
	        }
	        _bone3.updateAppliedTransform();
	      }
	    }
	  }, {
	    key: "computeWorldPositions",
	    value: function computeWorldPositions(path, spacesCount, tangents) {
	      var target = this.target;
	      var position = this.position;
	      var spaces = this.spaces,
	        out = Utils.setArraySize(this.positions, spacesCount * 3 + 2),
	        world = null;
	      var closed = path.closed;
	      var verticesLength = path.worldVerticesLength,
	        curveCount = verticesLength / 6,
	        prevCurve = PathConstraint.NONE;
	      if (!path.constantSpeed) {
	        var lengths = path.lengths;
	        curveCount -= closed ? 1 : 2;
	        var _pathLength = lengths[curveCount];
	        if (this.data.positionMode == PositionMode.Percent) position *= _pathLength;
	        var _multiplier;
	        switch (this.data.spacingMode) {
	          case SpacingMode.Percent:
	            _multiplier = _pathLength;
	            break;
	          case SpacingMode.Proportional:
	            _multiplier = _pathLength / spacesCount;
	            break;
	          default:
	            _multiplier = 1;
	        }
	        world = Utils.setArraySize(this.world, 8);
	        for (var i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
	          var space = spaces[i] * _multiplier;
	          position += space;
	          var p = position;
	          if (closed) {
	            p %= _pathLength;
	            if (p < 0) p += _pathLength;
	            curve = 0;
	          } else if (p < 0) {
	            if (prevCurve != PathConstraint.BEFORE) {
	              prevCurve = PathConstraint.BEFORE;
	              path.computeWorldVertices(target, 2, 4, world, 0, 2);
	            }
	            this.addBeforePosition(p, world, 0, out, o);
	            continue;
	          } else if (p > _pathLength) {
	            if (prevCurve != PathConstraint.AFTER) {
	              prevCurve = PathConstraint.AFTER;
	              path.computeWorldVertices(target, verticesLength - 6, 4, world, 0, 2);
	            }
	            this.addAfterPosition(p - _pathLength, world, 0, out, o);
	            continue;
	          }
	          for (;; curve++) {
	            var length = lengths[curve];
	            if (p > length) continue;
	            if (curve == 0) p /= length;else {
	              var prev = lengths[curve - 1];
	              p = (p - prev) / (length - prev);
	            }
	            break;
	          }
	          if (curve != prevCurve) {
	            prevCurve = curve;
	            if (closed && curve == curveCount) {
	              path.computeWorldVertices(target, verticesLength - 4, 4, world, 0, 2);
	              path.computeWorldVertices(target, 0, 4, world, 4, 2);
	            } else path.computeWorldVertices(target, curve * 6 + 2, 8, world, 0, 2);
	          }
	          this.addCurvePosition(p, world[0], world[1], world[2], world[3], world[4], world[5], world[6], world[7], out, o, tangents || i > 0 && space == 0);
	        }
	        return out;
	      }
	      if (closed) {
	        verticesLength += 2;
	        world = Utils.setArraySize(this.world, verticesLength);
	        path.computeWorldVertices(target, 2, verticesLength - 4, world, 0, 2);
	        path.computeWorldVertices(target, 0, 2, world, verticesLength - 4, 2);
	        world[verticesLength - 2] = world[0];
	        world[verticesLength - 1] = world[1];
	      } else {
	        curveCount--;
	        verticesLength -= 4;
	        world = Utils.setArraySize(this.world, verticesLength);
	        path.computeWorldVertices(target, 2, verticesLength, world, 0, 2);
	      }
	      var curves = Utils.setArraySize(this.curves, curveCount);
	      var pathLength = 0;
	      var x1 = world[0],
	        y1 = world[1],
	        cx1 = 0,
	        cy1 = 0,
	        cx2 = 0,
	        cy2 = 0,
	        x2 = 0,
	        y2 = 0;
	      var tmpx = 0,
	        tmpy = 0,
	        dddfx = 0,
	        dddfy = 0,
	        ddfx = 0,
	        ddfy = 0,
	        dfx = 0,
	        dfy = 0;
	      for (var _i5 = 0, w = 2; _i5 < curveCount; _i5++, w += 6) {
	        cx1 = world[w];
	        cy1 = world[w + 1];
	        cx2 = world[w + 2];
	        cy2 = world[w + 3];
	        x2 = world[w + 4];
	        y2 = world[w + 5];
	        tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
	        tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
	        dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
	        dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
	        ddfx = tmpx * 2 + dddfx;
	        ddfy = tmpy * 2 + dddfy;
	        dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
	        dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
	        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
	        dfx += ddfx;
	        dfy += ddfy;
	        ddfx += dddfx;
	        ddfy += dddfy;
	        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
	        dfx += ddfx;
	        dfy += ddfy;
	        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
	        dfx += ddfx + dddfx;
	        dfy += ddfy + dddfy;
	        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
	        curves[_i5] = pathLength;
	        x1 = x2;
	        y1 = y2;
	      }
	      if (this.data.positionMode == PositionMode.Percent) position *= pathLength;
	      var multiplier;
	      switch (this.data.spacingMode) {
	        case SpacingMode.Percent:
	          multiplier = pathLength;
	          break;
	        case SpacingMode.Proportional:
	          multiplier = pathLength / spacesCount;
	          break;
	        default:
	          multiplier = 1;
	      }
	      var segments = this.segments;
	      var curveLength = 0;
	      for (var _i6 = 0, _o = 0, _curve = 0, segment = 0; _i6 < spacesCount; _i6++, _o += 3) {
	        var _space = spaces[_i6] * multiplier;
	        position += _space;
	        var _p2 = position;
	        if (closed) {
	          _p2 %= pathLength;
	          if (_p2 < 0) _p2 += pathLength;
	          _curve = 0;
	        } else if (_p2 < 0) {
	          this.addBeforePosition(_p2, world, 0, out, _o);
	          continue;
	        } else if (_p2 > pathLength) {
	          this.addAfterPosition(_p2 - pathLength, world, verticesLength - 4, out, _o);
	          continue;
	        }
	        for (;; _curve++) {
	          var _length4 = curves[_curve];
	          if (_p2 > _length4) continue;
	          if (_curve == 0) _p2 /= _length4;else {
	            var _prev = curves[_curve - 1];
	            _p2 = (_p2 - _prev) / (_length4 - _prev);
	          }
	          break;
	        }
	        if (_curve != prevCurve) {
	          prevCurve = _curve;
	          var ii = _curve * 6;
	          x1 = world[ii];
	          y1 = world[ii + 1];
	          cx1 = world[ii + 2];
	          cy1 = world[ii + 3];
	          cx2 = world[ii + 4];
	          cy2 = world[ii + 5];
	          x2 = world[ii + 6];
	          y2 = world[ii + 7];
	          tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
	          tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
	          dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
	          dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
	          ddfx = tmpx * 2 + dddfx;
	          ddfy = tmpy * 2 + dddfy;
	          dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
	          dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
	          curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
	          segments[0] = curveLength;
	          for (ii = 1; ii < 8; ii++) {
	            dfx += ddfx;
	            dfy += ddfy;
	            ddfx += dddfx;
	            ddfy += dddfy;
	            curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
	            segments[ii] = curveLength;
	          }
	          dfx += ddfx;
	          dfy += ddfy;
	          curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
	          segments[8] = curveLength;
	          dfx += ddfx + dddfx;
	          dfy += ddfy + dddfy;
	          curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
	          segments[9] = curveLength;
	          segment = 0;
	        }
	        _p2 *= curveLength;
	        for (;; segment++) {
	          var _length5 = segments[segment];
	          if (_p2 > _length5) continue;
	          if (segment == 0) _p2 /= _length5;else {
	            var _prev2 = segments[segment - 1];
	            _p2 = segment + (_p2 - _prev2) / (_length5 - _prev2);
	          }
	          break;
	        }
	        this.addCurvePosition(_p2 * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, _o, tangents || _i6 > 0 && _space == 0);
	      }
	      return out;
	    }
	  }, {
	    key: "addBeforePosition",
	    value: function addBeforePosition(p, temp, i, out, o) {
	      var x1 = temp[i],
	        y1 = temp[i + 1],
	        dx = temp[i + 2] - x1,
	        dy = temp[i + 3] - y1,
	        r = Math.atan2(dy, dx);
	      out[o] = x1 + p * Math.cos(r);
	      out[o + 1] = y1 + p * Math.sin(r);
	      out[o + 2] = r;
	    }
	  }, {
	    key: "addAfterPosition",
	    value: function addAfterPosition(p, temp, i, out, o) {
	      var x1 = temp[i + 2],
	        y1 = temp[i + 3],
	        dx = x1 - temp[i],
	        dy = y1 - temp[i + 1],
	        r = Math.atan2(dy, dx);
	      out[o] = x1 + p * Math.cos(r);
	      out[o + 1] = y1 + p * Math.sin(r);
	      out[o + 2] = r;
	    }
	  }, {
	    key: "addCurvePosition",
	    value: function addCurvePosition(p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
	      if (p == 0 || isNaN(p)) {
	        out[o] = x1;
	        out[o + 1] = y1;
	        out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
	        return;
	      }
	      var tt = p * p,
	        ttt = tt * p,
	        u = 1 - p,
	        uu = u * u,
	        uuu = uu * u;
	      var ut = u * p,
	        ut3 = ut * 3,
	        uut3 = u * ut3,
	        utt3 = ut3 * p;
	      var x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt,
	        y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
	      out[o] = x;
	      out[o + 1] = y;
	      if (tangents) {
	        if (p < 0.001) out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);else out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
	      }
	    }
	  }]);
	}();
	PathConstraint.NONE = -1;
	PathConstraint.BEFORE = -2;
	PathConstraint.AFTER = -3;
	PathConstraint.epsilon = 0.00001;

	var Slot = function () {
	  function Slot(data, bone) {
	    _classCallCheck(this, Slot);
	    this.data = null;
	    this.bone = null;
	    this.color = null;
	    this.darkColor = null;
	    this.attachment = null;
	    this.attachmentTime = 0;
	    this.attachmentState = 0;
	    this.deform = new Array();
	    if (!data) throw new Error("data cannot be null.");
	    if (!bone) throw new Error("bone cannot be null.");
	    this.data = data;
	    this.bone = bone;
	    this.color = new Color();
	    this.darkColor = !data.darkColor ? null : new Color();
	    this.setToSetupPose();
	  }
	  return _createClass(Slot, [{
	    key: "getSkeleton",
	    value: function getSkeleton() {
	      return this.bone.skeleton;
	    }
	  }, {
	    key: "getAttachment",
	    value: function getAttachment() {
	      return this.attachment;
	    }
	  }, {
	    key: "setAttachment",
	    value: function setAttachment(attachment) {
	      if (this.attachment == attachment) return;
	      if (!(attachment instanceof VertexAttachment) || !(this.attachment instanceof VertexAttachment) || attachment.deformAttachment != this.attachment.deformAttachment) {
	        this.deform.length = 0;
	      }
	      this.attachment = attachment;
	      this.attachmentTime = this.bone.skeleton.time;
	    }
	  }, {
	    key: "setAttachmentTime",
	    value: function setAttachmentTime(time) {
	      this.attachmentTime = this.bone.skeleton.time - time;
	    }
	  }, {
	    key: "getAttachmentTime",
	    value: function getAttachmentTime() {
	      return this.bone.skeleton.time - this.attachmentTime;
	    }
	  }, {
	    key: "setToSetupPose",
	    value: function setToSetupPose() {
	      this.color.setFromColor(this.data.color);
	      if (this.darkColor) this.darkColor.setFromColor(this.data.darkColor);
	      if (!this.data.attachmentName) this.attachment = null;else {
	        this.attachment = null;
	        this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
	      }
	    }
	  }]);
	}();

	var TransformConstraint = function () {
	  function TransformConstraint(data, skeleton) {
	    _classCallCheck(this, TransformConstraint);
	    this.data = null;
	    this.bones = null;
	    this.target = null;
	    this.mixRotate = 0;
	    this.mixX = 0;
	    this.mixY = 0;
	    this.mixScaleX = 0;
	    this.mixScaleY = 0;
	    this.mixShearY = 0;
	    this.temp = new Vector2();
	    this.active = false;
	    if (!data) throw new Error("data cannot be null.");
	    if (!skeleton) throw new Error("skeleton cannot be null.");
	    this.data = data;
	    this.mixRotate = data.mixRotate;
	    this.mixX = data.mixX;
	    this.mixY = data.mixY;
	    this.mixScaleX = data.mixScaleX;
	    this.mixScaleY = data.mixScaleY;
	    this.mixShearY = data.mixShearY;
	    this.bones = new Array();
	    for (var i = 0; i < data.bones.length; i++) this.bones.push(skeleton.findBone(data.bones[i].name));
	    this.target = skeleton.findBone(data.target.name);
	  }
	  return _createClass(TransformConstraint, [{
	    key: "isActive",
	    value: function isActive() {
	      return this.active;
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      if (this.mixRotate == 0 && this.mixX == 0 && this.mixY == 0 && this.mixScaleX == 0 && this.mixScaleX == 0 && this.mixShearY == 0) return;
	      if (this.data.local) {
	        if (this.data.relative) this.applyRelativeLocal();else this.applyAbsoluteLocal();
	      } else {
	        if (this.data.relative) this.applyRelativeWorld();else this.applyAbsoluteWorld();
	      }
	    }
	  }, {
	    key: "applyAbsoluteWorld",
	    value: function applyAbsoluteWorld() {
	      var mixRotate = this.mixRotate,
	        mixX = this.mixX,
	        mixY = this.mixY,
	        mixScaleX = this.mixScaleX,
	        mixScaleY = this.mixScaleY,
	        mixShearY = this.mixShearY;
	      var translate = mixX != 0 || mixY != 0;
	      var target = this.target;
	      var ta = target.a,
	        tb = target.b,
	        tc = target.c,
	        td = target.d;
	      var degRadReflect = ta * td - tb * tc > 0 ? MathUtils.degRad : -MathUtils.degRad;
	      var offsetRotation = this.data.offsetRotation * degRadReflect;
	      var offsetShearY = this.data.offsetShearY * degRadReflect;
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        if (mixRotate != 0) {
	          var a = bone.a,
	            b = bone.b,
	            c = bone.c,
	            d = bone.d;
	          var r = Math.atan2(tc, ta) - Math.atan2(c, a) + offsetRotation;
	          if (r > MathUtils.PI) r -= MathUtils.PI2;else if (r < -MathUtils.PI) r += MathUtils.PI2;
	          r *= mixRotate;
	          var cos = Math.cos(r),
	            sin = Math.sin(r);
	          bone.a = cos * a - sin * c;
	          bone.b = cos * b - sin * d;
	          bone.c = sin * a + cos * c;
	          bone.d = sin * b + cos * d;
	        }
	        if (translate) {
	          var temp = this.temp;
	          target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
	          bone.worldX += (temp.x - bone.worldX) * mixX;
	          bone.worldY += (temp.y - bone.worldY) * mixY;
	        }
	        if (mixScaleX != 0) {
	          var s = Math.sqrt(bone.a * bone.a + bone.c * bone.c);
	          if (s != 0) s = (s + (Math.sqrt(ta * ta + tc * tc) - s + this.data.offsetScaleX) * mixScaleX) / s;
	          bone.a *= s;
	          bone.c *= s;
	        }
	        if (mixScaleY != 0) {
	          var _s = Math.sqrt(bone.b * bone.b + bone.d * bone.d);
	          if (_s != 0) _s = (_s + (Math.sqrt(tb * tb + td * td) - _s + this.data.offsetScaleY) * mixScaleY) / _s;
	          bone.b *= _s;
	          bone.d *= _s;
	        }
	        if (mixShearY > 0) {
	          var _b = bone.b,
	            _d = bone.d;
	          var by = Math.atan2(_d, _b);
	          var _r = Math.atan2(td, tb) - Math.atan2(tc, ta) - (by - Math.atan2(bone.c, bone.a));
	          if (_r > MathUtils.PI) _r -= MathUtils.PI2;else if (_r < -MathUtils.PI) _r += MathUtils.PI2;
	          _r = by + (_r + offsetShearY) * mixShearY;
	          var _s2 = Math.sqrt(_b * _b + _d * _d);
	          bone.b = Math.cos(_r) * _s2;
	          bone.d = Math.sin(_r) * _s2;
	        }
	        bone.updateAppliedTransform();
	      }
	    }
	  }, {
	    key: "applyRelativeWorld",
	    value: function applyRelativeWorld() {
	      var mixRotate = this.mixRotate,
	        mixX = this.mixX,
	        mixY = this.mixY,
	        mixScaleX = this.mixScaleX,
	        mixScaleY = this.mixScaleY,
	        mixShearY = this.mixShearY;
	      var translate = mixX != 0 || mixY != 0;
	      var target = this.target;
	      var ta = target.a,
	        tb = target.b,
	        tc = target.c,
	        td = target.d;
	      var degRadReflect = ta * td - tb * tc > 0 ? MathUtils.degRad : -MathUtils.degRad;
	      var offsetRotation = this.data.offsetRotation * degRadReflect,
	        offsetShearY = this.data.offsetShearY * degRadReflect;
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        if (mixRotate != 0) {
	          var a = bone.a,
	            b = bone.b,
	            c = bone.c,
	            d = bone.d;
	          var r = Math.atan2(tc, ta) + offsetRotation;
	          if (r > MathUtils.PI) r -= MathUtils.PI2;else if (r < -MathUtils.PI) r += MathUtils.PI2;
	          r *= mixRotate;
	          var cos = Math.cos(r),
	            sin = Math.sin(r);
	          bone.a = cos * a - sin * c;
	          bone.b = cos * b - sin * d;
	          bone.c = sin * a + cos * c;
	          bone.d = sin * b + cos * d;
	        }
	        if (translate) {
	          var temp = this.temp;
	          target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
	          bone.worldX += temp.x * mixX;
	          bone.worldY += temp.y * mixY;
	        }
	        if (mixScaleX != 0) {
	          var s = (Math.sqrt(ta * ta + tc * tc) - 1 + this.data.offsetScaleX) * mixScaleX + 1;
	          bone.a *= s;
	          bone.c *= s;
	        }
	        if (mixScaleY != 0) {
	          var _s3 = (Math.sqrt(tb * tb + td * td) - 1 + this.data.offsetScaleY) * mixScaleY + 1;
	          bone.b *= _s3;
	          bone.d *= _s3;
	        }
	        if (mixShearY > 0) {
	          var _r2 = Math.atan2(td, tb) - Math.atan2(tc, ta);
	          if (_r2 > MathUtils.PI) _r2 -= MathUtils.PI2;else if (_r2 < -MathUtils.PI) _r2 += MathUtils.PI2;
	          var _b2 = bone.b,
	            _d2 = bone.d;
	          _r2 = Math.atan2(_d2, _b2) + (_r2 - MathUtils.PI / 2 + offsetShearY) * mixShearY;
	          var _s4 = Math.sqrt(_b2 * _b2 + _d2 * _d2);
	          bone.b = Math.cos(_r2) * _s4;
	          bone.d = Math.sin(_r2) * _s4;
	        }
	        bone.updateAppliedTransform();
	      }
	    }
	  }, {
	    key: "applyAbsoluteLocal",
	    value: function applyAbsoluteLocal() {
	      var mixRotate = this.mixRotate,
	        mixX = this.mixX,
	        mixY = this.mixY,
	        mixScaleX = this.mixScaleX,
	        mixScaleY = this.mixScaleY,
	        mixShearY = this.mixShearY;
	      var target = this.target;
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        var rotation = bone.arotation;
	        if (mixRotate != 0) {
	          var r = target.arotation - rotation + this.data.offsetRotation;
	          r -= (16384 - (16384.499999999996 - r / 360 | 0)) * 360;
	          rotation += r * mixRotate;
	        }
	        var x = bone.ax,
	          y = bone.ay;
	        x += (target.ax - x + this.data.offsetX) * mixX;
	        y += (target.ay - y + this.data.offsetY) * mixY;
	        var scaleX = bone.ascaleX,
	          scaleY = bone.ascaleY;
	        if (mixScaleX != 0 && scaleX != 0) scaleX = (scaleX + (target.ascaleX - scaleX + this.data.offsetScaleX) * mixScaleX) / scaleX;
	        if (mixScaleY != 0 && scaleY != 0) scaleY = (scaleY + (target.ascaleY - scaleY + this.data.offsetScaleY) * mixScaleY) / scaleY;
	        var shearY = bone.ashearY;
	        if (mixShearY != 0) {
	          var _r3 = target.ashearY - shearY + this.data.offsetShearY;
	          _r3 -= (16384 - (16384.499999999996 - _r3 / 360 | 0)) * 360;
	          shearY += _r3 * mixShearY;
	        }
	        bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
	      }
	    }
	  }, {
	    key: "applyRelativeLocal",
	    value: function applyRelativeLocal() {
	      var mixRotate = this.mixRotate,
	        mixX = this.mixX,
	        mixY = this.mixY,
	        mixScaleX = this.mixScaleX,
	        mixScaleY = this.mixScaleY,
	        mixShearY = this.mixShearY;
	      var target = this.target;
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        var rotation = bone.arotation + (target.arotation + this.data.offsetRotation) * mixRotate;
	        var x = bone.ax + (target.ax + this.data.offsetX) * mixX;
	        var y = bone.ay + (target.ay + this.data.offsetY) * mixY;
	        var scaleX = bone.ascaleX * ((target.ascaleX - 1 + this.data.offsetScaleX) * mixScaleX + 1);
	        var scaleY = bone.ascaleY * ((target.ascaleY - 1 + this.data.offsetScaleY) * mixScaleY + 1);
	        var shearY = bone.ashearY + (target.ashearY + this.data.offsetShearY) * mixShearY;
	        bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
	      }
	    }
	  }]);
	}();

	var Skeleton = function () {
	  function Skeleton(data) {
	    _classCallCheck(this, Skeleton);
	    this.data = null;
	    this.bones = null;
	    this.slots = null;
	    this.drawOrder = null;
	    this.ikConstraints = null;
	    this.transformConstraints = null;
	    this.pathConstraints = null;
	    this._updateCache = new Array();
	    this.skin = null;
	    this.color = null;
	    this.time = 0;
	    this.scaleX = 1;
	    this.scaleY = 1;
	    this.x = 0;
	    this.y = 0;
	    if (!data) throw new Error("data cannot be null.");
	    this.data = data;
	    this.bones = new Array();
	    for (var i = 0; i < data.bones.length; i++) {
	      var boneData = data.bones[i];
	      var bone = void 0;
	      if (!boneData.parent) bone = new Bone(boneData, this, null);else {
	        var parent = this.bones[boneData.parent.index];
	        bone = new Bone(boneData, this, parent);
	        parent.children.push(bone);
	      }
	      this.bones.push(bone);
	    }
	    this.slots = new Array();
	    this.drawOrder = new Array();
	    for (var _i = 0; _i < data.slots.length; _i++) {
	      var slotData = data.slots[_i];
	      var _bone = this.bones[slotData.boneData.index];
	      var slot = new Slot(slotData, _bone);
	      this.slots.push(slot);
	      this.drawOrder.push(slot);
	    }
	    this.ikConstraints = new Array();
	    for (var _i2 = 0; _i2 < data.ikConstraints.length; _i2++) {
	      var ikConstraintData = data.ikConstraints[_i2];
	      this.ikConstraints.push(new IkConstraint(ikConstraintData, this));
	    }
	    this.transformConstraints = new Array();
	    for (var _i3 = 0; _i3 < data.transformConstraints.length; _i3++) {
	      var transformConstraintData = data.transformConstraints[_i3];
	      this.transformConstraints.push(new TransformConstraint(transformConstraintData, this));
	    }
	    this.pathConstraints = new Array();
	    for (var _i4 = 0; _i4 < data.pathConstraints.length; _i4++) {
	      var pathConstraintData = data.pathConstraints[_i4];
	      this.pathConstraints.push(new PathConstraint(pathConstraintData, this));
	    }
	    this.color = new Color(1, 1, 1, 1);
	    this.updateCache();
	  }
	  return _createClass(Skeleton, [{
	    key: "updateCache",
	    value: function updateCache() {
	      var updateCache = this._updateCache;
	      updateCache.length = 0;
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        bone.sorted = bone.data.skinRequired;
	        bone.active = !bone.sorted;
	      }
	      if (this.skin) {
	        var skinBones = this.skin.bones;
	        for (var _i5 = 0, _n = this.skin.bones.length; _i5 < _n; _i5++) {
	          var _bone2 = this.bones[skinBones[_i5].index];
	          do {
	            _bone2.sorted = false;
	            _bone2.active = true;
	            _bone2 = _bone2.parent;
	          } while (_bone2);
	        }
	      }
	      var ikConstraints = this.ikConstraints;
	      var transformConstraints = this.transformConstraints;
	      var pathConstraints = this.pathConstraints;
	      var ikCount = ikConstraints.length,
	        transformCount = transformConstraints.length,
	        pathCount = pathConstraints.length;
	      var constraintCount = ikCount + transformCount + pathCount;
	      outer: for (var _i6 = 0; _i6 < constraintCount; _i6++) {
	        for (var ii = 0; ii < ikCount; ii++) {
	          var constraint = ikConstraints[ii];
	          if (constraint.data.order == _i6) {
	            this.sortIkConstraint(constraint);
	            continue outer;
	          }
	        }
	        for (var _ii = 0; _ii < transformCount; _ii++) {
	          var _constraint = transformConstraints[_ii];
	          if (_constraint.data.order == _i6) {
	            this.sortTransformConstraint(_constraint);
	            continue outer;
	          }
	        }
	        for (var _ii2 = 0; _ii2 < pathCount; _ii2++) {
	          var _constraint2 = pathConstraints[_ii2];
	          if (_constraint2.data.order == _i6) {
	            this.sortPathConstraint(_constraint2);
	            continue outer;
	          }
	        }
	      }
	      for (var _i7 = 0, _n2 = bones.length; _i7 < _n2; _i7++) this.sortBone(bones[_i7]);
	    }
	  }, {
	    key: "sortIkConstraint",
	    value: function sortIkConstraint(constraint) {
	      constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, constraint.data, true));
	      if (!constraint.active) return;
	      var target = constraint.target;
	      this.sortBone(target);
	      var constrained = constraint.bones;
	      var parent = constrained[0];
	      this.sortBone(parent);
	      if (constrained.length == 1) {
	        this._updateCache.push(constraint);
	        this.sortReset(parent.children);
	      } else {
	        var child = constrained[constrained.length - 1];
	        this.sortBone(child);
	        this._updateCache.push(constraint);
	        this.sortReset(parent.children);
	        child.sorted = true;
	      }
	    }
	  }, {
	    key: "sortPathConstraint",
	    value: function sortPathConstraint(constraint) {
	      constraint.active = constraint.target.bone.isActive() && (!constraint.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, constraint.data, true));
	      if (!constraint.active) return;
	      var slot = constraint.target;
	      var slotIndex = slot.data.index;
	      var slotBone = slot.bone;
	      if (this.skin) this.sortPathConstraintAttachment(this.skin, slotIndex, slotBone);
	      if (this.data.defaultSkin && this.data.defaultSkin != this.skin) this.sortPathConstraintAttachment(this.data.defaultSkin, slotIndex, slotBone);
	      for (var i = 0, n = this.data.skins.length; i < n; i++) this.sortPathConstraintAttachment(this.data.skins[i], slotIndex, slotBone);
	      var attachment = slot.getAttachment();
	      if (attachment instanceof PathAttachment) this.sortPathConstraintAttachmentWith(attachment, slotBone);
	      var constrained = constraint.bones;
	      var boneCount = constrained.length;
	      for (var _i8 = 0; _i8 < boneCount; _i8++) this.sortBone(constrained[_i8]);
	      this._updateCache.push(constraint);
	      for (var _i9 = 0; _i9 < boneCount; _i9++) this.sortReset(constrained[_i9].children);
	      for (var _i10 = 0; _i10 < boneCount; _i10++) constrained[_i10].sorted = true;
	    }
	  }, {
	    key: "sortTransformConstraint",
	    value: function sortTransformConstraint(constraint) {
	      constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, constraint.data, true));
	      if (!constraint.active) return;
	      this.sortBone(constraint.target);
	      var constrained = constraint.bones;
	      var boneCount = constrained.length;
	      if (constraint.data.local) {
	        for (var i = 0; i < boneCount; i++) {
	          var child = constrained[i];
	          this.sortBone(child.parent);
	          this.sortBone(child);
	        }
	      } else {
	        for (var _i11 = 0; _i11 < boneCount; _i11++) {
	          this.sortBone(constrained[_i11]);
	        }
	      }
	      this._updateCache.push(constraint);
	      for (var _i12 = 0; _i12 < boneCount; _i12++) this.sortReset(constrained[_i12].children);
	      for (var _i13 = 0; _i13 < boneCount; _i13++) constrained[_i13].sorted = true;
	    }
	  }, {
	    key: "sortPathConstraintAttachment",
	    value: function sortPathConstraintAttachment(skin, slotIndex, slotBone) {
	      var attachments = skin.attachments[slotIndex];
	      if (!attachments) return;
	      for (var key in attachments) {
	        this.sortPathConstraintAttachmentWith(attachments[key], slotBone);
	      }
	    }
	  }, {
	    key: "sortPathConstraintAttachmentWith",
	    value: function sortPathConstraintAttachmentWith(attachment, slotBone) {
	      if (!(attachment instanceof PathAttachment)) return;
	      var pathBones = attachment.bones;
	      if (!pathBones) this.sortBone(slotBone);else {
	        var bones = this.bones;
	        for (var i = 0, n = pathBones.length; i < n;) {
	          var nn = pathBones[i++];
	          nn += i;
	          while (i < nn) this.sortBone(bones[pathBones[i++]]);
	        }
	      }
	    }
	  }, {
	    key: "sortBone",
	    value: function sortBone(bone) {
	      if (bone.sorted) return;
	      var parent = bone.parent;
	      if (parent) this.sortBone(parent);
	      bone.sorted = true;
	      this._updateCache.push(bone);
	    }
	  }, {
	    key: "sortReset",
	    value: function sortReset(bones) {
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        if (!bone.active) continue;
	        if (bone.sorted) this.sortReset(bone.children);
	        bone.sorted = false;
	      }
	    }
	  }, {
	    key: "updateWorldTransform",
	    value: function updateWorldTransform() {
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        bone.ax = bone.x;
	        bone.ay = bone.y;
	        bone.arotation = bone.rotation;
	        bone.ascaleX = bone.scaleX;
	        bone.ascaleY = bone.scaleY;
	        bone.ashearX = bone.shearX;
	        bone.ashearY = bone.shearY;
	      }
	      var updateCache = this._updateCache;
	      for (var _i14 = 0, _n3 = updateCache.length; _i14 < _n3; _i14++) updateCache[_i14].update();
	    }
	  }, {
	    key: "updateWorldTransformWith",
	    value: function updateWorldTransformWith(parent) {
	      var rootBone = this.getRootBone();
	      var pa = parent.a,
	        pb = parent.b,
	        pc = parent.c,
	        pd = parent.d;
	      rootBone.worldX = pa * this.x + pb * this.y + parent.worldX;
	      rootBone.worldY = pc * this.x + pd * this.y + parent.worldY;
	      var rotationY = rootBone.rotation + 90 + rootBone.shearY;
	      var la = MathUtils.cosDeg(rootBone.rotation + rootBone.shearX) * rootBone.scaleX;
	      var lb = MathUtils.cosDeg(rotationY) * rootBone.scaleY;
	      var lc = MathUtils.sinDeg(rootBone.rotation + rootBone.shearX) * rootBone.scaleX;
	      var ld = MathUtils.sinDeg(rotationY) * rootBone.scaleY;
	      rootBone.a = (pa * la + pb * lc) * this.scaleX;
	      rootBone.b = (pa * lb + pb * ld) * this.scaleX;
	      rootBone.c = (pc * la + pd * lc) * this.scaleY;
	      rootBone.d = (pc * lb + pd * ld) * this.scaleY;
	      var updateCache = this._updateCache;
	      for (var i = 0, n = updateCache.length; i < n; i++) {
	        var updatable = updateCache[i];
	        if (updatable != rootBone) updatable.update();
	      }
	    }
	  }, {
	    key: "setToSetupPose",
	    value: function setToSetupPose() {
	      this.setBonesToSetupPose();
	      this.setSlotsToSetupPose();
	    }
	  }, {
	    key: "setBonesToSetupPose",
	    value: function setBonesToSetupPose() {
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) bones[i].setToSetupPose();
	      var ikConstraints = this.ikConstraints;
	      for (var _i15 = 0, _n4 = ikConstraints.length; _i15 < _n4; _i15++) {
	        var constraint = ikConstraints[_i15];
	        constraint.mix = constraint.data.mix;
	        constraint.softness = constraint.data.softness;
	        constraint.bendDirection = constraint.data.bendDirection;
	        constraint.compress = constraint.data.compress;
	        constraint.stretch = constraint.data.stretch;
	      }
	      var transformConstraints = this.transformConstraints;
	      for (var _i16 = 0, _n5 = transformConstraints.length; _i16 < _n5; _i16++) {
	        var _constraint3 = transformConstraints[_i16];
	        var data = _constraint3.data;
	        _constraint3.mixRotate = data.mixRotate;
	        _constraint3.mixX = data.mixX;
	        _constraint3.mixY = data.mixY;
	        _constraint3.mixScaleX = data.mixScaleX;
	        _constraint3.mixScaleY = data.mixScaleY;
	        _constraint3.mixShearY = data.mixShearY;
	      }
	      var pathConstraints = this.pathConstraints;
	      for (var _i17 = 0, _n6 = pathConstraints.length; _i17 < _n6; _i17++) {
	        var _constraint4 = pathConstraints[_i17];
	        var _data = _constraint4.data;
	        _constraint4.position = _data.position;
	        _constraint4.spacing = _data.spacing;
	        _constraint4.mixRotate = _data.mixRotate;
	        _constraint4.mixX = _data.mixX;
	        _constraint4.mixY = _data.mixY;
	      }
	    }
	  }, {
	    key: "setSlotsToSetupPose",
	    value: function setSlotsToSetupPose() {
	      var slots = this.slots;
	      Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);
	      for (var i = 0, n = slots.length; i < n; i++) slots[i].setToSetupPose();
	    }
	  }, {
	    key: "getRootBone",
	    value: function getRootBone() {
	      if (this.bones.length == 0) return null;
	      return this.bones[0];
	    }
	  }, {
	    key: "findBone",
	    value: function findBone(boneName) {
	      if (!boneName) throw new Error("boneName cannot be null.");
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        if (bone.data.name == boneName) return bone;
	      }
	      return null;
	    }
	  }, {
	    key: "findSlot",
	    value: function findSlot(slotName) {
	      if (!slotName) throw new Error("slotName cannot be null.");
	      var slots = this.slots;
	      for (var i = 0, n = slots.length; i < n; i++) {
	        var slot = slots[i];
	        if (slot.data.name == slotName) return slot;
	      }
	      return null;
	    }
	  }, {
	    key: "setSkinByName",
	    value: function setSkinByName(skinName) {
	      var skin = this.data.findSkin(skinName);
	      if (!skin) throw new Error("Skin not found: " + skinName);
	      this.setSkin(skin);
	    }
	  }, {
	    key: "setSkin",
	    value: function setSkin(newSkin) {
	      if (newSkin == this.skin) return;
	      if (newSkin) {
	        if (this.skin) newSkin.attachAll(this, this.skin);else {
	          var slots = this.slots;
	          for (var i = 0, n = slots.length; i < n; i++) {
	            var slot = slots[i];
	            var name = slot.data.attachmentName;
	            if (name) {
	              var attachment = newSkin.getAttachment(i, name);
	              if (attachment) slot.setAttachment(attachment);
	            }
	          }
	        }
	      }
	      this.skin = newSkin;
	      this.updateCache();
	    }
	  }, {
	    key: "getAttachmentByName",
	    value: function getAttachmentByName(slotName, attachmentName) {
	      return this.getAttachment(this.data.findSlot(slotName).index, attachmentName);
	    }
	  }, {
	    key: "getAttachment",
	    value: function getAttachment(slotIndex, attachmentName) {
	      if (!attachmentName) throw new Error("attachmentName cannot be null.");
	      if (this.skin) {
	        var attachment = this.skin.getAttachment(slotIndex, attachmentName);
	        if (attachment) return attachment;
	      }
	      if (this.data.defaultSkin) return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
	      return null;
	    }
	  }, {
	    key: "setAttachment",
	    value: function setAttachment(slotName, attachmentName) {
	      if (!slotName) throw new Error("slotName cannot be null.");
	      var slots = this.slots;
	      for (var i = 0, n = slots.length; i < n; i++) {
	        var slot = slots[i];
	        if (slot.data.name == slotName) {
	          var attachment = null;
	          if (attachmentName) {
	            attachment = this.getAttachment(i, attachmentName);
	            if (!attachment) throw new Error("Attachment not found: " + attachmentName + ", for slot: " + slotName);
	          }
	          slot.setAttachment(attachment);
	          return;
	        }
	      }
	      throw new Error("Slot not found: " + slotName);
	    }
	  }, {
	    key: "findIkConstraint",
	    value: function findIkConstraint(constraintName) {
	      if (!constraintName) throw new Error("constraintName cannot be null.");
	      var ikConstraints = this.ikConstraints;
	      for (var i = 0, n = ikConstraints.length; i < n; i++) {
	        var ikConstraint = ikConstraints[i];
	        if (ikConstraint.data.name == constraintName) return ikConstraint;
	      }
	      return null;
	    }
	  }, {
	    key: "findTransformConstraint",
	    value: function findTransformConstraint(constraintName) {
	      if (!constraintName) throw new Error("constraintName cannot be null.");
	      var transformConstraints = this.transformConstraints;
	      for (var i = 0, n = transformConstraints.length; i < n; i++) {
	        var constraint = transformConstraints[i];
	        if (constraint.data.name == constraintName) return constraint;
	      }
	      return null;
	    }
	  }, {
	    key: "findPathConstraint",
	    value: function findPathConstraint(constraintName) {
	      if (!constraintName) throw new Error("constraintName cannot be null.");
	      var pathConstraints = this.pathConstraints;
	      for (var i = 0, n = pathConstraints.length; i < n; i++) {
	        var constraint = pathConstraints[i];
	        if (constraint.data.name == constraintName) return constraint;
	      }
	      return null;
	    }
	  }, {
	    key: "getBoundsRect",
	    value: function getBoundsRect() {
	      var offset = new Vector2();
	      var size = new Vector2();
	      this.getBounds(offset, size);
	      return {
	        x: offset.x,
	        y: offset.y,
	        width: size.x,
	        height: size.y
	      };
	    }
	  }, {
	    key: "getBounds",
	    value: function getBounds(offset, size) {
	      var temp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Array(2);
	      if (!offset) throw new Error("offset cannot be null.");
	      if (!size) throw new Error("size cannot be null.");
	      var drawOrder = this.drawOrder;
	      var minX = Number.POSITIVE_INFINITY,
	        minY = Number.POSITIVE_INFINITY,
	        maxX = Number.NEGATIVE_INFINITY,
	        maxY = Number.NEGATIVE_INFINITY;
	      for (var i = 0, n = drawOrder.length; i < n; i++) {
	        var slot = drawOrder[i];
	        if (!slot.bone.active) continue;
	        var verticesLength = 0;
	        var vertices = null;
	        var attachment = slot.getAttachment();
	        if (attachment instanceof RegionAttachment) {
	          verticesLength = 8;
	          vertices = Utils.setArraySize(temp, verticesLength, 0);
	          attachment.computeWorldVertices(slot.bone, vertices, 0, 2);
	        } else if (attachment instanceof MeshAttachment) {
	          var mesh = attachment;
	          verticesLength = mesh.worldVerticesLength;
	          vertices = Utils.setArraySize(temp, verticesLength, 0);
	          mesh.computeWorldVertices(slot, 0, verticesLength, vertices, 0, 2);
	        }
	        if (vertices) {
	          for (var ii = 0, nn = vertices.length; ii < nn; ii += 2) {
	            var x = vertices[ii],
	              y = vertices[ii + 1];
	            minX = Math.min(minX, x);
	            minY = Math.min(minY, y);
	            maxX = Math.max(maxX, x);
	            maxY = Math.max(maxY, y);
	          }
	        }
	      }
	      offset.set(minX, minY);
	      size.set(maxX - minX, maxY - minY);
	    }
	  }, {
	    key: "update",
	    value: function update(delta) {
	      this.time += delta;
	    }
	  }]);
	}();

	var SkeletonData = function () {
	  function SkeletonData() {
	    _classCallCheck(this, SkeletonData);
	    this.name = null;
	    this.bones = new Array();
	    this.slots = new Array();
	    this.skins = new Array();
	    this.defaultSkin = null;
	    this.events = new Array();
	    this.animations = new Array();
	    this.ikConstraints = new Array();
	    this.transformConstraints = new Array();
	    this.pathConstraints = new Array();
	    this.x = 0;
	    this.y = 0;
	    this.width = 0;
	    this.height = 0;
	    this.version = null;
	    this.hash = null;
	    this.fps = 0;
	    this.imagesPath = null;
	    this.audioPath = null;
	  }
	  return _createClass(SkeletonData, [{
	    key: "findBone",
	    value: function findBone(boneName) {
	      if (!boneName) throw new Error("boneName cannot be null.");
	      var bones = this.bones;
	      for (var i = 0, n = bones.length; i < n; i++) {
	        var bone = bones[i];
	        if (bone.name == boneName) return bone;
	      }
	      return null;
	    }
	  }, {
	    key: "findSlot",
	    value: function findSlot(slotName) {
	      if (!slotName) throw new Error("slotName cannot be null.");
	      var slots = this.slots;
	      for (var i = 0, n = slots.length; i < n; i++) {
	        var slot = slots[i];
	        if (slot.name == slotName) return slot;
	      }
	      return null;
	    }
	  }, {
	    key: "findSkin",
	    value: function findSkin(skinName) {
	      if (!skinName) throw new Error("skinName cannot be null.");
	      var skins = this.skins;
	      for (var i = 0, n = skins.length; i < n; i++) {
	        var skin = skins[i];
	        if (skin.name == skinName) return skin;
	      }
	      return null;
	    }
	  }, {
	    key: "findEvent",
	    value: function findEvent(eventDataName) {
	      if (!eventDataName) throw new Error("eventDataName cannot be null.");
	      var events = this.events;
	      for (var i = 0, n = events.length; i < n; i++) {
	        var event = events[i];
	        if (event.name == eventDataName) return event;
	      }
	      return null;
	    }
	  }, {
	    key: "findAnimation",
	    value: function findAnimation(animationName) {
	      if (!animationName) throw new Error("animationName cannot be null.");
	      var animations = this.animations;
	      for (var i = 0, n = animations.length; i < n; i++) {
	        var animation = animations[i];
	        if (animation.name == animationName) return animation;
	      }
	      return null;
	    }
	  }, {
	    key: "findIkConstraint",
	    value: function findIkConstraint(constraintName) {
	      if (!constraintName) throw new Error("constraintName cannot be null.");
	      var ikConstraints = this.ikConstraints;
	      for (var i = 0, n = ikConstraints.length; i < n; i++) {
	        var constraint = ikConstraints[i];
	        if (constraint.name == constraintName) return constraint;
	      }
	      return null;
	    }
	  }, {
	    key: "findTransformConstraint",
	    value: function findTransformConstraint(constraintName) {
	      if (!constraintName) throw new Error("constraintName cannot be null.");
	      var transformConstraints = this.transformConstraints;
	      for (var i = 0, n = transformConstraints.length; i < n; i++) {
	        var constraint = transformConstraints[i];
	        if (constraint.name == constraintName) return constraint;
	      }
	      return null;
	    }
	  }, {
	    key: "findPathConstraint",
	    value: function findPathConstraint(constraintName) {
	      if (!constraintName) throw new Error("constraintName cannot be null.");
	      var pathConstraints = this.pathConstraints;
	      for (var i = 0, n = pathConstraints.length; i < n; i++) {
	        var constraint = pathConstraints[i];
	        if (constraint.name == constraintName) return constraint;
	      }
	      return null;
	    }
	  }]);
	}();

	var SkinEntry = _createClass(function SkinEntry() {
	  var slotIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var attachment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	  _classCallCheck(this, SkinEntry);
	  this.slotIndex = slotIndex;
	  this.name = name;
	  this.attachment = attachment;
	});
	var Skin = function () {
	  function Skin(name) {
	    _classCallCheck(this, Skin);
	    this.name = null;
	    this.attachments = new Array();
	    this.bones = Array();
	    this.constraints = new Array();
	    if (!name) throw new Error("name cannot be null.");
	    this.name = name;
	  }
	  return _createClass(Skin, [{
	    key: "setAttachment",
	    value: function setAttachment(slotIndex, name, attachment) {
	      if (!attachment) throw new Error("attachment cannot be null.");
	      var attachments = this.attachments;
	      if (slotIndex >= attachments.length) attachments.length = slotIndex + 1;
	      if (!attachments[slotIndex]) attachments[slotIndex] = {};
	      attachments[slotIndex][name] = attachment;
	    }
	  }, {
	    key: "addSkin",
	    value: function addSkin(skin) {
	      for (var i = 0; i < skin.bones.length; i++) {
	        var bone = skin.bones[i];
	        var contained = false;
	        for (var ii = 0; ii < this.bones.length; ii++) {
	          if (this.bones[ii] == bone) {
	            contained = true;
	            break;
	          }
	        }
	        if (!contained) this.bones.push(bone);
	      }
	      for (var _i = 0; _i < skin.constraints.length; _i++) {
	        var constraint = skin.constraints[_i];
	        var _contained = false;
	        for (var _ii = 0; _ii < this.constraints.length; _ii++) {
	          if (this.constraints[_ii] == constraint) {
	            _contained = true;
	            break;
	          }
	        }
	        if (!_contained) this.constraints.push(constraint);
	      }
	      var attachments = skin.getAttachments();
	      for (var _i2 = 0; _i2 < attachments.length; _i2++) {
	        var attachment = attachments[_i2];
	        this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
	      }
	    }
	  }, {
	    key: "copySkin",
	    value: function copySkin(skin) {
	      for (var i = 0; i < skin.bones.length; i++) {
	        var bone = skin.bones[i];
	        var contained = false;
	        for (var ii = 0; ii < this.bones.length; ii++) {
	          if (this.bones[ii] == bone) {
	            contained = true;
	            break;
	          }
	        }
	        if (!contained) this.bones.push(bone);
	      }
	      for (var _i3 = 0; _i3 < skin.constraints.length; _i3++) {
	        var constraint = skin.constraints[_i3];
	        var _contained2 = false;
	        for (var _ii2 = 0; _ii2 < this.constraints.length; _ii2++) {
	          if (this.constraints[_ii2] == constraint) {
	            _contained2 = true;
	            break;
	          }
	        }
	        if (!_contained2) this.constraints.push(constraint);
	      }
	      var attachments = skin.getAttachments();
	      for (var _i4 = 0; _i4 < attachments.length; _i4++) {
	        var attachment = attachments[_i4];
	        if (!attachment.attachment) continue;
	        if (attachment.attachment instanceof MeshAttachment) {
	          attachment.attachment = attachment.attachment.newLinkedMesh();
	          this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
	        } else {
	          attachment.attachment = attachment.attachment.copy();
	          this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
	        }
	      }
	    }
	  }, {
	    key: "getAttachment",
	    value: function getAttachment(slotIndex, name) {
	      var dictionary = this.attachments[slotIndex];
	      return dictionary ? dictionary[name] : null;
	    }
	  }, {
	    key: "removeAttachment",
	    value: function removeAttachment(slotIndex, name) {
	      var dictionary = this.attachments[slotIndex];
	      if (dictionary) dictionary[name] = null;
	    }
	  }, {
	    key: "getAttachments",
	    value: function getAttachments() {
	      var entries = new Array();
	      for (var i = 0; i < this.attachments.length; i++) {
	        var slotAttachments = this.attachments[i];
	        if (slotAttachments) {
	          for (var name in slotAttachments) {
	            var attachment = slotAttachments[name];
	            if (attachment) entries.push(new SkinEntry(i, name, attachment));
	          }
	        }
	      }
	      return entries;
	    }
	  }, {
	    key: "getAttachmentsForSlot",
	    value: function getAttachmentsForSlot(slotIndex, attachments) {
	      var slotAttachments = this.attachments[slotIndex];
	      if (slotAttachments) {
	        for (var name in slotAttachments) {
	          var attachment = slotAttachments[name];
	          if (attachment) attachments.push(new SkinEntry(slotIndex, name, attachment));
	        }
	      }
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.attachments.length = 0;
	      this.bones.length = 0;
	      this.constraints.length = 0;
	    }
	  }, {
	    key: "attachAll",
	    value: function attachAll(skeleton, oldSkin) {
	      var slotIndex = 0;
	      for (var i = 0; i < skeleton.slots.length; i++) {
	        var slot = skeleton.slots[i];
	        var slotAttachment = slot.getAttachment();
	        if (slotAttachment && slotIndex < oldSkin.attachments.length) {
	          var dictionary = oldSkin.attachments[slotIndex];
	          for (var key in dictionary) {
	            var skinAttachment = dictionary[key];
	            if (slotAttachment == skinAttachment) {
	              var attachment = this.getAttachment(slotIndex, key);
	              if (attachment) slot.setAttachment(attachment);
	              break;
	            }
	          }
	        }
	        slotIndex++;
	      }
	    }
	  }]);
	}();

	var SlotData = _createClass(function SlotData(index, name, boneData) {
	  _classCallCheck(this, SlotData);
	  this.index = 0;
	  this.name = null;
	  this.boneData = null;
	  this.color = new Color(1, 1, 1, 1);
	  this.darkColor = null;
	  this.attachmentName = null;
	  this.blendMode = null;
	  if (index < 0) throw new Error("index must be >= 0.");
	  if (!name) throw new Error("name cannot be null.");
	  if (!boneData) throw new Error("boneData cannot be null.");
	  this.index = index;
	  this.name = name;
	  this.boneData = boneData;
	});
	var BlendMode;
	(function (BlendMode) {
	  BlendMode[BlendMode["Normal"] = 0] = "Normal";
	  BlendMode[BlendMode["Additive"] = 1] = "Additive";
	  BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
	  BlendMode[BlendMode["Screen"] = 3] = "Screen";
	})(BlendMode || (BlendMode = {}));

	function _callSuper$2(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var TransformConstraintData = function (_ConstraintData) {
	  function TransformConstraintData(name) {
	    var _this2;
	    _classCallCheck(this, TransformConstraintData);
	    _this2 = _callSuper$2(this, TransformConstraintData, [name, 0, false]);
	    _this2.bones = new Array();
	    _this2.target = null;
	    _this2.mixRotate = 0;
	    _this2.mixX = 0;
	    _this2.mixY = 0;
	    _this2.mixScaleX = 0;
	    _this2.mixScaleY = 0;
	    _this2.mixShearY = 0;
	    _this2.offsetRotation = 0;
	    _this2.offsetX = 0;
	    _this2.offsetY = 0;
	    _this2.offsetScaleX = 0;
	    _this2.offsetScaleY = 0;
	    _this2.offsetShearY = 0;
	    _this2.relative = false;
	    _this2.local = false;
	    return _this2;
	  }
	  _inherits(TransformConstraintData, _ConstraintData);
	  return _createClass(TransformConstraintData);
	}(ConstraintData);

	var SkeletonBinary = function () {
	  function SkeletonBinary(attachmentLoader) {
	    _classCallCheck(this, SkeletonBinary);
	    this.scale = 1;
	    this.attachmentLoader = null;
	    this.linkedMeshes = new Array();
	    this.attachmentLoader = attachmentLoader;
	  }
	  return _createClass(SkeletonBinary, [{
	    key: "readSkeletonData",
	    value: function readSkeletonData(binary) {
	      var scale = this.scale;
	      var skeletonData = new SkeletonData();
	      skeletonData.name = "";
	      var input = new BinaryInput(binary);
	      var lowHash = input.readInt32();
	      var highHash = input.readInt32();
	      skeletonData.hash = highHash == 0 && lowHash == 0 ? null : highHash.toString(16) + lowHash.toString(16);
	      skeletonData.version = input.readString();
	      skeletonData.x = input.readFloat();
	      skeletonData.y = input.readFloat();
	      skeletonData.width = input.readFloat();
	      skeletonData.height = input.readFloat();
	      var nonessential = input.readBoolean();
	      if (nonessential) {
	        skeletonData.fps = input.readFloat();
	        skeletonData.imagesPath = input.readString();
	        skeletonData.audioPath = input.readString();
	      }
	      var n = 0;
	      n = input.readInt(true);
	      for (var i = 0; i < n; i++) input.strings.push(input.readString());
	      n = input.readInt(true);
	      for (var _i = 0; _i < n; _i++) {
	        var name = input.readString();
	        var parent = _i == 0 ? null : skeletonData.bones[input.readInt(true)];
	        var data = new BoneData(_i, name, parent);
	        data.rotation = input.readFloat();
	        data.x = input.readFloat() * scale;
	        data.y = input.readFloat() * scale;
	        data.scaleX = input.readFloat();
	        data.scaleY = input.readFloat();
	        data.shearX = input.readFloat();
	        data.shearY = input.readFloat();
	        data.length = input.readFloat() * scale;
	        data.transformMode = input.readInt(true);
	        data.skinRequired = input.readBoolean();
	        if (nonessential) Color.rgba8888ToColor(data.color, input.readInt32());
	        skeletonData.bones.push(data);
	      }
	      n = input.readInt(true);
	      for (var _i2 = 0; _i2 < n; _i2++) {
	        var slotName = input.readString();
	        var boneData = skeletonData.bones[input.readInt(true)];
	        var _data = new SlotData(_i2, slotName, boneData);
	        Color.rgba8888ToColor(_data.color, input.readInt32());
	        var darkColor = input.readInt32();
	        if (darkColor != -1) Color.rgb888ToColor(_data.darkColor = new Color(), darkColor);
	        _data.attachmentName = input.readStringRef();
	        _data.blendMode = input.readInt(true);
	        skeletonData.slots.push(_data);
	      }
	      n = input.readInt(true);
	      for (var _i3 = 0, nn; _i3 < n; _i3++) {
	        var _data2 = new IkConstraintData(input.readString());
	        _data2.order = input.readInt(true);
	        _data2.skinRequired = input.readBoolean();
	        nn = input.readInt(true);
	        for (var ii = 0; ii < nn; ii++) _data2.bones.push(skeletonData.bones[input.readInt(true)]);
	        _data2.target = skeletonData.bones[input.readInt(true)];
	        _data2.mix = input.readFloat();
	        _data2.softness = input.readFloat() * scale;
	        _data2.bendDirection = input.readByte();
	        _data2.compress = input.readBoolean();
	        _data2.stretch = input.readBoolean();
	        _data2.uniform = input.readBoolean();
	        skeletonData.ikConstraints.push(_data2);
	      }
	      n = input.readInt(true);
	      for (var _i4 = 0, _nn; _i4 < n; _i4++) {
	        var _data3 = new TransformConstraintData(input.readString());
	        _data3.order = input.readInt(true);
	        _data3.skinRequired = input.readBoolean();
	        _nn = input.readInt(true);
	        for (var _ii = 0; _ii < _nn; _ii++) _data3.bones.push(skeletonData.bones[input.readInt(true)]);
	        _data3.target = skeletonData.bones[input.readInt(true)];
	        _data3.local = input.readBoolean();
	        _data3.relative = input.readBoolean();
	        _data3.offsetRotation = input.readFloat();
	        _data3.offsetX = input.readFloat() * scale;
	        _data3.offsetY = input.readFloat() * scale;
	        _data3.offsetScaleX = input.readFloat();
	        _data3.offsetScaleY = input.readFloat();
	        _data3.offsetShearY = input.readFloat();
	        _data3.mixRotate = input.readFloat();
	        _data3.mixX = input.readFloat();
	        _data3.mixY = input.readFloat();
	        _data3.mixScaleX = input.readFloat();
	        _data3.mixScaleY = input.readFloat();
	        _data3.mixShearY = input.readFloat();
	        skeletonData.transformConstraints.push(_data3);
	      }
	      n = input.readInt(true);
	      for (var _i5 = 0, _nn2; _i5 < n; _i5++) {
	        var _data4 = new PathConstraintData(input.readString());
	        _data4.order = input.readInt(true);
	        _data4.skinRequired = input.readBoolean();
	        _nn2 = input.readInt(true);
	        for (var _ii2 = 0; _ii2 < _nn2; _ii2++) _data4.bones.push(skeletonData.bones[input.readInt(true)]);
	        _data4.target = skeletonData.slots[input.readInt(true)];
	        _data4.positionMode = input.readInt(true);
	        _data4.spacingMode = input.readInt(true);
	        _data4.rotateMode = input.readInt(true);
	        _data4.offsetRotation = input.readFloat();
	        _data4.position = input.readFloat();
	        if (_data4.positionMode == PositionMode.Fixed) _data4.position *= scale;
	        _data4.spacing = input.readFloat();
	        if (_data4.spacingMode == SpacingMode.Length || _data4.spacingMode == SpacingMode.Fixed) _data4.spacing *= scale;
	        _data4.mixRotate = input.readFloat();
	        _data4.mixX = input.readFloat();
	        _data4.mixY = input.readFloat();
	        skeletonData.pathConstraints.push(_data4);
	      }
	      var defaultSkin = this.readSkin(input, skeletonData, true, nonessential);
	      if (defaultSkin) {
	        skeletonData.defaultSkin = defaultSkin;
	        skeletonData.skins.push(defaultSkin);
	      }
	      {
	        var _i6 = skeletonData.skins.length;
	        Utils.setArraySize(skeletonData.skins, n = _i6 + input.readInt(true));
	        for (; _i6 < n; _i6++) skeletonData.skins[_i6] = this.readSkin(input, skeletonData, false, nonessential);
	      }
	      n = this.linkedMeshes.length;
	      for (var _i7 = 0; _i7 < n; _i7++) {
	        var linkedMesh = this.linkedMeshes[_i7];
	        var skin = !linkedMesh.skin ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
	        var _parent = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
	        linkedMesh.mesh.deformAttachment = linkedMesh.inheritDeform ? _parent : linkedMesh.mesh;
	        linkedMesh.mesh.setParentMesh(_parent);
	        linkedMesh.mesh.updateUVs();
	      }
	      this.linkedMeshes.length = 0;
	      n = input.readInt(true);
	      for (var _i8 = 0; _i8 < n; _i8++) {
	        var _data5 = new EventData(input.readStringRef());
	        _data5.intValue = input.readInt(false);
	        _data5.floatValue = input.readFloat();
	        _data5.stringValue = input.readString();
	        _data5.audioPath = input.readString();
	        if (_data5.audioPath) {
	          _data5.volume = input.readFloat();
	          _data5.balance = input.readFloat();
	        }
	        skeletonData.events.push(_data5);
	      }
	      n = input.readInt(true);
	      for (var _i9 = 0; _i9 < n; _i9++) skeletonData.animations.push(this.readAnimation(input, input.readString(), skeletonData));
	      return skeletonData;
	    }
	  }, {
	    key: "readSkin",
	    value: function readSkin(input, skeletonData, defaultSkin, nonessential) {
	      var skin = null;
	      var slotCount = 0;
	      if (defaultSkin) {
	        slotCount = input.readInt(true);
	        if (slotCount == 0) return null;
	        skin = new Skin("default");
	      } else {
	        skin = new Skin(input.readStringRef());
	        skin.bones.length = input.readInt(true);
	        for (var i = 0, n = skin.bones.length; i < n; i++) skin.bones[i] = skeletonData.bones[input.readInt(true)];
	        for (var _i10 = 0, _n = input.readInt(true); _i10 < _n; _i10++) skin.constraints.push(skeletonData.ikConstraints[input.readInt(true)]);
	        for (var _i11 = 0, _n2 = input.readInt(true); _i11 < _n2; _i11++) skin.constraints.push(skeletonData.transformConstraints[input.readInt(true)]);
	        for (var _i12 = 0, _n3 = input.readInt(true); _i12 < _n3; _i12++) skin.constraints.push(skeletonData.pathConstraints[input.readInt(true)]);
	        slotCount = input.readInt(true);
	      }
	      for (var _i13 = 0; _i13 < slotCount; _i13++) {
	        var slotIndex = input.readInt(true);
	        for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
	          var name = input.readStringRef();
	          var attachment = this.readAttachment(input, skeletonData, skin, slotIndex, name, nonessential);
	          if (attachment) skin.setAttachment(slotIndex, name, attachment);
	        }
	      }
	      return skin;
	    }
	  }, {
	    key: "readAttachment",
	    value: function readAttachment(input, skeletonData, skin, slotIndex, attachmentName, nonessential) {
	      var scale = this.scale;
	      var name = input.readStringRef();
	      if (!name) name = attachmentName;
	      switch (input.readByte()) {
	        case AttachmentType.Region:
	          {
	            var path = input.readStringRef();
	            var rotation = input.readFloat();
	            var x = input.readFloat();
	            var y = input.readFloat();
	            var scaleX = input.readFloat();
	            var scaleY = input.readFloat();
	            var width = input.readFloat();
	            var height = input.readFloat();
	            var color = input.readInt32();
	            if (!path) path = name;
	            var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
	            if (!region) return null;
	            region.path = path;
	            region.x = x * scale;
	            region.y = y * scale;
	            region.scaleX = scaleX;
	            region.scaleY = scaleY;
	            region.rotation = rotation;
	            region.width = width * scale;
	            region.height = height * scale;
	            Color.rgba8888ToColor(region.color, color);
	            region.updateOffset();
	            return region;
	          }
	        case AttachmentType.BoundingBox:
	          {
	            var vertexCount = input.readInt(true);
	            var vertices = this.readVertices(input, vertexCount);
	            var _color = nonessential ? input.readInt32() : 0;
	            var box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
	            if (!box) return null;
	            box.worldVerticesLength = vertexCount << 1;
	            box.vertices = vertices.vertices;
	            box.bones = vertices.bones;
	            if (nonessential) Color.rgba8888ToColor(box.color, _color);
	            return box;
	          }
	        case AttachmentType.Mesh:
	          {
	            var _path = input.readStringRef();
	            var _color2 = input.readInt32();
	            var _vertexCount = input.readInt(true);
	            var uvs = this.readFloatArray(input, _vertexCount << 1, 1);
	            var triangles = this.readShortArray(input);
	            var _vertices = this.readVertices(input, _vertexCount);
	            var hullLength = input.readInt(true);
	            var edges = null;
	            var _width = 0,
	              _height = 0;
	            if (nonessential) {
	              edges = this.readShortArray(input);
	              _width = input.readFloat();
	              _height = input.readFloat();
	            }
	            if (!_path) _path = name;
	            var mesh = this.attachmentLoader.newMeshAttachment(skin, name, _path);
	            if (!mesh) return null;
	            mesh.path = _path;
	            Color.rgba8888ToColor(mesh.color, _color2);
	            mesh.bones = _vertices.bones;
	            mesh.vertices = _vertices.vertices;
	            mesh.worldVerticesLength = _vertexCount << 1;
	            mesh.triangles = triangles;
	            mesh.regionUVs = uvs;
	            mesh.updateUVs();
	            mesh.hullLength = hullLength << 1;
	            if (nonessential) {
	              mesh.edges = edges;
	              mesh.width = _width * scale;
	              mesh.height = _height * scale;
	            }
	            return mesh;
	          }
	        case AttachmentType.LinkedMesh:
	          {
	            var _path2 = input.readStringRef();
	            var _color3 = input.readInt32();
	            var skinName = input.readStringRef();
	            var parent = input.readStringRef();
	            var inheritDeform = input.readBoolean();
	            var _width2 = 0,
	              _height2 = 0;
	            if (nonessential) {
	              _width2 = input.readFloat();
	              _height2 = input.readFloat();
	            }
	            if (!_path2) _path2 = name;
	            var _mesh = this.attachmentLoader.newMeshAttachment(skin, name, _path2);
	            if (!_mesh) return null;
	            _mesh.path = _path2;
	            Color.rgba8888ToColor(_mesh.color, _color3);
	            if (nonessential) {
	              _mesh.width = _width2 * scale;
	              _mesh.height = _height2 * scale;
	            }
	            this.linkedMeshes.push(new LinkedMesh$1(_mesh, skinName, slotIndex, parent, inheritDeform));
	            return _mesh;
	          }
	        case AttachmentType.Path:
	          {
	            var closed = input.readBoolean();
	            var constantSpeed = input.readBoolean();
	            var _vertexCount2 = input.readInt(true);
	            var _vertices2 = this.readVertices(input, _vertexCount2);
	            var lengths = Utils.newArray(_vertexCount2 / 3, 0);
	            for (var i = 0, n = lengths.length; i < n; i++) lengths[i] = input.readFloat() * scale;
	            var _color4 = nonessential ? input.readInt32() : 0;
	            var _path3 = this.attachmentLoader.newPathAttachment(skin, name);
	            if (!_path3) return null;
	            _path3.closed = closed;
	            _path3.constantSpeed = constantSpeed;
	            _path3.worldVerticesLength = _vertexCount2 << 1;
	            _path3.vertices = _vertices2.vertices;
	            _path3.bones = _vertices2.bones;
	            _path3.lengths = lengths;
	            if (nonessential) Color.rgba8888ToColor(_path3.color, _color4);
	            return _path3;
	          }
	        case AttachmentType.Point:
	          {
	            var _rotation = input.readFloat();
	            var _x = input.readFloat();
	            var _y = input.readFloat();
	            var _color5 = nonessential ? input.readInt32() : 0;
	            var point = this.attachmentLoader.newPointAttachment(skin, name);
	            if (!point) return null;
	            point.x = _x * scale;
	            point.y = _y * scale;
	            point.rotation = _rotation;
	            if (nonessential) Color.rgba8888ToColor(point.color, _color5);
	            return point;
	          }
	        case AttachmentType.Clipping:
	          {
	            var endSlotIndex = input.readInt(true);
	            var _vertexCount3 = input.readInt(true);
	            var _vertices3 = this.readVertices(input, _vertexCount3);
	            var _color6 = nonessential ? input.readInt32() : 0;
	            var clip = this.attachmentLoader.newClippingAttachment(skin, name);
	            if (!clip) return null;
	            clip.endSlot = skeletonData.slots[endSlotIndex];
	            clip.worldVerticesLength = _vertexCount3 << 1;
	            clip.vertices = _vertices3.vertices;
	            clip.bones = _vertices3.bones;
	            if (nonessential) Color.rgba8888ToColor(clip.color, _color6);
	            return clip;
	          }
	      }
	      return null;
	    }
	  }, {
	    key: "readVertices",
	    value: function readVertices(input, vertexCount) {
	      var scale = this.scale;
	      var verticesLength = vertexCount << 1;
	      var vertices = new Vertices();
	      if (!input.readBoolean()) {
	        vertices.vertices = this.readFloatArray(input, verticesLength, scale);
	        return vertices;
	      }
	      var weights = new Array();
	      var bonesArray = new Array();
	      for (var i = 0; i < vertexCount; i++) {
	        var boneCount = input.readInt(true);
	        bonesArray.push(boneCount);
	        for (var ii = 0; ii < boneCount; ii++) {
	          bonesArray.push(input.readInt(true));
	          weights.push(input.readFloat() * scale);
	          weights.push(input.readFloat() * scale);
	          weights.push(input.readFloat());
	        }
	      }
	      vertices.vertices = Utils.toFloatArray(weights);
	      vertices.bones = bonesArray;
	      return vertices;
	    }
	  }, {
	    key: "readFloatArray",
	    value: function readFloatArray(input, n, scale) {
	      var array = new Array(n);
	      if (scale == 1) {
	        for (var i = 0; i < n; i++) array[i] = input.readFloat();
	      } else {
	        for (var _i14 = 0; _i14 < n; _i14++) array[_i14] = input.readFloat() * scale;
	      }
	      return array;
	    }
	  }, {
	    key: "readShortArray",
	    value: function readShortArray(input) {
	      var n = input.readInt(true);
	      var array = new Array(n);
	      for (var i = 0; i < n; i++) array[i] = input.readShort();
	      return array;
	    }
	  }, {
	    key: "readAnimation",
	    value: function readAnimation(input, name, skeletonData) {
	      input.readInt(true);
	      var timelines = new Array();
	      var scale = this.scale;
	      new Color();
	      new Color();
	      for (var i = 0, n = input.readInt(true); i < n; i++) {
	        var slotIndex = input.readInt(true);
	        for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
	          var timelineType = input.readByte();
	          var frameCount = input.readInt(true);
	          var frameLast = frameCount - 1;
	          switch (timelineType) {
	            case SLOT_ATTACHMENT:
	              {
	                var timeline = new AttachmentTimeline(frameCount, slotIndex);
	                for (var frame = 0; frame < frameCount; frame++) timeline.setFrame(frame, input.readFloat(), input.readStringRef());
	                timelines.push(timeline);
	                break;
	              }
	            case SLOT_RGBA:
	              {
	                var bezierCount = input.readInt(true);
	                var _timeline = new RGBATimeline(frameCount, bezierCount, slotIndex);
	                var time = input.readFloat();
	                var r = input.readUnsignedByte() / 255.0;
	                var g = input.readUnsignedByte() / 255.0;
	                var b = input.readUnsignedByte() / 255.0;
	                var a = input.readUnsignedByte() / 255.0;
	                for (var _frame = 0, bezier = 0;; _frame++) {
	                  _timeline.setFrame(_frame, time, r, g, b, a);
	                  if (_frame == frameLast) break;
	                  var time2 = input.readFloat();
	                  var r2 = input.readUnsignedByte() / 255.0;
	                  var g2 = input.readUnsignedByte() / 255.0;
	                  var b2 = input.readUnsignedByte() / 255.0;
	                  var a2 = input.readUnsignedByte() / 255.0;
	                  switch (input.readByte()) {
	                    case CURVE_STEPPED:
	                      _timeline.setStepped(_frame);
	                      break;
	                    case CURVE_BEZIER:
	                      setBezier(input, _timeline, bezier++, _frame, 0, time, time2, r, r2, 1);
	                      setBezier(input, _timeline, bezier++, _frame, 1, time, time2, g, g2, 1);
	                      setBezier(input, _timeline, bezier++, _frame, 2, time, time2, b, b2, 1);
	                      setBezier(input, _timeline, bezier++, _frame, 3, time, time2, a, a2, 1);
	                  }
	                  time = time2;
	                  r = r2;
	                  g = g2;
	                  b = b2;
	                  a = a2;
	                }
	                timelines.push(_timeline);
	                break;
	              }
	            case SLOT_RGB:
	              {
	                var _bezierCount = input.readInt(true);
	                var _timeline2 = new RGBTimeline(frameCount, _bezierCount, slotIndex);
	                var _time = input.readFloat();
	                var _r = input.readUnsignedByte() / 255.0;
	                var _g = input.readUnsignedByte() / 255.0;
	                var _b = input.readUnsignedByte() / 255.0;
	                for (var _frame2 = 0, _bezier = 0;; _frame2++) {
	                  _timeline2.setFrame(_frame2, _time, _r, _g, _b);
	                  if (_frame2 == frameLast) break;
	                  var _time2 = input.readFloat();
	                  var _r2 = input.readUnsignedByte() / 255.0;
	                  var _g2 = input.readUnsignedByte() / 255.0;
	                  var _b2 = input.readUnsignedByte() / 255.0;
	                  switch (input.readByte()) {
	                    case CURVE_STEPPED:
	                      _timeline2.setStepped(_frame2);
	                      break;
	                    case CURVE_BEZIER:
	                      setBezier(input, _timeline2, _bezier++, _frame2, 0, _time, _time2, _r, _r2, 1);
	                      setBezier(input, _timeline2, _bezier++, _frame2, 1, _time, _time2, _g, _g2, 1);
	                      setBezier(input, _timeline2, _bezier++, _frame2, 2, _time, _time2, _b, _b2, 1);
	                  }
	                  _time = _time2;
	                  _r = _r2;
	                  _g = _g2;
	                  _b = _b2;
	                }
	                timelines.push(_timeline2);
	                break;
	              }
	            case SLOT_RGBA2:
	              {
	                var _bezierCount2 = input.readInt(true);
	                var _timeline3 = new RGBA2Timeline(frameCount, _bezierCount2, slotIndex);
	                var _time3 = input.readFloat();
	                var _r3 = input.readUnsignedByte() / 255.0;
	                var _g3 = input.readUnsignedByte() / 255.0;
	                var _b3 = input.readUnsignedByte() / 255.0;
	                var _a = input.readUnsignedByte() / 255.0;
	                var _r4 = input.readUnsignedByte() / 255.0;
	                var _g4 = input.readUnsignedByte() / 255.0;
	                var _b4 = input.readUnsignedByte() / 255.0;
	                for (var _frame3 = 0, _bezier2 = 0;; _frame3++) {
	                  _timeline3.setFrame(_frame3, _time3, _r3, _g3, _b3, _a, _r4, _g4, _b4);
	                  if (_frame3 == frameLast) break;
	                  var _time4 = input.readFloat();
	                  var nr = input.readUnsignedByte() / 255.0;
	                  var ng = input.readUnsignedByte() / 255.0;
	                  var nb = input.readUnsignedByte() / 255.0;
	                  var na = input.readUnsignedByte() / 255.0;
	                  var nr2 = input.readUnsignedByte() / 255.0;
	                  var ng2 = input.readUnsignedByte() / 255.0;
	                  var nb2 = input.readUnsignedByte() / 255.0;
	                  switch (input.readByte()) {
	                    case CURVE_STEPPED:
	                      _timeline3.setStepped(_frame3);
	                      break;
	                    case CURVE_BEZIER:
	                      setBezier(input, _timeline3, _bezier2++, _frame3, 0, _time3, _time4, _r3, nr, 1);
	                      setBezier(input, _timeline3, _bezier2++, _frame3, 1, _time3, _time4, _g3, ng, 1);
	                      setBezier(input, _timeline3, _bezier2++, _frame3, 2, _time3, _time4, _b3, nb, 1);
	                      setBezier(input, _timeline3, _bezier2++, _frame3, 3, _time3, _time4, _a, na, 1);
	                      setBezier(input, _timeline3, _bezier2++, _frame3, 4, _time3, _time4, _r4, nr2, 1);
	                      setBezier(input, _timeline3, _bezier2++, _frame3, 5, _time3, _time4, _g4, ng2, 1);
	                      setBezier(input, _timeline3, _bezier2++, _frame3, 6, _time3, _time4, _b4, nb2, 1);
	                  }
	                  _time3 = _time4;
	                  _r3 = nr;
	                  _g3 = ng;
	                  _b3 = nb;
	                  _a = na;
	                  _r4 = nr2;
	                  _g4 = ng2;
	                  _b4 = nb2;
	                }
	                timelines.push(_timeline3);
	                break;
	              }
	            case SLOT_RGB2:
	              {
	                var _bezierCount3 = input.readInt(true);
	                var _timeline4 = new RGB2Timeline(frameCount, _bezierCount3, slotIndex);
	                var _time5 = input.readFloat();
	                var _r5 = input.readUnsignedByte() / 255.0;
	                var _g5 = input.readUnsignedByte() / 255.0;
	                var _b5 = input.readUnsignedByte() / 255.0;
	                var _r6 = input.readUnsignedByte() / 255.0;
	                var _g6 = input.readUnsignedByte() / 255.0;
	                var _b6 = input.readUnsignedByte() / 255.0;
	                for (var _frame4 = 0, _bezier3 = 0;; _frame4++) {
	                  _timeline4.setFrame(_frame4, _time5, _r5, _g5, _b5, _r6, _g6, _b6);
	                  if (_frame4 == frameLast) break;
	                  var _time6 = input.readFloat();
	                  var _nr = input.readUnsignedByte() / 255.0;
	                  var _ng = input.readUnsignedByte() / 255.0;
	                  var _nb = input.readUnsignedByte() / 255.0;
	                  var _nr2 = input.readUnsignedByte() / 255.0;
	                  var _ng2 = input.readUnsignedByte() / 255.0;
	                  var _nb2 = input.readUnsignedByte() / 255.0;
	                  switch (input.readByte()) {
	                    case CURVE_STEPPED:
	                      _timeline4.setStepped(_frame4);
	                      break;
	                    case CURVE_BEZIER:
	                      setBezier(input, _timeline4, _bezier3++, _frame4, 0, _time5, _time6, _r5, _nr, 1);
	                      setBezier(input, _timeline4, _bezier3++, _frame4, 1, _time5, _time6, _g5, _ng, 1);
	                      setBezier(input, _timeline4, _bezier3++, _frame4, 2, _time5, _time6, _b5, _nb, 1);
	                      setBezier(input, _timeline4, _bezier3++, _frame4, 3, _time5, _time6, _r6, _nr2, 1);
	                      setBezier(input, _timeline4, _bezier3++, _frame4, 4, _time5, _time6, _g6, _ng2, 1);
	                      setBezier(input, _timeline4, _bezier3++, _frame4, 5, _time5, _time6, _b6, _nb2, 1);
	                  }
	                  _time5 = _time6;
	                  _r5 = _nr;
	                  _g5 = _ng;
	                  _b5 = _nb;
	                  _r6 = _nr2;
	                  _g6 = _ng2;
	                  _b6 = _nb2;
	                }
	                timelines.push(_timeline4);
	                break;
	              }
	            case SLOT_ALPHA:
	              {
	                var _timeline5 = new AlphaTimeline(frameCount, input.readInt(true), slotIndex);
	                var _time7 = input.readFloat(),
	                  _a2 = input.readUnsignedByte() / 255;
	                for (var _frame5 = 0, _bezier4 = 0;; _frame5++) {
	                  _timeline5.setFrame(_frame5, _time7, _a2);
	                  if (_frame5 == frameLast) break;
	                  var _time8 = input.readFloat();
	                  var _a3 = input.readUnsignedByte() / 255;
	                  switch (input.readByte()) {
	                    case CURVE_STEPPED:
	                      _timeline5.setStepped(_frame5);
	                      break;
	                    case CURVE_BEZIER:
	                      setBezier(input, _timeline5, _bezier4++, _frame5, 0, _time7, _time8, _a2, _a3, 1);
	                  }
	                  _time7 = _time8;
	                  _a2 = _a3;
	                }
	                timelines.push(_timeline5);
	                break;
	              }
	          }
	        }
	      }
	      for (var _i15 = 0, _n4 = input.readInt(true); _i15 < _n4; _i15++) {
	        var boneIndex = input.readInt(true);
	        for (var _ii3 = 0, _nn3 = input.readInt(true); _ii3 < _nn3; _ii3++) {
	          var type = input.readByte(),
	            _frameCount = input.readInt(true),
	            _bezierCount4 = input.readInt(true);
	          switch (type) {
	            case BONE_ROTATE:
	              timelines.push(readTimeline1$1(input, new RotateTimeline(_frameCount, _bezierCount4, boneIndex), 1));
	              break;
	            case BONE_TRANSLATE:
	              timelines.push(readTimeline2$1(input, new TranslateTimeline(_frameCount, _bezierCount4, boneIndex), scale));
	              break;
	            case BONE_TRANSLATEX:
	              timelines.push(readTimeline1$1(input, new TranslateXTimeline(_frameCount, _bezierCount4, boneIndex), scale));
	              break;
	            case BONE_TRANSLATEY:
	              timelines.push(readTimeline1$1(input, new TranslateYTimeline(_frameCount, _bezierCount4, boneIndex), scale));
	              break;
	            case BONE_SCALE:
	              timelines.push(readTimeline2$1(input, new ScaleTimeline(_frameCount, _bezierCount4, boneIndex), 1));
	              break;
	            case BONE_SCALEX:
	              timelines.push(readTimeline1$1(input, new ScaleXTimeline(_frameCount, _bezierCount4, boneIndex), 1));
	              break;
	            case BONE_SCALEY:
	              timelines.push(readTimeline1$1(input, new ScaleYTimeline(_frameCount, _bezierCount4, boneIndex), 1));
	              break;
	            case BONE_SHEAR:
	              timelines.push(readTimeline2$1(input, new ShearTimeline(_frameCount, _bezierCount4, boneIndex), 1));
	              break;
	            case BONE_SHEARX:
	              timelines.push(readTimeline1$1(input, new ShearXTimeline(_frameCount, _bezierCount4, boneIndex), 1));
	              break;
	            case BONE_SHEARY:
	              timelines.push(readTimeline1$1(input, new ShearYTimeline(_frameCount, _bezierCount4, boneIndex), 1));
	          }
	        }
	      }
	      for (var _i16 = 0, _n5 = input.readInt(true); _i16 < _n5; _i16++) {
	        var index = input.readInt(true),
	          _frameCount2 = input.readInt(true),
	          _frameLast = _frameCount2 - 1;
	        var _timeline6 = new IkConstraintTimeline(_frameCount2, input.readInt(true), index);
	        var _time9 = input.readFloat(),
	          mix = input.readFloat(),
	          softness = input.readFloat() * scale;
	        for (var _frame6 = 0, _bezier5 = 0;; _frame6++) {
	          _timeline6.setFrame(_frame6, _time9, mix, softness, input.readByte(), input.readBoolean(), input.readBoolean());
	          if (_frame6 == _frameLast) break;
	          var _time10 = input.readFloat(),
	            mix2 = input.readFloat(),
	            softness2 = input.readFloat() * scale;
	          switch (input.readByte()) {
	            case CURVE_STEPPED:
	              _timeline6.setStepped(_frame6);
	              break;
	            case CURVE_BEZIER:
	              setBezier(input, _timeline6, _bezier5++, _frame6, 0, _time9, _time10, mix, mix2, 1);
	              setBezier(input, _timeline6, _bezier5++, _frame6, 1, _time9, _time10, softness, softness2, scale);
	          }
	          _time9 = _time10;
	          mix = mix2;
	          softness = softness2;
	        }
	        timelines.push(_timeline6);
	      }
	      for (var _i17 = 0, _n6 = input.readInt(true); _i17 < _n6; _i17++) {
	        var _index = input.readInt(true),
	          _frameCount3 = input.readInt(true),
	          _frameLast2 = _frameCount3 - 1;
	        var _timeline7 = new TransformConstraintTimeline(_frameCount3, input.readInt(true), _index);
	        var _time11 = input.readFloat(),
	          mixRotate = input.readFloat(),
	          mixX = input.readFloat(),
	          mixY = input.readFloat(),
	          mixScaleX = input.readFloat(),
	          mixScaleY = input.readFloat(),
	          mixShearY = input.readFloat();
	        for (var _frame7 = 0, _bezier6 = 0;; _frame7++) {
	          _timeline7.setFrame(_frame7, _time11, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
	          if (_frame7 == _frameLast2) break;
	          var _time12 = input.readFloat(),
	            mixRotate2 = input.readFloat(),
	            mixX2 = input.readFloat(),
	            mixY2 = input.readFloat(),
	            mixScaleX2 = input.readFloat(),
	            mixScaleY2 = input.readFloat(),
	            mixShearY2 = input.readFloat();
	          switch (input.readByte()) {
	            case CURVE_STEPPED:
	              _timeline7.setStepped(_frame7);
	              break;
	            case CURVE_BEZIER:
	              setBezier(input, _timeline7, _bezier6++, _frame7, 0, _time11, _time12, mixRotate, mixRotate2, 1);
	              setBezier(input, _timeline7, _bezier6++, _frame7, 1, _time11, _time12, mixX, mixX2, 1);
	              setBezier(input, _timeline7, _bezier6++, _frame7, 2, _time11, _time12, mixY, mixY2, 1);
	              setBezier(input, _timeline7, _bezier6++, _frame7, 3, _time11, _time12, mixScaleX, mixScaleX2, 1);
	              setBezier(input, _timeline7, _bezier6++, _frame7, 4, _time11, _time12, mixScaleY, mixScaleY2, 1);
	              setBezier(input, _timeline7, _bezier6++, _frame7, 5, _time11, _time12, mixShearY, mixShearY2, 1);
	          }
	          _time11 = _time12;
	          mixRotate = mixRotate2;
	          mixX = mixX2;
	          mixY = mixY2;
	          mixScaleX = mixScaleX2;
	          mixScaleY = mixScaleY2;
	          mixShearY = mixShearY2;
	        }
	        timelines.push(_timeline7);
	      }
	      for (var _i18 = 0, _n7 = input.readInt(true); _i18 < _n7; _i18++) {
	        var _index2 = input.readInt(true);
	        var data = skeletonData.pathConstraints[_index2];
	        for (var _ii4 = 0, _nn4 = input.readInt(true); _ii4 < _nn4; _ii4++) {
	          switch (input.readByte()) {
	            case PATH_POSITION:
	              timelines.push(readTimeline1$1(input, new PathConstraintPositionTimeline(input.readInt(true), input.readInt(true), _index2), data.positionMode == PositionMode.Fixed ? scale : 1));
	              break;
	            case PATH_SPACING:
	              timelines.push(readTimeline1$1(input, new PathConstraintSpacingTimeline(input.readInt(true), input.readInt(true), _index2), data.spacingMode == SpacingMode.Length || data.spacingMode == SpacingMode.Fixed ? scale : 1));
	              break;
	            case PATH_MIX:
	              var _timeline8 = new PathConstraintMixTimeline(input.readInt(true), input.readInt(true), _index2);
	              var _time13 = input.readFloat(),
	                _mixRotate = input.readFloat(),
	                _mixX = input.readFloat(),
	                _mixY = input.readFloat();
	              for (var _frame8 = 0, _bezier7 = 0, _frameLast3 = _timeline8.getFrameCount() - 1;; _frame8++) {
	                _timeline8.setFrame(_frame8, _time13, _mixRotate, _mixX, _mixY);
	                if (_frame8 == _frameLast3) break;
	                var _time14 = input.readFloat(),
	                  _mixRotate2 = input.readFloat(),
	                  _mixX2 = input.readFloat(),
	                  _mixY2 = input.readFloat();
	                switch (input.readByte()) {
	                  case CURVE_STEPPED:
	                    _timeline8.setStepped(_frame8);
	                    break;
	                  case CURVE_BEZIER:
	                    setBezier(input, _timeline8, _bezier7++, _frame8, 0, _time13, _time14, _mixRotate, _mixRotate2, 1);
	                    setBezier(input, _timeline8, _bezier7++, _frame8, 1, _time13, _time14, _mixX, _mixX2, 1);
	                    setBezier(input, _timeline8, _bezier7++, _frame8, 2, _time13, _time14, _mixY, _mixY2, 1);
	                }
	                _time13 = _time14;
	                _mixRotate = _mixRotate2;
	                _mixX = _mixX2;
	                _mixY = _mixY2;
	              }
	              timelines.push(_timeline8);
	          }
	        }
	      }
	      for (var _i19 = 0, _n8 = input.readInt(true); _i19 < _n8; _i19++) {
	        var skin = skeletonData.skins[input.readInt(true)];
	        for (var _ii5 = 0, _nn5 = input.readInt(true); _ii5 < _nn5; _ii5++) {
	          var _slotIndex = input.readInt(true);
	          for (var iii = 0, nnn = input.readInt(true); iii < nnn; iii++) {
	            var attachmentName = input.readStringRef();
	            var attachment = skin.getAttachment(_slotIndex, attachmentName);
	            var weighted = attachment.bones;
	            var vertices = attachment.vertices;
	            var deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
	            var _frameCount4 = input.readInt(true);
	            var _frameLast4 = _frameCount4 - 1;
	            var _bezierCount5 = input.readInt(true);
	            var _timeline9 = new DeformTimeline(_frameCount4, _bezierCount5, _slotIndex, attachment);
	            var _time15 = input.readFloat();
	            for (var _frame9 = 0, _bezier8 = 0;; _frame9++) {
	              var deform = void 0;
	              var end = input.readInt(true);
	              if (end == 0) deform = weighted ? Utils.newFloatArray(deformLength) : vertices;else {
	                deform = Utils.newFloatArray(deformLength);
	                var start = input.readInt(true);
	                end += start;
	                if (scale == 1) {
	                  for (var v = start; v < end; v++) deform[v] = input.readFloat();
	                } else {
	                  for (var _v = start; _v < end; _v++) deform[_v] = input.readFloat() * scale;
	                }
	                if (!weighted) {
	                  for (var _v2 = 0, vn = deform.length; _v2 < vn; _v2++) deform[_v2] += vertices[_v2];
	                }
	              }
	              _timeline9.setFrame(_frame9, _time15, deform);
	              if (_frame9 == _frameLast4) break;
	              var _time16 = input.readFloat();
	              switch (input.readByte()) {
	                case CURVE_STEPPED:
	                  _timeline9.setStepped(_frame9);
	                  break;
	                case CURVE_BEZIER:
	                  setBezier(input, _timeline9, _bezier8++, _frame9, 0, _time15, _time16, 0, 1, 1);
	              }
	              _time15 = _time16;
	            }
	            timelines.push(_timeline9);
	          }
	        }
	      }
	      var drawOrderCount = input.readInt(true);
	      if (drawOrderCount > 0) {
	        var _timeline10 = new DrawOrderTimeline(drawOrderCount);
	        var slotCount = skeletonData.slots.length;
	        for (var _i20 = 0; _i20 < drawOrderCount; _i20++) {
	          var _time17 = input.readFloat();
	          var offsetCount = input.readInt(true);
	          var drawOrder = Utils.newArray(slotCount, 0);
	          for (var _ii6 = slotCount - 1; _ii6 >= 0; _ii6--) drawOrder[_ii6] = -1;
	          var unchanged = Utils.newArray(slotCount - offsetCount, 0);
	          var originalIndex = 0,
	            unchangedIndex = 0;
	          for (var _ii7 = 0; _ii7 < offsetCount; _ii7++) {
	            var _slotIndex2 = input.readInt(true);
	            while (originalIndex != _slotIndex2) unchanged[unchangedIndex++] = originalIndex++;
	            drawOrder[originalIndex + input.readInt(true)] = originalIndex++;
	          }
	          while (originalIndex < slotCount) unchanged[unchangedIndex++] = originalIndex++;
	          for (var _ii8 = slotCount - 1; _ii8 >= 0; _ii8--) if (drawOrder[_ii8] == -1) drawOrder[_ii8] = unchanged[--unchangedIndex];
	          _timeline10.setFrame(_i20, _time17, drawOrder);
	        }
	        timelines.push(_timeline10);
	      }
	      var eventCount = input.readInt(true);
	      if (eventCount > 0) {
	        var _timeline11 = new EventTimeline(eventCount);
	        for (var _i21 = 0; _i21 < eventCount; _i21++) {
	          var _time18 = input.readFloat();
	          var eventData = skeletonData.events[input.readInt(true)];
	          var event = new Event(_time18, eventData);
	          event.intValue = input.readInt(false);
	          event.floatValue = input.readFloat();
	          event.stringValue = input.readBoolean() ? input.readString() : eventData.stringValue;
	          if (event.data.audioPath) {
	            event.volume = input.readFloat();
	            event.balance = input.readFloat();
	          }
	          _timeline11.setFrame(_i21, event);
	        }
	        timelines.push(_timeline11);
	      }
	      var duration = 0;
	      for (var _i22 = 0, _n9 = timelines.length; _i22 < _n9; _i22++) duration = Math.max(duration, timelines[_i22].getDuration());
	      return new Animation(name, timelines, duration);
	    }
	  }]);
	}();
	var BinaryInput = function () {
	  function BinaryInput(data) {
	    var strings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Array();
	    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var buffer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new DataView(data.buffer);
	    _classCallCheck(this, BinaryInput);
	    this.strings = strings;
	    this.index = index;
	    this.buffer = buffer;
	  }
	  return _createClass(BinaryInput, [{
	    key: "readByte",
	    value: function readByte() {
	      return this.buffer.getInt8(this.index++);
	    }
	  }, {
	    key: "readUnsignedByte",
	    value: function readUnsignedByte() {
	      return this.buffer.getUint8(this.index++);
	    }
	  }, {
	    key: "readShort",
	    value: function readShort() {
	      var value = this.buffer.getInt16(this.index);
	      this.index += 2;
	      return value;
	    }
	  }, {
	    key: "readInt32",
	    value: function readInt32() {
	      var value = this.buffer.getInt32(this.index);
	      this.index += 4;
	      return value;
	    }
	  }, {
	    key: "readInt",
	    value: function readInt(optimizePositive) {
	      var b = this.readByte();
	      var result = b & 0x7F;
	      if ((b & 0x80) != 0) {
	        b = this.readByte();
	        result |= (b & 0x7F) << 7;
	        if ((b & 0x80) != 0) {
	          b = this.readByte();
	          result |= (b & 0x7F) << 14;
	          if ((b & 0x80) != 0) {
	            b = this.readByte();
	            result |= (b & 0x7F) << 21;
	            if ((b & 0x80) != 0) {
	              b = this.readByte();
	              result |= (b & 0x7F) << 28;
	            }
	          }
	        }
	      }
	      return optimizePositive ? result : result >>> 1 ^ -(result & 1);
	    }
	  }, {
	    key: "readStringRef",
	    value: function readStringRef() {
	      var index = this.readInt(true);
	      return index == 0 ? null : this.strings[index - 1];
	    }
	  }, {
	    key: "readString",
	    value: function readString() {
	      var byteCount = this.readInt(true);
	      switch (byteCount) {
	        case 0:
	          return null;
	        case 1:
	          return "";
	      }
	      byteCount--;
	      var chars = "";
	      for (var i = 0; i < byteCount;) {
	        var b = this.readUnsignedByte();
	        switch (b >> 4) {
	          case 12:
	          case 13:
	            chars += String.fromCharCode((b & 0x1F) << 6 | this.readByte() & 0x3F);
	            i += 2;
	            break;
	          case 14:
	            chars += String.fromCharCode((b & 0x0F) << 12 | (this.readByte() & 0x3F) << 6 | this.readByte() & 0x3F);
	            i += 3;
	            break;
	          default:
	            chars += String.fromCharCode(b);
	            i++;
	        }
	      }
	      return chars;
	    }
	  }, {
	    key: "readFloat",
	    value: function readFloat() {
	      var value = this.buffer.getFloat32(this.index);
	      this.index += 4;
	      return value;
	    }
	  }, {
	    key: "readBoolean",
	    value: function readBoolean() {
	      return this.readByte() != 0;
	    }
	  }]);
	}();
	var LinkedMesh$1 = _createClass(function LinkedMesh(mesh, skin, slotIndex, parent, inheritDeform) {
	  _classCallCheck(this, LinkedMesh);
	  this.mesh = mesh;
	  this.skin = skin;
	  this.slotIndex = slotIndex;
	  this.parent = parent;
	  this.inheritDeform = inheritDeform;
	});
	var Vertices = _createClass(function Vertices() {
	  var bones = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	  var vertices = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  _classCallCheck(this, Vertices);
	  this.bones = bones;
	  this.vertices = vertices;
	});
	var AttachmentType;
	(function (AttachmentType) {
	  AttachmentType[AttachmentType["Region"] = 0] = "Region";
	  AttachmentType[AttachmentType["BoundingBox"] = 1] = "BoundingBox";
	  AttachmentType[AttachmentType["Mesh"] = 2] = "Mesh";
	  AttachmentType[AttachmentType["LinkedMesh"] = 3] = "LinkedMesh";
	  AttachmentType[AttachmentType["Path"] = 4] = "Path";
	  AttachmentType[AttachmentType["Point"] = 5] = "Point";
	  AttachmentType[AttachmentType["Clipping"] = 6] = "Clipping";
	})(AttachmentType || (AttachmentType = {}));
	function readTimeline1$1(input, timeline, scale) {
	  var time = input.readFloat(),
	    value = input.readFloat() * scale;
	  for (var frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1;; frame++) {
	    timeline.setFrame(frame, time, value);
	    if (frame == frameLast) break;
	    var time2 = input.readFloat(),
	      value2 = input.readFloat() * scale;
	    switch (input.readByte()) {
	      case CURVE_STEPPED:
	        timeline.setStepped(frame);
	        break;
	      case CURVE_BEZIER:
	        setBezier(input, timeline, bezier++, frame, 0, time, time2, value, value2, scale);
	    }
	    time = time2;
	    value = value2;
	  }
	  return timeline;
	}
	function readTimeline2$1(input, timeline, scale) {
	  var time = input.readFloat(),
	    value1 = input.readFloat() * scale,
	    value2 = input.readFloat() * scale;
	  for (var frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1;; frame++) {
	    timeline.setFrame(frame, time, value1, value2);
	    if (frame == frameLast) break;
	    var time2 = input.readFloat(),
	      nvalue1 = input.readFloat() * scale,
	      nvalue2 = input.readFloat() * scale;
	    switch (input.readByte()) {
	      case CURVE_STEPPED:
	        timeline.setStepped(frame);
	        break;
	      case CURVE_BEZIER:
	        setBezier(input, timeline, bezier++, frame, 0, time, time2, value1, nvalue1, scale);
	        setBezier(input, timeline, bezier++, frame, 1, time, time2, value2, nvalue2, scale);
	    }
	    time = time2;
	    value1 = nvalue1;
	    value2 = nvalue2;
	  }
	  return timeline;
	}
	function setBezier(input, timeline, bezier, frame, value, time1, time2, value1, value2, scale) {
	  timeline.setBezier(bezier, frame, value, time1, value1, input.readFloat(), input.readFloat() * scale, input.readFloat(), input.readFloat() * scale, time2, value2);
	}
	var BONE_ROTATE = 0;
	var BONE_TRANSLATE = 1;
	var BONE_TRANSLATEX = 2;
	var BONE_TRANSLATEY = 3;
	var BONE_SCALE = 4;
	var BONE_SCALEX = 5;
	var BONE_SCALEY = 6;
	var BONE_SHEAR = 7;
	var BONE_SHEARX = 8;
	var BONE_SHEARY = 9;
	var SLOT_ATTACHMENT = 0;
	var SLOT_RGBA = 1;
	var SLOT_RGB = 2;
	var SLOT_RGBA2 = 3;
	var SLOT_RGB2 = 4;
	var SLOT_ALPHA = 5;
	var PATH_POSITION = 0;
	var PATH_SPACING = 1;
	var PATH_MIX = 2;
	var CURVE_STEPPED = 1;
	var CURVE_BEZIER = 2;

	var SkeletonBounds = function () {
	  function SkeletonBounds() {
	    _classCallCheck(this, SkeletonBounds);
	    this.minX = 0;
	    this.minY = 0;
	    this.maxX = 0;
	    this.maxY = 0;
	    this.boundingBoxes = new Array();
	    this.polygons = new Array();
	    this.polygonPool = new Pool(function () {
	      return Utils.newFloatArray(16);
	    });
	  }
	  return _createClass(SkeletonBounds, [{
	    key: "update",
	    value: function update(skeleton, updateAabb) {
	      if (!skeleton) throw new Error("skeleton cannot be null.");
	      var boundingBoxes = this.boundingBoxes;
	      var polygons = this.polygons;
	      var polygonPool = this.polygonPool;
	      var slots = skeleton.slots;
	      var slotCount = slots.length;
	      boundingBoxes.length = 0;
	      polygonPool.freeAll(polygons);
	      polygons.length = 0;
	      for (var i = 0; i < slotCount; i++) {
	        var slot = slots[i];
	        if (!slot.bone.active) continue;
	        var attachment = slot.getAttachment();
	        if (attachment instanceof BoundingBoxAttachment) {
	          var boundingBox = attachment;
	          boundingBoxes.push(boundingBox);
	          var polygon = polygonPool.obtain();
	          if (polygon.length != boundingBox.worldVerticesLength) {
	            polygon = Utils.newFloatArray(boundingBox.worldVerticesLength);
	          }
	          polygons.push(polygon);
	          boundingBox.computeWorldVertices(slot, 0, boundingBox.worldVerticesLength, polygon, 0, 2);
	        }
	      }
	      if (updateAabb) {
	        this.aabbCompute();
	      } else {
	        this.minX = Number.POSITIVE_INFINITY;
	        this.minY = Number.POSITIVE_INFINITY;
	        this.maxX = Number.NEGATIVE_INFINITY;
	        this.maxY = Number.NEGATIVE_INFINITY;
	      }
	    }
	  }, {
	    key: "aabbCompute",
	    value: function aabbCompute() {
	      var minX = Number.POSITIVE_INFINITY,
	        minY = Number.POSITIVE_INFINITY,
	        maxX = Number.NEGATIVE_INFINITY,
	        maxY = Number.NEGATIVE_INFINITY;
	      var polygons = this.polygons;
	      for (var i = 0, n = polygons.length; i < n; i++) {
	        var polygon = polygons[i];
	        var vertices = polygon;
	        for (var ii = 0, nn = polygon.length; ii < nn; ii += 2) {
	          var x = vertices[ii];
	          var y = vertices[ii + 1];
	          minX = Math.min(minX, x);
	          minY = Math.min(minY, y);
	          maxX = Math.max(maxX, x);
	          maxY = Math.max(maxY, y);
	        }
	      }
	      this.minX = minX;
	      this.minY = minY;
	      this.maxX = maxX;
	      this.maxY = maxY;
	    }
	  }, {
	    key: "aabbContainsPoint",
	    value: function aabbContainsPoint(x, y) {
	      return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
	    }
	  }, {
	    key: "aabbIntersectsSegment",
	    value: function aabbIntersectsSegment(x1, y1, x2, y2) {
	      var minX = this.minX;
	      var minY = this.minY;
	      var maxX = this.maxX;
	      var maxY = this.maxY;
	      if (x1 <= minX && x2 <= minX || y1 <= minY && y2 <= minY || x1 >= maxX && x2 >= maxX || y1 >= maxY && y2 >= maxY) return false;
	      var m = (y2 - y1) / (x2 - x1);
	      var y = m * (minX - x1) + y1;
	      if (y > minY && y < maxY) return true;
	      y = m * (maxX - x1) + y1;
	      if (y > minY && y < maxY) return true;
	      var x = (minY - y1) / m + x1;
	      if (x > minX && x < maxX) return true;
	      x = (maxY - y1) / m + x1;
	      if (x > minX && x < maxX) return true;
	      return false;
	    }
	  }, {
	    key: "aabbIntersectsSkeleton",
	    value: function aabbIntersectsSkeleton(bounds) {
	      return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
	    }
	  }, {
	    key: "containsPoint",
	    value: function containsPoint(x, y) {
	      var polygons = this.polygons;
	      for (var i = 0, n = polygons.length; i < n; i++) if (this.containsPointPolygon(polygons[i], x, y)) return this.boundingBoxes[i];
	      return null;
	    }
	  }, {
	    key: "containsPointPolygon",
	    value: function containsPointPolygon(polygon, x, y) {
	      var vertices = polygon;
	      var nn = polygon.length;
	      var prevIndex = nn - 2;
	      var inside = false;
	      for (var ii = 0; ii < nn; ii += 2) {
	        var vertexY = vertices[ii + 1];
	        var prevY = vertices[prevIndex + 1];
	        if (vertexY < y && prevY >= y || prevY < y && vertexY >= y) {
	          var vertexX = vertices[ii];
	          if (vertexX + (y - vertexY) / (prevY - vertexY) * (vertices[prevIndex] - vertexX) < x) inside = !inside;
	        }
	        prevIndex = ii;
	      }
	      return inside;
	    }
	  }, {
	    key: "intersectsSegment",
	    value: function intersectsSegment(x1, y1, x2, y2) {
	      var polygons = this.polygons;
	      for (var i = 0, n = polygons.length; i < n; i++) if (this.intersectsSegmentPolygon(polygons[i], x1, y1, x2, y2)) return this.boundingBoxes[i];
	      return null;
	    }
	  }, {
	    key: "intersectsSegmentPolygon",
	    value: function intersectsSegmentPolygon(polygon, x1, y1, x2, y2) {
	      var vertices = polygon;
	      var nn = polygon.length;
	      var width12 = x1 - x2,
	        height12 = y1 - y2;
	      var det1 = x1 * y2 - y1 * x2;
	      var x3 = vertices[nn - 2],
	        y3 = vertices[nn - 1];
	      for (var ii = 0; ii < nn; ii += 2) {
	        var x4 = vertices[ii],
	          y4 = vertices[ii + 1];
	        var det2 = x3 * y4 - y3 * x4;
	        var width34 = x3 - x4,
	          height34 = y3 - y4;
	        var det3 = width12 * height34 - height12 * width34;
	        var x = (det1 * width34 - width12 * det2) / det3;
	        if ((x >= x3 && x <= x4 || x >= x4 && x <= x3) && (x >= x1 && x <= x2 || x >= x2 && x <= x1)) {
	          var y = (det1 * height34 - height12 * det2) / det3;
	          if ((y >= y3 && y <= y4 || y >= y4 && y <= y3) && (y >= y1 && y <= y2 || y >= y2 && y <= y1)) return true;
	        }
	        x3 = x4;
	        y3 = y4;
	      }
	      return false;
	    }
	  }, {
	    key: "getPolygon",
	    value: function getPolygon(boundingBox) {
	      if (!boundingBox) throw new Error("boundingBox cannot be null.");
	      var index = this.boundingBoxes.indexOf(boundingBox);
	      return index == -1 ? null : this.polygons[index];
	    }
	  }, {
	    key: "getWidth",
	    value: function getWidth() {
	      return this.maxX - this.minX;
	    }
	  }, {
	    key: "getHeight",
	    value: function getHeight() {
	      return this.maxY - this.minY;
	    }
	  }]);
	}();

	var Triangulator = function () {
	  function Triangulator() {
	    _classCallCheck(this, Triangulator);
	    this.convexPolygons = new Array();
	    this.convexPolygonsIndices = new Array();
	    this.indicesArray = new Array();
	    this.isConcaveArray = new Array();
	    this.triangles = new Array();
	    this.polygonPool = new Pool(function () {
	      return new Array();
	    });
	    this.polygonIndicesPool = new Pool(function () {
	      return new Array();
	    });
	  }
	  return _createClass(Triangulator, [{
	    key: "triangulate",
	    value: function triangulate(verticesArray) {
	      var vertices = verticesArray;
	      var vertexCount = verticesArray.length >> 1;
	      var indices = this.indicesArray;
	      indices.length = 0;
	      for (var i = 0; i < vertexCount; i++) indices[i] = i;
	      var isConcave = this.isConcaveArray;
	      isConcave.length = 0;
	      for (var _i = 0, n = vertexCount; _i < n; ++_i) isConcave[_i] = Triangulator.isConcave(_i, vertexCount, vertices, indices);
	      var triangles = this.triangles;
	      triangles.length = 0;
	      while (vertexCount > 3) {
	        var previous = vertexCount - 1,
	          _i2 = 0,
	          next = 1;
	        while (true) {
	          outer: if (!isConcave[_i2]) {
	            var p1 = indices[previous] << 1,
	              p2 = indices[_i2] << 1,
	              p3 = indices[next] << 1;
	            var p1x = vertices[p1],
	              p1y = vertices[p1 + 1];
	            var p2x = vertices[p2],
	              p2y = vertices[p2 + 1];
	            var p3x = vertices[p3],
	              p3y = vertices[p3 + 1];
	            for (var ii = (next + 1) % vertexCount; ii != previous; ii = (ii + 1) % vertexCount) {
	              if (!isConcave[ii]) continue;
	              var v = indices[ii] << 1;
	              var vx = vertices[v],
	                vy = vertices[v + 1];
	              if (Triangulator.positiveArea(p3x, p3y, p1x, p1y, vx, vy)) {
	                if (Triangulator.positiveArea(p1x, p1y, p2x, p2y, vx, vy)) {
	                  if (Triangulator.positiveArea(p2x, p2y, p3x, p3y, vx, vy)) break outer;
	                }
	              }
	            }
	            break;
	          }
	          if (next == 0) {
	            do {
	              if (!isConcave[_i2]) break;
	              _i2--;
	            } while (_i2 > 0);
	            break;
	          }
	          previous = _i2;
	          _i2 = next;
	          next = (next + 1) % vertexCount;
	        }
	        triangles.push(indices[(vertexCount + _i2 - 1) % vertexCount]);
	        triangles.push(indices[_i2]);
	        triangles.push(indices[(_i2 + 1) % vertexCount]);
	        indices.splice(_i2, 1);
	        isConcave.splice(_i2, 1);
	        vertexCount--;
	        var previousIndex = (vertexCount + _i2 - 1) % vertexCount;
	        var nextIndex = _i2 == vertexCount ? 0 : _i2;
	        isConcave[previousIndex] = Triangulator.isConcave(previousIndex, vertexCount, vertices, indices);
	        isConcave[nextIndex] = Triangulator.isConcave(nextIndex, vertexCount, vertices, indices);
	      }
	      if (vertexCount == 3) {
	        triangles.push(indices[2]);
	        triangles.push(indices[0]);
	        triangles.push(indices[1]);
	      }
	      return triangles;
	    }
	  }, {
	    key: "decompose",
	    value: function decompose(verticesArray, triangles) {
	      var vertices = verticesArray;
	      var convexPolygons = this.convexPolygons;
	      this.polygonPool.freeAll(convexPolygons);
	      convexPolygons.length = 0;
	      var convexPolygonsIndices = this.convexPolygonsIndices;
	      this.polygonIndicesPool.freeAll(convexPolygonsIndices);
	      convexPolygonsIndices.length = 0;
	      var polygonIndices = this.polygonIndicesPool.obtain();
	      polygonIndices.length = 0;
	      var polygon = this.polygonPool.obtain();
	      polygon.length = 0;
	      var fanBaseIndex = -1,
	        lastWinding = 0;
	      for (var i = 0, n = triangles.length; i < n; i += 3) {
	        var t1 = triangles[i] << 1,
	          t2 = triangles[i + 1] << 1,
	          t3 = triangles[i + 2] << 1;
	        var x1 = vertices[t1],
	          y1 = vertices[t1 + 1];
	        var x2 = vertices[t2],
	          y2 = vertices[t2 + 1];
	        var x3 = vertices[t3],
	          y3 = vertices[t3 + 1];
	        var merged = false;
	        if (fanBaseIndex == t1) {
	          var o = polygon.length - 4;
	          var winding1 = Triangulator.winding(polygon[o], polygon[o + 1], polygon[o + 2], polygon[o + 3], x3, y3);
	          var winding2 = Triangulator.winding(x3, y3, polygon[0], polygon[1], polygon[2], polygon[3]);
	          if (winding1 == lastWinding && winding2 == lastWinding) {
	            polygon.push(x3);
	            polygon.push(y3);
	            polygonIndices.push(t3);
	            merged = true;
	          }
	        }
	        if (!merged) {
	          if (polygon.length > 0) {
	            convexPolygons.push(polygon);
	            convexPolygonsIndices.push(polygonIndices);
	          } else {
	            this.polygonPool.free(polygon);
	            this.polygonIndicesPool.free(polygonIndices);
	          }
	          polygon = this.polygonPool.obtain();
	          polygon.length = 0;
	          polygon.push(x1);
	          polygon.push(y1);
	          polygon.push(x2);
	          polygon.push(y2);
	          polygon.push(x3);
	          polygon.push(y3);
	          polygonIndices = this.polygonIndicesPool.obtain();
	          polygonIndices.length = 0;
	          polygonIndices.push(t1);
	          polygonIndices.push(t2);
	          polygonIndices.push(t3);
	          lastWinding = Triangulator.winding(x1, y1, x2, y2, x3, y3);
	          fanBaseIndex = t1;
	        }
	      }
	      if (polygon.length > 0) {
	        convexPolygons.push(polygon);
	        convexPolygonsIndices.push(polygonIndices);
	      }
	      for (var _i3 = 0, _n = convexPolygons.length; _i3 < _n; _i3++) {
	        polygonIndices = convexPolygonsIndices[_i3];
	        if (polygonIndices.length == 0) continue;
	        var firstIndex = polygonIndices[0];
	        var lastIndex = polygonIndices[polygonIndices.length - 1];
	        polygon = convexPolygons[_i3];
	        var _o = polygon.length - 4;
	        var prevPrevX = polygon[_o],
	          prevPrevY = polygon[_o + 1];
	        var prevX = polygon[_o + 2],
	          prevY = polygon[_o + 3];
	        var firstX = polygon[0],
	          firstY = polygon[1];
	        var secondX = polygon[2],
	          secondY = polygon[3];
	        var winding = Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, firstX, firstY);
	        for (var ii = 0; ii < _n; ii++) {
	          if (ii == _i3) continue;
	          var otherIndices = convexPolygonsIndices[ii];
	          if (otherIndices.length != 3) continue;
	          var otherFirstIndex = otherIndices[0];
	          var otherSecondIndex = otherIndices[1];
	          var otherLastIndex = otherIndices[2];
	          var otherPoly = convexPolygons[ii];
	          var _x = otherPoly[otherPoly.length - 2],
	            _y = otherPoly[otherPoly.length - 1];
	          if (otherFirstIndex != firstIndex || otherSecondIndex != lastIndex) continue;
	          var _winding = Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, _x, _y);
	          var _winding2 = Triangulator.winding(_x, _y, firstX, firstY, secondX, secondY);
	          if (_winding == winding && _winding2 == winding) {
	            otherPoly.length = 0;
	            otherIndices.length = 0;
	            polygon.push(_x);
	            polygon.push(_y);
	            polygonIndices.push(otherLastIndex);
	            prevPrevX = prevX;
	            prevPrevY = prevY;
	            prevX = _x;
	            prevY = _y;
	            ii = 0;
	          }
	        }
	      }
	      for (var _i4 = convexPolygons.length - 1; _i4 >= 0; _i4--) {
	        polygon = convexPolygons[_i4];
	        if (polygon.length == 0) {
	          convexPolygons.splice(_i4, 1);
	          this.polygonPool.free(polygon);
	          polygonIndices = convexPolygonsIndices[_i4];
	          convexPolygonsIndices.splice(_i4, 1);
	          this.polygonIndicesPool.free(polygonIndices);
	        }
	      }
	      return convexPolygons;
	    }
	  }], [{
	    key: "isConcave",
	    value: function isConcave(index, vertexCount, vertices, indices) {
	      var previous = indices[(vertexCount + index - 1) % vertexCount] << 1;
	      var current = indices[index] << 1;
	      var next = indices[(index + 1) % vertexCount] << 1;
	      return !this.positiveArea(vertices[previous], vertices[previous + 1], vertices[current], vertices[current + 1], vertices[next], vertices[next + 1]);
	    }
	  }, {
	    key: "positiveArea",
	    value: function positiveArea(p1x, p1y, p2x, p2y, p3x, p3y) {
	      return p1x * (p3y - p2y) + p2x * (p1y - p3y) + p3x * (p2y - p1y) >= 0;
	    }
	  }, {
	    key: "winding",
	    value: function winding(p1x, p1y, p2x, p2y, p3x, p3y) {
	      var px = p2x - p1x,
	        py = p2y - p1y;
	      return p3x * py - p3y * px + px * p1y - p1x * py >= 0 ? 1 : -1;
	    }
	  }]);
	}();

	var SkeletonClipping = function () {
	  function SkeletonClipping() {
	    _classCallCheck(this, SkeletonClipping);
	    this.triangulator = new Triangulator();
	    this.clippingPolygon = new Array();
	    this.clipOutput = new Array();
	    this.clippedVertices = new Array();
	    this.clippedTriangles = new Array();
	    this.scratch = new Array();
	  }
	  return _createClass(SkeletonClipping, [{
	    key: "clipStart",
	    value: function clipStart(slot, clip) {
	      if (this.clipAttachment) return 0;
	      this.clipAttachment = clip;
	      var n = clip.worldVerticesLength;
	      var vertices = Utils.setArraySize(this.clippingPolygon, n);
	      clip.computeWorldVertices(slot, 0, n, vertices, 0, 2);
	      var clippingPolygon = this.clippingPolygon;
	      SkeletonClipping.makeClockwise(clippingPolygon);
	      var clippingPolygons = this.clippingPolygons = this.triangulator.decompose(clippingPolygon, this.triangulator.triangulate(clippingPolygon));
	      for (var i = 0, _n = clippingPolygons.length; i < _n; i++) {
	        var polygon = clippingPolygons[i];
	        SkeletonClipping.makeClockwise(polygon);
	        polygon.push(polygon[0]);
	        polygon.push(polygon[1]);
	      }
	      return clippingPolygons.length;
	    }
	  }, {
	    key: "clipEndWithSlot",
	    value: function clipEndWithSlot(slot) {
	      if (this.clipAttachment && this.clipAttachment.endSlot == slot.data) this.clipEnd();
	    }
	  }, {
	    key: "clipEnd",
	    value: function clipEnd() {
	      if (!this.clipAttachment) return;
	      this.clipAttachment = null;
	      this.clippingPolygons = null;
	      this.clippedVertices.length = 0;
	      this.clippedTriangles.length = 0;
	      this.clippingPolygon.length = 0;
	    }
	  }, {
	    key: "isClipping",
	    value: function isClipping() {
	      return this.clipAttachment != null;
	    }
	  }, {
	    key: "clipTriangles",
	    value: function clipTriangles(vertices, verticesLength, triangles, trianglesLength, uvs, light, dark, twoColor) {
	      var clipOutput = this.clipOutput,
	        clippedVertices = this.clippedVertices;
	      var clippedTriangles = this.clippedTriangles;
	      var polygons = this.clippingPolygons;
	      var polygonsCount = this.clippingPolygons.length;
	      var vertexSize = twoColor ? 12 : 8;
	      var index = 0;
	      clippedVertices.length = 0;
	      clippedTriangles.length = 0;
	      outer: for (var i = 0; i < trianglesLength; i += 3) {
	        var vertexOffset = triangles[i] << 1;
	        var x1 = vertices[vertexOffset],
	          y1 = vertices[vertexOffset + 1];
	        var u1 = uvs[vertexOffset],
	          v1 = uvs[vertexOffset + 1];
	        vertexOffset = triangles[i + 1] << 1;
	        var x2 = vertices[vertexOffset],
	          y2 = vertices[vertexOffset + 1];
	        var u2 = uvs[vertexOffset],
	          v2 = uvs[vertexOffset + 1];
	        vertexOffset = triangles[i + 2] << 1;
	        var x3 = vertices[vertexOffset],
	          y3 = vertices[vertexOffset + 1];
	        var u3 = uvs[vertexOffset],
	          v3 = uvs[vertexOffset + 1];
	        for (var p = 0; p < polygonsCount; p++) {
	          var s = clippedVertices.length;
	          if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
	            var clipOutputLength = clipOutput.length;
	            if (clipOutputLength == 0) continue;
	            var d0 = y2 - y3,
	              d1 = x3 - x2,
	              d2 = x1 - x3,
	              d4 = y3 - y1;
	            var d = 1 / (d0 * d2 + d1 * (y1 - y3));
	            var clipOutputCount = clipOutputLength >> 1;
	            var clipOutputItems = this.clipOutput;
	            var clippedVerticesItems = Utils.setArraySize(clippedVertices, s + clipOutputCount * vertexSize);
	            for (var ii = 0; ii < clipOutputLength; ii += 2) {
	              var x = clipOutputItems[ii],
	                y = clipOutputItems[ii + 1];
	              clippedVerticesItems[s] = x;
	              clippedVerticesItems[s + 1] = y;
	              clippedVerticesItems[s + 2] = light.r;
	              clippedVerticesItems[s + 3] = light.g;
	              clippedVerticesItems[s + 4] = light.b;
	              clippedVerticesItems[s + 5] = light.a;
	              var c0 = x - x3,
	                c1 = y - y3;
	              var a = (d0 * c0 + d1 * c1) * d;
	              var b = (d4 * c0 + d2 * c1) * d;
	              var c = 1 - a - b;
	              clippedVerticesItems[s + 6] = u1 * a + u2 * b + u3 * c;
	              clippedVerticesItems[s + 7] = v1 * a + v2 * b + v3 * c;
	              if (twoColor) {
	                clippedVerticesItems[s + 8] = dark.r;
	                clippedVerticesItems[s + 9] = dark.g;
	                clippedVerticesItems[s + 10] = dark.b;
	                clippedVerticesItems[s + 11] = dark.a;
	              }
	              s += vertexSize;
	            }
	            s = clippedTriangles.length;
	            var clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
	            clipOutputCount--;
	            for (var _ii = 1; _ii < clipOutputCount; _ii++) {
	              clippedTrianglesItems[s] = index;
	              clippedTrianglesItems[s + 1] = index + _ii;
	              clippedTrianglesItems[s + 2] = index + _ii + 1;
	              s += 3;
	            }
	            index += clipOutputCount + 1;
	          } else {
	            var _clippedVerticesItems = Utils.setArraySize(clippedVertices, s + 3 * vertexSize);
	            _clippedVerticesItems[s] = x1;
	            _clippedVerticesItems[s + 1] = y1;
	            _clippedVerticesItems[s + 2] = light.r;
	            _clippedVerticesItems[s + 3] = light.g;
	            _clippedVerticesItems[s + 4] = light.b;
	            _clippedVerticesItems[s + 5] = light.a;
	            if (!twoColor) {
	              _clippedVerticesItems[s + 6] = u1;
	              _clippedVerticesItems[s + 7] = v1;
	              _clippedVerticesItems[s + 8] = x2;
	              _clippedVerticesItems[s + 9] = y2;
	              _clippedVerticesItems[s + 10] = light.r;
	              _clippedVerticesItems[s + 11] = light.g;
	              _clippedVerticesItems[s + 12] = light.b;
	              _clippedVerticesItems[s + 13] = light.a;
	              _clippedVerticesItems[s + 14] = u2;
	              _clippedVerticesItems[s + 15] = v2;
	              _clippedVerticesItems[s + 16] = x3;
	              _clippedVerticesItems[s + 17] = y3;
	              _clippedVerticesItems[s + 18] = light.r;
	              _clippedVerticesItems[s + 19] = light.g;
	              _clippedVerticesItems[s + 20] = light.b;
	              _clippedVerticesItems[s + 21] = light.a;
	              _clippedVerticesItems[s + 22] = u3;
	              _clippedVerticesItems[s + 23] = v3;
	            } else {
	              _clippedVerticesItems[s + 6] = u1;
	              _clippedVerticesItems[s + 7] = v1;
	              _clippedVerticesItems[s + 8] = dark.r;
	              _clippedVerticesItems[s + 9] = dark.g;
	              _clippedVerticesItems[s + 10] = dark.b;
	              _clippedVerticesItems[s + 11] = dark.a;
	              _clippedVerticesItems[s + 12] = x2;
	              _clippedVerticesItems[s + 13] = y2;
	              _clippedVerticesItems[s + 14] = light.r;
	              _clippedVerticesItems[s + 15] = light.g;
	              _clippedVerticesItems[s + 16] = light.b;
	              _clippedVerticesItems[s + 17] = light.a;
	              _clippedVerticesItems[s + 18] = u2;
	              _clippedVerticesItems[s + 19] = v2;
	              _clippedVerticesItems[s + 20] = dark.r;
	              _clippedVerticesItems[s + 21] = dark.g;
	              _clippedVerticesItems[s + 22] = dark.b;
	              _clippedVerticesItems[s + 23] = dark.a;
	              _clippedVerticesItems[s + 24] = x3;
	              _clippedVerticesItems[s + 25] = y3;
	              _clippedVerticesItems[s + 26] = light.r;
	              _clippedVerticesItems[s + 27] = light.g;
	              _clippedVerticesItems[s + 28] = light.b;
	              _clippedVerticesItems[s + 29] = light.a;
	              _clippedVerticesItems[s + 30] = u3;
	              _clippedVerticesItems[s + 31] = v3;
	              _clippedVerticesItems[s + 32] = dark.r;
	              _clippedVerticesItems[s + 33] = dark.g;
	              _clippedVerticesItems[s + 34] = dark.b;
	              _clippedVerticesItems[s + 35] = dark.a;
	            }
	            s = clippedTriangles.length;
	            var _clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3);
	            _clippedTrianglesItems[s] = index;
	            _clippedTrianglesItems[s + 1] = index + 1;
	            _clippedTrianglesItems[s + 2] = index + 2;
	            index += 3;
	            continue outer;
	          }
	        }
	      }
	    }
	  }, {
	    key: "clip",
	    value: function clip(x1, y1, x2, y2, x3, y3, clippingArea, output) {
	      var originalOutput = output;
	      var clipped = false;
	      var input = null;
	      if (clippingArea.length % 4 >= 2) {
	        input = output;
	        output = this.scratch;
	      } else input = this.scratch;
	      input.length = 0;
	      input.push(x1);
	      input.push(y1);
	      input.push(x2);
	      input.push(y2);
	      input.push(x3);
	      input.push(y3);
	      input.push(x1);
	      input.push(y1);
	      output.length = 0;
	      var clippingVertices = clippingArea;
	      var clippingVerticesLast = clippingArea.length - 4;
	      for (var i = 0;; i += 2) {
	        var edgeX = clippingVertices[i],
	          edgeY = clippingVertices[i + 1];
	        var edgeX2 = clippingVertices[i + 2],
	          edgeY2 = clippingVertices[i + 3];
	        var deltaX = edgeX - edgeX2,
	          deltaY = edgeY - edgeY2;
	        var inputVertices = input;
	        var inputVerticesLength = input.length - 2,
	          outputStart = output.length;
	        for (var ii = 0; ii < inputVerticesLength; ii += 2) {
	          var inputX = inputVertices[ii],
	            inputY = inputVertices[ii + 1];
	          var inputX2 = inputVertices[ii + 2],
	            inputY2 = inputVertices[ii + 3];
	          var side2 = deltaX * (inputY2 - edgeY2) - deltaY * (inputX2 - edgeX2) > 0;
	          if (deltaX * (inputY - edgeY2) - deltaY * (inputX - edgeX2) > 0) {
	            if (side2) {
	              output.push(inputX2);
	              output.push(inputY2);
	              continue;
	            }
	            var c0 = inputY2 - inputY,
	              c2 = inputX2 - inputX;
	            var s = c0 * (edgeX2 - edgeX) - c2 * (edgeY2 - edgeY);
	            if (Math.abs(s) > 0.000001) {
	              var ua = (c2 * (edgeY - inputY) - c0 * (edgeX - inputX)) / s;
	              output.push(edgeX + (edgeX2 - edgeX) * ua);
	              output.push(edgeY + (edgeY2 - edgeY) * ua);
	            } else {
	              output.push(edgeX);
	              output.push(edgeY);
	            }
	          } else if (side2) {
	            var _c = inputY2 - inputY,
	              _c2 = inputX2 - inputX;
	            var _s = _c * (edgeX2 - edgeX) - _c2 * (edgeY2 - edgeY);
	            if (Math.abs(_s) > 0.000001) {
	              var _ua = (_c2 * (edgeY - inputY) - _c * (edgeX - inputX)) / _s;
	              output.push(edgeX + (edgeX2 - edgeX) * _ua);
	              output.push(edgeY + (edgeY2 - edgeY) * _ua);
	            } else {
	              output.push(edgeX);
	              output.push(edgeY);
	            }
	            output.push(inputX2);
	            output.push(inputY2);
	          }
	          clipped = true;
	        }
	        if (outputStart == output.length) {
	          originalOutput.length = 0;
	          return true;
	        }
	        output.push(output[0]);
	        output.push(output[1]);
	        if (i == clippingVerticesLast) break;
	        var temp = output;
	        output = input;
	        output.length = 0;
	        input = temp;
	      }
	      if (originalOutput != output) {
	        originalOutput.length = 0;
	        for (var _i = 0, n = output.length - 2; _i < n; _i++) originalOutput[_i] = output[_i];
	      } else originalOutput.length = originalOutput.length - 2;
	      return clipped;
	    }
	  }], [{
	    key: "makeClockwise",
	    value: function makeClockwise(polygon) {
	      var vertices = polygon;
	      var verticeslength = polygon.length;
	      var area = vertices[verticeslength - 2] * vertices[1] - vertices[0] * vertices[verticeslength - 1],
	        p1x = 0,
	        p1y = 0,
	        p2x = 0,
	        p2y = 0;
	      for (var i = 0, n = verticeslength - 3; i < n; i += 2) {
	        p1x = vertices[i];
	        p1y = vertices[i + 1];
	        p2x = vertices[i + 2];
	        p2y = vertices[i + 3];
	        area += p1x * p2y - p2x * p1y;
	      }
	      if (area < 0) return;
	      for (var _i2 = 0, lastX = verticeslength - 2, _n2 = verticeslength >> 1; _i2 < _n2; _i2 += 2) {
	        var x = vertices[_i2],
	          y = vertices[_i2 + 1];
	        var other = lastX - _i2;
	        vertices[_i2] = vertices[other];
	        vertices[_i2 + 1] = vertices[other + 1];
	        vertices[other] = x;
	        vertices[other + 1] = y;
	      }
	    }
	  }]);
	}();

	var SkeletonJson = function () {
	  function SkeletonJson(attachmentLoader) {
	    _classCallCheck(this, SkeletonJson);
	    this.attachmentLoader = null;
	    this.scale = 1;
	    this.linkedMeshes = new Array();
	    this.attachmentLoader = attachmentLoader;
	  }
	  return _createClass(SkeletonJson, [{
	    key: "readSkeletonData",
	    value: function readSkeletonData(json) {
	      var scale = this.scale;
	      var skeletonData = new SkeletonData();
	      var root = typeof json === "string" ? JSON.parse(json) : json;
	      var skeletonMap = root.skeleton;
	      if (skeletonMap) {
	        skeletonData.hash = skeletonMap.hash;
	        skeletonData.version = skeletonMap.spine;
	        skeletonData.x = skeletonMap.x;
	        skeletonData.y = skeletonMap.y;
	        skeletonData.width = skeletonMap.width;
	        skeletonData.height = skeletonMap.height;
	        skeletonData.fps = skeletonMap.fps;
	        skeletonData.imagesPath = skeletonMap.images;
	      }
	      if (root.bones) {
	        for (var i = 0; i < root.bones.length; i++) {
	          var boneMap = root.bones[i];
	          var parent = null;
	          var parentName = getValue(boneMap, "parent", null);
	          if (parentName) parent = skeletonData.findBone(parentName);
	          var data = new BoneData(skeletonData.bones.length, boneMap.name, parent);
	          data.length = getValue(boneMap, "length", 0) * scale;
	          data.x = getValue(boneMap, "x", 0) * scale;
	          data.y = getValue(boneMap, "y", 0) * scale;
	          data.rotation = getValue(boneMap, "rotation", 0);
	          data.scaleX = getValue(boneMap, "scaleX", 1);
	          data.scaleY = getValue(boneMap, "scaleY", 1);
	          data.shearX = getValue(boneMap, "shearX", 0);
	          data.shearY = getValue(boneMap, "shearY", 0);
	          data.transformMode = Utils.enumValue(TransformMode, getValue(boneMap, "transform", "Normal"));
	          data.skinRequired = getValue(boneMap, "skin", false);
	          var color = getValue(boneMap, "color", null);
	          if (color) data.color.setFromString(color);
	          skeletonData.bones.push(data);
	        }
	      }
	      if (root.slots) {
	        for (var _i = 0; _i < root.slots.length; _i++) {
	          var slotMap = root.slots[_i];
	          var boneData = skeletonData.findBone(slotMap.bone);
	          var _data = new SlotData(skeletonData.slots.length, slotMap.name, boneData);
	          var _color = getValue(slotMap, "color", null);
	          if (_color) _data.color.setFromString(_color);
	          var dark = getValue(slotMap, "dark", null);
	          if (dark) _data.darkColor = Color.fromString(dark);
	          _data.attachmentName = getValue(slotMap, "attachment", null);
	          _data.blendMode = Utils.enumValue(BlendMode, getValue(slotMap, "blend", "normal"));
	          skeletonData.slots.push(_data);
	        }
	      }
	      if (root.ik) {
	        for (var _i2 = 0; _i2 < root.ik.length; _i2++) {
	          var constraintMap = root.ik[_i2];
	          var _data2 = new IkConstraintData(constraintMap.name);
	          _data2.order = getValue(constraintMap, "order", 0);
	          _data2.skinRequired = getValue(constraintMap, "skin", false);
	          for (var ii = 0; ii < constraintMap.bones.length; ii++) _data2.bones.push(skeletonData.findBone(constraintMap.bones[ii]));
	          _data2.target = skeletonData.findBone(constraintMap.target);
	          _data2.mix = getValue(constraintMap, "mix", 1);
	          _data2.softness = getValue(constraintMap, "softness", 0) * scale;
	          _data2.bendDirection = getValue(constraintMap, "bendPositive", true) ? 1 : -1;
	          _data2.compress = getValue(constraintMap, "compress", false);
	          _data2.stretch = getValue(constraintMap, "stretch", false);
	          _data2.uniform = getValue(constraintMap, "uniform", false);
	          skeletonData.ikConstraints.push(_data2);
	        }
	      }
	      if (root.transform) {
	        for (var _i3 = 0; _i3 < root.transform.length; _i3++) {
	          var _constraintMap = root.transform[_i3];
	          var _data3 = new TransformConstraintData(_constraintMap.name);
	          _data3.order = getValue(_constraintMap, "order", 0);
	          _data3.skinRequired = getValue(_constraintMap, "skin", false);
	          for (var _ii = 0; _ii < _constraintMap.bones.length; _ii++) _data3.bones.push(skeletonData.findBone(_constraintMap.bones[_ii]));
	          var targetName = _constraintMap.target;
	          _data3.target = skeletonData.findBone(targetName);
	          _data3.local = getValue(_constraintMap, "local", false);
	          _data3.relative = getValue(_constraintMap, "relative", false);
	          _data3.offsetRotation = getValue(_constraintMap, "rotation", 0);
	          _data3.offsetX = getValue(_constraintMap, "x", 0) * scale;
	          _data3.offsetY = getValue(_constraintMap, "y", 0) * scale;
	          _data3.offsetScaleX = getValue(_constraintMap, "scaleX", 0);
	          _data3.offsetScaleY = getValue(_constraintMap, "scaleY", 0);
	          _data3.offsetShearY = getValue(_constraintMap, "shearY", 0);
	          _data3.mixRotate = getValue(_constraintMap, "mixRotate", 1);
	          _data3.mixX = getValue(_constraintMap, "mixX", 1);
	          _data3.mixY = getValue(_constraintMap, "mixY", _data3.mixX);
	          _data3.mixScaleX = getValue(_constraintMap, "mixScaleX", 1);
	          _data3.mixScaleY = getValue(_constraintMap, "mixScaleY", _data3.mixScaleX);
	          _data3.mixShearY = getValue(_constraintMap, "mixShearY", 1);
	          skeletonData.transformConstraints.push(_data3);
	        }
	      }
	      if (root.path) {
	        for (var _i4 = 0; _i4 < root.path.length; _i4++) {
	          var _constraintMap2 = root.path[_i4];
	          var _data4 = new PathConstraintData(_constraintMap2.name);
	          _data4.order = getValue(_constraintMap2, "order", 0);
	          _data4.skinRequired = getValue(_constraintMap2, "skin", false);
	          for (var _ii2 = 0; _ii2 < _constraintMap2.bones.length; _ii2++) _data4.bones.push(skeletonData.findBone(_constraintMap2.bones[_ii2]));
	          var _targetName = _constraintMap2.target;
	          _data4.target = skeletonData.findSlot(_targetName);
	          _data4.positionMode = Utils.enumValue(PositionMode, getValue(_constraintMap2, "positionMode", "Percent"));
	          _data4.spacingMode = Utils.enumValue(SpacingMode, getValue(_constraintMap2, "spacingMode", "Length"));
	          _data4.rotateMode = Utils.enumValue(RotateMode, getValue(_constraintMap2, "rotateMode", "Tangent"));
	          _data4.offsetRotation = getValue(_constraintMap2, "rotation", 0);
	          _data4.position = getValue(_constraintMap2, "position", 0);
	          if (_data4.positionMode == PositionMode.Fixed) _data4.position *= scale;
	          _data4.spacing = getValue(_constraintMap2, "spacing", 0);
	          if (_data4.spacingMode == SpacingMode.Length || _data4.spacingMode == SpacingMode.Fixed) _data4.spacing *= scale;
	          _data4.mixRotate = getValue(_constraintMap2, "mixRotate", 1);
	          _data4.mixX = getValue(_constraintMap2, "mixX", 1);
	          _data4.mixY = getValue(_constraintMap2, "mixY", _data4.mixX);
	          skeletonData.pathConstraints.push(_data4);
	        }
	      }
	      if (root.skins) {
	        for (var _i5 = 0; _i5 < root.skins.length; _i5++) {
	          var skinMap = root.skins[_i5];
	          var skin = new Skin(skinMap.name);
	          if (skinMap.bones) {
	            for (var _ii3 = 0; _ii3 < skinMap.bones.length; _ii3++) skin.bones.push(skeletonData.findBone(skinMap.bones[_ii3]));
	          }
	          if (skinMap.ik) {
	            for (var _ii4 = 0; _ii4 < skinMap.ik.length; _ii4++) skin.constraints.push(skeletonData.findIkConstraint(skinMap.ik[_ii4]));
	          }
	          if (skinMap.transform) {
	            for (var _ii5 = 0; _ii5 < skinMap.transform.length; _ii5++) skin.constraints.push(skeletonData.findTransformConstraint(skinMap.transform[_ii5]));
	          }
	          if (skinMap.path) {
	            for (var _ii6 = 0; _ii6 < skinMap.path.length; _ii6++) skin.constraints.push(skeletonData.findPathConstraint(skinMap.path[_ii6]));
	          }
	          for (var slotName in skinMap.attachments) {
	            var slot = skeletonData.findSlot(slotName);
	            var _slotMap = skinMap.attachments[slotName];
	            for (var entryName in _slotMap) {
	              var attachment = this.readAttachment(_slotMap[entryName], skin, slot.index, entryName, skeletonData);
	              if (attachment) skin.setAttachment(slot.index, entryName, attachment);
	            }
	          }
	          skeletonData.skins.push(skin);
	          if (skin.name == "default") skeletonData.defaultSkin = skin;
	        }
	      }
	      for (var _i6 = 0, n = this.linkedMeshes.length; _i6 < n; _i6++) {
	        var linkedMesh = this.linkedMeshes[_i6];
	        var _skin = !linkedMesh.skin ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
	        var _parent = _skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
	        linkedMesh.mesh.deformAttachment = linkedMesh.inheritDeform ? _parent : linkedMesh.mesh;
	        linkedMesh.mesh.setParentMesh(_parent);
	        linkedMesh.mesh.updateUVs();
	      }
	      this.linkedMeshes.length = 0;
	      if (root.events) {
	        for (var eventName in root.events) {
	          var eventMap = root.events[eventName];
	          var _data5 = new EventData(eventName);
	          _data5.intValue = getValue(eventMap, "int", 0);
	          _data5.floatValue = getValue(eventMap, "float", 0);
	          _data5.stringValue = getValue(eventMap, "string", "");
	          _data5.audioPath = getValue(eventMap, "audio", null);
	          if (_data5.audioPath) {
	            _data5.volume = getValue(eventMap, "volume", 1);
	            _data5.balance = getValue(eventMap, "balance", 0);
	          }
	          skeletonData.events.push(_data5);
	        }
	      }
	      if (root.animations) {
	        for (var animationName in root.animations) {
	          var animationMap = root.animations[animationName];
	          this.readAnimation(animationMap, animationName, skeletonData);
	        }
	      }
	      return skeletonData;
	    }
	  }, {
	    key: "readAttachment",
	    value: function readAttachment(map, skin, slotIndex, name, skeletonData) {
	      var scale = this.scale;
	      name = getValue(map, "name", name);
	      switch (getValue(map, "type", "region")) {
	        case "region":
	          {
	            var path = getValue(map, "path", name);
	            var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
	            if (!region) return null;
	            region.path = path;
	            region.x = getValue(map, "x", 0) * scale;
	            region.y = getValue(map, "y", 0) * scale;
	            region.scaleX = getValue(map, "scaleX", 1);
	            region.scaleY = getValue(map, "scaleY", 1);
	            region.rotation = getValue(map, "rotation", 0);
	            region.width = map.width * scale;
	            region.height = map.height * scale;
	            var color = getValue(map, "color", null);
	            if (color) region.color.setFromString(color);
	            region.updateOffset();
	            return region;
	          }
	        case "boundingbox":
	          {
	            var box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
	            if (!box) return null;
	            this.readVertices(map, box, map.vertexCount << 1);
	            var _color2 = getValue(map, "color", null);
	            if (_color2) box.color.setFromString(_color2);
	            return box;
	          }
	        case "mesh":
	        case "linkedmesh":
	          {
	            var _path = getValue(map, "path", name);
	            var mesh = this.attachmentLoader.newMeshAttachment(skin, name, _path);
	            if (!mesh) return null;
	            mesh.path = _path;
	            var _color3 = getValue(map, "color", null);
	            if (_color3) mesh.color.setFromString(_color3);
	            mesh.width = getValue(map, "width", 0) * scale;
	            mesh.height = getValue(map, "height", 0) * scale;
	            var parent = getValue(map, "parent", null);
	            if (parent) {
	              this.linkedMeshes.push(new LinkedMesh(mesh, getValue(map, "skin", null), slotIndex, parent, getValue(map, "deform", true)));
	              return mesh;
	            }
	            var uvs = map.uvs;
	            this.readVertices(map, mesh, uvs.length);
	            mesh.triangles = map.triangles;
	            mesh.regionUVs = uvs;
	            mesh.updateUVs();
	            mesh.edges = getValue(map, "edges", null);
	            mesh.hullLength = getValue(map, "hull", 0) * 2;
	            return mesh;
	          }
	        case "path":
	          {
	            var _path2 = this.attachmentLoader.newPathAttachment(skin, name);
	            if (!_path2) return null;
	            _path2.closed = getValue(map, "closed", false);
	            _path2.constantSpeed = getValue(map, "constantSpeed", true);
	            var vertexCount = map.vertexCount;
	            this.readVertices(map, _path2, vertexCount << 1);
	            var lengths = Utils.newArray(vertexCount / 3, 0);
	            for (var i = 0; i < map.lengths.length; i++) lengths[i] = map.lengths[i] * scale;
	            _path2.lengths = lengths;
	            var _color4 = getValue(map, "color", null);
	            if (_color4) _path2.color.setFromString(_color4);
	            return _path2;
	          }
	        case "point":
	          {
	            var point = this.attachmentLoader.newPointAttachment(skin, name);
	            if (!point) return null;
	            point.x = getValue(map, "x", 0) * scale;
	            point.y = getValue(map, "y", 0) * scale;
	            point.rotation = getValue(map, "rotation", 0);
	            var _color5 = getValue(map, "color", null);
	            if (_color5) point.color.setFromString(_color5);
	            return point;
	          }
	        case "clipping":
	          {
	            var clip = this.attachmentLoader.newClippingAttachment(skin, name);
	            if (!clip) return null;
	            var end = getValue(map, "end", null);
	            if (end) clip.endSlot = skeletonData.findSlot(end);
	            var _vertexCount = map.vertexCount;
	            this.readVertices(map, clip, _vertexCount << 1);
	            var _color6 = getValue(map, "color", null);
	            if (_color6) clip.color.setFromString(_color6);
	            return clip;
	          }
	      }
	      return null;
	    }
	  }, {
	    key: "readVertices",
	    value: function readVertices(map, attachment, verticesLength) {
	      var scale = this.scale;
	      attachment.worldVerticesLength = verticesLength;
	      var vertices = map.vertices;
	      if (verticesLength == vertices.length) {
	        var scaledVertices = Utils.toFloatArray(vertices);
	        if (scale != 1) {
	          for (var i = 0, n = vertices.length; i < n; i++) scaledVertices[i] *= scale;
	        }
	        attachment.vertices = scaledVertices;
	        return;
	      }
	      var weights = new Array();
	      var bones = new Array();
	      for (var _i7 = 0, _n = vertices.length; _i7 < _n;) {
	        var boneCount = vertices[_i7++];
	        bones.push(boneCount);
	        for (var nn = _i7 + boneCount * 4; _i7 < nn; _i7 += 4) {
	          bones.push(vertices[_i7]);
	          weights.push(vertices[_i7 + 1] * scale);
	          weights.push(vertices[_i7 + 2] * scale);
	          weights.push(vertices[_i7 + 3]);
	        }
	      }
	      attachment.bones = bones;
	      attachment.vertices = Utils.toFloatArray(weights);
	    }
	  }, {
	    key: "readAnimation",
	    value: function readAnimation(map, name, skeletonData) {
	      var scale = this.scale;
	      var timelines = new Array();
	      if (map.slots) {
	        for (var slotName in map.slots) {
	          var slotMap = map.slots[slotName];
	          var slotIndex = skeletonData.findSlot(slotName).index;
	          for (var timelineName in slotMap) {
	            var timelineMap = slotMap[timelineName];
	            if (!timelineMap) continue;
	            var frames = timelineMap.length;
	            if (timelineName == "attachment") {
	              var timeline = new AttachmentTimeline(frames, slotIndex);
	              for (var frame = 0; frame < frames; frame++) {
	                var keyMap = timelineMap[frame];
	                timeline.setFrame(frame, getValue(keyMap, "time", 0), keyMap.name);
	              }
	              timelines.push(timeline);
	            } else if (timelineName == "rgba") {
	              var _timeline = new RGBATimeline(frames, frames << 2, slotIndex);
	              var _keyMap = timelineMap[0];
	              var time = getValue(_keyMap, "time", 0);
	              var color = Color.fromString(_keyMap.color);
	              for (var _frame = 0, bezier = 0;; _frame++) {
	                _timeline.setFrame(_frame, time, color.r, color.g, color.b, color.a);
	                var nextMap = timelineMap[_frame + 1];
	                if (!nextMap) {
	                  _timeline.shrink(bezier);
	                  break;
	                }
	                var time2 = getValue(nextMap, "time", 0);
	                var newColor = Color.fromString(nextMap.color);
	                var curve = _keyMap.curve;
	                if (curve) {
	                  bezier = readCurve(curve, _timeline, bezier, _frame, 0, time, time2, color.r, newColor.r, 1);
	                  bezier = readCurve(curve, _timeline, bezier, _frame, 1, time, time2, color.g, newColor.g, 1);
	                  bezier = readCurve(curve, _timeline, bezier, _frame, 2, time, time2, color.b, newColor.b, 1);
	                  bezier = readCurve(curve, _timeline, bezier, _frame, 3, time, time2, color.a, newColor.a, 1);
	                }
	                time = time2;
	                color = newColor;
	                _keyMap = nextMap;
	              }
	              timelines.push(_timeline);
	            } else if (timelineName == "rgb") {
	              var _timeline2 = new RGBTimeline(frames, frames * 3, slotIndex);
	              var _keyMap2 = timelineMap[0];
	              var _time = getValue(_keyMap2, "time", 0);
	              var _color7 = Color.fromString(_keyMap2.color);
	              for (var _frame2 = 0, _bezier = 0;; _frame2++) {
	                _timeline2.setFrame(_frame2, _time, _color7.r, _color7.g, _color7.b);
	                var _nextMap = timelineMap[_frame2 + 1];
	                if (!_nextMap) {
	                  _timeline2.shrink(_bezier);
	                  break;
	                }
	                var _time2 = getValue(_nextMap, "time", 0);
	                var _newColor = Color.fromString(_nextMap.color);
	                var _curve = _keyMap2.curve;
	                if (_curve) {
	                  _bezier = readCurve(_curve, _timeline2, _bezier, _frame2, 0, _time, _time2, _color7.r, _newColor.r, 1);
	                  _bezier = readCurve(_curve, _timeline2, _bezier, _frame2, 1, _time, _time2, _color7.g, _newColor.g, 1);
	                  _bezier = readCurve(_curve, _timeline2, _bezier, _frame2, 2, _time, _time2, _color7.b, _newColor.b, 1);
	                }
	                _time = _time2;
	                _color7 = _newColor;
	                _keyMap2 = _nextMap;
	              }
	              timelines.push(_timeline2);
	            } else if (timelineName == "alpha") {
	              timelines.push(readTimeline1(timelineMap, new AlphaTimeline(frames, frames, slotIndex), 0, 1));
	            } else if (timelineName == "rgba2") {
	              var _timeline3 = new RGBA2Timeline(frames, frames * 7, slotIndex);
	              var _keyMap3 = timelineMap[0];
	              var _time3 = getValue(_keyMap3, "time", 0);
	              var _color8 = Color.fromString(_keyMap3.light);
	              var color2 = Color.fromString(_keyMap3.dark);
	              for (var _frame3 = 0, _bezier2 = 0;; _frame3++) {
	                _timeline3.setFrame(_frame3, _time3, _color8.r, _color8.g, _color8.b, _color8.a, color2.r, color2.g, color2.b);
	                var _nextMap2 = timelineMap[_frame3 + 1];
	                if (!_nextMap2) {
	                  _timeline3.shrink(_bezier2);
	                  break;
	                }
	                var _time4 = getValue(_nextMap2, "time", 0);
	                var _newColor2 = Color.fromString(_nextMap2.light);
	                var newColor2 = Color.fromString(_nextMap2.dark);
	                var _curve2 = _keyMap3.curve;
	                if (_curve2) {
	                  _bezier2 = readCurve(_curve2, _timeline3, _bezier2, _frame3, 0, _time3, _time4, _color8.r, _newColor2.r, 1);
	                  _bezier2 = readCurve(_curve2, _timeline3, _bezier2, _frame3, 1, _time3, _time4, _color8.g, _newColor2.g, 1);
	                  _bezier2 = readCurve(_curve2, _timeline3, _bezier2, _frame3, 2, _time3, _time4, _color8.b, _newColor2.b, 1);
	                  _bezier2 = readCurve(_curve2, _timeline3, _bezier2, _frame3, 3, _time3, _time4, _color8.a, _newColor2.a, 1);
	                  _bezier2 = readCurve(_curve2, _timeline3, _bezier2, _frame3, 4, _time3, _time4, color2.r, newColor2.r, 1);
	                  _bezier2 = readCurve(_curve2, _timeline3, _bezier2, _frame3, 5, _time3, _time4, color2.g, newColor2.g, 1);
	                  _bezier2 = readCurve(_curve2, _timeline3, _bezier2, _frame3, 6, _time3, _time4, color2.b, newColor2.b, 1);
	                }
	                _time3 = _time4;
	                _color8 = _newColor2;
	                color2 = newColor2;
	                _keyMap3 = _nextMap2;
	              }
	              timelines.push(_timeline3);
	            } else if (timelineName == "rgb2") {
	              var _timeline4 = new RGB2Timeline(frames, frames * 6, slotIndex);
	              var _keyMap4 = timelineMap[0];
	              var _time5 = getValue(_keyMap4, "time", 0);
	              var _color9 = Color.fromString(_keyMap4.light);
	              var _color10 = Color.fromString(_keyMap4.dark);
	              for (var _frame4 = 0, _bezier3 = 0;; _frame4++) {
	                _timeline4.setFrame(_frame4, _time5, _color9.r, _color9.g, _color9.b, _color10.r, _color10.g, _color10.b);
	                var _nextMap3 = timelineMap[_frame4 + 1];
	                if (!_nextMap3) {
	                  _timeline4.shrink(_bezier3);
	                  break;
	                }
	                var _time6 = getValue(_nextMap3, "time", 0);
	                var _newColor3 = Color.fromString(_nextMap3.light);
	                var _newColor4 = Color.fromString(_nextMap3.dark);
	                var _curve3 = _keyMap4.curve;
	                if (_curve3) {
	                  _bezier3 = readCurve(_curve3, _timeline4, _bezier3, _frame4, 0, _time5, _time6, _color9.r, _newColor3.r, 1);
	                  _bezier3 = readCurve(_curve3, _timeline4, _bezier3, _frame4, 1, _time5, _time6, _color9.g, _newColor3.g, 1);
	                  _bezier3 = readCurve(_curve3, _timeline4, _bezier3, _frame4, 2, _time5, _time6, _color9.b, _newColor3.b, 1);
	                  _bezier3 = readCurve(_curve3, _timeline4, _bezier3, _frame4, 3, _time5, _time6, _color10.r, _newColor4.r, 1);
	                  _bezier3 = readCurve(_curve3, _timeline4, _bezier3, _frame4, 4, _time5, _time6, _color10.g, _newColor4.g, 1);
	                  _bezier3 = readCurve(_curve3, _timeline4, _bezier3, _frame4, 5, _time5, _time6, _color10.b, _newColor4.b, 1);
	                }
	                _time5 = _time6;
	                _color9 = _newColor3;
	                _color10 = _newColor4;
	                _keyMap4 = _nextMap3;
	              }
	              timelines.push(_timeline4);
	            }
	          }
	        }
	      }
	      if (map.bones) {
	        for (var boneName in map.bones) {
	          var boneMap = map.bones[boneName];
	          var boneIndex = skeletonData.findBone(boneName).index;
	          for (var _timelineName in boneMap) {
	            var _timelineMap = boneMap[_timelineName];
	            var _frames = _timelineMap.length;
	            if (_frames == 0) continue;
	            if (_timelineName === "rotate") {
	              timelines.push(readTimeline1(_timelineMap, new RotateTimeline(_frames, _frames, boneIndex), 0, 1));
	            } else if (_timelineName === "translate") {
	              var _timeline5 = new TranslateTimeline(_frames, _frames << 1, boneIndex);
	              timelines.push(readTimeline2(_timelineMap, _timeline5, "x", "y", 0, scale));
	            } else if (_timelineName === "translatex") {
	              var _timeline6 = new TranslateXTimeline(_frames, _frames, boneIndex);
	              timelines.push(readTimeline1(_timelineMap, _timeline6, 0, scale));
	            } else if (_timelineName === "translatey") {
	              var _timeline7 = new TranslateYTimeline(_frames, _frames, boneIndex);
	              timelines.push(readTimeline1(_timelineMap, _timeline7, 0, scale));
	            } else if (_timelineName === "scale") {
	              var _timeline8 = new ScaleTimeline(_frames, _frames << 1, boneIndex);
	              timelines.push(readTimeline2(_timelineMap, _timeline8, "x", "y", 1, 1));
	            } else if (_timelineName === "scalex") {
	              var _timeline9 = new ScaleXTimeline(_frames, _frames, boneIndex);
	              timelines.push(readTimeline1(_timelineMap, _timeline9, 1, 1));
	            } else if (_timelineName === "scaley") {
	              var _timeline10 = new ScaleYTimeline(_frames, _frames, boneIndex);
	              timelines.push(readTimeline1(_timelineMap, _timeline10, 1, 1));
	            } else if (_timelineName === "shear") {
	              var _timeline11 = new ShearTimeline(_frames, _frames << 1, boneIndex);
	              timelines.push(readTimeline2(_timelineMap, _timeline11, "x", "y", 0, 1));
	            } else if (_timelineName === "shearx") {
	              var _timeline12 = new ShearXTimeline(_frames, _frames, boneIndex);
	              timelines.push(readTimeline1(_timelineMap, _timeline12, 0, 1));
	            } else if (_timelineName === "sheary") {
	              var _timeline13 = new ShearYTimeline(_frames, _frames, boneIndex);
	              timelines.push(readTimeline1(_timelineMap, _timeline13, 0, 1));
	            }
	          }
	        }
	      }
	      if (map.ik) {
	        for (var constraintName in map.ik) {
	          var constraintMap = map.ik[constraintName];
	          var _keyMap5 = constraintMap[0];
	          if (!_keyMap5) continue;
	          var constraint = skeletonData.findIkConstraint(constraintName);
	          var constraintIndex = skeletonData.ikConstraints.indexOf(constraint);
	          var _timeline14 = new IkConstraintTimeline(constraintMap.length, constraintMap.length << 1, constraintIndex);
	          var _time7 = getValue(_keyMap5, "time", 0);
	          var mix = getValue(_keyMap5, "mix", 1);
	          var softness = getValue(_keyMap5, "softness", 0) * scale;
	          for (var _frame5 = 0, _bezier4 = 0;; _frame5++) {
	            _timeline14.setFrame(_frame5, _time7, mix, softness, getValue(_keyMap5, "bendPositive", true) ? 1 : -1, getValue(_keyMap5, "compress", false), getValue(_keyMap5, "stretch", false));
	            var _nextMap4 = constraintMap[_frame5 + 1];
	            if (!_nextMap4) {
	              _timeline14.shrink(_bezier4);
	              break;
	            }
	            var _time8 = getValue(_nextMap4, "time", 0);
	            var mix2 = getValue(_nextMap4, "mix", 1);
	            var softness2 = getValue(_nextMap4, "softness", 0) * scale;
	            var _curve4 = _keyMap5.curve;
	            if (_curve4) {
	              _bezier4 = readCurve(_curve4, _timeline14, _bezier4, _frame5, 0, _time7, _time8, mix, mix2, 1);
	              _bezier4 = readCurve(_curve4, _timeline14, _bezier4, _frame5, 1, _time7, _time8, softness, softness2, scale);
	            }
	            _time7 = _time8;
	            mix = mix2;
	            softness = softness2;
	            _keyMap5 = _nextMap4;
	          }
	          timelines.push(_timeline14);
	        }
	      }
	      if (map.transform) {
	        for (var _constraintName in map.transform) {
	          var _timelineMap2 = map.transform[_constraintName];
	          var _keyMap6 = _timelineMap2[0];
	          if (!_keyMap6) continue;
	          var _constraint = skeletonData.findTransformConstraint(_constraintName);
	          var _constraintIndex = skeletonData.transformConstraints.indexOf(_constraint);
	          var _timeline15 = new TransformConstraintTimeline(_timelineMap2.length, _timelineMap2.length * 6, _constraintIndex);
	          var _time9 = getValue(_keyMap6, "time", 0);
	          var mixRotate = getValue(_keyMap6, "mixRotate", 1);
	          var mixX = getValue(_keyMap6, "mixX", 1);
	          var mixY = getValue(_keyMap6, "mixY", mixX);
	          var mixScaleX = getValue(_keyMap6, "mixScaleX", 1);
	          var mixScaleY = getValue(_keyMap6, "mixScaleY", mixScaleX);
	          var mixShearY = getValue(_keyMap6, "mixShearY", 1);
	          for (var _frame6 = 0, _bezier5 = 0;; _frame6++) {
	            _timeline15.setFrame(_frame6, _time9, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
	            var _nextMap5 = _timelineMap2[_frame6 + 1];
	            if (!_nextMap5) {
	              _timeline15.shrink(_bezier5);
	              break;
	            }
	            var _time10 = getValue(_nextMap5, "time", 0);
	            var mixRotate2 = getValue(_nextMap5, "mixRotate", 1);
	            var mixX2 = getValue(_nextMap5, "mixX", 1);
	            var mixY2 = getValue(_nextMap5, "mixY", mixX2);
	            var mixScaleX2 = getValue(_nextMap5, "mixScaleX", 1);
	            var mixScaleY2 = getValue(_nextMap5, "mixScaleY", mixScaleX2);
	            var mixShearY2 = getValue(_nextMap5, "mixShearY", 1);
	            var _curve5 = _keyMap6.curve;
	            if (_curve5) {
	              _bezier5 = readCurve(_curve5, _timeline15, _bezier5, _frame6, 0, _time9, _time10, mixRotate, mixRotate2, 1);
	              _bezier5 = readCurve(_curve5, _timeline15, _bezier5, _frame6, 1, _time9, _time10, mixX, mixX2, 1);
	              _bezier5 = readCurve(_curve5, _timeline15, _bezier5, _frame6, 2, _time9, _time10, mixY, mixY2, 1);
	              _bezier5 = readCurve(_curve5, _timeline15, _bezier5, _frame6, 3, _time9, _time10, mixScaleX, mixScaleX2, 1);
	              _bezier5 = readCurve(_curve5, _timeline15, _bezier5, _frame6, 4, _time9, _time10, mixScaleY, mixScaleY2, 1);
	              _bezier5 = readCurve(_curve5, _timeline15, _bezier5, _frame6, 5, _time9, _time10, mixShearY, mixShearY2, 1);
	            }
	            _time9 = _time10;
	            mixRotate = mixRotate2;
	            mixX = mixX2;
	            mixY = mixY2;
	            mixScaleX = mixScaleX2;
	            mixScaleY = mixScaleY2;
	            mixScaleX = mixScaleX2;
	            _keyMap6 = _nextMap5;
	          }
	          timelines.push(_timeline15);
	        }
	      }
	      if (map.path) {
	        for (var _constraintName2 in map.path) {
	          var _constraintMap3 = map.path[_constraintName2];
	          var _constraint2 = skeletonData.findPathConstraint(_constraintName2);
	          var _constraintIndex2 = skeletonData.pathConstraints.indexOf(_constraint2);
	          for (var _timelineName2 in _constraintMap3) {
	            var _timelineMap3 = _constraintMap3[_timelineName2];
	            var _keyMap7 = _timelineMap3[0];
	            if (!_keyMap7) continue;
	            var _frames2 = _timelineMap3.length;
	            if (_timelineName2 === "position") {
	              var _timeline16 = new PathConstraintPositionTimeline(_frames2, _frames2, _constraintIndex2);
	              timelines.push(readTimeline1(_timelineMap3, _timeline16, 0, _constraint2.positionMode == PositionMode.Fixed ? scale : 1));
	            } else if (_timelineName2 === "spacing") {
	              var _timeline17 = new PathConstraintSpacingTimeline(_frames2, _frames2, _constraintIndex2);
	              timelines.push(readTimeline1(_timelineMap3, _timeline17, 0, _constraint2.spacingMode == SpacingMode.Length || _constraint2.spacingMode == SpacingMode.Fixed ? scale : 1));
	            } else if (_timelineName2 === "mix") {
	              var _timeline18 = new PathConstraintMixTimeline(_frames2, _frames2 * 3, _constraintIndex2);
	              var _time11 = getValue(_keyMap7, "time", 0);
	              var _mixRotate = getValue(_keyMap7, "mixRotate", 1);
	              var _mixX = getValue(_keyMap7, "mixX", 1);
	              var _mixY = getValue(_keyMap7, "mixY", _mixX);
	              for (var _frame7 = 0, _bezier6 = 0;; _frame7++) {
	                _timeline18.setFrame(_frame7, _time11, _mixRotate, _mixX, _mixY);
	                var _nextMap6 = _timelineMap3[_frame7 + 1];
	                if (!_nextMap6) {
	                  _timeline18.shrink(_bezier6);
	                  break;
	                }
	                var _time12 = getValue(_nextMap6, "time", 0);
	                var _mixRotate2 = getValue(_nextMap6, "mixRotate", 1);
	                var _mixX2 = getValue(_nextMap6, "mixX", 1);
	                var _mixY2 = getValue(_nextMap6, "mixY", _mixX2);
	                var _curve6 = _keyMap7.curve;
	                if (_curve6) {
	                  _bezier6 = readCurve(_curve6, _timeline18, _bezier6, _frame7, 0, _time11, _time12, _mixRotate, _mixRotate2, 1);
	                  _bezier6 = readCurve(_curve6, _timeline18, _bezier6, _frame7, 1, _time11, _time12, _mixX, _mixX2, 1);
	                  _bezier6 = readCurve(_curve6, _timeline18, _bezier6, _frame7, 2, _time11, _time12, _mixY, _mixY2, 1);
	                }
	                _time11 = _time12;
	                _mixRotate = _mixRotate2;
	                _mixX = _mixX2;
	                _mixY = _mixY2;
	                _keyMap7 = _nextMap6;
	              }
	              timelines.push(_timeline18);
	            }
	          }
	        }
	      }
	      if (map.deform) {
	        for (var deformName in map.deform) {
	          var deformMap = map.deform[deformName];
	          var skin = skeletonData.findSkin(deformName);
	          for (var _slotName in deformMap) {
	            var _slotMap2 = deformMap[_slotName];
	            var _slotIndex = skeletonData.findSlot(_slotName).index;
	            for (var _timelineName3 in _slotMap2) {
	              var _timelineMap4 = _slotMap2[_timelineName3];
	              var _keyMap8 = _timelineMap4[0];
	              if (!_keyMap8) continue;
	              var attachment = skin.getAttachment(_slotIndex, _timelineName3);
	              var weighted = attachment.bones;
	              var vertices = attachment.vertices;
	              var deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
	              var _timeline19 = new DeformTimeline(_timelineMap4.length, _timelineMap4.length, _slotIndex, attachment);
	              var _time13 = getValue(_keyMap8, "time", 0);
	              for (var _frame8 = 0, _bezier7 = 0;; _frame8++) {
	                var deform = void 0;
	                var verticesValue = getValue(_keyMap8, "vertices", null);
	                if (!verticesValue) deform = weighted ? Utils.newFloatArray(deformLength) : vertices;else {
	                  deform = Utils.newFloatArray(deformLength);
	                  var start = getValue(_keyMap8, "offset", 0);
	                  Utils.arrayCopy(verticesValue, 0, deform, start, verticesValue.length);
	                  if (scale != 1) {
	                    for (var i = start, n = i + verticesValue.length; i < n; i++) deform[i] *= scale;
	                  }
	                  if (!weighted) {
	                    for (var _i8 = 0; _i8 < deformLength; _i8++) deform[_i8] += vertices[_i8];
	                  }
	                }
	                _timeline19.setFrame(_frame8, _time13, deform);
	                var _nextMap7 = _timelineMap4[_frame8 + 1];
	                if (!_nextMap7) {
	                  _timeline19.shrink(_bezier7);
	                  break;
	                }
	                var _time14 = getValue(_nextMap7, "time", 0);
	                var _curve7 = _keyMap8.curve;
	                if (_curve7) _bezier7 = readCurve(_curve7, _timeline19, _bezier7, _frame8, 0, _time13, _time14, 0, 1, 1);
	                _time13 = _time14;
	                _keyMap8 = _nextMap7;
	              }
	              timelines.push(_timeline19);
	            }
	          }
	        }
	      }
	      if (map.drawOrder) {
	        var _timeline20 = new DrawOrderTimeline(map.drawOrder.length);
	        var slotCount = skeletonData.slots.length;
	        var _frame9 = 0;
	        for (var _i9 = 0; _i9 < map.drawOrder.length; _i9++, _frame9++) {
	          var drawOrderMap = map.drawOrder[_i9];
	          var drawOrder = null;
	          var offsets = getValue(drawOrderMap, "offsets", null);
	          if (offsets) {
	            drawOrder = Utils.newArray(slotCount, -1);
	            var unchanged = Utils.newArray(slotCount - offsets.length, 0);
	            var originalIndex = 0,
	              unchangedIndex = 0;
	            for (var ii = 0; ii < offsets.length; ii++) {
	              var offsetMap = offsets[ii];
	              var _slotIndex2 = skeletonData.findSlot(offsetMap.slot).index;
	              while (originalIndex != _slotIndex2) unchanged[unchangedIndex++] = originalIndex++;
	              drawOrder[originalIndex + offsetMap.offset] = originalIndex++;
	            }
	            while (originalIndex < slotCount) unchanged[unchangedIndex++] = originalIndex++;
	            for (var _ii7 = slotCount - 1; _ii7 >= 0; _ii7--) if (drawOrder[_ii7] == -1) drawOrder[_ii7] = unchanged[--unchangedIndex];
	          }
	          _timeline20.setFrame(_frame9, getValue(drawOrderMap, "time", 0), drawOrder);
	        }
	        timelines.push(_timeline20);
	      }
	      if (map.events) {
	        var _timeline21 = new EventTimeline(map.events.length);
	        var _frame10 = 0;
	        for (var _i10 = 0; _i10 < map.events.length; _i10++, _frame10++) {
	          var eventMap = map.events[_i10];
	          var eventData = skeletonData.findEvent(eventMap.name);
	          var event = new Event(Utils.toSinglePrecision(getValue(eventMap, "time", 0)), eventData);
	          event.intValue = getValue(eventMap, "int", eventData.intValue);
	          event.floatValue = getValue(eventMap, "float", eventData.floatValue);
	          event.stringValue = getValue(eventMap, "string", eventData.stringValue);
	          if (event.data.audioPath) {
	            event.volume = getValue(eventMap, "volume", 1);
	            event.balance = getValue(eventMap, "balance", 0);
	          }
	          _timeline21.setFrame(_frame10, event);
	        }
	        timelines.push(_timeline21);
	      }
	      var duration = 0;
	      for (var _i11 = 0, _n2 = timelines.length; _i11 < _n2; _i11++) duration = Math.max(duration, timelines[_i11].getDuration());
	      skeletonData.animations.push(new Animation(name, timelines, duration));
	    }
	  }]);
	}();
	var LinkedMesh = _createClass(function LinkedMesh(mesh, skin, slotIndex, parent, inheritDeform) {
	  _classCallCheck(this, LinkedMesh);
	  this.mesh = mesh;
	  this.skin = skin;
	  this.slotIndex = slotIndex;
	  this.parent = parent;
	  this.inheritDeform = inheritDeform;
	});
	function readTimeline1(keys, timeline, defaultValue, scale) {
	  var keyMap = keys[0];
	  var time = getValue(keyMap, "time", 0);
	  var value = getValue(keyMap, "value", defaultValue) * scale;
	  var bezier = 0;
	  for (var frame = 0;; frame++) {
	    timeline.setFrame(frame, time, value);
	    var nextMap = keys[frame + 1];
	    if (!nextMap) {
	      timeline.shrink(bezier);
	      return timeline;
	    }
	    var time2 = getValue(nextMap, "time", 0);
	    var value2 = getValue(nextMap, "value", defaultValue) * scale;
	    if (keyMap.curve) bezier = readCurve(keyMap.curve, timeline, bezier, frame, 0, time, time2, value, value2, scale);
	    time = time2;
	    value = value2;
	    keyMap = nextMap;
	  }
	}
	function readTimeline2(keys, timeline, name1, name2, defaultValue, scale) {
	  var keyMap = keys[0];
	  var time = getValue(keyMap, "time", 0);
	  var value1 = getValue(keyMap, name1, defaultValue) * scale;
	  var value2 = getValue(keyMap, name2, defaultValue) * scale;
	  var bezier = 0;
	  for (var frame = 0;; frame++) {
	    timeline.setFrame(frame, time, value1, value2);
	    var nextMap = keys[frame + 1];
	    if (!nextMap) {
	      timeline.shrink(bezier);
	      return timeline;
	    }
	    var time2 = getValue(nextMap, "time", 0);
	    var nvalue1 = getValue(nextMap, name1, defaultValue) * scale;
	    var nvalue2 = getValue(nextMap, name2, defaultValue) * scale;
	    var curve = keyMap.curve;
	    if (curve) {
	      bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, value1, nvalue1, scale);
	      bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, value2, nvalue2, scale);
	    }
	    time = time2;
	    value1 = nvalue1;
	    value2 = nvalue2;
	    keyMap = nextMap;
	  }
	}
	function readCurve(curve, timeline, bezier, frame, value, time1, time2, value1, value2, scale) {
	  if (curve == "stepped") {
	    timeline.setStepped(frame);
	    return bezier;
	  }
	  var i = value << 2;
	  var cx1 = curve[i];
	  var cy1 = curve[i + 1] * scale;
	  var cx2 = curve[i + 2];
	  var cy2 = curve[i + 3] * scale;
	  timeline.setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2);
	  return bezier + 1;
	}
	function getValue(map, property, defaultValue) {
	  return map[property] !== undefined ? map[property] : defaultValue;
	}

	(function () {
	  if (typeof Math.fround === "undefined") {
	    Math.fround = function (array) {
	      return function (x) {
	        return array[0] = x, array[0];
	      };
	    }(new Float32Array(1));
	  }
	})();

	var JitterEffect = function () {
	  function JitterEffect(jitterX, jitterY) {
	    _classCallCheck(this, JitterEffect);
	    this.jitterX = 0;
	    this.jitterY = 0;
	    this.jitterX = jitterX;
	    this.jitterY = jitterY;
	  }
	  return _createClass(JitterEffect, [{
	    key: "begin",
	    value: function begin(skeleton) {}
	  }, {
	    key: "transform",
	    value: function transform(position, uv, light, dark) {
	      position.x += MathUtils.randomTriangular(-this.jitterX, this.jitterY);
	      position.y += MathUtils.randomTriangular(-this.jitterX, this.jitterY);
	    }
	  }, {
	    key: "end",
	    value: function end() {}
	  }]);
	}();

	var SwirlEffect = function () {
	  function SwirlEffect(radius) {
	    _classCallCheck(this, SwirlEffect);
	    this.centerX = 0;
	    this.centerY = 0;
	    this.radius = 0;
	    this.angle = 0;
	    this.worldX = 0;
	    this.worldY = 0;
	    this.radius = radius;
	  }
	  return _createClass(SwirlEffect, [{
	    key: "begin",
	    value: function begin(skeleton) {
	      this.worldX = skeleton.x + this.centerX;
	      this.worldY = skeleton.y + this.centerY;
	    }
	  }, {
	    key: "transform",
	    value: function transform(position, uv, light, dark) {
	      var radAngle = this.angle * MathUtils.degreesToRadians;
	      var x = position.x - this.worldX;
	      var y = position.y - this.worldY;
	      var dist = Math.sqrt(x * x + y * y);
	      if (dist < this.radius) {
	        var theta = SwirlEffect.interpolation.apply(0, radAngle, (this.radius - dist) / this.radius);
	        var cos = Math.cos(theta);
	        var sin = Math.sin(theta);
	        position.x = cos * x - sin * y + this.worldX;
	        position.y = sin * x + cos * y + this.worldY;
	      }
	    }
	  }, {
	    key: "end",
	    value: function end() {}
	  }]);
	}();
	SwirlEffect.interpolation = new PowOut(2);

	var spine = /*#__PURE__*/Object.freeze({
		__proto__: null,
		AlphaTimeline: AlphaTimeline,
		Animation: Animation,
		AnimationState: AnimationState,
		AnimationStateAdapter: AnimationStateAdapter,
		AnimationStateData: AnimationStateData,
		AssetManagerBase: AssetManagerBase,
		AtlasAttachmentLoader: AtlasAttachmentLoader,
		Attachment: Attachment,
		AttachmentTimeline: AttachmentTimeline,
		BinaryInput: BinaryInput,
		get BlendMode () { return BlendMode; },
		Bone: Bone,
		BoneData: BoneData,
		BoundingBoxAttachment: BoundingBoxAttachment,
		CURRENT: CURRENT,
		ClippingAttachment: ClippingAttachment,
		Color: Color,
		ConstraintData: ConstraintData,
		CurveTimeline: CurveTimeline,
		CurveTimeline1: CurveTimeline1,
		CurveTimeline2: CurveTimeline2,
		DebugUtils: DebugUtils,
		DeformTimeline: DeformTimeline,
		Downloader: Downloader,
		DrawOrderTimeline: DrawOrderTimeline,
		Event: Event,
		EventData: EventData,
		EventQueue: EventQueue,
		EventTimeline: EventTimeline,
		get EventType () { return EventType; },
		FIRST: FIRST,
		FakeTexture: FakeTexture,
		HOLD_FIRST: HOLD_FIRST,
		HOLD_MIX: HOLD_MIX,
		HOLD_SUBSEQUENT: HOLD_SUBSEQUENT,
		IkConstraint: IkConstraint,
		IkConstraintData: IkConstraintData,
		IkConstraintTimeline: IkConstraintTimeline,
		IntSet: IntSet,
		Interpolation: Interpolation,
		JitterEffect: JitterEffect,
		MathUtils: MathUtils,
		MeshAttachment: MeshAttachment,
		get MixBlend () { return MixBlend; },
		get MixDirection () { return MixDirection; },
		PathAttachment: PathAttachment,
		PathConstraint: PathConstraint,
		PathConstraintData: PathConstraintData,
		PathConstraintMixTimeline: PathConstraintMixTimeline,
		PathConstraintPositionTimeline: PathConstraintPositionTimeline,
		PathConstraintSpacingTimeline: PathConstraintSpacingTimeline,
		PointAttachment: PointAttachment,
		Pool: Pool,
		get PositionMode () { return PositionMode; },
		Pow: Pow,
		PowOut: PowOut,
		RGB2Timeline: RGB2Timeline,
		RGBA2Timeline: RGBA2Timeline,
		RGBATimeline: RGBATimeline,
		RGBTimeline: RGBTimeline,
		RegionAttachment: RegionAttachment,
		get RotateMode () { return RotateMode; },
		RotateTimeline: RotateTimeline,
		SETUP: SETUP,
		SUBSEQUENT: SUBSEQUENT,
		ScaleTimeline: ScaleTimeline,
		ScaleXTimeline: ScaleXTimeline,
		ScaleYTimeline: ScaleYTimeline,
		ShearTimeline: ShearTimeline,
		ShearXTimeline: ShearXTimeline,
		ShearYTimeline: ShearYTimeline,
		Skeleton: Skeleton,
		SkeletonBinary: SkeletonBinary,
		SkeletonBounds: SkeletonBounds,
		SkeletonClipping: SkeletonClipping,
		SkeletonData: SkeletonData,
		SkeletonJson: SkeletonJson,
		Skin: Skin,
		SkinEntry: SkinEntry,
		Slot: Slot,
		SlotData: SlotData,
		get SpacingMode () { return SpacingMode; },
		StringSet: StringSet,
		SwirlEffect: SwirlEffect,
		Texture: Texture,
		TextureAtlas: TextureAtlas,
		TextureAtlasPage: TextureAtlasPage,
		TextureAtlasRegion: TextureAtlasRegion,
		get TextureFilter () { return TextureFilter; },
		TextureRegion: TextureRegion,
		get TextureWrap () { return TextureWrap; },
		TimeKeeper: TimeKeeper,
		Timeline: Timeline,
		TrackEntry: TrackEntry,
		TransformConstraint: TransformConstraint,
		TransformConstraintData: TransformConstraintData,
		TransformConstraintTimeline: TransformConstraintTimeline,
		get TransformMode () { return TransformMode; },
		TranslateTimeline: TranslateTimeline,
		TranslateXTimeline: TranslateXTimeline,
		TranslateYTimeline: TranslateYTimeline,
		Triangulator: Triangulator,
		Utils: Utils,
		Vector2: Vector2,
		VertexAttachment: VertexAttachment,
		WindowedMean: WindowedMean
	});

	var TO_TEXTURE_FILTER = {
	  9728: pc.FILTER_NEAREST,
	  9729: pc.FILTER_LINEAR,
	  9984: pc.FILTER_NEAREST_MIPMAP_NEAREST,
	  9985: pc.FILTER_LINEAR_MIPMAP_NEAREST,
	  9986: pc.FILTER_NEAREST_MIPMAP_LINEAR,
	  9987: pc.FILTER_LINEAR_MIPMAP_LINEAR
	};
	var TO_UV_WRAP_MODE = {
	  33648: pc.ADDRESS_MIRRORED_REPEAT,
	  33071: pc.ADDRESS_CLAMP_TO_EDGE,
	  10487: pc.ADDRESS_REPEAT
	};
	var SpineTextureWrapper = function () {
	  function SpineTextureWrapper(texture) {
	    _classCallCheck(this, SpineTextureWrapper);
	    this._image = {
	      width: texture.width,
	      height: texture.height
	    };
	    this.pcTexture = texture;
	  }
	  return _createClass(SpineTextureWrapper, [{
	    key: "setFilters",
	    value: function setFilters(minFilter, magFilter) {
	      this.pcTexture.minFilter = TO_TEXTURE_FILTER[minFilter];
	      this.pcTexture.magFilter = TO_TEXTURE_FILTER[magFilter];
	    }
	  }, {
	    key: "setWraps",
	    value: function setWraps(uWrap, vWrap) {
	      this.pcTexture.addressU = TO_UV_WRAP_MODE[uWrap];
	      this.pcTexture.addressV = TO_UV_WRAP_MODE[vWrap];
	    }
	  }, {
	    key: "getImage",
	    value: function getImage() {
	      return this._image;
	    }
	  }, {
	    key: "dispose",
	    value: function dispose() {
	      this.pcTexture.destroy();
	    }
	  }]);
	}();

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var SEMVER_SPEC_VERSION = '2.0.0';
	var MAX_LENGTH$1 = 256;
	var MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || 9007199254740991;
	var MAX_SAFE_COMPONENT_LENGTH = 16;
	var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
	var RELEASE_TYPES = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
	var constants = {
	  MAX_LENGTH: MAX_LENGTH$1,
	  MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH,
	  MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH,
	  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
	  RELEASE_TYPES: RELEASE_TYPES,
	  SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
	  FLAG_INCLUDE_PRERELEASE: 1,
	  FLAG_LOOSE: 2
	};
	var constants$1 = getDefaultExportFromCjs(constants);

	var debug$1 = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function () {
	  var _console;
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  return (_console = console).error.apply(_console, ['SEMVER'].concat(args));
	} : function () {};
	var debug_1 = debug$1;
	getDefaultExportFromCjs(debug_1);

	var re$2 = {exports: {}};

	(function (module, exports) {
	  var MAX_SAFE_COMPONENT_LENGTH = constants.MAX_SAFE_COMPONENT_LENGTH,
	    MAX_SAFE_BUILD_LENGTH = constants.MAX_SAFE_BUILD_LENGTH,
	    MAX_LENGTH = constants.MAX_LENGTH;
	  var debug = debug_1;
	  exports = module.exports = {};
	  var re = exports.re = [];
	  var safeRe = exports.safeRe = [];
	  var src = exports.src = [];
	  var t = exports.t = {};
	  var R = 0;
	  var LETTERDASHNUMBER = '[a-zA-Z0-9-]';
	  var safeRegexReplacements = [['\\s', 1], ['\\d', MAX_LENGTH], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]];
	  var makeSafeRegex = function makeSafeRegex(value) {
	    for (var _i = 0, _safeRegexReplacement = safeRegexReplacements; _i < _safeRegexReplacement.length; _i++) {
	      var _safeRegexReplacement2 = _slicedToArray(_safeRegexReplacement[_i], 2),
	        token = _safeRegexReplacement2[0],
	        max = _safeRegexReplacement2[1];
	      value = value.split("".concat(token, "*")).join("".concat(token, "{0,").concat(max, "}")).split("".concat(token, "+")).join("".concat(token, "{1,").concat(max, "}"));
	    }
	    return value;
	  };
	  var createToken = function createToken(name, value, isGlobal) {
	    var safe = makeSafeRegex(value);
	    var index = R++;
	    debug(name, index, value);
	    t[name] = index;
	    src[index] = value;
	    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
	    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
	  };
	  createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
	  createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
	  createToken('NONNUMERICIDENTIFIER', "\\d*[a-zA-Z-]".concat(LETTERDASHNUMBER, "*"));
	  createToken('MAINVERSION', "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")"));
	  createToken('MAINVERSIONLOOSE', "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")"));
	  createToken('PRERELEASEIDENTIFIER', "(?:".concat(src[t.NUMERICIDENTIFIER], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));
	  createToken('PRERELEASEIDENTIFIERLOOSE', "(?:".concat(src[t.NUMERICIDENTIFIERLOOSE], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));
	  createToken('PRERELEASE', "(?:-(".concat(src[t.PRERELEASEIDENTIFIER], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIER], ")*))"));
	  createToken('PRERELEASELOOSE', "(?:-?(".concat(src[t.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIERLOOSE], ")*))"));
	  createToken('BUILDIDENTIFIER', "".concat(LETTERDASHNUMBER, "+"));
	  createToken('BUILD', "(?:\\+(".concat(src[t.BUILDIDENTIFIER], "(?:\\.").concat(src[t.BUILDIDENTIFIER], ")*))"));
	  createToken('FULLPLAIN', "v?".concat(src[t.MAINVERSION]).concat(src[t.PRERELEASE], "?").concat(src[t.BUILD], "?"));
	  createToken('FULL', "^".concat(src[t.FULLPLAIN], "$"));
	  createToken('LOOSEPLAIN', "[v=\\s]*".concat(src[t.MAINVERSIONLOOSE]).concat(src[t.PRERELEASELOOSE], "?").concat(src[t.BUILD], "?"));
	  createToken('LOOSE', "^".concat(src[t.LOOSEPLAIN], "$"));
	  createToken('GTLT', '((?:<|>)?=?)');
	  createToken('XRANGEIDENTIFIERLOOSE', "".concat(src[t.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"));
	  createToken('XRANGEIDENTIFIER', "".concat(src[t.NUMERICIDENTIFIER], "|x|X|\\*"));
	  createToken('XRANGEPLAIN', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:".concat(src[t.PRERELEASE], ")?").concat(src[t.BUILD], "?") + ")?)?");
	  createToken('XRANGEPLAINLOOSE', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(src[t.PRERELEASELOOSE], ")?").concat(src[t.BUILD], "?") + ")?)?");
	  createToken('XRANGE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAIN], "$"));
	  createToken('XRANGELOOSE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAINLOOSE], "$"));
	  createToken('COERCEPLAIN', "".concat('(^|[^\\d])' + '(\\d{1,').concat(MAX_SAFE_COMPONENT_LENGTH, "})") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?"));
	  createToken('COERCE', "".concat(src[t.COERCEPLAIN], "(?:$|[^\\d])"));
	  createToken('COERCEFULL', src[t.COERCEPLAIN] + "(?:".concat(src[t.PRERELEASE], ")?") + "(?:".concat(src[t.BUILD], ")?") + "(?:$|[^\\d])");
	  createToken('COERCERTL', src[t.COERCE], true);
	  createToken('COERCERTLFULL', src[t.COERCEFULL], true);
	  createToken('LONETILDE', '(?:~>?)');
	  createToken('TILDETRIM', "(\\s*)".concat(src[t.LONETILDE], "\\s+"), true);
	  exports.tildeTrimReplace = '$1~';
	  createToken('TILDE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAIN], "$"));
	  createToken('TILDELOOSE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAINLOOSE], "$"));
	  createToken('LONECARET', '(?:\\^)');
	  createToken('CARETTRIM', "(\\s*)".concat(src[t.LONECARET], "\\s+"), true);
	  exports.caretTrimReplace = '$1^';
	  createToken('CARET', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAIN], "$"));
	  createToken('CARETLOOSE', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAINLOOSE], "$"));
	  createToken('COMPARATORLOOSE', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], ")$|^$"));
	  createToken('COMPARATOR', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.FULLPLAIN], ")$|^$"));
	  createToken('COMPARATORTRIM', "(\\s*)".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], "|").concat(src[t.XRANGEPLAIN], ")"), true);
	  exports.comparatorTrimReplace = '$1$2$3';
	  createToken('HYPHENRANGE', "^\\s*(".concat(src[t.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAIN], ")") + "\\s*$");
	  createToken('HYPHENRANGELOOSE', "^\\s*(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s*$");
	  createToken('STAR', '(<|>)?=?\\s*\\*');
	  createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
	  createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
	})(re$2, re$2.exports);
	var reExports = re$2.exports;
	getDefaultExportFromCjs(reExports);

	var looseOption = Object.freeze({
	  loose: true
	});
	var emptyOpts = Object.freeze({});
	var parseOptions$1 = function parseOptions(options) {
	  if (!options) {
	    return emptyOpts;
	  }
	  if (_typeof(options) !== 'object') {
	    return looseOption;
	  }
	  return options;
	};
	var parseOptions_1 = parseOptions$1;
	getDefaultExportFromCjs(parseOptions_1);

	var numeric = /^[0-9]+$/;
	var compareIdentifiers$1 = function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
	};
	var rcompareIdentifiers = function rcompareIdentifiers(a, b) {
	  return compareIdentifiers$1(b, a);
	};
	var identifiers = {
	  compareIdentifiers: compareIdentifiers$1,
	  rcompareIdentifiers: rcompareIdentifiers
	};
	getDefaultExportFromCjs(identifiers);

	var debug = debug_1;
	var MAX_LENGTH = constants.MAX_LENGTH,
	  MAX_SAFE_INTEGER = constants.MAX_SAFE_INTEGER;
	var re$1 = reExports.safeRe,
	  t$1 = reExports.t;
	var parseOptions = parseOptions_1;
	var compareIdentifiers = identifiers.compareIdentifiers;
	var SemVer$3 = function () {
	  function SemVer(version, options) {
	    _classCallCheck(this, SemVer);
	    options = parseOptions(options);
	    if (version instanceof SemVer) {
	      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
	        return version;
	      } else {
	        version = version.version;
	      }
	    } else if (typeof version !== 'string') {
	      throw new TypeError("Invalid version. Must be a string. Got type \"".concat(_typeof(version), "\"."));
	    }
	    if (version.length > MAX_LENGTH) {
	      throw new TypeError("version is longer than ".concat(MAX_LENGTH, " characters"));
	    }
	    debug('SemVer', version, options);
	    this.options = options;
	    this.loose = !!options.loose;
	    this.includePrerelease = !!options.includePrerelease;
	    var m = version.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);
	    if (!m) {
	      throw new TypeError("Invalid Version: ".concat(version));
	    }
	    this.raw = version;
	    this.major = +m[1];
	    this.minor = +m[2];
	    this.patch = +m[3];
	    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
	      throw new TypeError('Invalid major version');
	    }
	    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
	      throw new TypeError('Invalid minor version');
	    }
	    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
	      throw new TypeError('Invalid patch version');
	    }
	    if (!m[4]) {
	      this.prerelease = [];
	    } else {
	      this.prerelease = m[4].split('.').map(function (id) {
	        if (/^[0-9]+$/.test(id)) {
	          var num = +id;
	          if (num >= 0 && num < MAX_SAFE_INTEGER) {
	            return num;
	          }
	        }
	        return id;
	      });
	    }
	    this.build = m[5] ? m[5].split('.') : [];
	    this.format();
	  }
	  return _createClass(SemVer, [{
	    key: "format",
	    value: function format() {
	      this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);
	      if (this.prerelease.length) {
	        this.version += "-".concat(this.prerelease.join('.'));
	      }
	      return this.version;
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.version;
	    }
	  }, {
	    key: "compare",
	    value: function compare(other) {
	      debug('SemVer.compare', this.version, this.options, other);
	      if (!(other instanceof SemVer)) {
	        if (typeof other === 'string' && other === this.version) {
	          return 0;
	        }
	        other = new SemVer(other, this.options);
	      }
	      if (other.version === this.version) {
	        return 0;
	      }
	      return this.compareMain(other) || this.comparePre(other);
	    }
	  }, {
	    key: "compareMain",
	    value: function compareMain(other) {
	      if (!(other instanceof SemVer)) {
	        other = new SemVer(other, this.options);
	      }
	      return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
	    }
	  }, {
	    key: "comparePre",
	    value: function comparePre(other) {
	      if (!(other instanceof SemVer)) {
	        other = new SemVer(other, this.options);
	      }
	      if (this.prerelease.length && !other.prerelease.length) {
	        return -1;
	      } else if (!this.prerelease.length && other.prerelease.length) {
	        return 1;
	      } else if (!this.prerelease.length && !other.prerelease.length) {
	        return 0;
	      }
	      var i = 0;
	      do {
	        var a = this.prerelease[i];
	        var b = other.prerelease[i];
	        debug('prerelease compare', i, a, b);
	        if (a === undefined && b === undefined) {
	          return 0;
	        } else if (b === undefined) {
	          return 1;
	        } else if (a === undefined) {
	          return -1;
	        } else if (a === b) {
	          continue;
	        } else {
	          return compareIdentifiers(a, b);
	        }
	      } while (++i);
	    }
	  }, {
	    key: "compareBuild",
	    value: function compareBuild(other) {
	      if (!(other instanceof SemVer)) {
	        other = new SemVer(other, this.options);
	      }
	      var i = 0;
	      do {
	        var a = this.build[i];
	        var b = other.build[i];
	        debug('build compare', i, a, b);
	        if (a === undefined && b === undefined) {
	          return 0;
	        } else if (b === undefined) {
	          return 1;
	        } else if (a === undefined) {
	          return -1;
	        } else if (a === b) {
	          continue;
	        } else {
	          return compareIdentifiers(a, b);
	        }
	      } while (++i);
	    }
	  }, {
	    key: "inc",
	    value: function inc(release, identifier, identifierBase) {
	      switch (release) {
	        case 'premajor':
	          this.prerelease.length = 0;
	          this.patch = 0;
	          this.minor = 0;
	          this.major++;
	          this.inc('pre', identifier, identifierBase);
	          break;
	        case 'preminor':
	          this.prerelease.length = 0;
	          this.patch = 0;
	          this.minor++;
	          this.inc('pre', identifier, identifierBase);
	          break;
	        case 'prepatch':
	          this.prerelease.length = 0;
	          this.inc('patch', identifier, identifierBase);
	          this.inc('pre', identifier, identifierBase);
	          break;
	        case 'prerelease':
	          if (this.prerelease.length === 0) {
	            this.inc('patch', identifier, identifierBase);
	          }
	          this.inc('pre', identifier, identifierBase);
	          break;
	        case 'major':
	          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
	            this.major++;
	          }
	          this.minor = 0;
	          this.patch = 0;
	          this.prerelease = [];
	          break;
	        case 'minor':
	          if (this.patch !== 0 || this.prerelease.length === 0) {
	            this.minor++;
	          }
	          this.patch = 0;
	          this.prerelease = [];
	          break;
	        case 'patch':
	          if (this.prerelease.length === 0) {
	            this.patch++;
	          }
	          this.prerelease = [];
	          break;
	        case 'pre':
	          {
	            var base = Number(identifierBase) ? 1 : 0;
	            if (!identifier && identifierBase === false) {
	              throw new Error('invalid increment argument: identifier is empty');
	            }
	            if (this.prerelease.length === 0) {
	              this.prerelease = [base];
	            } else {
	              var i = this.prerelease.length;
	              while (--i >= 0) {
	                if (typeof this.prerelease[i] === 'number') {
	                  this.prerelease[i]++;
	                  i = -2;
	                }
	              }
	              if (i === -1) {
	                if (identifier === this.prerelease.join('.') && identifierBase === false) {
	                  throw new Error('invalid increment argument: identifier already exists');
	                }
	                this.prerelease.push(base);
	              }
	            }
	            if (identifier) {
	              var prerelease = [identifier, base];
	              if (identifierBase === false) {
	                prerelease = [identifier];
	              }
	              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
	                if (isNaN(this.prerelease[1])) {
	                  this.prerelease = prerelease;
	                }
	              } else {
	                this.prerelease = prerelease;
	              }
	            }
	            break;
	          }
	        default:
	          throw new Error("invalid increment argument: ".concat(release));
	      }
	      this.raw = this.format();
	      if (this.build.length) {
	        this.raw += "+".concat(this.build.join('.'));
	      }
	      return this;
	    }
	  }]);
	}();
	var semver$1 = SemVer$3;
	getDefaultExportFromCjs(semver$1);

	var SemVer$2 = semver$1;
	var parse$2 = function parse(version, options) {
	  var throwErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  if (version instanceof SemVer$2) {
	    return version;
	  }
	  try {
	    return new SemVer$2(version, options);
	  } catch (er) {
	    if (!throwErrors) {
	      return null;
	    }
	    throw er;
	  }
	};
	var parse_1 = parse$2;
	getDefaultExportFromCjs(parse_1);

	var parse$1 = parse_1;
	var valid = function valid(version, options) {
	  var v = parse$1(version, options);
	  return v ? v.version : null;
	};
	var valid_1 = valid;
	var valid$1 = getDefaultExportFromCjs(valid_1);

	var SemVer$1 = semver$1;
	var parse = parse_1;
	var re = reExports.safeRe,
	  t = reExports.t;
	var coerce = function coerce(version, options) {
	  if (version instanceof SemVer$1) {
	    return version;
	  }
	  if (typeof version === 'number') {
	    version = String(version);
	  }
	  if (typeof version !== 'string') {
	    return null;
	  }
	  options = options || {};
	  var match = null;
	  if (!options.rtl) {
	    match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
	  } else {
	    var coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
	    var next;
	    while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
	      if (!match || next.index + next[0].length !== match.index + match[0].length) {
	        match = next;
	      }
	      coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
	    }
	    coerceRtlRegex.lastIndex = -1;
	  }
	  if (match === null) {
	    return null;
	  }
	  var major = match[2];
	  var minor = match[3] || '0';
	  var patch = match[4] || '0';
	  var prerelease = options.includePrerelease && match[5] ? "-".concat(match[5]) : '';
	  var build = options.includePrerelease && match[6] ? "+".concat(match[6]) : '';
	  return parse("".concat(major, ".").concat(minor, ".").concat(patch).concat(prerelease).concat(build), options);
	};
	var coerce_1 = coerce;
	var coerce$1 = getDefaultExportFromCjs(coerce_1);

	var LRUCache = function () {
	  function LRUCache() {
	    _classCallCheck(this, LRUCache);
	    this.max = 1000;
	    this.map = new Map();
	  }
	  return _createClass(LRUCache, [{
	    key: "get",
	    value: function get(key) {
	      var value = this.map.get(key);
	      if (value === undefined) {
	        return undefined;
	      } else {
	        this.map.delete(key);
	        this.map.set(key, value);
	        return value;
	      }
	    }
	  }, {
	    key: "delete",
	    value: function _delete(key) {
	      if (this.map.has(key)) {
	        this.map.delete(key);
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: "set",
	    value: function set(key, value) {
	      var deleted = this.delete(key);
	      if (!deleted && value !== undefined) {
	        if (this.map.size >= this.max) {
	          var firstKey = this.map.keys().next().value;
	          this.delete(firstKey);
	        }
	        this.map.set(key, value);
	      }
	      return this;
	    }
	  }]);
	}();
	var lrucache = LRUCache;
	getDefaultExportFromCjs(lrucache);

	var SemVer = semver$1;
	var compare$6 = function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(new SemVer(b, loose));
	};
	var compare_1 = compare$6;
	getDefaultExportFromCjs(compare_1);

	var compare$5 = compare_1;
	var eq$1 = function eq(a, b, loose) {
	  return compare$5(a, b, loose) === 0;
	};
	var eq_1 = eq$1;
	getDefaultExportFromCjs(eq_1);

	var compare$4 = compare_1;
	var neq$1 = function neq(a, b, loose) {
	  return compare$4(a, b, loose) !== 0;
	};
	var neq_1 = neq$1;
	getDefaultExportFromCjs(neq_1);

	var compare$3 = compare_1;
	var gt$1 = function gt(a, b, loose) {
	  return compare$3(a, b, loose) > 0;
	};
	var gt_1 = gt$1;
	getDefaultExportFromCjs(gt_1);

	var compare$2 = compare_1;
	var gte$1 = function gte(a, b, loose) {
	  return compare$2(a, b, loose) >= 0;
	};
	var gte_1 = gte$1;
	getDefaultExportFromCjs(gte_1);

	var compare$1 = compare_1;
	var lt$1 = function lt(a, b, loose) {
	  return compare$1(a, b, loose) < 0;
	};
	var lt_1 = lt$1;
	getDefaultExportFromCjs(lt_1);

	var compare = compare_1;
	var lte$1 = function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	};
	var lte_1 = lte$1;
	getDefaultExportFromCjs(lte_1);

	var eq = eq_1;
	var neq = neq_1;
	var gt = gt_1;
	var gte = gte_1;
	var lt = lt_1;
	var lte = lte_1;
	var cmp = function cmp(a, op, b, loose) {
	  switch (op) {
	    case '===':
	      if (_typeof(a) === 'object') {
	        a = a.version;
	      }
	      if (_typeof(b) === 'object') {
	        b = b.version;
	      }
	      return a === b;
	    case '!==':
	      if (_typeof(a) === 'object') {
	        a = a.version;
	      }
	      if (_typeof(b) === 'object') {
	        b = b.version;
	      }
	      return a !== b;
	    case '':
	    case '=':
	    case '==':
	      return eq(a, b, loose);
	    case '!=':
	      return neq(a, b, loose);
	    case '>':
	      return gt(a, b, loose);
	    case '>=':
	      return gte(a, b, loose);
	    case '<':
	      return lt(a, b, loose);
	    case '<=':
	      return lte(a, b, loose);
	    default:
	      throw new TypeError("Invalid operator: ".concat(op));
	  }
	};
	var cmp_1 = cmp;
	getDefaultExportFromCjs(cmp_1);

	var comparator;
	var hasRequiredComparator;
	function requireComparator() {
	  if (hasRequiredComparator) return comparator;
	  hasRequiredComparator = 1;
	  var ANY = Symbol('SemVer ANY');
	  var Comparator = function () {
	    function Comparator(comp, options) {
	      _classCallCheck(this, Comparator);
	      options = parseOptions(options);
	      if (comp instanceof Comparator) {
	        if (comp.loose === !!options.loose) {
	          return comp;
	        } else {
	          comp = comp.value;
	        }
	      }
	      comp = comp.trim().split(/\s+/).join(' ');
	      debug('comparator', comp, options);
	      this.options = options;
	      this.loose = !!options.loose;
	      this.parse(comp);
	      if (this.semver === ANY) {
	        this.value = '';
	      } else {
	        this.value = this.operator + this.semver.version;
	      }
	      debug('comp', this);
	    }
	    return _createClass(Comparator, [{
	      key: "parse",
	      value: function parse(comp) {
	        var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
	        var m = comp.match(r);
	        if (!m) {
	          throw new TypeError("Invalid comparator: ".concat(comp));
	        }
	        this.operator = m[1] !== undefined ? m[1] : '';
	        if (this.operator === '=') {
	          this.operator = '';
	        }
	        if (!m[2]) {
	          this.semver = ANY;
	        } else {
	          this.semver = new SemVer(m[2], this.options.loose);
	        }
	      }
	    }, {
	      key: "toString",
	      value: function toString() {
	        return this.value;
	      }
	    }, {
	      key: "test",
	      value: function test(version) {
	        debug('Comparator.test', version, this.options.loose);
	        if (this.semver === ANY || version === ANY) {
	          return true;
	        }
	        if (typeof version === 'string') {
	          try {
	            version = new SemVer(version, this.options);
	          } catch (er) {
	            return false;
	          }
	        }
	        return cmp(version, this.operator, this.semver, this.options);
	      }
	    }, {
	      key: "intersects",
	      value: function intersects(comp, options) {
	        if (!(comp instanceof Comparator)) {
	          throw new TypeError('a Comparator is required');
	        }
	        if (this.operator === '') {
	          if (this.value === '') {
	            return true;
	          }
	          return new Range(comp.value, options).test(this.value);
	        } else if (comp.operator === '') {
	          if (comp.value === '') {
	            return true;
	          }
	          return new Range(this.value, options).test(comp.semver);
	        }
	        options = parseOptions(options);
	        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
	          return false;
	        }
	        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
	          return false;
	        }
	        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
	          return true;
	        }
	        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
	          return true;
	        }
	        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
	          return true;
	        }
	        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
	          return true;
	        }
	        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
	          return true;
	        }
	        return false;
	      }
	    }], [{
	      key: "ANY",
	      get: function get() {
	        return ANY;
	      }
	    }]);
	  }();
	  comparator = Comparator;
	  var parseOptions = parseOptions_1;
	  var re = reExports.safeRe,
	    t = reExports.t;
	  var cmp = cmp_1;
	  var debug = debug_1;
	  var SemVer = semver$1;
	  var Range = requireRange();
	  return comparator;
	}

	var range;
	var hasRequiredRange;
	function requireRange() {
	  if (hasRequiredRange) return range;
	  hasRequiredRange = 1;
	  var Range = function () {
	    function Range(range, options) {
	      var _this = this;
	      _classCallCheck(this, Range);
	      options = parseOptions(options);
	      if (range instanceof Range) {
	        if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
	          return range;
	        } else {
	          return new Range(range.raw, options);
	        }
	      }
	      if (range instanceof Comparator) {
	        this.raw = range.value;
	        this.set = [[range]];
	        this.format();
	        return this;
	      }
	      this.options = options;
	      this.loose = !!options.loose;
	      this.includePrerelease = !!options.includePrerelease;
	      this.raw = range.trim().split(/\s+/).join(' ');
	      this.set = this.raw.split('||').map(function (r) {
	        return _this.parseRange(r.trim());
	      }).filter(function (c) {
	        return c.length;
	      });
	      if (!this.set.length) {
	        throw new TypeError("Invalid SemVer Range: ".concat(this.raw));
	      }
	      if (this.set.length > 1) {
	        var first = this.set[0];
	        this.set = this.set.filter(function (c) {
	          return !isNullSet(c[0]);
	        });
	        if (this.set.length === 0) {
	          this.set = [first];
	        } else if (this.set.length > 1) {
	          var _iterator = _createForOfIteratorHelper(this.set),
	            _step;
	          try {
	            for (_iterator.s(); !(_step = _iterator.n()).done;) {
	              var c = _step.value;
	              if (c.length === 1 && isAny(c[0])) {
	                this.set = [c];
	                break;
	              }
	            }
	          } catch (err) {
	            _iterator.e(err);
	          } finally {
	            _iterator.f();
	          }
	        }
	      }
	      this.format();
	    }
	    return _createClass(Range, [{
	      key: "format",
	      value: function format() {
	        this.range = this.set.map(function (comps) {
	          return comps.join(' ').trim();
	        }).join('||').trim();
	        return this.range;
	      }
	    }, {
	      key: "toString",
	      value: function toString() {
	        return this.range;
	      }
	    }, {
	      key: "parseRange",
	      value: function parseRange(range) {
	        var _this2 = this;
	        var memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
	        var memoKey = memoOpts + ':' + range;
	        var cached = cache.get(memoKey);
	        if (cached) {
	          return cached;
	        }
	        var loose = this.options.loose;
	        var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
	        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
	        debug('hyphen replace', range);
	        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
	        debug('comparator trim', range);
	        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
	        debug('tilde trim', range);
	        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
	        debug('caret trim', range);
	        var rangeList = range.split(' ').map(function (comp) {
	          return parseComparator(comp, _this2.options);
	        }).join(' ').split(/\s+/).map(function (comp) {
	          return replaceGTE0(comp, _this2.options);
	        });
	        if (loose) {
	          rangeList = rangeList.filter(function (comp) {
	            debug('loose invalid filter', comp, _this2.options);
	            return !!comp.match(re[t.COMPARATORLOOSE]);
	          });
	        }
	        debug('range list', rangeList);
	        var rangeMap = new Map();
	        var comparators = rangeList.map(function (comp) {
	          return new Comparator(comp, _this2.options);
	        });
	        var _iterator2 = _createForOfIteratorHelper(comparators),
	          _step2;
	        try {
	          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
	            var comp = _step2.value;
	            if (isNullSet(comp)) {
	              return [comp];
	            }
	            rangeMap.set(comp.value, comp);
	          }
	        } catch (err) {
	          _iterator2.e(err);
	        } finally {
	          _iterator2.f();
	        }
	        if (rangeMap.size > 1 && rangeMap.has('')) {
	          rangeMap.delete('');
	        }
	        var result = _toConsumableArray(rangeMap.values());
	        cache.set(memoKey, result);
	        return result;
	      }
	    }, {
	      key: "intersects",
	      value: function intersects(range, options) {
	        if (!(range instanceof Range)) {
	          throw new TypeError('a Range is required');
	        }
	        return this.set.some(function (thisComparators) {
	          return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
	            return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
	              return rangeComparators.every(function (rangeComparator) {
	                return thisComparator.intersects(rangeComparator, options);
	              });
	            });
	          });
	        });
	      }
	    }, {
	      key: "test",
	      value: function test(version) {
	        if (!version) {
	          return false;
	        }
	        if (typeof version === 'string') {
	          try {
	            version = new SemVer(version, this.options);
	          } catch (er) {
	            return false;
	          }
	        }
	        for (var i = 0; i < this.set.length; i++) {
	          if (testSet(this.set[i], version, this.options)) {
	            return true;
	          }
	        }
	        return false;
	      }
	    }]);
	  }();
	  range = Range;
	  var LRU = lrucache;
	  var cache = new LRU();
	  var parseOptions = parseOptions_1;
	  var Comparator = requireComparator();
	  var debug = debug_1;
	  var SemVer = semver$1;
	  var re = reExports.safeRe,
	    t = reExports.t,
	    comparatorTrimReplace = reExports.comparatorTrimReplace,
	    tildeTrimReplace = reExports.tildeTrimReplace,
	    caretTrimReplace = reExports.caretTrimReplace;
	  var FLAG_INCLUDE_PRERELEASE = constants.FLAG_INCLUDE_PRERELEASE,
	    FLAG_LOOSE = constants.FLAG_LOOSE;
	  var isNullSet = function isNullSet(c) {
	    return c.value === '<0.0.0-0';
	  };
	  var isAny = function isAny(c) {
	    return c.value === '';
	  };
	  var isSatisfiable = function isSatisfiable(comparators, options) {
	    var result = true;
	    var remainingComparators = comparators.slice();
	    var testComparator = remainingComparators.pop();
	    while (result && remainingComparators.length) {
	      result = remainingComparators.every(function (otherComparator) {
	        return testComparator.intersects(otherComparator, options);
	      });
	      testComparator = remainingComparators.pop();
	    }
	    return result;
	  };
	  var parseComparator = function parseComparator(comp, options) {
	    debug('comp', comp, options);
	    comp = replaceCarets(comp, options);
	    debug('caret', comp);
	    comp = replaceTildes(comp, options);
	    debug('tildes', comp);
	    comp = replaceXRanges(comp, options);
	    debug('xrange', comp);
	    comp = replaceStars(comp, options);
	    debug('stars', comp);
	    return comp;
	  };
	  var isX = function isX(id) {
	    return !id || id.toLowerCase() === 'x' || id === '*';
	  };
	  var replaceTildes = function replaceTildes(comp, options) {
	    return comp.trim().split(/\s+/).map(function (c) {
	      return replaceTilde(c, options);
	    }).join(' ');
	  };
	  var replaceTilde = function replaceTilde(comp, options) {
	    var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
	    return comp.replace(r, function (_, M, m, p, pr) {
	      debug('tilde', comp, _, M, m, p, pr);
	      var ret;
	      if (isX(M)) {
	        ret = '';
	      } else if (isX(m)) {
	        ret = ">=".concat(M, ".0.0 <").concat(+M + 1, ".0.0-0");
	      } else if (isX(p)) {
	        ret = ">=".concat(M, ".").concat(m, ".0 <").concat(M, ".").concat(+m + 1, ".0-0");
	      } else if (pr) {
	        debug('replaceTilde pr', pr);
	        ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
	      } else {
	        ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(M, ".").concat(+m + 1, ".0-0");
	      }
	      debug('tilde return', ret);
	      return ret;
	    });
	  };
	  var replaceCarets = function replaceCarets(comp, options) {
	    return comp.trim().split(/\s+/).map(function (c) {
	      return replaceCaret(c, options);
	    }).join(' ');
	  };
	  var replaceCaret = function replaceCaret(comp, options) {
	    debug('caret', comp, options);
	    var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
	    var z = options.includePrerelease ? '-0' : '';
	    return comp.replace(r, function (_, M, m, p, pr) {
	      debug('caret', comp, _, M, m, p, pr);
	      var ret;
	      if (isX(M)) {
	        ret = '';
	      } else if (isX(m)) {
	        ret = ">=".concat(M, ".0.0").concat(z, " <").concat(+M + 1, ".0.0-0");
	      } else if (isX(p)) {
	        if (M === '0') {
	          ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
	        } else {
	          ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(+M + 1, ".0.0-0");
	        }
	      } else if (pr) {
	        debug('replaceCaret pr', pr);
	        if (M === '0') {
	          if (m === '0') {
	            ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
	          } else {
	            ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
	          }
	        } else {
	          ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(+M + 1, ".0.0-0");
	        }
	      } else {
	        debug('no pr');
	        if (M === '0') {
	          if (m === '0') {
	            ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
	          } else {
	            ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
	          }
	        } else {
	          ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(+M + 1, ".0.0-0");
	        }
	      }
	      debug('caret return', ret);
	      return ret;
	    });
	  };
	  var replaceXRanges = function replaceXRanges(comp, options) {
	    debug('replaceXRanges', comp, options);
	    return comp.split(/\s+/).map(function (c) {
	      return replaceXRange(c, options);
	    }).join(' ');
	  };
	  var replaceXRange = function replaceXRange(comp, options) {
	    comp = comp.trim();
	    var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
	    return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	      debug('xRange', comp, ret, gtlt, M, m, p, pr);
	      var xM = isX(M);
	      var xm = xM || isX(m);
	      var xp = xm || isX(p);
	      var anyX = xp;
	      if (gtlt === '=' && anyX) {
	        gtlt = '';
	      }
	      pr = options.includePrerelease ? '-0' : '';
	      if (xM) {
	        if (gtlt === '>' || gtlt === '<') {
	          ret = '<0.0.0-0';
	        } else {
	          ret = '*';
	        }
	      } else if (gtlt && anyX) {
	        if (xm) {
	          m = 0;
	        }
	        p = 0;
	        if (gtlt === '>') {
	          gtlt = '>=';
	          if (xm) {
	            M = +M + 1;
	            m = 0;
	            p = 0;
	          } else {
	            m = +m + 1;
	            p = 0;
	          }
	        } else if (gtlt === '<=') {
	          gtlt = '<';
	          if (xm) {
	            M = +M + 1;
	          } else {
	            m = +m + 1;
	          }
	        }
	        if (gtlt === '<') {
	          pr = '-0';
	        }
	        ret = "".concat(gtlt + M, ".").concat(m, ".").concat(p).concat(pr);
	      } else if (xm) {
	        ret = ">=".concat(M, ".0.0").concat(pr, " <").concat(+M + 1, ".0.0-0");
	      } else if (xp) {
	        ret = ">=".concat(M, ".").concat(m, ".0").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
	      }
	      debug('xRange return', ret);
	      return ret;
	    });
	  };
	  var replaceStars = function replaceStars(comp, options) {
	    debug('replaceStars', comp, options);
	    return comp.trim().replace(re[t.STAR], '');
	  };
	  var replaceGTE0 = function replaceGTE0(comp, options) {
	    debug('replaceGTE0', comp, options);
	    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
	  };
	  var hyphenReplace = function hyphenReplace(incPr) {
	    return function ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) {
	      if (isX(fM)) {
	        from = '';
	      } else if (isX(fm)) {
	        from = ">=".concat(fM, ".0.0").concat(incPr ? '-0' : '');
	      } else if (isX(fp)) {
	        from = ">=".concat(fM, ".").concat(fm, ".0").concat(incPr ? '-0' : '');
	      } else if (fpr) {
	        from = ">=".concat(from);
	      } else {
	        from = ">=".concat(from).concat(incPr ? '-0' : '');
	      }
	      if (isX(tM)) {
	        to = '';
	      } else if (isX(tm)) {
	        to = "<".concat(+tM + 1, ".0.0-0");
	      } else if (isX(tp)) {
	        to = "<".concat(tM, ".").concat(+tm + 1, ".0-0");
	      } else if (tpr) {
	        to = "<=".concat(tM, ".").concat(tm, ".").concat(tp, "-").concat(tpr);
	      } else if (incPr) {
	        to = "<".concat(tM, ".").concat(tm, ".").concat(+tp + 1, "-0");
	      } else {
	        to = "<=".concat(to);
	      }
	      return "".concat(from, " ").concat(to).trim();
	    };
	  };
	  var testSet = function testSet(set, version, options) {
	    for (var i = 0; i < set.length; i++) {
	      if (!set[i].test(version)) {
	        return false;
	      }
	    }
	    if (version.prerelease.length && !options.includePrerelease) {
	      for (var _i = 0; _i < set.length; _i++) {
	        debug(set[_i].semver);
	        if (set[_i].semver === Comparator.ANY) {
	          continue;
	        }
	        if (set[_i].semver.prerelease.length > 0) {
	          var allowed = set[_i].semver;
	          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
	            return true;
	          }
	        }
	      }
	      return false;
	    }
	    return true;
	  };
	  return range;
	}

	var Range = requireRange();
	var satisfies = function satisfies(version, range, options) {
	  try {
	    range = new Range(range, options);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	};
	var satisfies_1 = satisfies;
	var satisfies$1 = getDefaultExportFromCjs(satisfies_1);

	var semver = {
	  valid: valid$1,
	  coerce: coerce$1,
	  satisfies: satisfies$1,
	  SEMVER_SPEC_VERSION: constants$1.SEMVER_SPEC_VERSION
	};

	var ATTACHMENT_TYPE = {
	  NULL: 0,
	  MESH: 1,
	  REGION: 2
	};
	var QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
	var Spine = function () {
	  function Spine(app, atlasData, skeletonData, textureData) {
	    _classCallCheck(this, Spine);
	    _defineProperty(this, "autoUpdate", true);
	    _defineProperty(this, "skeleton", void 0);
	    _defineProperty(this, "states", void 0);
	    this._app = app;
	    this._position = new pc__namespace.Vec3();
	    var atlas;
	    if (TextureAtlas.length === 1) {
	      atlas = new TextureAtlas(atlasData);
	      var _iterator = _createForOfIteratorHelper(atlas.pages),
	        _step;
	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var page = _step.value;
	          page.setTexture(new SpineTextureWrapper(textureData[page.name]));
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	    } else {
	      atlas = new TextureAtlas(atlasData, function (path) {
	        return new SpineTextureWrapper(textureData[path]);
	      });
	    }
	    var json = new SkeletonJson(new AtlasAttachmentLoader(atlas));
	    json.scale *= 0.01;
	    var _skeletonData = json.readSkeletonData(skeletonData);
	    this.skeletonVersion = semver.valid(semver.coerce(_skeletonData.version));
	    this._spine_3_6_0 = semver.satisfies(this.skeletonVersion, '<=3.6.0');
	    this._spine_3_7_99 = semver.satisfies(this.skeletonVersion, '<=3.7.99');
	    this._spine_4_0_X = semver.satisfies(this.skeletonVersion, '~4.0.0');
	    this._spine_4_1_X = semver.satisfies(this.skeletonVersion, '~4.1.23');
	    this.skeleton = new Skeleton(_skeletonData);
	    this.skeleton.updateWorldTransform();
	    this.stateData = new AnimationStateData(this.skeleton.data);
	    this.states = [new AnimationState(this.stateData)];
	    this.clipper = new SkeletonClipping();
	    this._node = new pc__namespace.GraphNode();
	    this._meshes = [];
	    this._meshInstances = [];
	    this._materials = {};
	    this._tint = {};
	    this._aabb = new pc__namespace.BoundingBox();
	    this._aabbTempArray = [];
	    this._aabbTempOffset = new pc__namespace.Vec2();
	    this._aabbTempSize = new pc__namespace.Vec2();
	    this._renderCounts = {
	      vertexCount: 0,
	      indexCount: 0
	    };
	    this._vertexFormat = null;
	    this._vertexBuffer = null;
	    this._indexBuffer = null;
	    this._priority = 0;
	    this._timeScale = 1;
	    this._layers = [pc__namespace.LAYERID_UI];
	    this.init();
	    this._hidden = false;
	  }
	  return _createClass(Spine, [{
	    key: "destroy",
	    value: function destroy() {
	      this.removeFromLayers();
	      for (var i = 0; i < this._meshInstances.length; i++) {
	        this._meshInstances[i].mesh.vertexBuffer = null;
	        this._meshInstances[i].mesh.indexBuffer.length = 0;
	        this._meshInstances[i].material = null;
	      }
	      if (this._vertexBuffer) {
	        this._vertexBuffer.destroy();
	        this._vertexBuffer = null;
	      }
	      if (this._indexBuffer) {
	        this._indexBuffer.destroy();
	        this._indexBuffer = null;
	      }
	      this._meshInstances = [];
	      this.skeleton = null;
	      this.stateData = null;
	      this._materials = {};
	      this._node = null;
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      if (this._hidden) return;
	      for (var i = 0, n = this._meshInstances.length; i < n; i++) {
	        this._meshInstances[i].visible = false;
	      }
	      this._hidden = true;
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      if (!this._hidden) return;
	      for (var i = 0, n = this._meshInstances.length; i < n; i++) {
	        this._meshInstances[i].visible = true;
	      }
	      this._hidden = false;
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      this._vertexFormat = new pc__namespace.VertexFormat(this._app.graphicsDevice, [{
	        semantic: pc__namespace.SEMANTIC_POSITION,
	        components: 2,
	        type: pc__namespace.TYPE_FLOAT32
	      }, {
	        semantic: pc__namespace.SEMANTIC_NORMAL,
	        components: 4,
	        type: pc__namespace.TYPE_UINT8,
	        normalize: true
	      }, {
	        semantic: pc__namespace.SEMANTIC_TEXCOORD0,
	        components: 2,
	        type: pc__namespace.TYPE_FLOAT32
	      }, {
	        semantic: pc__namespace.SEMANTIC_COLOR,
	        components: 4,
	        type: pc__namespace.TYPE_UINT8,
	        normalize: true
	      }]);
	      var drawOrder = this.skeleton.drawOrder;
	      for (var i = 0, n = drawOrder.length; i < n; i++) {
	        this.initSlot(drawOrder[i]);
	      }
	    }
	  }, {
	    key: "initSlot",
	    value: function initSlot(slot) {
	      slot.positions = [];
	      slot.uvs = [];
	      slot.indices = [];
	      slot.vertexColor = {};
	      slot._active = {
	        name: '',
	        type: ATTACHMENT_TYPE.NULL
	      };
	      this.initAttachment(slot);
	    }
	  }, {
	    key: "createMaterial",
	    value: function createMaterial(texture) {
	      var material = new pc__namespace.StandardMaterial();
	      material.emissiveMap = texture;
	      material.emissiveVertexColor = true;
	      material.emissive = pc__namespace.Color.WHITE;
	      material.opacityMap = texture;
	      material.opacityVertexColor = true;
	      material.depthWrite = false;
	      material.cull = pc__namespace.CULLFACE_NONE;
	      material.blendType = pc__namespace.BLEND_PREMULTIPLIED;
	      if (this._spine_3_6_0) {
	        var alphaPremul = ['gl_FragColor.rgb *= vVertexColor.a;', 'gl_FragColor.a = dAlpha;'].join('\n');
	        material.chunks.outputAlphaPremulPS = alphaPremul;
	      }
	      material.update();
	      return material;
	    }
	  }, {
	    key: "initAttachment",
	    value: function initAttachment(slot) {
	      var attachment = slot.attachment;
	      if (attachment) {
	        slot._active.name = attachment.name;
	        if (attachment instanceof RegionAttachment) {
	          slot._active.type = ATTACHMENT_TYPE.REGION;
	        } else if (attachment instanceof MeshAttachment) {
	          slot._active.type = ATTACHMENT_TYPE.MESH;
	        }
	        var texture = null;
	        if (attachment.region) {
	          if (attachment.region.texture) {
	            texture = attachment.region.texture.pcTexture;
	          }
	          if (attachment.region.page && attachment.region.page.texture) {
	            texture = attachment.region.page.texture.pcTexture;
	          }
	        }
	        if (texture) {
	          if (texture instanceof pc__namespace.StandardMaterial) {
	            this._materials[texture.name] = texture;
	            slot.material = texture.name;
	          } else {
	            var key = null;
	            if (texture.name) {
	              key = texture.name;
	            } else if (texture.getSource() instanceof Image) {
	              key = texture.getSource().getAttribute('src');
	            }
	            if (key) {
	              if (this._materials[key] === undefined) {
	                var material = this.createMaterial(texture);
	                this._materials[key] = material;
	              }
	              slot.material = key;
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: "updateSlot",
	    value: function updateSlot(slot, clipper) {
	      var attachment = slot.attachment;
	      var name = attachment.name;
	      var type = attachment instanceof RegionAttachment ? ATTACHMENT_TYPE.REGION : attachment instanceof MeshAttachment ? ATTACHMENT_TYPE.MESH : ATTACHMENT_TYPE.NULL;
	      if (slot._active.name !== name || slot._active.type !== type) {
	        this.initAttachment(slot);
	      }
	      slot.positions.length = 0;
	      if (attachment instanceof RegionAttachment) {
	        if (this._spine_4_1_X) {
	          attachment.computeWorldVertices(slot, slot.positions, 0, 2);
	        } else {
	          attachment.computeWorldVertices(slot.bone, slot.positions, 0, 2);
	        }
	      } else if (attachment instanceof MeshAttachment) {
	        attachment.computeWorldVertices(slot, 0, attachment.worldVerticesLength, slot.positions, 0, 2);
	      }
	      var tint = this._tint[name];
	      slot.vertexColor = {
	        r: Math.round(255 * slot.color.r * (tint ? tint.r : 1)),
	        g: Math.round(255 * slot.color.g * (tint ? tint.g : 1)),
	        b: Math.round(255 * slot.color.b * (tint ? tint.b : 1)),
	        a: Math.round(255 * slot.color.a * (tint ? tint.a : 1))
	      };
	      var srcTriangles = attachment.triangles || QUAD_TRIANGLES;
	      var i;
	      var count;
	      if (clipper.isClipping()) {
	        var twoColorTint = false;
	        clipper.clipTriangles(slot.positions, 0, srcTriangles, srcTriangles.length, attachment.uvs, Color.WHITE, Color.WHITE, twoColorTint);
	        slot.positions.length = 0;
	        slot.uvs.length = 0;
	        var vertexSize = twoColorTint ? 12 : 8;
	        count = clipper.clippedVertices.length;
	        for (i = 0; i < count; i += vertexSize) {
	          slot.positions.push(clipper.clippedVertices[i], clipper.clippedVertices[i + 1]);
	          slot.uvs.push(clipper.clippedVertices[i + 6], 1 - clipper.clippedVertices[i + 7]);
	        }
	        slot.indices = clipper.clippedTriangles.slice();
	      } else {
	        slot.uvs.length = 0;
	        count = slot.positions.length;
	        for (i = 0; i < count; i += 2) {
	          slot.uvs.push(attachment.uvs[i], 1 - attachment.uvs[i + 1]);
	        }
	        slot.indices = srcTriangles;
	      }
	      this._renderCounts.vertexCount += slot.positions.length / 2;
	      this._renderCounts.indexCount += slot.indices.length;
	    }
	  }, {
	    key: "updateSkeleton",
	    value: function updateSkeleton(dt) {
	      this._renderCounts.vertexCount = 0;
	      this._renderCounts.indexCount = 0;
	      var clipper = this.clipper;
	      var inRange = false;
	      inRange = true;
	      var drawOrder = this.skeleton.drawOrder;
	      var count = drawOrder.length;
	      for (var i = 0; i < count; i++) {
	        var slot = drawOrder[i];
	        if (!this._spine_3_7_99) {
	          if (!slot.bone.active) {
	            clipper.clipEndWithSlot(slot);
	            continue;
	          }
	        }
	        if (!inRange) {
	          clipper.clipEndWithSlot(slot);
	          continue;
	        }
	        var attachment = slot.getAttachment();
	        if (attachment instanceof ClippingAttachment) {
	          clipper.clipStart(slot, attachment);
	          continue;
	        } else if (!(attachment instanceof RegionAttachment) && !(attachment instanceof MeshAttachment)) {
	          if (!this._spine_3_7_99) clipper.clipEndWithSlot(slot);
	          continue;
	        }
	        this.updateSlot(slot, clipper);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      this._meshInstances.forEach(function (instance) {
	        instance.material = null;
	      });
	      this.removeFromLayers();
	      this._meshes = [];
	      this._meshInstances.length = 0;
	      if (this._renderCounts.indexCount > 0 && this._renderCounts.vertexCount > 0) {
	        this.skeleton.getBounds(this._aabbTempOffset, this._aabbTempSize, this._aabbTempArray);
	        this._aabb.center = new pc__namespace.Vec3(this._aabbTempOffset.x, this._aabbTempOffset.y, 0);
	        this._aabb.halfExtents = new pc__namespace.Vec3(0.5 * this._aabbTempSize.x, 0.5 * this._aabbTempSize.y, 0);
	        if (!this._vertexBuffer || this._vertexBuffer.getNumVertices() < this._renderCounts.vertexCount) {
	          if (this._vertexBuffer) this._vertexBuffer.destroy();
	          this._vertexBuffer = new pc__namespace.VertexBuffer(this._app.graphicsDevice, this._vertexFormat, this._renderCounts.vertexCount);
	        }
	        if (!this._indexBuffer || this._indexBuffer.getNumIndices() < this._renderCounts.indexCount) {
	          if (this._indexBuffer) this._indexBuffer.destroy();
	          this._indexBuffer = new pc__namespace.IndexBuffer(this._app.graphicsDevice, pc__namespace.INDEXFORMAT_UINT16, this._renderCounts.indexCount);
	        }
	        var currentMaterialKey = null;
	        var batchStartIndex = 0;
	        var batchIndexCount = 0;
	        var dstVertices = new pc__namespace.VertexIterator(this._vertexBuffer);
	        var dstIndices = new Uint16Array(this._indexBuffer.lock());
	        var dstIndexOffset = 0;
	        var dstVertexOffset = 0;
	        var drawOrder = this.skeleton.drawOrder;
	        var count = drawOrder.length;
	        for (var i = 0; i < count; i++) {
	          var slot = drawOrder[i];
	          if (slot.attachment && slot.material && slot.positions.length > 0 && slot.indices.length > 0) {
	            if (currentMaterialKey && currentMaterialKey !== slot.material) {
	              this.SubmitBatch(batchStartIndex, batchIndexCount, currentMaterialKey);
	              currentMaterialKey = slot.material;
	              batchStartIndex = dstIndexOffset;
	              batchIndexCount = 0;
	            }
	            currentMaterialKey = slot.material;
	            var positions = slot.positions;
	            var r = slot.vertexColor.r;
	            var g = slot.vertexColor.g;
	            var b = slot.vertexColor.b;
	            var a = slot.vertexColor.a;
	            var uvs = slot.uvs;
	            var j = void 0;
	            var posCount = positions.length / 2;
	            for (j = 0; j < posCount; j++) {
	              dstVertices.element[pc__namespace.SEMANTIC_POSITION].set(positions[j * 2], positions[j * 2 + 1]);
	              dstVertices.element[pc__namespace.SEMANTIC_NORMAL].set(0, 255, 0, 0);
	              dstVertices.element[pc__namespace.SEMANTIC_COLOR].set(r, g, b, a);
	              dstVertices.element[pc__namespace.SEMANTIC_TEXCOORD0].set(uvs[j * 2], 1.0 - uvs[j * 2 + 1]);
	              dstVertices.next();
	            }
	            var indices = slot.indices;
	            var indCount = indices.length;
	            for (j = 0; j < indCount; j++) dstIndices[dstIndexOffset + j] = indices[j] + dstVertexOffset;
	            batchIndexCount += indCount;
	            dstIndexOffset += indCount;
	            dstVertexOffset += posCount;
	          }
	        }
	        dstVertices.end();
	        this._indexBuffer.unlock();
	        this.SubmitBatch(batchStartIndex, batchIndexCount, currentMaterialKey);
	      }
	      this.addToLayers();
	    }
	  }, {
	    key: "SubmitBatch",
	    value: function SubmitBatch(indexBase, indexCount, materialKey) {
	      if (indexCount > 0) {
	        var mesh = new pc__namespace.Mesh(this._app.graphicsDevice);
	        mesh.vertexBuffer = this._vertexBuffer;
	        mesh.indexBuffer[0] = this._indexBuffer;
	        mesh.primitive[0].type = pc__namespace.PRIMITIVE_TRIANGLES;
	        mesh.primitive[0].base = indexBase;
	        mesh.primitive[0].count = indexCount;
	        mesh.primitive[0].indexed = true;
	        mesh.aabb = this._aabb;
	        this._meshes.push(mesh);
	        var mi = new pc__namespace.MeshInstance(mesh, this._materials[materialKey], this._node);
	        mi.drawOrder = this.priority + this._meshInstances.length;
	        mi.visible = !this._hidden;
	        this._meshInstances.push(mi);
	      }
	    }
	  }, {
	    key: "update",
	    value: function update(dt) {
	      if (this._hidden) return;
	      dt *= this._timeScale;
	      var i;
	      var n = this.states.length;
	      for (i = 0; i < n; i++) {
	        this.states[i].update(dt);
	      }
	      for (i = 0; i < n; i++) {
	        this.states[i].apply(this.skeleton);
	      }
	      if (this.autoUpdate) {
	        this.skeleton.updateWorldTransform();
	      }
	      this.updateSkeleton();
	      this.render();
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(p) {
	      this._position.copy(p);
	    }
	  }, {
	    key: "setTint",
	    value: function setTint(name, color) {
	      this._tint[name] = color;
	    }
	  }, {
	    key: "removeFromLayers",
	    value: function removeFromLayers() {
	      if (this._meshInstances.length) {
	        for (var i = 0; i < this._layers.length; i++) {
	          var layer = this._app.scene.layers.getLayerById(this._layers[i]);
	          if (layer) layer.removeMeshInstances(this._meshInstances);
	        }
	      }
	    }
	  }, {
	    key: "addToLayers",
	    value: function addToLayers() {
	      if (this._meshInstances.length) {
	        for (var i = 0; i < this._layers.length; i++) {
	          var layer = this._app.scene.layers.getLayerById(this._layers[i]);
	          if (layer) layer.addMeshInstances(this._meshInstances);
	        }
	      }
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return this.states[0];
	    }
	  }, {
	    key: "priority",
	    get: function get() {
	      return this._priority;
	    },
	    set: function set(value) {
	      this._priority = value;
	    }
	  }, {
	    key: "timeScale",
	    get: function get() {
	      return this._timeScale;
	    },
	    set: function set(value) {
	      this._timeScale = value;
	    }
	  }, {
	    key: "layers",
	    get: function get() {
	      return this._layers;
	    },
	    set: function set(value) {
	      this.removeFromLayers();
	      this._layers = value || [];
	      this.addToLayers();
	    }
	  }]);
	}();

	function _callSuper$1(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var SpineComponent = function (_Component) {
	  function SpineComponent(system, entity) {
	    var _this2;
	    _classCallCheck(this, SpineComponent);
	    _this2 = _callSuper$1(this, SpineComponent, [system, entity]);
	    _this2.on('set_atlasAsset', _this2.onSetAsset, _this2);
	    _this2.on('set_textureAssets', _this2.onSetAssets, _this2);
	    _this2.on('set_skeletonAsset', _this2.onSetAsset, _this2);
	    _this2.on('set_atlasData', _this2.onSetResource, _this2);
	    _this2.on('set_textures', _this2.onSetResource, _this2);
	    _this2.on('set_skeletonData', _this2.onSetResource, _this2);
	    return _this2;
	  }
	  _inherits(SpineComponent, _Component);
	  return _createClass(SpineComponent, [{
	    key: "_createSpine",
	    value: function _createSpine() {
	      if (this.data.spine) {
	        this.data.spine.destroy();
	        this.data.spine = null;
	      }
	      var textureData = {};
	      for (var i = 0, n = this.textureAssets.length; i < n; i++) {
	        var asset = this.system.app.assets.get(this.textureAssets[i]);
	        var path = asset.name ? asset.name : asset.file ? asset.file.filename : null;
	        if (!path) {
	          path = pc.path.getBasename(asset.file.url);
	        }
	        var query = path.indexOf('?');
	        if (query !== -1) path = path.substring(0, query);
	        textureData[path] = asset.resource;
	      }
	      this.data.spine = new Spine(this.system.app, this.atlasData, this.skeletonData, textureData);
	      this.state = this.data.spine.state;
	      this.states = this.data.spine.states;
	      this.skeleton = this.data.spine.skeleton;
	      this.entity.addChild(this.data.spine._node);
	    }
	  }, {
	    key: "_onAssetReady",
	    value: function _onAssetReady(_ref) {
	      var type = _ref.type,
	        resource = _ref.resource;
	      if (type === 'texture') {
	        this.textures.push(resource);
	      }
	      if (type === 'json') {
	        this.skeletonData = resource;
	      }
	      if (type === 'text') {
	        this.atlasData = resource;
	      }
	    }
	  }, {
	    key: "_onAssetAdd",
	    value: function _onAssetAdd(asset) {
	      asset.off('change', this.onAssetChanged, this);
	      asset.on('change', this.onAssetChanged, this);
	      asset.off('remove', this.onAssetRemoved, this);
	      asset.on('remove', this.onAssetRemoved, this);
	      asset.ready(this._onAssetReady, this);
	      this.system.app.assets.load(asset);
	    }
	  }, {
	    key: "onSetResource",
	    value: function onSetResource() {
	      if (this.data.atlasData && this.data.textures.length && this.data.skeletonData) {
	        this._createSpine();
	      }
	    }
	  }, {
	    key: "onSetAsset",
	    value: function onSetAsset(name, oldValue, newValue) {
	      var registry = this.system.app.assets;
	      var asset = null;
	      if (oldValue) {
	        asset = registry.get(oldValue);
	        if (asset) {
	          asset.off('change', this.onAssetChanged);
	          asset.off('remove', this.onAssetRemoved);
	        }
	      }
	      if (newValue) {
	        var id = newValue;
	        if (newValue instanceof pc.Asset) {
	          id = newValue.id;
	          this.data[name] = id;
	        }
	        asset = registry.get(id);
	        if (asset) {
	          this._onAssetAdd(asset);
	        } else {
	          registry.on("add:".concat(id));
	        }
	      }
	    }
	  }, {
	    key: "onSetAssets",
	    value: function onSetAssets(name, oldValue, newValue) {
	      var registry = this.system.app.assets;
	      var asset = null;
	      var i;
	      var n;
	      if (oldValue.length) {
	        for (i = 0, n = oldValue.length; i < n; i++) {
	          asset = registry.get(oldValue[i]);
	          if (asset) {
	            asset.off('change', this.onAssetChanged);
	            asset.off('remove', this.onAssetRemoved);
	          }
	        }
	      }
	      if (newValue && newValue.length) {
	        var ids = newValue.map(function (v) {
	          if (v instanceof pc.Asset) {
	            return v.id;
	          }
	          return v;
	        });
	        for (i = 0, n = newValue.length; i < n; i++) {
	          asset = registry.get(ids[i]);
	          if (asset) {
	            this._onAssetAdd(asset);
	          } else {
	            registry.on("add:".concat(ids[i]));
	          }
	        }
	      }
	    }
	  }, {
	    key: "onAssetChanged",
	    value: function onAssetChanged(asset, attribute, newValue, oldValue) {}
	  }, {
	    key: "onAssetRemoved",
	    value: function onAssetRemoved(asset) {}
	  }, {
	    key: "onEnable",
	    value: function onEnable() {
	      pc.Component.prototype.onEnable.call(this);
	      var spine = this.data.spine;
	      if (spine) {
	        spine.addToLayers();
	      }
	    }
	  }, {
	    key: "onDisable",
	    value: function onDisable() {
	      pc.Component.prototype.onDisable.call(this);
	      var spine = this.data.spine;
	      if (spine) {
	        spine.removeFromLayers();
	      }
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      if (this.data.spine) {
	        this.data.spine.hide();
	      }
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      if (this.data.spine) {
	        this.data.spine.show();
	      }
	    }
	  }, {
	    key: "removeComponent",
	    value: function removeComponent() {
	      var asset;
	      if (this.atlasAsset) {
	        asset = this.system.app.assets.get(this.atlasAsset);
	        if (asset) {
	          asset.off('change', this.onAssetChanged);
	          asset.off('remove', this.onAssetRemoved);
	        }
	      }
	      if (this.skeletonAsset) {
	        asset = this.system.app.assets.get(this.skeletonAsset);
	        if (asset) {
	          asset.off('change', this.onAssetChanged);
	          asset.off('remove', this.onAssetRemoved);
	        }
	      }
	      if (this.textureAssets && this.textureAssets.length) {
	        for (var i = 0; i < this.textureAssets.length; i++) {
	          asset = this.system.app.assets.get(this.textureAssets[i]);
	          if (asset) {
	            asset.off('change', this.onAssetChanged);
	            asset.off('remove', this.onAssetRemoved);
	          }
	        }
	      }
	    }
	  }]);
	}(pc.Component);

	var SpineComponentData = _createClass(function SpineComponentData() {
	  _classCallCheck(this, SpineComponentData);
	  this.enabled = true;
	  this.atlasAsset = null;
	  this.textureAssets = [];
	  this.skeletonAsset = null;
	  this.speed = 1;
	  this.spine = null;
	  this.atlasData = null;
	  this.textures = [];
	  this.skeletonData = null;
	});

	function _callSuper(_this, derived, args) {
	  function isNativeReflectConstruct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (e) {
	      return false;
	    }
	  }
	  derived = _getPrototypeOf(derived);
	  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
	}
	var SpineComponentSystem = function (_ComponentSystem) {
	  function SpineComponentSystem(app) {
	    var _this2;
	    _classCallCheck(this, SpineComponentSystem);
	    _this2 = _callSuper(this, SpineComponentSystem, [app]);
	    _this2.id = 'spine';
	    _this2.ComponentType = SpineComponent;
	    _this2.DataType = SpineComponentData;
	    _this2.schema = ['enabled', 'atlasAsset', 'textureAssets', 'skeletonAsset', 'atlasData', 'textures', 'skeletonData', 'speed', 'spine'];
	    _this2.on('beforeremove', _this2.onBeforeRemove, _this2);
	    _this2.app.systems.on('update', _this2.onUpdate, _this2);
	    return _this2;
	  }
	  _inherits(SpineComponentSystem, _ComponentSystem);
	  return _createClass(SpineComponentSystem, [{
	    key: "initializeComponentData",
	    value: function initializeComponentData(component, data, properties) {
	      properties = ['enabled', 'atlasAsset', 'textureAssets', 'skeletonAsset', 'atlasData', 'textures', 'skeletonData', 'spine'];
	      _get(_getPrototypeOf(SpineComponentSystem.prototype), "initializeComponentData", this).call(this, component, data, properties);
	    }
	  }, {
	    key: "onBeforeRemove",
	    value: function onBeforeRemove(entity, component) {
	      var data = entity.spine.data;
	      if (data.spine) {
	        data.spine.destroy();
	      }
	      entity.spine.removeComponent();
	    }
	  }, {
	    key: "onUpdate",
	    value: function onUpdate(dt) {
	      var components = this.store;
	      for (var id in components) {
	        if (components.hasOwnProperty(id)) {
	          var component = components[id];
	          var componentData = component.data;
	          if (componentData.enabled && component.entity.enabled) {
	            if (componentData.spine) {
	              componentData.spine.setPosition(component.entity.getPosition());
	              componentData.spine.update(componentData.speed * dt);
	            }
	          }
	        }
	      }
	    }
	  }]);
	}(pc.ComponentSystem);

	(function () {
	  var app = pc__namespace.Application.getApplication();
	  var system = new SpineComponentSystem(app);
	  app.systems.add(system);
	})();

	return spine;

})(pc);
