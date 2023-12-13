import { app as Ea } from "/scripts/app.js";
function X_(e, t) {
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
function sl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var OS = { exports: {} }, nd = {}, MS = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll = Symbol.for("react.element"), Q_ = Symbol.for("react.portal"), Z_ = Symbol.for("react.fragment"), J_ = Symbol.for("react.strict_mode"), eE = Symbol.for("react.profiler"), tE = Symbol.for("react.provider"), nE = Symbol.for("react.context"), rE = Symbol.for("react.forward_ref"), oE = Symbol.for("react.suspense"), iE = Symbol.for("react.memo"), aE = Symbol.for("react.lazy"), i0 = Symbol.iterator;
function sE(e) {
  return e === null || typeof e != "object" ? null : (e = i0 && e[i0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var IS = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, RS = Object.assign, $S = {};
function ya(e, t, n) {
  this.props = e, this.context = t, this.refs = $S, this.updater = n || IS;
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
function AS() {
}
AS.prototype = ya.prototype;
function km(e, t, n) {
  this.props = e, this.context = t, this.refs = $S, this.updater = n || IS;
}
var Pm = km.prototype = new AS();
Pm.constructor = km;
RS(Pm, ya.prototype);
Pm.isPureReactComponent = !0;
var a0 = Array.isArray, DS = Object.prototype.hasOwnProperty, Tm = { current: null }, FS = { key: !0, ref: !0, __self: !0, __source: !0 };
function LS(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      DS.call(t, r) && !FS.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: ll, type: e, key: i, ref: a, props: o, _owner: Tm.current };
}
function lE(e, t) {
  return { $$typeof: ll, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function _m(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ll;
}
function uE(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var s0 = /\/+/g;
function ff(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? uE("" + e.key) : t.toString(36);
}
function ku(e, t, n, r, o) {
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
          case Q_:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + ff(a, 0) : r, a0(o) ? (n = "", e != null && (n = e.replace(s0, "$&/") + "/"), ku(o, t, n, "", function(u) {
      return u;
    })) : o != null && (_m(o) && (o = lE(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(s0, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", a0(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + ff(i, s);
      a += ku(i, t, n, l, o);
    }
  else if (l = sE(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + ff(i, s++), a += ku(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function zl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return ku(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function cE(e) {
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
var Ot = { current: null }, Pu = { transition: null }, dE = { ReactCurrentDispatcher: Ot, ReactCurrentBatchConfig: Pu, ReactCurrentOwner: Tm };
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
  if (!_m(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ue.Component = ya;
ue.Fragment = Z_;
ue.Profiler = eE;
ue.PureComponent = km;
ue.StrictMode = J_;
ue.Suspense = oE;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dE;
ue.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = RS({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = Tm.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      DS.call(t, l) && !FS.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return e = { $$typeof: nE, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: tE, _context: e }, e.Consumer = e;
};
ue.createElement = LS;
ue.createFactory = function(e) {
  var t = LS.bind(null, e);
  return t.type = e, t;
};
ue.createRef = function() {
  return { current: null };
};
ue.forwardRef = function(e) {
  return { $$typeof: rE, render: e };
};
ue.isValidElement = _m;
ue.lazy = function(e) {
  return { $$typeof: aE, _payload: { _status: -1, _result: e }, _init: cE };
};
ue.memo = function(e, t) {
  return { $$typeof: iE, type: e, compare: t === void 0 ? null : t };
};
ue.startTransition = function(e) {
  var t = Pu.transition;
  Pu.transition = {};
  try {
    e();
  } finally {
    Pu.transition = t;
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
MS.exports = ue;
var m = MS.exports;
const re = /* @__PURE__ */ sl(m), l0 = /* @__PURE__ */ X_({
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
var fE = m, pE = Symbol.for("react.element"), hE = Symbol.for("react.fragment"), mE = Object.prototype.hasOwnProperty, vE = fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gE = { key: !0, ref: !0, __self: !0, __source: !0 };
function zS(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    mE.call(t, r) && !gE.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: pE, type: e, key: i, ref: a, props: o, _owner: vE.current };
}
nd.Fragment = hE;
nd.jsx = zS;
nd.jsxs = zS;
OS.exports = nd;
var w = OS.exports, Dp = {}, jS = { exports: {} }, tn = {}, NS = { exports: {} }, VS = {};
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, y = !1, v = !1, S = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
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
    if (v = !1, b(A), !y)
      if (n(l) !== null)
        y = !0, K(k);
      else {
        var z = n(u);
        z !== null && $(x, z.startTime - A);
      }
  }
  function k(A, z) {
    y = !1, v && (v = !1, h(_), _ = -1), p = !0;
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
    return Y = U + Y, A = { id: c++, callback: z, priorityLevel: A, startTime: U, expirationTime: Y, sortIndex: -1 }, U > V ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (v ? (h(_), _ = -1) : v = !0, $(x, U - V))) : (A.sortIndex = Y, t(l, A), y || p || (y = !0, K(k))), A;
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
})(VS);
NS.exports = VS;
var yE = NS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BS = m, Zt = yE;
function F(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var WS = /* @__PURE__ */ new Set(), Es = {};
function Xo(e, t) {
  Zi(e, t), Zi(e + "Capture", t);
}
function Zi(e, t) {
  for (Es[e] = t, e = 0; e < t.length; e++)
    WS.add(t[e]);
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fp = Object.prototype.hasOwnProperty, bE = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, u0 = {}, c0 = {};
function SE(e) {
  return Fp.call(c0, e) ? !0 : Fp.call(u0, e) ? !1 : bE.test(e) ? c0[e] = !0 : (u0[e] = !0, !1);
}
function xE(e, t, n, r) {
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
function wE(e, t, n, r) {
  if (t === null || typeof t > "u" || xE(e, t, n, r))
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
var Em = /[\-:]([a-z])/g;
function Om(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Em,
    Om
  );
  ht[t] = new Mt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Em, Om);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Em, Om);
  ht[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ht.xlinkHref = new Mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ht[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mm(e, t, n, r) {
  var o = ht.hasOwnProperty(t) ? ht[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wE(t, n, o, r) && (n = null), r || o === null ? SE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Er = BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, jl = Symbol.for("react.element"), hi = Symbol.for("react.portal"), mi = Symbol.for("react.fragment"), Im = Symbol.for("react.strict_mode"), Lp = Symbol.for("react.profiler"), HS = Symbol.for("react.provider"), US = Symbol.for("react.context"), Rm = Symbol.for("react.forward_ref"), zp = Symbol.for("react.suspense"), jp = Symbol.for("react.suspense_list"), $m = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), GS = Symbol.for("react.offscreen"), d0 = Symbol.iterator;
function Oa(e) {
  return e === null || typeof e != "object" ? null : (e = d0 && e[d0] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ve = Object.assign, pf;
function Ga(e) {
  if (pf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      pf = t && t[1] || "";
    }
  return `
` + pf + e;
}
var hf = !1;
function mf(e, t) {
  if (!e || hf)
    return "";
  hf = !0;
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
    hf = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ga(e) : "";
}
function CE(e) {
  switch (e.tag) {
    case 5:
      return Ga(e.type);
    case 16:
      return Ga("Lazy");
    case 13:
      return Ga("Suspense");
    case 19:
      return Ga("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = mf(e.type, !1), e;
    case 11:
      return e = mf(e.type.render, !1), e;
    case 1:
      return e = mf(e.type, !0), e;
    default:
      return "";
  }
}
function Np(e) {
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
    case Lp:
      return "Profiler";
    case Im:
      return "StrictMode";
    case zp:
      return "Suspense";
    case jp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case US:
        return (e.displayName || "Context") + ".Consumer";
      case HS:
        return (e._context.displayName || "Context") + ".Provider";
      case Rm:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $m:
        return t = e.displayName || null, t !== null ? t : Np(e.type) || "Memo";
      case zr:
        t = e._payload, e = e._init;
        try {
          return Np(e(t));
        } catch {
        }
    }
  return null;
}
function kE(e) {
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
      return Np(t);
    case 8:
      return t === Im ? "StrictMode" : "Mode";
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
function io(e) {
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
function KS(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function PE(e) {
  var t = KS(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Nl(e) {
  e._valueTracker || (e._valueTracker = PE(e));
}
function YS(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = KS(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function tc(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vp(e, t) {
  var n = t.checked;
  return Ve({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function f0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = io(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function qS(e, t) {
  t = t.checked, t != null && Mm(e, "checked", t, !1);
}
function Bp(e, t) {
  qS(e, t);
  var n = io(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Wp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wp(e, t.type, io(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function p0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Wp(e, t, n) {
  (t !== "number" || tc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ka = Array.isArray;
function zi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + io(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hp(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(F(91));
  return Ve({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function h0(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(F(92));
      if (Ka(n)) {
        if (1 < n.length)
          throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: io(n) };
}
function XS(e, t) {
  var n = io(t.value), r = io(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function m0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function QS(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Up(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? QS(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Vl, ZS = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Vl = Vl || document.createElement("div"), Vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Os(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var os = {
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
}, TE = ["Webkit", "ms", "Moz", "O"];
Object.keys(os).forEach(function(e) {
  TE.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), os[t] = os[e];
  });
});
function JS(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || os.hasOwnProperty(e) && os[e] ? ("" + t).trim() : t + "px";
}
function ex(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = JS(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var _E = Ve({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Gp(e, t) {
  if (t) {
    if (_E[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Kp(e, t) {
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
var Yp = null;
function Am(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var qp = null, ji = null, Ni = null;
function v0(e) {
  if (e = dl(e)) {
    if (typeof qp != "function")
      throw Error(F(280));
    var t = e.stateNode;
    t && (t = sd(t), qp(e.stateNode, e.type, t));
  }
}
function tx(e) {
  ji ? Ni ? Ni.push(e) : Ni = [e] : ji = e;
}
function nx() {
  if (ji) {
    var e = ji, t = Ni;
    if (Ni = ji = null, v0(e), t)
      for (e = 0; e < t.length; e++)
        v0(t[e]);
  }
}
function rx(e, t) {
  return e(t);
}
function ox() {
}
var vf = !1;
function ix(e, t, n) {
  if (vf)
    return e(t, n);
  vf = !0;
  try {
    return rx(e, t, n);
  } finally {
    vf = !1, (ji !== null || Ni !== null) && (ox(), nx());
  }
}
function Ms(e, t) {
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
var Xp = !1;
if (xr)
  try {
    var Ma = {};
    Object.defineProperty(Ma, "passive", { get: function() {
      Xp = !0;
    } }), window.addEventListener("test", Ma, Ma), window.removeEventListener("test", Ma, Ma);
  } catch {
    Xp = !1;
  }
function EE(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var is = !1, nc = null, rc = !1, Qp = null, OE = { onError: function(e) {
  is = !0, nc = e;
} };
function ME(e, t, n, r, o, i, a, s, l) {
  is = !1, nc = null, EE.apply(OE, arguments);
}
function IE(e, t, n, r, o, i, a, s, l) {
  if (ME.apply(this, arguments), is) {
    if (is) {
      var u = nc;
      is = !1, nc = null;
    } else
      throw Error(F(198));
    rc || (rc = !0, Qp = u);
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
function ax(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function g0(e) {
  if (Qo(e) !== e)
    throw Error(F(188));
}
function RE(e) {
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
          return g0(o), e;
        if (i === r)
          return g0(o), t;
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
function sx(e) {
  return e = RE(e), e !== null ? lx(e) : null;
}
function lx(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = lx(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var ux = Zt.unstable_scheduleCallback, y0 = Zt.unstable_cancelCallback, $E = Zt.unstable_shouldYield, AE = Zt.unstable_requestPaint, Ke = Zt.unstable_now, DE = Zt.unstable_getCurrentPriorityLevel, Dm = Zt.unstable_ImmediatePriority, cx = Zt.unstable_UserBlockingPriority, oc = Zt.unstable_NormalPriority, FE = Zt.unstable_LowPriority, dx = Zt.unstable_IdlePriority, rd = null, Qn = null;
function LE(e) {
  if (Qn && typeof Qn.onCommitFiberRoot == "function")
    try {
      Qn.onCommitFiberRoot(rd, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var $n = Math.clz32 ? Math.clz32 : NE, zE = Math.log, jE = Math.LN2;
function NE(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zE(e) / jE | 0) | 0;
}
var Bl = 64, Wl = 4194304;
function Ya(e) {
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
function ic(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Ya(s) : (i &= a, i !== 0 && (r = Ya(i)));
  } else
    a = n & ~o, a !== 0 ? r = Ya(a) : i !== 0 && (r = Ya(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - $n(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function VE(e, t) {
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
function BE(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - $n(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = VE(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Zp(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function fx() {
  var e = Bl;
  return Bl <<= 1, !(Bl & 4194240) && (Bl = 64), e;
}
function gf(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function ul(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - $n(t), e[t] = n;
}
function WE(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $n(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Fm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - $n(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var xe = 0;
function px(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var hx, Lm, mx, vx, gx, Jp = !1, Hl = [], Kr = null, Yr = null, qr = null, Is = /* @__PURE__ */ new Map(), Rs = /* @__PURE__ */ new Map(), Vr = [], HE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function b0(e, t) {
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
      Is.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rs.delete(t.pointerId);
  }
}
function Ia(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = dl(t), t !== null && Lm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function UE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Kr = Ia(Kr, e, t, n, r, o), !0;
    case "dragenter":
      return Yr = Ia(Yr, e, t, n, r, o), !0;
    case "mouseover":
      return qr = Ia(qr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Is.set(i, Ia(Is.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Rs.set(i, Ia(Rs.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function yx(e) {
  var t = Mo(e.target);
  if (t !== null) {
    var n = Qo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ax(n), t !== null) {
          e.blockedOn = t, gx(e.priority, function() {
            mx(n);
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
    var n = eh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Yp = r, n.target.dispatchEvent(r), Yp = null;
    } else
      return t = dl(n), t !== null && Lm(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function S0(e, t, n) {
  Tu(e) && n.delete(t);
}
function GE() {
  Jp = !1, Kr !== null && Tu(Kr) && (Kr = null), Yr !== null && Tu(Yr) && (Yr = null), qr !== null && Tu(qr) && (qr = null), Is.forEach(S0), Rs.forEach(S0);
}
function Ra(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Jp || (Jp = !0, Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, GE)));
}
function $s(e) {
  function t(o) {
    return Ra(o, e);
  }
  if (0 < Hl.length) {
    Ra(Hl[0], e);
    for (var n = 1; n < Hl.length; n++) {
      var r = Hl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Kr !== null && Ra(Kr, e), Yr !== null && Ra(Yr, e), qr !== null && Ra(qr, e), Is.forEach(t), Rs.forEach(t), n = 0; n < Vr.length; n++)
    r = Vr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vr.length && (n = Vr[0], n.blockedOn === null); )
    yx(n), n.blockedOn === null && Vr.shift();
}
var Vi = Er.ReactCurrentBatchConfig, ac = !0;
function KE(e, t, n, r) {
  var o = xe, i = Vi.transition;
  Vi.transition = null;
  try {
    xe = 1, zm(e, t, n, r);
  } finally {
    xe = o, Vi.transition = i;
  }
}
function YE(e, t, n, r) {
  var o = xe, i = Vi.transition;
  Vi.transition = null;
  try {
    xe = 4, zm(e, t, n, r);
  } finally {
    xe = o, Vi.transition = i;
  }
}
function zm(e, t, n, r) {
  if (ac) {
    var o = eh(e, t, n, r);
    if (o === null)
      _f(e, t, r, sc, n), b0(e, r);
    else if (UE(o, e, t, n, r))
      r.stopPropagation();
    else if (b0(e, r), t & 4 && -1 < HE.indexOf(e)) {
      for (; o !== null; ) {
        var i = dl(o);
        if (i !== null && hx(i), i = eh(e, t, n, r), i === null && _f(e, t, r, sc, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      _f(e, t, r, null, n);
  }
}
var sc = null;
function eh(e, t, n, r) {
  if (sc = null, e = Am(r), e = Mo(e), e !== null)
    if (t = Qo(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = ax(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return sc = e, null;
}
function bx(e) {
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
      switch (DE()) {
        case Dm:
          return 1;
        case cx:
          return 4;
        case oc:
        case FE:
          return 16;
        case dx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ur = null, jm = null, _u = null;
function Sx() {
  if (_u)
    return _u;
  var e, t = jm, n = t.length, r, o = "value" in Ur ? Ur.value : Ur.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return _u = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Eu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ul() {
  return !0;
}
function x0() {
  return !1;
}
function nn(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ul : x0, this.isPropagationStopped = x0, this;
  }
  return Ve(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ul);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ul);
  }, persist: function() {
  }, isPersistent: Ul }), t;
}
var ba = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Nm = nn(ba), cl = Ve({}, ba, { view: 0, detail: 0 }), qE = nn(cl), yf, bf, $a, od = Ve({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== $a && ($a && e.type === "mousemove" ? (yf = e.screenX - $a.screenX, bf = e.screenY - $a.screenY) : bf = yf = 0, $a = e), yf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : bf;
} }), w0 = nn(od), XE = Ve({}, od, { dataTransfer: 0 }), QE = nn(XE), ZE = Ve({}, cl, { relatedTarget: 0 }), Sf = nn(ZE), JE = Ve({}, ba, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), eO = nn(JE), tO = Ve({}, ba, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), nO = nn(tO), rO = Ve({}, ba, { data: 0 }), C0 = nn(rO), oO = {
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
}, iO = {
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
}, aO = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function sO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = aO[e]) ? !!t[e] : !1;
}
function Vm() {
  return sO;
}
var lO = Ve({}, cl, { key: function(e) {
  if (e.key) {
    var t = oO[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Eu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? iO[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vm, charCode: function(e) {
  return e.type === "keypress" ? Eu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Eu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), uO = nn(lO), cO = Ve({}, od, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), k0 = nn(cO), dO = Ve({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vm }), fO = nn(dO), pO = Ve({}, ba, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hO = nn(pO), mO = Ve({}, od, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), vO = nn(mO), gO = [9, 13, 27, 32], Bm = xr && "CompositionEvent" in window, as = null;
xr && "documentMode" in document && (as = document.documentMode);
var yO = xr && "TextEvent" in window && !as, xx = xr && (!Bm || as && 8 < as && 11 >= as), P0 = " ", T0 = !1;
function wx(e, t) {
  switch (e) {
    case "keyup":
      return gO.indexOf(t.keyCode) !== -1;
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
function Cx(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vi = !1;
function bO(e, t) {
  switch (e) {
    case "compositionend":
      return Cx(t);
    case "keypress":
      return t.which !== 32 ? null : (T0 = !0, P0);
    case "textInput":
      return e = t.data, e === P0 && T0 ? null : e;
    default:
      return null;
  }
}
function SO(e, t) {
  if (vi)
    return e === "compositionend" || !Bm && wx(e, t) ? (e = Sx(), _u = jm = Ur = null, vi = !1, e) : null;
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
      return xx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xO = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xO[e.type] : t === "textarea";
}
function kx(e, t, n, r) {
  tx(r), t = lc(t, "onChange"), 0 < t.length && (n = new Nm("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ss = null, As = null;
function wO(e) {
  Dx(e, 0);
}
function id(e) {
  var t = bi(e);
  if (YS(t))
    return e;
}
function CO(e, t) {
  if (e === "change")
    return t;
}
var Px = !1;
if (xr) {
  var xf;
  if (xr) {
    var wf = "oninput" in document;
    if (!wf) {
      var E0 = document.createElement("div");
      E0.setAttribute("oninput", "return;"), wf = typeof E0.oninput == "function";
    }
    xf = wf;
  } else
    xf = !1;
  Px = xf && (!document.documentMode || 9 < document.documentMode);
}
function O0() {
  ss && (ss.detachEvent("onpropertychange", Tx), As = ss = null);
}
function Tx(e) {
  if (e.propertyName === "value" && id(As)) {
    var t = [];
    kx(t, As, e, Am(e)), ix(wO, t);
  }
}
function kO(e, t, n) {
  e === "focusin" ? (O0(), ss = t, As = n, ss.attachEvent("onpropertychange", Tx)) : e === "focusout" && O0();
}
function PO(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return id(As);
}
function TO(e, t) {
  if (e === "click")
    return id(t);
}
function _O(e, t) {
  if (e === "input" || e === "change")
    return id(t);
}
function EO(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zn = typeof Object.is == "function" ? Object.is : EO;
function Ds(e, t) {
  if (zn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Fp.call(t, o) || !zn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function M0(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function I0(e, t) {
  var n = M0(e);
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
    n = M0(n);
  }
}
function _x(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _x(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ex() {
  for (var e = window, t = tc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = tc(e.document);
  }
  return t;
}
function Wm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function OO(e) {
  var t = Ex(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && _x(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = I0(n, i);
        var a = I0(
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
var MO = xr && "documentMode" in document && 11 >= document.documentMode, gi = null, th = null, ls = null, nh = !1;
function R0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nh || gi == null || gi !== tc(r) || (r = gi, "selectionStart" in r && Wm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ls && Ds(ls, r) || (ls = r, r = lc(th, "onSelect"), 0 < r.length && (t = new Nm("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gi)));
}
function Gl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yi = { animationend: Gl("Animation", "AnimationEnd"), animationiteration: Gl("Animation", "AnimationIteration"), animationstart: Gl("Animation", "AnimationStart"), transitionend: Gl("Transition", "TransitionEnd") }, Cf = {}, Ox = {};
xr && (Ox = document.createElement("div").style, "AnimationEvent" in window || (delete yi.animationend.animation, delete yi.animationiteration.animation, delete yi.animationstart.animation), "TransitionEvent" in window || delete yi.transitionend.transition);
function ad(e) {
  if (Cf[e])
    return Cf[e];
  if (!yi[e])
    return e;
  var t = yi[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Ox)
      return Cf[e] = t[n];
  return e;
}
var Mx = ad("animationend"), Ix = ad("animationiteration"), Rx = ad("animationstart"), $x = ad("transitionend"), Ax = /* @__PURE__ */ new Map(), $0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function co(e, t) {
  Ax.set(e, t), Xo(t, [e]);
}
for (var kf = 0; kf < $0.length; kf++) {
  var Pf = $0[kf], IO = Pf.toLowerCase(), RO = Pf[0].toUpperCase() + Pf.slice(1);
  co(IO, "on" + RO);
}
co(Mx, "onAnimationEnd");
co(Ix, "onAnimationIteration");
co(Rx, "onAnimationStart");
co("dblclick", "onDoubleClick");
co("focusin", "onFocus");
co("focusout", "onBlur");
co($x, "onTransitionEnd");
Zi("onMouseEnter", ["mouseout", "mouseover"]);
Zi("onMouseLeave", ["mouseout", "mouseover"]);
Zi("onPointerEnter", ["pointerout", "pointerover"]);
Zi("onPointerLeave", ["pointerout", "pointerover"]);
Xo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $O = new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));
function A0(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, IE(r, t, void 0, e), e.currentTarget = null;
}
function Dx(e, t) {
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
          A0(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          A0(o, s, u), i = l;
        }
    }
  }
  if (rc)
    throw e = Qp, rc = !1, Qp = null, e;
}
function Oe(e, t) {
  var n = t[sh];
  n === void 0 && (n = t[sh] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Fx(t, e, 2, !1), n.add(r));
}
function Tf(e, t, n) {
  var r = 0;
  t && (r |= 4), Fx(n, e, r, t);
}
var Kl = "_reactListening" + Math.random().toString(36).slice(2);
function Fs(e) {
  if (!e[Kl]) {
    e[Kl] = !0, WS.forEach(function(n) {
      n !== "selectionchange" && ($O.has(n) || Tf(n, !1, e), Tf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kl] || (t[Kl] = !0, Tf("selectionchange", !1, t));
  }
}
function Fx(e, t, n, r) {
  switch (bx(t)) {
    case 1:
      var o = KE;
      break;
    case 4:
      o = YE;
      break;
    default:
      o = zm;
  }
  n = o.bind(null, t, n, e), o = void 0, !Xp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function _f(e, t, n, r, o) {
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
  ix(function() {
    var u = i, c = Am(n), d = [];
    e: {
      var f = Ax.get(e);
      if (f !== void 0) {
        var p = Nm, y = e;
        switch (e) {
          case "keypress":
            if (Eu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = uO;
            break;
          case "focusin":
            y = "focus", p = Sf;
            break;
          case "focusout":
            y = "blur", p = Sf;
            break;
          case "beforeblur":
          case "afterblur":
            p = Sf;
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
            p = w0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = QE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = fO;
            break;
          case Mx:
          case Ix:
          case Rx:
            p = eO;
            break;
          case $x:
            p = hO;
            break;
          case "scroll":
            p = qE;
            break;
          case "wheel":
            p = vO;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = nO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = k0;
        }
        var v = (t & 4) !== 0, S = !v && e === "scroll", h = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var g = u, b; g !== null; ) {
          b = g;
          var x = b.stateNode;
          if (b.tag === 5 && x !== null && (b = x, h !== null && (x = Ms(g, h), x != null && v.push(Ls(g, x, b)))), S)
            break;
          g = g.return;
        }
        0 < v.length && (f = new p(f, y, null, n, c), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== Yp && (y = n.relatedTarget || n.fromElement) && (Mo(y) || y[wr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? Mo(y) : null, y !== null && (S = Qo(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (v = w0, x = "onMouseLeave", h = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (v = k0, x = "onPointerLeave", h = "onPointerEnter", g = "pointer"), S = p == null ? f : bi(p), b = y == null ? f : bi(y), f = new v(x, g + "leave", p, n, c), f.target = S, f.relatedTarget = b, x = null, Mo(c) === u && (v = new v(h, g + "enter", y, n, c), v.target = b, v.relatedTarget = S, x = v), S = x, p && y)
            t: {
              for (v = p, h = y, g = 0, b = v; b; b = ai(b))
                g++;
              for (b = 0, x = h; x; x = ai(x))
                b++;
              for (; 0 < g - b; )
                v = ai(v), g--;
              for (; 0 < b - g; )
                h = ai(h), b--;
              for (; g--; ) {
                if (v === h || h !== null && v === h.alternate)
                  break t;
                v = ai(v), h = ai(h);
              }
              v = null;
            }
          else
            v = null;
          p !== null && D0(d, f, p, v, !1), y !== null && S !== null && D0(d, S, y, v, !0);
        }
      }
      e: {
        if (f = u ? bi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = CO;
        else if (_0(f))
          if (Px)
            k = _O;
          else {
            k = PO;
            var P = kO;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = TO);
        if (k && (k = k(e, u))) {
          kx(d, k, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Wp(f, "number", f.value);
      }
      switch (P = u ? bi(u) : window, e) {
        case "focusin":
          (_0(P) || P.contentEditable === "true") && (gi = P, th = u, ls = null);
          break;
        case "focusout":
          ls = th = gi = null;
          break;
        case "mousedown":
          nh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          nh = !1, R0(d, n, c);
          break;
        case "selectionchange":
          if (MO)
            break;
        case "keydown":
        case "keyup":
          R0(d, n, c);
      }
      var T;
      if (Bm)
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
        vi ? wx(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (xx && n.locale !== "ko" && (vi || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && vi && (T = Sx()) : (Ur = c, jm = "value" in Ur ? Ur.value : Ur.textContent, vi = !0)), P = lc(u, _), 0 < P.length && (_ = new C0(_, e, null, n, c), d.push({ event: _, listeners: P }), T ? _.data = T : (T = Cx(n), T !== null && (_.data = T)))), (T = yO ? bO(e, n) : SO(e, n)) && (u = lc(u, "onBeforeInput"), 0 < u.length && (c = new C0("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = T));
    }
    Dx(d, t);
  });
}
function Ls(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function lc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ms(e, n), i != null && r.unshift(Ls(e, i, o)), i = Ms(e, t), i != null && r.push(Ls(e, i, o))), e = e.return;
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
function D0(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Ms(n, i), l != null && a.unshift(Ls(n, l, s))) : o || (l = Ms(n, i), l != null && a.push(Ls(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var AO = /\r\n?/g, DO = /\u0000|\uFFFD/g;
function F0(e) {
  return (typeof e == "string" ? e : "" + e).replace(AO, `
`).replace(DO, "");
}
function Yl(e, t, n) {
  if (t = F0(t), F0(e) !== t && n)
    throw Error(F(425));
}
function uc() {
}
var rh = null, oh = null;
function ih(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ah = typeof setTimeout == "function" ? setTimeout : void 0, FO = typeof clearTimeout == "function" ? clearTimeout : void 0, L0 = typeof Promise == "function" ? Promise : void 0, LO = typeof queueMicrotask == "function" ? queueMicrotask : typeof L0 < "u" ? function(e) {
  return L0.resolve(null).then(e).catch(zO);
} : ah;
function zO(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ef(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), $s(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  $s(t);
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
function z0(e) {
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
var Sa = Math.random().toString(36).slice(2), Yn = "__reactFiber$" + Sa, zs = "__reactProps$" + Sa, wr = "__reactContainer$" + Sa, sh = "__reactEvents$" + Sa, jO = "__reactListeners$" + Sa, NO = "__reactHandles$" + Sa;
function Mo(e) {
  var t = e[Yn];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wr] || n[Yn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = z0(e); e !== null; ) {
          if (n = e[Yn])
            return n;
          e = z0(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dl(e) {
  return e = e[Yn] || e[wr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bi(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(F(33));
}
function sd(e) {
  return e[zs] || null;
}
var lh = [], Si = -1;
function fo(e) {
  return { current: e };
}
function Re(e) {
  0 > Si || (e.current = lh[Si], lh[Si] = null, Si--);
}
function Te(e, t) {
  Si++, lh[Si] = e.current, e.current = t;
}
var ao = {}, wt = fo(ao), Dt = fo(!1), Wo = ao;
function Ji(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return ao;
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
function cc() {
  Re(Dt), Re(wt);
}
function j0(e, t, n) {
  if (wt.current !== ao)
    throw Error(F(168));
  Te(wt, t), Te(Dt, n);
}
function Lx(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(F(108, kE(e) || "Unknown", o));
  return Ve({}, n, r);
}
function dc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ao, Wo = wt.current, Te(wt, e), Te(Dt, Dt.current), !0;
}
function N0(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(F(169));
  n ? (e = Lx(e, t, Wo), r.__reactInternalMemoizedMergedChildContext = e, Re(Dt), Re(wt), Te(wt, e)) : Re(Dt), Te(Dt, n);
}
var ur = null, ld = !1, Of = !1;
function zx(e) {
  ur === null ? ur = [e] : ur.push(e);
}
function VO(e) {
  ld = !0, zx(e);
}
function po() {
  if (!Of && ur !== null) {
    Of = !0;
    var e = 0, t = xe;
    try {
      var n = ur;
      for (xe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ur = null, ld = !1;
    } catch (o) {
      throw ur !== null && (ur = ur.slice(e + 1)), ux(Dm, po), o;
    } finally {
      xe = t, Of = !1;
    }
  }
  return null;
}
var xi = [], wi = 0, fc = null, pc = 0, fn = [], pn = 0, Ho = null, fr = 1, pr = "";
function Co(e, t) {
  xi[wi++] = pc, xi[wi++] = fc, fc = e, pc = t;
}
function jx(e, t, n) {
  fn[pn++] = fr, fn[pn++] = pr, fn[pn++] = Ho, Ho = e;
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
function Hm(e) {
  e.return !== null && (Co(e, 1), jx(e, 1, 0));
}
function Um(e) {
  for (; e === fc; )
    fc = xi[--wi], xi[wi] = null, pc = xi[--wi], xi[wi] = null;
  for (; e === Ho; )
    Ho = fn[--pn], fn[pn] = null, pr = fn[--pn], fn[pn] = null, fr = fn[--pn], fn[pn] = null;
}
var qt = null, Yt = null, De = !1, Mn = null;
function Nx(e, t) {
  var n = hn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function V0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qt = e, Yt = Xr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qt = e, Yt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ho !== null ? { id: fr, overflow: pr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = hn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qt = e, Yt = null, !0) : !1;
    default:
      return !1;
  }
}
function uh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ch(e) {
  if (De) {
    var t = Yt;
    if (t) {
      var n = t;
      if (!V0(e, t)) {
        if (uh(e))
          throw Error(F(418));
        t = Xr(n.nextSibling);
        var r = qt;
        t && V0(e, t) ? Nx(r, n) : (e.flags = e.flags & -4097 | 2, De = !1, qt = e);
      }
    } else {
      if (uh(e))
        throw Error(F(418));
      e.flags = e.flags & -4097 | 2, De = !1, qt = e;
    }
  }
}
function B0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function ql(e) {
  if (e !== qt)
    return !1;
  if (!De)
    return B0(e), De = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ih(e.type, e.memoizedProps)), t && (t = Yt)) {
    if (uh(e))
      throw Vx(), Error(F(418));
    for (; t; )
      Nx(e, t), t = Xr(t.nextSibling);
  }
  if (B0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Yt = Xr(e.nextSibling);
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
    Yt = qt ? Xr(e.stateNode.nextSibling) : null;
  return !0;
}
function Vx() {
  for (var e = Yt; e; )
    e = Xr(e.nextSibling);
}
function ea() {
  Yt = qt = null, De = !1;
}
function Gm(e) {
  Mn === null ? Mn = [e] : Mn.push(e);
}
var BO = Er.ReactCurrentBatchConfig;
function En(e, t) {
  if (e && e.defaultProps) {
    t = Ve({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hc = fo(null), mc = null, Ci = null, Km = null;
function Ym() {
  Km = Ci = mc = null;
}
function qm(e) {
  var t = hc.current;
  Re(hc), e._currentValue = t;
}
function dh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Bi(e, t) {
  mc = e, Km = Ci = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (At = !0), e.firstContext = null);
}
function yn(e) {
  var t = e._currentValue;
  if (Km !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Ci === null) {
      if (mc === null)
        throw Error(F(308));
      Ci = e, mc.dependencies = { lanes: 0, firstContext: e };
    } else
      Ci = Ci.next = e;
  return t;
}
var Io = null;
function Xm(e) {
  Io === null ? Io = [e] : Io.push(e);
}
function Bx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Xm(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cr(e, r);
}
function Cr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var jr = !1;
function Qm(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Wx(e, t) {
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
  return o = r.interleaved, o === null ? (t.next = t, Xm(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cr(e, n);
}
function Ou(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fm(e, n);
  }
}
function W0(e, t) {
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
function vc(e, t, n, r) {
  var o = e.updateQueue;
  jr = !1;
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
          var y = e, v = s;
          switch (f = t, p = n, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                d = y.call(p, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, f = typeof y == "function" ? y.call(p, d, f) : y, f == null)
                break e;
              d = Ve({}, d, f);
              break e;
            case 2:
              jr = !0;
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
    Go |= a, e.lanes = a, e.memoizedState = d;
  }
}
function H0(e, t, n) {
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
var Hx = new BS.Component().refs;
function fh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ve({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ud = { isMounted: function(e) {
  return (e = e._reactInternals) ? Qo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _t(), o = Jr(e), i = vr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (An(t, e, o, r), Ou(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _t(), o = Jr(e), i = vr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Qr(e, i, o), t !== null && (An(t, e, o, r), Ou(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _t(), r = Jr(e), o = vr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Qr(e, o, r), t !== null && (An(t, e, r, n), Ou(t, e, r));
} };
function U0(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Ds(n, r) || !Ds(o, i) : !0;
}
function Ux(e, t, n) {
  var r = !1, o = ao, i = t.contextType;
  return typeof i == "object" && i !== null ? i = yn(i) : (o = Ft(t) ? Wo : wt.current, r = t.contextTypes, i = (r = r != null) ? Ji(e, o) : ao), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ud, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function G0(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ud.enqueueReplaceState(t, t.state, null);
}
function ph(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Hx, Qm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = yn(i) : (i = Ft(t) ? Wo : wt.current, o.context = Ji(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (fh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ud.enqueueReplaceState(o, o.state, null), vc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Aa(e, t, n) {
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
        s === Hx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(F(284));
    if (!n._owner)
      throw Error(F(290, e));
  }
  return e;
}
function Xl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(F(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function K0(e) {
  var t = e._init;
  return t(e._payload);
}
function Gx(e) {
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
    return h = eo(h, g), h.index = 0, h.sibling = null, h;
  }
  function i(h, g, b) {
    return h.index = b, e ? (b = h.alternate, b !== null ? (b = b.index, b < g ? (h.flags |= 2, g) : b) : (h.flags |= 2, g)) : (h.flags |= 1048576, g);
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, g, b, x) {
    return g === null || g.tag !== 6 ? (g = Ff(b, h.mode, x), g.return = h, g) : (g = o(g, b), g.return = h, g);
  }
  function l(h, g, b, x) {
    var k = b.type;
    return k === mi ? c(h, g, b.props.children, x, b.key) : g !== null && (g.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && K0(k) === g.type) ? (x = o(g, b.props), x.ref = Aa(h, g, b), x.return = h, x) : (x = Du(b.type, b.key, b.props, null, h.mode, x), x.ref = Aa(h, g, b), x.return = h, x);
  }
  function u(h, g, b, x) {
    return g === null || g.tag !== 4 || g.stateNode.containerInfo !== b.containerInfo || g.stateNode.implementation !== b.implementation ? (g = Lf(b, h.mode, x), g.return = h, g) : (g = o(g, b.children || []), g.return = h, g);
  }
  function c(h, g, b, x, k) {
    return g === null || g.tag !== 7 ? (g = Lo(b, h.mode, x, k), g.return = h, g) : (g = o(g, b), g.return = h, g);
  }
  function d(h, g, b) {
    if (typeof g == "string" && g !== "" || typeof g == "number")
      return g = Ff("" + g, h.mode, b), g.return = h, g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case jl:
          return b = Du(g.type, g.key, g.props, null, h.mode, b), b.ref = Aa(h, null, g), b.return = h, b;
        case hi:
          return g = Lf(g, h.mode, b), g.return = h, g;
        case zr:
          var x = g._init;
          return d(h, x(g._payload), b);
      }
      if (Ka(g) || Oa(g))
        return g = Lo(g, h.mode, b, null), g.return = h, g;
      Xl(h, g);
    }
    return null;
  }
  function f(h, g, b, x) {
    var k = g !== null ? g.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return k !== null ? null : s(h, g, "" + b, x);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case jl:
          return b.key === k ? l(h, g, b, x) : null;
        case hi:
          return b.key === k ? u(h, g, b, x) : null;
        case zr:
          return k = b._init, f(
            h,
            g,
            k(b._payload),
            x
          );
      }
      if (Ka(b) || Oa(b))
        return k !== null ? null : c(h, g, b, x, null);
      Xl(h, b);
    }
    return null;
  }
  function p(h, g, b, x, k) {
    if (typeof x == "string" && x !== "" || typeof x == "number")
      return h = h.get(b) || null, s(g, h, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case jl:
          return h = h.get(x.key === null ? b : x.key) || null, l(g, h, x, k);
        case hi:
          return h = h.get(x.key === null ? b : x.key) || null, u(g, h, x, k);
        case zr:
          var P = x._init;
          return p(h, g, b, P(x._payload), k);
      }
      if (Ka(x) || Oa(x))
        return h = h.get(b) || null, c(g, h, x, k, null);
      Xl(g, x);
    }
    return null;
  }
  function y(h, g, b, x) {
    for (var k = null, P = null, T = g, _ = g = 0, M = null; T !== null && _ < b.length; _++) {
      T.index > _ ? (M = T, T = null) : M = T.sibling;
      var I = f(h, T, b[_], x);
      if (I === null) {
        T === null && (T = M);
        break;
      }
      e && T && I.alternate === null && t(h, T), g = i(I, g, _), P === null ? k = I : P.sibling = I, P = I, T = M;
    }
    if (_ === b.length)
      return n(h, T), De && Co(h, _), k;
    if (T === null) {
      for (; _ < b.length; _++)
        T = d(h, b[_], x), T !== null && (g = i(T, g, _), P === null ? k = T : P.sibling = T, P = T);
      return De && Co(h, _), k;
    }
    for (T = r(h, T); _ < b.length; _++)
      M = p(T, h, _, b[_], x), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? _ : M.key), g = i(M, g, _), P === null ? k = M : P.sibling = M, P = M);
    return e && T.forEach(function(D) {
      return t(h, D);
    }), De && Co(h, _), k;
  }
  function v(h, g, b, x) {
    var k = Oa(b);
    if (typeof k != "function")
      throw Error(F(150));
    if (b = k.call(b), b == null)
      throw Error(F(151));
    for (var P = k = null, T = g, _ = g = 0, M = null, I = b.next(); T !== null && !I.done; _++, I = b.next()) {
      T.index > _ ? (M = T, T = null) : M = T.sibling;
      var D = f(h, T, I.value, x);
      if (D === null) {
        T === null && (T = M);
        break;
      }
      e && T && D.alternate === null && t(h, T), g = i(D, g, _), P === null ? k = D : P.sibling = D, P = D, T = M;
    }
    if (I.done)
      return n(
        h,
        T
      ), De && Co(h, _), k;
    if (T === null) {
      for (; !I.done; _++, I = b.next())
        I = d(h, I.value, x), I !== null && (g = i(I, g, _), P === null ? k = I : P.sibling = I, P = I);
      return De && Co(h, _), k;
    }
    for (T = r(h, T); !I.done; _++, I = b.next())
      I = p(T, h, _, I.value, x), I !== null && (e && I.alternate !== null && T.delete(I.key === null ? _ : I.key), g = i(I, g, _), P === null ? k = I : P.sibling = I, P = I);
    return e && T.forEach(function(G) {
      return t(h, G);
    }), De && Co(h, _), k;
  }
  function S(h, g, b, x) {
    if (typeof b == "object" && b !== null && b.type === mi && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case jl:
          e: {
            for (var k = b.key, P = g; P !== null; ) {
              if (P.key === k) {
                if (k = b.type, k === mi) {
                  if (P.tag === 7) {
                    n(h, P.sibling), g = o(P, b.props.children), g.return = h, h = g;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && K0(k) === P.type) {
                  n(h, P.sibling), g = o(P, b.props), g.ref = Aa(h, P, b), g.return = h, h = g;
                  break e;
                }
                n(h, P);
                break;
              } else
                t(h, P);
              P = P.sibling;
            }
            b.type === mi ? (g = Lo(b.props.children, h.mode, x, b.key), g.return = h, h = g) : (x = Du(b.type, b.key, b.props, null, h.mode, x), x.ref = Aa(h, g, b), x.return = h, h = x);
          }
          return a(h);
        case hi:
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
            g = Lf(b, h.mode, x), g.return = h, h = g;
          }
          return a(h);
        case zr:
          return P = b._init, S(h, g, P(b._payload), x);
      }
      if (Ka(b))
        return y(h, g, b, x);
      if (Oa(b))
        return v(h, g, b, x);
      Xl(h, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, g !== null && g.tag === 6 ? (n(h, g.sibling), g = o(g, b), g.return = h, h = g) : (n(h, g), g = Ff(b, h.mode, x), g.return = h, h = g), a(h)) : n(h, g);
  }
  return S;
}
var ta = Gx(!0), Kx = Gx(!1), fl = {}, Zn = fo(fl), js = fo(fl), Ns = fo(fl);
function Ro(e) {
  if (e === fl)
    throw Error(F(174));
  return e;
}
function Zm(e, t) {
  switch (Te(Ns, t), Te(js, e), Te(Zn, fl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Up(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Up(t, e);
  }
  Re(Zn), Te(Zn, t);
}
function na() {
  Re(Zn), Re(js), Re(Ns);
}
function Yx(e) {
  Ro(Ns.current);
  var t = Ro(Zn.current), n = Up(t, e.type);
  t !== n && (Te(js, e), Te(Zn, n));
}
function Jm(e) {
  js.current === e && (Re(Zn), Re(js));
}
var ze = fo(0);
function gc(e) {
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
var Mf = [];
function ev() {
  for (var e = 0; e < Mf.length; e++)
    Mf[e]._workInProgressVersionPrimary = null;
  Mf.length = 0;
}
var Mu = Er.ReactCurrentDispatcher, If = Er.ReactCurrentBatchConfig, Uo = 0, Ne = null, tt = null, it = null, yc = !1, us = !1, Vs = 0, WO = 0;
function gt() {
  throw Error(F(321));
}
function tv(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!zn(e[n], t[n]))
      return !1;
  return !0;
}
function nv(e, t, n, r, o, i) {
  if (Uo = i, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Mu.current = e === null || e.memoizedState === null ? KO : YO, e = n(r, o), us) {
    i = 0;
    do {
      if (us = !1, Vs = 0, 25 <= i)
        throw Error(F(301));
      i += 1, it = tt = null, t.updateQueue = null, Mu.current = qO, e = n(r, o);
    } while (us);
  }
  if (Mu.current = bc, t = tt !== null && tt.next !== null, Uo = 0, it = tt = Ne = null, yc = !1, t)
    throw Error(F(300));
  return e;
}
function rv() {
  var e = Vs !== 0;
  return Vs = 0, e;
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
function Bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rf(e) {
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
      if ((Uo & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = r) : l = l.next = d, Ne.lanes |= c, Go |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, zn(r, t.memoizedState) || (At = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ne.lanes |= i, Go |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $f(e) {
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
    zn(i, t.memoizedState) || (At = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function qx() {
}
function Xx(e, t) {
  var n = Ne, r = bn(), o = t(), i = !zn(r.memoizedState, o);
  if (i && (r.memoizedState = o, At = !0), r = r.queue, ov(Jx.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || it !== null && it.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ws(9, Zx.bind(null, n, r, o, t), void 0, null), st === null)
      throw Error(F(349));
    Uo & 30 || Qx(n, t, o);
  }
  return o;
}
function Qx(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zx(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ew(t) && tw(e);
}
function Jx(e, t, n) {
  return n(function() {
    ew(t) && tw(e);
  });
}
function ew(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zn(e, n);
  } catch {
    return !0;
  }
}
function tw(e) {
  var t = Cr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function Y0(e) {
  var t = Wn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Bs, lastRenderedState: e }, t.queue = e, e = e.dispatch = GO.bind(null, Ne, e), [t.memoizedState, e];
}
function Ws(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function nw() {
  return bn().memoizedState;
}
function Iu(e, t, n, r) {
  var o = Wn();
  Ne.flags |= e, o.memoizedState = Ws(1 | t, n, void 0, r === void 0 ? null : r);
}
function cd(e, t, n, r) {
  var o = bn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (tt !== null) {
    var a = tt.memoizedState;
    if (i = a.destroy, r !== null && tv(r, a.deps)) {
      o.memoizedState = Ws(t, n, i, r);
      return;
    }
  }
  Ne.flags |= e, o.memoizedState = Ws(1 | t, n, i, r);
}
function q0(e, t) {
  return Iu(8390656, 8, e, t);
}
function ov(e, t) {
  return cd(2048, 8, e, t);
}
function rw(e, t) {
  return cd(4, 2, e, t);
}
function ow(e, t) {
  return cd(4, 4, e, t);
}
function iw(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function aw(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cd(4, 4, iw.bind(null, t, e), n);
}
function iv() {
}
function sw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tv(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lw(e, t) {
  var n = bn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tv(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function uw(e, t, n) {
  return Uo & 21 ? (zn(n, t) || (n = fx(), Ne.lanes |= n, Go |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n);
}
function HO(e, t) {
  var n = xe;
  xe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = If.transition;
  If.transition = {};
  try {
    e(!1), t();
  } finally {
    xe = n, If.transition = r;
  }
}
function cw() {
  return bn().memoizedState;
}
function UO(e, t, n) {
  var r = Jr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dw(e))
    fw(t, n);
  else if (n = Bx(e, t, n, r), n !== null) {
    var o = _t();
    An(n, e, r, o), pw(n, t, r);
  }
}
function GO(e, t, n) {
  var r = Jr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dw(e))
    fw(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, zn(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Xm(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = Bx(e, t, o, r), n !== null && (o = _t(), An(n, e, r, o), pw(n, t, r));
  }
}
function dw(e) {
  var t = e.alternate;
  return e === Ne || t !== null && t === Ne;
}
function fw(e, t) {
  us = yc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pw(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Fm(e, n);
  }
}
var bc = { readContext: yn, useCallback: gt, useContext: gt, useEffect: gt, useImperativeHandle: gt, useInsertionEffect: gt, useLayoutEffect: gt, useMemo: gt, useReducer: gt, useRef: gt, useState: gt, useDebugValue: gt, useDeferredValue: gt, useTransition: gt, useMutableSource: gt, useSyncExternalStore: gt, useId: gt, unstable_isNewReconciler: !1 }, KO = { readContext: yn, useCallback: function(e, t) {
  return Wn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: yn, useEffect: q0, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Iu(
    4194308,
    4,
    iw.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Iu(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Iu(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Wn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Wn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = UO.bind(null, Ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Wn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Y0, useDebugValue: iv, useDeferredValue: function(e) {
  return Wn().memoizedState = e;
}, useTransition: function() {
  var e = Y0(!1), t = e[0];
  return e = HO.bind(null, e[1]), Wn().memoizedState = e, [t, e];
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
    Uo & 30 || Qx(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, q0(Jx.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Ws(9, Zx.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Wn(), t = st.identifierPrefix;
  if (De) {
    var n = pr, r = fr;
    n = (r & ~(1 << 32 - $n(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = WO++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, YO = {
  readContext: yn,
  useCallback: sw,
  useContext: yn,
  useEffect: ov,
  useImperativeHandle: aw,
  useInsertionEffect: rw,
  useLayoutEffect: ow,
  useMemo: lw,
  useReducer: Rf,
  useRef: nw,
  useState: function() {
    return Rf(Bs);
  },
  useDebugValue: iv,
  useDeferredValue: function(e) {
    var t = bn();
    return uw(t, tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Rf(Bs)[0], t = bn().memoizedState;
    return [e, t];
  },
  useMutableSource: qx,
  useSyncExternalStore: Xx,
  useId: cw,
  unstable_isNewReconciler: !1
}, qO = { readContext: yn, useCallback: sw, useContext: yn, useEffect: ov, useImperativeHandle: aw, useInsertionEffect: rw, useLayoutEffect: ow, useMemo: lw, useReducer: $f, useRef: nw, useState: function() {
  return $f(Bs);
}, useDebugValue: iv, useDeferredValue: function(e) {
  var t = bn();
  return tt === null ? t.memoizedState = e : uw(t, tt.memoizedState, e);
}, useTransition: function() {
  var e = $f(Bs)[0], t = bn().memoizedState;
  return [e, t];
}, useMutableSource: qx, useSyncExternalStore: Xx, useId: cw, unstable_isNewReconciler: !1 };
function ra(e, t) {
  try {
    var n = "", r = t;
    do
      n += CE(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Af(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var XO = typeof WeakMap == "function" ? WeakMap : Map;
function hw(e, t, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    xc || (xc = !0, kh = r), hh(e, t);
  }, n;
}
function mw(e, t, n) {
  n = vr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      hh(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    hh(e, t), typeof r != "function" && (Zr === null ? Zr = /* @__PURE__ */ new Set([this]) : Zr.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function X0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new XO();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = cM.bind(null, e, t, n), t.then(e, e));
}
function Q0(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Z0(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vr(-1, 1), t.tag = 2, Qr(n, t, 1))), n.lanes |= 1), e);
}
var QO = Er.ReactCurrentOwner, At = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? Kx(t, null, n, r) : ta(t, e.child, n, r);
}
function J0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Bi(t, o), r = nv(e, t, n, r, i, o), n = rv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : (De && n && Hm(t), t.flags |= 1, Pt(e, t, r, o), t.child);
}
function ey(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !pv(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, vw(e, t, i, r, o)) : (e = Du(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ds, n(a, r) && e.ref === t.ref)
      return kr(e, t, o);
  }
  return t.flags |= 1, e = eo(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function vw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ds(i, r) && e.ref === t.ref)
      if (At = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (At = !0);
      else
        return t.lanes = e.lanes, kr(e, t, o);
  }
  return mh(e, t, n, r, o);
}
function gw(e, t, n) {
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
function yw(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function mh(e, t, n, r, o) {
  var i = Ft(n) ? Wo : wt.current;
  return i = Ji(t, i), Bi(t, o), n = nv(e, t, n, r, i, o), r = rv(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kr(e, t, o)) : (De && r && Hm(t), t.flags |= 1, Pt(e, t, n, o), t.child);
}
function ty(e, t, n, r, o) {
  if (Ft(n)) {
    var i = !0;
    dc(t);
  } else
    i = !1;
  if (Bi(t, o), t.stateNode === null)
    Ru(e, t), Ux(t, n, r), ph(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = yn(u) : (u = Ft(n) ? Wo : wt.current, u = Ji(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && G0(t, a, r, u), jr = !1;
    var f = t.memoizedState;
    a.state = f, vc(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Dt.current || jr ? (typeof c == "function" && (fh(t, n, c, r), l = t.memoizedState), (s = jr || U0(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Wx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : En(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = yn(l) : (l = Ft(n) ? Wo : wt.current, l = Ji(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && G0(t, a, r, l), jr = !1, f = t.memoizedState, a.state = f, vc(t, r, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || Dt.current || jr ? (typeof p == "function" && (fh(t, n, p, r), y = t.memoizedState), (u = jr || U0(t, n, u, r, f, y, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return vh(e, t, n, r, i, o);
}
function vh(e, t, n, r, o, i) {
  yw(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && N0(t, n, !1), kr(e, t, i);
  r = t.stateNode, QO.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = ta(t, e.child, null, i), t.child = ta(t, null, s, i)) : Pt(e, t, s, i), t.memoizedState = r.state, o && N0(t, n, !0), t.child;
}
function bw(e) {
  var t = e.stateNode;
  t.pendingContext ? j0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && j0(e, t.context, !1), Zm(e, t.containerInfo);
}
function ny(e, t, n, r, o) {
  return ea(), Gm(o), t.flags |= 256, Pt(e, t, n, r), t.child;
}
var gh = { dehydrated: null, treeContext: null, retryLane: 0 };
function yh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sw(e, t, n) {
  var r = t.pendingProps, o = ze.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Te(ze, o & 1), e === null)
    return ch(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = pd(a, r, 0, null), e = Lo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = yh(n), t.memoizedState = gh, e) : av(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return ZO(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = eo(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = eo(s, i) : (i = Lo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? yh(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = gh, r;
  }
  return i = e.child, e = i.sibling, r = eo(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function av(e, t) {
  return t = pd({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ql(e, t, n, r) {
  return r !== null && Gm(r), ta(t, e.child, null, n), e = av(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ZO(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Af(Error(F(422))), Ql(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = pd({ mode: "visible", children: r.children }, o, 0, null), i = Lo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ta(t, e.child, null, a), t.child.memoizedState = yh(a), t.memoizedState = gh, i);
  if (!(t.mode & 1))
    return Ql(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(F(419)), r = Af(i, r, void 0), Ql(e, t, a, r);
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Cr(e, o), An(r, e, o, -1));
    }
    return fv(), r = Af(Error(F(421))), Ql(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dM.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Yt = Xr(o.nextSibling), qt = t, De = !0, Mn = null, e !== null && (fn[pn++] = fr, fn[pn++] = pr, fn[pn++] = Ho, fr = e.id, pr = e.overflow, Ho = t), t = av(t, r.children), t.flags |= 4096, t);
}
function ry(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), dh(e.return, t, n);
}
function Df(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function xw(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Pt(e, t, r.children, n), r = ze.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ry(e, n, t);
          else if (e.tag === 19)
            ry(e, n, t);
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
          e = n.alternate, e !== null && gc(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Df(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && gc(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Df(t, !0, n, null, i);
        break;
      case "together":
        Df(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ru(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Go |= t.lanes, !(n & t.childLanes))
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
function JO(e, t, n) {
  switch (t.tag) {
    case 3:
      bw(t), ea();
      break;
    case 5:
      Yx(t);
      break;
    case 1:
      Ft(t.type) && dc(t);
      break;
    case 4:
      Zm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Te(hc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Te(ze, ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Sw(e, t, n) : (Te(ze, ze.current & 1), e = kr(e, t, n), e !== null ? e.sibling : null);
      Te(ze, ze.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return xw(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(ze, ze.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, gw(e, t, n);
  }
  return kr(e, t, n);
}
var ww, bh, Cw, kw;
ww = function(e, t) {
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
bh = function() {
};
Cw = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Ro(Zn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Vp(e, o), r = Vp(e, r), i = [];
        break;
      case "select":
        o = Ve({}, o, { value: void 0 }), r = Ve({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Hp(e, o), r = Hp(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = uc);
    }
    Gp(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Es.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Es.hasOwnProperty(u) ? (l != null && u === "onScroll" && Oe("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
kw = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Da(e, t) {
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
function eM(e, t, n) {
  var r = t.pendingProps;
  switch (Um(t), t.tag) {
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
      return Ft(t.type) && cc(), yt(t), null;
    case 3:
      return r = t.stateNode, na(), Re(Dt), Re(wt), ev(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ql(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Mn !== null && (_h(Mn), Mn = null))), bh(e, t), yt(t), null;
    case 5:
      Jm(t);
      var o = Ro(Ns.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Cw(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(F(166));
          return yt(t), null;
        }
        if (e = Ro(Zn.current), ql(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Yn] = t, r[zs] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Oe("cancel", r), Oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qa.length; o++)
                Oe(qa[o], r);
              break;
            case "source":
              Oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Oe(
                "error",
                r
              ), Oe("load", r);
              break;
            case "details":
              Oe("toggle", r);
              break;
            case "input":
              f0(r, i), Oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Oe("invalid", r);
              break;
            case "textarea":
              h0(r, i), Oe("invalid", r);
          }
          Gp(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Yl(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Yl(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Es.hasOwnProperty(a) && s != null && a === "onScroll" && Oe("scroll", r);
            }
          switch (n) {
            case "input":
              Nl(r), p0(r, i, !0);
              break;
            case "textarea":
              Nl(r), m0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = uc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = QS(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Yn] = t, e[zs] = r, ww(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Kp(n, r), n) {
              case "dialog":
                Oe("cancel", e), Oe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < qa.length; o++)
                  Oe(qa[o], e);
                o = r;
                break;
              case "source":
                Oe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Oe(
                  "error",
                  e
                ), Oe("load", e), o = r;
                break;
              case "details":
                Oe("toggle", e), o = r;
                break;
              case "input":
                f0(e, r), o = Vp(e, r), Oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ve({}, r, { value: void 0 }), Oe("invalid", e);
                break;
              case "textarea":
                h0(e, r), o = Hp(e, r), Oe("invalid", e);
                break;
              default:
                o = r;
            }
            Gp(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? ex(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && ZS(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Os(e, l) : typeof l == "number" && Os(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Es.hasOwnProperty(i) ? l != null && i === "onScroll" && Oe("scroll", e) : l != null && Mm(e, i, l, a));
              }
            switch (n) {
              case "input":
                Nl(e), p0(e, r, !1);
                break;
              case "textarea":
                Nl(e), m0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + io(r.value));
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
                typeof o.onClick == "function" && (e.onclick = uc);
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
        kw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(F(166));
        if (n = Ro(Ns.current), Ro(Zn.current), ql(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Yn] = t, (i = r.nodeValue !== n) && (e = qt, e !== null))
            switch (e.tag) {
              case 3:
                Yl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yn] = t, t.stateNode = r;
      }
      return yt(t), null;
    case 13:
      if (Re(ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (De && Yt !== null && t.mode & 1 && !(t.flags & 128))
          Vx(), ea(), t.flags |= 98560, i = !1;
        else if (i = ql(t), r !== null && r.dehydrated !== null) {
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
          Mn !== null && (_h(Mn), Mn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ze.current & 1 ? nt === 0 && (nt = 3) : fv())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
    case 4:
      return na(), bh(e, t), e === null && Fs(t.stateNode.containerInfo), yt(t), null;
    case 10:
      return qm(t.type._context), yt(t), null;
    case 17:
      return Ft(t.type) && cc(), yt(t), null;
    case 19:
      if (Re(ze), i = t.memoizedState, i === null)
        return yt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          Da(i, !1);
        else {
          if (nt !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = gc(e), a !== null) {
                for (t.flags |= 128, Da(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return Te(ze, ze.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ke() > oa && (t.flags |= 128, r = !0, Da(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = gc(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Da(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !De)
              return yt(t), null;
          } else
            2 * Ke() - i.renderingStartTime > oa && n !== 1073741824 && (t.flags |= 128, r = !0, Da(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ke(), t.sibling = null, n = ze.current, Te(ze, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
    case 22:
    case 23:
      return dv(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Kt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function tM(e, t) {
  switch (Um(t), t.tag) {
    case 1:
      return Ft(t.type) && cc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return na(), Re(Dt), Re(wt), ev(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Jm(t), null;
    case 13:
      if (Re(ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(F(340));
        ea();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Re(ze), null;
    case 4:
      return na(), null;
    case 10:
      return qm(t.type._context), null;
    case 22:
    case 23:
      return dv(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zl = !1, St = !1, nM = typeof WeakSet == "function" ? WeakSet : Set, B = null;
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
function Sh(e, t, n) {
  try {
    n();
  } catch (r) {
    We(e, t, r);
  }
}
var oy = !1;
function rM(e, t) {
  if (rh = ac, e = Ex(), Wm(e)) {
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
  for (oh = { focusedElem: e, selectionRange: n }, ac = !1, B = t; B !== null; )
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
                  var v = y.memoizedProps, S = y.memoizedState, h = t.stateNode, g = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : En(t.type, v), S);
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
        } catch (x) {
          We(t, t.return, x);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, B = e;
          break;
        }
        B = t.return;
      }
  return y = oy, oy = !1, y;
}
function cs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Sh(t, n, i);
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
function xh(e) {
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
function Pw(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Pw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yn], delete t[zs], delete t[sh], delete t[jO], delete t[NO])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Tw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function iy(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tw(e.return))
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
function wh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = uc));
  else if (r !== 4 && (e = e.child, e !== null))
    for (wh(e, t, n), e = e.sibling; e !== null; )
      wh(e, t, n), e = e.sibling;
}
function Ch(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ch(e, t, n), e = e.sibling; e !== null; )
      Ch(e, t, n), e = e.sibling;
}
var dt = null, On = !1;
function $r(e, t, n) {
  for (n = n.child; n !== null; )
    _w(e, t, n), n = n.sibling;
}
function _w(e, t, n) {
  if (Qn && typeof Qn.onCommitFiberUnmount == "function")
    try {
      Qn.onCommitFiberUnmount(rd, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      St || ki(n, t);
    case 6:
      var r = dt, o = On;
      dt = null, $r(e, t, n), dt = r, On = o, dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
      break;
    case 18:
      dt !== null && (On ? (e = dt, n = n.stateNode, e.nodeType === 8 ? Ef(e.parentNode, n) : e.nodeType === 1 && Ef(e, n), $s(e)) : Ef(dt, n.stateNode));
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
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Sh(n, t, a), o = o.next;
        } while (o !== r);
      }
      $r(e, t, n);
      break;
    case 1:
      if (!St && (ki(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          We(n, t, s);
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
function ay(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nM()), t.forEach(function(r) {
      var o = fM.bind(null, e, r);
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
        _w(i, a, o), dt = null, On = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        We(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Ew(t, e), t = t.sibling;
}
function Ew(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Tn(t, e), Vn(e), r & 4) {
        try {
          cs(3, e, e.return), dd(3, e);
        } catch (v) {
          We(e, e.return, v);
        }
        try {
          cs(5, e, e.return);
        } catch (v) {
          We(e, e.return, v);
        }
      }
      break;
    case 1:
      Tn(t, e), Vn(e), r & 512 && n !== null && ki(n, n.return);
      break;
    case 5:
      if (Tn(t, e), Vn(e), r & 512 && n !== null && ki(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Os(o, "");
        } catch (v) {
          We(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && qS(o, i), Kp(s, a);
            var u = Kp(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? ex(o, d) : c === "dangerouslySetInnerHTML" ? ZS(o, d) : c === "children" ? Os(o, d) : Mm(o, c, d, u);
            }
            switch (s) {
              case "input":
                Bp(o, i);
                break;
              case "textarea":
                XS(o, i);
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
            o[zs] = i;
          } catch (v) {
            We(e, e.return, v);
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
        } catch (v) {
          We(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Tn(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          $s(t.containerInfo);
        } catch (v) {
          We(e, e.return, v);
        }
      break;
    case 4:
      Tn(t, e), Vn(e);
      break;
    case 13:
      Tn(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (uv = Ke())), r & 4 && ay(e);
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
                  cs(4, f, f.return);
                  break;
                case 1:
                  ki(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (v) {
                      We(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ki(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ly(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, B = p) : ly(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = JS("display", a));
                } catch (v) {
                  We(e, e.return, v);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (v) {
                  We(e, e.return, v);
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
      Tn(t, e), Vn(e), r & 4 && ay(e);
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
          if (Tw(n)) {
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
          r.flags & 32 && (Os(o, ""), r.flags &= -33);
          var i = iy(e);
          Ch(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = iy(e);
          wh(e, s, a);
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
function oM(e, t, n) {
  B = e, Ow(e);
}
function Ow(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Zl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || St;
        s = Zl;
        var u = St;
        if (Zl = a, (St = l) && !u)
          for (B = o; B !== null; )
            a = B, l = a.child, a.tag === 22 && a.memoizedState !== null ? uy(o) : l !== null ? (l.return = a, B = l) : uy(o);
        for (; i !== null; )
          B = i, Ow(i), i = i.sibling;
        B = o, Zl = s, St = u;
      }
      sy(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, B = i) : sy(e);
  }
}
function sy(e) {
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
              St || dd(5, t);
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
              i !== null && H0(t, i, r);
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
                H0(t, a, n);
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
                    d !== null && $s(d);
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
        St || t.flags & 512 && xh(t);
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
function ly(e) {
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
function uy(e) {
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
            xh(t);
          } catch (l) {
            We(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            xh(t);
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
var iM = Math.ceil, Sc = Er.ReactCurrentDispatcher, sv = Er.ReactCurrentOwner, vn = Er.ReactCurrentBatchConfig, he = 0, st = null, Ze = null, pt = 0, Kt = 0, Pi = fo(0), nt = 0, Hs = null, Go = 0, fd = 0, lv = 0, ds = null, It = null, uv = 0, oa = 1 / 0, lr = null, xc = !1, kh = null, Zr = null, Jl = !1, Gr = null, wc = 0, fs = 0, Ph = null, $u = -1, Au = 0;
function _t() {
  return he & 6 ? Ke() : $u !== -1 ? $u : $u = Ke();
}
function Jr(e) {
  return e.mode & 1 ? he & 2 && pt !== 0 ? pt & -pt : BO.transition !== null ? (Au === 0 && (Au = fx()), Au) : (e = xe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bx(e.type)), e) : 1;
}
function An(e, t, n, r) {
  if (50 < fs)
    throw fs = 0, Ph = null, Error(F(185));
  ul(e, n, r), (!(he & 2) || e !== st) && (e === st && (!(he & 2) && (fd |= n), nt === 4 && Br(e, pt)), Lt(e, r), n === 1 && he === 0 && !(t.mode & 1) && (oa = Ke() + 500, ld && po()));
}
function Lt(e, t) {
  var n = e.callbackNode;
  BE(e, t);
  var r = ic(e, e === st ? pt : 0);
  if (r === 0)
    n !== null && y0(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && y0(n), t === 1)
      e.tag === 0 ? VO(cy.bind(null, e)) : zx(cy.bind(null, e)), LO(function() {
        !(he & 6) && po();
      }), n = null;
    else {
      switch (px(r)) {
        case 1:
          n = Dm;
          break;
        case 4:
          n = cx;
          break;
        case 16:
          n = oc;
          break;
        case 536870912:
          n = dx;
          break;
        default:
          n = oc;
      }
      n = Lw(n, Mw.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mw(e, t) {
  if ($u = -1, Au = 0, he & 6)
    throw Error(F(327));
  var n = e.callbackNode;
  if (Wi() && e.callbackNode !== n)
    return null;
  var r = ic(e, e === st ? pt : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Cc(e, r);
  else {
    t = r;
    var o = he;
    he |= 2;
    var i = Rw();
    (st !== e || pt !== t) && (lr = null, oa = Ke() + 500, Fo(e, t));
    do
      try {
        lM();
        break;
      } catch (s) {
        Iw(e, s);
      }
    while (!0);
    Ym(), Sc.current = i, he = o, Ze !== null ? t = 0 : (st = null, pt = 0, t = nt);
  }
  if (t !== 0) {
    if (t === 2 && (o = Zp(e), o !== 0 && (r = o, t = Th(e, o))), t === 1)
      throw n = Hs, Fo(e, 0), Br(e, r), Lt(e, Ke()), n;
    if (t === 6)
      Br(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !aM(o) && (t = Cc(e, r), t === 2 && (i = Zp(e), i !== 0 && (r = i, t = Th(e, i))), t === 1))
        throw n = Hs, Fo(e, 0), Br(e, r), Lt(e, Ke()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          ko(e, It, lr);
          break;
        case 3:
          if (Br(e, r), (r & 130023424) === r && (t = uv + 500 - Ke(), 10 < t)) {
            if (ic(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              _t(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ah(ko.bind(null, e, It, lr), t);
            break;
          }
          ko(e, It, lr);
          break;
        case 4:
          if (Br(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - $n(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iM(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ah(ko.bind(null, e, It, lr), r);
            break;
          }
          ko(e, It, lr);
          break;
        case 5:
          ko(e, It, lr);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Lt(e, Ke()), e.callbackNode === n ? Mw.bind(null, e) : null;
}
function Th(e, t) {
  var n = ds;
  return e.current.memoizedState.isDehydrated && (Fo(e, t).flags |= 256), e = Cc(e, t), e !== 2 && (t = It, It = n, t !== null && _h(t)), e;
}
function _h(e) {
  It === null ? It = e : It.push.apply(It, e);
}
function aM(e) {
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
  for (t &= ~lv, t &= ~fd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $n(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function cy(e) {
  if (he & 6)
    throw Error(F(327));
  Wi();
  var t = ic(e, 0);
  if (!(t & 1))
    return Lt(e, Ke()), null;
  var n = Cc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zp(e);
    r !== 0 && (t = r, n = Th(e, r));
  }
  if (n === 1)
    throw n = Hs, Fo(e, 0), Br(e, t), Lt(e, Ke()), n;
  if (n === 6)
    throw Error(F(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ko(e, It, lr), Lt(e, Ke()), null;
}
function cv(e, t) {
  var n = he;
  he |= 1;
  try {
    return e(t);
  } finally {
    he = n, he === 0 && (oa = Ke() + 500, ld && po());
  }
}
function Ko(e) {
  Gr !== null && Gr.tag === 0 && !(he & 6) && Wi();
  var t = he;
  he |= 1;
  var n = vn.transition, r = xe;
  try {
    if (vn.transition = null, xe = 1, e)
      return e();
  } finally {
    xe = r, vn.transition = n, he = t, !(he & 6) && po();
  }
}
function dv() {
  Kt = Pi.current, Re(Pi);
}
function Fo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, FO(n)), Ze !== null)
    for (n = Ze.return; n !== null; ) {
      var r = n;
      switch (Um(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && cc();
          break;
        case 3:
          na(), Re(Dt), Re(wt), ev();
          break;
        case 5:
          Jm(r);
          break;
        case 4:
          na();
          break;
        case 13:
          Re(ze);
          break;
        case 19:
          Re(ze);
          break;
        case 10:
          qm(r.type._context);
          break;
        case 22:
        case 23:
          dv();
      }
      n = n.return;
    }
  if (st = e, Ze = e = eo(e.current, null), pt = Kt = t, nt = 0, Hs = null, lv = fd = Go = 0, It = ds = null, Io !== null) {
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
function Iw(e, t) {
  do {
    var n = Ze;
    try {
      if (Ym(), Mu.current = bc, yc) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        yc = !1;
      }
      if (Uo = 0, it = tt = Ne = null, us = !1, Vs = 0, sv.current = null, n === null || n.return === null) {
        nt = 1, Hs = t, Ze = null;
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
          var p = Q0(a);
          if (p !== null) {
            p.flags &= -257, Z0(p, a, s, i, t), p.mode & 1 && X0(i, u, t), t = p, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else
              y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              X0(i, u, t), fv();
              break e;
            }
            l = Error(F(426));
          }
        } else if (De && s.mode & 1) {
          var S = Q0(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Z0(S, a, s, i, t), Gm(ra(l, s));
            break e;
          }
        }
        i = l = ra(l, s), nt !== 4 && (nt = 2), ds === null ? ds = [i] : ds.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var h = hw(i, l, t);
              W0(i, h);
              break e;
            case 1:
              s = l;
              var g = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof g.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Zr === null || !Zr.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = mw(i, s, t);
                W0(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Aw(n);
    } catch (k) {
      t = k, Ze === n && n !== null && (Ze = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rw() {
  var e = Sc.current;
  return Sc.current = bc, e === null ? bc : e;
}
function fv() {
  (nt === 0 || nt === 3 || nt === 2) && (nt = 4), st === null || !(Go & 268435455) && !(fd & 268435455) || Br(st, pt);
}
function Cc(e, t) {
  var n = he;
  he |= 2;
  var r = Rw();
  (st !== e || pt !== t) && (lr = null, Fo(e, t));
  do
    try {
      sM();
      break;
    } catch (o) {
      Iw(e, o);
    }
  while (!0);
  if (Ym(), he = n, Sc.current = r, Ze !== null)
    throw Error(F(261));
  return st = null, pt = 0, nt;
}
function sM() {
  for (; Ze !== null; )
    $w(Ze);
}
function lM() {
  for (; Ze !== null && !$E(); )
    $w(Ze);
}
function $w(e) {
  var t = Fw(e.alternate, e, Kt);
  e.memoizedProps = e.pendingProps, t === null ? Aw(e) : Ze = t, sv.current = null;
}
function Aw(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = tM(n, t), n !== null) {
        n.flags &= 32767, Ze = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        nt = 6, Ze = null;
        return;
      }
    } else if (n = eM(n, t, Kt), n !== null) {
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
function ko(e, t, n) {
  var r = xe, o = vn.transition;
  try {
    vn.transition = null, xe = 1, uM(e, t, n, r);
  } finally {
    vn.transition = o, xe = r;
  }
  return null;
}
function uM(e, t, n, r) {
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
  if (WE(e, i), e === st && (Ze = st = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Jl || (Jl = !0, Lw(oc, function() {
    return Wi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = vn.transition, vn.transition = null;
    var a = xe;
    xe = 1;
    var s = he;
    he |= 4, sv.current = null, rM(e, n), Ew(n, e), OO(oh), ac = !!rh, oh = rh = null, e.current = n, oM(n), AE(), he = s, xe = a, vn.transition = i;
  } else
    e.current = n;
  if (Jl && (Jl = !1, Gr = e, wc = o), i = e.pendingLanes, i === 0 && (Zr = null), LE(n.stateNode), Lt(e, Ke()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xc)
    throw xc = !1, e = kh, kh = null, e;
  return wc & 1 && e.tag !== 0 && Wi(), i = e.pendingLanes, i & 1 ? e === Ph ? fs++ : (fs = 0, Ph = e) : fs = 0, po(), null;
}
function Wi() {
  if (Gr !== null) {
    var e = px(wc), t = vn.transition, n = xe;
    try {
      if (vn.transition = null, xe = 16 > e ? 16 : e, Gr === null)
        var r = !1;
      else {
        if (e = Gr, Gr = null, wc = 0, he & 6)
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
                      cs(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, B = d;
                  else
                    for (; B !== null; ) {
                      c = B;
                      var f = c.sibling, p = c.return;
                      if (Pw(c), c === u) {
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
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var S = v.sibling;
                    v.sibling = null, v = S;
                  } while (v !== null);
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
                      cs(9, i, i.return);
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
        if (he = o, po(), Qn && typeof Qn.onPostCommitFiberRoot == "function")
          try {
            Qn.onPostCommitFiberRoot(rd, e);
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
function dy(e, t, n) {
  t = ra(n, t), t = hw(e, t, 1), e = Qr(e, t, 1), t = _t(), e !== null && (ul(e, 1, t), Lt(e, t));
}
function We(e, t, n) {
  if (e.tag === 3)
    dy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zr === null || !Zr.has(r))) {
          e = ra(n, e), e = mw(t, e, 1), t = Qr(t, e, 1), e = _t(), t !== null && (ul(t, 1, e), Lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function cM(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _t(), e.pingedLanes |= e.suspendedLanes & n, st === e && (pt & n) === n && (nt === 4 || nt === 3 && (pt & 130023424) === pt && 500 > Ke() - uv ? Fo(e, 0) : lv |= n), Lt(e, t);
}
function Dw(e, t) {
  t === 0 && (e.mode & 1 ? (t = Wl, Wl <<= 1, !(Wl & 130023424) && (Wl = 4194304)) : t = 1);
  var n = _t();
  e = Cr(e, t), e !== null && (ul(e, t, n), Lt(e, n));
}
function dM(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Dw(e, n);
}
function fM(e, t) {
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
  r !== null && r.delete(t), Dw(e, n);
}
var Fw;
Fw = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Dt.current)
      At = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return At = !1, JO(e, t, n);
      At = !!(e.flags & 131072);
    }
  else
    At = !1, De && t.flags & 1048576 && jx(t, pc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ru(e, t), e = t.pendingProps;
      var o = Ji(t, wt.current);
      Bi(t, n), o = nv(null, t, r, e, o, n);
      var i = rv();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ft(r) ? (i = !0, dc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Qm(t), o.updater = ud, t.stateNode = o, o._reactInternals = t, ph(t, r, e, n), t = vh(null, t, r, !0, i, n)) : (t.tag = 0, De && i && Hm(t), Pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ru(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = hM(r), e = En(r, e), o) {
          case 0:
            t = mh(null, t, r, e, n);
            break e;
          case 1:
            t = ty(null, t, r, e, n);
            break e;
          case 11:
            t = J0(null, t, r, e, n);
            break e;
          case 14:
            t = ey(null, t, r, En(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), mh(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), ty(e, t, r, o, n);
    case 3:
      e: {
        if (bw(t), e === null)
          throw Error(F(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Wx(e, t), vc(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = ra(Error(F(423)), t), t = ny(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = ra(Error(F(424)), t), t = ny(e, t, r, n, o);
            break e;
          } else
            for (Yt = Xr(t.stateNode.containerInfo.firstChild), qt = t, De = !0, Mn = null, n = Kx(t, null, r, n), t.child = n; n; )
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
      return Yx(t), e === null && ch(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, ih(r, o) ? a = null : i !== null && ih(r, i) && (t.flags |= 32), yw(e, t), Pt(e, t, a, n), t.child;
    case 6:
      return e === null && ch(t), null;
    case 13:
      return Sw(e, t, n);
    case 4:
      return Zm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ta(t, null, r, n) : Pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), J0(e, t, r, o, n);
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, Te(hc, r._currentValue), r._currentValue = a, i !== null)
          if (zn(i.value, a)) {
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
                      l = vr(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), dh(
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
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), dh(a, n, t), a = i.sibling;
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
      return r = t.type, o = En(r, t.pendingProps), o = En(r.type, o), ey(e, t, r, o, n);
    case 15:
      return vw(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : En(r, o), Ru(e, t), t.tag = 1, Ft(r) ? (e = !0, dc(t)) : e = !1, Bi(t, n), Ux(t, r, o), ph(t, r, o, n), vh(null, t, r, !0, e, n);
    case 19:
      return xw(e, t, n);
    case 22:
      return gw(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function Lw(e, t) {
  return ux(e, t);
}
function pM(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function hn(e, t, n, r) {
  return new pM(e, t, n, r);
}
function pv(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hM(e) {
  if (typeof e == "function")
    return pv(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Rm)
      return 11;
    if (e === $m)
      return 14;
  }
  return 2;
}
function eo(e, t) {
  var n = e.alternate;
  return n === null ? (n = hn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Du(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    pv(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case mi:
          return Lo(n.children, o, i, t);
        case Im:
          a = 8, o |= 8;
          break;
        case Lp:
          return e = hn(12, n, t, o | 2), e.elementType = Lp, e.lanes = i, e;
        case zp:
          return e = hn(13, n, t, o), e.elementType = zp, e.lanes = i, e;
        case jp:
          return e = hn(19, n, t, o), e.elementType = jp, e.lanes = i, e;
        case GS:
          return pd(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case HS:
                a = 10;
                break e;
              case US:
                a = 9;
                break e;
              case Rm:
                a = 11;
                break e;
              case $m:
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
function Lo(e, t, n, r) {
  return e = hn(7, e, r, t), e.lanes = n, e;
}
function pd(e, t, n, r) {
  return e = hn(22, e, r, t), e.elementType = GS, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ff(e, t, n) {
  return e = hn(6, e, null, t), e.lanes = n, e;
}
function Lf(e, t, n) {
  return t = hn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function mM(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gf(0), this.expirationTimes = gf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function hv(e, t, n, r, o, i, a, s, l) {
  return e = new mM(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = hn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qm(i), e;
}
function vM(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function zw(e) {
  if (!e)
    return ao;
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
      return Lx(e, n, t);
  }
  return t;
}
function jw(e, t, n, r, o, i, a, s, l) {
  return e = hv(n, r, !0, e, o, i, a, s, l), e.context = zw(null), n = e.current, r = _t(), o = Jr(n), i = vr(r, o), i.callback = t ?? null, Qr(n, i, o), e.current.lanes = o, ul(e, o, r), Lt(e, r), e;
}
function hd(e, t, n, r) {
  var o = t.current, i = _t(), a = Jr(o);
  return n = zw(n), t.context === null ? t.context = n : t.pendingContext = n, t = vr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qr(o, t, a), e !== null && (An(e, o, a, i), Ou(e, o, a)), a;
}
function kc(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fy(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function mv(e, t) {
  fy(e, t), (e = e.alternate) && fy(e, t);
}
function gM() {
  return null;
}
var Nw = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function vv(e) {
  this._internalRoot = e;
}
md.prototype.render = vv.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(F(409));
  hd(e, t, null, null);
};
md.prototype.unmount = vv.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ko(function() {
      hd(null, e, null, null);
    }), t[wr] = null;
  }
};
function md(e) {
  this._internalRoot = e;
}
md.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vr.length && t !== 0 && t < Vr[n].priority; n++)
      ;
    Vr.splice(n, 0, e), n === 0 && yx(e);
  }
};
function gv(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function vd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function py() {
}
function yM(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = kc(a);
        i.call(u);
      };
    }
    var a = jw(t, r, e, 0, null, !1, !1, "", py);
    return e._reactRootContainer = a, e[wr] = a.current, Fs(e.nodeType === 8 ? e.parentNode : e), Ko(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = kc(l);
      s.call(u);
    };
  }
  var l = hv(e, 0, !1, null, null, !1, !1, "", py);
  return e._reactRootContainer = l, e[wr] = l.current, Fs(e.nodeType === 8 ? e.parentNode : e), Ko(function() {
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
        var l = kc(a);
        s.call(l);
      };
    }
    hd(t, a, e, o);
  } else
    a = yM(n, t, e, o, r);
  return kc(a);
}
hx = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ya(t.pendingLanes);
        n !== 0 && (Fm(t, n | 1), Lt(t, Ke()), !(he & 6) && (oa = Ke() + 500, po()));
      }
      break;
    case 13:
      Ko(function() {
        var r = Cr(e, 1);
        if (r !== null) {
          var o = _t();
          An(r, e, 1, o);
        }
      }), mv(e, 1);
  }
};
Lm = function(e) {
  if (e.tag === 13) {
    var t = Cr(e, 134217728);
    if (t !== null) {
      var n = _t();
      An(t, e, 134217728, n);
    }
    mv(e, 134217728);
  }
};
mx = function(e) {
  if (e.tag === 13) {
    var t = Jr(e), n = Cr(e, t);
    if (n !== null) {
      var r = _t();
      An(n, e, t, r);
    }
    mv(e, t);
  }
};
vx = function() {
  return xe;
};
gx = function(e, t) {
  var n = xe;
  try {
    return xe = e, t();
  } finally {
    xe = n;
  }
};
qp = function(e, t, n) {
  switch (t) {
    case "input":
      if (Bp(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = sd(r);
            if (!o)
              throw Error(F(90));
            YS(r), Bp(r, o);
          }
        }
      }
      break;
    case "textarea":
      XS(e, n);
      break;
    case "select":
      t = n.value, t != null && zi(e, !!n.multiple, t, !1);
  }
};
rx = cv;
ox = Ko;
var bM = { usingClientEntryPoint: !1, Events: [dl, bi, sd, tx, nx, cv] }, Fa = { findFiberByHostInstance: Mo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, SM = { bundleType: Fa.bundleType, version: Fa.version, rendererPackageName: Fa.rendererPackageName, rendererConfig: Fa.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Er.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = sx(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Fa.findFiberByHostInstance || gM, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eu.isDisabled && eu.supportsFiber)
    try {
      rd = eu.inject(SM), Qn = eu;
    } catch {
    }
}
tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bM;
tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gv(t))
    throw Error(F(200));
  return vM(e, t, null, n);
};
tn.createRoot = function(e, t) {
  if (!gv(e))
    throw Error(F(299));
  var n = !1, r = "", o = Nw;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = hv(e, 1, !1, null, null, n, !1, r, o), e[wr] = t.current, Fs(e.nodeType === 8 ? e.parentNode : e), new vv(t);
};
tn.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(F(188)) : (e = Object.keys(e).join(","), Error(F(268, e)));
  return e = sx(t), e = e === null ? null : e.stateNode, e;
};
tn.flushSync = function(e) {
  return Ko(e);
};
tn.hydrate = function(e, t, n) {
  if (!vd(t))
    throw Error(F(200));
  return gd(null, e, t, !0, n);
};
tn.hydrateRoot = function(e, t, n) {
  if (!gv(e))
    throw Error(F(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = Nw;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = jw(t, null, e, 1, n ?? null, o, !1, i, a), e[wr] = t.current, Fs(e), r)
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
  return e._reactRootContainer ? (Ko(function() {
    gd(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wr] = null;
    });
  }), !0) : !1;
};
tn.unstable_batchedUpdates = cv;
tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!vd(n))
    throw Error(F(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(F(38));
  return gd(e, t, n, !1, r);
};
tn.version = "18.2.0-next-9e3b772b8-20220608";
function Vw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vw);
    } catch (e) {
      console.error(e);
    }
}
Vw(), jS.exports = tn;
var yd = jS.exports, hy = yd;
Dp.createRoot = hy.createRoot, Dp.hydrateRoot = hy.hydrateRoot;
var Bw = "Expected a function", my = NaN, xM = "[object Symbol]", wM = /^\s+|\s+$/g, CM = /^[-+]0x[0-9a-f]+$/i, kM = /^0b[01]+$/i, PM = /^0o[0-7]+$/i, TM = parseInt, _M = typeof Hr == "object" && Hr && Hr.Object === Object && Hr, EM = typeof self == "object" && self && self.Object === Object && self, OM = _M || EM || Function("return this")(), MM = Object.prototype, IM = MM.toString, RM = Math.max, $M = Math.min, zf = function() {
  return OM.Date.now();
};
function AM(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(Bw);
  t = vy(t) || 0, Pc(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? RM(vy(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var T = r, _ = o;
    return r = o = void 0, u = P, a = e.apply(_, T), a;
  }
  function y(P) {
    return u = P, s = setTimeout(h, t), c ? p(P) : a;
  }
  function v(P) {
    var T = P - l, _ = P - u, M = t - T;
    return d ? $M(M, i - _) : M;
  }
  function S(P) {
    var T = P - l, _ = P - u;
    return l === void 0 || T >= t || T < 0 || d && _ >= i;
  }
  function h() {
    var P = zf();
    if (S(P))
      return g(P);
    s = setTimeout(h, v(P));
  }
  function g(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? a : g(zf());
  }
  function k() {
    var P = zf(), T = S(P);
    if (r = arguments, o = this, l = P, T) {
      if (s === void 0)
        return y(l);
      if (d)
        return s = setTimeout(h, t), p(l);
    }
    return s === void 0 && (s = setTimeout(h, t)), a;
  }
  return k.cancel = b, k.flush = x, k;
}
function DM(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Bw);
  return Pc(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), AM(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Pc(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function FM(e) {
  return !!e && typeof e == "object";
}
function LM(e) {
  return typeof e == "symbol" || FM(e) && IM.call(e) == xM;
}
function vy(e) {
  if (typeof e == "number")
    return e;
  if (LM(e))
    return my;
  if (Pc(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pc(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(wM, "");
  var n = kM.test(e);
  return n || PM.test(e) ? TM(e.slice(2), n ? 2 : 8) : CM.test(e) ? my : +e;
}
var zM = DM;
const jM = /* @__PURE__ */ sl(zM);
function NM(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function VM(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var BM = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(VM(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = NM(o);
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
}(), bt = "-ms-", Tc = "-moz-", ge = "-webkit-", Ww = "comm", yv = "rule", bv = "decl", WM = "@import", Hw = "@keyframes", HM = "@layer", UM = Math.abs, bd = String.fromCharCode, GM = Object.assign;
function KM(e, t) {
  return ft(e, 0) ^ 45 ? (((t << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function Uw(e) {
  return e.trim();
}
function YM(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Eh(e, t) {
  return e.indexOf(t);
}
function ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Us(e, t, n) {
  return e.slice(t, n);
}
function Gn(e) {
  return e.length;
}
function Sv(e) {
  return e.length;
}
function tu(e, t) {
  return t.push(e), e;
}
function qM(e, t) {
  return e.map(t).join("");
}
var Sd = 1, ia = 1, Gw = 0, Vt = 0, Qe = 0, xa = "";
function xd(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Sd, column: ia, length: a, return: "" };
}
function La(e, t) {
  return GM(xd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function XM() {
  return Qe;
}
function QM() {
  return Qe = Vt > 0 ? ft(xa, --Vt) : 0, ia--, Qe === 10 && (ia = 1, Sd--), Qe;
}
function Xt() {
  return Qe = Vt < Gw ? ft(xa, Vt++) : 0, ia++, Qe === 10 && (ia = 1, Sd++), Qe;
}
function Jn() {
  return ft(xa, Vt);
}
function Fu() {
  return Vt;
}
function pl(e, t) {
  return Us(xa, e, t);
}
function Gs(e) {
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
function Kw(e) {
  return Sd = ia = 1, Gw = Gn(xa = e), Vt = 0, [];
}
function Yw(e) {
  return xa = "", e;
}
function Lu(e) {
  return Uw(pl(Vt - 1, Oh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ZM(e) {
  for (; (Qe = Jn()) && Qe < 33; )
    Xt();
  return Gs(e) > 2 || Gs(Qe) > 3 ? "" : " ";
}
function JM(e, t) {
  for (; --t && Xt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return pl(e, Fu() + (t < 6 && Jn() == 32 && Xt() == 32));
}
function Oh(e) {
  for (; Xt(); )
    switch (Qe) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Oh(Qe);
        break;
      case 40:
        e === 41 && Oh(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Vt;
}
function eI(e, t) {
  for (; Xt() && e + Qe !== 57; )
    if (e + Qe === 84 && Jn() === 47)
      break;
  return "/*" + pl(t, Vt - 1) + "*" + bd(e === 47 ? e : Xt());
}
function tI(e) {
  for (; !Gs(Jn()); )
    Xt();
  return pl(e, Vt);
}
function nI(e) {
  return Yw(zu("", null, null, null, [""], e = Kw(e), 0, [0], e));
}
function zu(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, y = 0, v = 1, S = 1, h = 1, g = 0, b = "", x = o, k = i, P = r, T = b; S; )
    switch (y = g, g = Xt()) {
      case 40:
        if (y != 108 && ft(T, d - 1) == 58) {
          Eh(T += ye(Lu(g), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Lu(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += ZM(y);
        break;
      case 92:
        T += JM(Fu() - 1, 7);
        continue;
      case 47:
        switch (Jn()) {
          case 42:
          case 47:
            tu(rI(eI(Xt(), Fu()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * v:
        s[u++] = Gn(T) * h;
      case 125 * v:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            h == -1 && (T = ye(T, /\f/g, "")), p > 0 && Gn(T) - d && tu(p > 32 ? yy(T + ";", r, n, d - 1) : yy(ye(T, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (tu(P = gy(T, t, n, u, c, o, s, b, x = [], k = [], d), i), g === 123)
              if (c === 0)
                zu(T, t, P, P, x, i, d, s, k);
              else
                switch (f === 99 && ft(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    zu(e, P, P, r && tu(gy(e, P, P, 0, 0, o, s, b, o, x = [], d), k), o, k, d, s, r ? x : k);
                    break;
                  default:
                    zu(T, P, P, P, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, v = h = 1, b = T = "", d = a;
        break;
      case 58:
        d = 1 + Gn(T), p = y;
      default:
        if (v < 1) {
          if (g == 123)
            --v;
          else if (g == 125 && v++ == 0 && QM() == 125)
            continue;
        }
        switch (T += bd(g), g * v) {
          case 38:
            h = c > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            s[u++] = (Gn(T) - 1) * h, h = 1;
            break;
          case 64:
            Jn() === 45 && (T += Lu(Xt())), f = Jn(), c = d = Gn(b = T += tI(Fu())), g++;
            break;
          case 45:
            y === 45 && Gn(T) == 2 && (v = 0);
        }
    }
  return i;
}
function gy(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = Sv(f), y = 0, v = 0, S = 0; y < r; ++y)
    for (var h = 0, g = Us(e, d + 1, d = UM(v = a[y])), b = e; h < p; ++h)
      (b = Uw(v > 0 ? f[h] + " " + g : ye(g, /&\f/g, f[h]))) && (l[S++] = b);
  return xd(e, t, n, o === 0 ? yv : s, l, u, c);
}
function rI(e, t, n) {
  return xd(e, t, n, Ww, bd(XM()), Us(e, 2, -2), 0);
}
function yy(e, t, n, r) {
  return xd(e, t, n, bv, Us(e, 0, r), Us(e, r + 1, -1), r);
}
function Hi(e, t) {
  for (var n = "", r = Sv(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function oI(e, t, n, r) {
  switch (e.type) {
    case HM:
      if (e.children.length)
        break;
    case WM:
    case bv:
      return e.return = e.return || e.value;
    case Ww:
      return "";
    case Hw:
      return e.return = e.value + "{" + Hi(e.children, r) + "}";
    case yv:
      e.value = e.props.join(",");
  }
  return Gn(n = Hi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function iI(e) {
  var t = Sv(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function aI(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var by = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function qw(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var sI = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Jn(), o === 38 && i === 12 && (n[r] = 1), !Gs(i); )
    Xt();
  return pl(t, Vt);
}, lI = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Gs(o)) {
      case 0:
        o === 38 && Jn() === 12 && (n[r] = 1), t[r] += sI(Vt - 1, n, r);
        break;
      case 2:
        t[r] += Lu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Jn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += bd(o);
    }
  while (o = Xt());
  return t;
}, uI = function(t, n) {
  return Yw(lI(Kw(t), n));
}, Sy = /* @__PURE__ */ new WeakMap(), cI = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Sy.get(r)) && !o) {
      Sy.set(t, !0);
      for (var i = [], a = uI(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, dI = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Xw(e, t) {
  switch (KM(e, t)) {
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
      return ge + e + Tc + e + bt + e + e;
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
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ge + "$2-$3$1" + Tc + (ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Eh(e, "stretch") ? Xw(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ft(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ft(e, Gn(e) - 3 - (~Eh(e, "!important") && 10))) {
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
var fI = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case bv:
        t.return = Xw(t.value, t.length);
        break;
      case Hw:
        return Hi([La(t, {
          value: ye(t.value, "@", "@" + ge)
        })], o);
      case yv:
        if (t.length)
          return qM(t.props, function(i) {
            switch (YM(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Hi([La(t, {
                  props: [ye(i, /:(read-\w+)/, ":" + Tc + "$1")]
                })], o);
              case "::placeholder":
                return Hi([La(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + ge + "input-$1")]
                }), La(t, {
                  props: [ye(i, /:(plac\w+)/, ":" + Tc + "$1")]
                }), La(t, {
                  props: [ye(i, /:(plac\w+)/, bt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, pI = [fI], hI = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var S = v.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || pI, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var S = v.getAttribute("data-emotion").split(" "), h = 1; h < S.length; h++)
        i[S[h]] = !0;
      s.push(v);
    }
  );
  var l, u = [cI, dI];
  {
    var c, d = [oI, aI(function(v) {
      c.insert(v);
    })], f = iI(u.concat(o, d)), p = function(S) {
      return Hi(nI(S), f);
    };
    l = function(S, h, g, b) {
      c = g, p(S ? S + "{" + h.styles + "}" : h.styles), b && (y.inserted[h.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new BM({
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
var Qw = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, xv = lt ? Symbol.for("react.element") : 60103, wv = lt ? Symbol.for("react.portal") : 60106, wd = lt ? Symbol.for("react.fragment") : 60107, Cd = lt ? Symbol.for("react.strict_mode") : 60108, kd = lt ? Symbol.for("react.profiler") : 60114, Pd = lt ? Symbol.for("react.provider") : 60109, Td = lt ? Symbol.for("react.context") : 60110, Cv = lt ? Symbol.for("react.async_mode") : 60111, _d = lt ? Symbol.for("react.concurrent_mode") : 60111, Ed = lt ? Symbol.for("react.forward_ref") : 60112, Od = lt ? Symbol.for("react.suspense") : 60113, mI = lt ? Symbol.for("react.suspense_list") : 60120, Md = lt ? Symbol.for("react.memo") : 60115, Id = lt ? Symbol.for("react.lazy") : 60116, vI = lt ? Symbol.for("react.block") : 60121, gI = lt ? Symbol.for("react.fundamental") : 60117, yI = lt ? Symbol.for("react.responder") : 60118, bI = lt ? Symbol.for("react.scope") : 60119;
function rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case xv:
        switch (e = e.type, e) {
          case Cv:
          case _d:
          case wd:
          case kd:
          case Cd:
          case Od:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Td:
              case Ed:
              case Id:
              case Md:
              case Pd:
                return e;
              default:
                return t;
            }
        }
      case wv:
        return t;
    }
  }
}
function Zw(e) {
  return rn(e) === _d;
}
we.AsyncMode = Cv;
we.ConcurrentMode = _d;
we.ContextConsumer = Td;
we.ContextProvider = Pd;
we.Element = xv;
we.ForwardRef = Ed;
we.Fragment = wd;
we.Lazy = Id;
we.Memo = Md;
we.Portal = wv;
we.Profiler = kd;
we.StrictMode = Cd;
we.Suspense = Od;
we.isAsyncMode = function(e) {
  return Zw(e) || rn(e) === Cv;
};
we.isConcurrentMode = Zw;
we.isContextConsumer = function(e) {
  return rn(e) === Td;
};
we.isContextProvider = function(e) {
  return rn(e) === Pd;
};
we.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xv;
};
we.isForwardRef = function(e) {
  return rn(e) === Ed;
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
  return rn(e) === wv;
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
  return typeof e == "string" || typeof e == "function" || e === wd || e === _d || e === kd || e === Cd || e === Od || e === mI || typeof e == "object" && e !== null && (e.$$typeof === Id || e.$$typeof === Md || e.$$typeof === Pd || e.$$typeof === Td || e.$$typeof === Ed || e.$$typeof === gI || e.$$typeof === yI || e.$$typeof === bI || e.$$typeof === vI);
};
we.typeOf = rn;
Qw.exports = we;
var SI = Qw.exports, Jw = SI, xI = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wI = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, eC = {};
eC[Jw.ForwardRef] = xI;
eC[Jw.Memo] = wI;
var CI = !0;
function tC(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var kv = function(t, n, r) {
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
  CI === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Pv = function(t, n, r) {
  kv(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function kI(e) {
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
var PI = {
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
}, TI = /[A-Z]|^ms/g, _I = /_EMO_([^_]+?)_([^]*?)_EMO_/g, nC = function(t) {
  return t.charCodeAt(1) === 45;
}, xy = function(t) {
  return t != null && typeof t != "boolean";
}, jf = /* @__PURE__ */ qw(function(e) {
  return nC(e) ? e : e.replace(TI, "-$&").toLowerCase();
}), wy = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(_I, function(r, o, i) {
          return Kn = {
            name: o,
            styles: i,
            next: Kn
          }, o;
        });
  }
  return PI[t] !== 1 && !nC(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ks(e, t, n) {
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
      return EI(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Kn, a = n(e);
        return Kn = i, Ks(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function EI(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ks(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : xy(a) && (r += jf(i) + ":" + wy(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          xy(a[s]) && (r += jf(i) + ":" + wy(i, a[s]) + ";");
      else {
        var l = Ks(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += jf(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Cy = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Kn, Rd = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Kn = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Ks(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Ks(r, n, t[s]), o && (i += a[s]);
  Cy.lastIndex = 0;
  for (var l = "", u; (u = Cy.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = kI(i) + l;
  return {
    name: c,
    styles: i,
    next: Kn
  };
}, OI = function(t) {
  return t();
}, rC = l0.useInsertionEffect ? l0.useInsertionEffect : !1, oC = rC || OI, ky = rC || m.useLayoutEffect, Tv = {}.hasOwnProperty, iC = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ hI({
    key: "css"
  }) : null
);
iC.Provider;
var _v = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(n, r) {
    var o = m.useContext(iC);
    return t(n, o, r);
  });
}, aa = /* @__PURE__ */ m.createContext({}), MI = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return q({}, t, n);
}, II = /* @__PURE__ */ by(function(e) {
  return by(function(t) {
    return MI(e, t);
  });
}), RI = function(t) {
  var n = m.useContext(aa);
  return t.theme !== n && (n = II(n)(t.theme)), /* @__PURE__ */ m.createElement(aa.Provider, {
    value: n
  }, t.children);
}, Mh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", $I = function(t, n) {
  var r = {};
  for (var o in n)
    Tv.call(n, o) && (r[o] = n[o]);
  return r[Mh] = t, r;
}, AI = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return kv(n, r, o), oC(function() {
    return Pv(n, r, o);
  }), null;
}, DI = /* @__PURE__ */ _v(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Mh], i = [r], a = "";
  typeof e.className == "string" ? a = tC(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Rd(i, void 0, m.useContext(aa));
  a += t.key + "-" + s.name;
  var l = {};
  for (var u in e)
    Tv.call(e, u) && u !== "css" && u !== Mh && (l[u] = e[u]);
  return l.ref = n, l.className = a, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(AI, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ m.createElement(o, l));
}), FI = DI, ee = function(t, n) {
  var r = arguments;
  if (n == null || !Tv.call(n, "css"))
    return m.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = FI, i[1] = $I(t, n);
  for (var a = 2; a < o; a++)
    i[a] = r[a];
  return m.createElement.apply(null, i);
}, $d = /* @__PURE__ */ _v(function(e, t) {
  var n = e.styles, r = Rd([n], void 0, m.useContext(aa)), o = m.useRef();
  return ky(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), ky(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Pv(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function Ev() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Rd(t);
}
var aC = function() {
  var t = Ev.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, sC = String.raw, lC = sC`
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
`, LI = () => /* @__PURE__ */ w.jsx($d, { styles: lC }), zI = ({ scope: e = "" }) => /* @__PURE__ */ w.jsx(
  $d,
  {
    styles: sC`
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

      ${lC}
    `
  }
);
function jI(e, t) {
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
  } = e, s = m.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = m.useContext(s);
    if (!c && n) {
      const d = new Error(
        i ?? jI(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [NI, VI] = Je({
  strict: !1,
  name: "PortalManagerContext"
});
function uC(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ w.jsx(NI, { value: { zIndex: n }, children: t });
}
uC.displayName = "PortalManager";
var sa = globalThis != null && globalThis.document ? m.useLayoutEffect : m.useEffect, [cC, BI] = Je({
  strict: !1,
  name: "PortalContext"
}), Ov = "chakra-portal", WI = ".chakra-portal", HI = (e) => /* @__PURE__ */ w.jsx(
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
), UI = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = m.useState(null), i = m.useRef(null), [, a] = m.useState({});
  m.useEffect(() => a({}), []);
  const s = BI(), l = VI();
  sa(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = Ov, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ w.jsx(HI, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? yd.createPortal(
    /* @__PURE__ */ w.jsx(cC, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ w.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, GI = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = m.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Ov), l;
  }, [o]), [, s] = m.useState({});
  return sa(() => s({}), []), sa(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? yd.createPortal(
    /* @__PURE__ */ w.jsx(cC, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function hl(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ w.jsx(GI, { containerRef: n, ...r }) : /* @__PURE__ */ w.jsx(UI, { ...r });
}
hl.className = Ov;
hl.selector = WI;
hl.displayName = "Portal";
function ho() {
  const e = m.useContext(
    aa
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Mv = m.createContext({});
Mv.displayName = "ColorModeContext";
function wa() {
  const e = m.useContext(Mv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Py(e, t) {
  const { colorMode: n } = wa();
  return n === "dark" ? t : e;
}
var nu = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function KI(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? nu.dark : nu.light), document.body.classList.remove(r ? nu.light : nu.dark);
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
var YI = "chakra-ui-color-mode";
function qI(e) {
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
var XI = qI(YI), Ty = () => {
};
function _y(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function dC(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = XI
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = m.useState(
    () => _y(a, s)
  ), [c, d] = m.useState(
    () => _y(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: y, addListener: v } = m.useMemo(
    () => KI({ preventTransition: i }),
    [i]
  ), S = o === "system" && !l ? c : l, h = m.useCallback(
    (x) => {
      const k = x === "system" ? f() : x;
      u(k), p(k === "dark"), y(k), a.set(k);
    },
    [a, f, p, y]
  );
  sa(() => {
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
  const g = m.useCallback(() => {
    h(S === "dark" ? "light" : "dark");
  }, [S, h]);
  m.useEffect(() => {
    if (r)
      return v(h);
  }, [r, v, h]);
  const b = m.useMemo(
    () => ({
      colorMode: t ?? S,
      toggleColorMode: t ? Ty : g,
      setColorMode: t ? Ty : h,
      forced: t !== void 0
    }),
    [S, g, h, t]
  );
  return /* @__PURE__ */ w.jsx(Mv.Provider, { value: b, children: n });
}
dC.displayName = "ColorModeProvider";
var QI = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function ZI(e) {
  let t = e;
  return QI.has(t) || (t = "light"), t;
}
function JI(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = ZI(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function eR(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ w.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: JI(e) }
    }
  );
}
function tR() {
  const e = wa(), t = ho();
  return { ...e, theme: t };
}
var ae = (...e) => e.filter(Boolean).join(" ");
function nR() {
  return !1;
}
function zt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var ml = (e) => {
  const { condition: t, message: n } = e;
  t && nR() && console.warn(n);
};
function Xn(e, ...t) {
  return rR(e) ? e(...t) : e;
}
var rR = (e) => typeof e == "function", dn = (e) => e ? "" : void 0, Nf = (e) => e ? !0 : void 0;
function Le(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function fC(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var _c = { exports: {} };
_c.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", y = "[object GeneratorFunction]", v = "[object Map]", S = "[object Number]", h = "[object Null]", g = "[object Object]", b = "[object Proxy]", x = "[object RegExp]", k = "[object Set]", P = "[object String]", T = "[object Undefined]", _ = "[object WeakMap]", M = "[object ArrayBuffer]", I = "[object DataView]", D = "[object Float32Array]", G = "[object Float64Array]", H = "[object Int8Array]", L = "[object Int16Array]", W = "[object Int32Array]", K = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", A = "[object Uint16Array]", z = "[object Uint32Array]", U = /[\\^$.*+?()[\]{}|]/g, V = /^\[object .+?Constructor\]$/, Y = /^(?:0|[1-9]\d*)$/, j = {};
  j[D] = j[G] = j[H] = j[L] = j[W] = j[K] = j[$] = j[A] = j[z] = !0, j[s] = j[l] = j[M] = j[c] = j[I] = j[d] = j[f] = j[p] = j[v] = j[S] = j[g] = j[x] = j[k] = j[P] = j[_] = !1;
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
  var Ut = Array.prototype, Ir = Function.prototype, vt = Object.prototype, Nn = ie["__core-js_shared__"], Rr = Ir.toString, an = vt.hasOwnProperty, ri = function() {
    var C = /[^.]+$/.exec(Nn && Nn.keys && Nn.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), ka = vt.toString, Il = Rr.call(Object), Rl = RegExp(
    "^" + Rr.call(an).replace(U, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), go = Ce ? ie.Buffer : void 0, Bg = ie.Symbol, Wg = ie.Uint8Array, Hg = go ? go.allocUnsafe : void 0, Ug = Ge(Object.getPrototypeOf, Object), Gg = Object.create, GT = vt.propertyIsEnumerable, KT = Ut.splice, yo = Bg ? Bg.toStringTag : void 0, $l = function() {
    try {
      var C = rf(Object, "defineProperty");
      return C({}, "", {}), C;
    } catch {
    }
  }(), YT = go ? go.isBuffer : void 0, Kg = Math.max, qT = Date.now, Yg = rf(ie, "Map"), Pa = rf(Object, "create"), XT = /* @__PURE__ */ function() {
    function C() {
    }
    return function(E) {
      if (!So(E))
        return {};
      if (Gg)
        return Gg(E);
      C.prototype = E;
      var R = new C();
      return C.prototype = void 0, R;
    };
  }();
  function bo(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function QT() {
    this.__data__ = Pa ? Pa(null) : {}, this.size = 0;
  }
  function ZT(C) {
    var E = this.has(C) && delete this.__data__[C];
    return this.size -= E ? 1 : 0, E;
  }
  function JT(C) {
    var E = this.__data__;
    if (Pa) {
      var R = E[C];
      return R === r ? void 0 : R;
    }
    return an.call(E, C) ? E[C] : void 0;
  }
  function e_(C) {
    var E = this.__data__;
    return Pa ? E[C] !== void 0 : an.call(E, C);
  }
  function t_(C, E) {
    var R = this.__data__;
    return this.size += this.has(C) ? 0 : 1, R[C] = Pa && E === void 0 ? r : E, this;
  }
  bo.prototype.clear = QT, bo.prototype.delete = ZT, bo.prototype.get = JT, bo.prototype.has = e_, bo.prototype.set = t_;
  function ar(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function n_() {
    this.__data__ = [], this.size = 0;
  }
  function r_(C) {
    var E = this.__data__, R = Al(E, C);
    if (R < 0)
      return !1;
    var N = E.length - 1;
    return R == N ? E.pop() : KT.call(E, R, 1), --this.size, !0;
  }
  function o_(C) {
    var E = this.__data__, R = Al(E, C);
    return R < 0 ? void 0 : E[R][1];
  }
  function i_(C) {
    return Al(this.__data__, C) > -1;
  }
  function a_(C, E) {
    var R = this.__data__, N = Al(R, C);
    return N < 0 ? (++this.size, R.push([C, E])) : R[N][1] = E, this;
  }
  ar.prototype.clear = n_, ar.prototype.delete = r_, ar.prototype.get = o_, ar.prototype.has = i_, ar.prototype.set = a_;
  function oi(C) {
    var E = -1, R = C == null ? 0 : C.length;
    for (this.clear(); ++E < R; ) {
      var N = C[E];
      this.set(N[0], N[1]);
    }
  }
  function s_() {
    this.size = 0, this.__data__ = {
      hash: new bo(),
      map: new (Yg || ar)(),
      string: new bo()
    };
  }
  function l_(C) {
    var E = Fl(this, C).delete(C);
    return this.size -= E ? 1 : 0, E;
  }
  function u_(C) {
    return Fl(this, C).get(C);
  }
  function c_(C) {
    return Fl(this, C).has(C);
  }
  function d_(C, E) {
    var R = Fl(this, C), N = R.size;
    return R.set(C, E), this.size += R.size == N ? 0 : 1, this;
  }
  oi.prototype.clear = s_, oi.prototype.delete = l_, oi.prototype.get = u_, oi.prototype.has = c_, oi.prototype.set = d_;
  function ii(C) {
    var E = this.__data__ = new ar(C);
    this.size = E.size;
  }
  function f_() {
    this.__data__ = new ar(), this.size = 0;
  }
  function p_(C) {
    var E = this.__data__, R = E.delete(C);
    return this.size = E.size, R;
  }
  function h_(C) {
    return this.__data__.get(C);
  }
  function m_(C) {
    return this.__data__.has(C);
  }
  function v_(C, E) {
    var R = this.__data__;
    if (R instanceof ar) {
      var N = R.__data__;
      if (!Yg || N.length < n - 1)
        return N.push([C, E]), this.size = ++R.size, this;
      R = this.__data__ = new oi(N);
    }
    return R.set(C, E), this.size = R.size, this;
  }
  ii.prototype.clear = f_, ii.prototype.delete = p_, ii.prototype.get = h_, ii.prototype.has = m_, ii.prototype.set = v_;
  function g_(C, E) {
    var R = sf(C), N = !R && af(C), pe = !R && !N && Jg(C), ke = !R && !N && !pe && t0(C), $e = R || N || pe || ke, ce = $e ? Mr(C.length, String) : [], Ae = ce.length;
    for (var sn in C)
      (E || an.call(C, sn)) && !($e && // Safari 9 has enumerable `arguments.length` in strict mode.
      (sn == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      pe && (sn == "offset" || sn == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ke && (sn == "buffer" || sn == "byteLength" || sn == "byteOffset") || // Skip index properties.
      Qg(sn, Ae))) && ce.push(sn);
    return ce;
  }
  function tf(C, E, R) {
    (R !== void 0 && !Ll(C[E], R) || R === void 0 && !(E in C)) && nf(C, E, R);
  }
  function y_(C, E, R) {
    var N = C[E];
    (!(an.call(C, E) && Ll(N, R)) || R === void 0 && !(E in C)) && nf(C, E, R);
  }
  function Al(C, E) {
    for (var R = C.length; R--; )
      if (Ll(C[R][0], E))
        return R;
    return -1;
  }
  function nf(C, E, R) {
    E == "__proto__" && $l ? $l(C, E, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : C[E] = R;
  }
  var b_ = R_();
  function Dl(C) {
    return C == null ? C === void 0 ? T : h : yo && yo in Object(C) ? $_(C) : j_(C);
  }
  function qg(C) {
    return Ta(C) && Dl(C) == s;
  }
  function S_(C) {
    if (!So(C) || L_(C))
      return !1;
    var E = uf(C) ? Rl : V;
    return E.test(W_(C));
  }
  function x_(C) {
    return Ta(C) && e0(C.length) && !!j[Dl(C)];
  }
  function w_(C) {
    if (!So(C))
      return z_(C);
    var E = Zg(C), R = [];
    for (var N in C)
      N == "constructor" && (E || !an.call(C, N)) || R.push(N);
    return R;
  }
  function Xg(C, E, R, N, pe) {
    C !== E && b_(E, function(ke, $e) {
      if (pe || (pe = new ii()), So(ke))
        C_(C, E, $e, R, Xg, N, pe);
      else {
        var ce = N ? N(of(C, $e), ke, $e + "", C, E, pe) : void 0;
        ce === void 0 && (ce = ke), tf(C, $e, ce);
      }
    }, n0);
  }
  function C_(C, E, R, N, pe, ke, $e) {
    var ce = of(C, R), Ae = of(E, R), sn = $e.get(Ae);
    if (sn) {
      tf(C, R, sn);
      return;
    }
    var Gt = ke ? ke(ce, Ae, R + "", C, E, $e) : void 0, _a = Gt === void 0;
    if (_a) {
      var cf = sf(Ae), df = !cf && Jg(Ae), o0 = !cf && !df && t0(Ae);
      Gt = Ae, cf || df || o0 ? sf(ce) ? Gt = ce : H_(ce) ? Gt = O_(ce) : df ? (_a = !1, Gt = T_(Ae, !0)) : o0 ? (_a = !1, Gt = E_(Ae, !0)) : Gt = [] : U_(Ae) || af(Ae) ? (Gt = ce, af(ce) ? Gt = G_(ce) : (!So(ce) || uf(ce)) && (Gt = A_(Ae))) : _a = !1;
    }
    _a && ($e.set(Ae, Gt), pe(Gt, Ae, N, ke, $e), $e.delete(Ae)), tf(C, R, Gt);
  }
  function k_(C, E) {
    return V_(N_(C, E, r0), C + "");
  }
  var P_ = $l ? function(C, E) {
    return $l(C, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Y_(E),
      writable: !0
    });
  } : r0;
  function T_(C, E) {
    if (E)
      return C.slice();
    var R = C.length, N = Hg ? Hg(R) : new C.constructor(R);
    return C.copy(N), N;
  }
  function __(C) {
    var E = new C.constructor(C.byteLength);
    return new Wg(E).set(new Wg(C)), E;
  }
  function E_(C, E) {
    var R = E ? __(C.buffer) : C.buffer;
    return new C.constructor(R, C.byteOffset, C.length);
  }
  function O_(C, E) {
    var R = -1, N = C.length;
    for (E || (E = Array(N)); ++R < N; )
      E[R] = C[R];
    return E;
  }
  function M_(C, E, R, N) {
    var pe = !R;
    R || (R = {});
    for (var ke = -1, $e = E.length; ++ke < $e; ) {
      var ce = E[ke], Ae = N ? N(R[ce], C[ce], ce, R, C) : void 0;
      Ae === void 0 && (Ae = C[ce]), pe ? nf(R, ce, Ae) : y_(R, ce, Ae);
    }
    return R;
  }
  function I_(C) {
    return k_(function(E, R) {
      var N = -1, pe = R.length, ke = pe > 1 ? R[pe - 1] : void 0, $e = pe > 2 ? R[2] : void 0;
      for (ke = C.length > 3 && typeof ke == "function" ? (pe--, ke) : void 0, $e && D_(R[0], R[1], $e) && (ke = pe < 3 ? void 0 : ke, pe = 1), E = Object(E); ++N < pe; ) {
        var ce = R[N];
        ce && C(E, ce, N, ke);
      }
      return E;
    });
  }
  function R_(C) {
    return function(E, R, N) {
      for (var pe = -1, ke = Object(E), $e = N(E), ce = $e.length; ce--; ) {
        var Ae = $e[C ? ce : ++pe];
        if (R(ke[Ae], Ae, ke) === !1)
          break;
      }
      return E;
    };
  }
  function Fl(C, E) {
    var R = C.__data__;
    return F_(E) ? R[typeof E == "string" ? "string" : "hash"] : R.map;
  }
  function rf(C, E) {
    var R = mt(C, E);
    return S_(R) ? R : void 0;
  }
  function $_(C) {
    var E = an.call(C, yo), R = C[yo];
    try {
      C[yo] = void 0;
      var N = !0;
    } catch {
    }
    var pe = ka.call(C);
    return N && (E ? C[yo] = R : delete C[yo]), pe;
  }
  function A_(C) {
    return typeof C.constructor == "function" && !Zg(C) ? XT(Ug(C)) : {};
  }
  function Qg(C, E) {
    var R = typeof C;
    return E = E ?? a, !!E && (R == "number" || R != "symbol" && Y.test(C)) && C > -1 && C % 1 == 0 && C < E;
  }
  function D_(C, E, R) {
    if (!So(R))
      return !1;
    var N = typeof E;
    return (N == "number" ? lf(R) && Qg(E, R.length) : N == "string" && E in R) ? Ll(R[E], C) : !1;
  }
  function F_(C) {
    var E = typeof C;
    return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? C !== "__proto__" : C === null;
  }
  function L_(C) {
    return !!ri && ri in C;
  }
  function Zg(C) {
    var E = C && C.constructor, R = typeof E == "function" && E.prototype || vt;
    return C === R;
  }
  function z_(C) {
    var E = [];
    if (C != null)
      for (var R in Object(C))
        E.push(R);
    return E;
  }
  function j_(C) {
    return ka.call(C);
  }
  function N_(C, E, R) {
    return E = Kg(E === void 0 ? C.length - 1 : E, 0), function() {
      for (var N = arguments, pe = -1, ke = Kg(N.length - E, 0), $e = Array(ke); ++pe < ke; )
        $e[pe] = N[E + pe];
      pe = -1;
      for (var ce = Array(E + 1); ++pe < E; )
        ce[pe] = N[pe];
      return ce[E] = R($e), Pn(C, this, ce);
    };
  }
  function of(C, E) {
    if (!(E === "constructor" && typeof C[E] == "function") && E != "__proto__")
      return C[E];
  }
  var V_ = B_(P_);
  function B_(C) {
    var E = 0, R = 0;
    return function() {
      var N = qT(), pe = i - (N - R);
      if (R = N, pe > 0) {
        if (++E >= o)
          return arguments[0];
      } else
        E = 0;
      return C.apply(void 0, arguments);
    };
  }
  function W_(C) {
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
  function Ll(C, E) {
    return C === E || C !== C && E !== E;
  }
  var af = qg(/* @__PURE__ */ function() {
    return arguments;
  }()) ? qg : function(C) {
    return Ta(C) && an.call(C, "callee") && !GT.call(C, "callee");
  }, sf = Array.isArray;
  function lf(C) {
    return C != null && e0(C.length) && !uf(C);
  }
  function H_(C) {
    return Ta(C) && lf(C);
  }
  var Jg = YT || q_;
  function uf(C) {
    if (!So(C))
      return !1;
    var E = Dl(C);
    return E == p || E == y || E == u || E == b;
  }
  function e0(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= a;
  }
  function So(C) {
    var E = typeof C;
    return C != null && (E == "object" || E == "function");
  }
  function Ta(C) {
    return C != null && typeof C == "object";
  }
  function U_(C) {
    if (!Ta(C) || Dl(C) != g)
      return !1;
    var E = Ug(C);
    if (E === null)
      return !0;
    var R = an.call(E, "constructor") && E.constructor;
    return typeof R == "function" && R instanceof R && Rr.call(R) == Il;
  }
  var t0 = on ? fe(on) : x_;
  function G_(C) {
    return M_(C, n0(C));
  }
  function n0(C) {
    return lf(C) ? g_(C, !0) : w_(C);
  }
  var K_ = I_(function(C, E, R, N) {
    Xg(C, E, R, N);
  });
  function Y_(C) {
    return function() {
      return C;
    };
  }
  function r0(C) {
    return C;
  }
  function q_() {
    return !1;
  }
  e.exports = K_;
})(_c, _c.exports);
var oR = _c.exports;
const mn = /* @__PURE__ */ sl(oR);
var iR = (e) => /!(important)?$/.test(e), Ey = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, aR = (e, t) => (n) => {
  const r = String(t), o = iR(r), i = Ey(r), a = e ? `${e}.${i}` : i;
  let s = zt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = Ey(s), o ? `${s} !important` : s;
};
function Iv(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = aR(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var ru = (...e) => (t) => e.reduce((n, r) => r(n), t);
function ln(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = Iv({
      scale: e,
      transform: t
    }), r;
  };
}
var sR = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function lR(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: sR(t),
    transform: n ? Iv({
      scale: n,
      compose: r
    }) : r
  };
}
var pC = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function uR() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...pC
  ].join(" ");
}
function cR() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...pC
  ].join(" ");
}
var dR = {
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
}, fR = {
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
function pR(e) {
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
var hR = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Ih = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, mR = new Set(Object.values(Ih)), Rh = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), vR = (e) => e.trim();
function gR(e, t) {
  if (e == null || Rh.has(e))
    return e;
  if (!($h(e) || Rh.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(vR).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Ih ? Ih[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (mR.has(f))
      return f;
    const p = f.indexOf(" "), [y, v] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], S = $h(v) ? v : v && v.split(" "), h = `colors.${y}`, g = h in t.__cssMap ? t.__cssMap[h].varRef : y;
    return S ? [
      g,
      ...Array.isArray(S) ? S : [S]
    ].join(" ") : g;
  });
  return `${s}(${d.join(", ")})`;
}
var $h = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), yR = (e, t) => gR(e, t ?? {});
function bR(e) {
  return /^var\(--.+\)$/.test(e);
}
var SR = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, Bn = (e) => (t) => `${e}(${t})`, de = {
  filter(e) {
    return e !== "auto" ? e : dR;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : fR;
  },
  ring(e) {
    return pR(de.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? uR() : e === "auto-gpu" ? cR() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = SR(e);
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
    if (bR(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: yR,
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
    return e == null || $h(e) || Rh.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = hR[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, O = {
  borderWidths: ln("borderWidths"),
  borderStyles: ln("borderStyles"),
  colors: ln("colors"),
  borders: ln("borders"),
  gradients: ln("gradients", de.gradient),
  radii: ln("radii", de.px),
  space: ln("space", ru(de.vh, de.px)),
  spaceT: ln("space", ru(de.vh, de.px)),
  degreeT(e) {
    return { property: e, transform: de.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Iv({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: ln("sizes", ru(de.vh, de.px)),
  sizesT: ln("sizes", ru(de.vh, de.fraction)),
  shadows: ln("shadows"),
  logical: lR,
  blur: ln("blur", de.blur)
}, ju = {
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
Object.assign(ju, {
  bgImage: ju.backgroundImage,
  bgImg: ju.backgroundImage
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
var xR = {
  color: O.colors("color"),
  textColor: O.colors("color"),
  fill: O.colors("fill"),
  stroke: O.colors("stroke")
}, Ah = {
  boxShadow: O.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: O.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: O.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Ah, {
  shadow: Ah.boxShadow
});
var wR = {
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
}, Ec = {
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
Object.assign(Ec, {
  flexDir: Ec.flexDirection
});
var hC = {
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
}, CR = {
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
var kR = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: O.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: O.prop("listStyleImage")
};
function PR(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var TR = (e) => {
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
}, _R = TR(PR), ER = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, OR = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Vf = (e, t, n) => {
  const r = {}, o = _R(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, MR = {
  srOnly: {
    transform(e) {
      return e === !0 ? ER : e === "focusable" ? OR : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => Vf(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Vf(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Vf(t, e, n)
  }
}, ps = {
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
Object.assign(ps, {
  insetStart: ps.insetInlineStart,
  insetEnd: ps.insetInlineEnd
});
var IR = {
  ring: { transform: de.ring },
  ringColor: O.colors("--chakra-ring-color"),
  ringOffset: O.prop("--chakra-ring-offset-width"),
  ringOffsetColor: O.colors("--chakra-ring-offset-color"),
  ringInset: O.prop("--chakra-ring-inset")
}, Me = {
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
Object.assign(Me, {
  m: Me.margin,
  mt: Me.marginTop,
  mr: Me.marginRight,
  me: Me.marginInlineEnd,
  marginEnd: Me.marginInlineEnd,
  mb: Me.marginBottom,
  ml: Me.marginLeft,
  ms: Me.marginInlineStart,
  marginStart: Me.marginInlineStart,
  mx: Me.marginX,
  my: Me.marginY,
  p: Me.padding,
  pt: Me.paddingTop,
  py: Me.paddingY,
  px: Me.paddingX,
  pb: Me.paddingBottom,
  pl: Me.paddingLeft,
  ps: Me.paddingInlineStart,
  paddingStart: Me.paddingInlineStart,
  pr: Me.paddingRight,
  pe: Me.paddingInlineEnd,
  paddingEnd: Me.paddingInlineEnd
});
var RR = {
  textDecorationColor: O.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: O.shadows("textShadow")
}, $R = {
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
}, AR = {
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
}, DR = {
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
}, FR = {
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
function mC(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
var Ad = (e, ...t) => t.map(mC).join(` ${e} `).replace(/calc/g, ""), Oy = (...e) => `calc(${Ad("+", ...e)})`, My = (...e) => `calc(${Ad("-", ...e)})`, Dh = (...e) => `calc(${Ad("*", ...e)})`, Iy = (...e) => `calc(${Ad("/", ...e)})`, Ry = (e) => {
  const t = mC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Dh(t, -1);
}, Eo = Object.assign(
  (e) => ({
    add: (...t) => Eo(Oy(e, ...t)),
    subtract: (...t) => Eo(My(e, ...t)),
    multiply: (...t) => Eo(Dh(e, ...t)),
    divide: (...t) => Eo(Iy(e, ...t)),
    negate: () => Eo(Ry(e)),
    toString: () => e.toString()
  }),
  {
    add: Oy,
    subtract: My,
    multiply: Dh,
    divide: Iy,
    negate: Ry
  }
);
function LR(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function zR(e) {
  const t = LR(e.toString());
  return NR(jR(t));
}
function jR(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function NR(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function VR(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function BR(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function WR(e, t = "") {
  return zR(`--${VR(e, t)}`);
}
function J(e, t, n) {
  const r = WR(e, n);
  return {
    variable: r,
    reference: BR(r, t)
  };
}
function HR(e, t) {
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
function UR(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function GR(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Fh(e) {
  if (e == null)
    return e;
  const { unitless: t } = GR(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var vC = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Rv = (e) => Object.fromEntries(Object.entries(e).sort(vC));
function $y(e) {
  const t = Rv(e);
  return Object.assign(Object.values(t), t);
}
function KR(e) {
  const t = Object.keys(Rv(e));
  return new Set(t);
}
function Ay(e) {
  var t;
  if (!e)
    return e;
  e = (t = Fh(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Xa(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Fh(e)})`), t && n.push("and", `(max-width: ${Fh(t)})`), n.join(" ");
}
function YR(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = $y(e), r = Object.entries(e).sort(vC).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? Ay(d) : void 0, {
      _minW: Ay(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Xa(null, d),
      minWQuery: Xa(s),
      minMaxQuery: Xa(s, d)
    };
  }), o = KR(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Rv(e),
    asArray: $y(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...n.map((a) => Xa(a)).slice(1)
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
      for (; UR(s) === null; )
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
}, Ar = (e) => gC((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), sr = (e) => gC((t) => e(t, "~ &"), "[data-peer]", ".peer"), gC = (e, ...t) => t.map(e).join(", "), Dd = {
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
}, yC = Object.keys(
  Dd
);
function Dy(e, t) {
  return J(String(e).replace(/\./g, "-"), void 0, t);
}
function qR(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Dy(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...y] = f, v = `${p}.-${y.join(".")}`, S = Eo.negate(s), h = Eo.negate(u);
        r[v] = {
          value: S,
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
      const { reference: S } = Dy(y, t == null ? void 0 : t.cssVarPrefix);
      return S;
    }, d = zt(s) ? s : { default: s };
    n = mn(
      n,
      Object.entries(d).reduce(
        (f, [p, y]) => {
          var v, S;
          if (!y)
            return f;
          const h = c(`${y}`);
          if (p === "default")
            return f[l] = h, f;
          const g = (S = (v = Dd) == null ? void 0 : v[p]) != null ? S : p;
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
function XR(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function QR(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function ZR(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Fy(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (ZR(a) || Array.isArray(a)) {
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
var JR = [
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
function e$(e) {
  return QR(e, JR);
}
function t$(e) {
  return e.semanticTokens;
}
function n$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var r$ = (e) => yC.includes(e) || e === "default";
function o$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return Fy(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), Fy(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(r$)
    }
  ), n;
}
function i$(e) {
  var t;
  const n = n$(e), r = e$(n), o = t$(n), i = o$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = qR(i, { cssVarPrefix: a });
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
    __breakpoints: YR(n.breakpoints)
  }), n;
}
var $v = mn(
  {},
  ju,
  ve,
  xR,
  Ec,
  cn,
  wR,
  IR,
  CR,
  hC,
  MR,
  ps,
  Ah,
  Me,
  FR,
  DR,
  RR,
  $R,
  kR,
  AR
);
Object.assign({}, Me, cn, Ec, hC, ps);
var a$ = [...Object.keys($v), ...yC], s$ = { ...$v, ...Dd }, l$ = (e) => e in s$, u$ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Xn(e[a], t);
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
function c$(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function d$(e) {
  return /^var\(--.+\)$/.test(e);
}
var f$ = (e, t) => e.startsWith("--") && typeof t == "string" && !d$(t), p$ = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = c$(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function h$(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Xn(i, r), d = u$(c)(r);
    let f = {};
    for (let p in d) {
      const y = d[p];
      let v = Xn(y, r);
      p in n && (p = n[p]), f$(p, v) && (v = p$(r, v));
      let S = t[p];
      if (S === !0 && (S = { property: p }), zt(v)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = mn(
          {},
          f[p],
          o(v, !0)
        );
        continue;
      }
      let h = (u = (l = S == null ? void 0 : S.transform) == null ? void 0 : l.call(S, v, r, c)) != null ? u : v;
      h = S != null && S.processResult ? o(h, !0) : h;
      const g = Xn(S == null ? void 0 : S.property, r);
      if (!a && (S != null && S.static)) {
        const b = Xn(S.static, r);
        f = mn({}, f, b);
      }
      if (g && Array.isArray(g)) {
        for (const b of g)
          f[b] = h;
        continue;
      }
      if (g) {
        g === "&" && zt(h) ? f = mn({}, f, h) : f[g] = h;
        continue;
      }
      if (zt(h)) {
        f = mn({}, f, h);
        continue;
      }
      f[p] = h;
    }
    return f;
  };
  return o;
}
var bC = (e) => (t) => h$({
  theme: t,
  pseudos: Dd,
  configs: $v
})(e);
function Ee(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function m$(e, t) {
  if (Array.isArray(e))
    return e;
  if (zt(e))
    return t(e);
  if (e != null)
    return [e];
}
function v$(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function g$(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = m$(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let y = 0; y < d; y++) {
      const v = t.details[y], S = t.details[v$(c, y)], h = Xa(v.minW, S == null ? void 0 : S._minW), g = Xn((s = r[o]) == null ? void 0 : s[c[y]], a);
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
function y$(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = g$(i);
    return mn(
      {},
      Xn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Cn(e) {
  return XR(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var b$ = [
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
function S$(e) {
  return zt(e) ? b$.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var x$ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, w$ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, C$ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, k$ = {
  property: x$,
  easing: w$,
  duration: C$
}, P$ = k$, T$ = {
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
}, _$ = T$, E$ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, O$ = E$, M$ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, I$ = M$, R$ = {
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
}, $$ = R$, A$ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, D$ = A$, F$ = {
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
}, L$ = F$, z$ = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, j$ = z$, N$ = {
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
}, SC = N$, xC = {
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
}, V$ = {
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
}, B$ = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, W$ = {
  ...xC,
  ...V$,
  container: B$
}, wC = W$, H$ = {
  breakpoints: I$,
  zIndices: _$,
  radii: D$,
  blur: j$,
  colors: $$,
  ...SC,
  sizes: wC,
  shadows: L$,
  space: xC,
  borders: O$,
  transition: P$
}, { defineMultiStyleConfig: U$, definePartsStyle: Qa } = Ee([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), cr = J("stepper-indicator-size"), Ti = J("stepper-icon-size"), _i = J("stepper-title-font-size"), Za = J("stepper-description-font-size"), za = J("stepper-accent-color"), G$ = Qa(({ colorScheme: e }) => ({
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
    [za.variable]: `colors.${e}.500`,
    _dark: {
      [za.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: _i.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Za.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: _i.reference
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
    width: Ti.reference,
    height: Ti.reference
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
      borderColor: za.reference
    },
    "&[data-status=complete]": {
      bg: za.reference,
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
      bg: za.reference
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
})), K$ = U$({
  baseStyle: G$,
  sizes: {
    xs: Qa({
      stepper: {
        [cr.variable]: "sizes.4",
        [Ti.variable]: "sizes.3",
        [_i.variable]: "fontSizes.xs",
        [Za.variable]: "fontSizes.xs"
      }
    }),
    sm: Qa({
      stepper: {
        [cr.variable]: "sizes.6",
        [Ti.variable]: "sizes.4",
        [_i.variable]: "fontSizes.sm",
        [Za.variable]: "fontSizes.xs"
      }
    }),
    md: Qa({
      stepper: {
        [cr.variable]: "sizes.8",
        [Ti.variable]: "sizes.5",
        [_i.variable]: "fontSizes.md",
        [Za.variable]: "fontSizes.sm"
      }
    }),
    lg: Qa({
      stepper: {
        [cr.variable]: "sizes.10",
        [Ti.variable]: "sizes.6",
        [_i.variable]: "fontSizes.lg",
        [Za.variable]: "fontSizes.md"
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
var Y$ = Se("accordion").parts("root", "container", "button", "panel").extend("icon"), q$ = Se("alert").parts("title", "description", "container").extend("icon", "spinner"), X$ = Se("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), Q$ = Se("breadcrumb").parts("link", "item", "container").extend("separator");
Se("button").parts();
var Z$ = Se("checkbox").parts("control", "icon", "container").extend("label");
Se("progress").parts("track", "filledTrack").extend("label");
var J$ = Se("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), eA = Se("editable").parts(
  "preview",
  "input",
  "textarea"
), tA = Se("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), nA = Se("formError").parts("text", "icon"), rA = Se("input").parts(
  "addon",
  "field",
  "element",
  "group"
), oA = Se("list").parts("container", "item", "icon"), iA = Se("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), aA = Se("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), sA = Se("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Se("pininput").parts("field");
var lA = Se("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), uA = Se("progress").parts(
  "label",
  "filledTrack",
  "track"
), cA = Se("radio").parts(
  "container",
  "control",
  "label"
), dA = Se("select").parts("field", "icon"), fA = Se("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), pA = Se("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), hA = Se("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), mA = Se("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), vA = Se("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), gA = Se("tag").parts(
  "container",
  "label",
  "closeButton"
), yA = Se("card").parts(
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
class bA extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ja = bA;
function Av(e) {
  if (typeof e != "string")
    throw new Ja(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = _A.test(e) ? wA(e) : e;
  const n = CA.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Ys(s, 2), 16)), parseInt(Ys(a[3] || "f", 2), 16) / 255];
  }
  const r = kA.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = PA.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = TA.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if ($o(0, 100, s) !== s)
      throw new Ja(e);
    if ($o(0, 100, l) !== l)
      throw new Ja(e);
    return [...EA(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Ja(e);
}
function SA(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const Ly = (e) => parseInt(e.replace(/_/g, ""), 36), xA = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = Ly(t.substring(0, 3)), r = Ly(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function wA(e) {
  const t = e.toLowerCase().trim(), n = xA[SA(t)];
  if (!n)
    throw new Ja(e);
  return `#${n}`;
}
const Ys = (e, t) => Array.from(Array(t)).map(() => e).join(""), CA = new RegExp(`^#${Ys("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), kA = new RegExp(`^#${Ys("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), PA = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ys(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), TA = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, _A = /^[a-z]+$/i, zy = (e) => Math.round(e * 255), EA = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(zy);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(zy);
};
function OA(e, t, n, r) {
  return `rgba(${$o(0, 255, e).toFixed()}, ${$o(0, 255, t).toFixed()}, ${$o(0, 255, n).toFixed()}, ${parseFloat($o(0, 1, r).toFixed(3))})`;
}
function MA(e, t) {
  const [n, r, o, i] = Av(e);
  return OA(n, r, o, i - t);
}
function IA(e) {
  const [t, n, r, o] = Av(e);
  let i = (a) => {
    const s = $o(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function RA(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var $A = (e) => Object.keys(e).length === 0, Tt = (e, t, n) => {
  const r = RA(e, `colors.${t}`, t);
  try {
    return IA(r), r;
  } catch {
    return n ?? "#000000";
  }
}, AA = (e) => {
  const [t, n, r] = Av(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, DA = (e) => (t) => {
  const n = Tt(t, e);
  return AA(n) < 128 ? "dark" : "light";
}, FA = (e) => (t) => DA(e)(t) === "dark", la = (e, t) => (n) => {
  const r = Tt(n, e);
  return MA(r, 1 - t);
};
function jy(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var LA = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function zA(e) {
  const t = LA();
  return !e || $A(e) ? t : e.string && e.colors ? NA(e.string, e.colors) : e.string && !e.colors ? jA(e.string) : e.colors && !e.string ? VA(e.colors) : t;
}
function jA(e) {
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
function NA(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function VA(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function Q(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function Dv(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function CC(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
var Fd = (e, ...t) => t.map(CC).join(` ${e} `).replace(/calc/g, ""), Ny = (...e) => `calc(${Fd("+", ...e)})`, Vy = (...e) => `calc(${Fd("-", ...e)})`, Lh = (...e) => `calc(${Fd("*", ...e)})`, By = (...e) => `calc(${Fd("/", ...e)})`, Wy = (e) => {
  const t = CC(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Lh(t, -1);
}, dr = Object.assign(
  (e) => ({
    add: (...t) => dr(Ny(e, ...t)),
    subtract: (...t) => dr(Vy(e, ...t)),
    multiply: (...t) => dr(Lh(e, ...t)),
    divide: (...t) => dr(By(e, ...t)),
    negate: () => dr(Wy(e)),
    toString: () => e.toString()
  }),
  {
    add: Ny,
    subtract: Vy,
    multiply: Lh,
    divide: By,
    negate: Wy
  }
);
function BA(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function WA(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function kC(e) {
  const t = WA(e.toString());
  return t.includes("\\.") ? e : BA(e) ? t.replace(".", "\\.") : e;
}
function HA(e, t = "") {
  return [t, kC(e)].filter(Boolean).join("-");
}
function UA(e, t) {
  return `var(${kC(e)}${t ? `, ${t}` : ""})`;
}
function GA(e, t = "") {
  return `--${HA(e, t)}`;
}
function rt(e, t) {
  const n = GA(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: UA(n, KA(t == null ? void 0 : t.fallback))
  };
}
function KA(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: YA, definePartsStyle: Nu } = Ee(hA.keys), hs = rt("switch-track-width"), zo = rt("switch-track-height"), Bf = rt("switch-track-diff"), qA = dr.subtract(hs, zo), zh = rt("switch-thumb-x"), ja = rt("switch-bg"), XA = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [hs.reference],
    height: [zo.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [ja.variable]: "colors.gray.300",
    _dark: {
      [ja.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [ja.variable]: `colors.${t}.500`,
      _dark: {
        [ja.variable]: `colors.${t}.200`
      }
    },
    bg: ja.reference
  };
}, QA = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [zo.reference],
  height: [zo.reference],
  _checked: {
    transform: `translateX(${zh.reference})`
  }
}, ZA = Nu((e) => ({
  container: {
    [Bf.variable]: qA,
    [zh.variable]: Bf.reference,
    _rtl: {
      [zh.variable]: dr(Bf).negate().toString()
    }
  },
  track: XA(e),
  thumb: QA
})), JA = {
  sm: Nu({
    container: {
      [hs.variable]: "1.375rem",
      [zo.variable]: "sizes.3"
    }
  }),
  md: Nu({
    container: {
      [hs.variable]: "1.875rem",
      [zo.variable]: "sizes.4"
    }
  }),
  lg: Nu({
    container: {
      [hs.variable]: "2.875rem",
      [zo.variable]: "sizes.6"
    }
  })
}, e5 = YA({
  baseStyle: ZA,
  sizes: JA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: t5, definePartsStyle: Ui } = Ee(mA.keys), n5 = Ui({
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
}), Oc = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, r5 = Ui((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Oc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Oc
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
}), o5 = Ui((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: Q("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Oc
    },
    td: {
      borderBottom: "1px",
      borderColor: Q(`${t}.100`, `${t}.700`)(e),
      ...Oc
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
}), i5 = {
  simple: r5,
  striped: o5,
  unstyled: {}
}, a5 = {
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
}, s5 = t5({
  baseStyle: n5,
  variants: i5,
  sizes: a5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Rt = J("tabs-color"), In = J("tabs-bg"), ou = J("tabs-border-color"), { defineMultiStyleConfig: l5, definePartsStyle: er } = Ee(vA.keys), u5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, c5 = (e) => {
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
}, d5 = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, f5 = {
  p: 4
}, p5 = er((e) => ({
  root: u5(e),
  tab: c5(e),
  tablist: d5(e),
  tabpanel: f5
})), h5 = {
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
}, m5 = er((e) => {
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
}), v5 = er((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [ou.variable]: "transparent",
      _selected: {
        [Rt.variable]: `colors.${t}.600`,
        [ou.variable]: "colors.white",
        _dark: {
          [Rt.variable]: `colors.${t}.300`,
          [ou.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: ou.reference
      },
      color: Rt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), g5 = er((e) => {
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
}), y5 = er((e) => {
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
}), b5 = er((e) => {
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
}), S5 = er({}), x5 = {
  line: m5,
  enclosed: v5,
  "enclosed-colored": g5,
  "soft-rounded": y5,
  "solid-rounded": b5,
  unstyled: S5
}, w5 = l5({
  baseStyle: p5,
  sizes: h5,
  variants: x5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ye = HR("badge", ["bg", "color", "shadow"]), C5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, k5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.500`, 0.6)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.500`,
    [Ye.color.variable]: "colors.white",
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, P5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.200`, 0.16)(n);
  return {
    [Ye.bg.variable]: `colors.${t}.100`,
    [Ye.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ye.bg.variable]: r,
      [Ye.color.variable]: `colors.${t}.200`
    }
  };
}, T5 = (e) => {
  const { colorScheme: t, theme: n } = e, r = la(`${t}.200`, 0.8)(n);
  return {
    [Ye.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ye.color.variable]: r
    },
    [Ye.shadow.variable]: `inset 0 0 0px 1px ${Ye.color.reference}`
  };
}, _5 = {
  solid: k5,
  subtle: P5,
  outline: T5
}, ms = {
  baseStyle: C5,
  variants: _5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: E5, definePartsStyle: jo } = Ee(gA.keys), Hy = J("tag-bg"), Uy = J("tag-color"), Wf = J("tag-shadow"), Vu = J("tag-min-height"), Bu = J("tag-min-width"), Wu = J("tag-font-size"), Hu = J("tag-padding-inline"), O5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Uy.variable]: Ye.color.reference,
  [Hy.variable]: Ye.bg.reference,
  [Wf.variable]: Ye.shadow.reference,
  color: Uy.reference,
  bg: Hy.reference,
  boxShadow: Wf.reference,
  borderRadius: "md",
  minH: Vu.reference,
  minW: Bu.reference,
  fontSize: Wu.reference,
  px: Hu.reference,
  _focusVisible: {
    [Wf.variable]: "shadows.outline"
  }
}, M5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, I5 = {
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
}, R5 = jo({
  container: O5,
  label: M5,
  closeButton: I5
}), $5 = {
  sm: jo({
    container: {
      [Vu.variable]: "sizes.5",
      [Bu.variable]: "sizes.5",
      [Wu.variable]: "fontSizes.xs",
      [Hu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: jo({
    container: {
      [Vu.variable]: "sizes.6",
      [Bu.variable]: "sizes.6",
      [Wu.variable]: "fontSizes.sm",
      [Hu.variable]: "space.2"
    }
  }),
  lg: jo({
    container: {
      [Vu.variable]: "sizes.8",
      [Bu.variable]: "sizes.8",
      [Wu.variable]: "fontSizes.md",
      [Hu.variable]: "space.3"
    }
  })
}, A5 = {
  subtle: jo((e) => {
    var t;
    return {
      container: (t = ms.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: jo((e) => {
    var t;
    return {
      container: (t = ms.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: jo((e) => {
    var t;
    return {
      container: (t = ms.variants) == null ? void 0 : t.outline(e)
    };
  })
}, D5 = E5({
  variants: A5,
  baseStyle: R5,
  sizes: $5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: hr, defineMultiStyleConfig: F5 } = Ee(rA.keys), Ei = J("input-height"), Oi = J("input-font-size"), Mi = J("input-padding"), Ii = J("input-border-radius"), L5 = hr({
  addon: {
    height: Ei.reference,
    fontSize: Oi.reference,
    px: Mi.reference,
    borderRadius: Ii.reference
  },
  field: {
    width: "100%",
    height: Ei.reference,
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
}), Dr = {
  lg: {
    [Oi.variable]: "fontSizes.lg",
    [Mi.variable]: "space.4",
    [Ii.variable]: "radii.md",
    [Ei.variable]: "sizes.12"
  },
  md: {
    [Oi.variable]: "fontSizes.md",
    [Mi.variable]: "space.4",
    [Ii.variable]: "radii.md",
    [Ei.variable]: "sizes.10"
  },
  sm: {
    [Oi.variable]: "fontSizes.sm",
    [Mi.variable]: "space.3",
    [Ii.variable]: "radii.sm",
    [Ei.variable]: "sizes.8"
  },
  xs: {
    [Oi.variable]: "fontSizes.xs",
    [Mi.variable]: "space.2",
    [Ii.variable]: "radii.sm",
    [Ei.variable]: "sizes.6"
  }
}, z5 = {
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
function Fv(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || Q("blue.500", "blue.300")(e),
    errorBorderColor: n || Q("red.500", "red.300")(e)
  };
}
var j5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Fv(e);
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
}), N5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Fv(e);
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
}), V5 = hr((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Fv(e);
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
}), B5 = hr({
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
}), W5 = {
  outline: j5,
  filled: N5,
  flushed: V5,
  unstyled: B5
}, be = F5({
  baseStyle: L5,
  sizes: z5,
  variants: W5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Gy, H5 = {
  ...(Gy = be.baseStyle) == null ? void 0 : Gy.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Ky, Yy, U5 = {
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
  unstyled: (Yy = (Ky = be.variants) == null ? void 0 : Ky.unstyled.field) != null ? Yy : {}
}, qy, Xy, Qy, Zy, Jy, eb, tb, nb, G5 = {
  xs: (Xy = (qy = be.sizes) == null ? void 0 : qy.xs.field) != null ? Xy : {},
  sm: (Zy = (Qy = be.sizes) == null ? void 0 : Qy.sm.field) != null ? Zy : {},
  md: (eb = (Jy = be.sizes) == null ? void 0 : Jy.md.field) != null ? eb : {},
  lg: (nb = (tb = be.sizes) == null ? void 0 : tb.lg.field) != null ? nb : {}
}, K5 = {
  baseStyle: H5,
  sizes: G5,
  variants: U5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, iu = rt("tooltip-bg"), Hf = rt("tooltip-fg"), Y5 = rt("popper-arrow-bg"), q5 = {
  bg: iu.reference,
  color: Hf.reference,
  [iu.variable]: "colors.gray.700",
  [Hf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [iu.variable]: "colors.gray.300",
    [Hf.variable]: "colors.gray.900"
  },
  [Y5.variable]: iu.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, X5 = {
  baseStyle: q5
}, { defineMultiStyleConfig: Q5, definePartsStyle: es } = Ee(uA.keys), Z5 = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = Q(
    jy(),
    jy("1rem", "rgba(0,0,0,0.1)")
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
}, J5 = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, eD = (e) => ({
  bg: Q("gray.100", "whiteAlpha.300")(e)
}), tD = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Z5(e)
}), nD = es((e) => ({
  label: J5,
  filledTrack: tD(e),
  track: eD(e)
})), rD = {
  xs: es({
    track: { h: "1" }
  }),
  sm: es({
    track: { h: "2" }
  }),
  md: es({
    track: { h: "3" }
  }),
  lg: es({
    track: { h: "4" }
  })
}, oD = Q5({
  sizes: rD,
  baseStyle: nD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), iD = (e) => typeof e == "function";
function Et(e, ...t) {
  return iD(e) ? e(...t) : e;
}
var { definePartsStyle: Uu, defineMultiStyleConfig: aD } = Ee(Z$.keys), vs = J("checkbox-size"), sD = (e) => {
  const { colorScheme: t } = e;
  return {
    w: vs.reference,
    h: vs.reference,
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
}, lD = {
  _disabled: { cursor: "not-allowed" }
}, uD = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, cD = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, dD = Uu((e) => ({
  icon: cD,
  container: lD,
  control: Et(sD, e),
  label: uD
})), fD = {
  sm: Uu({
    control: { [vs.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Uu({
    control: { [vs.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Uu({
    control: { [vs.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Mc = aD({
  baseStyle: dD,
  sizes: fD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: pD, definePartsStyle: Gu } = Ee(cA.keys), hD = (e) => {
  var t;
  const n = (t = Et(Mc.baseStyle, e)) == null ? void 0 : t.control;
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
}, mD = Gu((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = Mc).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = Mc).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: hD(e)
  };
}), vD = {
  md: Gu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Gu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Gu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, gD = pD({
  baseStyle: mD,
  sizes: vD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: yD, definePartsStyle: bD } = Ee(dA.keys), au = J("select-bg"), rb, SD = {
  ...(rb = be.baseStyle) == null ? void 0 : rb.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: au.reference,
  [au.variable]: "colors.white",
  _dark: {
    [au.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: au.reference
  }
}, xD = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, wD = bD({
  field: SD,
  icon: xD
}), su = {
  paddingInlineEnd: "8"
}, ob, ib, ab, sb, lb, ub, cb, db, CD = {
  lg: {
    ...(ob = be.sizes) == null ? void 0 : ob.lg,
    field: {
      ...(ib = be.sizes) == null ? void 0 : ib.lg.field,
      ...su
    }
  },
  md: {
    ...(ab = be.sizes) == null ? void 0 : ab.md,
    field: {
      ...(sb = be.sizes) == null ? void 0 : sb.md.field,
      ...su
    }
  },
  sm: {
    ...(lb = be.sizes) == null ? void 0 : lb.sm,
    field: {
      ...(ub = be.sizes) == null ? void 0 : ub.sm.field,
      ...su
    }
  },
  xs: {
    ...(cb = be.sizes) == null ? void 0 : cb.xs,
    field: {
      ...(db = be.sizes) == null ? void 0 : db.xs.field,
      ...su
    },
    icon: {
      insetEnd: "1"
    }
  }
}, kD = yD({
  baseStyle: wD,
  sizes: CD,
  variants: be.variants,
  defaultProps: be.defaultProps
}), Uf = J("skeleton-start-color"), Gf = J("skeleton-end-color"), PD = {
  [Uf.variable]: "colors.gray.100",
  [Gf.variable]: "colors.gray.400",
  _dark: {
    [Uf.variable]: "colors.gray.800",
    [Gf.variable]: "colors.gray.600"
  },
  background: Uf.reference,
  borderColor: Gf.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, TD = {
  baseStyle: PD
}, Kf = J("skip-link-bg"), _D = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Kf.variable]: "colors.white",
    _dark: {
      [Kf.variable]: "colors.gray.700"
    },
    bg: Kf.reference
  }
}, ED = {
  baseStyle: _D
}, { defineMultiStyleConfig: OD, definePartsStyle: Ld } = Ee(fA.keys), qs = J("slider-thumb-size"), Xs = J("slider-track-size"), Wr = J("slider-bg"), MD = (e) => {
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
    ...Dv({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, ID = (e) => ({
  ...Dv({
    orientation: e.orientation,
    horizontal: { h: Xs.reference },
    vertical: { w: Xs.reference }
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
}), RD = (e) => {
  const { orientation: t } = e;
  return {
    ...Dv({
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
    w: qs.reference,
    h: qs.reference,
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
}, $D = (e) => {
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
}, AD = Ld((e) => ({
  container: MD(e),
  track: ID(e),
  thumb: RD(e),
  filledTrack: $D(e)
})), DD = Ld({
  container: {
    [qs.variable]: "sizes.4",
    [Xs.variable]: "sizes.1"
  }
}), FD = Ld({
  container: {
    [qs.variable]: "sizes.3.5",
    [Xs.variable]: "sizes.1"
  }
}), LD = Ld({
  container: {
    [qs.variable]: "sizes.2.5",
    [Xs.variable]: "sizes.0.5"
  }
}), zD = {
  lg: DD,
  md: FD,
  sm: LD
}, jD = OD({
  baseStyle: AD,
  sizes: zD,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Oo = rt("spinner-size"), ND = {
  width: [Oo.reference],
  height: [Oo.reference]
}, VD = {
  xs: {
    [Oo.variable]: "sizes.3"
  },
  sm: {
    [Oo.variable]: "sizes.4"
  },
  md: {
    [Oo.variable]: "sizes.6"
  },
  lg: {
    [Oo.variable]: "sizes.8"
  },
  xl: {
    [Oo.variable]: "sizes.12"
  }
}, BD = {
  baseStyle: ND,
  sizes: VD,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: WD, definePartsStyle: PC } = Ee(pA.keys), HD = {
  fontWeight: "medium"
}, UD = {
  opacity: 0.8,
  marginBottom: "2"
}, GD = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, KD = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, YD = PC({
  container: {},
  label: HD,
  helpText: UD,
  number: GD,
  icon: KD
}), qD = {
  md: PC({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, XD = WD({
  baseStyle: YD,
  sizes: qD,
  defaultProps: {
    size: "md"
  }
}), Yf = J("kbd-bg"), QD = {
  [Yf.variable]: "colors.gray.100",
  _dark: {
    [Yf.variable]: "colors.whiteAlpha.100"
  },
  bg: Yf.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, ZD = {
  baseStyle: QD
}, JD = {
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
}, eF = {
  baseStyle: JD
}, { defineMultiStyleConfig: tF, definePartsStyle: nF } = Ee(oA.keys), rF = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, oF = nF({
  icon: rF
}), iF = tF({
  baseStyle: oF
}), { defineMultiStyleConfig: aF, definePartsStyle: sF } = Ee(iA.keys), Un = J("menu-bg"), qf = J("menu-shadow"), lF = {
  [Un.variable]: "#fff",
  [qf.variable]: "shadows.sm",
  _dark: {
    [Un.variable]: "colors.gray.700",
    [qf.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Un.reference,
  boxShadow: qf.reference
}, uF = {
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
}, cF = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, dF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, fF = {
  opacity: 0.6
}, pF = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, hF = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, mF = sF({
  button: hF,
  list: lF,
  item: uF,
  groupTitle: cF,
  icon: dF,
  command: fF,
  divider: pF
}), vF = aF({
  baseStyle: mF
}), { defineMultiStyleConfig: gF, definePartsStyle: jh } = Ee(aA.keys), Xf = J("modal-bg"), Qf = J("modal-shadow"), yF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, bF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, SF = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Xf.variable]: "colors.white",
    [Qf.variable]: "shadows.lg",
    _dark: {
      [Xf.variable]: "colors.gray.700",
      [Qf.variable]: "shadows.dark-lg"
    },
    bg: Xf.reference,
    boxShadow: Qf.reference
  };
}, xF = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, wF = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, CF = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, kF = {
  px: "6",
  py: "4"
}, PF = jh((e) => ({
  overlay: yF,
  dialogContainer: Et(bF, e),
  dialog: Et(SF, e),
  header: xF,
  closeButton: wF,
  body: Et(CF, e),
  footer: kF
}));
function _n(e) {
  return jh(e === "full" ? {
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
var TF = {
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
}, _F = gF({
  baseStyle: PF,
  sizes: TF,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: EF, definePartsStyle: TC } = Ee(sA.keys), Lv = rt("number-input-stepper-width"), _C = rt("number-input-input-padding"), OF = dr(Lv).add("0.5rem").toString(), Zf = rt("number-input-bg"), Jf = rt("number-input-color"), ep = rt("number-input-border-color"), MF = {
  [Lv.variable]: "sizes.6",
  [_C.variable]: OF
}, IF = (e) => {
  var t, n;
  return (n = (t = Et(be.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, RF = {
  width: Lv.reference
}, $F = {
  borderStart: "1px solid",
  borderStartColor: ep.reference,
  color: Jf.reference,
  bg: Zf.reference,
  [Jf.variable]: "colors.chakra-body-text",
  [ep.variable]: "colors.chakra-border-color",
  _dark: {
    [Jf.variable]: "colors.whiteAlpha.800",
    [ep.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Zf.variable]: "colors.gray.200",
    _dark: {
      [Zf.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, AF = TC((e) => {
  var t;
  return {
    root: MF,
    field: (t = Et(IF, e)) != null ? t : {},
    stepperGroup: RF,
    stepper: $F
  };
});
function lu(e) {
  var t, n, r;
  const o = (t = be.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = SC.fontSizes[a];
  return TC({
    field: {
      ...o.field,
      paddingInlineEnd: _C.reference,
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
var DF = {
  xs: lu("xs"),
  sm: lu("sm"),
  md: lu("md"),
  lg: lu("lg")
}, FF = EF({
  baseStyle: AF,
  sizes: DF,
  variants: be.variants,
  defaultProps: be.defaultProps
}), fb, LF = {
  ...(fb = be.baseStyle) == null ? void 0 : fb.field,
  textAlign: "center"
}, zF = {
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
}, pb, hb, jF = {
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
  unstyled: (hb = (pb = be.variants) == null ? void 0 : pb.unstyled.field) != null ? hb : {}
}, NF = {
  baseStyle: LF,
  sizes: zF,
  variants: jF,
  defaultProps: be.defaultProps
}, { defineMultiStyleConfig: VF, definePartsStyle: BF } = Ee(lA.keys), uu = rt("popper-bg"), WF = rt("popper-arrow-bg"), mb = rt("popper-arrow-shadow-color"), HF = { zIndex: 10 }, UF = {
  [uu.variable]: "colors.white",
  bg: uu.reference,
  [WF.variable]: uu.reference,
  [mb.variable]: "colors.gray.200",
  _dark: {
    [uu.variable]: "colors.gray.700",
    [mb.variable]: "colors.whiteAlpha.300"
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
}, GF = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, KF = {
  px: 3,
  py: 2
}, YF = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, qF = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, XF = BF({
  popper: HF,
  content: UF,
  header: GF,
  body: KF,
  footer: YF,
  closeButton: qF
}), QF = VF({
  baseStyle: XF
}), { definePartsStyle: Nh, defineMultiStyleConfig: ZF } = Ee(J$.keys), tp = J("drawer-bg"), np = J("drawer-box-shadow");
function si(e) {
  return Nh(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var JF = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, eL = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, tL = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [tp.variable]: "colors.white",
    [np.variable]: "shadows.lg",
    _dark: {
      [tp.variable]: "colors.gray.700",
      [np.variable]: "shadows.dark-lg"
    },
    bg: tp.reference,
    boxShadow: np.reference
  };
}, nL = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, rL = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, oL = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, iL = {
  px: "6",
  py: "4"
}, aL = Nh((e) => ({
  overlay: JF,
  dialogContainer: eL,
  dialog: Et(tL, e),
  header: nL,
  closeButton: rL,
  body: oL,
  footer: iL
})), sL = {
  xs: si("xs"),
  sm: si("md"),
  md: si("lg"),
  lg: si("2xl"),
  xl: si("4xl"),
  full: si("full")
}, lL = ZF({
  baseStyle: aL,
  sizes: sL,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: uL, defineMultiStyleConfig: cL } = Ee(eA.keys), dL = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, fL = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, pL = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, hL = uL({
  preview: dL,
  input: fL,
  textarea: pL
}), mL = cL({
  baseStyle: hL
}), { definePartsStyle: vL, defineMultiStyleConfig: gL } = Ee(tA.keys), Gi = J("form-control-color"), yL = {
  marginStart: "1",
  [Gi.variable]: "colors.red.500",
  _dark: {
    [Gi.variable]: "colors.red.300"
  },
  color: Gi.reference
}, bL = {
  mt: "2",
  [Gi.variable]: "colors.gray.600",
  _dark: {
    [Gi.variable]: "colors.whiteAlpha.600"
  },
  color: Gi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, SL = vL({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: yL,
  helperText: bL
}), xL = gL({
  baseStyle: SL
}), { definePartsStyle: wL, defineMultiStyleConfig: CL } = Ee(nA.keys), Ki = J("form-error-color"), kL = {
  [Ki.variable]: "colors.red.500",
  _dark: {
    [Ki.variable]: "colors.red.300"
  },
  color: Ki.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, PL = {
  marginEnd: "0.5em",
  [Ki.variable]: "colors.red.500",
  _dark: {
    [Ki.variable]: "colors.red.300"
  },
  color: Ki.reference
}, TL = wL({
  text: kL,
  icon: PL
}), _L = CL({
  baseStyle: TL
}), EL = {
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
}, OL = {
  baseStyle: EL
}, ML = {
  fontFamily: "heading",
  fontWeight: "bold"
}, IL = {
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
}, RL = {
  baseStyle: ML,
  sizes: IL,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: $L, definePartsStyle: AL } = Ee(Q$.keys), rp = J("breadcrumb-link-decor"), DL = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: rp.reference,
  [rp.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [rp.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, FL = AL({
  link: DL
}), LL = $L({
  baseStyle: FL
}), zL = {
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
}, EC = (e) => {
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
}, jL = (e) => {
  const { colorScheme: t } = e, n = Q("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Et(EC, e)
  };
}, NL = {
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
}, VL = (e) => {
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
  } = (t = NL[n]) != null ? t : {}, s = Q(r, `${n}.200`)(e);
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
}, BL = (e) => {
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
}, WL = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, HL = {
  ghost: EC,
  outline: jL,
  solid: VL,
  link: BL,
  unstyled: WL
}, UL = {
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
}, GL = {
  baseStyle: zL,
  variants: HL,
  sizes: UL,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: No, defineMultiStyleConfig: KL } = Ee(yA.keys), Ic = J("card-bg"), gr = J("card-padding"), OC = J("card-shadow"), Ku = J("card-radius"), MC = J("card-border-width", "0"), IC = J("card-border-color"), YL = No({
  container: {
    [Ic.variable]: "colors.chakra-body-bg",
    backgroundColor: Ic.reference,
    boxShadow: OC.reference,
    borderRadius: Ku.reference,
    color: "chakra-body-text",
    borderWidth: MC.reference,
    borderColor: IC.reference
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
}), qL = {
  sm: No({
    container: {
      [Ku.variable]: "radii.base",
      [gr.variable]: "space.3"
    }
  }),
  md: No({
    container: {
      [Ku.variable]: "radii.md",
      [gr.variable]: "space.5"
    }
  }),
  lg: No({
    container: {
      [Ku.variable]: "radii.xl",
      [gr.variable]: "space.7"
    }
  })
}, XL = {
  elevated: No({
    container: {
      [OC.variable]: "shadows.base",
      _dark: {
        [Ic.variable]: "colors.gray.700"
      }
    }
  }),
  outline: No({
    container: {
      [MC.variable]: "1px",
      [IC.variable]: "colors.chakra-border-color"
    }
  }),
  filled: No({
    container: {
      [Ic.variable]: "colors.chakra-subtle-bg"
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
}, QL = KL({
  baseStyle: YL,
  variants: XL,
  sizes: qL,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), gs = rt("close-button-size"), Na = rt("close-button-bg"), ZL = {
  w: [gs.reference],
  h: [gs.reference],
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
}, JL = {
  lg: {
    [gs.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [gs.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [gs.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, ez = {
  baseStyle: ZL,
  sizes: JL,
  defaultProps: {
    size: "md"
  }
}, { variants: tz, defaultProps: nz } = ms, rz = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ye.bg.reference,
  color: Ye.color.reference,
  boxShadow: Ye.shadow.reference
}, oz = {
  baseStyle: rz,
  variants: tz,
  defaultProps: nz
}, iz = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, az = {
  baseStyle: iz
}, sz = {
  opacity: 0.6,
  borderColor: "inherit"
}, lz = {
  borderStyle: "solid"
}, uz = {
  borderStyle: "dashed"
}, cz = {
  solid: lz,
  dashed: uz
}, dz = {
  baseStyle: sz,
  variants: cz,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: fz, defineMultiStyleConfig: pz } = Ee(Y$.keys), hz = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, mz = {
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
}, vz = {
  pt: "2",
  px: "4",
  pb: "5"
}, gz = {
  fontSize: "1.25em"
}, yz = fz({
  container: hz,
  button: mz,
  panel: vz,
  icon: gz
}), bz = pz({ baseStyle: yz }), { definePartsStyle: vl, defineMultiStyleConfig: Sz } = Ee(q$.keys), Qt = J("alert-fg"), Pr = J("alert-bg"), xz = vl({
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
function zv(e) {
  const { theme: t, colorScheme: n } = e, r = la(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var wz = vl((e) => {
  const { colorScheme: t } = e, n = zv(e);
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
}), Cz = vl((e) => {
  const { colorScheme: t } = e, n = zv(e);
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
}), kz = vl((e) => {
  const { colorScheme: t } = e, n = zv(e);
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
}), Pz = vl((e) => {
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
}), Tz = {
  subtle: wz,
  "left-accent": Cz,
  "top-accent": kz,
  solid: Pz
}, _z = Sz({
  baseStyle: xz,
  variants: Tz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: RC, defineMultiStyleConfig: Ez } = Ee(X$.keys), Yi = J("avatar-border-color"), ys = J("avatar-bg"), Qs = J("avatar-font-size"), ua = J("avatar-size"), Oz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Yi.reference,
  [Yi.variable]: "white",
  _dark: {
    [Yi.variable]: "colors.gray.800"
  }
}, Mz = {
  bg: ys.reference,
  fontSize: Qs.reference,
  width: ua.reference,
  height: ua.reference,
  lineHeight: "1",
  [ys.variable]: "colors.gray.200",
  _dark: {
    [ys.variable]: "colors.whiteAlpha.400"
  }
}, Iz = (e) => {
  const { name: t, theme: n } = e, r = t ? zA({ string: t }) : "colors.gray.400", o = FA(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: ys.reference,
    fontSize: Qs.reference,
    color: i,
    borderColor: Yi.reference,
    verticalAlign: "top",
    width: ua.reference,
    height: ua.reference,
    "&:not([data-loaded])": {
      [ys.variable]: r
    },
    [Yi.variable]: "colors.white",
    _dark: {
      [Yi.variable]: "colors.gray.800"
    }
  };
}, Rz = {
  fontSize: Qs.reference,
  lineHeight: "1"
}, $z = RC((e) => ({
  badge: Et(Oz, e),
  excessLabel: Et(Mz, e),
  container: Et(Iz, e),
  label: Rz
}));
function Fr(e) {
  const t = e !== "100%" ? wC[e] : void 0;
  return RC({
    container: {
      [ua.variable]: t ?? e,
      [Qs.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [ua.variable]: t ?? e,
      [Qs.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var Az = {
  "2xs": Fr(4),
  xs: Fr(6),
  sm: Fr(8),
  md: Fr(12),
  lg: Fr(16),
  xl: Fr(24),
  "2xl": Fr(32),
  full: Fr("100%")
}, Dz = Ez({
  baseStyle: $z,
  sizes: Az,
  defaultProps: {
    size: "md"
  }
}), Fz = {
  Accordion: bz,
  Alert: _z,
  Avatar: Dz,
  Badge: ms,
  Breadcrumb: LL,
  Button: GL,
  Checkbox: Mc,
  CloseButton: ez,
  Code: oz,
  Container: az,
  Divider: dz,
  Drawer: lL,
  Editable: mL,
  Form: xL,
  FormError: _L,
  FormLabel: OL,
  Heading: RL,
  Input: be,
  Kbd: ZD,
  Link: eF,
  List: iF,
  Menu: vF,
  Modal: _F,
  NumberInput: FF,
  PinInput: NF,
  Popover: QF,
  Progress: oD,
  Radio: gD,
  Select: kD,
  Skeleton: TD,
  SkipLink: ED,
  Slider: jD,
  Spinner: BD,
  Stat: XD,
  Switch: e5,
  Table: s5,
  Tabs: w5,
  Tag: D5,
  Textarea: K5,
  Tooltip: X5,
  Card: QL,
  Stepper: K$
}, Lz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, zz = {
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
}, jz = "ltr", Nz = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, $C = {
  semanticTokens: Lz,
  direction: jz,
  ...H$,
  components: Fz,
  styles: zz,
  config: Nz
};
function ts(e) {
  return typeof e == "function";
}
function Vz(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var Bz = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return S$(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, Vz(
    ...r.map(
      (i) => (a) => ts(i) ? i(a) : Hz(a, i)
    )
  )(o);
}, Wz = Bz($C);
function Hz(...e) {
  return mn({}, ...e, AC);
}
function AC(e, t, n, r) {
  if ((ts(e) || ts(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = ts(e) ? e(...o) : e, a = ts(t) ? t(...o) : t;
      return mn({}, i, a, AC);
    };
}
function Uz() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Gz = /* @__PURE__ */ Uz();
function Kz(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function Yz(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var qz = (e) => {
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
}, DC = qz(Yz);
function FC(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var LC = (e) => FC(e, (t) => t != null);
function Xz(e) {
  return typeof e == "function";
}
function zC(e, ...t) {
  return Xz(e) ? e(...t) : e;
}
function Qz(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var Zz = typeof Element < "u", Jz = typeof Map == "function", e4 = typeof Set == "function", t4 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Yu(e, t) {
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
        if (!Yu(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (Jz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Yu(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (e4 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (t4 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Zz && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Yu(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var n4 = function(t, n) {
  try {
    return Yu(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const r4 = /* @__PURE__ */ sl(n4);
function jC(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = tR(), s = e ? DC(i, `components.${e}`) : void 0, l = r || s, u = mn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    LC(Kz(o, ["children"]))
  ), c = m.useRef({});
  if (l) {
    const f = y$(l)(u);
    r4(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Zo(e, t = {}) {
  return jC(e, t);
}
function Ct(e, t = {}) {
  return jC(e, t);
}
var o4 = /* @__PURE__ */ new Set([
  ...a$,
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
]), i4 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function a4(e) {
  return i4.has(e) || !o4.has(e);
}
function s4(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function l4(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var u4 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, c4 = /* @__PURE__ */ qw(
  function(e) {
    return u4.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), d4 = c4, f4 = function(t) {
  return t !== "theme";
}, vb = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? d4 : f4;
}, gb = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, p4 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return kv(n, r, o), oC(function() {
    return Pv(n, r, o);
  }), null;
}, h4 = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = gb(t, n, r), l = s || vb(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var y = _v(function(v, S, h) {
      var g = u && v.as || o, b = "", x = [], k = v;
      if (v.theme == null) {
        k = {};
        for (var P in v)
          k[P] = v[P];
        k.theme = m.useContext(aa);
      }
      typeof v.className == "string" ? b = tC(S.registered, x, v.className) : v.className != null && (b = v.className + " ");
      var T = Rd(d.concat(x), S.registered, k);
      b += S.key + "-" + T.name, a !== void 0 && (b += " " + a);
      var _ = u && s === void 0 ? vb(g) : l, M = {};
      for (var I in v)
        u && I === "as" || // $FlowFixMe
        _(I) && (M[I] = v[I]);
      return M.className = b, M.ref = h, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(p4, {
        cache: S,
        serialized: T,
        isStringTag: typeof g == "string"
      }), /* @__PURE__ */ m.createElement(g, M));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + a;
      }
    }), y.withComponent = function(v, S) {
      return e(v, q({}, n, S, {
        shouldForwardProp: gb(y, S, !0)
      })).apply(void 0, d);
    }, y;
  };
}, m4 = [
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
], Rc = h4.bind();
m4.forEach(function(e) {
  Rc[e] = Rc(e);
});
var yb, v4 = (yb = Rc.default) != null ? yb : Rc, g4 = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = FC(a, (d, f) => l$(f)), l = zC(e, t), u = s4(
    {},
    o,
    l,
    LC(s),
    i
  ), c = bC(u)(t.theme);
  return r ? [c, r] : c;
};
function op(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = a4);
  const o = g4({ baseStyle: n }), i = v4(
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
function y4() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(op, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return op(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, op(n)), e.get(n);
    }
  });
}
var X = y4();
function oe(e) {
  return m.forwardRef(e);
}
function b4(e = {}) {
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
function S4(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = m.useMemo(() => i$(n), [n]);
  return /* @__PURE__ */ w.jsxs(RI, { theme: o, children: [
    /* @__PURE__ */ w.jsx(x4, { root: t }),
    r
  ] });
}
function x4({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ w.jsx($d, { styles: (n) => ({ [t]: n.__cssVars }) });
}
b4({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function w4() {
  const { colorMode: e } = wa();
  return /* @__PURE__ */ w.jsx(
    $d,
    {
      styles: (t) => {
        const n = DC(t, "styles.global"), r = zC(n, { theme: t, colorMode: e });
        return r ? bC(r)(t) : void 0;
      }
    }
  );
}
var jv = m.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
jv.displayName = "EnvironmentContext";
function C4({ defer: e } = {}) {
  const [, t] = m.useReducer((n) => n + 1, 0);
  return sa(() => {
    e && t();
  }, [e]), m.useContext(jv);
}
function NC(e) {
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
  return /* @__PURE__ */ w.jsxs(jv.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ w.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
NC.displayName = "EnvironmentProvider";
var k4 = (e) => {
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
    NC,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ w.jsx(S4, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ w.jsxs(
    dC,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ w.jsx(zI, { scope: o }) : /* @__PURE__ */ w.jsx(LI, {}),
        !c && /* @__PURE__ */ w.jsx(w4, {}),
        r ? /* @__PURE__ */ w.jsx(uC, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, P4 = (e, t) => e.find((n) => n.id === t);
function bb(e, t) {
  const n = VC(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function VC(e, t) {
  for (const [n, r] of Object.entries(e))
    if (P4(r, t))
      return n;
}
function T4(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function _4(e) {
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
  const n = m.useRef(e);
  return m.useEffect(() => {
    n.current = e;
  }), m.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function E4(e, t) {
  const n = to(e);
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
function ca(e, t) {
  const n = m.useRef(!1), r = m.useRef(!1);
  m.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), m.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const BC = m.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), zd = m.createContext({}), gl = m.createContext(null), jd = typeof document < "u", Nv = jd ? m.useLayoutEffect : m.useEffect, WC = m.createContext({ strict: !1 }), Vv = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), O4 = "framerAppearId", HC = "data-" + Vv(O4);
function M4(e, t, n, r) {
  const { visualElement: o } = m.useContext(zd), i = m.useContext(WC), a = m.useContext(gl), s = m.useContext(BC).reducedMotion, l = m.useRef();
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
  const c = m.useRef(!!n[HC]);
  return Nv(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), m.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function Ri(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function I4(e, t, n) {
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
function Zs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Nd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Bv = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Wv = ["initial", ...Bv];
function Vd(e) {
  return Nd(e.animate) || Wv.some((t) => Zs(e[t]));
}
function UC(e) {
  return !!(Vd(e) || e.variants);
}
function R4(e, t) {
  if (Vd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zs(n) ? n : void 0,
      animate: Zs(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function $4(e) {
  const { initial: t, animate: n } = R4(e, m.useContext(zd));
  return m.useMemo(() => ({ initial: t, animate: n }), [Sb(t), Sb(n)]);
}
function Sb(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const xb = {
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
}, Js = {};
for (const e in xb)
  Js[e] = {
    isEnabled: (t) => xb[e].some((n) => !!t[n])
  };
function A4(e) {
  for (const t in e)
    Js[t] = {
      ...Js[t],
      ...e[t]
    };
}
const Hv = m.createContext({}), GC = m.createContext({}), D4 = Symbol.for("motionComponentSymbol");
function F4({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && A4(e);
  function i(s, l) {
    let u;
    const c = {
      ...m.useContext(BC),
      ...s,
      layoutId: L4(s)
    }, { isStatic: d } = c, f = $4(s), p = r(s, d);
    if (!d && jd) {
      f.visualElement = M4(o, p, c, t);
      const y = m.useContext(GC), v = m.useContext(WC).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        v,
        e,
        y
      ));
    }
    return m.createElement(
      zd.Provider,
      { value: f },
      u && f.visualElement ? m.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, I4(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = m.forwardRef(i);
  return a[D4] = o, a;
}
function L4({ layoutId: e }) {
  const t = m.useContext(Hv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function z4(e) {
  function t(r, o = {}) {
    return F4(e(r, o));
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
const j4 = [
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
function Uv(e) {
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
      !!(j4.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const $c = {};
function N4(e) {
  Object.assign($c, e);
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
], Jo = new Set(yl);
function KC(e, { layout: t, layoutId: n }) {
  return Jo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!$c[e] || e === "opacity");
}
const Bt = (e) => !!(e && e.getVelocity), V4 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, B4 = yl.length;
function W4(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < B4; a++) {
    const s = yl[a];
    if (e[s] !== void 0) {
      const l = V4[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const YC = (e) => (t) => typeof t == "string" && t.startsWith(e), qC = YC("--"), Vh = YC("var(--"), H4 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, U4 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, so = (e, t, n) => Math.min(Math.max(n, e), t), ei = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, bs = {
  ...ei,
  transform: (e) => so(0, 1, e)
}, cu = {
  ...ei,
  default: 1
}, Ss = (e) => Math.round(e * 1e5) / 1e5, Bd = /(-)?([\d]*\.?[\d])+/g, XC = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, G4 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function bl(e) {
  return typeof e == "string";
}
const Sl = (e) => ({
  test: (t) => bl(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Lr = Sl("deg"), tr = Sl("%"), ne = Sl("px"), K4 = Sl("vh"), Y4 = Sl("vw"), wb = {
  ...tr,
  parse: (e) => tr.parse(e) / 100,
  transform: (e) => tr.transform(e * 100)
}, Cb = {
  ...ei,
  transform: Math.round
}, QC = {
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
  scale: cu,
  scaleX: cu,
  scaleY: cu,
  scaleZ: cu,
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
  opacity: bs,
  originX: wb,
  originY: wb,
  originZ: ne,
  // Misc
  zIndex: Cb,
  // SVG
  fillOpacity: bs,
  strokeOpacity: bs,
  numOctaves: Cb
};
function Gv(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (qC(d)) {
      i[d] = f;
      continue;
    }
    const p = QC[d], y = U4(f, p);
    if (Jo.has(d)) {
      if (l = !0, a[d] = y, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = y) : o[d] = y;
  }
  if (t.transform || (l || r ? o.transform = W4(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Kv = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ZC(e, t, n) {
  for (const r in t)
    !Bt(t[r]) && !KC(r, n) && (e[r] = t[r]);
}
function q4({ transformTemplate: e }, t, n) {
  return m.useMemo(() => {
    const r = Kv();
    return Gv(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function X4(e, t, n) {
  const r = e.style || {}, o = {};
  return ZC(o, r, e), Object.assign(o, q4(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function Q4(e, t, n) {
  const r = {}, o = X4(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const Z4 = /* @__PURE__ */ new Set([
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
function Ac(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Z4.has(e);
}
let JC = (e) => !Ac(e);
function J4(e) {
  e && (JC = (t) => t.startsWith("on") ? !Ac(t) : e(t));
}
try {
  J4(require("@emotion/is-prop-valid").default);
} catch {
}
function ej(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (JC(o) || n === !0 && Ac(o) || !t && !Ac(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function kb(e, t, n) {
  return typeof e == "string" ? e : ne.transform(t + n * e);
}
function tj(e, t, n) {
  const r = kb(t, e.x, e.width), o = kb(n, e.y, e.height);
  return `${r} ${o}`;
}
const nj = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, rj = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function oj(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? nj : rj;
  e[i.offset] = ne.transform(-r);
  const a = ne.transform(t), s = ne.transform(n);
  e[i.array] = `${a} ${s}`;
}
function Yv(e, {
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
  if (Gv(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: y, dimensions: v } = e;
  p.transform && (v && (y.transform = p.transform), delete p.transform), v && (o !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = tj(v, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && oj(p, a, s, l, !1);
}
const ek = () => ({
  ...Kv(),
  attrs: {}
}), qv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ij(e, t, n, r) {
  const o = m.useMemo(() => {
    const i = ek();
    return Yv(i, t, { enableHardwareAcceleration: !1 }, qv(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ZC(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function aj(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Uv(n) ? ij : Q4)(r, i, a, n), c = {
      ...ej(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = m.useMemo(() => Bt(d) ? d.get() : d, [d]);
    return m.createElement(n, {
      ...c,
      children: f
    });
  };
}
function tk(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const nk = /* @__PURE__ */ new Set([
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
function rk(e, t, n, r) {
  tk(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(nk.has(o) ? o : Vv(o), t.attrs[o]);
}
function Xv(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Bt(n[o]) || t.style && Bt(t.style[o]) || KC(o, e)) && (r[o] = n[o]);
  return r;
}
function ok(e, t) {
  const n = Xv(e, t);
  for (const r in e)
    if (Bt(e[r]) || Bt(t[r])) {
      const o = yl.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function Qv(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function ik(e) {
  const t = m.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Dc = (e) => Array.isArray(e), sj = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), lj = (e) => Dc(e) ? e[e.length - 1] || 0 : e;
function qu(e) {
  const t = Bt(e) ? e.get() : e;
  return sj(t) ? t.toValue() : t;
}
function uj({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: cj(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const ak = (e) => (t, n) => {
  const r = m.useContext(zd), o = m.useContext(gl), i = () => uj(e, t, r, o);
  return n ? i() : ik(i);
};
function cj(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = qu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Vd(e), u = UC(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Nd(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const y = Qv(e, p);
    if (!y)
      return;
    const { transitionEnd: v, transition: S, ...h } = y;
    for (const g in h) {
      let b = h[g];
      if (Array.isArray(b)) {
        const x = c ? b.length - 1 : 0;
        b = b[x];
      }
      b !== null && (o[g] = b);
    }
    for (const g in v)
      o[g] = v[g];
  }), o;
}
const He = (e) => e;
class Pb {
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
function dj(e) {
  let t = new Pb(), n = new Pb(), r = 0, o = !1, i = !1;
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
const du = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], fj = 40;
function pj(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = du.reduce((d, f) => (d[f] = dj(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, fj), 1), o.timestamp = d, o.isProcessing = !0, du.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: du.reduce((d, f) => {
    const p = i[f];
    return d[f] = (y, v = !1, S = !1) => (n || l(), p.schedule(y, v, S)), d;
  }, {}), cancel: (d) => du.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: _e, cancel: Tr, state: ot, steps: ip } = pj(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0), hj = {
  useVisualState: ak({
    scrapeMotionValuesFromProps: ok,
    createRenderState: ek,
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
        Yv(n, r, { enableHardwareAcceleration: !1 }, qv(t.tagName), e.transformTemplate), rk(t, n);
      });
    }
  })
}, mj = {
  useVisualState: ak({
    scrapeMotionValuesFromProps: Xv,
    createRenderState: Kv
  })
};
function vj(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Uv(e) ? hj : mj,
    preloadedFeatures: n,
    useRender: aj(t),
    createVisualElement: r,
    Component: e
  };
}
function mr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const sk = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Wd(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const gj = (e) => (t) => sk(t) && e(t, Wd(t));
function yr(e, t, n, r) {
  return mr(e, t, gj(n), r);
}
const yj = (e, t) => (n) => t(e(n)), no = (...e) => e.reduce(yj);
function lk(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Tb = lk("dragHorizontal"), _b = lk("dragVertical");
function uk(e) {
  let t = !1;
  if (e === "y")
    t = _b();
  else if (e === "x")
    t = Tb();
  else {
    const n = Tb(), r = _b();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function ck() {
  const e = uk(!0);
  return e ? (e(), !1) : !0;
}
class mo {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Eb(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || ck())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && _e.update(() => s[r](i, a));
  };
  return yr(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class bj extends mo {
  mount() {
    this.unmount = no(Eb(this.node, !0), Eb(this.node, !1));
  }
  unmount() {
  }
}
class Sj extends mo {
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
const dk = (e, t) => t ? e === t ? !0 : dk(e, t.parentElement) : !1;
function ap(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Wd(n));
}
class xj extends mo {
  constructor() {
    super(...arguments), this.removeStartListeners = He, this.removeEndListeners = He, this.removeAccessibleListeners = He, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = yr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        _e.update(() => {
          dk(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = yr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = no(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || ap("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && _e.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = mr(this.node.current, "keyup", a), ap("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = mr(this.node.current, "keydown", t), r = () => {
        this.isPressing && ap("cancel", (i, a) => this.cancelPress(i, a));
      }, o = mr(this.node.current, "blur", r);
      this.removeAccessibleListeners = no(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && _e.update(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ck();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && _e.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = yr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = mr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = no(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Bh = /* @__PURE__ */ new WeakMap(), sp = /* @__PURE__ */ new WeakMap(), wj = (e) => {
  const t = Bh.get(e.target);
  t && t(e);
}, Cj = (e) => {
  e.forEach(wj);
};
function kj({ root: e, ...t }) {
  const n = e || document;
  sp.has(n) || sp.set(n, {});
  const r = sp.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Cj, { root: e, ...t })), r[o];
}
function Pj(e, t, n) {
  const r = kj(t);
  return Bh.set(e, n), r.observe(e), () => {
    Bh.delete(e), r.unobserve(e);
  };
}
const Tj = {
  some: 0,
  all: 1
};
class _j extends mo {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Tj[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return Pj(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ej(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Ej({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Oj = {
  inView: {
    Feature: _j
  },
  tap: {
    Feature: xj
  },
  focus: {
    Feature: Sj
  },
  hover: {
    Feature: bj
  }
};
function fk(e, t) {
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
function Mj(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function Ij(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function Hd(e, t, n) {
  const r = e.getProps();
  return Qv(r, t, n !== void 0 ? n : r.custom, Mj(e), Ij(e));
}
let Rj = He, Zv = He;
const ro = (e) => e * 1e3, br = (e) => e / 1e3, $j = {
  current: !1
}, pk = (e) => Array.isArray(e) && typeof e[0] == "number";
function hk(e) {
  return !!(!e || typeof e == "string" && mk[e] || pk(e) || Array.isArray(e) && e.every(hk));
}
const ns = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, mk = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ns([0, 0.65, 0.55, 1]),
  circOut: ns([0.55, 0, 1, 0.45]),
  backIn: ns([0.31, 0.01, 0.66, -0.59]),
  backOut: ns([0.33, 1.53, 0.69, 0.99])
};
function vk(e) {
  if (e)
    return pk(e) ? ns(e) : Array.isArray(e) ? e.map(vk) : mk[e];
}
function Aj(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = vk(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function Dj(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const gk = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Fj = 1e-7, Lj = 12;
function zj(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = gk(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > Fj && ++s < Lj);
  return a;
}
function xl(e, t, n, r) {
  if (e === t && n === r)
    return He;
  const o = (i) => zj(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : gk(o(i), t, r);
}
const jj = xl(0.42, 0, 1, 1), Nj = xl(0, 0, 0.58, 1), yk = xl(0.42, 0, 0.58, 1), Vj = (e) => Array.isArray(e) && typeof e[0] != "number", bk = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Sk = (e) => (t) => 1 - e(1 - t), xk = (e) => 1 - Math.sin(Math.acos(e)), Jv = Sk(xk), Bj = bk(Jv), wk = xl(0.33, 1.53, 0.69, 0.99), eg = Sk(wk), Wj = bk(eg), Hj = (e) => (e *= 2) < 1 ? 0.5 * eg(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Uj = {
  linear: He,
  easeIn: jj,
  easeInOut: yk,
  easeOut: Nj,
  circIn: xk,
  circInOut: Bj,
  circOut: Jv,
  backIn: eg,
  backInOut: Wj,
  backOut: wk,
  anticipate: Hj
}, Ob = (e) => {
  if (Array.isArray(e)) {
    Zv(e.length === 4);
    const [t, n, r, o] = e;
    return xl(t, n, r, o);
  } else if (typeof e == "string")
    return Uj[e];
  return e;
}, tg = (e, t) => (n) => !!(bl(n) && G4.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Ck = (e, t, n) => (r) => {
  if (!bl(r))
    return r;
  const [o, i, a, s] = r.match(Bd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, Gj = (e) => so(0, 255, e), lp = {
  ...ei,
  transform: (e) => Math.round(Gj(e))
}, Ao = {
  test: tg("rgb", "red"),
  parse: Ck("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + lp.transform(e) + ", " + lp.transform(t) + ", " + lp.transform(n) + ", " + Ss(bs.transform(r)) + ")"
};
function Kj(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Wh = {
  test: tg("#"),
  parse: Kj,
  transform: Ao.transform
}, $i = {
  test: tg("hsl", "hue"),
  parse: Ck("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tr.transform(Ss(t)) + ", " + tr.transform(Ss(n)) + ", " + Ss(bs.transform(r)) + ")"
}, kt = {
  test: (e) => Ao.test(e) || Wh.test(e) || $i.test(e),
  parse: (e) => Ao.test(e) ? Ao.parse(e) : $i.test(e) ? $i.parse(e) : Wh.parse(e),
  transform: (e) => bl(e) ? e : e.hasOwnProperty("red") ? Ao.transform(e) : $i.transform(e)
}, je = (e, t, n) => -n * e + n * t + e;
function up(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Yj({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = up(l, s, e + 1 / 3), i = up(l, s, e), a = up(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const cp = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, qj = [Wh, Ao, $i], Xj = (e) => qj.find((t) => t.test(e));
function Mb(e) {
  const t = Xj(e);
  let n = t.parse(e);
  return t === $i && (n = Yj(n)), n;
}
const kk = (e, t) => {
  const n = Mb(e), r = Mb(t), o = { ...n };
  return (i) => (o.red = cp(n.red, r.red, i), o.green = cp(n.green, r.green, i), o.blue = cp(n.blue, r.blue, i), o.alpha = je(n.alpha, r.alpha, i), Ao.transform(o));
};
function Qj(e) {
  var t, n;
  return isNaN(e) && bl(e) && (((t = e.match(Bd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(XC)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Pk = {
  regex: H4,
  countKey: "Vars",
  token: "${v}",
  parse: He
}, Tk = {
  regex: XC,
  countKey: "Colors",
  token: "${c}",
  parse: kt.parse
}, _k = {
  regex: Bd,
  countKey: "Numbers",
  token: "${n}",
  parse: ei.parse
};
function dp(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function Fc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && dp(n, Pk), dp(n, Tk), dp(n, _k), n;
}
function Ek(e) {
  return Fc(e).values;
}
function Ok(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Fc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Pk.token, a[l]) : l < r + n ? s = s.replace(Tk.token, kt.transform(a[l])) : s = s.replace(_k.token, Ss(a[l]));
    return s;
  };
}
const Zj = (e) => typeof e == "number" ? 0 : e;
function Jj(e) {
  const t = Ek(e);
  return Ok(e)(t.map(Zj));
}
const lo = {
  test: Qj,
  parse: Ek,
  createTransformer: Ok,
  getAnimatableNone: Jj
}, Mk = (e, t) => (n) => `${n > 0 ? t : e}`;
function Ik(e, t) {
  return typeof e == "number" ? (n) => je(e, t, n) : kt.test(e) ? kk(e, t) : e.startsWith("var(") ? Mk(e, t) : $k(e, t);
}
const Rk = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => Ik(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, eN = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Ik(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, $k = (e, t) => {
  const n = lo.createTransformer(t), r = Fc(e), o = Fc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? no(Rk(r.values, o.values), n) : Mk(e, t);
}, el = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Ib = (e, t) => (n) => je(e, t, n);
function tN(e) {
  return typeof e == "number" ? Ib : typeof e == "string" ? kt.test(e) ? kk : $k : Array.isArray(e) ? Rk : typeof e == "object" ? eN : Ib;
}
function nN(e, t, n) {
  const r = [], o = n || tN(e[0]), i = e.length - 1;
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
function Ak(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Zv(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = nN(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = el(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(so(e[0], e[i - 1], u)) : l;
}
function rN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = el(0, t, r);
    e.push(je(n, 1, o));
  }
}
function oN(e) {
  const t = [0];
  return rN(t, e.length - 1), t;
}
function iN(e, t) {
  return e.map((n) => n * t);
}
function aN(e, t) {
  return e.map(() => t || yk).splice(0, e.length - 1);
}
function Lc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = Vj(r) ? r.map(Ob) : Ob(r), i = {
    done: !1,
    value: t[0]
  }, a = iN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : oN(t),
    e
  ), s = Ak(a, t, {
    ease: Array.isArray(o) ? o : aN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Dk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sN = 5;
function Fk(e, t, n) {
  const r = Math.max(t - sN, 0);
  return Dk(n - e(r), t - r);
}
const fp = 1e-3, lN = 0.01, Rb = 10, uN = 0.05, cN = 1;
function dN({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  Rj(e <= ro(Rb));
  let a = 1 - t;
  a = so(uN, cN, a), e = so(lN, Rb, br(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = Hh(u, a), y = Math.exp(-d);
    return fp - f / p * y;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, y = Math.exp(-d), v = Hh(Math.pow(u, 2), a);
    return (-o(u) + fp > 0 ? -1 : 1) * ((f - p) * y) / v;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -fp + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = pN(o, i, s);
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
const fN = 12;
function pN(e, t, n) {
  let r = n;
  for (let o = 1; o < fN; o++)
    r = r - e(r) / t(r);
  return r;
}
function Hh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const hN = ["duration", "bounce"], mN = ["stiffness", "damping", "mass"];
function $b(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function vN(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!$b(e, mN) && $b(e, hN)) {
    const n = dN(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Lk({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = vN(r), p = c ? -br(c) : 0, y = l / (2 * Math.sqrt(s * u)), v = i - o, S = br(Math.sqrt(s / u)), h = Math.abs(v) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 5e-3 : 0.5);
  let g;
  if (y < 1) {
    const b = Hh(S, y);
    g = (x) => {
      const k = Math.exp(-y * S * x);
      return i - k * ((p + y * S * v) / b * Math.sin(b * x) + v * Math.cos(b * x));
    };
  } else if (y === 1)
    g = (b) => i - Math.exp(-S * b) * (v + (p + S * v) * b);
  else {
    const b = S * Math.sqrt(y * y - 1);
    g = (x) => {
      const k = Math.exp(-y * S * x), P = Math.min(b * x, 300);
      return i - k * ((p + y * S * v) * Math.sinh(P) + b * v * Math.cosh(P)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const x = g(b);
      if (f)
        a.done = b >= d;
      else {
        let k = p;
        b !== 0 && (y < 1 ? k = Fk(g, b, x) : k = 0);
        const P = Math.abs(k) <= n, T = Math.abs(i - x) <= t;
        a.done = P && T;
      }
      return a.value = a.done ? i : x, a;
    }
  };
}
function Ab({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (_) => s !== void 0 && _ < s || l !== void 0 && _ > l, y = (_) => s === void 0 ? l : l === void 0 || Math.abs(s - _) < Math.abs(l - _) ? s : l;
  let v = n * t;
  const S = d + v, h = a === void 0 ? S : a(S);
  h !== S && (v = h - d);
  const g = (_) => -v * Math.exp(-_ / r), b = (_) => h + g(_), x = (_) => {
    const M = g(_), I = b(_);
    f.done = Math.abs(M) <= u, f.value = f.done ? h : I;
  };
  let k, P;
  const T = (_) => {
    p(f.value) && (k = _, P = Lk({
      keyframes: [f.value, y(f.value)],
      velocity: Fk(b, _, f.value),
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
const gN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => _e.update(t, !0),
    stop: () => Tr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ot.isProcessing ? ot.timestamp : performance.now()
  };
}, Db = 2e4;
function Fb(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Db; )
    t += n, r = e.next(t);
  return t >= Db ? 1 / 0 : t;
}
const yN = {
  decay: Ab,
  inertia: Ab,
  tween: Lc,
  keyframes: Lc,
  spring: Lk
};
function zc({ autoplay: e = !0, delay: t = 0, driver: n = gN, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, y = !1, v, S;
  const h = () => {
    S = new Promise((V) => {
      v = V;
    });
  };
  h();
  let g;
  const b = yN[o] || Lc;
  let x;
  b !== Lc && typeof r[0] != "number" && (x = Ak([0, 100], r, {
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
  k.calculatedDuration === null && i && (k.calculatedDuration = Fb(k));
  const { calculatedDuration: D } = k;
  let G = 1 / 0, H = 1 / 0;
  D !== null && (G = D + a, H = G * (i + 1) - a);
  let L = 0;
  const W = (V) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, V)), p < 0 && (M = Math.min(V - H / p, M)), _ !== null ? L = _ : L = Math.round(V - M) * p;
    const Y = L - t * (p >= 0 ? 1 : -1), j = p >= 0 ? Y < 0 : Y > H;
    L = Math.max(Y, 0), T === "finished" && _ === null && (L = H);
    let te = L, le = k;
    if (i) {
      const Ce = L / G;
      let et = Math.floor(Ce), qe = Ce % 1;
      !qe && Ce >= 1 && (qe = 1), qe === 1 && et--, et = Math.min(et, i + 1);
      const on = !!(et % 2);
      on && (s === "reverse" ? (qe = 1 - qe, a && (qe -= a / G)) : s === "mirror" && (le = P));
      let Pn = so(0, 1, qe);
      L > H && (Pn = s === "reverse" && on ? 1 : 0), te = Pn * G;
    }
    const ie = j ? { done: !1, value: r[0] } : le.next(te);
    x && (ie.value = x(ie.value));
    let { done: se } = ie;
    !j && D !== null && (se = p >= 0 ? L >= H : L <= 0);
    const me = _ === null && (T === "finished" || T === "running" && se);
    return d && d(ie.value), me && A(), ie;
  }, K = () => {
    g && g.stop(), g = void 0;
  }, $ = () => {
    T = "idle", K(), v(), h(), M = I = null;
  }, A = () => {
    T = "finished", c && c(), K(), v();
  }, z = () => {
    if (y)
      return;
    g || (g = n(W));
    const V = g.now();
    l && l(), _ !== null ? M = V - _ : (!M || T === "finished") && (M = V), T === "finished" && h(), I = M, _ = null, T = "running", g.start();
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
      V = ro(V), L = V, _ !== null || !g || p === 0 ? _ = V : M = g.now() - V / p;
    },
    get duration() {
      const V = k.calculatedDuration === null ? Fb(k) : k.calculatedDuration;
      return br(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !g || (p = V, U.time = br(L));
    },
    get state() {
      return T;
    },
    play: z,
    pause: () => {
      T = "paused", _ = L;
    },
    stop: () => {
      y = !0, T !== "idle" && (T = "idle", u && u(), $());
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
function bN(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const SN = bN(() => Object.hasOwnProperty.call(Element.prototype, "animate")), xN = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), fu = 10, wN = 2e4, CN = (e, t) => t.type === "spring" || e === "backgroundColor" || !hk(t.ease);
function kN(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(SN() && xN.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((g) => {
      s = g;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (CN(t, o)) {
    const g = zc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const x = [];
    let k = 0;
    for (; !b.done && k < wN; )
      b = g.sample(k), x.push(b.value), k += fu;
    p = void 0, c = x, d = k - fu, f = "linear";
  }
  const y = Aj(e.owner.current, t, c, {
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
  const v = () => y.cancel(), S = () => {
    _e.update(v), s(), u();
  };
  return y.onfinish = () => {
    e.set(Dj(c, o)), r && r(), S();
  }, {
    then(g, b) {
      return l.then(g, b);
    },
    attachTimeline(g) {
      return y.timeline = g, y.onfinish = null, He;
    },
    get time() {
      return br(y.currentTime || 0);
    },
    set time(g) {
      y.currentTime = ro(g);
    },
    get speed() {
      return y.playbackRate;
    },
    set speed(g) {
      y.playbackRate = g;
    },
    get duration() {
      return br(d);
    },
    play: () => {
      a || (y.play(), Tr(v));
    },
    pause: () => y.pause(),
    stop: () => {
      if (a = !0, y.playState === "idle")
        return;
      const { currentTime: g } = y;
      if (g) {
        const b = zc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(g - fu).value, b.sample(g).value, fu);
      }
      S();
    },
    complete: () => y.finish(),
    cancel: S
  };
}
function PN({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
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
  return t ? zc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const TN = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, _N = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), EN = {
  type: "keyframes",
  duration: 0.8
}, ON = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, MN = (e, { keyframes: t }) => t.length > 2 ? EN : Jo.has(e) ? e.startsWith("scale") ? _N(t[1]) : TN : ON, Uh = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(lo.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), IN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function RN(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Bd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = IN.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const $N = /([a-z-]*)\(.*?\)/g, Gh = {
  ...lo,
  getAnimatableNone: (e) => {
    const t = e.match($N);
    return t ? t.map(RN).join(" ") : e;
  }
}, AN = {
  ...QC,
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
  filter: Gh,
  WebkitFilter: Gh
}, ng = (e) => AN[e];
function zk(e, t) {
  let n = ng(e);
  return n !== Gh && (n = lo), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const jk = (e) => /^0[^.\s]+$/.test(e);
function DN(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || jk(e);
}
function FN(e, t, n, r) {
  const o = Uh(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), DN(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = zk(t, s);
    }
  return i;
}
function LN({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function rg(e, t) {
  return e[t] || e.default || e;
}
const og = (e, t, n, r = {}) => (o) => {
  const i = rg(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - ro(a);
  const l = FN(t, e, n, i), u = l[0], c = l[l.length - 1], d = Uh(e, u), f = Uh(e, c);
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
  if (LN(i) || (p = {
    ...p,
    ...MN(e, p)
  }), p.duration && (p.duration = ro(p.duration)), p.repeatDelay && (p.repeatDelay = ro(p.repeatDelay)), !d || !f || $j.current || i.type === !1)
    return PN(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const y = kN(t, e, p);
    if (y)
      return y;
  }
  return zc(p);
};
function jc(e) {
  return !!(Bt(e) && e.add);
}
const Nk = (e) => /^\-?\d*\.?\d+$/.test(e);
function ig(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ag(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class sg {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ig(this.subscriptions, t), () => ag(this.subscriptions, t);
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
const zN = (e) => !isNaN(parseFloat(e));
class jN {
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
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = zN(this.current), this.owner = n.owner;
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
    this.events[t] || (this.events[t] = new sg());
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
      Dk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  return new jN(e, t);
}
const Vk = (e) => (t) => t.test(e), NN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Bk = [ei, ne, tr, Lr, Y4, K4, NN], Va = (e) => Bk.find(Vk(e)), VN = [...Bk, kt, lo], BN = (e) => VN.find(Vk(e));
function WN(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, da(n));
}
function HN(e, t) {
  const n = Hd(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = lj(i[a]);
    WN(e, a, s);
  }
}
function UN(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Nk(c) || jk(c)) ? c = parseFloat(c) : !BN(c) && lo.test(u) && (c = zk(l, u)), e.addValue(l, da(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function GN(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function KN(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = GN(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function YN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Wk(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && YN(c, d))
      continue;
    const y = {
      delay: n,
      elapsed: 0,
      ...rg(i || {}, d)
    };
    let v = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const g = e.getProps()[HC];
      g && (v = !1, y.elapsed = window.HandoffAppearAnimations(g, d, f, _e), y.syncStart = !0);
    }
    let S = v && p === f.get();
    if (y.type === "spring" && (f.getVelocity() || y.velocity) && (S = !1), f.animation && (S = !1), S)
      continue;
    f.start(og(d, f, p, e.shouldReduceMotion && Jo.has(d) ? { type: !1 } : y));
    const h = f.animation;
    jc(l) && (l.add(d), h.then(() => l.remove(d))), u.push(h);
  }
  return a && Promise.all(u).then(() => {
    a && HN(e, a);
  }), u;
}
function Kh(e, t, n = {}) {
  const r = Hd(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Wk(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return qN(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function qN(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(XN).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Kh(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function XN(e, t) {
  return e.sortNodePosition(t);
}
function QN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Kh(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Kh(e, t, n);
  else {
    const o = typeof t == "function" ? Hd(e, t, n.custom) : t;
    r = Promise.all(Wk(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const ZN = [...Bv].reverse(), JN = Bv.length;
function e3(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => QN(e, n, r)));
}
function t3(e) {
  let t = e3(e);
  const n = r3();
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
    let y = {}, v = 1 / 0;
    for (let h = 0; h < JN; h++) {
      const g = ZN[h], b = n[g], x = c[g] !== void 0 ? c[g] : d[g], k = Zs(x), P = g === u ? b.isActive : null;
      P === !1 && (v = h);
      let T = x === d[g] && x !== c[g] && k;
      if (T && r && e.manuallyAnimateOnMount && (T = !1), b.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !b.prevProp || // Or if the prop doesn't define an animation
      Nd(x) || typeof x == "boolean")
        continue;
      const _ = n3(b.prevProp, x);
      let M = _ || // If we're making this variant active, we want to always make it active
      g === u && b.isActive && !T && k || // If we removed a higher-priority variant (i is in reverse order)
      h > v && k;
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
        y.hasOwnProperty(W) || (K !== $ ? Dc(K) && Dc($) ? !fk(K, $) || _ ? L(W) : b.protectedKeys[W] = !0 : K !== void 0 ? L(W) : p.add(W) : K !== void 0 && p.has(W) ? L(W) : b.protectedKeys[W] = !0);
      }
      b.prevProp = x, b.prevResolvedValues = D, b.isActive && (y = { ...y, ...D }), r && e.blockInitialAnimation && (M = !1), M && !T && f.push(...I.map((W) => ({
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
function n3(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !fk(t, e) : !1;
}
function xo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function r3() {
  return {
    animate: xo(!0),
    whileInView: xo(),
    whileHover: xo(),
    whileTap: xo(),
    whileDrag: xo(),
    whileFocus: xo(),
    exit: xo()
  };
}
class o3 extends mo {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = t3(t));
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
let i3 = 0;
class a3 extends mo {
  constructor() {
    super(...arguments), this.id = i3++;
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
const s3 = {
  animation: {
    Feature: o3
  },
  exit: {
    Feature: a3
  }
}, Lb = (e, t) => Math.abs(e - t);
function l3(e, t) {
  const n = Lb(e.x, t.x), r = Lb(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Hk {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = hp(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = l3(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: y } = ot;
      this.history.push({ ...p, timestamp: y });
      const { onStart: v, onMove: S } = this.handlers;
      d || (v && v(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = pp(d, this.transformPagePoint), _e.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, y = hp(c.type === "pointercancel" ? this.lastMoveEventInfo : pp(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, y), p && p(c, y);
    }, !sk(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Wd(t), a = pp(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = ot;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, hp(a, this.history)), this.removeListeners = no(yr(this.contextWindow, "pointermove", this.handlePointerMove), yr(this.contextWindow, "pointerup", this.handlePointerUp), yr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tr(this.updatePoint);
  }
}
function pp(e, t) {
  return t ? { point: t(e.point) } : e;
}
function zb(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function hp({ point: e }, t) {
  return {
    point: e,
    delta: zb(e, Uk(t)),
    offset: zb(e, u3(t)),
    velocity: c3(t, 0.1)
  };
}
function u3(e) {
  return e[0];
}
function Uk(e) {
  return e[e.length - 1];
}
function c3(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Uk(e);
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
function Jt(e) {
  return e.max - e.min;
}
function Yh(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function jb(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = je(t.min, t.max, e.origin), e.scale = Jt(n) / Jt(t), (Yh(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = je(n.min, n.max, e.origin) - e.originPoint, (Yh(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function xs(e, t, n, r) {
  jb(e.x, t.x, n.x, r ? r.originX : void 0), jb(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Nb(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Jt(t);
}
function d3(e, t, n) {
  Nb(e.x, t.x, n.x), Nb(e.y, t.y, n.y);
}
function Vb(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Jt(t);
}
function ws(e, t, n) {
  Vb(e.x, t.x, n.x), Vb(e.y, t.y, n.y);
}
function f3(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? je(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? je(n, e, r.max) : Math.min(e, n)), e;
}
function Bb(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function p3(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Bb(e.x, n, o),
    y: Bb(e.y, t, r)
  };
}
function Wb(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function h3(e, t) {
  return {
    x: Wb(e.x, t.x),
    y: Wb(e.y, t.y)
  };
}
function m3(e, t) {
  let n = 0.5;
  const r = Jt(e), o = Jt(t);
  return o > r ? n = el(t.min, t.max - r, e.min) : r > o && (n = el(e.min, e.max - o, t.min)), so(0, 1, n);
}
function v3(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const qh = 0.35;
function g3(e = qh) {
  return e === !1 ? e = 0 : e === !0 && (e = qh), {
    x: Hb(e, "left", "right"),
    y: Hb(e, "top", "bottom")
  };
}
function Hb(e, t, n) {
  return {
    min: Ub(e, t),
    max: Ub(e, n)
  };
}
function Ub(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Gb = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ai = () => ({
  x: Gb(),
  y: Gb()
}), Kb = () => ({ min: 0, max: 0 }), Xe = () => ({
  x: Kb(),
  y: Kb()
});
function Hn(e) {
  return [e("x"), e("y")];
}
function Gk({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function y3({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function b3(e, t) {
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
function mp(e) {
  return e === void 0 || e === 1;
}
function Xh({ scale: e, scaleX: t, scaleY: n }) {
  return !mp(e) || !mp(t) || !mp(n);
}
function Po(e) {
  return Xh(e) || Kk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Kk(e) {
  return Yb(e.x) || Yb(e.y);
}
function Yb(e) {
  return e && e !== "0%";
}
function Nc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function qb(e, t, n, r, o) {
  return o !== void 0 && (e = Nc(e, o, r)), Nc(e, n, r) + t;
}
function Qh(e, t = 0, n = 1, r, o) {
  e.min = qb(e.min, t, n, r, o), e.max = qb(e.max, t, n, r, o);
}
function Yk(e, { x: t, y: n }) {
  Qh(e.x, t.translate, t.scale, t.originPoint), Qh(e.y, n.translate, n.scale, n.originPoint);
}
function S3(e, t, n, r = !1) {
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
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Yk(e, a)), r && Po(i.latestValues) && Di(e, i.latestValues));
  }
  t.x = Xb(t.x), t.y = Xb(t.y);
}
function Xb(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Nr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Qb(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = je(e.min, e.max, i);
  Qh(e, t[n], t[r], a, t.scale);
}
const x3 = ["x", "scaleX", "originX"], w3 = ["y", "scaleY", "originY"];
function Di(e, t) {
  Qb(e.x, t, x3), Qb(e.y, t, w3);
}
function qk(e, t) {
  return Gk(b3(e.getBoundingClientRect(), t));
}
function C3(e, t, n) {
  const r = qk(e, n), { scroll: o } = t;
  return o && (Nr(r.x, o.offset.x), Nr(r.y, o.offset.y)), r;
}
const Xk = ({ current: e }) => e ? e.ownerDocument.defaultView : null, k3 = /* @__PURE__ */ new WeakMap();
class P3 {
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
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = uk(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Hn((y) => {
        let v = this.getAxisMotionValue(y).get() || 0;
        if (tr.test(v)) {
          const { projection: S } = this.visualElement;
          if (S && S.layout) {
            const h = S.layout.layoutBox[y];
            h && (v = Jt(h) * (parseFloat(v) / 100));
          }
        }
        this.originPoint[y] = v;
      }), f && _e.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: y } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = T3(y), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, y), this.updateAxis("y", u.point, y), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Hk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Xk(this.visualElement)
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
    if (!r || !pu(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = f3(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && Ri(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = p3(o.layoutBox, n) : this.constraints = !1, this.elastic = g3(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Hn((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = v3(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ri(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = C3(r, o.root, this.visualElement.getTransformPagePoint());
    let a = h3(o.layout.layoutBox, i);
    if (n) {
      const s = n(y3(a));
      this.hasMutatedConstraints = !!s, s && (a = Gk(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = Hn((c) => {
      if (!pu(c, n, this.currentDirection))
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
    return r.start(og(t, r, 0, n));
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
      if (!pu(n, r, this.currentDirection))
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
    Hn((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = m3({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Hn((a) => {
      if (!pu(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(je(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    k3.set(this.visualElement, this);
    const t = this.visualElement.current, n = yr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Ri(l) && (this.constraints = this.resolveRefConstraints());
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = qh, dragMomentum: s = !0 } = t;
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
function pu(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function T3(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class _3 extends mo {
  constructor(t) {
    super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new P3(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Zb = (e) => (t, n) => {
  e && _e.update(() => e(t, n));
};
class E3 extends mo {
  constructor() {
    super(...arguments), this.removePointerDownListener = He;
  }
  onPointerDown(t) {
    this.session = new Hk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Xk(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Zb(t),
      onStart: Zb(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && _e.update(() => o(i, a));
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
function Qk() {
  const e = m.useContext(gl);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = m.useId();
  return m.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function O3() {
  return M3(m.useContext(gl));
}
function M3(e) {
  return e === null ? !0 : e.isPresent;
}
const Xu = {
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
function Jb(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ba = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Jb(e, t.target.x), r = Jb(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, I3 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = lo.parse(e);
    if (o.length > 5)
      return r;
    const i = lo.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = je(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class R3 extends re.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    N4($3), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Xu.hasEverUpdated = !0;
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
function Zk(e) {
  const [t, n] = Qk(), r = m.useContext(Hv);
  return re.createElement(R3, { ...e, layoutGroup: r, switchLayoutGroup: m.useContext(GC), isPresent: t, safeToRemove: n });
}
const $3 = {
  borderRadius: {
    ...Ba,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ba,
  borderTopRightRadius: Ba,
  borderBottomLeftRadius: Ba,
  borderBottomRightRadius: Ba,
  boxShadow: I3
}, Jk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], A3 = Jk.length, e1 = (e) => typeof e == "string" ? parseFloat(e) : e, t1 = (e) => typeof e == "number" || ne.test(e);
function D3(e, t, n, r, o, i) {
  o ? (e.opacity = je(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    F3(r)
  ), e.opacityExit = je(t.opacity !== void 0 ? t.opacity : 1, 0, L3(r))) : i && (e.opacity = je(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < A3; a++) {
    const s = `border${Jk[a]}Radius`;
    let l = n1(t, s), u = n1(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || t1(l) === t1(u) ? (e[s] = Math.max(je(e1(l), e1(u), r), 0), (tr.test(u) || tr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = je(t.rotate || 0, n.rotate || 0, r));
}
function n1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const F3 = eP(0, 0.5, Jv), L3 = eP(0.5, 0.95, He);
function eP(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(el(e, t, r));
}
function r1(e, t) {
  e.min = t.min, e.max = t.max;
}
function un(e, t) {
  r1(e.x, t.x), r1(e.y, t.y);
}
function o1(e, t, n, r, o) {
  return e -= t, e = Nc(e, 1 / n, r), o !== void 0 && (e = Nc(e, 1 / o, r)), e;
}
function z3(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (tr.test(t) && (t = parseFloat(t), t = je(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = je(i.min, i.max, r);
  e === i && (s -= t), e.min = o1(e.min, t, n, s, o), e.max = o1(e.max, t, n, s, o);
}
function i1(e, t, [n, r, o], i, a) {
  z3(e, t[n], t[r], t[o], t.scale, i, a);
}
const j3 = ["x", "scaleX", "originX"], N3 = ["y", "scaleY", "originY"];
function a1(e, t, n, r) {
  i1(e.x, t, j3, n ? n.x : void 0, r ? r.x : void 0), i1(e.y, t, N3, n ? n.y : void 0, r ? r.y : void 0);
}
function s1(e) {
  return e.translate === 0 && e.scale === 1;
}
function tP(e) {
  return s1(e.x) && s1(e.y);
}
function V3(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function nP(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function l1(e) {
  return Jt(e.x) / Jt(e.y);
}
class B3 {
  constructor() {
    this.members = [];
  }
  add(t) {
    ig(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ag(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function u1(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const W3 = (e, t) => e.depth - t.depth;
class H3 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ig(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ag(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(W3), this.isDirty = !1, this.children.forEach(t);
  }
}
function U3(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (Tr(r), e(i - t));
  };
  return _e.read(r, !0), () => Tr(r);
}
function G3(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function K3(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Y3(e, t, n) {
  const r = Bt(e) ? e : da(e);
  return r.start(og("", r, t, n)), r.animation;
}
const c1 = ["", "X", "Y", "Z"], q3 = { visibility: "hidden" }, d1 = 1e3;
let X3 = 0;
const To = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function rP({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = X3++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, To.totalNodes = To.resolvedTargetDeltas = To.recalculatedProjection = 0, this.nodes.forEach(J3), this.nodes.forEach(oV), this.nodes.forEach(iV), this.nodes.forEach(eV), G3(To);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new H3());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new sg()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = K3(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = U3(f, 250), Xu.hasAnimatedSinceResize && (Xu.hasAnimatedSinceResize = !1, this.nodes.forEach(p1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || cV, { onLayoutAnimationStart: S, onLayoutAnimationComplete: h } = c.getProps(), g = !this.targetLayout || !nP(this.targetLayout, y) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const x = {
            ...rg(v, "layout"),
            onPlay: S,
            onComplete: h
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || p1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(aV), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(f1);
        return;
      }
      this.isUpdating || this.nodes.forEach(nV), this.isUpdating = !1, this.nodes.forEach(rV), this.nodes.forEach(Q3), this.nodes.forEach(Z3), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = so(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, ip.update.process(ot), ip.preRender.process(ot), ip.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(tV), this.sharedNodes.forEach(sV);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !tP(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || Po(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), dV(l), {
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
      return l && (Nr(s.x, l.offset.x), Nr(s.y, l.offset.y)), s;
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
            f && (Nr(s.x, -f.offset.x), Nr(s.y, -f.offset.y));
          }
          Nr(s.x, c.offset.x), Nr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Xe();
      un(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && Di(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Po(c.latestValues) && Di(l, c.latestValues);
      }
      return Po(this.latestValues) && Di(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Xe();
      un(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Po(u.latestValues))
          continue;
        Xh(u.latestValues) && u.updateSnapshot();
        const c = Xe(), d = u.measurePageBox();
        un(c, d), a1(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Po(this.latestValues) && a1(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), ws(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Xe(), this.targetWithTransforms = Xe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), d3(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : un(this.target, this.layout.layoutBox), Yk(this.target, this.targetDelta)) : un(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Xe(), this.relativeTargetOrigin = Xe(), ws(this.relativeTargetOrigin, this.target, p.target), un(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          To.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Xh(this.parent.latestValues) || Kk(this.parent.latestValues)))
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
      S3(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: y } = s;
      if (!y) {
        this.projectionTransform && (this.projectionDelta = Ai(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Ai(), this.projectionDeltaWithTransform = Ai());
      const v = this.projectionTransform;
      xs(this.projectionDelta, this.layoutCorrected, y, this.latestValues), this.projectionTransform = u1(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), To.recalculatedProjection++;
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
      const f = Xe(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, v = p !== y, S = this.getStack(), h = !S || S.members.length <= 1, g = !!(v && !h && this.options.crossfade === !0 && !this.path.some(uV));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (x) => {
        const k = x / 1e3;
        h1(d.x, a.x, k), h1(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ws(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), lV(this.relativeTarget, this.relativeTargetOrigin, f, k), b && V3(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Xe()), un(b, this.relativeTarget)), v && (this.animationValues = c, D3(c, u, this.latestValues, k, g, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _e.update(() => {
        Xu.hasAnimatedSinceResize = !0, this.currentAnimation = Y3(0, d1, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(d1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && oP(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Xe();
          const d = Jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        un(s, l), Di(s, c), xs(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new B3()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < c1.length; c++) {
        const d = "rotate" + c1[c];
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
        return q3;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = qu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = qu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Po(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = u1(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const v in $c) {
        if (f[v] === void 0)
          continue;
        const { correct: S, applyTo: h } = $c[v], g = u.transform === "none" ? f[v] : S(f[v], d);
        if (h) {
          const b = h.length;
          for (let x = 0; x < b; x++)
            u[h[x]] = g;
        } else
          u[v] = g;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? qu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(f1), this.root.sharedNodes.clear();
    }
  };
}
function Q3(e) {
  e.updateLayout();
}
function Z3(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : oP(i, n.layoutBox, r) && Hn((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Jt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = Ai();
    xs(s, r, n.layoutBox);
    const l = Ai();
    a ? xs(l, e.applyTransform(o, !0), n.measuredBox) : xs(l, r, n.layoutBox);
    const u = !tP(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const y = Xe();
          ws(y, n.layoutBox, f.layoutBox);
          const v = Xe();
          ws(v, r, p.layoutBox), nP(y, v) || (c = !0), d.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = y, e.relativeParent = d);
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
function J3(e) {
  To.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function eV(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function tV(e) {
  e.clearSnapshot();
}
function f1(e) {
  e.clearMeasurements();
}
function nV(e) {
  e.isLayoutDirty = !1;
}
function rV(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function p1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function oV(e) {
  e.resolveTargetDelta();
}
function iV(e) {
  e.calcProjection();
}
function aV(e) {
  e.resetRotation();
}
function sV(e) {
  e.removeLeadSnapshot();
}
function h1(e, t, n) {
  e.translate = je(t.translate, 0, n), e.scale = je(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function m1(e, t, n, r) {
  e.min = je(t.min, n.min, r), e.max = je(t.max, n.max, r);
}
function lV(e, t, n, r) {
  m1(e.x, t.x, n.x, r), m1(e.y, t.y, n.y, r);
}
function uV(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const cV = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, v1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), g1 = v1("applewebkit/") && !v1("chrome/") ? Math.round : He;
function y1(e) {
  e.min = g1(e.min), e.max = g1(e.max);
}
function dV(e) {
  y1(e.x), y1(e.y);
}
function oP(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Yh(l1(t), l1(n), 0.2);
}
const fV = rP({
  attachResizeListener: (e, t) => mr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), vp = {
  current: void 0
}, iP = rP({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!vp.current) {
      const e = new fV({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), vp.current = e;
    }
    return vp.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), pV = {
  pan: {
    Feature: E3
  },
  drag: {
    Feature: _3,
    ProjectionNode: iP,
    MeasureLayout: Zk
  }
}, hV = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function mV(e) {
  const t = hV.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function Zh(e, t, n = 1) {
  const [r, o] = mV(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return Nk(a) ? parseFloat(a) : a;
  } else
    return Vh(o) ? Zh(o, t, n + 1) : o;
}
function vV(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!Vh(i))
      return;
    const a = Zh(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Vh(i))
      continue;
    const a = Zh(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const gV = /* @__PURE__ */ new Set([
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
]), aP = (e) => gV.has(e), yV = (e) => Object.keys(e).some(aP), b1 = (e) => e === ei || e === ne, S1 = (e, t) => parseFloat(e.split(", ")[t]), x1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return S1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? S1(i[1], e) : 0;
  }
}, bV = /* @__PURE__ */ new Set(["x", "y", "z"]), SV = yl.filter((e) => !bV.has(e));
function xV(e) {
  const t = [];
  return SV.forEach((n) => {
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
  x: x1(4, 13),
  y: x1(5, 14)
};
fa.translateX = fa.x;
fa.translateY = fa.y;
const wV = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = fa[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = fa[u](l, i);
  }), e;
}, CV = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(aP);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = Va(c);
    const f = t[l];
    let p;
    if (Dc(f)) {
      const y = f.length, v = f[0] === null ? 1 : 0;
      c = f[v], d = Va(c);
      for (let S = v; S < y && f[S] !== null; S++)
        p ? Zv(Va(f[S]) === p) : p = Va(f[S]);
    } else
      p = Va(f);
    if (d !== p)
      if (b1(d) && b1(p)) {
        const y = u.get();
        typeof y == "string" && u.set(parseFloat(y)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ne && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = xV(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = wV(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), jd && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function kV(e, t, n, r) {
  return yV(t) ? CV(e, t, n, r) : { target: t, transitionEnd: r };
}
const PV = (e, t, n, r) => {
  const o = vV(e, t, r);
  return t = o.target, r = o.transitionEnd, kV(e, t, n, r);
}, Jh = { current: null }, sP = { current: !1 };
function TV() {
  if (sP.current = !0, !!jd)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Jh.current = e.matches;
      e.addListener(t), t();
    } else
      Jh.current = !1;
}
function _V(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Bt(i))
      e.addValue(o, i), jc(r) && r.add(o);
    else if (Bt(a))
      e.addValue(o, da(i, { owner: e })), jc(r) && r.remove(o);
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
const w1 = /* @__PURE__ */ new WeakMap(), lP = Object.keys(Js), EV = lP.length, C1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], OV = Wv.length;
class MV {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => _e.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Vd(n), this.isVariantNode = UC(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), jc(u) && u.add(d));
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
    this.current = t, w1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), sP.current || TV(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Jh.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    w1.delete(this.current), this.projection && this.projection.unmount(), Tr(this.notifyUpdate), Tr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Jo.has(t), o = n.on("change", (a) => {
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
    for (let l = 0; l < EV; l++) {
      const u = lP[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Js[u];
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
    for (let r = 0; r < C1.length; r++) {
      const o = C1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = _V(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < OV; r++) {
      const o = Wv[r], i = this.props[o];
      (Zs(i) || i === !1) && (n[o] = i);
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Qv(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Bt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new sg()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class uP extends MV {
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
    let a = KN(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      UN(this, r, a);
      const s = PV(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function IV(e) {
  return window.getComputedStyle(e);
}
class RV extends uP {
  readValueFromInstance(t, n) {
    if (Jo.has(n)) {
      const r = ng(n);
      return r && r.default || 0;
    } else {
      const r = IV(t), o = (qC(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return qk(t, n);
  }
  build(t, n, r, o) {
    Gv(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Xv(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    tk(t, n, r, o);
  }
}
class $V extends uP {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Jo.has(n)) {
      const r = ng(n);
      return r && r.default || 0;
    }
    return n = nk.has(n) ? n : Vv(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Xe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return ok(t, n);
  }
  build(t, n, r, o) {
    Yv(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    rk(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = qv(t.tagName), super.mount(t);
  }
}
const AV = (e, t) => Uv(e) ? new $V(t, { enableHardwareAcceleration: !1 }) : new RV(t, { enableHardwareAcceleration: !0 }), DV = {
  layout: {
    ProjectionNode: iP,
    MeasureLayout: Zk
  }
}, FV = {
  ...s3,
  ...Oj,
  ...pV,
  ...DV
}, or = /* @__PURE__ */ z4((e, t) => vj(e, t, FV, AV));
function cP() {
  const e = m.useRef(!1);
  return Nv(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function LV() {
  const e = cP(), [t, n] = m.useState(0), r = m.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [m.useCallback(() => _e.postRender(r), [r]), t];
}
class zV extends m.Component {
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
function jV({ children: e, isPresent: t }) {
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
  }, [t]), m.createElement(zV, { isPresent: t, childRef: r, sizeRef: o }, m.cloneElement(e, { ref: r }));
}
const gp = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = ik(NV), l = m.useId(), u = m.useMemo(
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
  }, [n]), a === "popLayout" && (e = m.createElement(jV, { isPresent: n }, e)), m.createElement(gl.Provider, { value: u }, e);
};
function NV() {
  return /* @__PURE__ */ new Map();
}
function VV(e) {
  return m.useEffect(() => () => e(), []);
}
const _o = (e) => e.key || "";
function BV(e, t) {
  e.forEach((n) => {
    const r = _o(n);
    t.set(r, n);
  });
}
function WV(e) {
  const t = [];
  return m.Children.forEach(e, (n) => {
    m.isValidElement(n) && t.push(n);
  }), t;
}
const ti = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = m.useContext(Hv).forceRender || LV()[0], l = cP(), u = WV(e);
  let c = u;
  const d = m.useRef(/* @__PURE__ */ new Map()).current, f = m.useRef(c), p = m.useRef(/* @__PURE__ */ new Map()).current, y = m.useRef(!0);
  if (Nv(() => {
    y.current = !1, BV(u, p), f.current = c;
  }), VV(() => {
    y.current = !0, p.clear(), d.clear();
  }), y.current)
    return m.createElement(m.Fragment, null, c.map((g) => m.createElement(gp, { key: _o(g), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, g)));
  c = [...c];
  const v = f.current.map(_o), S = u.map(_o), h = v.length;
  for (let g = 0; g < h; g++) {
    const b = v[g];
    S.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((g, b) => {
    if (S.indexOf(b) !== -1)
      return;
    const x = p.get(b);
    if (!x)
      return;
    const k = v.indexOf(b);
    let P = g;
    if (!P) {
      const T = () => {
        d.delete(b);
        const _ = Array.from(p.keys()).filter((M) => !S.includes(M));
        if (_.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const I = _o(M);
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
      P = m.createElement(gp, { key: _o(x), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: i, mode: a }, x), d.set(b, P);
    }
    c.splice(k, 0, P);
  }), c = c.map((g) => {
    const b = g.key;
    return d.has(b) ? g : m.createElement(gp, { key: _o(g), isPresent: !0, presenceAffectsLayout: i, mode: a }, g);
  }), m.createElement(m.Fragment, null, d.size ? c : c.map((g) => m.cloneElement(g)));
};
var HV = {
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
}, dP = m.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = HV,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = m.useState(s), p = O3();
  ca(() => {
    p || r == null || r();
  }, [p]), ca(() => {
    f(s);
  }, [s]);
  const y = () => f(null), v = () => f(s), S = () => {
    p && o();
  };
  m.useEffect(() => {
    p && i && o();
  }, [p, i, o]), E4(S, d);
  const h = m.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), g = m.useMemo(() => T4(a), [a]);
  return /* @__PURE__ */ w.jsx(
    or.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: v,
      custom: { position: a },
      style: g,
      children: /* @__PURE__ */ w.jsx(
        X.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: h,
          children: Xn(n, { id: t, onClose: S })
        }
      )
    }
  );
});
dP.displayName = "ToastComponent";
var k1 = {
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
  } = e, c = ae("chakra-icon", s), d = Zo("Icon", e), f = {
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
  }, y = r ?? k1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ w.jsx(X.svg, { as: n, ...p, ...u });
  const v = a ?? k1.path;
  return /* @__PURE__ */ w.jsx(X.svg, { verticalAlign: "middle", viewBox: y, ...p, ...u, children: v });
});
kn.displayName = "Icon";
function UV(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function GV(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function P1(e) {
  return /* @__PURE__ */ w.jsx(kn, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var KV = aC({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Ud = oe((e, t) => {
  const n = Zo("Spinner", e), {
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
    animation: `${KV} ${i} linear infinite`,
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
var [YV, lg] = Je({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [qV, ug] = Je({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), fP = {
  info: { icon: GV, colorScheme: "blue" },
  warning: { icon: P1, colorScheme: "orange" },
  success: { icon: UV, colorScheme: "green" },
  error: { icon: P1, colorScheme: "red" },
  loading: { icon: Ud, colorScheme: "blue" }
};
function XV(e) {
  return fP[e].colorScheme;
}
function QV(e) {
  return fP[e].icon;
}
var pP = oe(
  function(t, n) {
    const r = ug(), { status: o } = lg(), i = {
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
pP.displayName = "AlertDescription";
function hP(e) {
  const { status: t } = lg(), n = QV(t), r = ug(), o = t === "loading" ? r.spinner : r.icon;
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
hP.displayName = "AlertIcon";
var mP = oe(
  function(t, n) {
    const r = ug(), { status: o } = lg();
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
mP.displayName = "AlertTitle";
var vP = oe(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Cn(t), s = (r = t.colorScheme) != null ? r : XV(o), l = Ct("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ w.jsx(YV, { value: { status: o }, children: /* @__PURE__ */ w.jsx(qV, { value: l, children: /* @__PURE__ */ w.jsx(
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
vP.displayName = "Alert";
function ZV(e) {
  return /* @__PURE__ */ w.jsx(kn, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ w.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Gd = oe(
  function(t, n) {
    const r = Zo("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Cn(t), l = {
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
        children: o || /* @__PURE__ */ w.jsx(ZV, { width: "1em", height: "1em" })
      }
    );
  }
);
Gd.displayName = "CloseButton";
var JV = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Cs = eB(JV);
function eB(e) {
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
      const a = tB(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = bb(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: rB(i)
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
        const a = VC(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!bb(Cs.getState(), o).position
  };
}
var T1 = 0;
function tB(e, t = {}) {
  var n, r;
  T1 += 1;
  const o = (n = t.id) != null ? n : T1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Cs.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var nB = (e) => {
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
    vP,
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
        /* @__PURE__ */ w.jsx(hP, { children: u }),
        /* @__PURE__ */ w.jsxs(X.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ w.jsx(mP, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ w.jsx(pP, { id: c == null ? void 0 : c.description, display: "block", children: s })
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
function rB(e = {}) {
  const { render: t, toastComponent: n = nB } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ w.jsx(n, { ...o, ...e });
}
var [oB, pY] = Je({
  name: "ToastOptionsContext",
  strict: !1
}), iB = (e) => {
  const t = m.useSyncExternalStore(
    Cs.subscribe,
    Cs.getState,
    Cs.getState
  ), {
    motionVariants: n,
    component: r = dP,
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
        style: _4(s),
        children: /* @__PURE__ */ w.jsx(ti, { initial: !1, children: l.map((u) => /* @__PURE__ */ w.jsx(
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
}, aB = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ w.jsxs(k4, { theme: r, ...i, children: [
    /* @__PURE__ */ w.jsx(oB, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ w.jsx(iB, { ...o })
  ] });
}, sB = aB($C), lB = Object.defineProperty, uB = (e, t, n) => t in e ? lB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (uB(e, typeof t != "symbol" ? t + "" : t, n), n);
function _1(e) {
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
var cB = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function E1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function O1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var em = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Vc = (e) => e, dB = class {
  constructor() {
    Be(this, "descendants", /* @__PURE__ */ new Map()), Be(this, "register", (e) => {
      if (e != null)
        return cB(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Be(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = _1(Array.from(this.descendants.keys()));
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
      const n = E1(e, this.count(), t);
      return this.item(n);
    }), Be(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = E1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Be(this, "prev", (e, t = !0) => {
      const n = O1(e, this.count() - 1, t);
      return this.item(n);
    }), Be(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = O1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Be(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = _1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function fB(e, t) {
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
      fB(n, t);
    });
  };
}
function pB(...e) {
  return m.useMemo(() => at(...e), e);
}
function hB() {
  const e = m.useRef(new dB());
  return em(() => () => e.current.destroy()), e.current;
}
var [mB, gP] = Je({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function vB(e) {
  const t = gP(), [n, r] = m.useState(-1), o = m.useRef(null);
  em(() => () => {
    o.current && t.unregister(o.current);
  }, []), em(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = Vc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: at(i, o)
  };
}
function yP() {
  return [
    Vc(mB),
    () => Vc(gP()),
    () => hB(),
    (o) => vB(o)
  ];
}
var [gB, Kd] = Je({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [yB, cg] = Je({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  bB,
  hY,
  SB,
  xB
] = yP(), bP = oe(
  function(t, n) {
    const { getButtonProps: r } = cg(), o = r(t, n), a = {
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
        className: ae("chakra-accordion__button", t.className),
        __css: a
      }
    );
  }
);
bP.displayName = "AccordionButton";
function wB(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = to(r), a = to(o), [s, l] = m.useState(n), u = t !== void 0, c = u ? t : s, d = to(
    (f) => {
      const y = typeof f == "function" ? f(c) : f;
      a(c, y) && (u || l(y), i(y));
    },
    [u, i, c, a]
  );
  return [c, d];
}
function CB(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: i,
    ...a
  } = e;
  TB(e), _B(e);
  const s = SB(), [l, u] = m.useState(-1);
  m.useEffect(() => () => {
    u(-1);
  }, []);
  const [c, d] = wB({
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
            const h = S ? c.concat(p) : c.filter((g) => g !== p);
            d(h);
          } else
            S ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [kB, dg] = Je({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function PB(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = dg(), s = m.useRef(null), l = m.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  EB(e);
  const { register: f, index: p, descendants: y } = xB({
    disabled: t && !n
  }), { isOpen: v, onChange: S } = i(
    p === -1 ? null : p
  );
  OB({ isOpen: v, isDisabled: t });
  const h = () => {
    S == null || S(!0);
  }, g = () => {
    S == null || S(!1);
  }, b = m.useCallback(() => {
    S == null || S(!v), a(p);
  }, [p, a, v, S]), x = m.useCallback(
    (_) => {
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
      }[_.key];
      I && (_.preventDefault(), I(_));
    },
    [y, p]
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
        "aria-expanded": !!v,
        "aria-controls": d,
        onClick: Le(M.onClick, b),
        onFocus: Le(M.onFocus, k),
        onKeyDown: Le(M.onKeyDown, x)
      };
    },
    [
      c,
      t,
      v,
      b,
      k,
      x,
      d,
      f
    ]
  ), T = m.useCallback(
    function(M = {}, I = null) {
      return {
        ...M,
        ref: I,
        role: "region",
        id: d,
        "aria-labelledby": c,
        hidden: !v
      };
    },
    [c, v, d]
  );
  return {
    isOpen: v,
    isDisabled: t,
    isFocusable: n,
    onOpen: h,
    onClose: g,
    getButtonProps: P,
    getPanelProps: T,
    htmlProps: o
  };
}
function TB(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  ml({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function _B(e) {
  ml({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function EB(e) {
  ml({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function OB(e) {
  ml({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function SP(e) {
  const { isOpen: t, isDisabled: n } = cg(), { reduceMotion: r } = dg(), o = ae("chakra-accordion__icon", e.className), i = Kd(), a = {
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
SP.displayName = "AccordionIcon";
var xP = oe(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = PB(t), l = {
      ...Kd().container,
      overflowAnchor: "none"
    }, u = m.useMemo(() => a, [a]);
    return /* @__PURE__ */ w.jsx(yB, { value: u, children: /* @__PURE__ */ w.jsx(
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
xP.displayName = "AccordionItem";
var Do = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Wa = {
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
function tm(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Wa.slideRight;
    case "left":
      return Wa.slideLeft;
    case "bottom":
      return Wa.slideDown;
    case "top":
      return Wa.slideUp;
    default:
      return Wa.slideRight;
  }
}
var Vo = {
  enter: {
    duration: 0.2,
    ease: Do.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Do.easeIn
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
}, MB = (e) => e != null && parseInt(e.toString(), 10) > 0, M1 = {
  exit: {
    height: { duration: 0.2, ease: Do.ease },
    opacity: { duration: 0.3, ease: Do.ease }
  },
  enter: {
    height: { duration: 0.3, ease: Do.ease },
    opacity: { duration: 0.4, ease: Do.ease }
  }
}, IB = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: MB(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(M1.exit, o)
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
      transition: (i = n == null ? void 0 : n.enter) != null ? i : Dn.enter(M1.enter, o)
    };
  }
}, wP = m.forwardRef(
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
      const g = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(g);
    }, []), ml({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const y = parseFloat(i.toString()) > 0, v = {
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
    }, S = r ? n : !0, h = n || r ? "enter" : "exit";
    return /* @__PURE__ */ w.jsx(ti, { initial: !1, custom: v, children: S && /* @__PURE__ */ w.jsx(
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
        custom: v,
        variants: IB,
        initial: r ? "exit" : !1,
        animate: h,
        exit: "exit"
      }
    ) });
  }
);
wP.displayName = "Collapse";
var RB = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(Vo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Dn.exit(Vo.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, CP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: RB
}, $B = m.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ w.jsx(ti, { custom: f, children: d && /* @__PURE__ */ w.jsx(
    or.div,
    {
      ref: n,
      className: ae("chakra-fade", i),
      custom: f,
      ...CP,
      animate: c,
      ...u
    }
  ) });
});
$B.displayName = "Fade";
var AB = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(Vo.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : Dn.enter(Vo.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, kP = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: AB
}, DB = m.forwardRef(
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
    return /* @__PURE__ */ w.jsx(ti, { custom: y, children: f && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: n,
        className: ae("chakra-offset-slide", s),
        ...kP,
        animate: p,
        custom: y,
        ...d
      }
    ) });
  }
);
DB.displayName = "ScaleFade";
var FB = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : Dn.exit(Vo.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Dn.enter(Vo.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Dn.exit(Vo.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, rs = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: FB
}, LB = m.forwardRef(
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
    } = t, p = r ? o && r : !0, y = o || r ? "enter" : "exit", v = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ w.jsx(ti, { custom: v, children: p && /* @__PURE__ */ w.jsx(
      or.div,
      {
        ref: n,
        className: ae("chakra-offset-slide", a),
        custom: v,
        ...rs,
        animate: y,
        ...f
      }
    ) });
  }
);
LB.displayName = "SlideFade";
var I1 = {
  exit: {
    duration: 0.15,
    ease: Do.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, zB = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: i } = tm({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Dn.exit(I1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = tm({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Dn.enter(I1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, PP = m.forwardRef(function(t, n) {
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
  } = t, p = tm({ direction: r }), y = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), v = i ? a && i : !0, S = a || i ? "enter" : "exit", h = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ w.jsx(ti, { custom: h, children: v && /* @__PURE__ */ w.jsx(
    or.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: ae("chakra-slide", s),
      animate: S,
      exit: "exit",
      custom: h,
      variants: zB,
      style: y,
      ...d
    }
  ) });
});
PP.displayName = "Slide";
var TP = oe(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = dg(), { getPanelProps: s, isOpen: l } = cg(), u = s(i, n), c = ae("chakra-accordion__panel", r), d = Kd();
    a || delete u.hidden;
    const f = /* @__PURE__ */ w.jsx(X.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ w.jsx(wP, { in: l, ...o, children: f });
  }
);
TP.displayName = "AccordionPanel";
var _P = oe(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = Ct("Accordion", r), a = Cn(r), { htmlProps: s, descendants: l, ...u } = CB(a), c = m.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ w.jsx(bB, { value: l, children: /* @__PURE__ */ w.jsx(kB, { value: c, children: /* @__PURE__ */ w.jsx(gB, { value: i, children: /* @__PURE__ */ w.jsx(
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
_P.displayName = "Accordion";
function jB(e) {
  return m.Children.toArray(e).filter(
    (t) => m.isValidElement(t)
  );
}
var [mY, NB] = Je({
  strict: !1,
  name: "ButtonGroupContext"
});
function VB(e) {
  const [t, n] = m.useState(!e);
  return { ref: m.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function nm(e) {
  const { children: t, className: n, ...r } = e, o = m.isValidElement(t) ? m.cloneElement(t, {
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
nm.displayName = "ButtonIcon";
function rm(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ w.jsx(Ud, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ae("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = m.useMemo(
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
rm.displayName = "ButtonSpinner";
var Fn = oe((e, t) => {
  const n = NB(), r = Zo("Button", { ...n, ...e }), {
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
    className: v,
    as: S,
    ...h
  } = Cn(e), g = m.useMemo(() => {
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
  }, [r, n]), { ref: b, type: x } = VB(S), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ w.jsxs(
    X.button,
    {
      ref: pB(t, b),
      as: S,
      type: f ?? x,
      "data-active": dn(a),
      "data-loading": dn(i),
      __css: g,
      className: ae("chakra-button", v),
      ...h,
      disabled: o || i,
      children: [
        i && y === "start" && /* @__PURE__ */ w.jsx(
          rm,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ w.jsx(X.span, { opacity: 0, children: /* @__PURE__ */ w.jsx(R1, { ...k }) }) : /* @__PURE__ */ w.jsx(R1, { ...k }),
        i && y === "end" && /* @__PURE__ */ w.jsx(
          rm,
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
function R1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    t && /* @__PURE__ */ w.jsx(nm, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ w.jsx(nm, { marginStart: o, children: n })
  ] });
}
var tl = oe(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = m.isValidElement(s) ? m.cloneElement(s, {
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
tl.displayName = "IconButton";
var [BB, WB] = Je({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [HB, EP] = Je({
  strict: !1,
  name: "FormControlContext"
});
function UB(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = m.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = m.useState(!1), [y, v] = m.useState(!1), [S, h] = m.useState(!1), g = m.useCallback(
    (T = {}, _ = null) => ({
      id: d,
      ...T,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: at(_, (M) => {
        M && v(!0);
      })
    }),
    [d]
  ), b = m.useCallback(
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
  ), x = m.useCallback(
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
  ), k = m.useCallback(
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
  ), P = m.useCallback(
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
    onFocus: () => h(!0),
    onBlur: () => h(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: y,
    setHasHelpText: v,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: g,
    getErrorMessageProps: x,
    getRootProps: k,
    getLabelProps: b,
    getRequiredIndicatorProps: P
  };
}
var GB = oe(
  function(t, n) {
    const r = Ct("Form", t), o = Cn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = UB(o), l = ae("chakra-form-control", t.className);
    return /* @__PURE__ */ w.jsx(HB, { value: s, children: /* @__PURE__ */ w.jsx(BB, { value: r, children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
GB.displayName = "FormControl";
var KB = oe(
  function(t, n) {
    const r = EP(), o = WB(), i = ae("chakra-form__helper-text", t.className);
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
KB.displayName = "FormHelperText";
function OP(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = YB(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Nf(n),
    "aria-required": Nf(o),
    "aria-readonly": Nf(r)
  };
}
function YB(e) {
  var t, n, r;
  const o = EP(), {
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
    ...v
  } = e, S = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && S.push(o.feedbackId), o != null && o.hasHelpText && S.push(o.helpTextId), {
    ...v,
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
function fg(e, t, n, r) {
  const o = to(n);
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
function qB(e) {
  return "current" in e;
}
var MP = () => typeof window < "u";
function XB() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var QB = (e) => MP() && e.test(navigator.vendor), ZB = (e) => MP() && e.test(XB()), JB = () => ZB(/mac|iphone|ipad|ipod/i), e6 = () => JB() && QB(/apple/i);
function t6(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  fg(o, "pointerdown", (i) => {
    if (!e6() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = qB(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function IP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var RP = { exports: {} }, n6 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", r6 = n6, o6 = r6;
function $P() {
}
function AP() {
}
AP.resetWarningCache = $P;
var i6 = function() {
  function e(r, o, i, a, s, l) {
    if (l !== o6) {
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
    checkPropTypes: AP,
    resetWarningCache: $P
  };
  return n.PropTypes = n, n;
};
RP.exports = i6();
var a6 = RP.exports;
const wo = /* @__PURE__ */ sl(a6);
var om = "data-focus-lock", DP = "data-focus-lock-disabled", s6 = "data-no-focus-lock", l6 = "data-autofocus-inside", u6 = "data-no-autofocus";
function c6(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function d6(e, t) {
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
function FP(e, t) {
  return d6(t || null, function(n) {
    return e.forEach(function(r) {
      return c6(r, n);
    });
  });
}
var yp = {
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
function LP(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function f6(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function zP(e) {
  return e;
}
function jP(e, t) {
  t === void 0 && (t = zP);
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
function pg(e, t) {
  return t === void 0 && (t = zP), jP(e, t);
}
function NP(e) {
  e === void 0 && (e = {});
  var t = jP(null);
  return t.options = qn({ async: !0, ssr: !1 }, e), t;
}
var VP = function(e) {
  var t = e.sideCar, n = LP(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, qn({}, n));
};
VP.isSideCarExport = !0;
function p6(e, t) {
  return e.useMedium(t), VP;
}
var BP = pg({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), WP = pg(), h6 = pg(), m6 = NP({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), v6 = [], hg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var r, o = m.useState(), i = o[0], a = o[1], s = m.useRef(), l = m.useRef(!1), u = m.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, v = t.autoFocus;
  t.allowTextSelection;
  var S = t.group, h = t.className, g = t.whiteList, b = t.hasPositiveIndices, x = t.shards, k = x === void 0 ? v6 : x, P = t.as, T = P === void 0 ? "div" : P, _ = t.lockProps, M = _ === void 0 ? {} : _, I = t.sideCar, D = t.returnFocus, G = t.focusOptions, H = t.onActivation, L = t.onDeactivation, W = m.useState({}), K = W[0], $ = m.useCallback(function() {
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
      var Ce = typeof D == "function" ? D(me) : D;
      if (Ce) {
        var et = typeof Ce == "object" ? Ce : void 0;
        u.current = null, se ? Promise.resolve().then(function() {
          return me.focus(et);
        }) : me.focus(et);
      }
    }
  }, [D]), U = m.useCallback(function(se) {
    l.current && BP.useMedium(se);
  }, []), V = WP.useMedium, Y = m.useCallback(function(se) {
    s.current !== se && (s.current = se, a(se));
  }, []), j = q((r = {}, r[DP] = d && "disabled", r[om] = S, r), M), te = f !== !0, le = te && f !== "tail", ie = FP([n, Y]);
  return /* @__PURE__ */ m.createElement(m.Fragment, null, te && [
    // nearest focus guard
    /* @__PURE__ */ m.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: yp
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ m.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: yp
    }) : null
  ], !d && /* @__PURE__ */ m.createElement(I, {
    id: K,
    sideCar: m6,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: v,
    whiteList: g,
    shards: k,
    onActivation: $,
    onDeactivation: A,
    returnFocus: z,
    focusOptions: G
  }), /* @__PURE__ */ m.createElement(T, q({
    ref: ie
  }, j, {
    className: h,
    onBlur: V,
    onFocus: U
  }), c), le && /* @__PURE__ */ m.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: yp
  }));
});
hg.propTypes = {};
hg.defaultProps = {
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
const HP = hg;
function Bc(e, t) {
  return Bc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Bc(e, t);
}
function g6(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Bc(e, t);
}
function Yo(e) {
  "@babel/helpers - typeof";
  return Yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yo(e);
}
function y6(e, t) {
  if (Yo(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Yo(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UP(e) {
  var t = y6(e, "string");
  return Yo(t) === "symbol" ? t : String(t);
}
function Fi(e, t, n) {
  return t = UP(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function b6(e, t) {
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
      g6(c, u);
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
    return Fi(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var ir = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, Wc = function(e) {
  return Array.isArray(e) ? e : [e];
}, GP = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, S6 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, KP = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, YP = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, x6 = function(e, t) {
  return !e || YP(e) || !S6(e) && t(KP(e));
}, qP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = x6(t, qP.bind(void 0, e));
  return e.set(t, r), r;
}, w6 = function(e, t) {
  return e && !YP(e) ? P6(e) ? t(KP(e)) : !1 : !0;
}, XP = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = w6(t, XP.bind(void 0, e));
  return e.set(t, r), r;
}, QP = function(e) {
  return e.dataset;
}, C6 = function(e) {
  return e.tagName === "BUTTON";
}, ZP = function(e) {
  return e.tagName === "INPUT";
}, JP = function(e) {
  return ZP(e) && e.type === "radio";
}, k6 = function(e) {
  return !((ZP(e) || C6(e)) && (e.type === "hidden" || e.disabled));
}, P6 = function(e) {
  var t = e.getAttribute(u6);
  return ![!0, "true", ""].includes(t);
}, mg = function(e) {
  var t;
  return !!(e && (!((t = QP(e)) === null || t === void 0) && t.focusGuard));
}, Hc = function(e) {
  return !mg(e);
}, T6 = function(e) {
  return !!e;
}, _6 = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, e2 = function(e, t, n) {
  return ir(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(_6);
}, E6 = [
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
], vg = E6.join(","), O6 = "".concat(vg, ", [data-focus-guard]"), t2 = function(e, t) {
  return ir((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? O6 : vg) ? [r] : [], t2(r));
  }, []);
}, M6 = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? Yd([e.contentDocument.body], t) : [e];
}, Yd = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = t2(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return M6(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? ir(r.parentNode.querySelectorAll(vg)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, I6 = function(e) {
  var t = e.querySelectorAll("[".concat(l6, "]"));
  return ir(t).map(function(n) {
    return Yd([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, gg = function(e, t) {
  return ir(e).filter(function(n) {
    return qP(t, n);
  }).filter(function(n) {
    return k6(n);
  });
}, $1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), ir(e).filter(function(n) {
    return XP(t, n);
  });
}, im = function(e, t, n) {
  return e2(gg(Yd(e, n), t), !0, n);
}, A1 = function(e, t) {
  return e2(gg(Yd(e), t), !1);
}, R6 = function(e, t) {
  return gg(I6(e), t);
}, qi = function(e, t) {
  return e.shadowRoot ? qi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : ir(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? qi(o, t) : !1;
    }
    return qi(n, t);
  });
}, $6 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, n2 = function(e) {
  return e.parentNode ? n2(e.parentNode) : e;
}, yg = function(e) {
  var t = Wc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(om);
    return n.push.apply(n, o ? $6(ir(n2(r).querySelectorAll("[".concat(om, '="').concat(o, '"]:not([').concat(DP, '="disabled"])')))) : [r]), n;
  }, []);
}, A6 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, nl = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? nl(t.shadowRoot) : t instanceof HTMLIFrameElement && A6(function() {
      return t.contentWindow.document;
    }) ? nl(t.contentWindow.document) : t;
  }
}, D6 = function(e, t) {
  return e === t;
}, F6 = function(e, t) {
  return !!ir(e.querySelectorAll("iframe")).some(function(n) {
    return D6(n, t);
  });
}, r2 = function(e, t) {
  return t === void 0 && (t = nl(GP(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : yg(e).some(function(n) {
    return qi(n, t) || F6(n, t);
  });
}, L6 = function(e) {
  e === void 0 && (e = document);
  var t = nl(e);
  return t ? ir(e.querySelectorAll("[".concat(s6, "]"))).some(function(n) {
    return qi(n, t);
  }) : !1;
}, z6 = function(e, t) {
  return t.filter(JP).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, bg = function(e, t) {
  return JP(e) && e.name ? z6(e, t) : e;
}, j6 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(bg(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, D1 = function(e) {
  return e[0] && e.length > 1 ? bg(e[0], e) : e[0];
}, F1 = function(e, t) {
  return e.length > 1 ? e.indexOf(bg(e[t], e)) : t;
}, o2 = "NEW_FOCUS", N6 = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = mg(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), y = j6(t), v = n !== void 0 ? y.indexOf(n) : -1, S = v - (r ? y.indexOf(r) : l), h = F1(e, 0), g = F1(e, o - 1);
    if (l === -1 || c === -1)
      return o2;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return g;
    if (l >= p && s && Math.abs(d) > 1)
      return h;
    if (d && Math.abs(S) > 1)
      return c;
    if (l <= f)
      return g;
    if (l > p)
      return h;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, V6 = function(e) {
  return function(t) {
    var n, r = (n = QP(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, B6 = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = $1(r.filter(V6(n)));
  return o && o.length ? D1(o) : D1($1(t));
}, am = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && am(e.parentNode.host || e.parentNode, t), t;
}, bp = function(e, t) {
  for (var n = am(e), r = am(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, i2 = function(e, t, n) {
  var r = Wc(e), o = Wc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = bp(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = bp(i, l);
      u && (!a || qi(u, a) ? a = u : a = bp(u, a));
    });
  }), a;
}, W6 = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(R6(r, t));
  }, []);
}, H6 = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(T6);
}, U6 = function(e, t) {
  var n = nl(Wc(e).length > 0 ? document : GP(e).ownerDocument), r = yg(e).filter(Hc), o = i2(n || e, e, r), i = /* @__PURE__ */ new Map(), a = A1(r, i), s = im(r, i).filter(function(p) {
    var y = p.node;
    return Hc(y);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = A1([o], i).map(function(p) {
      var y = p.node;
      return y;
    }), u = H6(l, s), c = u.map(function(p) {
      var y = p.node;
      return y;
    }), d = N6(c, l, n, t);
    if (d === o2) {
      var f = B6(a, c, W6(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, G6 = function(e) {
  var t = yg(e).filter(Hc), n = i2(e, e, t), r = /* @__PURE__ */ new Map(), o = im([n], r, !0), i = im(t, r).filter(function(a) {
    var s = a.node;
    return Hc(s);
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
      guard: mg(s)
    };
  });
}, K6 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Sp = 0, xp = !1, a2 = function(e, t, n) {
  n === void 0 && (n = {});
  var r = U6(e, t);
  if (!xp && r) {
    if (Sp > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), xp = !0, setTimeout(function() {
        xp = !1;
      }, 1);
      return;
    }
    Sp++, K6(r.node, n.focusOptions), Sp--;
  }
};
function Sg(e) {
  setTimeout(e, 1);
}
var Y6 = function() {
  return document && document.activeElement === document.body;
}, q6 = function() {
  return Y6() || L6();
}, Xi = null, Li = null, Qi = null, rl = !1, X6 = function() {
  return !0;
}, Q6 = function(t) {
  return (Xi.whiteList || X6)(t);
}, Z6 = function(t, n) {
  Qi = {
    observerNode: t,
    portaledElement: n
  };
}, J6 = function(t) {
  return Qi && Qi.portaledElement === t;
};
function L1(e, t, n, r) {
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
var e9 = function(t) {
  return t && "current" in t ? t.current : t;
}, t9 = function(t) {
  return t ? !!rl : rl === "meanwhile";
}, n9 = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, r9 = function(t, n) {
  return n.some(function(r) {
    return n9(t, r, r);
  });
}, Uc = function() {
  var t = !1;
  if (Xi) {
    var n = Xi, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Qi && Qi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(e9).filter(Boolean));
      if ((!c || Q6(c)) && (o || t9(s) || !q6() || !Li && i) && (u && !// active element is "inside" working area
      (r2(d) || // check for shadow-dom contained elements
      c && r9(c, d) || J6(c)) && (document && !Li && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = a2(d, Li, {
        focusOptions: l
      }), Qi = {})), rl = !1, Li = document && document.activeElement), document) {
        var f = document && document.activeElement, p = G6(d), y = p.map(function(v) {
          var S = v.node;
          return S;
        }).indexOf(f);
        y > -1 && (p.filter(function(v) {
          var S = v.guard, h = v.node;
          return S && h.dataset.focusAutoGuard;
        }).forEach(function(v) {
          var S = v.node;
          return S.removeAttribute("tabIndex");
        }), L1(y, p.length, 1, p), L1(y, -1, -1, p));
      }
    }
  }
  return t;
}, s2 = function(t) {
  Uc() && t && (t.stopPropagation(), t.preventDefault());
}, xg = function() {
  return Sg(Uc);
}, o9 = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || Z6(r, n);
}, i9 = function() {
  return null;
}, l2 = function() {
  rl = "just", Sg(function() {
    rl = "meanwhile";
  });
}, a9 = function() {
  document.addEventListener("focusin", s2), document.addEventListener("focusout", xg), window.addEventListener("blur", l2);
}, s9 = function() {
  document.removeEventListener("focusin", s2), document.removeEventListener("focusout", xg), window.removeEventListener("blur", l2);
};
function l9(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function u9(e) {
  var t = e.slice(-1)[0];
  t && !Xi && a9();
  var n = Xi, r = n && t && t.id === n.id;
  Xi = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (Li = null, (!r || n.observed !== t.observed) && t.onActivation(), Uc(), Sg(Uc)) : (s9(), Li = null);
}
BP.assignSyncMedium(o9);
WP.assignMedium(xg);
h6.assignMedium(function(e) {
  return e({
    moveFocusInside: a2,
    focusInside: r2
  });
});
const c9 = b6(l9, u9)(i9);
var u2 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  return /* @__PURE__ */ m.createElement(HP, q({
    sideCar: c9,
    ref: n
  }, t));
}), c2 = HP.propTypes || {};
c2.sideCar;
IP(c2, ["sideCar"]);
u2.propTypes = {};
const z1 = u2;
function d2(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function f2(e) {
  var t;
  if (!d2(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function d9(e) {
  var t, n;
  return (n = (t = p2(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function p2(e) {
  return d2(e) ? e.ownerDocument : document;
}
function f9(e) {
  return p2(e).activeElement;
}
var h2 = (e) => e.hasAttribute("tabindex"), p9 = (e) => h2(e) && e.tabIndex === -1;
function h9(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function m2(e) {
  return e.parentElement && m2(e.parentElement) ? !0 : e.hidden;
}
function m9(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function v2(e) {
  if (!f2(e) || m2(e) || h9(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : m9(e) ? !0 : h2(e);
}
function v9(e) {
  return e ? f2(e) && v2(e) && !p9(e) : !1;
}
var g9 = [
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
], y9 = g9.join(), b9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function g2(e) {
  const t = Array.from(
    e.querySelectorAll(y9)
  );
  return t.unshift(e), t.filter((n) => v2(n) && b9(n));
}
var j1, S9 = (j1 = z1.default) != null ? j1 : z1, y2 = (e) => {
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
    t != null && t.current ? t.current.focus() : r != null && r.current && g2(r.current).length === 0 && requestAnimationFrame(() => {
      var y;
      (y = r.current) == null || y.focus();
    });
  }, [t, r]), d = m.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ w.jsx(
    S9,
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
y2.displayName = "FocusLock";
var x9 = Gz ? m.useLayoutEffect : m.useEffect;
function N1(e, t = []) {
  const n = m.useRef(e);
  return x9(() => {
    n.current = e;
  }), m.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function w9(e, t) {
  const n = m.useId();
  return m.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function C9(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function k9(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = N1(n), a = N1(t), [s, l] = m.useState(e.defaultIsOpen || !1), [u, c] = C9(r, s), d = w9(o, "disclosure"), f = m.useCallback(() => {
    u || l(!1), a == null || a();
  }, [u, a]), p = m.useCallback(() => {
    u || l(!0), i == null || i();
  }, [u, i]), y = m.useCallback(() => {
    (c ? f : p)();
  }, [c, p, f]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: f,
    onToggle: y,
    isControlled: u,
    getButtonProps: (v = {}) => ({
      ...v,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: Qz(v.onClick, y)
    }),
    getDisclosureProps: (v = {}) => ({
      ...v,
      hidden: !c,
      id: d
    })
  };
}
var qd = oe(function(t, n) {
  const { htmlSize: r, ...o } = t, i = Ct("Input", o), a = Cn(o), s = OP(a), l = ae("chakra-input", t.className);
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
var b2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function P9(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : zt(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function T9(e, t = b2) {
  const n = {};
  return e.forEach((r, o) => {
    const i = t[o];
    r != null && (n[i] = r);
  }), n;
}
var oo = oe(function(t, n) {
  const r = Zo("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Cn(t), u = l4({
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
oo.displayName = "Text";
var S2 = (e) => /* @__PURE__ */ w.jsx(
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
S2.displayName = "StackItem";
function _9(e) {
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
    "&": P9(
      n,
      (o) => r[o]
    )
  };
}
var x2 = oe((e, t) => {
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
  } = e, p = n ? "row" : r ?? "column", y = m.useMemo(
    () => _9({ spacing: a, direction: p }),
    [a, p]
  ), v = !!u, S = !d && !v, h = m.useMemo(() => {
    const b = jB(l);
    return S ? b : b.map((x, k) => {
      const P = typeof x.key < "u" ? x.key : k, T = k + 1 === b.length, M = d ? /* @__PURE__ */ w.jsx(S2, { children: x }, P) : x;
      if (!v)
        return M;
      const I = m.cloneElement(
        u,
        {
          __css: y
        }
      ), D = T ? null : I;
      return /* @__PURE__ */ w.jsxs(m.Fragment, { children: [
        M,
        D
      ] }, P);
    });
  }, [
    u,
    y,
    v,
    S,
    d,
    l
  ]), g = ae("chakra-stack", c);
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: v ? void 0 : a,
      className: g,
      ...f,
      children: h
    }
  );
});
x2.displayName = "Stack";
var $t = oe((e, t) => /* @__PURE__ */ w.jsx(x2, { align: "center", ...e, direction: "row", ref: t }));
$t.displayName = "HStack";
var Fe = X("div");
Fe.displayName = "Box";
var w2 = oe(function(t, n) {
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
w2.displayName = "Square";
var E9 = oe(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ w.jsx(w2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
E9.displayName = "Circle";
var C2 = oe(function(t, n) {
  const {
    borderLeftWidth: r,
    borderBottomWidth: o,
    borderTopWidth: i,
    borderRightWidth: a,
    borderWidth: s,
    borderStyle: l,
    borderColor: u,
    ...c
  } = Zo("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...y
  } = Cn(t), v = {
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
      ...y,
      __css: {
        ...c,
        border: "0",
        borderColor: u,
        borderStyle: l,
        ...v[f],
        ...p
      },
      className: ae("chakra-divider", d)
    }
  );
});
C2.displayName = "Divider";
function O9(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = C4(), i = Array.isArray(e) ? e : [e];
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
function M9(e, t, n = b2) {
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
function I9(e) {
  var t, n;
  const r = zt(e) ? e : { fallback: e ?? "base" }, i = ho().__breakpoints.details.map(
    ({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", "")
    })
  ), a = i.map((u) => u.breakpoint === r.fallback), l = O9(
    i.map((u) => u.query),
    { fallback: a, ssr: r.ssr }
  ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function R9(e, t) {
  var n;
  const r = zt(t) ? t : { fallback: t ?? "base" }, o = I9(r), i = ho();
  if (!o)
    return;
  const a = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(T9(e, a)).map(
      ([l, u]) => [l, u]
    )
  ) : e;
  return M9(s, o, a);
}
function $9(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function A9(e = {}) {
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
      if ($9(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function D9(e, t, n, r) {
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
function F9() {
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
function wp(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function L9(e = {}) {
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
  } = e, [v, S] = m.useState(!0), [h, g] = m.useState(!1), b = F9(), x = ($) => {
    $ && $.tagName !== "BUTTON" && S(!1);
  }, k = v ? d : d || 0, P = n && !r, T = m.useCallback(
    ($) => {
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      $.currentTarget.focus(), l == null || l($);
    },
    [n, l]
  ), _ = m.useCallback(
    ($) => {
      h && wp($) && ($.preventDefault(), $.stopPropagation(), g(!1), b.remove(document, "keyup", _, !1));
    },
    [h, b]
  ), M = m.useCallback(
    ($) => {
      if (u == null || u($), n || $.defaultPrevented || $.metaKey || !wp($.nativeEvent) || v)
        return;
      const A = o && $.key === "Enter";
      i && $.key === " " && ($.preventDefault(), g(!0)), A && ($.preventDefault(), $.currentTarget.click()), b.add(document, "keyup", _, !1);
    },
    [
      n,
      v,
      u,
      o,
      i,
      b,
      _
    ]
  ), I = m.useCallback(
    ($) => {
      if (c == null || c($), n || $.defaultPrevented || $.metaKey || !wp($.nativeEvent) || v)
        return;
      i && $.key === " " && ($.preventDefault(), g(!1), $.currentTarget.click());
    },
    [i, v, n, c]
  ), D = m.useCallback(
    ($) => {
      $.button === 0 && (g(!1), b.remove(document, "mouseup", D, !1));
    },
    [b]
  ), G = m.useCallback(
    ($) => {
      if ($.button !== 0)
        return;
      if (n) {
        $.stopPropagation(), $.preventDefault();
        return;
      }
      v || g(!0), $.currentTarget.focus({ preventScroll: !0 }), b.add(document, "mouseup", D, !1), a == null || a($);
    },
    [n, v, a, b, D]
  ), H = m.useCallback(
    ($) => {
      $.button === 0 && (v || g(!1), s == null || s($));
    },
    [s, v]
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
      h && ($.preventDefault(), g(!1)), p == null || p($);
    },
    [h, p]
  ), K = at(t, x);
  return v ? {
    ...y,
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
    ...y,
    ref: K,
    role: "button",
    "data-active": dn(h),
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
function z9(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = f9(t);
  return !n || t.contains(n) ? !1 : !!v9(n);
}
function k2(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  ca(() => {
    if (!i || z9(e))
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
var j9 = {
  preventScroll: !0,
  shouldFocus: !1
};
function N9(e, t = j9) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = V9(e) ? e.current : e, s = o && i, l = m.useRef(s), u = m.useRef(i);
  sa(() => {
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
        const d = g2(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  ca(() => {
    c();
  }, [c]), fg(a, "transitionend", c);
}
function V9(e) {
  return "current" in e;
}
var li = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), xt = {
  arrowShadowColor: li("--popper-arrow-shadow-color"),
  arrowSize: li("--popper-arrow-size", "8px"),
  arrowSizeHalf: li("--popper-arrow-size-half"),
  arrowBg: li("--popper-arrow-bg"),
  transformOrigin: li("--popper-transform-origin"),
  arrowOffset: li("--popper-arrow-offset")
};
function B9(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var W9 = {
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
}, H9 = (e) => W9[e], V1 = {
  scroll: !0,
  resize: !0
};
function U9(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...V1, ...e }
  } : t = {
    enabled: e,
    options: V1
  }, t;
}
var G9 = {
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
}, K9 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    B1(e);
  },
  effect: ({ state: e }) => () => {
    B1(e);
  }
}, B1 = (e) => {
  e.elements.popper.style.setProperty(
    xt.transformOrigin.var,
    H9(e.placement)
  );
}, Y9 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    q9(e);
  }
}, q9 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = X9(e.placement);
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
}, X9 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: xt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: xt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: xt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: xt.arrowOffset.varRef };
}, Q9 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    W1(e);
  },
  effect: ({ state: e }) => () => {
    W1(e);
  }
}, W1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = B9(e.placement);
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
}, Z9 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, J9 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function e8(e, t = "ltr") {
  var n, r;
  const o = ((n = Z9[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = J9[e]) != null ? r : o;
}
var jt = "top", Sn = "bottom", xn = "right", Nt = "left", wg = "auto", wl = [jt, Sn, xn, Nt], pa = "start", ol = "end", t8 = "clippingParents", P2 = "viewport", Ha = "popper", n8 = "reference", H1 = /* @__PURE__ */ wl.reduce(function(e, t) {
  return e.concat([t + "-" + pa, t + "-" + ol]);
}, []), T2 = /* @__PURE__ */ [].concat(wl, [wg]).reduce(function(e, t) {
  return e.concat([t, t + "-" + pa, t + "-" + ol]);
}, []), r8 = "beforeRead", o8 = "read", i8 = "afterRead", a8 = "beforeMain", s8 = "main", l8 = "afterMain", u8 = "beforeWrite", c8 = "write", d8 = "afterWrite", f8 = [r8, o8, i8, a8, s8, l8, u8, c8, d8];
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
function qo(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function gn(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Cg(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function p8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !gn(i) || !rr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function h8(e) {
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
const m8 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: p8,
  effect: h8,
  requires: ["computeStyles"]
};
function nr(e) {
  return e.split("-")[0];
}
var Bo = Math.max, Gc = Math.min, ha = Math.round;
function sm() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _2() {
  return !/^((?!chrome|android).)*safari/i.test(sm());
}
function ma(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && gn(e) && (o = e.offsetWidth > 0 && ha(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ha(r.height) / e.offsetHeight || 1);
  var a = qo(e) ? en(e) : window, s = a.visualViewport, l = !_2() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
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
function kg(e) {
  var t = ma(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function E2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Cg(n)) {
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
  return en(e).getComputedStyle(e);
}
function v8(e) {
  return ["table", "td", "th"].indexOf(rr(e)) >= 0;
}
function vo(e) {
  return ((qo(e) ? e.ownerDocument : (
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
    (Cg(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    vo(e)
  );
}
function U1(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  _r(e).position === "fixed" ? null : e.offsetParent;
}
function g8(e) {
  var t = /firefox/i.test(sm()), n = /Trident/i.test(sm());
  if (n && gn(e)) {
    var r = _r(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Xd(e);
  for (Cg(o) && (o = o.host); gn(o) && ["html", "body"].indexOf(rr(o)) < 0; ) {
    var i = _r(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Cl(e) {
  for (var t = en(e), n = U1(e); n && v8(n) && _r(n).position === "static"; )
    n = U1(n);
  return n && (rr(n) === "html" || rr(n) === "body" && _r(n).position === "static") ? t : n || g8(e) || t;
}
function Pg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ks(e, t, n) {
  return Bo(e, Gc(t, n));
}
function y8(e, t, n) {
  var r = ks(e, t, n);
  return r > n ? n : r;
}
function O2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function M2(e) {
  return Object.assign({}, O2(), e);
}
function I2(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var b8 = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, M2(typeof t != "number" ? t : I2(t, wl));
};
function S8(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = nr(n.placement), l = Pg(s), u = [Nt, xn].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = b8(o.padding, n), f = kg(i), p = l === "y" ? jt : Nt, y = l === "y" ? Sn : xn, v = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], S = a[l] - n.rects.reference[l], h = Cl(i), g = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, b = v / 2 - S / 2, x = d[p], k = g - f[c] - d[y], P = g / 2 - f[c] / 2 + b, T = ks(x, P, k), _ = l;
    n.modifiersData[r] = (t = {}, t[_] = T, t.centerOffset = T - P, t);
  }
}
function x8(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || E2(t.elements.popper, o) && (t.elements.arrow = o));
}
const w8 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: S8,
  effect: x8,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function va(e) {
  return e.split("-")[1];
}
var C8 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function k8(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ha(n * o) / o || 0,
    y: ha(r * o) / o || 0
  };
}
function G1(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, y = a.y, v = y === void 0 ? 0 : y, S = typeof c == "function" ? c({
    x: p,
    y: v
  }) : {
    x: p,
    y: v
  };
  p = S.x, v = S.y;
  var h = a.hasOwnProperty("x"), g = a.hasOwnProperty("y"), b = Nt, x = jt, k = window;
  if (u) {
    var P = Cl(n), T = "clientHeight", _ = "clientWidth";
    if (P === en(n) && (P = vo(n), _r(P).position !== "static" && s === "absolute" && (T = "scrollHeight", _ = "scrollWidth")), P = P, o === jt || (o === Nt || o === xn) && i === ol) {
      x = Sn;
      var M = d && P === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[T]
      );
      v -= M - r.height, v *= l ? 1 : -1;
    }
    if (o === Nt || (o === jt || o === Sn) && i === ol) {
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
  }, u && C8), G = c === !0 ? k8({
    x: p,
    y: v
  }, en(n)) : {
    x: p,
    y: v
  };
  if (p = G.x, v = G.y, l) {
    var H;
    return Object.assign({}, D, (H = {}, H[x] = g ? "0" : "", H[b] = h ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", H));
  }
  return Object.assign({}, D, (t = {}, t[x] = g ? v + "px" : "", t[b] = h ? p + "px" : "", t.transform = "", t));
}
function P8(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: nr(t.placement),
    variation: va(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, G1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, G1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const T8 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: P8,
  data: {}
};
var hu = {
  passive: !0
};
function _8(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = en(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, hu);
  }), s && l.addEventListener("resize", n.update, hu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, hu);
    }), s && l.removeEventListener("resize", n.update, hu);
  };
}
const E8 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: _8,
  data: {}
};
var O8 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return O8[t];
  });
}
var M8 = {
  start: "end",
  end: "start"
};
function K1(e) {
  return e.replace(/start|end/g, function(t) {
    return M8[t];
  });
}
function Tg(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function _g(e) {
  return ma(vo(e)).left + Tg(e).scrollLeft;
}
function I8(e, t) {
  var n = en(e), r = vo(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = _2();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + _g(e),
    y: l
  };
}
function R8(e) {
  var t, n = vo(e), r = Tg(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Bo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Bo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + _g(e), l = -r.scrollTop;
  return _r(o || n).direction === "rtl" && (s += Bo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Eg(e) {
  var t = _r(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function R2(e) {
  return ["html", "body", "#document"].indexOf(rr(e)) >= 0 ? e.ownerDocument.body : gn(e) && Eg(e) ? e : R2(Xd(e));
}
function Ps(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = R2(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = en(r), a = o ? [i].concat(i.visualViewport || [], Eg(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ps(Xd(a)))
  );
}
function lm(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function $8(e, t) {
  var n = ma(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Y1(e, t, n) {
  return t === P2 ? lm(I8(e, n)) : qo(t) ? $8(t, n) : lm(R8(vo(e)));
}
function A8(e) {
  var t = Ps(Xd(e)), n = ["absolute", "fixed"].indexOf(_r(e).position) >= 0, r = n && gn(e) ? Cl(e) : e;
  return qo(r) ? t.filter(function(o) {
    return qo(o) && E2(o, r) && rr(o) !== "body";
  }) : [];
}
function D8(e, t, n, r) {
  var o = t === "clippingParents" ? A8(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = Y1(e, u, r);
    return l.top = Bo(c.top, l.top), l.right = Gc(c.right, l.right), l.bottom = Gc(c.bottom, l.bottom), l.left = Bo(c.left, l.left), l;
  }, Y1(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function $2(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? nr(r) : null, i = r ? va(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case jt:
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
  var u = o ? Pg(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case pa:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ol:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function il(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? t8 : s, u = n.rootBoundary, c = u === void 0 ? P2 : u, d = n.elementContext, f = d === void 0 ? Ha : d, p = n.altBoundary, y = p === void 0 ? !1 : p, v = n.padding, S = v === void 0 ? 0 : v, h = M2(typeof S != "number" ? S : I2(S, wl)), g = f === Ha ? n8 : Ha, b = e.rects.popper, x = e.elements[y ? g : f], k = D8(qo(x) ? x : x.contextElement || vo(e.elements.popper), l, c, a), P = ma(e.elements.reference), T = $2({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), _ = lm(Object.assign({}, b, T)), M = f === Ha ? _ : P, I = {
    top: k.top - M.top + h.top,
    bottom: M.bottom - k.bottom + h.bottom,
    left: k.left - M.left + h.left,
    right: M.right - k.right + h.right
  }, D = e.modifiersData.offset;
  if (f === Ha && D) {
    var G = D[o];
    Object.keys(I).forEach(function(H) {
      var L = [xn, Sn].indexOf(H) >= 0 ? 1 : -1, W = [jt, Sn].indexOf(H) >= 0 ? "y" : "x";
      I[H] += G[W] * L;
    });
  }
  return I;
}
function F8(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? T2 : l, c = va(r), d = c ? s ? H1 : H1.filter(function(y) {
    return va(y) === c;
  }) : wl, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(y, v) {
    return y[v] = il(e, {
      placement: v,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[nr(v)], y;
  }, {});
  return Object.keys(p).sort(function(y, v) {
    return p[y] - p[v];
  });
}
function L8(e) {
  if (nr(e) === wg)
    return [];
  var t = Qu(e);
  return [K1(e), t, K1(t)];
}
function z8(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? !0 : p, v = n.allowedAutoPlacements, S = t.options.placement, h = nr(S), g = h === S, b = l || (g || !y ? [Qu(S)] : L8(S)), x = [S].concat(b).reduce(function(te, le) {
      return te.concat(nr(le) === wg ? F8(t, {
        placement: le,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: v
      }) : le);
    }, []), k = t.rects.reference, P = t.rects.popper, T = /* @__PURE__ */ new Map(), _ = !0, M = x[0], I = 0; I < x.length; I++) {
      var D = x[I], G = nr(D), H = va(D) === pa, L = [jt, Sn].indexOf(G) >= 0, W = L ? "width" : "height", K = il(t, {
        placement: D,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), $ = L ? H ? xn : Nt : H ? Sn : jt;
      k[W] > P[W] && ($ = Qu($));
      var A = Qu($), z = [];
      if (i && z.push(K[G] <= 0), s && z.push(K[$] <= 0, K[A] <= 0), z.every(function(te) {
        return te;
      })) {
        M = D, _ = !1;
        break;
      }
      T.set(D, z);
    }
    if (_)
      for (var U = y ? 3 : 1, V = function(le) {
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
        var j = V(Y);
        if (j === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const j8 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: z8,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function q1(e, t, n) {
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
function X1(e) {
  return [jt, xn, Sn, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function N8(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = il(t, {
    elementContext: "reference"
  }), s = il(t, {
    altBoundary: !0
  }), l = q1(a, r), u = q1(s, o, i), c = X1(l), d = X1(u);
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
const V8 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: N8
};
function B8(e, t, n) {
  var r = nr(e), o = [Nt, jt].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
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
function W8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = T2.reduce(function(c, d) {
    return c[d] = B8(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const H8 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: W8
};
function U8(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const G8 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: U8,
  data: {}
};
function K8(e) {
  return e === "x" ? "y" : "x";
}
function Y8(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, y = n.tetherOffset, v = y === void 0 ? 0 : y, S = il(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), h = nr(t.placement), g = va(t.placement), b = !g, x = Pg(h), k = K8(x), P = t.modifiersData.popperOffsets, T = t.rects.reference, _ = t.rects.popper, M = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, I = typeof M == "number" ? {
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
      var H, L = x === "y" ? jt : Nt, W = x === "y" ? Sn : xn, K = x === "y" ? "height" : "width", $ = P[x], A = $ + S[L], z = $ - S[W], U = p ? -_[K] / 2 : 0, V = g === pa ? T[K] : _[K], Y = g === pa ? -_[K] : -T[K], j = t.elements.arrow, te = p && j ? kg(j) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : O2(), ie = le[L], se = le[W], me = ks(0, T[K], te[K]), Ce = b ? T[K] / 2 - U - me - ie - I.mainAxis : V - me - ie - I.mainAxis, et = b ? -T[K] / 2 + U + me + se + I.mainAxis : Y + me + se + I.mainAxis, qe = t.elements.arrow && Cl(t.elements.arrow), on = qe ? x === "y" ? qe.clientTop || 0 : qe.clientLeft || 0 : 0, Pn = (H = D == null ? void 0 : D[x]) != null ? H : 0, Mr = $ + Ce - Pn - on, fe = $ + et - Pn, mt = ks(p ? Gc(A, Mr) : A, $, p ? Bo(z, fe) : z);
      P[x] = mt, G[x] = mt - $;
    }
    if (s) {
      var Ge, Ut = x === "x" ? jt : Nt, Ir = x === "x" ? Sn : xn, vt = P[k], Nn = k === "y" ? "height" : "width", Rr = vt + S[Ut], an = vt - S[Ir], ri = [jt, Nt].indexOf(h) !== -1, ka = (Ge = D == null ? void 0 : D[k]) != null ? Ge : 0, Il = ri ? Rr : vt - T[Nn] - _[Nn] - ka + I.altAxis, Rl = ri ? vt + T[Nn] + _[Nn] - ka - I.altAxis : an, go = p && ri ? y8(Il, vt, Rl) : ks(p ? Il : Rr, vt, p ? Rl : an);
      P[k] = go, G[k] = go - vt;
    }
    t.modifiersData[r] = G;
  }
}
const q8 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Y8,
  requiresIfExists: ["offset"]
};
function X8(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Q8(e) {
  return e === en(e) || !gn(e) ? Tg(e) : X8(e);
}
function Z8(e) {
  var t = e.getBoundingClientRect(), n = ha(t.width) / e.offsetWidth || 1, r = ha(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function J8(e, t, n) {
  n === void 0 && (n = !1);
  var r = gn(t), o = gn(t) && Z8(t), i = vo(t), a = ma(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((rr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Eg(i)) && (s = Q8(t)), gn(t) ? (l = ma(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = _g(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function e7(e) {
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
function t7(e) {
  var t = e7(e);
  return f8.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function n7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function r7(e) {
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
var Q1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Z1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function o7(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Q1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Q1, i),
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
        v(), c.options = Object.assign({}, i, c.options, g), c.scrollParents = {
          reference: qo(s) ? Ps(s) : s.contextElement ? Ps(s.contextElement) : [],
          popper: Ps(l)
        };
        var b = t7(r7([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(x) {
          return x.enabled;
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
          if (Z1(g, b)) {
            c.rects = {
              reference: J8(g, Cl(b), c.options.strategy === "fixed"),
              popper: kg(b)
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
      update: n7(function() {
        return new Promise(function(S) {
          p.forceUpdate(), S(c);
        });
      }),
      destroy: function() {
        v(), f = !0;
      }
    };
    if (!Z1(s, l))
      return p;
    p.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function y() {
      c.orderedModifiers.forEach(function(S) {
        var h = S.name, g = S.options, b = g === void 0 ? {} : g, x = S.effect;
        if (typeof x == "function") {
          var k = x({
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
    function v() {
      d.forEach(function(S) {
        return S();
      }), d = [];
    }
    return p;
  };
}
var i7 = [E8, G8, T8, m8, H8, j8, q8, w8, V8], a7 = /* @__PURE__ */ o7({
  defaultModifiers: i7
});
function A2(e = {}) {
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
  } = e, y = m.useRef(null), v = m.useRef(null), S = m.useRef(null), h = e8(r, p), g = m.useRef(() => {
  }), b = m.useCallback(() => {
    var I;
    !t || !y.current || !v.current || ((I = g.current) == null || I.call(g), S.current = a7(y.current, v.current, {
      placement: h,
      modifiers: [
        Q9,
        Y9,
        K9,
        {
          ...G9,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...U9(a)
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
    }), S.current.forceUpdate(), g.current = S.current.destroy);
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
    !y.current && !v.current && ((I = S.current) == null || I.destroy(), S.current = null);
  }, []);
  const x = m.useCallback(
    (I) => {
      y.current = I, b();
    },
    [b]
  ), k = m.useCallback(
    (I = {}, D = null) => ({
      ...I,
      ref: at(x, D)
    }),
    [x]
  ), P = m.useCallback(
    (I) => {
      v.current = I, b();
    },
    [b]
  ), T = m.useCallback(
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
  ), _ = m.useCallback((I = {}, D = null) => {
    const { size: G, shadowColor: H, bg: L, style: W, ...K } = I;
    return {
      ...K,
      ref: D,
      "data-popper-arrow": "",
      style: s7(I)
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
function s7(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function D2(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = to(n), a = to(t), [s, l] = m.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = m.useId(), f = o ?? `disclosure-${d}`, p = m.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), y = m.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), v = m.useCallback(() => {
    u ? p() : y();
  }, [u, y, p]);
  function S(g = {}) {
    return {
      ...g,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var x;
        (x = g.onClick) == null || x.call(g, b), v();
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
    onToggle: v,
    isControlled: c,
    getButtonProps: S,
    getDisclosureProps: h
  };
}
function l7(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = to(n), a = m.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  m.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      Cp(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && Cp(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && Cp(d, t) && (a.isPointerDown = !1, o(d));
    }, c = F2(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function Cp(e, t) {
  var n;
  const r = e.target;
  return r && !F2(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function F2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function L2(e) {
  const { isOpen: t, ref: n } = e, [r, o] = m.useState(t), [i, a] = m.useState(!1);
  return m.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), fg(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = d9(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function z2(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  u7,
  c7,
  d7,
  f7
] = yP(), [p7, kl] = Je({
  strict: !1,
  name: "MenuContext"
});
function h7(e, ...t) {
  const n = m.useId(), r = e || n;
  return m.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function j2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function J1(e) {
  return j2(e).activeElement === e;
}
function m7(e = {}) {
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
    ...v
  } = e, S = m.useRef(null), h = m.useRef(null), g = d7(), b = m.useCallback(() => {
    requestAnimationFrame(() => {
      var j;
      (j = S.current) == null || j.focus({ preventScroll: !1 });
    });
  }, []), x = m.useCallback(() => {
    const j = setTimeout(() => {
      var te;
      if (o)
        (te = o.current) == null || te.focus();
      else {
        const le = g.firstEnabled();
        le && H(le.index);
      }
    });
    A.current.add(j);
  }, [g, o]), k = m.useCallback(() => {
    const j = setTimeout(() => {
      const te = g.lastEnabled();
      te && H(te.index);
    });
    A.current.add(j);
  }, [g]), P = m.useCallback(() => {
    c == null || c(), i ? x() : b();
  }, [i, x, b, c]), { isOpen: T, onOpen: _, onClose: M, onToggle: I } = D2({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  l7({
    enabled: T && r,
    ref: S,
    handler: (j) => {
      var te;
      (te = h.current) != null && te.contains(j.target) || M();
    }
  });
  const D = A2({
    ...v,
    enabled: T || y,
    placement: d,
    direction: p
  }), [G, H] = m.useState(-1);
  ca(() => {
    T || H(-1);
  }, [T]), k2(S, {
    focusRef: h,
    visible: T,
    shouldFocus: !0
  });
  const L = L2({ isOpen: T, ref: S }), [W, K] = h7(t, "menu-button", "menu-list"), $ = m.useCallback(() => {
    _(), b();
  }, [_, b]), A = m.useRef(/* @__PURE__ */ new Set([]));
  m.useEffect(() => {
    const j = A.current;
    return () => {
      j.forEach((te) => clearTimeout(te)), j.clear();
    };
  }, []);
  const z = m.useCallback(() => {
    _(), x();
  }, [x, _]), U = m.useCallback(() => {
    _(), k();
  }, [_, k]), V = m.useCallback(() => {
    var j, te;
    const le = j2(S.current), ie = (j = S.current) == null ? void 0 : j.contains(le.activeElement);
    if (!(T && !ie))
      return;
    const me = (te = g.item(G)) == null ? void 0 : te.node;
    me == null || me.focus({ preventScroll: !0 });
  }, [T, G, g]), Y = m.useRef(null);
  return {
    openAndFocusMenu: $,
    openAndFocusFirstItem: z,
    openAndFocusLastItem: U,
    onTransitionEnd: V,
    unstable__animationState: L,
    descendants: g,
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
function v7(e = {}, t = null) {
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
    "data-active": dn(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Le(e.onClick, r),
    onKeyDown: Le(e.onKeyDown, s)
  };
}
function um(e) {
  var t;
  return S7(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function g7(e = {}, t = null) {
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
  } = n, f = c7(), p = A9({
    preventDefault: (h) => h.key !== " " && um(h.target)
  }), y = m.useCallback(
    (h) => {
      if (!h.currentTarget.contains(h.target))
        return;
      const g = h.key, x = {
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
      if (x) {
        h.preventDefault(), x(h);
        return;
      }
      const k = p((P) => {
        const T = D9(
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
      um(h.target) && k(h);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), v = m.useRef(!1);
  a && (v.current = !0);
  const S = z2({
    wasSelected: v.current,
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
function y7(e = {}) {
  const { popper: t, isOpen: n } = kl();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function b7(e = {}, t = null) {
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
    focusedIndex: y,
    closeOnSelect: v,
    onClose: S,
    menuRef: h,
    isOpen: g,
    menuId: b,
    rafId: x
  } = f, k = m.useRef(null), P = `${b}-menuitem-${m.useId()}`, { index: T, register: _ } = f7({
    disabled: s && !l
  }), M = m.useCallback(
    ($) => {
      n == null || n($), !s && p(T);
    },
    [p, T, s, n]
  ), I = m.useCallback(
    ($) => {
      r == null || r($), k.current && !J1(k.current) && M($);
    },
    [M, r]
  ), D = m.useCallback(
    ($) => {
      o == null || o($), !s && p(-1);
    },
    [p, s, o]
  ), G = m.useCallback(
    ($) => {
      i == null || i($), um($.currentTarget) && (u ?? v) && S();
    },
    [S, i, v, u]
  ), H = m.useCallback(
    ($) => {
      a == null || a($), p(T);
    },
    [p, a, T]
  ), L = T === y, W = s && !l;
  ca(() => {
    if (g)
      return L && !W && k.current ? (x.current && cancelAnimationFrame(x.current), x.current = requestAnimationFrame(() => {
        var $;
        ($ = k.current) == null || $.focus({ preventScroll: !0 }), x.current = null;
      })) : h.current && !J1(h.current) && h.current.focus({ preventScroll: !0 }), () => {
        x.current && cancelAnimationFrame(x.current);
      };
  }, [L, W, h, g]);
  const K = L9({
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
function S7(e) {
  var t;
  if (!x7(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function x7(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [w7, Pl] = Je({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), Og = (e) => {
  const { children: t } = e, n = Ct("Menu", e), r = Cn(e), { direction: o } = ho(), { descendants: i, ...a } = m7({ ...r, direction: o }), s = m.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ w.jsx(u7, { value: i, children: /* @__PURE__ */ w.jsx(p7, { value: s, children: /* @__PURE__ */ w.jsx(w7, { value: n, children: Xn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
Og.displayName = "Menu";
var N2 = oe(
  (e, t) => {
    const n = Pl();
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
N2.displayName = "MenuCommand";
var C7 = oe(
  (e, t) => {
    const { type: n, ...r } = e, o = Pl(), i = r.as || n ? n ?? void 0 : "button", a = m.useMemo(
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
), Mg = (e) => {
  const { className: t, children: n, ...r } = e, o = Pl(), i = m.Children.only(n), a = m.isValidElement(i) ? m.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: ae("chakra-menu__icon", i.props.className)
  }) : null, s = ae("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ w.jsx(X.span, { className: s, ...r, __css: o.icon, children: a });
};
Mg.displayName = "MenuIcon";
var cm = oe((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = b7(s, t), c = n || o ? /* @__PURE__ */ w.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ w.jsxs(
    C7,
    {
      ...l,
      className: ae("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ w.jsx(Mg, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ w.jsx(N2, { marginStart: i, children: o })
      ]
    }
  );
});
cm.displayName = "MenuItem";
var k7 = {
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
}, P7 = X(or.div), V2 = oe(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = kl(), d = g7(s, n), f = y7(i), p = Pl();
  return /* @__PURE__ */ w.jsx(
    X.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ w.jsx(
        P7,
        {
          variants: k7,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: ae("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: fC(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
V2.displayName = "MenuList";
var T7 = oe((e, t) => {
  const n = Pl();
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
}), B2 = oe(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = v7(o, t), a = r || T7;
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
B2.displayName = "MenuButton";
var _7 = {
  slideInBottom: {
    ...rs,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...rs,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...rs,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...rs,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...kP,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, E7 = X(or.section), O7 = (e) => _7[e || "none"], W2 = m.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = O7(n), ...o } = e;
    return /* @__PURE__ */ w.jsx(E7, { ref: t, ...r, ...o });
  }
);
W2.displayName = "ModalTransition";
var M7 = Object.defineProperty, I7 = (e, t, n) => t in e ? M7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, R7 = (e, t, n) => (I7(e, typeof t != "symbol" ? t + "" : t, n), n), $7 = class {
  constructor() {
    R7(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, dm = new $7();
function H2(e, t) {
  const [n, r] = m.useState(0);
  return m.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = dm.add(o);
        r(i);
      }
      return () => {
        dm.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var A7 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ui = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap(), vu = {}, kp = 0, U2 = function(e) {
  return e && (e.host || U2(e.parentNode));
}, D7 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = U2(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, F7 = function(e, t, n, r) {
  var o = D7(t, Array.isArray(e) ? e : [e]);
  vu[n] || (vu[n] = /* @__PURE__ */ new WeakMap());
  var i = vu[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), y = p !== null && p !== "false", v = (ui.get(f) || 0) + 1, S = (i.get(f) || 0) + 1;
        ui.set(f, v), i.set(f, S), a.push(f), v === 1 && y && mu.set(f, !0), S === 1 && f.setAttribute(n, "true"), y || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), kp++, function() {
    a.forEach(function(d) {
      var f = ui.get(d) - 1, p = i.get(d) - 1;
      ui.set(d, f), i.set(d, p), f || (mu.has(d) || d.removeAttribute(r), mu.delete(d)), p || d.removeAttribute(n);
    }), kp--, kp || (ui = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap(), vu = {});
  };
}, L7 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || A7(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), F7(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function z7(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = m.useRef(null), c = m.useRef(null), [d, f, p] = N7(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  j7(u, t && a);
  const y = H2(u, t), v = m.useRef(null), S = m.useCallback((M) => {
    v.current = M.target;
  }, []), h = m.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [g, b] = m.useState(!1), [x, k] = m.useState(!1), P = m.useCallback(
    (M = {}, I = null) => ({
      role: "dialog",
      ...M,
      ref: at(I, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": g ? f : void 0,
      "aria-describedby": x ? p : void 0,
      onClick: Le(
        M.onClick,
        (D) => D.stopPropagation()
      )
    }),
    [p, x, d, f, g]
  ), T = m.useCallback(
    (M) => {
      M.stopPropagation(), v.current === M.target && dm.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), _ = m.useCallback(
    (M = {}, I = null) => ({
      ...M,
      ref: at(I, c),
      onClick: Le(M.onClick, T),
      onKeyDown: Le(M.onKeyDown, h),
      onMouseDown: Le(M.onMouseDown, S)
    }),
    [h, S, T]
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
    index: y
  };
}
function j7(e, t) {
  const n = e.current;
  m.useEffect(() => {
    if (!(!e.current || !t))
      return L7(e.current);
  }, [t, e, n]);
}
function N7(e, ...t) {
  const n = m.useId(), r = e || n;
  return m.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [V7, Ca] = Je({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [B7, uo] = Je({
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
    onCloseComplete: y
  } = t, v = Ct("Modal", t), h = {
    ...z7(t),
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
  return /* @__PURE__ */ w.jsx(B7, { value: h, children: /* @__PURE__ */ w.jsx(V7, { value: v, children: /* @__PURE__ */ w.jsx(ti, { onExitComplete: y, children: h.isOpen && /* @__PURE__ */ w.jsx(hl, { ...n, children: r }) }) }) });
};
Tl.displayName = "Modal";
var Zu = "right-scroll-bar-position", Ju = "width-before-scroll-bar", W7 = "with-scroll-bars-hidden", H7 = "--removed-body-scroll-bar-size", G2 = NP(), Pp = function() {
}, Qd = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Pp,
    onWheelCapture: Pp,
    onTouchMoveCapture: Pp
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, y = e.inert, v = e.allowPinchZoom, S = e.as, h = S === void 0 ? "div" : S, g = e.gapMode, b = LP(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = f, k = FP([n, t]), P = qn(qn({}, b), o);
  return m.createElement(
    m.Fragment,
    null,
    c && m.createElement(x, { sideCar: G2, removeScrollBar: u, shards: d, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: g }),
    a ? m.cloneElement(m.Children.only(s), qn(qn({}, P), { ref: k })) : m.createElement(h, qn({}, P, { className: l, ref: k }), s)
  );
});
Qd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Qd.classNames = {
  fullWidth: Ju,
  zeroRight: Zu
};
var eS, U7 = function() {
  if (eS)
    return eS;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function G7() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = U7();
  return t && e.setAttribute("nonce", t), e;
}
function K7(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Y7(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var q7 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = G7()) && (K7(t, n), Y7(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, X7 = function() {
  var e = q7();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, K2 = function() {
  var e = X7(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Q7 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tp = function(e) {
  return parseInt(e || "", 10) || 0;
}, Z7 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tp(n), Tp(r), Tp(o)];
}, J7 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Q7;
  var t = Z7(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, eW = K2(), tW = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(W7, ` {
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
  
  .`).concat(Zu, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ju, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Zu, " .").concat(Zu, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ju, " .").concat(Ju, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(H7, ": ").concat(s, `px;
  }
`);
}, nW = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = m.useMemo(function() {
    return J7(o);
  }, [o]);
  return m.createElement(eW, { styles: tW(i, !t, o, n ? "" : "!important") });
}, fm = !1;
if (typeof window < "u")
  try {
    var gu = Object.defineProperty({}, "passive", {
      get: function() {
        return fm = !0, !0;
      }
    });
    window.addEventListener("test", gu, gu), window.removeEventListener("test", gu, gu);
  } catch {
    fm = !1;
  }
var ci = fm ? { passive: !1 } : !1, rW = function(e) {
  return e.tagName === "TEXTAREA";
}, Y2 = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !rW(e) && n[t] === "visible")
  );
}, oW = function(e) {
  return Y2(e, "overflowY");
}, iW = function(e) {
  return Y2(e, "overflowX");
}, tS = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = q2(e, r);
    if (o) {
      var i = X2(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, aW = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, sW = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, q2 = function(e, t) {
  return e === "v" ? oW(t) : iW(t);
}, X2 = function(e, t) {
  return e === "v" ? aW(t) : sW(t);
}, lW = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, uW = function(e, t, n, r, o) {
  var i = lW(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = X2(e, s), y = p[0], v = p[1], S = p[2], h = v - S - i * y;
    (y || h) && q2(e, s) && (d += h, f += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, yu = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, nS = function(e) {
  return [e.deltaX, e.deltaY];
}, rS = function(e) {
  return e && "current" in e ? e.current : e;
}, cW = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dW = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fW = 0, di = [];
function pW(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(fW++)[0], i = m.useState(K2)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = f6([e.lockRef.current], (e.shards || []).map(rS), !0).filter(Boolean);
      return v.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = m.useCallback(function(v, S) {
    if ("touches" in v && v.touches.length === 2)
      return !a.current.allowPinchZoom;
    var h = yu(v), g = n.current, b = "deltaX" in v ? v.deltaX : g[0] - h[0], x = "deltaY" in v ? v.deltaY : g[1] - h[1], k, P = v.target, T = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in v && T === "h" && P.type === "range")
      return !1;
    var _ = tS(T, P);
    if (!_)
      return !0;
    if (_ ? k = T : (k = T === "v" ? "h" : "v", _ = tS(T, P)), !_)
      return !1;
    if (!r.current && "changedTouches" in v && (b || x) && (r.current = k), !k)
      return !0;
    var M = r.current || k;
    return uW(M, S, v, M === "h" ? b : x, !0);
  }, []), l = m.useCallback(function(v) {
    var S = v;
    if (!(!di.length || di[di.length - 1] !== i)) {
      var h = "deltaY" in S ? nS(S) : yu(S), g = t.current.filter(function(k) {
        return k.name === S.type && (k.target === S.target || S.target === k.shadowParent) && cW(k.delta, h);
      })[0];
      if (g && g.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!g) {
        var b = (a.current.shards || []).map(rS).filter(Boolean).filter(function(k) {
          return k.contains(S.target);
        }), x = b.length > 0 ? s(S, b[0]) : !a.current.noIsolation;
        x && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = m.useCallback(function(v, S, h, g) {
    var b = { name: v, delta: S, target: h, should: g, shadowParent: hW(h) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), c = m.useCallback(function(v) {
    n.current = yu(v), r.current = void 0;
  }, []), d = m.useCallback(function(v) {
    u(v.type, nS(v), v.target, s(v, e.lockRef.current));
  }, []), f = m.useCallback(function(v) {
    u(v.type, yu(v), v.target, s(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return di.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, ci), document.addEventListener("touchmove", l, ci), document.addEventListener("touchstart", c, ci), function() {
      di = di.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", l, ci), document.removeEventListener("touchmove", l, ci), document.removeEventListener("touchstart", c, ci);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    y ? m.createElement(i, { styles: dW(o) }) : null,
    p ? m.createElement(nW, { gapMode: e.gapMode }) : null
  );
}
function hW(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const mW = p6(G2, pW);
var Q2 = m.forwardRef(function(e, t) {
  return m.createElement(Qd, qn({}, e, { ref: t, sideCar: mW }));
});
Q2.classNames = Qd.classNames;
const vW = Q2;
function Z2(e) {
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
  } = uo(), [f, p] = Qk();
  m.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const y = H2(r, d);
  return /* @__PURE__ */ w.jsx(
    y2,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ w.jsx(
        vW,
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
var Zd = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = uo(), u = s(a, t), c = l(o), d = ae("chakra-modal__content", n), f = Ca(), p = {
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
    }, { motionPreset: v } = uo();
    return /* @__PURE__ */ w.jsx(Z2, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: y,
        children: /* @__PURE__ */ w.jsx(
          W2,
          {
            preset: v,
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
Zd.displayName = "ModalContent";
var [gW, yW] = Je(), bW = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function SW(e, t) {
  var n, r;
  if (e)
    return (r = (n = bW[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function xW(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = ho(), l = (t = s.components) == null ? void 0 : t.Drawer, u = SW(o, s.direction);
  return /* @__PURE__ */ w.jsx(gW, { value: { placement: u }, children: /* @__PURE__ */ w.jsx(
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
var wW = X(PP), J2 = oe(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = uo(), c = s(a, t), d = l(i), f = ae("chakra-modal__content", n), p = Ca(), y = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, v = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: S } = yW();
    return /* @__PURE__ */ w.jsx(Z2, { children: /* @__PURE__ */ w.jsx(
      X.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: v,
        children: /* @__PURE__ */ w.jsx(
          wW,
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
J2.displayName = "DrawerContent";
var _l = oe(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = uo();
    m.useEffect(() => (i(!0), () => i(!1)), [i]);
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
_l.displayName = "ModalHeader";
var CW = X(or.div), El = oe(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = ae("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Ca().overlay
    }, { motionPreset: u } = uo(), d = o || (u === "none" ? {} : CP);
    return /* @__PURE__ */ w.jsx(
      CW,
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
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = uo();
  m.useEffect(() => (i(!0), () => i(!1)), [i]);
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
Ol.displayName = "ModalBody";
var Jd = oe(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = uo(), a = ae("chakra-modal__close-btn", r), s = Ca();
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
Jd.displayName = "ModalCloseButton";
var [kW, ni] = Je({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [PW, Ml] = Je({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), eT = oe(
  function(t, n) {
    const { getHeaderProps: r } = ni(), o = Ml();
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
eT.displayName = "PopoverHeader";
function Ig(e) {
  const t = m.Children.only(e.children), { getTriggerProps: n } = ni();
  return m.cloneElement(t, n(t.props, t.ref));
}
Ig.displayName = "PopoverTrigger";
var fi = {
  click: "click",
  hover: "hover"
};
function TW(e = {}) {
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
    computePositionOnMount: y,
    ...v
  } = e, { isOpen: S, onClose: h, onOpen: g, onToggle: b } = D2(e), x = m.useRef(null), k = m.useRef(null), P = m.useRef(null), T = m.useRef(!1), _ = m.useRef(!1);
  S && (_.current = !0);
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
  } = A2({
    ...v,
    enabled: S || !!y
  }), te = L2({ isOpen: S, ref: P });
  t6({
    enabled: S,
    ref: k
  }), k2(P, {
    focusRef: k,
    visible: S,
    shouldFocus: i && u === fi.click
  }), N9(P, {
    focusRef: r,
    visible: S,
    shouldFocus: a && u === fi.click
  });
  const le = z2({
    wasSelected: _.current,
    enabled: f,
    mode: p,
    isSelected: te.present
  }), ie = m.useCallback(
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
          n && Ut.key === "Escape" && h();
        }),
        onBlur: Le(fe.onBlur, (Ut) => {
          const Ir = oS(Ut), vt = _p(P.current, Ir), Nn = _p(k.current, Ir);
          S && t && (!vt && !Nn) && h();
        }),
        "aria-labelledby": M ? $ : void 0,
        "aria-describedby": D ? A : void 0
      };
      return u === fi.hover && (Ge.role = "tooltip", Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        T.current = !0;
      }), Ge.onMouseLeave = Le(
        fe.onMouseLeave,
        (Ut) => {
          Ut.nativeEvent.relatedTarget !== null && (T.current = !1, setTimeout(() => h(), d));
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
      S,
      t,
      d,
      l,
      s
    ]
  ), se = m.useCallback(
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
  ), me = m.useCallback(
    (fe, mt = null) => ({
      ...fe,
      // If anchor is rendered, it is used as reference.
      ref: at(mt, x, z)
    }),
    [x, z]
  ), Ce = m.useRef(), et = m.useRef(), qe = m.useCallback(
    (fe) => {
      x.current == null && z(fe);
    },
    [z]
  ), on = m.useCallback(
    (fe = {}, mt = null) => {
      const Ge = {
        ...fe,
        ref: at(k, mt, qe),
        id: W,
        "aria-haspopup": "dialog",
        "aria-expanded": S,
        "aria-controls": K
      };
      return u === fi.click && (Ge.onClick = Le(fe.onClick, b)), u === fi.hover && (Ge.onFocus = Le(fe.onFocus, () => {
        Ce.current === void 0 && g();
      }), Ge.onBlur = Le(fe.onBlur, (Ut) => {
        const Ir = oS(Ut), vt = !_p(P.current, Ir);
        S && t && vt && h();
      }), Ge.onKeyDown = Le(fe.onKeyDown, (Ut) => {
        Ut.key === "Escape" && h();
      }), Ge.onMouseEnter = Le(fe.onMouseEnter, () => {
        T.current = !0, Ce.current = window.setTimeout(() => g(), c);
      }), Ge.onMouseLeave = Le(fe.onMouseLeave, () => {
        T.current = !1, Ce.current && (clearTimeout(Ce.current), Ce.current = void 0), et.current = window.setTimeout(() => {
          T.current === !1 && h();
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
      g,
      t,
      h,
      c,
      d
    ]
  );
  m.useEffect(() => () => {
    Ce.current && clearTimeout(Ce.current), et.current && clearTimeout(et.current);
  }, []);
  const Pn = m.useCallback(
    (fe = {}, mt = null) => ({
      ...fe,
      id: $,
      ref: at(mt, (Ge) => {
        I(!!Ge);
      })
    }),
    [$]
  ), Mr = m.useCallback(
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
    forceUpdate: j,
    isOpen: S,
    onAnimationComplete: te.onComplete,
    onClose: h,
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
function _p(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function oS(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Rg(e) {
  const t = Ct("Popover", e), { children: n, ...r } = Cn(e), o = ho(), i = TW({ ...r, direction: o.direction });
  return /* @__PURE__ */ w.jsx(kW, { value: i, children: /* @__PURE__ */ w.jsx(PW, { value: t, children: Xn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Rg.displayName = "Popover";
var Ep = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function $g(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = ni(), c = Ml(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
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
            "--popper-arrow-shadow-color": Ep("colors", s),
            "--popper-arrow-bg": Ep("colors", d),
            "--popper-arrow-shadow": Ep("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
$g.displayName = "PopoverArrow";
var Ag = oe(
  function(t, n) {
    const { getBodyProps: r } = ni(), o = Ml();
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
Ag.displayName = "PopoverBody";
var Dg = oe(
  function(t, n) {
    const { onClose: r } = ni(), o = Ml();
    return /* @__PURE__ */ w.jsx(
      Gd,
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
Dg.displayName = "PopoverCloseButton";
function _W(e) {
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
var EW = {
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
}, OW = X(or.section), tT = oe(function(t, n) {
  const { variants: r = EW, ...o } = t, { isOpen: i } = ni();
  return /* @__PURE__ */ w.jsx(
    OW,
    {
      ref: n,
      variants: _W(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
tT.displayName = "PopoverTransition";
var Fg = oe(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = ni(), u = Ml(), c = {
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
          tT,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: fC(
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
Fg.displayName = "PopoverContent";
var [MW, nT] = Je({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), rT = oe((e, t) => {
  const n = Ct("Tag", e), r = Cn(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ w.jsx(MW, { value: n, children: /* @__PURE__ */ w.jsx(X.span, { ref: t, ...r, __css: o }) });
});
rT.displayName = "Tag";
var IW = oe((e, t) => {
  const n = nT();
  return /* @__PURE__ */ w.jsx(X.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
IW.displayName = "TagLabel";
var RW = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
RW.displayName = "TagLeftIcon";
var $W = oe((e, t) => /* @__PURE__ */ w.jsx(kn, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
$W.displayName = "TagRightIcon";
var oT = (e) => /* @__PURE__ */ w.jsx(kn, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ w.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
oT.displayName = "TagCloseIcon";
var AW = oe(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, a = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...nT().closeButton
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
        children: r || /* @__PURE__ */ w.jsx(oT, {})
      }
    );
  }
);
AW.displayName = "TagCloseButton";
var DW = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, FW = Object.defineProperty, LW = Object.defineProperties, zW = Object.getOwnPropertyDescriptors, Kc = Object.getOwnPropertySymbols, iT = Object.prototype.hasOwnProperty, aT = Object.prototype.propertyIsEnumerable, iS = (e, t, n) => t in e ? FW(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, aS = (e, t) => {
  for (var n in t || (t = {}))
    iT.call(t, n) && iS(e, n, t[n]);
  if (Kc)
    for (var n of Kc(t))
      aT.call(t, n) && iS(e, n, t[n]);
  return e;
}, jW = (e, t) => LW(e, zW(t)), NW = (e, t) => {
  var n = {};
  for (var r in e)
    iT.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Kc)
    for (var r of Kc(e))
      t.indexOf(r) < 0 && aT.call(e, r) && (n[r] = e[r]);
  return n;
}, Ht = (e, t, n) => {
  const r = m.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = NW(a, ["color", "size", "stroke", "children"]);
      return m.createElement(
        "svg",
        aS(jW(aS({
          ref: i
        }, DW), {
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
    color: wo.string,
    size: wo.oneOfType([wo.string, wo.number]),
    stroke: wo.oneOfType([wo.string, wo.number])
  }, r.displayName = `${t}`, r;
}, VW = Ht("chevron-down", "IconChevronDown", [
  ["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]
]), BW = Ht("chevron-up", "IconChevronUp", [
  ["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]
]), WW = Ht("copy", "IconCopy", [
  [
    "path",
    {
      d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",
      key: "svg-0"
    }
  ],
  [
    "path",
    {
      d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",
      key: "svg-1"
    }
  ]
]), HW = Ht("file-import", "IconFileImport", [
  ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }],
  [
    "path",
    {
      d: "M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3",
      key: "svg-1"
    }
  ]
]), UW = Ht("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), GW = Ht("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), KW = Ht("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), YW = Ht("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), Lg = Ht("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), qW = Ht("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), sT = Ht("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), lT = Ht("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), XW = Ht(
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
), QW = Ht("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
let bu;
const ZW = new Uint8Array(16);
function JW() {
  if (!bu && (bu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !bu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return bu(ZW);
}
const ct = [];
for (let e = 0; e < 256; ++e)
  ct.push((e + 256).toString(16).slice(1));
function eH(e, t = 0) {
  return ct[e[t + 0]] + ct[e[t + 1]] + ct[e[t + 2]] + ct[e[t + 3]] + "-" + ct[e[t + 4]] + ct[e[t + 5]] + "-" + ct[e[t + 6]] + ct[e[t + 7]] + "-" + ct[e[t + 8]] + ct[e[t + 9]] + "-" + ct[e[t + 10]] + ct[e[t + 11]] + ct[e[t + 12]] + ct[e[t + 13]] + ct[e[t + 14]] + ct[e[t + 15]];
}
const tH = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), sS = {
  randomUUID: tH
};
function nH(e, t, n) {
  if (sS.randomUUID && !t && !e)
    return sS.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || JW)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return eH(r);
}
async function uT(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function al(e, t) {
  const n = e + "/" + Date.now() + ".json";
  oH(n, t);
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
async function rH(e, t) {
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
async function cT(e) {
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
async function oH(e, t) {
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
async function iH(e) {
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
function aH(e) {
  return e = e.replace(/[\\/:*?"<>|]/g, "_"), e.trim();
}
function dT(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
let Pe, Ie = null;
async function sH() {
  const e = async () => {
    let n = await uT("workflows");
    n == null && (n = localStorage.getItem("workspace") ?? "{}"), Pe = JSON.parse(n ?? "{}");
  }, t = async () => {
    Ie = await uH();
  };
  await Promise.all([e(), t()]);
}
function pm(e, t) {
  if (Pe == null)
    return;
  const n = Pe[e];
  if (n == null)
    return;
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  if (o !== i) {
    if (Pe[e] = {
      ...Pe[e],
      ...t,
      updateTime: Date.now()
    }, localStorage.setItem("workspace", JSON.stringify(Pe)), al("workflows", JSON.stringify(Pe)), t.name != null) {
      n.filePath && cT(n.filePath), hm(e);
      return;
    }
    t.json != null && hm(e);
  }
}
function hm(e) {
  if (Pe == null)
    return;
  const t = Pe[e];
  if (t == null) {
    console.error("saveToMyWorkflowsUpdateJson: workflow not found", e);
    return;
  }
  const n = aH(t.name) + ".json";
  Pe[e].filePath = n, rH(n, t.json);
}
function ec({
  json: e,
  name: t
}) {
  if (Pe == null)
    throw new Error("workspace is not loaded");
  const n = nH();
  return Pe[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Pe)), al("workflows", JSON.stringify(Pe)), hm(n), Pe[n];
}
function Ts() {
  if (Pe == null)
    throw new Error("workspace is not loaded");
  return Object.values(Pe).sort((e, t) => t.updateTime - e.updateTime);
}
function lH(e) {
  var n;
  if (Pe == null)
    throw new Error("workspace is not loaded");
  const t = (n = Pe[e]) == null ? void 0 : n.filePath;
  delete Pe[e], localStorage.setItem("workspace", JSON.stringify(Pe)), al("workflows", JSON.stringify(Pe)), t != null && cT(t);
}
async function uH() {
  let e = await uT("tags"), t = JSON.parse(e ?? "{}") ?? {};
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
      }), t[n].updateTime = Date.now(), al("tags", JSON.stringify(t)), t[n];
    },
    delete(n) {
      delete t[n], al("tags", JSON.stringify(t));
    }
  };
}
const fT = m.createContext({
  curFlowID: null
}), pT = m.createContext({});
function cH({ onclose: e }) {
  const [t, n] = m.useState([]), r = async () => {
    const o = await iH("workflows");
    if (o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return m.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ w.jsxs(Tl, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ w.jsx(El, {}),
    /* @__PURE__ */ w.jsxs(Zd, { children: [
      /* @__PURE__ */ w.jsx(_l, { children: "Backups" }),
      /* @__PURE__ */ w.jsx(Jd, {}),
      /* @__PURE__ */ w.jsx(Ol, { children: /* @__PURE__ */ w.jsx(_P, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ w.jsxs(xP, { children: [
          /* @__PURE__ */ w.jsx("h2", { children: /* @__PURE__ */ w.jsxs(bP, { children: [
            /* @__PURE__ */ w.jsxs(Fe, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              dT(i)
            ] }),
            /* @__PURE__ */ w.jsx(SP, {})
          ] }) }),
          /* @__PURE__ */ w.jsx(TP, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ w.jsx(Fe, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function dH({ onclose: e }) {
  const [t, n] = m.useState((Ie == null ? void 0 : Ie.listAll()) ?? []);
  return /* @__PURE__ */ w.jsxs(Tl, { isOpen: !0, onClose: e, children: [
    /* @__PURE__ */ w.jsx(El, {}),
    /* @__PURE__ */ w.jsxs(Zd, { children: [
      /* @__PURE__ */ w.jsx(_l, { children: "My Tags" }),
      /* @__PURE__ */ w.jsx(Jd, {}),
      /* @__PURE__ */ w.jsx(Ol, { children: t.map((r) => /* @__PURE__ */ w.jsxs($t, { children: [
        /* @__PURE__ */ w.jsx(rT, { children: r.name }),
        /* @__PURE__ */ w.jsx(
          tl,
          {
            onClick: () => {
              Ie == null || Ie.delete(r.name), n((Ie == null ? void 0 : Ie.listAll()) ?? []);
            },
            "aria-label": "delete-tag",
            colorScheme: "red",
            variant: "ghost",
            icon: /* @__PURE__ */ w.jsx(lT, {})
          }
        )
      ] })) })
    ] })
  ] });
}
function fH({
  onclose: e
}) {
  const [t, n] = m.useState(null);
  return /* @__PURE__ */ w.jsxs(Tl, { isOpen: !0, onClose: e, size: "2xl", children: [
    /* @__PURE__ */ w.jsx(El, {}),
    /* @__PURE__ */ w.jsxs(Zd, { children: [
      /* @__PURE__ */ w.jsx(_l, { children: "Settings" }),
      /* @__PURE__ */ w.jsx(Jd, {}),
      /* @__PURE__ */ w.jsxs(Ol, { children: [
        /* @__PURE__ */ w.jsx(oo, { fontWeight: 600, mb: 3, children: "Workspace Save Directory" }),
        /* @__PURE__ */ w.jsx($t, { children: /* @__PURE__ */ w.jsx(oo, { color: "gray.500", children: t }) })
      ] })
    ] })
  ] });
}
function pH({}) {
  const { isOpen: e, onOpen: t, onClose: n } = k9(), [r, o] = m.useState(!1), [i, a] = m.useState(!1);
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsxs(Og, { isLazy: !0, children: [
      /* @__PURE__ */ w.jsx(
        B2,
        {
          as: tl,
          "aria-label": "Options",
          icon: /* @__PURE__ */ w.jsx(KW, {}),
          size: "sm",
          variant: "outline"
        }
      ),
      /* @__PURE__ */ w.jsxs(V2, { children: [
        /* @__PURE__ */ w.jsx(
          cm,
          {
            onClick: () => o(!0),
            icon: /* @__PURE__ */ w.jsx(sT, { size: 16 }),
            fontSize: 16,
            children: "Manage Tags"
          }
        ),
        /* @__PURE__ */ w.jsx(
          cm,
          {
            onClick: t,
            icon: /* @__PURE__ */ w.jsx(GW, { size: 16 }),
            fontSize: 16,
            children: "Backups (Experimental)"
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ w.jsx(dH, { onclose: () => o(!1) }),
    i && /* @__PURE__ */ w.jsx(fH, { onclose: () => a(!1) }),
    e && /* @__PURE__ */ w.jsx(cH, { onclose: n })
  ] });
}
function lS(e, t) {
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
    t % 2 ? lS(Object(n), !0).forEach(function(r) {
      Fi(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lS(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hH(e) {
  if (Array.isArray(e))
    return e;
}
function mH(e, t) {
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
function mm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function hT(e, t) {
  if (e) {
    if (typeof e == "string")
      return mm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return mm(e, t);
  }
}
function vH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sr(e, t) {
  return hH(e) || mH(e, t) || hT(e, t) || vH();
}
function Or(e, t) {
  if (e == null)
    return {};
  var n = IP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var gH = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function yH(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, o = r === void 0 ? !1 : r, i = e.defaultValue, a = i === void 0 ? null : i, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, y = Or(e, gH), v = m.useState(s !== void 0 ? s : n), S = Sr(v, 2), h = S[0], g = S[1], b = m.useState(l !== void 0 ? l : o), x = Sr(b, 2), k = x[0], P = x[1], T = m.useState(p !== void 0 ? p : a), _ = Sr(T, 2), M = _[0], I = _[1], D = m.useCallback(function(A, z) {
    typeof u == "function" && u(A, z), I(A);
  }, [u]), G = m.useCallback(function(A, z) {
    var U;
    typeof c == "function" && (U = c(A, z)), g(U !== void 0 ? U : A);
  }, [c]), H = m.useCallback(function() {
    typeof f == "function" && f(), P(!0);
  }, [f]), L = m.useCallback(function() {
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
function bH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function uS(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, UP(r.key), r);
  }
}
function SH(e, t, n) {
  return t && uS(e.prototype, t), n && uS(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function xH(e, t) {
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
  }), t && Bc(e, t);
}
function Yc(e) {
  return Yc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yc(e);
}
function wH() {
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
function CH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kH(e, t) {
  if (t && (Yo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return CH(e);
}
function PH(e) {
  var t = wH();
  return function() {
    var r = Yc(e), o;
    if (t) {
      var i = Yc(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return kH(this, o);
  };
}
function TH(e) {
  if (Array.isArray(e))
    return mm(e);
}
function _H(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function EH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mT(e) {
  return TH(e) || _H(e) || hT(e) || EH();
}
function OH(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const MH = Math.min, IH = Math.max, qc = Math.round, Su = Math.floor, Xc = (e) => ({
  x: e,
  y: e
});
function RH(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function vT(e) {
  return yT(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ln(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gT(e) {
  var t;
  return (t = (yT(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yT(e) {
  return e instanceof Node || e instanceof Ln(e).Node;
}
function vm(e) {
  return e instanceof Element || e instanceof Ln(e).Element;
}
function zg(e) {
  return e instanceof HTMLElement || e instanceof Ln(e).HTMLElement;
}
function cS(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ln(e).ShadowRoot;
}
function bT(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = jg(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function $H() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function AH(e) {
  return ["html", "body", "#document"].includes(vT(e));
}
function jg(e) {
  return Ln(e).getComputedStyle(e);
}
function DH(e) {
  if (vT(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    cS(e) && e.host || // Fallback.
    gT(e)
  );
  return cS(t) ? t.host : t;
}
function ST(e) {
  const t = DH(e);
  return AH(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : zg(t) && bT(t) ? t : ST(t);
}
function Qc(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ST(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ln(o);
  return i ? t.concat(a, a.visualViewport || [], bT(o) ? o : [], a.frameElement && n ? Qc(a.frameElement) : []) : t.concat(o, Qc(o, [], n));
}
function FH(e) {
  const t = jg(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = zg(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = qc(n) !== i || qc(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Ng(e) {
  return vm(e) ? e : e.contextElement;
}
function Op(e) {
  const t = Ng(e);
  if (!zg(t))
    return Xc(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = FH(t);
  let a = (i ? qc(n.width) : n.width) / r, s = (i ? qc(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const LH = /* @__PURE__ */ Xc(0);
function zH(e) {
  const t = Ln(e);
  return !$H() || !t.visualViewport ? LH : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function jH(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ln(e) ? !1 : t;
}
function dS(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ng(e);
  let a = Xc(1);
  t && (r ? vm(r) && (a = Op(r)) : a = Op(e));
  const s = jH(i, n, r) ? zH(i) : Xc(0);
  let l = (o.left + s.x) / a.x, u = (o.top + s.y) / a.y, c = o.width / a.x, d = o.height / a.y;
  if (i) {
    const f = Ln(i), p = r && vm(r) ? Ln(r) : r;
    let y = f.frameElement;
    for (; y && r && p !== f; ) {
      const v = Op(y), S = y.getBoundingClientRect(), h = jg(y), g = S.left + (y.clientLeft + parseFloat(h.paddingLeft)) * v.x, b = S.top + (y.clientTop + parseFloat(h.paddingTop)) * v.y;
      l *= v.x, u *= v.y, c *= v.x, d *= v.y, l += g, u += b, y = Ln(y).frameElement;
    }
  }
  return RH({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function NH(e, t) {
  let n = null, r;
  const o = gT(e);
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
    const p = Su(c), y = Su(o.clientWidth - (u + d)), v = Su(o.clientHeight - (c + f)), S = Su(u), g = {
      rootMargin: -p + "px " + -y + "px " + -v + "px " + -S + "px",
      threshold: IH(0, MH(1, l)) || 1
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
        ...g,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(x, g);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function VH(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Ng(e), c = o || i ? [...u ? Qc(u) : [], ...Qc(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  const d = u && s ? NH(u, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((h) => {
    let [g] = h;
    g && g.target === u && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  let y, v = l ? dS(e) : null;
  l && S();
  function S() {
    const h = dS(e);
    v && (h.x !== v.x || h.y !== v.y || h.width !== v.width || h.height !== v.height) && n(), v = h, y = requestAnimationFrame(S);
  }
  return n(), () => {
    c.forEach((h) => {
      o && h.removeEventListener("scroll", n), i && h.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(y);
  };
}
var gm = m.useLayoutEffect, BH = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Zc = function() {
};
function WH(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function HH(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && i.push("".concat(WH(e, a)));
  return i.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var fS = function(t) {
  return JH(t) ? t.filter(Boolean) : Yo(t) === "object" && t !== null ? [t] : [];
}, xT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Or(t, BH);
  return Z({}, n);
}, Ue = function(t, n, r) {
  var o = t.cx, i = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: i(n, t),
    className: o(r ?? {}, a(n, t), s)
  };
};
function ef(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function UH(e) {
  return ef(e) ? window.innerHeight : e.clientHeight;
}
function wT(e) {
  return ef(e) ? window.pageYOffset : e.scrollTop;
}
function Jc(e, t) {
  if (ef(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function GH(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed")
    return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function KH(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function xu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Zc, o = wT(e), i = t - o, a = 10, s = 0;
  function l() {
    s += a;
    var u = KH(s, o, i, n);
    Jc(e, u), s < n ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function pS(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  r.bottom + o > n.bottom ? Jc(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : r.top - o < n.top && Jc(e, Math.max(t.offsetTop - o, 0));
}
function YH(e) {
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
function hS() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function qH() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var CT = !1, XH = {
  get passive() {
    return CT = !0;
  }
}, wu = typeof window < "u" ? window : {};
wu.addEventListener && wu.removeEventListener && (wu.addEventListener("p", Zc, XH), wu.removeEventListener("p", Zc, !1));
var QH = CT;
function ZH(e) {
  return e != null;
}
function JH(e) {
  return Array.isArray(e);
}
function Cu(e, t, n) {
  return e ? t : n;
}
var eU = function(t) {
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
}, tU = ["children", "innerProps"], nU = ["children", "innerProps"];
function rU(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, o = e.placement, i = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = GH(n), u = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent)
    return u;
  var c = l.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, y = f.height, v = f.top, S = n.offsetParent.getBoundingClientRect(), h = S.top, g = a ? window.innerHeight : UH(l), b = wT(l), x = parseInt(getComputedStyle(n).marginBottom, 10), k = parseInt(getComputedStyle(n).marginTop, 10), P = h - k, T = g - v, _ = P + b, M = d - b - v, I = p - g + b + x, D = b + v - k, G = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (T >= y)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (M >= y && !a)
        return i && xu(l, I, G), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && M >= r || a && T >= r) {
        i && xu(l, I, G);
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
        return i && Jc(l, I), {
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
      if (_ >= y && !a)
        return i && xu(l, D, G), {
          placement: "top",
          maxHeight: t
        };
      if (!a && _ >= r || a && P >= r) {
        var K = t;
        return (!a && _ >= r || a && P >= r) && (K = a ? P - k : _ - k), i && xu(l, D, G), {
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
function oU(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var kT = function(t) {
  return t === "auto" ? "bottom" : t;
}, iU = function(t, n) {
  var r, o = t.placement, i = t.theme, a = i.borderRadius, s = i.spacing, l = i.colors;
  return Z((r = {
    label: "menu"
  }, Fi(r, oU(o), "100%"), Fi(r, "position", "absolute"), Fi(r, "width", "100%"), Fi(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, PT = /* @__PURE__ */ m.createContext(null), aU = function(t) {
  var n = t.children, r = t.minMenuHeight, o = t.maxMenuHeight, i = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, l = t.theme, u = m.useContext(PT) || {}, c = u.setPortalPlacement, d = m.useRef(null), f = m.useState(o), p = Sr(f, 2), y = p[0], v = p[1], S = m.useState(null), h = Sr(S, 2), g = h[0], b = h[1], x = l.spacing.controlHeight;
  return gm(function() {
    var k = d.current;
    if (k) {
      var P = a === "fixed", T = s && !P, _ = rU({
        maxHeight: o,
        menuEl: k,
        minHeight: r,
        placement: i,
        shouldScroll: T,
        isFixedPosition: P,
        controlHeight: x
      });
      v(_.maxHeight), b(_.placement), c == null || c(_.placement);
    }
  }, [o, i, a, s, r, c, x]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: g || kT(i),
      maxHeight: y
    })
  });
}, sU = function(t) {
  var n = t.children, r = t.innerRef, o = t.innerProps;
  return ee("div", q({}, Ue(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, o), n);
}, lU = sU, uU = function(t, n) {
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
}, cU = function(t) {
  var n = t.children, r = t.innerProps, o = t.innerRef, i = t.isMulti;
  return ee("div", q({}, Ue(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": i
  }), {
    ref: o
  }, r), n);
}, TT = function(t, n) {
  var r = t.theme, o = r.spacing.baseUnit, i = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: i.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, dU = TT, fU = TT, pU = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, o = t.innerProps, i = Or(t, tU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), r);
}, hU = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, o = t.innerProps, i = Or(t, nU);
  return ee("div", q({}, Ue(Z(Z({}, i), {}, {
    children: r,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), r);
}, mU = function(t) {
  var n = t.rect, r = t.offset, o = t.position;
  return {
    left: n.left,
    position: o,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, vU = function(t) {
  var n = t.appendTo, r = t.children, o = t.controlElement, i = t.innerProps, a = t.menuPlacement, s = t.menuPosition, l = m.useRef(null), u = m.useRef(null), c = m.useState(kT(a)), d = Sr(c, 2), f = d[0], p = d[1], y = m.useMemo(function() {
    return {
      setPortalPlacement: p
    };
  }, []), v = m.useState(null), S = Sr(v, 2), h = S[0], g = S[1], b = m.useCallback(function() {
    if (o) {
      var T = YH(o), _ = s === "fixed" ? 0 : window.pageYOffset, M = T[f] + _;
      (M !== (h == null ? void 0 : h.offset) || T.left !== (h == null ? void 0 : h.rect.left) || T.width !== (h == null ? void 0 : h.rect.width)) && g({
        offset: M,
        rect: T
      });
    }
  }, [o, s, f, h == null ? void 0 : h.offset, h == null ? void 0 : h.rect.left, h == null ? void 0 : h.rect.width]);
  gm(function() {
    b();
  }, [b]);
  var x = m.useCallback(function() {
    typeof u.current == "function" && (u.current(), u.current = null), o && l.current && (u.current = VH(o, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, b]);
  gm(function() {
    x();
  }, [x]);
  var k = m.useCallback(function(T) {
    l.current = T, x();
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
  return ee(PT.Provider, {
    value: y
  }, n ? /* @__PURE__ */ yd.createPortal(P, n) : P);
}, gU = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, yU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isDisabled, i = t.isRtl;
  return ee("div", q({}, Ue(t, "container", {
    "--is-disabled": o,
    "--is-rtl": i
  }), r), n);
}, bU = function(t, n) {
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
}, SU = function(t) {
  var n = t.children, r = t.innerProps, o = t.isMulti, i = t.hasValue;
  return ee("div", q({}, Ue(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": i
  }), r), n);
}, xU = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, wU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, mS, CU = ["size"], kU = ["innerProps", "isRtl", "size"], PU = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, _T = function(t) {
  var n = t.size, r = Or(t, CU);
  return ee("svg", q({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: PU
  }, r));
}, Vg = function(t) {
  return ee(_T, q({
    size: 20
  }, t), ee("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, ET = function(t) {
  return ee(_T, q({
    size: 20
  }, t), ee("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, OT = function(t, n) {
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
}, TU = OT, _U = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || ee(ET, null));
}, EU = OT, OU = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || ee(Vg, null));
}, MU = function(t, n) {
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
}, IU = function(t) {
  var n = t.innerProps;
  return ee("span", q({}, n, Ue(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, RU = aC(mS || (mS = OH([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), $U = function(t, n) {
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
}, Mp = function(t) {
  var n = t.delay, r = t.offset;
  return ee("span", {
    css: /* @__PURE__ */ Ev({
      animation: "".concat(RU, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, AU = function(t) {
  var n = t.innerProps, r = t.isRtl, o = t.size, i = o === void 0 ? 4 : o, a = Or(t, kU);
  return ee("div", q({}, Ue(Z(Z({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: i
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), ee(Mp, {
    delay: 0,
    offset: r
  }), ee(Mp, {
    delay: 160,
    offset: !0
  }), ee(Mp, {
    delay: 320,
    offset: !r
  }));
}, DU = function(t, n) {
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
}, FU = function(t) {
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
}, LU = FU, zU = ["data"], jU = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, NU = function(t) {
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
}, VU = function(t, n) {
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
}, BU = function(t) {
  var n = xT(t);
  n.data;
  var r = Or(n, zU);
  return ee("div", q({}, Ue(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, WU = NU, HU = ["innerRef", "isDisabled", "isHidden", "inputClassName"], UU = function(t, n) {
  var r = t.isDisabled, o = t.value, i = t.theme, a = i.spacing, s = i.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, GU), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, MT = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, GU = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, MT)
}, KU = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, MT);
}, YU = function(t) {
  var n = t.cx, r = t.value, o = xT(t), i = o.innerRef, a = o.isDisabled, s = o.isHidden, l = o.inputClassName, u = Or(o, HU);
  return ee("div", q({}, Ue(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), ee("input", q({
    className: n({
      input: !0
    }, l),
    ref: i,
    style: KU(s),
    disabled: a
  }, u)));
}, qU = YU, XU = function(t, n) {
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
}, QU = function(t, n) {
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
}, ZU = function(t, n) {
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
}, IT = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", r, n);
}, JU = IT, eG = IT;
function tG(e) {
  var t = e.children, n = e.innerProps;
  return ee("div", q({
    role: "button"
  }, n), t || ee(Vg, {
    size: 14
  }));
}
var nG = function(t) {
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
}, rG = nG, oG = function(t, n) {
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
}, iG = function(t) {
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
}, aG = iG, sG = function(t, n) {
  var r = t.theme, o = r.spacing, i = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: i.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, lG = function(t) {
  var n = t.children, r = t.innerProps;
  return ee("div", q({}, Ue(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, uG = lG, cG = function(t, n) {
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
}, dG = function(t) {
  var n = t.children, r = t.isDisabled, o = t.innerProps;
  return ee("div", q({}, Ue(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), o), n);
}, fG = dG, pG = {
  ClearIndicator: OU,
  Control: LU,
  DropdownIndicator: _U,
  DownChevron: ET,
  CrossIcon: Vg,
  Group: WU,
  GroupHeading: BU,
  IndicatorsContainer: wU,
  IndicatorSeparator: IU,
  Input: qU,
  LoadingIndicator: AU,
  Menu: lU,
  MenuList: cU,
  MenuPortal: vU,
  LoadingMessage: hU,
  NoOptionsMessage: pU,
  MultiValue: rG,
  MultiValueContainer: JU,
  MultiValueLabel: eG,
  MultiValueRemove: tG,
  Option: aG,
  Placeholder: uG,
  SelectContainer: yU,
  SingleValue: fG,
  ValueContainer: SU
}, hG = function(t) {
  return Z(Z({}, pG), t.components);
}, vS = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function mG(e, t) {
  return !!(e === t || vS(e) && vS(t));
}
function vG(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!mG(e[n], t[n]))
      return !1;
  return !0;
}
function gG(e, t) {
  t === void 0 && (t = vG);
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
var yG = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, bG = function(t) {
  return ee("span", q({
    css: yG
  }, t));
}, gS = bG, SG = {
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
    var n = t.context, r = t.focused, o = t.options, i = t.label, a = i === void 0 ? "" : i, s = t.selectValue, l = t.isDisabled, u = t.isSelected, c = function(y, v) {
      return y && y.length ? "".concat(y.indexOf(v) + 1, " of ").concat(y.length) : "";
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
}, xG = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, o = t.focusedValue, i = t.focusableOptions, a = t.isFocused, s = t.selectValue, l = t.selectProps, u = t.id, c = l.ariaLiveMessages, d = l.getOptionLabel, f = l.inputValue, p = l.isMulti, y = l.isOptionDisabled, v = l.isSearchable, S = l.menuIsOpen, h = l.options, g = l.screenReaderStatus, b = l.tabSelectsValue, x = l["aria-label"], k = l["aria-live"], P = m.useMemo(function() {
    return Z(Z({}, SG), c || {});
  }, [c]), T = m.useMemo(function() {
    var L = "";
    if (n && P.onChange) {
      var W = n.option, K = n.options, $ = n.removedValue, A = n.removedValues, z = n.value, U = function(se) {
        return Array.isArray(se) ? null : se;
      }, V = $ || W || U(z), Y = V ? d(V) : "", j = K || A || void 0, te = j ? j.map(d) : [], le = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: V && y(V, s),
        label: Y,
        labels: te
      }, n);
      L = P.onChange(le);
    }
    return L;
  }, [n, P, y, s, d]), _ = m.useMemo(function() {
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
  }, [r, o, d, y, P, i, s]), M = m.useMemo(function() {
    var L = "";
    if (S && h.length && P.onFilter) {
      var W = g({
        count: i.length
      });
      L = P.onFilter({
        inputValue: f,
        resultsMessage: W
      });
    }
    return L;
  }, [i, f, S, P, h, g]), I = m.useMemo(function() {
    var L = "";
    if (P.guidance) {
      var W = o ? "value" : S ? "menu" : "input";
      L = P.guidance({
        "aria-label": x,
        context: W,
        isDisabled: r && y(r, s),
        isMulti: p,
        isSearchable: v,
        tabSelectsValue: b
      });
    }
    return L;
  }, [x, r, o, p, y, v, S, P, s, b]), D = "".concat(_, " ").concat(M, " ").concat(I), G = ee(m.Fragment, null, ee("span", {
    id: "aria-selection"
  }, T), ee("span", {
    id: "aria-context"
  }, D)), H = (n == null ? void 0 : n.action) === "initial-input-focus";
  return ee(m.Fragment, null, ee(gS, {
    id: u
  }, H && G), ee(gS, {
    "aria-live": k,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, a && !H && G));
}, wG = xG, ym = [{
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
}], CG = new RegExp("[" + ym.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), RT = {};
for (var Ip = 0; Ip < ym.length; Ip++)
  for (var Rp = ym[Ip], $p = 0; $p < Rp.letters.length; $p++)
    RT[Rp.letters[$p]] = Rp.base;
var $T = function(t) {
  return t.replace(CG, function(n) {
    return RT[n];
  });
}, kG = gG($T), yS = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, PG = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, TG = function(t) {
  return function(n, r) {
    if (n.data.__isNew__)
      return !0;
    var o = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: PG,
      trim: !0,
      matchFrom: "any"
    }, t), i = o.ignoreCase, a = o.ignoreAccents, s = o.stringify, l = o.trim, u = o.matchFrom, c = l ? yS(r) : r, d = l ? yS(s(n)) : s(n);
    return i && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = kG(c), d = $T(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, _G = ["innerRef"];
function EG(e) {
  var t = e.innerRef, n = Or(e, _G), r = eU(n, "onExited", "in", "enter", "exit", "appear");
  return ee("input", q({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Ev({
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
var OG = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function MG(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, o = e.onTopArrive, i = e.onTopLeave, a = m.useRef(!1), s = m.useRef(!1), l = m.useRef(0), u = m.useRef(null), c = m.useCallback(function(S, h) {
    if (u.current !== null) {
      var g = u.current, b = g.scrollTop, x = g.scrollHeight, k = g.clientHeight, P = u.current, T = h > 0, _ = x - k - b, M = !1;
      _ > h && a.current && (r && r(S), a.current = !1), T && s.current && (i && i(S), s.current = !1), T && h > _ ? (n && !a.current && n(S), P.scrollTop = x, M = !0, a.current = !0) : !T && -h > b && (o && !s.current && o(S), P.scrollTop = 0, M = !0, s.current = !0), M && OG(S);
    }
  }, [n, r, o, i]), d = m.useCallback(function(S) {
    c(S, S.deltaY);
  }, [c]), f = m.useCallback(function(S) {
    l.current = S.changedTouches[0].clientY;
  }, []), p = m.useCallback(function(S) {
    var h = l.current - S.changedTouches[0].clientY;
    c(S, h);
  }, [c]), y = m.useCallback(function(S) {
    if (S) {
      var h = QH ? {
        passive: !1
      } : !1;
      S.addEventListener("wheel", d, h), S.addEventListener("touchstart", f, h), S.addEventListener("touchmove", p, h);
    }
  }, [p, f, d]), v = m.useCallback(function(S) {
    S && (S.removeEventListener("wheel", d, !1), S.removeEventListener("touchstart", f, !1), S.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return m.useEffect(function() {
    if (t) {
      var S = u.current;
      return y(S), function() {
        v(S);
      };
    }
  }, [t, y, v]), function(S) {
    u.current = S;
  };
}
var bS = ["boxSizing", "height", "overflow", "paddingRight", "position"], SS = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function xS(e) {
  e.preventDefault();
}
function wS(e) {
  e.stopPropagation();
}
function CS() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function kS() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var PS = !!(typeof window < "u" && window.document && window.document.createElement), Ua = 0, pi = {
  capture: !1,
  passive: !1
};
function IG(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, o = m.useRef({}), i = m.useRef(null), a = m.useCallback(function(l) {
    if (PS) {
      var u = document.body, c = u && u.style;
      if (r && bS.forEach(function(y) {
        var v = c && c[y];
        o.current[y] = v;
      }), r && Ua < 1) {
        var d = parseInt(o.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(SS).forEach(function(y) {
          var v = SS[y];
          c && (c[y] = v);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      u && kS() && (u.addEventListener("touchmove", xS, pi), l && (l.addEventListener("touchstart", CS, pi), l.addEventListener("touchmove", wS, pi))), Ua += 1;
    }
  }, [r]), s = m.useCallback(function(l) {
    if (PS) {
      var u = document.body, c = u && u.style;
      Ua = Math.max(Ua - 1, 0), r && Ua < 1 && bS.forEach(function(d) {
        var f = o.current[d];
        c && (c[d] = f);
      }), u && kS() && (u.removeEventListener("touchmove", xS, pi), l && (l.removeEventListener("touchstart", CS, pi), l.removeEventListener("touchmove", wS, pi)));
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
var RG = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, $G = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function AG(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, o = r === void 0 ? !0 : r, i = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = MG({
    isEnabled: o,
    onBottomArrive: i,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = IG({
    isEnabled: n
  }), d = function(p) {
    u(p), c(p);
  };
  return ee(m.Fragment, null, n && ee("div", {
    onClick: RG,
    css: $G
  }), t(d));
}
var DG = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, FG = function(t) {
  var n = t.name, r = t.onFocus;
  return ee("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: DG,
    value: "",
    onChange: function() {
    }
  });
}, LG = FG, zG = function(t) {
  return t.label;
}, jG = function(t) {
  return t.label;
}, NG = function(t) {
  return t.value;
}, VG = function(t) {
  return !!t.isDisabled;
}, BG = {
  clearIndicator: EU,
  container: gU,
  control: DU,
  dropdownIndicator: TU,
  group: jU,
  groupHeading: VU,
  indicatorsContainer: xU,
  indicatorSeparator: MU,
  input: UU,
  loadingIndicator: $U,
  loadingMessage: fU,
  menu: iU,
  menuList: uU,
  menuPortal: mU,
  multiValue: XU,
  multiValueLabel: QU,
  multiValueRemove: ZU,
  noOptionsMessage: dU,
  option: oG,
  placeholder: sG,
  singleValue: cG,
  valueContainer: bU
}, WG = {
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
}, HG = 4, AT = 4, UG = 38, GG = AT * 2, KG = {
  baseUnit: AT,
  controlHeight: UG,
  menuGutter: GG
}, Ap = {
  borderRadius: HG,
  colors: WG,
  spacing: KG
}, YG = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: hS(),
  captureMenuScroll: !hS(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: TG(),
  formatGroupLabel: zG,
  getOptionLabel: jG,
  getOptionValue: NG,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: VG,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !qH(),
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
function TS(e, t, n, r) {
  var o = zT(e, t, n), i = jT(e, t, n), a = LT(e, t), s = ed(e, t);
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
function DT(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var o = n.options.map(function(a, s) {
        return TS(e, a, t, s);
      }).filter(function(a) {
        return _S(e, a);
      });
      return o.length > 0 ? {
        type: "group",
        data: n,
        options: o,
        index: r
      } : void 0;
    }
    var i = TS(e, n, t, r);
    return _S(e, i) ? i : void 0;
  }).filter(ZH);
}
function FT(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, mT(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function qG(e, t) {
  return FT(DT(e, t));
}
function _S(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, o = t.data, i = t.isSelected, a = t.label, s = t.value;
  return (!VT(e) || !i) && NT(e, {
    label: a,
    value: s,
    data: o
  }, r);
}
function XG(e, t) {
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
function QG(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var LT = function(t, n) {
  return t.getOptionLabel(n);
}, ed = function(t, n) {
  return t.getOptionValue(n);
};
function zT(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function jT(e, t, n) {
  if (n.indexOf(t) > -1)
    return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = ed(e, t);
  return n.some(function(o) {
    return ed(e, o) === r;
  });
}
function NT(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var VT = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, ZG = 1, BT = /* @__PURE__ */ function(e) {
  xH(n, e);
  var t = PH(n);
  function n(r) {
    var o;
    if (bH(this, n), o = t.call(this, r), o.state = {
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
        var v = o.getOptionValue(s);
        o.setValue(f.filter(function(S) {
          return o.getOptionValue(S) !== v;
        }), "deselect-option", s);
      } else if (!y)
        c ? o.setValue([].concat(mT(f), [s]), "select-option", s) : o.setValue(s, "select-option");
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
      }), f = Cu(l, d, d[0] || null);
      o.onChange(f, {
        action: "remove-value",
        removedValue: s
      }), o.focusInput();
    }, o.clearValue = function() {
      var s = o.state.selectValue;
      o.onChange(Cu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: s
      });
    }, o.popValue = function() {
      var s = o.props.isMulti, l = o.state.selectValue, u = l[l.length - 1], c = l.slice(0, l.length - 1), d = Cu(s, c, c[0] || null);
      o.onChange(d, {
        action: "pop-value",
        removedValue: u
      });
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return HH.apply(void 0, [o.props.classNamePrefix].concat(l));
    }, o.getOptionLabel = function(s) {
      return LT(o.props, s);
    }, o.getOptionValue = function(s) {
      return ed(o.props, s);
    }, o.getStyles = function(s, l) {
      var u = o.props.unstyled, c = BG[s](l, u);
      c.boxSizing = "border-box";
      var d = o.props.styles[s];
      return d ? d(c, l) : c;
    }, o.getClassNames = function(s, l) {
      var u, c;
      return (u = (c = o.props.classNames)[s]) === null || u === void 0 ? void 0 : u.call(c, l);
    }, o.getElementId = function(s) {
      return "".concat(o.instancePrefix, "-").concat(s);
    }, o.getComponents = function() {
      return hG(o.props);
    }, o.buildCategorizedOptions = function() {
      return DT(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return FT(o.buildCategorizedOptions());
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
      typeof o.props.closeMenuOnScroll == "boolean" ? s.target instanceof HTMLElement && ef(s.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(s) && o.props.onMenuClose();
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
      return VT(o.props);
    }, o.onValueInputFocus = function(s) {
      s.preventDefault(), s.stopPropagation(), o.focus();
    }, o.onKeyDown = function(s) {
      var l = o.props, u = l.isMulti, c = l.backspaceRemovesValue, d = l.escapeClearsValue, f = l.inputValue, p = l.isClearable, y = l.isDisabled, v = l.menuIsOpen, S = l.onKeyDown, h = l.tabSelectsValue, g = l.openMenuOnFocus, b = o.state, x = b.focusedOption, k = b.focusedValue, P = b.selectValue;
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
            if (o.isComposing || s.shiftKey || !v || !h || !x || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            g && o.isOptionSelected(x, P))
              return;
            o.selectOption(x);
            break;
          case "Enter":
            if (s.keyCode === 229)
              break;
            if (v) {
              if (!x || o.isComposing)
                return;
              o.selectOption(x);
              break;
            }
            return;
          case "Escape":
            v ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), o.onMenuClose()) : p && d && o.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!v) {
              o.openMenu("first");
              break;
            }
            if (!x)
              return;
            o.selectOption(x);
            break;
          case "ArrowUp":
            v ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            v ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!v)
              return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!v)
              return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!v)
              return;
            o.focusOption("first");
            break;
          case "End":
            if (!v)
              return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        s.preventDefault();
      }
    }, o.instancePrefix = "react-select-" + (o.props.instanceId || ++ZG), o.state.selectValue = fS(r.value), r.menuIsOpen && o.state.selectValue.length) {
      var i = o.buildFocusableOptions(), a = i.indexOf(o.state.selectValue[0]);
      o.state.focusedOption = i[a];
    }
    return o;
  }
  return SH(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && pS(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (pS(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Ap) : Z(Z({}, Ap), this.props.theme) : Ap;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, i = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, y = d.options, v = this.hasValue();
      return {
        clearValue: o,
        cx: i,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: v,
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
      return zT(this.props, o, i);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, i) {
      return jT(this.props, o, i);
    }
  }, {
    key: "filterOption",
    value: function(o, i) {
      return NT(this.props, o, i);
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
        var o = this.props, i = o.isDisabled, a = o.isSearchable, s = o.inputId, l = o.inputValue, u = o.tabIndex, c = o.form, d = o.menuIsOpen, f = o.required, p = this.getComponents(), y = p.Input, v = this.state, S = v.inputIsHidden, h = v.ariaSelection, g = this.commonProps, b = s || this.getElementId("input"), x = Z(Z(Z({
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
        return a ? /* @__PURE__ */ m.createElement(y, q({}, g, {
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
        }, x)) : /* @__PURE__ */ m.createElement(EG, q({
          id: b,
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
      var o = this, i = this.getComponents(), a = i.MultiValue, s = i.MultiValueContainer, l = i.MultiValueLabel, u = i.MultiValueRemove, c = i.SingleValue, d = i.Placeholder, f = this.commonProps, p = this.props, y = p.controlShouldRenderValue, v = p.isDisabled, S = p.isMulti, h = p.inputValue, g = p.placeholder, b = this.state, x = b.selectValue, k = b.focusedValue, P = b.isFocused;
      if (!this.hasValue() || !y)
        return h ? null : /* @__PURE__ */ m.createElement(d, q({}, f, {
          key: "placeholder",
          isDisabled: v,
          isFocused: P,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), g);
      if (S)
        return x.map(function(_, M) {
          var I = _ === k, D = "".concat(o.getOptionLabel(_), "-").concat(o.getOptionValue(_));
          return /* @__PURE__ */ m.createElement(a, q({}, f, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: I,
            isDisabled: v,
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
      if (h)
        return null;
      var T = x[0];
      return /* @__PURE__ */ m.createElement(c, q({}, f, {
        data: T,
        isDisabled: v
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
      var o = this, i = this.getComponents(), a = i.Group, s = i.GroupHeading, l = i.Menu, u = i.MenuList, c = i.MenuPortal, d = i.LoadingMessage, f = i.NoOptionsMessage, p = i.Option, y = this.commonProps, v = this.state.focusedOption, S = this.props, h = S.captureMenuScroll, g = S.inputValue, b = S.isLoading, x = S.loadingMessage, k = S.minMenuHeight, P = S.maxMenuHeight, T = S.menuIsOpen, _ = S.menuPlacement, M = S.menuPosition, I = S.menuPortalTarget, D = S.menuShouldBlockScroll, G = S.menuShouldScrollIntoView, H = S.noOptionsMessage, L = S.onMenuScrollToTop, W = S.onMenuScrollToBottom;
      if (!T)
        return null;
      var K = function(j, te) {
        var le = j.type, ie = j.data, se = j.isDisabled, me = j.isSelected, Ce = j.label, et = j.value, qe = v === ie, on = se ? void 0 : function() {
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
        return /* @__PURE__ */ m.createElement(p, q({}, y, {
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
        }), o.formatOptionLabel(j.data, "menu"));
      }, $;
      if (this.hasOptions())
        $ = this.getCategorizedOptions().map(function(Y) {
          if (Y.type === "group") {
            var j = Y.data, te = Y.options, le = Y.index, ie = "".concat(o.getElementId("group"), "-").concat(le), se = "".concat(ie, "-heading");
            return /* @__PURE__ */ m.createElement(a, q({}, y, {
              key: ie,
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
      else if (b) {
        var A = x({
          inputValue: g
        });
        if (A === null)
          return null;
        $ = /* @__PURE__ */ m.createElement(d, y, A);
      } else {
        var z = H({
          inputValue: g
        });
        if (z === null)
          return null;
        $ = /* @__PURE__ */ m.createElement(f, y, z);
      }
      var U = {
        minMenuHeight: k,
        maxMenuHeight: P,
        menuPlacement: _,
        menuPosition: M,
        menuShouldScrollIntoView: G
      }, V = /* @__PURE__ */ m.createElement(aU, q({}, y, U), function(Y) {
        var j = Y.ref, te = Y.placerProps, le = te.placement, ie = te.maxHeight;
        return /* @__PURE__ */ m.createElement(l, q({}, y, U, {
          innerRef: j,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove,
            id: o.getElementId("listbox")
          },
          isLoading: b,
          placement: le
        }), /* @__PURE__ */ m.createElement(AG, {
          captureEnabled: h,
          onTopArrive: L,
          onBottomArrive: W,
          lockEnabled: D
        }, function(se) {
          return /* @__PURE__ */ m.createElement(u, q({}, y, {
            innerRef: function(Ce) {
              o.getMenuListRef(Ce), se(Ce);
            },
            isLoading: b,
            maxHeight: ie,
            focusedOption: v
          }), $);
        }));
      });
      return I || M === "fixed" ? /* @__PURE__ */ m.createElement(c, q({}, y, {
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
        return /* @__PURE__ */ m.createElement(LG, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var f = d.map(function(v) {
              return o.getOptionValue(v);
            }).join(a);
            return /* @__PURE__ */ m.createElement("input", {
              name: u,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(v, S) {
              return /* @__PURE__ */ m.createElement("input", {
                key: "i-".concat(S),
                name: u,
                type: "hidden",
                value: o.getOptionValue(v)
              });
            }) : /* @__PURE__ */ m.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ m.createElement("div", null, p);
          }
        else {
          var y = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ m.createElement("input", {
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
      return /* @__PURE__ */ m.createElement(wG, q({}, o, {
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
      var o = this.getComponents(), i = o.Control, a = o.IndicatorsContainer, s = o.SelectContainer, l = o.ValueContainer, u = this.props, c = u.className, d = u.id, f = u.isDisabled, p = u.menuIsOpen, y = this.state.isFocused, v = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ m.createElement(s, q({}, v, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: y
      }), this.renderLiveRegion(), /* @__PURE__ */ m.createElement(i, q({}, v, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: y,
        menuIsOpen: p
      }), /* @__PURE__ */ m.createElement(l, q({}, v, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ m.createElement(a, q({}, v, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, i) {
      var a = i.prevProps, s = i.clearFocusValueOnUpdate, l = i.inputIsHiddenAfterUpdate, u = i.ariaSelection, c = i.isFocused, d = i.prevWasFocused, f = o.options, p = o.value, y = o.menuIsOpen, v = o.inputValue, S = o.isMulti, h = fS(p), g = {};
      if (a && (p !== a.value || f !== a.options || y !== a.menuIsOpen || v !== a.inputValue)) {
        var b = y ? qG(o, h) : [], x = s ? XG(i, h) : null, k = QG(i, b);
        g = {
          selectValue: h,
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
        value: Cu(S, h, h[0] || null),
        options: h,
        action: "initial-input-focus"
      }, _ = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (T = null), Z(Z(Z({}, g), P), {}, {
        prevProps: o,
        ariaSelection: T,
        prevWasFocused: _
      });
    }
  }]), n;
}(m.Component);
BT.defaultProps = YG;
var JG = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = yH(e);
  return /* @__PURE__ */ m.createElement(BT, q({
    ref: t
  }, n));
}), eK = JG, tK = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
function bm() {
  return bm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bm.apply(this, arguments);
}
function nK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var WT = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = nK(t, tK);
  return bm({}, n);
}, rK = function(t) {
  var n = typeof t == "string";
  return n && ["sm", "md", "lg"].includes(t);
}, oK = function(t) {
  return rK(t) ? t : t === "xs" ? "sm" : t === "xl" ? "lg" : "md";
}, jn = function(t) {
  var n = ho(), r = oK(n.components.Input.defaultProps.size), o = t ?? r, i = R9(typeof o == "string" ? [o] : o, {
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
var iK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.isDisabled, s = t.isRtl, l = t.hasValue, u = t.selectProps.chakraStyles, c = ga({
    position: "relative",
    direction: s ? "rtl" : void 0
  }, a ? {
    cursor: "not-allowed"
  } : {}), d = u != null && u.container ? u.container(c, t) : c;
  return /* @__PURE__ */ re.createElement(Fe, ga({}, i, {
    className: o({
      "--is-disabled": a,
      "--is-rtl": s,
      "--has-value": l
    }, r),
    sx: d
  }), n);
}, aK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isMulti, a = t.hasValue, s = t.innerProps, l = t.selectProps, u = l.chakraStyles, c = l.size, d = l.variant, f = l.focusBorderColor, p = l.errorBorderColor, y = l.controlShouldRenderValue, v = jn(c), S = Ct("Input", {
    size: v,
    variant: d,
    focusBorderColor: f,
    errorBorderColor: p
  }), h = {
    display: i && a && y ? "flex" : "grid",
    alignItems: "center",
    flex: 1,
    paddingY: "2px",
    paddingX: S.field.px,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, g = u != null && u.valueContainer ? u.valueContainer(h, t) : h;
  return /* @__PURE__ */ re.createElement(Fe, ga({}, s, {
    className: o({
      "value-container": !0,
      "value-container--is-multi": i,
      "value-container--has-value": a
    }, r),
    sx: g
  }), n);
}, sK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    flexShrink: 0
  }, l = a != null && a.indicatorsContainer ? a.indicatorsContainer(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, ga({}, i, {
    className: o({
      indicators: !0
    }, r),
    sx: l
  }), n);
}, lK = ["height", "h"];
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
function uK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var cK = function(t) {
  var n = t.className, r = t.cx, o = t.children, i = t.innerRef, a = t.innerProps, s = t.isDisabled, l = t.isFocused, u = t.menuIsOpen, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, v = c.errorBorderColor, S = c.isInvalid, h = c.isReadOnly, g = jn(f), b = Ct("Input", {
    size: g,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: v
  }), x = b.field, k = x.height, P = x.h, T = uK(x, lK), _ = k || P, M = wn({}, T, {
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
    "data-invalid": S ? !0 : void 0,
    "data-disabled": s ? !0 : void 0,
    "data-readonly": h ? !0 : void 0
  }), o);
}, dK = function(t) {
  var n = t.className, r = t.cx, o = t.selectProps, i = o.chakraStyles, a = o.useBasicStyles, s = o.variant, l = wn({
    opacity: 1
  }, a || s !== "outline" ? {
    display: "none"
  } : {}), u = i != null && i.indicatorSeparator ? i.indicatorSeparator(l, t) : l;
  return /* @__PURE__ */ re.createElement(C2, {
    className: r({
      "indicator-separator": !0
    }, n),
    sx: u,
    orientation: "vertical"
  });
}, fK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    role: "presentation",
    focusable: "false",
    "aria-hidden": "true"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }));
}, pK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.useBasicStyles, u = a.size, c = a.focusBorderColor, d = a.errorBorderColor, f = a.variant, p = jn(u), y = Ct("Input", {
    size: p,
    variant: f,
    focusBorderColor: c,
    errorBorderColor: d
  }), v = {
    sm: "16px",
    md: "20px",
    lg: "24px"
  }, S = v[p], h = wn({}, y.addon, {
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
  }), g = s != null && s.dropdownIndicator ? s.dropdownIndicator(h, t) : h, b = {
    height: "1em",
    width: "1em"
  }, x = s != null && s.downChevron ? s.downChevron(b, t) : b;
  return /* @__PURE__ */ re.createElement(Fe, wn({}, i, {
    className: o({
      indicator: !0,
      "dropdown-indicator": !0
    }, r),
    sx: g
  }), n || /* @__PURE__ */ re.createElement(fK, {
    sx: x
  }));
}, hK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, wn({
    focusable: "false",
    "aria-hidden": !0
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
  }));
}, mK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = jn(l), c = Zo("CloseButton", {
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
  return /* @__PURE__ */ re.createElement(Fe, wn({
    role: "button",
    className: o({
      indicator: !0,
      "clear-indicator": !0
    }, r),
    sx: f,
    "aria-label": "Clear selected options"
  }, i), n || /* @__PURE__ */ re.createElement(hK, {
    sx: y
  }));
}, vK = function(t) {
  var n = t.className, r = t.cx, o = t.innerProps, i = t.selectProps, a = i.chakraStyles, s = i.size, l = t.color, u = t.emptyColor, c = t.speed, d = t.thickness, f = t.spinnerSize, p = jn(s), y = {
    sm: "xs",
    md: "sm",
    lg: "md"
  }, v = y[p], S = {
    marginRight: 3
  }, h = a != null && a.loadingIndicator ? a.loadingIndicator(S, t) : S;
  return /* @__PURE__ */ re.createElement(Ud, wn({
    className: r({
      indicator: !0,
      "loading-indicator": !0
    }, n),
    sx: h
  }, o, {
    size: f || v,
    color: l,
    emptyColor: u,
    speed: c,
    thickness: d
  }));
};
const gK = cK;
var yK = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
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
function bK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var SK = function(t) {
  var n = t.className, r = t.cx, o = t.value, i = t.selectProps, a = i.chakraStyles, s = i.isReadOnly, l = WT(t), u = l.innerRef, c = l.isDisabled, d = l.isHidden, f = l.inputClassName, p = bK(l, yK), y = {
    gridArea: "1 / 2",
    minW: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0
  }, v = {
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
    }, y)
  }, S = a != null && a.inputContainer ? a.inputContainer(v, t) : v, h = _s({
    background: 0,
    opacity: d ? 0 : 1,
    width: "100%"
  }, y), g = a != null && a.input ? a.input(h, t) : h;
  return /* @__PURE__ */ re.createElement(Fe, {
    className: r({
      "input-container": !0
    }, n),
    "data-value": o || "",
    sx: S
  }, /* @__PURE__ */ re.createElement(X.input, _s({
    className: r({
      input: !0
    }, f),
    ref: u,
    sx: g,
    disabled: c,
    readOnly: s ? !0 : void 0
  }, p)));
};
const xK = SK;
var wK = ["data"];
function CK(e, t) {
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
var kK = function(t) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return t ? n[t] : "top";
}, PK = function(t) {
  var n, r = t.className, o = t.cx, i = t.children, a = t.innerProps, s = t.innerRef, l = t.placement, u = t.selectProps.chakraStyles, c = (n = {
    position: "absolute"
  }, n[kK(l)] = "100%", n.marginY = "8px", n.width = "100%", n.zIndex = 1, n), d = u != null && u.menu ? u.menu(c, t) : c;
  return /* @__PURE__ */ re.createElement(Og, null, /* @__PURE__ */ re.createElement(Fe, Wt({}, a, {
    ref: s,
    className: o({
      menu: !0
    }, r),
    sx: d
  }), i));
};
const TK = PK;
var _K = function(t) {
  var n, r = t.className, o = t.cx, i = t.innerRef, a = t.children, s = t.maxHeight, l = t.isMulti, u = t.innerProps, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.variant, y = c.focusBorderColor, v = c.errorBorderColor, S = Ct("Menu"), h = jn(f), g = Ct("Input", {
    size: h,
    variant: p,
    focusBorderColor: y,
    errorBorderColor: v
  }), b = g.field, x = Wt({}, S.list, {
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
}, EK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = jn(l), c = {
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
}, OK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps, s = a.chakraStyles, l = a.size, u = jn(l), c = {
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
}, MK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.theme, a = t.getStyles, s = t.Heading, l = t.headingProps, u = t.label, c = t.selectProps, d = t.innerProps, f = t.getClassNames, p = c.chakraStyles, y = {}, v = p != null && p.group ? p.group(y, t) : y;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, d, {
    className: o({
      group: !0
    }, r),
    sx: v
  }), /* @__PURE__ */ re.createElement(s, Wt({}, l, {
    selectProps: c,
    cx: o,
    theme: i,
    getStyles: a,
    getClassNames: f
  }), u), /* @__PURE__ */ re.createElement(Fe, null, n));
}, IK = function(t) {
  var n = t.cx, r = t.className, o = t.selectProps, i = o.chakraStyles, a = o.size, s = o.hasStickyGroupHeaders, l = WT(t);
  l.data;
  var u = CK(l, wK), c = Ct("Menu"), d = jn(a), f = {
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
  }), v = i != null && i.groupHeading ? i.groupHeading(y, t) : y;
  return /* @__PURE__ */ re.createElement(Fe, Wt({}, u, {
    className: n({
      "group-heading": !0
    }, r),
    sx: v
  }));
}, RK = function(t) {
  return /* @__PURE__ */ re.createElement("svg", Wt({
    viewBox: "0 0 14 14",
    width: "1em",
    height: "1em"
  }, t), /* @__PURE__ */ re.createElement("polygon", {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }));
}, $K = function(t) {
  var n = t.className, r = t.cx, o = t.innerRef, i = t.innerProps, a = t.children, s = t.isFocused, l = t.isDisabled, u = t.isSelected, c = t.selectProps, d = c.chakraStyles, f = c.size, p = c.isMulti, y = c.hideSelectedOptions, v = c.selectedOptionStyle, S = c.selectedOptionColorScheme, h = Ct("Menu").item, g = jn(f), b = {
    sm: "0.6rem",
    md: "0.8rem",
    lg: "1rem"
  }, x = {
    sm: "0.3rem",
    md: "0.4rem",
    lg: "0.5rem"
  }, k = Py(S + ".500", S + ".300"), P = Py("white", "black"), T = v === "check" && (!p || y === !1), _ = v === "color", M = Wt({}, h, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "start",
    fontSize: g,
    paddingX: b[g],
    paddingY: x[g]
  }, _ && {
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
  }), T && /* @__PURE__ */ re.createElement(Mg, {
    fontSize: "0.8em",
    marginEnd: "0.75rem",
    opacity: u ? 1 : 0
  }, /* @__PURE__ */ re.createElement(RK, null)), a);
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
var AK = function(t) {
  return typeof t == "object" && t !== null && "colorScheme" in t && typeof t.colorScheme == "string";
}, DK = function(t) {
  return typeof t == "object" && t !== null && "variant" in t && typeof t.variant == "string";
}, HT = function(t) {
  return typeof t == "object" && t !== null && "isFixed" in t && typeof t.isFixed == "boolean";
}, FK = function(t) {
  var n = t.children, r = t.className, o = t.components, i = t.cx, a = t.data, s = t.innerProps, l = t.isDisabled, u = t.isFocused, c = t.removeProps, d = t.selectProps, f = t.cropWithEllipsis, p = o.Container, y = o.Label, v = o.Remove, S = d.chakraStyles, h = d.colorScheme, g = d.tagVariant, b = d.size, x = jn(b), k = "", P = "", T = !1;
  AK(a) && (k = a.colorScheme), DK(a) && (P = a.variant), HT(a) && (T = a.isFixed);
  var _ = Ct("Tag", {
    size: x,
    colorScheme: k || h,
    variant: P || g || (T ? "solid" : "subtle")
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
  }, /* @__PURE__ */ re.createElement(y, {
    data: a,
    innerProps: {
      className: i({
        "multi-value__label": !0
      }, r)
    },
    sx: G,
    selectProps: d
  }, n), /* @__PURE__ */ re.createElement(v, {
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
}, LK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, zK = function(t) {
  var n = t.children, r = t.innerProps, o = t.sx;
  return /* @__PURE__ */ re.createElement(X.span, Rn({}, r, {
    sx: o
  }), n);
}, jK = function(t) {
  return /* @__PURE__ */ re.createElement(kn, Rn({
    verticalAlign: "inherit",
    viewBox: "0 0 512 512"
  }, t), /* @__PURE__ */ re.createElement("path", {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }));
}, NK = function(t) {
  var n = t.children, r = t.innerProps, o = t.isFocused, i = t.data, a = t.sx;
  return HT(i) && i.isFixed ? null : /* @__PURE__ */ re.createElement(Fe, Rn({}, r, {
    role: "button",
    sx: a,
    "data-focus": o ? !0 : void 0,
    "data-focus-visible": o ? !0 : void 0
  }), n || /* @__PURE__ */ re.createElement(jK, null));
};
const VK = FK;
function Sm() {
  return Sm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Sm.apply(this, arguments);
}
var BK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.innerProps, a = t.selectProps.chakraStyles, s = {
    gridArea: "1 / 1 / 2 / 3",
    color: "chakra-placeholder-color",
    mx: "0.125rem",
    userSelect: "none"
  }, l = a != null && a.placeholder ? a.placeholder(s, t) : s;
  return /* @__PURE__ */ re.createElement(Fe, Sm({}, i, {
    className: o({
      placeholder: !0
    }, r),
    sx: l
  }), n);
};
const WK = BK;
function xm() {
  return xm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xm.apply(this, arguments);
}
var HK = function(t) {
  var n = t.children, r = t.className, o = t.cx, i = t.isDisabled, a = t.innerProps, s = t.selectProps.chakraStyles, l = {
    gridArea: "1 / 1 / 2 / 3",
    mx: "0.125rem",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, u = s != null && s.singleValue ? s.singleValue(l, t) : l;
  return /* @__PURE__ */ re.createElement(Fe, xm({
    className: o({
      "single-value": !0,
      "single-value--is-disabled": i
    }, r),
    sx: u
  }, a), n);
};
const UK = HK;
var GK = {
  ClearIndicator: mK,
  Control: gK,
  DropdownIndicator: pK,
  Group: MK,
  GroupHeading: IK,
  IndicatorSeparator: dK,
  IndicatorsContainer: sK,
  Input: xK,
  LoadingIndicator: vK,
  LoadingMessage: EK,
  Menu: TK,
  MenuList: _K,
  MultiValue: VK,
  MultiValueContainer: LK,
  MultiValueLabel: zK,
  MultiValueRemove: NK,
  NoOptionsMessage: OK,
  Option: $K,
  Placeholder: WK,
  SelectContainer: iK,
  SingleValue: UK,
  ValueContainer: aK
};
const KK = GK;
var YK = ["components", "theme", "size", "colorScheme", "isDisabled", "isInvalid", "isReadOnly", "required", "isRequired", "inputId", "tagVariant", "selectedOptionStyle", "selectedOptionColorScheme", "selectedOptionColor", "variant", "focusBorderColor", "errorBorderColor", "chakraStyles", "onFocus", "onBlur", "menuIsOpen"];
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
function qK(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var XK = function(t) {
  var n, r = t.components, o = r === void 0 ? {} : r;
  t.theme;
  var i = t.size, a = t.colorScheme, s = a === void 0 ? "gray" : a, l = t.isDisabled, u = t.isInvalid, c = t.isReadOnly, d = t.required, f = t.isRequired, p = t.inputId, y = t.tagVariant, v = t.selectedOptionStyle, S = v === void 0 ? "color" : v, h = t.selectedOptionColorScheme, g = t.selectedOptionColor, b = t.variant, x = t.focusBorderColor, k = t.errorBorderColor, P = t.chakraStyles, T = P === void 0 ? {} : P, _ = t.onFocus, M = t.onBlur, I = t.menuIsOpen, D = qK(t, YK), G = ho(), H = G.components.Input.defaultProps.variant, L = OP({
    id: p,
    isDisabled: l,
    isInvalid: u,
    isRequired: f,
    isReadOnly: c,
    onFocus: _,
    onBlur: M
  }), W = I ?? (L.readOnly ? !1 : void 0), K = S, $ = ["color", "check"];
  $.includes(S) || (K = "color");
  var A = h || g || "blue";
  typeof A != "string" && (A = "blue");
  var z = td({
    // Allow overriding of custom components
    components: td({}, KK, o),
    // Custom select props
    colorScheme: s,
    size: i,
    tagVariant: y,
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
const QK = XK;
function wm() {
  return wm = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, wm.apply(this, arguments);
}
var ZK = /* @__PURE__ */ m.forwardRef(function(e, t) {
  var n = QK(e);
  return /* @__PURE__ */ re.createElement(eK, wm({
    ref: t
  }, n));
});
const JK = ZK;
function eY({ workflow: e }) {
  var c;
  const [t, n] = m.useState([]), [r, o] = m.useState(""), i = ((c = e.tags) == null ? void 0 : c.map((d) => ({
    value: d,
    label: d
  }))) ?? [], [a, s] = m.useState(i);
  if (m.useEffect(() => {
    Ie && n(Ie.listAll() ?? []);
  }, []), m.useEffect(() => {
    var d;
    s(
      ((d = e.tags) == null ? void 0 : d.map((f) => ({
        value: f,
        label: f
      }))) ?? []
    );
  }, [e.tags]), Ie == null)
    return alert("Error: TagsTable is not loaded"), null;
  const l = t.map((d) => ({
    value: d.name,
    label: d.name
  })), u = 37 * 5;
  return /* @__PURE__ */ w.jsxs(Rg, { isLazy: !0, children: [
    /* @__PURE__ */ w.jsx(Ig, { children: /* @__PURE__ */ w.jsx(Fn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ w.jsx(sT, { color: "#718096" }) }) }),
    /* @__PURE__ */ w.jsxs(Fg, { children: [
      /* @__PURE__ */ w.jsx($g, {}),
      /* @__PURE__ */ w.jsx(Dg, {}),
      /* @__PURE__ */ w.jsx(eT, { children: /* @__PURE__ */ w.jsx("b", { children: e.name }) }),
      /* @__PURE__ */ w.jsxs(Ag, { children: [
        /* @__PURE__ */ w.jsx(
          JK,
          {
            isMulti: !0,
            name: "tags",
            options: l,
            menuIsOpen: !0,
            value: a,
            onChange: (d) => {
              s(d), pm(e.id, {
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
                Fn,
                {
                  iconSpacing: 1,
                  leftIcon: /* @__PURE__ */ w.jsx(Lg, { size: 16 }),
                  colorScheme: "teal",
                  variant: "solid",
                  size: "xs",
                  px: 5,
                  isDisabled: r.length === 0,
                  onClick: () => {
                    Ie == null || Ie.upsert(r), n((Ie == null ? void 0 : Ie.listAll()) ?? []), o("");
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
function tY({
  isSelected: e,
  workflow: t,
  loadWorkflowID: n,
  setRecentFlow: r,
  handleCopyFlow: o
}) {
  const { colorMode: i } = wa(), a = (l) => {
    lH(l);
    const u = Ts();
    r(u);
  }, s = () => {
    o(t.json, `${t.name}_1`);
  };
  return /* @__PURE__ */ w.jsxs($t, { w: "100%", justify: "space-between", children: [
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
          bg: i === "light" ? "gray.200" : "#4A5568"
        },
        _active: {
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9"
        },
        children: [
          /* @__PURE__ */ w.jsx(oo, { fontWeight: "500", children: t.name ?? "untitled" }),
          /* @__PURE__ */ w.jsxs(oo, { color: "GrayText", ml: 2, fontSize: "sm", children: [
            "Updated: ",
            dT(t.updateTime)
          ] })
        ]
      }
    ),
    /* @__PURE__ */ w.jsx(WW, { cursor: "pointer", onClick: s }),
    /* @__PURE__ */ w.jsx(eY, { workflow: t }),
    /* @__PURE__ */ w.jsx(Rg, { isLazy: !0, children: ({ isOpen: l, onClose: u }) => /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx(Ig, { children: /* @__PURE__ */ w.jsx(lT, { color: "#F56565", cursor: "pointer" }) }),
      /* @__PURE__ */ w.jsxs(Fg, { children: [
        /* @__PURE__ */ w.jsx($g, {}),
        /* @__PURE__ */ w.jsx(Dg, {}),
        /* @__PURE__ */ w.jsxs(Ag, { children: [
          /* @__PURE__ */ w.jsx(oo, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
          /* @__PURE__ */ w.jsx(
            Fn,
            {
              colorScheme: "red",
              size: "sm",
              onClick: () => {
                a(t.id), u();
              },
              children: "Yes, delete"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
function nY() {
  const e = m.useRef(null), { setRecentFiles: t } = m.useContext(pT), n = async (o) => {
    const i = o.target.files;
    if (!i)
      return;
    const a = Array.from(i);
    console.log("filearr", a), await Promise.all(
      a.map((s) => r(s))
    ), t && t(Ts());
  }, r = async (o) => new Promise((i, a) => {
    const s = new FileReader();
    s.onload = (l) => {
      var u;
      try {
        const c = (u = l.target) == null ? void 0 : u.result;
        typeof c == "string" ? i(
          ec({
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
    Fn,
    {
      leftIcon: /* @__PURE__ */ w.jsx(HW, {}),
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
const ES = 6;
function rY({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n,
  handleCopyFlow: r,
  flowID: o
}) {
  const [i, a] = m.useState([]), { curFlowID: s } = m.useContext(fT), [l, u] = m.useState(), [c, d] = m.useState(!1);
  m.useEffect(() => {
    const p = Ts();
    a(p);
  }, [o]);
  const f = (p) => {
    u(p), a(Ts().filter((y) => {
      var v;
      return (v = y.tags) == null ? void 0 : v.includes(p);
    }));
  };
  return /* @__PURE__ */ w.jsx(pT.Provider, { value: { setRecentFiles: a }, children: /* @__PURE__ */ w.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ w.jsxs(
    xW,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ w.jsx(El, {}),
        /* @__PURE__ */ w.jsxs(J2, { children: [
          /* @__PURE__ */ w.jsx(_l, { children: /* @__PURE__ */ w.jsxs($t, { alignItems: "center", justifyContent: "space-between", children: [
            /* @__PURE__ */ w.jsxs($t, { gap: 4, children: [
              /* @__PURE__ */ w.jsx(oo, { mr: 6, children: "Workflows" }),
              /* @__PURE__ */ w.jsx(
                Fn,
                {
                  leftIcon: /* @__PURE__ */ w.jsx(Lg, {}),
                  variant: "outline",
                  size: "sm",
                  colorScheme: "teal",
                  onClick: n,
                  children: "New"
                }
              ),
              /* @__PURE__ */ w.jsx(nY, {})
            ] }),
            /* @__PURE__ */ w.jsx($t, { alignItems: "center", children: /* @__PURE__ */ w.jsx(pH, {}) })
          ] }) }),
          /* @__PURE__ */ w.jsxs(Ol, { children: [
            /* @__PURE__ */ w.jsxs($t, { spacing: 2, wrap: "wrap", mb: 6, children: [
              l != null && /* @__PURE__ */ w.jsx(
                tl,
                {
                  "aria-label": "Close",
                  size: "sm",
                  icon: /* @__PURE__ */ w.jsx(QW, {}),
                  onClick: () => {
                    u(void 0), a(Ts());
                  }
                }
              ),
              Ie == null ? void 0 : Ie.listAll().slice(0, c ? void 0 : ES).map((p) => /* @__PURE__ */ w.jsx(
                Fn,
                {
                  variant: "solid",
                  width: "auto",
                  flexShrink: 0,
                  size: "sm",
                  py: 4,
                  onClick: () => f(p.name),
                  isActive: l === p.name,
                  children: p.name
                }
              )),
              ((Ie == null ? void 0 : Ie.listAll().length) ?? 0) > ES && /* @__PURE__ */ w.jsx(
                tl,
                {
                  "aria-label": "Show-all-tags",
                  size: "sm",
                  icon: c ? /* @__PURE__ */ w.jsx(BW, {}) : /* @__PURE__ */ w.jsx(VW, {}),
                  onClick: () => d(!c)
                }
              )
            ] }),
            i.map((p) => /* @__PURE__ */ w.jsx(
              tY,
              {
                isSelected: p.id === s,
                workflow: p,
                loadWorkflowID: t,
                setRecentFlow: a,
                handleCopyFlow: r
              }
            ))
          ] })
        ] })
      ]
    }
  ) }) });
}
const oY = {
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
function iY() {
  m.useState([]);
  const e = m.useRef({}), [t, n] = m.useState(null), [r, o] = m.useState("root"), [i, a] = m.useState(!0), [s, l] = m.useState(null), u = m.useRef(null), { colorMode: c, toggleColorMode: d } = wa(), f = (b) => {
    u.current = b, l(b);
  }, p = async () => {
    var k;
    const b = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(P) {
      },
      async addCustomNodeDefs(P) {
        e.current = P;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Ea.registerExtension(b);
    try {
      await sH();
    } catch (P) {
      console.error("error loading db", P);
    }
    a(!1);
    const x = localStorage.getItem("curFlowID");
    if (x)
      f(x), Pe && n(((k = Pe[x]) == null ? void 0 : k.name) ?? "");
    else {
      const P = localStorage.getItem("workflow"), T = ec({ json: P ?? "" });
      f(T.id), n(T.name ?? "");
    }
  };
  m.useEffect(() => {
    p(), setInterval(() => {
      if (u.current != null) {
        const b = JSON.stringify(Ea.graph.serialize());
        localStorage.setItem("curFlowID", u.current), b != null && pm(u.current, {
          json: b
        });
      }
    }, 1e3);
  }, []);
  const y = (b) => {
    u.current != null && pm(u.current, {
      name: b
    });
  }, v = m.useCallback(
    jM(y, 700),
    []
  ), S = (b) => {
    if (Pe == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    f(b);
    const x = Pe[b];
    if (x == null) {
      alert("Error: Workflow not found! id: " + b);
      return;
    }
    Ea.loadGraphData(JSON.parse(x.json)), n(x.name), o("root");
  }, h = () => {
    const b = oY, x = ec({ json: JSON.stringify(b) });
    f(x.id), n(x.name), Ea.loadGraphData(b);
  }, g = (b, x) => {
    const k = ec({ json: b, name: x });
    f(k.id), n(k.name), Ea.loadGraphData(JSON.parse(b));
  };
  return i ? null : /* @__PURE__ */ w.jsx(fT.Provider, { value: { curFlowID: s }, children: /* @__PURE__ */ w.jsxs(
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
        /* @__PURE__ */ w.jsxs(
          $t,
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
              /* @__PURE__ */ w.jsxs($t, { children: [
                /* @__PURE__ */ w.jsx(
                  Fn,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => o("recentFlows"),
                    children: /* @__PURE__ */ w.jsxs($t, { gap: 1, children: [
                      /* @__PURE__ */ w.jsx(UW, { size: 21 }),
                      /* @__PURE__ */ w.jsx(XW, { size: 8 })
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
                    onClick: () => h(),
                    children: /* @__PURE__ */ w.jsxs($t, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ w.jsx(Lg, { size: 16, color: "white" }),
                      /* @__PURE__ */ w.jsx(oo, { color: "white", fontSize: "sm", children: "New" })
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
                    onChange: (b) => {
                      n(b.target.value), v(b.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ w.jsx($t, { children: /* @__PURE__ */ w.jsx(Fn, { onClick: d, variant: "link", children: c === "light" ? /* @__PURE__ */ w.jsx(YW, { size: 20 }) : /* @__PURE__ */ w.jsx(qW, { size: 20 }) }) })
            ]
          }
        ),
        r === "recentFlows" && /* @__PURE__ */ w.jsx(
          rY,
          {
            onclose: () => o("root"),
            loadWorkflowID: S,
            onClickNewFlow: () => {
              h(), o("root");
            },
            handleCopyFlow: g,
            flowID: s
          }
        )
      ]
    }
  ) });
}
const UT = document.createElement("div");
document.body.append(UT);
const aY = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, sY = Wz({ config: aY });
Dp.createRoot(UT).render(
  /* @__PURE__ */ w.jsx(re.StrictMode, { children: /* @__PURE__ */ w.jsxs(sB, { children: [
    /* @__PURE__ */ w.jsx(eR, { initialColorMode: sY.config.initialColorMode }),
    /* @__PURE__ */ w.jsx(iY, {})
  ] }) })
);
const Cm = document.body, lY = { attributes: !0, attributeFilter: ["class"] }, uY = function(e, t) {
  for (const n of e)
    if (n.type === "attributes" && n.attributeName === "class")
      for (const r of Cm.classList)
        r.includes("chakra") && Cm.classList.remove(r);
}, cY = new MutationObserver(uY);
cY.observe(Cm, lY);
