
var c_ = Object.defineProperty;
var d_ = (e, t, n) => t in e ? c_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var yf = (e, t, n) => (d_(e, typeof t != "symbol" ? t + "" : t, n), n);
import { app as Al } from "/scripts/app.js";
function f_(e, t) {
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
function sl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jS = { exports: {} }, nd = {}, NS = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll = Symbol.for("react.element"), p_ = Symbol.for("react.portal"), h_ = Symbol.for("react.fragment"), m_ = Symbol.for("react.strict_mode"), v_ = Symbol.for("react.profiler"), g_ = Symbol.for("react.provider"), y_ = Symbol.for("react.context"), b_ = Symbol.for("react.forward_ref"), S_ = Symbol.for("react.suspense"), x_ = Symbol.for("react.memo"), w_ = Symbol.for("react.lazy"), p0 = Symbol.iterator;
function C_(e) {
  return e === null || typeof e != "object" ? null : (e = p0 && e[p0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var VS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, BS = Object.assign, WS = {};
function Sa(e, t, n) {
  this.props = e, this.context = t, this.refs = WS, this.updater = n || VS;
}
Sa.prototype.isReactComponent = {};
Sa.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sa.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function HS() {
}
HS.prototype = Sa.prototype;
function Mm(e, t, n) {
  this.props = e, this.context = t, this.refs = WS, this.updater = n || VS;
}
var Im = Mm.prototype = new HS();
Im.constructor = Mm;
BS(Im, Sa.prototype);
Im.isPureReactComponent = !0;
var h0 = Array.isArray, US = Object.prototype.hasOwnProperty, Rm = { current: null }, GS = { key: !0, ref: !0, __self: !0, __source: !0 };
function KS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      US.call(t, r) && !GS.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: ll, type: e, key: i, ref: a, props: o, _owner: Rm.current };
}
function k_(e, t) {
  return { $$typeof: ll, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function $m(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ll;
}
function P_(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var m0 = /\/+/g;
function bf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? P_("" + e.key) : t.toString(36);
}
function wu(e, t, n, r, o) {
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
          case ll:
          case p_:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + bf(a, 0) : r, h0(o) ? (n = "", e != null && (n = e.replace(m0, "$&/") + "/"), wu(o, t, n, "", function(u) {
      return u;
    })) : o != null && ($m(o) && (o = k_(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(m0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", h0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + bf(i, s);
      a += wu(i, t, n, l, o);
    }
  else if (l = C_(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + bf(i, s++), a += wu(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Dl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return wu(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function E_(e) {
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
var Ot = { current: null }, Cu = { transition: null }, T_ = { ReactCurrentDispatcher: Ot, ReactCurrentBatchConfig: Cu, ReactCurrentOwner: Rm };
ue.Children = { map: Dl, forEach: function(e, t, n) {
  Dl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Dl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Dl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!$m(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = Sa;
ue.Fragment = h_;
ue.Profiler = v_;
ue.PureComponent = Mm;
ue.StrictMode = m_;
ue.Suspense = S_;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T_;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = BS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Rm.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      US.call(t, l) && !GS.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: ll, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ue.createContext = function(e) {
  return e = { $$typeof: y_, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: g_, _context: e }, e.Consumer = e;
};
ue.createElement = KS;
ue.createFactory = function(e) {
  var t = KS.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: b_, render: e };
};
ue.isValidElement = $m;
ue.lazy = function(e) {
  return { $$typeof: w_, _payload: { _status: -1, _result: e }, _init: E_ };
};
ue.memo = function(e, t) {
  return { $$typeof: x_, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = Cu.transition;
  Cu.transition = {};
  try {
    e();
  } finally {
    Cu.transition = t;
  }
};
ue.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
ue.useCallback = function(e, t) {
  return Ot.current.useCallback(e, t);
};
ue.useContext = function(e) {
  return Ot.current.useContext(e);
};
ue.useDebugValue = function() {
};
ue.useDeferredValue = function(e) {
  return Ot.current.useDeferredValue(e);
};
ue.useEffect = function(e, t) {
  return Ot.current.useEffect(e, t);
};
ue.useId = function() {
  return Ot.current.useId();
};
ue.useImperativeHandle = function(e, t, n) {
  return Ot.current.useImperativeHandle(e, t, n);
};
ue.useInsertionEffect = function(e, t) {
  return Ot.current.useInsertionEffect(e, t);
};
ue.useLayoutEffect = function(e, t) {
  return Ot.current.useLayoutEffect(e, t);
};
ue.useMemo = function(e, t) {
  return Ot.current.useMemo(e, t);
};
ue.useReducer = function(e, t, n) {
  return Ot.current.useReducer(e, t, n);
};
ue.useRef = function(e) {
  return Ot.current.useRef(e);
};
ue.useState = function(e) {
  return Ot.current.useState(e);
};
ue.useSyncExternalStore = function(e, t, n) {
  return Ot.current.useSyncExternalStore(e, t, n);
};
ue.useTransition = function() {
  return Ot.current.useTransition();
};
ue.version = "18.2.0";
NS.exports = ue;
var m = NS.exports;
const re = /* @__PURE__ */ sl(m), v0 = /* @__PURE__ */ f_({
  __proto__: null,
  default: re
}, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __ = m, O_ = Symbol.for("react.element"), M_ = Symbol.for("react.fragment"), I_ = Object.prototype.hasOwnProperty, R_ = __.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function YS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    I_.call(t, r) && !$_.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: O_, type: e, key: i, ref: a, props: o, _owner: R_.current };
}
nd.Fragment = M_;
nd.jsx = YS;
nd.jsxs = YS;
jS.exports = nd;
var w = jS.exports, Bp = {}, qS = { exports: {} }, tn = {}, XS = { exports: {} }, QS = {};
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
  function t(A, z) {
    var U = A.length;
    A.push(z);
    e:
      for (; 0 < U; ) {
        var V = U - 1 >>> 1, Y = A[V];
        if (0 < o(Y, z))
          A[V] = z, A[U] = Y, U = V;
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
    var z = A[0], U = A.pop();
    if (U !== z) {
      A[0] = U;
      e:
        for (var V = 0, Y = A.length, j = Y >>> 1; V < j; ) {
          var te = 2 * (V + 1) - 1, le = A[te], ae = te + 1, se = A[ae];
          if (0 > o(le, U))
            ae < Y && 0 > o(se, le) ? (A[V] = se, A[ae] = U, V = ae) : (A[V] = le, A[te] = U, V = te);
          else if (ae < Y && 0 > o(se, U))
            A[V] = se, A[ae] = U, V = ae;
          else
            break e;
        }
    }
    return z;
  }
  function o(A, z) {
    var U = A.sortIndex - z.sortIndex;
    return U !== 0 ? U : A.id - z.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, g = !1, y = !1, b = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(A) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null)
        r(u);
      else if (z.startTime <= A)
        r(u), z.sortIndex = z.expirationTime, t(l, z);
      else
        break;
      z = n(u);
    }
  }
  function x(A) {
    if (y = !1, S(A), !g)
      if (n(l) !== null)
        g = !0, K(k);
      else {
        var z = n(u);
        z !== null && $(x, z.startTime - A);
      }
  }
  function k(A, z) {
    g = !1, y && (y = !1, h(T), T = -1), p = !0;
    var U = f;
    try {
      for (S(z), d = n(l); d !== null && (!(d.expirationTime > z) || A && !D()); ) {
        var V = d.callback;
        if (typeof V == "function") {
          d.callback = null, f = d.priorityLevel;
          var Y = V(d.expirationTime <= z);
          z = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(l) && r(l), S(z);
        } else
          r(l);
        d = n(l);
      }
      if (d !== null)
        var j = !0;
      else {
        var te = n(u);
        te !== null && $(x, te.startTime - z), j = !1;
      }
      return j;
    } finally {
      d = null, f = U, p = !1;
    }
  }
  var P = !1, E = null, T = -1, M = 5, I = -1;
  function D() {
    return !(e.unstable_now() - I < M);
  }
  function G() {
    if (E !== null) {
      var A = e.unstable_now();
      I = A;
      var z = !0;
      try {
        z = E(!0, A);
      } finally {
        z ? H() : (P = !1, E = null);
      }
    } else
      P = !1;
  }
  var H;
  if (typeof v == "function")
    H = function() {
      v(G);
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
    E = A, P || (P = !0, H());
  }
  function $(A, z) {
    T = b(function() {
      A(e.unstable_now());
    }, z);
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
        var z = 3;
        break;
      default:
        z = f;
    }
    var U = f;
    f = z;
    try {
      return A();
    } finally {
      f = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, z) {
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
      return z();
    } finally {
      f = U;
    }
  }, e.unstable_scheduleCallback = function(A, z, U) {
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
    return Y = U + Y, A = { id: c++, callback: z, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (y ? (h(T), T = -1) : y = !0, $(x, U - V))) : (A.sortIndex = Y, t(l, A), g || p || (g = !0, K(k))), A;
  }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function(A) {
    var z = f;
    return function() {
      var U = f;
      f = z;
      try {
        return A.apply(this, arguments);
      } finally {
        f = U;
      }
    };
  };
})(QS);
XS.exports = QS;
var A_ = XS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZS = m, Zt = A_;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var JS = /* @__PURE__ */ new Set(), Os = {};
function Xo(e, t) {
  Ji(e, t), Ji(e + "Capture", t);
}
function Ji(e, t) {
  for (Os[e] = t, e = 0; e < t.length; e++)
    JS.add(t[e]);
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wp = Object.prototype.hasOwnProperty, D_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g0 = {}, y0 = {};
function F_(e) {
  return Wp.call(y0, e) ? !0 : Wp.call(g0, e) ? !1 : D_.test(e) ? y0[e] = !0 : (g0[e] = !0, !1);
}
function L_(e, t, n, r) {
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
function z_(e, t, n, r) {
  if (t === null || typeof t > "u" || L_(e, t, n, r))
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
function Mt(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var ht = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ht[e] = new Mt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ht[t] = new Mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ht[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ht[e] = new Mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ht[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ht[e] = new Mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ht[e] = new Mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ht[e] = new Mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ht[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Am = /[\-:]([a-z])/g;
function Dm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Am,
    Dm
  );
  ht[t] = new Mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Am, Dm);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Am, Dm);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new Mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fm(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (z_(t, n, o, r) && (n = null), r || o === null ? F_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _r = ZS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fl = Symbol.for("react.element"), hi = Symbol.for("react.portal"), mi = Symbol.for("react.fragment"), Lm = Symbol.for("react.strict_mode"), Hp = Symbol.for("react.profiler"), ex = Symbol.for("react.provider"), tx = Symbol.for("react.context"), zm = Symbol.for("react.forward_ref"), Up = Symbol.for("react.suspense"), Gp = Symbol.for("react.suspense_list"), jm = Symbol.for("react.memo"), jr = Symbol.for("react.lazy"), nx = Symbol.for("react.offscreen"), b0 = Symbol.iterator;
function Ia(e) {
  return e === null || typeof e != "object" ? null : (e = b0 && e[b0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, Sf;
function Ka(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Ka(e) : "";
}
function j_(e) {
  switch (e.tag) {
    case 5:
      return Ka(e.type);
    case 16:
      return Ka("Lazy");
    case 13:
      return Ka("Suspense");
    case 19:
      return Ka("SuspenseList");
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
    case mi:
      return "Fragment";
    case hi:
      return "Portal";
    case Hp:
      return "Profiler";
    case Lm:
      return "StrictMode";
    case Up:
      return "Suspense";
    case Gp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tx:
        return (e.displayName || "Context") + ".Consumer";
      case ex:
        return (e._context.displayName || "Context") + ".Provider";
      case zm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case jm:
        return t = e.displayName || null, t !== null ? t : Kp(e.type) || "Memo";
      case jr:
        t = e._payload, e = e._init;
        try {
          return Kp(e(t));
        } catch {
        }
    }
  return null;
}
function N_(e) {
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
      return t === Lm ? "StrictMode" : "Mode";
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
function rx(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function V_(e) {
  var t = rx(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ll(e) {
  e._valueTracker || (e._valueTracker = V_(e));
}
function ox(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = rx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ec(e) {
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
function ix(e, t) {
  t = t.checked, t != null && Fm(e, "checked", t, !1);
}
function qp(e, t) {
  ix(e, t);
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
  (t !== "number" || ec(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ya = Array.isArray;
function ji(e, t, n, r) {
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
      if (Ya(n)) {
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
function ax(e, t) {
  var n = ao(t.value), r = ao(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function C0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sx(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? sx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var zl, lx = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (zl = zl || document.createElement("div"), zl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Ms(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var as = {
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
}, B_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(as).forEach(function(e) {
  B_.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), as[t] = as[e];
  });
});
function ux(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || as.hasOwnProperty(e) && as[e] ? ("" + t).trim() : t + "px";
}
function cx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = ux(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var W_ = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Jp(e, t) {
  if (t) {
    if (W_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Nm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var nh = null, Ni = null, Vi = null;
function k0(e) {
  if (e = dl(e)) {
    if (typeof nh != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = sd(t), nh(e.stateNode, e.type, t));
  }
}
function dx(e) {
  Ni ? Vi ? Vi.push(e) : Vi = [e] : Ni = e;
}
function fx() {
  if (Ni) {
    var e = Ni, t = Vi;
    if (Vi = Ni = null, k0(e), t)
      for (e = 0; e < t.length; e++)
        k0(t[e]);
  }
}
function px(e, t) {
  return e(t);
}
function hx() {
}
var Cf = !1;
function mx(e, t, n) {
  if (Cf)
    return e(t, n);
  Cf = !0;
  try {
    return px(e, t, n);
  } finally {
    Cf = !1, (Ni !== null || Vi !== null) && (hx(), fx());
  }
}
function Is(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = sd(n);
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
if (xr)
  try {
    var Ra = {};
    Object.defineProperty(Ra, "passive", { get: function() {
      rh = !0;
    } }), window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
  } catch {
    rh = !1;
  }
function H_(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ss = !1, tc = null, nc = !1, oh = null, U_ = { onError: function(e) {
  ss = !0, tc = e;
} };
function G_(e, t, n, r, o, i, a, s, l) {
  ss = !1, tc = null, H_.apply(U_, arguments);
}
function K_(e, t, n, r, o, i, a, s, l) {
  if (G_.apply(this, arguments), ss) {
    if (ss) {
      var u = tc;
      ss = !1, tc = null;
    } else
      throw Error(F(198));
    nc || (nc = !0, oh = u);
  }
}
function Qo(e) {
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
function vx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function P0(e) {
  if (Qo(e) !== e)
    throw Error(F(188));
}
function Y_(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Qo(e), t === null)
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
function gx(e) {
  return e = Y_(e), e !== null ? yx(e) : null;
}
function yx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = yx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var bx = Zt.unstable_scheduleCallback, E0 = Zt.unstable_cancelCallback, q_ = Zt.unstable_shouldYield, X_ = Zt.unstable_requestPaint, Ke = Zt.unstable_now, Q_ = Zt.unstable_getCurrentPriorityLevel, Vm = Zt.unstable_ImmediatePriority, Sx = Zt.unstable_UserBlockingPriority, rc = Zt.unstable_NormalPriority, Z_ = Zt.unstable_LowPriority, xx = Zt.unstable_IdlePriority, rd = null, Xn = null;
function J_(e) {
  if (Xn && typeof Xn.onCommitFiberRoot == "function")
    try {
      Xn.onCommitFiberRoot(rd, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var An = Math.clz32 ? Math.clz32 : nO, eO = Math.log, tO = Math.LN2;
function nO(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (eO(e) / tO | 0) | 0;
}
var jl = 64, Nl = 4194304;
function qa(e) {
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
function oc(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = qa(s) : (i &= a, i !== 0 && (r = qa(i)));
  } else
    a = n & ~o, a !== 0 ? r = qa(a) : i !== 0 && (r = qa(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - An(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function rO(e, t) {
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
function oO(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - An(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = rO(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function ih(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wx() {
  var e = jl;
  return jl <<= 1, !(jl & 4194240) && (jl = 64), e;
}
function kf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function ul(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - An(t), e[t] = n;
}
function iO(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - An(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Bm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - An(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var xe = 0;
function Cx(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var kx, Wm, Px, Ex, Tx, ah = !1, Vl = [], qr = null, Xr = null, Qr = null, Rs = /* @__PURE__ */ new Map(), $s = /* @__PURE__ */ new Map(), Br = [], aO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $s.delete(t.pointerId);
  }
}
function $a(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = dl(t), t !== null && Wm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function sO(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return qr = $a(qr, e, t, n, r, o), !0;
    case "dragenter":
      return Xr = $a(Xr, e, t, n, r, o), !0;
    case "mouseover":
      return Qr = $a(Qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Rs.set(i, $a(Rs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, $s.set(i, $a($s.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function _x(e) {
  var t = Mo(e.target);
  if (t !== null) {
    var n = Qo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = vx(n), t !== null) {
          e.blockedOn = t, Tx(e.priority, function() {
            Px(n);
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
function ku(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = sh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      th = r, n.target.dispatchEvent(r), th = null;
    } else
      return t = dl(n), t !== null && Wm(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function _0(e, t, n) {
  ku(e) && n.delete(t);
}
function lO() {
  ah = !1, qr !== null && ku(qr) && (qr = null), Xr !== null && ku(Xr) && (Xr = null), Qr !== null && ku(Qr) && (Qr = null), Rs.forEach(_0), $s.forEach(_0);
}
function Aa(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ah || (ah = !0, Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, lO)));
}
function As(e) {
  function t(o) {
    return Aa(o, e);
  }
  if (0 < Vl.length) {
    Aa(Vl[0], e);
    for (var n = 1; n < Vl.length; n++) {
      var r = Vl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (qr !== null && Aa(qr, e), Xr !== null && Aa(Xr, e), Qr !== null && Aa(Qr, e), Rs.forEach(t), $s.forEach(t), n = 0; n < Br.length; n++)
    r = Br[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && (n = Br[0], n.blockedOn === null); )
    _x(n), n.blockedOn === null && Br.shift();
}
var Bi = _r.ReactCurrentBatchConfig, ic = !0;
function uO(e, t, n, r) {
  var o = xe, i = Bi.transition;
  Bi.transition = null;
  try {
    xe = 1, Hm(e, t, n, r);
  } finally {
    xe = o, Bi.transition = i;
  }
}
function cO(e, t, n, r) {
  var o = xe, i = Bi.transition;
  Bi.transition = null;
  try {
    xe = 4, Hm(e, t, n, r);
  } finally {
    xe = o, Bi.transition = i;
  }
}
function Hm(e, t, n, r) {
  if (ic) {
    var o = sh(e, t, n, r);
    if (o === null)
      Af(e, t, r, ac, n), T0(e, r);
    else if (sO(o, e, t, n, r))
      r.stopPropagation();
    else if (T0(e, r), t & 4 && -1 < aO.indexOf(e)) {
      for (; o !== null; ) {
        var i = dl(o);
        if (i !== null && kx(i), i = sh(e, t, n, r), i === null && Af(e, t, r, ac, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Af(e, t, r, null, n);
  }
}
var ac = null;
function sh(e, t, n, r) {
  if (ac = null, e = Nm(r), e = Mo(e), e !== null)
    if (t = Qo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = vx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return ac = e, null;
}
function Ox(e) {
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
      switch (Q_()) {
        case Vm:
          return 1;
        case Sx:
          return 4;
        case rc:
        case Z_:
          return 16;
        case xx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kr = null, Um = null, Pu = null;
function Mx() {
  if (Pu)
    return Pu;
  var e, t = Um, n = t.length, r, o = "value" in Kr ? Kr.value : Kr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return Pu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Eu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Bl() {
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
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Bl : O0, this.isPropagationStopped = O0, this;
  }
  return Ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Bl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Bl);
  }, persist: function() {
  }, isPersistent: Bl }), t;
}
var xa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Gm = nn(xa), cl = Ve({}, xa, { view: 0, detail: 0 }), dO = nn(cl), Pf, Ef, Da, od = Ve({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Km, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Da && (Da && e.type === "mousemove" ? (Pf = e.screenX - Da.screenX, Ef = e.screenY - Da.screenY) : Ef = Pf = 0, Da = e), Pf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ef;
} }), M0 = nn(od), fO = Ve({}, od, { dataTransfer: 0 }), pO = nn(fO), hO = Ve({}, cl, { relatedTarget: 0 }), Tf = nn(hO), mO = Ve({}, xa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vO = nn(mO), gO = Ve({}, xa, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), yO = nn(gO), bO = Ve({}, xa, { data: 0 }), I0 = nn(bO), SO = {
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
}, xO = {
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
}, wO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function CO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wO[e]) ? !!t[e] : !1;
}
function Km() {
  return CO;
}
var kO = Ve({}, cl, { key: function(e) {
  if (e.key) {
    var t = SO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Eu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Km, charCode: function(e) {
  return e.type === "keypress" ? Eu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Eu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), PO = nn(kO), EO = Ve({}, od, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), R0 = nn(EO), TO = Ve({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Km }), _O = nn(TO), OO = Ve({}, xa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), MO = nn(OO), IO = Ve({}, od, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), RO = nn(IO), $O = [9, 13, 27, 32], Ym = xr && "CompositionEvent" in window, ls = null;
xr && "documentMode" in document && (ls = document.documentMode);
var AO = xr && "TextEvent" in window && !ls, Ix = xr && (!Ym || ls && 8 < ls && 11 >= ls), $0 = " ", A0 = !1;
function Rx(e, t) {
  switch (e) {
    case "keyup":
      return $O.indexOf(t.keyCode) !== -1;
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
function $x(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vi = !1;
function DO(e, t) {
  switch (e) {
    case "compositionend":
      return $x(t);
    case "keypress":
      return t.which !== 32 ? null : (A0 = !0, $0);
    case "textInput":
      return e = t.data, e === $0 && A0 ? null : e;
    default:
      return null;
  }
}
function FO(e, t) {
  if (vi)
    return e === "compositionend" || !Ym && Rx(e, t) ? (e = Mx(), Pu = Um = Kr = null, vi = !1, e) : null;
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
      return Ix && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var LO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function D0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!LO[e.type] : t === "textarea";
}
function Ax(e, t, n, r) {
  dx(r), t = sc(t, "onChange"), 0 < t.length && (n = new Gm("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var us = null, Ds = null;
function zO(e) {
  Ux(e, 0);
}
function id(e) {
  var t = bi(e);
  if (ox(t))
    return e;
}
function jO(e, t) {
  if (e === "change")
    return t;
}
var Dx = !1;
if (xr) {
  var _f;
  if (xr) {
    var Of = "oninput" in document;
    if (!Of) {
      var F0 = document.createElement("div");
      F0.setAttribute("oninput", "return;"), Of = typeof F0.oninput == "function";
    }
    _f = Of;
  } else
    _f = !1;
  Dx = _f && (!document.documentMode || 9 < document.documentMode);
}
function L0() {
  us && (us.detachEvent("onpropertychange", Fx), Ds = us = null);
}
function Fx(e) {
  if (e.propertyName === "value" && id(Ds)) {
    var t = [];
    Ax(t, Ds, e, Nm(e)), mx(zO, t);
  }
}
function NO(e, t, n) {
  e === "focusin" ? (L0(), us = t, Ds = n, us.attachEvent("onpropertychange", Fx)) : e === "focusout" && L0();
}
function VO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return id(Ds);
}
function BO(e, t) {
  if (e === "click")
    return id(t);
}
function WO(e, t) {
  if (e === "input" || e === "change")
    return id(t);
}
function HO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ln = typeof Object.is == "function" ? Object.is : HO;
function Fs(e, t) {
  if (Ln(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Wp.call(t, o) || !Ln(e[o], t[o]))
      return !1;
  }
  return !0;
}
function z0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function j0(e, t) {
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
function Lx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function zx() {
  for (var e = window, t = ec(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = ec(e.document);
  }
  return t;
}
function qm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function UO(e) {
  var t = zx(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Lx(n.ownerDocument.documentElement, n)) {
    if (r !== null && qm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = j0(n, i);
        var a = j0(
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
var GO = xr && "documentMode" in document && 11 >= document.documentMode, gi = null, lh = null, cs = null, uh = !1;
function N0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  uh || gi == null || gi !== ec(r) || (r = gi, "selectionStart" in r && qm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), cs && Fs(cs, r) || (cs = r, r = sc(lh, "onSelect"), 0 < r.length && (t = new Gm("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gi)));
}
function Wl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yi = { animationend: Wl("Animation", "AnimationEnd"), animationiteration: Wl("Animation", "AnimationIteration"), animationstart: Wl("Animation", "AnimationStart"), transitionend: Wl("Transition", "TransitionEnd") }, Mf = {}, jx = {};
xr && (jx = document.createElement("div").style, "AnimationEvent" in window || (delete yi.animationend.animation, delete yi.animationiteration.animation, delete yi.animationstart.animation), "TransitionEvent" in window || delete yi.transitionend.transition);
function ad(e) {
  if (Mf[e])
    return Mf[e];
  if (!yi[e])
    return e;
  var t = yi[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in jx)
      return Mf[e] = t[n];
  return e;
}
var Nx = ad("animationend"), Vx = ad("animationiteration"), Bx = ad("animationstart"), Wx = ad("transitionend"), Hx = /* @__PURE__ */ new Map(), V0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function co(e, t) {
  Hx.set(e, t), Xo(t, [e]);
}
for (var If = 0; If < V0.length; If++) {
  var Rf = V0[If], KO = Rf.toLowerCase(), YO = Rf[0].toUpperCase() + Rf.slice(1);
  co(KO, "on" + YO);
}
co(Nx, "onAnimationEnd");
co(Vx, "onAnimationIteration");
co(Bx, "onAnimationStart");
co("dblclick", "onDoubleClick");
co("focusin", "onFocus");
co("focusout", "onBlur");
co(Wx, "onTransitionEnd");
Ji("onMouseEnter", ["mouseout", "mouseover"]);
Ji("onMouseLeave", ["mouseout", "mouseover"]);
Ji("onPointerEnter", ["pointerout", "pointerover"]);
Ji("onPointerLeave", ["pointerout", "pointerover"]);
Xo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xa));
function B0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, K_(r, t, void 0, e), e.currentTarget = null;
}
function Ux(e, t) {
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
  if (nc)
    throw e = oh, nc = !1, oh = null, e;
}
function Me(e, t) {
  var n = t[hh];
  n === void 0 && (n = t[hh] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Gx(t, e, 2, !1), n.add(r));
}
function $f(e, t, n) {
  var r = 0;
  t && (r |= 4), Gx(n, e, r, t);
}
var Hl = "_reactListening" + Math.random().toString(36).slice(2);
function Ls(e) {
  if (!e[Hl]) {
    e[Hl] = !0, JS.forEach(function(n) {
      n !== "selectionchange" && (qO.has(n) || $f(n, !1, e), $f(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hl] || (t[Hl] = !0, $f("selectionchange", !1, t));
  }
}
function Gx(e, t, n, r) {
  switch (Ox(t)) {
    case 1:
      var o = uO;
      break;
    case 4:
      o = cO;
      break;
    default:
      o = Hm;
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
            if (a = Mo(s), a === null)
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
  mx(function() {
    var u = i, c = Nm(n), d = [];
    e: {
      var f = Hx.get(e);
      if (f !== void 0) {
        var p = Gm, g = e;
        switch (e) {
          case "keypress":
            if (Eu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = PO;
            break;
          case "focusin":
            g = "focus", p = Tf;
            break;
          case "focusout":
            g = "blur", p = Tf;
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
            p = pO;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = _O;
            break;
          case Nx:
          case Vx:
          case Bx:
            p = vO;
            break;
          case Wx:
            p = MO;
            break;
          case "scroll":
            p = dO;
            break;
          case "wheel":
            p = RO;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = yO;
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
        var y = (t & 4) !== 0, b = !y && e === "scroll", h = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var v = u, S; v !== null; ) {
          S = v;
          var x = S.stateNode;
          if (S.tag === 5 && x !== null && (S = x, h !== null && (x = Is(v, h), x != null && y.push(zs(v, x, S)))), b)
            break;
          v = v.return;
        }
        0 < y.length && (f = new p(f, g, null, n, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== th && (g = n.relatedTarget || n.fromElement) && (Mo(g) || g[wr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (g = n.relatedTarget || n.toElement, p = u, g = g ? Mo(g) : null, g !== null && (b = Qo(g), g !== b || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
          if (y = M0, x = "onMouseLeave", h = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (y = R0, x = "onPointerLeave", h = "onPointerEnter", v = "pointer"), b = p == null ? f : bi(p), S = g == null ? f : bi(g), f = new y(x, v + "leave", p, n, c), f.target = b, f.relatedTarget = S, x = null, Mo(c) === u && (y = new y(h, v + "enter", g, n, c), y.target = S, y.relatedTarget = b, x = y), b = x, p && g)
            t: {
              for (y = p, h = g, v = 0, S = y; S; S = ai(S))
                v++;
              for (S = 0, x = h; x; x = ai(x))
                S++;
              for (; 0 < v - S; )
                y = ai(y), v--;
              for (; 0 < S - v; )
                h = ai(h), S--;
              for (; v--; ) {
                if (y === h || h !== null && y === h.alternate)
                  break t;
                y = ai(y), h = ai(h);
              }
              y = null;
            }
          else
            y = null;
          p !== null && W0(d, f, p, y, !1), g !== null && b !== null && W0(d, b, g, y, !0);
        }
      }
      e: {
        if (f = u ? bi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = jO;
        else if (D0(f))
          if (Dx)
            k = WO;
          else {
            k = VO;
            var P = NO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = BO);
        if (k && (k = k(e, u))) {
          Ax(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Xp(f, "number", f.value);
      }
      switch (P = u ? bi(u) : window, e) {
        case "focusin":
          (D0(P) || P.contentEditable === "true") && (gi = P, lh = u, cs = null);
          break;
        case "focusout":
          cs = lh = gi = null;
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
          if (GO)
            break;
        case "keydown":
        case "keyup":
          N0(d, n, c);
      }
      var E;
      if (Ym)
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
        vi ? Rx(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Ix && n.locale !== "ko" && (vi || T !== "onCompositionStart" ? T === "onCompositionEnd" && vi && (E = Mx()) : (Kr = c, Um = "value" in Kr ? Kr.value : Kr.textContent, vi = !0)), P = sc(u, T), 0 < P.length && (T = new I0(T, e, null, n, c), d.push({ event: T, listeners: P }), E ? T.data = E : (E = $x(n), E !== null && (T.data = E)))), (E = AO ? DO(e, n) : FO(e, n)) && (u = sc(u, "onBeforeInput"), 0 < u.length && (c = new I0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = E));
    }
    Ux(d, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Is(e, n), i != null && r.unshift(zs(e, i, o)), i = Is(e, t), i != null && r.push(zs(e, i, o))), e = e.return;
  }
  return r;
}
function ai(e) {
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
    s.tag === 5 && u !== null && (s = u, o ? (l = Is(n, i), l != null && a.unshift(zs(n, l, s))) : o || (l = Is(n, i), l != null && a.push(zs(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var XO = /\r\n?/g, QO = /\u0000|\uFFFD/g;
function H0(e) {
  return (typeof e == "string" ? e : "" + e).replace(XO, `
`).replace(QO, "");
}
function Ul(e, t, n) {
  if (t = H0(t), H0(e) !== t && n)
    throw Error(F(425));
}
function lc() {
}
var ch = null, dh = null;
function fh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ph = typeof setTimeout == "function" ? setTimeout : void 0, ZO = typeof clearTimeout == "function" ? clearTimeout : void 0, U0 = typeof Promise == "function" ? Promise : void 0, JO = typeof queueMicrotask == "function" ? queueMicrotask : typeof U0 < "u" ? function(e) {
  return U0.resolve(null).then(e).catch(eM);
} : ph;
function eM(e) {
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
          e.removeChild(o), As(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  As(t);
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
var wa = Math.random().toString(36).slice(2), Kn = "__reactFiber$" + wa, js = "__reactProps$" + wa, wr = "__reactContainer$" + wa, hh = "__reactEvents$" + wa, tM = "__reactListeners$" + wa, nM = "__reactHandles$" + wa;
function Mo(e) {
  var t = e[Kn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wr] || n[Kn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = G0(e); e !== null; ) {
          if (n = e[Kn])
            return n;
          e = G0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dl(e) {
  return e = e[Kn] || e[wr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bi(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function sd(e) {
  return e[js] || null;
}
var mh = [], Si = -1;
function fo(e) {
  return { current: e };
}
function Re(e) {
  0 > Si || (e.current = mh[Si], mh[Si] = null, Si--);
}
function Te(e, t) {
  Si++, mh[Si] = e.current, e.current = t;
}
var so = {}, Ct = fo(so), Dt = fo(!1), Bo = so;
function ea(e, t) {
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
function uc() {
  Re(Dt), Re(Ct);
}
function K0(e, t, n) {
  if (Ct.current !== so)
    throw Error(F(168));
  Te(Ct, t), Te(Dt, n);
}
function Kx(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, N_(e) || "Unknown", o));
  return Ve({}, n, r);
}
function cc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || so, Bo = Ct.current, Te(Ct, e), Te(Dt, Dt.current), !0;
}
function Y0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Kx(e, t, Bo), r.__reactInternalMemoizedMergedChildContext = e, Re(Dt), Re(Ct), Te(Ct, e)) : Re(Dt), Te(Dt, n);
}
var lr = null, ld = !1, Ff = !1;
function Yx(e) {
  lr === null ? lr = [e] : lr.push(e);
}
function rM(e) {
  ld = !0, Yx(e);
}
function po() {
  if (!Ff && lr !== null) {
    Ff = !0;
    var e = 0, t = xe;
    try {
      var n = lr;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      lr = null, ld = !1;
    } catch (o) {
      throw lr !== null && (lr = lr.slice(e + 1)), bx(Vm, po), o;
    } finally {
      xe = t, Ff = !1;
    }
  }
  return null;
}
var xi = [], wi = 0, dc = null, fc = 0, pn = [], hn = 0, Wo = null, dr = 1, fr = "";
function wo(e, t) {
  xi[wi++] = fc, xi[wi++] = dc, dc = e, fc = t;
}
function qx(e, t, n) {
  pn[hn++] = dr, pn[hn++] = fr, pn[hn++] = Wo, Wo = e;
  var r = dr;
  e = fr;
  var o = 32 - An(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - An(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, dr = 1 << 32 - An(t) + o | n << o | r, fr = i + e;
  } else
    dr = 1 << i | n << o | r, fr = e;
}
function Xm(e) {
  e.return !== null && (wo(e, 1), qx(e, 1, 0));
}
function Qm(e) {
  for (; e === dc; )
    dc = xi[--wi], xi[wi] = null, fc = xi[--wi], xi[wi] = null;
  for (; e === Wo; )
    Wo = pn[--hn], pn[hn] = null, fr = pn[--hn], pn[hn] = null, dr = pn[--hn], pn[hn] = null;
}
var qt = null, Yt = null, Fe = !1, In = null;
function Xx(e, t) {
  var n = mn(5, null, null, 0);
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
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wo !== null ? { id: dr, overflow: fr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, Yt = null, !0) : !1;
    default:
      return !1;
  }
}
function vh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gh(e) {
  if (Fe) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!q0(e, t)) {
        if (vh(e))
          throw Error(F(418));
        t = Zr(n.nextSibling);
        var r = qt;
        t && q0(e, t) ? Xx(r, n) : (e.flags = e.flags & -4097 | 2, Fe = !1, qt = e);
      }
    } else {
      if (vh(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, Fe = !1, qt = e;
    }
  }
}
function X0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function Gl(e) {
  if (e !== qt)
    return !1;
  if (!Fe)
    return X0(e), Fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fh(e.type, e.memoizedProps)), t && (t = Yt)) {
    if (vh(e))
      throw Qx(), Error(F(418));
    for (; t; )
      Xx(e, t), t = Zr(t.nextSibling);
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
function Qx() {
  for (var e = Yt; e; )
    e = Zr(e.nextSibling);
}
function ta() {
  Yt = qt = null, Fe = !1;
}
function Zm(e) {
  In === null ? In = [e] : In.push(e);
}
var oM = _r.ReactCurrentBatchConfig;
function On(e, t) {
  if (e && e.defaultProps) {
    t = Ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var pc = fo(null), hc = null, Ci = null, Jm = null;
function ev() {
  Jm = Ci = hc = null;
}
function tv(e) {
  var t = pc.current;
  Re(pc), e._currentValue = t;
}
function yh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Wi(e, t) {
  hc = e, Jm = Ci = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (At = !0), e.firstContext = null);
}
function Sn(e) {
  var t = e._currentValue;
  if (Jm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Ci === null) {
      if (hc === null)
        throw Error(F(308));
      Ci = e, hc.dependencies = { lanes: 0, firstContext: e };
    } else
      Ci = Ci.next = e;
  return t;
}
var Io = null;
function nv(e) {
  Io === null ? Io = [e] : Io.push(e);
}
function Zx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, nv(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cr(e, r);
}
function Cr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nr = !1;
function rv(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Jx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function mr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Jr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, he & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Cr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, nv(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cr(e, n);
}
function Tu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Bm(e, n);
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
function mc(e, t, n, r) {
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
          var g = e, y = s;
          switch (f = t, p = n, y.tag) {
            case 1:
              if (g = y.payload, typeof g == "function") {
                d = g.call(p, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = y.payload, f = typeof g == "function" ? g.call(p, d, f) : g, f == null)
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
    Uo |= a, e.lanes = a, e.memoizedState = d;
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
var ew = new ZS.Component().refs;
function bh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ud = { isMounted: function(e) {
  return (e = e._reactInternals) ? Qo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Tt(), o = to(e), i = mr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Jr(e, i, o), t !== null && (Dn(t, e, o, r), Tu(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Tt(), o = to(e), i = mr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Jr(e, i, o), t !== null && (Dn(t, e, o, r), Tu(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Tt(), r = to(e), o = mr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Jr(e, o, r), t !== null && (Dn(t, e, r, n), Tu(t, e, r));
} };
function J0(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Fs(n, r) || !Fs(o, i) : !0;
}
function tw(e, t, n) {
  var r = !1, o = so, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Sn(i) : (o = Ft(t) ? Bo : Ct.current, r = t.contextTypes, i = (r = r != null) ? ea(e, o) : so), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ud, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ey(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ud.enqueueReplaceState(t, t.state, null);
}
function Sh(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = ew, rv(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Sn(i) : (i = Ft(t) ? Bo : Ct.current, o.context = ea(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (bh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ud.enqueueReplaceState(o, o.state, null), mc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Fa(e, t, n) {
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
        s === ew && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Kl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ty(e) {
  var t = e._init;
  return t(e._payload);
}
function nw(e) {
  function t(h, v) {
    if (e) {
      var S = h.deletions;
      S === null ? (h.deletions = [v], h.flags |= 16) : S.push(v);
    }
  }
  function n(h, v) {
    if (!e)
      return null;
    for (; v !== null; )
      t(h, v), v = v.sibling;
    return null;
  }
  function r(h, v) {
    for (h = /* @__PURE__ */ new Map(); v !== null; )
      v.key !== null ? h.set(v.key, v) : h.set(v.index, v), v = v.sibling;
    return h;
  }
  function o(h, v) {
    return h = no(h, v), h.index = 0, h.sibling = null, h;
  }
  function i(h, v, S) {
    return h.index = S, e ? (S = h.alternate, S !== null ? (S = S.index, S < v ? (h.flags |= 2, v) : S) : (h.flags |= 2, v)) : (h.flags |= 1048576, v);
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, v, S, x) {
    return v === null || v.tag !== 6 ? (v = Wf(S, h.mode, x), v.return = h, v) : (v = o(v, S), v.return = h, v);
  }
  function l(h, v, S, x) {
    var k = S.type;
    return k === mi ? c(h, v, S.props.children, x, S.key) : v !== null && (v.elementType === k || typeof k == "object" && k !== null && k.$$typeof === jr && ty(k) === v.type) ? (x = o(v, S.props), x.ref = Fa(h, v, S), x.return = h, x) : (x = $u(S.type, S.key, S.props, null, h.mode, x), x.ref = Fa(h, v, S), x.return = h, x);
  }
  function u(h, v, S, x) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== S.containerInfo || v.stateNode.implementation !== S.implementation ? (v = Hf(S, h.mode, x), v.return = h, v) : (v = o(v, S.children || []), v.return = h, v);
  }
  function c(h, v, S, x, k) {
    return v === null || v.tag !== 7 ? (v = Fo(S, h.mode, x, k), v.return = h, v) : (v = o(v, S), v.return = h, v);
  }
  function d(h, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return v = Wf("" + v, h.mode, S), v.return = h, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Fl:
          return S = $u(v.type, v.key, v.props, null, h.mode, S), S.ref = Fa(h, null, v), S.return = h, S;
        case hi:
          return v = Hf(v, h.mode, S), v.return = h, v;
        case jr:
          var x = v._init;
          return d(h, x(v._payload), S);
      }
      if (Ya(v) || Ia(v))
        return v = Fo(v, h.mode, S, null), v.return = h, v;
      Kl(h, v);
    }
    return null;
  }
  function f(h, v, S, x) {
    var k = v !== null ? v.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number")
      return k !== null ? null : s(h, v, "" + S, x);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Fl:
          return S.key === k ? l(h, v, S, x) : null;
        case hi:
          return S.key === k ? u(h, v, S, x) : null;
        case jr:
          return k = S._init, f(
            h,
            v,
            k(S._payload),
            x
          );
      }
      if (Ya(S) || Ia(S))
        return k !== null ? null : c(h, v, S, x, null);
      Kl(h, S);
    }
    return null;
  }
  function p(h, v, S, x, k) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return h = h.get(S) || null, s(v, h, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Fl:
          return h = h.get(x.key === null ? S : x.key) || null, l(v, h, x, k);
        case hi:
          return h = h.get(x.key === null ? S : x.key) || null, u(v, h, x, k);
        case jr:
          var P = x._init;
          return p(h, v, S, P(x._payload), k);
      }
      if (Ya(x) || Ia(x))
        return h = h.get(S) || null, c(v, h, x, k, null);
      Kl(v, x);
    }
    return null;
  }
  function g(h, v, S, x) {
    for (var k = null, P = null, E = v, T = v = 0, M = null; E !== null && T < S.length; T++) {
      E.index > T ? (M = E, E = null) : M = E.sibling;
      var I = f(h, E, S[T], x);
      if (I === null) {
        E === null && (E = M);
        break;
      }
      e && E && I.alternate === null && t(h, E), v = i(I, v, T), P === null ? k = I : P.sibling = I, P = I, E = M;
    }
    if (T === S.length)
      return n(h, E), Fe && wo(h, T), k;
    if (E === null) {
      for (; T < S.length; T++)
        E = d(h, S[T], x), E !== null && (v = i(E, v, T), P === null ? k = E : P.sibling = E, P = E);
      return Fe && wo(h, T), k;
    }
    for (E = r(h, E); T < S.length; T++)
      M = p(E, h, T, S[T], x), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? T : M.key), v = i(M, v, T), P === null ? k = M : P.sibling = M, P = M);
    return e && E.forEach(function(D) {
      return t(h, D);
    }), Fe && wo(h, T), k;
  }
  function y(h, v, S, x) {
    var k = Ia(S);
    if (typeof k != "function")
      throw Error(F(150));
    if (S = k.call(S), S == null)
      throw Error(F(151));
    for (var P = k = null, E = v, T = v = 0, M = null, I = S.next(); E !== null && !I.done; T++, I = S.next()) {
      E.index > T ? (M = E, E = null) : M = E.sibling;
      var D = f(h, E, I.value, x);
      if (D === null) {
        E === null && (E = M);
        break;
      }
      e && E && D.alternate === null && t(h, E), v = i(D, v, T), P === null ? k = D : P.sibling = D, P = D, E = M;
    }
    if (I.done)
      return n(
        h,
        E
      ), Fe && wo(h, T), k;
    if (E === null) {
      for (; !I.done; T++, I = S.next())
        I = d(h, I.value, x), I !== null && (v = i(I, v, T), P === null ? k = I : P.sibling = I, P = I);
      return Fe && wo(h, T), k;
    }
    for (E = r(h, E); !I.done; T++, I = S.next())
      I = p(E, h, T, I.value, x), I !== null && (e && I.alternate !== null && E.delete(I.key === null ? T : I.key), v = i(I, v, T), P === null ? k = I : P.sibling = I, P = I);
    return e && E.forEach(function(G) {
      return t(h, G);
    }), Fe && wo(h, T), k;
  }
  function b(h, v, S, x) {
    if (typeof S == "object" && S !== null && S.type === mi && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Fl:
          e: {
            for (var k = S.key, P = v; P !== null; ) {
              if (P.key === k) {
                if (k = S.type, k === mi) {
                  if (P.tag === 7) {
                    n(h, P.sibling), v = o(P, S.props.children), v.return = h, h = v;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === jr && ty(k) === P.type) {
                  n(h, P.sibling), v = o(P, S.props), v.ref = Fa(h, P, S), v.return = h, h = v;
                  break e;
                }
                n(h, P);
                break;
              } else
                t(h, P);
              P = P.sibling;
            }
            S.type === mi ? (v = Fo(S.props.children, h.mode, x, S.key), v.return = h, h = v) : (x = $u(S.type, S.key, S.props, null, h.mode, x), x.ref = Fa(h, v, S), x.return = h, h = x);
          }
          return a(h);
        case hi:
          e: {
            for (P = S.key; v !== null; ) {
              if (v.key === P)
                if (v.tag === 4 && v.stateNode.containerInfo === S.containerInfo && v.stateNode.implementation === S.implementation) {
                  n(h, v.sibling), v = o(v, S.children || []), v.return = h, h = v;
                  break e;
                } else {
                  n(h, v);
                  break;
                }
              else
                t(h, v);
              v = v.sibling;
            }
            v = Hf(S, h.mode, x), v.return = h, h = v;
          }
          return a(h);
        case jr:
          return P = S._init, b(h, v, P(S._payload), x);
      }
      if (Ya(S))
        return g(h, v, S, x);
      if (Ia(S))
        return y(h, v, S, x);
      Kl(h, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, v !== null && v.tag === 6 ? (n(h, v.sibling), v = o(v, S), v.return = h, h = v) : (n(h, v), v = Wf(S, h.mode, x), v.return = h, h = v), a(h)) : n(h, v);
  }
  return b;
}
var na = nw(!0), rw = nw(!1), fl = {}, Qn = fo(fl), Ns = fo(fl), Vs = fo(fl);
function Ro(e) {
  if (e === fl)
    throw Error(F(174));
  return e;
}
function ov(e, t) {
  switch (Te(Vs, t), Te(Ns, e), Te(Qn, fl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zp(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zp(t, e);
  }
  Re(Qn), Te(Qn, t);
}
function ra() {
  Re(Qn), Re(Ns), Re(Vs);
}
function ow(e) {
  Ro(Vs.current);
  var t = Ro(Qn.current), n = Zp(t, e.type);
  t !== n && (Te(Ns, e), Te(Qn, n));
}
function iv(e) {
  Ns.current === e && (Re(Qn), Re(Ns));
}
var ze = fo(0);
function vc(e) {
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
function av() {
  for (var e = 0; e < Lf.length; e++)
    Lf[e]._workInProgressVersionPrimary = null;
  Lf.length = 0;
}
var _u = _r.ReactCurrentDispatcher, zf = _r.ReactCurrentBatchConfig, Ho = 0, Ne = null, et = null, it = null, gc = !1, ds = !1, Bs = 0, iM = 0;
function yt() {
  throw Error(F(321));
}
function sv(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ln(e[n], t[n]))
      return !1;
  return !0;
}
function lv(e, t, n, r, o, i) {
  if (Ho = i, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _u.current = e === null || e.memoizedState === null ? uM : cM, e = n(r, o), ds) {
    i = 0;
    do {
      if (ds = !1, Bs = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = et = null, t.updateQueue = null, _u.current = dM, e = n(r, o);
    } while (ds);
  }
  if (_u.current = yc, t = et !== null && et.next !== null, Ho = 0, it = et = Ne = null, gc = !1, t)
    throw Error(F(300));
  return e;
}
function uv() {
  var e = Bs !== 0;
  return Bs = 0, e;
}
function Bn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return it === null ? Ne.memoizedState = it = e : it = it.next = e, it;
}
function xn() {
  if (et === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = et.next;
  var t = it === null ? Ne.memoizedState : it.next;
  if (t !== null)
    it = t, et = e;
  else {
    if (e === null)
      throw Error(F(310));
    et = e, e = { memoizedState: et.memoizedState, baseState: et.baseState, baseQueue: et.baseQueue, queue: et.queue, next: null }, it === null ? Ne.memoizedState = it = e : it = it.next = e;
  }
  return it;
}
function Ws(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jf(e) {
  var t = xn(), n = t.queue;
  if (n === null)
    throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = et, o = r.baseQueue, i = n.pending;
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
      if ((Ho & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = r) : l = l.next = d, Ne.lanes |= c, Uo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, Ln(r, t.memoizedState) || (At = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ne.lanes |= i, Uo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Nf(e) {
  var t = xn(), n = t.queue;
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
function iw() {
}
function aw(e, t) {
  var n = Ne, r = xn(), o = t(), i = !Ln(r.memoizedState, o);
  if (i && (r.memoizedState = o, At = !0), r = r.queue, cv(uw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Hs(9, lw.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Ho & 30 || sw(n, t, o);
  }
  return o;
}
function sw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function lw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, cw(t) && dw(e);
}
function uw(e, t, n) {
  return n(function() {
    cw(t) && dw(e);
  });
}
function cw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ln(e, n);
  } catch {
    return !0;
  }
}
function dw(e) {
  var t = Cr(e, 1);
  t !== null && Dn(t, e, 1, -1);
}
function ny(e) {
  var t = Bn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ws, lastRenderedState: e }, t.queue = e, e = e.dispatch = lM.bind(null, Ne, e), [t.memoizedState, e];
}
function Hs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fw() {
  return xn().memoizedState;
}
function Ou(e, t, n, r) {
  var o = Bn();
  Ne.flags |= e, o.memoizedState = Hs(1 | t, n, void 0, r === void 0 ? null : r);
}
function cd(e, t, n, r) {
  var o = xn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (et !== null) {
    var a = et.memoizedState;
    if (i = a.destroy, r !== null && sv(r, a.deps)) {
      o.memoizedState = Hs(t, n, i, r);
      return;
    }
  }
  Ne.flags |= e, o.memoizedState = Hs(1 | t, n, i, r);
}
function ry(e, t) {
  return Ou(8390656, 8, e, t);
}
function cv(e, t) {
  return cd(2048, 8, e, t);
}
function pw(e, t) {
  return cd(4, 2, e, t);
}
function hw(e, t) {
  return cd(4, 4, e, t);
}
function mw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function vw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cd(4, 4, mw.bind(null, t, e), n);
}
function dv() {
}
function gw(e, t) {
  var n = xn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function yw(e, t) {
  var n = xn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function bw(e, t, n) {
  return Ho & 21 ? (Ln(n, t) || (n = wx(), Ne.lanes |= n, Uo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n);
}
function aM(e, t) {
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
function Sw() {
  return xn().memoizedState;
}
function sM(e, t, n) {
  var r = to(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xw(e))
    ww(t, n);
  else if (n = Zx(e, t, n, r), n !== null) {
    var o = Tt();
    Dn(n, e, r, o), Cw(n, t, r);
  }
}
function lM(e, t, n) {
  var r = to(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xw(e))
    ww(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, Ln(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, nv(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Zx(e, t, o, r), n !== null && (o = Tt(), Dn(n, e, r, o), Cw(n, t, r));
  }
}
function xw(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function ww(e, t) {
  ds = gc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Cw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Bm(e, n);
  }
}
var yc = { readContext: Sn, useCallback: yt, useContext: yt, useEffect: yt, useImperativeHandle: yt, useInsertionEffect: yt, useLayoutEffect: yt, useMemo: yt, useReducer: yt, useRef: yt, useState: yt, useDebugValue: yt, useDeferredValue: yt, useTransition: yt, useMutableSource: yt, useSyncExternalStore: yt, useId: yt, unstable_isNewReconciler: !1 }, uM = { readContext: Sn, useCallback: function(e, t) {
  return Bn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Sn, useEffect: ry, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ou(
    4194308,
    4,
    mw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ou(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ou(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Bn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Bn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = sM.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Bn();
  return e = { current: e }, t.memoizedState = e;
}, useState: ny, useDebugValue: dv, useDeferredValue: function(e) {
  return Bn().memoizedState = e;
}, useTransition: function() {
  var e = ny(!1), t = e[0];
  return e = aM.bind(null, e[1]), Bn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ne, o = Bn();
  if (Fe) {
    if (n === void 0)
      throw Error(F(407));
    n = n();
  } else {
    if (n = t(), st === null)
      throw Error(F(349));
    Ho & 30 || sw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, ry(uw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Hs(9, lw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Bn(), t = st.identifierPrefix;
  if (Fe) {
    var n = fr, r = dr;
    n = (r & ~(1 << 32 - An(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Bs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = iM++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, cM = {
  readContext: Sn,
  useCallback: gw,
  useContext: Sn,
  useEffect: cv,
  useImperativeHandle: vw,
  useInsertionEffect: pw,
  useLayoutEffect: hw,
  useMemo: yw,
  useReducer: jf,
  useRef: fw,
  useState: function() {
    return jf(Ws);
  },
  useDebugValue: dv,
  useDeferredValue: function(e) {
    var t = xn();
    return bw(t, et.memoizedState, e);
  },
  useTransition: function() {
    var e = jf(Ws)[0], t = xn().memoizedState;
    return [e, t];
  },
  useMutableSource: iw,
  useSyncExternalStore: aw,
  useId: Sw,
  unstable_isNewReconciler: !1
}, dM = { readContext: Sn, useCallback: gw, useContext: Sn, useEffect: cv, useImperativeHandle: vw, useInsertionEffect: pw, useLayoutEffect: hw, useMemo: yw, useReducer: Nf, useRef: fw, useState: function() {
  return Nf(Ws);
}, useDebugValue: dv, useDeferredValue: function(e) {
  var t = xn();
  return et === null ? t.memoizedState = e : bw(t, et.memoizedState, e);
}, useTransition: function() {
  var e = Nf(Ws)[0], t = xn().memoizedState;
  return [e, t];
}, useMutableSource: iw, useSyncExternalStore: aw, useId: Sw, unstable_isNewReconciler: !1 };
function oa(e, t) {
  try {
    var n = "", r = t;
    do
      n += j_(r), r = r.return;
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
var fM = typeof WeakMap == "function" ? WeakMap : Map;
function kw(e, t, n) {
  n = mr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Sc || (Sc = !0, Ih = r), xh(e, t);
  }, n;
}
function Pw(e, t, n) {
  n = mr(-1, n), n.tag = 3;
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
    r = e.pingCache = new fM();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = EM.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mr(-1, 1), t.tag = 2, Jr(n, t, 1))), n.lanes |= 1), e);
}
var pM = _r.ReactCurrentOwner, At = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? rw(t, null, n, r) : na(t, e.child, n, r);
}
function sy(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Wi(t, o), r = lv(e, t, n, r, i, o), n = uv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : (Fe && n && Xm(t), t.flags |= 1, Pt(e, t, r, o), t.child);
}
function ly(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !bv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ew(e, t, i, r, o)) : (e = $u(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Fs, n(a, r) && e.ref === t.ref)
      return kr(e, t, o);
  }
  return t.flags |= 1, e = no(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ew(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fs(i, r) && e.ref === t.ref)
      if (At = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (At = !0);
      else
        return t.lanes = e.lanes, kr(e, t, o);
  }
  return wh(e, t, n, r, o);
}
function Tw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Te(Pi, Kt), Kt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Te(Pi, Kt), Kt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Te(Pi, Kt), Kt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Te(Pi, Kt), Kt |= r;
  return Pt(e, t, o, n), t.child;
}
function _w(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function wh(e, t, n, r, o) {
  var i = Ft(n) ? Bo : Ct.current;
  return i = ea(t, i), Wi(t, o), n = lv(e, t, n, r, i, o), r = uv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : (Fe && r && Xm(t), t.flags |= 1, Pt(e, t, n, o), t.child);
}
function uy(e, t, n, r, o) {
  if (Ft(n)) {
    var i = !0;
    cc(t);
  } else
    i = !1;
  if (Wi(t, o), t.stateNode === null)
    Mu(e, t), tw(t, n, r), Sh(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Sn(u) : (u = Ft(n) ? Bo : Ct.current, u = ea(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && ey(t, a, r, u), Nr = !1;
    var f = t.memoizedState;
    a.state = f, mc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Dt.current || Nr ? (typeof c == "function" && (bh(t, n, c, r), l = t.memoizedState), (s = Nr || J0(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Jx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : On(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = Sn(l) : (l = Ft(n) ? Bo : Ct.current, l = ea(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && ey(t, a, r, l), Nr = !1, f = t.memoizedState, a.state = f, mc(t, r, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || Dt.current || Nr ? (typeof p == "function" && (bh(t, n, p, r), g = t.memoizedState), (u = Nr || J0(t, n, u, r, f, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), a.props = r, a.state = g, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ch(e, t, n, r, i, o);
}
function Ch(e, t, n, r, o, i) {
  _w(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && Y0(t, n, !1), kr(e, t, i);
  r = t.stateNode, pM.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = na(t, e.child, null, i), t.child = na(t, null, s, i)) : Pt(e, t, s, i), t.memoizedState = r.state, o && Y0(t, n, !0), t.child;
}
function Ow(e) {
  var t = e.stateNode;
  t.pendingContext ? K0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && K0(e, t.context, !1), ov(e, t.containerInfo);
}
function cy(e, t, n, r, o) {
  return ta(), Zm(o), t.flags |= 256, Pt(e, t, n, r), t.child;
}
var kh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ph(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mw(e, t, n) {
  var r = t.pendingProps, o = ze.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Te(ze, o & 1), e === null)
    return gh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = pd(a, r, 0, null), e = Fo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ph(n), t.memoizedState = kh, e) : fv(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return hM(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = no(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = no(s, i) : (i = Fo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Ph(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = kh, r;
  }
  return i = e.child, e = i.sibling, r = no(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function fv(e, t) {
  return t = pd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Yl(e, t, n, r) {
  return r !== null && Zm(r), na(t, e.child, null, n), e = fv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function hM(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Vf(Error(F(422))), Yl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = pd({ mode: "visible", children: r.children }, o, 0, null), i = Fo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && na(t, e.child, null, a), t.child.memoizedState = Ph(a), t.memoizedState = kh, i);
  if (!(t.mode & 1))
    return Yl(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = Vf(i, r, void 0), Yl(e, t, a, r);
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Cr(e, o), Dn(r, e, o, -1));
    }
    return yv(), r = Vf(Error(F(421))), Yl(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = TM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Yt = Zr(o.nextSibling), qt = t, Fe = !0, In = null, e !== null && (pn[hn++] = dr, pn[hn++] = fr, pn[hn++] = Wo, dr = e.id, fr = e.overflow, Wo = t), t = fv(t, r.children), t.flags |= 4096, t);
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
function Iw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Pt(e, t, r.children, n), r = ze.current, r & 2)
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
  if (Te(ze, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && vc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Bf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && vc(e) === null) {
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
function Mu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Uo |= t.lanes, !(n & t.childLanes))
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
function mM(e, t, n) {
  switch (t.tag) {
    case 3:
      Ow(t), ta();
      break;
    case 5:
      ow(t);
      break;
    case 1:
      Ft(t.type) && cc(t);
      break;
    case 4:
      ov(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Te(pc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Te(ze, ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mw(e, t, n) : (Te(ze, ze.current & 1), e = kr(e, t, n), e !== null ? e.sibling : null);
      Te(ze, ze.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Iw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(ze, ze.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Tw(e, t, n);
  }
  return kr(e, t, n);
}
var Rw, Eh, $w, Aw;
Rw = function(e, t) {
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
Eh = function() {
};
$w = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Ro(Qn.current);
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
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = lc);
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
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Os.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Os.hasOwnProperty(u) ? (l != null && u === "onScroll" && Me("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Aw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function La(e, t) {
  if (!Fe)
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
function bt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function vM(e, t, n) {
  var r = t.pendingProps;
  switch (Qm(t), t.tag) {
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
      return bt(t), null;
    case 1:
      return Ft(t.type) && uc(), bt(t), null;
    case 3:
      return r = t.stateNode, ra(), Re(Dt), Re(Ct), av(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, In !== null && (Ah(In), In = null))), Eh(e, t), bt(t), null;
    case 5:
      iv(t);
      var o = Ro(Vs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        $w(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return bt(t), null;
        }
        if (e = Ro(Qn.current), Gl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Kn] = t, r[js] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Xa.length; o++)
                Me(Xa[o], r);
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
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Ul(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Ul(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Os.hasOwnProperty(a) && s != null && a === "onScroll" && Me("scroll", r);
            }
          switch (n) {
            case "input":
              Ll(r), x0(r, i, !0);
              break;
            case "textarea":
              Ll(r), C0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = lc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Kn] = t, e[js] = r, Rw(e, t, !1, !1), t.stateNode = e;
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
                for (o = 0; o < Xa.length; o++)
                  Me(Xa[o], e);
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
                i === "style" ? cx(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && lx(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ms(e, l) : typeof l == "number" && Ms(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Os.hasOwnProperty(i) ? l != null && i === "onScroll" && Me("scroll", e) : l != null && Fm(e, i, l, a));
              }
            switch (n) {
              case "input":
                Ll(e), x0(e, r, !1);
                break;
              case "textarea":
                Ll(e), C0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ao(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ji(e, !!r.multiple, i, !1) : r.defaultValue != null && ji(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = lc);
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
      return bt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Aw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Ro(Vs.current), Ro(Qn.current), Gl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Kn] = t, (i = r.nodeValue !== n) && (e = qt, e !== null))
            switch (e.tag) {
              case 3:
                Ul(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ul(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Kn] = t, t.stateNode = r;
      }
      return bt(t), null;
    case 13:
      if (Re(ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Fe && Yt !== null && t.mode & 1 && !(t.flags & 128))
          Qx(), ta(), t.flags |= 98560, i = !1;
        else if (i = Gl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(F(317));
            i[Kn] = t;
          } else
            ta(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          bt(t), i = !1;
        } else
          In !== null && (Ah(In), In = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ze.current & 1 ? tt === 0 && (tt = 3) : yv())), t.updateQueue !== null && (t.flags |= 4), bt(t), null);
    case 4:
      return ra(), Eh(e, t), e === null && Ls(t.stateNode.containerInfo), bt(t), null;
    case 10:
      return tv(t.type._context), bt(t), null;
    case 17:
      return Ft(t.type) && uc(), bt(t), null;
    case 19:
      if (Re(ze), i = t.memoizedState, i === null)
        return bt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          La(i, !1);
        else {
          if (tt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = vc(e), a !== null) {
                for (t.flags |= 128, La(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Te(ze, ze.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ke() > ia && (t.flags |= 128, r = !0, La(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = vc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), La(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Fe)
              return bt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > ia && n !== 1073741824 && (t.flags |= 128, r = !0, La(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = ze.current, Te(ze, r ? n & 1 | 2 : n & 1), t) : (bt(t), null);
    case 22:
    case 23:
      return gv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function gM(e, t) {
  switch (Qm(t), t.tag) {
    case 1:
      return Ft(t.type) && uc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ra(), Re(Dt), Re(Ct), av(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return iv(t), null;
    case 13:
      if (Re(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        ta();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Re(ze), null;
    case 4:
      return ra(), null;
    case 10:
      return tv(t.type._context), null;
    case 22:
    case 23:
      return gv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ql = !1, xt = !1, yM = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function ki(e, t) {
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
function bM(e, t) {
  if (ch = ic, e = zx(), qm(e)) {
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
  for (dh = { focusedElem: e, selectionRange: n }, ic = !1, B = t; B !== null; )
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
                  var y = g.memoizedProps, b = g.memoizedState, h = t.stateNode, v = h.getSnapshotBeforeUpdate(t.elementType === t.type ? y : On(t.type, y), b);
                  h.__reactInternalSnapshotBeforeUpdate = v;
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
  return g = fy, fy = !1, g;
}
function fs(e, t, n) {
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
function dd(e, t) {
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
function _h(e) {
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
function Dw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Dw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Kn], delete t[js], delete t[hh], delete t[tM], delete t[nM])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Fw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function py(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Fw(e.return))
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
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = lc));
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
    Lw(e, t, n), n = n.sibling;
}
function Lw(e, t, n) {
  if (Xn && typeof Xn.onCommitFiberUnmount == "function")
    try {
      Xn.onCommitFiberUnmount(rd, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      xt || ki(n, t);
    case 6:
      var r = dt, o = Mn;
      dt = null, Ar(e, t, n), dt = r, Mn = o, dt !== null && (Mn ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (Mn ? (e = dt, n = n.stateNode, e.nodeType === 8 ? Df(e.parentNode, n) : e.nodeType === 1 && Df(e, n), As(e)) : Df(dt, n.stateNode));
      break;
    case 4:
      r = dt, o = Mn, dt = n.stateNode.containerInfo, Mn = !0, Ar(e, t, n), dt = r, Mn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Th(n, t, a), o = o.next;
        } while (o !== r);
      }
      Ar(e, t, n);
      break;
    case 1:
      if (!xt && (ki(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
      n.mode & 1 ? (xt = (r = xt) || n.memoizedState !== null, Ar(e, t, n), xt = r) : Ar(e, t, n);
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
    n === null && (n = e.stateNode = new yM()), t.forEach(function(r) {
      var o = _M.bind(null, e, r);
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
        Lw(i, a, o), dt = null, Mn = !1;
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
      if (Tn(t, e), Nn(e), r & 4) {
        try {
          fs(3, e, e.return), dd(3, e);
        } catch (y) {
          We(e, e.return, y);
        }
        try {
          fs(5, e, e.return);
        } catch (y) {
          We(e, e.return, y);
        }
      }
      break;
    case 1:
      Tn(t, e), Nn(e), r & 512 && n !== null && ki(n, n.return);
      break;
    case 5:
      if (Tn(t, e), Nn(e), r & 512 && n !== null && ki(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ms(o, "");
        } catch (y) {
          We(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && ix(o, i), eh(s, a);
            var u = eh(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? cx(o, d) : c === "dangerouslySetInnerHTML" ? lx(o, d) : c === "children" ? Ms(o, d) : Fm(o, c, d, u);
            }
            switch (s) {
              case "input":
                qp(o, i);
                break;
              case "textarea":
                ax(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? ji(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? ji(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ji(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[js] = i;
          } catch (y) {
            We(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Tn(t, e), Nn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(F(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          We(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Tn(t, e), Nn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          As(t.containerInfo);
        } catch (y) {
          We(e, e.return, y);
        }
      break;
    case 4:
      Tn(t, e), Nn(e);
      break;
    case 13:
      Tn(t, e), Nn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (mv = Ke())), r & 4 && hy(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (xt = (u = xt) || c, Tn(t, e), xt = u) : Tn(t, e), Nn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (B = e, c = e.child; c !== null; ) {
            for (d = B = c; B !== null; ) {
              switch (f = B, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fs(4, f, f.return);
                  break;
                case 1:
                  ki(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      We(r, n, y);
                    }
                  }
                  break;
                case 5:
                  ki(f, f.return);
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
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = ux("display", a));
                } catch (y) {
                  We(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (y) {
                  We(e, e.return, y);
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
      Tn(t, e), Nn(e), r & 4 && hy(e);
      break;
    case 21:
      break;
    default:
      Tn(
        t,
        e
      ), Nn(e);
  }
}
function Nn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fw(n)) {
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
          r.flags & 32 && (Ms(o, ""), r.flags &= -33);
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
function SM(e, t, n) {
  B = e, jw(e);
}
function jw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ql;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || xt;
        s = ql;
        var u = xt;
        if (ql = a, (xt = l) && !u)
          for (B = o; B !== null; )
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? gy(o) : l !== null ? (l.return = a, B = l) : gy(o);
        for (; i !== null; )
          B = i, jw(i), i = i.sibling;
        B = o, ql = s, xt = u;
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
              xt || dd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xt)
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
                    d !== null && As(d);
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
        xt || t.flags & 512 && _h(t);
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
            dd(4, t);
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
            _h(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            _h(t);
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
var xM = Math.ceil, bc = _r.ReactCurrentDispatcher, pv = _r.ReactCurrentOwner, gn = _r.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Kt = 0, Pi = fo(0), tt = 0, Us = null, Uo = 0, fd = 0, hv = 0, ps = null, It = null, mv = 0, ia = 1 / 0, sr = null, Sc = !1, Ih = null, eo = null, Xl = !1, Yr = null, xc = 0, hs = 0, Rh = null, Iu = -1, Ru = 0;
function Tt() {
  return he & 6 ? Ke() : Iu !== -1 ? Iu : Iu = Ke();
}
function to(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : oM.transition !== null ? (Ru === 0 && (Ru = wx()), Ru) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ox(e.type)), e) : 1;
}
function Dn(e, t, n, r) {
  if (50 < hs)
    throw hs = 0, Rh = null, Error(F(185));
  ul(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (fd |= n), tt === 4 && Wr(e, pt)), Lt(e, r), n === 1 && he === 0 && !(t.mode & 1) && (ia = Ke() + 500, ld && po()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  oO(e, t);
  var r = oc(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && E0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && E0(n), t === 1)
      e.tag === 0 ? rM(yy.bind(null, e)) : Yx(yy.bind(null, e)), JO(function() {
        !(he & 6) && po();
      }), n = null;
    else {
      switch (Cx(r)) {
        case 1:
          n = Vm;
          break;
        case 4:
          n = Sx;
          break;
        case 16:
          n = rc;
          break;
        case 536870912:
          n = xx;
          break;
        default:
          n = rc;
      }
      n = Kw(n, Nw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Nw(e, t) {
  if (Iu = -1, Ru = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Hi() && e.callbackNode !== n)
    return null;
  var r = oc(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = wc(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Bw();
    (st !== e || pt !== t) && (sr = null, ia = Ke() + 500, Do(e, t));
    do
      try {
        kM();
        break;
      } catch (s) {
        Vw(e, s);
      }
    while (!0);
    ev(), bc.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = tt);
  }
  if (t !== 0) {
    if (t === 2 && (o = ih(e), o !== 0 && (r = o, t = $h(e, o))), t === 1)
      throw n = Us, Do(e, 0), Wr(e, r), Lt(e, Ke()), n;
    if (t === 6)
      Wr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !wM(o) && (t = wc(e, r), t === 2 && (i = ih(e), i !== 0 && (r = i, t = $h(e, i))), t === 1))
        throw n = Us, Do(e, 0), Wr(e, r), Lt(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Co(e, It, sr);
          break;
        case 3:
          if (Wr(e, r), (r & 130023424) === r && (t = mv + 500 - Ke(), 10 < t)) {
            if (oc(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Tt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ph(Co.bind(null, e, It, sr), t);
            break;
          }
          Co(e, It, sr);
          break;
        case 4:
          if (Wr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - An(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xM(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ph(Co.bind(null, e, It, sr), r);
            break;
          }
          Co(e, It, sr);
          break;
        case 5:
          Co(e, It, sr);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Lt(e, Ke()), e.callbackNode === n ? Nw.bind(null, e) : null;
}
function $h(e, t) {
  var n = ps;
  return e.current.memoizedState.isDehydrated && (Do(e, t).flags |= 256), e = wc(e, t), e !== 2 && (t = It, It = n, t !== null && Ah(t)), e;
}
function Ah(e) {
  It === null ? It = e : It.push.apply(It, e);
}
function wM(e) {
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
  for (t &= ~hv, t &= ~fd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - An(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function yy(e) {
  if (he & 6)
    throw Error(F(327));
  Hi();
  var t = oc(e, 0);
  if (!(t & 1))
    return Lt(e, Ke()), null;
  var n = wc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ih(e);
    r !== 0 && (t = r, n = $h(e, r));
  }
  if (n === 1)
    throw n = Us, Do(e, 0), Wr(e, t), Lt(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Co(e, It, sr), Lt(e, Ke()), null;
}
function vv(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (ia = Ke() + 500, ld && po());
  }
}
function Go(e) {
  Yr !== null && Yr.tag === 0 && !(he & 6) && Hi();
  var t = he;
  he |= 1;
  var n = gn.transition, r = xe;
  try {
    if (gn.transition = null, xe = 1, e)
      return e();
  } finally {
    xe = r, gn.transition = n, he = t, !(he & 6) && po();
  }
}
function gv() {
  Kt = Pi.current, Re(Pi);
}
function Do(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ZO(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (Qm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && uc();
          break;
        case 3:
          ra(), Re(Dt), Re(Ct), av();
          break;
        case 5:
          iv(r);
          break;
        case 4:
          ra();
          break;
        case 13:
          Re(ze);
          break;
        case 19:
          Re(ze);
          break;
        case 10:
          tv(r.type._context);
          break;
        case 22:
        case 23:
          gv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = no(e.current, null), pt = Kt = t, tt = 0, Us = null, hv = fd = Uo = 0, It = ps = null, Io !== null) {
    for (t = 0; t < Io.length; t++)
      if (n = Io[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    Io = null;
  }
  return e;
}
function Vw(e, t) {
  do {
    var n = Ze;
    try {
      if (ev(), _u.current = yc, gc) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        gc = !1;
      }
      if (Ho = 0, it = et = Ne = null, ds = !1, Bs = 0, pv.current = null, n === null || n.return === null) {
        tt = 1, Us = t, Ze = null;
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
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              oy(i, u, t), yv();
              break e;
            }
            l = Error(F(426));
          }
        } else if (Fe && s.mode & 1) {
          var b = iy(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), ay(b, a, s, i, t), Zm(oa(l, s));
            break e;
          }
        }
        i = l = oa(l, s), tt !== 4 && (tt = 2), ps === null ? ps = [i] : ps.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = kw(i, l, t);
              Q0(i, h);
              break e;
            case 1:
              s = l;
              var v = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof v.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (eo === null || !eo.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = Pw(i, s, t);
                Q0(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hw(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bw() {
  var e = bc.current;
  return bc.current = yc, e === null ? yc : e;
}
function yv() {
  (tt === 0 || tt === 3 || tt === 2) && (tt = 4), st === null || !(Uo & 268435455) && !(fd & 268435455) || Wr(st, pt);
}
function wc(e, t) {
  var n = he;
  he |= 2;
  var r = Bw();
  (st !== e || pt !== t) && (sr = null, Do(e, t));
  do
    try {
      CM();
      break;
    } catch (o) {
      Vw(e, o);
    }
  while (!0);
  if (ev(), he = n, bc.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, tt;
}
function CM() {
  for (; Ze !== null; )
    Ww(Ze);
}
function kM() {
  for (; Ze !== null && !q_(); )
    Ww(Ze);
}
function Ww(e) {
  var t = Gw(e.alternate, e, Kt);
  e.memoizedProps = e.pendingProps, t === null ? Hw(e) : Ze = t, pv.current = null;
}
function Hw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = gM(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        tt = 6, Ze = null;
        return;
      }
    } else if (n = vM(n, t, Kt), n !== null) {
      Ze = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ze = t;
      return;
    }
    Ze = t = e;
  } while (t !== null);
  tt === 0 && (tt = 5);
}
function Co(e, t, n) {
  var r = xe, o = gn.transition;
  try {
    gn.transition = null, xe = 1, PM(e, t, n, r);
  } finally {
    gn.transition = o, xe = r;
  }
  return null;
}
function PM(e, t, n, r) {
  do
    Hi();
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
  if (iO(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xl || (Xl = !0, Kw(rc, function() {
    return Hi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = gn.transition, gn.transition = null;
    var a = xe;
    xe = 1;
    var s = he;
    he |= 4, pv.current = null, bM(e, n), zw(n, e), UO(dh), ic = !!ch, dh = ch = null, e.current = n, SM(n), X_(), he = s, xe = a, gn.transition = i;
  } else
    e.current = n;
  if (Xl && (Xl = !1, Yr = e, xc = o), i = e.pendingLanes, i === 0 && (eo = null), J_(n.stateNode), Lt(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Sc)
    throw Sc = !1, e = Ih, Ih = null, e;
  return xc & 1 && e.tag !== 0 && Hi(), i = e.pendingLanes, i & 1 ? e === Rh ? hs++ : (hs = 0, Rh = e) : hs = 0, po(), null;
}
function Hi() {
  if (Yr !== null) {
    var e = Cx(xc), t = gn.transition, n = xe;
    try {
      if (gn.transition = null, xe = 16 > e ? 16 : e, Yr === null)
        var r = !1;
      else {
        if (e = Yr, Yr = null, xc = 0, he & 6)
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
                      fs(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (Dw(c), c === u) {
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
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var b = y.sibling;
                    y.sibling = null, y = b;
                  } while (y !== null);
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
                      fs(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  h.return = i.return, B = h;
                  break e;
                }
                B = i.return;
              }
        }
        var v = e.current;
        for (B = v; B !== null; ) {
          a = B;
          var S = a.child;
          if (a.subtreeFlags & 2064 && S !== null)
            S.return = a, B = S;
          else
            e:
              for (a = v; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dd(9, s);
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
        if (he = o, po(), Xn && typeof Xn.onPostCommitFiberRoot == "function")
          try {
            Xn.onPostCommitFiberRoot(rd, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      xe = n, gn.transition = t;
    }
  }
  return !1;
}
function by(e, t, n) {
  t = oa(n, t), t = kw(e, t, 1), e = Jr(e, t, 1), t = Tt(), e !== null && (ul(e, 1, t), Lt(e, t));
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
          e = oa(n, e), e = Pw(t, e, 1), t = Jr(t, e, 1), e = Tt(), t !== null && (ul(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function EM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Tt(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (tt === 4 || tt === 3 && (pt & 130023424) === pt && 500 > Ke() - mv ? Do(e, 0) : hv |= n), Lt(e, t);
}
function Uw(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nl, Nl <<= 1, !(Nl & 130023424) && (Nl = 4194304)) : t = 1);
  var n = Tt();
  e = Cr(e, t), e !== null && (ul(e, t, n), Lt(e, n));
}
function TM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Uw(e, n);
}
function _M(e, t) {
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
  r !== null && r.delete(t), Uw(e, n);
}
var Gw;
Gw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current)
      At = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return At = !1, mM(e, t, n);
      At = !!(e.flags & 131072);
    }
  else
    At = !1, Fe && t.flags & 1048576 && qx(t, fc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Mu(e, t), e = t.pendingProps;
      var o = ea(t, Ct.current);
      Wi(t, n), o = lv(null, t, r, e, o, n);
      var i = uv();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(r) ? (i = !0, cc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, rv(t), o.updater = ud, t.stateNode = o, o._reactInternals = t, Sh(t, r, e, n), t = Ch(null, t, r, !0, i, n)) : (t.tag = 0, Fe && i && Xm(t), Pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Mu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = MM(r), e = On(r, e), o) {
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
        if (Ow(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Jx(e, t), mc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = oa(Error(F(423)), t), t = cy(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = oa(Error(F(424)), t), t = cy(e, t, r, n, o);
            break e;
          } else
            for (Yt = Zr(t.stateNode.containerInfo.firstChild), qt = t, Fe = !0, In = null, n = rw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ta(), r === o) {
            t = kr(e, t, n);
            break e;
          }
          Pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ow(t), e === null && gh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, fh(r, o) ? a = null : i !== null && fh(r, i) && (t.flags |= 32), _w(e, t), Pt(e, t, a, n), t.child;
    case 6:
      return e === null && gh(t), null;
    case 13:
      return Mw(e, t, n);
    case 4:
      return ov(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = na(t, null, r, n) : Pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), sy(e, t, r, o, n);
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Te(pc, r._currentValue), r._currentValue = a, i !== null)
          if (Ln(i.value, a)) {
            if (i.children === o.children && !Dt.current) {
              t = kr(e, t, n);
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
                      l = mr(-1, n & -n), l.tag = 2;
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
        Pt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Wi(t, n), o = Sn(o), r = r(o), t.flags |= 1, Pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = On(r, t.pendingProps), o = On(r.type, o), ly(e, t, r, o, n);
    case 15:
      return Ew(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : On(r, o), Mu(e, t), t.tag = 1, Ft(r) ? (e = !0, cc(t)) : e = !1, Wi(t, n), tw(t, r, o), Sh(t, r, o, n), Ch(null, t, r, !0, e, n);
    case 19:
      return Iw(e, t, n);
    case 22:
      return Tw(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Kw(e, t) {
  return bx(e, t);
}
function OM(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function mn(e, t, n, r) {
  return new OM(e, t, n, r);
}
function bv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function MM(e) {
  if (typeof e == "function")
    return bv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === zm)
      return 11;
    if (e === jm)
      return 14;
  }
  return 2;
}
function no(e, t) {
  var n = e.alternate;
  return n === null ? (n = mn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function $u(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    bv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case mi:
          return Fo(n.children, o, i, t);
        case Lm:
          a = 8, o |= 8;
          break;
        case Hp:
          return e = mn(12, n, t, o | 2), e.elementType = Hp, e.lanes = i, e;
        case Up:
          return e = mn(13, n, t, o), e.elementType = Up, e.lanes = i, e;
        case Gp:
          return e = mn(19, n, t, o), e.elementType = Gp, e.lanes = i, e;
        case nx:
          return pd(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ex:
                a = 10;
                break e;
              case tx:
                a = 9;
                break e;
              case zm:
                a = 11;
                break e;
              case jm:
                a = 14;
                break e;
              case jr:
                a = 16, r = null;
                break e;
            }
          throw Error(F(130, e == null ? e : typeof e, ""));
      }
  return t = mn(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Fo(e, t, n, r) {
  return e = mn(7, e, r, t), e.lanes = n, e;
}
function pd(e, t, n, r) {
  return e = mn(22, e, r, t), e.elementType = nx, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Wf(e, t, n) {
  return e = mn(6, e, null, t), e.lanes = n, e;
}
function Hf(e, t, n) {
  return t = mn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function IM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kf(0), this.expirationTimes = kf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Sv(e, t, n, r, o, i, a, s, l) {
  return e = new IM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = mn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, rv(i), e;
}
function RM(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Yw(e) {
  if (!e)
    return so;
  e = e._reactInternals;
  e: {
    if (Qo(e) !== e || e.tag !== 1)
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
      return Kx(e, n, t);
  }
  return t;
}
function qw(e, t, n, r, o, i, a, s, l) {
  return e = Sv(n, r, !0, e, o, i, a, s, l), e.context = Yw(null), n = e.current, r = Tt(), o = to(n), i = mr(r, o), i.callback = t ?? null, Jr(n, i, o), e.current.lanes = o, ul(e, o, r), Lt(e, r), e;
}
function hd(e, t, n, r) {
  var o = t.current, i = Tt(), a = to(o);
  return n = Yw(n), t.context === null ? t.context = n : t.pendingContext = n, t = mr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jr(o, t, a), e !== null && (Dn(e, o, a, i), Tu(e, o, a)), a;
}
function Cc(e) {
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
function xv(e, t) {
  Sy(e, t), (e = e.alternate) && Sy(e, t);
}
function $M() {
  return null;
}
var Xw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function wv(e) {
  this._internalRoot = e;
}
md.prototype.render = wv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  hd(e, t, null, null);
};
md.prototype.unmount = wv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Go(function() {
      hd(null, e, null, null);
    }), t[wr] = null;
  }
};
function md(e) {
  this._internalRoot = e;
}
md.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ex();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++)
      ;
    Br.splice(n, 0, e), n === 0 && _x(e);
  }
};
function Cv(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function vd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function xy() {
}
function AM(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Cc(a);
        i.call(u);
      };
    }
    var a = qw(t, r, e, 0, null, !1, !1, "", xy);
    return e._reactRootContainer = a, e[wr] = a.current, Ls(e.nodeType === 8 ? e.parentNode : e), Go(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Cc(l);
      s.call(u);
    };
  }
  var l = Sv(e, 0, !1, null, null, !1, !1, "", xy);
  return e._reactRootContainer = l, e[wr] = l.current, Ls(e.nodeType === 8 ? e.parentNode : e), Go(function() {
    hd(t, l, n, r);
  }), l;
}
function gd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Cc(a);
        s.call(l);
      };
    }
    hd(t, a, e, o);
  } else
    a = AM(n, t, e, o, r);
  return Cc(a);
}
kx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qa(t.pendingLanes);
        n !== 0 && (Bm(t, n | 1), Lt(t, Ke()), !(he & 6) && (ia = Ke() + 500, po()));
      }
      break;
    case 13:
      Go(function() {
        var r = Cr(e, 1);
        if (r !== null) {
          var o = Tt();
          Dn(r, e, 1, o);
        }
      }), xv(e, 1);
  }
};
Wm = function(e) {
  if (e.tag === 13) {
    var t = Cr(e, 134217728);
    if (t !== null) {
      var n = Tt();
      Dn(t, e, 134217728, n);
    }
    xv(e, 134217728);
  }
};
Px = function(e) {
  if (e.tag === 13) {
    var t = to(e), n = Cr(e, t);
    if (n !== null) {
      var r = Tt();
      Dn(n, e, t, r);
    }
    xv(e, t);
  }
};
Ex = function() {
  return xe;
};
Tx = function(e, t) {
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
            var o = sd(r);
            if (!o)
              throw Error(F(90));
            ox(r), qp(r, o);
          }
        }
      }
      break;
    case "textarea":
      ax(e, n);
      break;
    case "select":
      t = n.value, t != null && ji(e, !!n.multiple, t, !1);
  }
};
px = vv;
hx = Go;
var DM = { usingClientEntryPoint: !1, Events: [dl, bi, sd, dx, fx, vv] }, za = { findFiberByHostInstance: Mo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, FM = { bundleType: za.bundleType, version: za.version, rendererPackageName: za.rendererPackageName, rendererConfig: za.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _r.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = gx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: za.findFiberByHostInstance || $M, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ql.isDisabled && Ql.supportsFiber)
    try {
      rd = Ql.inject(FM), Xn = Ql;
    } catch {
    }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = DM;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cv(t))
    throw Error(F(200));
  return RM(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!Cv(e))
    throw Error(F(299));
  var n = !1, r = "", o = Xw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Sv(e, 1, !1, null, null, n, !1, r, o), e[wr] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new wv(t);
};
tn.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = gx(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return Go(e);
};
tn.hydrate = function(e, t, n) {
  if (!vd(t))
    throw Error(F(200));
  return gd(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!Cv(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Xw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = qw(t, null, e, 1, n ?? null, o, !1, i, a), e[wr] = t.current, Ls(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new md(t);
};
tn.render = function(e, t, n) {
  if (!vd(t))
    throw Error(F(200));
  return gd(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function(e) {
  if (!vd(e))
    throw Error(F(40));
  return e._reactRootContainer ? (Go(function() {
    gd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wr] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = vv;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!vd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return gd(e, t, n, !1, r);
};
tn.version = "18.2.0-next-9e3b772b8-20220608";
function Qw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qw);
    } catch (e) {
      console.error(e);
    }
}
Qw(), qS.exports = tn;
var yd = qS.exports, wy = yd;
Bp.createRoot = wy.createRoot, Bp.hydrateRoot = wy.hydrateRoot;
var Zw = "Expected a function", Cy = NaN, LM = "[object Symbol]", zM = /^\s+|\s+$/g, jM = /^[-+]0x[0-9a-f]+$/i, NM = /^0b[01]+$/i, VM = /^0o[0-7]+$/i, BM = parseInt, WM = typeof Gr == "object" && Gr && Gr.Object === Object && Gr, HM = typeof self == "object" && self && self.Object === Object && self, UM = WM || HM || Function("return this")(), GM = Object.prototype, KM = GM.toString, YM = Math.max, qM = Math.min, Uf = function() {
  return UM.Date.now();
};
function XM(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Zw);
  t = ky(t) || 0, kc(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? YM(ky(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var E = r, T = o;
    return r = o = void 0, u = P, a = e.apply(T, E), a;
  }
  function g(P) {
    return u = P, s = setTimeout(h, t), c ? p(P) : a;
  }
  function y(P) {
    var E = P - l, T = P - u, M = t - E;
    return d ? qM(M, i - T) : M;
  }
  function b(P) {
    var E = P - l, T = P - u;
    return l === void 0 || E >= t || E < 0 || d && T >= i;
  }
  function h() {
    var P = Uf();
    if (b(P))
      return v(P);
    s = setTimeout(h, y(P));
  }
  function v(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function S() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? a : v(Uf());
  }
  function k() {
    var P = Uf(), E = b(P);
    if (r = arguments, o = this, l = P, E) {
      if (s === void 0)
        return g(l);
      if (d)
        return s = setTimeout(h, t), p(l);
    }
    return s === void 0 && (s = setTimeout(h, t)), a;
  }
  return k.cancel = S, k.flush = x, k;
}
function QM(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Zw);
  return kc(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), XM(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function kc(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function ZM(e) {
  return !!e && typeof e == "object";
}
function JM(e) {
  return typeof e == "symbol" || ZM(e) && KM.call(e) == LM;
}
function ky(e) {
  if (typeof e == "number")
    return e;
  if (JM(e))
    return Cy;
  if (kc(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = kc(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(zM, "");
  var n = NM.test(e);
  return n || VM.test(e) ? BM(e.slice(2), n ? 2 : 8) : jM.test(e) ? Cy : +e;
}
var eI = QM;
const tI = /* @__PURE__ */ sl(eI);
function nI(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function rI(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var oI = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(rI(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = nI(o);
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
}(), St = "-ms-", Pc = "-moz-", ge = "-webkit-", Jw = "comm", kv = "rule", Pv = "decl", iI = "@import", eC = "@keyframes", aI = "@layer", sI = Math.abs, bd = String.fromCharCode, lI = Object.assign;
function uI(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function tC(e) {
  return e.trim();
}
function cI(e, t) {
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
function Gs(e, t, n) {
  return e.slice(t, n);
}
function Un(e) {
  return e.length;
}
function Ev(e) {
  return e.length;
}
function Zl(e, t) {
  return t.push(e), e;
}
function dI(e, t) {
  return e.map(t).join("");
}
var Sd = 1, aa = 1, nC = 0, Vt = 0, Qe = 0, Ca = "";
function xd(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Sd, column: aa, length: a, return: "" };
}
function ja(e, t) {
  return lI(xd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function fI() {
  return Qe;
}
function pI() {
  return Qe = Vt > 0 ? ft(Ca, --Vt) : 0, aa--, Qe === 10 && (aa = 1, Sd--), Qe;
}
function Xt() {
  return Qe = Vt < nC ? ft(Ca, Vt++) : 0, aa++, Qe === 10 && (aa = 1, Sd++), Qe;
}
function Zn() {
  return ft(Ca, Vt);
}
function Au() {
  return Vt;
}
function pl(e, t) {
  return Gs(Ca, e, t);
}
function Ks(e) {
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
function rC(e) {
  return Sd = aa = 1, nC = Un(Ca = e), Vt = 0, [];
}
function oC(e) {
  return Ca = "", e;
}
function Du(e) {
  return tC(pl(Vt - 1, Fh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hI(e) {
  for (; (Qe = Zn()) && Qe < 33; )
    Xt();
  return Ks(e) > 2 || Ks(Qe) > 3 ? "" : " ";
}
function mI(e, t) {
  for (; --t && Xt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return pl(e, Au() + (t < 6 && Zn() == 32 && Xt() == 32));
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
function vI(e, t) {
  for (; Xt() && e + Qe !== 57; )
    if (e + Qe === 84 && Zn() === 47)
      break;
  return "/*" + pl(t, Vt - 1) + "*" + bd(e === 47 ? e : Xt());
}
function gI(e) {
  for (; !Ks(Zn()); )
    Xt();
  return pl(e, Vt);
}
function yI(e) {
  return oC(Fu("", null, null, null, [""], e = rC(e), 0, [0], e));
}
function Fu(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, g = 0, y = 1, b = 1, h = 1, v = 0, S = "", x = o, k = i, P = r, E = S; b; )
    switch (g = v, v = Xt()) {
      case 40:
        if (g != 108 && ft(E, d - 1) == 58) {
          Dh(E += ye(Du(v), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Du(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += hI(g);
        break;
      case 92:
        E += mI(Au() - 1, 7);
        continue;
      case 47:
        switch (Zn()) {
          case 42:
          case 47:
            Zl(bI(vI(Xt(), Au()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * y:
        s[u++] = Un(E) * h;
      case 125 * y:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            h == -1 && (E = ye(E, /\f/g, "")), p > 0 && Un(E) - d && Zl(p > 32 ? Ey(E + ";", r, n, d - 1) : Ey(ye(E, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (Zl(P = Py(E, t, n, u, c, o, s, S, x = [], k = [], d), i), v === 123)
              if (c === 0)
                Fu(E, t, P, P, x, i, d, s, k);
              else
                switch (f === 99 && ft(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Fu(e, P, P, r && Zl(Py(e, P, P, 0, 0, o, s, S, o, x = [], d), k), o, k, d, s, r ? x : k);
                    break;
                  default:
                    Fu(E, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, y = h = 1, S = E = "", d = a;
        break;
      case 58:
        d = 1 + Un(E), p = g;
      default:
        if (y < 1) {
          if (v == 123)
            --y;
          else if (v == 125 && y++ == 0 && pI() == 125)
            continue;
        }
        switch (E += bd(v), v * y) {
          case 38:
            h = c > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            s[u++] = (Un(E) - 1) * h, h = 1;
            break;
          case 64:
            Zn() === 45 && (E += Du(Xt())), f = Zn(), c = d = Un(S = E += gI(Au())), v++;
            break;
          case 45:
            g === 45 && Un(E) == 2 && (y = 0);
        }
    }
  return i;
}
function Py(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = Ev(f), g = 0, y = 0, b = 0; g < r; ++g)
    for (var h = 0, v = Gs(e, d + 1, d = sI(y = a[g])), S = e; h < p; ++h)
      (S = tC(y > 0 ? f[h] + " " + v : ye(v, /&\f/g, f[h]))) && (l[b++] = S);
  return xd(e, t, n, o === 0 ? kv : s, l, u, c);
}
function bI(e, t, n) {
  return xd(e, t, n, Jw, bd(fI()), Gs(e, 2, -2), 0);
}
function Ey(e, t, n, r) {
  return xd(e, t, n, Pv, Gs(e, 0, r), Gs(e, r + 1, -1), r);
}
function Ui(e, t) {
  for (var n = "", r = Ev(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function SI(e, t, n, r) {
  switch (e.type) {
    case aI:
      if (e.children.length)
        break;
    case iI:
    case Pv:
      return e.return = e.return || e.value;
    case Jw:
      return "";
    case eC:
      return e.return = e.value + "{" + Ui(e.children, r) + "}";
    case kv:
      e.value = e.props.join(",");
  }
  return Un(n = Ui(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function xI(e) {
  var t = Ev(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function wI(e) {
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
function iC(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var CI = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Zn(), o === 38 && i === 12 && (n[r] = 1), !Ks(i); )
    Xt();
  return pl(t, Vt);
}, kI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ks(o)) {
      case 0:
        o === 38 && Zn() === 12 && (n[r] = 1), t[r] += CI(Vt - 1, n, r);
        break;
      case 2:
        t[r] += Du(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Zn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += bd(o);
    }
  while (o = Xt());
  return t;
}, PI = function(t, n) {
  return oC(kI(rC(t), n));
}, _y = /* @__PURE__ */ new WeakMap(), EI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !_y.get(r)) && !o) {
      _y.set(t, !0);
      for (var i = [], a = PI(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, TI = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function aC(e, t) {
  switch (uI(e, t)) {
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
      return ge + e + Pc + e + St + e + e;
    case 6828:
    case 4268:
      return ge + e + St + e + e;
    case 6165:
      return ge + e + St + "flex-" + e + e;
    case 5187:
      return ge + e + ye(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + St + "flex-$1$2") + e;
    case 5443:
      return ge + e + St + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return ge + e + St + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ge + e + St + ye(e, "shrink", "negative") + e;
    case 5292:
      return ge + e + St + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return ge + "box-" + ye(e, "-grow", "") + ge + e + St + ye(e, "grow", "positive") + e;
    case 4554:
      return ge + ye(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + St + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ge + e + e;
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
      if (Un(e) - 1 - t > 6)
        switch (ft(e, t + 1)) {
          case 109:
            if (ft(e, t + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Pc + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Dh(e, "stretch") ? aC(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Un(e) - 3 - (~Dh(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + ge) + e;
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ge + (ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ge + "$2$3$1" + St + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ft(e, t + 11)) {
        case 114:
          return ge + e + St + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ge + e + St + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ge + e + St + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ge + e + St + e + e;
  }
  return e;
}
var _I = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Pv:
        t.return = aC(t.value, t.length);
        break;
      case eC:
        return Ui([ja(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case kv:
        if (t.length)
          return dI(t.props, function(i) {
            switch (cI(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ui([ja(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + Pc + "$1")]
                })], o);
              case "::placeholder":
                return Ui([ja(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), ja(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + Pc + "$1")]
                }), ja(t, {
                  props: [ye(i, /:(plac\w+)/, St + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, OI = [_I], MI = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var b = y.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || OI, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var b = y.getAttribute("data-emotion").split(" "), h = 1; h < b.length; h++)
        i[b[h]] = !0;
      s.push(y);
    }
  );
  var l, u = [EI, TI];
  {
    var c, d = [SI, wI(function(y) {
      c.insert(y);
    })], f = xI(u.concat(o, d)), p = function(b) {
      return Ui(yI(b), f);
    };
    l = function(b, h, v, S) {
      c = v, p(b ? b + "{" + h.styles + "}" : h.styles), S && (g.inserted[h.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new oI({
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
var sC = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, Tv = lt ? Symbol.for("react.element") : 60103, _v = lt ? Symbol.for("react.portal") : 60106, wd = lt ? Symbol.for("react.fragment") : 60107, Cd = lt ? Symbol.for("react.strict_mode") : 60108, kd = lt ? Symbol.for("react.profiler") : 60114, Pd = lt ? Symbol.for("react.provider") : 60109, Ed = lt ? Symbol.for("react.context") : 60110, Ov = lt ? Symbol.for("react.async_mode") : 60111, Td = lt ? Symbol.for("react.concurrent_mode") : 60111, _d = lt ? Symbol.for("react.forward_ref") : 60112, Od = lt ? Symbol.for("react.suspense") : 60113, II = lt ? Symbol.for("react.suspense_list") : 60120, Md = lt ? Symbol.for("react.memo") : 60115, Id = lt ? Symbol.for("react.lazy") : 60116, RI = lt ? Symbol.for("react.block") : 60121, $I = lt ? Symbol.for("react.fundamental") : 60117, AI = lt ? Symbol.for("react.responder") : 60118, DI = lt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Tv:
        switch (e = e.type, e) {
          case Ov:
          case Td:
          case wd:
          case kd:
          case Cd:
          case Od:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ed:
              case _d:
              case Id:
              case Md:
              case Pd:
                return e;
              default:
                return t;
            }
        }
      case _v:
        return t;
    }
  }
}
function lC(e) {
  return rn(e) === Td;
}
we.AsyncMode = Ov;
we.ConcurrentMode = Td;
we.ContextConsumer = Ed;
we.ContextProvider = Pd;
we.Element = Tv;
we.ForwardRef = _d;
we.Fragment = wd;
we.Lazy = Id;
we.Memo = Md;
we.Portal = _v;
we.Profiler = kd;
we.StrictMode = Cd;
we.Suspense = Od;
we.isAsyncMode = function(e) {
  return lC(e) || rn(e) === Ov;
};
we.isConcurrentMode = lC;
we.isContextConsumer = function(e) {
  return rn(e) === Ed;
};
we.isContextProvider = function(e) {
  return rn(e) === Pd;
};
we.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tv;
};
we.isForwardRef = function(e) {
  return rn(e) === _d;
};
we.isFragment = function(e) {
  return rn(e) === wd;
};
we.isLazy = function(e) {
  return rn(e) === Id;
};
we.isMemo = function(e) {
  return rn(e) === Md;
};
we.isPortal = function(e) {
  return rn(e) === _v;
};
we.isProfiler = function(e) {
  return rn(e) === kd;
};
we.isStrictMode = function(e) {
  return rn(e) === Cd;
};
we.isSuspense = function(e) {
  return rn(e) === Od;
};
we.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === wd || e === Td || e === kd || e === Cd || e === Od || e === II || typeof e == "object" && e !== null && (e.$$typeof === Id || e.$$typeof === Md || e.$$typeof === Pd || e.$$typeof === Ed || e.$$typeof === _d || e.$$typeof === $I || e.$$typeof === AI || e.$$typeof === DI || e.$$typeof === RI);
};
we.typeOf = rn;
sC.exports = we;
var FI = sC.exports, uC = FI, LI = {
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
}, cC = {};
cC[uC.ForwardRef] = LI;
cC[uC.Memo] = zI;
var jI = !0;
function dC(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var Mv = function(t, n, r) {
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
  jI === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Iv = function(t, n, r) {
  Mv(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function NI(e) {
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
var VI = {
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
}, BI = /[A-Z]|^ms/g, WI = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fC = function(t) {
  return t.charCodeAt(1) === 45;
}, Oy = function(t) {
  return t != null && typeof t != "boolean";
}, Gf = /* @__PURE__ */ iC(function(e) {
  return fC(e) ? e : e.replace(BI, "-$&").toLowerCase();
}), My = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(WI, function(r, o, i) {
          return Gn = {
            name: o,
            styles: i,
            next: Gn
          }, o;
        });
  }
  return VI[t] !== 1 && !fC(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ys(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return Gn = {
          name: n.name,
          styles: n.styles,
          next: Gn
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Gn = {
              name: r.name,
              styles: r.styles,
              next: Gn
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return HI(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Gn, a = n(e);
        return Gn = i, Ys(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function HI(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ys(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Oy(a) && (r += Gf(i) + ":" + My(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Oy(a[s]) && (r += Gf(i) + ":" + My(i, a[s]) + ";");
      else {
        var l = Ys(e, t, a);
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
var Iy = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Gn, Rd = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Gn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Ys(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Ys(r, n, t[s]), o && (i += a[s]);
  Iy.lastIndex = 0;
  for (var l = "", u; (u = Iy.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = NI(i) + l;
  return {
    name: c,
    styles: i,
    next: Gn
  };
}, UI = function(t) {
  return t();
}, pC = v0.useInsertionEffect ? v0.useInsertionEffect : !1, hC = pC || UI, Ry = pC || m.useLayoutEffect, Rv = {}.hasOwnProperty, mC = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ MI({
    key: "css"
  }) : null
);
mC.Provider;
var $v = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(n, r) {
    var o = m.useContext(mC);
    return t(n, o, r);
  });
}, sa = /* @__PURE__ */ m.createContext({}), GI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, KI = /* @__PURE__ */ Ty(function(e) {
  return Ty(function(t) {
    return GI(e, t);
  });
}), YI = function(t) {
  var n = m.useContext(sa);
  return t.theme !== n && (n = KI(n)(t.theme)), /* @__PURE__ */ m.createElement(sa.Provider, {
    value: n
  }, t.children);
}, Lh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", qI = function(t, n) {
  var r = {};
  for (var o in n)
    Rv.call(n, o) && (r[o] = n[o]);
  return r[Lh] = t, r;
}, XI = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Mv(n, r, o), hC(function() {
    return Iv(n, r, o);
  }), null;
}, QI = /* @__PURE__ */ $v(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Lh], i = [r], a = "";
  typeof e.className == "string" ? a = dC(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Rd(i, void 0, m.useContext(sa));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Rv.call(e, u) && u !== "css" && u !== Lh && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(XI, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ m.createElement(o, l));
}), ZI = QI, ee = function(t, n) {
  var r = arguments;
  if (n == null || !Rv.call(n, "css"))
    return m.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = ZI, i[1] = qI(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return m.createElement.apply(null, i);
}, $d = /* @__PURE__ */ $v(function(e, t) {
  var n = e.styles, r = Rd([n], void 0, m.useContext(sa)), o = m.useRef();
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
    if (r.next !== void 0 && Iv(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Av() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Rd(t);
}
var vC = function() {
  var t = Av.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, gC = String.raw, yC = gC`
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
`, JI = () => /* @__PURE__ */ w.jsx($d, { styles: yC }), eR = ({ scope: e = "" }) => /* @__PURE__ */ w.jsx(
  $d,
  {
    styles: gC`
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

      ${yC}
    `
  }
);
function tR(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function nt(e = {}) {
  const {
    name: t,
    strict: n = !0,
    hookName: r = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = m.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = m.useContext(s);
    if (!c && n) {
      const d = new Error(
        i ?? tR(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [nR, rR] = nt({
  strict: !1,
  name: "PortalManagerContext"
});
function bC(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ w.jsx(nR, { value: { zIndex: n }, children: t });
}
bC.displayName = "PortalManager";
var la = globalThis != null && globalThis.document ? m.useLayoutEffect : m.useEffect, [SC, oR] = nt({
  strict: !1,
  name: "PortalContext"
}), Dv = "chakra-portal", iR = ".chakra-portal", aR = (e) => /* @__PURE__ */ w.jsx(
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
), sR = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = m.useState(null), i = m.useRef(null), [, a] = m.useState({});
  m.useEffect(() => a({}), []);
  const s = oR(), l = rR();
  la(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = Dv, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ w.jsx(aR, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? yd.createPortal(
    /* @__PURE__ */ w.jsx(SC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ w.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, lR = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = m.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Dv), l;
  }, [o]), [, s] = m.useState({});
  return la(() => s({}), []), la(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? yd.createPortal(
    /* @__PURE__ */ w.jsx(SC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function hl(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ w.jsx(lR, { containerRef: n, ...r }) : /* @__PURE__ */ w.jsx(sR, { ...r });
}
hl.className = Dv;
hl.selector = iR;
hl.displayName = "Portal";
function Zo() {
  const e = m.useContext(
    sa
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Fv = m.createContext({});
Fv.displayName = "ColorModeContext";
function ka() {
  const e = m.useContext(Fv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function $y(e, t) {
  const { colorMode: n } = ka();
  return n === "dark" ? t : e;
}
var Jl = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function uR(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? Jl.dark : Jl.light), document.body.classList.remove(r ? Jl.light : Jl.dark);
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
var cR = "chakra-ui-color-mode";
function dR(e) {
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
var fR = dR(cR), Ay = () => {
};
function Dy(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function xC(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = fR
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = m.useState(
    () => Dy(a, s)
  ), [c, d] = m.useState(
    () => Dy(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: y } = m.useMemo(
    () => uR({ preventTransition: i }),
    [i]
  ), b = o === "system" && !l ? c : l, h = m.useCallback(
    (x) => {
      const k = x === "system" ? f() : x;
      u(k), p(k === "dark"), g(k), a.set(k);
    },
    [a, f, p, g]
  );
  la(() => {
    o === "system" && d(f());
  }, []), m.useEffect(() => {
    const x = a.get();
    if (x) {
      h(x);
      return;
    }
    if (o === "system") {
      h("system");
      return;
    }
    h(s);
  }, [a, s, o, h]);
  const v = m.useCallback(() => {
    h(b === "dark" ? "light" : "dark");
  }, [b, h]);
  m.useEffect(() => {
    if (r)
      return y(h);
  }, [r, y, h]);
  const S = m.useMemo(
    () => ({
      colorMode: t ?? b,
      toggleColorMode: t ? Ay : v,
      setColorMode: t ? Ay : h,
      forced: t !== void 0
    }),
    [b, v, h, t]
  );
  return /* @__PURE__ */ w.jsx(Fv.Provider, { value: S, children: n });
}
xC.displayName = "ColorModeProvider";
var pR = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function hR(e) {
  let t = e;
  return pR.has(t) || (t = "light"), t;
}
function mR(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = hR(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function vR(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ w.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: mR(e) }
    }
  );
}
function gR() {
  const e = ka(), t = Zo();
  return { ...e, theme: t };
}
var ie = (...e) => e.filter(Boolean).join(" ");
function yR() {
  return !1;
}
function zt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var ml = (e) => {
  const { condition: t, message: n } = e;
  t && yR() && console.warn(n);
};
function qn(e, ...t) {
  return bR(e) ? e(...t) : e;
}
var bR = (e) => typeof e == "function", fn = (e) => e ? "" : void 0, Kf = (e) => e ? !0 : void 0;
function Le(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function wC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var Ec = { exports: {} };
Ec.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", b = "[object Number]", h = "[object Null]", v = "[object Object]", S = "[object Proxy]", x = "[object RegExp]", k = "[object Set]", P = "[object String]", E = "[object Undefined]", T = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", z = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, j = {};
  j[D] = j[G] = j[H] = j[L] = j[W] = j[K] = j[$] = j[A] = j[z] = !0, j[s] = j[l] = j[M] = j[c] = j[I] = j[d] = j[f] = j[p] = j[y] = j[b] = j[v] = j[x] = j[k] = j[P] = j[T] = !1;
  var te = typeof Gr == "object" && Gr && Gr.Object === Object && Gr, le = typeof self == "object" && self && self.Object === Object && self, ae = te || le || Function("return this")(), se = t && !t.nodeType && t, me = se && !0 && e && !e.nodeType && e, ke = me && me.exports === se, Je = ke && te.process, qe = function() {
    try {
      var C = me && me.require && me.require("util").types;
      return C || Je && Je.binding && Je.binding("util");
    } catch {
    }
  }(), an = qe && qe.isTypedArray;
  function En(C, _, R) {
    switch (R.length) {
      case 0:
        return C.call(_);
      case 1:
        return C.call(_, R[0]);
      case 2:
        return C.call(_, R[0], R[1]);
      case 3:
        return C.call(_, R[0], R[1], R[2]);
    }
    return C.apply(_, R);
  }
  function Ir(C, _) {
    for (var R = -1, N = Array(C); ++R < C; )
      N[R] = _(R);
    return N;
  }
  function fe(C) {
    return function(_) {
      return C(_);
    };
  }
  function vt(C, _) {
    return C == null ? void 0 : C[_];
  }
  function Ge(C, _) {
    return function(R) {
      return C(_(R));
    };
  }
  var Ut = Array.prototype, Rr = Function.prototype, gt = Object.prototype, jn = ae["__core-js_shared__"], $r = Rr.toString, sn = gt.hasOwnProperty, ri = function() {
    var C = /[^.]+$/.exec(jn && jn.keys && jn.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), Ta = gt.toString, Tl = $r.call(Object), _l = RegExp(
    "^" + $r.call(sn).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), vo = ke ? ae.Buffer : void 0, Xg = ae.Symbol, Qg = ae.Uint8Array, Zg = vo ? vo.allocUnsafe : void 0, Jg = Ge(Object.getPrototypeOf, Object), e0 = Object.create, aT = gt.propertyIsEnumerable, sT = Ut.splice, go = Xg ? Xg.toStringTag : void 0, Ol = function() {
    try {
      var C = cf(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), lT = vo ? vo.isBuffer : void 0, t0 = Math.max, uT = Date.now, n0 = cf(ae, "Map"), _a = cf(Object, "create"), cT = /* @__PURE__ */ function() {
    function C() {
    }
    return function(_) {
      if (!bo(_))
        return {};
      if (e0)
        return e0(_);
      C.prototype = _;
      var R = new C();
      return C.prototype = void 0, R;
    };
  }();
  function yo(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function dT() {
    this.__data__ = _a ? _a(null) : {}, this.size = 0;
  }
  function fT(C) {
    var _ = this.has(C) && delete this.__data__[C];
    return this.size -= _ ? 1 : 0, _;
  }
  function pT(C) {
    var _ = this.__data__;
    if (_a) {
      var R = _[C];
      return R === r ? void 0 : R;
    }
    return sn.call(_, C) ? _[C] : void 0;
  }
  function hT(C) {
    var _ = this.__data__;
    return _a ? _[C] !== void 0 : sn.call(_, C);
  }
  function mT(C, _) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = _a && _ === void 0 ? r : _, this;
  }
  yo.prototype.clear = dT, yo.prototype.delete = fT, yo.prototype.get = pT, yo.prototype.has = hT, yo.prototype.set = mT;
  function ir(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function vT() {
    this.__data__ = [], this.size = 0;
  }
  function gT(C) {
    var _ = this.__data__, R = Ml(_, C);
    if (R < 0)
      return !1;
    var N = _.length - 1;
    return R == N ? _.pop() : sT.call(_, R, 1), --this.size, !0;
  }
  function yT(C) {
    var _ = this.__data__, R = Ml(_, C);
    return R < 0 ? void 0 : _[R][1];
  }
  function bT(C) {
    return Ml(this.__data__, C) > -1;
  }
  function ST(C, _) {
    var R = this.__data__, N = Ml(R, C);
    return N < 0 ? (++this.size, R.push([C, _])) : R[N][1] = _, this;
  }
  ir.prototype.clear = vT, ir.prototype.delete = gT, ir.prototype.get = yT, ir.prototype.has = bT, ir.prototype.set = ST;
  function oi(C) {
    var _ = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++_ < R; ) {
      var N = C[_];
      this.set(N[0], N[1]);
    }
  }
  function xT() {
    this.size = 0, this.__data__ = {
      hash: new yo(),
      map: new (n0 || ir)(),
      string: new yo()
    };
  }
  function wT(C) {
    var _ = Rl(this, C).delete(C);
    return this.size -= _ ? 1 : 0, _;
  }
  function CT(C) {
    return Rl(this, C).get(C);
  }
  function kT(C) {
    return Rl(this, C).has(C);
  }
  function PT(C, _) {
    var R = Rl(this, C), N = R.size;
    return R.set(C, _), this.size += R.size == N ? 0 : 1, this;
  }
  oi.prototype.clear = xT, oi.prototype.delete = wT, oi.prototype.get = CT, oi.prototype.has = kT, oi.prototype.set = PT;
  function ii(C) {
    var _ = this.__data__ = new ir(C);
    this.size = _.size;
  }
  function ET() {
    this.__data__ = new ir(), this.size = 0;
  }
  function TT(C) {
    var _ = this.__data__, R = _.delete(C);
    return this.size = _.size, R;
  }
  function _T(C) {
    return this.__data__.get(C);
  }
  function OT(C) {
    return this.__data__.has(C);
  }
  function MT(C, _) {
    var R = this.__data__;
    if (R instanceof ir) {
      var N = R.__data__;
      if (!n0 || N.length < n - 1)
        return N.push([C, _]), this.size = ++R.size, this;
      R = this.__data__ = new oi(N);
    }
    return R.set(C, _), this.size = R.size, this;
  }
  ii.prototype.clear = ET, ii.prototype.delete = TT, ii.prototype.get = _T, ii.prototype.has = OT, ii.prototype.set = MT;
  function IT(C, _) {
    var R = pf(C), N = !R && ff(C), pe = !R && !N && s0(C), Pe = !R && !N && !pe && u0(C), Ae = R || N || pe || Pe, ce = Ae ? Ir(C.length, String) : [], De = ce.length;
    for (var ln in C)
      (_ || sn.call(C, ln)) && !(Ae && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ln == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (ln == "offset" || ln == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Pe && (ln == "buffer" || ln == "byteLength" || ln == "byteOffset") || // Skip index properties.
      i0(ln, De))) && ce.push(ln);
    return ce;
  }
  function lf(C, _, R) {
    (R !== void 0 && !$l(C[_], R) || R === void 0 && !(_ in C)) && uf(C, _, R);
  }
  function RT(C, _, R) {
    var N = C[_];
    (!(sn.call(C, _) && $l(N, R)) || R === void 0 && !(_ in C)) && uf(C, _, R);
  }
  function Ml(C, _) {
    for (var R = C.length; R--; )
      if ($l(C[R][0], _))
        return R;
    return -1;
  }
  function uf(C, _, R) {
    _ == "__proto__" && Ol ? Ol(C, _, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[_] = R;
  }
  var $T = GT();
  function Il(C) {
    return C == null ? C === void 0 ? E : h : go && go in Object(C) ? KT(C) : JT(C);
  }
  function r0(C) {
    return Oa(C) && Il(C) == s;
  }
  function AT(C) {
    if (!bo(C) || QT(C))
      return !1;
    var _ = mf(C) ? _l : V;
    return _.test(r_(C));
  }
  function DT(C) {
    return Oa(C) && l0(C.length) && !!j[Il(C)];
  }
  function FT(C) {
    if (!bo(C))
      return ZT(C);
    var _ = a0(C), R = [];
    for (var N in C)
      N == "constructor" && (_ || !sn.call(C, N)) || R.push(N);
    return R;
  }
  function o0(C, _, R, N, pe) {
    C !== _ && $T(_, function(Pe, Ae) {
      if (pe || (pe = new ii()), bo(Pe))
        LT(C, _, Ae, R, o0, N, pe);
      else {
        var ce = N ? N(df(C, Ae), Pe, Ae + "", C, _, pe) : void 0;
        ce === void 0 && (ce = Pe), lf(C, Ae, ce);
      }
    }, c0);
  }
  function LT(C, _, R, N, pe, Pe, Ae) {
    var ce = df(C, R), De = df(_, R), ln = Ae.get(De);
    if (ln) {
      lf(C, R, ln);
      return;
    }
    var Gt = Pe ? Pe(ce, De, R + "", C, _, Ae) : void 0, Ma = Gt === void 0;
    if (Ma) {
      var vf = pf(De), gf = !vf && s0(De), f0 = !vf && !gf && u0(De);
      Gt = De, vf || gf || f0 ? pf(ce) ? Gt = ce : o_(ce) ? Gt = WT(ce) : gf ? (Ma = !1, Gt = NT(De, !0)) : f0 ? (Ma = !1, Gt = BT(De, !0)) : Gt = [] : i_(De) || ff(De) ? (Gt = ce, ff(ce) ? Gt = a_(ce) : (!bo(ce) || mf(ce)) && (Gt = YT(De))) : Ma = !1;
    }
    Ma && (Ae.set(De, Gt), pe(Gt, De, N, Pe, Ae), Ae.delete(De)), lf(C, R, Gt);
  }
  function zT(C, _) {
    return t_(e_(C, _, d0), C + "");
  }
  var jT = Ol ? function(C, _) {
    return Ol(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: l_(_),
      writable: !0
    });
  } : d0;
  function NT(C, _) {
    if (_)
      return C.slice();
    var R = C.length, N = Zg ? Zg(R) : new C.constructor(R);
    return C.copy(N), N;
  }
  function VT(C) {
    var _ = new C.constructor(C.byteLength);
    return new Qg(_).set(new Qg(C)), _;
  }
  function BT(C, _) {
    var R = _ ? VT(C.buffer) : C.buffer;
    return new C.constructor(R, C.byteOffset, C.length);
  }
  function WT(C, _) {
    var R = -1, N = C.length;
    for (_ || (_ = Array(N)); ++R < N; )
      _[R] = C[R];
    return _;
  }
  function HT(C, _, R, N) {
    var pe = !R;
    R || (R = {});
    for (var Pe = -1, Ae = _.length; ++Pe < Ae; ) {
      var ce = _[Pe], De = N ? N(R[ce], C[ce], ce, R, C) : void 0;
      De === void 0 && (De = C[ce]), pe ? uf(R, ce, De) : RT(R, ce, De);
    }
    return R;
  }
  function UT(C) {
    return zT(function(_, R) {
      var N = -1, pe = R.length, Pe = pe > 1 ? R[pe - 1] : void 0, Ae = pe > 2 ? R[2] : void 0;
      for (Pe = C.length > 3 && typeof Pe == "function" ? (pe--, Pe) : void 0, Ae && qT(R[0], R[1], Ae) && (Pe = pe < 3 ? void 0 : Pe, pe = 1), _ = Object(_); ++N < pe; ) {
        var ce = R[N];
        ce && C(_, ce, N, Pe);
      }
      return _;
    });
  }
  function GT(C) {
    return function(_, R, N) {
      for (var pe = -1, Pe = Object(_), Ae = N(_), ce = Ae.length; ce--; ) {
        var De = Ae[C ? ce : ++pe];
        if (R(Pe[De], De, Pe) === !1)
          break;
      }
      return _;
    };
  }
  function Rl(C, _) {
    var R = C.__data__;
    return XT(_) ? R[typeof _ == "string" ? "string" : "hash"] : R.map;
  }
  function cf(C, _) {
    var R = vt(C, _);
    return AT(R) ? R : void 0;
  }
  function KT(C) {
    var _ = sn.call(C, go), R = C[go];
    try {
      C[go] = void 0;
      var N = !0;
    } catch {
    }
    var pe = Ta.call(C);
    return N && (_ ? C[go] = R : delete C[go]), pe;
  }
  function YT(C) {
    return typeof C.constructor == "function" && !a0(C) ? cT(Jg(C)) : {};
  }
  function i0(C, _) {
    var R = typeof C;
    return _ = _ ?? a, !!_ && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < _;
  }
  function qT(C, _, R) {
    if (!bo(R))
      return !1;
    var N = typeof _;
    return (N == "number" ? hf(R) && i0(_, R.length) : N == "string" && _ in R) ? $l(R[_], C) : !1;
  }
  function XT(C) {
    var _ = typeof C;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? C !== "__proto__" : C === null;
  }
  function QT(C) {
    return !!ri && ri in C;
  }
  function a0(C) {
    var _ = C && C.constructor, R = typeof _ == "function" && _.prototype || gt;
    return C === R;
  }
  function ZT(C) {
    var _ = [];
    if (C != null)
      for (var R in Object(C))
        _.push(R);
    return _;
  }
  function JT(C) {
    return Ta.call(C);
  }
  function e_(C, _, R) {
    return _ = t0(_ === void 0 ? C.length - 1 : _, 0), function() {
      for (var N = arguments, pe = -1, Pe = t0(N.length - _, 0), Ae = Array(Pe); ++pe < Pe; )
        Ae[pe] = N[_ + pe];
      pe = -1;
      for (var ce = Array(_ + 1); ++pe < _; )
        ce[pe] = N[pe];
      return ce[_] = R(Ae), En(C, this, ce);
    };
  }
  function df(C, _) {
    if (!(_ === "constructor" && typeof C[_] == "function") && _ != "__proto__")
      return C[_];
  }
  var t_ = n_(jT);
  function n_(C) {
    var _ = 0, R = 0;
    return function() {
      var N = uT(), pe = i - (N - R);
      if (R = N, pe > 0) {
        if (++_ >= o)
          return arguments[0];
      } else
        _ = 0;
      return C.apply(void 0, arguments);
    };
  }
  function r_(C) {
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
  function $l(C, _) {
    return C === _ || C !== C && _ !== _;
  }
  var ff = r0(/* @__PURE__ */ function() {
    return arguments;
  }()) ? r0 : function(C) {
    return Oa(C) && sn.call(C, "callee") && !aT.call(C, "callee");
  }, pf = Array.isArray;
  function hf(C) {
    return C != null && l0(C.length) && !mf(C);
  }
  function o_(C) {
    return Oa(C) && hf(C);
  }
  var s0 = lT || u_;
  function mf(C) {
    if (!bo(C))
      return !1;
    var _ = Il(C);
    return _ == p || _ == g || _ == u || _ == S;
  }
  function l0(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function bo(C) {
    var _ = typeof C;
    return C != null && (_ == "object" || _ == "function");
  }
  function Oa(C) {
    return C != null && typeof C == "object";
  }
  function i_(C) {
    if (!Oa(C) || Il(C) != v)
      return !1;
    var _ = Jg(C);
    if (_ === null)
      return !0;
    var R = sn.call(_, "constructor") && _.constructor;
    return typeof R == "function" && R instanceof R && $r.call(R) == Tl;
  }
  var u0 = an ? fe(an) : DT;
  function a_(C) {
    return HT(C, c0(C));
  }
  function c0(C) {
    return hf(C) ? IT(C, !0) : FT(C);
  }
  var s_ = UT(function(C, _, R, N) {
    o0(C, _, R, N);
  });
  function l_(C) {
    return function() {
      return C;
    };
  }
  function d0(C) {
    return C;
  }
  function u_() {
    return !1;
  }
  e.exports = s_;
})(Ec, Ec.exports);
var SR = Ec.exports;
const vn = /* @__PURE__ */ sl(SR);
var xR = (e) => /!(important)?$/.test(e), Fy = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, wR = (e, t) => (n) => {
  const r = String(t), o = xR(r), i = Fy(r), a = e ? `${e}.${i}` : i;
  let s = zt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = Fy(s), o ? `${s} !important` : s;
};
function Lv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = wR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var eu = (...e) => (t) => e.reduce((n, r) => r(n), t);
function un(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = Lv({
      scale: e,
      transform: t
    }), r;
  };
}
var CR = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function kR(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: CR(t),
    transform: n ? Lv({
      scale: n,
      compose: r
    }) : r
  };
}
var CC = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function PR() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...CC
  ].join(" ");
}
function ER() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...CC
  ].join(" ");
}
var TR = {
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
}, _R = {
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
function OR(e) {
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
var MR = {
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
}, IR = new Set(Object.values(zh)), jh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), RR = (e) => e.trim();
function $R(e, t) {
  if (e == null || jh.has(e))
    return e;
  if (!(Nh(e) || jh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(RR).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in zh ? zh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (IR.has(f))
      return f;
    const p = f.indexOf(" "), [g, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], b = Nh(y) ? y : y && y.split(" "), h = `colors.${g}`, v = h in t.__cssMap ? t.__cssMap[h].varRef : g;
    return b ? [
      v,
      ...Array.isArray(b) ? b : [b]
    ].join(" ") : v;
  });
  return `${s}(${d.join(", ")})`;
}
var Nh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), AR = (e, t) => $R(e, t ?? {});
function DR(e) {
  return /^var\(--.+\)$/.test(e);
}
var FR = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, Vn = (e) => (t) => `${e}(${t})`, de = {
  filter(e) {
    return e !== "auto" ? e : TR;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : _R;
  },
  ring(e) {
    return OR(de.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? PR() : e === "auto-gpu" ? ER() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = FR(e);
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
    if (DR(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: AR,
  blur: Vn("blur"),
  opacity: Vn("opacity"),
  brightness: Vn("brightness"),
  contrast: Vn("contrast"),
  dropShadow: Vn("drop-shadow"),
  grayscale: Vn("grayscale"),
  hueRotate: (e) => Vn("hue-rotate")(de.degree(e)),
  invert: Vn("invert"),
  saturate: Vn("saturate"),
  sepia: Vn("sepia"),
  bgImage(e) {
    return e == null || Nh(e) || jh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = MR[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, O = {
  borderWidths: un("borderWidths"),
  borderStyles: un("borderStyles"),
  colors: un("colors"),
  borders: un("borders"),
  gradients: un("gradients", de.gradient),
  radii: un("radii", de.px),
  space: un("space", eu(de.vh, de.px)),
  spaceT: un("space", eu(de.vh, de.px)),
  degreeT(e) {
    return { property: e, transform: de.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Lv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: un("sizes", eu(de.vh, de.px)),
  sizesT: un("sizes", eu(de.vh, de.fraction)),
  shadows: un("shadows"),
  logical: kR,
  blur: un("blur", de.blur)
}, Lu = {
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
Object.assign(Lu, {
  bgImage: Lu.backgroundImage,
  bgImg: Lu.backgroundImage
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
var LR = {
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
}, Tc = {
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
Object.assign(Tc, {
  flexDir: Tc.flexDirection
});
var kC = {
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
}, jR = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: de.outline },
  outlineOffset: !0,
  outlineColor: O.colors("outlineColor")
}, dn = {
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
Object.assign(dn, {
  w: dn.width,
  h: dn.height,
  minW: dn.minWidth,
  maxW: dn.maxWidth,
  minH: dn.minHeight,
  maxH: dn.maxHeight,
  overscroll: dn.overscrollBehavior,
  overscrollX: dn.overscrollBehaviorX,
  overscrollY: dn.overscrollBehaviorY
});
var NR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function VR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var BR = (e) => {
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
}, WR = BR(VR), HR = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, UR = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Yf = (e, t, n) => {
  const r = {}, o = WR(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, GR = {
  srOnly: {
    transform(e) {
      return e === !0 ? HR : e === "focusable" ? UR : {};
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
}, ms = {
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
Object.assign(ms, {
  insetStart: ms.insetInlineStart,
  insetEnd: ms.insetInlineEnd
});
var KR = {
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
var YR = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, qR = {
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
}, XR = {
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
}, QR = {
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
}, ZR = {
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
function PC(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
var Ad = (e, ...t) => t.map(PC).join(` ${e} `).replace(/calc/g, ""), Ly = (...e) => `calc(${Ad("+", ...e)})`, zy = (...e) => `calc(${Ad("-", ...e)})`, Bh = (...e) => `calc(${Ad("*", ...e)})`, jy = (...e) => `calc(${Ad("/", ...e)})`, Ny = (e) => {
  const t = PC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Bh(t, -1);
}, To = Object.assign(
  (e) => ({
    add: (...t) => To(Ly(e, ...t)),
    subtract: (...t) => To(zy(e, ...t)),
    multiply: (...t) => To(Bh(e, ...t)),
    divide: (...t) => To(jy(e, ...t)),
    negate: () => To(Ny(e)),
    toString: () => e.toString()
  }),
  {
    add: Ly,
    subtract: zy,
    multiply: Bh,
    divide: jy,
    negate: Ny
  }
);
function JR(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function e$(e) {
  const t = JR(e.toString());
  return n$(t$(t));
}
function t$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function n$(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function r$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function o$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function i$(e, t = "") {
  return e$(`--${r$(e, t)}`);
}
function J(e, t, n) {
  const r = i$(e, n);
  return {
    variable: r,
    reference: o$(r, t)
  };
}
function a$(e, t) {
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
function s$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function l$(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Wh(e) {
  if (e == null)
    return e;
  const { unitless: t } = l$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var EC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, zv = (e) => Object.fromEntries(Object.entries(e).sort(EC));
function Vy(e) {
  const t = zv(e);
  return Object.assign(Object.values(t), t);
}
function u$(e) {
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
function Qa(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Wh(e)})`), t && n.push("and", `(max-width: ${Wh(t)})`), n.join(" ");
}
function c$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = Vy(e), r = Object.entries(e).sort(EC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? By(d) : void 0, {
      _minW: By(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Qa(null, d),
      minWQuery: Qa(s),
      minMaxQuery: Qa(s, d)
    };
  }), o = u$(e), i = Array.from(o.values());
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
      ...n.map((a) => Qa(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!zt(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; s$(s) === null; )
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
}, Dr = (e) => TC((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), ar = (e) => TC((t) => e(t, "~ &"), "[data-peer]", ".peer"), TC = (e, ...t) => t.map(e).join(", "), Dd = {
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
  _peerHover: ar(ut.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Dr(ut.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: ar(ut.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Dr(ut.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: ar(ut.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Dr(ut.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: ar(ut.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Dr(ut.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: ar(ut.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Dr(ut.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: ar(ut.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Dr(ut.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: ar(ut.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Dr(ut.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: ar(ut.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: ar(ut.placeholderShown),
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
}, _C = Object.keys(
  Dd
);
function Wy(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function d$(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Wy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...g] = f, y = `${p}.-${g.join(".")}`, b = To.negate(s), h = To.negate(u);
        r[y] = {
          value: b,
          var: l,
          varRef: h
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
      const { reference: b } = Wy(g, t == null ? void 0 : t.cssVarPrefix);
      return b;
    }, d = zt(s) ? s : { default: s };
    n = vn(
      n,
      Object.entries(d).reduce(
        (f, [p, g]) => {
          var y, b;
          if (!g)
            return f;
          const h = c(`${g}`);
          if (p === "default")
            return f[l] = h, f;
          const v = (b = (y = Dd) == null ? void 0 : y[p]) != null ? b : p;
          return f[v] = { [l]: h }, f;
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
function f$(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function p$(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function h$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Hy(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (h$(a) || Array.isArray(a)) {
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
var m$ = [
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
function v$(e) {
  return p$(e, m$);
}
function g$(e) {
  return e.semanticTokens;
}
function y$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var b$ = (e) => _C.includes(e) || e === "default";
function S$({
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
      stop: (r) => Object.keys(r).every(b$)
    }
  ), n;
}
function x$(e) {
  var t;
  const n = y$(e), r = v$(n), o = g$(n), i = S$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = d$(i, { cssVarPrefix: a });
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
    __breakpoints: c$(n.breakpoints)
  }), n;
}
var jv = vn(
  {},
  Lu,
  ve,
  LR,
  Tc,
  dn,
  zR,
  KR,
  jR,
  kC,
  GR,
  ms,
  Vh,
  Ie,
  ZR,
  QR,
  YR,
  qR,
  NR,
  XR
);
Object.assign({}, Ie, dn, Tc, kC, ms);
var w$ = [...Object.keys(jv), ..._C], C$ = { ...jv, ...Dd }, k$ = (e) => e in C$, P$ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = qn(e[a], t);
    if (s == null)
      continue;
    if (s = zt(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
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
function E$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function T$(e) {
  return /^var\(--.+\)$/.test(e);
}
var _$ = (e, t) => e.startsWith("--") && typeof t == "string" && !T$(t), O$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = E$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function M$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = qn(i, r), d = P$(c)(r);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let y = qn(g, r);
      p in n && (p = n[p]), _$(p, y) && (y = O$(r, y));
      let b = t[p];
      if (b === !0 && (b = { property: p }), zt(y)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = vn(
          {},
          f[p],
          o(y, !0)
        );
        continue;
      }
      let h = (u = (l = b == null ? void 0 : b.transform) == null ? void 0 : l.call(b, y, r, c)) != null ? u : y;
      h = b != null && b.processResult ? o(h, !0) : h;
      const v = qn(b == null ? void 0 : b.property, r);
      if (!a && (b != null && b.static)) {
        const S = qn(b.static, r);
        f = vn({}, f, S);
      }
      if (v && Array.isArray(v)) {
        for (const S of v)
          f[S] = h;
        continue;
      }
      if (v) {
        v === "&" && zt(h) ? f = vn({}, f, h) : f[v] = h;
        continue;
      }
      if (zt(h)) {
        f = vn({}, f, h);
        continue;
      }
      f[p] = h;
    }
    return f;
  };
  return o;
}
var OC = (e) => (t) => M$({
  theme: t,
  pseudos: Dd,
  configs: jv
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
function I$(e, t) {
  if (Array.isArray(e))
    return e;
  if (zt(e))
    return t(e);
  if (e != null)
    return [e];
}
function R$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function $$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = I$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let g = 0; g < d; g++) {
      const y = t.details[g], b = t.details[R$(c, g)], h = Qa(y.minW, b == null ? void 0 : b._minW), v = qn((s = r[o]) == null ? void 0 : s[c[g]], a);
      if (v) {
        if (p) {
          (l = r.parts) == null || l.forEach((S) => {
            vn(u, {
              [S]: f ? v[S] : { [h]: v[S] }
            });
          });
          continue;
        }
        if (!p) {
          f ? vn(u, v) : u[h] = v;
          continue;
        }
        u[h] = v;
      }
    }
    return u;
  };
}
function A$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = $$(i);
    return vn(
      {},
      qn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function on(e) {
  return f$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var D$ = [
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
function F$(e) {
  return zt(e) ? D$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var L$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, z$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, j$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, N$ = {
  property: L$,
  easing: z$,
  duration: j$
}, V$ = N$, B$ = {
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
}, W$ = B$, H$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, U$ = H$, G$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, K$ = G$, Y$ = {
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
}, q$ = Y$, X$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, Q$ = X$, Z$ = {
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
}, J$ = Z$, eA = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, tA = eA, nA = {
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
}, MC = nA, IC = {
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
}, rA = {
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
}, oA = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, iA = {
  ...IC,
  ...rA,
  container: oA
}, RC = iA, aA = {
  breakpoints: K$,
  zIndices: W$,
  radii: Q$,
  blur: tA,
  colors: q$,
  ...MC,
  sizes: RC,
  shadows: J$,
  space: IC,
  borders: U$,
  transition: V$
}, { defineMultiStyleConfig: sA, definePartsStyle: Za } = Oe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), ur = J("stepper-indicator-size"), Ei = J("stepper-icon-size"), Ti = J("stepper-title-font-size"), Ja = J("stepper-description-font-size"), Na = J("stepper-accent-color"), lA = Za(({ colorScheme: e }) => ({
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
    [Na.variable]: `colors.${e}.500`,
    _dark: {
      [Na.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Ti.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Ja.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Ti.reference
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
    width: ur.reference,
    height: ur.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Na.reference
    },
    "&[data-status=complete]": {
      bg: Na.reference,
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
      bg: Na.reference
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
      maxHeight: `calc(100% - ${ur.reference} - 8px)`,
      top: `calc(${ur.reference} + 4px)`,
      insetStart: `calc(${ur.reference} / 2 - 1px)`
    }
  }
})), uA = sA({
  baseStyle: lA,
  sizes: {
    xs: Za({
      stepper: {
        [ur.variable]: "sizes.4",
        [Ei.variable]: "sizes.3",
        [Ti.variable]: "fontSizes.xs",
        [Ja.variable]: "fontSizes.xs"
      }
    }),
    sm: Za({
      stepper: {
        [ur.variable]: "sizes.6",
        [Ei.variable]: "sizes.4",
        [Ti.variable]: "fontSizes.sm",
        [Ja.variable]: "fontSizes.xs"
      }
    }),
    md: Za({
      stepper: {
        [ur.variable]: "sizes.8",
        [Ei.variable]: "sizes.5",
        [Ti.variable]: "fontSizes.md",
        [Ja.variable]: "fontSizes.sm"
      }
    }),
    lg: Za({
      stepper: {
        [ur.variable]: "sizes.10",
        [Ei.variable]: "sizes.6",
        [Ti.variable]: "fontSizes.lg",
        [Ja.variable]: "fontSizes.md"
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
var cA = Se("accordion").parts("root", "container", "button", "panel").extend("icon"), dA = Se("alert").parts("title", "description", "container").extend("icon", "spinner"), fA = Se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), pA = Se("breadcrumb").parts("link", "item", "container").extend("separator");
Se("button").parts();
var hA = Se("checkbox").parts("control", "icon", "container").extend("label");
Se("progress").parts("track", "filledTrack").extend("label");
var mA = Se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), vA = Se("editable").parts(
  "preview",
  "input",
  "textarea"
), gA = Se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), yA = Se("formError").parts("text", "icon"), bA = Se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), SA = Se("list").parts("container", "item", "icon"), xA = Se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), wA = Se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), CA = Se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Se("pininput").parts("field");
var kA = Se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), PA = Se("progress").parts(
  "label",
  "filledTrack",
  "track"
), EA = Se("radio").parts(
  "container",
  "control",
  "label"
), TA = Se("select").parts("field", "icon"), _A = Se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), OA = Se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), MA = Se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), IA = Se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), RA = Se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), $A = Se("tag").parts(
  "container",
  "label",
  "closeButton"
), AA = Se("card").parts(
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
function $o(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class DA extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var es = DA;
function Nv(e) {
  if (typeof e != "string")
    throw new es(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = WA.test(e) ? zA(e) : e;
  const n = jA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(qs(s, 2), 16)), parseInt(qs(a[3] || "f", 2), 16) / 255];
  }
  const r = NA.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = VA.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = BA.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if ($o(0, 100, s) !== s)
      throw new es(e);
    if ($o(0, 100, l) !== l)
      throw new es(e);
    return [...HA(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new es(e);
}
function FA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Uy = (e) => parseInt(e.replace(/_/g, ""), 36), LA = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Uy(t.substring(0, 3)), r = Uy(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function zA(e) {
  const t = e.toLowerCase().trim(), n = LA[FA(t)];
  if (!n)
    throw new es(e);
  return `#${n}`;
}
const qs = (e, t) => Array.from(Array(t)).map(() => e).join(""), jA = new RegExp(`^#${qs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), NA = new RegExp(`^#${qs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), VA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${qs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), BA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, WA = /^[a-z]+$/i, Gy = (e) => Math.round(e * 255), HA = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(Gy);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(Gy);
};
function UA(e, t, n, r) {
  return `rgba(${$o(0, 255, e).toFixed()}, ${$o(0, 255, t).toFixed()}, ${$o(0, 255, n).toFixed()}, ${parseFloat($o(0, 1, r).toFixed(3))})`;
}
function GA(e, t) {
  const [n, r, o, i] = Nv(e);
  return UA(n, r, o, i - t);
}
function KA(e) {
  const [t, n, r, o] = Nv(e);
  let i = (a) => {
    const s = $o(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function YA(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var qA = (e) => Object.keys(e).length === 0, Et = (e, t, n) => {
  const r = YA(e, `colors.${t}`, t);
  try {
    return KA(r), r;
  } catch {
    return n ?? "#000000";
  }
}, XA = (e) => {
  const [t, n, r] = Nv(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, QA = (e) => (t) => {
  const n = Et(t, e);
  return XA(n) < 128 ? "dark" : "light";
}, ZA = (e) => (t) => QA(e)(t) === "dark", ua = (e, t) => (n) => {
  const r = Et(n, e);
  return GA(r, 1 - t);
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
var JA = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function e5(e) {
  const t = JA();
  return !e || qA(e) ? t : e.string && e.colors ? n5(e.string, e.colors) : e.string && !e.colors ? t5(e.string) : e.colors && !e.string ? r5(e.colors) : t;
}
function t5(e) {
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
function n5(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function r5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function Vv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function $C(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
var Fd = (e, ...t) => t.map($C).join(` ${e} `).replace(/calc/g, ""), Yy = (...e) => `calc(${Fd("+", ...e)})`, qy = (...e) => `calc(${Fd("-", ...e)})`, Hh = (...e) => `calc(${Fd("*", ...e)})`, Xy = (...e) => `calc(${Fd("/", ...e)})`, Qy = (e) => {
  const t = $C(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Hh(t, -1);
}, cr = Object.assign(
  (e) => ({
    add: (...t) => cr(Yy(e, ...t)),
    subtract: (...t) => cr(qy(e, ...t)),
    multiply: (...t) => cr(Hh(e, ...t)),
    divide: (...t) => cr(Xy(e, ...t)),
    negate: () => cr(Qy(e)),
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
function o5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function i5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function AC(e) {
  const t = i5(e.toString());
  return t.includes("\\.") ? e : o5(e) ? t.replace(".", "\\.") : e;
}
function a5(e, t = "") {
  return [t, AC(e)].filter(Boolean).join("-");
}
function s5(e, t) {
  return `var(${AC(e)}${t ? `, ${t}` : ""})`;
}
function l5(e, t = "") {
  return `--${a5(e, t)}`;
}
function rt(e, t) {
  const n = l5(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: s5(n, u5(t == null ? void 0 : t.fallback))
  };
}
function u5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: c5, definePartsStyle: zu } = Oe(MA.keys), vs = rt("switch-track-width"), Lo = rt("switch-track-height"), qf = rt("switch-track-diff"), d5 = cr.subtract(vs, Lo), Uh = rt("switch-thumb-x"), Va = rt("switch-bg"), f5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [vs.reference],
    height: [Lo.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Va.variable]: "colors.gray.300",
    _dark: {
      [Va.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Va.variable]: `colors.${t}.500`,
      _dark: {
        [Va.variable]: `colors.${t}.200`
      }
    },
    bg: Va.reference
  };
}, p5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Lo.reference],
  height: [Lo.reference],
  _checked: {
    transform: `translateX(${Uh.reference})`
  }
}, h5 = zu((e) => ({
  container: {
    [qf.variable]: d5,
    [Uh.variable]: qf.reference,
    _rtl: {
      [Uh.variable]: cr(qf).negate().toString()
    }
  },
  track: f5(e),
  thumb: p5
})), m5 = {
  sm: zu({
    container: {
      [vs.variable]: "1.375rem",
      [Lo.variable]: "sizes.3"
    }
  }),
  md: zu({
    container: {
      [vs.variable]: "1.875rem",
      [Lo.variable]: "sizes.4"
    }
  }),
  lg: zu({
    container: {
      [vs.variable]: "2.875rem",
      [Lo.variable]: "sizes.6"
    }
  })
}, v5 = c5({
  baseStyle: h5,
  sizes: m5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: g5, definePartsStyle: Gi } = Oe(IA.keys), y5 = Gi({
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
}), _c = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, b5 = Gi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ..._c
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ..._c
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
}), S5 = Gi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ..._c
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ..._c
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
}), x5 = {
  simple: b5,
  striped: S5,
  unstyled: {}
}, w5 = {
  sm: Gi({
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
  md: Gi({
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
  lg: Gi({
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
}, C5 = g5({
  baseStyle: y5,
  variants: x5,
  sizes: w5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Rt = J("tabs-color"), Rn = J("tabs-bg"), tu = J("tabs-border-color"), { defineMultiStyleConfig: k5, definePartsStyle: Jn } = Oe(RA.keys), P5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, E5 = (e) => {
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
}, T5 = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, _5 = {
  p: 4
}, O5 = Jn((e) => ({
  root: P5(e),
  tab: E5(e),
  tablist: T5(e),
  tabpanel: _5
})), M5 = {
  sm: Jn({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Jn({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Jn({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, I5 = Jn((e) => {
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
        [Rt.variable]: `colors.${t}.600`,
        _dark: {
          [Rt.variable]: `colors.${t}.300`
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
      color: Rt.reference,
      bg: Rn.reference
    }
  };
}), R5 = Jn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [tu.variable]: "transparent",
      _selected: {
        [Rt.variable]: `colors.${t}.600`,
        [tu.variable]: "colors.white",
        _dark: {
          [Rt.variable]: `colors.${t}.300`,
          [tu.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: tu.reference
      },
      color: Rt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), $5 = Jn((e) => {
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
        [Rt.variable]: `colors.${t}.600`,
        _dark: {
          [Rn.variable]: "colors.gray.800",
          [Rt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Rt.reference,
      bg: Rn.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), A5 = Jn((e) => {
  const { colorScheme: t, theme: n } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Et(n, `${t}.700`),
        bg: Et(n, `${t}.100`)
      }
    }
  };
}), D5 = Jn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Rt.variable]: "colors.gray.600",
      _dark: {
        [Rt.variable]: "inherit"
      },
      _selected: {
        [Rt.variable]: "colors.white",
        [Rn.variable]: `colors.${t}.600`,
        _dark: {
          [Rt.variable]: "colors.gray.800",
          [Rn.variable]: `colors.${t}.300`
        }
      },
      color: Rt.reference,
      bg: Rn.reference
    }
  };
}), F5 = Jn({}), L5 = {
  line: I5,
  enclosed: R5,
  "enclosed-colored": $5,
  "soft-rounded": A5,
  "solid-rounded": D5,
  unstyled: F5
}, z5 = k5({
  baseStyle: O5,
  sizes: M5,
  variants: L5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ye = a$("badge", ["bg", "color", "shadow"]), j5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, N5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ua(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, V5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ua(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, B5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = ua(`${t}.200`, 0.8)(n);
  return {
    [Ye.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.color.variable]: r
    },
    [Ye.shadow.variable]: `inset 0 0 0px 1px ${Ye.color.reference}`
  };
}, W5 = {
  solid: N5,
  subtle: V5,
  outline: B5
}, gs = {
  baseStyle: j5,
  variants: W5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: H5, definePartsStyle: zo } = Oe($A.keys), Zy = J("tag-bg"), Jy = J("tag-color"), Xf = J("tag-shadow"), ju = J("tag-min-height"), Nu = J("tag-min-width"), Vu = J("tag-font-size"), Bu = J("tag-padding-inline"), U5 = {
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
  minH: ju.reference,
  minW: Nu.reference,
  fontSize: Vu.reference,
  px: Bu.reference,
  _focusVisible: {
    [Xf.variable]: "shadows.outline"
  }
}, G5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, K5 = {
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
}, Y5 = zo({
  container: U5,
  label: G5,
  closeButton: K5
}), q5 = {
  sm: zo({
    container: {
      [ju.variable]: "sizes.5",
      [Nu.variable]: "sizes.5",
      [Vu.variable]: "fontSizes.xs",
      [Bu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: zo({
    container: {
      [ju.variable]: "sizes.6",
      [Nu.variable]: "sizes.6",
      [Vu.variable]: "fontSizes.sm",
      [Bu.variable]: "space.2"
    }
  }),
  lg: zo({
    container: {
      [ju.variable]: "sizes.8",
      [Nu.variable]: "sizes.8",
      [Vu.variable]: "fontSizes.md",
      [Bu.variable]: "space.3"
    }
  })
}, X5 = {
  subtle: zo((e) => {
    var t;
    return {
      container: (t = gs.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: zo((e) => {
    var t;
    return {
      container: (t = gs.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: zo((e) => {
    var t;
    return {
      container: (t = gs.variants) == null ? void 0 : t.outline(e)
    };
  })
}, Q5 = H5({
  variants: X5,
  baseStyle: Y5,
  sizes: q5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: pr, defineMultiStyleConfig: Z5 } = Oe(bA.keys), _i = J("input-height"), Oi = J("input-font-size"), Mi = J("input-padding"), Ii = J("input-border-radius"), J5 = pr({
  addon: {
    height: _i.reference,
    fontSize: Oi.reference,
    px: Mi.reference,
    borderRadius: Ii.reference
  },
  field: {
    width: "100%",
    height: _i.reference,
    fontSize: Oi.reference,
    px: Mi.reference,
    borderRadius: Ii.reference,
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
    [Oi.variable]: "fontSizes.lg",
    [Mi.variable]: "space.4",
    [Ii.variable]: "radii.md",
    [_i.variable]: "sizes.12"
  },
  md: {
    [Oi.variable]: "fontSizes.md",
    [Mi.variable]: "space.4",
    [Ii.variable]: "radii.md",
    [_i.variable]: "sizes.10"
  },
  sm: {
    [Oi.variable]: "fontSizes.sm",
    [Mi.variable]: "space.3",
    [Ii.variable]: "radii.sm",
    [_i.variable]: "sizes.8"
  },
  xs: {
    [Oi.variable]: "fontSizes.xs",
    [Mi.variable]: "space.2",
    [Ii.variable]: "radii.sm",
    [_i.variable]: "sizes.6"
  }
}, eD = {
  lg: pr({
    field: Fr.lg,
    group: Fr.lg
  }),
  md: pr({
    field: Fr.md,
    group: Fr.md
  }),
  sm: pr({
    field: Fr.sm,
    group: Fr.sm
  }),
  xs: pr({
    field: Fr.xs,
    group: Fr.xs
  })
};
function Bv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var tD = pr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Bv(e);
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
        borderColor: Et(t, r),
        boxShadow: `0 0 0 1px ${Et(t, r)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Et(t, n),
        boxShadow: `0 0 0 1px ${Et(t, n)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: Q("inherit", "whiteAlpha.50")(e),
      bg: Q("gray.100", "whiteAlpha.300")(e)
    }
  };
}), nD = pr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Bv(e);
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
        borderColor: Et(t, r)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Et(t, n)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: Q("gray.100", "whiteAlpha.50")(e)
    }
  };
}), rD = pr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Bv(e);
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
        borderColor: Et(t, r),
        boxShadow: `0px 1px 0px 0px ${Et(t, r)}`
      },
      _focusVisible: {
        borderColor: Et(t, n),
        boxShadow: `0px 1px 0px 0px ${Et(t, n)}`
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
}), oD = pr({
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
}), iD = {
  outline: tD,
  filled: nD,
  flushed: rD,
  unstyled: oD
}, be = Z5({
  baseStyle: J5,
  sizes: eD,
  variants: iD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), eb, aD = {
  ...(eb = be.baseStyle) == null ? void 0 : eb.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, tb, nb, sD = {
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
}, rb, ob, ib, ab, sb, lb, ub, cb, lD = {
  xs: (ob = (rb = be.sizes) == null ? void 0 : rb.xs.field) != null ? ob : {},
  sm: (ab = (ib = be.sizes) == null ? void 0 : ib.sm.field) != null ? ab : {},
  md: (lb = (sb = be.sizes) == null ? void 0 : sb.md.field) != null ? lb : {},
  lg: (cb = (ub = be.sizes) == null ? void 0 : ub.lg.field) != null ? cb : {}
}, uD = {
  baseStyle: aD,
  sizes: lD,
  variants: sD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, nu = rt("tooltip-bg"), Qf = rt("tooltip-fg"), cD = rt("popper-arrow-bg"), dD = {
  bg: nu.reference,
  color: Qf.reference,
  [nu.variable]: "colors.gray.700",
  [Qf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [nu.variable]: "colors.gray.300",
    [Qf.variable]: "colors.gray.900"
  },
  [cD.variable]: nu.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, fD = {
  baseStyle: dD
}, { defineMultiStyleConfig: pD, definePartsStyle: ts } = Oe(PA.keys), hD = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    Ky(),
    Ky("1rem", "rgba(0,0,0,0.1)")
  )(e), a = Q(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Et(n, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!r && o && i,
    ...r ? { bgImage: s } : { bgColor: a }
  };
}, mD = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, vD = (e) => ({
  bg: Q("gray.100", "whiteAlpha.300")(e)
}), gD = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...hD(e)
}), yD = ts((e) => ({
  label: mD,
  filledTrack: gD(e),
  track: vD(e)
})), bD = {
  xs: ts({
    track: { h: "1" }
  }),
  sm: ts({
    track: { h: "2" }
  }),
  md: ts({
    track: { h: "3" }
  }),
  lg: ts({
    track: { h: "4" }
  })
}, SD = pD({
  sizes: bD,
  baseStyle: yD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), xD = (e) => typeof e == "function";
function _t(e, ...t) {
  return xD(e) ? e(...t) : e;
}
var { definePartsStyle: Wu, defineMultiStyleConfig: wD } = Oe(hA.keys), ys = J("checkbox-size"), CD = (e) => {
  const { colorScheme: t } = e;
  return {
    w: ys.reference,
    h: ys.reference,
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
}, kD = {
  _disabled: { cursor: "not-allowed" }
}, PD = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, ED = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, TD = Wu((e) => ({
  icon: ED,
  container: kD,
  control: _t(CD, e),
  label: PD
})), _D = {
  sm: Wu({
    control: { [ys.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Wu({
    control: { [ys.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Wu({
    control: { [ys.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Oc = wD({
  baseStyle: TD,
  sizes: _D,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: OD, definePartsStyle: Hu } = Oe(EA.keys), MD = (e) => {
  var t;
  const n = (t = _t(Oc.baseStyle, e)) == null ? void 0 : t.control;
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
}, ID = Hu((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = Oc).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = Oc).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: MD(e)
  };
}), RD = {
  md: Hu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Hu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Hu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, $D = OD({
  baseStyle: ID,
  sizes: RD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: AD, definePartsStyle: DD } = Oe(TA.keys), ru = J("select-bg"), db, FD = {
  ...(db = be.baseStyle) == null ? void 0 : db.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: ru.reference,
  [ru.variable]: "colors.white",
  _dark: {
    [ru.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: ru.reference
  }
}, LD = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, zD = DD({
  field: FD,
  icon: LD
}), ou = {
  paddingInlineEnd: "8"
}, fb, pb, hb, mb, vb, gb, yb, bb, jD = {
  lg: {
    ...(fb = be.sizes) == null ? void 0 : fb.lg,
    field: {
      ...(pb = be.sizes) == null ? void 0 : pb.lg.field,
      ...ou
    }
  },
  md: {
    ...(hb = be.sizes) == null ? void 0 : hb.md,
    field: {
      ...(mb = be.sizes) == null ? void 0 : mb.md.field,
      ...ou
    }
  },
  sm: {
    ...(vb = be.sizes) == null ? void 0 : vb.sm,
    field: {
      ...(gb = be.sizes) == null ? void 0 : gb.sm.field,
      ...ou
    }
  },
  xs: {
    ...(yb = be.sizes) == null ? void 0 : yb.xs,
    field: {
      ...(bb = be.sizes) == null ? void 0 : bb.xs.field,
      ...ou
    },
    icon: {
      insetEnd: "1"
    }
  }
}, ND = AD({
  baseStyle: zD,
  sizes: jD,
  variants: be.variants,
  defaultProps: be.defaultProps
}), Zf = J("skeleton-start-color"), Jf = J("skeleton-end-color"), VD = {
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
}, BD = {
  baseStyle: VD
}, ep = J("skip-link-bg"), WD = {
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
}, HD = {
  baseStyle: WD
}, { defineMultiStyleConfig: UD, definePartsStyle: Ld } = Oe(_A.keys), Xs = J("slider-thumb-size"), Qs = J("slider-track-size"), Hr = J("slider-bg"), GD = (e) => {
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
    ...Vv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, KD = (e) => ({
  ...Vv({
    orientation: e.orientation,
    horizontal: { h: Qs.reference },
    vertical: { w: Qs.reference }
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
}), YD = (e) => {
  const { orientation: t } = e;
  return {
    ...Vv({
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
    w: Xs.reference,
    h: Xs.reference,
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
}, qD = (e) => {
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
}, XD = Ld((e) => ({
  container: GD(e),
  track: KD(e),
  thumb: YD(e),
  filledTrack: qD(e)
})), QD = Ld({
  container: {
    [Xs.variable]: "sizes.4",
    [Qs.variable]: "sizes.1"
  }
}), ZD = Ld({
  container: {
    [Xs.variable]: "sizes.3.5",
    [Qs.variable]: "sizes.1"
  }
}), JD = Ld({
  container: {
    [Xs.variable]: "sizes.2.5",
    [Qs.variable]: "sizes.0.5"
  }
}), eF = {
  lg: QD,
  md: ZD,
  sm: JD
}, tF = UD({
  baseStyle: XD,
  sizes: eF,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), _o = rt("spinner-size"), nF = {
  width: [_o.reference],
  height: [_o.reference]
}, rF = {
  xs: {
    [_o.variable]: "sizes.3"
  },
  sm: {
    [_o.variable]: "sizes.4"
  },
  md: {
    [_o.variable]: "sizes.6"
  },
  lg: {
    [_o.variable]: "sizes.8"
  },
  xl: {
    [_o.variable]: "sizes.12"
  }
}, oF = {
  baseStyle: nF,
  sizes: rF,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: iF, definePartsStyle: DC } = Oe(OA.keys), aF = {
  fontWeight: "medium"
}, sF = {
  opacity: 0.8,
  marginBottom: "2"
}, lF = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, uF = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, cF = DC({
  container: {},
  label: aF,
  helpText: sF,
  number: lF,
  icon: uF
}), dF = {
  md: DC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, fF = iF({
  baseStyle: cF,
  sizes: dF,
  defaultProps: {
    size: "md"
  }
}), tp = J("kbd-bg"), pF = {
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
}, hF = {
  baseStyle: pF
}, mF = {
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
}, vF = {
  baseStyle: mF
}, { defineMultiStyleConfig: gF, definePartsStyle: yF } = Oe(SA.keys), bF = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, SF = yF({
  icon: bF
}), xF = gF({
  baseStyle: SF
}), { defineMultiStyleConfig: wF, definePartsStyle: CF } = Oe(xA.keys), Hn = J("menu-bg"), np = J("menu-shadow"), kF = {
  [Hn.variable]: "#fff",
  [np.variable]: "shadows.sm",
  _dark: {
    [Hn.variable]: "colors.gray.700",
    [np.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Hn.reference,
  boxShadow: np.reference
}, PF = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Hn.variable]: "colors.gray.100",
    _dark: {
      [Hn.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Hn.variable]: "colors.gray.200",
    _dark: {
      [Hn.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Hn.variable]: "colors.gray.100",
    _dark: {
      [Hn.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Hn.reference
}, EF = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, TF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, _F = {
  opacity: 0.6
}, OF = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, MF = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, IF = CF({
  button: MF,
  list: kF,
  item: PF,
  groupTitle: EF,
  icon: TF,
  command: _F,
  divider: OF
}), RF = wF({
  baseStyle: IF
}), { defineMultiStyleConfig: $F, definePartsStyle: Gh } = Oe(wA.keys), rp = J("modal-bg"), op = J("modal-shadow"), AF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, DF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, FF = (e) => {
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
}, LF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, zF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, jF = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, NF = {
  px: "6",
  py: "4"
}, VF = Gh((e) => ({
  overlay: AF,
  dialogContainer: _t(DF, e),
  dialog: _t(FF, e),
  header: LF,
  closeButton: zF,
  body: _t(jF, e),
  footer: NF
}));
function _n(e) {
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
var BF = {
  xs: _n("xs"),
  sm: _n("sm"),
  md: _n("md"),
  lg: _n("lg"),
  xl: _n("xl"),
  "2xl": _n("2xl"),
  "3xl": _n("3xl"),
  "4xl": _n("4xl"),
  "5xl": _n("5xl"),
  "6xl": _n("6xl"),
  full: _n("full")
}, WF = $F({
  baseStyle: VF,
  sizes: BF,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: HF, definePartsStyle: FC } = Oe(CA.keys), Wv = rt("number-input-stepper-width"), LC = rt("number-input-input-padding"), UF = cr(Wv).add("0.5rem").toString(), ip = rt("number-input-bg"), ap = rt("number-input-color"), sp = rt("number-input-border-color"), GF = {
  [Wv.variable]: "sizes.6",
  [LC.variable]: UF
}, KF = (e) => {
  var t, n;
  return (n = (t = _t(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, YF = {
  width: Wv.reference
}, qF = {
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
}, XF = FC((e) => {
  var t;
  return {
    root: GF,
    field: (t = _t(KF, e)) != null ? t : {},
    stepperGroup: YF,
    stepper: qF
  };
});
function iu(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = MC.fontSizes[a];
  return FC({
    field: {
      ...o.field,
      paddingInlineEnd: LC.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: cr(s).multiply(0.75).toString(),
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
var QF = {
  xs: iu("xs"),
  sm: iu("sm"),
  md: iu("md"),
  lg: iu("lg")
}, ZF = HF({
  baseStyle: XF,
  sizes: QF,
  variants: be.variants,
  defaultProps: be.defaultProps
}), Sb, JF = {
  ...(Sb = be.baseStyle) == null ? void 0 : Sb.field,
  textAlign: "center"
}, e4 = {
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
}, xb, wb, t4 = {
  outline: (e) => {
    var t, n, r;
    return (r = (n = _t((t = be.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  flushed: (e) => {
    var t, n, r;
    return (r = (n = _t((t = be.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  filled: (e) => {
    var t, n, r;
    return (r = (n = _t((t = be.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  unstyled: (wb = (xb = be.variants) == null ? void 0 : xb.unstyled.field) != null ? wb : {}
}, n4 = {
  baseStyle: JF,
  sizes: e4,
  variants: t4,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: r4, definePartsStyle: o4 } = Oe(kA.keys), au = rt("popper-bg"), i4 = rt("popper-arrow-bg"), Cb = rt("popper-arrow-shadow-color"), a4 = { zIndex: 10 }, s4 = {
  [au.variable]: "colors.white",
  bg: au.reference,
  [i4.variable]: au.reference,
  [Cb.variable]: "colors.gray.200",
  _dark: {
    [au.variable]: "colors.gray.700",
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
}, l4 = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, u4 = {
  px: 3,
  py: 2
}, c4 = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, d4 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, f4 = o4({
  popper: a4,
  content: s4,
  header: l4,
  body: u4,
  footer: c4,
  closeButton: d4
}), p4 = r4({
  baseStyle: f4
}), { definePartsStyle: Kh, defineMultiStyleConfig: h4 } = Oe(mA.keys), lp = J("drawer-bg"), up = J("drawer-box-shadow");
function si(e) {
  return Kh(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var m4 = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, v4 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, g4 = (e) => {
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
}, y4 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, b4 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, S4 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, x4 = {
  px: "6",
  py: "4"
}, w4 = Kh((e) => ({
  overlay: m4,
  dialogContainer: v4,
  dialog: _t(g4, e),
  header: y4,
  closeButton: b4,
  body: S4,
  footer: x4
})), C4 = {
  xs: si("xs"),
  sm: si("md"),
  md: si("lg"),
  lg: si("2xl"),
  xl: si("4xl"),
  full: si("full")
}, k4 = h4({
  baseStyle: w4,
  sizes: C4,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: P4, defineMultiStyleConfig: E4 } = Oe(vA.keys), T4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, _4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, O4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, M4 = P4({
  preview: T4,
  input: _4,
  textarea: O4
}), I4 = E4({
  baseStyle: M4
}), { definePartsStyle: R4, defineMultiStyleConfig: $4 } = Oe(gA.keys), Ki = J("form-control-color"), A4 = {
  marginStart: "1",
  [Ki.variable]: "colors.red.500",
  _dark: {
    [Ki.variable]: "colors.red.300"
  },
  color: Ki.reference
}, D4 = {
  mt: "2",
  [Ki.variable]: "colors.gray.600",
  _dark: {
    [Ki.variable]: "colors.whiteAlpha.600"
  },
  color: Ki.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, F4 = R4({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: A4,
  helperText: D4
}), L4 = $4({
  baseStyle: F4
}), { definePartsStyle: z4, defineMultiStyleConfig: j4 } = Oe(yA.keys), Yi = J("form-error-color"), N4 = {
  [Yi.variable]: "colors.red.500",
  _dark: {
    [Yi.variable]: "colors.red.300"
  },
  color: Yi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, V4 = {
  marginEnd: "0.5em",
  [Yi.variable]: "colors.red.500",
  _dark: {
    [Yi.variable]: "colors.red.300"
  },
  color: Yi.reference
}, B4 = z4({
  text: N4,
  icon: V4
}), W4 = j4({
  baseStyle: B4
}), H4 = {
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
}, U4 = {
  baseStyle: H4
}, G4 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, K4 = {
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
}, Y4 = {
  baseStyle: G4,
  sizes: K4,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: q4, definePartsStyle: X4 } = Oe(pA.keys), cp = J("breadcrumb-link-decor"), Q4 = {
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
}, Z4 = X4({
  link: Q4
}), J4 = q4({
  baseStyle: Z4
}), eL = {
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
  const r = ua(`${t}.200`, 0.12)(n), o = ua(`${t}.200`, 0.24)(n);
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
}, tL = (e) => {
  const { colorScheme: t } = e, n = Q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ..._t(zC, e)
  };
}, nL = {
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
}, rL = (e) => {
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
  } = (t = nL[n]) != null ? t : {}, s = Q(r, `${n}.200`)(e);
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
}, oL = (e) => {
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
}, iL = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, aL = {
  ghost: zC,
  outline: tL,
  solid: rL,
  link: oL,
  unstyled: iL
}, sL = {
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
}, lL = {
  baseStyle: eL,
  variants: aL,
  sizes: sL,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: jo, defineMultiStyleConfig: uL } = Oe(AA.keys), Mc = J("card-bg"), vr = J("card-padding"), jC = J("card-shadow"), Uu = J("card-radius"), NC = J("card-border-width", "0"), VC = J("card-border-color"), cL = jo({
  container: {
    [Mc.variable]: "colors.chakra-body-bg",
    backgroundColor: Mc.reference,
    boxShadow: jC.reference,
    borderRadius: Uu.reference,
    color: "chakra-body-text",
    borderWidth: NC.reference,
    borderColor: VC.reference
  },
  body: {
    padding: vr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: vr.reference
  },
  footer: {
    padding: vr.reference
  }
}), dL = {
  sm: jo({
    container: {
      [Uu.variable]: "radii.base",
      [vr.variable]: "space.3"
    }
  }),
  md: jo({
    container: {
      [Uu.variable]: "radii.md",
      [vr.variable]: "space.5"
    }
  }),
  lg: jo({
    container: {
      [Uu.variable]: "radii.xl",
      [vr.variable]: "space.7"
    }
  })
}, fL = {
  elevated: jo({
    container: {
      [jC.variable]: "shadows.base",
      _dark: {
        [Mc.variable]: "colors.gray.700"
      }
    }
  }),
  outline: jo({
    container: {
      [NC.variable]: "1px",
      [VC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: jo({
    container: {
      [Mc.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [vr.variable]: 0
    },
    header: {
      [vr.variable]: 0
    },
    footer: {
      [vr.variable]: 0
    }
  }
}, pL = uL({
  baseStyle: cL,
  variants: fL,
  sizes: dL,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), bs = rt("close-button-size"), Ba = rt("close-button-bg"), hL = {
  w: [bs.reference],
  h: [bs.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Ba.variable]: "colors.blackAlpha.100",
    _dark: {
      [Ba.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Ba.variable]: "colors.blackAlpha.200",
    _dark: {
      [Ba.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Ba.reference
}, mL = {
  lg: {
    [bs.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [bs.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [bs.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, vL = {
  baseStyle: hL,
  sizes: mL,
  defaultProps: {
    size: "md"
  }
}, { variants: gL, defaultProps: yL } = gs, bL = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, SL = {
  baseStyle: bL,
  variants: gL,
  defaultProps: yL
}, xL = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, wL = {
  baseStyle: xL
}, CL = {
  opacity: 0.6,
  borderColor: "inherit"
}, kL = {
  borderStyle: "solid"
}, PL = {
  borderStyle: "dashed"
}, EL = {
  solid: kL,
  dashed: PL
}, TL = {
  baseStyle: CL,
  variants: EL,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: _L, defineMultiStyleConfig: OL } = Oe(cA.keys), ML = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, IL = {
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
}, RL = {
  pt: "2",
  px: "4",
  pb: "5"
}, $L = {
  fontSize: "1.25em"
}, AL = _L({
  container: ML,
  button: IL,
  panel: RL,
  icon: $L
}), DL = OL({ baseStyle: AL }), { definePartsStyle: vl, defineMultiStyleConfig: FL } = Oe(dA.keys), Qt = J("alert-fg"), Pr = J("alert-bg"), LL = vl({
  container: {
    bg: Pr.reference,
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
function Hv(e) {
  const { theme: t, colorScheme: n } = e, r = ua(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var zL = vl((e) => {
  const { colorScheme: t } = e, n = Hv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      }
    }
  };
}), jL = vl((e) => {
  const { colorScheme: t } = e, n = Hv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Qt.reference
    }
  };
}), NL = vl((e) => {
  const { colorScheme: t } = e, n = Hv(e);
  return {
    container: {
      [Qt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Qt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Qt.reference
    }
  };
}), VL = vl((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Qt.variable]: "colors.white",
      [Pr.variable]: `colors.${t}.600`,
      _dark: {
        [Qt.variable]: "colors.gray.900",
        [Pr.variable]: `colors.${t}.200`
      },
      color: Qt.reference
    }
  };
}), BL = {
  subtle: zL,
  "left-accent": jL,
  "top-accent": NL,
  solid: VL
}, WL = FL({
  baseStyle: LL,
  variants: BL,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: BC, defineMultiStyleConfig: HL } = Oe(fA.keys), qi = J("avatar-border-color"), Ss = J("avatar-bg"), Zs = J("avatar-font-size"), ca = J("avatar-size"), UL = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: qi.reference,
  [qi.variable]: "white",
  _dark: {
    [qi.variable]: "colors.gray.800"
  }
}, GL = {
  bg: Ss.reference,
  fontSize: Zs.reference,
  width: ca.reference,
  height: ca.reference,
  lineHeight: "1",
  [Ss.variable]: "colors.gray.200",
  _dark: {
    [Ss.variable]: "colors.whiteAlpha.400"
  }
}, KL = (e) => {
  const { name: t, theme: n } = e, r = t ? e5({ string: t }) : "colors.gray.400", o = ZA(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: Ss.reference,
    fontSize: Zs.reference,
    color: i,
    borderColor: qi.reference,
    verticalAlign: "top",
    width: ca.reference,
    height: ca.reference,
    "&:not([data-loaded])": {
      [Ss.variable]: r
    },
    [qi.variable]: "colors.white",
    _dark: {
      [qi.variable]: "colors.gray.800"
    }
  };
}, YL = {
  fontSize: Zs.reference,
  lineHeight: "1"
}, qL = BC((e) => ({
  badge: _t(UL, e),
  excessLabel: _t(GL, e),
  container: _t(KL, e),
  label: YL
}));
function Lr(e) {
  const t = e !== "100%" ? RC[e] : void 0;
  return BC({
    container: {
      [ca.variable]: t ?? e,
      [Zs.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [ca.variable]: t ?? e,
      [Zs.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var XL = {
  "2xs": Lr(4),
  xs: Lr(6),
  sm: Lr(8),
  md: Lr(12),
  lg: Lr(16),
  xl: Lr(24),
  "2xl": Lr(32),
  full: Lr("100%")
}, QL = HL({
  baseStyle: qL,
  sizes: XL,
  defaultProps: {
    size: "md"
  }
}), ZL = {
  Accordion: DL,
  Alert: WL,
  Avatar: QL,
  Badge: gs,
  Breadcrumb: J4,
  Button: lL,
  Checkbox: Oc,
  CloseButton: vL,
  Code: SL,
  Container: wL,
  Divider: TL,
  Drawer: k4,
  Editable: I4,
  Form: L4,
  FormError: W4,
  FormLabel: U4,
  Heading: Y4,
  Input: be,
  Kbd: hF,
  Link: vF,
  List: xF,
  Menu: RF,
  Modal: WF,
  NumberInput: ZF,
  PinInput: n4,
  Popover: p4,
  Progress: SD,
  Radio: $D,
  Select: ND,
  Skeleton: BD,
  SkipLink: HD,
  Slider: tF,
  Spinner: oF,
  Stat: fF,
  Switch: v5,
  Table: C5,
  Tabs: z5,
  Tag: Q5,
  Textarea: uD,
  Tooltip: fD,
  Card: pL,
  Stepper: uA
}, JL = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, e3 = {
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
}, t3 = "ltr", n3 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, WC = {
  semanticTokens: JL,
  direction: t3,
  ...aA,
  components: ZL,
  styles: e3,
  config: n3
};
function ns(e) {
  return typeof e == "function";
}
function r3(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var o3 = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return F$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, r3(
    ...r.map(
      (i) => (a) => ns(i) ? i(a) : a3(a, i)
    )
  )(o);
}, i3 = o3(WC);
function a3(...e) {
  return vn({}, ...e, HC);
}
function HC(e, t, n, r) {
  if ((ns(e) || ns(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = ns(e) ? e(...o) : e, a = ns(t) ? t(...o) : t;
      return vn({}, i, a, HC);
    };
}
function s3() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var l3 = /* @__PURE__ */ s3();
function u3(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function c3(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var d3 = (e) => {
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
}, UC = d3(c3);
function GC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var KC = (e) => GC(e, (t) => t != null);
function f3(e) {
  return typeof e == "function";
}
function YC(e, ...t) {
  return f3(e) ? e(...t) : e;
}
function p3(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var h3 = typeof Element < "u", m3 = typeof Map == "function", v3 = typeof Set == "function", g3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Gu(e, t) {
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
        if (!Gu(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (m3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Gu(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (v3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (g3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (h3 && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Gu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var y3 = function(t, n) {
  try {
    return Gu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const b3 = /* @__PURE__ */ sl(y3);
function qC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = gR(), s = e ? UC(i, `components.${e}`) : void 0, l = r || s, u = vn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    KC(u3(o, ["children"]))
  ), c = m.useRef({});
  if (l) {
    const f = A$(l)(u);
    b3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Jo(e, t = {}) {
  return qC(e, t);
}
function mt(e, t = {}) {
  return qC(e, t);
}
var S3 = /* @__PURE__ */ new Set([
  ...w$,
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
]), x3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function w3(e) {
  return x3.has(e) || !S3.has(e);
}
function C3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function k3(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var P3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, E3 = /* @__PURE__ */ iC(
  function(e) {
    return P3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), T3 = E3, _3 = function(t) {
  return t !== "theme";
}, kb = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? T3 : _3;
}, Pb = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, O3 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Mv(n, r, o), hC(function() {
    return Iv(n, r, o);
  }), null;
}, M3 = function e(t, n) {
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
    var g = $v(function(y, b, h) {
      var v = u && y.as || o, S = "", x = [], k = y;
      if (y.theme == null) {
        k = {};
        for (var P in y)
          k[P] = y[P];
        k.theme = m.useContext(sa);
      }
      typeof y.className == "string" ? S = dC(b.registered, x, y.className) : y.className != null && (S = y.className + " ");
      var E = Rd(d.concat(x), b.registered, k);
      S += b.key + "-" + E.name, a !== void 0 && (S += " " + a);
      var T = u && s === void 0 ? kb(v) : l, M = {};
      for (var I in y)
        u && I === "as" || // $FlowFixMe
        T(I) && (M[I] = y[I]);
      return M.className = S, M.ref = h, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(O3, {
        cache: b,
        serialized: E,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ m.createElement(v, M));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(y, b) {
      return e(y, q({}, n, b, {
        shouldForwardProp: Pb(g, b, !0)
      })).apply(void 0, d);
    }, g;
  };
}, I3 = [
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
], Ic = M3.bind();
I3.forEach(function(e) {
  Ic[e] = Ic(e);
});
var Eb, R3 = (Eb = Ic.default) != null ? Eb : Ic, $3 = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = GC(a, (d, f) => k$(f)), l = YC(e, t), u = C3(
    {},
    o,
    l,
    KC(s),
    i
  ), c = OC(u)(t.theme);
  return r ? [c, r] : c;
};
function dp(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = w3);
  const o = $3({ baseStyle: n }), i = R3(
    e,
    r
  )(o);
  return re.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = ka();
    return re.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function A3() {
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
var X = A3();
function oe(e) {
  return m.forwardRef(e);
}
function XC(e = {}) {
  const {
    strict: t = !0,
    errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: r
  } = e, o = m.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = m.useContext(o);
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
function D3(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = m.useMemo(() => x$(n), [n]);
  return /* @__PURE__ */ w.jsxs(YI, { theme: o, children: [
    /* @__PURE__ */ w.jsx(F3, { root: t }),
    r
  ] });
}
function F3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ w.jsx($d, { styles: (n) => ({ [t]: n.__cssVars }) });
}
XC({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function L3(e) {
  return XC({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `
  });
}
function z3() {
  const { colorMode: e } = ka();
  return /* @__PURE__ */ w.jsx(
    $d,
    {
      styles: (t) => {
        const n = UC(t, "styles.global"), r = YC(n, { theme: t, colorMode: e });
        return r ? OC(r)(t) : void 0;
      }
    }
  );
}
var Uv = m.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Uv.displayName = "EnvironmentContext";
function j3({ defer: e } = {}) {
  const [, t] = m.useReducer((n) => n + 1, 0);
  return la(() => {
    e && t();
  }, [e]), m.useContext(Uv);
}
function QC(e) {
  const { children: t, environment: n, disabled: r } = e, o = m.useRef(null), i = m.useMemo(() => n || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [n]), a = !r || !n;
  return /* @__PURE__ */ w.jsxs(Uv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ w.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
QC.displayName = "EnvironmentProvider";
var N3 = (e) => {
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
  return /* @__PURE__ */ w.jsx(D3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ w.jsxs(
    xC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ w.jsx(eR, { scope: o }) : /* @__PURE__ */ w.jsx(JI, {}),
        !c && /* @__PURE__ */ w.jsx(z3, {}),
        r ? /* @__PURE__ */ w.jsx(bC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, V3 = (e, t) => e.find((n) => n.id === t);
function Tb(e, t) {
  const n = ZC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function ZC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (V3(r, t))
      return n;
}
function B3(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function W3(e) {
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
  const n = m.useRef(e);
  return m.useEffect(() => {
    n.current = e;
  }), m.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function H3(e, t) {
  const n = ro(e);
  m.useEffect(() => {
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
function da(e, t) {
  const n = m.useRef(!1), r = m.useRef(!1);
  m.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), m.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const JC = m.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), zd = m.createContext({}), gl = m.createContext(null), jd = typeof document < "u", Gv = jd ? m.useLayoutEffect : m.useEffect, ek = m.createContext({ strict: !1 }), Kv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), U3 = "framerAppearId", tk = "data-" + Kv(U3);
function G3(e, t, n, r) {
  const { visualElement: o } = m.useContext(zd), i = m.useContext(ek), a = m.useContext(gl), s = m.useContext(JC).reducedMotion, l = m.useRef();
  r = r || i.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  m.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = m.useRef(!!n[tk]);
  return Gv(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), m.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function Ri(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function K3(e, t, n) {
  return m.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ri(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Js(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Nd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Yv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], qv = ["initial", ...Yv];
function Vd(e) {
  return Nd(e.animate) || qv.some((t) => Js(e[t]));
}
function nk(e) {
  return !!(Vd(e) || e.variants);
}
function Y3(e, t) {
  if (Vd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Js(n) ? n : void 0,
      animate: Js(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function q3(e) {
  const { initial: t, animate: n } = Y3(e, m.useContext(zd));
  return m.useMemo(() => ({ initial: t, animate: n }), [_b(t), _b(n)]);
}
function _b(e) {
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
}, el = {};
for (const e in Ob)
  el[e] = {
    isEnabled: (t) => Ob[e].some((n) => !!t[n])
  };
function X3(e) {
  for (const t in e)
    el[t] = {
      ...el[t],
      ...e[t]
    };
}
const Xv = m.createContext({}), rk = m.createContext({}), Q3 = Symbol.for("motionComponentSymbol");
function Z3({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && X3(e);
  function i(s, l) {
    let u;
    const c = {
      ...m.useContext(JC),
      ...s,
      layoutId: J3(s)
    }, { isStatic: d } = c, f = q3(s), p = r(s, d);
    if (!d && jd) {
      f.visualElement = G3(o, p, c, t);
      const g = m.useContext(rk), y = m.useContext(ek).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        y,
        e,
        g
      ));
    }
    return m.createElement(
      zd.Provider,
      { value: f },
      u && f.visualElement ? m.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, K3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = m.forwardRef(i);
  return a[Q3] = o, a;
}
function J3({ layoutId: e }) {
  const t = m.useContext(Xv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function ez(e) {
  function t(r, o = {}) {
    return Z3(e(r, o));
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
const tz = [
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
function Qv(e) {
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
      !!(tz.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Rc = {};
function nz(e) {
  Object.assign(Rc, e);
}
const yl = [
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
], ei = new Set(yl);
function ok(e, { layout: t, layoutId: n }) {
  return ei.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Rc[e] || e === "opacity");
}
const Bt = (e) => !!(e && e.getVelocity), rz = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, oz = yl.length;
function iz(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < oz; a++) {
    const s = yl[a];
    if (e[s] !== void 0) {
      const l = rz[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const ik = (e) => (t) => typeof t == "string" && t.startsWith(e), ak = ik("--"), Yh = ik("var(--"), az = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, sz = (e, t) => t && typeof e == "number" ? t.transform(e) : e, lo = (e, t, n) => Math.min(Math.max(n, e), t), ti = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, xs = {
  ...ti,
  transform: (e) => lo(0, 1, e)
}, su = {
  ...ti,
  default: 1
}, ws = (e) => Math.round(e * 1e5) / 1e5, Bd = /(-)?([\d]*\.?[\d])+/g, sk = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, lz = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function bl(e) {
  return typeof e == "string";
}
const Sl = (e) => ({
  test: (t) => bl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), zr = Sl("deg"), er = Sl("%"), ne = Sl("px"), uz = Sl("vh"), cz = Sl("vw"), Mb = {
  ...er,
  parse: (e) => er.parse(e) / 100,
  transform: (e) => er.transform(e * 100)
}, Ib = {
  ...ti,
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
  rotate: zr,
  rotateX: zr,
  rotateY: zr,
  rotateZ: zr,
  scale: su,
  scaleX: su,
  scaleY: su,
  scaleZ: su,
  skew: zr,
  skewX: zr,
  skewY: zr,
  distance: ne,
  translateX: ne,
  translateY: ne,
  translateZ: ne,
  x: ne,
  y: ne,
  z: ne,
  perspective: ne,
  transformPerspective: ne,
  opacity: xs,
  originX: Mb,
  originY: Mb,
  originZ: ne,
  // Misc
  zIndex: Ib,
  // SVG
  fillOpacity: xs,
  strokeOpacity: xs,
  numOctaves: Ib
};
function Zv(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (ak(d)) {
      i[d] = f;
      continue;
    }
    const p = lk[d], g = sz(f, p);
    if (ei.has(d)) {
      if (l = !0, a[d] = g, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || r ? o.transform = iz(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Jv = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function uk(e, t, n) {
  for (const r in t)
    !Bt(t[r]) && !ok(r, n) && (e[r] = t[r]);
}
function dz({ transformTemplate: e }, t, n) {
  return m.useMemo(() => {
    const r = Jv();
    return Zv(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function fz(e, t, n) {
  const r = e.style || {}, o = {};
  return uk(o, r, e), Object.assign(o, dz(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function pz(e, t, n) {
  const r = {}, o = fz(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const hz = /* @__PURE__ */ new Set([
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
function $c(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || hz.has(e);
}
let ck = (e) => !$c(e);
function mz(e) {
  e && (ck = (t) => t.startsWith("on") ? !$c(t) : e(t));
}
try {
  mz(require("@emotion/is-prop-valid").default);
} catch {
}
function vz(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (ck(o) || n === !0 && $c(o) || !t && !$c(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Rb(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function gz(e, t, n) {
  const r = Rb(t, e.x, e.width), o = Rb(n, e.y, e.height);
  return `${r} ${o}`;
}
const yz = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, bz = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Sz(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? yz : bz;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function eg(e, {
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
  if (Zv(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: y } = e;
  p.transform && (y && (g.transform = p.transform), delete p.transform), y && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = gz(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && Sz(p, a, s, l, !1);
}
const dk = () => ({
  ...Jv(),
  attrs: {}
}), tg = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function xz(e, t, n, r) {
  const o = m.useMemo(() => {
    const i = dk();
    return eg(i, t, { enableHardwareAcceleration: !1 }, tg(r), e.transformTemplate), {
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
function wz(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Qv(n) ? xz : pz)(r, i, a, n), c = {
      ...vz(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = m.useMemo(() => Bt(d) ? d.get() : d, [d]);
    return m.createElement(n, {
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
    e.setAttribute(pk.has(o) ? o : Kv(o), t.attrs[o]);
}
function ng(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Bt(n[o]) || t.style && Bt(t.style[o]) || ok(o, e)) && (r[o] = n[o]);
  return r;
}
function mk(e, t) {
  const n = ng(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o = yl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function rg(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function vk(e) {
  const t = m.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ac = (e) => Array.isArray(e), Cz = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), kz = (e) => Ac(e) ? e[e.length - 1] || 0 : e;
function Ku(e) {
  const t = Bt(e) ? e.get() : e;
  return Cz(t) ? t.toValue() : t;
}
function Pz({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: Ez(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const gk = (e) => (t, n) => {
  const r = m.useContext(zd), o = m.useContext(gl), i = () => Pz(e, t, r, o);
  return n ? i() : vk(i);
};
function Ez(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Ku(i[f]);
  let { initial: a, animate: s } = e;
  const l = Vd(e), u = nk(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Nd(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = rg(e, p);
    if (!g)
      return;
    const { transitionEnd: y, transition: b, ...h } = g;
    for (const v in h) {
      let S = h[v];
      if (Array.isArray(S)) {
        const x = c ? S.length - 1 : 0;
        S = S[x];
      }
      S !== null && (o[v] = S);
    }
    for (const v in y)
      o[v] = y[v];
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
function Tz(e) {
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
const lu = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], _z = 40;
function Oz(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = lu.reduce((d, f) => (d[f] = Tz(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, _z), 1), o.timestamp = d, o.isProcessing = !0, lu.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: lu.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, y = !1, b = !1) => (n || l(), p.schedule(g, y, b)), d;
  }, {}), cancel: (d) => lu.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: _e, cancel: Er, state: ot, steps: fp } = Oz(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), Mz = {
  useVisualState: gk({
    scrapeMotionValuesFromProps: mk,
    createRenderState: dk,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      _e.read(() => {
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
      }), _e.render(() => {
        eg(n, r, { enableHardwareAcceleration: !1 }, tg(t.tagName), e.transformTemplate), hk(t, n);
      });
    }
  })
}, Iz = {
  useVisualState: gk({
    scrapeMotionValuesFromProps: ng,
    createRenderState: Jv
  })
};
function Rz(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Qv(e) ? Mz : Iz,
    preloadedFeatures: n,
    useRender: wz(t),
    createVisualElement: r,
    Component: e
  };
}
function hr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const yk = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Wd(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const $z = (e) => (t) => yk(t) && e(t, Wd(t));
function gr(e, t, n, r) {
  return hr(e, t, $z(n), r);
}
const Az = (e, t) => (n) => t(e(n)), oo = (...e) => e.reduce(Az);
function bk(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Ab = bk("dragHorizontal"), Db = bk("dragVertical");
function Sk(e) {
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
function xk() {
  const e = Sk(!0);
  return e ? (e(), !1) : !0;
}
class ho {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Fb(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || xk())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && _e.update(() => s[r](i, a));
  };
  return gr(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class Dz extends ho {
  mount() {
    this.unmount = oo(Fb(this.node, !0), Fb(this.node, !1));
  }
  unmount() {
  }
}
class Fz extends ho {
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
    this.unmount = oo(hr(this.node.current, "focus", () => this.onFocus()), hr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const wk = (e, t) => t ? e === t ? !0 : wk(e, t.parentElement) : !1;
function pp(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Wd(n));
}
class Lz extends ho {
  constructor() {
    super(...arguments), this.removeStartListeners = He, this.removeEndListeners = He, this.removeAccessibleListeners = He, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = gr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        _e.update(() => {
          wk(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = gr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = oo(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || pp("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && _e.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = hr(this.node.current, "keyup", a), pp("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = hr(this.node.current, "keydown", t), r = () => {
        this.isPressing && pp("cancel", (i, a) => this.cancelPress(i, a));
      }, o = hr(this.node.current, "blur", r);
      this.removeAccessibleListeners = oo(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && _e.update(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !xk();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && _e.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = gr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = hr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = oo(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const qh = /* @__PURE__ */ new WeakMap(), hp = /* @__PURE__ */ new WeakMap(), zz = (e) => {
  const t = qh.get(e.target);
  t && t(e);
}, jz = (e) => {
  e.forEach(zz);
};
function Nz({ root: e, ...t }) {
  const n = e || document;
  hp.has(n) || hp.set(n, {});
  const r = hp.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(jz, { root: e, ...t })), r[o];
}
function Vz(e, t, n) {
  const r = Nz(t);
  return qh.set(e, n), r.observe(e), () => {
    qh.delete(e), r.unobserve(e);
  };
}
const Bz = {
  some: 0,
  all: 1
};
class Wz extends ho {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Bz[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return Vz(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Hz(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Hz({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Uz = {
  inView: {
    Feature: Wz
  },
  tap: {
    Feature: Lz
  },
  focus: {
    Feature: Fz
  },
  hover: {
    Feature: Dz
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
function Gz(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function Kz(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function Hd(e, t, n) {
  const r = e.getProps();
  return rg(r, t, n !== void 0 ? n : r.custom, Gz(e), Kz(e));
}
let Yz = He, og = He;
const io = (e) => e * 1e3, yr = (e) => e / 1e3, qz = {
  current: !1
}, kk = (e) => Array.isArray(e) && typeof e[0] == "number";
function Pk(e) {
  return !!(!e || typeof e == "string" && Ek[e] || kk(e) || Array.isArray(e) && e.every(Pk));
}
const rs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Ek = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: rs([0, 0.65, 0.55, 1]),
  circOut: rs([0.55, 0, 1, 0.45]),
  backIn: rs([0.31, 0.01, 0.66, -0.59]),
  backOut: rs([0.33, 1.53, 0.69, 0.99])
};
function Tk(e) {
  if (e)
    return kk(e) ? rs(e) : Array.isArray(e) ? e.map(Tk) : Ek[e];
}
function Xz(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
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
function Qz(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const _k = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Zz = 1e-7, Jz = 12;
function ej(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = _k(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Zz && ++s < Jz);
  return a;
}
function xl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => ej(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : _k(o(i), t, r);
}
const tj = xl(0.42, 0, 1, 1), nj = xl(0, 0, 0.58, 1), Ok = xl(0.42, 0, 0.58, 1), rj = (e) => Array.isArray(e) && typeof e[0] != "number", Mk = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ik = (e) => (t) => 1 - e(1 - t), Rk = (e) => 1 - Math.sin(Math.acos(e)), ig = Ik(Rk), oj = Mk(ig), $k = xl(0.33, 1.53, 0.69, 0.99), ag = Ik($k), ij = Mk(ag), aj = (e) => (e *= 2) < 1 ? 0.5 * ag(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), sj = {
  linear: He,
  easeIn: tj,
  easeInOut: Ok,
  easeOut: nj,
  circIn: Rk,
  circInOut: oj,
  circOut: ig,
  backIn: ag,
  backInOut: ij,
  backOut: $k,
  anticipate: aj
}, Lb = (e) => {
  if (Array.isArray(e)) {
    og(e.length === 4);
    const [t, n, r, o] = e;
    return xl(t, n, r, o);
  } else if (typeof e == "string")
    return sj[e];
  return e;
}, sg = (e, t) => (n) => !!(bl(n) && lz.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Ak = (e, t, n) => (r) => {
  if (!bl(r))
    return r;
  const [o, i, a, s] = r.match(Bd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, lj = (e) => lo(0, 255, e), mp = {
  ...ti,
  transform: (e) => Math.round(lj(e))
}, Ao = {
  test: sg("rgb", "red"),
  parse: Ak("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + mp.transform(e) + ", " + mp.transform(t) + ", " + mp.transform(n) + ", " + ws(xs.transform(r)) + ")"
};
function uj(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Xh = {
  test: sg("#"),
  parse: uj,
  transform: Ao.transform
}, $i = {
  test: sg("hsl", "hue"),
  parse: Ak("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + er.transform(ws(t)) + ", " + er.transform(ws(n)) + ", " + ws(xs.transform(r)) + ")"
}, kt = {
  test: (e) => Ao.test(e) || Xh.test(e) || $i.test(e),
  parse: (e) => Ao.test(e) ? Ao.parse(e) : $i.test(e) ? $i.parse(e) : Xh.parse(e),
  transform: (e) => bl(e) ? e : e.hasOwnProperty("red") ? Ao.transform(e) : $i.transform(e)
}, je = (e, t, n) => -n * e + n * t + e;
function vp(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function cj({ hue: e, saturation: t, lightness: n, alpha: r }) {
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
}, dj = [Xh, Ao, $i], fj = (e) => dj.find((t) => t.test(e));
function zb(e) {
  const t = fj(e);
  let n = t.parse(e);
  return t === $i && (n = cj(n)), n;
}
const Dk = (e, t) => {
  const n = zb(e), r = zb(t), o = { ...n };
  return (i) => (o.red = gp(n.red, r.red, i), o.green = gp(n.green, r.green, i), o.blue = gp(n.blue, r.blue, i), o.alpha = je(n.alpha, r.alpha, i), Ao.transform(o));
};
function pj(e) {
  var t, n;
  return isNaN(e) && bl(e) && (((t = e.match(Bd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(sk)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Fk = {
  regex: az,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, Lk = {
  regex: sk,
  countKey: "Colors",
  token: "${c}",
  parse: kt.parse
}, zk = {
  regex: Bd,
  countKey: "Numbers",
  token: "${n}",
  parse: ti.parse
};
function yp(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function Dc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && yp(n, Fk), yp(n, Lk), yp(n, zk), n;
}
function jk(e) {
  return Dc(e).values;
}
function Nk(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Dc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Fk.token, a[l]) : l < r + n ? s = s.replace(Lk.token, kt.transform(a[l])) : s = s.replace(zk.token, ws(a[l]));
    return s;
  };
}
const hj = (e) => typeof e == "number" ? 0 : e;
function mj(e) {
  const t = jk(e);
  return Nk(e)(t.map(hj));
}
const uo = {
  test: pj,
  parse: jk,
  createTransformer: Nk,
  getAnimatableNone: mj
}, Vk = (e, t) => (n) => `${n > 0 ? t : e}`;
function Bk(e, t) {
  return typeof e == "number" ? (n) => je(e, t, n) : kt.test(e) ? Dk(e, t) : e.startsWith("var(") ? Vk(e, t) : Hk(e, t);
}
const Wk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Bk(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, vj = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Bk(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, Hk = (e, t) => {
  const n = uo.createTransformer(t), r = Dc(e), o = Dc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? oo(Wk(r.values, o.values), n) : Vk(e, t);
}, tl = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, jb = (e, t) => (n) => je(e, t, n);
function gj(e) {
  return typeof e == "number" ? jb : typeof e == "string" ? kt.test(e) ? Dk : Hk : Array.isArray(e) ? Wk : typeof e == "object" ? vj : jb;
}
function yj(e, t, n) {
  const r = [], o = n || gj(e[0]), i = e.length - 1;
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
  if (og(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = yj(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = tl(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(lo(e[0], e[i - 1], u)) : l;
}
function bj(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = tl(0, t, r);
    e.push(je(n, 1, o));
  }
}
function Sj(e) {
  const t = [0];
  return bj(t, e.length - 1), t;
}
function xj(e, t) {
  return e.map((n) => n * t);
}
function wj(e, t) {
  return e.map(() => t || Ok).splice(0, e.length - 1);
}
function Fc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = rj(r) ? r.map(Lb) : Lb(r), i = {
    done: !1,
    value: t[0]
  }, a = xj(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Sj(t),
    e
  ), s = Uk(a, t, {
    ease: Array.isArray(o) ? o : wj(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Gk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Cj = 5;
function Kk(e, t, n) {
  const r = Math.max(t - Cj, 0);
  return Gk(n - e(r), t - r);
}
const bp = 1e-3, kj = 0.01, Nb = 10, Pj = 0.05, Ej = 1;
function Tj({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Yz(e <= io(Nb));
  let a = 1 - t;
  a = lo(Pj, Ej, a), e = lo(kj, Nb, yr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = Qh(u, a), g = Math.exp(-d);
    return bp - f / p * g;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-d), y = Qh(Math.pow(u, 2), a);
    return (-o(u) + bp > 0 ? -1 : 1) * ((f - p) * g) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -bp + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = Oj(o, i, s);
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
const _j = 12;
function Oj(e, t, n) {
  let r = n;
  for (let o = 1; o < _j; o++)
    r = r - e(r) / t(r);
  return r;
}
function Qh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Mj = ["duration", "bounce"], Ij = ["stiffness", "damping", "mass"];
function Vb(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Rj(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Vb(e, Ij) && Vb(e, Mj)) {
    const n = Tj(e);
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
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = Rj(r), p = c ? -yr(c) : 0, g = l / (2 * Math.sqrt(s * u)), y = i - o, b = yr(Math.sqrt(s / u)), h = Math.abs(y) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 5e-3 : 0.5);
  let v;
  if (g < 1) {
    const S = Qh(b, g);
    v = (x) => {
      const k = Math.exp(-g * b * x);
      return i - k * ((p + g * b * y) / S * Math.sin(S * x) + y * Math.cos(S * x));
    };
  } else if (g === 1)
    v = (S) => i - Math.exp(-b * S) * (y + (p + b * y) * S);
  else {
    const S = b * Math.sqrt(g * g - 1);
    v = (x) => {
      const k = Math.exp(-g * b * x), P = Math.min(S * x, 300);
      return i - k * ((p + g * b * y) * Math.sinh(P) + S * y * Math.cosh(P)) / S;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (S) => {
      const x = v(S);
      if (f)
        a.done = S >= d;
      else {
        let k = p;
        S !== 0 && (g < 1 ? k = Kk(v, S, x) : k = 0);
        const P = Math.abs(k) <= n, E = Math.abs(i - x) <= t;
        a.done = P && E;
      }
      return a.value = a.done ? i : x, a;
    }
  };
}
function Bb({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (T) => s !== void 0 && T < s || l !== void 0 && T > l, g = (T) => s === void 0 ? l : l === void 0 || Math.abs(s - T) < Math.abs(l - T) ? s : l;
  let y = n * t;
  const b = d + y, h = a === void 0 ? b : a(b);
  h !== b && (y = h - d);
  const v = (T) => -y * Math.exp(-T / r), S = (T) => h + v(T), x = (T) => {
    const M = v(T), I = S(T);
    f.done = Math.abs(M) <= u, f.value = f.done ? h : I;
  };
  let k, P;
  const E = (T) => {
    p(f.value) && (k = T, P = Yk({
      keyframes: [f.value, g(f.value)],
      velocity: Kk(S, T, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return E(0), {
    calculatedDuration: null,
    next: (T) => {
      let M = !1;
      return !P && k === void 0 && (M = !0, x(T), E(T)), k !== void 0 && T > k ? P.next(T - k) : (!M && x(T), f);
    }
  };
}
const $j = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => _e.update(t, !0),
    stop: () => Er(t),
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
const Aj = {
  decay: Bb,
  inertia: Bb,
  tween: Fc,
  keyframes: Fc,
  spring: Yk
};
function Lc({ autoplay: e = !0, delay: t = 0, driver: n = $j, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, g = !1, y, b;
  const h = () => {
    b = new Promise((V) => {
      y = V;
    });
  };
  h();
  let v;
  const S = Aj[o] || Fc;
  let x;
  S !== Fc && typeof r[0] != "number" && (x = Uk([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const k = S({ ...f, keyframes: r });
  let P;
  s === "mirror" && (P = S({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let E = "idle", T = null, M = null, I = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = Hb(k));
  const { calculatedDuration: D } = k;
  let G = 1 / 0, H = 1 / 0;
  D !== null && (G = D + a, H = G * (i + 1) - a);
  let L = 0;
  const W = (V) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, V)), p < 0 && (M = Math.min(V - H / p, M)), T !== null ? L = T : L = Math.round(V - M) * p;
    const Y = L - t * (p >= 0 ? 1 : -1), j = p >= 0 ? Y < 0 : Y > H;
    L = Math.max(Y, 0), E === "finished" && T === null && (L = H);
    let te = L, le = k;
    if (i) {
      const ke = L / G;
      let Je = Math.floor(ke), qe = ke % 1;
      !qe && ke >= 1 && (qe = 1), qe === 1 && Je--, Je = Math.min(Je, i + 1);
      const an = !!(Je % 2);
      an && (s === "reverse" ? (qe = 1 - qe, a && (qe -= a / G)) : s === "mirror" && (le = P));
      let En = lo(0, 1, qe);
      L > H && (En = s === "reverse" && an ? 1 : 0), te = En * G;
    }
    const ae = j ? { done: !1, value: r[0] } : le.next(te);
    x && (ae.value = x(ae.value));
    let { done: se } = ae;
    !j && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = T === null && (E === "finished" || E === "running" && se);
    return d && d(ae.value), me && A(), ae;
  }, K = () => {
    v && v.stop(), v = void 0;
  }, $ = () => {
    E = "idle", K(), y(), h(), M = I = null;
  }, A = () => {
    E = "finished", c && c(), K(), y();
  }, z = () => {
    if (g)
      return;
    v || (v = n(W));
    const V = v.now();
    l && l(), T !== null ? M = V - T : (!M || E === "finished") && (M = V), E === "finished" && h(), I = M, T = null, E = "running", v.start();
  };
  e && z();
  const U = {
    then(V, Y) {
      return b.then(V, Y);
    },
    get time() {
      return yr(L);
    },
    set time(V) {
      V = io(V), L = V, T !== null || !v || p === 0 ? T = V : M = v.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Hb(k) : k.calculatedDuration;
      return yr(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !v || (p = V, U.time = yr(L));
    },
    get state() {
      return E;
    },
    play: z,
    pause: () => {
      E = "paused", T = L;
    },
    stop: () => {
      g = !0, E !== "idle" && (E = "idle", u && u(), $());
    },
    cancel: () => {
      I !== null && W(I), $();
    },
    complete: () => {
      E = "finished";
    },
    sample: (V) => (M = 0, W(V))
  };
  return U;
}
function Dj(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Fj = Dj(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Lj = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), uu = 10, zj = 2e4, jj = (e, t) => t.type === "spring" || e === "backgroundColor" || !Pk(t.ease);
function Nj(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(Fj() && Lj.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((v) => {
      s = v;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (jj(t, o)) {
    const v = Lc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let S = { done: !1, value: c[0] };
    const x = [];
    let k = 0;
    for (; !S.done && k < zj; )
      S = v.sample(k), x.push(S.value), k += uu;
    p = void 0, c = x, d = k - uu, f = "linear";
  }
  const g = Xz(e.owner.current, t, c, {
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
  const y = () => g.cancel(), b = () => {
    _e.update(y), s(), u();
  };
  return g.onfinish = () => {
    e.set(Qz(c, o)), r && r(), b();
  }, {
    then(v, S) {
      return l.then(v, S);
    },
    attachTimeline(v) {
      return g.timeline = v, g.onfinish = null, He;
    },
    get time() {
      return yr(g.currentTime || 0);
    },
    set time(v) {
      g.currentTime = io(v);
    },
    get speed() {
      return g.playbackRate;
    },
    set speed(v) {
      g.playbackRate = v;
    },
    get duration() {
      return yr(d);
    },
    play: () => {
      a || (g.play(), Er(y));
    },
    pause: () => g.pause(),
    stop: () => {
      if (a = !0, g.playState === "idle")
        return;
      const { currentTime: v } = g;
      if (v) {
        const S = Lc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(S.sample(v - uu).value, S.sample(v).value, uu);
      }
      b();
    },
    complete: () => g.finish(),
    cancel: b
  };
}
function Vj({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
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
  return t ? Lc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const Bj = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Wj = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Hj = {
  type: "keyframes",
  duration: 0.8
}, Uj = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Gj = (e, { keyframes: t }) => t.length > 2 ? Hj : ei.has(e) ? e.startsWith("scale") ? Wj(t[1]) : Bj : Uj, Zh = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(uo.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), Kj = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Yj(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Bd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = Kj.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const qj = /([a-z-]*)\(.*?\)/g, Jh = {
  ...uo,
  getAnimatableNone: (e) => {
    const t = e.match(qj);
    return t ? t.map(Yj).join(" ") : e;
  }
}, Xj = {
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
  filter: Jh,
  WebkitFilter: Jh
}, lg = (e) => Xj[e];
function qk(e, t) {
  let n = lg(e);
  return n !== Jh && (n = uo), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Xk = (e) => /^0[^.\s]+$/.test(e);
function Qj(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Xk(e);
}
function Zj(e, t, n, r) {
  const o = Zh(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), Qj(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = qk(t, s);
    }
  return i;
}
function Jj({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function ug(e, t) {
  return e[t] || e.default || e;
}
const cg = (e, t, n, r = {}) => (o) => {
  const i = ug(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - io(a);
  const l = Zj(t, e, n, i), u = l[0], c = l[l.length - 1], d = Zh(e, u), f = Zh(e, c);
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
  if (Jj(i) || (p = {
    ...p,
    ...Gj(e, p)
  }), p.duration && (p.duration = io(p.duration)), p.repeatDelay && (p.repeatDelay = io(p.repeatDelay)), !d || !f || qz.current || i.type === !1)
    return Vj(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = Nj(t, e, p);
    if (g)
      return g;
  }
  return Lc(p);
};
function zc(e) {
  return !!(Bt(e) && e.add);
}
const Qk = (e) => /^\-?\d*\.?\d+$/.test(e);
function dg(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fg(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class pg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return dg(this.subscriptions, t), () => fg(this.subscriptions, t);
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
const eN = (e) => !isNaN(parseFloat(e));
class tN {
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
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, _e.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => _e.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = eN(this.current), this.owner = n.owner;
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
    this.events[t] || (this.events[t] = new pg());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), _e.read(() => {
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
function fa(e, t) {
  return new tN(e, t);
}
const Zk = (e) => (t) => t.test(e), nN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Jk = [ti, ne, er, zr, cz, uz, nN], Wa = (e) => Jk.find(Zk(e)), rN = [...Jk, kt, uo], oN = (e) => rN.find(Zk(e));
function iN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fa(n));
}
function aN(e, t) {
  const n = Hd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = kz(i[a]);
    iN(e, a, s);
  }
}
function sN(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Qk(c) || Xk(c)) ? c = parseFloat(c) : !oN(c) && uo.test(u) && (c = qk(l, u)), e.addValue(l, fa(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function lN(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function uN(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = lN(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function cN({ protectedKeys: e, needsAnimating: t }, n) {
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
    if (!f || p === void 0 || c && cN(c, d))
      continue;
    const g = {
      delay: n,
      elapsed: 0,
      ...ug(i || {}, d)
    };
    let y = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const v = e.getProps()[tk];
      v && (y = !1, g.elapsed = window.HandoffAppearAnimations(v, d, f, _e), g.syncStart = !0);
    }
    let b = y && p === f.get();
    if (g.type === "spring" && (f.getVelocity() || g.velocity) && (b = !1), f.animation && (b = !1), b)
      continue;
    f.start(cg(d, f, p, e.shouldReduceMotion && ei.has(d) ? { type: !1 } : g));
    const h = f.animation;
    zc(l) && (l.add(d), h.then(() => l.remove(d))), u.push(h);
  }
  return a && Promise.all(u).then(() => {
    a && aN(e, a);
  }), u;
}
function em(e, t, n = {}) {
  const r = Hd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(eP(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return dN(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function dN(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(fN).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(em(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function fN(e, t) {
  return e.sortNodePosition(t);
}
function pN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => em(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = em(e, t, n);
  else {
    const o = typeof t == "function" ? Hd(e, t, n.custom) : t;
    r = Promise.all(eP(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const hN = [...Yv].reverse(), mN = Yv.length;
function vN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => pN(e, n, r)));
}
function gN(e) {
  let t = vN(e);
  const n = bN();
  let r = !0;
  const o = (l, u) => {
    const c = Hd(e, u);
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
    let g = {}, y = 1 / 0;
    for (let h = 0; h < mN; h++) {
      const v = hN[h], S = n[v], x = c[v] !== void 0 ? c[v] : d[v], k = Js(x), P = v === u ? S.isActive : null;
      P === !1 && (y = h);
      let E = x === d[v] && x !== c[v] && k;
      if (E && r && e.manuallyAnimateOnMount && (E = !1), S.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !S.prevProp || // Or if the prop doesn't define an animation
      Nd(x) || typeof x == "boolean")
        continue;
      const T = yN(S.prevProp, x);
      let M = T || // If we're making this variant active, we want to always make it active
      v === u && S.isActive && !E && k || // If we removed a higher-priority variant (i is in reverse order)
      h > y && k;
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
        g.hasOwnProperty(W) || (K !== $ ? Ac(K) && Ac($) ? !Ck(K, $) || T ? L(W) : S.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : S.protectedKeys[W] = !0);
      }
      S.prevProp = x, S.prevResolvedValues = D, S.isActive && (g = { ...g, ...D }), r && e.blockInitialAnimation && (M = !1), M && !E && f.push(...I.map((W) => ({
        animation: W,
        options: { type: v, ...l }
      })));
    }
    if (p.size) {
      const h = {};
      p.forEach((v) => {
        const S = e.getBaseTarget(v);
        S !== void 0 && (h[v] = S);
      }), f.push({ animation: h });
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
function yN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ck(t, e) : !1;
}
function So(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function bN() {
  return {
    animate: So(!0),
    whileInView: So(),
    whileHover: So(),
    whileTap: So(),
    whileDrag: So(),
    whileFocus: So(),
    exit: So()
  };
}
class SN extends ho {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = gN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Nd(t) && (this.unmount = t.subscribe(this.node));
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
let xN = 0;
class wN extends ho {
  constructor() {
    super(...arguments), this.id = xN++;
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
const CN = {
  animation: {
    Feature: SN
  },
  exit: {
    Feature: wN
  }
}, Ub = (e, t) => Math.abs(e - t);
function kN(e, t) {
  const n = Ub(e.x, t.x), r = Ub(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class tP {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = xp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = kN(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: g } = ot;
      this.history.push({ ...p, timestamp: g });
      const { onStart: y, onMove: b } = this.handlers;
      d || (y && y(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Sp(d, this.transformPagePoint), _e.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, g = xp(c.type === "pointercancel" ? this.lastMoveEventInfo : Sp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, g), p && p(c, g);
    }, !yk(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Wd(t), a = Sp(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, xp(a, this.history)), this.removeListeners = oo(gr(this.contextWindow, "pointermove", this.handlePointerMove), gr(this.contextWindow, "pointerup", this.handlePointerUp), gr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Er(this.updatePoint);
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
    delta: Gb(e, nP(t)),
    offset: Gb(e, PN(t)),
    velocity: EN(t, 0.1)
  };
}
function PN(e) {
  return e[0];
}
function nP(e) {
  return e[e.length - 1];
}
function EN(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = nP(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > io(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = yr(o.timestamp - r.timestamp);
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
  e.origin = r, e.originPoint = je(t.min, t.max, e.origin), e.scale = Jt(n) / Jt(t), (tm(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = je(n.min, n.max, e.origin) - e.originPoint, (tm(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Cs(e, t, n, r) {
  Kb(e.x, t.x, n.x, r ? r.originX : void 0), Kb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Yb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Jt(t);
}
function TN(e, t, n) {
  Yb(e.x, t.x, n.x), Yb(e.y, t.y, n.y);
}
function qb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Jt(t);
}
function ks(e, t, n) {
  qb(e.x, t.x, n.x), qb(e.y, t.y, n.y);
}
function _N(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? je(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? je(n, e, r.max) : Math.min(e, n)), e;
}
function Xb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function ON(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Xb(e.x, n, o),
    y: Xb(e.y, t, r)
  };
}
function Qb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function MN(e, t) {
  return {
    x: Qb(e.x, t.x),
    y: Qb(e.y, t.y)
  };
}
function IN(e, t) {
  let n = 0.5;
  const r = Jt(e), o = Jt(t);
  return o > r ? n = tl(t.min, t.max - r, e.min) : r > o && (n = tl(e.min, e.max - o, t.min)), lo(0, 1, n);
}
function RN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const nm = 0.35;
function $N(e = nm) {
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
}), Ai = () => ({
  x: e1(),
  y: e1()
}), t1 = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: t1(),
  y: t1()
});
function Wn(e) {
  return [e("x"), e("y")];
}
function rP({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function AN({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function DN(e, t) {
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
function ko(e) {
  return rm(e) || oP(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function oP(e) {
  return n1(e.x) || n1(e.y);
}
function n1(e) {
  return e && e !== "0%";
}
function jc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function r1(e, t, n, r, o) {
  return o !== void 0 && (e = jc(e, o, r)), jc(e, n, r) + t;
}
function om(e, t = 0, n = 1, r, o) {
  e.min = r1(e.min, t, n, r, o), e.max = r1(e.max, t, n, r, o);
}
function iP(e, { x: t, y: n }) {
  om(e.x, t.translate, t.scale, t.originPoint), om(e.y, n.translate, n.scale, n.originPoint);
}
function FN(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Di(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, iP(e, a)), r && ko(i.latestValues) && Di(e, i.latestValues));
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
  const i = t[o] !== void 0 ? t[o] : 0.5, a = je(e.min, e.max, i);
  om(e, t[n], t[r], a, t.scale);
}
const LN = ["x", "scaleX", "originX"], zN = ["y", "scaleY", "originY"];
function Di(e, t) {
  i1(e.x, t, LN), i1(e.y, t, zN);
}
function aP(e, t) {
  return rP(DN(e.getBoundingClientRect(), t));
}
function jN(e, t, n) {
  const r = aP(e, n), { scroll: o } = t;
  return o && (Vr(r.x, o.offset.x), Vr(r.y, o.offset.y)), r;
}
const sP = ({ current: e }) => e ? e.ownerDocument.defaultView : null, NN = /* @__PURE__ */ new WeakMap();
class VN {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Wd(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Sk(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Wn((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (er.test(y)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const h = b.layout.layoutBox[g];
            h && (y = Jt(h) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), f && _e.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: g } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = BN(g), this.currentDirection !== null && f && f(this.currentDirection);
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
    i && _e.update(() => i(t, n));
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
    if (!r || !cu(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = _N(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Ri(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = ON(o.layoutBox, n) : this.constraints = !1, this.elastic = $N(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Wn((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = RN(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ri(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = jN(r, o.root, this.visualElement.getTransformPagePoint());
    let a = MN(o.layout.layoutBox, i);
    if (n) {
      const s = n(AN(a));
      this.hasMutatedConstraints = !!s, s && (a = rP(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Wn((c) => {
      if (!cu(c, n, this.currentDirection))
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
    return r.start(cg(t, r, 0, n));
  }
  stopAnimation() {
    Wn((t) => this.getAxisMotionValue(t).stop());
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
    Wn((n) => {
      const { drag: r } = this.getProps();
      if (!cu(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - je(a, s, 0.5));
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
    if (!Ri(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Wn((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = IN({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Wn((a) => {
      if (!cu(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(je(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    NN.set(this.visualElement, this);
    const t = this.visualElement.current, n = gr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ri(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = hr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Wn((c) => {
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
function cu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function BN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class WN extends ho {
  constructor(t) {
    super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new VN(t);
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
  e && _e.update(() => e(t, n));
};
class HN extends ho {
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
      onSessionStart: a1(t),
      onStart: a1(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && _e.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = gr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function lP() {
  const e = m.useContext(gl);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = m.useId();
  return m.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function UN() {
  return GN(m.useContext(gl));
}
function GN(e) {
  return e === null ? !0 : e.isPresent;
}
const Yu = {
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
const Ha = {
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
}, KN = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = uo.parse(e);
    if (o.length > 5)
      return r;
    const i = uo.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = je(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class YN extends re.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    nz(qN), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Yu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || _e.postRender(() => {
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
  const [t, n] = lP(), r = m.useContext(Xv);
  return re.createElement(YN, { ...e, layoutGroup: r, switchLayoutGroup: m.useContext(rk), isPresent: t, safeToRemove: n });
}
const qN = {
  borderRadius: {
    ...Ha,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ha,
  borderTopRightRadius: Ha,
  borderBottomLeftRadius: Ha,
  borderBottomRightRadius: Ha,
  boxShadow: KN
}, cP = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], XN = cP.length, l1 = (e) => typeof e == "string" ? parseFloat(e) : e, u1 = (e) => typeof e == "number" || ne.test(e);
function QN(e, t, n, r, o, i) {
  o ? (e.opacity = je(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    ZN(r)
  ), e.opacityExit = je(t.opacity !== void 0 ? t.opacity : 1, 0, JN(r))) : i && (e.opacity = je(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < XN; a++) {
    const s = `border${cP[a]}Radius`;
    let l = c1(t, s), u = c1(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || u1(l) === u1(u) ? (e[s] = Math.max(je(l1(l), l1(u), r), 0), (er.test(u) || er.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = je(t.rotate || 0, n.rotate || 0, r));
}
function c1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ZN = dP(0, 0.5, ig), JN = dP(0.5, 0.95, He);
function dP(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(tl(e, t, r));
}
function d1(e, t) {
  e.min = t.min, e.max = t.max;
}
function cn(e, t) {
  d1(e.x, t.x), d1(e.y, t.y);
}
function f1(e, t, n, r, o) {
  return e -= t, e = jc(e, 1 / n, r), o !== void 0 && (e = jc(e, 1 / o, r)), e;
}
function eV(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (er.test(t) && (t = parseFloat(t), t = je(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = je(i.min, i.max, r);
  e === i && (s -= t), e.min = f1(e.min, t, n, s, o), e.max = f1(e.max, t, n, s, o);
}
function p1(e, t, [n, r, o], i, a) {
  eV(e, t[n], t[r], t[o], t.scale, i, a);
}
const tV = ["x", "scaleX", "originX"], nV = ["y", "scaleY", "originY"];
function h1(e, t, n, r) {
  p1(e.x, t, tV, n ? n.x : void 0, r ? r.x : void 0), p1(e.y, t, nV, n ? n.y : void 0, r ? r.y : void 0);
}
function m1(e) {
  return e.translate === 0 && e.scale === 1;
}
function fP(e) {
  return m1(e.x) && m1(e.y);
}
function rV(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function pP(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function v1(e) {
  return Jt(e.x) / Jt(e.y);
}
class oV {
  constructor() {
    this.members = [];
  }
  add(t) {
    dg(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (fg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
const iV = (e, t) => e.depth - t.depth;
class aV {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    dg(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    fg(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(iV), this.isDirty = !1, this.children.forEach(t);
  }
}
function sV(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Er(r), e(i - t));
  };
  return _e.read(r, !0), () => Er(r);
}
function lV(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function uV(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function cV(e, t, n) {
  const r = Bt(e) ? e : fa(e);
  return r.start(cg("", r, t, n)), r.animation;
}
const y1 = ["", "X", "Y", "Z"], dV = { visibility: "hidden" }, b1 = 1e3;
let fV = 0;
const Po = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function hP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = fV++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Po.totalNodes = Po.resolvedTargetDeltas = Po.recalculatedProjection = 0, this.nodes.forEach(mV), this.nodes.forEach(SV), this.nodes.forEach(xV), this.nodes.forEach(vV), lV(Po);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new aV());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new pg()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = uV(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = sV(f, 250), Yu.hasAnimatedSinceResize && (Yu.hasAnimatedSinceResize = !1, this.nodes.forEach(x1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || EV, { onLayoutAnimationStart: b, onLayoutAnimationComplete: h } = c.getProps(), v = !this.targetLayout || !pP(this.targetLayout, g) || p, S = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || f && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, S);
          const x = {
            ...ug(y, "layout"),
            onPlay: b,
            onComplete: h
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || x1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Er(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(wV), this.animationId++);
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
      this.isUpdating || this.nodes.forEach(yV), this.isUpdating = !1, this.nodes.forEach(bV), this.nodes.forEach(pV), this.nodes.forEach(hV), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = lo(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, fp.update.process(ot), fp.preRender.process(ot), fp.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(gV), this.sharedNodes.forEach(CV);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, _e.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _e.postRender(() => {
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
      a && (s || ko(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), TV(l), {
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
      cn(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            cn(s, a);
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
      cn(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Di(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), ko(c.latestValues) && Di(l, c.latestValues);
      }
      return ko(this.latestValues) && Di(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Xe();
      cn(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ko(u.latestValues))
          continue;
        rm(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        cn(c, d), h1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ko(this.latestValues) && h1(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), ks(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), cn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), TN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : cn(this.target, this.layout.layoutBox), iP(this.target, this.targetDelta)) : cn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), ks(this.relativeTargetOrigin, this.target, p.target), cn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Po.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || rm(this.parent.latestValues) || oP(this.parent.latestValues)))
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
      cn(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      FN(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = Ai(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Ai(), this.projectionDeltaWithTransform = Ai());
      const y = this.projectionTransform;
      Cs(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = g1(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Po.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Ai();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Xe(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, b = this.getStack(), h = !b || b.members.length <= 1, v = !!(y && !h && this.options.crossfade === !0 && !this.path.some(PV));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (x) => {
        const k = x / 1e3;
        w1(d.x, a.x, k), w1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ks(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), kV(this.relativeTarget, this.relativeTargetOrigin, f, k), S && rV(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = Xe()), cn(S, this.relativeTarget)), y && (this.animationValues = c, QN(c, u, this.latestValues, k, v, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Er(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _e.update(() => {
        Yu.hasAnimatedSinceResize = !0, this.currentAnimation = cV(0, b1, {
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
        if (this !== a && this.layout && u && mP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        cn(s, l), Di(s, c), Cs(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new oV()), this.sharedNodes.get(a).add(s);
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
        return dV;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ku(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Ku(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !ko(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = g1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in Rc) {
        if (f[y] === void 0)
          continue;
        const { correct: b, applyTo: h } = Rc[y], v = u.transform === "none" ? f[y] : b(f[y], d);
        if (h) {
          const S = h.length;
          for (let x = 0; x < S; x++)
            u[h[x]] = v;
        } else
          u[y] = v;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Ku(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
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
function pV(e) {
  e.updateLayout();
}
function hV(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Wn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : mP(i, n.layoutBox, r) && Wn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Ai();
    Cs(s, r, n.layoutBox);
    const l = Ai();
    a ? Cs(l, e.applyTransform(o, !0), n.measuredBox) : Cs(l, r, n.layoutBox);
    const u = !fP(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = Xe();
          ks(g, n.layoutBox, f.layoutBox);
          const y = Xe();
          ks(y, r, p.layoutBox), pP(g, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = d);
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
function mV(e) {
  Po.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function vV(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function gV(e) {
  e.clearSnapshot();
}
function S1(e) {
  e.clearMeasurements();
}
function yV(e) {
  e.isLayoutDirty = !1;
}
function bV(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function x1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function SV(e) {
  e.resolveTargetDelta();
}
function xV(e) {
  e.calcProjection();
}
function wV(e) {
  e.resetRotation();
}
function CV(e) {
  e.removeLeadSnapshot();
}
function w1(e, t, n) {
  e.translate = je(t.translate, 0, n), e.scale = je(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function C1(e, t, n, r) {
  e.min = je(t.min, n.min, r), e.max = je(t.max, n.max, r);
}
function kV(e, t, n, r) {
  C1(e.x, t.x, n.x, r), C1(e.y, t.y, n.y, r);
}
function PV(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const EV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, k1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), P1 = k1("applewebkit/") && !k1("chrome/") ? Math.round : He;
function E1(e) {
  e.min = P1(e.min), e.max = P1(e.max);
}
function TV(e) {
  E1(e.x), E1(e.y);
}
function mP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !tm(v1(t), v1(n), 0.2);
}
const _V = hP({
  attachResizeListener: (e, t) => hr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Cp = {
  current: void 0
}, vP = hP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Cp.current) {
      const e = new _V({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Cp.current = e;
    }
    return Cp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), OV = {
  pan: {
    Feature: HN
  },
  drag: {
    Feature: WN,
    ProjectionNode: vP,
    MeasureLayout: uP
  }
}, MV = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function IV(e) {
  const t = MV.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function im(e, t, n = 1) {
  const [r, o] = IV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Qk(a) ? parseFloat(a) : a;
  } else
    return Yh(o) ? im(o, t, n + 1) : o;
}
function RV(e, { ...t }, n) {
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
const $V = /* @__PURE__ */ new Set([
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
]), gP = (e) => $V.has(e), AV = (e) => Object.keys(e).some(gP), T1 = (e) => e === ti || e === ne, _1 = (e, t) => parseFloat(e.split(", ")[t]), O1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return _1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? _1(i[1], e) : 0;
  }
}, DV = /* @__PURE__ */ new Set(["x", "y", "z"]), FV = yl.filter((e) => !DV.has(e));
function LV(e) {
  const t = [];
  return FV.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const pa = {
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
pa.translateX = pa.x;
pa.translateY = pa.y;
const zV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = pa[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = pa[u](l, i);
  }), e;
}, jV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(gP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = Wa(c);
    const f = t[l];
    let p;
    if (Ac(f)) {
      const g = f.length, y = f[0] === null ? 1 : 0;
      c = f[y], d = Wa(c);
      for (let b = y; b < g && f[b] !== null; b++)
        p ? og(Wa(f[b]) === p) : p = Wa(f[b]);
    } else
      p = Wa(f);
    if (d !== p)
      if (T1(d) && T1(p)) {
        const g = u.get();
        typeof g == "string" && u.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = LV(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = zV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), jd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function NV(e, t, n, r) {
  return AV(t) ? jV(e, t, n, r) : { target: t, transitionEnd: r };
}
const VV = (e, t, n, r) => {
  const o = RV(e, t, r);
  return t = o.target, r = o.transitionEnd, NV(e, t, n, r);
}, am = { current: null }, yP = { current: !1 };
function BV() {
  if (yP.current = !0, !!jd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => am.current = e.matches;
      e.addListener(t), t();
    } else
      am.current = !1;
}
function WV(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Bt(i))
      e.addValue(o, i), zc(r) && r.add(o);
    else if (Bt(a))
      e.addValue(o, fa(i, { owner: e })), zc(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, fa(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const M1 = /* @__PURE__ */ new WeakMap(), bP = Object.keys(el), HV = bP.length, I1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], UV = qv.length;
class GV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => _e.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Vd(n), this.isVariantNode = nk(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), zc(u) && u.add(d));
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
    this.current = t, M1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), yP.current || BV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : am.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    M1.delete(this.current), this.projection && this.projection.unmount(), Er(this.notifyUpdate), Er(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = ei.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && _e.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let l = 0; l < HV; l++) {
      const u = bP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = el[u];
      f && (a = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Ri(d),
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
    this.prevMotionValues = WV(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < UV; r++) {
      const o = qv[r], i = this.props[o];
      (Js(i) || i === !1) && (n[o] = i);
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
    return r === void 0 && n !== void 0 && (r = fa(n, { owner: this }), this.addValue(t, r)), r;
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = rg(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new pg()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class SP extends GV {
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
    let a = uN(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      sN(this, r, a);
      const s = VV(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function KV(e) {
  return window.getComputedStyle(e);
}
class YV extends SP {
  readValueFromInstance(t, n) {
    if (ei.has(n)) {
      const r = lg(n);
      return r && r.default || 0;
    } else {
      const r = KV(t), o = (ak(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return aP(t, n);
  }
  build(t, n, r, o) {
    Zv(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return ng(t, n);
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
class qV extends SP {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ei.has(n)) {
      const r = lg(n);
      return r && r.default || 0;
    }
    return n = pk.has(n) ? n : Kv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return mk(t, n);
  }
  build(t, n, r, o) {
    eg(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    hk(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = tg(t.tagName), super.mount(t);
  }
}
const XV = (e, t) => Qv(e) ? new qV(t, { enableHardwareAcceleration: !1 }) : new YV(t, { enableHardwareAcceleration: !0 }), QV = {
  layout: {
    ProjectionNode: vP,
    MeasureLayout: uP
  }
}, ZV = {
  ...CN,
  ...Uz,
  ...OV,
  ...QV
}, Or = /* @__PURE__ */ ez((e, t) => Rz(e, t, ZV, XV));
function xP() {
  const e = m.useRef(!1);
  return Gv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function JV() {
  const e = xP(), [t, n] = m.useState(0), r = m.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [m.useCallback(() => _e.postRender(r), [r]), t];
}
class eB extends m.Component {
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
function tB({ children: e, isPresent: t }) {
  const n = m.useId(), r = m.useRef(null), o = m.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return m.useInsertionEffect(() => {
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
  }, [t]), m.createElement(eB, { isPresent: t, childRef: r, sizeRef: o }, m.cloneElement(e, { ref: r }));
}
const kp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = vk(nB), l = m.useId(), u = m.useMemo(
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
  return m.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [n]), m.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = m.createElement(tB, { isPresent: n }, e)), m.createElement(gl.Provider, { value: u }, e);
};
function nB() {
  return /* @__PURE__ */ new Map();
}
function rB(e) {
  return m.useEffect(() => () => e(), []);
}
const Eo = (e) => e.key || "";
function oB(e, t) {
  e.forEach((n) => {
    const r = Eo(n);
    t.set(r, n);
  });
}
function iB(e) {
  const t = [];
  return m.Children.forEach(e, (n) => {
    m.isValidElement(n) && t.push(n);
  }), t;
}
const Pa = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = m.useContext(Xv).forceRender || JV()[0], l = xP(), u = iB(e);
  let c = u;
  const d = m.useRef(/* @__PURE__ */ new Map()).current, f = m.useRef(c), p = m.useRef(/* @__PURE__ */ new Map()).current, g = m.useRef(!0);
  if (Gv(() => {
    g.current = !1, oB(u, p), f.current = c;
  }), rB(() => {
    g.current = !0, p.clear(), d.clear();
  }), g.current)
    return m.createElement(m.Fragment, null, c.map((v) => m.createElement(kp, { key: Eo(v), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, v)));
  c = [...c];
  const y = f.current.map(Eo), b = u.map(Eo), h = y.length;
  for (let v = 0; v < h; v++) {
    const S = y[v];
    b.indexOf(S) === -1 && !d.has(S) && d.set(S, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((v, S) => {
    if (b.indexOf(S) !== -1)
      return;
    const x = p.get(S);
    if (!x)
      return;
    const k = y.indexOf(S);
    let P = v;
    if (!P) {
      const E = () => {
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
      P = m.createElement(kp, { key: Eo(x), isPresent: !1, onExitComplete: E, custom: t, presenceAffectsLayout: i, mode: a }, x), d.set(S, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((v) => {
    const S = v.key;
    return d.has(S) ? v : m.createElement(kp, { key: Eo(v), isPresent: !0, presenceAffectsLayout: i, mode: a }, v);
  }), m.createElement(m.Fragment, null, d.size ? c : c.map((v) => m.cloneElement(v)));
};
var aB = {
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
}, wP = m.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = aB,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = m.useState(s), p = UN();
  da(() => {
    p || r == null || r();
  }, [p]), da(() => {
    f(s);
  }, [s]);
  const g = () => f(null), y = () => f(s), b = () => {
    p && o();
  };
  m.useEffect(() => {
    p && i && o();
  }, [p, i, o]), H3(b, d);
  const h = m.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), v = m.useMemo(() => B3(a), [a]);
  return /* @__PURE__ */ w.jsx(
    Or.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: g,
      onHoverEnd: y,
      custom: { position: a },
      style: v,
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: h,
          children: qn(n, { id: t, onClose: b })
        }
      )
    }
  );
});
wP.displayName = "ToastComponent";
var R1 = {
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
  } = e, c = ie("chakra-icon", s), d = Jo("Icon", e), f = {
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
  }, g = r ?? R1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ w.jsx(X.svg, { as: n, ...p, ...u });
  const y = a ?? R1.path;
  return /* @__PURE__ */ w.jsx(X.svg, { verticalAlign: "middle", viewBox: g, ...p, ...u, children: y });
});
Pn.displayName = "Icon";
function sB(e) {
  return /* @__PURE__ */ w.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function lB(e) {
  return /* @__PURE__ */ w.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function $1(e) {
  return /* @__PURE__ */ w.jsx(Pn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var uB = vC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Ud = oe((e, t) => {
  const n = Jo("Spinner", e), {
    label: r = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = on(e), u = ie("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${uB} ${i} linear infinite`,
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
Ud.displayName = "Spinner";
var [cB, hg] = nt({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [dB, mg] = nt({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), CP = {
  info: { icon: lB, colorScheme: "blue" },
  warning: { icon: $1, colorScheme: "orange" },
  success: { icon: sB, colorScheme: "green" },
  error: { icon: $1, colorScheme: "red" },
  loading: { icon: Ud, colorScheme: "blue" }
};
function fB(e) {
  return CP[e].colorScheme;
}
function pB(e) {
  return CP[e].icon;
}
var kP = oe(
  function(t, n) {
    const r = mg(), { status: o } = hg(), i = {
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
  const { status: t } = hg(), n = pB(t), r = mg(), o = t === "loading" ? r.spinner : r.icon;
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
var EP = oe(
  function(t, n) {
    const r = mg(), { status: o } = hg();
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
EP.displayName = "AlertTitle";
var TP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = on(t), s = (r = t.colorScheme) != null ? r : fB(o), l = mt("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ w.jsx(cB, { value: { status: o }, children: /* @__PURE__ */ w.jsx(dB, { value: l, children: /* @__PURE__ */ w.jsx(
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
function hB(e) {
  return /* @__PURE__ */ w.jsx(Pn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Gd = oe(
  function(t, n) {
    const r = Jo("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = on(t), l = {
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
        children: o || /* @__PURE__ */ w.jsx(hB, { width: "1em", height: "1em" })
      }
    );
  }
);
Gd.displayName = "CloseButton";
var mB = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Ps = vB(mB);
function vB(e) {
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
      const a = gB(o, i), { position: s, id: l } = a;
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
          message: bB(i)
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
    isActive: (o) => !!Tb(Ps.getState(), o).position
  };
}
var A1 = 0;
function gB(e, t = {}) {
  var n, r;
  A1 += 1;
  const o = (n = t.id) != null ? n : A1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Ps.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var yB = (e) => {
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
          o && /* @__PURE__ */ w.jsx(EP, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ w.jsx(kP, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ w.jsx(
          Gd,
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
function bB(e = {}) {
  const { render: t, toastComponent: n = yB } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ w.jsx(n, { ...o, ...e });
}
var [SB, PY] = nt({
  name: "ToastOptionsContext",
  strict: !1
}), xB = (e) => {
  const t = m.useSyncExternalStore(
    Ps.subscribe,
    Ps.getState,
    Ps.getState
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
        style: W3(s),
        children: /* @__PURE__ */ w.jsx(Pa, { initial: !1, children: l.map((u) => /* @__PURE__ */ w.jsx(
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
  return /* @__PURE__ */ w.jsx(hl, { ...o, children: a });
}, wB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ w.jsxs(N3, { theme: r, ...i, children: [
    /* @__PURE__ */ w.jsx(SB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ w.jsx(xB, { ...o })
  ] });
}, CB = wB(WC), kB = Object.defineProperty, PB = (e, t, n) => t in e ? kB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (PB(e, typeof t != "symbol" ? t + "" : t, n), n);
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
var EB = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function F1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function L1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var sm = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Nc = (e) => e, TB = class {
  constructor() {
    Be(this, "descendants", /* @__PURE__ */ new Map()), Be(this, "register", (e) => {
      if (e != null)
        return EB(e) ? this.registerNode(e) : (t) => {
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
function _B(e, t) {
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
      _B(n, t);
    });
  };
}
function OB(...e) {
  return m.useMemo(() => at(...e), e);
}
function MB() {
  const e = m.useRef(new TB());
  return sm(() => () => e.current.destroy()), e.current;
}
var [IB, _P] = nt({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function RB(e) {
  const t = _P(), [n, r] = m.useState(-1), o = m.useRef(null);
  sm(() => () => {
    o.current && t.unregister(o.current);
  }, []), sm(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Nc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function OP() {
  return [
    Nc(IB),
    () => Nc(_P()),
    () => MB(),
    (o) => RB(o)
  ];
}
var [$B, Kd] = nt({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [AB, vg] = nt({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  DB,
  EY,
  FB,
  LB
] = OP(), MP = oe(
  function(t, n) {
    const { getButtonProps: r } = vg(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...Kd().button
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
  } = e, i = ro(r), a = ro(o), [s, l] = m.useState(n), u = t !== void 0, c = u ? t : s, d = ro(
    (f) => {
      const g = typeof f == "function" ? f(c) : f;
      a(c, g) && (u || l(g), i(g));
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
  VB(e), BB(e);
  const s = FB(), [l, u] = m.useState(-1);
  m.useEffect(() => () => {
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
            const h = b ? c.concat(p) : c.filter((v) => v !== p);
            d(h);
          } else
            b ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [jB, gg] = nt({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function NB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = gg(), s = m.useRef(null), l = m.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  WB(e);
  const { register: f, index: p, descendants: g } = LB({
    disabled: t && !n
  }), { isOpen: y, onChange: b } = i(
    p === -1 ? null : p
  );
  HB({ isOpen: y, isDisabled: t });
  const h = () => {
    b == null || b(!0);
  }, v = () => {
    b == null || b(!1);
  }, S = m.useCallback(() => {
    b == null || b(!y), a(p);
  }, [p, a, y, b]), x = m.useCallback(
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
  ), k = m.useCallback(() => {
    a(p);
  }, [a, p]), P = m.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        type: "button",
        ref: at(f, s, I),
        id: c,
        disabled: !!t,
        "aria-expanded": !!y,
        "aria-controls": d,
        onClick: Le(M.onClick, S),
        onFocus: Le(M.onFocus, k),
        onKeyDown: Le(M.onKeyDown, x)
      };
    },
    [
      c,
      t,
      y,
      S,
      k,
      x,
      d,
      f
    ]
  ), E = m.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        ref: I,
        role: "region",
        id: d,
        "aria-labelledby": c,
        hidden: !y
      };
    },
    [c, y, d]
  );
  return {
    isOpen: y,
    isDisabled: t,
    isFocusable: n,
    onOpen: h,
    onClose: v,
    getButtonProps: P,
    getPanelProps: E,
    htmlProps: o
  };
}
function VB(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  ml({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function BB(e) {
  ml({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function WB(e) {
  ml({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function HB(e) {
  ml({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function RP(e) {
  const { isOpen: t, isDisabled: n } = vg(), { reduceMotion: r } = gg(), o = ie("chakra-accordion__icon", e.className), i = Kd(), a = {
    opacity: n ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: r ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...i.icon
  };
  return /* @__PURE__ */ w.jsx(
    Pn,
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
    const { children: r, className: o } = t, { htmlProps: i, ...a } = NB(t), l = {
      ...Kd().container,
      overflowAnchor: "none"
    }, u = m.useMemo(() => a, [a]);
    return /* @__PURE__ */ w.jsx(AB, { value: u, children: /* @__PURE__ */ w.jsx(
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
var Fi = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, No = {
  enter: {
    duration: 0.2,
    ease: Fi.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Fi.easeIn
  }
}, br = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, UB = (e) => e != null && parseInt(e.toString(), 10) > 0, z1 = {
  exit: {
    height: { duration: 0.2, ease: Fi.ease },
    opacity: { duration: 0.3, ease: Fi.ease }
  },
  enter: {
    height: { duration: 0.3, ease: Fi.ease },
    opacity: { duration: 0.4, ease: Fi.ease }
  }
}, GB = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: UB(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : br.exit(z1.exit, o)
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
      transition: (i = n == null ? void 0 : n.enter) != null ? i : br.enter(z1.enter, o)
    };
  }
}, AP = m.forwardRef(
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
    } = e, [f, p] = m.useState(!1);
    m.useEffect(() => {
      const v = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(v);
    }, []), ml({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const g = parseFloat(i.toString()) > 0, y = {
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
    }, b = r ? n : !0, h = n || r ? "enter" : "exit";
    return /* @__PURE__ */ w.jsx(Pa, { initial: !1, custom: y, children: b && /* @__PURE__ */ w.jsx(
      Or.div,
      {
        ref: t,
        ...d,
        className: ie("chakra-collapse", l),
        style: {
          overflow: "hidden",
          display: "block",
          ...s
        },
        custom: y,
        variants: GB,
        initial: r ? "exit" : !1,
        animate: h,
        exit: "exit"
      }
    ) });
  }
);
AP.displayName = "Collapse";
var KB = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : br.enter(No.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : br.exit(No.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, DP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: KB
}, YB = m.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ w.jsx(Pa, { custom: f, children: d && /* @__PURE__ */ w.jsx(
    Or.div,
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
YB.displayName = "Fade";
var qB = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : br.exit(No.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : br.enter(No.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, FP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: qB
}, XB = m.forwardRef(
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
    return /* @__PURE__ */ w.jsx(Pa, { custom: g, children: f && /* @__PURE__ */ w.jsx(
      Or.div,
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
XB.displayName = "ScaleFade";
var QB = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : br.exit(No.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : br.enter(No.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : br.exit(No.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, os = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: QB
}, ZB = m.forwardRef(
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
    } = t, p = r ? o && r : !0, g = o || r ? "enter" : "exit", y = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ w.jsx(Pa, { custom: y, children: p && /* @__PURE__ */ w.jsx(
      Or.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", a),
        custom: y,
        ...os,
        animate: g,
        ...f
      }
    ) });
  }
);
ZB.displayName = "SlideFade";
var LP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = gg(), { getPanelProps: s, isOpen: l } = vg(), u = s(i, n), c = ie("chakra-accordion__panel", r), d = Kd();
    a || delete u.hidden;
    const f = /* @__PURE__ */ w.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ w.jsx(AP, { in: l, ...o, children: f });
  }
);
LP.displayName = "AccordionPanel";
var zP = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = mt("Accordion", r), a = on(r), { htmlProps: s, descendants: l, ...u } = zB(a), c = m.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ w.jsx(DB, { value: l, children: /* @__PURE__ */ w.jsx(jB, { value: c, children: /* @__PURE__ */ w.jsx($B, { value: i, children: /* @__PURE__ */ w.jsx(
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
function jP(e) {
  return m.Children.toArray(e).filter(
    (t) => m.isValidElement(t)
  );
}
var [TY, JB] = nt({
  strict: !1,
  name: "ButtonGroupContext"
});
function e6(e) {
  const [t, n] = m.useState(!e);
  return { ref: m.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function lm(e) {
  const { children: t, className: n, ...r } = e, o = m.isValidElement(t) ? m.cloneElement(t, {
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
lm.displayName = "ButtonIcon";
function um(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ w.jsx(Ud, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ie("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = m.useMemo(
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
um.displayName = "ButtonSpinner";
var yn = oe((e, t) => {
  const n = JB(), r = Jo("Button", { ...n, ...e }), {
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
    className: y,
    as: b,
    ...h
  } = on(e), v = m.useMemo(() => {
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
  }, [r, n]), { ref: S, type: x } = e6(b), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ w.jsxs(
    X.button,
    {
      ref: OB(t, S),
      as: b,
      type: f ?? x,
      "data-active": fn(a),
      "data-loading": fn(i),
      __css: v,
      className: ie("chakra-button", y),
      ...h,
      disabled: o || i,
      children: [
        i && g === "start" && /* @__PURE__ */ w.jsx(
          um,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ w.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ w.jsx(j1, { ...k }) }) : /* @__PURE__ */ w.jsx(j1, { ...k }),
        i && g === "end" && /* @__PURE__ */ w.jsx(
          um,
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
yn.displayName = "Button";
function j1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    t && /* @__PURE__ */ w.jsx(lm, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ w.jsx(lm, { marginStart: o, children: n })
  ] });
}
var nl = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = m.isValidElement(s) ? m.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ w.jsx(
      yn,
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
nl.displayName = "IconButton";
var [t6, _Y] = L3("Card"), N1 = oe(function(t, n) {
  const {
    className: r,
    children: o,
    direction: i = "column",
    justify: a,
    align: s,
    ...l
  } = on(t), u = mt("Card", t);
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: n,
      className: ie("chakra-card", r),
      __css: {
        display: "flex",
        flexDirection: i,
        justifyContent: a,
        alignItems: s,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...u.container
      },
      ...l,
      children: /* @__PURE__ */ w.jsx(t6, { value: u, children: o })
    }
  );
}), [n6, r6] = nt({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [o6, NP] = nt({
  strict: !1,
  name: "FormControlContext"
});
function i6(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = m.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = m.useState(!1), [g, y] = m.useState(!1), [b, h] = m.useState(!1), v = m.useCallback(
    (E = {}, T = null) => ({
      id: d,
      ...E,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(T, (M) => {
        M && y(!0);
      })
    }),
    [d]
  ), S = m.useCallback(
    (E = {}, T = null) => ({
      ...E,
      ref: T,
      "data-focus": fn(b),
      "data-disabled": fn(o),
      "data-invalid": fn(r),
      "data-readonly": fn(i),
      id: E.id !== void 0 ? E.id : u,
      htmlFor: E.htmlFor !== void 0 ? E.htmlFor : l
    }),
    [l, o, b, r, i, u]
  ), x = m.useCallback(
    (E = {}, T = null) => ({
      id: c,
      ...E,
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
  ), k = m.useCallback(
    (E = {}, T = null) => ({
      ...E,
      ...a,
      ref: T,
      role: "group",
      "data-focus": fn(b),
      "data-disabled": fn(o),
      "data-invalid": fn(r),
      "data-readonly": fn(i)
    }),
    [a, o, b, r, i]
  ), P = m.useCallback(
    (E = {}, T = null) => ({
      ...E,
      ref: T,
      role: "presentation",
      "aria-hidden": !0,
      children: E.children || "*"
    }),
    []
  );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!b,
    onFocus: () => h(!0),
    onBlur: () => h(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: g,
    setHasHelpText: y,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: v,
    getErrorMessageProps: x,
    getRootProps: k,
    getLabelProps: S,
    getRequiredIndicatorProps: P
  };
}
var a6 = oe(
  function(t, n) {
    const r = mt("Form", t), o = on(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = i6(o), l = ie("chakra-form-control", t.className);
    return /* @__PURE__ */ w.jsx(o6, { value: s, children: /* @__PURE__ */ w.jsx(n6, { value: r, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
a6.displayName = "FormControl";
var s6 = oe(
  function(t, n) {
    const r = NP(), o = r6(), i = ie("chakra-form__helper-text", t.className);
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
s6.displayName = "FormHelperText";
function VP(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = l6(e);
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
function l6(e) {
  var t, n, r;
  const o = NP(), {
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
    ...y
  } = e, b = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && b.push(o.feedbackId), o != null && o.hasHelpText && b.push(o.helpTextId), {
    ...y,
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
function yg(e, t, n, r) {
  const o = ro(n);
  return m.useEffect(() => {
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
function u6(e) {
  return "current" in e;
}
var BP = () => typeof window < "u";
function c6() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var d6 = (e) => BP() && e.test(navigator.vendor), f6 = (e) => BP() && e.test(c6()), p6 = () => f6(/mac|iphone|ipad|ipod/i), h6 = () => p6() && d6(/apple/i);
function m6(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  yg(o, "pointerdown", (i) => {
    if (!h6() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = u6(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function WP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var HP = { exports: {} }, v6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", g6 = v6, y6 = g6;
function UP() {
}
function GP() {
}
GP.resetWarningCache = UP;
var b6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== y6) {
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
    checkPropTypes: GP,
    resetWarningCache: UP
  };
  return n.PropTypes = n, n;
};
HP.exports = b6();
var S6 = HP.exports;
const xo = /* @__PURE__ */ sl(S6);
var cm = "data-focus-lock", KP = "data-focus-lock-disabled", x6 = "data-no-focus-lock", w6 = "data-autofocus-inside", C6 = "data-no-autofocus";
function k6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function P6(e, t) {
  var n = m.useState(function() {
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
function YP(e, t) {
  return P6(t || null, function(n) {
    return e.forEach(function(r) {
      return k6(r, n);
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
}, Yn = function() {
  return Yn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Yn.apply(this, arguments);
};
function qP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function E6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function XP(e) {
  return e;
}
function QP(e, t) {
  t === void 0 && (t = XP);
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
function bg(e, t) {
  return t === void 0 && (t = XP), QP(e, t);
}
function ZP(e) {
  e === void 0 && (e = {});
  var t = QP(null);
  return t.options = Yn({ async: !0, ssr: !1 }, e), t;
}
var JP = function(e) {
  var t = e.sideCar, n = qP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, Yn({}, n));
};
JP.isSideCarExport = !0;
function T6(e, t) {
  return e.useMedium(t), JP;
}
var e2 = bg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), t2 = bg(), _6 = bg(), O6 = ZP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), M6 = [], Sg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, o = m.useState(), i = o[0], a = o[1], s = m.useRef(), l = m.useRef(!1), u = m.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus;
  t.allowTextSelection;
  var b = t.group, h = t.className, v = t.whiteList, S = t.hasPositiveIndices, x = t.shards, k = x === void 0 ? M6 : x, P = t.as, E = P === void 0 ? "div" : P, T = t.lockProps, M = T === void 0 ? {} : T, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = m.useState({}), K = W[0], $ = m.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && H && H(s.current), l.current = !0;
  }, [H]), A = m.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  m.useEffect(function() {
    d || (u.current = null);
  }, []);
  var z = m.useCallback(function(se) {
    var me = u.current;
    if (me && me.focus) {
      var ke = typeof D == "function" ? D(me) : D;
      if (ke) {
        var Je = typeof ke == "object" ? ke : void 0;
        u.current = null, se ? Promise.resolve().then(function() {
          return me.focus(Je);
        }) : me.focus(Je);
      }
    }
  }, [D]), U = m.useCallback(function(se) {
    l.current && e2.useMedium(se);
  }, []), V = t2.useMedium, Y = m.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), j = q((r = {}, r[KP] = d && "disabled", r[cm] = b, r), M), te = f !== !0, le = te && f !== "tail", ae = YP([n, Y]);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ m.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: Pp
    }),
    // first tabbed element guard
    S ? /* @__PURE__ */ m.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: Pp
    }) : null
  ], !d && /* @__PURE__ */ m.createElement(I, {
    id: K,
    sideCar: O6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: v,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: z,
    focusOptions: G
  }), /* @__PURE__ */ m.createElement(E, q({
    ref: ae
  }, j, {
    className: h,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ m.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: Pp
  }));
});
Sg.propTypes = {};
Sg.defaultProps = {
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
const n2 = Sg;
function Vc(e, t) {
  return Vc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Vc(e, t);
}
function I6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vc(e, t);
}
function Ko(e) {
  "@babel/helpers - typeof";
  return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ko(e);
}
function R6(e, t) {
  if (Ko(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ko(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function r2(e) {
  var t = R6(e, "string");
  return Ko(t) === "symbol" ? t : String(t);
}
function Li(e, t, n) {
  return t = r2(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function $6(e, t) {
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
      I6(c, u);
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
    }(m.PureComponent);
    return Li(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var or = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Bc = function(e) {
  return Array.isArray(e) ? e : [e];
}, o2 = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, A6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, i2 = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, a2 = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, D6 = function(e, t) {
  return !e || a2(e) || !A6(e) && t(i2(e));
}, s2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = D6(t, s2.bind(void 0, e));
  return e.set(t, r), r;
}, F6 = function(e, t) {
  return e && !a2(e) ? j6(e) ? t(i2(e)) : !1 : !0;
}, l2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = F6(t, l2.bind(void 0, e));
  return e.set(t, r), r;
}, u2 = function(e) {
  return e.dataset;
}, L6 = function(e) {
  return e.tagName === "BUTTON";
}, c2 = function(e) {
  return e.tagName === "INPUT";
}, d2 = function(e) {
  return c2(e) && e.type === "radio";
}, z6 = function(e) {
  return !((c2(e) || L6(e)) && (e.type === "hidden" || e.disabled));
}, j6 = function(e) {
  var t = e.getAttribute(C6);
  return ![!0, "true", ""].includes(t);
}, xg = function(e) {
  var t;
  return !!(e && (!((t = u2(e)) === null || t === void 0) && t.focusGuard));
}, Wc = function(e) {
  return !xg(e);
}, N6 = function(e) {
  return !!e;
}, V6 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, f2 = function(e, t, n) {
  return or(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(V6);
}, B6 = [
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
], wg = B6.join(","), W6 = "".concat(wg, ", [data-focus-guard]"), p2 = function(e, t) {
  return or((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? W6 : wg) ? [r] : [], p2(r));
  }, []);
}, H6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Yd([e.contentDocument.body], t) : [e];
}, Yd = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = p2(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return H6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? or(r.parentNode.querySelectorAll(wg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, U6 = function(e) {
  var t = e.querySelectorAll("[".concat(w6, "]"));
  return or(t).map(function(n) {
    return Yd([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, Cg = function(e, t) {
  return or(e).filter(function(n) {
    return s2(t, n);
  }).filter(function(n) {
    return z6(n);
  });
}, V1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), or(e).filter(function(n) {
    return l2(t, n);
  });
}, dm = function(e, t, n) {
  return f2(Cg(Yd(e, n), t), !0, n);
}, B1 = function(e, t) {
  return f2(Cg(Yd(e), t), !1);
}, G6 = function(e, t) {
  return Cg(U6(e), t);
}, Xi = function(e, t) {
  return e.shadowRoot ? Xi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : or(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Xi(o, t) : !1;
    }
    return Xi(n, t);
  });
}, K6 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, h2 = function(e) {
  return e.parentNode ? h2(e.parentNode) : e;
}, kg = function(e) {
  var t = Bc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(cm);
    return n.push.apply(n, o ? K6(or(h2(r).querySelectorAll("[".concat(cm, '="').concat(o, '"]:not([').concat(KP, '="disabled"])')))) : [r]), n;
  }, []);
}, Y6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, rl = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? rl(t.shadowRoot) : t instanceof HTMLIFrameElement && Y6(function() {
      return t.contentWindow.document;
    }) ? rl(t.contentWindow.document) : t;
  }
}, q6 = function(e, t) {
  return e === t;
}, X6 = function(e, t) {
  return !!or(e.querySelectorAll("iframe")).some(function(n) {
    return q6(n, t);
  });
}, m2 = function(e, t) {
  return t === void 0 && (t = rl(o2(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : kg(e).some(function(n) {
    return Xi(n, t) || X6(n, t);
  });
}, Q6 = function(e) {
  e === void 0 && (e = document);
  var t = rl(e);
  return t ? or(e.querySelectorAll("[".concat(x6, "]"))).some(function(n) {
    return Xi(n, t);
  }) : !1;
}, Z6 = function(e, t) {
  return t.filter(d2).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Pg = function(e, t) {
  return d2(e) && e.name ? Z6(e, t) : e;
}, J6 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Pg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, W1 = function(e) {
  return e[0] && e.length > 1 ? Pg(e[0], e) : e[0];
}, H1 = function(e, t) {
  return e.length > 1 ? e.indexOf(Pg(e[t], e)) : t;
}, v2 = "NEW_FOCUS", e9 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = xg(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), g = J6(t), y = n !== void 0 ? g.indexOf(n) : -1, b = y - (r ? g.indexOf(r) : l), h = H1(e, 0), v = H1(e, o - 1);
    if (l === -1 || c === -1)
      return v2;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return v;
    if (l >= p && s && Math.abs(d) > 1)
      return h;
    if (d && Math.abs(b) > 1)
      return c;
    if (l <= f)
      return v;
    if (l > p)
      return h;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, t9 = function(e) {
  return function(t) {
    var n, r = (n = u2(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, n9 = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = V1(r.filter(t9(n)));
  return o && o.length ? W1(o) : W1(V1(t));
}, fm = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && fm(e.parentNode.host || e.parentNode, t), t;
}, Ep = function(e, t) {
  for (var n = fm(e), r = fm(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, g2 = function(e, t, n) {
  var r = Bc(e), o = Bc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Ep(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = Ep(i, l);
      u && (!a || Xi(u, a) ? a = u : a = Ep(u, a));
    });
  }), a;
}, r9 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(G6(r, t));
  }, []);
}, o9 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(N6);
}, i9 = function(e, t) {
  var n = rl(Bc(e).length > 0 ? document : o2(e).ownerDocument), r = kg(e).filter(Wc), o = g2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = B1(r, i), s = dm(r, i).filter(function(p) {
    var g = p.node;
    return Wc(g);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = B1([o], i).map(function(p) {
      var g = p.node;
      return g;
    }), u = o9(l, s), c = u.map(function(p) {
      var g = p.node;
      return g;
    }), d = e9(c, l, n, t);
    if (d === v2) {
      var f = n9(a, c, r9(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, a9 = function(e) {
  var t = kg(e).filter(Wc), n = g2(e, e, t), r = /* @__PURE__ */ new Map(), o = dm([n], r, !0), i = dm(t, r).filter(function(a) {
    var s = a.node;
    return Wc(s);
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
      guard: xg(s)
    };
  });
}, s9 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Tp = 0, _p = !1, y2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = i9(e, t);
  if (!_p && r) {
    if (Tp > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), _p = !0, setTimeout(function() {
        _p = !1;
      }, 1);
      return;
    }
    Tp++, s9(r.node, n.focusOptions), Tp--;
  }
};
function Eg(e) {
  setTimeout(e, 1);
}
var l9 = function() {
  return document && document.activeElement === document.body;
}, u9 = function() {
  return l9() || Q6();
}, Qi = null, zi = null, Zi = null, ol = !1, c9 = function() {
  return !0;
}, d9 = function(t) {
  return (Qi.whiteList || c9)(t);
}, f9 = function(t, n) {
  Zi = {
    observerNode: t,
    portaledElement: n
  };
}, p9 = function(t) {
  return Zi && Zi.portaledElement === t;
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
var h9 = function(t) {
  return t && "current" in t ? t.current : t;
}, m9 = function(t) {
  return t ? !!ol : ol === "meanwhile";
}, v9 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, g9 = function(t, n) {
  return n.some(function(r) {
    return v9(t, r, r);
  });
}, Hc = function() {
  var t = !1;
  if (Qi) {
    var n = Qi, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Zi && Zi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(h9).filter(Boolean));
      if ((!c || d9(c)) && (o || m9(s) || !u9() || !zi && i) && (u && !// active element is "inside" working area
      (m2(d) || // check for shadow-dom contained elements
      c && g9(c, d) || p9(c)) && (document && !zi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = y2(d, zi, {
        focusOptions: l
      }), Zi = {})), ol = !1, zi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = a9(d), g = p.map(function(y) {
          var b = y.node;
          return b;
        }).indexOf(f);
        g > -1 && (p.filter(function(y) {
          var b = y.guard, h = y.node;
          return b && h.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var b = y.node;
          return b.removeAttribute("tabIndex");
        }), U1(g, p.length, 1, p), U1(g, -1, -1, p));
      }
    }
  }
  return t;
}, b2 = function(t) {
  Hc() && t && (t.stopPropagation(), t.preventDefault());
}, Tg = function() {
  return Eg(Hc);
}, y9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || f9(r, n);
}, b9 = function() {
  return null;
}, S2 = function() {
  ol = "just", Eg(function() {
    ol = "meanwhile";
  });
}, S9 = function() {
  document.addEventListener("focusin", b2), document.addEventListener("focusout", Tg), window.addEventListener("blur", S2);
}, x9 = function() {
  document.removeEventListener("focusin", b2), document.removeEventListener("focusout", Tg), window.removeEventListener("blur", S2);
};
function w9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function C9(e) {
  var t = e.slice(-1)[0];
  t && !Qi && S9();
  var n = Qi, r = n && t && t.id === n.id;
  Qi = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (zi = null, (!r || n.observed !== t.observed) && t.onActivation(), Hc(), Eg(Hc)) : (x9(), zi = null);
}
e2.assignSyncMedium(y9);
t2.assignMedium(Tg);
_6.assignMedium(function(e) {
  return e({
    moveFocusInside: y2,
    focusInside: m2
  });
});
const k9 = $6(w9, C9)(b9);
var x2 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  return /* @__PURE__ */ m.createElement(n2, q({
    sideCar: k9,
    ref: n
  }, t));
}), w2 = n2.propTypes || {};
w2.sideCar;
WP(w2, ["sideCar"]);
x2.propTypes = {};
const G1 = x2;
function C2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function k2(e) {
  var t;
  if (!C2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function P9(e) {
  var t, n;
  return (n = (t = P2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function P2(e) {
  return C2(e) ? e.ownerDocument : document;
}
function E9(e) {
  return P2(e).activeElement;
}
var E2 = (e) => e.hasAttribute("tabindex"), T9 = (e) => E2(e) && e.tabIndex === -1;
function _9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function T2(e) {
  return e.parentElement && T2(e.parentElement) ? !0 : e.hidden;
}
function O9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function _2(e) {
  if (!k2(e) || T2(e) || _9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : O9(e) ? !0 : E2(e);
}
function M9(e) {
  return e ? k2(e) && _2(e) && !T9(e) : !1;
}
var I9 = [
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
], R9 = I9.join(), $9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function O2(e) {
  const t = Array.from(
    e.querySelectorAll(R9)
  );
  return t.unshift(e), t.filter((n) => _2(n) && $9(n));
}
var K1, A9 = (K1 = G1.default) != null ? K1 : G1, M2 = (e) => {
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
  } = e, c = m.useCallback(() => {
    t != null && t.current ? t.current.focus() : r != null && r.current && O2(r.current).length === 0 && requestAnimationFrame(() => {
      var g;
      (g = r.current) == null || g.focus();
    });
  }, [t, r]), d = m.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ w.jsx(
    A9,
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
M2.displayName = "FocusLock";
var D9 = l3 ? m.useLayoutEffect : m.useEffect;
function Y1(e, t = []) {
  const n = m.useRef(e);
  return D9(() => {
    n.current = e;
  }), m.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function F9(e, t) {
  const n = m.useId();
  return m.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function L9(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function z9(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = Y1(n), a = Y1(t), [s, l] = m.useState(e.defaultIsOpen || !1), [u, c] = L9(r, s), d = F9(o, "disclosure"), f = m.useCallback(() => {
    u || l(!1), a == null || a();
  }, [u, a]), p = m.useCallback(() => {
    u || l(!0), i == null || i();
  }, [u, i]), g = m.useCallback(() => {
    (c ? f : p)();
  }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: g,
    isControlled: u,
    getButtonProps: (y = {}) => ({
      ...y,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: p3(y.onClick, g)
    }),
    getDisclosureProps: (y = {}) => ({
      ...y,
      hidden: !c,
      id: d
    })
  };
}
var qd = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = mt("Input", o), a = on(o), s = VP(a), l = ie("chakra-input", t.className);
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
qd.displayName = "Input";
qd.id = "Input";
var I2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function j9(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : zt(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function N9(e, t = I2) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var tr = oe(function(t, n) {
  const r = Jo("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = on(t), u = k3({
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
tr.displayName = "Text";
var R2 = (e) => /* @__PURE__ */ w.jsx(
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
R2.displayName = "StackItem";
function V9(e) {
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
    "&": j9(
      n,
      (o) => r[o]
    )
  };
}
var _g = oe((e, t) => {
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
  } = e, p = n ? "row" : r ?? "column", g = m.useMemo(
    () => V9({ spacing: a, direction: p }),
    [a, p]
  ), y = !!u, b = !d && !y, h = m.useMemo(() => {
    const S = jP(l);
    return b ? S : S.map((x, k) => {
      const P = typeof x.key < "u" ? x.key : k, E = k + 1 === S.length, M = d ? /* @__PURE__ */ w.jsx(R2, { children: x }, P) : x;
      if (!y)
        return M;
      const I = m.cloneElement(
        u,
        {
          __css: g
        }
      ), D = E ? null : I;
      return /* @__PURE__ */ w.jsxs(m.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    g,
    y,
    b,
    d,
    l
  ]), v = ie("chakra-stack", c);
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: y ? void 0 : a,
      className: v,
      ...f,
      children: h
    }
  );
});
_g.displayName = "Stack";
var $t = oe((e, t) => /* @__PURE__ */ w.jsx(_g, { align: "center", ...e, direction: "row", ref: t }));
$t.displayName = "HStack";
var $e = X("div");
$e.displayName = "Box";
var $2 = oe(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ w.jsx(
    $e,
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
var B9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ w.jsx($2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
B9.displayName = "Circle";
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
  } = Jo("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...g
  } = on(t), y = {
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
        ...y[f],
        ...p
      },
      className: ie("chakra-divider", d)
    }
  );
});
A2.displayName = "Divider";
var D2 = oe(function(t, n) {
  const { direction: r, align: o, justify: i, wrap: a, basis: s, grow: l, shrink: u, ...c } = t, d = {
    display: "flex",
    flexDirection: r,
    alignItems: o,
    justifyContent: i,
    flexWrap: a,
    flexBasis: s,
    flexGrow: l,
    flexShrink: u
  };
  return /* @__PURE__ */ w.jsx(X.div, { ref: n, __css: d, ...c });
});
D2.displayName = "Flex";
function W9(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = j3(), i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(r) ? r : [r];
  a = a.filter((u) => u != null);
  const [s, l] = m.useState(() => i.map((u, c) => ({
    media: u,
    matches: n ? !!a[c] : o().matchMedia(u).matches
  })));
  return m.useEffect(() => {
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
function H9(e, t, n = I2) {
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
function U9(e) {
  var t, n;
  const r = zt(e) ? e : { fallback: e ?? "base" }, i = Zo().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = W9(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function G9(e, t) {
  var n;
  const r = zt(t) ? t : { fallback: t ?? "base" }, o = U9(r), i = Zo();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(N9(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return H9(s, o, a);
}
function K9(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function Y9(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e, [r, o] = m.useState([]), i = m.useRef(), a = () => {
    i.current && (clearTimeout(i.current), i.current = null);
  }, s = () => {
    a(), i.current = setTimeout(() => {
      o([]), i.current = null;
    }, t);
  };
  m.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (K9(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function q9(e, t, n, r) {
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
function X9() {
  const e = m.useRef(/* @__PURE__ */ new Map()), t = e.current, n = m.useCallback((o, i, a, s) => {
    e.current.set(a, { type: i, el: o, options: s }), o.addEventListener(i, a, s);
  }, []), r = m.useCallback(
    (o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    },
    []
  );
  return m.useEffect(
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
function Q9(e = {}) {
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
  } = e, [y, b] = m.useState(!0), [h, v] = m.useState(!1), S = X9(), x = ($) => {
    $ && $.tagName !== "BUTTON" && b(!1);
  }, k = y ? d : d || 0, P = n && !r, E = m.useCallback(
    ($) => {
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      $.currentTarget.focus(), l == null || l($);
    },
    [n, l]
  ), T = m.useCallback(
    ($) => {
      h && Op($) && ($.preventDefault(), $.stopPropagation(), v(!1), S.remove(document, "keyup", T, !1));
    },
    [h, S]
  ), M = m.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !Op($.nativeEvent) || y)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), v(!0)), A && ($.preventDefault(), $.currentTarget.click()), S.add(document, "keyup", T, !1);
    },
    [
      n,
      y,
      u,
      o,
      i,
      S,
      T
    ]
  ), I = m.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !Op($.nativeEvent) || y)
        return;
      i && $.key === " " && ($.preventDefault(), v(!1), $.currentTarget.click());
    },
    [i, y, n, c]
  ), D = m.useCallback(
    ($) => {
      $.button === 0 && (v(!1), S.remove(document, "mouseup", D, !1));
    },
    [S]
  ), G = m.useCallback(
    ($) => {
      if ($.button !== 0)
        return;
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      y || v(!0), $.currentTarget.focus({ preventScroll: !0 }), S.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, y, a, S, D]
  ), H = m.useCallback(
    ($) => {
      $.button === 0 && (y || v(!1), s == null || s($));
    },
    [s, y]
  ), L = m.useCallback(
    ($) => {
      if (n) {
        $.preventDefault();
        return;
      }
      f == null || f($);
    },
    [n, f]
  ), W = m.useCallback(
    ($) => {
      h && ($.preventDefault(), v(!1)), p == null || p($);
    },
    [h, p]
  ), K = at(t, x);
  return y ? {
    ...g,
    ref: K,
    type: "button",
    "aria-disabled": P ? void 0 : n,
    disabled: P,
    onClick: E,
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
    "data-active": fn(h),
    "aria-disabled": n ? "true" : void 0,
    tabIndex: P ? void 0 : k,
    onClick: E,
    onMouseDown: G,
    onMouseUp: H,
    onKeyUp: I,
    onKeyDown: M,
    onMouseOver: L,
    onMouseLeave: W
  };
}
function Z9(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = E9(t);
  return !n || t.contains(n) ? !1 : !!M9(n);
}
function F2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  da(() => {
    if (!i || Z9(e))
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
var J9 = {
  preventScroll: !0,
  shouldFocus: !1
};
function e8(e, t = J9) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = t8(e) ? e.current : e, s = o && i, l = m.useRef(s), u = m.useRef(i);
  la(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = m.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (n != null && n.current)
        requestAnimationFrame(() => {
          var d;
          (d = n.current) == null || d.focus({ preventScroll: r });
        });
      else {
        const d = O2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  da(() => {
    c();
  }, [c]), yg(a, "transitionend", c);
}
function t8(e) {
  return "current" in e;
}
var li = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), wt = {
  arrowShadowColor: li("--popper-arrow-shadow-color"),
  arrowSize: li("--popper-arrow-size", "8px"),
  arrowSizeHalf: li("--popper-arrow-size-half"),
  arrowBg: li("--popper-arrow-bg"),
  transformOrigin: li("--popper-transform-origin"),
  arrowOffset: li("--popper-arrow-offset")
};
function n8(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var r8 = {
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
}, o8 = (e) => r8[e], q1 = {
  scroll: !0,
  resize: !0
};
function i8(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...q1, ...e }
  } : t = {
    enabled: e,
    options: q1
  }, t;
}
var a8 = {
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
}, s8 = {
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
    o8(e.placement)
  );
}, l8 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    u8(e);
  }
}, u8 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = c8(e.placement);
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
}, c8 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: wt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: wt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: wt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: wt.arrowOffset.varRef };
}, d8 = {
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
  const n = n8(e.placement);
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
}, f8 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, p8 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function h8(e, t = "ltr") {
  var n, r;
  const o = ((n = f8[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = p8[e]) != null ? r : o;
}
var jt = "top", wn = "bottom", Cn = "right", Nt = "left", Og = "auto", wl = [jt, wn, Cn, Nt], ha = "start", il = "end", m8 = "clippingParents", L2 = "viewport", Ua = "popper", v8 = "reference", Z1 = /* @__PURE__ */ wl.reduce(function(e, t) {
  return e.concat([t + "-" + ha, t + "-" + il]);
}, []), z2 = /* @__PURE__ */ [].concat(wl, [Og]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ha, t + "-" + il]);
}, []), g8 = "beforeRead", y8 = "read", b8 = "afterRead", S8 = "beforeMain", x8 = "main", w8 = "afterMain", C8 = "beforeWrite", k8 = "write", P8 = "afterWrite", E8 = [g8, y8, b8, S8, x8, w8, C8, k8, P8];
function rr(e) {
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
function Yo(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function bn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Mg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function T8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !bn(i) || !rr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function _8(e) {
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
      !bn(o) || !rr(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const O8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: T8,
  effect: _8,
  requires: ["computeStyles"]
};
function nr(e) {
  return e.split("-")[0];
}
var Vo = Math.max, Uc = Math.min, ma = Math.round;
function pm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function j2() {
  return !/^((?!chrome|android).)*safari/i.test(pm());
}
function va(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && bn(e) && (o = e.offsetWidth > 0 && ma(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ma(r.height) / e.offsetHeight || 1);
  var a = Yo(e) ? en(e) : window, s = a.visualViewport, l = !j2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
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
  var t = va(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function N2(e, t) {
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
function Tr(e) {
  return en(e).getComputedStyle(e);
}
function M8(e) {
  return ["table", "td", "th"].indexOf(rr(e)) >= 0;
}
function mo(e) {
  return ((Yo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Xd(e) {
  return rr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Mg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    mo(e)
  );
}
function J1(e) {
  return !bn(e) || // https://github.com/popperjs/popper-core/issues/837
  Tr(e).position === "fixed" ? null : e.offsetParent;
}
function I8(e) {
  var t = /firefox/i.test(pm()), n = /Trident/i.test(pm());
  if (n && bn(e)) {
    var r = Tr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Xd(e);
  for (Mg(o) && (o = o.host); bn(o) && ["html", "body"].indexOf(rr(o)) < 0; ) {
    var i = Tr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Cl(e) {
  for (var t = en(e), n = J1(e); n && M8(n) && Tr(n).position === "static"; )
    n = J1(n);
  return n && (rr(n) === "html" || rr(n) === "body" && Tr(n).position === "static") ? t : n || I8(e) || t;
}
function Rg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Es(e, t, n) {
  return Vo(e, Uc(t, n));
}
function R8(e, t, n) {
  var r = Es(e, t, n);
  return r > n ? n : r;
}
function V2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function B2(e) {
  return Object.assign({}, V2(), e);
}
function W2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, B2(typeof t != "number" ? t : W2(t, wl));
};
function A8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = nr(n.placement), l = Rg(s), u = [Nt, Cn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = $8(o.padding, n), f = Ig(i), p = l === "y" ? jt : Nt, g = l === "y" ? wn : Cn, y = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], b = a[l] - n.rects.reference[l], h = Cl(i), v = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, S = y / 2 - b / 2, x = d[p], k = v - f[c] - d[g], P = v / 2 - f[c] / 2 + S, E = Es(x, P, k), T = l;
    n.modifiersData[r] = (t = {}, t[T] = E, t.centerOffset = E - P, t);
  }
}
function D8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || N2(t.elements.popper, o) && (t.elements.arrow = o));
}
const F8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: A8,
  effect: D8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ga(e) {
  return e.split("-")[1];
}
var L8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function z8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ma(n * o) / o || 0,
    y: ma(r * o) / o || 0
  };
}
function eS(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, g = a.y, y = g === void 0 ? 0 : g, b = typeof c == "function" ? c({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  p = b.x, y = b.y;
  var h = a.hasOwnProperty("x"), v = a.hasOwnProperty("y"), S = Nt, x = jt, k = window;
  if (u) {
    var P = Cl(n), E = "clientHeight", T = "clientWidth";
    if (P === en(n) && (P = mo(n), Tr(P).position !== "static" && s === "absolute" && (E = "scrollHeight", T = "scrollWidth")), P = P, o === jt || (o === Nt || o === Cn) && i === il) {
      x = wn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[E]
      );
      y -= M - r.height, y *= l ? 1 : -1;
    }
    if (o === Nt || (o === jt || o === wn) && i === il) {
      S = Cn;
      var I = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      p -= I - r.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && L8), G = c === !0 ? z8({
    x: p,
    y
  }, en(n)) : {
    x: p,
    y
  };
  if (p = G.x, y = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[x] = v ? "0" : "", H[S] = h ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[x] = v ? y + "px" : "", t[S] = h ? p + "px" : "", t.transform = "", t));
}
function j8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: nr(t.placement),
    variation: ga(t.placement),
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
const N8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: j8,
  data: {}
};
var du = {
  passive: !0
};
function V8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, du);
  }), s && l.addEventListener("resize", n.update, du), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, du);
    }), s && l.removeEventListener("resize", n.update, du);
  };
}
const B8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: V8,
  data: {}
};
var W8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return W8[t];
  });
}
var H8 = {
  start: "end",
  end: "start"
};
function tS(e) {
  return e.replace(/start|end/g, function(t) {
    return H8[t];
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
  return va(mo(e)).left + $g(e).scrollLeft;
}
function U8(e, t) {
  var n = en(e), r = mo(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
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
function G8(e) {
  var t, n = mo(e), r = $g(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Vo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Vo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Ag(e), l = -r.scrollTop;
  return Tr(o || n).direction === "rtl" && (s += Vo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Dg(e) {
  var t = Tr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function H2(e) {
  return ["html", "body", "#document"].indexOf(rr(e)) >= 0 ? e.ownerDocument.body : bn(e) && Dg(e) ? e : H2(Xd(e));
}
function Ts(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = H2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), a = o ? [i].concat(i.visualViewport || [], Dg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ts(Xd(a)))
  );
}
function hm(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function K8(e, t) {
  var n = va(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function nS(e, t, n) {
  return t === L2 ? hm(U8(e, n)) : Yo(t) ? K8(t, n) : hm(G8(mo(e)));
}
function Y8(e) {
  var t = Ts(Xd(e)), n = ["absolute", "fixed"].indexOf(Tr(e).position) >= 0, r = n && bn(e) ? Cl(e) : e;
  return Yo(r) ? t.filter(function(o) {
    return Yo(o) && N2(o, r) && rr(o) !== "body";
  }) : [];
}
function q8(e, t, n, r) {
  var o = t === "clippingParents" ? Y8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = nS(e, u, r);
    return l.top = Vo(c.top, l.top), l.right = Uc(c.right, l.right), l.bottom = Uc(c.bottom, l.bottom), l.left = Vo(c.left, l.left), l;
  }, nS(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function U2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? nr(r) : null, i = r ? ga(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case jt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case wn:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Cn:
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
      case ha:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case il:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function al(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? m8 : s, u = n.rootBoundary, c = u === void 0 ? L2 : u, d = n.elementContext, f = d === void 0 ? Ua : d, p = n.altBoundary, g = p === void 0 ? !1 : p, y = n.padding, b = y === void 0 ? 0 : y, h = B2(typeof b != "number" ? b : W2(b, wl)), v = f === Ua ? v8 : Ua, S = e.rects.popper, x = e.elements[g ? v : f], k = q8(Yo(x) ? x : x.contextElement || mo(e.elements.popper), l, c, a), P = va(e.elements.reference), E = U2({
    reference: P,
    element: S,
    strategy: "absolute",
    placement: o
  }), T = hm(Object.assign({}, S, E)), M = f === Ua ? T : P, I = {
    top: k.top - M.top + h.top,
    bottom: M.bottom - k.bottom + h.bottom,
    left: k.left - M.left + h.left,
    right: M.right - k.right + h.right
  }, D = e.modifiersData.offset;
  if (f === Ua && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [Cn, wn].indexOf(H) >= 0 ? 1 : -1, W = [jt, wn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function X8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? z2 : l, c = ga(r), d = c ? s ? Z1 : Z1.filter(function(g) {
    return ga(g) === c;
  }) : wl, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, y) {
    return g[y] = al(e, {
      placement: y,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[nr(y)], g;
  }, {});
  return Object.keys(p).sort(function(g, y) {
    return p[g] - p[y];
  });
}
function Q8(e) {
  if (nr(e) === Og)
    return [];
  var t = qu(e);
  return [tS(e), t, tS(t)];
}
function Z8(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, g = p === void 0 ? !0 : p, y = n.allowedAutoPlacements, b = t.options.placement, h = nr(b), v = h === b, S = l || (v || !g ? [qu(b)] : Q8(b)), x = [b].concat(S).reduce(function(te, le) {
      return te.concat(nr(le) === Og ? X8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, E = /* @__PURE__ */ new Map(), T = !0, M = x[0], I = 0; I < x.length; I++) {
      var D = x[I], G = nr(D), H = ga(D) === ha, L = [jt, wn].indexOf(G) >= 0, W = L ? "width" : "height", K = al(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? Cn : Nt : H ? wn : jt;
      k[W] > P[W] && ($ = qu($));
      var A = qu($), z = [];
      if (i && z.push(K[G] <= 0), s && z.push(K[$] <= 0, K[A] <= 0), z.every(function(te) {
        return te;
      })) {
        M = D, T = !1;
        break;
      }
      E.set(D, z);
    }
    if (T)
      for (var U = g ? 3 : 1, V = function(le) {
        var ae = x.find(function(se) {
          var me = E.get(se);
          if (me)
            return me.slice(0, le).every(function(ke) {
              return ke;
            });
        });
        if (ae)
          return M = ae, "break";
      }, Y = U; Y > 0; Y--) {
        var j = V(Y);
        if (j === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const J8 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Z8,
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
  return [jt, Cn, wn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function e7(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = al(t, {
    elementContext: "reference"
  }), s = al(t, {
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
const t7 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: e7
};
function n7(e, t, n) {
  var r = nr(e), o = [Nt, jt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Nt, Cn].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function r7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = z2.reduce(function(c, d) {
    return c[d] = n7(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const o7 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: r7
};
function i7(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = U2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const a7 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: i7,
  data: {}
};
function s7(e) {
  return e === "x" ? "y" : "x";
}
function l7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, g = n.tetherOffset, y = g === void 0 ? 0 : g, b = al(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), h = nr(t.placement), v = ga(t.placement), S = !v, x = Rg(h), k = s7(x), P = t.modifiersData.popperOffsets, E = t.rects.reference, T = t.rects.popper, M = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, I = typeof M == "number" ? {
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
      var H, L = x === "y" ? jt : Nt, W = x === "y" ? wn : Cn, K = x === "y" ? "height" : "width", $ = P[x], A = $ + b[L], z = $ - b[W], U = p ? -T[K] / 2 : 0, V = v === ha ? E[K] : T[K], Y = v === ha ? -T[K] : -E[K], j = t.elements.arrow, te = p && j ? Ig(j) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : V2(), ae = le[L], se = le[W], me = Es(0, E[K], te[K]), ke = S ? E[K] / 2 - U - me - ae - I.mainAxis : V - me - ae - I.mainAxis, Je = S ? -E[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && Cl(t.elements.arrow), an = qe ? x === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, En = (H = D == null ? void 0 : D[x]) != null ? H : 0, Ir = $ + ke - En - an, fe = $ + Je - En, vt = Es(p ? Uc(A, Ir) : A, $, p ? Vo(z, fe) : z);
      P[x] = vt, G[x] = vt - $;
    }
    if (s) {
      var Ge, Ut = x === "x" ? jt : Nt, Rr = x === "x" ? wn : Cn, gt = P[k], jn = k === "y" ? "height" : "width", $r = gt + b[Ut], sn = gt - b[Rr], ri = [jt, Nt].indexOf(h) !== -1, Ta = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Tl = ri ? $r : gt - E[jn] - T[jn] - Ta + I.altAxis, _l = ri ? gt + E[jn] + T[jn] - Ta - I.altAxis : sn, vo = p && ri ? R8(Tl, gt, _l) : Es(p ? Tl : $r, gt, p ? _l : sn);
      P[k] = vo, G[k] = vo - gt;
    }
    t.modifiersData[r] = G;
  }
}
const u7 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: l7,
  requiresIfExists: ["offset"]
};
function c7(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function d7(e) {
  return e === en(e) || !bn(e) ? $g(e) : c7(e);
}
function f7(e) {
  var t = e.getBoundingClientRect(), n = ma(t.width) / e.offsetWidth || 1, r = ma(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function p7(e, t, n) {
  n === void 0 && (n = !1);
  var r = bn(t), o = bn(t) && f7(t), i = mo(t), a = va(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((rr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Dg(i)) && (s = d7(t)), bn(t) ? (l = va(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Ag(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function h7(e) {
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
function m7(e) {
  var t = h7(e);
  return E8.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function v7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function g7(e) {
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
function y7(e) {
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
      setOptions: function(h) {
        var v = typeof h == "function" ? h(c.options) : h;
        y(), c.options = Object.assign({}, i, c.options, v), c.scrollParents = {
          reference: Yo(s) ? Ts(s) : s.contextElement ? Ts(s.contextElement) : [],
          popper: Ts(l)
        };
        var S = m7(g7([].concat(r, c.options.modifiers)));
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
          var h = c.elements, v = h.reference, S = h.popper;
          if (aS(v, S)) {
            c.rects = {
              reference: p7(v, Cl(S), c.options.strategy === "fixed"),
              popper: Ig(S)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
              return c.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var k = c.orderedModifiers[x], P = k.fn, E = k.options, T = E === void 0 ? {} : E, M = k.name;
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
      update: v7(function() {
        return new Promise(function(b) {
          p.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!aS(s, l))
      return p;
    p.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function g() {
      c.orderedModifiers.forEach(function(b) {
        var h = b.name, v = b.options, S = v === void 0 ? {} : v, x = b.effect;
        if (typeof x == "function") {
          var k = x({
            state: c,
            name: h,
            instance: p,
            options: S
          }), P = function() {
          };
          d.push(k || P);
        }
      });
    }
    function y() {
      d.forEach(function(b) {
        return b();
      }), d = [];
    }
    return p;
  };
}
var b7 = [B8, a7, N8, O8, o7, J8, u7, F8, t7], S7 = /* @__PURE__ */ y7({
  defaultModifiers: b7
});
function G2(e = {}) {
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
  } = e, g = m.useRef(null), y = m.useRef(null), b = m.useRef(null), h = h8(r, p), v = m.useRef(() => {
  }), S = m.useCallback(() => {
    var I;
    !t || !g.current || !y.current || ((I = v.current) == null || I.call(v), b.current = S7(g.current, y.current, {
      placement: h,
      modifiers: [
        d8,
        l8,
        s8,
        {
          ...a8,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...i8(a)
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
    }), b.current.forceUpdate(), v.current = b.current.destroy);
  }, [
    h,
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
  m.useEffect(() => () => {
    var I;
    !g.current && !y.current && ((I = b.current) == null || I.destroy(), b.current = null);
  }, []);
  const x = m.useCallback(
    (I) => {
      g.current = I, S();
    },
    [S]
  ), k = m.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(x, D)
    }),
    [x]
  ), P = m.useCallback(
    (I) => {
      y.current = I, S();
    },
    [S]
  ), E = m.useCallback(
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
  ), T = m.useCallback((I = {}, D = null) => {
    const { size: G, shadowColor: H, bg: L, style: W, ...K } = I;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: x7(I)
    };
  }, []), M = m.useCallback(
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
    transformOrigin: wt.transformOrigin.varRef,
    referenceRef: x,
    popperRef: P,
    getPopperProps: E,
    getArrowProps: T,
    getArrowInnerProps: M,
    getReferenceProps: k
  };
}
function x7(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function K2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = ro(n), a = ro(t), [s, l] = m.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = m.useId(), f = o ?? `disclosure-${d}`, p = m.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), g = m.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), y = m.useCallback(() => {
    u ? p() : g();
  }, [u, g, p]);
  function b(v = {}) {
    return {
      ...v,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(S) {
        var x;
        (x = v.onClick) == null || x.call(v, S), y();
      }
    };
  }
  function h(v = {}) {
    return {
      ...v,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: g,
    onClose: p,
    onToggle: y,
    isControlled: c,
    getButtonProps: b,
    getDisclosureProps: h
  };
}
function w7(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = ro(n), a = m.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  m.useEffect(() => {
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
    }, c = Y2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function Mp(e, t) {
  var n;
  const r = e.target;
  return r && !Y2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function Y2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function q2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = m.useState(t), [i, a] = m.useState(!1);
  return m.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), yg(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = P9(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function X2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  C7,
  k7,
  P7,
  E7
] = OP(), [T7, kl] = nt({
  strict: !1,
  name: "MenuContext"
});
function _7(e, ...t) {
  const n = m.useId(), r = e || n;
  return m.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function Q2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function sS(e) {
  return Q2(e).activeElement === e;
}
function O7(e = {}) {
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
    ...y
  } = e, b = m.useRef(null), h = m.useRef(null), v = P7(), S = m.useCallback(() => {
    requestAnimationFrame(() => {
      var j;
      (j = b.current) == null || j.focus({ preventScroll: !1 });
    });
  }, []), x = m.useCallback(() => {
    const j = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = v.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(j);
  }, [v, o]), k = m.useCallback(() => {
    const j = setTimeout(() => {
      const te = v.lastEnabled();
      te && H(te.index);
    });
    A.current.add(j);
  }, [v]), P = m.useCallback(() => {
    c == null || c(), i ? x() : S();
  }, [i, x, S, c]), { isOpen: E, onOpen: T, onClose: M, onToggle: I } = K2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  w7({
    enabled: E && r,
    ref: b,
    handler: (j) => {
      var te;
      (te = h.current) != null && te.contains(j.target) || M();
    }
  });
  const D = G2({
    ...y,
    enabled: E || g,
    placement: d,
    direction: p
  }), [G, H] = m.useState(-1);
  da(() => {
    E || H(-1);
  }, [E]), F2(b, {
    focusRef: h,
    visible: E,
    shouldFocus: !0
  });
  const L = q2({ isOpen: E, ref: b }), [W, K] = _7(t, "menu-button", "menu-list"), $ = m.useCallback(() => {
    T(), S();
  }, [T, S]), A = m.useRef(/* @__PURE__ */ new Set([]));
  m.useEffect(() => {
    const j = A.current;
    return () => {
      j.forEach((te) => clearTimeout(te)), j.clear();
    };
  }, []);
  const z = m.useCallback(() => {
    T(), x();
  }, [x, T]), U = m.useCallback(() => {
    T(), k();
  }, [T, k]), V = m.useCallback(() => {
    var j, te;
    const le = Q2(b.current), ae = (j = b.current) == null ? void 0 : j.contains(le.activeElement);
    if (!(E && !ae))
      return;
    const me = (te = v.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [E, G, v]), Y = m.useRef(null);
  return {
    openAndFocusMenu: $,
    openAndFocusFirstItem: z,
    openAndFocusLastItem: U,
    onTransitionEnd: V,
    unstable__animationState: L,
    descendants: v,
    popper: D,
    buttonId: W,
    menuId: K,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: E,
    onToggle: I,
    onOpen: T,
    onClose: M,
    menuRef: b,
    buttonRef: h,
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
function M7(e = {}, t = null) {
  const n = kl(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = m.useCallback(
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
    "data-active": fn(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Le(e.onClick, r),
    onKeyDown: Le(e.onKeyDown, s)
  };
}
function mm(e) {
  var t;
  return D7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function I7(e = {}, t = null) {
  const n = kl();
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
  } = n, f = k7(), p = Y9({
    preventDefault: (h) => h.key !== " " && mm(h.target)
  }), g = m.useCallback(
    (h) => {
      if (!h.currentTarget.contains(h.target))
        return;
      const v = h.key, x = {
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
      }[v];
      if (x) {
        h.preventDefault(), x(h);
        return;
      }
      const k = p((P) => {
        const E = q9(
          f.values(),
          P,
          (T) => {
            var M, I;
            return (I = (M = T == null ? void 0 : T.node) == null ? void 0 : M.textContent) != null ? I : "";
          },
          f.item(r)
        );
        if (E) {
          const T = f.indexOf(E.node);
          o(T);
        }
      });
      mm(h.target) && k(h);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), y = m.useRef(!1);
  a && (y.current = !0);
  const b = X2({
    wasSelected: y.current,
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
function R7(e = {}) {
  const { popper: t, isOpen: n } = kl();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function Z2(e = {}, t = null) {
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
  } = e, f = kl(), {
    setFocusedIndex: p,
    focusedIndex: g,
    closeOnSelect: y,
    onClose: b,
    menuRef: h,
    isOpen: v,
    menuId: S,
    rafId: x
  } = f, k = m.useRef(null), P = `${S}-menuitem-${m.useId()}`, { index: E, register: T } = E7({
    disabled: s && !l
  }), M = m.useCallback(
    ($) => {
      n == null || n($), !s && p(E);
    },
    [p, E, s, n]
  ), I = m.useCallback(
    ($) => {
      r == null || r($), k.current && !sS(k.current) && M($);
    },
    [M, r]
  ), D = m.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = m.useCallback(
    ($) => {
      i == null || i($), mm($.currentTarget) && (u ?? y) && b();
    },
    [b, i, y, u]
  ), H = m.useCallback(
    ($) => {
      a == null || a($), p(E);
    },
    [p, a, E]
  ), L = E === g, W = s && !l;
  da(() => {
    if (v)
      return L && !W && k.current ? (x.current && cancelAnimationFrame(x.current), x.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), x.current = null;
      })) : h.current && !sS(h.current) && h.current.focus({ preventScroll: !0 }), () => {
        x.current && cancelAnimationFrame(x.current);
      };
  }, [L, W, h, v]);
  const K = Q9({
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
function $7(e = {}, t = null) {
  const { type: n = "radio", isChecked: r, ...o } = e;
  return {
    ...Z2(o, t),
    role: `menuitem${n}`,
    "aria-checked": r
  };
}
function A7(e = {}) {
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
  }), d = m.useCallback(
    (g) => {
      if (n === "radio" && typeof u == "string" && c(g), n === "checkbox" && Array.isArray(u)) {
        const y = u.includes(g) ? u.filter((b) => b !== g) : u.concat(g);
        c(y);
      }
    },
    [u, c, n]
  ), p = jP(t).map((g) => {
    if (g.type.id !== "MenuItemOption")
      return g;
    const y = (h) => {
      var v, S;
      d(g.props.value), (S = (v = g.props).onClick) == null || S.call(v, h);
    }, b = n === "radio" ? g.props.value === u : u.includes(g.props.value);
    return m.cloneElement(g, {
      type: n,
      onClick: y,
      isChecked: b
    });
  });
  return {
    ...a,
    children: p
  };
}
function D7(e) {
  var t;
  if (!F7(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function F7(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [L7, Ea] = nt({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), Qd = (e) => {
  const { children: t } = e, n = mt("Menu", e), r = on(e), { direction: o } = Zo(), { descendants: i, ...a } = O7({ ...r, direction: o }), s = m.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ w.jsx(C7, { value: i, children: /* @__PURE__ */ w.jsx(T7, { value: s, children: /* @__PURE__ */ w.jsx(L7, { value: n, children: qn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
Qd.displayName = "Menu";
var J2 = oe(
  (e, t) => {
    const n = Ea();
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
J2.displayName = "MenuCommand";
var eE = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = Ea(), i = r.as || n ? n ?? void 0 : "button", a = m.useMemo(
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
), Zd = (e) => {
  const { className: t, children: n, ...r } = e, o = Ea(), i = m.Children.only(n), a = m.isValidElement(i) ? m.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ie("chakra-menu__icon", i.props.className)
  }) : null, s = ie("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ w.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
Zd.displayName = "MenuIcon";
var is = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = Z2(s, t), c = n || o ? /* @__PURE__ */ w.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ w.jsxs(
    eE,
    {
      ...l,
      className: ie("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ w.jsx(Zd, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ w.jsx(J2, { marginStart: i, children: o })
      ]
    }
  );
});
is.displayName = "MenuItem";
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
}, j7 = X(Or.div), Fg = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = kl(), d = I7(s, n), f = R7(i), p = Ea();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ w.jsx(
        j7,
        {
          variants: z7,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: ie("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: wC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
Fg.displayName = "MenuList";
var tE = oe((e, t) => {
  const { title: n, children: r, className: o, ...i } = e, a = ie("chakra-menu__group__title", o), s = Ea();
  return /* @__PURE__ */ w.jsxs("div", { ref: t, className: "chakra-menu__group", role: "group", children: [
    n && /* @__PURE__ */ w.jsx(X.p, { className: a, ...i, __css: s.groupTitle, children: n }),
    r
  ] });
});
tE.displayName = "MenuGroup";
var nE = (e) => {
  const { className: t, title: n, ...r } = e, o = A7(r);
  return /* @__PURE__ */ w.jsx(
    tE,
    {
      title: n,
      className: ie("chakra-menu__option-group", t),
      ...o
    }
  );
};
nE.displayName = "MenuOptionGroup";
var N7 = oe((e, t) => {
  const n = Ea();
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
}), Lg = oe(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = M7(o, t), a = r || N7;
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
Lg.displayName = "MenuButton";
var V7 = (e) => /* @__PURE__ */ w.jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ w.jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) }), zg = oe(
  (e, t) => {
    const { icon: n, iconSpacing: r = "0.75rem", ...o } = e, i = $7(o, t);
    return /* @__PURE__ */ w.jsxs(
      eE,
      {
        ...i,
        className: ie("chakra-menu__menuitem-option", o.className),
        children: [
          n !== null && /* @__PURE__ */ w.jsx(
            Zd,
            {
              fontSize: "0.8em",
              marginEnd: r,
              opacity: e.isChecked ? 1 : 0,
              children: n || /* @__PURE__ */ w.jsx(V7, {})
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
var B7 = {
  slideInBottom: {
    ...os,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...os,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...os,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...os,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...FP,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, W7 = X(Or.section), H7 = (e) => B7[e || "none"], rE = m.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = H7(n), ...o } = e;
    return /* @__PURE__ */ w.jsx(W7, { ref: t, ...r, ...o });
  }
);
rE.displayName = "ModalTransition";
var U7 = Object.defineProperty, G7 = (e, t, n) => t in e ? U7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, K7 = (e, t, n) => (G7(e, typeof t != "symbol" ? t + "" : t, n), n), Y7 = class {
  constructor() {
    K7(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, vm = new Y7();
function oE(e, t) {
  const [n, r] = m.useState(0);
  return m.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = vm.add(o);
        r(i);
      }
      return () => {
        vm.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var q7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ui = /* @__PURE__ */ new WeakMap(), fu = /* @__PURE__ */ new WeakMap(), pu = {}, Ip = 0, iE = function(e) {
  return e && (e.host || iE(e.parentNode));
}, X7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = iE(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Q7 = function(e, t, n, r) {
  var o = X7(t, Array.isArray(e) ? e : [e]);
  pu[n] || (pu[n] = /* @__PURE__ */ new WeakMap());
  var i = pu[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), g = p !== null && p !== "false", y = (ui.get(f) || 0) + 1, b = (i.get(f) || 0) + 1;
        ui.set(f, y), i.set(f, b), a.push(f), y === 1 && g && fu.set(f, !0), b === 1 && f.setAttribute(n, "true"), g || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), Ip++, function() {
    a.forEach(function(d) {
      var f = ui.get(d) - 1, p = i.get(d) - 1;
      ui.set(d, f), i.set(d, p), f || (fu.has(d) || d.removeAttribute(r), fu.delete(d)), p || d.removeAttribute(n);
    }), Ip--, Ip || (ui = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), fu = /* @__PURE__ */ new WeakMap(), pu = {});
  };
}, Z7 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || q7(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Q7(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function J7(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = m.useRef(null), c = m.useRef(null), [d, f, p] = tW(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  eW(u, t && a);
  const g = oE(u, t), y = m.useRef(null), b = m.useCallback((M) => {
    y.current = M.target;
  }, []), h = m.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [v, S] = m.useState(!1), [x, k] = m.useState(!1), P = m.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": v ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: Le(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, v]
  ), E = m.useCallback(
    (M) => {
      M.stopPropagation(), y.current === M.target && vm.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), T = m.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: Le(M.onClick, E),
      onKeyDown: Le(M.onKeyDown, h),
      onMouseDown: Le(M.onMouseDown, b)
    }),
    [h, b, E]
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
function eW(e, t) {
  const n = e.current;
  m.useEffect(() => {
    if (!(!e.current || !t))
      return Z7(e.current);
  }, [t, e, n]);
}
function tW(e, ...t) {
  const n = m.useId(), r = e || n;
  return m.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [nW, Pl] = nt({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [rW, qo] = nt({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Jd = (e) => {
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
  } = t, y = mt("Modal", t), h = {
    ...J7(t),
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
  return /* @__PURE__ */ w.jsx(rW, { value: h, children: /* @__PURE__ */ w.jsx(nW, { value: y, children: /* @__PURE__ */ w.jsx(Pa, { onExitComplete: g, children: h.isOpen && /* @__PURE__ */ w.jsx(hl, { ...n, children: r }) }) }) });
};
Jd.displayName = "Modal";
var Xu = "right-scroll-bar-position", Qu = "width-before-scroll-bar", oW = "with-scroll-bars-hidden", iW = "--removed-body-scroll-bar-size", aE = ZP(), Rp = function() {
}, ef = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Rp,
    onWheelCapture: Rp,
    onTouchMoveCapture: Rp
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, b = e.as, h = b === void 0 ? "div" : b, v = e.gapMode, S = qP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, k = YP([n, t]), P = Yn(Yn({}, S), o);
  return m.createElement(
    m.Fragment,
    null,
    c && m.createElement(x, { sideCar: aE, removeScrollBar: u, shards: d, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: n, gapMode: v }),
    a ? m.cloneElement(m.Children.only(s), Yn(Yn({}, P), { ref: k })) : m.createElement(h, Yn({}, P, { className: l, ref: k }), s)
  );
});
ef.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ef.classNames = {
  fullWidth: Qu,
  zeroRight: Xu
};
var lS, aW = function() {
  if (lS)
    return lS;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function sW() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = aW();
  return t && e.setAttribute("nonce", t), e;
}
function lW(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function uW(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var cW = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = sW()) && (lW(t, n), uW(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, dW = function() {
  var e = cW();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, sE = function() {
  var e = dW(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, fW = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $p = function(e) {
  return parseInt(e || "", 10) || 0;
}, pW = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$p(n), $p(r), $p(o)];
}, hW = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return fW;
  var t = pW(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, mW = sE(), vW = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(oW, ` {
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
  
  .`).concat(Xu, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Qu, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Xu, " .").concat(Xu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Qu, " .").concat(Qu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(iW, ": ").concat(s, `px;
  }
`);
}, gW = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.useMemo(function() {
    return hW(o);
  }, [o]);
  return m.createElement(mW, { styles: vW(i, !t, o, n ? "" : "!important") });
}, gm = !1;
if (typeof window < "u")
  try {
    var hu = Object.defineProperty({}, "passive", {
      get: function() {
        return gm = !0, !0;
      }
    });
    window.addEventListener("test", hu, hu), window.removeEventListener("test", hu, hu);
  } catch {
    gm = !1;
  }
var ci = gm ? { passive: !1 } : !1, yW = function(e) {
  return e.tagName === "TEXTAREA";
}, lE = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !yW(e) && n[t] === "visible")
  );
}, bW = function(e) {
  return lE(e, "overflowY");
}, SW = function(e) {
  return lE(e, "overflowX");
}, uS = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = uE(e, r);
    if (o) {
      var i = cE(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, xW = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, wW = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, uE = function(e, t) {
  return e === "v" ? bW(t) : SW(t);
}, cE = function(e, t) {
  return e === "v" ? xW(t) : wW(t);
}, CW = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kW = function(e, t, n, r, o) {
  var i = CW(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = cE(e, s), g = p[0], y = p[1], b = p[2], h = y - b - i * g;
    (g || h) && uE(e, s) && (d += h, f += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, mu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, cS = function(e) {
  return [e.deltaX, e.deltaY];
}, dS = function(e) {
  return e && "current" in e ? e.current : e;
}, PW = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, EW = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, TW = 0, di = [];
function _W(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(TW++)[0], i = m.useState(sE)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = E6([e.lockRef.current], (e.shards || []).map(dS), !0).filter(Boolean);
      return y.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(y, b) {
    if ("touches" in y && y.touches.length === 2)
      return !a.current.allowPinchZoom;
    var h = mu(y), v = n.current, S = "deltaX" in y ? y.deltaX : v[0] - h[0], x = "deltaY" in y ? y.deltaY : v[1] - h[1], k, P = y.target, E = Math.abs(S) > Math.abs(x) ? "h" : "v";
    if ("touches" in y && E === "h" && P.type === "range")
      return !1;
    var T = uS(E, P);
    if (!T)
      return !0;
    if (T ? k = E : (k = E === "v" ? "h" : "v", T = uS(E, P)), !T)
      return !1;
    if (!r.current && "changedTouches" in y && (S || x) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return kW(M, b, y, M === "h" ? S : x, !0);
  }, []), l = m.useCallback(function(y) {
    var b = y;
    if (!(!di.length || di[di.length - 1] !== i)) {
      var h = "deltaY" in b ? cS(b) : mu(b), v = t.current.filter(function(k) {
        return k.name === b.type && (k.target === b.target || b.target === k.shadowParent) && PW(k.delta, h);
      })[0];
      if (v && v.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!v) {
        var S = (a.current.shards || []).map(dS).filter(Boolean).filter(function(k) {
          return k.contains(b.target);
        }), x = S.length > 0 ? s(b, S[0]) : !a.current.noIsolation;
        x && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(y, b, h, v) {
    var S = { name: y, delta: b, target: h, should: v, shadowParent: OW(h) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== S;
      });
    }, 1);
  }, []), c = m.useCallback(function(y) {
    n.current = mu(y), r.current = void 0;
  }, []), d = m.useCallback(function(y) {
    u(y.type, cS(y), y.target, s(y, e.lockRef.current));
  }, []), f = m.useCallback(function(y) {
    u(y.type, mu(y), y.target, s(y, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return di.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, ci), document.addEventListener("touchmove", l, ci), document.addEventListener("touchstart", c, ci), function() {
      di = di.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", l, ci), document.removeEventListener("touchmove", l, ci), document.removeEventListener("touchstart", c, ci);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    g ? m.createElement(i, { styles: EW(o) }) : null,
    p ? m.createElement(gW, { gapMode: e.gapMode }) : null
  );
}
function OW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const MW = T6(aE, _W);
var dE = m.forwardRef(function(e, t) {
  return m.createElement(ef, Yn({}, e, { ref: t, sideCar: MW }));
});
dE.classNames = ef.classNames;
const IW = dE;
function RW(e) {
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
  } = qo(), [f, p] = lP();
  m.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = oE(r, d);
  return /* @__PURE__ */ w.jsx(
    M2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ w.jsx(
        IW,
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
var tf = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = qo(), u = s(a, t), c = l(o), d = ie("chakra-modal__content", n), f = Pl(), p = {
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
    }, { motionPreset: y } = qo();
    return /* @__PURE__ */ w.jsx(RW, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: g,
        children: /* @__PURE__ */ w.jsx(
          rE,
          {
            preset: y,
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
tf.displayName = "ModalContent";
var nf = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = qo();
    m.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ie("chakra-modal__header", n), l = {
      flex: 0,
      ...Pl().header
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
nf.displayName = "ModalHeader";
var $W = X(Or.div), rf = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ie("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Pl().overlay
    }, { motionPreset: u } = qo(), d = o || (u === "none" ? {} : DP);
    return /* @__PURE__ */ w.jsx(
      $W,
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
rf.displayName = "ModalOverlay";
var of = oe((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = qo();
  m.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ie("chakra-modal__body", n), s = Pl();
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
of.displayName = "ModalBody";
var af = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = qo(), a = ie("chakra-modal__close-btn", r), s = Pl();
    return /* @__PURE__ */ w.jsx(
      Gd,
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
var [AW, ni] = nt({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [DW, El] = nt({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), fE = oe(
  function(t, n) {
    const { getHeaderProps: r } = ni(), o = El();
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
fE.displayName = "PopoverHeader";
function jg(e) {
  const t = m.Children.only(e.children), { getTriggerProps: n } = ni();
  return m.cloneElement(t, n(t.props, t.ref));
}
jg.displayName = "PopoverTrigger";
var fi = {
  click: "click",
  hover: "hover"
};
function FW(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = fi.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: g,
    ...y
  } = e, { isOpen: b, onClose: h, onOpen: v, onToggle: S } = K2(e), x = m.useRef(null), k = m.useRef(null), P = m.useRef(null), E = m.useRef(!1), T = m.useRef(!1);
  b && (T.current = !0);
  const [M, I] = m.useState(!1), [D, G] = m.useState(!1), H = m.useId(), L = o ?? H, [W, K, $, A] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((fe) => `${fe}-${L}`), {
    referenceRef: z,
    getArrowProps: U,
    getPopperProps: V,
    getArrowInnerProps: Y,
    forceUpdate: j
  } = G2({
    ...y,
    enabled: b || !!g
  }), te = q2({ isOpen: b, ref: P });
  m6({
    enabled: b,
    ref: k
  }), F2(P, {
    focusRef: k,
    visible: b,
    shouldFocus: i && u === fi.click
  }), e8(P, {
    focusRef: r,
    visible: b,
    shouldFocus: a && u === fi.click
  });
  const le = X2({
    wasSelected: T.current,
    enabled: f,
    mode: p,
    isSelected: te.present
  }), ae = m.useCallback(
    (fe = {}, vt = null) => {
      const Ge = {
        ...fe,
        style: {
          ...fe.style,
          transformOrigin: wt.transformOrigin.varRef,
          [wt.arrowSize.var]: s ? `${s}px` : void 0,
          [wt.arrowShadowColor.var]: l
        },
        ref: at(P, vt),
        children: le ? fe.children : null,
        id: K,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Le(fe.onKeyDown, (Ut) => {
          n && Ut.key === "Escape" && h();
        }),
        onBlur: Le(fe.onBlur, (Ut) => {
          const Rr = fS(Ut), gt = Ap(P.current, Rr), jn = Ap(k.current, Rr);
          b && t && (!gt && !jn) && h();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === fi.hover && (Ge.role = "tooltip", Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        E.current = !0;
      }), Ge.onMouseLeave = Le(
        fe.onMouseLeave,
        (Ut) => {
          Ut.nativeEvent.relatedTarget !== null && (E.current = !1, setTimeout(() => h(), d));
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
      h,
      b,
      t,
      d,
      l,
      s
    ]
  ), se = m.useCallback(
    (fe = {}, vt = null) => V(
      {
        ...fe,
        style: {
          visibility: b ? "visible" : "hidden",
          ...fe.style
        }
      },
      vt
    ),
    [b, V]
  ), me = m.useCallback(
    (fe, vt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(vt, x, z)
    }),
    [x, z]
  ), ke = m.useRef(), Je = m.useRef(), qe = m.useCallback(
    (fe) => {
      x.current == null && z(fe);
    },
    [z]
  ), an = m.useCallback(
    (fe = {}, vt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, vt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": b,
        "aria-controls": K
      };
      return u === fi.click && (Ge.onClick = Le(fe.onClick, S)), u === fi.hover && (Ge.onFocus = Le(fe.onFocus, () => {
        ke.current === void 0 && v();
      }), Ge.onBlur = Le(fe.onBlur, (Ut) => {
        const Rr = fS(Ut), gt = !Ap(P.current, Rr);
        b && t && gt && h();
      }), Ge.onKeyDown = Le(fe.onKeyDown, (Ut) => {
        Ut.key === "Escape" && h();
      }), Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        E.current = !0, ke.current = window.setTimeout(() => v(), c);
      }), Ge.onMouseLeave = Le(fe.onMouseLeave, () => {
        E.current = !1, ke.current && (clearTimeout(ke.current), ke.current = void 0), Je.current = window.setTimeout(() => {
          E.current === !1 && h();
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
      v,
      t,
      h,
      c,
      d
    ]
  );
  m.useEffect(() => () => {
    ke.current && clearTimeout(ke.current), Je.current && clearTimeout(Je.current);
  }, []);
  const En = m.useCallback(
    (fe = {}, vt = null) => ({
      ...fe,
      id: $,
      ref: at(vt, (Ge) => {
        I(!!Ge);
      })
    }),
    [$]
  ), Ir = m.useCallback(
    (fe = {}, vt = null) => ({
      ...fe,
      id: A,
      ref: at(vt, (Ge) => {
        G(!!Ge);
      })
    }),
    [A]
  );
  return {
    forceUpdate: j,
    isOpen: b,
    onAnimationComplete: te.onComplete,
    onClose: h,
    getAnchorProps: me,
    getArrowProps: U,
    getArrowInnerProps: Y,
    getPopoverPositionerProps: se,
    getPopoverProps: ae,
    getTriggerProps: an,
    getHeaderProps: En,
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
  const t = mt("Popover", e), { children: n, ...r } = on(e), o = Zo(), i = FW({ ...r, direction: o.direction });
  return /* @__PURE__ */ w.jsx(AW, { value: i, children: /* @__PURE__ */ w.jsx(DW, { value: t, children: qn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Ng.displayName = "Popover";
var Dp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Vg(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = ni(), c = El(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
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
    const { getBodyProps: r } = ni(), o = El();
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
Bg.displayName = "PopoverBody";
var Wg = oe(
  function(t, n) {
    const { onClose: r } = ni(), o = El();
    return /* @__PURE__ */ w.jsx(
      Gd,
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
function LW(e) {
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
var zW = {
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
}, jW = X(Or.section), pE = oe(function(t, n) {
  const { variants: r = zW, ...o } = t, { isOpen: i } = ni();
  return /* @__PURE__ */ w.jsx(
    jW,
    {
      ref: n,
      variants: LW(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
pE.displayName = "PopoverTransition";
var Hg = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = ni(), u = El(), c = {
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
          pE,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: wC(
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
var [NW, hE] = nt({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), mE = oe((e, t) => {
  const n = mt("Tag", e), r = on(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ w.jsx(NW, { value: n, children: /* @__PURE__ */ w.jsx(X.span, { ref: t, ...r, __css: o }) });
});
mE.displayName = "Tag";
var VW = oe((e, t) => {
  const n = hE();
  return /* @__PURE__ */ w.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
VW.displayName = "TagLabel";
var BW = oe((e, t) => /* @__PURE__ */ w.jsx(Pn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
BW.displayName = "TagLeftIcon";
var WW = oe((e, t) => /* @__PURE__ */ w.jsx(Pn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
WW.displayName = "TagRightIcon";
var vE = (e) => /* @__PURE__ */ w.jsx(Pn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ w.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
vE.displayName = "TagCloseIcon";
var HW = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...hE().closeButton
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
        children: r || /* @__PURE__ */ w.jsx(vE, {})
      }
    );
  }
);
HW.displayName = "TagCloseButton";
var UW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, GW = Object.defineProperty, KW = Object.defineProperties, YW = Object.getOwnPropertyDescriptors, Gc = Object.getOwnPropertySymbols, gE = Object.prototype.hasOwnProperty, yE = Object.prototype.propertyIsEnumerable, pS = (e, t, n) => t in e ? GW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hS = (e, t) => {
  for (var n in t || (t = {}))
    gE.call(t, n) && pS(e, n, t[n]);
  if (Gc)
    for (var n of Gc(t))
      yE.call(t, n) && pS(e, n, t[n]);
  return e;
}, qW = (e, t) => KW(e, YW(t)), XW = (e, t) => {
  var n = {};
  for (var r in e)
    gE.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Gc)
    for (var r of Gc(e))
      t.indexOf(r) < 0 && yE.call(e, r) && (n[r] = e[r]);
  return n;
}, Ht = (e, t, n) => {
  const r = m.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = XW(a, ["color", "size", "stroke", "children"]);
      return m.createElement(
        "svg",
        hS(qW(hS({
          ref: i
        }, UW), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => m.createElement(f, p)), ...c || []]
      );
    }
  );
  return r.propTypes = {
    color: xo.string,
    size: xo.oneOfType([xo.string, xo.number]),
    stroke: xo.oneOfType([xo.string, xo.number])
  }, r.displayName = `${t}`, r;
}, mS = Ht("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]), QW = Ht("chevron-up", "IconChevronUp", [
  ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]
]), ZW = Ht("file-import", "IconFileImport", [
  ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
  [
    "path",
    {
      d: "M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3",
      key: "svg-1"
    }
  ]
]), bE = Ht("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), JW = Ht("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), eH = Ht("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), tH = Ht("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), SE = Ht("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), nH = Ht("settings", "IconSettings", [
  [
    "path",
    {
      d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]
]), rH = Ht("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), xE = Ht("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), wE = Ht("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), oH = Ht(
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
), iH = Ht("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
let vu;
const aH = new Uint8Array(16);
function sH() {
  if (!vu && (vu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !vu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return vu(aH);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function lH(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const uH = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), vS = {
  randomUUID: uH
};
function cH(e, t, n) {
  if (vS.randomUUID && !t && !e)
    return vS.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || sH)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return lH(r);
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
async function ya(e, t) {
  const n = e + "/" + Date.now() + ".json";
  fH(n, t);
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
async function dH(e, t) {
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
async function CE(e) {
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
async function fH(e, t) {
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
async function pH(e) {
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
async function hH() {
  try {
    return await (await fetch("/workspace/get_my_workflows_dir")).text();
  } catch (e) {
    console.error("Error getting workflows dir:", e);
  }
}
async function mH(e) {
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
const gS = "CWM_WORKFLOWS_SORT_TYPE";
var Ur = /* @__PURE__ */ ((e) => (e.RECENTLY_MODIFIED = "newst", e.OLDEST_MODIFIED = "oldest", e.AZ = "name A-Z", e.ZA = "name Z-A", e))(Ur || {});
function vH(e) {
  return e = e.replace(/[\\/:*?"<>|]/g, "_"), e.trim();
}
function kE(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
function PE(e = [], t = Ur.RECENTLY_MODIFIED) {
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
let Ee, Ce = null, Zu = null;
async function gH() {
  const e = async () => {
    let r = await Ug("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), Ee = JSON.parse(r ?? "{}");
  }, t = async () => {
    Ce = await bH();
  }, n = async () => {
    Zu = await Kc.load();
  };
  await Promise.all([e(), t(), n()]);
}
function ym(e, t) {
  if (Ee == null)
    return;
  const n = Ee[e];
  if (n == null)
    return;
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  if (o !== i) {
    if (Ee[e] = {
      ...Ee[e],
      ...t,
      updateTime: Date.now()
    }, localStorage.setItem("workspace", JSON.stringify(Ee)), ya("workflows", JSON.stringify(Ee)), t.name != null) {
      n.filePath && CE(n.filePath), bm(e);
      return;
    }
    t.json != null && bm(e);
  }
}
function bm(e) {
  if (Ee == null)
    return;
  const t = Ee[e];
  if (t == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", e);
    return;
  }
  const n = vH(t.name) + ".json";
  Ee[e].filePath = n, dH(n, t.json);
}
function Sm({
  json: e,
  name: t
}) {
  if (Ee == null)
    throw new Error("workspace is not loaded");
  const n = cH();
  return Ee[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Ee)), ya("workflows", JSON.stringify(Ee)), bm(n), Ee[n];
}
function Ju(e) {
  if (Ee == null)
    throw new Error("workspace is not loaded");
  const t = Object.values(Ee);
  return e ? PE(t, e) : t.sort((n, r) => r.updateTime - n.updateTime);
}
function yH(e) {
  var n;
  if (Ee == null)
    throw new Error("workspace is not loaded");
  const t = (n = Ee[e]) == null ? void 0 : n.filePath;
  delete Ee[e], localStorage.setItem("workspace", JSON.stringify(Ee)), ya("workflows", JSON.stringify(Ee)), t != null && CE(t);
}
async function bH() {
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
      }), t[n].updateTime = Date.now(), ya("tags", JSON.stringify(t)), t[n];
    },
    delete(n) {
      delete t[n], ya("tags", JSON.stringify(t));
    }
  };
}
function SH() {
  return JSON.stringify({
    [Kc.TABLE_NAME]: Zu == null ? void 0 : Zu.records,
    tags: Ce == null ? void 0 : Ce.tags,
    workflows: Ee
  });
}
const Oo = class Oo {
  constructor() {
    yf(this, "records");
    this.records = {};
  }
  upsert(t) {
    this.records = {
      ...this.records,
      ...t
    }, ya(Oo.TABLE_NAME, JSON.stringify(this.records)), localStorage.setItem("comfyspace", SH());
  }
  static async load() {
    const t = new Oo();
    let n = await Ug(Oo.TABLE_NAME), r = n != null ? JSON.parse(n) : null;
    if (r == null) {
      const o = localStorage.getItem("comfyspace") ?? "{}", i = JSON.parse(o);
      r = i[Oo.TABLE_NAME], console.log("userSettings", i.userSettings);
    }
    return r != null && (t.records = r), t;
  }
};
yf(Oo, "TABLE_NAME", "userSettings");
let Kc = Oo;
const EE = m.createContext({
  curFlowID: null
}), TE = m.createContext({});
function xH({ onclose: e }) {
  const [t, n] = m.useState([]), r = async () => {
    const o = await pH("workflows");
    if (o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return m.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ w.jsxs(Jd, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ w.jsx(rf, {}),
    /* @__PURE__ */ w.jsxs(tf, { children: [
      /* @__PURE__ */ w.jsx(nf, { children: "Backups" }),
      /* @__PURE__ */ w.jsx(af, {}),
      /* @__PURE__ */ w.jsx(of, { children: /* @__PURE__ */ w.jsx(zP, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ w.jsxs($P, { children: [
          /* @__PURE__ */ w.jsx("h2", { children: /* @__PURE__ */ w.jsxs(MP, { children: [
            /* @__PURE__ */ w.jsxs($e, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              kE(i)
            ] }),
            /* @__PURE__ */ w.jsx(RP, {})
          ] }) }),
          /* @__PURE__ */ w.jsx(LP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ w.jsx($e, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function wH({ onclose: e }) {
  const [t, n] = m.useState((Ce == null ? void 0 : Ce.listAll()) ?? []);
  return /* @__PURE__ */ w.jsxs(Jd, { isOpen: !0, onClose: e, children: [
    /* @__PURE__ */ w.jsx(rf, {}),
    /* @__PURE__ */ w.jsxs(tf, { children: [
      /* @__PURE__ */ w.jsx(nf, { children: "My Tags" }),
      /* @__PURE__ */ w.jsx(af, {}),
      /* @__PURE__ */ w.jsx(of, { children: t.map((r) => /* @__PURE__ */ w.jsxs($t, { children: [
        /* @__PURE__ */ w.jsx(mE, { children: r.name }),
        /* @__PURE__ */ w.jsx(
          nl,
          {
            onClick: () => {
              Ce == null || Ce.delete(r.name), n((Ce == null ? void 0 : Ce.listAll()) ?? []);
            },
            "aria-label": "delete-tag",
            colorScheme: "red",
            variant: "ghost",
            icon: /* @__PURE__ */ w.jsx(wE, {})
          }
        )
      ] })) })
    ] })
  ] });
}
function CH({
  onclose: e
}) {
  const [t, n] = m.useState(null), r = async (o) => {
    const i = await hH();
    n(i ?? null);
  };
  return m.useEffect(() => {
    r();
  }), /* @__PURE__ */ w.jsxs(Jd, { isOpen: !0, onClose: e, size: "2xl", children: [
    /* @__PURE__ */ w.jsx(rf, {}),
    /* @__PURE__ */ w.jsxs(tf, { children: [
      /* @__PURE__ */ w.jsx(nf, { children: "Settings" }),
      /* @__PURE__ */ w.jsx(af, {}),
      /* @__PURE__ */ w.jsxs(of, { children: [
        /* @__PURE__ */ w.jsx(tr, { fontWeight: 600, mb: 3, children: "Workspace Save Directory (🚧 Under development, not working)" }),
        /* @__PURE__ */ w.jsxs($t, { children: [
          /* @__PURE__ */ w.jsx(tr, { mr: 5, children: t }),
          /* @__PURE__ */ w.jsx(
            yn,
            {
              onClick: () => {
                mH();
              },
              paddingLeft: 10,
              paddingRight: 10,
              size: "sm",
              leftIcon: /* @__PURE__ */ w.jsx(bE, {}),
              colorScheme: "teal",
              children: "Choose Folder"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const gu = 16;
function kH({}) {
  const { isOpen: e, onOpen: t, onClose: n } = z9(), [r, o] = m.useState(!1), [i, a] = m.useState(!1), { colorMode: s, toggleColorMode: l } = ka();
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs(Qd, { isLazy: !0, children: [
      /* @__PURE__ */ w.jsx(
        Lg,
        {
          as: nl,
          "aria-label": "Options",
          icon: /* @__PURE__ */ w.jsx(eH, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ w.jsxs(Fg, { children: [
        /* @__PURE__ */ w.jsx(
          is,
          {
            onClick: () => a(!0),
            icon: /* @__PURE__ */ w.jsx(nH, { size: 16 }),
            fontSize: 16,
            children: "Settings"
          }
        ),
        /* @__PURE__ */ w.jsx(
          is,
          {
            onClick: () => o(!0),
            icon: /* @__PURE__ */ w.jsx(xE, { size: gu }),
            fontSize: 16,
            children: "Manage Tags"
          }
        ),
        /* @__PURE__ */ w.jsxs(
          is,
          {
            onClick: l,
            icon: s === "light" ? /* @__PURE__ */ w.jsx(tH, { size: gu }) : /* @__PURE__ */ w.jsx(rH, { size: gu }),
            fontSize: 16,
            children: [
              s === "light" ? "Dark" : "Light",
              " Mode"
            ]
          }
        ),
        /* @__PURE__ */ w.jsx(
          is,
          {
            onClick: t,
            icon: /* @__PURE__ */ w.jsx(JW, { size: gu }),
            fontSize: 16,
            children: "Backups (Experimental)"
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ w.jsx(wH, { onclose: () => o(!1) }),
    i && /* @__PURE__ */ w.jsx(CH, { onclose: () => a(!1) }),
    e && /* @__PURE__ */ w.jsx(xH, { onclose: n })
  ] });
}
function yS(e, t) {
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
    t % 2 ? yS(Object(n), !0).forEach(function(r) {
      Li(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yS(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function PH(e) {
  if (Array.isArray(e))
    return e;
}
function EH(e, t) {
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
function xm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function _E(e, t) {
  if (e) {
    if (typeof e == "string")
      return xm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return xm(e, t);
  }
}
function TH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr(e, t) {
  return PH(e) || EH(e, t) || _E(e, t) || TH();
}
function Mr(e, t) {
  if (e == null)
    return {};
  var n = WP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var _H = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function OH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, g = Mr(e, _H), y = m.useState(s !== void 0 ? s : n), b = Sr(y, 2), h = b[0], v = b[1], S = m.useState(l !== void 0 ? l : o), x = Sr(S, 2), k = x[0], P = x[1], E = m.useState(p !== void 0 ? p : a), T = Sr(E, 2), M = T[0], I = T[1], D = m.useCallback(function(A, z) {
    typeof u == "function" && u(A, z), I(A);
  }, [u]), G = m.useCallback(function(A, z) {
    var U;
    typeof c == "function" && (U = c(A, z)), v(U !== void 0 ? U : A);
  }, [c]), H = m.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = m.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), W = s !== void 0 ? s : h, K = l !== void 0 ? l : k, $ = p !== void 0 ? p : M;
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
function MH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r2(r.key), r);
  }
}
function IH(e, t, n) {
  return t && bS(e.prototype, t), n && bS(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function RH(e, t) {
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
  }), t && Vc(e, t);
}
function Yc(e) {
  return Yc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yc(e);
}
function $H() {
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
function AH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function DH(e, t) {
  if (t && (Ko(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AH(e);
}
function FH(e) {
  var t = $H();
  return function() {
    var r = Yc(e), o;
    if (t) {
      var i = Yc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return DH(this, o);
  };
}
function LH(e) {
  if (Array.isArray(e))
    return xm(e);
}
function zH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function jH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OE(e) {
  return LH(e) || zH(e) || _E(e) || jH();
}
function NH(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const VH = Math.min, BH = Math.max, qc = Math.round, yu = Math.floor, Xc = (e) => ({
  x: e,
  y: e
});
function WH(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function ME(e) {
  return RE(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fn(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function IE(e) {
  var t;
  return (t = (RE(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function RE(e) {
  return e instanceof Node || e instanceof Fn(e).Node;
}
function wm(e) {
  return e instanceof Element || e instanceof Fn(e).Element;
}
function Gg(e) {
  return e instanceof HTMLElement || e instanceof Fn(e).HTMLElement;
}
function SS(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fn(e).ShadowRoot;
}
function $E(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Kg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function HH() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function UH(e) {
  return ["html", "body", "#document"].includes(ME(e));
}
function Kg(e) {
  return Fn(e).getComputedStyle(e);
}
function GH(e) {
  if (ME(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    SS(e) && e.host || // Fallback.
    IE(e)
  );
  return SS(t) ? t.host : t;
}
function AE(e) {
  const t = GH(e);
  return UH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gg(t) && $E(t) ? t : AE(t);
}
function Qc(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = AE(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Fn(o);
  return i ? t.concat(a, a.visualViewport || [], $E(o) ? o : [], a.frameElement && n ? Qc(a.frameElement) : []) : t.concat(o, Qc(o, [], n));
}
function KH(e) {
  const t = Kg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Gg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = qc(n) !== i || qc(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Yg(e) {
  return wm(e) ? e : e.contextElement;
}
function Fp(e) {
  const t = Yg(e);
  if (!Gg(t))
    return Xc(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = KH(t);
  let a = (i ? qc(n.width) : n.width) / r, s = (i ? qc(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const YH = /* @__PURE__ */ Xc(0);
function qH(e) {
  const t = Fn(e);
  return !HH() || !t.visualViewport ? YH : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function XH(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Fn(e) ? !1 : t;
}
function xS(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Yg(e);
  let a = Xc(1);
  t && (r ? wm(r) && (a = Fp(r)) : a = Fp(e));
  const s = XH(i, n, r) ? qH(i) : Xc(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Fn(i), p = r && wm(r) ? Fn(r) : r;
    let g = f.frameElement;
    for (; g && r && p !== f; ) {
      const y = Fp(g), b = g.getBoundingClientRect(), h = Kg(g), v = b.left + (g.clientLeft + parseFloat(h.paddingLeft)) * y.x, S = b.top + (g.clientTop + parseFloat(h.paddingTop)) * y.y;
      l *= y.x, u *= y.y, c *= y.x, d *= y.y, l += v, u += S, g = Fn(g).frameElement;
    }
  }
  return WH({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function QH(e, t) {
  let n = null, r;
  const o = IE(e);
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
    const p = yu(c), g = yu(o.clientWidth - (u + d)), y = yu(o.clientHeight - (c + f)), b = yu(u), v = {
      rootMargin: -p + "px " + -g + "px " + -y + "px " + -b + "px",
      threshold: BH(0, VH(1, l)) || 1
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
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, v);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function ZH(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Yg(e), c = o || i ? [...u ? Qc(u) : [], ...Qc(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  const d = u && s ? QH(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((h) => {
    let [v] = h;
    v && v.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let g, y = l ? xS(e) : null;
  l && b();
  function b() {
    const h = xS(e);
    y && (h.x !== y.x || h.y !== y.y || h.width !== y.width || h.height !== y.height) && n(), y = h, g = requestAnimationFrame(b);
  }
  return n(), () => {
    c.forEach((h) => {
      o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
var Cm = m.useLayoutEffect, JH = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Zc = function() {
};
function eU(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function tU(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(eU(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var wS = function(t) {
  return cU(t) ? t.filter(Boolean) : Ko(t) === "object" && t !== null ? [t] : [];
}, DE = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Mr(t, JH);
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
function nU(e) {
  return sf(e) ? window.innerHeight : e.clientHeight;
}
function FE(e) {
  return sf(e) ? window.pageYOffset : e.scrollTop;
}
function Jc(e, t) {
  if (sf(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function rU(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function oU(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function bu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Zc, o = FE(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = oU(s, o, i, n);
    Jc(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function CS(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? Jc(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && Jc(e, Math.max(t.offsetTop - o, 0));
}
function iU(e) {
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
function kS() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function aU() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var LE = !1, sU = {
  get passive() {
    return LE = !0;
  }
}, Su = typeof window < "u" ? window : {};
Su.addEventListener && Su.removeEventListener && (Su.addEventListener("p", Zc, sU), Su.removeEventListener("p", Zc, !1));
var lU = LE;
function uU(e) {
  return e != null;
}
function cU(e) {
  return Array.isArray(e);
}
function xu(e, t, n) {
  return e ? t : n;
}
var dU = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = Object.entries(t).filter(function(a) {
    var s = Sr(a, 1), l = s[0];
    return !r.includes(l);
  });
  return i.reduce(function(a, s) {
    var l = Sr(s, 2), u = l[0], c = l[1];
    return a[u] = c, a;
  }, {});
}, fU = ["children", "innerProps"], pU = ["children", "innerProps"];
function hU(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = rU(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, g = f.height, y = f.top, b = n.offsetParent.getBoundingClientRect(), h = b.top, v = a ? window.innerHeight : nU(l), S = FE(l), x = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = h - k, E = v - y, T = P + S, M = d - S - y, I = p - v + S + x, D = S + y - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (E >= g)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= g && !a)
        return i && bu(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && E >= r) {
        i && bu(l, I, G);
        var H = a ? E - x : M - x;
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
        return i && Jc(l, I), {
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
        return i && bu(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && T >= r || a && P >= r) {
        var K = t;
        return (!a && T >= r || a && P >= r) && (K = a ? P - k : T - k), i && bu(l, D, G), {
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
function mU(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var zE = function(t) {
  return t === "auto" ? "bottom" : t;
}, vU = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return Z((r = {
    label: "menu"
  }, Li(r, mU(o), "100%"), Li(r, "position", "absolute"), Li(r, "width", "100%"), Li(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, jE = /* @__PURE__ */ m.createContext(null), gU = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = m.useContext(jE) || {}, c = u.setPortalPlacement, d = m.useRef(null), f = m.useState(o), p = Sr(f, 2), g = p[0], y = p[1], b = m.useState(null), h = Sr(b, 2), v = h[0], S = h[1], x = l.spacing.controlHeight;
  return Cm(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", E = s && !P, T = hU({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: E,
        isFixedPosition: P,
        controlHeight: x
      });
      y(T.maxHeight), S(T.placement), c == null || c(T.placement);
    }
  }, [o, i, a, s, r, c, x]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: v || zE(i),
      maxHeight: g
    })
  });
}, yU = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return ee("div", q({}, Ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, bU = yU, SU = function(t, n) {
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
}, xU = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return ee("div", q({}, Ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, NE = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, wU = NE, CU = NE, kU = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Mr(t, fU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, PU = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Mr(t, pU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, EU = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, TU = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = m.useRef(null), u = m.useRef(null), c = m.useState(zE(a)), d = Sr(c, 2), f = d[0], p = d[1], g = m.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), y = m.useState(null), b = Sr(y, 2), h = b[0], v = b[1], S = m.useCallback(function() {
    if (o) {
      var E = iU(o), T = s === "fixed" ? 0 : window.pageYOffset, M = E[f] + T;
      (M !== (h == null ? void 0 : h.offset) || E.left !== (h == null ? void 0 : h.rect.left) || E.width !== (h == null ? void 0 : h.rect.width)) && v({
        offset: M,
        rect: E
      });
    }
  }, [o, s, f, h == null ? void 0 : h.offset, h == null ? void 0 : h.rect.left, h == null ? void 0 : h.rect.width]);
  Cm(function() {
    S();
  }, [S]);
  var x = m.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = ZH(o, l.current, S, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, S]);
  Cm(function() {
    x();
  }, [x]);
  var k = m.useCallback(function(E) {
    l.current = E, x();
  }, [x]);
  if (!n && s !== "fixed" || !h)
    return null;
  var P = ee("div", q({
    ref: k
  }, Ue(Z(Z({}, t), {}, {
    offset: h.offset,
    position: s,
    rect: h.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), i), r);
  return ee(jE.Provider, {
    value: g
  }, n ? /* @__PURE__ */ yd.createPortal(P, n) : P);
}, _U = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, OU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return ee("div", q({}, Ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, MU = function(t, n) {
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
}, IU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return ee("div", q({}, Ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, RU = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, $U = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, PS, AU = ["size"], DU = ["innerProps", "isRtl", "size"], FU = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, VE = function(t) {
  var n = t.size, r = Mr(t, AU);
  return ee("svg", q({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: FU
  }, r));
}, qg = function(t) {
  return ee(VE, q({
    size: 20
  }, t), ee("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, BE = function(t) {
  return ee(VE, q({
    size: 20
  }, t), ee("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, WE = function(t, n) {
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
}, LU = WE, zU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || ee(BE, null));
}, jU = WE, NU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || ee(qg, null));
}, VU = function(t, n) {
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
}, BU = function(t) {
  var n = t.innerProps;
  return ee("span", q({}, n, Ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, WU = vC(PS || (PS = NH([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), HU = function(t, n) {
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
    css: /* @__PURE__ */ Av({
      animation: "".concat(WU, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, UU = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = Mr(t, DU);
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
}, GU = function(t, n) {
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
}, KU = function(t) {
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
}, YU = KU, qU = ["data"], XU = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, QU = function(t) {
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
}, ZU = function(t, n) {
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
}, JU = function(t) {
  var n = DE(t);
  n.data;
  var r = Mr(n, qU);
  return ee("div", q({}, Ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, eG = QU, tG = ["innerRef", "isDisabled", "isHidden", "inputClassName"], nG = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, rG), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, HE = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, rG = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, HE)
}, oG = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, HE);
}, iG = function(t) {
  var n = t.cx, r = t.value, o = DE(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Mr(o, tG);
  return ee("div", q({}, Ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), ee("input", q({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: oG(s),
    disabled: a
  }, u)));
}, aG = iG, sG = function(t, n) {
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
}, lG = function(t, n) {
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
}, uG = function(t, n) {
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
}, UE = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", r, n);
}, cG = UE, dG = UE;
function fG(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(qg, {
    size: 14
  }));
}
var pG = function(t) {
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
}, hG = pG, mG = function(t, n) {
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
}, vG = function(t) {
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
}, gG = vG, yG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, bG = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, SG = bG, xG = function(t, n) {
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
}, wG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return ee("div", q({}, Ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, CG = wG, kG = {
  ClearIndicator: NU,
  Control: YU,
  DropdownIndicator: zU,
  DownChevron: BE,
  CrossIcon: qg,
  Group: eG,
  GroupHeading: JU,
  IndicatorsContainer: $U,
  IndicatorSeparator: BU,
  Input: aG,
  LoadingIndicator: UU,
  Menu: bU,
  MenuList: xU,
  MenuPortal: TU,
  LoadingMessage: PU,
  NoOptionsMessage: kU,
  MultiValue: hG,
  MultiValueContainer: cG,
  MultiValueLabel: dG,
  MultiValueRemove: fG,
  Option: gG,
  Placeholder: SG,
  SelectContainer: OU,
  SingleValue: CG,
  ValueContainer: IU
}, PG = function(t) {
  return Z(Z({}, kG), t.components);
}, ES = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function EG(e, t) {
  return !!(e === t || ES(e) && ES(t));
}
function TG(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!EG(e[n], t[n]))
      return !1;
  return !0;
}
function _G(e, t) {
  t === void 0 && (t = TG);
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
var OG = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, MG = function(t) {
  return ee("span", q({
    css: OG
  }, t));
}, TS = MG, IG = {
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
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(g, y) {
      return g && g.length ? "".concat(g.indexOf(y) + 1, " of ").concat(g.length) : "";
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
}, RG = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, g = l.isOptionDisabled, y = l.isSearchable, b = l.menuIsOpen, h = l.options, v = l.screenReaderStatus, S = l.tabSelectsValue, x = l["aria-label"], k = l["aria-live"], P = m.useMemo(function() {
    return Z(Z({}, IG), c || {});
  }, [c]), E = m.useMemo(function() {
    var L = "";
    if (n && P.onChange) {
      var W = n.option, K = n.options, $ = n.removedValue, A = n.removedValues, z = n.value, U = function(se) {
        return Array.isArray(se) ? null : se;
      }, V = $ || W || U(z), Y = V ? d(V) : "", j = K || A || void 0, te = j ? j.map(d) : [], le = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: V && g(V, s),
        label: Y,
        labels: te
      }, n);
      L = P.onChange(le);
    }
    return L;
  }, [n, P, g, s, d]), T = m.useMemo(function() {
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
  }, [r, o, d, g, P, i, s]), M = m.useMemo(function() {
    var L = "";
    if (b && h.length && P.onFilter) {
      var W = v({
        count: i.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: W
      });
    }
    return L;
  }, [i, f, b, P, h, v]), I = m.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : b ? "menu" : "input";
      L = P.guidance({
        "aria-label": x,
        context: W,
        isDisabled: r && g(r, s),
        isMulti: p,
        isSearchable: y,
        tabSelectsValue: S
      });
    }
    return L;
  }, [x, r, o, p, g, y, b, P, s, S]), D = "".concat(T, " ").concat(M, " ").concat(I), G = ee(m.Fragment, null, ee("span", {
    id: "aria-selection"
  }, E), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(m.Fragment, null, ee(TS, {
    id: u
  }, H && G), ee(TS, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, $G = RG, km = [{
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
}], AG = new RegExp("[" + km.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), GE = {};
for (var zp = 0; zp < km.length; zp++)
  for (var jp = km[zp], Np = 0; Np < jp.letters.length; Np++)
    GE[jp.letters[Np]] = jp.base;
var KE = function(t) {
  return t.replace(AG, function(n) {
    return GE[n];
  });
}, DG = _G(KE), _S = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, FG = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, LG = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: FG,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? _S(r) : r, d = l ? _S(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = DG(c), d = KE(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, zG = ["innerRef"];
function jG(e) {
  var t = e.innerRef, n = Mr(e, zG), r = dU(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Av({
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
var NG = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function VG(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = m.useRef(!1), s = m.useRef(!1), l = m.useRef(0), u = m.useRef(null), c = m.useCallback(function(b, h) {
    if (u.current !== null) {
      var v = u.current, S = v.scrollTop, x = v.scrollHeight, k = v.clientHeight, P = u.current, E = h > 0, T = x - k - S, M = !1;
      T > h && a.current && (r && r(b), a.current = !1), E && s.current && (i && i(b), s.current = !1), E && h > T ? (n && !a.current && n(b), P.scrollTop = x, M = !0, a.current = !0) : !E && -h > S && (o && !s.current && o(b), P.scrollTop = 0, M = !0, s.current = !0), M && NG(b);
    }
  }, [n, r, o, i]), d = m.useCallback(function(b) {
    c(b, b.deltaY);
  }, [c]), f = m.useCallback(function(b) {
    l.current = b.changedTouches[0].clientY;
  }, []), p = m.useCallback(function(b) {
    var h = l.current - b.changedTouches[0].clientY;
    c(b, h);
  }, [c]), g = m.useCallback(function(b) {
    if (b) {
      var h = lU ? {
        passive: !1
      } : !1;
      b.addEventListener("wheel", d, h), b.addEventListener("touchstart", f, h), b.addEventListener("touchmove", p, h);
    }
  }, [p, f, d]), y = m.useCallback(function(b) {
    b && (b.removeEventListener("wheel", d, !1), b.removeEventListener("touchstart", f, !1), b.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return m.useEffect(function() {
    if (t) {
      var b = u.current;
      return g(b), function() {
        y(b);
      };
    }
  }, [t, g, y]), function(b) {
    u.current = b;
  };
}
var OS = ["boxSizing", "height", "overflow", "paddingRight", "position"], MS = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function IS(e) {
  e.preventDefault();
}
function RS(e) {
  e.stopPropagation();
}
function $S() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function AS() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var DS = !!(typeof window < "u" && window.document && window.document.createElement), Ga = 0, pi = {
  capture: !1,
  passive: !1
};
function BG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = m.useRef({}), i = m.useRef(null), a = m.useCallback(function(l) {
    if (DS) {
      var u = document.body, c = u && u.style;
      if (r && OS.forEach(function(g) {
        var y = c && c[g];
        o.current[g] = y;
      }), r && Ga < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(MS).forEach(function(g) {
          var y = MS[g];
          c && (c[g] = y);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && AS() && (u.addEventListener("touchmove", IS, pi), l && (l.addEventListener("touchstart", $S, pi), l.addEventListener("touchmove", RS, pi))), Ga += 1;
    }
  }, [r]), s = m.useCallback(function(l) {
    if (DS) {
      var u = document.body, c = u && u.style;
      Ga = Math.max(Ga - 1, 0), r && Ga < 1 && OS.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && AS() && (u.removeEventListener("touchmove", IS, pi), l && (l.removeEventListener("touchstart", $S, pi), l.removeEventListener("touchmove", RS, pi)));
    }
  }, [r]);
  return m.useEffect(function() {
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
var WG = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, HG = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function UG(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = VG({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = BG({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return ee(m.Fragment, null, n && ee("div", {
    onClick: WG,
    css: HG
  }), t(d));
}
var GG = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, KG = function(t) {
  var n = t.name, r = t.onFocus;
  return ee("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: GG,
    value: "",
    onChange: function() {
    }
  });
}, YG = KG, qG = function(t) {
  return t.label;
}, XG = function(t) {
  return t.label;
}, QG = function(t) {
  return t.value;
}, ZG = function(t) {
  return !!t.isDisabled;
}, JG = {
  clearIndicator: jU,
  container: _U,
  control: GU,
  dropdownIndicator: LU,
  group: XU,
  groupHeading: ZU,
  indicatorsContainer: RU,
  indicatorSeparator: VU,
  input: nG,
  loadingIndicator: HU,
  loadingMessage: CU,
  menu: vU,
  menuList: SU,
  menuPortal: EU,
  multiValue: sG,
  multiValueLabel: lG,
  multiValueRemove: uG,
  noOptionsMessage: wU,
  option: mG,
  placeholder: yG,
  singleValue: xG,
  valueContainer: MU
}, eK = {
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
}, tK = 4, YE = 4, nK = 38, rK = YE * 2, oK = {
  baseUnit: YE,
  controlHeight: nK,
  menuGutter: rK
}, Vp = {
  borderRadius: tK,
  colors: eK,
  spacing: oK
}, iK = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: kS(),
  captureMenuScroll: !kS(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: LG(),
  formatGroupLabel: qG,
  getOptionLabel: XG,
  getOptionValue: QG,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: ZG,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !aU(),
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
function FS(e, t, n, r) {
  var o = ZE(e, t, n), i = JE(e, t, n), a = QE(e, t), s = ed(e, t);
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
function qE(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return FS(e, a, t, s);
      }).filter(function(a) {
        return LS(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = FS(e, n, t, r);
    return LS(e, i) ? i : void 0;
  }).filter(uU);
}
function XE(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, OE(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function aK(e, t) {
  return XE(qE(e, t));
}
function LS(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!tT(e) || !i) && eT(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function sK(e, t) {
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
function lK(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var QE = function(t, n) {
  return t.getOptionLabel(n);
}, ed = function(t, n) {
  return t.getOptionValue(n);
};
function ZE(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function JE(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = ed(e, t);
  return n.some(function(o) {
    return ed(e, o) === r;
  });
}
function eT(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var tT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, uK = 1, nT = /* @__PURE__ */ function(e) {
  RH(n, e);
  var t = FH(n);
  function n(r) {
    var o;
    if (MH(this, n), o = t.call(this, r), o.state = {
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
        var y = o.getOptionValue(s);
        o.setValue(f.filter(function(b) {
          return o.getOptionValue(b) !== y;
        }), "deselect-option", s);
      } else if (!g)
        c ? o.setValue([].concat(OE(f), [s]), "select-option", s) : o.setValue(s, "select-option");
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
      }), f = xu(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(xu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = xu(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return tU.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return QE(o.props, s);
    }, o.getOptionValue = function(s) {
      return ed(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = JG[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return PG(o.props);
    }, o.buildCategorizedOptions = function() {
      return qE(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return XE(o.buildCategorizedOptions());
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
      return tT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, g = l.isDisabled, y = l.menuIsOpen, b = l.onKeyDown, h = l.tabSelectsValue, v = l.openMenuOnFocus, S = o.state, x = S.focusedOption, k = S.focusedValue, P = S.selectValue;
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
            if (o.isComposing || s.shiftKey || !y || !h || !x || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            v && o.isOptionSelected(x, P))
              return;
            o.selectOption(x);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (y) {
              if (!x || o.isComposing)
                return;
              o.selectOption(x);
              break;
            }
            return;
          case "Escape":
            y ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!y) {
              o.openMenu("first");
              break;
            }
            if (!x)
              return;
            o.selectOption(x);
            break;
          case "ArrowUp":
            y ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            y ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!y)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!y)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!y)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!y)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++uK), o.state.selectValue = wS(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return IH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && CS(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (CS(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, g = d.options, y = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: y,
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
      return ZE(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return JE(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return eT(this.props, o, i);
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
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), g = p.Input, y = this.state, b = y.inputIsHidden, h = y.ariaSelection, v = this.commonProps, S = s || this.getElementId("input"), x = Z(Z(Z({
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
        }), this.hasValue() ? (h == null ? void 0 : h.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ m.createElement(g, q({}, v, {
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
        }, x)) : /* @__PURE__ */ m.createElement(jG, q({
          id: S,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Zc,
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
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, g = p.controlShouldRenderValue, y = p.isDisabled, b = p.isMulti, h = p.inputValue, v = p.placeholder, S = this.state, x = S.selectValue, k = S.focusedValue, P = S.isFocused;
      if (!this.hasValue() || !g)
        return h ? null : /* @__PURE__ */ m.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: y,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), v);
      if (b)
        return x.map(function(T, M) {
          var I = T === k, D = "".concat(o.getOptionLabel(T), "-").concat(o.getOptionValue(T));
          return /* @__PURE__ */ m.createElement(a, q({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: I,
            isDisabled: y,
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
      if (h)
        return null;
      var E = x[0];
      return /* @__PURE__ */ m.createElement(c, q({}, f, {
        data: E,
        isDisabled: y
      }), this.formatOptionLabel(E, "value"));
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
      return /* @__PURE__ */ m.createElement(i, q({}, a, {
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
      return /* @__PURE__ */ m.createElement(i, q({}, a, {
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
      return /* @__PURE__ */ m.createElement(a, q({}, s, {
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
      return /* @__PURE__ */ m.createElement(i, q({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, g = this.commonProps, y = this.state.focusedOption, b = this.props, h = b.captureMenuScroll, v = b.inputValue, S = b.isLoading, x = b.loadingMessage, k = b.minMenuHeight, P = b.maxMenuHeight, E = b.menuIsOpen, T = b.menuPlacement, M = b.menuPosition, I = b.menuPortalTarget, D = b.menuShouldBlockScroll, G = b.menuShouldScrollIntoView, H = b.noOptionsMessage, L = b.onMenuScrollToTop, W = b.onMenuScrollToBottom;
      if (!E)
        return null;
      var K = function(j, te) {
        var le = j.type, ae = j.data, se = j.isDisabled, me = j.isSelected, ke = j.label, Je = j.value, qe = y === ae, an = se ? void 0 : function() {
          return o.onOptionHover(ae);
        }, En = se ? void 0 : function() {
          return o.selectOption(ae);
        }, Ir = "".concat(o.getElementId("option"), "-").concat(te), fe = {
          id: Ir,
          onClick: En,
          onMouseMove: an,
          onMouseOver: an,
          tabIndex: -1
        };
        return /* @__PURE__ */ m.createElement(p, q({}, g, {
          innerProps: fe,
          data: ae,
          isDisabled: se,
          isSelected: me,
          key: Ir,
          label: ke,
          type: le,
          value: Je,
          isFocused: qe,
          innerRef: qe ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(j.data, "menu"));
      }, $;
      if (this.hasOptions())
        $ = this.getCategorizedOptions().map(function(Y) {
          if (Y.type === "group") {
            var j = Y.data, te = Y.options, le = Y.index, ae = "".concat(o.getElementId("group"), "-").concat(le), se = "".concat(ae, "-heading");
            return /* @__PURE__ */ m.createElement(a, q({}, g, {
              key: ae,
              data: j,
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
          inputValue: v
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ m.createElement(d, g, A);
      } else {
        var z = H({
          inputValue: v
        });
        if (z === null)
          return null;
        $ = /* @__PURE__ */ m.createElement(f, g, z);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: T,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ m.createElement(gU, q({}, g, U), function(Y) {
        var j = Y.ref, te = Y.placerProps, le = te.placement, ae = te.maxHeight;
        return /* @__PURE__ */ m.createElement(l, q({}, g, U, {
          innerRef: j,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: S,
          placement: le
        }), /* @__PURE__ */ m.createElement(UG, {
          captureEnabled: h,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ m.createElement(u, q({}, g, {
            innerRef: function(ke) {
              o.getMenuListRef(ke), se(ke);
            },
            isLoading: S,
            maxHeight: ae,
            focusedOption: y
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ m.createElement(c, q({}, g, {
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
        return /* @__PURE__ */ m.createElement(YG, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(y) {
              return o.getOptionValue(y);
            }).join(a);
            return /* @__PURE__ */ m.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(y, b) {
              return /* @__PURE__ */ m.createElement("input", {
                key: "i-".concat(b),
                name: u,
                type: "hidden",
                value: o.getOptionValue(y)
              });
            }) : /* @__PURE__ */ m.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ m.createElement("div", null, p);
          }
        else {
          var g = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ m.createElement("input", {
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
      return /* @__PURE__ */ m.createElement($G, q({}, o, {
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
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, g = this.state.isFocused, y = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ m.createElement(s, q({}, y, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: g
      }), this.renderLiveRegion(), /* @__PURE__ */ m.createElement(i, q({}, y, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: g,
        menuIsOpen: p
      }), /* @__PURE__ */ m.createElement(l, q({}, y, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ m.createElement(a, q({}, y, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, g = o.menuIsOpen, y = o.inputValue, b = o.isMulti, h = wS(p), v = {};
      if (a && (p !== a.value || f !== a.options || g !== a.menuIsOpen || y !== a.inputValue)) {
        var S = g ? aK(o, h) : [], x = s ? sK(i, h) : null, k = lK(i, S);
        v = {
          selectValue: h,
          focusedOption: k,
          focusedValue: x,
          clearFocusValueOnUpdate: !1
        };
      }
      var P = l != null && o !== a ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, E = u, T = c && d;
      return c && !T && (E = {
        value: xu(b, h, h[0] || null),
        options: h,
        action: "initial-input-focus"
      }, T = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (E = null), Z(Z(Z({}, v), P), {}, {
        prevProps: o,
        ariaSelection: E,
        prevWasFocused: T
      });
    }
  }]), n;
}(m.Component);
nT.defaultProps = iK;
var cK = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = OH(e);
  return /* @__PURE__ */ m.createElement(nT, q({
    ref: t
  }, n));
}), dK = cK, fK = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function Pm() {
  return Pm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Pm.apply(this, arguments);
}
function pK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var rT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = pK(t, fK);
  return Pm({}, n);
}, hK = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, mK = function(t) {
  return hK(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, zn = function(t) {
  var n = Zo(), r = mK(n.components.Input.defaultProps.size), o = t ?? r, i = G9(typeof o == "string" ? [o] : o, {
    fallback: "md"
  }) || r;
  return i;
};
function ba() {
  return ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ba.apply(this, arguments);
}
var vK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = ba({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, a ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ re.createElement($e, ba({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, gK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, g = l.controlShouldRenderValue, y = zn(c), b = mt("Input", {
    size: y,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), h = {
    display: i && a && g ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: b.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, v = u != null && u.valueContainer ? u.valueContainer(h, t) : h;
  return /* @__PURE__ */ re.createElement($e, ba({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: v
  }), n);
}, yK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ re.createElement($e, ba({}, i, {
    className: o({
      indicators: !0
    }, r),
    sx: l
  }), n);
}, bK = ["height", "h"];
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kn.apply(this, arguments);
}
function SK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var xK = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, g = c.focusBorderColor, y = c.errorBorderColor, b = c.isInvalid, h = c.isReadOnly, v = zn(f), S = mt("Input", {
    size: v,
    variant: p,
    focusBorderColor: g,
    errorBorderColor: y
  }), x = S.field, k = x.height, P = x.h, E = SK(x, bK), T = k || P, M = kn({}, E, {
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
  return /* @__PURE__ */ re.createElement($e, kn({
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
    "data-readonly": h ? !0 : void 0
  }), o);
}, wK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = kn({
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
}, CK = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, kn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, kK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = zn(u), g = mt("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), y = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, b = y[p], h = kn({}, g.addon, {
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
  }), v = s != null && s.dropdownIndicator ? s.dropdownIndicator(h, t) : h, S = {
    height: "1em",
    width: "1em"
  }, x = s != null && s.downChevron ? s.downChevron(S, t) : S;
  return /* @__PURE__ */ re.createElement($e, kn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: v
  }), n || /* @__PURE__ */ re.createElement(CK, {
    sx: x
  }));
}, PK = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, kn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, EK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = zn(l), c = Jo("CloseButton", {
    size: u
  }), d = kn({}, c, {
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
  return /* @__PURE__ */ re.createElement($e, kn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ re.createElement(PK, {
    sx: g
  }));
}, TK = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = zn(s), g = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, y = g[p], b = {
    marginRight: 3
  }, h = a != null && a.loadingIndicator ? a.loadingIndicator(b, t) : b;
  return /* @__PURE__ */ re.createElement(Ud, kn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: h
  }, o, {
    size: f || y,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const _K = xK;
var OK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function _s() {
  return _s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _s.apply(this, arguments);
}
function MK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var IK = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = rT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = MK(l, OK), g = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, y = {
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
    _after: _s({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, g)
  }, b = a != null && a.inputContainer ? a.inputContainer(y, t) : y, h = _s({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, g), v = a != null && a.input ? a.input(h, t) : h;
  return /* @__PURE__ */ re.createElement($e, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: b
  }, /* @__PURE__ */ re.createElement(X.input, _s({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: v,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const RK = IK;
var $K = ["data"];
function AK(e, t) {
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
var DK = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, FK = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[DK(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ re.createElement(Qd, null, /* @__PURE__ */ re.createElement($e, Wt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const LK = FK;
var zK = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, g = c.focusBorderColor, y = c.errorBorderColor, b = mt("Menu"), h = zn(f), v = mt("Input", {
    size: h,
    variant: p,
    focusBorderColor: g,
    errorBorderColor: y
  }), S = v.field, x = Wt({}, b.list, {
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
  return /* @__PURE__ */ re.createElement($e, Wt({
    role: "listbox"
  }, u, {
    className: o({
      "menu-list": !0,
      "menu-list--is-multi": l
    }, r),
    sx: k,
    ref: i
  }), a);
}, jK = function(t) {
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
  return /* @__PURE__ */ re.createElement($e, Wt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--loading": !0
    }, r),
    sx: f
  }), n);
}, NK = function(t) {
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
  return /* @__PURE__ */ re.createElement($e, Wt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, r),
    sx: f
  }), n);
}, VK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, g = {}, y = p != null && p.group ? p.group(g, t) : g;
  return /* @__PURE__ */ re.createElement($e, Wt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: y
  }), /* @__PURE__ */ re.createElement(s, Wt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ re.createElement($e, null, n));
}, BK = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = rT(t);
  l.data;
  var u = AK(l, $K), c = mt("Menu"), d = zn(a), f = {
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
  }), y = i != null && i.groupHeading ? i.groupHeading(g, t) : g;
  return /* @__PURE__ */ re.createElement($e, Wt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: y
  }));
}, WK = function(t) {
  return /* @__PURE__ */ re.createElement("svg", Wt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ re.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, HK = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, g = c.hideSelectedOptions, y = c.selectedOptionStyle, b = c.selectedOptionColorScheme, h = mt("Menu").item, v = zn(f), S = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = $y(b + ".500", b + ".300"), P = $y("white", "black"), E = y === "check" && (!p || g === !1), T = y === "color", M = Wt({}, h, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: v,
    paddingX: S[v],
    paddingY: x[v]
  }, T && {
    _selected: {
      bg: k,
      color: P,
      _active: {
        bg: k
      }
    }
  }), I = d != null && d.option ? d.option(M, t) : M;
  return /* @__PURE__ */ re.createElement($e, Wt({
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
  }), E && /* @__PURE__ */ re.createElement(Zd, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ re.createElement(WK, null)), a);
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
var UK = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, GK = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, oT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, KK = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, g = o.Label, y = o.Remove, b = d.chakraStyles, h = d.colorScheme, v = d.tagVariant, S = d.size, x = zn(S), k = "", P = "", E = !1;
  UK(a) && (k = a.colorScheme), GK(a) && (P = a.variant), oT(a) && (E = a.isFixed);
  var T = mt("Tag", {
    size: x,
    colorScheme: k || h,
    variant: P || v || (E ? "solid" : "subtle")
  }), M = $n({}, T.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), I = b != null && b.multiValue ? b.multiValue(M, t) : M, D = $n({}, T.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), G = b != null && b.multiValueLabel ? b.multiValueLabel(D, t) : D, H = $n({}, T.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = b != null && b.multiValueRemove ? b.multiValueRemove(H, t) : H;
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
  }, /* @__PURE__ */ re.createElement(g, {
    data: a,
    innerProps: {
      className: i({
        "multi-value__label": !0
      }, r)
    },
    sx: G,
    selectProps: d
  }, n), /* @__PURE__ */ re.createElement(y, {
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
}, YK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, $n({}, r, {
    sx: o
  }), n);
}, qK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, $n({}, r, {
    sx: o
  }), n);
}, XK = function(t) {
  return /* @__PURE__ */ re.createElement(Pn, $n({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, QK = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return oT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement($e, $n({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement(XK, null));
};
const ZK = KK;
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
var JK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement($e, Em({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const eY = JK;
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
var tY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement($e, Tm({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const nY = tY;
var rY = {
  ClearIndicator: EK,
  Control: _K,
  DropdownIndicator: kK,
  Group: VK,
  GroupHeading: BK,
  IndicatorSeparator: wK,
  IndicatorsContainer: yK,
  Input: RK,
  LoadingIndicator: TK,
  LoadingMessage: jK,
  Menu: LK,
  MenuList: zK,
  MultiValue: ZK,
  MultiValueContainer: YK,
  MultiValueLabel: qK,
  MultiValueRemove: QK,
  NoOptionsMessage: NK,
  Option: HK,
  Placeholder: eY,
  SelectContainer: vK,
  SingleValue: nY,
  ValueContainer: gK
};
const oY = rY;
var iY = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function td() {
  return td = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, td.apply(this, arguments);
}
function aY(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var sY = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, g = t.tagVariant, y = t.selectedOptionStyle, b = y === void 0 ? "color" : y, h = t.selectedOptionColorScheme, v = t.selectedOptionColor, S = t.variant, x = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, E = P === void 0 ? {} : P, T = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = aY(t, iY), G = Zo(), H = G.components.Input.defaultProps.variant, L = VP({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: T,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = b, $ = ["color", "check"];
  $.includes(b) || (K = "color");
  var A = h || v || "blue";
  typeof A != "string" && (A = "blue");
  var z = td({
    // Allow overriding of custom components
    components: td({}, oY, o),
    // Custom select props
    colorScheme: s,
    size: i,
    tagVariant: g,
    selectedOptionStyle: K,
    selectedOptionColorScheme: A,
    variant: S ?? H,
    chakraStyles: E,
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
  return z;
};
const lY = sY;
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
var uY = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = lY(e);
  return /* @__PURE__ */ re.createElement(dK, _m({
    ref: t
  }, n));
});
const cY = uY;
function dY({ workflow: e }) {
  var c;
  const [t, n] = m.useState([]), [r, o] = m.useState(""), i = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [a, s] = m.useState(i);
  if (m.useEffect(() => {
    Ce && n(Ce.listAll() ?? []);
  }, []), m.useEffect(() => {
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
  return /* @__PURE__ */ w.jsxs(Ng, { isLazy: !0, children: [
    /* @__PURE__ */ w.jsx(jg, { children: /* @__PURE__ */ w.jsx(yn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ w.jsx(xE, { color: "#718096" }) }) }),
    /* @__PURE__ */ w.jsxs(Hg, { children: [
      /* @__PURE__ */ w.jsx(Vg, {}),
      /* @__PURE__ */ w.jsx(Wg, {}),
      /* @__PURE__ */ w.jsx(fE, { children: /* @__PURE__ */ w.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ w.jsxs(Bg, { children: [
        /* @__PURE__ */ w.jsx(
          cY,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            onChange: (d) => {
              s(d), ym(e.id, {
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
          $t,
          {
            gap: 4,
            mt: Math.min(u, Math.max(t.length, 3) * 37),
            children: [
              /* @__PURE__ */ w.jsx(
                qd,
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
                yn,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ w.jsx(SE, { size: 16 }),
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
function fY({
  isSelected: e,
  workflow: t,
  loadWorkflowID: n,
  onDelete: r
}) {
  const { colorMode: o } = ka();
  return /* @__PURE__ */ w.jsxs($t, { w: "100%", justify: "space-between", children: [
    /* @__PURE__ */ w.jsxs(
      $e,
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
          /* @__PURE__ */ w.jsx(tr, { fontWeight: "500", children: t.name ?? "untitled" }),
          /* @__PURE__ */ w.jsxs(tr, { color: "GrayText", ml: 2, fontSize: "sm", children: [
            "Updated: ",
            kE(t.updateTime)
          ] })
        ]
      }
    ),
    /* @__PURE__ */ w.jsx(dY, { workflow: t }),
    /* @__PURE__ */ w.jsx(Ng, { isLazy: !0, children: ({ isOpen: i, onClose: a }) => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx(jg, { children: /* @__PURE__ */ w.jsx(wE, { color: "#F56565", cursor: "pointer" }) }),
      /* @__PURE__ */ w.jsxs(Hg, { children: [
        /* @__PURE__ */ w.jsx(Vg, {}),
        /* @__PURE__ */ w.jsx(Wg, {}),
        /* @__PURE__ */ w.jsxs(Bg, { children: [
          /* @__PURE__ */ w.jsx(tr, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
          /* @__PURE__ */ w.jsx(
            yn,
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
function pY() {
  const e = m.useRef(null), { setRecentFiles: t } = m.useContext(TE), n = async (o) => {
    const i = o.target.files;
    if (!i)
      return;
    const a = Array.from(i);
    console.log("filearr", a), await Promise.all(
      a.map((s) => r(s))
    ), t && t(Ju());
  }, r = async (o) => new Promise((i, a) => {
    const s = new FileReader();
    s.onload = (l) => {
      var u;
      try {
        const c = (u = l.target) == null ? void 0 : u.result;
        typeof c == "string" ? i(
          Sm({
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
    yn,
    {
      leftIcon: /* @__PURE__ */ w.jsx(ZW, { size: 18 }),
      variant: "outline",
      iconSpacing: 1,
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
function hY({
  onclose: e,
  loadWorkflowID: t,
  isOpen: n
}) {
  const [r, o] = m.useState([]), { curFlowID: i } = m.useContext(EE), [a, s] = m.useState(), [l, u] = m.useState(!1), c = m.useRef(
    window.localStorage.getItem(gS) ?? Ur.RECENTLY_MODIFIED
  ), d = (b) => {
    s(b), o(Ju().filter((h) => {
      var v;
      return (v = h.tags) == null ? void 0 : v.includes(b);
    }));
  }, f = () => {
    const b = Ju(c.current);
    o(b);
  }, p = (b) => {
    o(PE(r, b)), c.current = b, window.localStorage.setItem(gS, b);
  }, g = (b) => {
    yH(b), f();
  };
  m.useEffect(() => {
    f();
  }, []);
  const y = 440;
  return /* @__PURE__ */ w.jsx(TE.Provider, { value: { setRecentFiles: o }, children: /* @__PURE__ */ w.jsx(
    $e,
    {
      style: { width: y, zIndex: 10 },
      children: /* @__PURE__ */ w.jsx(
        N1,
        {
          width: y,
          height: "100vh",
          px: 4,
          pt: 4,
          overflowY: "auto",
          overflowX: "hidden",
          gap: 6,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10,
          children: /* @__PURE__ */ w.jsxs(_g, { children: [
            /* @__PURE__ */ w.jsxs(
              N1,
              {
                alignItems: "center",
                justifyContent: "space-between",
                position: "sticky",
                top: 0,
                left: 0,
                right: 0,
                shadow: "none",
                direction: "row",
                zIndex: 10,
                children: [
                  /* @__PURE__ */ w.jsxs($t, { gap: 4, children: [
                    /* @__PURE__ */ w.jsx(tr, { fontSize: 20, fontWeight: 600, mr: 4, children: "Workflows" }),
                    /* @__PURE__ */ w.jsx(pY, {})
                  ] }),
                  /* @__PURE__ */ w.jsxs($t, { alignItems: "center", children: [
                    /* @__PURE__ */ w.jsx(kH, {}),
                    /* @__PURE__ */ w.jsx(yn, { onClick: e, children: "CLOSE" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ w.jsxs(D2, { direction: "column", children: [
              /* @__PURE__ */ w.jsxs($t, { spacing: 2, wrap: "wrap", mb: 0, children: [
                a != null && /* @__PURE__ */ w.jsx(
                  nl,
                  {
                    "aria-label": "Close",
                    size: "sm",
                    icon: /* @__PURE__ */ w.jsx(iH, {}),
                    onClick: () => {
                      s(void 0), o(Ju());
                    }
                  }
                ),
                Ce == null ? void 0 : Ce.listAll().slice(0, l ? void 0 : zS).map((b) => /* @__PURE__ */ w.jsx(
                  yn,
                  {
                    variant: "solid",
                    width: "auto",
                    flexShrink: 0,
                    size: "sm",
                    py: 4,
                    onClick: () => d(b.name),
                    isActive: a === b.name,
                    children: b.name
                  }
                )),
                ((Ce == null ? void 0 : Ce.listAll().length) ?? 0) > zS && /* @__PURE__ */ w.jsx(
                  nl,
                  {
                    "aria-label": "Show-all-tags",
                    size: "sm",
                    icon: l ? /* @__PURE__ */ w.jsx(QW, {}) : /* @__PURE__ */ w.jsx(mS, {}),
                    onClick: () => u(!l)
                  }
                )
              ] }),
              /* @__PURE__ */ w.jsx($t, { mb: 2, p: 0, justifyContent: "end", children: /* @__PURE__ */ w.jsxs(Qd, { closeOnSelect: !0, children: [
                /* @__PURE__ */ w.jsx(
                  Lg,
                  {
                    as: yn,
                    variant: "ghost",
                    size: "xs",
                    pr: 0,
                    rightIcon: /* @__PURE__ */ w.jsx(mS, { size: "16" }),
                    children: /* @__PURE__ */ w.jsxs($t, { children: [
                      /* @__PURE__ */ w.jsx(tr, { children: "Sort by:" }),
                      /* @__PURE__ */ w.jsx(tr, { display: "inline-block", children: c.current })
                    ] })
                  }
                ),
                /* @__PURE__ */ w.jsx(Fg, { children: /* @__PURE__ */ w.jsx(
                  nE,
                  {
                    value: c.current,
                    type: "radio",
                    onChange: (b) => p(b),
                    children: Object.values(Ur).map((b, h) => /* @__PURE__ */ w.jsx(zg, { value: b, children: b }, h))
                  }
                ) })
              ] }) }),
              r.map((b) => /* @__PURE__ */ w.jsx(
                fY,
                {
                  isSelected: b.id === i,
                  workflow: b,
                  loadWorkflowID: t,
                  onDelete: g
                }
              ))
            ] })
          ] })
        }
      )
    }
  ) });
}
const mY = {
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
function vY() {
  const e = m.useRef({}), [t, n] = m.useState(null), [r, o] = m.useState("root"), [i, a] = m.useState(!0), [s, l] = m.useState(null), u = m.useRef(null), c = (b) => {
    u.current = b, l(b);
  }, d = async () => {
    var v;
    const b = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(S) {
      },
      async addCustomNodeDefs(S) {
        e.current = S;
      }
    };
    Al.registerExtension(b);
    try {
      await gH();
    } catch (S) {
      console.error("error loading db", S);
    }
    a(!1);
    const h = localStorage.getItem("curFlowID");
    if (h)
      c(h), Ee && n(((v = Ee[h]) == null ? void 0 : v.name) ?? "");
    else {
      const S = localStorage.getItem("workflow"), x = Sm({ json: S ?? "" });
      c(x.id), n(x.name ?? "");
    }
  };
  m.useEffect(() => {
    d(), setInterval(() => {
      if (u.current != null) {
        const b = JSON.stringify(Al.graph.serialize());
        localStorage.setItem("curFlowID", u.current), b != null && ym(u.current, {
          json: b
        });
      }
    }, 1e3);
  }, []);
  const f = (b) => {
    u.current != null && ym(u.current, {
      name: b
    });
  }, p = m.useCallback(
    tI(f, 700),
    []
  ), g = (b) => {
    if (Ee == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    c(b);
    const h = Ee[b];
    if (h == null) {
      alert("Error: Workflow not found! id: " + b);
      return;
    }
    Al.loadGraphData(JSON.parse(h.json)), n(h.name), o("root");
  }, y = () => {
    const b = mY, h = Sm({ json: JSON.stringify(b) });
    c(h.id), n(h.name), Al.loadGraphData(b);
  };
  return i ? null : /* @__PURE__ */ w.jsx(EE.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ w.jsxs(
    $e,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0
      },
      children: [
        /* @__PURE__ */ w.jsx(
          $t,
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
            children: /* @__PURE__ */ w.jsxs($t, { children: [
              /* @__PURE__ */ w.jsx(
                yn,
                {
                  size: "sm",
                  "aria-label": "workspace folder",
                  onClick: () => o("recentFlows"),
                  children: /* @__PURE__ */ w.jsxs($t, { gap: 1, children: [
                    /* @__PURE__ */ w.jsx(bE, { size: 21 }),
                    /* @__PURE__ */ w.jsx(oH, { size: 8 })
                  ] })
                }
              ),
              /* @__PURE__ */ w.jsx(
                yn,
                {
                  size: "sm",
                  variant: "outline",
                  colorScheme: "teal",
                  "aria-label": "workspace folder",
                  onClick: () => y(),
                  px: 2.5,
                  children: /* @__PURE__ */ w.jsxs($t, { gap: 1, children: [
                    /* @__PURE__ */ w.jsx(SE, { size: 16, color: "white" }),
                    /* @__PURE__ */ w.jsx(tr, { color: "white", fontSize: "sm", children: "New" })
                  ] })
                }
              ),
              /* @__PURE__ */ w.jsx(
                qd,
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
          hY,
          {
            isOpen: r === "recentFlows",
            onclose: () => o("root"),
            loadWorkflowID: g,
            onClickNewFlow: () => {
              y(), o("root");
            }
          }
        )
      ]
    }
  ) });
}
const iT = document.createElement("div");
document.body.append(iT);
const gY = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, yY = i3({ config: gY });
Bp.createRoot(iT).render(
  /* @__PURE__ */ w.jsx(re.StrictMode, { children: /* @__PURE__ */ w.jsxs(CB, { children: [
    /* @__PURE__ */ w.jsx(vR, { initialColorMode: yY.config.initialColorMode }),
    /* @__PURE__ */ w.jsx(vY, {})
  ] }) })
);
const Om = document.body, bY = { attributes: !0, attributeFilter: ["class"] }, SY = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of Om.classList)
        r.includes("chakra") && Om.classList.remove(r);
}, xY = new MutationObserver(SY);
xY.observe(Om, bY);
>>>>>>> 35aa62d (renmove all animations)
