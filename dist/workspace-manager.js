import { app as Rl } from "/scripts/app.js";
function G_(e, t) {
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
var Hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function il(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var TS = { exports: {} }, Xc = {}, _S = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al = Symbol.for("react.element"), K_ = Symbol.for("react.portal"), Y_ = Symbol.for("react.fragment"), q_ = Symbol.for("react.strict_mode"), X_ = Symbol.for("react.profiler"), Q_ = Symbol.for("react.provider"), Z_ = Symbol.for("react.context"), J_ = Symbol.for("react.forward_ref"), eE = Symbol.for("react.suspense"), tE = Symbol.for("react.memo"), nE = Symbol.for("react.lazy"), t0 = Symbol.iterator;
function rE(e) {
  return e === null || typeof e != "object" ? null : (e = t0 && e[t0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ES = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, OS = Object.assign, MS = {};
function ya(e, t, n) {
  this.props = e, this.context = t, this.refs = MS, this.updater = n || ES;
}
ya.prototype.isReactComponent = {};
ya.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ya.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function IS() {
}
IS.prototype = ya.prototype;
function ym(e, t, n) {
  this.props = e, this.context = t, this.refs = MS, this.updater = n || ES;
}
var bm = ym.prototype = new IS();
bm.constructor = ym;
OS(bm, ya.prototype);
bm.isPureReactComponent = !0;
var n0 = Array.isArray, RS = Object.prototype.hasOwnProperty, Sm = { current: null }, $S = { key: !0, ref: !0, __self: !0, __source: !0 };
function AS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      RS.call(t, r) && !$S.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: al, type: e, key: i, ref: a, props: o, _owner: Sm.current };
}
function oE(e, t) {
  return { $$typeof: al, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === al;
}
function iE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var r0 = /\/+/g;
function lf(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? iE("" + e.key) : t.toString(36);
}
function bu(e, t, n, r, o) {
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
          case al:
          case K_:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + lf(a, 0) : r, n0(o) ? (n = "", e != null && (n = e.replace(r0, "$&/") + "/"), bu(o, t, n, "", function(u) {
      return u;
    })) : o != null && (xm(o) && (o = oE(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(r0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", n0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + lf(i, s);
      a += bu(i, t, n, l, o);
    }
  else if (l = rE(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + lf(i, s++), a += bu(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function $l(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return bu(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function aE(e) {
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
var Ot = { current: null }, Su = { transition: null }, sE = { ReactCurrentDispatcher: Ot, ReactCurrentBatchConfig: Su, ReactCurrentOwner: Sm };
ue.Children = { map: $l, forEach: function(e, t, n) {
  $l(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return $l(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return $l(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!xm(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = ya;
ue.Fragment = Y_;
ue.Profiler = X_;
ue.PureComponent = ym;
ue.StrictMode = q_;
ue.Suspense = eE;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = OS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Sm.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      RS.call(t, l) && !$S.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: al, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ue.createContext = function(e) {
  return e = { $$typeof: Z_, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Q_, _context: e }, e.Consumer = e;
};
ue.createElement = AS;
ue.createFactory = function(e) {
  var t = AS.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: J_, render: e };
};
ue.isValidElement = xm;
ue.lazy = function(e) {
  return { $$typeof: nE, _payload: { _status: -1, _result: e }, _init: aE };
};
ue.memo = function(e, t) {
  return { $$typeof: tE, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = Su.transition;
  Su.transition = {};
  try {
    e();
  } finally {
    Su.transition = t;
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
_S.exports = ue;
var y = _S.exports;
const re = /* @__PURE__ */ il(y), o0 = /* @__PURE__ */ G_({
  __proto__: null,
  default: re
}, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lE = y, uE = Symbol.for("react.element"), cE = Symbol.for("react.fragment"), dE = Object.prototype.hasOwnProperty, fE = lE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pE = { key: !0, ref: !0, __self: !0, __source: !0 };
function DS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    dE.call(t, r) && !pE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: uE, type: e, key: i, ref: a, props: o, _owner: fE.current };
}
Xc.Fragment = cE;
Xc.jsx = DS;
Xc.jsxs = DS;
TS.exports = Xc;
var w = TS.exports, Ip = {}, FS = { exports: {} }, en = {}, LS = { exports: {} }, zS = {};
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
        for (var V = 0, Y = A.length, N = Y >>> 1; V < N; ) {
          var te = 2 * (V + 1) - 1, le = A[te], ie = te + 1, se = A[ie];
          if (0 > o(le, U))
            ie < Y && 0 > o(se, le) ? (A[V] = se, A[ie] = U, V = ie) : (A[V] = le, A[te] = U, V = te);
          else if (ie < Y && 0 > o(se, U))
            A[V] = se, A[ie] = U, V = ie;
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, v = !1, g = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(A) {
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
    if (g = !1, b(A), !v)
      if (n(l) !== null)
        v = !0, K(k);
      else {
        var z = n(u);
        z !== null && $(x, z.startTime - A);
      }
  }
  function k(A, z) {
    v = !1, g && (g = !1, m(_), _ = -1), p = !0;
    var U = f;
    try {
      for (b(z), d = n(l); d !== null && (!(d.expirationTime > z) || A && !D()); ) {
        var V = d.callback;
        if (typeof V == "function") {
          d.callback = null, f = d.priorityLevel;
          var Y = V(d.expirationTime <= z);
          z = e.unstable_now(), typeof Y == "function" ? d.callback = Y : d === n(l) && r(l), b(z);
        } else
          r(l);
        d = n(l);
      }
      if (d !== null)
        var N = !0;
      else {
        var te = n(u);
        te !== null && $(x, te.startTime - z), N = !1;
      }
      return N;
    } finally {
      d = null, f = U, p = !1;
    }
  }
  var P = !1, T = null, _ = -1, M = 5, I = -1;
  function D() {
    return !(e.unstable_now() - I < M);
  }
  function G() {
    if (T !== null) {
      var A = e.unstable_now();
      I = A;
      var z = !0;
      try {
        z = T(!0, A);
      } finally {
        z ? H() : (P = !1, T = null);
      }
    } else
      P = !1;
  }
  var H;
  if (typeof h == "function")
    H = function() {
      h(G);
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
    T = A, P || (P = !0, H());
  }
  function $(A, z) {
    _ = S(function() {
      A(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    v || p || (v = !0, K(k));
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
    return Y = U + Y, A = { id: c++, callback: z, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (g ? (m(_), _ = -1) : g = !0, $(x, U - V))) : (A.sortIndex = Y, t(l, A), v || p || (v = !0, K(k))), A;
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
})(zS);
LS.exports = zS;
var hE = LS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NS = y, Qt = hE;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var jS = /* @__PURE__ */ new Set(), Ts = {};
function qo(e, t) {
  Zi(e, t), Zi(e + "Capture", t);
}
function Zi(e, t) {
  for (Ts[e] = t, e = 0; e < t.length; e++)
    jS.add(t[e]);
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Rp = Object.prototype.hasOwnProperty, mE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, i0 = {}, a0 = {};
function vE(e) {
  return Rp.call(a0, e) ? !0 : Rp.call(i0, e) ? !1 : mE.test(e) ? a0[e] = !0 : (i0[e] = !0, !1);
}
function gE(e, t, n, r) {
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
function yE(e, t, n, r) {
  if (t === null || typeof t > "u" || gE(e, t, n, r))
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
var wm = /[\-:]([a-z])/g;
function Cm(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    wm,
    Cm
  );
  ht[t] = new Mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(wm, Cm);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(wm, Cm);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new Mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function km(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yE(t, n, o, r) && (n = null), r || o === null ? vE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Er = NS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Al = Symbol.for("react.element"), pi = Symbol.for("react.portal"), hi = Symbol.for("react.fragment"), Pm = Symbol.for("react.strict_mode"), $p = Symbol.for("react.profiler"), VS = Symbol.for("react.provider"), BS = Symbol.for("react.context"), Tm = Symbol.for("react.forward_ref"), Ap = Symbol.for("react.suspense"), Dp = Symbol.for("react.suspense_list"), _m = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), WS = Symbol.for("react.offscreen"), s0 = Symbol.iterator;
function Ea(e) {
  return e === null || typeof e != "object" ? null : (e = s0 && e[s0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ne = Object.assign, uf;
function Ua(e) {
  if (uf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      uf = t && t[1] || "";
    }
  return `
` + uf + e;
}
var cf = !1;
function df(e, t) {
  if (!e || cf)
    return "";
  cf = !0;
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
    cf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ua(e) : "";
}
function bE(e) {
  switch (e.tag) {
    case 5:
      return Ua(e.type);
    case 16:
      return Ua("Lazy");
    case 13:
      return Ua("Suspense");
    case 19:
      return Ua("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = df(e.type, !1), e;
    case 11:
      return e = df(e.type.render, !1), e;
    case 1:
      return e = df(e.type, !0), e;
    default:
      return "";
  }
}
function Fp(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case hi:
      return "Fragment";
    case pi:
      return "Portal";
    case $p:
      return "Profiler";
    case Pm:
      return "StrictMode";
    case Ap:
      return "Suspense";
    case Dp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case BS:
        return (e.displayName || "Context") + ".Consumer";
      case VS:
        return (e._context.displayName || "Context") + ".Provider";
      case Tm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case _m:
        return t = e.displayName || null, t !== null ? t : Fp(e.type) || "Memo";
      case zr:
        t = e._payload, e = e._init;
        try {
          return Fp(e(t));
        } catch {
        }
    }
  return null;
}
function SE(e) {
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
      return Fp(t);
    case 8:
      return t === Pm ? "StrictMode" : "Mode";
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
function oo(e) {
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
function HS(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function xE(e) {
  var t = HS(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Dl(e) {
  e._valueTracker || (e._valueTracker = xE(e));
}
function US(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = HS(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function qu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lp(e, t) {
  var n = t.checked;
  return Ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function l0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = oo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function GS(e, t) {
  t = t.checked, t != null && km(e, "checked", t, !1);
}
function zp(e, t) {
  GS(e, t);
  var n = oo(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Np(e, t.type, n) : t.hasOwnProperty("defaultValue") && Np(e, t.type, oo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function u0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Np(e, t, n) {
  (t !== "number" || qu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ga = Array.isArray;
function zi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + oo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function jp(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function c0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(F(92));
      if (Ga(n)) {
        if (1 < n.length)
          throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: oo(n) };
}
function KS(e, t) {
  var n = oo(t.value), r = oo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function d0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function YS(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vp(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? YS(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Fl, qS = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Fl = Fl || document.createElement("div"), Fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Fl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function _s(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rs = {
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
}, wE = ["Webkit", "ms", "Moz", "O"];
Object.keys(rs).forEach(function(e) {
  wE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), rs[t] = rs[e];
  });
});
function XS(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || rs.hasOwnProperty(e) && rs[e] ? ("" + t).trim() : t + "px";
}
function QS(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = XS(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var CE = Ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Bp(e, t) {
  if (t) {
    if (CE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Wp(e, t) {
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
var Hp = null;
function Em(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Up = null, Ni = null, ji = null;
function f0(e) {
  if (e = ul(e)) {
    if (typeof Up != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = td(t), Up(e.stateNode, e.type, t));
  }
}
function ZS(e) {
  Ni ? ji ? ji.push(e) : ji = [e] : Ni = e;
}
function JS() {
  if (Ni) {
    var e = Ni, t = ji;
    if (ji = Ni = null, f0(e), t)
      for (e = 0; e < t.length; e++)
        f0(t[e]);
  }
}
function ex(e, t) {
  return e(t);
}
function tx() {
}
var ff = !1;
function nx(e, t, n) {
  if (ff)
    return e(t, n);
  ff = !0;
  try {
    return ex(e, t, n);
  } finally {
    ff = !1, (Ni !== null || ji !== null) && (tx(), JS());
  }
}
function Es(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = td(n);
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
var Gp = !1;
if (xr)
  try {
    var Oa = {};
    Object.defineProperty(Oa, "passive", { get: function() {
      Gp = !0;
    } }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
  } catch {
    Gp = !1;
  }
function kE(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var os = !1, Xu = null, Qu = !1, Kp = null, PE = { onError: function(e) {
  os = !0, Xu = e;
} };
function TE(e, t, n, r, o, i, a, s, l) {
  os = !1, Xu = null, kE.apply(PE, arguments);
}
function _E(e, t, n, r, o, i, a, s, l) {
  if (TE.apply(this, arguments), os) {
    if (os) {
      var u = Xu;
      os = !1, Xu = null;
    } else
      throw Error(F(198));
    Qu || (Qu = !0, Kp = u);
  }
}
function Xo(e) {
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
function rx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function p0(e) {
  if (Xo(e) !== e)
    throw Error(F(188));
}
function EE(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Xo(e), t === null)
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
          return p0(o), e;
        if (i === r)
          return p0(o), t;
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
function ox(e) {
  return e = EE(e), e !== null ? ix(e) : null;
}
function ix(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = ix(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var ax = Qt.unstable_scheduleCallback, h0 = Qt.unstable_cancelCallback, OE = Qt.unstable_shouldYield, ME = Qt.unstable_requestPaint, Ke = Qt.unstable_now, IE = Qt.unstable_getCurrentPriorityLevel, Om = Qt.unstable_ImmediatePriority, sx = Qt.unstable_UserBlockingPriority, Zu = Qt.unstable_NormalPriority, RE = Qt.unstable_LowPriority, lx = Qt.unstable_IdlePriority, Qc = null, Qn = null;
function $E(e) {
  if (Qn && typeof Qn.onCommitFiberRoot == "function")
    try {
      Qn.onCommitFiberRoot(Qc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $n = Math.clz32 ? Math.clz32 : FE, AE = Math.log, DE = Math.LN2;
function FE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (AE(e) / DE | 0) | 0;
}
var Ll = 64, zl = 4194304;
function Ka(e) {
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
function Ju(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Ka(s) : (i &= a, i !== 0 && (r = Ka(i)));
  } else
    a = n & ~o, a !== 0 ? r = Ka(a) : i !== 0 && (r = Ka(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - $n(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function LE(e, t) {
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
function zE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - $n(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = LE(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Yp(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ux() {
  var e = Ll;
  return Ll <<= 1, !(Ll & 4194240) && (Ll = 64), e;
}
function pf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function sl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $n(t), e[t] = n;
}
function NE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $n(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Mm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $n(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var xe = 0;
function cx(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var dx, Im, fx, px, hx, qp = !1, Nl = [], Kr = null, Yr = null, qr = null, Os = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Vr = [], jE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function m0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kr = null;
      break;
    case "dragenter":
    case "dragleave":
      Yr = null;
      break;
    case "mouseover":
    case "mouseout":
      qr = null;
      break;
    case "pointerover":
    case "pointerout":
      Os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ms.delete(t.pointerId);
  }
}
function Ma(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ul(t), t !== null && Im(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function VE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kr = Ma(Kr, e, t, n, r, o), !0;
    case "dragenter":
      return Yr = Ma(Yr, e, t, n, r, o), !0;
    case "mouseover":
      return qr = Ma(qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Os.set(i, Ma(Os.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ms.set(i, Ma(Ms.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function mx(e) {
  var t = Oo(e.target);
  if (t !== null) {
    var n = Xo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = rx(n), t !== null) {
          e.blockedOn = t, hx(e.priority, function() {
            fx(n);
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
function xu(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Hp = r, n.target.dispatchEvent(r), Hp = null;
    } else
      return t = ul(n), t !== null && Im(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function v0(e, t, n) {
  xu(e) && n.delete(t);
}
function BE() {
  qp = !1, Kr !== null && xu(Kr) && (Kr = null), Yr !== null && xu(Yr) && (Yr = null), qr !== null && xu(qr) && (qr = null), Os.forEach(v0), Ms.forEach(v0);
}
function Ia(e, t) {
  e.blockedOn === t && (e.blockedOn = null, qp || (qp = !0, Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority, BE)));
}
function Is(e) {
  function t(o) {
    return Ia(o, e);
  }
  if (0 < Nl.length) {
    Ia(Nl[0], e);
    for (var n = 1; n < Nl.length; n++) {
      var r = Nl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kr !== null && Ia(Kr, e), Yr !== null && Ia(Yr, e), qr !== null && Ia(qr, e), Os.forEach(t), Ms.forEach(t), n = 0; n < Vr.length; n++)
    r = Vr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vr.length && (n = Vr[0], n.blockedOn === null); )
    mx(n), n.blockedOn === null && Vr.shift();
}
var Vi = Er.ReactCurrentBatchConfig, ec = !0;
function WE(e, t, n, r) {
  var o = xe, i = Vi.transition;
  Vi.transition = null;
  try {
    xe = 1, Rm(e, t, n, r);
  } finally {
    xe = o, Vi.transition = i;
  }
}
function HE(e, t, n, r) {
  var o = xe, i = Vi.transition;
  Vi.transition = null;
  try {
    xe = 4, Rm(e, t, n, r);
  } finally {
    xe = o, Vi.transition = i;
  }
}
function Rm(e, t, n, r) {
  if (ec) {
    var o = Xp(e, t, n, r);
    if (o === null)
      Cf(e, t, r, tc, n), m0(e, r);
    else if (VE(o, e, t, n, r))
      r.stopPropagation();
    else if (m0(e, r), t & 4 && -1 < jE.indexOf(e)) {
      for (; o !== null; ) {
        var i = ul(o);
        if (i !== null && dx(i), i = Xp(e, t, n, r), i === null && Cf(e, t, r, tc, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Cf(e, t, r, null, n);
  }
}
var tc = null;
function Xp(e, t, n, r) {
  if (tc = null, e = Em(r), e = Oo(e), e !== null)
    if (t = Xo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = rx(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return tc = e, null;
}
function vx(e) {
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
      switch (IE()) {
        case Om:
          return 1;
        case sx:
          return 4;
        case Zu:
        case RE:
          return 16;
        case lx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ur = null, $m = null, wu = null;
function gx() {
  if (wu)
    return wu;
  var e, t = $m, n = t.length, r, o = "value" in Ur ? Ur.value : Ur.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return wu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Cu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function jl() {
  return !0;
}
function g0() {
  return !1;
}
function tn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? jl : g0, this.isPropagationStopped = g0, this;
  }
  return Ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = jl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = jl);
  }, persist: function() {
  }, isPersistent: jl }), t;
}
var ba = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Am = tn(ba), ll = Ne({}, ba, { view: 0, detail: 0 }), UE = tn(ll), hf, mf, Ra, Zc = Ne({}, ll, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ra && (Ra && e.type === "mousemove" ? (hf = e.screenX - Ra.screenX, mf = e.screenY - Ra.screenY) : mf = hf = 0, Ra = e), hf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : mf;
} }), y0 = tn(Zc), GE = Ne({}, Zc, { dataTransfer: 0 }), KE = tn(GE), YE = Ne({}, ll, { relatedTarget: 0 }), vf = tn(YE), qE = Ne({}, ba, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), XE = tn(qE), QE = Ne({}, ba, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ZE = tn(QE), JE = Ne({}, ba, { data: 0 }), b0 = tn(JE), eO = {
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
}, tO = {
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
}, nO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function rO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nO[e]) ? !!t[e] : !1;
}
function Dm() {
  return rO;
}
var oO = Ne({}, ll, { key: function(e) {
  if (e.key) {
    var t = eO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Cu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dm, charCode: function(e) {
  return e.type === "keypress" ? Cu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Cu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), iO = tn(oO), aO = Ne({}, Zc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), S0 = tn(aO), sO = Ne({}, ll, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dm }), lO = tn(sO), uO = Ne({}, ba, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cO = tn(uO), dO = Ne({}, Zc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), fO = tn(dO), pO = [9, 13, 27, 32], Fm = xr && "CompositionEvent" in window, is = null;
xr && "documentMode" in document && (is = document.documentMode);
var hO = xr && "TextEvent" in window && !is, yx = xr && (!Fm || is && 8 < is && 11 >= is), x0 = " ", w0 = !1;
function bx(e, t) {
  switch (e) {
    case "keyup":
      return pO.indexOf(t.keyCode) !== -1;
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
function Sx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mi = !1;
function mO(e, t) {
  switch (e) {
    case "compositionend":
      return Sx(t);
    case "keypress":
      return t.which !== 32 ? null : (w0 = !0, x0);
    case "textInput":
      return e = t.data, e === x0 && w0 ? null : e;
    default:
      return null;
  }
}
function vO(e, t) {
  if (mi)
    return e === "compositionend" || !Fm && bx(e, t) ? (e = gx(), wu = $m = Ur = null, mi = !1, e) : null;
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
      return yx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function C0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gO[e.type] : t === "textarea";
}
function xx(e, t, n, r) {
  ZS(r), t = nc(t, "onChange"), 0 < t.length && (n = new Am("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var as = null, Rs = null;
function yO(e) {
  Rx(e, 0);
}
function Jc(e) {
  var t = yi(e);
  if (US(t))
    return e;
}
function bO(e, t) {
  if (e === "change")
    return t;
}
var wx = !1;
if (xr) {
  var gf;
  if (xr) {
    var yf = "oninput" in document;
    if (!yf) {
      var k0 = document.createElement("div");
      k0.setAttribute("oninput", "return;"), yf = typeof k0.oninput == "function";
    }
    gf = yf;
  } else
    gf = !1;
  wx = gf && (!document.documentMode || 9 < document.documentMode);
}
function P0() {
  as && (as.detachEvent("onpropertychange", Cx), Rs = as = null);
}
function Cx(e) {
  if (e.propertyName === "value" && Jc(Rs)) {
    var t = [];
    xx(t, Rs, e, Em(e)), nx(yO, t);
  }
}
function SO(e, t, n) {
  e === "focusin" ? (P0(), as = t, Rs = n, as.attachEvent("onpropertychange", Cx)) : e === "focusout" && P0();
}
function xO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Jc(Rs);
}
function wO(e, t) {
  if (e === "click")
    return Jc(t);
}
function CO(e, t) {
  if (e === "input" || e === "change")
    return Jc(t);
}
function kO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zn = typeof Object.is == "function" ? Object.is : kO;
function $s(e, t) {
  if (zn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Rp.call(t, o) || !zn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function T0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function _0(e, t) {
  var n = T0(e);
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
    n = T0(n);
  }
}
function kx(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Px() {
  for (var e = window, t = qu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = qu(e.document);
  }
  return t;
}
function Lm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function PO(e) {
  var t = Px(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && kx(n.ownerDocument.documentElement, n)) {
    if (r !== null && Lm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = _0(n, i);
        var a = _0(
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
var TO = xr && "documentMode" in document && 11 >= document.documentMode, vi = null, Qp = null, ss = null, Zp = !1;
function E0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zp || vi == null || vi !== qu(r) || (r = vi, "selectionStart" in r && Lm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ss && $s(ss, r) || (ss = r, r = nc(Qp, "onSelect"), 0 < r.length && (t = new Am("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vi)));
}
function Vl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var gi = { animationend: Vl("Animation", "AnimationEnd"), animationiteration: Vl("Animation", "AnimationIteration"), animationstart: Vl("Animation", "AnimationStart"), transitionend: Vl("Transition", "TransitionEnd") }, bf = {}, Tx = {};
xr && (Tx = document.createElement("div").style, "AnimationEvent" in window || (delete gi.animationend.animation, delete gi.animationiteration.animation, delete gi.animationstart.animation), "TransitionEvent" in window || delete gi.transitionend.transition);
function ed(e) {
  if (bf[e])
    return bf[e];
  if (!gi[e])
    return e;
  var t = gi[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Tx)
      return bf[e] = t[n];
  return e;
}
var _x = ed("animationend"), Ex = ed("animationiteration"), Ox = ed("animationstart"), Mx = ed("transitionend"), Ix = /* @__PURE__ */ new Map(), O0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function uo(e, t) {
  Ix.set(e, t), qo(t, [e]);
}
for (var Sf = 0; Sf < O0.length; Sf++) {
  var xf = O0[Sf], _O = xf.toLowerCase(), EO = xf[0].toUpperCase() + xf.slice(1);
  uo(_O, "on" + EO);
}
uo(_x, "onAnimationEnd");
uo(Ex, "onAnimationIteration");
uo(Ox, "onAnimationStart");
uo("dblclick", "onDoubleClick");
uo("focusin", "onFocus");
uo("focusout", "onBlur");
uo(Mx, "onTransitionEnd");
Zi("onMouseEnter", ["mouseout", "mouseover"]);
Zi("onMouseLeave", ["mouseout", "mouseover"]);
Zi("onPointerEnter", ["pointerout", "pointerover"]);
Zi("onPointerLeave", ["pointerout", "pointerover"]);
qo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ya = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), OO = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));
function M0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _E(r, t, void 0, e), e.currentTarget = null;
}
function Rx(e, t) {
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
          M0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          M0(o, s, u), i = l;
        }
    }
  }
  if (Qu)
    throw e = Kp, Qu = !1, Kp = null, e;
}
function Ee(e, t) {
  var n = t[rh];
  n === void 0 && (n = t[rh] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || ($x(t, e, 2, !1), n.add(r));
}
function wf(e, t, n) {
  var r = 0;
  t && (r |= 4), $x(n, e, r, t);
}
var Bl = "_reactListening" + Math.random().toString(36).slice(2);
function As(e) {
  if (!e[Bl]) {
    e[Bl] = !0, jS.forEach(function(n) {
      n !== "selectionchange" && (OO.has(n) || wf(n, !1, e), wf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Bl] || (t[Bl] = !0, wf("selectionchange", !1, t));
  }
}
function $x(e, t, n, r) {
  switch (vx(t)) {
    case 1:
      var o = WE;
      break;
    case 4:
      o = HE;
      break;
    default:
      o = Rm;
  }
  n = o.bind(null, t, n, e), o = void 0, !Gp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Cf(e, t, n, r, o) {
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
            if (a = Oo(s), a === null)
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
  nx(function() {
    var u = i, c = Em(n), d = [];
    e: {
      var f = Ix.get(e);
      if (f !== void 0) {
        var p = Am, v = e;
        switch (e) {
          case "keypress":
            if (Cu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = iO;
            break;
          case "focusin":
            v = "focus", p = vf;
            break;
          case "focusout":
            v = "blur", p = vf;
            break;
          case "beforeblur":
          case "afterblur":
            p = vf;
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
            p = y0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = KE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = lO;
            break;
          case _x:
          case Ex:
          case Ox:
            p = XE;
            break;
          case Mx:
            p = cO;
            break;
          case "scroll":
            p = UE;
            break;
          case "wheel":
            p = fO;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = ZE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = S0;
        }
        var g = (t & 4) !== 0, S = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var h = u, b; h !== null; ) {
          b = h;
          var x = b.stateNode;
          if (b.tag === 5 && x !== null && (b = x, m !== null && (x = Es(h, m), x != null && g.push(Ds(h, x, b)))), S)
            break;
          h = h.return;
        }
        0 < g.length && (f = new p(f, v, null, n, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== Hp && (v = n.relatedTarget || n.fromElement) && (Oo(v) || v[wr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (v = n.relatedTarget || n.toElement, p = u, v = v ? Oo(v) : null, v !== null && (S = Xo(v), v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (p = null, v = u), p !== v)) {
          if (g = y0, x = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = S0, x = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = p == null ? f : yi(p), b = v == null ? f : yi(v), f = new g(x, h + "leave", p, n, c), f.target = S, f.relatedTarget = b, x = null, Oo(c) === u && (g = new g(m, h + "enter", v, n, c), g.target = b, g.relatedTarget = S, x = g), S = x, p && v)
            t: {
              for (g = p, m = v, h = 0, b = g; b; b = ii(b))
                h++;
              for (b = 0, x = m; x; x = ii(x))
                b++;
              for (; 0 < h - b; )
                g = ii(g), h--;
              for (; 0 < b - h; )
                m = ii(m), b--;
              for (; h--; ) {
                if (g === m || m !== null && g === m.alternate)
                  break t;
                g = ii(g), m = ii(m);
              }
              g = null;
            }
          else
            g = null;
          p !== null && I0(d, f, p, g, !1), v !== null && S !== null && I0(d, S, v, g, !0);
        }
      }
      e: {
        if (f = u ? yi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = bO;
        else if (C0(f))
          if (wx)
            k = CO;
          else {
            k = xO;
            var P = SO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = wO);
        if (k && (k = k(e, u))) {
          xx(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Np(f, "number", f.value);
      }
      switch (P = u ? yi(u) : window, e) {
        case "focusin":
          (C0(P) || P.contentEditable === "true") && (vi = P, Qp = u, ss = null);
          break;
        case "focusout":
          ss = Qp = vi = null;
          break;
        case "mousedown":
          Zp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zp = !1, E0(d, n, c);
          break;
        case "selectionchange":
          if (TO)
            break;
        case "keydown":
        case "keyup":
          E0(d, n, c);
      }
      var T;
      if (Fm)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        mi ? bx(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (yx && n.locale !== "ko" && (mi || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && mi && (T = gx()) : (Ur = c, $m = "value" in Ur ? Ur.value : Ur.textContent, mi = !0)), P = nc(u, _), 0 < P.length && (_ = new b0(_, e, null, n, c), d.push({ event: _, listeners: P }), T ? _.data = T : (T = Sx(n), T !== null && (_.data = T)))), (T = hO ? mO(e, n) : vO(e, n)) && (u = nc(u, "onBeforeInput"), 0 < u.length && (c = new b0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = T));
    }
    Rx(d, t);
  });
}
function Ds(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Es(e, n), i != null && r.unshift(Ds(e, i, o)), i = Es(e, t), i != null && r.push(Ds(e, i, o))), e = e.return;
  }
  return r;
}
function ii(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function I0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Es(n, i), l != null && a.unshift(Ds(n, l, s))) : o || (l = Es(n, i), l != null && a.push(Ds(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var MO = /\r\n?/g, IO = /\u0000|\uFFFD/g;
function R0(e) {
  return (typeof e == "string" ? e : "" + e).replace(MO, `
`).replace(IO, "");
}
function Wl(e, t, n) {
  if (t = R0(t), R0(e) !== t && n)
    throw Error(F(425));
}
function rc() {
}
var Jp = null, eh = null;
function th(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var nh = typeof setTimeout == "function" ? setTimeout : void 0, RO = typeof clearTimeout == "function" ? clearTimeout : void 0, $0 = typeof Promise == "function" ? Promise : void 0, $O = typeof queueMicrotask == "function" ? queueMicrotask : typeof $0 < "u" ? function(e) {
  return $0.resolve(null).then(e).catch(AO);
} : nh;
function AO(e) {
  setTimeout(function() {
    throw e;
  });
}
function kf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Is(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Is(t);
}
function Xr(e) {
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
function A0(e) {
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
var Sa = Math.random().toString(36).slice(2), Yn = "__reactFiber$" + Sa, Fs = "__reactProps$" + Sa, wr = "__reactContainer$" + Sa, rh = "__reactEvents$" + Sa, DO = "__reactListeners$" + Sa, FO = "__reactHandles$" + Sa;
function Oo(e) {
  var t = e[Yn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wr] || n[Yn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = A0(e); e !== null; ) {
          if (n = e[Yn])
            return n;
          e = A0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ul(e) {
  return e = e[Yn] || e[wr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yi(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function td(e) {
  return e[Fs] || null;
}
var oh = [], bi = -1;
function co(e) {
  return { current: e };
}
function Me(e) {
  0 > bi || (e.current = oh[bi], oh[bi] = null, bi--);
}
function Pe(e, t) {
  bi++, oh[bi] = e.current, e.current = t;
}
var io = {}, wt = co(io), At = co(!1), Bo = io;
function Ji(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return io;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Dt(e) {
  return e = e.childContextTypes, e != null;
}
function oc() {
  Me(At), Me(wt);
}
function D0(e, t, n) {
  if (wt.current !== io)
    throw Error(F(168));
  Pe(wt, t), Pe(At, n);
}
function Ax(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, SE(e) || "Unknown", o));
  return Ne({}, n, r);
}
function ic(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || io, Bo = wt.current, Pe(wt, e), Pe(At, At.current), !0;
}
function F0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Ax(e, t, Bo), r.__reactInternalMemoizedMergedChildContext = e, Me(At), Me(wt), Pe(wt, e)) : Me(At), Pe(At, n);
}
var ur = null, nd = !1, Pf = !1;
function Dx(e) {
  ur === null ? ur = [e] : ur.push(e);
}
function LO(e) {
  nd = !0, Dx(e);
}
function fo() {
  if (!Pf && ur !== null) {
    Pf = !0;
    var e = 0, t = xe;
    try {
      var n = ur;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ur = null, nd = !1;
    } catch (o) {
      throw ur !== null && (ur = ur.slice(e + 1)), ax(Om, fo), o;
    } finally {
      xe = t, Pf = !1;
    }
  }
  return null;
}
var Si = [], xi = 0, ac = null, sc = 0, fn = [], pn = 0, Wo = null, fr = 1, pr = "";
function wo(e, t) {
  Si[xi++] = sc, Si[xi++] = ac, ac = e, sc = t;
}
function Fx(e, t, n) {
  fn[pn++] = fr, fn[pn++] = pr, fn[pn++] = Wo, Wo = e;
  var r = fr;
  e = pr;
  var o = 32 - $n(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - $n(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, fr = 1 << 32 - $n(t) + o | n << o | r, pr = i + e;
  } else
    fr = 1 << i | n << o | r, pr = e;
}
function zm(e) {
  e.return !== null && (wo(e, 1), Fx(e, 1, 0));
}
function Nm(e) {
  for (; e === ac; )
    ac = Si[--xi], Si[xi] = null, sc = Si[--xi], Si[xi] = null;
  for (; e === Wo; )
    Wo = fn[--pn], fn[pn] = null, pr = fn[--pn], fn[pn] = null, fr = fn[--pn], fn[pn] = null;
}
var Yt = null, Kt = null, $e = !1, Mn = null;
function Lx(e, t) {
  var n = hn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function L0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Yt = e, Kt = Xr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Yt = e, Kt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wo !== null ? { id: fr, overflow: pr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = hn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Yt = e, Kt = null, !0) : !1;
    default:
      return !1;
  }
}
function ih(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ah(e) {
  if ($e) {
    var t = Kt;
    if (t) {
      var n = t;
      if (!L0(e, t)) {
        if (ih(e))
          throw Error(F(418));
        t = Xr(n.nextSibling);
        var r = Yt;
        t && L0(e, t) ? Lx(r, n) : (e.flags = e.flags & -4097 | 2, $e = !1, Yt = e);
      }
    } else {
      if (ih(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, $e = !1, Yt = e;
    }
  }
}
function z0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Yt = e;
}
function Hl(e) {
  if (e !== Yt)
    return !1;
  if (!$e)
    return z0(e), $e = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !th(e.type, e.memoizedProps)), t && (t = Kt)) {
    if (ih(e))
      throw zx(), Error(F(418));
    for (; t; )
      Lx(e, t), t = Xr(t.nextSibling);
  }
  if (z0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Kt = Xr(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Kt = null;
    }
  } else
    Kt = Yt ? Xr(e.stateNode.nextSibling) : null;
  return !0;
}
function zx() {
  for (var e = Kt; e; )
    e = Xr(e.nextSibling);
}
function ea() {
  Kt = Yt = null, $e = !1;
}
function jm(e) {
  Mn === null ? Mn = [e] : Mn.push(e);
}
var zO = Er.ReactCurrentBatchConfig;
function En(e, t) {
  if (e && e.defaultProps) {
    t = Ne({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var lc = co(null), uc = null, wi = null, Vm = null;
function Bm() {
  Vm = wi = uc = null;
}
function Wm(e) {
  var t = lc.current;
  Me(lc), e._currentValue = t;
}
function sh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Bi(e, t) {
  uc = e, Vm = wi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && ($t = !0), e.firstContext = null);
}
function yn(e) {
  var t = e._currentValue;
  if (Vm !== e)
    if (e = { context: e, memoizedValue: t, next: null }, wi === null) {
      if (uc === null)
        throw Error(F(308));
      wi = e, uc.dependencies = { lanes: 0, firstContext: e };
    } else
      wi = wi.next = e;
  return t;
}
var Mo = null;
function Hm(e) {
  Mo === null ? Mo = [e] : Mo.push(e);
}
function Nx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Hm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cr(e, r);
}
function Cr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nr = !1;
function Um(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function jx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, he & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Cr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Hm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cr(e, n);
}
function ku(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Mm(e, n);
  }
}
function N0(e, t) {
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
function cc(e, t, n, r) {
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
          var v = e, g = s;
          switch (f = t, p = n, g.tag) {
            case 1:
              if (v = g.payload, typeof v == "function") {
                d = v.call(p, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = g.payload, f = typeof v == "function" ? v.call(p, d, f) : v, f == null)
                break e;
              d = Ne({}, d, f);
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
function j0(e, t, n) {
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
var Vx = new NS.Component().refs;
function lh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rd = { isMounted: function(e) {
  return (e = e._reactInternals) ? Xo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _t(), o = Jr(e), i = vr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (An(t, e, o, r), ku(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _t(), o = Jr(e), i = vr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (An(t, e, o, r), ku(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _t(), r = Jr(e), o = vr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Qr(e, o, r), t !== null && (An(t, e, r, n), ku(t, e, r));
} };
function V0(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !$s(n, r) || !$s(o, i) : !0;
}
function Bx(e, t, n) {
  var r = !1, o = io, i = t.contextType;
  return typeof i == "object" && i !== null ? i = yn(i) : (o = Dt(t) ? Bo : wt.current, r = t.contextTypes, i = (r = r != null) ? Ji(e, o) : io), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = rd, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function B0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && rd.enqueueReplaceState(t, t.state, null);
}
function uh(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Vx, Um(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = yn(i) : (i = Dt(t) ? Bo : wt.current, o.context = Ji(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (lh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && rd.enqueueReplaceState(o, o.state, null), cc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function $a(e, t, n) {
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
        s === Vx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Ul(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function W0(e) {
  var t = e._init;
  return t(e._payload);
}
function Wx(e) {
  function t(m, h) {
    if (e) {
      var b = m.deletions;
      b === null ? (m.deletions = [h], m.flags |= 16) : b.push(h);
    }
  }
  function n(m, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(m, h), h = h.sibling;
    return null;
  }
  function r(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function o(m, h) {
    return m = eo(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, b) {
    return m.index = b, e ? (b = m.alternate, b !== null ? (b = b.index, b < h ? (m.flags |= 2, h) : b) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, b, x) {
    return h === null || h.tag !== 6 ? (h = Rf(b, m.mode, x), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function l(m, h, b, x) {
    var k = b.type;
    return k === hi ? c(m, h, b.props.children, x, b.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && W0(k) === h.type) ? (x = o(h, b.props), x.ref = $a(m, h, b), x.return = m, x) : (x = Mu(b.type, b.key, b.props, null, m.mode, x), x.ref = $a(m, h, b), x.return = m, x);
  }
  function u(m, h, b, x) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== b.containerInfo || h.stateNode.implementation !== b.implementation ? (h = $f(b, m.mode, x), h.return = m, h) : (h = o(h, b.children || []), h.return = m, h);
  }
  function c(m, h, b, x, k) {
    return h === null || h.tag !== 7 ? (h = Fo(b, m.mode, x, k), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function d(m, h, b) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Rf("" + h, m.mode, b), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Al:
          return b = Mu(h.type, h.key, h.props, null, m.mode, b), b.ref = $a(m, null, h), b.return = m, b;
        case pi:
          return h = $f(h, m.mode, b), h.return = m, h;
        case zr:
          var x = h._init;
          return d(m, x(h._payload), b);
      }
      if (Ga(h) || Ea(h))
        return h = Fo(h, m.mode, b, null), h.return = m, h;
      Ul(m, h);
    }
    return null;
  }
  function f(m, h, b, x) {
    var k = h !== null ? h.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return k !== null ? null : s(m, h, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Al:
          return b.key === k ? l(m, h, b, x) : null;
        case pi:
          return b.key === k ? u(m, h, b, x) : null;
        case zr:
          return k = b._init, f(
            m,
            h,
            k(b._payload),
            x
          );
      }
      if (Ga(b) || Ea(b))
        return k !== null ? null : c(m, h, b, x, null);
      Ul(m, b);
    }
    return null;
  }
  function p(m, h, b, x, k) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return m = m.get(b) || null, s(h, m, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Al:
          return m = m.get(x.key === null ? b : x.key) || null, l(h, m, x, k);
        case pi:
          return m = m.get(x.key === null ? b : x.key) || null, u(h, m, x, k);
        case zr:
          var P = x._init;
          return p(m, h, b, P(x._payload), k);
      }
      if (Ga(x) || Ea(x))
        return m = m.get(b) || null, c(h, m, x, k, null);
      Ul(h, x);
    }
    return null;
  }
  function v(m, h, b, x) {
    for (var k = null, P = null, T = h, _ = h = 0, M = null; T !== null && _ < b.length; _++) {
      T.index > _ ? (M = T, T = null) : M = T.sibling;
      var I = f(m, T, b[_], x);
      if (I === null) {
        T === null && (T = M);
        break;
      }
      e && T && I.alternate === null && t(m, T), h = i(I, h, _), P === null ? k = I : P.sibling = I, P = I, T = M;
    }
    if (_ === b.length)
      return n(m, T), $e && wo(m, _), k;
    if (T === null) {
      for (; _ < b.length; _++)
        T = d(m, b[_], x), T !== null && (h = i(T, h, _), P === null ? k = T : P.sibling = T, P = T);
      return $e && wo(m, _), k;
    }
    for (T = r(m, T); _ < b.length; _++)
      M = p(T, m, _, b[_], x), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? _ : M.key), h = i(M, h, _), P === null ? k = M : P.sibling = M, P = M);
    return e && T.forEach(function(D) {
      return t(m, D);
    }), $e && wo(m, _), k;
  }
  function g(m, h, b, x) {
    var k = Ea(b);
    if (typeof k != "function")
      throw Error(F(150));
    if (b = k.call(b), b == null)
      throw Error(F(151));
    for (var P = k = null, T = h, _ = h = 0, M = null, I = b.next(); T !== null && !I.done; _++, I = b.next()) {
      T.index > _ ? (M = T, T = null) : M = T.sibling;
      var D = f(m, T, I.value, x);
      if (D === null) {
        T === null && (T = M);
        break;
      }
      e && T && D.alternate === null && t(m, T), h = i(D, h, _), P === null ? k = D : P.sibling = D, P = D, T = M;
    }
    if (I.done)
      return n(
        m,
        T
      ), $e && wo(m, _), k;
    if (T === null) {
      for (; !I.done; _++, I = b.next())
        I = d(m, I.value, x), I !== null && (h = i(I, h, _), P === null ? k = I : P.sibling = I, P = I);
      return $e && wo(m, _), k;
    }
    for (T = r(m, T); !I.done; _++, I = b.next())
      I = p(T, m, _, I.value, x), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? _ : I.key), h = i(I, h, _), P === null ? k = I : P.sibling = I, P = I);
    return e && T.forEach(function(G) {
      return t(m, G);
    }), $e && wo(m, _), k;
  }
  function S(m, h, b, x) {
    if (typeof b == "object" && b !== null && b.type === hi && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Al:
          e: {
            for (var k = b.key, P = h; P !== null; ) {
              if (P.key === k) {
                if (k = b.type, k === hi) {
                  if (P.tag === 7) {
                    n(m, P.sibling), h = o(P, b.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && W0(k) === P.type) {
                  n(m, P.sibling), h = o(P, b.props), h.ref = $a(m, P, b), h.return = m, m = h;
                  break e;
                }
                n(m, P);
                break;
              } else
                t(m, P);
              P = P.sibling;
            }
            b.type === hi ? (h = Fo(b.props.children, m.mode, x, b.key), h.return = m, m = h) : (x = Mu(b.type, b.key, b.props, null, m.mode, x), x.ref = $a(m, h, b), x.return = m, m = x);
          }
          return a(m);
        case pi:
          e: {
            for (P = b.key; h !== null; ) {
              if (h.key === P)
                if (h.tag === 4 && h.stateNode.containerInfo === b.containerInfo && h.stateNode.implementation === b.implementation) {
                  n(m, h.sibling), h = o(h, b.children || []), h.return = m, m = h;
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = $f(b, m.mode, x), h.return = m, m = h;
          }
          return a(m);
        case zr:
          return P = b._init, S(m, h, P(b._payload), x);
      }
      if (Ga(b))
        return v(m, h, b, x);
      if (Ea(b))
        return g(m, h, b, x);
      Ul(m, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, b), h.return = m, m = h) : (n(m, h), h = Rf(b, m.mode, x), h.return = m, m = h), a(m)) : n(m, h);
  }
  return S;
}
var ta = Wx(!0), Hx = Wx(!1), cl = {}, Zn = co(cl), Ls = co(cl), zs = co(cl);
function Io(e) {
  if (e === cl)
    throw Error(F(174));
  return e;
}
function Gm(e, t) {
  switch (Pe(zs, t), Pe(Ls, e), Pe(Zn, cl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vp(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vp(t, e);
  }
  Me(Zn), Pe(Zn, t);
}
function na() {
  Me(Zn), Me(Ls), Me(zs);
}
function Ux(e) {
  Io(zs.current);
  var t = Io(Zn.current), n = Vp(t, e.type);
  t !== n && (Pe(Ls, e), Pe(Zn, n));
}
function Km(e) {
  Ls.current === e && (Me(Zn), Me(Ls));
}
var Fe = co(0);
function dc(e) {
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
var Tf = [];
function Ym() {
  for (var e = 0; e < Tf.length; e++)
    Tf[e]._workInProgressVersionPrimary = null;
  Tf.length = 0;
}
var Pu = Er.ReactCurrentDispatcher, _f = Er.ReactCurrentBatchConfig, Ho = 0, ze = null, tt = null, it = null, fc = !1, ls = !1, Ns = 0, NO = 0;
function gt() {
  throw Error(F(321));
}
function qm(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zn(e[n], t[n]))
      return !1;
  return !0;
}
function Xm(e, t, n, r, o, i) {
  if (Ho = i, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pu.current = e === null || e.memoizedState === null ? WO : HO, e = n(r, o), ls) {
    i = 0;
    do {
      if (ls = !1, Ns = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = tt = null, t.updateQueue = null, Pu.current = UO, e = n(r, o);
    } while (ls);
  }
  if (Pu.current = pc, t = tt !== null && tt.next !== null, Ho = 0, it = tt = ze = null, fc = !1, t)
    throw Error(F(300));
  return e;
}
function Qm() {
  var e = Ns !== 0;
  return Ns = 0, e;
}
function Wn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return it === null ? ze.memoizedState = it = e : it = it.next = e, it;
}
function bn() {
  if (tt === null) {
    var e = ze.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = tt.next;
  var t = it === null ? ze.memoizedState : it.next;
  if (t !== null)
    it = t, tt = e;
  else {
    if (e === null)
      throw Error(F(310));
    tt = e, e = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, it === null ? ze.memoizedState = it = e : it = it.next = e;
  }
  return it;
}
function js(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ef(e) {
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
        l === null ? (s = l = d, a = r) : l = l.next = d, ze.lanes |= c, Uo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, zn(r, t.memoizedState) || ($t = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ze.lanes |= i, Uo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Of(e) {
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
    zn(i, t.memoizedState) || ($t = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Gx() {
}
function Kx(e, t) {
  var n = ze, r = bn(), o = t(), i = !zn(r.memoizedState, o);
  if (i && (r.memoizedState = o, $t = !0), r = r.queue, Zm(Xx.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Vs(9, qx.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Ho & 30 || Yx(n, t, o);
  }
  return o;
}
function Yx(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ze.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ze.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function qx(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Qx(t) && Zx(e);
}
function Xx(e, t, n) {
  return n(function() {
    Qx(t) && Zx(e);
  });
}
function Qx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zn(e, n);
  } catch {
    return !0;
  }
}
function Zx(e) {
  var t = Cr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function H0(e) {
  var t = Wn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: js, lastRenderedState: e }, t.queue = e, e = e.dispatch = BO.bind(null, ze, e), [t.memoizedState, e];
}
function Vs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ze.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ze.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Jx() {
  return bn().memoizedState;
}
function Tu(e, t, n, r) {
  var o = Wn();
  ze.flags |= e, o.memoizedState = Vs(1 | t, n, void 0, r === void 0 ? null : r);
}
function od(e, t, n, r) {
  var o = bn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (tt !== null) {
    var a = tt.memoizedState;
    if (i = a.destroy, r !== null && qm(r, a.deps)) {
      o.memoizedState = Vs(t, n, i, r);
      return;
    }
  }
  ze.flags |= e, o.memoizedState = Vs(1 | t, n, i, r);
}
function U0(e, t) {
  return Tu(8390656, 8, e, t);
}
function Zm(e, t) {
  return od(2048, 8, e, t);
}
function ew(e, t) {
  return od(4, 2, e, t);
}
function tw(e, t) {
  return od(4, 4, e, t);
}
function nw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function rw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, od(4, 4, nw.bind(null, t, e), n);
}
function Jm() {
}
function ow(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function iw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function aw(e, t, n) {
  return Ho & 21 ? (zn(n, t) || (n = ux(), ze.lanes |= n, Uo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, $t = !0), e.memoizedState = n);
}
function jO(e, t) {
  var n = xe;
  xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = _f.transition;
  _f.transition = {};
  try {
    e(!1), t();
  } finally {
    xe = n, _f.transition = r;
  }
}
function sw() {
  return bn().memoizedState;
}
function VO(e, t, n) {
  var r = Jr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, lw(e))
    uw(t, n);
  else if (n = Nx(e, t, n, r), n !== null) {
    var o = _t();
    An(n, e, r, o), cw(n, t, r);
  }
}
function BO(e, t, n) {
  var r = Jr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lw(e))
    uw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, zn(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Hm(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Nx(e, t, o, r), n !== null && (o = _t(), An(n, e, r, o), cw(n, t, r));
  }
}
function lw(e) {
  var t = e.alternate;
  return e === ze || t !== null && t === ze;
}
function uw(e, t) {
  ls = fc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function cw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Mm(e, n);
  }
}
var pc = { readContext: yn, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, WO = { readContext: yn, useCallback: function(e, t) {
  return Wn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yn, useEffect: U0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tu(
    4194308,
    4,
    nw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Tu(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Tu(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Wn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Wn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = VO.bind(null, ze, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wn();
  return e = { current: e }, t.memoizedState = e;
}, useState: H0, useDebugValue: Jm, useDeferredValue: function(e) {
  return Wn().memoizedState = e;
}, useTransition: function() {
  var e = H0(!1), t = e[0];
  return e = jO.bind(null, e[1]), Wn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ze, o = Wn();
  if ($e) {
    if (n === void 0)
      throw Error(F(407));
    n = n();
  } else {
    if (n = t(), st === null)
      throw Error(F(349));
    Ho & 30 || Yx(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, U0(Xx.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Vs(9, qx.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Wn(), t = st.identifierPrefix;
  if ($e) {
    var n = pr, r = fr;
    n = (r & ~(1 << 32 - $n(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ns++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = NO++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, HO = {
  readContext: yn,
  useCallback: ow,
  useContext: yn,
  useEffect: Zm,
  useImperativeHandle: rw,
  useInsertionEffect: ew,
  useLayoutEffect: tw,
  useMemo: iw,
  useReducer: Ef,
  useRef: Jx,
  useState: function() {
    return Ef(js);
  },
  useDebugValue: Jm,
  useDeferredValue: function(e) {
    var t = bn();
    return aw(t, tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Ef(js)[0], t = bn().memoizedState;
    return [e, t];
  },
  useMutableSource: Gx,
  useSyncExternalStore: Kx,
  useId: sw,
  unstable_isNewReconciler: !1
}, UO = { readContext: yn, useCallback: ow, useContext: yn, useEffect: Zm, useImperativeHandle: rw, useInsertionEffect: ew, useLayoutEffect: tw, useMemo: iw, useReducer: Of, useRef: Jx, useState: function() {
  return Of(js);
}, useDebugValue: Jm, useDeferredValue: function(e) {
  var t = bn();
  return tt === null ? t.memoizedState = e : aw(t, tt.memoizedState, e);
}, useTransition: function() {
  var e = Of(js)[0], t = bn().memoizedState;
  return [e, t];
}, useMutableSource: Gx, useSyncExternalStore: Kx, useId: sw, unstable_isNewReconciler: !1 };
function ra(e, t) {
  try {
    var n = "", r = t;
    do
      n += bE(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Mf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ch(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var GO = typeof WeakMap == "function" ? WeakMap : Map;
function dw(e, t, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    mc || (mc = !0, Sh = r), ch(e, t);
  }, n;
}
function fw(e, t, n) {
  n = vr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      ch(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ch(e, t), typeof r != "function" && (Zr === null ? Zr = /* @__PURE__ */ new Set([this]) : Zr.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function G0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new GO();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = aM.bind(null, e, t, n), t.then(e, e));
}
function K0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Y0(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vr(-1, 1), t.tag = 2, Qr(n, t, 1))), n.lanes |= 1), e);
}
var KO = Er.ReactCurrentOwner, $t = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? Hx(t, null, n, r) : ta(t, e.child, n, r);
}
function q0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Bi(t, o), r = Xm(e, t, n, r, i, o), n = Qm(), e !== null && !$t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : ($e && n && zm(t), t.flags |= 1, Pt(e, t, r, o), t.child);
}
function X0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !sv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, pw(e, t, i, r, o)) : (e = Mu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : $s, n(a, r) && e.ref === t.ref)
      return kr(e, t, o);
  }
  return t.flags |= 1, e = eo(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function pw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($s(i, r) && e.ref === t.ref)
      if ($t = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && ($t = !0);
      else
        return t.lanes = e.lanes, kr(e, t, o);
  }
  return dh(e, t, n, r, o);
}
function hw(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pe(ki, Ut), Ut |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Pe(ki, Ut), Ut |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Pe(ki, Ut), Ut |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Pe(ki, Ut), Ut |= r;
  return Pt(e, t, o, n), t.child;
}
function mw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function dh(e, t, n, r, o) {
  var i = Dt(n) ? Bo : wt.current;
  return i = Ji(t, i), Bi(t, o), n = Xm(e, t, n, r, i, o), r = Qm(), e !== null && !$t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : ($e && r && zm(t), t.flags |= 1, Pt(e, t, n, o), t.child);
}
function Q0(e, t, n, r, o) {
  if (Dt(n)) {
    var i = !0;
    ic(t);
  } else
    i = !1;
  if (Bi(t, o), t.stateNode === null)
    _u(e, t), Bx(t, n, r), uh(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = yn(u) : (u = Dt(n) ? Bo : wt.current, u = Ji(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && B0(t, a, r, u), Nr = !1;
    var f = t.memoizedState;
    a.state = f, cc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || At.current || Nr ? (typeof c == "function" && (lh(t, n, c, r), l = t.memoizedState), (s = Nr || V0(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, jx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : En(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = yn(l) : (l = Dt(n) ? Bo : wt.current, l = Ji(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && B0(t, a, r, l), Nr = !1, f = t.memoizedState, a.state = f, cc(t, r, a, o);
    var v = t.memoizedState;
    s !== d || f !== v || At.current || Nr ? (typeof p == "function" && (lh(t, n, p, r), v = t.memoizedState), (u = Nr || V0(t, n, u, r, f, v, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, v, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, v, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), a.props = r, a.state = v, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return fh(e, t, n, r, i, o);
}
function fh(e, t, n, r, o, i) {
  mw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && F0(t, n, !1), kr(e, t, i);
  r = t.stateNode, KO.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = ta(t, e.child, null, i), t.child = ta(t, null, s, i)) : Pt(e, t, s, i), t.memoizedState = r.state, o && F0(t, n, !0), t.child;
}
function vw(e) {
  var t = e.stateNode;
  t.pendingContext ? D0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && D0(e, t.context, !1), Gm(e, t.containerInfo);
}
function Z0(e, t, n, r, o) {
  return ea(), jm(o), t.flags |= 256, Pt(e, t, n, r), t.child;
}
var ph = { dehydrated: null, treeContext: null, retryLane: 0 };
function hh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gw(e, t, n) {
  var r = t.pendingProps, o = Fe.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Pe(Fe, o & 1), e === null)
    return ah(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = sd(a, r, 0, null), e = Fo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = hh(n), t.memoizedState = ph, e) : ev(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return YO(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = eo(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = eo(s, i) : (i = Fo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? hh(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = ph, r;
  }
  return i = e.child, e = i.sibling, r = eo(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ev(e, t) {
  return t = sd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Gl(e, t, n, r) {
  return r !== null && jm(r), ta(t, e.child, null, n), e = ev(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function YO(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Mf(Error(F(422))), Gl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = sd({ mode: "visible", children: r.children }, o, 0, null), i = Fo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ta(t, e.child, null, a), t.child.memoizedState = hh(a), t.memoizedState = ph, i);
  if (!(t.mode & 1))
    return Gl(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = Mf(i, r, void 0), Gl(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, $t || s) {
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Cr(e, o), An(r, e, o, -1));
    }
    return av(), r = Mf(Error(F(421))), Gl(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Kt = Xr(o.nextSibling), Yt = t, $e = !0, Mn = null, e !== null && (fn[pn++] = fr, fn[pn++] = pr, fn[pn++] = Wo, fr = e.id, pr = e.overflow, Wo = t), t = ev(t, r.children), t.flags |= 4096, t);
}
function J0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sh(e.return, t, n);
}
function If(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function yw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Pt(e, t, r.children, n), r = Fe.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && J0(e, n, t);
          else if (e.tag === 19)
            J0(e, n, t);
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
  if (Pe(Fe, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && dc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), If(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && dc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        If(t, !0, n, null, i);
        break;
      case "together":
        If(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _u(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Uo |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(F(153));
  if (t.child !== null) {
    for (e = t.child, n = eo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = eo(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function qO(e, t, n) {
  switch (t.tag) {
    case 3:
      vw(t), ea();
      break;
    case 5:
      Ux(t);
      break;
    case 1:
      Dt(t.type) && ic(t);
      break;
    case 4:
      Gm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Pe(lc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Pe(Fe, Fe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? gw(e, t, n) : (Pe(Fe, Fe.current & 1), e = kr(e, t, n), e !== null ? e.sibling : null);
      Pe(Fe, Fe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return yw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Pe(Fe, Fe.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, hw(e, t, n);
  }
  return kr(e, t, n);
}
var bw, mh, Sw, xw;
bw = function(e, t) {
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
mh = function() {
};
Sw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Io(Zn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Lp(e, o), r = Lp(e, r), i = [];
        break;
      case "select":
        o = Ne({}, o, { value: void 0 }), r = Ne({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = jp(e, o), r = jp(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rc);
    }
    Bp(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ts.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ts.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ee("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
xw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Aa(e, t) {
  if (!$e)
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
function XO(e, t, n) {
  var r = t.pendingProps;
  switch (Nm(t), t.tag) {
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
      return Dt(t.type) && oc(), yt(t), null;
    case 3:
      return r = t.stateNode, na(), Me(At), Me(wt), Ym(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Hl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Mn !== null && (Ch(Mn), Mn = null))), mh(e, t), yt(t), null;
    case 5:
      Km(t);
      var o = Io(zs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Sw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return yt(t), null;
        }
        if (e = Io(Zn.current), Hl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Yn] = t, r[Fs] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ee("cancel", r), Ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ee("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ya.length; o++)
                Ee(Ya[o], r);
              break;
            case "source":
              Ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ee(
                "error",
                r
              ), Ee("load", r);
              break;
            case "details":
              Ee("toggle", r);
              break;
            case "input":
              l0(r, i), Ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ee("invalid", r);
              break;
            case "textarea":
              c0(r, i), Ee("invalid", r);
          }
          Bp(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Wl(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Wl(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Ts.hasOwnProperty(a) && s != null && a === "onScroll" && Ee("scroll", r);
            }
          switch (n) {
            case "input":
              Dl(r), u0(r, i, !0);
              break;
            case "textarea":
              Dl(r), d0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = rc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = YS(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yn] = t, e[Fs] = r, bw(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Wp(n, r), n) {
              case "dialog":
                Ee("cancel", e), Ee("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ya.length; o++)
                  Ee(Ya[o], e);
                o = r;
                break;
              case "source":
                Ee("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ee(
                  "error",
                  e
                ), Ee("load", e), o = r;
                break;
              case "details":
                Ee("toggle", e), o = r;
                break;
              case "input":
                l0(e, r), o = Lp(e, r), Ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ne({}, r, { value: void 0 }), Ee("invalid", e);
                break;
              case "textarea":
                c0(e, r), o = jp(e, r), Ee("invalid", e);
                break;
              default:
                o = r;
            }
            Bp(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? QS(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && qS(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && _s(e, l) : typeof l == "number" && _s(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ts.hasOwnProperty(i) ? l != null && i === "onScroll" && Ee("scroll", e) : l != null && km(e, i, l, a));
              }
            switch (n) {
              case "input":
                Dl(e), u0(e, r, !1);
                break;
              case "textarea":
                Dl(e), d0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + oo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? zi(e, !!r.multiple, i, !1) : r.defaultValue != null && zi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = rc);
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
        xw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Io(zs.current), Io(Zn.current), Hl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Yn] = t, (i = r.nodeValue !== n) && (e = Yt, e !== null))
            switch (e.tag) {
              case 3:
                Wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yn] = t, t.stateNode = r;
      }
      return yt(t), null;
    case 13:
      if (Me(Fe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($e && Kt !== null && t.mode & 1 && !(t.flags & 128))
          zx(), ea(), t.flags |= 98560, i = !1;
        else if (i = Hl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(F(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(F(317));
            i[Yn] = t;
          } else
            ea(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          yt(t), i = !1;
        } else
          Mn !== null && (Ch(Mn), Mn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Fe.current & 1 ? nt === 0 && (nt = 3) : av())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
    case 4:
      return na(), mh(e, t), e === null && As(t.stateNode.containerInfo), yt(t), null;
    case 10:
      return Wm(t.type._context), yt(t), null;
    case 17:
      return Dt(t.type) && oc(), yt(t), null;
    case 19:
      if (Me(Fe), i = t.memoizedState, i === null)
        return yt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          Aa(i, !1);
        else {
          if (nt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = dc(e), a !== null) {
                for (t.flags |= 128, Aa(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Pe(Fe, Fe.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ke() > oa && (t.flags |= 128, r = !0, Aa(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = dc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Aa(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !$e)
              return yt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > oa && n !== 1073741824 && (t.flags |= 128, r = !0, Aa(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = Fe.current, Pe(Fe, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
    case 22:
    case 23:
      return iv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ut & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function QO(e, t) {
  switch (Nm(t), t.tag) {
    case 1:
      return Dt(t.type) && oc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return na(), Me(At), Me(wt), Ym(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Km(t), null;
    case 13:
      if (Me(Fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        ea();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Me(Fe), null;
    case 4:
      return na(), null;
    case 10:
      return Wm(t.type._context), null;
    case 22:
    case 23:
      return iv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kl = !1, St = !1, ZO = typeof WeakSet == "function" ? WeakSet : Set, B = null;
function Ci(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ve(e, t, r);
      }
    else
      n.current = null;
}
function vh(e, t, n) {
  try {
    n();
  } catch (r) {
    Ve(e, t, r);
  }
}
var ey = !1;
function JO(e, t) {
  if (Jp = ec, e = Px(), Lm(e)) {
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
  for (eh = { focusedElem: e, selectionRange: n }, ec = !1, B = t; B !== null; )
    if (t = B, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, B = e;
    else
      for (; B !== null; ) {
        t = B;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps, S = v.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : En(t.type, g), S);
                  m.__reactInternalSnapshotBeforeUpdate = h;
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
        } catch (x) {
          Ve(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return v = ey, ey = !1, v;
}
function us(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && vh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function id(e, t) {
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
function gh(e) {
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
function ww(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ww(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yn], delete t[Fs], delete t[rh], delete t[DO], delete t[FO])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Cw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ty(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Cw(e.return))
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
function yh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = rc));
  else if (r !== 4 && (e = e.child, e !== null))
    for (yh(e, t, n), e = e.sibling; e !== null; )
      yh(e, t, n), e = e.sibling;
}
function bh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (bh(e, t, n), e = e.sibling; e !== null; )
      bh(e, t, n), e = e.sibling;
}
var dt = null, On = !1;
function $r(e, t, n) {
  for (n = n.child; n !== null; )
    kw(e, t, n), n = n.sibling;
}
function kw(e, t, n) {
  if (Qn && typeof Qn.onCommitFiberUnmount == "function")
    try {
      Qn.onCommitFiberUnmount(Qc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      St || Ci(n, t);
    case 6:
      var r = dt, o = On;
      dt = null, $r(e, t, n), dt = r, On = o, dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? kf(e.parentNode, n) : e.nodeType === 1 && kf(e, n), Is(e)) : kf(dt, n.stateNode));
      break;
    case 4:
      r = dt, o = On, dt = n.stateNode.containerInfo, On = !0, $r(e, t, n), dt = r, On = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!St && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && vh(n, t, a), o = o.next;
        } while (o !== r);
      }
      $r(e, t, n);
      break;
    case 1:
      if (!St && (Ci(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Ve(n, t, s);
        }
      $r(e, t, n);
      break;
    case 21:
      $r(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (St = (r = St) || n.memoizedState !== null, $r(e, t, n), St = r) : $r(e, t, n);
      break;
    default:
      $r(e, t, n);
  }
}
function ny(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ZO()), t.forEach(function(r) {
      var o = lM.bind(null, e, r);
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
        kw(i, a, o), dt = null, On = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        Ve(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Pw(t, e), t = t.sibling;
}
function Pw(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Tn(t, e), Vn(e), r & 4) {
        try {
          us(3, e, e.return), id(3, e);
        } catch (g) {
          Ve(e, e.return, g);
        }
        try {
          us(5, e, e.return);
        } catch (g) {
          Ve(e, e.return, g);
        }
      }
      break;
    case 1:
      Tn(t, e), Vn(e), r & 512 && n !== null && Ci(n, n.return);
      break;
    case 5:
      if (Tn(t, e), Vn(e), r & 512 && n !== null && Ci(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          _s(o, "");
        } catch (g) {
          Ve(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && GS(o, i), Wp(s, a);
            var u = Wp(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? QS(o, d) : c === "dangerouslySetInnerHTML" ? qS(o, d) : c === "children" ? _s(o, d) : km(o, c, d, u);
            }
            switch (s) {
              case "input":
                zp(o, i);
                break;
              case "textarea":
                KS(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? zi(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? zi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : zi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Fs] = i;
          } catch (g) {
            Ve(e, e.return, g);
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
        } catch (g) {
          Ve(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Tn(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Is(t.containerInfo);
        } catch (g) {
          Ve(e, e.return, g);
        }
      break;
    case 4:
      Tn(t, e), Vn(e);
      break;
    case 13:
      Tn(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (rv = Ke())), r & 4 && ny(e);
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
                  us(4, f, f.return);
                  break;
                case 1:
                  Ci(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (g) {
                      Ve(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Ci(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    oy(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, B = p) : oy(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = XS("display", a));
                } catch (g) {
                  Ve(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  Ve(e, e.return, g);
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
      Tn(t, e), Vn(e), r & 4 && ny(e);
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
          if (Cw(n)) {
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
          r.flags & 32 && (_s(o, ""), r.flags &= -33);
          var i = ty(e);
          bh(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = ty(e);
          yh(e, s, a);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      Ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function eM(e, t, n) {
  B = e, Tw(e);
}
function Tw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Kl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || St;
        s = Kl;
        var u = St;
        if (Kl = a, (St = l) && !u)
          for (B = o; B !== null; )
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? iy(o) : l !== null ? (l.return = a, B = l) : iy(o);
        for (; i !== null; )
          B = i, Tw(i), i = i.sibling;
        B = o, Kl = s, St = u;
      }
      ry(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : ry(e);
  }
}
function ry(e) {
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
              St || id(5, t);
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
              i !== null && j0(t, i, r);
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
                j0(t, a, n);
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
                    d !== null && Is(d);
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
        St || t.flags & 512 && gh(t);
      } catch (f) {
        Ve(t, t.return, f);
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
function oy(e) {
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
function iy(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            id(4, t);
          } catch (l) {
            Ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ve(t, o, l);
            }
          }
          var i = t.return;
          try {
            gh(t);
          } catch (l) {
            Ve(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            gh(t);
          } catch (l) {
            Ve(t, a, l);
          }
      }
    } catch (l) {
      Ve(t, t.return, l);
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
var tM = Math.ceil, hc = Er.ReactCurrentDispatcher, tv = Er.ReactCurrentOwner, vn = Er.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Ut = 0, ki = co(0), nt = 0, Bs = null, Uo = 0, ad = 0, nv = 0, cs = null, It = null, rv = 0, oa = 1 / 0, lr = null, mc = !1, Sh = null, Zr = null, Yl = !1, Gr = null, vc = 0, ds = 0, xh = null, Eu = -1, Ou = 0;
function _t() {
  return he & 6 ? Ke() : Eu !== -1 ? Eu : Eu = Ke();
}
function Jr(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : zO.transition !== null ? (Ou === 0 && (Ou = ux()), Ou) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vx(e.type)), e) : 1;
}
function An(e, t, n, r) {
  if (50 < ds)
    throw ds = 0, xh = null, Error(F(185));
  sl(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (ad |= n), nt === 4 && Br(e, pt)), Ft(e, r), n === 1 && he === 0 && !(t.mode & 1) && (oa = Ke() + 500, nd && fo()));
}
function Ft(e, t) {
  var n = e.callbackNode;
  zE(e, t);
  var r = Ju(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && h0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && h0(n), t === 1)
      e.tag === 0 ? LO(ay.bind(null, e)) : Dx(ay.bind(null, e)), $O(function() {
        !(he & 6) && fo();
      }), n = null;
    else {
      switch (cx(r)) {
        case 1:
          n = Om;
          break;
        case 4:
          n = sx;
          break;
        case 16:
          n = Zu;
          break;
        case 536870912:
          n = lx;
          break;
        default:
          n = Zu;
      }
      n = Aw(n, _w.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function _w(e, t) {
  if (Eu = -1, Ou = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Wi() && e.callbackNode !== n)
    return null;
  var r = Ju(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = gc(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Ow();
    (st !== e || pt !== t) && (lr = null, oa = Ke() + 500, Do(e, t));
    do
      try {
        oM();
        break;
      } catch (s) {
        Ew(e, s);
      }
    while (!0);
    Bm(), hc.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = nt);
  }
  if (t !== 0) {
    if (t === 2 && (o = Yp(e), o !== 0 && (r = o, t = wh(e, o))), t === 1)
      throw n = Bs, Do(e, 0), Br(e, r), Ft(e, Ke()), n;
    if (t === 6)
      Br(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !nM(o) && (t = gc(e, r), t === 2 && (i = Yp(e), i !== 0 && (r = i, t = wh(e, i))), t === 1))
        throw n = Bs, Do(e, 0), Br(e, r), Ft(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Co(e, It, lr);
          break;
        case 3:
          if (Br(e, r), (r & 130023424) === r && (t = rv + 500 - Ke(), 10 < t)) {
            if (Ju(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              _t(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = nh(Co.bind(null, e, It, lr), t);
            break;
          }
          Co(e, It, lr);
          break;
        case 4:
          if (Br(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - $n(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tM(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = nh(Co.bind(null, e, It, lr), r);
            break;
          }
          Co(e, It, lr);
          break;
        case 5:
          Co(e, It, lr);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Ft(e, Ke()), e.callbackNode === n ? _w.bind(null, e) : null;
}
function wh(e, t) {
  var n = cs;
  return e.current.memoizedState.isDehydrated && (Do(e, t).flags |= 256), e = gc(e, t), e !== 2 && (t = It, It = n, t !== null && Ch(t)), e;
}
function Ch(e) {
  It === null ? It = e : It.push.apply(It, e);
}
function nM(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!zn(i(), o))
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
function Br(e, t) {
  for (t &= ~nv, t &= ~ad, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $n(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ay(e) {
  if (he & 6)
    throw Error(F(327));
  Wi();
  var t = Ju(e, 0);
  if (!(t & 1))
    return Ft(e, Ke()), null;
  var n = gc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yp(e);
    r !== 0 && (t = r, n = wh(e, r));
  }
  if (n === 1)
    throw n = Bs, Do(e, 0), Br(e, t), Ft(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Co(e, It, lr), Ft(e, Ke()), null;
}
function ov(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (oa = Ke() + 500, nd && fo());
  }
}
function Go(e) {
  Gr !== null && Gr.tag === 0 && !(he & 6) && Wi();
  var t = he;
  he |= 1;
  var n = vn.transition, r = xe;
  try {
    if (vn.transition = null, xe = 1, e)
      return e();
  } finally {
    xe = r, vn.transition = n, he = t, !(he & 6) && fo();
  }
}
function iv() {
  Ut = ki.current, Me(ki);
}
function Do(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, RO(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (Nm(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && oc();
          break;
        case 3:
          na(), Me(At), Me(wt), Ym();
          break;
        case 5:
          Km(r);
          break;
        case 4:
          na();
          break;
        case 13:
          Me(Fe);
          break;
        case 19:
          Me(Fe);
          break;
        case 10:
          Wm(r.type._context);
          break;
        case 22:
        case 23:
          iv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = eo(e.current, null), pt = Ut = t, nt = 0, Bs = null, nv = ad = Uo = 0, It = cs = null, Mo !== null) {
    for (t = 0; t < Mo.length; t++)
      if (n = Mo[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    Mo = null;
  }
  return e;
}
function Ew(e, t) {
  do {
    var n = Ze;
    try {
      if (Bm(), Pu.current = pc, fc) {
        for (var r = ze.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        fc = !1;
      }
      if (Ho = 0, it = tt = ze = null, ls = !1, Ns = 0, tv.current = null, n === null || n.return === null) {
        nt = 1, Bs = t, Ze = null;
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
          var p = K0(a);
          if (p !== null) {
            p.flags &= -257, Y0(p, a, s, i, t), p.mode & 1 && G0(i, u, t), t = p, l = u;
            var v = t.updateQueue;
            if (v === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              G0(i, u, t), av();
              break e;
            }
            l = Error(F(426));
          }
        } else if ($e && s.mode & 1) {
          var S = K0(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Y0(S, a, s, i, t), jm(ra(l, s));
            break e;
          }
        }
        i = l = ra(l, s), nt !== 4 && (nt = 2), cs === null ? cs = [i] : cs.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = dw(i, l, t);
              N0(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Zr === null || !Zr.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = fw(i, s, t);
                N0(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Iw(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ow() {
  var e = hc.current;
  return hc.current = pc, e === null ? pc : e;
}
function av() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4), st === null || !(Uo & 268435455) && !(ad & 268435455) || Br(st, pt);
}
function gc(e, t) {
  var n = he;
  he |= 2;
  var r = Ow();
  (st !== e || pt !== t) && (lr = null, Do(e, t));
  do
    try {
      rM();
      break;
    } catch (o) {
      Ew(e, o);
    }
  while (!0);
  if (Bm(), he = n, hc.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, nt;
}
function rM() {
  for (; Ze !== null; )
    Mw(Ze);
}
function oM() {
  for (; Ze !== null && !OE(); )
    Mw(Ze);
}
function Mw(e) {
  var t = $w(e.alternate, e, Ut);
  e.memoizedProps = e.pendingProps, t === null ? Iw(e) : Ze = t, tv.current = null;
}
function Iw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = QO(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        nt = 6, Ze = null;
        return;
      }
    } else if (n = XO(n, t, Ut), n !== null) {
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
function Co(e, t, n) {
  var r = xe, o = vn.transition;
  try {
    vn.transition = null, xe = 1, iM(e, t, n, r);
  } finally {
    vn.transition = o, xe = r;
  }
  return null;
}
function iM(e, t, n, r) {
  do
    Wi();
  while (Gr !== null);
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
  if (NE(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Yl || (Yl = !0, Aw(Zu, function() {
    return Wi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = vn.transition, vn.transition = null;
    var a = xe;
    xe = 1;
    var s = he;
    he |= 4, tv.current = null, JO(e, n), Pw(n, e), PO(eh), ec = !!Jp, eh = Jp = null, e.current = n, eM(n), ME(), he = s, xe = a, vn.transition = i;
  } else
    e.current = n;
  if (Yl && (Yl = !1, Gr = e, vc = o), i = e.pendingLanes, i === 0 && (Zr = null), $E(n.stateNode), Ft(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (mc)
    throw mc = !1, e = Sh, Sh = null, e;
  return vc & 1 && e.tag !== 0 && Wi(), i = e.pendingLanes, i & 1 ? e === xh ? ds++ : (ds = 0, xh = e) : ds = 0, fo(), null;
}
function Wi() {
  if (Gr !== null) {
    var e = cx(vc), t = vn.transition, n = xe;
    try {
      if (vn.transition = null, xe = 16 > e ? 16 : e, Gr === null)
        var r = !1;
      else {
        if (e = Gr, Gr = null, vc = 0, he & 6)
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
                      us(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (ww(c), c === u) {
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
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var S = g.sibling;
                    g.sibling = null, g = S;
                  } while (g !== null);
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
                      us(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, B = m;
                  break e;
                }
                B = i.return;
              }
        }
        var h = e.current;
        for (B = h; B !== null; ) {
          a = B;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null)
            b.return = a, B = b;
          else
            e:
              for (a = h; B !== null; ) {
                if (s = B, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        id(9, s);
                    }
                  } catch (k) {
                    Ve(s, s.return, k);
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
        if (he = o, fo(), Qn && typeof Qn.onPostCommitFiberRoot == "function")
          try {
            Qn.onPostCommitFiberRoot(Qc, e);
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
function sy(e, t, n) {
  t = ra(n, t), t = dw(e, t, 1), e = Qr(e, t, 1), t = _t(), e !== null && (sl(e, 1, t), Ft(e, t));
}
function Ve(e, t, n) {
  if (e.tag === 3)
    sy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zr === null || !Zr.has(r))) {
          e = ra(n, e), e = fw(t, e, 1), t = Qr(t, e, 1), e = _t(), t !== null && (sl(t, 1, e), Ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function aM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _t(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (nt === 4 || nt === 3 && (pt & 130023424) === pt && 500 > Ke() - rv ? Do(e, 0) : nv |= n), Ft(e, t);
}
function Rw(e, t) {
  t === 0 && (e.mode & 1 ? (t = zl, zl <<= 1, !(zl & 130023424) && (zl = 4194304)) : t = 1);
  var n = _t();
  e = Cr(e, t), e !== null && (sl(e, t, n), Ft(e, n));
}
function sM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Rw(e, n);
}
function lM(e, t) {
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
  r !== null && r.delete(t), Rw(e, n);
}
var $w;
$w = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || At.current)
      $t = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return $t = !1, qO(e, t, n);
      $t = !!(e.flags & 131072);
    }
  else
    $t = !1, $e && t.flags & 1048576 && Fx(t, sc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      _u(e, t), e = t.pendingProps;
      var o = Ji(t, wt.current);
      Bi(t, n), o = Xm(null, t, r, e, o, n);
      var i = Qm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Dt(r) ? (i = !0, ic(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Um(t), o.updater = rd, t.stateNode = o, o._reactInternals = t, uh(t, r, e, n), t = fh(null, t, r, !0, i, n)) : (t.tag = 0, $e && i && zm(t), Pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (_u(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = cM(r), e = En(r, e), o) {
          case 0:
            t = dh(null, t, r, e, n);
            break e;
          case 1:
            t = Q0(null, t, r, e, n);
            break e;
          case 11:
            t = q0(null, t, r, e, n);
            break e;
          case 14:
            t = X0(null, t, r, En(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), dh(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), Q0(e, t, r, o, n);
    case 3:
      e: {
        if (vw(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, jx(e, t), cc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ra(Error(F(423)), t), t = Z0(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ra(Error(F(424)), t), t = Z0(e, t, r, n, o);
            break e;
          } else
            for (Kt = Xr(t.stateNode.containerInfo.firstChild), Yt = t, $e = !0, Mn = null, n = Hx(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ea(), r === o) {
            t = kr(e, t, n);
            break e;
          }
          Pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ux(t), e === null && ah(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, th(r, o) ? a = null : i !== null && th(r, i) && (t.flags |= 32), mw(e, t), Pt(e, t, a, n), t.child;
    case 6:
      return e === null && ah(t), null;
    case 13:
      return gw(e, t, n);
    case 4:
      return Gm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ta(t, null, r, n) : Pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), q0(e, t, r, o, n);
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Pe(lc, r._currentValue), r._currentValue = a, i !== null)
          if (zn(i.value, a)) {
            if (i.children === o.children && !At.current) {
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
                      l = vr(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), sh(
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
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), sh(a, n, t), a = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, Bi(t, n), o = yn(o), r = r(o), t.flags |= 1, Pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = En(r, t.pendingProps), o = En(r.type, o), X0(e, t, r, o, n);
    case 15:
      return pw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), _u(e, t), t.tag = 1, Dt(r) ? (e = !0, ic(t)) : e = !1, Bi(t, n), Bx(t, r, o), uh(t, r, o, n), fh(null, t, r, !0, e, n);
    case 19:
      return yw(e, t, n);
    case 22:
      return hw(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Aw(e, t) {
  return ax(e, t);
}
function uM(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function hn(e, t, n, r) {
  return new uM(e, t, n, r);
}
function sv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function cM(e) {
  if (typeof e == "function")
    return sv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Tm)
      return 11;
    if (e === _m)
      return 14;
  }
  return 2;
}
function eo(e, t) {
  var n = e.alternate;
  return n === null ? (n = hn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Mu(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    sv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case hi:
          return Fo(n.children, o, i, t);
        case Pm:
          a = 8, o |= 8;
          break;
        case $p:
          return e = hn(12, n, t, o | 2), e.elementType = $p, e.lanes = i, e;
        case Ap:
          return e = hn(13, n, t, o), e.elementType = Ap, e.lanes = i, e;
        case Dp:
          return e = hn(19, n, t, o), e.elementType = Dp, e.lanes = i, e;
        case WS:
          return sd(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case VS:
                a = 10;
                break e;
              case BS:
                a = 9;
                break e;
              case Tm:
                a = 11;
                break e;
              case _m:
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
function Fo(e, t, n, r) {
  return e = hn(7, e, r, t), e.lanes = n, e;
}
function sd(e, t, n, r) {
  return e = hn(22, e, r, t), e.elementType = WS, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Rf(e, t, n) {
  return e = hn(6, e, null, t), e.lanes = n, e;
}
function $f(e, t, n) {
  return t = hn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function dM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pf(0), this.expirationTimes = pf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function lv(e, t, n, r, o, i, a, s, l) {
  return e = new dM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = hn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Um(i), e;
}
function fM(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: pi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Dw(e) {
  if (!e)
    return io;
  e = e._reactInternals;
  e: {
    if (Xo(e) !== e || e.tag !== 1)
      throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Dt(t.type)) {
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
    if (Dt(n))
      return Ax(e, n, t);
  }
  return t;
}
function Fw(e, t, n, r, o, i, a, s, l) {
  return e = lv(n, r, !0, e, o, i, a, s, l), e.context = Dw(null), n = e.current, r = _t(), o = Jr(n), i = vr(r, o), i.callback = t ?? null, Qr(n, i, o), e.current.lanes = o, sl(e, o, r), Ft(e, r), e;
}
function ld(e, t, n, r) {
  var o = t.current, i = _t(), a = Jr(o);
  return n = Dw(n), t.context === null ? t.context = n : t.pendingContext = n, t = vr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qr(o, t, a), e !== null && (An(e, o, a, i), ku(e, o, a)), a;
}
function yc(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ly(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uv(e, t) {
  ly(e, t), (e = e.alternate) && ly(e, t);
}
function pM() {
  return null;
}
var Lw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function cv(e) {
  this._internalRoot = e;
}
ud.prototype.render = cv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  ld(e, t, null, null);
};
ud.prototype.unmount = cv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Go(function() {
      ld(null, e, null, null);
    }), t[wr] = null;
  }
};
function ud(e) {
  this._internalRoot = e;
}
ud.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = px();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vr.length && t !== 0 && t < Vr[n].priority; n++)
      ;
    Vr.splice(n, 0, e), n === 0 && mx(e);
  }
};
function dv(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function cd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function uy() {
}
function hM(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = yc(a);
        i.call(u);
      };
    }
    var a = Fw(t, r, e, 0, null, !1, !1, "", uy);
    return e._reactRootContainer = a, e[wr] = a.current, As(e.nodeType === 8 ? e.parentNode : e), Go(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = yc(l);
      s.call(u);
    };
  }
  var l = lv(e, 0, !1, null, null, !1, !1, "", uy);
  return e._reactRootContainer = l, e[wr] = l.current, As(e.nodeType === 8 ? e.parentNode : e), Go(function() {
    ld(t, l, n, r);
  }), l;
}
function dd(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = yc(a);
        s.call(l);
      };
    }
    ld(t, a, e, o);
  } else
    a = hM(n, t, e, o, r);
  return yc(a);
}
dx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ka(t.pendingLanes);
        n !== 0 && (Mm(t, n | 1), Ft(t, Ke()), !(he & 6) && (oa = Ke() + 500, fo()));
      }
      break;
    case 13:
      Go(function() {
        var r = Cr(e, 1);
        if (r !== null) {
          var o = _t();
          An(r, e, 1, o);
        }
      }), uv(e, 1);
  }
};
Im = function(e) {
  if (e.tag === 13) {
    var t = Cr(e, 134217728);
    if (t !== null) {
      var n = _t();
      An(t, e, 134217728, n);
    }
    uv(e, 134217728);
  }
};
fx = function(e) {
  if (e.tag === 13) {
    var t = Jr(e), n = Cr(e, t);
    if (n !== null) {
      var r = _t();
      An(n, e, t, r);
    }
    uv(e, t);
  }
};
px = function() {
  return xe;
};
hx = function(e, t) {
  var n = xe;
  try {
    return xe = e, t();
  } finally {
    xe = n;
  }
};
Up = function(e, t, n) {
  switch (t) {
    case "input":
      if (zp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = td(r);
            if (!o)
              throw Error(F(90));
            US(r), zp(r, o);
          }
        }
      }
      break;
    case "textarea":
      KS(e, n);
      break;
    case "select":
      t = n.value, t != null && zi(e, !!n.multiple, t, !1);
  }
};
ex = ov;
tx = Go;
var mM = { usingClientEntryPoint: !1, Events: [ul, yi, td, ZS, JS, ov] }, Da = { findFiberByHostInstance: Oo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, vM = { bundleType: Da.bundleType, version: Da.version, rendererPackageName: Da.rendererPackageName, rendererConfig: Da.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Er.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ox(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Da.findFiberByHostInstance || pM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ql.isDisabled && ql.supportsFiber)
    try {
      Qc = ql.inject(vM), Qn = ql;
    } catch {
    }
}
en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mM;
en.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dv(t))
    throw Error(F(200));
  return fM(e, t, null, n);
};
en.createRoot = function(e, t) {
  if (!dv(e))
    throw Error(F(299));
  var n = !1, r = "", o = Lw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = lv(e, 1, !1, null, null, n, !1, r, o), e[wr] = t.current, As(e.nodeType === 8 ? e.parentNode : e), new cv(t);
};
en.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = ox(t), e = e === null ? null : e.stateNode, e;
};
en.flushSync = function(e) {
  return Go(e);
};
en.hydrate = function(e, t, n) {
  if (!cd(t))
    throw Error(F(200));
  return dd(null, e, t, !0, n);
};
en.hydrateRoot = function(e, t, n) {
  if (!dv(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Lw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Fw(t, null, e, 1, n ?? null, o, !1, i, a), e[wr] = t.current, As(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new ud(t);
};
en.render = function(e, t, n) {
  if (!cd(t))
    throw Error(F(200));
  return dd(null, e, t, !1, n);
};
en.unmountComponentAtNode = function(e) {
  if (!cd(e))
    throw Error(F(40));
  return e._reactRootContainer ? (Go(function() {
    dd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wr] = null;
    });
  }), !0) : !1;
};
en.unstable_batchedUpdates = ov;
en.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!cd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return dd(e, t, n, !1, r);
};
en.version = "18.2.0-next-9e3b772b8-20220608";
function zw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zw);
    } catch (e) {
      console.error(e);
    }
}
zw(), FS.exports = en;
var fd = FS.exports, cy = fd;
Ip.createRoot = cy.createRoot, Ip.hydrateRoot = cy.hydrateRoot;
var Nw = "Expected a function", dy = NaN, gM = "[object Symbol]", yM = /^\s+|\s+$/g, bM = /^[-+]0x[0-9a-f]+$/i, SM = /^0b[01]+$/i, xM = /^0o[0-7]+$/i, wM = parseInt, CM = typeof Hr == "object" && Hr && Hr.Object === Object && Hr, kM = typeof self == "object" && self && self.Object === Object && self, PM = CM || kM || Function("return this")(), TM = Object.prototype, _M = TM.toString, EM = Math.max, OM = Math.min, Af = function() {
  return PM.Date.now();
};
function MM(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Nw);
  t = fy(t) || 0, bc(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? EM(fy(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var T = r, _ = o;
    return r = o = void 0, u = P, a = e.apply(_, T), a;
  }
  function v(P) {
    return u = P, s = setTimeout(m, t), c ? p(P) : a;
  }
  function g(P) {
    var T = P - l, _ = P - u, M = t - T;
    return d ? OM(M, i - _) : M;
  }
  function S(P) {
    var T = P - l, _ = P - u;
    return l === void 0 || T >= t || T < 0 || d && _ >= i;
  }
  function m() {
    var P = Af();
    if (S(P))
      return h(P);
    s = setTimeout(m, g(P));
  }
  function h(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? a : h(Af());
  }
  function k() {
    var P = Af(), T = S(P);
    if (r = arguments, o = this, l = P, T) {
      if (s === void 0)
        return v(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return k.cancel = b, k.flush = x, k;
}
function IM(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Nw);
  return bc(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), MM(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function bc(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function RM(e) {
  return !!e && typeof e == "object";
}
function $M(e) {
  return typeof e == "symbol" || RM(e) && _M.call(e) == gM;
}
function fy(e) {
  if (typeof e == "number")
    return e;
  if ($M(e))
    return dy;
  if (bc(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = bc(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(yM, "");
  var n = SM.test(e);
  return n || xM.test(e) ? wM(e.slice(2), n ? 2 : 8) : bM.test(e) ? dy : +e;
}
var AM = IM;
const DM = /* @__PURE__ */ il(AM);
function FM(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function LM(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var zM = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(LM(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = FM(o);
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
}(), bt = "-ms-", Sc = "-moz-", ge = "-webkit-", jw = "comm", fv = "rule", pv = "decl", NM = "@import", Vw = "@keyframes", jM = "@layer", VM = Math.abs, pd = String.fromCharCode, BM = Object.assign;
function WM(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function Bw(e) {
  return e.trim();
}
function HM(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function kh(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ws(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function hv(e) {
  return e.length;
}
function Xl(e, t) {
  return t.push(e), e;
}
function UM(e, t) {
  return e.map(t).join("");
}
var hd = 1, ia = 1, Ww = 0, jt = 0, Qe = 0, xa = "";
function md(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: hd, column: ia, length: a, return: "" };
}
function Fa(e, t) {
  return BM(md("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function GM() {
  return Qe;
}
function KM() {
  return Qe = jt > 0 ? ft(xa, --jt) : 0, ia--, Qe === 10 && (ia = 1, hd--), Qe;
}
function qt() {
  return Qe = jt < Ww ? ft(xa, jt++) : 0, ia++, Qe === 10 && (ia = 1, hd++), Qe;
}
function Jn() {
  return ft(xa, jt);
}
function Iu() {
  return jt;
}
function dl(e, t) {
  return Ws(xa, e, t);
}
function Hs(e) {
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
function Hw(e) {
  return hd = ia = 1, Ww = Gn(xa = e), jt = 0, [];
}
function Uw(e) {
  return xa = "", e;
}
function Ru(e) {
  return Bw(dl(jt - 1, Ph(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function YM(e) {
  for (; (Qe = Jn()) && Qe < 33; )
    qt();
  return Hs(e) > 2 || Hs(Qe) > 3 ? "" : " ";
}
function qM(e, t) {
  for (; --t && qt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return dl(e, Iu() + (t < 6 && Jn() == 32 && qt() == 32));
}
function Ph(e) {
  for (; qt(); )
    switch (Qe) {
      case e:
        return jt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ph(Qe);
        break;
      case 40:
        e === 41 && Ph(e);
        break;
      case 92:
        qt();
        break;
    }
  return jt;
}
function XM(e, t) {
  for (; qt() && e + Qe !== 57; )
    if (e + Qe === 84 && Jn() === 47)
      break;
  return "/*" + dl(t, jt - 1) + "*" + pd(e === 47 ? e : qt());
}
function QM(e) {
  for (; !Hs(Jn()); )
    qt();
  return dl(e, jt);
}
function ZM(e) {
  return Uw($u("", null, null, null, [""], e = Hw(e), 0, [0], e));
}
function $u(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, v = 0, g = 1, S = 1, m = 1, h = 0, b = "", x = o, k = i, P = r, T = b; S; )
    switch (v = h, h = qt()) {
      case 40:
        if (v != 108 && ft(T, d - 1) == 58) {
          kh(T += ye(Ru(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Ru(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += YM(v);
        break;
      case 92:
        T += qM(Iu() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            Xl(JM(XM(qt(), Iu()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * g:
        s[u++] = Gn(T) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            m == -1 && (T = ye(T, /\f/g, "")), p > 0 && Gn(T) - d && Xl(p > 32 ? hy(T + ";", r, n, d - 1) : hy(ye(T, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (Xl(P = py(T, t, n, u, c, o, s, b, x = [], k = [], d), i), h === 123)
              if (c === 0)
                $u(T, t, P, P, x, i, d, s, k);
              else
                switch (f === 99 && ft(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    $u(e, P, P, r && Xl(py(e, P, P, 0, 0, o, s, b, o, x = [], d), k), o, k, d, s, r ? x : k);
                    break;
                  default:
                    $u(T, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, g = m = 1, b = T = "", d = a;
        break;
      case 58:
        d = 1 + Gn(T), p = v;
      default:
        if (g < 1) {
          if (h == 123)
            --g;
          else if (h == 125 && g++ == 0 && KM() == 125)
            continue;
        }
        switch (T += pd(h), h * g) {
          case 38:
            m = c > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            s[u++] = (Gn(T) - 1) * m, m = 1;
            break;
          case 64:
            Jn() === 45 && (T += Ru(qt())), f = Jn(), c = d = Gn(b = T += QM(Iu())), h++;
            break;
          case 45:
            v === 45 && Gn(T) == 2 && (g = 0);
        }
    }
  return i;
}
function py(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = hv(f), v = 0, g = 0, S = 0; v < r; ++v)
    for (var m = 0, h = Ws(e, d + 1, d = VM(g = a[v])), b = e; m < p; ++m)
      (b = Bw(g > 0 ? f[m] + " " + h : ye(h, /&\f/g, f[m]))) && (l[S++] = b);
  return md(e, t, n, o === 0 ? fv : s, l, u, c);
}
function JM(e, t, n) {
  return md(e, t, n, jw, pd(GM()), Ws(e, 2, -2), 0);
}
function hy(e, t, n, r) {
  return md(e, t, n, pv, Ws(e, 0, r), Ws(e, r + 1, -1), r);
}
function Hi(e, t) {
  for (var n = "", r = hv(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function eI(e, t, n, r) {
  switch (e.type) {
    case jM:
      if (e.children.length)
        break;
    case NM:
    case pv:
      return e.return = e.return || e.value;
    case jw:
      return "";
    case Vw:
      return e.return = e.value + "{" + Hi(e.children, r) + "}";
    case fv:
      e.value = e.props.join(",");
  }
  return Gn(n = Hi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function tI(e) {
  var t = hv(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function nI(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var my = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function Gw(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var rI = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Jn(), o === 38 && i === 12 && (n[r] = 1), !Hs(i); )
    qt();
  return dl(t, jt);
}, oI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Hs(o)) {
      case 0:
        o === 38 && Jn() === 12 && (n[r] = 1), t[r] += rI(jt - 1, n, r);
        break;
      case 2:
        t[r] += Ru(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Jn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += pd(o);
    }
  while (o = qt());
  return t;
}, iI = function(t, n) {
  return Uw(oI(Hw(t), n));
}, vy = /* @__PURE__ */ new WeakMap(), aI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !vy.get(r)) && !o) {
      vy.set(t, !0);
      for (var i = [], a = iI(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, sI = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Kw(e, t) {
  switch (WM(e, t)) {
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
      return ge + e + Sc + e + bt + e + e;
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
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Sc + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~kh(e, "stretch") ? Kw(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Gn(e) - 3 - (~kh(e, "!important") && 10))) {
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
var lI = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case pv:
        t.return = Kw(t.value, t.length);
        break;
      case Vw:
        return Hi([Fa(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case fv:
        if (t.length)
          return UM(t.props, function(i) {
            switch (HM(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Hi([Fa(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + Sc + "$1")]
                })], o);
              case "::placeholder":
                return Hi([Fa(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), Fa(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + Sc + "$1")]
                }), Fa(t, {
                  props: [ye(i, /:(plac\w+)/, bt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, uI = [lI], cI = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var S = g.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || uI, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var S = g.getAttribute("data-emotion").split(" "), m = 1; m < S.length; m++)
        i[S[m]] = !0;
      s.push(g);
    }
  );
  var l, u = [aI, sI];
  {
    var c, d = [eI, nI(function(g) {
      c.insert(g);
    })], f = tI(u.concat(o, d)), p = function(S) {
      return Hi(ZM(S), f);
    };
    l = function(S, m, h, b) {
      c = h, p(S ? S + "{" + m.styles + "}" : m.styles), b && (v.inserted[m.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new zM({
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
  return v.sheet.hydrate(s), v;
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
var Yw = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, mv = lt ? Symbol.for("react.element") : 60103, vv = lt ? Symbol.for("react.portal") : 60106, vd = lt ? Symbol.for("react.fragment") : 60107, gd = lt ? Symbol.for("react.strict_mode") : 60108, yd = lt ? Symbol.for("react.profiler") : 60114, bd = lt ? Symbol.for("react.provider") : 60109, Sd = lt ? Symbol.for("react.context") : 60110, gv = lt ? Symbol.for("react.async_mode") : 60111, xd = lt ? Symbol.for("react.concurrent_mode") : 60111, wd = lt ? Symbol.for("react.forward_ref") : 60112, Cd = lt ? Symbol.for("react.suspense") : 60113, dI = lt ? Symbol.for("react.suspense_list") : 60120, kd = lt ? Symbol.for("react.memo") : 60115, Pd = lt ? Symbol.for("react.lazy") : 60116, fI = lt ? Symbol.for("react.block") : 60121, pI = lt ? Symbol.for("react.fundamental") : 60117, hI = lt ? Symbol.for("react.responder") : 60118, mI = lt ? Symbol.for("react.scope") : 60119;
function nn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case mv:
        switch (e = e.type, e) {
          case gv:
          case xd:
          case vd:
          case yd:
          case gd:
          case Cd:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Sd:
              case wd:
              case Pd:
              case kd:
              case bd:
                return e;
              default:
                return t;
            }
        }
      case vv:
        return t;
    }
  }
}
function qw(e) {
  return nn(e) === xd;
}
we.AsyncMode = gv;
we.ConcurrentMode = xd;
we.ContextConsumer = Sd;
we.ContextProvider = bd;
we.Element = mv;
we.ForwardRef = wd;
we.Fragment = vd;
we.Lazy = Pd;
we.Memo = kd;
we.Portal = vv;
we.Profiler = yd;
we.StrictMode = gd;
we.Suspense = Cd;
we.isAsyncMode = function(e) {
  return qw(e) || nn(e) === gv;
};
we.isConcurrentMode = qw;
we.isContextConsumer = function(e) {
  return nn(e) === Sd;
};
we.isContextProvider = function(e) {
  return nn(e) === bd;
};
we.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mv;
};
we.isForwardRef = function(e) {
  return nn(e) === wd;
};
we.isFragment = function(e) {
  return nn(e) === vd;
};
we.isLazy = function(e) {
  return nn(e) === Pd;
};
we.isMemo = function(e) {
  return nn(e) === kd;
};
we.isPortal = function(e) {
  return nn(e) === vv;
};
we.isProfiler = function(e) {
  return nn(e) === yd;
};
we.isStrictMode = function(e) {
  return nn(e) === gd;
};
we.isSuspense = function(e) {
  return nn(e) === Cd;
};
we.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === vd || e === xd || e === yd || e === gd || e === Cd || e === dI || typeof e == "object" && e !== null && (e.$$typeof === Pd || e.$$typeof === kd || e.$$typeof === bd || e.$$typeof === Sd || e.$$typeof === wd || e.$$typeof === pI || e.$$typeof === hI || e.$$typeof === mI || e.$$typeof === fI);
};
we.typeOf = nn;
Yw.exports = we;
var vI = Yw.exports, Xw = vI, gI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yI = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qw = {};
Qw[Xw.ForwardRef] = gI;
Qw[Xw.Memo] = yI;
var bI = !0;
function Zw(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var yv = function(t, n, r) {
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
  bI === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, bv = function(t, n, r) {
  yv(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function SI(e) {
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
var xI = {
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
}, wI = /[A-Z]|^ms/g, CI = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Jw = function(t) {
  return t.charCodeAt(1) === 45;
}, gy = function(t) {
  return t != null && typeof t != "boolean";
}, Df = /* @__PURE__ */ Gw(function(e) {
  return Jw(e) ? e : e.replace(wI, "-$&").toLowerCase();
}), yy = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(CI, function(r, o, i) {
          return Kn = {
            name: o,
            styles: i,
            next: Kn
          }, o;
        });
  }
  return xI[t] !== 1 && !Jw(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Us(e, t, n) {
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
      return kI(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Kn, a = n(e);
        return Kn = i, Us(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function kI(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Us(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : gy(a) && (r += Df(i) + ":" + yy(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          gy(a[s]) && (r += Df(i) + ":" + yy(i, a[s]) + ";");
      else {
        var l = Us(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Df(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var by = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Kn, Td = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Kn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Us(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Us(r, n, t[s]), o && (i += a[s]);
  by.lastIndex = 0;
  for (var l = "", u; (u = by.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = SI(i) + l;
  return {
    name: c,
    styles: i,
    next: Kn
  };
}, PI = function(t) {
  return t();
}, eC = o0.useInsertionEffect ? o0.useInsertionEffect : !1, tC = eC || PI, Sy = eC || y.useLayoutEffect, Sv = {}.hasOwnProperty, nC = /* @__PURE__ */ y.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cI({
    key: "css"
  }) : null
);
nC.Provider;
var xv = function(t) {
  return /* @__PURE__ */ y.forwardRef(function(n, r) {
    var o = y.useContext(nC);
    return t(n, o, r);
  });
}, aa = /* @__PURE__ */ y.createContext({}), TI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, _I = /* @__PURE__ */ my(function(e) {
  return my(function(t) {
    return TI(e, t);
  });
}), EI = function(t) {
  var n = y.useContext(aa);
  return t.theme !== n && (n = _I(n)(t.theme)), /* @__PURE__ */ y.createElement(aa.Provider, {
    value: n
  }, t.children);
}, Th = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", OI = function(t, n) {
  var r = {};
  for (var o in n)
    Sv.call(n, o) && (r[o] = n[o]);
  return r[Th] = t, r;
}, MI = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return yv(n, r, o), tC(function() {
    return bv(n, r, o);
  }), null;
}, II = /* @__PURE__ */ xv(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Th], i = [r], a = "";
  typeof e.className == "string" ? a = Zw(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Td(i, void 0, y.useContext(aa));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Sv.call(e, u) && u !== "css" && u !== Th && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(MI, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ y.createElement(o, l));
}), RI = II, ee = function(t, n) {
  var r = arguments;
  if (n == null || !Sv.call(n, "css"))
    return y.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = RI, i[1] = OI(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return y.createElement.apply(null, i);
}, _d = /* @__PURE__ */ xv(function(e, t) {
  var n = e.styles, r = Td([n], void 0, y.useContext(aa)), o = y.useRef();
  return Sy(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Sy(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && bv(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function wv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Td(t);
}
var rC = function() {
  var t = wv.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, oC = String.raw, iC = oC`
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
`, $I = () => /* @__PURE__ */ w.jsx(_d, { styles: iC }), AI = ({ scope: e = "" }) => /* @__PURE__ */ w.jsx(
  _d,
  {
    styles: oC`
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

      ${iC}
    `
  }
);
function DI(e, t) {
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
  } = e, s = y.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = y.useContext(s);
    if (!c && n) {
      const d = new Error(
        i ?? DI(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [FI, LI] = Je({
  strict: !1,
  name: "PortalManagerContext"
});
function aC(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ w.jsx(FI, { value: { zIndex: n }, children: t });
}
aC.displayName = "PortalManager";
var sa = globalThis != null && globalThis.document ? y.useLayoutEffect : y.useEffect, [sC, zI] = Je({
  strict: !1,
  name: "PortalContext"
}), Cv = "chakra-portal", NI = ".chakra-portal", jI = (e) => /* @__PURE__ */ w.jsx(
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
), VI = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = y.useState(null), i = y.useRef(null), [, a] = y.useState({});
  y.useEffect(() => a({}), []);
  const s = zI(), l = LI();
  sa(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = Cv, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ w.jsx(jI, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? fd.createPortal(
    /* @__PURE__ */ w.jsx(sC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ w.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, BI = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = y.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Cv), l;
  }, [o]), [, s] = y.useState({});
  return sa(() => s({}), []), sa(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? fd.createPortal(
    /* @__PURE__ */ w.jsx(sC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function fl(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ w.jsx(BI, { containerRef: n, ...r }) : /* @__PURE__ */ w.jsx(VI, { ...r });
}
fl.className = Cv;
fl.selector = NI;
fl.displayName = "Portal";
function po() {
  const e = y.useContext(
    aa
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var kv = y.createContext({});
kv.displayName = "ColorModeContext";
function wa() {
  const e = y.useContext(kv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function xy(e, t) {
  const { colorMode: n } = wa();
  return n === "dark" ? t : e;
}
var Ql = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function WI(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? Ql.dark : Ql.light), document.body.classList.remove(r ? Ql.light : Ql.dark);
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
var HI = "chakra-ui-color-mode";
function UI(e) {
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
var GI = UI(HI), wy = () => {
};
function Cy(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function lC(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = GI
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = y.useState(
    () => Cy(a, s)
  ), [c, d] = y.useState(
    () => Cy(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: v, addListener: g } = y.useMemo(
    () => WI({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? c : l, m = y.useCallback(
    (x) => {
      const k = x === "system" ? f() : x;
      u(k), p(k === "dark"), v(k), a.set(k);
    },
    [a, f, p, v]
  );
  sa(() => {
    o === "system" && d(f());
  }, []), y.useEffect(() => {
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
  const h = y.useCallback(() => {
    m(S === "dark" ? "light" : "dark");
  }, [S, m]);
  y.useEffect(() => {
    if (r)
      return g(m);
  }, [r, g, m]);
  const b = y.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? wy : h,
      setColorMode: t ? wy : m,
      forced: t !== void 0
    }),
    [S, h, m, t]
  );
  return /* @__PURE__ */ w.jsx(kv.Provider, { value: b, children: n });
}
lC.displayName = "ColorModeProvider";
var KI = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function YI(e) {
  let t = e;
  return KI.has(t) || (t = "light"), t;
}
function qI(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = YI(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function XI(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ w.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: qI(e) }
    }
  );
}
function QI() {
  const e = wa(), t = po();
  return { ...e, theme: t };
}
var ae = (...e) => e.filter(Boolean).join(" ");
function ZI() {
  return !1;
}
function Lt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var pl = (e) => {
  const { condition: t, message: n } = e;
  t && ZI() && console.warn(n);
};
function Xn(e, ...t) {
  return JI(e) ? e(...t) : e;
}
var JI = (e) => typeof e == "function", dn = (e) => e ? "" : void 0, Ff = (e) => e ? !0 : void 0;
function De(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function uC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var xc = { exports: {} };
xc.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", v = "[object GeneratorFunction]", g = "[object Map]", S = "[object Number]", m = "[object Null]", h = "[object Object]", b = "[object Proxy]", x = "[object RegExp]", k = "[object Set]", P = "[object String]", T = "[object Undefined]", _ = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", z = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, N = {};
  N[D] = N[G] = N[H] = N[L] = N[W] = N[K] = N[$] = N[A] = N[z] = !0, N[s] = N[l] = N[M] = N[c] = N[I] = N[d] = N[f] = N[p] = N[g] = N[S] = N[h] = N[x] = N[k] = N[P] = N[_] = !1;
  var te = typeof Hr == "object" && Hr && Hr.Object === Object && Hr, le = typeof self == "object" && self && self.Object === Object && self, ie = te || le || Function("return this")(), se = t && !t.nodeType && t, me = se && !0 && e && !e.nodeType && e, Ce = me && me.exports === se, et = Ce && te.process, qe = function() {
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
  function Mr(C, E) {
    for (var R = -1, j = Array(C); ++R < C; )
      j[R] = E(R);
    return j;
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
  var Wt = Array.prototype, Ir = Function.prototype, vt = Object.prototype, jn = ie["__core-js_shared__"], Rr = Ir.toString, an = vt.hasOwnProperty, ni = function() {
    var C = /[^.]+$/.exec(jn && jn.keys && jn.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), ka = vt.toString, Pl = Rr.call(Object), Tl = RegExp(
    "^" + Rr.call(an).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), vo = Ce ? ie.Buffer : void 0, zg = ie.Symbol, Ng = ie.Uint8Array, jg = vo ? vo.allocUnsafe : void 0, Vg = Ge(Object.getPrototypeOf, Object), Bg = Object.create, BT = vt.propertyIsEnumerable, WT = Wt.splice, go = zg ? zg.toStringTag : void 0, _l = function() {
    try {
      var C = Jd(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), HT = vo ? vo.isBuffer : void 0, Wg = Math.max, UT = Date.now, Hg = Jd(ie, "Map"), Pa = Jd(Object, "create"), GT = /* @__PURE__ */ function() {
    function C() {
    }
    return function(E) {
      if (!bo(E))
        return {};
      if (Bg)
        return Bg(E);
      C.prototype = E;
      var R = new C();
      return C.prototype = void 0, R;
    };
  }();
  function yo(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var j = C[E];
      this.set(j[0], j[1]);
    }
  }
  function KT() {
    this.__data__ = Pa ? Pa(null) : {}, this.size = 0;
  }
  function YT(C) {
    var E = this.has(C) && delete this.__data__[C];
    return this.size -= E ? 1 : 0, E;
  }
  function qT(C) {
    var E = this.__data__;
    if (Pa) {
      var R = E[C];
      return R === r ? void 0 : R;
    }
    return an.call(E, C) ? E[C] : void 0;
  }
  function XT(C) {
    var E = this.__data__;
    return Pa ? E[C] !== void 0 : an.call(E, C);
  }
  function QT(C, E) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = Pa && E === void 0 ? r : E, this;
  }
  yo.prototype.clear = KT, yo.prototype.delete = YT, yo.prototype.get = qT, yo.prototype.has = XT, yo.prototype.set = QT;
  function ar(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var j = C[E];
      this.set(j[0], j[1]);
    }
  }
  function ZT() {
    this.__data__ = [], this.size = 0;
  }
  function JT(C) {
    var E = this.__data__, R = El(E, C);
    if (R < 0)
      return !1;
    var j = E.length - 1;
    return R == j ? E.pop() : WT.call(E, R, 1), --this.size, !0;
  }
  function e_(C) {
    var E = this.__data__, R = El(E, C);
    return R < 0 ? void 0 : E[R][1];
  }
  function t_(C) {
    return El(this.__data__, C) > -1;
  }
  function n_(C, E) {
    var R = this.__data__, j = El(R, C);
    return j < 0 ? (++this.size, R.push([C, E])) : R[j][1] = E, this;
  }
  ar.prototype.clear = ZT, ar.prototype.delete = JT, ar.prototype.get = e_, ar.prototype.has = t_, ar.prototype.set = n_;
  function ri(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var j = C[E];
      this.set(j[0], j[1]);
    }
  }
  function r_() {
    this.size = 0, this.__data__ = {
      hash: new yo(),
      map: new (Hg || ar)(),
      string: new yo()
    };
  }
  function o_(C) {
    var E = Ml(this, C).delete(C);
    return this.size -= E ? 1 : 0, E;
  }
  function i_(C) {
    return Ml(this, C).get(C);
  }
  function a_(C) {
    return Ml(this, C).has(C);
  }
  function s_(C, E) {
    var R = Ml(this, C), j = R.size;
    return R.set(C, E), this.size += R.size == j ? 0 : 1, this;
  }
  ri.prototype.clear = r_, ri.prototype.delete = o_, ri.prototype.get = i_, ri.prototype.has = a_, ri.prototype.set = s_;
  function oi(C) {
    var E = this.__data__ = new ar(C);
    this.size = E.size;
  }
  function l_() {
    this.__data__ = new ar(), this.size = 0;
  }
  function u_(C) {
    var E = this.__data__, R = E.delete(C);
    return this.size = E.size, R;
  }
  function c_(C) {
    return this.__data__.get(C);
  }
  function d_(C) {
    return this.__data__.has(C);
  }
  function f_(C, E) {
    var R = this.__data__;
    if (R instanceof ar) {
      var j = R.__data__;
      if (!Hg || j.length < n - 1)
        return j.push([C, E]), this.size = ++R.size, this;
      R = this.__data__ = new ri(j);
    }
    return R.set(C, E), this.size = R.size, this;
  }
  oi.prototype.clear = l_, oi.prototype.delete = u_, oi.prototype.get = c_, oi.prototype.has = d_, oi.prototype.set = f_;
  function p_(C, E) {
    var R = nf(C), j = !R && tf(C), pe = !R && !j && qg(C), ke = !R && !j && !pe && Qg(C), Ie = R || j || pe || ke, ce = Ie ? Mr(C.length, String) : [], Re = ce.length;
    for (var sn in C)
      (E || an.call(C, sn)) && !(Ie && // Safari 9 has enumerable `arguments.length` in strict mode.
      (sn == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (sn == "offset" || sn == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ke && (sn == "buffer" || sn == "byteLength" || sn == "byteOffset") || // Skip index properties.
      Kg(sn, Re))) && ce.push(sn);
    return ce;
  }
  function Qd(C, E, R) {
    (R !== void 0 && !Il(C[E], R) || R === void 0 && !(E in C)) && Zd(C, E, R);
  }
  function h_(C, E, R) {
    var j = C[E];
    (!(an.call(C, E) && Il(j, R)) || R === void 0 && !(E in C)) && Zd(C, E, R);
  }
  function El(C, E) {
    for (var R = C.length; R--; )
      if (Il(C[R][0], E))
        return R;
    return -1;
  }
  function Zd(C, E, R) {
    E == "__proto__" && _l ? _l(C, E, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[E] = R;
  }
  var m_ = E_();
  function Ol(C) {
    return C == null ? C === void 0 ? T : m : go && go in Object(C) ? O_(C) : D_(C);
  }
  function Ug(C) {
    return Ta(C) && Ol(C) == s;
  }
  function v_(C) {
    if (!bo(C) || $_(C))
      return !1;
    var E = of(C) ? Tl : V;
    return E.test(N_(C));
  }
  function g_(C) {
    return Ta(C) && Xg(C.length) && !!N[Ol(C)];
  }
  function y_(C) {
    if (!bo(C))
      return A_(C);
    var E = Yg(C), R = [];
    for (var j in C)
      j == "constructor" && (E || !an.call(C, j)) || R.push(j);
    return R;
  }
  function Gg(C, E, R, j, pe) {
    C !== E && m_(E, function(ke, Ie) {
      if (pe || (pe = new oi()), bo(ke))
        b_(C, E, Ie, R, Gg, j, pe);
      else {
        var ce = j ? j(ef(C, Ie), ke, Ie + "", C, E, pe) : void 0;
        ce === void 0 && (ce = ke), Qd(C, Ie, ce);
      }
    }, Zg);
  }
  function b_(C, E, R, j, pe, ke, Ie) {
    var ce = ef(C, R), Re = ef(E, R), sn = Ie.get(Re);
    if (sn) {
      Qd(C, R, sn);
      return;
    }
    var Ht = ke ? ke(ce, Re, R + "", C, E, Ie) : void 0, _a = Ht === void 0;
    if (_a) {
      var af = nf(Re), sf = !af && qg(Re), e0 = !af && !sf && Qg(Re);
      Ht = Re, af || sf || e0 ? nf(ce) ? Ht = ce : j_(ce) ? Ht = P_(ce) : sf ? (_a = !1, Ht = w_(Re, !0)) : e0 ? (_a = !1, Ht = k_(Re, !0)) : Ht = [] : V_(Re) || tf(Re) ? (Ht = ce, tf(ce) ? Ht = B_(ce) : (!bo(ce) || of(ce)) && (Ht = M_(Re))) : _a = !1;
    }
    _a && (Ie.set(Re, Ht), pe(Ht, Re, j, ke, Ie), Ie.delete(Re)), Qd(C, R, Ht);
  }
  function S_(C, E) {
    return L_(F_(C, E, Jg), C + "");
  }
  var x_ = _l ? function(C, E) {
    return _l(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: H_(E),
      writable: !0
    });
  } : Jg;
  function w_(C, E) {
    if (E)
      return C.slice();
    var R = C.length, j = jg ? jg(R) : new C.constructor(R);
    return C.copy(j), j;
  }
  function C_(C) {
    var E = new C.constructor(C.byteLength);
    return new Ng(E).set(new Ng(C)), E;
  }
  function k_(C, E) {
    var R = E ? C_(C.buffer) : C.buffer;
    return new C.constructor(R, C.byteOffset, C.length);
  }
  function P_(C, E) {
    var R = -1, j = C.length;
    for (E || (E = Array(j)); ++R < j; )
      E[R] = C[R];
    return E;
  }
  function T_(C, E, R, j) {
    var pe = !R;
    R || (R = {});
    for (var ke = -1, Ie = E.length; ++ke < Ie; ) {
      var ce = E[ke], Re = j ? j(R[ce], C[ce], ce, R, C) : void 0;
      Re === void 0 && (Re = C[ce]), pe ? Zd(R, ce, Re) : h_(R, ce, Re);
    }
    return R;
  }
  function __(C) {
    return S_(function(E, R) {
      var j = -1, pe = R.length, ke = pe > 1 ? R[pe - 1] : void 0, Ie = pe > 2 ? R[2] : void 0;
      for (ke = C.length > 3 && typeof ke == "function" ? (pe--, ke) : void 0, Ie && I_(R[0], R[1], Ie) && (ke = pe < 3 ? void 0 : ke, pe = 1), E = Object(E); ++j < pe; ) {
        var ce = R[j];
        ce && C(E, ce, j, ke);
      }
      return E;
    });
  }
  function E_(C) {
    return function(E, R, j) {
      for (var pe = -1, ke = Object(E), Ie = j(E), ce = Ie.length; ce--; ) {
        var Re = Ie[C ? ce : ++pe];
        if (R(ke[Re], Re, ke) === !1)
          break;
      }
      return E;
    };
  }
  function Ml(C, E) {
    var R = C.__data__;
    return R_(E) ? R[typeof E == "string" ? "string" : "hash"] : R.map;
  }
  function Jd(C, E) {
    var R = mt(C, E);
    return v_(R) ? R : void 0;
  }
  function O_(C) {
    var E = an.call(C, go), R = C[go];
    try {
      C[go] = void 0;
      var j = !0;
    } catch {
    }
    var pe = ka.call(C);
    return j && (E ? C[go] = R : delete C[go]), pe;
  }
  function M_(C) {
    return typeof C.constructor == "function" && !Yg(C) ? GT(Vg(C)) : {};
  }
  function Kg(C, E) {
    var R = typeof C;
    return E = E ?? a, !!E && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < E;
  }
  function I_(C, E, R) {
    if (!bo(R))
      return !1;
    var j = typeof E;
    return (j == "number" ? rf(R) && Kg(E, R.length) : j == "string" && E in R) ? Il(R[E], C) : !1;
  }
  function R_(C) {
    var E = typeof C;
    return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? C !== "__proto__" : C === null;
  }
  function $_(C) {
    return !!ni && ni in C;
  }
  function Yg(C) {
    var E = C && C.constructor, R = typeof E == "function" && E.prototype || vt;
    return C === R;
  }
  function A_(C) {
    var E = [];
    if (C != null)
      for (var R in Object(C))
        E.push(R);
    return E;
  }
  function D_(C) {
    return ka.call(C);
  }
  function F_(C, E, R) {
    return E = Wg(E === void 0 ? C.length - 1 : E, 0), function() {
      for (var j = arguments, pe = -1, ke = Wg(j.length - E, 0), Ie = Array(ke); ++pe < ke; )
        Ie[pe] = j[E + pe];
      pe = -1;
      for (var ce = Array(E + 1); ++pe < E; )
        ce[pe] = j[pe];
      return ce[E] = R(Ie), Pn(C, this, ce);
    };
  }
  function ef(C, E) {
    if (!(E === "constructor" && typeof C[E] == "function") && E != "__proto__")
      return C[E];
  }
  var L_ = z_(x_);
  function z_(C) {
    var E = 0, R = 0;
    return function() {
      var j = UT(), pe = i - (j - R);
      if (R = j, pe > 0) {
        if (++E >= o)
          return arguments[0];
      } else
        E = 0;
      return C.apply(void 0, arguments);
    };
  }
  function N_(C) {
    if (C != null) {
      try {
        return Rr.call(C);
      } catch {
      }
      try {
        return C + "";
      } catch {
      }
    }
    return "";
  }
  function Il(C, E) {
    return C === E || C !== C && E !== E;
  }
  var tf = Ug(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Ug : function(C) {
    return Ta(C) && an.call(C, "callee") && !BT.call(C, "callee");
  }, nf = Array.isArray;
  function rf(C) {
    return C != null && Xg(C.length) && !of(C);
  }
  function j_(C) {
    return Ta(C) && rf(C);
  }
  var qg = HT || U_;
  function of(C) {
    if (!bo(C))
      return !1;
    var E = Ol(C);
    return E == p || E == v || E == u || E == b;
  }
  function Xg(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function bo(C) {
    var E = typeof C;
    return C != null && (E == "object" || E == "function");
  }
  function Ta(C) {
    return C != null && typeof C == "object";
  }
  function V_(C) {
    if (!Ta(C) || Ol(C) != h)
      return !1;
    var E = Vg(C);
    if (E === null)
      return !0;
    var R = an.call(E, "constructor") && E.constructor;
    return typeof R == "function" && R instanceof R && Rr.call(R) == Pl;
  }
  var Qg = on ? fe(on) : g_;
  function B_(C) {
    return T_(C, Zg(C));
  }
  function Zg(C) {
    return rf(C) ? p_(C, !0) : y_(C);
  }
  var W_ = __(function(C, E, R, j) {
    Gg(C, E, R, j);
  });
  function H_(C) {
    return function() {
      return C;
    };
  }
  function Jg(C) {
    return C;
  }
  function U_() {
    return !1;
  }
  e.exports = W_;
})(xc, xc.exports);
var eR = xc.exports;
const mn = /* @__PURE__ */ il(eR);
var tR = (e) => /!(important)?$/.test(e), ky = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, nR = (e, t) => (n) => {
  const r = String(t), o = tR(r), i = ky(r), a = e ? `${e}.${i}` : i;
  let s = Lt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = ky(s), o ? `${s} !important` : s;
};
function Pv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = nR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var Zl = (...e) => (t) => e.reduce((n, r) => r(n), t);
function ln(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = Pv({
      scale: e,
      transform: t
    }), r;
  };
}
var rR = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function oR(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: rR(t),
    transform: n ? Pv({
      scale: n,
      compose: r
    }) : r
  };
}
var cC = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function iR() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...cC
  ].join(" ");
}
function aR() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...cC
  ].join(" ");
}
var sR = {
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
}, lR = {
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
function uR(e) {
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
var cR = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, _h = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, dR = new Set(Object.values(_h)), Eh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), fR = (e) => e.trim();
function pR(e, t) {
  if (e == null || Eh.has(e))
    return e;
  if (!(Oh(e) || Eh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(fR).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in _h ? _h[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (dR.has(f))
      return f;
    const p = f.indexOf(" "), [v, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = Oh(g) ? g : g && g.split(" "), m = `colors.${v}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : v;
    return S ? [
      h,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Oh = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), hR = (e, t) => pR(e, t ?? {});
function mR(e) {
  return /^var\(--.+\)$/.test(e);
}
var vR = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, Bn = (e) => (t) => `${e}(${t})`, de = {
  filter(e) {
    return e !== "auto" ? e : sR;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : lR;
  },
  ring(e) {
    return uR(de.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? iR() : e === "auto-gpu" ? aR() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = vR(e);
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
    if (mR(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: hR,
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
    return e == null || Oh(e) || Eh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = cR[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, O = {
  borderWidths: ln("borderWidths"),
  borderStyles: ln("borderStyles"),
  colors: ln("colors"),
  borders: ln("borders"),
  gradients: ln("gradients", de.gradient),
  radii: ln("radii", de.px),
  space: ln("space", Zl(de.vh, de.px)),
  spaceT: ln("space", Zl(de.vh, de.px)),
  degreeT(e) {
    return { property: e, transform: de.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Pv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: ln("sizes", Zl(de.vh, de.px)),
  sizesT: ln("sizes", Zl(de.vh, de.fraction)),
  shadows: ln("shadows"),
  logical: oR,
  blur: ln("blur", de.blur)
}, Au = {
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
Object.assign(Au, {
  bgImage: Au.backgroundImage,
  bgImg: Au.backgroundImage
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
var gR = {
  color: O.colors("color"),
  textColor: O.colors("color"),
  fill: O.colors("fill"),
  stroke: O.colors("stroke")
}, Mh = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Mh, {
  shadow: Mh.boxShadow
});
var yR = {
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
}, wc = {
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
Object.assign(wc, {
  flexDir: wc.flexDirection
});
var dC = {
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
}, bR = {
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
var SR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function xR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var wR = (e) => {
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
}, CR = wR(xR), kR = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, PR = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Lf = (e, t, n) => {
  const r = {}, o = CR(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, TR = {
  srOnly: {
    transform(e) {
      return e === !0 ? kR : e === "focusable" ? PR : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => Lf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Lf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Lf(t, e, n)
  }
}, fs = {
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
Object.assign(fs, {
  insetStart: fs.insetInlineStart,
  insetEnd: fs.insetInlineEnd
});
var _R = {
  ring: { transform: de.ring },
  ringColor: O.colors("--chakra-ring-color"),
  ringOffset: O.prop("--chakra-ring-offset-width"),
  ringOffsetColor: O.colors("--chakra-ring-offset-color"),
  ringInset: O.prop("--chakra-ring-inset")
}, Oe = {
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
Object.assign(Oe, {
  m: Oe.margin,
  mt: Oe.marginTop,
  mr: Oe.marginRight,
  me: Oe.marginInlineEnd,
  marginEnd: Oe.marginInlineEnd,
  mb: Oe.marginBottom,
  ml: Oe.marginLeft,
  ms: Oe.marginInlineStart,
  marginStart: Oe.marginInlineStart,
  mx: Oe.marginX,
  my: Oe.marginY,
  p: Oe.padding,
  pt: Oe.paddingTop,
  py: Oe.paddingY,
  px: Oe.paddingX,
  pb: Oe.paddingBottom,
  pl: Oe.paddingLeft,
  ps: Oe.paddingInlineStart,
  paddingStart: Oe.paddingInlineStart,
  pr: Oe.paddingRight,
  pe: Oe.paddingInlineEnd,
  paddingEnd: Oe.paddingInlineEnd
});
var ER = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, OR = {
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
}, MR = {
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
}, IR = {
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
}, RR = {
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
function fC(e) {
  return Lt(e) && e.reference ? e.reference : String(e);
}
var Ed = (e, ...t) => t.map(fC).join(` ${e} `).replace(/calc/g, ""), Py = (...e) => `calc(${Ed("+", ...e)})`, Ty = (...e) => `calc(${Ed("-", ...e)})`, Ih = (...e) => `calc(${Ed("*", ...e)})`, _y = (...e) => `calc(${Ed("/", ...e)})`, Ey = (e) => {
  const t = fC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Ih(t, -1);
}, _o = Object.assign(
  (e) => ({
    add: (...t) => _o(Py(e, ...t)),
    subtract: (...t) => _o(Ty(e, ...t)),
    multiply: (...t) => _o(Ih(e, ...t)),
    divide: (...t) => _o(_y(e, ...t)),
    negate: () => _o(Ey(e)),
    toString: () => e.toString()
  }),
  {
    add: Py,
    subtract: Ty,
    multiply: Ih,
    divide: _y,
    negate: Ey
  }
);
function $R(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function AR(e) {
  const t = $R(e.toString());
  return FR(DR(t));
}
function DR(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function FR(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function LR(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function zR(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function NR(e, t = "") {
  return AR(`--${LR(e, t)}`);
}
function J(e, t, n) {
  const r = NR(e, n);
  return {
    variable: r,
    reference: zR(r, t)
  };
}
function jR(e, t) {
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
function VR(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function BR(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Rh(e) {
  if (e == null)
    return e;
  const { unitless: t } = BR(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var pC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Tv = (e) => Object.fromEntries(Object.entries(e).sort(pC));
function Oy(e) {
  const t = Tv(e);
  return Object.assign(Object.values(t), t);
}
function WR(e) {
  const t = Object.keys(Tv(e));
  return new Set(t);
}
function My(e) {
  var t;
  if (!e)
    return e;
  e = (t = Rh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function qa(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Rh(e)})`), t && n.push("and", `(max-width: ${Rh(t)})`), n.join(" ");
}
function HR(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = Oy(e), r = Object.entries(e).sort(pC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? My(d) : void 0, {
      _minW: My(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: qa(null, d),
      minWQuery: qa(s),
      minMaxQuery: qa(s, d)
    };
  }), o = WR(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Tv(e),
    asArray: Oy(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...n.map((a) => qa(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!Lt(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; VR(s) === null; )
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
}, Ar = (e) => hC((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), sr = (e) => hC((t) => e(t, "~ &"), "[data-peer]", ".peer"), hC = (e, ...t) => t.map(e).join(", "), Od = {
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
  _groupHover: Ar(ut.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: sr(ut.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Ar(ut.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: sr(ut.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Ar(ut.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: sr(ut.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Ar(ut.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: sr(ut.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Ar(ut.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: sr(ut.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Ar(ut.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: sr(ut.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Ar(ut.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: sr(ut.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Ar(ut.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: sr(ut.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: sr(ut.placeholderShown),
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
}, mC = Object.keys(
  Od
);
function Iy(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function UR(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Iy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...v] = f, g = `${p}.-${v.join(".")}`, S = _o.negate(s), m = _o.negate(u);
        r[g] = {
          value: S,
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
      const v = [String(o).split(".")[0], f].join(".");
      if (!e[v])
        return f;
      const { reference: S } = Iy(v, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = Lt(s) ? s : { default: s };
    n = mn(
      n,
      Object.entries(d).reduce(
        (f, [p, v]) => {
          var g, S;
          if (!v)
            return f;
          const m = c(`${v}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (S = (g = Od) == null ? void 0 : g[p]) != null ? S : p;
          return f[h] = { [l]: m }, f;
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
function GR(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function KR(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function YR(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Ry(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (YR(a) || Array.isArray(a)) {
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
var qR = [
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
function XR(e) {
  return KR(e, qR);
}
function QR(e) {
  return e.semanticTokens;
}
function ZR(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var JR = (e) => mC.includes(e) || e === "default";
function e$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return Ry(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), Ry(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(JR)
    }
  ), n;
}
function t$(e) {
  var t;
  const n = ZR(e), r = XR(n), o = QR(n), i = e$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = UR(i, { cssVarPrefix: a });
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
    __breakpoints: HR(n.breakpoints)
  }), n;
}
var _v = mn(
  {},
  Au,
  ve,
  gR,
  wc,
  cn,
  yR,
  _R,
  bR,
  dC,
  TR,
  fs,
  Mh,
  Oe,
  RR,
  IR,
  ER,
  OR,
  SR,
  MR
);
Object.assign({}, Oe, cn, wc, dC, fs);
var n$ = [...Object.keys(_v), ...mC], r$ = { ..._v, ...Od }, o$ = (e) => e in r$, i$ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Xn(e[a], t);
    if (s == null)
      continue;
    if (s = Lt(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
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
function a$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function s$(e) {
  return /^var\(--.+\)$/.test(e);
}
var l$ = (e, t) => e.startsWith("--") && typeof t == "string" && !s$(t), u$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = a$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function c$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Xn(i, r), d = i$(c)(r);
    let f = {};
    for (let p in d) {
      const v = d[p];
      let g = Xn(v, r);
      p in n && (p = n[p]), l$(p, g) && (g = u$(r, g));
      let S = t[p];
      if (S === !0 && (S = { property: p }), Lt(g)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = mn(
          {},
          f[p],
          o(g, !0)
        );
        continue;
      }
      let m = (u = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, g, r, c)) != null ? u : g;
      m = S != null && S.processResult ? o(m, !0) : m;
      const h = Xn(S == null ? void 0 : S.property, r);
      if (!a && (S != null && S.static)) {
        const b = Xn(S.static, r);
        f = mn({}, f, b);
      }
      if (h && Array.isArray(h)) {
        for (const b of h)
          f[b] = m;
        continue;
      }
      if (h) {
        h === "&" && Lt(m) ? f = mn({}, f, m) : f[h] = m;
        continue;
      }
      if (Lt(m)) {
        f = mn({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var vC = (e) => (t) => c$({
  theme: t,
  pseudos: Od,
  configs: _v
})(e);
function _e(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function d$(e, t) {
  if (Array.isArray(e))
    return e;
  if (Lt(e))
    return t(e);
  if (e != null)
    return [e];
}
function f$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function p$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = d$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let v = 0; v < d; v++) {
      const g = t.details[v], S = t.details[f$(c, v)], m = qa(g.minW, S == null ? void 0 : S._minW), h = Xn((s = r[o]) == null ? void 0 : s[c[v]], a);
      if (h) {
        if (p) {
          (l = r.parts) == null || l.forEach((b) => {
            mn(u, {
              [b]: f ? h[b] : { [m]: h[b] }
            });
          });
          continue;
        }
        if (!p) {
          f ? mn(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function h$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = p$(i);
    return mn(
      {},
      Xn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Cn(e) {
  return GR(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var m$ = [
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
function v$(e) {
  return Lt(e) ? m$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var g$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, y$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, b$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, S$ = {
  property: g$,
  easing: y$,
  duration: b$
}, x$ = S$, w$ = {
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
}, C$ = w$, k$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, P$ = k$, T$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, _$ = T$, E$ = {
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
}, O$ = E$, M$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, I$ = M$, R$ = {
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
}, $$ = R$, A$ = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, D$ = A$, F$ = {
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
}, gC = F$, yC = {
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
}, L$ = {
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
}, z$ = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, N$ = {
  ...yC,
  ...L$,
  container: z$
}, bC = N$, j$ = {
  breakpoints: _$,
  zIndices: C$,
  radii: I$,
  blur: D$,
  colors: O$,
  ...gC,
  sizes: bC,
  shadows: $$,
  space: yC,
  borders: P$,
  transition: x$
}, { defineMultiStyleConfig: V$, definePartsStyle: Xa } = _e([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), cr = J("stepper-indicator-size"), Pi = J("stepper-icon-size"), Ti = J("stepper-title-font-size"), Qa = J("stepper-description-font-size"), La = J("stepper-accent-color"), B$ = Xa(({ colorScheme: e }) => ({
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
    [La.variable]: `colors.${e}.500`,
    _dark: {
      [La.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Ti.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Qa.reference,
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
    width: Pi.reference,
    height: Pi.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: cr.reference,
    height: cr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: La.reference
    },
    "&[data-status=complete]": {
      bg: La.reference,
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
      bg: La.reference
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
      maxHeight: `calc(100% - ${cr.reference} - 8px)`,
      top: `calc(${cr.reference} + 4px)`,
      insetStart: `calc(${cr.reference} / 2 - 1px)`
    }
  }
})), W$ = V$({
  baseStyle: B$,
  sizes: {
    xs: Xa({
      stepper: {
        [cr.variable]: "sizes.4",
        [Pi.variable]: "sizes.3",
        [Ti.variable]: "fontSizes.xs",
        [Qa.variable]: "fontSizes.xs"
      }
    }),
    sm: Xa({
      stepper: {
        [cr.variable]: "sizes.6",
        [Pi.variable]: "sizes.4",
        [Ti.variable]: "fontSizes.sm",
        [Qa.variable]: "fontSizes.xs"
      }
    }),
    md: Xa({
      stepper: {
        [cr.variable]: "sizes.8",
        [Pi.variable]: "sizes.5",
        [Ti.variable]: "fontSizes.md",
        [Qa.variable]: "fontSizes.sm"
      }
    }),
    lg: Xa({
      stepper: {
        [cr.variable]: "sizes.10",
        [Pi.variable]: "sizes.6",
        [Ti.variable]: "fontSizes.lg",
        [Qa.variable]: "fontSizes.md"
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
var H$ = Se("accordion").parts("root", "container", "button", "panel").extend("icon"), U$ = Se("alert").parts("title", "description", "container").extend("icon", "spinner"), G$ = Se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), K$ = Se("breadcrumb").parts("link", "item", "container").extend("separator");
Se("button").parts();
var Y$ = Se("checkbox").parts("control", "icon", "container").extend("label");
Se("progress").parts("track", "filledTrack").extend("label");
var q$ = Se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), X$ = Se("editable").parts(
  "preview",
  "input",
  "textarea"
), Q$ = Se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), Z$ = Se("formError").parts("text", "icon"), J$ = Se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), eA = Se("list").parts("container", "item", "icon"), tA = Se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), nA = Se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), rA = Se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Se("pininput").parts("field");
var oA = Se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), iA = Se("progress").parts(
  "label",
  "filledTrack",
  "track"
), aA = Se("radio").parts(
  "container",
  "control",
  "label"
), sA = Se("select").parts("field", "icon"), lA = Se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), uA = Se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), cA = Se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), dA = Se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), fA = Se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), pA = Se("tag").parts(
  "container",
  "label",
  "closeButton"
), hA = Se("card").parts(
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
function Ro(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class mA extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Za = mA;
function Ev(e) {
  if (typeof e != "string")
    throw new Za(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = CA.test(e) ? yA(e) : e;
  const n = bA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Gs(s, 2), 16)), parseInt(Gs(a[3] || "f", 2), 16) / 255];
  }
  const r = SA.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = xA.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = wA.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Ro(0, 100, s) !== s)
      throw new Za(e);
    if (Ro(0, 100, l) !== l)
      throw new Za(e);
    return [...kA(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Za(e);
}
function vA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const $y = (e) => parseInt(e.replace(/_/g, ""), 36), gA = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = $y(t.substring(0, 3)), r = $y(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function yA(e) {
  const t = e.toLowerCase().trim(), n = gA[vA(t)];
  if (!n)
    throw new Za(e);
  return `#${n}`;
}
const Gs = (e, t) => Array.from(Array(t)).map(() => e).join(""), bA = new RegExp(`^#${Gs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), SA = new RegExp(`^#${Gs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), xA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Gs(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), wA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, CA = /^[a-z]+$/i, Ay = (e) => Math.round(e * 255), kA = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(Ay);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(Ay);
};
function PA(e, t, n, r) {
  return `rgba(${Ro(0, 255, e).toFixed()}, ${Ro(0, 255, t).toFixed()}, ${Ro(0, 255, n).toFixed()}, ${parseFloat(Ro(0, 1, r).toFixed(3))})`;
}
function TA(e, t) {
  const [n, r, o, i] = Ev(e);
  return PA(n, r, o, i - t);
}
function _A(e) {
  const [t, n, r, o] = Ev(e);
  let i = (a) => {
    const s = Ro(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function EA(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var OA = (e) => Object.keys(e).length === 0, Tt = (e, t, n) => {
  const r = EA(e, `colors.${t}`, t);
  try {
    return _A(r), r;
  } catch {
    return n ?? "#000000";
  }
}, MA = (e) => {
  const [t, n, r] = Ev(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, IA = (e) => (t) => {
  const n = Tt(t, e);
  return MA(n) < 128 ? "dark" : "light";
}, RA = (e) => (t) => IA(e)(t) === "dark", la = (e, t) => (n) => {
  const r = Tt(n, e);
  return TA(r, 1 - t);
};
function Dy(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var $A = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function AA(e) {
  const t = $A();
  return !e || OA(e) ? t : e.string && e.colors ? FA(e.string, e.colors) : e.string && !e.colors ? DA(e.string) : e.colors && !e.string ? LA(e.colors) : t;
}
function DA(e) {
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
function FA(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function LA(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function Ov(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function SC(e) {
  return Lt(e) && e.reference ? e.reference : String(e);
}
var Md = (e, ...t) => t.map(SC).join(` ${e} `).replace(/calc/g, ""), Fy = (...e) => `calc(${Md("+", ...e)})`, Ly = (...e) => `calc(${Md("-", ...e)})`, $h = (...e) => `calc(${Md("*", ...e)})`, zy = (...e) => `calc(${Md("/", ...e)})`, Ny = (e) => {
  const t = SC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : $h(t, -1);
}, dr = Object.assign(
  (e) => ({
    add: (...t) => dr(Fy(e, ...t)),
    subtract: (...t) => dr(Ly(e, ...t)),
    multiply: (...t) => dr($h(e, ...t)),
    divide: (...t) => dr(zy(e, ...t)),
    negate: () => dr(Ny(e)),
    toString: () => e.toString()
  }),
  {
    add: Fy,
    subtract: Ly,
    multiply: $h,
    divide: zy,
    negate: Ny
  }
);
function zA(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function NA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function xC(e) {
  const t = NA(e.toString());
  return t.includes("\\.") ? e : zA(e) ? t.replace(".", "\\.") : e;
}
function jA(e, t = "") {
  return [t, xC(e)].filter(Boolean).join("-");
}
function VA(e, t) {
  return `var(${xC(e)}${t ? `, ${t}` : ""})`;
}
function BA(e, t = "") {
  return `--${jA(e, t)}`;
}
function rt(e, t) {
  const n = BA(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: VA(n, WA(t == null ? void 0 : t.fallback))
  };
}
function WA(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: HA, definePartsStyle: Du } = _e(cA.keys), ps = rt("switch-track-width"), Lo = rt("switch-track-height"), zf = rt("switch-track-diff"), UA = dr.subtract(ps, Lo), Ah = rt("switch-thumb-x"), za = rt("switch-bg"), GA = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ps.reference],
    height: [Lo.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [za.variable]: "colors.gray.300",
    _dark: {
      [za.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [za.variable]: `colors.${t}.500`,
      _dark: {
        [za.variable]: `colors.${t}.200`
      }
    },
    bg: za.reference
  };
}, KA = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Lo.reference],
  height: [Lo.reference],
  _checked: {
    transform: `translateX(${Ah.reference})`
  }
}, YA = Du((e) => ({
  container: {
    [zf.variable]: UA,
    [Ah.variable]: zf.reference,
    _rtl: {
      [Ah.variable]: dr(zf).negate().toString()
    }
  },
  track: GA(e),
  thumb: KA
})), qA = {
  sm: Du({
    container: {
      [ps.variable]: "1.375rem",
      [Lo.variable]: "sizes.3"
    }
  }),
  md: Du({
    container: {
      [ps.variable]: "1.875rem",
      [Lo.variable]: "sizes.4"
    }
  }),
  lg: Du({
    container: {
      [ps.variable]: "2.875rem",
      [Lo.variable]: "sizes.6"
    }
  })
}, XA = HA({
  baseStyle: YA,
  sizes: qA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: QA, definePartsStyle: Ui } = _e(dA.keys), ZA = Ui({
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
}), Cc = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, JA = Ui((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Cc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Cc
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
}), e5 = Ui((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Cc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Cc
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
}), t5 = {
  simple: JA,
  striped: e5,
  unstyled: {}
}, n5 = {
  sm: Ui({
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
  md: Ui({
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
  lg: Ui({
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
}, r5 = QA({
  baseStyle: ZA,
  variants: t5,
  sizes: n5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Rt = J("tabs-color"), In = J("tabs-bg"), Jl = J("tabs-border-color"), { defineMultiStyleConfig: o5, definePartsStyle: er } = _e(fA.keys), i5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, a5 = (e) => {
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
}, s5 = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, l5 = {
  p: 4
}, u5 = er((e) => ({
  root: i5(e),
  tab: a5(e),
  tablist: s5(e),
  tabpanel: l5
})), c5 = {
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
}, d5 = er((e) => {
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
        [In.variable]: "colors.gray.200",
        _dark: {
          [In.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Rt.reference,
      bg: In.reference
    }
  };
}), f5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Jl.variable]: "transparent",
      _selected: {
        [Rt.variable]: `colors.${t}.600`,
        [Jl.variable]: "colors.white",
        _dark: {
          [Rt.variable]: `colors.${t}.300`,
          [Jl.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Jl.reference
      },
      color: Rt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), p5 = er((e) => {
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
        [Rt.variable]: `colors.${t}.600`,
        _dark: {
          [In.variable]: "colors.gray.800",
          [Rt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Rt.reference,
      bg: In.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), h5 = er((e) => {
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
}), m5 = er((e) => {
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
        [In.variable]: `colors.${t}.600`,
        _dark: {
          [Rt.variable]: "colors.gray.800",
          [In.variable]: `colors.${t}.300`
        }
      },
      color: Rt.reference,
      bg: In.reference
    }
  };
}), v5 = er({}), g5 = {
  line: d5,
  enclosed: f5,
  "enclosed-colored": p5,
  "soft-rounded": h5,
  "solid-rounded": m5,
  unstyled: v5
}, y5 = o5({
  baseStyle: u5,
  sizes: c5,
  variants: g5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ye = jR("badge", ["bg", "color", "shadow"]), b5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, S5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, x5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, w5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.200`, 0.8)(n);
  return {
    [Ye.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.color.variable]: r
    },
    [Ye.shadow.variable]: `inset 0 0 0px 1px ${Ye.color.reference}`
  };
}, C5 = {
  solid: S5,
  subtle: x5,
  outline: w5
}, hs = {
  baseStyle: b5,
  variants: C5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: k5, definePartsStyle: zo } = _e(pA.keys), jy = J("tag-bg"), Vy = J("tag-color"), Nf = J("tag-shadow"), Fu = J("tag-min-height"), Lu = J("tag-min-width"), zu = J("tag-font-size"), Nu = J("tag-padding-inline"), P5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Vy.variable]: Ye.color.reference,
  [jy.variable]: Ye.bg.reference,
  [Nf.variable]: Ye.shadow.reference,
  color: Vy.reference,
  bg: jy.reference,
  boxShadow: Nf.reference,
  borderRadius: "md",
  minH: Fu.reference,
  minW: Lu.reference,
  fontSize: zu.reference,
  px: Nu.reference,
  _focusVisible: {
    [Nf.variable]: "shadows.outline"
  }
}, T5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, _5 = {
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
}, E5 = zo({
  container: P5,
  label: T5,
  closeButton: _5
}), O5 = {
  sm: zo({
    container: {
      [Fu.variable]: "sizes.5",
      [Lu.variable]: "sizes.5",
      [zu.variable]: "fontSizes.xs",
      [Nu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: zo({
    container: {
      [Fu.variable]: "sizes.6",
      [Lu.variable]: "sizes.6",
      [zu.variable]: "fontSizes.sm",
      [Nu.variable]: "space.2"
    }
  }),
  lg: zo({
    container: {
      [Fu.variable]: "sizes.8",
      [Lu.variable]: "sizes.8",
      [zu.variable]: "fontSizes.md",
      [Nu.variable]: "space.3"
    }
  })
}, M5 = {
  subtle: zo((e) => {
    var t;
    return {
      container: (t = hs.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: zo((e) => {
    var t;
    return {
      container: (t = hs.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: zo((e) => {
    var t;
    return {
      container: (t = hs.variants) == null ? void 0 : t.outline(e)
    };
  })
}, I5 = k5({
  variants: M5,
  baseStyle: E5,
  sizes: O5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: hr, defineMultiStyleConfig: R5 } = _e(J$.keys), _i = J("input-height"), Ei = J("input-font-size"), Oi = J("input-padding"), Mi = J("input-border-radius"), $5 = hr({
  addon: {
    height: _i.reference,
    fontSize: Ei.reference,
    px: Oi.reference,
    borderRadius: Mi.reference
  },
  field: {
    width: "100%",
    height: _i.reference,
    fontSize: Ei.reference,
    px: Oi.reference,
    borderRadius: Mi.reference,
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
}), Dr = {
  lg: {
    [Ei.variable]: "fontSizes.lg",
    [Oi.variable]: "space.4",
    [Mi.variable]: "radii.md",
    [_i.variable]: "sizes.12"
  },
  md: {
    [Ei.variable]: "fontSizes.md",
    [Oi.variable]: "space.4",
    [Mi.variable]: "radii.md",
    [_i.variable]: "sizes.10"
  },
  sm: {
    [Ei.variable]: "fontSizes.sm",
    [Oi.variable]: "space.3",
    [Mi.variable]: "radii.sm",
    [_i.variable]: "sizes.8"
  },
  xs: {
    [Ei.variable]: "fontSizes.xs",
    [Oi.variable]: "space.2",
    [Mi.variable]: "radii.sm",
    [_i.variable]: "sizes.6"
  }
}, A5 = {
  lg: hr({
    field: Dr.lg,
    group: Dr.lg
  }),
  md: hr({
    field: Dr.md,
    group: Dr.md
  }),
  sm: hr({
    field: Dr.sm,
    group: Dr.sm
  }),
  xs: hr({
    field: Dr.xs,
    group: Dr.xs
  })
};
function Mv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var D5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Mv(e);
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
}), F5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Mv(e);
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
}), L5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Mv(e);
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
}), z5 = hr({
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
}), N5 = {
  outline: D5,
  filled: F5,
  flushed: L5,
  unstyled: z5
}, be = R5({
  baseStyle: $5,
  sizes: A5,
  variants: N5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), By, j5 = {
  ...(By = be.baseStyle) == null ? void 0 : By.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Wy, Hy, V5 = {
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
  unstyled: (Hy = (Wy = be.variants) == null ? void 0 : Wy.unstyled.field) != null ? Hy : {}
}, Uy, Gy, Ky, Yy, qy, Xy, Qy, Zy, B5 = {
  xs: (Gy = (Uy = be.sizes) == null ? void 0 : Uy.xs.field) != null ? Gy : {},
  sm: (Yy = (Ky = be.sizes) == null ? void 0 : Ky.sm.field) != null ? Yy : {},
  md: (Xy = (qy = be.sizes) == null ? void 0 : qy.md.field) != null ? Xy : {},
  lg: (Zy = (Qy = be.sizes) == null ? void 0 : Qy.lg.field) != null ? Zy : {}
}, W5 = {
  baseStyle: j5,
  sizes: B5,
  variants: V5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, eu = rt("tooltip-bg"), jf = rt("tooltip-fg"), H5 = rt("popper-arrow-bg"), U5 = {
  bg: eu.reference,
  color: jf.reference,
  [eu.variable]: "colors.gray.700",
  [jf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [eu.variable]: "colors.gray.300",
    [jf.variable]: "colors.gray.900"
  },
  [H5.variable]: eu.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, G5 = {
  baseStyle: U5
}, { defineMultiStyleConfig: K5, definePartsStyle: Ja } = _e(iA.keys), Y5 = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    Dy(),
    Dy("1rem", "rgba(0,0,0,0.1)")
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
}, q5 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, X5 = (e) => ({
  bg: Q("gray.100", "whiteAlpha.300")(e)
}), Q5 = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Y5(e)
}), Z5 = Ja((e) => ({
  label: q5,
  filledTrack: Q5(e),
  track: X5(e)
})), J5 = {
  xs: Ja({
    track: { h: "1" }
  }),
  sm: Ja({
    track: { h: "2" }
  }),
  md: Ja({
    track: { h: "3" }
  }),
  lg: Ja({
    track: { h: "4" }
  })
}, eD = K5({
  sizes: J5,
  baseStyle: Z5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), tD = (e) => typeof e == "function";
function Et(e, ...t) {
  return tD(e) ? e(...t) : e;
}
var { definePartsStyle: ju, defineMultiStyleConfig: nD } = _e(Y$.keys), ms = J("checkbox-size"), rD = (e) => {
  const { colorScheme: t } = e;
  return {
    w: ms.reference,
    h: ms.reference,
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
}, oD = {
  _disabled: { cursor: "not-allowed" }
}, iD = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, aD = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, sD = ju((e) => ({
  icon: aD,
  container: oD,
  control: Et(rD, e),
  label: iD
})), lD = {
  sm: ju({
    control: { [ms.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: ju({
    control: { [ms.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: ju({
    control: { [ms.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, kc = nD({
  baseStyle: sD,
  sizes: lD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: uD, definePartsStyle: Vu } = _e(aA.keys), cD = (e) => {
  var t;
  const n = (t = Et(kc.baseStyle, e)) == null ? void 0 : t.control;
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
}, dD = Vu((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = kc).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = kc).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: cD(e)
  };
}), fD = {
  md: Vu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Vu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Vu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, pD = uD({
  baseStyle: dD,
  sizes: fD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: hD, definePartsStyle: mD } = _e(sA.keys), tu = J("select-bg"), Jy, vD = {
  ...(Jy = be.baseStyle) == null ? void 0 : Jy.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: tu.reference,
  [tu.variable]: "colors.white",
  _dark: {
    [tu.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: tu.reference
  }
}, gD = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, yD = mD({
  field: vD,
  icon: gD
}), nu = {
  paddingInlineEnd: "8"
}, eb, tb, nb, rb, ob, ib, ab, sb, bD = {
  lg: {
    ...(eb = be.sizes) == null ? void 0 : eb.lg,
    field: {
      ...(tb = be.sizes) == null ? void 0 : tb.lg.field,
      ...nu
    }
  },
  md: {
    ...(nb = be.sizes) == null ? void 0 : nb.md,
    field: {
      ...(rb = be.sizes) == null ? void 0 : rb.md.field,
      ...nu
    }
  },
  sm: {
    ...(ob = be.sizes) == null ? void 0 : ob.sm,
    field: {
      ...(ib = be.sizes) == null ? void 0 : ib.sm.field,
      ...nu
    }
  },
  xs: {
    ...(ab = be.sizes) == null ? void 0 : ab.xs,
    field: {
      ...(sb = be.sizes) == null ? void 0 : sb.xs.field,
      ...nu
    },
    icon: {
      insetEnd: "1"
    }
  }
}, SD = hD({
  baseStyle: yD,
  sizes: bD,
  variants: be.variants,
  defaultProps: be.defaultProps
}), Vf = J("skeleton-start-color"), Bf = J("skeleton-end-color"), xD = {
  [Vf.variable]: "colors.gray.100",
  [Bf.variable]: "colors.gray.400",
  _dark: {
    [Vf.variable]: "colors.gray.800",
    [Bf.variable]: "colors.gray.600"
  },
  background: Vf.reference,
  borderColor: Bf.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, wD = {
  baseStyle: xD
}, Wf = J("skip-link-bg"), CD = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Wf.variable]: "colors.white",
    _dark: {
      [Wf.variable]: "colors.gray.700"
    },
    bg: Wf.reference
  }
}, kD = {
  baseStyle: CD
}, { defineMultiStyleConfig: PD, definePartsStyle: Id } = _e(lA.keys), Ks = J("slider-thumb-size"), Ys = J("slider-track-size"), Wr = J("slider-bg"), TD = (e) => {
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
    ...Ov({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, _D = (e) => ({
  ...Ov({
    orientation: e.orientation,
    horizontal: { h: Ys.reference },
    vertical: { w: Ys.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Wr.variable]: "colors.gray.200",
  _dark: {
    [Wr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Wr.variable]: "colors.gray.300",
    _dark: {
      [Wr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Wr.reference
}), ED = (e) => {
  const { orientation: t } = e;
  return {
    ...Ov({
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
    w: Ks.reference,
    h: Ks.reference,
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
}, OD = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Wr.variable]: `colors.${t}.500`,
    _dark: {
      [Wr.variable]: `colors.${t}.200`
    },
    bg: Wr.reference
  };
}, MD = Id((e) => ({
  container: TD(e),
  track: _D(e),
  thumb: ED(e),
  filledTrack: OD(e)
})), ID = Id({
  container: {
    [Ks.variable]: "sizes.4",
    [Ys.variable]: "sizes.1"
  }
}), RD = Id({
  container: {
    [Ks.variable]: "sizes.3.5",
    [Ys.variable]: "sizes.1"
  }
}), $D = Id({
  container: {
    [Ks.variable]: "sizes.2.5",
    [Ys.variable]: "sizes.0.5"
  }
}), AD = {
  lg: ID,
  md: RD,
  sm: $D
}, DD = PD({
  baseStyle: MD,
  sizes: AD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Eo = rt("spinner-size"), FD = {
  width: [Eo.reference],
  height: [Eo.reference]
}, LD = {
  xs: {
    [Eo.variable]: "sizes.3"
  },
  sm: {
    [Eo.variable]: "sizes.4"
  },
  md: {
    [Eo.variable]: "sizes.6"
  },
  lg: {
    [Eo.variable]: "sizes.8"
  },
  xl: {
    [Eo.variable]: "sizes.12"
  }
}, zD = {
  baseStyle: FD,
  sizes: LD,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: ND, definePartsStyle: wC } = _e(uA.keys), jD = {
  fontWeight: "medium"
}, VD = {
  opacity: 0.8,
  marginBottom: "2"
}, BD = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, WD = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, HD = wC({
  container: {},
  label: jD,
  helpText: VD,
  number: BD,
  icon: WD
}), UD = {
  md: wC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, GD = ND({
  baseStyle: HD,
  sizes: UD,
  defaultProps: {
    size: "md"
  }
}), Hf = J("kbd-bg"), KD = {
  [Hf.variable]: "colors.gray.100",
  _dark: {
    [Hf.variable]: "colors.whiteAlpha.100"
  },
  bg: Hf.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, YD = {
  baseStyle: KD
}, qD = {
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
}, XD = {
  baseStyle: qD
}, { defineMultiStyleConfig: QD, definePartsStyle: ZD } = _e(eA.keys), JD = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, eF = ZD({
  icon: JD
}), tF = QD({
  baseStyle: eF
}), { defineMultiStyleConfig: nF, definePartsStyle: rF } = _e(tA.keys), Un = J("menu-bg"), Uf = J("menu-shadow"), oF = {
  [Un.variable]: "#fff",
  [Uf.variable]: "shadows.sm",
  _dark: {
    [Un.variable]: "colors.gray.700",
    [Uf.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Un.reference,
  boxShadow: Uf.reference
}, iF = {
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
}, aF = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, sF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, lF = {
  opacity: 0.6
}, uF = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, cF = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, dF = rF({
  button: cF,
  list: oF,
  item: iF,
  groupTitle: aF,
  icon: sF,
  command: lF,
  divider: uF
}), fF = nF({
  baseStyle: dF
}), { defineMultiStyleConfig: pF, definePartsStyle: Dh } = _e(nA.keys), Gf = J("modal-bg"), Kf = J("modal-shadow"), hF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, mF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, vF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Gf.variable]: "colors.white",
    [Kf.variable]: "shadows.lg",
    _dark: {
      [Gf.variable]: "colors.gray.700",
      [Kf.variable]: "shadows.dark-lg"
    },
    bg: Gf.reference,
    boxShadow: Kf.reference
  };
}, gF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, yF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, bF = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, SF = {
  px: "6",
  py: "4"
}, xF = Dh((e) => ({
  overlay: hF,
  dialogContainer: Et(mF, e),
  dialog: Et(vF, e),
  header: gF,
  closeButton: yF,
  body: Et(bF, e),
  footer: SF
}));
function _n(e) {
  return Dh(e === "full" ? {
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
var wF = {
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
}, CF = pF({
  baseStyle: xF,
  sizes: wF,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: kF, definePartsStyle: CC } = _e(rA.keys), Iv = rt("number-input-stepper-width"), kC = rt("number-input-input-padding"), PF = dr(Iv).add("0.5rem").toString(), Yf = rt("number-input-bg"), qf = rt("number-input-color"), Xf = rt("number-input-border-color"), TF = {
  [Iv.variable]: "sizes.6",
  [kC.variable]: PF
}, _F = (e) => {
  var t, n;
  return (n = (t = Et(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, EF = {
  width: Iv.reference
}, OF = {
  borderStart: "1px solid",
  borderStartColor: Xf.reference,
  color: qf.reference,
  bg: Yf.reference,
  [qf.variable]: "colors.chakra-body-text",
  [Xf.variable]: "colors.chakra-border-color",
  _dark: {
    [qf.variable]: "colors.whiteAlpha.800",
    [Xf.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Yf.variable]: "colors.gray.200",
    _dark: {
      [Yf.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, MF = CC((e) => {
  var t;
  return {
    root: TF,
    field: (t = Et(_F, e)) != null ? t : {},
    stepperGroup: EF,
    stepper: OF
  };
});
function ru(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = gC.fontSizes[a];
  return CC({
    field: {
      ...o.field,
      paddingInlineEnd: kC.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: dr(s).multiply(0.75).toString(),
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
var IF = {
  xs: ru("xs"),
  sm: ru("sm"),
  md: ru("md"),
  lg: ru("lg")
}, RF = kF({
  baseStyle: MF,
  sizes: IF,
  variants: be.variants,
  defaultProps: be.defaultProps
}), lb, $F = {
  ...(lb = be.baseStyle) == null ? void 0 : lb.field,
  textAlign: "center"
}, AF = {
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
}, ub, cb, DF = {
  outline: (e) => {
    var t, n, r;
    return (r = (n = Et((t = be.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  flushed: (e) => {
    var t, n, r;
    return (r = (n = Et((t = be.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  filled: (e) => {
    var t, n, r;
    return (r = (n = Et((t = be.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  unstyled: (cb = (ub = be.variants) == null ? void 0 : ub.unstyled.field) != null ? cb : {}
}, FF = {
  baseStyle: $F,
  sizes: AF,
  variants: DF,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: LF, definePartsStyle: zF } = _e(oA.keys), ou = rt("popper-bg"), NF = rt("popper-arrow-bg"), db = rt("popper-arrow-shadow-color"), jF = { zIndex: 10 }, VF = {
  [ou.variable]: "colors.white",
  bg: ou.reference,
  [NF.variable]: ou.reference,
  [db.variable]: "colors.gray.200",
  _dark: {
    [ou.variable]: "colors.gray.700",
    [db.variable]: "colors.whiteAlpha.300"
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
}, BF = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, WF = {
  px: 3,
  py: 2
}, HF = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, UF = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, GF = zF({
  popper: jF,
  content: VF,
  header: BF,
  body: WF,
  footer: HF,
  closeButton: UF
}), KF = LF({
  baseStyle: GF
}), { definePartsStyle: Fh, defineMultiStyleConfig: YF } = _e(q$.keys), Qf = J("drawer-bg"), Zf = J("drawer-box-shadow");
function ai(e) {
  return Fh(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var qF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, XF = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, QF = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Qf.variable]: "colors.white",
    [Zf.variable]: "shadows.lg",
    _dark: {
      [Qf.variable]: "colors.gray.700",
      [Zf.variable]: "shadows.dark-lg"
    },
    bg: Qf.reference,
    boxShadow: Zf.reference
  };
}, ZF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, JF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, e4 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, t4 = {
  px: "6",
  py: "4"
}, n4 = Fh((e) => ({
  overlay: qF,
  dialogContainer: XF,
  dialog: Et(QF, e),
  header: ZF,
  closeButton: JF,
  body: e4,
  footer: t4
})), r4 = {
  xs: ai("xs"),
  sm: ai("md"),
  md: ai("lg"),
  lg: ai("2xl"),
  xl: ai("4xl"),
  full: ai("full")
}, o4 = YF({
  baseStyle: n4,
  sizes: r4,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: i4, defineMultiStyleConfig: a4 } = _e(X$.keys), s4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, l4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, u4 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, c4 = i4({
  preview: s4,
  input: l4,
  textarea: u4
}), d4 = a4({
  baseStyle: c4
}), { definePartsStyle: f4, defineMultiStyleConfig: p4 } = _e(Q$.keys), Gi = J("form-control-color"), h4 = {
  marginStart: "1",
  [Gi.variable]: "colors.red.500",
  _dark: {
    [Gi.variable]: "colors.red.300"
  },
  color: Gi.reference
}, m4 = {
  mt: "2",
  [Gi.variable]: "colors.gray.600",
  _dark: {
    [Gi.variable]: "colors.whiteAlpha.600"
  },
  color: Gi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, v4 = f4({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: h4,
  helperText: m4
}), g4 = p4({
  baseStyle: v4
}), { definePartsStyle: y4, defineMultiStyleConfig: b4 } = _e(Z$.keys), Ki = J("form-error-color"), S4 = {
  [Ki.variable]: "colors.red.500",
  _dark: {
    [Ki.variable]: "colors.red.300"
  },
  color: Ki.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, x4 = {
  marginEnd: "0.5em",
  [Ki.variable]: "colors.red.500",
  _dark: {
    [Ki.variable]: "colors.red.300"
  },
  color: Ki.reference
}, w4 = y4({
  text: S4,
  icon: x4
}), C4 = b4({
  baseStyle: w4
}), k4 = {
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
}, P4 = {
  baseStyle: k4
}, T4 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, _4 = {
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
}, E4 = {
  baseStyle: T4,
  sizes: _4,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: O4, definePartsStyle: M4 } = _e(K$.keys), Jf = J("breadcrumb-link-decor"), I4 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Jf.reference,
  [Jf.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Jf.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, R4 = M4({
  link: I4
}), $4 = O4({
  baseStyle: R4
}), A4 = {
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
}, PC = (e) => {
  const { colorScheme: t, theme: n } = e;
  if (t === "gray")
    return {
      color: Q("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: Q("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: Q("gray.200", "whiteAlpha.300")(e) }
    };
  const r = la(`${t}.200`, 0.12)(n), o = la(`${t}.200`, 0.24)(n);
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
}, D4 = (e) => {
  const { colorScheme: t } = e, n = Q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Et(PC, e)
  };
}, F4 = {
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
}, L4 = (e) => {
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
  } = (t = F4[n]) != null ? t : {}, s = Q(r, `${n}.200`)(e);
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
}, z4 = (e) => {
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
}, N4 = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, j4 = {
  ghost: PC,
  outline: D4,
  solid: L4,
  link: z4,
  unstyled: N4
}, V4 = {
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
}, B4 = {
  baseStyle: A4,
  variants: j4,
  sizes: V4,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: No, defineMultiStyleConfig: W4 } = _e(hA.keys), Pc = J("card-bg"), gr = J("card-padding"), TC = J("card-shadow"), Bu = J("card-radius"), _C = J("card-border-width", "0"), EC = J("card-border-color"), H4 = No({
  container: {
    [Pc.variable]: "colors.chakra-body-bg",
    backgroundColor: Pc.reference,
    boxShadow: TC.reference,
    borderRadius: Bu.reference,
    color: "chakra-body-text",
    borderWidth: _C.reference,
    borderColor: EC.reference
  },
  body: {
    padding: gr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: gr.reference
  },
  footer: {
    padding: gr.reference
  }
}), U4 = {
  sm: No({
    container: {
      [Bu.variable]: "radii.base",
      [gr.variable]: "space.3"
    }
  }),
  md: No({
    container: {
      [Bu.variable]: "radii.md",
      [gr.variable]: "space.5"
    }
  }),
  lg: No({
    container: {
      [Bu.variable]: "radii.xl",
      [gr.variable]: "space.7"
    }
  })
}, G4 = {
  elevated: No({
    container: {
      [TC.variable]: "shadows.base",
      _dark: {
        [Pc.variable]: "colors.gray.700"
      }
    }
  }),
  outline: No({
    container: {
      [_C.variable]: "1px",
      [EC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: No({
    container: {
      [Pc.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [gr.variable]: 0
    },
    header: {
      [gr.variable]: 0
    },
    footer: {
      [gr.variable]: 0
    }
  }
}, K4 = W4({
  baseStyle: H4,
  variants: G4,
  sizes: U4,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), vs = rt("close-button-size"), Na = rt("close-button-bg"), Y4 = {
  w: [vs.reference],
  h: [vs.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Na.variable]: "colors.blackAlpha.100",
    _dark: {
      [Na.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Na.variable]: "colors.blackAlpha.200",
    _dark: {
      [Na.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Na.reference
}, q4 = {
  lg: {
    [vs.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [vs.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [vs.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, X4 = {
  baseStyle: Y4,
  sizes: q4,
  defaultProps: {
    size: "md"
  }
}, { variants: Q4, defaultProps: Z4 } = hs, J4 = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, eL = {
  baseStyle: J4,
  variants: Q4,
  defaultProps: Z4
}, tL = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, nL = {
  baseStyle: tL
}, rL = {
  opacity: 0.6,
  borderColor: "inherit"
}, oL = {
  borderStyle: "solid"
}, iL = {
  borderStyle: "dashed"
}, aL = {
  solid: oL,
  dashed: iL
}, sL = {
  baseStyle: rL,
  variants: aL,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: lL, defineMultiStyleConfig: uL } = _e(H$.keys), cL = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, dL = {
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
}, fL = {
  pt: "2",
  px: "4",
  pb: "5"
}, pL = {
  fontSize: "1.25em"
}, hL = lL({
  container: cL,
  button: dL,
  panel: fL,
  icon: pL
}), mL = uL({ baseStyle: hL }), { definePartsStyle: hl, defineMultiStyleConfig: vL } = _e(U$.keys), Xt = J("alert-fg"), Pr = J("alert-bg"), gL = hl({
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
    color: Xt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Xt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Rv(e) {
  const { theme: t, colorScheme: n } = e, r = la(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var yL = hl((e) => {
  const { colorScheme: t } = e, n = Rv(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      }
    }
  };
}), bL = hl((e) => {
  const { colorScheme: t } = e, n = Rv(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Xt.reference
    }
  };
}), SL = hl((e) => {
  const { colorScheme: t } = e, n = Rv(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.600`,
      [Pr.variable]: n.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Pr.variable]: n.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Xt.reference
    }
  };
}), xL = hl((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Xt.variable]: "colors.white",
      [Pr.variable]: `colors.${t}.600`,
      _dark: {
        [Xt.variable]: "colors.gray.900",
        [Pr.variable]: `colors.${t}.200`
      },
      color: Xt.reference
    }
  };
}), wL = {
  subtle: yL,
  "left-accent": bL,
  "top-accent": SL,
  solid: xL
}, CL = vL({
  baseStyle: gL,
  variants: wL,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: OC, defineMultiStyleConfig: kL } = _e(G$.keys), Yi = J("avatar-border-color"), gs = J("avatar-bg"), qs = J("avatar-font-size"), ua = J("avatar-size"), PL = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Yi.reference,
  [Yi.variable]: "white",
  _dark: {
    [Yi.variable]: "colors.gray.800"
  }
}, TL = {
  bg: gs.reference,
  fontSize: qs.reference,
  width: ua.reference,
  height: ua.reference,
  lineHeight: "1",
  [gs.variable]: "colors.gray.200",
  _dark: {
    [gs.variable]: "colors.whiteAlpha.400"
  }
}, _L = (e) => {
  const { name: t, theme: n } = e, r = t ? AA({ string: t }) : "colors.gray.400", o = RA(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: gs.reference,
    fontSize: qs.reference,
    color: i,
    borderColor: Yi.reference,
    verticalAlign: "top",
    width: ua.reference,
    height: ua.reference,
    "&:not([data-loaded])": {
      [gs.variable]: r
    },
    [Yi.variable]: "colors.white",
    _dark: {
      [Yi.variable]: "colors.gray.800"
    }
  };
}, EL = {
  fontSize: qs.reference,
  lineHeight: "1"
}, OL = OC((e) => ({
  badge: Et(PL, e),
  excessLabel: Et(TL, e),
  container: Et(_L, e),
  label: EL
}));
function Fr(e) {
  const t = e !== "100%" ? bC[e] : void 0;
  return OC({
    container: {
      [ua.variable]: t ?? e,
      [qs.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [ua.variable]: t ?? e,
      [qs.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var ML = {
  "2xs": Fr(4),
  xs: Fr(6),
  sm: Fr(8),
  md: Fr(12),
  lg: Fr(16),
  xl: Fr(24),
  "2xl": Fr(32),
  full: Fr("100%")
}, IL = kL({
  baseStyle: OL,
  sizes: ML,
  defaultProps: {
    size: "md"
  }
}), RL = {
  Accordion: mL,
  Alert: CL,
  Avatar: IL,
  Badge: hs,
  Breadcrumb: $4,
  Button: B4,
  Checkbox: kc,
  CloseButton: X4,
  Code: eL,
  Container: nL,
  Divider: sL,
  Drawer: o4,
  Editable: d4,
  Form: g4,
  FormError: C4,
  FormLabel: P4,
  Heading: E4,
  Input: be,
  Kbd: YD,
  Link: XD,
  List: tF,
  Menu: fF,
  Modal: CF,
  NumberInput: RF,
  PinInput: FF,
  Popover: KF,
  Progress: eD,
  Radio: pD,
  Select: SD,
  Skeleton: wD,
  SkipLink: kD,
  Slider: DD,
  Spinner: zD,
  Stat: GD,
  Switch: XA,
  Table: r5,
  Tabs: y5,
  Tag: I5,
  Textarea: W5,
  Tooltip: G5,
  Card: K4,
  Stepper: W$
}, $L = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, AL = {
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
}, DL = "ltr", FL = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, MC = {
  semanticTokens: $L,
  direction: DL,
  ...j$,
  components: RL,
  styles: AL,
  config: FL
};
function es(e) {
  return typeof e == "function";
}
function LL(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var zL = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return v$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, LL(
    ...r.map(
      (i) => (a) => es(i) ? i(a) : jL(a, i)
    )
  )(o);
}, NL = zL(MC);
function jL(...e) {
  return mn({}, ...e, IC);
}
function IC(e, t, n, r) {
  if ((es(e) || es(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = es(e) ? e(...o) : e, a = es(t) ? t(...o) : t;
      return mn({}, i, a, IC);
    };
}
function VL() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var BL = /* @__PURE__ */ VL();
function WL(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function HL(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var UL = (e) => {
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
}, RC = UL(HL);
function $C(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var AC = (e) => $C(e, (t) => t != null);
function GL(e) {
  return typeof e == "function";
}
function DC(e, ...t) {
  return GL(e) ? e(...t) : e;
}
function KL(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var YL = typeof Element < "u", qL = typeof Map == "function", XL = typeof Set == "function", QL = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Wu(e, t) {
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
        if (!Wu(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (qL && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Wu(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (XL && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (QL && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (YL && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Wu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var ZL = function(t, n) {
  try {
    return Wu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const JL = /* @__PURE__ */ il(ZL);
function FC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = QI(), s = e ? RC(i, `components.${e}`) : void 0, l = r || s, u = mn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    AC(WL(o, ["children"]))
  ), c = y.useRef({});
  if (l) {
    const f = h$(l)(u);
    JL(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Qo(e, t = {}) {
  return FC(e, t);
}
function Ct(e, t = {}) {
  return FC(e, t);
}
var e3 = /* @__PURE__ */ new Set([
  ...n$,
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
]), t3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function n3(e) {
  return t3.has(e) || !e3.has(e);
}
function r3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function o3(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var i3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, a3 = /* @__PURE__ */ Gw(
  function(e) {
    return i3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), s3 = a3, l3 = function(t) {
  return t !== "theme";
}, fb = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? s3 : l3;
}, pb = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, u3 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return yv(n, r, o), tC(function() {
    return bv(n, r, o);
  }), null;
}, c3 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = pb(t, n, r), l = s || fb(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var v = xv(function(g, S, m) {
      var h = u && g.as || o, b = "", x = [], k = g;
      if (g.theme == null) {
        k = {};
        for (var P in g)
          k[P] = g[P];
        k.theme = y.useContext(aa);
      }
      typeof g.className == "string" ? b = Zw(S.registered, x, g.className) : g.className != null && (b = g.className + " ");
      var T = Td(d.concat(x), S.registered, k);
      b += S.key + "-" + T.name, a !== void 0 && (b += " " + a);
      var _ = u && s === void 0 ? fb(h) : l, M = {};
      for (var I in g)
        u && I === "as" || // $FlowFixMe
        _(I) && (M[I] = g[I]);
      return M.className = b, M.ref = m, /* @__PURE__ */ y.createElement(y.Fragment, null, /* @__PURE__ */ y.createElement(u3, {
        cache: S,
        serialized: T,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ y.createElement(h, M));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + a;
      }
    }), v.withComponent = function(g, S) {
      return e(g, q({}, n, S, {
        shouldForwardProp: pb(v, S, !0)
      })).apply(void 0, d);
    }, v;
  };
}, d3 = [
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
], Tc = c3.bind();
d3.forEach(function(e) {
  Tc[e] = Tc(e);
});
var hb, f3 = (hb = Tc.default) != null ? hb : Tc, p3 = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = $C(a, (d, f) => o$(f)), l = DC(e, t), u = r3(
    {},
    o,
    l,
    AC(s),
    i
  ), c = vC(u)(t.theme);
  return r ? [c, r] : c;
};
function ep(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = n3);
  const o = p3({ baseStyle: n }), i = f3(
    e,
    r
  )(o);
  return re.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = wa();
    return re.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function h3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(ep, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return ep(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, ep(n)), e.get(n);
    }
  });
}
var X = h3();
function oe(e) {
  return y.forwardRef(e);
}
function m3(e = {}) {
  const {
    strict: t = !0,
    errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: r
  } = e, o = y.createContext(void 0);
  o.displayName = r;
  function i() {
    var a;
    const s = y.useContext(o);
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
function v3(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = y.useMemo(() => t$(n), [n]);
  return /* @__PURE__ */ w.jsxs(EI, { theme: o, children: [
    /* @__PURE__ */ w.jsx(g3, { root: t }),
    r
  ] });
}
function g3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ w.jsx(_d, { styles: (n) => ({ [t]: n.__cssVars }) });
}
m3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function y3() {
  const { colorMode: e } = wa();
  return /* @__PURE__ */ w.jsx(
    _d,
    {
      styles: (t) => {
        const n = RC(t, "styles.global"), r = DC(n, { theme: t, colorMode: e });
        return r ? vC(r)(t) : void 0;
      }
    }
  );
}
var $v = y.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
$v.displayName = "EnvironmentContext";
function b3({ defer: e } = {}) {
  const [, t] = y.useReducer((n) => n + 1, 0);
  return sa(() => {
    e && t();
  }, [e]), y.useContext($v);
}
function LC(e) {
  const { children: t, environment: n, disabled: r } = e, o = y.useRef(null), i = y.useMemo(() => n || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [n]), a = !r || !n;
  return /* @__PURE__ */ w.jsxs($v.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ w.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
LC.displayName = "EnvironmentProvider";
var S3 = (e) => {
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
    LC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ w.jsx(v3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ w.jsxs(
    lC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ w.jsx(AI, { scope: o }) : /* @__PURE__ */ w.jsx($I, {}),
        !c && /* @__PURE__ */ w.jsx(y3, {}),
        r ? /* @__PURE__ */ w.jsx(aC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, x3 = (e, t) => e.find((n) => n.id === t);
function mb(e, t) {
  const n = zC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function zC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (x3(r, t))
      return n;
}
function w3(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function C3(e) {
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
function to(e, t = []) {
  const n = y.useRef(e);
  return y.useEffect(() => {
    n.current = e;
  }), y.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function k3(e, t) {
  const n = to(e);
  y.useEffect(() => {
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
function ca(e, t) {
  const n = y.useRef(!1), r = y.useRef(!1);
  y.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), y.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const NC = y.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Rd = y.createContext({}), ml = y.createContext(null), $d = typeof document < "u", Av = $d ? y.useLayoutEffect : y.useEffect, jC = y.createContext({ strict: !1 }), Dv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), P3 = "framerAppearId", VC = "data-" + Dv(P3);
function T3(e, t, n, r) {
  const { visualElement: o } = y.useContext(Rd), i = y.useContext(jC), a = y.useContext(ml), s = y.useContext(NC).reducedMotion, l = y.useRef();
  r = r || i.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  y.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = y.useRef(!!n[VC]);
  return Av(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), y.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function Ii(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function _3(e, t, n) {
  return y.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ii(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Xs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ad(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Fv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Lv = ["initial", ...Fv];
function Dd(e) {
  return Ad(e.animate) || Lv.some((t) => Xs(e[t]));
}
function BC(e) {
  return !!(Dd(e) || e.variants);
}
function E3(e, t) {
  if (Dd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Xs(n) ? n : void 0,
      animate: Xs(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function O3(e) {
  const { initial: t, animate: n } = E3(e, y.useContext(Rd));
  return y.useMemo(() => ({ initial: t, animate: n }), [vb(t), vb(n)]);
}
function vb(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const gb = {
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
}, Qs = {};
for (const e in gb)
  Qs[e] = {
    isEnabled: (t) => gb[e].some((n) => !!t[n])
  };
function M3(e) {
  for (const t in e)
    Qs[t] = {
      ...Qs[t],
      ...e[t]
    };
}
const zv = y.createContext({}), WC = y.createContext({}), I3 = Symbol.for("motionComponentSymbol");
function R3({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && M3(e);
  function i(s, l) {
    let u;
    const c = {
      ...y.useContext(NC),
      ...s,
      layoutId: $3(s)
    }, { isStatic: d } = c, f = O3(s), p = r(s, d);
    if (!d && $d) {
      f.visualElement = T3(o, p, c, t);
      const v = y.useContext(WC), g = y.useContext(jC).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        g,
        e,
        v
      ));
    }
    return y.createElement(
      Rd.Provider,
      { value: f },
      u && f.visualElement ? y.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, _3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = y.forwardRef(i);
  return a[I3] = o, a;
}
function $3({ layoutId: e }) {
  const t = y.useContext(zv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function A3(e) {
  function t(r, o = {}) {
    return R3(e(r, o));
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
const D3 = [
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
function Nv(e) {
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
      !!(D3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const _c = {};
function F3(e) {
  Object.assign(_c, e);
}
const vl = [
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
], Zo = new Set(vl);
function HC(e, { layout: t, layoutId: n }) {
  return Zo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!_c[e] || e === "opacity");
}
const Vt = (e) => !!(e && e.getVelocity), L3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, z3 = vl.length;
function N3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < z3; a++) {
    const s = vl[a];
    if (e[s] !== void 0) {
      const l = L3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const UC = (e) => (t) => typeof t == "string" && t.startsWith(e), GC = UC("--"), Lh = UC("var(--"), j3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, V3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, ao = (e, t, n) => Math.min(Math.max(n, e), t), Jo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ys = {
  ...Jo,
  transform: (e) => ao(0, 1, e)
}, iu = {
  ...Jo,
  default: 1
}, bs = (e) => Math.round(e * 1e5) / 1e5, Fd = /(-)?([\d]*\.?[\d])+/g, KC = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, B3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function gl(e) {
  return typeof e == "string";
}
const yl = (e) => ({
  test: (t) => gl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Lr = yl("deg"), tr = yl("%"), ne = yl("px"), W3 = yl("vh"), H3 = yl("vw"), yb = {
  ...tr,
  parse: (e) => tr.parse(e) / 100,
  transform: (e) => tr.transform(e * 100)
}, bb = {
  ...Jo,
  transform: Math.round
}, YC = {
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
  rotate: Lr,
  rotateX: Lr,
  rotateY: Lr,
  rotateZ: Lr,
  scale: iu,
  scaleX: iu,
  scaleY: iu,
  scaleZ: iu,
  skew: Lr,
  skewX: Lr,
  skewY: Lr,
  distance: ne,
  translateX: ne,
  translateY: ne,
  translateZ: ne,
  x: ne,
  y: ne,
  z: ne,
  perspective: ne,
  transformPerspective: ne,
  opacity: ys,
  originX: yb,
  originY: yb,
  originZ: ne,
  // Misc
  zIndex: bb,
  // SVG
  fillOpacity: ys,
  strokeOpacity: ys,
  numOctaves: bb
};
function jv(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (GC(d)) {
      i[d] = f;
      continue;
    }
    const p = YC[d], v = V3(f, p);
    if (Zo.has(d)) {
      if (l = !0, a[d] = v, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = v) : o[d] = v;
  }
  if (t.transform || (l || r ? o.transform = N3(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Vv = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function qC(e, t, n) {
  for (const r in t)
    !Vt(t[r]) && !HC(r, n) && (e[r] = t[r]);
}
function U3({ transformTemplate: e }, t, n) {
  return y.useMemo(() => {
    const r = Vv();
    return jv(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function G3(e, t, n) {
  const r = e.style || {}, o = {};
  return qC(o, r, e), Object.assign(o, U3(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function K3(e, t, n) {
  const r = {}, o = G3(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const Y3 = /* @__PURE__ */ new Set([
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
function Ec(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Y3.has(e);
}
let XC = (e) => !Ec(e);
function q3(e) {
  e && (XC = (t) => t.startsWith("on") ? !Ec(t) : e(t));
}
try {
  q3(require("@emotion/is-prop-valid").default);
} catch {
}
function X3(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (XC(o) || n === !0 && Ec(o) || !t && !Ec(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Sb(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function Q3(e, t, n) {
  const r = Sb(t, e.x, e.width), o = Sb(n, e.y, e.height);
  return `${r} ${o}`;
}
const Z3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, J3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ez(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? Z3 : J3;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Bv(e, {
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
  if (jv(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: v, dimensions: g } = e;
  p.transform && (g && (v.transform = p.transform), delete p.transform), g && (o !== void 0 || i !== void 0 || v.transform) && (v.transformOrigin = Q3(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && ez(p, a, s, l, !1);
}
const QC = () => ({
  ...Vv(),
  attrs: {}
}), Wv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function tz(e, t, n, r) {
  const o = y.useMemo(() => {
    const i = QC();
    return Bv(i, t, { enableHardwareAcceleration: !1 }, Wv(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    qC(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function nz(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Nv(n) ? tz : K3)(r, i, a, n), c = {
      ...X3(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = y.useMemo(() => Vt(d) ? d.get() : d, [d]);
    return y.createElement(n, {
      ...c,
      children: f
    });
  };
}
function ZC(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const JC = /* @__PURE__ */ new Set([
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
function ek(e, t, n, r) {
  ZC(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(JC.has(o) ? o : Dv(o), t.attrs[o]);
}
function Hv(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Vt(n[o]) || t.style && Vt(t.style[o]) || HC(o, e)) && (r[o] = n[o]);
  return r;
}
function tk(e, t) {
  const n = Hv(e, t);
  for (const r in e)
    if (Vt(e[r]) || Vt(t[r])) {
      const o = vl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function Uv(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function nk(e) {
  const t = y.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Oc = (e) => Array.isArray(e), rz = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), oz = (e) => Oc(e) ? e[e.length - 1] || 0 : e;
function Hu(e) {
  const t = Vt(e) ? e.get() : e;
  return rz(t) ? t.toValue() : t;
}
function iz({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: az(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const rk = (e) => (t, n) => {
  const r = y.useContext(Rd), o = y.useContext(ml), i = () => iz(e, t, r, o);
  return n ? i() : nk(i);
};
function az(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = Hu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Dd(e), u = BC(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Ad(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const v = Uv(e, p);
    if (!v)
      return;
    const { transitionEnd: g, transition: S, ...m } = v;
    for (const h in m) {
      let b = m[h];
      if (Array.isArray(b)) {
        const x = c ? b.length - 1 : 0;
        b = b[x];
      }
      b !== null && (o[h] = b);
    }
    for (const h in g)
      o[h] = g[h];
  }), o;
}
const He = (e) => e;
class xb {
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
function sz(e) {
  let t = new xb(), n = new xb(), r = 0, o = !1, i = !1;
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
const au = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], lz = 40;
function uz(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = au.reduce((d, f) => (d[f] = sz(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, lz), 1), o.timestamp = d, o.isProcessing = !0, au.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: au.reduce((d, f) => {
    const p = i[f];
    return d[f] = (v, g = !1, S = !1) => (n || l(), p.schedule(v, g, S)), d;
  }, {}), cancel: (d) => au.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: Te, cancel: Tr, state: ot, steps: tp } = uz(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), cz = {
  useVisualState: rk({
    scrapeMotionValuesFromProps: tk,
    createRenderState: QC,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      Te.read(() => {
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
      }), Te.render(() => {
        Bv(n, r, { enableHardwareAcceleration: !1 }, Wv(t.tagName), e.transformTemplate), ek(t, n);
      });
    }
  })
}, dz = {
  useVisualState: rk({
    scrapeMotionValuesFromProps: Hv,
    createRenderState: Vv
  })
};
function fz(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Nv(e) ? cz : dz,
    preloadedFeatures: n,
    useRender: nz(t),
    createVisualElement: r,
    Component: e
  };
}
function mr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const ok = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ld(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const pz = (e) => (t) => ok(t) && e(t, Ld(t));
function yr(e, t, n, r) {
  return mr(e, t, pz(n), r);
}
const hz = (e, t) => (n) => t(e(n)), no = (...e) => e.reduce(hz);
function ik(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const wb = ik("dragHorizontal"), Cb = ik("dragVertical");
function ak(e) {
  let t = !1;
  if (e === "y")
    t = Cb();
  else if (e === "x")
    t = wb();
  else {
    const n = wb(), r = Cb();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function sk() {
  const e = ak(!0);
  return e ? (e(), !1) : !0;
}
class ho {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function kb(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || sk())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && Te.update(() => s[r](i, a));
  };
  return yr(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class mz extends ho {
  mount() {
    this.unmount = no(kb(this.node, !0), kb(this.node, !1));
  }
  unmount() {
  }
}
class vz extends ho {
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
    this.unmount = no(mr(this.node.current, "focus", () => this.onFocus()), mr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const lk = (e, t) => t ? e === t ? !0 : lk(e, t.parentElement) : !1;
function np(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ld(n));
}
class gz extends ho {
  constructor() {
    super(...arguments), this.removeStartListeners = He, this.removeEndListeners = He, this.removeAccessibleListeners = He, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = yr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        Te.update(() => {
          lk(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = yr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = no(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || np("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Te.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = mr(this.node.current, "keyup", a), np("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = mr(this.node.current, "keydown", t), r = () => {
        this.isPressing && np("cancel", (i, a) => this.cancelPress(i, a));
      }, o = mr(this.node.current, "blur", r);
      this.removeAccessibleListeners = no(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && Te.update(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !sk();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && Te.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = yr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = mr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = no(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const zh = /* @__PURE__ */ new WeakMap(), rp = /* @__PURE__ */ new WeakMap(), yz = (e) => {
  const t = zh.get(e.target);
  t && t(e);
}, bz = (e) => {
  e.forEach(yz);
};
function Sz({ root: e, ...t }) {
  const n = e || document;
  rp.has(n) || rp.set(n, {});
  const r = rp.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(bz, { root: e, ...t })), r[o];
}
function xz(e, t, n) {
  const r = Sz(t);
  return zh.set(e, n), r.observe(e), () => {
    zh.delete(e), r.unobserve(e);
  };
}
const wz = {
  some: 0,
  all: 1
};
class Cz extends ho {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : wz[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return xz(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(kz(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function kz({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Pz = {
  inView: {
    Feature: Cz
  },
  tap: {
    Feature: gz
  },
  focus: {
    Feature: vz
  },
  hover: {
    Feature: mz
  }
};
function uk(e, t) {
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
function Tz(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function _z(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function zd(e, t, n) {
  const r = e.getProps();
  return Uv(r, t, n !== void 0 ? n : r.custom, Tz(e), _z(e));
}
let Ez = He, Gv = He;
const ro = (e) => e * 1e3, br = (e) => e / 1e3, Oz = {
  current: !1
}, ck = (e) => Array.isArray(e) && typeof e[0] == "number";
function dk(e) {
  return !!(!e || typeof e == "string" && fk[e] || ck(e) || Array.isArray(e) && e.every(dk));
}
const ts = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, fk = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ts([0, 0.65, 0.55, 1]),
  circOut: ts([0.55, 0, 1, 0.45]),
  backIn: ts([0.31, 0.01, 0.66, -0.59]),
  backOut: ts([0.33, 1.53, 0.69, 0.99])
};
function pk(e) {
  if (e)
    return ck(e) ? ts(e) : Array.isArray(e) ? e.map(pk) : fk[e];
}
function Mz(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = pk(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function Iz(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const hk = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Rz = 1e-7, $z = 12;
function Az(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = hk(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Rz && ++s < $z);
  return a;
}
function bl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => Az(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : hk(o(i), t, r);
}
const Dz = bl(0.42, 0, 1, 1), Fz = bl(0, 0, 0.58, 1), mk = bl(0.42, 0, 0.58, 1), Lz = (e) => Array.isArray(e) && typeof e[0] != "number", vk = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, gk = (e) => (t) => 1 - e(1 - t), yk = (e) => 1 - Math.sin(Math.acos(e)), Kv = gk(yk), zz = vk(Kv), bk = bl(0.33, 1.53, 0.69, 0.99), Yv = gk(bk), Nz = vk(Yv), jz = (e) => (e *= 2) < 1 ? 0.5 * Yv(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Vz = {
  linear: He,
  easeIn: Dz,
  easeInOut: mk,
  easeOut: Fz,
  circIn: yk,
  circInOut: zz,
  circOut: Kv,
  backIn: Yv,
  backInOut: Nz,
  backOut: bk,
  anticipate: jz
}, Pb = (e) => {
  if (Array.isArray(e)) {
    Gv(e.length === 4);
    const [t, n, r, o] = e;
    return bl(t, n, r, o);
  } else if (typeof e == "string")
    return Vz[e];
  return e;
}, qv = (e, t) => (n) => !!(gl(n) && B3.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Sk = (e, t, n) => (r) => {
  if (!gl(r))
    return r;
  const [o, i, a, s] = r.match(Fd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, Bz = (e) => ao(0, 255, e), op = {
  ...Jo,
  transform: (e) => Math.round(Bz(e))
}, $o = {
  test: qv("rgb", "red"),
  parse: Sk("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + op.transform(e) + ", " + op.transform(t) + ", " + op.transform(n) + ", " + bs(ys.transform(r)) + ")"
};
function Wz(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Nh = {
  test: qv("#"),
  parse: Wz,
  transform: $o.transform
}, Ri = {
  test: qv("hsl", "hue"),
  parse: Sk("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tr.transform(bs(t)) + ", " + tr.transform(bs(n)) + ", " + bs(ys.transform(r)) + ")"
}, kt = {
  test: (e) => $o.test(e) || Nh.test(e) || Ri.test(e),
  parse: (e) => $o.test(e) ? $o.parse(e) : Ri.test(e) ? Ri.parse(e) : Nh.parse(e),
  transform: (e) => gl(e) ? e : e.hasOwnProperty("red") ? $o.transform(e) : Ri.transform(e)
}, Le = (e, t, n) => -n * e + n * t + e;
function ip(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Hz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = ip(l, s, e + 1 / 3), i = ip(l, s, e), a = ip(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const ap = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, Uz = [Nh, $o, Ri], Gz = (e) => Uz.find((t) => t.test(e));
function Tb(e) {
  const t = Gz(e);
  let n = t.parse(e);
  return t === Ri && (n = Hz(n)), n;
}
const xk = (e, t) => {
  const n = Tb(e), r = Tb(t), o = { ...n };
  return (i) => (o.red = ap(n.red, r.red, i), o.green = ap(n.green, r.green, i), o.blue = ap(n.blue, r.blue, i), o.alpha = Le(n.alpha, r.alpha, i), $o.transform(o));
};
function Kz(e) {
  var t, n;
  return isNaN(e) && gl(e) && (((t = e.match(Fd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(KC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const wk = {
  regex: j3,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, Ck = {
  regex: KC,
  countKey: "Colors",
  token: "${c}",
  parse: kt.parse
}, kk = {
  regex: Fd,
  countKey: "Numbers",
  token: "${n}",
  parse: Jo.parse
};
function sp(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function Mc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && sp(n, wk), sp(n, Ck), sp(n, kk), n;
}
function Pk(e) {
  return Mc(e).values;
}
function Tk(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Mc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(wk.token, a[l]) : l < r + n ? s = s.replace(Ck.token, kt.transform(a[l])) : s = s.replace(kk.token, bs(a[l]));
    return s;
  };
}
const Yz = (e) => typeof e == "number" ? 0 : e;
function qz(e) {
  const t = Pk(e);
  return Tk(e)(t.map(Yz));
}
const so = {
  test: Kz,
  parse: Pk,
  createTransformer: Tk,
  getAnimatableNone: qz
}, _k = (e, t) => (n) => `${n > 0 ? t : e}`;
function Ek(e, t) {
  return typeof e == "number" ? (n) => Le(e, t, n) : kt.test(e) ? xk(e, t) : e.startsWith("var(") ? _k(e, t) : Mk(e, t);
}
const Ok = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Ek(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, Xz = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Ek(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, Mk = (e, t) => {
  const n = so.createTransformer(t), r = Mc(e), o = Mc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? no(Ok(r.values, o.values), n) : _k(e, t);
}, Zs = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, _b = (e, t) => (n) => Le(e, t, n);
function Qz(e) {
  return typeof e == "number" ? _b : typeof e == "string" ? kt.test(e) ? xk : Mk : Array.isArray(e) ? Ok : typeof e == "object" ? Xz : _b;
}
function Zz(e, t, n) {
  const r = [], o = n || Qz(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || He : t;
      s = no(l, s);
    }
    r.push(s);
  }
  return r;
}
function Ik(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Gv(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Zz(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = Zs(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(ao(e[0], e[i - 1], u)) : l;
}
function Jz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Zs(0, t, r);
    e.push(Le(n, 1, o));
  }
}
function eN(e) {
  const t = [0];
  return Jz(t, e.length - 1), t;
}
function tN(e, t) {
  return e.map((n) => n * t);
}
function nN(e, t) {
  return e.map(() => t || mk).splice(0, e.length - 1);
}
function Ic({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Lz(r) ? r.map(Pb) : Pb(r), i = {
    done: !1,
    value: t[0]
  }, a = tN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : eN(t),
    e
  ), s = Ik(a, t, {
    ease: Array.isArray(o) ? o : nN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Rk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const rN = 5;
function $k(e, t, n) {
  const r = Math.max(t - rN, 0);
  return Rk(n - e(r), t - r);
}
const lp = 1e-3, oN = 0.01, Eb = 10, iN = 0.05, aN = 1;
function sN({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Ez(e <= ro(Eb));
  let a = 1 - t;
  a = ao(iN, aN, a), e = ao(oN, Eb, br(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = jh(u, a), v = Math.exp(-d);
    return lp - f / p * v;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, v = Math.exp(-d), g = jh(Math.pow(u, 2), a);
    return (-o(u) + lp > 0 ? -1 : 1) * ((f - p) * v) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -lp + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = uN(o, i, s);
  if (e = ro(e), isNaN(l))
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
const lN = 12;
function uN(e, t, n) {
  let r = n;
  for (let o = 1; o < lN; o++)
    r = r - e(r) / t(r);
  return r;
}
function jh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const cN = ["duration", "bounce"], dN = ["stiffness", "damping", "mass"];
function Ob(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function fN(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ob(e, dN) && Ob(e, cN)) {
    const n = sN(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Ak({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = fN(r), p = c ? -br(c) : 0, v = l / (2 * Math.sqrt(s * u)), g = i - o, S = br(Math.sqrt(s / u)), m = Math.abs(g) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (v < 1) {
    const b = jh(S, v);
    h = (x) => {
      const k = Math.exp(-v * S * x);
      return i - k * ((p + v * S * g) / b * Math.sin(b * x) + g * Math.cos(b * x));
    };
  } else if (v === 1)
    h = (b) => i - Math.exp(-S * b) * (g + (p + S * g) * b);
  else {
    const b = S * Math.sqrt(v * v - 1);
    h = (x) => {
      const k = Math.exp(-v * S * x), P = Math.min(b * x, 300);
      return i - k * ((p + v * S * g) * Math.sinh(P) + b * g * Math.cosh(P)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const x = h(b);
      if (f)
        a.done = b >= d;
      else {
        let k = p;
        b !== 0 && (v < 1 ? k = $k(h, b, x) : k = 0);
        const P = Math.abs(k) <= n, T = Math.abs(i - x) <= t;
        a.done = P && T;
      }
      return a.value = a.done ? i : x, a;
    }
  };
}
function Mb({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (_) => s !== void 0 && _ < s || l !== void 0 && _ > l, v = (_) => s === void 0 ? l : l === void 0 || Math.abs(s - _) < Math.abs(l - _) ? s : l;
  let g = n * t;
  const S = d + g, m = a === void 0 ? S : a(S);
  m !== S && (g = m - d);
  const h = (_) => -g * Math.exp(-_ / r), b = (_) => m + h(_), x = (_) => {
    const M = h(_), I = b(_);
    f.done = Math.abs(M) <= u, f.value = f.done ? m : I;
  };
  let k, P;
  const T = (_) => {
    p(f.value) && (k = _, P = Ak({
      keyframes: [f.value, v(f.value)],
      velocity: $k(b, _, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return T(0), {
    calculatedDuration: null,
    next: (_) => {
      let M = !1;
      return !P && k === void 0 && (M = !0, x(_), T(_)), k !== void 0 && _ > k ? P.next(_ - k) : (!M && x(_), f);
    }
  };
}
const pN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Te.update(t, !0),
    stop: () => Tr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ot.isProcessing ? ot.timestamp : performance.now()
  };
}, Ib = 2e4;
function Rb(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ib; )
    t += n, r = e.next(t);
  return t >= Ib ? 1 / 0 : t;
}
const hN = {
  decay: Mb,
  inertia: Mb,
  tween: Ic,
  keyframes: Ic,
  spring: Ak
};
function Rc({ autoplay: e = !0, delay: t = 0, driver: n = pN, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, v = !1, g, S;
  const m = () => {
    S = new Promise((V) => {
      g = V;
    });
  };
  m();
  let h;
  const b = hN[o] || Ic;
  let x;
  b !== Ic && typeof r[0] != "number" && (x = Ik([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const k = b({ ...f, keyframes: r });
  let P;
  s === "mirror" && (P = b({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let T = "idle", _ = null, M = null, I = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = Rb(k));
  const { calculatedDuration: D } = k;
  let G = 1 / 0, H = 1 / 0;
  D !== null && (G = D + a, H = G * (i + 1) - a);
  let L = 0;
  const W = (V) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, V)), p < 0 && (M = Math.min(V - H / p, M)), _ !== null ? L = _ : L = Math.round(V - M) * p;
    const Y = L - t * (p >= 0 ? 1 : -1), N = p >= 0 ? Y < 0 : Y > H;
    L = Math.max(Y, 0), T === "finished" && _ === null && (L = H);
    let te = L, le = k;
    if (i) {
      const Ce = L / G;
      let et = Math.floor(Ce), qe = Ce % 1;
      !qe && Ce >= 1 && (qe = 1), qe === 1 && et--, et = Math.min(et, i + 1);
      const on = !!(et % 2);
      on && (s === "reverse" ? (qe = 1 - qe, a && (qe -= a / G)) : s === "mirror" && (le = P));
      let Pn = ao(0, 1, qe);
      L > H && (Pn = s === "reverse" && on ? 1 : 0), te = Pn * G;
    }
    const ie = N ? { done: !1, value: r[0] } : le.next(te);
    x && (ie.value = x(ie.value));
    let { done: se } = ie;
    !N && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = _ === null && (T === "finished" || T === "running" && se);
    return d && d(ie.value), me && A(), ie;
  }, K = () => {
    h && h.stop(), h = void 0;
  }, $ = () => {
    T = "idle", K(), g(), m(), M = I = null;
  }, A = () => {
    T = "finished", c && c(), K(), g();
  }, z = () => {
    if (v)
      return;
    h || (h = n(W));
    const V = h.now();
    l && l(), _ !== null ? M = V - _ : (!M || T === "finished") && (M = V), T === "finished" && m(), I = M, _ = null, T = "running", h.start();
  };
  e && z();
  const U = {
    then(V, Y) {
      return S.then(V, Y);
    },
    get time() {
      return br(L);
    },
    set time(V) {
      V = ro(V), L = V, _ !== null || !h || p === 0 ? _ = V : M = h.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Rb(k) : k.calculatedDuration;
      return br(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !h || (p = V, U.time = br(L));
    },
    get state() {
      return T;
    },
    play: z,
    pause: () => {
      T = "paused", _ = L;
    },
    stop: () => {
      v = !0, T !== "idle" && (T = "idle", u && u(), $());
    },
    cancel: () => {
      I !== null && W(I), $();
    },
    complete: () => {
      T = "finished";
    },
    sample: (V) => (M = 0, W(V))
  };
  return U;
}
function mN(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const vN = mN(() => Object.hasOwnProperty.call(Element.prototype, "animate")), gN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), su = 10, yN = 2e4, bN = (e, t) => t.type === "spring" || e === "backgroundColor" || !dk(t.ease);
function SN(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(vN() && gN.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (bN(t, o)) {
    const h = Rc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const x = [];
    let k = 0;
    for (; !b.done && k < yN; )
      b = h.sample(k), x.push(b.value), k += su;
    p = void 0, c = x, d = k - su, f = "linear";
  }
  const v = Mz(e.owner.current, t, c, {
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
  o.syncStart && (v.startTime = ot.isProcessing ? ot.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const g = () => v.cancel(), S = () => {
    Te.update(g), s(), u();
  };
  return v.onfinish = () => {
    e.set(Iz(c, o)), r && r(), S();
  }, {
    then(h, b) {
      return l.then(h, b);
    },
    attachTimeline(h) {
      return v.timeline = h, v.onfinish = null, He;
    },
    get time() {
      return br(v.currentTime || 0);
    },
    set time(h) {
      v.currentTime = ro(h);
    },
    get speed() {
      return v.playbackRate;
    },
    set speed(h) {
      v.playbackRate = h;
    },
    get duration() {
      return br(d);
    },
    play: () => {
      a || (v.play(), Tr(g));
    },
    pause: () => v.pause(),
    stop: () => {
      if (a = !0, v.playState === "idle")
        return;
      const { currentTime: h } = v;
      if (h) {
        const b = Rc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(h - su).value, b.sample(h).value, su);
      }
      S();
    },
    complete: () => v.finish(),
    cancel: S
  };
}
function xN({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
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
  return t ? Rc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const wN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, CN = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), kN = {
  type: "keyframes",
  duration: 0.8
}, PN = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, TN = (e, { keyframes: t }) => t.length > 2 ? kN : Zo.has(e) ? e.startsWith("scale") ? CN(t[1]) : wN : PN, Vh = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(so.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), _N = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function EN(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Fd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = _N.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const ON = /([a-z-]*)\(.*?\)/g, Bh = {
  ...so,
  getAnimatableNone: (e) => {
    const t = e.match(ON);
    return t ? t.map(EN).join(" ") : e;
  }
}, MN = {
  ...YC,
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
  filter: Bh,
  WebkitFilter: Bh
}, Xv = (e) => MN[e];
function Dk(e, t) {
  let n = Xv(e);
  return n !== Bh && (n = so), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Fk = (e) => /^0[^.\s]+$/.test(e);
function IN(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Fk(e);
}
function RN(e, t, n, r) {
  const o = Vh(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), IN(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Dk(t, s);
    }
  return i;
}
function $N({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Qv(e, t) {
  return e[t] || e.default || e;
}
const Zv = (e, t, n, r = {}) => (o) => {
  const i = Qv(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - ro(a);
  const l = RN(t, e, n, i), u = l[0], c = l[l.length - 1], d = Vh(e, u), f = Vh(e, c);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (v) => {
      t.set(v), i.onUpdate && i.onUpdate(v);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if ($N(i) || (p = {
    ...p,
    ...TN(e, p)
  }), p.duration && (p.duration = ro(p.duration)), p.repeatDelay && (p.repeatDelay = ro(p.repeatDelay)), !d || !f || Oz.current || i.type === !1)
    return xN(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const v = SN(t, e, p);
    if (v)
      return v;
  }
  return Rc(p);
};
function $c(e) {
  return !!(Vt(e) && e.add);
}
const Lk = (e) => /^\-?\d*\.?\d+$/.test(e);
function Jv(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function eg(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class tg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Jv(this.subscriptions, t), () => eg(this.subscriptions, t);
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
const AN = (e) => !isNaN(parseFloat(e));
class DN {
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
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, Te.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Te.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = AN(this.current), this.owner = n.owner;
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
    this.events[t] || (this.events[t] = new tg());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Te.read(() => {
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
      Rk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function da(e, t) {
  return new DN(e, t);
}
const zk = (e) => (t) => t.test(e), FN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Nk = [Jo, ne, tr, Lr, H3, W3, FN], ja = (e) => Nk.find(zk(e)), LN = [...Nk, kt, so], zN = (e) => LN.find(zk(e));
function NN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, da(n));
}
function jN(e, t) {
  const n = zd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = oz(i[a]);
    NN(e, a, s);
  }
}
function VN(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Lk(c) || Fk(c)) ? c = parseFloat(c) : !zN(c) && so.test(u) && (c = Dk(l, u)), e.addValue(l, da(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function BN(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function WN(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = BN(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function HN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function jk(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && HN(c, d))
      continue;
    const v = {
      delay: n,
      elapsed: 0,
      ...Qv(i || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[VC];
      h && (g = !1, v.elapsed = window.HandoffAppearAnimations(h, d, f, Te), v.syncStart = !0);
    }
    let S = g && p === f.get();
    if (v.type === "spring" && (f.getVelocity() || v.velocity) && (S = !1), f.animation && (S = !1), S)
      continue;
    f.start(Zv(d, f, p, e.shouldReduceMotion && Zo.has(d) ? { type: !1 } : v));
    const m = f.animation;
    $c(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && jN(e, a);
  }), u;
}
function Wh(e, t, n = {}) {
  const r = zd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(jk(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return UN(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function UN(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(GN).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Wh(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function GN(e, t) {
  return e.sortNodePosition(t);
}
function KN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Wh(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Wh(e, t, n);
  else {
    const o = typeof t == "function" ? zd(e, t, n.custom) : t;
    r = Promise.all(jk(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const YN = [...Fv].reverse(), qN = Fv.length;
function XN(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => KN(e, n, r)));
}
function QN(e) {
  let t = XN(e);
  const n = JN();
  let r = !0;
  const o = (l, u) => {
    const c = zd(e, u);
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
    let v = {}, g = 1 / 0;
    for (let m = 0; m < qN; m++) {
      const h = YN[m], b = n[h], x = c[h] !== void 0 ? c[h] : d[h], k = Xs(x), P = h === u ? b.isActive : null;
      P === !1 && (g = m);
      let T = x === d[h] && x !== c[h] && k;
      if (T && r && e.manuallyAnimateOnMount && (T = !1), b.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !b.prevProp || // Or if the prop doesn't define an animation
      Ad(x) || typeof x == "boolean")
        continue;
      const _ = ZN(b.prevProp, x);
      let M = _ || // If we're making this variant active, we want to always make it active
      h === u && b.isActive && !T && k || // If we removed a higher-priority variant (i is in reverse order)
      m > g && k;
      const I = Array.isArray(x) ? x : [x];
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
        v.hasOwnProperty(W) || (K !== $ ? Oc(K) && Oc($) ? !uk(K, $) || _ ? L(W) : b.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : b.protectedKeys[W] = !0);
      }
      b.prevProp = x, b.prevResolvedValues = D, b.isActive && (v = { ...v, ...D }), r && e.blockInitialAnimation && (M = !1), M && !T && f.push(...I.map((W) => ({
        animation: W,
        options: { type: h, ...l }
      })));
    }
    if (p.size) {
      const m = {};
      p.forEach((h) => {
        const b = e.getBaseTarget(h);
        b !== void 0 && (m[h] = b);
      }), f.push({ animation: m });
    }
    let S = !!f.length;
    return r && c.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), r = !1, S ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var v;
      return (v = p.animationState) === null || v === void 0 ? void 0 : v.setActive(l, u);
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
function ZN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !uk(t, e) : !1;
}
function So(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function JN() {
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
class ej extends ho {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = QN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ad(t) && (this.unmount = t.subscribe(this.node));
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
let tj = 0;
class nj extends ho {
  constructor() {
    super(...arguments), this.id = tj++;
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
const rj = {
  animation: {
    Feature: ej
  },
  exit: {
    Feature: nj
  }
}, $b = (e, t) => Math.abs(e - t);
function oj(e, t) {
  const n = $b(e.x, t.x), r = $b(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Vk {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = cp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = oj(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: v } = ot;
      this.history.push({ ...p, timestamp: v });
      const { onStart: g, onMove: S } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = up(d, this.transformPagePoint), Te.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, v = cp(c.type === "pointercancel" ? this.lastMoveEventInfo : up(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, v), p && p(c, v);
    }, !ok(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Ld(t), a = up(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, cp(a, this.history)), this.removeListeners = no(yr(this.contextWindow, "pointermove", this.handlePointerMove), yr(this.contextWindow, "pointerup", this.handlePointerUp), yr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tr(this.updatePoint);
  }
}
function up(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ab(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function cp({ point: e }, t) {
  return {
    point: e,
    delta: Ab(e, Bk(t)),
    offset: Ab(e, ij(t)),
    velocity: aj(t, 0.1)
  };
}
function ij(e) {
  return e[0];
}
function Bk(e) {
  return e[e.length - 1];
}
function aj(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Bk(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > ro(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = br(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Zt(e) {
  return e.max - e.min;
}
function Hh(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Db(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Le(t.min, t.max, e.origin), e.scale = Zt(n) / Zt(t), (Hh(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Le(n.min, n.max, e.origin) - e.originPoint, (Hh(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ss(e, t, n, r) {
  Db(e.x, t.x, n.x, r ? r.originX : void 0), Db(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Fb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Zt(t);
}
function sj(e, t, n) {
  Fb(e.x, t.x, n.x), Fb(e.y, t.y, n.y);
}
function Lb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Zt(t);
}
function xs(e, t, n) {
  Lb(e.x, t.x, n.x), Lb(e.y, t.y, n.y);
}
function lj(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Le(n, e, r.max) : Math.min(e, n)), e;
}
function zb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function uj(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: zb(e.x, n, o),
    y: zb(e.y, t, r)
  };
}
function Nb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function cj(e, t) {
  return {
    x: Nb(e.x, t.x),
    y: Nb(e.y, t.y)
  };
}
function dj(e, t) {
  let n = 0.5;
  const r = Zt(e), o = Zt(t);
  return o > r ? n = Zs(t.min, t.max - r, e.min) : r > o && (n = Zs(e.min, e.max - o, t.min)), ao(0, 1, n);
}
function fj(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Uh = 0.35;
function pj(e = Uh) {
  return e === !1 ? e = 0 : e === !0 && (e = Uh), {
    x: jb(e, "left", "right"),
    y: jb(e, "top", "bottom")
  };
}
function jb(e, t, n) {
  return {
    min: Vb(e, t),
    max: Vb(e, n)
  };
}
function Vb(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Bb = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), $i = () => ({
  x: Bb(),
  y: Bb()
}), Wb = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: Wb(),
  y: Wb()
});
function Hn(e) {
  return [e("x"), e("y")];
}
function Wk({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function hj({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function mj(e, t) {
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
function dp(e) {
  return e === void 0 || e === 1;
}
function Gh({ scale: e, scaleX: t, scaleY: n }) {
  return !dp(e) || !dp(t) || !dp(n);
}
function ko(e) {
  return Gh(e) || Hk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Hk(e) {
  return Hb(e.x) || Hb(e.y);
}
function Hb(e) {
  return e && e !== "0%";
}
function Ac(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Ub(e, t, n, r, o) {
  return o !== void 0 && (e = Ac(e, o, r)), Ac(e, n, r) + t;
}
function Kh(e, t = 0, n = 1, r, o) {
  e.min = Ub(e.min, t, n, r, o), e.max = Ub(e.max, t, n, r, o);
}
function Uk(e, { x: t, y: n }) {
  Kh(e.x, t.translate, t.scale, t.originPoint), Kh(e.y, n.translate, n.scale, n.originPoint);
}
function vj(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Ai(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Uk(e, a)), r && ko(i.latestValues) && Ai(e, i.latestValues));
  }
  t.x = Gb(t.x), t.y = Gb(t.y);
}
function Gb(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function jr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Kb(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = Le(e.min, e.max, i);
  Kh(e, t[n], t[r], a, t.scale);
}
const gj = ["x", "scaleX", "originX"], yj = ["y", "scaleY", "originY"];
function Ai(e, t) {
  Kb(e.x, t, gj), Kb(e.y, t, yj);
}
function Gk(e, t) {
  return Wk(mj(e.getBoundingClientRect(), t));
}
function bj(e, t, n) {
  const r = Gk(e, n), { scroll: o } = t;
  return o && (jr(r.x, o.offset.x), jr(r.y, o.offset.y)), r;
}
const Kk = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Sj = /* @__PURE__ */ new WeakMap();
class xj {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Xe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Ld(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ak(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Hn((v) => {
        let g = this.getAxisMotionValue(v).get() || 0;
        if (tr.test(g)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const m = S.layout.layoutBox[v];
            m && (g = Zt(m) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[v] = g;
      }), f && Te.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: v } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = wj(v), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, v), this.updateAxis("y", u.point, v), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Vk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Kk(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Te.update(() => i(t, n));
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
    if (!r || !lu(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = lj(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Ii(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = uj(o.layoutBox, n) : this.constraints = !1, this.elastic = pj(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Hn((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = fj(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ii(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = bj(r, o.root, this.visualElement.getTransformPagePoint());
    let a = cj(o.layout.layoutBox, i);
    if (n) {
      const s = n(hj(a));
      this.hasMutatedConstraints = !!s, s && (a = Wk(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Hn((c) => {
      if (!lu(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, v = {
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
      return this.startAxisValueAnimation(c, v);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Zv(t, r, 0, n));
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
      if (!lu(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - Le(a, s, 0.5));
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
    if (!Ii(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Hn((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = dj({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Hn((a) => {
      if (!lu(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(Le(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Sj.set(this.visualElement, this);
    const t = this.visualElement.current, n = yr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ii(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = mr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Uh, dragMomentum: s = !0 } = t;
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
function lu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function wj(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Cj extends ho {
  constructor(t) {
    super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new xj(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Yb = (e) => (t, n) => {
  e && Te.update(() => e(t, n));
};
class kj extends ho {
  constructor() {
    super(...arguments), this.removePointerDownListener = He;
  }
  onPointerDown(t) {
    this.session = new Vk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Kk(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Yb(t),
      onStart: Yb(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Te.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = yr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Yk() {
  const e = y.useContext(ml);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = y.useId();
  return y.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function Pj() {
  return Tj(y.useContext(ml));
}
function Tj(e) {
  return e === null ? !0 : e.isPresent;
}
const Uu = {
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
function qb(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Va = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = qb(e, t.target.x), r = qb(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, _j = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = so.parse(e);
    if (o.length > 5)
      return r;
    const i = so.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = Le(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class Ej extends re.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    F3(Oj), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Uu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Te.postRender(() => {
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
function qk(e) {
  const [t, n] = Yk(), r = y.useContext(zv);
  return re.createElement(Ej, { ...e, layoutGroup: r, switchLayoutGroup: y.useContext(WC), isPresent: t, safeToRemove: n });
}
const Oj = {
  borderRadius: {
    ...Va,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Va,
  borderTopRightRadius: Va,
  borderBottomLeftRadius: Va,
  borderBottomRightRadius: Va,
  boxShadow: _j
}, Xk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Mj = Xk.length, Xb = (e) => typeof e == "string" ? parseFloat(e) : e, Qb = (e) => typeof e == "number" || ne.test(e);
function Ij(e, t, n, r, o, i) {
  o ? (e.opacity = Le(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Rj(r)
  ), e.opacityExit = Le(t.opacity !== void 0 ? t.opacity : 1, 0, $j(r))) : i && (e.opacity = Le(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < Mj; a++) {
    const s = `border${Xk[a]}Radius`;
    let l = Zb(t, s), u = Zb(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Qb(l) === Qb(u) ? (e[s] = Math.max(Le(Xb(l), Xb(u), r), 0), (tr.test(u) || tr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = Le(t.rotate || 0, n.rotate || 0, r));
}
function Zb(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Rj = Qk(0, 0.5, Kv), $j = Qk(0.5, 0.95, He);
function Qk(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Zs(e, t, r));
}
function Jb(e, t) {
  e.min = t.min, e.max = t.max;
}
function un(e, t) {
  Jb(e.x, t.x), Jb(e.y, t.y);
}
function e1(e, t, n, r, o) {
  return e -= t, e = Ac(e, 1 / n, r), o !== void 0 && (e = Ac(e, 1 / o, r)), e;
}
function Aj(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (tr.test(t) && (t = parseFloat(t), t = Le(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Le(i.min, i.max, r);
  e === i && (s -= t), e.min = e1(e.min, t, n, s, o), e.max = e1(e.max, t, n, s, o);
}
function t1(e, t, [n, r, o], i, a) {
  Aj(e, t[n], t[r], t[o], t.scale, i, a);
}
const Dj = ["x", "scaleX", "originX"], Fj = ["y", "scaleY", "originY"];
function n1(e, t, n, r) {
  t1(e.x, t, Dj, n ? n.x : void 0, r ? r.x : void 0), t1(e.y, t, Fj, n ? n.y : void 0, r ? r.y : void 0);
}
function r1(e) {
  return e.translate === 0 && e.scale === 1;
}
function Zk(e) {
  return r1(e.x) && r1(e.y);
}
function Lj(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Jk(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function o1(e) {
  return Zt(e.x) / Zt(e.y);
}
class zj {
  constructor() {
    this.members = [];
  }
  add(t) {
    Jv(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (eg(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function i1(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const Nj = (e, t) => e.depth - t.depth;
class jj {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Jv(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    eg(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Nj), this.isDirty = !1, this.children.forEach(t);
  }
}
function Vj(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Tr(r), e(i - t));
  };
  return Te.read(r, !0), () => Tr(r);
}
function Bj(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Wj(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Hj(e, t, n) {
  const r = Vt(e) ? e : da(e);
  return r.start(Zv("", r, t, n)), r.animation;
}
const a1 = ["", "X", "Y", "Z"], Uj = { visibility: "hidden" }, s1 = 1e3;
let Gj = 0;
const Po = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function eP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = Gj++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Po.totalNodes = Po.resolvedTargetDeltas = Po.recalculatedProjection = 0, this.nodes.forEach(qj), this.nodes.forEach(eV), this.nodes.forEach(tV), this.nodes.forEach(Xj), Bj(Po);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jj());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new tg()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = Wj(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = Vj(f, 250), Uu.hasAnimatedSinceResize && (Uu.hasAnimatedSinceResize = !1, this.nodes.forEach(u1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || aV, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !Jk(this.targetLayout, v) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const x = {
            ...Qv(g, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || u1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(nV), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(l1);
        return;
      }
      this.isUpdating || this.nodes.forEach(Zj), this.isUpdating = !1, this.nodes.forEach(Jj), this.nodes.forEach(Kj), this.nodes.forEach(Yj), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = ao(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, tp.update.process(ot), tp.preRender.process(ot), tp.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Qj), this.sharedNodes.forEach(rV);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Te.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Te.postRender(() => {
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Zk(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || ko(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), sV(l), {
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
      return l && (jr(s.x, l.offset.x), jr(s.y, l.offset.y)), s;
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
            f && (jr(s.x, -f.offset.x), jr(s.y, -f.offset.y));
          }
          jr(s.x, c.offset.x), jr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Xe();
      un(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Ai(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), ko(c.latestValues) && Ai(l, c.latestValues);
      }
      return ko(this.latestValues) && Ai(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Xe();
      un(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ko(u.latestValues))
          continue;
        Gh(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        un(c, d), n1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ko(this.latestValues) && n1(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), xs(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), sj(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : un(this.target, this.layout.layoutBox), Uk(this.target, this.targetDelta)) : un(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), xs(this.relativeTargetOrigin, this.target, p.target), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Po.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Gh(this.parent.latestValues) || Hk(this.parent.latestValues)))
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
      vj(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: v } = s;
      if (!v) {
        this.projectionTransform && (this.projectionDelta = $i(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = $i(), this.projectionDeltaWithTransform = $i());
      const g = this.projectionTransform;
      Ss(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = i1(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), Po.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = $i();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Xe(), p = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, g = p !== v, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(iV));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (x) => {
        const k = x / 1e3;
        c1(d.x, a.x, k), c1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (xs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), oV(this.relativeTarget, this.relativeTargetOrigin, f, k), b && Lj(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Xe()), un(b, this.relativeTarget)), g && (this.animationValues = c, Ij(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Te.update(() => {
        Uu.hasAnimatedSinceResize = !0, this.currentAnimation = Hj(0, s1, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(s1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && tP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Zt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Zt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        un(s, l), Ai(s, c), Ss(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new zj()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < a1.length; c++) {
        const d = "rotate" + a1[c];
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
        return Uj;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Hu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Hu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !ko(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = i1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: v } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in _c) {
        if (f[g] === void 0)
          continue;
        const { correct: S, applyTo: m } = _c[g], h = u.transform === "none" ? f[g] : S(f[g], d);
        if (m) {
          const b = m.length;
          for (let x = 0; x < b; x++)
            u[m[x]] = h;
        } else
          u[g] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Hu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(l1), this.root.sharedNodes.clear();
    }
  };
}
function Kj(e) {
  e.updateLayout();
}
function Yj(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Zt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : tP(i, n.layoutBox, r) && Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Zt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = $i();
    Ss(s, r, n.layoutBox);
    const l = $i();
    a ? Ss(l, e.applyTransform(o, !0), n.measuredBox) : Ss(l, r, n.layoutBox);
    const u = !Zk(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = Xe();
          xs(v, n.layoutBox, f.layoutBox);
          const g = Xe();
          xs(g, r, p.layoutBox), Jk(v, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = d);
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
function qj(e) {
  Po.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Xj(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Qj(e) {
  e.clearSnapshot();
}
function l1(e) {
  e.clearMeasurements();
}
function Zj(e) {
  e.isLayoutDirty = !1;
}
function Jj(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function u1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function eV(e) {
  e.resolveTargetDelta();
}
function tV(e) {
  e.calcProjection();
}
function nV(e) {
  e.resetRotation();
}
function rV(e) {
  e.removeLeadSnapshot();
}
function c1(e, t, n) {
  e.translate = Le(t.translate, 0, n), e.scale = Le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function d1(e, t, n, r) {
  e.min = Le(t.min, n.min, r), e.max = Le(t.max, n.max, r);
}
function oV(e, t, n, r) {
  d1(e.x, t.x, n.x, r), d1(e.y, t.y, n.y, r);
}
function iV(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const aV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, f1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), p1 = f1("applewebkit/") && !f1("chrome/") ? Math.round : He;
function h1(e) {
  e.min = p1(e.min), e.max = p1(e.max);
}
function sV(e) {
  h1(e.x), h1(e.y);
}
function tP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Hh(o1(t), o1(n), 0.2);
}
const lV = eP({
  attachResizeListener: (e, t) => mr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), fp = {
  current: void 0
}, nP = eP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!fp.current) {
      const e = new lV({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), fp.current = e;
    }
    return fp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), uV = {
  pan: {
    Feature: kj
  },
  drag: {
    Feature: Cj,
    ProjectionNode: nP,
    MeasureLayout: qk
  }
}, cV = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function dV(e) {
  const t = cV.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function Yh(e, t, n = 1) {
  const [r, o] = dV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Lk(a) ? parseFloat(a) : a;
  } else
    return Lh(o) ? Yh(o, t, n + 1) : o;
}
function fV(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!Lh(i))
      return;
    const a = Yh(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Lh(i))
      continue;
    const a = Yh(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const pV = /* @__PURE__ */ new Set([
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
]), rP = (e) => pV.has(e), hV = (e) => Object.keys(e).some(rP), m1 = (e) => e === Jo || e === ne, v1 = (e, t) => parseFloat(e.split(", ")[t]), g1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return v1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? v1(i[1], e) : 0;
  }
}, mV = /* @__PURE__ */ new Set(["x", "y", "z"]), vV = vl.filter((e) => !mV.has(e));
function gV(e) {
  const t = [];
  return vV.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const fa = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: g1(4, 13),
  y: g1(5, 14)
};
fa.translateX = fa.x;
fa.translateY = fa.y;
const yV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = fa[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = fa[u](l, i);
  }), e;
}, bV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(rP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = ja(c);
    const f = t[l];
    let p;
    if (Oc(f)) {
      const v = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = ja(c);
      for (let S = g; S < v && f[S] !== null; S++)
        p ? Gv(ja(f[S]) === p) : p = ja(f[S]);
    } else
      p = ja(f);
    if (d !== p)
      if (m1(d) && m1(p)) {
        const v = u.get();
        typeof v == "string" && u.set(parseFloat(v)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = gV(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = yV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), $d && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function SV(e, t, n, r) {
  return hV(t) ? bV(e, t, n, r) : { target: t, transitionEnd: r };
}
const xV = (e, t, n, r) => {
  const o = fV(e, t, r);
  return t = o.target, r = o.transitionEnd, SV(e, t, n, r);
}, qh = { current: null }, oP = { current: !1 };
function wV() {
  if (oP.current = !0, !!$d)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => qh.current = e.matches;
      e.addListener(t), t();
    } else
      qh.current = !1;
}
function CV(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Vt(i))
      e.addValue(o, i), $c(r) && r.add(o);
    else if (Vt(a))
      e.addValue(o, da(i, { owner: e })), $c(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, da(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const y1 = /* @__PURE__ */ new WeakMap(), iP = Object.keys(Qs), kV = iP.length, b1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], PV = Lv.length;
class TV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Te.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Dd(n), this.isVariantNode = BC(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Vt(f) && (f.set(s[d], !1), $c(u) && u.add(d));
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
    this.current = t, y1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), oP.current || wV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : qh.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    y1.delete(this.current), this.projection && this.projection.unmount(), Tr(this.notifyUpdate), Tr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Zo.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Te.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let l = 0; l < kV; l++) {
      const u = iP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Qs[u];
      f && (a = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Ii(d),
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
    for (let r = 0; r < b1.length; r++) {
      const o = b1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = CV(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < PV; r++) {
      const o = Lv[r], i = this.props[o];
      (Xs(i) || i === !1) && (n[o] = i);
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
    return r === void 0 && n !== void 0 && (r = da(n, { owner: this }), this.addValue(t, r)), r;
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Uv(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Vt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new tg()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class aP extends TV {
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
    let a = WN(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      VN(this, r, a);
      const s = xV(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function _V(e) {
  return window.getComputedStyle(e);
}
class EV extends aP {
  readValueFromInstance(t, n) {
    if (Zo.has(n)) {
      const r = Xv(n);
      return r && r.default || 0;
    } else {
      const r = _V(t), o = (GC(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Gk(t, n);
  }
  build(t, n, r, o) {
    jv(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Hv(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Vt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    ZC(t, n, r, o);
  }
}
class OV extends aP {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Zo.has(n)) {
      const r = Xv(n);
      return r && r.default || 0;
    }
    return n = JC.has(n) ? n : Dv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return tk(t, n);
  }
  build(t, n, r, o) {
    Bv(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ek(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Wv(t.tagName), super.mount(t);
  }
}
const MV = (e, t) => Nv(e) ? new OV(t, { enableHardwareAcceleration: !1 }) : new EV(t, { enableHardwareAcceleration: !0 }), IV = {
  layout: {
    ProjectionNode: nP,
    MeasureLayout: qk
  }
}, RV = {
  ...rj,
  ...Pz,
  ...uV,
  ...IV
}, or = /* @__PURE__ */ A3((e, t) => fz(e, t, RV, MV));
function sP() {
  const e = y.useRef(!1);
  return Av(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function $V() {
  const e = sP(), [t, n] = y.useState(0), r = y.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [y.useCallback(() => Te.postRender(r), [r]), t];
}
class AV extends y.Component {
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
function DV({ children: e, isPresent: t }) {
  const n = y.useId(), r = y.useRef(null), o = y.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return y.useInsertionEffect(() => {
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
  }, [t]), y.createElement(AV, { isPresent: t, childRef: r, sizeRef: o }, y.cloneElement(e, { ref: r }));
}
const pp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = nk(FV), l = y.useId(), u = y.useMemo(
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
  return y.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [n]), y.useEffect(() => {
    !n && !s.size && r && r();
  }, [n]), a === "popLayout" && (e = y.createElement(DV, { isPresent: n }, e)), y.createElement(ml.Provider, { value: u }, e);
};
function FV() {
  return /* @__PURE__ */ new Map();
}
function LV(e) {
  return y.useEffect(() => () => e(), []);
}
const To = (e) => e.key || "";
function zV(e, t) {
  e.forEach((n) => {
    const r = To(n);
    t.set(r, n);
  });
}
function NV(e) {
  const t = [];
  return y.Children.forEach(e, (n) => {
    y.isValidElement(n) && t.push(n);
  }), t;
}
const ei = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = y.useContext(zv).forceRender || $V()[0], l = sP(), u = NV(e);
  let c = u;
  const d = y.useRef(/* @__PURE__ */ new Map()).current, f = y.useRef(c), p = y.useRef(/* @__PURE__ */ new Map()).current, v = y.useRef(!0);
  if (Av(() => {
    v.current = !1, zV(u, p), f.current = c;
  }), LV(() => {
    v.current = !0, p.clear(), d.clear();
  }), v.current)
    return y.createElement(y.Fragment, null, c.map((h) => y.createElement(pp, { key: To(h), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const g = f.current.map(To), S = u.map(To), m = g.length;
  for (let h = 0; h < m; h++) {
    const b = g[h];
    S.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, b) => {
    if (S.indexOf(b) !== -1)
      return;
    const x = p.get(b);
    if (!x)
      return;
    const k = g.indexOf(b);
    let P = h;
    if (!P) {
      const T = () => {
        d.delete(b);
        const _ = Array.from(p.keys()).filter((M) => !S.includes(M));
        if (_.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const I = To(M);
          return (
            // filter out the node exiting
            I === b || // filter out the leftover children
            _.includes(I)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), r && r();
        }
      };
      P = y.createElement(pp, { key: To(x), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: i, mode: a }, x), d.set(b, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((h) => {
    const b = h.key;
    return d.has(b) ? h : y.createElement(pp, { key: To(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), y.createElement(y.Fragment, null, d.size ? c : c.map((h) => y.cloneElement(h)));
};
var jV = {
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
}, lP = y.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = jV,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = y.useState(s), p = Pj();
  ca(() => {
    p || r == null || r();
  }, [p]), ca(() => {
    f(s);
  }, [s]);
  const v = () => f(null), g = () => f(s), S = () => {
    p && o();
  };
  y.useEffect(() => {
    p && i && o();
  }, [p, i, o]), k3(S, d);
  const m = y.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = y.useMemo(() => w3(a), [a]);
  return /* @__PURE__ */ w.jsx(
    or.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: v,
      onHoverEnd: g,
      custom: { position: a },
      style: h,
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Xn(n, { id: t, onClose: S })
        }
      )
    }
  );
});
lP.displayName = "ToastComponent";
var S1 = {
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
  } = e, c = ae("chakra-icon", s), d = Qo("Icon", e), f = {
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
  }, v = r ?? S1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ w.jsx(X.svg, { as: n, ...p, ...u });
  const g = a ?? S1.path;
  return /* @__PURE__ */ w.jsx(X.svg, { verticalAlign: "middle", viewBox: v, ...p, ...u, children: g });
});
kn.displayName = "Icon";
function VV(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function BV(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function x1(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var WV = rC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Nd = oe((e, t) => {
  const n = Qo("Spinner", e), {
    label: r = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Cn(e), u = ae("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${WV} ${i} linear infinite`,
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
Nd.displayName = "Spinner";
var [HV, ng] = Je({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [UV, rg] = Je({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), uP = {
  info: { icon: BV, colorScheme: "blue" },
  warning: { icon: x1, colorScheme: "orange" },
  success: { icon: VV, colorScheme: "green" },
  error: { icon: x1, colorScheme: "red" },
  loading: { icon: Nd, colorScheme: "blue" }
};
function GV(e) {
  return uP[e].colorScheme;
}
function KV(e) {
  return uP[e].icon;
}
var cP = oe(
  function(t, n) {
    const r = rg(), { status: o } = ng(), i = {
      display: "inline",
      ...r.description
    };
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: ae("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
cP.displayName = "AlertDescription";
function dP(e) {
  const { status: t } = ng(), n = KV(t), r = rg(), o = t === "loading" ? r.spinner : r.icon;
  return /* @__PURE__ */ w.jsx(
    X.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ae("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ w.jsx(n, { h: "100%", w: "100%" })
    }
  );
}
dP.displayName = "AlertIcon";
var fP = oe(
  function(t, n) {
    const r = rg(), { status: o } = ng();
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: ae("chakra-alert__title", t.className),
        __css: r.title
      }
    );
  }
);
fP.displayName = "AlertTitle";
var pP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Cn(t), s = (r = t.colorScheme) != null ? r : GV(o), l = Ct("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ w.jsx(HV, { value: { status: o }, children: /* @__PURE__ */ w.jsx(UV, { value: l, children: /* @__PURE__ */ w.jsx(
    X.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: n,
      ...a,
      className: ae("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
pP.displayName = "Alert";
function YV(e) {
  return /* @__PURE__ */ w.jsx(kn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var jd = oe(
  function(t, n) {
    const r = Qo("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Cn(t), l = {
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
        children: o || /* @__PURE__ */ w.jsx(YV, { width: "1em", height: "1em" })
      }
    );
  }
);
jd.displayName = "CloseButton";
var qV = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ws = XV(qV);
function XV(e) {
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
      const a = QV(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = mb(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: JV(i)
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
        const a = zC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!mb(ws.getState(), o).position
  };
}
var w1 = 0;
function QV(e, t = {}) {
  var n, r;
  w1 += 1;
  const o = (n = t.id) != null ? n : w1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ws.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var ZV = (e) => {
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
    pP,
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
        /* @__PURE__ */ w.jsx(dP, { children: u }),
        /* @__PURE__ */ w.jsxs(X.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ w.jsx(fP, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ w.jsx(cP, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ w.jsx(
          jd,
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
function JV(e = {}) {
  const { render: t, toastComponent: n = ZV } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ w.jsx(n, { ...o, ...e });
}
var [eB, rY] = Je({
  name: "ToastOptionsContext",
  strict: !1
}), tB = (e) => {
  const t = y.useSyncExternalStore(
    ws.subscribe,
    ws.getState,
    ws.getState
  ), {
    motionVariants: n,
    component: r = lP,
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
        style: C3(s),
        children: /* @__PURE__ */ w.jsx(ei, { initial: !1, children: l.map((u) => /* @__PURE__ */ w.jsx(
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
  return /* @__PURE__ */ w.jsx(fl, { ...o, children: a });
}, nB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ w.jsxs(S3, { theme: r, ...i, children: [
    /* @__PURE__ */ w.jsx(eB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ w.jsx(tB, { ...o })
  ] });
}, rB = nB(MC), oB = Object.defineProperty, iB = (e, t, n) => t in e ? oB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, je = (e, t, n) => (iB(e, typeof t != "symbol" ? t + "" : t, n), n);
function C1(e) {
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
var aB = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function k1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function P1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var Xh = typeof window < "u" ? y.useLayoutEffect : y.useEffect, Dc = (e) => e, sB = class {
  constructor() {
    je(this, "descendants", /* @__PURE__ */ new Map()), je(this, "register", (e) => {
      if (e != null)
        return aB(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), je(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = C1(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), je(this, "destroy", () => {
      this.descendants.clear();
    }), je(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const n = e.indexOf(t.node);
        t.index = n, t.node.dataset.index = t.index.toString();
      });
    }), je(this, "count", () => this.descendants.size), je(this, "enabledCount", () => this.enabledValues().length), je(this, "values", () => Array.from(this.descendants.values()).sort((t, n) => t.index - n.index)), je(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), je(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), je(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), je(this, "first", () => this.item(0)), je(this, "firstEnabled", () => this.enabledItem(0)), je(this, "last", () => this.item(this.descendants.size - 1)), je(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), je(this, "indexOf", (e) => {
      var t, n;
      return e && (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? n : -1;
    }), je(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), je(this, "next", (e, t = !0) => {
      const n = k1(e, this.count(), t);
      return this.item(n);
    }), je(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = k1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), je(this, "prev", (e, t = !0) => {
      const n = P1(e, this.count() - 1, t);
      return this.item(n);
    }), je(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = P1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), je(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = C1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function lB(e, t) {
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
      lB(n, t);
    });
  };
}
function uB(...e) {
  return y.useMemo(() => at(...e), e);
}
function cB() {
  const e = y.useRef(new sB());
  return Xh(() => () => e.current.destroy()), e.current;
}
var [dB, hP] = Je({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function fB(e) {
  const t = hP(), [n, r] = y.useState(-1), o = y.useRef(null);
  Xh(() => () => {
    o.current && t.unregister(o.current);
  }, []), Xh(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Dc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function mP() {
  return [
    Dc(dB),
    () => Dc(hP()),
    () => cB(),
    (o) => fB(o)
  ];
}
var [pB, Vd] = Je({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [hB, og] = Je({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  mB,
  oY,
  vB,
  gB
] = mP(), vP = oe(
  function(t, n) {
    const { getButtonProps: r } = og(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...Vd().button
    };
    return /* @__PURE__ */ w.jsx(
      X.button,
      {
        ...o,
        className: ae("chakra-accordion__button", t.className),
        __css: a
      }
    );
  }
);
vP.displayName = "AccordionButton";
function yB(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = to(r), a = to(o), [s, l] = y.useState(n), u = t !== void 0, c = u ? t : s, d = to(
    (f) => {
      const v = typeof f == "function" ? f(c) : f;
      a(c, v) && (u || l(v), i(v));
    },
    [u, i, c, a]
  );
  return [c, d];
}
function bB(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: i,
    ...a
  } = e;
  wB(e), CB(e);
  const s = vB(), [l, u] = y.useState(-1);
  y.useEffect(() => () => {
    u(-1);
  }, []);
  const [c, d] = yB({
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
      let v = !1;
      return p !== null && (v = Array.isArray(c) ? c.includes(p) : c === p), { isOpen: v, onChange: (S) => {
        if (p !== null)
          if (o && Array.isArray(c)) {
            const m = S ? c.concat(p) : c.filter((h) => h !== p);
            d(m);
          } else
            S ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [SB, ig] = Je({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function xB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = ig(), s = y.useRef(null), l = y.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  kB(e);
  const { register: f, index: p, descendants: v } = gB({
    disabled: t && !n
  }), { isOpen: g, onChange: S } = i(
    p === -1 ? null : p
  );
  PB({ isOpen: g, isDisabled: t });
  const m = () => {
    S == null || S(!0);
  }, h = () => {
    S == null || S(!1);
  }, b = y.useCallback(() => {
    S == null || S(!g), a(p);
  }, [p, a, g, S]), x = y.useCallback(
    (_) => {
      const I = {
        ArrowDown: () => {
          const D = v.nextEnabled(p);
          D == null || D.node.focus();
        },
        ArrowUp: () => {
          const D = v.prevEnabled(p);
          D == null || D.node.focus();
        },
        Home: () => {
          const D = v.firstEnabled();
          D == null || D.node.focus();
        },
        End: () => {
          const D = v.lastEnabled();
          D == null || D.node.focus();
        }
      }[_.key];
      I && (_.preventDefault(), I(_));
    },
    [v, p]
  ), k = y.useCallback(() => {
    a(p);
  }, [a, p]), P = y.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        type: "button",
        ref: at(f, s, I),
        id: c,
        disabled: !!t,
        "aria-expanded": !!g,
        "aria-controls": d,
        onClick: De(M.onClick, b),
        onFocus: De(M.onFocus, k),
        onKeyDown: De(M.onKeyDown, x)
      };
    },
    [
      c,
      t,
      g,
      b,
      k,
      x,
      d,
      f
    ]
  ), T = y.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        ref: I,
        role: "region",
        id: d,
        "aria-labelledby": c,
        hidden: !g
      };
    },
    [c, g, d]
  );
  return {
    isOpen: g,
    isDisabled: t,
    isFocusable: n,
    onOpen: m,
    onClose: h,
    getButtonProps: P,
    getPanelProps: T,
    htmlProps: o
  };
}
function wB(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  pl({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function CB(e) {
  pl({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function kB(e) {
  pl({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function PB(e) {
  pl({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function gP(e) {
  const { isOpen: t, isDisabled: n } = og(), { reduceMotion: r } = ig(), o = ae("chakra-accordion__icon", e.className), i = Vd(), a = {
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
gP.displayName = "AccordionIcon";
var yP = oe(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = xB(t), l = {
      ...Vd().container,
      overflowAnchor: "none"
    }, u = y.useMemo(() => a, [a]);
    return /* @__PURE__ */ w.jsx(hB, { value: u, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ref: n,
        ...i,
        className: ae("chakra-accordion__item", o),
        __css: l,
        children: typeof r == "function" ? r({
          isExpanded: !!a.isOpen,
          isDisabled: !!a.isDisabled
        }) : r
      }
    ) });
  }
);
yP.displayName = "AccordionItem";
var Ao = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Ba = {
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
function Qh(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Ba.slideRight;
    case "left":
      return Ba.slideLeft;
    case "bottom":
      return Ba.slideDown;
    case "top":
      return Ba.slideUp;
    default:
      return Ba.slideRight;
  }
}
var jo = {
  enter: {
    duration: 0.2,
    ease: Ao.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Ao.easeIn
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
}, TB = (e) => e != null && parseInt(e.toString(), 10) > 0, T1 = {
  exit: {
    height: { duration: 0.2, ease: Ao.ease },
    opacity: { duration: 0.3, ease: Ao.ease }
  },
  enter: {
    height: { duration: 0.3, ease: Ao.ease },
    opacity: { duration: 0.4, ease: Ao.ease }
  }
}, _B = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: TB(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(T1.exit, o)
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
      transition: (i = n == null ? void 0 : n.enter) != null ? i : Dn.enter(T1.enter, o)
    };
  }
}, bP = y.forwardRef(
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
    } = e, [f, p] = y.useState(!1);
    y.useEffect(() => {
      const h = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(h);
    }, []), pl({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const v = parseFloat(i.toString()) > 0, g = {
      startingHeight: i,
      endingHeight: a,
      animateOpacity: o,
      transition: f ? u : { enter: { duration: 0 } },
      transitionEnd: {
        enter: c == null ? void 0 : c.enter,
        exit: r ? c == null ? void 0 : c.exit : {
          ...c == null ? void 0 : c.exit,
          display: v ? "block" : "none"
        }
      }
    }, S = r ? n : !0, m = n || r ? "enter" : "exit";
    return /* @__PURE__ */ w.jsx(ei, { initial: !1, custom: g, children: S && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: t,
        ...d,
        className: ae("chakra-collapse", l),
        style: {
          overflow: "hidden",
          display: "block",
          ...s
        },
        custom: g,
        variants: _B,
        initial: r ? "exit" : !1,
        animate: m,
        exit: "exit"
      }
    ) });
  }
);
bP.displayName = "Collapse";
var EB = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(jo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Dn.exit(jo.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, SP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: EB
}, OB = y.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ w.jsx(ei, { custom: f, children: d && /* @__PURE__ */ w.jsx(
    or.div,
    {
      ref: n,
      className: ae("chakra-fade", i),
      custom: f,
      ...SP,
      animate: c,
      ...u
    }
  ) });
});
OB.displayName = "Fade";
var MB = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(jo.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : Dn.enter(jo.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, xP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: MB
}, IB = y.forwardRef(
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
    } = t, f = r ? o && r : !0, p = o || r ? "enter" : "exit", v = { initialScale: a, reverse: i, transition: l, transitionEnd: u, delay: c };
    return /* @__PURE__ */ w.jsx(ei, { custom: v, children: f && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: n,
        className: ae("chakra-offset-slide", s),
        ...xP,
        animate: p,
        custom: v,
        ...d
      }
    ) });
  }
);
IB.displayName = "ScaleFade";
var RB = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(jo.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(jo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Dn.exit(jo.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, ns = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: RB
}, $B = y.forwardRef(
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
    } = t, p = r ? o && r : !0, v = o || r ? "enter" : "exit", g = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ w.jsx(ei, { custom: g, children: p && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: n,
        className: ae("chakra-offset-slide", a),
        custom: g,
        ...ns,
        animate: v,
        ...f
      }
    ) });
  }
);
$B.displayName = "SlideFade";
var _1 = {
  exit: {
    duration: 0.15,
    ease: Ao.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, AB = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: i } = Qh({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Dn.exit(_1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = Qh({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Dn.enter(_1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, wP = y.forwardRef(function(t, n) {
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
  } = t, p = Qh({ direction: r }), v = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = i ? a && i : !0, S = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ w.jsx(ei, { custom: m, children: g && /* @__PURE__ */ w.jsx(
    or.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: ae("chakra-slide", s),
      animate: S,
      exit: "exit",
      custom: m,
      variants: AB,
      style: v,
      ...d
    }
  ) });
});
wP.displayName = "Slide";
var CP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = ig(), { getPanelProps: s, isOpen: l } = og(), u = s(i, n), c = ae("chakra-accordion__panel", r), d = Vd();
    a || delete u.hidden;
    const f = /* @__PURE__ */ w.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ w.jsx(bP, { in: l, ...o, children: f });
  }
);
CP.displayName = "AccordionPanel";
var kP = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = Ct("Accordion", r), a = Cn(r), { htmlProps: s, descendants: l, ...u } = bB(a), c = y.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ w.jsx(mB, { value: l, children: /* @__PURE__ */ w.jsx(SB, { value: c, children: /* @__PURE__ */ w.jsx(pB, { value: i, children: /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: o,
      ...s,
      className: ae("chakra-accordion", r.className),
      __css: i.root,
      children: t
    }
  ) }) }) });
});
kP.displayName = "Accordion";
function DB(e) {
  return y.Children.toArray(e).filter(
    (t) => y.isValidElement(t)
  );
}
var [iY, FB] = Je({
  strict: !1,
  name: "ButtonGroupContext"
});
function LB(e) {
  const [t, n] = y.useState(!e);
  return { ref: y.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Zh(e) {
  const { children: t, className: n, ...r } = e, o = y.isValidElement(t) ? y.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = ae("chakra-button__icon", n);
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
Zh.displayName = "ButtonIcon";
function Jh(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ w.jsx(Nd, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ae("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = y.useMemo(
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
Jh.displayName = "ButtonSpinner";
var Fn = oe((e, t) => {
  const n = FB(), r = Qo("Button", { ...n, ...e }), {
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
    spinnerPlacement: v = "start",
    className: g,
    as: S,
    ...m
  } = Cn(e), h = y.useMemo(() => {
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
  }, [r, n]), { ref: b, type: x } = LB(S), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ w.jsxs(
    X.button,
    {
      ref: uB(t, b),
      as: S,
      type: f ?? x,
      "data-active": dn(a),
      "data-loading": dn(i),
      __css: h,
      className: ae("chakra-button", g),
      ...m,
      disabled: o || i,
      children: [
        i && v === "start" && /* @__PURE__ */ w.jsx(
          Jh,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ w.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ w.jsx(E1, { ...k }) }) : /* @__PURE__ */ w.jsx(E1, { ...k }),
        i && v === "end" && /* @__PURE__ */ w.jsx(
          Jh,
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
Fn.displayName = "Button";
function E1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    t && /* @__PURE__ */ w.jsx(Zh, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ w.jsx(Zh, { marginStart: o, children: n })
  ] });
}
var Js = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = y.isValidElement(s) ? y.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ w.jsx(
      Fn,
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
Js.displayName = "IconButton";
var [zB, NB] = Je({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [jB, PP] = Je({
  strict: !1,
  name: "FormControlContext"
});
function VB(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = y.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = y.useState(!1), [v, g] = y.useState(!1), [S, m] = y.useState(!1), h = y.useCallback(
    (T = {}, _ = null) => ({
      id: d,
      ...T,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(_, (M) => {
        M && g(!0);
      })
    }),
    [d]
  ), b = y.useCallback(
    (T = {}, _ = null) => ({
      ...T,
      ref: _,
      "data-focus": dn(S),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i),
      id: T.id !== void 0 ? T.id : u,
      htmlFor: T.htmlFor !== void 0 ? T.htmlFor : l
    }),
    [l, o, S, r, i, u]
  ), x = y.useCallback(
    (T = {}, _ = null) => ({
      id: c,
      ...T,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(_, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = y.useCallback(
    (T = {}, _ = null) => ({
      ...T,
      ...a,
      ref: _,
      role: "group",
      "data-focus": dn(S),
      "data-disabled": dn(o),
      "data-invalid": dn(r),
      "data-readonly": dn(i)
    }),
    [a, o, S, r, i]
  ), P = y.useCallback(
    (T = {}, _ = null) => ({
      ...T,
      ref: _,
      role: "presentation",
      "aria-hidden": !0,
      children: T.children || "*"
    }),
    []
  );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!S,
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: v,
    setHasHelpText: g,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: x,
    getRootProps: k,
    getLabelProps: b,
    getRequiredIndicatorProps: P
  };
}
var BB = oe(
  function(t, n) {
    const r = Ct("Form", t), o = Cn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = VB(o), l = ae("chakra-form-control", t.className);
    return /* @__PURE__ */ w.jsx(jB, { value: s, children: /* @__PURE__ */ w.jsx(zB, { value: r, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
BB.displayName = "FormControl";
var WB = oe(
  function(t, n) {
    const r = PP(), o = NB(), i = ae("chakra-form__helper-text", t.className);
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
WB.displayName = "FormHelperText";
function TP(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = HB(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Ff(n),
    "aria-required": Ff(o),
    "aria-readonly": Ff(r)
  };
}
function HB(e) {
  var t, n, r;
  const o = PP(), {
    id: i,
    disabled: a,
    readOnly: s,
    required: l,
    isRequired: u,
    isInvalid: c,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: v,
    ...g
  } = e, S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && S.push(o.feedbackId), o != null && o.hasHelpText && S.push(o.helpTextId), {
    ...g,
    "aria-describedby": S.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: De(o == null ? void 0 : o.onFocus, p),
    onBlur: De(o == null ? void 0 : o.onBlur, v)
  };
}
function ag(e, t, n, r) {
  const o = to(n);
  return y.useEffect(() => {
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
function UB(e) {
  return "current" in e;
}
var _P = () => typeof window < "u";
function GB() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var KB = (e) => _P() && e.test(navigator.vendor), YB = (e) => _P() && e.test(GB()), qB = () => YB(/mac|iphone|ipad|ipod/i), XB = () => qB() && KB(/apple/i);
function QB(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  ag(o, "pointerdown", (i) => {
    if (!XB() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = UB(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function EP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var OP = { exports: {} }, ZB = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", JB = ZB, e6 = JB;
function MP() {
}
function IP() {
}
IP.resetWarningCache = MP;
var t6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== e6) {
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
    checkPropTypes: IP,
    resetWarningCache: MP
  };
  return n.PropTypes = n, n;
};
OP.exports = t6();
var n6 = OP.exports;
const xo = /* @__PURE__ */ il(n6);
var em = "data-focus-lock", RP = "data-focus-lock-disabled", r6 = "data-no-focus-lock", o6 = "data-autofocus-inside", i6 = "data-no-autofocus";
function a6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function s6(e, t) {
  var n = y.useState(function() {
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
function $P(e, t) {
  return s6(t || null, function(n) {
    return e.forEach(function(r) {
      return a6(r, n);
    });
  });
}
var hp = {
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
function AP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function l6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function DP(e) {
  return e;
}
function FP(e, t) {
  t === void 0 && (t = DP);
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
function sg(e, t) {
  return t === void 0 && (t = DP), FP(e, t);
}
function LP(e) {
  e === void 0 && (e = {});
  var t = FP(null);
  return t.options = qn({ async: !0, ssr: !1 }, e), t;
}
var zP = function(e) {
  var t = e.sideCar, n = AP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return y.createElement(r, qn({}, n));
};
zP.isSideCarExport = !0;
function u6(e, t) {
  return e.useMedium(t), zP;
}
var NP = sg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), jP = sg(), c6 = sg(), d6 = LP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), f6 = [], lg = /* @__PURE__ */ y.forwardRef(function(t, n) {
  var r, o = y.useState(), i = o[0], a = o[1], s = y.useRef(), l = y.useRef(!1), u = y.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, v = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var S = t.group, m = t.className, h = t.whiteList, b = t.hasPositiveIndices, x = t.shards, k = x === void 0 ? f6 : x, P = t.as, T = P === void 0 ? "div" : P, _ = t.lockProps, M = _ === void 0 ? {} : _, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = y.useState({}), K = W[0], $ = y.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && H && H(s.current), l.current = !0;
  }, [H]), A = y.useCallback(function() {
    l.current = !1, L && L(s.current);
  }, [L]);
  y.useEffect(function() {
    d || (u.current = null);
  }, []);
  var z = y.useCallback(function(se) {
    var me = u.current;
    if (me && me.focus) {
      var Ce = typeof D == "function" ? D(me) : D;
      if (Ce) {
        var et = typeof Ce == "object" ? Ce : void 0;
        u.current = null, se ? Promise.resolve().then(function() {
          return me.focus(et);
        }) : me.focus(et);
      }
    }
  }, [D]), U = y.useCallback(function(se) {
    l.current && NP.useMedium(se);
  }, []), V = jP.useMedium, Y = y.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), N = q((r = {}, r[RP] = d && "disabled", r[em] = S, r), M), te = f !== !0, le = te && f !== "tail", ie = $P([n, Y]);
  return /* @__PURE__ */ y.createElement(y.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ y.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: hp
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ y.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: hp
    }) : null
  ], !d && /* @__PURE__ */ y.createElement(I, {
    id: K,
    sideCar: d6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: v,
    autoFocus: g,
    whiteList: h,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: z,
    focusOptions: G
  }), /* @__PURE__ */ y.createElement(T, q({
    ref: ie
  }, N, {
    className: m,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ y.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: hp
  }));
});
lg.propTypes = {};
lg.defaultProps = {
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
const VP = lg;
function Fc(e, t) {
  return Fc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Fc(e, t);
}
function p6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Fc(e, t);
}
function Ko(e) {
  "@babel/helpers - typeof";
  return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ko(e);
}
function h6(e, t) {
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
function BP(e) {
  var t = h6(e, "string");
  return Ko(t) === "symbol" ? t : String(t);
}
function Di(e, t, n) {
  return t = BP(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function m6(e, t) {
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
      p6(c, u);
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
    }(y.PureComponent);
    return Di(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var ir = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Lc = function(e) {
  return Array.isArray(e) ? e : [e];
}, WP = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, v6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, HP = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, UP = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, g6 = function(e, t) {
  return !e || UP(e) || !v6(e) && t(HP(e));
}, GP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = g6(t, GP.bind(void 0, e));
  return e.set(t, r), r;
}, y6 = function(e, t) {
  return e && !UP(e) ? x6(e) ? t(HP(e)) : !1 : !0;
}, KP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = y6(t, KP.bind(void 0, e));
  return e.set(t, r), r;
}, YP = function(e) {
  return e.dataset;
}, b6 = function(e) {
  return e.tagName === "BUTTON";
}, qP = function(e) {
  return e.tagName === "INPUT";
}, XP = function(e) {
  return qP(e) && e.type === "radio";
}, S6 = function(e) {
  return !((qP(e) || b6(e)) && (e.type === "hidden" || e.disabled));
}, x6 = function(e) {
  var t = e.getAttribute(i6);
  return ![!0, "true", ""].includes(t);
}, ug = function(e) {
  var t;
  return !!(e && (!((t = YP(e)) === null || t === void 0) && t.focusGuard));
}, zc = function(e) {
  return !ug(e);
}, w6 = function(e) {
  return !!e;
}, C6 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, QP = function(e, t, n) {
  return ir(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(C6);
}, k6 = [
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
], cg = k6.join(","), P6 = "".concat(cg, ", [data-focus-guard]"), ZP = function(e, t) {
  return ir((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? P6 : cg) ? [r] : [], ZP(r));
  }, []);
}, T6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Bd([e.contentDocument.body], t) : [e];
}, Bd = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = ZP(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return T6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? ir(r.parentNode.querySelectorAll(cg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, _6 = function(e) {
  var t = e.querySelectorAll("[".concat(o6, "]"));
  return ir(t).map(function(n) {
    return Bd([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, dg = function(e, t) {
  return ir(e).filter(function(n) {
    return GP(t, n);
  }).filter(function(n) {
    return S6(n);
  });
}, O1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ir(e).filter(function(n) {
    return KP(t, n);
  });
}, tm = function(e, t, n) {
  return QP(dg(Bd(e, n), t), !0, n);
}, M1 = function(e, t) {
  return QP(dg(Bd(e), t), !1);
}, E6 = function(e, t) {
  return dg(_6(e), t);
}, qi = function(e, t) {
  return e.shadowRoot ? qi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ir(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? qi(o, t) : !1;
    }
    return qi(n, t);
  });
}, O6 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, JP = function(e) {
  return e.parentNode ? JP(e.parentNode) : e;
}, fg = function(e) {
  var t = Lc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(em);
    return n.push.apply(n, o ? O6(ir(JP(r).querySelectorAll("[".concat(em, '="').concat(o, '"]:not([').concat(RP, '="disabled"])')))) : [r]), n;
  }, []);
}, M6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, el = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? el(t.shadowRoot) : t instanceof HTMLIFrameElement && M6(function() {
      return t.contentWindow.document;
    }) ? el(t.contentWindow.document) : t;
  }
}, I6 = function(e, t) {
  return e === t;
}, R6 = function(e, t) {
  return !!ir(e.querySelectorAll("iframe")).some(function(n) {
    return I6(n, t);
  });
}, e2 = function(e, t) {
  return t === void 0 && (t = el(WP(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : fg(e).some(function(n) {
    return qi(n, t) || R6(n, t);
  });
}, $6 = function(e) {
  e === void 0 && (e = document);
  var t = el(e);
  return t ? ir(e.querySelectorAll("[".concat(r6, "]"))).some(function(n) {
    return qi(n, t);
  }) : !1;
}, A6 = function(e, t) {
  return t.filter(XP).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, pg = function(e, t) {
  return XP(e) && e.name ? A6(e, t) : e;
}, D6 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(pg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, I1 = function(e) {
  return e[0] && e.length > 1 ? pg(e[0], e) : e[0];
}, R1 = function(e, t) {
  return e.length > 1 ? e.indexOf(pg(e[t], e)) : t;
}, t2 = "NEW_FOCUS", F6 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = ug(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), v = D6(t), g = n !== void 0 ? v.indexOf(n) : -1, S = g - (r ? v.indexOf(r) : l), m = R1(e, 0), h = R1(e, o - 1);
    if (l === -1 || c === -1)
      return t2;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return h;
    if (l >= p && s && Math.abs(d) > 1)
      return m;
    if (d && Math.abs(S) > 1)
      return c;
    if (l <= f)
      return h;
    if (l > p)
      return m;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, L6 = function(e) {
  return function(t) {
    var n, r = (n = YP(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, z6 = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = O1(r.filter(L6(n)));
  return o && o.length ? I1(o) : I1(O1(t));
}, nm = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && nm(e.parentNode.host || e.parentNode, t), t;
}, mp = function(e, t) {
  for (var n = nm(e), r = nm(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, n2 = function(e, t, n) {
  var r = Lc(e), o = Lc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = mp(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = mp(i, l);
      u && (!a || qi(u, a) ? a = u : a = mp(u, a));
    });
  }), a;
}, N6 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(E6(r, t));
  }, []);
}, j6 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(w6);
}, V6 = function(e, t) {
  var n = el(Lc(e).length > 0 ? document : WP(e).ownerDocument), r = fg(e).filter(zc), o = n2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = M1(r, i), s = tm(r, i).filter(function(p) {
    var v = p.node;
    return zc(v);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = M1([o], i).map(function(p) {
      var v = p.node;
      return v;
    }), u = j6(l, s), c = u.map(function(p) {
      var v = p.node;
      return v;
    }), d = F6(c, l, n, t);
    if (d === t2) {
      var f = z6(a, c, N6(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, B6 = function(e) {
  var t = fg(e).filter(zc), n = n2(e, e, t), r = /* @__PURE__ */ new Map(), o = tm([n], r, !0), i = tm(t, r).filter(function(a) {
    var s = a.node;
    return zc(s);
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
      guard: ug(s)
    };
  });
}, W6 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, vp = 0, gp = !1, r2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = V6(e, t);
  if (!gp && r) {
    if (vp > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), gp = !0, setTimeout(function() {
        gp = !1;
      }, 1);
      return;
    }
    vp++, W6(r.node, n.focusOptions), vp--;
  }
};
function hg(e) {
  setTimeout(e, 1);
}
var H6 = function() {
  return document && document.activeElement === document.body;
}, U6 = function() {
  return H6() || $6();
}, Xi = null, Fi = null, Qi = null, tl = !1, G6 = function() {
  return !0;
}, K6 = function(t) {
  return (Xi.whiteList || G6)(t);
}, Y6 = function(t, n) {
  Qi = {
    observerNode: t,
    portaledElement: n
  };
}, q6 = function(t) {
  return Qi && Qi.portaledElement === t;
};
function $1(e, t, n, r) {
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
var X6 = function(t) {
  return t && "current" in t ? t.current : t;
}, Q6 = function(t) {
  return t ? !!tl : tl === "meanwhile";
}, Z6 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, J6 = function(t, n) {
  return n.some(function(r) {
    return Z6(t, r, r);
  });
}, Nc = function() {
  var t = !1;
  if (Xi) {
    var n = Xi, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Qi && Qi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(X6).filter(Boolean));
      if ((!c || K6(c)) && (o || Q6(s) || !U6() || !Fi && i) && (u && !// active element is "inside" working area
      (e2(d) || // check for shadow-dom contained elements
      c && J6(c, d) || q6(c)) && (document && !Fi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = r2(d, Fi, {
        focusOptions: l
      }), Qi = {})), tl = !1, Fi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = B6(d), v = p.map(function(g) {
          var S = g.node;
          return S;
        }).indexOf(f);
        v > -1 && (p.filter(function(g) {
          var S = g.guard, m = g.node;
          return S && m.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var S = g.node;
          return S.removeAttribute("tabIndex");
        }), $1(v, p.length, 1, p), $1(v, -1, -1, p));
      }
    }
  }
  return t;
}, o2 = function(t) {
  Nc() && t && (t.stopPropagation(), t.preventDefault());
}, mg = function() {
  return hg(Nc);
}, e9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || Y6(r, n);
}, t9 = function() {
  return null;
}, i2 = function() {
  tl = "just", hg(function() {
    tl = "meanwhile";
  });
}, n9 = function() {
  document.addEventListener("focusin", o2), document.addEventListener("focusout", mg), window.addEventListener("blur", i2);
}, r9 = function() {
  document.removeEventListener("focusin", o2), document.removeEventListener("focusout", mg), window.removeEventListener("blur", i2);
};
function o9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function i9(e) {
  var t = e.slice(-1)[0];
  t && !Xi && n9();
  var n = Xi, r = n && t && t.id === n.id;
  Xi = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Fi = null, (!r || n.observed !== t.observed) && t.onActivation(), Nc(), hg(Nc)) : (r9(), Fi = null);
}
NP.assignSyncMedium(e9);
jP.assignMedium(mg);
c6.assignMedium(function(e) {
  return e({
    moveFocusInside: r2,
    focusInside: e2
  });
});
const a9 = m6(o9, i9)(t9);
var a2 = /* @__PURE__ */ y.forwardRef(function(t, n) {
  return /* @__PURE__ */ y.createElement(VP, q({
    sideCar: a9,
    ref: n
  }, t));
}), s2 = VP.propTypes || {};
s2.sideCar;
EP(s2, ["sideCar"]);
a2.propTypes = {};
const A1 = a2;
function l2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function u2(e) {
  var t;
  if (!l2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function s9(e) {
  var t, n;
  return (n = (t = c2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function c2(e) {
  return l2(e) ? e.ownerDocument : document;
}
function l9(e) {
  return c2(e).activeElement;
}
var d2 = (e) => e.hasAttribute("tabindex"), u9 = (e) => d2(e) && e.tabIndex === -1;
function c9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function f2(e) {
  return e.parentElement && f2(e.parentElement) ? !0 : e.hidden;
}
function d9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function p2(e) {
  if (!u2(e) || f2(e) || c9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : d9(e) ? !0 : d2(e);
}
function f9(e) {
  return e ? u2(e) && p2(e) && !u9(e) : !1;
}
var p9 = [
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
], h9 = p9.join(), m9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function h2(e) {
  const t = Array.from(
    e.querySelectorAll(h9)
  );
  return t.unshift(e), t.filter((n) => p2(n) && m9(n));
}
var D1, v9 = (D1 = A1.default) != null ? D1 : A1, m2 = (e) => {
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
  } = e, c = y.useCallback(() => {
    t != null && t.current ? t.current.focus() : r != null && r.current && h2(r.current).length === 0 && requestAnimationFrame(() => {
      var v;
      (v = r.current) == null || v.focus();
    });
  }, [t, r]), d = y.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ w.jsx(
    v9,
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
m2.displayName = "FocusLock";
var g9 = BL ? y.useLayoutEffect : y.useEffect;
function F1(e, t = []) {
  const n = y.useRef(e);
  return g9(() => {
    n.current = e;
  }), y.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function y9(e, t) {
  const n = y.useId();
  return y.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function b9(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function v2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = F1(n), a = F1(t), [s, l] = y.useState(e.defaultIsOpen || !1), [u, c] = b9(r, s), d = y9(o, "disclosure"), f = y.useCallback(() => {
    u || l(!1), a == null || a();
  }, [u, a]), p = y.useCallback(() => {
    u || l(!0), i == null || i();
  }, [u, i]), v = y.useCallback(() => {
    (c ? f : p)();
  }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: v,
    isControlled: u,
    getButtonProps: (g = {}) => ({
      ...g,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: KL(g.onClick, v)
    }),
    getDisclosureProps: (g = {}) => ({
      ...g,
      hidden: !c,
      id: d
    })
  };
}
var Wd = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = Ct("Input", o), a = Cn(o), s = TP(a), l = ae("chakra-input", t.className);
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
Wd.displayName = "Input";
Wd.id = "Input";
var g2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function S9(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : Lt(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function x9(e, t = g2) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var Li = oe(function(t, n) {
  const r = Qo("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Cn(t), u = o3({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ w.jsx(
    X.p,
    {
      ref: n,
      className: ae("chakra-text", t.className),
      ...u,
      ...l,
      __css: r
    }
  );
});
Li.displayName = "Text";
var y2 = (e) => /* @__PURE__ */ w.jsx(
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
y2.displayName = "StackItem";
function w9(e) {
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
    "&": S9(
      n,
      (o) => r[o]
    )
  };
}
var b2 = oe((e, t) => {
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
  } = e, p = n ? "row" : r ?? "column", v = y.useMemo(
    () => w9({ spacing: a, direction: p }),
    [a, p]
  ), g = !!u, S = !d && !g, m = y.useMemo(() => {
    const b = DB(l);
    return S ? b : b.map((x, k) => {
      const P = typeof x.key < "u" ? x.key : k, T = k + 1 === b.length, M = d ? /* @__PURE__ */ w.jsx(y2, { children: x }, P) : x;
      if (!g)
        return M;
      const I = y.cloneElement(
        u,
        {
          __css: v
        }
      ), D = T ? null : I;
      return /* @__PURE__ */ w.jsxs(y.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    v,
    g,
    S,
    d,
    l
  ]), h = ae("chakra-stack", c);
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: g ? void 0 : a,
      className: h,
      ...f,
      children: m
    }
  );
});
b2.displayName = "Stack";
var Gt = oe((e, t) => /* @__PURE__ */ w.jsx(b2, { align: "center", ...e, direction: "row", ref: t }));
Gt.displayName = "HStack";
var Ae = X("div");
Ae.displayName = "Box";
var S2 = oe(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ w.jsx(
    Ae,
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
S2.displayName = "Square";
var C9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ w.jsx(S2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
C9.displayName = "Circle";
var x2 = oe(function(t, n) {
  const {
    borderLeftWidth: r,
    borderBottomWidth: o,
    borderTopWidth: i,
    borderRightWidth: a,
    borderWidth: s,
    borderStyle: l,
    borderColor: u,
    ...c
  } = Qo("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...v
  } = Cn(t), g = {
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
      ...v,
      __css: {
        ...c,
        border: "0",
        borderColor: u,
        borderStyle: l,
        ...g[f],
        ...p
      },
      className: ae("chakra-divider", d)
    }
  );
});
x2.displayName = "Divider";
function k9(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = b3(), i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(r) ? r : [r];
  a = a.filter((u) => u != null);
  const [s, l] = y.useState(() => i.map((u, c) => ({
    media: u,
    matches: n ? !!a[c] : o().matchMedia(u).matches
  })));
  return y.useEffect(() => {
    const u = o();
    l(
      i.map((f) => ({
        media: f,
        matches: u.matchMedia(f).matches
      }))
    );
    const c = i.map((f) => u.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((v) => v.media === f.media ? { ...v, matches: f.matches } : v));
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
function P9(e, t, n = g2) {
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
function T9(e) {
  var t, n;
  const r = Lt(e) ? e : { fallback: e ?? "base" }, i = po().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = k9(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function _9(e, t) {
  var n;
  const r = Lt(t) ? t : { fallback: t ?? "base" }, o = T9(r), i = po();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(x9(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return P9(s, o, a);
}
function E9(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function O9(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e, [r, o] = y.useState([]), i = y.useRef(), a = () => {
    i.current && (clearTimeout(i.current), i.current = null);
  }, s = () => {
    a(), i.current = setTimeout(() => {
      o([]), i.current = null;
    }, t);
  };
  y.useEffect(() => a, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (E9(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function M9(e, t, n, r) {
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
function I9() {
  const e = y.useRef(/* @__PURE__ */ new Map()), t = e.current, n = y.useCallback((o, i, a, s) => {
    e.current.set(a, { type: i, el: o, options: s }), o.addEventListener(i, a, s);
  }, []), r = y.useCallback(
    (o, i, a, s) => {
      o.removeEventListener(i, a, s), e.current.delete(a);
    },
    []
  );
  return y.useEffect(
    () => () => {
      t.forEach((o, i) => {
        r(o.el, o.type, i, o.options);
      });
    },
    [r, t]
  ), { add: n, remove: r };
}
function yp(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function R9(e = {}) {
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
    ...v
  } = e, [g, S] = y.useState(!0), [m, h] = y.useState(!1), b = I9(), x = ($) => {
    $ && $.tagName !== "BUTTON" && S(!1);
  }, k = g ? d : d || 0, P = n && !r, T = y.useCallback(
    ($) => {
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      $.currentTarget.focus(), l == null || l($);
    },
    [n, l]
  ), _ = y.useCallback(
    ($) => {
      m && yp($) && ($.preventDefault(), $.stopPropagation(), h(!1), b.remove(document, "keyup", _, !1));
    },
    [m, b]
  ), M = y.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !yp($.nativeEvent) || g)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), h(!0)), A && ($.preventDefault(), $.currentTarget.click()), b.add(document, "keyup", _, !1);
    },
    [
      n,
      g,
      u,
      o,
      i,
      b,
      _
    ]
  ), I = y.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !yp($.nativeEvent) || g)
        return;
      i && $.key === " " && ($.preventDefault(), h(!1), $.currentTarget.click());
    },
    [i, g, n, c]
  ), D = y.useCallback(
    ($) => {
      $.button === 0 && (h(!1), b.remove(document, "mouseup", D, !1));
    },
    [b]
  ), G = y.useCallback(
    ($) => {
      if ($.button !== 0)
        return;
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      g || h(!0), $.currentTarget.focus({ preventScroll: !0 }), b.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, g, a, b, D]
  ), H = y.useCallback(
    ($) => {
      $.button === 0 && (g || h(!1), s == null || s($));
    },
    [s, g]
  ), L = y.useCallback(
    ($) => {
      if (n) {
        $.preventDefault();
        return;
      }
      f == null || f($);
    },
    [n, f]
  ), W = y.useCallback(
    ($) => {
      m && ($.preventDefault(), h(!1)), p == null || p($);
    },
    [m, p]
  ), K = at(t, x);
  return g ? {
    ...v,
    ref: K,
    type: "button",
    "aria-disabled": P ? void 0 : n,
    disabled: P,
    onClick: T,
    onMouseDown: a,
    onMouseUp: s,
    onKeyUp: c,
    onKeyDown: u,
    onMouseOver: f,
    onMouseLeave: p
  } : {
    ...v,
    ref: K,
    role: "button",
    "data-active": dn(m),
    "aria-disabled": n ? "true" : void 0,
    tabIndex: P ? void 0 : k,
    onClick: T,
    onMouseDown: G,
    onMouseUp: H,
    onKeyUp: I,
    onKeyDown: M,
    onMouseOver: L,
    onMouseLeave: W
  };
}
function $9(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = l9(t);
  return !n || t.contains(n) ? !1 : !!f9(n);
}
function w2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  ca(() => {
    if (!i || $9(e))
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
var A9 = {
  preventScroll: !0,
  shouldFocus: !1
};
function D9(e, t = A9) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = F9(e) ? e.current : e, s = o && i, l = y.useRef(s), u = y.useRef(i);
  sa(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = y.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (n != null && n.current)
        requestAnimationFrame(() => {
          var d;
          (d = n.current) == null || d.focus({ preventScroll: r });
        });
      else {
        const d = h2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  ca(() => {
    c();
  }, [c]), ag(a, "transitionend", c);
}
function F9(e) {
  return "current" in e;
}
var si = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), xt = {
  arrowShadowColor: si("--popper-arrow-shadow-color"),
  arrowSize: si("--popper-arrow-size", "8px"),
  arrowSizeHalf: si("--popper-arrow-size-half"),
  arrowBg: si("--popper-arrow-bg"),
  transformOrigin: si("--popper-transform-origin"),
  arrowOffset: si("--popper-arrow-offset")
};
function L9(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var z9 = {
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
}, N9 = (e) => z9[e], L1 = {
  scroll: !0,
  resize: !0
};
function j9(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...L1, ...e }
  } : t = {
    enabled: e,
    options: L1
  }, t;
}
var V9 = {
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
}, B9 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    z1(e);
  },
  effect: ({ state: e }) => () => {
    z1(e);
  }
}, z1 = (e) => {
  e.elements.popper.style.setProperty(
    xt.transformOrigin.var,
    N9(e.placement)
  );
}, W9 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    H9(e);
  }
}, H9 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = U9(e.placement);
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
}, U9 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: xt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: xt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: xt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: xt.arrowOffset.varRef };
}, G9 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    N1(e);
  },
  effect: ({ state: e }) => () => {
    N1(e);
  }
}, N1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = L9(e.placement);
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
}, K9 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, Y9 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function q9(e, t = "ltr") {
  var n, r;
  const o = ((n = K9[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = Y9[e]) != null ? r : o;
}
var zt = "top", Sn = "bottom", xn = "right", Nt = "left", vg = "auto", Sl = [zt, Sn, xn, Nt], pa = "start", nl = "end", X9 = "clippingParents", C2 = "viewport", Wa = "popper", Q9 = "reference", j1 = /* @__PURE__ */ Sl.reduce(function(e, t) {
  return e.concat([t + "-" + pa, t + "-" + nl]);
}, []), k2 = /* @__PURE__ */ [].concat(Sl, [vg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + pa, t + "-" + nl]);
}, []), Z9 = "beforeRead", J9 = "read", e8 = "afterRead", t8 = "beforeMain", n8 = "main", r8 = "afterMain", o8 = "beforeWrite", i8 = "write", a8 = "afterWrite", s8 = [Z9, J9, e8, t8, n8, r8, o8, i8, a8];
function rr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yo(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function gn(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function l8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !gn(i) || !rr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function u8(e) {
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
      !gn(o) || !rr(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const c8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: l8,
  effect: u8,
  requires: ["computeStyles"]
};
function nr(e) {
  return e.split("-")[0];
}
var Vo = Math.max, jc = Math.min, ha = Math.round;
function rm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function P2() {
  return !/^((?!chrome|android).)*safari/i.test(rm());
}
function ma(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && gn(e) && (o = e.offsetWidth > 0 && ha(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ha(r.height) / e.offsetHeight || 1);
  var a = Yo(e) ? Jt(e) : window, s = a.visualViewport, l = !P2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
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
function yg(e) {
  var t = ma(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function T2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && gg(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function _r(e) {
  return Jt(e).getComputedStyle(e);
}
function d8(e) {
  return ["table", "td", "th"].indexOf(rr(e)) >= 0;
}
function mo(e) {
  return ((Yo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Hd(e) {
  return rr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (gg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    mo(e)
  );
}
function V1(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  _r(e).position === "fixed" ? null : e.offsetParent;
}
function f8(e) {
  var t = /firefox/i.test(rm()), n = /Trident/i.test(rm());
  if (n && gn(e)) {
    var r = _r(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Hd(e);
  for (gg(o) && (o = o.host); gn(o) && ["html", "body"].indexOf(rr(o)) < 0; ) {
    var i = _r(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function xl(e) {
  for (var t = Jt(e), n = V1(e); n && d8(n) && _r(n).position === "static"; )
    n = V1(n);
  return n && (rr(n) === "html" || rr(n) === "body" && _r(n).position === "static") ? t : n || f8(e) || t;
}
function bg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cs(e, t, n) {
  return Vo(e, jc(t, n));
}
function p8(e, t, n) {
  var r = Cs(e, t, n);
  return r > n ? n : r;
}
function _2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function E2(e) {
  return Object.assign({}, _2(), e);
}
function O2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var h8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, E2(typeof t != "number" ? t : O2(t, Sl));
};
function m8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = nr(n.placement), l = bg(s), u = [Nt, xn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = h8(o.padding, n), f = yg(i), p = l === "y" ? zt : Nt, v = l === "y" ? Sn : xn, g = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], S = a[l] - n.rects.reference[l], m = xl(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = g / 2 - S / 2, x = d[p], k = h - f[c] - d[v], P = h / 2 - f[c] / 2 + b, T = Cs(x, P, k), _ = l;
    n.modifiersData[r] = (t = {}, t[_] = T, t.centerOffset = T - P, t);
  }
}
function v8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || T2(t.elements.popper, o) && (t.elements.arrow = o));
}
const g8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: m8,
  effect: v8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function va(e) {
  return e.split("-")[1];
}
var y8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function b8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ha(n * o) / o || 0,
    y: ha(r * o) / o || 0
  };
}
function B1(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, v = a.y, g = v === void 0 ? 0 : v, S = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = S.x, g = S.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), b = Nt, x = zt, k = window;
  if (u) {
    var P = xl(n), T = "clientHeight", _ = "clientWidth";
    if (P === Jt(n) && (P = mo(n), _r(P).position !== "static" && s === "absolute" && (T = "scrollHeight", _ = "scrollWidth")), P = P, o === zt || (o === Nt || o === xn) && i === nl) {
      x = Sn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      g -= M - r.height, g *= l ? 1 : -1;
    }
    if (o === Nt || (o === zt || o === Sn) && i === nl) {
      b = xn;
      var I = d && P === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      p -= I - r.width, p *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, u && y8), G = c === !0 ? b8({
    x: p,
    y: g
  }, Jt(n)) : {
    x: p,
    y: g
  };
  if (p = G.x, g = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[x] = h ? "0" : "", H[b] = m ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[x] = h ? g + "px" : "", t[b] = m ? p + "px" : "", t.transform = "", t));
}
function S8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: nr(t.placement),
    variation: va(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, B1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, B1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const x8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: S8,
  data: {}
};
var uu = {
  passive: !0
};
function w8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = Jt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, uu);
  }), s && l.addEventListener("resize", n.update, uu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, uu);
    }), s && l.removeEventListener("resize", n.update, uu);
  };
}
const C8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: w8,
  data: {}
};
var k8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Gu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return k8[t];
  });
}
var P8 = {
  start: "end",
  end: "start"
};
function W1(e) {
  return e.replace(/start|end/g, function(t) {
    return P8[t];
  });
}
function Sg(e) {
  var t = Jt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function xg(e) {
  return ma(mo(e)).left + Sg(e).scrollLeft;
}
function T8(e, t) {
  var n = Jt(e), r = mo(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = P2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + xg(e),
    y: l
  };
}
function _8(e) {
  var t, n = mo(e), r = Sg(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Vo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Vo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + xg(e), l = -r.scrollTop;
  return _r(o || n).direction === "rtl" && (s += Vo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function wg(e) {
  var t = _r(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function M2(e) {
  return ["html", "body", "#document"].indexOf(rr(e)) >= 0 ? e.ownerDocument.body : gn(e) && wg(e) ? e : M2(Hd(e));
}
function ks(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = M2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Jt(r), a = o ? [i].concat(i.visualViewport || [], wg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ks(Hd(a)))
  );
}
function om(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function E8(e, t) {
  var n = ma(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function H1(e, t, n) {
  return t === C2 ? om(T8(e, n)) : Yo(t) ? E8(t, n) : om(_8(mo(e)));
}
function O8(e) {
  var t = ks(Hd(e)), n = ["absolute", "fixed"].indexOf(_r(e).position) >= 0, r = n && gn(e) ? xl(e) : e;
  return Yo(r) ? t.filter(function(o) {
    return Yo(o) && T2(o, r) && rr(o) !== "body";
  }) : [];
}
function M8(e, t, n, r) {
  var o = t === "clippingParents" ? O8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = H1(e, u, r);
    return l.top = Vo(c.top, l.top), l.right = jc(c.right, l.right), l.bottom = jc(c.bottom, l.bottom), l.left = Vo(c.left, l.left), l;
  }, H1(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function I2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? nr(r) : null, i = r ? va(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
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
  var u = o ? bg(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case pa:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case nl:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function rl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? X9 : s, u = n.rootBoundary, c = u === void 0 ? C2 : u, d = n.elementContext, f = d === void 0 ? Wa : d, p = n.altBoundary, v = p === void 0 ? !1 : p, g = n.padding, S = g === void 0 ? 0 : g, m = E2(typeof S != "number" ? S : O2(S, Sl)), h = f === Wa ? Q9 : Wa, b = e.rects.popper, x = e.elements[v ? h : f], k = M8(Yo(x) ? x : x.contextElement || mo(e.elements.popper), l, c, a), P = ma(e.elements.reference), T = I2({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), _ = om(Object.assign({}, b, T)), M = f === Wa ? _ : P, I = {
    top: k.top - M.top + m.top,
    bottom: M.bottom - k.bottom + m.bottom,
    left: k.left - M.left + m.left,
    right: M.right - k.right + m.right
  }, D = e.modifiersData.offset;
  if (f === Wa && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [xn, Sn].indexOf(H) >= 0 ? 1 : -1, W = [zt, Sn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function I8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? k2 : l, c = va(r), d = c ? s ? j1 : j1.filter(function(v) {
    return va(v) === c;
  }) : Sl, f = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(v, g) {
    return v[g] = rl(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[nr(g)], v;
  }, {});
  return Object.keys(p).sort(function(v, g) {
    return p[v] - p[g];
  });
}
function R8(e) {
  if (nr(e) === vg)
    return [];
  var t = Gu(e);
  return [W1(e), t, W1(t)];
}
function $8(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, v = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, S = t.options.placement, m = nr(S), h = m === S, b = l || (h || !v ? [Gu(S)] : R8(S)), x = [S].concat(b).reduce(function(te, le) {
      return te.concat(nr(le) === vg ? I8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: g
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, T = /* @__PURE__ */ new Map(), _ = !0, M = x[0], I = 0; I < x.length; I++) {
      var D = x[I], G = nr(D), H = va(D) === pa, L = [zt, Sn].indexOf(G) >= 0, W = L ? "width" : "height", K = rl(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? xn : Nt : H ? Sn : zt;
      k[W] > P[W] && ($ = Gu($));
      var A = Gu($), z = [];
      if (i && z.push(K[G] <= 0), s && z.push(K[$] <= 0, K[A] <= 0), z.every(function(te) {
        return te;
      })) {
        M = D, _ = !1;
        break;
      }
      T.set(D, z);
    }
    if (_)
      for (var U = v ? 3 : 1, V = function(le) {
        var ie = x.find(function(se) {
          var me = T.get(se);
          if (me)
            return me.slice(0, le).every(function(Ce) {
              return Ce;
            });
        });
        if (ie)
          return M = ie, "break";
      }, Y = U; Y > 0; Y--) {
        var N = V(Y);
        if (N === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const A8 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: $8,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function U1(e, t, n) {
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
function G1(e) {
  return [zt, xn, Sn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function D8(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = rl(t, {
    elementContext: "reference"
  }), s = rl(t, {
    altBoundary: !0
  }), l = U1(a, r), u = U1(s, o, i), c = G1(l), d = G1(u);
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
const F8 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: D8
};
function L8(e, t, n) {
  var r = nr(e), o = [Nt, zt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
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
function z8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = k2.reduce(function(c, d) {
    return c[d] = L8(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const N8 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: z8
};
function j8(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = I2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const V8 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: j8,
  data: {}
};
function B8(e) {
  return e === "x" ? "y" : "x";
}
function W8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, v = n.tetherOffset, g = v === void 0 ? 0 : v, S = rl(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = nr(t.placement), h = va(t.placement), b = !h, x = bg(m), k = B8(x), P = t.modifiersData.popperOffsets, T = t.rects.reference, _ = t.rects.popper, M = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, I = typeof M == "number" ? {
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
      var H, L = x === "y" ? zt : Nt, W = x === "y" ? Sn : xn, K = x === "y" ? "height" : "width", $ = P[x], A = $ + S[L], z = $ - S[W], U = p ? -_[K] / 2 : 0, V = h === pa ? T[K] : _[K], Y = h === pa ? -_[K] : -T[K], N = t.elements.arrow, te = p && N ? yg(N) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : _2(), ie = le[L], se = le[W], me = Cs(0, T[K], te[K]), Ce = b ? T[K] / 2 - U - me - ie - I.mainAxis : V - me - ie - I.mainAxis, et = b ? -T[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && xl(t.elements.arrow), on = qe ? x === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, Pn = (H = D == null ? void 0 : D[x]) != null ? H : 0, Mr = $ + Ce - Pn - on, fe = $ + et - Pn, mt = Cs(p ? jc(A, Mr) : A, $, p ? Vo(z, fe) : z);
      P[x] = mt, G[x] = mt - $;
    }
    if (s) {
      var Ge, Wt = x === "x" ? zt : Nt, Ir = x === "x" ? Sn : xn, vt = P[k], jn = k === "y" ? "height" : "width", Rr = vt + S[Wt], an = vt - S[Ir], ni = [zt, Nt].indexOf(m) !== -1, ka = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Pl = ni ? Rr : vt - T[jn] - _[jn] - ka + I.altAxis, Tl = ni ? vt + T[jn] + _[jn] - ka - I.altAxis : an, vo = p && ni ? p8(Pl, vt, Tl) : Cs(p ? Pl : Rr, vt, p ? Tl : an);
      P[k] = vo, G[k] = vo - vt;
    }
    t.modifiersData[r] = G;
  }
}
const H8 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: W8,
  requiresIfExists: ["offset"]
};
function U8(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function G8(e) {
  return e === Jt(e) || !gn(e) ? Sg(e) : U8(e);
}
function K8(e) {
  var t = e.getBoundingClientRect(), n = ha(t.width) / e.offsetWidth || 1, r = ha(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Y8(e, t, n) {
  n === void 0 && (n = !1);
  var r = gn(t), o = gn(t) && K8(t), i = mo(t), a = ma(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((rr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  wg(i)) && (s = G8(t)), gn(t) ? (l = ma(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = xg(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function q8(e) {
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
function X8(e) {
  var t = q8(e);
  return s8.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Q8(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Z8(e) {
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
var K1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Y1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function J8(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? K1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, K1, i),
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
        var h = typeof m == "function" ? m(c.options) : m;
        g(), c.options = Object.assign({}, i, c.options, h), c.scrollParents = {
          reference: Yo(s) ? ks(s) : s.contextElement ? ks(s.contextElement) : [],
          popper: ks(l)
        };
        var b = X8(Z8([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(x) {
          return x.enabled;
        }), v(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, b = m.popper;
          if (Y1(h, b)) {
            c.rects = {
              reference: Y8(h, xl(b), c.options.strategy === "fixed"),
              popper: yg(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(I) {
              return c.modifiersData[I.name] = Object.assign({}, I.data);
            });
            for (var x = 0; x < c.orderedModifiers.length; x++) {
              if (c.reset === !0) {
                c.reset = !1, x = -1;
                continue;
              }
              var k = c.orderedModifiers[x], P = k.fn, T = k.options, _ = T === void 0 ? {} : T, M = k.name;
              typeof P == "function" && (c = P({
                state: c,
                options: _,
                name: M,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Q8(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Y1(s, l))
      return p;
    p.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function v() {
      c.orderedModifiers.forEach(function(S) {
        var m = S.name, h = S.options, b = h === void 0 ? {} : h, x = S.effect;
        if (typeof x == "function") {
          var k = x({
            state: c,
            name: m,
            instance: p,
            options: b
          }), P = function() {
          };
          d.push(k || P);
        }
      });
    }
    function g() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return p;
  };
}
var e7 = [C8, V8, x8, c8, N8, A8, H8, g8, F8], t7 = /* @__PURE__ */ J8({
  defaultModifiers: e7
});
function R2(e = {}) {
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
  } = e, v = y.useRef(null), g = y.useRef(null), S = y.useRef(null), m = q9(r, p), h = y.useRef(() => {
  }), b = y.useCallback(() => {
    var I;
    !t || !v.current || !g.current || ((I = h.current) == null || I.call(h), S.current = t7(v.current, g.current, {
      placement: m,
      modifiers: [
        G9,
        W9,
        B9,
        {
          ...V9,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...j9(a)
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
    }), S.current.forceUpdate(), h.current = S.current.destroy);
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
  y.useEffect(() => () => {
    var I;
    !v.current && !g.current && ((I = S.current) == null || I.destroy(), S.current = null);
  }, []);
  const x = y.useCallback(
    (I) => {
      v.current = I, b();
    },
    [b]
  ), k = y.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(x, D)
    }),
    [x]
  ), P = y.useCallback(
    (I) => {
      g.current = I, b();
    },
    [b]
  ), T = y.useCallback(
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
  ), _ = y.useCallback((I = {}, D = null) => {
    const { size: G, shadowColor: H, bg: L, style: W, ...K } = I;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: n7(I)
    };
  }, []), M = y.useCallback(
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
    transformOrigin: xt.transformOrigin.varRef,
    referenceRef: x,
    popperRef: P,
    getPopperProps: T,
    getArrowProps: _,
    getArrowInnerProps: M,
    getReferenceProps: k
  };
}
function n7(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function $2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = to(n), a = to(t), [s, l] = y.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = y.useId(), f = o ?? `disclosure-${d}`, p = y.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), v = y.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), g = y.useCallback(() => {
    u ? p() : v();
  }, [u, v, p]);
  function S(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var x;
        (x = h.onClick) == null || x.call(h, b), g();
      }
    };
  }
  function m(h = {}) {
    return {
      ...h,
      hidden: !u,
      id: f
    };
  }
  return {
    isOpen: u,
    onOpen: v,
    onClose: p,
    onToggle: g,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: m
  };
}
function r7(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = to(n), a = y.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  y.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      bp(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && bp(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && bp(d, t) && (a.isPointerDown = !1, o(d));
    }, c = A2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function bp(e, t) {
  var n;
  const r = e.target;
  return r && !A2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function A2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function D2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = y.useState(t), [i, a] = y.useState(!1);
  return y.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), ag(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = s9(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function F2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  o7,
  i7,
  a7,
  s7
] = mP(), [l7, wl] = Je({
  strict: !1,
  name: "MenuContext"
});
function u7(e, ...t) {
  const n = y.useId(), r = e || n;
  return y.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function L2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function q1(e) {
  return L2(e).activeElement === e;
}
function c7(e = {}) {
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
    computePositionOnMount: v = !1,
    ...g
  } = e, S = y.useRef(null), m = y.useRef(null), h = a7(), b = y.useCallback(() => {
    requestAnimationFrame(() => {
      var N;
      (N = S.current) == null || N.focus({ preventScroll: !1 });
    });
  }, []), x = y.useCallback(() => {
    const N = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = h.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(N);
  }, [h, o]), k = y.useCallback(() => {
    const N = setTimeout(() => {
      const te = h.lastEnabled();
      te && H(te.index);
    });
    A.current.add(N);
  }, [h]), P = y.useCallback(() => {
    c == null || c(), i ? x() : b();
  }, [i, x, b, c]), { isOpen: T, onOpen: _, onClose: M, onToggle: I } = $2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  r7({
    enabled: T && r,
    ref: S,
    handler: (N) => {
      var te;
      (te = m.current) != null && te.contains(N.target) || M();
    }
  });
  const D = R2({
    ...g,
    enabled: T || v,
    placement: d,
    direction: p
  }), [G, H] = y.useState(-1);
  ca(() => {
    T || H(-1);
  }, [T]), w2(S, {
    focusRef: m,
    visible: T,
    shouldFocus: !0
  });
  const L = D2({ isOpen: T, ref: S }), [W, K] = u7(t, "menu-button", "menu-list"), $ = y.useCallback(() => {
    _(), b();
  }, [_, b]), A = y.useRef(/* @__PURE__ */ new Set([]));
  y.useEffect(() => {
    const N = A.current;
    return () => {
      N.forEach((te) => clearTimeout(te)), N.clear();
    };
  }, []);
  const z = y.useCallback(() => {
    _(), x();
  }, [x, _]), U = y.useCallback(() => {
    _(), k();
  }, [_, k]), V = y.useCallback(() => {
    var N, te;
    const le = L2(S.current), ie = (N = S.current) == null ? void 0 : N.contains(le.activeElement);
    if (!(T && !ie))
      return;
    const me = (te = h.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [T, G, h]), Y = y.useRef(null);
  return {
    openAndFocusMenu: $,
    openAndFocusFirstItem: z,
    openAndFocusLastItem: U,
    onTransitionEnd: V,
    unstable__animationState: L,
    descendants: h,
    popper: D,
    buttonId: W,
    menuId: K,
    forceUpdate: D.forceUpdate,
    orientation: "vertical",
    isOpen: T,
    onToggle: I,
    onOpen: _,
    onClose: M,
    menuRef: S,
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
function d7(e = {}, t = null) {
  const n = wl(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = y.useCallback(
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
    onClick: De(e.onClick, r),
    onKeyDown: De(e.onKeyDown, s)
  };
}
function im(e) {
  var t;
  return m7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function f7(e = {}, t = null) {
  const n = wl();
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
  } = n, f = i7(), p = O9({
    preventDefault: (m) => m.key !== " " && im(m.target)
  }), v = y.useCallback(
    (m) => {
      if (!m.currentTarget.contains(m.target))
        return;
      const h = m.key, x = {
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
      }[h];
      if (x) {
        m.preventDefault(), x(m);
        return;
      }
      const k = p((P) => {
        const T = M9(
          f.values(),
          P,
          (_) => {
            var M, I;
            return (I = (M = _ == null ? void 0 : _.node) == null ? void 0 : M.textContent) != null ? I : "";
          },
          f.item(r)
        );
        if (T) {
          const _ = f.indexOf(T.node);
          o(_);
        }
      });
      im(m.target) && k(m);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), g = y.useRef(!1);
  a && (g.current = !0);
  const S = F2({
    wasSelected: g.current,
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
    onKeyDown: De(e.onKeyDown, v)
  };
}
function p7(e = {}) {
  const { popper: t, isOpen: n } = wl();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function h7(e = {}, t = null) {
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
  } = e, f = wl(), {
    setFocusedIndex: p,
    focusedIndex: v,
    closeOnSelect: g,
    onClose: S,
    menuRef: m,
    isOpen: h,
    menuId: b,
    rafId: x
  } = f, k = y.useRef(null), P = `${b}-menuitem-${y.useId()}`, { index: T, register: _ } = s7({
    disabled: s && !l
  }), M = y.useCallback(
    ($) => {
      n == null || n($), !s && p(T);
    },
    [p, T, s, n]
  ), I = y.useCallback(
    ($) => {
      r == null || r($), k.current && !q1(k.current) && M($);
    },
    [M, r]
  ), D = y.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = y.useCallback(
    ($) => {
      i == null || i($), im($.currentTarget) && (u ?? g) && S();
    },
    [S, i, g, u]
  ), H = y.useCallback(
    ($) => {
      a == null || a($), p(T);
    },
    [p, a, T]
  ), L = T === v, W = s && !l;
  ca(() => {
    if (h)
      return L && !W && k.current ? (x.current && cancelAnimationFrame(x.current), x.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), x.current = null;
      })) : m.current && !q1(m.current) && m.current.focus({ preventScroll: !0 }), () => {
        x.current && cancelAnimationFrame(x.current);
      };
  }, [L, W, m, h]);
  const K = R9({
    onClick: G,
    onFocus: H,
    onMouseEnter: M,
    onMouseMove: I,
    onMouseLeave: D,
    ref: at(_, k, t),
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
function m7(e) {
  var t;
  if (!v7(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function v7(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [g7, Cl] = Je({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), Cg = (e) => {
  const { children: t } = e, n = Ct("Menu", e), r = Cn(e), { direction: o } = po(), { descendants: i, ...a } = c7({ ...r, direction: o }), s = y.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ w.jsx(o7, { value: i, children: /* @__PURE__ */ w.jsx(l7, { value: s, children: /* @__PURE__ */ w.jsx(g7, { value: n, children: Xn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
Cg.displayName = "Menu";
var z2 = oe(
  (e, t) => {
    const n = Cl();
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
z2.displayName = "MenuCommand";
var y7 = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = Cl(), i = r.as || n ? n ?? void 0 : "button", a = y.useMemo(
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
), kg = (e) => {
  const { className: t, children: n, ...r } = e, o = Cl(), i = y.Children.only(n), a = y.isValidElement(i) ? y.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ae("chakra-menu__icon", i.props.className)
  }) : null, s = ae("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ w.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
kg.displayName = "MenuIcon";
var N2 = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = h7(s, t), c = n || o ? /* @__PURE__ */ w.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ w.jsxs(
    y7,
    {
      ...l,
      className: ae("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ w.jsx(kg, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ w.jsx(z2, { marginStart: i, children: o })
      ]
    }
  );
});
N2.displayName = "MenuItem";
var b7 = {
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
}, S7 = X(or.div), j2 = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = wl(), d = f7(s, n), f = p7(i), p = Cl();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ w.jsx(
        S7,
        {
          variants: b7,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: ae("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: uC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
j2.displayName = "MenuList";
var x7 = oe((e, t) => {
  const n = Cl();
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
}), V2 = oe(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = d7(o, t), a = r || x7;
    return /* @__PURE__ */ w.jsx(
      a,
      {
        ...i,
        className: ae("chakra-menu__menu-button", e.className),
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
V2.displayName = "MenuButton";
var w7 = {
  slideInBottom: {
    ...ns,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...ns,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...ns,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...ns,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...xP,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, C7 = X(or.section), k7 = (e) => w7[e || "none"], B2 = y.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = k7(n), ...o } = e;
    return /* @__PURE__ */ w.jsx(C7, { ref: t, ...r, ...o });
  }
);
B2.displayName = "ModalTransition";
var P7 = Object.defineProperty, T7 = (e, t, n) => t in e ? P7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _7 = (e, t, n) => (T7(e, typeof t != "symbol" ? t + "" : t, n), n), E7 = class {
  constructor() {
    _7(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, am = new E7();
function W2(e, t) {
  const [n, r] = y.useState(0);
  return y.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = am.add(o);
        r(i);
      }
      return () => {
        am.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var O7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, li = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), du = {}, Sp = 0, H2 = function(e) {
  return e && (e.host || H2(e.parentNode));
}, M7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = H2(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, I7 = function(e, t, n, r) {
  var o = M7(t, Array.isArray(e) ? e : [e]);
  du[n] || (du[n] = /* @__PURE__ */ new WeakMap());
  var i = du[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), v = p !== null && p !== "false", g = (li.get(f) || 0) + 1, S = (i.get(f) || 0) + 1;
        li.set(f, g), i.set(f, S), a.push(f), g === 1 && v && cu.set(f, !0), S === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), Sp++, function() {
    a.forEach(function(d) {
      var f = li.get(d) - 1, p = i.get(d) - 1;
      li.set(d, f), i.set(d, p), f || (cu.has(d) || d.removeAttribute(r), cu.delete(d)), p || d.removeAttribute(n);
    }), Sp--, Sp || (li = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), du = {});
  };
}, R7 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || O7(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), I7(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function $7(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = y.useRef(null), c = y.useRef(null), [d, f, p] = D7(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  A7(u, t && a);
  const v = W2(u, t), g = y.useRef(null), S = y.useCallback((M) => {
    g.current = M.target;
  }, []), m = y.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [h, b] = y.useState(!1), [x, k] = y.useState(!1), P = y.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: De(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, h]
  ), T = y.useCallback(
    (M) => {
      M.stopPropagation(), g.current === M.target && am.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), _ = y.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: De(M.onClick, T),
      onKeyDown: De(M.onKeyDown, m),
      onMouseDown: De(M.onMouseDown, S)
    }),
    [m, S, T]
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
    getDialogContainerProps: _,
    index: v
  };
}
function A7(e, t) {
  const n = e.current;
  y.useEffect(() => {
    if (!(!e.current || !t))
      return R7(e.current);
  }, [t, e, n]);
}
function D7(e, ...t) {
  const n = y.useId(), r = e || n;
  return y.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [F7, Ca] = Je({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [L7, lo] = Je({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Ud = (e) => {
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
    onCloseComplete: v
  } = t, g = Ct("Modal", t), m = {
    ...$7(t),
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
  return /* @__PURE__ */ w.jsx(L7, { value: m, children: /* @__PURE__ */ w.jsx(F7, { value: g, children: /* @__PURE__ */ w.jsx(ei, { onExitComplete: v, children: m.isOpen && /* @__PURE__ */ w.jsx(fl, { ...n, children: r }) }) }) });
};
Ud.displayName = "Modal";
var Ku = "right-scroll-bar-position", Yu = "width-before-scroll-bar", z7 = "with-scroll-bars-hidden", N7 = "--removed-body-scroll-bar-size", U2 = LP(), xp = function() {
}, Gd = y.forwardRef(function(e, t) {
  var n = y.useRef(null), r = y.useState({
    onScrollCapture: xp,
    onWheelCapture: xp,
    onTouchMoveCapture: xp
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, g = e.allowPinchZoom, S = e.as, m = S === void 0 ? "div" : S, h = e.gapMode, b = AP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, k = $P([n, t]), P = qn(qn({}, b), o);
  return y.createElement(
    y.Fragment,
    null,
    c && y.createElement(x, { sideCar: U2, removeScrollBar: u, shards: d, noIsolation: p, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: h }),
    a ? y.cloneElement(y.Children.only(s), qn(qn({}, P), { ref: k })) : y.createElement(m, qn({}, P, { className: l, ref: k }), s)
  );
});
Gd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Gd.classNames = {
  fullWidth: Yu,
  zeroRight: Ku
};
var X1, j7 = function() {
  if (X1)
    return X1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function V7() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = j7();
  return t && e.setAttribute("nonce", t), e;
}
function B7(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function W7(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var H7 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = V7()) && (B7(t, n), W7(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, U7 = function() {
  var e = H7();
  return function(t, n) {
    y.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, G2 = function() {
  var e = U7(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, G7 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, wp = function(e) {
  return parseInt(e || "", 10) || 0;
}, K7 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [wp(n), wp(r), wp(o)];
}, Y7 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return G7;
  var t = K7(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, q7 = G2(), X7 = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(z7, ` {
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
  
  .`).concat(Ku, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Yu, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ku, " .").concat(Ku, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Yu, " .").concat(Yu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(N7, ": ").concat(s, `px;
  }
`);
}, Q7 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = y.useMemo(function() {
    return Y7(o);
  }, [o]);
  return y.createElement(q7, { styles: X7(i, !t, o, n ? "" : "!important") });
}, sm = !1;
if (typeof window < "u")
  try {
    var fu = Object.defineProperty({}, "passive", {
      get: function() {
        return sm = !0, !0;
      }
    });
    window.addEventListener("test", fu, fu), window.removeEventListener("test", fu, fu);
  } catch {
    sm = !1;
  }
var ui = sm ? { passive: !1 } : !1, Z7 = function(e) {
  return e.tagName === "TEXTAREA";
}, K2 = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Z7(e) && n[t] === "visible")
  );
}, J7 = function(e) {
  return K2(e, "overflowY");
}, eW = function(e) {
  return K2(e, "overflowX");
}, Q1 = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Y2(e, r);
    if (o) {
      var i = q2(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, tW = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, nW = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Y2 = function(e, t) {
  return e === "v" ? J7(t) : eW(t);
}, q2 = function(e, t) {
  return e === "v" ? tW(t) : nW(t);
}, rW = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, oW = function(e, t, n, r, o) {
  var i = rW(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = q2(e, s), v = p[0], g = p[1], S = p[2], m = g - S - i * v;
    (v || m) && Y2(e, s) && (d += m, f += v), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, pu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Z1 = function(e) {
  return [e.deltaX, e.deltaY];
}, J1 = function(e) {
  return e && "current" in e ? e.current : e;
}, iW = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, aW = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, sW = 0, ci = [];
function lW(e) {
  var t = y.useRef([]), n = y.useRef([0, 0]), r = y.useRef(), o = y.useState(sW++)[0], i = y.useState(G2)[0], a = y.useRef(e);
  y.useEffect(function() {
    a.current = e;
  }, [e]), y.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = l6([e.lockRef.current], (e.shards || []).map(J1), !0).filter(Boolean);
      return g.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = y.useCallback(function(g, S) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = pu(g), h = n.current, b = "deltaX" in g ? g.deltaX : h[0] - m[0], x = "deltaY" in g ? g.deltaY : h[1] - m[1], k, P = g.target, T = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in g && T === "h" && P.type === "range")
      return !1;
    var _ = Q1(T, P);
    if (!_)
      return !0;
    if (_ ? k = T : (k = T === "v" ? "h" : "v", _ = Q1(T, P)), !_)
      return !1;
    if (!r.current && "changedTouches" in g && (b || x) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return oW(M, S, g, M === "h" ? b : x, !0);
  }, []), l = y.useCallback(function(g) {
    var S = g;
    if (!(!ci.length || ci[ci.length - 1] !== i)) {
      var m = "deltaY" in S ? Z1(S) : pu(S), h = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && iW(k.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var b = (a.current.shards || []).map(J1).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), x = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation;
        x && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = y.useCallback(function(g, S, m, h) {
    var b = { name: g, delta: S, target: m, should: h, shadowParent: uW(m) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), c = y.useCallback(function(g) {
    n.current = pu(g), r.current = void 0;
  }, []), d = y.useCallback(function(g) {
    u(g.type, Z1(g), g.target, s(g, e.lockRef.current));
  }, []), f = y.useCallback(function(g) {
    u(g.type, pu(g), g.target, s(g, e.lockRef.current));
  }, []);
  y.useEffect(function() {
    return ci.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, ui), document.addEventListener("touchmove", l, ui), document.addEventListener("touchstart", c, ui), function() {
      ci = ci.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, ui), document.removeEventListener("touchmove", l, ui), document.removeEventListener("touchstart", c, ui);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    v ? y.createElement(i, { styles: aW(o) }) : null,
    p ? y.createElement(Q7, { gapMode: e.gapMode }) : null
  );
}
function uW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const cW = u6(U2, lW);
var X2 = y.forwardRef(function(e, t) {
  return y.createElement(Gd, qn({}, e, { ref: t, sideCar: cW }));
});
X2.classNames = Gd.classNames;
const dW = X2;
function Q2(e) {
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
  } = lo(), [f, p] = Yk();
  y.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const v = W2(r, d);
  return /* @__PURE__ */ w.jsx(
    m2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ w.jsx(
        dW,
        {
          removeScrollBar: !u,
          allowPinchZoom: a,
          enabled: v === 1 && i,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var Pg = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = lo(), u = s(a, t), c = l(o), d = ae("chakra-modal__content", n), f = Ca(), p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog
    }, v = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer
    }, { motionPreset: g } = lo();
    return /* @__PURE__ */ w.jsx(Q2, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: v,
        children: /* @__PURE__ */ w.jsx(
          B2,
          {
            preset: g,
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
Pg.displayName = "ModalContent";
var [fW, pW] = Je(), hW = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function mW(e, t) {
  var n, r;
  if (e)
    return (r = (n = hW[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function vW(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = po(), l = (t = s.components) == null ? void 0 : t.Drawer, u = mW(o, s.direction);
  return /* @__PURE__ */ w.jsx(fW, { value: { placement: u }, children: /* @__PURE__ */ w.jsx(
    Ud,
    {
      isOpen: n,
      onClose: r,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var gW = X(wP), Z2 = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = lo(), c = s(a, t), d = l(i), f = ae("chakra-modal__content", n), p = Ca(), v = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, g = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: S } = pW();
    return /* @__PURE__ */ w.jsx(Q2, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ w.jsx(
          gW,
          {
            motionProps: o,
            direction: S,
            in: u,
            className: f,
            ...c,
            __css: v,
            children: r
          }
        )
      }
    ) });
  }
);
Z2.displayName = "DrawerContent";
var Kd = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = lo();
    y.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ae("chakra-modal__header", n), l = {
      flex: 0,
      ...Ca().header
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
Kd.displayName = "ModalHeader";
var yW = X(or.div), Yd = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ae("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Ca().overlay
    }, { motionPreset: u } = lo(), d = o || (u === "none" ? {} : SP);
    return /* @__PURE__ */ w.jsx(
      yW,
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
Yd.displayName = "ModalOverlay";
var qd = oe((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = lo();
  y.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ae("chakra-modal__body", n), s = Ca();
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
qd.displayName = "ModalBody";
var Tg = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = lo(), a = ae("chakra-modal__close-btn", r), s = Ca();
    return /* @__PURE__ */ w.jsx(
      jd,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: De(n, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
Tg.displayName = "ModalCloseButton";
var [bW, ti] = Je({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [SW, kl] = Je({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), J2 = oe(
  function(t, n) {
    const { getHeaderProps: r } = ti(), o = kl();
    return /* @__PURE__ */ w.jsx(
      X.header,
      {
        ...r(t, n),
        className: ae("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
J2.displayName = "PopoverHeader";
function _g(e) {
  const t = y.Children.only(e.children), { getTriggerProps: n } = ti();
  return y.cloneElement(t, n(t.props, t.ref));
}
_g.displayName = "PopoverTrigger";
var di = {
  click: "click",
  hover: "hover"
};
function xW(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = di.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: v,
    ...g
  } = e, { isOpen: S, onClose: m, onOpen: h, onToggle: b } = $2(e), x = y.useRef(null), k = y.useRef(null), P = y.useRef(null), T = y.useRef(!1), _ = y.useRef(!1);
  S && (_.current = !0);
  const [M, I] = y.useState(!1), [D, G] = y.useState(!1), H = y.useId(), L = o ?? H, [W, K, $, A] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((fe) => `${fe}-${L}`), {
    referenceRef: z,
    getArrowProps: U,
    getPopperProps: V,
    getArrowInnerProps: Y,
    forceUpdate: N
  } = R2({
    ...g,
    enabled: S || !!v
  }), te = D2({ isOpen: S, ref: P });
  QB({
    enabled: S,
    ref: k
  }), w2(P, {
    focusRef: k,
    visible: S,
    shouldFocus: i && u === di.click
  }), D9(P, {
    focusRef: r,
    visible: S,
    shouldFocus: a && u === di.click
  });
  const le = F2({
    wasSelected: _.current,
    enabled: f,
    mode: p,
    isSelected: te.present
  }), ie = y.useCallback(
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
        onKeyDown: De(fe.onKeyDown, (Wt) => {
          n && Wt.key === "Escape" && m();
        }),
        onBlur: De(fe.onBlur, (Wt) => {
          const Ir = eS(Wt), vt = Cp(P.current, Ir), jn = Cp(k.current, Ir);
          S && t && (!vt && !jn) && m();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === di.hover && (Ge.role = "tooltip", Ge.onMouseEnter = De(fe.onMouseEnter, () => {
        T.current = !0;
      }), Ge.onMouseLeave = De(
        fe.onMouseLeave,
        (Wt) => {
          Wt.nativeEvent.relatedTarget !== null && (T.current = !1, setTimeout(() => m(), d));
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
      S,
      t,
      d,
      l,
      s
    ]
  ), se = y.useCallback(
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
  ), me = y.useCallback(
    (fe, mt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(mt, x, z)
    }),
    [x, z]
  ), Ce = y.useRef(), et = y.useRef(), qe = y.useCallback(
    (fe) => {
      x.current == null && z(fe);
    },
    [z]
  ), on = y.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, mt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": S,
        "aria-controls": K
      };
      return u === di.click && (Ge.onClick = De(fe.onClick, b)), u === di.hover && (Ge.onFocus = De(fe.onFocus, () => {
        Ce.current === void 0 && h();
      }), Ge.onBlur = De(fe.onBlur, (Wt) => {
        const Ir = eS(Wt), vt = !Cp(P.current, Ir);
        S && t && vt && m();
      }), Ge.onKeyDown = De(fe.onKeyDown, (Wt) => {
        Wt.key === "Escape" && m();
      }), Ge.onMouseEnter = De(fe.onMouseEnter, () => {
        T.current = !0, Ce.current = window.setTimeout(() => h(), c);
      }), Ge.onMouseLeave = De(fe.onMouseLeave, () => {
        T.current = !1, Ce.current && (clearTimeout(Ce.current), Ce.current = void 0), et.current = window.setTimeout(() => {
          T.current === !1 && m();
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
      h,
      t,
      m,
      c,
      d
    ]
  );
  y.useEffect(() => () => {
    Ce.current && clearTimeout(Ce.current), et.current && clearTimeout(et.current);
  }, []);
  const Pn = y.useCallback(
    (fe = {}, mt = null) => ({
      ...fe,
      id: $,
      ref: at(mt, (Ge) => {
        I(!!Ge);
      })
    }),
    [$]
  ), Mr = y.useCallback(
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
    forceUpdate: N,
    isOpen: S,
    onAnimationComplete: te.onComplete,
    onClose: m,
    getAnchorProps: me,
    getArrowProps: U,
    getArrowInnerProps: Y,
    getPopoverPositionerProps: se,
    getPopoverProps: ie,
    getTriggerProps: on,
    getHeaderProps: Pn,
    getBodyProps: Mr
  };
}
function Cp(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function eS(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Eg(e) {
  const t = Ct("Popover", e), { children: n, ...r } = Cn(e), o = po(), i = xW({ ...r, direction: o.direction });
  return /* @__PURE__ */ w.jsx(bW, { value: i, children: /* @__PURE__ */ w.jsx(SW, { value: t, children: Xn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Eg.displayName = "Popover";
var kp = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Og(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = ti(), c = kl(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          className: ae("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": kp("colors", s),
            "--popper-arrow-bg": kp("colors", d),
            "--popper-arrow-shadow": kp("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
Og.displayName = "PopoverArrow";
var Mg = oe(
  function(t, n) {
    const { getBodyProps: r } = ti(), o = kl();
    return /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...r(t, n),
        className: ae("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
Mg.displayName = "PopoverBody";
var Ig = oe(
  function(t, n) {
    const { onClose: r } = ti(), o = kl();
    return /* @__PURE__ */ w.jsx(
      jd,
      {
        size: "sm",
        onClick: r,
        className: ae("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: n,
        ...t
      }
    );
  }
);
Ig.displayName = "PopoverCloseButton";
function wW(e) {
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
var CW = {
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
}, kW = X(or.section), eT = oe(function(t, n) {
  const { variants: r = CW, ...o } = t, { isOpen: i } = ti();
  return /* @__PURE__ */ w.jsx(
    kW,
    {
      ref: n,
      variants: wW(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
eT.displayName = "PopoverTransition";
var Rg = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = ti(), u = kl(), c = {
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
          eT,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: uC(
              l,
              i.onAnimationComplete
            ),
            className: ae("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
Rg.displayName = "PopoverContent";
var [PW, tT] = Je({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), nT = oe((e, t) => {
  const n = Ct("Tag", e), r = Cn(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ w.jsx(PW, { value: n, children: /* @__PURE__ */ w.jsx(X.span, { ref: t, ...r, __css: o }) });
});
nT.displayName = "Tag";
var TW = oe((e, t) => {
  const n = tT();
  return /* @__PURE__ */ w.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
TW.displayName = "TagLabel";
var _W = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
_W.displayName = "TagLeftIcon";
var EW = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
EW.displayName = "TagRightIcon";
var rT = (e) => /* @__PURE__ */ w.jsx(kn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ w.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
rT.displayName = "TagCloseIcon";
var OW = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...tT().closeButton
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
        children: r || /* @__PURE__ */ w.jsx(rT, {})
      }
    );
  }
);
OW.displayName = "TagCloseButton";
var MW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, IW = Object.defineProperty, RW = Object.defineProperties, $W = Object.getOwnPropertyDescriptors, Vc = Object.getOwnPropertySymbols, oT = Object.prototype.hasOwnProperty, iT = Object.prototype.propertyIsEnumerable, tS = (e, t, n) => t in e ? IW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nS = (e, t) => {
  for (var n in t || (t = {}))
    oT.call(t, n) && tS(e, n, t[n]);
  if (Vc)
    for (var n of Vc(t))
      iT.call(t, n) && tS(e, n, t[n]);
  return e;
}, AW = (e, t) => RW(e, $W(t)), DW = (e, t) => {
  var n = {};
  for (var r in e)
    oT.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Vc)
    for (var r of Vc(e))
      t.indexOf(r) < 0 && iT.call(e, r) && (n[r] = e[r]);
  return n;
}, rn = (e, t, n) => {
  const r = y.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = DW(a, ["color", "size", "stroke", "children"]);
      return y.createElement(
        "svg",
        nS(AW(nS({
          ref: i
        }, MW), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => y.createElement(f, p)), ...c || []]
      );
    }
  );
  return r.propTypes = {
    color: xo.string,
    size: xo.oneOfType([xo.string, xo.number]),
    stroke: xo.oneOfType([xo.string, xo.number])
  }, r.displayName = `${t}`, r;
}, FW = rn("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]), LW = rn("chevron-up", "IconChevronUp", [
  ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]
]), zW = rn("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), NW = rn("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), jW = rn("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), VW = rn("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), $g = rn("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), BW = rn("settings", "IconSettings", [
  [
    "path",
    {
      d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]
]), WW = rn("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), HW = rn("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), aT = rn("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), UW = rn(
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
), GW = rn("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
let hu;
const KW = new Uint8Array(16);
function YW() {
  if (!hu && (hu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !hu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return hu(KW);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function qW(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const XW = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), rS = {
  randomUUID: XW
};
function QW(e, t, n) {
  if (rS.randomUUID && !t && !e)
    return rS.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || YW)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return qW(r);
}
async function ol(e, t) {
  const n = e + "/" + Date.now() + ".json";
  ZW(n, t);
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
async function ZW(e, t) {
  try {
    const r = await (await fetch("/workspace/save_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        file_path: e,
        json_str: t
      })
    })).text();
    return console.log(r), r;
  } catch (n) {
    console.error("Error saving workspace backup:", n);
  }
}
async function JW(e) {
  try {
    const n = await (await fetch("/workspace/list_backup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dir: e
      })
    })).text();
    return console.log(n), n;
  } catch (t) {
    console.error("Error saving workspace:", t);
  }
}
let We, Be = null;
async function eH() {
  const e = async () => {
    let n = await sT("workflows");
    n == null && (n = localStorage.getItem("workspace") ?? "{}"), We = JSON.parse(n ?? "{}");
  }, t = async () => {
    Be = await nH();
  };
  await Promise.all([e(), t()]);
}
function lm(e, t) {
  if (We == null)
    return;
  const n = We[e];
  if (n == null) {
    console.error("updateFlow: workflow not found", e);
    return;
  }
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  o !== i && (We[e] = {
    ...We[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(We)), ol("workflows", JSON.stringify(We)));
}
function oS(e, t) {
  if (We == null)
    throw new Error("workspace is not loaded");
  const n = QW();
  return We[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(We)), ol("workflows", JSON.stringify(We)), We[n];
}
function iS() {
  if (We == null)
    throw new Error("workspace is not loaded");
  return Object.values(We).sort((e, t) => t.updateTime - e.updateTime);
}
function tH(e) {
  if (We == null)
    throw new Error("workspace is not loaded");
  delete We[e], localStorage.setItem("workspace", JSON.stringify(We)), ol("workflows", JSON.stringify(We));
}
async function sT(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function nH() {
  let e = await sT("tags"), t = JSON.parse(e ?? "{}") ?? {};
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
      }), t[n].updateTime = Date.now(), ol("tags", JSON.stringify(t)), t[n];
    },
    delete(n) {
      delete t[n], ol("tags", JSON.stringify(t));
    }
  };
}
const lT = y.createContext({
  curFlowID: null
});
function aS(e, t) {
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
    t % 2 ? aS(Object(n), !0).forEach(function(r) {
      Di(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : aS(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function rH(e) {
  if (Array.isArray(e))
    return e;
}
function oH(e, t) {
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
function um(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function uT(e, t) {
  if (e) {
    if (typeof e == "string")
      return um(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return um(e, t);
  }
}
function iH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr(e, t) {
  return rH(e) || oH(e, t) || uT(e, t) || iH();
}
function Or(e, t) {
  if (e == null)
    return {};
  var n = EP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var aH = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function sH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, v = Or(e, aH), g = y.useState(s !== void 0 ? s : n), S = Sr(g, 2), m = S[0], h = S[1], b = y.useState(l !== void 0 ? l : o), x = Sr(b, 2), k = x[0], P = x[1], T = y.useState(p !== void 0 ? p : a), _ = Sr(T, 2), M = _[0], I = _[1], D = y.useCallback(function(A, z) {
    typeof u == "function" && u(A, z), I(A);
  }, [u]), G = y.useCallback(function(A, z) {
    var U;
    typeof c == "function" && (U = c(A, z)), h(U !== void 0 ? U : A);
  }, [c]), H = y.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = y.useCallback(function() {
    typeof d == "function" && d(), P(!1);
  }, [d]), W = s !== void 0 ? s : m, K = l !== void 0 ? l : k, $ = p !== void 0 ? p : M;
  return Z(Z({}, v), {}, {
    inputValue: W,
    menuIsOpen: K,
    onChange: D,
    onInputChange: G,
    onMenuClose: L,
    onMenuOpen: H,
    value: $
  });
}
function lH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, BP(r.key), r);
  }
}
function uH(e, t, n) {
  return t && sS(e.prototype, t), n && sS(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function cH(e, t) {
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
  }), t && Fc(e, t);
}
function Bc(e) {
  return Bc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Bc(e);
}
function dH() {
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
function fH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pH(e, t) {
  if (t && (Ko(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fH(e);
}
function hH(e) {
  var t = dH();
  return function() {
    var r = Bc(e), o;
    if (t) {
      var i = Bc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return pH(this, o);
  };
}
function mH(e) {
  if (Array.isArray(e))
    return um(e);
}
function vH(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function gH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cT(e) {
  return mH(e) || vH(e) || uT(e) || gH();
}
function yH(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const bH = Math.min, SH = Math.max, Wc = Math.round, mu = Math.floor, Hc = (e) => ({
  x: e,
  y: e
});
function xH(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function dT(e) {
  return pT(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ln(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fT(e) {
  var t;
  return (t = (pT(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pT(e) {
  return e instanceof Node || e instanceof Ln(e).Node;
}
function cm(e) {
  return e instanceof Element || e instanceof Ln(e).Element;
}
function Ag(e) {
  return e instanceof HTMLElement || e instanceof Ln(e).HTMLElement;
}
function lS(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ln(e).ShadowRoot;
}
function hT(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Dg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function wH() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function CH(e) {
  return ["html", "body", "#document"].includes(dT(e));
}
function Dg(e) {
  return Ln(e).getComputedStyle(e);
}
function kH(e) {
  if (dT(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    lS(e) && e.host || // Fallback.
    fT(e)
  );
  return lS(t) ? t.host : t;
}
function mT(e) {
  const t = kH(e);
  return CH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ag(t) && hT(t) ? t : mT(t);
}
function Uc(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = mT(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ln(o);
  return i ? t.concat(a, a.visualViewport || [], hT(o) ? o : [], a.frameElement && n ? Uc(a.frameElement) : []) : t.concat(o, Uc(o, [], n));
}
function PH(e) {
  const t = Dg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ag(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Wc(n) !== i || Wc(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Fg(e) {
  return cm(e) ? e : e.contextElement;
}
function Pp(e) {
  const t = Fg(e);
  if (!Ag(t))
    return Hc(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = PH(t);
  let a = (i ? Wc(n.width) : n.width) / r, s = (i ? Wc(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const TH = /* @__PURE__ */ Hc(0);
function _H(e) {
  const t = Ln(e);
  return !wH() || !t.visualViewport ? TH : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function EH(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ln(e) ? !1 : t;
}
function uS(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Fg(e);
  let a = Hc(1);
  t && (r ? cm(r) && (a = Pp(r)) : a = Pp(e));
  const s = EH(i, n, r) ? _H(i) : Hc(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Ln(i), p = r && cm(r) ? Ln(r) : r;
    let v = f.frameElement;
    for (; v && r && p !== f; ) {
      const g = Pp(v), S = v.getBoundingClientRect(), m = Dg(v), h = S.left + (v.clientLeft + parseFloat(m.paddingLeft)) * g.x, b = S.top + (v.clientTop + parseFloat(m.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, d *= g.y, l += h, u += b, v = Ln(v).frameElement;
    }
  }
  return xH({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function OH(e, t) {
  let n = null, r;
  const o = fT(e);
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
    const p = mu(c), v = mu(o.clientWidth - (u + d)), g = mu(o.clientHeight - (c + f)), S = mu(u), h = {
      rootMargin: -p + "px " + -v + "px " + -g + "px " + -S + "px",
      threshold: SH(0, bH(1, l)) || 1
    };
    let b = !0;
    function x(k) {
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
      n = new IntersectionObserver(x, {
        ...h,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, h);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function MH(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Fg(e), c = o || i ? [...u ? Uc(u) : [], ...Uc(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), i && m.addEventListener("resize", n);
  });
  const d = u && s ? OH(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let v, g = l ? uS(e) : null;
  l && S();
  function S() {
    const m = uS(e);
    g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && n(), g = m, v = requestAnimationFrame(S);
  }
  return n(), () => {
    c.forEach((m) => {
      o && m.removeEventListener("scroll", n), i && m.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(v);
  };
}
var dm = y.useLayoutEffect, IH = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Gc = function() {
};
function RH(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function $H(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(RH(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var cS = function(t) {
  return BH(t) ? t.filter(Boolean) : Ko(t) === "object" && t !== null ? [t] : [];
}, vT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Or(t, IH);
  return Z({}, n);
}, Ue = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function Xd(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function AH(e) {
  return Xd(e) ? window.innerHeight : e.clientHeight;
}
function gT(e) {
  return Xd(e) ? window.pageYOffset : e.scrollTop;
}
function Kc(e, t) {
  if (Xd(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function DH(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function FH(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function vu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Gc, o = gT(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = FH(s, o, i, n);
    Kc(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function dS(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? Kc(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && Kc(e, Math.max(t.offsetTop - o, 0));
}
function LH(e) {
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
function fS() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function zH() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var yT = !1, NH = {
  get passive() {
    return yT = !0;
  }
}, gu = typeof window < "u" ? window : {};
gu.addEventListener && gu.removeEventListener && (gu.addEventListener("p", Gc, NH), gu.removeEventListener("p", Gc, !1));
var jH = yT;
function VH(e) {
  return e != null;
}
function BH(e) {
  return Array.isArray(e);
}
function yu(e, t, n) {
  return e ? t : n;
}
var WH = function(t) {
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
}, HH = ["children", "innerProps"], UH = ["children", "innerProps"];
function GH(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = DH(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, v = f.height, g = f.top, S = n.offsetParent.getBoundingClientRect(), m = S.top, h = a ? window.innerHeight : AH(l), b = gT(l), x = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = m - k, T = h - g, _ = P + b, M = d - b - g, I = p - h + b + x, D = b + g - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (T >= v)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= v && !a)
        return i && vu(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && T >= r) {
        i && vu(l, I, G);
        var H = a ? T - x : M - x;
        return {
          placement: "bottom",
          maxHeight: H
        };
      }
      if (o === "auto" || a) {
        var L = t, W = a ? P : _;
        return W >= r && (L = Math.min(W - x - s, t)), {
          placement: "top",
          maxHeight: L
        };
      }
      if (o === "bottom")
        return i && Kc(l, I), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (P >= v)
        return {
          placement: "top",
          maxHeight: t
        };
      if (_ >= v && !a)
        return i && vu(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && _ >= r || a && P >= r) {
        var K = t;
        return (!a && _ >= r || a && P >= r) && (K = a ? P - k : _ - k), i && vu(l, D, G), {
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
function KH(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var bT = function(t) {
  return t === "auto" ? "bottom" : t;
}, YH = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return Z((r = {
    label: "menu"
  }, Di(r, KH(o), "100%"), Di(r, "position", "absolute"), Di(r, "width", "100%"), Di(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, ST = /* @__PURE__ */ y.createContext(null), qH = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = y.useContext(ST) || {}, c = u.setPortalPlacement, d = y.useRef(null), f = y.useState(o), p = Sr(f, 2), v = p[0], g = p[1], S = y.useState(null), m = Sr(S, 2), h = m[0], b = m[1], x = l.spacing.controlHeight;
  return dm(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", T = s && !P, _ = GH({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: T,
        isFixedPosition: P,
        controlHeight: x
      });
      g(_.maxHeight), b(_.placement), c == null || c(_.placement);
    }
  }, [o, i, a, s, r, c, x]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: h || bT(i),
      maxHeight: v
    })
  });
}, XH = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return ee("div", q({}, Ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, QH = XH, ZH = function(t, n) {
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
}, JH = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return ee("div", q({}, Ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, xT = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, eU = xT, tU = xT, nU = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Or(t, HH);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, rU = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Or(t, UH);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, oU = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, iU = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = y.useRef(null), u = y.useRef(null), c = y.useState(bT(a)), d = Sr(c, 2), f = d[0], p = d[1], v = y.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), g = y.useState(null), S = Sr(g, 2), m = S[0], h = S[1], b = y.useCallback(function() {
    if (o) {
      var T = LH(o), _ = s === "fixed" ? 0 : window.pageYOffset, M = T[f] + _;
      (M !== (m == null ? void 0 : m.offset) || T.left !== (m == null ? void 0 : m.rect.left) || T.width !== (m == null ? void 0 : m.rect.width)) && h({
        offset: M,
        rect: T
      });
    }
  }, [o, s, f, m == null ? void 0 : m.offset, m == null ? void 0 : m.rect.left, m == null ? void 0 : m.rect.width]);
  dm(function() {
    b();
  }, [b]);
  var x = y.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = MH(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  dm(function() {
    x();
  }, [x]);
  var k = y.useCallback(function(T) {
    l.current = T, x();
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
  return ee(ST.Provider, {
    value: v
  }, n ? /* @__PURE__ */ fd.createPortal(P, n) : P);
}, aU = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, sU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return ee("div", q({}, Ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, lU = function(t, n) {
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
}, uU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return ee("div", q({}, Ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, cU = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, dU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, pS, fU = ["size"], pU = ["innerProps", "isRtl", "size"], hU = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, wT = function(t) {
  var n = t.size, r = Or(t, fU);
  return ee("svg", q({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: hU
  }, r));
}, Lg = function(t) {
  return ee(wT, q({
    size: 20
  }, t), ee("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, CT = function(t) {
  return ee(wT, q({
    size: 20
  }, t), ee("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, kT = function(t, n) {
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
}, mU = kT, vU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || ee(CT, null));
}, gU = kT, yU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || ee(Lg, null));
}, bU = function(t, n) {
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
}, SU = function(t) {
  var n = t.innerProps;
  return ee("span", q({}, n, Ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, xU = rC(pS || (pS = yH([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), wU = function(t, n) {
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
}, Tp = function(t) {
  var n = t.delay, r = t.offset;
  return ee("span", {
    css: /* @__PURE__ */ wv({
      animation: "".concat(xU, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, CU = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = Or(t, pU);
  return ee("div", q({}, Ue(Z(Z({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), ee(Tp, {
    delay: 0,
    offset: r
  }), ee(Tp, {
    delay: 160,
    offset: !0
  }), ee(Tp, {
    delay: 320,
    offset: !r
  }));
}, kU = function(t, n) {
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
}, PU = function(t) {
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
}, TU = PU, _U = ["data"], EU = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, OU = function(t) {
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
}, MU = function(t, n) {
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
}, IU = function(t) {
  var n = vT(t);
  n.data;
  var r = Or(n, _U);
  return ee("div", q({}, Ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, RU = OU, $U = ["innerRef", "isDisabled", "isHidden", "inputClassName"], AU = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, DU), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, PT = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, DU = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, PT)
}, FU = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, PT);
}, LU = function(t) {
  var n = t.cx, r = t.value, o = vT(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Or(o, $U);
  return ee("div", q({}, Ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), ee("input", q({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: FU(s),
    disabled: a
  }, u)));
}, zU = LU, NU = function(t, n) {
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
}, jU = function(t, n) {
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
}, VU = function(t, n) {
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
}, TT = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", r, n);
}, BU = TT, WU = TT;
function HU(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(Lg, {
    size: 14
  }));
}
var UU = function(t) {
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
}, GU = UU, KU = function(t, n) {
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
}, YU = function(t) {
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
}, qU = YU, XU = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, QU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, ZU = QU, JU = function(t, n) {
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
}, eG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return ee("div", q({}, Ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, tG = eG, nG = {
  ClearIndicator: yU,
  Control: TU,
  DropdownIndicator: vU,
  DownChevron: CT,
  CrossIcon: Lg,
  Group: RU,
  GroupHeading: IU,
  IndicatorsContainer: dU,
  IndicatorSeparator: SU,
  Input: zU,
  LoadingIndicator: CU,
  Menu: QH,
  MenuList: JH,
  MenuPortal: iU,
  LoadingMessage: rU,
  NoOptionsMessage: nU,
  MultiValue: GU,
  MultiValueContainer: BU,
  MultiValueLabel: WU,
  MultiValueRemove: HU,
  Option: qU,
  Placeholder: ZU,
  SelectContainer: sU,
  SingleValue: tG,
  ValueContainer: uU
}, rG = function(t) {
  return Z(Z({}, nG), t.components);
}, hS = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function oG(e, t) {
  return !!(e === t || hS(e) && hS(t));
}
function iG(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!oG(e[n], t[n]))
      return !1;
  return !0;
}
function aG(e, t) {
  t === void 0 && (t = iG);
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
var sG = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, lG = function(t) {
  return ee("span", q({
    css: sG
  }, t));
}, mS = lG, uG = {
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
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(v, g) {
      return v && v.length ? "".concat(v.indexOf(g) + 1, " of ").concat(v.length) : "";
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
}, cG = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, v = l.isOptionDisabled, g = l.isSearchable, S = l.menuIsOpen, m = l.options, h = l.screenReaderStatus, b = l.tabSelectsValue, x = l["aria-label"], k = l["aria-live"], P = y.useMemo(function() {
    return Z(Z({}, uG), c || {});
  }, [c]), T = y.useMemo(function() {
    var L = "";
    if (n && P.onChange) {
      var W = n.option, K = n.options, $ = n.removedValue, A = n.removedValues, z = n.value, U = function(se) {
        return Array.isArray(se) ? null : se;
      }, V = $ || W || U(z), Y = V ? d(V) : "", N = K || A || void 0, te = N ? N.map(d) : [], le = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: V && v(V, s),
        label: Y,
        labels: te
      }, n);
      L = P.onChange(le);
    }
    return L;
  }, [n, P, v, s, d]), _ = y.useMemo(function() {
    var L = "", W = r || o, K = !!(r && s && s.includes(r));
    if (W && P.onFocus) {
      var $ = {
        focused: W,
        label: d(W),
        isDisabled: v(W, s),
        isSelected: K,
        options: i,
        context: W === r ? "menu" : "value",
        selectValue: s
      };
      L = P.onFocus($);
    }
    return L;
  }, [r, o, d, v, P, i, s]), M = y.useMemo(function() {
    var L = "";
    if (S && m.length && P.onFilter) {
      var W = h({
        count: i.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: W
      });
    }
    return L;
  }, [i, f, S, P, m, h]), I = y.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : S ? "menu" : "input";
      L = P.guidance({
        "aria-label": x,
        context: W,
        isDisabled: r && v(r, s),
        isMulti: p,
        isSearchable: g,
        tabSelectsValue: b
      });
    }
    return L;
  }, [x, r, o, p, v, g, S, P, s, b]), D = "".concat(_, " ").concat(M, " ").concat(I), G = ee(y.Fragment, null, ee("span", {
    id: "aria-selection"
  }, T), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(y.Fragment, null, ee(mS, {
    id: u
  }, H && G), ee(mS, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, dG = cG, fm = [{
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
}], fG = new RegExp("[" + fm.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), _T = {};
for (var _p = 0; _p < fm.length; _p++)
  for (var Ep = fm[_p], Op = 0; Op < Ep.letters.length; Op++)
    _T[Ep.letters[Op]] = Ep.base;
var ET = function(t) {
  return t.replace(fG, function(n) {
    return _T[n];
  });
}, pG = aG(ET), vS = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, hG = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, mG = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: hG,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? vS(r) : r, d = l ? vS(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = pG(c), d = ET(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, vG = ["innerRef"];
function gG(e) {
  var t = e.innerRef, n = Or(e, vG), r = WH(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ wv({
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
var yG = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function bG(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = y.useRef(!1), s = y.useRef(!1), l = y.useRef(0), u = y.useRef(null), c = y.useCallback(function(S, m) {
    if (u.current !== null) {
      var h = u.current, b = h.scrollTop, x = h.scrollHeight, k = h.clientHeight, P = u.current, T = m > 0, _ = x - k - b, M = !1;
      _ > m && a.current && (r && r(S), a.current = !1), T && s.current && (i && i(S), s.current = !1), T && m > _ ? (n && !a.current && n(S), P.scrollTop = x, M = !0, a.current = !0) : !T && -m > b && (o && !s.current && o(S), P.scrollTop = 0, M = !0, s.current = !0), M && yG(S);
    }
  }, [n, r, o, i]), d = y.useCallback(function(S) {
    c(S, S.deltaY);
  }, [c]), f = y.useCallback(function(S) {
    l.current = S.changedTouches[0].clientY;
  }, []), p = y.useCallback(function(S) {
    var m = l.current - S.changedTouches[0].clientY;
    c(S, m);
  }, [c]), v = y.useCallback(function(S) {
    if (S) {
      var m = jH ? {
        passive: !1
      } : !1;
      S.addEventListener("wheel", d, m), S.addEventListener("touchstart", f, m), S.addEventListener("touchmove", p, m);
    }
  }, [p, f, d]), g = y.useCallback(function(S) {
    S && (S.removeEventListener("wheel", d, !1), S.removeEventListener("touchstart", f, !1), S.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return y.useEffect(function() {
    if (t) {
      var S = u.current;
      return v(S), function() {
        g(S);
      };
    }
  }, [t, v, g]), function(S) {
    u.current = S;
  };
}
var gS = ["boxSizing", "height", "overflow", "paddingRight", "position"], yS = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function bS(e) {
  e.preventDefault();
}
function SS(e) {
  e.stopPropagation();
}
function xS() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function wS() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var CS = !!(typeof window < "u" && window.document && window.document.createElement), Ha = 0, fi = {
  capture: !1,
  passive: !1
};
function SG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = y.useRef({}), i = y.useRef(null), a = y.useCallback(function(l) {
    if (CS) {
      var u = document.body, c = u && u.style;
      if (r && gS.forEach(function(v) {
        var g = c && c[v];
        o.current[v] = g;
      }), r && Ha < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(yS).forEach(function(v) {
          var g = yS[v];
          c && (c[v] = g);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && wS() && (u.addEventListener("touchmove", bS, fi), l && (l.addEventListener("touchstart", xS, fi), l.addEventListener("touchmove", SS, fi))), Ha += 1;
    }
  }, [r]), s = y.useCallback(function(l) {
    if (CS) {
      var u = document.body, c = u && u.style;
      Ha = Math.max(Ha - 1, 0), r && Ha < 1 && gS.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && wS() && (u.removeEventListener("touchmove", bS, fi), l && (l.removeEventListener("touchstart", xS, fi), l.removeEventListener("touchmove", SS, fi)));
    }
  }, [r]);
  return y.useEffect(function() {
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
var xG = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, wG = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function CG(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = bG({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = SG({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return ee(y.Fragment, null, n && ee("div", {
    onClick: xG,
    css: wG
  }), t(d));
}
var kG = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, PG = function(t) {
  var n = t.name, r = t.onFocus;
  return ee("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: kG,
    value: "",
    onChange: function() {
    }
  });
}, TG = PG, _G = function(t) {
  return t.label;
}, EG = function(t) {
  return t.label;
}, OG = function(t) {
  return t.value;
}, MG = function(t) {
  return !!t.isDisabled;
}, IG = {
  clearIndicator: gU,
  container: aU,
  control: kU,
  dropdownIndicator: mU,
  group: EU,
  groupHeading: MU,
  indicatorsContainer: cU,
  indicatorSeparator: bU,
  input: AU,
  loadingIndicator: wU,
  loadingMessage: tU,
  menu: YH,
  menuList: ZH,
  menuPortal: oU,
  multiValue: NU,
  multiValueLabel: jU,
  multiValueRemove: VU,
  noOptionsMessage: eU,
  option: KU,
  placeholder: XU,
  singleValue: JU,
  valueContainer: lU
}, RG = {
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
}, $G = 4, OT = 4, AG = 38, DG = OT * 2, FG = {
  baseUnit: OT,
  controlHeight: AG,
  menuGutter: DG
}, Mp = {
  borderRadius: $G,
  colors: RG,
  spacing: FG
}, LG = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: fS(),
  captureMenuScroll: !fS(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: mG(),
  formatGroupLabel: _G,
  getOptionLabel: EG,
  getOptionValue: OG,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: MG,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !zH(),
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
function kS(e, t, n, r) {
  var o = $T(e, t, n), i = AT(e, t, n), a = RT(e, t), s = Yc(e, t);
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
function MT(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return kS(e, a, t, s);
      }).filter(function(a) {
        return PS(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = kS(e, n, t, r);
    return PS(e, i) ? i : void 0;
  }).filter(VH);
}
function IT(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, cT(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function zG(e, t) {
  return IT(MT(e, t));
}
function PS(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!FT(e) || !i) && DT(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function NG(e, t) {
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
function jG(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var RT = function(t, n) {
  return t.getOptionLabel(n);
}, Yc = function(t, n) {
  return t.getOptionValue(n);
};
function $T(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function AT(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = Yc(e, t);
  return n.some(function(o) {
    return Yc(e, o) === r;
  });
}
function DT(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var FT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, VG = 1, LT = /* @__PURE__ */ function(e) {
  cH(n, e);
  var t = hH(n);
  function n(r) {
    var o;
    if (lH(this, n), o = t.call(this, r), o.state = {
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
      var l = o.props, u = l.blurInputOnSelect, c = l.isMulti, d = l.name, f = o.state.selectValue, p = c && o.isOptionSelected(s, f), v = o.isOptionDisabled(s, f);
      if (p) {
        var g = o.getOptionValue(s);
        o.setValue(f.filter(function(S) {
          return o.getOptionValue(S) !== g;
        }), "deselect-option", s);
      } else if (!v)
        c ? o.setValue([].concat(cT(f), [s]), "select-option", s) : o.setValue(s, "select-option");
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
      }), f = yu(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(yu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = yu(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return $H.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return RT(o.props, s);
    }, o.getOptionValue = function(s) {
      return Yc(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = IG[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return rG(o.props);
    }, o.buildCategorizedOptions = function() {
      return MT(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return IT(o.buildCategorizedOptions());
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
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && Xd(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
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
      return FT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, v = l.isDisabled, g = l.menuIsOpen, S = l.onKeyDown, m = l.tabSelectsValue, h = l.openMenuOnFocus, b = o.state, x = b.focusedOption, k = b.focusedValue, P = b.selectValue;
      if (!v && !(typeof S == "function" && (S(s), s.defaultPrevented))) {
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
            if (o.isComposing || s.shiftKey || !g || !m || !x || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            h && o.isOptionSelected(x, P))
              return;
            o.selectOption(x);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (g) {
              if (!x || o.isComposing)
                return;
              o.selectOption(x);
              break;
            }
            return;
          case "Escape":
            g ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!g) {
              o.openMenu("first");
              break;
            }
            if (!x)
              return;
            o.selectOption(x);
            break;
          case "ArrowUp":
            g ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            g ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!g)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!g)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!g)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!g)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++VG), o.state.selectValue = cS(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return uH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && dS(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (dS(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Mp) : Z(Z({}, Mp), this.props.theme) : Mp;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, v = d.options, g = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: g,
        isMulti: f,
        isRtl: p,
        options: v,
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
      return $T(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return AT(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return DT(this.props, o, i);
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
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), v = p.Input, g = this.state, S = g.inputIsHidden, m = g.ariaSelection, h = this.commonProps, b = s || this.getElementId("input"), x = Z(Z(Z({
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
        return a ? /* @__PURE__ */ y.createElement(v, q({}, h, {
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
        }, x)) : /* @__PURE__ */ y.createElement(gG, q({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Gc,
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
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, v = p.controlShouldRenderValue, g = p.isDisabled, S = p.isMulti, m = p.inputValue, h = p.placeholder, b = this.state, x = b.selectValue, k = b.focusedValue, P = b.isFocused;
      if (!this.hasValue() || !v)
        return m ? null : /* @__PURE__ */ y.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: g,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), h);
      if (S)
        return x.map(function(_, M) {
          var I = _ === k, D = "".concat(o.getOptionLabel(_), "-").concat(o.getOptionValue(_));
          return /* @__PURE__ */ y.createElement(a, q({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: I,
            isDisabled: g,
            key: D,
            index: M,
            removeProps: {
              onClick: function() {
                return o.removeValue(_);
              },
              onTouchEnd: function() {
                return o.removeValue(_);
              },
              onMouseDown: function(H) {
                H.preventDefault();
              }
            },
            data: _
          }), o.formatOptionLabel(_, "value"));
        });
      if (m)
        return null;
      var T = x[0];
      return /* @__PURE__ */ y.createElement(c, q({}, f, {
        data: T,
        isDisabled: g
      }), this.formatOptionLabel(T, "value"));
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
      return /* @__PURE__ */ y.createElement(i, q({}, a, {
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
      return /* @__PURE__ */ y.createElement(i, q({}, a, {
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
      return /* @__PURE__ */ y.createElement(a, q({}, s, {
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
      return /* @__PURE__ */ y.createElement(i, q({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, v = this.commonProps, g = this.state.focusedOption, S = this.props, m = S.captureMenuScroll, h = S.inputValue, b = S.isLoading, x = S.loadingMessage, k = S.minMenuHeight, P = S.maxMenuHeight, T = S.menuIsOpen, _ = S.menuPlacement, M = S.menuPosition, I = S.menuPortalTarget, D = S.menuShouldBlockScroll, G = S.menuShouldScrollIntoView, H = S.noOptionsMessage, L = S.onMenuScrollToTop, W = S.onMenuScrollToBottom;
      if (!T)
        return null;
      var K = function(N, te) {
        var le = N.type, ie = N.data, se = N.isDisabled, me = N.isSelected, Ce = N.label, et = N.value, qe = g === ie, on = se ? void 0 : function() {
          return o.onOptionHover(ie);
        }, Pn = se ? void 0 : function() {
          return o.selectOption(ie);
        }, Mr = "".concat(o.getElementId("option"), "-").concat(te), fe = {
          id: Mr,
          onClick: Pn,
          onMouseMove: on,
          onMouseOver: on,
          tabIndex: -1
        };
        return /* @__PURE__ */ y.createElement(p, q({}, v, {
          innerProps: fe,
          data: ie,
          isDisabled: se,
          isSelected: me,
          key: Mr,
          label: Ce,
          type: le,
          value: et,
          isFocused: qe,
          innerRef: qe ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(N.data, "menu"));
      }, $;
      if (this.hasOptions())
        $ = this.getCategorizedOptions().map(function(Y) {
          if (Y.type === "group") {
            var N = Y.data, te = Y.options, le = Y.index, ie = "".concat(o.getElementId("group"), "-").concat(le), se = "".concat(ie, "-heading");
            return /* @__PURE__ */ y.createElement(a, q({}, v, {
              key: ie,
              data: N,
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
        var A = x({
          inputValue: h
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ y.createElement(d, v, A);
      } else {
        var z = H({
          inputValue: h
        });
        if (z === null)
          return null;
        $ = /* @__PURE__ */ y.createElement(f, v, z);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: _,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ y.createElement(qH, q({}, v, U), function(Y) {
        var N = Y.ref, te = Y.placerProps, le = te.placement, ie = te.maxHeight;
        return /* @__PURE__ */ y.createElement(l, q({}, v, U, {
          innerRef: N,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: le
        }), /* @__PURE__ */ y.createElement(CG, {
          captureEnabled: m,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ y.createElement(u, q({}, v, {
            innerRef: function(Ce) {
              o.getMenuListRef(Ce), se(Ce);
            },
            isLoading: b,
            maxHeight: ie,
            focusedOption: g
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ y.createElement(c, q({}, v, {
        appendTo: I,
        controlElement: this.controlRef,
        menuPlacement: _,
        menuPosition: M
      }), V) : V;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, i = this.props, a = i.delimiter, s = i.isDisabled, l = i.isMulti, u = i.name, c = i.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ y.createElement(TG, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(g) {
              return o.getOptionValue(g);
            }).join(a);
            return /* @__PURE__ */ y.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(g, S) {
              return /* @__PURE__ */ y.createElement("input", {
                key: "i-".concat(S),
                name: u,
                type: "hidden",
                value: o.getOptionValue(g)
              });
            }) : /* @__PURE__ */ y.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ y.createElement("div", null, p);
          }
        else {
          var v = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ y.createElement("input", {
            name: u,
            type: "hidden",
            value: v
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, i = this.state, a = i.ariaSelection, s = i.focusedOption, l = i.focusedValue, u = i.isFocused, c = i.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ y.createElement(dG, q({}, o, {
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
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, v = this.state.isFocused, g = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ y.createElement(s, q({}, g, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: v
      }), this.renderLiveRegion(), /* @__PURE__ */ y.createElement(i, q({}, g, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: v,
        menuIsOpen: p
      }), /* @__PURE__ */ y.createElement(l, q({}, g, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ y.createElement(a, q({}, g, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, v = o.menuIsOpen, g = o.inputValue, S = o.isMulti, m = cS(p), h = {};
      if (a && (p !== a.value || f !== a.options || v !== a.menuIsOpen || g !== a.inputValue)) {
        var b = v ? zG(o, m) : [], x = s ? NG(i, m) : null, k = jG(i, b);
        h = {
          selectValue: m,
          focusedOption: k,
          focusedValue: x,
          clearFocusValueOnUpdate: !1
        };
      }
      var P = l != null && o !== a ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, T = u, _ = c && d;
      return c && !_ && (T = {
        value: yu(S, m, m[0] || null),
        options: m,
        action: "initial-input-focus"
      }, _ = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (T = null), Z(Z(Z({}, h), P), {}, {
        prevProps: o,
        ariaSelection: T,
        prevWasFocused: _
      });
    }
  }]), n;
}(y.Component);
LT.defaultProps = LG;
var BG = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = sH(e);
  return /* @__PURE__ */ y.createElement(LT, q({
    ref: t
  }, n));
}), WG = BG, HG = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function pm() {
  return pm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pm.apply(this, arguments);
}
function UG(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var zT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = UG(t, HG);
  return pm({}, n);
}, GG = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, KG = function(t) {
  return GG(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, Nn = function(t) {
  var n = po(), r = KG(n.components.Input.defaultProps.size), o = t ?? r, i = _9(typeof o == "string" ? [o] : o, {
    fallback: "md"
  }) || r;
  return i;
};
function ga() {
  return ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ga.apply(this, arguments);
}
var YG = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = ga({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, a ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ re.createElement(Ae, ga({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, qG = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, v = l.controlShouldRenderValue, g = Nn(c), S = Ct("Input", {
    size: g,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), m = {
    display: i && a && v ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: S.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, h = u != null && u.valueContainer ? u.valueContainer(m, t) : m;
  return /* @__PURE__ */ re.createElement(Ae, ga({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: h
  }), n);
}, XG = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ re.createElement(Ae, ga({}, i, {
    className: o({
      indicators: !0
    }, r),
    sx: l
  }), n);
}, QG = ["height", "h"];
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
function ZG(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var JG = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, v = c.focusBorderColor, g = c.errorBorderColor, S = c.isInvalid, m = c.isReadOnly, h = Nn(f), b = Ct("Input", {
    size: h,
    variant: p,
    focusBorderColor: v,
    errorBorderColor: g
  }), x = b.field, k = x.height, P = x.h, T = ZG(x, QG), _ = k || P, M = wn({}, T, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 0,
    overflow: "hidden",
    height: "auto",
    minH: _
  }, s ? {
    pointerEvents: "none"
  } : {}), I = d != null && d.control ? d.control(M, t) : M;
  return /* @__PURE__ */ re.createElement(Ae, wn({
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
    "data-readonly": m ? !0 : void 0
  }), o);
}, eK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = wn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ re.createElement(x2, {
    className: r({
      "indicator-separator": !0
    }, n),
    sx: u,
    orientation: "vertical"
  });
}, tK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, nK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = Nn(u), v = Ct("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), g = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, S = g[p], m = wn({}, v.addon, {
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
  }), h = s != null && s.dropdownIndicator ? s.dropdownIndicator(m, t) : m, b = {
    height: "1em",
    width: "1em"
  }, x = s != null && s.downChevron ? s.downChevron(b, t) : b;
  return /* @__PURE__ */ re.createElement(Ae, wn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: h
  }), n || /* @__PURE__ */ re.createElement(tK, {
    sx: x
  }));
}, rK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, oK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = Nn(l), c = Qo("CloseButton", {
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
  }, v = s != null && s.crossIcon ? s.crossIcon(p, t) : p;
  return /* @__PURE__ */ re.createElement(Ae, wn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ re.createElement(rK, {
    sx: v
  }));
}, iK = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = Nn(s), v = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, g = v[p], S = {
    marginRight: 3
  }, m = a != null && a.loadingIndicator ? a.loadingIndicator(S, t) : S;
  return /* @__PURE__ */ re.createElement(Nd, wn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: m
  }, o, {
    size: f || g,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const aK = JG;
var sK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
function Ps() {
  return Ps = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ps.apply(this, arguments);
}
function lK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var uK = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = zT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = lK(l, sK), v = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, g = {
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
    _after: Ps({
      content: 'attr(data-value) " "',
      visibility: "hidden",
      whiteSpace: "pre",
      padding: 0
    }, v)
  }, S = a != null && a.inputContainer ? a.inputContainer(g, t) : g, m = Ps({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, v), h = a != null && a.input ? a.input(m, t) : m;
  return /* @__PURE__ */ re.createElement(Ae, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: S
  }, /* @__PURE__ */ re.createElement(X.input, Ps({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: h,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const cK = uK;
var dK = ["data"];
function fK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
var pK = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, hK = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[pK(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ re.createElement(Cg, null, /* @__PURE__ */ re.createElement(Ae, Bt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const mK = hK;
var vK = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, v = c.focusBorderColor, g = c.errorBorderColor, S = Ct("Menu"), m = Nn(f), h = Ct("Input", {
    size: m,
    variant: p,
    focusBorderColor: v,
    errorBorderColor: g
  }), b = h.field, x = Bt({}, S.list, {
    minW: "100%",
    maxHeight: s + "px",
    overflowY: "auto",
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": b == null ? void 0 : b["--input-border-radius"],
    borderRadius: (b == null ? void 0 : b.borderRadius) || ((n = S.list) == null ? void 0 : n.borderRadius),
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }), k = d != null && d.menuList ? d.menuList(x, t) : x;
  return /* @__PURE__ */ re.createElement(Ae, Bt({
    role: "listbox"
  }, u, {
    className: o({
      "menu-list": !0,
      "menu-list--is-multi": l
    }, r),
    sx: k,
    ref: i
  }), a);
}, gK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = Nn(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.loadingMessage ? s.loadingMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Ae, Bt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--loading": !0
    }, r),
    sx: f
  }), n);
}, yK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = Nn(l), c = {
    sm: "6px",
    md: "8px",
    lg: "10px"
  }, d = {
    color: "chakra-subtle-text",
    textAlign: "center",
    paddingY: c[u],
    fontSize: u
  }, f = s != null && s.noOptionsMessage ? s.noOptionsMessage(d, t) : d;
  return /* @__PURE__ */ re.createElement(Ae, Bt({}, i, {
    className: o({
      "menu-notice": !0,
      "menu-notice--no-options": !0
    }, r),
    sx: f
  }), n);
}, bK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, v = {}, g = p != null && p.group ? p.group(v, t) : v;
  return /* @__PURE__ */ re.createElement(Ae, Bt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: g
  }), /* @__PURE__ */ re.createElement(s, Bt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ re.createElement(Ae, null, n));
}, SK = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = zT(t);
  l.data;
  var u = fK(l, dK), c = Ct("Menu"), d = Nn(a), f = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, p = {
    sm: "0.4rem 0.8rem",
    md: "0.5rem 1rem",
    lg: "0.6rem 1.2rem"
  }, v = Bt({}, c.groupTitle, {
    fontSize: f[d],
    padding: p[d],
    margin: 0,
    borderBottomWidth: s ? "1px" : 0,
    position: s ? "sticky" : "static",
    top: -2,
    bg: c.list.bg,
    zIndex: 1
  }), g = i != null && i.groupHeading ? i.groupHeading(v, t) : v;
  return /* @__PURE__ */ re.createElement(Ae, Bt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: g
  }));
}, xK = function(t) {
  return /* @__PURE__ */ re.createElement("svg", Bt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ re.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, wK = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, v = c.hideSelectedOptions, g = c.selectedOptionStyle, S = c.selectedOptionColorScheme, m = Ct("Menu").item, h = Nn(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = xy(S + ".500", S + ".300"), P = xy("white", "black"), T = g === "check" && (!p || v === !1), _ = g === "color", M = Bt({}, m, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: h,
    paddingX: b[h],
    paddingY: x[h]
  }, _ && {
    _selected: {
      bg: k,
      color: P,
      _active: {
        bg: k
      }
    }
  }), I = d != null && d.option ? d.option(M, t) : M;
  return /* @__PURE__ */ re.createElement(Ae, Bt({
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
  }), T && /* @__PURE__ */ re.createElement(kg, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ re.createElement(xK, null)), a);
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
var CK = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, kK = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, NT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, PK = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, v = o.Label, g = o.Remove, S = d.chakraStyles, m = d.colorScheme, h = d.tagVariant, b = d.size, x = Nn(b), k = "", P = "", T = !1;
  CK(a) && (k = a.colorScheme), kK(a) && (P = a.variant), NT(a) && (T = a.isFixed);
  var _ = Ct("Tag", {
    size: x,
    colorScheme: k || m,
    variant: P || h || (T ? "solid" : "subtle")
  }), M = Rn({}, _.container, {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    // resolves flex/text-overflow bug
    margin: "0.125rem"
  }), I = S != null && S.multiValue ? S.multiValue(M, t) : M, D = Rn({}, _.label, {
    overflow: "hidden",
    textOverflow: f || f === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }), G = S != null && S.multiValueLabel ? S.multiValueLabel(D, t) : D, H = Rn({}, _.closeButton, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }), L = S != null && S.multiValueRemove ? S.multiValueRemove(H, t) : H;
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
  }, /* @__PURE__ */ re.createElement(v, {
    data: a,
    innerProps: {
      className: i({
        "multi-value__label": !0
      }, r)
    },
    sx: G,
    selectProps: d
  }, n), /* @__PURE__ */ re.createElement(g, {
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
}, TK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, _K = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, EK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, Rn({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, OK = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return NT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement(Ae, Rn({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement(EK, null));
};
const MK = PK;
function hm() {
  return hm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hm.apply(this, arguments);
}
var IK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement(Ae, hm({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const RK = IK;
function mm() {
  return mm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mm.apply(this, arguments);
}
var $K = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement(Ae, mm({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const AK = $K;
var DK = {
  ClearIndicator: oK,
  Control: aK,
  DropdownIndicator: nK,
  Group: bK,
  GroupHeading: SK,
  IndicatorSeparator: eK,
  IndicatorsContainer: XG,
  Input: cK,
  LoadingIndicator: iK,
  LoadingMessage: gK,
  Menu: mK,
  MenuList: vK,
  MultiValue: MK,
  MultiValueContainer: TK,
  MultiValueLabel: _K,
  MultiValueRemove: OK,
  NoOptionsMessage: yK,
  Option: wK,
  Placeholder: RK,
  SelectContainer: YG,
  SingleValue: AK,
  ValueContainer: qG
};
const FK = DK;
var LK = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
function qc() {
  return qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qc.apply(this, arguments);
}
function zK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var NK = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, v = t.tagVariant, g = t.selectedOptionStyle, S = g === void 0 ? "color" : g, m = t.selectedOptionColorScheme, h = t.selectedOptionColor, b = t.variant, x = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, T = P === void 0 ? {} : P, _ = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = zK(t, LK), G = po(), H = G.components.Input.defaultProps.variant, L = TP({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: _,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = S, $ = ["color", "check"];
  $.includes(S) || (K = "color");
  var A = m || h || "blue";
  typeof A != "string" && (A = "blue");
  var z = qc({
    // Allow overriding of custom components
    components: qc({}, FK, o),
    // Custom select props
    colorScheme: s,
    size: i,
    tagVariant: v,
    selectedOptionStyle: K,
    selectedOptionColorScheme: A,
    variant: b ?? H,
    chakraStyles: T,
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
const jK = NK;
function vm() {
  return vm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vm.apply(this, arguments);
}
var VK = /* @__PURE__ */ y.forwardRef(function(e, t) {
  var n = jK(e);
  return /* @__PURE__ */ re.createElement(WG, vm({
    ref: t
  }, n));
});
const BK = VK;
function WK({ workflow: e }) {
  var c;
  const [t, n] = y.useState([]), [r, o] = y.useState(""), i = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [a, s] = y.useState(i);
  if (y.useEffect(() => {
    Be && n(Be.listAll() ?? []);
  }, []), Be == null)
    return alert("Error: TagsTable is not loaded"), null;
  const l = t.map((d) => ({
    value: d.name,
    label: d.name
  })), u = 37 * 5;
  return /* @__PURE__ */ w.jsxs(Eg, { isLazy: !0, children: [
    /* @__PURE__ */ w.jsx(_g, { children: /* @__PURE__ */ w.jsx(Fn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ w.jsx(HW, { color: "#718096" }) }) }),
    /* @__PURE__ */ w.jsxs(Rg, { children: [
      /* @__PURE__ */ w.jsx(Og, {}),
      /* @__PURE__ */ w.jsx(Ig, {}),
      /* @__PURE__ */ w.jsx(J2, { children: /* @__PURE__ */ w.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ w.jsxs(Mg, { children: [
        /* @__PURE__ */ w.jsx(
          BK,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            defaultValue: i,
            onChange: (d) => {
              console.log(d), s(d), lm(e.id, {
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
        /* @__PURE__ */ w.jsxs(Gt, { gap: 4, mt: Math.min(u, t.length * 37), children: [
          /* @__PURE__ */ w.jsx(
            Wd,
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
            Fn,
            {
              iconSpacing: 1,
              leftIcon: /* @__PURE__ */ w.jsx($g, { size: 16 }),
              colorScheme: "teal",
              variant: "solid",
              size: "xs",
              px: 5,
              isDisabled: r.length === 0,
              onClick: () => {
                Be == null || Be.upsert(r), n((Be == null ? void 0 : Be.listAll()) ?? []), o("");
              },
              children: "New Tag"
            }
          )
        ] }),
        /* @__PURE__ */ w.jsx(HK, {})
      ] })
    ] })
  ] });
}
function HK() {
  const { isOpen: e, onOpen: t, onClose: n } = v2(), [r, o] = y.useState((Be == null ? void 0 : Be.listAll()) ?? []);
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(Fn, { size: "sm", onClick: t, leftIcon: /* @__PURE__ */ w.jsx(BW, {}), children: "Manage Tags" }),
    /* @__PURE__ */ w.jsxs(Ud, { isOpen: e, onClose: n, children: [
      /* @__PURE__ */ w.jsx(Yd, {}),
      /* @__PURE__ */ w.jsxs(Pg, { children: [
        /* @__PURE__ */ w.jsx(Kd, { children: "My Tags" }),
        /* @__PURE__ */ w.jsx(Tg, {}),
        /* @__PURE__ */ w.jsx(qd, { children: r.map((i) => /* @__PURE__ */ w.jsxs(Gt, { children: [
          /* @__PURE__ */ w.jsx(nT, { children: i.name }),
          /* @__PURE__ */ w.jsx(
            Js,
            {
              onClick: () => {
                Be == null || Be.delete(i.name), o((Be == null ? void 0 : Be.listAll()) ?? []);
              },
              "aria-label": "delete-tag",
              colorScheme: "red",
              variant: "ghost",
              icon: /* @__PURE__ */ w.jsx(aT, {})
            }
          )
        ] })) })
      ] })
    ] })
  ] });
}
function jT(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
function UK({ onclose: e }) {
  const [t, n] = y.useState([]), r = async () => {
    const o = await JW("workflows");
    if (console.log(o), o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return y.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ w.jsxs(Ud, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ w.jsx(Yd, {}),
    /* @__PURE__ */ w.jsxs(Pg, { children: [
      /* @__PURE__ */ w.jsx(Kd, { children: "Backups" }),
      /* @__PURE__ */ w.jsx(Tg, {}),
      /* @__PURE__ */ w.jsx(qd, { children: /* @__PURE__ */ w.jsx(kP, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ w.jsxs(yP, { children: [
          /* @__PURE__ */ w.jsx("h2", { children: /* @__PURE__ */ w.jsxs(vP, { children: [
            /* @__PURE__ */ w.jsxs(Ae, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              jT(i)
            ] }),
            /* @__PURE__ */ w.jsx(gP, {})
          ] }) }),
          /* @__PURE__ */ w.jsx(CP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ w.jsx(Ae, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function GK({}) {
  const { isOpen: e, onOpen: t, onClose: n } = v2();
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs(Cg, { isLazy: !0, children: [
      /* @__PURE__ */ w.jsx(
        V2,
        {
          as: Js,
          "aria-label": "Options",
          icon: /* @__PURE__ */ w.jsx(jW, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ w.jsx(j2, { children: /* @__PURE__ */ w.jsx(
        N2,
        {
          onClick: t,
          icon: /* @__PURE__ */ w.jsx(NW, { size: 16 }),
          fontSize: 16,
          children: "Backups"
        }
      ) })
    ] }),
    e && /* @__PURE__ */ w.jsx(UK, { onclose: n })
  ] });
}
function KK({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n
}) {
  const [r, o] = y.useState([]), { colorMode: i } = wa(), { curFlowID: a } = y.useContext(lT), [s, l] = y.useState(), [u, c] = y.useState(!1);
  y.useEffect(() => {
    const v = iS();
    o(v);
  }, []);
  const d = (v) => {
    tH(v);
    const g = iS();
    o(g);
  }, f = (v) => {
    l(v);
  }, p = r.filter((v) => {
    var g;
    return s == null ? !0 : (g = v.tags) == null ? void 0 : g.includes(s);
  });
  return /* @__PURE__ */ w.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ w.jsxs(
    vW,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ w.jsx(Yd, {}),
        /* @__PURE__ */ w.jsxs(Z2, { children: [
          /* @__PURE__ */ w.jsx(Kd, { children: /* @__PURE__ */ w.jsxs(Gt, { alignItems: "center", justifyContent: "space-between", children: [
            /* @__PURE__ */ w.jsxs(Gt, { children: [
              /* @__PURE__ */ w.jsx(Li, { mr: 6, children: "Workflows" }),
              /* @__PURE__ */ w.jsx(
                Fn,
                {
                  leftIcon: /* @__PURE__ */ w.jsx($g, {}),
                  variant: "outline",
                  size: "sm",
                  colorScheme: "teal",
                  onClick: n,
                  children: "New"
                }
              )
            ] }),
            /* @__PURE__ */ w.jsx(Gt, { alignItems: "center", children: /* @__PURE__ */ w.jsx(GK, {}) })
          ] }) }),
          /* @__PURE__ */ w.jsxs(qd, { children: [
            /* @__PURE__ */ w.jsxs(Gt, { spacing: 2, wrap: "wrap", mb: 6, children: [
              s != null && /* @__PURE__ */ w.jsx(
                Js,
                {
                  "aria-label": "Close",
                  size: "sm",
                  icon: /* @__PURE__ */ w.jsx(GW, {}),
                  onClick: () => l(void 0)
                }
              ),
              Be == null ? void 0 : Be.listAll().slice(0, u ? void 0 : 6).map((v) => /* @__PURE__ */ w.jsx(
                Fn,
                {
                  variant: "solid",
                  width: "auto",
                  flexShrink: 0,
                  size: "sm",
                  py: 4,
                  onClick: () => f(v.name),
                  isActive: s === v.name,
                  children: v.name
                }
              )),
              /* @__PURE__ */ w.jsx(
                Js,
                {
                  "aria-label": "Show-all-tags",
                  size: "sm",
                  icon: u ? /* @__PURE__ */ w.jsx(LW, {}) : /* @__PURE__ */ w.jsx(FW, {}),
                  onClick: () => c(!u)
                }
              )
            ] }),
            p.map((v) => {
              const g = v.id === a;
              return /* @__PURE__ */ w.jsxs(Gt, { w: "100%", justify: "space-between", children: [
                /* @__PURE__ */ w.jsxs(
                  Ae,
                  {
                    as: "button",
                    textAlign: "left",
                    backgroundColor: g ? "teal.200" : void 0,
                    color: g ? "#333" : void 0,
                    w: "90%",
                    borderRadius: 6,
                    p: 2,
                    mb: 2,
                    onClick: () => {
                      t(v.id);
                    },
                    _hover: {
                      bg: i === "light" ? "gray.200" : "#4A5568"
                    },
                    _active: {
                      bg: "#dddfe2",
                      transform: "scale(0.98)",
                      borderColor: "#bec3c9"
                    },
                    children: [
                      /* @__PURE__ */ w.jsx(Li, { fontWeight: "500", children: v.name ?? "untitled" }),
                      /* @__PURE__ */ w.jsxs(Li, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                        "Updated: ",
                        jT(v.updateTime)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ w.jsx(WK, { workflow: v }),
                /* @__PURE__ */ w.jsx(Eg, { children: ({ isOpen: S, onClose: m }) => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
                  /* @__PURE__ */ w.jsx(_g, { children: /* @__PURE__ */ w.jsx(aT, { color: "#F56565", cursor: "pointer" }) }),
                  /* @__PURE__ */ w.jsxs(Rg, { children: [
                    /* @__PURE__ */ w.jsx(Og, {}),
                    /* @__PURE__ */ w.jsx(Ig, {}),
                    /* @__PURE__ */ w.jsxs(Mg, { children: [
                      /* @__PURE__ */ w.jsx(Li, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                      /* @__PURE__ */ w.jsx(
                        Fn,
                        {
                          colorScheme: "red",
                          size: "sm",
                          onClick: () => {
                            d(v.id), m();
                          },
                          children: "Yes, delete"
                        }
                      )
                    ] })
                  ] })
                ] }) })
              ] });
            })
          ] })
        ] })
      ]
    }
  ) });
}
const YK = {
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
function qK() {
  y.useState([]);
  const e = y.useRef({}), [t, n] = y.useState(null), [r, o] = y.useState("root"), [i, a] = y.useState(!0), [s, l] = y.useState(null), u = y.useRef(null), { colorMode: c, toggleColorMode: d } = wa(), f = (h) => {
    u.current = h, l(h);
  }, p = async () => {
    var x;
    const h = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(k) {
      },
      async addCustomNodeDefs(k) {
        e.current = k;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Rl.registerExtension(h);
    try {
      await eH();
    } catch (k) {
      console.error("error loading db", k);
    }
    a(!1);
    const b = localStorage.getItem("curFlowID");
    if (b)
      f(b), We && n(((x = We[b]) == null ? void 0 : x.name) ?? "");
    else {
      const k = localStorage.getItem("workflow"), P = oS(k ?? "");
      f(P.id), n(P.name ?? "");
    }
  };
  y.useEffect(() => {
    p(), setInterval(() => {
      if (u.current != null) {
        const h = JSON.stringify(Rl.graph.serialize());
        localStorage.setItem("curFlowID", u.current), h != null && lm(u.current, {
          json: h
        });
      }
    }, 1e3);
  }, []);
  const v = (h) => {
    u.current != null && lm(u.current, {
      name: h
    });
  }, g = y.useCallback(
    DM(v, 700),
    []
  ), S = (h) => {
    if (We == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    f(h);
    const b = We[h];
    if (b == null) {
      alert("Error: Workflow not found! id: " + h);
      return;
    }
    Rl.loadGraphData(JSON.parse(b.json)), n(b.name), o("root");
  }, m = () => {
    const h = YK, b = oS(JSON.stringify(h));
    f(b.id), n(b.name), Rl.loadGraphData(h);
  };
  return i ? null : /* @__PURE__ */ w.jsx(lT.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ w.jsxs(
    Ae,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ w.jsxs(
          Gt,
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
              /* @__PURE__ */ w.jsxs(Gt, { children: [
                /* @__PURE__ */ w.jsx(
                  Fn,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => o("recentFlows"),
                    children: /* @__PURE__ */ w.jsxs(Gt, { gap: 1, children: [
                      /* @__PURE__ */ w.jsx(zW, { size: 21 }),
                      /* @__PURE__ */ w.jsx(UW, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  Fn,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => m(),
                    children: /* @__PURE__ */ w.jsxs(Gt, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ w.jsx($g, { size: 16, color: "white" }),
                      /* @__PURE__ */ w.jsx(Li, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  Wd,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: t ?? "",
                    onChange: (h) => {
                      n(h.target.value), g(h.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ w.jsx(Gt, { children: /* @__PURE__ */ w.jsx(Fn, { onClick: d, variant: "link", children: c === "light" ? /* @__PURE__ */ w.jsx(VW, { size: 20 }) : /* @__PURE__ */ w.jsx(WW, { size: 20 }) }) })
            ]
          }
        ),
        r === "recentFlows" && /* @__PURE__ */ w.jsx(
          KK,
          {
            onclose: () => o("root"),
            loadWorkflowID: S,
            onClickNewFlow: () => {
              m(), o("root");
            }
          }
        )
      ]
    }
  ) });
}
const VT = document.createElement("div");
document.body.append(VT);
const XK = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, QK = NL({ config: XK });
Ip.createRoot(VT).render(
  /* @__PURE__ */ w.jsx(re.StrictMode, { children: /* @__PURE__ */ w.jsxs(rB, { children: [
    /* @__PURE__ */ w.jsx(XI, { initialColorMode: QK.config.initialColorMode }),
    /* @__PURE__ */ w.jsx(qK, {})
  ] }) })
);
const gm = document.body, ZK = { attributes: !0, attributeFilter: ["class"] }, JK = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of gm.classList)
        r.includes("chakra") && gm.classList.remove(r);
}, eY = new MutationObserver(JK);
eY.observe(gm, ZK);
