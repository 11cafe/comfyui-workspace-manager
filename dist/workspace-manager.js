var dE = Object.defineProperty;
var fE = (e, t, n) => t in e ? dE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var yf = (e, t, n) => (fE(e, typeof t != "symbol" ? t + "" : t, n), n);
import { app as jl } from "/scripts/app.js";
function pE(e, t) {
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
function ll(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jS = { exports: {} }, ad = {}, zS = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul = Symbol.for("react.element"), hE = Symbol.for("react.portal"), mE = Symbol.for("react.fragment"), vE = Symbol.for("react.strict_mode"), gE = Symbol.for("react.profiler"), yE = Symbol.for("react.provider"), bE = Symbol.for("react.context"), SE = Symbol.for("react.forward_ref"), xE = Symbol.for("react.suspense"), wE = Symbol.for("react.memo"), CE = Symbol.for("react.lazy"), p0 = Symbol.iterator;
function kE(e) {
  return e === null || typeof e != "object" ? null : (e = p0 && e[p0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var NS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, VS = Object.assign, BS = {};
function xa(e, t, n) {
  this.props = e, this.context = t, this.refs = BS, this.updater = n || NS;
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
function WS() {
}
WS.prototype = xa.prototype;
function Im(e, t, n) {
  this.props = e, this.context = t, this.refs = BS, this.updater = n || NS;
}
var Rm = Im.prototype = new WS();
Rm.constructor = Im;
VS(Rm, xa.prototype);
Rm.isPureReactComponent = !0;
var h0 = Array.isArray, HS = Object.prototype.hasOwnProperty, $m = { current: null }, US = { key: !0, ref: !0, __self: !0, __source: !0 };
function GS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      HS.call(t, r) && !US.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: ul, type: e, key: i, ref: a, props: o, _owner: $m.current };
}
function PE(e, t) {
  return { $$typeof: ul, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Am(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ul;
}
function _E(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var m0 = /\/+/g;
function bf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? _E("" + e.key) : t.toString(36);
}
function Pu(e, t, n, r, o) {
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
          case ul:
          case hE:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + bf(a, 0) : r, h0(o) ? (n = "", e != null && (n = e.replace(m0, "$&/") + "/"), Pu(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Am(o) && (o = PE(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(m0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", h0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + bf(i, s);
      a += Pu(i, t, n, l, o);
    }
  else if (l = kE(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + bf(i, s++), a += Pu(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function zl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Pu(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function TE(e) {
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
var Mt = { current: null }, _u = { transition: null }, EE = { ReactCurrentDispatcher: Mt, ReactCurrentBatchConfig: _u, ReactCurrentOwner: $m };
ue.Children = { map: zl, forEach: function(e, t, n) {
  zl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return zl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return zl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Am(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = xa;
ue.Fragment = mE;
ue.Profiler = gE;
ue.PureComponent = Im;
ue.StrictMode = vE;
ue.Suspense = xE;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = EE;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = VS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = $m.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      HS.call(t, l) && !US.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: ul, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ue.createContext = function(e) {
  return e = { $$typeof: bE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: yE, _context: e }, e.Consumer = e;
};
ue.createElement = GS;
ue.createFactory = function(e) {
  var t = GS.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: SE, render: e };
};
ue.isValidElement = Am;
ue.lazy = function(e) {
  return { $$typeof: CE, _payload: { _status: -1, _result: e }, _init: TE };
};
ue.memo = function(e, t) {
  return { $$typeof: wE, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = _u.transition;
  _u.transition = {};
  try {
    e();
  } finally {
    _u.transition = t;
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
zS.exports = ue;
var g = zS.exports;
const re = /* @__PURE__ */ ll(g), v0 = /* @__PURE__ */ pE({
  __proto__: null,
  default: re
}, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OE = g, ME = Symbol.for("react.element"), IE = Symbol.for("react.fragment"), RE = Object.prototype.hasOwnProperty, $E = OE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, AE = { key: !0, ref: !0, __self: !0, __source: !0 };
function KS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    RE.call(t, r) && !AE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: ME, type: e, key: i, ref: a, props: o, _owner: $E.current };
}
ad.Fragment = IE;
ad.jsx = KS;
ad.jsxs = KS;
jS.exports = ad;
var x = jS.exports, Bp = {}, YS = { exports: {} }, tn = {}, qS = { exports: {} }, XS = {};
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, y = !1, h = !1, S = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(A) {
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
  function w(A) {
    if (h = !1, b(A), !y)
      if (n(l) !== null)
        y = !0, K(k);
      else {
        var j = n(u);
        j !== null && $(w, j.startTime - A);
      }
  }
  function k(A, j) {
    y = !1, h && (h = !1, v(T), T = -1), p = !0;
    var U = f;
    try {
      for (b(j), d = n(l); d !== null && (!(d.expirationTime > j) || A && !D()); ) {
        var V = d.callback;
        if (typeof V == "function") {
          d.callback = null, f = d.priorityLevel;
          var Y = V(d.expirationTime <= j);
          j = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(l) && r(l), b(j);
        } else
          r(l);
        d = n(l);
      }
      if (d !== null)
        var z = !0;
      else {
        var te = n(u);
        te !== null && $(w, te.startTime - j), z = !1;
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
  if (typeof m == "function")
    H = function() {
      m(G);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), W = L.port2;
    L.port1.onmessage = G, H = function() {
      W.postMessage(null);
    };
  } else
    H = function() {
      S(G, 0);
    };
  function K(A) {
    _ = A, P || (P = !0, H());
  }
  function $(A, j) {
    T = S(function() {
      A(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    y || p || (y = !0, K(k));
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
    return Y = U + Y, A = { id: c++, callback: j, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (h ? (v(T), T = -1) : h = !0, $(w, U - V))) : (A.sortIndex = Y, t(l, A), y || p || (y = !0, K(k))), A;
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
})(XS);
qS.exports = XS;
var DE = qS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QS = g, Zt = DE;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ZS = /* @__PURE__ */ new Set(), Ms = {};
function Zo(e, t) {
  ea(e, t), ea(e + "Capture", t);
}
function ea(e, t) {
  for (Ms[e] = t, e = 0; e < t.length; e++)
    ZS.add(t[e]);
}
var wr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wp = Object.prototype.hasOwnProperty, FE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g0 = {}, y0 = {};
function LE(e) {
  return Wp.call(y0, e) ? !0 : Wp.call(g0, e) ? !1 : FE.test(e) ? y0[e] = !0 : (g0[e] = !0, !1);
}
function jE(e, t, n, r) {
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
function zE(e, t, n, r) {
  if (t === null || typeof t > "u" || jE(e, t, n, r))
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
var Dm = /[\-:]([a-z])/g;
function Fm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Dm,
    Fm
  );
  ht[t] = new It(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Dm, Fm);
  ht[t] = new It(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Dm, Fm);
  ht[t] = new It(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new It(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new It("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new It(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lm(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (zE(t, n, o, r) && (n = null), r || o === null ? LE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Or = QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Nl = Symbol.for("react.element"), vi = Symbol.for("react.portal"), gi = Symbol.for("react.fragment"), jm = Symbol.for("react.strict_mode"), Hp = Symbol.for("react.profiler"), JS = Symbol.for("react.provider"), ex = Symbol.for("react.context"), zm = Symbol.for("react.forward_ref"), Up = Symbol.for("react.suspense"), Gp = Symbol.for("react.suspense_list"), Nm = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), tx = Symbol.for("react.offscreen"), b0 = Symbol.iterator;
function Ra(e) {
  return e === null || typeof e != "object" ? null : (e = b0 && e[b0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, Sf;
function qa(e) {
  if (Sf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sf = t && t[1] || "";
    }
  return `
` + Sf + e;
}
var xf = !1;
function wf(e, t) {
  if (!e || xf)
    return "";
  xf = !0;
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
    xf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qa(e) : "";
}
function NE(e) {
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
      return e = wf(e.type, !1), e;
    case 11:
      return e = wf(e.type.render, !1), e;
    case 1:
      return e = wf(e.type, !0), e;
    default:
      return "";
  }
}
function Kp(e) {
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
    case Hp:
      return "Profiler";
    case jm:
      return "StrictMode";
    case Up:
      return "Suspense";
    case Gp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ex:
        return (e.displayName || "Context") + ".Consumer";
      case JS:
        return (e._context.displayName || "Context") + ".Provider";
      case zm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Nm:
        return t = e.displayName || null, t !== null ? t : Kp(e.type) || "Memo";
      case zr:
        t = e._payload, e = e._init;
        try {
          return Kp(e(t));
        } catch {
        }
    }
  return null;
}
function VE(e) {
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
      return Kp(t);
    case 8:
      return t === jm ? "StrictMode" : "Mode";
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
function nx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function BE(e) {
  var t = nx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Vl(e) {
  e._valueTracker || (e._valueTracker = BE(e));
}
function rx(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = nx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function oc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Yp(e, t) {
  var n = t.checked;
  return Ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function S0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ao(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ox(e, t) {
  t = t.checked, t != null && Lm(e, "checked", t, !1);
}
function qp(e, t) {
  ox(e, t);
  var n = ao(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Xp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xp(e, t.type, ao(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function x0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Xp(e, t, n) {
  (t !== "number" || oc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function Qp(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function w0(e, t) {
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
function ix(e, t) {
  var n = ao(t.value), r = ao(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function C0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ax(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ax(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Bl, sx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Bl = Bl || document.createElement("div"), Bl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Bl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Is(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ss = {
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
}, WE = ["Webkit", "ms", "Moz", "O"];
Object.keys(ss).forEach(function(e) {
  WE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ss[t] = ss[e];
  });
});
function lx(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ss.hasOwnProperty(e) && ss[e] ? ("" + t).trim() : t + "px";
}
function ux(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = lx(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var HE = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Jp(e, t) {
  if (t) {
    if (HE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function eh(e, t) {
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
var th = null;
function Vm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var nh = null, Vi = null, Bi = null;
function k0(e) {
  if (e = fl(e)) {
    if (typeof nh != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = dd(t), nh(e.stateNode, e.type, t));
  }
}
function cx(e) {
  Vi ? Bi ? Bi.push(e) : Bi = [e] : Vi = e;
}
function dx() {
  if (Vi) {
    var e = Vi, t = Bi;
    if (Bi = Vi = null, k0(e), t)
      for (e = 0; e < t.length; e++)
        k0(t[e]);
  }
}
function fx(e, t) {
  return e(t);
}
function px() {
}
var Cf = !1;
function hx(e, t, n) {
  if (Cf)
    return e(t, n);
  Cf = !0;
  try {
    return fx(e, t, n);
  } finally {
    Cf = !1, (Vi !== null || Bi !== null) && (px(), dx());
  }
}
function Rs(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = dd(n);
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
var rh = !1;
if (wr)
  try {
    var $a = {};
    Object.defineProperty($a, "passive", { get: function() {
      rh = !0;
    } }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
  } catch {
    rh = !1;
  }
function UE(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ls = !1, ic = null, ac = !1, oh = null, GE = { onError: function(e) {
  ls = !0, ic = e;
} };
function KE(e, t, n, r, o, i, a, s, l) {
  ls = !1, ic = null, UE.apply(GE, arguments);
}
function YE(e, t, n, r, o, i, a, s, l) {
  if (KE.apply(this, arguments), ls) {
    if (ls) {
      var u = ic;
      ls = !1, ic = null;
    } else
      throw Error(F(198));
    ac || (ac = !0, oh = u);
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
function mx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function P0(e) {
  if (Jo(e) !== e)
    throw Error(F(188));
}
function qE(e) {
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
          return P0(o), e;
        if (i === r)
          return P0(o), t;
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
function vx(e) {
  return e = qE(e), e !== null ? gx(e) : null;
}
function gx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = gx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var yx = Zt.unstable_scheduleCallback, _0 = Zt.unstable_cancelCallback, XE = Zt.unstable_shouldYield, QE = Zt.unstable_requestPaint, Ke = Zt.unstable_now, ZE = Zt.unstable_getCurrentPriorityLevel, Bm = Zt.unstable_ImmediatePriority, bx = Zt.unstable_UserBlockingPriority, sc = Zt.unstable_NormalPriority, JE = Zt.unstable_LowPriority, Sx = Zt.unstable_IdlePriority, sd = null, Qn = null;
function eO(e) {
  if (Qn && typeof Qn.onCommitFiberRoot == "function")
    try {
      Qn.onCommitFiberRoot(sd, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var An = Math.clz32 ? Math.clz32 : rO, tO = Math.log, nO = Math.LN2;
function rO(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (tO(e) / nO | 0) | 0;
}
var Wl = 64, Hl = 4194304;
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
function lc(e, t) {
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
      n = 31 - An(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function oO(e, t) {
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
function iO(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - An(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = oO(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function ih(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function xx() {
  var e = Wl;
  return Wl <<= 1, !(Wl & 4194240) && (Wl = 64), e;
}
function kf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function cl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - An(t), e[t] = n;
}
function aO(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - An(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Wm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - An(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var xe = 0;
function wx(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Cx, Hm, kx, Px, _x, ah = !1, Ul = [], qr = null, Xr = null, Qr = null, $s = /* @__PURE__ */ new Map(), As = /* @__PURE__ */ new Map(), Br = [], sO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function T0(e, t) {
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
      $s.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      As.delete(t.pointerId);
  }
}
function Aa(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = fl(t), t !== null && Hm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function lO(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return qr = Aa(qr, e, t, n, r, o), !0;
    case "dragenter":
      return Xr = Aa(Xr, e, t, n, r, o), !0;
    case "mouseover":
      return Qr = Aa(Qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return $s.set(i, Aa($s.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, As.set(i, Aa(As.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Tx(e) {
  var t = Ro(e.target);
  if (t !== null) {
    var n = Jo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = mx(n), t !== null) {
          e.blockedOn = t, _x(e.priority, function() {
            kx(n);
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
function Tu(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = sh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      th = r, n.target.dispatchEvent(r), th = null;
    } else
      return t = fl(n), t !== null && Hm(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function E0(e, t, n) {
  Tu(e) && n.delete(t);
}
function uO() {
  ah = !1, qr !== null && Tu(qr) && (qr = null), Xr !== null && Tu(Xr) && (Xr = null), Qr !== null && Tu(Qr) && (Qr = null), $s.forEach(E0), As.forEach(E0);
}
function Da(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ah || (ah = !0, Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, uO)));
}
function Ds(e) {
  function t(o) {
    return Da(o, e);
  }
  if (0 < Ul.length) {
    Da(Ul[0], e);
    for (var n = 1; n < Ul.length; n++) {
      var r = Ul[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (qr !== null && Da(qr, e), Xr !== null && Da(Xr, e), Qr !== null && Da(Qr, e), $s.forEach(t), As.forEach(t), n = 0; n < Br.length; n++)
    r = Br[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && (n = Br[0], n.blockedOn === null); )
    Tx(n), n.blockedOn === null && Br.shift();
}
var Wi = Or.ReactCurrentBatchConfig, uc = !0;
function cO(e, t, n, r) {
  var o = xe, i = Wi.transition;
  Wi.transition = null;
  try {
    xe = 1, Um(e, t, n, r);
  } finally {
    xe = o, Wi.transition = i;
  }
}
function dO(e, t, n, r) {
  var o = xe, i = Wi.transition;
  Wi.transition = null;
  try {
    xe = 4, Um(e, t, n, r);
  } finally {
    xe = o, Wi.transition = i;
  }
}
function Um(e, t, n, r) {
  if (uc) {
    var o = sh(e, t, n, r);
    if (o === null)
      Af(e, t, r, cc, n), T0(e, r);
    else if (lO(o, e, t, n, r))
      r.stopPropagation();
    else if (T0(e, r), t & 4 && -1 < sO.indexOf(e)) {
      for (; o !== null; ) {
        var i = fl(o);
        if (i !== null && Cx(i), i = sh(e, t, n, r), i === null && Af(e, t, r, cc, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Af(e, t, r, null, n);
  }
}
var cc = null;
function sh(e, t, n, r) {
  if (cc = null, e = Vm(r), e = Ro(e), e !== null)
    if (t = Jo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = mx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return cc = e, null;
}
function Ex(e) {
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
      switch (ZE()) {
        case Bm:
          return 1;
        case bx:
          return 4;
        case sc:
        case JE:
          return 16;
        case Sx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kr = null, Gm = null, Eu = null;
function Ox() {
  if (Eu)
    return Eu;
  var e, t = Gm, n = t.length, r, o = "value" in Kr ? Kr.value : Kr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return Eu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ou(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Gl() {
  return !0;
}
function O0() {
  return !1;
}
function nn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Gl : O0, this.isPropagationStopped = O0, this;
  }
  return Ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Gl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Gl);
  }, persist: function() {
  }, isPersistent: Gl }), t;
}
var wa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Km = nn(wa), dl = Ve({}, wa, { view: 0, detail: 0 }), fO = nn(dl), Pf, _f, Fa, ld = Ve({}, dl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ym, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Fa && (Fa && e.type === "mousemove" ? (Pf = e.screenX - Fa.screenX, _f = e.screenY - Fa.screenY) : _f = Pf = 0, Fa = e), Pf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : _f;
} }), M0 = nn(ld), pO = Ve({}, ld, { dataTransfer: 0 }), hO = nn(pO), mO = Ve({}, dl, { relatedTarget: 0 }), Tf = nn(mO), vO = Ve({}, wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gO = nn(vO), yO = Ve({}, wa, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), bO = nn(yO), SO = Ve({}, wa, { data: 0 }), I0 = nn(SO), xO = {
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
}, wO = {
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
}, CO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function kO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = CO[e]) ? !!t[e] : !1;
}
function Ym() {
  return kO;
}
var PO = Ve({}, dl, { key: function(e) {
  if (e.key) {
    var t = xO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ou(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ym, charCode: function(e) {
  return e.type === "keypress" ? Ou(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ou(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), _O = nn(PO), TO = Ve({}, ld, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), R0 = nn(TO), EO = Ve({}, dl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ym }), OO = nn(EO), MO = Ve({}, wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), IO = nn(MO), RO = Ve({}, ld, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $O = nn(RO), AO = [9, 13, 27, 32], qm = wr && "CompositionEvent" in window, us = null;
wr && "documentMode" in document && (us = document.documentMode);
var DO = wr && "TextEvent" in window && !us, Mx = wr && (!qm || us && 8 < us && 11 >= us), $0 = " ", A0 = !1;
function Ix(e, t) {
  switch (e) {
    case "keyup":
      return AO.indexOf(t.keyCode) !== -1;
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
function Rx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yi = !1;
function FO(e, t) {
  switch (e) {
    case "compositionend":
      return Rx(t);
    case "keypress":
      return t.which !== 32 ? null : (A0 = !0, $0);
    case "textInput":
      return e = t.data, e === $0 && A0 ? null : e;
    default:
      return null;
  }
}
function LO(e, t) {
  if (yi)
    return e === "compositionend" || !qm && Ix(e, t) ? (e = Ox(), Eu = Gm = Kr = null, yi = !1, e) : null;
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
      return Mx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function D0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jO[e.type] : t === "textarea";
}
function $x(e, t, n, r) {
  cx(r), t = dc(t, "onChange"), 0 < t.length && (n = new Km("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var cs = null, Fs = null;
function zO(e) {
  Hx(e, 0);
}
function ud(e) {
  var t = xi(e);
  if (rx(t))
    return e;
}
function NO(e, t) {
  if (e === "change")
    return t;
}
var Ax = !1;
if (wr) {
  var Ef;
  if (wr) {
    var Of = "oninput" in document;
    if (!Of) {
      var F0 = document.createElement("div");
      F0.setAttribute("oninput", "return;"), Of = typeof F0.oninput == "function";
    }
    Ef = Of;
  } else
    Ef = !1;
  Ax = Ef && (!document.documentMode || 9 < document.documentMode);
}
function L0() {
  cs && (cs.detachEvent("onpropertychange", Dx), Fs = cs = null);
}
function Dx(e) {
  if (e.propertyName === "value" && ud(Fs)) {
    var t = [];
    $x(t, Fs, e, Vm(e)), hx(zO, t);
  }
}
function VO(e, t, n) {
  e === "focusin" ? (L0(), cs = t, Fs = n, cs.attachEvent("onpropertychange", Dx)) : e === "focusout" && L0();
}
function BO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ud(Fs);
}
function WO(e, t) {
  if (e === "click")
    return ud(t);
}
function HO(e, t) {
  if (e === "input" || e === "change")
    return ud(t);
}
function UO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jn = typeof Object.is == "function" ? Object.is : UO;
function Ls(e, t) {
  if (jn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Wp.call(t, o) || !jn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function j0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function z0(e, t) {
  var n = j0(e);
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
    n = j0(n);
  }
}
function Fx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Lx() {
  for (var e = window, t = oc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = oc(e.document);
  }
  return t;
}
function Xm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function GO(e) {
  var t = Lx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Fx(n.ownerDocument.documentElement, n)) {
    if (r !== null && Xm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = z0(n, i);
        var a = z0(
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
var KO = wr && "documentMode" in document && 11 >= document.documentMode, bi = null, lh = null, ds = null, uh = !1;
function N0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  uh || bi == null || bi !== oc(r) || (r = bi, "selectionStart" in r && Xm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ds && Ls(ds, r) || (ds = r, r = dc(lh, "onSelect"), 0 < r.length && (t = new Km("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bi)));
}
function Kl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Si = { animationend: Kl("Animation", "AnimationEnd"), animationiteration: Kl("Animation", "AnimationIteration"), animationstart: Kl("Animation", "AnimationStart"), transitionend: Kl("Transition", "TransitionEnd") }, Mf = {}, jx = {};
wr && (jx = document.createElement("div").style, "AnimationEvent" in window || (delete Si.animationend.animation, delete Si.animationiteration.animation, delete Si.animationstart.animation), "TransitionEvent" in window || delete Si.transitionend.transition);
function cd(e) {
  if (Mf[e])
    return Mf[e];
  if (!Si[e])
    return e;
  var t = Si[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in jx)
      return Mf[e] = t[n];
  return e;
}
var zx = cd("animationend"), Nx = cd("animationiteration"), Vx = cd("animationstart"), Bx = cd("transitionend"), Wx = /* @__PURE__ */ new Map(), V0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fo(e, t) {
  Wx.set(e, t), Zo(t, [e]);
}
for (var If = 0; If < V0.length; If++) {
  var Rf = V0[If], YO = Rf.toLowerCase(), qO = Rf[0].toUpperCase() + Rf.slice(1);
  fo(YO, "on" + qO);
}
fo(zx, "onAnimationEnd");
fo(Nx, "onAnimationIteration");
fo(Vx, "onAnimationStart");
fo("dblclick", "onDoubleClick");
fo("focusin", "onFocus");
fo("focusout", "onBlur");
fo(Bx, "onTransitionEnd");
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
var Za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), XO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));
function B0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, YE(r, t, void 0, e), e.currentTarget = null;
}
function Hx(e, t) {
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
          B0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          B0(o, s, u), i = l;
        }
    }
  }
  if (ac)
    throw e = oh, ac = !1, oh = null, e;
}
function Me(e, t) {
  var n = t[hh];
  n === void 0 && (n = t[hh] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ux(t, e, 2, !1), n.add(r));
}
function $f(e, t, n) {
  var r = 0;
  t && (r |= 4), Ux(n, e, r, t);
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function js(e) {
  if (!e[Yl]) {
    e[Yl] = !0, ZS.forEach(function(n) {
      n !== "selectionchange" && (XO.has(n) || $f(n, !1, e), $f(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yl] || (t[Yl] = !0, $f("selectionchange", !1, t));
  }
}
function Ux(e, t, n, r) {
  switch (Ex(t)) {
    case 1:
      var o = cO;
      break;
    case 4:
      o = dO;
      break;
    default:
      o = Um;
  }
  n = o.bind(null, t, n, e), o = void 0, !rh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Af(e, t, n, r, o) {
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
  hx(function() {
    var u = i, c = Vm(n), d = [];
    e: {
      var f = Wx.get(e);
      if (f !== void 0) {
        var p = Km, y = e;
        switch (e) {
          case "keypress":
            if (Ou(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = _O;
            break;
          case "focusin":
            y = "focus", p = Tf;
            break;
          case "focusout":
            y = "blur", p = Tf;
            break;
          case "beforeblur":
          case "afterblur":
            p = Tf;
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
            p = M0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = hO;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = OO;
            break;
          case zx:
          case Nx:
          case Vx:
            p = gO;
            break;
          case Bx:
            p = IO;
            break;
          case "scroll":
            p = fO;
            break;
          case "wheel":
            p = $O;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = bO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = R0;
        }
        var h = (t & 4) !== 0, S = !h && e === "scroll", v = h ? f !== null ? f + "Capture" : null : f;
        h = [];
        for (var m = u, b; m !== null; ) {
          b = m;
          var w = b.stateNode;
          if (b.tag === 5 && w !== null && (b = w, v !== null && (w = Rs(m, v), w != null && h.push(zs(m, w, b)))), S)
            break;
          m = m.return;
        }
        0 < h.length && (f = new p(f, y, null, n, c), d.push({ event: f, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== th && (y = n.relatedTarget || n.fromElement) && (Ro(y) || y[Cr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? Ro(y) : null, y !== null && (S = Jo(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (h = M0, w = "onMouseLeave", v = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (h = R0, w = "onPointerLeave", v = "onPointerEnter", m = "pointer"), S = p == null ? f : xi(p), b = y == null ? f : xi(y), f = new h(w, m + "leave", p, n, c), f.target = S, f.relatedTarget = b, w = null, Ro(c) === u && (h = new h(v, m + "enter", y, n, c), h.target = b, h.relatedTarget = S, w = h), S = w, p && y)
            t: {
              for (h = p, v = y, m = 0, b = h; b; b = li(b))
                m++;
              for (b = 0, w = v; w; w = li(w))
                b++;
              for (; 0 < m - b; )
                h = li(h), m--;
              for (; 0 < b - m; )
                v = li(v), b--;
              for (; m--; ) {
                if (h === v || v !== null && h === v.alternate)
                  break t;
                h = li(h), v = li(v);
              }
              h = null;
            }
          else
            h = null;
          p !== null && W0(d, f, p, h, !1), y !== null && S !== null && W0(d, S, y, h, !0);
        }
      }
      e: {
        if (f = u ? xi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = NO;
        else if (D0(f))
          if (Ax)
            k = HO;
          else {
            k = BO;
            var P = VO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = WO);
        if (k && (k = k(e, u))) {
          $x(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Xp(f, "number", f.value);
      }
      switch (P = u ? xi(u) : window, e) {
        case "focusin":
          (D0(P) || P.contentEditable === "true") && (bi = P, lh = u, ds = null);
          break;
        case "focusout":
          ds = lh = bi = null;
          break;
        case "mousedown":
          uh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          uh = !1, N0(d, n, c);
          break;
        case "selectionchange":
          if (KO)
            break;
        case "keydown":
        case "keyup":
          N0(d, n, c);
      }
      var _;
      if (qm)
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
        yi ? Ix(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Mx && n.locale !== "ko" && (yi || T !== "onCompositionStart" ? T === "onCompositionEnd" && yi && (_ = Ox()) : (Kr = c, Gm = "value" in Kr ? Kr.value : Kr.textContent, yi = !0)), P = dc(u, T), 0 < P.length && (T = new I0(T, e, null, n, c), d.push({ event: T, listeners: P }), _ ? T.data = _ : (_ = Rx(n), _ !== null && (T.data = _)))), (_ = DO ? FO(e, n) : LO(e, n)) && (u = dc(u, "onBeforeInput"), 0 < u.length && (c = new I0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    Hx(d, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function dc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Rs(e, n), i != null && r.unshift(zs(e, i, o)), i = Rs(e, t), i != null && r.push(zs(e, i, o))), e = e.return;
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
function W0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Rs(n, i), l != null && a.unshift(zs(n, l, s))) : o || (l = Rs(n, i), l != null && a.push(zs(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var QO = /\r\n?/g, ZO = /\u0000|\uFFFD/g;
function H0(e) {
  return (typeof e == "string" ? e : "" + e).replace(QO, `
`).replace(ZO, "");
}
function ql(e, t, n) {
  if (t = H0(t), H0(e) !== t && n)
    throw Error(F(425));
}
function fc() {
}
var ch = null, dh = null;
function fh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ph = typeof setTimeout == "function" ? setTimeout : void 0, JO = typeof clearTimeout == "function" ? clearTimeout : void 0, U0 = typeof Promise == "function" ? Promise : void 0, eM = typeof queueMicrotask == "function" ? queueMicrotask : typeof U0 < "u" ? function(e) {
  return U0.resolve(null).then(e).catch(tM);
} : ph;
function tM(e) {
  setTimeout(function() {
    throw e;
  });
}
function Df(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Ds(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ds(t);
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
function G0(e) {
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
var Ca = Math.random().toString(36).slice(2), Yn = "__reactFiber$" + Ca, Ns = "__reactProps$" + Ca, Cr = "__reactContainer$" + Ca, hh = "__reactEvents$" + Ca, nM = "__reactListeners$" + Ca, rM = "__reactHandles$" + Ca;
function Ro(e) {
  var t = e[Yn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Cr] || n[Yn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = G0(e); e !== null; ) {
          if (n = e[Yn])
            return n;
          e = G0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function fl(e) {
  return e = e[Yn] || e[Cr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xi(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function dd(e) {
  return e[Ns] || null;
}
var mh = [], wi = -1;
function po(e) {
  return { current: e };
}
function Re(e) {
  0 > wi || (e.current = mh[wi], mh[wi] = null, wi--);
}
function Te(e, t) {
  wi++, mh[wi] = e.current, e.current = t;
}
var so = {}, Ct = po(so), Dt = po(!1), Uo = so;
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
function pc() {
  Re(Dt), Re(Ct);
}
function K0(e, t, n) {
  if (Ct.current !== so)
    throw Error(F(168));
  Te(Ct, t), Te(Dt, n);
}
function Gx(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, VE(e) || "Unknown", o));
  return Ve({}, n, r);
}
function hc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || so, Uo = Ct.current, Te(Ct, e), Te(Dt, Dt.current), !0;
}
function Y0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Gx(e, t, Uo), r.__reactInternalMemoizedMergedChildContext = e, Re(Dt), Re(Ct), Te(Ct, e)) : Re(Dt), Te(Dt, n);
}
var cr = null, fd = !1, Ff = !1;
function Kx(e) {
  cr === null ? cr = [e] : cr.push(e);
}
function oM(e) {
  fd = !0, Kx(e);
}
function ho() {
  if (!Ff && cr !== null) {
    Ff = !0;
    var e = 0, t = xe;
    try {
      var n = cr;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      cr = null, fd = !1;
    } catch (o) {
      throw cr !== null && (cr = cr.slice(e + 1)), yx(Bm, ho), o;
    } finally {
      xe = t, Ff = !1;
    }
  }
  return null;
}
var Ci = [], ki = 0, mc = null, vc = 0, fn = [], pn = 0, Go = null, pr = 1, hr = "";
function ko(e, t) {
  Ci[ki++] = vc, Ci[ki++] = mc, mc = e, vc = t;
}
function Yx(e, t, n) {
  fn[pn++] = pr, fn[pn++] = hr, fn[pn++] = Go, Go = e;
  var r = pr;
  e = hr;
  var o = 32 - An(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - An(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, pr = 1 << 32 - An(t) + o | n << o | r, hr = i + e;
  } else
    pr = 1 << i | n << o | r, hr = e;
}
function Qm(e) {
  e.return !== null && (ko(e, 1), Yx(e, 1, 0));
}
function Zm(e) {
  for (; e === mc; )
    mc = Ci[--ki], Ci[ki] = null, vc = Ci[--ki], Ci[ki] = null;
  for (; e === Go; )
    Go = fn[--pn], fn[pn] = null, hr = fn[--pn], fn[pn] = null, pr = fn[--pn], fn[pn] = null;
}
var qt = null, Yt = null, De = !1, In = null;
function qx(e, t) {
  var n = hn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function q0(e, t) {
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
function vh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gh(e) {
  if (De) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!q0(e, t)) {
        if (vh(e))
          throw Error(F(418));
        t = Zr(n.nextSibling);
        var r = qt;
        t && q0(e, t) ? qx(r, n) : (e.flags = e.flags & -4097 | 2, De = !1, qt = e);
      }
    } else {
      if (vh(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, De = !1, qt = e;
    }
  }
}
function X0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function Xl(e) {
  if (e !== qt)
    return !1;
  if (!De)
    return X0(e), De = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fh(e.type, e.memoizedProps)), t && (t = Yt)) {
    if (vh(e))
      throw Xx(), Error(F(418));
    for (; t; )
      qx(e, t), t = Zr(t.nextSibling);
  }
  if (X0(e), e.tag === 13) {
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
function Xx() {
  for (var e = Yt; e; )
    e = Zr(e.nextSibling);
}
function na() {
  Yt = qt = null, De = !1;
}
function Jm(e) {
  In === null ? In = [e] : In.push(e);
}
var iM = Or.ReactCurrentBatchConfig;
function On(e, t) {
  if (e && e.defaultProps) {
    t = Ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var gc = po(null), yc = null, Pi = null, ev = null;
function tv() {
  ev = Pi = yc = null;
}
function nv(e) {
  var t = gc.current;
  Re(gc), e._currentValue = t;
}
function yh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Hi(e, t) {
  yc = e, ev = Pi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (At = !0), e.firstContext = null);
}
function bn(e) {
  var t = e._currentValue;
  if (ev !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Pi === null) {
      if (yc === null)
        throw Error(F(308));
      Pi = e, yc.dependencies = { lanes: 0, firstContext: e };
    } else
      Pi = Pi.next = e;
  return t;
}
var $o = null;
function rv(e) {
  $o === null ? $o = [e] : $o.push(e);
}
function Qx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, rv(t)) : (n.next = o.next, o.next = n), t.interleaved = n, kr(e, r);
}
function kr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nr = !1;
function ov(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Zx(e, t) {
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
  return o = r.interleaved, o === null ? (t.next = t, rv(r)) : (t.next = o.next, o.next = t), r.interleaved = t, kr(e, n);
}
function Mu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wm(e, n);
  }
}
function Q0(e, t) {
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
function bc(e, t, n, r) {
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
          var y = e, h = s;
          switch (f = t, p = n, h.tag) {
            case 1:
              if (y = h.payload, typeof y == "function") {
                d = y.call(p, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = h.payload, f = typeof y == "function" ? y.call(p, d, f) : y, f == null)
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
function Z0(e, t, n) {
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
var Jx = new QS.Component().refs;
function bh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pd = { isMounted: function(e) {
  return (e = e._reactInternals) ? Jo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Et(), o = to(e), i = gr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Jr(e, i, o), t !== null && (Dn(t, e, o, r), Mu(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Et(), o = to(e), i = gr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Jr(e, i, o), t !== null && (Dn(t, e, o, r), Mu(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Et(), r = to(e), o = gr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Jr(e, o, r), t !== null && (Dn(t, e, r, n), Mu(t, e, r));
} };
function J0(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Ls(n, r) || !Ls(o, i) : !0;
}
function ew(e, t, n) {
  var r = !1, o = so, i = t.contextType;
  return typeof i == "object" && i !== null ? i = bn(i) : (o = Ft(t) ? Uo : Ct.current, r = t.contextTypes, i = (r = r != null) ? ta(e, o) : so), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pd, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ey(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pd.enqueueReplaceState(t, t.state, null);
}
function Sh(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Jx, ov(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = bn(i) : (i = Ft(t) ? Uo : Ct.current, o.context = ta(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (bh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && pd.enqueueReplaceState(o, o.state, null), bc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
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
        s === Jx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Ql(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ty(e) {
  var t = e._init;
  return t(e._payload);
}
function tw(e) {
  function t(v, m) {
    if (e) {
      var b = v.deletions;
      b === null ? (v.deletions = [m], v.flags |= 16) : b.push(m);
    }
  }
  function n(v, m) {
    if (!e)
      return null;
    for (; m !== null; )
      t(v, m), m = m.sibling;
    return null;
  }
  function r(v, m) {
    for (v = /* @__PURE__ */ new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
    return v;
  }
  function o(v, m) {
    return v = no(v, m), v.index = 0, v.sibling = null, v;
  }
  function i(v, m, b) {
    return v.index = b, e ? (b = v.alternate, b !== null ? (b = b.index, b < m ? (v.flags |= 2, m) : b) : (v.flags |= 2, m)) : (v.flags |= 1048576, m);
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, m, b, w) {
    return m === null || m.tag !== 6 ? (m = Wf(b, v.mode, w), m.return = v, m) : (m = o(m, b), m.return = v, m);
  }
  function l(v, m, b, w) {
    var k = b.type;
    return k === gi ? c(v, m, b.props.children, w, b.key) : m !== null && (m.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && ty(k) === m.type) ? (w = o(m, b.props), w.ref = La(v, m, b), w.return = v, w) : (w = Fu(b.type, b.key, b.props, null, v.mode, w), w.ref = La(v, m, b), w.return = v, w);
  }
  function u(v, m, b, w) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== b.containerInfo || m.stateNode.implementation !== b.implementation ? (m = Hf(b, v.mode, w), m.return = v, m) : (m = o(m, b.children || []), m.return = v, m);
  }
  function c(v, m, b, w, k) {
    return m === null || m.tag !== 7 ? (m = zo(b, v.mode, w, k), m.return = v, m) : (m = o(m, b), m.return = v, m);
  }
  function d(v, m, b) {
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return m = Wf("" + m, v.mode, b), m.return = v, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Nl:
          return b = Fu(m.type, m.key, m.props, null, v.mode, b), b.ref = La(v, null, m), b.return = v, b;
        case vi:
          return m = Hf(m, v.mode, b), m.return = v, m;
        case zr:
          var w = m._init;
          return d(v, w(m._payload), b);
      }
      if (Xa(m) || Ra(m))
        return m = zo(m, v.mode, b, null), m.return = v, m;
      Ql(v, m);
    }
    return null;
  }
  function f(v, m, b, w) {
    var k = m !== null ? m.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return k !== null ? null : s(v, m, "" + b, w);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Nl:
          return b.key === k ? l(v, m, b, w) : null;
        case vi:
          return b.key === k ? u(v, m, b, w) : null;
        case zr:
          return k = b._init, f(
            v,
            m,
            k(b._payload),
            w
          );
      }
      if (Xa(b) || Ra(b))
        return k !== null ? null : c(v, m, b, w, null);
      Ql(v, b);
    }
    return null;
  }
  function p(v, m, b, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return v = v.get(b) || null, s(m, v, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Nl:
          return v = v.get(w.key === null ? b : w.key) || null, l(m, v, w, k);
        case vi:
          return v = v.get(w.key === null ? b : w.key) || null, u(m, v, w, k);
        case zr:
          var P = w._init;
          return p(v, m, b, P(w._payload), k);
      }
      if (Xa(w) || Ra(w))
        return v = v.get(b) || null, c(m, v, w, k, null);
      Ql(m, w);
    }
    return null;
  }
  function y(v, m, b, w) {
    for (var k = null, P = null, _ = m, T = m = 0, M = null; _ !== null && T < b.length; T++) {
      _.index > T ? (M = _, _ = null) : M = _.sibling;
      var I = f(v, _, b[T], w);
      if (I === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && I.alternate === null && t(v, _), m = i(I, m, T), P === null ? k = I : P.sibling = I, P = I, _ = M;
    }
    if (T === b.length)
      return n(v, _), De && ko(v, T), k;
    if (_ === null) {
      for (; T < b.length; T++)
        _ = d(v, b[T], w), _ !== null && (m = i(_, m, T), P === null ? k = _ : P.sibling = _, P = _);
      return De && ko(v, T), k;
    }
    for (_ = r(v, _); T < b.length; T++)
      M = p(_, v, T, b[T], w), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? T : M.key), m = i(M, m, T), P === null ? k = M : P.sibling = M, P = M);
    return e && _.forEach(function(D) {
      return t(v, D);
    }), De && ko(v, T), k;
  }
  function h(v, m, b, w) {
    var k = Ra(b);
    if (typeof k != "function")
      throw Error(F(150));
    if (b = k.call(b), b == null)
      throw Error(F(151));
    for (var P = k = null, _ = m, T = m = 0, M = null, I = b.next(); _ !== null && !I.done; T++, I = b.next()) {
      _.index > T ? (M = _, _ = null) : M = _.sibling;
      var D = f(v, _, I.value, w);
      if (D === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && D.alternate === null && t(v, _), m = i(D, m, T), P === null ? k = D : P.sibling = D, P = D, _ = M;
    }
    if (I.done)
      return n(
        v,
        _
      ), De && ko(v, T), k;
    if (_ === null) {
      for (; !I.done; T++, I = b.next())
        I = d(v, I.value, w), I !== null && (m = i(I, m, T), P === null ? k = I : P.sibling = I, P = I);
      return De && ko(v, T), k;
    }
    for (_ = r(v, _); !I.done; T++, I = b.next())
      I = p(_, v, T, I.value, w), I !== null && (e && I.alternate !== null && _.delete(I.key === null ? T : I.key), m = i(I, m, T), P === null ? k = I : P.sibling = I, P = I);
    return e && _.forEach(function(G) {
      return t(v, G);
    }), De && ko(v, T), k;
  }
  function S(v, m, b, w) {
    if (typeof b == "object" && b !== null && b.type === gi && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Nl:
          e: {
            for (var k = b.key, P = m; P !== null; ) {
              if (P.key === k) {
                if (k = b.type, k === gi) {
                  if (P.tag === 7) {
                    n(v, P.sibling), m = o(P, b.props.children), m.return = v, v = m;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && ty(k) === P.type) {
                  n(v, P.sibling), m = o(P, b.props), m.ref = La(v, P, b), m.return = v, v = m;
                  break e;
                }
                n(v, P);
                break;
              } else
                t(v, P);
              P = P.sibling;
            }
            b.type === gi ? (m = zo(b.props.children, v.mode, w, b.key), m.return = v, v = m) : (w = Fu(b.type, b.key, b.props, null, v.mode, w), w.ref = La(v, m, b), w.return = v, v = w);
          }
          return a(v);
        case vi:
          e: {
            for (P = b.key; m !== null; ) {
              if (m.key === P)
                if (m.tag === 4 && m.stateNode.containerInfo === b.containerInfo && m.stateNode.implementation === b.implementation) {
                  n(v, m.sibling), m = o(m, b.children || []), m.return = v, v = m;
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else
                t(v, m);
              m = m.sibling;
            }
            m = Hf(b, v.mode, w), m.return = v, v = m;
          }
          return a(v);
        case zr:
          return P = b._init, S(v, m, P(b._payload), w);
      }
      if (Xa(b))
        return y(v, m, b, w);
      if (Ra(b))
        return h(v, m, b, w);
      Ql(v, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, m !== null && m.tag === 6 ? (n(v, m.sibling), m = o(m, b), m.return = v, v = m) : (n(v, m), m = Wf(b, v.mode, w), m.return = v, v = m), a(v)) : n(v, m);
  }
  return S;
}
var ra = tw(!0), nw = tw(!1), pl = {}, Zn = po(pl), Vs = po(pl), Bs = po(pl);
function Ao(e) {
  if (e === pl)
    throw Error(F(174));
  return e;
}
function iv(e, t) {
  switch (Te(Bs, t), Te(Vs, e), Te(Zn, pl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zp(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zp(t, e);
  }
  Re(Zn), Te(Zn, t);
}
function oa() {
  Re(Zn), Re(Vs), Re(Bs);
}
function rw(e) {
  Ao(Bs.current);
  var t = Ao(Zn.current), n = Zp(t, e.type);
  t !== n && (Te(Vs, e), Te(Zn, n));
}
function av(e) {
  Vs.current === e && (Re(Zn), Re(Vs));
}
var je = po(0);
function Sc(e) {
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
var Lf = [];
function sv() {
  for (var e = 0; e < Lf.length; e++)
    Lf[e]._workInProgressVersionPrimary = null;
  Lf.length = 0;
}
var Iu = Or.ReactCurrentDispatcher, jf = Or.ReactCurrentBatchConfig, Ko = 0, Ne = null, tt = null, it = null, xc = !1, fs = !1, Ws = 0, aM = 0;
function gt() {
  throw Error(F(321));
}
function lv(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!jn(e[n], t[n]))
      return !1;
  return !0;
}
function uv(e, t, n, r, o, i) {
  if (Ko = i, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Iu.current = e === null || e.memoizedState === null ? cM : dM, e = n(r, o), fs) {
    i = 0;
    do {
      if (fs = !1, Ws = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = tt = null, t.updateQueue = null, Iu.current = fM, e = n(r, o);
    } while (fs);
  }
  if (Iu.current = wc, t = tt !== null && tt.next !== null, Ko = 0, it = tt = Ne = null, xc = !1, t)
    throw Error(F(300));
  return e;
}
function cv() {
  var e = Ws !== 0;
  return Ws = 0, e;
}
function Wn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return it === null ? Ne.memoizedState = it = e : it = it.next = e, it;
}
function Sn() {
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
function Hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zf(e) {
  var t = Sn(), n = t.queue;
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
    l === null ? a = r : l.next = s, jn(r, t.memoizedState) || (At = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
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
function Nf(e) {
  var t = Sn(), n = t.queue;
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
    jn(i, t.memoizedState) || (At = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ow() {
}
function iw(e, t) {
  var n = Ne, r = Sn(), o = t(), i = !jn(r.memoizedState, o);
  if (i && (r.memoizedState = o, At = !0), r = r.queue, dv(lw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Us(9, sw.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Ko & 30 || aw(n, t, o);
  }
  return o;
}
function aw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function sw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, uw(t) && cw(e);
}
function lw(e, t, n) {
  return n(function() {
    uw(t) && cw(e);
  });
}
function uw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jn(e, n);
  } catch {
    return !0;
  }
}
function cw(e) {
  var t = kr(e, 1);
  t !== null && Dn(t, e, 1, -1);
}
function ny(e) {
  var t = Wn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hs, lastRenderedState: e }, t.queue = e, e = e.dispatch = uM.bind(null, Ne, e), [t.memoizedState, e];
}
function Us(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function dw() {
  return Sn().memoizedState;
}
function Ru(e, t, n, r) {
  var o = Wn();
  Ne.flags |= e, o.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r);
}
function hd(e, t, n, r) {
  var o = Sn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (tt !== null) {
    var a = tt.memoizedState;
    if (i = a.destroy, r !== null && lv(r, a.deps)) {
      o.memoizedState = Us(t, n, i, r);
      return;
    }
  }
  Ne.flags |= e, o.memoizedState = Us(1 | t, n, i, r);
}
function ry(e, t) {
  return Ru(8390656, 8, e, t);
}
function dv(e, t) {
  return hd(2048, 8, e, t);
}
function fw(e, t) {
  return hd(4, 2, e, t);
}
function pw(e, t) {
  return hd(4, 4, e, t);
}
function hw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function mw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hd(4, 4, hw.bind(null, t, e), n);
}
function fv() {
}
function vw(e, t) {
  var n = Sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gw(e, t) {
  var n = Sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function yw(e, t, n) {
  return Ko & 21 ? (jn(n, t) || (n = xx(), Ne.lanes |= n, Yo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n);
}
function sM(e, t) {
  var n = xe;
  xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = jf.transition;
  jf.transition = {};
  try {
    e(!1), t();
  } finally {
    xe = n, jf.transition = r;
  }
}
function bw() {
  return Sn().memoizedState;
}
function lM(e, t, n) {
  var r = to(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Sw(e))
    xw(t, n);
  else if (n = Qx(e, t, n, r), n !== null) {
    var o = Et();
    Dn(n, e, r, o), ww(n, t, r);
  }
}
function uM(e, t, n) {
  var r = to(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sw(e))
    xw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, jn(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, rv(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Qx(e, t, o, r), n !== null && (o = Et(), Dn(n, e, r, o), ww(n, t, r));
  }
}
function Sw(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function xw(e, t) {
  fs = xc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ww(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wm(e, n);
  }
}
var wc = { readContext: bn, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, cM = { readContext: bn, useCallback: function(e, t) {
  return Wn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: bn, useEffect: ry, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ru(
    4194308,
    4,
    hw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ru(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ru(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Wn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Wn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lM.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wn();
  return e = { current: e }, t.memoizedState = e;
}, useState: ny, useDebugValue: fv, useDeferredValue: function(e) {
  return Wn().memoizedState = e;
}, useTransition: function() {
  var e = ny(!1), t = e[0];
  return e = sM.bind(null, e[1]), Wn().memoizedState = e, [t, e];
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
    Ko & 30 || aw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, ry(lw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Us(9, sw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Wn(), t = st.identifierPrefix;
  if (De) {
    var n = hr, r = pr;
    n = (r & ~(1 << 32 - An(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ws++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = aM++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, dM = {
  readContext: bn,
  useCallback: vw,
  useContext: bn,
  useEffect: dv,
  useImperativeHandle: mw,
  useInsertionEffect: fw,
  useLayoutEffect: pw,
  useMemo: gw,
  useReducer: zf,
  useRef: dw,
  useState: function() {
    return zf(Hs);
  },
  useDebugValue: fv,
  useDeferredValue: function(e) {
    var t = Sn();
    return yw(t, tt.memoizedState, e);
  },
  useTransition: function() {
    var e = zf(Hs)[0], t = Sn().memoizedState;
    return [e, t];
  },
  useMutableSource: ow,
  useSyncExternalStore: iw,
  useId: bw,
  unstable_isNewReconciler: !1
}, fM = { readContext: bn, useCallback: vw, useContext: bn, useEffect: dv, useImperativeHandle: mw, useInsertionEffect: fw, useLayoutEffect: pw, useMemo: gw, useReducer: Nf, useRef: dw, useState: function() {
  return Nf(Hs);
}, useDebugValue: fv, useDeferredValue: function(e) {
  var t = Sn();
  return tt === null ? t.memoizedState = e : yw(t, tt.memoizedState, e);
}, useTransition: function() {
  var e = Nf(Hs)[0], t = Sn().memoizedState;
  return [e, t];
}, useMutableSource: ow, useSyncExternalStore: iw, useId: bw, unstable_isNewReconciler: !1 };
function ia(e, t) {
  try {
    var n = "", r = t;
    do
      n += NE(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Vf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var pM = typeof WeakMap == "function" ? WeakMap : Map;
function Cw(e, t, n) {
  n = gr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    kc || (kc = !0, Ih = r), xh(e, t);
  }, n;
}
function kw(e, t, n) {
  n = gr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      xh(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    xh(e, t), typeof r != "function" && (eo === null ? eo = /* @__PURE__ */ new Set([this]) : eo.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function oy(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pM();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = TM.bind(null, e, t, n), t.then(e, e));
}
function iy(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ay(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gr(-1, 1), t.tag = 2, Jr(n, t, 1))), n.lanes |= 1), e);
}
var hM = Or.ReactCurrentOwner, At = !1;
function _t(e, t, n, r) {
  t.child = e === null ? nw(t, null, n, r) : ra(t, e.child, n, r);
}
function sy(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Hi(t, o), r = uv(e, t, n, r, i, o), n = cv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (De && n && Qm(t), t.flags |= 1, _t(e, t, r, o), t.child);
}
function ly(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Sv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Pw(e, t, i, r, o)) : (e = Fu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ls, n(a, r) && e.ref === t.ref)
      return Pr(e, t, o);
  }
  return t.flags |= 1, e = no(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Pw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ls(i, r) && e.ref === t.ref)
      if (At = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (At = !0);
      else
        return t.lanes = e.lanes, Pr(e, t, o);
  }
  return wh(e, t, n, r, o);
}
function _w(e, t, n) {
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
  return _t(e, t, o, n), t.child;
}
function Tw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function wh(e, t, n, r, o) {
  var i = Ft(n) ? Uo : Ct.current;
  return i = ta(t, i), Hi(t, o), n = uv(e, t, n, r, i, o), r = cv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (De && r && Qm(t), t.flags |= 1, _t(e, t, n, o), t.child);
}
function uy(e, t, n, r, o) {
  if (Ft(n)) {
    var i = !0;
    hc(t);
  } else
    i = !1;
  if (Hi(t, o), t.stateNode === null)
    $u(e, t), ew(t, n, r), Sh(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = bn(u) : (u = Ft(n) ? Uo : Ct.current, u = ta(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && ey(t, a, r, u), Nr = !1;
    var f = t.memoizedState;
    a.state = f, bc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Dt.current || Nr ? (typeof c == "function" && (bh(t, n, c, r), l = t.memoizedState), (s = Nr || J0(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Zx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : On(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = bn(l) : (l = Ft(n) ? Uo : Ct.current, l = ta(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && ey(t, a, r, l), Nr = !1, f = t.memoizedState, a.state = f, bc(t, r, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || Dt.current || Nr ? (typeof p == "function" && (bh(t, n, p, r), y = t.memoizedState), (u = Nr || J0(t, n, u, r, f, y, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ch(e, t, n, r, i, o);
}
function Ch(e, t, n, r, o, i) {
  Tw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && Y0(t, n, !1), Pr(e, t, i);
  r = t.stateNode, hM.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = ra(t, e.child, null, i), t.child = ra(t, null, s, i)) : _t(e, t, s, i), t.memoizedState = r.state, o && Y0(t, n, !0), t.child;
}
function Ew(e) {
  var t = e.stateNode;
  t.pendingContext ? K0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && K0(e, t.context, !1), iv(e, t.containerInfo);
}
function cy(e, t, n, r, o) {
  return na(), Jm(o), t.flags |= 256, _t(e, t, n, r), t.child;
}
var kh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ph(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ow(e, t, n) {
  var r = t.pendingProps, o = je.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Te(je, o & 1), e === null)
    return gh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = gd(a, r, 0, null), e = zo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ph(n), t.memoizedState = kh, e) : pv(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return mM(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = no(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = no(s, i) : (i = zo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Ph(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = kh, r;
  }
  return i = e.child, e = i.sibling, r = no(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function pv(e, t) {
  return t = gd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Zl(e, t, n, r) {
  return r !== null && Jm(r), ra(t, e.child, null, n), e = pv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function mM(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Vf(Error(F(422))), Zl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = gd({ mode: "visible", children: r.children }, o, 0, null), i = zo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ra(t, e.child, null, a), t.child.memoizedState = Ph(a), t.memoizedState = kh, i);
  if (!(t.mode & 1))
    return Zl(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = Vf(i, r, void 0), Zl(e, t, a, r);
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, kr(e, o), Dn(r, e, o, -1));
    }
    return bv(), r = Vf(Error(F(421))), Zl(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = EM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Yt = Zr(o.nextSibling), qt = t, De = !0, In = null, e !== null && (fn[pn++] = pr, fn[pn++] = hr, fn[pn++] = Go, pr = e.id, hr = e.overflow, Go = t), t = pv(t, r.children), t.flags |= 4096, t);
}
function dy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yh(e.return, t, n);
}
function Bf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Mw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (_t(e, t, r.children, n), r = je.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && dy(e, n, t);
          else if (e.tag === 19)
            dy(e, n, t);
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
          e = n.alternate, e !== null && Sc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Bf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Sc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Bf(t, !0, n, null, i);
        break;
      case "together":
        Bf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $u(e, t) {
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
function vM(e, t, n) {
  switch (t.tag) {
    case 3:
      Ew(t), na();
      break;
    case 5:
      rw(t);
      break;
    case 1:
      Ft(t.type) && hc(t);
      break;
    case 4:
      iv(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Te(gc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Te(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ow(e, t, n) : (Te(je, je.current & 1), e = Pr(e, t, n), e !== null ? e.sibling : null);
      Te(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Mw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(je, je.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, _w(e, t, n);
  }
  return Pr(e, t, n);
}
var Iw, _h, Rw, $w;
Iw = function(e, t) {
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
_h = function() {
};
Rw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Ao(Zn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Yp(e, o), r = Yp(e, r), i = [];
        break;
      case "select":
        o = Ve({}, o, { value: void 0 }), r = Ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Qp(e, o), r = Qp(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fc);
    }
    Jp(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ms.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ms.hasOwnProperty(u) ? (l != null && u === "onScroll" && Me("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
$w = function(e, t, n, r) {
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
function gM(e, t, n) {
  var r = t.pendingProps;
  switch (Zm(t), t.tag) {
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
      return Ft(t.type) && pc(), yt(t), null;
    case 3:
      return r = t.stateNode, oa(), Re(Dt), Re(Ct), sv(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, In !== null && (Ah(In), In = null))), _h(e, t), yt(t), null;
    case 5:
      av(t);
      var o = Ao(Bs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Rw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return yt(t), null;
        }
        if (e = Ao(Zn.current), Xl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Yn] = t, r[Ns] = i, e = (t.mode & 1) !== 0, n) {
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
              S0(r, i), Me("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Me("invalid", r);
              break;
            case "textarea":
              w0(r, i), Me("invalid", r);
          }
          Jp(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && ql(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ql(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Ms.hasOwnProperty(a) && s != null && a === "onScroll" && Me("scroll", r);
            }
          switch (n) {
            case "input":
              Vl(r), x0(r, i, !0);
              break;
            case "textarea":
              Vl(r), C0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = fc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ax(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yn] = t, e[Ns] = r, Iw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = eh(n, r), n) {
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
                S0(e, r), o = Yp(e, r), Me("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ve({}, r, { value: void 0 }), Me("invalid", e);
                break;
              case "textarea":
                w0(e, r), o = Qp(e, r), Me("invalid", e);
                break;
              default:
                o = r;
            }
            Jp(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? ux(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && sx(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Is(e, l) : typeof l == "number" && Is(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ms.hasOwnProperty(i) ? l != null && i === "onScroll" && Me("scroll", e) : l != null && Lm(e, i, l, a));
              }
            switch (n) {
              case "input":
                Vl(e), x0(e, r, !1);
                break;
              case "textarea":
                Vl(e), C0(e);
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
                typeof o.onClick == "function" && (e.onclick = fc);
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
        $w(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Ao(Bs.current), Ao(Zn.current), Xl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Yn] = t, (i = r.nodeValue !== n) && (e = qt, e !== null))
            switch (e.tag) {
              case 3:
                ql(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ql(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yn] = t, t.stateNode = r;
      }
      return yt(t), null;
    case 13:
      if (Re(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (De && Yt !== null && t.mode & 1 && !(t.flags & 128))
          Xx(), na(), t.flags |= 98560, i = !1;
        else if (i = Xl(t), r !== null && r.dehydrated !== null) {
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
          In !== null && (Ah(In), In = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? nt === 0 && (nt = 3) : bv())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
    case 4:
      return oa(), _h(e, t), e === null && js(t.stateNode.containerInfo), yt(t), null;
    case 10:
      return nv(t.type._context), yt(t), null;
    case 17:
      return Ft(t.type) && pc(), yt(t), null;
    case 19:
      if (Re(je), i = t.memoizedState, i === null)
        return yt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          ja(i, !1);
        else {
          if (nt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Sc(e), a !== null) {
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
          if (e = Sc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ja(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !De)
              return yt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > aa && n !== 1073741824 && (t.flags |= 128, r = !0, ja(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = je.current, Te(je, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
    case 22:
    case 23:
      return yv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function yM(e, t) {
  switch (Zm(t), t.tag) {
    case 1:
      return Ft(t.type) && pc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return oa(), Re(Dt), Re(Ct), sv(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return av(t), null;
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
      return nv(t.type._context), null;
    case 22:
    case 23:
      return yv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jl = !1, St = !1, bM = typeof WeakSet == "function" ? WeakSet : Set, B = null;
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
function Th(e, t, n) {
  try {
    n();
  } catch (r) {
    We(e, t, r);
  }
}
var fy = !1;
function SM(e, t) {
  if (ch = uc, e = Lx(), Xm(e)) {
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
  for (dh = { focusedElem: e, selectionRange: n }, uc = !1, B = t; B !== null; )
    if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, B = e;
    else
      for (; B !== null; ) {
        t = B;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var h = y.memoizedProps, S = y.memoizedState, v = t.stateNode, m = v.getSnapshotBeforeUpdate(t.elementType === t.type ? h : On(t.type, h), S);
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (w) {
          We(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return y = fy, fy = !1, y;
}
function ps(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Th(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function md(e, t) {
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
function Eh(e) {
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
function Aw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Aw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yn], delete t[Ns], delete t[hh], delete t[nM], delete t[rM])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Dw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function py(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Dw(e.return))
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
function Oh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fc));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Oh(e, t, n), e = e.sibling; e !== null; )
      Oh(e, t, n), e = e.sibling;
}
function Mh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Mh(e, t, n), e = e.sibling; e !== null; )
      Mh(e, t, n), e = e.sibling;
}
var dt = null, Mn = !1;
function Ar(e, t, n) {
  for (n = n.child; n !== null; )
    Fw(e, t, n), n = n.sibling;
}
function Fw(e, t, n) {
  if (Qn && typeof Qn.onCommitFiberUnmount == "function")
    try {
      Qn.onCommitFiberUnmount(sd, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      St || _i(n, t);
    case 6:
      var r = dt, o = Mn;
      dt = null, Ar(e, t, n), dt = r, Mn = o, dt !== null && (Mn ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (Mn ? (e = dt, n = n.stateNode, e.nodeType === 8 ? Df(e.parentNode, n) : e.nodeType === 1 && Df(e, n), Ds(e)) : Df(dt, n.stateNode));
      break;
    case 4:
      r = dt, o = Mn, dt = n.stateNode.containerInfo, Mn = !0, Ar(e, t, n), dt = r, Mn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!St && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Th(n, t, a), o = o.next;
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
function hy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bM()), t.forEach(function(r) {
      var o = OM.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Tn(e, t) {
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
                dt = s.stateNode, Mn = !1;
                break e;
              case 3:
                dt = s.stateNode.containerInfo, Mn = !0;
                break e;
              case 4:
                dt = s.stateNode.containerInfo, Mn = !0;
                break e;
            }
            s = s.return;
          }
        if (dt === null)
          throw Error(F(160));
        Fw(i, a, o), dt = null, Mn = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        We(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Lw(t, e), t = t.sibling;
}
function Lw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Tn(t, e), Vn(e), r & 4) {
        try {
          ps(3, e, e.return), md(3, e);
        } catch (h) {
          We(e, e.return, h);
        }
        try {
          ps(5, e, e.return);
        } catch (h) {
          We(e, e.return, h);
        }
      }
      break;
    case 1:
      Tn(t, e), Vn(e), r & 512 && n !== null && _i(n, n.return);
      break;
    case 5:
      if (Tn(t, e), Vn(e), r & 512 && n !== null && _i(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Is(o, "");
        } catch (h) {
          We(e, e.return, h);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && ox(o, i), eh(s, a);
            var u = eh(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? ux(o, d) : c === "dangerouslySetInnerHTML" ? sx(o, d) : c === "children" ? Is(o, d) : Lm(o, c, d, u);
            }
            switch (s) {
              case "input":
                qp(o, i);
                break;
              case "textarea":
                ix(o, i);
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
            o[Ns] = i;
          } catch (h) {
            We(e, e.return, h);
          }
      }
      break;
    case 6:
      if (Tn(t, e), Vn(e), r & 4) {
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
      if (Tn(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Ds(t.containerInfo);
        } catch (h) {
          We(e, e.return, h);
        }
      break;
    case 4:
      Tn(t, e), Vn(e);
      break;
    case 13:
      Tn(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (vv = Ke())), r & 4 && hy(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (St = (u = St) || c, Tn(t, e), St = u) : Tn(t, e), Vn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (B = e, c = e.child; c !== null; ) {
            for (d = B = c; B !== null; ) {
              switch (f = B, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ps(4, f, f.return);
                  break;
                case 1:
                  _i(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
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
                    vy(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, B = p) : vy(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = lx("display", a));
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
      Tn(t, e), Vn(e), r & 4 && hy(e);
      break;
    case 21:
      break;
    default:
      Tn(
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
          if (Dw(n)) {
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
          r.flags & 32 && (Is(o, ""), r.flags &= -33);
          var i = py(e);
          Mh(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = py(e);
          Oh(e, s, a);
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
function xM(e, t, n) {
  B = e, jw(e);
}
function jw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Jl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || St;
        s = Jl;
        var u = St;
        if (Jl = a, (St = l) && !u)
          for (B = o; B !== null; )
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? gy(o) : l !== null ? (l.return = a, B = l) : gy(o);
        for (; i !== null; )
          B = i, jw(i), i = i.sibling;
        B = o, Jl = s, St = u;
      }
      my(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : my(e);
  }
}
function my(e) {
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
              St || md(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !St)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : On(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Z0(t, i, r);
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
                Z0(t, a, n);
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
                    d !== null && Ds(d);
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
        St || t.flags & 512 && Eh(t);
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
function vy(e) {
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
function gy(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            md(4, t);
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
            Eh(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Eh(t);
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
var wM = Math.ceil, Cc = Or.ReactCurrentDispatcher, hv = Or.ReactCurrentOwner, vn = Or.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Kt = 0, Ti = po(0), nt = 0, Gs = null, Yo = 0, vd = 0, mv = 0, hs = null, Rt = null, vv = 0, aa = 1 / 0, ur = null, kc = !1, Ih = null, eo = null, eu = !1, Yr = null, Pc = 0, ms = 0, Rh = null, Au = -1, Du = 0;
function Et() {
  return he & 6 ? Ke() : Au !== -1 ? Au : Au = Ke();
}
function to(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : iM.transition !== null ? (Du === 0 && (Du = xx()), Du) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ex(e.type)), e) : 1;
}
function Dn(e, t, n, r) {
  if (50 < ms)
    throw ms = 0, Rh = null, Error(F(185));
  cl(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (vd |= n), nt === 4 && Wr(e, pt)), Lt(e, r), n === 1 && he === 0 && !(t.mode & 1) && (aa = Ke() + 500, fd && ho()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  iO(e, t);
  var r = lc(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && _0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && _0(n), t === 1)
      e.tag === 0 ? oM(yy.bind(null, e)) : Kx(yy.bind(null, e)), eM(function() {
        !(he & 6) && ho();
      }), n = null;
    else {
      switch (wx(r)) {
        case 1:
          n = Bm;
          break;
        case 4:
          n = bx;
          break;
        case 16:
          n = sc;
          break;
        case 536870912:
          n = Sx;
          break;
        default:
          n = sc;
      }
      n = Gw(n, zw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function zw(e, t) {
  if (Au = -1, Du = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Ui() && e.callbackNode !== n)
    return null;
  var r = lc(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = _c(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Vw();
    (st !== e || pt !== t) && (ur = null, aa = Ke() + 500, jo(e, t));
    do
      try {
        PM();
        break;
      } catch (s) {
        Nw(e, s);
      }
    while (!0);
    tv(), Cc.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = nt);
  }
  if (t !== 0) {
    if (t === 2 && (o = ih(e), o !== 0 && (r = o, t = $h(e, o))), t === 1)
      throw n = Gs, jo(e, 0), Wr(e, r), Lt(e, Ke()), n;
    if (t === 6)
      Wr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !CM(o) && (t = _c(e, r), t === 2 && (i = ih(e), i !== 0 && (r = i, t = $h(e, i))), t === 1))
        throw n = Gs, jo(e, 0), Wr(e, r), Lt(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Po(e, Rt, ur);
          break;
        case 3:
          if (Wr(e, r), (r & 130023424) === r && (t = vv + 500 - Ke(), 10 < t)) {
            if (lc(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Et(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ph(Po.bind(null, e, Rt, ur), t);
            break;
          }
          Po(e, Rt, ur);
          break;
        case 4:
          if (Wr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - An(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wM(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ph(Po.bind(null, e, Rt, ur), r);
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
  return Lt(e, Ke()), e.callbackNode === n ? zw.bind(null, e) : null;
}
function $h(e, t) {
  var n = hs;
  return e.current.memoizedState.isDehydrated && (jo(e, t).flags |= 256), e = _c(e, t), e !== 2 && (t = Rt, Rt = n, t !== null && Ah(t)), e;
}
function Ah(e) {
  Rt === null ? Rt = e : Rt.push.apply(Rt, e);
}
function CM(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!jn(i(), o))
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
  for (t &= ~mv, t &= ~vd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - An(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function yy(e) {
  if (he & 6)
    throw Error(F(327));
  Ui();
  var t = lc(e, 0);
  if (!(t & 1))
    return Lt(e, Ke()), null;
  var n = _c(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ih(e);
    r !== 0 && (t = r, n = $h(e, r));
  }
  if (n === 1)
    throw n = Gs, jo(e, 0), Wr(e, t), Lt(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Po(e, Rt, ur), Lt(e, Ke()), null;
}
function gv(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (aa = Ke() + 500, fd && ho());
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
function yv() {
  Kt = Ti.current, Re(Ti);
}
function jo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, JO(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (Zm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && pc();
          break;
        case 3:
          oa(), Re(Dt), Re(Ct), sv();
          break;
        case 5:
          av(r);
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
          nv(r.type._context);
          break;
        case 22:
        case 23:
          yv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = no(e.current, null), pt = Kt = t, nt = 0, Gs = null, mv = vd = Yo = 0, Rt = hs = null, $o !== null) {
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
function Nw(e, t) {
  do {
    var n = Ze;
    try {
      if (tv(), Iu.current = wc, xc) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        xc = !1;
      }
      if (Ko = 0, it = tt = Ne = null, fs = !1, Ws = 0, hv.current = null, n === null || n.return === null) {
        nt = 1, Gs = t, Ze = null;
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
          var p = iy(a);
          if (p !== null) {
            p.flags &= -257, ay(p, a, s, i, t), p.mode & 1 && oy(i, u, t), t = p, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var h = /* @__PURE__ */ new Set();
              h.add(l), t.updateQueue = h;
            } else
              y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              oy(i, u, t), bv();
              break e;
            }
            l = Error(F(426));
          }
        } else if (De && s.mode & 1) {
          var S = iy(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), ay(S, a, s, i, t), Jm(ia(l, s));
            break e;
          }
        }
        i = l = ia(l, s), nt !== 4 && (nt = 2), hs === null ? hs = [i] : hs.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var v = Cw(i, l, t);
              Q0(i, v);
              break e;
            case 1:
              s = l;
              var m = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (eo === null || !eo.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = kw(i, s, t);
                Q0(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ww(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Vw() {
  var e = Cc.current;
  return Cc.current = wc, e === null ? wc : e;
}
function bv() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4), st === null || !(Yo & 268435455) && !(vd & 268435455) || Wr(st, pt);
}
function _c(e, t) {
  var n = he;
  he |= 2;
  var r = Vw();
  (st !== e || pt !== t) && (ur = null, jo(e, t));
  do
    try {
      kM();
      break;
    } catch (o) {
      Nw(e, o);
    }
  while (!0);
  if (tv(), he = n, Cc.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, nt;
}
function kM() {
  for (; Ze !== null; )
    Bw(Ze);
}
function PM() {
  for (; Ze !== null && !XE(); )
    Bw(Ze);
}
function Bw(e) {
  var t = Uw(e.alternate, e, Kt);
  e.memoizedProps = e.pendingProps, t === null ? Ww(e) : Ze = t, hv.current = null;
}
function Ww(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = yM(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        nt = 6, Ze = null;
        return;
      }
    } else if (n = gM(n, t, Kt), n !== null) {
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
    vn.transition = null, xe = 1, _M(e, t, n, r);
  } finally {
    vn.transition = o, xe = r;
  }
  return null;
}
function _M(e, t, n, r) {
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
  if (aO(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || eu || (eu = !0, Gw(sc, function() {
    return Ui(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = vn.transition, vn.transition = null;
    var a = xe;
    xe = 1;
    var s = he;
    he |= 4, hv.current = null, SM(e, n), Lw(n, e), GO(dh), uc = !!ch, dh = ch = null, e.current = n, xM(n), QE(), he = s, xe = a, vn.transition = i;
  } else
    e.current = n;
  if (eu && (eu = !1, Yr = e, Pc = o), i = e.pendingLanes, i === 0 && (eo = null), eO(n.stateNode), Lt(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (kc)
    throw kc = !1, e = Ih, Ih = null, e;
  return Pc & 1 && e.tag !== 0 && Ui(), i = e.pendingLanes, i & 1 ? e === Rh ? ms++ : (ms = 0, Rh = e) : ms = 0, ho(), null;
}
function Ui() {
  if (Yr !== null) {
    var e = wx(Pc), t = vn.transition, n = xe;
    try {
      if (vn.transition = null, xe = 16 > e ? 16 : e, Yr === null)
        var r = !1;
      else {
        if (e = Yr, Yr = null, Pc = 0, he & 6)
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
                      ps(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (Aw(c), c === u) {
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
              var y = i.alternate;
              if (y !== null) {
                var h = y.child;
                if (h !== null) {
                  y.child = null;
                  do {
                    var S = h.sibling;
                    h.sibling = null, h = S;
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
                      ps(9, i, i.return);
                  }
                var v = i.sibling;
                if (v !== null) {
                  v.return = i.return, B = v;
                  break e;
                }
                B = i.return;
              }
        }
        var m = e.current;
        for (B = m; B !== null; ) {
          a = B;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null)
            b.return = a, B = b;
          else
            e:
              for (a = m; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        md(9, s);
                    }
                  } catch (k) {
                    We(s, s.return, k);
                  }
                if (s === a) {
                  B = null;
                  break e;
                }
                var w = s.sibling;
                if (w !== null) {
                  w.return = s.return, B = w;
                  break e;
                }
                B = s.return;
              }
        }
        if (he = o, ho(), Qn && typeof Qn.onPostCommitFiberRoot == "function")
          try {
            Qn.onPostCommitFiberRoot(sd, e);
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
function by(e, t, n) {
  t = ia(n, t), t = Cw(e, t, 1), e = Jr(e, t, 1), t = Et(), e !== null && (cl(e, 1, t), Lt(e, t));
}
function We(e, t, n) {
  if (e.tag === 3)
    by(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        by(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (eo === null || !eo.has(r))) {
          e = ia(n, e), e = kw(t, e, 1), t = Jr(t, e, 1), e = Et(), t !== null && (cl(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function TM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Et(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (nt === 4 || nt === 3 && (pt & 130023424) === pt && 500 > Ke() - vv ? jo(e, 0) : mv |= n), Lt(e, t);
}
function Hw(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hl, Hl <<= 1, !(Hl & 130023424) && (Hl = 4194304)) : t = 1);
  var n = Et();
  e = kr(e, t), e !== null && (cl(e, t, n), Lt(e, n));
}
function EM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Hw(e, n);
}
function OM(e, t) {
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
  r !== null && r.delete(t), Hw(e, n);
}
var Uw;
Uw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current)
      At = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return At = !1, vM(e, t, n);
      At = !!(e.flags & 131072);
    }
  else
    At = !1, De && t.flags & 1048576 && Yx(t, vc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $u(e, t), e = t.pendingProps;
      var o = ta(t, Ct.current);
      Hi(t, n), o = uv(null, t, r, e, o, n);
      var i = cv();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(r) ? (i = !0, hc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ov(t), o.updater = pd, t.stateNode = o, o._reactInternals = t, Sh(t, r, e, n), t = Ch(null, t, r, !0, i, n)) : (t.tag = 0, De && i && Qm(t), _t(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($u(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = IM(r), e = On(r, e), o) {
          case 0:
            t = wh(null, t, r, e, n);
            break e;
          case 1:
            t = uy(null, t, r, e, n);
            break e;
          case 11:
            t = sy(null, t, r, e, n);
            break e;
          case 14:
            t = ly(null, t, r, On(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), wh(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), uy(e, t, r, o, n);
    case 3:
      e: {
        if (Ew(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Zx(e, t), bc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ia(Error(F(423)), t), t = cy(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ia(Error(F(424)), t), t = cy(e, t, r, n, o);
            break e;
          } else
            for (Yt = Zr(t.stateNode.containerInfo.firstChild), qt = t, De = !0, In = null, n = nw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (na(), r === o) {
            t = Pr(e, t, n);
            break e;
          }
          _t(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return rw(t), e === null && gh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, fh(r, o) ? a = null : i !== null && fh(r, i) && (t.flags |= 32), Tw(e, t), _t(e, t, a, n), t.child;
    case 6:
      return e === null && gh(t), null;
    case 13:
      return Ow(e, t, n);
    case 4:
      return iv(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ra(t, null, r, n) : _t(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), sy(e, t, r, o, n);
    case 7:
      return _t(e, t, t.pendingProps, n), t.child;
    case 8:
      return _t(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _t(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Te(gc, r._currentValue), r._currentValue = a, i !== null)
          if (jn(i.value, a)) {
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
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), yh(
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
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), yh(a, n, t), a = i.sibling;
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
        _t(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Hi(t, n), o = bn(o), r = r(o), t.flags |= 1, _t(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = On(r, t.pendingProps), o = On(r.type, o), ly(e, t, r, o, n);
    case 15:
      return Pw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), $u(e, t), t.tag = 1, Ft(r) ? (e = !0, hc(t)) : e = !1, Hi(t, n), ew(t, r, o), Sh(t, r, o, n), Ch(null, t, r, !0, e, n);
    case 19:
      return Mw(e, t, n);
    case 22:
      return _w(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Gw(e, t) {
  return yx(e, t);
}
function MM(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function hn(e, t, n, r) {
  return new MM(e, t, n, r);
}
function Sv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function IM(e) {
  if (typeof e == "function")
    return Sv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === zm)
      return 11;
    if (e === Nm)
      return 14;
  }
  return 2;
}
function no(e, t) {
  var n = e.alternate;
  return n === null ? (n = hn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Fu(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    Sv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case gi:
          return zo(n.children, o, i, t);
        case jm:
          a = 8, o |= 8;
          break;
        case Hp:
          return e = hn(12, n, t, o | 2), e.elementType = Hp, e.lanes = i, e;
        case Up:
          return e = hn(13, n, t, o), e.elementType = Up, e.lanes = i, e;
        case Gp:
          return e = hn(19, n, t, o), e.elementType = Gp, e.lanes = i, e;
        case tx:
          return gd(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case JS:
                a = 10;
                break e;
              case ex:
                a = 9;
                break e;
              case zm:
                a = 11;
                break e;
              case Nm:
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
function gd(e, t, n, r) {
  return e = hn(22, e, r, t), e.elementType = tx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Wf(e, t, n) {
  return e = hn(6, e, null, t), e.lanes = n, e;
}
function Hf(e, t, n) {
  return t = hn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function RM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kf(0), this.expirationTimes = kf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function xv(e, t, n, r, o, i, a, s, l) {
  return e = new RM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = hn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ov(i), e;
}
function $M(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Kw(e) {
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
      return Gx(e, n, t);
  }
  return t;
}
function Yw(e, t, n, r, o, i, a, s, l) {
  return e = xv(n, r, !0, e, o, i, a, s, l), e.context = Kw(null), n = e.current, r = Et(), o = to(n), i = gr(r, o), i.callback = t ?? null, Jr(n, i, o), e.current.lanes = o, cl(e, o, r), Lt(e, r), e;
}
function yd(e, t, n, r) {
  var o = t.current, i = Et(), a = to(o);
  return n = Kw(n), t.context === null ? t.context = n : t.pendingContext = n, t = gr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jr(o, t, a), e !== null && (Dn(e, o, a, i), Mu(e, o, a)), a;
}
function Tc(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sy(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function wv(e, t) {
  Sy(e, t), (e = e.alternate) && Sy(e, t);
}
function AM() {
  return null;
}
var qw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Cv(e) {
  this._internalRoot = e;
}
bd.prototype.render = Cv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  yd(e, t, null, null);
};
bd.prototype.unmount = Cv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qo(function() {
      yd(null, e, null, null);
    }), t[Cr] = null;
  }
};
function bd(e) {
  this._internalRoot = e;
}
bd.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Px();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++)
      ;
    Br.splice(n, 0, e), n === 0 && Tx(e);
  }
};
function kv(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function xy() {
}
function DM(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Tc(a);
        i.call(u);
      };
    }
    var a = Yw(t, r, e, 0, null, !1, !1, "", xy);
    return e._reactRootContainer = a, e[Cr] = a.current, js(e.nodeType === 8 ? e.parentNode : e), qo(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Tc(l);
      s.call(u);
    };
  }
  var l = xv(e, 0, !1, null, null, !1, !1, "", xy);
  return e._reactRootContainer = l, e[Cr] = l.current, js(e.nodeType === 8 ? e.parentNode : e), qo(function() {
    yd(t, l, n, r);
  }), l;
}
function xd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Tc(a);
        s.call(l);
      };
    }
    yd(t, a, e, o);
  } else
    a = DM(n, t, e, o, r);
  return Tc(a);
}
Cx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qa(t.pendingLanes);
        n !== 0 && (Wm(t, n | 1), Lt(t, Ke()), !(he & 6) && (aa = Ke() + 500, ho()));
      }
      break;
    case 13:
      qo(function() {
        var r = kr(e, 1);
        if (r !== null) {
          var o = Et();
          Dn(r, e, 1, o);
        }
      }), wv(e, 1);
  }
};
Hm = function(e) {
  if (e.tag === 13) {
    var t = kr(e, 134217728);
    if (t !== null) {
      var n = Et();
      Dn(t, e, 134217728, n);
    }
    wv(e, 134217728);
  }
};
kx = function(e) {
  if (e.tag === 13) {
    var t = to(e), n = kr(e, t);
    if (n !== null) {
      var r = Et();
      Dn(n, e, t, r);
    }
    wv(e, t);
  }
};
Px = function() {
  return xe;
};
_x = function(e, t) {
  var n = xe;
  try {
    return xe = e, t();
  } finally {
    xe = n;
  }
};
nh = function(e, t, n) {
  switch (t) {
    case "input":
      if (qp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = dd(r);
            if (!o)
              throw Error(F(90));
            rx(r), qp(r, o);
          }
        }
      }
      break;
    case "textarea":
      ix(e, n);
      break;
    case "select":
      t = n.value, t != null && Ni(e, !!n.multiple, t, !1);
  }
};
fx = gv;
px = qo;
var FM = { usingClientEntryPoint: !1, Events: [fl, xi, dd, cx, dx, gv] }, za = { findFiberByHostInstance: Ro, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, LM = { bundleType: za.bundleType, version: za.version, rendererPackageName: za.rendererPackageName, rendererConfig: za.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Or.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = vx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: za.findFiberByHostInstance || AM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tu.isDisabled && tu.supportsFiber)
    try {
      sd = tu.inject(LM), Qn = tu;
    } catch {
    }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FM;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!kv(t))
    throw Error(F(200));
  return $M(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!kv(e))
    throw Error(F(299));
  var n = !1, r = "", o = qw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = xv(e, 1, !1, null, null, n, !1, r, o), e[Cr] = t.current, js(e.nodeType === 8 ? e.parentNode : e), new Cv(t);
};
tn.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = vx(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return qo(e);
};
tn.hydrate = function(e, t, n) {
  if (!Sd(t))
    throw Error(F(200));
  return xd(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!kv(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = qw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Yw(t, null, e, 1, n ?? null, o, !1, i, a), e[Cr] = t.current, js(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new bd(t);
};
tn.render = function(e, t, n) {
  if (!Sd(t))
    throw Error(F(200));
  return xd(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function(e) {
  if (!Sd(e))
    throw Error(F(40));
  return e._reactRootContainer ? (qo(function() {
    xd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Cr] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = gv;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Sd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return xd(e, t, n, !1, r);
};
tn.version = "18.2.0-next-9e3b772b8-20220608";
function Xw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xw);
    } catch (e) {
      console.error(e);
    }
}
Xw(), YS.exports = tn;
var wd = YS.exports, wy = wd;
Bp.createRoot = wy.createRoot, Bp.hydrateRoot = wy.hydrateRoot;
var Qw = "Expected a function", Cy = NaN, jM = "[object Symbol]", zM = /^\s+|\s+$/g, NM = /^[-+]0x[0-9a-f]+$/i, VM = /^0b[01]+$/i, BM = /^0o[0-7]+$/i, WM = parseInt, HM = typeof Gr == "object" && Gr && Gr.Object === Object && Gr, UM = typeof self == "object" && self && self.Object === Object && self, GM = HM || UM || Function("return this")(), KM = Object.prototype, YM = KM.toString, qM = Math.max, XM = Math.min, Uf = function() {
  return GM.Date.now();
};
function QM(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Qw);
  t = ky(t) || 0, Ec(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? qM(ky(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var _ = r, T = o;
    return r = o = void 0, u = P, a = e.apply(T, _), a;
  }
  function y(P) {
    return u = P, s = setTimeout(v, t), c ? p(P) : a;
  }
  function h(P) {
    var _ = P - l, T = P - u, M = t - _;
    return d ? XM(M, i - T) : M;
  }
  function S(P) {
    var _ = P - l, T = P - u;
    return l === void 0 || _ >= t || _ < 0 || d && T >= i;
  }
  function v() {
    var P = Uf();
    if (S(P))
      return m(P);
    s = setTimeout(v, h(P));
  }
  function m(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function w() {
    return s === void 0 ? a : m(Uf());
  }
  function k() {
    var P = Uf(), _ = S(P);
    if (r = arguments, o = this, l = P, _) {
      if (s === void 0)
        return y(l);
      if (d)
        return s = setTimeout(v, t), p(l);
    }
    return s === void 0 && (s = setTimeout(v, t)), a;
  }
  return k.cancel = b, k.flush = w, k;
}
function ZM(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Qw);
  return Ec(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), QM(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Ec(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function JM(e) {
  return !!e && typeof e == "object";
}
function eI(e) {
  return typeof e == "symbol" || JM(e) && YM.call(e) == jM;
}
function ky(e) {
  if (typeof e == "number")
    return e;
  if (eI(e))
    return Cy;
  if (Ec(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ec(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(zM, "");
  var n = VM.test(e);
  return n || BM.test(e) ? WM(e.slice(2), n ? 2 : 8) : NM.test(e) ? Cy : +e;
}
var tI = ZM;
const nI = /* @__PURE__ */ ll(tI);
function rI(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function oI(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var iI = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(oI(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = rI(o);
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
}(), bt = "-ms-", Oc = "-moz-", ge = "-webkit-", Zw = "comm", Pv = "rule", _v = "decl", aI = "@import", Jw = "@keyframes", sI = "@layer", lI = Math.abs, Cd = String.fromCharCode, uI = Object.assign;
function cI(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function eC(e) {
  return e.trim();
}
function dI(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Dh(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ks(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function Tv(e) {
  return e.length;
}
function nu(e, t) {
  return t.push(e), e;
}
function fI(e, t) {
  return e.map(t).join("");
}
var kd = 1, sa = 1, tC = 0, Vt = 0, Qe = 0, ka = "";
function Pd(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: kd, column: sa, length: a, return: "" };
}
function Na(e, t) {
  return uI(Pd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function pI() {
  return Qe;
}
function hI() {
  return Qe = Vt > 0 ? ft(ka, --Vt) : 0, sa--, Qe === 10 && (sa = 1, kd--), Qe;
}
function Xt() {
  return Qe = Vt < tC ? ft(ka, Vt++) : 0, sa++, Qe === 10 && (sa = 1, kd++), Qe;
}
function Jn() {
  return ft(ka, Vt);
}
function Lu() {
  return Vt;
}
function hl(e, t) {
  return Ks(ka, e, t);
}
function Ys(e) {
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
function nC(e) {
  return kd = sa = 1, tC = Gn(ka = e), Vt = 0, [];
}
function rC(e) {
  return ka = "", e;
}
function ju(e) {
  return eC(hl(Vt - 1, Fh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mI(e) {
  for (; (Qe = Jn()) && Qe < 33; )
    Xt();
  return Ys(e) > 2 || Ys(Qe) > 3 ? "" : " ";
}
function vI(e, t) {
  for (; --t && Xt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return hl(e, Lu() + (t < 6 && Jn() == 32 && Xt() == 32));
}
function Fh(e) {
  for (; Xt(); )
    switch (Qe) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fh(Qe);
        break;
      case 40:
        e === 41 && Fh(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Vt;
}
function gI(e, t) {
  for (; Xt() && e + Qe !== 57; )
    if (e + Qe === 84 && Jn() === 47)
      break;
  return "/*" + hl(t, Vt - 1) + "*" + Cd(e === 47 ? e : Xt());
}
function yI(e) {
  for (; !Ys(Jn()); )
    Xt();
  return hl(e, Vt);
}
function bI(e) {
  return rC(zu("", null, null, null, [""], e = nC(e), 0, [0], e));
}
function zu(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, y = 0, h = 1, S = 1, v = 1, m = 0, b = "", w = o, k = i, P = r, _ = b; S; )
    switch (y = m, m = Xt()) {
      case 40:
        if (y != 108 && ft(_, d - 1) == 58) {
          Dh(_ += ye(ju(m), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += ju(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += mI(y);
        break;
      case 92:
        _ += vI(Lu() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            nu(SI(gI(Xt(), Lu()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * h:
        s[u++] = Gn(_) * v;
      case 125 * h:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            v == -1 && (_ = ye(_, /\f/g, "")), p > 0 && Gn(_) - d && nu(p > 32 ? _y(_ + ";", r, n, d - 1) : _y(ye(_, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (nu(P = Py(_, t, n, u, c, o, s, b, w = [], k = [], d), i), m === 123)
              if (c === 0)
                zu(_, t, P, P, w, i, d, s, k);
              else
                switch (f === 99 && ft(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    zu(e, P, P, r && nu(Py(e, P, P, 0, 0, o, s, b, o, w = [], d), k), o, k, d, s, r ? w : k);
                    break;
                  default:
                    zu(_, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, h = v = 1, b = _ = "", d = a;
        break;
      case 58:
        d = 1 + Gn(_), p = y;
      default:
        if (h < 1) {
          if (m == 123)
            --h;
          else if (m == 125 && h++ == 0 && hI() == 125)
            continue;
        }
        switch (_ += Cd(m), m * h) {
          case 38:
            v = c > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[u++] = (Gn(_) - 1) * v, v = 1;
            break;
          case 64:
            Jn() === 45 && (_ += ju(Xt())), f = Jn(), c = d = Gn(b = _ += yI(Lu())), m++;
            break;
          case 45:
            y === 45 && Gn(_) == 2 && (h = 0);
        }
    }
  return i;
}
function Py(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = Tv(f), y = 0, h = 0, S = 0; y < r; ++y)
    for (var v = 0, m = Ks(e, d + 1, d = lI(h = a[y])), b = e; v < p; ++v)
      (b = eC(h > 0 ? f[v] + " " + m : ye(m, /&\f/g, f[v]))) && (l[S++] = b);
  return Pd(e, t, n, o === 0 ? Pv : s, l, u, c);
}
function SI(e, t, n) {
  return Pd(e, t, n, Zw, Cd(pI()), Ks(e, 2, -2), 0);
}
function _y(e, t, n, r) {
  return Pd(e, t, n, _v, Ks(e, 0, r), Ks(e, r + 1, -1), r);
}
function Gi(e, t) {
  for (var n = "", r = Tv(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function xI(e, t, n, r) {
  switch (e.type) {
    case sI:
      if (e.children.length)
        break;
    case aI:
    case _v:
      return e.return = e.return || e.value;
    case Zw:
      return "";
    case Jw:
      return e.return = e.value + "{" + Gi(e.children, r) + "}";
    case Pv:
      e.value = e.props.join(",");
  }
  return Gn(n = Gi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function wI(e) {
  var t = Tv(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function CI(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ty = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function oC(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var kI = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Jn(), o === 38 && i === 12 && (n[r] = 1), !Ys(i); )
    Xt();
  return hl(t, Vt);
}, PI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ys(o)) {
      case 0:
        o === 38 && Jn() === 12 && (n[r] = 1), t[r] += kI(Vt - 1, n, r);
        break;
      case 2:
        t[r] += ju(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Jn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Cd(o);
    }
  while (o = Xt());
  return t;
}, _I = function(t, n) {
  return rC(PI(nC(t), n));
}, Ey = /* @__PURE__ */ new WeakMap(), TI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ey.get(r)) && !o) {
      Ey.set(t, !0);
      for (var i = [], a = _I(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, EI = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function iC(e, t) {
  switch (cI(e, t)) {
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
      return ge + e + Oc + e + bt + e + e;
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
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Oc + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Dh(e, "stretch") ? iC(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Gn(e) - 3 - (~Dh(e, "!important") && 10))) {
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
var OI = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case _v:
        t.return = iC(t.value, t.length);
        break;
      case Jw:
        return Gi([Na(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case Pv:
        if (t.length)
          return fI(t.props, function(i) {
            switch (dI(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Gi([Na(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + Oc + "$1")]
                })], o);
              case "::placeholder":
                return Gi([Na(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), Na(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + Oc + "$1")]
                }), Na(t, {
                  props: [ye(i, /:(plac\w+)/, bt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, MI = [OI], II = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(h) {
      var S = h.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || MI, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(h) {
      for (var S = h.getAttribute("data-emotion").split(" "), v = 1; v < S.length; v++)
        i[S[v]] = !0;
      s.push(h);
    }
  );
  var l, u = [TI, EI];
  {
    var c, d = [xI, CI(function(h) {
      c.insert(h);
    })], f = wI(u.concat(o, d)), p = function(S) {
      return Gi(bI(S), f);
    };
    l = function(S, v, m, b) {
      c = m, p(S ? S + "{" + v.styles + "}" : v.styles), b && (y.inserted[v.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new iI({
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
  return y.sheet.hydrate(s), y;
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
var aC = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, Ev = lt ? Symbol.for("react.element") : 60103, Ov = lt ? Symbol.for("react.portal") : 60106, _d = lt ? Symbol.for("react.fragment") : 60107, Td = lt ? Symbol.for("react.strict_mode") : 60108, Ed = lt ? Symbol.for("react.profiler") : 60114, Od = lt ? Symbol.for("react.provider") : 60109, Md = lt ? Symbol.for("react.context") : 60110, Mv = lt ? Symbol.for("react.async_mode") : 60111, Id = lt ? Symbol.for("react.concurrent_mode") : 60111, Rd = lt ? Symbol.for("react.forward_ref") : 60112, $d = lt ? Symbol.for("react.suspense") : 60113, RI = lt ? Symbol.for("react.suspense_list") : 60120, Ad = lt ? Symbol.for("react.memo") : 60115, Dd = lt ? Symbol.for("react.lazy") : 60116, $I = lt ? Symbol.for("react.block") : 60121, AI = lt ? Symbol.for("react.fundamental") : 60117, DI = lt ? Symbol.for("react.responder") : 60118, FI = lt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ev:
        switch (e = e.type, e) {
          case Mv:
          case Id:
          case _d:
          case Ed:
          case Td:
          case $d:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Md:
              case Rd:
              case Dd:
              case Ad:
              case Od:
                return e;
              default:
                return t;
            }
        }
      case Ov:
        return t;
    }
  }
}
function sC(e) {
  return rn(e) === Id;
}
we.AsyncMode = Mv;
we.ConcurrentMode = Id;
we.ContextConsumer = Md;
we.ContextProvider = Od;
we.Element = Ev;
we.ForwardRef = Rd;
we.Fragment = _d;
we.Lazy = Dd;
we.Memo = Ad;
we.Portal = Ov;
we.Profiler = Ed;
we.StrictMode = Td;
we.Suspense = $d;
we.isAsyncMode = function(e) {
  return sC(e) || rn(e) === Mv;
};
we.isConcurrentMode = sC;
we.isContextConsumer = function(e) {
  return rn(e) === Md;
};
we.isContextProvider = function(e) {
  return rn(e) === Od;
};
we.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ev;
};
we.isForwardRef = function(e) {
  return rn(e) === Rd;
};
we.isFragment = function(e) {
  return rn(e) === _d;
};
we.isLazy = function(e) {
  return rn(e) === Dd;
};
we.isMemo = function(e) {
  return rn(e) === Ad;
};
we.isPortal = function(e) {
  return rn(e) === Ov;
};
we.isProfiler = function(e) {
  return rn(e) === Ed;
};
we.isStrictMode = function(e) {
  return rn(e) === Td;
};
we.isSuspense = function(e) {
  return rn(e) === $d;
};
we.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === _d || e === Id || e === Ed || e === Td || e === $d || e === RI || typeof e == "object" && e !== null && (e.$$typeof === Dd || e.$$typeof === Ad || e.$$typeof === Od || e.$$typeof === Md || e.$$typeof === Rd || e.$$typeof === AI || e.$$typeof === DI || e.$$typeof === FI || e.$$typeof === $I);
};
we.typeOf = rn;
aC.exports = we;
var LI = aC.exports, lC = LI, jI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, zI = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, uC = {};
uC[lC.ForwardRef] = jI;
uC[lC.Memo] = zI;
var NI = !0;
function cC(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Iv = function(t, n, r) {
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
  NI === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Rv = function(t, n, r) {
  Iv(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function VI(e) {
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
var BI = {
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
}, WI = /[A-Z]|^ms/g, HI = /_EMO_([^_]+?)_([^]*?)_EMO_/g, dC = function(t) {
  return t.charCodeAt(1) === 45;
}, Oy = function(t) {
  return t != null && typeof t != "boolean";
}, Gf = /* @__PURE__ */ oC(function(e) {
  return dC(e) ? e : e.replace(WI, "-$&").toLowerCase();
}), My = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(HI, function(r, o, i) {
          return Kn = {
            name: o,
            styles: i,
            next: Kn
          }, o;
        });
  }
  return BI[t] !== 1 && !dC(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function qs(e, t, n) {
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
      return UI(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Kn, a = n(e);
        return Kn = i, qs(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function UI(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += qs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Oy(a) && (r += Gf(i) + ":" + My(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Oy(a[s]) && (r += Gf(i) + ":" + My(i, a[s]) + ";");
      else {
        var l = qs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Gf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Iy = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Kn, Fd = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Kn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += qs(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += qs(r, n, t[s]), o && (i += a[s]);
  Iy.lastIndex = 0;
  for (var l = "", u; (u = Iy.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = VI(i) + l;
  return {
    name: c,
    styles: i,
    next: Kn
  };
}, GI = function(t) {
  return t();
}, fC = v0.useInsertionEffect ? v0.useInsertionEffect : !1, pC = fC || GI, Ry = fC || g.useLayoutEffect, $v = {}.hasOwnProperty, hC = /* @__PURE__ */ g.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ II({
    key: "css"
  }) : null
);
hC.Provider;
var Av = function(t) {
  return /* @__PURE__ */ g.forwardRef(function(n, r) {
    var o = g.useContext(hC);
    return t(n, o, r);
  });
}, la = /* @__PURE__ */ g.createContext({}), KI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, YI = /* @__PURE__ */ Ty(function(e) {
  return Ty(function(t) {
    return KI(e, t);
  });
}), qI = function(t) {
  var n = g.useContext(la);
  return t.theme !== n && (n = YI(n)(t.theme)), /* @__PURE__ */ g.createElement(la.Provider, {
    value: n
  }, t.children);
}, Lh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", XI = function(t, n) {
  var r = {};
  for (var o in n)
    $v.call(n, o) && (r[o] = n[o]);
  return r[Lh] = t, r;
}, QI = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Iv(n, r, o), pC(function() {
    return Rv(n, r, o);
  }), null;
}, ZI = /* @__PURE__ */ Av(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Lh], i = [r], a = "";
  typeof e.className == "string" ? a = cC(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Fd(i, void 0, g.useContext(la));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    $v.call(e, u) && u !== "css" && u !== Lh && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(QI, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ g.createElement(o, l));
}), JI = ZI, ee = function(t, n) {
  var r = arguments;
  if (n == null || !$v.call(n, "css"))
    return g.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = JI, i[1] = XI(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return g.createElement.apply(null, i);
}, Ld = /* @__PURE__ */ Av(function(e, t) {
  var n = e.styles, r = Fd([n], void 0, g.useContext(la)), o = g.useRef();
  return Ry(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Ry(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Rv(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Dv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Fd(t);
}
var mC = function() {
  var t = Dv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, vC = String.raw, gC = vC`
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
`, eR = () => /* @__PURE__ */ x.jsx(Ld, { styles: gC }), tR = ({ scope: e = "" }) => /* @__PURE__ */ x.jsx(
  Ld,
  {
    styles: vC`
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

      ${gC}
    `
  }
);
function nR(e, t) {
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
  } = e, s = g.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = g.useContext(s);
    if (!c && n) {
      const d = new Error(
        i ?? nR(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [rR, oR] = Je({
  strict: !1,
  name: "PortalManagerContext"
});
function yC(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ x.jsx(rR, { value: { zIndex: n }, children: t });
}
yC.displayName = "PortalManager";
var ua = globalThis != null && globalThis.document ? g.useLayoutEffect : g.useEffect, [bC, iR] = Je({
  strict: !1,
  name: "PortalContext"
}), Fv = "chakra-portal", aR = ".chakra-portal", sR = (e) => /* @__PURE__ */ x.jsx(
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
), lR = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = g.useState(null), i = g.useRef(null), [, a] = g.useState({});
  g.useEffect(() => a({}), []);
  const s = iR(), l = oR();
  ua(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = Fv, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ x.jsx(sR, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? wd.createPortal(
    /* @__PURE__ */ x.jsx(bC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ x.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, uR = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = g.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Fv), l;
  }, [o]), [, s] = g.useState({});
  return ua(() => s({}), []), ua(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? wd.createPortal(
    /* @__PURE__ */ x.jsx(bC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function ml(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ x.jsx(uR, { containerRef: n, ...r }) : /* @__PURE__ */ x.jsx(lR, { ...r });
}
ml.className = Fv;
ml.selector = aR;
ml.displayName = "Portal";
function mo() {
  const e = g.useContext(
    la
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Lv = g.createContext({});
Lv.displayName = "ColorModeContext";
function Pa() {
  const e = g.useContext(Lv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function $y(e, t) {
  const { colorMode: n } = Pa();
  return n === "dark" ? t : e;
}
var ru = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function cR(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? ru.dark : ru.light), document.body.classList.remove(r ? ru.light : ru.dark);
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
var dR = "chakra-ui-color-mode";
function fR(e) {
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
var pR = fR(dR), Ay = () => {
};
function Dy(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function SC(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = pR
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = g.useState(
    () => Dy(a, s)
  ), [c, d] = g.useState(
    () => Dy(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: y, addListener: h } = g.useMemo(
    () => cR({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? c : l, v = g.useCallback(
    (w) => {
      const k = w === "system" ? f() : w;
      u(k), p(k === "dark"), y(k), a.set(k);
    },
    [a, f, p, y]
  );
  ua(() => {
    o === "system" && d(f());
  }, []), g.useEffect(() => {
    const w = a.get();
    if (w) {
      v(w);
      return;
    }
    if (o === "system") {
      v("system");
      return;
    }
    v(s);
  }, [a, s, o, v]);
  const m = g.useCallback(() => {
    v(S === "dark" ? "light" : "dark");
  }, [S, v]);
  g.useEffect(() => {
    if (r)
      return h(v);
  }, [r, h, v]);
  const b = g.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? Ay : m,
      setColorMode: t ? Ay : v,
      forced: t !== void 0
    }),
    [S, m, v, t]
  );
  return /* @__PURE__ */ x.jsx(Lv.Provider, { value: b, children: n });
}
SC.displayName = "ColorModeProvider";
var hR = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function mR(e) {
  let t = e;
  return hR.has(t) || (t = "light"), t;
}
function vR(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = mR(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function gR(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ x.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: vR(e) }
    }
  );
}
function yR() {
  const e = Pa(), t = mo();
  return { ...e, theme: t };
}
var ie = (...e) => e.filter(Boolean).join(" ");
function bR() {
  return !1;
}
function jt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var vl = (e) => {
  const { condition: t, message: n } = e;
  t && bR() && console.warn(n);
};
function Xn(e, ...t) {
  return SR(e) ? e(...t) : e;
}
var SR = (e) => typeof e == "function", dn = (e) => e ? "" : void 0, Kf = (e) => e ? !0 : void 0;
function Le(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function xC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var Mc = { exports: {} };
Mc.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", y = "[object GeneratorFunction]", h = "[object Map]", S = "[object Number]", v = "[object Null]", m = "[object Object]", b = "[object Proxy]", w = "[object RegExp]", k = "[object Set]", P = "[object String]", _ = "[object Undefined]", T = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", j = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, z = {};
  z[D] = z[G] = z[H] = z[L] = z[W] = z[K] = z[$] = z[A] = z[j] = !0, z[s] = z[l] = z[M] = z[c] = z[I] = z[d] = z[f] = z[p] = z[h] = z[S] = z[m] = z[w] = z[k] = z[P] = z[T] = !1;
  var te = typeof Gr == "object" && Gr && Gr.Object === Object && Gr, le = typeof self == "object" && self && self.Object === Object && self, ae = te || le || Function("return this")(), se = t && !t.nodeType && t, me = se && !0 && e && !e.nodeType && e, ke = me && me.exports === se, et = ke && te.process, qe = function() {
    try {
      var C = me && me.require && me.require("util").types;
      return C || et && et.binding && et.binding("util");
    } catch {
    }
  }(), on = qe && qe.isTypedArray;
  function _n(C, E, R) {
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
  }(), Ea = vt.toString, Il = $r.call(Object), Rl = RegExp(
    "^" + $r.call(an).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), yo = ke ? ae.Buffer : void 0, Xg = ae.Symbol, Qg = ae.Uint8Array, Zg = yo ? yo.allocUnsafe : void 0, Jg = Ge(Object.getPrototypeOf, Object), e0 = Object.create, sT = vt.propertyIsEnumerable, lT = Ut.splice, bo = Xg ? Xg.toStringTag : void 0, $l = function() {
    try {
      var C = cf(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), uT = yo ? yo.isBuffer : void 0, t0 = Math.max, cT = Date.now, n0 = cf(ae, "Map"), Oa = cf(Object, "create"), dT = /* @__PURE__ */ function() {
    function C() {
    }
    return function(E) {
      if (!xo(E))
        return {};
      if (e0)
        return e0(E);
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
  function fT() {
    this.__data__ = Oa ? Oa(null) : {}, this.size = 0;
  }
  function pT(C) {
    var E = this.has(C) && delete this.__data__[C];
    return this.size -= E ? 1 : 0, E;
  }
  function hT(C) {
    var E = this.__data__;
    if (Oa) {
      var R = E[C];
      return R === r ? void 0 : R;
    }
    return an.call(E, C) ? E[C] : void 0;
  }
  function mT(C) {
    var E = this.__data__;
    return Oa ? E[C] !== void 0 : an.call(E, C);
  }
  function vT(C, E) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = Oa && E === void 0 ? r : E, this;
  }
  So.prototype.clear = fT, So.prototype.delete = pT, So.prototype.get = hT, So.prototype.has = mT, So.prototype.set = vT;
  function sr(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function gT() {
    this.__data__ = [], this.size = 0;
  }
  function yT(C) {
    var E = this.__data__, R = Al(E, C);
    if (R < 0)
      return !1;
    var N = E.length - 1;
    return R == N ? E.pop() : lT.call(E, R, 1), --this.size, !0;
  }
  function bT(C) {
    var E = this.__data__, R = Al(E, C);
    return R < 0 ? void 0 : E[R][1];
  }
  function ST(C) {
    return Al(this.__data__, C) > -1;
  }
  function xT(C, E) {
    var R = this.__data__, N = Al(R, C);
    return N < 0 ? (++this.size, R.push([C, E])) : R[N][1] = E, this;
  }
  sr.prototype.clear = gT, sr.prototype.delete = yT, sr.prototype.get = bT, sr.prototype.has = ST, sr.prototype.set = xT;
  function ai(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function wT() {
    this.size = 0, this.__data__ = {
      hash: new So(),
      map: new (n0 || sr)(),
      string: new So()
    };
  }
  function CT(C) {
    var E = Fl(this, C).delete(C);
    return this.size -= E ? 1 : 0, E;
  }
  function kT(C) {
    return Fl(this, C).get(C);
  }
  function PT(C) {
    return Fl(this, C).has(C);
  }
  function _T(C, E) {
    var R = Fl(this, C), N = R.size;
    return R.set(C, E), this.size += R.size == N ? 0 : 1, this;
  }
  ai.prototype.clear = wT, ai.prototype.delete = CT, ai.prototype.get = kT, ai.prototype.has = PT, ai.prototype.set = _T;
  function si(C) {
    var E = this.__data__ = new sr(C);
    this.size = E.size;
  }
  function TT() {
    this.__data__ = new sr(), this.size = 0;
  }
  function ET(C) {
    var E = this.__data__, R = E.delete(C);
    return this.size = E.size, R;
  }
  function OT(C) {
    return this.__data__.get(C);
  }
  function MT(C) {
    return this.__data__.has(C);
  }
  function IT(C, E) {
    var R = this.__data__;
    if (R instanceof sr) {
      var N = R.__data__;
      if (!n0 || N.length < n - 1)
        return N.push([C, E]), this.size = ++R.size, this;
      R = this.__data__ = new ai(N);
    }
    return R.set(C, E), this.size = R.size, this;
  }
  si.prototype.clear = TT, si.prototype.delete = ET, si.prototype.get = OT, si.prototype.has = MT, si.prototype.set = IT;
  function RT(C, E) {
    var R = pf(C), N = !R && ff(C), pe = !R && !N && s0(C), Pe = !R && !N && !pe && u0(C), $e = R || N || pe || Pe, ce = $e ? Ir(C.length, String) : [], Ae = ce.length;
    for (var sn in C)
      (E || an.call(C, sn)) && !($e && // Safari 9 has enumerable `arguments.length` in strict mode.
      (sn == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (sn == "offset" || sn == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Pe && (sn == "buffer" || sn == "byteLength" || sn == "byteOffset") || // Skip index properties.
      i0(sn, Ae))) && ce.push(sn);
    return ce;
  }
  function lf(C, E, R) {
    (R !== void 0 && !Ll(C[E], R) || R === void 0 && !(E in C)) && uf(C, E, R);
  }
  function $T(C, E, R) {
    var N = C[E];
    (!(an.call(C, E) && Ll(N, R)) || R === void 0 && !(E in C)) && uf(C, E, R);
  }
  function Al(C, E) {
    for (var R = C.length; R--; )
      if (Ll(C[R][0], E))
        return R;
    return -1;
  }
  function uf(C, E, R) {
    E == "__proto__" && $l ? $l(C, E, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[E] = R;
  }
  var AT = KT();
  function Dl(C) {
    return C == null ? C === void 0 ? _ : v : bo && bo in Object(C) ? YT(C) : eE(C);
  }
  function r0(C) {
    return Ma(C) && Dl(C) == s;
  }
  function DT(C) {
    if (!xo(C) || ZT(C))
      return !1;
    var E = mf(C) ? Rl : V;
    return E.test(oE(C));
  }
  function FT(C) {
    return Ma(C) && l0(C.length) && !!z[Dl(C)];
  }
  function LT(C) {
    if (!xo(C))
      return JT(C);
    var E = a0(C), R = [];
    for (var N in C)
      N == "constructor" && (E || !an.call(C, N)) || R.push(N);
    return R;
  }
  function o0(C, E, R, N, pe) {
    C !== E && AT(E, function(Pe, $e) {
      if (pe || (pe = new si()), xo(Pe))
        jT(C, E, $e, R, o0, N, pe);
      else {
        var ce = N ? N(df(C, $e), Pe, $e + "", C, E, pe) : void 0;
        ce === void 0 && (ce = Pe), lf(C, $e, ce);
      }
    }, c0);
  }
  function jT(C, E, R, N, pe, Pe, $e) {
    var ce = df(C, R), Ae = df(E, R), sn = $e.get(Ae);
    if (sn) {
      lf(C, R, sn);
      return;
    }
    var Gt = Pe ? Pe(ce, Ae, R + "", C, E, $e) : void 0, Ia = Gt === void 0;
    if (Ia) {
      var vf = pf(Ae), gf = !vf && s0(Ae), f0 = !vf && !gf && u0(Ae);
      Gt = Ae, vf || gf || f0 ? pf(ce) ? Gt = ce : iE(ce) ? Gt = HT(ce) : gf ? (Ia = !1, Gt = VT(Ae, !0)) : f0 ? (Ia = !1, Gt = WT(Ae, !0)) : Gt = [] : aE(Ae) || ff(Ae) ? (Gt = ce, ff(ce) ? Gt = sE(ce) : (!xo(ce) || mf(ce)) && (Gt = qT(Ae))) : Ia = !1;
    }
    Ia && ($e.set(Ae, Gt), pe(Gt, Ae, N, Pe, $e), $e.delete(Ae)), lf(C, R, Gt);
  }
  function zT(C, E) {
    return nE(tE(C, E, d0), C + "");
  }
  var NT = $l ? function(C, E) {
    return $l(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: uE(E),
      writable: !0
    });
  } : d0;
  function VT(C, E) {
    if (E)
      return C.slice();
    var R = C.length, N = Zg ? Zg(R) : new C.constructor(R);
    return C.copy(N), N;
  }
  function BT(C) {
    var E = new C.constructor(C.byteLength);
    return new Qg(E).set(new Qg(C)), E;
  }
  function WT(C, E) {
    var R = E ? BT(C.buffer) : C.buffer;
    return new C.constructor(R, C.byteOffset, C.length);
  }
  function HT(C, E) {
    var R = -1, N = C.length;
    for (E || (E = Array(N)); ++R < N; )
      E[R] = C[R];
    return E;
  }
  function UT(C, E, R, N) {
    var pe = !R;
    R || (R = {});
    for (var Pe = -1, $e = E.length; ++Pe < $e; ) {
      var ce = E[Pe], Ae = N ? N(R[ce], C[ce], ce, R, C) : void 0;
      Ae === void 0 && (Ae = C[ce]), pe ? uf(R, ce, Ae) : $T(R, ce, Ae);
    }
    return R;
  }
  function GT(C) {
    return zT(function(E, R) {
      var N = -1, pe = R.length, Pe = pe > 1 ? R[pe - 1] : void 0, $e = pe > 2 ? R[2] : void 0;
      for (Pe = C.length > 3 && typeof Pe == "function" ? (pe--, Pe) : void 0, $e && XT(R[0], R[1], $e) && (Pe = pe < 3 ? void 0 : Pe, pe = 1), E = Object(E); ++N < pe; ) {
        var ce = R[N];
        ce && C(E, ce, N, Pe);
      }
      return E;
    });
  }
  function KT(C) {
    return function(E, R, N) {
      for (var pe = -1, Pe = Object(E), $e = N(E), ce = $e.length; ce--; ) {
        var Ae = $e[C ? ce : ++pe];
        if (R(Pe[Ae], Ae, Pe) === !1)
          break;
      }
      return E;
    };
  }
  function Fl(C, E) {
    var R = C.__data__;
    return QT(E) ? R[typeof E == "string" ? "string" : "hash"] : R.map;
  }
  function cf(C, E) {
    var R = mt(C, E);
    return DT(R) ? R : void 0;
  }
  function YT(C) {
    var E = an.call(C, bo), R = C[bo];
    try {
      C[bo] = void 0;
      var N = !0;
    } catch {
    }
    var pe = Ea.call(C);
    return N && (E ? C[bo] = R : delete C[bo]), pe;
  }
  function qT(C) {
    return typeof C.constructor == "function" && !a0(C) ? dT(Jg(C)) : {};
  }
  function i0(C, E) {
    var R = typeof C;
    return E = E ?? a, !!E && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < E;
  }
  function XT(C, E, R) {
    if (!xo(R))
      return !1;
    var N = typeof E;
    return (N == "number" ? hf(R) && i0(E, R.length) : N == "string" && E in R) ? Ll(R[E], C) : !1;
  }
  function QT(C) {
    var E = typeof C;
    return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? C !== "__proto__" : C === null;
  }
  function ZT(C) {
    return !!ii && ii in C;
  }
  function a0(C) {
    var E = C && C.constructor, R = typeof E == "function" && E.prototype || vt;
    return C === R;
  }
  function JT(C) {
    var E = [];
    if (C != null)
      for (var R in Object(C))
        E.push(R);
    return E;
  }
  function eE(C) {
    return Ea.call(C);
  }
  function tE(C, E, R) {
    return E = t0(E === void 0 ? C.length - 1 : E, 0), function() {
      for (var N = arguments, pe = -1, Pe = t0(N.length - E, 0), $e = Array(Pe); ++pe < Pe; )
        $e[pe] = N[E + pe];
      pe = -1;
      for (var ce = Array(E + 1); ++pe < E; )
        ce[pe] = N[pe];
      return ce[E] = R($e), _n(C, this, ce);
    };
  }
  function df(C, E) {
    if (!(E === "constructor" && typeof C[E] == "function") && E != "__proto__")
      return C[E];
  }
  var nE = rE(NT);
  function rE(C) {
    var E = 0, R = 0;
    return function() {
      var N = cT(), pe = i - (N - R);
      if (R = N, pe > 0) {
        if (++E >= o)
          return arguments[0];
      } else
        E = 0;
      return C.apply(void 0, arguments);
    };
  }
  function oE(C) {
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
  function Ll(C, E) {
    return C === E || C !== C && E !== E;
  }
  var ff = r0(/* @__PURE__ */ function() {
    return arguments;
  }()) ? r0 : function(C) {
    return Ma(C) && an.call(C, "callee") && !sT.call(C, "callee");
  }, pf = Array.isArray;
  function hf(C) {
    return C != null && l0(C.length) && !mf(C);
  }
  function iE(C) {
    return Ma(C) && hf(C);
  }
  var s0 = uT || cE;
  function mf(C) {
    if (!xo(C))
      return !1;
    var E = Dl(C);
    return E == p || E == y || E == u || E == b;
  }
  function l0(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function xo(C) {
    var E = typeof C;
    return C != null && (E == "object" || E == "function");
  }
  function Ma(C) {
    return C != null && typeof C == "object";
  }
  function aE(C) {
    if (!Ma(C) || Dl(C) != m)
      return !1;
    var E = Jg(C);
    if (E === null)
      return !0;
    var R = an.call(E, "constructor") && E.constructor;
    return typeof R == "function" && R instanceof R && $r.call(R) == Il;
  }
  var u0 = on ? fe(on) : FT;
  function sE(C) {
    return UT(C, c0(C));
  }
  function c0(C) {
    return hf(C) ? RT(C, !0) : LT(C);
  }
  var lE = GT(function(C, E, R, N) {
    o0(C, E, R, N);
  });
  function uE(C) {
    return function() {
      return C;
    };
  }
  function d0(C) {
    return C;
  }
  function cE() {
    return !1;
  }
  e.exports = lE;
})(Mc, Mc.exports);
var xR = Mc.exports;
const mn = /* @__PURE__ */ ll(xR);
var wR = (e) => /!(important)?$/.test(e), Fy = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, CR = (e, t) => (n) => {
  const r = String(t), o = wR(r), i = Fy(r), a = e ? `${e}.${i}` : i;
  let s = jt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = Fy(s), o ? `${s} !important` : s;
};
function jv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = CR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var ou = (...e) => (t) => e.reduce((n, r) => r(n), t);
function ln(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = jv({
      scale: e,
      transform: t
    }), r;
  };
}
var kR = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function PR(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: kR(t),
    transform: n ? jv({
      scale: n,
      compose: r
    }) : r
  };
}
var wC = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function _R() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...wC
  ].join(" ");
}
function TR() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...wC
  ].join(" ");
}
var ER = {
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
}, OR = {
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
function MR(e) {
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
var IR = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, jh = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, RR = new Set(Object.values(jh)), zh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), $R = (e) => e.trim();
function AR(e, t) {
  if (e == null || zh.has(e))
    return e;
  if (!(Nh(e) || zh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map($R).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in jh ? jh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (RR.has(f))
      return f;
    const p = f.indexOf(" "), [y, h] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = Nh(h) ? h : h && h.split(" "), v = `colors.${y}`, m = v in t.__cssMap ? t.__cssMap[v].varRef : y;
    return S ? [
      m,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : m;
  });
  return `${s}(${d.join(", ")})`;
}
var Nh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), DR = (e, t) => AR(e, t ?? {});
function FR(e) {
  return /^var\(--.+\)$/.test(e);
}
var LR = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, Bn = (e) => (t) => `${e}(${t})`, de = {
  filter(e) {
    return e !== "auto" ? e : ER;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : OR;
  },
  ring(e) {
    return MR(de.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? _R() : e === "auto-gpu" ? TR() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = LR(e);
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
    if (FR(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: DR,
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
    return e == null || Nh(e) || zh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = IR[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, O = {
  borderWidths: ln("borderWidths"),
  borderStyles: ln("borderStyles"),
  colors: ln("colors"),
  borders: ln("borders"),
  gradients: ln("gradients", de.gradient),
  radii: ln("radii", de.px),
  space: ln("space", ou(de.vh, de.px)),
  spaceT: ln("space", ou(de.vh, de.px)),
  degreeT(e) {
    return { property: e, transform: de.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: jv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: ln("sizes", ou(de.vh, de.px)),
  sizesT: ln("sizes", ou(de.vh, de.fraction)),
  shadows: ln("shadows"),
  logical: PR,
  blur: ln("blur", de.blur)
}, Nu = {
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
Object.assign(Nu, {
  bgImage: Nu.backgroundImage,
  bgImg: Nu.backgroundImage
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
var jR = {
  color: O.colors("color"),
  textColor: O.colors("color"),
  fill: O.colors("fill"),
  stroke: O.colors("stroke")
}, Vh = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Vh, {
  shadow: Vh.boxShadow
});
var zR = {
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
}, Ic = {
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
Object.assign(Ic, {
  flexDir: Ic.flexDirection
});
var CC = {
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
}, NR = {
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
var VR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function BR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var WR = (e) => {
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
}, HR = WR(BR), UR = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, GR = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Yf = (e, t, n) => {
  const r = {}, o = HR(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, KR = {
  srOnly: {
    transform(e) {
      return e === !0 ? UR : e === "focusable" ? GR : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => Yf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Yf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Yf(t, e, n)
  }
}, vs = {
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
Object.assign(vs, {
  insetStart: vs.insetInlineStart,
  insetEnd: vs.insetInlineEnd
});
var YR = {
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
var qR = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, XR = {
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
}, QR = {
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
}, ZR = {
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
}, JR = {
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
function kC(e) {
  return jt(e) && e.reference ? e.reference : String(e);
}
var jd = (e, ...t) => t.map(kC).join(` ${e} `).replace(/calc/g, ""), Ly = (...e) => `calc(${jd("+", ...e)})`, jy = (...e) => `calc(${jd("-", ...e)})`, Bh = (...e) => `calc(${jd("*", ...e)})`, zy = (...e) => `calc(${jd("/", ...e)})`, Ny = (e) => {
  const t = kC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Bh(t, -1);
}, Oo = Object.assign(
  (e) => ({
    add: (...t) => Oo(Ly(e, ...t)),
    subtract: (...t) => Oo(jy(e, ...t)),
    multiply: (...t) => Oo(Bh(e, ...t)),
    divide: (...t) => Oo(zy(e, ...t)),
    negate: () => Oo(Ny(e)),
    toString: () => e.toString()
  }),
  {
    add: Ly,
    subtract: jy,
    multiply: Bh,
    divide: zy,
    negate: Ny
  }
);
function e$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function t$(e) {
  const t = e$(e.toString());
  return r$(n$(t));
}
function n$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function r$(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function o$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function i$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function a$(e, t = "") {
  return t$(`--${o$(e, t)}`);
}
function J(e, t, n) {
  const r = a$(e, n);
  return {
    variable: r,
    reference: i$(r, t)
  };
}
function s$(e, t) {
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
function l$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function u$(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Wh(e) {
  if (e == null)
    return e;
  const { unitless: t } = u$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var PC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, zv = (e) => Object.fromEntries(Object.entries(e).sort(PC));
function Vy(e) {
  const t = zv(e);
  return Object.assign(Object.values(t), t);
}
function c$(e) {
  const t = Object.keys(zv(e));
  return new Set(t);
}
function By(e) {
  var t;
  if (!e)
    return e;
  e = (t = Wh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Ja(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Wh(e)})`), t && n.push("and", `(max-width: ${Wh(t)})`), n.join(" ");
}
function d$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = Vy(e), r = Object.entries(e).sort(PC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? By(d) : void 0, {
      _minW: By(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Ja(null, d),
      minWQuery: Ja(s),
      minMaxQuery: Ja(s, d)
    };
  }), o = c$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: zv(e),
    asArray: Vy(e),
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
      for (; l$(s) === null; )
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
}, Dr = (e) => _C((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), lr = (e) => _C((t) => e(t, "~ &"), "[data-peer]", ".peer"), _C = (e, ...t) => t.map(e).join(", "), zd = {
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
}, TC = Object.keys(
  zd
);
function Wy(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function f$(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Wy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...y] = f, h = `${p}.-${y.join(".")}`, S = Oo.negate(s), v = Oo.negate(u);
        r[h] = {
          value: S,
          var: l,
          varRef: v
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
      const y = [String(o).split(".")[0], f].join(".");
      if (!e[y])
        return f;
      const { reference: S } = Wy(y, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = jt(s) ? s : { default: s };
    n = mn(
      n,
      Object.entries(d).reduce(
        (f, [p, y]) => {
          var h, S;
          if (!y)
            return f;
          const v = c(`${y}`);
          if (p === "default")
            return f[l] = v, f;
          const m = (S = (h = zd) == null ? void 0 : h[p]) != null ? S : p;
          return f[m] = { [l]: v }, f;
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
function p$(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function h$(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function m$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Hy(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (m$(a) || Array.isArray(a)) {
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
var v$ = [
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
function g$(e) {
  return h$(e, v$);
}
function y$(e) {
  return e.semanticTokens;
}
function b$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var S$ = (e) => TC.includes(e) || e === "default";
function x$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return Hy(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), Hy(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(S$)
    }
  ), n;
}
function w$(e) {
  var t;
  const n = b$(e), r = g$(n), o = y$(n), i = x$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = f$(i, { cssVarPrefix: a });
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
    __breakpoints: d$(n.breakpoints)
  }), n;
}
var Nv = mn(
  {},
  Nu,
  ve,
  jR,
  Ic,
  cn,
  zR,
  YR,
  NR,
  CC,
  KR,
  vs,
  Vh,
  Ie,
  JR,
  ZR,
  qR,
  XR,
  VR,
  QR
);
Object.assign({}, Ie, cn, Ic, CC, vs);
var C$ = [...Object.keys(Nv), ...TC], k$ = { ...Nv, ...zd }, P$ = (e) => e in k$, _$ = (e) => (t) => {
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
function T$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function E$(e) {
  return /^var\(--.+\)$/.test(e);
}
var O$ = (e, t) => e.startsWith("--") && typeof t == "string" && !E$(t), M$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = T$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function I$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Xn(i, r), d = _$(c)(r);
    let f = {};
    for (let p in d) {
      const y = d[p];
      let h = Xn(y, r);
      p in n && (p = n[p]), O$(p, h) && (h = M$(r, h));
      let S = t[p];
      if (S === !0 && (S = { property: p }), jt(h)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = mn(
          {},
          f[p],
          o(h, !0)
        );
        continue;
      }
      let v = (u = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, h, r, c)) != null ? u : h;
      v = S != null && S.processResult ? o(v, !0) : v;
      const m = Xn(S == null ? void 0 : S.property, r);
      if (!a && (S != null && S.static)) {
        const b = Xn(S.static, r);
        f = mn({}, f, b);
      }
      if (m && Array.isArray(m)) {
        for (const b of m)
          f[b] = v;
        continue;
      }
      if (m) {
        m === "&" && jt(v) ? f = mn({}, f, v) : f[m] = v;
        continue;
      }
      if (jt(v)) {
        f = mn({}, f, v);
        continue;
      }
      f[p] = v;
    }
    return f;
  };
  return o;
}
var EC = (e) => (t) => I$({
  theme: t,
  pseudos: zd,
  configs: Nv
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
function R$(e, t) {
  if (Array.isArray(e))
    return e;
  if (jt(e))
    return t(e);
  if (e != null)
    return [e];
}
function $$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function A$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = R$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let y = 0; y < d; y++) {
      const h = t.details[y], S = t.details[$$(c, y)], v = Ja(h.minW, S == null ? void 0 : S._minW), m = Xn((s = r[o]) == null ? void 0 : s[c[y]], a);
      if (m) {
        if (p) {
          (l = r.parts) == null || l.forEach((b) => {
            mn(u, {
              [b]: f ? m[b] : { [v]: m[b] }
            });
          });
          continue;
        }
        if (!p) {
          f ? mn(u, m) : u[v] = m;
          continue;
        }
        u[v] = m;
      }
    }
    return u;
  };
}
function D$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = A$(i);
    return mn(
      {},
      Xn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function kn(e) {
  return p$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var F$ = [
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
function L$(e) {
  return jt(e) ? F$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var j$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, z$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, N$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, V$ = {
  property: j$,
  easing: z$,
  duration: N$
}, B$ = V$, W$ = {
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
}, H$ = W$, U$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, G$ = U$, K$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, Y$ = K$, q$ = {
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
}, X$ = q$, Q$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, Z$ = Q$, J$ = {
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
}, eA = J$, tA = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, nA = tA, rA = {
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
}, OC = rA, MC = {
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
}, oA = {
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
}, iA = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, aA = {
  ...MC,
  ...oA,
  container: iA
}, IC = aA, sA = {
  breakpoints: Y$,
  zIndices: H$,
  radii: Z$,
  blur: nA,
  colors: X$,
  ...OC,
  sizes: IC,
  shadows: eA,
  space: MC,
  borders: G$,
  transition: B$
}, { defineMultiStyleConfig: lA, definePartsStyle: es } = Oe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), dr = J("stepper-indicator-size"), Ei = J("stepper-icon-size"), Oi = J("stepper-title-font-size"), ts = J("stepper-description-font-size"), Va = J("stepper-accent-color"), uA = es(({ colorScheme: e }) => ({
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
})), cA = lA({
  baseStyle: uA,
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
var dA = Se("accordion").parts("root", "container", "button", "panel").extend("icon"), fA = Se("alert").parts("title", "description", "container").extend("icon", "spinner"), pA = Se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), hA = Se("breadcrumb").parts("link", "item", "container").extend("separator");
Se("button").parts();
var mA = Se("checkbox").parts("control", "icon", "container").extend("label");
Se("progress").parts("track", "filledTrack").extend("label");
var vA = Se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), gA = Se("editable").parts(
  "preview",
  "input",
  "textarea"
), yA = Se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), bA = Se("formError").parts("text", "icon"), SA = Se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), xA = Se("list").parts("container", "item", "icon"), wA = Se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), CA = Se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), kA = Se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Se("pininput").parts("field");
var PA = Se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), _A = Se("progress").parts(
  "label",
  "filledTrack",
  "track"
), TA = Se("radio").parts(
  "container",
  "control",
  "label"
), EA = Se("select").parts("field", "icon"), OA = Se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), MA = Se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), IA = Se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), RA = Se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), $A = Se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), AA = Se("tag").parts(
  "container",
  "label",
  "closeButton"
), DA = Se("card").parts(
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
class FA extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var ns = FA;
function Vv(e) {
  if (typeof e != "string")
    throw new ns(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = HA.test(e) ? zA(e) : e;
  const n = NA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Xs(s, 2), 16)), parseInt(Xs(a[3] || "f", 2), 16) / 255];
  }
  const r = VA.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = BA.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = WA.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Do(0, 100, s) !== s)
      throw new ns(e);
    if (Do(0, 100, l) !== l)
      throw new ns(e);
    return [...UA(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new ns(e);
}
function LA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Uy = (e) => parseInt(e.replace(/_/g, ""), 36), jA = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Uy(t.substring(0, 3)), r = Uy(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function zA(e) {
  const t = e.toLowerCase().trim(), n = jA[LA(t)];
  if (!n)
    throw new ns(e);
  return `#${n}`;
}
const Xs = (e, t) => Array.from(Array(t)).map(() => e).join(""), NA = new RegExp(`^#${Xs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), VA = new RegExp(`^#${Xs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), BA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Xs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), WA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, HA = /^[a-z]+$/i, Gy = (e) => Math.round(e * 255), UA = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(Gy);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(Gy);
};
function GA(e, t, n, r) {
  return `rgba(${Do(0, 255, e).toFixed()}, ${Do(0, 255, t).toFixed()}, ${Do(0, 255, n).toFixed()}, ${parseFloat(Do(0, 1, r).toFixed(3))})`;
}
function KA(e, t) {
  const [n, r, o, i] = Vv(e);
  return GA(n, r, o, i - t);
}
function YA(e) {
  const [t, n, r, o] = Vv(e);
  let i = (a) => {
    const s = Do(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function qA(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var XA = (e) => Object.keys(e).length === 0, Tt = (e, t, n) => {
  const r = qA(e, `colors.${t}`, t);
  try {
    return YA(r), r;
  } catch {
    return n ?? "#000000";
  }
}, QA = (e) => {
  const [t, n, r] = Vv(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, ZA = (e) => (t) => {
  const n = Tt(t, e);
  return QA(n) < 128 ? "dark" : "light";
}, JA = (e) => (t) => ZA(e)(t) === "dark", ca = (e, t) => (n) => {
  const r = Tt(n, e);
  return KA(r, 1 - t);
};
function Ky(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var e5 = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function t5(e) {
  const t = e5();
  return !e || XA(e) ? t : e.string && e.colors ? r5(e.string, e.colors) : e.string && !e.colors ? n5(e.string) : e.colors && !e.string ? o5(e.colors) : t;
}
function n5(e) {
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
function r5(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function o5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function Bv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function RC(e) {
  return jt(e) && e.reference ? e.reference : String(e);
}
var Nd = (e, ...t) => t.map(RC).join(` ${e} `).replace(/calc/g, ""), Yy = (...e) => `calc(${Nd("+", ...e)})`, qy = (...e) => `calc(${Nd("-", ...e)})`, Hh = (...e) => `calc(${Nd("*", ...e)})`, Xy = (...e) => `calc(${Nd("/", ...e)})`, Qy = (e) => {
  const t = RC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Hh(t, -1);
}, fr = Object.assign(
  (e) => ({
    add: (...t) => fr(Yy(e, ...t)),
    subtract: (...t) => fr(qy(e, ...t)),
    multiply: (...t) => fr(Hh(e, ...t)),
    divide: (...t) => fr(Xy(e, ...t)),
    negate: () => fr(Qy(e)),
    toString: () => e.toString()
  }),
  {
    add: Yy,
    subtract: qy,
    multiply: Hh,
    divide: Xy,
    negate: Qy
  }
);
function i5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function a5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function $C(e) {
  const t = a5(e.toString());
  return t.includes("\\.") ? e : i5(e) ? t.replace(".", "\\.") : e;
}
function s5(e, t = "") {
  return [t, $C(e)].filter(Boolean).join("-");
}
function l5(e, t) {
  return `var(${$C(e)}${t ? `, ${t}` : ""})`;
}
function u5(e, t = "") {
  return `--${s5(e, t)}`;
}
function rt(e, t) {
  const n = u5(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: l5(n, c5(t == null ? void 0 : t.fallback))
  };
}
function c5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: d5, definePartsStyle: Vu } = Oe(IA.keys), gs = rt("switch-track-width"), No = rt("switch-track-height"), qf = rt("switch-track-diff"), f5 = fr.subtract(gs, No), Uh = rt("switch-thumb-x"), Ba = rt("switch-bg"), p5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [gs.reference],
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
}, h5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [No.reference],
  height: [No.reference],
  _checked: {
    transform: `translateX(${Uh.reference})`
  }
}, m5 = Vu((e) => ({
  container: {
    [qf.variable]: f5,
    [Uh.variable]: qf.reference,
    _rtl: {
      [Uh.variable]: fr(qf).negate().toString()
    }
  },
  track: p5(e),
  thumb: h5
})), v5 = {
  sm: Vu({
    container: {
      [gs.variable]: "1.375rem",
      [No.variable]: "sizes.3"
    }
  }),
  md: Vu({
    container: {
      [gs.variable]: "1.875rem",
      [No.variable]: "sizes.4"
    }
  }),
  lg: Vu({
    container: {
      [gs.variable]: "2.875rem",
      [No.variable]: "sizes.6"
    }
  })
}, g5 = d5({
  baseStyle: m5,
  sizes: v5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: y5, definePartsStyle: Ki } = Oe(RA.keys), b5 = Ki({
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
}), Rc = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, S5 = Ki((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Rc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Rc
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
}), x5 = Ki((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Rc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Rc
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
}), w5 = {
  simple: S5,
  striped: x5,
  unstyled: {}
}, C5 = {
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
}, k5 = y5({
  baseStyle: b5,
  variants: w5,
  sizes: C5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), $t = J("tabs-color"), Rn = J("tabs-bg"), iu = J("tabs-border-color"), { defineMultiStyleConfig: P5, definePartsStyle: er } = Oe($A.keys), _5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, T5 = (e) => {
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
}, E5 = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, O5 = {
  p: 4
}, M5 = er((e) => ({
  root: _5(e),
  tab: T5(e),
  tablist: E5(e),
  tabpanel: O5
})), I5 = {
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
}, R5 = er((e) => {
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
        [Rn.variable]: "colors.gray.200",
        _dark: {
          [Rn.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: $t.reference,
      bg: Rn.reference
    }
  };
}), $5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [iu.variable]: "transparent",
      _selected: {
        [$t.variable]: `colors.${t}.600`,
        [iu.variable]: "colors.white",
        _dark: {
          [$t.variable]: `colors.${t}.300`,
          [iu.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: iu.reference
      },
      color: $t.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), A5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Rn.variable]: "colors.gray.50",
      _dark: {
        [Rn.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Rn.variable]: "colors.white",
        [$t.variable]: `colors.${t}.600`,
        _dark: {
          [Rn.variable]: "colors.gray.800",
          [$t.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: $t.reference,
      bg: Rn.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), D5 = er((e) => {
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
}), F5 = er((e) => {
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
        [Rn.variable]: `colors.${t}.600`,
        _dark: {
          [$t.variable]: "colors.gray.800",
          [Rn.variable]: `colors.${t}.300`
        }
      },
      color: $t.reference,
      bg: Rn.reference
    }
  };
}), L5 = er({}), j5 = {
  line: R5,
  enclosed: $5,
  "enclosed-colored": A5,
  "soft-rounded": D5,
  "solid-rounded": F5,
  unstyled: L5
}, z5 = P5({
  baseStyle: M5,
  sizes: I5,
  variants: j5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ye = s$("badge", ["bg", "color", "shadow"]), N5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, V5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ca(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, B5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ca(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, W5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ca(`${t}.200`, 0.8)(n);
  return {
    [Ye.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.color.variable]: r
    },
    [Ye.shadow.variable]: `inset 0 0 0px 1px ${Ye.color.reference}`
  };
}, H5 = {
  solid: V5,
  subtle: B5,
  outline: W5
}, ys = {
  baseStyle: N5,
  variants: H5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: U5, definePartsStyle: Vo } = Oe(AA.keys), Zy = J("tag-bg"), Jy = J("tag-color"), Xf = J("tag-shadow"), Bu = J("tag-min-height"), Wu = J("tag-min-width"), Hu = J("tag-font-size"), Uu = J("tag-padding-inline"), G5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Jy.variable]: Ye.color.reference,
  [Zy.variable]: Ye.bg.reference,
  [Xf.variable]: Ye.shadow.reference,
  color: Jy.reference,
  bg: Zy.reference,
  boxShadow: Xf.reference,
  borderRadius: "md",
  minH: Bu.reference,
  minW: Wu.reference,
  fontSize: Hu.reference,
  px: Uu.reference,
  _focusVisible: {
    [Xf.variable]: "shadows.outline"
  }
}, K5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, Y5 = {
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
}, q5 = Vo({
  container: G5,
  label: K5,
  closeButton: Y5
}), X5 = {
  sm: Vo({
    container: {
      [Bu.variable]: "sizes.5",
      [Wu.variable]: "sizes.5",
      [Hu.variable]: "fontSizes.xs",
      [Uu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Vo({
    container: {
      [Bu.variable]: "sizes.6",
      [Wu.variable]: "sizes.6",
      [Hu.variable]: "fontSizes.sm",
      [Uu.variable]: "space.2"
    }
  }),
  lg: Vo({
    container: {
      [Bu.variable]: "sizes.8",
      [Wu.variable]: "sizes.8",
      [Hu.variable]: "fontSizes.md",
      [Uu.variable]: "space.3"
    }
  })
}, Q5 = {
  subtle: Vo((e) => {
    var t;
    return {
      container: (t = ys.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Vo((e) => {
    var t;
    return {
      container: (t = ys.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Vo((e) => {
    var t;
    return {
      container: (t = ys.variants) == null ? void 0 : t.outline(e)
    };
  })
}, Z5 = U5({
  variants: Q5,
  baseStyle: q5,
  sizes: X5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: mr, defineMultiStyleConfig: J5 } = Oe(SA.keys), Mi = J("input-height"), Ii = J("input-font-size"), Ri = J("input-padding"), $i = J("input-border-radius"), eD = mr({
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
}, tD = {
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
function Wv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var nD = mr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Wv(e);
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
}), rD = mr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Wv(e);
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
}), oD = mr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Wv(e);
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
}), iD = mr({
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
}), aD = {
  outline: nD,
  filled: rD,
  flushed: oD,
  unstyled: iD
}, be = J5({
  baseStyle: eD,
  sizes: tD,
  variants: aD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), eb, sD = {
  ...(eb = be.baseStyle) == null ? void 0 : eb.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, tb, nb, lD = {
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
  unstyled: (nb = (tb = be.variants) == null ? void 0 : tb.unstyled.field) != null ? nb : {}
}, rb, ob, ib, ab, sb, lb, ub, cb, uD = {
  xs: (ob = (rb = be.sizes) == null ? void 0 : rb.xs.field) != null ? ob : {},
  sm: (ab = (ib = be.sizes) == null ? void 0 : ib.sm.field) != null ? ab : {},
  md: (lb = (sb = be.sizes) == null ? void 0 : sb.md.field) != null ? lb : {},
  lg: (cb = (ub = be.sizes) == null ? void 0 : ub.lg.field) != null ? cb : {}
}, cD = {
  baseStyle: sD,
  sizes: uD,
  variants: lD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, au = rt("tooltip-bg"), Qf = rt("tooltip-fg"), dD = rt("popper-arrow-bg"), fD = {
  bg: au.reference,
  color: Qf.reference,
  [au.variable]: "colors.gray.700",
  [Qf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [au.variable]: "colors.gray.300",
    [Qf.variable]: "colors.gray.900"
  },
  [dD.variable]: au.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, pD = {
  baseStyle: fD
}, { defineMultiStyleConfig: hD, definePartsStyle: rs } = Oe(_A.keys), mD = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    Ky(),
    Ky("1rem", "rgba(0,0,0,0.1)")
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
}, vD = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, gD = (e) => ({
  bg: Q("gray.100", "whiteAlpha.300")(e)
}), yD = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...mD(e)
}), bD = rs((e) => ({
  label: vD,
  filledTrack: yD(e),
  track: gD(e)
})), SD = {
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
}, xD = hD({
  sizes: SD,
  baseStyle: bD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), wD = (e) => typeof e == "function";
function Ot(e, ...t) {
  return wD(e) ? e(...t) : e;
}
var { definePartsStyle: Gu, defineMultiStyleConfig: CD } = Oe(mA.keys), bs = J("checkbox-size"), kD = (e) => {
  const { colorScheme: t } = e;
  return {
    w: bs.reference,
    h: bs.reference,
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
}, PD = {
  _disabled: { cursor: "not-allowed" }
}, _D = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, TD = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, ED = Gu((e) => ({
  icon: TD,
  container: PD,
  control: Ot(kD, e),
  label: _D
})), OD = {
  sm: Gu({
    control: { [bs.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Gu({
    control: { [bs.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Gu({
    control: { [bs.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, $c = CD({
  baseStyle: ED,
  sizes: OD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: MD, definePartsStyle: Ku } = Oe(TA.keys), ID = (e) => {
  var t;
  const n = (t = Ot($c.baseStyle, e)) == null ? void 0 : t.control;
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
}, RD = Ku((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = $c).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = $c).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: ID(e)
  };
}), $D = {
  md: Ku({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Ku({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Ku({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, AD = MD({
  baseStyle: RD,
  sizes: $D,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: DD, definePartsStyle: FD } = Oe(EA.keys), su = J("select-bg"), db, LD = {
  ...(db = be.baseStyle) == null ? void 0 : db.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: su.reference,
  [su.variable]: "colors.white",
  _dark: {
    [su.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: su.reference
  }
}, jD = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, zD = FD({
  field: LD,
  icon: jD
}), lu = {
  paddingInlineEnd: "8"
}, fb, pb, hb, mb, vb, gb, yb, bb, ND = {
  lg: {
    ...(fb = be.sizes) == null ? void 0 : fb.lg,
    field: {
      ...(pb = be.sizes) == null ? void 0 : pb.lg.field,
      ...lu
    }
  },
  md: {
    ...(hb = be.sizes) == null ? void 0 : hb.md,
    field: {
      ...(mb = be.sizes) == null ? void 0 : mb.md.field,
      ...lu
    }
  },
  sm: {
    ...(vb = be.sizes) == null ? void 0 : vb.sm,
    field: {
      ...(gb = be.sizes) == null ? void 0 : gb.sm.field,
      ...lu
    }
  },
  xs: {
    ...(yb = be.sizes) == null ? void 0 : yb.xs,
    field: {
      ...(bb = be.sizes) == null ? void 0 : bb.xs.field,
      ...lu
    },
    icon: {
      insetEnd: "1"
    }
  }
}, VD = DD({
  baseStyle: zD,
  sizes: ND,
  variants: be.variants,
  defaultProps: be.defaultProps
}), Zf = J("skeleton-start-color"), Jf = J("skeleton-end-color"), BD = {
  [Zf.variable]: "colors.gray.100",
  [Jf.variable]: "colors.gray.400",
  _dark: {
    [Zf.variable]: "colors.gray.800",
    [Jf.variable]: "colors.gray.600"
  },
  background: Zf.reference,
  borderColor: Jf.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, WD = {
  baseStyle: BD
}, ep = J("skip-link-bg"), HD = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [ep.variable]: "colors.white",
    _dark: {
      [ep.variable]: "colors.gray.700"
    },
    bg: ep.reference
  }
}, UD = {
  baseStyle: HD
}, { defineMultiStyleConfig: GD, definePartsStyle: Vd } = Oe(OA.keys), Qs = J("slider-thumb-size"), Zs = J("slider-track-size"), Hr = J("slider-bg"), KD = (e) => {
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
    ...Bv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, YD = (e) => ({
  ...Bv({
    orientation: e.orientation,
    horizontal: { h: Zs.reference },
    vertical: { w: Zs.reference }
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
}), qD = (e) => {
  const { orientation: t } = e;
  return {
    ...Bv({
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
    w: Qs.reference,
    h: Qs.reference,
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
}, XD = (e) => {
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
}, QD = Vd((e) => ({
  container: KD(e),
  track: YD(e),
  thumb: qD(e),
  filledTrack: XD(e)
})), ZD = Vd({
  container: {
    [Qs.variable]: "sizes.4",
    [Zs.variable]: "sizes.1"
  }
}), JD = Vd({
  container: {
    [Qs.variable]: "sizes.3.5",
    [Zs.variable]: "sizes.1"
  }
}), eF = Vd({
  container: {
    [Qs.variable]: "sizes.2.5",
    [Zs.variable]: "sizes.0.5"
  }
}), tF = {
  lg: ZD,
  md: JD,
  sm: eF
}, nF = GD({
  baseStyle: QD,
  sizes: tF,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Mo = rt("spinner-size"), rF = {
  width: [Mo.reference],
  height: [Mo.reference]
}, oF = {
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
}, iF = {
  baseStyle: rF,
  sizes: oF,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: aF, definePartsStyle: AC } = Oe(MA.keys), sF = {
  fontWeight: "medium"
}, lF = {
  opacity: 0.8,
  marginBottom: "2"
}, uF = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, cF = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, dF = AC({
  container: {},
  label: sF,
  helpText: lF,
  number: uF,
  icon: cF
}), fF = {
  md: AC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, pF = aF({
  baseStyle: dF,
  sizes: fF,
  defaultProps: {
    size: "md"
  }
}), tp = J("kbd-bg"), hF = {
  [tp.variable]: "colors.gray.100",
  _dark: {
    [tp.variable]: "colors.whiteAlpha.100"
  },
  bg: tp.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, mF = {
  baseStyle: hF
}, vF = {
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
}, gF = {
  baseStyle: vF
}, { defineMultiStyleConfig: yF, definePartsStyle: bF } = Oe(xA.keys), SF = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, xF = bF({
  icon: SF
}), wF = yF({
  baseStyle: xF
}), { defineMultiStyleConfig: CF, definePartsStyle: kF } = Oe(wA.keys), Un = J("menu-bg"), np = J("menu-shadow"), PF = {
  [Un.variable]: "#fff",
  [np.variable]: "shadows.sm",
  _dark: {
    [Un.variable]: "colors.gray.700",
    [np.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Un.reference,
  boxShadow: np.reference
}, _F = {
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
}, TF = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, EF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, OF = {
  opacity: 0.6
}, MF = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, IF = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, RF = kF({
  button: IF,
  list: PF,
  item: _F,
  groupTitle: TF,
  icon: EF,
  command: OF,
  divider: MF
}), $F = CF({
  baseStyle: RF
}), { defineMultiStyleConfig: AF, definePartsStyle: Gh } = Oe(CA.keys), rp = J("modal-bg"), op = J("modal-shadow"), DF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, FF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, LF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [rp.variable]: "colors.white",
    [op.variable]: "shadows.lg",
    _dark: {
      [rp.variable]: "colors.gray.700",
      [op.variable]: "shadows.dark-lg"
    },
    bg: rp.reference,
    boxShadow: op.reference
  };
}, jF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, zF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, NF = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, VF = {
  px: "6",
  py: "4"
}, BF = Gh((e) => ({
  overlay: DF,
  dialogContainer: Ot(FF, e),
  dialog: Ot(LF, e),
  header: jF,
  closeButton: zF,
  body: Ot(NF, e),
  footer: VF
}));
function En(e) {
  return Gh(e === "full" ? {
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
var WF = {
  xs: En("xs"),
  sm: En("sm"),
  md: En("md"),
  lg: En("lg"),
  xl: En("xl"),
  "2xl": En("2xl"),
  "3xl": En("3xl"),
  "4xl": En("4xl"),
  "5xl": En("5xl"),
  "6xl": En("6xl"),
  full: En("full")
}, HF = AF({
  baseStyle: BF,
  sizes: WF,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: UF, definePartsStyle: DC } = Oe(kA.keys), Hv = rt("number-input-stepper-width"), FC = rt("number-input-input-padding"), GF = fr(Hv).add("0.5rem").toString(), ip = rt("number-input-bg"), ap = rt("number-input-color"), sp = rt("number-input-border-color"), KF = {
  [Hv.variable]: "sizes.6",
  [FC.variable]: GF
}, YF = (e) => {
  var t, n;
  return (n = (t = Ot(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, qF = {
  width: Hv.reference
}, XF = {
  borderStart: "1px solid",
  borderStartColor: sp.reference,
  color: ap.reference,
  bg: ip.reference,
  [ap.variable]: "colors.chakra-body-text",
  [sp.variable]: "colors.chakra-border-color",
  _dark: {
    [ap.variable]: "colors.whiteAlpha.800",
    [sp.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [ip.variable]: "colors.gray.200",
    _dark: {
      [ip.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, QF = DC((e) => {
  var t;
  return {
    root: KF,
    field: (t = Ot(YF, e)) != null ? t : {},
    stepperGroup: qF,
    stepper: XF
  };
});
function uu(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = OC.fontSizes[a];
  return DC({
    field: {
      ...o.field,
      paddingInlineEnd: FC.reference,
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
var ZF = {
  xs: uu("xs"),
  sm: uu("sm"),
  md: uu("md"),
  lg: uu("lg")
}, JF = UF({
  baseStyle: QF,
  sizes: ZF,
  variants: be.variants,
  defaultProps: be.defaultProps
}), Sb, e4 = {
  ...(Sb = be.baseStyle) == null ? void 0 : Sb.field,
  textAlign: "center"
}, t4 = {
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
}, xb, wb, n4 = {
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
  unstyled: (wb = (xb = be.variants) == null ? void 0 : xb.unstyled.field) != null ? wb : {}
}, r4 = {
  baseStyle: e4,
  sizes: t4,
  variants: n4,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: o4, definePartsStyle: i4 } = Oe(PA.keys), cu = rt("popper-bg"), a4 = rt("popper-arrow-bg"), Cb = rt("popper-arrow-shadow-color"), s4 = { zIndex: 10 }, l4 = {
  [cu.variable]: "colors.white",
  bg: cu.reference,
  [a4.variable]: cu.reference,
  [Cb.variable]: "colors.gray.200",
  _dark: {
    [cu.variable]: "colors.gray.700",
    [Cb.variable]: "colors.whiteAlpha.300"
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
}, u4 = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, c4 = {
  px: 3,
  py: 2
}, d4 = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, f4 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, p4 = i4({
  popper: s4,
  content: l4,
  header: u4,
  body: c4,
  footer: d4,
  closeButton: f4
}), h4 = o4({
  baseStyle: p4
}), { definePartsStyle: Kh, defineMultiStyleConfig: m4 } = Oe(vA.keys), lp = J("drawer-bg"), up = J("drawer-box-shadow");
function ui(e) {
  return Kh(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var v4 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, g4 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, y4 = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [lp.variable]: "colors.white",
    [up.variable]: "shadows.lg",
    _dark: {
      [lp.variable]: "colors.gray.700",
      [up.variable]: "shadows.dark-lg"
    },
    bg: lp.reference,
    boxShadow: up.reference
  };
}, b4 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, S4 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, x4 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, w4 = {
  px: "6",
  py: "4"
}, C4 = Kh((e) => ({
  overlay: v4,
  dialogContainer: g4,
  dialog: Ot(y4, e),
  header: b4,
  closeButton: S4,
  body: x4,
  footer: w4
})), k4 = {
  xs: ui("xs"),
  sm: ui("md"),
  md: ui("lg"),
  lg: ui("2xl"),
  xl: ui("4xl"),
  full: ui("full")
}, P4 = m4({
  baseStyle: C4,
  sizes: k4,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: _4, defineMultiStyleConfig: T4 } = Oe(gA.keys), E4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, O4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, M4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, I4 = _4({
  preview: E4,
  input: O4,
  textarea: M4
}), R4 = T4({
  baseStyle: I4
}), { definePartsStyle: $4, defineMultiStyleConfig: A4 } = Oe(yA.keys), Yi = J("form-control-color"), D4 = {
  marginStart: "1",
  [Yi.variable]: "colors.red.500",
  _dark: {
    [Yi.variable]: "colors.red.300"
  },
  color: Yi.reference
}, F4 = {
  mt: "2",
  [Yi.variable]: "colors.gray.600",
  _dark: {
    [Yi.variable]: "colors.whiteAlpha.600"
  },
  color: Yi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, L4 = $4({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: D4,
  helperText: F4
}), j4 = A4({
  baseStyle: L4
}), { definePartsStyle: z4, defineMultiStyleConfig: N4 } = Oe(bA.keys), qi = J("form-error-color"), V4 = {
  [qi.variable]: "colors.red.500",
  _dark: {
    [qi.variable]: "colors.red.300"
  },
  color: qi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, B4 = {
  marginEnd: "0.5em",
  [qi.variable]: "colors.red.500",
  _dark: {
    [qi.variable]: "colors.red.300"
  },
  color: qi.reference
}, W4 = z4({
  text: V4,
  icon: B4
}), H4 = N4({
  baseStyle: W4
}), U4 = {
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
}, G4 = {
  baseStyle: U4
}, K4 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, Y4 = {
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
}, q4 = {
  baseStyle: K4,
  sizes: Y4,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: X4, definePartsStyle: Q4 } = Oe(hA.keys), cp = J("breadcrumb-link-decor"), Z4 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: cp.reference,
  [cp.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [cp.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, J4 = Q4({
  link: Z4
}), eL = X4({
  baseStyle: J4
}), tL = {
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
}, LC = (e) => {
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
}, nL = (e) => {
  const { colorScheme: t } = e, n = Q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Ot(LC, e)
  };
}, rL = {
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
}, oL = (e) => {
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
  } = (t = rL[n]) != null ? t : {}, s = Q(r, `${n}.200`)(e);
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
}, iL = (e) => {
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
}, aL = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, sL = {
  ghost: LC,
  outline: nL,
  solid: oL,
  link: iL,
  unstyled: aL
}, lL = {
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
}, uL = {
  baseStyle: tL,
  variants: sL,
  sizes: lL,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Bo, defineMultiStyleConfig: cL } = Oe(DA.keys), Ac = J("card-bg"), yr = J("card-padding"), jC = J("card-shadow"), Yu = J("card-radius"), zC = J("card-border-width", "0"), NC = J("card-border-color"), dL = Bo({
  container: {
    [Ac.variable]: "colors.chakra-body-bg",
    backgroundColor: Ac.reference,
    boxShadow: jC.reference,
    borderRadius: Yu.reference,
    color: "chakra-body-text",
    borderWidth: zC.reference,
    borderColor: NC.reference
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
}), fL = {
  sm: Bo({
    container: {
      [Yu.variable]: "radii.base",
      [yr.variable]: "space.3"
    }
  }),
  md: Bo({
    container: {
      [Yu.variable]: "radii.md",
      [yr.variable]: "space.5"
    }
  }),
  lg: Bo({
    container: {
      [Yu.variable]: "radii.xl",
      [yr.variable]: "space.7"
    }
  })
}, pL = {
  elevated: Bo({
    container: {
      [jC.variable]: "shadows.base",
      _dark: {
        [Ac.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Bo({
    container: {
      [zC.variable]: "1px",
      [NC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Bo({
    container: {
      [Ac.variable]: "colors.chakra-subtle-bg"
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
}, hL = cL({
  baseStyle: dL,
  variants: pL,
  sizes: fL,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Ss = rt("close-button-size"), Wa = rt("close-button-bg"), mL = {
  w: [Ss.reference],
  h: [Ss.reference],
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
}, vL = {
  lg: {
    [Ss.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Ss.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Ss.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, gL = {
  baseStyle: mL,
  sizes: vL,
  defaultProps: {
    size: "md"
  }
}, { variants: yL, defaultProps: bL } = ys, SL = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, xL = {
  baseStyle: SL,
  variants: yL,
  defaultProps: bL
}, wL = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, CL = {
  baseStyle: wL
}, kL = {
  opacity: 0.6,
  borderColor: "inherit"
}, PL = {
  borderStyle: "solid"
}, _L = {
  borderStyle: "dashed"
}, TL = {
  solid: PL,
  dashed: _L
}, EL = {
  baseStyle: kL,
  variants: TL,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: OL, defineMultiStyleConfig: ML } = Oe(dA.keys), IL = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, RL = {
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
}, $L = {
  pt: "2",
  px: "4",
  pb: "5"
}, AL = {
  fontSize: "1.25em"
}, DL = OL({
  container: IL,
  button: RL,
  panel: $L,
  icon: AL
}), FL = ML({ baseStyle: DL }), { definePartsStyle: gl, defineMultiStyleConfig: LL } = Oe(fA.keys), Qt = J("alert-fg"), _r = J("alert-bg"), jL = gl({
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
function Uv(e) {
  const { theme: t, colorScheme: n } = e, r = ca(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var zL = gl((e) => {
  const { colorScheme: t } = e, n = Uv(e);
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
}), NL = gl((e) => {
  const { colorScheme: t } = e, n = Uv(e);
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
}), VL = gl((e) => {
  const { colorScheme: t } = e, n = Uv(e);
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
}), BL = gl((e) => {
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
}), WL = {
  subtle: zL,
  "left-accent": NL,
  "top-accent": VL,
  solid: BL
}, HL = LL({
  baseStyle: jL,
  variants: WL,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: VC, defineMultiStyleConfig: UL } = Oe(pA.keys), Xi = J("avatar-border-color"), xs = J("avatar-bg"), Js = J("avatar-font-size"), da = J("avatar-size"), GL = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Xi.reference,
  [Xi.variable]: "white",
  _dark: {
    [Xi.variable]: "colors.gray.800"
  }
}, KL = {
  bg: xs.reference,
  fontSize: Js.reference,
  width: da.reference,
  height: da.reference,
  lineHeight: "1",
  [xs.variable]: "colors.gray.200",
  _dark: {
    [xs.variable]: "colors.whiteAlpha.400"
  }
}, YL = (e) => {
  const { name: t, theme: n } = e, r = t ? t5({ string: t }) : "colors.gray.400", o = JA(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: xs.reference,
    fontSize: Js.reference,
    color: i,
    borderColor: Xi.reference,
    verticalAlign: "top",
    width: da.reference,
    height: da.reference,
    "&:not([data-loaded])": {
      [xs.variable]: r
    },
    [Xi.variable]: "colors.white",
    _dark: {
      [Xi.variable]: "colors.gray.800"
    }
  };
}, qL = {
  fontSize: Js.reference,
  lineHeight: "1"
}, XL = VC((e) => ({
  badge: Ot(GL, e),
  excessLabel: Ot(KL, e),
  container: Ot(YL, e),
  label: qL
}));
function Lr(e) {
  const t = e !== "100%" ? IC[e] : void 0;
  return VC({
    container: {
      [da.variable]: t ?? e,
      [Js.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [da.variable]: t ?? e,
      [Js.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var QL = {
  "2xs": Lr(4),
  xs: Lr(6),
  sm: Lr(8),
  md: Lr(12),
  lg: Lr(16),
  xl: Lr(24),
  "2xl": Lr(32),
  full: Lr("100%")
}, ZL = UL({
  baseStyle: XL,
  sizes: QL,
  defaultProps: {
    size: "md"
  }
}), JL = {
  Accordion: FL,
  Alert: HL,
  Avatar: ZL,
  Badge: ys,
  Breadcrumb: eL,
  Button: uL,
  Checkbox: $c,
  CloseButton: gL,
  Code: xL,
  Container: CL,
  Divider: EL,
  Drawer: P4,
  Editable: R4,
  Form: j4,
  FormError: H4,
  FormLabel: G4,
  Heading: q4,
  Input: be,
  Kbd: mF,
  Link: gF,
  List: wF,
  Menu: $F,
  Modal: HF,
  NumberInput: JF,
  PinInput: r4,
  Popover: h4,
  Progress: xD,
  Radio: AD,
  Select: VD,
  Skeleton: WD,
  SkipLink: UD,
  Slider: nF,
  Spinner: iF,
  Stat: pF,
  Switch: g5,
  Table: k5,
  Tabs: z5,
  Tag: Z5,
  Textarea: cD,
  Tooltip: pD,
  Card: hL,
  Stepper: cA
}, e3 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, t3 = {
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
}, n3 = "ltr", r3 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, BC = {
  semanticTokens: e3,
  direction: n3,
  ...sA,
  components: JL,
  styles: t3,
  config: r3
};
function os(e) {
  return typeof e == "function";
}
function o3(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var i3 = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return L$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, o3(
    ...r.map(
      (i) => (a) => os(i) ? i(a) : s3(a, i)
    )
  )(o);
}, a3 = i3(BC);
function s3(...e) {
  return mn({}, ...e, WC);
}
function WC(e, t, n, r) {
  if ((os(e) || os(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = os(e) ? e(...o) : e, a = os(t) ? t(...o) : t;
      return mn({}, i, a, WC);
    };
}
function l3() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var u3 = /* @__PURE__ */ l3();
function c3(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function d3(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var f3 = (e) => {
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
}, HC = f3(d3);
function UC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var GC = (e) => UC(e, (t) => t != null);
function p3(e) {
  return typeof e == "function";
}
function KC(e, ...t) {
  return p3(e) ? e(...t) : e;
}
function h3(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var m3 = typeof Element < "u", v3 = typeof Map == "function", g3 = typeof Set == "function", y3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function qu(e, t) {
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
        if (!qu(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (v3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!qu(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (g3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (y3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (m3 && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !qu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var b3 = function(t, n) {
  try {
    return qu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const S3 = /* @__PURE__ */ ll(b3);
function YC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = yR(), s = e ? HC(i, `components.${e}`) : void 0, l = r || s, u = mn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    GC(c3(o, ["children"]))
  ), c = g.useRef({});
  if (l) {
    const f = D$(l)(u);
    S3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function ei(e, t = {}) {
  return YC(e, t);
}
function kt(e, t = {}) {
  return YC(e, t);
}
var x3 = /* @__PURE__ */ new Set([
  ...C$,
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
]), w3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function C3(e) {
  return w3.has(e) || !x3.has(e);
}
function k3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function P3(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var _3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, T3 = /* @__PURE__ */ oC(
  function(e) {
    return _3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), E3 = T3, O3 = function(t) {
  return t !== "theme";
}, kb = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? E3 : O3;
}, Pb = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, M3 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Iv(n, r, o), pC(function() {
    return Rv(n, r, o);
  }), null;
}, I3 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = Pb(t, n, r), l = s || kb(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var y = Av(function(h, S, v) {
      var m = u && h.as || o, b = "", w = [], k = h;
      if (h.theme == null) {
        k = {};
        for (var P in h)
          k[P] = h[P];
        k.theme = g.useContext(la);
      }
      typeof h.className == "string" ? b = cC(S.registered, w, h.className) : h.className != null && (b = h.className + " ");
      var _ = Fd(d.concat(w), S.registered, k);
      b += S.key + "-" + _.name, a !== void 0 && (b += " " + a);
      var T = u && s === void 0 ? kb(m) : l, M = {};
      for (var I in h)
        u && I === "as" || // $FlowFixMe
        T(I) && (M[I] = h[I]);
      return M.className = b, M.ref = v, /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(M3, {
        cache: S,
        serialized: _,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ g.createElement(m, M));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + a;
      }
    }), y.withComponent = function(h, S) {
      return e(h, q({}, n, S, {
        shouldForwardProp: Pb(y, S, !0)
      })).apply(void 0, d);
    }, y;
  };
}, R3 = [
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
], Dc = I3.bind();
R3.forEach(function(e) {
  Dc[e] = Dc(e);
});
var _b, $3 = (_b = Dc.default) != null ? _b : Dc, A3 = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = UC(a, (d, f) => P$(f)), l = KC(e, t), u = k3(
    {},
    o,
    l,
    GC(s),
    i
  ), c = EC(u)(t.theme);
  return r ? [c, r] : c;
};
function dp(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = C3);
  const o = A3({ baseStyle: n }), i = $3(
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
function D3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(dp, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return dp(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, dp(n)), e.get(n);
    }
  });
}
var X = D3();
function oe(e) {
  return g.forwardRef(e);
}
function F3(e = {}) {
  const {
    strict: t = !0,
    errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: r
  } = e, o = g.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = g.useContext(o);
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
function L3(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = g.useMemo(() => w$(n), [n]);
  return /* @__PURE__ */ x.jsxs(qI, { theme: o, children: [
    /* @__PURE__ */ x.jsx(j3, { root: t }),
    r
  ] });
}
function j3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ x.jsx(Ld, { styles: (n) => ({ [t]: n.__cssVars }) });
}
F3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function z3() {
  const { colorMode: e } = Pa();
  return /* @__PURE__ */ x.jsx(
    Ld,
    {
      styles: (t) => {
        const n = HC(t, "styles.global"), r = KC(n, { theme: t, colorMode: e });
        return r ? EC(r)(t) : void 0;
      }
    }
  );
}
var Gv = g.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Gv.displayName = "EnvironmentContext";
function N3({ defer: e } = {}) {
  const [, t] = g.useReducer((n) => n + 1, 0);
  return ua(() => {
    e && t();
  }, [e]), g.useContext(Gv);
}
function qC(e) {
  const { children: t, environment: n, disabled: r } = e, o = g.useRef(null), i = g.useMemo(() => n || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [n]), a = !r || !n;
  return /* @__PURE__ */ x.jsxs(Gv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ x.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
qC.displayName = "EnvironmentProvider";
var V3 = (e) => {
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
  } = e, d = /* @__PURE__ */ x.jsx(
    qC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ x.jsx(L3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ x.jsxs(
    SC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ x.jsx(tR, { scope: o }) : /* @__PURE__ */ x.jsx(eR, {}),
        !c && /* @__PURE__ */ x.jsx(z3, {}),
        r ? /* @__PURE__ */ x.jsx(yC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, B3 = (e, t) => e.find((n) => n.id === t);
function Tb(e, t) {
  const n = XC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function XC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (B3(r, t))
      return n;
}
function W3(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function H3(e) {
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
  const n = g.useRef(e);
  return g.useEffect(() => {
    n.current = e;
  }), g.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function U3(e, t) {
  const n = ro(e);
  g.useEffect(() => {
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
  const n = g.useRef(!1), r = g.useRef(!1);
  g.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), g.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const QC = g.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Bd = g.createContext({}), yl = g.createContext(null), Wd = typeof document < "u", Kv = Wd ? g.useLayoutEffect : g.useEffect, ZC = g.createContext({ strict: !1 }), Yv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), G3 = "framerAppearId", JC = "data-" + Yv(G3);
function K3(e, t, n, r) {
  const { visualElement: o } = g.useContext(Bd), i = g.useContext(ZC), a = g.useContext(yl), s = g.useContext(QC).reducedMotion, l = g.useRef();
  r = r || i.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  g.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = g.useRef(!!n[JC]);
  return Kv(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), g.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function Ai(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Y3(e, t, n) {
  return g.useCallback(
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
function el(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Hd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const qv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Xv = ["initial", ...qv];
function Ud(e) {
  return Hd(e.animate) || Xv.some((t) => el(e[t]));
}
function ek(e) {
  return !!(Ud(e) || e.variants);
}
function q3(e, t) {
  if (Ud(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || el(n) ? n : void 0,
      animate: el(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function X3(e) {
  const { initial: t, animate: n } = q3(e, g.useContext(Bd));
  return g.useMemo(() => ({ initial: t, animate: n }), [Eb(t), Eb(n)]);
}
function Eb(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ob = {
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
}, tl = {};
for (const e in Ob)
  tl[e] = {
    isEnabled: (t) => Ob[e].some((n) => !!t[n])
  };
function Q3(e) {
  for (const t in e)
    tl[t] = {
      ...tl[t],
      ...e[t]
    };
}
const Qv = g.createContext({}), tk = g.createContext({}), Z3 = Symbol.for("motionComponentSymbol");
function J3({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && Q3(e);
  function i(s, l) {
    let u;
    const c = {
      ...g.useContext(QC),
      ...s,
      layoutId: ej(s)
    }, { isStatic: d } = c, f = X3(s), p = r(s, d);
    if (!d && Wd) {
      f.visualElement = K3(o, p, c, t);
      const y = g.useContext(tk), h = g.useContext(ZC).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        h,
        e,
        y
      ));
    }
    return g.createElement(
      Bd.Provider,
      { value: f },
      u && f.visualElement ? g.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, Y3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = g.forwardRef(i);
  return a[Z3] = o, a;
}
function ej({ layoutId: e }) {
  const t = g.useContext(Qv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function tj(e) {
  function t(r, o = {}) {
    return J3(e(r, o));
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
const nj = [
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
function Zv(e) {
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
      !!(nj.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Fc = {};
function rj(e) {
  Object.assign(Fc, e);
}
const bl = [
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
], ti = new Set(bl);
function nk(e, { layout: t, layoutId: n }) {
  return ti.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Fc[e] || e === "opacity");
}
const Bt = (e) => !!(e && e.getVelocity), oj = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ij = bl.length;
function aj(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < ij; a++) {
    const s = bl[a];
    if (e[s] !== void 0) {
      const l = oj[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const rk = (e) => (t) => typeof t == "string" && t.startsWith(e), ok = rk("--"), Yh = rk("var(--"), sj = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, lj = (e, t) => t && typeof e == "number" ? t.transform(e) : e, lo = (e, t, n) => Math.min(Math.max(n, e), t), ni = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ws = {
  ...ni,
  transform: (e) => lo(0, 1, e)
}, du = {
  ...ni,
  default: 1
}, Cs = (e) => Math.round(e * 1e5) / 1e5, Gd = /(-)?([\d]*\.?[\d])+/g, ik = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, uj = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Sl(e) {
  return typeof e == "string";
}
const xl = (e) => ({
  test: (t) => Sl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), jr = xl("deg"), tr = xl("%"), ne = xl("px"), cj = xl("vh"), dj = xl("vw"), Mb = {
  ...tr,
  parse: (e) => tr.parse(e) / 100,
  transform: (e) => tr.transform(e * 100)
}, Ib = {
  ...ni,
  transform: Math.round
}, ak = {
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
  scale: du,
  scaleX: du,
  scaleY: du,
  scaleZ: du,
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
  opacity: ws,
  originX: Mb,
  originY: Mb,
  originZ: ne,
  // Misc
  zIndex: Ib,
  // SVG
  fillOpacity: ws,
  strokeOpacity: ws,
  numOctaves: Ib
};
function Jv(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (ok(d)) {
      i[d] = f;
      continue;
    }
    const p = ak[d], y = lj(f, p);
    if (ti.has(d)) {
      if (l = !0, a[d] = y, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = y) : o[d] = y;
  }
  if (t.transform || (l || r ? o.transform = aj(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const eg = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function sk(e, t, n) {
  for (const r in t)
    !Bt(t[r]) && !nk(r, n) && (e[r] = t[r]);
}
function fj({ transformTemplate: e }, t, n) {
  return g.useMemo(() => {
    const r = eg();
    return Jv(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function pj(e, t, n) {
  const r = e.style || {}, o = {};
  return sk(o, r, e), Object.assign(o, fj(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function hj(e, t, n) {
  const r = {}, o = pj(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const mj = /* @__PURE__ */ new Set([
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
function Lc(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || mj.has(e);
}
let lk = (e) => !Lc(e);
function vj(e) {
  e && (lk = (t) => t.startsWith("on") ? !Lc(t) : e(t));
}
try {
  vj(require("@emotion/is-prop-valid").default);
} catch {
}
function gj(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (lk(o) || n === !0 && Lc(o) || !t && !Lc(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Rb(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function yj(e, t, n) {
  const r = Rb(t, e.x, e.width), o = Rb(n, e.y, e.height);
  return `${r} ${o}`;
}
const bj = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Sj = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function xj(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? bj : Sj;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function tg(e, {
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
  if (Jv(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: y, dimensions: h } = e;
  p.transform && (h && (y.transform = p.transform), delete p.transform), h && (o !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = yj(h, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && xj(p, a, s, l, !1);
}
const uk = () => ({
  ...eg(),
  attrs: {}
}), ng = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function wj(e, t, n, r) {
  const o = g.useMemo(() => {
    const i = uk();
    return tg(i, t, { enableHardwareAcceleration: !1 }, ng(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    sk(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function Cj(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Zv(n) ? wj : hj)(r, i, a, n), c = {
      ...gj(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = g.useMemo(() => Bt(d) ? d.get() : d, [d]);
    return g.createElement(n, {
      ...c,
      children: f
    });
  };
}
function ck(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const dk = /* @__PURE__ */ new Set([
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
function fk(e, t, n, r) {
  ck(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(dk.has(o) ? o : Yv(o), t.attrs[o]);
}
function rg(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Bt(n[o]) || t.style && Bt(t.style[o]) || nk(o, e)) && (r[o] = n[o]);
  return r;
}
function pk(e, t) {
  const n = rg(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o = bl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function og(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function hk(e) {
  const t = g.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const jc = (e) => Array.isArray(e), kj = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Pj = (e) => jc(e) ? e[e.length - 1] || 0 : e;
function Xu(e) {
  const t = Bt(e) ? e.get() : e;
  return kj(t) ? t.toValue() : t;
}
function _j({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: Tj(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const mk = (e) => (t, n) => {
  const r = g.useContext(Bd), o = g.useContext(yl), i = () => _j(e, t, r, o);
  return n ? i() : hk(i);
};
function Tj(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Xu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Ud(e), u = ek(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Hd(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const y = og(e, p);
    if (!y)
      return;
    const { transitionEnd: h, transition: S, ...v } = y;
    for (const m in v) {
      let b = v[m];
      if (Array.isArray(b)) {
        const w = c ? b.length - 1 : 0;
        b = b[w];
      }
      b !== null && (o[m] = b);
    }
    for (const m in h)
      o[m] = h[m];
  }), o;
}
const He = (e) => e;
class $b {
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
function Ej(e) {
  let t = new $b(), n = new $b(), r = 0, o = !1, i = !1;
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
const fu = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Oj = 40;
function Mj(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = fu.reduce((d, f) => (d[f] = Ej(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, Oj), 1), o.timestamp = d, o.isProcessing = !0, fu.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: fu.reduce((d, f) => {
    const p = i[f];
    return d[f] = (y, h = !1, S = !1) => (n || l(), p.schedule(y, h, S)), d;
  }, {}), cancel: (d) => fu.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: Ee, cancel: Tr, state: ot, steps: fp } = Mj(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), Ij = {
  useVisualState: mk({
    scrapeMotionValuesFromProps: pk,
    createRenderState: uk,
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
        tg(n, r, { enableHardwareAcceleration: !1 }, ng(t.tagName), e.transformTemplate), fk(t, n);
      });
    }
  })
}, Rj = {
  useVisualState: mk({
    scrapeMotionValuesFromProps: rg,
    createRenderState: eg
  })
};
function $j(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Zv(e) ? Ij : Rj,
    preloadedFeatures: n,
    useRender: Cj(t),
    createVisualElement: r,
    Component: e
  };
}
function vr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const vk = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Kd(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const Aj = (e) => (t) => vk(t) && e(t, Kd(t));
function br(e, t, n, r) {
  return vr(e, t, Aj(n), r);
}
const Dj = (e, t) => (n) => t(e(n)), oo = (...e) => e.reduce(Dj);
function gk(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Ab = gk("dragHorizontal"), Db = gk("dragVertical");
function yk(e) {
  let t = !1;
  if (e === "y")
    t = Db();
  else if (e === "x")
    t = Ab();
  else {
    const n = Ab(), r = Db();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function bk() {
  const e = yk(!0);
  return e ? (e(), !1) : !0;
}
class vo {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Fb(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || bk())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && Ee.update(() => s[r](i, a));
  };
  return br(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class Fj extends vo {
  mount() {
    this.unmount = oo(Fb(this.node, !0), Fb(this.node, !1));
  }
  unmount() {
  }
}
class Lj extends vo {
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
const Sk = (e, t) => t ? e === t ? !0 : Sk(e, t.parentElement) : !1;
function pp(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Kd(n));
}
class jj extends vo {
  constructor() {
    super(...arguments), this.removeStartListeners = He, this.removeEndListeners = He, this.removeAccessibleListeners = He, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = br(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        Ee.update(() => {
          Sk(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = br(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = oo(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || pp("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Ee.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = vr(this.node.current, "keyup", a), pp("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = vr(this.node.current, "keydown", t), r = () => {
        this.isPressing && pp("cancel", (i, a) => this.cancelPress(i, a));
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
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !bk();
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
const qh = /* @__PURE__ */ new WeakMap(), hp = /* @__PURE__ */ new WeakMap(), zj = (e) => {
  const t = qh.get(e.target);
  t && t(e);
}, Nj = (e) => {
  e.forEach(zj);
};
function Vj({ root: e, ...t }) {
  const n = e || document;
  hp.has(n) || hp.set(n, {});
  const r = hp.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Nj, { root: e, ...t })), r[o];
}
function Bj(e, t, n) {
  const r = Vj(t);
  return qh.set(e, n), r.observe(e), () => {
    qh.delete(e), r.unobserve(e);
  };
}
const Wj = {
  some: 0,
  all: 1
};
class Hj extends vo {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Wj[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return Bj(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Uj(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Uj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Gj = {
  inView: {
    Feature: Hj
  },
  tap: {
    Feature: jj
  },
  focus: {
    Feature: Lj
  },
  hover: {
    Feature: Fj
  }
};
function xk(e, t) {
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
function Kj(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function Yj(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function Yd(e, t, n) {
  const r = e.getProps();
  return og(r, t, n !== void 0 ? n : r.custom, Kj(e), Yj(e));
}
let qj = He, ig = He;
const io = (e) => e * 1e3, Sr = (e) => e / 1e3, Xj = {
  current: !1
}, wk = (e) => Array.isArray(e) && typeof e[0] == "number";
function Ck(e) {
  return !!(!e || typeof e == "string" && kk[e] || wk(e) || Array.isArray(e) && e.every(Ck));
}
const is = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, kk = {
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
function Pk(e) {
  if (e)
    return wk(e) ? is(e) : Array.isArray(e) ? e.map(Pk) : kk[e];
}
function Qj(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Pk(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function Zj(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const _k = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Jj = 1e-7, ez = 12;
function tz(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = _k(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Jj && ++s < ez);
  return a;
}
function wl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => tz(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : _k(o(i), t, r);
}
const nz = wl(0.42, 0, 1, 1), rz = wl(0, 0, 0.58, 1), Tk = wl(0.42, 0, 0.58, 1), oz = (e) => Array.isArray(e) && typeof e[0] != "number", Ek = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ok = (e) => (t) => 1 - e(1 - t), Mk = (e) => 1 - Math.sin(Math.acos(e)), ag = Ok(Mk), iz = Ek(ag), Ik = wl(0.33, 1.53, 0.69, 0.99), sg = Ok(Ik), az = Ek(sg), sz = (e) => (e *= 2) < 1 ? 0.5 * sg(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), lz = {
  linear: He,
  easeIn: nz,
  easeInOut: Tk,
  easeOut: rz,
  circIn: Mk,
  circInOut: iz,
  circOut: ag,
  backIn: sg,
  backInOut: az,
  backOut: Ik,
  anticipate: sz
}, Lb = (e) => {
  if (Array.isArray(e)) {
    ig(e.length === 4);
    const [t, n, r, o] = e;
    return wl(t, n, r, o);
  } else if (typeof e == "string")
    return lz[e];
  return e;
}, lg = (e, t) => (n) => !!(Sl(n) && uj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Rk = (e, t, n) => (r) => {
  if (!Sl(r))
    return r;
  const [o, i, a, s] = r.match(Gd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, uz = (e) => lo(0, 255, e), mp = {
  ...ni,
  transform: (e) => Math.round(uz(e))
}, Fo = {
  test: lg("rgb", "red"),
  parse: Rk("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + mp.transform(e) + ", " + mp.transform(t) + ", " + mp.transform(n) + ", " + Cs(ws.transform(r)) + ")"
};
function cz(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Xh = {
  test: lg("#"),
  parse: cz,
  transform: Fo.transform
}, Di = {
  test: lg("hsl", "hue"),
  parse: Rk("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tr.transform(Cs(t)) + ", " + tr.transform(Cs(n)) + ", " + Cs(ws.transform(r)) + ")"
}, Pt = {
  test: (e) => Fo.test(e) || Xh.test(e) || Di.test(e),
  parse: (e) => Fo.test(e) ? Fo.parse(e) : Di.test(e) ? Di.parse(e) : Xh.parse(e),
  transform: (e) => Sl(e) ? e : e.hasOwnProperty("red") ? Fo.transform(e) : Di.transform(e)
}, ze = (e, t, n) => -n * e + n * t + e;
function vp(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function dz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = vp(l, s, e + 1 / 3), i = vp(l, s, e), a = vp(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const gp = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, fz = [Xh, Fo, Di], pz = (e) => fz.find((t) => t.test(e));
function jb(e) {
  const t = pz(e);
  let n = t.parse(e);
  return t === Di && (n = dz(n)), n;
}
const $k = (e, t) => {
  const n = jb(e), r = jb(t), o = { ...n };
  return (i) => (o.red = gp(n.red, r.red, i), o.green = gp(n.green, r.green, i), o.blue = gp(n.blue, r.blue, i), o.alpha = ze(n.alpha, r.alpha, i), Fo.transform(o));
};
function hz(e) {
  var t, n;
  return isNaN(e) && Sl(e) && (((t = e.match(Gd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ik)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Ak = {
  regex: sj,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, Dk = {
  regex: ik,
  countKey: "Colors",
  token: "${c}",
  parse: Pt.parse
}, Fk = {
  regex: Gd,
  countKey: "Numbers",
  token: "${n}",
  parse: ni.parse
};
function yp(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function zc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && yp(n, Ak), yp(n, Dk), yp(n, Fk), n;
}
function Lk(e) {
  return zc(e).values;
}
function jk(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = zc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Ak.token, a[l]) : l < r + n ? s = s.replace(Dk.token, Pt.transform(a[l])) : s = s.replace(Fk.token, Cs(a[l]));
    return s;
  };
}
const mz = (e) => typeof e == "number" ? 0 : e;
function vz(e) {
  const t = Lk(e);
  return jk(e)(t.map(mz));
}
const uo = {
  test: hz,
  parse: Lk,
  createTransformer: jk,
  getAnimatableNone: vz
}, zk = (e, t) => (n) => `${n > 0 ? t : e}`;
function Nk(e, t) {
  return typeof e == "number" ? (n) => ze(e, t, n) : Pt.test(e) ? $k(e, t) : e.startsWith("var(") ? zk(e, t) : Bk(e, t);
}
const Vk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Nk(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, gz = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Nk(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, Bk = (e, t) => {
  const n = uo.createTransformer(t), r = zc(e), o = zc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? oo(Vk(r.values, o.values), n) : zk(e, t);
}, nl = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, zb = (e, t) => (n) => ze(e, t, n);
function yz(e) {
  return typeof e == "number" ? zb : typeof e == "string" ? Pt.test(e) ? $k : Bk : Array.isArray(e) ? Vk : typeof e == "object" ? gz : zb;
}
function bz(e, t, n) {
  const r = [], o = n || yz(e[0]), i = e.length - 1;
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
function Wk(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (ig(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = bz(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = nl(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(lo(e[0], e[i - 1], u)) : l;
}
function Sz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = nl(0, t, r);
    e.push(ze(n, 1, o));
  }
}
function xz(e) {
  const t = [0];
  return Sz(t, e.length - 1), t;
}
function wz(e, t) {
  return e.map((n) => n * t);
}
function Cz(e, t) {
  return e.map(() => t || Tk).splice(0, e.length - 1);
}
function Nc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = oz(r) ? r.map(Lb) : Lb(r), i = {
    done: !1,
    value: t[0]
  }, a = wz(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : xz(t),
    e
  ), s = Wk(a, t, {
    ease: Array.isArray(o) ? o : Cz(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Hk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const kz = 5;
function Uk(e, t, n) {
  const r = Math.max(t - kz, 0);
  return Hk(n - e(r), t - r);
}
const bp = 1e-3, Pz = 0.01, Nb = 10, _z = 0.05, Tz = 1;
function Ez({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  qj(e <= io(Nb));
  let a = 1 - t;
  a = lo(_z, Tz, a), e = lo(Pz, Nb, Sr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = Qh(u, a), y = Math.exp(-d);
    return bp - f / p * y;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, y = Math.exp(-d), h = Qh(Math.pow(u, 2), a);
    return (-o(u) + bp > 0 ? -1 : 1) * ((f - p) * y) / h;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -bp + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = Mz(o, i, s);
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
const Oz = 12;
function Mz(e, t, n) {
  let r = n;
  for (let o = 1; o < Oz; o++)
    r = r - e(r) / t(r);
  return r;
}
function Qh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Iz = ["duration", "bounce"], Rz = ["stiffness", "damping", "mass"];
function Vb(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function $z(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Vb(e, Rz) && Vb(e, Iz)) {
    const n = Ez(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Gk({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = $z(r), p = c ? -Sr(c) : 0, y = l / (2 * Math.sqrt(s * u)), h = i - o, S = Sr(Math.sqrt(s / u)), v = Math.abs(h) < 5;
  n || (n = v ? 0.01 : 2), t || (t = v ? 5e-3 : 0.5);
  let m;
  if (y < 1) {
    const b = Qh(S, y);
    m = (w) => {
      const k = Math.exp(-y * S * w);
      return i - k * ((p + y * S * h) / b * Math.sin(b * w) + h * Math.cos(b * w));
    };
  } else if (y === 1)
    m = (b) => i - Math.exp(-S * b) * (h + (p + S * h) * b);
  else {
    const b = S * Math.sqrt(y * y - 1);
    m = (w) => {
      const k = Math.exp(-y * S * w), P = Math.min(b * w, 300);
      return i - k * ((p + y * S * h) * Math.sinh(P) + b * h * Math.cosh(P)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const w = m(b);
      if (f)
        a.done = b >= d;
      else {
        let k = p;
        b !== 0 && (y < 1 ? k = Uk(m, b, w) : k = 0);
        const P = Math.abs(k) <= n, _ = Math.abs(i - w) <= t;
        a.done = P && _;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function Bb({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (T) => s !== void 0 && T < s || l !== void 0 && T > l, y = (T) => s === void 0 ? l : l === void 0 || Math.abs(s - T) < Math.abs(l - T) ? s : l;
  let h = n * t;
  const S = d + h, v = a === void 0 ? S : a(S);
  v !== S && (h = v - d);
  const m = (T) => -h * Math.exp(-T / r), b = (T) => v + m(T), w = (T) => {
    const M = m(T), I = b(T);
    f.done = Math.abs(M) <= u, f.value = f.done ? v : I;
  };
  let k, P;
  const _ = (T) => {
    p(f.value) && (k = T, P = Gk({
      keyframes: [f.value, y(f.value)],
      velocity: Uk(b, T, f.value),
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
      return !P && k === void 0 && (M = !0, w(T), _(T)), k !== void 0 && T > k ? P.next(T - k) : (!M && w(T), f);
    }
  };
}
const Az = (e) => {
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
}, Wb = 2e4;
function Hb(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Wb; )
    t += n, r = e.next(t);
  return t >= Wb ? 1 / 0 : t;
}
const Dz = {
  decay: Bb,
  inertia: Bb,
  tween: Nc,
  keyframes: Nc,
  spring: Gk
};
function Vc({ autoplay: e = !0, delay: t = 0, driver: n = Az, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, y = !1, h, S;
  const v = () => {
    S = new Promise((V) => {
      h = V;
    });
  };
  v();
  let m;
  const b = Dz[o] || Nc;
  let w;
  b !== Nc && typeof r[0] != "number" && (w = Wk([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const k = b({ ...f, keyframes: r });
  let P;
  s === "mirror" && (P = b({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let _ = "idle", T = null, M = null, I = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = Hb(k));
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
      let _n = lo(0, 1, qe);
      L > H && (_n = s === "reverse" && on ? 1 : 0), te = _n * G;
    }
    const ae = z ? { done: !1, value: r[0] } : le.next(te);
    w && (ae.value = w(ae.value));
    let { done: se } = ae;
    !z && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = T === null && (_ === "finished" || _ === "running" && se);
    return d && d(ae.value), me && A(), ae;
  }, K = () => {
    m && m.stop(), m = void 0;
  }, $ = () => {
    _ = "idle", K(), h(), v(), M = I = null;
  }, A = () => {
    _ = "finished", c && c(), K(), h();
  }, j = () => {
    if (y)
      return;
    m || (m = n(W));
    const V = m.now();
    l && l(), T !== null ? M = V - T : (!M || _ === "finished") && (M = V), _ === "finished" && v(), I = M, T = null, _ = "running", m.start();
  };
  e && j();
  const U = {
    then(V, Y) {
      return S.then(V, Y);
    },
    get time() {
      return Sr(L);
    },
    set time(V) {
      V = io(V), L = V, T !== null || !m || p === 0 ? T = V : M = m.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Hb(k) : k.calculatedDuration;
      return Sr(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !m || (p = V, U.time = Sr(L));
    },
    get state() {
      return _;
    },
    play: j,
    pause: () => {
      _ = "paused", T = L;
    },
    stop: () => {
      y = !0, _ !== "idle" && (_ = "idle", u && u(), $());
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
function Fz(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Lz = Fz(() => Object.hasOwnProperty.call(Element.prototype, "animate")), jz = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), pu = 10, zz = 2e4, Nz = (e, t) => t.type === "spring" || e === "backgroundColor" || !Ck(t.ease);
function Vz(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(Lz() && jz.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((m) => {
      s = m;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (Nz(t, o)) {
    const m = Vc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const w = [];
    let k = 0;
    for (; !b.done && k < zz; )
      b = m.sample(k), w.push(b.value), k += pu;
    p = void 0, c = w, d = k - pu, f = "linear";
  }
  const y = Qj(e.owner.current, t, c, {
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
  o.syncStart && (y.startTime = ot.isProcessing ? ot.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const h = () => y.cancel(), S = () => {
    Ee.update(h), s(), u();
  };
  return y.onfinish = () => {
    e.set(Zj(c, o)), r && r(), S();
  }, {
    then(m, b) {
      return l.then(m, b);
    },
    attachTimeline(m) {
      return y.timeline = m, y.onfinish = null, He;
    },
    get time() {
      return Sr(y.currentTime || 0);
    },
    set time(m) {
      y.currentTime = io(m);
    },
    get speed() {
      return y.playbackRate;
    },
    set speed(m) {
      y.playbackRate = m;
    },
    get duration() {
      return Sr(d);
    },
    play: () => {
      a || (y.play(), Tr(h));
    },
    pause: () => y.pause(),
    stop: () => {
      if (a = !0, y.playState === "idle")
        return;
      const { currentTime: m } = y;
      if (m) {
        const b = Vc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(m - pu).value, b.sample(m).value, pu);
      }
      S();
    },
    complete: () => y.finish(),
    cancel: S
  };
}
function Bz({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
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
  return t ? Vc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const Wz = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Hz = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Uz = {
  type: "keyframes",
  duration: 0.8
}, Gz = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Kz = (e, { keyframes: t }) => t.length > 2 ? Uz : ti.has(e) ? e.startsWith("scale") ? Hz(t[1]) : Wz : Gz, Zh = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(uo.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), Yz = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function qz(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Gd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = Yz.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Xz = /([a-z-]*)\(.*?\)/g, Jh = {
  ...uo,
  getAnimatableNone: (e) => {
    const t = e.match(Xz);
    return t ? t.map(qz).join(" ") : e;
  }
}, Qz = {
  ...ak,
  // Color props
  color: Pt,
  backgroundColor: Pt,
  outlineColor: Pt,
  fill: Pt,
  stroke: Pt,
  // Border props
  borderColor: Pt,
  borderTopColor: Pt,
  borderRightColor: Pt,
  borderBottomColor: Pt,
  borderLeftColor: Pt,
  filter: Jh,
  WebkitFilter: Jh
}, ug = (e) => Qz[e];
function Kk(e, t) {
  let n = ug(e);
  return n !== Jh && (n = uo), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Yk = (e) => /^0[^.\s]+$/.test(e);
function Zz(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Yk(e);
}
function Jz(e, t, n, r) {
  const o = Zh(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), Zz(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Kk(t, s);
    }
  return i;
}
function eN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function cg(e, t) {
  return e[t] || e.default || e;
}
const dg = (e, t, n, r = {}) => (o) => {
  const i = cg(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - io(a);
  const l = Jz(t, e, n, i), u = l[0], c = l[l.length - 1], d = Zh(e, u), f = Zh(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (y) => {
      t.set(y), i.onUpdate && i.onUpdate(y);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (eN(i) || (p = {
    ...p,
    ...Kz(e, p)
  }), p.duration && (p.duration = io(p.duration)), p.repeatDelay && (p.repeatDelay = io(p.repeatDelay)), !d || !f || Xj.current || i.type === !1)
    return Bz(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const y = Vz(t, e, p);
    if (y)
      return y;
  }
  return Vc(p);
};
function Bc(e) {
  return !!(Bt(e) && e.add);
}
const qk = (e) => /^\-?\d*\.?\d+$/.test(e);
function fg(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pg(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class hg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return fg(this.subscriptions, t), () => pg(this.subscriptions, t);
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
const tN = (e) => !isNaN(parseFloat(e));
class nN {
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
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = tN(this.current), this.owner = n.owner;
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
    this.events[t] || (this.events[t] = new hg());
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
      Hk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  return new nN(e, t);
}
const Xk = (e) => (t) => t.test(e), rN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Qk = [ni, ne, tr, jr, dj, cj, rN], Ha = (e) => Qk.find(Xk(e)), oN = [...Qk, Pt, uo], iN = (e) => oN.find(Xk(e));
function aN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pa(n));
}
function sN(e, t) {
  const n = Yd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = Pj(i[a]);
    aN(e, a, s);
  }
}
function lN(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (qk(c) || Yk(c)) ? c = parseFloat(c) : !iN(c) && uo.test(u) && (c = Kk(l, u)), e.addValue(l, pa(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function uN(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function cN(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = uN(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function dN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Zk(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && dN(c, d))
      continue;
    const y = {
      delay: n,
      elapsed: 0,
      ...cg(i || {}, d)
    };
    let h = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const m = e.getProps()[JC];
      m && (h = !1, y.elapsed = window.HandoffAppearAnimations(m, d, f, Ee), y.syncStart = !0);
    }
    let S = h && p === f.get();
    if (y.type === "spring" && (f.getVelocity() || y.velocity) && (S = !1), f.animation && (S = !1), S)
      continue;
    f.start(dg(d, f, p, e.shouldReduceMotion && ti.has(d) ? { type: !1 } : y));
    const v = f.animation;
    Bc(l) && (l.add(d), v.then(() => l.remove(d))), u.push(v);
  }
  return a && Promise.all(u).then(() => {
    a && sN(e, a);
  }), u;
}
function em(e, t, n = {}) {
  const r = Yd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Zk(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return fN(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function fN(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(pN).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(em(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function pN(e, t) {
  return e.sortNodePosition(t);
}
function hN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => em(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = em(e, t, n);
  else {
    const o = typeof t == "function" ? Yd(e, t, n.custom) : t;
    r = Promise.all(Zk(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const mN = [...qv].reverse(), vN = qv.length;
function gN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => hN(e, n, r)));
}
function yN(e) {
  let t = gN(e);
  const n = SN();
  let r = !0;
  const o = (l, u) => {
    const c = Yd(e, u);
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
    let y = {}, h = 1 / 0;
    for (let v = 0; v < vN; v++) {
      const m = mN[v], b = n[m], w = c[m] !== void 0 ? c[m] : d[m], k = el(w), P = m === u ? b.isActive : null;
      P === !1 && (h = v);
      let _ = w === d[m] && w !== c[m] && k;
      if (_ && r && e.manuallyAnimateOnMount && (_ = !1), b.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !w && !b.prevProp || // Or if the prop doesn't define an animation
      Hd(w) || typeof w == "boolean")
        continue;
      const T = bN(b.prevProp, w);
      let M = T || // If we're making this variant active, we want to always make it active
      m === u && b.isActive && !_ && k || // If we removed a higher-priority variant (i is in reverse order)
      v > h && k;
      const I = Array.isArray(w) ? w : [w];
      let D = I.reduce(o, {});
      P === !1 && (D = {});
      const { prevResolvedValues: G = {} } = b, H = {
        ...G,
        ...D
      }, L = (W) => {
        M = !0, p.delete(W), b.needsAnimating[W] = !0;
      };
      for (const W in H) {
        const K = D[W], $ = G[W];
        y.hasOwnProperty(W) || (K !== $ ? jc(K) && jc($) ? !xk(K, $) || T ? L(W) : b.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : b.protectedKeys[W] = !0);
      }
      b.prevProp = w, b.prevResolvedValues = D, b.isActive && (y = { ...y, ...D }), r && e.blockInitialAnimation && (M = !1), M && !_ && f.push(...I.map((W) => ({
        animation: W,
        options: { type: m, ...l }
      })));
    }
    if (p.size) {
      const v = {};
      p.forEach((m) => {
        const b = e.getBaseTarget(m);
        b !== void 0 && (v[m] = b);
      }), f.push({ animation: v });
    }
    let S = !!f.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), r = !1, S ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var y;
      return (y = p.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u);
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
function bN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !xk(t, e) : !1;
}
function wo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function SN() {
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
class xN extends vo {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = yN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Hd(t) && (this.unmount = t.subscribe(this.node));
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
let wN = 0;
class CN extends vo {
  constructor() {
    super(...arguments), this.id = wN++;
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
const kN = {
  animation: {
    Feature: xN
  },
  exit: {
    Feature: CN
  }
}, Ub = (e, t) => Math.abs(e - t);
function PN(e, t) {
  const n = Ub(e.x, t.x), r = Ub(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Jk {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = xp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = PN(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: y } = ot;
      this.history.push({ ...p, timestamp: y });
      const { onStart: h, onMove: S } = this.handlers;
      d || (h && h(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Sp(d, this.transformPagePoint), Ee.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, y = xp(c.type === "pointercancel" ? this.lastMoveEventInfo : Sp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, y), p && p(c, y);
    }, !vk(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Kd(t), a = Sp(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, xp(a, this.history)), this.removeListeners = oo(br(this.contextWindow, "pointermove", this.handlePointerMove), br(this.contextWindow, "pointerup", this.handlePointerUp), br(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tr(this.updatePoint);
  }
}
function Sp(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Gb(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function xp({ point: e }, t) {
  return {
    point: e,
    delta: Gb(e, eP(t)),
    offset: Gb(e, _N(t)),
    velocity: TN(t, 0.1)
  };
}
function _N(e) {
  return e[0];
}
function eP(e) {
  return e[e.length - 1];
}
function TN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = eP(e);
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
function tm(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Kb(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ze(t.min, t.max, e.origin), e.scale = Jt(n) / Jt(t), (tm(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ze(n.min, n.max, e.origin) - e.originPoint, (tm(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ks(e, t, n, r) {
  Kb(e.x, t.x, n.x, r ? r.originX : void 0), Kb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Yb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Jt(t);
}
function EN(e, t, n) {
  Yb(e.x, t.x, n.x), Yb(e.y, t.y, n.y);
}
function qb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Jt(t);
}
function Ps(e, t, n) {
  qb(e.x, t.x, n.x), qb(e.y, t.y, n.y);
}
function ON(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ze(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ze(n, e, r.max) : Math.min(e, n)), e;
}
function Xb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function MN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Xb(e.x, n, o),
    y: Xb(e.y, t, r)
  };
}
function Qb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function IN(e, t) {
  return {
    x: Qb(e.x, t.x),
    y: Qb(e.y, t.y)
  };
}
function RN(e, t) {
  let n = 0.5;
  const r = Jt(e), o = Jt(t);
  return o > r ? n = nl(t.min, t.max - r, e.min) : r > o && (n = nl(e.min, e.max - o, t.min)), lo(0, 1, n);
}
function $N(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const nm = 0.35;
function AN(e = nm) {
  return e === !1 ? e = 0 : e === !0 && (e = nm), {
    x: Zb(e, "left", "right"),
    y: Zb(e, "top", "bottom")
  };
}
function Zb(e, t, n) {
  return {
    min: Jb(e, t),
    max: Jb(e, n)
  };
}
function Jb(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const e1 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Fi = () => ({
  x: e1(),
  y: e1()
}), t1 = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: t1(),
  y: t1()
});
function Hn(e) {
  return [e("x"), e("y")];
}
function tP({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function DN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function FN(e, t) {
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
function wp(e) {
  return e === void 0 || e === 1;
}
function rm({ scale: e, scaleX: t, scaleY: n }) {
  return !wp(e) || !wp(t) || !wp(n);
}
function _o(e) {
  return rm(e) || nP(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function nP(e) {
  return n1(e.x) || n1(e.y);
}
function n1(e) {
  return e && e !== "0%";
}
function Wc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function r1(e, t, n, r, o) {
  return o !== void 0 && (e = Wc(e, o, r)), Wc(e, n, r) + t;
}
function om(e, t = 0, n = 1, r, o) {
  e.min = r1(e.min, t, n, r, o), e.max = r1(e.max, t, n, r, o);
}
function rP(e, { x: t, y: n }) {
  om(e.x, t.translate, t.scale, t.originPoint), om(e.y, n.translate, n.scale, n.originPoint);
}
function LN(e, t, n, r = !1) {
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
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, rP(e, a)), r && _o(i.latestValues) && Li(e, i.latestValues));
  }
  t.x = o1(t.x), t.y = o1(t.y);
}
function o1(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Vr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function i1(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = ze(e.min, e.max, i);
  om(e, t[n], t[r], a, t.scale);
}
const jN = ["x", "scaleX", "originX"], zN = ["y", "scaleY", "originY"];
function Li(e, t) {
  i1(e.x, t, jN), i1(e.y, t, zN);
}
function oP(e, t) {
  return tP(FN(e.getBoundingClientRect(), t));
}
function NN(e, t, n) {
  const r = oP(e, n), { scroll: o } = t;
  return o && (Vr(r.x, o.offset.x), Vr(r.y, o.offset.y)), r;
}
const iP = ({ current: e }) => e ? e.ownerDocument.defaultView : null, VN = /* @__PURE__ */ new WeakMap();
class BN {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Kd(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = yk(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Hn((y) => {
        let h = this.getAxisMotionValue(y).get() || 0;
        if (tr.test(h)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const v = S.layout.layoutBox[y];
            v && (h = Jt(v) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[y] = h;
      }), f && Ee.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: y } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = WN(y), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, y), this.updateAxis("y", u.point, y), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Jk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: iP(this.visualElement)
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
    if (!r || !hu(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = ON(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Ai(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = MN(o.layoutBox, n) : this.constraints = !1, this.elastic = AN(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Hn((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = $N(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ai(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = NN(r, o.root, this.visualElement.getTransformPagePoint());
    let a = IN(o.layout.layoutBox, i);
    if (n) {
      const s = n(DN(a));
      this.hasMutatedConstraints = !!s, s && (a = tP(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Hn((c) => {
      if (!hu(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, y = {
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
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(dg(t, r, 0, n));
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
      if (!hu(n, r, this.currentDirection))
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
        o[a] = RN({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Hn((a) => {
      if (!hu(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(ze(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    VN.set(this.visualElement, this);
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = nm, dragMomentum: s = !0 } = t;
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
function hu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function WN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class HN extends vo {
  constructor(t) {
    super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new BN(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const a1 = (e) => (t, n) => {
  e && Ee.update(() => e(t, n));
};
class UN extends vo {
  constructor() {
    super(...arguments), this.removePointerDownListener = He;
  }
  onPointerDown(t) {
    this.session = new Jk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: iP(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: a1(t),
      onStart: a1(n),
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
function aP() {
  const e = g.useContext(yl);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = g.useId();
  return g.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function GN() {
  return KN(g.useContext(yl));
}
function KN(e) {
  return e === null ? !0 : e.isPresent;
}
const Qu = {
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
function s1(e, t) {
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
    const n = s1(e, t.target.x), r = s1(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, YN = {
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
class qN extends re.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    rj(XN), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Qu.hasEverUpdated = !0;
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
function sP(e) {
  const [t, n] = aP(), r = g.useContext(Qv);
  return re.createElement(qN, { ...e, layoutGroup: r, switchLayoutGroup: g.useContext(tk), isPresent: t, safeToRemove: n });
}
const XN = {
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
  boxShadow: YN
}, lP = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], QN = lP.length, l1 = (e) => typeof e == "string" ? parseFloat(e) : e, u1 = (e) => typeof e == "number" || ne.test(e);
function ZN(e, t, n, r, o, i) {
  o ? (e.opacity = ze(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    JN(r)
  ), e.opacityExit = ze(t.opacity !== void 0 ? t.opacity : 1, 0, eV(r))) : i && (e.opacity = ze(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < QN; a++) {
    const s = `border${lP[a]}Radius`;
    let l = c1(t, s), u = c1(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || u1(l) === u1(u) ? (e[s] = Math.max(ze(l1(l), l1(u), r), 0), (tr.test(u) || tr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ze(t.rotate || 0, n.rotate || 0, r));
}
function c1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const JN = uP(0, 0.5, ag), eV = uP(0.5, 0.95, He);
function uP(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(nl(e, t, r));
}
function d1(e, t) {
  e.min = t.min, e.max = t.max;
}
function un(e, t) {
  d1(e.x, t.x), d1(e.y, t.y);
}
function f1(e, t, n, r, o) {
  return e -= t, e = Wc(e, 1 / n, r), o !== void 0 && (e = Wc(e, 1 / o, r)), e;
}
function tV(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (tr.test(t) && (t = parseFloat(t), t = ze(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = ze(i.min, i.max, r);
  e === i && (s -= t), e.min = f1(e.min, t, n, s, o), e.max = f1(e.max, t, n, s, o);
}
function p1(e, t, [n, r, o], i, a) {
  tV(e, t[n], t[r], t[o], t.scale, i, a);
}
const nV = ["x", "scaleX", "originX"], rV = ["y", "scaleY", "originY"];
function h1(e, t, n, r) {
  p1(e.x, t, nV, n ? n.x : void 0, r ? r.x : void 0), p1(e.y, t, rV, n ? n.y : void 0, r ? r.y : void 0);
}
function m1(e) {
  return e.translate === 0 && e.scale === 1;
}
function cP(e) {
  return m1(e.x) && m1(e.y);
}
function oV(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function dP(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function v1(e) {
  return Jt(e.x) / Jt(e.y);
}
class iV {
  constructor() {
    this.members = [];
  }
  add(t) {
    fg(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (pg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function g1(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const aV = (e, t) => e.depth - t.depth;
class sV {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    fg(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    pg(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(aV), this.isDirty = !1, this.children.forEach(t);
  }
}
function lV(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Tr(r), e(i - t));
  };
  return Ee.read(r, !0), () => Tr(r);
}
function uV(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function cV(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function dV(e, t, n) {
  const r = Bt(e) ? e : pa(e);
  return r.start(dg("", r, t, n)), r.animation;
}
const y1 = ["", "X", "Y", "Z"], fV = { visibility: "hidden" }, b1 = 1e3;
let pV = 0;
const To = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function fP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = pV++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, To.totalNodes = To.resolvedTargetDeltas = To.recalculatedProjection = 0, this.nodes.forEach(vV), this.nodes.forEach(xV), this.nodes.forEach(wV), this.nodes.forEach(gV), uV(To);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new sV());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new hg()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = cV(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = lV(f, 250), Qu.hasAnimatedSinceResize && (Qu.hasAnimatedSinceResize = !1, this.nodes.forEach(x1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const h = this.options.transition || c.getDefaultTransition() || TV, { onLayoutAnimationStart: S, onLayoutAnimationComplete: v } = c.getProps(), m = !this.targetLayout || !dP(this.targetLayout, y) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (m || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const w = {
            ...cg(h, "layout"),
            onPlay: S,
            onComplete: v
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || x1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(CV), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(S1);
        return;
      }
      this.isUpdating || this.nodes.forEach(bV), this.isUpdating = !1, this.nodes.forEach(SV), this.nodes.forEach(hV), this.nodes.forEach(mV), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = lo(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, fp.update.process(ot), fp.preRender.process(ot), fp.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(yV), this.sharedNodes.forEach(kV);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !cP(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || _o(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), EV(l), {
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
        rm(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        un(c, d), h1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return _o(this.latestValues) && h1(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), Ps(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), EN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : un(this.target, this.layout.layoutBox), rP(this.target, this.targetDelta)) : un(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), Ps(this.relativeTargetOrigin, this.target, p.target), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          To.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || rm(this.parent.latestValues) || nP(this.parent.latestValues)))
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
      LN(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: y } = s;
      if (!y) {
        this.projectionTransform && (this.projectionDelta = Fi(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Fi(), this.projectionDeltaWithTransform = Fi());
      const h = this.projectionTransform;
      ks(this.projectionDelta, this.layoutCorrected, y, this.latestValues), this.projectionTransform = g1(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), To.recalculatedProjection++;
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
      const f = Xe(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, h = p !== y, S = this.getStack(), v = !S || S.members.length <= 1, m = !!(h && !v && this.options.crossfade === !0 && !this.path.some(_V));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        w1(d.x, a.x, k), w1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ps(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), PV(this.relativeTarget, this.relativeTargetOrigin, f, k), b && oV(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Xe()), un(b, this.relativeTarget)), h && (this.animationValues = c, ZN(c, u, this.latestValues, k, m, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ee.update(() => {
        Qu.hasAnimatedSinceResize = !0, this.currentAnimation = dV(0, b1, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(b1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && pP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        un(s, l), Li(s, c), ks(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new iV()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < y1.length; c++) {
        const d = "rotate" + y1[c];
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
        return fV;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Xu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Xu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !_o(this.latestValues) && (h.transform = c ? c({}, "") : "none", this.hasProjected = !1), h;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = g1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const h in Fc) {
        if (f[h] === void 0)
          continue;
        const { correct: S, applyTo: v } = Fc[h], m = u.transform === "none" ? f[h] : S(f[h], d);
        if (v) {
          const b = v.length;
          for (let w = 0; w < b; w++)
            u[v[w]] = m;
        } else
          u[h] = m;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Xu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(S1), this.root.sharedNodes.clear();
    }
  };
}
function hV(e) {
  e.updateLayout();
}
function mV(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : pP(i, n.layoutBox, r) && Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Fi();
    ks(s, r, n.layoutBox);
    const l = Fi();
    a ? ks(l, e.applyTransform(o, !0), n.measuredBox) : ks(l, r, n.layoutBox);
    const u = !cP(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const y = Xe();
          Ps(y, n.layoutBox, f.layoutBox);
          const h = Xe();
          Ps(h, r, p.layoutBox), dP(y, h) || (c = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = y, e.relativeParent = d);
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
function vV(e) {
  To.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function gV(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function yV(e) {
  e.clearSnapshot();
}
function S1(e) {
  e.clearMeasurements();
}
function bV(e) {
  e.isLayoutDirty = !1;
}
function SV(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function x1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function xV(e) {
  e.resolveTargetDelta();
}
function wV(e) {
  e.calcProjection();
}
function CV(e) {
  e.resetRotation();
}
function kV(e) {
  e.removeLeadSnapshot();
}
function w1(e, t, n) {
  e.translate = ze(t.translate, 0, n), e.scale = ze(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function C1(e, t, n, r) {
  e.min = ze(t.min, n.min, r), e.max = ze(t.max, n.max, r);
}
function PV(e, t, n, r) {
  C1(e.x, t.x, n.x, r), C1(e.y, t.y, n.y, r);
}
function _V(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const TV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, k1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), P1 = k1("applewebkit/") && !k1("chrome/") ? Math.round : He;
function _1(e) {
  e.min = P1(e.min), e.max = P1(e.max);
}
function EV(e) {
  _1(e.x), _1(e.y);
}
function pP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !tm(v1(t), v1(n), 0.2);
}
const OV = fP({
  attachResizeListener: (e, t) => vr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Cp = {
  current: void 0
}, hP = fP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Cp.current) {
      const e = new OV({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Cp.current = e;
    }
    return Cp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), MV = {
  pan: {
    Feature: UN
  },
  drag: {
    Feature: HN,
    ProjectionNode: hP,
    MeasureLayout: sP
  }
}, IV = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function RV(e) {
  const t = IV.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function im(e, t, n = 1) {
  const [r, o] = RV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return qk(a) ? parseFloat(a) : a;
  } else
    return Yh(o) ? im(o, t, n + 1) : o;
}
function $V(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!Yh(i))
      return;
    const a = im(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Yh(i))
      continue;
    const a = im(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const AV = /* @__PURE__ */ new Set([
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
]), mP = (e) => AV.has(e), DV = (e) => Object.keys(e).some(mP), T1 = (e) => e === ni || e === ne, E1 = (e, t) => parseFloat(e.split(", ")[t]), O1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return E1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? E1(i[1], e) : 0;
  }
}, FV = /* @__PURE__ */ new Set(["x", "y", "z"]), LV = bl.filter((e) => !FV.has(e));
function jV(e) {
  const t = [];
  return LV.forEach((n) => {
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
  x: O1(4, 13),
  y: O1(5, 14)
};
ha.translateX = ha.x;
ha.translateY = ha.y;
const zV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = ha[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ha[u](l, i);
  }), e;
}, NV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(mP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = Ha(c);
    const f = t[l];
    let p;
    if (jc(f)) {
      const y = f.length, h = f[0] === null ? 1 : 0;
      c = f[h], d = Ha(c);
      for (let S = h; S < y && f[S] !== null; S++)
        p ? ig(Ha(f[S]) === p) : p = Ha(f[S]);
    } else
      p = Ha(f);
    if (d !== p)
      if (T1(d) && T1(p)) {
        const y = u.get();
        typeof y == "string" && u.set(parseFloat(y)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = jV(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = zV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Wd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function VV(e, t, n, r) {
  return DV(t) ? NV(e, t, n, r) : { target: t, transitionEnd: r };
}
const BV = (e, t, n, r) => {
  const o = $V(e, t, r);
  return t = o.target, r = o.transitionEnd, VV(e, t, n, r);
}, am = { current: null }, vP = { current: !1 };
function WV() {
  if (vP.current = !0, !!Wd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => am.current = e.matches;
      e.addListener(t), t();
    } else
      am.current = !1;
}
function HV(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Bt(i))
      e.addValue(o, i), Bc(r) && r.add(o);
    else if (Bt(a))
      e.addValue(o, pa(i, { owner: e })), Bc(r) && r.remove(o);
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
const M1 = /* @__PURE__ */ new WeakMap(), gP = Object.keys(tl), UV = gP.length, I1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], GV = Xv.length;
class KV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ee.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Ud(n), this.isVariantNode = ek(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), Bc(u) && u.add(d));
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
    this.current = t, M1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), vP.current || WV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : am.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    M1.delete(this.current), this.projection && this.projection.unmount(), Tr(this.notifyUpdate), Tr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    for (let l = 0; l < UV; l++) {
      const u = gP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = tl[u];
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
    for (let r = 0; r < I1.length; r++) {
      const o = I1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = HV(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < GV; r++) {
      const o = Xv[r], i = this.props[o];
      (el(i) || i === !1) && (n[o] = i);
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = og(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new hg()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class yP extends KV {
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
    let a = cN(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      lN(this, r, a);
      const s = BV(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function YV(e) {
  return window.getComputedStyle(e);
}
class qV extends yP {
  readValueFromInstance(t, n) {
    if (ti.has(n)) {
      const r = ug(n);
      return r && r.default || 0;
    } else {
      const r = YV(t), o = (ok(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return oP(t, n);
  }
  build(t, n, r, o) {
    Jv(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return rg(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    ck(t, n, r, o);
  }
}
class XV extends yP {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ti.has(n)) {
      const r = ug(n);
      return r && r.default || 0;
    }
    return n = dk.has(n) ? n : Yv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return pk(t, n);
  }
  build(t, n, r, o) {
    tg(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    fk(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = ng(t.tagName), super.mount(t);
  }
}
const QV = (e, t) => Zv(e) ? new XV(t, { enableHardwareAcceleration: !1 }) : new qV(t, { enableHardwareAcceleration: !0 }), ZV = {
  layout: {
    ProjectionNode: hP,
    MeasureLayout: sP
  }
}, JV = {
  ...kN,
  ...Gj,
  ...MV,
  ...ZV
}, ir = /* @__PURE__ */ tj((e, t) => $j(e, t, JV, QV));
function bP() {
  const e = g.useRef(!1);
  return Kv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function eB() {
  const e = bP(), [t, n] = g.useState(0), r = g.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [g.useCallback(() => Ee.postRender(r), [r]), t];
}
class tB extends g.Component {
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
function nB({ children: e, isPresent: t }) {
  const n = g.useId(), r = g.useRef(null), o = g.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return g.useInsertionEffect(() => {
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
  }, [t]), g.createElement(tB, { isPresent: t, childRef: r, sizeRef: o }, g.cloneElement(e, { ref: r }));
}
const kp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = hk(rB), l = g.useId(), u = g.useMemo(
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
  return g.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [n]), g.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = g.createElement(nB, { isPresent: n }, e)), g.createElement(yl.Provider, { value: u }, e);
};
function rB() {
  return /* @__PURE__ */ new Map();
}
function oB(e) {
  return g.useEffect(() => () => e(), []);
}
const Eo = (e) => e.key || "";
function iB(e, t) {
  e.forEach((n) => {
    const r = Eo(n);
    t.set(r, n);
  });
}
function aB(e) {
  const t = [];
  return g.Children.forEach(e, (n) => {
    g.isValidElement(n) && t.push(n);
  }), t;
}
const ri = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = g.useContext(Qv).forceRender || eB()[0], l = bP(), u = aB(e);
  let c = u;
  const d = g.useRef(/* @__PURE__ */ new Map()).current, f = g.useRef(c), p = g.useRef(/* @__PURE__ */ new Map()).current, y = g.useRef(!0);
  if (Kv(() => {
    y.current = !1, iB(u, p), f.current = c;
  }), oB(() => {
    y.current = !0, p.clear(), d.clear();
  }), y.current)
    return g.createElement(g.Fragment, null, c.map((m) => g.createElement(kp, { key: Eo(m), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, m)));
  c = [...c];
  const h = f.current.map(Eo), S = u.map(Eo), v = h.length;
  for (let m = 0; m < v; m++) {
    const b = h[m];
    S.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((m, b) => {
    if (S.indexOf(b) !== -1)
      return;
    const w = p.get(b);
    if (!w)
      return;
    const k = h.indexOf(b);
    let P = m;
    if (!P) {
      const _ = () => {
        d.delete(b);
        const T = Array.from(p.keys()).filter((M) => !S.includes(M));
        if (T.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const I = Eo(M);
          return (
            // filter out the node exiting
            I === b || // filter out the leftover children
            T.includes(I)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), r && r();
        }
      };
      P = g.createElement(kp, { key: Eo(w), isPresent: !1, onExitComplete: _, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(b, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((m) => {
    const b = m.key;
    return d.has(b) ? m : g.createElement(kp, { key: Eo(m), isPresent: !0, presenceAffectsLayout: i, mode: a }, m);
  }), g.createElement(g.Fragment, null, d.size ? c : c.map((m) => g.cloneElement(m)));
};
var sB = {
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
}, SP = g.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = sB,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = g.useState(s), p = GN();
  fa(() => {
    p || r == null || r();
  }, [p]), fa(() => {
    f(s);
  }, [s]);
  const y = () => f(null), h = () => f(s), S = () => {
    p && o();
  };
  g.useEffect(() => {
    p && i && o();
  }, [p, i, o]), U3(S, d);
  const v = g.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), m = g.useMemo(() => W3(a), [a]);
  return /* @__PURE__ */ x.jsx(
    ir.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: h,
      custom: { position: a },
      style: m,
      children: /* @__PURE__ */ x.jsx(
        X.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: v,
          children: Xn(n, { id: t, onClose: S })
        }
      )
    }
  );
});
SP.displayName = "ToastComponent";
var R1 = {
  path: /* @__PURE__ */ x.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ x.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ x.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ x.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Pn = oe((e, t) => {
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
  }, y = r ?? R1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ x.jsx(X.svg, { as: n, ...p, ...u });
  const h = a ?? R1.path;
  return /* @__PURE__ */ x.jsx(X.svg, { verticalAlign: "middle", viewBox: y, ...p, ...u, children: h });
});
Pn.displayName = "Icon";
function lB(e) {
  return /* @__PURE__ */ x.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ x.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function uB(e) {
  return /* @__PURE__ */ x.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ x.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function $1(e) {
  return /* @__PURE__ */ x.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ x.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var cB = mC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), qd = oe((e, t) => {
  const n = ei("Spinner", e), {
    label: r = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = kn(e), u = ie("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${cB} ${i} linear infinite`,
    ...n
  };
  return /* @__PURE__ */ x.jsx(
    X.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && /* @__PURE__ */ x.jsx(X.span, { srOnly: !0, children: r })
    }
  );
});
qd.displayName = "Spinner";
var [dB, mg] = Je({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [fB, vg] = Je({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), xP = {
  info: { icon: uB, colorScheme: "blue" },
  warning: { icon: $1, colorScheme: "orange" },
  success: { icon: lB, colorScheme: "green" },
  error: { icon: $1, colorScheme: "red" },
  loading: { icon: qd, colorScheme: "blue" }
};
function pB(e) {
  return xP[e].colorScheme;
}
function hB(e) {
  return xP[e].icon;
}
var wP = oe(
  function(t, n) {
    const r = vg(), { status: o } = mg(), i = {
      display: "inline",
      ...r.description
    };
    return /* @__PURE__ */ x.jsx(
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
wP.displayName = "AlertDescription";
function CP(e) {
  const { status: t } = mg(), n = hB(t), r = vg(), o = t === "loading" ? r.spinner : r.icon;
  return /* @__PURE__ */ x.jsx(
    X.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ie("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ x.jsx(n, { h: "100%", w: "100%" })
    }
  );
}
CP.displayName = "AlertIcon";
var kP = oe(
  function(t, n) {
    const r = vg(), { status: o } = mg();
    return /* @__PURE__ */ x.jsx(
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
kP.displayName = "AlertTitle";
var PP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = kn(t), s = (r = t.colorScheme) != null ? r : pB(o), l = kt("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ x.jsx(dB, { value: { status: o }, children: /* @__PURE__ */ x.jsx(fB, { value: l, children: /* @__PURE__ */ x.jsx(
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
PP.displayName = "Alert";
function mB(e) {
  return /* @__PURE__ */ x.jsx(Pn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ x.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Xd = oe(
  function(t, n) {
    const r = ei("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = kn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ x.jsx(
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
        children: o || /* @__PURE__ */ x.jsx(mB, { width: "1em", height: "1em" })
      }
    );
  }
);
Xd.displayName = "CloseButton";
var vB = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, _s = gB(vB);
function gB(e) {
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
      const a = yB(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = Tb(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: SB(i)
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
        const a = XC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Tb(_s.getState(), o).position
  };
}
var A1 = 0;
function yB(e, t = {}) {
  var n, r;
  A1 += 1;
  const o = (n = t.id) != null ? n : A1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => _s.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var bB = (e) => {
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
  return /* @__PURE__ */ x.jsxs(
    PP,
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
        /* @__PURE__ */ x.jsx(CP, { children: u }),
        /* @__PURE__ */ x.jsxs(X.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ x.jsx(kP, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ x.jsx(wP, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ x.jsx(
          Xd,
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
function SB(e = {}) {
  const { render: t, toastComponent: n = bB } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ x.jsx(n, { ...o, ...e });
}
var [xB, RY] = Je({
  name: "ToastOptionsContext",
  strict: !1
}), wB = (e) => {
  const t = g.useSyncExternalStore(
    _s.subscribe,
    _s.getState,
    _s.getState
  ), {
    motionVariants: n,
    component: r = SP,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ x.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: H3(s),
        children: /* @__PURE__ */ x.jsx(ri, { initial: !1, children: l.map((u) => /* @__PURE__ */ x.jsx(
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
  return /* @__PURE__ */ x.jsx(ml, { ...o, children: a });
}, CB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ x.jsxs(V3, { theme: r, ...i, children: [
    /* @__PURE__ */ x.jsx(xB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ x.jsx(wB, { ...o })
  ] });
}, kB = CB(BC), PB = Object.defineProperty, _B = (e, t, n) => t in e ? PB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (_B(e, typeof t != "symbol" ? t + "" : t, n), n);
function D1(e) {
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
var TB = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function F1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function L1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var sm = typeof window < "u" ? g.useLayoutEffect : g.useEffect, Hc = (e) => e, EB = class {
  constructor() {
    Be(this, "descendants", /* @__PURE__ */ new Map()), Be(this, "register", (e) => {
      if (e != null)
        return TB(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Be(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = D1(Array.from(this.descendants.keys()));
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
      const n = F1(e, this.count(), t);
      return this.item(n);
    }), Be(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = F1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Be(this, "prev", (e, t = !0) => {
      const n = L1(e, this.count() - 1, t);
      return this.item(n);
    }), Be(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = L1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Be(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = D1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function OB(e, t) {
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
      OB(n, t);
    });
  };
}
function MB(...e) {
  return g.useMemo(() => at(...e), e);
}
function IB() {
  const e = g.useRef(new EB());
  return sm(() => () => e.current.destroy()), e.current;
}
var [RB, _P] = Je({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function $B(e) {
  const t = _P(), [n, r] = g.useState(-1), o = g.useRef(null);
  sm(() => () => {
    o.current && t.unregister(o.current);
  }, []), sm(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Hc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function TP() {
  return [
    Hc(RB),
    () => Hc(_P()),
    () => IB(),
    (o) => $B(o)
  ];
}
var [AB, Qd] = Je({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [DB, gg] = Je({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  FB,
  $Y,
  LB,
  jB
] = TP(), EP = oe(
  function(t, n) {
    const { getButtonProps: r } = gg(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...Qd().button
    };
    return /* @__PURE__ */ x.jsx(
      X.button,
      {
        ...o,
        className: ie("chakra-accordion__button", t.className),
        __css: a
      }
    );
  }
);
EP.displayName = "AccordionButton";
function OP(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = ro(r), a = ro(o), [s, l] = g.useState(n), u = t !== void 0, c = u ? t : s, d = ro(
    (f) => {
      const y = typeof f == "function" ? f(c) : f;
      a(c, y) && (u || l(y), i(y));
    },
    [u, i, c, a]
  );
  return [c, d];
}
function zB(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: i,
    ...a
  } = e;
  BB(e), WB(e);
  const s = LB(), [l, u] = g.useState(-1);
  g.useEffect(() => () => {
    u(-1);
  }, []);
  const [c, d] = OP({
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
      let y = !1;
      return p !== null && (y = Array.isArray(c) ? c.includes(p) : c === p), { isOpen: y, onChange: (S) => {
        if (p !== null)
          if (o && Array.isArray(c)) {
            const v = S ? c.concat(p) : c.filter((m) => m !== p);
            d(v);
          } else
            S ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [NB, yg] = Je({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function VB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = yg(), s = g.useRef(null), l = g.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  HB(e);
  const { register: f, index: p, descendants: y } = jB({
    disabled: t && !n
  }), { isOpen: h, onChange: S } = i(
    p === -1 ? null : p
  );
  UB({ isOpen: h, isDisabled: t });
  const v = () => {
    S == null || S(!0);
  }, m = () => {
    S == null || S(!1);
  }, b = g.useCallback(() => {
    S == null || S(!h), a(p);
  }, [p, a, h, S]), w = g.useCallback(
    (T) => {
      const I = {
        ArrowDown: () => {
          const D = y.nextEnabled(p);
          D == null || D.node.focus();
        },
        ArrowUp: () => {
          const D = y.prevEnabled(p);
          D == null || D.node.focus();
        },
        Home: () => {
          const D = y.firstEnabled();
          D == null || D.node.focus();
        },
        End: () => {
          const D = y.lastEnabled();
          D == null || D.node.focus();
        }
      }[T.key];
      I && (T.preventDefault(), I(T));
    },
    [y, p]
  ), k = g.useCallback(() => {
    a(p);
  }, [a, p]), P = g.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        type: "button",
        ref: at(f, s, I),
        id: c,
        disabled: !!t,
        "aria-expanded": !!h,
        "aria-controls": d,
        onClick: Le(M.onClick, b),
        onFocus: Le(M.onFocus, k),
        onKeyDown: Le(M.onKeyDown, w)
      };
    },
    [
      c,
      t,
      h,
      b,
      k,
      w,
      d,
      f
    ]
  ), _ = g.useCallback(
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
    onOpen: v,
    onClose: m,
    getButtonProps: P,
    getPanelProps: _,
    htmlProps: o
  };
}
function BB(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  vl({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function WB(e) {
  vl({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function HB(e) {
  vl({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function UB(e) {
  vl({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function MP(e) {
  const { isOpen: t, isDisabled: n } = gg(), { reduceMotion: r } = yg(), o = ie("chakra-accordion__icon", e.className), i = Qd(), a = {
    opacity: n ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: r ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...i.icon
  };
  return /* @__PURE__ */ x.jsx(
    Pn,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: o,
      __css: a,
      ...e,
      children: /* @__PURE__ */ x.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
MP.displayName = "AccordionIcon";
var IP = oe(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = VB(t), l = {
      ...Qd().container,
      overflowAnchor: "none"
    }, u = g.useMemo(() => a, [a]);
    return /* @__PURE__ */ x.jsx(DB, { value: u, children: /* @__PURE__ */ x.jsx(
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
IP.displayName = "AccordionItem";
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
function lm(e) {
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
}, Fn = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, GB = (e) => e != null && parseInt(e.toString(), 10) > 0, j1 = {
  exit: {
    height: { duration: 0.2, ease: Lo.ease },
    opacity: { duration: 0.3, ease: Lo.ease }
  },
  enter: {
    height: { duration: 0.3, ease: Lo.ease },
    opacity: { duration: 0.4, ease: Lo.ease }
  }
}, KB = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: GB(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Fn.exit(j1.exit, o)
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
      transition: (i = n == null ? void 0 : n.enter) != null ? i : Fn.enter(j1.enter, o)
    };
  }
}, RP = g.forwardRef(
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
    } = e, [f, p] = g.useState(!1);
    g.useEffect(() => {
      const m = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(m);
    }, []), vl({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const y = parseFloat(i.toString()) > 0, h = {
      startingHeight: i,
      endingHeight: a,
      animateOpacity: o,
      transition: f ? u : { enter: { duration: 0 } },
      transitionEnd: {
        enter: c == null ? void 0 : c.enter,
        exit: r ? c == null ? void 0 : c.exit : {
          ...c == null ? void 0 : c.exit,
          display: y ? "block" : "none"
        }
      }
    }, S = r ? n : !0, v = n || r ? "enter" : "exit";
    return /* @__PURE__ */ x.jsx(ri, { initial: !1, custom: h, children: S && /* @__PURE__ */ x.jsx(
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
        variants: KB,
        initial: r ? "exit" : !1,
        animate: v,
        exit: "exit"
      }
    ) });
  }
);
RP.displayName = "Collapse";
var YB = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Fn.enter(Wo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Fn.exit(Wo.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, $P = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: YB
}, qB = g.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ x.jsx(ri, { custom: f, children: d && /* @__PURE__ */ x.jsx(
    ir.div,
    {
      ref: n,
      className: ie("chakra-fade", i),
      custom: f,
      ...$P,
      animate: c,
      ...u
    }
  ) });
});
qB.displayName = "Fade";
var XB = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Fn.exit(Wo.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : Fn.enter(Wo.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, AP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: XB
}, QB = g.forwardRef(
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
    } = t, f = r ? o && r : !0, p = o || r ? "enter" : "exit", y = { initialScale: a, reverse: i, transition: l, transitionEnd: u, delay: c };
    return /* @__PURE__ */ x.jsx(ri, { custom: y, children: f && /* @__PURE__ */ x.jsx(
      ir.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", s),
        ...AP,
        animate: p,
        custom: y,
        ...d
      }
    ) });
  }
);
QB.displayName = "ScaleFade";
var ZB = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Fn.exit(Wo.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Fn.enter(Wo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Fn.exit(Wo.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, as = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: ZB
}, JB = g.forwardRef(
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
    } = t, p = r ? o && r : !0, y = o || r ? "enter" : "exit", h = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ x.jsx(ri, { custom: h, children: p && /* @__PURE__ */ x.jsx(
      ir.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", a),
        custom: h,
        ...as,
        animate: y,
        ...f
      }
    ) });
  }
);
JB.displayName = "SlideFade";
var z1 = {
  exit: {
    duration: 0.15,
    ease: Lo.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, e6 = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: i } = lm({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Fn.exit(z1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = lm({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Fn.enter(z1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, DP = g.forwardRef(function(t, n) {
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
  } = t, p = lm({ direction: r }), y = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), h = i ? a && i : !0, S = a || i ? "enter" : "exit", v = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ x.jsx(ri, { custom: v, children: h && /* @__PURE__ */ x.jsx(
    ir.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: ie("chakra-slide", s),
      animate: S,
      exit: "exit",
      custom: v,
      variants: e6,
      style: y,
      ...d
    }
  ) });
});
DP.displayName = "Slide";
var FP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = yg(), { getPanelProps: s, isOpen: l } = gg(), u = s(i, n), c = ie("chakra-accordion__panel", r), d = Qd();
    a || delete u.hidden;
    const f = /* @__PURE__ */ x.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ x.jsx(RP, { in: l, ...o, children: f });
  }
);
FP.displayName = "AccordionPanel";
var LP = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = kt("Accordion", r), a = kn(r), { htmlProps: s, descendants: l, ...u } = zB(a), c = g.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ x.jsx(FB, { value: l, children: /* @__PURE__ */ x.jsx(NB, { value: c, children: /* @__PURE__ */ x.jsx(AB, { value: i, children: /* @__PURE__ */ x.jsx(
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
LP.displayName = "Accordion";
function jP(e) {
  return g.Children.toArray(e).filter(
    (t) => g.isValidElement(t)
  );
}
var [AY, t6] = Je({
  strict: !1,
  name: "ButtonGroupContext"
});
function n6(e) {
  const [t, n] = g.useState(!e);
  return { ref: g.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function um(e) {
  const { children: t, className: n, ...r } = e, o = g.isValidElement(t) ? g.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = ie("chakra-button__icon", n);
  return /* @__PURE__ */ x.jsx(
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
um.displayName = "ButtonIcon";
function cm(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ x.jsx(qd, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ie("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = g.useMemo(
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
  return /* @__PURE__ */ x.jsx(X.div, { className: l, ...s, __css: c, children: o });
}
cm.displayName = "ButtonSpinner";
var gn = oe((e, t) => {
  const n = t6(), r = ei("Button", { ...n, ...e }), {
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
    spinnerPlacement: y = "start",
    className: h,
    as: S,
    ...v
  } = kn(e), m = g.useMemo(() => {
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
  }, [r, n]), { ref: b, type: w } = n6(S), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ x.jsxs(
    X.button,
    {
      ref: MB(t, b),
      as: S,
      type: f ?? w,
      "data-active": dn(a),
      "data-loading": dn(i),
      __css: m,
      className: ie("chakra-button", h),
      ...v,
      disabled: o || i,
      children: [
        i && y === "start" && /* @__PURE__ */ x.jsx(
          cm,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ x.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ x.jsx(N1, { ...k }) }) : /* @__PURE__ */ x.jsx(N1, { ...k }),
        i && y === "end" && /* @__PURE__ */ x.jsx(
          cm,
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
gn.displayName = "Button";
function N1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    t && /* @__PURE__ */ x.jsx(um, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ x.jsx(um, { marginStart: o, children: n })
  ] });
}
var rl = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = g.isValidElement(s) ? g.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ x.jsx(
      gn,
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
rl.displayName = "IconButton";
var [r6, o6] = Je({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [i6, zP] = Je({
  strict: !1,
  name: "FormControlContext"
});
function a6(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = g.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = g.useState(!1), [y, h] = g.useState(!1), [S, v] = g.useState(!1), m = g.useCallback(
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
  ), b = g.useCallback(
    (_ = {}, T = null) => ({
      ..._,
      ref: T,
      "data-focus": dn(S),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i),
      id: _.id !== void 0 ? _.id : u,
      htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l
    }),
    [l, o, S, r, i, u]
  ), w = g.useCallback(
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
  ), k = g.useCallback(
    (_ = {}, T = null) => ({
      ..._,
      ...a,
      ref: T,
      role: "group",
      "data-focus": dn(S),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i)
    }),
    [a, o, S, r, i]
  ), P = g.useCallback(
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
    isFocused: !!S,
    onFocus: () => v(!0),
    onBlur: () => v(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: y,
    setHasHelpText: h,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: m,
    getErrorMessageProps: w,
    getRootProps: k,
    getLabelProps: b,
    getRequiredIndicatorProps: P
  };
}
var s6 = oe(
  function(t, n) {
    const r = kt("Form", t), o = kn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = a6(o), l = ie("chakra-form-control", t.className);
    return /* @__PURE__ */ x.jsx(i6, { value: s, children: /* @__PURE__ */ x.jsx(r6, { value: r, children: /* @__PURE__ */ x.jsx(
      X.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
s6.displayName = "FormControl";
var l6 = oe(
  function(t, n) {
    const r = zP(), o = o6(), i = ie("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ x.jsx(
      X.div,
      {
        ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: i
      }
    );
  }
);
l6.displayName = "FormHelperText";
function NP(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = u6(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Kf(n),
    "aria-required": Kf(o),
    "aria-readonly": Kf(r)
  };
}
function u6(e) {
  var t, n, r;
  const o = zP(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: y,
    ...h
  } = e, S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && S.push(o.feedbackId), o != null && o.hasHelpText && S.push(o.helpTextId), {
    ...h,
    "aria-describedby": S.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: Le(o == null ? void 0 : o.onFocus, p),
    onBlur: Le(o == null ? void 0 : o.onBlur, y)
  };
}
function bg(e, t, n, r) {
  const o = ro(n);
  return g.useEffect(() => {
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
function c6(e) {
  return "current" in e;
}
var VP = () => typeof window < "u";
function d6() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var f6 = (e) => VP() && e.test(navigator.vendor), p6 = (e) => VP() && e.test(d6()), h6 = () => p6(/mac|iphone|ipad|ipod/i), m6 = () => h6() && f6(/apple/i);
function v6(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  bg(o, "pointerdown", (i) => {
    if (!m6() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = c6(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function BP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var WP = { exports: {} }, g6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", y6 = g6, b6 = y6;
function HP() {
}
function UP() {
}
UP.resetWarningCache = HP;
var S6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== b6) {
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
    checkPropTypes: UP,
    resetWarningCache: HP
  };
  return n.PropTypes = n, n;
};
WP.exports = S6();
var x6 = WP.exports;
const Co = /* @__PURE__ */ ll(x6);
var dm = "data-focus-lock", GP = "data-focus-lock-disabled", w6 = "data-no-focus-lock", C6 = "data-autofocus-inside", k6 = "data-no-autofocus";
function P6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function _6(e, t) {
  var n = g.useState(function() {
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
function KP(e, t) {
  return _6(t || null, function(n) {
    return e.forEach(function(r) {
      return P6(r, n);
    });
  });
}
var Pp = {
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
function YP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function T6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function qP(e) {
  return e;
}
function XP(e, t) {
  t === void 0 && (t = qP);
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
function Sg(e, t) {
  return t === void 0 && (t = qP), XP(e, t);
}
function QP(e) {
  e === void 0 && (e = {});
  var t = XP(null);
  return t.options = qn({ async: !0, ssr: !1 }, e), t;
}
var ZP = function(e) {
  var t = e.sideCar, n = YP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return g.createElement(r, qn({}, n));
};
ZP.isSideCarExport = !0;
function E6(e, t) {
  return e.useMedium(t), ZP;
}
var JP = Sg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), e2 = Sg(), O6 = Sg(), M6 = QP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), I6 = [], xg = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var r, o = g.useState(), i = o[0], a = o[1], s = g.useRef(), l = g.useRef(!1), u = g.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, h = t.autoFocus;
  t.allowTextSelection;
  var S = t.group, v = t.className, m = t.whiteList, b = t.hasPositiveIndices, w = t.shards, k = w === void 0 ? I6 : w, P = t.as, _ = P === void 0 ? "div" : P, T = t.lockProps, M = T === void 0 ? {} : T, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = g.useState({}), K = W[0], $ = g.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && H && H(s.current), l.current = !0;
  }, [H]), A = g.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  g.useEffect(function() {
    d || (u.current = null);
  }, []);
  var j = g.useCallback(function(se) {
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
  }, [D]), U = g.useCallback(function(se) {
    l.current && JP.useMedium(se);
  }, []), V = e2.useMedium, Y = g.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), z = q((r = {}, r[GP] = d && "disabled", r[dm] = S, r), M), te = f !== !0, le = te && f !== "tail", ae = KP([n, Y]);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ g.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: Pp
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ g.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: Pp
    }) : null
  ], !d && /* @__PURE__ */ g.createElement(I, {
    id: K,
    sideCar: M6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: h,
    whiteList: m,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: j,
    focusOptions: G
  }), /* @__PURE__ */ g.createElement(_, q({
    ref: ae
  }, z, {
    className: v,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ g.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: Pp
  }));
});
xg.propTypes = {};
xg.defaultProps = {
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
const t2 = xg;
function Uc(e, t) {
  return Uc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Uc(e, t);
}
function R6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Uc(e, t);
}
function Xo(e) {
  "@babel/helpers - typeof";
  return Xo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xo(e);
}
function $6(e, t) {
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
function n2(e) {
  var t = $6(e, "string");
  return Xo(t) === "symbol" ? t : String(t);
}
function ji(e, t, n) {
  return t = n2(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function A6(e, t) {
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
      R6(c, u);
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
    }(g.PureComponent);
    return ji(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var ar = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Gc = function(e) {
  return Array.isArray(e) ? e : [e];
}, r2 = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, D6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, o2 = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, i2 = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, F6 = function(e, t) {
  return !e || i2(e) || !D6(e) && t(o2(e));
}, a2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = F6(t, a2.bind(void 0, e));
  return e.set(t, r), r;
}, L6 = function(e, t) {
  return e && !i2(e) ? N6(e) ? t(o2(e)) : !1 : !0;
}, s2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = L6(t, s2.bind(void 0, e));
  return e.set(t, r), r;
}, l2 = function(e) {
  return e.dataset;
}, j6 = function(e) {
  return e.tagName === "BUTTON";
}, u2 = function(e) {
  return e.tagName === "INPUT";
}, c2 = function(e) {
  return u2(e) && e.type === "radio";
}, z6 = function(e) {
  return !((u2(e) || j6(e)) && (e.type === "hidden" || e.disabled));
}, N6 = function(e) {
  var t = e.getAttribute(k6);
  return ![!0, "true", ""].includes(t);
}, wg = function(e) {
  var t;
  return !!(e && (!((t = l2(e)) === null || t === void 0) && t.focusGuard));
}, Kc = function(e) {
  return !wg(e);
}, V6 = function(e) {
  return !!e;
}, B6 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, d2 = function(e, t, n) {
  return ar(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(B6);
}, W6 = [
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
], Cg = W6.join(","), H6 = "".concat(Cg, ", [data-focus-guard]"), f2 = function(e, t) {
  return ar((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? H6 : Cg) ? [r] : [], f2(r));
  }, []);
}, U6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Zd([e.contentDocument.body], t) : [e];
}, Zd = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = f2(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return U6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? ar(r.parentNode.querySelectorAll(Cg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, G6 = function(e) {
  var t = e.querySelectorAll("[".concat(C6, "]"));
  return ar(t).map(function(n) {
    return Zd([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, kg = function(e, t) {
  return ar(e).filter(function(n) {
    return a2(t, n);
  }).filter(function(n) {
    return z6(n);
  });
}, V1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ar(e).filter(function(n) {
    return s2(t, n);
  });
}, fm = function(e, t, n) {
  return d2(kg(Zd(e, n), t), !0, n);
}, B1 = function(e, t) {
  return d2(kg(Zd(e), t), !1);
}, K6 = function(e, t) {
  return kg(G6(e), t);
}, Qi = function(e, t) {
  return e.shadowRoot ? Qi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ar(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Qi(o, t) : !1;
    }
    return Qi(n, t);
  });
}, Y6 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, p2 = function(e) {
  return e.parentNode ? p2(e.parentNode) : e;
}, Pg = function(e) {
  var t = Gc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(dm);
    return n.push.apply(n, o ? Y6(ar(p2(r).querySelectorAll("[".concat(dm, '="').concat(o, '"]:not([').concat(GP, '="disabled"])')))) : [r]), n;
  }, []);
}, q6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, ol = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? ol(t.shadowRoot) : t instanceof HTMLIFrameElement && q6(function() {
      return t.contentWindow.document;
    }) ? ol(t.contentWindow.document) : t;
  }
}, X6 = function(e, t) {
  return e === t;
}, Q6 = function(e, t) {
  return !!ar(e.querySelectorAll("iframe")).some(function(n) {
    return X6(n, t);
  });
}, h2 = function(e, t) {
  return t === void 0 && (t = ol(r2(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Pg(e).some(function(n) {
    return Qi(n, t) || Q6(n, t);
  });
}, Z6 = function(e) {
  e === void 0 && (e = document);
  var t = ol(e);
  return t ? ar(e.querySelectorAll("[".concat(w6, "]"))).some(function(n) {
    return Qi(n, t);
  }) : !1;
}, J6 = function(e, t) {
  return t.filter(c2).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, _g = function(e, t) {
  return c2(e) && e.name ? J6(e, t) : e;
}, e9 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(_g(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, W1 = function(e) {
  return e[0] && e.length > 1 ? _g(e[0], e) : e[0];
}, H1 = function(e, t) {
  return e.length > 1 ? e.indexOf(_g(e[t], e)) : t;
}, m2 = "NEW_FOCUS", t9 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = wg(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), y = e9(t), h = n !== void 0 ? y.indexOf(n) : -1, S = h - (r ? y.indexOf(r) : l), v = H1(e, 0), m = H1(e, o - 1);
    if (l === -1 || c === -1)
      return m2;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return m;
    if (l >= p && s && Math.abs(d) > 1)
      return v;
    if (d && Math.abs(S) > 1)
      return c;
    if (l <= f)
      return m;
    if (l > p)
      return v;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, n9 = function(e) {
  return function(t) {
    var n, r = (n = l2(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, r9 = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = V1(r.filter(n9(n)));
  return o && o.length ? W1(o) : W1(V1(t));
}, pm = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && pm(e.parentNode.host || e.parentNode, t), t;
}, _p = function(e, t) {
  for (var n = pm(e), r = pm(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, v2 = function(e, t, n) {
  var r = Gc(e), o = Gc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = _p(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = _p(i, l);
      u && (!a || Qi(u, a) ? a = u : a = _p(u, a));
    });
  }), a;
}, o9 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(K6(r, t));
  }, []);
}, i9 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(V6);
}, a9 = function(e, t) {
  var n = ol(Gc(e).length > 0 ? document : r2(e).ownerDocument), r = Pg(e).filter(Kc), o = v2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = B1(r, i), s = fm(r, i).filter(function(p) {
    var y = p.node;
    return Kc(y);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = B1([o], i).map(function(p) {
      var y = p.node;
      return y;
    }), u = i9(l, s), c = u.map(function(p) {
      var y = p.node;
      return y;
    }), d = t9(c, l, n, t);
    if (d === m2) {
      var f = r9(a, c, o9(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, s9 = function(e) {
  var t = Pg(e).filter(Kc), n = v2(e, e, t), r = /* @__PURE__ */ new Map(), o = fm([n], r, !0), i = fm(t, r).filter(function(a) {
    var s = a.node;
    return Kc(s);
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
      guard: wg(s)
    };
  });
}, l9 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Tp = 0, Ep = !1, g2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = a9(e, t);
  if (!Ep && r) {
    if (Tp > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Ep = !0, setTimeout(function() {
        Ep = !1;
      }, 1);
      return;
    }
    Tp++, l9(r.node, n.focusOptions), Tp--;
  }
};
function Tg(e) {
  setTimeout(e, 1);
}
var u9 = function() {
  return document && document.activeElement === document.body;
}, c9 = function() {
  return u9() || Z6();
}, Zi = null, zi = null, Ji = null, il = !1, d9 = function() {
  return !0;
}, f9 = function(t) {
  return (Zi.whiteList || d9)(t);
}, p9 = function(t, n) {
  Ji = {
    observerNode: t,
    portaledElement: n
  };
}, h9 = function(t) {
  return Ji && Ji.portaledElement === t;
};
function U1(e, t, n, r) {
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
var m9 = function(t) {
  return t && "current" in t ? t.current : t;
}, v9 = function(t) {
  return t ? !!il : il === "meanwhile";
}, g9 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, y9 = function(t, n) {
  return n.some(function(r) {
    return g9(t, r, r);
  });
}, Yc = function() {
  var t = !1;
  if (Zi) {
    var n = Zi, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Ji && Ji.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(m9).filter(Boolean));
      if ((!c || f9(c)) && (o || v9(s) || !c9() || !zi && i) && (u && !// active element is "inside" working area
      (h2(d) || // check for shadow-dom contained elements
      c && y9(c, d) || h9(c)) && (document && !zi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = g2(d, zi, {
        focusOptions: l
      }), Ji = {})), il = !1, zi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = s9(d), y = p.map(function(h) {
          var S = h.node;
          return S;
        }).indexOf(f);
        y > -1 && (p.filter(function(h) {
          var S = h.guard, v = h.node;
          return S && v.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var S = h.node;
          return S.removeAttribute("tabIndex");
        }), U1(y, p.length, 1, p), U1(y, -1, -1, p));
      }
    }
  }
  return t;
}, y2 = function(t) {
  Yc() && t && (t.stopPropagation(), t.preventDefault());
}, Eg = function() {
  return Tg(Yc);
}, b9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || p9(r, n);
}, S9 = function() {
  return null;
}, b2 = function() {
  il = "just", Tg(function() {
    il = "meanwhile";
  });
}, x9 = function() {
  document.addEventListener("focusin", y2), document.addEventListener("focusout", Eg), window.addEventListener("blur", b2);
}, w9 = function() {
  document.removeEventListener("focusin", y2), document.removeEventListener("focusout", Eg), window.removeEventListener("blur", b2);
};
function C9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function k9(e) {
  var t = e.slice(-1)[0];
  t && !Zi && x9();
  var n = Zi, r = n && t && t.id === n.id;
  Zi = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (zi = null, (!r || n.observed !== t.observed) && t.onActivation(), Yc(), Tg(Yc)) : (w9(), zi = null);
}
JP.assignSyncMedium(b9);
e2.assignMedium(Eg);
O6.assignMedium(function(e) {
  return e({
    moveFocusInside: g2,
    focusInside: h2
  });
});
const P9 = A6(C9, k9)(S9);
var S2 = /* @__PURE__ */ g.forwardRef(function(t, n) {
  return /* @__PURE__ */ g.createElement(t2, q({
    sideCar: P9,
    ref: n
  }, t));
}), x2 = t2.propTypes || {};
x2.sideCar;
BP(x2, ["sideCar"]);
S2.propTypes = {};
const G1 = S2;
function w2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function C2(e) {
  var t;
  if (!w2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function _9(e) {
  var t, n;
  return (n = (t = k2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function k2(e) {
  return w2(e) ? e.ownerDocument : document;
}
function T9(e) {
  return k2(e).activeElement;
}
var P2 = (e) => e.hasAttribute("tabindex"), E9 = (e) => P2(e) && e.tabIndex === -1;
function O9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function _2(e) {
  return e.parentElement && _2(e.parentElement) ? !0 : e.hidden;
}
function M9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function T2(e) {
  if (!C2(e) || _2(e) || O9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : M9(e) ? !0 : P2(e);
}
function I9(e) {
  return e ? C2(e) && T2(e) && !E9(e) : !1;
}
var R9 = [
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
], $9 = R9.join(), A9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function E2(e) {
  const t = Array.from(
    e.querySelectorAll($9)
  );
  return t.unshift(e), t.filter((n) => T2(n) && A9(n));
}
var K1, D9 = (K1 = G1.default) != null ? K1 : G1, O2 = (e) => {
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
  } = e, c = g.useCallback(() => {
    t != null && t.current ? t.current.focus() : r != null && r.current && E2(r.current).length === 0 && requestAnimationFrame(() => {
      var y;
      (y = r.current) == null || y.focus();
    });
  }, [t, r]), d = g.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ x.jsx(
    D9,
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
O2.displayName = "FocusLock";
var F9 = u3 ? g.useLayoutEffect : g.useEffect;
function Y1(e, t = []) {
  const n = g.useRef(e);
  return F9(() => {
    n.current = e;
  }), g.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function L9(e, t) {
  const n = g.useId();
  return g.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function j9(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function z9(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = Y1(n), a = Y1(t), [s, l] = g.useState(e.defaultIsOpen || !1), [u, c] = j9(r, s), d = L9(o, "disclosure"), f = g.useCallback(() => {
    u || l(!1), a == null || a();
  }, [u, a]), p = g.useCallback(() => {
    u || l(!0), i == null || i();
  }, [u, i]), y = g.useCallback(() => {
    (c ? f : p)();
  }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: y,
    isControlled: u,
    getButtonProps: (h = {}) => ({
      ...h,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: h3(h.onClick, y)
    }),
    getDisclosureProps: (h = {}) => ({
      ...h,
      hidden: !c,
      id: d
    })
  };
}
var Jd = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = kt("Input", o), a = kn(o), s = NP(a), l = ie("chakra-input", t.className);
  return /* @__PURE__ */ x.jsx(
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
Jd.displayName = "Input";
Jd.id = "Input";
var M2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function N9(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : jt(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function V9(e, t = M2) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var nr = oe(function(t, n) {
  const r = ei("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = kn(t), u = P3({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ x.jsx(
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
var I2 = (e) => /* @__PURE__ */ x.jsx(
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
I2.displayName = "StackItem";
function B9(e) {
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
    "&": N9(
      n,
      (o) => r[o]
    )
  };
}
var R2 = oe((e, t) => {
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
  } = e, p = n ? "row" : r ?? "column", y = g.useMemo(
    () => B9({ spacing: a, direction: p }),
    [a, p]
  ), h = !!u, S = !d && !h, v = g.useMemo(() => {
    const b = jP(l);
    return S ? b : b.map((w, k) => {
      const P = typeof w.key < "u" ? w.key : k, _ = k + 1 === b.length, M = d ? /* @__PURE__ */ x.jsx(I2, { children: w }, P) : w;
      if (!h)
        return M;
      const I = g.cloneElement(
        u,
        {
          __css: y
        }
      ), D = _ ? null : I;
      return /* @__PURE__ */ x.jsxs(g.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    y,
    h,
    S,
    d,
    l
  ]), m = ie("chakra-stack", c);
  return /* @__PURE__ */ x.jsx(
    X.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: h ? void 0 : a,
      className: m,
      ...f,
      children: v
    }
  );
});
R2.displayName = "Stack";
var xt = oe((e, t) => /* @__PURE__ */ x.jsx(R2, { align: "center", ...e, direction: "row", ref: t }));
xt.displayName = "HStack";
var Fe = X("div");
Fe.displayName = "Box";
var $2 = oe(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ x.jsx(
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
$2.displayName = "Square";
var W9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ x.jsx($2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
W9.displayName = "Circle";
var A2 = oe(function(t, n) {
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
    ...y
  } = kn(t), h = {
    vertical: {
      borderLeftWidth: r || a || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || i || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ x.jsx(
    X.hr,
    {
      ref: n,
      "aria-orientation": f,
      ...y,
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
A2.displayName = "Divider";
function H9(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = N3(), i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(r) ? r : [r];
  a = a.filter((u) => u != null);
  const [s, l] = g.useState(() => i.map((u, c) => ({
    media: u,
    matches: n ? !!a[c] : o().matchMedia(u).matches
  })));
  return g.useEffect(() => {
    const u = o();
    l(
      i.map((f) => ({
        media: f,
        matches: u.matchMedia(f).matches
      }))
    );
    const c = i.map((f) => u.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((y) => y.media === f.media ? { ...y, matches: f.matches } : y));
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
function U9(e, t, n = M2) {
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
function G9(e) {
  var t, n;
  const r = jt(e) ? e : { fallback: e ?? "base" }, i = mo().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = H9(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function K9(e, t) {
  var n;
  const r = jt(t) ? t : { fallback: t ?? "base" }, o = G9(r), i = mo();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(V9(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return U9(s, o, a);
}
function Y9(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function q9(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e, [r, o] = g.useState([]), i = g.useRef(), a = () => {
    i.current && (clearTimeout(i.current), i.current = null);
  }, s = () => {
    a(), i.current = setTimeout(() => {
      o([]), i.current = null;
    }, t);
  };
  g.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (Y9(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function X9(e, t, n, r) {
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
function Q9() {
  const e = g.useRef(/* @__PURE__ */ new Map()), t = e.current, n = g.useCallback((o, i, a, s) => {
    e.current.set(a, { type: i, el: o, options: s }), o.addEventListener(i, a, s);
  }, []), r = g.useCallback(
    (o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    },
    []
  );
  return g.useEffect(
    () => () => {
      t.forEach((o, i) => {
        r(o.el, o.type, i, o.options);
      });
    },
    [r, t]
  ), { add: n, remove: r };
}
function Op(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function Z9(e = {}) {
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
    ...y
  } = e, [h, S] = g.useState(!0), [v, m] = g.useState(!1), b = Q9(), w = ($) => {
    $ && $.tagName !== "BUTTON" && S(!1);
  }, k = h ? d : d || 0, P = n && !r, _ = g.useCallback(
    ($) => {
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      $.currentTarget.focus(), l == null || l($);
    },
    [n, l]
  ), T = g.useCallback(
    ($) => {
      v && Op($) && ($.preventDefault(), $.stopPropagation(), m(!1), b.remove(document, "keyup", T, !1));
    },
    [v, b]
  ), M = g.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !Op($.nativeEvent) || h)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), m(!0)), A && ($.preventDefault(), $.currentTarget.click()), b.add(document, "keyup", T, !1);
    },
    [
      n,
      h,
      u,
      o,
      i,
      b,
      T
    ]
  ), I = g.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !Op($.nativeEvent) || h)
        return;
      i && $.key === " " && ($.preventDefault(), m(!1), $.currentTarget.click());
    },
    [i, h, n, c]
  ), D = g.useCallback(
    ($) => {
      $.button === 0 && (m(!1), b.remove(document, "mouseup", D, !1));
    },
    [b]
  ), G = g.useCallback(
    ($) => {
      if ($.button !== 0)
        return;
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      h || m(!0), $.currentTarget.focus({ preventScroll: !0 }), b.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, h, a, b, D]
  ), H = g.useCallback(
    ($) => {
      $.button === 0 && (h || m(!1), s == null || s($));
    },
    [s, h]
  ), L = g.useCallback(
    ($) => {
      if (n) {
        $.preventDefault();
        return;
      }
      f == null || f($);
    },
    [n, f]
  ), W = g.useCallback(
    ($) => {
      v && ($.preventDefault(), m(!1)), p == null || p($);
    },
    [v, p]
  ), K = at(t, w);
  return h ? {
    ...y,
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
    ...y,
    ref: K,
    role: "button",
    "data-active": dn(v),
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
function J9(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = T9(t);
  return !n || t.contains(n) ? !1 : !!I9(n);
}
function D2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  fa(() => {
    if (!i || J9(e))
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
var e8 = {
  preventScroll: !0,
  shouldFocus: !1
};
function t8(e, t = e8) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = n8(e) ? e.current : e, s = o && i, l = g.useRef(s), u = g.useRef(i);
  ua(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = g.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (n != null && n.current)
        requestAnimationFrame(() => {
          var d;
          (d = n.current) == null || d.focus({ preventScroll: r });
        });
      else {
        const d = E2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  fa(() => {
    c();
  }, [c]), bg(a, "transitionend", c);
}
function n8(e) {
  return "current" in e;
}
var ci = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), wt = {
  arrowShadowColor: ci("--popper-arrow-shadow-color"),
  arrowSize: ci("--popper-arrow-size", "8px"),
  arrowSizeHalf: ci("--popper-arrow-size-half"),
  arrowBg: ci("--popper-arrow-bg"),
  transformOrigin: ci("--popper-transform-origin"),
  arrowOffset: ci("--popper-arrow-offset")
};
function r8(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var o8 = {
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
}, i8 = (e) => o8[e], q1 = {
  scroll: !0,
  resize: !0
};
function a8(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...q1, ...e }
  } : t = {
    enabled: e,
    options: q1
  }, t;
}
var s8 = {
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
}, l8 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    X1(e);
  },
  effect: ({ state: e }) => () => {
    X1(e);
  }
}, X1 = (e) => {
  e.elements.popper.style.setProperty(
    wt.transformOrigin.var,
    i8(e.placement)
  );
}, u8 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    c8(e);
  }
}, c8 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = d8(e.placement);
  if ((t = e.elements) != null && t.arrow && n) {
    Object.assign(e.elements.arrow.style, {
      [n.property]: n.value,
      width: wt.arrowSize.varRef,
      height: wt.arrowSize.varRef,
      zIndex: -1
    });
    const r = {
      [wt.arrowSizeHalf.var]: `calc(${wt.arrowSize.varRef} / 2 - 1px)`,
      [wt.arrowOffset.var]: `calc(${wt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in r)
      e.elements.arrow.style.setProperty(o, r[o]);
  }
}, d8 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: wt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: wt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: wt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: wt.arrowOffset.varRef };
}, f8 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Q1(e);
  },
  effect: ({ state: e }) => () => {
    Q1(e);
  }
}, Q1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = r8(e.placement);
  n && t.style.setProperty("--popper-arrow-default-shadow", n), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: wt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, p8 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, h8 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function m8(e, t = "ltr") {
  var n, r;
  const o = ((n = p8[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = h8[e]) != null ? r : o;
}
var zt = "top", xn = "bottom", wn = "right", Nt = "left", Og = "auto", Cl = [zt, xn, wn, Nt], ma = "start", al = "end", v8 = "clippingParents", F2 = "viewport", Ka = "popper", g8 = "reference", Z1 = /* @__PURE__ */ Cl.reduce(function(e, t) {
  return e.concat([t + "-" + ma, t + "-" + al]);
}, []), L2 = /* @__PURE__ */ [].concat(Cl, [Og]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ma, t + "-" + al]);
}, []), y8 = "beforeRead", b8 = "read", S8 = "afterRead", x8 = "beforeMain", w8 = "main", C8 = "afterMain", k8 = "beforeWrite", P8 = "write", _8 = "afterWrite", T8 = [y8, b8, S8, x8, w8, C8, k8, P8, _8];
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
function yn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Mg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function E8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !yn(i) || !or(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function O8(e) {
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
      !yn(o) || !or(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const M8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: E8,
  effect: O8,
  requires: ["computeStyles"]
};
function rr(e) {
  return e.split("-")[0];
}
var Ho = Math.max, qc = Math.min, va = Math.round;
function hm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function j2() {
  return !/^((?!chrome|android).)*safari/i.test(hm());
}
function ga(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && yn(e) && (o = e.offsetWidth > 0 && va(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && va(r.height) / e.offsetHeight || 1);
  var a = Qo(e) ? en(e) : window, s = a.visualViewport, l = !j2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
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
function Ig(e) {
  var t = ga(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function z2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Mg(n)) {
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
function I8(e) {
  return ["table", "td", "th"].indexOf(or(e)) >= 0;
}
function go(e) {
  return ((Qo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ef(e) {
  return or(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Mg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    go(e)
  );
}
function J1(e) {
  return !yn(e) || // https://github.com/popperjs/popper-core/issues/837
  Er(e).position === "fixed" ? null : e.offsetParent;
}
function R8(e) {
  var t = /firefox/i.test(hm()), n = /Trident/i.test(hm());
  if (n && yn(e)) {
    var r = Er(e);
    if (r.position === "fixed")
      return null;
  }
  var o = ef(e);
  for (Mg(o) && (o = o.host); yn(o) && ["html", "body"].indexOf(or(o)) < 0; ) {
    var i = Er(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function kl(e) {
  for (var t = en(e), n = J1(e); n && I8(n) && Er(n).position === "static"; )
    n = J1(n);
  return n && (or(n) === "html" || or(n) === "body" && Er(n).position === "static") ? t : n || R8(e) || t;
}
function Rg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ts(e, t, n) {
  return Ho(e, qc(t, n));
}
function $8(e, t, n) {
  var r = Ts(e, t, n);
  return r > n ? n : r;
}
function N2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function V2(e) {
  return Object.assign({}, N2(), e);
}
function B2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var A8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, V2(typeof t != "number" ? t : B2(t, Cl));
};
function D8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = rr(n.placement), l = Rg(s), u = [Nt, wn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = A8(o.padding, n), f = Ig(i), p = l === "y" ? zt : Nt, y = l === "y" ? xn : wn, h = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], S = a[l] - n.rects.reference[l], v = kl(i), m = v ? l === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, b = h / 2 - S / 2, w = d[p], k = m - f[c] - d[y], P = m / 2 - f[c] / 2 + b, _ = Ts(w, P, k), T = l;
    n.modifiersData[r] = (t = {}, t[T] = _, t.centerOffset = _ - P, t);
  }
}
function F8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || z2(t.elements.popper, o) && (t.elements.arrow = o));
}
const L8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: D8,
  effect: F8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ya(e) {
  return e.split("-")[1];
}
var j8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function z8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: va(n * o) / o || 0,
    y: va(r * o) / o || 0
  };
}
function eS(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, y = a.y, h = y === void 0 ? 0 : y, S = typeof c == "function" ? c({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = S.x, h = S.y;
  var v = a.hasOwnProperty("x"), m = a.hasOwnProperty("y"), b = Nt, w = zt, k = window;
  if (u) {
    var P = kl(n), _ = "clientHeight", T = "clientWidth";
    if (P === en(n) && (P = go(n), Er(P).position !== "static" && s === "absolute" && (_ = "scrollHeight", T = "scrollWidth")), P = P, o === zt || (o === Nt || o === wn) && i === al) {
      w = xn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      h -= M - r.height, h *= l ? 1 : -1;
    }
    if (o === Nt || (o === zt || o === xn) && i === al) {
      b = wn;
      var I = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      p -= I - r.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && j8), G = c === !0 ? z8({
    x: p,
    y: h
  }, en(n)) : {
    x: p,
    y: h
  };
  if (p = G.x, h = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[w] = m ? "0" : "", H[b] = v ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[w] = m ? h + "px" : "", t[b] = v ? p + "px" : "", t.transform = "", t));
}
function N8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: rr(t.placement),
    variation: ya(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, eS(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, eS(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const V8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: N8,
  data: {}
};
var mu = {
  passive: !0
};
function B8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, mu);
  }), s && l.addEventListener("resize", n.update, mu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, mu);
    }), s && l.removeEventListener("resize", n.update, mu);
  };
}
const W8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: B8,
  data: {}
};
var H8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return H8[t];
  });
}
var U8 = {
  start: "end",
  end: "start"
};
function tS(e) {
  return e.replace(/start|end/g, function(t) {
    return U8[t];
  });
}
function $g(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ag(e) {
  return ga(go(e)).left + $g(e).scrollLeft;
}
function G8(e, t) {
  var n = en(e), r = go(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = j2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Ag(e),
    y: l
  };
}
function K8(e) {
  var t, n = go(e), r = $g(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ho(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ho(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Ag(e), l = -r.scrollTop;
  return Er(o || n).direction === "rtl" && (s += Ho(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Dg(e) {
  var t = Er(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function W2(e) {
  return ["html", "body", "#document"].indexOf(or(e)) >= 0 ? e.ownerDocument.body : yn(e) && Dg(e) ? e : W2(ef(e));
}
function Es(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = W2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), a = o ? [i].concat(i.visualViewport || [], Dg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Es(ef(a)))
  );
}
function mm(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Y8(e, t) {
  var n = ga(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function nS(e, t, n) {
  return t === F2 ? mm(G8(e, n)) : Qo(t) ? Y8(t, n) : mm(K8(go(e)));
}
function q8(e) {
  var t = Es(ef(e)), n = ["absolute", "fixed"].indexOf(Er(e).position) >= 0, r = n && yn(e) ? kl(e) : e;
  return Qo(r) ? t.filter(function(o) {
    return Qo(o) && z2(o, r) && or(o) !== "body";
  }) : [];
}
function X8(e, t, n, r) {
  var o = t === "clippingParents" ? q8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = nS(e, u, r);
    return l.top = Ho(c.top, l.top), l.right = qc(c.right, l.right), l.bottom = qc(c.bottom, l.bottom), l.left = Ho(c.left, l.left), l;
  }, nS(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function H2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? rr(r) : null, i = r ? ya(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case zt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case xn:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case wn:
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
  var u = o ? Rg(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case ma:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case al:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function sl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? v8 : s, u = n.rootBoundary, c = u === void 0 ? F2 : u, d = n.elementContext, f = d === void 0 ? Ka : d, p = n.altBoundary, y = p === void 0 ? !1 : p, h = n.padding, S = h === void 0 ? 0 : h, v = V2(typeof S != "number" ? S : B2(S, Cl)), m = f === Ka ? g8 : Ka, b = e.rects.popper, w = e.elements[y ? m : f], k = X8(Qo(w) ? w : w.contextElement || go(e.elements.popper), l, c, a), P = ga(e.elements.reference), _ = H2({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), T = mm(Object.assign({}, b, _)), M = f === Ka ? T : P, I = {
    top: k.top - M.top + v.top,
    bottom: M.bottom - k.bottom + v.bottom,
    left: k.left - M.left + v.left,
    right: M.right - k.right + v.right
  }, D = e.modifiersData.offset;
  if (f === Ka && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [wn, xn].indexOf(H) >= 0 ? 1 : -1, W = [zt, xn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function Q8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? L2 : l, c = ya(r), d = c ? s ? Z1 : Z1.filter(function(y) {
    return ya(y) === c;
  }) : Cl, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(y, h) {
    return y[h] = sl(e, {
      placement: h,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[rr(h)], y;
  }, {});
  return Object.keys(p).sort(function(y, h) {
    return p[y] - p[h];
  });
}
function Z8(e) {
  if (rr(e) === Og)
    return [];
  var t = Zu(e);
  return [tS(e), t, tS(t)];
}
function J8(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? !0 : p, h = n.allowedAutoPlacements, S = t.options.placement, v = rr(S), m = v === S, b = l || (m || !y ? [Zu(S)] : Z8(S)), w = [S].concat(b).reduce(function(te, le) {
      return te.concat(rr(le) === Og ? Q8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: h
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, _ = /* @__PURE__ */ new Map(), T = !0, M = w[0], I = 0; I < w.length; I++) {
      var D = w[I], G = rr(D), H = ya(D) === ma, L = [zt, xn].indexOf(G) >= 0, W = L ? "width" : "height", K = sl(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? wn : Nt : H ? xn : zt;
      k[W] > P[W] && ($ = Zu($));
      var A = Zu($), j = [];
      if (i && j.push(K[G] <= 0), s && j.push(K[$] <= 0, K[A] <= 0), j.every(function(te) {
        return te;
      })) {
        M = D, T = !1;
        break;
      }
      _.set(D, j);
    }
    if (T)
      for (var U = y ? 3 : 1, V = function(le) {
        var ae = w.find(function(se) {
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
const e7 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: J8,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function rS(e, t, n) {
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
function oS(e) {
  return [zt, wn, xn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function t7(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = sl(t, {
    elementContext: "reference"
  }), s = sl(t, {
    altBoundary: !0
  }), l = rS(a, r), u = rS(s, o, i), c = oS(l), d = oS(u);
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
const n7 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: t7
};
function r7(e, t, n) {
  var r = rr(e), o = [Nt, zt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Nt, wn].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function o7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = L2.reduce(function(c, d) {
    return c[d] = r7(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const i7 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: o7
};
function a7(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = H2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const s7 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: a7,
  data: {}
};
function l7(e) {
  return e === "x" ? "y" : "x";
}
function u7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, y = n.tetherOffset, h = y === void 0 ? 0 : y, S = sl(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), v = rr(t.placement), m = ya(t.placement), b = !m, w = Rg(v), k = l7(w), P = t.modifiersData.popperOffsets, _ = t.rects.reference, T = t.rects.popper, M = typeof h == "function" ? h(Object.assign({}, t.rects, {
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
      var H, L = w === "y" ? zt : Nt, W = w === "y" ? xn : wn, K = w === "y" ? "height" : "width", $ = P[w], A = $ + S[L], j = $ - S[W], U = p ? -T[K] / 2 : 0, V = m === ma ? _[K] : T[K], Y = m === ma ? -T[K] : -_[K], z = t.elements.arrow, te = p && z ? Ig(z) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : N2(), ae = le[L], se = le[W], me = Ts(0, _[K], te[K]), ke = b ? _[K] / 2 - U - me - ae - I.mainAxis : V - me - ae - I.mainAxis, et = b ? -_[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && kl(t.elements.arrow), on = qe ? w === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, _n = (H = D == null ? void 0 : D[w]) != null ? H : 0, Ir = $ + ke - _n - on, fe = $ + et - _n, mt = Ts(p ? qc(A, Ir) : A, $, p ? Ho(j, fe) : j);
      P[w] = mt, G[w] = mt - $;
    }
    if (s) {
      var Ge, Ut = w === "x" ? zt : Nt, Rr = w === "x" ? xn : wn, vt = P[k], Nn = k === "y" ? "height" : "width", $r = vt + S[Ut], an = vt - S[Rr], ii = [zt, Nt].indexOf(v) !== -1, Ea = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Il = ii ? $r : vt - _[Nn] - T[Nn] - Ea + I.altAxis, Rl = ii ? vt + _[Nn] + T[Nn] - Ea - I.altAxis : an, yo = p && ii ? $8(Il, vt, Rl) : Ts(p ? Il : $r, vt, p ? Rl : an);
      P[k] = yo, G[k] = yo - vt;
    }
    t.modifiersData[r] = G;
  }
}
const c7 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: u7,
  requiresIfExists: ["offset"]
};
function d7(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function f7(e) {
  return e === en(e) || !yn(e) ? $g(e) : d7(e);
}
function p7(e) {
  var t = e.getBoundingClientRect(), n = va(t.width) / e.offsetWidth || 1, r = va(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function h7(e, t, n) {
  n === void 0 && (n = !1);
  var r = yn(t), o = yn(t) && p7(t), i = go(t), a = ga(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((or(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Dg(i)) && (s = f7(t)), yn(t) ? (l = ga(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Ag(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function m7(e) {
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
function v7(e) {
  var t = m7(e);
  return T8.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function g7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function y7(e) {
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
var iS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function aS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function b7(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? iS : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, iS, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: c,
      setOptions: function(v) {
        var m = typeof v == "function" ? v(c.options) : v;
        h(), c.options = Object.assign({}, i, c.options, m), c.scrollParents = {
          reference: Qo(s) ? Es(s) : s.contextElement ? Es(s.contextElement) : [],
          popper: Es(l)
        };
        var b = v7(y7([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(w) {
          return w.enabled;
        }), y(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var v = c.elements, m = v.reference, b = v.popper;
          if (aS(m, b)) {
            c.rects = {
              reference: h7(m, kl(b), c.options.strategy === "fixed"),
              popper: Ig(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
              return c.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var k = c.orderedModifiers[w], P = k.fn, _ = k.options, T = _ === void 0 ? {} : _, M = k.name;
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
      update: g7(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(c);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!aS(s, l))
      return p;
    p.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function y() {
      c.orderedModifiers.forEach(function(S) {
        var v = S.name, m = S.options, b = m === void 0 ? {} : m, w = S.effect;
        if (typeof w == "function") {
          var k = w({
            state: c,
            name: v,
            instance: p,
            options: b
          }), P = function() {
          };
          d.push(k || P);
        }
      });
    }
    function h() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return p;
  };
}
var S7 = [W8, s7, V8, M8, i7, e7, c7, L8, n7], x7 = /* @__PURE__ */ b7({
  defaultModifiers: S7
});
function U2(e = {}) {
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
  } = e, y = g.useRef(null), h = g.useRef(null), S = g.useRef(null), v = m8(r, p), m = g.useRef(() => {
  }), b = g.useCallback(() => {
    var I;
    !t || !y.current || !h.current || ((I = m.current) == null || I.call(m), S.current = x7(y.current, h.current, {
      placement: v,
      modifiers: [
        f8,
        u8,
        l8,
        {
          ...s8,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...a8(a)
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
    }), S.current.forceUpdate(), m.current = S.current.destroy);
  }, [
    v,
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
  g.useEffect(() => () => {
    var I;
    !y.current && !h.current && ((I = S.current) == null || I.destroy(), S.current = null);
  }, []);
  const w = g.useCallback(
    (I) => {
      y.current = I, b();
    },
    [b]
  ), k = g.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(w, D)
    }),
    [w]
  ), P = g.useCallback(
    (I) => {
      h.current = I, b();
    },
    [b]
  ), _ = g.useCallback(
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
  ), T = g.useCallback((I = {}, D = null) => {
    const { size: G, shadowColor: H, bg: L, style: W, ...K } = I;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: w7(I)
    };
  }, []), M = g.useCallback(
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
      (I = S.current) == null || I.update();
    },
    forceUpdate() {
      var I;
      (I = S.current) == null || I.forceUpdate();
    },
    transformOrigin: wt.transformOrigin.varRef,
    referenceRef: w,
    popperRef: P,
    getPopperProps: _,
    getArrowProps: T,
    getArrowInnerProps: M,
    getReferenceProps: k
  };
}
function w7(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function G2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = ro(n), a = ro(t), [s, l] = g.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = g.useId(), f = o ?? `disclosure-${d}`, p = g.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), y = g.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), h = g.useCallback(() => {
    u ? p() : y();
  }, [u, y, p]);
  function S(m = {}) {
    return {
      ...m,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var w;
        (w = m.onClick) == null || w.call(m, b), h();
      }
    };
  }
  function v(m = {}) {
    return {
      ...m,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: y,
    onClose: p,
    onToggle: h,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: v
  };
}
function C7(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = ro(n), a = g.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  g.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      Mp(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && Mp(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && Mp(d, t) && (a.isPointerDown = !1, o(d));
    }, c = K2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function Mp(e, t) {
  var n;
  const r = e.target;
  return r && !K2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function K2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Y2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = g.useState(t), [i, a] = g.useState(!1);
  return g.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), bg(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = _9(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function q2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  k7,
  P7,
  _7,
  T7
] = TP(), [E7, Pl] = Je({
  strict: !1,
  name: "MenuContext"
});
function O7(e, ...t) {
  const n = g.useId(), r = e || n;
  return g.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function X2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function sS(e) {
  return X2(e).activeElement === e;
}
function M7(e = {}) {
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
    computePositionOnMount: y = !1,
    ...h
  } = e, S = g.useRef(null), v = g.useRef(null), m = _7(), b = g.useCallback(() => {
    requestAnimationFrame(() => {
      var z;
      (z = S.current) == null || z.focus({ preventScroll: !1 });
    });
  }, []), w = g.useCallback(() => {
    const z = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = m.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(z);
  }, [m, o]), k = g.useCallback(() => {
    const z = setTimeout(() => {
      const te = m.lastEnabled();
      te && H(te.index);
    });
    A.current.add(z);
  }, [m]), P = g.useCallback(() => {
    c == null || c(), i ? w() : b();
  }, [i, w, b, c]), { isOpen: _, onOpen: T, onClose: M, onToggle: I } = G2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  C7({
    enabled: _ && r,
    ref: S,
    handler: (z) => {
      var te;
      (te = v.current) != null && te.contains(z.target) || M();
    }
  });
  const D = U2({
    ...h,
    enabled: _ || y,
    placement: d,
    direction: p
  }), [G, H] = g.useState(-1);
  fa(() => {
    _ || H(-1);
  }, [_]), D2(S, {
    focusRef: v,
    visible: _,
    shouldFocus: !0
  });
  const L = Y2({ isOpen: _, ref: S }), [W, K] = O7(t, "menu-button", "menu-list"), $ = g.useCallback(() => {
    T(), b();
  }, [T, b]), A = g.useRef(/* @__PURE__ */ new Set([]));
  g.useEffect(() => {
    const z = A.current;
    return () => {
      z.forEach((te) => clearTimeout(te)), z.clear();
    };
  }, []);
  const j = g.useCallback(() => {
    T(), w();
  }, [w, T]), U = g.useCallback(() => {
    T(), k();
  }, [T, k]), V = g.useCallback(() => {
    var z, te;
    const le = X2(S.current), ae = (z = S.current) == null ? void 0 : z.contains(le.activeElement);
    if (!(_ && !ae))
      return;
    const me = (te = m.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [_, G, m]), Y = g.useRef(null);
  return {
    openAndFocusMenu: $,
    openAndFocusFirstItem: j,
    openAndFocusLastItem: U,
    onTransitionEnd: V,
    unstable__animationState: L,
    descendants: m,
    popper: D,
    buttonId: W,
    menuId: K,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: _,
    onToggle: I,
    onOpen: T,
    onClose: M,
    menuRef: S,
    buttonRef: v,
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
function I7(e = {}, t = null) {
  const n = Pl(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = g.useCallback(
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
function vm(e) {
  var t;
  return F7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function R7(e = {}, t = null) {
  const n = Pl();
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
  } = n, f = P7(), p = q9({
    preventDefault: (v) => v.key !== " " && vm(v.target)
  }), y = g.useCallback(
    (v) => {
      if (!v.currentTarget.contains(v.target))
        return;
      const m = v.key, w = {
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
      }[m];
      if (w) {
        v.preventDefault(), w(v);
        return;
      }
      const k = p((P) => {
        const _ = X9(
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
      vm(v.target) && k(v);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), h = g.useRef(!1);
  a && (h.current = !0);
  const S = q2({
    wasSelected: h.current,
    enabled: u,
    mode: c,
    isSelected: d.present
  });
  return {
    ...e,
    ref: at(i, t),
    children: S ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Le(e.onKeyDown, y)
  };
}
function $7(e = {}) {
  const { popper: t, isOpen: n } = Pl();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function Q2(e = {}, t = null) {
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
  } = e, f = Pl(), {
    setFocusedIndex: p,
    focusedIndex: y,
    closeOnSelect: h,
    onClose: S,
    menuRef: v,
    isOpen: m,
    menuId: b,
    rafId: w
  } = f, k = g.useRef(null), P = `${b}-menuitem-${g.useId()}`, { index: _, register: T } = T7({
    disabled: s && !l
  }), M = g.useCallback(
    ($) => {
      n == null || n($), !s && p(_);
    },
    [p, _, s, n]
  ), I = g.useCallback(
    ($) => {
      r == null || r($), k.current && !sS(k.current) && M($);
    },
    [M, r]
  ), D = g.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = g.useCallback(
    ($) => {
      i == null || i($), vm($.currentTarget) && (u ?? h) && S();
    },
    [S, i, h, u]
  ), H = g.useCallback(
    ($) => {
      a == null || a($), p(_);
    },
    [p, a, _]
  ), L = _ === y, W = s && !l;
  fa(() => {
    if (m)
      return L && !W && k.current ? (w.current && cancelAnimationFrame(w.current), w.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), w.current = null;
      })) : v.current && !sS(v.current) && v.current.focus({ preventScroll: !0 }), () => {
        w.current && cancelAnimationFrame(w.current);
      };
  }, [L, W, v, m]);
  const K = Z9({
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
function A7(e = {}, t = null) {
  const { type: n = "radio", isChecked: r, ...o } = e;
  return {
    ...Q2(o, t),
    role: `menuitem${n}`,
    "aria-checked": r
  };
}
function D7(e = {}) {
  const {
    children: t,
    type: n = "radio",
    value: r,
    defaultValue: o,
    onChange: i,
    ...a
  } = e, l = n === "radio" ? "" : [], [u, c] = OP({
    defaultValue: o ?? l,
    value: r,
    onChange: i
  }), d = g.useCallback(
    (y) => {
      if (n === "radio" && typeof u == "string" && c(y), n === "checkbox" && Array.isArray(u)) {
        const h = u.includes(y) ? u.filter((S) => S !== y) : u.concat(y);
        c(h);
      }
    },
    [u, c, n]
  ), p = jP(t).map((y) => {
    if (y.type.id !== "MenuItemOption")
      return y;
    const h = (v) => {
      var m, b;
      d(y.props.value), (b = (m = y.props).onClick) == null || b.call(m, v);
    }, S = n === "radio" ? y.props.value === u : u.includes(y.props.value);
    return g.cloneElement(y, {
      type: n,
      onClick: h,
      isChecked: S
    });
  });
  return {
    ...a,
    children: p
  };
}
function F7(e) {
  var t;
  if (!L7(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function L7(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [j7, _a] = Je({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), tf = (e) => {
  const { children: t } = e, n = kt("Menu", e), r = kn(e), { direction: o } = mo(), { descendants: i, ...a } = M7({ ...r, direction: o }), s = g.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ x.jsx(k7, { value: i, children: /* @__PURE__ */ x.jsx(E7, { value: s, children: /* @__PURE__ */ x.jsx(j7, { value: n, children: Xn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
tf.displayName = "Menu";
var Z2 = oe(
  (e, t) => {
    const n = _a();
    return /* @__PURE__ */ x.jsx(
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
Z2.displayName = "MenuCommand";
var J2 = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = _a(), i = r.as || n ? n ?? void 0 : "button", a = g.useMemo(
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
    return /* @__PURE__ */ x.jsx(X.button, { ref: t, type: i, ...r, __css: a });
  }
), nf = (e) => {
  const { className: t, children: n, ...r } = e, o = _a(), i = g.Children.only(n), a = g.isValidElement(i) ? g.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ie("chakra-menu__icon", i.props.className)
  }) : null, s = ie("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ x.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
nf.displayName = "MenuIcon";
var Ju = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = Q2(s, t), c = n || o ? /* @__PURE__ */ x.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ x.jsxs(
    J2,
    {
      ...l,
      className: ie("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ x.jsx(nf, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ x.jsx(Z2, { marginStart: i, children: o })
      ]
    }
  );
});
Ju.displayName = "MenuItem";
var z7 = {
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
}, N7 = X(ir.div), Fg = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = Pl(), d = R7(s, n), f = $7(i), p = _a();
  return /* @__PURE__ */ x.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ x.jsx(
        N7,
        {
          variants: z7,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: ie("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: xC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
Fg.displayName = "MenuList";
var e_ = oe((e, t) => {
  const { title: n, children: r, className: o, ...i } = e, a = ie("chakra-menu__group__title", o), s = _a();
  return /* @__PURE__ */ x.jsxs("div", { ref: t, className: "chakra-menu__group", role: "group", children: [
    n && /* @__PURE__ */ x.jsx(X.p, { className: a, ...i, __css: s.groupTitle, children: n }),
    r
  ] });
});
e_.displayName = "MenuGroup";
var t_ = (e) => {
  const { className: t, title: n, ...r } = e, o = D7(r);
  return /* @__PURE__ */ x.jsx(
    e_,
    {
      title: n,
      className: ie("chakra-menu__option-group", t),
      ...o
    }
  );
};
t_.displayName = "MenuOptionGroup";
var V7 = oe((e, t) => {
  const n = _a();
  return /* @__PURE__ */ x.jsx(
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
}), Lg = oe(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = I7(o, t), a = r || V7;
    return /* @__PURE__ */ x.jsx(
      a,
      {
        ...i,
        className: ie("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ x.jsx(
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
Lg.displayName = "MenuButton";
var B7 = (e) => /* @__PURE__ */ x.jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ x.jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) }), jg = oe(
  (e, t) => {
    const { icon: n, iconSpacing: r = "0.75rem", ...o } = e, i = A7(o, t);
    return /* @__PURE__ */ x.jsxs(
      J2,
      {
        ...i,
        className: ie("chakra-menu__menuitem-option", o.className),
        children: [
          n !== null && /* @__PURE__ */ x.jsx(
            nf,
            {
              fontSize: "0.8em",
              marginEnd: r,
              opacity: e.isChecked ? 1 : 0,
              children: n || /* @__PURE__ */ x.jsx(B7, {})
            }
          ),
          /* @__PURE__ */ x.jsx("span", { style: { flex: 1 }, children: i.children })
        ]
      }
    );
  }
);
jg.id = "MenuItemOption";
jg.displayName = "MenuItemOption";
var W7 = {
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
    ...AP,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, H7 = X(ir.section), U7 = (e) => W7[e || "none"], n_ = g.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = U7(n), ...o } = e;
    return /* @__PURE__ */ x.jsx(H7, { ref: t, ...r, ...o });
  }
);
n_.displayName = "ModalTransition";
var G7 = Object.defineProperty, K7 = (e, t, n) => t in e ? G7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Y7 = (e, t, n) => (K7(e, typeof t != "symbol" ? t + "" : t, n), n), q7 = class {
  constructor() {
    Y7(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, gm = new q7();
function r_(e, t) {
  const [n, r] = g.useState(0);
  return g.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = gm.add(o);
        r(i);
      }
      return () => {
        gm.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var X7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, di = /* @__PURE__ */ new WeakMap(), vu = /* @__PURE__ */ new WeakMap(), gu = {}, Ip = 0, o_ = function(e) {
  return e && (e.host || o_(e.parentNode));
}, Q7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = o_(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Z7 = function(e, t, n, r) {
  var o = Q7(t, Array.isArray(e) ? e : [e]);
  gu[n] || (gu[n] = /* @__PURE__ */ new WeakMap());
  var i = gu[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), y = p !== null && p !== "false", h = (di.get(f) || 0) + 1, S = (i.get(f) || 0) + 1;
        di.set(f, h), i.set(f, S), a.push(f), h === 1 && y && vu.set(f, !0), S === 1 && f.setAttribute(n, "true"), y || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), Ip++, function() {
    a.forEach(function(d) {
      var f = di.get(d) - 1, p = i.get(d) - 1;
      di.set(d, f), i.set(d, p), f || (vu.has(d) || d.removeAttribute(r), vu.delete(d)), p || d.removeAttribute(n);
    }), Ip--, Ip || (di = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), vu = /* @__PURE__ */ new WeakMap(), gu = {});
  };
}, J7 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || X7(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Z7(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function eW(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = g.useRef(null), c = g.useRef(null), [d, f, p] = nW(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  tW(u, t && a);
  const y = r_(u, t), h = g.useRef(null), S = g.useCallback((M) => {
    h.current = M.target;
  }, []), v = g.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [m, b] = g.useState(!1), [w, k] = g.useState(!1), P = g.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": m ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: Le(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, w, d, f, m]
  ), _ = g.useCallback(
    (M) => {
      M.stopPropagation(), h.current === M.target && gm.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), T = g.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: Le(M.onClick, _),
      onKeyDown: Le(M.onKeyDown, v),
      onMouseDown: Le(M.onMouseDown, S)
    }),
    [v, S, _]
  );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: b,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: P,
    getDialogContainerProps: T,
    index: y
  };
}
function tW(e, t) {
  const n = e.current;
  g.useEffect(() => {
    if (!(!e.current || !t))
      return J7(e.current);
  }, [t, e, n]);
}
function nW(e, ...t) {
  const n = g.useId(), r = e || n;
  return g.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [rW, Ta] = Je({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [oW, co] = Je({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), _l = (e) => {
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
    onCloseComplete: y
  } = t, h = kt("Modal", t), v = {
    ...eW(t),
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
  return /* @__PURE__ */ x.jsx(oW, { value: v, children: /* @__PURE__ */ x.jsx(rW, { value: h, children: /* @__PURE__ */ x.jsx(ri, { onExitComplete: y, children: v.isOpen && /* @__PURE__ */ x.jsx(ml, { ...n, children: r }) }) }) });
};
_l.displayName = "Modal";
var ec = "right-scroll-bar-position", tc = "width-before-scroll-bar", iW = "with-scroll-bars-hidden", aW = "--removed-body-scroll-bar-size", i_ = QP(), Rp = function() {
}, rf = g.forwardRef(function(e, t) {
  var n = g.useRef(null), r = g.useState({
    onScrollCapture: Rp,
    onWheelCapture: Rp,
    onTouchMoveCapture: Rp
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, y = e.inert, h = e.allowPinchZoom, S = e.as, v = S === void 0 ? "div" : S, m = e.gapMode, b = YP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, k = KP([n, t]), P = qn(qn({}, b), o);
  return g.createElement(
    g.Fragment,
    null,
    c && g.createElement(w, { sideCar: i_, removeScrollBar: u, shards: d, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!h, lockRef: n, gapMode: m }),
    a ? g.cloneElement(g.Children.only(s), qn(qn({}, P), { ref: k })) : g.createElement(v, qn({}, P, { className: l, ref: k }), s)
  );
});
rf.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
rf.classNames = {
  fullWidth: tc,
  zeroRight: ec
};
var lS, sW = function() {
  if (lS)
    return lS;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function lW() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sW();
  return t && e.setAttribute("nonce", t), e;
}
function uW(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cW(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var dW = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = lW()) && (uW(t, n), cW(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, fW = function() {
  var e = dW();
  return function(t, n) {
    g.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, a_ = function() {
  var e = fW(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, pW = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $p = function(e) {
  return parseInt(e || "", 10) || 0;
}, hW = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$p(n), $p(r), $p(o)];
}, mW = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return pW;
  var t = hW(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, vW = a_(), gW = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(iW, ` {
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
  
  .`).concat(ec, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(tc, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(ec, " .").concat(ec, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(tc, " .").concat(tc, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(aW, ": ").concat(s, `px;
  }
`);
}, yW = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = g.useMemo(function() {
    return mW(o);
  }, [o]);
  return g.createElement(vW, { styles: gW(i, !t, o, n ? "" : "!important") });
}, ym = !1;
if (typeof window < "u")
  try {
    var yu = Object.defineProperty({}, "passive", {
      get: function() {
        return ym = !0, !0;
      }
    });
    window.addEventListener("test", yu, yu), window.removeEventListener("test", yu, yu);
  } catch {
    ym = !1;
  }
var fi = ym ? { passive: !1 } : !1, bW = function(e) {
  return e.tagName === "TEXTAREA";
}, s_ = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !bW(e) && n[t] === "visible")
  );
}, SW = function(e) {
  return s_(e, "overflowY");
}, xW = function(e) {
  return s_(e, "overflowX");
}, uS = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = l_(e, r);
    if (o) {
      var i = u_(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, wW = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, CW = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, l_ = function(e, t) {
  return e === "v" ? SW(t) : xW(t);
}, u_ = function(e, t) {
  return e === "v" ? wW(t) : CW(t);
}, kW = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, PW = function(e, t, n, r, o) {
  var i = kW(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = u_(e, s), y = p[0], h = p[1], S = p[2], v = h - S - i * y;
    (y || v) && l_(e, s) && (d += v, f += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, bu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, cS = function(e) {
  return [e.deltaX, e.deltaY];
}, dS = function(e) {
  return e && "current" in e ? e.current : e;
}, _W = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, TW = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, EW = 0, pi = [];
function OW(e) {
  var t = g.useRef([]), n = g.useRef([0, 0]), r = g.useRef(), o = g.useState(EW++)[0], i = g.useState(a_)[0], a = g.useRef(e);
  g.useEffect(function() {
    a.current = e;
  }, [e]), g.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = T6([e.lockRef.current], (e.shards || []).map(dS), !0).filter(Boolean);
      return h.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = g.useCallback(function(h, S) {
    if ("touches" in h && h.touches.length === 2)
      return !a.current.allowPinchZoom;
    var v = bu(h), m = n.current, b = "deltaX" in h ? h.deltaX : m[0] - v[0], w = "deltaY" in h ? h.deltaY : m[1] - v[1], k, P = h.target, _ = Math.abs(b) > Math.abs(w) ? "h" : "v";
    if ("touches" in h && _ === "h" && P.type === "range")
      return !1;
    var T = uS(_, P);
    if (!T)
      return !0;
    if (T ? k = _ : (k = _ === "v" ? "h" : "v", T = uS(_, P)), !T)
      return !1;
    if (!r.current && "changedTouches" in h && (b || w) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return PW(M, S, h, M === "h" ? b : w, !0);
  }, []), l = g.useCallback(function(h) {
    var S = h;
    if (!(!pi.length || pi[pi.length - 1] !== i)) {
      var v = "deltaY" in S ? cS(S) : bu(S), m = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && _W(k.delta, v);
      })[0];
      if (m && m.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!m) {
        var b = (a.current.shards || []).map(dS).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), w = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation;
        w && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = g.useCallback(function(h, S, v, m) {
    var b = { name: h, delta: S, target: v, should: m, shadowParent: MW(v) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== b;
      });
    }, 1);
  }, []), c = g.useCallback(function(h) {
    n.current = bu(h), r.current = void 0;
  }, []), d = g.useCallback(function(h) {
    u(h.type, cS(h), h.target, s(h, e.lockRef.current));
  }, []), f = g.useCallback(function(h) {
    u(h.type, bu(h), h.target, s(h, e.lockRef.current));
  }, []);
  g.useEffect(function() {
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
  var p = e.removeScrollBar, y = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    y ? g.createElement(i, { styles: TW(o) }) : null,
    p ? g.createElement(yW, { gapMode: e.gapMode }) : null
  );
}
function MW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const IW = E6(i_, OW);
var c_ = g.forwardRef(function(e, t) {
  return g.createElement(rf, qn({}, e, { ref: t, sideCar: IW }));
});
c_.classNames = rf.classNames;
const RW = c_;
function d_(e) {
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
  } = co(), [f, p] = aP();
  g.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const y = r_(r, d);
  return /* @__PURE__ */ x.jsx(
    O2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ x.jsx(
        RW,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: y === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var of = oe(
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
    }, y = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer
    }, { motionPreset: h } = co();
    return /* @__PURE__ */ x.jsx(d_, { children: /* @__PURE__ */ x.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: y,
        children: /* @__PURE__ */ x.jsx(
          n_,
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
of.displayName = "ModalContent";
var [$W, AW] = Je(), DW = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function FW(e, t) {
  var n, r;
  if (e)
    return (r = (n = DW[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function LW(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = mo(), l = (t = s.components) == null ? void 0 : t.Drawer, u = FW(o, s.direction);
  return /* @__PURE__ */ x.jsx($W, { value: { placement: u }, children: /* @__PURE__ */ x.jsx(
    _l,
    {
      isOpen: n,
      onClose: r,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var jW = X(DP), f_ = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = co(), c = s(a, t), d = l(i), f = ie("chakra-modal__content", n), p = Ta(), y = {
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
    }, { placement: S } = AW();
    return /* @__PURE__ */ x.jsx(d_, { children: /* @__PURE__ */ x.jsx(
      X.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: h,
        children: /* @__PURE__ */ x.jsx(
          jW,
          {
            motionProps: o,
            direction: S,
            in: u,
            className: f,
            ...c,
            __css: y,
            children: r
          }
        )
      }
    ) });
  }
);
f_.displayName = "DrawerContent";
var Tl = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = co();
    g.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ie("chakra-modal__header", n), l = {
      flex: 0,
      ...Ta().header
    };
    return /* @__PURE__ */ x.jsx(
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
Tl.displayName = "ModalHeader";
var zW = X(ir.div), El = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ie("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Ta().overlay
    }, { motionPreset: u } = co(), d = o || (u === "none" ? {} : $P);
    return /* @__PURE__ */ x.jsx(
      zW,
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
El.displayName = "ModalOverlay";
var Ol = oe((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = co();
  g.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ie("chakra-modal__body", n), s = Ta();
  return /* @__PURE__ */ x.jsx(
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
Ol.displayName = "ModalBody";
var af = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = co(), a = ie("chakra-modal__close-btn", r), s = Ta();
    return /* @__PURE__ */ x.jsx(
      Xd,
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
af.displayName = "ModalCloseButton";
var [NW, oi] = Je({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [VW, Ml] = Je({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), p_ = oe(
  function(t, n) {
    const { getHeaderProps: r } = oi(), o = Ml();
    return /* @__PURE__ */ x.jsx(
      X.header,
      {
        ...r(t, n),
        className: ie("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
p_.displayName = "PopoverHeader";
function zg(e) {
  const t = g.Children.only(e.children), { getTriggerProps: n } = oi();
  return g.cloneElement(t, n(t.props, t.ref));
}
zg.displayName = "PopoverTrigger";
var hi = {
  click: "click",
  hover: "hover"
};
function BW(e = {}) {
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
    computePositionOnMount: y,
    ...h
  } = e, { isOpen: S, onClose: v, onOpen: m, onToggle: b } = G2(e), w = g.useRef(null), k = g.useRef(null), P = g.useRef(null), _ = g.useRef(!1), T = g.useRef(!1);
  S && (T.current = !0);
  const [M, I] = g.useState(!1), [D, G] = g.useState(!1), H = g.useId(), L = o ?? H, [W, K, $, A] = [
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
  } = U2({
    ...h,
    enabled: S || !!y
  }), te = Y2({ isOpen: S, ref: P });
  v6({
    enabled: S,
    ref: k
  }), D2(P, {
    focusRef: k,
    visible: S,
    shouldFocus: i && u === hi.click
  }), t8(P, {
    focusRef: r,
    visible: S,
    shouldFocus: a && u === hi.click
  });
  const le = q2({
    wasSelected: T.current,
    enabled: f,
    mode: p,
    isSelected: te.present
  }), ae = g.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        style: {
          ...fe.style,
          transformOrigin: wt.transformOrigin.varRef,
          [wt.arrowSize.var]: s ? `${s}px` : void 0,
          [wt.arrowShadowColor.var]: l
        },
        ref: at(P, mt),
        children: le ? fe.children : null,
        id: K,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Le(fe.onKeyDown, (Ut) => {
          n && Ut.key === "Escape" && v();
        }),
        onBlur: Le(fe.onBlur, (Ut) => {
          const Rr = fS(Ut), vt = Ap(P.current, Rr), Nn = Ap(k.current, Rr);
          S && t && (!vt && !Nn) && v();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === hi.hover && (Ge.role = "tooltip", Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        _.current = !0;
      }), Ge.onMouseLeave = Le(
        fe.onMouseLeave,
        (Ut) => {
          Ut.nativeEvent.relatedTarget !== null && (_.current = !1, setTimeout(() => v(), d));
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
      v,
      S,
      t,
      d,
      l,
      s
    ]
  ), se = g.useCallback(
    (fe = {}, mt = null) => V(
      {
        ...fe,
        style: {
          visibility: S ? "visible" : "hidden",
          ...fe.style
        }
      },
      mt
    ),
    [S, V]
  ), me = g.useCallback(
    (fe, mt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(mt, w, j)
    }),
    [w, j]
  ), ke = g.useRef(), et = g.useRef(), qe = g.useCallback(
    (fe) => {
      w.current == null && j(fe);
    },
    [j]
  ), on = g.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, mt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": S,
        "aria-controls": K
      };
      return u === hi.click && (Ge.onClick = Le(fe.onClick, b)), u === hi.hover && (Ge.onFocus = Le(fe.onFocus, () => {
        ke.current === void 0 && m();
      }), Ge.onBlur = Le(fe.onBlur, (Ut) => {
        const Rr = fS(Ut), vt = !Ap(P.current, Rr);
        S && t && vt && v();
      }), Ge.onKeyDown = Le(fe.onKeyDown, (Ut) => {
        Ut.key === "Escape" && v();
      }), Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        _.current = !0, ke.current = window.setTimeout(() => m(), c);
      }), Ge.onMouseLeave = Le(fe.onMouseLeave, () => {
        _.current = !1, ke.current && (clearTimeout(ke.current), ke.current = void 0), et.current = window.setTimeout(() => {
          _.current === !1 && v();
        }, d);
      })), Ge;
    },
    [
      W,
      S,
      K,
      u,
      qe,
      b,
      m,
      t,
      v,
      c,
      d
    ]
  );
  g.useEffect(() => () => {
    ke.current && clearTimeout(ke.current), et.current && clearTimeout(et.current);
  }, []);
  const _n = g.useCallback(
    (fe = {}, mt = null) => ({
      ...fe,
      id: $,
      ref: at(mt, (Ge) => {
        I(!!Ge);
      })
    }),
    [$]
  ), Ir = g.useCallback(
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
    isOpen: S,
    onAnimationComplete: te.onComplete,
    onClose: v,
    getAnchorProps: me,
    getArrowProps: U,
    getArrowInnerProps: Y,
    getPopoverPositionerProps: se,
    getPopoverProps: ae,
    getTriggerProps: on,
    getHeaderProps: _n,
    getBodyProps: Ir
  };
}
function Ap(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function fS(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Ng(e) {
  const t = kt("Popover", e), { children: n, ...r } = kn(e), o = mo(), i = BW({ ...r, direction: o.direction });
  return /* @__PURE__ */ x.jsx(NW, { value: i, children: /* @__PURE__ */ x.jsx(VW, { value: t, children: Xn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Ng.displayName = "Popover";
var Dp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Vg(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = oi(), c = Ml(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ x.jsx(
    X.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ x.jsx(
        X.div,
        {
          className: ie("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Dp("colors", s),
            "--popper-arrow-bg": Dp("colors", d),
            "--popper-arrow-shadow": Dp("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
Vg.displayName = "PopoverArrow";
var Bg = oe(
  function(t, n) {
    const { getBodyProps: r } = oi(), o = Ml();
    return /* @__PURE__ */ x.jsx(
      X.div,
      {
        ...r(t, n),
        className: ie("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
Bg.displayName = "PopoverBody";
var Wg = oe(
  function(t, n) {
    const { onClose: r } = oi(), o = Ml();
    return /* @__PURE__ */ x.jsx(
      Xd,
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
Wg.displayName = "PopoverCloseButton";
function WW(e) {
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
var HW = {
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
}, UW = X(ir.section), h_ = oe(function(t, n) {
  const { variants: r = HW, ...o } = t, { isOpen: i } = oi();
  return /* @__PURE__ */ x.jsx(
    UW,
    {
      ref: n,
      variants: WW(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
h_.displayName = "PopoverTransition";
var Hg = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = oi(), u = Ml(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ x.jsx(
      X.div,
      {
        ...s(r),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ x.jsx(
          h_,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: xC(
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
Hg.displayName = "PopoverContent";
var [GW, m_] = Je({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), v_ = oe((e, t) => {
  const n = kt("Tag", e), r = kn(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ x.jsx(GW, { value: n, children: /* @__PURE__ */ x.jsx(X.span, { ref: t, ...r, __css: o }) });
});
v_.displayName = "Tag";
var KW = oe((e, t) => {
  const n = m_();
  return /* @__PURE__ */ x.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
KW.displayName = "TagLabel";
var YW = oe((e, t) => /* @__PURE__ */ x.jsx(Pn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
YW.displayName = "TagLeftIcon";
var qW = oe((e, t) => /* @__PURE__ */ x.jsx(Pn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
qW.displayName = "TagRightIcon";
var g_ = (e) => /* @__PURE__ */ x.jsx(Pn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ x.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
g_.displayName = "TagCloseIcon";
var XW = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...m_().closeButton
    };
    return /* @__PURE__ */ x.jsx(
      X.button,
      {
        ref: t,
        "aria-label": "close",
        ...o,
        type: "button",
        disabled: n,
        __css: a,
        children: r || /* @__PURE__ */ x.jsx(g_, {})
      }
    );
  }
);
XW.displayName = "TagCloseButton";
var QW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, ZW = Object.defineProperty, JW = Object.defineProperties, eH = Object.getOwnPropertyDescriptors, Xc = Object.getOwnPropertySymbols, y_ = Object.prototype.hasOwnProperty, b_ = Object.prototype.propertyIsEnumerable, pS = (e, t, n) => t in e ? ZW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hS = (e, t) => {
  for (var n in t || (t = {}))
    y_.call(t, n) && pS(e, n, t[n]);
  if (Xc)
    for (var n of Xc(t))
      b_.call(t, n) && pS(e, n, t[n]);
  return e;
}, tH = (e, t) => JW(e, eH(t)), nH = (e, t) => {
  var n = {};
  for (var r in e)
    y_.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Xc)
    for (var r of Xc(e))
      t.indexOf(r) < 0 && b_.call(e, r) && (n[r] = e[r]);
  return n;
}, Ht = (e, t, n) => {
  const r = g.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = nH(a, ["color", "size", "stroke", "children"]);
      return g.createElement(
        "svg",
        hS(tH(hS({
          ref: i
        }, QW), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => g.createElement(f, p)), ...c || []]
      );
    }
  );
  return r.propTypes = {
    color: Co.string,
    size: Co.oneOfType([Co.string, Co.number]),
    stroke: Co.oneOfType([Co.string, Co.number])
  }, r.displayName = `${t}`, r;
}, mS = Ht("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]), rH = Ht("chevron-up", "IconChevronUp", [
  ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]
]), oH = Ht("file-import", "IconFileImport", [
  ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
  [
    "path",
    {
      d: "M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3",
      key: "svg-1"
    }
  ]
]), S_ = Ht("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), iH = Ht("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), aH = Ht("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), sH = Ht("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), x_ = Ht("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), lH = Ht("settings", "IconSettings", [
  [
    "path",
    {
      d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]
]), uH = Ht("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), w_ = Ht("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), C_ = Ht("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), cH = Ht(
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
), dH = Ht("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
let Su;
const fH = new Uint8Array(16);
function pH() {
  if (!Su && (Su = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Su))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Su(fH);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function hH(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const mH = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), vS = {
  randomUUID: mH
};
function vH(e, t, n) {
  if (vS.randomUUID && !t && !e)
    return vS.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || pH)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return hH(r);
}
async function Ug(e) {
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
  yH(n, t);
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
async function gH(e, t) {
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
async function k_(e) {
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
async function yH(e, t) {
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
async function bH(e) {
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
async function SH() {
  try {
    return await (await fetch("/workspace/get_my_workflows_dir")).text();
  } catch (e) {
    console.error("Error getting workflows dir:", e);
  }
}
async function xH(e) {
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
const wH = "CWM_WORKFLOWS_SORT_TYPE";
var Ur = /* @__PURE__ */ ((e) => (e.RECENTLY_MODIFIED = "newst", e.OLDEST_MODIFIED = "oldest", e.AZ = "name A-Z", e.ZA = "name Z-A", e))(Ur || {});
function CH(e) {
  return e = e.replace(/[\\/:*?"<>|]/g, "_"), e.trim();
}
function P_(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
function __(e = [], t = Ur.RECENTLY_MODIFIED) {
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
let _e, Ce = null, nc = null;
async function kH() {
  const e = async () => {
    let r = await Ug("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), _e = JSON.parse(r ?? "{}");
  }, t = async () => {
    Ce = await _H();
  }, n = async () => {
    nc = await Qc.load();
  };
  await Promise.all([e(), t(), n()]);
}
function bm(e, t) {
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
      n.filePath && k_(n.filePath), Sm(e);
      return;
    }
    t.json != null && Sm(e);
  }
}
function Sm(e) {
  if (_e == null)
    return;
  const t = _e[e];
  if (t == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", e);
    return;
  }
  const n = CH(t.name) + ".json";
  _e[e].filePath = n, gH(n, t.json);
}
function xm({
  json: e,
  name: t
}) {
  if (_e == null)
    throw new Error("workspace is not loaded");
  const n = vH();
  return _e[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(_e)), ba("workflows", JSON.stringify(_e)), Sm(n), _e[n];
}
function rc(e) {
  if (_e == null)
    throw new Error("workspace is not loaded");
  const t = Object.values(_e);
  return e ? __(t, e) : t;
}
function PH(e) {
  var n;
  if (_e == null)
    throw new Error("workspace is not loaded");
  const t = (n = _e[e]) == null ? void 0 : n.filePath;
  delete _e[e], localStorage.setItem("workspace", JSON.stringify(_e)), ba("workflows", JSON.stringify(_e)), t != null && k_(t);
}
async function _H() {
  let e = await Ug("tags"), t = JSON.parse(e ?? "{}") ?? {};
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
function TH() {
  return JSON.stringify({
    [Qc.TABLE_NAME]: nc == null ? void 0 : nc.records,
    tags: Ce == null ? void 0 : Ce.tags,
    workflows: _e
  });
}
const Io = class Io {
  constructor() {
    yf(this, "records");
    this.records = {};
  }
  upsert(t) {
    this.records = {
      ...this.records,
      ...t
    }, ba(Io.TABLE_NAME, JSON.stringify(this.records)), localStorage.setItem("comfyspace", TH());
  }
  static async load() {
    const t = new Io();
    let n = await Ug(Io.TABLE_NAME), r = n != null ? JSON.parse(n) : null;
    if (r == null) {
      const o = localStorage.getItem("comfyspace") ?? "{}", i = JSON.parse(o);
      r = i[Io.TABLE_NAME], console.log("userSettings", i.userSettings);
    }
    return r != null && (t.records = r), t;
  }
};
yf(Io, "TABLE_NAME", "userSettings");
let Qc = Io;
const T_ = g.createContext({
  curFlowID: null
}), E_ = g.createContext({});
function EH({ onclose: e }) {
  const [t, n] = g.useState([]), r = async () => {
    const o = await bH("workflows");
    if (o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return g.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ x.jsxs(_l, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ x.jsx(El, {}),
    /* @__PURE__ */ x.jsxs(of, { children: [
      /* @__PURE__ */ x.jsx(Tl, { children: "Backups" }),
      /* @__PURE__ */ x.jsx(af, {}),
      /* @__PURE__ */ x.jsx(Ol, { children: /* @__PURE__ */ x.jsx(LP, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ x.jsxs(IP, { children: [
          /* @__PURE__ */ x.jsx("h2", { children: /* @__PURE__ */ x.jsxs(EP, { children: [
            /* @__PURE__ */ x.jsxs(Fe, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              P_(i)
            ] }),
            /* @__PURE__ */ x.jsx(MP, {})
          ] }) }),
          /* @__PURE__ */ x.jsx(FP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ x.jsx(Fe, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function OH({ onclose: e }) {
  const [t, n] = g.useState((Ce == null ? void 0 : Ce.listAll()) ?? []);
  return /* @__PURE__ */ x.jsxs(_l, { isOpen: !0, onClose: e, children: [
    /* @__PURE__ */ x.jsx(El, {}),
    /* @__PURE__ */ x.jsxs(of, { children: [
      /* @__PURE__ */ x.jsx(Tl, { children: "My Tags" }),
      /* @__PURE__ */ x.jsx(af, {}),
      /* @__PURE__ */ x.jsx(Ol, { children: t.map((r) => /* @__PURE__ */ x.jsxs(xt, { children: [
        /* @__PURE__ */ x.jsx(v_, { children: r.name }),
        /* @__PURE__ */ x.jsx(
          rl,
          {
            onClick: () => {
              Ce == null || Ce.delete(r.name), n((Ce == null ? void 0 : Ce.listAll()) ?? []);
            },
            "aria-label": "delete-tag",
            colorScheme: "red",
            variant: "ghost",
            icon: /* @__PURE__ */ x.jsx(C_, {})
          }
        )
      ] })) })
    ] })
  ] });
}
function MH({
  onclose: e
}) {
  const [t, n] = g.useState(null), r = async (o) => {
    const i = await SH();
    n(i ?? null);
  };
  return g.useEffect(() => {
    r();
  }), /* @__PURE__ */ x.jsxs(_l, { isOpen: !0, onClose: e, size: "2xl", children: [
    /* @__PURE__ */ x.jsx(El, {}),
    /* @__PURE__ */ x.jsxs(of, { children: [
      /* @__PURE__ */ x.jsx(Tl, { children: "Settings" }),
      /* @__PURE__ */ x.jsx(af, {}),
      /* @__PURE__ */ x.jsxs(Ol, { children: [
        /* @__PURE__ */ x.jsx(nr, { fontWeight: 600, mb: 3, children: "Workspace Save Directory" }),
        /* @__PURE__ */ x.jsxs(xt, { children: [
          /* @__PURE__ */ x.jsx(nr, { children: t }),
          /* @__PURE__ */ x.jsx(
            gn,
            {
              onClick: () => {
                xH();
              },
              paddingLeft: 10,
              paddingRight: 10,
              leftIcon: /* @__PURE__ */ x.jsx(S_, {}),
              colorScheme: "teal",
              children: "Choose Folder"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function IH({}) {
  const { isOpen: e, onOpen: t, onClose: n } = z9(), [r, o] = g.useState(!1), [i, a] = g.useState(!1);
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(tf, { isLazy: !0, children: [
      /* @__PURE__ */ x.jsx(
        Lg,
        {
          as: rl,
          "aria-label": "Options",
          icon: /* @__PURE__ */ x.jsx(aH, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ x.jsxs(Fg, { children: [
        /* @__PURE__ */ x.jsx(
          Ju,
          {
            onClick: () => a(!0),
            icon: /* @__PURE__ */ x.jsx(lH, { size: 16 }),
            fontSize: 16,
            children: "Settings"
          }
        ),
        /* @__PURE__ */ x.jsx(
          Ju,
          {
            onClick: () => o(!0),
            icon: /* @__PURE__ */ x.jsx(w_, { size: 16 }),
            fontSize: 16,
            children: "Manage Tags"
          }
        ),
        /* @__PURE__ */ x.jsx(
          Ju,
          {
            onClick: t,
            icon: /* @__PURE__ */ x.jsx(iH, { size: 16 }),
            fontSize: 16,
            children: "Backups (Experimental)"
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ x.jsx(OH, { onclose: () => o(!1) }),
    i && /* @__PURE__ */ x.jsx(MH, { onclose: () => a(!1) }),
    e && /* @__PURE__ */ x.jsx(EH, { onclose: n })
  ] });
}
function gS(e, t) {
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
    t % 2 ? gS(Object(n), !0).forEach(function(r) {
      ji(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gS(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function RH(e) {
  if (Array.isArray(e))
    return e;
}
function $H(e, t) {
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
function wm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function O_(e, t) {
  if (e) {
    if (typeof e == "string")
      return wm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return wm(e, t);
  }
}
function AH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xr(e, t) {
  return RH(e) || $H(e, t) || O_(e, t) || AH();
}
function Mr(e, t) {
  if (e == null)
    return {};
  var n = BP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var DH = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function FH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, y = Mr(e, DH), h = g.useState(s !== void 0 ? s : n), S = xr(h, 2), v = S[0], m = S[1], b = g.useState(l !== void 0 ? l : o), w = xr(b, 2), k = w[0], P = w[1], _ = g.useState(p !== void 0 ? p : a), T = xr(_, 2), M = T[0], I = T[1], D = g.useCallback(function(A, j) {
    typeof u == "function" && u(A, j), I(A);
  }, [u]), G = g.useCallback(function(A, j) {
    var U;
    typeof c == "function" && (U = c(A, j)), m(U !== void 0 ? U : A);
  }, [c]), H = g.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = g.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), W = s !== void 0 ? s : v, K = l !== void 0 ? l : k, $ = p !== void 0 ? p : M;
  return Z(Z({}, y), {}, {
    inputValue: W,
    menuIsOpen: K,
    onChange: D,
    onInputChange: G,
    onMenuClose: L,
    onMenuOpen: H,
    value: $
  });
}
function LH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, n2(r.key), r);
  }
}
function jH(e, t, n) {
  return t && yS(e.prototype, t), n && yS(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function zH(e, t) {
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
  }), t && Uc(e, t);
}
function Zc(e) {
  return Zc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Zc(e);
}
function NH() {
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
function VH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function BH(e, t) {
  if (t && (Xo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return VH(e);
}
function WH(e) {
  var t = NH();
  return function() {
    var r = Zc(e), o;
    if (t) {
      var i = Zc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return BH(this, o);
  };
}
function HH(e) {
  if (Array.isArray(e))
    return wm(e);
}
function UH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function GH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M_(e) {
  return HH(e) || UH(e) || O_(e) || GH();
}
function KH(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const YH = Math.min, qH = Math.max, Jc = Math.round, xu = Math.floor, ed = (e) => ({
  x: e,
  y: e
});
function XH(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function I_(e) {
  return $_(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ln(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function R_(e) {
  var t;
  return (t = ($_(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $_(e) {
  return e instanceof Node || e instanceof Ln(e).Node;
}
function Cm(e) {
  return e instanceof Element || e instanceof Ln(e).Element;
}
function Gg(e) {
  return e instanceof HTMLElement || e instanceof Ln(e).HTMLElement;
}
function bS(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ln(e).ShadowRoot;
}
function A_(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Kg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function QH() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ZH(e) {
  return ["html", "body", "#document"].includes(I_(e));
}
function Kg(e) {
  return Ln(e).getComputedStyle(e);
}
function JH(e) {
  if (I_(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    bS(e) && e.host || // Fallback.
    R_(e)
  );
  return bS(t) ? t.host : t;
}
function D_(e) {
  const t = JH(e);
  return ZH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gg(t) && A_(t) ? t : D_(t);
}
function td(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = D_(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ln(o);
  return i ? t.concat(a, a.visualViewport || [], A_(o) ? o : [], a.frameElement && n ? td(a.frameElement) : []) : t.concat(o, td(o, [], n));
}
function eU(e) {
  const t = Kg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Gg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Jc(n) !== i || Jc(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Yg(e) {
  return Cm(e) ? e : e.contextElement;
}
function Fp(e) {
  const t = Yg(e);
  if (!Gg(t))
    return ed(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = eU(t);
  let a = (i ? Jc(n.width) : n.width) / r, s = (i ? Jc(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const tU = /* @__PURE__ */ ed(0);
function nU(e) {
  const t = Ln(e);
  return !QH() || !t.visualViewport ? tU : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function rU(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ln(e) ? !1 : t;
}
function SS(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Yg(e);
  let a = ed(1);
  t && (r ? Cm(r) && (a = Fp(r)) : a = Fp(e));
  const s = rU(i, n, r) ? nU(i) : ed(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Ln(i), p = r && Cm(r) ? Ln(r) : r;
    let y = f.frameElement;
    for (; y && r && p !== f; ) {
      const h = Fp(y), S = y.getBoundingClientRect(), v = Kg(y), m = S.left + (y.clientLeft + parseFloat(v.paddingLeft)) * h.x, b = S.top + (y.clientTop + parseFloat(v.paddingTop)) * h.y;
      l *= h.x, u *= h.y, c *= h.x, d *= h.y, l += m, u += b, y = Ln(y).frameElement;
    }
  }
  return XH({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function oU(e, t) {
  let n = null, r;
  const o = R_(e);
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
    const p = xu(c), y = xu(o.clientWidth - (u + d)), h = xu(o.clientHeight - (c + f)), S = xu(u), m = {
      rootMargin: -p + "px " + -y + "px " + -h + "px " + -S + "px",
      threshold: qH(0, YH(1, l)) || 1
    };
    let b = !0;
    function w(k) {
      const P = k[0].intersectionRatio;
      if (P !== l) {
        if (!b)
          return a();
        P ? a(!1, P) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...m,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, m);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function iU(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Yg(e), c = o || i ? [...u ? td(u) : [], ...td(t)] : [];
  c.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = u && s ? oU(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((v) => {
    let [m] = v;
    m && m.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let y, h = l ? SS(e) : null;
  l && S();
  function S() {
    const v = SS(e);
    h && (v.x !== h.x || v.y !== h.y || v.width !== h.width || v.height !== h.height) && n(), h = v, y = requestAnimationFrame(S);
  }
  return n(), () => {
    c.forEach((v) => {
      o && v.removeEventListener("scroll", n), i && v.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(y);
  };
}
var km = g.useLayoutEffect, aU = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], nd = function() {
};
function sU(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function lU(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(sU(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var xS = function(t) {
  return gU(t) ? t.filter(Boolean) : Xo(t) === "object" && t !== null ? [t] : [];
}, F_ = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Mr(t, aU);
  return Z({}, n);
}, Ue = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function sf(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function uU(e) {
  return sf(e) ? window.innerHeight : e.clientHeight;
}
function L_(e) {
  return sf(e) ? window.pageYOffset : e.scrollTop;
}
function rd(e, t) {
  if (sf(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function cU(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function dU(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function wu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : nd, o = L_(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = dU(s, o, i, n);
    rd(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function wS(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? rd(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && rd(e, Math.max(t.offsetTop - o, 0));
}
function fU(e) {
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
function CS() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function pU() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var j_ = !1, hU = {
  get passive() {
    return j_ = !0;
  }
}, Cu = typeof window < "u" ? window : {};
Cu.addEventListener && Cu.removeEventListener && (Cu.addEventListener("p", nd, hU), Cu.removeEventListener("p", nd, !1));
var mU = j_;
function vU(e) {
  return e != null;
}
function gU(e) {
  return Array.isArray(e);
}
function ku(e, t, n) {
  return e ? t : n;
}
var yU = function(t) {
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
}, bU = ["children", "innerProps"], SU = ["children", "innerProps"];
function xU(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = cU(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, y = f.height, h = f.top, S = n.offsetParent.getBoundingClientRect(), v = S.top, m = a ? window.innerHeight : uU(l), b = L_(l), w = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = v - k, _ = m - h, T = P + b, M = d - b - h, I = p - m + b + w, D = b + h - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (_ >= y)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= y && !a)
        return i && wu(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && _ >= r) {
        i && wu(l, I, G);
        var H = a ? _ - w : M - w;
        return {
          placement: "bottom",
          maxHeight: H
        };
      }
      if (o === "auto" || a) {
        var L = t, W = a ? P : T;
        return W >= r && (L = Math.min(W - w - s, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (o === "bottom")
        return i && rd(l, I), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (P >= y)
        return {
          placement: "top",
          maxHeight: t
        };
      if (T >= y && !a)
        return i && wu(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && T >= r || a && P >= r) {
        var K = t;
        return (!a && T >= r || a && P >= r) && (K = a ? P - k : T - k), i && wu(l, D, G), {
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
function wU(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var z_ = function(t) {
  return t === "auto" ? "bottom" : t;
}, CU = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return Z((r = {
    label: "menu"
  }, ji(r, wU(o), "100%"), ji(r, "position", "absolute"), ji(r, "width", "100%"), ji(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, N_ = /* @__PURE__ */ g.createContext(null), kU = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = g.useContext(N_) || {}, c = u.setPortalPlacement, d = g.useRef(null), f = g.useState(o), p = xr(f, 2), y = p[0], h = p[1], S = g.useState(null), v = xr(S, 2), m = v[0], b = v[1], w = l.spacing.controlHeight;
  return km(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", _ = s && !P, T = xU({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: _,
        isFixedPosition: P,
        controlHeight: w
      });
      h(T.maxHeight), b(T.placement), c == null || c(T.placement);
    }
  }, [o, i, a, s, r, c, w]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: m || z_(i),
      maxHeight: y
    })
  });
}, PU = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return ee("div", q({}, Ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, _U = PU, TU = function(t, n) {
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
}, EU = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return ee("div", q({}, Ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, V_ = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, OU = V_, MU = V_, IU = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Mr(t, bU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, RU = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Mr(t, SU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, $U = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, AU = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = g.useRef(null), u = g.useRef(null), c = g.useState(z_(a)), d = xr(c, 2), f = d[0], p = d[1], y = g.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), h = g.useState(null), S = xr(h, 2), v = S[0], m = S[1], b = g.useCallback(function() {
    if (o) {
      var _ = fU(o), T = s === "fixed" ? 0 : window.pageYOffset, M = _[f] + T;
      (M !== (v == null ? void 0 : v.offset) || _.left !== (v == null ? void 0 : v.rect.left) || _.width !== (v == null ? void 0 : v.rect.width)) && m({
        offset: M,
        rect: _
      });
    }
  }, [o, s, f, v == null ? void 0 : v.offset, v == null ? void 0 : v.rect.left, v == null ? void 0 : v.rect.width]);
  km(function() {
    b();
  }, [b]);
  var w = g.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = iU(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  km(function() {
    w();
  }, [w]);
  var k = g.useCallback(function(_) {
    l.current = _, w();
  }, [w]);
  if (!n && s !== "fixed" || !v)
    return null;
  var P = ee("div", q({
    ref: k
  }, Ue(Z(Z({}, t), {}, {
    offset: v.offset,
    position: s,
    rect: v.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), r);
  return ee(N_.Provider, {
    value: y
  }, n ? /* @__PURE__ */ wd.createPortal(P, n) : P);
}, DU = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, FU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return ee("div", q({}, Ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, LU = function(t, n) {
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
}, jU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return ee("div", q({}, Ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, zU = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, NU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, kS, VU = ["size"], BU = ["innerProps", "isRtl", "size"], WU = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, B_ = function(t) {
  var n = t.size, r = Mr(t, VU);
  return ee("svg", q({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: WU
  }, r));
}, qg = function(t) {
  return ee(B_, q({
    size: 20
  }, t), ee("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, W_ = function(t) {
  return ee(B_, q({
    size: 20
  }, t), ee("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, H_ = function(t, n) {
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
}, HU = H_, UU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || ee(W_, null));
}, GU = H_, KU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || ee(qg, null));
}, YU = function(t, n) {
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
}, qU = function(t) {
  var n = t.innerProps;
  return ee("span", q({}, n, Ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, XU = mC(kS || (kS = KH([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), QU = function(t, n) {
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
}, Lp = function(t) {
  var n = t.delay, r = t.offset;
  return ee("span", {
    css: /* @__PURE__ */ Dv({
      animation: "".concat(XU, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, ZU = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = Mr(t, BU);
  return ee("div", q({}, Ue(Z(Z({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), ee(Lp, {
    delay: 0,
    offset: r
  }), ee(Lp, {
    delay: 160,
    offset: !0
  }), ee(Lp, {
    delay: 320,
    offset: !r
  }));
}, JU = function(t, n) {
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
}, eG = function(t) {
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
}, tG = eG, nG = ["data"], rG = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, oG = function(t) {
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
}, iG = function(t, n) {
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
}, aG = function(t) {
  var n = F_(t);
  n.data;
  var r = Mr(n, nG);
  return ee("div", q({}, Ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, sG = oG, lG = ["innerRef", "isDisabled", "isHidden", "inputClassName"], uG = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, cG), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, U_ = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, cG = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, U_)
}, dG = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, U_);
}, fG = function(t) {
  var n = t.cx, r = t.value, o = F_(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Mr(o, lG);
  return ee("div", q({}, Ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), ee("input", q({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: dG(s),
    disabled: a
  }, u)));
}, pG = fG, hG = function(t, n) {
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
}, mG = function(t, n) {
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
}, vG = function(t, n) {
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
}, G_ = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", r, n);
}, gG = G_, yG = G_;
function bG(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(qg, {
    size: 14
  }));
}
var SG = function(t) {
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
}, xG = SG, wG = function(t, n) {
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
}, CG = function(t) {
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
}, kG = CG, PG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, _G = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, TG = _G, EG = function(t, n) {
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
}, OG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return ee("div", q({}, Ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, MG = OG, IG = {
  ClearIndicator: KU,
  Control: tG,
  DropdownIndicator: UU,
  DownChevron: W_,
  CrossIcon: qg,
  Group: sG,
  GroupHeading: aG,
  IndicatorsContainer: NU,
  IndicatorSeparator: qU,
  Input: pG,
  LoadingIndicator: ZU,
  Menu: _U,
  MenuList: EU,
  MenuPortal: AU,
  LoadingMessage: RU,
  NoOptionsMessage: IU,
  MultiValue: xG,
  MultiValueContainer: gG,
  MultiValueLabel: yG,
  MultiValueRemove: bG,
  Option: kG,
  Placeholder: TG,
  SelectContainer: FU,
  SingleValue: MG,
  ValueContainer: jU
}, RG = function(t) {
  return Z(Z({}, IG), t.components);
}, PS = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function $G(e, t) {
  return !!(e === t || PS(e) && PS(t));
}
function AG(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!$G(e[n], t[n]))
      return !1;
  return !0;
}
function DG(e, t) {
  t === void 0 && (t = AG);
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
var FG = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, LG = function(t) {
  return ee("span", q({
    css: FG
  }, t));
}, _S = LG, jG = {
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
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(y, h) {
      return y && y.length ? "".concat(y.indexOf(h) + 1, " of ").concat(y.length) : "";
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
}, zG = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, y = l.isOptionDisabled, h = l.isSearchable, S = l.menuIsOpen, v = l.options, m = l.screenReaderStatus, b = l.tabSelectsValue, w = l["aria-label"], k = l["aria-live"], P = g.useMemo(function() {
    return Z(Z({}, jG), c || {});
  }, [c]), _ = g.useMemo(function() {
    var L = "";
    if (n && P.onChange) {
      var W = n.option, K = n.options, $ = n.removedValue, A = n.removedValues, j = n.value, U = function(se) {
        return Array.isArray(se) ? null : se;
      }, V = $ || W || U(j), Y = V ? d(V) : "", z = K || A || void 0, te = z ? z.map(d) : [], le = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: V && y(V, s),
        label: Y,
        labels: te
      }, n);
      L = P.onChange(le);
    }
    return L;
  }, [n, P, y, s, d]), T = g.useMemo(function() {
    var L = "", W = r || o, K = !!(r && s && s.includes(r));
    if (W && P.onFocus) {
      var $ = {
        focused: W,
        label: d(W),
        isDisabled: y(W, s),
        isSelected: K,
        options: i,
        context: W === r ? "menu" : "value",
        selectValue: s
      };
      L = P.onFocus($);
    }
    return L;
  }, [r, o, d, y, P, i, s]), M = g.useMemo(function() {
    var L = "";
    if (S && v.length && P.onFilter) {
      var W = m({
        count: i.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: W
      });
    }
    return L;
  }, [i, f, S, P, v, m]), I = g.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : S ? "menu" : "input";
      L = P.guidance({
        "aria-label": w,
        context: W,
        isDisabled: r && y(r, s),
        isMulti: p,
        isSearchable: h,
        tabSelectsValue: b
      });
    }
    return L;
  }, [w, r, o, p, y, h, S, P, s, b]), D = "".concat(T, " ").concat(M, " ").concat(I), G = ee(g.Fragment, null, ee("span", {
    id: "aria-selection"
  }, _), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(g.Fragment, null, ee(_S, {
    id: u
  }, H && G), ee(_S, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, NG = zG, Pm = [{
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
}], VG = new RegExp("[" + Pm.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), K_ = {};
for (var jp = 0; jp < Pm.length; jp++)
  for (var zp = Pm[jp], Np = 0; Np < zp.letters.length; Np++)
    K_[zp.letters[Np]] = zp.base;
var Y_ = function(t) {
  return t.replace(VG, function(n) {
    return K_[n];
  });
}, BG = DG(Y_), TS = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, WG = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, HG = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: WG,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? TS(r) : r, d = l ? TS(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = BG(c), d = Y_(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, UG = ["innerRef"];
function GG(e) {
  var t = e.innerRef, n = Mr(e, UG), r = yU(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Dv({
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
var KG = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function YG(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = g.useRef(!1), s = g.useRef(!1), l = g.useRef(0), u = g.useRef(null), c = g.useCallback(function(S, v) {
    if (u.current !== null) {
      var m = u.current, b = m.scrollTop, w = m.scrollHeight, k = m.clientHeight, P = u.current, _ = v > 0, T = w - k - b, M = !1;
      T > v && a.current && (r && r(S), a.current = !1), _ && s.current && (i && i(S), s.current = !1), _ && v > T ? (n && !a.current && n(S), P.scrollTop = w, M = !0, a.current = !0) : !_ && -v > b && (o && !s.current && o(S), P.scrollTop = 0, M = !0, s.current = !0), M && KG(S);
    }
  }, [n, r, o, i]), d = g.useCallback(function(S) {
    c(S, S.deltaY);
  }, [c]), f = g.useCallback(function(S) {
    l.current = S.changedTouches[0].clientY;
  }, []), p = g.useCallback(function(S) {
    var v = l.current - S.changedTouches[0].clientY;
    c(S, v);
  }, [c]), y = g.useCallback(function(S) {
    if (S) {
      var v = mU ? {
        passive: !1
      } : !1;
      S.addEventListener("wheel", d, v), S.addEventListener("touchstart", f, v), S.addEventListener("touchmove", p, v);
    }
  }, [p, f, d]), h = g.useCallback(function(S) {
    S && (S.removeEventListener("wheel", d, !1), S.removeEventListener("touchstart", f, !1), S.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return g.useEffect(function() {
    if (t) {
      var S = u.current;
      return y(S), function() {
        h(S);
      };
    }
  }, [t, y, h]), function(S) {
    u.current = S;
  };
}
var ES = ["boxSizing", "height", "overflow", "paddingRight", "position"], OS = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function MS(e) {
  e.preventDefault();
}
function IS(e) {
  e.stopPropagation();
}
function RS() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function $S() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var AS = !!(typeof window < "u" && window.document && window.document.createElement), Ya = 0, mi = {
  capture: !1,
  passive: !1
};
function qG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = g.useRef({}), i = g.useRef(null), a = g.useCallback(function(l) {
    if (AS) {
      var u = document.body, c = u && u.style;
      if (r && ES.forEach(function(y) {
        var h = c && c[y];
        o.current[y] = h;
      }), r && Ya < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(OS).forEach(function(y) {
          var h = OS[y];
          c && (c[y] = h);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && $S() && (u.addEventListener("touchmove", MS, mi), l && (l.addEventListener("touchstart", RS, mi), l.addEventListener("touchmove", IS, mi))), Ya += 1;
    }
  }, [r]), s = g.useCallback(function(l) {
    if (AS) {
      var u = document.body, c = u && u.style;
      Ya = Math.max(Ya - 1, 0), r && Ya < 1 && ES.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && $S() && (u.removeEventListener("touchmove", MS, mi), l && (l.removeEventListener("touchstart", RS, mi), l.removeEventListener("touchmove", IS, mi)));
    }
  }, [r]);
  return g.useEffect(function() {
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
var XG = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, QG = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function ZG(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = YG({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = qG({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return ee(g.Fragment, null, n && ee("div", {
    onClick: XG,
    css: QG
  }), t(d));
}
var JG = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, eK = function(t) {
  var n = t.name, r = t.onFocus;
  return ee("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: JG,
    value: "",
    onChange: function() {
    }
  });
}, tK = eK, nK = function(t) {
  return t.label;
}, rK = function(t) {
  return t.label;
}, oK = function(t) {
  return t.value;
}, iK = function(t) {
  return !!t.isDisabled;
}, aK = {
  clearIndicator: GU,
  container: DU,
  control: JU,
  dropdownIndicator: HU,
  group: rG,
  groupHeading: iG,
  indicatorsContainer: zU,
  indicatorSeparator: YU,
  input: uG,
  loadingIndicator: QU,
  loadingMessage: MU,
  menu: CU,
  menuList: TU,
  menuPortal: $U,
  multiValue: hG,
  multiValueLabel: mG,
  multiValueRemove: vG,
  noOptionsMessage: OU,
  option: wG,
  placeholder: PG,
  singleValue: EG,
  valueContainer: LU
}, sK = {
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
}, lK = 4, q_ = 4, uK = 38, cK = q_ * 2, dK = {
  baseUnit: q_,
  controlHeight: uK,
  menuGutter: cK
}, Vp = {
  borderRadius: lK,
  colors: sK,
  spacing: dK
}, fK = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: CS(),
  captureMenuScroll: !CS(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: HG(),
  formatGroupLabel: nK,
  getOptionLabel: rK,
  getOptionValue: oK,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: iK,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !pU(),
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
function DS(e, t, n, r) {
  var o = J_(e, t, n), i = eT(e, t, n), a = Z_(e, t), s = od(e, t);
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
function X_(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return DS(e, a, t, s);
      }).filter(function(a) {
        return FS(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = DS(e, n, t, r);
    return FS(e, i) ? i : void 0;
  }).filter(vU);
}
function Q_(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, M_(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function pK(e, t) {
  return Q_(X_(e, t));
}
function FS(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!nT(e) || !i) && tT(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function hK(e, t) {
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
function mK(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var Z_ = function(t, n) {
  return t.getOptionLabel(n);
}, od = function(t, n) {
  return t.getOptionValue(n);
};
function J_(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function eT(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = od(e, t);
  return n.some(function(o) {
    return od(e, o) === r;
  });
}
function tT(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var nT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, vK = 1, rT = /* @__PURE__ */ function(e) {
  zH(n, e);
  var t = WH(n);
  function n(r) {
    var o;
    if (LH(this, n), o = t.call(this, r), o.state = {
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
      var l = o.props, u = l.blurInputOnSelect, c = l.isMulti, d = l.name, f = o.state.selectValue, p = c && o.isOptionSelected(s, f), y = o.isOptionDisabled(s, f);
      if (p) {
        var h = o.getOptionValue(s);
        o.setValue(f.filter(function(S) {
          return o.getOptionValue(S) !== h;
        }), "deselect-option", s);
      } else if (!y)
        c ? o.setValue([].concat(M_(f), [s]), "select-option", s) : o.setValue(s, "select-option");
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
      }), f = ku(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(ku(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = ku(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return lU.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return Z_(o.props, s);
    }, o.getOptionValue = function(s) {
      return od(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = aK[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return RG(o.props);
    }, o.buildCategorizedOptions = function() {
      return X_(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return Q_(o.buildCategorizedOptions());
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
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && sf(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
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
      return nT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, y = l.isDisabled, h = l.menuIsOpen, S = l.onKeyDown, v = l.tabSelectsValue, m = l.openMenuOnFocus, b = o.state, w = b.focusedOption, k = b.focusedValue, P = b.selectValue;
      if (!y && !(typeof S == "function" && (S(s), s.defaultPrevented))) {
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
            if (o.isComposing || s.shiftKey || !h || !v || !w || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            m && o.isOptionSelected(w, P))
              return;
            o.selectOption(w);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (h) {
              if (!w || o.isComposing)
                return;
              o.selectOption(w);
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
            if (!w)
              return;
            o.selectOption(w);
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
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++vK), o.state.selectValue = xS(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return jH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && wS(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (wS(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Vp) : Z(Z({}, Vp), this.props.theme) : Vp;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, y = d.options, h = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: h,
        isMulti: f,
        isRtl: p,
        options: y,
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
      return J_(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return eT(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return tT(this.props, o, i);
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
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), y = p.Input, h = this.state, S = h.inputIsHidden, v = h.ariaSelection, m = this.commonProps, b = s || this.getElementId("input"), w = Z(Z(Z({
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
        }), this.hasValue() ? (v == null ? void 0 : v.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ g.createElement(y, q({}, m, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: b,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: S,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: c,
          type: "text",
          value: l
        }, w)) : /* @__PURE__ */ g.createElement(GG, q({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: nd,
          onFocus: this.onInputFocus,
          disabled: i,
          tabIndex: u,
          inputMode: "none",
          form: c,
          value: ""
        }, w));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, y = p.controlShouldRenderValue, h = p.isDisabled, S = p.isMulti, v = p.inputValue, m = p.placeholder, b = this.state, w = b.selectValue, k = b.focusedValue, P = b.isFocused;
      if (!this.hasValue() || !y)
        return v ? null : /* @__PURE__ */ g.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: h,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), m);
      if (S)
        return w.map(function(T, M) {
          var I = T === k, D = "".concat(o.getOptionLabel(T), "-").concat(o.getOptionValue(T));
          return /* @__PURE__ */ g.createElement(a, q({}, f, {
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
      if (v)
        return null;
      var _ = w[0];
      return /* @__PURE__ */ g.createElement(c, q({}, f, {
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
      return /* @__PURE__ */ g.createElement(i, q({}, a, {
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
      return /* @__PURE__ */ g.createElement(i, q({}, a, {
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
      return /* @__PURE__ */ g.createElement(a, q({}, s, {
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
      return /* @__PURE__ */ g.createElement(i, q({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, y = this.commonProps, h = this.state.focusedOption, S = this.props, v = S.captureMenuScroll, m = S.inputValue, b = S.isLoading, w = S.loadingMessage, k = S.minMenuHeight, P = S.maxMenuHeight, _ = S.menuIsOpen, T = S.menuPlacement, M = S.menuPosition, I = S.menuPortalTarget, D = S.menuShouldBlockScroll, G = S.menuShouldScrollIntoView, H = S.noOptionsMessage, L = S.onMenuScrollToTop, W = S.onMenuScrollToBottom;
      if (!_)
        return null;
      var K = function(z, te) {
        var le = z.type, ae = z.data, se = z.isDisabled, me = z.isSelected, ke = z.label, et = z.value, qe = h === ae, on = se ? void 0 : function() {
          return o.onOptionHover(ae);
        }, _n = se ? void 0 : function() {
          return o.selectOption(ae);
        }, Ir = "".concat(o.getElementId("option"), "-").concat(te), fe = {
          id: Ir,
          onClick: _n,
          onMouseMove: on,
          onMouseOver: on,
          tabIndex: -1
        };
        return /* @__PURE__ */ g.createElement(p, q({}, y, {
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
            return /* @__PURE__ */ g.createElement(a, q({}, y, {
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
      else if (b) {
        var A = w({
          inputValue: m
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ g.createElement(d, y, A);
      } else {
        var j = H({
          inputValue: m
        });
        if (j === null)
          return null;
        $ = /* @__PURE__ */ g.createElement(f, y, j);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: T,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ g.createElement(kU, q({}, y, U), function(Y) {
        var z = Y.ref, te = Y.placerProps, le = te.placement, ae = te.maxHeight;
        return /* @__PURE__ */ g.createElement(l, q({}, y, U, {
          innerRef: z,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: le
        }), /* @__PURE__ */ g.createElement(ZG, {
          captureEnabled: v,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ g.createElement(u, q({}, y, {
            innerRef: function(ke) {
              o.getMenuListRef(ke), se(ke);
            },
            isLoading: b,
            maxHeight: ae,
            focusedOption: h
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ g.createElement(c, q({}, y, {
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
        return /* @__PURE__ */ g.createElement(tK, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(h) {
              return o.getOptionValue(h);
            }).join(a);
            return /* @__PURE__ */ g.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(h, S) {
              return /* @__PURE__ */ g.createElement("input", {
                key: "i-".concat(S),
                name: u,
                type: "hidden",
                value: o.getOptionValue(h)
              });
            }) : /* @__PURE__ */ g.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ g.createElement("div", null, p);
          }
        else {
          var y = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ g.createElement("input", {
            name: u,
            type: "hidden",
            value: y
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, i = this.state, a = i.ariaSelection, s = i.focusedOption, l = i.focusedValue, u = i.isFocused, c = i.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ g.createElement(NG, q({}, o, {
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
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, y = this.state.isFocused, h = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ g.createElement(s, q({}, h, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: y
      }), this.renderLiveRegion(), /* @__PURE__ */ g.createElement(i, q({}, h, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: y,
        menuIsOpen: p
      }), /* @__PURE__ */ g.createElement(l, q({}, h, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ g.createElement(a, q({}, h, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, y = o.menuIsOpen, h = o.inputValue, S = o.isMulti, v = xS(p), m = {};
      if (a && (p !== a.value || f !== a.options || y !== a.menuIsOpen || h !== a.inputValue)) {
        var b = y ? pK(o, v) : [], w = s ? hK(i, v) : null, k = mK(i, b);
        m = {
          selectValue: v,
          focusedOption: k,
          focusedValue: w,
          clearFocusValueOnUpdate: !1
        };
      }
      var P = l != null && o !== a ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, _ = u, T = c && d;
      return c && !T && (_ = {
        value: ku(S, v, v[0] || null),
        options: v,
        action: "initial-input-focus"
      }, T = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (_ = null), Z(Z(Z({}, m), P), {}, {
        prevProps: o,
        ariaSelection: _,
        prevWasFocused: T
      });
    }
  }]), n;
}(g.Component);
rT.defaultProps = fK;
var gK = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = FH(e);
  return /* @__PURE__ */ g.createElement(rT, q({
    ref: t
  }, n));
}), yK = gK, bK = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function _m() {
  return _m = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _m.apply(this, arguments);
}
function SK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var oT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = SK(t, bK);
  return _m({}, n);
}, xK = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, wK = function(t) {
  return xK(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, zn = function(t) {
  var n = mo(), r = wK(n.components.Input.defaultProps.size), o = t ?? r, i = K9(typeof o == "string" ? [o] : o, {
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
var CK = function(t) {
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
}, kK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, y = l.controlShouldRenderValue, h = zn(c), S = kt("Input", {
    size: h,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), v = {
    display: i && a && y ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: S.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, m = u != null && u.valueContainer ? u.valueContainer(v, t) : v;
  return /* @__PURE__ */ re.createElement(Fe, Sa({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: m
  }), n);
}, PK = function(t) {
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
}, _K = ["height", "h"];
function Cn() {
  return Cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Cn.apply(this, arguments);
}
function TK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var EK = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, h = c.errorBorderColor, S = c.isInvalid, v = c.isReadOnly, m = zn(f), b = kt("Input", {
    size: m,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: h
  }), w = b.field, k = w.height, P = w.h, _ = TK(w, _K), T = k || P, M = Cn({}, _, {
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
  return /* @__PURE__ */ re.createElement(Fe, Cn({
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
    "data-invalid": S ? !0 : void 0,
    "data-disabled": s ? !0 : void 0,
    "data-readonly": v ? !0 : void 0
  }), o);
}, OK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = Cn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ re.createElement(A2, {
    className: r({
      "indicator-separator": !0
    }, n),
    sx: u,
    orientation: "vertical"
  });
}, MK = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, Cn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, IK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = zn(u), y = kt("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), h = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, S = h[p], v = Cn({}, y.addon, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 0,
    borderWidth: 0,
    fontSize: S
  }, l && {
    background: "transparent",
    padding: 0,
    width: 6,
    marginRight: 2,
    marginLeft: 1,
    cursor: "inherit"
  }), m = s != null && s.dropdownIndicator ? s.dropdownIndicator(v, t) : v, b = {
    height: "1em",
    width: "1em"
  }, w = s != null && s.downChevron ? s.downChevron(b, t) : b;
  return /* @__PURE__ */ re.createElement(Fe, Cn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: m
  }), n || /* @__PURE__ */ re.createElement(MK, {
    sx: w
  }));
}, RK = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, Cn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, $K = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = ei("CloseButton", {
    size: u
  }), d = Cn({}, c, {
    marginX: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    cursor: "pointer"
  }), f = s != null && s.clearIndicator ? s.clearIndicator(d, t) : d, p = {
    width: "1em",
    height: "1em"
  }, y = s != null && s.crossIcon ? s.crossIcon(p, t) : p;
  return /* @__PURE__ */ re.createElement(Fe, Cn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ re.createElement(RK, {
    sx: y
  }));
}, AK = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = zn(s), y = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, h = y[p], S = {
    marginRight: 3
  }, v = a != null && a.loadingIndicator ? a.loadingIndicator(S, t) : S;
  return /* @__PURE__ */ re.createElement(qd, Cn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: v
  }, o, {
    size: f || h,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const DK = EK;
var FK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function Os() {
  return Os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Os.apply(this, arguments);
}
function LK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var jK = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = oT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = LK(l, FK), y = {
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
    _after: Os({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, y)
  }, S = a != null && a.inputContainer ? a.inputContainer(h, t) : h, v = Os({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, y), m = a != null && a.input ? a.input(v, t) : v;
  return /* @__PURE__ */ re.createElement(Fe, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: S
  }, /* @__PURE__ */ re.createElement(X.input, Os({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: m,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const zK = jK;
var NK = ["data"];
function VK(e, t) {
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
var BK = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, WK = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[BK(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ re.createElement(tf, null, /* @__PURE__ */ re.createElement(Fe, Wt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const HK = WK;
var UK = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, h = c.errorBorderColor, S = kt("Menu"), v = zn(f), m = kt("Input", {
    size: v,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: h
  }), b = m.field, w = Wt({}, S.list, {
    minW: "100%",
    maxHeight: s + "px",
    overflowY: "auto",
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": b == null ? void 0 : b["--input-border-radius"],
    borderRadius: (b == null ? void 0 : b.borderRadius) || ((n = S.list) == null ? void 0 : n.borderRadius),
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }), k = d != null && d.menuList ? d.menuList(w, t) : w;
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
}, GK = function(t) {
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
  }, f = s != null && s.noOptionsMessage ? s.noOptionsMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, r),
    sx: f
  }), n);
}, YK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, y = {}, h = p != null && p.group ? p.group(y, t) : y;
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
}, qK = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = oT(t);
  l.data;
  var u = VK(l, NK), c = kt("Menu"), d = zn(a), f = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, p = {
    sm: "0.4rem 0.8rem",
    md: "0.5rem 1rem",
    lg: "0.6rem 1.2rem"
  }, y = Wt({}, c.groupTitle, {
    fontSize: f[d],
    padding: p[d],
    margin: 0,
    borderBottomWidth: s ? "1px" : 0,
    position: s ? "sticky" : "static",
    top: -2,
    bg: c.list.bg,
    zIndex: 1
  }), h = i != null && i.groupHeading ? i.groupHeading(y, t) : y;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: h
  }));
}, XK = function(t) {
  return /* @__PURE__ */ re.createElement("svg", Wt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ re.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, QK = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, y = c.hideSelectedOptions, h = c.selectedOptionStyle, S = c.selectedOptionColorScheme, v = kt("Menu").item, m = zn(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, w = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = $y(S + ".500", S + ".300"), P = $y("white", "black"), _ = h === "check" && (!p || y === !1), T = h === "color", M = Wt({}, v, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: m,
    paddingX: b[m],
    paddingY: w[m]
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
  }), _ && /* @__PURE__ */ re.createElement(nf, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ re.createElement(XK, null)), a);
};
function $n() {
  return $n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $n.apply(this, arguments);
}
var ZK = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, JK = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, iT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, eY = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, y = o.Label, h = o.Remove, S = d.chakraStyles, v = d.colorScheme, m = d.tagVariant, b = d.size, w = zn(b), k = "", P = "", _ = !1;
  ZK(a) && (k = a.colorScheme), JK(a) && (P = a.variant), iT(a) && (_ = a.isFixed);
  var T = kt("Tag", {
    size: w,
    colorScheme: k || v,
    variant: P || m || (_ ? "solid" : "subtle")
  }), M = $n({}, T.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), I = S != null && S.multiValue ? S.multiValue(M, t) : M, D = $n({}, T.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), G = S != null && S.multiValueLabel ? S.multiValueLabel(D, t) : D, H = $n({}, T.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = S != null && S.multiValueRemove ? S.multiValueRemove(H, t) : H;
  return /* @__PURE__ */ re.createElement(p, {
    data: a,
    innerProps: $n({
      className: i({
        "multi-value": !0,
        "multi-value--is-disabled": l
      }, r)
    }, s),
    sx: I,
    selectProps: d
  }, /* @__PURE__ */ re.createElement(y, {
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
    innerProps: $n({
      className: i({
        "multi-value__remove": !0
      }, r),
      "aria-label": "Remove " + (n || "option")
    }, c),
    sx: L,
    selectProps: d,
    isFocused: u
  }));
}, tY = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, $n({}, r, {
    sx: o
  }), n);
}, nY = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, $n({}, r, {
    sx: o
  }), n);
}, rY = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, $n({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, oY = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return iT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement(Fe, $n({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement(rY, null));
};
const iY = eY;
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
var aY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, Tm({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const sY = aY;
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
var lY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement(Fe, Em({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const uY = lY;
var cY = {
  ClearIndicator: $K,
  Control: DK,
  DropdownIndicator: IK,
  Group: YK,
  GroupHeading: qK,
  IndicatorSeparator: OK,
  IndicatorsContainer: PK,
  Input: zK,
  LoadingIndicator: AK,
  LoadingMessage: GK,
  Menu: HK,
  MenuList: UK,
  MultiValue: iY,
  MultiValueContainer: tY,
  MultiValueLabel: nY,
  MultiValueRemove: oY,
  NoOptionsMessage: KK,
  Option: QK,
  Placeholder: sY,
  SelectContainer: CK,
  SingleValue: uY,
  ValueContainer: kK
};
const dY = cY;
var fY = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function id() {
  return id = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, id.apply(this, arguments);
}
function pY(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var hY = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, y = t.tagVariant, h = t.selectedOptionStyle, S = h === void 0 ? "color" : h, v = t.selectedOptionColorScheme, m = t.selectedOptionColor, b = t.variant, w = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, _ = P === void 0 ? {} : P, T = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = pY(t, fY), G = mo(), H = G.components.Input.defaultProps.variant, L = NP({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: T,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = S, $ = ["color", "check"];
  $.includes(S) || (K = "color");
  var A = v || m || "blue";
  typeof A != "string" && (A = "blue");
  var j = id({
    // Allow overriding of custom components
    components: id({}, dY, o),
    // Custom select props
    colorScheme: s,
    size: i,
    tagVariant: y,
    selectedOptionStyle: K,
    selectedOptionColorScheme: A,
    variant: b ?? H,
    chakraStyles: _,
    focusBorderColor: w,
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
const mY = hY;
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
var vY = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = mY(e);
  return /* @__PURE__ */ re.createElement(yK, Om({
    ref: t
  }, n));
});
const gY = vY;
function yY({ workflow: e }) {
  var c;
  const [t, n] = g.useState([]), [r, o] = g.useState(""), i = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [a, s] = g.useState(i);
  if (g.useEffect(() => {
    Ce && n(Ce.listAll() ?? []);
  }, []), g.useEffect(() => {
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
  return /* @__PURE__ */ x.jsxs(Ng, { isLazy: !0, children: [
    /* @__PURE__ */ x.jsx(zg, { children: /* @__PURE__ */ x.jsx(gn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ x.jsx(w_, { color: "#718096" }) }) }),
    /* @__PURE__ */ x.jsxs(Hg, { children: [
      /* @__PURE__ */ x.jsx(Vg, {}),
      /* @__PURE__ */ x.jsx(Wg, {}),
      /* @__PURE__ */ x.jsx(p_, { children: /* @__PURE__ */ x.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ x.jsxs(Bg, { children: [
        /* @__PURE__ */ x.jsx(
          gY,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            onChange: (d) => {
              s(d), bm(e.id, {
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
        /* @__PURE__ */ x.jsxs(
          xt,
          {
            gap: 4,
            mt: Math.min(u, Math.max(t.length, 3) * 37),
            children: [
              /* @__PURE__ */ x.jsx(
                Jd,
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
              /* @__PURE__ */ x.jsx(
                gn,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ x.jsx(x_, { size: 16 }),
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
function bY({
  isSelected: e,
  workflow: t,
  loadWorkflowID: n,
  onDelete: r
}) {
  const { colorMode: o } = Pa();
  return /* @__PURE__ */ x.jsxs(xt, { w: "100%", justify: "space-between", children: [
    /* @__PURE__ */ x.jsxs(
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
          /* @__PURE__ */ x.jsx(nr, { fontWeight: "500", children: t.name ?? "untitled" }),
          /* @__PURE__ */ x.jsxs(nr, { color: "GrayText", ml: 2, fontSize: "sm", children: [
            "Updated: ",
            P_(t.updateTime)
          ] })
        ]
      }
    ),
    /* @__PURE__ */ x.jsx(yY, { workflow: t }),
    /* @__PURE__ */ x.jsx(Ng, { isLazy: !0, children: ({ isOpen: i, onClose: a }) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      /* @__PURE__ */ x.jsx(zg, { children: /* @__PURE__ */ x.jsx(C_, { color: "#F56565", cursor: "pointer" }) }),
      /* @__PURE__ */ x.jsxs(Hg, { children: [
        /* @__PURE__ */ x.jsx(Vg, {}),
        /* @__PURE__ */ x.jsx(Wg, {}),
        /* @__PURE__ */ x.jsxs(Bg, { children: [
          /* @__PURE__ */ x.jsx(nr, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
          /* @__PURE__ */ x.jsx(
            gn,
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
function SY() {
  const e = g.useRef(null), { setRecentFiles: t } = g.useContext(E_), n = async (o) => {
    const i = o.target.files;
    if (!i)
      return;
    const a = Array.from(i);
    console.log("filearr", a), await Promise.all(
      a.map((s) => r(s))
    ), t && t(rc());
  }, r = async (o) => new Promise((i, a) => {
    const s = new FileReader();
    s.onload = (l) => {
      var u;
      try {
        const c = (u = l.target) == null ? void 0 : u.result;
        typeof c == "string" ? i(
          xm({
            json: c,
            name: o.name.replace(".json", "")
          })
        ) : a(new Error("File content is not a string"));
      } catch (c) {
        a(c);
      }
    }, s.onerror = a, s.readAsText(o);
  });
  return /* @__PURE__ */ x.jsxs(
    gn,
    {
      leftIcon: /* @__PURE__ */ x.jsx(oH, {}),
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
        /* @__PURE__ */ x.jsx(
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
const LS = 6;
function xY({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n
}) {
  const [r, o] = g.useState([]), { curFlowID: i } = g.useContext(T_), [a, s] = g.useState(), [l, u] = g.useState(!1), c = g.useRef(
    // (window.localStorage.getItem(sortTypeLocalStorageKey) as ESortTypes) ??
    Ur.RECENTLY_MODIFIED
  ), d = (h) => {
    s(h), o(rc().filter((S) => {
      var v;
      return (v = S.tags) == null ? void 0 : v.includes(h);
    }));
  }, f = () => {
    const h = rc(c.current);
    o(h);
  }, p = (h) => {
    o(__(r, h)), c.current = h, window.localStorage.setItem(wH, h);
  }, y = (h) => {
    PH(h), f();
  };
  return g.useEffect(() => {
    f();
  }, []), /* @__PURE__ */ x.jsx(E_.Provider, { value: { setRecentFiles: o }, children: /* @__PURE__ */ x.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ x.jsxs(
    LW,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ x.jsx(El, {}),
        /* @__PURE__ */ x.jsxs(f_, { children: [
          /* @__PURE__ */ x.jsx(Tl, { children: /* @__PURE__ */ x.jsxs(xt, { alignItems: "center", justifyContent: "space-between", children: [
            /* @__PURE__ */ x.jsxs(xt, { gap: 4, children: [
              /* @__PURE__ */ x.jsx(nr, { mr: 4, children: "Workflows" }),
              /* @__PURE__ */ x.jsx(SY, {})
            ] }),
            /* @__PURE__ */ x.jsx(xt, { alignItems: "center", children: /* @__PURE__ */ x.jsx(IH, {}) })
          ] }) }),
          /* @__PURE__ */ x.jsxs(Ol, { children: [
            /* @__PURE__ */ x.jsxs(xt, { spacing: 2, wrap: "wrap", mb: 0, children: [
              a != null && /* @__PURE__ */ x.jsx(
                rl,
                {
                  "aria-label": "Close",
                  size: "sm",
                  icon: /* @__PURE__ */ x.jsx(dH, {}),
                  onClick: () => {
                    s(void 0), o(rc());
                  }
                }
              ),
              Ce == null ? void 0 : Ce.listAll().slice(0, l ? void 0 : LS).map((h) => /* @__PURE__ */ x.jsx(
                gn,
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
              ((Ce == null ? void 0 : Ce.listAll().length) ?? 0) > LS && /* @__PURE__ */ x.jsx(
                rl,
                {
                  "aria-label": "Show-all-tags",
                  size: "sm",
                  icon: l ? /* @__PURE__ */ x.jsx(rH, {}) : /* @__PURE__ */ x.jsx(mS, {}),
                  onClick: () => u(!l)
                }
              )
            ] }),
            /* @__PURE__ */ x.jsx(xt, { mb: 2, p: 0, justifyContent: "end", children: /* @__PURE__ */ x.jsxs(tf, { closeOnSelect: !0, children: [
              /* @__PURE__ */ x.jsx(
                Lg,
                {
                  as: gn,
                  variant: "ghost",
                  size: "xs",
                  pr: 0,
                  rightIcon: /* @__PURE__ */ x.jsx(mS, { size: "16" }),
                  children: /* @__PURE__ */ x.jsxs(xt, { children: [
                    /* @__PURE__ */ x.jsx(nr, { children: "Sort by:" }),
                    /* @__PURE__ */ x.jsx(nr, { display: "inline-block", children: c.current })
                  ] })
                }
              ),
              /* @__PURE__ */ x.jsx(Fg, { children: /* @__PURE__ */ x.jsx(
                t_,
                {
                  value: c.current,
                  type: "radio",
                  onChange: (h) => p(h),
                  children: Object.values(Ur).map((h, S) => /* @__PURE__ */ x.jsx(jg, { value: h, children: h }, S))
                }
              ) })
            ] }) }),
            r.map((h) => /* @__PURE__ */ x.jsx(
              bY,
              {
                isSelected: h.id === i,
                workflow: h,
                loadWorkflowID: t,
                onDelete: y
              }
            ))
          ] })
        ] })
      ]
    }
  ) }) });
}
const wY = {
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
function CY() {
  g.useState([]);
  const e = g.useRef({}), [t, n] = g.useState(null), [r, o] = g.useState("root"), [i, a] = g.useState(!0), [s, l] = g.useState(null), u = g.useRef(null), { colorMode: c, toggleColorMode: d } = Pa(), f = (m) => {
    u.current = m, l(m);
  }, p = async () => {
    var w;
    const m = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(k) {
      },
      async addCustomNodeDefs(k) {
        e.current = k;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    jl.registerExtension(m);
    try {
      await kH();
    } catch (k) {
      console.error("error loading db", k);
    }
    a(!1);
    const b = localStorage.getItem("curFlowID");
    if (b)
      f(b), _e && n(((w = _e[b]) == null ? void 0 : w.name) ?? "");
    else {
      const k = localStorage.getItem("workflow"), P = xm({ json: k ?? "" });
      f(P.id), n(P.name ?? "");
    }
  };
  g.useEffect(() => {
    p(), setInterval(() => {
      if (u.current != null) {
        const m = JSON.stringify(jl.graph.serialize());
        localStorage.setItem("curFlowID", u.current), m != null && bm(u.current, {
          json: m
        });
      }
    }, 1e3);
  }, []);
  const y = (m) => {
    u.current != null && bm(u.current, {
      name: m
    });
  }, h = g.useCallback(
    nI(y, 700),
    []
  ), S = (m) => {
    if (_e == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    f(m);
    const b = _e[m];
    if (b == null) {
      alert("Error: Workflow not found! id: " + m);
      return;
    }
    jl.loadGraphData(JSON.parse(b.json)), n(b.name), o("root");
  }, v = () => {
    const m = wY, b = xm({ json: JSON.stringify(m) });
    f(b.id), n(b.name), jl.loadGraphData(m);
  };
  return i ? null : /* @__PURE__ */ x.jsx(T_.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ x.jsxs(
    Fe,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ x.jsxs(
          xt,
          {
            style: {
              padding: 8,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
            children: [
              /* @__PURE__ */ x.jsxs(xt, { children: [
                /* @__PURE__ */ x.jsx(
                  gn,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => o("recentFlows"),
                    children: /* @__PURE__ */ x.jsxs(xt, { gap: 1, children: [
                      /* @__PURE__ */ x.jsx(S_, { size: 21 }),
                      /* @__PURE__ */ x.jsx(cH, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ x.jsx(
                  gn,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => v(),
                    px: 2.5,
                    children: /* @__PURE__ */ x.jsxs(xt, { gap: 1, children: [
                      /* @__PURE__ */ x.jsx(x_, { size: 16, color: "white" }),
                      /* @__PURE__ */ x.jsx(nr, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ x.jsx(
                  Jd,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: t ?? "",
                    maxWidth: 470,
                    onChange: (m) => {
                      n(m.target.value), h(m.target.value);
                    },
                    style: { width: `${(t == null ? void 0 : t.length) ?? 20}ch` }
                  }
                )
              ] }),
              /* @__PURE__ */ x.jsx(xt, { children: /* @__PURE__ */ x.jsx(gn, { onClick: d, variant: "link", children: c === "light" ? /* @__PURE__ */ x.jsx(sH, { size: 20 }) : /* @__PURE__ */ x.jsx(uH, { size: 20 }) }) })
            ]
          }
        ),
        r === "recentFlows" && /* @__PURE__ */ x.jsx(
          xY,
          {
            onclose: () => o("root"),
            loadWorkflowID: S,
            onClickNewFlow: () => {
              v(), o("root");
            }
          }
        )
      ]
    }
  ) });
}
const aT = document.createElement("div");
document.body.append(aT);
const kY = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, PY = a3({ config: kY });
Bp.createRoot(aT).render(
  /* @__PURE__ */ x.jsx(re.StrictMode, { children: /* @__PURE__ */ x.jsxs(kB, { children: [
    /* @__PURE__ */ x.jsx(gR, { initialColorMode: PY.config.initialColorMode }),
    /* @__PURE__ */ x.jsx(CY, {})
  ] }) })
);
const Mm = document.body, _Y = { attributes: !0, attributeFilter: ["class"] }, TY = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of Mm.classList)
        r.includes("chakra") && Mm.classList.remove(r);
}, EY = new MutationObserver(TY);
EY.observe(Mm, _Y);
