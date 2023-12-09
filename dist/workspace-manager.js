import { app as Nl } from "/scripts/app.js";
function i_(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => n[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var N1 = { exports: {} }, cc = {}, V1 = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms = Symbol.for("react.element"), a_ = Symbol.for("react.portal"), s_ = Symbol.for("react.fragment"), l_ = Symbol.for("react.strict_mode"), u_ = Symbol.for("react.profiler"), c_ = Symbol.for("react.provider"), d_ = Symbol.for("react.context"), f_ = Symbol.for("react.forward_ref"), p_ = Symbol.for("react.suspense"), h_ = Symbol.for("react.memo"), m_ = Symbol.for("react.lazy"), Dv = Symbol.iterator;
function v_(e) {
  return e === null || typeof e != "object" ? null : (e = Dv && e[Dv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, U1 = Object.assign, H1 = {};
function Wi(e, t, r) {
  this.props = e, this.context = t, this.refs = H1, this.updater = r || W1;
}
Wi.prototype.isReactComponent = {};
Wi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function G1() {
}
G1.prototype = Wi.prototype;
function ch(e, t, r) {
  this.props = e, this.context = t, this.refs = H1, this.updater = r || W1;
}
var dh = ch.prototype = new G1();
dh.constructor = ch;
U1(dh, Wi.prototype);
dh.isPureReactComponent = !0;
var jv = Array.isArray, K1 = Object.prototype.hasOwnProperty, fh = { current: null }, Y1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q1(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      K1.call(t, n) && !Y1.hasOwnProperty(n) && (o[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1)
    o.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++)
      l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in s = e.defaultProps, s)
      o[n] === void 0 && (o[n] = s[n]);
  return { $$typeof: Ms, type: e, key: i, ref: a, props: o, _owner: fh.current };
}
function g_(e, t) {
  return { $$typeof: Ms, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ph(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ms;
}
function y_(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Lv = /\/+/g;
function md(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? y_("" + e.key) : t.toString(36);
}
function Vl(e, t, r, n, o) {
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
          case Ms:
          case a_:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + md(a, 0) : n, jv(o) ? (r = "", e != null && (r = e.replace(Lv, "$&/") + "/"), Vl(o, t, r, "", function(u) {
      return u;
    })) : o != null && (ph(o) && (o = g_(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Lv, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", jv(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + md(i, s);
      a += Vl(i, t, r, l, o);
    }
  else if (l = v_(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + md(i, s++), a += Vl(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function il(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return Vl(e, n, "", "", function(i) {
    return t.call(r, i, o++);
  }), n;
}
function b_(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
    }, function(r) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var xt = { current: null }, Wl = { transition: null }, x_ = { ReactCurrentDispatcher: xt, ReactCurrentBatchConfig: Wl, ReactCurrentOwner: fh };
te.Children = { map: il, forEach: function(e, t, r) {
  il(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return il(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return il(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ph(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Wi;
te.Fragment = s_;
te.Profiler = u_;
te.PureComponent = ch;
te.StrictMode = l_;
te.Suspense = p_;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x_;
te.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = U1({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = fh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      K1.call(t, l) && !Y1.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1)
    n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++)
      s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Ms, type: e.type, key: o, ref: i, props: n, _owner: a };
};
te.createContext = function(e) {
  return e = { $$typeof: d_, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: c_, _context: e }, e.Consumer = e;
};
te.createElement = q1;
te.createFactory = function(e) {
  var t = q1.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: f_, render: e };
};
te.isValidElement = ph;
te.lazy = function(e) {
  return { $$typeof: m_, _payload: { _status: -1, _result: e }, _init: b_ };
};
te.memo = function(e, t) {
  return { $$typeof: h_, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function(e) {
  var t = Wl.transition;
  Wl.transition = {};
  try {
    e();
  } finally {
    Wl.transition = t;
  }
};
te.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function(e, t) {
  return xt.current.useCallback(e, t);
};
te.useContext = function(e) {
  return xt.current.useContext(e);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(e) {
  return xt.current.useDeferredValue(e);
};
te.useEffect = function(e, t) {
  return xt.current.useEffect(e, t);
};
te.useId = function() {
  return xt.current.useId();
};
te.useImperativeHandle = function(e, t, r) {
  return xt.current.useImperativeHandle(e, t, r);
};
te.useInsertionEffect = function(e, t) {
  return xt.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function(e, t) {
  return xt.current.useLayoutEffect(e, t);
};
te.useMemo = function(e, t) {
  return xt.current.useMemo(e, t);
};
te.useReducer = function(e, t, r) {
  return xt.current.useReducer(e, t, r);
};
te.useRef = function(e) {
  return xt.current.useRef(e);
};
te.useState = function(e) {
  return xt.current.useState(e);
};
te.useSyncExternalStore = function(e, t, r) {
  return xt.current.useSyncExternalStore(e, t, r);
};
te.useTransition = function() {
  return xt.current.useTransition();
};
te.version = "18.2.0";
V1.exports = te;
var b = V1.exports;
const bo = /* @__PURE__ */ Rs(b), Bv = /* @__PURE__ */ i_({
  __proto__: null,
  default: bo
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S_ = b, w_ = Symbol.for("react.element"), k_ = Symbol.for("react.fragment"), C_ = Object.prototype.hasOwnProperty, __ = S_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function X1(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    C_.call(t, n) && !P_.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: w_, type: e, key: i, ref: a, props: o, _owner: __.current };
}
cc.Fragment = k_;
cc.jsx = X1;
cc.jsxs = X1;
N1.exports = cc;
var C = N1.exports, Rf = {}, Q1 = { exports: {} }, Wt = {}, Z1 = { exports: {} }, J1 = {};
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
  function t(I, L) {
    var N = I.length;
    I.push(L);
    e:
      for (; 0 < N; ) {
        var B = N - 1 >>> 1, X = I[B];
        if (0 < o(X, L))
          I[B] = L, I[N] = X, N = B;
        else
          break e;
      }
  }
  function r(I) {
    return I.length === 0 ? null : I[0];
  }
  function n(I) {
    if (I.length === 0)
      return null;
    var L = I[0], N = I.pop();
    if (N !== L) {
      I[0] = N;
      e:
        for (var B = 0, X = I.length, H = X >>> 1; B < H; ) {
          var Q = 2 * (B + 1) - 1, Pe = I[Q], se = Q + 1, ge = I[se];
          if (0 > o(Pe, N))
            se < X && 0 > o(ge, Pe) ? (I[B] = ge, I[se] = N, B = se) : (I[B] = Pe, I[Q] = N, B = Q);
          else if (se < X && 0 > o(ge, N))
            I[B] = ge, I[se] = N, B = se;
          else
            break e;
        }
    }
    return L;
  }
  function o(I, L) {
    var N = I.sortIndex - L.sortIndex;
    return N !== 0 ? N : I.id - L.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, v = !1, g = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(I) {
    for (var L = r(u); L !== null; ) {
      if (L.callback === null)
        n(u);
      else if (L.startTime <= I)
        n(u), L.sortIndex = L.expirationTime, t(l, L);
      else
        break;
      L = r(u);
    }
  }
  function w(I) {
    if (g = !1, y(I), !v)
      if (r(l) !== null)
        v = !0, Y(k);
      else {
        var L = r(u);
        L !== null && ee(w, L.startTime - I);
      }
  }
  function k(I, L) {
    v = !1, g && (g = !1, m($), $ = -1), p = !0;
    var N = f;
    try {
      for (y(L), d = r(l); d !== null && (!(d.expirationTime > L) || I && !j()); ) {
        var B = d.callback;
        if (typeof B == "function") {
          d.callback = null, f = d.priorityLevel;
          var X = B(d.expirationTime <= L);
          L = e.unstable_now(), typeof X == "function" ? d.callback = X : d === r(l) && n(l), y(L);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var H = !0;
      else {
        var Q = r(u);
        Q !== null && ee(w, Q.startTime - L), H = !1;
      }
      return H;
    } finally {
      d = null, f = N, p = !1;
    }
  }
  var E = !1, _ = null, $ = -1, R = 5, M = -1;
  function j() {
    return !(e.unstable_now() - M < R);
  }
  function q() {
    if (_ !== null) {
      var I = e.unstable_now();
      M = I;
      var L = !0;
      try {
        L = _(!0, I);
      } finally {
        L ? G() : (E = !1, _ = null);
      }
    } else
      E = !1;
  }
  var G;
  if (typeof h == "function")
    G = function() {
      h(q);
    };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(), Z = K.port2;
    K.port1.onmessage = q, G = function() {
      Z.postMessage(null);
    };
  } else
    G = function() {
      x(q, 0);
    };
  function Y(I) {
    _ = I, E || (E = !0, G());
  }
  function ee(I, L) {
    $ = x(function() {
      I(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    v || p || (v = !0, Y(k));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < I ? Math.floor(1e3 / I) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(I) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = f;
    }
    var N = f;
    f = L;
    try {
      return I();
    } finally {
      f = N;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, L) {
    switch (I) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        I = 3;
    }
    var N = f;
    f = I;
    try {
      return L();
    } finally {
      f = N;
    }
  }, e.unstable_scheduleCallback = function(I, L, N) {
    var B = e.unstable_now();
    switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? B + N : B) : N = B, I) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = N + X, I = { id: c++, callback: L, priorityLevel: I, startTime: N, expirationTime: X, sortIndex: -1 }, N > B ? (I.sortIndex = N, t(u, I), r(l) === null && I === r(u) && (g ? (m($), $ = -1) : g = !0, ee(w, N - B))) : (I.sortIndex = X, t(l, I), v || p || (v = !0, Y(k))), I;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(I) {
    var L = f;
    return function() {
      var N = f;
      f = L;
      try {
        return I.apply(this, arguments);
      } finally {
        f = N;
      }
    };
  };
})(J1);
Z1.exports = J1;
var T_ = Z1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eb = b, Bt = T_;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var tb = /* @__PURE__ */ new Set(), Qa = {};
function Eo(e, t) {
  Ti(e, t), Ti(e + "Capture", t);
}
function Ti(e, t) {
  for (Qa[e] = t, e = 0; e < t.length; e++)
    tb.add(t[e]);
}
var en = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mf = Object.prototype.hasOwnProperty, E_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Nv = {}, Vv = {};
function $_(e) {
  return Mf.call(Vv, e) ? !0 : Mf.call(Nv, e) ? !1 : E_.test(e) ? Vv[e] = !0 : (Nv[e] = !0, !1);
}
function A_(e, t, r, n) {
  if (r !== null && r.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function R_(e, t, r, n) {
  if (t === null || typeof t > "u" || A_(e, t, r, n))
    return !0;
  if (n)
    return !1;
  if (r !== null)
    switch (r.type) {
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
function St(e, t, r, n, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var at = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  at[e] = new St(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  at[t] = new St(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  at[e] = new St(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  at[e] = new St(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  at[e] = new St(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  at[e] = new St(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  at[e] = new St(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  at[e] = new St(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  at[e] = new St(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hh = /[\-:]([a-z])/g;
function mh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hh,
    mh
  );
  at[t] = new St(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hh, mh);
  at[t] = new St(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hh, mh);
  at[t] = new St(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  at[e] = new St(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
at.xlinkHref = new St("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  at[e] = new St(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vh(e, t, r, n) {
  var o = at.hasOwnProperty(t) ? at[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (R_(t, r, o, n) && (r = null), n || o === null ? $_(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var ln = eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, al = Symbol.for("react.element"), Uo = Symbol.for("react.portal"), Ho = Symbol.for("react.fragment"), gh = Symbol.for("react.strict_mode"), Of = Symbol.for("react.profiler"), rb = Symbol.for("react.provider"), nb = Symbol.for("react.context"), yh = Symbol.for("react.forward_ref"), If = Symbol.for("react.suspense"), zf = Symbol.for("react.suspense_list"), bh = Symbol.for("react.memo"), vn = Symbol.for("react.lazy"), ob = Symbol.for("react.offscreen"), Wv = Symbol.iterator;
function ra(e) {
  return e === null || typeof e != "object" ? null : (e = Wv && e[Wv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var De = Object.assign, vd;
function ya(e) {
  if (vd === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      vd = t && t[1] || "";
    }
  return `
` + vd + e;
}
var gd = !1;
function yd(e, t) {
  if (!e || gd)
    return "";
  gd = !0;
  var r = Error.prepareStackTrace;
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
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = n.stack.split(`
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
    gd = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? ya(e) : "";
}
function M_(e) {
  switch (e.tag) {
    case 5:
      return ya(e.type);
    case 16:
      return ya("Lazy");
    case 13:
      return ya("Suspense");
    case 19:
      return ya("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = yd(e.type, !1), e;
    case 11:
      return e = yd(e.type.render, !1), e;
    case 1:
      return e = yd(e.type, !0), e;
    default:
      return "";
  }
}
function Ff(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Ho:
      return "Fragment";
    case Uo:
      return "Portal";
    case Of:
      return "Profiler";
    case gh:
      return "StrictMode";
    case If:
      return "Suspense";
    case zf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case nb:
        return (e.displayName || "Context") + ".Consumer";
      case rb:
        return (e._context.displayName || "Context") + ".Provider";
      case yh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case bh:
        return t = e.displayName || null, t !== null ? t : Ff(e.type) || "Memo";
      case vn:
        t = e._payload, e = e._init;
        try {
          return Ff(e(t));
        } catch {
        }
    }
  return null;
}
function O_(e) {
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
      return Ff(t);
    case 8:
      return t === gh ? "StrictMode" : "Mode";
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
function Fn(e) {
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
function ib(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function I_(e) {
  var t = ib(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var o = r.get, i = r.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(a) {
      n = "" + a, i.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(a) {
      n = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function sl(e) {
  e._valueTracker || (e._valueTracker = I_(e));
}
function ab(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = ib(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function yu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Df(e, t) {
  var r = t.checked;
  return De({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Uv(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Fn(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sb(e, t) {
  t = t.checked, t != null && vh(e, "checked", t, !1);
}
function jf(e, t) {
  sb(e, t);
  var r = Fn(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Lf(e, t.type, r) : t.hasOwnProperty("defaultValue") && Lf(e, t.type, Fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Hv(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Lf(e, t, r) {
  (t !== "number" || yu(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var ba = Array.isArray;
function pi(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Fn(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        e[o].selected = !0, n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bf(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(O(91));
  return De({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Gv(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(O(92));
      if (ba(r)) {
        if (1 < r.length)
          throw Error(O(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: Fn(r) };
}
function lb(e, t) {
  var r = Fn(t.value), n = Fn(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Kv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ub(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Nf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ub(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ll, cb = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (ll = ll || document.createElement("div"), ll.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ll.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Za(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $a = {
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
}, z_ = ["Webkit", "ms", "Moz", "O"];
Object.keys($a).forEach(function(e) {
  z_.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), $a[t] = $a[e];
  });
});
function db(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || $a.hasOwnProperty(e) && $a[e] ? ("" + t).trim() : t + "px";
}
function fb(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = db(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var F_ = De({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vf(e, t) {
  if (t) {
    if (F_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(O(62));
  }
}
function Wf(e, t) {
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
var Uf = null;
function xh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hf = null, hi = null, mi = null;
function Yv(e) {
  if (e = zs(e)) {
    if (typeof Hf != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = mc(t), Hf(e.stateNode, e.type, t));
  }
}
function pb(e) {
  hi ? mi ? mi.push(e) : mi = [e] : hi = e;
}
function hb() {
  if (hi) {
    var e = hi, t = mi;
    if (mi = hi = null, Yv(e), t)
      for (e = 0; e < t.length; e++)
        Yv(t[e]);
  }
}
function mb(e, t) {
  return e(t);
}
function vb() {
}
var bd = !1;
function gb(e, t, r) {
  if (bd)
    return e(t, r);
  bd = !0;
  try {
    return mb(e, t, r);
  } finally {
    bd = !1, (hi !== null || mi !== null) && (vb(), hb());
  }
}
function Ja(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = mc(r);
  if (n === null)
    return null;
  r = n[t];
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (r && typeof r != "function")
    throw Error(O(231, t, typeof r));
  return r;
}
var Gf = !1;
if (en)
  try {
    var na = {};
    Object.defineProperty(na, "passive", { get: function() {
      Gf = !0;
    } }), window.addEventListener("test", na, na), window.removeEventListener("test", na, na);
  } catch {
    Gf = !1;
  }
function D_(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Aa = !1, bu = null, xu = !1, Kf = null, j_ = { onError: function(e) {
  Aa = !0, bu = e;
} };
function L_(e, t, r, n, o, i, a, s, l) {
  Aa = !1, bu = null, D_.apply(j_, arguments);
}
function B_(e, t, r, n, o, i, a, s, l) {
  if (L_.apply(this, arguments), Aa) {
    if (Aa) {
      var u = bu;
      Aa = !1, bu = null;
    } else
      throw Error(O(198));
    xu || (xu = !0, Kf = u);
  }
}
function $o(e) {
  var t = e, r = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (r = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function yb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function qv(e) {
  if ($o(e) !== e)
    throw Error(O(188));
}
function N_(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $o(e), t === null)
      throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null)
      break;
    var i = o.alternate;
    if (i === null) {
      if (n = o.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r)
          return qv(o), e;
        if (i === n)
          return qv(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (r.return !== n.return)
      r = o, n = i;
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          a = !0, r = o, n = i;
          break;
        }
        if (s === n) {
          a = !0, n = o, r = i;
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            a = !0, r = i, n = o;
            break;
          }
          if (s === n) {
            a = !0, n = i, r = o;
            break;
          }
          s = s.sibling;
        }
        if (!a)
          throw Error(O(189));
      }
    }
    if (r.alternate !== n)
      throw Error(O(190));
  }
  if (r.tag !== 3)
    throw Error(O(188));
  return r.stateNode.current === r ? e : t;
}
function bb(e) {
  return e = N_(e), e !== null ? xb(e) : null;
}
function xb(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = xb(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Sb = Bt.unstable_scheduleCallback, Xv = Bt.unstable_cancelCallback, V_ = Bt.unstable_shouldYield, W_ = Bt.unstable_requestPaint, Be = Bt.unstable_now, U_ = Bt.unstable_getCurrentPriorityLevel, Sh = Bt.unstable_ImmediatePriority, wb = Bt.unstable_UserBlockingPriority, Su = Bt.unstable_NormalPriority, H_ = Bt.unstable_LowPriority, kb = Bt.unstable_IdlePriority, dc = null, $r = null;
function G_(e) {
  if ($r && typeof $r.onCommitFiberRoot == "function")
    try {
      $r.onCommitFiberRoot(dc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var vr = Math.clz32 ? Math.clz32 : q_, K_ = Math.log, Y_ = Math.LN2;
function q_(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (K_(e) / Y_ | 0) | 0;
}
var ul = 64, cl = 4194304;
function xa(e) {
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
function wu(e, t) {
  var r = e.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, o = e.suspendedLanes, i = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? n = xa(s) : (i &= a, i !== 0 && (n = xa(i)));
  } else
    a = r & ~o, a !== 0 ? n = xa(a) : i !== 0 && (n = xa(i));
  if (n === 0)
    return 0;
  if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= n; 0 < t; )
      r = 31 - vr(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function X_(e, t) {
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
function Q_(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - vr(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = X_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Yf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Cb() {
  var e = ul;
  return ul <<= 1, !(ul & 4194240) && (ul = 64), e;
}
function xd(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Os(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vr(t), e[t] = r;
}
function Z_(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - vr(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function wh(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - vr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var me = 0;
function _b(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Pb, kh, Tb, Eb, $b, qf = !1, dl = [], _n = null, Pn = null, Tn = null, es = /* @__PURE__ */ new Map(), ts = /* @__PURE__ */ new Map(), bn = [], J_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Qv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _n = null;
      break;
    case "dragenter":
    case "dragleave":
      Pn = null;
      break;
    case "mouseover":
    case "mouseout":
      Tn = null;
      break;
    case "pointerover":
    case "pointerout":
      es.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ts.delete(t.pointerId);
  }
}
function oa(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = zs(t), t !== null && kh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function eP(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return _n = oa(_n, e, t, r, n, o), !0;
    case "dragenter":
      return Pn = oa(Pn, e, t, r, n, o), !0;
    case "mouseover":
      return Tn = oa(Tn, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return es.set(i, oa(es.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ts.set(i, oa(ts.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function Ab(e) {
  var t = oo(e.target);
  if (t !== null) {
    var r = $o(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = yb(r), t !== null) {
          e.blockedOn = t, $b(e.priority, function() {
            Tb(r);
          });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ul(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Xf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Uf = n, r.target.dispatchEvent(n), Uf = null;
    } else
      return t = zs(r), t !== null && kh(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function Zv(e, t, r) {
  Ul(e) && r.delete(t);
}
function tP() {
  qf = !1, _n !== null && Ul(_n) && (_n = null), Pn !== null && Ul(Pn) && (Pn = null), Tn !== null && Ul(Tn) && (Tn = null), es.forEach(Zv), ts.forEach(Zv);
}
function ia(e, t) {
  e.blockedOn === t && (e.blockedOn = null, qf || (qf = !0, Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority, tP)));
}
function rs(e) {
  function t(o) {
    return ia(o, e);
  }
  if (0 < dl.length) {
    ia(dl[0], e);
    for (var r = 1; r < dl.length; r++) {
      var n = dl[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (_n !== null && ia(_n, e), Pn !== null && ia(Pn, e), Tn !== null && ia(Tn, e), es.forEach(t), ts.forEach(t), r = 0; r < bn.length; r++)
    n = bn[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < bn.length && (r = bn[0], r.blockedOn === null); )
    Ab(r), r.blockedOn === null && bn.shift();
}
var vi = ln.ReactCurrentBatchConfig, ku = !0;
function rP(e, t, r, n) {
  var o = me, i = vi.transition;
  vi.transition = null;
  try {
    me = 1, Ch(e, t, r, n);
  } finally {
    me = o, vi.transition = i;
  }
}
function nP(e, t, r, n) {
  var o = me, i = vi.transition;
  vi.transition = null;
  try {
    me = 4, Ch(e, t, r, n);
  } finally {
    me = o, vi.transition = i;
  }
}
function Ch(e, t, r, n) {
  if (ku) {
    var o = Xf(e, t, r, n);
    if (o === null)
      Ad(e, t, n, Cu, r), Qv(e, n);
    else if (eP(o, e, t, r, n))
      n.stopPropagation();
    else if (Qv(e, n), t & 4 && -1 < J_.indexOf(e)) {
      for (; o !== null; ) {
        var i = zs(o);
        if (i !== null && Pb(i), i = Xf(e, t, r, n), i === null && Ad(e, t, n, Cu, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      Ad(e, t, n, null, r);
  }
}
var Cu = null;
function Xf(e, t, r, n) {
  if (Cu = null, e = xh(n), e = oo(e), e !== null)
    if (t = $o(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = yb(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Cu = e, null;
}
function Rb(e) {
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
      switch (U_()) {
        case Sh:
          return 1;
        case wb:
          return 4;
        case Su:
        case H_:
          return 16;
        case kb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kn = null, _h = null, Hl = null;
function Mb() {
  if (Hl)
    return Hl;
  var e, t = _h, r = t.length, n, o = "value" in kn ? kn.value : kn.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return Hl = o.slice(e, 1 < n ? 1 - n : void 0);
}
function Gl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function fl() {
  return !0;
}
function Jv() {
  return !1;
}
function Ut(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fl : Jv, this.isPropagationStopped = Jv, this;
  }
  return De(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = fl);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = fl);
  }, persist: function() {
  }, isPersistent: fl }), t;
}
var Ui = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ph = Ut(Ui), Is = De({}, Ui, { view: 0, detail: 0 }), oP = Ut(Is), Sd, wd, aa, fc = De({}, Is, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Th, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== aa && (aa && e.type === "mousemove" ? (Sd = e.screenX - aa.screenX, wd = e.screenY - aa.screenY) : wd = Sd = 0, aa = e), Sd);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : wd;
} }), eg = Ut(fc), iP = De({}, fc, { dataTransfer: 0 }), aP = Ut(iP), sP = De({}, Is, { relatedTarget: 0 }), kd = Ut(sP), lP = De({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uP = Ut(lP), cP = De({}, Ui, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), dP = Ut(cP), fP = De({}, Ui, { data: 0 }), tg = Ut(fP), pP = {
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
}, hP = {
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
}, mP = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function vP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mP[e]) ? !!t[e] : !1;
}
function Th() {
  return vP;
}
var gP = De({}, Is, { key: function(e) {
  if (e.key) {
    var t = pP[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hP[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Th, charCode: function(e) {
  return e.type === "keypress" ? Gl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), yP = Ut(gP), bP = De({}, fc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rg = Ut(bP), xP = De({}, Is, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Th }), SP = Ut(xP), wP = De({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), kP = Ut(wP), CP = De({}, fc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _P = Ut(CP), PP = [9, 13, 27, 32], Eh = en && "CompositionEvent" in window, Ra = null;
en && "documentMode" in document && (Ra = document.documentMode);
var TP = en && "TextEvent" in window && !Ra, Ob = en && (!Eh || Ra && 8 < Ra && 11 >= Ra), ng = " ", og = !1;
function Ib(e, t) {
  switch (e) {
    case "keyup":
      return PP.indexOf(t.keyCode) !== -1;
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
function zb(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Go = !1;
function EP(e, t) {
  switch (e) {
    case "compositionend":
      return zb(t);
    case "keypress":
      return t.which !== 32 ? null : (og = !0, ng);
    case "textInput":
      return e = t.data, e === ng && og ? null : e;
    default:
      return null;
  }
}
function $P(e, t) {
  if (Go)
    return e === "compositionend" || !Eh && Ib(e, t) ? (e = Mb(), Hl = _h = kn = null, Go = !1, e) : null;
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
      return Ob && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var AP = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ig(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!AP[e.type] : t === "textarea";
}
function Fb(e, t, r, n) {
  pb(n), t = _u(t, "onChange"), 0 < t.length && (r = new Ph("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Ma = null, ns = null;
function RP(e) {
  Kb(e, 0);
}
function pc(e) {
  var t = qo(e);
  if (ab(t))
    return e;
}
function MP(e, t) {
  if (e === "change")
    return t;
}
var Db = !1;
if (en) {
  var Cd;
  if (en) {
    var _d = "oninput" in document;
    if (!_d) {
      var ag = document.createElement("div");
      ag.setAttribute("oninput", "return;"), _d = typeof ag.oninput == "function";
    }
    Cd = _d;
  } else
    Cd = !1;
  Db = Cd && (!document.documentMode || 9 < document.documentMode);
}
function sg() {
  Ma && (Ma.detachEvent("onpropertychange", jb), ns = Ma = null);
}
function jb(e) {
  if (e.propertyName === "value" && pc(ns)) {
    var t = [];
    Fb(t, ns, e, xh(e)), gb(RP, t);
  }
}
function OP(e, t, r) {
  e === "focusin" ? (sg(), Ma = t, ns = r, Ma.attachEvent("onpropertychange", jb)) : e === "focusout" && sg();
}
function IP(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pc(ns);
}
function zP(e, t) {
  if (e === "click")
    return pc(t);
}
function FP(e, t) {
  if (e === "input" || e === "change")
    return pc(t);
}
function DP(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var yr = typeof Object.is == "function" ? Object.is : DP;
function os(e, t) {
  if (yr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Mf.call(t, o) || !yr(e[o], t[o]))
      return !1;
  }
  return !0;
}
function lg(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ug(e, t) {
  var r = lg(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = e + r.textContent.length, e <= t && n >= t)
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = lg(r);
  }
}
function Lb(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bb() {
  for (var e = window, t = yu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = yu(e.document);
  }
  return t;
}
function $h(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function jP(e) {
  var t = Bb(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Lb(r.ownerDocument.documentElement, r)) {
    if (n !== null && $h(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = ug(r, i);
        var a = ug(
          r,
          n
        );
        o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var LP = en && "documentMode" in document && 11 >= document.documentMode, Ko = null, Qf = null, Oa = null, Zf = !1;
function cg(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Zf || Ko == null || Ko !== yu(n) || (n = Ko, "selectionStart" in n && $h(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Oa && os(Oa, n) || (Oa = n, n = _u(Qf, "onSelect"), 0 < n.length && (t = new Ph("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Ko)));
}
function pl(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Yo = { animationend: pl("Animation", "AnimationEnd"), animationiteration: pl("Animation", "AnimationIteration"), animationstart: pl("Animation", "AnimationStart"), transitionend: pl("Transition", "TransitionEnd") }, Pd = {}, Nb = {};
en && (Nb = document.createElement("div").style, "AnimationEvent" in window || (delete Yo.animationend.animation, delete Yo.animationiteration.animation, delete Yo.animationstart.animation), "TransitionEvent" in window || delete Yo.transitionend.transition);
function hc(e) {
  if (Pd[e])
    return Pd[e];
  if (!Yo[e])
    return e;
  var t = Yo[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in Nb)
      return Pd[e] = t[r];
  return e;
}
var Vb = hc("animationend"), Wb = hc("animationiteration"), Ub = hc("animationstart"), Hb = hc("transitionend"), Gb = /* @__PURE__ */ new Map(), dg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bn(e, t) {
  Gb.set(e, t), Eo(t, [e]);
}
for (var Td = 0; Td < dg.length; Td++) {
  var Ed = dg[Td], BP = Ed.toLowerCase(), NP = Ed[0].toUpperCase() + Ed.slice(1);
  Bn(BP, "on" + NP);
}
Bn(Vb, "onAnimationEnd");
Bn(Wb, "onAnimationIteration");
Bn(Ub, "onAnimationStart");
Bn("dblclick", "onDoubleClick");
Bn("focusin", "onFocus");
Bn("focusout", "onBlur");
Bn(Hb, "onTransitionEnd");
Ti("onMouseEnter", ["mouseout", "mouseover"]);
Ti("onMouseLeave", ["mouseout", "mouseover"]);
Ti("onPointerEnter", ["pointerout", "pointerover"]);
Ti("onPointerLeave", ["pointerout", "pointerover"]);
Eo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Eo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Eo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Eo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Eo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Eo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), VP = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));
function fg(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, B_(n, t, void 0, e), e.currentTarget = null;
}
function Kb(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a], l = s.instance, u = s.currentTarget;
          if (s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          fg(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          fg(o, s, u), i = l;
        }
    }
  }
  if (xu)
    throw e = Kf, xu = !1, Kf = null, e;
}
function Te(e, t) {
  var r = t[np];
  r === void 0 && (r = t[np] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Yb(t, e, 2, !1), r.add(n));
}
function $d(e, t, r) {
  var n = 0;
  t && (n |= 4), Yb(r, e, n, t);
}
var hl = "_reactListening" + Math.random().toString(36).slice(2);
function is(e) {
  if (!e[hl]) {
    e[hl] = !0, tb.forEach(function(r) {
      r !== "selectionchange" && (VP.has(r) || $d(r, !1, e), $d(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hl] || (t[hl] = !0, $d("selectionchange", !1, t));
  }
}
function Yb(e, t, r, n) {
  switch (Rb(t)) {
    case 1:
      var o = rP;
      break;
    case 4:
      o = nP;
      break;
    default:
      o = Ch;
  }
  r = o.bind(null, t, r, e), o = void 0, !Gf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function Ad(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e:
      for (; ; ) {
        if (n === null)
          return;
        var a = n.tag;
        if (a === 3 || a === 4) {
          var s = n.stateNode.containerInfo;
          if (s === o || s.nodeType === 8 && s.parentNode === o)
            break;
          if (a === 4)
            for (a = n.return; a !== null; ) {
              var l = a.tag;
              if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (a = oo(s), a === null)
              return;
            if (l = a.tag, l === 5 || l === 6) {
              n = i = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
  gb(function() {
    var u = i, c = xh(r), d = [];
    e: {
      var f = Gb.get(e);
      if (f !== void 0) {
        var p = Ph, v = e;
        switch (e) {
          case "keypress":
            if (Gl(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = yP;
            break;
          case "focusin":
            v = "focus", p = kd;
            break;
          case "focusout":
            v = "blur", p = kd;
            break;
          case "beforeblur":
          case "afterblur":
            p = kd;
            break;
          case "click":
            if (r.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = eg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = aP;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = SP;
            break;
          case Vb:
          case Wb:
          case Ub:
            p = uP;
            break;
          case Hb:
            p = kP;
            break;
          case "scroll":
            p = oP;
            break;
          case "wheel":
            p = _P;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = dP;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = rg;
        }
        var g = (t & 4) !== 0, x = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var w = y.stateNode;
          if (y.tag === 5 && w !== null && (y = w, m !== null && (w = Ja(h, m), w != null && g.push(as(h, w, y)))), x)
            break;
          h = h.return;
        }
        0 < g.length && (f = new p(f, v, null, r, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && r !== Uf && (v = r.relatedTarget || r.fromElement) && (oo(v) || v[tn]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (v = r.relatedTarget || r.toElement, p = u, v = v ? oo(v) : null, v !== null && (x = $o(v), v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (p = null, v = u), p !== v)) {
          if (g = eg, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = rg, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = p == null ? f : qo(p), y = v == null ? f : qo(v), f = new g(w, h + "leave", p, r, c), f.target = x, f.relatedTarget = y, w = null, oo(c) === u && (g = new g(m, h + "enter", v, r, c), g.target = y, g.relatedTarget = x, w = g), x = w, p && v)
            t: {
              for (g = p, m = v, h = 0, y = g; y; y = Fo(y))
                h++;
              for (y = 0, w = m; w; w = Fo(w))
                y++;
              for (; 0 < h - y; )
                g = Fo(g), h--;
              for (; 0 < y - h; )
                m = Fo(m), y--;
              for (; h--; ) {
                if (g === m || m !== null && g === m.alternate)
                  break t;
                g = Fo(g), m = Fo(m);
              }
              g = null;
            }
          else
            g = null;
          p !== null && pg(d, f, p, g, !1), v !== null && x !== null && pg(d, x, v, g, !0);
        }
      }
      e: {
        if (f = u ? qo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = MP;
        else if (ig(f))
          if (Db)
            k = FP;
          else {
            k = IP;
            var E = OP;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = zP);
        if (k && (k = k(e, u))) {
          Fb(d, k, r, c);
          break e;
        }
        E && E(e, f, u), e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Lf(f, "number", f.value);
      }
      switch (E = u ? qo(u) : window, e) {
        case "focusin":
          (ig(E) || E.contentEditable === "true") && (Ko = E, Qf = u, Oa = null);
          break;
        case "focusout":
          Oa = Qf = Ko = null;
          break;
        case "mousedown":
          Zf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zf = !1, cg(d, r, c);
          break;
        case "selectionchange":
          if (LP)
            break;
        case "keydown":
        case "keyup":
          cg(d, r, c);
      }
      var _;
      if (Eh)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Go ? Ib(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ && (Ob && r.locale !== "ko" && (Go || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Go && (_ = Mb()) : (kn = c, _h = "value" in kn ? kn.value : kn.textContent, Go = !0)), E = _u(u, $), 0 < E.length && ($ = new tg($, e, null, r, c), d.push({ event: $, listeners: E }), _ ? $.data = _ : (_ = zb(r), _ !== null && ($.data = _)))), (_ = TP ? EP(e, r) : $P(e, r)) && (u = _u(u, "onBeforeInput"), 0 < u.length && (c = new tg("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    Kb(d, t);
  });
}
function as(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function _u(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ja(e, r), i != null && n.unshift(as(e, i, o)), i = Ja(e, t), i != null && n.push(as(e, i, o))), e = e.return;
  }
  return n;
}
function Fo(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pg(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Ja(r, i), l != null && a.unshift(as(r, l, s))) : o || (l = Ja(r, i), l != null && a.push(as(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var WP = /\r\n?/g, UP = /\u0000|\uFFFD/g;
function hg(e) {
  return (typeof e == "string" ? e : "" + e).replace(WP, `
`).replace(UP, "");
}
function ml(e, t, r) {
  if (t = hg(t), hg(e) !== t && r)
    throw Error(O(425));
}
function Pu() {
}
var Jf = null, ep = null;
function tp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var rp = typeof setTimeout == "function" ? setTimeout : void 0, HP = typeof clearTimeout == "function" ? clearTimeout : void 0, mg = typeof Promise == "function" ? Promise : void 0, GP = typeof queueMicrotask == "function" ? queueMicrotask : typeof mg < "u" ? function(e) {
  return mg.resolve(null).then(e).catch(KP);
} : rp;
function KP(e) {
  setTimeout(function() {
    throw e;
  });
}
function Rd(e, t) {
  var r = t, n = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8)
      if (r = o.data, r === "/$") {
        if (n === 0) {
          e.removeChild(o), rs(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  rs(t);
}
function En(e) {
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
function vg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hi = Math.random().toString(36).slice(2), Tr = "__reactFiber$" + Hi, ss = "__reactProps$" + Hi, tn = "__reactContainer$" + Hi, np = "__reactEvents$" + Hi, YP = "__reactListeners$" + Hi, qP = "__reactHandles$" + Hi;
function oo(e) {
  var t = e[Tr];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[tn] || r[Tr]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = vg(e); e !== null; ) {
          if (r = e[Tr])
            return r;
          e = vg(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function zs(e) {
  return e = e[Tr] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function mc(e) {
  return e[ss] || null;
}
var op = [], Xo = -1;
function Nn(e) {
  return { current: e };
}
function $e(e) {
  0 > Xo || (e.current = op[Xo], op[Xo] = null, Xo--);
}
function we(e, t) {
  Xo++, op[Xo] = e.current, e.current = t;
}
var Dn = {}, pt = Nn(Dn), Pt = Nn(!1), xo = Dn;
function Ei(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return Dn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in r)
    o[i] = t[i];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Tt(e) {
  return e = e.childContextTypes, e != null;
}
function Tu() {
  $e(Pt), $e(pt);
}
function gg(e, t, r) {
  if (pt.current !== Dn)
    throw Error(O(168));
  we(pt, t), we(Pt, r);
}
function qb(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(O(108, O_(e) || "Unknown", o));
  return De({}, r, n);
}
function Eu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dn, xo = pt.current, we(pt, e), we(Pt, Pt.current), !0;
}
function yg(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(O(169));
  r ? (e = qb(e, t, xo), n.__reactInternalMemoizedMergedChildContext = e, $e(Pt), $e(pt), we(pt, e)) : $e(Pt), we(Pt, r);
}
var Nr = null, vc = !1, Md = !1;
function Xb(e) {
  Nr === null ? Nr = [e] : Nr.push(e);
}
function XP(e) {
  vc = !0, Xb(e);
}
function Vn() {
  if (!Md && Nr !== null) {
    Md = !0;
    var e = 0, t = me;
    try {
      var r = Nr;
      for (me = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Nr = null, vc = !1;
    } catch (o) {
      throw Nr !== null && (Nr = Nr.slice(e + 1)), Sb(Sh, Vn), o;
    } finally {
      me = t, Md = !1;
    }
  }
  return null;
}
var Qo = [], Zo = 0, $u = null, Au = 0, Qt = [], Zt = 0, So = null, Hr = 1, Gr = "";
function Qn(e, t) {
  Qo[Zo++] = Au, Qo[Zo++] = $u, $u = e, Au = t;
}
function Qb(e, t, r) {
  Qt[Zt++] = Hr, Qt[Zt++] = Gr, Qt[Zt++] = So, So = e;
  var n = Hr;
  e = Gr;
  var o = 32 - vr(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - vr(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Hr = 1 << 32 - vr(t) + o | r << o | n, Gr = i + e;
  } else
    Hr = 1 << i | r << o | n, Gr = e;
}
function Ah(e) {
  e.return !== null && (Qn(e, 1), Qb(e, 1, 0));
}
function Rh(e) {
  for (; e === $u; )
    $u = Qo[--Zo], Qo[Zo] = null, Au = Qo[--Zo], Qo[Zo] = null;
  for (; e === So; )
    So = Qt[--Zt], Qt[Zt] = null, Gr = Qt[--Zt], Qt[Zt] = null, Hr = Qt[--Zt], Qt[Zt] = null;
}
var Dt = null, Ft = null, Oe = !1, hr = null;
function Zb(e, t) {
  var r = Jt(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function bg(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Dt = e, Ft = En(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Dt = e, Ft = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = So !== null ? { id: Hr, overflow: Gr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Jt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Dt = e, Ft = null, !0) : !1;
    default:
      return !1;
  }
}
function ip(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ap(e) {
  if (Oe) {
    var t = Ft;
    if (t) {
      var r = t;
      if (!bg(e, t)) {
        if (ip(e))
          throw Error(O(418));
        t = En(r.nextSibling);
        var n = Dt;
        t && bg(e, t) ? Zb(n, r) : (e.flags = e.flags & -4097 | 2, Oe = !1, Dt = e);
      }
    } else {
      if (ip(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, Oe = !1, Dt = e;
    }
  }
}
function xg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Dt = e;
}
function vl(e) {
  if (e !== Dt)
    return !1;
  if (!Oe)
    return xg(e), Oe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !tp(e.type, e.memoizedProps)), t && (t = Ft)) {
    if (ip(e))
      throw Jb(), Error(O(418));
    for (; t; )
      Zb(e, t), t = En(t.nextSibling);
  }
  if (xg(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ft = En(e.nextSibling);
              break e;
            }
            t--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ft = null;
    }
  } else
    Ft = Dt ? En(e.stateNode.nextSibling) : null;
  return !0;
}
function Jb() {
  for (var e = Ft; e; )
    e = En(e.nextSibling);
}
function $i() {
  Ft = Dt = null, Oe = !1;
}
function Mh(e) {
  hr === null ? hr = [e] : hr.push(e);
}
var QP = ln.ReactCurrentBatchConfig;
function fr(e, t) {
  if (e && e.defaultProps) {
    t = De({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ru = Nn(null), Mu = null, Jo = null, Oh = null;
function Ih() {
  Oh = Jo = Mu = null;
}
function zh(e) {
  var t = Ru.current;
  $e(Ru), e._currentValue = t;
}
function sp(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)
      break;
    e = e.return;
  }
}
function gi(e, t) {
  Mu = e, Oh = Jo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_t = !0), e.firstContext = null);
}
function or(e) {
  var t = e._currentValue;
  if (Oh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Jo === null) {
      if (Mu === null)
        throw Error(O(308));
      Jo = e, Mu.dependencies = { lanes: 0, firstContext: e };
    } else
      Jo = Jo.next = e;
  return t;
}
var io = null;
function Fh(e) {
  io === null ? io = [e] : io.push(e);
}
function ex(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Fh(t)) : (r.next = o.next, o.next = r), t.interleaved = r, rn(e, n);
}
function rn(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var gn = !1;
function Dh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function $n(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, ae & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, rn(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Fh(n)) : (t.next = o.next, o.next = t), n.interleaved = t, rn(e, r);
}
function Kl(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, wh(e, r);
  }
}
function Sg(e, t) {
  var r = e.updateQueue, n = e.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var o = null, i = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var a = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        i === null ? o = i = a : i = i.next = a, r = r.next;
      } while (r !== null);
      i === null ? o = i = t : i = i.next = t;
    } else
      o = i = t;
    r = { baseState: n.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: n.shared, effects: n.effects }, e.updateQueue = r;
    return;
  }
  e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
}
function Ou(e, t, r, n) {
  var o = e.updateQueue;
  gn = !1;
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
      if ((n & f) === f) {
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
          switch (f = t, p = r, g.tag) {
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
              d = De({}, d, f);
              break e;
            case 2:
              gn = !0;
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
    ko |= a, e.lanes = a, e.memoizedState = d;
  }
}
function wg(e, t, r) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var n = e[t], o = n.callback;
      if (o !== null) {
        if (n.callback = null, n = r, typeof o != "function")
          throw Error(O(191, o));
        o.call(n);
      }
    }
}
var rx = new eb.Component().refs;
function lp(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : De({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var gc = { isMounted: function(e) {
  return (e = e._reactInternals) ? $o(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = yt(), o = Rn(e), i = Xr(n, o);
  i.payload = t, r != null && (i.callback = r), t = $n(e, i, o), t !== null && (gr(t, e, o, n), Kl(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = yt(), o = Rn(e), i = Xr(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = $n(e, i, o), t !== null && (gr(t, e, o, n), Kl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = yt(), n = Rn(e), o = Xr(r, n);
  o.tag = 2, t != null && (o.callback = t), t = $n(e, o, n), t !== null && (gr(t, e, n, r), Kl(t, e, n));
} };
function kg(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !os(r, n) || !os(o, i) : !0;
}
function nx(e, t, r) {
  var n = !1, o = Dn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = or(i) : (o = Tt(t) ? xo : pt.current, n = t.contextTypes, i = (n = n != null) ? Ei(e, o) : Dn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = gc, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Cg(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && gc.enqueueReplaceState(t, t.state, null);
}
function up(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = rx, Dh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = or(i) : (i = Tt(t) ? xo : pt.current, o.context = Ei(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (lp(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && gc.enqueueReplaceState(o, o.state, null), Ou(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function sa(e, t, r) {
  if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1)
          throw Error(O(309));
        var n = r.stateNode;
      }
      if (!n)
        throw Error(O(147, e));
      var o = n, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === rx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!r._owner)
      throw Error(O(290, e));
  }
  return e;
}
function gl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function _g(e) {
  var t = e._init;
  return t(e._payload);
}
function ox(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? (m.deletions = [h], m.flags |= 16) : y.push(h);
    }
  }
  function r(m, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(m, h), h = h.sibling;
    return null;
  }
  function n(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function o(m, h) {
    return m = Mn(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < h ? (m.flags |= 2, h) : y) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, y, w) {
    return h === null || h.tag !== 6 ? (h = Ld(y, m.mode, w), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function l(m, h, y, w) {
    var k = y.type;
    return k === Ho ? c(m, h, y.props.children, w, y.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vn && _g(k) === h.type) ? (w = o(h, y.props), w.ref = sa(m, h, y), w.return = m, w) : (w = Jl(y.type, y.key, y.props, null, m.mode, w), w.ref = sa(m, h, y), w.return = m, w);
  }
  function u(m, h, y, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Bd(y, m.mode, w), h.return = m, h) : (h = o(h, y.children || []), h.return = m, h);
  }
  function c(m, h, y, w, k) {
    return h === null || h.tag !== 7 ? (h = co(y, m.mode, w, k), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function d(m, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Ld("" + h, m.mode, y), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case al:
          return y = Jl(h.type, h.key, h.props, null, m.mode, y), y.ref = sa(m, null, h), y.return = m, y;
        case Uo:
          return h = Bd(h, m.mode, y), h.return = m, h;
        case vn:
          var w = h._init;
          return d(m, w(h._payload), y);
      }
      if (ba(h) || ra(h))
        return h = co(h, m.mode, y, null), h.return = m, h;
      gl(m, h);
    }
    return null;
  }
  function f(m, h, y, w) {
    var k = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return k !== null ? null : s(m, h, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case al:
          return y.key === k ? l(m, h, y, w) : null;
        case Uo:
          return y.key === k ? u(m, h, y, w) : null;
        case vn:
          return k = y._init, f(
            m,
            h,
            k(y._payload),
            w
          );
      }
      if (ba(y) || ra(y))
        return k !== null ? null : c(m, h, y, w, null);
      gl(m, y);
    }
    return null;
  }
  function p(m, h, y, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return m = m.get(y) || null, s(h, m, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case al:
          return m = m.get(w.key === null ? y : w.key) || null, l(h, m, w, k);
        case Uo:
          return m = m.get(w.key === null ? y : w.key) || null, u(h, m, w, k);
        case vn:
          var E = w._init;
          return p(m, h, y, E(w._payload), k);
      }
      if (ba(w) || ra(w))
        return m = m.get(y) || null, c(h, m, w, k, null);
      gl(h, w);
    }
    return null;
  }
  function v(m, h, y, w) {
    for (var k = null, E = null, _ = h, $ = h = 0, R = null; _ !== null && $ < y.length; $++) {
      _.index > $ ? (R = _, _ = null) : R = _.sibling;
      var M = f(m, _, y[$], w);
      if (M === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && M.alternate === null && t(m, _), h = i(M, h, $), E === null ? k = M : E.sibling = M, E = M, _ = R;
    }
    if ($ === y.length)
      return r(m, _), Oe && Qn(m, $), k;
    if (_ === null) {
      for (; $ < y.length; $++)
        _ = d(m, y[$], w), _ !== null && (h = i(_, h, $), E === null ? k = _ : E.sibling = _, E = _);
      return Oe && Qn(m, $), k;
    }
    for (_ = n(m, _); $ < y.length; $++)
      R = p(_, m, $, y[$], w), R !== null && (e && R.alternate !== null && _.delete(R.key === null ? $ : R.key), h = i(R, h, $), E === null ? k = R : E.sibling = R, E = R);
    return e && _.forEach(function(j) {
      return t(m, j);
    }), Oe && Qn(m, $), k;
  }
  function g(m, h, y, w) {
    var k = ra(y);
    if (typeof k != "function")
      throw Error(O(150));
    if (y = k.call(y), y == null)
      throw Error(O(151));
    for (var E = k = null, _ = h, $ = h = 0, R = null, M = y.next(); _ !== null && !M.done; $++, M = y.next()) {
      _.index > $ ? (R = _, _ = null) : R = _.sibling;
      var j = f(m, _, M.value, w);
      if (j === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && j.alternate === null && t(m, _), h = i(j, h, $), E === null ? k = j : E.sibling = j, E = j, _ = R;
    }
    if (M.done)
      return r(
        m,
        _
      ), Oe && Qn(m, $), k;
    if (_ === null) {
      for (; !M.done; $++, M = y.next())
        M = d(m, M.value, w), M !== null && (h = i(M, h, $), E === null ? k = M : E.sibling = M, E = M);
      return Oe && Qn(m, $), k;
    }
    for (_ = n(m, _); !M.done; $++, M = y.next())
      M = p(_, m, $, M.value, w), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? $ : M.key), h = i(M, h, $), E === null ? k = M : E.sibling = M, E = M);
    return e && _.forEach(function(q) {
      return t(m, q);
    }), Oe && Qn(m, $), k;
  }
  function x(m, h, y, w) {
    if (typeof y == "object" && y !== null && y.type === Ho && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case al:
          e: {
            for (var k = y.key, E = h; E !== null; ) {
              if (E.key === k) {
                if (k = y.type, k === Ho) {
                  if (E.tag === 7) {
                    r(m, E.sibling), h = o(E, y.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vn && _g(k) === E.type) {
                  r(m, E.sibling), h = o(E, y.props), h.ref = sa(m, E, y), h.return = m, m = h;
                  break e;
                }
                r(m, E);
                break;
              } else
                t(m, E);
              E = E.sibling;
            }
            y.type === Ho ? (h = co(y.props.children, m.mode, w, y.key), h.return = m, m = h) : (w = Jl(y.type, y.key, y.props, null, m.mode, w), w.ref = sa(m, h, y), w.return = m, m = w);
          }
          return a(m);
        case Uo:
          e: {
            for (E = y.key; h !== null; ) {
              if (h.key === E)
                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                  r(m, h.sibling), h = o(h, y.children || []), h.return = m, m = h;
                  break e;
                } else {
                  r(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = Bd(y, m.mode, w), h.return = m, m = h;
          }
          return a(m);
        case vn:
          return E = y._init, x(m, h, E(y._payload), w);
      }
      if (ba(y))
        return v(m, h, y, w);
      if (ra(y))
        return g(m, h, y, w);
      gl(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (r(m, h.sibling), h = o(h, y), h.return = m, m = h) : (r(m, h), h = Ld(y, m.mode, w), h.return = m, m = h), a(m)) : r(m, h);
  }
  return x;
}
var Ai = ox(!0), ix = ox(!1), Fs = {}, Ar = Nn(Fs), ls = Nn(Fs), us = Nn(Fs);
function ao(e) {
  if (e === Fs)
    throw Error(O(174));
  return e;
}
function jh(e, t) {
  switch (we(us, t), we(ls, e), we(Ar, Fs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nf(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Nf(t, e);
  }
  $e(Ar), we(Ar, t);
}
function Ri() {
  $e(Ar), $e(ls), $e(us);
}
function ax(e) {
  ao(us.current);
  var t = ao(Ar.current), r = Nf(t, e.type);
  t !== r && (we(ls, e), we(Ar, r));
}
function Lh(e) {
  ls.current === e && ($e(Ar), $e(ls));
}
var Ie = Nn(0);
function Iu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!"))
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
var Od = [];
function Bh() {
  for (var e = 0; e < Od.length; e++)
    Od[e]._workInProgressVersionPrimary = null;
  Od.length = 0;
}
var Yl = ln.ReactCurrentDispatcher, Id = ln.ReactCurrentBatchConfig, wo = 0, Fe = null, Ke = null, Ze = null, zu = !1, Ia = !1, cs = 0, ZP = 0;
function lt() {
  throw Error(O(321));
}
function Nh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!yr(e[r], t[r]))
      return !1;
  return !0;
}
function Vh(e, t, r, n, o, i) {
  if (wo = i, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yl.current = e === null || e.memoizedState === null ? rT : nT, e = r(n, o), Ia) {
    i = 0;
    do {
      if (Ia = !1, cs = 0, 25 <= i)
        throw Error(O(301));
      i += 1, Ze = Ke = null, t.updateQueue = null, Yl.current = oT, e = r(n, o);
    } while (Ia);
  }
  if (Yl.current = Fu, t = Ke !== null && Ke.next !== null, wo = 0, Ze = Ke = Fe = null, zu = !1, t)
    throw Error(O(300));
  return e;
}
function Wh() {
  var e = cs !== 0;
  return cs = 0, e;
}
function wr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ze === null ? Fe.memoizedState = Ze = e : Ze = Ze.next = e, Ze;
}
function ir() {
  if (Ke === null) {
    var e = Fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Ke.next;
  var t = Ze === null ? Fe.memoizedState : Ze.next;
  if (t !== null)
    Ze = t, Ke = e;
  else {
    if (e === null)
      throw Error(O(310));
    Ke = e, e = { memoizedState: Ke.memoizedState, baseState: Ke.baseState, baseQueue: Ke.baseQueue, queue: Ke.queue, next: null }, Ze === null ? Fe.memoizedState = Ze = e : Ze = Ze.next = e;
  }
  return Ze;
}
function ds(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zd(e) {
  var t = ir(), r = t.queue;
  if (r === null)
    throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = Ke, o = n.baseQueue, i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      o.next = i.next, i.next = a;
    }
    n.baseQueue = o = i, r.pending = null;
  }
  if (o !== null) {
    i = o.next, n = n.baseState;
    var s = a = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((wo & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = n) : l = l.next = d, Fe.lanes |= c, ko |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, yr(n, t.memoizedState) || (_t = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Fe.lanes |= i, ko |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Fd(e) {
  var t = ir(), r = t.queue;
  if (r === null)
    throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch, o = r.pending, i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    yr(i, t.memoizedState) || (_t = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function sx() {
}
function lx(e, t) {
  var r = Fe, n = ir(), o = t(), i = !yr(n.memoizedState, o);
  if (i && (n.memoizedState = o, _t = !0), n = n.queue, Uh(dx.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || Ze !== null && Ze.memoizedState.tag & 1) {
    if (r.flags |= 2048, fs(9, cx.bind(null, r, n, o, t), void 0, null), Je === null)
      throw Error(O(349));
    wo & 30 || ux(r, t, o);
  }
  return o;
}
function ux(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function cx(e, t, r, n) {
  t.value = r, t.getSnapshot = n, fx(t) && px(e);
}
function dx(e, t, r) {
  return r(function() {
    fx(t) && px(e);
  });
}
function fx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !yr(e, r);
  } catch {
    return !0;
  }
}
function px(e) {
  var t = rn(e, 1);
  t !== null && gr(t, e, 1, -1);
}
function Pg(e) {
  var t = wr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ds, lastRenderedState: e }, t.queue = e, e = e.dispatch = tT.bind(null, Fe, e), [t.memoizedState, e];
}
function fs(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function hx() {
  return ir().memoizedState;
}
function ql(e, t, r, n) {
  var o = wr();
  Fe.flags |= e, o.memoizedState = fs(1 | t, r, void 0, n === void 0 ? null : n);
}
function yc(e, t, r, n) {
  var o = ir();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Ke !== null) {
    var a = Ke.memoizedState;
    if (i = a.destroy, n !== null && Nh(n, a.deps)) {
      o.memoizedState = fs(t, r, i, n);
      return;
    }
  }
  Fe.flags |= e, o.memoizedState = fs(1 | t, r, i, n);
}
function Tg(e, t) {
  return ql(8390656, 8, e, t);
}
function Uh(e, t) {
  return yc(2048, 8, e, t);
}
function mx(e, t) {
  return yc(4, 2, e, t);
}
function vx(e, t) {
  return yc(4, 4, e, t);
}
function gx(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function yx(e, t, r) {
  return r = r != null ? r.concat([e]) : null, yc(4, 4, gx.bind(null, t, e), r);
}
function Hh() {
}
function bx(e, t) {
  var r = ir();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Nh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function xx(e, t) {
  var r = ir();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Nh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function Sx(e, t, r) {
  return wo & 21 ? (yr(r, t) || (r = Cb(), Fe.lanes |= r, ko |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = r);
}
function JP(e, t) {
  var r = me;
  me = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Id.transition;
  Id.transition = {};
  try {
    e(!1), t();
  } finally {
    me = r, Id.transition = n;
  }
}
function wx() {
  return ir().memoizedState;
}
function eT(e, t, r) {
  var n = Rn(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, kx(e))
    Cx(t, r);
  else if (r = ex(e, t, r, n), r !== null) {
    var o = yt();
    gr(r, e, n, o), _x(r, t, n);
  }
}
function tT(e, t, r) {
  var n = Rn(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (kx(e))
    Cx(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, yr(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Fh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = ex(e, t, o, n), r !== null && (o = yt(), gr(r, e, n, o), _x(r, t, n));
  }
}
function kx(e) {
  var t = e.alternate;
  return e === Fe || t !== null && t === Fe;
}
function Cx(e, t) {
  Ia = zu = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function _x(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, wh(e, r);
  }
}
var Fu = { readContext: or, useCallback: lt, useContext: lt, useEffect: lt, useImperativeHandle: lt, useInsertionEffect: lt, useLayoutEffect: lt, useMemo: lt, useReducer: lt, useRef: lt, useState: lt, useDebugValue: lt, useDeferredValue: lt, useTransition: lt, useMutableSource: lt, useSyncExternalStore: lt, useId: lt, unstable_isNewReconciler: !1 }, rT = { readContext: or, useCallback: function(e, t) {
  return wr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: or, useEffect: Tg, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, ql(
    4194308,
    4,
    gx.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return ql(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ql(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = wr();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = wr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = eT.bind(null, Fe, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = wr();
  return e = { current: e }, t.memoizedState = e;
}, useState: Pg, useDebugValue: Hh, useDeferredValue: function(e) {
  return wr().memoizedState = e;
}, useTransition: function() {
  var e = Pg(!1), t = e[0];
  return e = JP.bind(null, e[1]), wr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Fe, o = wr();
  if (Oe) {
    if (r === void 0)
      throw Error(O(407));
    r = r();
  } else {
    if (r = t(), Je === null)
      throw Error(O(349));
    wo & 30 || ux(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, Tg(dx.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, fs(9, cx.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = wr(), t = Je.identifierPrefix;
  if (Oe) {
    var r = Gr, n = Hr;
    r = (n & ~(1 << 32 - vr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = cs++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = ZP++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, nT = {
  readContext: or,
  useCallback: bx,
  useContext: or,
  useEffect: Uh,
  useImperativeHandle: yx,
  useInsertionEffect: mx,
  useLayoutEffect: vx,
  useMemo: xx,
  useReducer: zd,
  useRef: hx,
  useState: function() {
    return zd(ds);
  },
  useDebugValue: Hh,
  useDeferredValue: function(e) {
    var t = ir();
    return Sx(t, Ke.memoizedState, e);
  },
  useTransition: function() {
    var e = zd(ds)[0], t = ir().memoizedState;
    return [e, t];
  },
  useMutableSource: sx,
  useSyncExternalStore: lx,
  useId: wx,
  unstable_isNewReconciler: !1
}, oT = { readContext: or, useCallback: bx, useContext: or, useEffect: Uh, useImperativeHandle: yx, useInsertionEffect: mx, useLayoutEffect: vx, useMemo: xx, useReducer: Fd, useRef: hx, useState: function() {
  return Fd(ds);
}, useDebugValue: Hh, useDeferredValue: function(e) {
  var t = ir();
  return Ke === null ? t.memoizedState = e : Sx(t, Ke.memoizedState, e);
}, useTransition: function() {
  var e = Fd(ds)[0], t = ir().memoizedState;
  return [e, t];
}, useMutableSource: sx, useSyncExternalStore: lx, useId: wx, unstable_isNewReconciler: !1 };
function Mi(e, t) {
  try {
    var r = "", n = t;
    do
      r += M_(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Dd(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function cp(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var iT = typeof WeakMap == "function" ? WeakMap : Map;
function Px(e, t, r) {
  r = Xr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    ju || (ju = !0, xp = n), cp(e, t);
  }, r;
}
function Tx(e, t, r) {
  r = Xr(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function() {
      return n(o);
    }, r.callback = function() {
      cp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
    cp(e, t), typeof n != "function" && (An === null ? An = /* @__PURE__ */ new Set([this]) : An.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function Eg(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new iT();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = bT.bind(null, e, t, r), t.then(e, e));
}
function $g(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ag(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Xr(-1, 1), t.tag = 2, $n(r, t, 1))), r.lanes |= 1), e);
}
var aT = ln.ReactCurrentOwner, _t = !1;
function mt(e, t, r, n) {
  t.child = e === null ? ix(t, null, r, n) : Ai(t, e.child, r, n);
}
function Rg(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return gi(t, o), n = Vh(e, t, r, n, i, o), r = Wh(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, nn(e, t, o)) : (Oe && r && Ah(t), t.flags |= 1, mt(e, t, n, o), t.child);
}
function Mg(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !Jh(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ex(e, t, i, n, o)) : (e = Jl(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : os, r(a, n) && e.ref === t.ref)
      return nn(e, t, o);
  }
  return t.flags |= 1, e = Mn(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function Ex(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (os(i, n) && e.ref === t.ref)
      if (_t = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (_t = !0);
      else
        return t.lanes = e.lanes, nn(e, t, o);
  }
  return dp(e, t, r, n, o);
}
function $x(e, t, r) {
  var n = t.pendingProps, o = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, we(ti, zt), zt |= r;
    else {
      if (!(r & 1073741824))
        return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, we(ti, zt), zt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, we(ti, zt), zt |= n;
    }
  else
    i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, we(ti, zt), zt |= n;
  return mt(e, t, o, r), t.child;
}
function Ax(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function dp(e, t, r, n, o) {
  var i = Tt(r) ? xo : pt.current;
  return i = Ei(t, i), gi(t, o), r = Vh(e, t, r, n, i, o), n = Wh(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, nn(e, t, o)) : (Oe && n && Ah(t), t.flags |= 1, mt(e, t, r, o), t.child);
}
function Og(e, t, r, n, o) {
  if (Tt(r)) {
    var i = !0;
    Eu(t);
  } else
    i = !1;
  if (gi(t, o), t.stateNode === null)
    Xl(e, t), nx(t, r, n), up(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = or(u) : (u = Tt(r) ? xo : pt.current, u = Ei(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && Cg(t, a, n, u), gn = !1;
    var f = t.memoizedState;
    a.state = f, Ou(t, n, a, o), l = t.memoizedState, s !== n || f !== l || Pt.current || gn ? (typeof c == "function" && (lp(t, r, c, n), l = t.memoizedState), (s = gn || kg(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, tx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : fr(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = or(l) : (l = Tt(r) ? xo : pt.current, l = Ei(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && Cg(t, a, n, l), gn = !1, f = t.memoizedState, a.state = f, Ou(t, n, a, o);
    var v = t.memoizedState;
    s !== d || f !== v || Pt.current || gn ? (typeof p == "function" && (lp(t, r, p, n), v = t.memoizedState), (u = gn || kg(t, r, u, n, f, v, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, v, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, v, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), a.props = n, a.state = v, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return fp(e, t, r, n, i, o);
}
function fp(e, t, r, n, o, i) {
  Ax(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && yg(t, r, !1), nn(e, t, i);
  n = t.stateNode, aT.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = Ai(t, e.child, null, i), t.child = Ai(t, null, s, i)) : mt(e, t, s, i), t.memoizedState = n.state, o && yg(t, r, !0), t.child;
}
function Rx(e) {
  var t = e.stateNode;
  t.pendingContext ? gg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gg(e, t.context, !1), jh(e, t.containerInfo);
}
function Ig(e, t, r, n, o) {
  return $i(), Mh(o), t.flags |= 256, mt(e, t, r, n), t.child;
}
var pp = { dehydrated: null, treeContext: null, retryLane: 0 };
function hp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mx(e, t, r) {
  var n = t.pendingProps, o = Ie.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), we(Ie, o & 1), e === null)
    return ap(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Sc(a, n, 0, null), e = co(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = hp(r), t.memoizedState = pp, e) : Gh(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return sT(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = Mn(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = Mn(s, i) : (i = co(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? hp(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = pp, n;
  }
  return i = e.child, e = i.sibling, n = Mn(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Gh(e, t) {
  return t = Sc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function yl(e, t, r, n) {
  return n !== null && Mh(n), Ai(t, e.child, null, r), e = Gh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function sT(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Dd(Error(O(422))), yl(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = Sc({ mode: "visible", children: n.children }, o, 0, null), i = co(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && Ai(t, e.child, null, a), t.child.memoizedState = hp(a), t.memoizedState = pp, i);
  if (!(t.mode & 1))
    return yl(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(O(419)), n = Dd(i, n, void 0), yl(e, t, a, n);
  }
  if (s = (a & e.childLanes) !== 0, _t || s) {
    if (n = Je, n !== null) {
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
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, rn(e, o), gr(n, e, o, -1));
    }
    return Zh(), n = Dd(Error(O(421))), yl(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = xT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ft = En(o.nextSibling), Dt = t, Oe = !0, hr = null, e !== null && (Qt[Zt++] = Hr, Qt[Zt++] = Gr, Qt[Zt++] = So, Hr = e.id, Gr = e.overflow, So = t), t = Gh(t, n.children), t.flags |= 4096, t);
}
function zg(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), sp(e.return, t, r);
}
function jd(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function Ox(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (mt(e, t, n.children, r), n = Ie.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && zg(e, r, t);
          else if (e.tag === 19)
            zg(e, r, t);
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
    n &= 1;
  }
  if (we(Ie, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && Iu(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), jd(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Iu(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        jd(t, !0, r, null, i);
        break;
      case "together":
        jd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function nn(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), ko |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, r = Mn(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = Mn(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function lT(e, t, r) {
  switch (t.tag) {
    case 3:
      Rx(t), $i();
      break;
    case 5:
      ax(t);
      break;
    case 1:
      Tt(t.type) && Eu(t);
      break;
    case 4:
      jh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      we(Ru, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (we(Ie, Ie.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Mx(e, t, r) : (we(Ie, Ie.current & 1), e = nn(e, t, r), e !== null ? e.sibling : null);
      we(Ie, Ie.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return Ox(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), we(Ie, Ie.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $x(e, t, r);
  }
  return nn(e, t, r);
}
var Ix, mp, zx, Fx;
Ix = function(e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6)
      e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === t)
      break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t)
        return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
mp = function() {
};
zx = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, ao(Ar.current);
    var i = null;
    switch (r) {
      case "input":
        o = Df(e, o), n = Df(e, n), i = [];
        break;
      case "select":
        o = De({}, o, { value: void 0 }), n = De({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Bf(e, o), n = Bf(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Pu);
    }
    Vf(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qa.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (s = o != null ? o[u] : void 0, n.hasOwnProperty(u) && l !== s && (l != null || s != null))
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
            for (a in l)
              l.hasOwnProperty(a) && s[a] !== l[a] && (r || (r = {}), r[a] = l[a]);
          } else
            r || (i || (i = []), i.push(
              u,
              r
            )), r = l;
        else
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qa.hasOwnProperty(u) ? (l != null && u === "onScroll" && Te("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Fx = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function la(e, t) {
  if (!Oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), r = r.sibling;
        n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
    }
}
function ut(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function uT(e, t, r) {
  var n = t.pendingProps;
  switch (Rh(t), t.tag) {
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
      return ut(t), null;
    case 1:
      return Tt(t.type) && Tu(), ut(t), null;
    case 3:
      return n = t.stateNode, Ri(), $e(Pt), $e(pt), Bh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (vl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, hr !== null && (kp(hr), hr = null))), mp(e, t), ut(t), null;
    case 5:
      Lh(t);
      var o = ao(us.current);
      if (r = t.type, e !== null && t.stateNode != null)
        zx(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(O(166));
          return ut(t), null;
        }
        if (e = ao(Ar.current), vl(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[Tr] = t, n[ss] = i, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              Te("cancel", n), Te("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Te("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Sa.length; o++)
                Te(Sa[o], n);
              break;
            case "source":
              Te("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Te(
                "error",
                n
              ), Te("load", n);
              break;
            case "details":
              Te("toggle", n);
              break;
            case "input":
              Uv(n, i), Te("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, Te("invalid", n);
              break;
            case "textarea":
              Gv(n, i), Te("invalid", n);
          }
          Vf(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && ml(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ml(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Qa.hasOwnProperty(a) && s != null && a === "onScroll" && Te("scroll", n);
            }
          switch (r) {
            case "input":
              sl(n), Hv(n, i, !0);
              break;
            case "textarea":
              sl(n), Kv(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Pu);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ub(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[Tr] = t, e[ss] = n, Ix(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Wf(r, n), r) {
              case "dialog":
                Te("cancel", e), Te("close", e), o = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", e), o = n;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Sa.length; o++)
                  Te(Sa[o], e);
                o = n;
                break;
              case "source":
                Te("error", e), o = n;
                break;
              case "img":
              case "image":
              case "link":
                Te(
                  "error",
                  e
                ), Te("load", e), o = n;
                break;
              case "details":
                Te("toggle", e), o = n;
                break;
              case "input":
                Uv(e, n), o = Df(e, n), Te("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = De({}, n, { value: void 0 }), Te("invalid", e);
                break;
              case "textarea":
                Gv(e, n), o = Bf(e, n), Te("invalid", e);
                break;
              default:
                o = n;
            }
            Vf(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? fb(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && cb(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Za(e, l) : typeof l == "number" && Za(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qa.hasOwnProperty(i) ? l != null && i === "onScroll" && Te("scroll", e) : l != null && vh(e, i, l, a));
              }
            switch (r) {
              case "input":
                sl(e), Hv(e, n, !1);
                break;
              case "textarea":
                sl(e), Kv(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Fn(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, i = n.value, i != null ? pi(e, !!n.multiple, i, !1) : n.defaultValue != null && pi(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Pu);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ut(t), null;
    case 6:
      if (e && t.stateNode != null)
        Fx(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(O(166));
        if (r = ao(us.current), ao(Ar.current), vl(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[Tr] = t, (i = n.nodeValue !== r) && (e = Dt, e !== null))
            switch (e.tag) {
              case 3:
                ml(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ml(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Tr] = t, t.stateNode = n;
      }
      return ut(t), null;
    case 13:
      if ($e(Ie), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Oe && Ft !== null && t.mode & 1 && !(t.flags & 128))
          Jb(), $i(), t.flags |= 98560, i = !1;
        else if (i = vl(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(O(317));
            i[Tr] = t;
          } else
            $i(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ut(t), i = !1;
        } else
          hr !== null && (kp(hr), hr = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ie.current & 1 ? Ye === 0 && (Ye = 3) : Zh())), t.updateQueue !== null && (t.flags |= 4), ut(t), null);
    case 4:
      return Ri(), mp(e, t), e === null && is(t.stateNode.containerInfo), ut(t), null;
    case 10:
      return zh(t.type._context), ut(t), null;
    case 17:
      return Tt(t.type) && Tu(), ut(t), null;
    case 19:
      if ($e(Ie), i = t.memoizedState, i === null)
        return ut(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          la(i, !1);
        else {
          if (Ye !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Iu(e), a !== null) {
                for (t.flags |= 128, la(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return we(Ie, Ie.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Be() > Oi && (t.flags |= 128, n = !0, la(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = Iu(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), la(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Oe)
              return ut(t), null;
          } else
            2 * Be() - i.renderingStartTime > Oi && r !== 1073741824 && (t.flags |= 128, n = !0, la(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Be(), t.sibling = null, r = Ie.current, we(Ie, n ? r & 1 | 2 : r & 1), t) : (ut(t), null);
    case 22:
    case 23:
      return Qh(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? zt & 1073741824 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function cT(e, t) {
  switch (Rh(t), t.tag) {
    case 1:
      return Tt(t.type) && Tu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ri(), $e(Pt), $e(pt), Bh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Lh(t), null;
    case 13:
      if ($e(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        $i();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return $e(Ie), null;
    case 4:
      return Ri(), null;
    case 10:
      return zh(t.type._context), null;
    case 22:
    case 23:
      return Qh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bl = !1, dt = !1, dT = typeof WeakSet == "function" ? WeakSet : Set, D = null;
function ei(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        je(e, t, n);
      }
    else
      r.current = null;
}
function vp(e, t, r) {
  try {
    r();
  } catch (n) {
    je(e, t, n);
  }
}
var Fg = !1;
function fT(e, t) {
  if (Jf = ku, e = Bb(), $h(e)) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset, i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0, s = -1, l = -1, u = 0, c = 0, d = e, f = null;
          t:
            for (; ; ) {
              for (var p; d !== r || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || n !== 0 && d.nodeType !== 3 || (l = a + n), d.nodeType === 3 && (a += d.nodeValue.length), (p = d.firstChild) !== null; )
                f = d, d = p;
              for (; ; ) {
                if (d === e)
                  break t;
                if (f === r && ++u === o && (s = a), f === i && ++c === n && (l = a), (p = d.nextSibling) !== null)
                  break;
                d = f, f = d.parentNode;
              }
              d = p;
            }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else
          r = null;
      }
    r = r || { start: 0, end: 0 };
  } else
    r = null;
  for (ep = { focusedElem: e, selectionRange: r }, ku = !1, D = t; D !== null; )
    if (t = D, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, D = e;
    else
      for (; D !== null; ) {
        t = D;
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
                  var g = v.memoizedProps, x = v.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : fr(t.type, g), x);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (w) {
          je(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, D = e;
          break;
        }
        D = t.return;
      }
  return v = Fg, Fg = !1, v;
}
function za(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var o = n = n.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && vp(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function bc(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var r = t = t.next;
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function gp(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Dx(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Dx(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tr], delete t[ss], delete t[np], delete t[YP], delete t[qP])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function jx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Dg(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jx(e.return))
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
function yp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = Pu));
  else if (n !== 4 && (e = e.child, e !== null))
    for (yp(e, t, r), e = e.sibling; e !== null; )
      yp(e, t, r), e = e.sibling;
}
function bp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null))
    for (bp(e, t, r), e = e.sibling; e !== null; )
      bp(e, t, r), e = e.sibling;
}
var nt = null, pr = !1;
function dn(e, t, r) {
  for (r = r.child; r !== null; )
    Lx(e, t, r), r = r.sibling;
}
function Lx(e, t, r) {
  if ($r && typeof $r.onCommitFiberUnmount == "function")
    try {
      $r.onCommitFiberUnmount(dc, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      dt || ei(r, t);
    case 6:
      var n = nt, o = pr;
      nt = null, dn(e, t, r), nt = n, pr = o, nt !== null && (pr ? (e = nt, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : nt.removeChild(r.stateNode));
      break;
    case 18:
      nt !== null && (pr ? (e = nt, r = r.stateNode, e.nodeType === 8 ? Rd(e.parentNode, r) : e.nodeType === 1 && Rd(e, r), rs(e)) : Rd(nt, r.stateNode));
      break;
    case 4:
      n = nt, o = pr, nt = r.stateNode.containerInfo, pr = !0, dn(e, t, r), nt = n, pr = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!dt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        o = n = n.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && vp(r, t, a), o = o.next;
        } while (o !== n);
      }
      dn(e, t, r);
      break;
    case 1:
      if (!dt && (ei(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          je(r, t, s);
        }
      dn(e, t, r);
      break;
    case 21:
      dn(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (dt = (n = dt) || r.memoizedState !== null, dn(e, t, r), dt = n) : dn(e, t, r);
      break;
    default:
      dn(e, t, r);
  }
}
function jg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new dT()), t.forEach(function(n) {
      var o = ST.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(o, o));
    });
  }
}
function cr(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e, a = t, s = a;
        e:
          for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                nt = s.stateNode, pr = !1;
                break e;
              case 3:
                nt = s.stateNode.containerInfo, pr = !0;
                break e;
              case 4:
                nt = s.stateNode.containerInfo, pr = !0;
                break e;
            }
            s = s.return;
          }
        if (nt === null)
          throw Error(O(160));
        Lx(i, a, o), nt = null, pr = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        je(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Bx(t, e), t = t.sibling;
}
function Bx(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (cr(t, e), xr(e), n & 4) {
        try {
          za(3, e, e.return), bc(3, e);
        } catch (g) {
          je(e, e.return, g);
        }
        try {
          za(5, e, e.return);
        } catch (g) {
          je(e, e.return, g);
        }
      }
      break;
    case 1:
      cr(t, e), xr(e), n & 512 && r !== null && ei(r, r.return);
      break;
    case 5:
      if (cr(t, e), xr(e), n & 512 && r !== null && ei(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Za(o, "");
        } catch (g) {
          je(e, e.return, g);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && sb(o, i), Wf(s, a);
            var u = Wf(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? fb(o, d) : c === "dangerouslySetInnerHTML" ? cb(o, d) : c === "children" ? Za(o, d) : vh(o, c, d, u);
            }
            switch (s) {
              case "input":
                jf(o, i);
                break;
              case "textarea":
                lb(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? pi(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? pi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : pi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ss] = i;
          } catch (g) {
            je(e, e.return, g);
          }
      }
      break;
    case 6:
      if (cr(t, e), xr(e), n & 4) {
        if (e.stateNode === null)
          throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          je(e, e.return, g);
        }
      }
      break;
    case 3:
      if (cr(t, e), xr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          rs(t.containerInfo);
        } catch (g) {
          je(e, e.return, g);
        }
      break;
    case 4:
      cr(t, e), xr(e);
      break;
    case 13:
      cr(t, e), xr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (qh = Be())), n & 4 && jg(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (dt = (u = dt) || c, cr(t, e), dt = u) : cr(t, e), xr(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (D = e, c = e.child; c !== null; ) {
            for (d = D = c; D !== null; ) {
              switch (f = D, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  za(4, f, f.return);
                  break;
                case 1:
                  ei(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (g) {
                      je(n, r, g);
                    }
                  }
                  break;
                case 5:
                  ei(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Bg(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, D = p) : Bg(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = db("display", a));
                } catch (g) {
                  je(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  je(e, e.return, g);
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
      cr(t, e), xr(e), n & 4 && jg(e);
      break;
    case 21:
      break;
    default:
      cr(
        t,
        e
      ), xr(e);
  }
}
function xr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (jx(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(O(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (Za(o, ""), n.flags &= -33);
          var i = Dg(e);
          bp(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = Dg(e);
          yp(e, s, a);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      je(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pT(e, t, r) {
  D = e, Nx(e);
}
function Nx(e, t, r) {
  for (var n = (e.mode & 1) !== 0; D !== null; ) {
    var o = D, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || bl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || dt;
        s = bl;
        var u = dt;
        if (bl = a, (dt = l) && !u)
          for (D = o; D !== null; )
            a = D, l = a.child, a.tag === 22 && a.memoizedState !== null ? Ng(o) : l !== null ? (l.return = a, D = l) : Ng(o);
        for (; i !== null; )
          D = i, Nx(i), i = i.sibling;
        D = o, bl = s, dt = u;
      }
      Lg(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, D = i) : Lg(e);
  }
}
function Lg(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              dt || bc(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !dt)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : fr(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && wg(t, i, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (r = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                wg(t, a, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
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
                    d !== null && rs(d);
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
              throw Error(O(163));
          }
        dt || t.flags & 512 && gp(t);
      } catch (f) {
        je(t, t.return, f);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, D = r;
      break;
    }
    D = t.return;
  }
}
function Bg(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, D = r;
      break;
    }
    D = t.return;
  }
}
function Ng(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            bc(4, t);
          } catch (l) {
            je(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              je(t, o, l);
            }
          }
          var i = t.return;
          try {
            gp(t);
          } catch (l) {
            je(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            gp(t);
          } catch (l) {
            je(t, a, l);
          }
      }
    } catch (l) {
      je(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, D = s;
      break;
    }
    D = t.return;
  }
}
var hT = Math.ceil, Du = ln.ReactCurrentDispatcher, Kh = ln.ReactCurrentOwner, tr = ln.ReactCurrentBatchConfig, ae = 0, Je = null, Ue = null, it = 0, zt = 0, ti = Nn(0), Ye = 0, ps = null, ko = 0, xc = 0, Yh = 0, Fa = null, wt = null, qh = 0, Oi = 1 / 0, Br = null, ju = !1, xp = null, An = null, xl = !1, Cn = null, Lu = 0, Da = 0, Sp = null, Ql = -1, Zl = 0;
function yt() {
  return ae & 6 ? Be() : Ql !== -1 ? Ql : Ql = Be();
}
function Rn(e) {
  return e.mode & 1 ? ae & 2 && it !== 0 ? it & -it : QP.transition !== null ? (Zl === 0 && (Zl = Cb()), Zl) : (e = me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Rb(e.type)), e) : 1;
}
function gr(e, t, r, n) {
  if (50 < Da)
    throw Da = 0, Sp = null, Error(O(185));
  Os(e, r, n), (!(ae & 2) || e !== Je) && (e === Je && (!(ae & 2) && (xc |= r), Ye === 4 && xn(e, it)), Et(e, n), r === 1 && ae === 0 && !(t.mode & 1) && (Oi = Be() + 500, vc && Vn()));
}
function Et(e, t) {
  var r = e.callbackNode;
  Q_(e, t);
  var n = wu(e, e === Je ? it : 0);
  if (n === 0)
    r !== null && Xv(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Xv(r), t === 1)
      e.tag === 0 ? XP(Vg.bind(null, e)) : Xb(Vg.bind(null, e)), GP(function() {
        !(ae & 6) && Vn();
      }), r = null;
    else {
      switch (_b(n)) {
        case 1:
          r = Sh;
          break;
        case 4:
          r = wb;
          break;
        case 16:
          r = Su;
          break;
        case 536870912:
          r = kb;
          break;
        default:
          r = Su;
      }
      r = qx(r, Vx.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Vx(e, t) {
  if (Ql = -1, Zl = 0, ae & 6)
    throw Error(O(327));
  var r = e.callbackNode;
  if (yi() && e.callbackNode !== r)
    return null;
  var n = wu(e, e === Je ? it : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = Bu(e, n);
  else {
    t = n;
    var o = ae;
    ae |= 2;
    var i = Ux();
    (Je !== e || it !== t) && (Br = null, Oi = Be() + 500, uo(e, t));
    do
      try {
        gT();
        break;
      } catch (s) {
        Wx(e, s);
      }
    while (!0);
    Ih(), Du.current = i, ae = o, Ue !== null ? t = 0 : (Je = null, it = 0, t = Ye);
  }
  if (t !== 0) {
    if (t === 2 && (o = Yf(e), o !== 0 && (n = o, t = wp(e, o))), t === 1)
      throw r = ps, uo(e, 0), xn(e, n), Et(e, Be()), r;
    if (t === 6)
      xn(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !mT(o) && (t = Bu(e, n), t === 2 && (i = Yf(e), i !== 0 && (n = i, t = wp(e, i))), t === 1))
        throw r = ps, uo(e, 0), xn(e, n), Et(e, Be()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Zn(e, wt, Br);
          break;
        case 3:
          if (xn(e, n), (n & 130023424) === n && (t = qh + 500 - Be(), 10 < t)) {
            if (wu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              yt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = rp(Zn.bind(null, e, wt, Br), t);
            break;
          }
          Zn(e, wt, Br);
          break;
        case 4:
          if (xn(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - vr(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = Be() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * hT(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = rp(Zn.bind(null, e, wt, Br), n);
            break;
          }
          Zn(e, wt, Br);
          break;
        case 5:
          Zn(e, wt, Br);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return Et(e, Be()), e.callbackNode === r ? Vx.bind(null, e) : null;
}
function wp(e, t) {
  var r = Fa;
  return e.current.memoizedState.isDehydrated && (uo(e, t).flags |= 256), e = Bu(e, t), e !== 2 && (t = wt, wt = r, t !== null && kp(t)), e;
}
function kp(e) {
  wt === null ? wt = e : wt.push.apply(wt, e);
}
function mT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n], i = o.getSnapshot;
          o = o.value;
          try {
            if (!yr(i(), o))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (r = t.child, t.subtreeFlags & 16384 && r !== null)
      r.return = t, t = r;
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
function xn(e, t) {
  for (t &= ~Yh, t &= ~xc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - vr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Vg(e) {
  if (ae & 6)
    throw Error(O(327));
  yi();
  var t = wu(e, 0);
  if (!(t & 1))
    return Et(e, Be()), null;
  var r = Bu(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Yf(e);
    n !== 0 && (t = n, r = wp(e, n));
  }
  if (r === 1)
    throw r = ps, uo(e, 0), xn(e, t), Et(e, Be()), r;
  if (r === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zn(e, wt, Br), Et(e, Be()), null;
}
function Xh(e, t) {
  var r = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = r, ae === 0 && (Oi = Be() + 500, vc && Vn());
  }
}
function Co(e) {
  Cn !== null && Cn.tag === 0 && !(ae & 6) && yi();
  var t = ae;
  ae |= 1;
  var r = tr.transition, n = me;
  try {
    if (tr.transition = null, me = 1, e)
      return e();
  } finally {
    me = n, tr.transition = r, ae = t, !(ae & 6) && Vn();
  }
}
function Qh() {
  zt = ti.current, $e(ti);
}
function uo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, HP(r)), Ue !== null)
    for (r = Ue.return; r !== null; ) {
      var n = r;
      switch (Rh(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Tu();
          break;
        case 3:
          Ri(), $e(Pt), $e(pt), Bh();
          break;
        case 5:
          Lh(n);
          break;
        case 4:
          Ri();
          break;
        case 13:
          $e(Ie);
          break;
        case 19:
          $e(Ie);
          break;
        case 10:
          zh(n.type._context);
          break;
        case 22:
        case 23:
          Qh();
      }
      r = r.return;
    }
  if (Je = e, Ue = e = Mn(e.current, null), it = zt = t, Ye = 0, ps = null, Yh = xc = ko = 0, wt = Fa = null, io !== null) {
    for (t = 0; t < io.length; t++)
      if (r = io[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var o = n.next, i = r.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, n.next = a;
        }
        r.pending = n;
      }
    io = null;
  }
  return e;
}
function Wx(e, t) {
  do {
    var r = Ue;
    try {
      if (Ih(), Yl.current = Fu, zu) {
        for (var n = Fe.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        zu = !1;
      }
      if (wo = 0, Ze = Ke = Fe = null, Ia = !1, cs = 0, Kh.current = null, r === null || r.return === null) {
        Ye = 1, ps = t, Ue = null;
        break;
      }
      e: {
        var i = e, a = r.return, s = r, l = t;
        if (t = it, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = $g(a);
          if (p !== null) {
            p.flags &= -257, Ag(p, a, s, i, t), p.mode & 1 && Eg(i, u, t), t = p, l = u;
            var v = t.updateQueue;
            if (v === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Eg(i, u, t), Zh();
              break e;
            }
            l = Error(O(426));
          }
        } else if (Oe && s.mode & 1) {
          var x = $g(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Ag(x, a, s, i, t), Mh(Mi(l, s));
            break e;
          }
        }
        i = l = Mi(l, s), Ye !== 4 && (Ye = 2), Fa === null ? Fa = [i] : Fa.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Px(i, l, t);
              Sg(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, y = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (An === null || !An.has(y)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Tx(i, s, t);
                Sg(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gx(r);
    } catch (k) {
      t = k, Ue === r && r !== null && (Ue = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Ux() {
  var e = Du.current;
  return Du.current = Fu, e === null ? Fu : e;
}
function Zh() {
  (Ye === 0 || Ye === 3 || Ye === 2) && (Ye = 4), Je === null || !(ko & 268435455) && !(xc & 268435455) || xn(Je, it);
}
function Bu(e, t) {
  var r = ae;
  ae |= 2;
  var n = Ux();
  (Je !== e || it !== t) && (Br = null, uo(e, t));
  do
    try {
      vT();
      break;
    } catch (o) {
      Wx(e, o);
    }
  while (!0);
  if (Ih(), ae = r, Du.current = n, Ue !== null)
    throw Error(O(261));
  return Je = null, it = 0, Ye;
}
function vT() {
  for (; Ue !== null; )
    Hx(Ue);
}
function gT() {
  for (; Ue !== null && !V_(); )
    Hx(Ue);
}
function Hx(e) {
  var t = Yx(e.alternate, e, zt);
  e.memoizedProps = e.pendingProps, t === null ? Gx(e) : Ue = t, Kh.current = null;
}
function Gx(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = cT(r, t), r !== null) {
        r.flags &= 32767, Ue = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ye = 6, Ue = null;
        return;
      }
    } else if (r = uT(r, t, zt), r !== null) {
      Ue = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ue = t;
      return;
    }
    Ue = t = e;
  } while (t !== null);
  Ye === 0 && (Ye = 5);
}
function Zn(e, t, r) {
  var n = me, o = tr.transition;
  try {
    tr.transition = null, me = 1, yT(e, t, r, n);
  } finally {
    tr.transition = o, me = n;
  }
  return null;
}
function yT(e, t, r, n) {
  do
    yi();
  while (Cn !== null);
  if (ae & 6)
    throw Error(O(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current)
    throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = r.lanes | r.childLanes;
  if (Z_(e, i), e === Je && (Ue = Je = null, it = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || xl || (xl = !0, qx(Su, function() {
    return yi(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = tr.transition, tr.transition = null;
    var a = me;
    me = 1;
    var s = ae;
    ae |= 4, Kh.current = null, fT(e, r), Bx(r, e), jP(ep), ku = !!Jf, ep = Jf = null, e.current = r, pT(r), W_(), ae = s, me = a, tr.transition = i;
  } else
    e.current = r;
  if (xl && (xl = !1, Cn = e, Lu = o), i = e.pendingLanes, i === 0 && (An = null), G_(r.stateNode), Et(e, Be()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (ju)
    throw ju = !1, e = xp, xp = null, e;
  return Lu & 1 && e.tag !== 0 && yi(), i = e.pendingLanes, i & 1 ? e === Sp ? Da++ : (Da = 0, Sp = e) : Da = 0, Vn(), null;
}
function yi() {
  if (Cn !== null) {
    var e = _b(Lu), t = tr.transition, r = me;
    try {
      if (tr.transition = null, me = 16 > e ? 16 : e, Cn === null)
        var n = !1;
      else {
        if (e = Cn, Cn = null, Lu = 0, ae & 6)
          throw Error(O(331));
        var o = ae;
        for (ae |= 4, D = e.current; D !== null; ) {
          var i = D, a = i.child;
          if (D.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      za(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, D = d;
                  else
                    for (; D !== null; ) {
                      c = D;
                      var f = c.sibling, p = c.return;
                      if (Dx(c), c === u) {
                        D = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, D = f;
                        break;
                      }
                      D = p;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var x = g.sibling;
                    g.sibling = null, g = x;
                  } while (g !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, D = a;
          else
            e:
              for (; D !== null; ) {
                if (i = D, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      za(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, D = m;
                  break e;
                }
                D = i.return;
              }
        }
        var h = e.current;
        for (D = h; D !== null; ) {
          a = D;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null)
            y.return = a, D = y;
          else
            e:
              for (a = h; D !== null; ) {
                if (s = D, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bc(9, s);
                    }
                  } catch (k) {
                    je(s, s.return, k);
                  }
                if (s === a) {
                  D = null;
                  break e;
                }
                var w = s.sibling;
                if (w !== null) {
                  w.return = s.return, D = w;
                  break e;
                }
                D = s.return;
              }
        }
        if (ae = o, Vn(), $r && typeof $r.onPostCommitFiberRoot == "function")
          try {
            $r.onPostCommitFiberRoot(dc, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      me = r, tr.transition = t;
    }
  }
  return !1;
}
function Wg(e, t, r) {
  t = Mi(r, t), t = Px(e, t, 1), e = $n(e, t, 1), t = yt(), e !== null && (Os(e, 1, t), Et(e, t));
}
function je(e, t, r) {
  if (e.tag === 3)
    Wg(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wg(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (An === null || !An.has(n))) {
          e = Mi(r, e), e = Tx(t, e, 1), t = $n(t, e, 1), e = yt(), t !== null && (Os(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function bT(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = yt(), e.pingedLanes |= e.suspendedLanes & r, Je === e && (it & r) === r && (Ye === 4 || Ye === 3 && (it & 130023424) === it && 500 > Be() - qh ? uo(e, 0) : Yh |= r), Et(e, t);
}
function Kx(e, t) {
  t === 0 && (e.mode & 1 ? (t = cl, cl <<= 1, !(cl & 130023424) && (cl = 4194304)) : t = 1);
  var r = yt();
  e = rn(e, t), e !== null && (Os(e, t, r), Et(e, r));
}
function xT(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Kx(e, r);
}
function ST(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode, o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  n !== null && n.delete(t), Kx(e, r);
}
var Yx;
Yx = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pt.current)
      _t = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return _t = !1, lT(e, t, r);
      _t = !!(e.flags & 131072);
    }
  else
    _t = !1, Oe && t.flags & 1048576 && Qb(t, Au, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Xl(e, t), e = t.pendingProps;
      var o = Ei(t, pt.current);
      gi(t, r), o = Vh(null, t, n, e, o, r);
      var i = Wh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Tt(n) ? (i = !0, Eu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Dh(t), o.updater = gc, t.stateNode = o, o._reactInternals = t, up(t, n, e, r), t = fp(null, t, n, !0, i, r)) : (t.tag = 0, Oe && i && Ah(t), mt(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Xl(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = kT(n), e = fr(n, e), o) {
          case 0:
            t = dp(null, t, n, e, r);
            break e;
          case 1:
            t = Og(null, t, n, e, r);
            break e;
          case 11:
            t = Rg(null, t, n, e, r);
            break e;
          case 14:
            t = Mg(null, t, n, fr(n.type, e), r);
            break e;
        }
        throw Error(O(
          306,
          n,
          ""
        ));
      }
      return t;
    case 0:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : fr(n, o), dp(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : fr(n, o), Og(e, t, n, o, r);
    case 3:
      e: {
        if (Rx(t), e === null)
          throw Error(O(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, tx(e, t), Ou(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Mi(Error(O(423)), t), t = Ig(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = Mi(Error(O(424)), t), t = Ig(e, t, n, r, o);
            break e;
          } else
            for (Ft = En(t.stateNode.containerInfo.firstChild), Dt = t, Oe = !0, hr = null, r = ix(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if ($i(), n === o) {
            t = nn(e, t, r);
            break e;
          }
          mt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ax(t), e === null && ap(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, tp(n, o) ? a = null : i !== null && tp(n, i) && (t.flags |= 32), Ax(e, t), mt(e, t, a, r), t.child;
    case 6:
      return e === null && ap(t), null;
    case 13:
      return Mx(e, t, r);
    case 4:
      return jh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Ai(t, null, n, r) : mt(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : fr(n, o), Rg(e, t, n, o, r);
    case 7:
      return mt(e, t, t.pendingProps, r), t.child;
    case 8:
      return mt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return mt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, we(Ru, n._currentValue), n._currentValue = a, i !== null)
          if (yr(i.value, a)) {
            if (i.children === o.children && !Pt.current) {
              t = nn(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      l = Xr(-1, r & -r), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), sp(
                      i.return,
                      r,
                      t
                    ), s.lanes |= r;
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10)
                a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (a = i.return, a === null)
                  throw Error(O(341));
                a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), sp(a, r, t), a = i.sibling;
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
        mt(e, t, o.children, r), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, n = t.pendingProps.children, gi(t, r), o = or(o), n = n(o), t.flags |= 1, mt(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = fr(n, t.pendingProps), o = fr(n.type, o), Mg(e, t, n, o, r);
    case 15:
      return Ex(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : fr(n, o), Xl(e, t), t.tag = 1, Tt(n) ? (e = !0, Eu(t)) : e = !1, gi(t, r), nx(t, n, o), up(t, n, o, r), fp(null, t, n, !0, e, r);
    case 19:
      return Ox(e, t, r);
    case 22:
      return $x(e, t, r);
  }
  throw Error(O(156, t.tag));
};
function qx(e, t) {
  return Sb(e, t);
}
function wT(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Jt(e, t, r, n) {
  return new wT(e, t, r, n);
}
function Jh(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function kT(e) {
  if (typeof e == "function")
    return Jh(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === yh)
      return 11;
    if (e === bh)
      return 14;
  }
  return 2;
}
function Mn(e, t) {
  var r = e.alternate;
  return r === null ? (r = Jt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Jl(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    Jh(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case Ho:
          return co(r.children, o, i, t);
        case gh:
          a = 8, o |= 8;
          break;
        case Of:
          return e = Jt(12, r, t, o | 2), e.elementType = Of, e.lanes = i, e;
        case If:
          return e = Jt(13, r, t, o), e.elementType = If, e.lanes = i, e;
        case zf:
          return e = Jt(19, r, t, o), e.elementType = zf, e.lanes = i, e;
        case ob:
          return Sc(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case rb:
                a = 10;
                break e;
              case nb:
                a = 9;
                break e;
              case yh:
                a = 11;
                break e;
              case bh:
                a = 14;
                break e;
              case vn:
                a = 16, n = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = Jt(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function co(e, t, r, n) {
  return e = Jt(7, e, n, t), e.lanes = r, e;
}
function Sc(e, t, r, n) {
  return e = Jt(22, e, n, t), e.elementType = ob, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Ld(e, t, r) {
  return e = Jt(6, e, null, t), e.lanes = r, e;
}
function Bd(e, t, r) {
  return t = Jt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function CT(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xd(0), this.expirationTimes = xd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xd(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function em(e, t, r, n, o, i, a, s, l) {
  return e = new CT(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Jt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dh(i), e;
}
function _T(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Uo, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Xx(e) {
  if (!e)
    return Dn;
  e = e._reactInternals;
  e: {
    if ($o(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Tt(r))
      return qb(e, r, t);
  }
  return t;
}
function Qx(e, t, r, n, o, i, a, s, l) {
  return e = em(r, n, !0, e, o, i, a, s, l), e.context = Xx(null), r = e.current, n = yt(), o = Rn(r), i = Xr(n, o), i.callback = t ?? null, $n(r, i, o), e.current.lanes = o, Os(e, o, n), Et(e, n), e;
}
function wc(e, t, r, n) {
  var o = t.current, i = yt(), a = Rn(o);
  return r = Xx(r), t.context === null ? t.context = r : t.pendingContext = r, t = Xr(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = $n(o, t, a), e !== null && (gr(e, o, a, i), Kl(e, o, a)), a;
}
function Nu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ug(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function tm(e, t) {
  Ug(e, t), (e = e.alternate) && Ug(e, t);
}
function PT() {
  return null;
}
var Zx = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rm(e) {
  this._internalRoot = e;
}
kc.prototype.render = rm.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  wc(e, t, null, null);
};
kc.prototype.unmount = rm.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Co(function() {
      wc(null, e, null, null);
    }), t[tn] = null;
  }
};
function kc(e) {
  this._internalRoot = e;
}
kc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Eb();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < bn.length && t !== 0 && t < bn[r].priority; r++)
      ;
    bn.splice(r, 0, e), r === 0 && Ab(e);
  }
};
function nm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Hg() {
}
function TT(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = Nu(a);
        i.call(u);
      };
    }
    var a = Qx(t, n, e, 0, null, !1, !1, "", Hg);
    return e._reactRootContainer = a, e[tn] = a.current, is(e.nodeType === 8 ? e.parentNode : e), Co(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = Nu(l);
      s.call(u);
    };
  }
  var l = em(e, 0, !1, null, null, !1, !1, "", Hg);
  return e._reactRootContainer = l, e[tn] = l.current, is(e.nodeType === 8 ? e.parentNode : e), Co(function() {
    wc(t, l, r, n);
  }), l;
}
function _c(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Nu(a);
        s.call(l);
      };
    }
    wc(t, a, e, o);
  } else
    a = TT(r, t, e, o, n);
  return Nu(a);
}
Pb = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = xa(t.pendingLanes);
        r !== 0 && (wh(t, r | 1), Et(t, Be()), !(ae & 6) && (Oi = Be() + 500, Vn()));
      }
      break;
    case 13:
      Co(function() {
        var n = rn(e, 1);
        if (n !== null) {
          var o = yt();
          gr(n, e, 1, o);
        }
      }), tm(e, 1);
  }
};
kh = function(e) {
  if (e.tag === 13) {
    var t = rn(e, 134217728);
    if (t !== null) {
      var r = yt();
      gr(t, e, 134217728, r);
    }
    tm(e, 134217728);
  }
};
Tb = function(e) {
  if (e.tag === 13) {
    var t = Rn(e), r = rn(e, t);
    if (r !== null) {
      var n = yt();
      gr(r, e, t, n);
    }
    tm(e, t);
  }
};
Eb = function() {
  return me;
};
$b = function(e, t) {
  var r = me;
  try {
    return me = e, t();
  } finally {
    me = r;
  }
};
Hf = function(e, t, r) {
  switch (t) {
    case "input":
      if (jf(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; )
          r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = mc(n);
            if (!o)
              throw Error(O(90));
            ab(n), jf(n, o);
          }
        }
      }
      break;
    case "textarea":
      lb(e, r);
      break;
    case "select":
      t = r.value, t != null && pi(e, !!r.multiple, t, !1);
  }
};
mb = Xh;
vb = Co;
var ET = { usingClientEntryPoint: !1, Events: [zs, qo, mc, pb, hb, Xh] }, ua = { findFiberByHostInstance: oo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, $T = { bundleType: ua.bundleType, version: ua.version, rendererPackageName: ua.rendererPackageName, rendererConfig: ua.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ln.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bb(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ua.findFiberByHostInstance || PT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sl.isDisabled && Sl.supportsFiber)
    try {
      dc = Sl.inject($T), $r = Sl;
    } catch {
    }
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ET;
Wt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nm(t))
    throw Error(O(200));
  return _T(e, t, null, r);
};
Wt.createRoot = function(e, t) {
  if (!nm(e))
    throw Error(O(299));
  var r = !1, n = "", o = Zx;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = em(e, 1, !1, null, null, r, !1, n, o), e[tn] = t.current, is(e.nodeType === 8 ? e.parentNode : e), new rm(t);
};
Wt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = bb(t), e = e === null ? null : e.stateNode, e;
};
Wt.flushSync = function(e) {
  return Co(e);
};
Wt.hydrate = function(e, t, r) {
  if (!Cc(t))
    throw Error(O(200));
  return _c(null, e, t, !0, r);
};
Wt.hydrateRoot = function(e, t, r) {
  if (!nm(e))
    throw Error(O(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = Zx;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = Qx(t, null, e, 1, r ?? null, o, !1, i, a), e[tn] = t.current, is(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new kc(t);
};
Wt.render = function(e, t, r) {
  if (!Cc(t))
    throw Error(O(200));
  return _c(null, e, t, !1, r);
};
Wt.unmountComponentAtNode = function(e) {
  if (!Cc(e))
    throw Error(O(40));
  return e._reactRootContainer ? (Co(function() {
    _c(null, null, e, !1, function() {
      e._reactRootContainer = null, e[tn] = null;
    });
  }), !0) : !1;
};
Wt.unstable_batchedUpdates = Xh;
Wt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Cc(r))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return _c(e, t, r, !1, n);
};
Wt.version = "18.2.0-next-9e3b772b8-20220608";
function Jx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx);
    } catch (e) {
      console.error(e);
    }
}
Jx(), Q1.exports = Wt;
var om = Q1.exports, Gg = om;
Rf.createRoot = Gg.createRoot, Rf.hydrateRoot = Gg.hydrateRoot;
var eS = "Expected a function", Kg = NaN, AT = "[object Symbol]", RT = /^\s+|\s+$/g, MT = /^[-+]0x[0-9a-f]+$/i, OT = /^0b[01]+$/i, IT = /^0o[0-7]+$/i, zT = parseInt, FT = typeof wn == "object" && wn && wn.Object === Object && wn, DT = typeof self == "object" && self && self.Object === Object && self, jT = FT || DT || Function("return this")(), LT = Object.prototype, BT = LT.toString, NT = Math.max, VT = Math.min, Nd = function() {
  return jT.Date.now();
};
function WT(e, t, r) {
  var n, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(eS);
  t = Yg(t) || 0, Vu(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? NT(Yg(r.maxWait) || 0, t) : i, f = "trailing" in r ? !!r.trailing : f);
  function p(E) {
    var _ = n, $ = o;
    return n = o = void 0, u = E, a = e.apply($, _), a;
  }
  function v(E) {
    return u = E, s = setTimeout(m, t), c ? p(E) : a;
  }
  function g(E) {
    var _ = E - l, $ = E - u, R = t - _;
    return d ? VT(R, i - $) : R;
  }
  function x(E) {
    var _ = E - l, $ = E - u;
    return l === void 0 || _ >= t || _ < 0 || d && $ >= i;
  }
  function m() {
    var E = Nd();
    if (x(E))
      return h(E);
    s = setTimeout(m, g(E));
  }
  function h(E) {
    return s = void 0, f && n ? p(E) : (n = o = void 0, a);
  }
  function y() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = o = s = void 0;
  }
  function w() {
    return s === void 0 ? a : h(Nd());
  }
  function k() {
    var E = Nd(), _ = x(E);
    if (n = arguments, o = this, l = E, _) {
      if (s === void 0)
        return v(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return k.cancel = y, k.flush = w, k;
}
function UT(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(eS);
  return Vu(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), WT(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
function Vu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function HT(e) {
  return !!e && typeof e == "object";
}
function GT(e) {
  return typeof e == "symbol" || HT(e) && BT.call(e) == AT;
}
function Yg(e) {
  if (typeof e == "number")
    return e;
  if (GT(e))
    return Kg;
  if (Vu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Vu(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(RT, "");
  var r = OT.test(e);
  return r || IT.test(e) ? zT(e.slice(2), r ? 2 : 8) : MT.test(e) ? Kg : +e;
}
var KT = UT;
const YT = /* @__PURE__ */ Rs(KT);
function qT(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function XT(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var QT = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(XT(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = qT(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ct = "-ms-", Wu = "-moz-", ce = "-webkit-", tS = "comm", im = "rule", am = "decl", ZT = "@import", rS = "@keyframes", JT = "@layer", eE = Math.abs, Pc = String.fromCharCode, tE = Object.assign;
function rE(e, t) {
  return ot(e, 0) ^ 45 ? (((t << 2 ^ ot(e, 0)) << 2 ^ ot(e, 1)) << 2 ^ ot(e, 2)) << 2 ^ ot(e, 3) : 0;
}
function nS(e) {
  return e.trim();
}
function nE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function de(e, t, r) {
  return e.replace(t, r);
}
function Cp(e, t) {
  return e.indexOf(t);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function hs(e, t, r) {
  return e.slice(t, r);
}
function _r(e) {
  return e.length;
}
function sm(e) {
  return e.length;
}
function wl(e, t) {
  return t.push(e), e;
}
function oE(e, t) {
  return e.map(t).join("");
}
var Tc = 1, Ii = 1, oS = 0, Rt = 0, We = 0, Gi = "";
function Ec(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Tc, column: Ii, length: a, return: "" };
}
function ca(e, t) {
  return tE(Ec("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function iE() {
  return We;
}
function aE() {
  return We = Rt > 0 ? ot(Gi, --Rt) : 0, Ii--, We === 10 && (Ii = 1, Tc--), We;
}
function jt() {
  return We = Rt < oS ? ot(Gi, Rt++) : 0, Ii++, We === 10 && (Ii = 1, Tc++), We;
}
function Rr() {
  return ot(Gi, Rt);
}
function eu() {
  return Rt;
}
function Ds(e, t) {
  return hs(Gi, e, t);
}
function ms(e) {
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
function iS(e) {
  return Tc = Ii = 1, oS = _r(Gi = e), Rt = 0, [];
}
function aS(e) {
  return Gi = "", e;
}
function tu(e) {
  return nS(Ds(Rt - 1, _p(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sE(e) {
  for (; (We = Rr()) && We < 33; )
    jt();
  return ms(e) > 2 || ms(We) > 3 ? "" : " ";
}
function lE(e, t) {
  for (; --t && jt() && !(We < 48 || We > 102 || We > 57 && We < 65 || We > 70 && We < 97); )
    ;
  return Ds(e, eu() + (t < 6 && Rr() == 32 && jt() == 32));
}
function _p(e) {
  for (; jt(); )
    switch (We) {
      case e:
        return Rt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _p(We);
        break;
      case 40:
        e === 41 && _p(e);
        break;
      case 92:
        jt();
        break;
    }
  return Rt;
}
function uE(e, t) {
  for (; jt() && e + We !== 57; )
    if (e + We === 84 && Rr() === 47)
      break;
  return "/*" + Ds(t, Rt - 1) + "*" + Pc(e === 47 ? e : jt());
}
function cE(e) {
  for (; !ms(Rr()); )
    jt();
  return Ds(e, Rt);
}
function dE(e) {
  return aS(ru("", null, null, null, [""], e = iS(e), 0, [0], e));
}
function ru(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, v = 0, g = 1, x = 1, m = 1, h = 0, y = "", w = o, k = i, E = n, _ = y; x; )
    switch (v = h, h = jt()) {
      case 40:
        if (v != 108 && ot(_, d - 1) == 58) {
          Cp(_ += de(tu(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += tu(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += sE(v);
        break;
      case 92:
        _ += lE(eu() - 1, 7);
        continue;
      case 47:
        switch (Rr()) {
          case 42:
          case 47:
            wl(fE(uE(jt(), eu()), t, r), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        s[u++] = _r(_) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (_ = de(_, /\f/g, "")), p > 0 && _r(_) - d && wl(p > 32 ? Xg(_ + ";", n, r, d - 1) : Xg(de(_, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (wl(E = qg(_, t, r, u, c, o, s, y, w = [], k = [], d), i), h === 123)
              if (c === 0)
                ru(_, t, E, E, w, i, d, s, k);
              else
                switch (f === 99 && ot(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ru(e, E, E, n && wl(qg(e, E, E, 0, 0, o, s, y, o, w = [], d), k), o, k, d, s, n ? w : k);
                    break;
                  default:
                    ru(_, E, E, E, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, g = m = 1, y = _ = "", d = a;
        break;
      case 58:
        d = 1 + _r(_), p = v;
      default:
        if (g < 1) {
          if (h == 123)
            --g;
          else if (h == 125 && g++ == 0 && aE() == 125)
            continue;
        }
        switch (_ += Pc(h), h * g) {
          case 38:
            m = c > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[u++] = (_r(_) - 1) * m, m = 1;
            break;
          case 64:
            Rr() === 45 && (_ += tu(jt())), f = Rr(), c = d = _r(y = _ += cE(eu())), h++;
            break;
          case 45:
            v === 45 && _r(_) == 2 && (g = 0);
        }
    }
  return i;
}
function qg(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = sm(f), v = 0, g = 0, x = 0; v < n; ++v)
    for (var m = 0, h = hs(e, d + 1, d = eE(g = a[v])), y = e; m < p; ++m)
      (y = nS(g > 0 ? f[m] + " " + h : de(h, /&\f/g, f[m]))) && (l[x++] = y);
  return Ec(e, t, r, o === 0 ? im : s, l, u, c);
}
function fE(e, t, r) {
  return Ec(e, t, r, tS, Pc(iE()), hs(e, 2, -2), 0);
}
function Xg(e, t, r, n) {
  return Ec(e, t, r, am, hs(e, 0, n), hs(e, n + 1, -1), n);
}
function bi(e, t) {
  for (var r = "", n = sm(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function pE(e, t, r, n) {
  switch (e.type) {
    case JT:
      if (e.children.length)
        break;
    case ZT:
    case am:
      return e.return = e.return || e.value;
    case tS:
      return "";
    case rS:
      return e.return = e.value + "{" + bi(e.children, n) + "}";
    case im:
      e.value = e.props.join(",");
  }
  return _r(r = bi(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function hE(e) {
  var t = sm(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function mE(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Qg = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function sS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var vE = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Rr(), o === 38 && i === 12 && (r[n] = 1), !ms(i); )
    jt();
  return Ds(t, Rt);
}, gE = function(t, r) {
  var n = -1, o = 44;
  do
    switch (ms(o)) {
      case 0:
        o === 38 && Rr() === 12 && (r[n] = 1), t[n] += vE(Rt - 1, r, n);
        break;
      case 2:
        t[n] += tu(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Rr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Pc(o);
    }
  while (o = jt());
  return t;
}, yE = function(t, r) {
  return aS(gE(iS(t), r));
}, Zg = /* @__PURE__ */ new WeakMap(), bE = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Zg.get(n)) && !o) {
      Zg.set(t, !0);
      for (var i = [], a = yE(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, xE = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function lS(e, t) {
  switch (rE(e, t)) {
    case 5103:
      return ce + "print-" + e + e;
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
      return ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + e + Wu + e + ct + e + e;
    case 6828:
    case 4268:
      return ce + e + ct + e + e;
    case 6165:
      return ce + e + ct + "flex-" + e + e;
    case 5187:
      return ce + e + de(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + ct + "flex-$1$2") + e;
    case 5443:
      return ce + e + ct + "flex-item-" + de(e, /flex-|-self/, "") + e;
    case 4675:
      return ce + e + ct + "flex-line-pack" + de(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ce + e + ct + de(e, "shrink", "negative") + e;
    case 5292:
      return ce + e + ct + de(e, "basis", "preferred-size") + e;
    case 6060:
      return ce + "box-" + de(e, "-grow", "") + ce + e + ct + de(e, "grow", "positive") + e;
    case 4554:
      return ce + de(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    case 6187:
      return de(de(de(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return de(e, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return de(de(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + ct + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return de(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
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
      if (_r(e) - 1 - t > 6)
        switch (ot(e, t + 1)) {
          case 109:
            if (ot(e, t + 4) !== 45)
              break;
          case 102:
            return de(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + Wu + (ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Cp(e, "stretch") ? lS(de(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ot(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ot(e, _r(e) - 3 - (~Cp(e, "!important") && 10))) {
        case 107:
          return de(e, ":", ":" + ce) + e;
        case 101:
          return de(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + ct + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return ce + e + ct + de(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ce + e + ct + de(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ce + e + ct + de(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ce + e + ct + e + e;
  }
  return e;
}
var SE = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case am:
        t.return = lS(t.value, t.length);
        break;
      case rS:
        return bi([ca(t, {
          value: de(t.value, "@", "@" + ce)
        })], o);
      case im:
        if (t.length)
          return oE(t.props, function(i) {
            switch (nE(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return bi([ca(t, {
                  props: [de(i, /:(read-\w+)/, ":" + Wu + "$1")]
                })], o);
              case "::placeholder":
                return bi([ca(t, {
                  props: [de(i, /:(plac\w+)/, ":" + ce + "input-$1")]
                }), ca(t, {
                  props: [de(i, /:(plac\w+)/, ":" + Wu + "$1")]
                }), ca(t, {
                  props: [de(i, /:(plac\w+)/, ct + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, wE = [SE], kE = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var x = g.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || wE, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var x = g.getAttribute("data-emotion").split(" "), m = 1; m < x.length; m++)
        i[x[m]] = !0;
      s.push(g);
    }
  );
  var l, u = [bE, xE];
  {
    var c, d = [pE, mE(function(g) {
      c.insert(g);
    })], f = hE(u.concat(o, d)), p = function(x) {
      return bi(dE(x), f);
    };
    l = function(x, m, h, y) {
      c = h, p(x ? x + "{" + m.styles + "}" : m.styles), y && (v.inserted[m.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new QT({
      key: r,
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
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _o.apply(this, arguments);
}
var uS = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et = typeof Symbol == "function" && Symbol.for, lm = et ? Symbol.for("react.element") : 60103, um = et ? Symbol.for("react.portal") : 60106, $c = et ? Symbol.for("react.fragment") : 60107, Ac = et ? Symbol.for("react.strict_mode") : 60108, Rc = et ? Symbol.for("react.profiler") : 60114, Mc = et ? Symbol.for("react.provider") : 60109, Oc = et ? Symbol.for("react.context") : 60110, cm = et ? Symbol.for("react.async_mode") : 60111, Ic = et ? Symbol.for("react.concurrent_mode") : 60111, zc = et ? Symbol.for("react.forward_ref") : 60112, Fc = et ? Symbol.for("react.suspense") : 60113, CE = et ? Symbol.for("react.suspense_list") : 60120, Dc = et ? Symbol.for("react.memo") : 60115, jc = et ? Symbol.for("react.lazy") : 60116, _E = et ? Symbol.for("react.block") : 60121, PE = et ? Symbol.for("react.fundamental") : 60117, TE = et ? Symbol.for("react.responder") : 60118, EE = et ? Symbol.for("react.scope") : 60119;
function Ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case lm:
        switch (e = e.type, e) {
          case cm:
          case Ic:
          case $c:
          case Rc:
          case Ac:
          case Fc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Oc:
              case zc:
              case jc:
              case Dc:
              case Mc:
                return e;
              default:
                return t;
            }
        }
      case um:
        return t;
    }
  }
}
function cS(e) {
  return Ht(e) === Ic;
}
ve.AsyncMode = cm;
ve.ConcurrentMode = Ic;
ve.ContextConsumer = Oc;
ve.ContextProvider = Mc;
ve.Element = lm;
ve.ForwardRef = zc;
ve.Fragment = $c;
ve.Lazy = jc;
ve.Memo = Dc;
ve.Portal = um;
ve.Profiler = Rc;
ve.StrictMode = Ac;
ve.Suspense = Fc;
ve.isAsyncMode = function(e) {
  return cS(e) || Ht(e) === cm;
};
ve.isConcurrentMode = cS;
ve.isContextConsumer = function(e) {
  return Ht(e) === Oc;
};
ve.isContextProvider = function(e) {
  return Ht(e) === Mc;
};
ve.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lm;
};
ve.isForwardRef = function(e) {
  return Ht(e) === zc;
};
ve.isFragment = function(e) {
  return Ht(e) === $c;
};
ve.isLazy = function(e) {
  return Ht(e) === jc;
};
ve.isMemo = function(e) {
  return Ht(e) === Dc;
};
ve.isPortal = function(e) {
  return Ht(e) === um;
};
ve.isProfiler = function(e) {
  return Ht(e) === Rc;
};
ve.isStrictMode = function(e) {
  return Ht(e) === Ac;
};
ve.isSuspense = function(e) {
  return Ht(e) === Fc;
};
ve.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === $c || e === Ic || e === Rc || e === Ac || e === Fc || e === CE || typeof e == "object" && e !== null && (e.$$typeof === jc || e.$$typeof === Dc || e.$$typeof === Mc || e.$$typeof === Oc || e.$$typeof === zc || e.$$typeof === PE || e.$$typeof === TE || e.$$typeof === EE || e.$$typeof === _E);
};
ve.typeOf = Ht;
uS.exports = ve;
var $E = uS.exports, dS = $E, AE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, RE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fS = {};
fS[dS.ForwardRef] = AE;
fS[dS.Memo] = RE;
var ME = !0;
function OE(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var pS = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ME === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, hS = function(t, r, n) {
  pS(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function IE(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var zE = {
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
}, FE = /[A-Z]|^ms/g, DE = /_EMO_([^_]+?)_([^]*?)_EMO_/g, mS = function(t) {
  return t.charCodeAt(1) === 45;
}, Jg = function(t) {
  return t != null && typeof t != "boolean";
}, Vd = /* @__PURE__ */ sS(function(e) {
  return mS(e) ? e : e.replace(FE, "-$&").toLowerCase();
}), e0 = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(DE, function(n, o, i) {
          return Pr = {
            name: o,
            styles: i,
            next: Pr
          }, o;
        });
  }
  return zE[t] !== 1 && !mS(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function vs(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Pr = {
          name: r.name,
          styles: r.styles,
          next: Pr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Pr = {
              name: n.name,
              styles: n.styles,
              next: Pr
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return jE(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Pr, a = r(e);
        return Pr = i, vs(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function jE(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += vs(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Jg(a) && (n += Vd(i) + ":" + e0(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Jg(a[s]) && (n += Vd(i) + ":" + e0(i, a[s]) + ";");
      else {
        var l = vs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Vd(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var t0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Pr, dm = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Pr = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += vs(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += vs(n, r, t[s]), o && (i += a[s]);
  t0.lastIndex = 0;
  for (var l = "", u; (u = t0.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = IE(i) + l;
  return {
    name: c,
    styles: i,
    next: Pr
  };
}, LE = function(t) {
  return t();
}, vS = Bv.useInsertionEffect ? Bv.useInsertionEffect : !1, BE = vS || LE, r0 = vS || b.useLayoutEffect, gS = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ kE({
    key: "css"
  }) : null
);
gS.Provider;
var yS = function(t) {
  return /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = b.useContext(gS);
    return t(r, o, n);
  });
}, gs = /* @__PURE__ */ b.createContext({}), NE = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return _o({}, t, r);
}, VE = /* @__PURE__ */ Qg(function(e) {
  return Qg(function(t) {
    return NE(e, t);
  });
}), WE = function(t) {
  var r = b.useContext(gs);
  return t.theme !== r && (r = VE(r)(t.theme)), /* @__PURE__ */ b.createElement(gs.Provider, {
    value: r
  }, t.children);
}, Lc = /* @__PURE__ */ yS(function(e, t) {
  var r = e.styles, n = dm([r], void 0, b.useContext(gs)), o = b.useRef();
  return r0(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), r0(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && hS(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function UE() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return dm(t);
}
var Bc = function() {
  var t = UE.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, bS = String.raw, xS = bS`
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
`, HE = () => /* @__PURE__ */ C.jsx(Lc, { styles: xS }), GE = ({ scope: e = "" }) => /* @__PURE__ */ C.jsx(
  Lc,
  {
    styles: bS`
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

      ${xS}
    `
  }
);
function KE(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ot(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = b.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = b.useContext(s);
    if (!c && r) {
      const d = new Error(
        i ?? KE(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [YE, qE] = Ot({
  strict: !1,
  name: "PortalManagerContext"
});
function SS(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ C.jsx(YE, { value: { zIndex: r }, children: t });
}
SS.displayName = "PortalManager";
var On = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect, [wS, XE] = Ot({
  strict: !1,
  name: "PortalContext"
}), fm = "chakra-portal", QE = ".chakra-portal", ZE = (e) => /* @__PURE__ */ C.jsx(
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
), JE = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
  b.useEffect(() => a({}), []);
  const s = XE(), l = qE();
  On(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = fm, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ C.jsx(ZE, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? om.createPortal(
    /* @__PURE__ */ C.jsx(wS, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ C.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, e$ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = fm), l;
  }, [o]), [, s] = b.useState({});
  return On(() => s({}), []), On(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? om.createPortal(
    /* @__PURE__ */ C.jsx(wS, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function js(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ C.jsx(e$, { containerRef: r, ...n }) : /* @__PURE__ */ C.jsx(JE, { ...n });
}
js.className = fm;
js.selector = QE;
js.displayName = "Portal";
function pm() {
  const e = b.useContext(
    gs
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var hm = b.createContext({});
hm.displayName = "ColorModeContext";
function Ls() {
  const e = b.useContext(hm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var kl = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function t$(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? kl.dark : kl.light), document.body.classList.remove(n ? kl.light : kl.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(n) {
      var o;
      return ((o = r.query().matches) != null ? o : n === "dark") ? "dark" : "light";
    },
    addListener(n) {
      const o = r.query(), i = (a) => {
        n(a.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
        typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i);
      };
    },
    preventTransition() {
      const n = document.createElement("style");
      return n.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), document.head.appendChild(n), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(n);
          });
        });
      };
    }
  };
  return r;
}
var r$ = "chakra-ui-color-mode";
function n$(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {
      }
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var o$ = n$(r$), n0 = () => {
};
function o0(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function kS(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = o$
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(
    () => o0(a, s)
  ), [c, d] = b.useState(
    () => o0(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: v, addListener: g } = b.useMemo(
    () => t$({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, m = b.useCallback(
    (w) => {
      const k = w === "system" ? f() : w;
      u(k), p(k === "dark"), v(k), a.set(k);
    },
    [a, f, p, v]
  );
  On(() => {
    o === "system" && d(f());
  }, []), b.useEffect(() => {
    const w = a.get();
    if (w) {
      m(w);
      return;
    }
    if (o === "system") {
      m("system");
      return;
    }
    m(s);
  }, [a, s, o, m]);
  const h = b.useCallback(() => {
    m(x === "dark" ? "light" : "dark");
  }, [x, m]);
  b.useEffect(() => {
    if (n)
      return g(m);
  }, [n, g, m]);
  const y = b.useMemo(
    () => ({
      colorMode: t ?? x,
      toggleColorMode: t ? n0 : h,
      setColorMode: t ? n0 : m,
      forced: t !== void 0
    }),
    [x, h, m, t]
  );
  return /* @__PURE__ */ C.jsx(hm.Provider, { value: y, children: r });
}
kS.displayName = "ColorModeProvider";
var i$ = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function a$(e) {
  let t = e;
  return i$.has(t) || (t = "light"), t;
}
function s$(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = a$(t), i = r === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function l$(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ C.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: s$(e) }
    }
  );
}
function u$() {
  const e = Ls(), t = pm();
  return { ...e, theme: t };
}
var xe = (...e) => e.filter(Boolean).join(" ");
function rr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Kr(e, ...t) {
  return c$(e) ? e(...t) : e;
}
var c$ = (e) => typeof e == "function", ie = (e) => e ? "" : void 0, Wd = (e) => e ? !0 : void 0;
function ye(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function CS(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Uu = { exports: {} };
Uu.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", v = "[object GeneratorFunction]", g = "[object Map]", x = "[object Number]", m = "[object Null]", h = "[object Object]", y = "[object Proxy]", w = "[object RegExp]", k = "[object Set]", E = "[object String]", _ = "[object Undefined]", $ = "[object WeakMap]", R = "[object ArrayBuffer]", M = "[object DataView]", j = "[object Float32Array]", q = "[object Float64Array]", G = "[object Int8Array]", K = "[object Int16Array]", Z = "[object Int32Array]", Y = "[object Uint8Array]", ee = "[object Uint8ClampedArray]", I = "[object Uint16Array]", L = "[object Uint32Array]", N = /[\\^$.*+?()[\]{}|]/g, B = /^\[object .+?Constructor\]$/, X = /^(?:0|[1-9]\d*)$/, H = {};
  H[j] = H[q] = H[G] = H[K] = H[Z] = H[Y] = H[ee] = H[I] = H[L] = !0, H[s] = H[l] = H[R] = H[c] = H[M] = H[d] = H[f] = H[p] = H[g] = H[x] = H[h] = H[w] = H[k] = H[E] = H[$] = !1;
  var Q = typeof wn == "object" && wn && wn.Object === Object && wn, Pe = typeof self == "object" && self && self.Object === Object && self, se = Q || Pe || Function("return this")(), ge = t && !t.nodeType && t, Se = ge && !0 && e && !e.nodeType && e, Ae = Se && Se.exports === ge, He = Ae && Q.process, Ge = function() {
    try {
      var S = Se && Se.require && Se.require("util").types;
      return S || He && He.binding && He.binding("util");
    } catch {
    }
  }(), lr = Ge && Ge.isTypedArray;
  function ur(S, P, A) {
    switch (A.length) {
      case 0:
        return S.call(P);
      case 1:
        return S.call(P, A[0]);
      case 2:
        return S.call(P, A[0], A[1]);
      case 3:
        return S.call(P, A[0], A[1], A[2]);
    }
    return S.apply(P, A);
  }
  function Mo(S, P) {
    for (var A = -1, F = Array(S); ++A < S; )
      F[A] = P(A);
    return F;
  }
  function z(S) {
    return function(P) {
      return S(P);
    };
  }
  function he(S, P) {
    return S == null ? void 0 : S[P];
  }
  function le(S, P) {
    return function(A) {
      return S(P(A));
    };
  }
  var Xe = Array.prototype, un = Function.prototype, st = Object.prototype, br = se["__core-js_shared__"], cn = un.toString, Gt = st.hasOwnProperty, Oo = function() {
    var S = /[^.]+$/.exec(br && br.keys && br.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), Zi = st.toString, Zs = cn.call(Object), Js = RegExp(
    "^" + cn.call(Gt).replace(N, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Hn = Ae ? se.Buffer : void 0, xv = se.Symbol, Sv = se.Uint8Array, wv = Hn ? Hn.allocUnsafe : void 0, kv = le(Object.getPrototypeOf, Object), Cv = Object.create, t2 = st.propertyIsEnumerable, r2 = Xe.splice, Gn = xv ? xv.toStringTag : void 0, el = function() {
    try {
      var S = sd(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), n2 = Hn ? Hn.isBuffer : void 0, _v = Math.max, o2 = Date.now, Pv = sd(se, "Map"), Ji = sd(Object, "create"), i2 = /* @__PURE__ */ function() {
    function S() {
    }
    return function(P) {
      if (!Yn(P))
        return {};
      if (Cv)
        return Cv(P);
      S.prototype = P;
      var A = new S();
      return S.prototype = void 0, A;
    };
  }();
  function Kn(S) {
    var P = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++P < A; ) {
      var F = S[P];
      this.set(F[0], F[1]);
    }
  }
  function a2() {
    this.__data__ = Ji ? Ji(null) : {}, this.size = 0;
  }
  function s2(S) {
    var P = this.has(S) && delete this.__data__[S];
    return this.size -= P ? 1 : 0, P;
  }
  function l2(S) {
    var P = this.__data__;
    if (Ji) {
      var A = P[S];
      return A === n ? void 0 : A;
    }
    return Gt.call(P, S) ? P[S] : void 0;
  }
  function u2(S) {
    var P = this.__data__;
    return Ji ? P[S] !== void 0 : Gt.call(P, S);
  }
  function c2(S, P) {
    var A = this.__data__;
    return this.size += this.has(S) ? 0 : 1, A[S] = Ji && P === void 0 ? n : P, this;
  }
  Kn.prototype.clear = a2, Kn.prototype.delete = s2, Kn.prototype.get = l2, Kn.prototype.has = u2, Kn.prototype.set = c2;
  function jr(S) {
    var P = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++P < A; ) {
      var F = S[P];
      this.set(F[0], F[1]);
    }
  }
  function d2() {
    this.__data__ = [], this.size = 0;
  }
  function f2(S) {
    var P = this.__data__, A = tl(P, S);
    if (A < 0)
      return !1;
    var F = P.length - 1;
    return A == F ? P.pop() : r2.call(P, A, 1), --this.size, !0;
  }
  function p2(S) {
    var P = this.__data__, A = tl(P, S);
    return A < 0 ? void 0 : P[A][1];
  }
  function h2(S) {
    return tl(this.__data__, S) > -1;
  }
  function m2(S, P) {
    var A = this.__data__, F = tl(A, S);
    return F < 0 ? (++this.size, A.push([S, P])) : A[F][1] = P, this;
  }
  jr.prototype.clear = d2, jr.prototype.delete = f2, jr.prototype.get = p2, jr.prototype.has = h2, jr.prototype.set = m2;
  function Io(S) {
    var P = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++P < A; ) {
      var F = S[P];
      this.set(F[0], F[1]);
    }
  }
  function v2() {
    this.size = 0, this.__data__ = {
      hash: new Kn(),
      map: new (Pv || jr)(),
      string: new Kn()
    };
  }
  function g2(S) {
    var P = nl(this, S).delete(S);
    return this.size -= P ? 1 : 0, P;
  }
  function y2(S) {
    return nl(this, S).get(S);
  }
  function b2(S) {
    return nl(this, S).has(S);
  }
  function x2(S, P) {
    var A = nl(this, S), F = A.size;
    return A.set(S, P), this.size += A.size == F ? 0 : 1, this;
  }
  Io.prototype.clear = v2, Io.prototype.delete = g2, Io.prototype.get = y2, Io.prototype.has = b2, Io.prototype.set = x2;
  function zo(S) {
    var P = this.__data__ = new jr(S);
    this.size = P.size;
  }
  function S2() {
    this.__data__ = new jr(), this.size = 0;
  }
  function w2(S) {
    var P = this.__data__, A = P.delete(S);
    return this.size = P.size, A;
  }
  function k2(S) {
    return this.__data__.get(S);
  }
  function C2(S) {
    return this.__data__.has(S);
  }
  function _2(S, P) {
    var A = this.__data__;
    if (A instanceof jr) {
      var F = A.__data__;
      if (!Pv || F.length < r - 1)
        return F.push([S, P]), this.size = ++A.size, this;
      A = this.__data__ = new Io(F);
    }
    return A.set(S, P), this.size = A.size, this;
  }
  zo.prototype.clear = S2, zo.prototype.delete = w2, zo.prototype.get = k2, zo.prototype.has = C2, zo.prototype.set = _2;
  function P2(S, P) {
    var A = cd(S), F = !A && ud(S), oe = !A && !F && Rv(S), be = !A && !F && !oe && Ov(S), Re = A || F || oe || be, re = Re ? Mo(S.length, String) : [], Me = re.length;
    for (var Kt in S)
      (P || Gt.call(S, Kt)) && !(Re && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Kt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      oe && (Kt == "offset" || Kt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      be && (Kt == "buffer" || Kt == "byteLength" || Kt == "byteOffset") || // Skip index properties.
      $v(Kt, Me))) && re.push(Kt);
    return re;
  }
  function id(S, P, A) {
    (A !== void 0 && !ol(S[P], A) || A === void 0 && !(P in S)) && ad(S, P, A);
  }
  function T2(S, P, A) {
    var F = S[P];
    (!(Gt.call(S, P) && ol(F, A)) || A === void 0 && !(P in S)) && ad(S, P, A);
  }
  function tl(S, P) {
    for (var A = S.length; A--; )
      if (ol(S[A][0], P))
        return A;
    return -1;
  }
  function ad(S, P, A) {
    P == "__proto__" && el ? el(S, P, {
      configurable: !0,
      enumerable: !0,
      value: A,
      writable: !0
    }) : S[P] = A;
  }
  var E2 = N2();
  function rl(S) {
    return S == null ? S === void 0 ? _ : m : Gn && Gn in Object(S) ? V2(S) : Y2(S);
  }
  function Tv(S) {
    return ea(S) && rl(S) == s;
  }
  function $2(S) {
    if (!Yn(S) || G2(S))
      return !1;
    var P = fd(S) ? Js : B;
    return P.test(Z2(S));
  }
  function A2(S) {
    return ea(S) && Mv(S.length) && !!H[rl(S)];
  }
  function R2(S) {
    if (!Yn(S))
      return K2(S);
    var P = Av(S), A = [];
    for (var F in S)
      F == "constructor" && (P || !Gt.call(S, F)) || A.push(F);
    return A;
  }
  function Ev(S, P, A, F, oe) {
    S !== P && E2(P, function(be, Re) {
      if (oe || (oe = new zo()), Yn(be))
        M2(S, P, Re, A, Ev, F, oe);
      else {
        var re = F ? F(ld(S, Re), be, Re + "", S, P, oe) : void 0;
        re === void 0 && (re = be), id(S, Re, re);
      }
    }, Iv);
  }
  function M2(S, P, A, F, oe, be, Re) {
    var re = ld(S, A), Me = ld(P, A), Kt = Re.get(Me);
    if (Kt) {
      id(S, A, Kt);
      return;
    }
    var It = be ? be(re, Me, A + "", S, P, Re) : void 0, ta = It === void 0;
    if (ta) {
      var pd = cd(Me), hd = !pd && Rv(Me), Fv = !pd && !hd && Ov(Me);
      It = Me, pd || hd || Fv ? cd(re) ? It = re : J2(re) ? It = j2(re) : hd ? (ta = !1, It = z2(Me, !0)) : Fv ? (ta = !1, It = D2(Me, !0)) : It = [] : e_(Me) || ud(Me) ? (It = re, ud(re) ? It = t_(re) : (!Yn(re) || fd(re)) && (It = W2(Me))) : ta = !1;
    }
    ta && (Re.set(Me, It), oe(It, Me, F, be, Re), Re.delete(Me)), id(S, A, It);
  }
  function O2(S, P) {
    return X2(q2(S, P, zv), S + "");
  }
  var I2 = el ? function(S, P) {
    return el(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: n_(P),
      writable: !0
    });
  } : zv;
  function z2(S, P) {
    if (P)
      return S.slice();
    var A = S.length, F = wv ? wv(A) : new S.constructor(A);
    return S.copy(F), F;
  }
  function F2(S) {
    var P = new S.constructor(S.byteLength);
    return new Sv(P).set(new Sv(S)), P;
  }
  function D2(S, P) {
    var A = P ? F2(S.buffer) : S.buffer;
    return new S.constructor(A, S.byteOffset, S.length);
  }
  function j2(S, P) {
    var A = -1, F = S.length;
    for (P || (P = Array(F)); ++A < F; )
      P[A] = S[A];
    return P;
  }
  function L2(S, P, A, F) {
    var oe = !A;
    A || (A = {});
    for (var be = -1, Re = P.length; ++be < Re; ) {
      var re = P[be], Me = F ? F(A[re], S[re], re, A, S) : void 0;
      Me === void 0 && (Me = S[re]), oe ? ad(A, re, Me) : T2(A, re, Me);
    }
    return A;
  }
  function B2(S) {
    return O2(function(P, A) {
      var F = -1, oe = A.length, be = oe > 1 ? A[oe - 1] : void 0, Re = oe > 2 ? A[2] : void 0;
      for (be = S.length > 3 && typeof be == "function" ? (oe--, be) : void 0, Re && U2(A[0], A[1], Re) && (be = oe < 3 ? void 0 : be, oe = 1), P = Object(P); ++F < oe; ) {
        var re = A[F];
        re && S(P, re, F, be);
      }
      return P;
    });
  }
  function N2(S) {
    return function(P, A, F) {
      for (var oe = -1, be = Object(P), Re = F(P), re = Re.length; re--; ) {
        var Me = Re[S ? re : ++oe];
        if (A(be[Me], Me, be) === !1)
          break;
      }
      return P;
    };
  }
  function nl(S, P) {
    var A = S.__data__;
    return H2(P) ? A[typeof P == "string" ? "string" : "hash"] : A.map;
  }
  function sd(S, P) {
    var A = he(S, P);
    return $2(A) ? A : void 0;
  }
  function V2(S) {
    var P = Gt.call(S, Gn), A = S[Gn];
    try {
      S[Gn] = void 0;
      var F = !0;
    } catch {
    }
    var oe = Zi.call(S);
    return F && (P ? S[Gn] = A : delete S[Gn]), oe;
  }
  function W2(S) {
    return typeof S.constructor == "function" && !Av(S) ? i2(kv(S)) : {};
  }
  function $v(S, P) {
    var A = typeof S;
    return P = P ?? a, !!P && (A == "number" || A != "symbol" && X.test(S)) && S > -1 && S % 1 == 0 && S < P;
  }
  function U2(S, P, A) {
    if (!Yn(A))
      return !1;
    var F = typeof P;
    return (F == "number" ? dd(A) && $v(P, A.length) : F == "string" && P in A) ? ol(A[P], S) : !1;
  }
  function H2(S) {
    var P = typeof S;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? S !== "__proto__" : S === null;
  }
  function G2(S) {
    return !!Oo && Oo in S;
  }
  function Av(S) {
    var P = S && S.constructor, A = typeof P == "function" && P.prototype || st;
    return S === A;
  }
  function K2(S) {
    var P = [];
    if (S != null)
      for (var A in Object(S))
        P.push(A);
    return P;
  }
  function Y2(S) {
    return Zi.call(S);
  }
  function q2(S, P, A) {
    return P = _v(P === void 0 ? S.length - 1 : P, 0), function() {
      for (var F = arguments, oe = -1, be = _v(F.length - P, 0), Re = Array(be); ++oe < be; )
        Re[oe] = F[P + oe];
      oe = -1;
      for (var re = Array(P + 1); ++oe < P; )
        re[oe] = F[oe];
      return re[P] = A(Re), ur(S, this, re);
    };
  }
  function ld(S, P) {
    if (!(P === "constructor" && typeof S[P] == "function") && P != "__proto__")
      return S[P];
  }
  var X2 = Q2(I2);
  function Q2(S) {
    var P = 0, A = 0;
    return function() {
      var F = o2(), oe = i - (F - A);
      if (A = F, oe > 0) {
        if (++P >= o)
          return arguments[0];
      } else
        P = 0;
      return S.apply(void 0, arguments);
    };
  }
  function Z2(S) {
    if (S != null) {
      try {
        return cn.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function ol(S, P) {
    return S === P || S !== S && P !== P;
  }
  var ud = Tv(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Tv : function(S) {
    return ea(S) && Gt.call(S, "callee") && !t2.call(S, "callee");
  }, cd = Array.isArray;
  function dd(S) {
    return S != null && Mv(S.length) && !fd(S);
  }
  function J2(S) {
    return ea(S) && dd(S);
  }
  var Rv = n2 || o_;
  function fd(S) {
    if (!Yn(S))
      return !1;
    var P = rl(S);
    return P == p || P == v || P == u || P == y;
  }
  function Mv(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function Yn(S) {
    var P = typeof S;
    return S != null && (P == "object" || P == "function");
  }
  function ea(S) {
    return S != null && typeof S == "object";
  }
  function e_(S) {
    if (!ea(S) || rl(S) != h)
      return !1;
    var P = kv(S);
    if (P === null)
      return !0;
    var A = Gt.call(P, "constructor") && P.constructor;
    return typeof A == "function" && A instanceof A && cn.call(A) == Zs;
  }
  var Ov = lr ? z(lr) : A2;
  function t_(S) {
    return L2(S, Iv(S));
  }
  function Iv(S) {
    return dd(S) ? P2(S, !0) : R2(S);
  }
  var r_ = B2(function(S, P, A, F) {
    Ev(S, P, A, F);
  });
  function n_(S) {
    return function() {
      return S;
    };
  }
  function zv(S) {
    return S;
  }
  function o_() {
    return !1;
  }
  e.exports = r_;
})(Uu, Uu.exports);
var d$ = Uu.exports;
const er = /* @__PURE__ */ Rs(d$);
var f$ = (e) => /!(important)?$/.test(e), i0 = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, p$ = (e, t) => (r) => {
  const n = String(t), o = f$(n), i = i0(n), a = e ? `${e}.${i}` : i;
  let s = rr(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = i0(s), o ? `${s} !important` : s;
};
function mm(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = p$(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var Cl = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Yt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = mm({
      scale: e,
      transform: t
    }), n;
  };
}
var h$ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function m$(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: h$(t),
    transform: r ? mm({
      scale: r,
      compose: n
    }) : n
  };
}
var _S = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function v$() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ..._S
  ].join(" ");
}
function g$() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ..._S
  ].join(" ");
}
var y$ = {
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
}, b$ = {
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
function x$(e) {
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
var S$ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Pp = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, w$ = new Set(Object.values(Pp)), Tp = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), k$ = (e) => e.trim();
function C$(e, t) {
  if (e == null || Tp.has(e))
    return e;
  if (!(Ep(e) || Tp.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(k$).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Pp ? Pp[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (w$.has(f))
      return f;
    const p = f.indexOf(" "), [v, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = Ep(g) ? g : g && g.split(" "), m = `colors.${v}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : v;
    return x ? [
      h,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Ep = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), _$ = (e, t) => C$(e, t ?? {});
function P$(e) {
  return /^var\(--.+\)$/.test(e);
}
var T$ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Sr = (e) => (t) => `${e}(${t})`, ne = {
  filter(e) {
    return e !== "auto" ? e : y$;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : b$;
  },
  ring(e) {
    return x$(ne.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? v$() : e === "auto-gpu" ? g$() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = T$(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (P$(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: _$,
  blur: Sr("blur"),
  opacity: Sr("opacity"),
  brightness: Sr("brightness"),
  contrast: Sr("contrast"),
  dropShadow: Sr("drop-shadow"),
  grayscale: Sr("grayscale"),
  hueRotate: (e) => Sr("hue-rotate")(ne.degree(e)),
  invert: Sr("invert"),
  saturate: Sr("saturate"),
  sepia: Sr("sepia"),
  bgImage(e) {
    return e == null || Ep(e) || Tp.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = S$[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, T = {
  borderWidths: Yt("borderWidths"),
  borderStyles: Yt("borderStyles"),
  colors: Yt("colors"),
  borders: Yt("borders"),
  gradients: Yt("gradients", ne.gradient),
  radii: Yt("radii", ne.px),
  space: Yt("space", Cl(ne.vh, ne.px)),
  spaceT: Yt("space", Cl(ne.vh, ne.px)),
  degreeT(e) {
    return { property: e, transform: ne.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: mm({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Yt("sizes", Cl(ne.vh, ne.px)),
  sizesT: Yt("sizes", Cl(ne.vh, ne.fraction)),
  shadows: Yt("shadows"),
  logical: m$,
  blur: Yt("blur", ne.blur)
}, nu = {
  background: T.colors("background"),
  backgroundColor: T.colors("backgroundColor"),
  backgroundImage: T.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: ne.bgClip },
  bgSize: T.prop("backgroundSize"),
  bgPosition: T.prop("backgroundPosition"),
  bg: T.colors("background"),
  bgColor: T.colors("backgroundColor"),
  bgPos: T.prop("backgroundPosition"),
  bgRepeat: T.prop("backgroundRepeat"),
  bgAttachment: T.prop("backgroundAttachment"),
  bgGradient: T.gradients("backgroundImage"),
  bgClip: { transform: ne.bgClip }
};
Object.assign(nu, {
  bgImage: nu.backgroundImage,
  bgImg: nu.backgroundImage
});
var ue = {
  border: T.borders("border"),
  borderWidth: T.borderWidths("borderWidth"),
  borderStyle: T.borderStyles("borderStyle"),
  borderColor: T.colors("borderColor"),
  borderRadius: T.radii("borderRadius"),
  borderTop: T.borders("borderTop"),
  borderBlockStart: T.borders("borderBlockStart"),
  borderTopLeftRadius: T.radii("borderTopLeftRadius"),
  borderStartStartRadius: T.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: T.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: T.radii("borderTopRightRadius"),
  borderStartEndRadius: T.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: T.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: T.borders("borderRight"),
  borderInlineEnd: T.borders("borderInlineEnd"),
  borderBottom: T.borders("borderBottom"),
  borderBlockEnd: T.borders("borderBlockEnd"),
  borderBottomLeftRadius: T.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: T.radii("borderBottomRightRadius"),
  borderLeft: T.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: T.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: T.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: T.borders(["borderLeft", "borderRight"]),
  borderInline: T.borders("borderInline"),
  borderY: T.borders(["borderTop", "borderBottom"]),
  borderBlock: T.borders("borderBlock"),
  borderTopWidth: T.borderWidths("borderTopWidth"),
  borderBlockStartWidth: T.borderWidths("borderBlockStartWidth"),
  borderTopColor: T.colors("borderTopColor"),
  borderBlockStartColor: T.colors("borderBlockStartColor"),
  borderTopStyle: T.borderStyles("borderTopStyle"),
  borderBlockStartStyle: T.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: T.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: T.borderWidths("borderBlockEndWidth"),
  borderBottomColor: T.colors("borderBottomColor"),
  borderBlockEndColor: T.colors("borderBlockEndColor"),
  borderBottomStyle: T.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: T.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: T.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: T.borderWidths("borderInlineStartWidth"),
  borderLeftColor: T.colors("borderLeftColor"),
  borderInlineStartColor: T.colors("borderInlineStartColor"),
  borderLeftStyle: T.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: T.borderStyles("borderInlineStartStyle"),
  borderRightWidth: T.borderWidths("borderRightWidth"),
  borderInlineEndWidth: T.borderWidths("borderInlineEndWidth"),
  borderRightColor: T.colors("borderRightColor"),
  borderInlineEndColor: T.colors("borderInlineEndColor"),
  borderRightStyle: T.borderStyles("borderRightStyle"),
  borderInlineEndStyle: T.borderStyles("borderInlineEndStyle"),
  borderTopRadius: T.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: T.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: T.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: T.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ue, {
  rounded: ue.borderRadius,
  roundedTop: ue.borderTopRadius,
  roundedTopLeft: ue.borderTopLeftRadius,
  roundedTopRight: ue.borderTopRightRadius,
  roundedTopStart: ue.borderStartStartRadius,
  roundedTopEnd: ue.borderStartEndRadius,
  roundedBottom: ue.borderBottomRadius,
  roundedBottomLeft: ue.borderBottomLeftRadius,
  roundedBottomRight: ue.borderBottomRightRadius,
  roundedBottomStart: ue.borderEndStartRadius,
  roundedBottomEnd: ue.borderEndEndRadius,
  roundedLeft: ue.borderLeftRadius,
  roundedRight: ue.borderRightRadius,
  roundedStart: ue.borderInlineStartRadius,
  roundedEnd: ue.borderInlineEndRadius,
  borderStart: ue.borderInlineStart,
  borderEnd: ue.borderInlineEnd,
  borderTopStartRadius: ue.borderStartStartRadius,
  borderTopEndRadius: ue.borderStartEndRadius,
  borderBottomStartRadius: ue.borderEndStartRadius,
  borderBottomEndRadius: ue.borderEndEndRadius,
  borderStartRadius: ue.borderInlineStartRadius,
  borderEndRadius: ue.borderInlineEndRadius,
  borderStartWidth: ue.borderInlineStartWidth,
  borderEndWidth: ue.borderInlineEndWidth,
  borderStartColor: ue.borderInlineStartColor,
  borderEndColor: ue.borderInlineEndColor,
  borderStartStyle: ue.borderInlineStartStyle,
  borderEndStyle: ue.borderInlineEndStyle
});
var E$ = {
  color: T.colors("color"),
  textColor: T.colors("color"),
  fill: T.colors("fill"),
  stroke: T.colors("stroke")
}, $p = {
  boxShadow: T.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: T.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: T.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign($p, {
  shadow: $p.boxShadow
});
var $$ = {
  filter: { transform: ne.filter },
  blur: T.blur("--chakra-blur"),
  brightness: T.propT("--chakra-brightness", ne.brightness),
  contrast: T.propT("--chakra-contrast", ne.contrast),
  hueRotate: T.propT("--chakra-hue-rotate", ne.hueRotate),
  invert: T.propT("--chakra-invert", ne.invert),
  saturate: T.propT("--chakra-saturate", ne.saturate),
  dropShadow: T.propT("--chakra-drop-shadow", ne.dropShadow),
  backdropFilter: { transform: ne.backdropFilter },
  backdropBlur: T.blur("--chakra-backdrop-blur"),
  backdropBrightness: T.propT(
    "--chakra-backdrop-brightness",
    ne.brightness
  ),
  backdropContrast: T.propT("--chakra-backdrop-contrast", ne.contrast),
  backdropHueRotate: T.propT(
    "--chakra-backdrop-hue-rotate",
    ne.hueRotate
  ),
  backdropInvert: T.propT("--chakra-backdrop-invert", ne.invert),
  backdropSaturate: T.propT("--chakra-backdrop-saturate", ne.saturate)
}, Hu = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: ne.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: T.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: T.space("gap"),
  rowGap: T.space("rowGap"),
  columnGap: T.space("columnGap")
};
Object.assign(Hu, {
  flexDir: Hu.flexDirection
});
var PS = {
  gridGap: T.space("gridGap"),
  gridColumnGap: T.space("gridColumnGap"),
  gridRowGap: T.space("gridRowGap"),
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
}, A$ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: ne.outline },
  outlineOffset: !0,
  outlineColor: T.colors("outlineColor")
}, Xt = {
  width: T.sizesT("width"),
  inlineSize: T.sizesT("inlineSize"),
  height: T.sizes("height"),
  blockSize: T.sizes("blockSize"),
  boxSize: T.sizes(["width", "height"]),
  minWidth: T.sizes("minWidth"),
  minInlineSize: T.sizes("minInlineSize"),
  minHeight: T.sizes("minHeight"),
  minBlockSize: T.sizes("minBlockSize"),
  maxWidth: T.sizes("maxWidth"),
  maxInlineSize: T.sizes("maxInlineSize"),
  maxHeight: T.sizes("maxHeight"),
  maxBlockSize: T.sizes("maxBlockSize"),
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
      var r, n, o;
      return { [`@media screen and (min-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (max-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: T.propT("float", ne.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Xt, {
  w: Xt.width,
  h: Xt.height,
  minW: Xt.minWidth,
  maxW: Xt.maxWidth,
  minH: Xt.minHeight,
  maxH: Xt.maxHeight,
  overscroll: Xt.overscrollBehavior,
  overscrollX: Xt.overscrollBehaviorX,
  overscrollY: Xt.overscrollBehaviorY
});
var R$ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: T.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: T.prop("listStyleImage")
};
function M$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var O$ = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, I$ = O$(M$), z$ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, F$ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Ud = (e, t, r) => {
  const n = {}, o = I$(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, D$ = {
  srOnly: {
    transform(e) {
      return e === !0 ? z$ : e === "focusable" ? F$ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Ud(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Ud(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Ud(t, e, r)
  }
}, ja = {
  position: !0,
  pos: T.prop("position"),
  zIndex: T.prop("zIndex", "zIndices"),
  inset: T.spaceT("inset"),
  insetX: T.spaceT(["left", "right"]),
  insetInline: T.spaceT("insetInline"),
  insetY: T.spaceT(["top", "bottom"]),
  insetBlock: T.spaceT("insetBlock"),
  top: T.spaceT("top"),
  insetBlockStart: T.spaceT("insetBlockStart"),
  bottom: T.spaceT("bottom"),
  insetBlockEnd: T.spaceT("insetBlockEnd"),
  left: T.spaceT("left"),
  insetInlineStart: T.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: T.spaceT("right"),
  insetInlineEnd: T.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(ja, {
  insetStart: ja.insetInlineStart,
  insetEnd: ja.insetInlineEnd
});
var j$ = {
  ring: { transform: ne.ring },
  ringColor: T.colors("--chakra-ring-color"),
  ringOffset: T.prop("--chakra-ring-offset-width"),
  ringOffsetColor: T.colors("--chakra-ring-offset-color"),
  ringInset: T.prop("--chakra-ring-inset")
}, Ee = {
  margin: T.spaceT("margin"),
  marginTop: T.spaceT("marginTop"),
  marginBlockStart: T.spaceT("marginBlockStart"),
  marginRight: T.spaceT("marginRight"),
  marginInlineEnd: T.spaceT("marginInlineEnd"),
  marginBottom: T.spaceT("marginBottom"),
  marginBlockEnd: T.spaceT("marginBlockEnd"),
  marginLeft: T.spaceT("marginLeft"),
  marginInlineStart: T.spaceT("marginInlineStart"),
  marginX: T.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: T.spaceT("marginInline"),
  marginY: T.spaceT(["marginTop", "marginBottom"]),
  marginBlock: T.spaceT("marginBlock"),
  padding: T.space("padding"),
  paddingTop: T.space("paddingTop"),
  paddingBlockStart: T.space("paddingBlockStart"),
  paddingRight: T.space("paddingRight"),
  paddingBottom: T.space("paddingBottom"),
  paddingBlockEnd: T.space("paddingBlockEnd"),
  paddingLeft: T.space("paddingLeft"),
  paddingInlineStart: T.space("paddingInlineStart"),
  paddingInlineEnd: T.space("paddingInlineEnd"),
  paddingX: T.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: T.space("paddingInline"),
  paddingY: T.space(["paddingTop", "paddingBottom"]),
  paddingBlock: T.space("paddingBlock")
};
Object.assign(Ee, {
  m: Ee.margin,
  mt: Ee.marginTop,
  mr: Ee.marginRight,
  me: Ee.marginInlineEnd,
  marginEnd: Ee.marginInlineEnd,
  mb: Ee.marginBottom,
  ml: Ee.marginLeft,
  ms: Ee.marginInlineStart,
  marginStart: Ee.marginInlineStart,
  mx: Ee.marginX,
  my: Ee.marginY,
  p: Ee.padding,
  pt: Ee.paddingTop,
  py: Ee.paddingY,
  px: Ee.paddingX,
  pb: Ee.paddingBottom,
  pl: Ee.paddingLeft,
  ps: Ee.paddingInlineStart,
  paddingStart: Ee.paddingInlineStart,
  pr: Ee.paddingRight,
  pe: Ee.paddingInlineEnd,
  paddingEnd: Ee.paddingInlineEnd
});
var L$ = {
  textDecorationColor: T.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: T.shadows("textShadow")
}, B$ = {
  clipPath: !0,
  transform: T.propT("transform", ne.transform),
  transformOrigin: !0,
  translateX: T.spaceT("--chakra-translate-x"),
  translateY: T.spaceT("--chakra-translate-y"),
  skewX: T.degreeT("--chakra-skew-x"),
  skewY: T.degreeT("--chakra-skew-y"),
  scaleX: T.prop("--chakra-scale-x"),
  scaleY: T.prop("--chakra-scale-y"),
  scale: T.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: T.degreeT("--chakra-rotate")
}, N$ = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: T.prop("transitionDuration", "transition.duration"),
  transitionProperty: T.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: T.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, V$ = {
  fontFamily: T.prop("fontFamily", "fonts"),
  fontSize: T.prop("fontSize", "fontSizes", ne.px),
  fontWeight: T.prop("fontWeight", "fontWeights"),
  lineHeight: T.prop("lineHeight", "lineHeights"),
  letterSpacing: T.prop("letterSpacing", "letterSpacings"),
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
}, W$ = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: T.spaceT("scrollMargin"),
  scrollMarginTop: T.spaceT("scrollMarginTop"),
  scrollMarginBottom: T.spaceT("scrollMarginBottom"),
  scrollMarginLeft: T.spaceT("scrollMarginLeft"),
  scrollMarginRight: T.spaceT("scrollMarginRight"),
  scrollMarginX: T.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: T.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: T.spaceT("scrollPadding"),
  scrollPaddingTop: T.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: T.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: T.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: T.spaceT("scrollPaddingRight"),
  scrollPaddingX: T.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: T.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function TS(e) {
  return rr(e) && e.reference ? e.reference : String(e);
}
var Nc = (e, ...t) => t.map(TS).join(` ${e} `).replace(/calc/g, ""), a0 = (...e) => `calc(${Nc("+", ...e)})`, s0 = (...e) => `calc(${Nc("-", ...e)})`, Ap = (...e) => `calc(${Nc("*", ...e)})`, l0 = (...e) => `calc(${Nc("/", ...e)})`, u0 = (e) => {
  const t = TS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Ap(t, -1);
}, ro = Object.assign(
  (e) => ({
    add: (...t) => ro(a0(e, ...t)),
    subtract: (...t) => ro(s0(e, ...t)),
    multiply: (...t) => ro(Ap(e, ...t)),
    divide: (...t) => ro(l0(e, ...t)),
    negate: () => ro(u0(e)),
    toString: () => e.toString()
  }),
  {
    add: a0,
    subtract: s0,
    multiply: Ap,
    divide: l0,
    negate: u0
  }
);
function U$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function H$(e) {
  const t = U$(e.toString());
  return K$(G$(t));
}
function G$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function K$(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Y$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function q$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function X$(e, t = "") {
  return H$(`--${Y$(e, t)}`);
}
function W(e, t, r) {
  const n = X$(e, r);
  return {
    variable: n,
    reference: q$(n, t)
  };
}
function Q$(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = W(`${e}-${o}`, i);
      continue;
    }
    r[n] = W(`${e}-${n}`);
  }
  return r;
}
function Z$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function J$(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Rp(e) {
  if (e == null)
    return e;
  const { unitless: t } = J$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var ES = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, vm = (e) => Object.fromEntries(Object.entries(e).sort(ES));
function c0(e) {
  const t = vm(e);
  return Object.assign(Object.values(t), t);
}
function eA(e) {
  const t = Object.keys(vm(e));
  return new Set(t);
}
function d0(e) {
  var t;
  if (!e)
    return e;
  e = (t = Rp(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function wa(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Rp(e)})`), t && r.push("and", `(max-width: ${Rp(t)})`), r.join(" ");
}
function tA(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = c0(e), n = Object.entries(e).sort(ES).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? d0(d) : void 0, {
      _minW: d0(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: wa(null, d),
      minWQuery: wa(s),
      minMaxQuery: wa(s, d)
    };
  }), o = eA(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: vm(e),
    asArray: c0(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => wa(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!rr(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; Z$(s) === null; )
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
var tt = {
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
}, fn = (e) => $S((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Lr = (e) => $S((t) => e(t, "~ &"), "[data-peer]", ".peer"), $S = (e, ...t) => t.map(e).join(", "), Vc = {
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
  _groupHover: fn(tt.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Lr(tt.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: fn(tt.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Lr(tt.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: fn(tt.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Lr(tt.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: fn(tt.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Lr(tt.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: fn(tt.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Lr(tt.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: fn(tt.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Lr(tt.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: fn(tt.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Lr(tt.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: fn(tt.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Lr(tt.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Lr(tt.placeholderShown),
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
}, AS = Object.keys(
  Vc
);
function f0(e, t) {
  return W(String(e).replace(/\./g, "-"), void 0, t);
}
function rA(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = f0(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...v] = f, g = `${p}.-${v.join(".")}`, x = ro.negate(s), m = ro.negate(u);
        n[g] = {
          value: x,
          var: l,
          varRef: m
        };
      }
      r[l] = s, n[o] = {
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
      const { reference: x } = f0(v, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = rr(s) ? s : { default: s };
    r = er(
      r,
      Object.entries(d).reduce(
        (f, [p, v]) => {
          var g, x;
          if (!v)
            return f;
          const m = c(`${v}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (x = (g = Vc) == null ? void 0 : g[p]) != null ? x : p;
          return f[h] = { [l]: m }, f;
        },
        {}
      )
    ), n[o] = {
      value: u,
      var: l,
      varRef: u
    };
  }
  return {
    cssVars: r,
    cssMap: n
  };
}
function nA(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function oA(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function iA(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function p0(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (iA(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c, p = [...s, f];
        if (n != null && n(a, p))
          return t(a, s);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var aA = [
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
function sA(e) {
  return oA(e, aA);
}
function lA(e) {
  return e.semanticTokens;
}
function uA(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var cA = (e) => AS.includes(e) || e === "default";
function dA({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return p0(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), p0(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(cA)
    }
  ), r;
}
function fA(e) {
  var t;
  const r = uA(e), n = sA(r), o = lA(r), i = dA({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = rA(i, { cssVarPrefix: a });
  return Object.assign(r, {
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
    __breakpoints: tA(r.breakpoints)
  }), r;
}
var gm = er(
  {},
  nu,
  ue,
  E$,
  Hu,
  Xt,
  $$,
  j$,
  A$,
  PS,
  D$,
  ja,
  $p,
  Ee,
  W$,
  V$,
  L$,
  B$,
  R$,
  N$
);
Object.assign({}, Ee, Xt, Hu, PS, ja);
var pA = [...Object.keys(gm), ...AS], hA = { ...gm, ...Vc }, mA = (e) => e in hA, vA = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Kr(e[a], t);
    if (s == null)
      continue;
    if (s = rr(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function gA(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function yA(e) {
  return /^var\(--.+\)$/.test(e);
}
var bA = (e, t) => e.startsWith("--") && typeof t == "string" && !yA(t), xA = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = gA(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function SA(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Kr(i, n), d = vA(c)(n);
    let f = {};
    for (let p in d) {
      const v = d[p];
      let g = Kr(v, n);
      p in r && (p = r[p]), bA(p, g) && (g = xA(n, g));
      let x = t[p];
      if (x === !0 && (x = { property: p }), rr(g)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = er(
          {},
          f[p],
          o(g, !0)
        );
        continue;
      }
      let m = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, g, n, c)) != null ? u : g;
      m = x != null && x.processResult ? o(m, !0) : m;
      const h = Kr(x == null ? void 0 : x.property, n);
      if (!a && (x != null && x.static)) {
        const y = Kr(x.static, n);
        f = er({}, f, y);
      }
      if (h && Array.isArray(h)) {
        for (const y of h)
          f[y] = m;
        continue;
      }
      if (h) {
        h === "&" && rr(m) ? f = er({}, f, m) : f[h] = m;
        continue;
      }
      if (rr(m)) {
        f = er({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var RS = (e) => (t) => SA({
  theme: t,
  pseudos: Vc,
  configs: gm
})(e);
function Ce(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function wA(e, t) {
  if (Array.isArray(e))
    return e;
  if (rr(e))
    return t(e);
  if (e != null)
    return [e];
}
function kA(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function CA(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = wA(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let v = 0; v < d; v++) {
      const g = t.details[v], x = t.details[kA(c, v)], m = wa(g.minW, x == null ? void 0 : x._minW), h = Kr((s = n[o]) == null ? void 0 : s[c[v]], a);
      if (h) {
        if (p) {
          (l = n.parts) == null || l.forEach((y) => {
            er(u, {
              [y]: f ? h[y] : { [m]: h[y] }
            });
          });
          continue;
        }
        if (!p) {
          f ? er(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function _A(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = CA(i);
    return er(
      {},
      Kr((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function Fr(e) {
  return nA(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var PA = [
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
function TA(e) {
  return rr(e) ? PA.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var EA = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, $A = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, AA = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, RA = {
  property: EA,
  easing: $A,
  duration: AA
}, MA = RA, OA = {
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
}, IA = OA, zA = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, FA = zA, DA = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, jA = DA, LA = {
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
}, BA = LA, NA = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, VA = NA, WA = {
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
}, UA = WA, HA = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, GA = HA, KA = {
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
}, MS = KA, OS = {
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
}, YA = {
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
}, qA = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, XA = {
  ...OS,
  ...YA,
  container: qA
}, IS = XA, QA = {
  breakpoints: jA,
  zIndices: IA,
  radii: VA,
  blur: GA,
  colors: BA,
  ...MS,
  sizes: IS,
  shadows: UA,
  space: OS,
  borders: FA,
  transition: MA
}, { defineMultiStyleConfig: ZA, definePartsStyle: ka } = Ce([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Vr = W("stepper-indicator-size"), ri = W("stepper-icon-size"), ni = W("stepper-title-font-size"), Ca = W("stepper-description-font-size"), da = W("stepper-accent-color"), JA = ka(({ colorScheme: e }) => ({
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
    [da.variable]: `colors.${e}.500`,
    _dark: {
      [da.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: ni.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Ca.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: ni.reference
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
    width: ri.reference,
    height: ri.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Vr.reference,
    height: Vr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: da.reference
    },
    "&[data-status=complete]": {
      bg: da.reference,
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
      bg: da.reference
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
      maxHeight: `calc(100% - ${Vr.reference} - 8px)`,
      top: `calc(${Vr.reference} + 4px)`,
      insetStart: `calc(${Vr.reference} / 2 - 1px)`
    }
  }
})), eR = ZA({
  baseStyle: JA,
  sizes: {
    xs: ka({
      stepper: {
        [Vr.variable]: "sizes.4",
        [ri.variable]: "sizes.3",
        [ni.variable]: "fontSizes.xs",
        [Ca.variable]: "fontSizes.xs"
      }
    }),
    sm: ka({
      stepper: {
        [Vr.variable]: "sizes.6",
        [ri.variable]: "sizes.4",
        [ni.variable]: "fontSizes.sm",
        [Ca.variable]: "fontSizes.xs"
      }
    }),
    md: ka({
      stepper: {
        [Vr.variable]: "sizes.8",
        [ri.variable]: "sizes.5",
        [ni.variable]: "fontSizes.md",
        [Ca.variable]: "fontSizes.sm"
      }
    }),
    lg: ka({
      stepper: {
        [Vr.variable]: "sizes.10",
        [ri.variable]: "sizes.6",
        [ni.variable]: "fontSizes.lg",
        [Ca.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function pe(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    n();
    for (const d of c)
      t[d] = l(d);
    return pe(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return pe(e, t);
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
var tR = pe("accordion").parts("root", "container", "button", "panel").extend("icon"), rR = pe("alert").parts("title", "description", "container").extend("icon", "spinner"), nR = pe("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), oR = pe("breadcrumb").parts("link", "item", "container").extend("separator");
pe("button").parts();
var iR = pe("checkbox").parts("control", "icon", "container").extend("label");
pe("progress").parts("track", "filledTrack").extend("label");
var aR = pe("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), sR = pe("editable").parts(
  "preview",
  "input",
  "textarea"
), lR = pe("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), uR = pe("formError").parts("text", "icon"), cR = pe("input").parts(
  "addon",
  "field",
  "element",
  "group"
), dR = pe("list").parts("container", "item", "icon"), fR = pe("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), pR = pe("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), hR = pe("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
pe("pininput").parts("field");
var mR = pe("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), vR = pe("progress").parts(
  "label",
  "filledTrack",
  "track"
), gR = pe("radio").parts(
  "container",
  "control",
  "label"
), yR = pe("select").parts("field", "icon"), bR = pe("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), xR = pe("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), SR = pe("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), wR = pe("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), kR = pe("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), CR = pe("tag").parts(
  "container",
  "label",
  "closeButton"
), _R = pe("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
pe("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function so(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class PR extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var _a = PR;
function ym(e) {
  if (typeof e != "string")
    throw new _a(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = IR.test(e) ? $R(e) : e;
  const r = AR.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(ys(s, 2), 16)), parseInt(ys(a[3] || "f", 2), 16) / 255];
  }
  const n = RR.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = MR.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = OR.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (so(0, 100, s) !== s)
      throw new _a(e);
    if (so(0, 100, l) !== l)
      throw new _a(e);
    return [...zR(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new _a(e);
}
function TR(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const h0 = (e) => parseInt(e.replace(/_/g, ""), 36), ER = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = h0(t.substring(0, 3)), n = h0(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function $R(e) {
  const t = e.toLowerCase().trim(), r = ER[TR(t)];
  if (!r)
    throw new _a(e);
  return `#${r}`;
}
const ys = (e, t) => Array.from(Array(t)).map(() => e).join(""), AR = new RegExp(`^#${ys("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), RR = new RegExp(`^#${ys("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), MR = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ys(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), OR = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, IR = /^[a-z]+$/i, m0 = (e) => Math.round(e * 255), zR = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(m0);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(m0);
};
function FR(e, t, r, n) {
  return `rgba(${so(0, 255, e).toFixed()}, ${so(0, 255, t).toFixed()}, ${so(0, 255, r).toFixed()}, ${parseFloat(so(0, 1, n).toFixed(3))})`;
}
function DR(e, t) {
  const [r, n, o, i] = ym(e);
  return FR(r, n, o, i - t);
}
function jR(e) {
  const [t, r, n, o] = ym(e);
  let i = (a) => {
    const s = so(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function LR(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var BR = (e) => Object.keys(e).length === 0, vt = (e, t, r) => {
  const n = LR(e, `colors.${t}`, t);
  try {
    return jR(n), n;
  } catch {
    return r ?? "#000000";
  }
}, NR = (e) => {
  const [t, r, n] = ym(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, VR = (e) => (t) => {
  const r = vt(t, e);
  return NR(r) < 128 ? "dark" : "light";
}, WR = (e) => (t) => VR(e)(t) === "dark", zi = (e, t) => (r) => {
  const n = vt(r, e);
  return DR(n, 1 - t);
};
function v0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var UR = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function HR(e) {
  const t = UR();
  return !e || BR(e) ? t : e.string && e.colors ? KR(e.string, e.colors) : e.string && !e.colors ? GR(e.string) : e.colors && !e.string ? YR(e.colors) : t;
}
function GR(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function KR(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function YR(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function V(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function bm(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function zS(e) {
  return rr(e) && e.reference ? e.reference : String(e);
}
var Wc = (e, ...t) => t.map(zS).join(` ${e} `).replace(/calc/g, ""), g0 = (...e) => `calc(${Wc("+", ...e)})`, y0 = (...e) => `calc(${Wc("-", ...e)})`, Mp = (...e) => `calc(${Wc("*", ...e)})`, b0 = (...e) => `calc(${Wc("/", ...e)})`, x0 = (e) => {
  const t = zS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Mp(t, -1);
}, Wr = Object.assign(
  (e) => ({
    add: (...t) => Wr(g0(e, ...t)),
    subtract: (...t) => Wr(y0(e, ...t)),
    multiply: (...t) => Wr(Mp(e, ...t)),
    divide: (...t) => Wr(b0(e, ...t)),
    negate: () => Wr(x0(e)),
    toString: () => e.toString()
  }),
  {
    add: g0,
    subtract: y0,
    multiply: Mp,
    divide: b0,
    negate: x0
  }
);
function qR(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function XR(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function FS(e) {
  const t = XR(e.toString());
  return t.includes("\\.") ? e : qR(e) ? t.replace(".", "\\.") : e;
}
function QR(e, t = "") {
  return [t, FS(e)].filter(Boolean).join("-");
}
function ZR(e, t) {
  return `var(${FS(e)}${t ? `, ${t}` : ""})`;
}
function JR(e, t = "") {
  return `--${QR(e, t)}`;
}
function qe(e, t) {
  const r = JR(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: ZR(r, e5(t == null ? void 0 : t.fallback))
  };
}
function e5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: t5, definePartsStyle: ou } = Ce(SR.keys), La = qe("switch-track-width"), fo = qe("switch-track-height"), Hd = qe("switch-track-diff"), r5 = Wr.subtract(La, fo), Op = qe("switch-thumb-x"), fa = qe("switch-bg"), n5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [La.reference],
    height: [fo.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [fa.variable]: "colors.gray.300",
    _dark: {
      [fa.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [fa.variable]: `colors.${t}.500`,
      _dark: {
        [fa.variable]: `colors.${t}.200`
      }
    },
    bg: fa.reference
  };
}, o5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [fo.reference],
  height: [fo.reference],
  _checked: {
    transform: `translateX(${Op.reference})`
  }
}, i5 = ou((e) => ({
  container: {
    [Hd.variable]: r5,
    [Op.variable]: Hd.reference,
    _rtl: {
      [Op.variable]: Wr(Hd).negate().toString()
    }
  },
  track: n5(e),
  thumb: o5
})), a5 = {
  sm: ou({
    container: {
      [La.variable]: "1.375rem",
      [fo.variable]: "sizes.3"
    }
  }),
  md: ou({
    container: {
      [La.variable]: "1.875rem",
      [fo.variable]: "sizes.4"
    }
  }),
  lg: ou({
    container: {
      [La.variable]: "2.875rem",
      [fo.variable]: "sizes.6"
    }
  })
}, s5 = t5({
  baseStyle: i5,
  sizes: a5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: l5, definePartsStyle: xi } = Ce(wR.keys), u5 = xi({
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
}), Gu = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, c5 = xi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: V("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: V(`${t}.100`, `${t}.700`)(e),
      ...Gu
    },
    td: {
      borderBottom: "1px",
      borderColor: V(`${t}.100`, `${t}.700`)(e),
      ...Gu
    },
    caption: {
      color: V("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), d5 = xi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: V("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: V(`${t}.100`, `${t}.700`)(e),
      ...Gu
    },
    td: {
      borderBottom: "1px",
      borderColor: V(`${t}.100`, `${t}.700`)(e),
      ...Gu
    },
    caption: {
      color: V("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: V(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: V(`${t}.100`, `${t}.700`)(e)
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
}), f5 = {
  simple: c5,
  striped: d5,
  unstyled: {}
}, p5 = {
  sm: xi({
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
  md: xi({
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
  lg: xi({
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
}, h5 = l5({
  baseStyle: u5,
  variants: f5,
  sizes: p5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), kt = W("tabs-color"), mr = W("tabs-bg"), _l = W("tabs-border-color"), { defineMultiStyleConfig: m5, definePartsStyle: Mr } = Ce(kR.keys), v5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, g5 = (e) => {
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
}, y5 = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, b5 = {
  p: 4
}, x5 = Mr((e) => ({
  root: v5(e),
  tab: g5(e),
  tablist: y5(e),
  tabpanel: b5
})), S5 = {
  sm: Mr({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Mr({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Mr({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, w5 = Mr((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", i = n ? "marginStart" : "marginBottom";
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
        [kt.variable]: `colors.${t}.600`,
        _dark: {
          [kt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [mr.variable]: "colors.gray.200",
        _dark: {
          [mr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: kt.reference,
      bg: mr.reference
    }
  };
}), k5 = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [_l.variable]: "transparent",
      _selected: {
        [kt.variable]: `colors.${t}.600`,
        [_l.variable]: "colors.white",
        _dark: {
          [kt.variable]: `colors.${t}.300`,
          [_l.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: _l.reference
      },
      color: kt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), C5 = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [mr.variable]: "colors.gray.50",
      _dark: {
        [mr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [mr.variable]: "colors.white",
        [kt.variable]: `colors.${t}.600`,
        _dark: {
          [mr.variable]: "colors.gray.800",
          [kt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: kt.reference,
      bg: mr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), _5 = Mr((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: vt(r, `${t}.700`),
        bg: vt(r, `${t}.100`)
      }
    }
  };
}), P5 = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [kt.variable]: "colors.gray.600",
      _dark: {
        [kt.variable]: "inherit"
      },
      _selected: {
        [kt.variable]: "colors.white",
        [mr.variable]: `colors.${t}.600`,
        _dark: {
          [kt.variable]: "colors.gray.800",
          [mr.variable]: `colors.${t}.300`
        }
      },
      color: kt.reference,
      bg: mr.reference
    }
  };
}), T5 = Mr({}), E5 = {
  line: w5,
  enclosed: k5,
  "enclosed-colored": C5,
  "soft-rounded": _5,
  "solid-rounded": P5,
  unstyled: T5
}, $5 = m5({
  baseStyle: x5,
  sizes: S5,
  variants: E5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ne = Q$("badge", ["bg", "color", "shadow"]), A5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ne.bg.reference,
  color: Ne.color.reference,
  boxShadow: Ne.shadow.reference
}, R5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = zi(`${t}.500`, 0.6)(r);
  return {
    [Ne.bg.variable]: `colors.${t}.500`,
    [Ne.color.variable]: "colors.white",
    _dark: {
      [Ne.bg.variable]: n,
      [Ne.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, M5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = zi(`${t}.200`, 0.16)(r);
  return {
    [Ne.bg.variable]: `colors.${t}.100`,
    [Ne.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ne.bg.variable]: n,
      [Ne.color.variable]: `colors.${t}.200`
    }
  };
}, O5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = zi(`${t}.200`, 0.8)(r);
  return {
    [Ne.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ne.color.variable]: n
    },
    [Ne.shadow.variable]: `inset 0 0 0px 1px ${Ne.color.reference}`
  };
}, I5 = {
  solid: R5,
  subtle: M5,
  outline: O5
}, Ba = {
  baseStyle: A5,
  variants: I5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: z5, definePartsStyle: po } = Ce(CR.keys), S0 = W("tag-bg"), w0 = W("tag-color"), Gd = W("tag-shadow"), iu = W("tag-min-height"), au = W("tag-min-width"), su = W("tag-font-size"), lu = W("tag-padding-inline"), F5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [w0.variable]: Ne.color.reference,
  [S0.variable]: Ne.bg.reference,
  [Gd.variable]: Ne.shadow.reference,
  color: w0.reference,
  bg: S0.reference,
  boxShadow: Gd.reference,
  borderRadius: "md",
  minH: iu.reference,
  minW: au.reference,
  fontSize: su.reference,
  px: lu.reference,
  _focusVisible: {
    [Gd.variable]: "shadows.outline"
  }
}, D5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, j5 = {
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
}, L5 = po({
  container: F5,
  label: D5,
  closeButton: j5
}), B5 = {
  sm: po({
    container: {
      [iu.variable]: "sizes.5",
      [au.variable]: "sizes.5",
      [su.variable]: "fontSizes.xs",
      [lu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: po({
    container: {
      [iu.variable]: "sizes.6",
      [au.variable]: "sizes.6",
      [su.variable]: "fontSizes.sm",
      [lu.variable]: "space.2"
    }
  }),
  lg: po({
    container: {
      [iu.variable]: "sizes.8",
      [au.variable]: "sizes.8",
      [su.variable]: "fontSizes.md",
      [lu.variable]: "space.3"
    }
  })
}, N5 = {
  subtle: po((e) => {
    var t;
    return {
      container: (t = Ba.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: po((e) => {
    var t;
    return {
      container: (t = Ba.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: po((e) => {
    var t;
    return {
      container: (t = Ba.variants) == null ? void 0 : t.outline(e)
    };
  })
}, V5 = z5({
  variants: N5,
  baseStyle: L5,
  sizes: B5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Yr, defineMultiStyleConfig: W5 } = Ce(cR.keys), oi = W("input-height"), ii = W("input-font-size"), ai = W("input-padding"), si = W("input-border-radius"), U5 = Yr({
  addon: {
    height: oi.reference,
    fontSize: ii.reference,
    px: ai.reference,
    borderRadius: si.reference
  },
  field: {
    width: "100%",
    height: oi.reference,
    fontSize: ii.reference,
    px: ai.reference,
    borderRadius: si.reference,
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
}), pn = {
  lg: {
    [ii.variable]: "fontSizes.lg",
    [ai.variable]: "space.4",
    [si.variable]: "radii.md",
    [oi.variable]: "sizes.12"
  },
  md: {
    [ii.variable]: "fontSizes.md",
    [ai.variable]: "space.4",
    [si.variable]: "radii.md",
    [oi.variable]: "sizes.10"
  },
  sm: {
    [ii.variable]: "fontSizes.sm",
    [ai.variable]: "space.3",
    [si.variable]: "radii.sm",
    [oi.variable]: "sizes.8"
  },
  xs: {
    [ii.variable]: "fontSizes.xs",
    [ai.variable]: "space.2",
    [si.variable]: "radii.sm",
    [oi.variable]: "sizes.6"
  }
}, H5 = {
  lg: Yr({
    field: pn.lg,
    group: pn.lg
  }),
  md: Yr({
    field: pn.md,
    group: pn.md
  }),
  sm: Yr({
    field: pn.sm,
    group: pn.sm
  }),
  xs: Yr({
    field: pn.xs,
    group: pn.xs
  })
};
function xm(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || V("blue.500", "blue.300")(e),
    errorBorderColor: r || V("red.500", "red.300")(e)
  };
}
var G5 = Yr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = xm(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: V("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: vt(t, n),
        boxShadow: `0 0 0 1px ${vt(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: vt(t, r),
        boxShadow: `0 0 0 1px ${vt(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: V("inherit", "whiteAlpha.50")(e),
      bg: V("gray.100", "whiteAlpha.300")(e)
    }
  };
}), K5 = Yr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = xm(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: V("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: V("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: vt(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: vt(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: V("gray.100", "whiteAlpha.50")(e)
    }
  };
}), Y5 = Yr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = xm(e);
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
        borderColor: vt(t, n),
        boxShadow: `0px 1px 0px 0px ${vt(t, n)}`
      },
      _focusVisible: {
        borderColor: vt(t, r),
        boxShadow: `0px 1px 0px 0px ${vt(t, r)}`
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
}), q5 = Yr({
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
}), X5 = {
  outline: G5,
  filled: K5,
  flushed: Y5,
  unstyled: q5
}, fe = W5({
  baseStyle: U5,
  sizes: H5,
  variants: X5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), k0, Q5 = {
  ...(k0 = fe.baseStyle) == null ? void 0 : k0.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, C0, _0, Z5 = {
  outline: (e) => {
    var t, r;
    return (r = (t = fe.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = fe.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = fe.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (_0 = (C0 = fe.variants) == null ? void 0 : C0.unstyled.field) != null ? _0 : {}
}, P0, T0, E0, $0, A0, R0, M0, O0, J5 = {
  xs: (T0 = (P0 = fe.sizes) == null ? void 0 : P0.xs.field) != null ? T0 : {},
  sm: ($0 = (E0 = fe.sizes) == null ? void 0 : E0.sm.field) != null ? $0 : {},
  md: (R0 = (A0 = fe.sizes) == null ? void 0 : A0.md.field) != null ? R0 : {},
  lg: (O0 = (M0 = fe.sizes) == null ? void 0 : M0.lg.field) != null ? O0 : {}
}, eM = {
  baseStyle: Q5,
  sizes: J5,
  variants: Z5,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Pl = qe("tooltip-bg"), Kd = qe("tooltip-fg"), tM = qe("popper-arrow-bg"), rM = {
  bg: Pl.reference,
  color: Kd.reference,
  [Pl.variable]: "colors.gray.700",
  [Kd.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Pl.variable]: "colors.gray.300",
    [Kd.variable]: "colors.gray.900"
  },
  [tM.variable]: Pl.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, nM = {
  baseStyle: rM
}, { defineMultiStyleConfig: oM, definePartsStyle: Pa } = Ce(vR.keys), iM = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = V(
    v0(),
    v0("1rem", "rgba(0,0,0,0.1)")
  )(e), a = V(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${vt(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, aM = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, sM = (e) => ({
  bg: V("gray.100", "whiteAlpha.300")(e)
}), lM = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...iM(e)
}), uM = Pa((e) => ({
  label: aM,
  filledTrack: lM(e),
  track: sM(e)
})), cM = {
  xs: Pa({
    track: { h: "1" }
  }),
  sm: Pa({
    track: { h: "2" }
  }),
  md: Pa({
    track: { h: "3" }
  }),
  lg: Pa({
    track: { h: "4" }
  })
}, dM = oM({
  sizes: cM,
  baseStyle: uM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), fM = (e) => typeof e == "function";
function bt(e, ...t) {
  return fM(e) ? e(...t) : e;
}
var { definePartsStyle: uu, defineMultiStyleConfig: pM } = Ce(iR.keys), Na = W("checkbox-size"), hM = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Na.reference,
    h: Na.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: V(`${t}.500`, `${t}.200`)(e),
      borderColor: V(`${t}.500`, `${t}.200`)(e),
      color: V("white", "gray.900")(e),
      _hover: {
        bg: V(`${t}.600`, `${t}.300`)(e),
        borderColor: V(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: V("gray.200", "transparent")(e),
        bg: V("gray.200", "whiteAlpha.300")(e),
        color: V("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: V(`${t}.500`, `${t}.200`)(e),
      borderColor: V(`${t}.500`, `${t}.200`)(e),
      color: V("white", "gray.900")(e)
    },
    _disabled: {
      bg: V("gray.100", "whiteAlpha.100")(e),
      borderColor: V("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: V("red.500", "red.300")(e)
    }
  };
}, mM = {
  _disabled: { cursor: "not-allowed" }
}, vM = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, gM = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, yM = uu((e) => ({
  icon: gM,
  container: mM,
  control: bt(hM, e),
  label: vM
})), bM = {
  sm: uu({
    control: { [Na.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: uu({
    control: { [Na.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: uu({
    control: { [Na.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Ku = pM({
  baseStyle: yM,
  sizes: bM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: xM, definePartsStyle: cu } = Ce(gR.keys), SM = (e) => {
  var t;
  const r = (t = bt(Ku.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...r,
    borderRadius: "full",
    _checked: {
      ...r == null ? void 0 : r._checked,
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
}, wM = cu((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Ku).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Ku).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: SM(e)
  };
}), kM = {
  md: cu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: cu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: cu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, CM = xM({
  baseStyle: wM,
  sizes: kM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: _M, definePartsStyle: PM } = Ce(yR.keys), Tl = W("select-bg"), I0, TM = {
  ...(I0 = fe.baseStyle) == null ? void 0 : I0.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Tl.reference,
  [Tl.variable]: "colors.white",
  _dark: {
    [Tl.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Tl.reference
  }
}, EM = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, $M = PM({
  field: TM,
  icon: EM
}), El = {
  paddingInlineEnd: "8"
}, z0, F0, D0, j0, L0, B0, N0, V0, AM = {
  lg: {
    ...(z0 = fe.sizes) == null ? void 0 : z0.lg,
    field: {
      ...(F0 = fe.sizes) == null ? void 0 : F0.lg.field,
      ...El
    }
  },
  md: {
    ...(D0 = fe.sizes) == null ? void 0 : D0.md,
    field: {
      ...(j0 = fe.sizes) == null ? void 0 : j0.md.field,
      ...El
    }
  },
  sm: {
    ...(L0 = fe.sizes) == null ? void 0 : L0.sm,
    field: {
      ...(B0 = fe.sizes) == null ? void 0 : B0.sm.field,
      ...El
    }
  },
  xs: {
    ...(N0 = fe.sizes) == null ? void 0 : N0.xs,
    field: {
      ...(V0 = fe.sizes) == null ? void 0 : V0.xs.field,
      ...El
    },
    icon: {
      insetEnd: "1"
    }
  }
}, RM = _M({
  baseStyle: $M,
  sizes: AM,
  variants: fe.variants,
  defaultProps: fe.defaultProps
}), Yd = W("skeleton-start-color"), qd = W("skeleton-end-color"), MM = {
  [Yd.variable]: "colors.gray.100",
  [qd.variable]: "colors.gray.400",
  _dark: {
    [Yd.variable]: "colors.gray.800",
    [qd.variable]: "colors.gray.600"
  },
  background: Yd.reference,
  borderColor: qd.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, OM = {
  baseStyle: MM
}, Xd = W("skip-link-bg"), IM = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Xd.variable]: "colors.white",
    _dark: {
      [Xd.variable]: "colors.gray.700"
    },
    bg: Xd.reference
  }
}, zM = {
  baseStyle: IM
}, { defineMultiStyleConfig: FM, definePartsStyle: Uc } = Ce(bR.keys), bs = W("slider-thumb-size"), xs = W("slider-track-size"), Sn = W("slider-bg"), DM = (e) => {
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
    ...bm({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, jM = (e) => ({
  ...bm({
    orientation: e.orientation,
    horizontal: { h: xs.reference },
    vertical: { w: xs.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Sn.variable]: "colors.gray.200",
  _dark: {
    [Sn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Sn.variable]: "colors.gray.300",
    _dark: {
      [Sn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Sn.reference
}), LM = (e) => {
  const { orientation: t } = e;
  return {
    ...bm({
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
    w: bs.reference,
    h: bs.reference,
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
}, BM = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Sn.variable]: `colors.${t}.500`,
    _dark: {
      [Sn.variable]: `colors.${t}.200`
    },
    bg: Sn.reference
  };
}, NM = Uc((e) => ({
  container: DM(e),
  track: jM(e),
  thumb: LM(e),
  filledTrack: BM(e)
})), VM = Uc({
  container: {
    [bs.variable]: "sizes.4",
    [xs.variable]: "sizes.1"
  }
}), WM = Uc({
  container: {
    [bs.variable]: "sizes.3.5",
    [xs.variable]: "sizes.1"
  }
}), UM = Uc({
  container: {
    [bs.variable]: "sizes.2.5",
    [xs.variable]: "sizes.0.5"
  }
}), HM = {
  lg: VM,
  md: WM,
  sm: UM
}, GM = FM({
  baseStyle: NM,
  sizes: HM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), no = qe("spinner-size"), KM = {
  width: [no.reference],
  height: [no.reference]
}, YM = {
  xs: {
    [no.variable]: "sizes.3"
  },
  sm: {
    [no.variable]: "sizes.4"
  },
  md: {
    [no.variable]: "sizes.6"
  },
  lg: {
    [no.variable]: "sizes.8"
  },
  xl: {
    [no.variable]: "sizes.12"
  }
}, qM = {
  baseStyle: KM,
  sizes: YM,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: XM, definePartsStyle: DS } = Ce(xR.keys), QM = {
  fontWeight: "medium"
}, ZM = {
  opacity: 0.8,
  marginBottom: "2"
}, JM = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, eO = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, tO = DS({
  container: {},
  label: QM,
  helpText: ZM,
  number: JM,
  icon: eO
}), rO = {
  md: DS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, nO = XM({
  baseStyle: tO,
  sizes: rO,
  defaultProps: {
    size: "md"
  }
}), Qd = W("kbd-bg"), oO = {
  [Qd.variable]: "colors.gray.100",
  _dark: {
    [Qd.variable]: "colors.whiteAlpha.100"
  },
  bg: Qd.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, iO = {
  baseStyle: oO
}, aO = {
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
}, sO = {
  baseStyle: aO
}, { defineMultiStyleConfig: lO, definePartsStyle: uO } = Ce(dR.keys), cO = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, dO = uO({
  icon: cO
}), fO = lO({
  baseStyle: dO
}), { defineMultiStyleConfig: pO, definePartsStyle: hO } = Ce(fR.keys), Cr = W("menu-bg"), Zd = W("menu-shadow"), mO = {
  [Cr.variable]: "#fff",
  [Zd.variable]: "shadows.sm",
  _dark: {
    [Cr.variable]: "colors.gray.700",
    [Zd.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Cr.reference,
  boxShadow: Zd.reference
}, vO = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Cr.variable]: "colors.gray.100",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Cr.variable]: "colors.gray.200",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Cr.variable]: "colors.gray.100",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Cr.reference
}, gO = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, yO = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, bO = {
  opacity: 0.6
}, xO = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, SO = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, wO = hO({
  button: SO,
  list: mO,
  item: vO,
  groupTitle: gO,
  icon: yO,
  command: bO,
  divider: xO
}), kO = pO({
  baseStyle: wO
}), { defineMultiStyleConfig: CO, definePartsStyle: Ip } = Ce(pR.keys), Jd = W("modal-bg"), ef = W("modal-shadow"), _O = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, PO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, TO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Jd.variable]: "colors.white",
    [ef.variable]: "shadows.lg",
    _dark: {
      [Jd.variable]: "colors.gray.700",
      [ef.variable]: "shadows.dark-lg"
    },
    bg: Jd.reference,
    boxShadow: ef.reference
  };
}, EO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, $O = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, AO = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, RO = {
  px: "6",
  py: "4"
}, MO = Ip((e) => ({
  overlay: _O,
  dialogContainer: bt(PO, e),
  dialog: bt(TO, e),
  header: EO,
  closeButton: $O,
  body: bt(AO, e),
  footer: RO
}));
function dr(e) {
  return Ip(e === "full" ? {
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
var OO = {
  xs: dr("xs"),
  sm: dr("sm"),
  md: dr("md"),
  lg: dr("lg"),
  xl: dr("xl"),
  "2xl": dr("2xl"),
  "3xl": dr("3xl"),
  "4xl": dr("4xl"),
  "5xl": dr("5xl"),
  "6xl": dr("6xl"),
  full: dr("full")
}, IO = CO({
  baseStyle: MO,
  sizes: OO,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: zO, definePartsStyle: jS } = Ce(hR.keys), Sm = qe("number-input-stepper-width"), LS = qe("number-input-input-padding"), FO = Wr(Sm).add("0.5rem").toString(), tf = qe("number-input-bg"), rf = qe("number-input-color"), nf = qe("number-input-border-color"), DO = {
  [Sm.variable]: "sizes.6",
  [LS.variable]: FO
}, jO = (e) => {
  var t, r;
  return (r = (t = bt(fe.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, LO = {
  width: Sm.reference
}, BO = {
  borderStart: "1px solid",
  borderStartColor: nf.reference,
  color: rf.reference,
  bg: tf.reference,
  [rf.variable]: "colors.chakra-body-text",
  [nf.variable]: "colors.chakra-border-color",
  _dark: {
    [rf.variable]: "colors.whiteAlpha.800",
    [nf.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [tf.variable]: "colors.gray.200",
    _dark: {
      [tf.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, NO = jS((e) => {
  var t;
  return {
    root: DO,
    field: (t = bt(jO, e)) != null ? t : {},
    stepperGroup: LO,
    stepper: BO
  };
});
function $l(e) {
  var t, r, n;
  const o = (t = fe.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = MS.fontSizes[a];
  return jS({
    field: {
      ...o.field,
      paddingInlineEnd: LS.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Wr(s).multiply(0.75).toString(),
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
var VO = {
  xs: $l("xs"),
  sm: $l("sm"),
  md: $l("md"),
  lg: $l("lg")
}, WO = zO({
  baseStyle: NO,
  sizes: VO,
  variants: fe.variants,
  defaultProps: fe.defaultProps
}), W0, UO = {
  ...(W0 = fe.baseStyle) == null ? void 0 : W0.field,
  textAlign: "center"
}, HO = {
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
}, U0, H0, GO = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = bt((t = fe.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = bt((t = fe.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = bt((t = fe.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (H0 = (U0 = fe.variants) == null ? void 0 : U0.unstyled.field) != null ? H0 : {}
}, KO = {
  baseStyle: UO,
  sizes: HO,
  variants: GO,
  defaultProps: fe.defaultProps
}, { defineMultiStyleConfig: YO, definePartsStyle: qO } = Ce(mR.keys), Al = qe("popper-bg"), XO = qe("popper-arrow-bg"), G0 = qe("popper-arrow-shadow-color"), QO = { zIndex: 10 }, ZO = {
  [Al.variable]: "colors.white",
  bg: Al.reference,
  [XO.variable]: Al.reference,
  [G0.variable]: "colors.gray.200",
  _dark: {
    [Al.variable]: "colors.gray.700",
    [G0.variable]: "colors.whiteAlpha.300"
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
}, JO = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, eI = {
  px: 3,
  py: 2
}, tI = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, rI = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, nI = qO({
  popper: QO,
  content: ZO,
  header: JO,
  body: eI,
  footer: tI,
  closeButton: rI
}), oI = YO({
  baseStyle: nI
}), { definePartsStyle: zp, defineMultiStyleConfig: iI } = Ce(aR.keys), of = W("drawer-bg"), af = W("drawer-box-shadow");
function Do(e) {
  return zp(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var aI = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, sI = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, lI = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [of.variable]: "colors.white",
    [af.variable]: "shadows.lg",
    _dark: {
      [of.variable]: "colors.gray.700",
      [af.variable]: "shadows.dark-lg"
    },
    bg: of.reference,
    boxShadow: af.reference
  };
}, uI = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, cI = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, dI = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, fI = {
  px: "6",
  py: "4"
}, pI = zp((e) => ({
  overlay: aI,
  dialogContainer: sI,
  dialog: bt(lI, e),
  header: uI,
  closeButton: cI,
  body: dI,
  footer: fI
})), hI = {
  xs: Do("xs"),
  sm: Do("md"),
  md: Do("lg"),
  lg: Do("2xl"),
  xl: Do("4xl"),
  full: Do("full")
}, mI = iI({
  baseStyle: pI,
  sizes: hI,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: vI, defineMultiStyleConfig: gI } = Ce(sR.keys), yI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, bI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, xI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, SI = vI({
  preview: yI,
  input: bI,
  textarea: xI
}), wI = gI({
  baseStyle: SI
}), { definePartsStyle: kI, defineMultiStyleConfig: CI } = Ce(lR.keys), Si = W("form-control-color"), _I = {
  marginStart: "1",
  [Si.variable]: "colors.red.500",
  _dark: {
    [Si.variable]: "colors.red.300"
  },
  color: Si.reference
}, PI = {
  mt: "2",
  [Si.variable]: "colors.gray.600",
  _dark: {
    [Si.variable]: "colors.whiteAlpha.600"
  },
  color: Si.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, TI = kI({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: _I,
  helperText: PI
}), EI = CI({
  baseStyle: TI
}), { definePartsStyle: $I, defineMultiStyleConfig: AI } = Ce(uR.keys), wi = W("form-error-color"), RI = {
  [wi.variable]: "colors.red.500",
  _dark: {
    [wi.variable]: "colors.red.300"
  },
  color: wi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, MI = {
  marginEnd: "0.5em",
  [wi.variable]: "colors.red.500",
  _dark: {
    [wi.variable]: "colors.red.300"
  },
  color: wi.reference
}, OI = $I({
  text: RI,
  icon: MI
}), II = AI({
  baseStyle: OI
}), zI = {
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
}, FI = {
  baseStyle: zI
}, DI = {
  fontFamily: "heading",
  fontWeight: "bold"
}, jI = {
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
}, LI = {
  baseStyle: DI,
  sizes: jI,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: BI, definePartsStyle: NI } = Ce(oR.keys), sf = W("breadcrumb-link-decor"), VI = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: sf.reference,
  [sf.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [sf.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, WI = NI({
  link: VI
}), UI = BI({
  baseStyle: WI
}), HI = {
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
}, BS = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: V("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: V("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: V("gray.200", "whiteAlpha.300")(e) }
    };
  const n = zi(`${t}.200`, 0.12)(r), o = zi(`${t}.200`, 0.24)(r);
  return {
    color: V(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: V(`${t}.50`, n)(e)
    },
    _active: {
      bg: V(`${t}.100`, o)(e)
    }
  };
}, GI = (e) => {
  const { colorScheme: t } = e, r = V("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...bt(BS, e)
  };
}, KI = {
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
}, YI = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = V("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: V("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: V("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: V("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: i = `${r}.600`,
    activeBg: a = `${r}.700`
  } = (t = KI[r]) != null ? t : {}, s = V(n, `${r}.200`)(e);
  return {
    bg: s,
    color: V(o, "gray.800")(e),
    _hover: {
      bg: V(i, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: V(a, `${r}.400`)(e) }
  };
}, qI = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: V(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: V(`${t}.700`, `${t}.500`)(e)
    }
  };
}, XI = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, QI = {
  ghost: BS,
  outline: GI,
  solid: YI,
  link: qI,
  unstyled: XI
}, ZI = {
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
}, JI = {
  baseStyle: HI,
  variants: QI,
  sizes: ZI,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: ho, defineMultiStyleConfig: ez } = Ce(_R.keys), Yu = W("card-bg"), Qr = W("card-padding"), NS = W("card-shadow"), du = W("card-radius"), VS = W("card-border-width", "0"), WS = W("card-border-color"), tz = ho({
  container: {
    [Yu.variable]: "colors.chakra-body-bg",
    backgroundColor: Yu.reference,
    boxShadow: NS.reference,
    borderRadius: du.reference,
    color: "chakra-body-text",
    borderWidth: VS.reference,
    borderColor: WS.reference
  },
  body: {
    padding: Qr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Qr.reference
  },
  footer: {
    padding: Qr.reference
  }
}), rz = {
  sm: ho({
    container: {
      [du.variable]: "radii.base",
      [Qr.variable]: "space.3"
    }
  }),
  md: ho({
    container: {
      [du.variable]: "radii.md",
      [Qr.variable]: "space.5"
    }
  }),
  lg: ho({
    container: {
      [du.variable]: "radii.xl",
      [Qr.variable]: "space.7"
    }
  })
}, nz = {
  elevated: ho({
    container: {
      [NS.variable]: "shadows.base",
      _dark: {
        [Yu.variable]: "colors.gray.700"
      }
    }
  }),
  outline: ho({
    container: {
      [VS.variable]: "1px",
      [WS.variable]: "colors.chakra-border-color"
    }
  }),
  filled: ho({
    container: {
      [Yu.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Qr.variable]: 0
    },
    header: {
      [Qr.variable]: 0
    },
    footer: {
      [Qr.variable]: 0
    }
  }
}, oz = ez({
  baseStyle: tz,
  variants: nz,
  sizes: rz,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Va = qe("close-button-size"), pa = qe("close-button-bg"), iz = {
  w: [Va.reference],
  h: [Va.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [pa.variable]: "colors.blackAlpha.100",
    _dark: {
      [pa.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [pa.variable]: "colors.blackAlpha.200",
    _dark: {
      [pa.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: pa.reference
}, az = {
  lg: {
    [Va.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Va.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Va.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, sz = {
  baseStyle: iz,
  sizes: az,
  defaultProps: {
    size: "md"
  }
}, { variants: lz, defaultProps: uz } = Ba, cz = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ne.bg.reference,
  color: Ne.color.reference,
  boxShadow: Ne.shadow.reference
}, dz = {
  baseStyle: cz,
  variants: lz,
  defaultProps: uz
}, fz = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, pz = {
  baseStyle: fz
}, hz = {
  opacity: 0.6,
  borderColor: "inherit"
}, mz = {
  borderStyle: "solid"
}, vz = {
  borderStyle: "dashed"
}, gz = {
  solid: mz,
  dashed: vz
}, yz = {
  baseStyle: hz,
  variants: gz,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: bz, defineMultiStyleConfig: xz } = Ce(tR.keys), Sz = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, wz = {
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
}, kz = {
  pt: "2",
  px: "4",
  pb: "5"
}, Cz = {
  fontSize: "1.25em"
}, _z = bz({
  container: Sz,
  button: wz,
  panel: kz,
  icon: Cz
}), Pz = xz({ baseStyle: _z }), { definePartsStyle: Bs, defineMultiStyleConfig: Tz } = Ce(rR.keys), Lt = W("alert-fg"), on = W("alert-bg"), Ez = Bs({
  container: {
    bg: on.reference,
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
    color: Lt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Lt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function wm(e) {
  const { theme: t, colorScheme: r } = e, n = zi(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var $z = Bs((e) => {
  const { colorScheme: t } = e, r = wm(e);
  return {
    container: {
      [Lt.variable]: `colors.${t}.600`,
      [on.variable]: r.light,
      _dark: {
        [Lt.variable]: `colors.${t}.200`,
        [on.variable]: r.dark
      }
    }
  };
}), Az = Bs((e) => {
  const { colorScheme: t } = e, r = wm(e);
  return {
    container: {
      [Lt.variable]: `colors.${t}.600`,
      [on.variable]: r.light,
      _dark: {
        [Lt.variable]: `colors.${t}.200`,
        [on.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Lt.reference
    }
  };
}), Rz = Bs((e) => {
  const { colorScheme: t } = e, r = wm(e);
  return {
    container: {
      [Lt.variable]: `colors.${t}.600`,
      [on.variable]: r.light,
      _dark: {
        [Lt.variable]: `colors.${t}.200`,
        [on.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Lt.reference
    }
  };
}), Mz = Bs((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Lt.variable]: "colors.white",
      [on.variable]: `colors.${t}.600`,
      _dark: {
        [Lt.variable]: "colors.gray.900",
        [on.variable]: `colors.${t}.200`
      },
      color: Lt.reference
    }
  };
}), Oz = {
  subtle: $z,
  "left-accent": Az,
  "top-accent": Rz,
  solid: Mz
}, Iz = Tz({
  baseStyle: Ez,
  variants: Oz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: US, defineMultiStyleConfig: zz } = Ce(nR.keys), ki = W("avatar-border-color"), Wa = W("avatar-bg"), Ss = W("avatar-font-size"), Fi = W("avatar-size"), Fz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: ki.reference,
  [ki.variable]: "white",
  _dark: {
    [ki.variable]: "colors.gray.800"
  }
}, Dz = {
  bg: Wa.reference,
  fontSize: Ss.reference,
  width: Fi.reference,
  height: Fi.reference,
  lineHeight: "1",
  [Wa.variable]: "colors.gray.200",
  _dark: {
    [Wa.variable]: "colors.whiteAlpha.400"
  }
}, jz = (e) => {
  const { name: t, theme: r } = e, n = t ? HR({ string: t }) : "colors.gray.400", o = WR(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: Wa.reference,
    fontSize: Ss.reference,
    color: i,
    borderColor: ki.reference,
    verticalAlign: "top",
    width: Fi.reference,
    height: Fi.reference,
    "&:not([data-loaded])": {
      [Wa.variable]: n
    },
    [ki.variable]: "colors.white",
    _dark: {
      [ki.variable]: "colors.gray.800"
    }
  };
}, Lz = {
  fontSize: Ss.reference,
  lineHeight: "1"
}, Bz = US((e) => ({
  badge: bt(Fz, e),
  excessLabel: bt(Dz, e),
  container: bt(jz, e),
  label: Lz
}));
function hn(e) {
  const t = e !== "100%" ? IS[e] : void 0;
  return US({
    container: {
      [Fi.variable]: t ?? e,
      [Ss.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Fi.variable]: t ?? e,
      [Ss.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var Nz = {
  "2xs": hn(4),
  xs: hn(6),
  sm: hn(8),
  md: hn(12),
  lg: hn(16),
  xl: hn(24),
  "2xl": hn(32),
  full: hn("100%")
}, Vz = zz({
  baseStyle: Bz,
  sizes: Nz,
  defaultProps: {
    size: "md"
  }
}), Wz = {
  Accordion: Pz,
  Alert: Iz,
  Avatar: Vz,
  Badge: Ba,
  Breadcrumb: UI,
  Button: JI,
  Checkbox: Ku,
  CloseButton: sz,
  Code: dz,
  Container: pz,
  Divider: yz,
  Drawer: mI,
  Editable: wI,
  Form: EI,
  FormError: II,
  FormLabel: FI,
  Heading: LI,
  Input: fe,
  Kbd: iO,
  Link: sO,
  List: fO,
  Menu: kO,
  Modal: IO,
  NumberInput: WO,
  PinInput: KO,
  Popover: oI,
  Progress: dM,
  Radio: CM,
  Select: RM,
  Skeleton: OM,
  SkipLink: zM,
  Slider: GM,
  Spinner: qM,
  Stat: nO,
  Switch: s5,
  Table: h5,
  Tabs: $5,
  Tag: V5,
  Textarea: eM,
  Tooltip: nM,
  Card: oz,
  Stepper: eR
}, Uz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Hz = {
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
}, Gz = "ltr", Kz = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, HS = {
  semanticTokens: Uz,
  direction: Gz,
  ...QA,
  components: Wz,
  styles: Hz,
  config: Kz
};
function Ta(e) {
  return typeof e == "function";
}
function Yz(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var qz = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return TA(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, Yz(
    ...n.map(
      (i) => (a) => Ta(i) ? i(a) : Qz(a, i)
    )
  )(o);
}, Xz = qz(HS);
function Qz(...e) {
  return er({}, ...e, GS);
}
function GS(e, t, r, n) {
  if ((Ta(e) || Ta(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = Ta(e) ? e(...o) : e, a = Ta(t) ? t(...o) : t;
      return er({}, i, a, GS);
    };
}
function Zz(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function Jz(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var e3 = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, KS = e3(Jz);
function YS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var qS = (e) => YS(e, (t) => t != null);
function t3(e) {
  return typeof e == "function";
}
function XS(e, ...t) {
  return t3(e) ? e(...t) : e;
}
var r3 = typeof Element < "u", n3 = typeof Map == "function", o3 = typeof Set == "function", i3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function fu(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!fu(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (n3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!fu(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (o3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (i3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (r3 && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !fu(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var a3 = function(t, r) {
  try {
    return fu(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const s3 = /* @__PURE__ */ Rs(a3);
function QS(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = u$(), s = e ? KS(i, `components.${e}`) : void 0, l = n || s, u = er(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    qS(Zz(o, ["children"]))
  ), c = b.useRef({});
  if (l) {
    const f = _A(l)(u);
    s3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Ki(e, t = {}) {
  return QS(e, t);
}
function Yi(e, t = {}) {
  return QS(e, t);
}
var l3 = /* @__PURE__ */ new Set([
  ...pA,
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
]), u3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function c3(e) {
  return u3.has(e) || !l3.has(e);
}
function d3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function f3(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var p3 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, h3 = /* @__PURE__ */ sS(
  function(e) {
    return p3.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), m3 = h3, v3 = function(t) {
  return t !== "theme";
}, K0 = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? m3 : v3;
}, Y0 = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, g3 = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return pS(r, n, o), BE(function() {
    return hS(r, n, o);
  }), null;
}, y3 = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = Y0(t, r, n), l = s || K0(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var v = yS(function(g, x, m) {
      var h = u && g.as || o, y = "", w = [], k = g;
      if (g.theme == null) {
        k = {};
        for (var E in g)
          k[E] = g[E];
        k.theme = b.useContext(gs);
      }
      typeof g.className == "string" ? y = OE(x.registered, w, g.className) : g.className != null && (y = g.className + " ");
      var _ = dm(d.concat(w), x.registered, k);
      y += x.key + "-" + _.name, a !== void 0 && (y += " " + a);
      var $ = u && s === void 0 ? K0(h) : l, R = {};
      for (var M in g)
        u && M === "as" || // $FlowFixMe
        $(M) && (R[M] = g[M]);
      return R.className = y, R.ref = m, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(g3, {
        cache: x,
        serialized: _,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ b.createElement(h, R));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + a;
      }
    }), v.withComponent = function(g, x) {
      return e(g, _o({}, r, x, {
        shouldForwardProp: Y0(v, x, !0)
      })).apply(void 0, d);
    }, v;
  };
}, b3 = [
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
], qu = y3.bind();
b3.forEach(function(e) {
  qu[e] = qu(e);
});
var q0, x3 = (q0 = qu.default) != null ? q0 : qu, S3 = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = YS(a, (d, f) => mA(f)), l = XS(e, t), u = d3(
    {},
    o,
    l,
    qS(s),
    i
  ), c = RS(u)(t.theme);
  return n ? [c, n] : c;
};
function lf(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = c3);
  const o = S3({ baseStyle: r }), i = x3(
    e,
    n
  )(o);
  return bo.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = Ls();
    return bo.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function w3() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(lf, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return lf(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, lf(r)), e.get(r);
    }
  });
}
var J = w3();
function _e(e) {
  return b.forwardRef(e);
}
function k3(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = b.createContext(void 0);
  o.displayName = n;
  function i() {
    var a;
    const s = b.useContext(o);
    if (!s && t) {
      const l = new Error(r);
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
function C3(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = b.useMemo(() => fA(r), [r]);
  return /* @__PURE__ */ C.jsxs(WE, { theme: o, children: [
    /* @__PURE__ */ C.jsx(_3, { root: t }),
    n
  ] });
}
function _3({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ C.jsx(Lc, { styles: (r) => ({ [t]: r.__cssVars }) });
}
k3({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function P3() {
  const { colorMode: e } = Ls();
  return /* @__PURE__ */ C.jsx(
    Lc,
    {
      styles: (t) => {
        const r = KS(t, "styles.global"), n = XS(r, { theme: t, colorMode: e });
        return n ? RS(n)(t) : void 0;
      }
    }
  );
}
var ZS = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
ZS.displayName = "EnvironmentContext";
function JS(e) {
  const { children: t, environment: r, disabled: n } = e, o = b.useRef(null), i = b.useMemo(() => r || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [r]), a = !n || !r;
  return /* @__PURE__ */ C.jsxs(ZS.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ C.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
JS.displayName = "EnvironmentProvider";
var T3 = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetScope: o,
    resetCSS: i = !0,
    theme: a = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: u,
    disableGlobalStyle: c
  } = e, d = /* @__PURE__ */ C.jsx(
    JS,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ C.jsx(C3, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ C.jsxs(
    kS,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ C.jsx(GE, { scope: o }) : /* @__PURE__ */ C.jsx(HE, {}),
        !c && /* @__PURE__ */ C.jsx(P3, {}),
        n ? /* @__PURE__ */ C.jsx(SS, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, E3 = (e, t) => e.find((r) => r.id === t);
function X0(e, t) {
  const r = ew(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function ew(e, t) {
  for (const [r, n] of Object.entries(e))
    if (E3(n, t))
      return r;
}
function $3(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function A3(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: a
  };
}
function mo(e, t = []) {
  const r = b.useRef(e);
  return b.useEffect(() => {
    r.current = e;
  }), b.useCallback((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function R3(e, t) {
  const r = mo(e);
  b.useEffect(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
function ws(e, t) {
  const r = b.useRef(!1), n = b.useRef(!1);
  b.useEffect(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), b.useEffect(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const tw = b.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Hc = b.createContext({}), Ns = b.createContext(null), Gc = typeof document < "u", km = Gc ? b.useLayoutEffect : b.useEffect, rw = b.createContext({ strict: !1 }), Cm = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), M3 = "framerAppearId", nw = "data-" + Cm(M3);
function O3(e, t, r, n) {
  const { visualElement: o } = b.useContext(Hc), i = b.useContext(rw), a = b.useContext(Ns), s = b.useContext(tw).reducedMotion, l = b.useRef();
  n = n || i.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const u = l.current;
  b.useInsertionEffect(() => {
    u && u.update(r, a);
  });
  const c = b.useRef(!!r[nw]);
  return km(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), b.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function li(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function I3(e, t, r) {
  return b.useCallback(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : li(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function ks(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Kc(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const _m = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Pm = ["initial", ..._m];
function Yc(e) {
  return Kc(e.animate) || Pm.some((t) => ks(e[t]));
}
function ow(e) {
  return !!(Yc(e) || e.variants);
}
function z3(e, t) {
  if (Yc(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || ks(r) ? r : void 0,
      animate: ks(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function F3(e) {
  const { initial: t, animate: r } = z3(e, b.useContext(Hc));
  return b.useMemo(() => ({ initial: t, animate: r }), [Q0(t), Q0(r)]);
}
function Q0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Z0 = {
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
}, Cs = {};
for (const e in Z0)
  Cs[e] = {
    isEnabled: (t) => Z0[e].some((r) => !!t[r])
  };
function D3(e) {
  for (const t in e)
    Cs[t] = {
      ...Cs[t],
      ...e[t]
    };
}
const Tm = b.createContext({}), iw = b.createContext({}), j3 = Symbol.for("motionComponentSymbol");
function L3({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && D3(e);
  function i(s, l) {
    let u;
    const c = {
      ...b.useContext(tw),
      ...s,
      layoutId: B3(s)
    }, { isStatic: d } = c, f = F3(s), p = n(s, d);
    if (!d && Gc) {
      f.visualElement = O3(o, p, c, t);
      const v = b.useContext(iw), g = b.useContext(rw).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        g,
        e,
        v
      ));
    }
    return b.createElement(
      Hc.Provider,
      { value: f },
      u && f.visualElement ? b.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, I3(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = b.forwardRef(i);
  return a[j3] = o, a;
}
function B3({ layoutId: e }) {
  const t = b.useContext(Tm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function N3(e) {
  function t(n, o = {}) {
    return L3(e(n, o));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const V3 = [
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
function Em(e) {
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
      !!(V3.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Xu = {};
function W3(e) {
  Object.assign(Xu, e);
}
const Vs = [
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
], Ao = new Set(Vs);
function aw(e, { layout: t, layoutId: r }) {
  return Ao.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Xu[e] || e === "opacity");
}
const Mt = (e) => !!(e && e.getVelocity), U3 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, H3 = Vs.length;
function G3(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < H3; a++) {
    const s = Vs[a];
    if (e[s] !== void 0) {
      const l = U3[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const sw = (e) => (t) => typeof t == "string" && t.startsWith(e), lw = sw("--"), Fp = sw("var(--"), K3 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, Y3 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, jn = (e, t, r) => Math.min(Math.max(r, e), t), Ro = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ua = {
  ...Ro,
  transform: (e) => jn(0, 1, e)
}, Rl = {
  ...Ro,
  default: 1
}, Ha = (e) => Math.round(e * 1e5) / 1e5, qc = /(-)?([\d]*\.?[\d])+/g, uw = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, q3 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ws(e) {
  return typeof e == "string";
}
const Us = (e) => ({
  test: (t) => Ws(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), mn = Us("deg"), Or = Us("%"), U = Us("px"), X3 = Us("vh"), Q3 = Us("vw"), J0 = {
  ...Or,
  parse: (e) => Or.parse(e) / 100,
  transform: (e) => Or.transform(e * 100)
}, ey = {
  ...Ro,
  transform: Math.round
}, cw = {
  // Border props
  borderWidth: U,
  borderTopWidth: U,
  borderRightWidth: U,
  borderBottomWidth: U,
  borderLeftWidth: U,
  borderRadius: U,
  radius: U,
  borderTopLeftRadius: U,
  borderTopRightRadius: U,
  borderBottomRightRadius: U,
  borderBottomLeftRadius: U,
  // Positioning props
  width: U,
  maxWidth: U,
  height: U,
  maxHeight: U,
  size: U,
  top: U,
  right: U,
  bottom: U,
  left: U,
  // Spacing props
  padding: U,
  paddingTop: U,
  paddingRight: U,
  paddingBottom: U,
  paddingLeft: U,
  margin: U,
  marginTop: U,
  marginRight: U,
  marginBottom: U,
  marginLeft: U,
  // Transform props
  rotate: mn,
  rotateX: mn,
  rotateY: mn,
  rotateZ: mn,
  scale: Rl,
  scaleX: Rl,
  scaleY: Rl,
  scaleZ: Rl,
  skew: mn,
  skewX: mn,
  skewY: mn,
  distance: U,
  translateX: U,
  translateY: U,
  translateZ: U,
  x: U,
  y: U,
  z: U,
  perspective: U,
  transformPerspective: U,
  opacity: Ua,
  originX: J0,
  originY: J0,
  originZ: U,
  // Misc
  zIndex: ey,
  // SVG
  fillOpacity: Ua,
  strokeOpacity: Ua,
  numOctaves: ey
};
function $m(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (lw(d)) {
      i[d] = f;
      continue;
    }
    const p = cw[d], v = Y3(f, p);
    if (Ao.has(d)) {
      if (l = !0, a[d] = v, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = v) : o[d] = v;
  }
  if (t.transform || (l || n ? o.transform = G3(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Am = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function dw(e, t, r) {
  for (const n in t)
    !Mt(t[n]) && !aw(n, r) && (e[n] = t[n]);
}
function Z3({ transformTemplate: e }, t, r) {
  return b.useMemo(() => {
    const n = Am();
    return $m(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function J3(e, t, r) {
  const n = e.style || {}, o = {};
  return dw(o, n, e), Object.assign(o, Z3(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function e4(e, t, r) {
  const n = {}, o = J3(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const t4 = /* @__PURE__ */ new Set([
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
function Qu(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || t4.has(e);
}
let fw = (e) => !Qu(e);
function r4(e) {
  e && (fw = (t) => t.startsWith("on") ? !Qu(t) : e(t));
}
try {
  r4(require("@emotion/is-prop-valid").default);
} catch {
}
function n4(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (fw(o) || r === !0 && Qu(o) || !t && !Qu(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function ty(e, t, r) {
  return typeof e == "string" ? e : U.transform(t + r * e);
}
function o4(e, t, r) {
  const n = ty(t, e.x, e.width), o = ty(r, e.y, e.height);
  return `${n} ${o}`;
}
const i4 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, a4 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function s4(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? i4 : a4;
  e[i.offset] = U.transform(-n);
  const a = U.transform(t), s = U.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Rm(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, d, f) {
  if ($m(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: v, dimensions: g } = e;
  p.transform && (g && (v.transform = p.transform), delete p.transform), g && (o !== void 0 || i !== void 0 || v.transform) && (v.transformOrigin = o4(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && s4(p, a, s, l, !1);
}
const pw = () => ({
  ...Am(),
  attrs: {}
}), Mm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function l4(e, t, r, n) {
  const o = b.useMemo(() => {
    const i = pw();
    return Rm(i, t, { enableHardwareAcceleration: !1 }, Mm(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    dw(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function u4(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (Em(r) ? l4 : e4)(n, i, a, r), c = {
      ...n4(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = b.useMemo(() => Mt(d) ? d.get() : d, [d]);
    return b.createElement(r, {
      ...c,
      children: f
    });
  };
}
function hw(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const mw = /* @__PURE__ */ new Set([
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
function vw(e, t, r, n) {
  hw(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(mw.has(o) ? o : Cm(o), t.attrs[o]);
}
function Om(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Mt(r[o]) || t.style && Mt(t.style[o]) || aw(o, e)) && (n[o] = r[o]);
  return n;
}
function gw(e, t) {
  const r = Om(e, t);
  for (const n in e)
    if (Mt(e[n]) || Mt(t[n])) {
      const o = Vs.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Im(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function yw(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Zu = (e) => Array.isArray(e), c4 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), d4 = (e) => Zu(e) ? e[e.length - 1] || 0 : e;
function pu(e) {
  const t = Mt(e) ? e.get() : e;
  return c4(t) ? t.toValue() : t;
}
function f4({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: p4(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const bw = (e) => (t, r) => {
  const n = b.useContext(Hc), o = b.useContext(Ns), i = () => f4(e, t, n, o);
  return r ? i() : yw(i);
};
function p4(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = pu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Yc(e), u = ow(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Kc(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const v = Im(e, p);
    if (!v)
      return;
    const { transitionEnd: g, transition: x, ...m } = v;
    for (const h in m) {
      let y = m[h];
      if (Array.isArray(y)) {
        const w = c ? y.length - 1 : 0;
        y = y[w];
      }
      y !== null && (o[h] = y);
    }
    for (const h in g)
      o[h] = g[h];
  }), o;
}
const Le = (e) => e;
class ry {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function h4(e) {
  let t = new ry(), r = new ry(), n = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && o, f = d ? t : r;
      return u && a.add(l), f.add(l) && d && o && (n = t.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      r.remove(l), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.clear(), n = t.order.length, n)
        for (let u = 0; u < n; u++) {
          const c = t.order[u];
          c(l), a.has(c) && (s.schedule(c), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const Ml = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], m4 = 40;
function v4(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Ml.reduce((d, f) => (d[f] = h4(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, m4), 1), o.timestamp = d, o.isProcessing = !0, Ml.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: Ml.reduce((d, f) => {
    const p = i[f];
    return d[f] = (v, g = !1, x = !1) => (r || l(), p.schedule(v, g, x)), d;
  }, {}), cancel: (d) => Ml.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: ke, cancel: an, state: Qe, steps: uf } = v4(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Le, !0), g4 = {
  useVisualState: bw({
    scrapeMotionValuesFromProps: gw,
    createRenderState: pw,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      ke.read(() => {
        try {
          r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          r.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), ke.render(() => {
        Rm(r, n, { enableHardwareAcceleration: !1 }, Mm(t.tagName), e.transformTemplate), vw(t, r);
      });
    }
  })
}, y4 = {
  useVisualState: bw({
    scrapeMotionValuesFromProps: Om,
    createRenderState: Am
  })
};
function b4(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Em(e) ? g4 : y4,
    preloadedFeatures: r,
    useRender: u4(t),
    createVisualElement: n,
    Component: e
  };
}
function qr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const xw = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Xc(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const x4 = (e) => (t) => xw(t) && e(t, Xc(t));
function Zr(e, t, r, n) {
  return qr(e, t, x4(r), n);
}
const S4 = (e, t) => (r) => t(e(r)), In = (...e) => e.reduce(S4);
function Sw(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const ny = Sw("dragHorizontal"), oy = Sw("dragVertical");
function ww(e) {
  let t = !1;
  if (e === "y")
    t = oy();
  else if (e === "x")
    t = ny();
  else {
    const r = ny(), n = oy();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function kw() {
  const e = ww(!0);
  return e ? (e(), !1) : !0;
}
class Wn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function iy(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || kw())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && ke.update(() => s[n](i, a));
  };
  return Zr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class w4 extends Wn {
  mount() {
    this.unmount = In(iy(this.node, !0), iy(this.node, !1));
  }
  unmount() {
  }
}
class k4 extends Wn {
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
    this.unmount = In(qr(this.node.current, "focus", () => this.onFocus()), qr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Cw = (e, t) => t ? e === t ? !0 : Cw(e, t.parentElement) : !1;
function cf(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Xc(r));
}
class C4 extends Wn {
  constructor() {
    super(...arguments), this.removeStartListeners = Le, this.removeEndListeners = Le, this.removeAccessibleListeners = Le, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = Zr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        ke.update(() => {
          Cw(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = Zr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = In(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || cf("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && ke.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = qr(this.node.current, "keyup", a), cf("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = qr(this.node.current, "keydown", t), n = () => {
        this.isPressing && cf("cancel", (i, a) => this.cancelPress(i, a));
      }, o = qr(this.node.current, "blur", n);
      this.removeAccessibleListeners = In(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && ke.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !kw();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && ke.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Zr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = qr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = In(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Dp = /* @__PURE__ */ new WeakMap(), df = /* @__PURE__ */ new WeakMap(), _4 = (e) => {
  const t = Dp.get(e.target);
  t && t(e);
}, P4 = (e) => {
  e.forEach(_4);
};
function T4({ root: e, ...t }) {
  const r = e || document;
  df.has(r) || df.set(r, {});
  const n = df.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(P4, { root: e, ...t })), n[o];
}
function E4(e, t, r) {
  const n = T4(t);
  return Dp.set(e, r), n.observe(e), () => {
    Dp.delete(e), n.unobserve(e);
  };
}
const $4 = {
  some: 0,
  all: 1
};
class A4 extends Wn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : $4[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return E4(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(R4(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function R4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const M4 = {
  inView: {
    Feature: A4
  },
  tap: {
    Feature: C4
  },
  focus: {
    Feature: k4
  },
  hover: {
    Feature: w4
  }
};
function _w(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function O4(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function I4(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Qc(e, t, r) {
  const n = e.getProps();
  return Im(n, t, r !== void 0 ? r : n.custom, O4(e), I4(e));
}
let z4 = Le, zm = Le;
const zn = (e) => e * 1e3, Jr = (e) => e / 1e3, F4 = {
  current: !1
}, Pw = (e) => Array.isArray(e) && typeof e[0] == "number";
function Tw(e) {
  return !!(!e || typeof e == "string" && Ew[e] || Pw(e) || Array.isArray(e) && e.every(Tw));
}
const Ea = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, Ew = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ea([0, 0.65, 0.55, 1]),
  circOut: Ea([0.55, 0, 1, 0.45]),
  backIn: Ea([0.31, 0.01, 0.66, -0.59]),
  backOut: Ea([0.33, 1.53, 0.69, 0.99])
};
function $w(e) {
  if (e)
    return Pw(e) ? Ea(e) : Array.isArray(e) ? e.map($w) : Ew[e];
}
function D4(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = $w(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function j4(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Aw = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, L4 = 1e-7, B4 = 12;
function N4(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = Aw(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > L4 && ++s < B4);
  return a;
}
function Hs(e, t, r, n) {
  if (e === t && r === n)
    return Le;
  const o = (i) => N4(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : Aw(o(i), t, n);
}
const V4 = Hs(0.42, 0, 1, 1), W4 = Hs(0, 0, 0.58, 1), Rw = Hs(0.42, 0, 0.58, 1), U4 = (e) => Array.isArray(e) && typeof e[0] != "number", Mw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ow = (e) => (t) => 1 - e(1 - t), Iw = (e) => 1 - Math.sin(Math.acos(e)), Fm = Ow(Iw), H4 = Mw(Fm), zw = Hs(0.33, 1.53, 0.69, 0.99), Dm = Ow(zw), G4 = Mw(Dm), K4 = (e) => (e *= 2) < 1 ? 0.5 * Dm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Y4 = {
  linear: Le,
  easeIn: V4,
  easeInOut: Rw,
  easeOut: W4,
  circIn: Iw,
  circInOut: H4,
  circOut: Fm,
  backIn: Dm,
  backInOut: G4,
  backOut: zw,
  anticipate: K4
}, ay = (e) => {
  if (Array.isArray(e)) {
    zm(e.length === 4);
    const [t, r, n, o] = e;
    return Hs(t, r, n, o);
  } else if (typeof e == "string")
    return Y4[e];
  return e;
}, jm = (e, t) => (r) => !!(Ws(r) && q3.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Fw = (e, t, r) => (n) => {
  if (!Ws(n))
    return n;
  const [o, i, a, s] = n.match(qc);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, q4 = (e) => jn(0, 255, e), ff = {
  ...Ro,
  transform: (e) => Math.round(q4(e))
}, lo = {
  test: jm("rgb", "red"),
  parse: Fw("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + ff.transform(e) + ", " + ff.transform(t) + ", " + ff.transform(r) + ", " + Ha(Ua.transform(n)) + ")"
};
function X4(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const jp = {
  test: jm("#"),
  parse: X4,
  transform: lo.transform
}, ui = {
  test: jm("hsl", "hue"),
  parse: Fw("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Or.transform(Ha(t)) + ", " + Or.transform(Ha(r)) + ", " + Ha(Ua.transform(n)) + ")"
}, ht = {
  test: (e) => lo.test(e) || jp.test(e) || ui.test(e),
  parse: (e) => lo.test(e) ? lo.parse(e) : ui.test(e) ? ui.parse(e) : jp.parse(e),
  transform: (e) => Ws(e) ? e : e.hasOwnProperty("red") ? lo.transform(e) : ui.transform(e)
}, ze = (e, t, r) => -r * e + r * t + e;
function pf(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Q4({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = pf(l, s, e + 1 / 3), i = pf(l, s, e), a = pf(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const hf = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, Z4 = [jp, lo, ui], J4 = (e) => Z4.find((t) => t.test(e));
function sy(e) {
  const t = J4(e);
  let r = t.parse(e);
  return t === ui && (r = Q4(r)), r;
}
const Dw = (e, t) => {
  const r = sy(e), n = sy(t), o = { ...r };
  return (i) => (o.red = hf(r.red, n.red, i), o.green = hf(r.green, n.green, i), o.blue = hf(r.blue, n.blue, i), o.alpha = ze(r.alpha, n.alpha, i), lo.transform(o));
};
function eF(e) {
  var t, r;
  return isNaN(e) && Ws(e) && (((t = e.match(qc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(uw)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const jw = {
  regex: K3,
  countKey: "Vars",
  token: "${v}",
  parse: Le
}, Lw = {
  regex: uw,
  countKey: "Colors",
  token: "${c}",
  parse: ht.parse
}, Bw = {
  regex: qc,
  countKey: "Numbers",
  token: "${n}",
  parse: Ro.parse
};
function mf(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function Ju(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && mf(r, jw), mf(r, Lw), mf(r, Bw), r;
}
function Nw(e) {
  return Ju(e).values;
}
function Vw(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Ju(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(jw.token, a[l]) : l < n + r ? s = s.replace(Lw.token, ht.transform(a[l])) : s = s.replace(Bw.token, Ha(a[l]));
    return s;
  };
}
const tF = (e) => typeof e == "number" ? 0 : e;
function rF(e) {
  const t = Nw(e);
  return Vw(e)(t.map(tF));
}
const Ln = {
  test: eF,
  parse: Nw,
  createTransformer: Vw,
  getAnimatableNone: rF
}, Ww = (e, t) => (r) => `${r > 0 ? t : e}`;
function Uw(e, t) {
  return typeof e == "number" ? (r) => ze(e, t, r) : ht.test(e) ? Dw(e, t) : e.startsWith("var(") ? Ww(e, t) : Gw(e, t);
}
const Hw = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => Uw(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, nF = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Uw(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, Gw = (e, t) => {
  const r = Ln.createTransformer(t), n = Ju(e), o = Ju(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? In(Hw(n.values, o.values), r) : Ww(e, t);
}, _s = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, ly = (e, t) => (r) => ze(e, t, r);
function oF(e) {
  return typeof e == "number" ? ly : typeof e == "string" ? ht.test(e) ? Dw : Gw : Array.isArray(e) ? Hw : typeof e == "object" ? nF : ly;
}
function iF(e, t, r) {
  const n = [], o = r || oF(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Le : t;
      s = In(l, s);
    }
    n.push(s);
  }
  return n;
}
function Kw(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (zm(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = iF(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = _s(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(jn(e[0], e[i - 1], u)) : l;
}
function aF(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = _s(0, t, n);
    e.push(ze(r, 1, o));
  }
}
function sF(e) {
  const t = [0];
  return aF(t, e.length - 1), t;
}
function lF(e, t) {
  return e.map((r) => r * t);
}
function uF(e, t) {
  return e.map(() => t || Rw).splice(0, e.length - 1);
}
function ec({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = U4(n) ? n.map(ay) : ay(n), i = {
    done: !1,
    value: t[0]
  }, a = lF(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : sF(t),
    e
  ), s = Kw(a, t, {
    ease: Array.isArray(o) ? o : uF(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Yw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const cF = 5;
function qw(e, t, r) {
  const n = Math.max(t - cF, 0);
  return Yw(r - e(n), t - n);
}
const vf = 1e-3, dF = 0.01, uy = 10, fF = 0.05, pF = 1;
function hF({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  z4(e <= zn(uy));
  let a = 1 - t;
  a = jn(fF, pF, a), e = jn(dF, uy, Jr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, p = Lp(u, a), v = Math.exp(-d);
    return vf - f / p * v;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(u, 2) * e, v = Math.exp(-d), g = Lp(Math.pow(u, 2), a);
    return (-o(u) + vf > 0 ? -1 : 1) * ((f - p) * v) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -vf + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = vF(o, i, s);
  if (e = zn(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * n;
    return {
      stiffness: u,
      damping: a * 2 * Math.sqrt(n * u),
      duration: e
    };
  }
}
const mF = 12;
function vF(e, t, r) {
  let n = r;
  for (let o = 1; o < mF; o++)
    n = n - e(n) / t(n);
  return n;
}
function Lp(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const gF = ["duration", "bounce"], yF = ["stiffness", "damping", "mass"];
function cy(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function bF(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!cy(e, yF) && cy(e, gF)) {
    const r = hF(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Xw({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = bF(n), p = c ? -Jr(c) : 0, v = l / (2 * Math.sqrt(s * u)), g = i - o, x = Jr(Math.sqrt(s / u)), m = Math.abs(g) < 5;
  r || (r = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (v < 1) {
    const y = Lp(x, v);
    h = (w) => {
      const k = Math.exp(-v * x * w);
      return i - k * ((p + v * x * g) / y * Math.sin(y * w) + g * Math.cos(y * w));
    };
  } else if (v === 1)
    h = (y) => i - Math.exp(-x * y) * (g + (p + x * g) * y);
  else {
    const y = x * Math.sqrt(v * v - 1);
    h = (w) => {
      const k = Math.exp(-v * x * w), E = Math.min(y * w, 300);
      return i - k * ((p + v * x * g) * Math.sinh(E) + y * g * Math.cosh(E)) / y;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (y) => {
      const w = h(y);
      if (f)
        a.done = y >= d;
      else {
        let k = p;
        y !== 0 && (v < 1 ? k = qw(h, y, w) : k = 0);
        const E = Math.abs(k) <= r, _ = Math.abs(i - w) <= t;
        a.done = E && _;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function dy({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = ($) => s !== void 0 && $ < s || l !== void 0 && $ > l, v = ($) => s === void 0 ? l : l === void 0 || Math.abs(s - $) < Math.abs(l - $) ? s : l;
  let g = r * t;
  const x = d + g, m = a === void 0 ? x : a(x);
  m !== x && (g = m - d);
  const h = ($) => -g * Math.exp(-$ / n), y = ($) => m + h($), w = ($) => {
    const R = h($), M = y($);
    f.done = Math.abs(R) <= u, f.value = f.done ? m : M;
  };
  let k, E;
  const _ = ($) => {
    p(f.value) && (k = $, E = Xw({
      keyframes: [f.value, v(f.value)],
      velocity: qw(y, $, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return _(0), {
    calculatedDuration: null,
    next: ($) => {
      let R = !1;
      return !E && k === void 0 && (R = !0, w($), _($)), k !== void 0 && $ > k ? E.next($ - k) : (!R && w($), f);
    }
  };
}
const xF = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => ke.update(t, !0),
    stop: () => an(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Qe.isProcessing ? Qe.timestamp : performance.now()
  };
}, fy = 2e4;
function py(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < fy; )
    t += r, n = e.next(t);
  return t >= fy ? 1 / 0 : t;
}
const SF = {
  decay: dy,
  inertia: dy,
  tween: ec,
  keyframes: ec,
  spring: Xw
};
function tc({ autoplay: e = !0, delay: t = 0, driver: r = xF, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, v = !1, g, x;
  const m = () => {
    x = new Promise((B) => {
      g = B;
    });
  };
  m();
  let h;
  const y = SF[o] || ec;
  let w;
  y !== ec && typeof n[0] != "number" && (w = Kw([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const k = y({ ...f, keyframes: n });
  let E;
  s === "mirror" && (E = y({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let _ = "idle", $ = null, R = null, M = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = py(k));
  const { calculatedDuration: j } = k;
  let q = 1 / 0, G = 1 / 0;
  j !== null && (q = j + a, G = q * (i + 1) - a);
  let K = 0;
  const Z = (B) => {
    if (R === null)
      return;
    p > 0 && (R = Math.min(R, B)), p < 0 && (R = Math.min(B - G / p, R)), $ !== null ? K = $ : K = Math.round(B - R) * p;
    const X = K - t * (p >= 0 ? 1 : -1), H = p >= 0 ? X < 0 : X > G;
    K = Math.max(X, 0), _ === "finished" && $ === null && (K = G);
    let Q = K, Pe = k;
    if (i) {
      const Ae = K / q;
      let He = Math.floor(Ae), Ge = Ae % 1;
      !Ge && Ae >= 1 && (Ge = 1), Ge === 1 && He--, He = Math.min(He, i + 1);
      const lr = !!(He % 2);
      lr && (s === "reverse" ? (Ge = 1 - Ge, a && (Ge -= a / q)) : s === "mirror" && (Pe = E));
      let ur = jn(0, 1, Ge);
      K > G && (ur = s === "reverse" && lr ? 1 : 0), Q = ur * q;
    }
    const se = H ? { done: !1, value: n[0] } : Pe.next(Q);
    w && (se.value = w(se.value));
    let { done: ge } = se;
    !H && j !== null && (ge = p >= 0 ? K >= G : K <= 0);
    const Se = $ === null && (_ === "finished" || _ === "running" && ge);
    return d && d(se.value), Se && I(), se;
  }, Y = () => {
    h && h.stop(), h = void 0;
  }, ee = () => {
    _ = "idle", Y(), g(), m(), R = M = null;
  }, I = () => {
    _ = "finished", c && c(), Y(), g();
  }, L = () => {
    if (v)
      return;
    h || (h = r(Z));
    const B = h.now();
    l && l(), $ !== null ? R = B - $ : (!R || _ === "finished") && (R = B), _ === "finished" && m(), M = R, $ = null, _ = "running", h.start();
  };
  e && L();
  const N = {
    then(B, X) {
      return x.then(B, X);
    },
    get time() {
      return Jr(K);
    },
    set time(B) {
      B = zn(B), K = B, $ !== null || !h || p === 0 ? $ = B : R = h.now() - B / p;
    },
    get duration() {
      const B = k.calculatedDuration === null ? py(k) : k.calculatedDuration;
      return Jr(B);
    },
    get speed() {
      return p;
    },
    set speed(B) {
      B === p || !h || (p = B, N.time = Jr(K));
    },
    get state() {
      return _;
    },
    play: L,
    pause: () => {
      _ = "paused", $ = K;
    },
    stop: () => {
      v = !0, _ !== "idle" && (_ = "idle", u && u(), ee());
    },
    cancel: () => {
      M !== null && Z(M), ee();
    },
    complete: () => {
      _ = "finished";
    },
    sample: (B) => (R = 0, Z(B))
  };
  return N;
}
function wF(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const kF = wF(() => Object.hasOwnProperty.call(Element.prototype, "animate")), CF = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Ol = 10, _F = 2e4, PF = (e, t) => t.type === "spring" || e === "backgroundColor" || !Tw(t.ease);
function TF(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(kF() && CF.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (PF(t, o)) {
    const h = tc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let y = { done: !1, value: c[0] };
    const w = [];
    let k = 0;
    for (; !y.done && k < _F; )
      y = h.sample(k), w.push(y.value), k += Ol;
    p = void 0, c = w, d = k - Ol, f = "linear";
  }
  const v = D4(e.owner.current, t, c, {
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
  o.syncStart && (v.startTime = Qe.isProcessing ? Qe.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const g = () => v.cancel(), x = () => {
    ke.update(g), s(), u();
  };
  return v.onfinish = () => {
    e.set(j4(c, o)), n && n(), x();
  }, {
    then(h, y) {
      return l.then(h, y);
    },
    attachTimeline(h) {
      return v.timeline = h, v.onfinish = null, Le;
    },
    get time() {
      return Jr(v.currentTime || 0);
    },
    set time(h) {
      v.currentTime = zn(h);
    },
    get speed() {
      return v.playbackRate;
    },
    set speed(h) {
      v.playbackRate = h;
    },
    get duration() {
      return Jr(d);
    },
    play: () => {
      a || (v.play(), an(g));
    },
    pause: () => v.pause(),
    stop: () => {
      if (a = !0, v.playState === "idle")
        return;
      const { currentTime: h } = v;
      if (h) {
        const y = tc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(y.sample(h - Ol).value, y.sample(h).value, Ol);
      }
      x();
    },
    complete: () => v.finish(),
    cancel: x
  };
}
function EF({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: Le,
    pause: Le,
    stop: Le,
    then: (i) => (i(), Promise.resolve()),
    cancel: Le,
    complete: Le
  });
  return t ? tc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const $F = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, AF = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), RF = {
  type: "keyframes",
  duration: 0.8
}, MF = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, OF = (e, { keyframes: t }) => t.length > 2 ? RF : Ao.has(e) ? e.startsWith("scale") ? AF(t[1]) : $F : MF, Bp = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Ln.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), IF = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function zF(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(qc) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = IF.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const FF = /([a-z-]*)\(.*?\)/g, Np = {
  ...Ln,
  getAnimatableNone: (e) => {
    const t = e.match(FF);
    return t ? t.map(zF).join(" ") : e;
  }
}, DF = {
  ...cw,
  // Color props
  color: ht,
  backgroundColor: ht,
  outlineColor: ht,
  fill: ht,
  stroke: ht,
  // Border props
  borderColor: ht,
  borderTopColor: ht,
  borderRightColor: ht,
  borderBottomColor: ht,
  borderLeftColor: ht,
  filter: Np,
  WebkitFilter: Np
}, Lm = (e) => DF[e];
function Qw(e, t) {
  let r = Lm(e);
  return r !== Np && (r = Ln), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Zw = (e) => /^0[^.\s]+$/.test(e);
function jF(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Zw(e);
}
function LF(e, t, r, n) {
  const o = Bp(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), jF(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Qw(t, s);
    }
  return i;
}
function BF({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Bm(e, t) {
  return e[t] || e.default || e;
}
const Nm = (e, t, r, n = {}) => (o) => {
  const i = Bm(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - zn(a);
  const l = LF(t, e, r, i), u = l[0], c = l[l.length - 1], d = Bp(e, u), f = Bp(e, c);
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
  if (BF(i) || (p = {
    ...p,
    ...OF(e, p)
  }), p.duration && (p.duration = zn(p.duration)), p.repeatDelay && (p.repeatDelay = zn(p.repeatDelay)), !d || !f || F4.current || i.type === !1)
    return EF(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const v = TF(t, e, p);
    if (v)
      return v;
  }
  return tc(p);
};
function rc(e) {
  return !!(Mt(e) && e.add);
}
const Jw = (e) => /^\-?\d*\.?\d+$/.test(e);
function Vm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Wm(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Um {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Vm(this.subscriptions, t), () => Wm(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const NF = (e) => !isNaN(parseFloat(e));
class VF {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.16.12", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: i, timestamp: a } = Qe;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, ke.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => ke.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = NF(this.current), this.owner = r.owner;
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
  on(t, r) {
    this.events[t] || (this.events[t] = new Um());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), ke.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
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
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
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
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = t, this.timeDelta = n;
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
      Yw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
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
function Di(e, t) {
  return new VF(e, t);
}
const ek = (e) => (t) => t.test(e), WF = {
  test: (e) => e === "auto",
  parse: (e) => e
}, tk = [Ro, U, Or, mn, Q3, X3, WF], ha = (e) => tk.find(ek(e)), UF = [...tk, ht, Ln], HF = (e) => UF.find(ek(e));
function GF(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Di(r));
}
function KF(e, t) {
  const r = Qc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = d4(i[a]);
    GF(e, a, s);
  }
}
function YF(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Jw(c) || Zw(c)) ? c = parseFloat(c) : !HF(c) && Ln.test(u) && (c = Qw(l, u)), e.addValue(l, Di(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function qF(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function XF(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = qF(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function QF({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function rk(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && QF(c, d))
      continue;
    const v = {
      delay: r,
      elapsed: 0,
      ...Bm(i || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[nw];
      h && (g = !1, v.elapsed = window.HandoffAppearAnimations(h, d, f, ke), v.syncStart = !0);
    }
    let x = g && p === f.get();
    if (v.type === "spring" && (f.getVelocity() || v.velocity) && (x = !1), f.animation && (x = !1), x)
      continue;
    f.start(Nm(d, f, p, e.shouldReduceMotion && Ao.has(d) ? { type: !1 } : v));
    const m = f.animation;
    rc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && KF(e, a);
  }), u;
}
function Vp(e, t, r = {}) {
  const n = Qc(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(rk(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return ZF(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function ZF(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(JF).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Vp(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function JF(e, t) {
  return e.sortNodePosition(t);
}
function eD(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Vp(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Vp(e, t, r);
  else {
    const o = typeof t == "function" ? Qc(e, t, r.custom) : t;
    n = Promise.all(rk(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const tD = [..._m].reverse(), rD = _m.length;
function nD(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => eD(e, r, n)));
}
function oD(e) {
  let t = nD(e);
  const r = aD();
  let n = !0;
  const o = (l, u) => {
    const c = Qc(e, u);
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
    for (let m = 0; m < rD; m++) {
      const h = tD[m], y = r[h], w = c[h] !== void 0 ? c[h] : d[h], k = ks(w), E = h === u ? y.isActive : null;
      E === !1 && (g = m);
      let _ = w === d[h] && w !== c[h] && k;
      if (_ && n && e.manuallyAnimateOnMount && (_ = !1), y.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && E === null || // If we didn't and don't have any defined prop for this animation type
      !w && !y.prevProp || // Or if the prop doesn't define an animation
      Kc(w) || typeof w == "boolean")
        continue;
      const $ = iD(y.prevProp, w);
      let R = $ || // If we're making this variant active, we want to always make it active
      h === u && y.isActive && !_ && k || // If we removed a higher-priority variant (i is in reverse order)
      m > g && k;
      const M = Array.isArray(w) ? w : [w];
      let j = M.reduce(o, {});
      E === !1 && (j = {});
      const { prevResolvedValues: q = {} } = y, G = {
        ...q,
        ...j
      }, K = (Z) => {
        R = !0, p.delete(Z), y.needsAnimating[Z] = !0;
      };
      for (const Z in G) {
        const Y = j[Z], ee = q[Z];
        v.hasOwnProperty(Z) || (Y !== ee ? Zu(Y) && Zu(ee) ? !_w(Y, ee) || $ ? K(Z) : y.protectedKeys[Z] = !0 : Y !== void 0 ? K(Z) : p.add(Z) : Y !== void 0 && p.has(Z) ? K(Z) : y.protectedKeys[Z] = !0);
      }
      y.prevProp = w, y.prevResolvedValues = j, y.isActive && (v = { ...v, ...j }), n && e.blockInitialAnimation && (R = !1), R && !_ && f.push(...M.map((Z) => ({
        animation: Z,
        options: { type: h, ...l }
      })));
    }
    if (p.size) {
      const m = {};
      p.forEach((h) => {
        const y = e.getBaseTarget(h);
        y !== void 0 && (m[h] = y);
      }), f.push({ animation: m });
    }
    let x = !!f.length;
    return n && c.initial === !1 && !e.manuallyAnimateOnMount && (x = !1), n = !1, x ? t(f) : Promise.resolve();
  }
  function s(l, u, c) {
    var d;
    if (r[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var v;
      return (v = p.animationState) === null || v === void 0 ? void 0 : v.setActive(l, u);
    }), r[l].isActive = u;
    const f = a(c, l);
    for (const p in r)
      r[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => r
  };
}
function iD(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !_w(t, e) : !1;
}
function qn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function aD() {
  return {
    animate: qn(!0),
    whileInView: qn(),
    whileHover: qn(),
    whileTap: qn(),
    whileDrag: qn(),
    whileFocus: qn(),
    exit: qn()
  };
}
class sD extends Wn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = oD(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Kc(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let lD = 0;
class uD extends Wn {
  constructor() {
    super(...arguments), this.id = lD++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const cD = {
  animation: {
    Feature: sD
  },
  exit: {
    Feature: uD
  }
}, hy = (e, t) => Math.abs(e - t);
function dD(e, t) {
  const r = hy(e.x, t.x), n = hy(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class nk {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = yf(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = dD(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: v } = Qe;
      this.history.push({ ...p, timestamp: v });
      const { onStart: g, onMove: x } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = gf(d, this.transformPagePoint), ke.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, v = yf(c.type === "pointercancel" ? this.lastMoveEventInfo : gf(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, v), p && p(c, v);
    }, !xw(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = Xc(t), a = gf(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = Qe;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, yf(a, this.history)), this.removeListeners = In(Zr(this.contextWindow, "pointermove", this.handlePointerMove), Zr(this.contextWindow, "pointerup", this.handlePointerUp), Zr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), an(this.updatePoint);
  }
}
function gf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function my(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function yf({ point: e }, t) {
  return {
    point: e,
    delta: my(e, ok(t)),
    offset: my(e, fD(t)),
    velocity: pD(t, 0.1)
  };
}
function fD(e) {
  return e[0];
}
function ok(e) {
  return e[e.length - 1];
}
function pD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = ok(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > zn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = Jr(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Nt(e) {
  return e.max - e.min;
}
function Wp(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function vy(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = ze(t.min, t.max, e.origin), e.scale = Nt(r) / Nt(t), (Wp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ze(r.min, r.max, e.origin) - e.originPoint, (Wp(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ga(e, t, r, n) {
  vy(e.x, t.x, r.x, n ? n.originX : void 0), vy(e.y, t.y, r.y, n ? n.originY : void 0);
}
function gy(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Nt(t);
}
function hD(e, t, r) {
  gy(e.x, t.x, r.x), gy(e.y, t.y, r.y);
}
function yy(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Nt(t);
}
function Ka(e, t, r) {
  yy(e.x, t.x, r.x), yy(e.y, t.y, r.y);
}
function mD(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? ze(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? ze(r, e, n.max) : Math.min(e, r)), e;
}
function by(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function vD(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: by(e.x, r, o),
    y: by(e.y, t, n)
  };
}
function xy(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function gD(e, t) {
  return {
    x: xy(e.x, t.x),
    y: xy(e.y, t.y)
  };
}
function yD(e, t) {
  let r = 0.5;
  const n = Nt(e), o = Nt(t);
  return o > n ? r = _s(t.min, t.max - n, e.min) : n > o && (r = _s(e.min, e.max - o, t.min)), jn(0, 1, r);
}
function bD(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Up = 0.35;
function xD(e = Up) {
  return e === !1 ? e = 0 : e === !0 && (e = Up), {
    x: Sy(e, "left", "right"),
    y: Sy(e, "top", "bottom")
  };
}
function Sy(e, t, r) {
  return {
    min: wy(e, t),
    max: wy(e, r)
  };
}
function wy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ky = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ci = () => ({
  x: ky(),
  y: ky()
}), Cy = () => ({ min: 0, max: 0 }), Ve = () => ({
  x: Cy(),
  y: Cy()
});
function kr(e) {
  return [e("x"), e("y")];
}
function ik({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function SD({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function wD(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function bf(e) {
  return e === void 0 || e === 1;
}
function Hp({ scale: e, scaleX: t, scaleY: r }) {
  return !bf(e) || !bf(t) || !bf(r);
}
function Jn(e) {
  return Hp(e) || ak(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function ak(e) {
  return _y(e.x) || _y(e.y);
}
function _y(e) {
  return e && e !== "0%";
}
function nc(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function Py(e, t, r, n, o) {
  return o !== void 0 && (e = nc(e, o, n)), nc(e, r, n) + t;
}
function Gp(e, t = 0, r = 1, n, o) {
  e.min = Py(e.min, t, r, n, o), e.max = Py(e.max, t, r, n, o);
}
function sk(e, { x: t, y: r }) {
  Gp(e.x, t.translate, t.scale, t.originPoint), Gp(e.y, r.translate, r.scale, r.originPoint);
}
function kD(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && di(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, sk(e, a)), n && Jn(i.latestValues) && di(e, i.latestValues));
  }
  t.x = Ty(t.x), t.y = Ty(t.y);
}
function Ty(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function yn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ey(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = ze(e.min, e.max, i);
  Gp(e, t[r], t[n], a, t.scale);
}
const CD = ["x", "scaleX", "originX"], _D = ["y", "scaleY", "originY"];
function di(e, t) {
  Ey(e.x, t, CD), Ey(e.y, t, _D);
}
function lk(e, t) {
  return ik(wD(e.getBoundingClientRect(), t));
}
function PD(e, t, r) {
  const n = lk(e, r), { scroll: o } = t;
  return o && (yn(n.x, o.offset.x), yn(n.y, o.offset.y)), n;
}
const uk = ({ current: e }) => e ? e.ownerDocument.defaultView : null, TD = /* @__PURE__ */ new WeakMap();
class ED {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ve(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Xc(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ww(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), kr((v) => {
        let g = this.getAxisMotionValue(v).get() || 0;
        if (Or.test(g)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const m = x.layout.layoutBox[v];
            m && (g = Nt(m) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[v] = g;
      }), f && ke.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: v } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = $D(v), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, v), this.updateAxis("y", u.point, v), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new nk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: uk(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ke.update(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !Il(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = mD(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && li(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = vD(o.layoutBox, r) : this.constraints = !1, this.elastic = xD(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && kr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = bD(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !li(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = PD(n, o.root, this.visualElement.getTransformPagePoint());
    let a = gD(o.layout.layoutBox, i);
    if (r) {
      const s = r(SD(a));
      this.hasMutatedConstraints = !!s, s && (a = ik(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = kr((c) => {
      if (!Il(c, r, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, v = {
        type: "inertia",
        velocity: n ? t[c] : 0,
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
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Nm(t, n, 0, r));
  }
  stopAnimation() {
    kr((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(), n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    kr((r) => {
      const { drag: n } = this.getProps();
      if (!Il(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - ze(a, s, 0.5));
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
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!li(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    kr((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = yD({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), kr((a) => {
      if (!Il(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(ze(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    TD.set(this.visualElement, this);
    const t = this.visualElement.current, r = Zr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      li(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = qr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (kr((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Up, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function Il(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function $D(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class AD extends Wn {
  constructor(t) {
    super(t), this.removeGroupControls = Le, this.removeListeners = Le, this.controls = new ED(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Le;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const $y = (e) => (t, r) => {
  e && ke.update(() => e(t, r));
};
class RD extends Wn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Le;
  }
  onPointerDown(t) {
    this.session = new nk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: uk(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: $y(t),
      onStart: $y(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && ke.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Zr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function ck() {
  const e = b.useContext(Ns);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = b.useId();
  return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function MD() {
  return OD(b.useContext(Ns));
}
function OD(e) {
  return e === null ? !0 : e.isPresent;
}
const hu = {
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
function Ay(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ma = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (U.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Ay(e, t.target.x), n = Ay(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, ID = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Ln.parse(e);
    if (o.length > 5)
      return n;
    const i = Ln.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = ze(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class zD extends bo.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    W3(FD), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), hu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || ke.postRender(() => {
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
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function dk(e) {
  const [t, r] = ck(), n = b.useContext(Tm);
  return bo.createElement(zD, { ...e, layoutGroup: n, switchLayoutGroup: b.useContext(iw), isPresent: t, safeToRemove: r });
}
const FD = {
  borderRadius: {
    ...ma,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ma,
  borderTopRightRadius: ma,
  borderBottomLeftRadius: ma,
  borderBottomRightRadius: ma,
  boxShadow: ID
}, fk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], DD = fk.length, Ry = (e) => typeof e == "string" ? parseFloat(e) : e, My = (e) => typeof e == "number" || U.test(e);
function jD(e, t, r, n, o, i) {
  o ? (e.opacity = ze(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    LD(n)
  ), e.opacityExit = ze(t.opacity !== void 0 ? t.opacity : 1, 0, BD(n))) : i && (e.opacity = ze(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < DD; a++) {
    const s = `border${fk[a]}Radius`;
    let l = Oy(t, s), u = Oy(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || My(l) === My(u) ? (e[s] = Math.max(ze(Ry(l), Ry(u), n), 0), (Or.test(u) || Or.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = ze(t.rotate || 0, r.rotate || 0, n));
}
function Oy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const LD = pk(0, 0.5, Fm), BD = pk(0.5, 0.95, Le);
function pk(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(_s(e, t, n));
}
function Iy(e, t) {
  e.min = t.min, e.max = t.max;
}
function qt(e, t) {
  Iy(e.x, t.x), Iy(e.y, t.y);
}
function zy(e, t, r, n, o) {
  return e -= t, e = nc(e, 1 / r, n), o !== void 0 && (e = nc(e, 1 / o, n)), e;
}
function ND(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (Or.test(t) && (t = parseFloat(t), t = ze(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = ze(i.min, i.max, n);
  e === i && (s -= t), e.min = zy(e.min, t, r, s, o), e.max = zy(e.max, t, r, s, o);
}
function Fy(e, t, [r, n, o], i, a) {
  ND(e, t[r], t[n], t[o], t.scale, i, a);
}
const VD = ["x", "scaleX", "originX"], WD = ["y", "scaleY", "originY"];
function Dy(e, t, r, n) {
  Fy(e.x, t, VD, r ? r.x : void 0, n ? n.x : void 0), Fy(e.y, t, WD, r ? r.y : void 0, n ? n.y : void 0);
}
function jy(e) {
  return e.translate === 0 && e.scale === 1;
}
function hk(e) {
  return jy(e.x) && jy(e.y);
}
function UD(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function mk(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function Ly(e) {
  return Nt(e.x) / Nt(e.y);
}
class HD {
  constructor() {
    this.members = [];
  }
  add(t) {
    Vm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Wm(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
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
function By(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const GD = (e, t) => e.depth - t.depth;
class KD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Vm(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Wm(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(GD), this.isDirty = !1, this.children.forEach(t);
  }
}
function YD(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (an(n), e(i - t));
  };
  return ke.read(n, !0), () => an(n);
}
function qD(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function XD(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function QD(e, t, r) {
  const n = Mt(e) ? e : Di(e);
  return n.start(Nm("", n, t, r)), n.animation;
}
const Ny = ["", "X", "Y", "Z"], ZD = { visibility: "hidden" }, Vy = 1e3;
let JD = 0;
const eo = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function vk({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = JD++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, eo.totalNodes = eo.resolvedTargetDeltas = eo.recalculatedProjection = 0, this.nodes.forEach(rj), this.nodes.forEach(sj), this.nodes.forEach(lj), this.nodes.forEach(nj), qD(eo);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new KD());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Um()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = XD(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = YD(f, 250), hu.hasAnimatedSinceResize && (hu.hasAnimatedSinceResize = !1, this.nodes.forEach(Uy));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || pj, { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !mk(this.targetLayout, v) || p, y = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, y);
          const w = {
            ...Bm(g, "layout"),
            onPlay: x,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Uy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, an(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(uj), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wy);
        return;
      }
      this.isUpdating || this.nodes.forEach(ij), this.isUpdating = !1, this.nodes.forEach(aj), this.nodes.forEach(ej), this.nodes.forEach(tj), this.clearAllSnapshots();
      const s = performance.now();
      Qe.delta = jn(0, 1e3 / 60, s - Qe.timestamp), Qe.timestamp = s, Qe.isProcessing = !0, uf.update.process(Qe), uf.preRender.process(Qe), uf.render.process(Qe), Qe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(oj), this.sharedNodes.forEach(cj);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ke.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ke.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = Ve(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !hk(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || Jn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), hj(l), {
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
        return Ve();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (yn(s.x, l.offset.x), yn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Ve();
      qt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            qt(s, a);
            const { scroll: f } = this.root;
            f && (yn(s.x, -f.offset.x), yn(s.y, -f.offset.y));
          }
          yn(s.x, c.offset.x), yn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Ve();
      qt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && di(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Jn(c.latestValues) && di(l, c.latestValues);
      }
      return Jn(this.latestValues) && di(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Ve();
      qt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Jn(u.latestValues))
          continue;
        Hp(u.latestValues) && u.updateSnapshot();
        const c = Ve(), d = u.measurePageBox();
        qt(c, d), Dy(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Jn(this.latestValues) && Dy(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Qe.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Qe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ve(), this.relativeTargetOrigin = Ve(), Ka(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ve(), this.targetWithTransforms = Ve()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), hD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : qt(this.target, this.layout.layoutBox), sk(this.target, this.targetDelta)) : qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ve(), this.relativeTargetOrigin = Ve(), Ka(this.relativeTargetOrigin, this.target, p.target), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          eo.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Hp(this.parent.latestValues) || ak(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Qe.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      kD(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: v } = s;
      if (!v) {
        this.projectionTransform && (this.projectionDelta = ci(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = ci(), this.projectionDeltaWithTransform = ci());
      const g = this.projectionTransform;
      Ga(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = By(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), eo.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = ci();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Ve(), p = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, g = p !== v, x = this.getStack(), m = !x || x.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(fj));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        Hy(d.x, a.x, k), Hy(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ka(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), dj(this.relativeTarget, this.relativeTargetOrigin, f, k), y && UD(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Ve()), qt(y, this.relativeTarget)), g && (this.animationValues = c, jD(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (an(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ke.update(() => {
        hu.hasAnimatedSinceResize = !0, this.currentAnimation = QD(0, Vy, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Vy), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && gk(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Ve();
          const d = Nt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Nt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        qt(s, l), di(s, c), Ga(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new HD()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < Ny.length; c++) {
        const d = "rotate" + Ny[c];
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
        return ZD;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = pu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = pu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Jn(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = By(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: v } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in Xu) {
        if (f[g] === void 0)
          continue;
        const { correct: x, applyTo: m } = Xu[g], h = u.transform === "none" ? f[g] : x(f[g], d);
        if (m) {
          const y = m.length;
          for (let w = 0; w < y; w++)
            u[m[w]] = h;
        } else
          u[g] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? pu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Wy), this.root.sharedNodes.clear();
    }
  };
}
function ej(e) {
  e.updateLayout();
}
function tj(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? kr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Nt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : gk(i, r.layoutBox, n) && kr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Nt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = ci();
    Ga(s, n, r.layoutBox);
    const l = ci();
    a ? Ga(l, e.applyTransform(o, !0), r.measuredBox) : Ga(l, n, r.layoutBox);
    const u = !hk(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = Ve();
          Ka(v, r.layoutBox, f.layoutBox);
          const g = Ve();
          Ka(g, n, p.layoutBox), mk(v, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function rj(e) {
  eo.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function nj(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function oj(e) {
  e.clearSnapshot();
}
function Wy(e) {
  e.clearMeasurements();
}
function ij(e) {
  e.isLayoutDirty = !1;
}
function aj(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Uy(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function sj(e) {
  e.resolveTargetDelta();
}
function lj(e) {
  e.calcProjection();
}
function uj(e) {
  e.resetRotation();
}
function cj(e) {
  e.removeLeadSnapshot();
}
function Hy(e, t, r) {
  e.translate = ze(t.translate, 0, r), e.scale = ze(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Gy(e, t, r, n) {
  e.min = ze(t.min, r.min, n), e.max = ze(t.max, r.max, n);
}
function dj(e, t, r, n) {
  Gy(e.x, t.x, r.x, n), Gy(e.y, t.y, r.y, n);
}
function fj(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const pj = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Ky = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), Yy = Ky("applewebkit/") && !Ky("chrome/") ? Math.round : Le;
function qy(e) {
  e.min = Yy(e.min), e.max = Yy(e.max);
}
function hj(e) {
  qy(e.x), qy(e.y);
}
function gk(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Wp(Ly(t), Ly(r), 0.2);
}
const mj = vk({
  attachResizeListener: (e, t) => qr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), xf = {
  current: void 0
}, yk = vk({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!xf.current) {
      const e = new mj({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), xf.current = e;
    }
    return xf.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), vj = {
  pan: {
    Feature: RD
  },
  drag: {
    Feature: AD,
    ProjectionNode: yk,
    MeasureLayout: dk
  }
}, gj = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function yj(e) {
  const t = gj.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function Kp(e, t, r = 1) {
  const [n, o] = yj(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return Jw(a) ? parseFloat(a) : a;
  } else
    return Fp(o) ? Kp(o, t, r + 1) : o;
}
function bj(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!Fp(i))
      return;
    const a = Kp(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Fp(i))
      continue;
    const a = Kp(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const xj = /* @__PURE__ */ new Set([
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
]), bk = (e) => xj.has(e), Sj = (e) => Object.keys(e).some(bk), Xy = (e) => e === Ro || e === U, Qy = (e, t) => parseFloat(e.split(", ")[t]), Zy = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Qy(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? Qy(i[1], e) : 0;
  }
}, wj = /* @__PURE__ */ new Set(["x", "y", "z"]), kj = Vs.filter((e) => !wj.has(e));
function Cj(e) {
  const t = [];
  return kj.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const ji = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Zy(4, 13),
  y: Zy(5, 14)
};
ji.translateX = ji.x;
ji.translateY = ji.y;
const _j = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = ji[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = ji[u](l, i);
  }), e;
}, Pj = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(bk);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = ha(c);
    const f = t[l];
    let p;
    if (Zu(f)) {
      const v = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = ha(c);
      for (let x = g; x < v && f[x] !== null; x++)
        p ? zm(ha(f[x]) === p) : p = ha(f[x]);
    } else
      p = ha(f);
    if (d !== p)
      if (Xy(d) && Xy(p)) {
        const v = u.get();
        typeof v == "string" && u.set(parseFloat(v)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === U && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = Cj(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = _j(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Gc && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function Tj(e, t, r, n) {
  return Sj(t) ? Pj(e, t, r, n) : { target: t, transitionEnd: n };
}
const Ej = (e, t, r, n) => {
  const o = bj(e, t, n);
  return t = o.target, n = o.transitionEnd, Tj(e, t, r, n);
}, Yp = { current: null }, xk = { current: !1 };
function $j() {
  if (xk.current = !0, !!Gc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Yp.current = e.matches;
      e.addListener(t), t();
    } else
      Yp.current = !1;
}
function Aj(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (Mt(i))
      e.addValue(o, i), rc(n) && n.add(o);
    else if (Mt(a))
      e.addValue(o, Di(i, { owner: e })), rc(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Di(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Jy = /* @__PURE__ */ new WeakMap(), Sk = Object.keys(Cs), Rj = Sk.length, e1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], Mj = Pm.length;
class Oj {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => ke.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Yc(r), this.isVariantNode = ow(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Mt(f) && (f.set(s[d], !1), rc(u) && u.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    this.current = t, Jy.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), xk.current || $j(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Yp.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Jy.delete(this.current), this.projection && this.projection.unmount(), an(this.notifyUpdate), an(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Ao.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ke.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), i = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i) {
    let a, s;
    for (let l = 0; l < Rj; l++) {
      const u = Sk[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Cs[u];
      f && (a = f), c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && li(d),
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
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ve();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < e1.length; n++) {
      const o = e1[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = Aj(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n;
    }
    const r = {};
    for (let n = 0; n < Mj; n++) {
      const o = Pm[n], i = this.props[o];
      (ks(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)), this.values.set(t, r), this.latestValues[t] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = Di(r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    var r;
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Im(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Mt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Um()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class wk extends Oj {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, i) {
    let a = XF(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      YF(this, n, a);
      const s = Ej(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function Ij(e) {
  return window.getComputedStyle(e);
}
class zj extends wk {
  readValueFromInstance(t, r) {
    if (Ao.has(r)) {
      const n = Lm(r);
      return n && n.default || 0;
    } else {
      const n = Ij(t), o = (lw(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return lk(t, r);
  }
  build(t, r, n, o) {
    $m(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Om(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Mt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    hw(t, r, n, o);
  }
}
class Fj extends wk {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Ao.has(r)) {
      const n = Lm(r);
      return n && n.default || 0;
    }
    return r = mw.has(r) ? r : Cm(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Ve();
  }
  scrapeMotionValuesFromProps(t, r) {
    return gw(t, r);
  }
  build(t, r, n, o) {
    Rm(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    vw(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Mm(t.tagName), super.mount(t);
  }
}
const Dj = (e, t) => Em(e) ? new Fj(t, { enableHardwareAcceleration: !1 }) : new zj(t, { enableHardwareAcceleration: !0 }), jj = {
  layout: {
    ProjectionNode: yk,
    MeasureLayout: dk
  }
}, Lj = {
  ...cD,
  ...M4,
  ...vj,
  ...jj
}, Gs = /* @__PURE__ */ N3((e, t) => b4(e, t, Lj, Dj));
function kk() {
  const e = b.useRef(!1);
  return km(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Bj() {
  const e = kk(), [t, r] = b.useState(0), n = b.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [b.useCallback(() => ke.postRender(n), [n]), t];
}
class Nj extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
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
function Vj({ children: e, isPresent: t }) {
  const r = b.useId(), n = b.useRef(null), o = b.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return b.useInsertionEffect(() => {
    const { width: i, height: a, top: s, left: l } = o.current;
    if (t || !n.current || !i || !a)
      return;
    n.current.dataset.motionPopId = r;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), b.createElement(Nj, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }));
}
const Sf = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = yw(Wj), l = b.useId(), u = b.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: (c) => {
        s.set(c, !0);
        for (const d of s.values())
          if (!d)
            return;
        n && n();
      },
      register: (c) => (s.set(c, !1), () => s.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    i ? void 0 : [r]
  );
  return b.useMemo(() => {
    s.forEach((c, d) => s.set(d, !1));
  }, [r]), b.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), a === "popLayout" && (e = b.createElement(Vj, { isPresent: r }, e)), b.createElement(Ns.Provider, { value: u }, e);
};
function Wj() {
  return /* @__PURE__ */ new Map();
}
function Uj(e) {
  return b.useEffect(() => () => e(), []);
}
const to = (e) => e.key || "";
function Hj(e, t) {
  e.forEach((r) => {
    const n = to(r);
    t.set(n, r);
  });
}
function Gj(e) {
  const t = [];
  return b.Children.forEach(e, (r) => {
    b.isValidElement(r) && t.push(r);
  }), t;
}
const Zc = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = b.useContext(Tm).forceRender || Bj()[0], l = kk(), u = Gj(e);
  let c = u;
  const d = b.useRef(/* @__PURE__ */ new Map()).current, f = b.useRef(c), p = b.useRef(/* @__PURE__ */ new Map()).current, v = b.useRef(!0);
  if (km(() => {
    v.current = !1, Hj(u, p), f.current = c;
  }), Uj(() => {
    v.current = !0, p.clear(), d.clear();
  }), v.current)
    return b.createElement(b.Fragment, null, c.map((h) => b.createElement(Sf, { key: to(h), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const g = f.current.map(to), x = u.map(to), m = g.length;
  for (let h = 0; h < m; h++) {
    const y = g[h];
    x.indexOf(y) === -1 && !d.has(y) && d.set(y, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, y) => {
    if (x.indexOf(y) !== -1)
      return;
    const w = p.get(y);
    if (!w)
      return;
    const k = g.indexOf(y);
    let E = h;
    if (!E) {
      const _ = () => {
        d.delete(y);
        const $ = Array.from(p.keys()).filter((R) => !x.includes(R));
        if ($.forEach((R) => p.delete(R)), f.current = u.filter((R) => {
          const M = to(R);
          return (
            // filter out the node exiting
            M === y || // filter out the leftover children
            $.includes(M)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      E = b.createElement(Sf, { key: to(w), isPresent: !1, onExitComplete: _, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(y, E);
    }
    c.splice(k, 0, E);
  }), c = c.map((h) => {
    const y = h.key;
    return d.has(y) ? h : b.createElement(Sf, { key: to(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), b.createElement(b.Fragment, null, d.size ? c : c.map((h) => b.cloneElement(h)));
};
var Kj = {
  initial: (e) => {
    const { position: t } = e, r = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [r]: n * 24
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
}, Ck = b.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = Kj,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = b.useState(s), p = MD();
  ws(() => {
    p || n == null || n();
  }, [p]), ws(() => {
    f(s);
  }, [s]);
  const v = () => f(null), g = () => f(s), x = () => {
    p && o();
  };
  b.useEffect(() => {
    p && i && o();
  }, [p, i, o]), R3(x, d);
  const m = b.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = b.useMemo(() => $3(a), [a]);
  return /* @__PURE__ */ C.jsx(
    Gs.div,
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
      children: /* @__PURE__ */ C.jsx(
        J.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Kr(r, { id: t, onClose: x })
        }
      )
    }
  );
});
Ck.displayName = "ToastComponent";
var t1 = {
  path: /* @__PURE__ */ C.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ C.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ C.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ C.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Ks = _e((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = xe("chakra-icon", s), d = Ki("Icon", e), f = {
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
  }, v = n ?? t1.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ C.jsx(J.svg, { as: r, ...p, ...u });
  const g = a ?? t1.path;
  return /* @__PURE__ */ C.jsx(J.svg, { verticalAlign: "middle", viewBox: v, ...p, ...u, children: g });
});
Ks.displayName = "Icon";
function Yj(e) {
  return /* @__PURE__ */ C.jsx(Ks, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function qj(e) {
  return /* @__PURE__ */ C.jsx(Ks, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function r1(e) {
  return /* @__PURE__ */ C.jsx(Ks, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var Xj = Bc({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Hm = _e((e, t) => {
  const r = Ki("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Fr(e), u = xe("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${Xj} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ C.jsx(
    J.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ C.jsx(J.span, { srOnly: !0, children: n })
    }
  );
});
Hm.displayName = "Spinner";
var [Qj, Gm] = Ot({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [Zj, Km] = Ot({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), _k = {
  info: { icon: qj, colorScheme: "blue" },
  warning: { icon: r1, colorScheme: "orange" },
  success: { icon: Yj, colorScheme: "green" },
  error: { icon: r1, colorScheme: "red" },
  loading: { icon: Hm, colorScheme: "blue" }
};
function Jj(e) {
  return _k[e].colorScheme;
}
function eL(e) {
  return _k[e].icon;
}
var Pk = _e(
  function(t, r) {
    const n = Km(), { status: o } = Gm(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ C.jsx(
      J.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: xe("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
Pk.displayName = "AlertDescription";
function Tk(e) {
  const { status: t } = Gm(), r = eL(t), n = Km(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ C.jsx(
    J.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: xe("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ C.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
Tk.displayName = "AlertIcon";
var Ek = _e(
  function(t, r) {
    const n = Km(), { status: o } = Gm();
    return /* @__PURE__ */ C.jsx(
      J.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: xe("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
Ek.displayName = "AlertTitle";
var $k = _e(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = Fr(t), s = (n = t.colorScheme) != null ? n : Jj(o), l = Yi("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ C.jsx(Qj, { value: { status: o }, children: /* @__PURE__ */ C.jsx(Zj, { value: l, children: /* @__PURE__ */ C.jsx(
    J.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: xe("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
$k.displayName = "Alert";
function tL(e) {
  return /* @__PURE__ */ C.jsx(Ks, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ C.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Jc = _e(
  function(t, r) {
    const n = Ki("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Fr(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ C.jsx(
      J.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: i,
        __css: {
          ...l,
          ...n,
          ...a
        },
        ...s,
        children: o || /* @__PURE__ */ C.jsx(tL, { width: "1em", height: "1em" })
      }
    );
  }
);
Jc.displayName = "CloseButton";
var rL = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Ya = nL(rL);
function nL(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (o) => {
    t = o(t), r.forEach((i) => i());
  };
  return {
    getState: () => t,
    subscribe: (o) => (r.add(o), () => {
      n(() => e), r.delete(o);
    }),
    /**
     * Delete a toast record at its position
     */
    removeToast: (o, i) => {
      n((a) => ({
        ...a,
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [i]: a[i].filter((s) => s.id != o)
      }));
    },
    notify: (o, i) => {
      const a = oL(o, i), { position: s, id: l } = a;
      return n((u) => {
        var c, d;
        const p = s.includes("top") ? [a, ...(c = u[s]) != null ? c : []] : [...(d = u[s]) != null ? d : [], a];
        return {
          ...u,
          [s]: p
        };
      }), l;
    },
    update: (o, i) => {
      o && n((a) => {
        const s = { ...a }, { position: l, index: u } = X0(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: aL(i)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) => (o ?? [
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
      n((i) => {
        const a = ew(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!X0(Ya.getState(), o).position
  };
}
var n1 = 0;
function oL(e, t = {}) {
  var r, n;
  n1 += 1;
  const o = (r = t.id) != null ? r : n1, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Ya.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var iL = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: o,
    isClosable: i,
    onClose: a,
    description: s,
    colorScheme: l,
    icon: u
  } = e, c = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ C.jsxs(
    $k,
    {
      addRole: !1,
      status: t,
      variant: r,
      id: c == null ? void 0 : c.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ C.jsx(Tk, { children: u }),
        /* @__PURE__ */ C.jsxs(J.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ C.jsx(Ek, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ C.jsx(Pk, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ C.jsx(
          Jc,
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
function aL(e = {}) {
  const { render: t, toastComponent: r = iL } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ C.jsx(r, { ...o, ...e });
}
var [sL, R8] = Ot({
  name: "ToastOptionsContext",
  strict: !1
}), lL = (e) => {
  const t = b.useSyncExternalStore(
    Ya.subscribe,
    Ya.getState,
    Ya.getState
  ), {
    motionVariants: r,
    component: n = Ck,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ C.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: A3(s),
        children: /* @__PURE__ */ C.jsx(Zc, { initial: !1, children: l.map((u) => /* @__PURE__ */ C.jsx(
          n,
          {
            motionVariants: r,
            ...u
          },
          u.id
        )) })
      },
      s
    );
  });
  return /* @__PURE__ */ C.jsx(js, { ...o, children: a });
}, uL = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ C.jsxs(T3, { theme: n, ...i, children: [
    /* @__PURE__ */ C.jsx(sL, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ C.jsx(lL, { ...o })
  ] });
}, cL = uL(HS);
function dL(e, t) {
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
function Ct(...e) {
  return (t) => {
    e.forEach((r) => {
      dL(r, t);
    });
  };
}
function fL(...e) {
  return b.useMemo(() => Ct(...e), e);
}
var qp = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, va = {
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
function Xp(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return va.slideRight;
    case "left":
      return va.slideLeft;
    case "bottom":
      return va.slideDown;
    case "top":
      return va.slideUp;
    default:
      return va.slideRight;
  }
}
var o1 = {
  enter: {
    duration: 0.2,
    ease: qp.easeOut
  },
  exit: {
    duration: 0.1,
    ease: qp.easeIn
  }
}, oc = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, pL = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : oc.enter(o1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : oc.exit(o1.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Ak = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: pL
}, hL = b.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ C.jsx(Zc, { custom: f, children: d && /* @__PURE__ */ C.jsx(
    Gs.div,
    {
      ref: r,
      className: xe("chakra-fade", i),
      custom: f,
      ...Ak,
      animate: c,
      ...u
    }
  ) });
});
hL.displayName = "Fade";
var i1 = {
  exit: {
    duration: 0.15,
    ease: qp.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, mL = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = Xp({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : oc.exit(i1.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = Xp({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : oc.enter(i1.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, Rk = b.forwardRef(function(t, r) {
  const {
    direction: n = "right",
    style: o,
    unmountOnExit: i,
    in: a,
    className: s,
    transition: l,
    transitionEnd: u,
    delay: c,
    motionProps: d,
    ...f
  } = t, p = Xp({ direction: n }), v = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = i ? a && i : !0, x = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ C.jsx(Zc, { custom: m, children: g && /* @__PURE__ */ C.jsx(
    Gs.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: xe("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: m,
      variants: mL,
      style: v,
      ...d
    }
  ) });
});
Rk.displayName = "Slide";
function vL(e) {
  return b.Children.toArray(e).filter(
    (t) => b.isValidElement(t)
  );
}
var [M8, gL] = Ot({
  strict: !1,
  name: "ButtonGroupContext"
});
function yL(e) {
  const [t, r] = b.useState(!e);
  return { ref: b.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Qp(e) {
  const { children: t, className: r, ...n } = e, o = b.isValidElement(t) ? b.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = xe("chakra-button__icon", r);
  return /* @__PURE__ */ C.jsx(
    J.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...n,
      className: i,
      children: o
    }
  );
}
Qp.displayName = "ButtonIcon";
function Zp(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ C.jsx(Hm, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = xe("chakra-button__spinner", i), u = r === "start" ? "marginEnd" : "marginStart", c = b.useMemo(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [u]: t ? n : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...a
    }),
    [a, t, u, n]
  );
  return /* @__PURE__ */ C.jsx(J.div, { className: l, ...s, __css: c, children: o });
}
Zp.displayName = "ButtonSpinner";
var vo = _e((e, t) => {
  const r = gL(), n = Ki("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
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
    as: x,
    ...m
  } = Fr(e), h = b.useMemo(() => {
    const E = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...n,
      ...!!r && { _focus: E }
    };
  }, [n, r]), { ref: y, type: w } = yL(x), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ C.jsxs(
    J.button,
    {
      ref: fL(t, y),
      as: x,
      type: f ?? w,
      "data-active": ie(a),
      "data-loading": ie(i),
      __css: h,
      className: xe("chakra-button", g),
      ...m,
      disabled: o || i,
      children: [
        i && v === "start" && /* @__PURE__ */ C.jsx(
          Zp,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ C.jsx(J.span, { opacity: 0, children: /* @__PURE__ */ C.jsx(a1, { ...k }) }) : /* @__PURE__ */ C.jsx(a1, { ...k }),
        i && v === "end" && /* @__PURE__ */ C.jsx(
          Zp,
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
vo.displayName = "Button";
function a1(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    t && /* @__PURE__ */ C.jsx(Qp, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ C.jsx(Qp, { marginStart: o, children: r })
  ] });
}
var [O8, bL] = Ot({
  name: "CheckboxGroupContext",
  strict: !1
});
function xL(e) {
  const [t, r] = b.useState(e), [n, o] = b.useState(!1);
  return e !== t && (o(!0), r(e)), n;
}
function SL(e) {
  return /* @__PURE__ */ C.jsx(
    J.svg,
    {
      width: "1.2em",
      viewBox: "0 0 12 10",
      style: {
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16
      },
      ...e,
      children: /* @__PURE__ */ C.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function wL(e) {
  return /* @__PURE__ */ C.jsx(
    J.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...e,
      children: /* @__PURE__ */ C.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function kL(e) {
  const { isIndeterminate: t, isChecked: r, ...n } = e, o = t ? wL : SL;
  return r || t ? /* @__PURE__ */ C.jsx(
    J.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: /* @__PURE__ */ C.jsx(o, { ...n })
    }
  ) : null;
}
var [CL, _L] = Ot({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [PL, Mk] = Ot({
  strict: !1,
  name: "FormControlContext"
});
function TL(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = b.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = b.useState(!1), [v, g] = b.useState(!1), [x, m] = b.useState(!1), h = b.useCallback(
    (_ = {}, $ = null) => ({
      id: d,
      ..._,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Ct($, (R) => {
        R && g(!0);
      })
    }),
    [d]
  ), y = b.useCallback(
    (_ = {}, $ = null) => ({
      ..._,
      ref: $,
      "data-focus": ie(x),
      "data-disabled": ie(o),
      "data-invalid": ie(n),
      "data-readonly": ie(i),
      id: _.id !== void 0 ? _.id : u,
      htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l
    }),
    [l, o, x, n, i, u]
  ), w = b.useCallback(
    (_ = {}, $ = null) => ({
      id: c,
      ..._,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Ct($, (R) => {
        R && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = b.useCallback(
    (_ = {}, $ = null) => ({
      ..._,
      ...a,
      ref: $,
      role: "group",
      "data-focus": ie(x),
      "data-disabled": ie(o),
      "data-invalid": ie(n),
      "data-readonly": ie(i)
    }),
    [a, o, x, n, i]
  ), E = b.useCallback(
    (_ = {}, $ = null) => ({
      ..._,
      ref: $,
      role: "presentation",
      "aria-hidden": !0,
      children: _.children || "*"
    }),
    []
  );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!x,
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
    getErrorMessageProps: w,
    getRootProps: k,
    getLabelProps: y,
    getRequiredIndicatorProps: E
  };
}
var EL = _e(
  function(t, r) {
    const n = Yi("Form", t), o = Fr(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = TL(o), l = xe("chakra-form-control", t.className);
    return /* @__PURE__ */ C.jsx(PL, { value: s, children: /* @__PURE__ */ C.jsx(CL, { value: n, children: /* @__PURE__ */ C.jsx(
      J.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
EL.displayName = "FormControl";
var $L = _e(
  function(t, r) {
    const n = Mk(), o = _L(), i = xe("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ C.jsx(
      J.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: i
      }
    );
  }
);
$L.displayName = "FormHelperText";
function AL(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = Ok(e);
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Wd(r),
    "aria-required": Wd(o),
    "aria-readonly": Wd(n)
  };
}
function Ok(e) {
  var t, r, n;
  const o = Mk(), {
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
  } = e, x = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && x.push(o.feedbackId), o != null && o.hasHelpText && x.push(o.helpTextId), {
    ...g,
    "aria-describedby": x.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (r = s ?? d) != null ? r : o == null ? void 0 : o.isReadOnly,
    isRequired: (n = l ?? u) != null ? n : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: ye(o == null ? void 0 : o.onFocus, p),
    onBlur: ye(o == null ? void 0 : o.onBlur, v)
  };
}
var RL = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, ML = () => typeof document < "u", s1 = !1, Ys = null, Po = !1, Jp = !1, eh = /* @__PURE__ */ new Set();
function Ym(e, t) {
  eh.forEach((r) => r(e, t));
}
var OL = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function IL(e) {
  return !(e.metaKey || !OL && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function l1(e) {
  Po = !0, IL(e) && (Ys = "keyboard", Ym("keyboard", e));
}
function jo(e) {
  if (Ys = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    Po = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {
    }
    if (r)
      return;
    Ym("pointer", e);
  }
}
function zL(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function FL(e) {
  zL(e) && (Po = !0, Ys = "virtual");
}
function DL(e) {
  e.target === window || e.target === document || (!Po && !Jp && (Ys = "virtual", Ym("virtual", e)), Po = !1, Jp = !1);
}
function jL() {
  Po = !1, Jp = !0;
}
function u1() {
  return Ys !== "pointer";
}
function LL() {
  if (!ML() || s1)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...r) {
    Po = !0, e.apply(this, r);
  }, document.addEventListener("keydown", l1, !0), document.addEventListener("keyup", l1, !0), document.addEventListener("click", FL, !0), window.addEventListener("focus", DL, !0), window.addEventListener("blur", jL, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", jo, !0), document.addEventListener("pointermove", jo, !0), document.addEventListener("pointerup", jo, !0)) : (document.addEventListener("mousedown", jo, !0), document.addEventListener("mousemove", jo, !0), document.addEventListener("mouseup", jo, !0)), s1 = !0;
}
function BL(e) {
  LL(), e(u1());
  const t = () => e(u1());
  return eh.add(t), () => {
    eh.delete(t);
  };
}
function NL(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function VL(e = {}) {
  const t = Ok(e), {
    isDisabled: r,
    isReadOnly: n,
    isRequired: o,
    isInvalid: i,
    id: a,
    onBlur: s,
    onFocus: l,
    "aria-describedby": u
  } = t, {
    defaultChecked: c,
    isChecked: d,
    isFocusable: f,
    onChange: p,
    isIndeterminate: v,
    name: g,
    value: x,
    tabIndex: m = void 0,
    "aria-label": h,
    "aria-labelledby": y,
    "aria-invalid": w,
    ...k
  } = e, E = NL(k, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]), _ = mo(p), $ = mo(s), R = mo(l), [M, j] = b.useState(!1), [q, G] = b.useState(!1), [K, Z] = b.useState(!1), [Y, ee] = b.useState(!1);
  b.useEffect(() => BL(j), []);
  const I = b.useRef(null), [L, N] = b.useState(!0), [B, X] = b.useState(!!c), H = d !== void 0, Q = H ? d : B, Pe = b.useCallback(
    (z) => {
      if (n || r) {
        z.preventDefault();
        return;
      }
      H || X(Q ? z.target.checked : v ? !0 : z.target.checked), _ == null || _(z);
    },
    [
      n,
      r,
      Q,
      H,
      v,
      _
    ]
  );
  On(() => {
    I.current && (I.current.indeterminate = !!v);
  }, [v]), ws(() => {
    r && G(!1);
  }, [r, G]), On(() => {
    const z = I.current;
    if (!(z != null && z.form))
      return;
    const he = () => {
      X(!!c);
    };
    return z.form.addEventListener("reset", he), () => {
      var le;
      return (le = z.form) == null ? void 0 : le.removeEventListener("reset", he);
    };
  }, []);
  const se = r && !f, ge = b.useCallback(
    (z) => {
      z.key === " " && ee(!0);
    },
    [ee]
  ), Se = b.useCallback(
    (z) => {
      z.key === " " && ee(!1);
    },
    [ee]
  );
  On(() => {
    if (!I.current)
      return;
    I.current.checked !== Q && X(I.current.checked);
  }, [I.current]);
  const Ae = b.useCallback(
    (z = {}, he = null) => {
      const le = (Xe) => {
        q && Xe.preventDefault(), ee(!0);
      };
      return {
        ...z,
        ref: he,
        "data-active": ie(Y),
        "data-hover": ie(K),
        "data-checked": ie(Q),
        "data-focus": ie(q),
        "data-focus-visible": ie(q && M),
        "data-indeterminate": ie(v),
        "data-disabled": ie(r),
        "data-invalid": ie(i),
        "data-readonly": ie(n),
        "aria-hidden": !0,
        onMouseDown: ye(z.onMouseDown, le),
        onMouseUp: ye(z.onMouseUp, () => ee(!1)),
        onMouseEnter: ye(
          z.onMouseEnter,
          () => Z(!0)
        ),
        onMouseLeave: ye(
          z.onMouseLeave,
          () => Z(!1)
        )
      };
    },
    [
      Y,
      Q,
      r,
      q,
      M,
      K,
      v,
      i,
      n
    ]
  ), He = b.useCallback(
    (z = {}, he = null) => ({
      ...z,
      ref: he,
      "data-active": ie(Y),
      "data-hover": ie(K),
      "data-checked": ie(Q),
      "data-focus": ie(q),
      "data-focus-visible": ie(q && M),
      "data-indeterminate": ie(v),
      "data-disabled": ie(r),
      "data-invalid": ie(i),
      "data-readonly": ie(n)
    }),
    [
      Y,
      Q,
      r,
      q,
      M,
      K,
      v,
      i,
      n
    ]
  ), Ge = b.useCallback(
    (z = {}, he = null) => ({
      ...E,
      ...z,
      ref: Ct(he, (le) => {
        le && N(le.tagName === "LABEL");
      }),
      onClick: ye(z.onClick, () => {
        var le;
        L || ((le = I.current) == null || le.click(), requestAnimationFrame(() => {
          var Xe;
          (Xe = I.current) == null || Xe.focus({ preventScroll: !0 });
        }));
      }),
      "data-disabled": ie(r),
      "data-checked": ie(Q),
      "data-invalid": ie(i)
    }),
    [E, r, Q, i, L]
  ), lr = b.useCallback(
    (z = {}, he = null) => ({
      ...z,
      ref: Ct(I, he),
      type: "checkbox",
      name: g,
      value: x,
      id: a,
      tabIndex: m,
      onChange: ye(z.onChange, Pe),
      onBlur: ye(
        z.onBlur,
        $,
        () => G(!1)
      ),
      onFocus: ye(
        z.onFocus,
        R,
        () => G(!0)
      ),
      onKeyDown: ye(z.onKeyDown, ge),
      onKeyUp: ye(z.onKeyUp, Se),
      required: o,
      checked: Q,
      disabled: se,
      readOnly: n,
      "aria-label": h,
      "aria-labelledby": y,
      "aria-invalid": w ? !!w : i,
      "aria-describedby": u,
      "aria-disabled": r,
      style: RL
    }),
    [
      g,
      x,
      a,
      Pe,
      $,
      R,
      ge,
      Se,
      o,
      Q,
      se,
      n,
      h,
      y,
      w,
      i,
      u,
      r,
      m
    ]
  ), ur = b.useCallback(
    (z = {}, he = null) => ({
      ...z,
      ref: he,
      onMouseDown: ye(z.onMouseDown, WL),
      "data-disabled": ie(r),
      "data-checked": ie(Q),
      "data-invalid": ie(i)
    }),
    [Q, r, i]
  );
  return {
    state: {
      isInvalid: i,
      isFocused: q,
      isChecked: Q,
      isActive: Y,
      isHovered: K,
      isIndeterminate: v,
      isDisabled: r,
      isReadOnly: n,
      isRequired: o
    },
    getRootProps: Ge,
    getCheckboxProps: Ae,
    getIndicatorProps: He,
    getInputProps: lr,
    getLabelProps: ur,
    htmlProps: E
  };
}
function WL(e) {
  e.preventDefault(), e.stopPropagation();
}
var UL = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
}, HL = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
}, GL = Bc({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
}), KL = Bc({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}), YL = Bc({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
}), th = _e(function(t, r) {
  const n = bL(), o = { ...n, ...t }, i = Yi("Checkbox", o), a = Fr(t), {
    spacing: s = "0.5rem",
    className: l,
    children: u,
    iconColor: c,
    iconSize: d,
    icon: f = /* @__PURE__ */ C.jsx(kL, {}),
    isChecked: p,
    isDisabled: v = n == null ? void 0 : n.isDisabled,
    onChange: g,
    inputProps: x,
    ...m
  } = a;
  let h = p;
  n != null && n.value && a.value && (h = n.value.includes(a.value));
  let y = g;
  n != null && n.onChange && a.value && (y = CS(n.onChange, g));
  const {
    state: w,
    getInputProps: k,
    getCheckboxProps: E,
    getLabelProps: _,
    getRootProps: $
  } = VL({
    ...m,
    isDisabled: v,
    isChecked: h,
    onChange: y
  }), R = xL(w.isChecked), M = b.useMemo(
    () => ({
      animation: R ? w.isIndeterminate ? `${KL} 20ms linear, ${YL} 200ms linear` : `${GL} 200ms linear` : void 0,
      fontSize: d,
      color: c,
      ...i.icon
    }),
    [c, d, R, w.isIndeterminate, i.icon]
  ), j = b.cloneElement(f, {
    __css: M,
    isIndeterminate: w.isIndeterminate,
    isChecked: w.isChecked
  });
  return /* @__PURE__ */ C.jsxs(
    J.label,
    {
      __css: { ...HL, ...i.container },
      className: xe("chakra-checkbox", l),
      ...$(),
      children: [
        /* @__PURE__ */ C.jsx(
          "input",
          {
            className: "chakra-checkbox__input",
            ...k(x, r)
          }
        ),
        /* @__PURE__ */ C.jsx(
          J.span,
          {
            __css: { ...UL, ...i.control },
            className: "chakra-checkbox__control",
            ...E(),
            children: j
          }
        ),
        u && /* @__PURE__ */ C.jsx(
          J.span,
          {
            className: "chakra-checkbox__label",
            ..._(),
            __css: {
              marginStart: s,
              ...i.label
            },
            children: u
          }
        )
      ]
    }
  );
});
th.displayName = "Checkbox";
function qm(e, t, r, n) {
  const o = mo(r);
  return b.useEffect(() => {
    const i = typeof e == "function" ? e() : e ?? document;
    if (!(!r || !i))
      return i.addEventListener(t, o, n), () => {
        i.removeEventListener(t, o, n);
      };
  }, [t, e, n, o, r]), () => {
    const i = typeof e == "function" ? e() : e ?? document;
    i == null || i.removeEventListener(t, o, n);
  };
}
function qL(e) {
  return "current" in e;
}
var Ik = () => typeof window < "u";
function XL() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var QL = (e) => Ik() && e.test(navigator.vendor), ZL = (e) => Ik() && e.test(XL()), JL = () => ZL(/mac|iphone|ipad|ipod/i), eB = () => JL() && QL(/apple/i);
function tB(e) {
  const { ref: t, elements: r, enabled: n } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  qm(o, "pointerdown", (i) => {
    if (!eB() || !n)
      return;
    const a = i.target, l = (r ?? [t]).some((u) => {
      const c = qL(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function rB(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var zk = { exports: {} }, nB = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", oB = nB, iB = oB;
function Fk() {
}
function Dk() {
}
Dk.resetWarningCache = Fk;
var aB = function() {
  function e(n, o, i, a, s, l) {
    if (l !== iB) {
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
  var r = {
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
    checkPropTypes: Dk,
    resetWarningCache: Fk
  };
  return r.PropTypes = r, r;
};
zk.exports = aB();
var sB = zk.exports;
const Xn = /* @__PURE__ */ Rs(sB);
var rh = "data-focus-lock", jk = "data-focus-lock-disabled", lB = "data-no-focus-lock", uB = "data-autofocus-inside", cB = "data-no-autofocus";
function dB(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fB(e, t) {
  var r = b.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
function Lk(e, t) {
  return fB(t || null, function(r) {
    return e.forEach(function(n) {
      return dB(n, r);
    });
  });
}
var wf = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Er = function() {
  return Er = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Er.apply(this, arguments);
};
function Bk(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function pB(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Nk(e) {
  return e;
}
function Vk(e, t) {
  t === void 0 && (t = Nk);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, n);
      return r.push(a), function() {
        r = r.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(i);
      }
      r = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var a = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(i), a = r;
      }
      var l = function() {
        var c = a;
        a = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), r = {
        push: function(c) {
          a.push(c), u();
        },
        filter: function(c) {
          return a = a.filter(c), r;
        }
      };
    }
  };
  return o;
}
function Xm(e, t) {
  return t === void 0 && (t = Nk), Vk(e, t);
}
function Wk(e) {
  e === void 0 && (e = {});
  var t = Vk(null);
  return t.options = Er({ async: !0, ssr: !1 }, e), t;
}
var Uk = function(e) {
  var t = e.sideCar, r = Bk(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return b.createElement(n, Er({}, r));
};
Uk.isSideCarExport = !0;
function hB(e, t) {
  return e.useMedium(t), Uk;
}
var Hk = Xm({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), Gk = Xm(), mB = Xm(), vB = Wk({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), gB = [], Qm = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o = b.useState(), i = o[0], a = o[1], s = b.useRef(), l = b.useRef(!1), u = b.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, v = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, m = t.className, h = t.whiteList, y = t.hasPositiveIndices, w = t.shards, k = w === void 0 ? gB : w, E = t.as, _ = E === void 0 ? "div" : E, $ = t.lockProps, R = $ === void 0 ? {} : $, M = t.sideCar, j = t.returnFocus, q = t.focusOptions, G = t.onActivation, K = t.onDeactivation, Z = b.useState({}), Y = Z[0], ee = b.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && G && G(s.current), l.current = !0;
  }, [G]), I = b.useCallback(function() {
    l.current = !1, K && K(s.current);
  }, [K]);
  b.useEffect(function() {
    d || (u.current = null);
  }, []);
  var L = b.useCallback(function(ge) {
    var Se = u.current;
    if (Se && Se.focus) {
      var Ae = typeof j == "function" ? j(Se) : j;
      if (Ae) {
        var He = typeof Ae == "object" ? Ae : void 0;
        u.current = null, ge ? Promise.resolve().then(function() {
          return Se.focus(He);
        }) : Se.focus(He);
      }
    }
  }, [j]), N = b.useCallback(function(ge) {
    l.current && Hk.useMedium(ge);
  }, []), B = Gk.useMedium, X = b.useCallback(function(ge) {
    s.current !== ge && (s.current = ge, a(ge));
  }, []), H = _o((n = {}, n[jk] = d && "disabled", n[rh] = x, n), R), Q = f !== !0, Pe = Q && f !== "tail", se = Lk([r, X]);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, Q && [
    // nearest focus guard
    /* @__PURE__ */ b.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: wf
    }),
    // first tabbed element guard
    y ? /* @__PURE__ */ b.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: wf
    }) : null
  ], !d && /* @__PURE__ */ b.createElement(M, {
    id: Y,
    sideCar: vB,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: v,
    autoFocus: g,
    whiteList: h,
    shards: k,
    onActivation: ee,
    onDeactivation: I,
    returnFocus: L,
    focusOptions: q
  }), /* @__PURE__ */ b.createElement(_, _o({
    ref: se
  }, H, {
    className: m,
    onBlur: B,
    onFocus: N
  }), c), Pe && /* @__PURE__ */ b.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: wf
  }));
});
Qm.propTypes = {};
Qm.defaultProps = {
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
const Kk = Qm;
function nh(e, t) {
  return nh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, nh(e, t);
}
function yB(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, nh(e, t);
}
function Ps(e) {
  "@babel/helpers - typeof";
  return Ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ps(e);
}
function bB(e, t) {
  if (Ps(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ps(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xB(e) {
  var t = bB(e, "string");
  return Ps(t) === "symbol" ? t : String(t);
}
function SB(e, t, r) {
  return t = xB(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function wB(e, t) {
  function r(n) {
    return n.displayName || n.name || "Component";
  }
  return function(o) {
    var i = [], a;
    function s() {
      a = e(i.map(function(u) {
        return u.props;
      })), t(a);
    }
    var l = /* @__PURE__ */ function(u) {
      yB(c, u);
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
        return /* @__PURE__ */ bo.createElement(o, this.props);
      }, c;
    }(b.PureComponent);
    return SB(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Dr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, ic = function(e) {
  return Array.isArray(e) ? e : [e];
}, Yk = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, kB = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, qk = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Xk = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, CB = function(e, t) {
  return !e || Xk(e) || !kB(e) && t(qk(e));
}, Qk = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = CB(t, Qk.bind(void 0, e));
  return e.set(t, n), n;
}, _B = function(e, t) {
  return e && !Xk(e) ? EB(e) ? t(qk(e)) : !1 : !0;
}, Zk = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = _B(t, Zk.bind(void 0, e));
  return e.set(t, n), n;
}, Jk = function(e) {
  return e.dataset;
}, PB = function(e) {
  return e.tagName === "BUTTON";
}, eC = function(e) {
  return e.tagName === "INPUT";
}, tC = function(e) {
  return eC(e) && e.type === "radio";
}, TB = function(e) {
  return !((eC(e) || PB(e)) && (e.type === "hidden" || e.disabled));
}, EB = function(e) {
  var t = e.getAttribute(cB);
  return ![!0, "true", ""].includes(t);
}, Zm = function(e) {
  var t;
  return !!(e && (!((t = Jk(e)) === null || t === void 0) && t.focusGuard));
}, ac = function(e) {
  return !Zm(e);
}, $B = function(e) {
  return !!e;
}, AB = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, rC = function(e, t, r) {
  return Dr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(AB);
}, RB = [
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
], Jm = RB.join(","), MB = "".concat(Jm, ", [data-focus-guard]"), nC = function(e, t) {
  return Dr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? MB : Jm) ? [n] : [], nC(n));
  }, []);
}, OB = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? ed([e.contentDocument.body], t) : [e];
}, ed = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = nC(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return OB(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? Dr(n.parentNode.querySelectorAll(Jm)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, IB = function(e) {
  var t = e.querySelectorAll("[".concat(uB, "]"));
  return Dr(t).map(function(r) {
    return ed([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, ev = function(e, t) {
  return Dr(e).filter(function(r) {
    return Qk(t, r);
  }).filter(function(r) {
    return TB(r);
  });
}, c1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Dr(e).filter(function(r) {
    return Zk(t, r);
  });
}, oh = function(e, t, r) {
  return rC(ev(ed(e, r), t), !0, r);
}, d1 = function(e, t) {
  return rC(ev(ed(e), t), !1);
}, zB = function(e, t) {
  return ev(IB(e), t);
}, Ci = function(e, t) {
  return e.shadowRoot ? Ci(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Dr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? Ci(o, t) : !1;
    }
    return Ci(r, t);
  });
}, FB = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, oC = function(e) {
  return e.parentNode ? oC(e.parentNode) : e;
}, tv = function(e) {
  var t = ic(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(rh);
    return r.push.apply(r, o ? FB(Dr(oC(n).querySelectorAll("[".concat(rh, '="').concat(o, '"]:not([').concat(jk, '="disabled"])')))) : [n]), r;
  }, []);
}, DB = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ts = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ts(t.shadowRoot) : t instanceof HTMLIFrameElement && DB(function() {
      return t.contentWindow.document;
    }) ? Ts(t.contentWindow.document) : t;
  }
}, jB = function(e, t) {
  return e === t;
}, LB = function(e, t) {
  return !!Dr(e.querySelectorAll("iframe")).some(function(r) {
    return jB(r, t);
  });
}, iC = function(e, t) {
  return t === void 0 && (t = Ts(Yk(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : tv(e).some(function(r) {
    return Ci(r, t) || LB(r, t);
  });
}, BB = function(e) {
  e === void 0 && (e = document);
  var t = Ts(e);
  return t ? Dr(e.querySelectorAll("[".concat(lB, "]"))).some(function(r) {
    return Ci(r, t);
  }) : !1;
}, NB = function(e, t) {
  return t.filter(tC).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, rv = function(e, t) {
  return tC(e) && e.name ? NB(e, t) : e;
}, VB = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(rv(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, f1 = function(e) {
  return e[0] && e.length > 1 ? rv(e[0], e) : e[0];
}, p1 = function(e, t) {
  return e.length > 1 ? e.indexOf(rv(e[t], e)) : t;
}, aC = "NEW_FOCUS", WB = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = Zm(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), v = VB(t), g = r !== void 0 ? v.indexOf(r) : -1, x = g - (n ? v.indexOf(n) : l), m = p1(e, 0), h = p1(e, o - 1);
    if (l === -1 || c === -1)
      return aC;
    if (!d && c >= 0)
      return c;
    if (l <= f && s && Math.abs(d) > 1)
      return h;
    if (l >= p && s && Math.abs(d) > 1)
      return m;
    if (d && Math.abs(x) > 1)
      return c;
    if (l <= f)
      return h;
    if (l > p)
      return m;
    if (d)
      return Math.abs(d) > 1 ? c : (o + c + d) % o;
  }
}, UB = function(e) {
  return function(t) {
    var r, n = (r = Jk(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, HB = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = c1(n.filter(UB(r)));
  return o && o.length ? f1(o) : f1(c1(t));
}, ih = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && ih(e.parentNode.host || e.parentNode, t), t;
}, kf = function(e, t) {
  for (var r = ih(e), n = ih(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, sC = function(e, t, r) {
  var n = ic(e), o = ic(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = kf(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = kf(i, l);
      u && (!a || Ci(u, a) ? a = u : a = kf(u, a));
    });
  }), a;
}, GB = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(zB(n, t));
  }, []);
}, KB = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter($B);
}, YB = function(e, t) {
  var r = Ts(ic(e).length > 0 ? document : Yk(e).ownerDocument), n = tv(e).filter(ac), o = sC(r || e, e, n), i = /* @__PURE__ */ new Map(), a = d1(n, i), s = oh(n, i).filter(function(p) {
    var v = p.node;
    return ac(v);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = d1([o], i).map(function(p) {
      var v = p.node;
      return v;
    }), u = KB(l, s), c = u.map(function(p) {
      var v = p.node;
      return v;
    }), d = WB(c, l, r, t);
    if (d === aC) {
      var f = HB(a, c, GB(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, qB = function(e) {
  var t = tv(e).filter(ac), r = sC(e, e, t), n = /* @__PURE__ */ new Map(), o = oh([r], n, !0), i = oh(t, n).filter(function(a) {
    var s = a.node;
    return ac(s);
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
      guard: Zm(s)
    };
  });
}, XB = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Cf = 0, _f = !1, lC = function(e, t, r) {
  r === void 0 && (r = {});
  var n = YB(e, t);
  if (!_f && n) {
    if (Cf > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), _f = !0, setTimeout(function() {
        _f = !1;
      }, 1);
      return;
    }
    Cf++, XB(n.node, r.focusOptions), Cf--;
  }
};
function nv(e) {
  setTimeout(e, 1);
}
var QB = function() {
  return document && document.activeElement === document.body;
}, ZB = function() {
  return QB() || BB();
}, _i = null, fi = null, Pi = null, Es = !1, JB = function() {
  return !0;
}, eN = function(t) {
  return (_i.whiteList || JB)(t);
}, tN = function(t, r) {
  Pi = {
    observerNode: t,
    portaledElement: r
  };
}, rN = function(t) {
  return Pi && Pi.portaledElement === t;
};
function h1(e, t, r, n) {
  var o = null, i = e;
  do {
    var a = n[i];
    if (a.guard)
      a.node.dataset.focusAutoGuard && (o = a);
    else if (a.lockItem) {
      if (i !== e)
        return;
      o = null;
    } else
      break;
  } while ((i += r) !== t);
  o && (o.node.tabIndex = 0);
}
var nN = function(t) {
  return t && "current" in t ? t.current : t;
}, oN = function(t) {
  return t ? !!Es : Es === "meanwhile";
}, iN = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, aN = function(t, r) {
  return r.some(function(n) {
    return iN(t, n, n);
  });
}, sc = function() {
  var t = !1;
  if (_i) {
    var r = _i, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || Pi && Pi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(nN).filter(Boolean));
      if ((!c || eN(c)) && (o || oN(s) || !ZB() || !fi && i) && (u && !// active element is "inside" working area
      (iC(d) || // check for shadow-dom contained elements
      c && aN(c, d) || rN(c)) && (document && !fi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = lC(d, fi, {
        focusOptions: l
      }), Pi = {})), Es = !1, fi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = qB(d), v = p.map(function(g) {
          var x = g.node;
          return x;
        }).indexOf(f);
        v > -1 && (p.filter(function(g) {
          var x = g.guard, m = g.node;
          return x && m.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var x = g.node;
          return x.removeAttribute("tabIndex");
        }), h1(v, p.length, 1, p), h1(v, -1, -1, p));
      }
    }
  }
  return t;
}, uC = function(t) {
  sc() && t && (t.stopPropagation(), t.preventDefault());
}, ov = function() {
  return nv(sc);
}, sN = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || tN(n, r);
}, lN = function() {
  return null;
}, cC = function() {
  Es = "just", nv(function() {
    Es = "meanwhile";
  });
}, uN = function() {
  document.addEventListener("focusin", uC), document.addEventListener("focusout", ov), window.addEventListener("blur", cC);
}, cN = function() {
  document.removeEventListener("focusin", uC), document.removeEventListener("focusout", ov), window.removeEventListener("blur", cC);
};
function dN(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function fN(e) {
  var t = e.slice(-1)[0];
  t && !_i && uN();
  var r = _i, n = r && t && t.id === r.id;
  _i = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (fi = null, (!n || r.observed !== t.observed) && t.onActivation(), sc(), nv(sc)) : (cN(), fi = null);
}
Hk.assignSyncMedium(sN);
Gk.assignMedium(ov);
mB.assignMedium(function(e) {
  return e({
    moveFocusInside: lC,
    focusInside: iC
  });
});
const pN = wB(dN, fN)(lN);
var dC = /* @__PURE__ */ b.forwardRef(function(t, r) {
  return /* @__PURE__ */ b.createElement(Kk, _o({
    sideCar: pN,
    ref: r
  }, t));
}), fC = Kk.propTypes || {};
fC.sideCar;
rB(fC, ["sideCar"]);
dC.propTypes = {};
const m1 = dC;
function pC(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function hC(e) {
  var t;
  if (!pC(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function hN(e) {
  var t, r;
  return (r = (t = mC(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function mC(e) {
  return pC(e) ? e.ownerDocument : document;
}
function mN(e) {
  return mC(e).activeElement;
}
var vC = (e) => e.hasAttribute("tabindex"), vN = (e) => vC(e) && e.tabIndex === -1;
function gN(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function gC(e) {
  return e.parentElement && gC(e.parentElement) ? !0 : e.hidden;
}
function yN(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function yC(e) {
  if (!hC(e) || gC(e) || gN(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : yN(e) ? !0 : vC(e);
}
function bN(e) {
  return e ? hC(e) && yC(e) && !vN(e) : !1;
}
var xN = [
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
], SN = xN.join(), wN = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function bC(e) {
  const t = Array.from(
    e.querySelectorAll(SN)
  );
  return t.unshift(e), t.filter((r) => yC(r) && wN(r));
}
var v1, kN = (v1 = m1.default) != null ? v1 : m1, xC = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: r,
    contentRef: n,
    restoreFocus: o,
    children: i,
    isDisabled: a,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: u
  } = e, c = b.useCallback(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && bC(n.current).length === 0 && requestAnimationFrame(() => {
      var v;
      (v = n.current) == null || v.focus();
    });
  }, [t, n]), d = b.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ C.jsx(
    kN,
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
xC.displayName = "FocusLock";
var iv = _e(function(t, r) {
  const { htmlSize: n, ...o } = t, i = Yi("Input", o), a = Fr(o), s = AL(a), l = xe("chakra-input", t.className);
  return /* @__PURE__ */ C.jsx(
    J.input,
    {
      size: n,
      ...s,
      __css: i.field,
      ref: r,
      className: l
    }
  );
});
iv.displayName = "Input";
iv.id = "Input";
var SC = _e(function(t, r) {
  const n = Ki("Link", t), { className: o, isExternal: i, ...a } = Fr(t);
  return /* @__PURE__ */ C.jsx(
    J.a,
    {
      target: i ? "_blank" : void 0,
      rel: i ? "noopener" : void 0,
      ref: r,
      className: xe("chakra-link", o),
      ...a,
      __css: n
    }
  );
});
SC.displayName = "Link";
function CN(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : rr(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var go = _e(function(t, r) {
  const n = Ki("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Fr(t), u = f3({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ C.jsx(
    J.p,
    {
      ref: r,
      className: xe("chakra-text", t.className),
      ...u,
      ...l,
      __css: n
    }
  );
});
go.displayName = "Text";
var wC = (e) => /* @__PURE__ */ C.jsx(
  J.div,
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
wC.displayName = "StackItem";
function _N(e) {
  const { spacing: t, direction: r } = e, n = {
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
    "&": CN(
      r,
      (o) => n[o]
    )
  };
}
var av = _e((e, t) => {
  const {
    isInline: r,
    direction: n,
    align: o,
    justify: i,
    spacing: a = "0.5rem",
    wrap: s,
    children: l,
    divider: u,
    className: c,
    shouldWrapChildren: d,
    ...f
  } = e, p = r ? "row" : n ?? "column", v = b.useMemo(
    () => _N({ spacing: a, direction: p }),
    [a, p]
  ), g = !!u, x = !d && !g, m = b.useMemo(() => {
    const y = vL(l);
    return x ? y : y.map((w, k) => {
      const E = typeof w.key < "u" ? w.key : k, _ = k + 1 === y.length, R = d ? /* @__PURE__ */ C.jsx(wC, { children: w }, E) : w;
      if (!g)
        return R;
      const M = b.cloneElement(
        u,
        {
          __css: v
        }
      ), j = _ ? null : M;
      return /* @__PURE__ */ C.jsxs(b.Fragment, { children: [
        R,
        j
      ] }, E);
    });
  }, [
    u,
    v,
    g,
    x,
    d,
    l
  ]), h = xe("chakra-stack", c);
  return /* @__PURE__ */ C.jsx(
    J.div,
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
av.displayName = "Stack";
var Ur = _e((e, t) => /* @__PURE__ */ C.jsx(av, { align: "center", ...e, direction: "row", ref: t }));
Ur.displayName = "HStack";
var td = J("div");
td.displayName = "Box";
var kC = _e(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ C.jsx(
    td,
    {
      ref: r,
      boxSize: n,
      __css: {
        ...a,
        flexShrink: 0,
        flexGrow: 0
      },
      ...i
    }
  );
});
kC.displayName = "Square";
var PN = _e(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ C.jsx(kC, { size: n, ref: r, borderRadius: "9999px", ...o });
});
PN.displayName = "Circle";
function TN(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = mN(t);
  return !r || t.contains(r) ? !1 : !!bN(r);
}
function EN(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, i = r && !n;
  ws(() => {
    if (!i || TN(e))
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
var $N = {
  preventScroll: !0,
  shouldFocus: !1
};
function AN(e, t = $N) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: i } = t, a = RN(e) ? e.current : e, s = o && i, l = b.useRef(s), u = b.useRef(i);
  On(() => {
    !u.current && i && (l.current = s), u.current = i;
  }, [i, s]);
  const c = b.useCallback(() => {
    if (!(!i || !a || !l.current) && (l.current = !1, !a.contains(document.activeElement)))
      if (r != null && r.current)
        requestAnimationFrame(() => {
          var d;
          (d = r.current) == null || d.focus({ preventScroll: n });
        });
      else {
        const d = bC(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [i, n, a, r]);
  ws(() => {
    c();
  }, [c]), qm(a, "transitionend", c);
}
function RN(e) {
  return "current" in e;
}
var Lo = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), ft = {
  arrowShadowColor: Lo("--popper-arrow-shadow-color"),
  arrowSize: Lo("--popper-arrow-size", "8px"),
  arrowSizeHalf: Lo("--popper-arrow-size-half"),
  arrowBg: Lo("--popper-arrow-bg"),
  transformOrigin: Lo("--popper-transform-origin"),
  arrowOffset: Lo("--popper-arrow-offset")
};
function MN(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var ON = {
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
}, IN = (e) => ON[e], g1 = {
  scroll: !0,
  resize: !0
};
function zN(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...g1, ...e }
  } : t = {
    enabled: e,
    options: g1
  }, t;
}
var FN = {
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
}, DN = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    y1(e);
  },
  effect: ({ state: e }) => () => {
    y1(e);
  }
}, y1 = (e) => {
  e.elements.popper.style.setProperty(
    ft.transformOrigin.var,
    IN(e.placement)
  );
}, jN = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    LN(e);
  }
}, LN = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = BN(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: ft.arrowSize.varRef,
      height: ft.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [ft.arrowSizeHalf.var]: `calc(${ft.arrowSize.varRef} / 2 - 1px)`,
      [ft.arrowOffset.var]: `calc(${ft.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, BN = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: ft.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: ft.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: ft.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: ft.arrowOffset.varRef };
}, NN = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    b1(e);
  },
  effect: ({ state: e }) => () => {
    b1(e);
  }
}, b1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = MN(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: ft.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, VN = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, WN = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function UN(e, t = "ltr") {
  var r, n;
  const o = ((r = VN[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = WN[e]) != null ? n : o;
}
var $t = "top", ar = "bottom", sr = "right", At = "left", sv = "auto", qs = [$t, ar, sr, At], Li = "start", $s = "end", HN = "clippingParents", CC = "viewport", ga = "popper", GN = "reference", x1 = /* @__PURE__ */ qs.reduce(function(e, t) {
  return e.concat([t + "-" + Li, t + "-" + $s]);
}, []), _C = /* @__PURE__ */ [].concat(qs, [sv]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Li, t + "-" + $s]);
}, []), KN = "beforeRead", YN = "read", qN = "afterRead", XN = "beforeMain", QN = "main", ZN = "afterMain", JN = "beforeWrite", e6 = "write", t6 = "afterWrite", r6 = [KN, YN, qN, XN, QN, ZN, JN, e6, t6];
function zr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Vt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function To(e) {
  var t = Vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function nr(e) {
  var t = Vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function lv(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function n6(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !nr(i) || !zr(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function o6(e) {
  var t = e.state, r = {
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
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !nr(o) || !zr(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const i6 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: n6,
  effect: o6,
  requires: ["computeStyles"]
};
function Ir(e) {
  return e.split("-")[0];
}
var yo = Math.max, lc = Math.min, Bi = Math.round;
function ah() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function PC() {
  return !/^((?!chrome|android).)*safari/i.test(ah());
}
function Ni(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && nr(e) && (o = e.offsetWidth > 0 && Bi(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Bi(n.height) / e.offsetHeight || 1);
  var a = To(e) ? Vt(e) : window, s = a.visualViewport, l = !PC() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / o, c = (n.top + (l && s ? s.offsetTop : 0)) / i, d = n.width / o, f = n.height / i;
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
function uv(e) {
  var t = Ni(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function TC(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && lv(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function sn(e) {
  return Vt(e).getComputedStyle(e);
}
function a6(e) {
  return ["table", "td", "th"].indexOf(zr(e)) >= 0;
}
function Un(e) {
  return ((To(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function rd(e) {
  return zr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (lv(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Un(e)
  );
}
function S1(e) {
  return !nr(e) || // https://github.com/popperjs/popper-core/issues/837
  sn(e).position === "fixed" ? null : e.offsetParent;
}
function s6(e) {
  var t = /firefox/i.test(ah()), r = /Trident/i.test(ah());
  if (r && nr(e)) {
    var n = sn(e);
    if (n.position === "fixed")
      return null;
  }
  var o = rd(e);
  for (lv(o) && (o = o.host); nr(o) && ["html", "body"].indexOf(zr(o)) < 0; ) {
    var i = sn(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Xs(e) {
  for (var t = Vt(e), r = S1(e); r && a6(r) && sn(r).position === "static"; )
    r = S1(r);
  return r && (zr(r) === "html" || zr(r) === "body" && sn(r).position === "static") ? t : r || s6(e) || t;
}
function cv(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qa(e, t, r) {
  return yo(e, lc(t, r));
}
function l6(e, t, r) {
  var n = qa(e, t, r);
  return n > r ? r : n;
}
function EC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function $C(e) {
  return Object.assign({}, EC(), e);
}
function AC(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var u6 = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, $C(typeof t != "number" ? t : AC(t, qs));
};
function c6(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, s = Ir(r.placement), l = cv(s), u = [At, sr].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = u6(o.padding, r), f = uv(i), p = l === "y" ? $t : At, v = l === "y" ? ar : sr, g = r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c], x = a[l] - r.rects.reference[l], m = Xs(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, y = g / 2 - x / 2, w = d[p], k = h - f[c] - d[v], E = h / 2 - f[c] / 2 + y, _ = qa(w, E, k), $ = l;
    r.modifiersData[n] = (t = {}, t[$] = _, t.centerOffset = _ - E, t);
  }
}
function d6(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || TC(t.elements.popper, o) && (t.elements.arrow = o));
}
const f6 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: c6,
  effect: d6,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Vi(e) {
  return e.split("-")[1];
}
var p6 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function h6(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Bi(r * o) / o || 0,
    y: Bi(n * o) / o || 0
  };
}
function w1(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, v = a.y, g = v === void 0 ? 0 : v, x = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = x.x, g = x.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), y = At, w = $t, k = window;
  if (u) {
    var E = Xs(r), _ = "clientHeight", $ = "clientWidth";
    if (E === Vt(r) && (E = Un(r), sn(E).position !== "static" && s === "absolute" && (_ = "scrollHeight", $ = "scrollWidth")), E = E, o === $t || (o === At || o === sr) && i === $s) {
      w = ar;
      var R = d && E === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[_]
      );
      g -= R - n.height, g *= l ? 1 : -1;
    }
    if (o === At || (o === $t || o === ar) && i === $s) {
      y = sr;
      var M = d && E === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[$]
      );
      p -= M - n.width, p *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: s
  }, u && p6), q = c === !0 ? h6({
    x: p,
    y: g
  }, Vt(r)) : {
    x: p,
    y: g
  };
  if (p = q.x, g = q.y, l) {
    var G;
    return Object.assign({}, j, (G = {}, G[w] = h ? "0" : "", G[y] = m ? "0" : "", G.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", G));
  }
  return Object.assign({}, j, (t = {}, t[w] = h ? g + "px" : "", t[y] = m ? p + "px" : "", t.transform = "", t));
}
function m6(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, s = r.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: Ir(t.placement),
    variation: Vi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, w1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, w1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const v6 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: m6,
  data: {}
};
var zl = {
  passive: !0
};
function g6(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, s = a === void 0 ? !0 : a, l = Vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, zl);
  }), s && l.addEventListener("resize", r.update, zl), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, zl);
    }), s && l.removeEventListener("resize", r.update, zl);
  };
}
const y6 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: g6,
  data: {}
};
var b6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function mu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return b6[t];
  });
}
var x6 = {
  start: "end",
  end: "start"
};
function k1(e) {
  return e.replace(/start|end/g, function(t) {
    return x6[t];
  });
}
function dv(e) {
  var t = Vt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function fv(e) {
  return Ni(Un(e)).left + dv(e).scrollLeft;
}
function S6(e, t) {
  var r = Vt(e), n = Un(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = PC();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + fv(e),
    y: l
  };
}
function w6(e) {
  var t, r = Un(e), n = dv(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = yo(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = yo(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + fv(e), l = -n.scrollTop;
  return sn(o || r).direction === "rtl" && (s += yo(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function pv(e) {
  var t = sn(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function RC(e) {
  return ["html", "body", "#document"].indexOf(zr(e)) >= 0 ? e.ownerDocument.body : nr(e) && pv(e) ? e : RC(rd(e));
}
function Xa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = RC(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Vt(n), a = o ? [i].concat(i.visualViewport || [], pv(n) ? n : []) : n, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Xa(rd(a)))
  );
}
function sh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function k6(e, t) {
  var r = Ni(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function C1(e, t, r) {
  return t === CC ? sh(S6(e, r)) : To(t) ? k6(t, r) : sh(w6(Un(e)));
}
function C6(e) {
  var t = Xa(rd(e)), r = ["absolute", "fixed"].indexOf(sn(e).position) >= 0, n = r && nr(e) ? Xs(e) : e;
  return To(n) ? t.filter(function(o) {
    return To(o) && TC(o, n) && zr(o) !== "body";
  }) : [];
}
function _6(e, t, r, n) {
  var o = t === "clippingParents" ? C6(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], s = i.reduce(function(l, u) {
    var c = C1(e, u, n);
    return l.top = yo(c.top, l.top), l.right = lc(c.right, l.right), l.bottom = lc(c.bottom, l.bottom), l.left = yo(c.left, l.left), l;
  }, C1(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function MC(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Ir(n) : null, i = n ? Vi(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case $t:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ar:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case sr:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case At:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? cv(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Li:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case $s:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function As(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, s = r.boundary, l = s === void 0 ? HN : s, u = r.rootBoundary, c = u === void 0 ? CC : u, d = r.elementContext, f = d === void 0 ? ga : d, p = r.altBoundary, v = p === void 0 ? !1 : p, g = r.padding, x = g === void 0 ? 0 : g, m = $C(typeof x != "number" ? x : AC(x, qs)), h = f === ga ? GN : ga, y = e.rects.popper, w = e.elements[v ? h : f], k = _6(To(w) ? w : w.contextElement || Un(e.elements.popper), l, c, a), E = Ni(e.elements.reference), _ = MC({
    reference: E,
    element: y,
    strategy: "absolute",
    placement: o
  }), $ = sh(Object.assign({}, y, _)), R = f === ga ? $ : E, M = {
    top: k.top - R.top + m.top,
    bottom: R.bottom - k.bottom + m.bottom,
    left: k.left - R.left + m.left,
    right: R.right - k.right + m.right
  }, j = e.modifiersData.offset;
  if (f === ga && j) {
    var q = j[o];
    Object.keys(M).forEach(function(G) {
      var K = [sr, ar].indexOf(G) >= 0 ? 1 : -1, Z = [$t, ar].indexOf(G) >= 0 ? "y" : "x";
      M[G] += q[Z] * K;
    });
  }
  return M;
}
function P6(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? _C : l, c = Vi(n), d = c ? s ? x1 : x1.filter(function(v) {
    return Vi(v) === c;
  }) : qs, f = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(v, g) {
    return v[g] = As(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Ir(g)], v;
  }, {});
  return Object.keys(p).sort(function(v, g) {
    return p[v] - p[g];
  });
}
function T6(e) {
  if (Ir(e) === sv)
    return [];
  var t = mu(e);
  return [k1(e), t, k1(t)];
}
function E6(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, v = p === void 0 ? !0 : p, g = r.allowedAutoPlacements, x = t.options.placement, m = Ir(x), h = m === x, y = l || (h || !v ? [mu(x)] : T6(x)), w = [x].concat(y).reduce(function(Q, Pe) {
      return Q.concat(Ir(Pe) === sv ? P6(t, {
        placement: Pe,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: g
      }) : Pe);
    }, []), k = t.rects.reference, E = t.rects.popper, _ = /* @__PURE__ */ new Map(), $ = !0, R = w[0], M = 0; M < w.length; M++) {
      var j = w[M], q = Ir(j), G = Vi(j) === Li, K = [$t, ar].indexOf(q) >= 0, Z = K ? "width" : "height", Y = As(t, {
        placement: j,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ee = K ? G ? sr : At : G ? ar : $t;
      k[Z] > E[Z] && (ee = mu(ee));
      var I = mu(ee), L = [];
      if (i && L.push(Y[q] <= 0), s && L.push(Y[ee] <= 0, Y[I] <= 0), L.every(function(Q) {
        return Q;
      })) {
        R = j, $ = !1;
        break;
      }
      _.set(j, L);
    }
    if ($)
      for (var N = v ? 3 : 1, B = function(Pe) {
        var se = w.find(function(ge) {
          var Se = _.get(ge);
          if (Se)
            return Se.slice(0, Pe).every(function(Ae) {
              return Ae;
            });
        });
        if (se)
          return R = se, "break";
      }, X = N; X > 0; X--) {
        var H = B(X);
        if (H === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const $6 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: E6,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function _1(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function P1(e) {
  return [$t, sr, ar, At].some(function(t) {
    return e[t] >= 0;
  });
}
function A6(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = As(t, {
    elementContext: "reference"
  }), s = As(t, {
    altBoundary: !0
  }), l = _1(a, n), u = _1(s, o, i), c = P1(l), d = P1(u);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const R6 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: A6
};
function M6(e, t, r) {
  var n = Ir(e), o = [At, $t].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [At, sr].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function O6(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = _C.reduce(function(c, d) {
    return c[d] = M6(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const I6 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: O6
};
function z6(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = MC({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const F6 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: z6,
  data: {}
};
function D6(e) {
  return e === "x" ? "y" : "x";
}
function j6(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, v = r.tetherOffset, g = v === void 0 ? 0 : v, x = As(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = Ir(t.placement), h = Vi(t.placement), y = !h, w = cv(m), k = D6(w), E = t.modifiersData.popperOffsets, _ = t.rects.reference, $ = t.rects.popper, R = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, M = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (E) {
    if (i) {
      var G, K = w === "y" ? $t : At, Z = w === "y" ? ar : sr, Y = w === "y" ? "height" : "width", ee = E[w], I = ee + x[K], L = ee - x[Z], N = p ? -$[Y] / 2 : 0, B = h === Li ? _[Y] : $[Y], X = h === Li ? -$[Y] : -_[Y], H = t.elements.arrow, Q = p && H ? uv(H) : {
        width: 0,
        height: 0
      }, Pe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : EC(), se = Pe[K], ge = Pe[Z], Se = qa(0, _[Y], Q[Y]), Ae = y ? _[Y] / 2 - N - Se - se - M.mainAxis : B - Se - se - M.mainAxis, He = y ? -_[Y] / 2 + N + Se + ge + M.mainAxis : X + Se + ge + M.mainAxis, Ge = t.elements.arrow && Xs(t.elements.arrow), lr = Ge ? w === "y" ? Ge.clientTop || 0 : Ge.clientLeft || 0 : 0, ur = (G = j == null ? void 0 : j[w]) != null ? G : 0, Mo = ee + Ae - ur - lr, z = ee + He - ur, he = qa(p ? lc(I, Mo) : I, ee, p ? yo(L, z) : L);
      E[w] = he, q[w] = he - ee;
    }
    if (s) {
      var le, Xe = w === "x" ? $t : At, un = w === "x" ? ar : sr, st = E[k], br = k === "y" ? "height" : "width", cn = st + x[Xe], Gt = st - x[un], Oo = [$t, At].indexOf(m) !== -1, Zi = (le = j == null ? void 0 : j[k]) != null ? le : 0, Zs = Oo ? cn : st - _[br] - $[br] - Zi + M.altAxis, Js = Oo ? st + _[br] + $[br] - Zi - M.altAxis : Gt, Hn = p && Oo ? l6(Zs, st, Js) : qa(p ? Zs : cn, st, p ? Js : Gt);
      E[k] = Hn, q[k] = Hn - st;
    }
    t.modifiersData[n] = q;
  }
}
const L6 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: j6,
  requiresIfExists: ["offset"]
};
function B6(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function N6(e) {
  return e === Vt(e) || !nr(e) ? dv(e) : B6(e);
}
function V6(e) {
  var t = e.getBoundingClientRect(), r = Bi(t.width) / e.offsetWidth || 1, n = Bi(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function W6(e, t, r) {
  r === void 0 && (r = !1);
  var n = nr(t), o = nr(t) && V6(t), i = Un(t), a = Ni(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((zr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  pv(i)) && (s = N6(t)), nr(t) ? (l = Ni(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = fv(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function U6(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function H6(e) {
  var t = U6(e);
  return r6.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function G6(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function K6(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var T1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function E1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Y6(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? T1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, T1, i),
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
          reference: To(s) ? Xa(s) : s.contextElement ? Xa(s.contextElement) : [],
          popper: Xa(l)
        };
        var y = H6(K6([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = y.filter(function(w) {
          return w.enabled;
        }), v(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, y = m.popper;
          if (E1(h, y)) {
            c.rects = {
              reference: W6(h, Xs(y), c.options.strategy === "fixed"),
              popper: uv(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
              return c.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var k = c.orderedModifiers[w], E = k.fn, _ = k.options, $ = _ === void 0 ? {} : _, R = k.name;
              typeof E == "function" && (c = E({
                state: c,
                options: $,
                name: R,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: G6(function() {
        return new Promise(function(x) {
          p.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!E1(s, l))
      return p;
    p.setOptions(u).then(function(x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function v() {
      c.orderedModifiers.forEach(function(x) {
        var m = x.name, h = x.options, y = h === void 0 ? {} : h, w = x.effect;
        if (typeof w == "function") {
          var k = w({
            state: c,
            name: m,
            instance: p,
            options: y
          }), E = function() {
          };
          d.push(k || E);
        }
      });
    }
    function g() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return p;
  };
}
var q6 = [y6, F6, v6, i6, I6, $6, L6, f6, R6], X6 = /* @__PURE__ */ Y6({
  defaultModifiers: q6
});
function Q6(e = {}) {
  const {
    enabled: t = !0,
    modifiers: r,
    placement: n = "bottom",
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
  } = e, v = b.useRef(null), g = b.useRef(null), x = b.useRef(null), m = UN(n, p), h = b.useRef(() => {
  }), y = b.useCallback(() => {
    var M;
    !t || !v.current || !g.current || ((M = h.current) == null || M.call(h), x.current = X6(v.current, g.current, {
      placement: m,
      modifiers: [
        NN,
        jN,
        DN,
        {
          ...FN,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...zN(a)
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
        ...r ?? []
      ],
      strategy: o
    }), x.current.forceUpdate(), h.current = x.current.destroy);
  }, [
    m,
    t,
    r,
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
  b.useEffect(() => () => {
    var M;
    !v.current && !g.current && ((M = x.current) == null || M.destroy(), x.current = null);
  }, []);
  const w = b.useCallback(
    (M) => {
      v.current = M, y();
    },
    [y]
  ), k = b.useCallback(
    (M = {}, j = null) => ({
      ...M,
      ref: Ct(w, j)
    }),
    [w]
  ), E = b.useCallback(
    (M) => {
      g.current = M, y();
    },
    [y]
  ), _ = b.useCallback(
    (M = {}, j = null) => ({
      ...M,
      ref: Ct(E, j),
      style: {
        ...M.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, E, f]
  ), $ = b.useCallback((M = {}, j = null) => {
    const { size: q, shadowColor: G, bg: K, style: Z, ...Y } = M;
    return {
      ...Y,
      ref: j,
      "data-popper-arrow": "",
      style: Z6(M)
    };
  }, []), R = b.useCallback(
    (M = {}, j = null) => ({
      ...M,
      ref: j,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var M;
      (M = x.current) == null || M.update();
    },
    forceUpdate() {
      var M;
      (M = x.current) == null || M.forceUpdate();
    },
    transformOrigin: ft.transformOrigin.varRef,
    referenceRef: w,
    popperRef: E,
    getPopperProps: _,
    getArrowProps: $,
    getArrowInnerProps: R,
    getReferenceProps: k
  };
}
function Z6(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), r && (i["--popper-arrow-shadow-color"] = r), n && (i["--popper-arrow-bg"] = n), i;
}
function J6(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, i = mo(r), a = mo(t), [s, l] = b.useState(e.defaultIsOpen || !1), u = n !== void 0 ? n : s, c = n !== void 0, d = b.useId(), f = o ?? `disclosure-${d}`, p = b.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), v = b.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), g = b.useCallback(() => {
    u ? p() : v();
  }, [u, v, p]);
  function x(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(y) {
        var w;
        (w = h.onClick) == null || w.call(h, y), g();
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
    getButtonProps: x,
    getDisclosureProps: m
  };
}
function eV(e) {
  const { isOpen: t, ref: r } = e, [n, o] = b.useState(t), [i, a] = b.useState(!1);
  return b.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, n]), qm(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const u = hN(r.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(c);
    }
  };
}
function tV(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var rV = Object.defineProperty, nV = (e, t, r) => t in e ? rV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, oV = (e, t, r) => (nV(e, typeof t != "symbol" ? t + "" : t, r), r), iV = class {
  constructor() {
    oV(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, lh = new iV();
function OC(e, t) {
  const [r, n] = b.useState(0);
  return b.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = lh.add(o);
        n(i);
      }
      return () => {
        lh.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var aV = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Bo = /* @__PURE__ */ new WeakMap(), Fl = /* @__PURE__ */ new WeakMap(), Dl = {}, Pf = 0, IC = function(e) {
  return e && (e.host || IC(e.parentNode));
}, sV = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = IC(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, lV = function(e, t, r, n) {
  var o = sV(t, Array.isArray(e) ? e : [e]);
  Dl[r] || (Dl[r] = /* @__PURE__ */ new WeakMap());
  var i = Dl[r], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(n), v = p !== null && p !== "false", g = (Bo.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        Bo.set(f, g), i.set(f, x), a.push(f), g === 1 && v && Fl.set(f, !0), x === 1 && f.setAttribute(r, "true"), v || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), Pf++, function() {
    a.forEach(function(d) {
      var f = Bo.get(d) - 1, p = i.get(d) - 1;
      Bo.set(d, f), i.set(d, p), f || (Fl.has(d) || d.removeAttribute(n), Fl.delete(d)), p || d.removeAttribute(r);
    }), Pf--, Pf || (Bo = /* @__PURE__ */ new WeakMap(), Bo = /* @__PURE__ */ new WeakMap(), Fl = /* @__PURE__ */ new WeakMap(), Dl = {});
  };
}, uV = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || aV(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), lV(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function cV(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = b.useRef(null), c = b.useRef(null), [d, f, p] = fV(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  dV(u, t && a);
  const v = OC(u, t), g = b.useRef(null), x = b.useCallback((R) => {
    g.current = R.target;
  }, []), m = b.useCallback(
    (R) => {
      R.key === "Escape" && (R.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [h, y] = b.useState(!1), [w, k] = b.useState(!1), E = b.useCallback(
    (R = {}, M = null) => ({
      role: "dialog",
      ...R,
      ref: Ct(M, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: ye(
        R.onClick,
        (j) => j.stopPropagation()
      )
    }),
    [p, w, d, f, h]
  ), _ = b.useCallback(
    (R) => {
      R.stopPropagation(), g.current === R.target && lh.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), $ = b.useCallback(
    (R = {}, M = null) => ({
      ...R,
      ref: Ct(M, c),
      onClick: ye(R.onClick, _),
      onKeyDown: ye(R.onKeyDown, m),
      onMouseDown: ye(R.onMouseDown, x)
    }),
    [m, x, _]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: y,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: E,
    getDialogContainerProps: $,
    index: v
  };
}
function dV(e, t) {
  const r = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t))
      return uV(e.current);
  }, [t, e, r]);
}
function fV(e, ...t) {
  const r = b.useId(), n = e || r;
  return b.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [pV, Qs] = Ot({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [hV, qi] = Ot({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), zC = (e) => {
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
    portalProps: r,
    children: n,
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
  } = t, g = Yi("Modal", t), m = {
    ...cV(t),
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
  return /* @__PURE__ */ C.jsx(hV, { value: m, children: /* @__PURE__ */ C.jsx(pV, { value: g, children: /* @__PURE__ */ C.jsx(Zc, { onExitComplete: v, children: m.isOpen && /* @__PURE__ */ C.jsx(js, { ...r, children: n }) }) }) });
};
zC.displayName = "Modal";
var vu = "right-scroll-bar-position", gu = "width-before-scroll-bar", mV = "with-scroll-bars-hidden", vV = "--removed-body-scroll-bar-size", FC = Wk(), Tf = function() {
}, nd = b.forwardRef(function(e, t) {
  var r = b.useRef(null), n = b.useState({
    onScrollCapture: Tf,
    onWheelCapture: Tf,
    onTouchMoveCapture: Tf
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, g = e.allowPinchZoom, x = e.as, m = x === void 0 ? "div" : x, h = e.gapMode, y = Bk(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, k = Lk([r, t]), E = Er(Er({}, y), o);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: FC, removeScrollBar: u, shards: d, noIsolation: p, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: r, gapMode: h }),
    a ? b.cloneElement(b.Children.only(s), Er(Er({}, E), { ref: k })) : b.createElement(m, Er({}, E, { className: l, ref: k }), s)
  );
});
nd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
nd.classNames = {
  fullWidth: gu,
  zeroRight: vu
};
var $1, gV = function() {
  if ($1)
    return $1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function yV() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = gV();
  return t && e.setAttribute("nonce", t), e;
}
function bV(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function xV(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var SV = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = yV()) && (bV(t, r), xV(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, wV = function() {
  var e = SV();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, DC = function() {
  var e = wV(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, kV = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ef = function(e) {
  return parseInt(e || "", 10) || 0;
}, CV = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ef(r), Ef(n), Ef(o)];
}, _V = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kV;
  var t = CV(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, PV = DC(), TV = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(mV, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(vu, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(gu, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(vu, " .").concat(vu, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(gu, " .").concat(gu, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(vV, ": ").concat(s, `px;
  }
`);
}, EV = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = b.useMemo(function() {
    return _V(o);
  }, [o]);
  return b.createElement(PV, { styles: TV(i, !t, o, r ? "" : "!important") });
}, uh = !1;
if (typeof window < "u")
  try {
    var jl = Object.defineProperty({}, "passive", {
      get: function() {
        return uh = !0, !0;
      }
    });
    window.addEventListener("test", jl, jl), window.removeEventListener("test", jl, jl);
  } catch {
    uh = !1;
  }
var No = uh ? { passive: !1 } : !1, $V = function(e) {
  return e.tagName === "TEXTAREA";
}, jC = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !$V(e) && r[t] === "visible")
  );
}, AV = function(e) {
  return jC(e, "overflowY");
}, RV = function(e) {
  return jC(e, "overflowX");
}, A1 = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = LC(e, n);
    if (o) {
      var i = BC(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, MV = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, OV = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, LC = function(e, t) {
  return e === "v" ? AV(t) : RV(t);
}, BC = function(e, t) {
  return e === "v" ? MV(t) : OV(t);
}, IV = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, zV = function(e, t, r, n, o) {
  var i = IV(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = BC(e, s), v = p[0], g = p[1], x = p[2], m = g - x - i * v;
    (v || m) && LC(e, s) && (d += m, f += v), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Ll = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, R1 = function(e) {
  return [e.deltaX, e.deltaY];
}, M1 = function(e) {
  return e && "current" in e ? e.current : e;
}, FV = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, DV = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, jV = 0, Vo = [];
function LV(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), n = b.useRef(), o = b.useState(jV++)[0], i = b.useState(DC)[0], a = b.useRef(e);
  b.useEffect(function() {
    a.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = pB([e.lockRef.current], (e.shards || []).map(M1), !0).filter(Boolean);
      return g.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = b.useCallback(function(g, x) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = Ll(g), h = r.current, y = "deltaX" in g ? g.deltaX : h[0] - m[0], w = "deltaY" in g ? g.deltaY : h[1] - m[1], k, E = g.target, _ = Math.abs(y) > Math.abs(w) ? "h" : "v";
    if ("touches" in g && _ === "h" && E.type === "range")
      return !1;
    var $ = A1(_, E);
    if (!$)
      return !0;
    if ($ ? k = _ : (k = _ === "v" ? "h" : "v", $ = A1(_, E)), !$)
      return !1;
    if (!n.current && "changedTouches" in g && (y || w) && (n.current = k), !k)
      return !0;
    var R = n.current || k;
    return zV(R, x, g, R === "h" ? y : w, !0);
  }, []), l = b.useCallback(function(g) {
    var x = g;
    if (!(!Vo.length || Vo[Vo.length - 1] !== i)) {
      var m = "deltaY" in x ? R1(x) : Ll(x), h = t.current.filter(function(k) {
        return k.name === x.type && (k.target === x.target || x.target === k.shadowParent) && FV(k.delta, m);
      })[0];
      if (h && h.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!h) {
        var y = (a.current.shards || []).map(M1).filter(Boolean).filter(function(k) {
          return k.contains(x.target);
        }), w = y.length > 0 ? s(x, y[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(g, x, m, h) {
    var y = { name: g, delta: x, target: m, should: h, shadowParent: BV(m) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== y;
      });
    }, 1);
  }, []), c = b.useCallback(function(g) {
    r.current = Ll(g), n.current = void 0;
  }, []), d = b.useCallback(function(g) {
    u(g.type, R1(g), g.target, s(g, e.lockRef.current));
  }, []), f = b.useCallback(function(g) {
    u(g.type, Ll(g), g.target, s(g, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return Vo.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, No), document.addEventListener("touchmove", l, No), document.addEventListener("touchstart", c, No), function() {
      Vo = Vo.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, No), document.removeEventListener("touchmove", l, No), document.removeEventListener("touchstart", c, No);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    v ? b.createElement(i, { styles: DV(o) }) : null,
    p ? b.createElement(EV, { gapMode: e.gapMode }) : null
  );
}
function BV(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const NV = hB(FC, LV);
var NC = b.forwardRef(function(e, t) {
  return b.createElement(nd, Er({}, e, { ref: t, sideCar: NV }));
});
NC.classNames = nd.classNames;
const VV = NC;
function WV(e) {
  const {
    autoFocus: t,
    trapFocus: r,
    dialogRef: n,
    initialFocusRef: o,
    blockScrollOnMount: i,
    allowPinchZoom: a,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: u,
    lockFocusAcrossFrames: c,
    isOpen: d
  } = qi(), [f, p] = ck();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const v = OC(n, d);
  return /* @__PURE__ */ C.jsx(
    xC,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ C.jsx(
        VV,
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
var [UV, HV] = Ot(), GV = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function KV(e, t) {
  var r, n;
  if (e)
    return (n = (r = GV[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function VC(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = pm(), l = (t = s.components) == null ? void 0 : t.Drawer, u = KV(o, s.direction);
  return /* @__PURE__ */ C.jsx(UV, { value: { placement: u }, children: /* @__PURE__ */ C.jsx(
    zC,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var YV = J(Rk), hv = _e(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = qi(), c = s(a, t), d = l(i), f = xe("chakra-modal__content", r), p = Qs(), v = {
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
    }, { placement: x } = HV();
    return /* @__PURE__ */ C.jsx(WV, { children: /* @__PURE__ */ C.jsx(
      J.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ C.jsx(
          YV,
          {
            motionProps: o,
            direction: x,
            in: u,
            className: f,
            ...c,
            __css: v,
            children: n
          }
        )
      }
    ) });
  }
);
hv.displayName = "DrawerContent";
var mv = _e(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = qi();
    b.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = xe("chakra-modal__header", r), l = {
      flex: 0,
      ...Qs().header
    };
    return /* @__PURE__ */ C.jsx(
      J.header,
      {
        ref: t,
        className: a,
        id: o,
        ...n,
        __css: l
      }
    );
  }
);
mv.displayName = "ModalHeader";
var qV = J(Gs.div), vv = _e(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = xe("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Qs().overlay
    }, { motionPreset: u } = qi(), d = o || (u === "none" ? {} : Ak);
    return /* @__PURE__ */ C.jsx(
      qV,
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
vv.displayName = "ModalOverlay";
var gv = _e((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = qi();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = xe("chakra-modal__body", r), s = Qs();
  return /* @__PURE__ */ C.jsx(
    J.div,
    {
      ref: t,
      className: a,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
gv.displayName = "ModalBody";
var yv = _e(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = qi(), a = xe("chakra-modal__close-btn", n), s = Qs();
    return /* @__PURE__ */ C.jsx(
      Jc,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: ye(r, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
yv.displayName = "ModalCloseButton";
var [XV, Xi] = Ot({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [QV, od] = Ot({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});
function WC(e) {
  const t = b.Children.only(e.children), { getTriggerProps: r } = Xi();
  return b.cloneElement(t, r(t.props, t.ref));
}
WC.displayName = "PopoverTrigger";
var Wo = {
  click: "click",
  hover: "hover"
};
function ZV(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: r = !0,
    initialFocusRef: n,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = Wo.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: v,
    ...g
  } = e, { isOpen: x, onClose: m, onOpen: h, onToggle: y } = J6(e), w = b.useRef(null), k = b.useRef(null), E = b.useRef(null), _ = b.useRef(!1), $ = b.useRef(!1);
  x && ($.current = !0);
  const [R, M] = b.useState(!1), [j, q] = b.useState(!1), G = b.useId(), K = o ?? G, [Z, Y, ee, I] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((z) => `${z}-${K}`), {
    referenceRef: L,
    getArrowProps: N,
    getPopperProps: B,
    getArrowInnerProps: X,
    forceUpdate: H
  } = Q6({
    ...g,
    enabled: x || !!v
  }), Q = eV({ isOpen: x, ref: E });
  tB({
    enabled: x,
    ref: k
  }), EN(E, {
    focusRef: k,
    visible: x,
    shouldFocus: i && u === Wo.click
  }), AN(E, {
    focusRef: n,
    visible: x,
    shouldFocus: a && u === Wo.click
  });
  const Pe = tV({
    wasSelected: $.current,
    enabled: f,
    mode: p,
    isSelected: Q.present
  }), se = b.useCallback(
    (z = {}, he = null) => {
      const le = {
        ...z,
        style: {
          ...z.style,
          transformOrigin: ft.transformOrigin.varRef,
          [ft.arrowSize.var]: s ? `${s}px` : void 0,
          [ft.arrowShadowColor.var]: l
        },
        ref: Ct(E, he),
        children: Pe ? z.children : null,
        id: Y,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: ye(z.onKeyDown, (Xe) => {
          r && Xe.key === "Escape" && m();
        }),
        onBlur: ye(z.onBlur, (Xe) => {
          const un = O1(Xe), st = $f(E.current, un), br = $f(k.current, un);
          x && t && (!st && !br) && m();
        }),
        "aria-labelledby": R ? ee : void 0,
        "aria-describedby": j ? I : void 0
      };
      return u === Wo.hover && (le.role = "tooltip", le.onMouseEnter = ye(z.onMouseEnter, () => {
        _.current = !0;
      }), le.onMouseLeave = ye(
        z.onMouseLeave,
        (Xe) => {
          Xe.nativeEvent.relatedTarget !== null && (_.current = !1, setTimeout(() => m(), d));
        }
      )), le;
    },
    [
      Pe,
      Y,
      R,
      ee,
      j,
      I,
      u,
      r,
      m,
      x,
      t,
      d,
      l,
      s
    ]
  ), ge = b.useCallback(
    (z = {}, he = null) => B(
      {
        ...z,
        style: {
          visibility: x ? "visible" : "hidden",
          ...z.style
        }
      },
      he
    ),
    [x, B]
  ), Se = b.useCallback(
    (z, he = null) => ({
      ...z,
      // If anchor is rendered, it is used as reference.
      ref: Ct(he, w, L)
    }),
    [w, L]
  ), Ae = b.useRef(), He = b.useRef(), Ge = b.useCallback(
    (z) => {
      w.current == null && L(z);
    },
    [L]
  ), lr = b.useCallback(
    (z = {}, he = null) => {
      const le = {
        ...z,
        ref: Ct(k, he, Ge),
        id: Z,
        "aria-haspopup": "dialog",
        "aria-expanded": x,
        "aria-controls": Y
      };
      return u === Wo.click && (le.onClick = ye(z.onClick, y)), u === Wo.hover && (le.onFocus = ye(z.onFocus, () => {
        Ae.current === void 0 && h();
      }), le.onBlur = ye(z.onBlur, (Xe) => {
        const un = O1(Xe), st = !$f(E.current, un);
        x && t && st && m();
      }), le.onKeyDown = ye(z.onKeyDown, (Xe) => {
        Xe.key === "Escape" && m();
      }), le.onMouseEnter = ye(z.onMouseEnter, () => {
        _.current = !0, Ae.current = window.setTimeout(() => h(), c);
      }), le.onMouseLeave = ye(z.onMouseLeave, () => {
        _.current = !1, Ae.current && (clearTimeout(Ae.current), Ae.current = void 0), He.current = window.setTimeout(() => {
          _.current === !1 && m();
        }, d);
      })), le;
    },
    [
      Z,
      x,
      Y,
      u,
      Ge,
      y,
      h,
      t,
      m,
      c,
      d
    ]
  );
  b.useEffect(() => () => {
    Ae.current && clearTimeout(Ae.current), He.current && clearTimeout(He.current);
  }, []);
  const ur = b.useCallback(
    (z = {}, he = null) => ({
      ...z,
      id: ee,
      ref: Ct(he, (le) => {
        M(!!le);
      })
    }),
    [ee]
  ), Mo = b.useCallback(
    (z = {}, he = null) => ({
      ...z,
      id: I,
      ref: Ct(he, (le) => {
        q(!!le);
      })
    }),
    [I]
  );
  return {
    forceUpdate: H,
    isOpen: x,
    onAnimationComplete: Q.onComplete,
    onClose: m,
    getAnchorProps: Se,
    getArrowProps: N,
    getArrowInnerProps: X,
    getPopoverPositionerProps: ge,
    getPopoverProps: se,
    getTriggerProps: lr,
    getHeaderProps: ur,
    getBodyProps: Mo
  };
}
function $f(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function O1(e) {
  var t;
  const r = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : r;
}
function UC(e) {
  const t = Yi("Popover", e), { children: r, ...n } = Fr(e), o = pm(), i = ZV({ ...n, direction: o.direction });
  return /* @__PURE__ */ C.jsx(XV, { value: i, children: /* @__PURE__ */ C.jsx(QV, { value: t, children: Kr(r, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
UC.displayName = "Popover";
var Af = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function HC(e) {
  var t;
  const { bg: r, bgColor: n, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = Xi(), c = od(), d = (t = r ?? n) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ C.jsx(
    J.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ C.jsx(
        J.div,
        {
          className: xe("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Af("colors", s),
            "--popper-arrow-bg": Af("colors", d),
            "--popper-arrow-shadow": Af("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
HC.displayName = "PopoverArrow";
var GC = _e(
  function(t, r) {
    const { getBodyProps: n } = Xi(), o = od();
    return /* @__PURE__ */ C.jsx(
      J.div,
      {
        ...n(t, r),
        className: xe("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
GC.displayName = "PopoverBody";
var KC = _e(
  function(t, r) {
    const { onClose: n } = Xi(), o = od();
    return /* @__PURE__ */ C.jsx(
      Jc,
      {
        size: "sm",
        onClick: n,
        className: xe("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: r,
        ...t
      }
    );
  }
);
KC.displayName = "PopoverCloseButton";
function JV(e) {
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
var e8 = {
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
}, t8 = J(Gs.section), YC = _e(function(t, r) {
  const { variants: n = e8, ...o } = t, { isOpen: i } = Xi();
  return /* @__PURE__ */ C.jsx(
    t8,
    {
      ref: r,
      variants: JV(n),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
YC.displayName = "PopoverTransition";
var qC = _e(
  function(t, r) {
    const { rootProps: n, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = Xi(), u = od(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ C.jsx(
      J.div,
      {
        ...s(n),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ C.jsx(
          YC,
          {
            ...o,
            ...a(i, r),
            onAnimationComplete: CS(
              l,
              i.onAnimationComplete
            ),
            className: xe("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
qC.displayName = "PopoverContent";
var r8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, n8 = Object.defineProperty, o8 = Object.defineProperties, i8 = Object.getOwnPropertyDescriptors, uc = Object.getOwnPropertySymbols, XC = Object.prototype.hasOwnProperty, QC = Object.prototype.propertyIsEnumerable, I1 = (e, t, r) => t in e ? n8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, z1 = (e, t) => {
  for (var r in t || (t = {}))
    XC.call(t, r) && I1(e, r, t[r]);
  if (uc)
    for (var r of uc(t))
      QC.call(t, r) && I1(e, r, t[r]);
  return e;
}, a8 = (e, t) => o8(e, i8(t)), s8 = (e, t) => {
  var r = {};
  for (var n in e)
    XC.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && uc)
    for (var n of uc(e))
      t.indexOf(n) < 0 && QC.call(e, n) && (r[n] = e[n]);
  return r;
}, Qi = (e, t, r) => {
  const n = b.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = s8(a, ["color", "size", "stroke", "children"]);
      return b.createElement(
        "svg",
        z1(a8(z1({
          ref: i
        }, r8), {
          width: l,
          height: l,
          stroke: s,
          strokeWidth: u,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([f, p]) => b.createElement(f, p)), ...c || []]
      );
    }
  );
  return n.propTypes = {
    color: Xn.string,
    size: Xn.oneOfType([Xn.string, Xn.number]),
    stroke: Xn.oneOfType([Xn.string, Xn.number])
  }, n.displayName = `${t}`, n;
}, l8 = Qi("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), u8 = Qi("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), ZC = Qi("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), c8 = Qi("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), d8 = Qi("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), f8 = Qi(
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
);
let Bl;
const p8 = new Uint8Array(16);
function h8() {
  if (!Bl && (Bl = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Bl))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Bl(p8);
}
const rt = [];
for (let e = 0; e < 256; ++e)
  rt.push((e + 256).toString(16).slice(1));
function m8(e, t = 0) {
  return rt[e[t + 0]] + rt[e[t + 1]] + rt[e[t + 2]] + rt[e[t + 3]] + "-" + rt[e[t + 4]] + rt[e[t + 5]] + "-" + rt[e[t + 6]] + rt[e[t + 7]] + "-" + rt[e[t + 8]] + rt[e[t + 9]] + "-" + rt[e[t + 10]] + rt[e[t + 11]] + rt[e[t + 12]] + rt[e[t + 13]] + rt[e[t + 14]] + rt[e[t + 15]];
}
const v8 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), F1 = {
  randomUUID: v8
};
function g8(e, t, r) {
  if (F1.randomUUID && !t && !e)
    return F1.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || h8)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      t[r + o] = n[o];
    return t;
  }
  return m8(n);
}
let gt = {};
async function y8() {
  const e = async () => {
    let r = await B1("workflows");
    r == null && (r = localStorage.getItem("workspace")), gt = JSON.parse(r ?? "{}");
  }, t = async () => {
    let r = await B1("tags");
    JSON.parse(r ?? "{}");
  };
  await Promise.all([e(), t()]);
}
function D1(e, t) {
  gt[e] = {
    ...gt[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(gt)), bv("workflows", JSON.stringify(gt));
}
function j1(e, t) {
  const r = g8();
  return gt[r] = {
    id: r,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(gt)), bv("workflows", JSON.stringify(gt)), gt[r];
}
function L1() {
  return Object.values(gt).sort((e, t) => t.updateTime - e.updateTime);
}
function b8(e) {
  delete gt[e], localStorage.setItem("workspace", JSON.stringify(gt)), bv("workflows", JSON.stringify(gt));
}
async function bv(e, t) {
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
async function B1(e) {
  try {
    return await (await fetch(`/workspace/get_db?table=${e}`)).json();
  } catch (t) {
    return console.error("Error fetching workspace:", t), null;
  }
}
const JC = b.createContext({
  curFlowID: null
});
function x8({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: r
}) {
  const [n, o] = b.useState([]), { colorMode: i } = Ls(), { curFlowID: a } = b.useContext(JC);
  b.useEffect(() => {
    const l = L1();
    o(l);
  }, []);
  const s = (l) => {
    b8(l);
    const u = L1();
    o(u);
  };
  return /* @__PURE__ */ C.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ C.jsxs(
    VC,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ C.jsx(vv, {}),
        /* @__PURE__ */ C.jsxs(hv, { children: [
          /* @__PURE__ */ C.jsx(yv, {}),
          /* @__PURE__ */ C.jsx(mv, { children: "Recent Workflows" }),
          /* @__PURE__ */ C.jsxs(gv, { children: [
            /* @__PURE__ */ C.jsx(
              vo,
              {
                leftIcon: /* @__PURE__ */ C.jsx(ZC, {}),
                variant: "outline",
                size: "sm",
                colorScheme: "teal",
                mb: 6,
                onClick: r,
                children: "New"
              }
            ),
            n.map((l) => {
              const u = l.id === a;
              return /* @__PURE__ */ C.jsxs(Ur, { w: "100%", justify: "space-between", children: [
                /* @__PURE__ */ C.jsxs(
                  td,
                  {
                    as: "button",
                    textAlign: "left",
                    backgroundColor: u ? "teal.200" : void 0,
                    color: u ? "#333" : void 0,
                    w: "90%",
                    borderRadius: 6,
                    p: 2,
                    mb: 2,
                    onClick: () => {
                      t(l.id);
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
                      /* @__PURE__ */ C.jsx(go, { fontWeight: "500", children: l.name ?? "untitled" }),
                      /* @__PURE__ */ C.jsxs(go, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                        "Updated: ",
                        S8(l.updateTime)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ C.jsx(UC, { children: ({ isOpen: c, onClose: d }) => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
                  /* @__PURE__ */ C.jsx(WC, { children: /* @__PURE__ */ C.jsx(d8, { color: "#F56565", cursor: "pointer" }) }),
                  /* @__PURE__ */ C.jsxs(qC, { children: [
                    /* @__PURE__ */ C.jsx(HC, {}),
                    /* @__PURE__ */ C.jsx(KC, {}),
                    /* @__PURE__ */ C.jsxs(GC, { children: [
                      /* @__PURE__ */ C.jsx(go, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                      /* @__PURE__ */ C.jsx(
                        vo,
                        {
                          colorScheme: "red",
                          size: "sm",
                          onClick: () => {
                            s(l.id), d();
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
function S8(e) {
  const t = new Date(e), r = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${n}-${r}-${o} ${i}:${a}`;
}
function w8(e) {
  let t = {
    "&": "",
    "<": "",
    ">": "",
    '"': "",
    "'": "",
    "`": "",
    "=": ""
  };
  return String(e).replace(/[&<>"'`=]/g, function(n) {
    return t[n];
  });
}
function k8() {
  const e = [];
  for (let t of Nl.graph._nodes)
    t.type == "T2IAdapterLoader" && (t.type = "ControlNetLoader"), t.type == "ConditioningAverage " && (t.type = "ConditioningAverage"), t.type == "SDV_img2vid_Conditioning" && (t.type = "SVD_img2vid_Conditioning"), t.type in LiteGraph.registered_node_types || (t.type = w8(t.type), e.push(t.type));
  return e;
}
const C8 = {
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
function _8() {
  const [e, t] = b.useState([]), r = b.useRef({}), [n, o] = b.useState(null), [i, a] = b.useState("root"), [s, l] = b.useState(!0), [u, c] = b.useState(null), d = b.useRef(null), { colorMode: f, toggleColorMode: p } = Ls(), v = (w) => {
    d.current = w, c(w), setTimeout(() => {
      const k = k8();
      t(k);
    }, 1e3);
  }, g = async () => {
    var E;
    const w = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(_) {
      },
      async addCustomNodeDefs(_) {
        r.current = _;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Nl.registerExtension(w);
    try {
      await y8();
    } catch (_) {
      console.error("error loading db", _);
    }
    l(!1);
    const k = localStorage.getItem("curFlowID");
    if (k)
      v(k), o(((E = gt[k]) == null ? void 0 : E.name) ?? "");
    else {
      const _ = localStorage.getItem("workflow"), $ = j1(_ ?? "");
      v($.id), o($.name ?? "");
    }
  };
  b.useEffect(() => {
    g(), setInterval(() => {
      if (d.current != null) {
        const w = localStorage.getItem("workflow");
        localStorage.setItem("curFlowID", d.current), w != null && D1(d.current, {
          json: w
        });
      }
    }, 1e3);
  }, []);
  const x = (w) => {
    d.current != null && D1(d.current, {
      name: w
    });
  }, m = b.useCallback(
    YT(x, 700),
    []
  ), h = (w) => {
    v(w);
    const k = gt[w];
    o(k.name), Nl.loadGraphData(JSON.parse(k.json)), a("root");
  }, y = () => {
    const w = C8, k = j1(JSON.stringify(w));
    v(k.id), o(k.name), Nl.loadGraphData(w);
  };
  return s ? null : /* @__PURE__ */ C.jsx(JC.Provider, { value: { curFlowID: u }, children: /* @__PURE__ */ C.jsxs(
    td,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ C.jsxs(
          Ur,
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
              /* @__PURE__ */ C.jsxs(Ur, { children: [
                /* @__PURE__ */ C.jsx(
                  vo,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => a("recentFlows"),
                    children: /* @__PURE__ */ C.jsxs(Ur, { gap: 1, children: [
                      /* @__PURE__ */ C.jsx(l8, { size: 21 }),
                      /* @__PURE__ */ C.jsx(f8, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ C.jsx(
                  vo,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => y(),
                    children: /* @__PURE__ */ C.jsxs(Ur, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ C.jsx(ZC, { size: 16, color: "white" }),
                      /* @__PURE__ */ C.jsx(go, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ C.jsx(
                  iv,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: n ?? "",
                    onChange: (w) => {
                      o(w.target.value), m(w.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ C.jsx(Ur, { children: /* @__PURE__ */ C.jsx(vo, { onClick: p, variant: "link", children: f === "light" ? /* @__PURE__ */ C.jsx(u8, { size: 20 }) : /* @__PURE__ */ C.jsx(c8, { size: 20 }) }) })
            ]
          }
        ),
        i === "recentFlows" && /* @__PURE__ */ C.jsx(
          x8,
          {
            onclose: () => a("root"),
            loadWorkflowID: h,
            onClickNewFlow: () => {
              y(), a("root");
            }
          }
        ),
        /* @__PURE__ */ C.jsx(
          P8,
          {
            missingNodes: e,
            isOpen: i === "customNodes",
            onclose: () => {
              a("root");
            }
          }
        )
      ]
    }
  ) });
}
function P8({
  missingNodes: e,
  isOpen: t,
  onclose: r
}) {
  const [n, o] = b.useState(e), [i, a] = b.useState([]), [s, l] = b.useState(""), [u, c] = b.useState(!1);
  b.useEffect(() => {
    o(e);
    const f = e.map((p) => p.replace(" ", "_"));
    fetch("/workspace/find_nodes", {
      method: "POST",
      body: JSON.stringify({
        nodes: f
      })
    }).then((p) => p.json()).then((p) => {
      a(p.filter((v) => v != null)), o(p.filter((v) => v != null).map((v) => v.id));
    });
  }, [e]);
  const d = async (f) => {
    var p;
    c(!0), l(`Starting installation...
`);
    try {
      const v = await fetch("/workspace/install_nodes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nodes: f
        })
      }), g = (p = v == null ? void 0 : v.body) == null ? void 0 : p.getReader();
      if (g == null)
        return;
      const x = new TextDecoder();
      for (; ; ) {
        const { done: m, value: h } = await g.read();
        if (m)
          break;
      }
    } catch (v) {
      console.error("Failed to install custom nodes", v), l((g) => g + `
Installation failed.`);
    } finally {
      c(!1);
    }
  };
  return /* @__PURE__ */ C.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ C.jsxs(
    VC,
    {
      isOpen: t,
      placement: "right",
      onClose: () => r(),
      size: "sm",
      children: [
        /* @__PURE__ */ C.jsx(vv, {}),
        /* @__PURE__ */ C.jsxs(hv, { children: [
          /* @__PURE__ */ C.jsx(yv, {}),
          /* @__PURE__ */ C.jsx(mv, { children: "Custom Nodes" }),
          /* @__PURE__ */ C.jsxs(gv, { children: [
            /* @__PURE__ */ C.jsxs(Ur, { mb: 3, children: [
              /* @__PURE__ */ C.jsx(
                th,
                {
                  mr: 6,
                  isChecked: n.length === i.length,
                  onChange: (f) => {
                    f.target.checked ? o([...i.map((p) => p.id)]) : o([]);
                  },
                  children: "Select All"
                }
              ),
              /* @__PURE__ */ C.jsxs(
                vo,
                {
                  onClick: () => {
                    d(
                      i.filter((f) => n.includes(f.id))
                    );
                  },
                  children: [
                    "Install Missing Nodes ",
                    n.length
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ C.jsx(go, { mb: 3, color: "GrayText", fontSize: "small", children: "Unselectable nodes are not found in Github, they may be private repos" }),
            e.map((f) => {
              const p = i.find((v) => (v == null ? void 0 : v.id) === f);
              return /* @__PURE__ */ C.jsxs(av, { gap: 0, mb: 2, children: [
                /* @__PURE__ */ C.jsxs(Ur, { children: [
                  /* @__PURE__ */ C.jsx(
                    th,
                    {
                      isChecked: n.includes(f),
                      disabled: p == null,
                      onChange: (v) => {
                        v.target.checked ? o([...n, f]) : o(n.filter((g) => g !== f));
                      }
                    }
                  ),
                  /* @__PURE__ */ C.jsx("span", { children: f })
                ] }),
                p != null ? /* @__PURE__ */ C.jsx(
                  SC,
                  {
                    color: "teal.500",
                    href: p.gitHtmlUrl,
                    noOfLines: 1,
                    ml: 6,
                    children: p.gitHtmlUrl
                  }
                ) : /* @__PURE__ */ C.jsx(go, {})
              ] });
            })
          ] })
        ] })
      ]
    }
  ) });
}
const e2 = document.createElement("div");
document.body.append(e2);
const T8 = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, E8 = Xz({ config: T8 });
Rf.createRoot(e2).render(
  /* @__PURE__ */ C.jsx(bo.StrictMode, { children: /* @__PURE__ */ C.jsxs(cL, { children: [
    /* @__PURE__ */ C.jsx(l$, { initialColorMode: E8.config.initialColorMode }),
    /* @__PURE__ */ C.jsx(_8, {})
  ] }) })
);
