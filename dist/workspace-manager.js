var pE = Object.defineProperty;
var hE = (e, t, n) => t in e ? pE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var bf = (e, t, n) => (hE(e, typeof t != "symbol" ? t + "" : t, n), n);
import { app as zl } from "/scripts/app.js";
function mE(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var NS = { exports: {} }, sd = {}, VS = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cl = Symbol.for("react.element"), vE = Symbol.for("react.portal"), gE = Symbol.for("react.fragment"), yE = Symbol.for("react.strict_mode"), bE = Symbol.for("react.profiler"), SE = Symbol.for("react.provider"), xE = Symbol.for("react.context"), wE = Symbol.for("react.forward_ref"), CE = Symbol.for("react.suspense"), kE = Symbol.for("react.memo"), PE = Symbol.for("react.lazy"), h0 = Symbol.iterator;
function _E(e) {
  return e === null || typeof e != "object" ? null : (e = h0 && e[h0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var BS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, WS = Object.assign, HS = {};
function xa(e, t, n) {
  this.props = e, this.context = t, this.refs = HS, this.updater = n || BS;
}
xa.prototype.isReactComponent = {};
xa.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
xa.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function US() {
}
US.prototype = xa.prototype;
function Rm(e, t, n) {
  this.props = e, this.context = t, this.refs = HS, this.updater = n || BS;
}
var $m = Rm.prototype = new US();
$m.constructor = Rm;
WS($m, xa.prototype);
$m.isPureReactComponent = !0;
var m0 = Array.isArray, GS = Object.prototype.hasOwnProperty, Am = { current: null }, KS = { key: !0, ref: !0, __self: !0, __source: !0 };
function YS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      GS.call(t, r) && !KS.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: cl, type: e, key: i, ref: a, props: o, _owner: Am.current };
}
function TE(e, t) {
  return { $$typeof: cl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Dm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cl;
}
function EE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var v0 = /\/+/g;
function Sf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? EE("" + e.key) : t.toString(36);
}
function Tu(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cl:
          case vE:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + Sf(a, 0) : r, m0(o) ? (n = "", e != null && (n = e.replace(v0, "$&/") + "/"), Tu(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Dm(o) && (o = TE(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(v0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", m0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + Sf(i, s);
      a += Tu(i, t, n, l, o);
    }
  else if (l = _E(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + Sf(i, s++), a += Tu(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Nl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Tu(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function OE(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Mt = { current: null }, Eu = { transition: null }, ME = { ReactCurrentDispatcher: Mt, ReactCurrentBatchConfig: Eu, ReactCurrentOwner: Am };
ue.Children = { map: Nl, forEach: function(e, t, n) {
  Nl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Nl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Nl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Dm(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = xa;
ue.Fragment = gE;
ue.Profiler = bE;
ue.PureComponent = Rm;
ue.StrictMode = yE;
ue.Suspense = CE;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ME;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = WS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Am.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      GS.call(t, l) && !KS.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: cl, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ue.createContext = function(e) {
  return e = { $$typeof: xE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: SE, _context: e }, e.Consumer = e;
};
ue.createElement = YS;
ue.createFactory = function(e) {
  var t = YS.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: wE, render: e };
};
ue.isValidElement = Dm;
ue.lazy = function(e) {
  return { $$typeof: PE, _payload: { _status: -1, _result: e }, _init: OE };
};
ue.memo = function(e, t) {
  return { $$typeof: kE, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = Eu.transition;
  Eu.transition = {};
  try {
    e();
  } finally {
    Eu.transition = t;
  }
};
ue.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
ue.useCallback = function(e, t) {
  return Mt.current.useCallback(e, t);
};
ue.useContext = function(e) {
  return Mt.current.useContext(e);
};
ue.useDebugValue = function() {
};
ue.useDeferredValue = function(e) {
  return Mt.current.useDeferredValue(e);
};
ue.useEffect = function(e, t) {
  return Mt.current.useEffect(e, t);
};
ue.useId = function() {
  return Mt.current.useId();
};
ue.useImperativeHandle = function(e, t, n) {
  return Mt.current.useImperativeHandle(e, t, n);
};
ue.useInsertionEffect = function(e, t) {
  return Mt.current.useInsertionEffect(e, t);
};
ue.useLayoutEffect = function(e, t) {
  return Mt.current.useLayoutEffect(e, t);
};
ue.useMemo = function(e, t) {
  return Mt.current.useMemo(e, t);
};
ue.useReducer = function(e, t, n) {
  return Mt.current.useReducer(e, t, n);
};
ue.useRef = function(e) {
  return Mt.current.useRef(e);
};
ue.useState = function(e) {
  return Mt.current.useState(e);
};
ue.useSyncExternalStore = function(e, t, n) {
  return Mt.current.useSyncExternalStore(e, t, n);
};
ue.useTransition = function() {
  return Mt.current.useTransition();
};
ue.version = "18.2.0";
VS.exports = ue;
var v = VS.exports;
const re = /* @__PURE__ */ ul(v), g0 = /* @__PURE__ */ mE({
  __proto__: null,
  default: re
}, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IE = v, RE = Symbol.for("react.element"), $E = Symbol.for("react.fragment"), AE = Object.prototype.hasOwnProperty, DE = IE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, FE = { key: !0, ref: !0, __self: !0, __source: !0 };
function qS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    AE.call(t, r) && !FE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: RE, type: e, key: i, ref: a, props: o, _owner: DE.current };
}
sd.Fragment = $E;
sd.jsx = qS;
sd.jsxs = qS;
NS.exports = sd;
var w = NS.exports, Wp = {}, XS = { exports: {} }, tn = {}, QS = { exports: {} }, ZS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(A, j) {
    var U = A.length;
    A.push(j);
    e:
      for (; 0 < U; ) {
        var V = U - 1 >>> 1, Y = A[V];
        if (0 < o(Y, j))
          A[V] = j, A[U] = Y, U = V;
        else
          break e;
      }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0)
      return null;
    var j = A[0], U = A.pop();
    if (U !== j) {
      A[0] = U;
      e:
        for (var V = 0, Y = A.length, z = Y >>> 1; V < z; ) {
          var te = 2 * (V + 1) - 1, le = A[te], ae = te + 1, se = A[ae];
          if (0 > o(le, U))
            ae < Y && 0 > o(se, le) ? (A[V] = se, A[ae] = U, V = ae) : (A[V] = le, A[te] = U, V = te);
          else if (ae < Y && 0 > o(se, U))
            A[V] = se, A[ae] = U, V = ae;
          else
            break e;
        }
    }
    return j;
  }
  function o(A, j) {
    var U = A.sortIndex - j.sortIndex;
    return U !== 0 ? U : A.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var a = Date, s = a.now();
    e.unstable_now = function() {
      return a.now() - s;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, g = !1, h = !1, b = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(A) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null)
        r(u);
      else if (j.startTime <= A)
        r(u), j.sortIndex = j.expirationTime, t(l, j);
      else
        break;
      j = n(u);
    }
  }
  function x(A) {
    if (h = !1, S(A), !g)
      if (n(l) !== null)
        g = !0, K(k);
      else {
        var j = n(u);
        j !== null && $(x, j.startTime - A);
      }
  }
  function k(A, j) {
    g = !1, h && (h = !1, m(T), T = -1), p = !0;
    var U = f;
    try {
      for (S(j), d = n(l); d !== null && (!(d.expirationTime > j) || A && !D()); ) {
        var V = d.callback;
        if (typeof V == "function") {
          d.callback = null, f = d.priorityLevel;
          var Y = V(d.expirationTime <= j);
          j = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(l) && r(l), S(j);
        } else
          r(l);
        d = n(l);
      }
      if (d !== null)
        var z = !0;
      else {
        var te = n(u);
        te !== null && $(x, te.startTime - j), z = !1;
      }
      return z;
    } finally {
      d = null, f = U, p = !1;
    }
  }
  var P = !1, _ = null, T = -1, M = 5, I = -1;
  function D() {
    return !(e.unstable_now() - I < M);
  }
  function G() {
    if (_ !== null) {
      var A = e.unstable_now();
      I = A;
      var j = !0;
      try {
        j = _(!0, A);
      } finally {
        j ? H() : (P = !1, _ = null);
      }
    } else
      P = !1;
  }
  var H;
  if (typeof y == "function")
    H = function() {
      y(G);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), W = L.port2;
    L.port1.onmessage = G, H = function() {
      W.postMessage(null);
    };
  } else
    H = function() {
      b(G, 0);
    };
  function K(A) {
    _ = A, P || (P = !0, H());
  }
  function $(A, j) {
    T = b(function() {
      A(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    g || p || (g = !0, K(k));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(A) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = f;
    }
    var U = f;
    f = j;
    try {
      return A();
    } finally {
      f = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, j) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var U = f;
    f = A;
    try {
      return j();
    } finally {
      f = U;
    }
  }, e.unstable_scheduleCallback = function(A, j, U) {
    var V = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? V + U : V) : U = V, A) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = U + Y, A = { id: c++, callback: j, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (h ? (m(T), T = -1) : h = !0, $(x, U - V))) : (A.sortIndex = Y, t(l, A), g || p || (g = !0, K(k))), A;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(A) {
    var j = f;
    return function() {
      var U = f;
      f = j;
      try {
        return A.apply(this, arguments);
      } finally {
        f = U;
      }
    };
  };
})(ZS);
QS.exports = ZS;
var LE = QS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JS = v, Zt = LE;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ex = /* @__PURE__ */ new Set(), Is = {};
function Zo(e, t) {
  ea(e, t), ea(e + "Capture", t);
}
function ea(e, t) {
  for (Is[e] = t, e = 0; e < t.length; e++)
    ex.add(t[e]);
}
var wr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hp = Object.prototype.hasOwnProperty, jE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y0 = {}, b0 = {};
function zE(e) {
  return Hp.call(b0, e) ? !0 : Hp.call(y0, e) ? !1 : jE.test(e) ? b0[e] = !0 : (y0[e] = !0, !1);
}
function NE(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function VE(e, t, n, r) {
  if (t === null || typeof t > "u" || NE(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function It(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var ht = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ht[e] = new It(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ht[t] = new It(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ht[e] = new It(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ht[e] = new It(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ht[e] = new It(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ht[e] = new It(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ht[e] = new It(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ht[e] = new It(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ht[e] = new It(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fm = /[\-:]([a-z])/g;
function Lm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Fm,
    Lm
  );
  ht[t] = new It(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Fm, Lm);
  ht[t] = new It(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Fm, Lm);
  ht[t] = new It(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new It(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new It("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new It(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function jm(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (VE(t, n, o, r) && (n = null), r || o === null ? zE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Or = JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vl = Symbol.for("react.element"), vi = Symbol.for("react.portal"), gi = Symbol.for("react.fragment"), zm = Symbol.for("react.strict_mode"), Up = Symbol.for("react.profiler"), tx = Symbol.for("react.provider"), nx = Symbol.for("react.context"), Nm = Symbol.for("react.forward_ref"), Gp = Symbol.for("react.suspense"), Kp = Symbol.for("react.suspense_list"), Vm = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), rx = Symbol.for("react.offscreen"), S0 = Symbol.iterator;
function Ra(e) {
  return e === null || typeof e != "object" ? null : (e = S0 && e[S0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, xf;
function qa(e) {
  if (xf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xf = t && t[1] || "";
    }
  return `
` + xf + e;
}
var wf = !1;
function Cf(e, t) {
  if (!e || wf)
    return "";
  wf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s]; )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if (a--, s--, 0 > s || o[a] !== i[s]) {
                var l = `
` + o[a].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    wf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qa(e) : "";
}
function BE(e) {
  switch (e.tag) {
    case 5:
      return qa(e.type);
    case 16:
      return qa("Lazy");
    case 13:
      return qa("Suspense");
    case 19:
      return qa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Cf(e.type, !1), e;
    case 11:
      return e = Cf(e.type.render, !1), e;
    case 1:
      return e = Cf(e.type, !0), e;
    default:
      return "";
  }
}
function Yp(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case gi:
      return "Fragment";
    case vi:
      return "Portal";
    case Up:
      return "Profiler";
    case zm:
      return "StrictMode";
    case Gp:
      return "Suspense";
    case Kp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case nx:
        return (e.displayName || "Context") + ".Consumer";
      case tx:
        return (e._context.displayName || "Context") + ".Provider";
      case Nm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Vm:
        return t = e.displayName || null, t !== null ? t : Yp(e.type) || "Memo";
      case zr:
        t = e._payload, e = e._init;
        try {
          return Yp(e(t));
        } catch {
        }
    }
  return null;
}
function WE(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Yp(t);
    case 8:
      return t === zm ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function ao(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ox(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function HE(e) {
  var t = ox(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      r = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Bl(e) {
  e._valueTracker || (e._valueTracker = HE(e));
}
function ix(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = ox(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ic(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qp(e, t) {
  var n = t.checked;
  return Ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function x0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ao(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ax(e, t) {
  t = t.checked, t != null && jm(e, "checked", t, !1);
}
function Xp(e, t) {
  ax(e, t);
  var n = ao(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qp(e, t.type, ao(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function w0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qp(e, t, n) {
  (t !== "number" || ic(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xa = Array.isArray;
function Ni(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ao(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Zp(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function C0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(F(92));
      if (Xa(n)) {
        if (1 < n.length)
          throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ao(n) };
}
function sx(e, t) {
  var n = ao(t.value), r = ao(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function k0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? lx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Wl, ux = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Wl = Wl || document.createElement("div"), Wl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Wl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Rs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ls = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, UE = ["Webkit", "ms", "Moz", "O"];
Object.keys(ls).forEach(function(e) {
  UE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ls[t] = ls[e];
  });
});
function cx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ls.hasOwnProperty(e) && ls[e] ? ("" + t).trim() : t + "px";
}
function dx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = cx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var GE = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function eh(e, t) {
  if (t) {
    if (GE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(F(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(F(62));
  }
}
function th(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var nh = null;
function Bm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var rh = null, Vi = null, Bi = null;
function P0(e) {
  if (e = pl(e)) {
    if (typeof rh != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = fd(t), rh(e.stateNode, e.type, t));
  }
}
function fx(e) {
  Vi ? Bi ? Bi.push(e) : Bi = [e] : Vi = e;
}
function px() {
  if (Vi) {
    var e = Vi, t = Bi;
    if (Bi = Vi = null, P0(e), t)
      for (e = 0; e < t.length; e++)
        P0(t[e]);
  }
}
function hx(e, t) {
  return e(t);
}
function mx() {
}
var kf = !1;
function vx(e, t, n) {
  if (kf)
    return e(t, n);
  kf = !0;
  try {
    return hx(e, t, n);
  } finally {
    kf = !1, (Vi !== null || Bi !== null) && (mx(), px());
  }
}
function $s(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = fd(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(F(231, t, typeof n));
  return n;
}
var oh = !1;
if (wr)
  try {
    var $a = {};
    Object.defineProperty($a, "passive", { get: function() {
      oh = !0;
    } }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
  } catch {
    oh = !1;
  }
function KE(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var us = !1, ac = null, sc = !1, ih = null, YE = { onError: function(e) {
  us = !0, ac = e;
} };
function qE(e, t, n, r, o, i, a, s, l) {
  us = !1, ac = null, KE.apply(YE, arguments);
}
function XE(e, t, n, r, o, i, a, s, l) {
  if (qE.apply(this, arguments), us) {
    if (us) {
      var u = ac;
      us = !1, ac = null;
    } else
      throw Error(F(198));
    sc || (sc = !0, ih = u);
  }
}
function Jo(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function _0(e) {
  if (Jo(e) !== e)
    throw Error(F(188));
}
function QE(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Jo(e), t === null)
      throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n)
          return _0(o), e;
        if (i === r)
          return _0(o), t;
        i = i.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return)
      n = o, r = i;
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          a = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          a = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            a = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            a = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!a)
          throw Error(F(189));
      }
    }
    if (n.alternate !== r)
      throw Error(F(190));
  }
  if (n.tag !== 3)
    throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function yx(e) {
  return e = QE(e), e !== null ? bx(e) : null;
}
function bx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = bx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Sx = Zt.unstable_scheduleCallback, T0 = Zt.unstable_cancelCallback, ZE = Zt.unstable_shouldYield, JE = Zt.unstable_requestPaint, Ke = Zt.unstable_now, eO = Zt.unstable_getCurrentPriorityLevel, Wm = Zt.unstable_ImmediatePriority, xx = Zt.unstable_UserBlockingPriority, lc = Zt.unstable_NormalPriority, tO = Zt.unstable_LowPriority, wx = Zt.unstable_IdlePriority, ld = null, Qn = null;
function nO(e) {
  if (Qn && typeof Qn.onCommitFiberRoot == "function")
    try {
      Qn.onCommitFiberRoot(ld, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $n = Math.clz32 ? Math.clz32 : iO, rO = Math.log, oO = Math.LN2;
function iO(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rO(e) / oO | 0) | 0;
}
var Hl = 64, Ul = 4194304;
function Qa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function uc(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Qa(s) : (i &= a, i !== 0 && (r = Qa(i)));
  } else
    a = n & ~o, a !== 0 ? r = Qa(a) : i !== 0 && (r = Qa(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - $n(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function aO(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sO(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - $n(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = aO(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function ah(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Cx() {
  var e = Hl;
  return Hl <<= 1, !(Hl & 4194240) && (Hl = 64), e;
}
function Pf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function dl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $n(t), e[t] = n;
}
function lO(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $n(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Hm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $n(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var xe = 0;
function kx(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Px, Um, _x, Tx, Ex, sh = !1, Gl = [], qr = null, Xr = null, Qr = null, As = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ new Map(), Br = [], uO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function E0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qr = null;
      break;
    case "dragenter":
    case "dragleave":
      Xr = null;
      break;
    case "mouseover":
    case "mouseout":
      Qr = null;
      break;
    case "pointerover":
    case "pointerout":
      As.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ds.delete(t.pointerId);
  }
}
function Aa(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = pl(t), t !== null && Um(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function cO(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return qr = Aa(qr, e, t, n, r, o), !0;
    case "dragenter":
      return Xr = Aa(Xr, e, t, n, r, o), !0;
    case "mouseover":
      return Qr = Aa(Qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return As.set(i, Aa(As.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ds.set(i, Aa(Ds.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Ox(e) {
  var t = Ro(e.target);
  if (t !== null) {
    var n = Jo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = gx(n), t !== null) {
          e.blockedOn = t, Ex(e.priority, function() {
            _x(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ou(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = lh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      nh = r, n.target.dispatchEvent(r), nh = null;
    } else
      return t = pl(n), t !== null && Um(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function O0(e, t, n) {
  Ou(e) && n.delete(t);
}
function dO() {
  sh = !1, qr !== null && Ou(qr) && (qr = null), Xr !== null && Ou(Xr) && (Xr = null), Qr !== null && Ou(Qr) && (Qr = null), As.forEach(O0), Ds.forEach(O0);
}
function Da(e, t) {
  e.blockedOn === t && (e.blockedOn = null, sh || (sh = !0, Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, dO)));
}
function Fs(e) {
  function t(o) {
    return Da(o, e);
  }
  if (0 < Gl.length) {
    Da(Gl[0], e);
    for (var n = 1; n < Gl.length; n++) {
      var r = Gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (qr !== null && Da(qr, e), Xr !== null && Da(Xr, e), Qr !== null && Da(Qr, e), As.forEach(t), Ds.forEach(t), n = 0; n < Br.length; n++)
    r = Br[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && (n = Br[0], n.blockedOn === null); )
    Ox(n), n.blockedOn === null && Br.shift();
}
var Wi = Or.ReactCurrentBatchConfig, cc = !0;
function fO(e, t, n, r) {
  var o = xe, i = Wi.transition;
  Wi.transition = null;
  try {
    xe = 1, Gm(e, t, n, r);
  } finally {
    xe = o, Wi.transition = i;
  }
}
function pO(e, t, n, r) {
  var o = xe, i = Wi.transition;
  Wi.transition = null;
  try {
    xe = 4, Gm(e, t, n, r);
  } finally {
    xe = o, Wi.transition = i;
  }
}
function Gm(e, t, n, r) {
  if (cc) {
    var o = lh(e, t, n, r);
    if (o === null)
      Df(e, t, r, dc, n), E0(e, r);
    else if (cO(o, e, t, n, r))
      r.stopPropagation();
    else if (E0(e, r), t & 4 && -1 < uO.indexOf(e)) {
      for (; o !== null; ) {
        var i = pl(o);
        if (i !== null && Px(i), i = lh(e, t, n, r), i === null && Df(e, t, r, dc, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Df(e, t, r, null, n);
  }
}
var dc = null;
function lh(e, t, n, r) {
  if (dc = null, e = Bm(r), e = Ro(e), e !== null)
    if (t = Jo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = gx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return dc = e, null;
}
function Mx(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (eO()) {
        case Wm:
          return 1;
        case xx:
          return 4;
        case lc:
        case tO:
          return 16;
        case wx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kr = null, Km = null, Mu = null;
function Ix() {
  if (Mu)
    return Mu;
  var e, t = Km, n = t.length, r, o = "value" in Kr ? Kr.value : Kr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return Mu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Iu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Kl() {
  return !0;
}
function M0() {
  return !1;
}
function nn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Kl : M0, this.isPropagationStopped = M0, this;
  }
  return Ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Kl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Kl);
  }, persist: function() {
  }, isPersistent: Kl }), t;
}
var wa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ym = nn(wa), fl = Ve({}, wa, { view: 0, detail: 0 }), hO = nn(fl), _f, Tf, Fa, ud = Ve({}, fl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Fa && (Fa && e.type === "mousemove" ? (_f = e.screenX - Fa.screenX, Tf = e.screenY - Fa.screenY) : Tf = _f = 0, Fa = e), _f);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Tf;
} }), I0 = nn(ud), mO = Ve({}, ud, { dataTransfer: 0 }), vO = nn(mO), gO = Ve({}, fl, { relatedTarget: 0 }), Ef = nn(gO), yO = Ve({}, wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bO = nn(yO), SO = Ve({}, wa, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), xO = nn(SO), wO = Ve({}, wa, { data: 0 }), R0 = nn(wO), CO = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, kO = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, PO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function _O(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = PO[e]) ? !!t[e] : !1;
}
function qm() {
  return _O;
}
var TO = Ve({}, fl, { key: function(e) {
  if (e.key) {
    var t = CO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Iu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qm, charCode: function(e) {
  return e.type === "keypress" ? Iu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Iu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), EO = nn(TO), OO = Ve({}, ud, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), $0 = nn(OO), MO = Ve({}, fl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qm }), IO = nn(MO), RO = Ve({}, wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $O = nn(RO), AO = Ve({}, ud, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), DO = nn(AO), FO = [9, 13, 27, 32], Xm = wr && "CompositionEvent" in window, cs = null;
wr && "documentMode" in document && (cs = document.documentMode);
var LO = wr && "TextEvent" in window && !cs, Rx = wr && (!Xm || cs && 8 < cs && 11 >= cs), A0 = " ", D0 = !1;
function $x(e, t) {
  switch (e) {
    case "keyup":
      return FO.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ax(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yi = !1;
function jO(e, t) {
  switch (e) {
    case "compositionend":
      return Ax(t);
    case "keypress":
      return t.which !== 32 ? null : (D0 = !0, A0);
    case "textInput":
      return e = t.data, e === A0 && D0 ? null : e;
    default:
      return null;
  }
}
function zO(e, t) {
  if (yi)
    return e === "compositionend" || !Xm && $x(e, t) ? (e = Ix(), Mu = Km = Kr = null, yi = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var NO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function F0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!NO[e.type] : t === "textarea";
}
function Dx(e, t, n, r) {
  fx(r), t = fc(t, "onChange"), 0 < t.length && (n = new Ym("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ds = null, Ls = null;
function VO(e) {
  Gx(e, 0);
}
function cd(e) {
  var t = xi(e);
  if (ix(t))
    return e;
}
function BO(e, t) {
  if (e === "change")
    return t;
}
var Fx = !1;
if (wr) {
  var Of;
  if (wr) {
    var Mf = "oninput" in document;
    if (!Mf) {
      var L0 = document.createElement("div");
      L0.setAttribute("oninput", "return;"), Mf = typeof L0.oninput == "function";
    }
    Of = Mf;
  } else
    Of = !1;
  Fx = Of && (!document.documentMode || 9 < document.documentMode);
}
function j0() {
  ds && (ds.detachEvent("onpropertychange", Lx), Ls = ds = null);
}
function Lx(e) {
  if (e.propertyName === "value" && cd(Ls)) {
    var t = [];
    Dx(t, Ls, e, Bm(e)), vx(VO, t);
  }
}
function WO(e, t, n) {
  e === "focusin" ? (j0(), ds = t, Ls = n, ds.attachEvent("onpropertychange", Lx)) : e === "focusout" && j0();
}
function HO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cd(Ls);
}
function UO(e, t) {
  if (e === "click")
    return cd(t);
}
function GO(e, t) {
  if (e === "input" || e === "change")
    return cd(t);
}
function KO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ln = typeof Object.is == "function" ? Object.is : KO;
function js(e, t) {
  if (Ln(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Hp.call(t, o) || !Ln(e[o], t[o]))
      return !1;
  }
  return !0;
}
function z0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function N0(e, t) {
  var n = z0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = z0(n);
  }
}
function jx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function zx() {
  for (var e = window, t = ic(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = ic(e.document);
  }
  return t;
}
function Qm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function YO(e) {
  var t = zx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && jx(n.ownerDocument.documentElement, n)) {
    if (r !== null && Qm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = N0(n, i);
        var a = N0(
          n,
          r
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var qO = wr && "documentMode" in document && 11 >= document.documentMode, bi = null, uh = null, fs = null, ch = !1;
function V0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ch || bi == null || bi !== ic(r) || (r = bi, "selectionStart" in r && Qm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fs && js(fs, r) || (fs = r, r = fc(uh, "onSelect"), 0 < r.length && (t = new Ym("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bi)));
}
function Yl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Si = { animationend: Yl("Animation", "AnimationEnd"), animationiteration: Yl("Animation", "AnimationIteration"), animationstart: Yl("Animation", "AnimationStart"), transitionend: Yl("Transition", "TransitionEnd") }, If = {}, Nx = {};
wr && (Nx = document.createElement("div").style, "AnimationEvent" in window || (delete Si.animationend.animation, delete Si.animationiteration.animation, delete Si.animationstart.animation), "TransitionEvent" in window || delete Si.transitionend.transition);
function dd(e) {
  if (If[e])
    return If[e];
  if (!Si[e])
    return e;
  var t = Si[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Nx)
      return If[e] = t[n];
  return e;
}
var Vx = dd("animationend"), Bx = dd("animationiteration"), Wx = dd("animationstart"), Hx = dd("transitionend"), Ux = /* @__PURE__ */ new Map(), B0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fo(e, t) {
  Ux.set(e, t), Zo(t, [e]);
}
for (var Rf = 0; Rf < B0.length; Rf++) {
  var $f = B0[Rf], XO = $f.toLowerCase(), QO = $f[0].toUpperCase() + $f.slice(1);
  fo(XO, "on" + QO);
}
fo(Vx, "onAnimationEnd");
fo(Bx, "onAnimationIteration");
fo(Wx, "onAnimationStart");
fo("dblclick", "onDoubleClick");
fo("focusin", "onFocus");
fo("focusout", "onBlur");
fo(Hx, "onTransitionEnd");
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
Zo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ZO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));
function W0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, XE(r, t, void 0, e), e.currentTarget = null;
}
function Gx(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a], l = s.instance, u = s.currentTarget;
          if (s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          W0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          W0(o, s, u), i = l;
        }
    }
  }
  if (sc)
    throw e = ih, sc = !1, ih = null, e;
}
function Me(e, t) {
  var n = t[mh];
  n === void 0 && (n = t[mh] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Kx(t, e, 2, !1), n.add(r));
}
function Af(e, t, n) {
  var r = 0;
  t && (r |= 4), Kx(n, e, r, t);
}
var ql = "_reactListening" + Math.random().toString(36).slice(2);
function zs(e) {
  if (!e[ql]) {
    e[ql] = !0, ex.forEach(function(n) {
      n !== "selectionchange" && (ZO.has(n) || Af(n, !1, e), Af(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ql] || (t[ql] = !0, Af("selectionchange", !1, t));
  }
}
function Kx(e, t, n, r) {
  switch (Mx(t)) {
    case 1:
      var o = fO;
      break;
    case 4:
      o = pO;
      break;
    default:
      o = Gm;
  }
  n = o.bind(null, t, n, e), o = void 0, !oh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Df(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var l = a.tag;
              if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (a = Ro(s), a === null)
              return;
            if (l = a.tag, l === 5 || l === 6) {
              r = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  vx(function() {
    var u = i, c = Bm(n), d = [];
    e: {
      var f = Ux.get(e);
      if (f !== void 0) {
        var p = Ym, g = e;
        switch (e) {
          case "keypress":
            if (Iu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = EO;
            break;
          case "focusin":
            g = "focus", p = Ef;
            break;
          case "focusout":
            g = "blur", p = Ef;
            break;
          case "beforeblur":
          case "afterblur":
            p = Ef;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = I0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = vO;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = IO;
            break;
          case Vx:
          case Bx:
          case Wx:
            p = bO;
            break;
          case Hx:
            p = $O;
            break;
          case "scroll":
            p = hO;
            break;
          case "wheel":
            p = DO;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = xO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = $0;
        }
        var h = (t & 4) !== 0, b = !h && e === "scroll", m = h ? f !== null ? f + "Capture" : null : f;
        h = [];
        for (var y = u, S; y !== null; ) {
          S = y;
          var x = S.stateNode;
          if (S.tag === 5 && x !== null && (S = x, m !== null && (x = $s(y, m), x != null && h.push(Ns(y, x, S)))), b)
            break;
          y = y.return;
        }
        0 < h.length && (f = new p(f, g, null, n, c), d.push({ event: f, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== nh && (g = n.relatedTarget || n.fromElement) && (Ro(g) || g[Cr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (g = n.relatedTarget || n.toElement, p = u, g = g ? Ro(g) : null, g !== null && (b = Jo(g), g !== b || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
          if (h = I0, x = "onMouseLeave", m = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (h = $0, x = "onPointerLeave", m = "onPointerEnter", y = "pointer"), b = p == null ? f : xi(p), S = g == null ? f : xi(g), f = new h(x, y + "leave", p, n, c), f.target = b, f.relatedTarget = S, x = null, Ro(c) === u && (h = new h(m, y + "enter", g, n, c), h.target = S, h.relatedTarget = b, x = h), b = x, p && g)
            t: {
              for (h = p, m = g, y = 0, S = h; S; S = li(S))
                y++;
              for (S = 0, x = m; x; x = li(x))
                S++;
              for (; 0 < y - S; )
                h = li(h), y--;
              for (; 0 < S - y; )
                m = li(m), S--;
              for (; y--; ) {
                if (h === m || m !== null && h === m.alternate)
                  break t;
                h = li(h), m = li(m);
              }
              h = null;
            }
          else
            h = null;
          p !== null && H0(d, f, p, h, !1), g !== null && b !== null && H0(d, b, g, h, !0);
        }
      }
      e: {
        if (f = u ? xi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = BO;
        else if (F0(f))
          if (Fx)
            k = GO;
          else {
            k = HO;
            var P = WO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = UO);
        if (k && (k = k(e, u))) {
          Dx(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Qp(f, "number", f.value);
      }
      switch (P = u ? xi(u) : window, e) {
        case "focusin":
          (F0(P) || P.contentEditable === "true") && (bi = P, uh = u, fs = null);
          break;
        case "focusout":
          fs = uh = bi = null;
          break;
        case "mousedown":
          ch = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ch = !1, V0(d, n, c);
          break;
        case "selectionchange":
          if (qO)
            break;
        case "keydown":
        case "keyup":
          V0(d, n, c);
      }
      var _;
      if (Xm)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        yi ? $x(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Rx && n.locale !== "ko" && (yi || T !== "onCompositionStart" ? T === "onCompositionEnd" && yi && (_ = Ix()) : (Kr = c, Km = "value" in Kr ? Kr.value : Kr.textContent, yi = !0)), P = fc(u, T), 0 < P.length && (T = new R0(T, e, null, n, c), d.push({ event: T, listeners: P }), _ ? T.data = _ : (_ = Ax(n), _ !== null && (T.data = _)))), (_ = LO ? jO(e, n) : zO(e, n)) && (u = fc(u, "onBeforeInput"), 0 < u.length && (c = new R0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    Gx(d, t);
  });
}
function Ns(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = $s(e, n), i != null && r.unshift(Ns(e, i, o)), i = $s(e, t), i != null && r.push(Ns(e, i, o))), e = e.return;
  }
  return r;
}
function li(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function H0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = $s(n, i), l != null && a.unshift(Ns(n, l, s))) : o || (l = $s(n, i), l != null && a.push(Ns(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var JO = /\r\n?/g, eM = /\u0000|\uFFFD/g;
function U0(e) {
  return (typeof e == "string" ? e : "" + e).replace(JO, `
`).replace(eM, "");
}
function Xl(e, t, n) {
  if (t = U0(t), U0(e) !== t && n)
    throw Error(F(425));
}
function pc() {
}
var dh = null, fh = null;
function ph(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var hh = typeof setTimeout == "function" ? setTimeout : void 0, tM = typeof clearTimeout == "function" ? clearTimeout : void 0, G0 = typeof Promise == "function" ? Promise : void 0, nM = typeof queueMicrotask == "function" ? queueMicrotask : typeof G0 < "u" ? function(e) {
  return G0.resolve(null).then(e).catch(rM);
} : hh;
function rM(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ff(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Fs(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Fs(t);
}
function Zr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function K0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ca = Math.random().toString(36).slice(2), Yn = "__reactFiber$" + Ca, Vs = "__reactProps$" + Ca, Cr = "__reactContainer$" + Ca, mh = "__reactEvents$" + Ca, oM = "__reactListeners$" + Ca, iM = "__reactHandles$" + Ca;
function Ro(e) {
  var t = e[Yn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Cr] || n[Yn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = K0(e); e !== null; ) {
          if (n = e[Yn])
            return n;
          e = K0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function pl(e) {
  return e = e[Yn] || e[Cr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xi(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function fd(e) {
  return e[Vs] || null;
}
var vh = [], wi = -1;
function po(e) {
  return { current: e };
}
function Re(e) {
  0 > wi || (e.current = vh[wi], vh[wi] = null, wi--);
}
function Te(e, t) {
  wi++, vh[wi] = e.current, e.current = t;
}
var so = {}, wt = po(so), Dt = po(!1), Uo = so;
function ta(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return so;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ft(e) {
  return e = e.childContextTypes, e != null;
}
function hc() {
  Re(Dt), Re(wt);
}
function Y0(e, t, n) {
  if (wt.current !== so)
    throw Error(F(168));
  Te(wt, t), Te(Dt, n);
}
function Yx(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, WE(e) || "Unknown", o));
  return Ve({}, n, r);
}
function mc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || so, Uo = wt.current, Te(wt, e), Te(Dt, Dt.current), !0;
}
function q0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Yx(e, t, Uo), r.__reactInternalMemoizedMergedChildContext = e, Re(Dt), Re(wt), Te(wt, e)) : Re(Dt), Te(Dt, n);
}
var cr = null, pd = !1, Lf = !1;
function qx(e) {
  cr === null ? cr = [e] : cr.push(e);
}
function aM(e) {
  pd = !0, qx(e);
}
function ho() {
  if (!Lf && cr !== null) {
    Lf = !0;
    var e = 0, t = xe;
    try {
      var n = cr;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      cr = null, pd = !1;
    } catch (o) {
      throw cr !== null && (cr = cr.slice(e + 1)), Sx(Wm, ho), o;
    } finally {
      xe = t, Lf = !1;
    }
  }
  return null;
}
var Ci = [], ki = 0, vc = null, gc = 0, fn = [], pn = 0, Go = null, pr = 1, hr = "";
function ko(e, t) {
  Ci[ki++] = gc, Ci[ki++] = vc, vc = e, gc = t;
}
function Xx(e, t, n) {
  fn[pn++] = pr, fn[pn++] = hr, fn[pn++] = Go, Go = e;
  var r = pr;
  e = hr;
  var o = 32 - $n(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - $n(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, pr = 1 << 32 - $n(t) + o | n << o | r, hr = i + e;
  } else
    pr = 1 << i | n << o | r, hr = e;
}
function Zm(e) {
  e.return !== null && (ko(e, 1), Xx(e, 1, 0));
}
function Jm(e) {
  for (; e === vc; )
    vc = Ci[--ki], Ci[ki] = null, gc = Ci[--ki], Ci[ki] = null;
  for (; e === Go; )
    Go = fn[--pn], fn[pn] = null, hr = fn[--pn], fn[pn] = null, pr = fn[--pn], fn[pn] = null;
}
var qt = null, Yt = null, De = !1, Mn = null;
function Qx(e, t) {
  var n = hn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function X0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, Yt = Zr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, Yt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Go !== null ? { id: pr, overflow: hr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = hn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, Yt = null, !0) : !1;
    default:
      return !1;
  }
}
function gh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yh(e) {
  if (De) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!X0(e, t)) {
        if (gh(e))
          throw Error(F(418));
        t = Zr(n.nextSibling);
        var r = qt;
        t && X0(e, t) ? Qx(r, n) : (e.flags = e.flags & -4097 | 2, De = !1, qt = e);
      }
    } else {
      if (gh(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, De = !1, qt = e;
    }
  }
}
function Q0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function Ql(e) {
  if (e !== qt)
    return !1;
  if (!De)
    return Q0(e), De = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ph(e.type, e.memoizedProps)), t && (t = Yt)) {
    if (gh(e))
      throw Zx(), Error(F(418));
    for (; t; )
      Qx(e, t), t = Zr(t.nextSibling);
  }
  if (Q0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Yt = Zr(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Yt = null;
    }
  } else
    Yt = qt ? Zr(e.stateNode.nextSibling) : null;
  return !0;
}
function Zx() {
  for (var e = Yt; e; )
    e = Zr(e.nextSibling);
}
function na() {
  Yt = qt = null, De = !1;
}
function ev(e) {
  Mn === null ? Mn = [e] : Mn.push(e);
}
var sM = Or.ReactCurrentBatchConfig;
function En(e, t) {
  if (e && e.defaultProps) {
    t = Ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var yc = po(null), bc = null, Pi = null, tv = null;
function nv() {
  tv = Pi = bc = null;
}
function rv(e) {
  var t = yc.current;
  Re(yc), e._currentValue = t;
}
function bh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Hi(e, t) {
  bc = e, tv = Pi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (At = !0), e.firstContext = null);
}
function yn(e) {
  var t = e._currentValue;
  if (tv !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Pi === null) {
      if (bc === null)
        throw Error(F(308));
      Pi = e, bc.dependencies = { lanes: 0, firstContext: e };
    } else
      Pi = Pi.next = e;
  return t;
}
var $o = null;
function ov(e) {
  $o === null ? $o = [e] : $o.push(e);
}
function Jx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ov(t)) : (n.next = o.next, o.next = n), t.interleaved = n, kr(e, r);
}
function kr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nr = !1;
function iv(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ew(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Jr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, he & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, kr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ov(r)) : (t.next = o.next, o.next = t), r.interleaved = t, kr(e, n);
}
function Ru(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Hm(e, n);
  }
}
function Z0(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = a : i = i.next = a, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Sc(e, t, n, r) {
  var o = e.updateQueue;
  Nr = !1;
  var i = o.firstBaseUpdate, a = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s, u = l.next;
    l.next = null, a === null ? i = u : a.next = u, a = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var d = o.baseState;
    a = 0, c = u = l = null, s = i;
    do {
      var f = s.lane, p = s.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: p,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var g = e, h = s;
          switch (f = t, p = n, h.tag) {
            case 1:
              if (g = h.payload, typeof g == "function") {
                d = g.call(p, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = h.payload, f = typeof g == "function" ? g.call(p, d, f) : g, f == null)
                break e;
              d = Ve({}, d, f);
              break e;
            case 2:
              Nr = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else
        p = { eventTime: p, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (u = c = p, l = d) : c = c.next = p, a |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null)
          break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        a |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Yo |= a, e.lanes = a, e.memoizedState = d;
  }
}
function J0(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(F(191, o));
        o.call(r);
      }
    }
}
var tw = new JS.Component().refs;
function Sh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hd = { isMounted: function(e) {
  return (e = e._reactInternals) ? Jo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Et(), o = to(e), i = gr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Jr(e, i, o), t !== null && (An(t, e, o, r), Ru(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Et(), o = to(e), i = gr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Jr(e, i, o), t !== null && (An(t, e, o, r), Ru(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Et(), r = to(e), o = gr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Jr(e, o, r), t !== null && (An(t, e, r, n), Ru(t, e, r));
} };
function ey(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !js(n, r) || !js(o, i) : !0;
}
function nw(e, t, n) {
  var r = !1, o = so, i = t.contextType;
  return typeof i == "object" && i !== null ? i = yn(i) : (o = Ft(t) ? Uo : wt.current, r = t.contextTypes, i = (r = r != null) ? ta(e, o) : so), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hd, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ty(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hd.enqueueReplaceState(t, t.state, null);
}
function xh(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = tw, iv(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = yn(i) : (i = Ft(t) ? Uo : wt.current, o.context = ta(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Sh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hd.enqueueReplaceState(o, o.state, null), Sc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function La(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(F(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === tw && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Zl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ny(e) {
  var t = e._init;
  return t(e._payload);
}
function rw(e) {
  function t(m, y) {
    if (e) {
      var S = m.deletions;
      S === null ? (m.deletions = [y], m.flags |= 16) : S.push(y);
    }
  }
  function n(m, y) {
    if (!e)
      return null;
    for (; y !== null; )
      t(m, y), y = y.sibling;
    return null;
  }
  function r(m, y) {
    for (m = /* @__PURE__ */ new Map(); y !== null; )
      y.key !== null ? m.set(y.key, y) : m.set(y.index, y), y = y.sibling;
    return m;
  }
  function o(m, y) {
    return m = no(m, y), m.index = 0, m.sibling = null, m;
  }
  function i(m, y, S) {
    return m.index = S, e ? (S = m.alternate, S !== null ? (S = S.index, S < y ? (m.flags |= 2, y) : S) : (m.flags |= 2, y)) : (m.flags |= 1048576, y);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, y, S, x) {
    return y === null || y.tag !== 6 ? (y = Hf(S, m.mode, x), y.return = m, y) : (y = o(y, S), y.return = m, y);
  }
  function l(m, y, S, x) {
    var k = S.type;
    return k === gi ? c(m, y, S.props.children, x, S.key) : y !== null && (y.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && ny(k) === y.type) ? (x = o(y, S.props), x.ref = La(m, y, S), x.return = m, x) : (x = ju(S.type, S.key, S.props, null, m.mode, x), x.ref = La(m, y, S), x.return = m, x);
  }
  function u(m, y, S, x) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = Uf(S, m.mode, x), y.return = m, y) : (y = o(y, S.children || []), y.return = m, y);
  }
  function c(m, y, S, x, k) {
    return y === null || y.tag !== 7 ? (y = zo(S, m.mode, x, k), y.return = m, y) : (y = o(y, S), y.return = m, y);
  }
  function d(m, y, S) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return y = Hf("" + y, m.mode, S), y.return = m, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Vl:
          return S = ju(y.type, y.key, y.props, null, m.mode, S), S.ref = La(m, null, y), S.return = m, S;
        case vi:
          return y = Uf(y, m.mode, S), y.return = m, y;
        case zr:
          var x = y._init;
          return d(m, x(y._payload), S);
      }
      if (Xa(y) || Ra(y))
        return y = zo(y, m.mode, S, null), y.return = m, y;
      Zl(m, y);
    }
    return null;
  }
  function f(m, y, S, x) {
    var k = y !== null ? y.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number")
      return k !== null ? null : s(m, y, "" + S, x);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Vl:
          return S.key === k ? l(m, y, S, x) : null;
        case vi:
          return S.key === k ? u(m, y, S, x) : null;
        case zr:
          return k = S._init, f(
            m,
            y,
            k(S._payload),
            x
          );
      }
      if (Xa(S) || Ra(S))
        return k !== null ? null : c(m, y, S, x, null);
      Zl(m, S);
    }
    return null;
  }
  function p(m, y, S, x, k) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return m = m.get(S) || null, s(y, m, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Vl:
          return m = m.get(x.key === null ? S : x.key) || null, l(y, m, x, k);
        case vi:
          return m = m.get(x.key === null ? S : x.key) || null, u(y, m, x, k);
        case zr:
          var P = x._init;
          return p(m, y, S, P(x._payload), k);
      }
      if (Xa(x) || Ra(x))
        return m = m.get(S) || null, c(y, m, x, k, null);
      Zl(y, x);
    }
    return null;
  }
  function g(m, y, S, x) {
    for (var k = null, P = null, _ = y, T = y = 0, M = null; _ !== null && T < S.length; T++) {
      _.index > T ? (M = _, _ = null) : M = _.sibling;
      var I = f(m, _, S[T], x);
      if (I === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && I.alternate === null && t(m, _), y = i(I, y, T), P === null ? k = I : P.sibling = I, P = I, _ = M;
    }
    if (T === S.length)
      return n(m, _), De && ko(m, T), k;
    if (_ === null) {
      for (; T < S.length; T++)
        _ = d(m, S[T], x), _ !== null && (y = i(_, y, T), P === null ? k = _ : P.sibling = _, P = _);
      return De && ko(m, T), k;
    }
    for (_ = r(m, _); T < S.length; T++)
      M = p(_, m, T, S[T], x), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? T : M.key), y = i(M, y, T), P === null ? k = M : P.sibling = M, P = M);
    return e && _.forEach(function(D) {
      return t(m, D);
    }), De && ko(m, T), k;
  }
  function h(m, y, S, x) {
    var k = Ra(S);
    if (typeof k != "function")
      throw Error(F(150));
    if (S = k.call(S), S == null)
      throw Error(F(151));
    for (var P = k = null, _ = y, T = y = 0, M = null, I = S.next(); _ !== null && !I.done; T++, I = S.next()) {
      _.index > T ? (M = _, _ = null) : M = _.sibling;
      var D = f(m, _, I.value, x);
      if (D === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && D.alternate === null && t(m, _), y = i(D, y, T), P === null ? k = D : P.sibling = D, P = D, _ = M;
    }
    if (I.done)
      return n(
        m,
        _
      ), De && ko(m, T), k;
    if (_ === null) {
      for (; !I.done; T++, I = S.next())
        I = d(m, I.value, x), I !== null && (y = i(I, y, T), P === null ? k = I : P.sibling = I, P = I);
      return De && ko(m, T), k;
    }
    for (_ = r(m, _); !I.done; T++, I = S.next())
      I = p(_, m, T, I.value, x), I !== null && (e && I.alternate !== null && _.delete(I.key === null ? T : I.key), y = i(I, y, T), P === null ? k = I : P.sibling = I, P = I);
    return e && _.forEach(function(G) {
      return t(m, G);
    }), De && ko(m, T), k;
  }
  function b(m, y, S, x) {
    if (typeof S == "object" && S !== null && S.type === gi && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Vl:
          e: {
            for (var k = S.key, P = y; P !== null; ) {
              if (P.key === k) {
                if (k = S.type, k === gi) {
                  if (P.tag === 7) {
                    n(m, P.sibling), y = o(P, S.props.children), y.return = m, m = y;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && ny(k) === P.type) {
                  n(m, P.sibling), y = o(P, S.props), y.ref = La(m, P, S), y.return = m, m = y;
                  break e;
                }
                n(m, P);
                break;
              } else
                t(m, P);
              P = P.sibling;
            }
            S.type === gi ? (y = zo(S.props.children, m.mode, x, S.key), y.return = m, m = y) : (x = ju(S.type, S.key, S.props, null, m.mode, x), x.ref = La(m, y, S), x.return = m, m = x);
          }
          return a(m);
        case vi:
          e: {
            for (P = S.key; y !== null; ) {
              if (y.key === P)
                if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                  n(m, y.sibling), y = o(y, S.children || []), y.return = m, m = y;
                  break e;
                } else {
                  n(m, y);
                  break;
                }
              else
                t(m, y);
              y = y.sibling;
            }
            y = Uf(S, m.mode, x), y.return = m, m = y;
          }
          return a(m);
        case zr:
          return P = S._init, b(m, y, P(S._payload), x);
      }
      if (Xa(S))
        return g(m, y, S, x);
      if (Ra(S))
        return h(m, y, S, x);
      Zl(m, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, y !== null && y.tag === 6 ? (n(m, y.sibling), y = o(y, S), y.return = m, m = y) : (n(m, y), y = Hf(S, m.mode, x), y.return = m, m = y), a(m)) : n(m, y);
  }
  return b;
}
var ra = rw(!0), ow = rw(!1), hl = {}, Zn = po(hl), Bs = po(hl), Ws = po(hl);
function Ao(e) {
  if (e === hl)
    throw Error(F(174));
  return e;
}
function av(e, t) {
  switch (Te(Ws, t), Te(Bs, e), Te(Zn, hl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jp(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jp(t, e);
  }
  Re(Zn), Te(Zn, t);
}
function oa() {
  Re(Zn), Re(Bs), Re(Ws);
}
function iw(e) {
  Ao(Ws.current);
  var t = Ao(Zn.current), n = Jp(t, e.type);
  t !== n && (Te(Bs, e), Te(Zn, n));
}
function sv(e) {
  Bs.current === e && (Re(Zn), Re(Bs));
}
var je = po(0);
function xc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var jf = [];
function lv() {
  for (var e = 0; e < jf.length; e++)
    jf[e]._workInProgressVersionPrimary = null;
  jf.length = 0;
}
var $u = Or.ReactCurrentDispatcher, zf = Or.ReactCurrentBatchConfig, Ko = 0, Ne = null, tt = null, it = null, wc = !1, ps = !1, Hs = 0, lM = 0;
function gt() {
  throw Error(F(321));
}
function uv(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ln(e[n], t[n]))
      return !1;
  return !0;
}
function cv(e, t, n, r, o, i) {
  if (Ko = i, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $u.current = e === null || e.memoizedState === null ? fM : pM, e = n(r, o), ps) {
    i = 0;
    do {
      if (ps = !1, Hs = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = tt = null, t.updateQueue = null, $u.current = hM, e = n(r, o);
    } while (ps);
  }
  if ($u.current = Cc, t = tt !== null && tt.next !== null, Ko = 0, it = tt = Ne = null, wc = !1, t)
    throw Error(F(300));
  return e;
}
function dv() {
  var e = Hs !== 0;
  return Hs = 0, e;
}
function Wn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return it === null ? Ne.memoizedState = it = e : it = it.next = e, it;
}
function bn() {
  if (tt === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = tt.next;
  var t = it === null ? Ne.memoizedState : it.next;
  if (t !== null)
    it = t, tt = e;
  else {
    if (e === null)
      throw Error(F(310));
    tt = e, e = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, it === null ? Ne.memoizedState = it = e : it = it.next = e;
  }
  return it;
}
function Us(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Nf(e) {
  var t = bn(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = tt, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = a = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((Ko & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = r) : l = l.next = d, Ne.lanes |= c, Yo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, Ln(r, t.memoizedState) || (At = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ne.lanes |= i, Yo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vf(e) {
  var t = bn(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    Ln(i, t.memoizedState) || (At = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function aw() {
}
function sw(e, t) {
  var n = Ne, r = bn(), o = t(), i = !Ln(r.memoizedState, o);
  if (i && (r.memoizedState = o, At = !0), r = r.queue, fv(cw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gs(9, uw.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Ko & 30 || lw(n, t, o);
  }
  return o;
}
function lw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function uw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, dw(t) && fw(e);
}
function cw(e, t, n) {
  return n(function() {
    dw(t) && fw(e);
  });
}
function dw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ln(e, n);
  } catch {
    return !0;
  }
}
function fw(e) {
  var t = kr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function ry(e) {
  var t = Wn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Us, lastRenderedState: e }, t.queue = e, e = e.dispatch = dM.bind(null, Ne, e), [t.memoizedState, e];
}
function Gs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function pw() {
  return bn().memoizedState;
}
function Au(e, t, n, r) {
  var o = Wn();
  Ne.flags |= e, o.memoizedState = Gs(1 | t, n, void 0, r === void 0 ? null : r);
}
function md(e, t, n, r) {
  var o = bn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (tt !== null) {
    var a = tt.memoizedState;
    if (i = a.destroy, r !== null && uv(r, a.deps)) {
      o.memoizedState = Gs(t, n, i, r);
      return;
    }
  }
  Ne.flags |= e, o.memoizedState = Gs(1 | t, n, i, r);
}
function oy(e, t) {
  return Au(8390656, 8, e, t);
}
function fv(e, t) {
  return md(2048, 8, e, t);
}
function hw(e, t) {
  return md(4, 2, e, t);
}
function mw(e, t) {
  return md(4, 4, e, t);
}
function vw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function gw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, md(4, 4, vw.bind(null, t, e), n);
}
function pv() {
}
function yw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function bw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && uv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Sw(e, t, n) {
  return Ko & 21 ? (Ln(n, t) || (n = Cx(), Ne.lanes |= n, Yo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n);
}
function uM(e, t) {
  var n = xe;
  xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = zf.transition;
  zf.transition = {};
  try {
    e(!1), t();
  } finally {
    xe = n, zf.transition = r;
  }
}
function xw() {
  return bn().memoizedState;
}
function cM(e, t, n) {
  var r = to(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ww(e))
    Cw(t, n);
  else if (n = Jx(e, t, n, r), n !== null) {
    var o = Et();
    An(n, e, r, o), kw(n, t, r);
  }
}
function dM(e, t, n) {
  var r = to(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ww(e))
    Cw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, Ln(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, ov(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Jx(e, t, o, r), n !== null && (o = Et(), An(n, e, r, o), kw(n, t, r));
  }
}
function ww(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function Cw(e, t) {
  ps = wc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function kw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Hm(e, n);
  }
}
var Cc = { readContext: yn, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, fM = { readContext: yn, useCallback: function(e, t) {
  return Wn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yn, useEffect: oy, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Au(
    4194308,
    4,
    vw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Au(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Au(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Wn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Wn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = cM.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wn();
  return e = { current: e }, t.memoizedState = e;
}, useState: ry, useDebugValue: pv, useDeferredValue: function(e) {
  return Wn().memoizedState = e;
}, useTransition: function() {
  var e = ry(!1), t = e[0];
  return e = uM.bind(null, e[1]), Wn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ne, o = Wn();
  if (De) {
    if (n === void 0)
      throw Error(F(407));
    n = n();
  } else {
    if (n = t(), st === null)
      throw Error(F(349));
    Ko & 30 || lw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, oy(cw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Gs(9, uw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Wn(), t = st.identifierPrefix;
  if (De) {
    var n = hr, r = pr;
    n = (r & ~(1 << 32 - $n(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = lM++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, pM = {
  readContext: yn,
  useCallback: yw,
  useContext: yn,
  useEffect: fv,
  useImperativeHandle: gw,
  useInsertionEffect: hw,
  useLayoutEffect: mw,
  useMemo: bw,
  useReducer: Nf,
  useRef: pw,
  useState: function() {
    return Nf(Us);
  },
  useDebugValue: pv,
  useDeferredValue: function(e) {
    var t = bn();
    return Sw(t, tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Nf(Us)[0], t = bn().memoizedState;
    return [e, t];
  },
  useMutableSource: aw,
  useSyncExternalStore: sw,
  useId: xw,
  unstable_isNewReconciler: !1
}, hM = { readContext: yn, useCallback: yw, useContext: yn, useEffect: fv, useImperativeHandle: gw, useInsertionEffect: hw, useLayoutEffect: mw, useMemo: bw, useReducer: Vf, useRef: pw, useState: function() {
  return Vf(Us);
}, useDebugValue: pv, useDeferredValue: function(e) {
  var t = bn();
  return tt === null ? t.memoizedState = e : Sw(t, tt.memoizedState, e);
}, useTransition: function() {
  var e = Vf(Us)[0], t = bn().memoizedState;
  return [e, t];
}, useMutableSource: aw, useSyncExternalStore: sw, useId: xw, unstable_isNewReconciler: !1 };
function ia(e, t) {
  try {
    var n = "", r = t;
    do
      n += BE(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Bf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function wh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mM = typeof WeakMap == "function" ? WeakMap : Map;
function Pw(e, t, n) {
  n = gr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Pc || (Pc = !0, Rh = r), wh(e, t);
  }, n;
}
function _w(e, t, n) {
  n = gr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      wh(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    wh(e, t), typeof r != "function" && (eo === null ? eo = /* @__PURE__ */ new Set([this]) : eo.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function iy(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mM();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = OM.bind(null, e, t, n), t.then(e, e));
}
function ay(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sy(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gr(-1, 1), t.tag = 2, Jr(n, t, 1))), n.lanes |= 1), e);
}
var vM = Or.ReactCurrentOwner, At = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? ow(t, null, n, r) : ra(t, e.child, n, r);
}
function ly(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Hi(t, o), r = cv(e, t, n, r, i, o), n = dv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (De && n && Zm(t), t.flags |= 1, Pt(e, t, r, o), t.child);
}
function uy(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !xv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Tw(e, t, i, r, o)) : (e = ju(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : js, n(a, r) && e.ref === t.ref)
      return Pr(e, t, o);
  }
  return t.flags |= 1, e = no(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Tw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (js(i, r) && e.ref === t.ref)
      if (At = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (At = !0);
      else
        return t.lanes = e.lanes, Pr(e, t, o);
  }
  return Ch(e, t, n, r, o);
}
function Ew(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Te(Ti, Kt), Kt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Te(Ti, Kt), Kt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Te(Ti, Kt), Kt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Te(Ti, Kt), Kt |= r;
  return Pt(e, t, o, n), t.child;
}
function Ow(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ch(e, t, n, r, o) {
  var i = Ft(n) ? Uo : wt.current;
  return i = ta(t, i), Hi(t, o), n = cv(e, t, n, r, i, o), r = dv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (De && r && Zm(t), t.flags |= 1, Pt(e, t, n, o), t.child);
}
function cy(e, t, n, r, o) {
  if (Ft(n)) {
    var i = !0;
    mc(t);
  } else
    i = !1;
  if (Hi(t, o), t.stateNode === null)
    Du(e, t), nw(t, n, r), xh(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = yn(u) : (u = Ft(n) ? Uo : wt.current, u = ta(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && ty(t, a, r, u), Nr = !1;
    var f = t.memoizedState;
    a.state = f, Sc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Dt.current || Nr ? (typeof c == "function" && (Sh(t, n, c, r), l = t.memoizedState), (s = Nr || ey(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, ew(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : En(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = yn(l) : (l = Ft(n) ? Uo : wt.current, l = ta(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && ty(t, a, r, l), Nr = !1, f = t.memoizedState, a.state = f, Sc(t, r, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || Dt.current || Nr ? (typeof p == "function" && (Sh(t, n, p, r), g = t.memoizedState), (u = Nr || ey(t, n, u, r, f, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return kh(e, t, n, r, i, o);
}
function kh(e, t, n, r, o, i) {
  Ow(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && q0(t, n, !1), Pr(e, t, i);
  r = t.stateNode, vM.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = ra(t, e.child, null, i), t.child = ra(t, null, s, i)) : Pt(e, t, s, i), t.memoizedState = r.state, o && q0(t, n, !0), t.child;
}
function Mw(e) {
  var t = e.stateNode;
  t.pendingContext ? Y0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Y0(e, t.context, !1), av(e, t.containerInfo);
}
function dy(e, t, n, r, o) {
  return na(), ev(o), t.flags |= 256, Pt(e, t, n, r), t.child;
}
var Ph = { dehydrated: null, treeContext: null, retryLane: 0 };
function _h(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Iw(e, t, n) {
  var r = t.pendingProps, o = je.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Te(je, o & 1), e === null)
    return yh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = yd(a, r, 0, null), e = zo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = _h(n), t.memoizedState = Ph, e) : hv(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return gM(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = no(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = no(s, i) : (i = zo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? _h(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = Ph, r;
  }
  return i = e.child, e = i.sibling, r = no(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function hv(e, t) {
  return t = yd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Jl(e, t, n, r) {
  return r !== null && ev(r), ra(t, e.child, null, n), e = hv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gM(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Bf(Error(F(422))), Jl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = yd({ mode: "visible", children: r.children }, o, 0, null), i = zo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ra(t, e.child, null, a), t.child.memoizedState = _h(a), t.memoizedState = Ph, i);
  if (!(t.mode & 1))
    return Jl(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = Bf(i, r, void 0), Jl(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, At || s) {
    if (r = st, r !== null) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, kr(e, o), An(r, e, o, -1));
    }
    return Sv(), r = Bf(Error(F(421))), Jl(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = MM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Yt = Zr(o.nextSibling), qt = t, De = !0, Mn = null, e !== null && (fn[pn++] = pr, fn[pn++] = hr, fn[pn++] = Go, pr = e.id, hr = e.overflow, Go = t), t = hv(t, r.children), t.flags |= 4096, t);
}
function fy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bh(e.return, t, n);
}
function Wf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Rw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Pt(e, t, r.children, n), r = je.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && fy(e, n, t);
          else if (e.tag === 19)
            fy(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (Te(je, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && xc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Wf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && xc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Wf(t, !0, n, null, i);
        break;
      case "together":
        Wf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Du(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Pr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Yo |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = no(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = no(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function yM(e, t, n) {
  switch (t.tag) {
    case 3:
      Mw(t), na();
      break;
    case 5:
      iw(t);
      break;
    case 1:
      Ft(t.type) && mc(t);
      break;
    case 4:
      av(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Te(yc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Te(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Iw(e, t, n) : (Te(je, je.current & 1), e = Pr(e, t, n), e !== null ? e.sibling : null);
      Te(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Rw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(je, je.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ew(e, t, n);
  }
  return Pr(e, t, n);
}
var $w, Th, Aw, Dw;
$w = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Th = function() {
};
Aw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Ao(Zn.current);
    var i = null;
    switch (n) {
      case "input":
        o = qp(e, o), r = qp(e, r), i = [];
        break;
      case "select":
        o = Ve({}, o, { value: void 0 }), r = Ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Zp(e, o), r = Zp(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = pc);
    }
    eh(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Is.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null))
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in l)
              l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a]);
          } else
            n || (i || (i = []), i.push(
              u,
              n
            )), n = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Is.hasOwnProperty(u) ? (l != null && u === "onScroll" && Me("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Dw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ja(e, t) {
  if (!De)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function yt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function bM(e, t, n) {
  var r = t.pendingProps;
  switch (Jm(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return yt(t), null;
    case 1:
      return Ft(t.type) && hc(), yt(t), null;
    case 3:
      return r = t.stateNode, oa(), Re(Dt), Re(wt), lv(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Mn !== null && (Dh(Mn), Mn = null))), Th(e, t), yt(t), null;
    case 5:
      sv(t);
      var o = Ao(Ws.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Aw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return yt(t), null;
        }
        if (e = Ao(Zn.current), Ql(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Yn] = t, r[Vs] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Me("cancel", r), Me("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Me("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Za.length; o++)
                Me(Za[o], r);
              break;
            case "source":
              Me("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Me(
                "error",
                r
              ), Me("load", r);
              break;
            case "details":
              Me("toggle", r);
              break;
            case "input":
              x0(r, i), Me("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Me("invalid", r);
              break;
            case "textarea":
              C0(r, i), Me("invalid", r);
          }
          eh(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Xl(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Xl(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Is.hasOwnProperty(a) && s != null && a === "onScroll" && Me("scroll", r);
            }
          switch (n) {
            case "input":
              Bl(r), w0(r, i, !0);
              break;
            case "textarea":
              Bl(r), k0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = pc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = lx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yn] = t, e[Vs] = r, $w(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = th(n, r), n) {
              case "dialog":
                Me("cancel", e), Me("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Me("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Za.length; o++)
                  Me(Za[o], e);
                o = r;
                break;
              case "source":
                Me("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Me(
                  "error",
                  e
                ), Me("load", e), o = r;
                break;
              case "details":
                Me("toggle", e), o = r;
                break;
              case "input":
                x0(e, r), o = qp(e, r), Me("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ve({}, r, { value: void 0 }), Me("invalid", e);
                break;
              case "textarea":
                C0(e, r), o = Zp(e, r), Me("invalid", e);
                break;
              default:
                o = r;
            }
            eh(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? dx(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && ux(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Rs(e, l) : typeof l == "number" && Rs(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Is.hasOwnProperty(i) ? l != null && i === "onScroll" && Me("scroll", e) : l != null && jm(e, i, l, a));
              }
            switch (n) {
              case "input":
                Bl(e), w0(e, r, !1);
                break;
              case "textarea":
                Bl(e), k0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ao(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Ni(e, !!r.multiple, i, !1) : r.defaultValue != null && Ni(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = pc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return yt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Dw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Ao(Ws.current), Ao(Zn.current), Ql(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Yn] = t, (i = r.nodeValue !== n) && (e = qt, e !== null))
            switch (e.tag) {
              case 3:
                Xl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yn] = t, t.stateNode = r;
      }
      return yt(t), null;
    case 13:
      if (Re(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (De && Yt !== null && t.mode & 1 && !(t.flags & 128))
          Zx(), na(), t.flags |= 98560, i = !1;
        else if (i = Ql(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(F(317));
            i[Yn] = t;
          } else
            na(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          yt(t), i = !1;
        } else
          Mn !== null && (Dh(Mn), Mn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? nt === 0 && (nt = 3) : Sv())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
    case 4:
      return oa(), Th(e, t), e === null && zs(t.stateNode.containerInfo), yt(t), null;
    case 10:
      return rv(t.type._context), yt(t), null;
    case 17:
      return Ft(t.type) && hc(), yt(t), null;
    case 19:
      if (Re(je), i = t.memoizedState, i === null)
        return yt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          ja(i, !1);
        else {
          if (nt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = xc(e), a !== null) {
                for (t.flags |= 128, ja(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Te(je, je.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ke() > aa && (t.flags |= 128, r = !0, ja(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = xc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ja(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !De)
              return yt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > aa && n !== 1073741824 && (t.flags |= 128, r = !0, ja(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = je.current, Te(je, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
    case 22:
    case 23:
      return bv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function SM(e, t) {
  switch (Jm(t), t.tag) {
    case 1:
      return Ft(t.type) && hc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return oa(), Re(Dt), Re(wt), lv(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return sv(t), null;
    case 13:
      if (Re(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        na();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Re(je), null;
    case 4:
      return oa(), null;
    case 10:
      return rv(t.type._context), null;
    case 22:
    case 23:
      return bv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var eu = !1, St = !1, xM = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function _i(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        We(e, t, r);
      }
    else
      n.current = null;
}
function Eh(e, t, n) {
  try {
    n();
  } catch (r) {
    We(e, t, r);
  }
}
var py = !1;
function wM(e, t) {
  if (dh = cc, e = zx(), Qm(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
          t:
            for (; ; ) {
              for (var p; d !== n || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = a + r), d.nodeType === 3 && (a += d.nodeValue.length), (p = d.firstChild) !== null; )
                f = d, d = p;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === n && ++u === o && (s = a), f === i && ++c === r && (l = a), (p = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = p;
            }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (fh = { focusedElem: e, selectionRange: n }, cc = !1, B = t; B !== null; )
    if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, B = e;
    else
      for (; B !== null; ) {
        t = B;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var h = g.memoizedProps, b = g.memoizedState, m = t.stateNode, y = m.getSnapshotBeforeUpdate(t.elementType === t.type ? h : En(t.type, h), b);
                  m.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var S = t.stateNode.containerInfo;
                S.nodeType === 1 ? S.textContent = "" : S.nodeType === 9 && S.documentElement && S.removeChild(S.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (x) {
          We(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return g = py, py = !1, g;
}
function hs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Eh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function vd(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Fw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Fw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yn], delete t[Vs], delete t[mh], delete t[oM], delete t[iM])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Lw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hy(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Lw(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Mh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = pc));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Mh(e, t, n), e = e.sibling; e !== null; )
      Mh(e, t, n), e = e.sibling;
}
function Ih(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ih(e, t, n), e = e.sibling; e !== null; )
      Ih(e, t, n), e = e.sibling;
}
var dt = null, On = !1;
function Ar(e, t, n) {
  for (n = n.child; n !== null; )
    jw(e, t, n), n = n.sibling;
}
function jw(e, t, n) {
  if (Qn && typeof Qn.onCommitFiberUnmount == "function")
    try {
      Qn.onCommitFiberUnmount(ld, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      St || _i(n, t);
    case 6:
      var r = dt, o = On;
      dt = null, Ar(e, t, n), dt = r, On = o, dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? Ff(e.parentNode, n) : e.nodeType === 1 && Ff(e, n), Fs(e)) : Ff(dt, n.stateNode));
      break;
    case 4:
      r = dt, o = On, dt = n.stateNode.containerInfo, On = !0, Ar(e, t, n), dt = r, On = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!St && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Eh(n, t, a), o = o.next;
        } while (o !== r);
      }
      Ar(e, t, n);
      break;
    case 1:
      if (!St && (_i(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          We(n, t, s);
        }
      Ar(e, t, n);
      break;
    case 21:
      Ar(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (St = (r = St) || n.memoizedState !== null, Ar(e, t, n), St = r) : Ar(e, t, n);
      break;
    default:
      Ar(e, t, n);
  }
}
function my(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xM()), t.forEach(function(r) {
      var o = IM.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function _n(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e, a = t, s = a;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                dt = s.stateNode, On = !1;
                break e;
              case 3:
                dt = s.stateNode.containerInfo, On = !0;
                break e;
              case 4:
                dt = s.stateNode.containerInfo, On = !0;
                break e;
            }
            s = s.return;
          }
        if (dt === null)
          throw Error(F(160));
        jw(i, a, o), dt = null, On = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        We(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      zw(t, e), t = t.sibling;
}
function zw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (_n(t, e), Vn(e), r & 4) {
        try {
          hs(3, e, e.return), vd(3, e);
        } catch (h) {
          We(e, e.return, h);
        }
        try {
          hs(5, e, e.return);
        } catch (h) {
          We(e, e.return, h);
        }
      }
      break;
    case 1:
      _n(t, e), Vn(e), r & 512 && n !== null && _i(n, n.return);
      break;
    case 5:
      if (_n(t, e), Vn(e), r & 512 && n !== null && _i(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Rs(o, "");
        } catch (h) {
          We(e, e.return, h);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && ax(o, i), th(s, a);
            var u = th(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? dx(o, d) : c === "dangerouslySetInnerHTML" ? ux(o, d) : c === "children" ? Rs(o, d) : jm(o, c, d, u);
            }
            switch (s) {
              case "input":
                Xp(o, i);
                break;
              case "textarea":
                sx(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? Ni(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? Ni(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Ni(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Vs] = i;
          } catch (h) {
            We(e, e.return, h);
          }
      }
      break;
    case 6:
      if (_n(t, e), Vn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(F(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (h) {
          We(e, e.return, h);
        }
      }
      break;
    case 3:
      if (_n(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Fs(t.containerInfo);
        } catch (h) {
          We(e, e.return, h);
        }
      break;
    case 4:
      _n(t, e), Vn(e);
      break;
    case 13:
      _n(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (gv = Ke())), r & 4 && my(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (St = (u = St) || c, _n(t, e), St = u) : _n(t, e), Vn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (B = e, c = e.child; c !== null; ) {
            for (d = B = c; B !== null; ) {
              switch (f = B, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hs(4, f, f.return);
                  break;
                case 1:
                  _i(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (h) {
                      We(r, n, h);
                    }
                  }
                  break;
                case 5:
                  _i(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    gy(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, B = p) : gy(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = cx("display", a));
                } catch (h) {
                  We(e, e.return, h);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (h) {
                  We(e, e.return, h);
                }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e)
              break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e)
                break e;
              c === d && (c = null), d = d.return;
            }
            c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
          }
      }
      break;
    case 19:
      _n(t, e), Vn(e), r & 4 && my(e);
      break;
    case 21:
      break;
    default:
      _n(
        t,
        e
      ), Vn(e);
  }
}
function Vn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Rs(o, ""), r.flags &= -33);
          var i = hy(e);
          Ih(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = hy(e);
          Mh(e, s, a);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      We(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function CM(e, t, n) {
  B = e, Nw(e);
}
function Nw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || eu;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || St;
        s = eu;
        var u = St;
        if (eu = a, (St = l) && !u)
          for (B = o; B !== null; )
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? yy(o) : l !== null ? (l.return = a, B = l) : yy(o);
        for (; i !== null; )
          B = i, Nw(i), i = i.sibling;
        B = o, eu = s, St = u;
      }
      vy(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : vy(e);
  }
}
function vy(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              St || vd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !St)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : En(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && J0(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                J0(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Fs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        St || t.flags & 512 && Oh(t);
      } catch (f) {
        We(t, t.return, f);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function gy(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, B = n;
      break;
    }
    B = t.return;
  }
}
function yy(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vd(4, t);
          } catch (l) {
            We(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              We(t, o, l);
            }
          }
          var i = t.return;
          try {
            Oh(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Oh(t);
          } catch (l) {
            We(t, a, l);
          }
      }
    } catch (l) {
      We(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, B = s;
      break;
    }
    B = t.return;
  }
}
var kM = Math.ceil, kc = Or.ReactCurrentDispatcher, mv = Or.ReactCurrentOwner, vn = Or.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Kt = 0, Ti = po(0), nt = 0, Ks = null, Yo = 0, gd = 0, vv = 0, ms = null, Rt = null, gv = 0, aa = 1 / 0, ur = null, Pc = !1, Rh = null, eo = null, tu = !1, Yr = null, _c = 0, vs = 0, $h = null, Fu = -1, Lu = 0;
function Et() {
  return he & 6 ? Ke() : Fu !== -1 ? Fu : Fu = Ke();
}
function to(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : sM.transition !== null ? (Lu === 0 && (Lu = Cx()), Lu) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mx(e.type)), e) : 1;
}
function An(e, t, n, r) {
  if (50 < vs)
    throw vs = 0, $h = null, Error(F(185));
  dl(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (gd |= n), nt === 4 && Wr(e, pt)), Lt(e, r), n === 1 && he === 0 && !(t.mode & 1) && (aa = Ke() + 500, pd && ho()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  sO(e, t);
  var r = uc(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && T0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && T0(n), t === 1)
      e.tag === 0 ? aM(by.bind(null, e)) : qx(by.bind(null, e)), nM(function() {
        !(he & 6) && ho();
      }), n = null;
    else {
      switch (kx(r)) {
        case 1:
          n = Wm;
          break;
        case 4:
          n = xx;
          break;
        case 16:
          n = lc;
          break;
        case 536870912:
          n = wx;
          break;
        default:
          n = lc;
      }
      n = Yw(n, Vw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Vw(e, t) {
  if (Fu = -1, Lu = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Ui() && e.callbackNode !== n)
    return null;
  var r = uc(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Tc(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Ww();
    (st !== e || pt !== t) && (ur = null, aa = Ke() + 500, jo(e, t));
    do
      try {
        TM();
        break;
      } catch (s) {
        Bw(e, s);
      }
    while (!0);
    nv(), kc.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = nt);
  }
  if (t !== 0) {
    if (t === 2 && (o = ah(e), o !== 0 && (r = o, t = Ah(e, o))), t === 1)
      throw n = Ks, jo(e, 0), Wr(e, r), Lt(e, Ke()), n;
    if (t === 6)
      Wr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !PM(o) && (t = Tc(e, r), t === 2 && (i = ah(e), i !== 0 && (r = i, t = Ah(e, i))), t === 1))
        throw n = Ks, jo(e, 0), Wr(e, r), Lt(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Po(e, Rt, ur);
          break;
        case 3:
          if (Wr(e, r), (r & 130023424) === r && (t = gv + 500 - Ke(), 10 < t)) {
            if (uc(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Et(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = hh(Po.bind(null, e, Rt, ur), t);
            break;
          }
          Po(e, Rt, ur);
          break;
        case 4:
          if (Wr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - $n(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kM(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = hh(Po.bind(null, e, Rt, ur), r);
            break;
          }
          Po(e, Rt, ur);
          break;
        case 5:
          Po(e, Rt, ur);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Lt(e, Ke()), e.callbackNode === n ? Vw.bind(null, e) : null;
}
function Ah(e, t) {
  var n = ms;
  return e.current.memoizedState.isDehydrated && (jo(e, t).flags |= 256), e = Tc(e, t), e !== 2 && (t = Rt, Rt = n, t !== null && Dh(t)), e;
}
function Dh(e) {
  Rt === null ? Rt = e : Rt.push.apply(Rt, e);
}
function PM(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ln(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Wr(e, t) {
  for (t &= ~vv, t &= ~gd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $n(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function by(e) {
  if (he & 6)
    throw Error(F(327));
  Ui();
  var t = uc(e, 0);
  if (!(t & 1))
    return Lt(e, Ke()), null;
  var n = Tc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ah(e);
    r !== 0 && (t = r, n = Ah(e, r));
  }
  if (n === 1)
    throw n = Ks, jo(e, 0), Wr(e, t), Lt(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Po(e, Rt, ur), Lt(e, Ke()), null;
}
function yv(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (aa = Ke() + 500, pd && ho());
  }
}
function qo(e) {
  Yr !== null && Yr.tag === 0 && !(he & 6) && Ui();
  var t = he;
  he |= 1;
  var n = vn.transition, r = xe;
  try {
    if (vn.transition = null, xe = 1, e)
      return e();
  } finally {
    xe = r, vn.transition = n, he = t, !(he & 6) && ho();
  }
}
function bv() {
  Kt = Ti.current, Re(Ti);
}
function jo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, tM(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (Jm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && hc();
          break;
        case 3:
          oa(), Re(Dt), Re(wt), lv();
          break;
        case 5:
          sv(r);
          break;
        case 4:
          oa();
          break;
        case 13:
          Re(je);
          break;
        case 19:
          Re(je);
          break;
        case 10:
          rv(r.type._context);
          break;
        case 22:
        case 23:
          bv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = no(e.current, null), pt = Kt = t, nt = 0, Ks = null, vv = gd = Yo = 0, Rt = ms = null, $o !== null) {
    for (t = 0; t < $o.length; t++)
      if (n = $o[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    $o = null;
  }
  return e;
}
function Bw(e, t) {
  do {
    var n = Ze;
    try {
      if (nv(), $u.current = Cc, wc) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        wc = !1;
      }
      if (Ko = 0, it = tt = Ne = null, ps = !1, Hs = 0, mv.current = null, n === null || n.return === null) {
        nt = 1, Ks = t, Ze = null;
        break;
      }
      e: {
        var i = e, a = n.return, s = n, l = t;
        if (t = pt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = ay(a);
          if (p !== null) {
            p.flags &= -257, sy(p, a, s, i, t), p.mode & 1 && iy(i, u, t), t = p, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var h = /* @__PURE__ */ new Set();
              h.add(l), t.updateQueue = h;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              iy(i, u, t), Sv();
              break e;
            }
            l = Error(F(426));
          }
        } else if (De && s.mode & 1) {
          var b = ay(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), sy(b, a, s, i, t), ev(ia(l, s));
            break e;
          }
        }
        i = l = ia(l, s), nt !== 4 && (nt = 2), ms === null ? ms = [i] : ms.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Pw(i, l, t);
              Z0(i, m);
              break e;
            case 1:
              s = l;
              var y = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof y.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (eo === null || !eo.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = _w(i, s, t);
                Z0(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Uw(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ww() {
  var e = kc.current;
  return kc.current = Cc, e === null ? Cc : e;
}
function Sv() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4), st === null || !(Yo & 268435455) && !(gd & 268435455) || Wr(st, pt);
}
function Tc(e, t) {
  var n = he;
  he |= 2;
  var r = Ww();
  (st !== e || pt !== t) && (ur = null, jo(e, t));
  do
    try {
      _M();
      break;
    } catch (o) {
      Bw(e, o);
    }
  while (!0);
  if (nv(), he = n, kc.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, nt;
}
function _M() {
  for (; Ze !== null; )
    Hw(Ze);
}
function TM() {
  for (; Ze !== null && !ZE(); )
    Hw(Ze);
}
function Hw(e) {
  var t = Kw(e.alternate, e, Kt);
  e.memoizedProps = e.pendingProps, t === null ? Uw(e) : Ze = t, mv.current = null;
}
function Uw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = SM(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        nt = 6, Ze = null;
        return;
      }
    } else if (n = bM(n, t, Kt), n !== null) {
      Ze = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ze = t;
      return;
    }
    Ze = t = e;
  } while (t !== null);
  nt === 0 && (nt = 5);
}
function Po(e, t, n) {
  var r = xe, o = vn.transition;
  try {
    vn.transition = null, xe = 1, EM(e, t, n, r);
  } finally {
    vn.transition = o, xe = r;
  }
  return null;
}
function EM(e, t, n, r) {
  do
    Ui();
  while (Yr !== null);
  if (he & 6)
    throw Error(F(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(F(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (lO(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || tu || (tu = !0, Yw(lc, function() {
    return Ui(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = vn.transition, vn.transition = null;
    var a = xe;
    xe = 1;
    var s = he;
    he |= 4, mv.current = null, wM(e, n), zw(n, e), YO(fh), cc = !!dh, fh = dh = null, e.current = n, CM(n), JE(), he = s, xe = a, vn.transition = i;
  } else
    e.current = n;
  if (tu && (tu = !1, Yr = e, _c = o), i = e.pendingLanes, i === 0 && (eo = null), nO(n.stateNode), Lt(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pc)
    throw Pc = !1, e = Rh, Rh = null, e;
  return _c & 1 && e.tag !== 0 && Ui(), i = e.pendingLanes, i & 1 ? e === $h ? vs++ : (vs = 0, $h = e) : vs = 0, ho(), null;
}
function Ui() {
  if (Yr !== null) {
    var e = kx(_c), t = vn.transition, n = xe;
    try {
      if (vn.transition = null, xe = 16 > e ? 16 : e, Yr === null)
        var r = !1;
      else {
        if (e = Yr, Yr = null, _c = 0, he & 6)
          throw Error(F(331));
        var o = he;
        for (he |= 4, B = e.current; B !== null; ) {
          var i = B, a = i.child;
          if (B.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (Fw(c), c === u) {
                        B = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, B = f;
                        break;
                      }
                      B = p;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var h = g.child;
                if (h !== null) {
                  g.child = null;
                  do {
                    var b = h.sibling;
                    h.sibling = null, h = b;
                  } while (h !== null);
                }
              }
              B = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, B = a;
          else
            e:
              for (; B !== null; ) {
                if (i = B, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, B = m;
                  break e;
                }
                B = i.return;
              }
        }
        var y = e.current;
        for (B = y; B !== null; ) {
          a = B;
          var S = a.child;
          if (a.subtreeFlags & 2064 && S !== null)
            S.return = a, B = S;
          else
            e:
              for (a = y; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vd(9, s);
                    }
                  } catch (k) {
                    We(s, s.return, k);
                  }
                if (s === a) {
                  B = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  x.return = s.return, B = x;
                  break e;
                }
                B = s.return;
              }
        }
        if (he = o, ho(), Qn && typeof Qn.onPostCommitFiberRoot == "function")
          try {
            Qn.onPostCommitFiberRoot(ld, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      xe = n, vn.transition = t;
    }
  }
  return !1;
}
function Sy(e, t, n) {
  t = ia(n, t), t = Pw(e, t, 1), e = Jr(e, t, 1), t = Et(), e !== null && (dl(e, 1, t), Lt(e, t));
}
function We(e, t, n) {
  if (e.tag === 3)
    Sy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (eo === null || !eo.has(r))) {
          e = ia(n, e), e = _w(t, e, 1), t = Jr(t, e, 1), e = Et(), t !== null && (dl(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function OM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Et(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (nt === 4 || nt === 3 && (pt & 130023424) === pt && 500 > Ke() - gv ? jo(e, 0) : vv |= n), Lt(e, t);
}
function Gw(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ul, Ul <<= 1, !(Ul & 130023424) && (Ul = 4194304)) : t = 1);
  var n = Et();
  e = kr(e, t), e !== null && (dl(e, t, n), Lt(e, n));
}
function MM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Gw(e, n);
}
function IM(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Gw(e, n);
}
var Kw;
Kw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current)
      At = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return At = !1, yM(e, t, n);
      At = !!(e.flags & 131072);
    }
  else
    At = !1, De && t.flags & 1048576 && Xx(t, gc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Du(e, t), e = t.pendingProps;
      var o = ta(t, wt.current);
      Hi(t, n), o = cv(null, t, r, e, o, n);
      var i = dv();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(r) ? (i = !0, mc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, iv(t), o.updater = hd, t.stateNode = o, o._reactInternals = t, xh(t, r, e, n), t = kh(null, t, r, !0, i, n)) : (t.tag = 0, De && i && Zm(t), Pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Du(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = $M(r), e = En(r, e), o) {
          case 0:
            t = Ch(null, t, r, e, n);
            break e;
          case 1:
            t = cy(null, t, r, e, n);
            break e;
          case 11:
            t = ly(null, t, r, e, n);
            break e;
          case 14:
            t = uy(null, t, r, En(r.type, e), n);
            break e;
        }
        throw Error(F(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), Ch(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), cy(e, t, r, o, n);
    case 3:
      e: {
        if (Mw(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, ew(e, t), Sc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ia(Error(F(423)), t), t = dy(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ia(Error(F(424)), t), t = dy(e, t, r, n, o);
            break e;
          } else
            for (Yt = Zr(t.stateNode.containerInfo.firstChild), qt = t, De = !0, Mn = null, n = ow(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (na(), r === o) {
            t = Pr(e, t, n);
            break e;
          }
          Pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return iw(t), e === null && yh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, ph(r, o) ? a = null : i !== null && ph(r, i) && (t.flags |= 32), Ow(e, t), Pt(e, t, a, n), t.child;
    case 6:
      return e === null && yh(t), null;
    case 13:
      return Iw(e, t, n);
    case 4:
      return av(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ra(t, null, r, n) : Pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), ly(e, t, r, o, n);
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Te(yc, r._currentValue), r._currentValue = a, i !== null)
          if (Ln(i.value, a)) {
            if (i.children === o.children && !Dt.current) {
              t = Pr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = gr(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), bh(
                      i.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (a = i.return, a === null)
                  throw Error(F(341));
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), bh(a, n, t), a = i.sibling;
              } else
                a = i.child;
              if (a !== null)
                a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (i = a.sibling, i !== null) {
                    i.return = a.return, a = i;
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Pt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Hi(t, n), o = yn(o), r = r(o), t.flags |= 1, Pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = En(r, t.pendingProps), o = En(r.type, o), uy(e, t, r, o, n);
    case 15:
      return Tw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), Du(e, t), t.tag = 1, Ft(r) ? (e = !0, mc(t)) : e = !1, Hi(t, n), nw(t, r, o), xh(t, r, o, n), kh(null, t, r, !0, e, n);
    case 19:
      return Rw(e, t, n);
    case 22:
      return Ew(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Yw(e, t) {
  return Sx(e, t);
}
function RM(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function hn(e, t, n, r) {
  return new RM(e, t, n, r);
}
function xv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function $M(e) {
  if (typeof e == "function")
    return xv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Nm)
      return 11;
    if (e === Vm)
      return 14;
  }
  return 2;
}
function no(e, t) {
  var n = e.alternate;
  return n === null ? (n = hn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ju(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    xv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case gi:
          return zo(n.children, o, i, t);
        case zm:
          a = 8, o |= 8;
          break;
        case Up:
          return e = hn(12, n, t, o | 2), e.elementType = Up, e.lanes = i, e;
        case Gp:
          return e = hn(13, n, t, o), e.elementType = Gp, e.lanes = i, e;
        case Kp:
          return e = hn(19, n, t, o), e.elementType = Kp, e.lanes = i, e;
        case rx:
          return yd(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case tx:
                a = 10;
                break e;
              case nx:
                a = 9;
                break e;
              case Nm:
                a = 11;
                break e;
              case Vm:
                a = 14;
                break e;
              case zr:
                a = 16, r = null;
                break e;
            }
          throw Error(F(130, e == null ? e : typeof e, ""));
      }
  return t = hn(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function zo(e, t, n, r) {
  return e = hn(7, e, r, t), e.lanes = n, e;
}
function yd(e, t, n, r) {
  return e = hn(22, e, r, t), e.elementType = rx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Hf(e, t, n) {
  return e = hn(6, e, null, t), e.lanes = n, e;
}
function Uf(e, t, n) {
  return t = hn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function AM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pf(0), this.expirationTimes = Pf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function wv(e, t, n, r, o, i, a, s, l) {
  return e = new AM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = hn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, iv(i), e;
}
function DM(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function qw(e) {
  if (!e)
    return so;
  e = e._reactInternals;
  e: {
    if (Jo(e) !== e || e.tag !== 1)
      throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ft(n))
      return Yx(e, n, t);
  }
  return t;
}
function Xw(e, t, n, r, o, i, a, s, l) {
  return e = wv(n, r, !0, e, o, i, a, s, l), e.context = qw(null), n = e.current, r = Et(), o = to(n), i = gr(r, o), i.callback = t ?? null, Jr(n, i, o), e.current.lanes = o, dl(e, o, r), Lt(e, r), e;
}
function bd(e, t, n, r) {
  var o = t.current, i = Et(), a = to(o);
  return n = qw(n), t.context === null ? t.context = n : t.pendingContext = n, t = gr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jr(o, t, a), e !== null && (An(e, o, a, i), Ru(e, o, a)), a;
}
function Ec(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xy(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Cv(e, t) {
  xy(e, t), (e = e.alternate) && xy(e, t);
}
function FM() {
  return null;
}
var Qw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function kv(e) {
  this._internalRoot = e;
}
Sd.prototype.render = kv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  bd(e, t, null, null);
};
Sd.prototype.unmount = kv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qo(function() {
      bd(null, e, null, null);
    }), t[Cr] = null;
  }
};
function Sd(e) {
  this._internalRoot = e;
}
Sd.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Tx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++)
      ;
    Br.splice(n, 0, e), n === 0 && Ox(e);
  }
};
function Pv(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wy() {
}
function LM(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Ec(a);
        i.call(u);
      };
    }
    var a = Xw(t, r, e, 0, null, !1, !1, "", wy);
    return e._reactRootContainer = a, e[Cr] = a.current, zs(e.nodeType === 8 ? e.parentNode : e), qo(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Ec(l);
      s.call(u);
    };
  }
  var l = wv(e, 0, !1, null, null, !1, !1, "", wy);
  return e._reactRootContainer = l, e[Cr] = l.current, zs(e.nodeType === 8 ? e.parentNode : e), qo(function() {
    bd(t, l, n, r);
  }), l;
}
function wd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Ec(a);
        s.call(l);
      };
    }
    bd(t, a, e, o);
  } else
    a = LM(n, t, e, o, r);
  return Ec(a);
}
Px = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qa(t.pendingLanes);
        n !== 0 && (Hm(t, n | 1), Lt(t, Ke()), !(he & 6) && (aa = Ke() + 500, ho()));
      }
      break;
    case 13:
      qo(function() {
        var r = kr(e, 1);
        if (r !== null) {
          var o = Et();
          An(r, e, 1, o);
        }
      }), Cv(e, 1);
  }
};
Um = function(e) {
  if (e.tag === 13) {
    var t = kr(e, 134217728);
    if (t !== null) {
      var n = Et();
      An(t, e, 134217728, n);
    }
    Cv(e, 134217728);
  }
};
_x = function(e) {
  if (e.tag === 13) {
    var t = to(e), n = kr(e, t);
    if (n !== null) {
      var r = Et();
      An(n, e, t, r);
    }
    Cv(e, t);
  }
};
Tx = function() {
  return xe;
};
Ex = function(e, t) {
  var n = xe;
  try {
    return xe = e, t();
  } finally {
    xe = n;
  }
};
rh = function(e, t, n) {
  switch (t) {
    case "input":
      if (Xp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = fd(r);
            if (!o)
              throw Error(F(90));
            ix(r), Xp(r, o);
          }
        }
      }
      break;
    case "textarea":
      sx(e, n);
      break;
    case "select":
      t = n.value, t != null && Ni(e, !!n.multiple, t, !1);
  }
};
hx = yv;
mx = qo;
var jM = { usingClientEntryPoint: !1, Events: [pl, xi, fd, fx, px, yv] }, za = { findFiberByHostInstance: Ro, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, zM = { bundleType: za.bundleType, version: za.version, rendererPackageName: za.rendererPackageName, rendererConfig: za.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Or.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = yx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: za.findFiberByHostInstance || FM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!nu.isDisabled && nu.supportsFiber)
    try {
      ld = nu.inject(zM), Qn = nu;
    } catch {
    }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jM;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pv(t))
    throw Error(F(200));
  return DM(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!Pv(e))
    throw Error(F(299));
  var n = !1, r = "", o = Qw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = wv(e, 1, !1, null, null, n, !1, r, o), e[Cr] = t.current, zs(e.nodeType === 8 ? e.parentNode : e), new kv(t);
};
tn.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = yx(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return qo(e);
};
tn.hydrate = function(e, t, n) {
  if (!xd(t))
    throw Error(F(200));
  return wd(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!Pv(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Qw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Xw(t, null, e, 1, n ?? null, o, !1, i, a), e[Cr] = t.current, zs(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Sd(t);
};
tn.render = function(e, t, n) {
  if (!xd(t))
    throw Error(F(200));
  return wd(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function(e) {
  if (!xd(e))
    throw Error(F(40));
  return e._reactRootContainer ? (qo(function() {
    wd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Cr] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = yv;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return wd(e, t, n, !1, r);
};
tn.version = "18.2.0-next-9e3b772b8-20220608";
function Zw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zw);
    } catch (e) {
      console.error(e);
    }
}
Zw(), XS.exports = tn;
var Cd = XS.exports, Cy = Cd;
Wp.createRoot = Cy.createRoot, Wp.hydrateRoot = Cy.hydrateRoot;
var Jw = "Expected a function", ky = NaN, NM = "[object Symbol]", VM = /^\s+|\s+$/g, BM = /^[-+]0x[0-9a-f]+$/i, WM = /^0b[01]+$/i, HM = /^0o[0-7]+$/i, UM = parseInt, GM = typeof Gr == "object" && Gr && Gr.Object === Object && Gr, KM = typeof self == "object" && self && self.Object === Object && self, YM = GM || KM || Function("return this")(), qM = Object.prototype, XM = qM.toString, QM = Math.max, ZM = Math.min, Gf = function() {
  return YM.Date.now();
};
function JM(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Jw);
  t = Py(t) || 0, Oc(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? QM(Py(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var _ = r, T = o;
    return r = o = void 0, u = P, a = e.apply(T, _), a;
  }
  function g(P) {
    return u = P, s = setTimeout(m, t), c ? p(P) : a;
  }
  function h(P) {
    var _ = P - l, T = P - u, M = t - _;
    return d ? ZM(M, i - T) : M;
  }
  function b(P) {
    var _ = P - l, T = P - u;
    return l === void 0 || _ >= t || _ < 0 || d && T >= i;
  }
  function m() {
    var P = Gf();
    if (b(P))
      return y(P);
    s = setTimeout(m, h(P));
  }
  function y(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function S() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? a : y(Gf());
  }
  function k() {
    var P = Gf(), _ = b(P);
    if (r = arguments, o = this, l = P, _) {
      if (s === void 0)
        return g(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return k.cancel = S, k.flush = x, k;
}
function eI(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Jw);
  return Oc(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), JM(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Oc(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function tI(e) {
  return !!e && typeof e == "object";
}
function nI(e) {
  return typeof e == "symbol" || tI(e) && XM.call(e) == NM;
}
function Py(e) {
  if (typeof e == "number")
    return e;
  if (nI(e))
    return ky;
  if (Oc(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Oc(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(VM, "");
  var n = WM.test(e);
  return n || HM.test(e) ? UM(e.slice(2), n ? 2 : 8) : BM.test(e) ? ky : +e;
}
var rI = eI;
const oI = /* @__PURE__ */ ul(rI);
function iI(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function aI(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var sI = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(aI(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = iI(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), bt = "-ms-", Mc = "-moz-", ge = "-webkit-", eC = "comm", _v = "rule", Tv = "decl", lI = "@import", tC = "@keyframes", uI = "@layer", cI = Math.abs, kd = String.fromCharCode, dI = Object.assign;
function fI(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function nC(e) {
  return e.trim();
}
function pI(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Fh(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ys(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function Ev(e) {
  return e.length;
}
function ru(e, t) {
  return t.push(e), e;
}
function hI(e, t) {
  return e.map(t).join("");
}
var Pd = 1, sa = 1, rC = 0, Vt = 0, Qe = 0, ka = "";
function _d(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Pd, column: sa, length: a, return: "" };
}
function Na(e, t) {
  return dI(_d("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mI() {
  return Qe;
}
function vI() {
  return Qe = Vt > 0 ? ft(ka, --Vt) : 0, sa--, Qe === 10 && (sa = 1, Pd--), Qe;
}
function Xt() {
  return Qe = Vt < rC ? ft(ka, Vt++) : 0, sa++, Qe === 10 && (sa = 1, Pd++), Qe;
}
function Jn() {
  return ft(ka, Vt);
}
function zu() {
  return Vt;
}
function ml(e, t) {
  return Ys(ka, e, t);
}
function qs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function oC(e) {
  return Pd = sa = 1, rC = Gn(ka = e), Vt = 0, [];
}
function iC(e) {
  return ka = "", e;
}
function Nu(e) {
  return nC(ml(Vt - 1, Lh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gI(e) {
  for (; (Qe = Jn()) && Qe < 33; )
    Xt();
  return qs(e) > 2 || qs(Qe) > 3 ? "" : " ";
}
function yI(e, t) {
  for (; --t && Xt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return ml(e, zu() + (t < 6 && Jn() == 32 && Xt() == 32));
}
function Lh(e) {
  for (; Xt(); )
    switch (Qe) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Lh(Qe);
        break;
      case 40:
        e === 41 && Lh(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Vt;
}
function bI(e, t) {
  for (; Xt() && e + Qe !== 57; )
    if (e + Qe === 84 && Jn() === 47)
      break;
  return "/*" + ml(t, Vt - 1) + "*" + kd(e === 47 ? e : Xt());
}
function SI(e) {
  for (; !qs(Jn()); )
    Xt();
  return ml(e, Vt);
}
function xI(e) {
  return iC(Vu("", null, null, null, [""], e = oC(e), 0, [0], e));
}
function Vu(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, g = 0, h = 1, b = 1, m = 1, y = 0, S = "", x = o, k = i, P = r, _ = S; b; )
    switch (g = y, y = Xt()) {
      case 40:
        if (g != 108 && ft(_, d - 1) == 58) {
          Fh(_ += ye(Nu(y), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Nu(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += gI(g);
        break;
      case 92:
        _ += yI(zu() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            ru(wI(bI(Xt(), zu()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * h:
        s[u++] = Gn(_) * m;
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            m == -1 && (_ = ye(_, /\f/g, "")), p > 0 && Gn(_) - d && ru(p > 32 ? Ty(_ + ";", r, n, d - 1) : Ty(ye(_, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (ru(P = _y(_, t, n, u, c, o, s, S, x = [], k = [], d), i), y === 123)
              if (c === 0)
                Vu(_, t, P, P, x, i, d, s, k);
              else
                switch (f === 99 && ft(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vu(e, P, P, r && ru(_y(e, P, P, 0, 0, o, s, S, o, x = [], d), k), o, k, d, s, r ? x : k);
                    break;
                  default:
                    Vu(_, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, h = m = 1, S = _ = "", d = a;
        break;
      case 58:
        d = 1 + Gn(_), p = g;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && vI() == 125)
            continue;
        }
        switch (_ += kd(y), y * h) {
          case 38:
            m = c > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[u++] = (Gn(_) - 1) * m, m = 1;
            break;
          case 64:
            Jn() === 45 && (_ += Nu(Xt())), f = Jn(), c = d = Gn(S = _ += SI(zu())), y++;
            break;
          case 45:
            g === 45 && Gn(_) == 2 && (h = 0);
        }
    }
  return i;
}
function _y(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = Ev(f), g = 0, h = 0, b = 0; g < r; ++g)
    for (var m = 0, y = Ys(e, d + 1, d = cI(h = a[g])), S = e; m < p; ++m)
      (S = nC(h > 0 ? f[m] + " " + y : ye(y, /&\f/g, f[m]))) && (l[b++] = S);
  return _d(e, t, n, o === 0 ? _v : s, l, u, c);
}
function wI(e, t, n) {
  return _d(e, t, n, eC, kd(mI()), Ys(e, 2, -2), 0);
}
function Ty(e, t, n, r) {
  return _d(e, t, n, Tv, Ys(e, 0, r), Ys(e, r + 1, -1), r);
}
function Gi(e, t) {
  for (var n = "", r = Ev(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function CI(e, t, n, r) {
  switch (e.type) {
    case uI:
      if (e.children.length)
        break;
    case lI:
    case Tv:
      return e.return = e.return || e.value;
    case eC:
      return "";
    case tC:
      return e.return = e.value + "{" + Gi(e.children, r) + "}";
    case _v:
      e.value = e.props.join(",");
  }
  return Gn(n = Gi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function kI(e) {
  var t = Ev(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function PI(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ey = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function aC(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var _I = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Jn(), o === 38 && i === 12 && (n[r] = 1), !qs(i); )
    Xt();
  return ml(t, Vt);
}, TI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (qs(o)) {
      case 0:
        o === 38 && Jn() === 12 && (n[r] = 1), t[r] += _I(Vt - 1, n, r);
        break;
      case 2:
        t[r] += Nu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Jn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += kd(o);
    }
  while (o = Xt());
  return t;
}, EI = function(t, n) {
  return iC(TI(oC(t), n));
}, Oy = /* @__PURE__ */ new WeakMap(), OI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Oy.get(r)) && !o) {
      Oy.set(t, !0);
      for (var i = [], a = EI(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, MI = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function sC(e, t) {
  switch (fI(e, t)) {
    case 5103:
      return ge + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ge + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + Mc + e + bt + e + e;
    case 6828:
    case 4268:
      return ge + e + bt + e + e;
    case 6165:
      return ge + e + bt + "flex-" + e + e;
    case 5187:
      return ge + e + ye(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + bt + "flex-$1$2") + e;
    case 5443:
      return ge + e + bt + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return ge + e + bt + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ge + e + bt + ye(e, "shrink", "negative") + e;
    case 5292:
      return ge + e + bt + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return ge + "box-" + ye(e, "-grow", "") + ge + e + bt + ye(e, "grow", "positive") + e;
    case 4554:
      return ge + ye(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + bt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Gn(e) - 1 - t > 6)
        switch (ft(e, t + 1)) {
          case 109:
            if (ft(e, t + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Mc + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Fh(e, "stretch") ? sC(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Gn(e) - 3 - (~Fh(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + ge) + e;
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ge + (ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + bt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ft(e, t + 11)) {
        case 114:
          return ge + e + bt + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ge + e + bt + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ge + e + bt + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ge + e + bt + e + e;
  }
  return e;
}
var II = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Tv:
        t.return = sC(t.value, t.length);
        break;
      case tC:
        return Gi([Na(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case _v:
        if (t.length)
          return hI(t.props, function(i) {
            switch (pI(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Gi([Na(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + Mc + "$1")]
                })], o);
              case "::placeholder":
                return Gi([Na(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), Na(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + Mc + "$1")]
                }), Na(t, {
                  props: [ye(i, /:(plac\w+)/, bt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, RI = [II], $I = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(h) {
      var b = h.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || RI, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(h) {
      for (var b = h.getAttribute("data-emotion").split(" "), m = 1; m < b.length; m++)
        i[b[m]] = !0;
      s.push(h);
    }
  );
  var l, u = [OI, MI];
  {
    var c, d = [CI, PI(function(h) {
      c.insert(h);
    })], f = kI(u.concat(o, d)), p = function(b) {
      return Gi(xI(b), f);
    };
    l = function(b, m, y, S) {
      c = y, p(b ? b + "{" + m.styles + "}" : m.styles), S && (g.inserted[m.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new sI({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(s), g;
};
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, q.apply(this, arguments);
}
var lC = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, Ov = lt ? Symbol.for("react.element") : 60103, Mv = lt ? Symbol.for("react.portal") : 60106, Td = lt ? Symbol.for("react.fragment") : 60107, Ed = lt ? Symbol.for("react.strict_mode") : 60108, Od = lt ? Symbol.for("react.profiler") : 60114, Md = lt ? Symbol.for("react.provider") : 60109, Id = lt ? Symbol.for("react.context") : 60110, Iv = lt ? Symbol.for("react.async_mode") : 60111, Rd = lt ? Symbol.for("react.concurrent_mode") : 60111, $d = lt ? Symbol.for("react.forward_ref") : 60112, Ad = lt ? Symbol.for("react.suspense") : 60113, AI = lt ? Symbol.for("react.suspense_list") : 60120, Dd = lt ? Symbol.for("react.memo") : 60115, Fd = lt ? Symbol.for("react.lazy") : 60116, DI = lt ? Symbol.for("react.block") : 60121, FI = lt ? Symbol.for("react.fundamental") : 60117, LI = lt ? Symbol.for("react.responder") : 60118, jI = lt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ov:
        switch (e = e.type, e) {
          case Iv:
          case Rd:
          case Td:
          case Od:
          case Ed:
          case Ad:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Id:
              case $d:
              case Fd:
              case Dd:
              case Md:
                return e;
              default:
                return t;
            }
        }
      case Mv:
        return t;
    }
  }
}
function uC(e) {
  return rn(e) === Rd;
}
we.AsyncMode = Iv;
we.ConcurrentMode = Rd;
we.ContextConsumer = Id;
we.ContextProvider = Md;
we.Element = Ov;
we.ForwardRef = $d;
we.Fragment = Td;
we.Lazy = Fd;
we.Memo = Dd;
we.Portal = Mv;
we.Profiler = Od;
we.StrictMode = Ed;
we.Suspense = Ad;
we.isAsyncMode = function(e) {
  return uC(e) || rn(e) === Iv;
};
we.isConcurrentMode = uC;
we.isContextConsumer = function(e) {
  return rn(e) === Id;
};
we.isContextProvider = function(e) {
  return rn(e) === Md;
};
we.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ov;
};
we.isForwardRef = function(e) {
  return rn(e) === $d;
};
we.isFragment = function(e) {
  return rn(e) === Td;
};
we.isLazy = function(e) {
  return rn(e) === Fd;
};
we.isMemo = function(e) {
  return rn(e) === Dd;
};
we.isPortal = function(e) {
  return rn(e) === Mv;
};
we.isProfiler = function(e) {
  return rn(e) === Od;
};
we.isStrictMode = function(e) {
  return rn(e) === Ed;
};
we.isSuspense = function(e) {
  return rn(e) === Ad;
};
we.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Td || e === Rd || e === Od || e === Ed || e === Ad || e === AI || typeof e == "object" && e !== null && (e.$$typeof === Fd || e.$$typeof === Dd || e.$$typeof === Md || e.$$typeof === Id || e.$$typeof === $d || e.$$typeof === FI || e.$$typeof === LI || e.$$typeof === jI || e.$$typeof === DI);
};
we.typeOf = rn;
lC.exports = we;
var zI = lC.exports, cC = zI, NI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, VI = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, dC = {};
dC[cC.ForwardRef] = NI;
dC[cC.Memo] = VI;
var BI = !0;
function fC(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Rv = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  BI === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, $v = function(t, n, r) {
  Rv(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function WI(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var HI = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, UI = /[A-Z]|^ms/g, GI = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pC = function(t) {
  return t.charCodeAt(1) === 45;
}, My = function(t) {
  return t != null && typeof t != "boolean";
}, Kf = /* @__PURE__ */ aC(function(e) {
  return pC(e) ? e : e.replace(UI, "-$&").toLowerCase();
}), Iy = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(GI, function(r, o, i) {
          return Kn = {
            name: o,
            styles: i,
            next: Kn
          }, o;
        });
  }
  return HI[t] !== 1 && !pC(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Xs(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Kn = {
          name: n.name,
          styles: n.styles,
          next: Kn
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Kn = {
              name: r.name,
              styles: r.styles,
              next: Kn
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return KI(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Kn, a = n(e);
        return Kn = i, Xs(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function KI(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Xs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : My(a) && (r += Kf(i) + ":" + Iy(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          My(a[s]) && (r += Kf(i) + ":" + Iy(i, a[s]) + ";");
      else {
        var l = Xs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Kf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Ry = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Kn, Ld = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Kn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Xs(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Xs(r, n, t[s]), o && (i += a[s]);
  Ry.lastIndex = 0;
  for (var l = "", u; (u = Ry.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = WI(i) + l;
  return {
    name: c,
    styles: i,
    next: Kn
  };
}, YI = function(t) {
  return t();
}, hC = g0.useInsertionEffect ? g0.useInsertionEffect : !1, mC = hC || YI, $y = hC || v.useLayoutEffect, Av = {}.hasOwnProperty, vC = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ $I({
    key: "css"
  }) : null
);
vC.Provider;
var Dv = function(t) {
  return /* @__PURE__ */ v.forwardRef(function(n, r) {
    var o = v.useContext(vC);
    return t(n, o, r);
  });
}, la = /* @__PURE__ */ v.createContext({}), qI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, XI = /* @__PURE__ */ Ey(function(e) {
  return Ey(function(t) {
    return qI(e, t);
  });
}), QI = function(t) {
  var n = v.useContext(la);
  return t.theme !== n && (n = XI(n)(t.theme)), /* @__PURE__ */ v.createElement(la.Provider, {
    value: n
  }, t.children);
}, jh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ZI = function(t, n) {
  var r = {};
  for (var o in n)
    Av.call(n, o) && (r[o] = n[o]);
  return r[jh] = t, r;
}, JI = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rv(n, r, o), mC(function() {
    return $v(n, r, o);
  }), null;
}, eR = /* @__PURE__ */ Dv(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[jh], i = [r], a = "";
  typeof e.className == "string" ? a = fC(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Ld(i, void 0, v.useContext(la));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Av.call(e, u) && u !== "css" && u !== jh && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(JI, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ v.createElement(o, l));
}), tR = eR, ee = function(t, n) {
  var r = arguments;
  if (n == null || !Av.call(n, "css"))
    return v.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = tR, i[1] = ZI(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return v.createElement.apply(null, i);
}, jd = /* @__PURE__ */ Dv(function(e, t) {
  var n = e.styles, r = Ld([n], void 0, v.useContext(la)), o = v.useRef();
  return $y(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), $y(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && $v(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Fv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Ld(t);
}
var gC = function() {
  var t = Fv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, yC = String.raw, bC = yC`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`, nR = () => /* @__PURE__ */ w.jsx(jd, { styles: bC }), rR = ({ scope: e = "" }) => /* @__PURE__ */ w.jsx(
  jd,
  {
    styles: yC`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${bC}
    `
  }
);
function oR(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Je(e = {}) {
  const {
    name: t,
    strict: n = !0,
    hookName: r = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = v.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = v.useContext(s);
    if (!c && n) {
      const d = new Error(
        i ?? oR(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [iR, aR] = Je({
  strict: !1,
  name: "PortalManagerContext"
});
function SC(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ w.jsx(iR, { value: { zIndex: n }, children: t });
}
SC.displayName = "PortalManager";
var ua = globalThis != null && globalThis.document ? v.useLayoutEffect : v.useEffect, [xC, sR] = Je({
  strict: !1,
  name: "PortalContext"
}), Lv = "chakra-portal", lR = ".chakra-portal", uR = (e) => /* @__PURE__ */ w.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: e.children
  }
), cR = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = v.useState(null), i = v.useRef(null), [, a] = v.useState({});
  v.useEffect(() => a({}), []);
  const s = sR(), l = aR();
  ua(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = Lv, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ w.jsx(uR, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? Cd.createPortal(
    /* @__PURE__ */ w.jsx(xC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ w.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, dR = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = v.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Lv), l;
  }, [o]), [, s] = v.useState({});
  return ua(() => s({}), []), ua(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? Cd.createPortal(
    /* @__PURE__ */ w.jsx(xC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function vl(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ w.jsx(dR, { containerRef: n, ...r }) : /* @__PURE__ */ w.jsx(cR, { ...r });
}
vl.className = Lv;
vl.selector = lR;
vl.displayName = "Portal";
function mo() {
  const e = v.useContext(
    la
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var jv = v.createContext({});
jv.displayName = "ColorModeContext";
function Pa() {
  const e = v.useContext(jv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Ay(e, t) {
  const { colorMode: n } = Pa();
  return n === "dark" ? t : e;
}
var ou = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function fR(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? ou.dark : ou.light), document.body.classList.remove(r ? ou.light : ou.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(r) {
      var o;
      return ((o = n.query().matches) != null ? o : r === "dark") ? "dark" : "light";
    },
    addListener(r) {
      const o = n.query(), i = (a) => {
        r(a.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
        typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i);
      };
    },
    preventTransition() {
      const r = document.createElement("style");
      return r.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), document.head.appendChild(r), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(r);
          });
        });
      };
    }
  };
  return n;
}
var pR = "chakra-ui-color-mode";
function hR(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {
      }
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var mR = hR(pR), Dy = () => {
};
function Fy(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function wC(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = mR
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = v.useState(
    () => Fy(a, s)
  ), [c, d] = v.useState(
    () => Fy(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: h } = v.useMemo(
    () => fR({ preventTransition: i }),
    [i]
  ), b = o === "system" && !l ? c : l, m = v.useCallback(
    (x) => {
      const k = x === "system" ? f() : x;
      u(k), p(k === "dark"), g(k), a.set(k);
    },
    [a, f, p, g]
  );
  ua(() => {
    o === "system" && d(f());
  }, []), v.useEffect(() => {
    const x = a.get();
    if (x) {
      m(x);
      return;
    }
    if (o === "system") {
      m("system");
      return;
    }
    m(s);
  }, [a, s, o, m]);
  const y = v.useCallback(() => {
    m(b === "dark" ? "light" : "dark");
  }, [b, m]);
  v.useEffect(() => {
    if (r)
      return h(m);
  }, [r, h, m]);
  const S = v.useMemo(
    () => ({
      colorMode: t ?? b,
      toggleColorMode: t ? Dy : y,
      setColorMode: t ? Dy : m,
      forced: t !== void 0
    }),
    [b, y, m, t]
  );
  return /* @__PURE__ */ w.jsx(jv.Provider, { value: S, children: n });
}
wC.displayName = "ColorModeProvider";
var vR = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function gR(e) {
  let t = e;
  return vR.has(t) || (t = "light"), t;
}
function yR(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = gR(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function bR(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ w.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: yR(e) }
    }
  );
}
function SR() {
  const e = Pa(), t = mo();
  return { ...e, theme: t };
}
var ie = (...e) => e.filter(Boolean).join(" ");
function xR() {
  return !1;
}
function jt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var gl = (e) => {
  const { condition: t, message: n } = e;
  t && xR() && console.warn(n);
};
function Xn(e, ...t) {
  return wR(e) ? e(...t) : e;
}
var wR = (e) => typeof e == "function", dn = (e) => e ? "" : void 0, Yf = (e) => e ? !0 : void 0;
function Le(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function CC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var Ic = { exports: {} };
Ic.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", h = "[object Map]", b = "[object Number]", m = "[object Null]", y = "[object Object]", S = "[object Proxy]", x = "[object RegExp]", k = "[object Set]", P = "[object String]", _ = "[object Undefined]", T = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", j = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, z = {};
  z[D] = z[G] = z[H] = z[L] = z[W] = z[K] = z[$] = z[A] = z[j] = !0, z[s] = z[l] = z[M] = z[c] = z[I] = z[d] = z[f] = z[p] = z[h] = z[b] = z[y] = z[x] = z[k] = z[P] = z[T] = !1;
  var te = typeof Gr == "object" && Gr && Gr.Object === Object && Gr, le = typeof self == "object" && self && self.Object === Object && self, ae = te || le || Function("return this")(), se = t && !t.nodeType && t, me = se && !0 && e && !e.nodeType && e, ke = me && me.exports === se, et = ke && te.process, qe = function() {
    try {
      var C = me && me.require && me.require("util").types;
      return C || et && et.binding && et.binding("util");
    } catch {
    }
  }(), on = qe && qe.isTypedArray;
  function Pn(C, E, R) {
    switch (R.length) {
      case 0:
        return C.call(E);
      case 1:
        return C.call(E, R[0]);
      case 2:
        return C.call(E, R[0], R[1]);
      case 3:
        return C.call(E, R[0], R[1], R[2]);
    }
    return C.apply(E, R);
  }
  function Ir(C, E) {
    for (var R = -1, N = Array(C); ++R < C; )
      N[R] = E(R);
    return N;
  }
  function fe(C) {
    return function(E) {
      return C(E);
    };
  }
  function mt(C, E) {
    return C == null ? void 0 : C[E];
  }
  function Ge(C, E) {
    return function(R) {
      return C(E(R));
    };
  }
  var Ut = Array.prototype, Rr = Function.prototype, vt = Object.prototype, Nn = ae["__core-js_shared__"], $r = Rr.toString, an = vt.hasOwnProperty, ii = function() {
    var C = /[^.]+$/.exec(Nn && Nn.keys && Nn.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), Ea = vt.toString, Rl = $r.call(Object), $l = RegExp(
    "^" + $r.call(an).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), yo = ke ? ae.Buffer : void 0, Qg = ae.Symbol, Zg = ae.Uint8Array, Jg = yo ? yo.allocUnsafe : void 0, e0 = Ge(Object.getPrototypeOf, Object), t0 = Object.create, uT = vt.propertyIsEnumerable, cT = Ut.splice, bo = Qg ? Qg.toStringTag : void 0, Al = function() {
    try {
      var C = df(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), dT = yo ? yo.isBuffer : void 0, n0 = Math.max, fT = Date.now, r0 = df(ae, "Map"), Oa = df(Object, "create"), pT = /* @__PURE__ */ function() {
    function C() {
    }
    return function(E) {
      if (!xo(E))
        return {};
      if (t0)
        return t0(E);
      C.prototype = E;
      var R = new C();
      return C.prototype = void 0, R;
    };
  }();
  function So(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function hT() {
    this.__data__ = Oa ? Oa(null) : {}, this.size = 0;
  }
  function mT(C) {
    var E = this.has(C) && delete this.__data__[C];
    return this.size -= E ? 1 : 0, E;
  }
  function vT(C) {
    var E = this.__data__;
    if (Oa) {
      var R = E[C];
      return R === r ? void 0 : R;
    }
    return an.call(E, C) ? E[C] : void 0;
  }
  function gT(C) {
    var E = this.__data__;
    return Oa ? E[C] !== void 0 : an.call(E, C);
  }
  function yT(C, E) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = Oa && E === void 0 ? r : E, this;
  }
  So.prototype.clear = hT, So.prototype.delete = mT, So.prototype.get = vT, So.prototype.has = gT, So.prototype.set = yT;
  function sr(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function bT() {
    this.__data__ = [], this.size = 0;
  }
  function ST(C) {
    var E = this.__data__, R = Dl(E, C);
    if (R < 0)
      return !1;
    var N = E.length - 1;
    return R == N ? E.pop() : cT.call(E, R, 1), --this.size, !0;
  }
  function xT(C) {
    var E = this.__data__, R = Dl(E, C);
    return R < 0 ? void 0 : E[R][1];
  }
  function wT(C) {
    return Dl(this.__data__, C) > -1;
  }
  function CT(C, E) {
    var R = this.__data__, N = Dl(R, C);
    return N < 0 ? (++this.size, R.push([C, E])) : R[N][1] = E, this;
  }
  sr.prototype.clear = bT, sr.prototype.delete = ST, sr.prototype.get = xT, sr.prototype.has = wT, sr.prototype.set = CT;
  function ai(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function kT() {
    this.size = 0, this.__data__ = {
      hash: new So(),
      map: new (r0 || sr)(),
      string: new So()
    };
  }
  function PT(C) {
    var E = Ll(this, C).delete(C);
    return this.size -= E ? 1 : 0, E;
  }
  function _T(C) {
    return Ll(this, C).get(C);
  }
  function TT(C) {
    return Ll(this, C).has(C);
  }
  function ET(C, E) {
    var R = Ll(this, C), N = R.size;
    return R.set(C, E), this.size += R.size == N ? 0 : 1, this;
  }
  ai.prototype.clear = kT, ai.prototype.delete = PT, ai.prototype.get = _T, ai.prototype.has = TT, ai.prototype.set = ET;
  function si(C) {
    var E = this.__data__ = new sr(C);
    this.size = E.size;
  }
  function OT() {
    this.__data__ = new sr(), this.size = 0;
  }
  function MT(C) {
    var E = this.__data__, R = E.delete(C);
    return this.size = E.size, R;
  }
  function IT(C) {
    return this.__data__.get(C);
  }
  function RT(C) {
    return this.__data__.has(C);
  }
  function $T(C, E) {
    var R = this.__data__;
    if (R instanceof sr) {
      var N = R.__data__;
      if (!r0 || N.length < n - 1)
        return N.push([C, E]), this.size = ++R.size, this;
      R = this.__data__ = new ai(N);
    }
    return R.set(C, E), this.size = R.size, this;
  }
  si.prototype.clear = OT, si.prototype.delete = MT, si.prototype.get = IT, si.prototype.has = RT, si.prototype.set = $T;
  function AT(C, E) {
    var R = hf(C), N = !R && pf(C), pe = !R && !N && l0(C), Pe = !R && !N && !pe && c0(C), $e = R || N || pe || Pe, ce = $e ? Ir(C.length, String) : [], Ae = ce.length;
    for (var sn in C)
      (E || an.call(C, sn)) && !($e && // Safari 9 has enumerable `arguments.length` in strict mode.
      (sn == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (sn == "offset" || sn == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Pe && (sn == "buffer" || sn == "byteLength" || sn == "byteOffset") || // Skip index properties.
      a0(sn, Ae))) && ce.push(sn);
    return ce;
  }
  function uf(C, E, R) {
    (R !== void 0 && !jl(C[E], R) || R === void 0 && !(E in C)) && cf(C, E, R);
  }
  function DT(C, E, R) {
    var N = C[E];
    (!(an.call(C, E) && jl(N, R)) || R === void 0 && !(E in C)) && cf(C, E, R);
  }
  function Dl(C, E) {
    for (var R = C.length; R--; )
      if (jl(C[R][0], E))
        return R;
    return -1;
  }
  function cf(C, E, R) {
    E == "__proto__" && Al ? Al(C, E, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[E] = R;
  }
  var FT = qT();
  function Fl(C) {
    return C == null ? C === void 0 ? _ : m : bo && bo in Object(C) ? XT(C) : nE(C);
  }
  function o0(C) {
    return Ma(C) && Fl(C) == s;
  }
  function LT(C) {
    if (!xo(C) || eE(C))
      return !1;
    var E = vf(C) ? $l : V;
    return E.test(aE(C));
  }
  function jT(C) {
    return Ma(C) && u0(C.length) && !!z[Fl(C)];
  }
  function zT(C) {
    if (!xo(C))
      return tE(C);
    var E = s0(C), R = [];
    for (var N in C)
      N == "constructor" && (E || !an.call(C, N)) || R.push(N);
    return R;
  }
  function i0(C, E, R, N, pe) {
    C !== E && FT(E, function(Pe, $e) {
      if (pe || (pe = new si()), xo(Pe))
        NT(C, E, $e, R, i0, N, pe);
      else {
        var ce = N ? N(ff(C, $e), Pe, $e + "", C, E, pe) : void 0;
        ce === void 0 && (ce = Pe), uf(C, $e, ce);
      }
    }, d0);
  }
  function NT(C, E, R, N, pe, Pe, $e) {
    var ce = ff(C, R), Ae = ff(E, R), sn = $e.get(Ae);
    if (sn) {
      uf(C, R, sn);
      return;
    }
    var Gt = Pe ? Pe(ce, Ae, R + "", C, E, $e) : void 0, Ia = Gt === void 0;
    if (Ia) {
      var gf = hf(Ae), yf = !gf && l0(Ae), p0 = !gf && !yf && c0(Ae);
      Gt = Ae, gf || yf || p0 ? hf(ce) ? Gt = ce : sE(ce) ? Gt = GT(ce) : yf ? (Ia = !1, Gt = WT(Ae, !0)) : p0 ? (Ia = !1, Gt = UT(Ae, !0)) : Gt = [] : lE(Ae) || pf(Ae) ? (Gt = ce, pf(ce) ? Gt = uE(ce) : (!xo(ce) || vf(ce)) && (Gt = QT(Ae))) : Ia = !1;
    }
    Ia && ($e.set(Ae, Gt), pe(Gt, Ae, N, Pe, $e), $e.delete(Ae)), uf(C, R, Gt);
  }
  function VT(C, E) {
    return oE(rE(C, E, f0), C + "");
  }
  var BT = Al ? function(C, E) {
    return Al(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: dE(E),
      writable: !0
    });
  } : f0;
  function WT(C, E) {
    if (E)
      return C.slice();
    var R = C.length, N = Jg ? Jg(R) : new C.constructor(R);
    return C.copy(N), N;
  }
  function HT(C) {
    var E = new C.constructor(C.byteLength);
    return new Zg(E).set(new Zg(C)), E;
  }
  function UT(C, E) {
    var R = E ? HT(C.buffer) : C.buffer;
    return new C.constructor(R, C.byteOffset, C.length);
  }
  function GT(C, E) {
    var R = -1, N = C.length;
    for (E || (E = Array(N)); ++R < N; )
      E[R] = C[R];
    return E;
  }
  function KT(C, E, R, N) {
    var pe = !R;
    R || (R = {});
    for (var Pe = -1, $e = E.length; ++Pe < $e; ) {
      var ce = E[Pe], Ae = N ? N(R[ce], C[ce], ce, R, C) : void 0;
      Ae === void 0 && (Ae = C[ce]), pe ? cf(R, ce, Ae) : DT(R, ce, Ae);
    }
    return R;
  }
  function YT(C) {
    return VT(function(E, R) {
      var N = -1, pe = R.length, Pe = pe > 1 ? R[pe - 1] : void 0, $e = pe > 2 ? R[2] : void 0;
      for (Pe = C.length > 3 && typeof Pe == "function" ? (pe--, Pe) : void 0, $e && ZT(R[0], R[1], $e) && (Pe = pe < 3 ? void 0 : Pe, pe = 1), E = Object(E); ++N < pe; ) {
        var ce = R[N];
        ce && C(E, ce, N, Pe);
      }
      return E;
    });
  }
  function qT(C) {
    return function(E, R, N) {
      for (var pe = -1, Pe = Object(E), $e = N(E), ce = $e.length; ce--; ) {
        var Ae = $e[C ? ce : ++pe];
        if (R(Pe[Ae], Ae, Pe) === !1)
          break;
      }
      return E;
    };
  }
  function Ll(C, E) {
    var R = C.__data__;
    return JT(E) ? R[typeof E == "string" ? "string" : "hash"] : R.map;
  }
  function df(C, E) {
    var R = mt(C, E);
    return LT(R) ? R : void 0;
  }
  function XT(C) {
    var E = an.call(C, bo), R = C[bo];
    try {
      C[bo] = void 0;
      var N = !0;
    } catch {
    }
    var pe = Ea.call(C);
    return N && (E ? C[bo] = R : delete C[bo]), pe;
  }
  function QT(C) {
    return typeof C.constructor == "function" && !s0(C) ? pT(e0(C)) : {};
  }
  function a0(C, E) {
    var R = typeof C;
    return E = E ?? a, !!E && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < E;
  }
  function ZT(C, E, R) {
    if (!xo(R))
      return !1;
    var N = typeof E;
    return (N == "number" ? mf(R) && a0(E, R.length) : N == "string" && E in R) ? jl(R[E], C) : !1;
  }
  function JT(C) {
    var E = typeof C;
    return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? C !== "__proto__" : C === null;
  }
  function eE(C) {
    return !!ii && ii in C;
  }
  function s0(C) {
    var E = C && C.constructor, R = typeof E == "function" && E.prototype || vt;
    return C === R;
  }
  function tE(C) {
    var E = [];
    if (C != null)
      for (var R in Object(C))
        E.push(R);
    return E;
  }
  function nE(C) {
    return Ea.call(C);
  }
  function rE(C, E, R) {
    return E = n0(E === void 0 ? C.length - 1 : E, 0), function() {
      for (var N = arguments, pe = -1, Pe = n0(N.length - E, 0), $e = Array(Pe); ++pe < Pe; )
        $e[pe] = N[E + pe];
      pe = -1;
      for (var ce = Array(E + 1); ++pe < E; )
        ce[pe] = N[pe];
      return ce[E] = R($e), Pn(C, this, ce);
    };
  }
  function ff(C, E) {
    if (!(E === "constructor" && typeof C[E] == "function") && E != "__proto__")
      return C[E];
  }
  var oE = iE(BT);
  function iE(C) {
    var E = 0, R = 0;
    return function() {
      var N = fT(), pe = i - (N - R);
      if (R = N, pe > 0) {
        if (++E >= o)
          return arguments[0];
      } else
        E = 0;
      return C.apply(void 0, arguments);
    };
  }
  function aE(C) {
    if (C != null) {
      try {
        return $r.call(C);
      } catch {
      }
      try {
        return C + "";
      } catch {
      }
    }
    return "";
  }
  function jl(C, E) {
    return C === E || C !== C && E !== E;
  }
  var pf = o0(/* @__PURE__ */ function() {
    return arguments;
  }()) ? o0 : function(C) {
    return Ma(C) && an.call(C, "callee") && !uT.call(C, "callee");
  }, hf = Array.isArray;
  function mf(C) {
    return C != null && u0(C.length) && !vf(C);
  }
  function sE(C) {
    return Ma(C) && mf(C);
  }
  var l0 = dT || fE;
  function vf(C) {
    if (!xo(C))
      return !1;
    var E = Fl(C);
    return E == p || E == g || E == u || E == S;
  }
  function u0(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function xo(C) {
    var E = typeof C;
    return C != null && (E == "object" || E == "function");
  }
  function Ma(C) {
    return C != null && typeof C == "object";
  }
  function lE(C) {
    if (!Ma(C) || Fl(C) != y)
      return !1;
    var E = e0(C);
    if (E === null)
      return !0;
    var R = an.call(E, "constructor") && E.constructor;
    return typeof R == "function" && R instanceof R && $r.call(R) == Rl;
  }
  var c0 = on ? fe(on) : jT;
  function uE(C) {
    return KT(C, d0(C));
  }
  function d0(C) {
    return mf(C) ? AT(C, !0) : zT(C);
  }
  var cE = YT(function(C, E, R, N) {
    i0(C, E, R, N);
  });
  function dE(C) {
    return function() {
      return C;
    };
  }
  function f0(C) {
    return C;
  }
  function fE() {
    return !1;
  }
  e.exports = cE;
})(Ic, Ic.exports);
var CR = Ic.exports;
const mn = /* @__PURE__ */ ul(CR);
var kR = (e) => /!(important)?$/.test(e), Ly = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, PR = (e, t) => (n) => {
  const r = String(t), o = kR(r), i = Ly(r), a = e ? `${e}.${i}` : i;
  let s = jt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = Ly(s), o ? `${s} !important` : s;
};
function zv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = PR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var iu = (...e) => (t) => e.reduce((n, r) => r(n), t);
function ln(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = zv({
      scale: e,
      transform: t
    }), r;
  };
}
var _R = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function TR(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: _R(t),
    transform: n ? zv({
      scale: n,
      compose: r
    }) : r
  };
}
var kC = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function ER() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...kC
  ].join(" ");
}
function OR() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...kC
  ].join(" ");
}
var MR = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, IR = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function RR(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var $R = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, zh = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, AR = new Set(Object.values(zh)), Nh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), DR = (e) => e.trim();
function FR(e, t) {
  if (e == null || Nh.has(e))
    return e;
  if (!(Vh(e) || Nh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(DR).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in zh ? zh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (AR.has(f))
      return f;
    const p = f.indexOf(" "), [g, h] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], b = Vh(h) ? h : h && h.split(" "), m = `colors.${g}`, y = m in t.__cssMap ? t.__cssMap[m].varRef : g;
    return b ? [
      y,
      ...Array.isArray(b) ? b : [b]
    ].join(" ") : y;
  });
  return `${s}(${d.join(", ")})`;
}
var Vh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), LR = (e, t) => FR(e, t ?? {});
function jR(e) {
  return /^var\(--.+\)$/.test(e);
}
var zR = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, Bn = (e) => (t) => `${e}(${t})`, de = {
  filter(e) {
    return e !== "auto" ? e : MR;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : IR;
  },
  ring(e) {
    return RR(de.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? ER() : e === "auto-gpu" ? OR() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = zR(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const n = { left: "right", right: "left" };
    return t.direction === "rtl" ? n[e] : e;
  },
  degree(e) {
    if (jR(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: LR,
  blur: Bn("blur"),
  opacity: Bn("opacity"),
  brightness: Bn("brightness"),
  contrast: Bn("contrast"),
  dropShadow: Bn("drop-shadow"),
  grayscale: Bn("grayscale"),
  hueRotate: (e) => Bn("hue-rotate")(de.degree(e)),
  invert: Bn("invert"),
  saturate: Bn("saturate"),
  sepia: Bn("sepia"),
  bgImage(e) {
    return e == null || Vh(e) || Nh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = $R[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, O = {
  borderWidths: ln("borderWidths"),
  borderStyles: ln("borderStyles"),
  colors: ln("colors"),
  borders: ln("borders"),
  gradients: ln("gradients", de.gradient),
  radii: ln("radii", de.px),
  space: ln("space", iu(de.vh, de.px)),
  spaceT: ln("space", iu(de.vh, de.px)),
  degreeT(e) {
    return { property: e, transform: de.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: zv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: ln("sizes", iu(de.vh, de.px)),
  sizesT: ln("sizes", iu(de.vh, de.fraction)),
  shadows: ln("shadows"),
  logical: TR,
  blur: ln("blur", de.blur)
}, Bu = {
  background: O.colors("background"),
  backgroundColor: O.colors("backgroundColor"),
  backgroundImage: O.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: de.bgClip },
  bgSize: O.prop("backgroundSize"),
  bgPosition: O.prop("backgroundPosition"),
  bg: O.colors("background"),
  bgColor: O.colors("backgroundColor"),
  bgPos: O.prop("backgroundPosition"),
  bgRepeat: O.prop("backgroundRepeat"),
  bgAttachment: O.prop("backgroundAttachment"),
  bgGradient: O.gradients("backgroundImage"),
  bgClip: { transform: de.bgClip }
};
Object.assign(Bu, {
  bgImage: Bu.backgroundImage,
  bgImg: Bu.backgroundImage
});
var ve = {
  border: O.borders("border"),
  borderWidth: O.borderWidths("borderWidth"),
  borderStyle: O.borderStyles("borderStyle"),
  borderColor: O.colors("borderColor"),
  borderRadius: O.radii("borderRadius"),
  borderTop: O.borders("borderTop"),
  borderBlockStart: O.borders("borderBlockStart"),
  borderTopLeftRadius: O.radii("borderTopLeftRadius"),
  borderStartStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: O.radii("borderTopRightRadius"),
  borderStartEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: O.borders("borderRight"),
  borderInlineEnd: O.borders("borderInlineEnd"),
  borderBottom: O.borders("borderBottom"),
  borderBlockEnd: O.borders("borderBlockEnd"),
  borderBottomLeftRadius: O.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: O.radii("borderBottomRightRadius"),
  borderLeft: O.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: O.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: O.borders(["borderLeft", "borderRight"]),
  borderInline: O.borders("borderInline"),
  borderY: O.borders(["borderTop", "borderBottom"]),
  borderBlock: O.borders("borderBlock"),
  borderTopWidth: O.borderWidths("borderTopWidth"),
  borderBlockStartWidth: O.borderWidths("borderBlockStartWidth"),
  borderTopColor: O.colors("borderTopColor"),
  borderBlockStartColor: O.colors("borderBlockStartColor"),
  borderTopStyle: O.borderStyles("borderTopStyle"),
  borderBlockStartStyle: O.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: O.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: O.borderWidths("borderBlockEndWidth"),
  borderBottomColor: O.colors("borderBottomColor"),
  borderBlockEndColor: O.colors("borderBlockEndColor"),
  borderBottomStyle: O.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: O.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: O.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: O.borderWidths("borderInlineStartWidth"),
  borderLeftColor: O.colors("borderLeftColor"),
  borderInlineStartColor: O.colors("borderInlineStartColor"),
  borderLeftStyle: O.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: O.borderStyles("borderInlineStartStyle"),
  borderRightWidth: O.borderWidths("borderRightWidth"),
  borderInlineEndWidth: O.borderWidths("borderInlineEndWidth"),
  borderRightColor: O.colors("borderRightColor"),
  borderInlineEndColor: O.colors("borderInlineEndColor"),
  borderRightStyle: O.borderStyles("borderRightStyle"),
  borderInlineEndStyle: O.borderStyles("borderInlineEndStyle"),
  borderTopRadius: O.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: O.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: O.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: O.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ve, {
  rounded: ve.borderRadius,
  roundedTop: ve.borderTopRadius,
  roundedTopLeft: ve.borderTopLeftRadius,
  roundedTopRight: ve.borderTopRightRadius,
  roundedTopStart: ve.borderStartStartRadius,
  roundedTopEnd: ve.borderStartEndRadius,
  roundedBottom: ve.borderBottomRadius,
  roundedBottomLeft: ve.borderBottomLeftRadius,
  roundedBottomRight: ve.borderBottomRightRadius,
  roundedBottomStart: ve.borderEndStartRadius,
  roundedBottomEnd: ve.borderEndEndRadius,
  roundedLeft: ve.borderLeftRadius,
  roundedRight: ve.borderRightRadius,
  roundedStart: ve.borderInlineStartRadius,
  roundedEnd: ve.borderInlineEndRadius,
  borderStart: ve.borderInlineStart,
  borderEnd: ve.borderInlineEnd,
  borderTopStartRadius: ve.borderStartStartRadius,
  borderTopEndRadius: ve.borderStartEndRadius,
  borderBottomStartRadius: ve.borderEndStartRadius,
  borderBottomEndRadius: ve.borderEndEndRadius,
  borderStartRadius: ve.borderInlineStartRadius,
  borderEndRadius: ve.borderInlineEndRadius,
  borderStartWidth: ve.borderInlineStartWidth,
  borderEndWidth: ve.borderInlineEndWidth,
  borderStartColor: ve.borderInlineStartColor,
  borderEndColor: ve.borderInlineEndColor,
  borderStartStyle: ve.borderInlineStartStyle,
  borderEndStyle: ve.borderInlineEndStyle
});
var NR = {
  color: O.colors("color"),
  textColor: O.colors("color"),
  fill: O.colors("fill"),
  stroke: O.colors("stroke")
}, Bh = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Bh, {
  shadow: Bh.boxShadow
});
var VR = {
  filter: { transform: de.filter },
  blur: O.blur("--chakra-blur"),
  brightness: O.propT("--chakra-brightness", de.brightness),
  contrast: O.propT("--chakra-contrast", de.contrast),
  hueRotate: O.propT("--chakra-hue-rotate", de.hueRotate),
  invert: O.propT("--chakra-invert", de.invert),
  saturate: O.propT("--chakra-saturate", de.saturate),
  dropShadow: O.propT("--chakra-drop-shadow", de.dropShadow),
  backdropFilter: { transform: de.backdropFilter },
  backdropBlur: O.blur("--chakra-backdrop-blur"),
  backdropBrightness: O.propT(
    "--chakra-backdrop-brightness",
    de.brightness
  ),
  backdropContrast: O.propT("--chakra-backdrop-contrast", de.contrast),
  backdropHueRotate: O.propT(
    "--chakra-backdrop-hue-rotate",
    de.hueRotate
  ),
  backdropInvert: O.propT("--chakra-backdrop-invert", de.invert),
  backdropSaturate: O.propT("--chakra-backdrop-saturate", de.saturate)
}, Rc = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: de.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: O.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: O.space("gap"),
  rowGap: O.space("rowGap"),
  columnGap: O.space("columnGap")
};
Object.assign(Rc, {
  flexDir: Rc.flexDirection
});
var PC = {
  gridGap: O.space("gridGap"),
  gridColumnGap: O.space("gridColumnGap"),
  gridRowGap: O.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, BR = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: de.outline },
  outlineOffset: !0,
  outlineColor: O.colors("outlineColor")
}, cn = {
  width: O.sizesT("width"),
  inlineSize: O.sizesT("inlineSize"),
  height: O.sizes("height"),
  blockSize: O.sizes("blockSize"),
  boxSize: O.sizes(["width", "height"]),
  minWidth: O.sizes("minWidth"),
  minInlineSize: O.sizes("minInlineSize"),
  minHeight: O.sizes("minHeight"),
  minBlockSize: O.sizes("minBlockSize"),
  maxWidth: O.sizes("maxWidth"),
  maxInlineSize: O.sizes("maxInlineSize"),
  maxHeight: O.sizes("maxHeight"),
  maxBlockSize: O.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var n, r, o;
      return { [`@media screen and (min-width: ${(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var n, r, o;
      return { [`@media screen and (max-width: ${(o = (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null ? void 0 : r._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: O.propT("float", de.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(cn, {
  w: cn.width,
  h: cn.height,
  minW: cn.minWidth,
  maxW: cn.maxWidth,
  minH: cn.minHeight,
  maxH: cn.maxHeight,
  overscroll: cn.overscrollBehavior,
  overscrollX: cn.overscrollBehaviorX,
  overscrollY: cn.overscrollBehaviorY
});
var WR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function HR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var UR = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, o, i, a) => {
    if (typeof r > "u")
      return e(r, o, i);
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const s = t.get(r);
    if (s.has(o))
      return s.get(o);
    const l = e(r, o, i, a);
    return s.set(o, l), l;
  };
}, GR = UR(HR), KR = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, YR = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, qf = (e, t, n) => {
  const r = {}, o = GR(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, qR = {
  srOnly: {
    transform(e) {
      return e === !0 ? KR : e === "focusable" ? YR : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => qf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => qf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => qf(t, e, n)
  }
}, gs = {
  position: !0,
  pos: O.prop("position"),
  zIndex: O.prop("zIndex", "zIndices"),
  inset: O.spaceT("inset"),
  insetX: O.spaceT(["left", "right"]),
  insetInline: O.spaceT("insetInline"),
  insetY: O.spaceT(["top", "bottom"]),
  insetBlock: O.spaceT("insetBlock"),
  top: O.spaceT("top"),
  insetBlockStart: O.spaceT("insetBlockStart"),
  bottom: O.spaceT("bottom"),
  insetBlockEnd: O.spaceT("insetBlockEnd"),
  left: O.spaceT("left"),
  insetInlineStart: O.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: O.spaceT("right"),
  insetInlineEnd: O.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(gs, {
  insetStart: gs.insetInlineStart,
  insetEnd: gs.insetInlineEnd
});
var XR = {
  ring: { transform: de.ring },
  ringColor: O.colors("--chakra-ring-color"),
  ringOffset: O.prop("--chakra-ring-offset-width"),
  ringOffsetColor: O.colors("--chakra-ring-offset-color"),
  ringInset: O.prop("--chakra-ring-inset")
}, Ie = {
  margin: O.spaceT("margin"),
  marginTop: O.spaceT("marginTop"),
  marginBlockStart: O.spaceT("marginBlockStart"),
  marginRight: O.spaceT("marginRight"),
  marginInlineEnd: O.spaceT("marginInlineEnd"),
  marginBottom: O.spaceT("marginBottom"),
  marginBlockEnd: O.spaceT("marginBlockEnd"),
  marginLeft: O.spaceT("marginLeft"),
  marginInlineStart: O.spaceT("marginInlineStart"),
  marginX: O.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: O.spaceT("marginInline"),
  marginY: O.spaceT(["marginTop", "marginBottom"]),
  marginBlock: O.spaceT("marginBlock"),
  padding: O.space("padding"),
  paddingTop: O.space("paddingTop"),
  paddingBlockStart: O.space("paddingBlockStart"),
  paddingRight: O.space("paddingRight"),
  paddingBottom: O.space("paddingBottom"),
  paddingBlockEnd: O.space("paddingBlockEnd"),
  paddingLeft: O.space("paddingLeft"),
  paddingInlineStart: O.space("paddingInlineStart"),
  paddingInlineEnd: O.space("paddingInlineEnd"),
  paddingX: O.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: O.space("paddingInline"),
  paddingY: O.space(["paddingTop", "paddingBottom"]),
  paddingBlock: O.space("paddingBlock")
};
Object.assign(Ie, {
  m: Ie.margin,
  mt: Ie.marginTop,
  mr: Ie.marginRight,
  me: Ie.marginInlineEnd,
  marginEnd: Ie.marginInlineEnd,
  mb: Ie.marginBottom,
  ml: Ie.marginLeft,
  ms: Ie.marginInlineStart,
  marginStart: Ie.marginInlineStart,
  mx: Ie.marginX,
  my: Ie.marginY,
  p: Ie.padding,
  pt: Ie.paddingTop,
  py: Ie.paddingY,
  px: Ie.paddingX,
  pb: Ie.paddingBottom,
  pl: Ie.paddingLeft,
  ps: Ie.paddingInlineStart,
  paddingStart: Ie.paddingInlineStart,
  pr: Ie.paddingRight,
  pe: Ie.paddingInlineEnd,
  paddingEnd: Ie.paddingInlineEnd
});
var QR = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, ZR = {
  clipPath: !0,
  transform: O.propT("transform", de.transform),
  transformOrigin: !0,
  translateX: O.spaceT("--chakra-translate-x"),
  translateY: O.spaceT("--chakra-translate-y"),
  skewX: O.degreeT("--chakra-skew-x"),
  skewY: O.degreeT("--chakra-skew-y"),
  scaleX: O.prop("--chakra-scale-x"),
  scaleY: O.prop("--chakra-scale-y"),
  scale: O.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: O.degreeT("--chakra-rotate")
}, JR = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: O.prop("transitionDuration", "transition.duration"),
  transitionProperty: O.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: O.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, e$ = {
  fontFamily: O.prop("fontFamily", "fonts"),
  fontSize: O.prop("fontSize", "fontSizes", de.px),
  fontWeight: O.prop("fontWeight", "fontWeights"),
  lineHeight: O.prop("lineHeight", "lineHeights"),
  letterSpacing: O.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, t$ = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: O.spaceT("scrollMargin"),
  scrollMarginTop: O.spaceT("scrollMarginTop"),
  scrollMarginBottom: O.spaceT("scrollMarginBottom"),
  scrollMarginLeft: O.spaceT("scrollMarginLeft"),
  scrollMarginRight: O.spaceT("scrollMarginRight"),
  scrollMarginX: O.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: O.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: O.spaceT("scrollPadding"),
  scrollPaddingTop: O.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: O.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: O.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: O.spaceT("scrollPaddingRight"),
  scrollPaddingX: O.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: O.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function _C(e) {
  return jt(e) && e.reference ? e.reference : String(e);
}
var zd = (e, ...t) => t.map(_C).join(` ${e} `).replace(/calc/g, ""), jy = (...e) => `calc(${zd("+", ...e)})`, zy = (...e) => `calc(${zd("-", ...e)})`, Wh = (...e) => `calc(${zd("*", ...e)})`, Ny = (...e) => `calc(${zd("/", ...e)})`, Vy = (e) => {
  const t = _C(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Wh(t, -1);
}, Oo = Object.assign(
  (e) => ({
    add: (...t) => Oo(jy(e, ...t)),
    subtract: (...t) => Oo(zy(e, ...t)),
    multiply: (...t) => Oo(Wh(e, ...t)),
    divide: (...t) => Oo(Ny(e, ...t)),
    negate: () => Oo(Vy(e)),
    toString: () => e.toString()
  }),
  {
    add: jy,
    subtract: zy,
    multiply: Wh,
    divide: Ny,
    negate: Vy
  }
);
function n$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function r$(e) {
  const t = n$(e.toString());
  return i$(o$(t));
}
function o$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function i$(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function a$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function s$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function l$(e, t = "") {
  return r$(`--${a$(e, t)}`);
}
function J(e, t, n) {
  const r = l$(e, n);
  return {
    variable: r,
    reference: s$(r, t)
  };
}
function u$(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = J(`${e}-${o}`, i);
      continue;
    }
    n[r] = J(`${e}-${r}`);
  }
  return n;
}
function c$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function d$(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Hh(e) {
  if (e == null)
    return e;
  const { unitless: t } = d$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var TC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Nv = (e) => Object.fromEntries(Object.entries(e).sort(TC));
function By(e) {
  const t = Nv(e);
  return Object.assign(Object.values(t), t);
}
function f$(e) {
  const t = Object.keys(Nv(e));
  return new Set(t);
}
function Wy(e) {
  var t;
  if (!e)
    return e;
  e = (t = Hh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Ja(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Hh(e)})`), t && n.push("and", `(max-width: ${Hh(t)})`), n.join(" ");
}
function p$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = By(e), r = Object.entries(e).sort(TC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? Wy(d) : void 0, {
      _minW: Wy(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Ja(null, d),
      minWQuery: Ja(s),
      minMaxQuery: Ja(s, d)
    };
  }), o = f$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Nv(e),
    asArray: By(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...n.map((a) => Ja(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!jt(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; c$(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    }
  };
}
var ut = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, Dr = (e) => EC((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), lr = (e) => EC((t) => e(t, "~ &"), "[data-peer]", ".peer"), EC = (e, ...t) => t.map(e).join(", "), Nd = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: Dr(ut.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: lr(ut.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Dr(ut.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: lr(ut.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Dr(ut.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: lr(ut.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Dr(ut.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: lr(ut.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Dr(ut.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: lr(ut.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Dr(ut.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: lr(ut.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Dr(ut.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: lr(ut.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Dr(ut.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: lr(ut.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: lr(ut.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, OC = Object.keys(
  Nd
);
function Hy(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function h$(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Hy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...g] = f, h = `${p}.-${g.join(".")}`, b = Oo.negate(s), m = Oo.negate(u);
        r[h] = {
          value: b,
          var: l,
          varRef: m
        };
      }
      n[l] = s, r[o] = {
        value: s,
        var: l,
        varRef: u
      };
      continue;
    }
    const c = (f) => {
      const g = [String(o).split(".")[0], f].join(".");
      if (!e[g])
        return f;
      const { reference: b } = Hy(g, t == null ? void 0 : t.cssVarPrefix);
      return b;
    }, d = jt(s) ? s : { default: s };
    n = mn(
      n,
      Object.entries(d).reduce(
        (f, [p, g]) => {
          var h, b;
          if (!g)
            return f;
          const m = c(`${g}`);
          if (p === "default")
            return f[l] = m, f;
          const y = (b = (h = Nd) == null ? void 0 : h[p]) != null ? b : p;
          return f[y] = { [l]: m }, f;
        },
        {}
      )
    ), r[o] = {
      value: u,
      var: l,
      varRef: u
    };
  }
  return {
    cssVars: n,
    cssMap: r
  };
}
function m$(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function v$(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function g$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Uy(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (g$(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c, p = [...s, f];
        if (r != null && r(a, p))
          return t(a, s);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var y$ = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function b$(e) {
  return v$(e, y$);
}
function S$(e) {
  return e.semanticTokens;
}
function x$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var w$ = (e) => OC.includes(e) || e === "default";
function C$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return Uy(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), Uy(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(w$)
    }
  ), n;
}
function k$(e) {
  var t;
  const n = x$(e), r = b$(n), o = S$(n), i = C$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap: s,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: l
  } = h$(i, { cssVarPrefix: a });
  return Object.assign(n, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: p$(n.breakpoints)
  }), n;
}
var Vv = mn(
  {},
  Bu,
  ve,
  NR,
  Rc,
  cn,
  VR,
  XR,
  BR,
  PC,
  qR,
  gs,
  Bh,
  Ie,
  t$,
  e$,
  QR,
  ZR,
  WR,
  JR
);
Object.assign({}, Ie, cn, Rc, PC, gs);
var P$ = [...Object.keys(Vv), ...OC], _$ = { ...Vv, ...Nd }, T$ = (e) => e in _$, E$ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Xn(e[a], t);
    if (s == null)
      continue;
    if (s = jt(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let u = 0; u < l; u += 1) {
      const c = o == null ? void 0 : o[u];
      if (!c) {
        i[a] = s[u];
        continue;
      }
      i[c] = i[c] || {}, s[u] != null && (i[c][a] = s[u]);
    }
  }
  return i;
};
function O$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function M$(e) {
  return /^var\(--.+\)$/.test(e);
}
var I$ = (e, t) => e.startsWith("--") && typeof t == "string" && !M$(t), R$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = O$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function $$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Xn(i, r), d = E$(c)(r);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let h = Xn(g, r);
      p in n && (p = n[p]), I$(p, h) && (h = R$(r, h));
      let b = t[p];
      if (b === !0 && (b = { property: p }), jt(h)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = mn(
          {},
          f[p],
          o(h, !0)
        );
        continue;
      }
      let m = (u = (l = b == null ? void 0 : b.transform) == null ? void 0 : l.call(b, h, r, c)) != null ? u : h;
      m = b != null && b.processResult ? o(m, !0) : m;
      const y = Xn(b == null ? void 0 : b.property, r);
      if (!a && (b != null && b.static)) {
        const S = Xn(b.static, r);
        f = mn({}, f, S);
      }
      if (y && Array.isArray(y)) {
        for (const S of y)
          f[S] = m;
        continue;
      }
      if (y) {
        y === "&" && jt(m) ? f = mn({}, f, m) : f[y] = m;
        continue;
      }
      if (jt(m)) {
        f = mn({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var MC = (e) => (t) => $$({
  theme: t,
  pseudos: Nd,
  configs: Vv
})(e);
function Oe(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function A$(e, t) {
  if (Array.isArray(e))
    return e;
  if (jt(e))
    return t(e);
  if (e != null)
    return [e];
}
function D$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function F$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = A$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let g = 0; g < d; g++) {
      const h = t.details[g], b = t.details[D$(c, g)], m = Ja(h.minW, b == null ? void 0 : b._minW), y = Xn((s = r[o]) == null ? void 0 : s[c[g]], a);
      if (y) {
        if (p) {
          (l = r.parts) == null || l.forEach((S) => {
            mn(u, {
              [S]: f ? y[S] : { [m]: y[S] }
            });
          });
          continue;
        }
        if (!p) {
          f ? mn(u, y) : u[m] = y;
          continue;
        }
        u[m] = y;
      }
    }
    return u;
  };
}
function L$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = F$(i);
    return mn(
      {},
      Xn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Cn(e) {
  return m$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var j$ = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function z$(e) {
  return jt(e) ? j$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var N$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, V$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, B$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, W$ = {
  property: N$,
  easing: V$,
  duration: B$
}, H$ = W$, U$ = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, G$ = U$, K$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, Y$ = K$, q$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, X$ = q$, Q$ = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, Z$ = Q$, J$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, eA = J$, tA = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, nA = tA, rA = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, oA = rA, iA = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, IC = iA, RC = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, aA = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, sA = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, lA = {
  ...RC,
  ...aA,
  container: sA
}, $C = lA, uA = {
  breakpoints: X$,
  zIndices: G$,
  radii: eA,
  blur: oA,
  colors: Z$,
  ...IC,
  sizes: $C,
  shadows: nA,
  space: RC,
  borders: Y$,
  transition: H$
}, { defineMultiStyleConfig: cA, definePartsStyle: es } = Oe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), dr = J("stepper-indicator-size"), Ei = J("stepper-icon-size"), Oi = J("stepper-title-font-size"), ts = J("stepper-description-font-size"), Va = J("stepper-accent-color"), dA = es(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [Va.variable]: `colors.${e}.500`,
    _dark: {
      [Va.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Oi.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ts.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Oi.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: Ei.reference,
    height: Ei.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: dr.reference,
    height: dr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Va.reference
    },
    "&[data-status=complete]": {
      bg: Va.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: Va.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${dr.reference} - 8px)`,
      top: `calc(${dr.reference} + 4px)`,
      insetStart: `calc(${dr.reference} / 2 - 1px)`
    }
  }
})), fA = cA({
  baseStyle: dA,
  sizes: {
    xs: es({
      stepper: {
        [dr.variable]: "sizes.4",
        [Ei.variable]: "sizes.3",
        [Oi.variable]: "fontSizes.xs",
        [ts.variable]: "fontSizes.xs"
      }
    }),
    sm: es({
      stepper: {
        [dr.variable]: "sizes.6",
        [Ei.variable]: "sizes.4",
        [Oi.variable]: "fontSizes.sm",
        [ts.variable]: "fontSizes.xs"
      }
    }),
    md: es({
      stepper: {
        [dr.variable]: "sizes.8",
        [Ei.variable]: "sizes.5",
        [Oi.variable]: "fontSizes.md",
        [ts.variable]: "fontSizes.sm"
      }
    }),
    lg: es({
      stepper: {
        [dr.variable]: "sizes.10",
        [Ei.variable]: "sizes.6",
        [Oi.variable]: "fontSizes.lg",
        [ts.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Se(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c)
      t[d] = l(d);
    return Se(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return Se(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const p = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => c
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var pA = Se("accordion").parts("root", "container", "button", "panel").extend("icon"), hA = Se("alert").parts("title", "description", "container").extend("icon", "spinner"), mA = Se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), vA = Se("breadcrumb").parts("link", "item", "container").extend("separator");
Se("button").parts();
var gA = Se("checkbox").parts("control", "icon", "container").extend("label");
Se("progress").parts("track", "filledTrack").extend("label");
var yA = Se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), bA = Se("editable").parts(
  "preview",
  "input",
  "textarea"
), SA = Se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), xA = Se("formError").parts("text", "icon"), wA = Se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), CA = Se("list").parts("container", "item", "icon"), kA = Se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), PA = Se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), _A = Se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Se("pininput").parts("field");
var TA = Se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), EA = Se("progress").parts(
  "label",
  "filledTrack",
  "track"
), OA = Se("radio").parts(
  "container",
  "control",
  "label"
), MA = Se("select").parts("field", "icon"), IA = Se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), RA = Se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), $A = Se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), AA = Se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), DA = Se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), FA = Se("tag").parts(
  "container",
  "label",
  "closeButton"
), LA = Se("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
Se("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Do(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class jA extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var ns = jA;
function Bv(e) {
  if (typeof e != "string")
    throw new ns(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = GA.test(e) ? VA(e) : e;
  const n = BA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Qs(s, 2), 16)), parseInt(Qs(a[3] || "f", 2), 16) / 255];
  }
  const r = WA.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = HA.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = UA.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Do(0, 100, s) !== s)
      throw new ns(e);
    if (Do(0, 100, l) !== l)
      throw new ns(e);
    return [...KA(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new ns(e);
}
function zA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Gy = (e) => parseInt(e.replace(/_/g, ""), 36), NA = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Gy(t.substring(0, 3)), r = Gy(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function VA(e) {
  const t = e.toLowerCase().trim(), n = NA[zA(t)];
  if (!n)
    throw new ns(e);
  return `#${n}`;
}
const Qs = (e, t) => Array.from(Array(t)).map(() => e).join(""), BA = new RegExp(`^#${Qs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), WA = new RegExp(`^#${Qs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), HA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Qs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), UA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, GA = /^[a-z]+$/i, Ky = (e) => Math.round(e * 255), KA = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(Ky);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(Ky);
};
function YA(e, t, n, r) {
  return `rgba(${Do(0, 255, e).toFixed()}, ${Do(0, 255, t).toFixed()}, ${Do(0, 255, n).toFixed()}, ${parseFloat(Do(0, 1, r).toFixed(3))})`;
}
function qA(e, t) {
  const [n, r, o, i] = Bv(e);
  return YA(n, r, o, i - t);
}
function XA(e) {
  const [t, n, r, o] = Bv(e);
  let i = (a) => {
    const s = Do(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function QA(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var ZA = (e) => Object.keys(e).length === 0, Tt = (e, t, n) => {
  const r = QA(e, `colors.${t}`, t);
  try {
    return XA(r), r;
  } catch {
    return n ?? "#000000";
  }
}, JA = (e) => {
  const [t, n, r] = Bv(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, e5 = (e) => (t) => {
  const n = Tt(t, e);
  return JA(n) < 128 ? "dark" : "light";
}, t5 = (e) => (t) => e5(e)(t) === "dark", ca = (e, t) => (n) => {
  const r = Tt(n, e);
  return qA(r, 1 - t);
};
function Yy(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var n5 = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function r5(e) {
  const t = n5();
  return !e || ZA(e) ? t : e.string && e.colors ? i5(e.string, e.colors) : e.string && !e.colors ? o5(e.string) : e.colors && !e.string ? a5(e.colors) : t;
}
function o5(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let r = 0; r < e.length; r += 1)
    t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = t >> r * 8 & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function i5(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function a5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function Wv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function AC(e) {
  return jt(e) && e.reference ? e.reference : String(e);
}
var Vd = (e, ...t) => t.map(AC).join(` ${e} `).replace(/calc/g, ""), qy = (...e) => `calc(${Vd("+", ...e)})`, Xy = (...e) => `calc(${Vd("-", ...e)})`, Uh = (...e) => `calc(${Vd("*", ...e)})`, Qy = (...e) => `calc(${Vd("/", ...e)})`, Zy = (e) => {
  const t = AC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Uh(t, -1);
}, fr = Object.assign(
  (e) => ({
    add: (...t) => fr(qy(e, ...t)),
    subtract: (...t) => fr(Xy(e, ...t)),
    multiply: (...t) => fr(Uh(e, ...t)),
    divide: (...t) => fr(Qy(e, ...t)),
    negate: () => fr(Zy(e)),
    toString: () => e.toString()
  }),
  {
    add: qy,
    subtract: Xy,
    multiply: Uh,
    divide: Qy,
    negate: Zy
  }
);
function s5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function l5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function DC(e) {
  const t = l5(e.toString());
  return t.includes("\\.") ? e : s5(e) ? t.replace(".", "\\.") : e;
}
function u5(e, t = "") {
  return [t, DC(e)].filter(Boolean).join("-");
}
function c5(e, t) {
  return `var(${DC(e)}${t ? `, ${t}` : ""})`;
}
function d5(e, t = "") {
  return `--${u5(e, t)}`;
}
function rt(e, t) {
  const n = d5(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: c5(n, f5(t == null ? void 0 : t.fallback))
  };
}
function f5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: p5, definePartsStyle: Wu } = Oe($A.keys), ys = rt("switch-track-width"), No = rt("switch-track-height"), Xf = rt("switch-track-diff"), h5 = fr.subtract(ys, No), Gh = rt("switch-thumb-x"), Ba = rt("switch-bg"), m5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ys.reference],
    height: [No.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Ba.variable]: "colors.gray.300",
    _dark: {
      [Ba.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Ba.variable]: `colors.${t}.500`,
      _dark: {
        [Ba.variable]: `colors.${t}.200`
      }
    },
    bg: Ba.reference
  };
}, v5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [No.reference],
  height: [No.reference],
  _checked: {
    transform: `translateX(${Gh.reference})`
  }
}, g5 = Wu((e) => ({
  container: {
    [Xf.variable]: h5,
    [Gh.variable]: Xf.reference,
    _rtl: {
      [Gh.variable]: fr(Xf).negate().toString()
    }
  },
  track: m5(e),
  thumb: v5
})), y5 = {
  sm: Wu({
    container: {
      [ys.variable]: "1.375rem",
      [No.variable]: "sizes.3"
    }
  }),
  md: Wu({
    container: {
      [ys.variable]: "1.875rem",
      [No.variable]: "sizes.4"
    }
  }),
  lg: Wu({
    container: {
      [ys.variable]: "2.875rem",
      [No.variable]: "sizes.6"
    }
  })
}, b5 = p5({
  baseStyle: g5,
  sizes: y5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: S5, definePartsStyle: Ki } = Oe(AA.keys), x5 = Ki({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), $c = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, w5 = Ki((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...$c
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...$c
    },
    caption: {
      color: Q("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), C5 = Ki((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...$c
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...$c
    },
    caption: {
      color: Q("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: Q(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: Q(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), k5 = {
  simple: w5,
  striped: C5,
  unstyled: {}
}, P5 = {
  sm: Ki({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: Ki({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: Ki({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, _5 = S5({
  baseStyle: x5,
  variants: k5,
  sizes: P5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), $t = J("tabs-color"), In = J("tabs-bg"), au = J("tabs-border-color"), { defineMultiStyleConfig: T5, definePartsStyle: er } = Oe(DA.keys), E5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, O5 = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, M5 = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, I5 = {
  p: 4
}, R5 = er((e) => ({
  root: E5(e),
  tab: O5(e),
  tablist: M5(e),
  tabpanel: I5
})), $5 = {
  sm: er({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: er({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: er({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, A5 = er((e) => {
  const { colorScheme: t, orientation: n } = e, r = n === "vertical", o = r ? "borderStart" : "borderBottom", i = r ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [$t.variable]: `colors.${t}.600`,
        _dark: {
          [$t.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [In.variable]: "colors.gray.200",
        _dark: {
          [In.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $t.reference,
      bg: In.reference
    }
  };
}), D5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [au.variable]: "transparent",
      _selected: {
        [$t.variable]: `colors.${t}.600`,
        [au.variable]: "colors.white",
        _dark: {
          [$t.variable]: `colors.${t}.300`,
          [au.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: au.reference
      },
      color: $t.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), F5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [In.variable]: "colors.gray.50",
      _dark: {
        [In.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [In.variable]: "colors.white",
        [$t.variable]: `colors.${t}.600`,
        _dark: {
          [In.variable]: "colors.gray.800",
          [$t.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $t.reference,
      bg: In.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), L5 = er((e) => {
  const { colorScheme: t, theme: n } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Tt(n, `${t}.700`),
        bg: Tt(n, `${t}.100`)
      }
    }
  };
}), j5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [$t.variable]: "colors.gray.600",
      _dark: {
        [$t.variable]: "inherit"
      },
      _selected: {
        [$t.variable]: "colors.white",
        [In.variable]: `colors.${t}.600`,
        _dark: {
          [$t.variable]: "colors.gray.800",
          [In.variable]: `colors.${t}.300`
        }
      },
      color: $t.reference,
      bg: In.reference
    }
  };
}), z5 = er({}), N5 = {
  line: A5,
  enclosed: D5,
  "enclosed-colored": F5,
  "soft-rounded": L5,
  "solid-rounded": j5,
  unstyled: z5
}, V5 = T5({
  baseStyle: R5,
  sizes: $5,
  variants: N5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ye = u$("badge", ["bg", "color", "shadow"]), B5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, W5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ca(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, H5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ca(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, U5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ca(`${t}.200`, 0.8)(n);
  return {
    [Ye.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.color.variable]: r
    },
    [Ye.shadow.variable]: `inset 0 0 0px 1px ${Ye.color.reference}`
  };
}, G5 = {
  solid: W5,
  subtle: H5,
  outline: U5
}, bs = {
  baseStyle: B5,
  variants: G5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: K5, definePartsStyle: Vo } = Oe(FA.keys), Jy = J("tag-bg"), eb = J("tag-color"), Qf = J("tag-shadow"), Hu = J("tag-min-height"), Uu = J("tag-min-width"), Gu = J("tag-font-size"), Ku = J("tag-padding-inline"), Y5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [eb.variable]: Ye.color.reference,
  [Jy.variable]: Ye.bg.reference,
  [Qf.variable]: Ye.shadow.reference,
  color: eb.reference,
  bg: Jy.reference,
  boxShadow: Qf.reference,
  borderRadius: "md",
  minH: Hu.reference,
  minW: Uu.reference,
  fontSize: Gu.reference,
  px: Ku.reference,
  _focusVisible: {
    [Qf.variable]: "shadows.outline"
  }
}, q5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, X5 = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, Q5 = Vo({
  container: Y5,
  label: q5,
  closeButton: X5
}), Z5 = {
  sm: Vo({
    container: {
      [Hu.variable]: "sizes.5",
      [Uu.variable]: "sizes.5",
      [Gu.variable]: "fontSizes.xs",
      [Ku.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Vo({
    container: {
      [Hu.variable]: "sizes.6",
      [Uu.variable]: "sizes.6",
      [Gu.variable]: "fontSizes.sm",
      [Ku.variable]: "space.2"
    }
  }),
  lg: Vo({
    container: {
      [Hu.variable]: "sizes.8",
      [Uu.variable]: "sizes.8",
      [Gu.variable]: "fontSizes.md",
      [Ku.variable]: "space.3"
    }
  })
}, J5 = {
  subtle: Vo((e) => {
    var t;
    return {
      container: (t = bs.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Vo((e) => {
    var t;
    return {
      container: (t = bs.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Vo((e) => {
    var t;
    return {
      container: (t = bs.variants) == null ? void 0 : t.outline(e)
    };
  })
}, eD = K5({
  variants: J5,
  baseStyle: Q5,
  sizes: Z5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: mr, defineMultiStyleConfig: tD } = Oe(wA.keys), Mi = J("input-height"), Ii = J("input-font-size"), Ri = J("input-padding"), $i = J("input-border-radius"), nD = mr({
  addon: {
    height: Mi.reference,
    fontSize: Ii.reference,
    px: Ri.reference,
    borderRadius: $i.reference
  },
  field: {
    width: "100%",
    height: Mi.reference,
    fontSize: Ii.reference,
    px: Ri.reference,
    borderRadius: $i.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), Fr = {
  lg: {
    [Ii.variable]: "fontSizes.lg",
    [Ri.variable]: "space.4",
    [$i.variable]: "radii.md",
    [Mi.variable]: "sizes.12"
  },
  md: {
    [Ii.variable]: "fontSizes.md",
    [Ri.variable]: "space.4",
    [$i.variable]: "radii.md",
    [Mi.variable]: "sizes.10"
  },
  sm: {
    [Ii.variable]: "fontSizes.sm",
    [Ri.variable]: "space.3",
    [$i.variable]: "radii.sm",
    [Mi.variable]: "sizes.8"
  },
  xs: {
    [Ii.variable]: "fontSizes.xs",
    [Ri.variable]: "space.2",
    [$i.variable]: "radii.sm",
    [Mi.variable]: "sizes.6"
  }
}, rD = {
  lg: mr({
    field: Fr.lg,
    group: Fr.lg
  }),
  md: mr({
    field: Fr.md,
    group: Fr.md
  }),
  sm: mr({
    field: Fr.sm,
    group: Fr.sm
  }),
  xs: mr({
    field: Fr.xs,
    group: Fr.xs
  })
};
function Hv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var oD = mr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Hv(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: Q("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Tt(t, r),
        boxShadow: `0 0 0 1px ${Tt(t, r)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Tt(t, n),
        boxShadow: `0 0 0 1px ${Tt(t, n)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: Q("inherit", "whiteAlpha.50")(e),
      bg: Q("gray.100", "whiteAlpha.300")(e)
    }
  };
}), iD = mr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Hv(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: Q("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: Q("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Tt(t, r)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Tt(t, n)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: Q("gray.100", "whiteAlpha.50")(e)
    }
  };
}), aD = mr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Hv(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Tt(t, r),
        boxShadow: `0px 1px 0px 0px ${Tt(t, r)}`
      },
      _focusVisible: {
        borderColor: Tt(t, n),
        boxShadow: `0px 1px 0px 0px ${Tt(t, n)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), sD = mr({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), lD = {
  outline: oD,
  filled: iD,
  flushed: aD,
  unstyled: sD
}, be = tD({
  baseStyle: nD,
  sizes: rD,
  variants: lD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), tb, uD = {
  ...(tb = be.baseStyle) == null ? void 0 : tb.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, nb, rb, cD = {
  outline: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.outline(e).field) != null ? n : {};
  },
  flushed: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.flushed(e).field) != null ? n : {};
  },
  filled: (e) => {
    var t, n;
    return (n = (t = be.variants) == null ? void 0 : t.filled(e).field) != null ? n : {};
  },
  unstyled: (rb = (nb = be.variants) == null ? void 0 : nb.unstyled.field) != null ? rb : {}
}, ob, ib, ab, sb, lb, ub, cb, db, dD = {
  xs: (ib = (ob = be.sizes) == null ? void 0 : ob.xs.field) != null ? ib : {},
  sm: (sb = (ab = be.sizes) == null ? void 0 : ab.sm.field) != null ? sb : {},
  md: (ub = (lb = be.sizes) == null ? void 0 : lb.md.field) != null ? ub : {},
  lg: (db = (cb = be.sizes) == null ? void 0 : cb.lg.field) != null ? db : {}
}, fD = {
  baseStyle: uD,
  sizes: dD,
  variants: cD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, su = rt("tooltip-bg"), Zf = rt("tooltip-fg"), pD = rt("popper-arrow-bg"), hD = {
  bg: su.reference,
  color: Zf.reference,
  [su.variable]: "colors.gray.700",
  [Zf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [su.variable]: "colors.gray.300",
    [Zf.variable]: "colors.gray.900"
  },
  [pD.variable]: su.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, mD = {
  baseStyle: hD
}, { defineMultiStyleConfig: vD, definePartsStyle: rs } = Oe(EA.keys), gD = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    Yy(),
    Yy("1rem", "rgba(0,0,0,0.1)")
  )(e), a = Q(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Tt(n, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!r && o && i,
    ...r ? { bgImage: s } : { bgColor: a }
  };
}, yD = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, bD = (e) => ({
  bg: Q("gray.100", "whiteAlpha.300")(e)
}), SD = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...gD(e)
}), xD = rs((e) => ({
  label: yD,
  filledTrack: SD(e),
  track: bD(e)
})), wD = {
  xs: rs({
    track: { h: "1" }
  }),
  sm: rs({
    track: { h: "2" }
  }),
  md: rs({
    track: { h: "3" }
  }),
  lg: rs({
    track: { h: "4" }
  })
}, CD = vD({
  sizes: wD,
  baseStyle: xD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), kD = (e) => typeof e == "function";
function Ot(e, ...t) {
  return kD(e) ? e(...t) : e;
}
var { definePartsStyle: Yu, defineMultiStyleConfig: PD } = Oe(gA.keys), Ss = J("checkbox-size"), _D = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Ss.reference,
    h: Ss.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: Q(`${t}.500`, `${t}.200`)(e),
      borderColor: Q(`${t}.500`, `${t}.200`)(e),
      color: Q("white", "gray.900")(e),
      _hover: {
        bg: Q(`${t}.600`, `${t}.300`)(e),
        borderColor: Q(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: Q("gray.200", "transparent")(e),
        bg: Q("gray.200", "whiteAlpha.300")(e),
        color: Q("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: Q(`${t}.500`, `${t}.200`)(e),
      borderColor: Q(`${t}.500`, `${t}.200`)(e),
      color: Q("white", "gray.900")(e)
    },
    _disabled: {
      bg: Q("gray.100", "whiteAlpha.100")(e),
      borderColor: Q("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: Q("red.500", "red.300")(e)
    }
  };
}, TD = {
  _disabled: { cursor: "not-allowed" }
}, ED = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, OD = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, MD = Yu((e) => ({
  icon: OD,
  container: TD,
  control: Ot(_D, e),
  label: ED
})), ID = {
  sm: Yu({
    control: { [Ss.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Yu({
    control: { [Ss.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Yu({
    control: { [Ss.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Ac = PD({
  baseStyle: MD,
  sizes: ID,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: RD, definePartsStyle: qu } = Oe(OA.keys), $D = (e) => {
  var t;
  const n = (t = Ot(Ac.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...n,
    borderRadius: "full",
    _checked: {
      ...n == null ? void 0 : n._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, AD = qu((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = Ac).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = Ac).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: $D(e)
  };
}), DD = {
  md: qu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: qu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: qu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, FD = RD({
  baseStyle: AD,
  sizes: DD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: LD, definePartsStyle: jD } = Oe(MA.keys), lu = J("select-bg"), fb, zD = {
  ...(fb = be.baseStyle) == null ? void 0 : fb.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: lu.reference,
  [lu.variable]: "colors.white",
  _dark: {
    [lu.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: lu.reference
  }
}, ND = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, VD = jD({
  field: zD,
  icon: ND
}), uu = {
  paddingInlineEnd: "8"
}, pb, hb, mb, vb, gb, yb, bb, Sb, BD = {
  lg: {
    ...(pb = be.sizes) == null ? void 0 : pb.lg,
    field: {
      ...(hb = be.sizes) == null ? void 0 : hb.lg.field,
      ...uu
    }
  },
  md: {
    ...(mb = be.sizes) == null ? void 0 : mb.md,
    field: {
      ...(vb = be.sizes) == null ? void 0 : vb.md.field,
      ...uu
    }
  },
  sm: {
    ...(gb = be.sizes) == null ? void 0 : gb.sm,
    field: {
      ...(yb = be.sizes) == null ? void 0 : yb.sm.field,
      ...uu
    }
  },
  xs: {
    ...(bb = be.sizes) == null ? void 0 : bb.xs,
    field: {
      ...(Sb = be.sizes) == null ? void 0 : Sb.xs.field,
      ...uu
    },
    icon: {
      insetEnd: "1"
    }
  }
}, WD = LD({
  baseStyle: VD,
  sizes: BD,
  variants: be.variants,
  defaultProps: be.defaultProps
}), Jf = J("skeleton-start-color"), ep = J("skeleton-end-color"), HD = {
  [Jf.variable]: "colors.gray.100",
  [ep.variable]: "colors.gray.400",
  _dark: {
    [Jf.variable]: "colors.gray.800",
    [ep.variable]: "colors.gray.600"
  },
  background: Jf.reference,
  borderColor: ep.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, UD = {
  baseStyle: HD
}, tp = J("skip-link-bg"), GD = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [tp.variable]: "colors.white",
    _dark: {
      [tp.variable]: "colors.gray.700"
    },
    bg: tp.reference
  }
}, KD = {
  baseStyle: GD
}, { defineMultiStyleConfig: YD, definePartsStyle: Bd } = Oe(IA.keys), Zs = J("slider-thumb-size"), Js = J("slider-track-size"), Hr = J("slider-bg"), qD = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...Wv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, XD = (e) => ({
  ...Wv({
    orientation: e.orientation,
    horizontal: { h: Js.reference },
    vertical: { w: Js.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Hr.variable]: "colors.gray.200",
  _dark: {
    [Hr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Hr.variable]: "colors.gray.300",
    _dark: {
      [Hr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Hr.reference
}), QD = (e) => {
  const { orientation: t } = e;
  return {
    ...Wv({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Zs.reference,
    h: Zs.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, ZD = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Hr.variable]: `colors.${t}.500`,
    _dark: {
      [Hr.variable]: `colors.${t}.200`
    },
    bg: Hr.reference
  };
}, JD = Bd((e) => ({
  container: qD(e),
  track: XD(e),
  thumb: QD(e),
  filledTrack: ZD(e)
})), eF = Bd({
  container: {
    [Zs.variable]: "sizes.4",
    [Js.variable]: "sizes.1"
  }
}), tF = Bd({
  container: {
    [Zs.variable]: "sizes.3.5",
    [Js.variable]: "sizes.1"
  }
}), nF = Bd({
  container: {
    [Zs.variable]: "sizes.2.5",
    [Js.variable]: "sizes.0.5"
  }
}), rF = {
  lg: eF,
  md: tF,
  sm: nF
}, oF = YD({
  baseStyle: JD,
  sizes: rF,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Mo = rt("spinner-size"), iF = {
  width: [Mo.reference],
  height: [Mo.reference]
}, aF = {
  xs: {
    [Mo.variable]: "sizes.3"
  },
  sm: {
    [Mo.variable]: "sizes.4"
  },
  md: {
    [Mo.variable]: "sizes.6"
  },
  lg: {
    [Mo.variable]: "sizes.8"
  },
  xl: {
    [Mo.variable]: "sizes.12"
  }
}, sF = {
  baseStyle: iF,
  sizes: aF,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: lF, definePartsStyle: FC } = Oe(RA.keys), uF = {
  fontWeight: "medium"
}, cF = {
  opacity: 0.8,
  marginBottom: "2"
}, dF = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, fF = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, pF = FC({
  container: {},
  label: uF,
  helpText: cF,
  number: dF,
  icon: fF
}), hF = {
  md: FC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, mF = lF({
  baseStyle: pF,
  sizes: hF,
  defaultProps: {
    size: "md"
  }
}), np = J("kbd-bg"), vF = {
  [np.variable]: "colors.gray.100",
  _dark: {
    [np.variable]: "colors.whiteAlpha.100"
  },
  bg: np.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, gF = {
  baseStyle: vF
}, yF = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, bF = {
  baseStyle: yF
}, { defineMultiStyleConfig: SF, definePartsStyle: xF } = Oe(CA.keys), wF = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, CF = xF({
  icon: wF
}), kF = SF({
  baseStyle: CF
}), { defineMultiStyleConfig: PF, definePartsStyle: _F } = Oe(kA.keys), Un = J("menu-bg"), rp = J("menu-shadow"), TF = {
  [Un.variable]: "#fff",
  [rp.variable]: "shadows.sm",
  _dark: {
    [Un.variable]: "colors.gray.700",
    [rp.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Un.reference,
  boxShadow: rp.reference
}, EF = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Un.variable]: "colors.gray.100",
    _dark: {
      [Un.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Un.variable]: "colors.gray.200",
    _dark: {
      [Un.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Un.variable]: "colors.gray.100",
    _dark: {
      [Un.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Un.reference
}, OF = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, MF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, IF = {
  opacity: 0.6
}, RF = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, $F = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, AF = _F({
  button: $F,
  list: TF,
  item: EF,
  groupTitle: OF,
  icon: MF,
  command: IF,
  divider: RF
}), DF = PF({
  baseStyle: AF
}), { defineMultiStyleConfig: FF, definePartsStyle: Kh } = Oe(PA.keys), op = J("modal-bg"), ip = J("modal-shadow"), LF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, jF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, zF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [op.variable]: "colors.white",
    [ip.variable]: "shadows.lg",
    _dark: {
      [op.variable]: "colors.gray.700",
      [ip.variable]: "shadows.dark-lg"
    },
    bg: op.reference,
    boxShadow: ip.reference
  };
}, NF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, VF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, BF = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, WF = {
  px: "6",
  py: "4"
}, HF = Kh((e) => ({
  overlay: LF,
  dialogContainer: Ot(jF, e),
  dialog: Ot(zF, e),
  header: NF,
  closeButton: VF,
  body: Ot(BF, e),
  footer: WF
}));
function Tn(e) {
  return Kh(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var UF = {
  xs: Tn("xs"),
  sm: Tn("sm"),
  md: Tn("md"),
  lg: Tn("lg"),
  xl: Tn("xl"),
  "2xl": Tn("2xl"),
  "3xl": Tn("3xl"),
  "4xl": Tn("4xl"),
  "5xl": Tn("5xl"),
  "6xl": Tn("6xl"),
  full: Tn("full")
}, GF = FF({
  baseStyle: HF,
  sizes: UF,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: KF, definePartsStyle: LC } = Oe(_A.keys), Uv = rt("number-input-stepper-width"), jC = rt("number-input-input-padding"), YF = fr(Uv).add("0.5rem").toString(), ap = rt("number-input-bg"), sp = rt("number-input-color"), lp = rt("number-input-border-color"), qF = {
  [Uv.variable]: "sizes.6",
  [jC.variable]: YF
}, XF = (e) => {
  var t, n;
  return (n = (t = Ot(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, QF = {
  width: Uv.reference
}, ZF = {
  borderStart: "1px solid",
  borderStartColor: lp.reference,
  color: sp.reference,
  bg: ap.reference,
  [sp.variable]: "colors.chakra-body-text",
  [lp.variable]: "colors.chakra-border-color",
  _dark: {
    [sp.variable]: "colors.whiteAlpha.800",
    [lp.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [ap.variable]: "colors.gray.200",
    _dark: {
      [ap.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, JF = LC((e) => {
  var t;
  return {
    root: qF,
    field: (t = Ot(XF, e)) != null ? t : {},
    stepperGroup: QF,
    stepper: ZF
  };
});
function cu(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = IC.fontSizes[a];
  return LC({
    field: {
      ...o.field,
      paddingInlineEnd: jC.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: fr(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: i[e]
      },
      _last: {
        borderBottomEndRadius: i[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var e4 = {
  xs: cu("xs"),
  sm: cu("sm"),
  md: cu("md"),
  lg: cu("lg")
}, t4 = KF({
  baseStyle: JF,
  sizes: e4,
  variants: be.variants,
  defaultProps: be.defaultProps
}), xb, n4 = {
  ...(xb = be.baseStyle) == null ? void 0 : xb.field,
  textAlign: "center"
}, r4 = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, wb, Cb, o4 = {
  outline: (e) => {
    var t, n, r;
    return (r = (n = Ot((t = be.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  flushed: (e) => {
    var t, n, r;
    return (r = (n = Ot((t = be.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  filled: (e) => {
    var t, n, r;
    return (r = (n = Ot((t = be.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  unstyled: (Cb = (wb = be.variants) == null ? void 0 : wb.unstyled.field) != null ? Cb : {}
}, i4 = {
  baseStyle: n4,
  sizes: r4,
  variants: o4,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: a4, definePartsStyle: s4 } = Oe(TA.keys), du = rt("popper-bg"), l4 = rt("popper-arrow-bg"), kb = rt("popper-arrow-shadow-color"), u4 = { zIndex: 10 }, c4 = {
  [du.variable]: "colors.white",
  bg: du.reference,
  [l4.variable]: du.reference,
  [kb.variable]: "colors.gray.200",
  _dark: {
    [du.variable]: "colors.gray.700",
    [kb.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, d4 = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, f4 = {
  px: 3,
  py: 2
}, p4 = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, h4 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, m4 = s4({
  popper: u4,
  content: c4,
  header: d4,
  body: f4,
  footer: p4,
  closeButton: h4
}), v4 = a4({
  baseStyle: m4
}), { definePartsStyle: Yh, defineMultiStyleConfig: g4 } = Oe(yA.keys), up = J("drawer-bg"), cp = J("drawer-box-shadow");
function ui(e) {
  return Yh(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var y4 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, b4 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, S4 = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [up.variable]: "colors.white",
    [cp.variable]: "shadows.lg",
    _dark: {
      [up.variable]: "colors.gray.700",
      [cp.variable]: "shadows.dark-lg"
    },
    bg: up.reference,
    boxShadow: cp.reference
  };
}, x4 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, w4 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, C4 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, k4 = {
  px: "6",
  py: "4"
}, P4 = Yh((e) => ({
  overlay: y4,
  dialogContainer: b4,
  dialog: Ot(S4, e),
  header: x4,
  closeButton: w4,
  body: C4,
  footer: k4
})), _4 = {
  xs: ui("xs"),
  sm: ui("md"),
  md: ui("lg"),
  lg: ui("2xl"),
  xl: ui("4xl"),
  full: ui("full")
}, T4 = g4({
  baseStyle: P4,
  sizes: _4,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: E4, defineMultiStyleConfig: O4 } = Oe(bA.keys), M4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, I4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, R4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, $4 = E4({
  preview: M4,
  input: I4,
  textarea: R4
}), A4 = O4({
  baseStyle: $4
}), { definePartsStyle: D4, defineMultiStyleConfig: F4 } = Oe(SA.keys), Yi = J("form-control-color"), L4 = {
  marginStart: "1",
  [Yi.variable]: "colors.red.500",
  _dark: {
    [Yi.variable]: "colors.red.300"
  },
  color: Yi.reference
}, j4 = {
  mt: "2",
  [Yi.variable]: "colors.gray.600",
  _dark: {
    [Yi.variable]: "colors.whiteAlpha.600"
  },
  color: Yi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, z4 = D4({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: L4,
  helperText: j4
}), N4 = F4({
  baseStyle: z4
}), { definePartsStyle: V4, defineMultiStyleConfig: B4 } = Oe(xA.keys), qi = J("form-error-color"), W4 = {
  [qi.variable]: "colors.red.500",
  _dark: {
    [qi.variable]: "colors.red.300"
  },
  color: qi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, H4 = {
  marginEnd: "0.5em",
  [qi.variable]: "colors.red.500",
  _dark: {
    [qi.variable]: "colors.red.300"
  },
  color: qi.reference
}, U4 = V4({
  text: W4,
  icon: H4
}), G4 = B4({
  baseStyle: U4
}), K4 = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, Y4 = {
  baseStyle: K4
}, q4 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, X4 = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, Q4 = {
  baseStyle: q4,
  sizes: X4,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: Z4, definePartsStyle: J4 } = Oe(vA.keys), dp = J("breadcrumb-link-decor"), eL = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: dp.reference,
  [dp.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [dp.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, tL = J4({
  link: eL
}), nL = Z4({
  baseStyle: tL
}), rL = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, zC = (e) => {
  const { colorScheme: t, theme: n } = e;
  if (t === "gray")
    return {
      color: Q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: Q("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: Q("gray.200", "whiteAlpha.300")(e) }
    };
  const r = ca(`${t}.200`, 0.12)(n), o = ca(`${t}.200`, 0.24)(n);
  return {
    color: Q(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: Q(`${t}.50`, r)(e)
    },
    _active: {
      bg: Q(`${t}.100`, o)(e)
    }
  };
}, oL = (e) => {
  const { colorScheme: t } = e, n = Q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Ot(zC, e)
  };
}, iL = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, aL = (e) => {
  var t;
  const { colorScheme: n } = e;
  if (n === "gray") {
    const l = Q("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: Q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: Q("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: Q("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${n}.500`,
    color: o = "white",
    hoverBg: i = `${n}.600`,
    activeBg: a = `${n}.700`
  } = (t = iL[n]) != null ? t : {}, s = Q(r, `${n}.200`)(e);
  return {
    bg: s,
    color: Q(o, "gray.800")(e),
    _hover: {
      bg: Q(i, `${n}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: Q(a, `${n}.400`)(e) }
  };
}, sL = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: Q(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: Q(`${t}.700`, `${t}.500`)(e)
    }
  };
}, lL = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, uL = {
  ghost: zC,
  outline: oL,
  solid: aL,
  link: sL,
  unstyled: lL
}, cL = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, dL = {
  baseStyle: rL,
  variants: uL,
  sizes: cL,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Bo, defineMultiStyleConfig: fL } = Oe(LA.keys), Dc = J("card-bg"), yr = J("card-padding"), NC = J("card-shadow"), Xu = J("card-radius"), VC = J("card-border-width", "0"), BC = J("card-border-color"), pL = Bo({
  container: {
    [Dc.variable]: "colors.chakra-body-bg",
    backgroundColor: Dc.reference,
    boxShadow: NC.reference,
    borderRadius: Xu.reference,
    color: "chakra-body-text",
    borderWidth: VC.reference,
    borderColor: BC.reference
  },
  body: {
    padding: yr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: yr.reference
  },
  footer: {
    padding: yr.reference
  }
}), hL = {
  sm: Bo({
    container: {
      [Xu.variable]: "radii.base",
      [yr.variable]: "space.3"
    }
  }),
  md: Bo({
    container: {
      [Xu.variable]: "radii.md",
      [yr.variable]: "space.5"
    }
  }),
  lg: Bo({
    container: {
      [Xu.variable]: "radii.xl",
      [yr.variable]: "space.7"
    }
  })
}, mL = {
  elevated: Bo({
    container: {
      [NC.variable]: "shadows.base",
      _dark: {
        [Dc.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Bo({
    container: {
      [VC.variable]: "1px",
      [BC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Bo({
    container: {
      [Dc.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [yr.variable]: 0
    },
    header: {
      [yr.variable]: 0
    },
    footer: {
      [yr.variable]: 0
    }
  }
}, vL = fL({
  baseStyle: pL,
  variants: mL,
  sizes: hL,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), xs = rt("close-button-size"), Wa = rt("close-button-bg"), gL = {
  w: [xs.reference],
  h: [xs.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Wa.variable]: "colors.blackAlpha.100",
    _dark: {
      [Wa.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Wa.variable]: "colors.blackAlpha.200",
    _dark: {
      [Wa.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Wa.reference
}, yL = {
  lg: {
    [xs.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [xs.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [xs.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, bL = {
  baseStyle: gL,
  sizes: yL,
  defaultProps: {
    size: "md"
  }
}, { variants: SL, defaultProps: xL } = bs, wL = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, CL = {
  baseStyle: wL,
  variants: SL,
  defaultProps: xL
}, kL = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, PL = {
  baseStyle: kL
}, _L = {
  opacity: 0.6,
  borderColor: "inherit"
}, TL = {
  borderStyle: "solid"
}, EL = {
  borderStyle: "dashed"
}, OL = {
  solid: TL,
  dashed: EL
}, ML = {
  baseStyle: _L,
  variants: OL,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: IL, defineMultiStyleConfig: RL } = Oe(pA.keys), $L = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, AL = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, DL = {
  pt: "2",
  px: "4",
  pb: "5"
}, FL = {
  fontSize: "1.25em"
}, LL = IL({
  container: $L,
  button: AL,
  panel: DL,
  icon: FL
}), jL = RL({ baseStyle: LL }), { definePartsStyle: yl, defineMultiStyleConfig: zL } = Oe(hA.keys), Qt = J("alert-fg"), _r = J("alert-bg"), NL = yl({
  container: {
    bg: _r.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: Qt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Qt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Gv(e) {
  const { theme: t, colorScheme: n } = e, r = ca(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var VL = yl((e) => {
  const { colorScheme: t } = e, n = Gv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [_r.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [_r.variable]: n.dark
      }
    }
  };
}), BL = yl((e) => {
  const { colorScheme: t } = e, n = Gv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [_r.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [_r.variable]: n.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Qt.reference
    }
  };
}), WL = yl((e) => {
  const { colorScheme: t } = e, n = Gv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [_r.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [_r.variable]: n.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Qt.reference
    }
  };
}), HL = yl((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Qt.variable]: "colors.white",
      [_r.variable]: `colors.${t}.600`,
      _dark: {
        [Qt.variable]: "colors.gray.900",
        [_r.variable]: `colors.${t}.200`
      },
      color: Qt.reference
    }
  };
}), UL = {
  subtle: VL,
  "left-accent": BL,
  "top-accent": WL,
  solid: HL
}, GL = zL({
  baseStyle: NL,
  variants: UL,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: WC, defineMultiStyleConfig: KL } = Oe(mA.keys), Xi = J("avatar-border-color"), ws = J("avatar-bg"), el = J("avatar-font-size"), da = J("avatar-size"), YL = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Xi.reference,
  [Xi.variable]: "white",
  _dark: {
    [Xi.variable]: "colors.gray.800"
  }
}, qL = {
  bg: ws.reference,
  fontSize: el.reference,
  width: da.reference,
  height: da.reference,
  lineHeight: "1",
  [ws.variable]: "colors.gray.200",
  _dark: {
    [ws.variable]: "colors.whiteAlpha.400"
  }
}, XL = (e) => {
  const { name: t, theme: n } = e, r = t ? r5({ string: t }) : "colors.gray.400", o = t5(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: ws.reference,
    fontSize: el.reference,
    color: i,
    borderColor: Xi.reference,
    verticalAlign: "top",
    width: da.reference,
    height: da.reference,
    "&:not([data-loaded])": {
      [ws.variable]: r
    },
    [Xi.variable]: "colors.white",
    _dark: {
      [Xi.variable]: "colors.gray.800"
    }
  };
}, QL = {
  fontSize: el.reference,
  lineHeight: "1"
}, ZL = WC((e) => ({
  badge: Ot(YL, e),
  excessLabel: Ot(qL, e),
  container: Ot(XL, e),
  label: QL
}));
function Lr(e) {
  const t = e !== "100%" ? $C[e] : void 0;
  return WC({
    container: {
      [da.variable]: t ?? e,
      [el.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [da.variable]: t ?? e,
      [el.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var JL = {
  "2xs": Lr(4),
  xs: Lr(6),
  sm: Lr(8),
  md: Lr(12),
  lg: Lr(16),
  xl: Lr(24),
  "2xl": Lr(32),
  full: Lr("100%")
}, e3 = KL({
  baseStyle: ZL,
  sizes: JL,
  defaultProps: {
    size: "md"
  }
}), t3 = {
  Accordion: jL,
  Alert: GL,
  Avatar: e3,
  Badge: bs,
  Breadcrumb: nL,
  Button: dL,
  Checkbox: Ac,
  CloseButton: bL,
  Code: CL,
  Container: PL,
  Divider: ML,
  Drawer: T4,
  Editable: A4,
  Form: N4,
  FormError: G4,
  FormLabel: Y4,
  Heading: Q4,
  Input: be,
  Kbd: gF,
  Link: bF,
  List: kF,
  Menu: DF,
  Modal: GF,
  NumberInput: t4,
  PinInput: i4,
  Popover: v4,
  Progress: CD,
  Radio: FD,
  Select: WD,
  Skeleton: UD,
  SkipLink: KD,
  Slider: oF,
  Spinner: sF,
  Stat: mF,
  Switch: b5,
  Table: _5,
  Tabs: V5,
  Tag: eD,
  Textarea: fD,
  Tooltip: mD,
  Card: vL,
  Stepper: fA
}, n3 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, r3 = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, o3 = "ltr", i3 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, HC = {
  semanticTokens: n3,
  direction: o3,
  ...uA,
  components: t3,
  styles: r3,
  config: i3
};
function os(e) {
  return typeof e == "function";
}
function a3(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var s3 = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return z$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, a3(
    ...r.map(
      (i) => (a) => os(i) ? i(a) : u3(a, i)
    )
  )(o);
}, l3 = s3(HC);
function u3(...e) {
  return mn({}, ...e, UC);
}
function UC(e, t, n, r) {
  if ((os(e) || os(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = os(e) ? e(...o) : e, a = os(t) ? t(...o) : t;
      return mn({}, i, a, UC);
    };
}
function c3() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var d3 = /* @__PURE__ */ c3();
function f3(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function p3(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var h3 = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, o, i, a) => {
    if (typeof r > "u")
      return e(r, o, i);
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    const s = t.get(r);
    if (s.has(o))
      return s.get(o);
    const l = e(r, o, i, a);
    return s.set(o, l), l;
  };
}, GC = h3(p3);
function KC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var YC = (e) => KC(e, (t) => t != null);
function m3(e) {
  return typeof e == "function";
}
function qC(e, ...t) {
  return m3(e) ? e(...t) : e;
}
function v3(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var g3 = typeof Element < "u", y3 = typeof Map == "function", b3 = typeof Set == "function", S3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Qu(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Qu(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (y3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Qu(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (b3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (S3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return !1;
    if (g3 && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Qu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var x3 = function(t, n) {
  try {
    return Qu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const w3 = /* @__PURE__ */ ul(x3);
function XC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = SR(), s = e ? GC(i, `components.${e}`) : void 0, l = r || s, u = mn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    YC(f3(o, ["children"]))
  ), c = v.useRef({});
  if (l) {
    const f = L$(l)(u);
    w3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function ei(e, t = {}) {
  return XC(e, t);
}
function Ct(e, t = {}) {
  return XC(e, t);
}
var C3 = /* @__PURE__ */ new Set([
  ...P$,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), k3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function P3(e) {
  return k3.has(e) || !C3.has(e);
}
function _3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function T3(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var E3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, O3 = /* @__PURE__ */ aC(
  function(e) {
    return E3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), M3 = O3, I3 = function(t) {
  return t !== "theme";
}, Pb = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? M3 : I3;
}, _b = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, R3 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Rv(n, r, o), mC(function() {
    return $v(n, r, o);
  }), null;
}, $3 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = _b(t, n, r), l = s || Pb(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var g = Dv(function(h, b, m) {
      var y = u && h.as || o, S = "", x = [], k = h;
      if (h.theme == null) {
        k = {};
        for (var P in h)
          k[P] = h[P];
        k.theme = v.useContext(la);
      }
      typeof h.className == "string" ? S = fC(b.registered, x, h.className) : h.className != null && (S = h.className + " ");
      var _ = Ld(d.concat(x), b.registered, k);
      S += b.key + "-" + _.name, a !== void 0 && (S += " " + a);
      var T = u && s === void 0 ? Pb(y) : l, M = {};
      for (var I in h)
        u && I === "as" || // $FlowFixMe
        T(I) && (M[I] = h[I]);
      return M.className = S, M.ref = m, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(R3, {
        cache: b,
        serialized: _,
        isStringTag: typeof y == "string"
      }), /* @__PURE__ */ v.createElement(y, M));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(h, b) {
      return e(h, q({}, n, b, {
        shouldForwardProp: _b(g, b, !0)
      })).apply(void 0, d);
    }, g;
  };
}, A3 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Fc = $3.bind();
A3.forEach(function(e) {
  Fc[e] = Fc(e);
});
var Tb, D3 = (Tb = Fc.default) != null ? Tb : Fc, F3 = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = KC(a, (d, f) => T$(f)), l = qC(e, t), u = _3(
    {},
    o,
    l,
    YC(s),
    i
  ), c = MC(u)(t.theme);
  return r ? [c, r] : c;
};
function fp(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = P3);
  const o = F3({ baseStyle: n }), i = D3(
    e,
    r
  )(o);
  return re.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = Pa();
    return re.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function L3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(fp, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return fp(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, fp(n)), e.get(n);
    }
  });
}
var X = L3();
function oe(e) {
  return v.forwardRef(e);
}
function j3(e = {}) {
  const {
    strict: t = !0,
    errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: r
  } = e, o = v.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = v.useContext(o);
    if (!s && t) {
      const l = new Error(n);
      throw l.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, l, i), l;
    }
    return s;
  }
  return [
    o.Provider,
    i,
    o
  ];
}
function z3(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = v.useMemo(() => k$(n), [n]);
  return /* @__PURE__ */ w.jsxs(QI, { theme: o, children: [
    /* @__PURE__ */ w.jsx(N3, { root: t }),
    r
  ] });
}
function N3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ w.jsx(jd, { styles: (n) => ({ [t]: n.__cssVars }) });
}
j3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function V3() {
  const { colorMode: e } = Pa();
  return /* @__PURE__ */ w.jsx(
    jd,
    {
      styles: (t) => {
        const n = GC(t, "styles.global"), r = qC(n, { theme: t, colorMode: e });
        return r ? MC(r)(t) : void 0;
      }
    }
  );
}
var Kv = v.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Kv.displayName = "EnvironmentContext";
function B3({ defer: e } = {}) {
  const [, t] = v.useReducer((n) => n + 1, 0);
  return ua(() => {
    e && t();
  }, [e]), v.useContext(Kv);
}
function QC(e) {
  const { children: t, environment: n, disabled: r } = e, o = v.useRef(null), i = v.useMemo(() => n || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [n]), a = !r || !n;
  return /* @__PURE__ */ w.jsxs(Kv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ w.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
QC.displayName = "EnvironmentProvider";
var W3 = (e) => {
  const {
    children: t,
    colorModeManager: n,
    portalZIndex: r,
    resetScope: o,
    resetCSS: i = !0,
    theme: a = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: u,
    disableGlobalStyle: c
  } = e, d = /* @__PURE__ */ w.jsx(
    QC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ w.jsx(z3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ w.jsxs(
    wC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ w.jsx(rR, { scope: o }) : /* @__PURE__ */ w.jsx(nR, {}),
        !c && /* @__PURE__ */ w.jsx(V3, {}),
        r ? /* @__PURE__ */ w.jsx(SC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, H3 = (e, t) => e.find((n) => n.id === t);
function Eb(e, t) {
  const n = ZC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function ZC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (H3(r, t))
      return n;
}
function U3(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function G3(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0, r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: a
  };
}
function ro(e, t = []) {
  const n = v.useRef(e);
  return v.useEffect(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function K3(e, t) {
  const n = ro(e);
  v.useEffect(() => {
    if (t == null)
      return;
    let r = null;
    return r = window.setTimeout(() => {
      n();
    }, t), () => {
      r && window.clearTimeout(r);
    };
  }, [t, n]);
}
function fa(e, t) {
  const n = v.useRef(!1), r = v.useRef(!1);
  v.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), v.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const JC = v.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Wd = v.createContext({}), bl = v.createContext(null), Hd = typeof document < "u", Yv = Hd ? v.useLayoutEffect : v.useEffect, ek = v.createContext({ strict: !1 }), qv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Y3 = "framerAppearId", tk = "data-" + qv(Y3);
function q3(e, t, n, r) {
  const { visualElement: o } = v.useContext(Wd), i = v.useContext(ek), a = v.useContext(bl), s = v.useContext(JC).reducedMotion, l = v.useRef();
  r = r || i.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  v.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = v.useRef(!!n[tk]);
  return Yv(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), v.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function Ai(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function X3(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ai(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function tl(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ud(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Xv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Qv = ["initial", ...Xv];
function Gd(e) {
  return Ud(e.animate) || Qv.some((t) => tl(e[t]));
}
function nk(e) {
  return !!(Gd(e) || e.variants);
}
function Q3(e, t) {
  if (Gd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || tl(n) ? n : void 0,
      animate: tl(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Z3(e) {
  const { initial: t, animate: n } = Q3(e, v.useContext(Wd));
  return v.useMemo(() => ({ initial: t, animate: n }), [Ob(t), Ob(n)]);
}
function Ob(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Mb = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, nl = {};
for (const e in Mb)
  nl[e] = {
    isEnabled: (t) => Mb[e].some((n) => !!t[n])
  };
function J3(e) {
  for (const t in e)
    nl[t] = {
      ...nl[t],
      ...e[t]
    };
}
const Zv = v.createContext({}), rk = v.createContext({}), ej = Symbol.for("motionComponentSymbol");
function tj({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && J3(e);
  function i(s, l) {
    let u;
    const c = {
      ...v.useContext(JC),
      ...s,
      layoutId: nj(s)
    }, { isStatic: d } = c, f = Z3(s), p = r(s, d);
    if (!d && Hd) {
      f.visualElement = q3(o, p, c, t);
      const g = v.useContext(rk), h = v.useContext(ek).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        h,
        e,
        g
      ));
    }
    return v.createElement(
      Wd.Provider,
      { value: f },
      u && f.visualElement ? v.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, X3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = v.forwardRef(i);
  return a[ej] = o, a;
}
function nj({ layoutId: e }) {
  const t = v.useContext(Zv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rj(e) {
  function t(r, o = {}) {
    return tj(e(r, o));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
  });
}
const oj = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Jv(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(oj.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Lc = {};
function ij(e) {
  Object.assign(Lc, e);
}
const Sl = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ti = new Set(Sl);
function ok(e, { layout: t, layoutId: n }) {
  return ti.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Lc[e] || e === "opacity");
}
const Bt = (e) => !!(e && e.getVelocity), aj = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, sj = Sl.length;
function lj(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < sj; a++) {
    const s = Sl[a];
    if (e[s] !== void 0) {
      const l = aj[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const ik = (e) => (t) => typeof t == "string" && t.startsWith(e), ak = ik("--"), qh = ik("var(--"), uj = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, cj = (e, t) => t && typeof e == "number" ? t.transform(e) : e, lo = (e, t, n) => Math.min(Math.max(n, e), t), ni = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Cs = {
  ...ni,
  transform: (e) => lo(0, 1, e)
}, fu = {
  ...ni,
  default: 1
}, ks = (e) => Math.round(e * 1e5) / 1e5, Kd = /(-)?([\d]*\.?[\d])+/g, sk = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, dj = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function xl(e) {
  return typeof e == "string";
}
const wl = (e) => ({
  test: (t) => xl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), jr = wl("deg"), tr = wl("%"), ne = wl("px"), fj = wl("vh"), pj = wl("vw"), Ib = {
  ...tr,
  parse: (e) => tr.parse(e) / 100,
  transform: (e) => tr.transform(e * 100)
}, Rb = {
  ...ni,
  transform: Math.round
}, lk = {
  // Border props
  borderWidth: ne,
  borderTopWidth: ne,
  borderRightWidth: ne,
  borderBottomWidth: ne,
  borderLeftWidth: ne,
  borderRadius: ne,
  radius: ne,
  borderTopLeftRadius: ne,
  borderTopRightRadius: ne,
  borderBottomRightRadius: ne,
  borderBottomLeftRadius: ne,
  // Positioning props
  width: ne,
  maxWidth: ne,
  height: ne,
  maxHeight: ne,
  size: ne,
  top: ne,
  right: ne,
  bottom: ne,
  left: ne,
  // Spacing props
  padding: ne,
  paddingTop: ne,
  paddingRight: ne,
  paddingBottom: ne,
  paddingLeft: ne,
  margin: ne,
  marginTop: ne,
  marginRight: ne,
  marginBottom: ne,
  marginLeft: ne,
  // Transform props
  rotate: jr,
  rotateX: jr,
  rotateY: jr,
  rotateZ: jr,
  scale: fu,
  scaleX: fu,
  scaleY: fu,
  scaleZ: fu,
  skew: jr,
  skewX: jr,
  skewY: jr,
  distance: ne,
  translateX: ne,
  translateY: ne,
  translateZ: ne,
  x: ne,
  y: ne,
  z: ne,
  perspective: ne,
  transformPerspective: ne,
  opacity: Cs,
  originX: Ib,
  originY: Ib,
  originZ: ne,
  // Misc
  zIndex: Rb,
  // SVG
  fillOpacity: Cs,
  strokeOpacity: Cs,
  numOctaves: Rb
};
function eg(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (ak(d)) {
      i[d] = f;
      continue;
    }
    const p = lk[d], g = cj(f, p);
    if (ti.has(d)) {
      if (l = !0, a[d] = g, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || r ? o.transform = lj(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const tg = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function uk(e, t, n) {
  for (const r in t)
    !Bt(t[r]) && !ok(r, n) && (e[r] = t[r]);
}
function hj({ transformTemplate: e }, t, n) {
  return v.useMemo(() => {
    const r = tg();
    return eg(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function mj(e, t, n) {
  const r = e.style || {}, o = {};
  return uk(o, r, e), Object.assign(o, hj(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function vj(e, t, n) {
  const r = {}, o = mj(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const gj = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function jc(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || gj.has(e);
}
let ck = (e) => !jc(e);
function yj(e) {
  e && (ck = (t) => t.startsWith("on") ? !jc(t) : e(t));
}
try {
  yj(require("@emotion/is-prop-valid").default);
} catch {
}
function bj(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (ck(o) || n === !0 && jc(o) || !t && !jc(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function $b(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function Sj(e, t, n) {
  const r = $b(t, e.x, e.width), o = $b(n, e.y, e.height);
  return `${r} ${o}`;
}
const xj = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, wj = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Cj(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? xj : wj;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function ng(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, d, f) {
  if (eg(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: h } = e;
  p.transform && (h && (g.transform = p.transform), delete p.transform), h && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = Sj(h, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && Cj(p, a, s, l, !1);
}
const dk = () => ({
  ...tg(),
  attrs: {}
}), rg = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function kj(e, t, n, r) {
  const o = v.useMemo(() => {
    const i = dk();
    return ng(i, t, { enableHardwareAcceleration: !1 }, rg(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    uk(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function Pj(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Jv(n) ? kj : vj)(r, i, a, n), c = {
      ...bj(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = v.useMemo(() => Bt(d) ? d.get() : d, [d]);
    return v.createElement(n, {
      ...c,
      children: f
    });
  };
}
function fk(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const pk = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function hk(e, t, n, r) {
  fk(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(pk.has(o) ? o : qv(o), t.attrs[o]);
}
function og(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Bt(n[o]) || t.style && Bt(t.style[o]) || ok(o, e)) && (r[o] = n[o]);
  return r;
}
function mk(e, t) {
  const n = og(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o = Sl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function ig(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function vk(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const zc = (e) => Array.isArray(e), _j = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Tj = (e) => zc(e) ? e[e.length - 1] || 0 : e;
function Zu(e) {
  const t = Bt(e) ? e.get() : e;
  return _j(t) ? t.toValue() : t;
}
function Ej({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: Oj(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const gk = (e) => (t, n) => {
  const r = v.useContext(Wd), o = v.useContext(bl), i = () => Ej(e, t, r, o);
  return n ? i() : vk(i);
};
function Oj(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Zu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Gd(e), u = nk(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Ud(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = ig(e, p);
    if (!g)
      return;
    const { transitionEnd: h, transition: b, ...m } = g;
    for (const y in m) {
      let S = m[y];
      if (Array.isArray(S)) {
        const x = c ? S.length - 1 : 0;
        S = S[x];
      }
      S !== null && (o[y] = S);
    }
    for (const y in h)
      o[y] = h[y];
  }), o;
}
const He = (e) => e;
class Ab {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function Mj(e) {
  let t = new Ab(), n = new Ab(), r = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && o, f = d ? t : n;
      return u && a.add(l), f.add(l) && d && o && (r = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.remove(l), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
        for (let u = 0; u < r; u++) {
          const c = t.order[u];
          c(l), a.has(c) && (s.schedule(c), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const pu = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Ij = 40;
function Rj(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = pu.reduce((d, f) => (d[f] = Mj(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, Ij), 1), o.timestamp = d, o.isProcessing = !0, pu.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: pu.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, h = !1, b = !1) => (n || l(), p.schedule(g, h, b)), d;
  }, {}), cancel: (d) => pu.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: Ee, cancel: Tr, state: ot, steps: pp } = Rj(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), $j = {
  useVisualState: gk({
    scrapeMotionValuesFromProps: mk,
    createRenderState: dk,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      Ee.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), Ee.render(() => {
        ng(n, r, { enableHardwareAcceleration: !1 }, rg(t.tagName), e.transformTemplate), hk(t, n);
      });
    }
  })
}, Aj = {
  useVisualState: gk({
    scrapeMotionValuesFromProps: og,
    createRenderState: tg
  })
};
function Dj(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Jv(e) ? $j : Aj,
    preloadedFeatures: n,
    useRender: Pj(t),
    createVisualElement: r,
    Component: e
  };
}
function vr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const yk = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Yd(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const Fj = (e) => (t) => yk(t) && e(t, Yd(t));
function br(e, t, n, r) {
  return vr(e, t, Fj(n), r);
}
const Lj = (e, t) => (n) => t(e(n)), oo = (...e) => e.reduce(Lj);
function bk(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Db = bk("dragHorizontal"), Fb = bk("dragVertical");
function Sk(e) {
  let t = !1;
  if (e === "y")
    t = Fb();
  else if (e === "x")
    t = Db();
  else {
    const n = Db(), r = Fb();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function xk() {
  const e = Sk(!0);
  return e ? (e(), !1) : !0;
}
class vo {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Lb(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || xk())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && Ee.update(() => s[r](i, a));
  };
  return br(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class jj extends vo {
  mount() {
    this.unmount = oo(Lb(this.node, !0), Lb(this.node, !1));
  }
  unmount() {
  }
}
class zj extends vo {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = oo(vr(this.node.current, "focus", () => this.onFocus()), vr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const wk = (e, t) => t ? e === t ? !0 : wk(e, t.parentElement) : !1;
function hp(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Yd(n));
}
class Nj extends vo {
  constructor() {
    super(...arguments), this.removeStartListeners = He, this.removeEndListeners = He, this.removeAccessibleListeners = He, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = br(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        Ee.update(() => {
          wk(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = br(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = oo(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || hp("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Ee.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = vr(this.node.current, "keyup", a), hp("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = vr(this.node.current, "keydown", t), r = () => {
        this.isPressing && hp("cancel", (i, a) => this.cancelPress(i, a));
      }, o = vr(this.node.current, "blur", r);
      this.removeAccessibleListeners = oo(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && Ee.update(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !xk();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && Ee.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = br(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = vr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = oo(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Xh = /* @__PURE__ */ new WeakMap(), mp = /* @__PURE__ */ new WeakMap(), Vj = (e) => {
  const t = Xh.get(e.target);
  t && t(e);
}, Bj = (e) => {
  e.forEach(Vj);
};
function Wj({ root: e, ...t }) {
  const n = e || document;
  mp.has(n) || mp.set(n, {});
  const r = mp.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Bj, { root: e, ...t })), r[o];
}
function Hj(e, t, n) {
  const r = Wj(t);
  return Xh.set(e, n), r.observe(e), () => {
    Xh.delete(e), r.unobserve(e);
  };
}
const Uj = {
  some: 0,
  all: 1
};
class Gj extends vo {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Uj[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return Hj(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Kj(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Kj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Yj = {
  inView: {
    Feature: Gj
  },
  tap: {
    Feature: Nj
  },
  focus: {
    Feature: zj
  },
  hover: {
    Feature: jj
  }
};
function Ck(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function qj(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function Xj(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function qd(e, t, n) {
  const r = e.getProps();
  return ig(r, t, n !== void 0 ? n : r.custom, qj(e), Xj(e));
}
let Qj = He, ag = He;
const io = (e) => e * 1e3, Sr = (e) => e / 1e3, Zj = {
  current: !1
}, kk = (e) => Array.isArray(e) && typeof e[0] == "number";
function Pk(e) {
  return !!(!e || typeof e == "string" && _k[e] || kk(e) || Array.isArray(e) && e.every(Pk));
}
const is = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, _k = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: is([0, 0.65, 0.55, 1]),
  circOut: is([0.55, 0, 1, 0.45]),
  backIn: is([0.31, 0.01, 0.66, -0.59]),
  backOut: is([0.33, 1.53, 0.69, 0.99])
};
function Tk(e) {
  if (e)
    return kk(e) ? is(e) : Array.isArray(e) ? e.map(Tk) : _k[e];
}
function Jj(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Tk(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function ez(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Ek = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, tz = 1e-7, nz = 12;
function rz(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = Ek(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > tz && ++s < nz);
  return a;
}
function Cl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => rz(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Ek(o(i), t, r);
}
const oz = Cl(0.42, 0, 1, 1), iz = Cl(0, 0, 0.58, 1), Ok = Cl(0.42, 0, 0.58, 1), az = (e) => Array.isArray(e) && typeof e[0] != "number", Mk = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ik = (e) => (t) => 1 - e(1 - t), Rk = (e) => 1 - Math.sin(Math.acos(e)), sg = Ik(Rk), sz = Mk(sg), $k = Cl(0.33, 1.53, 0.69, 0.99), lg = Ik($k), lz = Mk(lg), uz = (e) => (e *= 2) < 1 ? 0.5 * lg(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), cz = {
  linear: He,
  easeIn: oz,
  easeInOut: Ok,
  easeOut: iz,
  circIn: Rk,
  circInOut: sz,
  circOut: sg,
  backIn: lg,
  backInOut: lz,
  backOut: $k,
  anticipate: uz
}, jb = (e) => {
  if (Array.isArray(e)) {
    ag(e.length === 4);
    const [t, n, r, o] = e;
    return Cl(t, n, r, o);
  } else if (typeof e == "string")
    return cz[e];
  return e;
}, ug = (e, t) => (n) => !!(xl(n) && dj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Ak = (e, t, n) => (r) => {
  if (!xl(r))
    return r;
  const [o, i, a, s] = r.match(Kd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, dz = (e) => lo(0, 255, e), vp = {
  ...ni,
  transform: (e) => Math.round(dz(e))
}, Fo = {
  test: ug("rgb", "red"),
  parse: Ak("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + vp.transform(e) + ", " + vp.transform(t) + ", " + vp.transform(n) + ", " + ks(Cs.transform(r)) + ")"
};
function fz(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Qh = {
  test: ug("#"),
  parse: fz,
  transform: Fo.transform
}, Di = {
  test: ug("hsl", "hue"),
  parse: Ak("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tr.transform(ks(t)) + ", " + tr.transform(ks(n)) + ", " + ks(Cs.transform(r)) + ")"
}, kt = {
  test: (e) => Fo.test(e) || Qh.test(e) || Di.test(e),
  parse: (e) => Fo.test(e) ? Fo.parse(e) : Di.test(e) ? Di.parse(e) : Qh.parse(e),
  transform: (e) => xl(e) ? e : e.hasOwnProperty("red") ? Fo.transform(e) : Di.transform(e)
}, ze = (e, t, n) => -n * e + n * t + e;
function gp(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function pz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = gp(l, s, e + 1 / 3), i = gp(l, s, e), a = gp(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const yp = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, hz = [Qh, Fo, Di], mz = (e) => hz.find((t) => t.test(e));
function zb(e) {
  const t = mz(e);
  let n = t.parse(e);
  return t === Di && (n = pz(n)), n;
}
const Dk = (e, t) => {
  const n = zb(e), r = zb(t), o = { ...n };
  return (i) => (o.red = yp(n.red, r.red, i), o.green = yp(n.green, r.green, i), o.blue = yp(n.blue, r.blue, i), o.alpha = ze(n.alpha, r.alpha, i), Fo.transform(o));
};
function vz(e) {
  var t, n;
  return isNaN(e) && xl(e) && (((t = e.match(Kd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(sk)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Fk = {
  regex: uj,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, Lk = {
  regex: sk,
  countKey: "Colors",
  token: "${c}",
  parse: kt.parse
}, jk = {
  regex: Kd,
  countKey: "Numbers",
  token: "${n}",
  parse: ni.parse
};
function bp(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function Nc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && bp(n, Fk), bp(n, Lk), bp(n, jk), n;
}
function zk(e) {
  return Nc(e).values;
}
function Nk(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Nc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Fk.token, a[l]) : l < r + n ? s = s.replace(Lk.token, kt.transform(a[l])) : s = s.replace(jk.token, ks(a[l]));
    return s;
  };
}
const gz = (e) => typeof e == "number" ? 0 : e;
function yz(e) {
  const t = zk(e);
  return Nk(e)(t.map(gz));
}
const uo = {
  test: vz,
  parse: zk,
  createTransformer: Nk,
  getAnimatableNone: yz
}, Vk = (e, t) => (n) => `${n > 0 ? t : e}`;
function Bk(e, t) {
  return typeof e == "number" ? (n) => ze(e, t, n) : kt.test(e) ? Dk(e, t) : e.startsWith("var(") ? Vk(e, t) : Hk(e, t);
}
const Wk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Bk(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, bz = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Bk(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, Hk = (e, t) => {
  const n = uo.createTransformer(t), r = Nc(e), o = Nc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? oo(Wk(r.values, o.values), n) : Vk(e, t);
}, rl = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Nb = (e, t) => (n) => ze(e, t, n);
function Sz(e) {
  return typeof e == "number" ? Nb : typeof e == "string" ? kt.test(e) ? Dk : Hk : Array.isArray(e) ? Wk : typeof e == "object" ? bz : Nb;
}
function xz(e, t, n) {
  const r = [], o = n || Sz(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || He : t;
      s = oo(l, s);
    }
    r.push(s);
  }
  return r;
}
function Uk(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (ag(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = xz(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = rl(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(lo(e[0], e[i - 1], u)) : l;
}
function wz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = rl(0, t, r);
    e.push(ze(n, 1, o));
  }
}
function Cz(e) {
  const t = [0];
  return wz(t, e.length - 1), t;
}
function kz(e, t) {
  return e.map((n) => n * t);
}
function Pz(e, t) {
  return e.map(() => t || Ok).splice(0, e.length - 1);
}
function Vc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = az(r) ? r.map(jb) : jb(r), i = {
    done: !1,
    value: t[0]
  }, a = kz(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Cz(t),
    e
  ), s = Uk(a, t, {
    ease: Array.isArray(o) ? o : Pz(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Gk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const _z = 5;
function Kk(e, t, n) {
  const r = Math.max(t - _z, 0);
  return Gk(n - e(r), t - r);
}
const Sp = 1e-3, Tz = 0.01, Vb = 10, Ez = 0.05, Oz = 1;
function Mz({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Qj(e <= io(Vb));
  let a = 1 - t;
  a = lo(Ez, Oz, a), e = lo(Tz, Vb, Sr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = Zh(u, a), g = Math.exp(-d);
    return Sp - f / p * g;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-d), h = Zh(Math.pow(u, 2), a);
    return (-o(u) + Sp > 0 ? -1 : 1) * ((f - p) * g) / h;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Sp + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = Rz(o, i, s);
  if (e = io(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const Iz = 12;
function Rz(e, t, n) {
  let r = n;
  for (let o = 1; o < Iz; o++)
    r = r - e(r) / t(r);
  return r;
}
function Zh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const $z = ["duration", "bounce"], Az = ["stiffness", "damping", "mass"];
function Bb(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Dz(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Bb(e, Az) && Bb(e, $z)) {
    const n = Mz(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Yk({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = Dz(r), p = c ? -Sr(c) : 0, g = l / (2 * Math.sqrt(s * u)), h = i - o, b = Sr(Math.sqrt(s / u)), m = Math.abs(h) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let y;
  if (g < 1) {
    const S = Zh(b, g);
    y = (x) => {
      const k = Math.exp(-g * b * x);
      return i - k * ((p + g * b * h) / S * Math.sin(S * x) + h * Math.cos(S * x));
    };
  } else if (g === 1)
    y = (S) => i - Math.exp(-b * S) * (h + (p + b * h) * S);
  else {
    const S = b * Math.sqrt(g * g - 1);
    y = (x) => {
      const k = Math.exp(-g * b * x), P = Math.min(S * x, 300);
      return i - k * ((p + g * b * h) * Math.sinh(P) + S * h * Math.cosh(P)) / S;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (S) => {
      const x = y(S);
      if (f)
        a.done = S >= d;
      else {
        let k = p;
        S !== 0 && (g < 1 ? k = Kk(y, S, x) : k = 0);
        const P = Math.abs(k) <= n, _ = Math.abs(i - x) <= t;
        a.done = P && _;
      }
      return a.value = a.done ? i : x, a;
    }
  };
}
function Wb({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (T) => s !== void 0 && T < s || l !== void 0 && T > l, g = (T) => s === void 0 ? l : l === void 0 || Math.abs(s - T) < Math.abs(l - T) ? s : l;
  let h = n * t;
  const b = d + h, m = a === void 0 ? b : a(b);
  m !== b && (h = m - d);
  const y = (T) => -h * Math.exp(-T / r), S = (T) => m + y(T), x = (T) => {
    const M = y(T), I = S(T);
    f.done = Math.abs(M) <= u, f.value = f.done ? m : I;
  };
  let k, P;
  const _ = (T) => {
    p(f.value) && (k = T, P = Yk({
      keyframes: [f.value, g(f.value)],
      velocity: Kk(S, T, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return _(0), {
    calculatedDuration: null,
    next: (T) => {
      let M = !1;
      return !P && k === void 0 && (M = !0, x(T), _(T)), k !== void 0 && T > k ? P.next(T - k) : (!M && x(T), f);
    }
  };
}
const Fz = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Ee.update(t, !0),
    stop: () => Tr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ot.isProcessing ? ot.timestamp : performance.now()
  };
}, Hb = 2e4;
function Ub(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Hb; )
    t += n, r = e.next(t);
  return t >= Hb ? 1 / 0 : t;
}
const Lz = {
  decay: Wb,
  inertia: Wb,
  tween: Vc,
  keyframes: Vc,
  spring: Yk
};
function Bc({ autoplay: e = !0, delay: t = 0, driver: n = Fz, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, g = !1, h, b;
  const m = () => {
    b = new Promise((V) => {
      h = V;
    });
  };
  m();
  let y;
  const S = Lz[o] || Vc;
  let x;
  S !== Vc && typeof r[0] != "number" && (x = Uk([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const k = S({ ...f, keyframes: r });
  let P;
  s === "mirror" && (P = S({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let _ = "idle", T = null, M = null, I = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = Ub(k));
  const { calculatedDuration: D } = k;
  let G = 1 / 0, H = 1 / 0;
  D !== null && (G = D + a, H = G * (i + 1) - a);
  let L = 0;
  const W = (V) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, V)), p < 0 && (M = Math.min(V - H / p, M)), T !== null ? L = T : L = Math.round(V - M) * p;
    const Y = L - t * (p >= 0 ? 1 : -1), z = p >= 0 ? Y < 0 : Y > H;
    L = Math.max(Y, 0), _ === "finished" && T === null && (L = H);
    let te = L, le = k;
    if (i) {
      const ke = L / G;
      let et = Math.floor(ke), qe = ke % 1;
      !qe && ke >= 1 && (qe = 1), qe === 1 && et--, et = Math.min(et, i + 1);
      const on = !!(et % 2);
      on && (s === "reverse" ? (qe = 1 - qe, a && (qe -= a / G)) : s === "mirror" && (le = P));
      let Pn = lo(0, 1, qe);
      L > H && (Pn = s === "reverse" && on ? 1 : 0), te = Pn * G;
    }
    const ae = z ? { done: !1, value: r[0] } : le.next(te);
    x && (ae.value = x(ae.value));
    let { done: se } = ae;
    !z && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = T === null && (_ === "finished" || _ === "running" && se);
    return d && d(ae.value), me && A(), ae;
  }, K = () => {
    y && y.stop(), y = void 0;
  }, $ = () => {
    _ = "idle", K(), h(), m(), M = I = null;
  }, A = () => {
    _ = "finished", c && c(), K(), h();
  }, j = () => {
    if (g)
      return;
    y || (y = n(W));
    const V = y.now();
    l && l(), T !== null ? M = V - T : (!M || _ === "finished") && (M = V), _ === "finished" && m(), I = M, T = null, _ = "running", y.start();
  };
  e && j();
  const U = {
    then(V, Y) {
      return b.then(V, Y);
    },
    get time() {
      return Sr(L);
    },
    set time(V) {
      V = io(V), L = V, T !== null || !y || p === 0 ? T = V : M = y.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Ub(k) : k.calculatedDuration;
      return Sr(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !y || (p = V, U.time = Sr(L));
    },
    get state() {
      return _;
    },
    play: j,
    pause: () => {
      _ = "paused", T = L;
    },
    stop: () => {
      g = !0, _ !== "idle" && (_ = "idle", u && u(), $());
    },
    cancel: () => {
      I !== null && W(I), $();
    },
    complete: () => {
      _ = "finished";
    },
    sample: (V) => (M = 0, W(V))
  };
  return U;
}
function jz(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const zz = jz(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Nz = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), hu = 10, Vz = 2e4, Bz = (e, t) => t.type === "spring" || e === "backgroundColor" || !Pk(t.ease);
function Wz(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(zz() && Nz.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((y) => {
      s = y;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (Bz(t, o)) {
    const y = Bc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let S = { done: !1, value: c[0] };
    const x = [];
    let k = 0;
    for (; !S.done && k < Vz; )
      S = y.sample(k), x.push(S.value), k += hu;
    p = void 0, c = x, d = k - hu, f = "linear";
  }
  const g = Jj(e.owner.current, t, c, {
    ...o,
    duration: d,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: f,
    times: p
  });
  o.syncStart && (g.startTime = ot.isProcessing ? ot.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const h = () => g.cancel(), b = () => {
    Ee.update(h), s(), u();
  };
  return g.onfinish = () => {
    e.set(ez(c, o)), r && r(), b();
  }, {
    then(y, S) {
      return l.then(y, S);
    },
    attachTimeline(y) {
      return g.timeline = y, g.onfinish = null, He;
    },
    get time() {
      return Sr(g.currentTime || 0);
    },
    set time(y) {
      g.currentTime = io(y);
    },
    get speed() {
      return g.playbackRate;
    },
    set speed(y) {
      g.playbackRate = y;
    },
    get duration() {
      return Sr(d);
    },
    play: () => {
      a || (g.play(), Tr(h));
    },
    pause: () => g.pause(),
    stop: () => {
      if (a = !0, g.playState === "idle")
        return;
      const { currentTime: y } = g;
      if (y) {
        const S = Bc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(S.sample(y - hu).value, S.sample(y).value, hu);
      }
      b();
    },
    complete: () => g.finish(),
    cancel: b
  };
}
function Hz({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: He,
    pause: He,
    stop: He,
    then: (i) => (i(), Promise.resolve()),
    cancel: He,
    complete: He
  });
  return t ? Bc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const Uz = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Gz = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Kz = {
  type: "keyframes",
  duration: 0.8
}, Yz = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, qz = (e, { keyframes: t }) => t.length > 2 ? Kz : ti.has(e) ? e.startsWith("scale") ? Gz(t[1]) : Uz : Yz, Jh = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(uo.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), Xz = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Qz(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Kd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = Xz.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Zz = /([a-z-]*)\(.*?\)/g, em = {
  ...uo,
  getAnimatableNone: (e) => {
    const t = e.match(Zz);
    return t ? t.map(Qz).join(" ") : e;
  }
}, Jz = {
  ...lk,
  // Color props
  color: kt,
  backgroundColor: kt,
  outlineColor: kt,
  fill: kt,
  stroke: kt,
  // Border props
  borderColor: kt,
  borderTopColor: kt,
  borderRightColor: kt,
  borderBottomColor: kt,
  borderLeftColor: kt,
  filter: em,
  WebkitFilter: em
}, cg = (e) => Jz[e];
function qk(e, t) {
  let n = cg(e);
  return n !== em && (n = uo), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Xk = (e) => /^0[^.\s]+$/.test(e);
function eN(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Xk(e);
}
function tN(e, t, n, r) {
  const o = Jh(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), eN(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = qk(t, s);
    }
  return i;
}
function nN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function dg(e, t) {
  return e[t] || e.default || e;
}
const fg = (e, t, n, r = {}) => (o) => {
  const i = dg(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - io(a);
  const l = tN(t, e, n, i), u = l[0], c = l[l.length - 1], d = Jh(e, u), f = Jh(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (g) => {
      t.set(g), i.onUpdate && i.onUpdate(g);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (nN(i) || (p = {
    ...p,
    ...qz(e, p)
  }), p.duration && (p.duration = io(p.duration)), p.repeatDelay && (p.repeatDelay = io(p.repeatDelay)), !d || !f || Zj.current || i.type === !1)
    return Hz(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = Wz(t, e, p);
    if (g)
      return g;
  }
  return Bc(p);
};
function Wc(e) {
  return !!(Bt(e) && e.add);
}
const Qk = (e) => /^\-?\d*\.?\d+$/.test(e);
function pg(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hg(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return pg(this.subscriptions, t), () => hg(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const rN = (e) => !isNaN(parseFloat(e));
class oN {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "10.16.12", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: i, timestamp: a } = ot;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, Ee.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Ee.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = rN(this.current), this.owner = n.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mg());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Ee.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = t, this.timeDelta = r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      Gk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function pa(e, t) {
  return new oN(e, t);
}
const Zk = (e) => (t) => t.test(e), iN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Jk = [ni, ne, tr, jr, pj, fj, iN], Ha = (e) => Jk.find(Zk(e)), aN = [...Jk, kt, uo], sN = (e) => aN.find(Zk(e));
function lN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pa(n));
}
function uN(e, t) {
  const n = qd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = Tj(i[a]);
    lN(e, a, s);
  }
}
function cN(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Qk(c) || Xk(c)) ? c = parseFloat(c) : !sN(c) && uo.test(u) && (c = qk(l, u)), e.addValue(l, pa(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function dN(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function fN(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = dN(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function pN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function eP(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && pN(c, d))
      continue;
    const g = {
      delay: n,
      elapsed: 0,
      ...dg(i || {}, d)
    };
    let h = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const y = e.getProps()[tk];
      y && (h = !1, g.elapsed = window.HandoffAppearAnimations(y, d, f, Ee), g.syncStart = !0);
    }
    let b = h && p === f.get();
    if (g.type === "spring" && (f.getVelocity() || g.velocity) && (b = !1), f.animation && (b = !1), b)
      continue;
    f.start(fg(d, f, p, e.shouldReduceMotion && ti.has(d) ? { type: !1 } : g));
    const m = f.animation;
    Wc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && uN(e, a);
  }), u;
}
function tm(e, t, n = {}) {
  const r = qd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(eP(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return hN(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function hN(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(mN).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(tm(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function mN(e, t) {
  return e.sortNodePosition(t);
}
function vN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => tm(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = tm(e, t, n);
  else {
    const o = typeof t == "function" ? qd(e, t, n.custom) : t;
    r = Promise.all(eP(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const gN = [...Xv].reverse(), yN = Xv.length;
function bN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => vN(e, n, r)));
}
function SN(e) {
  let t = bN(e);
  const n = wN();
  let r = !0;
  const o = (l, u) => {
    const c = qd(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...p } = c;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let g = {}, h = 1 / 0;
    for (let m = 0; m < yN; m++) {
      const y = gN[m], S = n[y], x = c[y] !== void 0 ? c[y] : d[y], k = tl(x), P = y === u ? S.isActive : null;
      P === !1 && (h = m);
      let _ = x === d[y] && x !== c[y] && k;
      if (_ && r && e.manuallyAnimateOnMount && (_ = !1), S.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !S.prevProp || // Or if the prop doesn't define an animation
      Ud(x) || typeof x == "boolean")
        continue;
      const T = xN(S.prevProp, x);
      let M = T || // If we're making this variant active, we want to always make it active
      y === u && S.isActive && !_ && k || // If we removed a higher-priority variant (i is in reverse order)
      m > h && k;
      const I = Array.isArray(x) ? x : [x];
      let D = I.reduce(o, {});
      P === !1 && (D = {});
      const { prevResolvedValues: G = {} } = S, H = {
        ...G,
        ...D
      }, L = (W) => {
        M = !0, p.delete(W), S.needsAnimating[W] = !0;
      };
      for (const W in H) {
        const K = D[W], $ = G[W];
        g.hasOwnProperty(W) || (K !== $ ? zc(K) && zc($) ? !Ck(K, $) || T ? L(W) : S.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : S.protectedKeys[W] = !0);
      }
      S.prevProp = x, S.prevResolvedValues = D, S.isActive && (g = { ...g, ...D }), r && e.blockInitialAnimation && (M = !1), M && !_ && f.push(...I.map((W) => ({
        animation: W,
        options: { type: y, ...l }
      })));
    }
    if (p.size) {
      const m = {};
      p.forEach((y) => {
        const S = e.getBaseTarget(y);
        S !== void 0 && (m[y] = S);
      }), f.push({ animation: m });
    }
    let b = !!f.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (b = !1), r = !1, b ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var g;
      return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
    }), n[l].isActive = u;
    const f = a(c, l);
    for (const p in n)
      n[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => n
  };
}
function xN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ck(t, e) : !1;
}
function wo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function wN() {
  return {
    animate: wo(!0),
    whileInView: wo(),
    whileHover: wo(),
    whileTap: wo(),
    whileDrag: wo(),
    whileFocus: wo(),
    exit: wo()
  };
}
class CN extends vo {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = SN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ud(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let kN = 0;
class PN extends vo {
  constructor() {
    super(...arguments), this.id = kN++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const _N = {
  animation: {
    Feature: CN
  },
  exit: {
    Feature: PN
  }
}, Gb = (e, t) => Math.abs(e - t);
function TN(e, t) {
  const n = Gb(e.x, t.x), r = Gb(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class tP {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = wp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = TN(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: g } = ot;
      this.history.push({ ...p, timestamp: g });
      const { onStart: h, onMove: b } = this.handlers;
      d || (h && h(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = xp(d, this.transformPagePoint), Ee.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, g = wp(c.type === "pointercancel" ? this.lastMoveEventInfo : xp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, g), p && p(c, g);
    }, !yk(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Yd(t), a = xp(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, wp(a, this.history)), this.removeListeners = oo(br(this.contextWindow, "pointermove", this.handlePointerMove), br(this.contextWindow, "pointerup", this.handlePointerUp), br(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tr(this.updatePoint);
  }
}
function xp(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Kb(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function wp({ point: e }, t) {
  return {
    point: e,
    delta: Kb(e, nP(t)),
    offset: Kb(e, EN(t)),
    velocity: ON(t, 0.1)
  };
}
function EN(e) {
  return e[0];
}
function nP(e) {
  return e[e.length - 1];
}
function ON(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = nP(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > io(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = Sr(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Jt(e) {
  return e.max - e.min;
}
function nm(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Yb(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ze(t.min, t.max, e.origin), e.scale = Jt(n) / Jt(t), (nm(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ze(n.min, n.max, e.origin) - e.originPoint, (nm(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ps(e, t, n, r) {
  Yb(e.x, t.x, n.x, r ? r.originX : void 0), Yb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function qb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Jt(t);
}
function MN(e, t, n) {
  qb(e.x, t.x, n.x), qb(e.y, t.y, n.y);
}
function Xb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Jt(t);
}
function _s(e, t, n) {
  Xb(e.x, t.x, n.x), Xb(e.y, t.y, n.y);
}
function IN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ze(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ze(n, e, r.max) : Math.min(e, n)), e;
}
function Qb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function RN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Qb(e.x, n, o),
    y: Qb(e.y, t, r)
  };
}
function Zb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function $N(e, t) {
  return {
    x: Zb(e.x, t.x),
    y: Zb(e.y, t.y)
  };
}
function AN(e, t) {
  let n = 0.5;
  const r = Jt(e), o = Jt(t);
  return o > r ? n = rl(t.min, t.max - r, e.min) : r > o && (n = rl(e.min, e.max - o, t.min)), lo(0, 1, n);
}
function DN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const rm = 0.35;
function FN(e = rm) {
  return e === !1 ? e = 0 : e === !0 && (e = rm), {
    x: Jb(e, "left", "right"),
    y: Jb(e, "top", "bottom")
  };
}
function Jb(e, t, n) {
  return {
    min: e1(e, t),
    max: e1(e, n)
  };
}
function e1(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const t1 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Fi = () => ({
  x: t1(),
  y: t1()
}), n1 = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: n1(),
  y: n1()
});
function Hn(e) {
  return [e("x"), e("y")];
}
function rP({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function LN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function jN(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Cp(e) {
  return e === void 0 || e === 1;
}
function om({ scale: e, scaleX: t, scaleY: n }) {
  return !Cp(e) || !Cp(t) || !Cp(n);
}
function _o(e) {
  return om(e) || oP(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function oP(e) {
  return r1(e.x) || r1(e.y);
}
function r1(e) {
  return e && e !== "0%";
}
function Hc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function o1(e, t, n, r, o) {
  return o !== void 0 && (e = Hc(e, o, r)), Hc(e, n, r) + t;
}
function im(e, t = 0, n = 1, r, o) {
  e.min = o1(e.min, t, n, r, o), e.max = o1(e.max, t, n, r, o);
}
function iP(e, { x: t, y: n }) {
  im(e.x, t.translate, t.scale, t.originPoint), im(e.y, n.translate, n.scale, n.originPoint);
}
function zN(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Li(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, iP(e, a)), r && _o(i.latestValues) && Li(e, i.latestValues));
  }
  t.x = i1(t.x), t.y = i1(t.y);
}
function i1(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Vr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function a1(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = ze(e.min, e.max, i);
  im(e, t[n], t[r], a, t.scale);
}
const NN = ["x", "scaleX", "originX"], VN = ["y", "scaleY", "originY"];
function Li(e, t) {
  a1(e.x, t, NN), a1(e.y, t, VN);
}
function aP(e, t) {
  return rP(jN(e.getBoundingClientRect(), t));
}
function BN(e, t, n) {
  const r = aP(e, n), { scroll: o } = t;
  return o && (Vr(r.x, o.offset.x), Vr(r.y, o.offset.y)), r;
}
const sP = ({ current: e }) => e ? e.ownerDocument.defaultView : null, WN = /* @__PURE__ */ new WeakMap();
class HN {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Yd(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Sk(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Hn((g) => {
        let h = this.getAxisMotionValue(g).get() || 0;
        if (tr.test(h)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const m = b.layout.layoutBox[g];
            m && (h = Jt(m) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[g] = h;
      }), f && Ee.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: g } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = UN(g), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new tP(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: sP(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Ee.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !mu(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = IN(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Ai(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = RN(o.layoutBox, n) : this.constraints = !1, this.elastic = FN(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Hn((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = DN(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ai(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = BN(r, o.root, this.visualElement.getTransformPagePoint());
    let a = $N(o.layout.layoutBox, i);
    if (n) {
      const s = n(LN(a));
      this.hasMutatedConstraints = !!s, s && (a = rP(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Hn((c) => {
      if (!mu(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, g = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(c, g);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(fg(t, r, 0, n));
  }
  stopAnimation() {
    Hn((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(), r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Hn((n) => {
      const { drag: r } = this.getProps();
      if (!mu(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - ze(a, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Ai(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Hn((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = AN({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Hn((a) => {
      if (!mu(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(ze(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    WN.set(this.visualElement, this);
    const t = this.visualElement.current, n = br(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ai(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = vr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Hn((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = rm, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function mu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function UN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class GN extends vo {
  constructor(t) {
    super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new HN(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const s1 = (e) => (t, n) => {
  e && Ee.update(() => e(t, n));
};
class KN extends vo {
  constructor() {
    super(...arguments), this.removePointerDownListener = He;
  }
  onPointerDown(t) {
    this.session = new tP(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: sP(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: s1(t),
      onStart: s1(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Ee.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = br(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function lP() {
  const e = v.useContext(bl);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = v.useId();
  return v.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function YN() {
  return qN(v.useContext(bl));
}
function qN(e) {
  return e === null ? !0 : e.isPresent;
}
const Ju = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function l1(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ua = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = l1(e, t.target.x), r = l1(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, XN = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = uo.parse(e);
    if (o.length > 5)
      return r;
    const i = uo.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = ze(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class QN extends re.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    ij(ZN), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Ju.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Ee.postRender(() => {
      const s = a.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), queueMicrotask(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function uP(e) {
  const [t, n] = lP(), r = v.useContext(Zv);
  return re.createElement(QN, { ...e, layoutGroup: r, switchLayoutGroup: v.useContext(rk), isPresent: t, safeToRemove: n });
}
const ZN = {
  borderRadius: {
    ...Ua,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ua,
  borderTopRightRadius: Ua,
  borderBottomLeftRadius: Ua,
  borderBottomRightRadius: Ua,
  boxShadow: XN
}, cP = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], JN = cP.length, u1 = (e) => typeof e == "string" ? parseFloat(e) : e, c1 = (e) => typeof e == "number" || ne.test(e);
function eV(e, t, n, r, o, i) {
  o ? (e.opacity = ze(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    tV(r)
  ), e.opacityExit = ze(t.opacity !== void 0 ? t.opacity : 1, 0, nV(r))) : i && (e.opacity = ze(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < JN; a++) {
    const s = `border${cP[a]}Radius`;
    let l = d1(t, s), u = d1(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || c1(l) === c1(u) ? (e[s] = Math.max(ze(u1(l), u1(u), r), 0), (tr.test(u) || tr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ze(t.rotate || 0, n.rotate || 0, r));
}
function d1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const tV = dP(0, 0.5, sg), nV = dP(0.5, 0.95, He);
function dP(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(rl(e, t, r));
}
function f1(e, t) {
  e.min = t.min, e.max = t.max;
}
function un(e, t) {
  f1(e.x, t.x), f1(e.y, t.y);
}
function p1(e, t, n, r, o) {
  return e -= t, e = Hc(e, 1 / n, r), o !== void 0 && (e = Hc(e, 1 / o, r)), e;
}
function rV(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (tr.test(t) && (t = parseFloat(t), t = ze(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = ze(i.min, i.max, r);
  e === i && (s -= t), e.min = p1(e.min, t, n, s, o), e.max = p1(e.max, t, n, s, o);
}
function h1(e, t, [n, r, o], i, a) {
  rV(e, t[n], t[r], t[o], t.scale, i, a);
}
const oV = ["x", "scaleX", "originX"], iV = ["y", "scaleY", "originY"];
function m1(e, t, n, r) {
  h1(e.x, t, oV, n ? n.x : void 0, r ? r.x : void 0), h1(e.y, t, iV, n ? n.y : void 0, r ? r.y : void 0);
}
function v1(e) {
  return e.translate === 0 && e.scale === 1;
}
function fP(e) {
  return v1(e.x) && v1(e.y);
}
function aV(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function pP(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function g1(e) {
  return Jt(e.x) / Jt(e.y);
}
class sV {
  constructor() {
    this.members = [];
  }
  add(t) {
    pg(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (hg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function y1(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const lV = (e, t) => e.depth - t.depth;
class uV {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    pg(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    hg(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(lV), this.isDirty = !1, this.children.forEach(t);
  }
}
function cV(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Tr(r), e(i - t));
  };
  return Ee.read(r, !0), () => Tr(r);
}
function dV(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function fV(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function pV(e, t, n) {
  const r = Bt(e) ? e : pa(e);
  return r.start(fg("", r, t, n)), r.animation;
}
const b1 = ["", "X", "Y", "Z"], hV = { visibility: "hidden" }, S1 = 1e3;
let mV = 0;
const To = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function hP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = mV++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, To.totalNodes = To.resolvedTargetDeltas = To.recalculatedProjection = 0, this.nodes.forEach(yV), this.nodes.forEach(CV), this.nodes.forEach(kV), this.nodes.forEach(bV), dV(To);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new uV());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new mg()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = fV(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = cV(f, 250), Ju.hasAnimatedSinceResize && (Ju.hasAnimatedSinceResize = !1, this.nodes.forEach(w1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const h = this.options.transition || c.getDefaultTransition() || OV, { onLayoutAnimationStart: b, onLayoutAnimationComplete: m } = c.getProps(), y = !this.targetLayout || !pP(this.targetLayout, g) || p, S = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, S);
          const x = {
            ...dg(h, "layout"),
            onPlay: b,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || w1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Tr(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(PV), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(x1);
        return;
      }
      this.isUpdating || this.nodes.forEach(xV), this.isUpdating = !1, this.nodes.forEach(wV), this.nodes.forEach(vV), this.nodes.forEach(gV), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = lo(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, pp.update.process(ot), pp.preRender.process(ot), pp.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(SV), this.sharedNodes.forEach(_V);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ee.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ee.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Xe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !fP(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || _o(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), MV(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return Xe();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (Vr(s.x, l.offset.x), Vr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Xe();
      un(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            un(s, a);
            const { scroll: f } = this.root;
            f && (Vr(s.x, -f.offset.x), Vr(s.y, -f.offset.y));
          }
          Vr(s.x, c.offset.x), Vr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Xe();
      un(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Li(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), _o(c.latestValues) && Li(l, c.latestValues);
      }
      return _o(this.latestValues) && Li(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Xe();
      un(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !_o(u.latestValues))
          continue;
        om(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        un(c, d), m1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return _o(this.latestValues) && m1(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ot.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(a || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = ot.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), _s(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), MN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : un(this.target, this.layout.layoutBox), iP(this.target, this.targetDelta)) : un(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), _s(this.relativeTargetOrigin, this.target, p.target), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          To.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || om(this.parent.latestValues) || oP(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === ot.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      un(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      zN(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = Fi(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Fi(), this.projectionDeltaWithTransform = Fi());
      const h = this.projectionTransform;
      Ps(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = y1(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), To.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), a) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Fi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Xe(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, h = p !== g, b = this.getStack(), m = !b || b.members.length <= 1, y = !!(h && !m && this.options.crossfade === !0 && !this.path.some(EV));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (x) => {
        const k = x / 1e3;
        C1(d.x, a.x, k), C1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_s(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), TV(this.relativeTarget, this.relativeTargetOrigin, f, k), S && aV(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = Xe()), un(S, this.relativeTarget)), h && (this.animationValues = c, eV(c, u, this.latestValues, k, y, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ee.update(() => {
        Ju.hasAnimatedSinceResize = !0, this.currentAnimation = pV(0, S1, {
          ...a,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(S1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && mP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        un(s, l), Li(s, c), Ps(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new sV()), this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: l } = a;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const u = {};
      for (let c = 0; c < b1.length; c++) {
        const d = "rotate" + b1[c];
        l[d] && (u[d] = l[d], a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u)
        a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return hV;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Zu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Zu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !_o(this.latestValues) && (h.transform = c ? c({}, "") : "none", this.hasProjected = !1), h;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = y1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const h in Lc) {
        if (f[h] === void 0)
          continue;
        const { correct: b, applyTo: m } = Lc[h], y = u.transform === "none" ? f[h] : b(f[h], d);
        if (m) {
          const S = m.length;
          for (let x = 0; x < S; x++)
            u[m[x]] = y;
        } else
          u[h] = y;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Zu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(x1), this.root.sharedNodes.clear();
    }
  };
}
function vV(e) {
  e.updateLayout();
}
function gV(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : mP(i, n.layoutBox, r) && Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Fi();
    Ps(s, r, n.layoutBox);
    const l = Fi();
    a ? Ps(l, e.applyTransform(o, !0), n.measuredBox) : Ps(l, r, n.layoutBox);
    const u = !fP(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = Xe();
          _s(g, n.layoutBox, f.layoutBox);
          const h = Xe();
          _s(h, r, p.layoutBox), pP(g, h) || (c = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = g, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function yV(e) {
  To.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function bV(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function SV(e) {
  e.clearSnapshot();
}
function x1(e) {
  e.clearMeasurements();
}
function xV(e) {
  e.isLayoutDirty = !1;
}
function wV(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function w1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function CV(e) {
  e.resolveTargetDelta();
}
function kV(e) {
  e.calcProjection();
}
function PV(e) {
  e.resetRotation();
}
function _V(e) {
  e.removeLeadSnapshot();
}
function C1(e, t, n) {
  e.translate = ze(t.translate, 0, n), e.scale = ze(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function k1(e, t, n, r) {
  e.min = ze(t.min, n.min, r), e.max = ze(t.max, n.max, r);
}
function TV(e, t, n, r) {
  k1(e.x, t.x, n.x, r), k1(e.y, t.y, n.y, r);
}
function EV(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const OV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, P1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), _1 = P1("applewebkit/") && !P1("chrome/") ? Math.round : He;
function T1(e) {
  e.min = _1(e.min), e.max = _1(e.max);
}
function MV(e) {
  T1(e.x), T1(e.y);
}
function mP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !nm(g1(t), g1(n), 0.2);
}
const IV = hP({
  attachResizeListener: (e, t) => vr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), kp = {
  current: void 0
}, vP = hP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!kp.current) {
      const e = new IV({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), kp.current = e;
    }
    return kp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), RV = {
  pan: {
    Feature: KN
  },
  drag: {
    Feature: GN,
    ProjectionNode: vP,
    MeasureLayout: uP
  }
}, $V = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function AV(e) {
  const t = $V.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function am(e, t, n = 1) {
  const [r, o] = AV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Qk(a) ? parseFloat(a) : a;
  } else
    return qh(o) ? am(o, t, n + 1) : o;
}
function DV(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!qh(i))
      return;
    const a = am(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!qh(i))
      continue;
    const a = am(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const FV = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), gP = (e) => FV.has(e), LV = (e) => Object.keys(e).some(gP), E1 = (e) => e === ni || e === ne, O1 = (e, t) => parseFloat(e.split(", ")[t]), M1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return O1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? O1(i[1], e) : 0;
  }
}, jV = /* @__PURE__ */ new Set(["x", "y", "z"]), zV = Sl.filter((e) => !jV.has(e));
function NV(e) {
  const t = [];
  return zV.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const ha = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: M1(4, 13),
  y: M1(5, 14)
};
ha.translateX = ha.x;
ha.translateY = ha.y;
const VV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = ha[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ha[u](l, i);
  }), e;
}, BV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(gP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = Ha(c);
    const f = t[l];
    let p;
    if (zc(f)) {
      const g = f.length, h = f[0] === null ? 1 : 0;
      c = f[h], d = Ha(c);
      for (let b = h; b < g && f[b] !== null; b++)
        p ? ag(Ha(f[b]) === p) : p = Ha(f[b]);
    } else
      p = Ha(f);
    if (d !== p)
      if (E1(d) && E1(p)) {
        const g = u.get();
        typeof g == "string" && u.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = NV(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = VV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Hd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function WV(e, t, n, r) {
  return LV(t) ? BV(e, t, n, r) : { target: t, transitionEnd: r };
}
const HV = (e, t, n, r) => {
  const o = DV(e, t, r);
  return t = o.target, r = o.transitionEnd, WV(e, t, n, r);
}, sm = { current: null }, yP = { current: !1 };
function UV() {
  if (yP.current = !0, !!Hd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => sm.current = e.matches;
      e.addListener(t), t();
    } else
      sm.current = !1;
}
function GV(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Bt(i))
      e.addValue(o, i), Wc(r) && r.add(o);
    else if (Bt(a))
      e.addValue(o, pa(i, { owner: e })), Wc(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, pa(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const I1 = /* @__PURE__ */ new WeakMap(), bP = Object.keys(nl), KV = bP.length, R1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], YV = Qv.length;
class qV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ee.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Gd(n), this.isVariantNode = nk(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), Wc(u) && u.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    this.current = t, I1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), yP.current || UV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : sm.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    I1.delete(this.current), this.projection && this.projection.unmount(), Tr(this.notifyUpdate), Tr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = ti.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Ee.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let a, s;
    for (let l = 0; l < KV; l++) {
      const u = bP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = nl[u];
      f && (a = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Ai(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Xe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < R1.length; r++) {
      const o = R1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = GV(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < YV; r++) {
      const o = Qv[r], i = this.props[o];
      (tl(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = pa(n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = ig(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mg()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class SP extends qV {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, i) {
    let a = fN(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      cN(this, r, a);
      const s = HV(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function XV(e) {
  return window.getComputedStyle(e);
}
class QV extends SP {
  readValueFromInstance(t, n) {
    if (ti.has(n)) {
      const r = cg(n);
      return r && r.default || 0;
    } else {
      const r = XV(t), o = (ak(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return aP(t, n);
  }
  build(t, n, r, o) {
    eg(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return og(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    fk(t, n, r, o);
  }
}
class ZV extends SP {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ti.has(n)) {
      const r = cg(n);
      return r && r.default || 0;
    }
    return n = pk.has(n) ? n : qv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return mk(t, n);
  }
  build(t, n, r, o) {
    ng(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    hk(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = rg(t.tagName), super.mount(t);
  }
}
const JV = (e, t) => Jv(e) ? new ZV(t, { enableHardwareAcceleration: !1 }) : new QV(t, { enableHardwareAcceleration: !0 }), eB = {
  layout: {
    ProjectionNode: vP,
    MeasureLayout: uP
  }
}, tB = {
  ..._N,
  ...Yj,
  ...RV,
  ...eB
}, ir = /* @__PURE__ */ rj((e, t) => Dj(e, t, tB, JV));
function xP() {
  const e = v.useRef(!1);
  return Yv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function nB() {
  const e = xP(), [t, n] = v.useState(0), r = v.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [v.useCallback(() => Ee.postRender(r), [r]), t];
}
class rB extends v.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function oB({ children: e, isPresent: t }) {
  const n = v.useId(), r = v.useRef(null), o = v.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return v.useInsertionEffect(() => {
    const { width: i, height: a, top: s, left: l } = o.current;
    if (t || !r.current || !i || !a)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), v.createElement(rB, { isPresent: t, childRef: r, sizeRef: o }, v.cloneElement(e, { ref: r }));
}
const Pp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = vk(iB), l = v.useId(), u = v.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (c) => {
        s.set(c, !0);
        for (const d of s.values())
          if (!d)
            return;
        r && r();
      },
      register: (c) => (s.set(c, !1), () => s.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [n]
  );
  return v.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [n]), v.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = v.createElement(oB, { isPresent: n }, e)), v.createElement(bl.Provider, { value: u }, e);
};
function iB() {
  return /* @__PURE__ */ new Map();
}
function aB(e) {
  return v.useEffect(() => () => e(), []);
}
const Eo = (e) => e.key || "";
function sB(e, t) {
  e.forEach((n) => {
    const r = Eo(n);
    t.set(r, n);
  });
}
function lB(e) {
  const t = [];
  return v.Children.forEach(e, (n) => {
    v.isValidElement(n) && t.push(n);
  }), t;
}
const ri = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = v.useContext(Zv).forceRender || nB()[0], l = xP(), u = lB(e);
  let c = u;
  const d = v.useRef(/* @__PURE__ */ new Map()).current, f = v.useRef(c), p = v.useRef(/* @__PURE__ */ new Map()).current, g = v.useRef(!0);
  if (Yv(() => {
    g.current = !1, sB(u, p), f.current = c;
  }), aB(() => {
    g.current = !0, p.clear(), d.clear();
  }), g.current)
    return v.createElement(v.Fragment, null, c.map((y) => v.createElement(Pp, { key: Eo(y), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, y)));
  c = [...c];
  const h = f.current.map(Eo), b = u.map(Eo), m = h.length;
  for (let y = 0; y < m; y++) {
    const S = h[y];
    b.indexOf(S) === -1 && !d.has(S) && d.set(S, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((y, S) => {
    if (b.indexOf(S) !== -1)
      return;
    const x = p.get(S);
    if (!x)
      return;
    const k = h.indexOf(S);
    let P = y;
    if (!P) {
      const _ = () => {
        d.delete(S);
        const T = Array.from(p.keys()).filter((M) => !b.includes(M));
        if (T.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const I = Eo(M);
          return (
            // filter out the node exiting
            I === S || // filter out the leftover children
            T.includes(I)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), r && r();
        }
      };
      P = v.createElement(Pp, { key: Eo(x), isPresent: !1, onExitComplete: _, custom: t, presenceAffectsLayout: i, mode: a }, x), d.set(S, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((y) => {
    const S = y.key;
    return d.has(S) ? y : v.createElement(Pp, { key: Eo(y), isPresent: !0, presenceAffectsLayout: i, mode: a }, y);
  }), v.createElement(v.Fragment, null, d.size ? c : c.map((y) => v.cloneElement(y)));
};
var uB = {
  initial: (e) => {
    const { position: t } = e, n = ["top", "bottom"].includes(t) ? "y" : "x";
    let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (r = 1), {
      opacity: 0,
      [n]: r * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, wP = v.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = uB,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = v.useState(s), p = YN();
  fa(() => {
    p || r == null || r();
  }, [p]), fa(() => {
    f(s);
  }, [s]);
  const g = () => f(null), h = () => f(s), b = () => {
    p && o();
  };
  v.useEffect(() => {
    p && i && o();
  }, [p, i, o]), K3(b, d);
  const m = v.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), y = v.useMemo(() => U3(a), [a]);
  return /* @__PURE__ */ w.jsx(
    ir.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: g,
      onHoverEnd: h,
      custom: { position: a },
      style: y,
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Xn(n, { id: t, onClose: b })
        }
      )
    }
  );
});
wP.displayName = "ToastComponent";
var $1 = {
  path: /* @__PURE__ */ w.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ w.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ w.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ w.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, kn = oe((e, t) => {
  const {
    as: n,
    viewBox: r,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = ie("chakra-icon", s), d = ei("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, p = {
    ref: t,
    focusable: i,
    className: c,
    __css: f
  }, g = r ?? $1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ w.jsx(X.svg, { as: n, ...p, ...u });
  const h = a ?? $1.path;
  return /* @__PURE__ */ w.jsx(X.svg, { verticalAlign: "middle", viewBox: g, ...p, ...u, children: h });
});
kn.displayName = "Icon";
function cB(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function dB(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function A1(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var fB = gC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Xd = oe((e, t) => {
  const n = ei("Spinner", e), {
    label: r = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Cn(e), u = ie("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${fB} ${i} linear infinite`,
    ...n
  };
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && /* @__PURE__ */ w.jsx(X.span, { srOnly: !0, children: r })
    }
  );
});
Xd.displayName = "Spinner";
var [pB, vg] = Je({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [hB, gg] = Je({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), CP = {
  info: { icon: dB, colorScheme: "blue" },
  warning: { icon: A1, colorScheme: "orange" },
  success: { icon: cB, colorScheme: "green" },
  error: { icon: A1, colorScheme: "red" },
  loading: { icon: Xd, colorScheme: "blue" }
};
function mB(e) {
  return CP[e].colorScheme;
}
function vB(e) {
  return CP[e].icon;
}
var kP = oe(
  function(t, n) {
    const r = gg(), { status: o } = vg(), i = {
      display: "inline",
      ...r.description
    };
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: ie("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
kP.displayName = "AlertDescription";
function PP(e) {
  const { status: t } = vg(), n = vB(t), r = gg(), o = t === "loading" ? r.spinner : r.icon;
  return /* @__PURE__ */ w.jsx(
    X.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ie("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ w.jsx(n, { h: "100%", w: "100%" })
    }
  );
}
PP.displayName = "AlertIcon";
var _P = oe(
  function(t, n) {
    const r = gg(), { status: o } = vg();
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: ie("chakra-alert__title", t.className),
        __css: r.title
      }
    );
  }
);
_P.displayName = "AlertTitle";
var TP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Cn(t), s = (r = t.colorScheme) != null ? r : mB(o), l = Ct("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ w.jsx(pB, { value: { status: o }, children: /* @__PURE__ */ w.jsx(hB, { value: l, children: /* @__PURE__ */ w.jsx(
    X.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: n,
      ...a,
      className: ie("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
TP.displayName = "Alert";
function gB(e) {
  return /* @__PURE__ */ w.jsx(kn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Qd = oe(
  function(t, n) {
    const r = ei("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Cn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: n,
        disabled: i,
        __css: {
          ...l,
          ...r,
          ...a
        },
        ...s,
        children: o || /* @__PURE__ */ w.jsx(gB, { width: "1em", height: "1em" })
      }
    );
  }
);
Qd.displayName = "CloseButton";
var yB = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Ts = bB(yB);
function bB(e) {
  let t = e;
  const n = /* @__PURE__ */ new Set(), r = (o) => {
    t = o(t), n.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (n.add(o), () => {
      r(() => e), n.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      r((a) => ({
        ...a,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: a[i].filter((s) => s.id != o)
      }));
    },
    notify: (o, i) => {
      const a = SB(o, i), { position: s, id: l } = a;
      return r((u) => {
        var c, d;
        const p = s.includes("top") ? [a, ...(c = u[s]) != null ? c : []] : [...(d = u[s]) != null ? d : [], a];
        return {
          ...u,
          [s]: p
        };
      }), l;
    },
    update: (o, i) => {
      o && r((a) => {
        const s = { ...a }, { position: l, index: u } = Eb(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: wB(i)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, u) => (l[u] = i[u].map((c) => ({
          ...c,
          requestClose: !0
        })), l),
        { ...i }
      ));
    },
    close: (o) => {
      r((i) => {
        const a = ZC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Eb(Ts.getState(), o).position
  };
}
var D1 = 0;
function SB(e, t = {}) {
  var n, r;
  D1 += 1;
  const o = (n = t.id) != null ? n : D1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Ts.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var xB = (e) => {
  const {
    status: t,
    variant: n = "solid",
    id: r,
    title: o,
    isClosable: i,
    onClose: a,
    description: s,
    colorScheme: l,
    icon: u
  } = e, c = r ? {
    root: `toast-${r}`,
    title: `toast-${r}-title`,
    description: `toast-${r}-description`
  } : void 0;
  return /* @__PURE__ */ w.jsxs(
    TP,
    {
      addRole: !1,
      status: t,
      variant: n,
      id: c == null ? void 0 : c.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ w.jsx(PP, { children: u }),
        /* @__PURE__ */ w.jsxs(X.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ w.jsx(_P, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ w.jsx(kP, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ w.jsx(
          Qd,
          {
            size: "sm",
            onClick: a,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function wB(e = {}) {
  const { render: t, toastComponent: n = xB } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ w.jsx(n, { ...o, ...e });
}
var [CB, $Y] = Je({
  name: "ToastOptionsContext",
  strict: !1
}), kB = (e) => {
  const t = v.useSyncExternalStore(
    Ts.subscribe,
    Ts.getState,
    Ts.getState
  ), {
    motionVariants: n,
    component: r = wP,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ w.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: G3(s),
        children: /* @__PURE__ */ w.jsx(ri, { initial: !1, children: l.map((u) => /* @__PURE__ */ w.jsx(
          r,
          {
            motionVariants: n,
            ...u
          },
          u.id
        )) })
      },
      s
    );
  });
  return /* @__PURE__ */ w.jsx(vl, { ...o, children: a });
}, PB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ w.jsxs(W3, { theme: r, ...i, children: [
    /* @__PURE__ */ w.jsx(CB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ w.jsx(kB, { ...o })
  ] });
}, _B = PB(HC), TB = Object.defineProperty, EB = (e, t, n) => t in e ? TB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (EB(e, typeof t != "symbol" ? t + "" : t, n), n);
function F1(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (r & Node.DOCUMENT_POSITION_DISCONNECTED || r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var OB = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function L1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function j1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var lm = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Uc = (e) => e, MB = class {
  constructor() {
    Be(this, "descendants", /* @__PURE__ */ new Map()), Be(this, "register", (e) => {
      if (e != null)
        return OB(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Be(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = F1(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Be(this, "destroy", () => {
      this.descendants.clear();
    }), Be(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const n = e.indexOf(t.node);
        t.index = n, t.node.dataset.index = t.index.toString();
      });
    }), Be(this, "count", () => this.descendants.size), Be(this, "enabledCount", () => this.enabledValues().length), Be(this, "values", () => Array.from(this.descendants.values()).sort((t, n) => t.index - n.index)), Be(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Be(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Be(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Be(this, "first", () => this.item(0)), Be(this, "firstEnabled", () => this.enabledItem(0)), Be(this, "last", () => this.item(this.descendants.size - 1)), Be(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Be(this, "indexOf", (e) => {
      var t, n;
      return e && (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? n : -1;
    }), Be(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Be(this, "next", (e, t = !0) => {
      const n = L1(e, this.count(), t);
      return this.item(n);
    }), Be(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = L1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Be(this, "prev", (e, t = !0) => {
      const n = j1(e, this.count() - 1, t);
      return this.item(n);
    }), Be(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = j1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Be(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = F1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function IB(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function at(...e) {
  return (t) => {
    e.forEach((n) => {
      IB(n, t);
    });
  };
}
function RB(...e) {
  return v.useMemo(() => at(...e), e);
}
function $B() {
  const e = v.useRef(new MB());
  return lm(() => () => e.current.destroy()), e.current;
}
var [AB, EP] = Je({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function DB(e) {
  const t = EP(), [n, r] = v.useState(-1), o = v.useRef(null);
  lm(() => () => {
    o.current && t.unregister(o.current);
  }, []), lm(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Uc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function OP() {
  return [
    Uc(AB),
    () => Uc(EP()),
    () => $B(),
    (o) => DB(o)
  ];
}
var [FB, Zd] = Je({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [LB, yg] = Je({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  jB,
  AY,
  zB,
  NB
] = OP(), MP = oe(
  function(t, n) {
    const { getButtonProps: r } = yg(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...Zd().button
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        ...o,
        className: ie("chakra-accordion__button", t.className),
        __css: a
      }
    );
  }
);
MP.displayName = "AccordionButton";
function IP(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = ro(r), a = ro(o), [s, l] = v.useState(n), u = t !== void 0, c = u ? t : s, d = ro(
    (f) => {
      const g = typeof f == "function" ? f(c) : f;
      a(c, g) && (u || l(g), i(g));
    },
    [u, i, c, a]
  );
  return [c, d];
}
function VB(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: i,
    ...a
  } = e;
  HB(e), UB(e);
  const s = zB(), [l, u] = v.useState(-1);
  v.useEffect(() => () => {
    u(-1);
  }, []);
  const [c, d] = IP({
    value: r,
    defaultValue() {
      return o ? n ?? [] : n ?? -1;
    },
    onChange: t
  });
  return {
    index: c,
    setIndex: d,
    htmlProps: a,
    getAccordionItemProps: (p) => {
      let g = !1;
      return p !== null && (g = Array.isArray(c) ? c.includes(p) : c === p), { isOpen: g, onChange: (b) => {
        if (p !== null)
          if (o && Array.isArray(c)) {
            const m = b ? c.concat(p) : c.filter((y) => y !== p);
            d(m);
          } else
            b ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [BB, bg] = Je({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function WB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = bg(), s = v.useRef(null), l = v.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  GB(e);
  const { register: f, index: p, descendants: g } = NB({
    disabled: t && !n
  }), { isOpen: h, onChange: b } = i(
    p === -1 ? null : p
  );
  KB({ isOpen: h, isDisabled: t });
  const m = () => {
    b == null || b(!0);
  }, y = () => {
    b == null || b(!1);
  }, S = v.useCallback(() => {
    b == null || b(!h), a(p);
  }, [p, a, h, b]), x = v.useCallback(
    (T) => {
      const I = {
        ArrowDown: () => {
          const D = g.nextEnabled(p);
          D == null || D.node.focus();
        },
        ArrowUp: () => {
          const D = g.prevEnabled(p);
          D == null || D.node.focus();
        },
        Home: () => {
          const D = g.firstEnabled();
          D == null || D.node.focus();
        },
        End: () => {
          const D = g.lastEnabled();
          D == null || D.node.focus();
        }
      }[T.key];
      I && (T.preventDefault(), I(T));
    },
    [g, p]
  ), k = v.useCallback(() => {
    a(p);
  }, [a, p]), P = v.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        type: "button",
        ref: at(f, s, I),
        id: c,
        disabled: !!t,
        "aria-expanded": !!h,
        "aria-controls": d,
        onClick: Le(M.onClick, S),
        onFocus: Le(M.onFocus, k),
        onKeyDown: Le(M.onKeyDown, x)
      };
    },
    [
      c,
      t,
      h,
      S,
      k,
      x,
      d,
      f
    ]
  ), _ = v.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        ref: I,
        role: "region",
        id: d,
        "aria-labelledby": c,
        hidden: !h
      };
    },
    [c, h, d]
  );
  return {
    isOpen: h,
    isDisabled: t,
    isFocusable: n,
    onOpen: m,
    onClose: y,
    getButtonProps: P,
    getPanelProps: _,
    htmlProps: o
  };
}
function HB(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  gl({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function UB(e) {
  gl({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function GB(e) {
  gl({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function KB(e) {
  gl({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function RP(e) {
  const { isOpen: t, isDisabled: n } = yg(), { reduceMotion: r } = bg(), o = ie("chakra-accordion__icon", e.className), i = Zd(), a = {
    opacity: n ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: r ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...i.icon
  };
  return /* @__PURE__ */ w.jsx(
    kn,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: o,
      __css: a,
      ...e,
      children: /* @__PURE__ */ w.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
RP.displayName = "AccordionIcon";
var $P = oe(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = WB(t), l = {
      ...Zd().container,
      overflowAnchor: "none"
    }, u = v.useMemo(() => a, [a]);
    return /* @__PURE__ */ w.jsx(LB, { value: u, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        ...i,
        className: ie("chakra-accordion__item", o),
        __css: l,
        children: typeof r == "function" ? r({
          isExpanded: !!a.isOpen,
          isDisabled: !!a.isDisabled
        }) : r
      }
    ) });
  }
);
$P.displayName = "AccordionItem";
var Lo = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Ga = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function um(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Ga.slideRight;
    case "left":
      return Ga.slideLeft;
    case "bottom":
      return Ga.slideDown;
    case "top":
      return Ga.slideUp;
    default:
      return Ga.slideRight;
  }
}
var Wo = {
  enter: {
    duration: 0.2,
    ease: Lo.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Lo.easeIn
  }
}, Dn = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, YB = (e) => e != null && parseInt(e.toString(), 10) > 0, z1 = {
  exit: {
    height: { duration: 0.2, ease: Lo.ease },
    opacity: { duration: 0.3, ease: Lo.ease }
  },
  enter: {
    height: { duration: 0.3, ease: Lo.ease },
    opacity: { duration: 0.4, ease: Lo.ease }
  }
}, qB = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: YB(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(z1.exit, o)
    };
  },
  enter: ({
    animateOpacity: e,
    endingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: 1 },
      height: t,
      transitionEnd: r == null ? void 0 : r.enter,
      transition: (i = n == null ? void 0 : n.enter) != null ? i : Dn.enter(z1.enter, o)
    };
  }
}, AP = v.forwardRef(
  (e, t) => {
    const {
      in: n,
      unmountOnExit: r,
      animateOpacity: o = !0,
      startingHeight: i = 0,
      endingHeight: a = "auto",
      style: s,
      className: l,
      transition: u,
      transitionEnd: c,
      ...d
    } = e, [f, p] = v.useState(!1);
    v.useEffect(() => {
      const y = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(y);
    }, []), gl({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const g = parseFloat(i.toString()) > 0, h = {
      startingHeight: i,
      endingHeight: a,
      animateOpacity: o,
      transition: f ? u : { enter: { duration: 0 } },
      transitionEnd: {
        enter: c == null ? void 0 : c.enter,
        exit: r ? c == null ? void 0 : c.exit : {
          ...c == null ? void 0 : c.exit,
          display: g ? "block" : "none"
        }
      }
    }, b = r ? n : !0, m = n || r ? "enter" : "exit";
    return /* @__PURE__ */ w.jsx(ri, { initial: !1, custom: h, children: b && /* @__PURE__ */ w.jsx(
      ir.div,
      {
        ref: t,
        ...d,
        className: ie("chakra-collapse", l),
        style: {
          overflow: "hidden",
          display: "block",
          ...s
        },
        custom: h,
        variants: qB,
        initial: r ? "exit" : !1,
        animate: m,
        exit: "exit"
      }
    ) });
  }
);
AP.displayName = "Collapse";
var XB = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(Wo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Dn.exit(Wo.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, DP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: XB
}, QB = v.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ w.jsx(ri, { custom: f, children: d && /* @__PURE__ */ w.jsx(
    ir.div,
    {
      ref: n,
      className: ie("chakra-fade", i),
      custom: f,
      ...DP,
      animate: c,
      ...u
    }
  ) });
});
QB.displayName = "Fade";
var ZB = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(Wo.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : Dn.enter(Wo.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, FP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: ZB
}, JB = v.forwardRef(
  function(t, n) {
    const {
      unmountOnExit: r,
      in: o,
      reverse: i = !0,
      initialScale: a = 0.95,
      className: s,
      transition: l,
      transitionEnd: u,
      delay: c,
      ...d
    } = t, f = r ? o && r : !0, p = o || r ? "enter" : "exit", g = { initialScale: a, reverse: i, transition: l, transitionEnd: u, delay: c };
    return /* @__PURE__ */ w.jsx(ri, { custom: g, children: f && /* @__PURE__ */ w.jsx(
      ir.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", s),
        ...FP,
        animate: p,
        custom: g,
        ...d
      }
    ) });
  }
);
JB.displayName = "ScaleFade";
var e6 = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(Wo.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(Wo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Dn.exit(Wo.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, as = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: e6
}, t6 = v.forwardRef(
  function(t, n) {
    const {
      unmountOnExit: r,
      in: o,
      reverse: i = !0,
      className: a,
      offsetX: s = 0,
      offsetY: l = 8,
      transition: u,
      transitionEnd: c,
      delay: d,
      ...f
    } = t, p = r ? o && r : !0, g = o || r ? "enter" : "exit", h = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ w.jsx(ri, { custom: h, children: p && /* @__PURE__ */ w.jsx(
      ir.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", a),
        custom: h,
        ...as,
        animate: g,
        ...f
      }
    ) });
  }
);
t6.displayName = "SlideFade";
var N1 = {
  exit: {
    duration: 0.15,
    ease: Lo.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, n6 = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: i } = um({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Dn.exit(N1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = um({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Dn.enter(N1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, LP = v.forwardRef(function(t, n) {
  const {
    direction: r = "right",
    style: o,
    unmountOnExit: i,
    in: a,
    className: s,
    transition: l,
    transitionEnd: u,
    delay: c,
    motionProps: d,
    ...f
  } = t, p = um({ direction: r }), g = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), h = i ? a && i : !0, b = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ w.jsx(ri, { custom: m, children: h && /* @__PURE__ */ w.jsx(
    ir.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: ie("chakra-slide", s),
      animate: b,
      exit: "exit",
      custom: m,
      variants: n6,
      style: g,
      ...d
    }
  ) });
});
LP.displayName = "Slide";
var jP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = bg(), { getPanelProps: s, isOpen: l } = yg(), u = s(i, n), c = ie("chakra-accordion__panel", r), d = Zd();
    a || delete u.hidden;
    const f = /* @__PURE__ */ w.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ w.jsx(AP, { in: l, ...o, children: f });
  }
);
jP.displayName = "AccordionPanel";
var zP = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = Ct("Accordion", r), a = Cn(r), { htmlProps: s, descendants: l, ...u } = VB(a), c = v.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ w.jsx(jB, { value: l, children: /* @__PURE__ */ w.jsx(BB, { value: c, children: /* @__PURE__ */ w.jsx(FB, { value: i, children: /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: o,
      ...s,
      className: ie("chakra-accordion", r.className),
      __css: i.root,
      children: t
    }
  ) }) }) });
});
zP.displayName = "Accordion";
function NP(e) {
  return v.Children.toArray(e).filter(
    (t) => v.isValidElement(t)
  );
}
var [DY, r6] = Je({
  strict: !1,
  name: "ButtonGroupContext"
});
function o6(e) {
  const [t, n] = v.useState(!e);
  return { ref: v.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function cm(e) {
  const { children: t, className: n, ...r } = e, o = v.isValidElement(t) ? v.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = ie("chakra-button__icon", n);
  return /* @__PURE__ */ w.jsx(
    X.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...r,
      className: i,
      children: o
    }
  );
}
cm.displayName = "ButtonIcon";
function dm(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ w.jsx(Xd, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ie("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = v.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [u]: t ? r : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...a
    }),
    [a, t, u, r]
  );
  return /* @__PURE__ */ w.jsx(X.div, { className: l, ...s, __css: c, children: o });
}
dm.displayName = "ButtonSpinner";
var jn = oe((e, t) => {
  const n = r6(), r = ei("Button", { ...n, ...e }), {
    isDisabled: o = n == null ? void 0 : n.isDisabled,
    isLoading: i,
    isActive: a,
    children: s,
    leftIcon: l,
    rightIcon: u,
    loadingText: c,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: g = "start",
    className: h,
    as: b,
    ...m
  } = Cn(e), y = v.useMemo(() => {
    const P = { ...r == null ? void 0 : r._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...r,
      ...!!n && { _focus: P }
    };
  }, [r, n]), { ref: S, type: x } = o6(b), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ w.jsxs(
    X.button,
    {
      ref: RB(t, S),
      as: b,
      type: f ?? x,
      "data-active": dn(a),
      "data-loading": dn(i),
      __css: y,
      className: ie("chakra-button", h),
      ...m,
      disabled: o || i,
      children: [
        i && g === "start" && /* @__PURE__ */ w.jsx(
          dm,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ w.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ w.jsx(V1, { ...k }) }) : /* @__PURE__ */ w.jsx(V1, { ...k }),
        i && g === "end" && /* @__PURE__ */ w.jsx(
          dm,
          {
            className: "chakra-button__spinner--end",
            label: c,
            placement: "end",
            spacing: d,
            children: p
          }
        )
      ]
    }
  );
});
jn.displayName = "Button";
function V1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    t && /* @__PURE__ */ w.jsx(cm, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ w.jsx(cm, { marginStart: o, children: n })
  ] });
}
var ol = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = v.isValidElement(s) ? v.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ w.jsx(
      jn,
      {
        padding: "0",
        borderRadius: o ? "full" : void 0,
        ref: t,
        "aria-label": i,
        ...a,
        children: l
      }
    );
  }
);
ol.displayName = "IconButton";
var [i6, a6] = Je({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [s6, VP] = Je({
  strict: !1,
  name: "FormControlContext"
});
function l6(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = v.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = v.useState(!1), [g, h] = v.useState(!1), [b, m] = v.useState(!1), y = v.useCallback(
    (_ = {}, T = null) => ({
      id: d,
      ..._,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(T, (M) => {
        M && h(!0);
      })
    }),
    [d]
  ), S = v.useCallback(
    (_ = {}, T = null) => ({
      ..._,
      ref: T,
      "data-focus": dn(b),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i),
      id: _.id !== void 0 ? _.id : u,
      htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l
    }),
    [l, o, b, r, i, u]
  ), x = v.useCallback(
    (_ = {}, T = null) => ({
      id: c,
      ..._,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(T, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = v.useCallback(
    (_ = {}, T = null) => ({
      ..._,
      ...a,
      ref: T,
      role: "group",
      "data-focus": dn(b),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i)
    }),
    [a, o, b, r, i]
  ), P = v.useCallback(
    (_ = {}, T = null) => ({
      ..._,
      ref: T,
      role: "presentation",
      "aria-hidden": !0,
      children: _.children || "*"
    }),
    []
  );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!b,
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: g,
    setHasHelpText: h,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: y,
    getErrorMessageProps: x,
    getRootProps: k,
    getLabelProps: S,
    getRequiredIndicatorProps: P
  };
}
var u6 = oe(
  function(t, n) {
    const r = Ct("Form", t), o = Cn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = l6(o), l = ie("chakra-form-control", t.className);
    return /* @__PURE__ */ w.jsx(s6, { value: s, children: /* @__PURE__ */ w.jsx(i6, { value: r, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
u6.displayName = "FormControl";
var c6 = oe(
  function(t, n) {
    const r = VP(), o = a6(), i = ie("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: i
      }
    );
  }
);
c6.displayName = "FormHelperText";
function BP(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = d6(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Yf(n),
    "aria-required": Yf(o),
    "aria-readonly": Yf(r)
  };
}
function d6(e) {
  var t, n, r;
  const o = VP(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: g,
    ...h
  } = e, b = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && b.push(o.feedbackId), o != null && o.hasHelpText && b.push(o.helpTextId), {
    ...h,
    "aria-describedby": b.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: Le(o == null ? void 0 : o.onFocus, p),
    onBlur: Le(o == null ? void 0 : o.onBlur, g)
  };
}
function Sg(e, t, n, r) {
  const o = ro(n);
  return v.useEffect(() => {
    const i = typeof e == "function" ? e() : e ?? document;
    if (!(!n || !i))
      return i.addEventListener(t, o, r), () => {
        i.removeEventListener(t, o, r);
      };
  }, [t, e, r, o, n]), () => {
    const i = typeof e == "function" ? e() : e ?? document;
    i == null || i.removeEventListener(t, o, r);
  };
}
function f6(e) {
  return "current" in e;
}
var WP = () => typeof window < "u";
function p6() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var h6 = (e) => WP() && e.test(navigator.vendor), m6 = (e) => WP() && e.test(p6()), v6 = () => m6(/mac|iphone|ipad|ipod/i), g6 = () => v6() && h6(/apple/i);
function y6(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  Sg(o, "pointerdown", (i) => {
    if (!g6() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = f6(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function HP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var UP = { exports: {} }, b6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", S6 = b6, x6 = S6;
function GP() {
}
function KP() {
}
KP.resetWarningCache = GP;
var w6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== x6) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw u.name = "Invariant Violation", u;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: KP,
    resetWarningCache: GP
  };
  return n.PropTypes = n, n;
};
UP.exports = w6();
var C6 = UP.exports;
const Co = /* @__PURE__ */ ul(C6);
var fm = "data-focus-lock", YP = "data-focus-lock-disabled", k6 = "data-no-focus-lock", P6 = "data-autofocus-inside", _6 = "data-no-autofocus";
function T6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function E6(e, t) {
  var n = v.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function qP(e, t) {
  return E6(t || null, function(n) {
    return e.forEach(function(r) {
      return T6(r, n);
    });
  });
}
var _p = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, qn = function() {
  return qn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, qn.apply(this, arguments);
};
function XP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function O6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function QP(e) {
  return e;
}
function ZP(e, t) {
  t === void 0 && (t = QP);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var l = function() {
        var c = a;
        a = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(c) {
          a.push(c), u();
        },
        filter: function(c) {
          return a = a.filter(c), n;
        }
      };
    }
  };
  return o;
}
function xg(e, t) {
  return t === void 0 && (t = QP), ZP(e, t);
}
function JP(e) {
  e === void 0 && (e = {});
  var t = ZP(null);
  return t.options = qn({ async: !0, ssr: !1 }, e), t;
}
var e2 = function(e) {
  var t = e.sideCar, n = XP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, qn({}, n));
};
e2.isSideCarExport = !0;
function M6(e, t) {
  return e.useMedium(t), e2;
}
var t2 = xg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), n2 = xg(), I6 = xg(), R6 = JP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), $6 = [], wg = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, o = v.useState(), i = o[0], a = o[1], s = v.useRef(), l = v.useRef(!1), u = v.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, h = t.autoFocus;
  t.allowTextSelection;
  var b = t.group, m = t.className, y = t.whiteList, S = t.hasPositiveIndices, x = t.shards, k = x === void 0 ? $6 : x, P = t.as, _ = P === void 0 ? "div" : P, T = t.lockProps, M = T === void 0 ? {} : T, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = v.useState({}), K = W[0], $ = v.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && H && H(s.current), l.current = !0;
  }, [H]), A = v.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  v.useEffect(function() {
    d || (u.current = null);
  }, []);
  var j = v.useCallback(function(se) {
    var me = u.current;
    if (me && me.focus) {
      var ke = typeof D == "function" ? D(me) : D;
      if (ke) {
        var et = typeof ke == "object" ? ke : void 0;
        u.current = null, se ? Promise.resolve().then(function() {
          return me.focus(et);
        }) : me.focus(et);
      }
    }
  }, [D]), U = v.useCallback(function(se) {
    l.current && t2.useMedium(se);
  }, []), V = n2.useMedium, Y = v.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), z = q((r = {}, r[YP] = d && "disabled", r[fm] = b, r), M), te = f !== !0, le = te && f !== "tail", ae = qP([n, Y]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ v.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: _p
    }),
    // first tabbed element guard
    S ? /* @__PURE__ */ v.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: _p
    }) : null
  ], !d && /* @__PURE__ */ v.createElement(I, {
    id: K,
    sideCar: R6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: h,
    whiteList: y,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: j,
    focusOptions: G
  }), /* @__PURE__ */ v.createElement(_, q({
    ref: ae
  }, z, {
    className: m,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ v.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: _p
  }));
});
wg.propTypes = {};
wg.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const r2 = wg;
function Gc(e, t) {
  return Gc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Gc(e, t);
}
function A6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Gc(e, t);
}
function Xo(e) {
  "@babel/helpers - typeof";
  return Xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xo(e);
}
function D6(e, t) {
  if (Xo(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Xo(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o2(e) {
  var t = D6(e, "string");
  return Xo(t) === "symbol" ? t : String(t);
}
function ji(e, t, n) {
  return t = o2(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function F6(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(o) {
    var i = [], a;
    function s() {
      a = e(i.map(function(u) {
        return u.props;
      })), t(a);
    }
    var l = /* @__PURE__ */ function(u) {
      A6(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function() {
        return a;
      };
      var d = c.prototype;
      return d.componentDidMount = function() {
        i.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var p = i.indexOf(this);
        i.splice(p, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ re.createElement(o, this.props);
      }, c;
    }(v.PureComponent);
    return ji(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var ar = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Kc = function(e) {
  return Array.isArray(e) ? e : [e];
}, i2 = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, L6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, a2 = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, s2 = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, j6 = function(e, t) {
  return !e || s2(e) || !L6(e) && t(a2(e));
}, l2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = j6(t, l2.bind(void 0, e));
  return e.set(t, r), r;
}, z6 = function(e, t) {
  return e && !s2(e) ? B6(e) ? t(a2(e)) : !1 : !0;
}, u2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = z6(t, u2.bind(void 0, e));
  return e.set(t, r), r;
}, c2 = function(e) {
  return e.dataset;
}, N6 = function(e) {
  return e.tagName === "BUTTON";
}, d2 = function(e) {
  return e.tagName === "INPUT";
}, f2 = function(e) {
  return d2(e) && e.type === "radio";
}, V6 = function(e) {
  return !((d2(e) || N6(e)) && (e.type === "hidden" || e.disabled));
}, B6 = function(e) {
  var t = e.getAttribute(_6);
  return ![!0, "true", ""].includes(t);
}, Cg = function(e) {
  var t;
  return !!(e && (!((t = c2(e)) === null || t === void 0) && t.focusGuard));
}, Yc = function(e) {
  return !Cg(e);
}, W6 = function(e) {
  return !!e;
}, H6 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, p2 = function(e, t, n) {
  return ar(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(H6);
}, U6 = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], kg = U6.join(","), G6 = "".concat(kg, ", [data-focus-guard]"), h2 = function(e, t) {
  return ar((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? G6 : kg) ? [r] : [], h2(r));
  }, []);
}, K6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Jd([e.contentDocument.body], t) : [e];
}, Jd = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = h2(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return K6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? ar(r.parentNode.querySelectorAll(kg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, Y6 = function(e) {
  var t = e.querySelectorAll("[".concat(P6, "]"));
  return ar(t).map(function(n) {
    return Jd([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Pg = function(e, t) {
  return ar(e).filter(function(n) {
    return l2(t, n);
  }).filter(function(n) {
    return V6(n);
  });
}, B1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ar(e).filter(function(n) {
    return u2(t, n);
  });
}, pm = function(e, t, n) {
  return p2(Pg(Jd(e, n), t), !0, n);
}, W1 = function(e, t) {
  return p2(Pg(Jd(e), t), !1);
}, q6 = function(e, t) {
  return Pg(Y6(e), t);
}, Qi = function(e, t) {
  return e.shadowRoot ? Qi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ar(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Qi(o, t) : !1;
    }
    return Qi(n, t);
  });
}, X6 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, m2 = function(e) {
  return e.parentNode ? m2(e.parentNode) : e;
}, _g = function(e) {
  var t = Kc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(fm);
    return n.push.apply(n, o ? X6(ar(m2(r).querySelectorAll("[".concat(fm, '="').concat(o, '"]:not([').concat(YP, '="disabled"])')))) : [r]), n;
  }, []);
}, Q6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, il = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? il(t.shadowRoot) : t instanceof HTMLIFrameElement && Q6(function() {
      return t.contentWindow.document;
    }) ? il(t.contentWindow.document) : t;
  }
}, Z6 = function(e, t) {
  return e === t;
}, J6 = function(e, t) {
  return !!ar(e.querySelectorAll("iframe")).some(function(n) {
    return Z6(n, t);
  });
}, v2 = function(e, t) {
  return t === void 0 && (t = il(i2(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : _g(e).some(function(n) {
    return Qi(n, t) || J6(n, t);
  });
}, e9 = function(e) {
  e === void 0 && (e = document);
  var t = il(e);
  return t ? ar(e.querySelectorAll("[".concat(k6, "]"))).some(function(n) {
    return Qi(n, t);
  }) : !1;
}, t9 = function(e, t) {
  return t.filter(f2).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Tg = function(e, t) {
  return f2(e) && e.name ? t9(e, t) : e;
}, n9 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Tg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, H1 = function(e) {
  return e[0] && e.length > 1 ? Tg(e[0], e) : e[0];
}, U1 = function(e, t) {
  return e.length > 1 ? e.indexOf(Tg(e[t], e)) : t;
}, g2 = "NEW_FOCUS", r9 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = Cg(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), g = n9(t), h = n !== void 0 ? g.indexOf(n) : -1, b = h - (r ? g.indexOf(r) : l), m = U1(e, 0), y = U1(e, o - 1);
    if (l === -1 || c === -1)
      return g2;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return y;
    if (l >= p && s && Math.abs(d) > 1)
      return m;
    if (d && Math.abs(b) > 1)
      return c;
    if (l <= f)
      return y;
    if (l > p)
      return m;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, o9 = function(e) {
  return function(t) {
    var n, r = (n = c2(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, i9 = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = B1(r.filter(o9(n)));
  return o && o.length ? H1(o) : H1(B1(t));
}, hm = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && hm(e.parentNode.host || e.parentNode, t), t;
}, Tp = function(e, t) {
  for (var n = hm(e), r = hm(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, y2 = function(e, t, n) {
  var r = Kc(e), o = Kc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Tp(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = Tp(i, l);
      u && (!a || Qi(u, a) ? a = u : a = Tp(u, a));
    });
  }), a;
}, a9 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(q6(r, t));
  }, []);
}, s9 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(W6);
}, l9 = function(e, t) {
  var n = il(Kc(e).length > 0 ? document : i2(e).ownerDocument), r = _g(e).filter(Yc), o = y2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = W1(r, i), s = pm(r, i).filter(function(p) {
    var g = p.node;
    return Yc(g);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = W1([o], i).map(function(p) {
      var g = p.node;
      return g;
    }), u = s9(l, s), c = u.map(function(p) {
      var g = p.node;
      return g;
    }), d = r9(c, l, n, t);
    if (d === g2) {
      var f = i9(a, c, a9(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, u9 = function(e) {
  var t = _g(e).filter(Yc), n = y2(e, e, t), r = /* @__PURE__ */ new Map(), o = pm([n], r, !0), i = pm(t, r).filter(function(a) {
    var s = a.node;
    return Yc(s);
  }).map(function(a) {
    var s = a.node;
    return s;
  });
  return o.map(function(a) {
    var s = a.node, l = a.index;
    return {
      node: s,
      index: l,
      lockItem: i.indexOf(s) >= 0,
      guard: Cg(s)
    };
  });
}, c9 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Ep = 0, Op = !1, b2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = l9(e, t);
  if (!Op && r) {
    if (Ep > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Op = !0, setTimeout(function() {
        Op = !1;
      }, 1);
      return;
    }
    Ep++, c9(r.node, n.focusOptions), Ep--;
  }
};
function Eg(e) {
  setTimeout(e, 1);
}
var d9 = function() {
  return document && document.activeElement === document.body;
}, f9 = function() {
  return d9() || e9();
}, Zi = null, zi = null, Ji = null, al = !1, p9 = function() {
  return !0;
}, h9 = function(t) {
  return (Zi.whiteList || p9)(t);
}, m9 = function(t, n) {
  Ji = {
    observerNode: t,
    portaledElement: n
  };
}, v9 = function(t) {
  return Ji && Ji.portaledElement === t;
};
function G1(e, t, n, r) {
  var o = null, i = e;
  do {
    var a = r[i];
    if (a.guard)
      a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var g9 = function(t) {
  return t && "current" in t ? t.current : t;
}, y9 = function(t) {
  return t ? !!al : al === "meanwhile";
}, b9 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, S9 = function(t, n) {
  return n.some(function(r) {
    return b9(t, r, r);
  });
}, qc = function() {
  var t = !1;
  if (Zi) {
    var n = Zi, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Ji && Ji.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(g9).filter(Boolean));
      if ((!c || h9(c)) && (o || y9(s) || !f9() || !zi && i) && (u && !// active element is "inside" working area
      (v2(d) || // check for shadow-dom contained elements
      c && S9(c, d) || v9(c)) && (document && !zi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = b2(d, zi, {
        focusOptions: l
      }), Ji = {})), al = !1, zi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = u9(d), g = p.map(function(h) {
          var b = h.node;
          return b;
        }).indexOf(f);
        g > -1 && (p.filter(function(h) {
          var b = h.guard, m = h.node;
          return b && m.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var b = h.node;
          return b.removeAttribute("tabIndex");
        }), G1(g, p.length, 1, p), G1(g, -1, -1, p));
      }
    }
  }
  return t;
}, S2 = function(t) {
  qc() && t && (t.stopPropagation(), t.preventDefault());
}, Og = function() {
  return Eg(qc);
}, x9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || m9(r, n);
}, w9 = function() {
  return null;
}, x2 = function() {
  al = "just", Eg(function() {
    al = "meanwhile";
  });
}, C9 = function() {
  document.addEventListener("focusin", S2), document.addEventListener("focusout", Og), window.addEventListener("blur", x2);
}, k9 = function() {
  document.removeEventListener("focusin", S2), document.removeEventListener("focusout", Og), window.removeEventListener("blur", x2);
};
function P9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function _9(e) {
  var t = e.slice(-1)[0];
  t && !Zi && C9();
  var n = Zi, r = n && t && t.id === n.id;
  Zi = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (zi = null, (!r || n.observed !== t.observed) && t.onActivation(), qc(), Eg(qc)) : (k9(), zi = null);
}
t2.assignSyncMedium(x9);
n2.assignMedium(Og);
I6.assignMedium(function(e) {
  return e({
    moveFocusInside: b2,
    focusInside: v2
  });
});
const T9 = F6(P9, _9)(w9);
var w2 = /* @__PURE__ */ v.forwardRef(function(t, n) {
  return /* @__PURE__ */ v.createElement(r2, q({
    sideCar: T9,
    ref: n
  }, t));
}), C2 = r2.propTypes || {};
C2.sideCar;
HP(C2, ["sideCar"]);
w2.propTypes = {};
const K1 = w2;
function k2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function P2(e) {
  var t;
  if (!k2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function E9(e) {
  var t, n;
  return (n = (t = _2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function _2(e) {
  return k2(e) ? e.ownerDocument : document;
}
function O9(e) {
  return _2(e).activeElement;
}
var T2 = (e) => e.hasAttribute("tabindex"), M9 = (e) => T2(e) && e.tabIndex === -1;
function I9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function E2(e) {
  return e.parentElement && E2(e.parentElement) ? !0 : e.hidden;
}
function R9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function O2(e) {
  if (!P2(e) || E2(e) || I9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : R9(e) ? !0 : T2(e);
}
function $9(e) {
  return e ? P2(e) && O2(e) && !M9(e) : !1;
}
var A9 = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
], D9 = A9.join(), F9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function M2(e) {
  const t = Array.from(
    e.querySelectorAll(D9)
  );
  return t.unshift(e), t.filter((n) => O2(n) && F9(n));
}
var Y1, L9 = (Y1 = K1.default) != null ? Y1 : K1, I2 = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: n,
    contentRef: r,
    restoreFocus: o,
    children: i,
    isDisabled: a,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: u
  } = e, c = v.useCallback(() => {
    t != null && t.current ? t.current.focus() : r != null && r.current && M2(r.current).length === 0 && requestAnimationFrame(() => {
      var g;
      (g = r.current) == null || g.focus();
    });
  }, [t, r]), d = v.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ w.jsx(
    L9,
    {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: s,
      disabled: a,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i
    }
  );
};
I2.displayName = "FocusLock";
var j9 = d3 ? v.useLayoutEffect : v.useEffect;
function q1(e, t = []) {
  const n = v.useRef(e);
  return j9(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function z9(e, t) {
  const n = v.useId();
  return v.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function N9(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function V9(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = q1(n), a = q1(t), [s, l] = v.useState(e.defaultIsOpen || !1), [u, c] = N9(r, s), d = z9(o, "disclosure"), f = v.useCallback(() => {
    u || l(!1), a == null || a();
  }, [u, a]), p = v.useCallback(() => {
    u || l(!0), i == null || i();
  }, [u, i]), g = v.useCallback(() => {
    (c ? f : p)();
  }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: g,
    isControlled: u,
    getButtonProps: (h = {}) => ({
      ...h,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: v3(h.onClick, g)
    }),
    getDisclosureProps: (h = {}) => ({
      ...h,
      hidden: !c,
      id: d
    })
  };
}
var ef = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = Ct("Input", o), a = Cn(o), s = BP(a), l = ie("chakra-input", t.className);
  return /* @__PURE__ */ w.jsx(
    X.input,
    {
      size: r,
      ...s,
      __css: i.field,
      ref: n,
      className: l
    }
  );
});
ef.displayName = "Input";
ef.id = "Input";
var R2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function B9(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : jt(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function W9(e, t = R2) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var nr = oe(function(t, n) {
  const r = ei("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Cn(t), u = T3({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ w.jsx(
    X.p,
    {
      ref: n,
      className: ie("chakra-text", t.className),
      ...u,
      ...l,
      __css: r
    }
  );
});
nr.displayName = "Text";
var $2 = (e) => /* @__PURE__ */ w.jsx(
  X.div,
  {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css
    }
  }
);
$2.displayName = "StackItem";
function H9(e) {
  const { spacing: t, direction: n } = e, r = {
    column: {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": B9(
      n,
      (o) => r[o]
    )
  };
}
var A2 = oe((e, t) => {
  const {
    isInline: n,
    direction: r,
    align: o,
    justify: i,
    spacing: a = "0.5rem",
    wrap: s,
    children: l,
    divider: u,
    className: c,
    shouldWrapChildren: d,
    ...f
  } = e, p = n ? "row" : r ?? "column", g = v.useMemo(
    () => H9({ spacing: a, direction: p }),
    [a, p]
  ), h = !!u, b = !d && !h, m = v.useMemo(() => {
    const S = NP(l);
    return b ? S : S.map((x, k) => {
      const P = typeof x.key < "u" ? x.key : k, _ = k + 1 === S.length, M = d ? /* @__PURE__ */ w.jsx($2, { children: x }, P) : x;
      if (!h)
        return M;
      const I = v.cloneElement(
        u,
        {
          __css: g
        }
      ), D = _ ? null : I;
      return /* @__PURE__ */ w.jsxs(v.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    g,
    h,
    b,
    d,
    l
  ]), y = ie("chakra-stack", c);
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: h ? void 0 : a,
      className: y,
      ...f,
      children: m
    }
  );
});
A2.displayName = "Stack";
var _t = oe((e, t) => /* @__PURE__ */ w.jsx(A2, { align: "center", ...e, direction: "row", ref: t }));
_t.displayName = "HStack";
var Fe = X("div");
Fe.displayName = "Box";
var D2 = oe(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ w.jsx(
    Fe,
    {
      ref: n,
      boxSize: r,
      __css: {
        ...a,
        flexShrink: 0,
        flexGrow: 0
      },
      ...i
    }
  );
});
D2.displayName = "Square";
var U9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ w.jsx(D2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
U9.displayName = "Circle";
var F2 = oe(function(t, n) {
  const {
    borderLeftWidth: r,
    borderBottomWidth: o,
    borderTopWidth: i,
    borderRightWidth: a,
    borderWidth: s,
    borderStyle: l,
    borderColor: u,
    ...c
  } = ei("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...g
  } = Cn(t), h = {
    vertical: {
      borderLeftWidth: r || a || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || i || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ w.jsx(
    X.hr,
    {
      ref: n,
      "aria-orientation": f,
      ...g,
      __css: {
        ...c,
        border: "0",
        borderColor: u,
        borderStyle: l,
        ...h[f],
        ...p
      },
      className: ie("chakra-divider", d)
    }
  );
});
F2.displayName = "Divider";
function G9(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = B3(), i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(r) ? r : [r];
  a = a.filter((u) => u != null);
  const [s, l] = v.useState(() => i.map((u, c) => ({
    media: u,
    matches: n ? !!a[c] : o().matchMedia(u).matches
  })));
  return v.useEffect(() => {
    const u = o();
    l(
      i.map((f) => ({
        media: f,
        matches: u.matchMedia(f).matches
      }))
    );
    const c = i.map((f) => u.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((g) => g.media === f.media ? { ...g, matches: f.matches } : g));
    };
    return c.forEach((f) => {
      typeof f.addListener == "function" ? f.addListener(d) : f.addEventListener("change", d);
    }), () => {
      c.forEach((f) => {
        typeof f.removeListener == "function" ? f.removeListener(d) : f.removeEventListener("change", d);
      });
    };
  }, [o]), s.map((u) => u.matches);
}
function K9(e, t, n = R2) {
  let r = Object.keys(e).indexOf(t);
  if (r !== -1)
    return e[t];
  let o = n.indexOf(t);
  for (; o >= 0; ) {
    const i = n[o];
    if (e.hasOwnProperty(i)) {
      r = o;
      break;
    }
    o -= 1;
  }
  if (r !== -1) {
    const i = n[r];
    return e[i];
  }
}
function Y9(e) {
  var t, n;
  const r = jt(e) ? e : { fallback: e ?? "base" }, i = mo().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = G9(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function q9(e, t) {
  var n;
  const r = jt(t) ? t : { fallback: t ?? "base" }, o = Y9(r), i = mo();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(W9(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return K9(s, o, a);
}
function X9(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function Q9(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e, [r, o] = v.useState([]), i = v.useRef(), a = () => {
    i.current && (clearTimeout(i.current), i.current = null);
  }, s = () => {
    a(), i.current = setTimeout(() => {
      o([]), i.current = null;
    }, t);
  };
  v.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (X9(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function Z9(e, t, n, r) {
  if (t == null)
    return r;
  if (!r)
    return e.find(
      (a) => n(a).toLowerCase().startsWith(t.toLowerCase())
    );
  const o = e.filter(
    (i) => n(i).toLowerCase().startsWith(t.toLowerCase())
  );
  if (o.length > 0) {
    let i;
    return o.includes(r) ? (i = o.indexOf(r) + 1, i === o.length && (i = 0), o[i]) : (i = e.indexOf(o[0]), e[i]);
  }
  return r;
}
function J9() {
  const e = v.useRef(/* @__PURE__ */ new Map()), t = e.current, n = v.useCallback((o, i, a, s) => {
    e.current.set(a, { type: i, el: o, options: s }), o.addEventListener(i, a, s);
  }, []), r = v.useCallback(
    (o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    },
    []
  );
  return v.useEffect(
    () => () => {
      t.forEach((o, i) => {
        r(o.el, o.type, i, o.options);
      });
    },
    [r, t]
  ), { add: n, remove: r };
}
function Mp(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function e8(e = {}) {
  const {
    ref: t,
    isDisabled: n,
    isFocusable: r,
    clickOnEnter: o = !0,
    clickOnSpace: i = !0,
    onMouseDown: a,
    onMouseUp: s,
    onClick: l,
    onKeyDown: u,
    onKeyUp: c,
    tabIndex: d,
    onMouseOver: f,
    onMouseLeave: p,
    ...g
  } = e, [h, b] = v.useState(!0), [m, y] = v.useState(!1), S = J9(), x = ($) => {
    $ && $.tagName !== "BUTTON" && b(!1);
  }, k = h ? d : d || 0, P = n && !r, _ = v.useCallback(
    ($) => {
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      $.currentTarget.focus(), l == null || l($);
    },
    [n, l]
  ), T = v.useCallback(
    ($) => {
      m && Mp($) && ($.preventDefault(), $.stopPropagation(), y(!1), S.remove(document, "keyup", T, !1));
    },
    [m, S]
  ), M = v.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !Mp($.nativeEvent) || h)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), y(!0)), A && ($.preventDefault(), $.currentTarget.click()), S.add(document, "keyup", T, !1);
    },
    [
      n,
      h,
      u,
      o,
      i,
      S,
      T
    ]
  ), I = v.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !Mp($.nativeEvent) || h)
        return;
      i && $.key === " " && ($.preventDefault(), y(!1), $.currentTarget.click());
    },
    [i, h, n, c]
  ), D = v.useCallback(
    ($) => {
      $.button === 0 && (y(!1), S.remove(document, "mouseup", D, !1));
    },
    [S]
  ), G = v.useCallback(
    ($) => {
      if ($.button !== 0)
        return;
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      h || y(!0), $.currentTarget.focus({ preventScroll: !0 }), S.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, h, a, S, D]
  ), H = v.useCallback(
    ($) => {
      $.button === 0 && (h || y(!1), s == null || s($));
    },
    [s, h]
  ), L = v.useCallback(
    ($) => {
      if (n) {
        $.preventDefault();
        return;
      }
      f == null || f($);
    },
    [n, f]
  ), W = v.useCallback(
    ($) => {
      m && ($.preventDefault(), y(!1)), p == null || p($);
    },
    [m, p]
  ), K = at(t, x);
  return h ? {
    ...g,
    ref: K,
    type: "button",
    "aria-disabled": P ? void 0 : n,
    disabled: P,
    onClick: _,
    onMouseDown: a,
    onMouseUp: s,
    onKeyUp: c,
    onKeyDown: u,
    onMouseOver: f,
    onMouseLeave: p
  } : {
    ...g,
    ref: K,
    role: "button",
    "data-active": dn(m),
    "aria-disabled": n ? "true" : void 0,
    tabIndex: P ? void 0 : k,
    onClick: _,
    onMouseDown: G,
    onMouseUp: H,
    onKeyUp: I,
    onKeyDown: M,
    onMouseOver: L,
    onMouseLeave: W
  };
}
function t8(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = O9(t);
  return !n || t.contains(n) ? !1 : !!$9(n);
}
function L2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  fa(() => {
    if (!i || t8(e))
      return;
    const a = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (a)
      return s = requestAnimationFrame(() => {
        a.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(s);
      };
  }, [i, e, o]);
}
var n8 = {
  preventScroll: !0,
  shouldFocus: !1
};
function r8(e, t = n8) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = o8(e) ? e.current : e, s = o && i, l = v.useRef(s), u = v.useRef(i);
  ua(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = v.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (n != null && n.current)
        requestAnimationFrame(() => {
          var d;
          (d = n.current) == null || d.focus({ preventScroll: r });
        });
      else {
        const d = M2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  fa(() => {
    c();
  }, [c]), Sg(a, "transitionend", c);
}
function o8(e) {
  return "current" in e;
}
var ci = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), xt = {
  arrowShadowColor: ci("--popper-arrow-shadow-color"),
  arrowSize: ci("--popper-arrow-size", "8px"),
  arrowSizeHalf: ci("--popper-arrow-size-half"),
  arrowBg: ci("--popper-arrow-bg"),
  transformOrigin: ci("--popper-transform-origin"),
  arrowOffset: ci("--popper-arrow-offset")
};
function i8(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var a8 = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
}, s8 = (e) => a8[e], X1 = {
  scroll: !0,
  resize: !0
};
function l8(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...X1, ...e }
  } : t = {
    enabled: e,
    options: X1
  }, t;
}
var u8 = {
  name: "matchWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: e }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  },
  effect: ({ state: e }) => () => {
    const t = e.elements.reference;
    e.elements.popper.style.width = `${t.offsetWidth}px`;
  }
}, c8 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Q1(e);
  },
  effect: ({ state: e }) => () => {
    Q1(e);
  }
}, Q1 = (e) => {
  e.elements.popper.style.setProperty(
    xt.transformOrigin.var,
    s8(e.placement)
  );
}, d8 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    f8(e);
  }
}, f8 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = p8(e.placement);
  if ((t = e.elements) != null && t.arrow && n) {
    Object.assign(e.elements.arrow.style, {
      [n.property]: n.value,
      width: xt.arrowSize.varRef,
      height: xt.arrowSize.varRef,
      zIndex: -1
    });
    const r = {
      [xt.arrowSizeHalf.var]: `calc(${xt.arrowSize.varRef} / 2 - 1px)`,
      [xt.arrowOffset.var]: `calc(${xt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in r)
      e.elements.arrow.style.setProperty(o, r[o]);
  }
}, p8 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: xt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: xt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: xt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: xt.arrowOffset.varRef };
}, h8 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Z1(e);
  },
  effect: ({ state: e }) => () => {
    Z1(e);
  }
}, Z1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = i8(e.placement);
  n && t.style.setProperty("--popper-arrow-default-shadow", n), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: xt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, m8 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, v8 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function g8(e, t = "ltr") {
  var n, r;
  const o = ((n = m8[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = v8[e]) != null ? r : o;
}
var zt = "top", Sn = "bottom", xn = "right", Nt = "left", Mg = "auto", kl = [zt, Sn, xn, Nt], ma = "start", sl = "end", y8 = "clippingParents", j2 = "viewport", Ka = "popper", b8 = "reference", J1 = /* @__PURE__ */ kl.reduce(function(e, t) {
  return e.concat([t + "-" + ma, t + "-" + sl]);
}, []), z2 = /* @__PURE__ */ [].concat(kl, [Mg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ma, t + "-" + sl]);
}, []), S8 = "beforeRead", x8 = "read", w8 = "afterRead", C8 = "beforeMain", k8 = "main", P8 = "afterMain", _8 = "beforeWrite", T8 = "write", E8 = "afterWrite", O8 = [S8, x8, w8, C8, k8, P8, _8, T8, E8];
function or(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Qo(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function gn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ig(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function M8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !gn(i) || !or(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function I8(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !gn(o) || !or(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const R8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: M8,
  effect: I8,
  requires: ["computeStyles"]
};
function rr(e) {
  return e.split("-")[0];
}
var Ho = Math.max, Xc = Math.min, va = Math.round;
function mm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function N2() {
  return !/^((?!chrome|android).)*safari/i.test(mm());
}
function ga(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && gn(e) && (o = e.offsetWidth > 0 && va(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && va(r.height) / e.offsetHeight || 1);
  var a = Qo(e) ? en(e) : window, s = a.visualViewport, l = !N2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function Rg(e) {
  var t = ga(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function V2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ig(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Er(e) {
  return en(e).getComputedStyle(e);
}
function $8(e) {
  return ["table", "td", "th"].indexOf(or(e)) >= 0;
}
function go(e) {
  return ((Qo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function tf(e) {
  return or(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ig(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    go(e)
  );
}
function eS(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Er(e).position === "fixed" ? null : e.offsetParent;
}
function A8(e) {
  var t = /firefox/i.test(mm()), n = /Trident/i.test(mm());
  if (n && gn(e)) {
    var r = Er(e);
    if (r.position === "fixed")
      return null;
  }
  var o = tf(e);
  for (Ig(o) && (o = o.host); gn(o) && ["html", "body"].indexOf(or(o)) < 0; ) {
    var i = Er(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Pl(e) {
  for (var t = en(e), n = eS(e); n && $8(n) && Er(n).position === "static"; )
    n = eS(n);
  return n && (or(n) === "html" || or(n) === "body" && Er(n).position === "static") ? t : n || A8(e) || t;
}
function $g(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Es(e, t, n) {
  return Ho(e, Xc(t, n));
}
function D8(e, t, n) {
  var r = Es(e, t, n);
  return r > n ? n : r;
}
function B2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function W2(e) {
  return Object.assign({}, B2(), e);
}
function H2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var F8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, W2(typeof t != "number" ? t : H2(t, kl));
};
function L8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = rr(n.placement), l = $g(s), u = [Nt, xn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = F8(o.padding, n), f = Rg(i), p = l === "y" ? zt : Nt, g = l === "y" ? Sn : xn, h = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], b = a[l] - n.rects.reference[l], m = Pl(i), y = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, S = h / 2 - b / 2, x = d[p], k = y - f[c] - d[g], P = y / 2 - f[c] / 2 + S, _ = Es(x, P, k), T = l;
    n.modifiersData[r] = (t = {}, t[T] = _, t.centerOffset = _ - P, t);
  }
}
function j8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || V2(t.elements.popper, o) && (t.elements.arrow = o));
}
const z8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: L8,
  effect: j8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ya(e) {
  return e.split("-")[1];
}
var N8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function V8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: va(n * o) / o || 0,
    y: va(r * o) / o || 0
  };
}
function tS(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, g = a.y, h = g === void 0 ? 0 : g, b = typeof c == "function" ? c({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = b.x, h = b.y;
  var m = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), S = Nt, x = zt, k = window;
  if (u) {
    var P = Pl(n), _ = "clientHeight", T = "clientWidth";
    if (P === en(n) && (P = go(n), Er(P).position !== "static" && s === "absolute" && (_ = "scrollHeight", T = "scrollWidth")), P = P, o === zt || (o === Nt || o === xn) && i === sl) {
      x = Sn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      h -= M - r.height, h *= l ? 1 : -1;
    }
    if (o === Nt || (o === zt || o === Sn) && i === sl) {
      S = xn;
      var I = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      p -= I - r.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && N8), G = c === !0 ? V8({
    x: p,
    y: h
  }, en(n)) : {
    x: p,
    y: h
  };
  if (p = G.x, h = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[x] = y ? "0" : "", H[S] = m ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[x] = y ? h + "px" : "", t[S] = m ? p + "px" : "", t.transform = "", t));
}
function B8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: rr(t.placement),
    variation: ya(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, tS(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, tS(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const W8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: B8,
  data: {}
};
var vu = {
  passive: !0
};
function H8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, vu);
  }), s && l.addEventListener("resize", n.update, vu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, vu);
    }), s && l.removeEventListener("resize", n.update, vu);
  };
}
const U8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: H8,
  data: {}
};
var G8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ec(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return G8[t];
  });
}
var K8 = {
  start: "end",
  end: "start"
};
function nS(e) {
  return e.replace(/start|end/g, function(t) {
    return K8[t];
  });
}
function Ag(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Dg(e) {
  return ga(go(e)).left + Ag(e).scrollLeft;
}
function Y8(e, t) {
  var n = en(e), r = go(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = N2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Dg(e),
    y: l
  };
}
function q8(e) {
  var t, n = go(e), r = Ag(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ho(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ho(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Dg(e), l = -r.scrollTop;
  return Er(o || n).direction === "rtl" && (s += Ho(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Fg(e) {
  var t = Er(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function U2(e) {
  return ["html", "body", "#document"].indexOf(or(e)) >= 0 ? e.ownerDocument.body : gn(e) && Fg(e) ? e : U2(tf(e));
}
function Os(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = U2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), a = o ? [i].concat(i.visualViewport || [], Fg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Os(tf(a)))
  );
}
function vm(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function X8(e, t) {
  var n = ga(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function rS(e, t, n) {
  return t === j2 ? vm(Y8(e, n)) : Qo(t) ? X8(t, n) : vm(q8(go(e)));
}
function Q8(e) {
  var t = Os(tf(e)), n = ["absolute", "fixed"].indexOf(Er(e).position) >= 0, r = n && gn(e) ? Pl(e) : e;
  return Qo(r) ? t.filter(function(o) {
    return Qo(o) && V2(o, r) && or(o) !== "body";
  }) : [];
}
function Z8(e, t, n, r) {
  var o = t === "clippingParents" ? Q8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = rS(e, u, r);
    return l.top = Ho(c.top, l.top), l.right = Xc(c.right, l.right), l.bottom = Xc(c.bottom, l.bottom), l.left = Ho(c.left, l.left), l;
  }, rS(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function G2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? rr(r) : null, i = r ? ya(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case zt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case Sn:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case xn:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Nt:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? $g(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case ma:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case sl:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function ll(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? y8 : s, u = n.rootBoundary, c = u === void 0 ? j2 : u, d = n.elementContext, f = d === void 0 ? Ka : d, p = n.altBoundary, g = p === void 0 ? !1 : p, h = n.padding, b = h === void 0 ? 0 : h, m = W2(typeof b != "number" ? b : H2(b, kl)), y = f === Ka ? b8 : Ka, S = e.rects.popper, x = e.elements[g ? y : f], k = Z8(Qo(x) ? x : x.contextElement || go(e.elements.popper), l, c, a), P = ga(e.elements.reference), _ = G2({
    reference: P,
    element: S,
    strategy: "absolute",
    placement: o
  }), T = vm(Object.assign({}, S, _)), M = f === Ka ? T : P, I = {
    top: k.top - M.top + m.top,
    bottom: M.bottom - k.bottom + m.bottom,
    left: k.left - M.left + m.left,
    right: M.right - k.right + m.right
  }, D = e.modifiersData.offset;
  if (f === Ka && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [xn, Sn].indexOf(H) >= 0 ? 1 : -1, W = [zt, Sn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function J8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? z2 : l, c = ya(r), d = c ? s ? J1 : J1.filter(function(g) {
    return ya(g) === c;
  }) : kl, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, h) {
    return g[h] = ll(e, {
      placement: h,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[rr(h)], g;
  }, {});
  return Object.keys(p).sort(function(g, h) {
    return p[g] - p[h];
  });
}
function e7(e) {
  if (rr(e) === Mg)
    return [];
  var t = ec(e);
  return [nS(e), t, nS(t)];
}
function t7(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, g = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, b = t.options.placement, m = rr(b), y = m === b, S = l || (y || !g ? [ec(b)] : e7(b)), x = [b].concat(S).reduce(function(te, le) {
      return te.concat(rr(le) === Mg ? J8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, _ = /* @__PURE__ */ new Map(), T = !0, M = x[0], I = 0; I < x.length; I++) {
      var D = x[I], G = rr(D), H = ya(D) === ma, L = [zt, Sn].indexOf(G) >= 0, W = L ? "width" : "height", K = ll(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? xn : Nt : H ? Sn : zt;
      k[W] > P[W] && ($ = ec($));
      var A = ec($), j = [];
      if (i && j.push(K[G] <= 0), s && j.push(K[$] <= 0, K[A] <= 0), j.every(function(te) {
        return te;
      })) {
        M = D, T = !1;
        break;
      }
      _.set(D, j);
    }
    if (T)
      for (var U = g ? 3 : 1, V = function(le) {
        var ae = x.find(function(se) {
          var me = _.get(se);
          if (me)
            return me.slice(0, le).every(function(ke) {
              return ke;
            });
        });
        if (ae)
          return M = ae, "break";
      }, Y = U; Y > 0; Y--) {
        var z = V(Y);
        if (z === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const n7 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: t7,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function oS(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function iS(e) {
  return [zt, xn, Sn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function r7(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = ll(t, {
    elementContext: "reference"
  }), s = ll(t, {
    altBoundary: !0
  }), l = oS(a, r), u = oS(s, o, i), c = iS(l), d = iS(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const o7 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: r7
};
function i7(e, t, n) {
  var r = rr(e), o = [Nt, zt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Nt, xn].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function a7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = z2.reduce(function(c, d) {
    return c[d] = i7(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const s7 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: a7
};
function l7(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = G2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const u7 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: l7,
  data: {}
};
function c7(e) {
  return e === "x" ? "y" : "x";
}
function d7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, g = n.tetherOffset, h = g === void 0 ? 0 : g, b = ll(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = rr(t.placement), y = ya(t.placement), S = !y, x = $g(m), k = c7(x), P = t.modifiersData.popperOffsets, _ = t.rects.reference, T = t.rects.popper, M = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, I = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, G = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var H, L = x === "y" ? zt : Nt, W = x === "y" ? Sn : xn, K = x === "y" ? "height" : "width", $ = P[x], A = $ + b[L], j = $ - b[W], U = p ? -T[K] / 2 : 0, V = y === ma ? _[K] : T[K], Y = y === ma ? -T[K] : -_[K], z = t.elements.arrow, te = p && z ? Rg(z) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : B2(), ae = le[L], se = le[W], me = Es(0, _[K], te[K]), ke = S ? _[K] / 2 - U - me - ae - I.mainAxis : V - me - ae - I.mainAxis, et = S ? -_[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && Pl(t.elements.arrow), on = qe ? x === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, Pn = (H = D == null ? void 0 : D[x]) != null ? H : 0, Ir = $ + ke - Pn - on, fe = $ + et - Pn, mt = Es(p ? Xc(A, Ir) : A, $, p ? Ho(j, fe) : j);
      P[x] = mt, G[x] = mt - $;
    }
    if (s) {
      var Ge, Ut = x === "x" ? zt : Nt, Rr = x === "x" ? Sn : xn, vt = P[k], Nn = k === "y" ? "height" : "width", $r = vt + b[Ut], an = vt - b[Rr], ii = [zt, Nt].indexOf(m) !== -1, Ea = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Rl = ii ? $r : vt - _[Nn] - T[Nn] - Ea + I.altAxis, $l = ii ? vt + _[Nn] + T[Nn] - Ea - I.altAxis : an, yo = p && ii ? D8(Rl, vt, $l) : Es(p ? Rl : $r, vt, p ? $l : an);
      P[k] = yo, G[k] = yo - vt;
    }
    t.modifiersData[r] = G;
  }
}
const f7 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: d7,
  requiresIfExists: ["offset"]
};
function p7(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function h7(e) {
  return e === en(e) || !gn(e) ? Ag(e) : p7(e);
}
function m7(e) {
  var t = e.getBoundingClientRect(), n = va(t.width) / e.offsetWidth || 1, r = va(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function v7(e, t, n) {
  n === void 0 && (n = !1);
  var r = gn(t), o = gn(t) && m7(t), i = go(t), a = ga(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((or(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fg(i)) && (s = h7(t)), gn(t) ? (l = ga(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Dg(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function g7(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function y7(e) {
  var t = g7(e);
  return O8.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function b7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function S7(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var aS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function x7(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? aS : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, aS, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: c,
      setOptions: function(m) {
        var y = typeof m == "function" ? m(c.options) : m;
        h(), c.options = Object.assign({}, i, c.options, y), c.scrollParents = {
          reference: Qo(s) ? Os(s) : s.contextElement ? Os(s.contextElement) : [],
          popper: Os(l)
        };
        var S = y7(S7([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = S.filter(function(x) {
          return x.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, y = m.reference, S = m.popper;
          if (sS(y, S)) {
            c.rects = {
              reference: v7(y, Pl(S), c.options.strategy === "fixed"),
              popper: Rg(S)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
              return c.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var k = c.orderedModifiers[x], P = k.fn, _ = k.options, T = _ === void 0 ? {} : _, M = k.name;
              typeof P == "function" && (c = P({
                state: c,
                options: T,
                name: M,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: b7(function() {
        return new Promise(function(b) {
          p.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!sS(s, l))
      return p;
    p.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function g() {
      c.orderedModifiers.forEach(function(b) {
        var m = b.name, y = b.options, S = y === void 0 ? {} : y, x = b.effect;
        if (typeof x == "function") {
          var k = x({
            state: c,
            name: m,
            instance: p,
            options: S
          }), P = function() {
          };
          d.push(k || P);
        }
      });
    }
    function h() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return p;
  };
}
var w7 = [U8, u7, W8, R8, s7, n7, f7, z8, o7], C7 = /* @__PURE__ */ x7({
  defaultModifiers: w7
});
function K2(e = {}) {
  const {
    enabled: t = !0,
    modifiers: n,
    placement: r = "bottom",
    strategy: o = "absolute",
    arrowPadding: i = 8,
    eventListeners: a = !0,
    offset: s,
    gutter: l = 8,
    flip: u = !0,
    boundary: c = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, g = v.useRef(null), h = v.useRef(null), b = v.useRef(null), m = g8(r, p), y = v.useRef(() => {
  }), S = v.useCallback(() => {
    var I;
    !t || !g.current || !h.current || ((I = y.current) == null || I.call(y), b.current = C7(g.current, h.current, {
      placement: m,
      modifiers: [
        h8,
        d8,
        c8,
        {
          ...u8,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...l8(a)
        },
        {
          name: "arrow",
          options: { padding: i }
        },
        {
          name: "offset",
          options: {
            offset: s ?? [0, l]
          }
        },
        {
          name: "flip",
          enabled: !!u,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: c }
        },
        // allow users override internal modifiers
        ...n ?? []
      ],
      strategy: o
    }), b.current.forceUpdate(), y.current = b.current.destroy);
  }, [
    m,
    t,
    n,
    f,
    a,
    i,
    s,
    l,
    u,
    d,
    c,
    o
  ]);
  v.useEffect(() => () => {
    var I;
    !g.current && !h.current && ((I = b.current) == null || I.destroy(), b.current = null);
  }, []);
  const x = v.useCallback(
    (I) => {
      g.current = I, S();
    },
    [S]
  ), k = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(x, D)
    }),
    [x]
  ), P = v.useCallback(
    (I) => {
      h.current = I, S();
    },
    [S]
  ), _ = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(P, D),
      style: {
        ...I.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, P, f]
  ), T = v.useCallback((I = {}, D = null) => {
    const { size: G, shadowColor: H, bg: L, style: W, ...K } = I;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: k7(I)
    };
  }, []), M = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: D,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var I;
      (I = b.current) == null || I.update();
    },
    forceUpdate() {
      var I;
      (I = b.current) == null || I.forceUpdate();
    },
    transformOrigin: xt.transformOrigin.varRef,
    referenceRef: x,
    popperRef: P,
    getPopperProps: _,
    getArrowProps: T,
    getArrowInnerProps: M,
    getReferenceProps: k
  };
}
function k7(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function Y2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = ro(n), a = ro(t), [s, l] = v.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = v.useId(), f = o ?? `disclosure-${d}`, p = v.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), g = v.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), h = v.useCallback(() => {
    u ? p() : g();
  }, [u, g, p]);
  function b(y = {}) {
    return {
      ...y,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(S) {
        var x;
        (x = y.onClick) == null || x.call(y, S), h();
      }
    };
  }
  function m(y = {}) {
    return {
      ...y,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: g,
    onClose: p,
    onToggle: h,
    isControlled: c,
    getButtonProps: b,
    getDisclosureProps: m
  };
}
function P7(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = ro(n), a = v.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  v.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      Ip(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && Ip(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && Ip(d, t) && (a.isPointerDown = !1, o(d));
    }, c = q2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function Ip(e, t) {
  var n;
  const r = e.target;
  return r && !q2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function q2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function X2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = v.useState(t), [i, a] = v.useState(!1);
  return v.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), Sg(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = E9(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function Q2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  _7,
  T7,
  E7,
  O7
] = OP(), [M7, _l] = Je({
  strict: !1,
  name: "MenuContext"
});
function I7(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function Z2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function lS(e) {
  return Z2(e).activeElement === e;
}
function R7(e = {}) {
  const {
    id: t,
    closeOnSelect: n = !0,
    closeOnBlur: r = !0,
    initialFocusRef: o,
    autoSelect: i = !0,
    isLazy: a,
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: c,
    placement: d = "bottom-start",
    lazyBehavior: f = "unmount",
    direction: p,
    computePositionOnMount: g = !1,
    ...h
  } = e, b = v.useRef(null), m = v.useRef(null), y = E7(), S = v.useCallback(() => {
    requestAnimationFrame(() => {
      var z;
      (z = b.current) == null || z.focus({ preventScroll: !1 });
    });
  }, []), x = v.useCallback(() => {
    const z = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = y.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(z);
  }, [y, o]), k = v.useCallback(() => {
    const z = setTimeout(() => {
      const te = y.lastEnabled();
      te && H(te.index);
    });
    A.current.add(z);
  }, [y]), P = v.useCallback(() => {
    c == null || c(), i ? x() : S();
  }, [i, x, S, c]), { isOpen: _, onOpen: T, onClose: M, onToggle: I } = Y2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  P7({
    enabled: _ && r,
    ref: b,
    handler: (z) => {
      var te;
      (te = m.current) != null && te.contains(z.target) || M();
    }
  });
  const D = K2({
    ...h,
    enabled: _ || g,
    placement: d,
    direction: p
  }), [G, H] = v.useState(-1);
  fa(() => {
    _ || H(-1);
  }, [_]), L2(b, {
    focusRef: m,
    visible: _,
    shouldFocus: !0
  });
  const L = X2({ isOpen: _, ref: b }), [W, K] = I7(t, "menu-button", "menu-list"), $ = v.useCallback(() => {
    T(), S();
  }, [T, S]), A = v.useRef(/* @__PURE__ */ new Set([]));
  v.useEffect(() => {
    const z = A.current;
    return () => {
      z.forEach((te) => clearTimeout(te)), z.clear();
    };
  }, []);
  const j = v.useCallback(() => {
    T(), x();
  }, [x, T]), U = v.useCallback(() => {
    T(), k();
  }, [T, k]), V = v.useCallback(() => {
    var z, te;
    const le = Z2(b.current), ae = (z = b.current) == null ? void 0 : z.contains(le.activeElement);
    if (!(_ && !ae))
      return;
    const me = (te = y.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [_, G, y]), Y = v.useRef(null);
  return {
    openAndFocusMenu: $,
    openAndFocusFirstItem: j,
    openAndFocusLastItem: U,
    onTransitionEnd: V,
    unstable__animationState: L,
    descendants: y,
    popper: D,
    buttonId: W,
    menuId: K,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: _,
    onToggle: I,
    onOpen: T,
    onClose: M,
    menuRef: b,
    buttonRef: m,
    focusedIndex: G,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: H,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: Y
  };
}
function $7(e = {}, t = null) {
  const n = _l(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = v.useCallback(
    (l) => {
      const u = l.key, d = {
        Enter: i,
        ArrowDown: i,
        ArrowUp: a
      }[u];
      d && (l.preventDefault(), l.stopPropagation(), d(l));
    },
    [i, a]
  );
  return {
    ...e,
    ref: at(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": dn(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Le(e.onClick, r),
    onKeyDown: Le(e.onKeyDown, s)
  };
}
function gm(e) {
  var t;
  return j7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function A7(e = {}, t = null) {
  const n = _l();
  if (!n)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
    focusedIndex: r,
    setFocusedIndex: o,
    menuRef: i,
    isOpen: a,
    onClose: s,
    menuId: l,
    isLazy: u,
    lazyBehavior: c,
    unstable__animationState: d
  } = n, f = T7(), p = Q9({
    preventDefault: (m) => m.key !== " " && gm(m.target)
  }), g = v.useCallback(
    (m) => {
      if (!m.currentTarget.contains(m.target))
        return;
      const y = m.key, x = {
        Tab: (P) => P.preventDefault(),
        Escape: s,
        ArrowDown: () => {
          const P = f.nextEnabled(r);
          P && o(P.index);
        },
        ArrowUp: () => {
          const P = f.prevEnabled(r);
          P && o(P.index);
        }
      }[y];
      if (x) {
        m.preventDefault(), x(m);
        return;
      }
      const k = p((P) => {
        const _ = Z9(
          f.values(),
          P,
          (T) => {
            var M, I;
            return (I = (M = T == null ? void 0 : T.node) == null ? void 0 : M.textContent) != null ? I : "";
          },
          f.item(r)
        );
        if (_) {
          const T = f.indexOf(_.node);
          o(T);
        }
      });
      gm(m.target) && k(m);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), h = v.useRef(!1);
  a && (h.current = !0);
  const b = Q2({
    wasSelected: h.current,
    enabled: u,
    mode: c,
    isSelected: d.present
  });
  return {
    ...e,
    ref: at(i, t),
    children: b ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Le(e.onKeyDown, g)
  };
}
function D7(e = {}) {
  const { popper: t, isOpen: n } = _l();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function J2(e = {}, t = null) {
  const {
    onMouseEnter: n,
    onMouseMove: r,
    onMouseLeave: o,
    onClick: i,
    onFocus: a,
    isDisabled: s,
    isFocusable: l,
    closeOnSelect: u,
    type: c,
    ...d
  } = e, f = _l(), {
    setFocusedIndex: p,
    focusedIndex: g,
    closeOnSelect: h,
    onClose: b,
    menuRef: m,
    isOpen: y,
    menuId: S,
    rafId: x
  } = f, k = v.useRef(null), P = `${S}-menuitem-${v.useId()}`, { index: _, register: T } = O7({
    disabled: s && !l
  }), M = v.useCallback(
    ($) => {
      n == null || n($), !s && p(_);
    },
    [p, _, s, n]
  ), I = v.useCallback(
    ($) => {
      r == null || r($), k.current && !lS(k.current) && M($);
    },
    [M, r]
  ), D = v.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = v.useCallback(
    ($) => {
      i == null || i($), gm($.currentTarget) && (u ?? h) && b();
    },
    [b, i, h, u]
  ), H = v.useCallback(
    ($) => {
      a == null || a($), p(_);
    },
    [p, a, _]
  ), L = _ === g, W = s && !l;
  fa(() => {
    if (y)
      return L && !W && k.current ? (x.current && cancelAnimationFrame(x.current), x.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), x.current = null;
      })) : m.current && !lS(m.current) && m.current.focus({ preventScroll: !0 }), () => {
        x.current && cancelAnimationFrame(x.current);
      };
  }, [L, W, m, y]);
  const K = e8({
    onClick: G,
    onFocus: H,
    onMouseEnter: M,
    onMouseMove: I,
    onMouseLeave: D,
    ref: at(T, k, t),
    isDisabled: s,
    isFocusable: l
  });
  return {
    ...d,
    ...K,
    type: c ?? K.type,
    id: P,
    role: "menuitem",
    tabIndex: L ? 0 : -1
  };
}
function F7(e = {}, t = null) {
  const { type: n = "radio", isChecked: r, ...o } = e;
  return {
    ...J2(o, t),
    role: `menuitem${n}`,
    "aria-checked": r
  };
}
function L7(e = {}) {
  const {
    children: t,
    type: n = "radio",
    value: r,
    defaultValue: o,
    onChange: i,
    ...a
  } = e, l = n === "radio" ? "" : [], [u, c] = IP({
    defaultValue: o ?? l,
    value: r,
    onChange: i
  }), d = v.useCallback(
    (g) => {
      if (n === "radio" && typeof u == "string" && c(g), n === "checkbox" && Array.isArray(u)) {
        const h = u.includes(g) ? u.filter((b) => b !== g) : u.concat(g);
        c(h);
      }
    },
    [u, c, n]
  ), p = NP(t).map((g) => {
    if (g.type.id !== "MenuItemOption")
      return g;
    const h = (m) => {
      var y, S;
      d(g.props.value), (S = (y = g.props).onClick) == null || S.call(y, m);
    }, b = n === "radio" ? g.props.value === u : u.includes(g.props.value);
    return v.cloneElement(g, {
      type: n,
      onClick: h,
      isChecked: b
    });
  });
  return {
    ...a,
    children: p
  };
}
function j7(e) {
  var t;
  if (!z7(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function z7(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [N7, _a] = Je({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), nf = (e) => {
  const { children: t } = e, n = Ct("Menu", e), r = Cn(e), { direction: o } = mo(), { descendants: i, ...a } = R7({ ...r, direction: o }), s = v.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ w.jsx(_7, { value: i, children: /* @__PURE__ */ w.jsx(M7, { value: s, children: /* @__PURE__ */ w.jsx(N7, { value: n, children: Xn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
nf.displayName = "Menu";
var e_ = oe(
  (e, t) => {
    const n = _a();
    return /* @__PURE__ */ w.jsx(
      X.span,
      {
        ref: t,
        ...e,
        __css: n.command,
        className: "chakra-menu__command"
      }
    );
  }
);
e_.displayName = "MenuCommand";
var t_ = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = _a(), i = r.as || n ? n ?? void 0 : "button", a = v.useMemo(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...o.item
      }),
      [o.item]
    );
    return /* @__PURE__ */ w.jsx(X.button, { ref: t, type: i, ...r, __css: a });
  }
), rf = (e) => {
  const { className: t, children: n, ...r } = e, o = _a(), i = v.Children.only(n), a = v.isValidElement(i) ? v.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ie("chakra-menu__icon", i.props.className)
  }) : null, s = ie("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ w.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
rf.displayName = "MenuIcon";
var ss = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = J2(s, t), c = n || o ? /* @__PURE__ */ w.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ w.jsxs(
    t_,
    {
      ...l,
      className: ie("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ w.jsx(rf, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ w.jsx(e_, { marginStart: i, children: o })
      ]
    }
  );
});
ss.displayName = "MenuItem";
var V7 = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
}, B7 = X(ir.div), Lg = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = _l(), d = A7(s, n), f = D7(i), p = _a();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ w.jsx(
        B7,
        {
          variants: V7,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: ie("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: CC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
Lg.displayName = "MenuList";
var n_ = oe((e, t) => {
  const { title: n, children: r, className: o, ...i } = e, a = ie("chakra-menu__group__title", o), s = _a();
  return /* @__PURE__ */ w.jsxs("div", { ref: t, className: "chakra-menu__group", role: "group", children: [
    n && /* @__PURE__ */ w.jsx(X.p, { className: a, ...i, __css: s.groupTitle, children: n }),
    r
  ] });
});
n_.displayName = "MenuGroup";
var r_ = (e) => {
  const { className: t, title: n, ...r } = e, o = L7(r);
  return /* @__PURE__ */ w.jsx(
    n_,
    {
      title: n,
      className: ie("chakra-menu__option-group", t),
      ...o
    }
  );
};
r_.displayName = "MenuOptionGroup";
var W7 = oe((e, t) => {
  const n = _a();
  return /* @__PURE__ */ w.jsx(
    X.button,
    {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...n.button
      }
    }
  );
}), jg = oe(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = $7(o, t), a = r || W7;
    return /* @__PURE__ */ w.jsx(
      a,
      {
        ...i,
        className: ie("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ w.jsx(
          X.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
jg.displayName = "MenuButton";
var H7 = (e) => /* @__PURE__ */ w.jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ w.jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) }), zg = oe(
  (e, t) => {
    const { icon: n, iconSpacing: r = "0.75rem", ...o } = e, i = F7(o, t);
    return /* @__PURE__ */ w.jsxs(
      t_,
      {
        ...i,
        className: ie("chakra-menu__menuitem-option", o.className),
        children: [
          n !== null && /* @__PURE__ */ w.jsx(
            rf,
            {
              fontSize: "0.8em",
              marginEnd: r,
              opacity: e.isChecked ? 1 : 0,
              children: n || /* @__PURE__ */ w.jsx(H7, {})
            }
          ),
          /* @__PURE__ */ w.jsx("span", { style: { flex: 1 }, children: i.children })
        ]
      }
    );
  }
);
zg.id = "MenuItemOption";
zg.displayName = "MenuItemOption";
var U7 = {
  slideInBottom: {
    ...as,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...as,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...as,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...as,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...FP,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, G7 = X(ir.section), K7 = (e) => U7[e || "none"], o_ = v.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = K7(n), ...o } = e;
    return /* @__PURE__ */ w.jsx(G7, { ref: t, ...r, ...o });
  }
);
o_.displayName = "ModalTransition";
var Y7 = Object.defineProperty, q7 = (e, t, n) => t in e ? Y7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, X7 = (e, t, n) => (q7(e, typeof t != "symbol" ? t + "" : t, n), n), Q7 = class {
  constructor() {
    X7(this, "modals"), this.modals = /* @__PURE__ */ new Map();
  }
  add(e) {
    return this.modals.set(e, this.modals.size + 1), this.modals.size;
  }
  remove(e) {
    this.modals.delete(e);
  }
  isTopModal(e) {
    return e ? this.modals.get(e) === this.modals.size : !1;
  }
}, ym = new Q7();
function i_(e, t) {
  const [n, r] = v.useState(0);
  return v.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = ym.add(o);
        r(i);
      }
      return () => {
        ym.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var Z7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, di = /* @__PURE__ */ new WeakMap(), gu = /* @__PURE__ */ new WeakMap(), yu = {}, Rp = 0, a_ = function(e) {
  return e && (e.host || a_(e.parentNode));
}, J7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = a_(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, eW = function(e, t, n, r) {
  var o = J7(t, Array.isArray(e) ? e : [e]);
  yu[n] || (yu[n] = /* @__PURE__ */ new WeakMap());
  var i = yu[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), g = p !== null && p !== "false", h = (di.get(f) || 0) + 1, b = (i.get(f) || 0) + 1;
        di.set(f, h), i.set(f, b), a.push(f), h === 1 && g && gu.set(f, !0), b === 1 && f.setAttribute(n, "true"), g || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), Rp++, function() {
    a.forEach(function(d) {
      var f = di.get(d) - 1, p = i.get(d) - 1;
      di.set(d, f), i.set(d, p), f || (gu.has(d) || d.removeAttribute(r), gu.delete(d)), p || d.removeAttribute(n);
    }), Rp--, Rp || (di = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), gu = /* @__PURE__ */ new WeakMap(), yu = {});
  };
}, tW = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Z7(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), eW(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function nW(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = v.useRef(null), c = v.useRef(null), [d, f, p] = oW(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  rW(u, t && a);
  const g = i_(u, t), h = v.useRef(null), b = v.useCallback((M) => {
    h.current = M.target;
  }, []), m = v.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [y, S] = v.useState(!1), [x, k] = v.useState(!1), P = v.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": y ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: Le(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, y]
  ), _ = v.useCallback(
    (M) => {
      M.stopPropagation(), h.current === M.target && ym.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), T = v.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: Le(M.onClick, _),
      onKeyDown: Le(M.onKeyDown, m),
      onMouseDown: Le(M.onMouseDown, b)
    }),
    [m, b, _]
  );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: S,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: P,
    getDialogContainerProps: T,
    index: g
  };
}
function rW(e, t) {
  const n = e.current;
  v.useEffect(() => {
    if (!(!e.current || !t))
      return tW(e.current);
  }, [t, e, n]);
}
function oW(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [iW, Ta] = Je({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [aW, co] = Je({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Tl = (e) => {
  const t = {
    scrollBehavior: "outside",
    autoFocus: !0,
    trapFocus: !0,
    returnFocusOnClose: !0,
    blockScrollOnMount: !0,
    allowPinchZoom: !1,
    motionPreset: "scale",
    lockFocusAcrossFrames: !0,
    ...e
  }, {
    portalProps: n,
    children: r,
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p,
    onCloseComplete: g
  } = t, h = Ct("Modal", t), m = {
    ...nW(t),
    autoFocus: o,
    trapFocus: i,
    initialFocusRef: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: u,
    allowPinchZoom: c,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p
  };
  return /* @__PURE__ */ w.jsx(aW, { value: m, children: /* @__PURE__ */ w.jsx(iW, { value: h, children: /* @__PURE__ */ w.jsx(ri, { onExitComplete: g, children: m.isOpen && /* @__PURE__ */ w.jsx(vl, { ...n, children: r }) }) }) });
};
Tl.displayName = "Modal";
var tc = "right-scroll-bar-position", nc = "width-before-scroll-bar", sW = "with-scroll-bars-hidden", lW = "--removed-body-scroll-bar-size", s_ = JP(), $p = function() {
}, of = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: $p,
    onWheelCapture: $p,
    onTouchMoveCapture: $p
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, g = e.inert, h = e.allowPinchZoom, b = e.as, m = b === void 0 ? "div" : b, y = e.gapMode, S = XP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, k = qP([n, t]), P = qn(qn({}, S), o);
  return v.createElement(
    v.Fragment,
    null,
    c && v.createElement(x, { sideCar: s_, removeScrollBar: u, shards: d, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!h, lockRef: n, gapMode: y }),
    a ? v.cloneElement(v.Children.only(s), qn(qn({}, P), { ref: k })) : v.createElement(m, qn({}, P, { className: l, ref: k }), s)
  );
});
of.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
of.classNames = {
  fullWidth: nc,
  zeroRight: tc
};
var uS, uW = function() {
  if (uS)
    return uS;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function cW() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = uW();
  return t && e.setAttribute("nonce", t), e;
}
function dW(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function fW(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var pW = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = cW()) && (dW(t, n), fW(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, hW = function() {
  var e = pW();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, l_ = function() {
  var e = hW(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, mW = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ap = function(e) {
  return parseInt(e || "", 10) || 0;
}, vW = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ap(n), Ap(r), Ap(o)];
}, gW = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return mW;
  var t = vW(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yW = l_(), bW = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(sW, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(tc, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(nc, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(tc, " .").concat(tc, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(nc, " .").concat(nc, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(lW, ": ").concat(s, `px;
  }
`);
}, SW = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = v.useMemo(function() {
    return gW(o);
  }, [o]);
  return v.createElement(yW, { styles: bW(i, !t, o, n ? "" : "!important") });
}, bm = !1;
if (typeof window < "u")
  try {
    var bu = Object.defineProperty({}, "passive", {
      get: function() {
        return bm = !0, !0;
      }
    });
    window.addEventListener("test", bu, bu), window.removeEventListener("test", bu, bu);
  } catch {
    bm = !1;
  }
var fi = bm ? { passive: !1 } : !1, xW = function(e) {
  return e.tagName === "TEXTAREA";
}, u_ = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !xW(e) && n[t] === "visible")
  );
}, wW = function(e) {
  return u_(e, "overflowY");
}, CW = function(e) {
  return u_(e, "overflowX");
}, cS = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = c_(e, r);
    if (o) {
      var i = d_(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, kW = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, PW = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, c_ = function(e, t) {
  return e === "v" ? wW(t) : CW(t);
}, d_ = function(e, t) {
  return e === "v" ? kW(t) : PW(t);
}, _W = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, TW = function(e, t, n, r, o) {
  var i = _W(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = d_(e, s), g = p[0], h = p[1], b = p[2], m = h - b - i * g;
    (g || m) && c_(e, s) && (d += m, f += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Su = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, dS = function(e) {
  return [e.deltaX, e.deltaY];
}, fS = function(e) {
  return e && "current" in e ? e.current : e;
}, EW = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, OW = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, MW = 0, pi = [];
function IW(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(MW++)[0], i = v.useState(l_)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = O6([e.lockRef.current], (e.shards || []).map(fS), !0).filter(Boolean);
      return h.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(h, b) {
    if ("touches" in h && h.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = Su(h), y = n.current, S = "deltaX" in h ? h.deltaX : y[0] - m[0], x = "deltaY" in h ? h.deltaY : y[1] - m[1], k, P = h.target, _ = Math.abs(S) > Math.abs(x) ? "h" : "v";
    if ("touches" in h && _ === "h" && P.type === "range")
      return !1;
    var T = cS(_, P);
    if (!T)
      return !0;
    if (T ? k = _ : (k = _ === "v" ? "h" : "v", T = cS(_, P)), !T)
      return !1;
    if (!r.current && "changedTouches" in h && (S || x) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return TW(M, b, h, M === "h" ? S : x, !0);
  }, []), l = v.useCallback(function(h) {
    var b = h;
    if (!(!pi.length || pi[pi.length - 1] !== i)) {
      var m = "deltaY" in b ? dS(b) : Su(b), y = t.current.filter(function(k) {
        return k.name === b.type && (k.target === b.target || b.target === k.shadowParent) && EW(k.delta, m);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var S = (a.current.shards || []).map(fS).filter(Boolean).filter(function(k) {
          return k.contains(b.target);
        }), x = S.length > 0 ? s(b, S[0]) : !a.current.noIsolation;
        x && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(h, b, m, y) {
    var S = { name: h, delta: b, target: m, should: y, shadowParent: RW(m) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== S;
      });
    }, 1);
  }, []), c = v.useCallback(function(h) {
    n.current = Su(h), r.current = void 0;
  }, []), d = v.useCallback(function(h) {
    u(h.type, dS(h), h.target, s(h, e.lockRef.current));
  }, []), f = v.useCallback(function(h) {
    u(h.type, Su(h), h.target, s(h, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return pi.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, fi), document.addEventListener("touchmove", l, fi), document.addEventListener("touchstart", c, fi), function() {
      pi = pi.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", l, fi), document.removeEventListener("touchmove", l, fi), document.removeEventListener("touchstart", c, fi);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    g ? v.createElement(i, { styles: OW(o) }) : null,
    p ? v.createElement(SW, { gapMode: e.gapMode }) : null
  );
}
function RW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const $W = M6(s_, IW);
var f_ = v.forwardRef(function(e, t) {
  return v.createElement(of, qn({}, e, { ref: t, sideCar: $W }));
});
f_.classNames = of.classNames;
const AW = f_;
function p_(e) {
  const {
    autoFocus: t,
    trapFocus: n,
    dialogRef: r,
    initialFocusRef: o,
    blockScrollOnMount: i,
    allowPinchZoom: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: u,
    lockFocusAcrossFrames: c,
    isOpen: d
  } = co(), [f, p] = lP();
  v.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = i_(r, d);
  return /* @__PURE__ */ w.jsx(
    I2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ w.jsx(
        AW,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: g === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var af = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = co(), u = s(a, t), c = l(o), d = ie("chakra-modal__content", n), f = Ta(), p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog
    }, g = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer
    }, { motionPreset: h } = co();
    return /* @__PURE__ */ w.jsx(p_, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: g,
        children: /* @__PURE__ */ w.jsx(
          o_,
          {
            preset: h,
            motionProps: i,
            className: d,
            ...u,
            __css: p,
            children: r
          }
        )
      }
    ) });
  }
);
af.displayName = "ModalContent";
var [DW, FW] = Je(), LW = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function jW(e, t) {
  var n, r;
  if (e)
    return (r = (n = LW[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function zW(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = mo(), l = (t = s.components) == null ? void 0 : t.Drawer, u = jW(o, s.direction);
  return /* @__PURE__ */ w.jsx(DW, { value: { placement: u }, children: /* @__PURE__ */ w.jsx(
    Tl,
    {
      isOpen: n,
      onClose: r,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var NW = X(LP), h_ = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = co(), c = s(a, t), d = l(i), f = ie("chakra-modal__content", n), p = Ta(), g = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, h = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: b } = FW();
    return /* @__PURE__ */ w.jsx(p_, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: h,
        children: /* @__PURE__ */ w.jsx(
          NW,
          {
            motionProps: o,
            direction: b,
            in: u,
            className: f,
            ...c,
            __css: g,
            children: r
          }
        )
      }
    ) });
  }
);
h_.displayName = "DrawerContent";
var El = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = co();
    v.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ie("chakra-modal__header", n), l = {
      flex: 0,
      ...Ta().header
    };
    return /* @__PURE__ */ w.jsx(
      X.header,
      {
        ref: t,
        className: a,
        id: o,
        ...r,
        __css: l
      }
    );
  }
);
El.displayName = "ModalHeader";
var VW = X(ir.div), Ol = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ie("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Ta().overlay
    }, { motionPreset: u } = co(), d = o || (u === "none" ? {} : DP);
    return /* @__PURE__ */ w.jsx(
      VW,
      {
        ...d,
        __css: l,
        ref: t,
        className: a,
        ...i
      }
    );
  }
);
Ol.displayName = "ModalOverlay";
var Ml = oe((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = co();
  v.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ie("chakra-modal__body", n), s = Ta();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      className: a,
      id: o,
      ...r,
      __css: s.body
    }
  );
});
Ml.displayName = "ModalBody";
var sf = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = co(), a = ie("chakra-modal__close-btn", r), s = Ta();
    return /* @__PURE__ */ w.jsx(
      Qd,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: Le(n, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
sf.displayName = "ModalCloseButton";
var [BW, oi] = Je({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [WW, Il] = Je({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), m_ = oe(
  function(t, n) {
    const { getHeaderProps: r } = oi(), o = Il();
    return /* @__PURE__ */ w.jsx(
      X.header,
      {
        ...r(t, n),
        className: ie("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
m_.displayName = "PopoverHeader";
function Ng(e) {
  const t = v.Children.only(e.children), { getTriggerProps: n } = oi();
  return v.cloneElement(t, n(t.props, t.ref));
}
Ng.displayName = "PopoverTrigger";
var hi = {
  click: "click",
  hover: "hover"
};
function HW(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = hi.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: g,
    ...h
  } = e, { isOpen: b, onClose: m, onOpen: y, onToggle: S } = Y2(e), x = v.useRef(null), k = v.useRef(null), P = v.useRef(null), _ = v.useRef(!1), T = v.useRef(!1);
  b && (T.current = !0);
  const [M, I] = v.useState(!1), [D, G] = v.useState(!1), H = v.useId(), L = o ?? H, [W, K, $, A] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((fe) => `${fe}-${L}`), {
    referenceRef: j,
    getArrowProps: U,
    getPopperProps: V,
    getArrowInnerProps: Y,
    forceUpdate: z
  } = K2({
    ...h,
    enabled: b || !!g
  }), te = X2({ isOpen: b, ref: P });
  y6({
    enabled: b,
    ref: k
  }), L2(P, {
    focusRef: k,
    visible: b,
    shouldFocus: i && u === hi.click
  }), r8(P, {
    focusRef: r,
    visible: b,
    shouldFocus: a && u === hi.click
  });
  const le = Q2({
    wasSelected: T.current,
    enabled: f,
    mode: p,
    isSelected: te.present
  }), ae = v.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        style: {
          ...fe.style,
          transformOrigin: xt.transformOrigin.varRef,
          [xt.arrowSize.var]: s ? `${s}px` : void 0,
          [xt.arrowShadowColor.var]: l
        },
        ref: at(P, mt),
        children: le ? fe.children : null,
        id: K,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Le(fe.onKeyDown, (Ut) => {
          n && Ut.key === "Escape" && m();
        }),
        onBlur: Le(fe.onBlur, (Ut) => {
          const Rr = pS(Ut), vt = Dp(P.current, Rr), Nn = Dp(k.current, Rr);
          b && t && (!vt && !Nn) && m();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === hi.hover && (Ge.role = "tooltip", Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        _.current = !0;
      }), Ge.onMouseLeave = Le(
        fe.onMouseLeave,
        (Ut) => {
          Ut.nativeEvent.relatedTarget !== null && (_.current = !1, setTimeout(() => m(), d));
        }
      )), Ge;
    },
    [
      le,
      K,
      M,
      $,
      D,
      A,
      u,
      n,
      m,
      b,
      t,
      d,
      l,
      s
    ]
  ), se = v.useCallback(
    (fe = {}, mt = null) => V(
      {
        ...fe,
        style: {
          visibility: b ? "visible" : "hidden",
          ...fe.style
        }
      },
      mt
    ),
    [b, V]
  ), me = v.useCallback(
    (fe, mt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(mt, x, j)
    }),
    [x, j]
  ), ke = v.useRef(), et = v.useRef(), qe = v.useCallback(
    (fe) => {
      x.current == null && j(fe);
    },
    [j]
  ), on = v.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, mt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": b,
        "aria-controls": K
      };
      return u === hi.click && (Ge.onClick = Le(fe.onClick, S)), u === hi.hover && (Ge.onFocus = Le(fe.onFocus, () => {
        ke.current === void 0 && y();
      }), Ge.onBlur = Le(fe.onBlur, (Ut) => {
        const Rr = pS(Ut), vt = !Dp(P.current, Rr);
        b && t && vt && m();
      }), Ge.onKeyDown = Le(fe.onKeyDown, (Ut) => {
        Ut.key === "Escape" && m();
      }), Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        _.current = !0, ke.current = window.setTimeout(() => y(), c);
      }), Ge.onMouseLeave = Le(fe.onMouseLeave, () => {
        _.current = !1, ke.current && (clearTimeout(ke.current), ke.current = void 0), et.current = window.setTimeout(() => {
          _.current === !1 && m();
        }, d);
      })), Ge;
    },
    [
      W,
      b,
      K,
      u,
      qe,
      S,
      y,
      t,
      m,
      c,
      d
    ]
  );
  v.useEffect(() => () => {
    ke.current && clearTimeout(ke.current), et.current && clearTimeout(et.current);
  }, []);
  const Pn = v.useCallback(
    (fe = {}, mt = null) => ({
      ...fe,
      id: $,
      ref: at(mt, (Ge) => {
        I(!!Ge);
      })
    }),
    [$]
  ), Ir = v.useCallback(
    (fe = {}, mt = null) => ({
      ...fe,
      id: A,
      ref: at(mt, (Ge) => {
        G(!!Ge);
      })
    }),
    [A]
  );
  return {
    forceUpdate: z,
    isOpen: b,
    onAnimationComplete: te.onComplete,
    onClose: m,
    getAnchorProps: me,
    getArrowProps: U,
    getArrowInnerProps: Y,
    getPopoverPositionerProps: se,
    getPopoverProps: ae,
    getTriggerProps: on,
    getHeaderProps: Pn,
    getBodyProps: Ir
  };
}
function Dp(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function pS(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Vg(e) {
  const t = Ct("Popover", e), { children: n, ...r } = Cn(e), o = mo(), i = HW({ ...r, direction: o.direction });
  return /* @__PURE__ */ w.jsx(BW, { value: i, children: /* @__PURE__ */ w.jsx(WW, { value: t, children: Xn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Vg.displayName = "Popover";
var Fp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Bg(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = oi(), c = Il(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          className: ie("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Fp("colors", s),
            "--popper-arrow-bg": Fp("colors", d),
            "--popper-arrow-shadow": Fp("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
Bg.displayName = "PopoverArrow";
var Wg = oe(
  function(t, n) {
    const { getBodyProps: r } = oi(), o = Il();
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...r(t, n),
        className: ie("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
Wg.displayName = "PopoverBody";
var Hg = oe(
  function(t, n) {
    const { onClose: r } = oi(), o = Il();
    return /* @__PURE__ */ w.jsx(
      Qd,
      {
        size: "sm",
        onClick: r,
        className: ie("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: n,
        ...t
      }
    );
  }
);
Hg.displayName = "PopoverCloseButton";
function UW(e) {
  if (e)
    return {
      enter: {
        ...e.enter,
        visibility: "visible"
      },
      exit: {
        ...e.exit,
        transitionEnd: {
          visibility: "hidden"
        }
      }
    };
}
var GW = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
}, KW = X(ir.section), v_ = oe(function(t, n) {
  const { variants: r = GW, ...o } = t, { isOpen: i } = oi();
  return /* @__PURE__ */ w.jsx(
    KW,
    {
      ref: n,
      variants: UW(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
v_.displayName = "PopoverTransition";
var Ug = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = oi(), u = Il(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...s(r),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ w.jsx(
          v_,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: CC(
              l,
              i.onAnimationComplete
            ),
            className: ie("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
Ug.displayName = "PopoverContent";
var [YW, g_] = Je({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), y_ = oe((e, t) => {
  const n = Ct("Tag", e), r = Cn(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ w.jsx(YW, { value: n, children: /* @__PURE__ */ w.jsx(X.span, { ref: t, ...r, __css: o }) });
});
y_.displayName = "Tag";
var qW = oe((e, t) => {
  const n = g_();
  return /* @__PURE__ */ w.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
qW.displayName = "TagLabel";
var XW = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
XW.displayName = "TagLeftIcon";
var QW = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
QW.displayName = "TagRightIcon";
var b_ = (e) => /* @__PURE__ */ w.jsx(kn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ w.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
b_.displayName = "TagCloseIcon";
var ZW = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...g_().closeButton
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        ref: t,
        "aria-label": "close",
        ...o,
        type: "button",
        disabled: n,
        __css: a,
        children: r || /* @__PURE__ */ w.jsx(b_, {})
      }
    );
  }
);
ZW.displayName = "TagCloseButton";
var JW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, eH = Object.defineProperty, tH = Object.defineProperties, nH = Object.getOwnPropertyDescriptors, Qc = Object.getOwnPropertySymbols, S_ = Object.prototype.hasOwnProperty, x_ = Object.prototype.propertyIsEnumerable, hS = (e, t, n) => t in e ? eH(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, mS = (e, t) => {
  for (var n in t || (t = {}))
    S_.call(t, n) && hS(e, n, t[n]);
  if (Qc)
    for (var n of Qc(t))
      x_.call(t, n) && hS(e, n, t[n]);
  return e;
}, rH = (e, t) => tH(e, nH(t)), oH = (e, t) => {
  var n = {};
  for (var r in e)
    S_.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Qc)
    for (var r of Qc(e))
      t.indexOf(r) < 0 && x_.call(e, r) && (n[r] = e[r]);
  return n;
}, Ht = (e, t, n) => {
  const r = v.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = oH(a, ["color", "size", "stroke", "children"]);
      return v.createElement(
        "svg",
        mS(rH(mS({
          ref: i
        }, JW), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => v.createElement(f, p)), ...c || []]
      );
    }
  );
  return r.propTypes = {
    color: Co.string,
    size: Co.oneOfType([Co.string, Co.number]),
    stroke: Co.oneOfType([Co.string, Co.number])
  }, r.displayName = `${t}`, r;
}, vS = Ht("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]), iH = Ht("chevron-up", "IconChevronUp", [
  ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]
]), aH = Ht("file-import", "IconFileImport", [
  ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
  [
    "path",
    {
      d: "M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3",
      key: "svg-1"
    }
  ]
]), w_ = Ht("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), sH = Ht("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), lH = Ht("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), uH = Ht("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), C_ = Ht("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), cH = Ht("settings", "IconSettings", [
  [
    "path",
    {
      d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]
]), dH = Ht("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), k_ = Ht("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), P_ = Ht("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), fH = Ht(
  "triangle-inverted-filled",
  "IconTriangleInvertedFilled",
  [
    [
      "path",
      {
        d: "M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z",
        fill: "currentColor",
        key: "svg-0",
        strokeWidth: "0"
      }
    ]
  ]
), pH = Ht("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
let xu;
const hH = new Uint8Array(16);
function mH() {
  if (!xu && (xu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !xu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return xu(hH);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function vH(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const gH = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), gS = {
  randomUUID: gH
};
function yH(e, t, n) {
  if (gS.randomUUID && !t && !e)
    return gS.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || mH)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return vH(r);
}
async function Gg(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function ba(e, t) {
  const n = e + "/" + Date.now() + ".json";
  SH(n, t);
  try {
    return await (await fetch("/workspace/save_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ table: e, json: t })
    })).text();
  } catch (r) {
    console.error("Error saving workspace:", r);
  }
}
async function bH(e, t) {
  try {
    return await (await fetch("/workspace/update_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
  } catch (n) {
    alert("Error saving workflow .json file: " + n), console.error("Error saving workspace:", n);
  }
}
async function __(e) {
  try {
    return await (await fetch("/workspace/delete_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e
      })
    })).text();
  } catch (t) {
    console.error("Error deleting file:", t);
  }
}
async function SH(e, t) {
  try {
    return await (await fetch("/workspace/save_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
  } catch (n) {
    console.error("Error saving workspace backup:", n);
  }
}
async function xH(e) {
  try {
    return await (await fetch("/workspace/list_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dir: e
      })
    })).text();
  } catch (t) {
    console.error("Error saving workspace:", t);
  }
}
async function wH() {
  try {
    return await (await fetch("/workspace/get_my_workflows_dir")).text();
  } catch (e) {
    console.error("Error getting workflows dir:", e);
  }
}
async function CH(e) {
  try {
    const n = await (await fetch("/workspace/get_system_dir", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        absolute_dir: e
      })
    })).json();
    return console.log("getSystemDir", n), n;
  } catch (t) {
    console.error("Error getting workflows dir:", t);
  }
}
const yS = "CWM_WORKFLOWS_SORT_TYPE";
var Ur = /* @__PURE__ */ ((e) => (e.RECENTLY_MODIFIED = "newst", e.OLDEST_MODIFIED = "oldest", e.AZ = "name A-Z", e.ZA = "name Z-A", e))(Ur || {});
function kH(e) {
  return e = e.replace(/[\\/:*?"<>|]/g, "_"), e.trim();
}
function T_(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
function E_(e = [], t = Ur.RECENTLY_MODIFIED) {
  const n = [...e];
  if (n.length)
    switch (t) {
      case Ur.AZ:
        n.sort((r, o) => r.name.localeCompare(o.name));
        break;
      case Ur.ZA:
        n.sort((r, o) => o.name.localeCompare(r.name));
        break;
      case Ur.RECENTLY_MODIFIED:
        n.sort((r, o) => o.updateTime - r.updateTime);
        break;
      case Ur.OLDEST_MODIFIED:
        n.sort((r, o) => r.updateTime - o.updateTime);
        break;
    }
  return n;
}
let _e, Ce = null, rc = null;
async function PH() {
  const e = async () => {
    let r = await Gg("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), _e = JSON.parse(r ?? "{}");
  }, t = async () => {
    Ce = await TH();
  }, n = async () => {
    rc = await Zc.load();
  };
  await Promise.all([e(), t(), n()]);
}
function Sm(e, t) {
  if (_e == null)
    return;
  const n = _e[e];
  if (n == null)
    return;
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  if (o !== i) {
    if (_e[e] = {
      ..._e[e],
      ...t,
      updateTime: Date.now()
    }, localStorage.setItem("workspace", JSON.stringify(_e)), ba("workflows", JSON.stringify(_e)), t.name != null) {
      n.filePath && __(n.filePath), xm(e);
      return;
    }
    t.json != null && xm(e);
  }
}
function xm(e) {
  if (_e == null)
    return;
  const t = _e[e];
  if (t == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", e);
    return;
  }
  const n = kH(t.name) + ".json";
  _e[e].filePath = n, bH(n, t.json);
}
function wm({
  json: e,
  name: t
}) {
  if (_e == null)
    throw new Error("workspace is not loaded");
  const n = yH();
  return _e[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(_e)), ba("workflows", JSON.stringify(_e)), xm(n), _e[n];
}
function oc(e) {
  if (_e == null)
    throw new Error("workspace is not loaded");
  const t = Object.values(_e);
  return e ? E_(t, e) : t.sort((n, r) => r.updateTime - n.updateTime);
}
function _H(e) {
  var n;
  if (_e == null)
    throw new Error("workspace is not loaded");
  const t = (n = _e[e]) == null ? void 0 : n.filePath;
  delete _e[e], localStorage.setItem("workspace", JSON.stringify(_e)), ba("workflows", JSON.stringify(_e)), t != null && __(t);
}
async function TH() {
  let e = await Gg("tags"), t = JSON.parse(e ?? "{}") ?? {};
  return {
    tags: t,
    // Expose the tags array publicly
    listAll() {
      return Object.values(t).sort((n, r) => r.updateTime - n.updateTime);
    },
    upsert(n) {
      return t[n] == null && (t[n] = {
        name: n,
        workflowIDs: [],
        updateTime: Date.now()
      }), t[n].updateTime = Date.now(), ba("tags", JSON.stringify(t)), t[n];
    },
    delete(n) {
      delete t[n], ba("tags", JSON.stringify(t));
    }
  };
}
function EH() {
  return JSON.stringify({
    [Zc.TABLE_NAME]: rc == null ? void 0 : rc.records,
    tags: Ce == null ? void 0 : Ce.tags,
    workflows: _e
  });
}
const Io = class Io {
  constructor() {
    bf(this, "records");
    this.records = {};
  }
  upsert(t) {
    this.records = {
      ...this.records,
      ...t
    }, ba(Io.TABLE_NAME, JSON.stringify(this.records)), localStorage.setItem("comfyspace", EH());
  }
  static async load() {
    const t = new Io();
    let n = await Gg(Io.TABLE_NAME), r = n != null ? JSON.parse(n) : null;
    if (r == null) {
      const o = localStorage.getItem("comfyspace") ?? "{}", i = JSON.parse(o);
      r = i[Io.TABLE_NAME], console.log("userSettings", i.userSettings);
    }
    return r != null && (t.records = r), t;
  }
};
bf(Io, "TABLE_NAME", "userSettings");
let Zc = Io;
const O_ = v.createContext({
  curFlowID: null
}), M_ = v.createContext({});
function OH({ onclose: e }) {
  const [t, n] = v.useState([]), r = async () => {
    const o = await xH("workflows");
    if (o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return v.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ w.jsxs(Tl, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ w.jsx(Ol, {}),
    /* @__PURE__ */ w.jsxs(af, { children: [
      /* @__PURE__ */ w.jsx(El, { children: "Backups" }),
      /* @__PURE__ */ w.jsx(sf, {}),
      /* @__PURE__ */ w.jsx(Ml, { children: /* @__PURE__ */ w.jsx(zP, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ w.jsxs($P, { children: [
          /* @__PURE__ */ w.jsx("h2", { children: /* @__PURE__ */ w.jsxs(MP, { children: [
            /* @__PURE__ */ w.jsxs(Fe, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              T_(i)
            ] }),
            /* @__PURE__ */ w.jsx(RP, {})
          ] }) }),
          /* @__PURE__ */ w.jsx(jP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ w.jsx(Fe, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function MH({ onclose: e }) {
  const [t, n] = v.useState((Ce == null ? void 0 : Ce.listAll()) ?? []);
  return /* @__PURE__ */ w.jsxs(Tl, { isOpen: !0, onClose: e, children: [
    /* @__PURE__ */ w.jsx(Ol, {}),
    /* @__PURE__ */ w.jsxs(af, { children: [
      /* @__PURE__ */ w.jsx(El, { children: "My Tags" }),
      /* @__PURE__ */ w.jsx(sf, {}),
      /* @__PURE__ */ w.jsx(Ml, { children: t.map((r) => /* @__PURE__ */ w.jsxs(_t, { children: [
        /* @__PURE__ */ w.jsx(y_, { children: r.name }),
        /* @__PURE__ */ w.jsx(
          ol,
          {
            onClick: () => {
              Ce == null || Ce.delete(r.name), n((Ce == null ? void 0 : Ce.listAll()) ?? []);
            },
            "aria-label": "delete-tag",
            colorScheme: "red",
            variant: "ghost",
            icon: /* @__PURE__ */ w.jsx(P_, {})
          }
        )
      ] })) })
    ] })
  ] });
}
function IH({
  onclose: e
}) {
  const [t, n] = v.useState(null), r = async (o) => {
    const i = await wH();
    n(i ?? null);
  };
  return v.useEffect(() => {
    r();
  }), /* @__PURE__ */ w.jsxs(Tl, { isOpen: !0, onClose: e, size: "2xl", children: [
    /* @__PURE__ */ w.jsx(Ol, {}),
    /* @__PURE__ */ w.jsxs(af, { children: [
      /* @__PURE__ */ w.jsx(El, { children: "Settings" }),
      /* @__PURE__ */ w.jsx(sf, {}),
      /* @__PURE__ */ w.jsxs(Ml, { children: [
        /* @__PURE__ */ w.jsx(nr, { fontWeight: 600, mb: 3, children: "Workspace Save Directory (🚧 Under development, not working)" }),
        /* @__PURE__ */ w.jsxs(_t, { children: [
          /* @__PURE__ */ w.jsx(nr, { children: t }),
          /* @__PURE__ */ w.jsx(
            jn,
            {
              onClick: () => {
                CH();
              },
              paddingLeft: 10,
              paddingRight: 10,
              size: "sm",
              leftIcon: /* @__PURE__ */ w.jsx(w_, {}),
              colorScheme: "teal",
              children: "Choose Folder"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const wu = 16;
function RH({}) {
  const { isOpen: e, onOpen: t, onClose: n } = V9(), [r, o] = v.useState(!1), [i, a] = v.useState(!1), { colorMode: s, toggleColorMode: l } = Pa();
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs(nf, { isLazy: !0, children: [
      /* @__PURE__ */ w.jsx(
        jg,
        {
          as: ol,
          "aria-label": "Options",
          icon: /* @__PURE__ */ w.jsx(lH, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ w.jsxs(Lg, { children: [
        /* @__PURE__ */ w.jsx(
          ss,
          {
            onClick: () => a(!0),
            icon: /* @__PURE__ */ w.jsx(cH, { size: 16 }),
            fontSize: 16,
            children: "Settings"
          }
        ),
        /* @__PURE__ */ w.jsx(
          ss,
          {
            onClick: () => o(!0),
            icon: /* @__PURE__ */ w.jsx(k_, { size: wu }),
            fontSize: 16,
            children: "Manage Tags"
          }
        ),
        /* @__PURE__ */ w.jsxs(
          ss,
          {
            onClick: l,
            icon: s === "light" ? /* @__PURE__ */ w.jsx(uH, { size: wu }) : /* @__PURE__ */ w.jsx(dH, { size: wu }),
            fontSize: 16,
            children: [
              s === "light" ? "Dark" : "Light",
              " Mode"
            ]
          }
        ),
        /* @__PURE__ */ w.jsx(
          ss,
          {
            onClick: t,
            icon: /* @__PURE__ */ w.jsx(sH, { size: wu }),
            fontSize: 16,
            children: "Backups (Experimental)"
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ w.jsx(MH, { onclose: () => o(!1) }),
    i && /* @__PURE__ */ w.jsx(IH, { onclose: () => a(!1) }),
    e && /* @__PURE__ */ w.jsx(OH, { onclose: n })
  ] });
}
function bS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bS(Object(n), !0).forEach(function(r) {
      ji(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bS(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $H(e) {
  if (Array.isArray(e))
    return e;
}
function AH(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, u = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        l = !1;
      } else
        for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0)
          ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a))
          return;
      } finally {
        if (u)
          throw o;
      }
    }
    return s;
  }
}
function Cm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function I_(e, t) {
  if (e) {
    if (typeof e == "string")
      return Cm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Cm(e, t);
  }
}
function DH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xr(e, t) {
  return $H(e) || AH(e, t) || I_(e, t) || DH();
}
function Mr(e, t) {
  if (e == null)
    return {};
  var n = HP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var FH = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function LH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, g = Mr(e, FH), h = v.useState(s !== void 0 ? s : n), b = xr(h, 2), m = b[0], y = b[1], S = v.useState(l !== void 0 ? l : o), x = xr(S, 2), k = x[0], P = x[1], _ = v.useState(p !== void 0 ? p : a), T = xr(_, 2), M = T[0], I = T[1], D = v.useCallback(function(A, j) {
    typeof u == "function" && u(A, j), I(A);
  }, [u]), G = v.useCallback(function(A, j) {
    var U;
    typeof c == "function" && (U = c(A, j)), y(U !== void 0 ? U : A);
  }, [c]), H = v.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = v.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), W = s !== void 0 ? s : m, K = l !== void 0 ? l : k, $ = p !== void 0 ? p : M;
  return Z(Z({}, g), {}, {
    inputValue: W,
    menuIsOpen: K,
    onChange: D,
    onInputChange: G,
    onMenuClose: L,
    onMenuOpen: H,
    value: $
  });
}
function jH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function SS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, o2(r.key), r);
  }
}
function zH(e, t, n) {
  return t && SS(e.prototype, t), n && SS(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function NH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Gc(e, t);
}
function Jc(e) {
  return Jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Jc(e);
}
function VH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function BH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function WH(e, t) {
  if (t && (Xo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return BH(e);
}
function HH(e) {
  var t = VH();
  return function() {
    var r = Jc(e), o;
    if (t) {
      var i = Jc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return WH(this, o);
  };
}
function UH(e) {
  if (Array.isArray(e))
    return Cm(e);
}
function GH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function KH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R_(e) {
  return UH(e) || GH(e) || I_(e) || KH();
}
function YH(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const qH = Math.min, XH = Math.max, ed = Math.round, Cu = Math.floor, td = (e) => ({
  x: e,
  y: e
});
function QH(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function $_(e) {
  return D_(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function A_(e) {
  var t;
  return (t = (D_(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function D_(e) {
  return e instanceof Node || e instanceof Fn(e).Node;
}
function km(e) {
  return e instanceof Element || e instanceof Fn(e).Element;
}
function Kg(e) {
  return e instanceof HTMLElement || e instanceof Fn(e).HTMLElement;
}
function xS(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fn(e).ShadowRoot;
}
function F_(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Yg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ZH() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function JH(e) {
  return ["html", "body", "#document"].includes($_(e));
}
function Yg(e) {
  return Fn(e).getComputedStyle(e);
}
function eU(e) {
  if ($_(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    xS(e) && e.host || // Fallback.
    A_(e)
  );
  return xS(t) ? t.host : t;
}
function L_(e) {
  const t = eU(e);
  return JH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Kg(t) && F_(t) ? t : L_(t);
}
function nd(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = L_(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Fn(o);
  return i ? t.concat(a, a.visualViewport || [], F_(o) ? o : [], a.frameElement && n ? nd(a.frameElement) : []) : t.concat(o, nd(o, [], n));
}
function tU(e) {
  const t = Yg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Kg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = ed(n) !== i || ed(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function qg(e) {
  return km(e) ? e : e.contextElement;
}
function Lp(e) {
  const t = qg(e);
  if (!Kg(t))
    return td(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = tU(t);
  let a = (i ? ed(n.width) : n.width) / r, s = (i ? ed(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const nU = /* @__PURE__ */ td(0);
function rU(e) {
  const t = Fn(e);
  return !ZH() || !t.visualViewport ? nU : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function oU(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Fn(e) ? !1 : t;
}
function wS(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = qg(e);
  let a = td(1);
  t && (r ? km(r) && (a = Lp(r)) : a = Lp(e));
  const s = oU(i, n, r) ? rU(i) : td(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Fn(i), p = r && km(r) ? Fn(r) : r;
    let g = f.frameElement;
    for (; g && r && p !== f; ) {
      const h = Lp(g), b = g.getBoundingClientRect(), m = Yg(g), y = b.left + (g.clientLeft + parseFloat(m.paddingLeft)) * h.x, S = b.top + (g.clientTop + parseFloat(m.paddingTop)) * h.y;
      l *= h.x, u *= h.y, c *= h.x, d *= h.y, l += y, u += S, g = Fn(g).frameElement;
    }
  }
  return QH({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function iU(e, t) {
  let n = null, r;
  const o = A_(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: c,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !d || !f)
      return;
    const p = Cu(c), g = Cu(o.clientWidth - (u + d)), h = Cu(o.clientHeight - (c + f)), b = Cu(u), y = {
      rootMargin: -p + "px " + -g + "px " + -h + "px " + -b + "px",
      threshold: XH(0, qH(1, l)) || 1
    };
    let S = !0;
    function x(k) {
      const P = k[0].intersectionRatio;
      if (P !== l) {
        if (!S)
          return a();
        P ? a(!1, P) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      S = !1;
    }
    try {
      n = new IntersectionObserver(x, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, y);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function aU(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = qg(e), c = o || i ? [...u ? nd(u) : [], ...nd(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), i && m.addEventListener("resize", n);
  });
  const d = u && s ? iU(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((m) => {
    let [y] = m;
    y && y.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let g, h = l ? wS(e) : null;
  l && b();
  function b() {
    const m = wS(e);
    h && (m.x !== h.x || m.y !== h.y || m.width !== h.width || m.height !== h.height) && n(), h = m, g = requestAnimationFrame(b);
  }
  return n(), () => {
    c.forEach((m) => {
      o && m.removeEventListener("scroll", n), i && m.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
var Pm = v.useLayoutEffect, sU = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], rd = function() {
};
function lU(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function uU(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(lU(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var CS = function(t) {
  return yU(t) ? t.filter(Boolean) : Xo(t) === "object" && t !== null ? [t] : [];
}, j_ = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Mr(t, sU);
  return Z({}, n);
}, Ue = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function lf(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function cU(e) {
  return lf(e) ? window.innerHeight : e.clientHeight;
}
function z_(e) {
  return lf(e) ? window.pageYOffset : e.scrollTop;
}
function od(e, t) {
  if (lf(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function dU(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function fU(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function ku(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : rd, o = z_(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = fU(s, o, i, n);
    od(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function kS(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? od(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && od(e, Math.max(t.offsetTop - o, 0));
}
function pU(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function PS() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function hU() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var N_ = !1, mU = {
  get passive() {
    return N_ = !0;
  }
}, Pu = typeof window < "u" ? window : {};
Pu.addEventListener && Pu.removeEventListener && (Pu.addEventListener("p", rd, mU), Pu.removeEventListener("p", rd, !1));
var vU = N_;
function gU(e) {
  return e != null;
}
function yU(e) {
  return Array.isArray(e);
}
function _u(e, t, n) {
  return e ? t : n;
}
var bU = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = Object.entries(t).filter(function(a) {
    var s = xr(a, 1), l = s[0];
    return !r.includes(l);
  });
  return i.reduce(function(a, s) {
    var l = xr(s, 2), u = l[0], c = l[1];
    return a[u] = c, a;
  }, {});
}, SU = ["children", "innerProps"], xU = ["children", "innerProps"];
function wU(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = dU(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, g = f.height, h = f.top, b = n.offsetParent.getBoundingClientRect(), m = b.top, y = a ? window.innerHeight : cU(l), S = z_(l), x = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = m - k, _ = y - h, T = P + S, M = d - S - h, I = p - y + S + x, D = S + h - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (_ >= g)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= g && !a)
        return i && ku(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && _ >= r) {
        i && ku(l, I, G);
        var H = a ? _ - x : M - x;
        return {
          placement: "bottom",
          maxHeight: H
        };
      }
      if (o === "auto" || a) {
        var L = t, W = a ? P : T;
        return W >= r && (L = Math.min(W - x - s, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (o === "bottom")
        return i && od(l, I), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (P >= g)
        return {
          placement: "top",
          maxHeight: t
        };
      if (T >= g && !a)
        return i && ku(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && T >= r || a && P >= r) {
        var K = t;
        return (!a && T >= r || a && P >= r) && (K = a ? P - k : T - k), i && ku(l, D, G), {
          placement: "top",
          maxHeight: K
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return u;
}
function CU(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var V_ = function(t) {
  return t === "auto" ? "bottom" : t;
}, kU = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return Z((r = {
    label: "menu"
  }, ji(r, CU(o), "100%"), ji(r, "position", "absolute"), ji(r, "width", "100%"), ji(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, B_ = /* @__PURE__ */ v.createContext(null), PU = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = v.useContext(B_) || {}, c = u.setPortalPlacement, d = v.useRef(null), f = v.useState(o), p = xr(f, 2), g = p[0], h = p[1], b = v.useState(null), m = xr(b, 2), y = m[0], S = m[1], x = l.spacing.controlHeight;
  return Pm(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", _ = s && !P, T = wU({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: _,
        isFixedPosition: P,
        controlHeight: x
      });
      h(T.maxHeight), S(T.placement), c == null || c(T.placement);
    }
  }, [o, i, a, s, r, c, x]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: y || V_(i),
      maxHeight: g
    })
  });
}, _U = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return ee("div", q({}, Ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, TU = _U, EU = function(t, n) {
  var r = t.maxHeight, o = t.theme.spacing.baseUnit;
  return Z({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, OU = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return ee("div", q({}, Ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, W_ = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, MU = W_, IU = W_, RU = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Mr(t, SU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, $U = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Mr(t, xU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, AU = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, DU = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = v.useRef(null), u = v.useRef(null), c = v.useState(V_(a)), d = xr(c, 2), f = d[0], p = d[1], g = v.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), h = v.useState(null), b = xr(h, 2), m = b[0], y = b[1], S = v.useCallback(function() {
    if (o) {
      var _ = pU(o), T = s === "fixed" ? 0 : window.pageYOffset, M = _[f] + T;
      (M !== (m == null ? void 0 : m.offset) || _.left !== (m == null ? void 0 : m.rect.left) || _.width !== (m == null ? void 0 : m.rect.width)) && y({
        offset: M,
        rect: _
      });
    }
  }, [o, s, f, m == null ? void 0 : m.offset, m == null ? void 0 : m.rect.left, m == null ? void 0 : m.rect.width]);
  Pm(function() {
    S();
  }, [S]);
  var x = v.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = aU(o, l.current, S, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, S]);
  Pm(function() {
    x();
  }, [x]);
  var k = v.useCallback(function(_) {
    l.current = _, x();
  }, [x]);
  if (!n && s !== "fixed" || !m)
    return null;
  var P = ee("div", q({
    ref: k
  }, Ue(Z(Z({}, t), {}, {
    offset: m.offset,
    position: s,
    rect: m.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), r);
  return ee(B_.Provider, {
    value: g
  }, n ? /* @__PURE__ */ Cd.createPortal(P, n) : P);
}, FU = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, LU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return ee("div", q({}, Ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, jU = function(t, n) {
  var r = t.theme.spacing, o = t.isMulti, i = t.hasValue, a = t.selectProps.controlShouldRenderValue;
  return Z({
    alignItems: "center",
    display: o && i && a ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, zU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return ee("div", q({}, Ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, NU = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, VU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, _S, BU = ["size"], WU = ["innerProps", "isRtl", "size"], HU = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, H_ = function(t) {
  var n = t.size, r = Mr(t, BU);
  return ee("svg", q({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: HU
  }, r));
}, Xg = function(t) {
  return ee(H_, q({
    size: 20
  }, t), ee("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, U_ = function(t) {
  return ee(H_, q({
    size: 20
  }, t), ee("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, G_ = function(t, n) {
  var r = t.isFocused, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return Z({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: i * 2,
    ":hover": {
      color: r ? a.neutral80 : a.neutral40
    }
  });
}, UU = G_, GU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || ee(U_, null));
}, KU = G_, YU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || ee(Xg, null));
}, qU = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing.baseUnit, a = o.colors;
  return Z({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? a.neutral10 : a.neutral20,
    marginBottom: i * 2,
    marginTop: i * 2
  });
}, XU = function(t) {
  var n = t.innerProps;
  return ee("span", q({}, n, Ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, QU = gC(_S || (_S = YH([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), ZU = function(t, n) {
  var r = t.isFocused, o = t.size, i = t.theme, a = i.colors, s = i.spacing.baseUnit;
  return Z({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: s * 2
  });
}, jp = function(t) {
  var n = t.delay, r = t.offset;
  return ee("span", {
    css: /* @__PURE__ */ Fv({
      animation: "".concat(QU, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, JU = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = Mr(t, WU);
  return ee("div", q({}, Ue(Z(Z({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), ee(jp, {
    delay: 0,
    offset: r
  }), ee(jp, {
    delay: 160,
    offset: !0
  }), ee(jp, {
    delay: 320,
    offset: !r
  }));
}, eG = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.theme, a = i.colors, s = i.borderRadius, l = i.spacing;
  return Z({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: l.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? a.neutral5 : a.neutral0,
    borderColor: r ? a.neutral10 : o ? a.primary : a.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(a.primary) : void 0,
    "&:hover": {
      borderColor: o ? a.primary : a.neutral30
    }
  });
}, tG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.innerRef, a = t.innerProps, s = t.menuIsOpen;
  return ee("div", q({
    ref: i
  }, Ue(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": o,
    "control--menu-is-open": s
  }), a, {
    "aria-disabled": r || void 0
  }), n);
}, nG = tG, rG = ["data"], oG = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, iG = function(t) {
  var n = t.children, r = t.cx, o = t.getStyles, i = t.getClassNames, a = t.Heading, s = t.headingProps, l = t.innerProps, u = t.label, c = t.theme, d = t.selectProps;
  return ee("div", q({}, Ue(t, "group", {
    group: !0
  }), l), ee(a, q({}, s, {
    selectProps: d,
    theme: c,
    getStyles: o,
    getClassNames: i,
    cx: r
  }), u), ee("div", null, n));
}, aG = function(t, n) {
  var r = t.theme, o = r.colors, i = r.spacing;
  return Z({
    label: "group",
    cursor: "default",
    display: "block"
  }, n ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: i.baseUnit * 3,
    paddingRight: i.baseUnit * 3,
    textTransform: "uppercase"
  });
}, sG = function(t) {
  var n = j_(t);
  n.data;
  var r = Mr(n, rG);
  return ee("div", q({}, Ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, lG = iG, uG = ["innerRef", "isDisabled", "isHidden", "inputClassName"], cG = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, dG), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, K_ = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, dG = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, K_)
}, fG = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, K_);
}, pG = function(t) {
  var n = t.cx, r = t.value, o = j_(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Mr(o, uG);
  return ee("div", q({}, Ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), ee("input", q({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: fG(s),
    disabled: a
  }, u)));
}, hG = pG, mG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors;
  return Z({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: a.neutral10,
    borderRadius: i / 2,
    margin: o.baseUnit / 2
  });
}, vG = function(t, n) {
  var r = t.theme, o = r.borderRadius, i = r.colors, a = t.cropWithEllipsis;
  return Z({
    overflow: "hidden",
    textOverflow: a || a === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: o / 2,
    color: i.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, gG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.borderRadius, a = r.colors, s = t.isFocused;
  return Z({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: i / 2,
    backgroundColor: s ? a.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: a.dangerLight,
      color: a.danger
    }
  });
}, Y_ = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", r, n);
}, yG = Y_, bG = Y_;
function SG(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(Xg, {
    size: 14
  }));
}
var xG = function(t) {
  var n = t.children, r = t.components, o = t.data, i = t.innerProps, a = t.isDisabled, s = t.removeProps, l = t.selectProps, u = r.Container, c = r.Label, d = r.Remove;
  return ee(u, {
    data: o,
    innerProps: Z(Z({}, Ue(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": a
    })), i),
    selectProps: l
  }, ee(c, {
    data: o,
    innerProps: Z({}, Ue(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: l
  }, n), ee(d, {
    data: o,
    innerProps: Z(Z({}, Ue(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, s),
    selectProps: l
  }));
}, wG = xG, CG = function(t, n) {
  var r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.theme, s = a.spacing, l = a.colors;
  return Z({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: i ? l.primary : o ? l.primary25 : "transparent",
    color: r ? l.neutral20 : i ? l.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : i ? l.primary : l.primary50
    }
  });
}, kG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.isFocused, i = t.isSelected, a = t.innerRef, s = t.innerProps;
  return ee("div", q({}, Ue(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": o,
    "option--is-selected": i
  }), {
    ref: a,
    "aria-disabled": r
  }, s), n);
}, PG = kG, _G = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, TG = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, EG = TG, OG = function(t, n) {
  var r = t.isDisabled, o = t.theme, i = o.spacing, a = o.colors;
  return Z({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? a.neutral40 : a.neutral80,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, MG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return ee("div", q({}, Ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, IG = MG, RG = {
  ClearIndicator: YU,
  Control: nG,
  DropdownIndicator: GU,
  DownChevron: U_,
  CrossIcon: Xg,
  Group: lG,
  GroupHeading: sG,
  IndicatorsContainer: VU,
  IndicatorSeparator: XU,
  Input: hG,
  LoadingIndicator: JU,
  Menu: TU,
  MenuList: OU,
  MenuPortal: DU,
  LoadingMessage: $U,
  NoOptionsMessage: RU,
  MultiValue: wG,
  MultiValueContainer: yG,
  MultiValueLabel: bG,
  MultiValueRemove: SG,
  Option: PG,
  Placeholder: EG,
  SelectContainer: LU,
  SingleValue: IG,
  ValueContainer: zU
}, $G = function(t) {
  return Z(Z({}, RG), t.components);
}, TS = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function AG(e, t) {
  return !!(e === t || TS(e) && TS(t));
}
function DG(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!AG(e[n], t[n]))
      return !1;
  return !0;
}
function FG(e, t) {
  t === void 0 && (t = DG);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, o);
    return n = {
      lastResult: a,
      lastArgs: o,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var LG = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, jG = function(t) {
  return ee("span", q({
    css: LG
  }, t));
}, ES = jG, zG = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, o = t.isDisabled, i = t.tabSelectsValue, a = t.context;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options".concat(o ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, o = r === void 0 ? "" : r, i = t.labels, a = t.isDisabled;
    switch (n) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
      case "select-option":
        return a ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(g, h) {
      return g && g.length ? "".concat(g.indexOf(h) + 1, " of ").concat(g.length) : "";
    };
    if (n === "value" && s)
      return "value ".concat(a, " focused, ").concat(c(s, r), ".");
    if (n === "menu") {
      var d = l ? " disabled" : "", f = "".concat(u ? "selected" : "focused").concat(d);
      return "option ".concat(a, " ").concat(f, ", ").concat(c(o, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, NG = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, g = l.isOptionDisabled, h = l.isSearchable, b = l.menuIsOpen, m = l.options, y = l.screenReaderStatus, S = l.tabSelectsValue, x = l["aria-label"], k = l["aria-live"], P = v.useMemo(function() {
    return Z(Z({}, zG), c || {});
  }, [c]), _ = v.useMemo(function() {
    var L = "";
    if (n && P.onChange) {
      var W = n.option, K = n.options, $ = n.removedValue, A = n.removedValues, j = n.value, U = function(se) {
        return Array.isArray(se) ? null : se;
      }, V = $ || W || U(j), Y = V ? d(V) : "", z = K || A || void 0, te = z ? z.map(d) : [], le = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: V && g(V, s),
        label: Y,
        labels: te
      }, n);
      L = P.onChange(le);
    }
    return L;
  }, [n, P, g, s, d]), T = v.useMemo(function() {
    var L = "", W = r || o, K = !!(r && s && s.includes(r));
    if (W && P.onFocus) {
      var $ = {
        focused: W,
        label: d(W),
        isDisabled: g(W, s),
        isSelected: K,
        options: i,
        context: W === r ? "menu" : "value",
        selectValue: s
      };
      L = P.onFocus($);
    }
    return L;
  }, [r, o, d, g, P, i, s]), M = v.useMemo(function() {
    var L = "";
    if (b && m.length && P.onFilter) {
      var W = y({
        count: i.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: W
      });
    }
    return L;
  }, [i, f, b, P, m, y]), I = v.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : b ? "menu" : "input";
      L = P.guidance({
        "aria-label": x,
        context: W,
        isDisabled: r && g(r, s),
        isMulti: p,
        isSearchable: h,
        tabSelectsValue: S
      });
    }
    return L;
  }, [x, r, o, p, g, h, b, P, s, S]), D = "".concat(T, " ").concat(M, " ").concat(I), G = ee(v.Fragment, null, ee("span", {
    id: "aria-selection"
  }, _), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(v.Fragment, null, ee(ES, {
    id: u
  }, H && G), ee(ES, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, VG = NG, _m = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], BG = new RegExp("[" + _m.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), q_ = {};
for (var zp = 0; zp < _m.length; zp++)
  for (var Np = _m[zp], Vp = 0; Vp < Np.letters.length; Vp++)
    q_[Np.letters[Vp]] = Np.base;
var X_ = function(t) {
  return t.replace(BG, function(n) {
    return q_[n];
  });
}, WG = FG(X_), OS = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, HG = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, UG = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: HG,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? OS(r) : r, d = l ? OS(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = WG(c), d = X_(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, GG = ["innerRef"];
function KG(e) {
  var t = e.innerRef, n = Mr(e, GG), r = bU(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Fv({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, "", "")
  }));
}
var YG = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function qG(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = v.useRef(!1), s = v.useRef(!1), l = v.useRef(0), u = v.useRef(null), c = v.useCallback(function(b, m) {
    if (u.current !== null) {
      var y = u.current, S = y.scrollTop, x = y.scrollHeight, k = y.clientHeight, P = u.current, _ = m > 0, T = x - k - S, M = !1;
      T > m && a.current && (r && r(b), a.current = !1), _ && s.current && (i && i(b), s.current = !1), _ && m > T ? (n && !a.current && n(b), P.scrollTop = x, M = !0, a.current = !0) : !_ && -m > S && (o && !s.current && o(b), P.scrollTop = 0, M = !0, s.current = !0), M && YG(b);
    }
  }, [n, r, o, i]), d = v.useCallback(function(b) {
    c(b, b.deltaY);
  }, [c]), f = v.useCallback(function(b) {
    l.current = b.changedTouches[0].clientY;
  }, []), p = v.useCallback(function(b) {
    var m = l.current - b.changedTouches[0].clientY;
    c(b, m);
  }, [c]), g = v.useCallback(function(b) {
    if (b) {
      var m = vU ? {
        passive: !1
      } : !1;
      b.addEventListener("wheel", d, m), b.addEventListener("touchstart", f, m), b.addEventListener("touchmove", p, m);
    }
  }, [p, f, d]), h = v.useCallback(function(b) {
    b && (b.removeEventListener("wheel", d, !1), b.removeEventListener("touchstart", f, !1), b.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return v.useEffect(function() {
    if (t) {
      var b = u.current;
      return g(b), function() {
        h(b);
      };
    }
  }, [t, g, h]), function(b) {
    u.current = b;
  };
}
var MS = ["boxSizing", "height", "overflow", "paddingRight", "position"], IS = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function RS(e) {
  e.preventDefault();
}
function $S(e) {
  e.stopPropagation();
}
function AS() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function DS() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var FS = !!(typeof window < "u" && window.document && window.document.createElement), Ya = 0, mi = {
  capture: !1,
  passive: !1
};
function XG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = v.useRef({}), i = v.useRef(null), a = v.useCallback(function(l) {
    if (FS) {
      var u = document.body, c = u && u.style;
      if (r && MS.forEach(function(g) {
        var h = c && c[g];
        o.current[g] = h;
      }), r && Ya < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(IS).forEach(function(g) {
          var h = IS[g];
          c && (c[g] = h);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && DS() && (u.addEventListener("touchmove", RS, mi), l && (l.addEventListener("touchstart", AS, mi), l.addEventListener("touchmove", $S, mi))), Ya += 1;
    }
  }, [r]), s = v.useCallback(function(l) {
    if (FS) {
      var u = document.body, c = u && u.style;
      Ya = Math.max(Ya - 1, 0), r && Ya < 1 && MS.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && DS() && (u.removeEventListener("touchmove", RS, mi), l && (l.removeEventListener("touchstart", AS, mi), l.removeEventListener("touchmove", $S, mi)));
    }
  }, [r]);
  return v.useEffect(function() {
    if (t) {
      var l = i.current;
      return a(l), function() {
        s(l);
      };
    }
  }, [t, a, s]), function(l) {
    i.current = l;
  };
}
var QG = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, ZG = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function JG(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = qG({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = XG({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return ee(v.Fragment, null, n && ee("div", {
    onClick: QG,
    css: ZG
  }), t(d));
}
var eK = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, tK = function(t) {
  var n = t.name, r = t.onFocus;
  return ee("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: eK,
    value: "",
    onChange: function() {
    }
  });
}, nK = tK, rK = function(t) {
  return t.label;
}, oK = function(t) {
  return t.label;
}, iK = function(t) {
  return t.value;
}, aK = function(t) {
  return !!t.isDisabled;
}, sK = {
  clearIndicator: KU,
  container: FU,
  control: eG,
  dropdownIndicator: UU,
  group: oG,
  groupHeading: aG,
  indicatorsContainer: NU,
  indicatorSeparator: qU,
  input: cG,
  loadingIndicator: ZU,
  loadingMessage: IU,
  menu: kU,
  menuList: EU,
  menuPortal: AU,
  multiValue: mG,
  multiValueLabel: vG,
  multiValueRemove: gG,
  noOptionsMessage: MU,
  option: CG,
  placeholder: _G,
  singleValue: OG,
  valueContainer: jU
}, lK = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, uK = 4, Q_ = 4, cK = 38, dK = Q_ * 2, fK = {
  baseUnit: Q_,
  controlHeight: cK,
  menuGutter: dK
}, Bp = {
  borderRadius: uK,
  colors: lK,
  spacing: fK
}, pK = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: PS(),
  captureMenuScroll: !PS(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: UG(),
  formatGroupLabel: rK,
  getOptionLabel: oK,
  getOptionValue: iK,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: aK,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !hU(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var n = t.count;
    return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function LS(e, t, n, r) {
  var o = tT(e, t, n), i = nT(e, t, n), a = eT(e, t), s = id(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: i,
    label: a,
    value: s,
    index: r
  };
}
function Z_(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return LS(e, a, t, s);
      }).filter(function(a) {
        return jS(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = LS(e, n, t, r);
    return jS(e, i) ? i : void 0;
  }).filter(gU);
}
function J_(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, R_(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function hK(e, t) {
  return J_(Z_(e, t));
}
function jS(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!oT(e) || !i) && rT(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function mK(e, t) {
  var n = e.focusedValue, r = e.selectValue, o = r.indexOf(n);
  if (o > -1) {
    var i = t.indexOf(n);
    if (i > -1)
      return n;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function vK(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var eT = function(t, n) {
  return t.getOptionLabel(n);
}, id = function(t, n) {
  return t.getOptionValue(n);
};
function tT(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function nT(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = id(e, t);
  return n.some(function(o) {
    return id(e, o) === r;
  });
}
function rT(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var oT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, gK = 1, iT = /* @__PURE__ */ function(e) {
  NH(n, e);
  var t = HH(n);
  function n(r) {
    var o;
    if (jH(this, n), o = t.call(this, r), o.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.instancePrefix = "", o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.controlRef = null, o.getControlRef = function(s) {
      o.controlRef = s;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(s) {
      o.focusedOptionRef = s;
    }, o.menuListRef = null, o.getMenuListRef = function(s) {
      o.menuListRef = s;
    }, o.inputRef = null, o.getInputRef = function(s) {
      o.inputRef = s;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(s, l) {
      var u = o.props, c = u.onChange, d = u.name;
      l.name = d, o.ariaOnChange(s, l), c(s, l);
    }, o.setValue = function(s, l, u) {
      var c = o.props, d = c.closeMenuOnSelect, f = c.isMulti, p = c.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: p
      }), d && (o.setState({
        inputIsHiddenAfterUpdate: !f
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(s, {
        action: l,
        option: u
      });
    }, o.selectOption = function(s) {
      var l = o.props, u = l.blurInputOnSelect, c = l.isMulti, d = l.name, f = o.state.selectValue, p = c && o.isOptionSelected(s, f), g = o.isOptionDisabled(s, f);
      if (p) {
        var h = o.getOptionValue(s);
        o.setValue(f.filter(function(b) {
          return o.getOptionValue(b) !== h;
        }), "deselect-option", s);
      } else if (!g)
        c ? o.setValue([].concat(R_(f), [s]), "select-option", s) : o.setValue(s, "select-option");
      else {
        o.ariaOnChange(s, {
          action: "select-option",
          option: s,
          name: d
        });
        return;
      }
      u && o.blurInput();
    }, o.removeValue = function(s) {
      var l = o.props.isMulti, u = o.state.selectValue, c = o.getOptionValue(s), d = u.filter(function(p) {
        return o.getOptionValue(p) !== c;
      }), f = _u(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(_u(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = _u(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return uU.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return eT(o.props, s);
    }, o.getOptionValue = function(s) {
      return id(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = sK[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return $G(o.props);
    }, o.buildCategorizedOptions = function() {
      return Z_(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return J_(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(s, l) {
      o.setState({
        ariaSelection: Z({
          value: s
        }, l)
      });
    }, o.onMenuMouseDown = function(s) {
      s.button === 0 && (s.stopPropagation(), s.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(s) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(s) {
      if (!s.defaultPrevented) {
        var l = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && o.onMenuClose() : l && o.openMenu("first") : (l && (o.openAfterFocus = !0), o.focusInput()), s.target.tagName !== "INPUT" && s.target.tagName !== "TEXTAREA" && s.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(s) {
      if (!(s && s.type === "mousedown" && s.button !== 0) && !o.props.isDisabled) {
        var l = o.props, u = l.isMulti, c = l.menuIsOpen;
        o.focusInput(), c ? (o.setState({
          inputIsHiddenAfterUpdate: !u
        }), o.onMenuClose()) : o.openMenu("first"), s.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(s) {
      s && s.type === "mousedown" && s.button !== 0 || (o.clearValue(), s.preventDefault(), o.openAfterFocus = !1, s.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(s) {
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && lf(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(s) {
      var l = s.touches, u = l && l.item(0);
      u && (o.initialTouchX = u.clientX, o.initialTouchY = u.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(s) {
      var l = s.touches, u = l && l.item(0);
      if (u) {
        var c = Math.abs(u.clientX - o.initialTouchX), d = Math.abs(u.clientY - o.initialTouchY), f = 5;
        o.userIsDragging = c > f || d > f;
      }
    }, o.onTouchEnd = function(s) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(s.target) && o.menuListRef && !o.menuListRef.contains(s.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(s) {
      o.userIsDragging || o.onControlMouseDown(s);
    }, o.onClearIndicatorTouchEnd = function(s) {
      o.userIsDragging || o.onClearIndicatorMouseDown(s);
    }, o.onDropdownIndicatorTouchEnd = function(s) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(s);
    }, o.handleInputChange = function(s) {
      var l = o.props.inputValue, u = s.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(u, {
        action: "input-change",
        prevInputValue: l
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(s) {
      o.props.onFocus && o.props.onFocus(s), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(s) {
      var l = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(s), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: l
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(s) {
      o.blockOptionHover || o.state.focusedOption === s || o.setState({
        focusedOption: s
      });
    }, o.shouldHideSelectedOptions = function() {
      return oT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, g = l.isDisabled, h = l.menuIsOpen, b = l.onKeyDown, m = l.tabSelectsValue, y = l.openMenuOnFocus, S = o.state, x = S.focusedOption, k = S.focusedValue, P = S.selectValue;
      if (!g && !(typeof b == "function" && (b(s), s.defaultPrevented))) {
        switch (o.blockOptionHover = !0, s.key) {
          case "ArrowLeft":
            if (!u || f)
              return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!u || f)
              return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (f)
              return;
            if (k)
              o.removeValue(k);
            else {
              if (!c)
                return;
              u ? o.popValue() : p && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || s.shiftKey || !h || !m || !x || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            y && o.isOptionSelected(x, P))
              return;
            o.selectOption(x);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (h) {
              if (!x || o.isComposing)
                return;
              o.selectOption(x);
              break;
            }
            return;
          case "Escape":
            h ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!h) {
              o.openMenu("first");
              break;
            }
            if (!x)
              return;
            o.selectOption(x);
            break;
          case "ArrowUp":
            h ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            h ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!h)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!h)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!h)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!h)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++gK), o.state.selectValue = CS(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return zH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && kS(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var i = this.props, a = i.isDisabled, s = i.menuIsOpen, l = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (l && !a && o.isDisabled || // ensure focus is on the Input when the menu opens
      l && s && !o.menuIsOpen) && this.focusInput(), l && a && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !l && !a && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (kS(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(o, i) {
      this.props.onInputChange(o, i);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(o) {
      var i = this, a = this.state, s = a.selectValue, l = a.isFocused, u = this.buildFocusableOptions(), c = o === "first" ? 0 : u.length - 1;
      if (!this.props.isMulti) {
        var d = u.indexOf(s[0]);
        d > -1 && (c = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: u[c]
      }, function() {
        return i.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var i = this.state, a = i.selectValue, s = i.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var l = a.indexOf(s);
        s || (l = -1);
        var u = a.length - 1, c = -1;
        if (a.length) {
          switch (o) {
            case "previous":
              l === 0 ? c = 0 : l === -1 ? c = u : c = l - 1;
              break;
            case "next":
              l > -1 && l < u && (c = l + 1);
              break;
          }
          this.setState({
            inputIsHidden: c !== -1,
            focusedValue: a[c]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", i = this.props.pageSize, a = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var l = 0, u = s.indexOf(a);
        a || (u = -1), o === "up" ? l = u > 0 ? u - 1 : s.length - 1 : o === "down" ? l = (u + 1) % s.length : o === "pageup" ? (l = u - i, l < 0 && (l = 0)) : o === "pagedown" ? (l = u + i, l > s.length - 1 && (l = s.length - 1)) : o === "last" && (l = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[l],
          focusedValue: null
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Bp) : Z(Z({}, Bp), this.props.theme) : Bp;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, g = d.options, h = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: h,
        isMulti: f,
        isRtl: p,
        options: g,
        selectOption: u,
        selectProps: d,
        setValue: c,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var o = this.state.selectValue;
      return o.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var o = this.props, i = o.isClearable, a = o.isMulti;
      return i === void 0 ? a : i;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, i) {
      return tT(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return nT(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return rT(this.props, o, i);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, i) {
      if (typeof this.props.formatOptionLabel == "function") {
        var a = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: i,
          inputValue: a,
          selectValue: s
        });
      } else
        return this.getOptionLabel(o);
    }
  }, {
    key: "formatGroupLabel",
    value: function(o) {
      return this.props.formatGroupLabel(o);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), g = p.Input, h = this.state, b = h.inputIsHidden, m = h.ariaSelection, y = this.commonProps, S = s || this.getElementId("input"), x = Z(Z(Z({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": f,
          role: "combobox"
        }, d && {
          "aria-controls": this.getElementId("listbox"),
          "aria-owns": this.getElementId("listbox")
        }), !a && {
          "aria-readonly": !0
        }), this.hasValue() ? (m == null ? void 0 : m.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ v.createElement(g, q({}, y, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: S,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: b,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: c,
          type: "text",
          value: l
        }, x)) : /* @__PURE__ */ v.createElement(KG, q({
          id: S,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: rd,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: u,
          inputMode: "none",
          form: c,
          value: ""
        }, x));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, g = p.controlShouldRenderValue, h = p.isDisabled, b = p.isMulti, m = p.inputValue, y = p.placeholder, S = this.state, x = S.selectValue, k = S.focusedValue, P = S.isFocused;
      if (!this.hasValue() || !g)
        return m ? null : /* @__PURE__ */ v.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: h,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), y);
      if (b)
        return x.map(function(T, M) {
          var I = T === k, D = "".concat(o.getOptionLabel(T), "-").concat(o.getOptionValue(T));
          return /* @__PURE__ */ v.createElement(a, q({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: I,
            isDisabled: h,
            key: D,
            index: M,
            removeProps: {
              onClick: function() {
                return o.removeValue(T);
              },
              onTouchEnd: function() {
                return o.removeValue(T);
              },
              onMouseDown: function(H) {
                H.preventDefault();
              }
            },
            data: T
          }), o.formatOptionLabel(T, "value"));
        });
      if (m)
        return null;
      var _ = x[0];
      return /* @__PURE__ */ v.createElement(c, q({}, f, {
        data: _,
        isDisabled: h
      }), this.formatOptionLabel(_, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), i = o.ClearIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!this.isClearable() || !i || l || !this.hasValue() || u)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: d,
        isFocused: c
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), i = o.LoadingIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!i || !u)
        return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: d,
        isDisabled: l,
        isFocused: c
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator, a = o.IndicatorSeparator;
      if (!i || !a)
        return null;
      var s = this.commonProps, l = this.props.isDisabled, u = this.state.isFocused;
      return /* @__PURE__ */ v.createElement(a, q({}, s, {
        isDisabled: l,
        isFocused: u
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), i = o.DropdownIndicator;
      if (!i)
        return null;
      var a = this.commonProps, s = this.props.isDisabled, l = this.state.isFocused, u = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ v.createElement(i, q({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, g = this.commonProps, h = this.state.focusedOption, b = this.props, m = b.captureMenuScroll, y = b.inputValue, S = b.isLoading, x = b.loadingMessage, k = b.minMenuHeight, P = b.maxMenuHeight, _ = b.menuIsOpen, T = b.menuPlacement, M = b.menuPosition, I = b.menuPortalTarget, D = b.menuShouldBlockScroll, G = b.menuShouldScrollIntoView, H = b.noOptionsMessage, L = b.onMenuScrollToTop, W = b.onMenuScrollToBottom;
      if (!_)
        return null;
      var K = function(z, te) {
        var le = z.type, ae = z.data, se = z.isDisabled, me = z.isSelected, ke = z.label, et = z.value, qe = h === ae, on = se ? void 0 : function() {
          return o.onOptionHover(ae);
        }, Pn = se ? void 0 : function() {
          return o.selectOption(ae);
        }, Ir = "".concat(o.getElementId("option"), "-").concat(te), fe = {
          id: Ir,
          onClick: Pn,
          onMouseMove: on,
          onMouseOver: on,
          tabIndex: -1
        };
        return /* @__PURE__ */ v.createElement(p, q({}, g, {
          innerProps: fe,
          data: ae,
          isDisabled: se,
          isSelected: me,
          key: Ir,
          label: ke,
          type: le,
          value: et,
          isFocused: qe,
          innerRef: qe ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(z.data, "menu"));
      }, $;
      if (this.hasOptions())
        $ = this.getCategorizedOptions().map(function(Y) {
          if (Y.type === "group") {
            var z = Y.data, te = Y.options, le = Y.index, ae = "".concat(o.getElementId("group"), "-").concat(le), se = "".concat(ae, "-heading");
            return /* @__PURE__ */ v.createElement(a, q({}, g, {
              key: ae,
              data: z,
              options: te,
              Heading: s,
              headingProps: {
                id: se,
                data: Y.data
              },
              label: o.formatGroupLabel(Y.data)
            }), Y.options.map(function(me) {
              return K(me, "".concat(le, "-").concat(me.index));
            }));
          } else if (Y.type === "option")
            return K(Y, "".concat(Y.index));
        });
      else if (S) {
        var A = x({
          inputValue: y
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(d, g, A);
      } else {
        var j = H({
          inputValue: y
        });
        if (j === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(f, g, j);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: T,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ v.createElement(PU, q({}, g, U), function(Y) {
        var z = Y.ref, te = Y.placerProps, le = te.placement, ae = te.maxHeight;
        return /* @__PURE__ */ v.createElement(l, q({}, g, U, {
          innerRef: z,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: S,
          placement: le
        }), /* @__PURE__ */ v.createElement(JG, {
          captureEnabled: m,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ v.createElement(u, q({}, g, {
            innerRef: function(ke) {
              o.getMenuListRef(ke), se(ke);
            },
            isLoading: S,
            maxHeight: ae,
            focusedOption: h
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ v.createElement(c, q({}, g, {
        appendTo: I,
        controlElement: this.controlRef,
        menuPlacement: T,
        menuPosition: M
      }), V) : V;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, i = this.props, a = i.delimiter, s = i.isDisabled, l = i.isMulti, u = i.name, c = i.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ v.createElement(nK, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(h) {
              return o.getOptionValue(h);
            }).join(a);
            return /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(h, b) {
              return /* @__PURE__ */ v.createElement("input", {
                key: "i-".concat(b),
                name: u,
                type: "hidden",
                value: o.getOptionValue(h)
              });
            }) : /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ v.createElement("div", null, p);
          }
        else {
          var g = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ v.createElement("input", {
            name: u,
            type: "hidden",
            value: g
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, i = this.state, a = i.ariaSelection, s = i.focusedOption, l = i.focusedValue, u = i.isFocused, c = i.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ v.createElement(VG, q({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: a,
        focusedOption: s,
        focusedValue: l,
        isFocused: u,
        selectValue: c,
        focusableOptions: d
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, g = this.state.isFocused, h = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ v.createElement(s, q({}, h, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: g
      }), this.renderLiveRegion(), /* @__PURE__ */ v.createElement(i, q({}, h, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: g,
        menuIsOpen: p
      }), /* @__PURE__ */ v.createElement(l, q({}, h, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ v.createElement(a, q({}, h, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, g = o.menuIsOpen, h = o.inputValue, b = o.isMulti, m = CS(p), y = {};
      if (a && (p !== a.value || f !== a.options || g !== a.menuIsOpen || h !== a.inputValue)) {
        var S = g ? hK(o, m) : [], x = s ? mK(i, m) : null, k = vK(i, S);
        y = {
          selectValue: m,
          focusedOption: k,
          focusedValue: x,
          clearFocusValueOnUpdate: !1
        };
      }
      var P = l != null && o !== a ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, _ = u, T = c && d;
      return c && !T && (_ = {
        value: _u(b, m, m[0] || null),
        options: m,
        action: "initial-input-focus"
      }, T = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (_ = null), Z(Z(Z({}, y), P), {}, {
        prevProps: o,
        ariaSelection: _,
        prevWasFocused: T
      });
    }
  }]), n;
}(v.Component);
iT.defaultProps = pK;
var yK = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = LH(e);
  return /* @__PURE__ */ v.createElement(iT, q({
    ref: t
  }, n));
}), bK = yK, SK = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function Tm() {
  return Tm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tm.apply(this, arguments);
}
function xK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var aT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = xK(t, SK);
  return Tm({}, n);
}, wK = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, CK = function(t) {
  return wK(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, zn = function(t) {
  var n = mo(), r = CK(n.components.Input.defaultProps.size), o = t ?? r, i = q9(typeof o == "string" ? [o] : o, {
    fallback: "md"
  }) || r;
  return i;
};
function Sa() {
  return Sa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Sa.apply(this, arguments);
}
var kK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = Sa({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, a ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ re.createElement(Fe, Sa({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, PK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, g = l.controlShouldRenderValue, h = zn(c), b = Ct("Input", {
    size: h,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), m = {
    display: i && a && g ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: b.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, y = u != null && u.valueContainer ? u.valueContainer(m, t) : m;
  return /* @__PURE__ */ re.createElement(Fe, Sa({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: y
  }), n);
}, _K = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, Sa({}, i, {
    className: o({
      indicators: !0
    }, r),
    sx: l
  }), n);
}, TK = ["height", "h"];
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wn.apply(this, arguments);
}
function EK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var OK = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, g = c.focusBorderColor, h = c.errorBorderColor, b = c.isInvalid, m = c.isReadOnly, y = zn(f), S = Ct("Input", {
    size: y,
    variant: p,
    focusBorderColor: g,
    errorBorderColor: h
  }), x = S.field, k = x.height, P = x.h, _ = EK(x, TK), T = k || P, M = wn({}, _, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 0,
    overflow: "hidden",
    height: "auto",
    minH: T
  }, s ? {
    pointerEvents: "none"
  } : {}), I = d != null && d.control ? d.control(M, t) : M;
  return /* @__PURE__ */ re.createElement(Fe, wn({
    ref: i,
    className: r({
      control: !0,
      "control--is-disabled": s,
      "control--is-focused": l,
      "control--menu-is-open": u
    }, n),
    sx: I
  }, a, {
    "data-focus": l ? !0 : void 0,
    "data-focus-visible": l ? !0 : void 0,
    "data-invalid": b ? !0 : void 0,
    "data-disabled": s ? !0 : void 0,
    "data-readonly": m ? !0 : void 0
  }), o);
}, MK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = wn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ re.createElement(F2, {
    className: r({
      "indicator-separator": !0
    }, n),
    sx: u,
    orientation: "vertical"
  });
}, IK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, RK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = zn(u), g = Ct("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), h = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, b = h[p], m = wn({}, g.addon, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 0,
    borderWidth: 0,
    fontSize: b
  }, l && {
    background: "transparent",
    padding: 0,
    width: 6,
    marginRight: 2,
    marginLeft: 1,
    cursor: "inherit"
  }), y = s != null && s.dropdownIndicator ? s.dropdownIndicator(m, t) : m, S = {
    height: "1em",
    width: "1em"
  }, x = s != null && s.downChevron ? s.downChevron(S, t) : S;
  return /* @__PURE__ */ re.createElement(Fe, wn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: y
  }), n || /* @__PURE__ */ re.createElement(IK, {
    sx: x
  }));
}, $K = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, AK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = ei("CloseButton", {
    size: u
  }), d = wn({}, c, {
    marginX: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer"
  }), f = s != null && s.clearIndicator ? s.clearIndicator(d, t) : d, p = {
    width: "1em",
    height: "1em"
  }, g = s != null && s.crossIcon ? s.crossIcon(p, t) : p;
  return /* @__PURE__ */ re.createElement(Fe, wn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ re.createElement($K, {
    sx: g
  }));
}, DK = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = zn(s), g = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, h = g[p], b = {
    marginRight: 3
  }, m = a != null && a.loadingIndicator ? a.loadingIndicator(b, t) : b;
  return /* @__PURE__ */ re.createElement(Xd, wn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: m
  }, o, {
    size: f || h,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const FK = OK;
var LK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function Ms() {
  return Ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ms.apply(this, arguments);
}
function jK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var zK = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = aT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = jK(l, LK), g = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, h = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    color: "inherit",
    marginX: "0.125rem",
    paddingY: "0.125rem",
    visibility: c ? "hidden" : "visible",
    // Force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : "",
    _after: Ms({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, g)
  }, b = a != null && a.inputContainer ? a.inputContainer(h, t) : h, m = Ms({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, g), y = a != null && a.input ? a.input(m, t) : m;
  return /* @__PURE__ */ re.createElement(Fe, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: b
  }, /* @__PURE__ */ re.createElement(X.input, Ms({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: y,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const NK = zK;
var VK = ["data"];
function BK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
var WK = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, HK = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[WK(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ re.createElement(nf, null, /* @__PURE__ */ re.createElement(Fe, Wt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const UK = HK;
var GK = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, g = c.focusBorderColor, h = c.errorBorderColor, b = Ct("Menu"), m = zn(f), y = Ct("Input", {
    size: m,
    variant: p,
    focusBorderColor: g,
    errorBorderColor: h
  }), S = y.field, x = Wt({}, b.list, {
    minW: "100%",
    maxHeight: s + "px",
    overflowY: "auto",
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": S == null ? void 0 : S["--input-border-radius"],
    borderRadius: (S == null ? void 0 : S.borderRadius) || ((n = b.list) == null ? void 0 : n.borderRadius),
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }), k = d != null && d.menuList ? d.menuList(x, t) : x;
  return /* @__PURE__ */ re.createElement(Fe, Wt({
    role: "listbox"
  }, u, {
    className: o({
      "menu-list": !0,
      "menu-list--is-multi": l
    }, r),
    sx: k,
    ref: i
  }), a);
}, KK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.loadingMessage ? s.loadingMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--loading": !0
    }, r),
    sx: f
  }), n);
}, YK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.noOptionsMessage ? s.noOptionsMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, r),
    sx: f
  }), n);
}, qK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, g = {}, h = p != null && p.group ? p.group(g, t) : g;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: h
  }), /* @__PURE__ */ re.createElement(s, Wt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ re.createElement(Fe, null, n));
}, XK = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = aT(t);
  l.data;
  var u = BK(l, VK), c = Ct("Menu"), d = zn(a), f = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, p = {
    sm: "0.4rem 0.8rem",
    md: "0.5rem 1rem",
    lg: "0.6rem 1.2rem"
  }, g = Wt({}, c.groupTitle, {
    fontSize: f[d],
    padding: p[d],
    margin: 0,
    borderBottomWidth: s ? "1px" : 0,
    position: s ? "sticky" : "static",
    top: -2,
    bg: c.list.bg,
    zIndex: 1
  }), h = i != null && i.groupHeading ? i.groupHeading(g, t) : g;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: h
  }));
}, QK = function(t) {
  return /* @__PURE__ */ re.createElement("svg", Wt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ re.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, ZK = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, g = c.hideSelectedOptions, h = c.selectedOptionStyle, b = c.selectedOptionColorScheme, m = Ct("Menu").item, y = zn(f), S = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = Ay(b + ".500", b + ".300"), P = Ay("white", "black"), _ = h === "check" && (!p || g === !1), T = h === "color", M = Wt({}, m, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: y,
    paddingX: S[y],
    paddingY: x[y]
  }, T && {
    _selected: {
      bg: k,
      color: P,
      _active: {
        bg: k
      }
    }
  }), I = d != null && d.option ? d.option(M, t) : M;
  return /* @__PURE__ */ re.createElement(Fe, Wt({
    role: "option"
  }, i, {
    className: r({
      option: !0,
      "option--is-disabled": l,
      "option--is-focused": s,
      "option--is-selected": u
    }, n),
    sx: I,
    ref: o,
    "data-focus": s ? !0 : void 0,
    "aria-disabled": l ? !0 : void 0,
    "aria-selected": u
  }), _ && /* @__PURE__ */ re.createElement(rf, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ re.createElement(QK, null)), a);
};
function Rn() {
  return Rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Rn.apply(this, arguments);
}
var JK = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, eY = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, sT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, tY = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, g = o.Label, h = o.Remove, b = d.chakraStyles, m = d.colorScheme, y = d.tagVariant, S = d.size, x = zn(S), k = "", P = "", _ = !1;
  JK(a) && (k = a.colorScheme), eY(a) && (P = a.variant), sT(a) && (_ = a.isFixed);
  var T = Ct("Tag", {
    size: x,
    colorScheme: k || m,
    variant: P || y || (_ ? "solid" : "subtle")
  }), M = Rn({}, T.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), I = b != null && b.multiValue ? b.multiValue(M, t) : M, D = Rn({}, T.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), G = b != null && b.multiValueLabel ? b.multiValueLabel(D, t) : D, H = Rn({}, T.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = b != null && b.multiValueRemove ? b.multiValueRemove(H, t) : H;
  return /* @__PURE__ */ re.createElement(p, {
    data: a,
    innerProps: Rn({
      className: i({
        "multi-value": !0,
        "multi-value--is-disabled": l
      }, r)
    }, s),
    sx: I,
    selectProps: d
  }, /* @__PURE__ */ re.createElement(g, {
    data: a,
    innerProps: {
      className: i({
        "multi-value__label": !0
      }, r)
    },
    sx: G,
    selectProps: d
  }, n), /* @__PURE__ */ re.createElement(h, {
    data: a,
    innerProps: Rn({
      className: i({
        "multi-value__remove": !0
      }, r),
      "aria-label": "Remove " + (n || "option")
    }, c),
    sx: L,
    selectProps: d,
    isFocused: u
  }));
}, nY = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, rY = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, oY = function(t) {
  return /* @__PURE__ */ re.createElement(kn, Rn({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, iY = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return sT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement(Fe, Rn({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement(oY, null));
};
const aY = tY;
function Em() {
  return Em = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Em.apply(this, arguments);
}
var sY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, Em({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const lY = sY;
function Om() {
  return Om = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Om.apply(this, arguments);
}
var uY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement(Fe, Om({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const cY = uY;
var dY = {
  ClearIndicator: AK,
  Control: FK,
  DropdownIndicator: RK,
  Group: qK,
  GroupHeading: XK,
  IndicatorSeparator: MK,
  IndicatorsContainer: _K,
  Input: NK,
  LoadingIndicator: DK,
  LoadingMessage: KK,
  Menu: UK,
  MenuList: GK,
  MultiValue: aY,
  MultiValueContainer: nY,
  MultiValueLabel: rY,
  MultiValueRemove: iY,
  NoOptionsMessage: YK,
  Option: ZK,
  Placeholder: lY,
  SelectContainer: kK,
  SingleValue: cY,
  ValueContainer: PK
};
const fY = dY;
var pY = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function ad() {
  return ad = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ad.apply(this, arguments);
}
function hY(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var mY = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, g = t.tagVariant, h = t.selectedOptionStyle, b = h === void 0 ? "color" : h, m = t.selectedOptionColorScheme, y = t.selectedOptionColor, S = t.variant, x = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, _ = P === void 0 ? {} : P, T = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = hY(t, pY), G = mo(), H = G.components.Input.defaultProps.variant, L = BP({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: T,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = b, $ = ["color", "check"];
  $.includes(b) || (K = "color");
  var A = m || y || "blue";
  typeof A != "string" && (A = "blue");
  var j = ad({
    // Allow overriding of custom components
    components: ad({}, fY, o),
    // Custom select props
    colorScheme: s,
    size: i,
    tagVariant: g,
    selectedOptionStyle: K,
    selectedOptionColorScheme: A,
    variant: S ?? H,
    chakraStyles: _,
    focusBorderColor: x,
    errorBorderColor: k,
    // Extract custom props from form control
    onFocus: L.onFocus,
    onBlur: L.onBlur,
    isDisabled: L.disabled,
    isInvalid: !!L["aria-invalid"],
    inputId: L.id,
    isReadOnly: L.readOnly,
    required: d ?? L.required,
    menuIsOpen: W
  }, D, {
    // aria-invalid can be passed to react-select, so we allow that to
    // override the `isInvalid` prop
    "aria-invalid": (n = D["aria-invalid"]) != null ? n : L["aria-invalid"]
  });
  return j;
};
const vY = mY;
function Mm() {
  return Mm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mm.apply(this, arguments);
}
var gY = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = vY(e);
  return /* @__PURE__ */ re.createElement(bK, Mm({
    ref: t
  }, n));
});
const yY = gY;
function bY({ workflow: e }) {
  var c;
  const [t, n] = v.useState([]), [r, o] = v.useState(""), i = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [a, s] = v.useState(i);
  if (v.useEffect(() => {
    Ce && n(Ce.listAll() ?? []);
  }, []), v.useEffect(() => {
    var d;
    s(
      ((d = e.tags) == null ? void 0 : d.map((f) => ({
        value: f,
        label: f
      }))) ?? []
    );
  }, [e.tags]), Ce == null)
    return alert("Error: TagsTable is not loaded"), null;
  const l = t.map((d) => ({
    value: d.name,
    label: d.name
  })), u = 37 * 5;
  return /* @__PURE__ */ w.jsxs(Vg, { isLazy: !0, children: [
    /* @__PURE__ */ w.jsx(Ng, { children: /* @__PURE__ */ w.jsx(jn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ w.jsx(k_, { color: "#718096" }) }) }),
    /* @__PURE__ */ w.jsxs(Ug, { children: [
      /* @__PURE__ */ w.jsx(Bg, {}),
      /* @__PURE__ */ w.jsx(Hg, {}),
      /* @__PURE__ */ w.jsx(m_, { children: /* @__PURE__ */ w.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ w.jsxs(Wg, { children: [
        /* @__PURE__ */ w.jsx(
          yY,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            onChange: (d) => {
              s(d), Sm(e.id, {
                tags: d.map((f) => f.value)
              });
            },
            chakraStyles: {
              dropdownIndicator: (d, f) => ({
                ...d,
                p: 0,
                w: "30px"
              }),
              menuList: (d, f) => ({
                ...d,
                shadow: "none",
                pt: 0
              })
            },
            placeholder: "Select tags",
            closeMenuOnSelect: !1,
            maxMenuHeight: u
          }
        ),
        /* @__PURE__ */ w.jsxs(
          _t,
          {
            gap: 4,
            mt: Math.min(u, Math.max(t.length, 3) * 37),
            children: [
              /* @__PURE__ */ w.jsx(
                ef,
                {
                  placeholder: "New tag name",
                  size: "sm",
                  mt: 6,
                  mb: 6,
                  variant: "flushed",
                  value: r,
                  onChange: (d) => {
                    o(d.target.value);
                  }
                }
              ),
              /* @__PURE__ */ w.jsx(
                jn,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ w.jsx(C_, { size: 16 }),
                  colorScheme: "teal",
                  variant: "solid",
                  size: "xs",
                  px: 5,
                  isDisabled: r.length === 0,
                  onClick: () => {
                    Ce == null || Ce.upsert(r), n((Ce == null ? void 0 : Ce.listAll()) ?? []), o("");
                  },
                  children: "New Tag"
                }
              )
            ]
          }
        )
      ] })
    ] })
  ] });
}
function SY({
  isSelected: e,
  workflow: t,
  loadWorkflowID: n,
  onDelete: r
}) {
  const { colorMode: o } = Pa();
  return /* @__PURE__ */ w.jsxs(_t, { w: "100%", justify: "space-between", children: [
    /* @__PURE__ */ w.jsxs(
      Fe,
      {
        as: "button",
        textAlign: "left",
        backgroundColor: e ? "teal.200" : void 0,
        color: e ? "#333" : void 0,
        w: "90%",
        borderRadius: 6,
        p: 2,
        mb: 2,
        onClick: () => {
          n(t.id);
        },
        _hover: {
          bg: o === "light" ? "gray.200" : "#4A5568"
        },
        _active: {
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9"
        },
        children: [
          /* @__PURE__ */ w.jsx(nr, { fontWeight: "500", children: t.name ?? "untitled" }),
          /* @__PURE__ */ w.jsxs(nr, { color: "GrayText", ml: 2, fontSize: "sm", children: [
            "Updated: ",
            T_(t.updateTime)
          ] })
        ]
      }
    ),
    /* @__PURE__ */ w.jsx(bY, { workflow: t }),
    /* @__PURE__ */ w.jsx(Vg, { isLazy: !0, children: ({ isOpen: i, onClose: a }) => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx(Ng, { children: /* @__PURE__ */ w.jsx(P_, { color: "#F56565", cursor: "pointer" }) }),
      /* @__PURE__ */ w.jsxs(Ug, { children: [
        /* @__PURE__ */ w.jsx(Bg, {}),
        /* @__PURE__ */ w.jsx(Hg, {}),
        /* @__PURE__ */ w.jsxs(Wg, { children: [
          /* @__PURE__ */ w.jsx(nr, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
          /* @__PURE__ */ w.jsx(
            jn,
            {
              colorScheme: "red",
              size: "sm",
              onClick: () => {
                r(t.id), a();
              },
              children: "Yes, delete"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
function xY() {
  const e = v.useRef(null), { setRecentFiles: t } = v.useContext(M_), n = async (o) => {
    const i = o.target.files;
    if (!i)
      return;
    const a = Array.from(i);
    console.log("filearr", a), await Promise.all(
      a.map((s) => r(s))
    ), t && t(oc());
  }, r = async (o) => new Promise((i, a) => {
    const s = new FileReader();
    s.onload = (l) => {
      var u;
      try {
        const c = (u = l.target) == null ? void 0 : u.result;
        typeof c == "string" ? i(
          wm({
            json: c,
            name: o.name.replace(".json", "")
          })
        ) : a(new Error("File content is not a string"));
      } catch (c) {
        a(c);
      }
    }, s.onerror = a, s.readAsText(o);
  });
  return /* @__PURE__ */ w.jsxs(
    jn,
    {
      leftIcon: /* @__PURE__ */ w.jsx(aH, {}),
      variant: "outline",
      size: "sm",
      colorScheme: "teal",
      onClick: () => {
        var o;
        console.log(
          "import butotn clicked, fileinputref",
          e.current
        ), (o = e.current) == null || o.click();
      },
      children: [
        "Import",
        /* @__PURE__ */ w.jsx(
          "input",
          {
            style: { display: "none" },
            ref: e,
            type: "file",
            accept: ".json",
            multiple: !0,
            onChange: n
          }
        )
      ]
    }
  );
}
const zS = 6;
function wY({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n
}) {
  const [r, o] = v.useState([]), { curFlowID: i } = v.useContext(O_), [a, s] = v.useState(), [l, u] = v.useState(!1), c = v.useRef(
    window.localStorage.getItem(yS) ?? Ur.RECENTLY_MODIFIED
  ), d = (h) => {
    s(h), o(oc().filter((b) => {
      var m;
      return (m = b.tags) == null ? void 0 : m.includes(h);
    }));
  }, f = () => {
    const h = oc(c.current);
    o(h);
  }, p = (h) => {
    o(E_(r, h)), c.current = h, window.localStorage.setItem(yS, h);
  }, g = (h) => {
    _H(h), f();
  };
  return v.useEffect(() => {
    f();
  }, []), /* @__PURE__ */ w.jsx(M_.Provider, { value: { setRecentFiles: o }, children: /* @__PURE__ */ w.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ w.jsxs(
    zW,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ w.jsx(Ol, {}),
        /* @__PURE__ */ w.jsxs(h_, { children: [
          /* @__PURE__ */ w.jsx(El, { children: /* @__PURE__ */ w.jsxs(_t, { alignItems: "center", justifyContent: "space-between", children: [
            /* @__PURE__ */ w.jsxs(_t, { gap: 4, children: [
              /* @__PURE__ */ w.jsx(nr, { mr: 4, children: "Workflows" }),
              /* @__PURE__ */ w.jsx(xY, {})
            ] }),
            /* @__PURE__ */ w.jsx(_t, { alignItems: "center", children: /* @__PURE__ */ w.jsx(RH, {}) })
          ] }) }),
          /* @__PURE__ */ w.jsxs(Ml, { children: [
            /* @__PURE__ */ w.jsxs(_t, { spacing: 2, wrap: "wrap", mb: 0, children: [
              a != null && /* @__PURE__ */ w.jsx(
                ol,
                {
                  "aria-label": "Close",
                  size: "sm",
                  icon: /* @__PURE__ */ w.jsx(pH, {}),
                  onClick: () => {
                    s(void 0), o(oc());
                  }
                }
              ),
              Ce == null ? void 0 : Ce.listAll().slice(0, l ? void 0 : zS).map((h) => /* @__PURE__ */ w.jsx(
                jn,
                {
                  variant: "solid",
                  width: "auto",
                  flexShrink: 0,
                  size: "sm",
                  py: 4,
                  onClick: () => d(h.name),
                  isActive: a === h.name,
                  children: h.name
                }
              )),
              ((Ce == null ? void 0 : Ce.listAll().length) ?? 0) > zS && /* @__PURE__ */ w.jsx(
                ol,
                {
                  "aria-label": "Show-all-tags",
                  size: "sm",
                  icon: l ? /* @__PURE__ */ w.jsx(iH, {}) : /* @__PURE__ */ w.jsx(vS, {}),
                  onClick: () => u(!l)
                }
              )
            ] }),
            /* @__PURE__ */ w.jsx(_t, { mb: 2, p: 0, justifyContent: "end", children: /* @__PURE__ */ w.jsxs(nf, { closeOnSelect: !0, children: [
              /* @__PURE__ */ w.jsx(
                jg,
                {
                  as: jn,
                  variant: "ghost",
                  size: "xs",
                  pr: 0,
                  rightIcon: /* @__PURE__ */ w.jsx(vS, { size: "16" }),
                  children: /* @__PURE__ */ w.jsxs(_t, { children: [
                    /* @__PURE__ */ w.jsx(nr, { children: "Sort by:" }),
                    /* @__PURE__ */ w.jsx(nr, { display: "inline-block", children: c.current })
                  ] })
                }
              ),
              /* @__PURE__ */ w.jsx(Lg, { children: /* @__PURE__ */ w.jsx(
                r_,
                {
                  value: c.current,
                  type: "radio",
                  onChange: (h) => p(h),
                  children: Object.values(Ur).map((h, b) => /* @__PURE__ */ w.jsx(zg, { value: h, children: h }, b))
                }
              ) })
            ] }) }),
            r.map((h) => /* @__PURE__ */ w.jsx(
              SY,
              {
                isSelected: h.id === i,
                workflow: h,
                loadWorkflowID: t,
                onDelete: g
              }
            ))
          ] })
        ] })
      ]
    }
  ) }) });
}
const CY = {
  last_node_id: 9,
  last_link_id: 9,
  nodes: [
    {
      id: 7,
      type: "CLIPTextEncode",
      pos: [413, 389],
      size: { 0: 425.27801513671875, 1: 180.6060791015625 },
      flags: {},
      order: 3,
      mode: 0,
      inputs: [{ name: "clip", type: "CLIP", link: 5 }],
      outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [6], slot_index: 0 }],
      properties: {},
      widgets_values: ["text, watermark"]
    },
    {
      id: 6,
      type: "CLIPTextEncode",
      pos: [415, 186],
      size: { 0: 422.84503173828125, 1: 164.31304931640625 },
      flags: {},
      order: 2,
      mode: 0,
      inputs: [{ name: "clip", type: "CLIP", link: 3 }],
      outputs: [{ name: "CONDITIONING", type: "CONDITIONING", links: [4], slot_index: 0 }],
      properties: {},
      widgets_values: ["beautiful scenery nature glass bottle landscape, , purple galaxy bottle,"]
    },
    {
      id: 5,
      type: "EmptyLatentImage",
      pos: [473, 609],
      size: { 0: 315, 1: 106 },
      flags: {},
      order: 1,
      mode: 0,
      outputs: [{ name: "LATENT", type: "LATENT", links: [2], slot_index: 0 }],
      properties: {},
      widgets_values: [512, 512, 1]
    },
    {
      id: 3,
      type: "KSampler",
      pos: [863, 186],
      size: { 0: 315, 1: 262 },
      flags: {},
      order: 4,
      mode: 0,
      inputs: [
        { name: "model", type: "MODEL", link: 1 },
        { name: "positive", type: "CONDITIONING", link: 4 },
        { name: "negative", type: "CONDITIONING", link: 6 },
        { name: "latent_image", type: "LATENT", link: 2 }
      ],
      outputs: [{ name: "LATENT", type: "LATENT", links: [7], slot_index: 0 }],
      properties: {},
      widgets_values: [156680208700286, !0, 20, 8, "euler", "normal", 1]
    },
    {
      id: 8,
      type: "VAEDecode",
      pos: [1209, 188],
      size: { 0: 210, 1: 46 },
      flags: {},
      order: 5,
      mode: 0,
      inputs: [
        { name: "samples", type: "LATENT", link: 7 },
        { name: "vae", type: "VAE", link: 8 }
      ],
      outputs: [{ name: "IMAGE", type: "IMAGE", links: [9], slot_index: 0 }],
      properties: {}
    },
    {
      id: 9,
      type: "SaveImage",
      pos: [1451, 189],
      size: { 0: 210, 1: 26 },
      flags: {},
      order: 6,
      mode: 0,
      inputs: [{ name: "images", type: "IMAGE", link: 9 }],
      properties: {}
    },
    {
      id: 4,
      type: "CheckpointLoaderSimple",
      pos: [26, 474],
      size: { 0: 315, 1: 98 },
      flags: {},
      order: 0,
      mode: 0,
      outputs: [
        { name: "MODEL", type: "MODEL", links: [1], slot_index: 0 },
        { name: "CLIP", type: "CLIP", links: [3, 5], slot_index: 1 },
        { name: "VAE", type: "VAE", links: [8], slot_index: 2 }
      ],
      properties: {},
      widgets_values: ["v1-5-pruned-emaonly.ckpt"]
    }
  ],
  links: [
    [1, 4, 0, 3, 0, "MODEL"],
    [2, 5, 0, 3, 3, "LATENT"],
    [3, 4, 1, 6, 0, "CLIP"],
    [4, 6, 0, 3, 1, "CONDITIONING"],
    [5, 4, 1, 7, 0, "CLIP"],
    [6, 7, 0, 3, 2, "CONDITIONING"],
    [7, 3, 0, 8, 0, "LATENT"],
    [8, 4, 2, 8, 1, "VAE"],
    [9, 8, 0, 9, 0, "IMAGE"]
  ],
  groups: [],
  config: {},
  extra: {},
  version: 0.4
};
function kY() {
  const e = v.useRef({}), [t, n] = v.useState(null), [r, o] = v.useState("root"), [i, a] = v.useState(!0), [s, l] = v.useState(null), u = v.useRef(null), c = (b) => {
    u.current = b, l(b);
  }, d = async () => {
    var y;
    const b = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(S) {
      },
      async addCustomNodeDefs(S) {
        e.current = S;
      }
    };
    zl.registerExtension(b);
    try {
      await PH();
    } catch (S) {
      console.error("error loading db", S);
    }
    a(!1);
    const m = localStorage.getItem("curFlowID");
    if (m)
      c(m), _e && n(((y = _e[m]) == null ? void 0 : y.name) ?? "");
    else {
      const S = localStorage.getItem("workflow"), x = wm({ json: S ?? "" });
      c(x.id), n(x.name ?? "");
    }
  };
  v.useEffect(() => {
    d(), setInterval(() => {
      if (u.current != null) {
        const b = JSON.stringify(zl.graph.serialize());
        localStorage.setItem("curFlowID", u.current), b != null && Sm(u.current, {
          json: b
        });
      }
    }, 1e3);
  }, []);
  const f = (b) => {
    u.current != null && Sm(u.current, {
      name: b
    });
  }, p = v.useCallback(
    oI(f, 700),
    []
  ), g = (b) => {
    if (_e == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    c(b);
    const m = _e[b];
    if (m == null) {
      alert("Error: Workflow not found! id: " + b);
      return;
    }
    zl.loadGraphData(JSON.parse(m.json)), n(m.name), o("root");
  }, h = () => {
    const b = CY, m = wm({ json: JSON.stringify(b) });
    c(m.id), n(m.name), zl.loadGraphData(b);
  };
  return i ? null : /* @__PURE__ */ w.jsx(O_.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ w.jsxs(
    Fe,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0
      },
      children: [
        /* @__PURE__ */ w.jsx(
          _t,
          {
            style: {
              padding: 8,
              position: "fixed",
              top: 0,
              left: 0
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            children: /* @__PURE__ */ w.jsxs(_t, { children: [
              /* @__PURE__ */ w.jsx(
                jn,
                {
                  size: "sm",
                  "aria-label": "workspace folder",
                  onClick: () => o("recentFlows"),
                  children: /* @__PURE__ */ w.jsxs(_t, { gap: 1, children: [
                    /* @__PURE__ */ w.jsx(w_, { size: 21 }),
                    /* @__PURE__ */ w.jsx(fH, { size: 8 })
                  ] })
                }
              ),
              /* @__PURE__ */ w.jsx(
                jn,
                {
                  size: "sm",
                  variant: "outline",
                  colorScheme: "teal",
                  "aria-label": "workspace folder",
                  onClick: () => h(),
                  px: 2.5,
                  children: /* @__PURE__ */ w.jsxs(_t, { gap: 1, children: [
                    /* @__PURE__ */ w.jsx(C_, { size: 16, color: "white" }),
                    /* @__PURE__ */ w.jsx(nr, { color: "white", fontSize: "sm", children: "New" })
                  ] })
                }
              ),
              /* @__PURE__ */ w.jsx(
                ef,
                {
                  variant: "unstyled",
                  placeholder: "Workflow name",
                  color: "white",
                  value: t ?? "",
                  maxWidth: 470,
                  onChange: (b) => {
                    n(b.target.value), p(b.target.value);
                  },
                  style: { width: `${(t == null ? void 0 : t.length) ?? 20}ch` }
                }
              )
            ] })
          }
        ),
        r === "recentFlows" && /* @__PURE__ */ w.jsx(
          wY,
          {
            onclose: () => o("root"),
            loadWorkflowID: g,
            onClickNewFlow: () => {
              h(), o("root");
            }
          }
        )
      ]
    }
  ) });
}
const lT = document.createElement("div");
document.body.append(lT);
const PY = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, _Y = l3({ config: PY });
Wp.createRoot(lT).render(
  /* @__PURE__ */ w.jsx(re.StrictMode, { children: /* @__PURE__ */ w.jsxs(_B, { children: [
    /* @__PURE__ */ w.jsx(bR, { initialColorMode: _Y.config.initialColorMode }),
    /* @__PURE__ */ w.jsx(kY, {})
  ] }) })
);
const Im = document.body, TY = { attributes: !0, attributeFilter: ["class"] }, EY = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of Im.classList)
        r.includes("chakra") && Im.classList.remove(r);
}, OY = new MutationObserver(EY);
OY.observe(Im, TY);
