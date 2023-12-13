var pE = Object.defineProperty;
var hE = (e, t, n) => t in e ? pE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Sf = (e, t, n) => (hE(e, typeof t != "symbol" ? t + "" : t, n), n);
import { app as $a } from "/scripts/app.js";
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
function cl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vx = { exports: {} }, ud = {}, Bx = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dl = Symbol.for("react.element"), vE = Symbol.for("react.portal"), gE = Symbol.for("react.fragment"), yE = Symbol.for("react.strict_mode"), bE = Symbol.for("react.profiler"), xE = Symbol.for("react.provider"), SE = Symbol.for("react.context"), wE = Symbol.for("react.forward_ref"), CE = Symbol.for("react.suspense"), kE = Symbol.for("react.memo"), PE = Symbol.for("react.lazy"), m0 = Symbol.iterator;
function _E(e) {
  return e === null || typeof e != "object" ? null : (e = m0 && e[m0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Wx = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Hx = Object.assign, Ux = {};
function wa(e, t, n) {
  this.props = e, this.context = t, this.refs = Ux, this.updater = n || Wx;
}
wa.prototype.isReactComponent = {};
wa.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
wa.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gx() {
}
Gx.prototype = wa.prototype;
function $m(e, t, n) {
  this.props = e, this.context = t, this.refs = Ux, this.updater = n || Wx;
}
var Am = $m.prototype = new Gx();
Am.constructor = $m;
Hx(Am, wa.prototype);
Am.isPureReactComponent = !0;
var v0 = Array.isArray, Kx = Object.prototype.hasOwnProperty, Dm = { current: null }, Yx = { key: !0, ref: !0, __self: !0, __source: !0 };
function qx(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Kx.call(t, r) && !Yx.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: dl, type: e, key: i, ref: a, props: o, _owner: Dm.current };
}
function TE(e, t) {
  return { $$typeof: dl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Fm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === dl;
}
function EE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var g0 = /\/+/g;
function wf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? EE("" + e.key) : t.toString(36);
}
function Eu(e, t, n, r, o) {
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
          case dl:
          case vE:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + wf(a, 0) : r, v0(o) ? (n = "", e != null && (n = e.replace(g0, "$&/") + "/"), Eu(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Fm(o) && (o = TE(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(g0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", v0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + wf(i, s);
      a += Eu(i, t, n, l, o);
    }
  else if (l = _E(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + wf(i, s++), a += Eu(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Vl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Eu(e, r, "", "", function(i) {
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
var Mt = { current: null }, Ou = { transition: null }, ME = { ReactCurrentDispatcher: Mt, ReactCurrentBatchConfig: Ou, ReactCurrentOwner: Dm };
ue.Children = { map: Vl, forEach: function(e, t, n) {
  Vl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Vl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Vl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Fm(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = wa;
ue.Fragment = gE;
ue.Profiler = bE;
ue.PureComponent = $m;
ue.StrictMode = yE;
ue.Suspense = CE;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ME;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Hx({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Dm.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      Kx.call(t, l) && !Yx.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: dl, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ue.createContext = function(e) {
  return e = { $$typeof: SE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: xE, _context: e }, e.Consumer = e;
};
ue.createElement = qx;
ue.createFactory = function(e) {
  var t = qx.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: wE, render: e };
};
ue.isValidElement = Fm;
ue.lazy = function(e) {
  return { $$typeof: PE, _payload: { _status: -1, _result: e }, _init: OE };
};
ue.memo = function(e, t) {
  return { $$typeof: kE, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = Ou.transition;
  Ou.transition = {};
  try {
    e();
  } finally {
    Ou.transition = t;
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
Bx.exports = ue;
var v = Bx.exports;
const re = /* @__PURE__ */ cl(v), y0 = /* @__PURE__ */ mE({
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
function Xx(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    AE.call(t, r) && !FE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: RE, type: e, key: i, ref: a, props: o, _owner: DE.current };
}
ud.Fragment = $E;
ud.jsx = Xx;
ud.jsxs = Xx;
Vx.exports = ud;
var S = Vx.exports, Up = {}, Qx = { exports: {} }, tn = {}, Zx = { exports: {} }, Jx = {};
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, y = !1, m = !1, x = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
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
    if (m = !1, b(A), !y)
      if (n(l) !== null)
        y = !0, K(k);
      else {
        var j = n(u);
        j !== null && $(w, j.startTime - A);
      }
  }
  function k(A, j) {
    y = !1, m && (m = !1, h(T), T = -1), p = !0;
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
  if (typeof g == "function")
    H = function() {
      g(G);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), W = L.port2;
    L.port1.onmessage = G, H = function() {
      W.postMessage(null);
    };
  } else
    H = function() {
      x(G, 0);
    };
  function K(A) {
    _ = A, P || (P = !0, H());
  }
  function $(A, j) {
    T = x(function() {
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
    return Y = U + Y, A = { id: c++, callback: j, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (m ? (h(T), T = -1) : m = !0, $(w, U - V))) : (A.sortIndex = Y, t(l, A), y || p || (y = !0, K(k))), A;
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
})(Jx);
Zx.exports = Jx;
var LE = Zx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eS = v, Zt = LE;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var tS = /* @__PURE__ */ new Set(), Rs = {};
function Zo(e, t) {
  ta(e, t), ta(e + "Capture", t);
}
function ta(e, t) {
  for (Rs[e] = t, e = 0; e < t.length; e++)
    tS.add(t[e]);
}
var wr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gp = Object.prototype.hasOwnProperty, jE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, b0 = {}, x0 = {};
function zE(e) {
  return Gp.call(x0, e) ? !0 : Gp.call(b0, e) ? !1 : jE.test(e) ? x0[e] = !0 : (b0[e] = !0, !1);
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
var Lm = /[\-:]([a-z])/g;
function jm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Lm,
    jm
  );
  ht[t] = new It(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Lm, jm);
  ht[t] = new It(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Lm, jm);
  ht[t] = new It(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new It(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new It("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new It(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zm(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (VE(t, n, o, r) && (n = null), r || o === null ? zE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Or = eS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bl = Symbol.for("react.element"), vi = Symbol.for("react.portal"), gi = Symbol.for("react.fragment"), Nm = Symbol.for("react.strict_mode"), Kp = Symbol.for("react.profiler"), nS = Symbol.for("react.provider"), rS = Symbol.for("react.context"), Vm = Symbol.for("react.forward_ref"), Yp = Symbol.for("react.suspense"), qp = Symbol.for("react.suspense_list"), Bm = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), oS = Symbol.for("react.offscreen"), S0 = Symbol.iterator;
function Aa(e) {
  return e === null || typeof e != "object" ? null : (e = S0 && e[S0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, Cf;
function Qa(e) {
  if (Cf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cf = t && t[1] || "";
    }
  return `
` + Cf + e;
}
var kf = !1;
function Pf(e, t) {
  if (!e || kf)
    return "";
  kf = !0;
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
    kf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Qa(e) : "";
}
function BE(e) {
  switch (e.tag) {
    case 5:
      return Qa(e.type);
    case 16:
      return Qa("Lazy");
    case 13:
      return Qa("Suspense");
    case 19:
      return Qa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Pf(e.type, !1), e;
    case 11:
      return e = Pf(e.type.render, !1), e;
    case 1:
      return e = Pf(e.type, !0), e;
    default:
      return "";
  }
}
function Xp(e) {
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
    case Kp:
      return "Profiler";
    case Nm:
      return "StrictMode";
    case Yp:
      return "Suspense";
    case qp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rS:
        return (e.displayName || "Context") + ".Consumer";
      case nS:
        return (e._context.displayName || "Context") + ".Provider";
      case Vm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Bm:
        return t = e.displayName || null, t !== null ? t : Xp(e.type) || "Memo";
      case zr:
        t = e._payload, e = e._init;
        try {
          return Xp(e(t));
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
      return Xp(t);
    case 8:
      return t === Nm ? "StrictMode" : "Mode";
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
function iS(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function HE(e) {
  var t = iS(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Wl(e) {
  e._valueTracker || (e._valueTracker = HE(e));
}
function aS(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = iS(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function sc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qp(e, t) {
  var n = t.checked;
  return Ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function w0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ao(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sS(e, t) {
  t = t.checked, t != null && zm(e, "checked", t, !1);
}
function Zp(e, t) {
  sS(e, t);
  var n = ao(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Jp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Jp(e, t.type, ao(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function C0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Jp(e, t, n) {
  (t !== "number" || sc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Za = Array.isArray;
function Vi(e, t, n, r) {
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
function eh(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function k0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(F(92));
      if (Za(n)) {
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
function lS(e, t) {
  var n = ao(t.value), r = ao(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function P0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uS(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function th(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? uS(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Hl, cS = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Hl = Hl || document.createElement("div"), Hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function $s(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var us = {
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
Object.keys(us).forEach(function(e) {
  UE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), us[t] = us[e];
  });
});
function dS(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || us.hasOwnProperty(e) && us[e] ? ("" + t).trim() : t + "px";
}
function fS(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = dS(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var GE = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function nh(e, t) {
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
function rh(e, t) {
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
var oh = null;
function Wm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ih = null, Bi = null, Wi = null;
function _0(e) {
  if (e = hl(e)) {
    if (typeof ih != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = hd(t), ih(e.stateNode, e.type, t));
  }
}
function pS(e) {
  Bi ? Wi ? Wi.push(e) : Wi = [e] : Bi = e;
}
function hS() {
  if (Bi) {
    var e = Bi, t = Wi;
    if (Wi = Bi = null, _0(e), t)
      for (e = 0; e < t.length; e++)
        _0(t[e]);
  }
}
function mS(e, t) {
  return e(t);
}
function vS() {
}
var _f = !1;
function gS(e, t, n) {
  if (_f)
    return e(t, n);
  _f = !0;
  try {
    return mS(e, t, n);
  } finally {
    _f = !1, (Bi !== null || Wi !== null) && (vS(), hS());
  }
}
function As(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = hd(n);
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
var ah = !1;
if (wr)
  try {
    var Da = {};
    Object.defineProperty(Da, "passive", { get: function() {
      ah = !0;
    } }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
  } catch {
    ah = !1;
  }
function KE(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var cs = !1, lc = null, uc = !1, sh = null, YE = { onError: function(e) {
  cs = !0, lc = e;
} };
function qE(e, t, n, r, o, i, a, s, l) {
  cs = !1, lc = null, KE.apply(YE, arguments);
}
function XE(e, t, n, r, o, i, a, s, l) {
  if (qE.apply(this, arguments), cs) {
    if (cs) {
      var u = lc;
      cs = !1, lc = null;
    } else
      throw Error(F(198));
    uc || (uc = !0, sh = u);
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
function yS(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function T0(e) {
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
          return T0(o), e;
        if (i === r)
          return T0(o), t;
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
function bS(e) {
  return e = QE(e), e !== null ? xS(e) : null;
}
function xS(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = xS(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var SS = Zt.unstable_scheduleCallback, E0 = Zt.unstable_cancelCallback, ZE = Zt.unstable_shouldYield, JE = Zt.unstable_requestPaint, Ke = Zt.unstable_now, eO = Zt.unstable_getCurrentPriorityLevel, Hm = Zt.unstable_ImmediatePriority, wS = Zt.unstable_UserBlockingPriority, cc = Zt.unstable_NormalPriority, tO = Zt.unstable_LowPriority, CS = Zt.unstable_IdlePriority, cd = null, Qn = null;
function nO(e) {
  if (Qn && typeof Qn.onCommitFiberRoot == "function")
    try {
      Qn.onCommitFiberRoot(cd, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $n = Math.clz32 ? Math.clz32 : iO, rO = Math.log, oO = Math.LN2;
function iO(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (rO(e) / oO | 0) | 0;
}
var Ul = 64, Gl = 4194304;
function Ja(e) {
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
function dc(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Ja(s) : (i &= a, i !== 0 && (r = Ja(i)));
  } else
    a = n & ~o, a !== 0 ? r = Ja(a) : i !== 0 && (r = Ja(i));
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
function lh(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function kS() {
  var e = Ul;
  return Ul <<= 1, !(Ul & 4194240) && (Ul = 64), e;
}
function Tf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function fl(e, t, n) {
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
function Um(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $n(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var we = 0;
function PS(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var _S, Gm, TS, ES, OS, uh = !1, Kl = [], qr = null, Xr = null, Qr = null, Ds = /* @__PURE__ */ new Map(), Fs = /* @__PURE__ */ new Map(), Br = [], uO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function O0(e, t) {
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
      Ds.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fs.delete(t.pointerId);
  }
}
function Fa(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = hl(t), t !== null && Gm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function cO(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return qr = Fa(qr, e, t, n, r, o), !0;
    case "dragenter":
      return Xr = Fa(Xr, e, t, n, r, o), !0;
    case "mouseover":
      return Qr = Fa(Qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ds.set(i, Fa(Ds.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Fs.set(i, Fa(Fs.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function MS(e) {
  var t = Ro(e.target);
  if (t !== null) {
    var n = Jo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = yS(n), t !== null) {
          e.blockedOn = t, OS(e.priority, function() {
            TS(n);
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
function Mu(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ch(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      oh = r, n.target.dispatchEvent(r), oh = null;
    } else
      return t = hl(n), t !== null && Gm(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function M0(e, t, n) {
  Mu(e) && n.delete(t);
}
function dO() {
  uh = !1, qr !== null && Mu(qr) && (qr = null), Xr !== null && Mu(Xr) && (Xr = null), Qr !== null && Mu(Qr) && (Qr = null), Ds.forEach(M0), Fs.forEach(M0);
}
function La(e, t) {
  e.blockedOn === t && (e.blockedOn = null, uh || (uh = !0, Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, dO)));
}
function Ls(e) {
  function t(o) {
    return La(o, e);
  }
  if (0 < Kl.length) {
    La(Kl[0], e);
    for (var n = 1; n < Kl.length; n++) {
      var r = Kl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (qr !== null && La(qr, e), Xr !== null && La(Xr, e), Qr !== null && La(Qr, e), Ds.forEach(t), Fs.forEach(t), n = 0; n < Br.length; n++)
    r = Br[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Br.length && (n = Br[0], n.blockedOn === null); )
    MS(n), n.blockedOn === null && Br.shift();
}
var Hi = Or.ReactCurrentBatchConfig, fc = !0;
function fO(e, t, n, r) {
  var o = we, i = Hi.transition;
  Hi.transition = null;
  try {
    we = 1, Km(e, t, n, r);
  } finally {
    we = o, Hi.transition = i;
  }
}
function pO(e, t, n, r) {
  var o = we, i = Hi.transition;
  Hi.transition = null;
  try {
    we = 4, Km(e, t, n, r);
  } finally {
    we = o, Hi.transition = i;
  }
}
function Km(e, t, n, r) {
  if (fc) {
    var o = ch(e, t, n, r);
    if (o === null)
      Lf(e, t, r, pc, n), O0(e, r);
    else if (cO(o, e, t, n, r))
      r.stopPropagation();
    else if (O0(e, r), t & 4 && -1 < uO.indexOf(e)) {
      for (; o !== null; ) {
        var i = hl(o);
        if (i !== null && _S(i), i = ch(e, t, n, r), i === null && Lf(e, t, r, pc, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Lf(e, t, r, null, n);
  }
}
var pc = null;
function ch(e, t, n, r) {
  if (pc = null, e = Wm(r), e = Ro(e), e !== null)
    if (t = Jo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = yS(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return pc = e, null;
}
function IS(e) {
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
        case Hm:
          return 1;
        case wS:
          return 4;
        case cc:
        case tO:
          return 16;
        case CS:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kr = null, Ym = null, Iu = null;
function RS() {
  if (Iu)
    return Iu;
  var e, t = Ym, n = t.length, r, o = "value" in Kr ? Kr.value : Kr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return Iu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ru(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Yl() {
  return !0;
}
function I0() {
  return !1;
}
function nn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Yl : I0, this.isPropagationStopped = I0, this;
  }
  return Ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Yl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Yl);
  }, persist: function() {
  }, isPersistent: Yl }), t;
}
var Ca = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, qm = nn(Ca), pl = Ve({}, Ca, { view: 0, detail: 0 }), hO = nn(pl), Ef, Of, ja, dd = Ve({}, pl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ja && (ja && e.type === "mousemove" ? (Ef = e.screenX - ja.screenX, Of = e.screenY - ja.screenY) : Of = Ef = 0, ja = e), Ef);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Of;
} }), R0 = nn(dd), mO = Ve({}, dd, { dataTransfer: 0 }), vO = nn(mO), gO = Ve({}, pl, { relatedTarget: 0 }), Mf = nn(gO), yO = Ve({}, Ca, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bO = nn(yO), xO = Ve({}, Ca, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), SO = nn(xO), wO = Ve({}, Ca, { data: 0 }), $0 = nn(wO), CO = {
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
function Xm() {
  return _O;
}
var TO = Ve({}, pl, { key: function(e) {
  if (e.key) {
    var t = CO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Ru(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xm, charCode: function(e) {
  return e.type === "keypress" ? Ru(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ru(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), EO = nn(TO), OO = Ve({}, dd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), A0 = nn(OO), MO = Ve({}, pl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xm }), IO = nn(MO), RO = Ve({}, Ca, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $O = nn(RO), AO = Ve({}, dd, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), DO = nn(AO), FO = [9, 13, 27, 32], Qm = wr && "CompositionEvent" in window, ds = null;
wr && "documentMode" in document && (ds = document.documentMode);
var LO = wr && "TextEvent" in window && !ds, $S = wr && (!Qm || ds && 8 < ds && 11 >= ds), D0 = " ", F0 = !1;
function AS(e, t) {
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
function DS(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var yi = !1;
function jO(e, t) {
  switch (e) {
    case "compositionend":
      return DS(t);
    case "keypress":
      return t.which !== 32 ? null : (F0 = !0, D0);
    case "textInput":
      return e = t.data, e === D0 && F0 ? null : e;
    default:
      return null;
  }
}
function zO(e, t) {
  if (yi)
    return e === "compositionend" || !Qm && AS(e, t) ? (e = RS(), Iu = Ym = Kr = null, yi = !1, e) : null;
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
      return $S && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var NO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function L0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!NO[e.type] : t === "textarea";
}
function FS(e, t, n, r) {
  pS(r), t = hc(t, "onChange"), 0 < t.length && (n = new qm("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fs = null, js = null;
function VO(e) {
  KS(e, 0);
}
function fd(e) {
  var t = Si(e);
  if (aS(t))
    return e;
}
function BO(e, t) {
  if (e === "change")
    return t;
}
var LS = !1;
if (wr) {
  var If;
  if (wr) {
    var Rf = "oninput" in document;
    if (!Rf) {
      var j0 = document.createElement("div");
      j0.setAttribute("oninput", "return;"), Rf = typeof j0.oninput == "function";
    }
    If = Rf;
  } else
    If = !1;
  LS = If && (!document.documentMode || 9 < document.documentMode);
}
function z0() {
  fs && (fs.detachEvent("onpropertychange", jS), js = fs = null);
}
function jS(e) {
  if (e.propertyName === "value" && fd(js)) {
    var t = [];
    FS(t, js, e, Wm(e)), gS(VO, t);
  }
}
function WO(e, t, n) {
  e === "focusin" ? (z0(), fs = t, js = n, fs.attachEvent("onpropertychange", jS)) : e === "focusout" && z0();
}
function HO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fd(js);
}
function UO(e, t) {
  if (e === "click")
    return fd(t);
}
function GO(e, t) {
  if (e === "input" || e === "change")
    return fd(t);
}
function KO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ln = typeof Object.is == "function" ? Object.is : KO;
function zs(e, t) {
  if (Ln(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Gp.call(t, o) || !Ln(e[o], t[o]))
      return !1;
  }
  return !0;
}
function N0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function V0(e, t) {
  var n = N0(e);
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
    n = N0(n);
  }
}
function zS(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function NS() {
  for (var e = window, t = sc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = sc(e.document);
  }
  return t;
}
function Zm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function YO(e) {
  var t = NS(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && zS(n.ownerDocument.documentElement, n)) {
    if (r !== null && Zm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = V0(n, i);
        var a = V0(
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
var qO = wr && "documentMode" in document && 11 >= document.documentMode, bi = null, dh = null, ps = null, fh = !1;
function B0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fh || bi == null || bi !== sc(r) || (r = bi, "selectionStart" in r && Zm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ps && zs(ps, r) || (ps = r, r = hc(dh, "onSelect"), 0 < r.length && (t = new qm("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = bi)));
}
function ql(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var xi = { animationend: ql("Animation", "AnimationEnd"), animationiteration: ql("Animation", "AnimationIteration"), animationstart: ql("Animation", "AnimationStart"), transitionend: ql("Transition", "TransitionEnd") }, $f = {}, VS = {};
wr && (VS = document.createElement("div").style, "AnimationEvent" in window || (delete xi.animationend.animation, delete xi.animationiteration.animation, delete xi.animationstart.animation), "TransitionEvent" in window || delete xi.transitionend.transition);
function pd(e) {
  if ($f[e])
    return $f[e];
  if (!xi[e])
    return e;
  var t = xi[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in VS)
      return $f[e] = t[n];
  return e;
}
var BS = pd("animationend"), WS = pd("animationiteration"), HS = pd("animationstart"), US = pd("transitionend"), GS = /* @__PURE__ */ new Map(), W0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fo(e, t) {
  GS.set(e, t), Zo(t, [e]);
}
for (var Af = 0; Af < W0.length; Af++) {
  var Df = W0[Af], XO = Df.toLowerCase(), QO = Df[0].toUpperCase() + Df.slice(1);
  fo(XO, "on" + QO);
}
fo(BS, "onAnimationEnd");
fo(WS, "onAnimationIteration");
fo(HS, "onAnimationStart");
fo("dblclick", "onDoubleClick");
fo("focusin", "onFocus");
fo("focusout", "onBlur");
fo(US, "onTransitionEnd");
ta("onMouseEnter", ["mouseout", "mouseover"]);
ta("onMouseLeave", ["mouseout", "mouseover"]);
ta("onPointerEnter", ["pointerout", "pointerover"]);
ta("onPointerLeave", ["pointerout", "pointerover"]);
Zo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ZO = new Set("cancel close invalid load scroll toggle".split(" ").concat(es));
function H0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, XE(r, t, void 0, e), e.currentTarget = null;
}
function KS(e, t) {
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
          H0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          H0(o, s, u), i = l;
        }
    }
  }
  if (uc)
    throw e = sh, uc = !1, sh = null, e;
}
function Me(e, t) {
  var n = t[gh];
  n === void 0 && (n = t[gh] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (YS(t, e, 2, !1), n.add(r));
}
function Ff(e, t, n) {
  var r = 0;
  t && (r |= 4), YS(n, e, r, t);
}
var Xl = "_reactListening" + Math.random().toString(36).slice(2);
function Ns(e) {
  if (!e[Xl]) {
    e[Xl] = !0, tS.forEach(function(n) {
      n !== "selectionchange" && (ZO.has(n) || Ff(n, !1, e), Ff(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xl] || (t[Xl] = !0, Ff("selectionchange", !1, t));
  }
}
function YS(e, t, n, r) {
  switch (IS(t)) {
    case 1:
      var o = fO;
      break;
    case 4:
      o = pO;
      break;
    default:
      o = Km;
  }
  n = o.bind(null, t, n, e), o = void 0, !ah || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Lf(e, t, n, r, o) {
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
  gS(function() {
    var u = i, c = Wm(n), d = [];
    e: {
      var f = GS.get(e);
      if (f !== void 0) {
        var p = qm, y = e;
        switch (e) {
          case "keypress":
            if (Ru(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = EO;
            break;
          case "focusin":
            y = "focus", p = Mf;
            break;
          case "focusout":
            y = "blur", p = Mf;
            break;
          case "beforeblur":
          case "afterblur":
            p = Mf;
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
            p = R0;
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
          case BS:
          case WS:
          case HS:
            p = bO;
            break;
          case US:
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
            p = SO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = A0;
        }
        var m = (t & 4) !== 0, x = !m && e === "scroll", h = m ? f !== null ? f + "Capture" : null : f;
        m = [];
        for (var g = u, b; g !== null; ) {
          b = g;
          var w = b.stateNode;
          if (b.tag === 5 && w !== null && (b = w, h !== null && (w = As(g, h), w != null && m.push(Vs(g, w, b)))), x)
            break;
          g = g.return;
        }
        0 < m.length && (f = new p(f, y, null, n, c), d.push({ event: f, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== oh && (y = n.relatedTarget || n.fromElement) && (Ro(y) || y[Cr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? Ro(y) : null, y !== null && (x = Jo(y), y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (m = R0, w = "onMouseLeave", h = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (m = A0, w = "onPointerLeave", h = "onPointerEnter", g = "pointer"), x = p == null ? f : Si(p), b = y == null ? f : Si(y), f = new m(w, g + "leave", p, n, c), f.target = x, f.relatedTarget = b, w = null, Ro(c) === u && (m = new m(h, g + "enter", y, n, c), m.target = b, m.relatedTarget = x, w = m), x = w, p && y)
            t: {
              for (m = p, h = y, g = 0, b = m; b; b = li(b))
                g++;
              for (b = 0, w = h; w; w = li(w))
                b++;
              for (; 0 < g - b; )
                m = li(m), g--;
              for (; 0 < b - g; )
                h = li(h), b--;
              for (; g--; ) {
                if (m === h || h !== null && m === h.alternate)
                  break t;
                m = li(m), h = li(h);
              }
              m = null;
            }
          else
            m = null;
          p !== null && U0(d, f, p, m, !1), y !== null && x !== null && U0(d, x, y, m, !0);
        }
      }
      e: {
        if (f = u ? Si(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = BO;
        else if (L0(f))
          if (LS)
            k = GO;
          else {
            k = HO;
            var P = WO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = UO);
        if (k && (k = k(e, u))) {
          FS(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Jp(f, "number", f.value);
      }
      switch (P = u ? Si(u) : window, e) {
        case "focusin":
          (L0(P) || P.contentEditable === "true") && (bi = P, dh = u, ps = null);
          break;
        case "focusout":
          ps = dh = bi = null;
          break;
        case "mousedown":
          fh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fh = !1, B0(d, n, c);
          break;
        case "selectionchange":
          if (qO)
            break;
        case "keydown":
        case "keyup":
          B0(d, n, c);
      }
      var _;
      if (Qm)
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
        yi ? AS(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && ($S && n.locale !== "ko" && (yi || T !== "onCompositionStart" ? T === "onCompositionEnd" && yi && (_ = RS()) : (Kr = c, Ym = "value" in Kr ? Kr.value : Kr.textContent, yi = !0)), P = hc(u, T), 0 < P.length && (T = new $0(T, e, null, n, c), d.push({ event: T, listeners: P }), _ ? T.data = _ : (_ = DS(n), _ !== null && (T.data = _)))), (_ = LO ? jO(e, n) : zO(e, n)) && (u = hc(u, "onBeforeInput"), 0 < u.length && (c = new $0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    KS(d, t);
  });
}
function Vs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = As(e, n), i != null && r.unshift(Vs(e, i, o)), i = As(e, t), i != null && r.push(Vs(e, i, o))), e = e.return;
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
function U0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = As(n, i), l != null && a.unshift(Vs(n, l, s))) : o || (l = As(n, i), l != null && a.push(Vs(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var JO = /\r\n?/g, eM = /\u0000|\uFFFD/g;
function G0(e) {
  return (typeof e == "string" ? e : "" + e).replace(JO, `
`).replace(eM, "");
}
function Ql(e, t, n) {
  if (t = G0(t), G0(e) !== t && n)
    throw Error(F(425));
}
function mc() {
}
var ph = null, hh = null;
function mh(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var vh = typeof setTimeout == "function" ? setTimeout : void 0, tM = typeof clearTimeout == "function" ? clearTimeout : void 0, K0 = typeof Promise == "function" ? Promise : void 0, nM = typeof queueMicrotask == "function" ? queueMicrotask : typeof K0 < "u" ? function(e) {
  return K0.resolve(null).then(e).catch(rM);
} : vh;
function rM(e) {
  setTimeout(function() {
    throw e;
  });
}
function jf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Ls(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ls(t);
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
function Y0(e) {
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
var ka = Math.random().toString(36).slice(2), Yn = "__reactFiber$" + ka, Bs = "__reactProps$" + ka, Cr = "__reactContainer$" + ka, gh = "__reactEvents$" + ka, oM = "__reactListeners$" + ka, iM = "__reactHandles$" + ka;
function Ro(e) {
  var t = e[Yn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Cr] || n[Yn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Y0(e); e !== null; ) {
          if (n = e[Yn])
            return n;
          e = Y0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function hl(e) {
  return e = e[Yn] || e[Cr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Si(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function hd(e) {
  return e[Bs] || null;
}
var yh = [], wi = -1;
function po(e) {
  return { current: e };
}
function Re(e) {
  0 > wi || (e.current = yh[wi], yh[wi] = null, wi--);
}
function Te(e, t) {
  wi++, yh[wi] = e.current, e.current = t;
}
var so = {}, wt = po(so), Dt = po(!1), Uo = so;
function na(e, t) {
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
function vc() {
  Re(Dt), Re(wt);
}
function q0(e, t, n) {
  if (wt.current !== so)
    throw Error(F(168));
  Te(wt, t), Te(Dt, n);
}
function qS(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, WE(e) || "Unknown", o));
  return Ve({}, n, r);
}
function gc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || so, Uo = wt.current, Te(wt, e), Te(Dt, Dt.current), !0;
}
function X0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = qS(e, t, Uo), r.__reactInternalMemoizedMergedChildContext = e, Re(Dt), Re(wt), Te(wt, e)) : Re(Dt), Te(Dt, n);
}
var cr = null, md = !1, zf = !1;
function XS(e) {
  cr === null ? cr = [e] : cr.push(e);
}
function aM(e) {
  md = !0, XS(e);
}
function ho() {
  if (!zf && cr !== null) {
    zf = !0;
    var e = 0, t = we;
    try {
      var n = cr;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      cr = null, md = !1;
    } catch (o) {
      throw cr !== null && (cr = cr.slice(e + 1)), SS(Hm, ho), o;
    } finally {
      we = t, zf = !1;
    }
  }
  return null;
}
var Ci = [], ki = 0, yc = null, bc = 0, fn = [], pn = 0, Go = null, pr = 1, hr = "";
function ko(e, t) {
  Ci[ki++] = bc, Ci[ki++] = yc, yc = e, bc = t;
}
function QS(e, t, n) {
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
function Jm(e) {
  e.return !== null && (ko(e, 1), QS(e, 1, 0));
}
function ev(e) {
  for (; e === yc; )
    yc = Ci[--ki], Ci[ki] = null, bc = Ci[--ki], Ci[ki] = null;
  for (; e === Go; )
    Go = fn[--pn], fn[pn] = null, hr = fn[--pn], fn[pn] = null, pr = fn[--pn], fn[pn] = null;
}
var qt = null, Yt = null, Fe = !1, Mn = null;
function ZS(e, t) {
  var n = hn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Q0(e, t) {
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
function bh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xh(e) {
  if (Fe) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!Q0(e, t)) {
        if (bh(e))
          throw Error(F(418));
        t = Zr(n.nextSibling);
        var r = qt;
        t && Q0(e, t) ? ZS(r, n) : (e.flags = e.flags & -4097 | 2, Fe = !1, qt = e);
      }
    } else {
      if (bh(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, Fe = !1, qt = e;
    }
  }
}
function Z0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function Zl(e) {
  if (e !== qt)
    return !1;
  if (!Fe)
    return Z0(e), Fe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mh(e.type, e.memoizedProps)), t && (t = Yt)) {
    if (bh(e))
      throw JS(), Error(F(418));
    for (; t; )
      ZS(e, t), t = Zr(t.nextSibling);
  }
  if (Z0(e), e.tag === 13) {
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
function JS() {
  for (var e = Yt; e; )
    e = Zr(e.nextSibling);
}
function ra() {
  Yt = qt = null, Fe = !1;
}
function tv(e) {
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
var xc = po(null), Sc = null, Pi = null, nv = null;
function rv() {
  nv = Pi = Sc = null;
}
function ov(e) {
  var t = xc.current;
  Re(xc), e._currentValue = t;
}
function Sh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Ui(e, t) {
  Sc = e, nv = Pi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (At = !0), e.firstContext = null);
}
function yn(e) {
  var t = e._currentValue;
  if (nv !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Pi === null) {
      if (Sc === null)
        throw Error(F(308));
      Pi = e, Sc.dependencies = { lanes: 0, firstContext: e };
    } else
      Pi = Pi.next = e;
  return t;
}
var $o = null;
function iv(e) {
  $o === null ? $o = [e] : $o.push(e);
}
function ew(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, iv(t)) : (n.next = o.next, o.next = n), t.interleaved = n, kr(e, r);
}
function kr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nr = !1;
function av(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tw(e, t) {
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
  return o = r.interleaved, o === null ? (t.next = t, iv(r)) : (t.next = o.next, o.next = t), r.interleaved = t, kr(e, n);
}
function $u(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Um(e, n);
  }
}
function J0(e, t) {
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
function wc(e, t, n, r) {
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
          var y = e, m = s;
          switch (f = t, p = n, m.tag) {
            case 1:
              if (y = m.payload, typeof y == "function") {
                d = y.call(p, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = m.payload, f = typeof y == "function" ? y.call(p, d, f) : y, f == null)
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
function ey(e, t, n) {
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
var nw = new eS.Component().refs;
function wh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vd = { isMounted: function(e) {
  return (e = e._reactInternals) ? Jo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Et(), o = to(e), i = gr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Jr(e, i, o), t !== null && (An(t, e, o, r), $u(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Et(), o = to(e), i = gr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Jr(e, i, o), t !== null && (An(t, e, o, r), $u(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Et(), r = to(e), o = gr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Jr(e, o, r), t !== null && (An(t, e, r, n), $u(t, e, r));
} };
function ty(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !zs(n, r) || !zs(o, i) : !0;
}
function rw(e, t, n) {
  var r = !1, o = so, i = t.contextType;
  return typeof i == "object" && i !== null ? i = yn(i) : (o = Ft(t) ? Uo : wt.current, r = t.contextTypes, i = (r = r != null) ? na(e, o) : so), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vd, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ny(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vd.enqueueReplaceState(t, t.state, null);
}
function Ch(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = nw, av(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = yn(i) : (i = Ft(t) ? Uo : wt.current, o.context = na(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (wh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && vd.enqueueReplaceState(o, o.state, null), wc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function za(e, t, n) {
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
        s === nw && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Jl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ry(e) {
  var t = e._init;
  return t(e._payload);
}
function ow(e) {
  function t(h, g) {
    if (e) {
      var b = h.deletions;
      b === null ? (h.deletions = [g], h.flags |= 16) : b.push(g);
    }
  }
  function n(h, g) {
    if (!e)
      return null;
    for (; g !== null; )
      t(h, g), g = g.sibling;
    return null;
  }
  function r(h, g) {
    for (h = /* @__PURE__ */ new Map(); g !== null; )
      g.key !== null ? h.set(g.key, g) : h.set(g.index, g), g = g.sibling;
    return h;
  }
  function o(h, g) {
    return h = no(h, g), h.index = 0, h.sibling = null, h;
  }
  function i(h, g, b) {
    return h.index = b, e ? (b = h.alternate, b !== null ? (b = b.index, b < g ? (h.flags |= 2, g) : b) : (h.flags |= 2, g)) : (h.flags |= 1048576, g);
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, g, b, w) {
    return g === null || g.tag !== 6 ? (g = Gf(b, h.mode, w), g.return = h, g) : (g = o(g, b), g.return = h, g);
  }
  function l(h, g, b, w) {
    var k = b.type;
    return k === gi ? c(h, g, b.props.children, w, b.key) : g !== null && (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && ry(k) === g.type) ? (w = o(g, b.props), w.ref = za(h, g, b), w.return = h, w) : (w = zu(b.type, b.key, b.props, null, h.mode, w), w.ref = za(h, g, b), w.return = h, w);
  }
  function u(h, g, b, w) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== b.containerInfo || g.stateNode.implementation !== b.implementation ? (g = Kf(b, h.mode, w), g.return = h, g) : (g = o(g, b.children || []), g.return = h, g);
  }
  function c(h, g, b, w, k) {
    return g === null || g.tag !== 7 ? (g = zo(b, h.mode, w, k), g.return = h, g) : (g = o(g, b), g.return = h, g);
  }
  function d(h, g, b) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return g = Gf("" + g, h.mode, b), g.return = h, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Bl:
          return b = zu(g.type, g.key, g.props, null, h.mode, b), b.ref = za(h, null, g), b.return = h, b;
        case vi:
          return g = Kf(g, h.mode, b), g.return = h, g;
        case zr:
          var w = g._init;
          return d(h, w(g._payload), b);
      }
      if (Za(g) || Aa(g))
        return g = zo(g, h.mode, b, null), g.return = h, g;
      Jl(h, g);
    }
    return null;
  }
  function f(h, g, b, w) {
    var k = g !== null ? g.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return k !== null ? null : s(h, g, "" + b, w);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Bl:
          return b.key === k ? l(h, g, b, w) : null;
        case vi:
          return b.key === k ? u(h, g, b, w) : null;
        case zr:
          return k = b._init, f(
            h,
            g,
            k(b._payload),
            w
          );
      }
      if (Za(b) || Aa(b))
        return k !== null ? null : c(h, g, b, w, null);
      Jl(h, b);
    }
    return null;
  }
  function p(h, g, b, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return h = h.get(b) || null, s(g, h, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Bl:
          return h = h.get(w.key === null ? b : w.key) || null, l(g, h, w, k);
        case vi:
          return h = h.get(w.key === null ? b : w.key) || null, u(g, h, w, k);
        case zr:
          var P = w._init;
          return p(h, g, b, P(w._payload), k);
      }
      if (Za(w) || Aa(w))
        return h = h.get(b) || null, c(g, h, w, k, null);
      Jl(g, w);
    }
    return null;
  }
  function y(h, g, b, w) {
    for (var k = null, P = null, _ = g, T = g = 0, M = null; _ !== null && T < b.length; T++) {
      _.index > T ? (M = _, _ = null) : M = _.sibling;
      var I = f(h, _, b[T], w);
      if (I === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && I.alternate === null && t(h, _), g = i(I, g, T), P === null ? k = I : P.sibling = I, P = I, _ = M;
    }
    if (T === b.length)
      return n(h, _), Fe && ko(h, T), k;
    if (_ === null) {
      for (; T < b.length; T++)
        _ = d(h, b[T], w), _ !== null && (g = i(_, g, T), P === null ? k = _ : P.sibling = _, P = _);
      return Fe && ko(h, T), k;
    }
    for (_ = r(h, _); T < b.length; T++)
      M = p(_, h, T, b[T], w), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? T : M.key), g = i(M, g, T), P === null ? k = M : P.sibling = M, P = M);
    return e && _.forEach(function(D) {
      return t(h, D);
    }), Fe && ko(h, T), k;
  }
  function m(h, g, b, w) {
    var k = Aa(b);
    if (typeof k != "function")
      throw Error(F(150));
    if (b = k.call(b), b == null)
      throw Error(F(151));
    for (var P = k = null, _ = g, T = g = 0, M = null, I = b.next(); _ !== null && !I.done; T++, I = b.next()) {
      _.index > T ? (M = _, _ = null) : M = _.sibling;
      var D = f(h, _, I.value, w);
      if (D === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && D.alternate === null && t(h, _), g = i(D, g, T), P === null ? k = D : P.sibling = D, P = D, _ = M;
    }
    if (I.done)
      return n(
        h,
        _
      ), Fe && ko(h, T), k;
    if (_ === null) {
      for (; !I.done; T++, I = b.next())
        I = d(h, I.value, w), I !== null && (g = i(I, g, T), P === null ? k = I : P.sibling = I, P = I);
      return Fe && ko(h, T), k;
    }
    for (_ = r(h, _); !I.done; T++, I = b.next())
      I = p(_, h, T, I.value, w), I !== null && (e && I.alternate !== null && _.delete(I.key === null ? T : I.key), g = i(I, g, T), P === null ? k = I : P.sibling = I, P = I);
    return e && _.forEach(function(G) {
      return t(h, G);
    }), Fe && ko(h, T), k;
  }
  function x(h, g, b, w) {
    if (typeof b == "object" && b !== null && b.type === gi && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Bl:
          e: {
            for (var k = b.key, P = g; P !== null; ) {
              if (P.key === k) {
                if (k = b.type, k === gi) {
                  if (P.tag === 7) {
                    n(h, P.sibling), g = o(P, b.props.children), g.return = h, h = g;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && ry(k) === P.type) {
                  n(h, P.sibling), g = o(P, b.props), g.ref = za(h, P, b), g.return = h, h = g;
                  break e;
                }
                n(h, P);
                break;
              } else
                t(h, P);
              P = P.sibling;
            }
            b.type === gi ? (g = zo(b.props.children, h.mode, w, b.key), g.return = h, h = g) : (w = zu(b.type, b.key, b.props, null, h.mode, w), w.ref = za(h, g, b), w.return = h, h = w);
          }
          return a(h);
        case vi:
          e: {
            for (P = b.key; g !== null; ) {
              if (g.key === P)
                if (g.tag === 4 && g.stateNode.containerInfo === b.containerInfo && g.stateNode.implementation === b.implementation) {
                  n(h, g.sibling), g = o(g, b.children || []), g.return = h, h = g;
                  break e;
                } else {
                  n(h, g);
                  break;
                }
              else
                t(h, g);
              g = g.sibling;
            }
            g = Kf(b, h.mode, w), g.return = h, h = g;
          }
          return a(h);
        case zr:
          return P = b._init, x(h, g, P(b._payload), w);
      }
      if (Za(b))
        return y(h, g, b, w);
      if (Aa(b))
        return m(h, g, b, w);
      Jl(h, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, g !== null && g.tag === 6 ? (n(h, g.sibling), g = o(g, b), g.return = h, h = g) : (n(h, g), g = Gf(b, h.mode, w), g.return = h, h = g), a(h)) : n(h, g);
  }
  return x;
}
var oa = ow(!0), iw = ow(!1), ml = {}, Zn = po(ml), Ws = po(ml), Hs = po(ml);
function Ao(e) {
  if (e === ml)
    throw Error(F(174));
  return e;
}
function sv(e, t) {
  switch (Te(Hs, t), Te(Ws, e), Te(Zn, ml), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : th(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = th(t, e);
  }
  Re(Zn), Te(Zn, t);
}
function ia() {
  Re(Zn), Re(Ws), Re(Hs);
}
function aw(e) {
  Ao(Hs.current);
  var t = Ao(Zn.current), n = th(t, e.type);
  t !== n && (Te(Ws, e), Te(Zn, n));
}
function lv(e) {
  Ws.current === e && (Re(Zn), Re(Ws));
}
var je = po(0);
function Cc(e) {
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
var Nf = [];
function uv() {
  for (var e = 0; e < Nf.length; e++)
    Nf[e]._workInProgressVersionPrimary = null;
  Nf.length = 0;
}
var Au = Or.ReactCurrentDispatcher, Vf = Or.ReactCurrentBatchConfig, Ko = 0, Ne = null, tt = null, it = null, kc = !1, hs = !1, Us = 0, lM = 0;
function gt() {
  throw Error(F(321));
}
function cv(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ln(e[n], t[n]))
      return !1;
  return !0;
}
function dv(e, t, n, r, o, i) {
  if (Ko = i, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Au.current = e === null || e.memoizedState === null ? fM : pM, e = n(r, o), hs) {
    i = 0;
    do {
      if (hs = !1, Us = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = tt = null, t.updateQueue = null, Au.current = hM, e = n(r, o);
    } while (hs);
  }
  if (Au.current = Pc, t = tt !== null && tt.next !== null, Ko = 0, it = tt = Ne = null, kc = !1, t)
    throw Error(F(300));
  return e;
}
function fv() {
  var e = Us !== 0;
  return Us = 0, e;
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
function Gs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bf(e) {
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
function Wf(e) {
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
function sw() {
}
function lw(e, t) {
  var n = Ne, r = bn(), o = t(), i = !Ln(r.memoizedState, o);
  if (i && (r.memoizedState = o, At = !0), r = r.queue, pv(dw.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ks(9, cw.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Ko & 30 || uw(n, t, o);
  }
  return o;
}
function uw(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function cw(e, t, n, r) {
  t.value = n, t.getSnapshot = r, fw(t) && pw(e);
}
function dw(e, t, n) {
  return n(function() {
    fw(t) && pw(e);
  });
}
function fw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ln(e, n);
  } catch {
    return !0;
  }
}
function pw(e) {
  var t = kr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function oy(e) {
  var t = Wn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gs, lastRenderedState: e }, t.queue = e, e = e.dispatch = dM.bind(null, Ne, e), [t.memoizedState, e];
}
function Ks(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hw() {
  return bn().memoizedState;
}
function Du(e, t, n, r) {
  var o = Wn();
  Ne.flags |= e, o.memoizedState = Ks(1 | t, n, void 0, r === void 0 ? null : r);
}
function gd(e, t, n, r) {
  var o = bn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (tt !== null) {
    var a = tt.memoizedState;
    if (i = a.destroy, r !== null && cv(r, a.deps)) {
      o.memoizedState = Ks(t, n, i, r);
      return;
    }
  }
  Ne.flags |= e, o.memoizedState = Ks(1 | t, n, i, r);
}
function iy(e, t) {
  return Du(8390656, 8, e, t);
}
function pv(e, t) {
  return gd(2048, 8, e, t);
}
function mw(e, t) {
  return gd(4, 2, e, t);
}
function vw(e, t) {
  return gd(4, 4, e, t);
}
function gw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function yw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gd(4, 4, gw.bind(null, t, e), n);
}
function hv() {
}
function bw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function xw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Sw(e, t, n) {
  return Ko & 21 ? (Ln(n, t) || (n = kS(), Ne.lanes |= n, Yo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n);
}
function uM(e, t) {
  var n = we;
  we = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Vf.transition;
  Vf.transition = {};
  try {
    e(!1), t();
  } finally {
    we = n, Vf.transition = r;
  }
}
function ww() {
  return bn().memoizedState;
}
function cM(e, t, n) {
  var r = to(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Cw(e))
    kw(t, n);
  else if (n = ew(e, t, n, r), n !== null) {
    var o = Et();
    An(n, e, r, o), Pw(n, t, r);
  }
}
function dM(e, t, n) {
  var r = to(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cw(e))
    kw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, Ln(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, iv(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = ew(e, t, o, r), n !== null && (o = Et(), An(n, e, r, o), Pw(n, t, r));
  }
}
function Cw(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function kw(e, t) {
  hs = kc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Pw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Um(e, n);
  }
}
var Pc = { readContext: yn, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, fM = { readContext: yn, useCallback: function(e, t) {
  return Wn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yn, useEffect: iy, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Du(
    4194308,
    4,
    gw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Du(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Du(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Wn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Wn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = cM.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wn();
  return e = { current: e }, t.memoizedState = e;
}, useState: oy, useDebugValue: hv, useDeferredValue: function(e) {
  return Wn().memoizedState = e;
}, useTransition: function() {
  var e = oy(!1), t = e[0];
  return e = uM.bind(null, e[1]), Wn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ne, o = Wn();
  if (Fe) {
    if (n === void 0)
      throw Error(F(407));
    n = n();
  } else {
    if (n = t(), st === null)
      throw Error(F(349));
    Ko & 30 || uw(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, iy(dw.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Ks(9, cw.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Wn(), t = st.identifierPrefix;
  if (Fe) {
    var n = hr, r = pr;
    n = (r & ~(1 << 32 - $n(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Us++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = lM++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, pM = {
  readContext: yn,
  useCallback: bw,
  useContext: yn,
  useEffect: pv,
  useImperativeHandle: yw,
  useInsertionEffect: mw,
  useLayoutEffect: vw,
  useMemo: xw,
  useReducer: Bf,
  useRef: hw,
  useState: function() {
    return Bf(Gs);
  },
  useDebugValue: hv,
  useDeferredValue: function(e) {
    var t = bn();
    return Sw(t, tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Bf(Gs)[0], t = bn().memoizedState;
    return [e, t];
  },
  useMutableSource: sw,
  useSyncExternalStore: lw,
  useId: ww,
  unstable_isNewReconciler: !1
}, hM = { readContext: yn, useCallback: bw, useContext: yn, useEffect: pv, useImperativeHandle: yw, useInsertionEffect: mw, useLayoutEffect: vw, useMemo: xw, useReducer: Wf, useRef: hw, useState: function() {
  return Wf(Gs);
}, useDebugValue: hv, useDeferredValue: function(e) {
  var t = bn();
  return tt === null ? t.memoizedState = e : Sw(t, tt.memoizedState, e);
}, useTransition: function() {
  var e = Wf(Gs)[0], t = bn().memoizedState;
  return [e, t];
}, useMutableSource: sw, useSyncExternalStore: lw, useId: ww, unstable_isNewReconciler: !1 };
function aa(e, t) {
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
function Hf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function kh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mM = typeof WeakMap == "function" ? WeakMap : Map;
function _w(e, t, n) {
  n = gr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Tc || (Tc = !0, Ah = r), kh(e, t);
  }, n;
}
function Tw(e, t, n) {
  n = gr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      kh(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    kh(e, t), typeof r != "function" && (eo === null ? eo = /* @__PURE__ */ new Set([this]) : eo.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function ay(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mM();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = OM.bind(null, e, t, n), t.then(e, e));
}
function sy(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ly(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gr(-1, 1), t.tag = 2, Jr(n, t, 1))), n.lanes |= 1), e);
}
var vM = Or.ReactCurrentOwner, At = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? iw(t, null, n, r) : oa(t, e.child, n, r);
}
function uy(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Ui(t, o), r = dv(e, t, n, r, i, o), n = fv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (Fe && n && Jm(t), t.flags |= 1, Pt(e, t, r, o), t.child);
}
function cy(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !wv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ew(e, t, i, r, o)) : (e = zu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : zs, n(a, r) && e.ref === t.ref)
      return Pr(e, t, o);
  }
  return t.flags |= 1, e = no(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ew(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (zs(i, r) && e.ref === t.ref)
      if (At = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (At = !0);
      else
        return t.lanes = e.lanes, Pr(e, t, o);
  }
  return Ph(e, t, n, r, o);
}
function Ow(e, t, n) {
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
function Mw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ph(e, t, n, r, o) {
  var i = Ft(n) ? Uo : wt.current;
  return i = na(t, i), Ui(t, o), n = dv(e, t, n, r, i, o), r = fv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (Fe && r && Jm(t), t.flags |= 1, Pt(e, t, n, o), t.child);
}
function dy(e, t, n, r, o) {
  if (Ft(n)) {
    var i = !0;
    gc(t);
  } else
    i = !1;
  if (Ui(t, o), t.stateNode === null)
    Fu(e, t), rw(t, n, r), Ch(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = yn(u) : (u = Ft(n) ? Uo : wt.current, u = na(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && ny(t, a, r, u), Nr = !1;
    var f = t.memoizedState;
    a.state = f, wc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Dt.current || Nr ? (typeof c == "function" && (wh(t, n, c, r), l = t.memoizedState), (s = Nr || ty(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, tw(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : En(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = yn(l) : (l = Ft(n) ? Uo : wt.current, l = na(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && ny(t, a, r, l), Nr = !1, f = t.memoizedState, a.state = f, wc(t, r, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || Dt.current || Nr ? (typeof p == "function" && (wh(t, n, p, r), y = t.memoizedState), (u = Nr || ty(t, n, u, r, f, y, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return _h(e, t, n, r, i, o);
}
function _h(e, t, n, r, o, i) {
  Mw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && X0(t, n, !1), Pr(e, t, i);
  r = t.stateNode, vM.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = oa(t, e.child, null, i), t.child = oa(t, null, s, i)) : Pt(e, t, s, i), t.memoizedState = r.state, o && X0(t, n, !0), t.child;
}
function Iw(e) {
  var t = e.stateNode;
  t.pendingContext ? q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && q0(e, t.context, !1), sv(e, t.containerInfo);
}
function fy(e, t, n, r, o) {
  return ra(), tv(o), t.flags |= 256, Pt(e, t, n, r), t.child;
}
var Th = { dehydrated: null, treeContext: null, retryLane: 0 };
function Eh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rw(e, t, n) {
  var r = t.pendingProps, o = je.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Te(je, o & 1), e === null)
    return xh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = xd(a, r, 0, null), e = zo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Eh(n), t.memoizedState = Th, e) : mv(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return gM(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = no(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = no(s, i) : (i = zo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Eh(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = Th, r;
  }
  return i = e.child, e = i.sibling, r = no(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function mv(e, t) {
  return t = xd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function eu(e, t, n, r) {
  return r !== null && tv(r), oa(t, e.child, null, n), e = mv(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gM(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Hf(Error(F(422))), eu(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = xd({ mode: "visible", children: r.children }, o, 0, null), i = zo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && oa(t, e.child, null, a), t.child.memoizedState = Eh(a), t.memoizedState = Th, i);
  if (!(t.mode & 1))
    return eu(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = Hf(i, r, void 0), eu(e, t, a, r);
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
    return Sv(), r = Hf(Error(F(421))), eu(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = MM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Yt = Zr(o.nextSibling), qt = t, Fe = !0, Mn = null, e !== null && (fn[pn++] = pr, fn[pn++] = hr, fn[pn++] = Go, pr = e.id, hr = e.overflow, Go = t), t = mv(t, r.children), t.flags |= 4096, t);
}
function py(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sh(e.return, t, n);
}
function Uf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function $w(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Pt(e, t, r.children, n), r = je.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && py(e, n, t);
          else if (e.tag === 19)
            py(e, n, t);
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
          e = n.alternate, e !== null && Cc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Uf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Cc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Uf(t, !0, n, null, i);
        break;
      case "together":
        Uf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fu(e, t) {
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
      Iw(t), ra();
      break;
    case 5:
      aw(t);
      break;
    case 1:
      Ft(t.type) && gc(t);
      break;
    case 4:
      sv(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Te(xc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Te(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Rw(e, t, n) : (Te(je, je.current & 1), e = Pr(e, t, n), e !== null ? e.sibling : null);
      Te(je, je.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return $w(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(je, je.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ow(e, t, n);
  }
  return Pr(e, t, n);
}
var Aw, Oh, Dw, Fw;
Aw = function(e, t) {
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
Oh = function() {
};
Dw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Ao(Zn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Qp(e, o), r = Qp(e, r), i = [];
        break;
      case "select":
        o = Ve({}, o, { value: void 0 }), r = Ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = eh(e, o), r = eh(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = mc);
    }
    nh(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Rs.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Rs.hasOwnProperty(u) ? (l != null && u === "onScroll" && Me("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Fw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Na(e, t) {
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
  switch (ev(t), t.tag) {
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
      return Ft(t.type) && vc(), yt(t), null;
    case 3:
      return r = t.stateNode, ia(), Re(Dt), Re(wt), uv(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Mn !== null && (Lh(Mn), Mn = null))), Oh(e, t), yt(t), null;
    case 5:
      lv(t);
      var o = Ao(Hs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Dw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return yt(t), null;
        }
        if (e = Ao(Zn.current), Zl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Yn] = t, r[Bs] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < es.length; o++)
                Me(es[o], r);
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
              w0(r, i), Me("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Me("invalid", r);
              break;
            case "textarea":
              k0(r, i), Me("invalid", r);
          }
          nh(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Ql(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Ql(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Rs.hasOwnProperty(a) && s != null && a === "onScroll" && Me("scroll", r);
            }
          switch (n) {
            case "input":
              Wl(r), C0(r, i, !0);
              break;
            case "textarea":
              Wl(r), P0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = mc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = uS(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yn] = t, e[Bs] = r, Aw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = rh(n, r), n) {
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
                for (o = 0; o < es.length; o++)
                  Me(es[o], e);
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
                w0(e, r), o = Qp(e, r), Me("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ve({}, r, { value: void 0 }), Me("invalid", e);
                break;
              case "textarea":
                k0(e, r), o = eh(e, r), Me("invalid", e);
                break;
              default:
                o = r;
            }
            nh(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? fS(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && cS(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && $s(e, l) : typeof l == "number" && $s(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Rs.hasOwnProperty(i) ? l != null && i === "onScroll" && Me("scroll", e) : l != null && zm(e, i, l, a));
              }
            switch (n) {
              case "input":
                Wl(e), C0(e, r, !1);
                break;
              case "textarea":
                Wl(e), P0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ao(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Vi(e, !!r.multiple, i, !1) : r.defaultValue != null && Vi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = mc);
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
        Fw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Ao(Hs.current), Ao(Zn.current), Zl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Yn] = t, (i = r.nodeValue !== n) && (e = qt, e !== null))
            switch (e.tag) {
              case 3:
                Ql(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ql(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yn] = t, t.stateNode = r;
      }
      return yt(t), null;
    case 13:
      if (Re(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Fe && Yt !== null && t.mode & 1 && !(t.flags & 128))
          JS(), ra(), t.flags |= 98560, i = !1;
        else if (i = Zl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(F(317));
            i[Yn] = t;
          } else
            ra(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          yt(t), i = !1;
        } else
          Mn !== null && (Lh(Mn), Mn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? nt === 0 && (nt = 3) : Sv())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
    case 4:
      return ia(), Oh(e, t), e === null && Ns(t.stateNode.containerInfo), yt(t), null;
    case 10:
      return ov(t.type._context), yt(t), null;
    case 17:
      return Ft(t.type) && vc(), yt(t), null;
    case 19:
      if (Re(je), i = t.memoizedState, i === null)
        return yt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          Na(i, !1);
        else {
          if (nt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Cc(e), a !== null) {
                for (t.flags |= 128, Na(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Te(je, je.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ke() > sa && (t.flags |= 128, r = !0, Na(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Cc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Na(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Fe)
              return yt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > sa && n !== 1073741824 && (t.flags |= 128, r = !0, Na(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = je.current, Te(je, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
    case 22:
    case 23:
      return xv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function xM(e, t) {
  switch (ev(t), t.tag) {
    case 1:
      return Ft(t.type) && vc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ia(), Re(Dt), Re(wt), uv(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return lv(t), null;
    case 13:
      if (Re(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        ra();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Re(je), null;
    case 4:
      return ia(), null;
    case 10:
      return ov(t.type._context), null;
    case 22:
    case 23:
      return xv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var tu = !1, xt = !1, SM = typeof WeakSet == "function" ? WeakSet : Set, B = null;
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
function Mh(e, t, n) {
  try {
    n();
  } catch (r) {
    We(e, t, r);
  }
}
var hy = !1;
function wM(e, t) {
  if (ph = fc, e = NS(), Zm(e)) {
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
  for (hh = { focusedElem: e, selectionRange: n }, fc = !1, B = t; B !== null; )
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
                  var m = y.memoizedProps, x = y.memoizedState, h = t.stateNode, g = h.getSnapshotBeforeUpdate(t.elementType === t.type ? m : En(t.type, m), x);
                  h.__reactInternalSnapshotBeforeUpdate = g;
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
  return y = hy, hy = !1, y;
}
function ms(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Mh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yd(e, t) {
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
function Ih(e) {
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
function Lw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Lw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yn], delete t[Bs], delete t[gh], delete t[oM], delete t[iM])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function jw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function my(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jw(e.return))
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
function Rh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = mc));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Rh(e, t, n), e = e.sibling; e !== null; )
      Rh(e, t, n), e = e.sibling;
}
function $h(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for ($h(e, t, n), e = e.sibling; e !== null; )
      $h(e, t, n), e = e.sibling;
}
var dt = null, On = !1;
function Ar(e, t, n) {
  for (n = n.child; n !== null; )
    zw(e, t, n), n = n.sibling;
}
function zw(e, t, n) {
  if (Qn && typeof Qn.onCommitFiberUnmount == "function")
    try {
      Qn.onCommitFiberUnmount(cd, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      xt || _i(n, t);
    case 6:
      var r = dt, o = On;
      dt = null, Ar(e, t, n), dt = r, On = o, dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? jf(e.parentNode, n) : e.nodeType === 1 && jf(e, n), Ls(e)) : jf(dt, n.stateNode));
      break;
    case 4:
      r = dt, o = On, dt = n.stateNode.containerInfo, On = !0, Ar(e, t, n), dt = r, On = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Mh(n, t, a), o = o.next;
        } while (o !== r);
      }
      Ar(e, t, n);
      break;
    case 1:
      if (!xt && (_i(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
function vy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new SM()), t.forEach(function(r) {
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
        zw(i, a, o), dt = null, On = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        We(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Nw(t, e), t = t.sibling;
}
function Nw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (_n(t, e), Vn(e), r & 4) {
        try {
          ms(3, e, e.return), yd(3, e);
        } catch (m) {
          We(e, e.return, m);
        }
        try {
          ms(5, e, e.return);
        } catch (m) {
          We(e, e.return, m);
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
          $s(o, "");
        } catch (m) {
          We(e, e.return, m);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && sS(o, i), rh(s, a);
            var u = rh(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? fS(o, d) : c === "dangerouslySetInnerHTML" ? cS(o, d) : c === "children" ? $s(o, d) : zm(o, c, d, u);
            }
            switch (s) {
              case "input":
                Zp(o, i);
                break;
              case "textarea":
                lS(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? Vi(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? Vi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Vi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Bs] = i;
          } catch (m) {
            We(e, e.return, m);
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
        } catch (m) {
          We(e, e.return, m);
        }
      }
      break;
    case 3:
      if (_n(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Ls(t.containerInfo);
        } catch (m) {
          We(e, e.return, m);
        }
      break;
    case 4:
      _n(t, e), Vn(e);
      break;
    case 13:
      _n(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (yv = Ke())), r & 4 && vy(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (xt = (u = xt) || c, _n(t, e), xt = u) : _n(t, e), Vn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (B = e, c = e.child; c !== null; ) {
            for (d = B = c; B !== null; ) {
              switch (f = B, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ms(4, f, f.return);
                  break;
                case 1:
                  _i(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (m) {
                      We(r, n, m);
                    }
                  }
                  break;
                case 5:
                  _i(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    yy(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, B = p) : yy(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = dS("display", a));
                } catch (m) {
                  We(e, e.return, m);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (m) {
                  We(e, e.return, m);
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
      _n(t, e), Vn(e), r & 4 && vy(e);
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
          if (jw(n)) {
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
          r.flags & 32 && ($s(o, ""), r.flags &= -33);
          var i = my(e);
          $h(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = my(e);
          Rh(e, s, a);
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
  B = e, Vw(e);
}
function Vw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || tu;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || xt;
        s = tu;
        var u = xt;
        if (tu = a, (xt = l) && !u)
          for (B = o; B !== null; )
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? by(o) : l !== null ? (l.return = a, B = l) : by(o);
        for (; i !== null; )
          B = i, Vw(i), i = i.sibling;
        B = o, tu = s, xt = u;
      }
      gy(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : gy(e);
  }
}
function gy(e) {
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
              xt || yd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : En(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ey(t, i, r);
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
                ey(t, a, n);
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
                    d !== null && Ls(d);
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
        xt || t.flags & 512 && Ih(t);
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
function yy(e) {
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
function by(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yd(4, t);
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
            Ih(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Ih(t);
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
var kM = Math.ceil, _c = Or.ReactCurrentDispatcher, vv = Or.ReactCurrentOwner, vn = Or.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Kt = 0, Ti = po(0), nt = 0, Ys = null, Yo = 0, bd = 0, gv = 0, vs = null, Rt = null, yv = 0, sa = 1 / 0, ur = null, Tc = !1, Ah = null, eo = null, nu = !1, Yr = null, Ec = 0, gs = 0, Dh = null, Lu = -1, ju = 0;
function Et() {
  return he & 6 ? Ke() : Lu !== -1 ? Lu : Lu = Ke();
}
function to(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : sM.transition !== null ? (ju === 0 && (ju = kS()), ju) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : IS(e.type)), e) : 1;
}
function An(e, t, n, r) {
  if (50 < gs)
    throw gs = 0, Dh = null, Error(F(185));
  fl(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (bd |= n), nt === 4 && Wr(e, pt)), Lt(e, r), n === 1 && he === 0 && !(t.mode & 1) && (sa = Ke() + 500, md && ho()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  sO(e, t);
  var r = dc(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && E0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && E0(n), t === 1)
      e.tag === 0 ? aM(xy.bind(null, e)) : XS(xy.bind(null, e)), nM(function() {
        !(he & 6) && ho();
      }), n = null;
    else {
      switch (PS(r)) {
        case 1:
          n = Hm;
          break;
        case 4:
          n = wS;
          break;
        case 16:
          n = cc;
          break;
        case 536870912:
          n = CS;
          break;
        default:
          n = cc;
      }
      n = qw(n, Bw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Bw(e, t) {
  if (Lu = -1, ju = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Gi() && e.callbackNode !== n)
    return null;
  var r = dc(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Oc(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Hw();
    (st !== e || pt !== t) && (ur = null, sa = Ke() + 500, jo(e, t));
    do
      try {
        TM();
        break;
      } catch (s) {
        Ww(e, s);
      }
    while (!0);
    rv(), _c.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = nt);
  }
  if (t !== 0) {
    if (t === 2 && (o = lh(e), o !== 0 && (r = o, t = Fh(e, o))), t === 1)
      throw n = Ys, jo(e, 0), Wr(e, r), Lt(e, Ke()), n;
    if (t === 6)
      Wr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !PM(o) && (t = Oc(e, r), t === 2 && (i = lh(e), i !== 0 && (r = i, t = Fh(e, i))), t === 1))
        throw n = Ys, jo(e, 0), Wr(e, r), Lt(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Po(e, Rt, ur);
          break;
        case 3:
          if (Wr(e, r), (r & 130023424) === r && (t = yv + 500 - Ke(), 10 < t)) {
            if (dc(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Et(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = vh(Po.bind(null, e, Rt, ur), t);
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
            e.timeoutHandle = vh(Po.bind(null, e, Rt, ur), r);
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
  return Lt(e, Ke()), e.callbackNode === n ? Bw.bind(null, e) : null;
}
function Fh(e, t) {
  var n = vs;
  return e.current.memoizedState.isDehydrated && (jo(e, t).flags |= 256), e = Oc(e, t), e !== 2 && (t = Rt, Rt = n, t !== null && Lh(t)), e;
}
function Lh(e) {
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
  for (t &= ~gv, t &= ~bd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $n(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xy(e) {
  if (he & 6)
    throw Error(F(327));
  Gi();
  var t = dc(e, 0);
  if (!(t & 1))
    return Lt(e, Ke()), null;
  var n = Oc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = lh(e);
    r !== 0 && (t = r, n = Fh(e, r));
  }
  if (n === 1)
    throw n = Ys, jo(e, 0), Wr(e, t), Lt(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Po(e, Rt, ur), Lt(e, Ke()), null;
}
function bv(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (sa = Ke() + 500, md && ho());
  }
}
function qo(e) {
  Yr !== null && Yr.tag === 0 && !(he & 6) && Gi();
  var t = he;
  he |= 1;
  var n = vn.transition, r = we;
  try {
    if (vn.transition = null, we = 1, e)
      return e();
  } finally {
    we = r, vn.transition = n, he = t, !(he & 6) && ho();
  }
}
function xv() {
  Kt = Ti.current, Re(Ti);
}
function jo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, tM(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (ev(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && vc();
          break;
        case 3:
          ia(), Re(Dt), Re(wt), uv();
          break;
        case 5:
          lv(r);
          break;
        case 4:
          ia();
          break;
        case 13:
          Re(je);
          break;
        case 19:
          Re(je);
          break;
        case 10:
          ov(r.type._context);
          break;
        case 22:
        case 23:
          xv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = no(e.current, null), pt = Kt = t, nt = 0, Ys = null, gv = bd = Yo = 0, Rt = vs = null, $o !== null) {
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
function Ww(e, t) {
  do {
    var n = Ze;
    try {
      if (rv(), Au.current = Pc, kc) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        kc = !1;
      }
      if (Ko = 0, it = tt = Ne = null, hs = !1, Us = 0, vv.current = null, n === null || n.return === null) {
        nt = 1, Ys = t, Ze = null;
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
          var p = sy(a);
          if (p !== null) {
            p.flags &= -257, ly(p, a, s, i, t), p.mode & 1 && ay(i, u, t), t = p, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var m = /* @__PURE__ */ new Set();
              m.add(l), t.updateQueue = m;
            } else
              y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ay(i, u, t), Sv();
              break e;
            }
            l = Error(F(426));
          }
        } else if (Fe && s.mode & 1) {
          var x = sy(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), ly(x, a, s, i, t), tv(aa(l, s));
            break e;
          }
        }
        i = l = aa(l, s), nt !== 4 && (nt = 2), vs === null ? vs = [i] : vs.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = _w(i, l, t);
              J0(i, h);
              break e;
            case 1:
              s = l;
              var g = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (eo === null || !eo.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Tw(i, s, t);
                J0(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gw(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hw() {
  var e = _c.current;
  return _c.current = Pc, e === null ? Pc : e;
}
function Sv() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4), st === null || !(Yo & 268435455) && !(bd & 268435455) || Wr(st, pt);
}
function Oc(e, t) {
  var n = he;
  he |= 2;
  var r = Hw();
  (st !== e || pt !== t) && (ur = null, jo(e, t));
  do
    try {
      _M();
      break;
    } catch (o) {
      Ww(e, o);
    }
  while (!0);
  if (rv(), he = n, _c.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, nt;
}
function _M() {
  for (; Ze !== null; )
    Uw(Ze);
}
function TM() {
  for (; Ze !== null && !ZE(); )
    Uw(Ze);
}
function Uw(e) {
  var t = Yw(e.alternate, e, Kt);
  e.memoizedProps = e.pendingProps, t === null ? Gw(e) : Ze = t, vv.current = null;
}
function Gw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xM(n, t), n !== null) {
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
  var r = we, o = vn.transition;
  try {
    vn.transition = null, we = 1, EM(e, t, n, r);
  } finally {
    vn.transition = o, we = r;
  }
  return null;
}
function EM(e, t, n, r) {
  do
    Gi();
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
  if (lO(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || nu || (nu = !0, qw(cc, function() {
    return Gi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = vn.transition, vn.transition = null;
    var a = we;
    we = 1;
    var s = he;
    he |= 4, vv.current = null, wM(e, n), Nw(n, e), YO(hh), fc = !!ph, hh = ph = null, e.current = n, CM(n), JE(), he = s, we = a, vn.transition = i;
  } else
    e.current = n;
  if (nu && (nu = !1, Yr = e, Ec = o), i = e.pendingLanes, i === 0 && (eo = null), nO(n.stateNode), Lt(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Tc)
    throw Tc = !1, e = Ah, Ah = null, e;
  return Ec & 1 && e.tag !== 0 && Gi(), i = e.pendingLanes, i & 1 ? e === Dh ? gs++ : (gs = 0, Dh = e) : gs = 0, ho(), null;
}
function Gi() {
  if (Yr !== null) {
    var e = PS(Ec), t = vn.transition, n = we;
    try {
      if (vn.transition = null, we = 16 > e ? 16 : e, Yr === null)
        var r = !1;
      else {
        if (e = Yr, Yr = null, Ec = 0, he & 6)
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
                      ms(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (Lw(c), c === u) {
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
                var m = y.child;
                if (m !== null) {
                  y.child = null;
                  do {
                    var x = m.sibling;
                    m.sibling = null, m = x;
                  } while (m !== null);
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
                      ms(9, i, i.return);
                  }
                var h = i.sibling;
                if (h !== null) {
                  h.return = i.return, B = h;
                  break e;
                }
                B = i.return;
              }
        }
        var g = e.current;
        for (B = g; B !== null; ) {
          a = B;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null)
            b.return = a, B = b;
          else
            e:
              for (a = g; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yd(9, s);
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
            Qn.onPostCommitFiberRoot(cd, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      we = n, vn.transition = t;
    }
  }
  return !1;
}
function Sy(e, t, n) {
  t = aa(n, t), t = _w(e, t, 1), e = Jr(e, t, 1), t = Et(), e !== null && (fl(e, 1, t), Lt(e, t));
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
          e = aa(n, e), e = Tw(t, e, 1), t = Jr(t, e, 1), e = Et(), t !== null && (fl(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function OM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Et(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (nt === 4 || nt === 3 && (pt & 130023424) === pt && 500 > Ke() - yv ? jo(e, 0) : gv |= n), Lt(e, t);
}
function Kw(e, t) {
  t === 0 && (e.mode & 1 ? (t = Gl, Gl <<= 1, !(Gl & 130023424) && (Gl = 4194304)) : t = 1);
  var n = Et();
  e = kr(e, t), e !== null && (fl(e, t, n), Lt(e, n));
}
function MM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Kw(e, n);
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
  r !== null && r.delete(t), Kw(e, n);
}
var Yw;
Yw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current)
      At = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return At = !1, yM(e, t, n);
      At = !!(e.flags & 131072);
    }
  else
    At = !1, Fe && t.flags & 1048576 && QS(t, bc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fu(e, t), e = t.pendingProps;
      var o = na(t, wt.current);
      Ui(t, n), o = dv(null, t, r, e, o, n);
      var i = fv();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(r) ? (i = !0, gc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, av(t), o.updater = vd, t.stateNode = o, o._reactInternals = t, Ch(t, r, e, n), t = _h(null, t, r, !0, i, n)) : (t.tag = 0, Fe && i && Jm(t), Pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = $M(r), e = En(r, e), o) {
          case 0:
            t = Ph(null, t, r, e, n);
            break e;
          case 1:
            t = dy(null, t, r, e, n);
            break e;
          case 11:
            t = uy(null, t, r, e, n);
            break e;
          case 14:
            t = cy(null, t, r, En(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), Ph(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), dy(e, t, r, o, n);
    case 3:
      e: {
        if (Iw(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, tw(e, t), wc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = aa(Error(F(423)), t), t = fy(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = aa(Error(F(424)), t), t = fy(e, t, r, n, o);
            break e;
          } else
            for (Yt = Zr(t.stateNode.containerInfo.firstChild), qt = t, Fe = !0, Mn = null, n = iw(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ra(), r === o) {
            t = Pr(e, t, n);
            break e;
          }
          Pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return aw(t), e === null && xh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, mh(r, o) ? a = null : i !== null && mh(r, i) && (t.flags |= 32), Mw(e, t), Pt(e, t, a, n), t.child;
    case 6:
      return e === null && xh(t), null;
    case 13:
      return Rw(e, t, n);
    case 4:
      return sv(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = oa(t, null, r, n) : Pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), uy(e, t, r, o, n);
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Te(xc, r._currentValue), r._currentValue = a, i !== null)
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
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Sh(
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
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Sh(a, n, t), a = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, Ui(t, n), o = yn(o), r = r(o), t.flags |= 1, Pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = En(r, t.pendingProps), o = En(r.type, o), cy(e, t, r, o, n);
    case 15:
      return Ew(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), Fu(e, t), t.tag = 1, Ft(r) ? (e = !0, gc(t)) : e = !1, Ui(t, n), rw(t, r, o), Ch(t, r, o, n), _h(null, t, r, !0, e, n);
    case 19:
      return $w(e, t, n);
    case 22:
      return Ow(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function qw(e, t) {
  return SS(e, t);
}
function RM(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function hn(e, t, n, r) {
  return new RM(e, t, n, r);
}
function wv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function $M(e) {
  if (typeof e == "function")
    return wv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Vm)
      return 11;
    if (e === Bm)
      return 14;
  }
  return 2;
}
function no(e, t) {
  var n = e.alternate;
  return n === null ? (n = hn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function zu(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    wv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case gi:
          return zo(n.children, o, i, t);
        case Nm:
          a = 8, o |= 8;
          break;
        case Kp:
          return e = hn(12, n, t, o | 2), e.elementType = Kp, e.lanes = i, e;
        case Yp:
          return e = hn(13, n, t, o), e.elementType = Yp, e.lanes = i, e;
        case qp:
          return e = hn(19, n, t, o), e.elementType = qp, e.lanes = i, e;
        case oS:
          return xd(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case nS:
                a = 10;
                break e;
              case rS:
                a = 9;
                break e;
              case Vm:
                a = 11;
                break e;
              case Bm:
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
function xd(e, t, n, r) {
  return e = hn(22, e, r, t), e.elementType = oS, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Gf(e, t, n) {
  return e = hn(6, e, null, t), e.lanes = n, e;
}
function Kf(e, t, n) {
  return t = hn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function AM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tf(0), this.expirationTimes = Tf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Cv(e, t, n, r, o, i, a, s, l) {
  return e = new AM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = hn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, av(i), e;
}
function DM(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: vi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xw(e) {
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
      return qS(e, n, t);
  }
  return t;
}
function Qw(e, t, n, r, o, i, a, s, l) {
  return e = Cv(n, r, !0, e, o, i, a, s, l), e.context = Xw(null), n = e.current, r = Et(), o = to(n), i = gr(r, o), i.callback = t ?? null, Jr(n, i, o), e.current.lanes = o, fl(e, o, r), Lt(e, r), e;
}
function Sd(e, t, n, r) {
  var o = t.current, i = Et(), a = to(o);
  return n = Xw(n), t.context === null ? t.context = n : t.pendingContext = n, t = gr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jr(o, t, a), e !== null && (An(e, o, a, i), $u(e, o, a)), a;
}
function Mc(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wy(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function kv(e, t) {
  wy(e, t), (e = e.alternate) && wy(e, t);
}
function FM() {
  return null;
}
var Zw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Pv(e) {
  this._internalRoot = e;
}
wd.prototype.render = Pv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  Sd(e, t, null, null);
};
wd.prototype.unmount = Pv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qo(function() {
      Sd(null, e, null, null);
    }), t[Cr] = null;
  }
};
function wd(e) {
  this._internalRoot = e;
}
wd.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ES();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Br.length && t !== 0 && t < Br[n].priority; n++)
      ;
    Br.splice(n, 0, e), n === 0 && MS(e);
  }
};
function _v(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Cy() {
}
function LM(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Mc(a);
        i.call(u);
      };
    }
    var a = Qw(t, r, e, 0, null, !1, !1, "", Cy);
    return e._reactRootContainer = a, e[Cr] = a.current, Ns(e.nodeType === 8 ? e.parentNode : e), qo(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Mc(l);
      s.call(u);
    };
  }
  var l = Cv(e, 0, !1, null, null, !1, !1, "", Cy);
  return e._reactRootContainer = l, e[Cr] = l.current, Ns(e.nodeType === 8 ? e.parentNode : e), qo(function() {
    Sd(t, l, n, r);
  }), l;
}
function kd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Mc(a);
        s.call(l);
      };
    }
    Sd(t, a, e, o);
  } else
    a = LM(n, t, e, o, r);
  return Mc(a);
}
_S = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ja(t.pendingLanes);
        n !== 0 && (Um(t, n | 1), Lt(t, Ke()), !(he & 6) && (sa = Ke() + 500, ho()));
      }
      break;
    case 13:
      qo(function() {
        var r = kr(e, 1);
        if (r !== null) {
          var o = Et();
          An(r, e, 1, o);
        }
      }), kv(e, 1);
  }
};
Gm = function(e) {
  if (e.tag === 13) {
    var t = kr(e, 134217728);
    if (t !== null) {
      var n = Et();
      An(t, e, 134217728, n);
    }
    kv(e, 134217728);
  }
};
TS = function(e) {
  if (e.tag === 13) {
    var t = to(e), n = kr(e, t);
    if (n !== null) {
      var r = Et();
      An(n, e, t, r);
    }
    kv(e, t);
  }
};
ES = function() {
  return we;
};
OS = function(e, t) {
  var n = we;
  try {
    return we = e, t();
  } finally {
    we = n;
  }
};
ih = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = hd(r);
            if (!o)
              throw Error(F(90));
            aS(r), Zp(r, o);
          }
        }
      }
      break;
    case "textarea":
      lS(e, n);
      break;
    case "select":
      t = n.value, t != null && Vi(e, !!n.multiple, t, !1);
  }
};
mS = bv;
vS = qo;
var jM = { usingClientEntryPoint: !1, Events: [hl, Si, hd, pS, hS, bv] }, Va = { findFiberByHostInstance: Ro, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, zM = { bundleType: Va.bundleType, version: Va.version, rendererPackageName: Va.rendererPackageName, rendererConfig: Va.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Or.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bS(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Va.findFiberByHostInstance || FM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ru.isDisabled && ru.supportsFiber)
    try {
      cd = ru.inject(zM), Qn = ru;
    } catch {
    }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jM;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_v(t))
    throw Error(F(200));
  return DM(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!_v(e))
    throw Error(F(299));
  var n = !1, r = "", o = Zw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Cv(e, 1, !1, null, null, n, !1, r, o), e[Cr] = t.current, Ns(e.nodeType === 8 ? e.parentNode : e), new Pv(t);
};
tn.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = bS(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return qo(e);
};
tn.hydrate = function(e, t, n) {
  if (!Cd(t))
    throw Error(F(200));
  return kd(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!_v(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Zw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Qw(t, null, e, 1, n ?? null, o, !1, i, a), e[Cr] = t.current, Ns(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new wd(t);
};
tn.render = function(e, t, n) {
  if (!Cd(t))
    throw Error(F(200));
  return kd(null, e, t, !1, n);
};
tn.unmountComponentAtNode = function(e) {
  if (!Cd(e))
    throw Error(F(40));
  return e._reactRootContainer ? (qo(function() {
    kd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Cr] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = bv;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Cd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return kd(e, t, n, !1, r);
};
tn.version = "18.2.0-next-9e3b772b8-20220608";
function Jw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jw);
    } catch (e) {
      console.error(e);
    }
}
Jw(), Qx.exports = tn;
var Pd = Qx.exports, ky = Pd;
Up.createRoot = ky.createRoot, Up.hydrateRoot = ky.hydrateRoot;
var eC = "Expected a function", Py = NaN, NM = "[object Symbol]", VM = /^\s+|\s+$/g, BM = /^[-+]0x[0-9a-f]+$/i, WM = /^0b[01]+$/i, HM = /^0o[0-7]+$/i, UM = parseInt, GM = typeof Gr == "object" && Gr && Gr.Object === Object && Gr, KM = typeof self == "object" && self && self.Object === Object && self, YM = GM || KM || Function("return this")(), qM = Object.prototype, XM = qM.toString, QM = Math.max, ZM = Math.min, Yf = function() {
  return YM.Date.now();
};
function JM(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(eC);
  t = _y(t) || 0, Ic(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? QM(_y(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var _ = r, T = o;
    return r = o = void 0, u = P, a = e.apply(T, _), a;
  }
  function y(P) {
    return u = P, s = setTimeout(h, t), c ? p(P) : a;
  }
  function m(P) {
    var _ = P - l, T = P - u, M = t - _;
    return d ? ZM(M, i - T) : M;
  }
  function x(P) {
    var _ = P - l, T = P - u;
    return l === void 0 || _ >= t || _ < 0 || d && T >= i;
  }
  function h() {
    var P = Yf();
    if (x(P))
      return g(P);
    s = setTimeout(h, m(P));
  }
  function g(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function w() {
    return s === void 0 ? a : g(Yf());
  }
  function k() {
    var P = Yf(), _ = x(P);
    if (r = arguments, o = this, l = P, _) {
      if (s === void 0)
        return y(l);
      if (d)
        return s = setTimeout(h, t), p(l);
    }
    return s === void 0 && (s = setTimeout(h, t)), a;
  }
  return k.cancel = b, k.flush = w, k;
}
function eI(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(eC);
  return Ic(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), JM(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Ic(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function tI(e) {
  return !!e && typeof e == "object";
}
function nI(e) {
  return typeof e == "symbol" || tI(e) && XM.call(e) == NM;
}
function _y(e) {
  if (typeof e == "number")
    return e;
  if (nI(e))
    return Py;
  if (Ic(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ic(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(VM, "");
  var n = WM.test(e);
  return n || HM.test(e) ? UM(e.slice(2), n ? 2 : 8) : BM.test(e) ? Py : +e;
}
var rI = eI;
const oI = /* @__PURE__ */ cl(rI);
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
}(), bt = "-ms-", Rc = "-moz-", ge = "-webkit-", tC = "comm", Tv = "rule", Ev = "decl", lI = "@import", nC = "@keyframes", uI = "@layer", cI = Math.abs, _d = String.fromCharCode, dI = Object.assign;
function fI(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function rC(e) {
  return e.trim();
}
function pI(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function jh(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function qs(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function Ov(e) {
  return e.length;
}
function ou(e, t) {
  return t.push(e), e;
}
function hI(e, t) {
  return e.map(t).join("");
}
var Td = 1, la = 1, oC = 0, Vt = 0, Qe = 0, Pa = "";
function Ed(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Td, column: la, length: a, return: "" };
}
function Ba(e, t) {
  return dI(Ed("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function mI() {
  return Qe;
}
function vI() {
  return Qe = Vt > 0 ? ft(Pa, --Vt) : 0, la--, Qe === 10 && (la = 1, Td--), Qe;
}
function Xt() {
  return Qe = Vt < oC ? ft(Pa, Vt++) : 0, la++, Qe === 10 && (la = 1, Td++), Qe;
}
function Jn() {
  return ft(Pa, Vt);
}
function Nu() {
  return Vt;
}
function vl(e, t) {
  return qs(Pa, e, t);
}
function Xs(e) {
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
function iC(e) {
  return Td = la = 1, oC = Gn(Pa = e), Vt = 0, [];
}
function aC(e) {
  return Pa = "", e;
}
function Vu(e) {
  return rC(vl(Vt - 1, zh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gI(e) {
  for (; (Qe = Jn()) && Qe < 33; )
    Xt();
  return Xs(e) > 2 || Xs(Qe) > 3 ? "" : " ";
}
function yI(e, t) {
  for (; --t && Xt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return vl(e, Nu() + (t < 6 && Jn() == 32 && Xt() == 32));
}
function zh(e) {
  for (; Xt(); )
    switch (Qe) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && zh(Qe);
        break;
      case 40:
        e === 41 && zh(e);
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
  return "/*" + vl(t, Vt - 1) + "*" + _d(e === 47 ? e : Xt());
}
function xI(e) {
  for (; !Xs(Jn()); )
    Xt();
  return vl(e, Vt);
}
function SI(e) {
  return aC(Bu("", null, null, null, [""], e = iC(e), 0, [0], e));
}
function Bu(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, y = 0, m = 1, x = 1, h = 1, g = 0, b = "", w = o, k = i, P = r, _ = b; x; )
    switch (y = g, g = Xt()) {
      case 40:
        if (y != 108 && ft(_, d - 1) == 58) {
          jh(_ += ye(Vu(g), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Vu(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += gI(y);
        break;
      case 92:
        _ += yI(Nu() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            ou(wI(bI(Xt(), Nu()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * m:
        s[u++] = Gn(_) * h;
      case 125 * m:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            h == -1 && (_ = ye(_, /\f/g, "")), p > 0 && Gn(_) - d && ou(p > 32 ? Ey(_ + ";", r, n, d - 1) : Ey(ye(_, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (ou(P = Ty(_, t, n, u, c, o, s, b, w = [], k = [], d), i), g === 123)
              if (c === 0)
                Bu(_, t, P, P, w, i, d, s, k);
              else
                switch (f === 99 && ft(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bu(e, P, P, r && ou(Ty(e, P, P, 0, 0, o, s, b, o, w = [], d), k), o, k, d, s, r ? w : k);
                    break;
                  default:
                    Bu(_, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, m = h = 1, b = _ = "", d = a;
        break;
      case 58:
        d = 1 + Gn(_), p = y;
      default:
        if (m < 1) {
          if (g == 123)
            --m;
          else if (g == 125 && m++ == 0 && vI() == 125)
            continue;
        }
        switch (_ += _d(g), g * m) {
          case 38:
            h = c > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[u++] = (Gn(_) - 1) * h, h = 1;
            break;
          case 64:
            Jn() === 45 && (_ += Vu(Xt())), f = Jn(), c = d = Gn(b = _ += xI(Nu())), g++;
            break;
          case 45:
            y === 45 && Gn(_) == 2 && (m = 0);
        }
    }
  return i;
}
function Ty(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = Ov(f), y = 0, m = 0, x = 0; y < r; ++y)
    for (var h = 0, g = qs(e, d + 1, d = cI(m = a[y])), b = e; h < p; ++h)
      (b = rC(m > 0 ? f[h] + " " + g : ye(g, /&\f/g, f[h]))) && (l[x++] = b);
  return Ed(e, t, n, o === 0 ? Tv : s, l, u, c);
}
function wI(e, t, n) {
  return Ed(e, t, n, tC, _d(mI()), qs(e, 2, -2), 0);
}
function Ey(e, t, n, r) {
  return Ed(e, t, n, Ev, qs(e, 0, r), qs(e, r + 1, -1), r);
}
function Ki(e, t) {
  for (var n = "", r = Ov(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function CI(e, t, n, r) {
  switch (e.type) {
    case uI:
      if (e.children.length)
        break;
    case lI:
    case Ev:
      return e.return = e.return || e.value;
    case tC:
      return "";
    case nC:
      return e.return = e.value + "{" + Ki(e.children, r) + "}";
    case Tv:
      e.value = e.props.join(",");
  }
  return Gn(n = Ki(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function kI(e) {
  var t = Ov(e);
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
var Oy = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function sC(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var _I = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Jn(), o === 38 && i === 12 && (n[r] = 1), !Xs(i); )
    Xt();
  return vl(t, Vt);
}, TI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Xs(o)) {
      case 0:
        o === 38 && Jn() === 12 && (n[r] = 1), t[r] += _I(Vt - 1, n, r);
        break;
      case 2:
        t[r] += Vu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Jn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += _d(o);
    }
  while (o = Xt());
  return t;
}, EI = function(t, n) {
  return aC(TI(iC(t), n));
}, My = /* @__PURE__ */ new WeakMap(), OI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !My.get(r)) && !o) {
      My.set(t, !0);
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
function lC(e, t) {
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
      return ge + e + Rc + e + bt + e + e;
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
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Rc + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~jh(e, "stretch") ? lC(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Gn(e) - 3 - (~jh(e, "!important") && 10))) {
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
      case Ev:
        t.return = lC(t.value, t.length);
        break;
      case nC:
        return Ki([Ba(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case Tv:
        if (t.length)
          return hI(t.props, function(i) {
            switch (pI(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ki([Ba(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + Rc + "$1")]
                })], o);
              case "::placeholder":
                return Ki([Ba(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), Ba(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + Rc + "$1")]
                }), Ba(t, {
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
    Array.prototype.forEach.call(r, function(m) {
      var x = m.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || RI, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var x = m.getAttribute("data-emotion").split(" "), h = 1; h < x.length; h++)
        i[x[h]] = !0;
      s.push(m);
    }
  );
  var l, u = [OI, MI];
  {
    var c, d = [CI, PI(function(m) {
      c.insert(m);
    })], f = kI(u.concat(o, d)), p = function(x) {
      return Ki(SI(x), f);
    };
    l = function(x, h, g, b) {
      c = g, p(x ? x + "{" + h.styles + "}" : h.styles), b && (y.inserted[h.name] = !0);
    };
  }
  var y = {
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
var uC = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, Mv = lt ? Symbol.for("react.element") : 60103, Iv = lt ? Symbol.for("react.portal") : 60106, Od = lt ? Symbol.for("react.fragment") : 60107, Md = lt ? Symbol.for("react.strict_mode") : 60108, Id = lt ? Symbol.for("react.profiler") : 60114, Rd = lt ? Symbol.for("react.provider") : 60109, $d = lt ? Symbol.for("react.context") : 60110, Rv = lt ? Symbol.for("react.async_mode") : 60111, Ad = lt ? Symbol.for("react.concurrent_mode") : 60111, Dd = lt ? Symbol.for("react.forward_ref") : 60112, Fd = lt ? Symbol.for("react.suspense") : 60113, AI = lt ? Symbol.for("react.suspense_list") : 60120, Ld = lt ? Symbol.for("react.memo") : 60115, jd = lt ? Symbol.for("react.lazy") : 60116, DI = lt ? Symbol.for("react.block") : 60121, FI = lt ? Symbol.for("react.fundamental") : 60117, LI = lt ? Symbol.for("react.responder") : 60118, jI = lt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Mv:
        switch (e = e.type, e) {
          case Rv:
          case Ad:
          case Od:
          case Id:
          case Md:
          case Fd:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case $d:
              case Dd:
              case jd:
              case Ld:
              case Rd:
                return e;
              default:
                return t;
            }
        }
      case Iv:
        return t;
    }
  }
}
function cC(e) {
  return rn(e) === Ad;
}
Ce.AsyncMode = Rv;
Ce.ConcurrentMode = Ad;
Ce.ContextConsumer = $d;
Ce.ContextProvider = Rd;
Ce.Element = Mv;
Ce.ForwardRef = Dd;
Ce.Fragment = Od;
Ce.Lazy = jd;
Ce.Memo = Ld;
Ce.Portal = Iv;
Ce.Profiler = Id;
Ce.StrictMode = Md;
Ce.Suspense = Fd;
Ce.isAsyncMode = function(e) {
  return cC(e) || rn(e) === Rv;
};
Ce.isConcurrentMode = cC;
Ce.isContextConsumer = function(e) {
  return rn(e) === $d;
};
Ce.isContextProvider = function(e) {
  return rn(e) === Rd;
};
Ce.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mv;
};
Ce.isForwardRef = function(e) {
  return rn(e) === Dd;
};
Ce.isFragment = function(e) {
  return rn(e) === Od;
};
Ce.isLazy = function(e) {
  return rn(e) === jd;
};
Ce.isMemo = function(e) {
  return rn(e) === Ld;
};
Ce.isPortal = function(e) {
  return rn(e) === Iv;
};
Ce.isProfiler = function(e) {
  return rn(e) === Id;
};
Ce.isStrictMode = function(e) {
  return rn(e) === Md;
};
Ce.isSuspense = function(e) {
  return rn(e) === Fd;
};
Ce.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Od || e === Ad || e === Id || e === Md || e === Fd || e === AI || typeof e == "object" && e !== null && (e.$$typeof === jd || e.$$typeof === Ld || e.$$typeof === Rd || e.$$typeof === $d || e.$$typeof === Dd || e.$$typeof === FI || e.$$typeof === LI || e.$$typeof === jI || e.$$typeof === DI);
};
Ce.typeOf = rn;
uC.exports = Ce;
var zI = uC.exports, dC = zI, NI = {
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
}, fC = {};
fC[dC.ForwardRef] = NI;
fC[dC.Memo] = VI;
var BI = !0;
function pC(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var $v = function(t, n, r) {
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
}, Av = function(t, n, r) {
  $v(t, n, r);
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
}, UI = /[A-Z]|^ms/g, GI = /_EMO_([^_]+?)_([^]*?)_EMO_/g, hC = function(t) {
  return t.charCodeAt(1) === 45;
}, Iy = function(t) {
  return t != null && typeof t != "boolean";
}, qf = /* @__PURE__ */ sC(function(e) {
  return hC(e) ? e : e.replace(UI, "-$&").toLowerCase();
}), Ry = function(t, n) {
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
  return HI[t] !== 1 && !hC(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Qs(e, t, n) {
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
        return Kn = i, Qs(e, t, a);
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
      r += Qs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Iy(a) && (r += qf(i) + ":" + Ry(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Iy(a[s]) && (r += qf(i) + ":" + Ry(i, a[s]) + ";");
      else {
        var l = Qs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += qf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var $y = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Kn, zd = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Kn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Qs(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Qs(r, n, t[s]), o && (i += a[s]);
  $y.lastIndex = 0;
  for (var l = "", u; (u = $y.exec(i)) !== null; )
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
}, mC = y0.useInsertionEffect ? y0.useInsertionEffect : !1, vC = mC || YI, Ay = mC || v.useLayoutEffect, Dv = {}.hasOwnProperty, gC = /* @__PURE__ */ v.createContext(
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
gC.Provider;
var Fv = function(t) {
  return /* @__PURE__ */ v.forwardRef(function(n, r) {
    var o = v.useContext(gC);
    return t(n, o, r);
  });
}, ua = /* @__PURE__ */ v.createContext({}), qI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, XI = /* @__PURE__ */ Oy(function(e) {
  return Oy(function(t) {
    return qI(e, t);
  });
}), QI = function(t) {
  var n = v.useContext(ua);
  return t.theme !== n && (n = XI(n)(t.theme)), /* @__PURE__ */ v.createElement(ua.Provider, {
    value: n
  }, t.children);
}, Nh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ZI = function(t, n) {
  var r = {};
  for (var o in n)
    Dv.call(n, o) && (r[o] = n[o]);
  return r[Nh] = t, r;
}, JI = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return $v(n, r, o), vC(function() {
    return Av(n, r, o);
  }), null;
}, eR = /* @__PURE__ */ Fv(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Nh], i = [r], a = "";
  typeof e.className == "string" ? a = pC(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = zd(i, void 0, v.useContext(ua));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Dv.call(e, u) && u !== "css" && u !== Nh && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(JI, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ v.createElement(o, l));
}), tR = eR, ee = function(t, n) {
  var r = arguments;
  if (n == null || !Dv.call(n, "css"))
    return v.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = tR, i[1] = ZI(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return v.createElement.apply(null, i);
}, Nd = /* @__PURE__ */ Fv(function(e, t) {
  var n = e.styles, r = zd([n], void 0, v.useContext(ua)), o = v.useRef();
  return Ay(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Ay(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Av(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Lv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return zd(t);
}
var yC = function() {
  var t = Lv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, bC = String.raw, xC = bC`
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
`, nR = () => /* @__PURE__ */ S.jsx(Nd, { styles: xC }), rR = ({ scope: e = "" }) => /* @__PURE__ */ S.jsx(
  Nd,
  {
    styles: bC`
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

      ${xC}
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
  return /* @__PURE__ */ S.jsx(iR, { value: { zIndex: n }, children: t });
}
SC.displayName = "PortalManager";
var ca = globalThis != null && globalThis.document ? v.useLayoutEffect : v.useEffect, [wC, sR] = Je({
  strict: !1,
  name: "PortalContext"
}), jv = "chakra-portal", lR = ".chakra-portal", uR = (e) => /* @__PURE__ */ S.jsx(
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
  ca(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = jv, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ S.jsx(uR, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? Pd.createPortal(
    /* @__PURE__ */ S.jsx(wC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ S.jsx(
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
    return l && (l.className = jv), l;
  }, [o]), [, s] = v.useState({});
  return ca(() => s({}), []), ca(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? Pd.createPortal(
    /* @__PURE__ */ S.jsx(wC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function gl(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ S.jsx(dR, { containerRef: n, ...r }) : /* @__PURE__ */ S.jsx(cR, { ...r });
}
gl.className = jv;
gl.selector = lR;
gl.displayName = "Portal";
function mo() {
  const e = v.useContext(
    ua
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var zv = v.createContext({});
zv.displayName = "ColorModeContext";
function _a() {
  const e = v.useContext(zv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Dy(e, t) {
  const { colorMode: n } = _a();
  return n === "dark" ? t : e;
}
var iu = {
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
      document.body.classList.add(r ? iu.dark : iu.light), document.body.classList.remove(r ? iu.light : iu.dark);
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
var mR = hR(pR), Fy = () => {
};
function Ly(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function CC(e) {
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
    () => Ly(a, s)
  ), [c, d] = v.useState(
    () => Ly(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: y, addListener: m } = v.useMemo(
    () => fR({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, h = v.useCallback(
    (w) => {
      const k = w === "system" ? f() : w;
      u(k), p(k === "dark"), y(k), a.set(k);
    },
    [a, f, p, y]
  );
  ca(() => {
    o === "system" && d(f());
  }, []), v.useEffect(() => {
    const w = a.get();
    if (w) {
      h(w);
      return;
    }
    if (o === "system") {
      h("system");
      return;
    }
    h(s);
  }, [a, s, o, h]);
  const g = v.useCallback(() => {
    h(x === "dark" ? "light" : "dark");
  }, [x, h]);
  v.useEffect(() => {
    if (r)
      return m(h);
  }, [r, m, h]);
  const b = v.useMemo(
    () => ({
      colorMode: t ?? x,
      toggleColorMode: t ? Fy : g,
      setColorMode: t ? Fy : h,
      forced: t !== void 0
    }),
    [x, g, h, t]
  );
  return /* @__PURE__ */ S.jsx(zv.Provider, { value: b, children: n });
}
CC.displayName = "ColorModeProvider";
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
  return /* @__PURE__ */ S.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: yR(e) }
    }
  );
}
function xR() {
  const e = _a(), t = mo();
  return { ...e, theme: t };
}
var ie = (...e) => e.filter(Boolean).join(" ");
function SR() {
  return !1;
}
function jt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var yl = (e) => {
  const { condition: t, message: n } = e;
  t && SR() && console.warn(n);
};
function Xn(e, ...t) {
  return wR(e) ? e(...t) : e;
}
var wR = (e) => typeof e == "function", dn = (e) => e ? "" : void 0, Xf = (e) => e ? !0 : void 0;
function Le(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function kC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var $c = { exports: {} };
$c.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", y = "[object GeneratorFunction]", m = "[object Map]", x = "[object Number]", h = "[object Null]", g = "[object Object]", b = "[object Proxy]", w = "[object RegExp]", k = "[object Set]", P = "[object String]", _ = "[object Undefined]", T = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", j = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, z = {};
  z[D] = z[G] = z[H] = z[L] = z[W] = z[K] = z[$] = z[A] = z[j] = !0, z[s] = z[l] = z[M] = z[c] = z[I] = z[d] = z[f] = z[p] = z[m] = z[x] = z[g] = z[w] = z[k] = z[P] = z[T] = !1;
  var te = typeof Gr == "object" && Gr && Gr.Object === Object && Gr, le = typeof self == "object" && self && self.Object === Object && self, ae = te || le || Function("return this")(), se = t && !t.nodeType && t, me = se && !0 && e && !e.nodeType && e, Pe = me && me.exports === se, et = Pe && te.process, qe = function() {
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
  }(), Oa = vt.toString, Al = $r.call(Object), Dl = RegExp(
    "^" + $r.call(an).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), yo = Pe ? ae.Buffer : void 0, Zg = ae.Symbol, Jg = ae.Uint8Array, e0 = yo ? yo.allocUnsafe : void 0, t0 = Ge(Object.getPrototypeOf, Object), n0 = Object.create, uT = vt.propertyIsEnumerable, cT = Ut.splice, bo = Zg ? Zg.toStringTag : void 0, Fl = function() {
    try {
      var C = pf(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), dT = yo ? yo.isBuffer : void 0, r0 = Math.max, fT = Date.now, o0 = pf(ae, "Map"), Ma = pf(Object, "create"), pT = /* @__PURE__ */ function() {
    function C() {
    }
    return function(E) {
      if (!So(E))
        return {};
      if (n0)
        return n0(E);
      C.prototype = E;
      var R = new C();
      return C.prototype = void 0, R;
    };
  }();
  function xo(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function hT() {
    this.__data__ = Ma ? Ma(null) : {}, this.size = 0;
  }
  function mT(C) {
    var E = this.has(C) && delete this.__data__[C];
    return this.size -= E ? 1 : 0, E;
  }
  function vT(C) {
    var E = this.__data__;
    if (Ma) {
      var R = E[C];
      return R === r ? void 0 : R;
    }
    return an.call(E, C) ? E[C] : void 0;
  }
  function gT(C) {
    var E = this.__data__;
    return Ma ? E[C] !== void 0 : an.call(E, C);
  }
  function yT(C, E) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = Ma && E === void 0 ? r : E, this;
  }
  xo.prototype.clear = hT, xo.prototype.delete = mT, xo.prototype.get = vT, xo.prototype.has = gT, xo.prototype.set = yT;
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
  function xT(C) {
    var E = this.__data__, R = Ll(E, C);
    if (R < 0)
      return !1;
    var N = E.length - 1;
    return R == N ? E.pop() : cT.call(E, R, 1), --this.size, !0;
  }
  function ST(C) {
    var E = this.__data__, R = Ll(E, C);
    return R < 0 ? void 0 : E[R][1];
  }
  function wT(C) {
    return Ll(this.__data__, C) > -1;
  }
  function CT(C, E) {
    var R = this.__data__, N = Ll(R, C);
    return N < 0 ? (++this.size, R.push([C, E])) : R[N][1] = E, this;
  }
  sr.prototype.clear = bT, sr.prototype.delete = xT, sr.prototype.get = ST, sr.prototype.has = wT, sr.prototype.set = CT;
  function ai(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function kT() {
    this.size = 0, this.__data__ = {
      hash: new xo(),
      map: new (o0 || sr)(),
      string: new xo()
    };
  }
  function PT(C) {
    var E = zl(this, C).delete(C);
    return this.size -= E ? 1 : 0, E;
  }
  function _T(C) {
    return zl(this, C).get(C);
  }
  function TT(C) {
    return zl(this, C).has(C);
  }
  function ET(C, E) {
    var R = zl(this, C), N = R.size;
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
      if (!o0 || N.length < n - 1)
        return N.push([C, E]), this.size = ++R.size, this;
      R = this.__data__ = new ai(N);
    }
    return R.set(C, E), this.size = R.size, this;
  }
  si.prototype.clear = OT, si.prototype.delete = MT, si.prototype.get = IT, si.prototype.has = RT, si.prototype.set = $T;
  function AT(C, E) {
    var R = vf(C), N = !R && mf(C), pe = !R && !N && u0(C), _e = !R && !N && !pe && d0(C), Ae = R || N || pe || _e, ce = Ae ? Ir(C.length, String) : [], De = ce.length;
    for (var sn in C)
      (E || an.call(C, sn)) && !(Ae && // Safari 9 has enumerable `arguments.length` in strict mode.
      (sn == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (sn == "offset" || sn == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      _e && (sn == "buffer" || sn == "byteLength" || sn == "byteOffset") || // Skip index properties.
      s0(sn, De))) && ce.push(sn);
    return ce;
  }
  function df(C, E, R) {
    (R !== void 0 && !Nl(C[E], R) || R === void 0 && !(E in C)) && ff(C, E, R);
  }
  function DT(C, E, R) {
    var N = C[E];
    (!(an.call(C, E) && Nl(N, R)) || R === void 0 && !(E in C)) && ff(C, E, R);
  }
  function Ll(C, E) {
    for (var R = C.length; R--; )
      if (Nl(C[R][0], E))
        return R;
    return -1;
  }
  function ff(C, E, R) {
    E == "__proto__" && Fl ? Fl(C, E, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[E] = R;
  }
  var FT = qT();
  function jl(C) {
    return C == null ? C === void 0 ? _ : h : bo && bo in Object(C) ? XT(C) : nE(C);
  }
  function i0(C) {
    return Ia(C) && jl(C) == s;
  }
  function LT(C) {
    if (!So(C) || eE(C))
      return !1;
    var E = yf(C) ? Dl : V;
    return E.test(aE(C));
  }
  function jT(C) {
    return Ia(C) && c0(C.length) && !!z[jl(C)];
  }
  function zT(C) {
    if (!So(C))
      return tE(C);
    var E = l0(C), R = [];
    for (var N in C)
      N == "constructor" && (E || !an.call(C, N)) || R.push(N);
    return R;
  }
  function a0(C, E, R, N, pe) {
    C !== E && FT(E, function(_e, Ae) {
      if (pe || (pe = new si()), So(_e))
        NT(C, E, Ae, R, a0, N, pe);
      else {
        var ce = N ? N(hf(C, Ae), _e, Ae + "", C, E, pe) : void 0;
        ce === void 0 && (ce = _e), df(C, Ae, ce);
      }
    }, f0);
  }
  function NT(C, E, R, N, pe, _e, Ae) {
    var ce = hf(C, R), De = hf(E, R), sn = Ae.get(De);
    if (sn) {
      df(C, R, sn);
      return;
    }
    var Gt = _e ? _e(ce, De, R + "", C, E, Ae) : void 0, Ra = Gt === void 0;
    if (Ra) {
      var bf = vf(De), xf = !bf && u0(De), h0 = !bf && !xf && d0(De);
      Gt = De, bf || xf || h0 ? vf(ce) ? Gt = ce : sE(ce) ? Gt = GT(ce) : xf ? (Ra = !1, Gt = WT(De, !0)) : h0 ? (Ra = !1, Gt = UT(De, !0)) : Gt = [] : lE(De) || mf(De) ? (Gt = ce, mf(ce) ? Gt = uE(ce) : (!So(ce) || yf(ce)) && (Gt = QT(De))) : Ra = !1;
    }
    Ra && (Ae.set(De, Gt), pe(Gt, De, N, _e, Ae), Ae.delete(De)), df(C, R, Gt);
  }
  function VT(C, E) {
    return oE(rE(C, E, p0), C + "");
  }
  var BT = Fl ? function(C, E) {
    return Fl(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: dE(E),
      writable: !0
    });
  } : p0;
  function WT(C, E) {
    if (E)
      return C.slice();
    var R = C.length, N = e0 ? e0(R) : new C.constructor(R);
    return C.copy(N), N;
  }
  function HT(C) {
    var E = new C.constructor(C.byteLength);
    return new Jg(E).set(new Jg(C)), E;
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
    for (var _e = -1, Ae = E.length; ++_e < Ae; ) {
      var ce = E[_e], De = N ? N(R[ce], C[ce], ce, R, C) : void 0;
      De === void 0 && (De = C[ce]), pe ? ff(R, ce, De) : DT(R, ce, De);
    }
    return R;
  }
  function YT(C) {
    return VT(function(E, R) {
      var N = -1, pe = R.length, _e = pe > 1 ? R[pe - 1] : void 0, Ae = pe > 2 ? R[2] : void 0;
      for (_e = C.length > 3 && typeof _e == "function" ? (pe--, _e) : void 0, Ae && ZT(R[0], R[1], Ae) && (_e = pe < 3 ? void 0 : _e, pe = 1), E = Object(E); ++N < pe; ) {
        var ce = R[N];
        ce && C(E, ce, N, _e);
      }
      return E;
    });
  }
  function qT(C) {
    return function(E, R, N) {
      for (var pe = -1, _e = Object(E), Ae = N(E), ce = Ae.length; ce--; ) {
        var De = Ae[C ? ce : ++pe];
        if (R(_e[De], De, _e) === !1)
          break;
      }
      return E;
    };
  }
  function zl(C, E) {
    var R = C.__data__;
    return JT(E) ? R[typeof E == "string" ? "string" : "hash"] : R.map;
  }
  function pf(C, E) {
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
    var pe = Oa.call(C);
    return N && (E ? C[bo] = R : delete C[bo]), pe;
  }
  function QT(C) {
    return typeof C.constructor == "function" && !l0(C) ? pT(t0(C)) : {};
  }
  function s0(C, E) {
    var R = typeof C;
    return E = E ?? a, !!E && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < E;
  }
  function ZT(C, E, R) {
    if (!So(R))
      return !1;
    var N = typeof E;
    return (N == "number" ? gf(R) && s0(E, R.length) : N == "string" && E in R) ? Nl(R[E], C) : !1;
  }
  function JT(C) {
    var E = typeof C;
    return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? C !== "__proto__" : C === null;
  }
  function eE(C) {
    return !!ii && ii in C;
  }
  function l0(C) {
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
    return Oa.call(C);
  }
  function rE(C, E, R) {
    return E = r0(E === void 0 ? C.length - 1 : E, 0), function() {
      for (var N = arguments, pe = -1, _e = r0(N.length - E, 0), Ae = Array(_e); ++pe < _e; )
        Ae[pe] = N[E + pe];
      pe = -1;
      for (var ce = Array(E + 1); ++pe < E; )
        ce[pe] = N[pe];
      return ce[E] = R(Ae), Pn(C, this, ce);
    };
  }
  function hf(C, E) {
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
  function Nl(C, E) {
    return C === E || C !== C && E !== E;
  }
  var mf = i0(/* @__PURE__ */ function() {
    return arguments;
  }()) ? i0 : function(C) {
    return Ia(C) && an.call(C, "callee") && !uT.call(C, "callee");
  }, vf = Array.isArray;
  function gf(C) {
    return C != null && c0(C.length) && !yf(C);
  }
  function sE(C) {
    return Ia(C) && gf(C);
  }
  var u0 = dT || fE;
  function yf(C) {
    if (!So(C))
      return !1;
    var E = jl(C);
    return E == p || E == y || E == u || E == b;
  }
  function c0(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function So(C) {
    var E = typeof C;
    return C != null && (E == "object" || E == "function");
  }
  function Ia(C) {
    return C != null && typeof C == "object";
  }
  function lE(C) {
    if (!Ia(C) || jl(C) != g)
      return !1;
    var E = t0(C);
    if (E === null)
      return !0;
    var R = an.call(E, "constructor") && E.constructor;
    return typeof R == "function" && R instanceof R && $r.call(R) == Al;
  }
  var d0 = on ? fe(on) : jT;
  function uE(C) {
    return KT(C, f0(C));
  }
  function f0(C) {
    return gf(C) ? AT(C, !0) : zT(C);
  }
  var cE = YT(function(C, E, R, N) {
    a0(C, E, R, N);
  });
  function dE(C) {
    return function() {
      return C;
    };
  }
  function p0(C) {
    return C;
  }
  function fE() {
    return !1;
  }
  e.exports = cE;
})($c, $c.exports);
var CR = $c.exports;
const mn = /* @__PURE__ */ cl(CR);
var kR = (e) => /!(important)?$/.test(e), jy = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, PR = (e, t) => (n) => {
  const r = String(t), o = kR(r), i = jy(r), a = e ? `${e}.${i}` : i;
  let s = jt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = jy(s), o ? `${s} !important` : s;
};
function Nv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = PR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var au = (...e) => (t) => e.reduce((n, r) => r(n), t);
function ln(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = Nv({
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
    transform: n ? Nv({
      scale: n,
      compose: r
    }) : r
  };
}
var PC = [
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
    ...PC
  ].join(" ");
}
function OR() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...PC
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
}, Vh = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, AR = new Set(Object.values(Vh)), Bh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), DR = (e) => e.trim();
function FR(e, t) {
  if (e == null || Bh.has(e))
    return e;
  if (!(Wh(e) || Bh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(DR).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Vh ? Vh[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (AR.has(f))
      return f;
    const p = f.indexOf(" "), [y, m] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = Wh(m) ? m : m && m.split(" "), h = `colors.${y}`, g = h in t.__cssMap ? t.__cssMap[h].varRef : y;
    return x ? [
      g,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : g;
  });
  return `${s}(${d.join(", ")})`;
}
var Wh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), LR = (e, t) => FR(e, t ?? {});
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
    return e == null || Wh(e) || Bh.has(e) ? e : `url(${e})`;
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
  space: ln("space", au(de.vh, de.px)),
  spaceT: ln("space", au(de.vh, de.px)),
  degreeT(e) {
    return { property: e, transform: de.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Nv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: ln("sizes", au(de.vh, de.px)),
  sizesT: ln("sizes", au(de.vh, de.fraction)),
  shadows: ln("shadows"),
  logical: TR,
  blur: ln("blur", de.blur)
}, Wu = {
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
Object.assign(Wu, {
  bgImage: Wu.backgroundImage,
  bgImg: Wu.backgroundImage
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
}, Hh = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Hh, {
  shadow: Hh.boxShadow
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
}, Ac = {
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
Object.assign(Ac, {
  flexDir: Ac.flexDirection
});
var _C = {
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
}, Qf = (e, t, n) => {
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
    transform: (e, t, n) => Qf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Qf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Qf(t, e, n)
  }
}, ys = {
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
Object.assign(ys, {
  insetStart: ys.insetInlineStart,
  insetEnd: ys.insetInlineEnd
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
function TC(e) {
  return jt(e) && e.reference ? e.reference : String(e);
}
var Vd = (e, ...t) => t.map(TC).join(` ${e} `).replace(/calc/g, ""), zy = (...e) => `calc(${Vd("+", ...e)})`, Ny = (...e) => `calc(${Vd("-", ...e)})`, Uh = (...e) => `calc(${Vd("*", ...e)})`, Vy = (...e) => `calc(${Vd("/", ...e)})`, By = (e) => {
  const t = TC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Uh(t, -1);
}, Oo = Object.assign(
  (e) => ({
    add: (...t) => Oo(zy(e, ...t)),
    subtract: (...t) => Oo(Ny(e, ...t)),
    multiply: (...t) => Oo(Uh(e, ...t)),
    divide: (...t) => Oo(Vy(e, ...t)),
    negate: () => Oo(By(e)),
    toString: () => e.toString()
  }),
  {
    add: zy,
    subtract: Ny,
    multiply: Uh,
    divide: Vy,
    negate: By
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
function Gh(e) {
  if (e == null)
    return e;
  const { unitless: t } = d$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var EC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Vv = (e) => Object.fromEntries(Object.entries(e).sort(EC));
function Wy(e) {
  const t = Vv(e);
  return Object.assign(Object.values(t), t);
}
function f$(e) {
  const t = Object.keys(Vv(e));
  return new Set(t);
}
function Hy(e) {
  var t;
  if (!e)
    return e;
  e = (t = Gh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function ts(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Gh(e)})`), t && n.push("and", `(max-width: ${Gh(t)})`), n.join(" ");
}
function p$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = Wy(e), r = Object.entries(e).sort(EC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? Hy(d) : void 0, {
      _minW: Hy(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: ts(null, d),
      minWQuery: ts(s),
      minMaxQuery: ts(s, d)
    };
  }), o = f$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Vv(e),
    asArray: Wy(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...n.map((a) => ts(a)).slice(1)
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
}, Dr = (e) => OC((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), lr = (e) => OC((t) => e(t, "~ &"), "[data-peer]", ".peer"), OC = (e, ...t) => t.map(e).join(", "), Bd = {
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
}, MC = Object.keys(
  Bd
);
function Uy(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function h$(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Uy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...y] = f, m = `${p}.-${y.join(".")}`, x = Oo.negate(s), h = Oo.negate(u);
        r[m] = {
          value: x,
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
      const y = [String(o).split(".")[0], f].join(".");
      if (!e[y])
        return f;
      const { reference: x } = Uy(y, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = jt(s) ? s : { default: s };
    n = mn(
      n,
      Object.entries(d).reduce(
        (f, [p, y]) => {
          var m, x;
          if (!y)
            return f;
          const h = c(`${y}`);
          if (p === "default")
            return f[l] = h, f;
          const g = (x = (m = Bd) == null ? void 0 : m[p]) != null ? x : p;
          return f[g] = { [l]: h }, f;
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
function Gy(e, t, n = {}) {
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
function x$(e) {
  return e.semanticTokens;
}
function S$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var w$ = (e) => MC.includes(e) || e === "default";
function C$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return Gy(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), Gy(
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
  const n = S$(e), r = b$(n), o = x$(n), i = C$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
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
var Bv = mn(
  {},
  Wu,
  ve,
  NR,
  Ac,
  cn,
  VR,
  XR,
  BR,
  _C,
  qR,
  ys,
  Hh,
  Ie,
  t$,
  e$,
  QR,
  ZR,
  WR,
  JR
);
Object.assign({}, Ie, cn, Ac, _C, ys);
var P$ = [...Object.keys(Bv), ...MC], _$ = { ...Bv, ...Bd }, T$ = (e) => e in _$, E$ = (e) => (t) => {
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
      const y = d[p];
      let m = Xn(y, r);
      p in n && (p = n[p]), I$(p, m) && (m = R$(r, m));
      let x = t[p];
      if (x === !0 && (x = { property: p }), jt(m)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = mn(
          {},
          f[p],
          o(m, !0)
        );
        continue;
      }
      let h = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, m, r, c)) != null ? u : m;
      h = x != null && x.processResult ? o(h, !0) : h;
      const g = Xn(x == null ? void 0 : x.property, r);
      if (!a && (x != null && x.static)) {
        const b = Xn(x.static, r);
        f = mn({}, f, b);
      }
      if (g && Array.isArray(g)) {
        for (const b of g)
          f[b] = h;
        continue;
      }
      if (g) {
        g === "&" && jt(h) ? f = mn({}, f, h) : f[g] = h;
        continue;
      }
      if (jt(h)) {
        f = mn({}, f, h);
        continue;
      }
      f[p] = h;
    }
    return f;
  };
  return o;
}
var IC = (e) => (t) => $$({
  theme: t,
  pseudos: Bd,
  configs: Bv
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
    for (let y = 0; y < d; y++) {
      const m = t.details[y], x = t.details[D$(c, y)], h = ts(m.minW, x == null ? void 0 : x._minW), g = Xn((s = r[o]) == null ? void 0 : s[c[y]], a);
      if (g) {
        if (p) {
          (l = r.parts) == null || l.forEach((b) => {
            mn(u, {
              [b]: f ? g[b] : { [h]: g[b] }
            });
          });
          continue;
        }
        if (!p) {
          f ? mn(u, g) : u[h] = g;
          continue;
        }
        u[h] = g;
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
}, RC = iA, $C = {
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
  ...$C,
  ...aA,
  container: sA
}, AC = lA, uA = {
  breakpoints: X$,
  zIndices: G$,
  radii: eA,
  blur: oA,
  colors: Z$,
  ...RC,
  sizes: AC,
  shadows: nA,
  space: $C,
  borders: Y$,
  transition: H$
}, { defineMultiStyleConfig: cA, definePartsStyle: ns } = Oe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), dr = J("stepper-indicator-size"), Ei = J("stepper-icon-size"), Oi = J("stepper-title-font-size"), rs = J("stepper-description-font-size"), Wa = J("stepper-accent-color"), dA = ns(({ colorScheme: e }) => ({
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
    [Wa.variable]: `colors.${e}.500`,
    _dark: {
      [Wa.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Oi.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: rs.reference,
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
      borderColor: Wa.reference
    },
    "&[data-status=complete]": {
      bg: Wa.reference,
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
      bg: Wa.reference
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
    xs: ns({
      stepper: {
        [dr.variable]: "sizes.4",
        [Ei.variable]: "sizes.3",
        [Oi.variable]: "fontSizes.xs",
        [rs.variable]: "fontSizes.xs"
      }
    }),
    sm: ns({
      stepper: {
        [dr.variable]: "sizes.6",
        [Ei.variable]: "sizes.4",
        [Oi.variable]: "fontSizes.sm",
        [rs.variable]: "fontSizes.xs"
      }
    }),
    md: ns({
      stepper: {
        [dr.variable]: "sizes.8",
        [Ei.variable]: "sizes.5",
        [Oi.variable]: "fontSizes.md",
        [rs.variable]: "fontSizes.sm"
      }
    }),
    lg: ns({
      stepper: {
        [dr.variable]: "sizes.10",
        [Ei.variable]: "sizes.6",
        [Oi.variable]: "fontSizes.lg",
        [rs.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function xe(e, t = {}) {
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
    return xe(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return xe(e, t);
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
var pA = xe("accordion").parts("root", "container", "button", "panel").extend("icon"), hA = xe("alert").parts("title", "description", "container").extend("icon", "spinner"), mA = xe("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), vA = xe("breadcrumb").parts("link", "item", "container").extend("separator");
xe("button").parts();
var gA = xe("checkbox").parts("control", "icon", "container").extend("label");
xe("progress").parts("track", "filledTrack").extend("label");
var yA = xe("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), bA = xe("editable").parts(
  "preview",
  "input",
  "textarea"
), xA = xe("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), SA = xe("formError").parts("text", "icon"), wA = xe("input").parts(
  "addon",
  "field",
  "element",
  "group"
), CA = xe("list").parts("container", "item", "icon"), kA = xe("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), PA = xe("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), _A = xe("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
xe("pininput").parts("field");
var TA = xe("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), EA = xe("progress").parts(
  "label",
  "filledTrack",
  "track"
), OA = xe("radio").parts(
  "container",
  "control",
  "label"
), MA = xe("select").parts("field", "icon"), IA = xe("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), RA = xe("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), $A = xe("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), AA = xe("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), DA = xe("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), FA = xe("tag").parts(
  "container",
  "label",
  "closeButton"
), LA = xe("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
xe("stepper").parts(
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
var os = jA;
function Wv(e) {
  if (typeof e != "string")
    throw new os(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = GA.test(e) ? VA(e) : e;
  const n = BA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Zs(s, 2), 16)), parseInt(Zs(a[3] || "f", 2), 16) / 255];
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
      throw new os(e);
    if (Do(0, 100, l) !== l)
      throw new os(e);
    return [...KA(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new os(e);
}
function zA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Ky = (e) => parseInt(e.replace(/_/g, ""), 36), NA = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Ky(t.substring(0, 3)), r = Ky(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function VA(e) {
  const t = e.toLowerCase().trim(), n = NA[zA(t)];
  if (!n)
    throw new os(e);
  return `#${n}`;
}
const Zs = (e, t) => Array.from(Array(t)).map(() => e).join(""), BA = new RegExp(`^#${Zs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), WA = new RegExp(`^#${Zs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), HA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Zs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), UA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, GA = /^[a-z]+$/i, Yy = (e) => Math.round(e * 255), KA = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(Yy);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(Yy);
};
function YA(e, t, n, r) {
  return `rgba(${Do(0, 255, e).toFixed()}, ${Do(0, 255, t).toFixed()}, ${Do(0, 255, n).toFixed()}, ${parseFloat(Do(0, 1, r).toFixed(3))})`;
}
function qA(e, t) {
  const [n, r, o, i] = Wv(e);
  return YA(n, r, o, i - t);
}
function XA(e) {
  const [t, n, r, o] = Wv(e);
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
  const [t, n, r] = Wv(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, e5 = (e) => (t) => {
  const n = Tt(t, e);
  return JA(n) < 128 ? "dark" : "light";
}, t5 = (e) => (t) => e5(e)(t) === "dark", da = (e, t) => (n) => {
  const r = Tt(n, e);
  return qA(r, 1 - t);
};
function qy(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
function Hv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function DC(e) {
  return jt(e) && e.reference ? e.reference : String(e);
}
var Wd = (e, ...t) => t.map(DC).join(` ${e} `).replace(/calc/g, ""), Xy = (...e) => `calc(${Wd("+", ...e)})`, Qy = (...e) => `calc(${Wd("-", ...e)})`, Kh = (...e) => `calc(${Wd("*", ...e)})`, Zy = (...e) => `calc(${Wd("/", ...e)})`, Jy = (e) => {
  const t = DC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Kh(t, -1);
}, fr = Object.assign(
  (e) => ({
    add: (...t) => fr(Xy(e, ...t)),
    subtract: (...t) => fr(Qy(e, ...t)),
    multiply: (...t) => fr(Kh(e, ...t)),
    divide: (...t) => fr(Zy(e, ...t)),
    negate: () => fr(Jy(e)),
    toString: () => e.toString()
  }),
  {
    add: Xy,
    subtract: Qy,
    multiply: Kh,
    divide: Zy,
    negate: Jy
  }
);
function s5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function l5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function FC(e) {
  const t = l5(e.toString());
  return t.includes("\\.") ? e : s5(e) ? t.replace(".", "\\.") : e;
}
function u5(e, t = "") {
  return [t, FC(e)].filter(Boolean).join("-");
}
function c5(e, t) {
  return `var(${FC(e)}${t ? `, ${t}` : ""})`;
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
var { defineMultiStyleConfig: p5, definePartsStyle: Hu } = Oe($A.keys), bs = rt("switch-track-width"), No = rt("switch-track-height"), Zf = rt("switch-track-diff"), h5 = fr.subtract(bs, No), Yh = rt("switch-thumb-x"), Ha = rt("switch-bg"), m5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [bs.reference],
    height: [No.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Ha.variable]: "colors.gray.300",
    _dark: {
      [Ha.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Ha.variable]: `colors.${t}.500`,
      _dark: {
        [Ha.variable]: `colors.${t}.200`
      }
    },
    bg: Ha.reference
  };
}, v5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [No.reference],
  height: [No.reference],
  _checked: {
    transform: `translateX(${Yh.reference})`
  }
}, g5 = Hu((e) => ({
  container: {
    [Zf.variable]: h5,
    [Yh.variable]: Zf.reference,
    _rtl: {
      [Yh.variable]: fr(Zf).negate().toString()
    }
  },
  track: m5(e),
  thumb: v5
})), y5 = {
  sm: Hu({
    container: {
      [bs.variable]: "1.375rem",
      [No.variable]: "sizes.3"
    }
  }),
  md: Hu({
    container: {
      [bs.variable]: "1.875rem",
      [No.variable]: "sizes.4"
    }
  }),
  lg: Hu({
    container: {
      [bs.variable]: "2.875rem",
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
}), { defineMultiStyleConfig: x5, definePartsStyle: Yi } = Oe(AA.keys), S5 = Yi({
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
}), Dc = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, w5 = Yi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Dc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Dc
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
}), C5 = Yi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Dc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Dc
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
  sm: Yi({
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
  md: Yi({
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
  lg: Yi({
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
}, _5 = x5({
  baseStyle: S5,
  variants: k5,
  sizes: P5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), $t = J("tabs-color"), In = J("tabs-bg"), su = J("tabs-border-color"), { defineMultiStyleConfig: T5, definePartsStyle: er } = Oe(DA.keys), E5 = (e) => {
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
      [su.variable]: "transparent",
      _selected: {
        [$t.variable]: `colors.${t}.600`,
        [su.variable]: "colors.white",
        _dark: {
          [$t.variable]: `colors.${t}.300`,
          [su.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: su.reference
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
  const { colorScheme: t, theme: n } = e, r = da(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, H5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = da(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, U5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = da(`${t}.200`, 0.8)(n);
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
}, xs = {
  baseStyle: B5,
  variants: G5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: K5, definePartsStyle: Vo } = Oe(FA.keys), eb = J("tag-bg"), tb = J("tag-color"), Jf = J("tag-shadow"), Uu = J("tag-min-height"), Gu = J("tag-min-width"), Ku = J("tag-font-size"), Yu = J("tag-padding-inline"), Y5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [tb.variable]: Ye.color.reference,
  [eb.variable]: Ye.bg.reference,
  [Jf.variable]: Ye.shadow.reference,
  color: tb.reference,
  bg: eb.reference,
  boxShadow: Jf.reference,
  borderRadius: "md",
  minH: Uu.reference,
  minW: Gu.reference,
  fontSize: Ku.reference,
  px: Yu.reference,
  _focusVisible: {
    [Jf.variable]: "shadows.outline"
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
      [Uu.variable]: "sizes.5",
      [Gu.variable]: "sizes.5",
      [Ku.variable]: "fontSizes.xs",
      [Yu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Vo({
    container: {
      [Uu.variable]: "sizes.6",
      [Gu.variable]: "sizes.6",
      [Ku.variable]: "fontSizes.sm",
      [Yu.variable]: "space.2"
    }
  }),
  lg: Vo({
    container: {
      [Uu.variable]: "sizes.8",
      [Gu.variable]: "sizes.8",
      [Ku.variable]: "fontSizes.md",
      [Yu.variable]: "space.3"
    }
  })
}, J5 = {
  subtle: Vo((e) => {
    var t;
    return {
      container: (t = xs.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Vo((e) => {
    var t;
    return {
      container: (t = xs.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Vo((e) => {
    var t;
    return {
      container: (t = xs.variants) == null ? void 0 : t.outline(e)
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
function Uv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var oD = mr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Uv(e);
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
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Uv(e);
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
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Uv(e);
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
}), nb, uD = {
  ...(nb = be.baseStyle) == null ? void 0 : nb.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, rb, ob, cD = {
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
  unstyled: (ob = (rb = be.variants) == null ? void 0 : rb.unstyled.field) != null ? ob : {}
}, ib, ab, sb, lb, ub, cb, db, fb, dD = {
  xs: (ab = (ib = be.sizes) == null ? void 0 : ib.xs.field) != null ? ab : {},
  sm: (lb = (sb = be.sizes) == null ? void 0 : sb.sm.field) != null ? lb : {},
  md: (cb = (ub = be.sizes) == null ? void 0 : ub.md.field) != null ? cb : {},
  lg: (fb = (db = be.sizes) == null ? void 0 : db.lg.field) != null ? fb : {}
}, fD = {
  baseStyle: uD,
  sizes: dD,
  variants: cD,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, lu = rt("tooltip-bg"), ep = rt("tooltip-fg"), pD = rt("popper-arrow-bg"), hD = {
  bg: lu.reference,
  color: ep.reference,
  [lu.variable]: "colors.gray.700",
  [ep.variable]: "colors.whiteAlpha.900",
  _dark: {
    [lu.variable]: "colors.gray.300",
    [ep.variable]: "colors.gray.900"
  },
  [pD.variable]: lu.reference,
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
}, { defineMultiStyleConfig: vD, definePartsStyle: is } = Oe(EA.keys), gD = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    qy(),
    qy("1rem", "rgba(0,0,0,0.1)")
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
}), xD = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...gD(e)
}), SD = is((e) => ({
  label: yD,
  filledTrack: xD(e),
  track: bD(e)
})), wD = {
  xs: is({
    track: { h: "1" }
  }),
  sm: is({
    track: { h: "2" }
  }),
  md: is({
    track: { h: "3" }
  }),
  lg: is({
    track: { h: "4" }
  })
}, CD = vD({
  sizes: wD,
  baseStyle: SD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), kD = (e) => typeof e == "function";
function Ot(e, ...t) {
  return kD(e) ? e(...t) : e;
}
var { definePartsStyle: qu, defineMultiStyleConfig: PD } = Oe(gA.keys), Ss = J("checkbox-size"), _D = (e) => {
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
}, MD = qu((e) => ({
  icon: OD,
  container: TD,
  control: Ot(_D, e),
  label: ED
})), ID = {
  sm: qu({
    control: { [Ss.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: qu({
    control: { [Ss.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: qu({
    control: { [Ss.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Fc = PD({
  baseStyle: MD,
  sizes: ID,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: RD, definePartsStyle: Xu } = Oe(OA.keys), $D = (e) => {
  var t;
  const n = (t = Ot(Fc.baseStyle, e)) == null ? void 0 : t.control;
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
}, AD = Xu((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = Fc).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = Fc).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: $D(e)
  };
}), DD = {
  md: Xu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Xu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Xu({
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
}), { defineMultiStyleConfig: LD, definePartsStyle: jD } = Oe(MA.keys), uu = J("select-bg"), pb, zD = {
  ...(pb = be.baseStyle) == null ? void 0 : pb.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: uu.reference,
  [uu.variable]: "colors.white",
  _dark: {
    [uu.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: uu.reference
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
}), cu = {
  paddingInlineEnd: "8"
}, hb, mb, vb, gb, yb, bb, xb, Sb, BD = {
  lg: {
    ...(hb = be.sizes) == null ? void 0 : hb.lg,
    field: {
      ...(mb = be.sizes) == null ? void 0 : mb.lg.field,
      ...cu
    }
  },
  md: {
    ...(vb = be.sizes) == null ? void 0 : vb.md,
    field: {
      ...(gb = be.sizes) == null ? void 0 : gb.md.field,
      ...cu
    }
  },
  sm: {
    ...(yb = be.sizes) == null ? void 0 : yb.sm,
    field: {
      ...(bb = be.sizes) == null ? void 0 : bb.sm.field,
      ...cu
    }
  },
  xs: {
    ...(xb = be.sizes) == null ? void 0 : xb.xs,
    field: {
      ...(Sb = be.sizes) == null ? void 0 : Sb.xs.field,
      ...cu
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
}), tp = J("skeleton-start-color"), np = J("skeleton-end-color"), HD = {
  [tp.variable]: "colors.gray.100",
  [np.variable]: "colors.gray.400",
  _dark: {
    [tp.variable]: "colors.gray.800",
    [np.variable]: "colors.gray.600"
  },
  background: tp.reference,
  borderColor: np.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, UD = {
  baseStyle: HD
}, rp = J("skip-link-bg"), GD = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [rp.variable]: "colors.white",
    _dark: {
      [rp.variable]: "colors.gray.700"
    },
    bg: rp.reference
  }
}, KD = {
  baseStyle: GD
}, { defineMultiStyleConfig: YD, definePartsStyle: Hd } = Oe(IA.keys), Js = J("slider-thumb-size"), el = J("slider-track-size"), Hr = J("slider-bg"), qD = (e) => {
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
    ...Hv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, XD = (e) => ({
  ...Hv({
    orientation: e.orientation,
    horizontal: { h: el.reference },
    vertical: { w: el.reference }
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
    ...Hv({
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
    w: Js.reference,
    h: Js.reference,
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
}, JD = Hd((e) => ({
  container: qD(e),
  track: XD(e),
  thumb: QD(e),
  filledTrack: ZD(e)
})), eF = Hd({
  container: {
    [Js.variable]: "sizes.4",
    [el.variable]: "sizes.1"
  }
}), tF = Hd({
  container: {
    [Js.variable]: "sizes.3.5",
    [el.variable]: "sizes.1"
  }
}), nF = Hd({
  container: {
    [Js.variable]: "sizes.2.5",
    [el.variable]: "sizes.0.5"
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
}, { defineMultiStyleConfig: lF, definePartsStyle: LC } = Oe(RA.keys), uF = {
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
}, pF = LC({
  container: {},
  label: uF,
  helpText: cF,
  number: dF,
  icon: fF
}), hF = {
  md: LC({
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
}), op = J("kbd-bg"), vF = {
  [op.variable]: "colors.gray.100",
  _dark: {
    [op.variable]: "colors.whiteAlpha.100"
  },
  bg: op.reference,
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
}, { defineMultiStyleConfig: xF, definePartsStyle: SF } = Oe(CA.keys), wF = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, CF = SF({
  icon: wF
}), kF = xF({
  baseStyle: CF
}), { defineMultiStyleConfig: PF, definePartsStyle: _F } = Oe(kA.keys), Un = J("menu-bg"), ip = J("menu-shadow"), TF = {
  [Un.variable]: "#fff",
  [ip.variable]: "shadows.sm",
  _dark: {
    [Un.variable]: "colors.gray.700",
    [ip.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Un.reference,
  boxShadow: ip.reference
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
}), { defineMultiStyleConfig: FF, definePartsStyle: qh } = Oe(PA.keys), ap = J("modal-bg"), sp = J("modal-shadow"), LF = {
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
    [ap.variable]: "colors.white",
    [sp.variable]: "shadows.lg",
    _dark: {
      [ap.variable]: "colors.gray.700",
      [sp.variable]: "shadows.dark-lg"
    },
    bg: ap.reference,
    boxShadow: sp.reference
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
}, HF = qh((e) => ({
  overlay: LF,
  dialogContainer: Ot(jF, e),
  dialog: Ot(zF, e),
  header: NF,
  closeButton: VF,
  body: Ot(BF, e),
  footer: WF
}));
function Tn(e) {
  return qh(e === "full" ? {
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
}), { defineMultiStyleConfig: KF, definePartsStyle: jC } = Oe(_A.keys), Gv = rt("number-input-stepper-width"), zC = rt("number-input-input-padding"), YF = fr(Gv).add("0.5rem").toString(), lp = rt("number-input-bg"), up = rt("number-input-color"), cp = rt("number-input-border-color"), qF = {
  [Gv.variable]: "sizes.6",
  [zC.variable]: YF
}, XF = (e) => {
  var t, n;
  return (n = (t = Ot(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, QF = {
  width: Gv.reference
}, ZF = {
  borderStart: "1px solid",
  borderStartColor: cp.reference,
  color: up.reference,
  bg: lp.reference,
  [up.variable]: "colors.chakra-body-text",
  [cp.variable]: "colors.chakra-border-color",
  _dark: {
    [up.variable]: "colors.whiteAlpha.800",
    [cp.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [lp.variable]: "colors.gray.200",
    _dark: {
      [lp.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, JF = jC((e) => {
  var t;
  return {
    root: qF,
    field: (t = Ot(XF, e)) != null ? t : {},
    stepperGroup: QF,
    stepper: ZF
  };
});
function du(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = RC.fontSizes[a];
  return jC({
    field: {
      ...o.field,
      paddingInlineEnd: zC.reference,
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
  xs: du("xs"),
  sm: du("sm"),
  md: du("md"),
  lg: du("lg")
}, t4 = KF({
  baseStyle: JF,
  sizes: e4,
  variants: be.variants,
  defaultProps: be.defaultProps
}), wb, n4 = {
  ...(wb = be.baseStyle) == null ? void 0 : wb.field,
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
}, Cb, kb, o4 = {
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
  unstyled: (kb = (Cb = be.variants) == null ? void 0 : Cb.unstyled.field) != null ? kb : {}
}, i4 = {
  baseStyle: n4,
  sizes: r4,
  variants: o4,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: a4, definePartsStyle: s4 } = Oe(TA.keys), fu = rt("popper-bg"), l4 = rt("popper-arrow-bg"), Pb = rt("popper-arrow-shadow-color"), u4 = { zIndex: 10 }, c4 = {
  [fu.variable]: "colors.white",
  bg: fu.reference,
  [l4.variable]: fu.reference,
  [Pb.variable]: "colors.gray.200",
  _dark: {
    [fu.variable]: "colors.gray.700",
    [Pb.variable]: "colors.whiteAlpha.300"
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
}), { definePartsStyle: Xh, defineMultiStyleConfig: g4 } = Oe(yA.keys), dp = J("drawer-bg"), fp = J("drawer-box-shadow");
function ui(e) {
  return Xh(e === "full" ? {
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
}, x4 = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [dp.variable]: "colors.white",
    [fp.variable]: "shadows.lg",
    _dark: {
      [dp.variable]: "colors.gray.700",
      [fp.variable]: "shadows.dark-lg"
    },
    bg: dp.reference,
    boxShadow: fp.reference
  };
}, S4 = {
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
}, P4 = Xh((e) => ({
  overlay: y4,
  dialogContainer: b4,
  dialog: Ot(x4, e),
  header: S4,
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
}), { definePartsStyle: D4, defineMultiStyleConfig: F4 } = Oe(xA.keys), qi = J("form-control-color"), L4 = {
  marginStart: "1",
  [qi.variable]: "colors.red.500",
  _dark: {
    [qi.variable]: "colors.red.300"
  },
  color: qi.reference
}, j4 = {
  mt: "2",
  [qi.variable]: "colors.gray.600",
  _dark: {
    [qi.variable]: "colors.whiteAlpha.600"
  },
  color: qi.reference,
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
}), { definePartsStyle: V4, defineMultiStyleConfig: B4 } = Oe(SA.keys), Xi = J("form-error-color"), W4 = {
  [Xi.variable]: "colors.red.500",
  _dark: {
    [Xi.variable]: "colors.red.300"
  },
  color: Xi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, H4 = {
  marginEnd: "0.5em",
  [Xi.variable]: "colors.red.500",
  _dark: {
    [Xi.variable]: "colors.red.300"
  },
  color: Xi.reference
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
}, { defineMultiStyleConfig: Z4, definePartsStyle: J4 } = Oe(vA.keys), pp = J("breadcrumb-link-decor"), eL = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: pp.reference,
  [pp.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [pp.variable]: "underline"
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
}, NC = (e) => {
  const { colorScheme: t, theme: n } = e;
  if (t === "gray")
    return {
      color: Q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: Q("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: Q("gray.200", "whiteAlpha.300")(e) }
    };
  const r = da(`${t}.200`, 0.12)(n), o = da(`${t}.200`, 0.24)(n);
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
    ...Ot(NC, e)
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
  ghost: NC,
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
}, { definePartsStyle: Bo, defineMultiStyleConfig: fL } = Oe(LA.keys), Lc = J("card-bg"), yr = J("card-padding"), VC = J("card-shadow"), Qu = J("card-radius"), BC = J("card-border-width", "0"), WC = J("card-border-color"), pL = Bo({
  container: {
    [Lc.variable]: "colors.chakra-body-bg",
    backgroundColor: Lc.reference,
    boxShadow: VC.reference,
    borderRadius: Qu.reference,
    color: "chakra-body-text",
    borderWidth: BC.reference,
    borderColor: WC.reference
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
      [Qu.variable]: "radii.base",
      [yr.variable]: "space.3"
    }
  }),
  md: Bo({
    container: {
      [Qu.variable]: "radii.md",
      [yr.variable]: "space.5"
    }
  }),
  lg: Bo({
    container: {
      [Qu.variable]: "radii.xl",
      [yr.variable]: "space.7"
    }
  })
}, mL = {
  elevated: Bo({
    container: {
      [VC.variable]: "shadows.base",
      _dark: {
        [Lc.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Bo({
    container: {
      [BC.variable]: "1px",
      [WC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Bo({
    container: {
      [Lc.variable]: "colors.chakra-subtle-bg"
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
}), ws = rt("close-button-size"), Ua = rt("close-button-bg"), gL = {
  w: [ws.reference],
  h: [ws.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Ua.variable]: "colors.blackAlpha.100",
    _dark: {
      [Ua.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Ua.variable]: "colors.blackAlpha.200",
    _dark: {
      [Ua.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Ua.reference
}, yL = {
  lg: {
    [ws.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [ws.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [ws.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, bL = {
  baseStyle: gL,
  sizes: yL,
  defaultProps: {
    size: "md"
  }
}, { variants: xL, defaultProps: SL } = xs, wL = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, CL = {
  baseStyle: wL,
  variants: xL,
  defaultProps: SL
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
}), jL = RL({ baseStyle: LL }), { definePartsStyle: bl, defineMultiStyleConfig: zL } = Oe(hA.keys), Qt = J("alert-fg"), _r = J("alert-bg"), NL = bl({
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
function Kv(e) {
  const { theme: t, colorScheme: n } = e, r = da(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var VL = bl((e) => {
  const { colorScheme: t } = e, n = Kv(e);
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
}), BL = bl((e) => {
  const { colorScheme: t } = e, n = Kv(e);
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
}), WL = bl((e) => {
  const { colorScheme: t } = e, n = Kv(e);
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
}), HL = bl((e) => {
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
}), { definePartsStyle: HC, defineMultiStyleConfig: KL } = Oe(mA.keys), Qi = J("avatar-border-color"), Cs = J("avatar-bg"), tl = J("avatar-font-size"), fa = J("avatar-size"), YL = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Qi.reference,
  [Qi.variable]: "white",
  _dark: {
    [Qi.variable]: "colors.gray.800"
  }
}, qL = {
  bg: Cs.reference,
  fontSize: tl.reference,
  width: fa.reference,
  height: fa.reference,
  lineHeight: "1",
  [Cs.variable]: "colors.gray.200",
  _dark: {
    [Cs.variable]: "colors.whiteAlpha.400"
  }
}, XL = (e) => {
  const { name: t, theme: n } = e, r = t ? r5({ string: t }) : "colors.gray.400", o = t5(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: Cs.reference,
    fontSize: tl.reference,
    color: i,
    borderColor: Qi.reference,
    verticalAlign: "top",
    width: fa.reference,
    height: fa.reference,
    "&:not([data-loaded])": {
      [Cs.variable]: r
    },
    [Qi.variable]: "colors.white",
    _dark: {
      [Qi.variable]: "colors.gray.800"
    }
  };
}, QL = {
  fontSize: tl.reference,
  lineHeight: "1"
}, ZL = HC((e) => ({
  badge: Ot(YL, e),
  excessLabel: Ot(qL, e),
  container: Ot(XL, e),
  label: QL
}));
function Lr(e) {
  const t = e !== "100%" ? AC[e] : void 0;
  return HC({
    container: {
      [fa.variable]: t ?? e,
      [tl.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [fa.variable]: t ?? e,
      [tl.variable]: `calc(${t ?? e} / 2.5)`
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
  Badge: xs,
  Breadcrumb: nL,
  Button: dL,
  Checkbox: Fc,
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
}, UC = {
  semanticTokens: n3,
  direction: o3,
  ...uA,
  components: t3,
  styles: r3,
  config: i3
};
function as(e) {
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
      (i) => (a) => as(i) ? i(a) : u3(a, i)
    )
  )(o);
}, l3 = s3(UC);
function u3(...e) {
  return mn({}, ...e, GC);
}
function GC(e, t, n, r) {
  if ((as(e) || as(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = as(e) ? e(...o) : e, a = as(t) ? t(...o) : t;
      return mn({}, i, a, GC);
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
}, KC = h3(p3);
function YC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var qC = (e) => YC(e, (t) => t != null);
function m3(e) {
  return typeof e == "function";
}
function XC(e, ...t) {
  return m3(e) ? e(...t) : e;
}
function v3(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var g3 = typeof Element < "u", y3 = typeof Map == "function", b3 = typeof Set == "function", x3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Zu(e, t) {
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
        if (!Zu(e[r], t[r]))
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
        if (!Zu(r.value[1], t.get(r.value[0])))
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
    if (x3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Zu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var S3 = function(t, n) {
  try {
    return Zu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const w3 = /* @__PURE__ */ cl(S3);
function QC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = xR(), s = e ? KC(i, `components.${e}`) : void 0, l = r || s, u = mn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    qC(f3(o, ["children"]))
  ), c = v.useRef({});
  if (l) {
    const f = L$(l)(u);
    w3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function ei(e, t = {}) {
  return QC(e, t);
}
function Ct(e, t = {}) {
  return QC(e, t);
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
var E3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, O3 = /* @__PURE__ */ sC(
  function(e) {
    return E3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), M3 = O3, I3 = function(t) {
  return t !== "theme";
}, _b = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? M3 : I3;
}, Tb = function(t, n, r) {
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
  return $v(n, r, o), vC(function() {
    return Av(n, r, o);
  }), null;
}, $3 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = Tb(t, n, r), l = s || _b(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var y = Fv(function(m, x, h) {
      var g = u && m.as || o, b = "", w = [], k = m;
      if (m.theme == null) {
        k = {};
        for (var P in m)
          k[P] = m[P];
        k.theme = v.useContext(ua);
      }
      typeof m.className == "string" ? b = pC(x.registered, w, m.className) : m.className != null && (b = m.className + " ");
      var _ = zd(d.concat(w), x.registered, k);
      b += x.key + "-" + _.name, a !== void 0 && (b += " " + a);
      var T = u && s === void 0 ? _b(g) : l, M = {};
      for (var I in m)
        u && I === "as" || // $FlowFixMe
        T(I) && (M[I] = m[I]);
      return M.className = b, M.ref = h, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(R3, {
        cache: x,
        serialized: _,
        isStringTag: typeof g == "string"
      }), /* @__PURE__ */ v.createElement(g, M));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + a;
      }
    }), y.withComponent = function(m, x) {
      return e(m, q({}, n, x, {
        shouldForwardProp: Tb(y, x, !0)
      })).apply(void 0, d);
    }, y;
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
], jc = $3.bind();
A3.forEach(function(e) {
  jc[e] = jc(e);
});
var Eb, D3 = (Eb = jc.default) != null ? Eb : jc, F3 = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = YC(a, (d, f) => T$(f)), l = XC(e, t), u = _3(
    {},
    o,
    l,
    qC(s),
    i
  ), c = IC(u)(t.theme);
  return r ? [c, r] : c;
};
function hp(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = P3);
  const o = F3({ baseStyle: n }), i = D3(
    e,
    r
  )(o);
  return re.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = _a();
    return re.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function L3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(hp, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return hp(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, hp(n)), e.get(n);
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
  return /* @__PURE__ */ S.jsxs(QI, { theme: o, children: [
    /* @__PURE__ */ S.jsx(N3, { root: t }),
    r
  ] });
}
function N3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ S.jsx(Nd, { styles: (n) => ({ [t]: n.__cssVars }) });
}
j3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function V3() {
  const { colorMode: e } = _a();
  return /* @__PURE__ */ S.jsx(
    Nd,
    {
      styles: (t) => {
        const n = KC(t, "styles.global"), r = XC(n, { theme: t, colorMode: e });
        return r ? IC(r)(t) : void 0;
      }
    }
  );
}
var Yv = v.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Yv.displayName = "EnvironmentContext";
function B3({ defer: e } = {}) {
  const [, t] = v.useReducer((n) => n + 1, 0);
  return ca(() => {
    e && t();
  }, [e]), v.useContext(Yv);
}
function ZC(e) {
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
  return /* @__PURE__ */ S.jsxs(Yv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ S.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
ZC.displayName = "EnvironmentProvider";
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
  } = e, d = /* @__PURE__ */ S.jsx(
    ZC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ S.jsx(z3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ S.jsxs(
    CC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ S.jsx(rR, { scope: o }) : /* @__PURE__ */ S.jsx(nR, {}),
        !c && /* @__PURE__ */ S.jsx(V3, {}),
        r ? /* @__PURE__ */ S.jsx(SC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, H3 = (e, t) => e.find((n) => n.id === t);
function Ob(e, t) {
  const n = JC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function JC(e, t) {
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
function pa(e, t) {
  const n = v.useRef(!1), r = v.useRef(!1);
  v.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), v.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const ek = v.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ud = v.createContext({}), xl = v.createContext(null), Gd = typeof document < "u", qv = Gd ? v.useLayoutEffect : v.useEffect, tk = v.createContext({ strict: !1 }), Xv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), Y3 = "framerAppearId", nk = "data-" + Xv(Y3);
function q3(e, t, n, r) {
  const { visualElement: o } = v.useContext(Ud), i = v.useContext(tk), a = v.useContext(xl), s = v.useContext(ek).reducedMotion, l = v.useRef();
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
  const c = v.useRef(!!n[nk]);
  return qv(() => {
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
function nl(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Kd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Qv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Zv = ["initial", ...Qv];
function Yd(e) {
  return Kd(e.animate) || Zv.some((t) => nl(e[t]));
}
function rk(e) {
  return !!(Yd(e) || e.variants);
}
function Q3(e, t) {
  if (Yd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || nl(n) ? n : void 0,
      animate: nl(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Z3(e) {
  const { initial: t, animate: n } = Q3(e, v.useContext(Ud));
  return v.useMemo(() => ({ initial: t, animate: n }), [Mb(t), Mb(n)]);
}
function Mb(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ib = {
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
}, rl = {};
for (const e in Ib)
  rl[e] = {
    isEnabled: (t) => Ib[e].some((n) => !!t[n])
  };
function J3(e) {
  for (const t in e)
    rl[t] = {
      ...rl[t],
      ...e[t]
    };
}
const Jv = v.createContext({}), ok = v.createContext({}), ej = Symbol.for("motionComponentSymbol");
function tj({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && J3(e);
  function i(s, l) {
    let u;
    const c = {
      ...v.useContext(ek),
      ...s,
      layoutId: nj(s)
    }, { isStatic: d } = c, f = Z3(s), p = r(s, d);
    if (!d && Gd) {
      f.visualElement = q3(o, p, c, t);
      const y = v.useContext(ok), m = v.useContext(tk).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        m,
        e,
        y
      ));
    }
    return v.createElement(
      Ud.Provider,
      { value: f },
      u && f.visualElement ? v.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, X3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = v.forwardRef(i);
  return a[ej] = o, a;
}
function nj({ layoutId: e }) {
  const t = v.useContext(Jv).id;
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
function eg(e) {
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
const zc = {};
function ij(e) {
  Object.assign(zc, e);
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
function ik(e, { layout: t, layoutId: n }) {
  return ti.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!zc[e] || e === "opacity");
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
const ak = (e) => (t) => typeof t == "string" && t.startsWith(e), sk = ak("--"), Qh = ak("var(--"), uj = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, cj = (e, t) => t && typeof e == "number" ? t.transform(e) : e, lo = (e, t, n) => Math.min(Math.max(n, e), t), ni = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ks = {
  ...ni,
  transform: (e) => lo(0, 1, e)
}, pu = {
  ...ni,
  default: 1
}, Ps = (e) => Math.round(e * 1e5) / 1e5, qd = /(-)?([\d]*\.?[\d])+/g, lk = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, dj = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function wl(e) {
  return typeof e == "string";
}
const Cl = (e) => ({
  test: (t) => wl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), jr = Cl("deg"), tr = Cl("%"), ne = Cl("px"), fj = Cl("vh"), pj = Cl("vw"), Rb = {
  ...tr,
  parse: (e) => tr.parse(e) / 100,
  transform: (e) => tr.transform(e * 100)
}, $b = {
  ...ni,
  transform: Math.round
}, uk = {
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
  scale: pu,
  scaleX: pu,
  scaleY: pu,
  scaleZ: pu,
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
  opacity: ks,
  originX: Rb,
  originY: Rb,
  originZ: ne,
  // Misc
  zIndex: $b,
  // SVG
  fillOpacity: ks,
  strokeOpacity: ks,
  numOctaves: $b
};
function tg(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (sk(d)) {
      i[d] = f;
      continue;
    }
    const p = uk[d], y = cj(f, p);
    if (ti.has(d)) {
      if (l = !0, a[d] = y, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = y) : o[d] = y;
  }
  if (t.transform || (l || r ? o.transform = lj(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const ng = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ck(e, t, n) {
  for (const r in t)
    !Bt(t[r]) && !ik(r, n) && (e[r] = t[r]);
}
function hj({ transformTemplate: e }, t, n) {
  return v.useMemo(() => {
    const r = ng();
    return tg(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function mj(e, t, n) {
  const r = e.style || {}, o = {};
  return ck(o, r, e), Object.assign(o, hj(e, t, n)), e.transformValues ? e.transformValues(o) : o;
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
function Nc(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || gj.has(e);
}
let dk = (e) => !Nc(e);
function yj(e) {
  e && (dk = (t) => t.startsWith("on") ? !Nc(t) : e(t));
}
try {
  yj(require("@emotion/is-prop-valid").default);
} catch {
}
function bj(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (dk(o) || n === !0 && Nc(o) || !t && !Nc(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Ab(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function xj(e, t, n) {
  const r = Ab(t, e.x, e.width), o = Ab(n, e.y, e.height);
  return `${r} ${o}`;
}
const Sj = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, wj = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Cj(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Sj : wj;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function rg(e, {
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
  if (tg(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: y, dimensions: m } = e;
  p.transform && (m && (y.transform = p.transform), delete p.transform), m && (o !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = xj(m, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && Cj(p, a, s, l, !1);
}
const fk = () => ({
  ...ng(),
  attrs: {}
}), og = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function kj(e, t, n, r) {
  const o = v.useMemo(() => {
    const i = fk();
    return rg(i, t, { enableHardwareAcceleration: !1 }, og(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ck(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function Pj(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (eg(n) ? kj : vj)(r, i, a, n), c = {
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
function pk(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const hk = /* @__PURE__ */ new Set([
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
function mk(e, t, n, r) {
  pk(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(hk.has(o) ? o : Xv(o), t.attrs[o]);
}
function ig(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Bt(n[o]) || t.style && Bt(t.style[o]) || ik(o, e)) && (r[o] = n[o]);
  return r;
}
function vk(e, t) {
  const n = ig(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o = Sl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function ag(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function gk(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Vc = (e) => Array.isArray(e), _j = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Tj = (e) => Vc(e) ? e[e.length - 1] || 0 : e;
function Ju(e) {
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
const yk = (e) => (t, n) => {
  const r = v.useContext(Ud), o = v.useContext(xl), i = () => Ej(e, t, r, o);
  return n ? i() : gk(i);
};
function Oj(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Ju(i[f]);
  let { initial: a, animate: s } = e;
  const l = Yd(e), u = rk(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Kd(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const y = ag(e, p);
    if (!y)
      return;
    const { transitionEnd: m, transition: x, ...h } = y;
    for (const g in h) {
      let b = h[g];
      if (Array.isArray(b)) {
        const w = c ? b.length - 1 : 0;
        b = b[w];
      }
      b !== null && (o[g] = b);
    }
    for (const g in m)
      o[g] = m[g];
  }), o;
}
const He = (e) => e;
class Db {
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
  let t = new Db(), n = new Db(), r = 0, o = !1, i = !1;
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
const hu = [
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
  }, i = hu.reduce((d, f) => (d[f] = Mj(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, Ij), 1), o.timestamp = d, o.isProcessing = !0, hu.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: hu.reduce((d, f) => {
    const p = i[f];
    return d[f] = (y, m = !1, x = !1) => (n || l(), p.schedule(y, m, x)), d;
  }, {}), cancel: (d) => hu.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: Ee, cancel: Tr, state: ot, steps: mp } = Rj(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), $j = {
  useVisualState: yk({
    scrapeMotionValuesFromProps: vk,
    createRenderState: fk,
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
        rg(n, r, { enableHardwareAcceleration: !1 }, og(t.tagName), e.transformTemplate), mk(t, n);
      });
    }
  })
}, Aj = {
  useVisualState: yk({
    scrapeMotionValuesFromProps: ig,
    createRenderState: ng
  })
};
function Dj(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...eg(e) ? $j : Aj,
    preloadedFeatures: n,
    useRender: Pj(t),
    createVisualElement: r,
    Component: e
  };
}
function vr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const bk = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Xd(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const Fj = (e) => (t) => bk(t) && e(t, Xd(t));
function br(e, t, n, r) {
  return vr(e, t, Fj(n), r);
}
const Lj = (e, t) => (n) => t(e(n)), oo = (...e) => e.reduce(Lj);
function xk(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Fb = xk("dragHorizontal"), Lb = xk("dragVertical");
function Sk(e) {
  let t = !1;
  if (e === "y")
    t = Lb();
  else if (e === "x")
    t = Fb();
  else {
    const n = Fb(), r = Lb();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function wk() {
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
function jb(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || wk())
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
    this.unmount = oo(jb(this.node, !0), jb(this.node, !1));
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
const Ck = (e, t) => t ? e === t ? !0 : Ck(e, t.parentElement) : !1;
function vp(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Xd(n));
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
          Ck(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = br(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = oo(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || vp("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Ee.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = vr(this.node.current, "keyup", a), vp("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = vr(this.node.current, "keydown", t), r = () => {
        this.isPressing && vp("cancel", (i, a) => this.cancelPress(i, a));
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
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !wk();
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
const Zh = /* @__PURE__ */ new WeakMap(), gp = /* @__PURE__ */ new WeakMap(), Vj = (e) => {
  const t = Zh.get(e.target);
  t && t(e);
}, Bj = (e) => {
  e.forEach(Vj);
};
function Wj({ root: e, ...t }) {
  const n = e || document;
  gp.has(n) || gp.set(n, {});
  const r = gp.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Bj, { root: e, ...t })), r[o];
}
function Hj(e, t, n) {
  const r = Wj(t);
  return Zh.set(e, n), r.observe(e), () => {
    Zh.delete(e), r.unobserve(e);
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
function kk(e, t) {
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
function Qd(e, t, n) {
  const r = e.getProps();
  return ag(r, t, n !== void 0 ? n : r.custom, qj(e), Xj(e));
}
let Qj = He, sg = He;
const io = (e) => e * 1e3, xr = (e) => e / 1e3, Zj = {
  current: !1
}, Pk = (e) => Array.isArray(e) && typeof e[0] == "number";
function _k(e) {
  return !!(!e || typeof e == "string" && Tk[e] || Pk(e) || Array.isArray(e) && e.every(_k));
}
const ss = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Tk = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ss([0, 0.65, 0.55, 1]),
  circOut: ss([0.55, 0, 1, 0.45]),
  backIn: ss([0.31, 0.01, 0.66, -0.59]),
  backOut: ss([0.33, 1.53, 0.69, 0.99])
};
function Ek(e) {
  if (e)
    return Pk(e) ? ss(e) : Array.isArray(e) ? e.map(Ek) : Tk[e];
}
function Jj(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Ek(s);
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
const Ok = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, tz = 1e-7, nz = 12;
function rz(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = Ok(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > tz && ++s < nz);
  return a;
}
function kl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => rz(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Ok(o(i), t, r);
}
const oz = kl(0.42, 0, 1, 1), iz = kl(0, 0, 0.58, 1), Mk = kl(0.42, 0, 0.58, 1), az = (e) => Array.isArray(e) && typeof e[0] != "number", Ik = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Rk = (e) => (t) => 1 - e(1 - t), $k = (e) => 1 - Math.sin(Math.acos(e)), lg = Rk($k), sz = Ik(lg), Ak = kl(0.33, 1.53, 0.69, 0.99), ug = Rk(Ak), lz = Ik(ug), uz = (e) => (e *= 2) < 1 ? 0.5 * ug(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), cz = {
  linear: He,
  easeIn: oz,
  easeInOut: Mk,
  easeOut: iz,
  circIn: $k,
  circInOut: sz,
  circOut: lg,
  backIn: ug,
  backInOut: lz,
  backOut: Ak,
  anticipate: uz
}, zb = (e) => {
  if (Array.isArray(e)) {
    sg(e.length === 4);
    const [t, n, r, o] = e;
    return kl(t, n, r, o);
  } else if (typeof e == "string")
    return cz[e];
  return e;
}, cg = (e, t) => (n) => !!(wl(n) && dj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Dk = (e, t, n) => (r) => {
  if (!wl(r))
    return r;
  const [o, i, a, s] = r.match(qd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, dz = (e) => lo(0, 255, e), yp = {
  ...ni,
  transform: (e) => Math.round(dz(e))
}, Fo = {
  test: cg("rgb", "red"),
  parse: Dk("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + yp.transform(e) + ", " + yp.transform(t) + ", " + yp.transform(n) + ", " + Ps(ks.transform(r)) + ")"
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
const Jh = {
  test: cg("#"),
  parse: fz,
  transform: Fo.transform
}, Di = {
  test: cg("hsl", "hue"),
  parse: Dk("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tr.transform(Ps(t)) + ", " + tr.transform(Ps(n)) + ", " + Ps(ks.transform(r)) + ")"
}, kt = {
  test: (e) => Fo.test(e) || Jh.test(e) || Di.test(e),
  parse: (e) => Fo.test(e) ? Fo.parse(e) : Di.test(e) ? Di.parse(e) : Jh.parse(e),
  transform: (e) => wl(e) ? e : e.hasOwnProperty("red") ? Fo.transform(e) : Di.transform(e)
}, ze = (e, t, n) => -n * e + n * t + e;
function bp(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function pz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = bp(l, s, e + 1 / 3), i = bp(l, s, e), a = bp(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const xp = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, hz = [Jh, Fo, Di], mz = (e) => hz.find((t) => t.test(e));
function Nb(e) {
  const t = mz(e);
  let n = t.parse(e);
  return t === Di && (n = pz(n)), n;
}
const Fk = (e, t) => {
  const n = Nb(e), r = Nb(t), o = { ...n };
  return (i) => (o.red = xp(n.red, r.red, i), o.green = xp(n.green, r.green, i), o.blue = xp(n.blue, r.blue, i), o.alpha = ze(n.alpha, r.alpha, i), Fo.transform(o));
};
function vz(e) {
  var t, n;
  return isNaN(e) && wl(e) && (((t = e.match(qd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(lk)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Lk = {
  regex: uj,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, jk = {
  regex: lk,
  countKey: "Colors",
  token: "${c}",
  parse: kt.parse
}, zk = {
  regex: qd,
  countKey: "Numbers",
  token: "${n}",
  parse: ni.parse
};
function Sp(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function Bc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && Sp(n, Lk), Sp(n, jk), Sp(n, zk), n;
}
function Nk(e) {
  return Bc(e).values;
}
function Vk(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Bc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Lk.token, a[l]) : l < r + n ? s = s.replace(jk.token, kt.transform(a[l])) : s = s.replace(zk.token, Ps(a[l]));
    return s;
  };
}
const gz = (e) => typeof e == "number" ? 0 : e;
function yz(e) {
  const t = Nk(e);
  return Vk(e)(t.map(gz));
}
const uo = {
  test: vz,
  parse: Nk,
  createTransformer: Vk,
  getAnimatableNone: yz
}, Bk = (e, t) => (n) => `${n > 0 ? t : e}`;
function Wk(e, t) {
  return typeof e == "number" ? (n) => ze(e, t, n) : kt.test(e) ? Fk(e, t) : e.startsWith("var(") ? Bk(e, t) : Uk(e, t);
}
const Hk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Wk(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, bz = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Wk(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, Uk = (e, t) => {
  const n = uo.createTransformer(t), r = Bc(e), o = Bc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? oo(Hk(r.values, o.values), n) : Bk(e, t);
}, ol = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Vb = (e, t) => (n) => ze(e, t, n);
function xz(e) {
  return typeof e == "number" ? Vb : typeof e == "string" ? kt.test(e) ? Fk : Uk : Array.isArray(e) ? Hk : typeof e == "object" ? bz : Vb;
}
function Sz(e, t, n) {
  const r = [], o = n || xz(e[0]), i = e.length - 1;
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
function Gk(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (sg(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Sz(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = ol(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(lo(e[0], e[i - 1], u)) : l;
}
function wz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = ol(0, t, r);
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
  return e.map(() => t || Mk).splice(0, e.length - 1);
}
function Wc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = az(r) ? r.map(zb) : zb(r), i = {
    done: !1,
    value: t[0]
  }, a = kz(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Cz(t),
    e
  ), s = Gk(a, t, {
    ease: Array.isArray(o) ? o : Pz(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Kk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const _z = 5;
function Yk(e, t, n) {
  const r = Math.max(t - _z, 0);
  return Kk(n - e(r), t - r);
}
const wp = 1e-3, Tz = 0.01, Bb = 10, Ez = 0.05, Oz = 1;
function Mz({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Qj(e <= io(Bb));
  let a = 1 - t;
  a = lo(Ez, Oz, a), e = lo(Tz, Bb, xr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = em(u, a), y = Math.exp(-d);
    return wp - f / p * y;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, y = Math.exp(-d), m = em(Math.pow(u, 2), a);
    return (-o(u) + wp > 0 ? -1 : 1) * ((f - p) * y) / m;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -wp + c * d;
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
function em(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const $z = ["duration", "bounce"], Az = ["stiffness", "damping", "mass"];
function Wb(e, t) {
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
  if (!Wb(e, Az) && Wb(e, $z)) {
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
function qk({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = Dz(r), p = c ? -xr(c) : 0, y = l / (2 * Math.sqrt(s * u)), m = i - o, x = xr(Math.sqrt(s / u)), h = Math.abs(m) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 5e-3 : 0.5);
  let g;
  if (y < 1) {
    const b = em(x, y);
    g = (w) => {
      const k = Math.exp(-y * x * w);
      return i - k * ((p + y * x * m) / b * Math.sin(b * w) + m * Math.cos(b * w));
    };
  } else if (y === 1)
    g = (b) => i - Math.exp(-x * b) * (m + (p + x * m) * b);
  else {
    const b = x * Math.sqrt(y * y - 1);
    g = (w) => {
      const k = Math.exp(-y * x * w), P = Math.min(b * w, 300);
      return i - k * ((p + y * x * m) * Math.sinh(P) + b * m * Math.cosh(P)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const w = g(b);
      if (f)
        a.done = b >= d;
      else {
        let k = p;
        b !== 0 && (y < 1 ? k = Yk(g, b, w) : k = 0);
        const P = Math.abs(k) <= n, _ = Math.abs(i - w) <= t;
        a.done = P && _;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function Hb({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (T) => s !== void 0 && T < s || l !== void 0 && T > l, y = (T) => s === void 0 ? l : l === void 0 || Math.abs(s - T) < Math.abs(l - T) ? s : l;
  let m = n * t;
  const x = d + m, h = a === void 0 ? x : a(x);
  h !== x && (m = h - d);
  const g = (T) => -m * Math.exp(-T / r), b = (T) => h + g(T), w = (T) => {
    const M = g(T), I = b(T);
    f.done = Math.abs(M) <= u, f.value = f.done ? h : I;
  };
  let k, P;
  const _ = (T) => {
    p(f.value) && (k = T, P = qk({
      keyframes: [f.value, y(f.value)],
      velocity: Yk(b, T, f.value),
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
}, Ub = 2e4;
function Gb(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ub; )
    t += n, r = e.next(t);
  return t >= Ub ? 1 / 0 : t;
}
const Lz = {
  decay: Hb,
  inertia: Hb,
  tween: Wc,
  keyframes: Wc,
  spring: qk
};
function Hc({ autoplay: e = !0, delay: t = 0, driver: n = Fz, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, y = !1, m, x;
  const h = () => {
    x = new Promise((V) => {
      m = V;
    });
  };
  h();
  let g;
  const b = Lz[o] || Wc;
  let w;
  b !== Wc && typeof r[0] != "number" && (w = Gk([0, 100], r, {
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
  k.calculatedDuration === null && i && (k.calculatedDuration = Gb(k));
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
      const Pe = L / G;
      let et = Math.floor(Pe), qe = Pe % 1;
      !qe && Pe >= 1 && (qe = 1), qe === 1 && et--, et = Math.min(et, i + 1);
      const on = !!(et % 2);
      on && (s === "reverse" ? (qe = 1 - qe, a && (qe -= a / G)) : s === "mirror" && (le = P));
      let Pn = lo(0, 1, qe);
      L > H && (Pn = s === "reverse" && on ? 1 : 0), te = Pn * G;
    }
    const ae = z ? { done: !1, value: r[0] } : le.next(te);
    w && (ae.value = w(ae.value));
    let { done: se } = ae;
    !z && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = T === null && (_ === "finished" || _ === "running" && se);
    return d && d(ae.value), me && A(), ae;
  }, K = () => {
    g && g.stop(), g = void 0;
  }, $ = () => {
    _ = "idle", K(), m(), h(), M = I = null;
  }, A = () => {
    _ = "finished", c && c(), K(), m();
  }, j = () => {
    if (y)
      return;
    g || (g = n(W));
    const V = g.now();
    l && l(), T !== null ? M = V - T : (!M || _ === "finished") && (M = V), _ === "finished" && h(), I = M, T = null, _ = "running", g.start();
  };
  e && j();
  const U = {
    then(V, Y) {
      return x.then(V, Y);
    },
    get time() {
      return xr(L);
    },
    set time(V) {
      V = io(V), L = V, T !== null || !g || p === 0 ? T = V : M = g.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Gb(k) : k.calculatedDuration;
      return xr(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !g || (p = V, U.time = xr(L));
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
]), mu = 10, Vz = 2e4, Bz = (e, t) => t.type === "spring" || e === "backgroundColor" || !_k(t.ease);
function Wz(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(zz() && Nz.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((g) => {
      s = g;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (Bz(t, o)) {
    const g = Hc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const w = [];
    let k = 0;
    for (; !b.done && k < Vz; )
      b = g.sample(k), w.push(b.value), k += mu;
    p = void 0, c = w, d = k - mu, f = "linear";
  }
  const y = Jj(e.owner.current, t, c, {
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
  const m = () => y.cancel(), x = () => {
    Ee.update(m), s(), u();
  };
  return y.onfinish = () => {
    e.set(ez(c, o)), r && r(), x();
  }, {
    then(g, b) {
      return l.then(g, b);
    },
    attachTimeline(g) {
      return y.timeline = g, y.onfinish = null, He;
    },
    get time() {
      return xr(y.currentTime || 0);
    },
    set time(g) {
      y.currentTime = io(g);
    },
    get speed() {
      return y.playbackRate;
    },
    set speed(g) {
      y.playbackRate = g;
    },
    get duration() {
      return xr(d);
    },
    play: () => {
      a || (y.play(), Tr(m));
    },
    pause: () => y.pause(),
    stop: () => {
      if (a = !0, y.playState === "idle")
        return;
      const { currentTime: g } = y;
      if (g) {
        const b = Hc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(g - mu).value, b.sample(g).value, mu);
      }
      x();
    },
    complete: () => y.finish(),
    cancel: x
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
  return t ? Hc({
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
}, qz = (e, { keyframes: t }) => t.length > 2 ? Kz : ti.has(e) ? e.startsWith("scale") ? Gz(t[1]) : Uz : Yz, tm = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(uo.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), Xz = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Qz(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(qd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = Xz.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Zz = /([a-z-]*)\(.*?\)/g, nm = {
  ...uo,
  getAnimatableNone: (e) => {
    const t = e.match(Zz);
    return t ? t.map(Qz).join(" ") : e;
  }
}, Jz = {
  ...uk,
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
  filter: nm,
  WebkitFilter: nm
}, dg = (e) => Jz[e];
function Xk(e, t) {
  let n = dg(e);
  return n !== nm && (n = uo), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Qk = (e) => /^0[^.\s]+$/.test(e);
function eN(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Qk(e);
}
function tN(e, t, n, r) {
  const o = tm(t, n);
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
      i[c] = Xk(t, s);
    }
  return i;
}
function nN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function fg(e, t) {
  return e[t] || e.default || e;
}
const pg = (e, t, n, r = {}) => (o) => {
  const i = fg(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - io(a);
  const l = tN(t, e, n, i), u = l[0], c = l[l.length - 1], d = tm(e, u), f = tm(e, c);
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
  if (nN(i) || (p = {
    ...p,
    ...qz(e, p)
  }), p.duration && (p.duration = io(p.duration)), p.repeatDelay && (p.repeatDelay = io(p.repeatDelay)), !d || !f || Zj.current || i.type === !1)
    return Hz(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const y = Wz(t, e, p);
    if (y)
      return y;
  }
  return Hc(p);
};
function Uc(e) {
  return !!(Bt(e) && e.add);
}
const Zk = (e) => /^\-?\d*\.?\d+$/.test(e);
function hg(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function mg(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class vg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return hg(this.subscriptions, t), () => mg(this.subscriptions, t);
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
    this.events[t] || (this.events[t] = new vg());
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
      Kk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function ha(e, t) {
  return new oN(e, t);
}
const Jk = (e) => (t) => t.test(e), iN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, eP = [ni, ne, tr, jr, pj, fj, iN], Ga = (e) => eP.find(Jk(e)), aN = [...eP, kt, uo], sN = (e) => aN.find(Jk(e));
function lN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ha(n));
}
function uN(e, t) {
  const n = Qd(e, t);
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
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Zk(c) || Qk(c)) ? c = parseFloat(c) : !sN(c) && uo.test(u) && (c = Xk(l, u)), e.addValue(l, ha(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
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
function tP(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && pN(c, d))
      continue;
    const y = {
      delay: n,
      elapsed: 0,
      ...fg(i || {}, d)
    };
    let m = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const g = e.getProps()[nk];
      g && (m = !1, y.elapsed = window.HandoffAppearAnimations(g, d, f, Ee), y.syncStart = !0);
    }
    let x = m && p === f.get();
    if (y.type === "spring" && (f.getVelocity() || y.velocity) && (x = !1), f.animation && (x = !1), x)
      continue;
    f.start(pg(d, f, p, e.shouldReduceMotion && ti.has(d) ? { type: !1 } : y));
    const h = f.animation;
    Uc(l) && (l.add(d), h.then(() => l.remove(d))), u.push(h);
  }
  return a && Promise.all(u).then(() => {
    a && uN(e, a);
  }), u;
}
function rm(e, t, n = {}) {
  const r = Qd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(tP(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
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
    u.notify("AnimationStart", t), a.push(rm(u, t, {
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
    const o = t.map((i) => rm(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = rm(e, t, n);
  else {
    const o = typeof t == "function" ? Qd(e, t, n.custom) : t;
    r = Promise.all(tP(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const gN = [...Qv].reverse(), yN = Qv.length;
function bN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => vN(e, n, r)));
}
function xN(e) {
  let t = bN(e);
  const n = wN();
  let r = !0;
  const o = (l, u) => {
    const c = Qd(e, u);
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
    let y = {}, m = 1 / 0;
    for (let h = 0; h < yN; h++) {
      const g = gN[h], b = n[g], w = c[g] !== void 0 ? c[g] : d[g], k = nl(w), P = g === u ? b.isActive : null;
      P === !1 && (m = h);
      let _ = w === d[g] && w !== c[g] && k;
      if (_ && r && e.manuallyAnimateOnMount && (_ = !1), b.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !w && !b.prevProp || // Or if the prop doesn't define an animation
      Kd(w) || typeof w == "boolean")
        continue;
      const T = SN(b.prevProp, w);
      let M = T || // If we're making this variant active, we want to always make it active
      g === u && b.isActive && !_ && k || // If we removed a higher-priority variant (i is in reverse order)
      h > m && k;
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
        y.hasOwnProperty(W) || (K !== $ ? Vc(K) && Vc($) ? !kk(K, $) || T ? L(W) : b.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : b.protectedKeys[W] = !0);
      }
      b.prevProp = w, b.prevResolvedValues = D, b.isActive && (y = { ...y, ...D }), r && e.blockInitialAnimation && (M = !1), M && !_ && f.push(...I.map((W) => ({
        animation: W,
        options: { type: g, ...l }
      })));
    }
    if (p.size) {
      const h = {};
      p.forEach((g) => {
        const b = e.getBaseTarget(g);
        b !== void 0 && (h[g] = b);
      }), f.push({ animation: h });
    }
    let x = !!f.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(f) : Promise.resolve();
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
function SN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !kk(t, e) : !1;
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
    super(t), t.animationState || (t.animationState = xN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Kd(t) && (this.unmount = t.subscribe(this.node));
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
}, Kb = (e, t) => Math.abs(e - t);
function TN(e, t) {
  const n = Kb(e.x, t.x), r = Kb(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class nP {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = kp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = TN(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: y } = ot;
      this.history.push({ ...p, timestamp: y });
      const { onStart: m, onMove: x } = this.handlers;
      d || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Cp(d, this.transformPagePoint), Ee.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, y = kp(c.type === "pointercancel" ? this.lastMoveEventInfo : Cp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, y), p && p(c, y);
    }, !bk(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Xd(t), a = Cp(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, kp(a, this.history)), this.removeListeners = oo(br(this.contextWindow, "pointermove", this.handlePointerMove), br(this.contextWindow, "pointerup", this.handlePointerUp), br(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tr(this.updatePoint);
  }
}
function Cp(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Yb(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function kp({ point: e }, t) {
  return {
    point: e,
    delta: Yb(e, rP(t)),
    offset: Yb(e, EN(t)),
    velocity: ON(t, 0.1)
  };
}
function EN(e) {
  return e[0];
}
function rP(e) {
  return e[e.length - 1];
}
function ON(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = rP(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > io(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = xr(o.timestamp - r.timestamp);
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
function om(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function qb(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ze(t.min, t.max, e.origin), e.scale = Jt(n) / Jt(t), (om(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ze(n.min, n.max, e.origin) - e.originPoint, (om(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function _s(e, t, n, r) {
  qb(e.x, t.x, n.x, r ? r.originX : void 0), qb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Xb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Jt(t);
}
function MN(e, t, n) {
  Xb(e.x, t.x, n.x), Xb(e.y, t.y, n.y);
}
function Qb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Jt(t);
}
function Ts(e, t, n) {
  Qb(e.x, t.x, n.x), Qb(e.y, t.y, n.y);
}
function IN(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ze(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ze(n, e, r.max) : Math.min(e, n)), e;
}
function Zb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function RN(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Zb(e.x, n, o),
    y: Zb(e.y, t, r)
  };
}
function Jb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function $N(e, t) {
  return {
    x: Jb(e.x, t.x),
    y: Jb(e.y, t.y)
  };
}
function AN(e, t) {
  let n = 0.5;
  const r = Jt(e), o = Jt(t);
  return o > r ? n = ol(t.min, t.max - r, e.min) : r > o && (n = ol(e.min, e.max - o, t.min)), lo(0, 1, n);
}
function DN(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const im = 0.35;
function FN(e = im) {
  return e === !1 ? e = 0 : e === !0 && (e = im), {
    x: e1(e, "left", "right"),
    y: e1(e, "top", "bottom")
  };
}
function e1(e, t, n) {
  return {
    min: t1(e, t),
    max: t1(e, n)
  };
}
function t1(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const n1 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Fi = () => ({
  x: n1(),
  y: n1()
}), r1 = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: r1(),
  y: r1()
});
function Hn(e) {
  return [e("x"), e("y")];
}
function oP({ top: e, left: t, right: n, bottom: r }) {
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
function Pp(e) {
  return e === void 0 || e === 1;
}
function am({ scale: e, scaleX: t, scaleY: n }) {
  return !Pp(e) || !Pp(t) || !Pp(n);
}
function _o(e) {
  return am(e) || iP(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function iP(e) {
  return o1(e.x) || o1(e.y);
}
function o1(e) {
  return e && e !== "0%";
}
function Gc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function i1(e, t, n, r, o) {
  return o !== void 0 && (e = Gc(e, o, r)), Gc(e, n, r) + t;
}
function sm(e, t = 0, n = 1, r, o) {
  e.min = i1(e.min, t, n, r, o), e.max = i1(e.max, t, n, r, o);
}
function aP(e, { x: t, y: n }) {
  sm(e.x, t.translate, t.scale, t.originPoint), sm(e.y, n.translate, n.scale, n.originPoint);
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
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, aP(e, a)), r && _o(i.latestValues) && Li(e, i.latestValues));
  }
  t.x = a1(t.x), t.y = a1(t.y);
}
function a1(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Vr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function s1(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = ze(e.min, e.max, i);
  sm(e, t[n], t[r], a, t.scale);
}
const NN = ["x", "scaleX", "originX"], VN = ["y", "scaleY", "originY"];
function Li(e, t) {
  s1(e.x, t, NN), s1(e.y, t, VN);
}
function sP(e, t) {
  return oP(jN(e.getBoundingClientRect(), t));
}
function BN(e, t, n) {
  const r = sP(e, n), { scroll: o } = t;
  return o && (Vr(r.x, o.offset.x), Vr(r.y, o.offset.y)), r;
}
const lP = ({ current: e }) => e ? e.ownerDocument.defaultView : null, WN = /* @__PURE__ */ new WeakMap();
class HN {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Xd(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Sk(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Hn((y) => {
        let m = this.getAxisMotionValue(y).get() || 0;
        if (tr.test(m)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const h = x.layout.layoutBox[y];
            h && (m = Jt(h) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[y] = m;
      }), f && Ee.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: y } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = UN(y), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, y), this.updateAxis("y", u.point, y), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new nP(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: lP(this.visualElement)
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
    if (!r || !vu(t, o, this.currentDirection))
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
      this.hasMutatedConstraints = !!s, s && (a = oP(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Hn((c) => {
      if (!vu(c, n, this.currentDirection))
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
    return r.start(pg(t, r, 0, n));
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
      if (!vu(n, r, this.currentDirection))
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
      if (!vu(a, t, null))
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = im, dragMomentum: s = !0 } = t;
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
function vu(e, t, n) {
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
const l1 = (e) => (t, n) => {
  e && Ee.update(() => e(t, n));
};
class KN extends vo {
  constructor() {
    super(...arguments), this.removePointerDownListener = He;
  }
  onPointerDown(t) {
    this.session = new nP(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: lP(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: l1(t),
      onStart: l1(n),
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
function uP() {
  const e = v.useContext(xl);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = v.useId();
  return v.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function YN() {
  return qN(v.useContext(xl));
}
function qN(e) {
  return e === null ? !0 : e.isPresent;
}
const ec = {
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
function u1(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ka = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = u1(e, t.target.x), r = u1(e, t.target.y);
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
    })), ec.hasEverUpdated = !0;
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
function cP(e) {
  const [t, n] = uP(), r = v.useContext(Jv);
  return re.createElement(QN, { ...e, layoutGroup: r, switchLayoutGroup: v.useContext(ok), isPresent: t, safeToRemove: n });
}
const ZN = {
  borderRadius: {
    ...Ka,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ka,
  borderTopRightRadius: Ka,
  borderBottomLeftRadius: Ka,
  borderBottomRightRadius: Ka,
  boxShadow: XN
}, dP = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], JN = dP.length, c1 = (e) => typeof e == "string" ? parseFloat(e) : e, d1 = (e) => typeof e == "number" || ne.test(e);
function eV(e, t, n, r, o, i) {
  o ? (e.opacity = ze(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    tV(r)
  ), e.opacityExit = ze(t.opacity !== void 0 ? t.opacity : 1, 0, nV(r))) : i && (e.opacity = ze(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < JN; a++) {
    const s = `border${dP[a]}Radius`;
    let l = f1(t, s), u = f1(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || d1(l) === d1(u) ? (e[s] = Math.max(ze(c1(l), c1(u), r), 0), (tr.test(u) || tr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ze(t.rotate || 0, n.rotate || 0, r));
}
function f1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const tV = fP(0, 0.5, lg), nV = fP(0.5, 0.95, He);
function fP(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(ol(e, t, r));
}
function p1(e, t) {
  e.min = t.min, e.max = t.max;
}
function un(e, t) {
  p1(e.x, t.x), p1(e.y, t.y);
}
function h1(e, t, n, r, o) {
  return e -= t, e = Gc(e, 1 / n, r), o !== void 0 && (e = Gc(e, 1 / o, r)), e;
}
function rV(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (tr.test(t) && (t = parseFloat(t), t = ze(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = ze(i.min, i.max, r);
  e === i && (s -= t), e.min = h1(e.min, t, n, s, o), e.max = h1(e.max, t, n, s, o);
}
function m1(e, t, [n, r, o], i, a) {
  rV(e, t[n], t[r], t[o], t.scale, i, a);
}
const oV = ["x", "scaleX", "originX"], iV = ["y", "scaleY", "originY"];
function v1(e, t, n, r) {
  m1(e.x, t, oV, n ? n.x : void 0, r ? r.x : void 0), m1(e.y, t, iV, n ? n.y : void 0, r ? r.y : void 0);
}
function g1(e) {
  return e.translate === 0 && e.scale === 1;
}
function pP(e) {
  return g1(e.x) && g1(e.y);
}
function aV(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function hP(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function y1(e) {
  return Jt(e.x) / Jt(e.y);
}
class sV {
  constructor() {
    this.members = [];
  }
  add(t) {
    hg(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (mg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function b1(e, t, n) {
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
    hg(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    mg(this.children, t), this.isDirty = !0;
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
  const r = Bt(e) ? e : ha(e);
  return r.start(pg("", r, t, n)), r.animation;
}
const x1 = ["", "X", "Y", "Z"], hV = { visibility: "hidden" }, S1 = 1e3;
let mV = 0;
const To = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function mP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
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
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new vg()), this.eventHandlers.get(a).add(s);
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
          this.root.updateBlockedByResize = !0, d && d(), d = cV(f, 250), ec.hasAnimatedSinceResize && (ec.hasAnimatedSinceResize = !1, this.nodes.forEach(C1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || c.getDefaultTransition() || OV, { onLayoutAnimationStart: x, onLayoutAnimationComplete: h } = c.getProps(), g = !this.targetLayout || !hP(this.targetLayout, y) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const w = {
            ...fg(m, "layout"),
            onPlay: x,
            onComplete: h
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || C1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(w1);
        return;
      }
      this.isUpdating || this.nodes.forEach(SV), this.isUpdating = !1, this.nodes.forEach(wV), this.nodes.forEach(vV), this.nodes.forEach(gV), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = lo(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, mp.update.process(ot), mp.preRender.process(ot), mp.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(xV), this.sharedNodes.forEach(_V);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !pP(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
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
        am(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        un(c, d), v1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return _o(this.latestValues) && v1(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), Ts(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), MN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : un(this.target, this.layout.layoutBox), aP(this.target, this.targetDelta)) : un(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), Ts(this.relativeTargetOrigin, this.target, p.target), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          To.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || am(this.parent.latestValues) || iP(this.parent.latestValues)))
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
      const { target: y } = s;
      if (!y) {
        this.projectionTransform && (this.projectionDelta = Fi(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Fi(), this.projectionDeltaWithTransform = Fi());
      const m = this.projectionTransform;
      _s(this.projectionDelta, this.layoutCorrected, y, this.latestValues), this.projectionTransform = b1(this.projectionDelta, this.treeScale), (this.projectionTransform !== m || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), To.recalculatedProjection++;
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
      const f = Xe(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, m = p !== y, x = this.getStack(), h = !x || x.members.length <= 1, g = !!(m && !h && this.options.crossfade === !0 && !this.path.some(EV));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        k1(d.x, a.x, k), k1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ts(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), TV(this.relativeTarget, this.relativeTargetOrigin, f, k), b && aV(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Xe()), un(b, this.relativeTarget)), m && (this.animationValues = c, eV(c, u, this.latestValues, k, g, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ee.update(() => {
        ec.hasAnimatedSinceResize = !0, this.currentAnimation = pV(0, S1, {
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
        if (this !== a && this.layout && u && vP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        un(s, l), Li(s, c), _s(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
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
      for (let c = 0; c < x1.length; c++) {
        const d = "rotate" + x1[c];
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
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ju(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = Ju(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !_o(this.latestValues) && (m.transform = c ? c({}, "") : "none", this.hasProjected = !1), m;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = b1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const m in zc) {
        if (f[m] === void 0)
          continue;
        const { correct: x, applyTo: h } = zc[m], g = u.transform === "none" ? f[m] : x(f[m], d);
        if (h) {
          const b = h.length;
          for (let w = 0; w < b; w++)
            u[h[w]] = g;
        } else
          u[m] = g;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Ju(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(w1), this.root.sharedNodes.clear();
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
    }) : vP(i, n.layoutBox, r) && Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Fi();
    _s(s, r, n.layoutBox);
    const l = Fi();
    a ? _s(l, e.applyTransform(o, !0), n.measuredBox) : _s(l, r, n.layoutBox);
    const u = !pP(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const y = Xe();
          Ts(y, n.layoutBox, f.layoutBox);
          const m = Xe();
          Ts(m, r, p.layoutBox), hP(y, m) || (c = !0), d.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = y, e.relativeParent = d);
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
function xV(e) {
  e.clearSnapshot();
}
function w1(e) {
  e.clearMeasurements();
}
function SV(e) {
  e.isLayoutDirty = !1;
}
function wV(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function C1(e) {
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
function k1(e, t, n) {
  e.translate = ze(t.translate, 0, n), e.scale = ze(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function P1(e, t, n, r) {
  e.min = ze(t.min, n.min, r), e.max = ze(t.max, n.max, r);
}
function TV(e, t, n, r) {
  P1(e.x, t.x, n.x, r), P1(e.y, t.y, n.y, r);
}
function EV(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const OV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, _1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), T1 = _1("applewebkit/") && !_1("chrome/") ? Math.round : He;
function E1(e) {
  e.min = T1(e.min), e.max = T1(e.max);
}
function MV(e) {
  E1(e.x), E1(e.y);
}
function vP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !om(y1(t), y1(n), 0.2);
}
const IV = mP({
  attachResizeListener: (e, t) => vr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), _p = {
  current: void 0
}, gP = mP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!_p.current) {
      const e = new IV({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), _p.current = e;
    }
    return _p.current;
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
    ProjectionNode: gP,
    MeasureLayout: cP
  }
}, $V = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function AV(e) {
  const t = $V.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function lm(e, t, n = 1) {
  const [r, o] = AV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Zk(a) ? parseFloat(a) : a;
  } else
    return Qh(o) ? lm(o, t, n + 1) : o;
}
function DV(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!Qh(i))
      return;
    const a = lm(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Qh(i))
      continue;
    const a = lm(i, r);
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
]), yP = (e) => FV.has(e), LV = (e) => Object.keys(e).some(yP), O1 = (e) => e === ni || e === ne, M1 = (e, t) => parseFloat(e.split(", ")[t]), I1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return M1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? M1(i[1], e) : 0;
  }
}, jV = /* @__PURE__ */ new Set(["x", "y", "z"]), zV = Sl.filter((e) => !jV.has(e));
function NV(e) {
  const t = [];
  return zV.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const ma = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: I1(4, 13),
  y: I1(5, 14)
};
ma.translateX = ma.x;
ma.translateY = ma.y;
const VV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = ma[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ma[u](l, i);
  }), e;
}, BV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(yP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = Ga(c);
    const f = t[l];
    let p;
    if (Vc(f)) {
      const y = f.length, m = f[0] === null ? 1 : 0;
      c = f[m], d = Ga(c);
      for (let x = m; x < y && f[x] !== null; x++)
        p ? sg(Ga(f[x]) === p) : p = Ga(f[x]);
    } else
      p = Ga(f);
    if (d !== p)
      if (O1(d) && O1(p)) {
        const y = u.get();
        typeof y == "string" && u.set(parseFloat(y)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = NV(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = VV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Gd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function WV(e, t, n, r) {
  return LV(t) ? BV(e, t, n, r) : { target: t, transitionEnd: r };
}
const HV = (e, t, n, r) => {
  const o = DV(e, t, r);
  return t = o.target, r = o.transitionEnd, WV(e, t, n, r);
}, um = { current: null }, bP = { current: !1 };
function UV() {
  if (bP.current = !0, !!Gd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => um.current = e.matches;
      e.addListener(t), t();
    } else
      um.current = !1;
}
function GV(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Bt(i))
      e.addValue(o, i), Uc(r) && r.add(o);
    else if (Bt(a))
      e.addValue(o, ha(i, { owner: e })), Uc(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ha(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const R1 = /* @__PURE__ */ new WeakMap(), xP = Object.keys(rl), KV = xP.length, $1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], YV = Zv.length;
class qV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ee.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Yd(n), this.isVariantNode = rk(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), Uc(u) && u.add(d));
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
    this.current = t, R1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), bP.current || UV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : um.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    R1.delete(this.current), this.projection && this.projection.unmount(), Tr(this.notifyUpdate), Tr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
      const u = xP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = rl[u];
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
    for (let r = 0; r < $1.length; r++) {
      const o = $1[r];
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
      const o = Zv[r], i = this.props[o];
      (nl(i) || i === !1) && (n[o] = i);
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
    return r === void 0 && n !== void 0 && (r = ha(n, { owner: this }), this.addValue(t, r)), r;
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = ag(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new vg()), this.events[t].add(n);
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
      const r = dg(n);
      return r && r.default || 0;
    } else {
      const r = XV(t), o = (sk(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return sP(t, n);
  }
  build(t, n, r, o) {
    tg(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return ig(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    pk(t, n, r, o);
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
      const r = dg(n);
      return r && r.default || 0;
    }
    return n = hk.has(n) ? n : Xv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return vk(t, n);
  }
  build(t, n, r, o) {
    rg(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    mk(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = og(t.tagName), super.mount(t);
  }
}
const JV = (e, t) => eg(e) ? new ZV(t, { enableHardwareAcceleration: !1 }) : new QV(t, { enableHardwareAcceleration: !0 }), eB = {
  layout: {
    ProjectionNode: gP,
    MeasureLayout: cP
  }
}, tB = {
  ..._N,
  ...Yj,
  ...RV,
  ...eB
}, ir = /* @__PURE__ */ rj((e, t) => Dj(e, t, tB, JV));
function wP() {
  const e = v.useRef(!1);
  return qv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function nB() {
  const e = wP(), [t, n] = v.useState(0), r = v.useCallback(() => {
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
const Tp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = gk(iB), l = v.useId(), u = v.useMemo(
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
  }, [n]), a === "popLayout" && (e = v.createElement(oB, { isPresent: n }, e)), v.createElement(xl.Provider, { value: u }, e);
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
  const s = v.useContext(Jv).forceRender || nB()[0], l = wP(), u = lB(e);
  let c = u;
  const d = v.useRef(/* @__PURE__ */ new Map()).current, f = v.useRef(c), p = v.useRef(/* @__PURE__ */ new Map()).current, y = v.useRef(!0);
  if (qv(() => {
    y.current = !1, sB(u, p), f.current = c;
  }), aB(() => {
    y.current = !0, p.clear(), d.clear();
  }), y.current)
    return v.createElement(v.Fragment, null, c.map((g) => v.createElement(Tp, { key: Eo(g), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, g)));
  c = [...c];
  const m = f.current.map(Eo), x = u.map(Eo), h = m.length;
  for (let g = 0; g < h; g++) {
    const b = m[g];
    x.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((g, b) => {
    if (x.indexOf(b) !== -1)
      return;
    const w = p.get(b);
    if (!w)
      return;
    const k = m.indexOf(b);
    let P = g;
    if (!P) {
      const _ = () => {
        d.delete(b);
        const T = Array.from(p.keys()).filter((M) => !x.includes(M));
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
      P = v.createElement(Tp, { key: Eo(w), isPresent: !1, onExitComplete: _, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(b, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((g) => {
    const b = g.key;
    return d.has(b) ? g : v.createElement(Tp, { key: Eo(g), isPresent: !0, presenceAffectsLayout: i, mode: a }, g);
  }), v.createElement(v.Fragment, null, d.size ? c : c.map((g) => v.cloneElement(g)));
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
}, CP = v.memo((e) => {
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
  pa(() => {
    p || r == null || r();
  }, [p]), pa(() => {
    f(s);
  }, [s]);
  const y = () => f(null), m = () => f(s), x = () => {
    p && o();
  };
  v.useEffect(() => {
    p && i && o();
  }, [p, i, o]), K3(x, d);
  const h = v.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), g = v.useMemo(() => U3(a), [a]);
  return /* @__PURE__ */ S.jsx(
    ir.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: m,
      custom: { position: a },
      style: g,
      children: /* @__PURE__ */ S.jsx(
        X.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: h,
          children: Xn(n, { id: t, onClose: x })
        }
      )
    }
  );
});
CP.displayName = "ToastComponent";
var A1 = {
  path: /* @__PURE__ */ S.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ S.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ S.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ S.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
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
  }, y = r ?? A1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ S.jsx(X.svg, { as: n, ...p, ...u });
  const m = a ?? A1.path;
  return /* @__PURE__ */ S.jsx(X.svg, { verticalAlign: "middle", viewBox: y, ...p, ...u, children: m });
});
kn.displayName = "Icon";
function cB(e) {
  return /* @__PURE__ */ S.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ S.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function dB(e) {
  return /* @__PURE__ */ S.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ S.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function D1(e) {
  return /* @__PURE__ */ S.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ S.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var fB = yC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Zd = oe((e, t) => {
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
  return /* @__PURE__ */ S.jsx(
    X.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && /* @__PURE__ */ S.jsx(X.span, { srOnly: !0, children: r })
    }
  );
});
Zd.displayName = "Spinner";
var [pB, gg] = Je({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [hB, yg] = Je({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), kP = {
  info: { icon: dB, colorScheme: "blue" },
  warning: { icon: D1, colorScheme: "orange" },
  success: { icon: cB, colorScheme: "green" },
  error: { icon: D1, colorScheme: "red" },
  loading: { icon: Zd, colorScheme: "blue" }
};
function mB(e) {
  return kP[e].colorScheme;
}
function vB(e) {
  return kP[e].icon;
}
var PP = oe(
  function(t, n) {
    const r = yg(), { status: o } = gg(), i = {
      display: "inline",
      ...r.description
    };
    return /* @__PURE__ */ S.jsx(
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
PP.displayName = "AlertDescription";
function _P(e) {
  const { status: t } = gg(), n = vB(t), r = yg(), o = t === "loading" ? r.spinner : r.icon;
  return /* @__PURE__ */ S.jsx(
    X.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ie("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ S.jsx(n, { h: "100%", w: "100%" })
    }
  );
}
_P.displayName = "AlertIcon";
var TP = oe(
  function(t, n) {
    const r = yg(), { status: o } = gg();
    return /* @__PURE__ */ S.jsx(
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
TP.displayName = "AlertTitle";
var EP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Cn(t), s = (r = t.colorScheme) != null ? r : mB(o), l = Ct("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ S.jsx(pB, { value: { status: o }, children: /* @__PURE__ */ S.jsx(hB, { value: l, children: /* @__PURE__ */ S.jsx(
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
EP.displayName = "Alert";
function gB(e) {
  return /* @__PURE__ */ S.jsx(kn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ S.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Jd = oe(
  function(t, n) {
    const r = ei("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Cn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ S.jsx(
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
        children: o || /* @__PURE__ */ S.jsx(gB, { width: "1em", height: "1em" })
      }
    );
  }
);
Jd.displayName = "CloseButton";
var yB = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Es = bB(yB);
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
      const a = xB(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = Ob(s, o);
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
        const a = JC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Ob(Es.getState(), o).position
  };
}
var F1 = 0;
function xB(e, t = {}) {
  var n, r;
  F1 += 1;
  const o = (n = t.id) != null ? n : F1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Es.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var SB = (e) => {
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
  return /* @__PURE__ */ S.jsxs(
    EP,
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
        /* @__PURE__ */ S.jsx(_P, { children: u }),
        /* @__PURE__ */ S.jsxs(X.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ S.jsx(TP, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ S.jsx(PP, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ S.jsx(
          Jd,
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
  const { render: t, toastComponent: n = SB } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ S.jsx(n, { ...o, ...e });
}
var [CB, AY] = Je({
  name: "ToastOptionsContext",
  strict: !1
}), kB = (e) => {
  const t = v.useSyncExternalStore(
    Es.subscribe,
    Es.getState,
    Es.getState
  ), {
    motionVariants: n,
    component: r = CP,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ S.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: G3(s),
        children: /* @__PURE__ */ S.jsx(ri, { initial: !1, children: l.map((u) => /* @__PURE__ */ S.jsx(
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
  return /* @__PURE__ */ S.jsx(gl, { ...o, children: a });
}, PB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ S.jsxs(W3, { theme: r, ...i, children: [
    /* @__PURE__ */ S.jsx(CB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ S.jsx(kB, { ...o })
  ] });
}, _B = PB(UC), TB = Object.defineProperty, EB = (e, t, n) => t in e ? TB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (EB(e, typeof t != "symbol" ? t + "" : t, n), n);
function L1(e) {
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
function j1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function z1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var cm = typeof window < "u" ? v.useLayoutEffect : v.useEffect, Kc = (e) => e, MB = class {
  constructor() {
    Be(this, "descendants", /* @__PURE__ */ new Map()), Be(this, "register", (e) => {
      if (e != null)
        return OB(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Be(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = L1(Array.from(this.descendants.keys()));
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
      const n = j1(e, this.count(), t);
      return this.item(n);
    }), Be(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = j1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Be(this, "prev", (e, t = !0) => {
      const n = z1(e, this.count() - 1, t);
      return this.item(n);
    }), Be(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = z1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Be(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = L1(n);
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
  return cm(() => () => e.current.destroy()), e.current;
}
var [AB, OP] = Je({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function DB(e) {
  const t = OP(), [n, r] = v.useState(-1), o = v.useRef(null);
  cm(() => () => {
    o.current && t.unregister(o.current);
  }, []), cm(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Kc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function MP() {
  return [
    Kc(AB),
    () => Kc(OP()),
    () => $B(),
    (o) => DB(o)
  ];
}
var [FB, ef] = Je({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [LB, bg] = Je({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  jB,
  DY,
  zB,
  NB
] = MP(), IP = oe(
  function(t, n) {
    const { getButtonProps: r } = bg(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...ef().button
    };
    return /* @__PURE__ */ S.jsx(
      X.button,
      {
        ...o,
        className: ie("chakra-accordion__button", t.className),
        __css: a
      }
    );
  }
);
IP.displayName = "AccordionButton";
function RP(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = ro(r), a = ro(o), [s, l] = v.useState(n), u = t !== void 0, c = u ? t : s, d = ro(
    (f) => {
      const y = typeof f == "function" ? f(c) : f;
      a(c, y) && (u || l(y), i(y));
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
  const [c, d] = RP({
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
      return p !== null && (y = Array.isArray(c) ? c.includes(p) : c === p), { isOpen: y, onChange: (x) => {
        if (p !== null)
          if (o && Array.isArray(c)) {
            const h = x ? c.concat(p) : c.filter((g) => g !== p);
            d(h);
          } else
            x ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [BB, xg] = Je({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function WB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = xg(), s = v.useRef(null), l = v.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  GB(e);
  const { register: f, index: p, descendants: y } = NB({
    disabled: t && !n
  }), { isOpen: m, onChange: x } = i(
    p === -1 ? null : p
  );
  KB({ isOpen: m, isDisabled: t });
  const h = () => {
    x == null || x(!0);
  }, g = () => {
    x == null || x(!1);
  }, b = v.useCallback(() => {
    x == null || x(!m), a(p);
  }, [p, a, m, x]), w = v.useCallback(
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
        "aria-expanded": !!m,
        "aria-controls": d,
        onClick: Le(M.onClick, b),
        onFocus: Le(M.onFocus, k),
        onKeyDown: Le(M.onKeyDown, w)
      };
    },
    [
      c,
      t,
      m,
      b,
      k,
      w,
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
        hidden: !m
      };
    },
    [c, m, d]
  );
  return {
    isOpen: m,
    isDisabled: t,
    isFocusable: n,
    onOpen: h,
    onClose: g,
    getButtonProps: P,
    getPanelProps: _,
    htmlProps: o
  };
}
function HB(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  yl({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function UB(e) {
  yl({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function GB(e) {
  yl({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function KB(e) {
  yl({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function $P(e) {
  const { isOpen: t, isDisabled: n } = bg(), { reduceMotion: r } = xg(), o = ie("chakra-accordion__icon", e.className), i = ef(), a = {
    opacity: n ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: r ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...i.icon
  };
  return /* @__PURE__ */ S.jsx(
    kn,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: o,
      __css: a,
      ...e,
      children: /* @__PURE__ */ S.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
$P.displayName = "AccordionIcon";
var AP = oe(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = WB(t), l = {
      ...ef().container,
      overflowAnchor: "none"
    }, u = v.useMemo(() => a, [a]);
    return /* @__PURE__ */ S.jsx(LB, { value: u, children: /* @__PURE__ */ S.jsx(
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
AP.displayName = "AccordionItem";
var Lo = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Ya = {
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
function dm(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Ya.slideRight;
    case "left":
      return Ya.slideLeft;
    case "bottom":
      return Ya.slideDown;
    case "top":
      return Ya.slideUp;
    default:
      return Ya.slideRight;
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
}, YB = (e) => e != null && parseInt(e.toString(), 10) > 0, N1 = {
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
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(N1.exit, o)
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
      transition: (i = n == null ? void 0 : n.enter) != null ? i : Dn.enter(N1.enter, o)
    };
  }
}, DP = v.forwardRef(
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
      const g = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(g);
    }, []), yl({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const y = parseFloat(i.toString()) > 0, m = {
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
    }, x = r ? n : !0, h = n || r ? "enter" : "exit";
    return /* @__PURE__ */ S.jsx(ri, { initial: !1, custom: m, children: x && /* @__PURE__ */ S.jsx(
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
        custom: m,
        variants: qB,
        initial: r ? "exit" : !1,
        animate: h,
        exit: "exit"
      }
    ) });
  }
);
DP.displayName = "Collapse";
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
}, FP = {
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
  return /* @__PURE__ */ S.jsx(ri, { custom: f, children: d && /* @__PURE__ */ S.jsx(
    ir.div,
    {
      ref: n,
      className: ie("chakra-fade", i),
      custom: f,
      ...FP,
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
}, LP = {
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
    } = t, f = r ? o && r : !0, p = o || r ? "enter" : "exit", y = { initialScale: a, reverse: i, transition: l, transitionEnd: u, delay: c };
    return /* @__PURE__ */ S.jsx(ri, { custom: y, children: f && /* @__PURE__ */ S.jsx(
      ir.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", s),
        ...LP,
        animate: p,
        custom: y,
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
}, ls = {
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
    } = t, p = r ? o && r : !0, y = o || r ? "enter" : "exit", m = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ S.jsx(ri, { custom: m, children: p && /* @__PURE__ */ S.jsx(
      ir.div,
      {
        ref: n,
        className: ie("chakra-offset-slide", a),
        custom: m,
        ...ls,
        animate: y,
        ...f
      }
    ) });
  }
);
t6.displayName = "SlideFade";
var V1 = {
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
    const { exit: i } = dm({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Dn.exit(V1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = dm({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Dn.enter(V1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, jP = v.forwardRef(function(t, n) {
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
  } = t, p = dm({ direction: r }), y = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), m = i ? a && i : !0, x = a || i ? "enter" : "exit", h = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ S.jsx(ri, { custom: h, children: m && /* @__PURE__ */ S.jsx(
    ir.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: ie("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: h,
      variants: n6,
      style: y,
      ...d
    }
  ) });
});
jP.displayName = "Slide";
var zP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = xg(), { getPanelProps: s, isOpen: l } = bg(), u = s(i, n), c = ie("chakra-accordion__panel", r), d = ef();
    a || delete u.hidden;
    const f = /* @__PURE__ */ S.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ S.jsx(DP, { in: l, ...o, children: f });
  }
);
zP.displayName = "AccordionPanel";
var NP = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = Ct("Accordion", r), a = Cn(r), { htmlProps: s, descendants: l, ...u } = VB(a), c = v.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ S.jsx(jB, { value: l, children: /* @__PURE__ */ S.jsx(BB, { value: c, children: /* @__PURE__ */ S.jsx(FB, { value: i, children: /* @__PURE__ */ S.jsx(
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
NP.displayName = "Accordion";
function VP(e) {
  return v.Children.toArray(e).filter(
    (t) => v.isValidElement(t)
  );
}
var [FY, r6] = Je({
  strict: !1,
  name: "ButtonGroupContext"
});
function o6(e) {
  const [t, n] = v.useState(!e);
  return { ref: v.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function fm(e) {
  const { children: t, className: n, ...r } = e, o = v.isValidElement(t) ? v.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = ie("chakra-button__icon", n);
  return /* @__PURE__ */ S.jsx(
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
fm.displayName = "ButtonIcon";
function pm(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ S.jsx(Zd, { color: "currentColor", width: "1em", height: "1em" }),
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
  return /* @__PURE__ */ S.jsx(X.div, { className: l, ...s, __css: c, children: o });
}
pm.displayName = "ButtonSpinner";
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
    spinnerPlacement: y = "start",
    className: m,
    as: x,
    ...h
  } = Cn(e), g = v.useMemo(() => {
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
  }, [r, n]), { ref: b, type: w } = o6(x), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ S.jsxs(
    X.button,
    {
      ref: RB(t, b),
      as: x,
      type: f ?? w,
      "data-active": dn(a),
      "data-loading": dn(i),
      __css: g,
      className: ie("chakra-button", m),
      ...h,
      disabled: o || i,
      children: [
        i && y === "start" && /* @__PURE__ */ S.jsx(
          pm,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ S.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ S.jsx(B1, { ...k }) }) : /* @__PURE__ */ S.jsx(B1, { ...k }),
        i && y === "end" && /* @__PURE__ */ S.jsx(
          pm,
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
function B1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    t && /* @__PURE__ */ S.jsx(fm, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ S.jsx(fm, { marginStart: o, children: n })
  ] });
}
var il = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = v.isValidElement(s) ? v.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ S.jsx(
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
il.displayName = "IconButton";
var [i6, a6] = Je({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [s6, BP] = Je({
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
  } = e, s = v.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = v.useState(!1), [y, m] = v.useState(!1), [x, h] = v.useState(!1), g = v.useCallback(
    (_ = {}, T = null) => ({
      id: d,
      ..._,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(T, (M) => {
        M && m(!0);
      })
    }),
    [d]
  ), b = v.useCallback(
    (_ = {}, T = null) => ({
      ..._,
      ref: T,
      "data-focus": dn(x),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i),
      id: _.id !== void 0 ? _.id : u,
      htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l
    }),
    [l, o, x, r, i, u]
  ), w = v.useCallback(
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
      "data-focus": dn(x),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i)
    }),
    [a, o, x, r, i]
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
    isFocused: !!x,
    onFocus: () => h(!0),
    onBlur: () => h(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: y,
    setHasHelpText: m,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: g,
    getErrorMessageProps: w,
    getRootProps: k,
    getLabelProps: b,
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
    return /* @__PURE__ */ S.jsx(s6, { value: s, children: /* @__PURE__ */ S.jsx(i6, { value: r, children: /* @__PURE__ */ S.jsx(
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
    const r = BP(), o = a6(), i = ie("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ S.jsx(
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
function WP(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = d6(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Xf(n),
    "aria-required": Xf(o),
    "aria-readonly": Xf(r)
  };
}
function d6(e) {
  var t, n, r;
  const o = BP(), {
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
    ...m
  } = e, x = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && x.push(o.feedbackId), o != null && o.hasHelpText && x.push(o.helpTextId), {
    ...m,
    "aria-describedby": x.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: Le(o == null ? void 0 : o.onFocus, p),
    onBlur: Le(o == null ? void 0 : o.onBlur, y)
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
var HP = () => typeof window < "u";
function p6() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var h6 = (e) => HP() && e.test(navigator.vendor), m6 = (e) => HP() && e.test(p6()), v6 = () => m6(/mac|iphone|ipad|ipod/i), g6 = () => v6() && h6(/apple/i);
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
function UP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var GP = { exports: {} }, b6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", x6 = b6, S6 = x6;
function KP() {
}
function YP() {
}
YP.resetWarningCache = KP;
var w6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== S6) {
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
    checkPropTypes: YP,
    resetWarningCache: KP
  };
  return n.PropTypes = n, n;
};
GP.exports = w6();
var C6 = GP.exports;
const Co = /* @__PURE__ */ cl(C6);
var hm = "data-focus-lock", qP = "data-focus-lock-disabled", k6 = "data-no-focus-lock", P6 = "data-autofocus-inside", _6 = "data-no-autofocus";
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
function XP(e, t) {
  return E6(t || null, function(n) {
    return e.forEach(function(r) {
      return T6(r, n);
    });
  });
}
var Ep = {
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
function QP(e, t) {
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
function ZP(e) {
  return e;
}
function JP(e, t) {
  t === void 0 && (t = ZP);
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
function wg(e, t) {
  return t === void 0 && (t = ZP), JP(e, t);
}
function e2(e) {
  e === void 0 && (e = {});
  var t = JP(null);
  return t.options = qn({ async: !0, ssr: !1 }, e), t;
}
var t2 = function(e) {
  var t = e.sideCar, n = QP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, qn({}, n));
};
t2.isSideCarExport = !0;
function M6(e, t) {
  return e.useMedium(t), t2;
}
var n2 = wg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), r2 = wg(), I6 = wg(), R6 = e2({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), $6 = [], Cg = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, o = v.useState(), i = o[0], a = o[1], s = v.useRef(), l = v.useRef(!1), u = v.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, m = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, h = t.className, g = t.whiteList, b = t.hasPositiveIndices, w = t.shards, k = w === void 0 ? $6 : w, P = t.as, _ = P === void 0 ? "div" : P, T = t.lockProps, M = T === void 0 ? {} : T, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = v.useState({}), K = W[0], $ = v.useCallback(function() {
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
      var Pe = typeof D == "function" ? D(me) : D;
      if (Pe) {
        var et = typeof Pe == "object" ? Pe : void 0;
        u.current = null, se ? Promise.resolve().then(function() {
          return me.focus(et);
        }) : me.focus(et);
      }
    }
  }, [D]), U = v.useCallback(function(se) {
    l.current && n2.useMedium(se);
  }, []), V = r2.useMedium, Y = v.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), z = q((r = {}, r[qP] = d && "disabled", r[hm] = x, r), M), te = f !== !0, le = te && f !== "tail", ae = XP([n, Y]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ v.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: Ep
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ v.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: Ep
    }) : null
  ], !d && /* @__PURE__ */ v.createElement(I, {
    id: K,
    sideCar: R6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: m,
    whiteList: g,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: j,
    focusOptions: G
  }), /* @__PURE__ */ v.createElement(_, q({
    ref: ae
  }, z, {
    className: h,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ v.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: Ep
  }));
});
Cg.propTypes = {};
Cg.defaultProps = {
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
const o2 = Cg;
function Yc(e, t) {
  return Yc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Yc(e, t);
}
function A6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Yc(e, t);
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
function i2(e) {
  var t = D6(e, "string");
  return Xo(t) === "symbol" ? t : String(t);
}
function ji(e, t, n) {
  return t = i2(t), t in e ? Object.defineProperty(e, t, {
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
}, qc = function(e) {
  return Array.isArray(e) ? e : [e];
}, a2 = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, L6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, s2 = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, l2 = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, j6 = function(e, t) {
  return !e || l2(e) || !L6(e) && t(s2(e));
}, u2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = j6(t, u2.bind(void 0, e));
  return e.set(t, r), r;
}, z6 = function(e, t) {
  return e && !l2(e) ? B6(e) ? t(s2(e)) : !1 : !0;
}, c2 = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = z6(t, c2.bind(void 0, e));
  return e.set(t, r), r;
}, d2 = function(e) {
  return e.dataset;
}, N6 = function(e) {
  return e.tagName === "BUTTON";
}, f2 = function(e) {
  return e.tagName === "INPUT";
}, p2 = function(e) {
  return f2(e) && e.type === "radio";
}, V6 = function(e) {
  return !((f2(e) || N6(e)) && (e.type === "hidden" || e.disabled));
}, B6 = function(e) {
  var t = e.getAttribute(_6);
  return ![!0, "true", ""].includes(t);
}, kg = function(e) {
  var t;
  return !!(e && (!((t = d2(e)) === null || t === void 0) && t.focusGuard));
}, Xc = function(e) {
  return !kg(e);
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
}, h2 = function(e, t, n) {
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
], Pg = U6.join(","), G6 = "".concat(Pg, ", [data-focus-guard]"), m2 = function(e, t) {
  return ar((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? G6 : Pg) ? [r] : [], m2(r));
  }, []);
}, K6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? tf([e.contentDocument.body], t) : [e];
}, tf = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = m2(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return K6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? ar(r.parentNode.querySelectorAll(Pg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, Y6 = function(e) {
  var t = e.querySelectorAll("[".concat(P6, "]"));
  return ar(t).map(function(n) {
    return tf([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, _g = function(e, t) {
  return ar(e).filter(function(n) {
    return u2(t, n);
  }).filter(function(n) {
    return V6(n);
  });
}, W1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ar(e).filter(function(n) {
    return c2(t, n);
  });
}, mm = function(e, t, n) {
  return h2(_g(tf(e, n), t), !0, n);
}, H1 = function(e, t) {
  return h2(_g(tf(e), t), !1);
}, q6 = function(e, t) {
  return _g(Y6(e), t);
}, Zi = function(e, t) {
  return e.shadowRoot ? Zi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ar(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Zi(o, t) : !1;
    }
    return Zi(n, t);
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
}, v2 = function(e) {
  return e.parentNode ? v2(e.parentNode) : e;
}, Tg = function(e) {
  var t = qc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(hm);
    return n.push.apply(n, o ? X6(ar(v2(r).querySelectorAll("[".concat(hm, '="').concat(o, '"]:not([').concat(qP, '="disabled"])')))) : [r]), n;
  }, []);
}, Q6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, al = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? al(t.shadowRoot) : t instanceof HTMLIFrameElement && Q6(function() {
      return t.contentWindow.document;
    }) ? al(t.contentWindow.document) : t;
  }
}, Z6 = function(e, t) {
  return e === t;
}, J6 = function(e, t) {
  return !!ar(e.querySelectorAll("iframe")).some(function(n) {
    return Z6(n, t);
  });
}, g2 = function(e, t) {
  return t === void 0 && (t = al(a2(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Tg(e).some(function(n) {
    return Zi(n, t) || J6(n, t);
  });
}, e9 = function(e) {
  e === void 0 && (e = document);
  var t = al(e);
  return t ? ar(e.querySelectorAll("[".concat(k6, "]"))).some(function(n) {
    return Zi(n, t);
  }) : !1;
}, t9 = function(e, t) {
  return t.filter(p2).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, Eg = function(e, t) {
  return p2(e) && e.name ? t9(e, t) : e;
}, n9 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(Eg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, U1 = function(e) {
  return e[0] && e.length > 1 ? Eg(e[0], e) : e[0];
}, G1 = function(e, t) {
  return e.length > 1 ? e.indexOf(Eg(e[t], e)) : t;
}, y2 = "NEW_FOCUS", r9 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = kg(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), y = n9(t), m = n !== void 0 ? y.indexOf(n) : -1, x = m - (r ? y.indexOf(r) : l), h = G1(e, 0), g = G1(e, o - 1);
    if (l === -1 || c === -1)
      return y2;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return g;
    if (l >= p && s && Math.abs(d) > 1)
      return h;
    if (d && Math.abs(x) > 1)
      return c;
    if (l <= f)
      return g;
    if (l > p)
      return h;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, o9 = function(e) {
  return function(t) {
    var n, r = (n = d2(t)) === null || n === void 0 ? void 0 : n.autofocus;
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
  }), o = W1(r.filter(o9(n)));
  return o && o.length ? U1(o) : U1(W1(t));
}, vm = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && vm(e.parentNode.host || e.parentNode, t), t;
}, Op = function(e, t) {
  for (var n = vm(e), r = vm(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, b2 = function(e, t, n) {
  var r = qc(e), o = qc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Op(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = Op(i, l);
      u && (!a || Zi(u, a) ? a = u : a = Op(u, a));
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
  var n = al(qc(e).length > 0 ? document : a2(e).ownerDocument), r = Tg(e).filter(Xc), o = b2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = H1(r, i), s = mm(r, i).filter(function(p) {
    var y = p.node;
    return Xc(y);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = H1([o], i).map(function(p) {
      var y = p.node;
      return y;
    }), u = s9(l, s), c = u.map(function(p) {
      var y = p.node;
      return y;
    }), d = r9(c, l, n, t);
    if (d === y2) {
      var f = i9(a, c, a9(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, u9 = function(e) {
  var t = Tg(e).filter(Xc), n = b2(e, e, t), r = /* @__PURE__ */ new Map(), o = mm([n], r, !0), i = mm(t, r).filter(function(a) {
    var s = a.node;
    return Xc(s);
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
      guard: kg(s)
    };
  });
}, c9 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Mp = 0, Ip = !1, x2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = l9(e, t);
  if (!Ip && r) {
    if (Mp > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Ip = !0, setTimeout(function() {
        Ip = !1;
      }, 1);
      return;
    }
    Mp++, c9(r.node, n.focusOptions), Mp--;
  }
};
function Og(e) {
  setTimeout(e, 1);
}
var d9 = function() {
  return document && document.activeElement === document.body;
}, f9 = function() {
  return d9() || e9();
}, Ji = null, zi = null, ea = null, sl = !1, p9 = function() {
  return !0;
}, h9 = function(t) {
  return (Ji.whiteList || p9)(t);
}, m9 = function(t, n) {
  ea = {
    observerNode: t,
    portaledElement: n
  };
}, v9 = function(t) {
  return ea && ea.portaledElement === t;
};
function K1(e, t, n, r) {
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
  return t ? !!sl : sl === "meanwhile";
}, b9 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, x9 = function(t, n) {
  return n.some(function(r) {
    return b9(t, r, r);
  });
}, Qc = function() {
  var t = !1;
  if (Ji) {
    var n = Ji, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || ea && ea.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(g9).filter(Boolean));
      if ((!c || h9(c)) && (o || y9(s) || !f9() || !zi && i) && (u && !// active element is "inside" working area
      (g2(d) || // check for shadow-dom contained elements
      c && x9(c, d) || v9(c)) && (document && !zi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = x2(d, zi, {
        focusOptions: l
      }), ea = {})), sl = !1, zi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = u9(d), y = p.map(function(m) {
          var x = m.node;
          return x;
        }).indexOf(f);
        y > -1 && (p.filter(function(m) {
          var x = m.guard, h = m.node;
          return x && h.dataset.focusAutoGuard;
        }).forEach(function(m) {
          var x = m.node;
          return x.removeAttribute("tabIndex");
        }), K1(y, p.length, 1, p), K1(y, -1, -1, p));
      }
    }
  }
  return t;
}, S2 = function(t) {
  Qc() && t && (t.stopPropagation(), t.preventDefault());
}, Mg = function() {
  return Og(Qc);
}, S9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || m9(r, n);
}, w9 = function() {
  return null;
}, w2 = function() {
  sl = "just", Og(function() {
    sl = "meanwhile";
  });
}, C9 = function() {
  document.addEventListener("focusin", S2), document.addEventListener("focusout", Mg), window.addEventListener("blur", w2);
}, k9 = function() {
  document.removeEventListener("focusin", S2), document.removeEventListener("focusout", Mg), window.removeEventListener("blur", w2);
};
function P9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function _9(e) {
  var t = e.slice(-1)[0];
  t && !Ji && C9();
  var n = Ji, r = n && t && t.id === n.id;
  Ji = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (zi = null, (!r || n.observed !== t.observed) && t.onActivation(), Qc(), Og(Qc)) : (k9(), zi = null);
}
n2.assignSyncMedium(S9);
r2.assignMedium(Mg);
I6.assignMedium(function(e) {
  return e({
    moveFocusInside: x2,
    focusInside: g2
  });
});
const T9 = F6(P9, _9)(w9);
var C2 = /* @__PURE__ */ v.forwardRef(function(t, n) {
  return /* @__PURE__ */ v.createElement(o2, q({
    sideCar: T9,
    ref: n
  }, t));
}), k2 = o2.propTypes || {};
k2.sideCar;
UP(k2, ["sideCar"]);
C2.propTypes = {};
const Y1 = C2;
function P2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function _2(e) {
  var t;
  if (!P2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function E9(e) {
  var t, n;
  return (n = (t = T2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function T2(e) {
  return P2(e) ? e.ownerDocument : document;
}
function O9(e) {
  return T2(e).activeElement;
}
var E2 = (e) => e.hasAttribute("tabindex"), M9 = (e) => E2(e) && e.tabIndex === -1;
function I9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function O2(e) {
  return e.parentElement && O2(e.parentElement) ? !0 : e.hidden;
}
function R9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function M2(e) {
  if (!_2(e) || O2(e) || I9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : R9(e) ? !0 : E2(e);
}
function $9(e) {
  return e ? _2(e) && M2(e) && !M9(e) : !1;
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
function I2(e) {
  const t = Array.from(
    e.querySelectorAll(D9)
  );
  return t.unshift(e), t.filter((n) => M2(n) && F9(n));
}
var q1, L9 = (q1 = Y1.default) != null ? q1 : Y1, R2 = (e) => {
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
    t != null && t.current ? t.current.focus() : r != null && r.current && I2(r.current).length === 0 && requestAnimationFrame(() => {
      var y;
      (y = r.current) == null || y.focus();
    });
  }, [t, r]), d = v.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ S.jsx(
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
R2.displayName = "FocusLock";
var j9 = d3 ? v.useLayoutEffect : v.useEffect;
function X1(e, t = []) {
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
  } = e, i = X1(n), a = X1(t), [s, l] = v.useState(e.defaultIsOpen || !1), [u, c] = N9(r, s), d = z9(o, "disclosure"), f = v.useCallback(() => {
    u || l(!1), a == null || a();
  }, [u, a]), p = v.useCallback(() => {
    u || l(!0), i == null || i();
  }, [u, i]), y = v.useCallback(() => {
    (c ? f : p)();
  }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: y,
    isControlled: u,
    getButtonProps: (m = {}) => ({
      ...m,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: v3(m.onClick, y)
    }),
    getDisclosureProps: (m = {}) => ({
      ...m,
      hidden: !c,
      id: d
    })
  };
}
var nf = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = Ct("Input", o), a = Cn(o), s = WP(a), l = ie("chakra-input", t.className);
  return /* @__PURE__ */ S.jsx(
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
nf.displayName = "Input";
nf.id = "Input";
var $2 = Object.freeze([
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
function W9(e, t = $2) {
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
  return /* @__PURE__ */ S.jsx(
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
var A2 = (e) => /* @__PURE__ */ S.jsx(
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
A2.displayName = "StackItem";
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
var D2 = oe((e, t) => {
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
  } = e, p = n ? "row" : r ?? "column", y = v.useMemo(
    () => H9({ spacing: a, direction: p }),
    [a, p]
  ), m = !!u, x = !d && !m, h = v.useMemo(() => {
    const b = VP(l);
    return x ? b : b.map((w, k) => {
      const P = typeof w.key < "u" ? w.key : k, _ = k + 1 === b.length, M = d ? /* @__PURE__ */ S.jsx(A2, { children: w }, P) : w;
      if (!m)
        return M;
      const I = v.cloneElement(
        u,
        {
          __css: y
        }
      ), D = _ ? null : I;
      return /* @__PURE__ */ S.jsxs(v.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    y,
    m,
    x,
    d,
    l
  ]), g = ie("chakra-stack", c);
  return /* @__PURE__ */ S.jsx(
    X.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: m ? void 0 : a,
      className: g,
      ...f,
      children: h
    }
  );
});
D2.displayName = "Stack";
var _t = oe((e, t) => /* @__PURE__ */ S.jsx(D2, { align: "center", ...e, direction: "row", ref: t }));
_t.displayName = "HStack";
var $e = X("div");
$e.displayName = "Box";
var F2 = oe(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ S.jsx(
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
F2.displayName = "Square";
var U9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ S.jsx(F2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
U9.displayName = "Circle";
var L2 = oe(function(t, n) {
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
  } = Cn(t), m = {
    vertical: {
      borderLeftWidth: r || a || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || i || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ S.jsx(
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
        ...m[f],
        ...p
      },
      className: ie("chakra-divider", d)
    }
  );
});
L2.displayName = "Divider";
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
function K9(e, t, n = $2) {
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
function Rp(e) {
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
    ...y
  } = e, [m, x] = v.useState(!0), [h, g] = v.useState(!1), b = J9(), w = ($) => {
    $ && $.tagName !== "BUTTON" && x(!1);
  }, k = m ? d : d || 0, P = n && !r, _ = v.useCallback(
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
      h && Rp($) && ($.preventDefault(), $.stopPropagation(), g(!1), b.remove(document, "keyup", T, !1));
    },
    [h, b]
  ), M = v.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !Rp($.nativeEvent) || m)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), g(!0)), A && ($.preventDefault(), $.currentTarget.click()), b.add(document, "keyup", T, !1);
    },
    [
      n,
      m,
      u,
      o,
      i,
      b,
      T
    ]
  ), I = v.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !Rp($.nativeEvent) || m)
        return;
      i && $.key === " " && ($.preventDefault(), g(!1), $.currentTarget.click());
    },
    [i, m, n, c]
  ), D = v.useCallback(
    ($) => {
      $.button === 0 && (g(!1), b.remove(document, "mouseup", D, !1));
    },
    [b]
  ), G = v.useCallback(
    ($) => {
      if ($.button !== 0)
        return;
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      m || g(!0), $.currentTarget.focus({ preventScroll: !0 }), b.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, m, a, b, D]
  ), H = v.useCallback(
    ($) => {
      $.button === 0 && (m || g(!1), s == null || s($));
    },
    [s, m]
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
      h && ($.preventDefault(), g(!1)), p == null || p($);
    },
    [h, p]
  ), K = at(t, w);
  return m ? {
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
    "data-active": dn(h),
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
function j2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  pa(() => {
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
  ca(() => {
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
        const d = I2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  pa(() => {
    c();
  }, [c]), Sg(a, "transitionend", c);
}
function o8(e) {
  return "current" in e;
}
var ci = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), St = {
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
}, s8 = (e) => a8[e], Q1 = {
  scroll: !0,
  resize: !0
};
function l8(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...Q1, ...e }
  } : t = {
    enabled: e,
    options: Q1
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
    Z1(e);
  },
  effect: ({ state: e }) => () => {
    Z1(e);
  }
}, Z1 = (e) => {
  e.elements.popper.style.setProperty(
    St.transformOrigin.var,
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
      width: St.arrowSize.varRef,
      height: St.arrowSize.varRef,
      zIndex: -1
    });
    const r = {
      [St.arrowSizeHalf.var]: `calc(${St.arrowSize.varRef} / 2 - 1px)`,
      [St.arrowOffset.var]: `calc(${St.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in r)
      e.elements.arrow.style.setProperty(o, r[o]);
  }
}, p8 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: St.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: St.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: St.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: St.arrowOffset.varRef };
}, h8 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    J1(e);
  },
  effect: ({ state: e }) => () => {
    J1(e);
  }
}, J1 = (e) => {
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
    background: St.arrowBg.varRef,
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
var zt = "top", xn = "bottom", Sn = "right", Nt = "left", Ig = "auto", Pl = [zt, xn, Sn, Nt], va = "start", ll = "end", y8 = "clippingParents", z2 = "viewport", qa = "popper", b8 = "reference", ex = /* @__PURE__ */ Pl.reduce(function(e, t) {
  return e.concat([t + "-" + va, t + "-" + ll]);
}, []), N2 = /* @__PURE__ */ [].concat(Pl, [Ig]).reduce(function(e, t) {
  return e.concat([t, t + "-" + va, t + "-" + ll]);
}, []), x8 = "beforeRead", S8 = "read", w8 = "afterRead", C8 = "beforeMain", k8 = "main", P8 = "afterMain", _8 = "beforeWrite", T8 = "write", E8 = "afterWrite", O8 = [x8, S8, w8, C8, k8, P8, _8, T8, E8];
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
function Rg(e) {
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
var Ho = Math.max, Zc = Math.min, ga = Math.round;
function gm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function V2() {
  return !/^((?!chrome|android).)*safari/i.test(gm());
}
function ya(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && gn(e) && (o = e.offsetWidth > 0 && ga(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ga(r.height) / e.offsetHeight || 1);
  var a = Qo(e) ? en(e) : window, s = a.visualViewport, l = !V2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
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
function $g(e) {
  var t = ya(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function B2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Rg(n)) {
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
function rf(e) {
  return or(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Rg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    go(e)
  );
}
function tx(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Er(e).position === "fixed" ? null : e.offsetParent;
}
function A8(e) {
  var t = /firefox/i.test(gm()), n = /Trident/i.test(gm());
  if (n && gn(e)) {
    var r = Er(e);
    if (r.position === "fixed")
      return null;
  }
  var o = rf(e);
  for (Rg(o) && (o = o.host); gn(o) && ["html", "body"].indexOf(or(o)) < 0; ) {
    var i = Er(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function _l(e) {
  for (var t = en(e), n = tx(e); n && $8(n) && Er(n).position === "static"; )
    n = tx(n);
  return n && (or(n) === "html" || or(n) === "body" && Er(n).position === "static") ? t : n || A8(e) || t;
}
function Ag(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Os(e, t, n) {
  return Ho(e, Zc(t, n));
}
function D8(e, t, n) {
  var r = Os(e, t, n);
  return r > n ? n : r;
}
function W2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function H2(e) {
  return Object.assign({}, W2(), e);
}
function U2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var F8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, H2(typeof t != "number" ? t : U2(t, Pl));
};
function L8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = rr(n.placement), l = Ag(s), u = [Nt, Sn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = F8(o.padding, n), f = $g(i), p = l === "y" ? zt : Nt, y = l === "y" ? xn : Sn, m = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], x = a[l] - n.rects.reference[l], h = _l(i), g = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, b = m / 2 - x / 2, w = d[p], k = g - f[c] - d[y], P = g / 2 - f[c] / 2 + b, _ = Os(w, P, k), T = l;
    n.modifiersData[r] = (t = {}, t[T] = _, t.centerOffset = _ - P, t);
  }
}
function j8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || B2(t.elements.popper, o) && (t.elements.arrow = o));
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
function ba(e) {
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
    x: ga(n * o) / o || 0,
    y: ga(r * o) / o || 0
  };
}
function nx(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, y = a.y, m = y === void 0 ? 0 : y, x = typeof c == "function" ? c({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = x.x, m = x.y;
  var h = a.hasOwnProperty("x"), g = a.hasOwnProperty("y"), b = Nt, w = zt, k = window;
  if (u) {
    var P = _l(n), _ = "clientHeight", T = "clientWidth";
    if (P === en(n) && (P = go(n), Er(P).position !== "static" && s === "absolute" && (_ = "scrollHeight", T = "scrollWidth")), P = P, o === zt || (o === Nt || o === Sn) && i === ll) {
      w = xn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      m -= M - r.height, m *= l ? 1 : -1;
    }
    if (o === Nt || (o === zt || o === xn) && i === ll) {
      b = Sn;
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
    y: m
  }, en(n)) : {
    x: p,
    y: m
  };
  if (p = G.x, m = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[w] = g ? "0" : "", H[b] = h ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[w] = g ? m + "px" : "", t[b] = h ? p + "px" : "", t.transform = "", t));
}
function B8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: rr(t.placement),
    variation: ba(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, nx(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, nx(Object.assign({}, u, {
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
var gu = {
  passive: !0
};
function H8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, gu);
  }), s && l.addEventListener("resize", n.update, gu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, gu);
    }), s && l.removeEventListener("resize", n.update, gu);
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
function tc(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return G8[t];
  });
}
var K8 = {
  start: "end",
  end: "start"
};
function rx(e) {
  return e.replace(/start|end/g, function(t) {
    return K8[t];
  });
}
function Dg(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Fg(e) {
  return ya(go(e)).left + Dg(e).scrollLeft;
}
function Y8(e, t) {
  var n = en(e), r = go(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = V2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Fg(e),
    y: l
  };
}
function q8(e) {
  var t, n = go(e), r = Dg(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ho(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Ho(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + Fg(e), l = -r.scrollTop;
  return Er(o || n).direction === "rtl" && (s += Ho(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Lg(e) {
  var t = Er(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function G2(e) {
  return ["html", "body", "#document"].indexOf(or(e)) >= 0 ? e.ownerDocument.body : gn(e) && Lg(e) ? e : G2(rf(e));
}
function Ms(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = G2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), a = o ? [i].concat(i.visualViewport || [], Lg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ms(rf(a)))
  );
}
function ym(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function X8(e, t) {
  var n = ya(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ox(e, t, n) {
  return t === z2 ? ym(Y8(e, n)) : Qo(t) ? X8(t, n) : ym(q8(go(e)));
}
function Q8(e) {
  var t = Ms(rf(e)), n = ["absolute", "fixed"].indexOf(Er(e).position) >= 0, r = n && gn(e) ? _l(e) : e;
  return Qo(r) ? t.filter(function(o) {
    return Qo(o) && B2(o, r) && or(o) !== "body";
  }) : [];
}
function Z8(e, t, n, r) {
  var o = t === "clippingParents" ? Q8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = ox(e, u, r);
    return l.top = Ho(c.top, l.top), l.right = Zc(c.right, l.right), l.bottom = Zc(c.bottom, l.bottom), l.left = Ho(c.left, l.left), l;
  }, ox(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function K2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? rr(r) : null, i = r ? ba(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
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
    case Sn:
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
  var u = o ? Ag(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case va:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ll:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function ul(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? y8 : s, u = n.rootBoundary, c = u === void 0 ? z2 : u, d = n.elementContext, f = d === void 0 ? qa : d, p = n.altBoundary, y = p === void 0 ? !1 : p, m = n.padding, x = m === void 0 ? 0 : m, h = H2(typeof x != "number" ? x : U2(x, Pl)), g = f === qa ? b8 : qa, b = e.rects.popper, w = e.elements[y ? g : f], k = Z8(Qo(w) ? w : w.contextElement || go(e.elements.popper), l, c, a), P = ya(e.elements.reference), _ = K2({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), T = ym(Object.assign({}, b, _)), M = f === qa ? T : P, I = {
    top: k.top - M.top + h.top,
    bottom: M.bottom - k.bottom + h.bottom,
    left: k.left - M.left + h.left,
    right: M.right - k.right + h.right
  }, D = e.modifiersData.offset;
  if (f === qa && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [Sn, xn].indexOf(H) >= 0 ? 1 : -1, W = [zt, xn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function J8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? N2 : l, c = ba(r), d = c ? s ? ex : ex.filter(function(y) {
    return ba(y) === c;
  }) : Pl, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(y, m) {
    return y[m] = ul(e, {
      placement: m,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[rr(m)], y;
  }, {});
  return Object.keys(p).sort(function(y, m) {
    return p[y] - p[m];
  });
}
function e7(e) {
  if (rr(e) === Ig)
    return [];
  var t = tc(e);
  return [rx(e), t, rx(t)];
}
function t7(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? !0 : p, m = n.allowedAutoPlacements, x = t.options.placement, h = rr(x), g = h === x, b = l || (g || !y ? [tc(x)] : e7(x)), w = [x].concat(b).reduce(function(te, le) {
      return te.concat(rr(le) === Ig ? J8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: m
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, _ = /* @__PURE__ */ new Map(), T = !0, M = w[0], I = 0; I < w.length; I++) {
      var D = w[I], G = rr(D), H = ba(D) === va, L = [zt, xn].indexOf(G) >= 0, W = L ? "width" : "height", K = ul(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? Sn : Nt : H ? xn : zt;
      k[W] > P[W] && ($ = tc($));
      var A = tc($), j = [];
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
            return me.slice(0, le).every(function(Pe) {
              return Pe;
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
function ix(e, t, n) {
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
function ax(e) {
  return [zt, Sn, xn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function r7(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = ul(t, {
    elementContext: "reference"
  }), s = ul(t, {
    altBoundary: !0
  }), l = ix(a, r), u = ix(s, o, i), c = ax(l), d = ax(u);
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
  return a = a || 0, s = (s || 0) * o, [Nt, Sn].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function a7(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = N2.reduce(function(c, d) {
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
  t.modifiersData[n] = K2({
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, y = n.tetherOffset, m = y === void 0 ? 0 : y, x = ul(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), h = rr(t.placement), g = ba(t.placement), b = !g, w = Ag(h), k = c7(w), P = t.modifiersData.popperOffsets, _ = t.rects.reference, T = t.rects.popper, M = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, I = typeof M == "number" ? {
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
      var H, L = w === "y" ? zt : Nt, W = w === "y" ? xn : Sn, K = w === "y" ? "height" : "width", $ = P[w], A = $ + x[L], j = $ - x[W], U = p ? -T[K] / 2 : 0, V = g === va ? _[K] : T[K], Y = g === va ? -T[K] : -_[K], z = t.elements.arrow, te = p && z ? $g(z) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : W2(), ae = le[L], se = le[W], me = Os(0, _[K], te[K]), Pe = b ? _[K] / 2 - U - me - ae - I.mainAxis : V - me - ae - I.mainAxis, et = b ? -_[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && _l(t.elements.arrow), on = qe ? w === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, Pn = (H = D == null ? void 0 : D[w]) != null ? H : 0, Ir = $ + Pe - Pn - on, fe = $ + et - Pn, mt = Os(p ? Zc(A, Ir) : A, $, p ? Ho(j, fe) : j);
      P[w] = mt, G[w] = mt - $;
    }
    if (s) {
      var Ge, Ut = w === "x" ? zt : Nt, Rr = w === "x" ? xn : Sn, vt = P[k], Nn = k === "y" ? "height" : "width", $r = vt + x[Ut], an = vt - x[Rr], ii = [zt, Nt].indexOf(h) !== -1, Oa = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Al = ii ? $r : vt - _[Nn] - T[Nn] - Oa + I.altAxis, Dl = ii ? vt + _[Nn] + T[Nn] - Oa - I.altAxis : an, yo = p && ii ? D8(Al, vt, Dl) : Os(p ? Al : $r, vt, p ? Dl : an);
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
  return e === en(e) || !gn(e) ? Dg(e) : p7(e);
}
function m7(e) {
  var t = e.getBoundingClientRect(), n = ga(t.width) / e.offsetWidth || 1, r = ga(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function v7(e, t, n) {
  n === void 0 && (n = !1);
  var r = gn(t), o = gn(t) && m7(t), i = go(t), a = ya(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((or(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Lg(i)) && (s = h7(t)), gn(t) ? (l = ya(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Fg(i))), {
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
function x7(e) {
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
var sx = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function lx() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function S7(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? sx : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, sx, i),
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
        var g = typeof h == "function" ? h(c.options) : h;
        m(), c.options = Object.assign({}, i, c.options, g), c.scrollParents = {
          reference: Qo(s) ? Ms(s) : s.contextElement ? Ms(s.contextElement) : [],
          popper: Ms(l)
        };
        var b = y7(x7([].concat(r, c.options.modifiers)));
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
          var h = c.elements, g = h.reference, b = h.popper;
          if (lx(g, b)) {
            c.rects = {
              reference: v7(g, _l(b), c.options.strategy === "fixed"),
              popper: $g(b)
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
      update: b7(function() {
        return new Promise(function(x) {
          p.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!lx(s, l))
      return p;
    p.setOptions(u).then(function(x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function y() {
      c.orderedModifiers.forEach(function(x) {
        var h = x.name, g = x.options, b = g === void 0 ? {} : g, w = x.effect;
        if (typeof w == "function") {
          var k = w({
            state: c,
            name: h,
            instance: p,
            options: b
          }), P = function() {
          };
          d.push(k || P);
        }
      });
    }
    function m() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return p;
  };
}
var w7 = [U8, u7, W8, R8, s7, n7, f7, z8, o7], C7 = /* @__PURE__ */ S7({
  defaultModifiers: w7
});
function Y2(e = {}) {
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
  } = e, y = v.useRef(null), m = v.useRef(null), x = v.useRef(null), h = g8(r, p), g = v.useRef(() => {
  }), b = v.useCallback(() => {
    var I;
    !t || !y.current || !m.current || ((I = g.current) == null || I.call(g), x.current = C7(y.current, m.current, {
      placement: h,
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
    }), x.current.forceUpdate(), g.current = x.current.destroy);
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
  v.useEffect(() => () => {
    var I;
    !y.current && !m.current && ((I = x.current) == null || I.destroy(), x.current = null);
  }, []);
  const w = v.useCallback(
    (I) => {
      y.current = I, b();
    },
    [b]
  ), k = v.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(w, D)
    }),
    [w]
  ), P = v.useCallback(
    (I) => {
      m.current = I, b();
    },
    [b]
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
      (I = x.current) == null || I.update();
    },
    forceUpdate() {
      var I;
      (I = x.current) == null || I.forceUpdate();
    },
    transformOrigin: St.transformOrigin.varRef,
    referenceRef: w,
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
function q2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = ro(n), a = ro(t), [s, l] = v.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = v.useId(), f = o ?? `disclosure-${d}`, p = v.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), y = v.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), m = v.useCallback(() => {
    u ? p() : y();
  }, [u, y, p]);
  function x(g = {}) {
    return {
      ...g,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var w;
        (w = g.onClick) == null || w.call(g, b), m();
      }
    };
  }
  function h(g = {}) {
    return {
      ...g,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: y,
    onClose: p,
    onToggle: m,
    isControlled: c,
    getButtonProps: x,
    getDisclosureProps: h
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
      $p(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && $p(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && $p(d, t) && (a.isPointerDown = !1, o(d));
    }, c = X2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function $p(e, t) {
  var n;
  const r = e.target;
  return r && !X2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function X2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Q2(e) {
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
function Z2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  _7,
  T7,
  E7,
  O7
] = MP(), [M7, Tl] = Je({
  strict: !1,
  name: "MenuContext"
});
function I7(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function J2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function ux(e) {
  return J2(e).activeElement === e;
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
    computePositionOnMount: y = !1,
    ...m
  } = e, x = v.useRef(null), h = v.useRef(null), g = E7(), b = v.useCallback(() => {
    requestAnimationFrame(() => {
      var z;
      (z = x.current) == null || z.focus({ preventScroll: !1 });
    });
  }, []), w = v.useCallback(() => {
    const z = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = g.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(z);
  }, [g, o]), k = v.useCallback(() => {
    const z = setTimeout(() => {
      const te = g.lastEnabled();
      te && H(te.index);
    });
    A.current.add(z);
  }, [g]), P = v.useCallback(() => {
    c == null || c(), i ? w() : b();
  }, [i, w, b, c]), { isOpen: _, onOpen: T, onClose: M, onToggle: I } = q2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  P7({
    enabled: _ && r,
    ref: x,
    handler: (z) => {
      var te;
      (te = h.current) != null && te.contains(z.target) || M();
    }
  });
  const D = Y2({
    ...m,
    enabled: _ || y,
    placement: d,
    direction: p
  }), [G, H] = v.useState(-1);
  pa(() => {
    _ || H(-1);
  }, [_]), j2(x, {
    focusRef: h,
    visible: _,
    shouldFocus: !0
  });
  const L = Q2({ isOpen: _, ref: x }), [W, K] = I7(t, "menu-button", "menu-list"), $ = v.useCallback(() => {
    T(), b();
  }, [T, b]), A = v.useRef(/* @__PURE__ */ new Set([]));
  v.useEffect(() => {
    const z = A.current;
    return () => {
      z.forEach((te) => clearTimeout(te)), z.clear();
    };
  }, []);
  const j = v.useCallback(() => {
    T(), w();
  }, [w, T]), U = v.useCallback(() => {
    T(), k();
  }, [T, k]), V = v.useCallback(() => {
    var z, te;
    const le = J2(x.current), ae = (z = x.current) == null ? void 0 : z.contains(le.activeElement);
    if (!(_ && !ae))
      return;
    const me = (te = g.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [_, G, g]), Y = v.useRef(null);
  return {
    openAndFocusMenu: $,
    openAndFocusFirstItem: j,
    openAndFocusLastItem: U,
    onTransitionEnd: V,
    unstable__animationState: L,
    descendants: g,
    popper: D,
    buttonId: W,
    menuId: K,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: _,
    onToggle: I,
    onOpen: T,
    onClose: M,
    menuRef: x,
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
function $7(e = {}, t = null) {
  const n = Tl(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = v.useCallback(
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
function bm(e) {
  var t;
  return j7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function A7(e = {}, t = null) {
  const n = Tl();
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
    preventDefault: (h) => h.key !== " " && bm(h.target)
  }), y = v.useCallback(
    (h) => {
      if (!h.currentTarget.contains(h.target))
        return;
      const g = h.key, w = {
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
      }[g];
      if (w) {
        h.preventDefault(), w(h);
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
      bm(h.target) && k(h);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), m = v.useRef(!1);
  a && (m.current = !0);
  const x = Z2({
    wasSelected: m.current,
    enabled: u,
    mode: c,
    isSelected: d.present
  });
  return {
    ...e,
    ref: at(i, t),
    children: x ? e.children : null,
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
function D7(e = {}) {
  const { popper: t, isOpen: n } = Tl();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function e_(e = {}, t = null) {
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
  } = e, f = Tl(), {
    setFocusedIndex: p,
    focusedIndex: y,
    closeOnSelect: m,
    onClose: x,
    menuRef: h,
    isOpen: g,
    menuId: b,
    rafId: w
  } = f, k = v.useRef(null), P = `${b}-menuitem-${v.useId()}`, { index: _, register: T } = O7({
    disabled: s && !l
  }), M = v.useCallback(
    ($) => {
      n == null || n($), !s && p(_);
    },
    [p, _, s, n]
  ), I = v.useCallback(
    ($) => {
      r == null || r($), k.current && !ux(k.current) && M($);
    },
    [M, r]
  ), D = v.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = v.useCallback(
    ($) => {
      i == null || i($), bm($.currentTarget) && (u ?? m) && x();
    },
    [x, i, m, u]
  ), H = v.useCallback(
    ($) => {
      a == null || a($), p(_);
    },
    [p, a, _]
  ), L = _ === y, W = s && !l;
  pa(() => {
    if (g)
      return L && !W && k.current ? (w.current && cancelAnimationFrame(w.current), w.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), w.current = null;
      })) : h.current && !ux(h.current) && h.current.focus({ preventScroll: !0 }), () => {
        w.current && cancelAnimationFrame(w.current);
      };
  }, [L, W, h, g]);
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
    ...e_(o, t),
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
  } = e, l = n === "radio" ? "" : [], [u, c] = RP({
    defaultValue: o ?? l,
    value: r,
    onChange: i
  }), d = v.useCallback(
    (y) => {
      if (n === "radio" && typeof u == "string" && c(y), n === "checkbox" && Array.isArray(u)) {
        const m = u.includes(y) ? u.filter((x) => x !== y) : u.concat(y);
        c(m);
      }
    },
    [u, c, n]
  ), p = VP(t).map((y) => {
    if (y.type.id !== "MenuItemOption")
      return y;
    const m = (h) => {
      var g, b;
      d(y.props.value), (b = (g = y.props).onClick) == null || b.call(g, h);
    }, x = n === "radio" ? y.props.value === u : u.includes(y.props.value);
    return v.cloneElement(y, {
      type: n,
      onClick: m,
      isChecked: x
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
var [N7, Ta] = Je({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), El = (e) => {
  const { children: t } = e, n = Ct("Menu", e), r = Cn(e), { direction: o } = mo(), { descendants: i, ...a } = R7({ ...r, direction: o }), s = v.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ S.jsx(_7, { value: i, children: /* @__PURE__ */ S.jsx(M7, { value: s, children: /* @__PURE__ */ S.jsx(N7, { value: n, children: Xn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
El.displayName = "Menu";
var t_ = oe(
  (e, t) => {
    const n = Ta();
    return /* @__PURE__ */ S.jsx(
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
t_.displayName = "MenuCommand";
var n_ = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = Ta(), i = r.as || n ? n ?? void 0 : "button", a = v.useMemo(
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
    return /* @__PURE__ */ S.jsx(X.button, { ref: t, type: i, ...r, __css: a });
  }
), of = (e) => {
  const { className: t, children: n, ...r } = e, o = Ta(), i = v.Children.only(n), a = v.isValidElement(i) ? v.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ie("chakra-menu__icon", i.props.className)
  }) : null, s = ie("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ S.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
of.displayName = "MenuIcon";
var Ni = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = e_(s, t), c = n || o ? /* @__PURE__ */ S.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ S.jsxs(
    n_,
    {
      ...l,
      className: ie("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ S.jsx(of, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ S.jsx(t_, { marginStart: i, children: o })
      ]
    }
  );
});
Ni.displayName = "MenuItem";
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
}, B7 = X(ir.div), af = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = Tl(), d = A7(s, n), f = D7(i), p = Ta();
  return /* @__PURE__ */ S.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ S.jsx(
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
          onAnimationComplete: kC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
af.displayName = "MenuList";
var r_ = oe((e, t) => {
  const { title: n, children: r, className: o, ...i } = e, a = ie("chakra-menu__group__title", o), s = Ta();
  return /* @__PURE__ */ S.jsxs("div", { ref: t, className: "chakra-menu__group", role: "group", children: [
    n && /* @__PURE__ */ S.jsx(X.p, { className: a, ...i, __css: s.groupTitle, children: n }),
    r
  ] });
});
r_.displayName = "MenuGroup";
var o_ = (e) => {
  const { className: t, title: n, ...r } = e, o = L7(r);
  return /* @__PURE__ */ S.jsx(
    r_,
    {
      title: n,
      className: ie("chakra-menu__option-group", t),
      ...o
    }
  );
};
o_.displayName = "MenuOptionGroup";
var W7 = oe((e, t) => {
  const n = Ta();
  return /* @__PURE__ */ S.jsx(
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
    return /* @__PURE__ */ S.jsx(
      a,
      {
        ...i,
        className: ie("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ S.jsx(
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
var H7 = (e) => /* @__PURE__ */ S.jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ S.jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) }), zg = oe(
  (e, t) => {
    const { icon: n, iconSpacing: r = "0.75rem", ...o } = e, i = F7(o, t);
    return /* @__PURE__ */ S.jsxs(
      n_,
      {
        ...i,
        className: ie("chakra-menu__menuitem-option", o.className),
        children: [
          n !== null && /* @__PURE__ */ S.jsx(
            of,
            {
              fontSize: "0.8em",
              marginEnd: r,
              opacity: e.isChecked ? 1 : 0,
              children: n || /* @__PURE__ */ S.jsx(H7, {})
            }
          ),
          /* @__PURE__ */ S.jsx("span", { style: { flex: 1 }, children: i.children })
        ]
      }
    );
  }
);
zg.id = "MenuItemOption";
zg.displayName = "MenuItemOption";
var U7 = {
  slideInBottom: {
    ...ls,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...ls,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...ls,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...ls,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...LP,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, G7 = X(ir.section), K7 = (e) => U7[e || "none"], i_ = v.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = K7(n), ...o } = e;
    return /* @__PURE__ */ S.jsx(G7, { ref: t, ...r, ...o });
  }
);
i_.displayName = "ModalTransition";
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
}, xm = new Q7();
function a_(e, t) {
  const [n, r] = v.useState(0);
  return v.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = xm.add(o);
        r(i);
      }
      return () => {
        xm.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var Z7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, di = /* @__PURE__ */ new WeakMap(), yu = /* @__PURE__ */ new WeakMap(), bu = {}, Ap = 0, s_ = function(e) {
  return e && (e.host || s_(e.parentNode));
}, J7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = s_(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, eW = function(e, t, n, r) {
  var o = J7(t, Array.isArray(e) ? e : [e]);
  bu[n] || (bu[n] = /* @__PURE__ */ new WeakMap());
  var i = bu[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), y = p !== null && p !== "false", m = (di.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        di.set(f, m), i.set(f, x), a.push(f), m === 1 && y && yu.set(f, !0), x === 1 && f.setAttribute(n, "true"), y || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), Ap++, function() {
    a.forEach(function(d) {
      var f = di.get(d) - 1, p = i.get(d) - 1;
      di.set(d, f), i.set(d, p), f || (yu.has(d) || d.removeAttribute(r), yu.delete(d)), p || d.removeAttribute(n);
    }), Ap--, Ap || (di = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), yu = /* @__PURE__ */ new WeakMap(), bu = {});
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
  const y = a_(u, t), m = v.useRef(null), x = v.useCallback((M) => {
    m.current = M.target;
  }, []), h = v.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [g, b] = v.useState(!1), [w, k] = v.useState(!1), P = v.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": g ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: Le(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, w, d, f, g]
  ), _ = v.useCallback(
    (M) => {
      M.stopPropagation(), m.current === M.target && xm.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), T = v.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: Le(M.onClick, _),
      onKeyDown: Le(M.onKeyDown, h),
      onMouseDown: Le(M.onMouseDown, x)
    }),
    [h, x, _]
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
var [iW, Ea] = Je({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [aW, co] = Je({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Ol = (e) => {
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
  } = t, m = Ct("Modal", t), h = {
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
  return /* @__PURE__ */ S.jsx(aW, { value: h, children: /* @__PURE__ */ S.jsx(iW, { value: m, children: /* @__PURE__ */ S.jsx(ri, { onExitComplete: y, children: h.isOpen && /* @__PURE__ */ S.jsx(gl, { ...n, children: r }) }) }) });
};
Ol.displayName = "Modal";
var nc = "right-scroll-bar-position", rc = "width-before-scroll-bar", sW = "with-scroll-bars-hidden", lW = "--removed-body-scroll-bar-size", l_ = e2(), Dp = function() {
}, sf = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Dp,
    onWheelCapture: Dp,
    onTouchMoveCapture: Dp
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, y = e.inert, m = e.allowPinchZoom, x = e.as, h = x === void 0 ? "div" : x, g = e.gapMode, b = QP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, k = XP([n, t]), P = qn(qn({}, b), o);
  return v.createElement(
    v.Fragment,
    null,
    c && v.createElement(w, { sideCar: l_, removeScrollBar: u, shards: d, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!m, lockRef: n, gapMode: g }),
    a ? v.cloneElement(v.Children.only(s), qn(qn({}, P), { ref: k })) : v.createElement(h, qn({}, P, { className: l, ref: k }), s)
  );
});
sf.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
sf.classNames = {
  fullWidth: rc,
  zeroRight: nc
};
var cx, uW = function() {
  if (cx)
    return cx;
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
}, u_ = function() {
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
}, Fp = function(e) {
  return parseInt(e || "", 10) || 0;
}, vW = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Fp(n), Fp(r), Fp(o)];
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
}, yW = u_(), bW = function(e, t, n, r) {
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
  
  .`).concat(nc, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(rc, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(nc, " .").concat(nc, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(rc, " .").concat(rc, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(lW, ": ").concat(s, `px;
  }
`);
}, xW = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = v.useMemo(function() {
    return gW(o);
  }, [o]);
  return v.createElement(yW, { styles: bW(i, !t, o, n ? "" : "!important") });
}, Sm = !1;
if (typeof window < "u")
  try {
    var xu = Object.defineProperty({}, "passive", {
      get: function() {
        return Sm = !0, !0;
      }
    });
    window.addEventListener("test", xu, xu), window.removeEventListener("test", xu, xu);
  } catch {
    Sm = !1;
  }
var fi = Sm ? { passive: !1 } : !1, SW = function(e) {
  return e.tagName === "TEXTAREA";
}, c_ = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !SW(e) && n[t] === "visible")
  );
}, wW = function(e) {
  return c_(e, "overflowY");
}, CW = function(e) {
  return c_(e, "overflowX");
}, dx = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = d_(e, r);
    if (o) {
      var i = f_(e, r), a = i[1], s = i[2];
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
}, d_ = function(e, t) {
  return e === "v" ? wW(t) : CW(t);
}, f_ = function(e, t) {
  return e === "v" ? kW(t) : PW(t);
}, _W = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, TW = function(e, t, n, r, o) {
  var i = _W(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = f_(e, s), y = p[0], m = p[1], x = p[2], h = m - x - i * y;
    (y || h) && d_(e, s) && (d += h, f += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Su = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, fx = function(e) {
  return [e.deltaX, e.deltaY];
}, px = function(e) {
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
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(MW++)[0], i = v.useState(u_)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = O6([e.lockRef.current], (e.shards || []).map(px), !0).filter(Boolean);
      return m.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(m, x) {
    if ("touches" in m && m.touches.length === 2)
      return !a.current.allowPinchZoom;
    var h = Su(m), g = n.current, b = "deltaX" in m ? m.deltaX : g[0] - h[0], w = "deltaY" in m ? m.deltaY : g[1] - h[1], k, P = m.target, _ = Math.abs(b) > Math.abs(w) ? "h" : "v";
    if ("touches" in m && _ === "h" && P.type === "range")
      return !1;
    var T = dx(_, P);
    if (!T)
      return !0;
    if (T ? k = _ : (k = _ === "v" ? "h" : "v", T = dx(_, P)), !T)
      return !1;
    if (!r.current && "changedTouches" in m && (b || w) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return TW(M, x, m, M === "h" ? b : w, !0);
  }, []), l = v.useCallback(function(m) {
    var x = m;
    if (!(!pi.length || pi[pi.length - 1] !== i)) {
      var h = "deltaY" in x ? fx(x) : Su(x), g = t.current.filter(function(k) {
        return k.name === x.type && (k.target === x.target || x.target === k.shadowParent) && EW(k.delta, h);
      })[0];
      if (g && g.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!g) {
        var b = (a.current.shards || []).map(px).filter(Boolean).filter(function(k) {
          return k.contains(x.target);
        }), w = b.length > 0 ? s(x, b[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(m, x, h, g) {
    var b = { name: m, delta: x, target: h, should: g, shadowParent: RW(h) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== b;
      });
    }, 1);
  }, []), c = v.useCallback(function(m) {
    n.current = Su(m), r.current = void 0;
  }, []), d = v.useCallback(function(m) {
    u(m.type, fx(m), m.target, s(m, e.lockRef.current));
  }, []), f = v.useCallback(function(m) {
    u(m.type, Su(m), m.target, s(m, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return pi.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, fi), document.addEventListener("touchmove", l, fi), document.addEventListener("touchstart", c, fi), function() {
      pi = pi.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", l, fi), document.removeEventListener("touchmove", l, fi), document.removeEventListener("touchstart", c, fi);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    y ? v.createElement(i, { styles: OW(o) }) : null,
    p ? v.createElement(xW, { gapMode: e.gapMode }) : null
  );
}
function RW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const $W = M6(l_, IW);
var p_ = v.forwardRef(function(e, t) {
  return v.createElement(sf, qn({}, e, { ref: t, sideCar: $W }));
});
p_.classNames = sf.classNames;
const AW = p_;
function h_(e) {
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
  } = co(), [f, p] = uP();
  v.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const y = a_(r, d);
  return /* @__PURE__ */ S.jsx(
    R2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ S.jsx(
        AW,
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
var lf = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = co(), u = s(a, t), c = l(o), d = ie("chakra-modal__content", n), f = Ea(), p = {
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
    }, { motionPreset: m } = co();
    return /* @__PURE__ */ S.jsx(h_, { children: /* @__PURE__ */ S.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: y,
        children: /* @__PURE__ */ S.jsx(
          i_,
          {
            preset: m,
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
lf.displayName = "ModalContent";
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
  return /* @__PURE__ */ S.jsx(DW, { value: { placement: u }, children: /* @__PURE__ */ S.jsx(
    Ol,
    {
      isOpen: n,
      onClose: r,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var NW = X(jP), m_ = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = co(), c = s(a, t), d = l(i), f = ie("chakra-modal__content", n), p = Ea(), y = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, m = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: x } = FW();
    return /* @__PURE__ */ S.jsx(h_, { children: /* @__PURE__ */ S.jsx(
      X.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: m,
        children: /* @__PURE__ */ S.jsx(
          NW,
          {
            motionProps: o,
            direction: x,
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
m_.displayName = "DrawerContent";
var Ml = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = co();
    v.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ie("chakra-modal__header", n), l = {
      flex: 0,
      ...Ea().header
    };
    return /* @__PURE__ */ S.jsx(
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
Ml.displayName = "ModalHeader";
var VW = X(ir.div), Il = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ie("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Ea().overlay
    }, { motionPreset: u } = co(), d = o || (u === "none" ? {} : FP);
    return /* @__PURE__ */ S.jsx(
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
Il.displayName = "ModalOverlay";
var Rl = oe((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = co();
  v.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ie("chakra-modal__body", n), s = Ea();
  return /* @__PURE__ */ S.jsx(
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
Rl.displayName = "ModalBody";
var uf = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = co(), a = ie("chakra-modal__close-btn", r), s = Ea();
    return /* @__PURE__ */ S.jsx(
      Jd,
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
uf.displayName = "ModalCloseButton";
var [BW, oi] = Je({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [WW, $l] = Je({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), v_ = oe(
  function(t, n) {
    const { getHeaderProps: r } = oi(), o = $l();
    return /* @__PURE__ */ S.jsx(
      X.header,
      {
        ...r(t, n),
        className: ie("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
v_.displayName = "PopoverHeader";
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
    computePositionOnMount: y,
    ...m
  } = e, { isOpen: x, onClose: h, onOpen: g, onToggle: b } = q2(e), w = v.useRef(null), k = v.useRef(null), P = v.useRef(null), _ = v.useRef(!1), T = v.useRef(!1);
  x && (T.current = !0);
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
  } = Y2({
    ...m,
    enabled: x || !!y
  }), te = Q2({ isOpen: x, ref: P });
  y6({
    enabled: x,
    ref: k
  }), j2(P, {
    focusRef: k,
    visible: x,
    shouldFocus: i && u === hi.click
  }), r8(P, {
    focusRef: r,
    visible: x,
    shouldFocus: a && u === hi.click
  });
  const le = Z2({
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
          transformOrigin: St.transformOrigin.varRef,
          [St.arrowSize.var]: s ? `${s}px` : void 0,
          [St.arrowShadowColor.var]: l
        },
        ref: at(P, mt),
        children: le ? fe.children : null,
        id: K,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Le(fe.onKeyDown, (Ut) => {
          n && Ut.key === "Escape" && h();
        }),
        onBlur: Le(fe.onBlur, (Ut) => {
          const Rr = hx(Ut), vt = Lp(P.current, Rr), Nn = Lp(k.current, Rr);
          x && t && (!vt && !Nn) && h();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === hi.hover && (Ge.role = "tooltip", Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        _.current = !0;
      }), Ge.onMouseLeave = Le(
        fe.onMouseLeave,
        (Ut) => {
          Ut.nativeEvent.relatedTarget !== null && (_.current = !1, setTimeout(() => h(), d));
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
      x,
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
          visibility: x ? "visible" : "hidden",
          ...fe.style
        }
      },
      mt
    ),
    [x, V]
  ), me = v.useCallback(
    (fe, mt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(mt, w, j)
    }),
    [w, j]
  ), Pe = v.useRef(), et = v.useRef(), qe = v.useCallback(
    (fe) => {
      w.current == null && j(fe);
    },
    [j]
  ), on = v.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, mt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": x,
        "aria-controls": K
      };
      return u === hi.click && (Ge.onClick = Le(fe.onClick, b)), u === hi.hover && (Ge.onFocus = Le(fe.onFocus, () => {
        Pe.current === void 0 && g();
      }), Ge.onBlur = Le(fe.onBlur, (Ut) => {
        const Rr = hx(Ut), vt = !Lp(P.current, Rr);
        x && t && vt && h();
      }), Ge.onKeyDown = Le(fe.onKeyDown, (Ut) => {
        Ut.key === "Escape" && h();
      }), Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        _.current = !0, Pe.current = window.setTimeout(() => g(), c);
      }), Ge.onMouseLeave = Le(fe.onMouseLeave, () => {
        _.current = !1, Pe.current && (clearTimeout(Pe.current), Pe.current = void 0), et.current = window.setTimeout(() => {
          _.current === !1 && h();
        }, d);
      })), Ge;
    },
    [
      W,
      x,
      K,
      u,
      qe,
      b,
      g,
      t,
      h,
      c,
      d
    ]
  );
  v.useEffect(() => () => {
    Pe.current && clearTimeout(Pe.current), et.current && clearTimeout(et.current);
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
    isOpen: x,
    onAnimationComplete: te.onComplete,
    onClose: h,
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
function Lp(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function hx(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Vg(e) {
  const t = Ct("Popover", e), { children: n, ...r } = Cn(e), o = mo(), i = HW({ ...r, direction: o.direction });
  return /* @__PURE__ */ S.jsx(BW, { value: i, children: /* @__PURE__ */ S.jsx(WW, { value: t, children: Xn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Vg.displayName = "Popover";
var jp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Bg(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = oi(), c = $l(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ S.jsx(
    X.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ S.jsx(
        X.div,
        {
          className: ie("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": jp("colors", s),
            "--popper-arrow-bg": jp("colors", d),
            "--popper-arrow-shadow": jp("shadows", f),
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
    const { getBodyProps: r } = oi(), o = $l();
    return /* @__PURE__ */ S.jsx(
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
    const { onClose: r } = oi(), o = $l();
    return /* @__PURE__ */ S.jsx(
      Jd,
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
}, KW = X(ir.section), g_ = oe(function(t, n) {
  const { variants: r = GW, ...o } = t, { isOpen: i } = oi();
  return /* @__PURE__ */ S.jsx(
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
g_.displayName = "PopoverTransition";
var Ug = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = oi(), u = $l(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ S.jsx(
      X.div,
      {
        ...s(r),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ S.jsx(
          g_,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: kC(
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
var [YW, y_] = Je({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), b_ = oe((e, t) => {
  const n = Ct("Tag", e), r = Cn(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ S.jsx(YW, { value: n, children: /* @__PURE__ */ S.jsx(X.span, { ref: t, ...r, __css: o }) });
});
b_.displayName = "Tag";
var qW = oe((e, t) => {
  const n = y_();
  return /* @__PURE__ */ S.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
qW.displayName = "TagLabel";
var XW = oe((e, t) => /* @__PURE__ */ S.jsx(kn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
XW.displayName = "TagLeftIcon";
var QW = oe((e, t) => /* @__PURE__ */ S.jsx(kn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
QW.displayName = "TagRightIcon";
var x_ = (e) => /* @__PURE__ */ S.jsx(kn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ S.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
x_.displayName = "TagCloseIcon";
var ZW = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...y_().closeButton
    };
    return /* @__PURE__ */ S.jsx(
      X.button,
      {
        ref: t,
        "aria-label": "close",
        ...o,
        type: "button",
        disabled: n,
        __css: a,
        children: r || /* @__PURE__ */ S.jsx(x_, {})
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
}, eH = Object.defineProperty, tH = Object.defineProperties, nH = Object.getOwnPropertyDescriptors, Jc = Object.getOwnPropertySymbols, S_ = Object.prototype.hasOwnProperty, w_ = Object.prototype.propertyIsEnumerable, mx = (e, t, n) => t in e ? eH(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vx = (e, t) => {
  for (var n in t || (t = {}))
    S_.call(t, n) && mx(e, n, t[n]);
  if (Jc)
    for (var n of Jc(t))
      w_.call(t, n) && mx(e, n, t[n]);
  return e;
}, rH = (e, t) => tH(e, nH(t)), oH = (e, t) => {
  var n = {};
  for (var r in e)
    S_.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Jc)
    for (var r of Jc(e))
      t.indexOf(r) < 0 && w_.call(e, r) && (n[r] = e[r]);
  return n;
}, Ht = (e, t, n) => {
  const r = v.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = oH(a, ["color", "size", "stroke", "children"]);
      return v.createElement(
        "svg",
        vx(rH(vx({
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
}, gx = Ht("chevron-down", "IconChevronDown", [
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
]), C_ = Ht("folder", "IconFolder", [
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
]), k_ = Ht("plus", "IconPlus", [
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
]), P_ = Ht("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), __ = Ht("trash", "IconTrash", [
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
let wu;
const hH = new Uint8Array(16);
function mH() {
  if (!wu && (wu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !wu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return wu(hH);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function vH(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const gH = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), yx = {
  randomUUID: gH
};
function yH(e, t, n) {
  if (yx.randomUUID && !t && !e)
    return yx.randomUUID();
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
async function xa(e, t) {
  const n = e + "/" + Date.now() + ".json";
  xH(n, t);
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
async function T_(e) {
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
async function xH(e, t) {
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
async function SH(e) {
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
const bx = "CWM_WORKFLOWS_SORT_TYPE";
var Ur = /* @__PURE__ */ ((e) => (e.RECENTLY_MODIFIED = "newest", e.OLDEST_MODIFIED = "oldest", e.AZ = "name A-Z", e.ZA = "name Z-A", e))(Ur || {});
function kH(e) {
  return e = e.replace(/[\\/:*?"<>|]/g, "_"), e.trim();
}
function E_(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
function O_(e = [], t = Ur.RECENTLY_MODIFIED) {
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
let Se, ke = null, oc = null;
async function PH() {
  const e = async () => {
    let r = await Gg("workflows");
    r == null && (r = localStorage.getItem("workspace") ?? "{}"), Se = JSON.parse(r ?? "{}");
  }, t = async () => {
    ke = await TH();
  }, n = async () => {
    oc = await ed.load();
  };
  await Promise.all([e(), t(), n()]);
}
function wm(e, t) {
  if (Se == null)
    return;
  const n = Se[e];
  if (n == null)
    return;
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  if (o !== i) {
    if (Se[e] = {
      ...Se[e],
      ...t,
      updateTime: Date.now()
    }, localStorage.setItem("workspace", JSON.stringify(Se)), xa("workflows", JSON.stringify(Se)), t.name != null) {
      n.filePath && T_(n.filePath), Cm(e);
      return;
    }
    t.json != null && Cm(e);
  }
}
function Cm(e) {
  if (Se == null)
    return;
  const t = Se[e];
  if (t == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", e);
    return;
  }
  const n = kH(t.name) + ".json";
  Se[e].filePath = n, bH(n, t.json);
}
function ic({
  json: e,
  name: t
}) {
  if (Se == null)
    throw new Error("workspace is not loaded");
  const n = yH();
  return Se[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Se)), xa("workflows", JSON.stringify(Se)), Cm(n), Se[n];
}
function ac(e) {
  if (Se == null)
    throw new Error("workspace is not loaded");
  const t = Object.values(Se);
  return e ? O_(t, e) : t.sort((n, r) => r.updateTime - n.updateTime);
}
function _H(e) {
  var n;
  if (Se == null)
    throw new Error("workspace is not loaded");
  const t = (n = Se[e]) == null ? void 0 : n.filePath;
  delete Se[e], localStorage.setItem("workspace", JSON.stringify(Se)), xa("workflows", JSON.stringify(Se)), t != null && T_(t);
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
      }), t[n].updateTime = Date.now(), xa("tags", JSON.stringify(t)), t[n];
    },
    delete(n) {
      delete t[n], xa("tags", JSON.stringify(t));
    }
  };
}
function EH() {
  return JSON.stringify({
    [ed.TABLE_NAME]: oc == null ? void 0 : oc.records,
    tags: ke == null ? void 0 : ke.tags,
    workflows: Se
  });
}
const Io = class Io {
  constructor() {
    Sf(this, "records");
    this.records = {};
  }
  upsert(t) {
    this.records = {
      ...this.records,
      ...t
    }, xa(Io.TABLE_NAME, JSON.stringify(this.records)), localStorage.setItem("comfyspace", EH());
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
Sf(Io, "TABLE_NAME", "userSettings");
let ed = Io;
const Kg = v.createContext({
  curFlowID: null
}), M_ = v.createContext({});
function OH({ onclose: e }) {
  const [t, n] = v.useState([]), r = async () => {
    const o = await SH("workflows");
    if (o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return v.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ S.jsxs(Ol, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ S.jsx(Il, {}),
    /* @__PURE__ */ S.jsxs(lf, { children: [
      /* @__PURE__ */ S.jsx(Ml, { children: "Backups" }),
      /* @__PURE__ */ S.jsx(uf, {}),
      /* @__PURE__ */ S.jsx(Rl, { children: /* @__PURE__ */ S.jsx(NP, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ S.jsxs(AP, { children: [
          /* @__PURE__ */ S.jsx("h2", { children: /* @__PURE__ */ S.jsxs(IP, { children: [
            /* @__PURE__ */ S.jsxs($e, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              E_(i)
            ] }),
            /* @__PURE__ */ S.jsx($P, {})
          ] }) }),
          /* @__PURE__ */ S.jsx(zP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ S.jsx($e, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function MH({ onclose: e }) {
  const [t, n] = v.useState((ke == null ? void 0 : ke.listAll()) ?? []);
  return /* @__PURE__ */ S.jsxs(Ol, { isOpen: !0, onClose: e, children: [
    /* @__PURE__ */ S.jsx(Il, {}),
    /* @__PURE__ */ S.jsxs(lf, { children: [
      /* @__PURE__ */ S.jsx(Ml, { children: "My Tags" }),
      /* @__PURE__ */ S.jsx(uf, {}),
      /* @__PURE__ */ S.jsx(Rl, { children: t.map((r) => /* @__PURE__ */ S.jsxs(_t, { children: [
        /* @__PURE__ */ S.jsx(b_, { children: r.name }),
        /* @__PURE__ */ S.jsx(
          il,
          {
            onClick: () => {
              ke == null || ke.delete(r.name), n((ke == null ? void 0 : ke.listAll()) ?? []);
            },
            "aria-label": "delete-tag",
            colorScheme: "red",
            variant: "ghost",
            icon: /* @__PURE__ */ S.jsx(__, {})
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
  }), /* @__PURE__ */ S.jsxs(Ol, { isOpen: !0, onClose: e, size: "2xl", children: [
    /* @__PURE__ */ S.jsx(Il, {}),
    /* @__PURE__ */ S.jsxs(lf, { children: [
      /* @__PURE__ */ S.jsx(Ml, { children: "Settings" }),
      /* @__PURE__ */ S.jsx(uf, {}),
      /* @__PURE__ */ S.jsxs(Rl, { children: [
        /* @__PURE__ */ S.jsx(nr, { fontWeight: 600, mb: 3, children: "Workspace Save Directory (🚧 Under development, not working)" }),
        /* @__PURE__ */ S.jsxs(_t, { children: [
          /* @__PURE__ */ S.jsx(nr, { mr: 5, children: t }),
          /* @__PURE__ */ S.jsx(
            jn,
            {
              onClick: () => {
                CH();
              },
              paddingLeft: 10,
              paddingRight: 10,
              size: "sm",
              leftIcon: /* @__PURE__ */ S.jsx(C_, {}),
              colorScheme: "teal",
              size: "sm",
              children: "Choose Folder"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Cu = 16;
function RH({}) {
  const { isOpen: e, onOpen: t, onClose: n } = V9(), [r, o] = v.useState(!1), [i, a] = v.useState(!1), { colorMode: s, toggleColorMode: l } = _a();
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsxs(El, { isLazy: !0, children: [
      /* @__PURE__ */ S.jsx(
        jg,
        {
          as: il,
          "aria-label": "Options",
          icon: /* @__PURE__ */ S.jsx(lH, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ S.jsxs(af, { children: [
        /* @__PURE__ */ S.jsx(
          Ni,
          {
            onClick: () => a(!0),
            icon: /* @__PURE__ */ S.jsx(cH, { size: 16 }),
            fontSize: 16,
            children: "Settings"
          }
        ),
        /* @__PURE__ */ S.jsx(
          Ni,
          {
            onClick: () => o(!0),
            icon: /* @__PURE__ */ S.jsx(P_, { size: Cu }),
            fontSize: 16,
            children: "Manage Tags"
          }
        ),
        /* @__PURE__ */ S.jsxs(
          Ni,
          {
            onClick: l,
            icon: s === "light" ? /* @__PURE__ */ S.jsx(uH, { size: Cu }) : /* @__PURE__ */ S.jsx(dH, { size: Cu }),
            fontSize: 16,
            children: [
              s === "light" ? "Dark" : "Light",
              " Mode"
            ]
          }
        ),
        /* @__PURE__ */ S.jsx(
          Ni,
          {
            onClick: t,
            icon: /* @__PURE__ */ S.jsx(sH, { size: Cu }),
            fontSize: 16,
            children: "Backups (Experimental)"
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ S.jsx(MH, { onclose: () => o(!1) }),
    i && /* @__PURE__ */ S.jsx(IH, { onclose: () => a(!1) }),
    e && /* @__PURE__ */ S.jsx(OH, { onclose: n })
  ] });
}
function xx(e, t) {
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
    t % 2 ? xx(Object(n), !0).forEach(function(r) {
      ji(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xx(Object(n)).forEach(function(r) {
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
function km(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function I_(e, t) {
  if (e) {
    if (typeof e == "string")
      return km(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return km(e, t);
  }
}
function DH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr(e, t) {
  return $H(e) || AH(e, t) || I_(e, t) || DH();
}
function Mr(e, t) {
  if (e == null)
    return {};
  var n = UP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var FH = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function LH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, y = Mr(e, FH), m = v.useState(s !== void 0 ? s : n), x = Sr(m, 2), h = x[0], g = x[1], b = v.useState(l !== void 0 ? l : o), w = Sr(b, 2), k = w[0], P = w[1], _ = v.useState(p !== void 0 ? p : a), T = Sr(_, 2), M = T[0], I = T[1], D = v.useCallback(function(A, j) {
    typeof u == "function" && u(A, j), I(A);
  }, [u]), G = v.useCallback(function(A, j) {
    var U;
    typeof c == "function" && (U = c(A, j)), g(U !== void 0 ? U : A);
  }, [c]), H = v.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = v.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), W = s !== void 0 ? s : h, K = l !== void 0 ? l : k, $ = p !== void 0 ? p : M;
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
function jH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sx(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, i2(r.key), r);
  }
}
function zH(e, t, n) {
  return t && Sx(e.prototype, t), n && Sx(e, n), Object.defineProperty(e, "prototype", {
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
  }), t && Yc(e, t);
}
function td(e) {
  return td = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, td(e);
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
    var r = td(e), o;
    if (t) {
      var i = td(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return WH(this, o);
  };
}
function UH(e) {
  if (Array.isArray(e))
    return km(e);
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
const qH = Math.min, XH = Math.max, nd = Math.round, ku = Math.floor, rd = (e) => ({
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
function Pm(e) {
  return e instanceof Element || e instanceof Fn(e).Element;
}
function Yg(e) {
  return e instanceof HTMLElement || e instanceof Fn(e).HTMLElement;
}
function wx(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fn(e).ShadowRoot;
}
function F_(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = qg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function ZH() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function JH(e) {
  return ["html", "body", "#document"].includes($_(e));
}
function qg(e) {
  return Fn(e).getComputedStyle(e);
}
function eU(e) {
  if ($_(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    wx(e) && e.host || // Fallback.
    A_(e)
  );
  return wx(t) ? t.host : t;
}
function L_(e) {
  const t = eU(e);
  return JH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Yg(t) && F_(t) ? t : L_(t);
}
function od(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = L_(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Fn(o);
  return i ? t.concat(a, a.visualViewport || [], F_(o) ? o : [], a.frameElement && n ? od(a.frameElement) : []) : t.concat(o, od(o, [], n));
}
function tU(e) {
  const t = qg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Yg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = nd(n) !== i || nd(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Xg(e) {
  return Pm(e) ? e : e.contextElement;
}
function zp(e) {
  const t = Xg(e);
  if (!Yg(t))
    return rd(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = tU(t);
  let a = (i ? nd(n.width) : n.width) / r, s = (i ? nd(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const nU = /* @__PURE__ */ rd(0);
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
function Cx(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Xg(e);
  let a = rd(1);
  t && (r ? Pm(r) && (a = zp(r)) : a = zp(e));
  const s = oU(i, n, r) ? rU(i) : rd(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Fn(i), p = r && Pm(r) ? Fn(r) : r;
    let y = f.frameElement;
    for (; y && r && p !== f; ) {
      const m = zp(y), x = y.getBoundingClientRect(), h = qg(y), g = x.left + (y.clientLeft + parseFloat(h.paddingLeft)) * m.x, b = x.top + (y.clientTop + parseFloat(h.paddingTop)) * m.y;
      l *= m.x, u *= m.y, c *= m.x, d *= m.y, l += g, u += b, y = Fn(y).frameElement;
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
    const p = ku(c), y = ku(o.clientWidth - (u + d)), m = ku(o.clientHeight - (c + f)), x = ku(u), g = {
      rootMargin: -p + "px " + -y + "px " + -m + "px " + -x + "px",
      threshold: XH(0, qH(1, l)) || 1
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
        ...g,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, g);
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
  } = r, u = Xg(e), c = o || i ? [...u ? od(u) : [], ...od(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  const d = u && s ? iU(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((h) => {
    let [g] = h;
    g && g.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let y, m = l ? Cx(e) : null;
  l && x();
  function x() {
    const h = Cx(e);
    m && (h.x !== m.x || h.y !== m.y || h.width !== m.width || h.height !== m.height) && n(), m = h, y = requestAnimationFrame(x);
  }
  return n(), () => {
    c.forEach((h) => {
      o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(y);
  };
}
var _m = v.useLayoutEffect, sU = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], id = function() {
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
var kx = function(t) {
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
function cf(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function cU(e) {
  return cf(e) ? window.innerHeight : e.clientHeight;
}
function z_(e) {
  return cf(e) ? window.pageYOffset : e.scrollTop;
}
function ad(e, t) {
  if (cf(e)) {
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
function Pu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : id, o = z_(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = fU(s, o, i, n);
    ad(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function Px(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? ad(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && ad(e, Math.max(t.offsetTop - o, 0));
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
function _x() {
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
}, _u = typeof window < "u" ? window : {};
_u.addEventListener && _u.removeEventListener && (_u.addEventListener("p", id, mU), _u.removeEventListener("p", id, !1));
var vU = N_;
function gU(e) {
  return e != null;
}
function yU(e) {
  return Array.isArray(e);
}
function Tu(e, t, n) {
  return e ? t : n;
}
var bU = function(t) {
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
}, xU = ["children", "innerProps"], SU = ["children", "innerProps"];
function wU(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = dU(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, y = f.height, m = f.top, x = n.offsetParent.getBoundingClientRect(), h = x.top, g = a ? window.innerHeight : cU(l), b = z_(l), w = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = h - k, _ = g - m, T = P + b, M = d - b - m, I = p - g + b + w, D = b + m - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (_ >= y)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= y && !a)
        return i && Pu(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && _ >= r) {
        i && Pu(l, I, G);
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
        return i && ad(l, I), {
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
        return i && Pu(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && T >= r || a && P >= r) {
        var K = t;
        return (!a && T >= r || a && P >= r) && (K = a ? P - k : T - k), i && Pu(l, D, G), {
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
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = v.useContext(B_) || {}, c = u.setPortalPlacement, d = v.useRef(null), f = v.useState(o), p = Sr(f, 2), y = p[0], m = p[1], x = v.useState(null), h = Sr(x, 2), g = h[0], b = h[1], w = l.spacing.controlHeight;
  return _m(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", _ = s && !P, T = wU({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: _,
        isFixedPosition: P,
        controlHeight: w
      });
      m(T.maxHeight), b(T.placement), c == null || c(T.placement);
    }
  }, [o, i, a, s, r, c, w]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: g || V_(i),
      maxHeight: y
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
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Mr(t, xU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, $U = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Mr(t, SU);
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
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = v.useRef(null), u = v.useRef(null), c = v.useState(V_(a)), d = Sr(c, 2), f = d[0], p = d[1], y = v.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), m = v.useState(null), x = Sr(m, 2), h = x[0], g = x[1], b = v.useCallback(function() {
    if (o) {
      var _ = pU(o), T = s === "fixed" ? 0 : window.pageYOffset, M = _[f] + T;
      (M !== (h == null ? void 0 : h.offset) || _.left !== (h == null ? void 0 : h.rect.left) || _.width !== (h == null ? void 0 : h.rect.width)) && g({
        offset: M,
        rect: _
      });
    }
  }, [o, s, f, h == null ? void 0 : h.offset, h == null ? void 0 : h.rect.left, h == null ? void 0 : h.rect.width]);
  _m(function() {
    b();
  }, [b]);
  var w = v.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = aU(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  _m(function() {
    w();
  }, [w]);
  var k = v.useCallback(function(_) {
    l.current = _, w();
  }, [w]);
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
  return ee(B_.Provider, {
    value: y
  }, n ? /* @__PURE__ */ Pd.createPortal(P, n) : P);
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
}, Tx, BU = ["size"], WU = ["innerProps", "isRtl", "size"], HU = {
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
}, Qg = function(t) {
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
  }), r), n || ee(Qg, null));
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
}, QU = yC(Tx || (Tx = YH([`
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
}, Np = function(t) {
  var n = t.delay, r = t.offset;
  return ee("span", {
    css: /* @__PURE__ */ Lv({
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
  }), n), ee(Np, {
    delay: 0,
    offset: r
  }), ee(Np, {
    delay: 160,
    offset: !0
  }), ee(Np, {
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
function xG(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(Qg, {
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
}, wG = SG, CG = function(t, n) {
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
  CrossIcon: Qg,
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
  MultiValueRemove: xG,
  Option: PG,
  Placeholder: EG,
  SelectContainer: LU,
  SingleValue: IG,
  ValueContainer: zU
}, $G = function(t) {
  return Z(Z({}, RG), t.components);
}, Ex = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function AG(e, t) {
  return !!(e === t || Ex(e) && Ex(t));
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
}, Ox = jG, zG = {
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
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(y, m) {
      return y && y.length ? "".concat(y.indexOf(m) + 1, " of ").concat(y.length) : "";
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
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, y = l.isOptionDisabled, m = l.isSearchable, x = l.menuIsOpen, h = l.options, g = l.screenReaderStatus, b = l.tabSelectsValue, w = l["aria-label"], k = l["aria-live"], P = v.useMemo(function() {
    return Z(Z({}, zG), c || {});
  }, [c]), _ = v.useMemo(function() {
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
  }, [n, P, y, s, d]), T = v.useMemo(function() {
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
  }, [r, o, d, y, P, i, s]), M = v.useMemo(function() {
    var L = "";
    if (x && h.length && P.onFilter) {
      var W = g({
        count: i.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: W
      });
    }
    return L;
  }, [i, f, x, P, h, g]), I = v.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : x ? "menu" : "input";
      L = P.guidance({
        "aria-label": w,
        context: W,
        isDisabled: r && y(r, s),
        isMulti: p,
        isSearchable: m,
        tabSelectsValue: b
      });
    }
    return L;
  }, [w, r, o, p, y, m, x, P, s, b]), D = "".concat(T, " ").concat(M, " ").concat(I), G = ee(v.Fragment, null, ee("span", {
    id: "aria-selection"
  }, _), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(v.Fragment, null, ee(Ox, {
    id: u
  }, H && G), ee(Ox, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, VG = NG, Tm = [{
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
}], BG = new RegExp("[" + Tm.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), q_ = {};
for (var Vp = 0; Vp < Tm.length; Vp++)
  for (var Bp = Tm[Vp], Wp = 0; Wp < Bp.letters.length; Wp++)
    q_[Bp.letters[Wp]] = Bp.base;
var X_ = function(t) {
  return t.replace(BG, function(n) {
    return q_[n];
  });
}, WG = FG(X_), Mx = function(t) {
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
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? Mx(r) : r, d = l ? Mx(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = WG(c), d = X_(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, GG = ["innerRef"];
function KG(e) {
  var t = e.innerRef, n = Mr(e, GG), r = bU(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Lv({
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
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = v.useRef(!1), s = v.useRef(!1), l = v.useRef(0), u = v.useRef(null), c = v.useCallback(function(x, h) {
    if (u.current !== null) {
      var g = u.current, b = g.scrollTop, w = g.scrollHeight, k = g.clientHeight, P = u.current, _ = h > 0, T = w - k - b, M = !1;
      T > h && a.current && (r && r(x), a.current = !1), _ && s.current && (i && i(x), s.current = !1), _ && h > T ? (n && !a.current && n(x), P.scrollTop = w, M = !0, a.current = !0) : !_ && -h > b && (o && !s.current && o(x), P.scrollTop = 0, M = !0, s.current = !0), M && YG(x);
    }
  }, [n, r, o, i]), d = v.useCallback(function(x) {
    c(x, x.deltaY);
  }, [c]), f = v.useCallback(function(x) {
    l.current = x.changedTouches[0].clientY;
  }, []), p = v.useCallback(function(x) {
    var h = l.current - x.changedTouches[0].clientY;
    c(x, h);
  }, [c]), y = v.useCallback(function(x) {
    if (x) {
      var h = vU ? {
        passive: !1
      } : !1;
      x.addEventListener("wheel", d, h), x.addEventListener("touchstart", f, h), x.addEventListener("touchmove", p, h);
    }
  }, [p, f, d]), m = v.useCallback(function(x) {
    x && (x.removeEventListener("wheel", d, !1), x.removeEventListener("touchstart", f, !1), x.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return v.useEffect(function() {
    if (t) {
      var x = u.current;
      return y(x), function() {
        m(x);
      };
    }
  }, [t, y, m]), function(x) {
    u.current = x;
  };
}
var Ix = ["boxSizing", "height", "overflow", "paddingRight", "position"], Rx = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function $x(e) {
  e.preventDefault();
}
function Ax(e) {
  e.stopPropagation();
}
function Dx() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function Fx() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Lx = !!(typeof window < "u" && window.document && window.document.createElement), Xa = 0, mi = {
  capture: !1,
  passive: !1
};
function XG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = v.useRef({}), i = v.useRef(null), a = v.useCallback(function(l) {
    if (Lx) {
      var u = document.body, c = u && u.style;
      if (r && Ix.forEach(function(y) {
        var m = c && c[y];
        o.current[y] = m;
      }), r && Xa < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(Rx).forEach(function(y) {
          var m = Rx[y];
          c && (c[y] = m);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && Fx() && (u.addEventListener("touchmove", $x, mi), l && (l.addEventListener("touchstart", Dx, mi), l.addEventListener("touchmove", Ax, mi))), Xa += 1;
    }
  }, [r]), s = v.useCallback(function(l) {
    if (Lx) {
      var u = document.body, c = u && u.style;
      Xa = Math.max(Xa - 1, 0), r && Xa < 1 && Ix.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && Fx() && (u.removeEventListener("touchmove", $x, mi), l && (l.removeEventListener("touchstart", Dx, mi), l.removeEventListener("touchmove", Ax, mi)));
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
}, Hp = {
  borderRadius: uK,
  colors: lK,
  spacing: fK
}, pK = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: _x(),
  captureMenuScroll: !_x(),
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
function jx(e, t, n, r) {
  var o = tT(e, t, n), i = nT(e, t, n), a = eT(e, t), s = sd(e, t);
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
        return jx(e, a, t, s);
      }).filter(function(a) {
        return zx(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = jx(e, n, t, r);
    return zx(e, i) ? i : void 0;
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
function zx(e, t) {
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
}, sd = function(t, n) {
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
  var r = sd(e, t);
  return n.some(function(o) {
    return sd(e, o) === r;
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
      var l = o.props, u = l.blurInputOnSelect, c = l.isMulti, d = l.name, f = o.state.selectValue, p = c && o.isOptionSelected(s, f), y = o.isOptionDisabled(s, f);
      if (p) {
        var m = o.getOptionValue(s);
        o.setValue(f.filter(function(x) {
          return o.getOptionValue(x) !== m;
        }), "deselect-option", s);
      } else if (!y)
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
      }), f = Tu(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(Tu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = Tu(s, c, c[0] || null);
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
      return sd(o.props, s);
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
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && cf(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
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
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, y = l.isDisabled, m = l.menuIsOpen, x = l.onKeyDown, h = l.tabSelectsValue, g = l.openMenuOnFocus, b = o.state, w = b.focusedOption, k = b.focusedValue, P = b.selectValue;
      if (!y && !(typeof x == "function" && (x(s), s.defaultPrevented))) {
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
            if (o.isComposing || s.shiftKey || !m || !h || !w || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            g && o.isOptionSelected(w, P))
              return;
            o.selectOption(w);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (m) {
              if (!w || o.isComposing)
                return;
              o.selectOption(w);
              break;
            }
            return;
          case "Escape":
            m ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!m) {
              o.openMenu("first");
              break;
            }
            if (!w)
              return;
            o.selectOption(w);
            break;
          case "ArrowUp":
            m ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            m ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!m)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!m)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!m)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!m)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++gK), o.state.selectValue = kx(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return zH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Px(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Px(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Hp) : Z(Z({}, Hp), this.props.theme) : Hp;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, y = d.options, m = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: m,
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
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), y = p.Input, m = this.state, x = m.inputIsHidden, h = m.ariaSelection, g = this.commonProps, b = s || this.getElementId("input"), w = Z(Z(Z({
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
        return a ? /* @__PURE__ */ v.createElement(y, q({}, g, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: b,
          innerRef: this.getInputRef,
          isDisabled: i,
          isHidden: x,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: c,
          type: "text",
          value: l
        }, w)) : /* @__PURE__ */ v.createElement(KG, q({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: id,
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
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, y = p.controlShouldRenderValue, m = p.isDisabled, x = p.isMulti, h = p.inputValue, g = p.placeholder, b = this.state, w = b.selectValue, k = b.focusedValue, P = b.isFocused;
      if (!this.hasValue() || !y)
        return h ? null : /* @__PURE__ */ v.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: m,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), g);
      if (x)
        return w.map(function(T, M) {
          var I = T === k, D = "".concat(o.getOptionLabel(T), "-").concat(o.getOptionValue(T));
          return /* @__PURE__ */ v.createElement(a, q({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: I,
            isDisabled: m,
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
      var _ = w[0];
      return /* @__PURE__ */ v.createElement(c, q({}, f, {
        data: _,
        isDisabled: m
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
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, y = this.commonProps, m = this.state.focusedOption, x = this.props, h = x.captureMenuScroll, g = x.inputValue, b = x.isLoading, w = x.loadingMessage, k = x.minMenuHeight, P = x.maxMenuHeight, _ = x.menuIsOpen, T = x.menuPlacement, M = x.menuPosition, I = x.menuPortalTarget, D = x.menuShouldBlockScroll, G = x.menuShouldScrollIntoView, H = x.noOptionsMessage, L = x.onMenuScrollToTop, W = x.onMenuScrollToBottom;
      if (!_)
        return null;
      var K = function(z, te) {
        var le = z.type, ae = z.data, se = z.isDisabled, me = z.isSelected, Pe = z.label, et = z.value, qe = m === ae, on = se ? void 0 : function() {
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
        return /* @__PURE__ */ v.createElement(p, q({}, y, {
          innerProps: fe,
          data: ae,
          isDisabled: se,
          isSelected: me,
          key: Ir,
          label: Pe,
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
            return /* @__PURE__ */ v.createElement(a, q({}, y, {
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
          inputValue: g
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(d, y, A);
      } else {
        var j = H({
          inputValue: g
        });
        if (j === null)
          return null;
        $ = /* @__PURE__ */ v.createElement(f, y, j);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: T,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ v.createElement(PU, q({}, y, U), function(Y) {
        var z = Y.ref, te = Y.placerProps, le = te.placement, ae = te.maxHeight;
        return /* @__PURE__ */ v.createElement(l, q({}, y, U, {
          innerRef: z,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: le
        }), /* @__PURE__ */ v.createElement(JG, {
          captureEnabled: h,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ v.createElement(u, q({}, y, {
            innerRef: function(Pe) {
              o.getMenuListRef(Pe), se(Pe);
            },
            isLoading: b,
            maxHeight: ae,
            focusedOption: m
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ v.createElement(c, q({}, y, {
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
            var f = d.map(function(m) {
              return o.getOptionValue(m);
            }).join(a);
            return /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(m, x) {
              return /* @__PURE__ */ v.createElement("input", {
                key: "i-".concat(x),
                name: u,
                type: "hidden",
                value: o.getOptionValue(m)
              });
            }) : /* @__PURE__ */ v.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ v.createElement("div", null, p);
          }
        else {
          var y = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ v.createElement("input", {
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
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, y = this.state.isFocused, m = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ v.createElement(s, q({}, m, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: y
      }), this.renderLiveRegion(), /* @__PURE__ */ v.createElement(i, q({}, m, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: y,
        menuIsOpen: p
      }), /* @__PURE__ */ v.createElement(l, q({}, m, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ v.createElement(a, q({}, m, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, y = o.menuIsOpen, m = o.inputValue, x = o.isMulti, h = kx(p), g = {};
      if (a && (p !== a.value || f !== a.options || y !== a.menuIsOpen || m !== a.inputValue)) {
        var b = y ? hK(o, h) : [], w = s ? mK(i, h) : null, k = vK(i, b);
        g = {
          selectValue: h,
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
        value: Tu(x, h, h[0] || null),
        options: h,
        action: "initial-input-focus"
      }, T = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (_ = null), Z(Z(Z({}, g), P), {}, {
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
}), bK = yK, xK = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
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
function SK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var aT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = SK(t, xK);
  return Em({}, n);
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
  return /* @__PURE__ */ re.createElement($e, Sa({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, PK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, y = l.controlShouldRenderValue, m = zn(c), x = Ct("Input", {
    size: m,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), h = {
    display: i && a && y ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: x.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, g = u != null && u.valueContainer ? u.valueContainer(h, t) : h;
  return /* @__PURE__ */ re.createElement($e, Sa({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: g
  }), n);
}, _K = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ re.createElement($e, Sa({}, i, {
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
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, m = c.errorBorderColor, x = c.isInvalid, h = c.isReadOnly, g = zn(f), b = Ct("Input", {
    size: g,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: m
  }), w = b.field, k = w.height, P = w.h, _ = EK(w, TK), T = k || P, M = wn({}, _, {
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
  return /* @__PURE__ */ re.createElement($e, wn({
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
    "data-invalid": x ? !0 : void 0,
    "data-disabled": s ? !0 : void 0,
    "data-readonly": h ? !0 : void 0
  }), o);
}, MK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = wn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ re.createElement(L2, {
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
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = zn(u), y = Ct("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), m = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, x = m[p], h = wn({}, y.addon, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 0,
    borderWidth: 0,
    fontSize: x
  }, l && {
    background: "transparent",
    padding: 0,
    width: 6,
    marginRight: 2,
    marginLeft: 1,
    cursor: "inherit"
  }), g = s != null && s.dropdownIndicator ? s.dropdownIndicator(h, t) : h, b = {
    height: "1em",
    width: "1em"
  }, w = s != null && s.downChevron ? s.downChevron(b, t) : b;
  return /* @__PURE__ */ re.createElement($e, wn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: g
  }), n || /* @__PURE__ */ re.createElement(IK, {
    sx: w
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
  }, y = s != null && s.crossIcon ? s.crossIcon(p, t) : p;
  return /* @__PURE__ */ re.createElement($e, wn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ re.createElement($K, {
    sx: y
  }));
}, DK = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = zn(s), y = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, m = y[p], x = {
    marginRight: 3
  }, h = a != null && a.loadingIndicator ? a.loadingIndicator(x, t) : x;
  return /* @__PURE__ */ re.createElement(Zd, wn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: h
  }, o, {
    size: f || m,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const FK = OK;
var LK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function Is() {
  return Is = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Is.apply(this, arguments);
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
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = aT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = jK(l, LK), y = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, m = {
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
    _after: Is({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, y)
  }, x = a != null && a.inputContainer ? a.inputContainer(m, t) : m, h = Is({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, y), g = a != null && a.input ? a.input(h, t) : h;
  return /* @__PURE__ */ re.createElement($e, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: x
  }, /* @__PURE__ */ re.createElement(X.input, Is({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: g,
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
  return /* @__PURE__ */ re.createElement(El, null, /* @__PURE__ */ re.createElement($e, Wt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const UK = HK;
var GK = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, m = c.errorBorderColor, x = Ct("Menu"), h = zn(f), g = Ct("Input", {
    size: h,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: m
  }), b = g.field, w = Wt({}, x.list, {
    minW: "100%",
    maxHeight: s + "px",
    overflowY: "auto",
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": b == null ? void 0 : b["--input-border-radius"],
    borderRadius: (b == null ? void 0 : b.borderRadius) || ((n = x.list) == null ? void 0 : n.borderRadius),
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }), k = d != null && d.menuList ? d.menuList(w, t) : w;
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
  return /* @__PURE__ */ re.createElement($e, Wt({}, i, {
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
  return /* @__PURE__ */ re.createElement($e, Wt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, r),
    sx: f
  }), n);
}, qK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, y = {}, m = p != null && p.group ? p.group(y, t) : y;
  return /* @__PURE__ */ re.createElement($e, Wt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: m
  }), /* @__PURE__ */ re.createElement(s, Wt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ re.createElement($e, null, n));
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
  }, y = Wt({}, c.groupTitle, {
    fontSize: f[d],
    padding: p[d],
    margin: 0,
    borderBottomWidth: s ? "1px" : 0,
    position: s ? "sticky" : "static",
    top: -2,
    bg: c.list.bg,
    zIndex: 1
  }), m = i != null && i.groupHeading ? i.groupHeading(y, t) : y;
  return /* @__PURE__ */ re.createElement($e, Wt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: m
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
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, y = c.hideSelectedOptions, m = c.selectedOptionStyle, x = c.selectedOptionColorScheme, h = Ct("Menu").item, g = zn(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, w = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = Dy(x + ".500", x + ".300"), P = Dy("white", "black"), _ = m === "check" && (!p || y === !1), T = m === "color", M = Wt({}, h, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: g,
    paddingX: b[g],
    paddingY: w[g]
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
  }), _ && /* @__PURE__ */ re.createElement(of, {
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
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, y = o.Label, m = o.Remove, x = d.chakraStyles, h = d.colorScheme, g = d.tagVariant, b = d.size, w = zn(b), k = "", P = "", _ = !1;
  JK(a) && (k = a.colorScheme), eY(a) && (P = a.variant), sT(a) && (_ = a.isFixed);
  var T = Ct("Tag", {
    size: w,
    colorScheme: k || h,
    variant: P || g || (_ ? "solid" : "subtle")
  }), M = Rn({}, T.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), I = x != null && x.multiValue ? x.multiValue(M, t) : M, D = Rn({}, T.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), G = x != null && x.multiValueLabel ? x.multiValueLabel(D, t) : D, H = Rn({}, T.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = x != null && x.multiValueRemove ? x.multiValueRemove(H, t) : H;
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
  }, /* @__PURE__ */ re.createElement(y, {
    data: a,
    innerProps: {
      className: i({
        "multi-value__label": !0
      }, r)
    },
    sx: G,
    selectProps: d
  }, n), /* @__PURE__ */ re.createElement(m, {
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
  return sT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement($e, Rn({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement(oY, null));
};
const aY = tY;
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
var sY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement($e, Om({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const lY = sY;
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
var uY = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement($e, Mm({
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
function ld() {
  return ld = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ld.apply(this, arguments);
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
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, y = t.tagVariant, m = t.selectedOptionStyle, x = m === void 0 ? "color" : m, h = t.selectedOptionColorScheme, g = t.selectedOptionColor, b = t.variant, w = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, _ = P === void 0 ? {} : P, T = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = hY(t, pY), G = mo(), H = G.components.Input.defaultProps.variant, L = WP({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: T,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = x, $ = ["color", "check"];
  $.includes(x) || (K = "color");
  var A = h || g || "blue";
  typeof A != "string" && (A = "blue");
  var j = ld({
    // Allow overriding of custom components
    components: ld({}, fY, o),
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
const vY = mY;
function Im() {
  return Im = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Im.apply(this, arguments);
}
var gY = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = vY(e);
  return /* @__PURE__ */ re.createElement(bK, Im({
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
    ke && n(ke.listAll() ?? []);
  }, []), v.useEffect(() => {
    var d;
    s(
      ((d = e.tags) == null ? void 0 : d.map((f) => ({
        value: f,
        label: f
      }))) ?? []
    );
  }, [e.tags]), ke == null)
    return alert("Error: TagsTable is not loaded"), null;
  const l = t.map((d) => ({
    value: d.name,
    label: d.name
  })), u = 37 * 5;
  return /* @__PURE__ */ S.jsxs(Vg, { isLazy: !0, children: [
    /* @__PURE__ */ S.jsx(Ng, { children: /* @__PURE__ */ S.jsx(jn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ S.jsx(P_, { color: "#718096" }) }) }),
    /* @__PURE__ */ S.jsxs(Ug, { children: [
      /* @__PURE__ */ S.jsx(Bg, {}),
      /* @__PURE__ */ S.jsx(Hg, {}),
      /* @__PURE__ */ S.jsx(v_, { children: /* @__PURE__ */ S.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ S.jsxs(Wg, { children: [
        /* @__PURE__ */ S.jsx(
          yY,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            onChange: (d) => {
              s(d), wm(e.id, {
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
        /* @__PURE__ */ S.jsxs(
          _t,
          {
            gap: 4,
            mt: Math.min(u, Math.max(t.length, 3) * 37),
            children: [
              /* @__PURE__ */ S.jsx(
                nf,
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
              /* @__PURE__ */ S.jsx(
                jn,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ S.jsx(k_, { size: 16 }),
                  colorScheme: "teal",
                  variant: "solid",
                  size: "xs",
                  px: 5,
                  isDisabled: r.length === 0,
                  onClick: () => {
                    ke == null || ke.upsert(r), n((ke == null ? void 0 : ke.listAll()) ?? []), o("");
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
function xY({
  menuPosition: e,
  workflowID: t,
  onClose: n
}) {
  const { onDuplicateWorkflow: r } = v.useContext(Kg);
  return /* @__PURE__ */ S.jsx(S.Fragment, { children: /* @__PURE__ */ S.jsx($e, { position: "absolute", top: e.y, left: e.x, children: /* @__PURE__ */ S.jsx(El, { isOpen: !0, onClose: n, children: /* @__PURE__ */ S.jsx(af, { children: /* @__PURE__ */ S.jsx(
    Ni,
    {
      onClick: () => r && r(t),
      children: "Duplicate"
    }
  ) }) }) }) });
}
function SY({
  isSelected: e,
  workflow: t,
  loadWorkflowID: n,
  onDelete: r
}) {
  const { colorMode: o } = _a(), [i, a] = v.useState({ x: 0, y: 0 }), [s, l] = v.useState(!1), u = (d) => {
    d.preventDefault(), a({ x: d.clientX, y: d.clientY }), l(!0);
  }, c = () => {
    l(!1);
  };
  return /* @__PURE__ */ S.jsxs(
    _t,
    {
      w: "100%",
      justify: "space-between",
      onContextMenu: u,
      children: [
        /* @__PURE__ */ S.jsxs(
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
              /* @__PURE__ */ S.jsx(nr, { fontWeight: "500", children: t.name ?? "untitled" }),
              /* @__PURE__ */ S.jsxs(nr, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                "Updated: ",
                E_(t.updateTime)
              ] })
            ]
          }
        ),
        s && /* @__PURE__ */ S.jsx(
          xY,
          {
            menuPosition: i,
            onClose: c,
            workflowID: t.id
          }
        ),
        /* @__PURE__ */ S.jsx(bY, { workflow: t }),
        /* @__PURE__ */ S.jsx(Vg, { isLazy: !0, children: ({ isOpen: d, onClose: f }) => /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx(Ng, { children: /* @__PURE__ */ S.jsx(__, { color: "#F56565", cursor: "pointer" }) }),
          /* @__PURE__ */ S.jsxs(Ug, { children: [
            /* @__PURE__ */ S.jsx(Bg, {}),
            /* @__PURE__ */ S.jsx(Hg, {}),
            /* @__PURE__ */ S.jsxs(Wg, { children: [
              /* @__PURE__ */ S.jsx(nr, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
              /* @__PURE__ */ S.jsx(
                jn,
                {
                  colorScheme: "red",
                  size: "sm",
                  onClick: () => {
                    r(t.id), f();
                  },
                  children: "Yes, delete"
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
function wY() {
  const e = v.useRef(null), { setRecentFiles: t } = v.useContext(M_), n = async (o) => {
    const i = o.target.files;
    if (!i)
      return;
    const a = Array.from(i);
    console.log("filearr", a), await Promise.all(
      a.map((s) => r(s))
    ), t && t(ac());
  }, r = async (o) => new Promise((i, a) => {
    const s = new FileReader();
    s.onload = (l) => {
      var u;
      try {
        const c = (u = l.target) == null ? void 0 : u.result;
        typeof c == "string" ? i(
          ic({
            json: c,
            name: o.name.replace(".json", "")
          })
        ) : a(new Error("File content is not a string"));
      } catch (c) {
        a(c);
      }
    }, s.onerror = a, s.readAsText(o);
  });
  return /* @__PURE__ */ S.jsxs(
    jn,
    {
      leftIcon: /* @__PURE__ */ S.jsx(aH, {}),
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
        /* @__PURE__ */ S.jsx(
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
const Nx = 6;
function CY({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n
}) {
  const [r, o] = v.useState([]), { curFlowID: i } = v.useContext(Kg), [a, s] = v.useState(), [l, u] = v.useState(!1), c = v.useRef(
    window.localStorage.getItem(bx) ?? Ur.RECENTLY_MODIFIED
  ), d = (m) => {
    s(m), o(ac().filter((x) => {
      var h;
      return (h = x.tags) == null ? void 0 : h.includes(m);
    }));
  }, f = () => {
    const m = ac(c.current);
    o(m);
  }, p = (m) => {
    o(O_(r, m)), c.current = m, window.localStorage.setItem(bx, m);
  }, y = (m) => {
    _H(m), f();
  };
  return v.useEffect(() => {
    f();
  }, [i]), /* @__PURE__ */ S.jsx(
    M_.Provider,
    {
      value: {
        setRecentFiles: o
      },
      children: /* @__PURE__ */ S.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ S.jsxs(
        zW,
        {
          isOpen: !0,
          placement: "left",
          onClose: () => e(),
          size: "sm",
          children: [
            /* @__PURE__ */ S.jsx(Il, {}),
            /* @__PURE__ */ S.jsxs(m_, { children: [
              /* @__PURE__ */ S.jsx(Ml, { children: /* @__PURE__ */ S.jsxs(_t, { alignItems: "center", justifyContent: "space-between", children: [
                /* @__PURE__ */ S.jsxs(_t, { gap: 4, children: [
                  /* @__PURE__ */ S.jsx(nr, { mr: 4, children: "Workflows" }),
                  /* @__PURE__ */ S.jsx(wY, {})
                ] }),
                /* @__PURE__ */ S.jsx(_t, { alignItems: "center", children: /* @__PURE__ */ S.jsx(RH, {}) })
              ] }) }),
              /* @__PURE__ */ S.jsxs(Rl, { children: [
                /* @__PURE__ */ S.jsxs(_t, { spacing: 2, wrap: "wrap", mb: 0, children: [
                  a != null && /* @__PURE__ */ S.jsx(
                    il,
                    {
                      "aria-label": "Close",
                      size: "sm",
                      icon: /* @__PURE__ */ S.jsx(pH, {}),
                      onClick: () => {
                        s(void 0), o(ac());
                      }
                    }
                  ),
                  ke == null ? void 0 : ke.listAll().slice(0, l ? void 0 : Nx).map((m) => /* @__PURE__ */ S.jsx(
                    jn,
                    {
                      variant: "solid",
                      width: "auto",
                      flexShrink: 0,
                      size: "sm",
                      py: 4,
                      onClick: () => d(m.name),
                      isActive: a === m.name,
                      children: m.name
                    }
                  )),
                  ((ke == null ? void 0 : ke.listAll().length) ?? 0) > Nx && /* @__PURE__ */ S.jsx(
                    il,
                    {
                      "aria-label": "Show-all-tags",
                      size: "sm",
                      icon: l ? /* @__PURE__ */ S.jsx(iH, {}) : /* @__PURE__ */ S.jsx(gx, {}),
                      onClick: () => u(!l)
                    }
                  )
                ] }),
                /* @__PURE__ */ S.jsx(_t, { mb: 2, p: 0, justifyContent: "end", children: /* @__PURE__ */ S.jsxs(El, { closeOnSelect: !0, children: [
                  /* @__PURE__ */ S.jsx(
                    jg,
                    {
                      as: jn,
                      variant: "ghost",
                      size: "xs",
                      pr: 0,
                      rightIcon: /* @__PURE__ */ S.jsx(gx, { size: "16" }),
                      children: /* @__PURE__ */ S.jsxs(_t, { children: [
                        /* @__PURE__ */ S.jsx(nr, { children: "Sort by:" }),
                        /* @__PURE__ */ S.jsx(nr, { display: "inline-block", children: c.current })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ S.jsx(af, { children: /* @__PURE__ */ S.jsx(
                    o_,
                    {
                      value: c.current,
                      type: "radio",
                      onChange: (m) => p(m),
                      children: Object.values(Ur).map((m, x) => /* @__PURE__ */ S.jsx(zg, { value: m, children: m }, x))
                    }
                  ) })
                ] }) }),
                r.map((m) => /* @__PURE__ */ S.jsx(
                  SY,
                  {
                    isSelected: m.id === i,
                    workflow: m,
                    loadWorkflowID: t,
                    onDelete: y
                  }
                ))
              ] })
            ] })
          ]
        }
      ) })
    }
  );
}
const kY = {
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
function PY() {
  const e = v.useRef({}), [t, n] = v.useState(null), [r, o] = v.useState("root"), [i, a] = v.useState(!0), [s, l] = v.useState(null), u = v.useRef(null), c = (h) => {
    u.current = h, l(h);
  }, d = async () => {
    var b;
    const h = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(w) {
      },
      async addCustomNodeDefs(w) {
        e.current = w;
      }
    };
    $a.registerExtension(h);
    try {
      await PH();
    } catch (w) {
      console.error("error loading db", w);
    }
    a(!1);
    const g = localStorage.getItem("curFlowID");
    if (g)
      c(g), Se && n(((b = Se[g]) == null ? void 0 : b.name) ?? "");
    else {
      const w = localStorage.getItem("workflow"), k = ic({ json: w ?? "" });
      c(k.id), n(k.name ?? "");
    }
  };
  v.useEffect(() => {
    d(), setInterval(() => {
      if (u.current != null) {
        const h = JSON.stringify($a.graph.serialize());
        localStorage.setItem("curFlowID", u.current), h != null && wm(u.current, {
          json: h
        });
      }
    }, 1e3);
  }, []);
  const f = (h) => {
    u.current != null && wm(u.current, {
      name: h
    });
  }, p = v.useCallback(
    oI(f, 700),
    []
  ), y = (h) => {
    if (Se == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    c(h);
    const g = Se[h];
    if (g == null) {
      alert("Error: Workflow not found! id: " + h);
      return;
    }
    $a.loadGraphData(JSON.parse(g.json)), n(g.name), o("root");
  }, m = () => {
    const h = kY, g = ic({ json: JSON.stringify(h) });
    c(g.id), n(g.name), $a.loadGraphData(h);
  }, x = (h) => {
    if (Se == null)
      return;
    const g = Se[h];
    if (g == null)
      return;
    const b = ic({
      json: g.json,
      name: g.name + " 1"
    });
    c(b.id), n(b.name), $a.loadGraphData(JSON.parse(b.json));
  };
  return i ? null : /* @__PURE__ */ S.jsx(
    Kg.Provider,
    {
      value: { curFlowID: s, onDuplicateWorkflow: x },
      children: /* @__PURE__ */ S.jsxs(
        $e,
        {
          style: {
            width: "100vh",
            position: "absolute",
            top: 0,
            left: 0
          },
          children: [
            /* @__PURE__ */ S.jsx(
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
                children: /* @__PURE__ */ S.jsxs(_t, { children: [
                  /* @__PURE__ */ S.jsx(
                    jn,
                    {
                      size: "sm",
                      "aria-label": "workspace folder",
                      onClick: () => o("recentFlows"),
                      children: /* @__PURE__ */ S.jsxs(_t, { gap: 1, children: [
                        /* @__PURE__ */ S.jsx(C_, { size: 21 }),
                        /* @__PURE__ */ S.jsx(fH, { size: 8 })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ S.jsx(
                    jn,
                    {
                      size: "sm",
                      variant: "outline",
                      colorScheme: "teal",
                      "aria-label": "workspace folder",
                      onClick: () => m(),
                      px: 2.5,
                      children: /* @__PURE__ */ S.jsxs(_t, { gap: 1, children: [
                        /* @__PURE__ */ S.jsx(k_, { size: 16, color: "white" }),
                        /* @__PURE__ */ S.jsx(nr, { color: "white", fontSize: "sm", children: "New" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ S.jsx(
                    nf,
                    {
                      variant: "unstyled",
                      placeholder: "Workflow name",
                      color: "white",
                      value: t ?? "",
                      maxWidth: 470,
                      onChange: (h) => {
                        n(h.target.value), p(h.target.value);
                      },
                      style: { width: `${(t == null ? void 0 : t.length) ?? 20}ch` }
                    }
                  )
                ] })
              }
            ),
            r === "recentFlows" && /* @__PURE__ */ S.jsx(
              CY,
              {
                onclose: () => o("root"),
                loadWorkflowID: y,
                onClickNewFlow: () => {
                  m(), o("root");
                }
              }
            )
          ]
        }
      )
    }
  );
}
const lT = document.createElement("div");
document.body.append(lT);
const _Y = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, TY = l3({ config: _Y });
Up.createRoot(lT).render(
  /* @__PURE__ */ S.jsx(re.StrictMode, { children: /* @__PURE__ */ S.jsxs(_B, { children: [
    /* @__PURE__ */ S.jsx(bR, { initialColorMode: TY.config.initialColorMode }),
    /* @__PURE__ */ S.jsx(PY, {})
  ] }) })
);
const Rm = document.body, EY = { attributes: !0, attributeFilter: ["class"] }, OY = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of Rm.classList)
        r.includes("chakra") && Rm.classList.remove(r);
}, MY = new MutationObserver(OY);
MY.observe(Rm, EY);
