/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.2.8
* https://svgjs.dev/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: 2026-08-04T07:47:41.000Z
*/;
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) {
		__defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	}
	if (!no_symbols) {
		__defProp(target, Symbol.toStringTag, { value: "Module" });
	}
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region src/utils/methods.js
const methods = {};
const names = [];
function registerMethods(name, m) {
	if (Array.isArray(name)) {
		for (const _name of name) registerMethods(_name, m);
		return;
	}
	if (typeof name === "object") {
		for (const _name in name) registerMethods(_name, name[_name]);
		return;
	}
	addMethodNames(Object.getOwnPropertyNames(m));
	methods[name] = Object.assign(methods[name] || {}, m);
}
function getMethodsFor(name) {
	return methods[name] || {};
}
function getMethodNames() {
	return [...new Set(names)];
}
function addMethodNames(_names) {
	names.push(..._names);
}

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/fails.js
var require_fails = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(exec) {
		try {
			return !!exec();
		} catch (error) {
			return true;
		}
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-bind-native.js
var require_function_bind_native = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var fails = require_fails();
	module.exports = !fails(function() {
		var test = function() {}.bind();
		return typeof test != "function" || test.hasOwnProperty("prototype");
	});
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-uncurry-this.js
var require_function_uncurry_this = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var NATIVE_BIND = require_function_bind_native();
	var FunctionPrototype = Function.prototype;
	var call = FunctionPrototype.call;
	var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
	module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
		return function() {
			return call.apply(fn, arguments);
		};
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-is-prototype-of.js
var require_object_is_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this();
	module.exports = uncurryThis({}.isPrototypeOf);
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/global-this.js
var require_global_this = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var check = function(it) {
		return it && it.Math === Math && it;
	};
	module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || (function() {
		return this;
	})() || Function("return this")();
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-apply.js
var require_function_apply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var NATIVE_BIND = require_function_bind_native();
	var FunctionPrototype = Function.prototype;
	var apply = FunctionPrototype.apply;
	var call = FunctionPrototype.call;
	module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
		return call.apply(apply, arguments);
	});
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/classof-raw.js
var require_classof_raw = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this();
	var toString = uncurryThis({}.toString);
	var stringSlice = uncurryThis("".slice);
	module.exports = function(it) {
		return stringSlice(toString(it), 8, -1);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var classofRaw = require_classof_raw();
	var uncurryThis = require_function_uncurry_this();
	module.exports = function(fn) {
		if (classofRaw(fn) === "Function") return uncurryThis(fn);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-callable.js
var require_is_callable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var documentAll = typeof document == "object" && document.all;
	module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
		return typeof argument == "function" || argument === documentAll;
	} : function(argument) {
		return typeof argument == "function";
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/descriptors.js
var require_descriptors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var fails = require_fails();
	module.exports = !fails(function() {
		return Object.defineProperty({}, 1, { get: function() {
			return 7;
		} })[1] !== 7;
	});
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-call.js
var require_function_call = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var NATIVE_BIND = require_function_bind_native();
	var call = Function.prototype.call;
	module.exports = NATIVE_BIND ? call.bind(call) : function() {
		return call.apply(call, arguments);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = /* @__PURE__ */ __commonJSMin(((exports) => {
	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
	exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
		var descriptor = getOwnPropertyDescriptor(this, V);
		return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-property-descriptor.js
var require_create_property_descriptor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(bitmap, value) {
		return {
			enumerable: !(bitmap & 1),
			configurable: !(bitmap & 2),
			writable: !(bitmap & 4),
			value
		};
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/indexed-object.js
var require_indexed_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this();
	var fails = require_fails();
	var classof = require_classof_raw();
	var $Object = Object;
	var split = uncurryThis("".split);
	module.exports = fails(function() {
		return !$Object("z").propertyIsEnumerable(0);
	}) ? function(it) {
		return classof(it) === "String" ? split(it, "") : $Object(it);
	} : $Object;
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-null-or-undefined.js
var require_is_null_or_undefined = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(it) {
		return it === null || it === void 0;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/require-object-coercible.js
var require_require_object_coercible = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isNullOrUndefined = require_is_null_or_undefined();
	var $TypeError = TypeError;
	module.exports = function(it) {
		if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
		return it;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-indexed-object.js
var require_to_indexed_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var IndexedObject = require_indexed_object();
	var requireObjectCoercible = require_require_object_coercible();
	module.exports = function(it) {
		return IndexedObject(requireObjectCoercible(it));
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-object.js
var require_is_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isCallable = require_is_callable();
	module.exports = function(it) {
		return typeof it == "object" ? it !== null : isCallable(it);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/path.js
var require_path = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-built-in.js
var require_get_built_in = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var path = require_path();
	var globalThis = require_global_this();
	var isCallable = require_is_callable();
	var aFunction = function(variable) {
		return isCallable(variable) ? variable : void 0;
	};
	module.exports = function(namespace, method) {
		return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis[namespace]) : path[namespace] && path[namespace][method] || globalThis[namespace] && globalThis[namespace][method];
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/environment-user-agent.js
var require_environment_user_agent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var navigator = require_global_this().navigator;
	var userAgent = navigator && navigator.userAgent;
	module.exports = userAgent ? String(userAgent) : "";
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/environment-v8-version.js
var require_environment_v8_version = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var userAgent = require_environment_user_agent();
	var process = globalThis.process;
	var Deno = globalThis.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match;
	var version;
	if (v8) {
		match = v8.split(".");
		version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}
	if (!version && userAgent) {
		match = userAgent.match(/Edge\/(\d+)/);
		if (!match || match[1] >= 74) {
			match = userAgent.match(/Chrome\/(\d+)/);
			if (match) version = +match[1];
		}
	}
	module.exports = version;
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var V8_VERSION = require_environment_v8_version();
	var fails = require_fails();
	var $String = require_global_this().String;
	module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
		var symbol = Symbol("symbol detection");
		return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var NATIVE_SYMBOL = require_symbol_constructor_detection();
	module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-symbol.js
var require_is_symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getBuiltIn = require_get_built_in();
	var isCallable = require_is_callable();
	var isPrototypeOf = require_object_is_prototype_of();
	var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
	var $Object = Object;
	module.exports = USE_SYMBOL_AS_UID ? function(it) {
		return typeof it == "symbol";
	} : function(it) {
		var $Symbol = getBuiltIn("Symbol");
		return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/try-to-string.js
var require_try_to_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var $String = String;
	module.exports = function(argument) {
		try {
			return $String(argument);
		} catch (error) {
			return "Object";
		}
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/a-callable.js
var require_a_callable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isCallable = require_is_callable();
	var tryToString = require_try_to_string();
	var $TypeError = TypeError;
	module.exports = function(argument) {
		if (isCallable(argument)) return argument;
		throw new $TypeError(tryToString(argument) + " is not a function");
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-method.js
var require_get_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var aCallable = require_a_callable();
	var isNullOrUndefined = require_is_null_or_undefined();
	module.exports = function(V, P) {
		var func = V[P];
		return isNullOrUndefined(func) ? void 0 : aCallable(func);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var call = require_function_call();
	var isCallable = require_is_callable();
	var isObject = require_is_object();
	var $TypeError = TypeError;
	module.exports = function(input, pref) {
		var fn, val;
		if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
		if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
		if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
		throw new $TypeError("Can't convert object to primitive value");
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-pure.js
var require_is_pure = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = true;
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/define-global-property.js
var require_define_global_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var defineProperty = Object.defineProperty;
	module.exports = function(key, value) {
		try {
			defineProperty(globalThis, key, {
				value,
				configurable: true,
				writable: true
			});
		} catch (error) {
			globalThis[key] = value;
		}
		return value;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/shared-store.js
var require_shared_store = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var IS_PURE = require_is_pure();
	var globalThis = require_global_this();
	var defineGlobalProperty = require_define_global_property();
	var SHARED = "__core-js_shared__";
	var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
	(store.versions || (store.versions = [])).push({
		version: "3.49.0",
		mode: IS_PURE ? "pure" : "global",
		copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
		license: "https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",
		source: "https://github.com/zloirock/core-js"
	});
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/shared.js
var require_shared = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var store = require_shared_store();
	module.exports = function(key, value) {
		return store[key] || (store[key] = value || {});
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-object.js
var require_to_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var requireObjectCoercible = require_require_object_coercible();
	var $Object = Object;
	module.exports = function(argument) {
		return $Object(requireObjectCoercible(argument));
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/has-own-property.js
var require_has_own_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this();
	var toObject = require_to_object();
	var hasOwnProperty = uncurryThis({}.hasOwnProperty);
	module.exports = Object.hasOwn || function hasOwn(it, key) {
		return hasOwnProperty(toObject(it), key);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/uid.js
var require_uid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this();
	var id = 0;
	var postfix = Math.random();
	var toString = uncurryThis(1.1.toString);
	module.exports = function(key) {
		return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/well-known-symbol.js
var require_well_known_symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var shared = require_shared();
	var hasOwn = require_has_own_property();
	var uid = require_uid();
	var NATIVE_SYMBOL = require_symbol_constructor_detection();
	var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
	var Symbol = globalThis.Symbol;
	var WellKnownSymbolsStore = shared("wks");
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
	module.exports = function(name) {
		if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
		return WellKnownSymbolsStore[name];
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-primitive.js
var require_to_primitive = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var call = require_function_call();
	var isObject = require_is_object();
	var isSymbol = require_is_symbol();
	var getMethod = require_get_method();
	var ordinaryToPrimitive = require_ordinary_to_primitive();
	var wellKnownSymbol = require_well_known_symbol();
	var $TypeError = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
	module.exports = function(input, pref) {
		if (!isObject(input) || isSymbol(input)) return input;
		var exoticToPrim = getMethod(input, TO_PRIMITIVE);
		var result;
		if (exoticToPrim) {
			if (pref === void 0) pref = "default";
			result = call(exoticToPrim, input, pref);
			if (!isObject(result) || isSymbol(result)) return result;
			throw new $TypeError("Can't convert object to primitive value");
		}
		if (pref === void 0) pref = "number";
		return ordinaryToPrimitive(input, pref);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-property-key.js
var require_to_property_key = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toPrimitive = require_to_primitive();
	var isSymbol = require_is_symbol();
	module.exports = function(argument) {
		var key = toPrimitive(argument, "string");
		return isSymbol(key) ? key : key + "";
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/document-create-element.js
var require_document_create_element = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var isObject = require_is_object();
	var document = globalThis.document;
	var EXISTS = isObject(document) && isObject(document.createElement);
	module.exports = function(it) {
		return EXISTS ? document.createElement(it) : {};
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/ie8-dom-define.js
var require_ie8_dom_define = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DESCRIPTORS = require_descriptors();
	var fails = require_fails();
	var createElement = require_document_create_element();
	module.exports = !DESCRIPTORS && !fails(function() {
		return Object.defineProperty(createElement("div"), "a", { get: function() {
			return 7;
		} }).a !== 7;
	});
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = /* @__PURE__ */ __commonJSMin(((exports) => {
	var DESCRIPTORS = require_descriptors();
	var call = require_function_call();
	var propertyIsEnumerableModule = require_object_property_is_enumerable();
	var createPropertyDescriptor = require_create_property_descriptor();
	var toIndexedObject = require_to_indexed_object();
	var toPropertyKey = require_to_property_key();
	var hasOwn = require_has_own_property();
	var IE8_DOM_DEFINE = require_ie8_dom_define();
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
		O = toIndexedObject(O);
		P = toPropertyKey(P);
		if (IE8_DOM_DEFINE) try {
			return $getOwnPropertyDescriptor(O, P);
		} catch (error) {}
		if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-forced.js
var require_is_forced = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var fails = require_fails();
	var isCallable = require_is_callable();
	var replacement = /#|\.prototype\./;
	var isForced = function(feature, detection) {
		var value = data[normalize(feature)];
		return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
	};
	var normalize = isForced.normalize = function(string) {
		return String(string).replace(replacement, ".").toLowerCase();
	};
	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = "N";
	var POLYFILL = isForced.POLYFILL = "P";
	module.exports = isForced;
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/function-bind-context.js
var require_function_bind_context = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var uncurryThis = require_function_uncurry_this_clause();
	var aCallable = require_a_callable();
	var NATIVE_BIND = require_function_bind_native();
	var bind = uncurryThis(uncurryThis.bind);
	module.exports = function(fn, that) {
		aCallable(fn);
		return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
			return fn.apply(that, arguments);
		};
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DESCRIPTORS = require_descriptors();
	var fails = require_fails();
	module.exports = DESCRIPTORS && fails(function() {
		return Object.defineProperty(function() {}, "prototype", {
			value: 42,
			writable: false
		}).prototype !== 42;
	});
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/an-object.js
var require_an_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_is_object();
	var $String = String;
	var $TypeError = TypeError;
	module.exports = function(argument) {
		if (isObject(argument)) return argument;
		throw new $TypeError($String(argument) + " is not an object");
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/object-define-property.js
var require_object_define_property = /* @__PURE__ */ __commonJSMin(((exports) => {
	var DESCRIPTORS = require_descriptors();
	var IE8_DOM_DEFINE = require_ie8_dom_define();
	var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
	var anObject = require_an_object();
	var toPropertyKey = require_to_property_key();
	var $TypeError = TypeError;
	var $defineProperty = Object.defineProperty;
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = "enumerable";
	var CONFIGURABLE = "configurable";
	var WRITABLE = "writable";
	exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
		anObject(O);
		P = toPropertyKey(P);
		anObject(Attributes);
		if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
			var current = $getOwnPropertyDescriptor(O, P);
			if (current && current[WRITABLE]) {
				O[P] = Attributes.value;
				Attributes = {
					configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
					enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
					writable: false
				};
			}
		}
		return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
		anObject(O);
		P = toPropertyKey(P);
		anObject(Attributes);
		if (IE8_DOM_DEFINE) try {
			return $defineProperty(O, P, Attributes);
		} catch (error) {}
		if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
		if ("value" in Attributes) O[P] = Attributes.value;
		return O;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DESCRIPTORS = require_descriptors();
	var definePropertyModule = require_object_define_property();
	var createPropertyDescriptor = require_create_property_descriptor();
	module.exports = DESCRIPTORS ? function(object, key, value) {
		return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
	} : function(object, key, value) {
		object[key] = value;
		return object;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/export.js
var require_export = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var apply = require_function_apply();
	var uncurryThis = require_function_uncurry_this_clause();
	var isCallable = require_is_callable();
	var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
	var isForced = require_is_forced();
	var path = require_path();
	var bind = require_function_bind_context();
	var createNonEnumerableProperty = require_create_non_enumerable_property();
	var hasOwn = require_has_own_property();
	require_shared_store();
	var wrapConstructor = function(NativeConstructor) {
		var Wrapper = function(a, b, c) {
			if (this instanceof Wrapper) {
				switch (arguments.length) {
					case 0: return new NativeConstructor();
					case 1: return new NativeConstructor(a);
					case 2: return new NativeConstructor(a, b);
				}
				return new NativeConstructor(a, b, c);
			}
			return apply(NativeConstructor, this, arguments);
		};
		Wrapper.prototype = NativeConstructor.prototype;
		return Wrapper;
	};
	module.exports = function(options, source) {
		var TARGET = options.target;
		var GLOBAL = options.global;
		var STATIC = options.stat;
		var PROTO = options.proto;
		var nativeSource = GLOBAL ? globalThis : STATIC ? globalThis[TARGET] : globalThis[TARGET] && globalThis[TARGET].prototype;
		var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
		var targetPrototype = target.prototype;
		var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
		var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
		for (key in source) {
			FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
			USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
			targetProperty = target[key];
			if (USE_NATIVE) if (options.dontCallGetSet) {
				descriptor = getOwnPropertyDescriptor(nativeSource, key);
				nativeProperty = descriptor && descriptor.value;
			} else nativeProperty = nativeSource[key];
			sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
			if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;
			if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis);
			else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
			else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
			else resultProperty = sourceProperty;
			if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(resultProperty, "sham", true);
			createNonEnumerableProperty(target, key, resultProperty);
			if (PROTO) {
				VIRTUAL_PROTOTYPE = TARGET + "Prototype";
				if (!hasOwn(path, VIRTUAL_PROTOTYPE)) createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
				createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
				if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) createNonEnumerableProperty(targetPrototype, key, sourceProperty);
			}
		}
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/math-trunc.js
var require_math_trunc = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = Math.trunc || function trunc(x) {
		var n = +x;
		return (n > 0 ? floor : ceil)(n);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var trunc = require_math_trunc();
	module.exports = function(argument) {
		var number = +argument;
		return number !== number || number === 0 ? 0 : trunc(number);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-absolute-index.js
var require_to_absolute_index = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toIntegerOrInfinity = require_to_integer_or_infinity();
	var max = Math.max;
	var min = Math.min;
	module.exports = function(index, length) {
		var integer = toIntegerOrInfinity(index);
		return integer < 0 ? max(integer + length, 0) : min(integer, length);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-length.js
var require_to_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toIntegerOrInfinity = require_to_integer_or_infinity();
	var min = Math.min;
	module.exports = function(argument) {
		var len = toIntegerOrInfinity(argument);
		return len > 0 ? min(len, 9007199254740991) : 0;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/length-of-array-like.js
var require_length_of_array_like = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toLength = require_to_length();
	module.exports = function(obj) {
		return toLength(obj.length);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/array-includes.js
var require_array_includes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toIndexedObject = require_to_indexed_object();
	var toAbsoluteIndex = require_to_absolute_index();
	var lengthOfArrayLike = require_length_of_array_like();
	var createMethod = function(IS_INCLUDES) {
		return function($this, el, fromIndex) {
			var O = toIndexedObject($this);
			var length = lengthOfArrayLike(O);
			if (length === 0) return !IS_INCLUDES && -1;
			var index = toAbsoluteIndex(fromIndex, length);
			var value;
			if (IS_INCLUDES && el !== el) while (length > index) {
				value = O[index++];
				if (value !== value) return true;
			}
			else for (; length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
			return !IS_INCLUDES && -1;
		};
	};
	module.exports = {
		includes: createMethod(true),
		indexOf: createMethod(false)
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/add-to-unscopables.js
var require_add_to_unscopables = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function() {};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/es.array.includes.js
var require_es_array_includes = /* @__PURE__ */ __commonJSMin((() => {
	var $ = require_export();
	var $includes = require_array_includes().includes;
	var fails = require_fails();
	var addToUnscopables = require_add_to_unscopables();
	var BROKEN_ON_SPARSE = fails(function() {
		return !Array(1).includes();
	});
	var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function() {
		return [, 1].includes(void 0, 1);
	});
	$({
		target: "Array",
		proto: true,
		forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX
	}, { includes: function includes(el) {
		return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
	} });
	addToUnscopables("includes");
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/get-built-in-prototype-method.js
var require_get_built_in_prototype_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var globalThis = require_global_this();
	var path = require_path();
	module.exports = function(CONSTRUCTOR, METHOD) {
		var Namespace = path[CONSTRUCTOR + "Prototype"];
		var pureMethod = Namespace && Namespace[METHOD];
		if (pureMethod) return pureMethod;
		var NativeConstructor = globalThis[CONSTRUCTOR];
		var NativePrototype = NativeConstructor && NativeConstructor.prototype;
		return NativePrototype && NativePrototype[METHOD];
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/es/array/virtual/includes.js
var require_includes$3 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_array_includes();
	var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
	module.exports = getBuiltInPrototypeMethod("Array", "includes");
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/is-regexp.js
var require_is_regexp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_is_object();
	var classof = require_classof_raw();
	var MATCH = require_well_known_symbol()("match");
	module.exports = function(it) {
		var isRegExp;
		return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) === "RegExp");
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/not-a-regexp.js
var require_not_a_regexp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isRegExp = require_is_regexp();
	var $TypeError = TypeError;
	module.exports = function(it) {
		if (isRegExp(it)) throw new $TypeError("The method doesn't accept regular expressions");
		return it;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-string-tag-support.js
var require_to_string_tag_support = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
	var test = {};
	test[TO_STRING_TAG] = "z";
	module.exports = String(test) === "[object z]";
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/classof.js
var require_classof = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
	var isCallable = require_is_callable();
	var classofRaw = require_classof_raw();
	var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
	var $Object = Object;
	var CORRECT_ARGUMENTS = classofRaw(function() {
		return arguments;
	}()) === "Arguments";
	var tryGet = function(it, key) {
		try {
			return it[key];
		} catch (error) {}
	};
	module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
		var O, tag, result;
		return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/to-string.js
var require_to_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var classof = require_classof();
	var $String = String;
	module.exports = function(argument) {
		if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
		return $String(argument);
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/internals/correct-is-regexp-logic.js
var require_correct_is_regexp_logic = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MATCH = require_well_known_symbol()("match");
	module.exports = function(METHOD_NAME) {
		var regexp = /./;
		try {
			"/./"[METHOD_NAME](regexp);
		} catch (error1) {
			try {
				regexp[MATCH] = false;
				return "/./"[METHOD_NAME](regexp);
			} catch (error2) {}
		}
		return false;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/modules/es.string.includes.js
var require_es_string_includes = /* @__PURE__ */ __commonJSMin((() => {
	var $ = require_export();
	var uncurryThis = require_function_uncurry_this();
	var notARegExp = require_not_a_regexp();
	var requireObjectCoercible = require_require_object_coercible();
	var toString = require_to_string();
	var correctIsRegExpLogic = require_correct_is_regexp_logic();
	var stringIndexOf = uncurryThis("".indexOf);
	$({
		target: "String",
		proto: true,
		forced: !correctIsRegExpLogic("includes")
	}, { includes: function includes(searchString) {
		return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : void 0);
	} });
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/es/string/virtual/includes.js
var require_includes$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_es_string_includes();
	var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
	module.exports = getBuiltInPrototypeMethod("String", "includes");
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/es/instance/includes.js
var require_includes$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isPrototypeOf = require_object_is_prototype_of();
	var arrayMethod = require_includes$3();
	var stringMethod = require_includes$2();
	var ArrayPrototype = Array.prototype;
	var StringPrototype = String.prototype;
	module.exports = function(it) {
		var own = it.includes;
		if (it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.includes) return arrayMethod;
		if (typeof it == "string" || it === StringPrototype || isPrototypeOf(StringPrototype, it) && own === StringPrototype.includes) return stringMethod;
		return own;
	};
}));

//#endregion
//#region node_modules/.pnpm/core-js-pure@3.49.0/node_modules/core-js-pure/stable/instance/includes.js
var require_includes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var parent = require_includes$1();
	module.exports = parent;
}));

//#endregion
//#region src/utils/utils.js
var utils_exports = /* @__PURE__ */ __exportAll({
	capitalize: () => capitalize,
	degrees: () => degrees,
	filter: () => filter,
	getOrigin: () => getOrigin,
	isDescriptive: () => isDescriptive,
	map: () => map,
	proportionalSize: () => proportionalSize,
	radians: () => radians,
	unCamelCase: () => unCamelCase,
	writeDataToDom: () => writeDataToDom
});
var import_includes = /* @__PURE__ */ __toESM(require_includes(), 1);
function map(array, block) {
	let i;
	const il = array.length;
	const result = [];
	for (i = 0; i < il; i++) result.push(block(array[i]));
	return result;
}
function filter(array, block) {
	let i;
	const il = array.length;
	const result = [];
	for (i = 0; i < il; i++) if (block(array[i])) result.push(array[i]);
	return result;
}
function radians(d) {
	return d % 360 * Math.PI / 180;
}
function degrees(r) {
	return r * 180 / Math.PI % 360;
}
function unCamelCase(s) {
	return s.replace(/([A-Z])/g, function(m, g) {
		return "-" + g.toLowerCase();
	});
}
function capitalize(s) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}
function proportionalSize(element, width, height, box) {
	if (width == null || height == null) {
		box = box || element.bbox();
		if (width == null) width = box.width / box.height * height;
		else if (height == null) height = box.height / box.width * width;
	}
	return {
		width,
		height
	};
}
/**
* This function adds support for string origins.
* It searches for an origin in o.origin o.ox and o.originX.
* This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/
function getOrigin(o, element) {
	const origin = o.origin;
	let ox = o.ox != null ? o.ox : o.originX != null ? o.originX : "center";
	let oy = o.oy != null ? o.oy : o.originY != null ? o.originY : "center";
	if (origin != null) [ox, oy] = Array.isArray(origin) ? origin : typeof origin === "object" ? [origin.x, origin.y] : [origin, origin];
	const condX = typeof ox === "string";
	const condY = typeof oy === "string";
	if (condX || condY) {
		const { height, width, x, y } = element.bbox();
		if (condX) ox = (0, import_includes.default)(ox).call(ox, "left") ? x : (0, import_includes.default)(ox).call(ox, "right") ? x + width : x + width / 2;
		if (condY) oy = (0, import_includes.default)(oy).call(oy, "top") ? y : (0, import_includes.default)(oy).call(oy, "bottom") ? y + height : y + height / 2;
	}
	return [ox, oy];
}
const descriptiveElements = /* @__PURE__ */ new Set([
	"desc",
	"metadata",
	"title"
]);
const isDescriptive = (element) => descriptiveElements.has(element.nodeName);
const writeDataToDom = (element, data, defaults = {}) => {
	const cloned = { ...data };
	for (const key in cloned) if (cloned[key].valueOf() === defaults[key]) delete cloned[key];
	if (Object.keys(cloned).length) element.node.setAttribute("data-svgjs", JSON.stringify(cloned));
	else {
		element.node.removeAttribute("data-svgjs");
		element.node.removeAttribute("svgjs:data");
	}
};

//#endregion
//#region src/modules/core/namespaces.js
var namespaces_exports = /* @__PURE__ */ __exportAll({
	html: () => html,
	svg: () => svg,
	xlink: () => xlink,
	xmlns: () => xmlns
});
const svg = "http://www.w3.org/2000/svg";
const html = "http://www.w3.org/1999/xhtml";
const xmlns = "http://www.w3.org/2000/xmlns/";
const xlink = "http://www.w3.org/1999/xlink";

//#endregion
//#region src/utils/window.js
const globals = {
	window: typeof window === "undefined" ? null : window,
	document: typeof document === "undefined" ? null : document
};
function registerWindow(win = null, doc = null) {
	globals.window = win;
	globals.document = doc;
}
function withWindow(win, fn) {
	const oldWindow = globals.window;
	const oldDocument = globals.document;
	registerWindow(win, win.document);
	try {
		return fn(win, win.document);
	} finally {
		registerWindow(oldWindow, oldDocument);
	}
}
function getWindow() {
	return globals.window;
}

//#endregion
//#region src/types/Base.js
var Base = class {};

//#endregion
//#region src/utils/adopter.js
const elements = {};
const root = "___SYMBOL___ROOT___";
function create(name, ns = svg) {
	return globals.document.createElementNS(ns, name);
}
function makeInstance(element, isHTML = false) {
	if (element instanceof Base) return element;
	if (typeof element === "object") return adopter(element);
	if (element == null) return new elements[root]();
	if (typeof element === "string" && element.trim().charAt(0) !== "<") return adopter(globals.document.querySelector(element));
	const wrapper = isHTML ? globals.document.createElement("div") : create("svg");
	wrapper.innerHTML = element.trim();
	element = adopter(wrapper.firstElementChild);
	wrapper.removeChild(wrapper.firstElementChild);
	return element;
}
function nodeOrNew(name, node) {
	return node && (node instanceof globals.window.Node || node.ownerDocument && node instanceof node.ownerDocument.defaultView.Node) ? node : create(name);
}
function adopt(node) {
	if (!node) return null;
	if (node.instance instanceof Base) return node.instance;
	if (node.nodeName === "#document-fragment") return new elements.Fragment(node);
	let className = capitalize(node.nodeName || "Dom");
	if (className === "LinearGradient" || className === "RadialGradient") className = "Gradient";
	else if (!elements[className]) className = "Dom";
	return new elements[className](node);
}
let adopter = adopt;
function mockAdopt(mock = adopt) {
	adopter = mock;
}
function register(element, name = element.name, asRoot = false) {
	elements[name] = element;
	if (asRoot) elements[root] = element;
	addMethodNames(Object.getOwnPropertyNames(element.prototype));
	return element;
}
function getClass(name) {
	return elements[name];
}
let did = 1e3;
function eid(name) {
	return "Svgjs" + capitalize(name) + did++;
}
function assignNewId(node) {
	for (let i = node.children.length - 1; i >= 0; i--) assignNewId(node.children[i]);
	if (node.id) {
		node.id = eid(node.nodeName);
		return node;
	}
	return node;
}
function extend(modules, methods) {
	let key, i;
	modules = Array.isArray(modules) ? modules : [modules];
	for (i = modules.length - 1; i >= 0; i--) for (key in methods) modules[i].prototype[key] = methods[key];
}
function wrapWithAttrCheck(fn) {
	return function(...args) {
		const o = args[args.length - 1];
		if (o && o.constructor === Object && !(o instanceof Array)) return fn.apply(this, args.slice(0, -1)).attr(o);
		else return fn.apply(this, args);
	};
}

//#endregion
//#region src/modules/optional/arrange.js
function siblings() {
	return this.parent().children();
}
function position() {
	return this.parent().index(this);
}
function next() {
	return this.siblings()[this.position() + 1];
}
function prev() {
	return this.siblings()[this.position() - 1];
}
function forward() {
	const i = this.position();
	this.parent().add(this.remove(), i + 1);
	return this;
}
function backward() {
	const i = this.position();
	this.parent().add(this.remove(), i ? i - 1 : 0);
	return this;
}
function front() {
	this.parent().add(this.remove());
	return this;
}
function back() {
	this.parent().add(this.remove(), 0);
	return this;
}
function before(element) {
	element = makeInstance(element);
	element.remove();
	const i = this.position();
	this.parent().add(element, i);
	return this;
}
function after(element) {
	element = makeInstance(element);
	element.remove();
	const i = this.position();
	this.parent().add(element, i + 1);
	return this;
}
function insertBefore(element) {
	element = makeInstance(element);
	element.before(this);
	return this;
}
function insertAfter(element) {
	element = makeInstance(element);
	element.after(this);
	return this;
}
registerMethods("Dom", {
	siblings,
	position,
	next,
	prev,
	forward,
	backward,
	front,
	back,
	before,
	after,
	insertBefore,
	insertAfter
});

//#endregion
//#region src/modules/core/regex.js
var regex_exports = /* @__PURE__ */ __exportAll({
	delimiter: () => delimiter,
	hex: () => hex,
	isBlank: () => isBlank,
	isHex: () => isHex,
	isImage: () => isImage,
	isNumber: () => isNumber,
	isPathLetter: () => isPathLetter,
	isRgb: () => isRgb,
	numberAndUnit: () => numberAndUnit,
	reference: () => reference,
	rgb: () => rgb,
	transforms: () => transforms,
	whitespace: () => whitespace
});
const numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i;
const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
const rgb = /rgb\((\d+),(\d+),(\d+)\)/;
const reference = /^(#[^\s]+)$/;
const transforms = /\)\s*,?\s*/;
const whitespace = /\s/g;
const isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i;
const isRgb = /^rgb\(/;
const isBlank = /^(\s+)?$/;
const isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
const isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i;
const delimiter = /[\s,]+/;
const isPathLetter = /[MLHVCSQTAZ]/i;

//#endregion
//#region src/modules/optional/class.js
function classes() {
	const attr = this.attr("class");
	return attr == null ? [] : attr.trim().split(delimiter);
}
function hasClass(name) {
	return this.classes().indexOf(name) !== -1;
}
function addClass(name) {
	if (!this.hasClass(name)) {
		const array = this.classes();
		array.push(name);
		this.attr("class", array.join(" "));
	}
	return this;
}
function removeClass(name) {
	if (this.hasClass(name)) this.attr("class", this.classes().filter(function(c) {
		return c !== name;
	}).join(" "));
	return this;
}
function toggleClass(name) {
	return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods("Dom", {
	classes,
	hasClass,
	addClass,
	removeClass,
	toggleClass
});

//#endregion
//#region src/modules/optional/css.js
const cssName = (name) => name.startsWith("--") ? name : unCamelCase(name);
function css(style, val) {
	const ret = {};
	if (arguments.length === 0) {
		const declaration = this.node.style;
		for (let i = 0; i < declaration.length; i++) {
			const name = declaration.item(i);
			const value = declaration.getPropertyValue(name);
			const priority = declaration.getPropertyPriority(name);
			ret[name] = priority ? `${value} !${priority}` : value;
		}
		return ret;
	}
	if (arguments.length < 2) {
		if (Array.isArray(style)) {
			for (const name of style) {
				const cased = cssName(name);
				ret[name] = this.node.style.getPropertyValue(cased);
			}
			return ret;
		}
		if (typeof style === "string") return this.node.style.getPropertyValue(cssName(style));
		if (typeof style === "object") for (const name in style) this.node.style.setProperty(cssName(name), style[name] == null || isBlank.test(style[name]) ? "" : style[name]);
	}
	if (arguments.length === 2) this.node.style.setProperty(cssName(style), val == null || isBlank.test(val) ? "" : val);
	return this;
}
function show() {
	return this.css("display", "");
}
function hide() {
	return this.css("display", "none");
}
function visible() {
	return this.css("display") !== "none";
}
registerMethods("Dom", {
	css,
	show,
	hide,
	visible
});

//#endregion
//#region src/modules/optional/data.js
function data(a, v, r) {
	if (a == null) return this.data(map(filter(this.node.attributes, (el) => el.nodeName.indexOf("data-") === 0), (el) => el.nodeName.slice(5)));
	else if (a instanceof Array) {
		const data = {};
		for (const key of a) data[key] = this.data(key);
		return data;
	} else if (typeof a === "object") for (v in a) this.data(v, a[v]);
	else if (arguments.length < 2) try {
		return JSON.parse(this.attr("data-" + a));
	} catch (e) {
		return this.attr("data-" + a);
	}
	else this.attr("data-" + a, v === null ? null : r === true || typeof v === "string" || typeof v === "number" ? v : JSON.stringify(v));
	return this;
}
registerMethods("Dom", { data });

//#endregion
//#region src/modules/optional/memory.js
function remember(k, v) {
	if (typeof arguments[0] === "object") for (const key in k) this.remember(key, k[key]);
	else if (arguments.length === 1) return this.memory()[k];
	else this.memory()[k] = v;
	return this;
}
function forget() {
	if (arguments.length === 0) this._memory = {};
	else for (let i = arguments.length - 1; i >= 0; i--) delete this.memory()[arguments[i]];
	return this;
}
function memory() {
	return this._memory = this._memory || {};
}
registerMethods("Dom", {
	remember,
	forget,
	memory
});

//#endregion
//#region src/types/Color.js
function sixDigitHex(hex) {
	return hex.length === 4 ? [
		"#",
		hex.substring(1, 2),
		hex.substring(1, 2),
		hex.substring(2, 3),
		hex.substring(2, 3),
		hex.substring(3, 4),
		hex.substring(3, 4)
	].join("") : hex;
}
function componentHex(component) {
	const hex = Math.max(0, Math.min(255, Math.round(component))).toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}
function is(object, space) {
	for (let i = space.length; i--;) if (object[space[i]] == null) return false;
	return true;
}
function getParameters(a, b) {
	const params = is(a, "rgb") ? {
		_a: a.r,
		_b: a.g,
		_c: a.b,
		_d: 0,
		space: "rgb"
	} : is(a, "xyz") ? {
		_a: a.x,
		_b: a.y,
		_c: a.z,
		_d: 0,
		space: "xyz"
	} : is(a, "hsl") ? {
		_a: a.h,
		_b: a.s,
		_c: a.l,
		_d: 0,
		space: "hsl"
	} : is(a, "lab") ? {
		_a: a.l,
		_b: a.a,
		_c: a.b,
		_d: 0,
		space: "lab"
	} : is(a, "lch") ? {
		_a: a.l,
		_b: a.c,
		_c: a.h,
		_d: 0,
		space: "lch"
	} : is(a, "cmyk") ? {
		_a: a.c,
		_b: a.m,
		_c: a.y,
		_d: a.k,
		space: "cmyk"
	} : {
		_a: 0,
		_b: 0,
		_c: 0,
		space: "rgb"
	};
	params.space = b || params.space;
	return params;
}
function cieSpace(space) {
	if (space === "lab" || space === "xyz" || space === "lch") return true;
	else return false;
}
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
var Color = class Color {
	constructor(...inputs) {
		this.init(...inputs);
	}
	static isColor(color) {
		return color && (color instanceof Color || this.isRgb(color) || this.test(color));
	}
	static isRgb(color) {
		return color && typeof color.r === "number" && typeof color.g === "number" && typeof color.b === "number";
	}
	static random(mode = "vibrant", t) {
		const { random, round, sin, PI: pi } = Math;
		if (mode === "vibrant") {
			const l = 24 * random() + 57;
			const c = 38 * random() + 45;
			const h = 360 * random();
			return new Color(l, c, h, "lch");
		} else if (mode === "sine") {
			t = t == null ? random() : t;
			const r = round(80 * sin(2 * pi * t / .5 + .01) + 150);
			const g = round(50 * sin(2 * pi * t / .5 + 4.6) + 200);
			const b = round(100 * sin(2 * pi * t / .5 + 2.3) + 150);
			return new Color(r, g, b);
		} else if (mode === "pastel") {
			const l = 8 * random() + 86;
			const c = 17 * random() + 9;
			const h = 360 * random();
			return new Color(l, c, h, "lch");
		} else if (mode === "dark") {
			const l = 10 + 10 * random();
			const c = 50 * random() + 86;
			const h = 360 * random();
			return new Color(l, c, h, "lch");
		} else if (mode === "rgb") {
			const r = 255 * random();
			const g = 255 * random();
			const b = 255 * random();
			return new Color(r, g, b);
		} else if (mode === "lab") {
			const l = 100 * random();
			const a = 256 * random() - 128;
			const b = 256 * random() - 128;
			return new Color(l, a, b, "lab");
		} else if (mode === "grey") {
			const grey = 255 * random();
			return new Color(grey, grey, grey);
		} else throw new Error("Unsupported random color mode");
	}
	static test(color) {
		return typeof color === "string" && (isHex.test(color) || isRgb.test(color));
	}
	cmyk() {
		const { _a, _b, _c } = this.rgb();
		const [r, g, b] = [
			_a,
			_b,
			_c
		].map((v) => v / 255);
		const k = Math.min(1 - r, 1 - g, 1 - b);
		if (k === 1) return new Color(0, 0, 0, 1, "cmyk");
		const c = (1 - r - k) / (1 - k);
		const m = (1 - g - k) / (1 - k);
		const y = (1 - b - k) / (1 - k);
		return new Color(c, m, y, k, "cmyk");
	}
	hsl() {
		const { _a, _b, _c } = this.rgb();
		const [r, g, b] = [
			_a,
			_b,
			_c
		].map((v) => v / 255);
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		const l = (max + min) / 2;
		const isGrey = max === min;
		const delta = max - min;
		const s = isGrey ? 0 : l > .5 ? delta / (2 - max - min) : delta / (max + min);
		const h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0;
		return new Color(360 * h, 100 * s, 100 * l, "hsl");
	}
	init(a = 0, b = 0, c = 0, d = 0, space = "rgb") {
		a = !a ? 0 : a;
		if (this.space) for (const component in this.space) delete this[this.space[component]];
		if (typeof a === "number") {
			space = typeof d === "string" ? d : space;
			d = typeof d === "string" ? 0 : d;
			Object.assign(this, {
				_a: a,
				_b: b,
				_c: c,
				_d: d,
				space
			});
		} else if (a instanceof Array) {
			this.space = b || (typeof a[3] === "string" ? a[3] : a[4]) || "rgb";
			Object.assign(this, {
				_a: a[0],
				_b: a[1],
				_c: a[2],
				_d: a[3] || 0
			});
		} else if (a instanceof Object) {
			const values = getParameters(a, b);
			Object.assign(this, values);
		} else if (typeof a === "string") if (isRgb.test(a)) {
			const noWhitespace = a.replace(whitespace, "");
			const [_a, _b, _c] = rgb.exec(noWhitespace).slice(1, 4).map((v) => parseInt(v));
			Object.assign(this, {
				_a,
				_b,
				_c,
				_d: 0,
				space: "rgb"
			});
		} else if (isHex.test(a)) {
			const hexParse = (v) => parseInt(v, 16);
			const [, _a, _b, _c] = hex.exec(sixDigitHex(a)).map(hexParse);
			Object.assign(this, {
				_a,
				_b,
				_c,
				_d: 0,
				space: "rgb"
			});
		} else throw Error("Unsupported string format, can't construct Color");
		const { _a, _b, _c, _d } = this;
		const components = this.space === "rgb" ? {
			r: _a,
			g: _b,
			b: _c
		} : this.space === "xyz" ? {
			x: _a,
			y: _b,
			z: _c
		} : this.space === "hsl" ? {
			h: _a,
			s: _b,
			l: _c
		} : this.space === "lab" ? {
			l: _a,
			a: _b,
			b: _c
		} : this.space === "lch" ? {
			l: _a,
			c: _b,
			h: _c
		} : this.space === "cmyk" ? {
			c: _a,
			m: _b,
			y: _c,
			k: _d
		} : {};
		Object.assign(this, components);
	}
	lab() {
		const { x, y, z } = this.xyz();
		const l = 116 * y - 16;
		const a = 500 * (x - y);
		const b = 200 * (y - z);
		return new Color(l, a, b, "lab");
	}
	lch() {
		const { l, a, b } = this.lab();
		const c = Math.sqrt(a ** 2 + b ** 2);
		let h = 180 * Math.atan2(b, a) / Math.PI;
		if (h < 0) {
			h *= -1;
			h = 360 - h;
		}
		return new Color(l, c, h, "lch");
	}
	rgb() {
		if (this.space === "rgb") return this;
		else if (cieSpace(this.space)) {
			let { x, y, z } = this;
			if (this.space === "lab" || this.space === "lch") {
				let { l, a, b } = this;
				if (this.space === "lch") {
					const { c, h } = this;
					const dToR = Math.PI / 180;
					a = c * Math.cos(dToR * h);
					b = c * Math.sin(dToR * h);
				}
				const yL = (l + 16) / 116;
				const xL = a / 500 + yL;
				const zL = yL - b / 200;
				const ct = 16 / 116;
				const mx = .008856;
				const nm = 7.787;
				x = .95047 * (xL ** 3 > mx ? xL ** 3 : (xL - ct) / nm);
				y = 1 * (yL ** 3 > mx ? yL ** 3 : (yL - ct) / nm);
				z = 1.08883 * (zL ** 3 > mx ? zL ** 3 : (zL - ct) / nm);
			}
			const rU = x * 3.2406 + y * -1.5372 + z * -.4986;
			const gU = x * -.9689 + y * 1.8758 + z * .0415;
			const bU = x * .0557 + y * -.204 + z * 1.057;
			const pow = Math.pow;
			const bd = .0031308;
			const r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - .055 : 12.92 * rU;
			const g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - .055 : 12.92 * gU;
			const b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - .055 : 12.92 * bU;
			return new Color(255 * r, 255 * g, 255 * b);
		} else if (this.space === "hsl") {
			let { h, s, l } = this;
			h /= 360;
			s /= 100;
			l /= 100;
			if (s === 0) {
				l *= 255;
				return new Color(l, l, l);
			}
			const q = l < .5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			const r = 255 * hueToRgb(p, q, h + 1 / 3);
			const g = 255 * hueToRgb(p, q, h);
			const b = 255 * hueToRgb(p, q, h - 1 / 3);
			return new Color(r, g, b);
		} else if (this.space === "cmyk") {
			const { c, m, y, k } = this;
			const r = 255 * (1 - Math.min(1, c * (1 - k) + k));
			const g = 255 * (1 - Math.min(1, m * (1 - k) + k));
			const b = 255 * (1 - Math.min(1, y * (1 - k) + k));
			return new Color(r, g, b);
		} else return this;
	}
	toArray() {
		const { _a, _b, _c, _d, space } = this;
		return [
			_a,
			_b,
			_c,
			_d,
			space
		];
	}
	toHex() {
		const [r, g, b] = this._clamped().map(componentHex);
		return `#${r}${g}${b}`;
	}
	toRgb() {
		const [rV, gV, bV] = this._clamped();
		return `rgb(${rV},${gV},${bV})`;
	}
	toString() {
		return this.toHex();
	}
	xyz() {
		const { _a: r255, _b: g255, _c: b255 } = this.rgb();
		const [r, g, b] = [
			r255,
			g255,
			b255
		].map((v) => v / 255);
		const rL = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92;
		const gL = g > .04045 ? Math.pow((g + .055) / 1.055, 2.4) : g / 12.92;
		const bL = b > .04045 ? Math.pow((b + .055) / 1.055, 2.4) : b / 12.92;
		const xU = (rL * .4124 + gL * .3576 + bL * .1805) / .95047;
		const yU = (rL * .2126 + gL * .7152 + bL * .0722) / 1;
		const zU = (rL * .0193 + gL * .1192 + bL * .9505) / 1.08883;
		const x = xU > .008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
		const y = yU > .008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
		const z = zU > .008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116;
		return new Color(x, y, z, "xyz");
	}
	_clamped() {
		const { _a, _b, _c } = this.rgb();
		const { max, min, round } = Math;
		const format = (v) => max(0, min(round(v), 255));
		return [
			_a,
			_b,
			_c
		].map(format);
	}
};

//#endregion
//#region src/types/Point.js
var Point = class Point {
	constructor(...args) {
		this.init(...args);
	}
	clone() {
		return new Point(this);
	}
	init(x, y) {
		const base = {
			x: 0,
			y: 0
		};
		const source = Array.isArray(x) ? {
			x: x[0],
			y: x[1]
		} : typeof x === "object" ? {
			x: x.x,
			y: x.y
		} : {
			x,
			y
		};
		this.x = source.x == null ? base.x : source.x;
		this.y = source.y == null ? base.y : source.y;
		return this;
	}
	toArray() {
		return [this.x, this.y];
	}
	transform(m) {
		return this.clone().transformO(m);
	}
	transformO(m) {
		if (!Matrix.isMatrixLike(m)) m = new Matrix(m);
		const { x, y } = this;
		this.x = m.a * x + m.c * y + m.e;
		this.y = m.b * x + m.d * y + m.f;
		return this;
	}
};
function point(x, y) {
	return new Point(x, y).transformO(this.screenCTM().inverseO());
}

//#endregion
//#region src/types/Matrix.js
function closeEnough(a, b, threshold) {
	return Math.abs(b - a) < (threshold || 1e-6);
}
var Matrix = class Matrix {
	constructor(...args) {
		this.init(...args);
	}
	static formatTransforms(o) {
		const flipBoth = o.flip === "both" || o.flip === true;
		const flipX = o.flip && (flipBoth || o.flip === "x") ? -1 : 1;
		const flipY = o.flip && (flipBoth || o.flip === "y") ? -1 : 1;
		const skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
		const skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
		const scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
		const scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
		const shear = o.shear || 0;
		const theta = o.rotate || o.theta || 0;
		const origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
		const ox = origin.x;
		const oy = origin.y;
		const position = new Point(o.position ?? o.px ?? o.positionX ?? NaN, o.py ?? o.positionY ?? NaN);
		const px = position.x;
		const py = position.y;
		const translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
		const tx = translate.x;
		const ty = translate.y;
		const relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
		return {
			scaleX,
			scaleY,
			skewX,
			skewY,
			shear,
			theta,
			rx: relative.x,
			ry: relative.y,
			tx,
			ty,
			ox,
			oy,
			px,
			py
		};
	}
	static fromArray(a) {
		return {
			a: a[0],
			b: a[1],
			c: a[2],
			d: a[3],
			e: a[4],
			f: a[5]
		};
	}
	static isMatrixLike(o) {
		return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
	}
	static matrixMultiply(l, r, o) {
		const a = l.a * r.a + l.c * r.b;
		const b = l.b * r.a + l.d * r.b;
		const c = l.a * r.c + l.c * r.d;
		const d = l.b * r.c + l.d * r.d;
		const e = l.e + l.a * r.e + l.c * r.f;
		const f = l.f + l.b * r.e + l.d * r.f;
		o.a = a;
		o.b = b;
		o.c = c;
		o.d = d;
		o.e = e;
		o.f = f;
		return o;
	}
	around(cx, cy, matrix) {
		return this.clone().aroundO(cx, cy, matrix);
	}
	aroundO(cx, cy, matrix) {
		const dx = cx || 0;
		const dy = cy || 0;
		return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
	}
	clone() {
		return new Matrix(this);
	}
	decompose(cx = 0, cy = 0) {
		const a = this.a;
		const b = this.b;
		const c = this.c;
		const d = this.d;
		const e = this.e;
		const f = this.f;
		const determinant = a * d - b * c;
		const ccw = determinant > 0 ? 1 : -1;
		const sx = ccw * Math.sqrt(a * a + b * b);
		const thetaRad = Math.atan2(ccw * b, ccw * a);
		const theta = 180 / Math.PI * thetaRad;
		const lam = (a * c + b * d) / determinant;
		return {
			scaleX: sx,
			scaleY: c * sx / (lam * a - b) || d * sx / (lam * b + a),
			shear: lam,
			rotate: theta,
			translateX: e - cx + cx * a + cy * c,
			translateY: f - cy + cx * b + cy * d,
			originX: cx,
			originY: cy,
			a: this.a,
			b: this.b,
			c: this.c,
			d: this.d,
			e: this.e,
			f: this.f
		};
	}
	equals(other) {
		if (other === this) return true;
		const comp = new Matrix(other);
		return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
	}
	flip(axis, around) {
		return this.clone().flipO(axis, around);
	}
	flipO(axis, around) {
		return axis === "x" ? this.scaleO(-1, 1, around, 0) : axis === "y" ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis);
	}
	init(source) {
		const base = Matrix.fromArray([
			1,
			0,
			0,
			1,
			0,
			0
		]);
		source = source instanceof Element ? source.matrixify() : typeof source === "string" ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : typeof source === "object" && Matrix.isMatrixLike(source) ? source : typeof source === "object" ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base;
		this.a = source.a != null ? source.a : base.a;
		this.b = source.b != null ? source.b : base.b;
		this.c = source.c != null ? source.c : base.c;
		this.d = source.d != null ? source.d : base.d;
		this.e = source.e != null ? source.e : base.e;
		this.f = source.f != null ? source.f : base.f;
		return this;
	}
	inverse() {
		return this.clone().inverseO();
	}
	inverseO() {
		const a = this.a;
		const b = this.b;
		const c = this.c;
		const d = this.d;
		const e = this.e;
		const f = this.f;
		const det = a * d - b * c;
		if (!det) throw new Error("Cannot invert " + this);
		const na = d / det;
		const nb = -b / det;
		const nc = -c / det;
		const nd = a / det;
		const ne = -(na * e + nc * f);
		const nf = -(nb * e + nd * f);
		this.a = na;
		this.b = nb;
		this.c = nc;
		this.d = nd;
		this.e = ne;
		this.f = nf;
		return this;
	}
	lmultiply(matrix) {
		return this.clone().lmultiplyO(matrix);
	}
	lmultiplyO(matrix) {
		const r = this;
		const l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
		return Matrix.matrixMultiply(l, r, this);
	}
	multiply(matrix) {
		return this.clone().multiplyO(matrix);
	}
	multiplyO(matrix) {
		const l = this;
		const r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
		return Matrix.matrixMultiply(l, r, this);
	}
	rotate(r, cx, cy) {
		return this.clone().rotateO(r, cx, cy);
	}
	rotateO(r, cx = 0, cy = 0) {
		r = radians(r);
		const cos = Math.cos(r);
		const sin = Math.sin(r);
		const { a, b, c, d, e, f } = this;
		this.a = a * cos - b * sin;
		this.b = b * cos + a * sin;
		this.c = c * cos - d * sin;
		this.d = d * cos + c * sin;
		this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
		this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
		return this;
	}
	scale() {
		return this.clone().scaleO(...arguments);
	}
	scaleO(x, y = x, cx = 0, cy = 0) {
		if (arguments.length === 3) {
			cy = cx;
			cx = y;
			y = x;
		}
		const { a, b, c, d, e, f } = this;
		this.a = a * x;
		this.b = b * y;
		this.c = c * x;
		this.d = d * y;
		this.e = e * x - cx * x + cx;
		this.f = f * y - cy * y + cy;
		return this;
	}
	shear(a, cx, cy) {
		return this.clone().shearO(a, cx, cy);
	}
	shearO(lx, cx = 0, cy = 0) {
		const { a, b, c, d, e, f } = this;
		this.a = a + b * lx;
		this.c = c + d * lx;
		this.e = e + f * lx - cy * lx;
		return this;
	}
	skew() {
		return this.clone().skewO(...arguments);
	}
	skewO(x, y = x, cx = 0, cy = 0) {
		if (arguments.length === 3) {
			cy = cx;
			cx = y;
			y = x;
		}
		x = radians(x);
		y = radians(y);
		const lx = Math.tan(x);
		const ly = Math.tan(y);
		const { a, b, c, d, e, f } = this;
		this.a = a + b * lx;
		this.b = b + a * ly;
		this.c = c + d * lx;
		this.d = d + c * ly;
		this.e = e + f * lx - cy * lx;
		this.f = f + e * ly - cx * ly;
		return this;
	}
	skewX(x, cx, cy) {
		return this.skew(x, 0, cx, cy);
	}
	skewY(y, cx, cy) {
		return this.skew(0, y, cx, cy);
	}
	toArray() {
		return [
			this.a,
			this.b,
			this.c,
			this.d,
			this.e,
			this.f
		];
	}
	toString() {
		return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
	}
	transform(o) {
		if (Matrix.isMatrixLike(o)) return new Matrix(o).multiplyO(this);
		const t = Matrix.formatTransforms(o);
		const current = this;
		const { x: ox, y: oy } = new Point(t.ox, t.oy).transform(current);
		const transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy);
		if (isFinite(t.px) || isFinite(t.py)) {
			const origin = new Point(ox, oy).transform(transformer);
			const dx = isFinite(t.px) ? t.px - origin.x : 0;
			const dy = isFinite(t.py) ? t.py - origin.y : 0;
			transformer.translateO(dx, dy);
		}
		transformer.translateO(t.tx, t.ty);
		return transformer;
	}
	translate(x, y) {
		return this.clone().translateO(x, y);
	}
	translateO(x, y) {
		this.e += x || 0;
		this.f += y || 0;
		return this;
	}
	valueOf() {
		return {
			a: this.a,
			b: this.b,
			c: this.c,
			d: this.d,
			e: this.e,
			f: this.f
		};
	}
};
function ctm() {
	return new Matrix(this.node.getCTM());
}
function screenCTM() {
	try {
		if (typeof this.isRoot === "function" && !this.isRoot()) {
			const rect = this.rect(1, 1);
			const m = rect.node.getScreenCTM();
			rect.remove();
			return new Matrix(m);
		}
		return new Matrix(this.node.getScreenCTM());
	} catch (e) {
		console.warn(`Cannot get CTM from SVG node ${this.node.nodeName}. Is the element rendered?`);
		return new Matrix();
	}
}
register(Matrix, "Matrix");

//#endregion
//#region src/modules/core/parser.js
function parser() {
	if (!parser.nodes || parser.nodes.svg.node.ownerDocument !== globals.document) {
		const svg = makeInstance().size(2, 0);
		svg.node.style.cssText = [
			"opacity: 0",
			"position: absolute",
			"left: -100%",
			"top: -100%",
			"overflow: hidden"
		].join(";");
		svg.attr("focusable", "false");
		svg.attr("aria-hidden", "true");
		parser.nodes = {
			svg,
			path: svg.path().node
		};
	}
	if (!parser.nodes.svg.node.parentNode) parser.nodes.svg.addTo(globals.document.body || globals.document.documentElement);
	return parser.nodes;
}

//#endregion
//#region src/types/Box.js
function isNulledBox(box) {
	return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node) {
	return node === globals.document || (globals.document.documentElement.contains || function(node) {
		while (node.parentNode) node = node.parentNode;
		return node === globals.document;
	}).call(globals.document.documentElement, node);
}
var Box = class Box {
	constructor(...args) {
		this.init(...args);
	}
	addOffset() {
		this.x += globals.window.pageXOffset;
		this.y += globals.window.pageYOffset;
		return new Box(this);
	}
	init(source) {
		source = typeof source === "string" ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : typeof source === "object" ? [
			source.left != null ? source.left : source.x,
			source.top != null ? source.top : source.y,
			source.width,
			source.height
		] : arguments.length === 4 ? [].slice.call(arguments) : [
			0,
			0,
			0,
			0
		];
		this.x = source[0] || 0;
		this.y = source[1] || 0;
		this.width = this.w = source[2] || 0;
		this.height = this.h = source[3] || 0;
		this.x2 = this.x + this.w;
		this.y2 = this.y + this.h;
		this.cx = this.x + this.w / 2;
		this.cy = this.y + this.h / 2;
		return this;
	}
	isNulled() {
		return isNulledBox(this);
	}
	merge(box) {
		const x = Math.min(this.x, box.x);
		const y = Math.min(this.y, box.y);
		const width = Math.max(this.x + this.width, box.x + box.width) - x;
		const height = Math.max(this.y + this.height, box.y + box.height) - y;
		return new Box(x, y, width, height);
	}
	toArray() {
		return [
			this.x,
			this.y,
			this.width,
			this.height
		];
	}
	toString() {
		return this.x + " " + this.y + " " + this.width + " " + this.height;
	}
	transform(m) {
		if (!(m instanceof Matrix)) m = new Matrix(m);
		let xMin = Infinity;
		let xMax = -Infinity;
		let yMin = Infinity;
		let yMax = -Infinity;
		[
			new Point(this.x, this.y),
			new Point(this.x2, this.y),
			new Point(this.x, this.y2),
			new Point(this.x2, this.y2)
		].forEach(function(p) {
			p = p.transform(m);
			xMin = Math.min(xMin, p.x);
			xMax = Math.max(xMax, p.x);
			yMin = Math.min(yMin, p.y);
			yMax = Math.max(yMax, p.y);
		});
		return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
	}
};
function getBox(el, getBBoxFn, retry) {
	let box;
	try {
		box = getBBoxFn(el.node);
		if (isNulledBox(box) && !domContains(el.node)) throw new Error("Element not in the dom");
	} catch (e) {
		box = retry(el);
	}
	return box;
}
function bbox() {
	const getBBox = (node) => node.getBBox();
	const retry = (el) => {
		try {
			const clone = el.clone().addTo(parser().svg).show();
			const box = clone.node.getBBox();
			clone.remove();
			return box;
		} catch (e) {
			throw new Error(`Getting bbox of element "${el.node.nodeName}" is not possible: ${e.toString()}`);
		}
	};
	const box = getBox(this, getBBox, retry);
	return new Box(box);
}
function rbox(el) {
	const getRBox = (node) => node.getBoundingClientRect();
	const retry = (el) => {
		throw new Error(`Getting rbox of element "${el.node.nodeName}" is not possible`);
	};
	const box = getBox(this, getRBox, retry);
	const rbox = new Box(box);
	if (el) return rbox.transform(el.screenCTM().inverseO());
	return rbox.addOffset();
}
function inside(x, y) {
	const box = this.bbox();
	return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
}
registerMethods({ viewbox: {
	viewbox(x, y, width, height) {
		if (x == null) return new Box(this.attr("viewBox"));
		return this.attr("viewBox", new Box(x, y, width, height));
	},
	zoom(level, point) {
		let { width, height } = this.attr(["width", "height"]);
		if (!width && !height || typeof width === "string" || typeof height === "string") {
			width = this.node.clientWidth;
			height = this.node.clientHeight;
		}
		if (!width || !height) throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
		const v = this.viewbox();
		const zoomX = width / v.width;
		const zoomY = height / v.height;
		const zoom = Math.min(zoomX, zoomY);
		if (level == null) return zoom;
		let zoomAmount = zoom / level;
		if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
		point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
		const box = new Box(v).transform(new Matrix({
			scale: zoomAmount,
			origin: point
		}));
		return this.viewbox(box);
	}
} });
register(Box, "Box");

//#endregion
//#region src/types/List.js
var List = class extends Array {
	constructor(arr = [], ...args) {
		super(arr, ...args);
		if (typeof arr === "number") return this;
		this.length = 0;
		this.push(...arr);
	}
};
extend([List], {
	each(fnOrMethodName, ...args) {
		if (typeof fnOrMethodName === "function") return this.map((el, i, arr) => {
			return fnOrMethodName.call(el, el, i, arr);
		});
		else return this.map((el) => {
			return el[fnOrMethodName](...args);
		});
	},
	toArray() {
		return Array.prototype.concat.apply([], this);
	}
});
const reserved = [
	"toArray",
	"constructor",
	"each"
];
List.extend = function(methods) {
	methods = methods.reduce((obj, name) => {
		if ((0, import_includes.default)(reserved).call(reserved, name)) return obj;
		if (name[0] === "_") return obj;
		if (name in Array.prototype) obj["$" + name] = Array.prototype[name];
		obj[name] = function(...attrs) {
			return this.each(name, ...attrs);
		};
		return obj;
	}, {});
	extend([List], methods);
};

//#endregion
//#region src/modules/core/references.js
function getReferenceId(value) {
	let referenceValue = (value + "").trim();
	const url = referenceValue.match(/^url\((.*)\)$/i);
	if (url) {
		referenceValue = url[1].trim();
		const quote = referenceValue[0];
		if (quote === "\"" || quote === "'") {
			if (referenceValue[referenceValue.length - 1] !== quote) return null;
			referenceValue = referenceValue.slice(1, -1);
		}
	}
	const match = referenceValue.match(reference);
	return match ? match[1].slice(1) : null;
}
function findById(rootNode, id) {
	const selector = `#${globals.window.CSS.escape(id)}`;
	if (rootNode.nodeType === 1 && rootNode.matches(selector)) return rootNode;
	return rootNode.querySelector(selector);
}
function resolveReference(node, value) {
	const id = getReferenceId(value);
	return id ? findById(node.getRootNode(), id) : null;
}
function findReferences(node, attribute, selector = `[${attribute}]`) {
	const id = node.getAttribute("id");
	const rootNode = node.getRootNode();
	if (!id || findById(rootNode, id) !== node) return new List();
	const references = [];
	if (rootNode.nodeType === 1 && rootNode.matches(selector) && getReferenceId(rootNode.getAttribute(attribute)) === id) references.push(adopt(rootNode));
	for (const element of rootNode.querySelectorAll(selector)) if (getReferenceId(element.getAttribute(attribute)) === id) references.push(adopt(element));
	return new List(references);
}

//#endregion
//#region src/modules/core/selector.js
function baseFind(query, parent) {
	return new List(map((parent || globals.document).querySelectorAll(query), function(node) {
		return adopt(node);
	}));
}
function find(query) {
	return baseFind(query, this.node);
}
function findOne(query) {
	return adopt(this.node.querySelector(query));
}

//#endregion
//#region src/modules/core/event.js
let listenerId = 0;
const eventStore = /* @__PURE__ */ new WeakMap();
const listenerIds = /* @__PURE__ */ new WeakMap();
const createEventMap = () => Object.create(null);
function getEvents(instance) {
	const holder = instance.getEventHolder();
	let bag = eventStore.get(holder);
	if (!bag) {
		bag = createEventMap();
		eventStore.set(holder, bag);
	}
	return bag;
}
function getEventTarget(instance) {
	return instance.getEventTarget();
}
function clearEvents(instance) {
	eventStore.delete(instance.getEventHolder());
}
function on(node, events, listener, binding, options) {
	const l = listener.bind(binding || node);
	const listenerOptions = options || false;
	const instance = makeInstance(node);
	const bag = getEvents(instance);
	const n = getEventTarget(instance);
	events = Array.isArray(events) ? events : events.split(delimiter);
	let id = listenerIds.get(listener);
	if (!id) {
		id = ++listenerId;
		listenerIds.set(listener, id);
	}
	events.forEach(function(event) {
		const ev = event.split(".")[0];
		const ns = event.split(".")[1] || "*";
		bag[ev] = bag[ev] || createEventMap();
		bag[ev][ns] = bag[ev][ns] || createEventMap();
		bag[ev][ns][id] = bag[ev][ns][id] || [];
		bag[ev][ns][id].push({
			listener: l,
			options: listenerOptions
		});
		n.addEventListener(ev, l, listenerOptions);
	});
}
function off(node, events, listener, options) {
	const instance = makeInstance(node);
	const bag = getEvents(instance);
	const n = getEventTarget(instance);
	if (typeof listener === "function") {
		listener = listenerIds.get(listener);
		if (!listener) return;
	}
	events = Array.isArray(events) ? events : (events || "").split(delimiter);
	events.forEach(function(event) {
		const ev = event && event.split(".")[0];
		const ns = event && event.split(".")[1];
		let namespace, l;
		if (listener) {
			if (bag[ev] && bag[ev][ns || "*"]) {
				const listeners = bag[ev][ns || "*"][listener];
				if (!listeners) return;
				listeners.forEach(function(registration) {
					n.removeEventListener(ev, registration.listener, registration.options ?? options ?? false);
				});
				delete bag[ev][ns || "*"][listener];
			}
		} else if (ev && ns) {
			if (bag[ev] && bag[ev][ns]) {
				for (l in bag[ev][ns]) off(n, [ev, ns].join("."), l);
				delete bag[ev][ns];
			}
		} else if (ns) {
			for (event in bag) for (namespace in bag[event]) if (ns === namespace) off(n, [event, ns].join("."));
		} else if (ev) {
			if (bag[ev]) {
				for (namespace in bag[ev]) off(n, [ev, namespace].join("."));
				delete bag[ev];
			}
		} else {
			for (event in bag) off(n, event);
			clearEvents(instance);
		}
	});
}
function dispatch(node, event, data, options) {
	const n = getEventTarget(node);
	if (event instanceof globals.window.Event) n.dispatchEvent(event);
	else {
		event = new globals.window.CustomEvent(event, {
			detail: data,
			cancelable: true,
			...options
		});
		n.dispatchEvent(event);
	}
	return event;
}

//#endregion
//#region src/types/EventTarget.js
var EventTarget = class extends Base {
	addEventListener() {}
	dispatch(event, data, options) {
		return dispatch(this, event, data, options);
	}
	dispatchEvent(event) {
		const events = getEvents(this)[event.type];
		if (!events) return true;
		for (const i in events) for (const j in events[i]) events[i][j].forEach(function(registration) {
			registration.listener(event);
		});
		return !event.defaultPrevented;
	}
	fire(event, data, options) {
		this.dispatch(event, data, options);
		return this;
	}
	getEventHolder() {
		return this;
	}
	getEventTarget() {
		return this;
	}
	off(event, listener, options) {
		off(this, event, listener, options);
		return this;
	}
	on(event, listener, binding, options) {
		on(this, event, listener, binding, options);
		return this;
	}
	removeEventListener() {}
};
register(EventTarget, "EventTarget");

//#endregion
//#region src/modules/core/defaults.js
var defaults_exports = /* @__PURE__ */ __exportAll({
	attrs: () => attrs,
	noop: () => noop,
	timeline: () => timeline
});
function noop() {}
const timeline = {
	duration: 400,
	ease: ">",
	delay: 0
};
const attrs = {
	"fill-opacity": 1,
	"stroke-opacity": 1,
	"stroke-width": 0,
	"stroke-linejoin": "miter",
	"stroke-linecap": "butt",
	fill: "#000000",
	stroke: "#000000",
	opacity: 1,
	x: 0,
	y: 0,
	cx: 0,
	cy: 0,
	width: 0,
	height: 0,
	r: 0,
	rx: 0,
	ry: 0,
	offset: 0,
	"stop-opacity": 1,
	"stop-color": "#000000",
	"text-anchor": "start"
};

//#endregion
//#region src/types/SVGArray.js
var SVGArray = class extends Array {
	constructor(...args) {
		super(...args);
		this.init(...args);
	}
	clone() {
		return new this.constructor(this);
	}
	init(arr) {
		if (typeof arr === "number") return this;
		this.length = 0;
		this.push(...this.parse(arr));
		return this;
	}
	parse(array = []) {
		if (array instanceof Array) return array;
		return array.trim().split(delimiter).map(parseFloat);
	}
	toArray() {
		return Array.prototype.concat.apply([], this);
	}
	toSet() {
		return new Set(this);
	}
	toString() {
		return this.join(" ");
	}
	valueOf() {
		const ret = [];
		ret.push(...this);
		return ret;
	}
};

//#endregion
//#region src/types/SVGNumber.js
var SVGNumber = class SVGNumber {
	constructor(...args) {
		this.init(...args);
	}
	convert(unit) {
		return new SVGNumber(this.value, unit);
	}
	divide(number) {
		number = new SVGNumber(number);
		return new SVGNumber(this / number, this.unit || number.unit);
	}
	init(value, unit) {
		unit = Array.isArray(value) ? value[1] : unit;
		value = Array.isArray(value) ? value[0] : value;
		this.value = 0;
		this.unit = unit || "";
		if (typeof value === "number") this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -34e37 : 34e37 : value;
		else if (typeof value === "string") {
			unit = value.match(numberAndUnit);
			if (unit) {
				this.value = parseFloat(unit[1]);
				if (unit[5] === "%") this.value /= 100;
				else if (unit[5] === "s") this.value *= 1e3;
				this.unit = unit[5];
			}
		} else if (value instanceof SVGNumber) {
			this.value = value.valueOf();
			this.unit = value.unit;
		}
		return this;
	}
	minus(number) {
		number = new SVGNumber(number);
		return new SVGNumber(this - number, this.unit || number.unit);
	}
	plus(number) {
		number = new SVGNumber(number);
		return new SVGNumber(this + number, this.unit || number.unit);
	}
	times(number) {
		number = new SVGNumber(number);
		return new SVGNumber(this * number, this.unit || number.unit);
	}
	toArray() {
		return [this.value, this.unit];
	}
	toJSON() {
		return this.toString();
	}
	toString() {
		return (this.unit === "%" ? ~~(this.value * 1e8) / 1e6 : this.unit === "s" ? this.value / 1e3 : this.value) + this.unit;
	}
	valueOf() {
		return this.value;
	}
};

//#endregion
//#region src/modules/core/attr.js
const colorAttributes = /* @__PURE__ */ new Set([
	"fill",
	"stroke",
	"color",
	"bgcolor",
	"stop-color",
	"flood-color",
	"lighting-color"
]);
const hooks = [];
function registerAttrHook(fn) {
	hooks.push(fn);
}
function attr(attr, val, ns) {
	if (attr == null) {
		attr = {};
		val = this.node.attributes;
		for (const node of val) attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
		return attr;
	} else if (attr instanceof Array) return attr.reduce((last, curr) => {
		last[curr] = this.attr(curr);
		return last;
	}, {});
	else if (typeof attr === "object" && attr.constructor === Object) for (val in attr) this.attr(val, attr[val]);
	else if (val === null) this.node.removeAttribute(attr);
	else if (val == null) {
		val = this.node.getAttribute(attr);
		return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
	} else {
		val = hooks.reduce((_val, hook) => {
			return hook(attr, _val, this);
		}, val);
		if (typeof val === "number") val = new SVGNumber(val);
		else if (colorAttributes.has(attr) && Color.isColor(val)) val = new Color(val);
		else if (val.constructor === Array) val = new SVGArray(val);
		if (attr === "leading") {
			if (this.leading) this.leading(val);
		} else typeof ns === "string" ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
		if (this.rebuild && (attr === "font-size" || attr === "x")) this.rebuild();
	}
	return this;
}

//#endregion
//#region src/elements/Dom.js
var Dom = class Dom extends EventTarget {
	constructor(node, attrs) {
		super();
		this.node = node;
		this.type = node.nodeName;
		if (attrs && node !== attrs) this.attr(attrs);
	}
	add(element, i) {
		element = makeInstance(element);
		if (element.removeNamespace && this.node instanceof globals.window.SVGElement) element.removeNamespace();
		if (i == null) this.node.appendChild(element.node);
		else if (element.node !== this.node.childNodes[i]) this.node.insertBefore(element.node, this.node.childNodes[i]);
		return this;
	}
	addTo(parent, i) {
		return makeInstance(parent).put(this, i);
	}
	children() {
		return new List(map(this.node.children, function(node) {
			return adopt(node);
		}));
	}
	clear() {
		while (this.node.hasChildNodes()) this.node.removeChild(this.node.lastChild);
		return this;
	}
	clone(deep = true, assignNewIds = true) {
		this.writeDataToDom();
		let nodeClone = this.node.cloneNode(deep);
		if (assignNewIds) nodeClone = assignNewId(nodeClone);
		return new this.constructor(nodeClone);
	}
	each(block, deep) {
		const children = this.children();
		let i, il;
		for (i = 0, il = children.length; i < il; i++) {
			block.apply(children[i], [i, children]);
			if (deep) children[i].each(block, deep);
		}
		return this;
	}
	element(nodeName, attrs) {
		return this.put(new Dom(create(nodeName), attrs));
	}
	first() {
		return adopt(this.node.firstChild);
	}
	get(i) {
		return adopt(this.node.childNodes[i]);
	}
	getEventHolder() {
		return this.node;
	}
	getEventTarget() {
		return this.node;
	}
	has(element) {
		return this.index(element) >= 0;
	}
	html(htmlOrFn, outerHTML) {
		return this.xml(htmlOrFn, outerHTML, html);
	}
	id(id) {
		if (typeof id === "undefined" && !this.node.id) this.node.id = eid(this.type);
		return this.attr("id", id);
	}
	index(element) {
		return [].slice.call(this.node.childNodes).indexOf(element.node);
	}
	last() {
		return adopt(this.node.lastChild);
	}
	matches(selector) {
		const el = this.node;
		const matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
		return matcher && matcher.call(el, selector);
	}
	parent(type) {
		let parent = this;
		if (!parent.node.parentNode) return null;
		parent = adopt(parent.node.parentNode);
		if (!type) return parent;
		do
			if (typeof type === "string" ? parent.matches(type) : parent instanceof type) return parent;
		while (parent = adopt(parent.node.parentNode));
		return parent;
	}
	put(element, i) {
		element = makeInstance(element);
		this.add(element, i);
		return element;
	}
	putIn(parent, i) {
		return makeInstance(parent).add(this, i);
	}
	remove() {
		if (this.parent()) this.parent().removeElement(this);
		return this;
	}
	removeElement(element) {
		this.node.removeChild(element.node);
		return this;
	}
	replace(element) {
		element = makeInstance(element);
		if (this.node.parentNode) this.node.parentNode.replaceChild(element.node, this.node);
		return element;
	}
	round(precision = 2, map = null) {
		const factor = 10 ** precision;
		const attrs = this.attr(map);
		for (const i in attrs) if (typeof attrs[i] === "number") attrs[i] = Math.round(attrs[i] * factor) / factor;
		this.attr(attrs);
		return this;
	}
	svg(svgOrFn, outerSVG) {
		return this.xml(svgOrFn, outerSVG, svg);
	}
	toString() {
		return this.id();
	}
	words(text) {
		this.node.textContent = text;
		return this;
	}
	wrap(node) {
		const parent = this.parent();
		if (!parent) return this.addTo(node);
		const position = parent.index(this);
		return parent.put(node, position).put(this);
	}
	writeDataToDom() {
		this.each(function() {
			this.writeDataToDom();
		});
		return this;
	}
	xml(xmlOrFn, outerXML, ns) {
		if (typeof xmlOrFn === "boolean") {
			ns = outerXML;
			outerXML = xmlOrFn;
			xmlOrFn = null;
		}
		if (xmlOrFn == null || typeof xmlOrFn === "function") {
			outerXML = outerXML == null ? true : outerXML;
			this.writeDataToDom();
			let current = this;
			if (xmlOrFn != null) {
				current = adopt(current.node.cloneNode(true));
				if (outerXML) {
					const result = xmlOrFn(current);
					current = result || current;
					if (result === false) return "";
				}
				current.each(function() {
					const result = xmlOrFn(this);
					const _this = result || this;
					if (result === false) this.remove();
					else if (result && this !== _this) this.replace(_this);
				}, true);
			}
			return outerXML ? current.node.outerHTML : current.node.innerHTML;
		}
		outerXML = outerXML == null ? false : outerXML;
		const well = create("wrapper", ns);
		const fragment = globals.document.createDocumentFragment();
		well.innerHTML = xmlOrFn;
		for (let len = well.children.length; len--;) fragment.appendChild(well.firstElementChild);
		const parent = this.parent();
		return outerXML ? this.replace(fragment) && parent : this.add(fragment);
	}
};
extend(Dom, {
	attr,
	find,
	findOne
});
register(Dom, "Dom");

//#endregion
//#region src/elements/Element.js
var Element = class extends Dom {
	constructor(node, attrs) {
		super(node, attrs);
		this.dom = {};
		this.node.instance = this;
		if (node.hasAttribute("data-svgjs") || node.hasAttribute("svgjs:data")) this.setData(JSON.parse(node.getAttribute("data-svgjs")) ?? JSON.parse(node.getAttribute("svgjs:data")) ?? {});
	}
	center(x, y) {
		return this.cx(x).cy(y);
	}
	cx(x) {
		return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
	}
	cy(y) {
		return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
	}
	defs() {
		const root = this.root();
		return root && root.defs();
	}
	dmove(x, y) {
		return this.dx(x).dy(y);
	}
	dx(x = 0) {
		return this.x(new SVGNumber(x).plus(this.x()));
	}
	dy(y = 0) {
		return this.y(new SVGNumber(y).plus(this.y()));
	}
	getEventHolder() {
		return this;
	}
	height(height) {
		return this.attr("height", height);
	}
	move(x, y) {
		return this.x(x).y(y);
	}
	parents(until = this.root()) {
		const isSelector = typeof until === "string";
		const root = this.root();
		const rootNode = root && root.node;
		if (!isSelector) until = until && makeInstance(until).node;
		const parents = new List();
		let parent = this;
		while ((parent = parent.parent()) && parent.node !== globals.document && parent.node.nodeName !== "#document-fragment") {
			parents.push(parent);
			if (!isSelector && parent.node === until) break;
			if (isSelector && parent.matches(until)) break;
			if (rootNode && parent.node === rootNode) return null;
		}
		return parents;
	}
	reference(attr) {
		attr = this.attr(attr);
		if (!attr) return null;
		const target = resolveReference(this.node, attr);
		return target ? makeInstance(target) : null;
	}
	root() {
		const p = this.parent(getClass(root));
		return p && p.root();
	}
	setData(o) {
		this.dom = o;
		return this;
	}
	size(width, height) {
		const p = proportionalSize(this, width, height);
		return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
	}
	width(width) {
		return this.attr("width", width);
	}
	writeDataToDom(defaults) {
		writeDataToDom(this, this.dom, defaults);
		return super.writeDataToDom();
	}
	x(x) {
		return this.attr("x", x);
	}
	y(y) {
		return this.attr("y", y);
	}
};
extend(Element, {
	bbox,
	rbox,
	inside,
	point,
	ctm,
	screenCTM
});
register(Element, "Element");

//#endregion
//#region src/modules/optional/sugar.js
const sugar = {
	stroke: [
		"color",
		"width",
		"opacity",
		"linecap",
		"linejoin",
		"miterlimit",
		"dasharray",
		"dashoffset"
	],
	fill: [
		"color",
		"opacity",
		"rule"
	],
	prefix: function(t, a) {
		return a === "color" ? t : t + "-" + a;
	}
};
["fill", "stroke"].forEach(function(m) {
	const extension = {};
	let i;
	extension[m] = function(o) {
		if (typeof o === "undefined") return this.attr(m);
		if (typeof o === "string" || o instanceof Color || Color.isRgb(o) || o instanceof Element) this.attr(m, o);
		else for (i = sugar[m].length - 1; i >= 0; i--) if (o[sugar[m][i]] != null) this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
		return this;
	};
	registerMethods(["Element", "Runner"], extension);
});
registerMethods(["Element", "Runner"], {
	matrix: function(mat, b, c, d, e, f) {
		if (mat == null) return new Matrix(this);
		return this.attr("transform", new Matrix(mat, b, c, d, e, f));
	},
	rotate: function(angle, cx, cy) {
		return this.transform({
			rotate: angle,
			ox: cx,
			oy: cy
		}, true);
	},
	skew: function(x, y, cx, cy) {
		return arguments.length === 1 || arguments.length === 3 ? this.transform({
			skew: x,
			ox: y,
			oy: cx
		}, true) : this.transform({
			skew: [x, y],
			ox: cx,
			oy: cy
		}, true);
	},
	shear: function(lam, cx, cy) {
		return this.transform({
			shear: lam,
			ox: cx,
			oy: cy
		}, true);
	},
	scale: function(x, y, cx, cy) {
		return arguments.length === 1 || arguments.length === 3 ? this.transform({
			scale: x,
			ox: y,
			oy: cx
		}, true) : this.transform({
			scale: [x, y],
			ox: cx,
			oy: cy
		}, true);
	},
	translate: function(x, y) {
		return this.transform({ translate: [x, y] }, true);
	},
	relative: function(x, y) {
		return this.transform({ relative: [x, y] }, true);
	},
	flip: function(direction = "both", origin = "center") {
		if ("xybothtrue".indexOf(direction) === -1) {
			origin = direction;
			direction = "both";
		}
		return this.transform({
			flip: direction,
			origin
		}, true);
	},
	opacity: function(value) {
		return this.attr("opacity", value);
	}
});
registerMethods("radius", { radius: function(x, y = x) {
	return (this._element || this).type === "radialGradient" ? this.attr("r", new SVGNumber(x)) : this.rx(x).ry(y);
} });
registerMethods("Path", {
	length: function() {
		return this.node.getTotalLength();
	},
	pointAt: function(length) {
		return new Point(this.node.getPointAtLength(length));
	}
});
registerMethods(["Element", "Runner"], { font: function(a, v) {
	if (typeof a === "object") {
		for (v in a) this.font(v, a[v]);
		return this;
	}
	return a === "leading" ? this.leading(v) : a === "anchor" ? this.attr("text-anchor", v) : a === "size" || a === "family" || a === "weight" || a === "stretch" || a === "variant" || a === "style" ? this.attr("font-" + a, v) : this.attr(a, v);
} });
registerMethods("Element", [
	"click",
	"dblclick",
	"mousedown",
	"mouseup",
	"mouseover",
	"mouseout",
	"mousemove",
	"mouseenter",
	"mouseleave",
	"touchstart",
	"touchmove",
	"touchleave",
	"touchend",
	"touchcancel",
	"contextmenu",
	"wheel",
	"pointerdown",
	"pointermove",
	"pointerup",
	"pointerleave",
	"pointercancel"
].reduce(function(last, event) {
	const fn = function(f) {
		if (f === null) this.off(event);
		else this.on(event, f);
		return this;
	};
	last[event] = fn;
	return last;
}, {}));

//#endregion
//#region src/modules/optional/transform.js
function untransform() {
	return this.attr("transform", null);
}
function matrixify() {
	return (this.attr("transform") || "").split(transforms).slice(0, -1).map(function(str) {
		const kv = str.trim().split("(");
		return [kv[0].trim(), kv[1].split(delimiter).map(function(str) {
			return parseFloat(str);
		})];
	}).reverse().reduce(function(matrix, transform) {
		if (transform[0] === "matrix") return matrix.lmultiply(Matrix.fromArray(transform[1]));
		return matrix[transform[0]].apply(matrix, transform[1]);
	}, new Matrix());
}
function toParent(parent, i) {
	if (this === parent) return this;
	if (isDescriptive(this.node)) return this.addTo(parent, i);
	const ctm = this.screenCTM();
	const pCtm = parent.screenCTM().inverse();
	this.addTo(parent, i).untransform().transform(pCtm.multiply(ctm));
	return this;
}
function toRoot(i) {
	return this.toParent(this.root(), i);
}
function transform(o, relative) {
	if (o == null || typeof o === "string") {
		const decomposed = new Matrix(this).decompose();
		return o == null ? decomposed : decomposed[o];
	}
	if (!Matrix.isMatrixLike(o)) o = {
		...o,
		origin: getOrigin(o, this)
	};
	const result = new Matrix(relative === true ? this : relative || false).transform(o);
	return this.attr("transform", result);
}
registerMethods("Element", {
	untransform,
	matrixify,
	toParent,
	toRoot,
	transform
});

//#endregion
//#region src/elements/Container.js
var Container = class Container extends Element {
	flatten() {
		this.each(function() {
			if (this instanceof Container) return this.flatten().ungroup();
		});
		return this;
	}
	ungroup(parent = this.parent(), index = parent.index(this)) {
		index = index === -1 ? parent.children().length : index;
		this.each(function(i, children) {
			return children[children.length - i - 1].toParent(parent, index);
		});
		return this.remove();
	}
};
register(Container, "Container");

//#endregion
//#region src/elements/Defs.js
var Defs = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("defs", node), attrs);
	}
	flatten() {
		return this;
	}
	ungroup() {
		return this;
	}
};
register(Defs, "Defs");

//#endregion
//#region src/elements/Shape.js
var Shape = class extends Element {};
register(Shape, "Shape");

//#endregion
//#region src/modules/core/circled.js
var circled_exports = /* @__PURE__ */ __exportAll({
	cx: () => cx$1,
	cy: () => cy$1,
	height: () => height$2,
	rx: () => rx,
	ry: () => ry,
	width: () => width$2,
	x: () => x$3,
	y: () => y$3
});
function rx(rx) {
	return this.attr("rx", rx);
}
function ry(ry) {
	return this.attr("ry", ry);
}
function x$3(x) {
	return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
}
function y$3(y) {
	return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
}
function cx$1(x) {
	return this.attr("cx", x);
}
function cy$1(y) {
	return this.attr("cy", y);
}
function width$2(width) {
	return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
}
function height$2(height) {
	return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

//#endregion
//#region src/elements/Ellipse.js
var Ellipse = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("ellipse", node), attrs);
	}
	size(width, height) {
		const p = proportionalSize(this, width, height);
		return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
	}
};
extend(Ellipse, circled_exports);
registerMethods("Container", { ellipse: wrapWithAttrCheck(function(width = 0, height = width) {
	return this.put(new Ellipse()).size(width, height).move(0, 0);
}) });
register(Ellipse, "Ellipse");

//#endregion
//#region src/elements/Fragment.js
var Fragment = class extends Dom {
	constructor(node = globals.document.createDocumentFragment()) {
		super(node);
	}
	xml(xmlOrFn, outerXML, ns) {
		if (typeof xmlOrFn === "boolean") {
			ns = outerXML;
			outerXML = xmlOrFn;
			xmlOrFn = null;
		}
		if (xmlOrFn == null || typeof xmlOrFn === "function") {
			const wrapper = new Dom(create("wrapper", ns));
			wrapper.add(this.node.cloneNode(true));
			return wrapper.xml(false, ns);
		}
		return super.xml(xmlOrFn, false, ns);
	}
};
register(Fragment, "Fragment");

//#endregion
//#region src/modules/core/gradiented.js
var gradiented_exports = /* @__PURE__ */ __exportAll({
	from: () => from,
	to: () => to
});
function from(x, y) {
	return (this._element || this).type === "radialGradient" ? this.attr({
		fx: new SVGNumber(x),
		fy: new SVGNumber(y)
	}) : this.attr({
		x1: new SVGNumber(x),
		y1: new SVGNumber(y)
	});
}
function to(x, y) {
	return (this._element || this).type === "radialGradient" ? this.attr({
		cx: new SVGNumber(x),
		cy: new SVGNumber(y)
	}) : this.attr({
		x2: new SVGNumber(x),
		y2: new SVGNumber(y)
	});
}

//#endregion
//#region src/elements/Gradient.js
var Gradient = class extends Container {
	constructor(type, attrs) {
		super(nodeOrNew(type + "Gradient", typeof type === "string" ? null : type), attrs);
	}
	attr(a, b, c) {
		if (a === "transform") a = "gradientTransform";
		return super.attr(a, b, c);
	}
	bbox() {
		return new Box();
	}
	targets() {
		return findReferences(this.node, "fill");
	}
	toString() {
		return this.url();
	}
	update(block) {
		this.clear();
		if (typeof block === "function") block.call(this, this);
		return this;
	}
	url() {
		return "url(#" + this.id() + ")";
	}
};
extend(Gradient, gradiented_exports);
registerMethods({
	Container: { gradient(...args) {
		return this.defs().gradient(...args);
	} },
	Defs: { gradient: wrapWithAttrCheck(function(type, block) {
		return this.put(new Gradient(type)).update(block);
	}) }
});
register(Gradient, "Gradient");

//#endregion
//#region src/elements/Pattern.js
var Pattern = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("pattern", node), attrs);
	}
	attr(a, b, c) {
		if (a === "transform") a = "patternTransform";
		return super.attr(a, b, c);
	}
	bbox() {
		return new Box();
	}
	targets() {
		return findReferences(this.node, "fill");
	}
	toString() {
		return this.url();
	}
	update(block) {
		this.clear();
		if (typeof block === "function") block.call(this, this);
		return this;
	}
	url() {
		return "url(#" + this.id() + ")";
	}
};
registerMethods({
	Container: { pattern(...args) {
		return this.defs().pattern(...args);
	} },
	Defs: { pattern: wrapWithAttrCheck(function(width, height, block) {
		return this.put(new Pattern()).update(block).attr({
			x: 0,
			y: 0,
			width,
			height,
			patternUnits: "userSpaceOnUse"
		});
	}) }
});
register(Pattern, "Pattern");

//#endregion
//#region src/elements/Image.js
var Image = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("image", node), attrs);
	}
	load(url, callback) {
		if (!url) return this;
		const img = new globals.window.Image();
		on(img, "load", function(e) {
			const p = this.parent(Pattern);
			if (this.width() === 0 && this.height() === 0) this.size(img.width, img.height);
			if (p instanceof Pattern) {
				if (p.width() === 0 && p.height() === 0) p.size(this.width(), this.height());
			}
			if (typeof callback === "function") callback.call(this, e);
		}, this);
		on(img, "load error", function() {
			off(img);
		});
		return this.attr("href", img.src = url, xlink);
	}
};
registerAttrHook(function(attr, val, _this) {
	if (attr === "fill" || attr === "stroke") {
		if (isImage.test(val)) val = _this.root().defs().image(val);
	}
	if (val instanceof Image) val = _this.root().defs().pattern(0, 0, (pattern) => {
		pattern.add(val);
	});
	return val;
});
registerMethods({ Container: { image: wrapWithAttrCheck(function(source, callback) {
	return this.put(new Image()).size(0, 0).load(source, callback);
}) } });
register(Image, "Image");

//#endregion
//#region src/types/PointArray.js
var PointArray = class extends SVGArray {
	bbox() {
		let maxX = -Infinity;
		let maxY = -Infinity;
		let minX = Infinity;
		let minY = Infinity;
		this.forEach(function(el) {
			maxX = Math.max(el[0], maxX);
			maxY = Math.max(el[1], maxY);
			minX = Math.min(el[0], minX);
			minY = Math.min(el[1], minY);
		});
		return new Box(minX, minY, maxX - minX, maxY - minY);
	}
	move(x, y) {
		const box = this.bbox();
		x -= box.x;
		y -= box.y;
		if (!isNaN(x) && !isNaN(y)) for (let i = this.length - 1; i >= 0; i--) this[i] = [this[i][0] + x, this[i][1] + y];
		return this;
	}
	parse(array = [0, 0]) {
		const points = [];
		if (array instanceof Array) array = Array.prototype.concat.apply([], array);
		else array = array.trim().split(delimiter).map(parseFloat);
		if (array.length % 2 !== 0) array.pop();
		for (let i = 0, len = array.length; i < len; i = i + 2) points.push([array[i], array[i + 1]]);
		return points;
	}
	size(width, height) {
		let i;
		const box = this.bbox();
		for (i = this.length - 1; i >= 0; i--) {
			if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
			if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
		}
		return this;
	}
	toLine() {
		return {
			x1: this[0][0],
			y1: this[0][1],
			x2: this[1][0],
			y2: this[1][1]
		};
	}
	toString() {
		const array = [];
		for (let i = 0, il = this.length; i < il; i++) array.push(this[i].join(","));
		return array.join(" ");
	}
	transform(m) {
		return this.clone().transformO(m);
	}
	transformO(m) {
		if (!Matrix.isMatrixLike(m)) m = new Matrix(m);
		for (let i = this.length; i--;) {
			const [x, y] = this[i];
			this[i][0] = m.a * x + m.c * y + m.e;
			this[i][1] = m.b * x + m.d * y + m.f;
		}
		return this;
	}
};

//#endregion
//#region src/modules/core/pointed.js
var pointed_exports = /* @__PURE__ */ __exportAll({
	MorphArray: () => MorphArray,
	height: () => height$1,
	width: () => width$1,
	x: () => x$2,
	y: () => y$2
});
const MorphArray = PointArray;
function x$2(x) {
	return x == null ? this.bbox().x : this.move(x, this.bbox().y);
}
function y$2(y) {
	return y == null ? this.bbox().y : this.move(this.bbox().x, y);
}
function width$1(width) {
	const b = this.bbox();
	return width == null ? b.width : this.size(width, b.height);
}
function height$1(height) {
	const b = this.bbox();
	return height == null ? b.height : this.size(b.width, height);
}

//#endregion
//#region src/elements/Line.js
var Line = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("line", node), attrs);
	}
	array() {
		return new PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
	}
	move(x, y) {
		return this.attr(this.array().move(x, y).toLine());
	}
	plot(x1, y1, x2, y2) {
		if (x1 == null) return this.array();
		else if (typeof y1 !== "undefined") x1 = {
			x1,
			y1,
			x2,
			y2
		};
		else x1 = new PointArray(x1).toLine();
		return this.attr(x1);
	}
	size(width, height) {
		const p = proportionalSize(this, width, height);
		return this.attr(this.array().size(p.width, p.height).toLine());
	}
};
extend(Line, pointed_exports);
registerMethods({ Container: { line: wrapWithAttrCheck(function(...args) {
	return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [
		0,
		0,
		0,
		0
	]);
}) } });
register(Line, "Line");

//#endregion
//#region src/elements/Marker.js
var Marker = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("marker", node), attrs);
	}
	height(height) {
		return this.attr("markerHeight", height);
	}
	orient(orient) {
		return this.attr("orient", orient);
	}
	ref(x, y) {
		return this.attr("refX", x).attr("refY", y);
	}
	toString() {
		return "url(#" + this.id() + ")";
	}
	update(block) {
		this.clear();
		if (typeof block === "function") block.call(this, this);
		return this;
	}
	width(width) {
		return this.attr("markerWidth", width);
	}
};
registerMethods({
	Container: { marker(...args) {
		return this.defs().marker(...args);
	} },
	Defs: { marker: wrapWithAttrCheck(function(width, height, block) {
		return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr("orient", "auto").update(block);
	}) },
	marker: { marker(marker, width, height, block) {
		let attr = ["marker"];
		if (marker !== "all") attr.push(marker);
		attr = attr.join("-");
		marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
		return this.attr(attr, marker);
	} }
});
register(Marker, "Marker");

//#endregion
//#region src/animation/Controller.js
/***
Base Class
==========
The base stepper class that will be
***/
function makeSetterGetter(k, f) {
	return function(v) {
		if (v == null) return this[k];
		this[k] = v;
		if (f) f.call(this);
		return this;
	};
}
const easing = {
	"-": function(pos) {
		return pos;
	},
	"<>": function(pos) {
		return -Math.cos(pos * Math.PI) / 2 + .5;
	},
	">": function(pos) {
		return Math.sin(pos * Math.PI / 2);
	},
	"<": function(pos) {
		return -Math.cos(pos * Math.PI / 2) + 1;
	},
	bezier: function(x1, y1, x2, y2) {
		return function(t) {
			if (t < 0) if (x1 > 0) return y1 / x1 * t;
			else if (x2 > 0) return y2 / x2 * t;
			else return 0;
			else if (t > 1) if (x2 < 1) return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
			else if (x1 < 1) return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
			else return 1;
			else return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3;
		};
	},
	steps: function(steps, stepPosition = "end") {
		stepPosition = stepPosition.split("-").reverse()[0];
		let jumps = steps;
		if (stepPosition === "none") --jumps;
		else if (stepPosition === "both") ++jumps;
		return (t, beforeFlag = false) => {
			let step = Math.floor(t * steps);
			const jumping = t * step % 1 === 0;
			if (stepPosition === "start" || stepPosition === "both") ++step;
			if (beforeFlag && jumping) --step;
			if (t >= 0 && step < 0) step = 0;
			if (t <= 1 && step > jumps) step = jumps;
			return step / jumps;
		};
	}
};
var Stepper = class {
	done() {
		return false;
	}
};
/***
Easing Functions
================
***/
var Ease = class extends Stepper {
	constructor(fn = timeline.ease) {
		super();
		this.ease = easing[fn] || fn;
	}
	step(from, to, pos) {
		if (typeof from !== "number") return pos < 1 ? from : to;
		return from + (to - from) * this.ease(pos);
	}
};
/***
Controller Types
================
***/
var Controller = class extends Stepper {
	constructor(fn) {
		super();
		this.stepper = fn;
	}
	done(c) {
		return c.done;
	}
	step(current, target, dt, c) {
		return this.stepper(current, target, dt, c);
	}
};
function recalculate() {
	const duration = (this._duration || 500) / 1e3;
	const overshoot = this._overshoot || 0;
	const eps = 1e-10;
	const pi = Math.PI;
	const os = Math.log(overshoot / 100 + eps);
	const zeta = -os / Math.sqrt(pi * pi + os * os);
	const wn = 3.9 / (zeta * duration);
	this.d = 2 * zeta * wn;
	this.k = wn * wn;
}
var Spring = class extends Controller {
	constructor(duration = 500, overshoot = 0) {
		super();
		this.duration(duration).overshoot(overshoot);
	}
	step(current, target, dt, c) {
		if (typeof current === "string") return current;
		c.done = dt === Infinity;
		if (dt === Infinity) return target;
		if (dt === 0) return current;
		if (dt > 100) dt = 16;
		dt /= 1e3;
		const velocity = c.velocity || 0;
		const acceleration = -this.d * velocity - this.k * (current - target);
		const newPosition = current + velocity * dt + acceleration * dt * dt / 2;
		c.velocity = velocity + acceleration * dt;
		c.done = Math.abs(target - newPosition) + Math.abs(velocity) < .002;
		return c.done ? target : newPosition;
	}
};
extend(Spring, {
	duration: makeSetterGetter("_duration", recalculate),
	overshoot: makeSetterGetter("_overshoot", recalculate)
});
var PID = class extends Controller {
	constructor(p = .1, i = .01, d = 0, windup = 1e3) {
		super();
		this.p(p).i(i).d(d).windup(windup);
	}
	step(current, target, dt, c) {
		if (typeof current === "string") return current;
		c.done = dt === Infinity;
		if (dt === Infinity) return target;
		if (dt === 0) return current;
		const p = target - current;
		let i = (c.integral || 0) + p * dt;
		const d = (p - (c.error || 0)) / dt;
		const windup = this._windup;
		if (windup !== false) i = Math.max(-windup, Math.min(i, windup));
		c.error = p;
		c.integral = i;
		c.done = Math.abs(p) < .001;
		return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
	}
};
extend(PID, {
	windup: makeSetterGetter("_windup"),
	p: makeSetterGetter("P"),
	i: makeSetterGetter("I"),
	d: makeSetterGetter("D")
});

//#endregion
//#region src/utils/pathParser.js
const segmentParameters = {
	M: 2,
	L: 2,
	H: 1,
	V: 1,
	C: 6,
	S: 4,
	Q: 4,
	T: 2,
	A: 7,
	Z: 0
};
const pathHandlers = {
	M: function(c, p, p0) {
		p.x = p0.x = c[0];
		p.y = p0.y = c[1];
		return [
			"M",
			p.x,
			p.y
		];
	},
	L: function(c, p) {
		p.x = c[0];
		p.y = c[1];
		return [
			"L",
			c[0],
			c[1]
		];
	},
	H: function(c, p) {
		p.x = c[0];
		return ["H", c[0]];
	},
	V: function(c, p) {
		p.y = c[0];
		return ["V", c[0]];
	},
	C: function(c, p) {
		p.x = c[4];
		p.y = c[5];
		return [
			"C",
			c[0],
			c[1],
			c[2],
			c[3],
			c[4],
			c[5]
		];
	},
	S: function(c, p) {
		p.x = c[2];
		p.y = c[3];
		return [
			"S",
			c[0],
			c[1],
			c[2],
			c[3]
		];
	},
	Q: function(c, p) {
		p.x = c[2];
		p.y = c[3];
		return [
			"Q",
			c[0],
			c[1],
			c[2],
			c[3]
		];
	},
	T: function(c, p) {
		p.x = c[0];
		p.y = c[1];
		return [
			"T",
			c[0],
			c[1]
		];
	},
	Z: function(c, p, p0) {
		p.x = p0.x;
		p.y = p0.y;
		return ["Z"];
	},
	A: function(c, p) {
		p.x = c[5];
		p.y = c[6];
		return [
			"A",
			c[0],
			c[1],
			c[2],
			c[3],
			c[4],
			c[5],
			c[6]
		];
	}
};
const mlhvqtcsaz = "mlhvqtcsaz".split("");
for (let i = 0, il = mlhvqtcsaz.length; i < il; ++i) pathHandlers[mlhvqtcsaz[i]] = function(i) {
	return function(c, p, p0) {
		if (i === "H") c[0] = c[0] + p.x;
		else if (i === "V") c[0] = c[0] + p.y;
		else if (i === "A") {
			c[5] = c[5] + p.x;
			c[6] = c[6] + p.y;
		} else for (let j = 0, jl = c.length; j < jl; ++j) c[j] = c[j] + (j % 2 ? p.y : p.x);
		return pathHandlers[i](c, p, p0);
	};
}(mlhvqtcsaz[i].toUpperCase());
function makeAbsolut(parser) {
	return pathHandlers[parser.segment[0]](parser.segment.slice(1), parser.p, parser.p0);
}
function segmentComplete(parser) {
	return parser.segment.length && parser.segment.length - 1 === segmentParameters[parser.segment[0].toUpperCase()];
}
function startNewSegment(parser, token) {
	parser.inNumber && finalizeNumber(parser, false);
	const pathLetter = isPathLetter.test(token);
	if (pathLetter) parser.segment = [token];
	else {
		const lastCommand = parser.lastCommand;
		const small = lastCommand.toLowerCase();
		parser.segment = [small === "m" ? lastCommand === small ? "l" : "L" : lastCommand];
	}
	parser.inSegment = true;
	parser.lastCommand = parser.segment[0];
	return pathLetter;
}
function finalizeNumber(parser, inNumber) {
	if (!parser.inNumber) throw new Error("Parser Error");
	parser.number && parser.segment.push(parseFloat(parser.number));
	parser.inNumber = inNumber;
	parser.number = "";
	parser.pointSeen = false;
	parser.hasExponent = false;
	if (segmentComplete(parser)) finalizeSegment(parser);
}
function finalizeSegment(parser) {
	parser.inSegment = false;
	if (parser.absolute) parser.segment = makeAbsolut(parser);
	parser.segments.push(parser.segment);
}
function isArcFlag(parser) {
	if (!parser.segment.length) return false;
	const isArc = parser.segment[0].toUpperCase() === "A";
	const length = parser.segment.length;
	return isArc && (length === 4 || length === 5);
}
function isExponential(parser) {
	return parser.lastToken.toUpperCase() === "E";
}
const pathDelimiters = /* @__PURE__ */ new Set([
	" ",
	",",
	"	",
	"\n",
	"\r",
	"\f"
]);
function pathParser(d, toAbsolute = true) {
	let index = 0;
	let token = "";
	const parser = {
		segment: [],
		inNumber: false,
		number: "",
		lastToken: "",
		inSegment: false,
		segments: [],
		pointSeen: false,
		hasExponent: false,
		absolute: toAbsolute,
		p0: new Point(),
		p: new Point()
	};
	while (parser.lastToken = token, token = d.charAt(index++)) {
		if (!parser.inSegment) {
			if (startNewSegment(parser, token)) continue;
		}
		if (token === ".") {
			if (parser.pointSeen || parser.hasExponent) {
				finalizeNumber(parser, false);
				--index;
				continue;
			}
			parser.inNumber = true;
			parser.pointSeen = true;
			parser.number += token;
			continue;
		}
		if (!isNaN(parseInt(token))) {
			if (parser.number === "0" || isArcFlag(parser)) {
				parser.inNumber = true;
				parser.number = token;
				finalizeNumber(parser, true);
				continue;
			}
			parser.inNumber = true;
			parser.number += token;
			continue;
		}
		if (pathDelimiters.has(token)) {
			if (parser.inNumber) finalizeNumber(parser, false);
			continue;
		}
		if (token === "-" || token === "+") {
			if (parser.inNumber && !isExponential(parser)) {
				finalizeNumber(parser, false);
				--index;
				continue;
			}
			parser.number += token;
			parser.inNumber = true;
			continue;
		}
		if (token.toUpperCase() === "E") {
			parser.number += token;
			parser.hasExponent = true;
			continue;
		}
		if (isPathLetter.test(token)) {
			if (parser.inNumber) finalizeNumber(parser, false);
			else if (!segmentComplete(parser)) throw new Error("parser Error");
			else finalizeSegment(parser);
			--index;
		}
	}
	if (parser.inNumber) finalizeNumber(parser, false);
	if (parser.inSegment && segmentComplete(parser)) finalizeSegment(parser);
	return parser.segments;
}

//#endregion
//#region src/types/PathArray.js
function arrayToString(a) {
	let s = "";
	for (let i = 0, il = a.length; i < il; i++) {
		s += a[i][0];
		if (a[i][1] != null) {
			s += a[i][1];
			if (a[i][2] != null) {
				s += " ";
				s += a[i][2];
				if (a[i][3] != null) {
					s += " ";
					s += a[i][3];
					s += " ";
					s += a[i][4];
					if (a[i][5] != null) {
						s += " ";
						s += a[i][5];
						s += " ";
						s += a[i][6];
						if (a[i][7] != null) {
							s += " ";
							s += a[i][7];
						}
					}
				}
			}
		}
	}
	return s + " ";
}
var PathArray = class extends SVGArray {
	bbox() {
		parser().path.setAttribute("d", this.toString());
		return new Box(parser.nodes.path.getBBox());
	}
	move(x, y) {
		const box = this.bbox();
		x -= box.x;
		y -= box.y;
		if (!isNaN(x) && !isNaN(y)) for (let l, i = this.length - 1; i >= 0; i--) {
			l = this[i][0];
			if (l === "M" || l === "L" || l === "T") {
				this[i][1] += x;
				this[i][2] += y;
			} else if (l === "H") this[i][1] += x;
			else if (l === "V") this[i][1] += y;
			else if (l === "C" || l === "S" || l === "Q") {
				this[i][1] += x;
				this[i][2] += y;
				this[i][3] += x;
				this[i][4] += y;
				if (l === "C") {
					this[i][5] += x;
					this[i][6] += y;
				}
			} else if (l === "A") {
				this[i][6] += x;
				this[i][7] += y;
			}
		}
		return this;
	}
	parse(d = "M0 0") {
		if (Array.isArray(d)) d = Array.prototype.concat.apply([], d).toString();
		return pathParser(d);
	}
	size(width, height) {
		const box = this.bbox();
		let i, l;
		box.width = box.width === 0 ? 1 : box.width;
		box.height = box.height === 0 ? 1 : box.height;
		for (i = this.length - 1; i >= 0; i--) {
			l = this[i][0];
			if (l === "M" || l === "L" || l === "T") {
				this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
				this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
			} else if (l === "H") this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
			else if (l === "V") this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
			else if (l === "C" || l === "S" || l === "Q") {
				this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
				this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
				this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
				this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;
				if (l === "C") {
					this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
					this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
				}
			} else if (l === "A") {
				this[i][1] = this[i][1] * width / box.width;
				this[i][2] = this[i][2] * height / box.height;
				this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
				this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
			}
		}
		return this;
	}
	toString() {
		return arrayToString(this);
	}
};

//#endregion
//#region src/animation/Morphable.js
const getClassForType = (value) => {
	const type = typeof value;
	if (type === "number") return SVGNumber;
	else if (type === "string") if (Color.isColor(value)) return Color;
	else if (delimiter.test(value)) return isPathLetter.test(value) ? PathArray : SVGArray;
	else if (numberAndUnit.test(value)) return SVGNumber;
	else return NonMorphable;
	else if (morphableTypes.indexOf(value.constructor) > -1) return value.constructor;
	else if (Array.isArray(value)) return SVGArray;
	else if (type === "object") return ObjectBag;
	else return NonMorphable;
};
var Morphable = class {
	constructor(stepper) {
		this._stepper = stepper || new Ease("-");
		this._from = null;
		this._to = null;
		this._type = null;
		this._context = null;
		this._morphObj = null;
	}
	at(pos) {
		return this._morphObj.morph(this._from, this._to, pos, this._stepper, this._context);
	}
	done() {
		return this._context.map(this._stepper.done).reduce(function(last, curr) {
			return last && curr;
		}, true);
	}
	from(val) {
		if (val == null) return this._from;
		this._from = this._set(val);
		return this;
	}
	stepper(stepper) {
		if (stepper == null) return this._stepper;
		this._stepper = stepper;
		return this;
	}
	to(val) {
		if (val == null) return this._to;
		this._to = this._set(val);
		return this;
	}
	type(type) {
		if (type == null) return this._type;
		this._type = type;
		return this;
	}
	_set(value) {
		if (!this._type) this.type(getClassForType(value));
		let result = new this._type(value);
		if (this._type === Color) result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
		if (this._type === ObjectBag) result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
		result = result.toConsumable();
		this._morphObj = this._morphObj || new this._type();
		this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function(o) {
			o.done = true;
			return o;
		});
		return result;
	}
};
var NonMorphable = class {
	constructor(...args) {
		this.init(...args);
	}
	init(val) {
		val = Array.isArray(val) ? val[0] : val;
		this.value = val;
		return this;
	}
	toArray() {
		return [this.value];
	}
	valueOf() {
		return this.value;
	}
};
var TransformBag = class TransformBag {
	constructor(...args) {
		this.init(...args);
	}
	init(obj) {
		if (Array.isArray(obj)) obj = {
			scaleX: obj[0],
			scaleY: obj[1],
			shear: obj[2],
			rotate: obj[3],
			translateX: obj[4],
			translateY: obj[5],
			originX: obj[6],
			originY: obj[7]
		};
		Object.assign(this, TransformBag.defaults, obj);
		return this;
	}
	toArray() {
		const v = this;
		return [
			v.scaleX,
			v.scaleY,
			v.shear,
			v.rotate,
			v.translateX,
			v.translateY,
			v.originX,
			v.originY
		];
	}
};
TransformBag.defaults = {
	scaleX: 1,
	scaleY: 1,
	shear: 0,
	rotate: 0,
	translateX: 0,
	translateY: 0,
	originX: 0,
	originY: 0
};
const sortByKey = (a, b) => {
	return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};
var ObjectBag = class {
	constructor(...args) {
		this.init(...args);
	}
	align(other) {
		const values = this.values;
		for (let i = 0, il = values.length; i < il; ++i) {
			if (values[i + 1] === other[i + 1]) {
				if (values[i + 1] === Color && other[i + 7] !== values[i + 7]) {
					const space = other[i + 7];
					const color = new Color(this.values.splice(i + 3, 5))[space]().toArray();
					this.values.splice(i + 3, 0, ...color);
				}
				i += values[i + 2] + 2;
				continue;
			}
			if (!other[i + 1]) return this;
			const defaultObject = new other[i + 1]().toArray();
			const toDelete = values[i + 2] + 3;
			values.splice(i, toDelete, other[i], other[i + 1], other[i + 2], ...defaultObject);
			i += values[i + 2] + 2;
		}
		return this;
	}
	init(objOrArr) {
		this.values = [];
		if (Array.isArray(objOrArr)) {
			this.values = objOrArr.slice();
			return;
		}
		objOrArr = objOrArr || {};
		const entries = [];
		for (const i in objOrArr) {
			const Type = getClassForType(objOrArr[i]);
			const val = new Type(objOrArr[i]).toArray();
			entries.push([
				i,
				Type,
				val.length,
				...val
			]);
		}
		entries.sort(sortByKey);
		this.values = entries.reduce((last, curr) => last.concat(curr), []);
		return this;
	}
	toArray() {
		return this.values;
	}
	valueOf() {
		const obj = {};
		const arr = this.values;
		while (arr.length) {
			const key = arr.shift();
			const Type = arr.shift();
			const num = arr.shift();
			obj[key] = new Type(arr.splice(0, num));
		}
		return obj;
	}
};
const morphableTypes = [
	NonMorphable,
	TransformBag,
	ObjectBag
];
function registerMorphableType(type = []) {
	morphableTypes.push(...[].concat(type));
}
function makeMorphable() {
	extend(morphableTypes, {
		to(val) {
			return new Morphable().type(this.constructor).from(this.toArray()).to(val);
		},
		fromArray(arr) {
			this.init(arr);
			return this;
		},
		toConsumable() {
			return this.toArray();
		},
		morph(from, to, pos, stepper, context) {
			const mapper = function(i, index) {
				return stepper.step(i, to[index], pos, context[index], context);
			};
			return this.fromArray(from.map(mapper));
		}
	});
}

//#endregion
//#region src/elements/Path.js
var Path = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("path", node), attrs);
	}
	array() {
		return this._array || (this._array = new PathArray(this.attr("d")));
	}
	clear() {
		delete this._array;
		return this;
	}
	height(height) {
		return height == null ? this.bbox().height : this.size(this.bbox().width, height);
	}
	move(x, y) {
		return this.attr("d", this.array().move(x, y));
	}
	plot(d) {
		return d == null ? this.array() : this.clear().attr("d", typeof d === "string" ? d : this._array = new PathArray(d));
	}
	size(width, height) {
		const p = proportionalSize(this, width, height);
		return this.attr("d", this.array().size(p.width, p.height));
	}
	width(width) {
		return width == null ? this.bbox().width : this.size(width, this.bbox().height);
	}
	x(x) {
		return x == null ? this.bbox().x : this.move(x, this.bbox().y);
	}
	y(y) {
		return y == null ? this.bbox().y : this.move(this.bbox().x, y);
	}
};
Path.prototype.MorphArray = PathArray;
registerMethods({ Container: { path: wrapWithAttrCheck(function(d) {
	return this.put(new Path()).plot(d || new PathArray());
}) } });
register(Path, "Path");

//#endregion
//#region src/modules/core/poly.js
var poly_exports = /* @__PURE__ */ __exportAll({
	array: () => array,
	clear: () => clear,
	move: () => move$2,
	plot: () => plot,
	size: () => size$1
});
function array() {
	return this._array || (this._array = new PointArray(this.attr("points")));
}
function clear() {
	delete this._array;
	return this;
}
function move$2(x, y) {
	return this.attr("points", this.array().move(x, y));
}
function plot(p) {
	return p == null ? this.array() : this.clear().attr("points", typeof p === "string" ? p : this._array = new PointArray(p));
}
function size$1(width, height) {
	const p = proportionalSize(this, width, height);
	return this.attr("points", this.array().size(p.width, p.height));
}

//#endregion
//#region src/elements/Polygon.js
var Polygon = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("polygon", node), attrs);
	}
};
registerMethods({ Container: { polygon: wrapWithAttrCheck(function(p) {
	return this.put(new Polygon()).plot(p || new PointArray());
}) } });
extend(Polygon, pointed_exports);
extend(Polygon, poly_exports);
register(Polygon, "Polygon");

//#endregion
//#region src/elements/Polyline.js
var Polyline = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("polyline", node), attrs);
	}
};
registerMethods({ Container: { polyline: wrapWithAttrCheck(function(p) {
	return this.put(new Polyline()).plot(p || new PointArray());
}) } });
extend(Polyline, pointed_exports);
extend(Polyline, poly_exports);
register(Polyline, "Polyline");

//#endregion
//#region src/elements/Rect.js
var Rect = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("rect", node), attrs);
	}
};
extend(Rect, {
	rx,
	ry
});
registerMethods({ Container: { rect: wrapWithAttrCheck(function(width, height) {
	return this.put(new Rect()).size(width, height);
}) } });
register(Rect, "Rect");

//#endregion
//#region src/animation/Queue.js
var Queue = class {
	constructor() {
		this._first = null;
		this._last = null;
	}
	first() {
		return this._first && this._first.value;
	}
	last() {
		return this._last && this._last.value;
	}
	push(value) {
		const item = typeof value.next !== "undefined" ? value : {
			value,
			next: null,
			prev: null
		};
		if (this._last) {
			item.prev = this._last;
			this._last.next = item;
			this._last = item;
		} else {
			this._last = item;
			this._first = item;
		}
		return item;
	}
	remove(item) {
		if (item.prev) item.prev.next = item.next;
		if (item.next) item.next.prev = item.prev;
		if (item === this._last) this._last = item.prev;
		if (item === this._first) this._first = item.next;
		item.prev = null;
		item.next = null;
	}
	shift() {
		const remove = this._first;
		if (!remove) return null;
		this._first = remove.next;
		if (this._first) this._first.prev = null;
		this._last = this._first ? this._last : null;
		return remove.value;
	}
};

//#endregion
//#region src/animation/Animator.js
const Animator = {
	nextDraw: null,
	frames: new Queue(),
	timeouts: new Queue(),
	immediates: new Queue(),
	timer: () => globals.window.performance || globals.window.Date,
	frame(fn) {
		const node = Animator.frames.push({ run: fn });
		if (Animator.nextDraw === null) Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
		return node;
	},
	timeout(fn, delay) {
		delay = delay || 0;
		const time = Animator.timer().now() + delay;
		const node = Animator.timeouts.push({
			run: fn,
			time
		});
		if (Animator.nextDraw === null) Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
		return node;
	},
	immediate(fn) {
		const node = Animator.immediates.push(fn);
		if (Animator.nextDraw === null) Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
		return node;
	},
	cancelFrame(node) {
		node != null && Animator.frames.remove(node);
	},
	clearTimeout(node) {
		node != null && Animator.timeouts.remove(node);
	},
	cancelImmediate(node) {
		node != null && Animator.immediates.remove(node);
	},
	_draw(now) {
		try {
			let nextTimeout = null;
			const lastTimeout = Animator.timeouts.last();
			while (nextTimeout = Animator.timeouts.shift()) {
				if (now >= nextTimeout.time) nextTimeout.run();
				else Animator.timeouts.push(nextTimeout);
				if (nextTimeout === lastTimeout) break;
			}
			let nextFrame = null;
			const lastFrame = Animator.frames.last();
			while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) nextFrame.run(now);
			let nextImmediate = null;
			while (nextImmediate = Animator.immediates.shift()) nextImmediate();
		} finally {
			const pending = Animator.timeouts.first() || Animator.frames.first() || Animator.immediates.first();
			Animator.nextDraw = pending ? globals.window.requestAnimationFrame(Animator._draw) : null;
		}
	}
};

//#endregion
//#region src/animation/Timeline.js
const makeSchedule = function(runnerInfo) {
	const start = runnerInfo.start;
	const duration = runnerInfo.runner.duration();
	return {
		start,
		duration,
		end: start + duration,
		runner: runnerInfo.runner
	};
};
const defaultSource = function() {
	const w = globals.window;
	return (w.performance || w.Date).now();
};
var Timeline = class extends EventTarget {
	constructor(timeSource = defaultSource) {
		super();
		this._timeSource = timeSource;
		this.terminate();
	}
	active() {
		return !!this._nextFrame;
	}
	finish() {
		this._finishing = true;
		try {
			this.time(this.getEndTimeOfTimeline() + 1);
		} finally {
			this._finishing = false;
		}
		return this.pause();
	}
	getEndTime() {
		const lastRunnerInfo = this.getLastRunnerInfo();
		const lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
		return (lastRunnerInfo ? lastRunnerInfo.start : this._time) + lastDuration;
	}
	getEndTimeOfTimeline() {
		const endTimes = this._runners.map((i) => i.start + i.runner.duration());
		return Math.max(0, ...endTimes);
	}
	getLastRunnerInfo() {
		return this.getRunnerInfoById(this._lastRunnerId);
	}
	getRunnerInfoById(id) {
		return this._runners[this._runnerIds.indexOf(id)] || null;
	}
	pause() {
		this._paused = true;
		return this._continue();
	}
	persist(dtOrForever) {
		if (dtOrForever == null) return this._persist;
		this._persist = dtOrForever;
		return this;
	}
	play() {
		this._paused = false;
		return this.updateTime()._continue();
	}
	reverse(yes) {
		const currentSpeed = this.speed();
		if (yes == null) return this.speed(-currentSpeed);
		const positive = Math.abs(currentSpeed);
		return this.speed(yes ? -positive : positive);
	}
	schedule(runner, delay, when) {
		if (runner == null) return this._runners.map(makeSchedule);
		let absoluteStartTime = 0;
		const endTime = this.getEndTime();
		delay = delay || 0;
		if (when == null || when === "last" || when === "after") absoluteStartTime = endTime;
		else if (when === "absolute" || when === "start") {
			absoluteStartTime = delay;
			delay = 0;
		} else if (when === "now") absoluteStartTime = this._time;
		else if (when === "relative") {
			const runnerInfo = this.getRunnerInfoById(runner.id);
			if (runnerInfo) {
				absoluteStartTime = runnerInfo.start + delay;
				delay = 0;
			}
		} else if (when === "with-last") {
			const lastRunnerInfo = this.getLastRunnerInfo();
			absoluteStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
		} else throw new Error("Invalid value for the \"when\" parameter");
		runner.unschedule();
		runner.timeline(this);
		runner._retired = false;
		const persist = runner.persist();
		const runnerInfo = {
			persist: persist === null ? this._persist : persist,
			start: absoluteStartTime + delay,
			runner
		};
		this._lastRunnerId = runner.id;
		runner._runnerInfo = runnerInfo;
		this._runners.push(runnerInfo);
		this._runners.sort((a, b) => a.start - b.start);
		this._runnerIds = this._runners.map((info) => info.runner.id);
		this.updateTime()._continue();
		return this;
	}
	seek(dt) {
		return this.time(this._time + dt);
	}
	source(fn) {
		if (fn == null) return this._timeSource;
		this._timeSource = fn;
		return this;
	}
	speed(speed) {
		if (speed == null) return this._speed;
		this._speed = speed;
		return this;
	}
	stop() {
		this.time(0);
		return this.pause();
	}
	time(time) {
		if (time == null) return this._time;
		this._time = time;
		return this._continue(true);
	}
	unschedule(runner) {
		const index = this._runnerIds.indexOf(runner.id);
		if (index < 0) return this;
		this._runners.splice(index, 1);
		this._runnerIds.splice(index, 1);
		runner.timeline(null);
		runner._runnerInfo = null;
		runner._retired = true;
		return this;
	}
	updateTime() {
		if (!this.active()) this._lastSourceTime = this._timeSource();
		return this;
	}
	_continue(immediateStep = false) {
		Animator.cancelFrame(this._nextFrame);
		this._nextFrame = null;
		if (immediateStep) return this._stepImmediate();
		if (this._paused) return this;
		this._nextFrame = Animator.frame(this._step);
		return this;
	}
	_stepFn(immediateStep = false) {
		const generation = this._generation;
		const time = this._timeSource();
		let dtSource = time - this._lastSourceTime;
		if (immediateStep) dtSource = 0;
		const dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
		this._lastSourceTime = time;
		if (!immediateStep) {
			this._time += dtTime;
			this._time = this._time < 0 ? 0 : this._time;
		}
		this._lastStepTime = this._time;
		this.fire("time", this._time);
		const scheduled = this._runners.slice();
		for (let k = scheduled.length; k--;) {
			const runnerInfo = scheduled[k];
			if (runnerInfo.runner._runnerInfo !== runnerInfo) continue;
			const runner = runnerInfo.runner;
			if (this._time - runnerInfo.start < 0) runner.reset(true);
		}
		let runnersLeft = false;
		for (const runnerInfo of this._runners.slice()) {
			if (runnerInfo.runner._runnerInfo !== runnerInfo) continue;
			const runner = runnerInfo.runner;
			let dt = dtTime;
			const dtToStart = this._time - runnerInfo.start;
			if (dtToStart < 0) {
				runnersLeft = true;
				continue;
			} else if (dtToStart === 0) {
				runner.reset();
				runnersLeft = true;
				continue;
			} else if (dtToStart < dt) dt = dtToStart;
			if (!runner.active()) continue;
			const finished = (this._finishing && runner._isDeclarative ? runner.finish() : runner.step(dt)).done;
			if (runner._runnerInfo !== runnerInfo) continue;
			if (!finished) runnersLeft = true;
			else if (runnerInfo.persist !== true) {
				if (runner.duration() - runner.time() + this._time + runnerInfo.persist <= this._time) runner.unschedule();
			}
		}
		if (generation !== this._generation) return this;
		if (!runnersLeft) runnersLeft = this._runners.some(({ start, runner }) => start >= this._time || runner.active() && !runner.done);
		if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) this._continue();
		else {
			this.pause();
			this.fire("finished");
		}
		return this;
	}
	terminate() {
		Animator.cancelFrame(this._nextFrame);
		this._generation = (this._generation || 0) + 1;
		this._startTime = 0;
		this._speed = 1;
		this._persist = 0;
		for (const { runner } of this._runners || []) {
			runner._retired = true;
			runner._runnerInfo = null;
		}
		this._nextFrame = null;
		this._paused = true;
		this._finishing = false;
		this._runners = [];
		this._runnerIds = [];
		this._lastRunnerId = -1;
		this._time = 0;
		this._lastSourceTime = 0;
		this._lastStepTime = 0;
		this._step = this._stepFn.bind(this, false);
		this._stepImmediate = this._stepFn.bind(this, true);
	}
};
registerMethods({ Element: { timeline: function(timeline) {
	if (timeline == null) {
		this._timeline = this._timeline || new Timeline();
		return this._timeline;
	} else {
		this._timeline = timeline;
		return this;
	}
} } });

//#endregion
//#region src/animation/Runner.js
var Runner = class Runner extends EventTarget {
	constructor(options) {
		super();
		this.id = Runner.id++;
		options = options == null ? timeline.duration : options;
		options = typeof options === "function" ? new Controller(options) : options;
		this._element = null;
		this._timeline = null;
		this._runnerInfo = null;
		this.done = false;
		this._queue = [];
		this._duration = typeof options === "number" && options;
		this._isDeclarative = options instanceof Controller;
		this._stepper = this._isDeclarative ? options : new Ease();
		this._history = {};
		this.enabled = true;
		this._time = 0;
		this._lastTime = 0;
		this._reseted = true;
		this.transforms = new Matrix();
		this._isAbsoluteTransform = false;
		this._hasTransform = false;
		this._transformInitialised = false;
		this._transformActive = false;
		this._retired = false;
		this._reverse = false;
		this._swing = false;
		this._wait = 0;
		this._times = 1;
		this._persist = this._isDeclarative ? true : null;
	}
	static sanitise(duration, delay, when) {
		let times = 1;
		let swing = false;
		let wait = 0;
		duration = duration ?? timeline.duration;
		delay = delay ?? timeline.delay;
		when = when || "last";
		if (typeof duration === "object" && !(duration instanceof Stepper)) {
			delay = duration.delay ?? delay;
			when = duration.when ?? when;
			swing = duration.swing || swing;
			times = duration.times ?? times;
			wait = duration.wait ?? wait;
			duration = duration.duration ?? timeline.duration;
		}
		return {
			duration,
			delay,
			swing,
			times,
			wait,
			when
		};
	}
	active(enabled) {
		if (enabled == null) return this.enabled;
		this.enabled = enabled;
		return this;
	}
	addTransform(transform) {
		this.transforms.lmultiplyO(transform);
		this._transformInitialised = true;
		this._transformActive = true;
		return this;
	}
	after(fn) {
		return this.on("finished", fn);
	}
	animate(duration, delay, when) {
		const o = Runner.sanitise(duration, delay, when);
		const runner = new Runner(o.duration);
		if (this._timeline) runner.timeline(this._timeline);
		if (this._element) runner.element(this._element);
		return runner.loop(o).schedule(o.delay, o.when);
	}
	clearTransform() {
		this.transforms = new Matrix();
		return this;
	}
	delay(delay) {
		return this.animate(0, delay);
	}
	duration() {
		return this._times * (this._wait + this._duration) - this._wait;
	}
	during(fn) {
		return this.queue(null, fn);
	}
	ease(fn) {
		this._stepper = new Ease(fn);
		return this;
	}
	element(element) {
		if (element == null) return this._element;
		this._element = element;
		element._prepareRunner();
		return this;
	}
	finish() {
		if (!this._isDeclarative) return this.time(this.duration());
		const time = this._time;
		this.step(Infinity);
		this._time = time;
		return this;
	}
	loop(times, swing, wait) {
		if (typeof times === "object") {
			swing = times.swing;
			wait = times.wait;
			times = times.times;
		}
		this._times = times || Infinity;
		this._swing = swing || false;
		this._wait = wait || 0;
		if (this._times === true) this._times = Infinity;
		return this;
	}
	loops(p) {
		const loopDuration = this._duration + this._wait;
		if (p == null) {
			const loopsDone = Math.floor(this._time / loopDuration);
			const position = (this._time - loopsDone * loopDuration) / this._duration;
			return Math.min(loopsDone + position, this._times);
		}
		const whole = Math.floor(p);
		const partial = p % 1;
		const time = loopDuration * whole + this._duration * partial;
		return this.time(time);
	}
	persist(dtOrForever) {
		if (dtOrForever == null) return this._persist;
		this._persist = dtOrForever;
		return this;
	}
	position(p) {
		const x = this._time;
		const d = this._duration;
		const w = this._wait;
		const t = this._times;
		const s = this._swing;
		const r = this._reverse;
		let position;
		if (p == null) {
			const f = function(x) {
				const swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
				const backwards = swinging && !r || !swinging && r;
				const uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
				return Math.max(Math.min(uncliped, 1), 0);
			};
			const endTime = t * (w + d) - w;
			position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
			return position;
		}
		const loopsDone = Math.floor(this.loops());
		const swingForward = s && loopsDone % 2 === 0;
		position = loopsDone + (swingForward && !r || r && swingForward ? p : 1 - p);
		return this.loops(position);
	}
	progress(p) {
		if (p == null) return Math.min(1, this._time / this.duration());
		return this.time(p * this.duration());
	}
	queue(initFn, runFn, retargetFn, isTransform) {
		if (this._isDeclarative) this.done = false;
		this._queue.push({
			initialiser: initFn || noop,
			runner: runFn || noop,
			retarget: retargetFn,
			isTransform,
			initialised: false,
			finished: false
		});
		this.timeline() && this.timeline()._continue();
		return this;
	}
	reset(deactivateTransform = false) {
		if (this._reseted) {
			const transformActive = !deactivateTransform && this._hasTransform && this.position() !== 0;
			if (transformActive && !this._transformInitialised) {
				this.step(0);
				this._reseted = true;
				return this;
			}
			if (transformActive !== this._transformActive) {
				this._transformActive = transformActive;
				this._element && this._element._addRunner(this);
			}
			return this;
		}
		if (!this._reseted) {
			this.time(0);
			this._reseted = true;
		}
		if (deactivateTransform && this._transformActive) {
			this._transformActive = false;
			this._element && this._element._addRunner(this);
		}
		return this;
	}
	reverse(reverse) {
		this._reverse = reverse == null ? !this._reverse : reverse;
		return this;
	}
	schedule(timeline, delay, when) {
		if (!(timeline instanceof Timeline)) {
			when = delay;
			delay = timeline;
			timeline = this.timeline();
		}
		if (!timeline) throw Error("Runner cannot be scheduled without timeline");
		timeline.schedule(this, delay, when);
		return this;
	}
	step(dt) {
		if (!this.enabled) return this;
		const wasDone = this.done;
		dt = dt == null ? 16 : dt;
		this._time += dt;
		const position = this.position();
		const running = this._lastPosition !== position && this._time >= 0;
		this._lastPosition = position;
		const duration = this.duration();
		const justStarted = this._lastTime <= 0 && this._time > 0;
		this._lastTime = this._time;
		if (justStarted) this.fire("start", this);
		const declarative = this._isDeclarative;
		this.done = !declarative && this._time >= duration;
		this._reseted = false;
		const transformActive = this._hasTransform && (this._time > 0 || position !== 0);
		this._transformActive = transformActive;
		let converged = false;
		if (running || declarative) {
			this._initialise(running);
			this.transforms = new Matrix();
			converged = this._run(declarative ? dt : position);
			this._transformActive = transformActive;
			this.fire("step", this);
		}
		this.done = this.done || converged && declarative;
		if (this.done && !wasDone) this.fire("finished", this);
		return this;
	}
	time(time) {
		if (time == null) return this._time;
		const dt = time - this._time;
		this.step(dt);
		return this;
	}
	timeline(timeline) {
		if (typeof timeline === "undefined") return this._timeline;
		this._timeline = timeline;
		return this;
	}
	unschedule() {
		const timeline = this.timeline();
		timeline && timeline.unschedule(this);
		return this;
	}
	_initialise(running) {
		if (!running && !this._isDeclarative) return;
		for (let i = 0, len = this._queue.length; i < len; ++i) {
			const current = this._queue[i];
			const needsIt = this._isDeclarative || !current.initialised && running;
			running = !current.finished;
			if (needsIt && running) {
				current.initialiser.call(this);
				current.initialised = true;
			}
		}
	}
	_rememberMorpher(method, morpher) {
		this._history[method] = {
			morpher,
			caller: this._queue[this._queue.length - 1]
		};
		if (this._isDeclarative) {
			const timeline = this.timeline();
			timeline && timeline.play();
		}
	}
	_run(positionOrDt) {
		let allfinished = true;
		for (let i = 0, len = this._queue.length; i < len; ++i) {
			const current = this._queue[i];
			if (this._isDeclarative && current.finished && !current.isTransform) continue;
			const converged = current.runner.call(this, positionOrDt);
			current.finished = current.finished || converged === true;
			allfinished = allfinished && current.finished;
		}
		return allfinished;
	}
	_tryRetarget(method, target, extra) {
		if (this._history[method]) {
			if (!this._history[method].caller.initialised) {
				const index = this._queue.indexOf(this._history[method].caller);
				this._queue.splice(index, 1);
				return false;
			}
			if (this._history[method].caller.retarget) this._history[method].caller.retarget.call(this, target, extra);
			else this._history[method].morpher.to(target);
			this._history[method].caller.finished = false;
			if (this._isDeclarative) this.done = false;
			const timeline = this.timeline();
			timeline && timeline.play();
			return true;
		}
		return false;
	}
};
Runner.id = 0;
var FakeRunner = class {
	constructor(transforms = new Matrix(), id = -1, done = true, isAbsoluteTransform = false) {
		this.transforms = transforms;
		this.id = id;
		this.done = done;
		this._isAbsoluteTransform = isAbsoluteTransform;
		this._transformActive = true;
		this._retired = true;
	}
};
extend([Runner, FakeRunner], { mergeWith(runner) {
	return new FakeRunner(this._isAbsoluteTransform ? this.transforms : runner.transforms.lmultiply(this.transforms), runner.id, true, runner._isAbsoluteTransform || this._isAbsoluteTransform);
} });
const lmultiply = (last, curr) => last.lmultiplyO(curr);
const getRunnerTransform = (runner) => runner.transforms;
const isActiveTransform = (runner) => runner._transformActive;
function activeTransformRunners(runners) {
	const activeRunners = runners.filter(isActiveTransform);
	let firstRunner = 0;
	for (let i = 0; i < activeRunners.length; ++i) if (activeRunners[i]._isAbsoluteTransform) firstRunner = i;
	return activeRunners.slice(firstRunner);
}
function mergeTransforms() {
	const netTransform = activeTransformRunners(this._transformationRunners.runners).map(getRunnerTransform).reduce(lmultiply, new Matrix());
	this.transform(netTransform);
	this._transformationRunners.merge();
	if (this._transformationRunners.length() === 1) this._frameId = null;
}
var RunnerArray = class {
	constructor() {
		this.runners = [];
	}
	add(runner) {
		var _context;
		if ((0, import_includes.default)(_context = this.runners).call(_context, runner)) return;
		this.runners.push(runner);
		return this;
	}
	edit(id, newRunner) {
		const index = this.runners.findIndex((runner) => runner.id === id);
		if (index >= 0) this.runners.splice(index, 1, newRunner);
		return this;
	}
	getByID(id) {
		return this.runners.find((runner) => runner.id === id);
	}
	length() {
		return this.runners.length;
	}
	merge() {
		let lastRunner = null;
		for (let i = 0; i < this.runners.length; ++i) {
			const runner = this.runners[i];
			if (lastRunner && runner.done && lastRunner.done && runner._retired && lastRunner._retired) {
				this.remove(runner.id);
				const newRunner = runner.mergeWith(lastRunner);
				this.edit(lastRunner.id, newRunner);
				lastRunner = newRunner;
				--i;
			} else lastRunner = runner;
		}
		return this;
	}
	remove(id) {
		const index = this.runners.findIndex((runner) => runner.id === id);
		if (index >= 0) this.runners.splice(index, 1);
		return this;
	}
};
registerMethods({ Element: {
	animate(duration, delay, when) {
		const o = Runner.sanitise(duration, delay, when);
		const timeline = this.timeline();
		return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
	},
	delay(by, when) {
		return this.animate(0, by, when);
	},
	_currentTransform(current) {
		const runners = this._transformationRunners.runners;
		const currentIndex = runners.indexOf(current);
		return activeTransformRunners(runners.slice(0, currentIndex + 1)).map(getRunnerTransform).reduce(lmultiply, new Matrix());
	},
	_addRunner(runner) {
		if (this._transformationRunners.length() === 1 && this._transformationRunners.runners[0].id === -1) this._transformationRunners.runners[0].transforms = new Matrix(this);
		this._transformationRunners.add(runner);
		Animator.cancelImmediate(this._frameId);
		this._frameId = Animator.immediate(mergeTransforms.bind(this));
	},
	_prepareRunner() {
		if (this._frameId == null) this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
	}
} });
const difference = (a, b) => a.filter((x) => !(0, import_includes.default)(b).call(b, x));
extend(Runner, {
	attr(a, v) {
		return this.styleAttr("attr", a, v);
	},
	css(s, v) {
		return this.styleAttr("css", s, v);
	},
	styleAttr(type, nameOrAttrs, val) {
		if (typeof nameOrAttrs === "string") return this.styleAttr(type, { [nameOrAttrs]: val });
		const attrs = nameOrAttrs;
		const history = this._history[type];
		if (history && !history.caller.initialised && history.caller.retarget) {
			history.caller.retarget.call(this, attrs);
			return this;
		}
		if (this._tryRetarget(type, attrs)) return this;
		let morpher = new Morphable(this._stepper).to(attrs);
		let keys = Object.keys(attrs);
		this.queue(function() {
			morpher = morpher.from(this.element()[type](keys));
		}, function(pos) {
			this.element()[type](morpher.at(pos).valueOf());
			return morpher.done();
		}, function(newToAttrs) {
			const differences = difference(Object.keys(newToAttrs), keys);
			if (differences.length && morpher.from() != null) {
				const addedFromAttrs = this.element()[type](differences);
				const oldFromAttrs = new ObjectBag(morpher.from()).valueOf();
				Object.assign(oldFromAttrs, addedFromAttrs);
				morpher.from(oldFromAttrs);
			}
			const mergedToAttrs = new ObjectBag(morpher.to()).valueOf();
			Object.assign(mergedToAttrs, newToAttrs);
			morpher.to(mergedToAttrs);
			keys = Object.keys(mergedToAttrs);
		});
		this._rememberMorpher(type, morpher);
		return this;
	},
	zoom(level, point) {
		if (this._tryRetarget("zoom", level, point)) return this;
		let morpher = new Morphable(this._stepper).to(new SVGNumber(level));
		this.queue(function() {
			morpher = morpher.from(this.element().zoom());
		}, function(pos) {
			this.element().zoom(morpher.at(pos), point);
			return morpher.done();
		}, function(newLevel, newPoint) {
			point = newPoint;
			morpher.to(newLevel);
		});
		this._rememberMorpher("zoom", morpher);
		return this;
	},
	/**
	** absolute transformations
	**/
	transform(transforms, relative, affine) {
		relative = transforms.relative || relative;
		this._hasTransform = true;
		this._isAbsoluteTransform = this._isAbsoluteTransform || !relative;
		if (this._isDeclarative && !relative && this._tryRetarget("transform", transforms)) return this;
		const isMatrix = Matrix.isMatrixLike(transforms);
		affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix;
		const morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
		const matrixMorpher = affine ? new Morphable(this._stepper).type(Matrix) : morpher;
		let origin;
		let element;
		let current;
		let currentAngle;
		let startTransform;
		function setup() {
			element = element || this.element();
			origin = origin || getOrigin(transforms, element);
			startTransform = new Matrix(relative ? void 0 : element);
			element._addRunner(this);
		}
		function run(pos) {
			if (!relative) this.clearTransform();
			const { x, y } = new Point(origin).transform(element._currentTransform(this));
			const targetTransforms = {
				...transforms,
				origin: [x, y]
			};
			if (targetTransforms.relative === true) delete targetTransforms.relative;
			let target = new Matrix(targetTransforms);
			let start = this._isDeclarative && current ? current : startTransform;
			let activeMorpher = morpher;
			if (affine) {
				const targetParameters = target.decompose(x, y);
				const startParameters = start.decompose(x, y);
				if (!new TransformBag(targetParameters).toArray().concat(new TransformBag(startParameters).toArray()).every(Number.isFinite)) activeMorpher = matrixMorpher;
				else {
					target = targetParameters;
					start = startParameters;
					const rTarget = target.rotate;
					const rCurrent = start.rotate;
					const possibilities = [
						rTarget - 360,
						rTarget,
						rTarget + 360
					];
					const distances = possibilities.map((a) => Math.abs(a - rCurrent));
					const shortest = Math.min(...distances);
					const index = distances.indexOf(shortest);
					target.rotate = possibilities[index];
				}
			}
			if (relative && activeMorpher === morpher) {
				if (!isMatrix) target.rotate = transforms.rotate || 0;
				if (this._isDeclarative && currentAngle) start.rotate = currentAngle;
			}
			activeMorpher.from(start);
			activeMorpher.to(target);
			const affineParameters = activeMorpher.at(pos);
			currentAngle = affineParameters.rotate;
			current = new Matrix(affineParameters);
			this.addTransform(current);
			element._addRunner(this);
			return activeMorpher.done();
		}
		function retarget(newTransforms) {
			origin = getOrigin(newTransforms, element);
			transforms = { ...newTransforms };
		}
		this.queue(setup, run, retarget, true);
		this._isDeclarative && this._rememberMorpher("transform", morpher);
		return this;
	},
	x(x) {
		return this._queueNumber("x", x);
	},
	y(y) {
		return this._queueNumber("y", y);
	},
	ax(x) {
		return this._queueNumber("ax", x);
	},
	ay(y) {
		return this._queueNumber("ay", y);
	},
	dx(x = 0) {
		return this._queueNumberDelta("x", x);
	},
	dy(y = 0) {
		return this._queueNumberDelta("y", y);
	},
	dmove(x, y) {
		return this.dx(x).dy(y);
	},
	_queueNumberDelta(method, to) {
		to = new SVGNumber(to);
		if (this._tryRetarget(method, to)) return this;
		const morpher = new Morphable(this._stepper).to(to);
		let from = null;
		this.queue(function() {
			from = this.element()[method]();
			morpher.from(from);
			morpher.to(from + to);
		}, function(pos) {
			this.element()[method](morpher.at(pos));
			return morpher.done();
		}, function(newTo) {
			morpher.to(from + new SVGNumber(newTo));
		});
		this._rememberMorpher(method, morpher);
		return this;
	},
	_queueObject(method, to) {
		if (this._tryRetarget(method, to)) return this;
		const morpher = new Morphable(this._stepper).to(to);
		this.queue(function() {
			morpher.from(this.element()[method]());
		}, function(pos) {
			this.element()[method](morpher.at(pos));
			return morpher.done();
		});
		this._rememberMorpher(method, morpher);
		return this;
	},
	_queueNumber(method, value) {
		return this._queueObject(method, new SVGNumber(value));
	},
	cx(x) {
		return this._queueNumber("cx", x);
	},
	cy(y) {
		return this._queueNumber("cy", y);
	},
	move(x, y) {
		return this.x(x).y(y);
	},
	amove(x, y) {
		return this.ax(x).ay(y);
	},
	center(x, y) {
		return this.cx(x).cy(y);
	},
	size(width, height) {
		const size = proportionalSize(this._element, width, height);
		return this.width(size.width).height(size.height);
	},
	width(width) {
		return this._queueNumber("width", width);
	},
	height(height) {
		return this._queueNumber("height", height);
	},
	plot(a, b, c, d) {
		if (arguments.length === 4) return this.plot([
			a,
			b,
			c,
			d
		]);
		if (this._tryRetarget("plot", a)) return this;
		const morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
		this.queue(function() {
			morpher.from(this._element.array());
		}, function(pos) {
			this._element.plot(morpher.at(pos));
			return morpher.done();
		});
		this._rememberMorpher("plot", morpher);
		return this;
	},
	leading(value) {
		return this._queueNumber("leading", value);
	},
	viewbox(x, y, width, height) {
		return this._queueObject("viewbox", new Box(x, y, width, height));
	},
	update(o) {
		if (typeof o !== "object") return this.update({
			offset: arguments[0],
			color: arguments[1],
			opacity: arguments[2]
		});
		if (o.opacity != null) this.attr("stop-opacity", o.opacity);
		if (o.color != null) this.attr("stop-color", o.color);
		if (o.offset != null) this.attr("offset", o.offset);
		return this;
	}
});
extend(Runner, {
	rx,
	ry,
	from,
	to
});
register(Runner, "Runner");

//#endregion
//#region src/elements/Svg.js
var Svg = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("svg", node), attrs);
		this.namespace();
	}
	defs() {
		if (!this.isRoot()) return this.root().defs();
		return adopt(this.node.querySelector("defs")) || this.put(new Defs());
	}
	isRoot() {
		return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== "#document-fragment";
	}
	namespace() {
		if (!this.isRoot()) return this.root().namespace();
		return this.attr({
			xmlns: svg,
			version: "1.1"
		}).attr("xmlns:xlink", xlink, xmlns);
	}
	removeNamespace() {
		return this.attr({
			xmlns: null,
			version: null
		}).attr("xmlns:xlink", null, xmlns).attr("xmlns:svgjs", null, xmlns);
	}
	root() {
		if (this.isRoot()) return this;
		return super.root();
	}
};
registerMethods({ Container: { nested: wrapWithAttrCheck(function() {
	return this.put(new Svg());
}) } });
register(Svg, "Svg", true);

//#endregion
//#region src/elements/Symbol.js
var Symbol$1 = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("symbol", node), attrs);
	}
};
registerMethods({ Container: { symbol: wrapWithAttrCheck(function() {
	return this.put(new Symbol$1());
}) } });
register(Symbol$1, "Symbol");

//#endregion
//#region src/modules/core/textable.js
var textable_exports = /* @__PURE__ */ __exportAll({
	amove: () => amove,
	ax: () => ax,
	ay: () => ay,
	build: () => build,
	center: () => center,
	cx: () => cx,
	cy: () => cy,
	length: () => length,
	move: () => move$1,
	plain: () => plain,
	x: () => x$1,
	y: () => y$1
});
function plain(text) {
	if (this._build === false) this.clear();
	this.node.appendChild(globals.document.createTextNode(text));
	return this;
}
function length() {
	return this.node.getComputedTextLength();
}
function x$1(x, box = this.bbox()) {
	if (x == null) return box.x;
	return this.attr("x", this.attr("x") + x - box.x);
}
function y$1(y, box = this.bbox()) {
	if (y == null) return box.y;
	return this.attr("y", this.attr("y") + y - box.y);
}
function move$1(x, y, box = this.bbox()) {
	return this.x(x, box).y(y, box);
}
function cx(x, box = this.bbox()) {
	if (x == null) return box.cx;
	return this.attr("x", this.attr("x") + x - box.cx);
}
function cy(y, box = this.bbox()) {
	if (y == null) return box.cy;
	return this.attr("y", this.attr("y") + y - box.cy);
}
function center(x, y, box = this.bbox()) {
	return this.cx(x, box).cy(y, box);
}
function ax(x) {
	return this.attr("x", x);
}
function ay(y) {
	return this.attr("y", y);
}
function amove(x, y) {
	return this.ax(x).ay(y);
}
function build(build) {
	this._build = !!build;
	return this;
}

//#endregion
//#region src/elements/Text.js
var Text = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("text", node), attrs);
		this.dom.leading = this.dom.leading ?? new SVGNumber(1.3);
		this._rebuild = true;
		this._build = false;
	}
	leading(value) {
		if (value == null) return this.dom.leading;
		this.dom.leading = new SVGNumber(value);
		return this.rebuild();
	}
	rebuild(rebuild) {
		if (typeof rebuild === "boolean") this._rebuild = rebuild;
		if (this._rebuild) {
			const self = this;
			let blankLineOffset = 0;
			const leading = this.dom.leading;
			this.each(function(i) {
				if (isDescriptive(this.node)) return;
				const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue("font-size");
				const dy = leading * new SVGNumber(fontSize);
				if (this.dom.newLined) {
					this.attr("x", self.attr("x"));
					if (this.text() === "\n") blankLineOffset += dy;
					else {
						this.attr("dy", i ? dy + blankLineOffset : 0);
						blankLineOffset = 0;
					}
				}
			});
			this.fire("rebuild");
		}
		return this;
	}
	setData(o) {
		this.dom = o;
		this.dom.leading = new SVGNumber(o.leading || 1.3);
		return this;
	}
	writeDataToDom() {
		return super.writeDataToDom({ leading: 1.3 });
	}
	text(text) {
		if (text === void 0) {
			const children = this.node.childNodes;
			let firstLine = 0;
			text = "";
			for (let i = 0, len = children.length; i < len; ++i) {
				if (children[i].nodeName === "textPath" || isDescriptive(children[i])) {
					if (i === 0) firstLine = i + 1;
					continue;
				}
				if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) text += "\n";
				text += children[i].textContent;
			}
			return text;
		}
		this.clear().build(true);
		if (typeof text === "function") text.call(this, this);
		else {
			text = (text + "").split("\n");
			for (let j = 0, jl = text.length; j < jl; j++) this.newLine(text[j]);
		}
		return this.build(false).rebuild();
	}
};
extend(Text, textable_exports);
registerMethods({ Container: {
	text: wrapWithAttrCheck(function(text = "") {
		return this.put(new Text()).text(text);
	}),
	plain: wrapWithAttrCheck(function(text = "") {
		return this.put(new Text()).plain(text);
	})
} });
register(Text, "Text");

//#endregion
//#region src/elements/Tspan.js
var Tspan = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("tspan", node), attrs);
		this._build = false;
	}
	dx(dx) {
		return this.attr("dx", dx);
	}
	dy(dy) {
		return this.attr("dy", dy);
	}
	newLine() {
		this.dom.newLined = true;
		const text = this.parent();
		if (!(text instanceof Text)) return this;
		const i = text.index(this);
		const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue("font-size");
		const dy = text.dom.leading * new SVGNumber(fontSize);
		return this.dy(i ? dy : 0).attr("x", text.x());
	}
	text(text) {
		if (text == null) return this.node.textContent + (this.dom.newLined ? "\n" : "");
		if (typeof text === "function") {
			this.clear().build(true);
			text.call(this, this);
			this.build(false);
		} else this.plain(text);
		return this;
	}
};
extend(Tspan, textable_exports);
registerMethods({
	Tspan: { tspan: wrapWithAttrCheck(function(text = "") {
		const tspan = new Tspan();
		if (!this._build) this.clear();
		return this.put(tspan).text(text);
	}) },
	Text: { newLine: function(text = "") {
		return this.tspan(text).newLine();
	} }
});
register(Tspan, "Tspan");

//#endregion
//#region src/elements/Circle.js
var Circle = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("circle", node), attrs);
	}
	radius(r) {
		return this.attr("r", r);
	}
	rx(rx) {
		return this.attr("r", rx);
	}
	ry(ry) {
		return this.rx(ry);
	}
	size(size) {
		return this.radius(new SVGNumber(size).divide(2));
	}
};
extend(Circle, {
	x: x$3,
	y: y$3,
	cx: cx$1,
	cy: cy$1,
	width: width$2,
	height: height$2
});
registerMethods({ Container: { circle: wrapWithAttrCheck(function(size = 0) {
	return this.put(new Circle()).size(size).move(0, 0);
}) } });
register(Circle, "Circle");

//#endregion
//#region src/elements/ClipPath.js
var ClipPath = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("clipPath", node), attrs);
	}
	remove() {
		this.targets().forEach(function(el) {
			el.unclip();
		});
		return super.remove();
	}
	targets() {
		return findReferences(this.node, "clip-path");
	}
};
registerMethods({
	Container: { clip: wrapWithAttrCheck(function() {
		return this.defs().put(new ClipPath());
	}) },
	Element: {
		clipper() {
			return this.reference("clip-path");
		},
		clipWith(element) {
			const clipper = element instanceof ClipPath ? element : this.parent().clip().add(element);
			return this.attr("clip-path", "url(#" + clipper.id() + ")");
		},
		unclip() {
			return this.attr("clip-path", null);
		}
	}
});
register(ClipPath, "ClipPath");

//#endregion
//#region src/elements/ForeignObject.js
var ForeignObject = class extends Element {
	constructor(node, attrs = node) {
		super(nodeOrNew("foreignObject", node), attrs);
	}
};
registerMethods({ Container: { foreignObject: wrapWithAttrCheck(function(width, height) {
	return this.put(new ForeignObject()).size(width, height);
}) } });
register(ForeignObject, "ForeignObject");

//#endregion
//#region src/modules/core/containerGeometry.js
var containerGeometry_exports = /* @__PURE__ */ __exportAll({
	dmove: () => dmove,
	dx: () => dx,
	dy: () => dy,
	height: () => height,
	move: () => move,
	size: () => size,
	width: () => width,
	x: () => x,
	y: () => y
});
function dmove(dx, dy) {
	this.children().forEach((child) => {
		let bbox;
		try {
			bbox = child.node instanceof getWindow().SVGSVGElement ? new Box(child.attr([
				"x",
				"y",
				"width",
				"height"
			])) : child.bbox();
		} catch (e) {
			return;
		}
		const m = new Matrix(child);
		const matrix = m.translate(dx, dy).transform(m.inverse());
		const p = new Point(bbox.x, bbox.y).transform(matrix);
		child.dmove(p.x - bbox.x, p.y - bbox.y);
	});
	return this;
}
function dx(dx) {
	return this.dmove(dx, 0);
}
function dy(dy) {
	return this.dmove(0, dy);
}
function height(height, box = this.bbox()) {
	if (height == null) return box.height;
	return this.size(box.width, height, box);
}
function move(x = 0, y = 0, box = this.bbox()) {
	const dx = x - box.x;
	const dy = y - box.y;
	return this.dmove(dx, dy);
}
function size(width, height, box = this.bbox()) {
	const p = proportionalSize(this, width, height, box);
	const scaleX = p.width / box.width;
	const scaleY = p.height / box.height;
	this.children().forEach((child) => {
		const o = new Point(box).transform(new Matrix(child).inverse());
		child.scale(scaleX, scaleY, o.x, o.y);
	});
	return this;
}
function width(width, box = this.bbox()) {
	if (width == null) return box.width;
	return this.size(width, box.height, box);
}
function x(x, box = this.bbox()) {
	if (x == null) return box.x;
	return this.move(x, box.y, box);
}
function y(y, box = this.bbox()) {
	if (y == null) return box.y;
	return this.move(box.x, y, box);
}

//#endregion
//#region src/elements/G.js
var G = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("g", node), attrs);
	}
};
extend(G, containerGeometry_exports);
registerMethods({ Container: { group: wrapWithAttrCheck(function() {
	return this.put(new G());
}) } });
register(G, "G");

//#endregion
//#region src/elements/A.js
var A = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("a", node), attrs);
	}
	target(target) {
		return this.attr("target", target);
	}
	to(url) {
		return this.attr("href", url, xlink);
	}
};
extend(A, containerGeometry_exports);
registerMethods({
	Container: { link: wrapWithAttrCheck(function(url) {
		return this.put(new A()).to(url);
	}) },
	Element: {
		unlink() {
			const link = this.linker();
			if (!link) return this;
			const parent = link.parent();
			if (!parent) return this.remove();
			const index = parent.index(link);
			parent.add(this, index);
			link.remove();
			return this;
		},
		linkTo(url) {
			let link = this.linker();
			if (!link) {
				link = new A();
				this.wrap(link);
			}
			if (typeof url === "function") url.call(link, link);
			else link.to(url);
			return this;
		},
		linker() {
			const link = this.parent();
			if (link && link.node.nodeName.toLowerCase() === "a") return link;
			return null;
		}
	}
});
register(A, "A");

//#endregion
//#region src/elements/Mask.js
var Mask = class extends Container {
	constructor(node, attrs = node) {
		super(nodeOrNew("mask", node), attrs);
	}
	remove() {
		this.targets().forEach(function(el) {
			el.unmask();
		});
		return super.remove();
	}
	targets() {
		return findReferences(this.node, "mask");
	}
};
registerMethods({
	Container: { mask: wrapWithAttrCheck(function() {
		return this.defs().put(new Mask());
	}) },
	Element: {
		masker() {
			return this.reference("mask");
		},
		maskWith(element) {
			const masker = element instanceof Mask ? element : this.parent().mask().add(element);
			return this.attr("mask", "url(#" + masker.id() + ")");
		},
		unmask() {
			return this.attr("mask", null);
		}
	}
});
register(Mask, "Mask");

//#endregion
//#region src/elements/Stop.js
var Stop = class extends Element {
	constructor(node, attrs = node) {
		super(nodeOrNew("stop", node), attrs);
	}
	update(o) {
		if (typeof o === "number" || o instanceof SVGNumber) o = {
			offset: arguments[0],
			color: arguments[1],
			opacity: arguments[2]
		};
		if (o.opacity != null) this.attr("stop-opacity", o.opacity);
		if (o.color != null) this.attr("stop-color", o.color);
		if (o.offset != null) this.attr("offset", new SVGNumber(o.offset));
		return this;
	}
};
registerMethods({ Gradient: { stop: function(offset, color, opacity) {
	return this.put(new Stop()).update(offset, color, opacity);
} } });
register(Stop, "Stop");

//#endregion
//#region src/elements/Style.js
function cssRule(selector, rule) {
	if (!selector) return "";
	if (!rule) return selector;
	let ret = selector + "{";
	for (const i in rule) ret += unCamelCase(i) + ":" + rule[i] + ";";
	ret += "}";
	return ret;
}
var Style = class extends Element {
	constructor(node, attrs = node) {
		super(nodeOrNew("style", node), attrs);
	}
	addText(w = "") {
		this.node.textContent += w;
		return this;
	}
	font(name, src, params = {}) {
		return this.rule("@font-face", {
			fontFamily: name,
			src,
			...params
		});
	}
	rule(selector, obj) {
		return this.addText(cssRule(selector, obj));
	}
};
registerMethods("Dom", {
	style(selector, obj) {
		return this.put(new Style()).rule(selector, obj);
	},
	fontface(name, src, params) {
		return this.put(new Style()).font(name, src, params);
	}
});
register(Style, "Style");

//#endregion
//#region src/elements/TextPath.js
var TextPath = class extends Text {
	constructor(node, attrs = node) {
		super(nodeOrNew("textPath", node), attrs);
	}
	array() {
		const track = this.track();
		return track ? track.array() : null;
	}
	plot(d) {
		const track = this.track();
		let pathArray = null;
		if (track) pathArray = track.plot(d);
		return d == null ? pathArray : this;
	}
	track() {
		return this.reference("href");
	}
};
registerMethods({
	Container: { textPath: wrapWithAttrCheck(function(text, path) {
		if (!(text instanceof Text)) text = this.text(text);
		return text.path(path);
	}) },
	Text: {
		path: wrapWithAttrCheck(function(track, importNodes = true) {
			const textPath = new TextPath();
			if (!(track instanceof Path)) track = this.defs().path(track);
			textPath.attr("href", "#" + track, xlink);
			let node;
			if (importNodes) while (node = this.node.firstChild) textPath.node.appendChild(node);
			return this.put(textPath);
		}),
		textPath() {
			return this.findOne("textPath");
		}
	},
	Path: {
		text: wrapWithAttrCheck(function(text) {
			if (!(text instanceof Text)) text = new Text().addTo(this.parent()).text(text);
			return text.path(this);
		}),
		targets() {
			return findReferences(this.node, "href", "textPath");
		}
	}
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, "TextPath");

//#endregion
//#region src/elements/Use.js
var Use = class extends Shape {
	constructor(node, attrs = node) {
		super(nodeOrNew("use", node), attrs);
	}
	use(element, file) {
		return this.attr("href", (file || "") + "#" + element, xlink);
	}
};
registerMethods({ Container: { use: wrapWithAttrCheck(function(element, file) {
	return this.put(new Use()).use(element, file);
}) } });
register(Use, "Use");

//#endregion
//#region src/main.js
const SVG = makeInstance;
extend([
	Svg,
	Symbol$1,
	Image,
	Pattern,
	Marker
], getMethodsFor("viewbox"));
extend([
	Line,
	Polyline,
	Polygon,
	Path
], getMethodsFor("marker"));
extend(Text, getMethodsFor("Text"));
extend(Path, getMethodsFor("Path"));
extend(Defs, getMethodsFor("Defs"));
extend([Text, Tspan], getMethodsFor("Tspan"));
extend([
	Rect,
	Ellipse,
	Gradient,
	Runner
], getMethodsFor("radius"));
extend(EventTarget, getMethodsFor("EventTarget"));
extend(Dom, getMethodsFor("Dom"));
extend(Element, getMethodsFor("Element"));
extend(Shape, getMethodsFor("Shape"));
extend([Container, Fragment], getMethodsFor("Container"));
extend(Gradient, getMethodsFor("Gradient"));
extend(Runner, getMethodsFor("Runner"));
List.extend(getMethodNames());
registerMorphableType([
	SVGNumber,
	Color,
	Box,
	Matrix,
	SVGArray,
	PointArray,
	PathArray,
	Point
]);
makeMorphable();

//#endregion
export { A, Animator, SVGArray as Array, Box, Circle, ClipPath, Color, Container, Controller, Defs, Dom, Ease, Element, Ellipse, EventTarget, ForeignObject, Fragment, G, Gradient, Image, Line, List, Marker, Mask, Matrix, Morphable, NonMorphable, SVGNumber as Number, ObjectBag, PID, Path, PathArray, Pattern, Point, PointArray, Polygon, Polyline, Queue, Rect, Runner, SVG, Shape, Spring, Stop, Style, Svg, Symbol$1 as Symbol, Text, TextPath, Timeline, TransformBag, Tspan, Use, adopt, assignNewId, create, defaults_exports as defaults, dispatch, easing, eid, extend, baseFind as find, getClass, getWindow, makeInstance, makeMorphable, mockAdopt, namespaces_exports as namespaces, nodeOrNew, off, on, parser, regex_exports as regex, register, registerMorphableType, registerWindow, root, utils_exports as utils, withWindow, wrapWithAttrCheck };
//# sourceMappingURL=svg.esm.js.map