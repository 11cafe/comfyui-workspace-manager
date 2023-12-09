import { app as Xl } from "/scripts/app.js";
function LP(e, t) {
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
var Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var tb = { exports: {} }, bc = {}, nb = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ls = Symbol.for("react.element"), BP = Symbol.for("react.portal"), VP = Symbol.for("react.fragment"), WP = Symbol.for("react.strict_mode"), UP = Symbol.for("react.profiler"), HP = Symbol.for("react.provider"), GP = Symbol.for("react.context"), KP = Symbol.for("react.forward_ref"), YP = Symbol.for("react.suspense"), qP = Symbol.for("react.memo"), XP = Symbol.for("react.lazy"), Xv = Symbol.iterator;
function QP(e) {
  return e === null || typeof e != "object" ? null : (e = Xv && e[Xv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rb = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ob = Object.assign, ib = {};
function Zi(e, t, n) {
  this.props = e, this.context = t, this.refs = ib, this.updater = n || rb;
}
Zi.prototype.isReactComponent = {};
Zi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ab() {
}
ab.prototype = Zi.prototype;
function yh(e, t, n) {
  this.props = e, this.context = t, this.refs = ib, this.updater = n || rb;
}
var bh = yh.prototype = new ab();
bh.constructor = yh;
ob(bh, Zi.prototype);
bh.isPureReactComponent = !0;
var Qv = Array.isArray, sb = Object.prototype.hasOwnProperty, xh = { current: null }, lb = { key: !0, ref: !0, __self: !0, __source: !0 };
function ub(e, t, n) {
  var r, o = {}, i = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      sb.call(t, r) && !lb.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Ls, type: e, key: i, ref: a, props: o, _owner: xh.current };
}
function ZP(e, t) {
  return { $$typeof: Ls, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Sh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ls;
}
function JP(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Zv = /\/+/g;
function kd(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? JP("" + e.key) : t.toString(36);
}
function Ql(e, t, n, r, o) {
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
          case Ls:
          case BP:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = r === "" ? "." + kd(a, 0) : r, Qv(o) ? (n = "", e != null && (n = e.replace(Zv, "$&/") + "/"), Ql(o, t, n, "", function(u) {
      return u;
    })) : o != null && (Sh(o) && (o = ZP(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Zv, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", Qv(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + kd(i, s);
      a += Ql(i, t, n, l, o);
    }
  else if (l = QP(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = r + kd(i, s++), a += Ql(i, t, n, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function hl(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return Ql(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function e2(e) {
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
var St = { current: null }, Zl = { transition: null }, t2 = { ReactCurrentDispatcher: St, ReactCurrentBatchConfig: Zl, ReactCurrentOwner: xh };
ne.Children = { map: hl, forEach: function(e, t, n) {
  hl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return hl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return hl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Sh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ne.Component = Zi;
ne.Fragment = VP;
ne.Profiler = UP;
ne.PureComponent = yh;
ne.StrictMode = WP;
ne.Suspense = YP;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t2;
ne.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ob({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = xh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      sb.call(t, l) && !lb.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: Ls, type: e.type, key: o, ref: i, props: r, _owner: a };
};
ne.createContext = function(e) {
  return e = { $$typeof: GP, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: HP, _context: e }, e.Consumer = e;
};
ne.createElement = ub;
ne.createFactory = function(e) {
  var t = ub.bind(null, e);
  return t.type = e, t;
};
ne.createRef = function() {
  return { current: null };
};
ne.forwardRef = function(e) {
  return { $$typeof: KP, render: e };
};
ne.isValidElement = Sh;
ne.lazy = function(e) {
  return { $$typeof: XP, _payload: { _status: -1, _result: e }, _init: e2 };
};
ne.memo = function(e, t) {
  return { $$typeof: qP, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function(e) {
  var t = Zl.transition;
  Zl.transition = {};
  try {
    e();
  } finally {
    Zl.transition = t;
  }
};
ne.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
ne.useCallback = function(e, t) {
  return St.current.useCallback(e, t);
};
ne.useContext = function(e) {
  return St.current.useContext(e);
};
ne.useDebugValue = function() {
};
ne.useDeferredValue = function(e) {
  return St.current.useDeferredValue(e);
};
ne.useEffect = function(e, t) {
  return St.current.useEffect(e, t);
};
ne.useId = function() {
  return St.current.useId();
};
ne.useImperativeHandle = function(e, t, n) {
  return St.current.useImperativeHandle(e, t, n);
};
ne.useInsertionEffect = function(e, t) {
  return St.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function(e, t) {
  return St.current.useLayoutEffect(e, t);
};
ne.useMemo = function(e, t) {
  return St.current.useMemo(e, t);
};
ne.useReducer = function(e, t, n) {
  return St.current.useReducer(e, t, n);
};
ne.useRef = function(e) {
  return St.current.useRef(e);
};
ne.useState = function(e) {
  return St.current.useState(e);
};
ne.useSyncExternalStore = function(e, t, n) {
  return St.current.useSyncExternalStore(e, t, n);
};
ne.useTransition = function() {
  return St.current.useTransition();
};
ne.version = "18.2.0";
nb.exports = ne;
var v = nb.exports;
const Po = /* @__PURE__ */ Ns(v), Jv = /* @__PURE__ */ LP({
  __proto__: null,
  default: Po
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
var n2 = v, r2 = Symbol.for("react.element"), o2 = Symbol.for("react.fragment"), i2 = Object.prototype.hasOwnProperty, a2 = n2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function cb(e, t, n) {
  var r, o = {}, i = null, a = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    i2.call(t, r) && !s2.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: r2, type: e, key: i, ref: a, props: o, _owner: a2.current };
}
bc.Fragment = o2;
bc.jsx = cb;
bc.jsxs = cb;
tb.exports = bc;
var k = tb.exports, Bf = {}, db = { exports: {} }, Wt = {}, fb = { exports: {} }, pb = {};
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
  function t(D, N) {
    var V = D.length;
    D.push(N);
    e:
      for (; 0 < V; ) {
        var L = V - 1 >>> 1, ee = D[L];
        if (0 < o(ee, N))
          D[L] = N, D[V] = ee, V = L;
        else
          break e;
      }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0)
      return null;
    var N = D[0], V = D.pop();
    if (V !== N) {
      D[0] = V;
      e:
        for (var L = 0, ee = D.length, B = ee >>> 1; L < B; ) {
          var Z = 2 * (L + 1) - 1, ve = D[Z], le = Z + 1, ye = D[le];
          if (0 > o(ve, V))
            le < ee && 0 > o(ye, ve) ? (D[L] = ye, D[le] = V, L = le) : (D[L] = ve, D[Z] = V, L = Z);
          else if (le < ee && 0 > o(ye, V))
            D[L] = ye, D[le] = V, L = le;
          else
            break e;
        }
    }
    return N;
  }
  function o(D, N) {
    var V = D.sortIndex - N.sortIndex;
    return V !== 0 ? V : D.id - N.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, y = !1, g = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(D) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null)
        r(u);
      else if (N.startTime <= D)
        r(u), N.sortIndex = N.expirationTime, t(l, N);
      else
        break;
      N = n(u);
    }
  }
  function S(D) {
    if (g = !1, b(D), !y)
      if (n(l) !== null)
        y = !0, q(C);
      else {
        var N = n(u);
        N !== null && O(S, N.startTime - D);
      }
  }
  function C(D, N) {
    y = !1, g && (g = !1, m(A), A = -1), p = !0;
    var V = f;
    try {
      for (b(N), d = n(l); d !== null && (!(d.expirationTime > N) || D && !z()); ) {
        var L = d.callback;
        if (typeof L == "function") {
          d.callback = null, f = d.priorityLevel;
          var ee = L(d.expirationTime <= N);
          N = e.unstable_now(), typeof ee == "function" ? d.callback = ee : d === n(l) && r(l), b(N);
        } else
          r(l);
        d = n(l);
      }
      if (d !== null)
        var B = !0;
      else {
        var Z = n(u);
        Z !== null && O(S, Z.startTime - N), B = !1;
      }
      return B;
    } finally {
      d = null, f = V, p = !1;
    }
  }
  var P = !1, _ = null, A = -1, M = 5, R = -1;
  function z() {
    return !(e.unstable_now() - R < M);
  }
  function Q() {
    if (_ !== null) {
      var D = e.unstable_now();
      R = D;
      var N = !0;
      try {
        N = _(!0, D);
      } finally {
        N ? G() : (P = !1, _ = null);
      }
    } else
      P = !1;
  }
  var G;
  if (typeof h == "function")
    G = function() {
      h(Q);
    };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(), X = K.port2;
    K.port1.onmessage = Q, G = function() {
      X.postMessage(null);
    };
  } else
    G = function() {
      x(Q, 0);
    };
  function q(D) {
    _ = D, P || (P = !0, G());
  }
  function O(D, N) {
    A = x(function() {
      D(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    y || p || (y = !0, q(C));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(D) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = f;
    }
    var V = f;
    f = N;
    try {
      return D();
    } finally {
      f = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, N) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var V = f;
    f = D;
    try {
      return N();
    } finally {
      f = V;
    }
  }, e.unstable_scheduleCallback = function(D, N, V) {
    var L = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? L + V : L) : V = L, D) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = V + ee, D = { id: c++, callback: N, priorityLevel: D, startTime: V, expirationTime: ee, sortIndex: -1 }, V > L ? (D.sortIndex = V, t(u, D), n(l) === null && D === n(u) && (g ? (m(A), A = -1) : g = !0, O(S, V - L))) : (D.sortIndex = ee, t(l, D), y || p || (y = !0, q(C))), D;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(D) {
    var N = f;
    return function() {
      var V = f;
      f = N;
      try {
        return D.apply(this, arguments);
      } finally {
        f = V;
      }
    };
  };
})(pb);
fb.exports = pb;
var l2 = fb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hb = v, Lt = l2;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var mb = /* @__PURE__ */ new Set(), is = {};
function Io(e, t) {
  Ii(e, t), Ii(e + "Capture", t);
}
function Ii(e, t) {
  for (is[e] = t, e = 0; e < t.length; e++)
    mb.add(t[e]);
}
var ar = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vf = Object.prototype.hasOwnProperty, u2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eg = {}, tg = {};
function c2(e) {
  return Vf.call(tg, e) ? !0 : Vf.call(eg, e) ? !1 : u2.test(e) ? tg[e] = !0 : (eg[e] = !0, !1);
}
function d2(e, t, n, r) {
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
function f2(e, t, n, r) {
  if (t === null || typeof t > "u" || d2(e, t, n, r))
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
function wt(e, t, n, r, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var st = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  st[e] = new wt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  st[t] = new wt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  st[e] = new wt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  st[e] = new wt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  st[e] = new wt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  st[e] = new wt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  st[e] = new wt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  st[e] = new wt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  st[e] = new wt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wh = /[\-:]([a-z])/g;
function kh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    wh,
    kh
  );
  st[t] = new wt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(wh, kh);
  st[t] = new wt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(wh, kh);
  st[t] = new wt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  st[e] = new wt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
st.xlinkHref = new wt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  st[e] = new wt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ch(e, t, n, r) {
  var o = st.hasOwnProperty(t) ? st[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (f2(t, n, o, r) && (n = null), r || o === null ? c2(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var pr = hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ml = Symbol.for("react.element"), Qo = Symbol.for("react.portal"), Zo = Symbol.for("react.fragment"), _h = Symbol.for("react.strict_mode"), Wf = Symbol.for("react.profiler"), vb = Symbol.for("react.provider"), gb = Symbol.for("react.context"), Ph = Symbol.for("react.forward_ref"), Uf = Symbol.for("react.suspense"), Hf = Symbol.for("react.suspense_list"), Th = Symbol.for("react.memo"), wr = Symbol.for("react.lazy"), yb = Symbol.for("react.offscreen"), ng = Symbol.iterator;
function ua(e) {
  return e === null || typeof e != "object" ? null : (e = ng && e[ng] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Oe = Object.assign, Cd;
function _a(e) {
  if (Cd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cd = t && t[1] || "";
    }
  return `
` + Cd + e;
}
var _d = !1;
function Pd(e, t) {
  if (!e || _d)
    return "";
  _d = !0;
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
    _d = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _a(e) : "";
}
function p2(e) {
  switch (e.tag) {
    case 5:
      return _a(e.type);
    case 16:
      return _a("Lazy");
    case 13:
      return _a("Suspense");
    case 19:
      return _a("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Pd(e.type, !1), e;
    case 11:
      return e = Pd(e.type.render, !1), e;
    case 1:
      return e = Pd(e.type, !0), e;
    default:
      return "";
  }
}
function Gf(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Zo:
      return "Fragment";
    case Qo:
      return "Portal";
    case Wf:
      return "Profiler";
    case _h:
      return "StrictMode";
    case Uf:
      return "Suspense";
    case Hf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gb:
        return (e.displayName || "Context") + ".Consumer";
      case vb:
        return (e._context.displayName || "Context") + ".Provider";
      case Ph:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Th:
        return t = e.displayName || null, t !== null ? t : Gf(e.type) || "Memo";
      case wr:
        t = e._payload, e = e._init;
        try {
          return Gf(e(t));
        } catch {
        }
    }
  return null;
}
function h2(e) {
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
      return Gf(t);
    case 8:
      return t === _h ? "StrictMode" : "Mode";
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
function Vr(e) {
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
function bb(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function m2(e) {
  var t = bb(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function vl(e) {
  e._valueTracker || (e._valueTracker = m2(e));
}
function xb(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = bb(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Tu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Kf(e, t) {
  var n = t.checked;
  return Oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function rg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Vr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Sb(e, t) {
  t = t.checked, t != null && Ch(e, "checked", t, !1);
}
function Yf(e, t) {
  Sb(e, t);
  var n = Vr(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? qf(e, t.type, n) : t.hasOwnProperty("defaultValue") && qf(e, t.type, Vr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function og(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function qf(e, t, n) {
  (t !== "number" || Tu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pa = Array.isArray;
function xi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xf(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(I(91));
  return Oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ig(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(I(92));
      if (Pa(n)) {
        if (1 < n.length)
          throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Vr(n) };
}
function wb(e, t) {
  var n = Vr(t.value), r = Vr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ag(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? kb(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var gl, Cb = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (gl = gl || document.createElement("div"), gl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function as(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fa = {
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
}, v2 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fa).forEach(function(e) {
  v2.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Fa[t] = Fa[e];
  });
});
function _b(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fa.hasOwnProperty(e) && Fa[e] ? ("" + t).trim() : t + "px";
}
function Pb(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = _b(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var g2 = Oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zf(e, t) {
  if (t) {
    if (g2[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(I(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(I(62));
  }
}
function Jf(e, t) {
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
var ep = null;
function Eh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var tp = null, Si = null, wi = null;
function sg(e) {
  if (e = Ws(e)) {
    if (typeof tp != "function")
      throw Error(I(280));
    var t = e.stateNode;
    t && (t = Cc(t), tp(e.stateNode, e.type, t));
  }
}
function Tb(e) {
  Si ? wi ? wi.push(e) : wi = [e] : Si = e;
}
function Eb() {
  if (Si) {
    var e = Si, t = wi;
    if (wi = Si = null, sg(e), t)
      for (e = 0; e < t.length; e++)
        sg(t[e]);
  }
}
function Ab(e, t) {
  return e(t);
}
function $b() {
}
var Td = !1;
function Mb(e, t, n) {
  if (Td)
    return e(t, n);
  Td = !0;
  try {
    return Ab(e, t, n);
  } finally {
    Td = !1, (Si !== null || wi !== null) && ($b(), Eb());
  }
}
function ss(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Cc(n);
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
    throw Error(I(231, t, typeof n));
  return n;
}
var np = !1;
if (ar)
  try {
    var ca = {};
    Object.defineProperty(ca, "passive", { get: function() {
      np = !0;
    } }), window.addEventListener("test", ca, ca), window.removeEventListener("test", ca, ca);
  } catch {
    np = !1;
  }
function y2(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ja = !1, Eu = null, Au = !1, rp = null, b2 = { onError: function(e) {
  ja = !0, Eu = e;
} };
function x2(e, t, n, r, o, i, a, s, l) {
  ja = !1, Eu = null, y2.apply(b2, arguments);
}
function S2(e, t, n, r, o, i, a, s, l) {
  if (x2.apply(this, arguments), ja) {
    if (ja) {
      var u = Eu;
      ja = !1, Eu = null;
    } else
      throw Error(I(198));
    Au || (Au = !0, rp = u);
  }
}
function Do(e) {
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
function Rb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function lg(e) {
  if (Do(e) !== e)
    throw Error(I(188));
}
function w2(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Do(e), t === null)
      throw Error(I(188));
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
          return lg(o), e;
        if (i === r)
          return lg(o), t;
        i = i.sibling;
      }
      throw Error(I(188));
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
          throw Error(I(189));
      }
    }
    if (n.alternate !== r)
      throw Error(I(190));
  }
  if (n.tag !== 3)
    throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function Ob(e) {
  return e = w2(e), e !== null ? Ib(e) : null;
}
function Ib(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ib(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Db = Lt.unstable_scheduleCallback, ug = Lt.unstable_cancelCallback, k2 = Lt.unstable_shouldYield, C2 = Lt.unstable_requestPaint, Le = Lt.unstable_now, _2 = Lt.unstable_getCurrentPriorityLevel, Ah = Lt.unstable_ImmediatePriority, zb = Lt.unstable_UserBlockingPriority, $u = Lt.unstable_NormalPriority, P2 = Lt.unstable_LowPriority, Fb = Lt.unstable_IdlePriority, xc = null, On = null;
function T2(e) {
  if (On && typeof On.onCommitFiberRoot == "function")
    try {
      On.onCommitFiberRoot(xc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var vn = Math.clz32 ? Math.clz32 : $2, E2 = Math.log, A2 = Math.LN2;
function $2(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (E2(e) / A2 | 0) | 0;
}
var yl = 64, bl = 4194304;
function Ta(e) {
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
function Mu(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? r = Ta(s) : (i &= a, i !== 0 && (r = Ta(i)));
  } else
    a = n & ~o, a !== 0 ? r = Ta(a) : i !== 0 && (r = Ta(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - vn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function M2(e, t) {
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
function R2(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - vn(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & n) || s & r) && (o[a] = M2(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function op(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function jb() {
  var e = yl;
  return yl <<= 1, !(yl & 4194240) && (yl = 64), e;
}
function Ed(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Bs(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vn(t), e[t] = n;
}
function O2(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - vn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function $h(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - vn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var he = 0;
function Nb(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Lb, Mh, Bb, Vb, Wb, ip = !1, xl = [], Mr = null, Rr = null, Or = null, ls = /* @__PURE__ */ new Map(), us = /* @__PURE__ */ new Map(), _r = [], I2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mr = null;
      break;
    case "dragenter":
    case "dragleave":
      Rr = null;
      break;
    case "mouseover":
    case "mouseout":
      Or = null;
      break;
    case "pointerover":
    case "pointerout":
      ls.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      us.delete(t.pointerId);
  }
}
function da(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ws(t), t !== null && Mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function D2(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Mr = da(Mr, e, t, n, r, o), !0;
    case "dragenter":
      return Rr = da(Rr, e, t, n, r, o), !0;
    case "mouseover":
      return Or = da(Or, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ls.set(i, da(ls.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, us.set(i, da(us.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Ub(e) {
  var t = fo(e.target);
  if (t !== null) {
    var n = Do(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Rb(n), t !== null) {
          e.blockedOn = t, Wb(e.priority, function() {
            Bb(n);
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
function Jl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ap(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ep = r, n.target.dispatchEvent(r), ep = null;
    } else
      return t = Ws(n), t !== null && Mh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function dg(e, t, n) {
  Jl(e) && n.delete(t);
}
function z2() {
  ip = !1, Mr !== null && Jl(Mr) && (Mr = null), Rr !== null && Jl(Rr) && (Rr = null), Or !== null && Jl(Or) && (Or = null), ls.forEach(dg), us.forEach(dg);
}
function fa(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ip || (ip = !0, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, z2)));
}
function cs(e) {
  function t(o) {
    return fa(o, e);
  }
  if (0 < xl.length) {
    fa(xl[0], e);
    for (var n = 1; n < xl.length; n++) {
      var r = xl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Mr !== null && fa(Mr, e), Rr !== null && fa(Rr, e), Or !== null && fa(Or, e), ls.forEach(t), us.forEach(t), n = 0; n < _r.length; n++)
    r = _r[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _r.length && (n = _r[0], n.blockedOn === null); )
    Ub(n), n.blockedOn === null && _r.shift();
}
var ki = pr.ReactCurrentBatchConfig, Ru = !0;
function F2(e, t, n, r) {
  var o = he, i = ki.transition;
  ki.transition = null;
  try {
    he = 1, Rh(e, t, n, r);
  } finally {
    he = o, ki.transition = i;
  }
}
function j2(e, t, n, r) {
  var o = he, i = ki.transition;
  ki.transition = null;
  try {
    he = 4, Rh(e, t, n, r);
  } finally {
    he = o, ki.transition = i;
  }
}
function Rh(e, t, n, r) {
  if (Ru) {
    var o = ap(e, t, n, r);
    if (o === null)
      jd(e, t, r, Ou, n), cg(e, r);
    else if (D2(o, e, t, n, r))
      r.stopPropagation();
    else if (cg(e, r), t & 4 && -1 < I2.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ws(o);
        if (i !== null && Lb(i), i = ap(e, t, n, r), i === null && jd(e, t, r, Ou, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      jd(e, t, r, null, n);
  }
}
var Ou = null;
function ap(e, t, n, r) {
  if (Ou = null, e = Eh(r), e = fo(e), e !== null)
    if (t = Do(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Rb(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ou = e, null;
}
function Hb(e) {
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
      switch (_2()) {
        case Ah:
          return 1;
        case zb:
          return 4;
        case $u:
        case P2:
          return 16;
        case Fb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ar = null, Oh = null, eu = null;
function Gb() {
  if (eu)
    return eu;
  var e, t = Oh, n = t.length, r, o = "value" in Ar ? Ar.value : Ar.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
    ;
  return eu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function tu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sl() {
  return !0;
}
function fg() {
  return !1;
}
function Ut(e) {
  function t(n, r, o, i, a) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Sl : fg, this.isPropagationStopped = fg, this;
  }
  return Oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sl);
  }, persist: function() {
  }, isPersistent: Sl }), t;
}
var Ji = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ih = Ut(Ji), Vs = Oe({}, Ji, { view: 0, detail: 0 }), N2 = Ut(Vs), Ad, $d, pa, Sc = Oe({}, Vs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pa && (pa && e.type === "mousemove" ? (Ad = e.screenX - pa.screenX, $d = e.screenY - pa.screenY) : $d = Ad = 0, pa = e), Ad);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : $d;
} }), pg = Ut(Sc), L2 = Oe({}, Sc, { dataTransfer: 0 }), B2 = Ut(L2), V2 = Oe({}, Vs, { relatedTarget: 0 }), Md = Ut(V2), W2 = Oe({}, Ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), U2 = Ut(W2), H2 = Oe({}, Ji, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), G2 = Ut(H2), K2 = Oe({}, Ji, { data: 0 }), hg = Ut(K2), Y2 = {
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
}, q2 = {
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
}, X2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Q2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = X2[e]) ? !!t[e] : !1;
}
function Dh() {
  return Q2;
}
var Z2 = Oe({}, Vs, { key: function(e) {
  if (e.key) {
    var t = Y2[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = tu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? q2[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dh, charCode: function(e) {
  return e.type === "keypress" ? tu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? tu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), J2 = Ut(Z2), eT = Oe({}, Sc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), mg = Ut(eT), tT = Oe({}, Vs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dh }), nT = Ut(tT), rT = Oe({}, Ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), oT = Ut(rT), iT = Oe({}, Sc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), aT = Ut(iT), sT = [9, 13, 27, 32], zh = ar && "CompositionEvent" in window, Na = null;
ar && "documentMode" in document && (Na = document.documentMode);
var lT = ar && "TextEvent" in window && !Na, Kb = ar && (!zh || Na && 8 < Na && 11 >= Na), vg = " ", gg = !1;
function Yb(e, t) {
  switch (e) {
    case "keyup":
      return sT.indexOf(t.keyCode) !== -1;
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
function qb(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Jo = !1;
function uT(e, t) {
  switch (e) {
    case "compositionend":
      return qb(t);
    case "keypress":
      return t.which !== 32 ? null : (gg = !0, vg);
    case "textInput":
      return e = t.data, e === vg && gg ? null : e;
    default:
      return null;
  }
}
function cT(e, t) {
  if (Jo)
    return e === "compositionend" || !zh && Yb(e, t) ? (e = Gb(), eu = Oh = Ar = null, Jo = !1, e) : null;
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
      return Kb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dT = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function yg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dT[e.type] : t === "textarea";
}
function Xb(e, t, n, r) {
  Tb(r), t = Iu(t, "onChange"), 0 < t.length && (n = new Ih("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var La = null, ds = null;
function fT(e) {
  sx(e, 0);
}
function wc(e) {
  var t = ni(e);
  if (xb(t))
    return e;
}
function pT(e, t) {
  if (e === "change")
    return t;
}
var Qb = !1;
if (ar) {
  var Rd;
  if (ar) {
    var Od = "oninput" in document;
    if (!Od) {
      var bg = document.createElement("div");
      bg.setAttribute("oninput", "return;"), Od = typeof bg.oninput == "function";
    }
    Rd = Od;
  } else
    Rd = !1;
  Qb = Rd && (!document.documentMode || 9 < document.documentMode);
}
function xg() {
  La && (La.detachEvent("onpropertychange", Zb), ds = La = null);
}
function Zb(e) {
  if (e.propertyName === "value" && wc(ds)) {
    var t = [];
    Xb(t, ds, e, Eh(e)), Mb(fT, t);
  }
}
function hT(e, t, n) {
  e === "focusin" ? (xg(), La = t, ds = n, La.attachEvent("onpropertychange", Zb)) : e === "focusout" && xg();
}
function mT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return wc(ds);
}
function vT(e, t) {
  if (e === "click")
    return wc(t);
}
function gT(e, t) {
  if (e === "input" || e === "change")
    return wc(t);
}
function yT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var bn = typeof Object.is == "function" ? Object.is : yT;
function fs(e, t) {
  if (bn(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Vf.call(t, o) || !bn(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Sg(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function wg(e, t) {
  var n = Sg(e);
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
    n = Sg(n);
  }
}
function Jb(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ex() {
  for (var e = window, t = Tu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Tu(e.document);
  }
  return t;
}
function Fh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function bT(e) {
  var t = ex(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Jb(n.ownerDocument.documentElement, n)) {
    if (r !== null && Fh(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = wg(n, i);
        var a = wg(
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
var xT = ar && "documentMode" in document && 11 >= document.documentMode, ei = null, sp = null, Ba = null, lp = !1;
function kg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  lp || ei == null || ei !== Tu(r) || (r = ei, "selectionStart" in r && Fh(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ba && fs(Ba, r) || (Ba = r, r = Iu(sp, "onSelect"), 0 < r.length && (t = new Ih("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ei)));
}
function wl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ti = { animationend: wl("Animation", "AnimationEnd"), animationiteration: wl("Animation", "AnimationIteration"), animationstart: wl("Animation", "AnimationStart"), transitionend: wl("Transition", "TransitionEnd") }, Id = {}, tx = {};
ar && (tx = document.createElement("div").style, "AnimationEvent" in window || (delete ti.animationend.animation, delete ti.animationiteration.animation, delete ti.animationstart.animation), "TransitionEvent" in window || delete ti.transitionend.transition);
function kc(e) {
  if (Id[e])
    return Id[e];
  if (!ti[e])
    return e;
  var t = ti[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in tx)
      return Id[e] = t[n];
  return e;
}
var nx = kc("animationend"), rx = kc("animationiteration"), ox = kc("animationstart"), ix = kc("transitionend"), ax = /* @__PURE__ */ new Map(), Cg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kr(e, t) {
  ax.set(e, t), Io(t, [e]);
}
for (var Dd = 0; Dd < Cg.length; Dd++) {
  var zd = Cg[Dd], ST = zd.toLowerCase(), wT = zd[0].toUpperCase() + zd.slice(1);
  Kr(ST, "on" + wT);
}
Kr(nx, "onAnimationEnd");
Kr(rx, "onAnimationIteration");
Kr(ox, "onAnimationStart");
Kr("dblclick", "onDoubleClick");
Kr("focusin", "onFocus");
Kr("focusout", "onBlur");
Kr(ix, "onTransitionEnd");
Ii("onMouseEnter", ["mouseout", "mouseover"]);
Ii("onMouseLeave", ["mouseout", "mouseover"]);
Ii("onPointerEnter", ["pointerout", "pointerover"]);
Ii("onPointerLeave", ["pointerout", "pointerover"]);
Io("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Io("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Io("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Io("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Io("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Io("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ea = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));
function _g(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, S2(r, t, void 0, e), e.currentTarget = null;
}
function sx(e, t) {
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
          _g(o, s, u), i = l;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          _g(o, s, u), i = l;
        }
    }
  }
  if (Au)
    throw e = rp, Au = !1, rp = null, e;
}
function ke(e, t) {
  var n = t[pp];
  n === void 0 && (n = t[pp] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (lx(t, e, 2, !1), n.add(r));
}
function Fd(e, t, n) {
  var r = 0;
  t && (r |= 4), lx(n, e, r, t);
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function ps(e) {
  if (!e[kl]) {
    e[kl] = !0, mb.forEach(function(n) {
      n !== "selectionchange" && (kT.has(n) || Fd(n, !1, e), Fd(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kl] || (t[kl] = !0, Fd("selectionchange", !1, t));
  }
}
function lx(e, t, n, r) {
  switch (Hb(t)) {
    case 1:
      var o = F2;
      break;
    case 4:
      o = j2;
      break;
    default:
      o = Rh;
  }
  n = o.bind(null, t, n, e), o = void 0, !np || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function jd(e, t, n, r, o) {
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
            if (a = fo(s), a === null)
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
  Mb(function() {
    var u = i, c = Eh(n), d = [];
    e: {
      var f = ax.get(e);
      if (f !== void 0) {
        var p = Ih, y = e;
        switch (e) {
          case "keypress":
            if (tu(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = J2;
            break;
          case "focusin":
            y = "focus", p = Md;
            break;
          case "focusout":
            y = "blur", p = Md;
            break;
          case "beforeblur":
          case "afterblur":
            p = Md;
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
            p = pg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = B2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = nT;
            break;
          case nx:
          case rx:
          case ox:
            p = U2;
            break;
          case ix:
            p = oT;
            break;
          case "scroll":
            p = N2;
            break;
          case "wheel":
            p = aT;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = G2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = mg;
        }
        var g = (t & 4) !== 0, x = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var h = u, b; h !== null; ) {
          b = h;
          var S = b.stateNode;
          if (b.tag === 5 && S !== null && (b = S, m !== null && (S = ss(h, m), S != null && g.push(hs(h, S, b)))), x)
            break;
          h = h.return;
        }
        0 < g.length && (f = new p(f, y, null, n, c), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== ep && (y = n.relatedTarget || n.fromElement) && (fo(y) || y[sr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (y = n.relatedTarget || n.toElement, p = u, y = y ? fo(y) : null, y !== null && (x = Do(y), y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (p = null, y = u), p !== y)) {
          if (g = pg, S = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = mg, S = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = p == null ? f : ni(p), b = y == null ? f : ni(y), f = new g(S, h + "leave", p, n, c), f.target = x, f.relatedTarget = b, S = null, fo(c) === u && (g = new g(m, h + "enter", y, n, c), g.target = b, g.relatedTarget = x, S = g), x = S, p && y)
            t: {
              for (g = p, m = y, h = 0, b = g; b; b = Uo(b))
                h++;
              for (b = 0, S = m; S; S = Uo(S))
                b++;
              for (; 0 < h - b; )
                g = Uo(g), h--;
              for (; 0 < b - h; )
                m = Uo(m), b--;
              for (; h--; ) {
                if (g === m || m !== null && g === m.alternate)
                  break t;
                g = Uo(g), m = Uo(m);
              }
              g = null;
            }
          else
            g = null;
          p !== null && Pg(d, f, p, g, !1), y !== null && x !== null && Pg(d, x, y, g, !0);
        }
      }
      e: {
        if (f = u ? ni(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var C = pT;
        else if (yg(f))
          if (Qb)
            C = gT;
          else {
            C = mT;
            var P = hT;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = vT);
        if (C && (C = C(e, u))) {
          Xb(d, C, n, c);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && qf(f, "number", f.value);
      }
      switch (P = u ? ni(u) : window, e) {
        case "focusin":
          (yg(P) || P.contentEditable === "true") && (ei = P, sp = u, Ba = null);
          break;
        case "focusout":
          Ba = sp = ei = null;
          break;
        case "mousedown":
          lp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          lp = !1, kg(d, n, c);
          break;
        case "selectionchange":
          if (xT)
            break;
        case "keydown":
        case "keyup":
          kg(d, n, c);
      }
      var _;
      if (zh)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Jo ? Yb(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (Kb && n.locale !== "ko" && (Jo || A !== "onCompositionStart" ? A === "onCompositionEnd" && Jo && (_ = Gb()) : (Ar = c, Oh = "value" in Ar ? Ar.value : Ar.textContent, Jo = !0)), P = Iu(u, A), 0 < P.length && (A = new hg(A, e, null, n, c), d.push({ event: A, listeners: P }), _ ? A.data = _ : (_ = qb(n), _ !== null && (A.data = _)))), (_ = lT ? uT(e, n) : cT(e, n)) && (u = Iu(u, "onBeforeInput"), 0 < u.length && (c = new hg("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    sx(d, t);
  });
}
function hs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Iu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ss(e, n), i != null && r.unshift(hs(e, i, o)), i = ss(e, t), i != null && r.push(hs(e, i, o))), e = e.return;
  }
  return r;
}
function Uo(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pg(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, l = s.alternate, u = s.stateNode;
    if (l !== null && l === r)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = ss(n, i), l != null && a.unshift(hs(n, l, s))) : o || (l = ss(n, i), l != null && a.push(hs(n, l, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var CT = /\r\n?/g, _T = /\u0000|\uFFFD/g;
function Tg(e) {
  return (typeof e == "string" ? e : "" + e).replace(CT, `
`).replace(_T, "");
}
function Cl(e, t, n) {
  if (t = Tg(t), Tg(e) !== t && n)
    throw Error(I(425));
}
function Du() {
}
var up = null, cp = null;
function dp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fp = typeof setTimeout == "function" ? setTimeout : void 0, PT = typeof clearTimeout == "function" ? clearTimeout : void 0, Eg = typeof Promise == "function" ? Promise : void 0, TT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Eg < "u" ? function(e) {
  return Eg.resolve(null).then(e).catch(ET);
} : fp;
function ET(e) {
  setTimeout(function() {
    throw e;
  });
}
function Nd(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), cs(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  cs(t);
}
function Ir(e) {
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
function Ag(e) {
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
var ea = Math.random().toString(36).slice(2), An = "__reactFiber$" + ea, ms = "__reactProps$" + ea, sr = "__reactContainer$" + ea, pp = "__reactEvents$" + ea, AT = "__reactListeners$" + ea, $T = "__reactHandles$" + ea;
function fo(e) {
  var t = e[An];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[sr] || n[An]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Ag(e); e !== null; ) {
          if (n = e[An])
            return n;
          e = Ag(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ws(e) {
  return e = e[An] || e[sr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ni(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(I(33));
}
function Cc(e) {
  return e[ms] || null;
}
var hp = [], ri = -1;
function Yr(e) {
  return { current: e };
}
function _e(e) {
  0 > ri || (e.current = hp[ri], hp[ri] = null, ri--);
}
function xe(e, t) {
  ri++, hp[ri] = e.current, e.current = t;
}
var Wr = {}, mt = Yr(Wr), Pt = Yr(!1), To = Wr;
function Di(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Wr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Tt(e) {
  return e = e.childContextTypes, e != null;
}
function zu() {
  _e(Pt), _e(mt);
}
function $g(e, t, n) {
  if (mt.current !== Wr)
    throw Error(I(168));
  xe(mt, t), xe(Pt, n);
}
function ux(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(I(108, h2(e) || "Unknown", o));
  return Oe({}, n, r);
}
function Fu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wr, To = mt.current, xe(mt, e), xe(Pt, Pt.current), !0;
}
function Mg(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(I(169));
  n ? (e = ux(e, t, To), r.__reactInternalMemoizedMergedChildContext = e, _e(Pt), _e(mt), xe(mt, e)) : _e(Pt), xe(Pt, n);
}
var qn = null, _c = !1, Ld = !1;
function cx(e) {
  qn === null ? qn = [e] : qn.push(e);
}
function MT(e) {
  _c = !0, cx(e);
}
function qr() {
  if (!Ld && qn !== null) {
    Ld = !0;
    var e = 0, t = he;
    try {
      var n = qn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      qn = null, _c = !1;
    } catch (o) {
      throw qn !== null && (qn = qn.slice(e + 1)), Db(Ah, qr), o;
    } finally {
      he = t, Ld = !1;
    }
  }
  return null;
}
var oi = [], ii = 0, ju = null, Nu = 0, Zt = [], Jt = 0, Eo = null, Zn = 1, Jn = "";
function oo(e, t) {
  oi[ii++] = Nu, oi[ii++] = ju, ju = e, Nu = t;
}
function dx(e, t, n) {
  Zt[Jt++] = Zn, Zt[Jt++] = Jn, Zt[Jt++] = Eo, Eo = e;
  var r = Zn;
  e = Jn;
  var o = 32 - vn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - vn(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Zn = 1 << 32 - vn(t) + o | n << o | r, Jn = i + e;
  } else
    Zn = 1 << i | n << o | r, Jn = e;
}
function jh(e) {
  e.return !== null && (oo(e, 1), dx(e, 1, 0));
}
function Nh(e) {
  for (; e === ju; )
    ju = oi[--ii], oi[ii] = null, Nu = oi[--ii], oi[ii] = null;
  for (; e === Eo; )
    Eo = Zt[--Jt], Zt[Jt] = null, Jn = Zt[--Jt], Zt[Jt] = null, Zn = Zt[--Jt], Zt[Jt] = null;
}
var Ft = null, zt = null, Ee = !1, hn = null;
function fx(e, t) {
  var n = en(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Rg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ft = e, zt = Ir(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ft = e, zt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Eo !== null ? { id: Zn, overflow: Jn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = en(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ft = e, zt = null, !0) : !1;
    default:
      return !1;
  }
}
function mp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vp(e) {
  if (Ee) {
    var t = zt;
    if (t) {
      var n = t;
      if (!Rg(e, t)) {
        if (mp(e))
          throw Error(I(418));
        t = Ir(n.nextSibling);
        var r = Ft;
        t && Rg(e, t) ? fx(r, n) : (e.flags = e.flags & -4097 | 2, Ee = !1, Ft = e);
      }
    } else {
      if (mp(e))
        throw Error(I(418));
      e.flags = e.flags & -4097 | 2, Ee = !1, Ft = e;
    }
  }
}
function Og(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ft = e;
}
function _l(e) {
  if (e !== Ft)
    return !1;
  if (!Ee)
    return Og(e), Ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !dp(e.type, e.memoizedProps)), t && (t = zt)) {
    if (mp(e))
      throw px(), Error(I(418));
    for (; t; )
      fx(e, t), t = Ir(t.nextSibling);
  }
  if (Og(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              zt = Ir(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      zt = null;
    }
  } else
    zt = Ft ? Ir(e.stateNode.nextSibling) : null;
  return !0;
}
function px() {
  for (var e = zt; e; )
    e = Ir(e.nextSibling);
}
function zi() {
  zt = Ft = null, Ee = !1;
}
function Lh(e) {
  hn === null ? hn = [e] : hn.push(e);
}
var RT = pr.ReactCurrentBatchConfig;
function fn(e, t) {
  if (e && e.defaultProps) {
    t = Oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Lu = Yr(null), Bu = null, ai = null, Bh = null;
function Vh() {
  Bh = ai = Bu = null;
}
function Wh(e) {
  var t = Lu.current;
  _e(Lu), e._currentValue = t;
}
function gp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Ci(e, t) {
  Bu = e, Bh = ai = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_t = !0), e.firstContext = null);
}
function an(e) {
  var t = e._currentValue;
  if (Bh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ai === null) {
      if (Bu === null)
        throw Error(I(308));
      ai = e, Bu.dependencies = { lanes: 0, firstContext: e };
    } else
      ai = ai.next = e;
  return t;
}
var po = null;
function Uh(e) {
  po === null ? po = [e] : po.push(e);
}
function hx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Uh(t)) : (n.next = o.next, o.next = n), t.interleaved = n, lr(e, r);
}
function lr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var kr = !1;
function Hh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function mx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function nr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Dr(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, ae & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, lr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Uh(r)) : (t.next = o.next, o.next = t), r.interleaved = t, lr(e, n);
}
function nu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $h(e, n);
  }
}
function Ig(e, t) {
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
function Vu(e, t, n, r) {
  var o = e.updateQueue;
  kr = !1;
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
          var y = e, g = s;
          switch (f = t, p = n, g.tag) {
            case 1:
              if (y = g.payload, typeof y == "function") {
                d = y.call(p, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = g.payload, f = typeof y == "function" ? y.call(p, d, f) : y, f == null)
                break e;
              d = Oe({}, d, f);
              break e;
            case 2:
              kr = !0;
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
    $o |= a, e.lanes = a, e.memoizedState = d;
  }
}
function Dg(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(I(191, o));
        o.call(r);
      }
    }
}
var vx = new hb.Component().refs;
function yp(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Do(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = bt(), o = Fr(e), i = nr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Dr(e, i, o), t !== null && (gn(t, e, o, r), nu(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = bt(), o = Fr(e), i = nr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Dr(e, i, o), t !== null && (gn(t, e, o, r), nu(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = bt(), r = Fr(e), o = nr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Dr(e, o, r), t !== null && (gn(t, e, r, n), nu(t, e, r));
} };
function zg(e, t, n, r, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !fs(n, r) || !fs(o, i) : !0;
}
function gx(e, t, n) {
  var r = !1, o = Wr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = an(i) : (o = Tt(t) ? To : mt.current, r = t.contextTypes, i = (r = r != null) ? Di(e, o) : Wr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Pc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Fg(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Pc.enqueueReplaceState(t, t.state, null);
}
function bp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = vx, Hh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = an(i) : (i = Tt(t) ? To : mt.current, o.context = Di(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (yp(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Pc.enqueueReplaceState(o, o.state, null), Vu(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ha(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(I(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
        var s = o.refs;
        s === vx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(I(284));
    if (!n._owner)
      throw Error(I(290, e));
  }
  return e;
}
function Pl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function jg(e) {
  var t = e._init;
  return t(e._payload);
}
function yx(e) {
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
    return m = jr(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, b) {
    return m.index = b, e ? (b = m.alternate, b !== null ? (b = b.index, b < h ? (m.flags |= 2, h) : b) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, b, S) {
    return h === null || h.tag !== 6 ? (h = Kd(b, m.mode, S), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function l(m, h, b, S) {
    var C = b.type;
    return C === Zo ? c(m, h, b.props.children, S, b.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === wr && jg(C) === h.type) ? (S = o(h, b.props), S.ref = ha(m, h, b), S.return = m, S) : (S = lu(b.type, b.key, b.props, null, m.mode, S), S.ref = ha(m, h, b), S.return = m, S);
  }
  function u(m, h, b, S) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== b.containerInfo || h.stateNode.implementation !== b.implementation ? (h = Yd(b, m.mode, S), h.return = m, h) : (h = o(h, b.children || []), h.return = m, h);
  }
  function c(m, h, b, S, C) {
    return h === null || h.tag !== 7 ? (h = xo(b, m.mode, S, C), h.return = m, h) : (h = o(h, b), h.return = m, h);
  }
  function d(m, h, b) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Kd("" + h, m.mode, b), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ml:
          return b = lu(h.type, h.key, h.props, null, m.mode, b), b.ref = ha(m, null, h), b.return = m, b;
        case Qo:
          return h = Yd(h, m.mode, b), h.return = m, h;
        case wr:
          var S = h._init;
          return d(m, S(h._payload), b);
      }
      if (Pa(h) || ua(h))
        return h = xo(h, m.mode, b, null), h.return = m, h;
      Pl(m, h);
    }
    return null;
  }
  function f(m, h, b, S) {
    var C = h !== null ? h.key : null;
    if (typeof b == "string" && b !== "" || typeof b == "number")
      return C !== null ? null : s(m, h, "" + b, S);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ml:
          return b.key === C ? l(m, h, b, S) : null;
        case Qo:
          return b.key === C ? u(m, h, b, S) : null;
        case wr:
          return C = b._init, f(
            m,
            h,
            C(b._payload),
            S
          );
      }
      if (Pa(b) || ua(b))
        return C !== null ? null : c(m, h, b, S, null);
      Pl(m, b);
    }
    return null;
  }
  function p(m, h, b, S, C) {
    if (typeof S == "string" && S !== "" || typeof S == "number")
      return m = m.get(b) || null, s(h, m, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ml:
          return m = m.get(S.key === null ? b : S.key) || null, l(h, m, S, C);
        case Qo:
          return m = m.get(S.key === null ? b : S.key) || null, u(h, m, S, C);
        case wr:
          var P = S._init;
          return p(m, h, b, P(S._payload), C);
      }
      if (Pa(S) || ua(S))
        return m = m.get(b) || null, c(h, m, S, C, null);
      Pl(h, S);
    }
    return null;
  }
  function y(m, h, b, S) {
    for (var C = null, P = null, _ = h, A = h = 0, M = null; _ !== null && A < b.length; A++) {
      _.index > A ? (M = _, _ = null) : M = _.sibling;
      var R = f(m, _, b[A], S);
      if (R === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && R.alternate === null && t(m, _), h = i(R, h, A), P === null ? C = R : P.sibling = R, P = R, _ = M;
    }
    if (A === b.length)
      return n(m, _), Ee && oo(m, A), C;
    if (_ === null) {
      for (; A < b.length; A++)
        _ = d(m, b[A], S), _ !== null && (h = i(_, h, A), P === null ? C = _ : P.sibling = _, P = _);
      return Ee && oo(m, A), C;
    }
    for (_ = r(m, _); A < b.length; A++)
      M = p(_, m, A, b[A], S), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? A : M.key), h = i(M, h, A), P === null ? C = M : P.sibling = M, P = M);
    return e && _.forEach(function(z) {
      return t(m, z);
    }), Ee && oo(m, A), C;
  }
  function g(m, h, b, S) {
    var C = ua(b);
    if (typeof C != "function")
      throw Error(I(150));
    if (b = C.call(b), b == null)
      throw Error(I(151));
    for (var P = C = null, _ = h, A = h = 0, M = null, R = b.next(); _ !== null && !R.done; A++, R = b.next()) {
      _.index > A ? (M = _, _ = null) : M = _.sibling;
      var z = f(m, _, R.value, S);
      if (z === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && z.alternate === null && t(m, _), h = i(z, h, A), P === null ? C = z : P.sibling = z, P = z, _ = M;
    }
    if (R.done)
      return n(
        m,
        _
      ), Ee && oo(m, A), C;
    if (_ === null) {
      for (; !R.done; A++, R = b.next())
        R = d(m, R.value, S), R !== null && (h = i(R, h, A), P === null ? C = R : P.sibling = R, P = R);
      return Ee && oo(m, A), C;
    }
    for (_ = r(m, _); !R.done; A++, R = b.next())
      R = p(_, m, A, R.value, S), R !== null && (e && R.alternate !== null && _.delete(R.key === null ? A : R.key), h = i(R, h, A), P === null ? C = R : P.sibling = R, P = R);
    return e && _.forEach(function(Q) {
      return t(m, Q);
    }), Ee && oo(m, A), C;
  }
  function x(m, h, b, S) {
    if (typeof b == "object" && b !== null && b.type === Zo && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ml:
          e: {
            for (var C = b.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (C = b.type, C === Zo) {
                  if (P.tag === 7) {
                    n(m, P.sibling), h = o(P, b.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (P.elementType === C || typeof C == "object" && C !== null && C.$$typeof === wr && jg(C) === P.type) {
                  n(m, P.sibling), h = o(P, b.props), h.ref = ha(m, P, b), h.return = m, m = h;
                  break e;
                }
                n(m, P);
                break;
              } else
                t(m, P);
              P = P.sibling;
            }
            b.type === Zo ? (h = xo(b.props.children, m.mode, S, b.key), h.return = m, m = h) : (S = lu(b.type, b.key, b.props, null, m.mode, S), S.ref = ha(m, h, b), S.return = m, m = S);
          }
          return a(m);
        case Qo:
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
            h = Yd(b, m.mode, S), h.return = m, m = h;
          }
          return a(m);
        case wr:
          return P = b._init, x(m, h, P(b._payload), S);
      }
      if (Pa(b))
        return y(m, h, b, S);
      if (ua(b))
        return g(m, h, b, S);
      Pl(m, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, b), h.return = m, m = h) : (n(m, h), h = Kd(b, m.mode, S), h.return = m, m = h), a(m)) : n(m, h);
  }
  return x;
}
var Fi = yx(!0), bx = yx(!1), Us = {}, In = Yr(Us), vs = Yr(Us), gs = Yr(Us);
function ho(e) {
  if (e === Us)
    throw Error(I(174));
  return e;
}
function Gh(e, t) {
  switch (xe(gs, t), xe(vs, e), xe(In, Us), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qf(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qf(t, e);
  }
  _e(In), xe(In, t);
}
function ji() {
  _e(In), _e(vs), _e(gs);
}
function xx(e) {
  ho(gs.current);
  var t = ho(In.current), n = Qf(t, e.type);
  t !== n && (xe(vs, e), xe(In, n));
}
function Kh(e) {
  vs.current === e && (_e(In), _e(vs));
}
var $e = Yr(0);
function Wu(e) {
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
var Bd = [];
function Yh() {
  for (var e = 0; e < Bd.length; e++)
    Bd[e]._workInProgressVersionPrimary = null;
  Bd.length = 0;
}
var ru = pr.ReactCurrentDispatcher, Vd = pr.ReactCurrentBatchConfig, Ao = 0, Re = null, He = null, Xe = null, Uu = !1, Va = !1, ys = 0, OT = 0;
function ct() {
  throw Error(I(321));
}
function qh(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bn(e[n], t[n]))
      return !1;
  return !0;
}
function Xh(e, t, n, r, o, i) {
  if (Ao = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ru.current = e === null || e.memoizedState === null ? FT : jT, e = n(r, o), Va) {
    i = 0;
    do {
      if (Va = !1, ys = 0, 25 <= i)
        throw Error(I(301));
      i += 1, Xe = He = null, t.updateQueue = null, ru.current = NT, e = n(r, o);
    } while (Va);
  }
  if (ru.current = Hu, t = He !== null && He.next !== null, Ao = 0, Xe = He = Re = null, Uu = !1, t)
    throw Error(I(300));
  return e;
}
function Qh() {
  var e = ys !== 0;
  return ys = 0, e;
}
function Cn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Xe === null ? Re.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
}
function sn() {
  if (He === null) {
    var e = Re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = He.next;
  var t = Xe === null ? Re.memoizedState : Xe.next;
  if (t !== null)
    Xe = t, He = e;
  else {
    if (e === null)
      throw Error(I(310));
    He = e, e = { memoizedState: He.memoizedState, baseState: He.baseState, baseQueue: He.baseQueue, queue: He.queue, next: null }, Xe === null ? Re.memoizedState = Xe = e : Xe = Xe.next = e;
  }
  return Xe;
}
function bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wd(e) {
  var t = sn(), n = t.queue;
  if (n === null)
    throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = He, o = r.baseQueue, i = n.pending;
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
      if ((Ao & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = r) : l = l.next = d, Re.lanes |= c, $o |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = r : l.next = s, bn(r, t.memoizedState) || (_t = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Re.lanes |= i, $o |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ud(e) {
  var t = sn(), n = t.queue;
  if (n === null)
    throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = o = o.next;
    do
      i = e(i, a.action), a = a.next;
    while (a !== o);
    bn(i, t.memoizedState) || (_t = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Sx() {
}
function wx(e, t) {
  var n = Re, r = sn(), o = t(), i = !bn(r.memoizedState, o);
  if (i && (r.memoizedState = o, _t = !0), r = r.queue, Zh(_x.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Xe !== null && Xe.memoizedState.tag & 1) {
    if (n.flags |= 2048, xs(9, Cx.bind(null, n, r, o, t), void 0, null), Ze === null)
      throw Error(I(349));
    Ao & 30 || kx(n, t, o);
  }
  return o;
}
function kx(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Cx(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Px(t) && Tx(e);
}
function _x(e, t, n) {
  return n(function() {
    Px(t) && Tx(e);
  });
}
function Px(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bn(e, n);
  } catch {
    return !0;
  }
}
function Tx(e) {
  var t = lr(e, 1);
  t !== null && gn(t, e, 1, -1);
}
function Ng(e) {
  var t = Cn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bs, lastRenderedState: e }, t.queue = e, e = e.dispatch = zT.bind(null, Re, e), [t.memoizedState, e];
}
function xs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ex() {
  return sn().memoizedState;
}
function ou(e, t, n, r) {
  var o = Cn();
  Re.flags |= e, o.memoizedState = xs(1 | t, n, void 0, r === void 0 ? null : r);
}
function Tc(e, t, n, r) {
  var o = sn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (He !== null) {
    var a = He.memoizedState;
    if (i = a.destroy, r !== null && qh(r, a.deps)) {
      o.memoizedState = xs(t, n, i, r);
      return;
    }
  }
  Re.flags |= e, o.memoizedState = xs(1 | t, n, i, r);
}
function Lg(e, t) {
  return ou(8390656, 8, e, t);
}
function Zh(e, t) {
  return Tc(2048, 8, e, t);
}
function Ax(e, t) {
  return Tc(4, 2, e, t);
}
function $x(e, t) {
  return Tc(4, 4, e, t);
}
function Mx(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Rx(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tc(4, 4, Mx.bind(null, t, e), n);
}
function Jh() {
}
function Ox(e, t) {
  var n = sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qh(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ix(e, t) {
  var n = sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qh(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Dx(e, t, n) {
  return Ao & 21 ? (bn(n, t) || (n = jb(), Re.lanes |= n, $o |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n);
}
function IT(e, t) {
  var n = he;
  he = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Vd.transition;
  Vd.transition = {};
  try {
    e(!1), t();
  } finally {
    he = n, Vd.transition = r;
  }
}
function zx() {
  return sn().memoizedState;
}
function DT(e, t, n) {
  var r = Fr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Fx(e))
    jx(t, n);
  else if (n = hx(e, t, n, r), n !== null) {
    var o = bt();
    gn(n, e, r, o), Nx(n, t, r);
  }
}
function zT(e, t, n) {
  var r = Fr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fx(e))
    jx(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, n);
        if (o.hasEagerState = !0, o.eagerState = s, bn(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Uh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = hx(e, t, o, r), n !== null && (o = bt(), gn(n, e, r, o), Nx(n, t, r));
  }
}
function Fx(e) {
  var t = e.alternate;
  return e === Re || t !== null && t === Re;
}
function jx(e, t) {
  Va = Uu = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Nx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $h(e, n);
  }
}
var Hu = { readContext: an, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useInsertionEffect: ct, useLayoutEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useMutableSource: ct, useSyncExternalStore: ct, useId: ct, unstable_isNewReconciler: !1 }, FT = { readContext: an, useCallback: function(e, t) {
  return Cn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: an, useEffect: Lg, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ou(
    4194308,
    4,
    Mx.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ou(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ou(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Cn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Cn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = DT.bind(null, Re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Cn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ng, useDebugValue: Jh, useDeferredValue: function(e) {
  return Cn().memoizedState = e;
}, useTransition: function() {
  var e = Ng(!1), t = e[0];
  return e = IT.bind(null, e[1]), Cn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Re, o = Cn();
  if (Ee) {
    if (n === void 0)
      throw Error(I(407));
    n = n();
  } else {
    if (n = t(), Ze === null)
      throw Error(I(349));
    Ao & 30 || kx(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Lg(_x.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, xs(9, Cx.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Cn(), t = Ze.identifierPrefix;
  if (Ee) {
    var n = Jn, r = Zn;
    n = (r & ~(1 << 32 - vn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ys++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = OT++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, jT = {
  readContext: an,
  useCallback: Ox,
  useContext: an,
  useEffect: Zh,
  useImperativeHandle: Rx,
  useInsertionEffect: Ax,
  useLayoutEffect: $x,
  useMemo: Ix,
  useReducer: Wd,
  useRef: Ex,
  useState: function() {
    return Wd(bs);
  },
  useDebugValue: Jh,
  useDeferredValue: function(e) {
    var t = sn();
    return Dx(t, He.memoizedState, e);
  },
  useTransition: function() {
    var e = Wd(bs)[0], t = sn().memoizedState;
    return [e, t];
  },
  useMutableSource: Sx,
  useSyncExternalStore: wx,
  useId: zx,
  unstable_isNewReconciler: !1
}, NT = { readContext: an, useCallback: Ox, useContext: an, useEffect: Zh, useImperativeHandle: Rx, useInsertionEffect: Ax, useLayoutEffect: $x, useMemo: Ix, useReducer: Ud, useRef: Ex, useState: function() {
  return Ud(bs);
}, useDebugValue: Jh, useDeferredValue: function(e) {
  var t = sn();
  return He === null ? t.memoizedState = e : Dx(t, He.memoizedState, e);
}, useTransition: function() {
  var e = Ud(bs)[0], t = sn().memoizedState;
  return [e, t];
}, useMutableSource: Sx, useSyncExternalStore: wx, useId: zx, unstable_isNewReconciler: !1 };
function Ni(e, t) {
  try {
    var n = "", r = t;
    do
      n += p2(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Hd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var LT = typeof WeakMap == "function" ? WeakMap : Map;
function Lx(e, t, n) {
  n = nr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ku || (Ku = !0, $p = r), xp(e, t);
  }, n;
}
function Bx(e, t, n) {
  n = nr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      xp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    xp(e, t), typeof r != "function" && (zr === null ? zr = /* @__PURE__ */ new Set([this]) : zr.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function Bg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new LT();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = eE.bind(null, e, t, n), t.then(e, e));
}
function Vg(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wg(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = nr(-1, 1), t.tag = 2, Dr(n, t, 1))), n.lanes |= 1), e);
}
var BT = pr.ReactCurrentOwner, _t = !1;
function gt(e, t, n, r) {
  t.child = e === null ? bx(t, null, n, r) : Fi(t, e.child, n, r);
}
function Ug(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Ci(t, o), r = Xh(e, t, n, r, i, o), n = Qh(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ur(e, t, o)) : (Ee && n && jh(t), t.flags |= 1, gt(e, t, r, o), t.child);
}
function Hg(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !sm(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Vx(e, t, i, r, o)) : (e = lu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : fs, n(a, r) && e.ref === t.ref)
      return ur(e, t, o);
  }
  return t.flags |= 1, e = jr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Vx(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (fs(i, r) && e.ref === t.ref)
      if (_t = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (_t = !0);
      else
        return t.lanes = e.lanes, ur(e, t, o);
  }
  return Sp(e, t, n, r, o);
}
function Wx(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, xe(li, Dt), Dt |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, xe(li, Dt), Dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, xe(li, Dt), Dt |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, xe(li, Dt), Dt |= r;
  return gt(e, t, o, n), t.child;
}
function Ux(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Sp(e, t, n, r, o) {
  var i = Tt(n) ? To : mt.current;
  return i = Di(t, i), Ci(t, o), n = Xh(e, t, n, r, i, o), r = Qh(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ur(e, t, o)) : (Ee && r && jh(t), t.flags |= 1, gt(e, t, n, o), t.child);
}
function Gg(e, t, n, r, o) {
  if (Tt(n)) {
    var i = !0;
    Fu(t);
  } else
    i = !1;
  if (Ci(t, o), t.stateNode === null)
    iu(e, t), gx(t, n, r), bp(t, n, r, o), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = an(u) : (u = Tt(n) ? To : mt.current, u = Di(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && Fg(t, a, r, u), kr = !1;
    var f = t.memoizedState;
    a.state = f, Vu(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Pt.current || kr ? (typeof c == "function" && (yp(t, n, c, r), l = t.memoizedState), (s = kr || zg(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, mx(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : fn(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, typeof l == "object" && l !== null ? l = an(l) : (l = Tt(n) ? To : mt.current, l = Di(t, l));
    var p = n.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && Fg(t, a, r, l), kr = !1, f = t.memoizedState, a.state = f, Vu(t, r, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || Pt.current || kr ? (typeof p == "function" && (yp(t, n, p, r), y = t.memoizedState), (u = kr || zg(t, n, u, r, f, y, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return wp(e, t, n, r, i, o);
}
function wp(e, t, n, r, o, i) {
  Ux(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return o && Mg(t, n, !1), ur(e, t, i);
  r = t.stateNode, BT.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Fi(t, e.child, null, i), t.child = Fi(t, null, s, i)) : gt(e, t, s, i), t.memoizedState = r.state, o && Mg(t, n, !0), t.child;
}
function Hx(e) {
  var t = e.stateNode;
  t.pendingContext ? $g(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $g(e, t.context, !1), Gh(e, t.containerInfo);
}
function Kg(e, t, n, r, o) {
  return zi(), Lh(o), t.flags |= 256, gt(e, t, n, r), t.child;
}
var kp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gx(e, t, n) {
  var r = t.pendingProps, o = $e.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), xe($e, o & 1), e === null)
    return vp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = $c(a, r, 0, null), e = xo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Cp(n), t.memoizedState = kp, e) : em(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return VT(e, t, a, r, s, o, n);
  if (i) {
    i = r.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = jr(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = jr(s, i) : (i = xo(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? Cp(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = kp, r;
  }
  return i = e.child, e = i.sibling, r = jr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function em(e, t) {
  return t = $c({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Tl(e, t, n, r) {
  return r !== null && Lh(r), Fi(t, e.child, null, n), e = em(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function VT(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Hd(Error(I(422))), Tl(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = $c({ mode: "visible", children: r.children }, o, 0, null), i = xo(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Fi(t, e.child, null, a), t.child.memoizedState = Cp(a), t.memoizedState = kp, i);
  if (!(t.mode & 1))
    return Tl(e, t, a, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, i = Error(I(419)), r = Hd(i, r, void 0), Tl(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, _t || s) {
    if (r = Ze, r !== null) {
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
      o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, lr(e, o), gn(r, e, o, -1));
    }
    return am(), r = Hd(Error(I(421))), Tl(e, t, a, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = tE.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, zt = Ir(o.nextSibling), Ft = t, Ee = !0, hn = null, e !== null && (Zt[Jt++] = Zn, Zt[Jt++] = Jn, Zt[Jt++] = Eo, Zn = e.id, Jn = e.overflow, Eo = t), t = em(t, r.children), t.flags |= 4096, t);
}
function Yg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gp(e.return, t, n);
}
function Gd(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Kx(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (gt(e, t, r.children, n), r = $e.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Yg(e, n, t);
          else if (e.tag === 19)
            Yg(e, n, t);
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
  if (xe($e, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Wu(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Gd(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Wu(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        Gd(t, !0, n, null, i);
        break;
      case "together":
        Gd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function iu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ur(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), $o |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(I(153));
  if (t.child !== null) {
    for (e = t.child, n = jr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = jr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function WT(e, t, n) {
  switch (t.tag) {
    case 3:
      Hx(t), zi();
      break;
    case 5:
      xx(t);
      break;
    case 1:
      Tt(t.type) && Fu(t);
      break;
    case 4:
      Gh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      xe(Lu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (xe($e, $e.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gx(e, t, n) : (xe($e, $e.current & 1), e = ur(e, t, n), e !== null ? e.sibling : null);
      xe($e, $e.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Kx(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), xe($e, $e.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Wx(e, t, n);
  }
  return ur(e, t, n);
}
var Yx, _p, qx, Xx;
Yx = function(e, t) {
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
_p = function() {
};
qx = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ho(In.current);
    var i = null;
    switch (n) {
      case "input":
        o = Kf(e, o), r = Kf(e, r), i = [];
        break;
      case "select":
        o = Oe({}, o, { value: void 0 }), r = Oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Xf(e, o), r = Xf(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Du);
    }
    Zf(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (is.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (is.hasOwnProperty(u) ? (l != null && u === "onScroll" && ke("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Xx = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ma(e, t) {
  if (!Ee)
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
function dt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function UT(e, t, n) {
  var r = t.pendingProps;
  switch (Nh(t), t.tag) {
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
      return dt(t), null;
    case 1:
      return Tt(t.type) && zu(), dt(t), null;
    case 3:
      return r = t.stateNode, ji(), _e(Pt), _e(mt), Yh(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_l(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, hn !== null && (Op(hn), hn = null))), _p(e, t), dt(t), null;
    case 5:
      Kh(t);
      var o = ho(gs.current);
      if (n = t.type, e !== null && t.stateNode != null)
        qx(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(I(166));
          return dt(t), null;
        }
        if (e = ho(In.current), _l(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[An] = t, r[ms] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ea.length; o++)
                ke(Ea[o], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke(
                "error",
                r
              ), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              rg(r, i), ke("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ke("invalid", r);
              break;
            case "textarea":
              ig(r, i), ke("invalid", r);
          }
          Zf(n, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Cl(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Cl(
                r.textContent,
                s,
                e
              ), o = ["children", "" + s]) : is.hasOwnProperty(a) && s != null && a === "onScroll" && ke("scroll", r);
            }
          switch (n) {
            case "input":
              vl(r), og(r, i, !0);
              break;
            case "textarea":
              vl(r), ag(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Du);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = kb(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[An] = t, e[ms] = r, Yx(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Jf(n, r), n) {
              case "dialog":
                ke("cancel", e), ke("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ea.length; o++)
                  ke(Ea[o], e);
                o = r;
                break;
              case "source":
                ke("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  e
                ), ke("load", e), o = r;
                break;
              case "details":
                ke("toggle", e), o = r;
                break;
              case "input":
                rg(e, r), o = Kf(e, r), ke("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Oe({}, r, { value: void 0 }), ke("invalid", e);
                break;
              case "textarea":
                ig(e, r), o = Xf(e, r), ke("invalid", e);
                break;
              default:
                o = r;
            }
            Zf(n, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? Pb(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Cb(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && as(e, l) : typeof l == "number" && as(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (is.hasOwnProperty(i) ? l != null && i === "onScroll" && ke("scroll", e) : l != null && Ch(e, i, l, a));
              }
            switch (n) {
              case "input":
                vl(e), og(e, r, !1);
                break;
              case "textarea":
                vl(e), ag(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? xi(e, !!r.multiple, i, !1) : r.defaultValue != null && xi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Du);
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
      return dt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Xx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(I(166));
        if (n = ho(gs.current), ho(In.current), _l(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[An] = t, (i = r.nodeValue !== n) && (e = Ft, e !== null))
            switch (e.tag) {
              case 3:
                Cl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Cl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[An] = t, t.stateNode = r;
      }
      return dt(t), null;
    case 13:
      if (_e($e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ee && zt !== null && t.mode & 1 && !(t.flags & 128))
          px(), zi(), t.flags |= 98560, i = !1;
        else if (i = _l(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(I(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(I(317));
            i[An] = t;
          } else
            zi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          dt(t), i = !1;
        } else
          hn !== null && (Op(hn), hn = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $e.current & 1 ? Ge === 0 && (Ge = 3) : am())), t.updateQueue !== null && (t.flags |= 4), dt(t), null);
    case 4:
      return ji(), _p(e, t), e === null && ps(t.stateNode.containerInfo), dt(t), null;
    case 10:
      return Wh(t.type._context), dt(t), null;
    case 17:
      return Tt(t.type) && zu(), dt(t), null;
    case 19:
      if (_e($e), i = t.memoizedState, i === null)
        return dt(t), null;
      if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (r)
          ma(i, !1);
        else {
          if (Ge !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Wu(e), a !== null) {
                for (t.flags |= 128, ma(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return xe($e, $e.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Le() > Li && (t.flags |= 128, r = !0, ma(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Wu(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ma(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ee)
              return dt(t), null;
          } else
            2 * Le() - i.renderingStartTime > Li && n !== 1073741824 && (t.flags |= 128, r = !0, ma(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Le(), t.sibling = null, n = $e.current, xe($e, r ? n & 1 | 2 : n & 1), t) : (dt(t), null);
    case 22:
    case 23:
      return im(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Dt & 1073741824 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function HT(e, t) {
  switch (Nh(t), t.tag) {
    case 1:
      return Tt(t.type) && zu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ji(), _e(Pt), _e(mt), Yh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Kh(t), null;
    case 13:
      if (_e($e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(I(340));
        zi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return _e($e), null;
    case 4:
      return ji(), null;
    case 10:
      return Wh(t.type._context), null;
    case 22:
    case 23:
      return im(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var El = !1, pt = !1, GT = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function si(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ze(e, t, r);
      }
    else
      n.current = null;
}
function Pp(e, t, n) {
  try {
    n();
  } catch (r) {
    ze(e, t, r);
  }
}
var qg = !1;
function KT(e, t) {
  if (up = Ru, e = ex(), Fh(e)) {
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
  for (cp = { focusedElem: e, selectionRange: n }, Ru = !1, j = t; j !== null; )
    if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, j = e;
    else
      for (; j !== null; ) {
        t = j;
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
                  var g = y.memoizedProps, x = y.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : fn(t.type, g), x);
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
                throw Error(I(163));
            }
        } catch (S) {
          ze(t, t.return, S);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, j = e;
          break;
        }
        j = t.return;
      }
  return y = qg, qg = !1, y;
}
function Wa(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Pp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ec(e, t) {
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
function Tp(e) {
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
function Qx(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qx(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[An], delete t[ms], delete t[pp], delete t[AT], delete t[$T])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Zx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xg(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zx(e.return))
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
function Ep(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Du));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ep(e, t, n), e = e.sibling; e !== null; )
      Ep(e, t, n), e = e.sibling;
}
function Ap(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ap(e, t, n), e = e.sibling; e !== null; )
      Ap(e, t, n), e = e.sibling;
}
var ot = null, pn = !1;
function gr(e, t, n) {
  for (n = n.child; n !== null; )
    Jx(e, t, n), n = n.sibling;
}
function Jx(e, t, n) {
  if (On && typeof On.onCommitFiberUnmount == "function")
    try {
      On.onCommitFiberUnmount(xc, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      pt || si(n, t);
    case 6:
      var r = ot, o = pn;
      ot = null, gr(e, t, n), ot = r, pn = o, ot !== null && (pn ? (e = ot, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ot.removeChild(n.stateNode));
      break;
    case 18:
      ot !== null && (pn ? (e = ot, n = n.stateNode, e.nodeType === 8 ? Nd(e.parentNode, n) : e.nodeType === 1 && Nd(e, n), cs(e)) : Nd(ot, n.stateNode));
      break;
    case 4:
      r = ot, o = pn, ot = n.stateNode.containerInfo, pn = !0, gr(e, t, n), ot = r, pn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && Pp(n, t, a), o = o.next;
        } while (o !== r);
      }
      gr(e, t, n);
      break;
    case 1:
      if (!pt && (si(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          ze(n, t, s);
        }
      gr(e, t, n);
      break;
    case 21:
      gr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pt = (r = pt) || n.memoizedState !== null, gr(e, t, n), pt = r) : gr(e, t, n);
      break;
    default:
      gr(e, t, n);
  }
}
function Qg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new GT()), t.forEach(function(r) {
      var o = nE.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function cn(e, t) {
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
                ot = s.stateNode, pn = !1;
                break e;
              case 3:
                ot = s.stateNode.containerInfo, pn = !0;
                break e;
              case 4:
                ot = s.stateNode.containerInfo, pn = !0;
                break e;
            }
            s = s.return;
          }
        if (ot === null)
          throw Error(I(160));
        Jx(i, a, o), ot = null, pn = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        ze(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      eS(t, e), t = t.sibling;
}
function eS(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (cn(t, e), Sn(e), r & 4) {
        try {
          Wa(3, e, e.return), Ec(3, e);
        } catch (g) {
          ze(e, e.return, g);
        }
        try {
          Wa(5, e, e.return);
        } catch (g) {
          ze(e, e.return, g);
        }
      }
      break;
    case 1:
      cn(t, e), Sn(e), r & 512 && n !== null && si(n, n.return);
      break;
    case 5:
      if (cn(t, e), Sn(e), r & 512 && n !== null && si(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          as(o, "");
        } catch (g) {
          ze(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = n !== null ? n.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && Sb(o, i), Jf(s, a);
            var u = Jf(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? Pb(o, d) : c === "dangerouslySetInnerHTML" ? Cb(o, d) : c === "children" ? as(o, d) : Ch(o, c, d, u);
            }
            switch (s) {
              case "input":
                Yf(o, i);
                break;
              case "textarea":
                wb(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? xi(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? xi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : xi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ms] = i;
          } catch (g) {
            ze(e, e.return, g);
          }
      }
      break;
    case 6:
      if (cn(t, e), Sn(e), r & 4) {
        if (e.stateNode === null)
          throw Error(I(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          ze(e, e.return, g);
        }
      }
      break;
    case 3:
      if (cn(t, e), Sn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          cs(t.containerInfo);
        } catch (g) {
          ze(e, e.return, g);
        }
      break;
    case 4:
      cn(t, e), Sn(e);
      break;
    case 13:
      cn(t, e), Sn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (rm = Le())), r & 4 && Qg(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (pt = (u = pt) || c, cn(t, e), pt = u) : cn(t, e), Sn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (f = j, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wa(4, f, f.return);
                  break;
                case 1:
                  si(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = f, n = f.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (g) {
                      ze(r, n, g);
                    }
                  }
                  break;
                case 5:
                  si(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Jg(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, j = p) : Jg(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = _b("display", a));
                } catch (g) {
                  ze(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (g) {
                  ze(e, e.return, g);
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
      cn(t, e), Sn(e), r & 4 && Qg(e);
      break;
    case 21:
      break;
    default:
      cn(
        t,
        e
      ), Sn(e);
  }
}
function Sn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (as(o, ""), r.flags &= -33);
          var i = Xg(e);
          Ap(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = Xg(e);
          Ep(e, s, a);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      ze(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function YT(e, t, n) {
  j = e, tS(e);
}
function tS(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j, i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || El;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || pt;
        s = El;
        var u = pt;
        if (El = a, (pt = l) && !u)
          for (j = o; j !== null; )
            a = j, l = a.child, a.tag === 22 && a.memoizedState !== null ? e0(o) : l !== null ? (l.return = a, j = l) : e0(o);
        for (; i !== null; )
          j = i, tS(i), i = i.sibling;
        j = o, El = s, pt = u;
      }
      Zg(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : Zg(e);
  }
}
function Zg(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pt || Ec(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pt)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : fn(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Dg(t, i, r);
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
                Dg(t, a, n);
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
                    d !== null && cs(d);
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
              throw Error(I(163));
          }
        pt || t.flags & 512 && Tp(t);
      } catch (f) {
        ze(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function Jg(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, j = n;
      break;
    }
    j = t.return;
  }
}
function e0(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ec(4, t);
          } catch (l) {
            ze(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ze(t, o, l);
            }
          }
          var i = t.return;
          try {
            Tp(t);
          } catch (l) {
            ze(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Tp(t);
          } catch (l) {
            ze(t, a, l);
          }
      }
    } catch (l) {
      ze(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, j = s;
      break;
    }
    j = t.return;
  }
}
var qT = Math.ceil, Gu = pr.ReactCurrentDispatcher, tm = pr.ReactCurrentOwner, nn = pr.ReactCurrentBatchConfig, ae = 0, Ze = null, Ue = null, at = 0, Dt = 0, li = Yr(0), Ge = 0, Ss = null, $o = 0, Ac = 0, nm = 0, Ua = null, kt = null, rm = 0, Li = 1 / 0, Yn = null, Ku = !1, $p = null, zr = null, Al = !1, $r = null, Yu = 0, Ha = 0, Mp = null, au = -1, su = 0;
function bt() {
  return ae & 6 ? Le() : au !== -1 ? au : au = Le();
}
function Fr(e) {
  return e.mode & 1 ? ae & 2 && at !== 0 ? at & -at : RT.transition !== null ? (su === 0 && (su = jb()), su) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hb(e.type)), e) : 1;
}
function gn(e, t, n, r) {
  if (50 < Ha)
    throw Ha = 0, Mp = null, Error(I(185));
  Bs(e, n, r), (!(ae & 2) || e !== Ze) && (e === Ze && (!(ae & 2) && (Ac |= n), Ge === 4 && Pr(e, at)), Et(e, r), n === 1 && ae === 0 && !(t.mode & 1) && (Li = Le() + 500, _c && qr()));
}
function Et(e, t) {
  var n = e.callbackNode;
  R2(e, t);
  var r = Mu(e, e === Ze ? at : 0);
  if (r === 0)
    n !== null && ug(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ug(n), t === 1)
      e.tag === 0 ? MT(t0.bind(null, e)) : cx(t0.bind(null, e)), TT(function() {
        !(ae & 6) && qr();
      }), n = null;
    else {
      switch (Nb(r)) {
        case 1:
          n = Ah;
          break;
        case 4:
          n = zb;
          break;
        case 16:
          n = $u;
          break;
        case 536870912:
          n = Fb;
          break;
        default:
          n = $u;
      }
      n = uS(n, nS.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function nS(e, t) {
  if (au = -1, su = 0, ae & 6)
    throw Error(I(327));
  var n = e.callbackNode;
  if (_i() && e.callbackNode !== n)
    return null;
  var r = Mu(e, e === Ze ? at : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = qu(e, r);
  else {
    t = r;
    var o = ae;
    ae |= 2;
    var i = oS();
    (Ze !== e || at !== t) && (Yn = null, Li = Le() + 500, bo(e, t));
    do
      try {
        ZT();
        break;
      } catch (s) {
        rS(e, s);
      }
    while (!0);
    Vh(), Gu.current = i, ae = o, Ue !== null ? t = 0 : (Ze = null, at = 0, t = Ge);
  }
  if (t !== 0) {
    if (t === 2 && (o = op(e), o !== 0 && (r = o, t = Rp(e, o))), t === 1)
      throw n = Ss, bo(e, 0), Pr(e, r), Et(e, Le()), n;
    if (t === 6)
      Pr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !XT(o) && (t = qu(e, r), t === 2 && (i = op(e), i !== 0 && (r = i, t = Rp(e, i))), t === 1))
        throw n = Ss, bo(e, 0), Pr(e, r), Et(e, Le()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          io(e, kt, Yn);
          break;
        case 3:
          if (Pr(e, r), (r & 130023424) === r && (t = rm + 500 - Le(), 10 < t)) {
            if (Mu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              bt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = fp(io.bind(null, e, kt, Yn), t);
            break;
          }
          io(e, kt, Yn);
          break;
        case 4:
          if (Pr(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - vn(r);
            i = 1 << a, a = t[a], a > o && (o = a), r &= ~i;
          }
          if (r = o, r = Le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qT(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = fp(io.bind(null, e, kt, Yn), r);
            break;
          }
          io(e, kt, Yn);
          break;
        case 5:
          io(e, kt, Yn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Et(e, Le()), e.callbackNode === n ? nS.bind(null, e) : null;
}
function Rp(e, t) {
  var n = Ua;
  return e.current.memoizedState.isDehydrated && (bo(e, t).flags |= 256), e = qu(e, t), e !== 2 && (t = kt, kt = n, t !== null && Op(t)), e;
}
function Op(e) {
  kt === null ? kt = e : kt.push.apply(kt, e);
}
function XT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!bn(i(), o))
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
function Pr(e, t) {
  for (t &= ~nm, t &= ~Ac, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - vn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function t0(e) {
  if (ae & 6)
    throw Error(I(327));
  _i();
  var t = Mu(e, 0);
  if (!(t & 1))
    return Et(e, Le()), null;
  var n = qu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = op(e);
    r !== 0 && (t = r, n = Rp(e, r));
  }
  if (n === 1)
    throw n = Ss, bo(e, 0), Pr(e, t), Et(e, Le()), n;
  if (n === 6)
    throw Error(I(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, io(e, kt, Yn), Et(e, Le()), null;
}
function om(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = n, ae === 0 && (Li = Le() + 500, _c && qr());
  }
}
function Mo(e) {
  $r !== null && $r.tag === 0 && !(ae & 6) && _i();
  var t = ae;
  ae |= 1;
  var n = nn.transition, r = he;
  try {
    if (nn.transition = null, he = 1, e)
      return e();
  } finally {
    he = r, nn.transition = n, ae = t, !(ae & 6) && qr();
  }
}
function im() {
  Dt = li.current, _e(li);
}
function bo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, PT(n)), Ue !== null)
    for (n = Ue.return; n !== null; ) {
      var r = n;
      switch (Nh(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && zu();
          break;
        case 3:
          ji(), _e(Pt), _e(mt), Yh();
          break;
        case 5:
          Kh(r);
          break;
        case 4:
          ji();
          break;
        case 13:
          _e($e);
          break;
        case 19:
          _e($e);
          break;
        case 10:
          Wh(r.type._context);
          break;
        case 22:
        case 23:
          im();
      }
      n = n.return;
    }
  if (Ze = e, Ue = e = jr(e.current, null), at = Dt = t, Ge = 0, Ss = null, nm = Ac = $o = 0, kt = Ua = null, po !== null) {
    for (t = 0; t < po.length; t++)
      if (n = po[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, r.next = a;
        }
        n.pending = r;
      }
    po = null;
  }
  return e;
}
function rS(e, t) {
  do {
    var n = Ue;
    try {
      if (Vh(), ru.current = Hu, Uu) {
        for (var r = Re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Uu = !1;
      }
      if (Ao = 0, Xe = He = Re = null, Va = !1, ys = 0, tm.current = null, n === null || n.return === null) {
        Ge = 1, Ss = t, Ue = null;
        break;
      }
      e: {
        var i = e, a = n.return, s = n, l = t;
        if (t = at, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = Vg(a);
          if (p !== null) {
            p.flags &= -257, Wg(p, a, s, i, t), p.mode & 1 && Bg(i, u, t), t = p, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Bg(i, u, t), am();
              break e;
            }
            l = Error(I(426));
          }
        } else if (Ee && s.mode & 1) {
          var x = Vg(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Wg(x, a, s, i, t), Lh(Ni(l, s));
            break e;
          }
        }
        i = l = Ni(l, s), Ge !== 4 && (Ge = 2), Ua === null ? Ua = [i] : Ua.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Lx(i, l, t);
              Ig(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (zr === null || !zr.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Bx(i, s, t);
                Ig(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      aS(n);
    } catch (C) {
      t = C, Ue === n && n !== null && (Ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function oS() {
  var e = Gu.current;
  return Gu.current = Hu, e === null ? Hu : e;
}
function am() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Ze === null || !($o & 268435455) && !(Ac & 268435455) || Pr(Ze, at);
}
function qu(e, t) {
  var n = ae;
  ae |= 2;
  var r = oS();
  (Ze !== e || at !== t) && (Yn = null, bo(e, t));
  do
    try {
      QT();
      break;
    } catch (o) {
      rS(e, o);
    }
  while (!0);
  if (Vh(), ae = n, Gu.current = r, Ue !== null)
    throw Error(I(261));
  return Ze = null, at = 0, Ge;
}
function QT() {
  for (; Ue !== null; )
    iS(Ue);
}
function ZT() {
  for (; Ue !== null && !k2(); )
    iS(Ue);
}
function iS(e) {
  var t = lS(e.alternate, e, Dt);
  e.memoizedProps = e.pendingProps, t === null ? aS(e) : Ue = t, tm.current = null;
}
function aS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = HT(n, t), n !== null) {
        n.flags &= 32767, Ue = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ge = 6, Ue = null;
        return;
      }
    } else if (n = UT(n, t, Dt), n !== null) {
      Ue = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ue = t;
      return;
    }
    Ue = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function io(e, t, n) {
  var r = he, o = nn.transition;
  try {
    nn.transition = null, he = 1, JT(e, t, n, r);
  } finally {
    nn.transition = o, he = r;
  }
  return null;
}
function JT(e, t, n, r) {
  do
    _i();
  while ($r !== null);
  if (ae & 6)
    throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(I(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (O2(e, i), e === Ze && (Ue = Ze = null, at = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Al || (Al = !0, uS($u, function() {
    return _i(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = nn.transition, nn.transition = null;
    var a = he;
    he = 1;
    var s = ae;
    ae |= 4, tm.current = null, KT(e, n), eS(n, e), bT(cp), Ru = !!up, cp = up = null, e.current = n, YT(n), C2(), ae = s, he = a, nn.transition = i;
  } else
    e.current = n;
  if (Al && (Al = !1, $r = e, Yu = o), i = e.pendingLanes, i === 0 && (zr = null), T2(n.stateNode), Et(e, Le()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ku)
    throw Ku = !1, e = $p, $p = null, e;
  return Yu & 1 && e.tag !== 0 && _i(), i = e.pendingLanes, i & 1 ? e === Mp ? Ha++ : (Ha = 0, Mp = e) : Ha = 0, qr(), null;
}
function _i() {
  if ($r !== null) {
    var e = Nb(Yu), t = nn.transition, n = he;
    try {
      if (nn.transition = null, he = 16 > e ? 16 : e, $r === null)
        var r = !1;
      else {
        if (e = $r, $r = null, Yu = 0, ae & 6)
          throw Error(I(331));
        var o = ae;
        for (ae |= 4, j = e.current; j !== null; ) {
          var i = j, a = i.child;
          if (j.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wa(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, j = d;
                  else
                    for (; j !== null; ) {
                      c = j;
                      var f = c.sibling, p = c.return;
                      if (Qx(c), c === u) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, j = f;
                        break;
                      }
                      j = p;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var x = g.sibling;
                    g.sibling = null, g = x;
                  } while (g !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, j = a;
          else
            e:
              for (; j !== null; ) {
                if (i = j, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wa(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, j = m;
                  break e;
                }
                j = i.return;
              }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          a = j;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null)
            b.return = a, j = b;
          else
            e:
              for (a = h; j !== null; ) {
                if (s = j, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ec(9, s);
                    }
                  } catch (C) {
                    ze(s, s.return, C);
                  }
                if (s === a) {
                  j = null;
                  break e;
                }
                var S = s.sibling;
                if (S !== null) {
                  S.return = s.return, j = S;
                  break e;
                }
                j = s.return;
              }
        }
        if (ae = o, qr(), On && typeof On.onPostCommitFiberRoot == "function")
          try {
            On.onPostCommitFiberRoot(xc, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      he = n, nn.transition = t;
    }
  }
  return !1;
}
function n0(e, t, n) {
  t = Ni(n, t), t = Lx(e, t, 1), e = Dr(e, t, 1), t = bt(), e !== null && (Bs(e, 1, t), Et(e, t));
}
function ze(e, t, n) {
  if (e.tag === 3)
    n0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        n0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zr === null || !zr.has(r))) {
          e = Ni(n, e), e = Bx(t, e, 1), t = Dr(t, e, 1), e = bt(), t !== null && (Bs(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function eE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = bt(), e.pingedLanes |= e.suspendedLanes & n, Ze === e && (at & n) === n && (Ge === 4 || Ge === 3 && (at & 130023424) === at && 500 > Le() - rm ? bo(e, 0) : nm |= n), Et(e, t);
}
function sS(e, t) {
  t === 0 && (e.mode & 1 ? (t = bl, bl <<= 1, !(bl & 130023424) && (bl = 4194304)) : t = 1);
  var n = bt();
  e = lr(e, t), e !== null && (Bs(e, t, n), Et(e, n));
}
function tE(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), sS(e, n);
}
function nE(e, t) {
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
      throw Error(I(314));
  }
  r !== null && r.delete(t), sS(e, n);
}
var lS;
lS = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pt.current)
      _t = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return _t = !1, WT(e, t, n);
      _t = !!(e.flags & 131072);
    }
  else
    _t = !1, Ee && t.flags & 1048576 && dx(t, Nu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      iu(e, t), e = t.pendingProps;
      var o = Di(t, mt.current);
      Ci(t, n), o = Xh(null, t, r, e, o, n);
      var i = Qh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Tt(r) ? (i = !0, Fu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Hh(t), o.updater = Pc, t.stateNode = o, o._reactInternals = t, bp(t, r, e, n), t = wp(null, t, r, !0, i, n)) : (t.tag = 0, Ee && i && jh(t), gt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (iu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = oE(r), e = fn(r, e), o) {
          case 0:
            t = Sp(null, t, r, e, n);
            break e;
          case 1:
            t = Gg(null, t, r, e, n);
            break e;
          case 11:
            t = Ug(null, t, r, e, n);
            break e;
          case 14:
            t = Hg(null, t, r, fn(r.type, e), n);
            break e;
        }
        throw Error(I(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : fn(r, o), Sp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : fn(r, o), Gg(e, t, r, o, n);
    case 3:
      e: {
        if (Hx(t), e === null)
          throw Error(I(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, mx(e, t), Vu(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Ni(Error(I(423)), t), t = Kg(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Ni(Error(I(424)), t), t = Kg(e, t, r, n, o);
            break e;
          } else
            for (zt = Ir(t.stateNode.containerInfo.firstChild), Ft = t, Ee = !0, hn = null, n = bx(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (zi(), r === o) {
            t = ur(e, t, n);
            break e;
          }
          gt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xx(t), e === null && vp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, dp(r, o) ? a = null : i !== null && dp(r, i) && (t.flags |= 32), Ux(e, t), gt(e, t, a, n), t.child;
    case 6:
      return e === null && vp(t), null;
    case 13:
      return Gx(e, t, n);
    case 4:
      return Gh(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Fi(t, null, r, n) : gt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : fn(r, o), Ug(e, t, r, o, n);
    case 7:
      return gt(e, t, t.pendingProps, n), t.child;
    case 8:
      return gt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return gt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, xe(Lu, r._currentValue), r._currentValue = a, i !== null)
          if (bn(i.value, a)) {
            if (i.children === o.children && !Pt.current) {
              t = ur(e, t, n);
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
                      l = nr(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), gp(
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
                  throw Error(I(341));
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), gp(a, n, t), a = i.sibling;
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
        gt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Ci(t, n), o = an(o), r = r(o), t.flags |= 1, gt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = fn(r, t.pendingProps), o = fn(r.type, o), Hg(e, t, r, o, n);
    case 15:
      return Vx(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : fn(r, o), iu(e, t), t.tag = 1, Tt(r) ? (e = !0, Fu(t)) : e = !1, Ci(t, n), gx(t, r, o), bp(t, r, o, n), wp(null, t, r, !0, e, n);
    case 19:
      return Kx(e, t, n);
    case 22:
      return Wx(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function uS(e, t) {
  return Db(e, t);
}
function rE(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function en(e, t, n, r) {
  return new rE(e, t, n, r);
}
function sm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function oE(e) {
  if (typeof e == "function")
    return sm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ph)
      return 11;
    if (e === Th)
      return 14;
  }
  return 2;
}
function jr(e, t) {
  var n = e.alternate;
  return n === null ? (n = en(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function lu(e, t, n, r, o, i) {
  var a = 2;
  if (r = e, typeof e == "function")
    sm(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case Zo:
          return xo(n.children, o, i, t);
        case _h:
          a = 8, o |= 8;
          break;
        case Wf:
          return e = en(12, n, t, o | 2), e.elementType = Wf, e.lanes = i, e;
        case Uf:
          return e = en(13, n, t, o), e.elementType = Uf, e.lanes = i, e;
        case Hf:
          return e = en(19, n, t, o), e.elementType = Hf, e.lanes = i, e;
        case yb:
          return $c(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case vb:
                a = 10;
                break e;
              case gb:
                a = 9;
                break e;
              case Ph:
                a = 11;
                break e;
              case Th:
                a = 14;
                break e;
              case wr:
                a = 16, r = null;
                break e;
            }
          throw Error(I(130, e == null ? e : typeof e, ""));
      }
  return t = en(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function xo(e, t, n, r) {
  return e = en(7, e, r, t), e.lanes = n, e;
}
function $c(e, t, n, r) {
  return e = en(22, e, r, t), e.elementType = yb, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Kd(e, t, n) {
  return e = en(6, e, null, t), e.lanes = n, e;
}
function Yd(e, t, n) {
  return t = en(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function iE(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ed(0), this.expirationTimes = Ed(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ed(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function lm(e, t, n, r, o, i, a, s, l) {
  return e = new iE(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = en(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hh(i), e;
}
function aE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Qo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function cS(e) {
  if (!e)
    return Wr;
  e = e._reactInternals;
  e: {
    if (Do(e) !== e || e.tag !== 1)
      throw Error(I(170));
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
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Tt(n))
      return ux(e, n, t);
  }
  return t;
}
function dS(e, t, n, r, o, i, a, s, l) {
  return e = lm(n, r, !0, e, o, i, a, s, l), e.context = cS(null), n = e.current, r = bt(), o = Fr(n), i = nr(r, o), i.callback = t ?? null, Dr(n, i, o), e.current.lanes = o, Bs(e, o, r), Et(e, r), e;
}
function Mc(e, t, n, r) {
  var o = t.current, i = bt(), a = Fr(o);
  return n = cS(n), t.context === null ? t.context = n : t.pendingContext = n, t = nr(i, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dr(o, t, a), e !== null && (gn(e, o, a, i), nu(e, o, a)), a;
}
function Xu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function r0(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function um(e, t) {
  r0(e, t), (e = e.alternate) && r0(e, t);
}
function sE() {
  return null;
}
var fS = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function cm(e) {
  this._internalRoot = e;
}
Rc.prototype.render = cm.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(I(409));
  Mc(e, t, null, null);
};
Rc.prototype.unmount = cm.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mo(function() {
      Mc(null, e, null, null);
    }), t[sr] = null;
  }
};
function Rc(e) {
  this._internalRoot = e;
}
Rc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Vb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _r.length && t !== 0 && t < _r[n].priority; n++)
      ;
    _r.splice(n, 0, e), n === 0 && Ub(e);
  }
};
function dm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Oc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function o0() {
}
function lE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Xu(a);
        i.call(u);
      };
    }
    var a = dS(t, r, e, 0, null, !1, !1, "", o0);
    return e._reactRootContainer = a, e[sr] = a.current, ps(e.nodeType === 8 ? e.parentNode : e), Mo(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Xu(l);
      s.call(u);
    };
  }
  var l = lm(e, 0, !1, null, null, !1, !1, "", o0);
  return e._reactRootContainer = l, e[sr] = l.current, ps(e.nodeType === 8 ? e.parentNode : e), Mo(function() {
    Mc(t, l, n, r);
  }), l;
}
function Ic(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Xu(a);
        s.call(l);
      };
    }
    Mc(t, a, e, o);
  } else
    a = lE(n, t, e, o, r);
  return Xu(a);
}
Lb = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ta(t.pendingLanes);
        n !== 0 && ($h(t, n | 1), Et(t, Le()), !(ae & 6) && (Li = Le() + 500, qr()));
      }
      break;
    case 13:
      Mo(function() {
        var r = lr(e, 1);
        if (r !== null) {
          var o = bt();
          gn(r, e, 1, o);
        }
      }), um(e, 1);
  }
};
Mh = function(e) {
  if (e.tag === 13) {
    var t = lr(e, 134217728);
    if (t !== null) {
      var n = bt();
      gn(t, e, 134217728, n);
    }
    um(e, 134217728);
  }
};
Bb = function(e) {
  if (e.tag === 13) {
    var t = Fr(e), n = lr(e, t);
    if (n !== null) {
      var r = bt();
      gn(n, e, t, r);
    }
    um(e, t);
  }
};
Vb = function() {
  return he;
};
Wb = function(e, t) {
  var n = he;
  try {
    return he = e, t();
  } finally {
    he = n;
  }
};
tp = function(e, t, n) {
  switch (t) {
    case "input":
      if (Yf(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Cc(r);
            if (!o)
              throw Error(I(90));
            xb(r), Yf(r, o);
          }
        }
      }
      break;
    case "textarea":
      wb(e, n);
      break;
    case "select":
      t = n.value, t != null && xi(e, !!n.multiple, t, !1);
  }
};
Ab = om;
$b = Mo;
var uE = { usingClientEntryPoint: !1, Events: [Ws, ni, Cc, Tb, Eb, om] }, va = { findFiberByHostInstance: fo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, cE = { bundleType: va.bundleType, version: va.version, rendererPackageName: va.rendererPackageName, rendererConfig: va.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: pr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ob(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: va.findFiberByHostInstance || sE, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$l.isDisabled && $l.supportsFiber)
    try {
      xc = $l.inject(cE), On = $l;
    } catch {
    }
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uE;
Wt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dm(t))
    throw Error(I(200));
  return aE(e, t, null, n);
};
Wt.createRoot = function(e, t) {
  if (!dm(e))
    throw Error(I(299));
  var n = !1, r = "", o = fS;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = lm(e, 1, !1, null, null, n, !1, r, o), e[sr] = t.current, ps(e.nodeType === 8 ? e.parentNode : e), new cm(t);
};
Wt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
  return e = Ob(t), e = e === null ? null : e.stateNode, e;
};
Wt.flushSync = function(e) {
  return Mo(e);
};
Wt.hydrate = function(e, t, n) {
  if (!Oc(t))
    throw Error(I(200));
  return Ic(null, e, t, !0, n);
};
Wt.hydrateRoot = function(e, t, n) {
  if (!dm(e))
    throw Error(I(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", a = fS;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = dS(t, null, e, 1, n ?? null, o, !1, i, a), e[sr] = t.current, ps(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new Rc(t);
};
Wt.render = function(e, t, n) {
  if (!Oc(t))
    throw Error(I(200));
  return Ic(null, e, t, !1, n);
};
Wt.unmountComponentAtNode = function(e) {
  if (!Oc(e))
    throw Error(I(40));
  return e._reactRootContainer ? (Mo(function() {
    Ic(null, null, e, !1, function() {
      e._reactRootContainer = null, e[sr] = null;
    });
  }), !0) : !1;
};
Wt.unstable_batchedUpdates = om;
Wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oc(n))
    throw Error(I(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(I(38));
  return Ic(e, t, n, !1, r);
};
Wt.version = "18.2.0-next-9e3b772b8-20220608";
function pS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pS);
    } catch (e) {
      console.error(e);
    }
}
pS(), db.exports = Wt;
var fm = db.exports, i0 = fm;
Bf.createRoot = i0.createRoot, Bf.hydrateRoot = i0.hydrateRoot;
var hS = "Expected a function", a0 = NaN, dE = "[object Symbol]", fE = /^\s+|\s+$/g, pE = /^[-+]0x[0-9a-f]+$/i, hE = /^0b[01]+$/i, mE = /^0o[0-7]+$/i, vE = parseInt, gE = typeof Er == "object" && Er && Er.Object === Object && Er, yE = typeof self == "object" && self && self.Object === Object && self, bE = gE || yE || Function("return this")(), xE = Object.prototype, SE = xE.toString, wE = Math.max, kE = Math.min, qd = function() {
  return bE.Date.now();
};
function CE(e, t, n) {
  var r, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(hS);
  t = s0(t) || 0, Qu(n) && (c = !!n.leading, d = "maxWait" in n, i = d ? wE(s0(n.maxWait) || 0, t) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(P) {
    var _ = r, A = o;
    return r = o = void 0, u = P, a = e.apply(A, _), a;
  }
  function y(P) {
    return u = P, s = setTimeout(m, t), c ? p(P) : a;
  }
  function g(P) {
    var _ = P - l, A = P - u, M = t - _;
    return d ? kE(M, i - A) : M;
  }
  function x(P) {
    var _ = P - l, A = P - u;
    return l === void 0 || _ >= t || _ < 0 || d && A >= i;
  }
  function m() {
    var P = qd();
    if (x(P))
      return h(P);
    s = setTimeout(m, g(P));
  }
  function h(P) {
    return s = void 0, f && r ? p(P) : (r = o = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = o = s = void 0;
  }
  function S() {
    return s === void 0 ? a : h(qd());
  }
  function C() {
    var P = qd(), _ = x(P);
    if (r = arguments, o = this, l = P, _) {
      if (s === void 0)
        return y(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return C.cancel = b, C.flush = S, C;
}
function _E(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(hS);
  return Qu(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), CE(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
function Qu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function PE(e) {
  return !!e && typeof e == "object";
}
function TE(e) {
  return typeof e == "symbol" || PE(e) && SE.call(e) == dE;
}
function s0(e) {
  if (typeof e == "number")
    return e;
  if (TE(e))
    return a0;
  if (Qu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Qu(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(fE, "");
  var n = hE.test(e);
  return n || mE.test(e) ? vE(e.slice(2), n ? 2 : 8) : pE.test(e) ? a0 : +e;
}
var EE = _E;
const AE = /* @__PURE__ */ Ns(EE);
function $E(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ME(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var RE = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ME(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = $E(o);
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
}(), ft = "-ms-", Zu = "-moz-", ce = "-webkit-", mS = "comm", pm = "rule", hm = "decl", OE = "@import", vS = "@keyframes", IE = "@layer", DE = Math.abs, Dc = String.fromCharCode, zE = Object.assign;
function FE(e, t) {
  return it(e, 0) ^ 45 ? (((t << 2 ^ it(e, 0)) << 2 ^ it(e, 1)) << 2 ^ it(e, 2)) << 2 ^ it(e, 3) : 0;
}
function gS(e) {
  return e.trim();
}
function jE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function de(e, t, n) {
  return e.replace(t, n);
}
function Ip(e, t) {
  return e.indexOf(t);
}
function it(e, t) {
  return e.charCodeAt(t) | 0;
}
function ws(e, t, n) {
  return e.slice(t, n);
}
function Tn(e) {
  return e.length;
}
function mm(e) {
  return e.length;
}
function Ml(e, t) {
  return t.push(e), e;
}
function NE(e, t) {
  return e.map(t).join("");
}
var zc = 1, Bi = 1, yS = 0, Mt = 0, We = 0, ta = "";
function Fc(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: zc, column: Bi, length: a, return: "" };
}
function ga(e, t) {
  return zE(Fc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function LE() {
  return We;
}
function BE() {
  return We = Mt > 0 ? it(ta, --Mt) : 0, Bi--, We === 10 && (Bi = 1, zc--), We;
}
function jt() {
  return We = Mt < yS ? it(ta, Mt++) : 0, Bi++, We === 10 && (Bi = 1, zc++), We;
}
function Dn() {
  return it(ta, Mt);
}
function uu() {
  return Mt;
}
function Hs(e, t) {
  return ws(ta, e, t);
}
function ks(e) {
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
function bS(e) {
  return zc = Bi = 1, yS = Tn(ta = e), Mt = 0, [];
}
function xS(e) {
  return ta = "", e;
}
function cu(e) {
  return gS(Hs(Mt - 1, Dp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function VE(e) {
  for (; (We = Dn()) && We < 33; )
    jt();
  return ks(e) > 2 || ks(We) > 3 ? "" : " ";
}
function WE(e, t) {
  for (; --t && jt() && !(We < 48 || We > 102 || We > 57 && We < 65 || We > 70 && We < 97); )
    ;
  return Hs(e, uu() + (t < 6 && Dn() == 32 && jt() == 32));
}
function Dp(e) {
  for (; jt(); )
    switch (We) {
      case e:
        return Mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Dp(We);
        break;
      case 40:
        e === 41 && Dp(e);
        break;
      case 92:
        jt();
        break;
    }
  return Mt;
}
function UE(e, t) {
  for (; jt() && e + We !== 57; )
    if (e + We === 84 && Dn() === 47)
      break;
  return "/*" + Hs(t, Mt - 1) + "*" + Dc(e === 47 ? e : jt());
}
function HE(e) {
  for (; !ks(Dn()); )
    jt();
  return Hs(e, Mt);
}
function GE(e) {
  return xS(du("", null, null, null, [""], e = bS(e), 0, [0], e));
}
function du(e, t, n, r, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, y = 0, g = 1, x = 1, m = 1, h = 0, b = "", S = o, C = i, P = r, _ = b; x; )
    switch (y = h, h = jt()) {
      case 40:
        if (y != 108 && it(_, d - 1) == 58) {
          Ip(_ += de(cu(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += cu(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += VE(y);
        break;
      case 92:
        _ += WE(uu() - 1, 7);
        continue;
      case 47:
        switch (Dn()) {
          case 42:
          case 47:
            Ml(KE(UE(jt(), uu()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        s[u++] = Tn(_) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (_ = de(_, /\f/g, "")), p > 0 && Tn(_) - d && Ml(p > 32 ? u0(_ + ";", r, n, d - 1) : u0(de(_, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (Ml(P = l0(_, t, n, u, c, o, s, b, S = [], C = [], d), i), h === 123)
              if (c === 0)
                du(_, t, P, P, S, i, d, s, C);
              else
                switch (f === 99 && it(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    du(e, P, P, r && Ml(l0(e, P, P, 0, 0, o, s, b, o, S = [], d), C), o, C, d, s, r ? S : C);
                    break;
                  default:
                    du(_, P, P, P, [""], C, 0, s, C);
                }
        }
        u = c = p = 0, g = m = 1, b = _ = "", d = a;
        break;
      case 58:
        d = 1 + Tn(_), p = y;
      default:
        if (g < 1) {
          if (h == 123)
            --g;
          else if (h == 125 && g++ == 0 && BE() == 125)
            continue;
        }
        switch (_ += Dc(h), h * g) {
          case 38:
            m = c > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[u++] = (Tn(_) - 1) * m, m = 1;
            break;
          case 64:
            Dn() === 45 && (_ += cu(jt())), f = Dn(), c = d = Tn(b = _ += HE(uu())), h++;
            break;
          case 45:
            y === 45 && Tn(_) == 2 && (g = 0);
        }
    }
  return i;
}
function l0(e, t, n, r, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = mm(f), y = 0, g = 0, x = 0; y < r; ++y)
    for (var m = 0, h = ws(e, d + 1, d = DE(g = a[y])), b = e; m < p; ++m)
      (b = gS(g > 0 ? f[m] + " " + h : de(h, /&\f/g, f[m]))) && (l[x++] = b);
  return Fc(e, t, n, o === 0 ? pm : s, l, u, c);
}
function KE(e, t, n) {
  return Fc(e, t, n, mS, Dc(LE()), ws(e, 2, -2), 0);
}
function u0(e, t, n, r) {
  return Fc(e, t, n, hm, ws(e, 0, r), ws(e, r + 1, -1), r);
}
function Pi(e, t) {
  for (var n = "", r = mm(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function YE(e, t, n, r) {
  switch (e.type) {
    case IE:
      if (e.children.length)
        break;
    case OE:
    case hm:
      return e.return = e.return || e.value;
    case mS:
      return "";
    case vS:
      return e.return = e.value + "{" + Pi(e.children, r) + "}";
    case pm:
      e.value = e.props.join(",");
  }
  return Tn(n = Pi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function qE(e) {
  var t = mm(e);
  return function(n, r, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, o, i) || "";
    return a;
  };
}
function XE(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var c0 = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function SS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var QE = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Dn(), o === 38 && i === 12 && (n[r] = 1), !ks(i); )
    jt();
  return Hs(t, Mt);
}, ZE = function(t, n) {
  var r = -1, o = 44;
  do
    switch (ks(o)) {
      case 0:
        o === 38 && Dn() === 12 && (n[r] = 1), t[r] += QE(Mt - 1, n, r);
        break;
      case 2:
        t[r] += cu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Dn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Dc(o);
    }
  while (o = jt());
  return t;
}, JE = function(t, n) {
  return xS(ZE(bS(t), n));
}, d0 = /* @__PURE__ */ new WeakMap(), eA = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !d0.get(r)) && !o) {
      d0.set(t, !0);
      for (var i = [], a = JE(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, tA = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function wS(e, t) {
  switch (FE(e, t)) {
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
      return ce + e + Zu + e + ft + e + e;
    case 6828:
    case 4268:
      return ce + e + ft + e + e;
    case 6165:
      return ce + e + ft + "flex-" + e + e;
    case 5187:
      return ce + e + de(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + ft + "flex-$1$2") + e;
    case 5443:
      return ce + e + ft + "flex-item-" + de(e, /flex-|-self/, "") + e;
    case 4675:
      return ce + e + ft + "flex-line-pack" + de(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ce + e + ft + de(e, "shrink", "negative") + e;
    case 5292:
      return ce + e + ft + de(e, "basis", "preferred-size") + e;
    case 6060:
      return ce + "box-" + de(e, "-grow", "") + ce + e + ft + de(e, "grow", "positive") + e;
    case 4554:
      return ce + de(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    case 6187:
      return de(de(de(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return de(e, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return de(de(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + e + e;
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
      if (Tn(e) - 1 - t > 6)
        switch (it(e, t + 1)) {
          case 109:
            if (it(e, t + 4) !== 45)
              break;
          case 102:
            return de(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + Zu + (it(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ip(e, "stretch") ? wS(de(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (it(e, t + 1) !== 115)
        break;
    case 6444:
      switch (it(e, Tn(e) - 3 - (~Ip(e, "!important") && 10))) {
        case 107:
          return de(e, ":", ":" + ce) + e;
        case 101:
          return de(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (it(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (it(e, t + 11)) {
        case 114:
          return ce + e + ft + de(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ce + e + ft + de(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ce + e + ft + de(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ce + e + ft + e + e;
  }
  return e;
}
var nA = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hm:
        t.return = wS(t.value, t.length);
        break;
      case vS:
        return Pi([ga(t, {
          value: de(t.value, "@", "@" + ce)
        })], o);
      case pm:
        if (t.length)
          return NE(t.props, function(i) {
            switch (jE(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Pi([ga(t, {
                  props: [de(i, /:(read-\w+)/, ":" + Zu + "$1")]
                })], o);
              case "::placeholder":
                return Pi([ga(t, {
                  props: [de(i, /:(plac\w+)/, ":" + ce + "input-$1")]
                }), ga(t, {
                  props: [de(i, /:(plac\w+)/, ":" + Zu + "$1")]
                }), ga(t, {
                  props: [de(i, /:(plac\w+)/, ft + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, rA = [nA], oA = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var x = g.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || rA, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var x = g.getAttribute("data-emotion").split(" "), m = 1; m < x.length; m++)
        i[x[m]] = !0;
      s.push(g);
    }
  );
  var l, u = [eA, tA];
  {
    var c, d = [YE, XE(function(g) {
      c.insert(g);
    })], f = qE(u.concat(o, d)), p = function(x) {
      return Pi(GE(x), f);
    };
    l = function(x, m, h, b) {
      c = h, p(x ? x + "{" + m.styles + "}" : m.styles), b && (y.inserted[m.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new RE({
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
function Ro() {
  return Ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ro.apply(this, arguments);
}
var kS = { exports: {} }, me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je = typeof Symbol == "function" && Symbol.for, vm = Je ? Symbol.for("react.element") : 60103, gm = Je ? Symbol.for("react.portal") : 60106, jc = Je ? Symbol.for("react.fragment") : 60107, Nc = Je ? Symbol.for("react.strict_mode") : 60108, Lc = Je ? Symbol.for("react.profiler") : 60114, Bc = Je ? Symbol.for("react.provider") : 60109, Vc = Je ? Symbol.for("react.context") : 60110, ym = Je ? Symbol.for("react.async_mode") : 60111, Wc = Je ? Symbol.for("react.concurrent_mode") : 60111, Uc = Je ? Symbol.for("react.forward_ref") : 60112, Hc = Je ? Symbol.for("react.suspense") : 60113, iA = Je ? Symbol.for("react.suspense_list") : 60120, Gc = Je ? Symbol.for("react.memo") : 60115, Kc = Je ? Symbol.for("react.lazy") : 60116, aA = Je ? Symbol.for("react.block") : 60121, sA = Je ? Symbol.for("react.fundamental") : 60117, lA = Je ? Symbol.for("react.responder") : 60118, uA = Je ? Symbol.for("react.scope") : 60119;
function Ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case vm:
        switch (e = e.type, e) {
          case ym:
          case Wc:
          case jc:
          case Lc:
          case Nc:
          case Hc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Vc:
              case Uc:
              case Kc:
              case Gc:
              case Bc:
                return e;
              default:
                return t;
            }
        }
      case gm:
        return t;
    }
  }
}
function CS(e) {
  return Ht(e) === Wc;
}
me.AsyncMode = ym;
me.ConcurrentMode = Wc;
me.ContextConsumer = Vc;
me.ContextProvider = Bc;
me.Element = vm;
me.ForwardRef = Uc;
me.Fragment = jc;
me.Lazy = Kc;
me.Memo = Gc;
me.Portal = gm;
me.Profiler = Lc;
me.StrictMode = Nc;
me.Suspense = Hc;
me.isAsyncMode = function(e) {
  return CS(e) || Ht(e) === ym;
};
me.isConcurrentMode = CS;
me.isContextConsumer = function(e) {
  return Ht(e) === Vc;
};
me.isContextProvider = function(e) {
  return Ht(e) === Bc;
};
me.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vm;
};
me.isForwardRef = function(e) {
  return Ht(e) === Uc;
};
me.isFragment = function(e) {
  return Ht(e) === jc;
};
me.isLazy = function(e) {
  return Ht(e) === Kc;
};
me.isMemo = function(e) {
  return Ht(e) === Gc;
};
me.isPortal = function(e) {
  return Ht(e) === gm;
};
me.isProfiler = function(e) {
  return Ht(e) === Lc;
};
me.isStrictMode = function(e) {
  return Ht(e) === Nc;
};
me.isSuspense = function(e) {
  return Ht(e) === Hc;
};
me.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === jc || e === Wc || e === Lc || e === Nc || e === Hc || e === iA || typeof e == "object" && e !== null && (e.$$typeof === Kc || e.$$typeof === Gc || e.$$typeof === Bc || e.$$typeof === Vc || e.$$typeof === Uc || e.$$typeof === sA || e.$$typeof === lA || e.$$typeof === uA || e.$$typeof === aA);
};
me.typeOf = Ht;
kS.exports = me;
var cA = kS.exports, _S = cA, dA = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, fA = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, PS = {};
PS[_S.ForwardRef] = dA;
PS[_S.Memo] = fA;
var pA = !0;
function hA(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " ";
  }), r;
}
var TS = function(t, n, r) {
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
  pA === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, ES = function(t, n, r) {
  TS(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function mA(e) {
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
var vA = {
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
}, gA = /[A-Z]|^ms/g, yA = /_EMO_([^_]+?)_([^]*?)_EMO_/g, AS = function(t) {
  return t.charCodeAt(1) === 45;
}, f0 = function(t) {
  return t != null && typeof t != "boolean";
}, Xd = /* @__PURE__ */ SS(function(e) {
  return AS(e) ? e : e.replace(gA, "-$&").toLowerCase();
}), p0 = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(yA, function(r, o, i) {
          return En = {
            name: o,
            styles: i,
            next: En
          }, o;
        });
  }
  return vA[t] !== 1 && !AS(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Cs(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return En = {
          name: n.name,
          styles: n.styles,
          next: En
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            En = {
              name: r.name,
              styles: r.styles,
              next: En
            }, r = r.next;
        var o = n.styles + ";";
        return o;
      }
      return bA(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = En, a = n(e);
        return En = i, Cs(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function bA(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Cs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : f0(a) && (r += Xd(i) + ":" + p0(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          f0(a[s]) && (r += Xd(i) + ":" + p0(i, a[s]) + ";");
      else {
        var l = Cs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Xd(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var h0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g, En, bm = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  En = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += Cs(r, n, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += Cs(r, n, t[s]), o && (i += a[s]);
  h0.lastIndex = 0;
  for (var l = "", u; (u = h0.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = mA(i) + l;
  return {
    name: c,
    styles: i,
    next: En
  };
}, xA = function(t) {
  return t();
}, $S = Jv.useInsertionEffect ? Jv.useInsertionEffect : !1, SA = $S || xA, m0 = $S || v.useLayoutEffect, MS = /* @__PURE__ */ v.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ oA({
    key: "css"
  }) : null
);
MS.Provider;
var RS = function(t) {
  return /* @__PURE__ */ v.forwardRef(function(n, r) {
    var o = v.useContext(MS);
    return t(n, o, r);
  });
}, _s = /* @__PURE__ */ v.createContext({}), wA = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return Ro({}, t, n);
}, kA = /* @__PURE__ */ c0(function(e) {
  return c0(function(t) {
    return wA(e, t);
  });
}), CA = function(t) {
  var n = v.useContext(_s);
  return t.theme !== n && (n = kA(n)(t.theme)), /* @__PURE__ */ v.createElement(_s.Provider, {
    value: n
  }, t.children);
}, Yc = /* @__PURE__ */ RS(function(e, t) {
  var n = e.styles, r = bm([n], void 0, v.useContext(_s)), o = v.useRef();
  return m0(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), m0(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && ES(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function _A() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return bm(t);
}
var PA = function() {
  var t = _A.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, OS = String.raw, IS = OS`
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
`, TA = () => /* @__PURE__ */ k.jsx(Yc, { styles: IS }), EA = ({ scope: e = "" }) => /* @__PURE__ */ k.jsx(
  Yc,
  {
    styles: OS`
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

      ${IS}
    `
  }
);
function AA(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ke(e = {}) {
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
        i ?? AA(r, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [$A, MA] = Ke({
  strict: !1,
  name: "PortalManagerContext"
});
function DS(e) {
  const { children: t, zIndex: n } = e;
  return /* @__PURE__ */ k.jsx($A, { value: { zIndex: n }, children: t });
}
DS.displayName = "PortalManager";
var Ps = globalThis != null && globalThis.document ? v.useLayoutEffect : v.useEffect, [zS, RA] = Ke({
  strict: !1,
  name: "PortalContext"
}), xm = "chakra-portal", OA = ".chakra-portal", IA = (e) => /* @__PURE__ */ k.jsx(
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
), DA = (e) => {
  const { appendToParentPortal: t, children: n } = e, [r, o] = v.useState(null), i = v.useRef(null), [, a] = v.useState({});
  v.useEffect(() => a({}), []);
  const s = RA(), l = MA();
  Ps(() => {
    if (!r)
      return;
    const c = r.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = xm, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [r]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ k.jsx(IA, { zIndex: l == null ? void 0 : l.zIndex, children: n }) : n;
  return i.current ? fm.createPortal(
    /* @__PURE__ */ k.jsx(zS, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ k.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, zA = (e) => {
  const { children: t, containerRef: n, appendToParentPortal: r } = e, o = n.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = v.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = xm), l;
  }, [o]), [, s] = v.useState({});
  return Ps(() => s({}), []), Ps(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? fm.createPortal(
    /* @__PURE__ */ k.jsx(zS, { value: r ? a : null, children: t }),
    a
  ) : null;
};
function Gs(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: n, ...r } = t;
  return n ? /* @__PURE__ */ k.jsx(zA, { containerRef: n, ...r }) : /* @__PURE__ */ k.jsx(DA, { ...r });
}
Gs.className = xm;
Gs.selector = OA;
Gs.displayName = "Portal";
function qc() {
  const e = v.useContext(
    _s
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Sm = v.createContext({});
Sm.displayName = "ColorModeContext";
function Ks() {
  const e = v.useContext(Sm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var Rl = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function FA(e = {}) {
  const { preventTransition: t = !0 } = e, n = {
    setDataset: (r) => {
      const o = t ? n.preventTransition() : void 0;
      document.documentElement.dataset.theme = r, document.documentElement.style.colorScheme = r, o == null || o();
    },
    setClassName(r) {
      document.body.classList.add(r ? Rl.dark : Rl.light), document.body.classList.remove(r ? Rl.light : Rl.dark);
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
var jA = "chakra-ui-color-mode";
function NA(e) {
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
var LA = NA(jA), v0 = () => {
};
function g0(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function FS(e) {
  const {
    value: t,
    children: n,
    options: {
      useSystemColorMode: r,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = LA
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = v.useState(
    () => g0(a, s)
  ), [c, d] = v.useState(
    () => g0(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: y, addListener: g } = v.useMemo(
    () => FA({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, m = v.useCallback(
    (S) => {
      const C = S === "system" ? f() : S;
      u(C), p(C === "dark"), y(C), a.set(C);
    },
    [a, f, p, y]
  );
  Ps(() => {
    o === "system" && d(f());
  }, []), v.useEffect(() => {
    const S = a.get();
    if (S) {
      m(S);
      return;
    }
    if (o === "system") {
      m("system");
      return;
    }
    m(s);
  }, [a, s, o, m]);
  const h = v.useCallback(() => {
    m(x === "dark" ? "light" : "dark");
  }, [x, m]);
  v.useEffect(() => {
    if (r)
      return g(m);
  }, [r, g, m]);
  const b = v.useMemo(
    () => ({
      colorMode: t ?? x,
      toggleColorMode: t ? v0 : h,
      setColorMode: t ? v0 : m,
      forced: t !== void 0
    }),
    [x, h, m, t]
  );
  return /* @__PURE__ */ k.jsx(Sm.Provider, { value: b, children: n });
}
FS.displayName = "ColorModeProvider";
var BA = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function VA(e) {
  let t = e;
  return BA.has(t) || (t = "light"), t;
}
function WA(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = VA(t), i = n === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function UA(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ k.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: WA(e) }
    }
  );
}
function HA() {
  const e = Ks(), t = qc();
  return { ...e, theme: t };
}
var J = (...e) => e.filter(Boolean).join(" ");
function GA() {
  return !1;
}
function rn(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var Ys = (e) => {
  const { condition: t, message: n } = e;
  t && GA() && console.warn(n);
};
function Rn(e, ...t) {
  return KA(e) ? e(...t) : e;
}
var KA = (e) => typeof e == "function", Qt = (e) => e ? "" : void 0, Qd = (e) => e ? !0 : void 0;
function Ae(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function jS(...e) {
  return function(n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var Ju = { exports: {} };
Ju.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", y = "[object GeneratorFunction]", g = "[object Map]", x = "[object Number]", m = "[object Null]", h = "[object Object]", b = "[object Proxy]", S = "[object RegExp]", C = "[object Set]", P = "[object String]", _ = "[object Undefined]", A = "[object WeakMap]", M = "[object ArrayBuffer]", R = "[object DataView]", z = "[object Float32Array]", Q = "[object Float64Array]", G = "[object Int8Array]", K = "[object Int16Array]", X = "[object Int32Array]", q = "[object Uint8Array]", O = "[object Uint8ClampedArray]", D = "[object Uint16Array]", N = "[object Uint32Array]", V = /[\\^$.*+?()[\]{}|]/g, L = /^\[object .+?Constructor\]$/, ee = /^(?:0|[1-9]\d*)$/, B = {};
  B[z] = B[Q] = B[G] = B[K] = B[X] = B[q] = B[O] = B[D] = B[N] = !0, B[s] = B[l] = B[M] = B[c] = B[R] = B[d] = B[f] = B[p] = B[g] = B[x] = B[h] = B[S] = B[C] = B[P] = B[A] = !1;
  var Z = typeof Er == "object" && Er && Er.Object === Object && Er, ve = typeof self == "object" && self && self.Object === Object && self, le = Z || ve || Function("return this")(), ye = t && !t.nodeType && t, be = ye && !0 && e && !e.nodeType && e, Ie = be && be.exports === ye, et = Ie && Z.process, tt = function() {
    try {
      var w = be && be.require && be.require("util").types;
      return w || et && et.binding && et.binding("util");
    } catch {
    }
  }(), Un = tt && tt.isTypedArray;
  function Hn(w, T, $) {
    switch ($.length) {
      case 0:
        return w.call(T);
      case 1:
        return w.call(T, $[0]);
      case 2:
        return w.call(T, $[0], $[1]);
      case 3:
        return w.call(T, $[0], $[1], $[2]);
    }
    return w.apply(T, $);
  }
  function oa(w, T) {
    for (var $ = -1, F = Array(w); ++$ < w; )
      F[$] = T($);
    return F;
  }
  function se(w) {
    return function(T) {
      return w(T);
    };
  }
  function lt(w, T) {
    return w == null ? void 0 : w[T];
  }
  function Ne(w, T) {
    return function($) {
      return w(T($));
    };
  }
  var Ot = Array.prototype, mr = Function.prototype, ut = Object.prototype, xn = le["__core-js_shared__"], vr = mr.toString, Gt = ut.hasOwnProperty, Bo = function() {
    var w = /[^.]+$/.exec(xn && xn.keys && xn.keys.IE_PROTO || "");
    return w ? "Symbol(src)_1." + w : "";
  }(), ia = ut.toString, sl = vr.call(Object), ll = RegExp(
    "^" + vr.call(Gt).replace(V, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Zr = Ie ? le.Buffer : void 0, Ov = le.Symbol, Iv = le.Uint8Array, Dv = Zr ? Zr.allocUnsafe : void 0, zv = Ne(Object.getPrototypeOf, Object), Fv = Object.create, z_ = ut.propertyIsEnumerable, F_ = Ot.splice, Jr = Ov ? Ov.toStringTag : void 0, ul = function() {
    try {
      var w = md(Object, "defineProperty");
      return w({}, "", {}), w;
    } catch {
    }
  }(), j_ = Zr ? Zr.isBuffer : void 0, jv = Math.max, N_ = Date.now, Nv = md(le, "Map"), aa = md(Object, "create"), L_ = /* @__PURE__ */ function() {
    function w() {
    }
    return function(T) {
      if (!to(T))
        return {};
      if (Fv)
        return Fv(T);
      w.prototype = T;
      var $ = new w();
      return w.prototype = void 0, $;
    };
  }();
  function eo(w) {
    var T = -1, $ = w == null ? 0 : w.length;
    for (this.clear(); ++T < $; ) {
      var F = w[T];
      this.set(F[0], F[1]);
    }
  }
  function B_() {
    this.__data__ = aa ? aa(null) : {}, this.size = 0;
  }
  function V_(w) {
    var T = this.has(w) && delete this.__data__[w];
    return this.size -= T ? 1 : 0, T;
  }
  function W_(w) {
    var T = this.__data__;
    if (aa) {
      var $ = T[w];
      return $ === r ? void 0 : $;
    }
    return Gt.call(T, w) ? T[w] : void 0;
  }
  function U_(w) {
    var T = this.__data__;
    return aa ? T[w] !== void 0 : Gt.call(T, w);
  }
  function H_(w, T) {
    var $ = this.__data__;
    return this.size += this.has(w) ? 0 : 1, $[w] = aa && T === void 0 ? r : T, this;
  }
  eo.prototype.clear = B_, eo.prototype.delete = V_, eo.prototype.get = W_, eo.prototype.has = U_, eo.prototype.set = H_;
  function Gn(w) {
    var T = -1, $ = w == null ? 0 : w.length;
    for (this.clear(); ++T < $; ) {
      var F = w[T];
      this.set(F[0], F[1]);
    }
  }
  function G_() {
    this.__data__ = [], this.size = 0;
  }
  function K_(w) {
    var T = this.__data__, $ = cl(T, w);
    if ($ < 0)
      return !1;
    var F = T.length - 1;
    return $ == F ? T.pop() : F_.call(T, $, 1), --this.size, !0;
  }
  function Y_(w) {
    var T = this.__data__, $ = cl(T, w);
    return $ < 0 ? void 0 : T[$][1];
  }
  function q_(w) {
    return cl(this.__data__, w) > -1;
  }
  function X_(w, T) {
    var $ = this.__data__, F = cl($, w);
    return F < 0 ? (++this.size, $.push([w, T])) : $[F][1] = T, this;
  }
  Gn.prototype.clear = G_, Gn.prototype.delete = K_, Gn.prototype.get = Y_, Gn.prototype.has = q_, Gn.prototype.set = X_;
  function Vo(w) {
    var T = -1, $ = w == null ? 0 : w.length;
    for (this.clear(); ++T < $; ) {
      var F = w[T];
      this.set(F[0], F[1]);
    }
  }
  function Q_() {
    this.size = 0, this.__data__ = {
      hash: new eo(),
      map: new (Nv || Gn)(),
      string: new eo()
    };
  }
  function Z_(w) {
    var T = fl(this, w).delete(w);
    return this.size -= T ? 1 : 0, T;
  }
  function J_(w) {
    return fl(this, w).get(w);
  }
  function eP(w) {
    return fl(this, w).has(w);
  }
  function tP(w, T) {
    var $ = fl(this, w), F = $.size;
    return $.set(w, T), this.size += $.size == F ? 0 : 1, this;
  }
  Vo.prototype.clear = Q_, Vo.prototype.delete = Z_, Vo.prototype.get = J_, Vo.prototype.has = eP, Vo.prototype.set = tP;
  function Wo(w) {
    var T = this.__data__ = new Gn(w);
    this.size = T.size;
  }
  function nP() {
    this.__data__ = new Gn(), this.size = 0;
  }
  function rP(w) {
    var T = this.__data__, $ = T.delete(w);
    return this.size = T.size, $;
  }
  function oP(w) {
    return this.__data__.get(w);
  }
  function iP(w) {
    return this.__data__.has(w);
  }
  function aP(w, T) {
    var $ = this.__data__;
    if ($ instanceof Gn) {
      var F = $.__data__;
      if (!Nv || F.length < n - 1)
        return F.push([w, T]), this.size = ++$.size, this;
      $ = this.__data__ = new Vo(F);
    }
    return $.set(w, T), this.size = $.size, this;
  }
  Wo.prototype.clear = nP, Wo.prototype.delete = rP, Wo.prototype.get = oP, Wo.prototype.has = iP, Wo.prototype.set = aP;
  function sP(w, T) {
    var $ = yd(w), F = !$ && gd(w), ie = !$ && !F && Uv(w), ge = !$ && !F && !ie && Gv(w), Pe = $ || F || ie || ge, re = Pe ? oa(w.length, String) : [], Te = re.length;
    for (var Kt in w)
      (T || Gt.call(w, Kt)) && !(Pe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Kt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ie && (Kt == "offset" || Kt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ge && (Kt == "buffer" || Kt == "byteLength" || Kt == "byteOffset") || // Skip index properties.
      Vv(Kt, Te))) && re.push(Kt);
    return re;
  }
  function pd(w, T, $) {
    ($ !== void 0 && !pl(w[T], $) || $ === void 0 && !(T in w)) && hd(w, T, $);
  }
  function lP(w, T, $) {
    var F = w[T];
    (!(Gt.call(w, T) && pl(F, $)) || $ === void 0 && !(T in w)) && hd(w, T, $);
  }
  function cl(w, T) {
    for (var $ = w.length; $--; )
      if (pl(w[$][0], T))
        return $;
    return -1;
  }
  function hd(w, T, $) {
    T == "__proto__" && ul ? ul(w, T, {
      configurable: !0,
      enumerable: !0,
      value: $,
      writable: !0
    }) : w[T] = $;
  }
  var uP = wP();
  function dl(w) {
    return w == null ? w === void 0 ? _ : m : Jr && Jr in Object(w) ? kP(w) : AP(w);
  }
  function Lv(w) {
    return sa(w) && dl(w) == s;
  }
  function cP(w) {
    if (!to(w) || TP(w))
      return !1;
    var T = xd(w) ? ll : L;
    return T.test(OP(w));
  }
  function dP(w) {
    return sa(w) && Hv(w.length) && !!B[dl(w)];
  }
  function fP(w) {
    if (!to(w))
      return EP(w);
    var T = Wv(w), $ = [];
    for (var F in w)
      F == "constructor" && (T || !Gt.call(w, F)) || $.push(F);
    return $;
  }
  function Bv(w, T, $, F, ie) {
    w !== T && uP(T, function(ge, Pe) {
      if (ie || (ie = new Wo()), to(ge))
        pP(w, T, Pe, $, Bv, F, ie);
      else {
        var re = F ? F(vd(w, Pe), ge, Pe + "", w, T, ie) : void 0;
        re === void 0 && (re = ge), pd(w, Pe, re);
      }
    }, Kv);
  }
  function pP(w, T, $, F, ie, ge, Pe) {
    var re = vd(w, $), Te = vd(T, $), Kt = Pe.get(Te);
    if (Kt) {
      pd(w, $, Kt);
      return;
    }
    var It = ge ? ge(re, Te, $ + "", w, T, Pe) : void 0, la = It === void 0;
    if (la) {
      var Sd = yd(Te), wd = !Sd && Uv(Te), qv = !Sd && !wd && Gv(Te);
      It = Te, Sd || wd || qv ? yd(re) ? It = re : IP(re) ? It = bP(re) : wd ? (la = !1, It = vP(Te, !0)) : qv ? (la = !1, It = yP(Te, !0)) : It = [] : DP(Te) || gd(Te) ? (It = re, gd(re) ? It = zP(re) : (!to(re) || xd(re)) && (It = CP(Te))) : la = !1;
    }
    la && (Pe.set(Te, It), ie(It, Te, F, ge, Pe), Pe.delete(Te)), pd(w, $, It);
  }
  function hP(w, T) {
    return MP($P(w, T, Yv), w + "");
  }
  var mP = ul ? function(w, T) {
    return ul(w, "toString", {
      configurable: !0,
      enumerable: !1,
      value: jP(T),
      writable: !0
    });
  } : Yv;
  function vP(w, T) {
    if (T)
      return w.slice();
    var $ = w.length, F = Dv ? Dv($) : new w.constructor($);
    return w.copy(F), F;
  }
  function gP(w) {
    var T = new w.constructor(w.byteLength);
    return new Iv(T).set(new Iv(w)), T;
  }
  function yP(w, T) {
    var $ = T ? gP(w.buffer) : w.buffer;
    return new w.constructor($, w.byteOffset, w.length);
  }
  function bP(w, T) {
    var $ = -1, F = w.length;
    for (T || (T = Array(F)); ++$ < F; )
      T[$] = w[$];
    return T;
  }
  function xP(w, T, $, F) {
    var ie = !$;
    $ || ($ = {});
    for (var ge = -1, Pe = T.length; ++ge < Pe; ) {
      var re = T[ge], Te = F ? F($[re], w[re], re, $, w) : void 0;
      Te === void 0 && (Te = w[re]), ie ? hd($, re, Te) : lP($, re, Te);
    }
    return $;
  }
  function SP(w) {
    return hP(function(T, $) {
      var F = -1, ie = $.length, ge = ie > 1 ? $[ie - 1] : void 0, Pe = ie > 2 ? $[2] : void 0;
      for (ge = w.length > 3 && typeof ge == "function" ? (ie--, ge) : void 0, Pe && _P($[0], $[1], Pe) && (ge = ie < 3 ? void 0 : ge, ie = 1), T = Object(T); ++F < ie; ) {
        var re = $[F];
        re && w(T, re, F, ge);
      }
      return T;
    });
  }
  function wP(w) {
    return function(T, $, F) {
      for (var ie = -1, ge = Object(T), Pe = F(T), re = Pe.length; re--; ) {
        var Te = Pe[w ? re : ++ie];
        if ($(ge[Te], Te, ge) === !1)
          break;
      }
      return T;
    };
  }
  function fl(w, T) {
    var $ = w.__data__;
    return PP(T) ? $[typeof T == "string" ? "string" : "hash"] : $.map;
  }
  function md(w, T) {
    var $ = lt(w, T);
    return cP($) ? $ : void 0;
  }
  function kP(w) {
    var T = Gt.call(w, Jr), $ = w[Jr];
    try {
      w[Jr] = void 0;
      var F = !0;
    } catch {
    }
    var ie = ia.call(w);
    return F && (T ? w[Jr] = $ : delete w[Jr]), ie;
  }
  function CP(w) {
    return typeof w.constructor == "function" && !Wv(w) ? L_(zv(w)) : {};
  }
  function Vv(w, T) {
    var $ = typeof w;
    return T = T ?? a, !!T && ($ == "number" || $ != "symbol" && ee.test(w)) && w > -1 && w % 1 == 0 && w < T;
  }
  function _P(w, T, $) {
    if (!to($))
      return !1;
    var F = typeof T;
    return (F == "number" ? bd($) && Vv(T, $.length) : F == "string" && T in $) ? pl($[T], w) : !1;
  }
  function PP(w) {
    var T = typeof w;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? w !== "__proto__" : w === null;
  }
  function TP(w) {
    return !!Bo && Bo in w;
  }
  function Wv(w) {
    var T = w && w.constructor, $ = typeof T == "function" && T.prototype || ut;
    return w === $;
  }
  function EP(w) {
    var T = [];
    if (w != null)
      for (var $ in Object(w))
        T.push($);
    return T;
  }
  function AP(w) {
    return ia.call(w);
  }
  function $P(w, T, $) {
    return T = jv(T === void 0 ? w.length - 1 : T, 0), function() {
      for (var F = arguments, ie = -1, ge = jv(F.length - T, 0), Pe = Array(ge); ++ie < ge; )
        Pe[ie] = F[T + ie];
      ie = -1;
      for (var re = Array(T + 1); ++ie < T; )
        re[ie] = F[ie];
      return re[T] = $(Pe), Hn(w, this, re);
    };
  }
  function vd(w, T) {
    if (!(T === "constructor" && typeof w[T] == "function") && T != "__proto__")
      return w[T];
  }
  var MP = RP(mP);
  function RP(w) {
    var T = 0, $ = 0;
    return function() {
      var F = N_(), ie = i - (F - $);
      if ($ = F, ie > 0) {
        if (++T >= o)
          return arguments[0];
      } else
        T = 0;
      return w.apply(void 0, arguments);
    };
  }
  function OP(w) {
    if (w != null) {
      try {
        return vr.call(w);
      } catch {
      }
      try {
        return w + "";
      } catch {
      }
    }
    return "";
  }
  function pl(w, T) {
    return w === T || w !== w && T !== T;
  }
  var gd = Lv(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Lv : function(w) {
    return sa(w) && Gt.call(w, "callee") && !z_.call(w, "callee");
  }, yd = Array.isArray;
  function bd(w) {
    return w != null && Hv(w.length) && !xd(w);
  }
  function IP(w) {
    return sa(w) && bd(w);
  }
  var Uv = j_ || NP;
  function xd(w) {
    if (!to(w))
      return !1;
    var T = dl(w);
    return T == p || T == y || T == u || T == b;
  }
  function Hv(w) {
    return typeof w == "number" && w > -1 && w % 1 == 0 && w <= a;
  }
  function to(w) {
    var T = typeof w;
    return w != null && (T == "object" || T == "function");
  }
  function sa(w) {
    return w != null && typeof w == "object";
  }
  function DP(w) {
    if (!sa(w) || dl(w) != h)
      return !1;
    var T = zv(w);
    if (T === null)
      return !0;
    var $ = Gt.call(T, "constructor") && T.constructor;
    return typeof $ == "function" && $ instanceof $ && vr.call($) == sl;
  }
  var Gv = Un ? se(Un) : dP;
  function zP(w) {
    return xP(w, Kv(w));
  }
  function Kv(w) {
    return bd(w) ? sP(w, !0) : fP(w);
  }
  var FP = SP(function(w, T, $, F) {
    Bv(w, T, $, F);
  });
  function jP(w) {
    return function() {
      return w;
    };
  }
  function Yv(w) {
    return w;
  }
  function NP() {
    return !1;
  }
  e.exports = FP;
})(Ju, Ju.exports);
var YA = Ju.exports;
const tn = /* @__PURE__ */ Ns(YA);
var qA = (e) => /!(important)?$/.test(e), y0 = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, XA = (e, t) => (n) => {
  const r = String(t), o = qA(r), i = y0(r), a = e ? `${e}.${i}` : i;
  let s = rn(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
  return s = y0(s), o ? `${s} !important` : s;
};
function wm(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, a) => {
    var s;
    const l = XA(t, i)(a);
    let u = (s = n == null ? void 0 : n(l, a)) != null ? s : l;
    return r && (u = r(u, a)), u;
  };
}
var Ol = (...e) => (t) => e.reduce((n, r) => r(n), t);
function Yt(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return r.transform = wm({
      scale: e,
      transform: t
    }), r;
  };
}
var QA = ({ rtl: e, ltr: t }) => (n) => n.direction === "rtl" ? e : t;
function ZA(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: QA(t),
    transform: n ? wm({
      scale: n,
      compose: r
    }) : r
  };
}
var NS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function JA() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...NS
  ].join(" ");
}
function e$() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...NS
  ].join(" ");
}
var t$ = {
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
}, n$ = {
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
function r$(e) {
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
var o$ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, zp = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, i$ = new Set(Object.values(zp)), Fp = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), a$ = (e) => e.trim();
function s$(e, t) {
  if (e == null || Fp.has(e))
    return e;
  if (!(jp(e) || Fp.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(a$).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in zp ? zp[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (i$.has(f))
      return f;
    const p = f.indexOf(" "), [y, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = jp(g) ? g : g && g.split(" "), m = `colors.${y}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : y;
    return x ? [
      h,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var jp = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), l$ = (e, t) => s$(e, t ?? {});
function u$(e) {
  return /^var\(--.+\)$/.test(e);
}
var c$ = (e) => {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}, wn = (e) => (t) => `${e}(${t})`, oe = {
  filter(e) {
    return e !== "auto" ? e : t$;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : n$;
  },
  ring(e) {
    return r$(oe.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? JA() : e === "auto-gpu" ? e$() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = c$(e);
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
    if (u$(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: l$,
  blur: wn("blur"),
  opacity: wn("opacity"),
  brightness: wn("brightness"),
  contrast: wn("contrast"),
  dropShadow: wn("drop-shadow"),
  grayscale: wn("grayscale"),
  hueRotate: (e) => wn("hue-rotate")(oe.degree(e)),
  invert: wn("invert"),
  saturate: wn("saturate"),
  sepia: wn("sepia"),
  bgImage(e) {
    return e == null || jp(e) || Fp.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: n, divide: r } = (t = o$[e]) != null ? t : {}, o = { flexDirection: e };
    return n && (o[n] = 1), r && (o[r] = 1), o;
  }
}, E = {
  borderWidths: Yt("borderWidths"),
  borderStyles: Yt("borderStyles"),
  colors: Yt("colors"),
  borders: Yt("borders"),
  gradients: Yt("gradients", oe.gradient),
  radii: Yt("radii", oe.px),
  space: Yt("space", Ol(oe.vh, oe.px)),
  spaceT: Yt("space", Ol(oe.vh, oe.px)),
  degreeT(e) {
    return { property: e, transform: oe.degree };
  },
  prop(e, t, n) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: wm({ scale: t, transform: n })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Yt("sizes", Ol(oe.vh, oe.px)),
  sizesT: Yt("sizes", Ol(oe.vh, oe.fraction)),
  shadows: Yt("shadows"),
  logical: ZA,
  blur: Yt("blur", oe.blur)
}, fu = {
  background: E.colors("background"),
  backgroundColor: E.colors("backgroundColor"),
  backgroundImage: E.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: oe.bgClip },
  bgSize: E.prop("backgroundSize"),
  bgPosition: E.prop("backgroundPosition"),
  bg: E.colors("background"),
  bgColor: E.colors("backgroundColor"),
  bgPos: E.prop("backgroundPosition"),
  bgRepeat: E.prop("backgroundRepeat"),
  bgAttachment: E.prop("backgroundAttachment"),
  bgGradient: E.gradients("backgroundImage"),
  bgClip: { transform: oe.bgClip }
};
Object.assign(fu, {
  bgImage: fu.backgroundImage,
  bgImg: fu.backgroundImage
});
var ue = {
  border: E.borders("border"),
  borderWidth: E.borderWidths("borderWidth"),
  borderStyle: E.borderStyles("borderStyle"),
  borderColor: E.colors("borderColor"),
  borderRadius: E.radii("borderRadius"),
  borderTop: E.borders("borderTop"),
  borderBlockStart: E.borders("borderBlockStart"),
  borderTopLeftRadius: E.radii("borderTopLeftRadius"),
  borderStartStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: E.radii("borderTopRightRadius"),
  borderStartEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: E.borders("borderRight"),
  borderInlineEnd: E.borders("borderInlineEnd"),
  borderBottom: E.borders("borderBottom"),
  borderBlockEnd: E.borders("borderBlockEnd"),
  borderBottomLeftRadius: E.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: E.radii("borderBottomRightRadius"),
  borderLeft: E.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: E.borders(["borderLeft", "borderRight"]),
  borderInline: E.borders("borderInline"),
  borderY: E.borders(["borderTop", "borderBottom"]),
  borderBlock: E.borders("borderBlock"),
  borderTopWidth: E.borderWidths("borderTopWidth"),
  borderBlockStartWidth: E.borderWidths("borderBlockStartWidth"),
  borderTopColor: E.colors("borderTopColor"),
  borderBlockStartColor: E.colors("borderBlockStartColor"),
  borderTopStyle: E.borderStyles("borderTopStyle"),
  borderBlockStartStyle: E.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: E.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: E.borderWidths("borderBlockEndWidth"),
  borderBottomColor: E.colors("borderBottomColor"),
  borderBlockEndColor: E.colors("borderBlockEndColor"),
  borderBottomStyle: E.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: E.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: E.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: E.borderWidths("borderInlineStartWidth"),
  borderLeftColor: E.colors("borderLeftColor"),
  borderInlineStartColor: E.colors("borderInlineStartColor"),
  borderLeftStyle: E.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: E.borderStyles("borderInlineStartStyle"),
  borderRightWidth: E.borderWidths("borderRightWidth"),
  borderInlineEndWidth: E.borderWidths("borderInlineEndWidth"),
  borderRightColor: E.colors("borderRightColor"),
  borderInlineEndColor: E.colors("borderInlineEndColor"),
  borderRightStyle: E.borderStyles("borderRightStyle"),
  borderInlineEndStyle: E.borderStyles("borderInlineEndStyle"),
  borderTopRadius: E.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: E.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: E.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: E.radii([
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
var d$ = {
  color: E.colors("color"),
  textColor: E.colors("color"),
  fill: E.colors("fill"),
  stroke: E.colors("stroke")
}, Np = {
  boxShadow: E.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: E.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: E.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Np, {
  shadow: Np.boxShadow
});
var f$ = {
  filter: { transform: oe.filter },
  blur: E.blur("--chakra-blur"),
  brightness: E.propT("--chakra-brightness", oe.brightness),
  contrast: E.propT("--chakra-contrast", oe.contrast),
  hueRotate: E.propT("--chakra-hue-rotate", oe.hueRotate),
  invert: E.propT("--chakra-invert", oe.invert),
  saturate: E.propT("--chakra-saturate", oe.saturate),
  dropShadow: E.propT("--chakra-drop-shadow", oe.dropShadow),
  backdropFilter: { transform: oe.backdropFilter },
  backdropBlur: E.blur("--chakra-backdrop-blur"),
  backdropBrightness: E.propT(
    "--chakra-backdrop-brightness",
    oe.brightness
  ),
  backdropContrast: E.propT("--chakra-backdrop-contrast", oe.contrast),
  backdropHueRotate: E.propT(
    "--chakra-backdrop-hue-rotate",
    oe.hueRotate
  ),
  backdropInvert: E.propT("--chakra-backdrop-invert", oe.invert),
  backdropSaturate: E.propT("--chakra-backdrop-saturate", oe.saturate)
}, ec = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: oe.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: E.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: E.space("gap"),
  rowGap: E.space("rowGap"),
  columnGap: E.space("columnGap")
};
Object.assign(ec, {
  flexDir: ec.flexDirection
});
var LS = {
  gridGap: E.space("gridGap"),
  gridColumnGap: E.space("gridColumnGap"),
  gridRowGap: E.space("gridRowGap"),
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
}, p$ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: oe.outline },
  outlineOffset: !0,
  outlineColor: E.colors("outlineColor")
}, Xt = {
  width: E.sizesT("width"),
  inlineSize: E.sizesT("inlineSize"),
  height: E.sizes("height"),
  blockSize: E.sizes("blockSize"),
  boxSize: E.sizes(["width", "height"]),
  minWidth: E.sizes("minWidth"),
  minInlineSize: E.sizes("minInlineSize"),
  minHeight: E.sizes("minHeight"),
  minBlockSize: E.sizes("minBlockSize"),
  maxWidth: E.sizes("maxWidth"),
  maxInlineSize: E.sizes("maxInlineSize"),
  maxHeight: E.sizes("maxHeight"),
  maxBlockSize: E.sizes("maxBlockSize"),
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
  float: E.propT("float", oe.float),
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
var h$ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage")
};
function m$(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var v$ = (e) => {
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
}, g$ = v$(m$), y$ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, b$ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Zd = (e, t, n) => {
  const r = {}, o = g$(e, t, {});
  for (const i in o)
    i in n && n[i] != null || (r[i] = o[i]);
  return r;
}, x$ = {
  srOnly: {
    transform(e) {
      return e === !0 ? y$ : e === "focusable" ? b$ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, n) => Zd(t, `layerStyles.${e}`, n)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, n) => Zd(t, `textStyles.${e}`, n)
  },
  apply: {
    processResult: !0,
    transform: (e, t, n) => Zd(t, e, n)
  }
}, Ga = {
  position: !0,
  pos: E.prop("position"),
  zIndex: E.prop("zIndex", "zIndices"),
  inset: E.spaceT("inset"),
  insetX: E.spaceT(["left", "right"]),
  insetInline: E.spaceT("insetInline"),
  insetY: E.spaceT(["top", "bottom"]),
  insetBlock: E.spaceT("insetBlock"),
  top: E.spaceT("top"),
  insetBlockStart: E.spaceT("insetBlockStart"),
  bottom: E.spaceT("bottom"),
  insetBlockEnd: E.spaceT("insetBlockEnd"),
  left: E.spaceT("left"),
  insetInlineStart: E.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: E.spaceT("right"),
  insetInlineEnd: E.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Ga, {
  insetStart: Ga.insetInlineStart,
  insetEnd: Ga.insetInlineEnd
});
var S$ = {
  ring: { transform: oe.ring },
  ringColor: E.colors("--chakra-ring-color"),
  ringOffset: E.prop("--chakra-ring-offset-width"),
  ringOffsetColor: E.colors("--chakra-ring-offset-color"),
  ringInset: E.prop("--chakra-ring-inset")
}, Ce = {
  margin: E.spaceT("margin"),
  marginTop: E.spaceT("marginTop"),
  marginBlockStart: E.spaceT("marginBlockStart"),
  marginRight: E.spaceT("marginRight"),
  marginInlineEnd: E.spaceT("marginInlineEnd"),
  marginBottom: E.spaceT("marginBottom"),
  marginBlockEnd: E.spaceT("marginBlockEnd"),
  marginLeft: E.spaceT("marginLeft"),
  marginInlineStart: E.spaceT("marginInlineStart"),
  marginX: E.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: E.spaceT("marginInline"),
  marginY: E.spaceT(["marginTop", "marginBottom"]),
  marginBlock: E.spaceT("marginBlock"),
  padding: E.space("padding"),
  paddingTop: E.space("paddingTop"),
  paddingBlockStart: E.space("paddingBlockStart"),
  paddingRight: E.space("paddingRight"),
  paddingBottom: E.space("paddingBottom"),
  paddingBlockEnd: E.space("paddingBlockEnd"),
  paddingLeft: E.space("paddingLeft"),
  paddingInlineStart: E.space("paddingInlineStart"),
  paddingInlineEnd: E.space("paddingInlineEnd"),
  paddingX: E.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: E.space("paddingInline"),
  paddingY: E.space(["paddingTop", "paddingBottom"]),
  paddingBlock: E.space("paddingBlock")
};
Object.assign(Ce, {
  m: Ce.margin,
  mt: Ce.marginTop,
  mr: Ce.marginRight,
  me: Ce.marginInlineEnd,
  marginEnd: Ce.marginInlineEnd,
  mb: Ce.marginBottom,
  ml: Ce.marginLeft,
  ms: Ce.marginInlineStart,
  marginStart: Ce.marginInlineStart,
  mx: Ce.marginX,
  my: Ce.marginY,
  p: Ce.padding,
  pt: Ce.paddingTop,
  py: Ce.paddingY,
  px: Ce.paddingX,
  pb: Ce.paddingBottom,
  pl: Ce.paddingLeft,
  ps: Ce.paddingInlineStart,
  paddingStart: Ce.paddingInlineStart,
  pr: Ce.paddingRight,
  pe: Ce.paddingInlineEnd,
  paddingEnd: Ce.paddingInlineEnd
});
var w$ = {
  textDecorationColor: E.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: E.shadows("textShadow")
}, k$ = {
  clipPath: !0,
  transform: E.propT("transform", oe.transform),
  transformOrigin: !0,
  translateX: E.spaceT("--chakra-translate-x"),
  translateY: E.spaceT("--chakra-translate-y"),
  skewX: E.degreeT("--chakra-skew-x"),
  skewY: E.degreeT("--chakra-skew-y"),
  scaleX: E.prop("--chakra-scale-x"),
  scaleY: E.prop("--chakra-scale-y"),
  scale: E.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: E.degreeT("--chakra-rotate")
}, C$ = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: E.prop("transitionDuration", "transition.duration"),
  transitionProperty: E.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: E.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, _$ = {
  fontFamily: E.prop("fontFamily", "fonts"),
  fontSize: E.prop("fontSize", "fontSizes", oe.px),
  fontWeight: E.prop("fontWeight", "fontWeights"),
  lineHeight: E.prop("lineHeight", "lineHeights"),
  letterSpacing: E.prop("letterSpacing", "letterSpacings"),
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
}, P$ = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: E.spaceT("scrollMargin"),
  scrollMarginTop: E.spaceT("scrollMarginTop"),
  scrollMarginBottom: E.spaceT("scrollMarginBottom"),
  scrollMarginLeft: E.spaceT("scrollMarginLeft"),
  scrollMarginRight: E.spaceT("scrollMarginRight"),
  scrollMarginX: E.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: E.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: E.spaceT("scrollPadding"),
  scrollPaddingTop: E.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: E.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: E.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: E.spaceT("scrollPaddingRight"),
  scrollPaddingX: E.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: E.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function BS(e) {
  return rn(e) && e.reference ? e.reference : String(e);
}
var Xc = (e, ...t) => t.map(BS).join(` ${e} `).replace(/calc/g, ""), b0 = (...e) => `calc(${Xc("+", ...e)})`, x0 = (...e) => `calc(${Xc("-", ...e)})`, Lp = (...e) => `calc(${Xc("*", ...e)})`, S0 = (...e) => `calc(${Xc("/", ...e)})`, w0 = (e) => {
  const t = BS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Lp(t, -1);
}, uo = Object.assign(
  (e) => ({
    add: (...t) => uo(b0(e, ...t)),
    subtract: (...t) => uo(x0(e, ...t)),
    multiply: (...t) => uo(Lp(e, ...t)),
    divide: (...t) => uo(S0(e, ...t)),
    negate: () => uo(w0(e)),
    toString: () => e.toString()
  }),
  {
    add: b0,
    subtract: x0,
    multiply: Lp,
    divide: S0,
    negate: w0
  }
);
function T$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function E$(e) {
  const t = T$(e.toString());
  return $$(A$(t));
}
function A$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function $$(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function M$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function R$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function O$(e, t = "") {
  return E$(`--${M$(e, t)}`);
}
function U(e, t, n) {
  const r = O$(e, n);
  return {
    variable: r,
    reference: R$(r, t)
  };
}
function I$(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = U(`${e}-${o}`, i);
      continue;
    }
    n[r] = U(`${e}-${r}`);
  }
  return n;
}
function D$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function z$(e) {
  const t = parseFloat(e.toString()), n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Bp(e) {
  if (e == null)
    return e;
  const { unitless: t } = z$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var VS = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, km = (e) => Object.fromEntries(Object.entries(e).sort(VS));
function k0(e) {
  const t = km(e);
  return Object.assign(Object.values(t), t);
}
function F$(e) {
  const t = Object.keys(km(e));
  return new Set(t);
}
function C0(e) {
  var t;
  if (!e)
    return e;
  e = (t = Bp(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number" ? `${e + n}` : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function Aa(e, t) {
  const n = ["@media screen"];
  return e && n.push("and", `(min-width: ${Bp(e)})`), t && n.push("and", `(max-width: ${Bp(t)})`), n.join(" ");
}
function j$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = k0(e), r = Object.entries(e).sort(VS).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? C0(d) : void 0, {
      _minW: C0(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: Aa(null, d),
      minWQuery: Aa(s),
      minMaxQuery: Aa(s, d)
    };
  }), o = F$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: km(e),
    asArray: k0(e),
    details: r,
    get(a) {
      return r.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...n.map((a) => Aa(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!rn(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; D$(s) === null; )
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
var nt = {
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
}, yr = (e) => WS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Kn = (e) => WS((t) => e(t, "~ &"), "[data-peer]", ".peer"), WS = (e, ...t) => t.map(e).join(", "), Qc = {
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
  _groupHover: yr(nt.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Kn(nt.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: yr(nt.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Kn(nt.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: yr(nt.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Kn(nt.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: yr(nt.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Kn(nt.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: yr(nt.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Kn(nt.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: yr(nt.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Kn(nt.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: yr(nt.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Kn(nt.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: yr(nt.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Kn(nt.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Kn(nt.placeholderShown),
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
}, US = Object.keys(
  Qc
);
function _0(e, t) {
  return U(String(e).replace(/\./g, "-"), void 0, t);
}
function N$(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = _0(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...y] = f, g = `${p}.-${y.join(".")}`, x = uo.negate(s), m = uo.negate(u);
        r[g] = {
          value: x,
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
      const y = [String(o).split(".")[0], f].join(".");
      if (!e[y])
        return f;
      const { reference: x } = _0(y, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = rn(s) ? s : { default: s };
    n = tn(
      n,
      Object.entries(d).reduce(
        (f, [p, y]) => {
          var g, x;
          if (!y)
            return f;
          const m = c(`${y}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (x = (g = Qc) == null ? void 0 : g[p]) != null ? x : p;
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
function L$(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function B$(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
function V$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function P0(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(a, s = []) {
    var l;
    if (V$(a) || Array.isArray(a)) {
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
var W$ = [
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
function U$(e) {
  return B$(e, W$);
}
function H$(e) {
  return e.semanticTokens;
}
function G$(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var K$ = (e) => US.includes(e) || e === "default";
function Y$({
  tokens: e,
  semanticTokens: t
}) {
  const n = {};
  return P0(e, (r, o) => {
    r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
  }), P0(
    t,
    (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
    },
    {
      stop: (r) => Object.keys(r).every(K$)
    }
  ), n;
}
function q$(e) {
  var t;
  const n = G$(e), r = U$(n), o = H$(n), i = Y$({ tokens: r, semanticTokens: o }), a = (t = n.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = N$(i, { cssVarPrefix: a });
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
    __breakpoints: j$(n.breakpoints)
  }), n;
}
var Cm = tn(
  {},
  fu,
  ue,
  d$,
  ec,
  Xt,
  f$,
  S$,
  p$,
  LS,
  x$,
  Ga,
  Np,
  Ce,
  P$,
  _$,
  w$,
  k$,
  h$,
  C$
);
Object.assign({}, Ce, Xt, ec, LS, Ga);
var X$ = [...Object.keys(Cm), ...US], Q$ = { ...Cm, ...Qc }, Z$ = (e) => e in Q$, J$ = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Rn(e[a], t);
    if (s == null)
      continue;
    if (s = rn(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
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
function eM(e) {
  const t = [];
  let n = "", r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i;
  }
  return n = n.trim(), n && t.push(n), t;
}
function tM(e) {
  return /^var\(--.+\)$/.test(e);
}
var nM = (e, t) => e.startsWith("--") && typeof t == "string" && !tM(t), rM = (e, t) => {
  var n, r;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = eM(t);
  return t = (r = (n = o(a)) != null ? n : i(s)) != null ? r : i(t), t;
};
function oM(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Rn(i, r), d = J$(c)(r);
    let f = {};
    for (let p in d) {
      const y = d[p];
      let g = Rn(y, r);
      p in n && (p = n[p]), nM(p, g) && (g = rM(r, g));
      let x = t[p];
      if (x === !0 && (x = { property: p }), rn(g)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = tn(
          {},
          f[p],
          o(g, !0)
        );
        continue;
      }
      let m = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, g, r, c)) != null ? u : g;
      m = x != null && x.processResult ? o(m, !0) : m;
      const h = Rn(x == null ? void 0 : x.property, r);
      if (!a && (x != null && x.static)) {
        const b = Rn(x.static, r);
        f = tn({}, f, b);
      }
      if (h && Array.isArray(h)) {
        for (const b of h)
          f[b] = m;
        continue;
      }
      if (h) {
        h === "&" && rn(m) ? f = tn({}, f, m) : f[h] = m;
        continue;
      }
      if (rn(m)) {
        f = tn({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var HS = (e) => (t) => oM({
  theme: t,
  pseudos: Qc,
  configs: Cm
})(e);
function we(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function iM(e, t) {
  if (Array.isArray(e))
    return e;
  if (rn(e))
    return t(e);
  if (e != null)
    return [e];
}
function aM(e, t) {
  for (let n = t + 1; n < e.length; n++)
    if (e[n] != null)
      return n;
  return -1;
}
function sM(e) {
  const t = e.__breakpoints;
  return function(r, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = iM(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!r.parts;
    for (let y = 0; y < d; y++) {
      const g = t.details[y], x = t.details[aM(c, y)], m = Aa(g.minW, x == null ? void 0 : x._minW), h = Rn((s = r[o]) == null ? void 0 : s[c[y]], a);
      if (h) {
        if (p) {
          (l = r.parts) == null || l.forEach((b) => {
            tn(u, {
              [b]: f ? h[b] : { [m]: h[b] }
            });
          });
          continue;
        }
        if (!p) {
          f ? tn(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function lM(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t, a = sM(i);
    return tn(
      {},
      Rn((n = e.baseStyle) != null ? n : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", r, t)
    );
  };
}
function Bn(e) {
  return L$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var uM = [
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
function cM(e) {
  return rn(e) ? uM.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var dM = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, fM = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, pM = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, hM = {
  property: dM,
  easing: fM,
  duration: pM
}, mM = hM, vM = {
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
}, gM = vM, yM = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, bM = yM, xM = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, SM = xM, wM = {
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
}, kM = wM, CM = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, _M = CM, PM = {
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
}, TM = PM, EM = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, AM = EM, $M = {
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
}, GS = $M, KS = {
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
}, MM = {
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
}, RM = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, OM = {
  ...KS,
  ...MM,
  container: RM
}, YS = OM, IM = {
  breakpoints: SM,
  zIndices: gM,
  radii: _M,
  blur: AM,
  colors: kM,
  ...GS,
  sizes: YS,
  shadows: TM,
  space: KS,
  borders: bM,
  transition: mM
}, { defineMultiStyleConfig: DM, definePartsStyle: $a } = we([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Xn = U("stepper-indicator-size"), ui = U("stepper-icon-size"), ci = U("stepper-title-font-size"), Ma = U("stepper-description-font-size"), ya = U("stepper-accent-color"), zM = $a(({ colorScheme: e }) => ({
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
    [ya.variable]: `colors.${e}.500`,
    _dark: {
      [ya.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: ci.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Ma.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: ci.reference
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
    width: ui.reference,
    height: ui.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Xn.reference,
    height: Xn.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: ya.reference
    },
    "&[data-status=complete]": {
      bg: ya.reference,
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
      bg: ya.reference
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
      maxHeight: `calc(100% - ${Xn.reference} - 8px)`,
      top: `calc(${Xn.reference} + 4px)`,
      insetStart: `calc(${Xn.reference} / 2 - 1px)`
    }
  }
})), FM = DM({
  baseStyle: zM,
  sizes: {
    xs: $a({
      stepper: {
        [Xn.variable]: "sizes.4",
        [ui.variable]: "sizes.3",
        [ci.variable]: "fontSizes.xs",
        [Ma.variable]: "fontSizes.xs"
      }
    }),
    sm: $a({
      stepper: {
        [Xn.variable]: "sizes.6",
        [ui.variable]: "sizes.4",
        [ci.variable]: "fontSizes.sm",
        [Ma.variable]: "fontSizes.xs"
      }
    }),
    md: $a({
      stepper: {
        [Xn.variable]: "sizes.8",
        [ui.variable]: "sizes.5",
        [ci.variable]: "fontSizes.md",
        [Ma.variable]: "fontSizes.sm"
      }
    }),
    lg: $a({
      stepper: {
        [Xn.variable]: "sizes.10",
        [ui.variable]: "sizes.6",
        [ci.variable]: "fontSizes.lg",
        [Ma.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function pe(e, t = {}) {
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
var jM = pe("accordion").parts("root", "container", "button", "panel").extend("icon"), NM = pe("alert").parts("title", "description", "container").extend("icon", "spinner"), LM = pe("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), BM = pe("breadcrumb").parts("link", "item", "container").extend("separator");
pe("button").parts();
var VM = pe("checkbox").parts("control", "icon", "container").extend("label");
pe("progress").parts("track", "filledTrack").extend("label");
var WM = pe("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), UM = pe("editable").parts(
  "preview",
  "input",
  "textarea"
), HM = pe("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), GM = pe("formError").parts("text", "icon"), KM = pe("input").parts(
  "addon",
  "field",
  "element",
  "group"
), YM = pe("list").parts("container", "item", "icon"), qM = pe("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), XM = pe("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), QM = pe("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
pe("pininput").parts("field");
var ZM = pe("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), JM = pe("progress").parts(
  "label",
  "filledTrack",
  "track"
), eR = pe("radio").parts(
  "container",
  "control",
  "label"
), tR = pe("select").parts("field", "icon"), nR = pe("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), rR = pe("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), oR = pe("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), iR = pe("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), aR = pe("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), sR = pe("tag").parts(
  "container",
  "label",
  "closeButton"
), lR = pe("card").parts(
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
function mo(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class uR extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ra = uR;
function _m(e) {
  if (typeof e != "string")
    throw new Ra(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = gR.test(e) ? fR(e) : e;
  const n = pR.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(Ts(s, 2), 16)), parseInt(Ts(a[3] || "f", 2), 16) / 255];
  }
  const r = hR.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = mR.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = vR.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (mo(0, 100, s) !== s)
      throw new Ra(e);
    if (mo(0, 100, l) !== l)
      throw new Ra(e);
    return [...yR(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Ra(e);
}
function cR(e) {
  let t = 5381, n = e.length;
  for (; n; )
    t = t * 33 ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const T0 = (e) => parseInt(e.replace(/_/g, ""), 36), dR = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const n = T0(t.substring(0, 3)), r = T0(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - r.length; i++)
    o += "0";
  return e[n] = `${o}${r}`, e;
}, {});
function fR(e) {
  const t = e.toLowerCase().trim(), n = dR[cR(t)];
  if (!n)
    throw new Ra(e);
  return `#${n}`;
}
const Ts = (e, t) => Array.from(Array(t)).map(() => e).join(""), pR = new RegExp(`^#${Ts("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), hR = new RegExp(`^#${Ts("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), mR = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ts(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), vR = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, gR = /^[a-z]+$/i, E0 = (e) => Math.round(e * 255), yR = (e, t, n) => {
  let r = n / 100;
  if (t === 0)
    return [r, r, r].map(E0);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = r - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(E0);
};
function bR(e, t, n, r) {
  return `rgba(${mo(0, 255, e).toFixed()}, ${mo(0, 255, t).toFixed()}, ${mo(0, 255, n).toFixed()}, ${parseFloat(mo(0, 1, r).toFixed(3))})`;
}
function xR(e, t) {
  const [n, r, o, i] = _m(e);
  return bR(n, r, o, i - t);
}
function SR(e) {
  const [t, n, r, o] = _m(e);
  let i = (a) => {
    const s = mo(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function wR(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var kR = (e) => Object.keys(e).length === 0, yt = (e, t, n) => {
  const r = wR(e, `colors.${t}`, t);
  try {
    return SR(r), r;
  } catch {
    return n ?? "#000000";
  }
}, CR = (e) => {
  const [t, n, r] = _m(e);
  return (t * 299 + n * 587 + r * 114) / 1e3;
}, _R = (e) => (t) => {
  const n = yt(t, e);
  return CR(n) < 128 ? "dark" : "light";
}, PR = (e) => (t) => _R(e)(t) === "dark", Vi = (e, t) => (n) => {
  const r = yt(n, e);
  return xR(r, 1 - t);
};
function A0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var TR = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function ER(e) {
  const t = TR();
  return !e || kR(e) ? t : e.string && e.colors ? $R(e.string, e.colors) : e.string && !e.colors ? AR(e.string) : e.colors && !e.string ? MR(e.colors) : t;
}
function AR(e) {
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
function $R(e, t) {
  let n = 0;
  if (e.length === 0)
    return t[0];
  for (let r = 0; r < e.length; r += 1)
    n = e.charCodeAt(r) + ((n << 5) - n), n = n & n;
  return n = (n % t.length + t.length) % t.length, t[n];
}
function MR(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function W(e, t) {
  return (n) => n.colorMode === "dark" ? t : e;
}
function Pm(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? t === "vertical" ? n : r : {};
}
function qS(e) {
  return rn(e) && e.reference ? e.reference : String(e);
}
var Zc = (e, ...t) => t.map(qS).join(` ${e} `).replace(/calc/g, ""), $0 = (...e) => `calc(${Zc("+", ...e)})`, M0 = (...e) => `calc(${Zc("-", ...e)})`, Vp = (...e) => `calc(${Zc("*", ...e)})`, R0 = (...e) => `calc(${Zc("/", ...e)})`, O0 = (e) => {
  const t = qS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Vp(t, -1);
}, Qn = Object.assign(
  (e) => ({
    add: (...t) => Qn($0(e, ...t)),
    subtract: (...t) => Qn(M0(e, ...t)),
    multiply: (...t) => Qn(Vp(e, ...t)),
    divide: (...t) => Qn(R0(e, ...t)),
    negate: () => Qn(O0(e)),
    toString: () => e.toString()
  }),
  {
    add: $0,
    subtract: M0,
    multiply: Vp,
    divide: R0,
    negate: O0
  }
);
function RR(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function OR(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function XS(e) {
  const t = OR(e.toString());
  return t.includes("\\.") ? e : RR(e) ? t.replace(".", "\\.") : e;
}
function IR(e, t = "") {
  return [t, XS(e)].filter(Boolean).join("-");
}
function DR(e, t) {
  return `var(${XS(e)}${t ? `, ${t}` : ""})`;
}
function zR(e, t = "") {
  return `--${IR(e, t)}`;
}
function Ye(e, t) {
  const n = zR(e, t == null ? void 0 : t.prefix);
  return {
    variable: n,
    reference: DR(n, FR(t == null ? void 0 : t.fallback))
  };
}
function FR(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: jR, definePartsStyle: pu } = we(oR.keys), Ka = Ye("switch-track-width"), So = Ye("switch-track-height"), Jd = Ye("switch-track-diff"), NR = Qn.subtract(Ka, So), Wp = Ye("switch-thumb-x"), ba = Ye("switch-bg"), LR = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Ka.reference],
    height: [So.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [ba.variable]: "colors.gray.300",
    _dark: {
      [ba.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [ba.variable]: `colors.${t}.500`,
      _dark: {
        [ba.variable]: `colors.${t}.200`
      }
    },
    bg: ba.reference
  };
}, BR = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [So.reference],
  height: [So.reference],
  _checked: {
    transform: `translateX(${Wp.reference})`
  }
}, VR = pu((e) => ({
  container: {
    [Jd.variable]: NR,
    [Wp.variable]: Jd.reference,
    _rtl: {
      [Wp.variable]: Qn(Jd).negate().toString()
    }
  },
  track: LR(e),
  thumb: BR
})), WR = {
  sm: pu({
    container: {
      [Ka.variable]: "1.375rem",
      [So.variable]: "sizes.3"
    }
  }),
  md: pu({
    container: {
      [Ka.variable]: "1.875rem",
      [So.variable]: "sizes.4"
    }
  }),
  lg: pu({
    container: {
      [Ka.variable]: "2.875rem",
      [So.variable]: "sizes.6"
    }
  })
}, UR = jR({
  baseStyle: VR,
  sizes: WR,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: HR, definePartsStyle: Ti } = we(iR.keys), GR = Ti({
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
}), tc = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, KR = Ti((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: W("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: W(`${t}.100`, `${t}.700`)(e),
      ...tc
    },
    td: {
      borderBottom: "1px",
      borderColor: W(`${t}.100`, `${t}.700`)(e),
      ...tc
    },
    caption: {
      color: W("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), YR = Ti((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: W("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: W(`${t}.100`, `${t}.700`)(e),
      ...tc
    },
    td: {
      borderBottom: "1px",
      borderColor: W(`${t}.100`, `${t}.700`)(e),
      ...tc
    },
    caption: {
      color: W("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: W(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: W(`${t}.100`, `${t}.700`)(e)
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
}), qR = {
  simple: KR,
  striped: YR,
  unstyled: {}
}, XR = {
  sm: Ti({
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
  md: Ti({
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
  lg: Ti({
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
}, QR = HR({
  baseStyle: GR,
  variants: qR,
  sizes: XR,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Ct = U("tabs-color"), mn = U("tabs-bg"), Il = U("tabs-border-color"), { defineMultiStyleConfig: ZR, definePartsStyle: zn } = we(aR.keys), JR = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, eO = (e) => {
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
}, tO = (e) => {
  const { align: t = "start", orientation: n } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: n === "vertical" ? "column" : "row"
  };
}, nO = {
  p: 4
}, rO = zn((e) => ({
  root: JR(e),
  tab: eO(e),
  tablist: tO(e),
  tabpanel: nO
})), oO = {
  sm: zn({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: zn({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: zn({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, iO = zn((e) => {
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
        [Ct.variable]: `colors.${t}.600`,
        _dark: {
          [Ct.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [mn.variable]: "colors.gray.200",
        _dark: {
          [mn.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Ct.reference,
      bg: mn.reference
    }
  };
}), aO = zn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Il.variable]: "transparent",
      _selected: {
        [Ct.variable]: `colors.${t}.600`,
        [Il.variable]: "colors.white",
        _dark: {
          [Ct.variable]: `colors.${t}.300`,
          [Il.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Il.reference
      },
      color: Ct.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), sO = zn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [mn.variable]: "colors.gray.50",
      _dark: {
        [mn.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [mn.variable]: "colors.white",
        [Ct.variable]: `colors.${t}.600`,
        _dark: {
          [mn.variable]: "colors.gray.800",
          [Ct.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Ct.reference,
      bg: mn.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), lO = zn((e) => {
  const { colorScheme: t, theme: n } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: yt(n, `${t}.700`),
        bg: yt(n, `${t}.100`)
      }
    }
  };
}), uO = zn((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Ct.variable]: "colors.gray.600",
      _dark: {
        [Ct.variable]: "inherit"
      },
      _selected: {
        [Ct.variable]: "colors.white",
        [mn.variable]: `colors.${t}.600`,
        _dark: {
          [Ct.variable]: "colors.gray.800",
          [mn.variable]: `colors.${t}.300`
        }
      },
      color: Ct.reference,
      bg: mn.reference
    }
  };
}), cO = zn({}), dO = {
  line: iO,
  enclosed: aO,
  "enclosed-colored": sO,
  "soft-rounded": lO,
  "solid-rounded": uO,
  unstyled: cO
}, fO = ZR({
  baseStyle: rO,
  sizes: oO,
  variants: dO,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Be = I$("badge", ["bg", "color", "shadow"]), pO = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Be.bg.reference,
  color: Be.color.reference,
  boxShadow: Be.shadow.reference
}, hO = (e) => {
  const { colorScheme: t, theme: n } = e, r = Vi(`${t}.500`, 0.6)(n);
  return {
    [Be.bg.variable]: `colors.${t}.500`,
    [Be.color.variable]: "colors.white",
    _dark: {
      [Be.bg.variable]: r,
      [Be.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, mO = (e) => {
  const { colorScheme: t, theme: n } = e, r = Vi(`${t}.200`, 0.16)(n);
  return {
    [Be.bg.variable]: `colors.${t}.100`,
    [Be.color.variable]: `colors.${t}.800`,
    _dark: {
      [Be.bg.variable]: r,
      [Be.color.variable]: `colors.${t}.200`
    }
  };
}, vO = (e) => {
  const { colorScheme: t, theme: n } = e, r = Vi(`${t}.200`, 0.8)(n);
  return {
    [Be.color.variable]: `colors.${t}.500`,
    _dark: {
      [Be.color.variable]: r
    },
    [Be.shadow.variable]: `inset 0 0 0px 1px ${Be.color.reference}`
  };
}, gO = {
  solid: hO,
  subtle: mO,
  outline: vO
}, Ya = {
  baseStyle: pO,
  variants: gO,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: yO, definePartsStyle: wo } = we(sR.keys), I0 = U("tag-bg"), D0 = U("tag-color"), ef = U("tag-shadow"), hu = U("tag-min-height"), mu = U("tag-min-width"), vu = U("tag-font-size"), gu = U("tag-padding-inline"), bO = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [D0.variable]: Be.color.reference,
  [I0.variable]: Be.bg.reference,
  [ef.variable]: Be.shadow.reference,
  color: D0.reference,
  bg: I0.reference,
  boxShadow: ef.reference,
  borderRadius: "md",
  minH: hu.reference,
  minW: mu.reference,
  fontSize: vu.reference,
  px: gu.reference,
  _focusVisible: {
    [ef.variable]: "shadows.outline"
  }
}, xO = {
  lineHeight: 1.2,
  overflow: "visible"
}, SO = {
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
}, wO = wo({
  container: bO,
  label: xO,
  closeButton: SO
}), kO = {
  sm: wo({
    container: {
      [hu.variable]: "sizes.5",
      [mu.variable]: "sizes.5",
      [vu.variable]: "fontSizes.xs",
      [gu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: wo({
    container: {
      [hu.variable]: "sizes.6",
      [mu.variable]: "sizes.6",
      [vu.variable]: "fontSizes.sm",
      [gu.variable]: "space.2"
    }
  }),
  lg: wo({
    container: {
      [hu.variable]: "sizes.8",
      [mu.variable]: "sizes.8",
      [vu.variable]: "fontSizes.md",
      [gu.variable]: "space.3"
    }
  })
}, CO = {
  subtle: wo((e) => {
    var t;
    return {
      container: (t = Ya.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: wo((e) => {
    var t;
    return {
      container: (t = Ya.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: wo((e) => {
    var t;
    return {
      container: (t = Ya.variants) == null ? void 0 : t.outline(e)
    };
  })
}, _O = yO({
  variants: CO,
  baseStyle: wO,
  sizes: kO,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: er, defineMultiStyleConfig: PO } = we(KM.keys), di = U("input-height"), fi = U("input-font-size"), pi = U("input-padding"), hi = U("input-border-radius"), TO = er({
  addon: {
    height: di.reference,
    fontSize: fi.reference,
    px: pi.reference,
    borderRadius: hi.reference
  },
  field: {
    width: "100%",
    height: di.reference,
    fontSize: fi.reference,
    px: pi.reference,
    borderRadius: hi.reference,
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
}), br = {
  lg: {
    [fi.variable]: "fontSizes.lg",
    [pi.variable]: "space.4",
    [hi.variable]: "radii.md",
    [di.variable]: "sizes.12"
  },
  md: {
    [fi.variable]: "fontSizes.md",
    [pi.variable]: "space.4",
    [hi.variable]: "radii.md",
    [di.variable]: "sizes.10"
  },
  sm: {
    [fi.variable]: "fontSizes.sm",
    [pi.variable]: "space.3",
    [hi.variable]: "radii.sm",
    [di.variable]: "sizes.8"
  },
  xs: {
    [fi.variable]: "fontSizes.xs",
    [pi.variable]: "space.2",
    [hi.variable]: "radii.sm",
    [di.variable]: "sizes.6"
  }
}, EO = {
  lg: er({
    field: br.lg,
    group: br.lg
  }),
  md: er({
    field: br.md,
    group: br.md
  }),
  sm: er({
    field: br.sm,
    group: br.sm
  }),
  xs: er({
    field: br.xs,
    group: br.xs
  })
};
function Tm(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || W("blue.500", "blue.300")(e),
    errorBorderColor: n || W("red.500", "red.300")(e)
  };
}
var AO = er((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Tm(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: W("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: yt(t, r),
        boxShadow: `0 0 0 1px ${yt(t, r)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: yt(t, n),
        boxShadow: `0 0 0 1px ${yt(t, n)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: W("inherit", "whiteAlpha.50")(e),
      bg: W("gray.100", "whiteAlpha.300")(e)
    }
  };
}), $O = er((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Tm(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: W("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: W("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: yt(t, r)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: yt(t, n)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: W("gray.100", "whiteAlpha.50")(e)
    }
  };
}), MO = er((e) => {
  const { theme: t } = e, { focusBorderColor: n, errorBorderColor: r } = Tm(e);
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
        borderColor: yt(t, r),
        boxShadow: `0px 1px 0px 0px ${yt(t, r)}`
      },
      _focusVisible: {
        borderColor: yt(t, n),
        boxShadow: `0px 1px 0px 0px ${yt(t, n)}`
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
}), RO = er({
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
}), OO = {
  outline: AO,
  filled: $O,
  flushed: MO,
  unstyled: RO
}, fe = PO({
  baseStyle: TO,
  sizes: EO,
  variants: OO,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), z0, IO = {
  ...(z0 = fe.baseStyle) == null ? void 0 : z0.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, F0, j0, DO = {
  outline: (e) => {
    var t, n;
    return (n = (t = fe.variants) == null ? void 0 : t.outline(e).field) != null ? n : {};
  },
  flushed: (e) => {
    var t, n;
    return (n = (t = fe.variants) == null ? void 0 : t.flushed(e).field) != null ? n : {};
  },
  filled: (e) => {
    var t, n;
    return (n = (t = fe.variants) == null ? void 0 : t.filled(e).field) != null ? n : {};
  },
  unstyled: (j0 = (F0 = fe.variants) == null ? void 0 : F0.unstyled.field) != null ? j0 : {}
}, N0, L0, B0, V0, W0, U0, H0, G0, zO = {
  xs: (L0 = (N0 = fe.sizes) == null ? void 0 : N0.xs.field) != null ? L0 : {},
  sm: (V0 = (B0 = fe.sizes) == null ? void 0 : B0.sm.field) != null ? V0 : {},
  md: (U0 = (W0 = fe.sizes) == null ? void 0 : W0.md.field) != null ? U0 : {},
  lg: (G0 = (H0 = fe.sizes) == null ? void 0 : H0.lg.field) != null ? G0 : {}
}, FO = {
  baseStyle: IO,
  sizes: zO,
  variants: DO,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Dl = Ye("tooltip-bg"), tf = Ye("tooltip-fg"), jO = Ye("popper-arrow-bg"), NO = {
  bg: Dl.reference,
  color: tf.reference,
  [Dl.variable]: "colors.gray.700",
  [tf.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Dl.variable]: "colors.gray.300",
    [tf.variable]: "colors.gray.900"
  },
  [jO.variable]: Dl.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, LO = {
  baseStyle: NO
}, { defineMultiStyleConfig: BO, definePartsStyle: Oa } = we(JM.keys), VO = (e) => {
  const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e, i = W(
    A0(),
    A0("1rem", "rgba(0,0,0,0.1)")
  )(e), a = W(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${yt(n, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!r && o && i,
    ...r ? { bgImage: s } : { bgColor: a }
  };
}, WO = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, UO = (e) => ({
  bg: W("gray.100", "whiteAlpha.300")(e)
}), HO = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...VO(e)
}), GO = Oa((e) => ({
  label: WO,
  filledTrack: HO(e),
  track: UO(e)
})), KO = {
  xs: Oa({
    track: { h: "1" }
  }),
  sm: Oa({
    track: { h: "2" }
  }),
  md: Oa({
    track: { h: "3" }
  }),
  lg: Oa({
    track: { h: "4" }
  })
}, YO = BO({
  sizes: KO,
  baseStyle: GO,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), qO = (e) => typeof e == "function";
function xt(e, ...t) {
  return qO(e) ? e(...t) : e;
}
var { definePartsStyle: yu, defineMultiStyleConfig: XO } = we(VM.keys), qa = U("checkbox-size"), QO = (e) => {
  const { colorScheme: t } = e;
  return {
    w: qa.reference,
    h: qa.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: W(`${t}.500`, `${t}.200`)(e),
      borderColor: W(`${t}.500`, `${t}.200`)(e),
      color: W("white", "gray.900")(e),
      _hover: {
        bg: W(`${t}.600`, `${t}.300`)(e),
        borderColor: W(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: W("gray.200", "transparent")(e),
        bg: W("gray.200", "whiteAlpha.300")(e),
        color: W("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: W(`${t}.500`, `${t}.200`)(e),
      borderColor: W(`${t}.500`, `${t}.200`)(e),
      color: W("white", "gray.900")(e)
    },
    _disabled: {
      bg: W("gray.100", "whiteAlpha.100")(e),
      borderColor: W("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: W("red.500", "red.300")(e)
    }
  };
}, ZO = {
  _disabled: { cursor: "not-allowed" }
}, JO = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, e5 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, t5 = yu((e) => ({
  icon: e5,
  container: ZO,
  control: xt(QO, e),
  label: JO
})), n5 = {
  sm: yu({
    control: { [qa.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: yu({
    control: { [qa.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: yu({
    control: { [qa.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, nc = XO({
  baseStyle: t5,
  sizes: n5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: r5, definePartsStyle: bu } = we(eR.keys), o5 = (e) => {
  var t;
  const n = (t = xt(nc.baseStyle, e)) == null ? void 0 : t.control;
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
}, i5 = bu((e) => {
  var t, n, r, o;
  return {
    label: (n = (t = nc).baseStyle) == null ? void 0 : n.call(t, e).label,
    container: (o = (r = nc).baseStyle) == null ? void 0 : o.call(r, e).container,
    control: o5(e)
  };
}), a5 = {
  md: bu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: bu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: bu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, s5 = r5({
  baseStyle: i5,
  sizes: a5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: l5, definePartsStyle: u5 } = we(tR.keys), zl = U("select-bg"), K0, c5 = {
  ...(K0 = fe.baseStyle) == null ? void 0 : K0.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: zl.reference,
  [zl.variable]: "colors.white",
  _dark: {
    [zl.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: zl.reference
  }
}, d5 = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, f5 = u5({
  field: c5,
  icon: d5
}), Fl = {
  paddingInlineEnd: "8"
}, Y0, q0, X0, Q0, Z0, J0, ey, ty, p5 = {
  lg: {
    ...(Y0 = fe.sizes) == null ? void 0 : Y0.lg,
    field: {
      ...(q0 = fe.sizes) == null ? void 0 : q0.lg.field,
      ...Fl
    }
  },
  md: {
    ...(X0 = fe.sizes) == null ? void 0 : X0.md,
    field: {
      ...(Q0 = fe.sizes) == null ? void 0 : Q0.md.field,
      ...Fl
    }
  },
  sm: {
    ...(Z0 = fe.sizes) == null ? void 0 : Z0.sm,
    field: {
      ...(J0 = fe.sizes) == null ? void 0 : J0.sm.field,
      ...Fl
    }
  },
  xs: {
    ...(ey = fe.sizes) == null ? void 0 : ey.xs,
    field: {
      ...(ty = fe.sizes) == null ? void 0 : ty.xs.field,
      ...Fl
    },
    icon: {
      insetEnd: "1"
    }
  }
}, h5 = l5({
  baseStyle: f5,
  sizes: p5,
  variants: fe.variants,
  defaultProps: fe.defaultProps
}), nf = U("skeleton-start-color"), rf = U("skeleton-end-color"), m5 = {
  [nf.variable]: "colors.gray.100",
  [rf.variable]: "colors.gray.400",
  _dark: {
    [nf.variable]: "colors.gray.800",
    [rf.variable]: "colors.gray.600"
  },
  background: nf.reference,
  borderColor: rf.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, v5 = {
  baseStyle: m5
}, of = U("skip-link-bg"), g5 = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [of.variable]: "colors.white",
    _dark: {
      [of.variable]: "colors.gray.700"
    },
    bg: of.reference
  }
}, y5 = {
  baseStyle: g5
}, { defineMultiStyleConfig: b5, definePartsStyle: Jc } = we(nR.keys), Es = U("slider-thumb-size"), As = U("slider-track-size"), Tr = U("slider-bg"), x5 = (e) => {
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
    ...Pm({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, S5 = (e) => ({
  ...Pm({
    orientation: e.orientation,
    horizontal: { h: As.reference },
    vertical: { w: As.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Tr.variable]: "colors.gray.200",
  _dark: {
    [Tr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Tr.variable]: "colors.gray.300",
    _dark: {
      [Tr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Tr.reference
}), w5 = (e) => {
  const { orientation: t } = e;
  return {
    ...Pm({
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
    w: Es.reference,
    h: Es.reference,
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
}, k5 = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Tr.variable]: `colors.${t}.500`,
    _dark: {
      [Tr.variable]: `colors.${t}.200`
    },
    bg: Tr.reference
  };
}, C5 = Jc((e) => ({
  container: x5(e),
  track: S5(e),
  thumb: w5(e),
  filledTrack: k5(e)
})), _5 = Jc({
  container: {
    [Es.variable]: "sizes.4",
    [As.variable]: "sizes.1"
  }
}), P5 = Jc({
  container: {
    [Es.variable]: "sizes.3.5",
    [As.variable]: "sizes.1"
  }
}), T5 = Jc({
  container: {
    [Es.variable]: "sizes.2.5",
    [As.variable]: "sizes.0.5"
  }
}), E5 = {
  lg: _5,
  md: P5,
  sm: T5
}, A5 = b5({
  baseStyle: C5,
  sizes: E5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), co = Ye("spinner-size"), $5 = {
  width: [co.reference],
  height: [co.reference]
}, M5 = {
  xs: {
    [co.variable]: "sizes.3"
  },
  sm: {
    [co.variable]: "sizes.4"
  },
  md: {
    [co.variable]: "sizes.6"
  },
  lg: {
    [co.variable]: "sizes.8"
  },
  xl: {
    [co.variable]: "sizes.12"
  }
}, R5 = {
  baseStyle: $5,
  sizes: M5,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: O5, definePartsStyle: QS } = we(rR.keys), I5 = {
  fontWeight: "medium"
}, D5 = {
  opacity: 0.8,
  marginBottom: "2"
}, z5 = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, F5 = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, j5 = QS({
  container: {},
  label: I5,
  helpText: D5,
  number: z5,
  icon: F5
}), N5 = {
  md: QS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, L5 = O5({
  baseStyle: j5,
  sizes: N5,
  defaultProps: {
    size: "md"
  }
}), af = U("kbd-bg"), B5 = {
  [af.variable]: "colors.gray.100",
  _dark: {
    [af.variable]: "colors.whiteAlpha.100"
  },
  bg: af.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, V5 = {
  baseStyle: B5
}, W5 = {
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
}, U5 = {
  baseStyle: W5
}, { defineMultiStyleConfig: H5, definePartsStyle: G5 } = we(YM.keys), K5 = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, Y5 = G5({
  icon: K5
}), q5 = H5({
  baseStyle: Y5
}), { defineMultiStyleConfig: X5, definePartsStyle: Q5 } = we(qM.keys), Pn = U("menu-bg"), sf = U("menu-shadow"), Z5 = {
  [Pn.variable]: "#fff",
  [sf.variable]: "shadows.sm",
  _dark: {
    [Pn.variable]: "colors.gray.700",
    [sf.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Pn.reference,
  boxShadow: sf.reference
}, J5 = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Pn.variable]: "colors.gray.100",
    _dark: {
      [Pn.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Pn.variable]: "colors.gray.200",
    _dark: {
      [Pn.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Pn.variable]: "colors.gray.100",
    _dark: {
      [Pn.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Pn.reference
}, eI = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, tI = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, nI = {
  opacity: 0.6
}, rI = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, oI = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, iI = Q5({
  button: oI,
  list: Z5,
  item: J5,
  groupTitle: eI,
  icon: tI,
  command: nI,
  divider: rI
}), aI = X5({
  baseStyle: iI
}), { defineMultiStyleConfig: sI, definePartsStyle: Up } = we(XM.keys), lf = U("modal-bg"), uf = U("modal-shadow"), lI = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, uI = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: n === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, cI = (e) => {
  const { isCentered: t, scrollBehavior: n } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [lf.variable]: "colors.white",
    [uf.variable]: "shadows.lg",
    _dark: {
      [lf.variable]: "colors.gray.700",
      [uf.variable]: "shadows.dark-lg"
    },
    bg: lf.reference,
    boxShadow: uf.reference
  };
}, dI = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, fI = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, pI = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, hI = {
  px: "6",
  py: "4"
}, mI = Up((e) => ({
  overlay: lI,
  dialogContainer: xt(uI, e),
  dialog: xt(cI, e),
  header: dI,
  closeButton: fI,
  body: xt(pI, e),
  footer: hI
}));
function dn(e) {
  return Up(e === "full" ? {
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
var vI = {
  xs: dn("xs"),
  sm: dn("sm"),
  md: dn("md"),
  lg: dn("lg"),
  xl: dn("xl"),
  "2xl": dn("2xl"),
  "3xl": dn("3xl"),
  "4xl": dn("4xl"),
  "5xl": dn("5xl"),
  "6xl": dn("6xl"),
  full: dn("full")
}, gI = sI({
  baseStyle: mI,
  sizes: vI,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: yI, definePartsStyle: ZS } = we(QM.keys), Em = Ye("number-input-stepper-width"), JS = Ye("number-input-input-padding"), bI = Qn(Em).add("0.5rem").toString(), cf = Ye("number-input-bg"), df = Ye("number-input-color"), ff = Ye("number-input-border-color"), xI = {
  [Em.variable]: "sizes.6",
  [JS.variable]: bI
}, SI = (e) => {
  var t, n;
  return (n = (t = xt(fe.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {};
}, wI = {
  width: Em.reference
}, kI = {
  borderStart: "1px solid",
  borderStartColor: ff.reference,
  color: df.reference,
  bg: cf.reference,
  [df.variable]: "colors.chakra-body-text",
  [ff.variable]: "colors.chakra-border-color",
  _dark: {
    [df.variable]: "colors.whiteAlpha.800",
    [ff.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [cf.variable]: "colors.gray.200",
    _dark: {
      [cf.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, CI = ZS((e) => {
  var t;
  return {
    root: xI,
    field: (t = xt(SI, e)) != null ? t : {},
    stepperGroup: wI,
    stepper: kI
  };
});
function jl(e) {
  var t, n, r;
  const o = (t = fe.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md", s = GS.fontSizes[a];
  return ZS({
    field: {
      ...o.field,
      paddingInlineEnd: JS.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Qn(s).multiply(0.75).toString(),
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
var _I = {
  xs: jl("xs"),
  sm: jl("sm"),
  md: jl("md"),
  lg: jl("lg")
}, PI = yI({
  baseStyle: CI,
  sizes: _I,
  variants: fe.variants,
  defaultProps: fe.defaultProps
}), ny, TI = {
  ...(ny = fe.baseStyle) == null ? void 0 : ny.field,
  textAlign: "center"
}, EI = {
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
}, ry, oy, AI = {
  outline: (e) => {
    var t, n, r;
    return (r = (n = xt((t = fe.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  flushed: (e) => {
    var t, n, r;
    return (r = (n = xt((t = fe.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  filled: (e) => {
    var t, n, r;
    return (r = (n = xt((t = fe.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {};
  },
  unstyled: (oy = (ry = fe.variants) == null ? void 0 : ry.unstyled.field) != null ? oy : {}
}, $I = {
  baseStyle: TI,
  sizes: EI,
  variants: AI,
  defaultProps: fe.defaultProps
}, { defineMultiStyleConfig: MI, definePartsStyle: RI } = we(ZM.keys), Nl = Ye("popper-bg"), OI = Ye("popper-arrow-bg"), iy = Ye("popper-arrow-shadow-color"), II = { zIndex: 10 }, DI = {
  [Nl.variable]: "colors.white",
  bg: Nl.reference,
  [OI.variable]: Nl.reference,
  [iy.variable]: "colors.gray.200",
  _dark: {
    [Nl.variable]: "colors.gray.700",
    [iy.variable]: "colors.whiteAlpha.300"
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
}, zI = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, FI = {
  px: 3,
  py: 2
}, jI = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, NI = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, LI = RI({
  popper: II,
  content: DI,
  header: zI,
  body: FI,
  footer: jI,
  closeButton: NI
}), BI = MI({
  baseStyle: LI
}), { definePartsStyle: Hp, defineMultiStyleConfig: VI } = we(WM.keys), pf = U("drawer-bg"), hf = U("drawer-box-shadow");
function Ho(e) {
  return Hp(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var WI = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, UI = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, HI = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [pf.variable]: "colors.white",
    [hf.variable]: "shadows.lg",
    _dark: {
      [pf.variable]: "colors.gray.700",
      [hf.variable]: "shadows.dark-lg"
    },
    bg: pf.reference,
    boxShadow: hf.reference
  };
}, GI = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, KI = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, YI = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, qI = {
  px: "6",
  py: "4"
}, XI = Hp((e) => ({
  overlay: WI,
  dialogContainer: UI,
  dialog: xt(HI, e),
  header: GI,
  closeButton: KI,
  body: YI,
  footer: qI
})), QI = {
  xs: Ho("xs"),
  sm: Ho("md"),
  md: Ho("lg"),
  lg: Ho("2xl"),
  xl: Ho("4xl"),
  full: Ho("full")
}, ZI = VI({
  baseStyle: XI,
  sizes: QI,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: JI, defineMultiStyleConfig: eD } = we(UM.keys), tD = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, nD = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, rD = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, oD = JI({
  preview: tD,
  input: nD,
  textarea: rD
}), iD = eD({
  baseStyle: oD
}), { definePartsStyle: aD, defineMultiStyleConfig: sD } = we(HM.keys), Ei = U("form-control-color"), lD = {
  marginStart: "1",
  [Ei.variable]: "colors.red.500",
  _dark: {
    [Ei.variable]: "colors.red.300"
  },
  color: Ei.reference
}, uD = {
  mt: "2",
  [Ei.variable]: "colors.gray.600",
  _dark: {
    [Ei.variable]: "colors.whiteAlpha.600"
  },
  color: Ei.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, cD = aD({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: lD,
  helperText: uD
}), dD = sD({
  baseStyle: cD
}), { definePartsStyle: fD, defineMultiStyleConfig: pD } = we(GM.keys), Ai = U("form-error-color"), hD = {
  [Ai.variable]: "colors.red.500",
  _dark: {
    [Ai.variable]: "colors.red.300"
  },
  color: Ai.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, mD = {
  marginEnd: "0.5em",
  [Ai.variable]: "colors.red.500",
  _dark: {
    [Ai.variable]: "colors.red.300"
  },
  color: Ai.reference
}, vD = fD({
  text: hD,
  icon: mD
}), gD = pD({
  baseStyle: vD
}), yD = {
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
}, bD = {
  baseStyle: yD
}, xD = {
  fontFamily: "heading",
  fontWeight: "bold"
}, SD = {
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
}, wD = {
  baseStyle: xD,
  sizes: SD,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: kD, definePartsStyle: CD } = we(BM.keys), mf = U("breadcrumb-link-decor"), _D = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: mf.reference,
  [mf.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [mf.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, PD = CD({
  link: _D
}), TD = kD({
  baseStyle: PD
}), ED = {
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
}, ew = (e) => {
  const { colorScheme: t, theme: n } = e;
  if (t === "gray")
    return {
      color: W("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: W("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: W("gray.200", "whiteAlpha.300")(e) }
    };
  const r = Vi(`${t}.200`, 0.12)(n), o = Vi(`${t}.200`, 0.24)(n);
  return {
    color: W(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: W(`${t}.50`, r)(e)
    },
    _active: {
      bg: W(`${t}.100`, o)(e)
    }
  };
}, AD = (e) => {
  const { colorScheme: t } = e, n = W("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? n : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...xt(ew, e)
  };
}, $D = {
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
}, MD = (e) => {
  var t;
  const { colorScheme: n } = e;
  if (n === "gray") {
    const l = W("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: W("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: W("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: W("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: r = `${n}.500`,
    color: o = "white",
    hoverBg: i = `${n}.600`,
    activeBg: a = `${n}.700`
  } = (t = $D[n]) != null ? t : {}, s = W(r, `${n}.200`)(e);
  return {
    bg: s,
    color: W(o, "gray.800")(e),
    _hover: {
      bg: W(i, `${n}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: W(a, `${n}.400`)(e) }
  };
}, RD = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: W(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: W(`${t}.700`, `${t}.500`)(e)
    }
  };
}, OD = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, ID = {
  ghost: ew,
  outline: AD,
  solid: MD,
  link: RD,
  unstyled: OD
}, DD = {
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
}, zD = {
  baseStyle: ED,
  variants: ID,
  sizes: DD,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: ko, defineMultiStyleConfig: FD } = we(lR.keys), rc = U("card-bg"), rr = U("card-padding"), tw = U("card-shadow"), xu = U("card-radius"), nw = U("card-border-width", "0"), rw = U("card-border-color"), jD = ko({
  container: {
    [rc.variable]: "colors.chakra-body-bg",
    backgroundColor: rc.reference,
    boxShadow: tw.reference,
    borderRadius: xu.reference,
    color: "chakra-body-text",
    borderWidth: nw.reference,
    borderColor: rw.reference
  },
  body: {
    padding: rr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: rr.reference
  },
  footer: {
    padding: rr.reference
  }
}), ND = {
  sm: ko({
    container: {
      [xu.variable]: "radii.base",
      [rr.variable]: "space.3"
    }
  }),
  md: ko({
    container: {
      [xu.variable]: "radii.md",
      [rr.variable]: "space.5"
    }
  }),
  lg: ko({
    container: {
      [xu.variable]: "radii.xl",
      [rr.variable]: "space.7"
    }
  })
}, LD = {
  elevated: ko({
    container: {
      [tw.variable]: "shadows.base",
      _dark: {
        [rc.variable]: "colors.gray.700"
      }
    }
  }),
  outline: ko({
    container: {
      [nw.variable]: "1px",
      [rw.variable]: "colors.chakra-border-color"
    }
  }),
  filled: ko({
    container: {
      [rc.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [rr.variable]: 0
    },
    header: {
      [rr.variable]: 0
    },
    footer: {
      [rr.variable]: 0
    }
  }
}, BD = FD({
  baseStyle: jD,
  variants: LD,
  sizes: ND,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Xa = Ye("close-button-size"), xa = Ye("close-button-bg"), VD = {
  w: [Xa.reference],
  h: [Xa.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [xa.variable]: "colors.blackAlpha.100",
    _dark: {
      [xa.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [xa.variable]: "colors.blackAlpha.200",
    _dark: {
      [xa.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: xa.reference
}, WD = {
  lg: {
    [Xa.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Xa.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Xa.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, UD = {
  baseStyle: VD,
  sizes: WD,
  defaultProps: {
    size: "md"
  }
}, { variants: HD, defaultProps: GD } = Ya, KD = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Be.bg.reference,
  color: Be.color.reference,
  boxShadow: Be.shadow.reference
}, YD = {
  baseStyle: KD,
  variants: HD,
  defaultProps: GD
}, qD = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, XD = {
  baseStyle: qD
}, QD = {
  opacity: 0.6,
  borderColor: "inherit"
}, ZD = {
  borderStyle: "solid"
}, JD = {
  borderStyle: "dashed"
}, ez = {
  solid: ZD,
  dashed: JD
}, tz = {
  baseStyle: QD,
  variants: ez,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: nz, defineMultiStyleConfig: rz } = we(jM.keys), oz = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, iz = {
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
}, az = {
  pt: "2",
  px: "4",
  pb: "5"
}, sz = {
  fontSize: "1.25em"
}, lz = nz({
  container: oz,
  button: iz,
  panel: az,
  icon: sz
}), uz = rz({ baseStyle: lz }), { definePartsStyle: qs, defineMultiStyleConfig: cz } = we(NM.keys), Nt = U("alert-fg"), cr = U("alert-bg"), dz = qs({
  container: {
    bg: cr.reference,
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
    color: Nt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Nt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Am(e) {
  const { theme: t, colorScheme: n } = e, r = Vi(`${n}.200`, 0.16)(t);
  return {
    light: `colors.${n}.100`,
    dark: r
  };
}
var fz = qs((e) => {
  const { colorScheme: t } = e, n = Am(e);
  return {
    container: {
      [Nt.variable]: `colors.${t}.600`,
      [cr.variable]: n.light,
      _dark: {
        [Nt.variable]: `colors.${t}.200`,
        [cr.variable]: n.dark
      }
    }
  };
}), pz = qs((e) => {
  const { colorScheme: t } = e, n = Am(e);
  return {
    container: {
      [Nt.variable]: `colors.${t}.600`,
      [cr.variable]: n.light,
      _dark: {
        [Nt.variable]: `colors.${t}.200`,
        [cr.variable]: n.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Nt.reference
    }
  };
}), hz = qs((e) => {
  const { colorScheme: t } = e, n = Am(e);
  return {
    container: {
      [Nt.variable]: `colors.${t}.600`,
      [cr.variable]: n.light,
      _dark: {
        [Nt.variable]: `colors.${t}.200`,
        [cr.variable]: n.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Nt.reference
    }
  };
}), mz = qs((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Nt.variable]: "colors.white",
      [cr.variable]: `colors.${t}.600`,
      _dark: {
        [Nt.variable]: "colors.gray.900",
        [cr.variable]: `colors.${t}.200`
      },
      color: Nt.reference
    }
  };
}), vz = {
  subtle: fz,
  "left-accent": pz,
  "top-accent": hz,
  solid: mz
}, gz = cz({
  baseStyle: dz,
  variants: vz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: ow, defineMultiStyleConfig: yz } = we(LM.keys), $i = U("avatar-border-color"), Qa = U("avatar-bg"), $s = U("avatar-font-size"), Wi = U("avatar-size"), bz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: $i.reference,
  [$i.variable]: "white",
  _dark: {
    [$i.variable]: "colors.gray.800"
  }
}, xz = {
  bg: Qa.reference,
  fontSize: $s.reference,
  width: Wi.reference,
  height: Wi.reference,
  lineHeight: "1",
  [Qa.variable]: "colors.gray.200",
  _dark: {
    [Qa.variable]: "colors.whiteAlpha.400"
  }
}, Sz = (e) => {
  const { name: t, theme: n } = e, r = t ? ER({ string: t }) : "colors.gray.400", o = PR(r)(n);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: Qa.reference,
    fontSize: $s.reference,
    color: i,
    borderColor: $i.reference,
    verticalAlign: "top",
    width: Wi.reference,
    height: Wi.reference,
    "&:not([data-loaded])": {
      [Qa.variable]: r
    },
    [$i.variable]: "colors.white",
    _dark: {
      [$i.variable]: "colors.gray.800"
    }
  };
}, wz = {
  fontSize: $s.reference,
  lineHeight: "1"
}, kz = ow((e) => ({
  badge: xt(bz, e),
  excessLabel: xt(xz, e),
  container: xt(Sz, e),
  label: wz
}));
function xr(e) {
  const t = e !== "100%" ? YS[e] : void 0;
  return ow({
    container: {
      [Wi.variable]: t ?? e,
      [$s.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Wi.variable]: t ?? e,
      [$s.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var Cz = {
  "2xs": xr(4),
  xs: xr(6),
  sm: xr(8),
  md: xr(12),
  lg: xr(16),
  xl: xr(24),
  "2xl": xr(32),
  full: xr("100%")
}, _z = yz({
  baseStyle: kz,
  sizes: Cz,
  defaultProps: {
    size: "md"
  }
}), Pz = {
  Accordion: uz,
  Alert: gz,
  Avatar: _z,
  Badge: Ya,
  Breadcrumb: TD,
  Button: zD,
  Checkbox: nc,
  CloseButton: UD,
  Code: YD,
  Container: XD,
  Divider: tz,
  Drawer: ZI,
  Editable: iD,
  Form: dD,
  FormError: gD,
  FormLabel: bD,
  Heading: wD,
  Input: fe,
  Kbd: V5,
  Link: U5,
  List: q5,
  Menu: aI,
  Modal: gI,
  NumberInput: PI,
  PinInput: $I,
  Popover: BI,
  Progress: YO,
  Radio: s5,
  Select: h5,
  Skeleton: v5,
  SkipLink: y5,
  Slider: A5,
  Spinner: R5,
  Stat: L5,
  Switch: UR,
  Table: QR,
  Tabs: fO,
  Tag: _O,
  Textarea: FO,
  Tooltip: LO,
  Card: BD,
  Stepper: FM
}, Tz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Ez = {
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
}, Az = "ltr", $z = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, iw = {
  semanticTokens: Tz,
  direction: Az,
  ...IM,
  components: Pz,
  styles: Ez,
  config: $z
};
function Ia(e) {
  return typeof e == "function";
}
function Mz(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var Rz = (e) => function(...n) {
  let r = [...n], o = n[n.length - 1];
  return cM(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  r.length > 1 ? r = r.slice(0, r.length - 1) : o = e, Mz(
    ...r.map(
      (i) => (a) => Ia(i) ? i(a) : Iz(a, i)
    )
  )(o);
}, Oz = Rz(iw);
function Iz(...e) {
  return tn({}, ...e, aw);
}
function aw(e, t, n, r) {
  if ((Ia(e) || Ia(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = Ia(e) ? e(...o) : e, a = Ia(t) ? t(...o) : t;
      return tn({}, i, a, aw);
    };
}
function Dz() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var zz = /* @__PURE__ */ Dz();
function Fz(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    t.includes(r) || (n[r] = e[r]);
  }), n;
}
function jz(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1)
    e = e[o[r]];
  return e === void 0 ? n : e;
}
var Nz = (e) => {
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
}, sw = Nz(jz);
function lw(e, t) {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const o = e[r];
    t(o, r, e) && (n[r] = o);
  }), n;
}
var uw = (e) => lw(e, (t) => t != null);
function Lz(e) {
  return typeof e == "function";
}
function cw(e, ...t) {
  return Lz(e) ? e(...t) : e;
}
function Bz(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var Vz = typeof Element < "u", Wz = typeof Map == "function", Uz = typeof Set == "function", Hz = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Su(e, t) {
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
        if (!Su(e[r], t[r]))
          return !1;
      return !0;
    }
    var i;
    if (Wz && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Su(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (Uz && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0]))
          return !1;
      return !0;
    }
    if (Hz && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (Vz && e instanceof Element)
      return !1;
    for (r = n; r-- !== 0; )
      if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Su(e[o[r]], t[o[r]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Gz = function(t, n) {
  try {
    return Su(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const Kz = /* @__PURE__ */ Ns(Gz);
function dw(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t, { theme: i, colorMode: a } = HA(), s = e ? sw(i, `components.${e}`) : void 0, l = r || s, u = tn(
    { theme: i, colorMode: a },
    (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
    uw(Fz(o, ["children"]))
  ), c = v.useRef({});
  if (l) {
    const f = lM(l)(u);
    Kz(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Xs(e, t = {}) {
  return dw(e, t);
}
function zo(e, t = {}) {
  return dw(e, t);
}
var Yz = /* @__PURE__ */ new Set([
  ...X$,
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
]), qz = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function Xz(e) {
  return qz.has(e) || !Yz.has(e);
}
function Qz(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (o in n && delete n[o], n[o] = r[o]);
  return n;
}
function Zz(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var Jz = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, eF = /* @__PURE__ */ SS(
  function(e) {
    return Jz.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), tF = eF, nF = function(t) {
  return t !== "theme";
}, ay = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? tF : nF;
}, sy = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, rF = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return TS(n, r, o), SA(function() {
    return ES(n, r, o);
  }), null;
}, oF = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, a;
  n !== void 0 && (i = n.label, a = n.target);
  var s = sy(t, n, r), l = s || ay(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var y = RS(function(g, x, m) {
      var h = u && g.as || o, b = "", S = [], C = g;
      if (g.theme == null) {
        C = {};
        for (var P in g)
          C[P] = g[P];
        C.theme = v.useContext(_s);
      }
      typeof g.className == "string" ? b = hA(x.registered, S, g.className) : g.className != null && (b = g.className + " ");
      var _ = bm(d.concat(S), x.registered, C);
      b += x.key + "-" + _.name, a !== void 0 && (b += " " + a);
      var A = u && s === void 0 ? ay(h) : l, M = {};
      for (var R in g)
        u && R === "as" || // $FlowFixMe
        A(R) && (M[R] = g[R]);
      return M.className = b, M.ref = m, /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(rF, {
        cache: x,
        serialized: _,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ v.createElement(h, M));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return "." + a;
      }
    }), y.withComponent = function(g, x) {
      return e(g, Ro({}, n, x, {
        shouldForwardProp: sy(y, x, !0)
      })).apply(void 0, d);
    }, y;
  };
}, iF = [
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
], oc = oF.bind();
iF.forEach(function(e) {
  oc[e] = oc(e);
});
var ly, aF = (ly = oc.default) != null ? ly : oc, sF = ({ baseStyle: e }) => (t) => {
  const { theme: n, css: r, __css: o, sx: i, ...a } = t, s = lw(a, (d, f) => Z$(f)), l = cw(e, t), u = Qz(
    {},
    o,
    l,
    uw(s),
    i
  ), c = HS(u)(t.theme);
  return r ? [c, r] : c;
};
function vf(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = Xz);
  const o = sF({ baseStyle: n }), i = aF(
    e,
    r
  )(o);
  return Po.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = Ks();
    return Po.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function lF() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(vf, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, n, r) {
      return vf(...r);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, n) {
      return e.has(n) || e.set(n, vf(n)), e.get(n);
    }
  });
}
var Y = lF();
function te(e) {
  return v.forwardRef(e);
}
function uF(e = {}) {
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
function cF(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e, o = v.useMemo(() => q$(n), [n]);
  return /* @__PURE__ */ k.jsxs(CA, { theme: o, children: [
    /* @__PURE__ */ k.jsx(dF, { root: t }),
    r
  ] });
}
function dF({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ k.jsx(Yc, { styles: (n) => ({ [t]: n.__cssVars }) });
}
uF({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function fF() {
  const { colorMode: e } = Ks();
  return /* @__PURE__ */ k.jsx(
    Yc,
    {
      styles: (t) => {
        const n = sw(t, "styles.global"), r = cw(n, { theme: t, colorMode: e });
        return r ? HS(r)(t) : void 0;
      }
    }
  );
}
var fw = v.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
fw.displayName = "EnvironmentContext";
function pw(e) {
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
  return /* @__PURE__ */ k.jsxs(fw.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ k.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
pw.displayName = "EnvironmentProvider";
var pF = (e) => {
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
  } = e, d = /* @__PURE__ */ k.jsx(
    pw,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ k.jsx(cF, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ k.jsxs(
    FS,
    {
      colorModeManager: n,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ k.jsx(EA, { scope: o }) : /* @__PURE__ */ k.jsx(TA, {}),
        !c && /* @__PURE__ */ k.jsx(fF, {}),
        r ? /* @__PURE__ */ k.jsx(DS, { zIndex: r, children: d }) : d
      ]
    }
  ) });
}, hF = (e, t) => e.find((n) => n.id === t);
function uy(e, t) {
  const n = hw(e, t), r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return {
    position: n,
    index: r
  };
}
function hw(e, t) {
  for (const [n, r] of Object.entries(e))
    if (hF(r, t))
      return n;
}
function mF(e) {
  const t = e.includes("right"), n = e.includes("left");
  let r = "center";
  return t && (r = "flex-end"), n && (r = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: r
  };
}
function vF(e) {
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
function Nr(e, t = []) {
  const n = v.useRef(e);
  return v.useEffect(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function gF(e, t) {
  const n = Nr(e);
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
function Ui(e, t) {
  const n = v.useRef(!1), r = v.useRef(!1);
  v.useEffect(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), v.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
}
const mw = v.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), ed = v.createContext({}), Qs = v.createContext(null), td = typeof document < "u", $m = td ? v.useLayoutEffect : v.useEffect, vw = v.createContext({ strict: !1 }), Mm = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), yF = "framerAppearId", gw = "data-" + Mm(yF);
function bF(e, t, n, r) {
  const { visualElement: o } = v.useContext(ed), i = v.useContext(vw), a = v.useContext(Qs), s = v.useContext(mw).reducedMotion, l = v.useRef();
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
  const c = v.useRef(!!n[gw]);
  return $m(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), v.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function mi(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function xF(e, t, n) {
  return v.useCallback(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : mi(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Ms(e) {
  return typeof e == "string" || Array.isArray(e);
}
function nd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Rm = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Om = ["initial", ...Rm];
function rd(e) {
  return nd(e.animate) || Om.some((t) => Ms(e[t]));
}
function yw(e) {
  return !!(rd(e) || e.variants);
}
function SF(e, t) {
  if (rd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ms(n) ? n : void 0,
      animate: Ms(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function wF(e) {
  const { initial: t, animate: n } = SF(e, v.useContext(ed));
  return v.useMemo(() => ({ initial: t, animate: n }), [cy(t), cy(n)]);
}
function cy(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const dy = {
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
}, Rs = {};
for (const e in dy)
  Rs[e] = {
    isEnabled: (t) => dy[e].some((n) => !!t[n])
  };
function kF(e) {
  for (const t in e)
    Rs[t] = {
      ...Rs[t],
      ...e[t]
    };
}
const Im = v.createContext({}), bw = v.createContext({}), CF = Symbol.for("motionComponentSymbol");
function _F({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && kF(e);
  function i(s, l) {
    let u;
    const c = {
      ...v.useContext(mw),
      ...s,
      layoutId: PF(s)
    }, { isStatic: d } = c, f = wF(s), p = r(s, d);
    if (!d && td) {
      f.visualElement = bF(o, p, c, t);
      const y = v.useContext(bw), g = v.useContext(vw).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        g,
        e,
        y
      ));
    }
    return v.createElement(
      ed.Provider,
      { value: f },
      u && f.visualElement ? v.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(o, s, xF(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = v.forwardRef(i);
  return a[CF] = o, a;
}
function PF({ layoutId: e }) {
  const t = v.useContext(Im).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function TF(e) {
  function t(r, o = {}) {
    return _F(e(r, o));
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
const EF = [
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
function Dm(e) {
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
      !!(EF.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const ic = {};
function AF(e) {
  Object.assign(ic, e);
}
const Zs = [
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
], Fo = new Set(Zs);
function xw(e, { layout: t, layoutId: n }) {
  return Fo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ic[e] || e === "opacity");
}
const Rt = (e) => !!(e && e.getVelocity), $F = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, MF = Zs.length;
function RF(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
  let i = "";
  for (let a = 0; a < MF; a++) {
    const s = Zs[a];
    if (e[s] !== void 0) {
      const l = $F[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i;
}
const Sw = (e) => (t) => typeof t == "string" && t.startsWith(e), ww = Sw("--"), Gp = Sw("var(--"), OF = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, IF = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ur = (e, t, n) => Math.min(Math.max(n, e), t), jo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Za = {
  ...jo,
  transform: (e) => Ur(0, 1, e)
}, Ll = {
  ...jo,
  default: 1
}, Ja = (e) => Math.round(e * 1e5) / 1e5, od = /(-)?([\d]*\.?[\d])+/g, kw = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, DF = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Js(e) {
  return typeof e == "string";
}
const el = (e) => ({
  test: (t) => Js(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Sr = el("deg"), Fn = el("%"), H = el("px"), zF = el("vh"), FF = el("vw"), fy = {
  ...Fn,
  parse: (e) => Fn.parse(e) / 100,
  transform: (e) => Fn.transform(e * 100)
}, py = {
  ...jo,
  transform: Math.round
}, Cw = {
  // Border props
  borderWidth: H,
  borderTopWidth: H,
  borderRightWidth: H,
  borderBottomWidth: H,
  borderLeftWidth: H,
  borderRadius: H,
  radius: H,
  borderTopLeftRadius: H,
  borderTopRightRadius: H,
  borderBottomRightRadius: H,
  borderBottomLeftRadius: H,
  // Positioning props
  width: H,
  maxWidth: H,
  height: H,
  maxHeight: H,
  size: H,
  top: H,
  right: H,
  bottom: H,
  left: H,
  // Spacing props
  padding: H,
  paddingTop: H,
  paddingRight: H,
  paddingBottom: H,
  paddingLeft: H,
  margin: H,
  marginTop: H,
  marginRight: H,
  marginBottom: H,
  marginLeft: H,
  // Transform props
  rotate: Sr,
  rotateX: Sr,
  rotateY: Sr,
  rotateZ: Sr,
  scale: Ll,
  scaleX: Ll,
  scaleY: Ll,
  scaleZ: Ll,
  skew: Sr,
  skewX: Sr,
  skewY: Sr,
  distance: H,
  translateX: H,
  translateY: H,
  translateZ: H,
  x: H,
  y: H,
  z: H,
  perspective: H,
  transformPerspective: H,
  opacity: Za,
  originX: fy,
  originY: fy,
  originZ: H,
  // Misc
  zIndex: py,
  // SVG
  fillOpacity: Za,
  strokeOpacity: Za,
  numOctaves: py
};
function zm(e, t, n, r) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (ww(d)) {
      i[d] = f;
      continue;
    }
    const p = Cw[d], y = IF(f, p);
    if (Fo.has(d)) {
      if (l = !0, a[d] = y, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = y) : o[d] = y;
  }
  if (t.transform || (l || r ? o.transform = RF(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Fm = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function _w(e, t, n) {
  for (const r in t)
    !Rt(t[r]) && !xw(r, n) && (e[r] = t[r]);
}
function jF({ transformTemplate: e }, t, n) {
  return v.useMemo(() => {
    const r = Fm();
    return zm(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function NF(e, t, n) {
  const r = e.style || {}, o = {};
  return _w(o, r, e), Object.assign(o, jF(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function LF(e, t, n) {
  const r = {}, o = NF(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
const BF = /* @__PURE__ */ new Set([
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
function ac(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || BF.has(e);
}
let Pw = (e) => !ac(e);
function VF(e) {
  e && (Pw = (t) => t.startsWith("on") ? !ac(t) : e(t));
}
try {
  VF(require("@emotion/is-prop-valid").default);
} catch {
}
function WF(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Pw(o) || n === !0 && ac(o) || !t && !ac(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function hy(e, t, n) {
  return typeof e == "string" ? e : H.transform(t + n * e);
}
function UF(e, t, n) {
  const r = hy(t, e.x, e.width), o = hy(n, e.y, e.height);
  return `${r} ${o}`;
}
const HF = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, GF = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function KF(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? HF : GF;
  e[i.offset] = H.transform(-r);
  const a = H.transform(t), s = H.transform(n);
  e[i.array] = `${a} ${s}`;
}
function jm(e, {
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
  if (zm(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: y, dimensions: g } = e;
  p.transform && (g && (y.transform = p.transform), delete p.transform), g && (o !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = UF(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && KF(p, a, s, l, !1);
}
const Tw = () => ({
  ...Fm(),
  attrs: {}
}), Nm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function YF(e, t, n, r) {
  const o = v.useMemo(() => {
    const i = Tw();
    return jm(i, t, { enableHardwareAcceleration: !1 }, Nm(r), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    _w(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function qF(e = !1) {
  return (n, r, o, { latestValues: i }, a) => {
    const l = (Dm(n) ? YF : LF)(r, i, a, n), c = {
      ...WF(r, typeof n == "string", e),
      ...l,
      ref: o
    }, { children: d } = r, f = v.useMemo(() => Rt(d) ? d.get() : d, [d]);
    return v.createElement(n, {
      ...c,
      children: f
    });
  };
}
function Ew(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n)
    e.style.setProperty(i, n[i]);
}
const Aw = /* @__PURE__ */ new Set([
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
function $w(e, t, n, r) {
  Ew(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Aw.has(o) ? o : Mm(o), t.attrs[o]);
}
function Lm(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (Rt(n[o]) || t.style && Rt(t.style[o]) || xw(o, e)) && (r[o] = n[o]);
  return r;
}
function Mw(e, t) {
  const n = Lm(e, t);
  for (const r in e)
    if (Rt(e[r]) || Rt(t[r])) {
      const o = Zs.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[o] = e[r];
    }
  return n;
}
function Bm(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
function Rw(e) {
  const t = v.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const sc = (e) => Array.isArray(e), XF = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), QF = (e) => sc(e) ? e[e.length - 1] || 0 : e;
function wu(e) {
  const t = Rt(e) ? e.get() : e;
  return XF(t) ? t.toValue() : t;
}
function ZF({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, i) {
  const a = {
    latestValues: JF(r, o, i, e),
    renderState: t()
  };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
const Ow = (e) => (t, n) => {
  const r = v.useContext(ed), o = v.useContext(Qs), i = () => ZF(e, t, r, o);
  return n ? i() : Rw(i);
};
function JF(e, t, n, r) {
  const o = {}, i = r(e, {});
  for (const f in i)
    o[f] = wu(i[f]);
  let { initial: a, animate: s } = e;
  const l = rd(e), u = yw(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !nd(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const y = Bm(e, p);
    if (!y)
      return;
    const { transitionEnd: g, transition: x, ...m } = y;
    for (const h in m) {
      let b = m[h];
      if (Array.isArray(b)) {
        const S = c ? b.length - 1 : 0;
        b = b[S];
      }
      b !== null && (o[h] = b);
    }
    for (const h in g)
      o[h] = g[h];
  }), o;
}
const je = (e) => e;
class my {
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
function e3(e) {
  let t = new my(), n = new my(), r = 0, o = !1, i = !1;
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
const Bl = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], t3 = 40;
function n3(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Bl.reduce((d, f) => (d[f] = e3(() => n = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, t3), 1), o.timestamp = d, o.isProcessing = !0, Bl.forEach(a), o.isProcessing = !1, n && t && (r = !1, e(s));
  }, l = () => {
    n = !0, r = !0, o.isProcessing || e(s);
  };
  return { schedule: Bl.reduce((d, f) => {
    const p = i[f];
    return d[f] = (y, g = !1, x = !1) => (n || l(), p.schedule(y, g, x)), d;
  }, {}), cancel: (d) => Bl.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: Se, cancel: dr, state: qe, steps: gf } = n3(typeof requestAnimationFrame < "u" ? requestAnimationFrame : je, !0), r3 = {
  useVisualState: Ow({
    scrapeMotionValuesFromProps: Mw,
    createRenderState: Tw,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      Se.read(() => {
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
      }), Se.render(() => {
        jm(n, r, { enableHardwareAcceleration: !1 }, Nm(t.tagName), e.transformTemplate), $w(t, n);
      });
    }
  })
}, o3 = {
  useVisualState: Ow({
    scrapeMotionValuesFromProps: Lm,
    createRenderState: Fm
  })
};
function i3(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Dm(e) ? r3 : o3,
    preloadedFeatures: n,
    useRender: qF(t),
    createVisualElement: r,
    Component: e
  };
}
function tr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Iw = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function id(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const a3 = (e) => (t) => Iw(t) && e(t, id(t));
function or(e, t, n, r) {
  return tr(e, t, a3(n), r);
}
const s3 = (e, t) => (n) => t(e(n)), Lr = (...e) => e.reduce(s3);
function Dw(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const vy = Dw("dragHorizontal"), gy = Dw("dragVertical");
function zw(e) {
  let t = !1;
  if (e === "y")
    t = gy();
  else if (e === "x")
    t = vy();
  else {
    const n = vy(), r = gy();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Fw() {
  const e = zw(!0);
  return e ? (e(), !1) : !0;
}
class Xr {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function yy(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || Fw())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[r] && Se.update(() => s[r](i, a));
  };
  return or(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class l3 extends Xr {
  mount() {
    this.unmount = Lr(yy(this.node, !0), yy(this.node, !1));
  }
  unmount() {
  }
}
class u3 extends Xr {
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
    this.unmount = Lr(tr(this.node.current, "focus", () => this.onFocus()), tr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const jw = (e, t) => t ? e === t ? !0 : jw(e, t.parentElement) : !1;
function yf(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, id(n));
}
class c3 extends Xr {
  constructor() {
    super(...arguments), this.removeStartListeners = je, this.removeEndListeners = je, this.removeAccessibleListeners = je, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), i = or(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        Se.update(() => {
          jw(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), a = or(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = Lr(i, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || yf("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Se.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = tr(this.node.current, "keyup", a), yf("down", (s, l) => {
          this.startPress(s, l);
        });
      }, n = tr(this.node.current, "keydown", t), r = () => {
        this.isPressing && yf("cancel", (i, a) => this.cancelPress(i, a));
      }, o = tr(this.node.current, "blur", r);
      this.removeAccessibleListeners = Lr(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && Se.update(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Fw();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && Se.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = or(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = tr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Lr(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Kp = /* @__PURE__ */ new WeakMap(), bf = /* @__PURE__ */ new WeakMap(), d3 = (e) => {
  const t = Kp.get(e.target);
  t && t(e);
}, f3 = (e) => {
  e.forEach(d3);
};
function p3({ root: e, ...t }) {
  const n = e || document;
  bf.has(n) || bf.set(n, {});
  const r = bf.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(f3, { root: e, ...t })), r[o];
}
function h3(e, t, n) {
  const r = p3(t);
  return Kp.set(e, n), r.observe(e), () => {
    Kp.delete(e), r.unobserve(e);
  };
}
const m3 = {
  some: 0,
  all: 1
};
class v3 extends Xr {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: i } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : m3[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return h3(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(g3(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function g3({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const y3 = {
  inView: {
    Feature: v3
  },
  tap: {
    Feature: c3
  },
  focus: {
    Feature: u3
  },
  hover: {
    Feature: l3
  }
};
function Nw(e, t) {
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
function b3(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function x3(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function ad(e, t, n) {
  const r = e.getProps();
  return Bm(r, t, n !== void 0 ? n : r.custom, b3(e), x3(e));
}
let S3 = je, Vm = je;
const Br = (e) => e * 1e3, ir = (e) => e / 1e3, w3 = {
  current: !1
}, Lw = (e) => Array.isArray(e) && typeof e[0] == "number";
function Bw(e) {
  return !!(!e || typeof e == "string" && Vw[e] || Lw(e) || Array.isArray(e) && e.every(Bw));
}
const Da = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Vw = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Da([0, 0.65, 0.55, 1]),
  circOut: Da([0.55, 0, 1, 0.45]),
  backIn: Da([0.31, 0.01, 0.66, -0.59]),
  backOut: Da([0.33, 1.53, 0.69, 0.99])
};
function Ww(e) {
  if (e)
    return Lw(e) ? Da(e) : Array.isArray(e) ? e.map(Ww) : Vw[e];
}
function k3(e, t, n, { delay: r = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Ww(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function C3(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Uw = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, _3 = 1e-7, P3 = 12;
function T3(e, t, n, r, o) {
  let i, a, s = 0;
  do
    a = t + (n - t) / 2, i = Uw(a, r, o) - e, i > 0 ? n = a : t = a;
  while (Math.abs(i) > _3 && ++s < P3);
  return a;
}
function tl(e, t, n, r) {
  if (e === t && n === r)
    return je;
  const o = (i) => T3(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : Uw(o(i), t, r);
}
const E3 = tl(0.42, 0, 1, 1), A3 = tl(0, 0, 0.58, 1), Hw = tl(0.42, 0, 0.58, 1), $3 = (e) => Array.isArray(e) && typeof e[0] != "number", Gw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Kw = (e) => (t) => 1 - e(1 - t), Yw = (e) => 1 - Math.sin(Math.acos(e)), Wm = Kw(Yw), M3 = Gw(Wm), qw = tl(0.33, 1.53, 0.69, 0.99), Um = Kw(qw), R3 = Gw(Um), O3 = (e) => (e *= 2) < 1 ? 0.5 * Um(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), I3 = {
  linear: je,
  easeIn: E3,
  easeInOut: Hw,
  easeOut: A3,
  circIn: Yw,
  circInOut: M3,
  circOut: Wm,
  backIn: Um,
  backInOut: R3,
  backOut: qw,
  anticipate: O3
}, by = (e) => {
  if (Array.isArray(e)) {
    Vm(e.length === 4);
    const [t, n, r, o] = e;
    return tl(t, n, r, o);
  } else if (typeof e == "string")
    return I3[e];
  return e;
}, Hm = (e, t) => (n) => !!(Js(n) && DF.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Xw = (e, t, n) => (r) => {
  if (!Js(r))
    return r;
  const [o, i, a, s] = r.match(od);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [n]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, D3 = (e) => Ur(0, 255, e), xf = {
  ...jo,
  transform: (e) => Math.round(D3(e))
}, vo = {
  test: Hm("rgb", "red"),
  parse: Xw("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + xf.transform(e) + ", " + xf.transform(t) + ", " + xf.transform(n) + ", " + Ja(Za.transform(r)) + ")"
};
function z3(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Yp = {
  test: Hm("#"),
  parse: z3,
  transform: vo.transform
}, vi = {
  test: Hm("hsl", "hue"),
  parse: Xw("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Fn.transform(Ja(t)) + ", " + Fn.transform(Ja(n)) + ", " + Ja(Za.transform(r)) + ")"
}, vt = {
  test: (e) => vo.test(e) || Yp.test(e) || vi.test(e),
  parse: (e) => vo.test(e) ? vo.parse(e) : vi.test(e) ? vi.parse(e) : Yp.parse(e),
  transform: (e) => Js(e) ? e : e.hasOwnProperty("red") ? vo.transform(e) : vi.transform(e)
}, Me = (e, t, n) => -n * e + n * t + e;
function Sf(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function F3({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = Sf(l, s, e + 1 / 3), i = Sf(l, s, e), a = Sf(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
const wf = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, j3 = [Yp, vo, vi], N3 = (e) => j3.find((t) => t.test(e));
function xy(e) {
  const t = N3(e);
  let n = t.parse(e);
  return t === vi && (n = F3(n)), n;
}
const Qw = (e, t) => {
  const n = xy(e), r = xy(t), o = { ...n };
  return (i) => (o.red = wf(n.red, r.red, i), o.green = wf(n.green, r.green, i), o.blue = wf(n.blue, r.blue, i), o.alpha = Me(n.alpha, r.alpha, i), vo.transform(o));
};
function L3(e) {
  var t, n;
  return isNaN(e) && Js(e) && (((t = e.match(od)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(kw)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Zw = {
  regex: OF,
  countKey: "Vars",
  token: "${v}",
  parse: je
}, Jw = {
  regex: kw,
  countKey: "Colors",
  token: "${c}",
  parse: vt.parse
}, ek = {
  regex: od,
  countKey: "Numbers",
  token: "${n}",
  parse: jo.parse
};
function kf(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)));
}
function lc(e) {
  const t = e.toString(), n = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && kf(n, Zw), kf(n, Jw), kf(n, ek), n;
}
function tk(e) {
  return lc(e).values;
}
function nk(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = lc(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < r ? s = s.replace(Zw.token, a[l]) : l < r + n ? s = s.replace(Jw.token, vt.transform(a[l])) : s = s.replace(ek.token, Ja(a[l]));
    return s;
  };
}
const B3 = (e) => typeof e == "number" ? 0 : e;
function V3(e) {
  const t = tk(e);
  return nk(e)(t.map(B3));
}
const Hr = {
  test: L3,
  parse: tk,
  createTransformer: nk,
  getAnimatableNone: V3
}, rk = (e, t) => (n) => `${n > 0 ? t : e}`;
function ok(e, t) {
  return typeof e == "number" ? (n) => Me(e, t, n) : vt.test(e) ? Qw(e, t) : e.startsWith("var(") ? rk(e, t) : ak(e, t);
}
const ik = (e, t) => {
  const n = [...e], r = n.length, o = e.map((i, a) => ok(i, t[a]));
  return (i) => {
    for (let a = 0; a < r; a++)
      n[a] = o[a](i);
    return n;
  };
}, W3 = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = ok(e[o], t[o]));
  return (o) => {
    for (const i in r)
      n[i] = r[i](o);
    return n;
  };
}, ak = (e, t) => {
  const n = Hr.createTransformer(t), r = lc(e), o = lc(t);
  return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? Lr(ik(r.values, o.values), n) : rk(e, t);
}, Os = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Sy = (e, t) => (n) => Me(e, t, n);
function U3(e) {
  return typeof e == "number" ? Sy : typeof e == "string" ? vt.test(e) ? Qw : ak : Array.isArray(e) ? ik : typeof e == "object" ? W3 : Sy;
}
function H3(e, t, n) {
  const r = [], o = n || U3(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || je : t;
      s = Lr(l, s);
    }
    r.push(s);
  }
  return r;
}
function sk(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if (Vm(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = H3(t, r, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = Os(e[c], e[c + 1], u);
    return a[c](d);
  };
  return n ? (u) => l(Ur(e[0], e[i - 1], u)) : l;
}
function G3(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Os(0, t, r);
    e.push(Me(n, 1, o));
  }
}
function K3(e) {
  const t = [0];
  return G3(t, e.length - 1), t;
}
function Y3(e, t) {
  return e.map((n) => n * t);
}
function q3(e, t) {
  return e.map(() => t || Hw).splice(0, e.length - 1);
}
function uc({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = $3(r) ? r.map(by) : by(r), i = {
    done: !1,
    value: t[0]
  }, a = Y3(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : K3(t),
    e
  ), s = sk(a, t, {
    ease: Array.isArray(o) ? o : q3(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function lk(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const X3 = 5;
function uk(e, t, n) {
  const r = Math.max(t - X3, 0);
  return lk(n - e(r), t - r);
}
const Cf = 1e-3, Q3 = 0.01, wy = 10, Z3 = 0.05, J3 = 1;
function e4({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, i;
  S3(e <= Br(wy));
  let a = 1 - t;
  a = Ur(Z3, J3, a), e = Ur(Q3, wy, ir(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - n, p = qp(u, a), y = Math.exp(-d);
    return Cf - f / p * y;
  }, i = (u) => {
    const d = u * a * e, f = d * n + n, p = Math.pow(a, 2) * Math.pow(u, 2) * e, y = Math.exp(-d), g = qp(Math.pow(u, 2), a);
    return (-o(u) + Cf > 0 ? -1 : 1) * ((f - p) * y) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Cf + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = n4(o, i, s);
  if (e = Br(e), isNaN(l))
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
const t4 = 12;
function n4(e, t, n) {
  let r = n;
  for (let o = 1; o < t4; o++)
    r = r - e(r) / t(r);
  return r;
}
function qp(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const r4 = ["duration", "bounce"], o4 = ["stiffness", "damping", "mass"];
function ky(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function i4(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ky(e, o4) && ky(e, r4)) {
    const n = e4(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function ck({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = i4(r), p = c ? -ir(c) : 0, y = l / (2 * Math.sqrt(s * u)), g = i - o, x = ir(Math.sqrt(s / u)), m = Math.abs(g) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (y < 1) {
    const b = qp(x, y);
    h = (S) => {
      const C = Math.exp(-y * x * S);
      return i - C * ((p + y * x * g) / b * Math.sin(b * S) + g * Math.cos(b * S));
    };
  } else if (y === 1)
    h = (b) => i - Math.exp(-x * b) * (g + (p + x * g) * b);
  else {
    const b = x * Math.sqrt(y * y - 1);
    h = (S) => {
      const C = Math.exp(-y * x * S), P = Math.min(b * S, 300);
      return i - C * ((p + y * x * g) * Math.sinh(P) + b * g * Math.cosh(P)) / b;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (b) => {
      const S = h(b);
      if (f)
        a.done = b >= d;
      else {
        let C = p;
        b !== 0 && (y < 1 ? C = uk(h, b, S) : C = 0);
        const P = Math.abs(C) <= n, _ = Math.abs(i - S) <= t;
        a.done = P && _;
      }
      return a.value = a.done ? i : S, a;
    }
  };
}
function Cy({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (A) => s !== void 0 && A < s || l !== void 0 && A > l, y = (A) => s === void 0 ? l : l === void 0 || Math.abs(s - A) < Math.abs(l - A) ? s : l;
  let g = n * t;
  const x = d + g, m = a === void 0 ? x : a(x);
  m !== x && (g = m - d);
  const h = (A) => -g * Math.exp(-A / r), b = (A) => m + h(A), S = (A) => {
    const M = h(A), R = b(A);
    f.done = Math.abs(M) <= u, f.value = f.done ? m : R;
  };
  let C, P;
  const _ = (A) => {
    p(f.value) && (C = A, P = ck({
      keyframes: [f.value, y(f.value)],
      velocity: uk(b, A, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return _(0), {
    calculatedDuration: null,
    next: (A) => {
      let M = !1;
      return !P && C === void 0 && (M = !0, S(A), _(A)), C !== void 0 && A > C ? P.next(A - C) : (!M && S(A), f);
    }
  };
}
const a4 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => Se.update(t, !0),
    stop: () => dr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => qe.isProcessing ? qe.timestamp : performance.now()
  };
}, _y = 2e4;
function Py(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < _y; )
    t += n, r = e.next(t);
  return t >= _y ? 1 / 0 : t;
}
const s4 = {
  decay: Cy,
  inertia: Cy,
  tween: uc,
  keyframes: uc,
  spring: ck
};
function cc({ autoplay: e = !0, delay: t = 0, driver: n = a4, keyframes: r, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, y = !1, g, x;
  const m = () => {
    x = new Promise((L) => {
      g = L;
    });
  };
  m();
  let h;
  const b = s4[o] || uc;
  let S;
  b !== uc && typeof r[0] != "number" && (S = sk([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const C = b({ ...f, keyframes: r });
  let P;
  s === "mirror" && (P = b({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let _ = "idle", A = null, M = null, R = null;
  C.calculatedDuration === null && i && (C.calculatedDuration = Py(C));
  const { calculatedDuration: z } = C;
  let Q = 1 / 0, G = 1 / 0;
  z !== null && (Q = z + a, G = Q * (i + 1) - a);
  let K = 0;
  const X = (L) => {
    if (M === null)
      return;
    p > 0 && (M = Math.min(M, L)), p < 0 && (M = Math.min(L - G / p, M)), A !== null ? K = A : K = Math.round(L - M) * p;
    const ee = K - t * (p >= 0 ? 1 : -1), B = p >= 0 ? ee < 0 : ee > G;
    K = Math.max(ee, 0), _ === "finished" && A === null && (K = G);
    let Z = K, ve = C;
    if (i) {
      const Ie = K / Q;
      let et = Math.floor(Ie), tt = Ie % 1;
      !tt && Ie >= 1 && (tt = 1), tt === 1 && et--, et = Math.min(et, i + 1);
      const Un = !!(et % 2);
      Un && (s === "reverse" ? (tt = 1 - tt, a && (tt -= a / Q)) : s === "mirror" && (ve = P));
      let Hn = Ur(0, 1, tt);
      K > G && (Hn = s === "reverse" && Un ? 1 : 0), Z = Hn * Q;
    }
    const le = B ? { done: !1, value: r[0] } : ve.next(Z);
    S && (le.value = S(le.value));
    let { done: ye } = le;
    !B && z !== null && (ye = p >= 0 ? K >= G : K <= 0);
    const be = A === null && (_ === "finished" || _ === "running" && ye);
    return d && d(le.value), be && D(), le;
  }, q = () => {
    h && h.stop(), h = void 0;
  }, O = () => {
    _ = "idle", q(), g(), m(), M = R = null;
  }, D = () => {
    _ = "finished", c && c(), q(), g();
  }, N = () => {
    if (y)
      return;
    h || (h = n(X));
    const L = h.now();
    l && l(), A !== null ? M = L - A : (!M || _ === "finished") && (M = L), _ === "finished" && m(), R = M, A = null, _ = "running", h.start();
  };
  e && N();
  const V = {
    then(L, ee) {
      return x.then(L, ee);
    },
    get time() {
      return ir(K);
    },
    set time(L) {
      L = Br(L), K = L, A !== null || !h || p === 0 ? A = L : M = h.now() - L / p;
    },
    get duration() {
      const L = C.calculatedDuration === null ? Py(C) : C.calculatedDuration;
      return ir(L);
    },
    get speed() {
      return p;
    },
    set speed(L) {
      L === p || !h || (p = L, V.time = ir(K));
    },
    get state() {
      return _;
    },
    play: N,
    pause: () => {
      _ = "paused", A = K;
    },
    stop: () => {
      y = !0, _ !== "idle" && (_ = "idle", u && u(), O());
    },
    cancel: () => {
      R !== null && X(R), O();
    },
    complete: () => {
      _ = "finished";
    },
    sample: (L) => (M = 0, X(L))
  };
  return V;
}
function l4(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const u4 = l4(() => Object.hasOwnProperty.call(Element.prototype, "animate")), c4 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Vl = 10, d4 = 2e4, f4 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Bw(t.ease);
function p4(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(u4() && c4.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (f4(t, o)) {
    const h = cc({
      ...o,
      repeat: 0,
      delay: 0
    });
    let b = { done: !1, value: c[0] };
    const S = [];
    let C = 0;
    for (; !b.done && C < d4; )
      b = h.sample(C), S.push(b.value), C += Vl;
    p = void 0, c = S, d = C - Vl, f = "linear";
  }
  const y = k3(e.owner.current, t, c, {
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
  o.syncStart && (y.startTime = qe.isProcessing ? qe.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const g = () => y.cancel(), x = () => {
    Se.update(g), s(), u();
  };
  return y.onfinish = () => {
    e.set(C3(c, o)), r && r(), x();
  }, {
    then(h, b) {
      return l.then(h, b);
    },
    attachTimeline(h) {
      return y.timeline = h, y.onfinish = null, je;
    },
    get time() {
      return ir(y.currentTime || 0);
    },
    set time(h) {
      y.currentTime = Br(h);
    },
    get speed() {
      return y.playbackRate;
    },
    set speed(h) {
      y.playbackRate = h;
    },
    get duration() {
      return ir(d);
    },
    play: () => {
      a || (y.play(), dr(g));
    },
    pause: () => y.pause(),
    stop: () => {
      if (a = !0, y.playState === "idle")
        return;
      const { currentTime: h } = y;
      if (h) {
        const b = cc({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(b.sample(h - Vl).value, b.sample(h).value, Vl);
      }
      x();
    },
    complete: () => y.finish(),
    cancel: x
  };
}
function h4({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: je,
    pause: je,
    stop: je,
    then: (i) => (i(), Promise.resolve()),
    cancel: je,
    complete: je
  });
  return t ? cc({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const m4 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, v4 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), g4 = {
  type: "keyframes",
  duration: 0.8
}, y4 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, b4 = (e, { keyframes: t }) => t.length > 2 ? g4 : Fo.has(e) ? e.startsWith("scale") ? v4(t[1]) : m4 : y4, Xp = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Hr.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), x4 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function S4(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(od) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let i = x4.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const w4 = /([a-z-]*)\(.*?\)/g, Qp = {
  ...Hr,
  getAnimatableNone: (e) => {
    const t = e.match(w4);
    return t ? t.map(S4).join(" ") : e;
  }
}, k4 = {
  ...Cw,
  // Color props
  color: vt,
  backgroundColor: vt,
  outlineColor: vt,
  fill: vt,
  stroke: vt,
  // Border props
  borderColor: vt,
  borderTopColor: vt,
  borderRightColor: vt,
  borderBottomColor: vt,
  borderLeftColor: vt,
  filter: Qp,
  WebkitFilter: Qp
}, Gm = (e) => k4[e];
function dk(e, t) {
  let n = Gm(e);
  return n !== Qp && (n = Hr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const fk = (e) => /^0[^.\s]+$/.test(e);
function C4(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || fk(e);
}
function _4(e, t, n, r) {
  const o = Xp(t, n);
  let i;
  Array.isArray(n) ? i = [...n] : i = [null, n];
  const a = r.from !== void 0 ? r.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), C4(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = dk(t, s);
    }
  return i;
}
function P4({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Km(e, t) {
  return e[t] || e.default || e;
}
const Ym = (e, t, n, r = {}) => (o) => {
  const i = Km(r, e) || {}, a = i.delay || r.delay || 0;
  let { elapsed: s = 0 } = r;
  s = s - Br(a);
  const l = _4(t, e, n, i), u = l[0], c = l[l.length - 1], d = Xp(e, u), f = Xp(e, c);
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
  if (P4(i) || (p = {
    ...p,
    ...b4(e, p)
  }), p.duration && (p.duration = Br(p.duration)), p.repeatDelay && (p.repeatDelay = Br(p.repeatDelay)), !d || !f || w3.current || i.type === !1)
    return h4(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const y = p4(t, e, p);
    if (y)
      return y;
  }
  return cc(p);
};
function dc(e) {
  return !!(Rt(e) && e.add);
}
const pk = (e) => /^\-?\d*\.?\d+$/.test(e);
function qm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Xm(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Qm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return qm(this.subscriptions, t), () => Xm(this.subscriptions, t);
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
const T4 = (e) => !isNaN(parseFloat(e));
class E4 {
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
      const { delta: i, timestamp: a } = qe;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, Se.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Se.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = T4(this.current), this.owner = n.owner;
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
    this.events[t] || (this.events[t] = new Qm());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), Se.read(() => {
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
      lk(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Hi(e, t) {
  return new E4(e, t);
}
const hk = (e) => (t) => t.test(e), A4 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, mk = [jo, H, Fn, Sr, FF, zF, A4], Sa = (e) => mk.find(hk(e)), $4 = [...mk, vt, Hr], M4 = (e) => $4.find(hk(e));
function R4(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Hi(n));
}
function O4(e, t) {
  const n = ad(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const a in i) {
    const s = QF(i[a]);
    R4(e, a, s);
  }
}
function I4(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (pk(c) || fk(c)) ? c = parseFloat(c) : !M4(c) && Hr.test(u) && (c = dk(l, u)), e.addValue(l, Hi(c, { owner: e })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function D4(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function z4(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = D4(o, t);
    if (i !== void 0)
      r[o] = i;
    else {
      const a = n.getValue(o);
      a && (r[o] = a.get());
    }
  }
  return r;
}
function F4({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function vk(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && F4(c, d))
      continue;
    const y = {
      delay: n,
      elapsed: 0,
      ...Km(i || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[gw];
      h && (g = !1, y.elapsed = window.HandoffAppearAnimations(h, d, f, Se), y.syncStart = !0);
    }
    let x = g && p === f.get();
    if (y.type === "spring" && (f.getVelocity() || y.velocity) && (x = !1), f.animation && (x = !1), x)
      continue;
    f.start(Ym(d, f, p, e.shouldReduceMotion && Fo.has(d) ? { type: !1 } : y));
    const m = f.animation;
    dc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && O4(e, a);
  }), u;
}
function Zp(e, t, n = {}) {
  const r = ad(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(vk(e, r, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return j4(e, t, u + l, c, d, n);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function j4(e, t, n = 0, r = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => s - u * r;
  return Array.from(e.variantChildren).sort(N4).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Zp(u, t, {
      ...i,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function N4(e, t) {
  return e.sortNodePosition(t);
}
function L4(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Zp(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Zp(e, t, n);
  else {
    const o = typeof t == "function" ? ad(e, t, n.custom) : t;
    r = Promise.all(vk(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const B4 = [...Rm].reverse(), V4 = Rm.length;
function W4(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => L4(e, n, r)));
}
function U4(e) {
  let t = W4(e);
  const n = G4();
  let r = !0;
  const o = (l, u) => {
    const c = ad(e, u);
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
    let y = {}, g = 1 / 0;
    for (let m = 0; m < V4; m++) {
      const h = B4[m], b = n[h], S = c[h] !== void 0 ? c[h] : d[h], C = Ms(S), P = h === u ? b.isActive : null;
      P === !1 && (g = m);
      let _ = S === d[h] && S !== c[h] && C;
      if (_ && r && e.manuallyAnimateOnMount && (_ = !1), b.protectedKeys = { ...y }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !S && !b.prevProp || // Or if the prop doesn't define an animation
      nd(S) || typeof S == "boolean")
        continue;
      const A = H4(b.prevProp, S);
      let M = A || // If we're making this variant active, we want to always make it active
      h === u && b.isActive && !_ && C || // If we removed a higher-priority variant (i is in reverse order)
      m > g && C;
      const R = Array.isArray(S) ? S : [S];
      let z = R.reduce(o, {});
      P === !1 && (z = {});
      const { prevResolvedValues: Q = {} } = b, G = {
        ...Q,
        ...z
      }, K = (X) => {
        M = !0, p.delete(X), b.needsAnimating[X] = !0;
      };
      for (const X in G) {
        const q = z[X], O = Q[X];
        y.hasOwnProperty(X) || (q !== O ? sc(q) && sc(O) ? !Nw(q, O) || A ? K(X) : b.protectedKeys[X] = !0 : q !== void 0 ? K(X) : p.add(X) : q !== void 0 && p.has(X) ? K(X) : b.protectedKeys[X] = !0);
      }
      b.prevProp = S, b.prevResolvedValues = z, b.isActive && (y = { ...y, ...z }), r && e.blockInitialAnimation && (M = !1), M && !_ && f.push(...R.map((X) => ({
        animation: X,
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
function H4(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Nw(t, e) : !1;
}
function no(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function G4() {
  return {
    animate: no(!0),
    whileInView: no(),
    whileHover: no(),
    whileTap: no(),
    whileDrag: no(),
    whileFocus: no(),
    exit: no()
  };
}
class K4 extends Xr {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = U4(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), nd(t) && (this.unmount = t.subscribe(this.node));
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
let Y4 = 0;
class q4 extends Xr {
  constructor() {
    super(...arguments), this.id = Y4++;
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
const X4 = {
  animation: {
    Feature: K4
  },
  exit: {
    Feature: q4
  }
}, Ty = (e, t) => Math.abs(e - t);
function Q4(e, t) {
  const n = Ty(e.x, t.x), r = Ty(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class gk {
  constructor(t, n, { transformPagePoint: r, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Pf(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = Q4(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: y } = qe;
      this.history.push({ ...p, timestamp: y });
      const { onStart: g, onMove: x } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = _f(d, this.transformPagePoint), Se.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, y = Pf(c.type === "pointercancel" ? this.lastMoveEventInfo : _f(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, y), p && p(c, y);
    }, !Iw(t))
      return;
    this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = id(t), a = _f(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = qe;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(t, Pf(a, this.history)), this.removeListeners = Lr(or(this.contextWindow, "pointermove", this.handlePointerMove), or(this.contextWindow, "pointerup", this.handlePointerUp), or(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), dr(this.updatePoint);
  }
}
function _f(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ey(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Pf({ point: e }, t) {
  return {
    point: e,
    delta: Ey(e, yk(t)),
    offset: Ey(e, Z4(t)),
    velocity: J4(t, 0.1)
  };
}
function Z4(e) {
  return e[0];
}
function yk(e) {
  return e[e.length - 1];
}
function J4(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = yk(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Br(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = ir(o.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - r.x) / i,
    y: (o.y - r.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Bt(e) {
  return e.max - e.min;
}
function Jp(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Ay(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Me(t.min, t.max, e.origin), e.scale = Bt(n) / Bt(t), (Jp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Me(n.min, n.max, e.origin) - e.originPoint, (Jp(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function es(e, t, n, r) {
  Ay(e.x, t.x, n.x, r ? r.originX : void 0), Ay(e.y, t.y, n.y, r ? r.originY : void 0);
}
function $y(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Bt(t);
}
function ej(e, t, n) {
  $y(e.x, t.x, n.x), $y(e.y, t.y, n.y);
}
function My(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Bt(t);
}
function ts(e, t, n) {
  My(e.x, t.x, n.x), My(e.y, t.y, n.y);
}
function tj(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Me(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Me(n, e, r.max) : Math.min(e, n)), e;
}
function Ry(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function nj(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Ry(e.x, n, o),
    y: Ry(e.y, t, r)
  };
}
function Oy(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function rj(e, t) {
  return {
    x: Oy(e.x, t.x),
    y: Oy(e.y, t.y)
  };
}
function oj(e, t) {
  let n = 0.5;
  const r = Bt(e), o = Bt(t);
  return o > r ? n = Os(t.min, t.max - r, e.min) : r > o && (n = Os(e.min, e.max - o, t.min)), Ur(0, 1, n);
}
function ij(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const eh = 0.35;
function aj(e = eh) {
  return e === !1 ? e = 0 : e === !0 && (e = eh), {
    x: Iy(e, "left", "right"),
    y: Iy(e, "top", "bottom")
  };
}
function Iy(e, t, n) {
  return {
    min: Dy(e, t),
    max: Dy(e, n)
  };
}
function Dy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const zy = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), gi = () => ({
  x: zy(),
  y: zy()
}), Fy = () => ({ min: 0, max: 0 }), Ve = () => ({
  x: Fy(),
  y: Fy()
});
function _n(e) {
  return [e("x"), e("y")];
}
function bk({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function sj({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function lj(e, t) {
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
function Tf(e) {
  return e === void 0 || e === 1;
}
function th({ scale: e, scaleX: t, scaleY: n }) {
  return !Tf(e) || !Tf(t) || !Tf(n);
}
function ao(e) {
  return th(e) || xk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function xk(e) {
  return jy(e.x) || jy(e.y);
}
function jy(e) {
  return e && e !== "0%";
}
function fc(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Ny(e, t, n, r, o) {
  return o !== void 0 && (e = fc(e, o, r)), fc(e, n, r) + t;
}
function nh(e, t = 0, n = 1, r, o) {
  e.min = Ny(e.min, t, n, r, o), e.max = Ny(e.max, t, n, r, o);
}
function Sk(e, { x: t, y: n }) {
  nh(e.x, t.translate, t.scale, t.originPoint), nh(e.y, n.translate, n.scale, n.originPoint);
}
function uj(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = n[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && yi(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Sk(e, a)), r && ao(i.latestValues) && yi(e, i.latestValues));
  }
  t.x = Ly(t.x), t.y = Ly(t.y);
}
function Ly(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Cr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function By(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = Me(e.min, e.max, i);
  nh(e, t[n], t[r], a, t.scale);
}
const cj = ["x", "scaleX", "originX"], dj = ["y", "scaleY", "originY"];
function yi(e, t) {
  By(e.x, t, cj), By(e.y, t, dj);
}
function wk(e, t) {
  return bk(lj(e.getBoundingClientRect(), t));
}
function fj(e, t, n) {
  const r = wk(e, n), { scroll: o } = t;
  return o && (Cr(r.x, o.offset.x), Cr(r.y, o.offset.y)), r;
}
const kk = ({ current: e }) => e ? e.ownerDocument.defaultView : null, pj = /* @__PURE__ */ new WeakMap();
class hj {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ve(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(id(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = zw(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _n((y) => {
        let g = this.getAxisMotionValue(y).get() || 0;
        if (Fn.test(g)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const m = x.layout.layoutBox[y];
            m && (g = Bt(m) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[y] = g;
      }), f && Se.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: y } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = mj(y), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, y), this.updateAxis("y", u.point, y), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new gk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: kk(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Se.update(() => i(t, n));
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
    if (!r || !Wl(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = tj(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    n && mi(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = nj(o.layoutBox, n) : this.constraints = !1, this.elastic = aj(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && _n((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = ij(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !mi(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = fj(r, o.root, this.visualElement.getTransformPagePoint());
    let a = rj(o.layout.layoutBox, i);
    if (n) {
      const s = n(sj(a));
      this.hasMutatedConstraints = !!s, s && (a = bk(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = _n((c) => {
      if (!Wl(c, n, this.currentDirection))
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
    return r.start(Ym(t, r, 0, n));
  }
  stopAnimation() {
    _n((t) => this.getAxisMotionValue(t).stop());
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
    _n((n) => {
      const { drag: r } = this.getProps();
      if (!Wl(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[n];
        i.set(t[n] - Me(a, s, 0.5));
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
    if (!mi(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    _n((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = oj({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), _n((a) => {
      if (!Wl(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(Me(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    pj.set(this.visualElement, this);
    const t = this.visualElement.current, n = or(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      mi(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const a = tr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (_n((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = eh, dragMomentum: s = !0 } = t;
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
function Wl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function mj(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class vj extends Xr {
  constructor(t) {
    super(t), this.removeGroupControls = je, this.removeListeners = je, this.controls = new hj(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || je;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Vy = (e) => (t, n) => {
  e && Se.update(() => e(t, n));
};
class gj extends Xr {
  constructor() {
    super(...arguments), this.removePointerDownListener = je;
  }
  onPointerDown(t) {
    this.session = new gk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: kk(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Vy(t),
      onStart: Vy(n),
      onMove: r,
      onEnd: (i, a) => {
        delete this.session, o && Se.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = or(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Ck() {
  const e = v.useContext(Qs);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = v.useId();
  return v.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function yj() {
  return bj(v.useContext(Qs));
}
function bj(e) {
  return e === null ? !0 : e.isPresent;
}
const ku = {
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
function Wy(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const wa = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (H.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Wy(e, t.target.x), r = Wy(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, xj = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Hr.parse(e);
    if (o.length > 5)
      return r;
    const i = Hr.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = Me(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class Sj extends Po.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: i } = t;
    AF(wj), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), ku.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: i } = this.props, a = r.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Se.postRender(() => {
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
function _k(e) {
  const [t, n] = Ck(), r = v.useContext(Im);
  return Po.createElement(Sj, { ...e, layoutGroup: r, switchLayoutGroup: v.useContext(bw), isPresent: t, safeToRemove: n });
}
const wj = {
  borderRadius: {
    ...wa,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: wa,
  borderTopRightRadius: wa,
  borderBottomLeftRadius: wa,
  borderBottomRightRadius: wa,
  boxShadow: xj
}, Pk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], kj = Pk.length, Uy = (e) => typeof e == "string" ? parseFloat(e) : e, Hy = (e) => typeof e == "number" || H.test(e);
function Cj(e, t, n, r, o, i) {
  o ? (e.opacity = Me(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    _j(r)
  ), e.opacityExit = Me(t.opacity !== void 0 ? t.opacity : 1, 0, Pj(r))) : i && (e.opacity = Me(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < kj; a++) {
    const s = `border${Pk[a]}Radius`;
    let l = Gy(t, s), u = Gy(n, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Hy(l) === Hy(u) ? (e[s] = Math.max(Me(Uy(l), Uy(u), r), 0), (Fn.test(u) || Fn.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = Me(t.rotate || 0, n.rotate || 0, r));
}
function Gy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const _j = Tk(0, 0.5, Wm), Pj = Tk(0.5, 0.95, je);
function Tk(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Os(e, t, r));
}
function Ky(e, t) {
  e.min = t.min, e.max = t.max;
}
function qt(e, t) {
  Ky(e.x, t.x), Ky(e.y, t.y);
}
function Yy(e, t, n, r, o) {
  return e -= t, e = fc(e, 1 / n, r), o !== void 0 && (e = fc(e, 1 / o, r)), e;
}
function Tj(e, t = 0, n = 1, r = 0.5, o, i = e, a = e) {
  if (Fn.test(t) && (t = parseFloat(t), t = Me(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = Me(i.min, i.max, r);
  e === i && (s -= t), e.min = Yy(e.min, t, n, s, o), e.max = Yy(e.max, t, n, s, o);
}
function qy(e, t, [n, r, o], i, a) {
  Tj(e, t[n], t[r], t[o], t.scale, i, a);
}
const Ej = ["x", "scaleX", "originX"], Aj = ["y", "scaleY", "originY"];
function Xy(e, t, n, r) {
  qy(e.x, t, Ej, n ? n.x : void 0, r ? r.x : void 0), qy(e.y, t, Aj, n ? n.y : void 0, r ? r.y : void 0);
}
function Qy(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ek(e) {
  return Qy(e.x) && Qy(e.y);
}
function $j(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Ak(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function Zy(e) {
  return Bt(e.x) / Bt(e.y);
}
class Mj {
  constructor() {
    this.members = [];
  }
  add(t) {
    qm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Xm(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Jy(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
const Rj = (e, t) => e.depth - t.depth;
class Oj {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    qm(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Xm(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Rj), this.isDirty = !1, this.children.forEach(t);
  }
}
function Ij(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const i = o - n;
    i >= t && (dr(r), e(i - t));
  };
  return Se.read(r, !0), () => dr(r);
}
function Dj(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function zj(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Fj(e, t, n) {
  const r = Rt(e) ? e : Hi(e);
  return r.start(Ym("", r, t, n)), r.animation;
}
const e1 = ["", "X", "Y", "Z"], jj = { visibility: "hidden" }, t1 = 1e3;
let Nj = 0;
const so = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function $k({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = Nj++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, so.totalNodes = so.resolvedTargetDeltas = so.recalculatedProjection = 0, this.nodes.forEach(Vj), this.nodes.forEach(Kj), this.nodes.forEach(Yj), this.nodes.forEach(Wj), Dj(so);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Oj());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Qm()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = zj(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = Ij(f, 250), ku.hasAnimatedSinceResize && (ku.hasAnimatedSinceResize = !1, this.nodes.forEach(r1));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || Jj, { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !Ak(this.targetLayout, y) || p, b = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, b);
          const S = {
            ...Km(g, "layout"),
            onPlay: x,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
        } else
          f || r1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, dr(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(qj), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(n1);
        return;
      }
      this.isUpdating || this.nodes.forEach(Hj), this.isUpdating = !1, this.nodes.forEach(Gj), this.nodes.forEach(Lj), this.nodes.forEach(Bj), this.clearAllSnapshots();
      const s = performance.now();
      qe.delta = Ur(0, 1e3 / 60, s - qe.timestamp), qe.timestamp = s, qe.isProcessing = !0, gf.update.process(qe), gf.preRender.process(qe), gf.render.process(qe), qe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Uj), this.sharedNodes.forEach(Xj);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Se.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Se.postRender(() => {
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
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Ek(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || ao(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), eN(l), {
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
      return l && (Cr(s.x, l.offset.x), Cr(s.y, l.offset.y)), s;
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
            f && (Cr(s.x, -f.offset.x), Cr(s.y, -f.offset.y));
          }
          Cr(s.x, c.offset.x), Cr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Ve();
      qt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && yi(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), ao(c.latestValues) && yi(l, c.latestValues);
      }
      return ao(this.latestValues) && yi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Ve();
      qt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ao(u.latestValues))
          continue;
        th(u.latestValues) && u.updateSnapshot();
        const c = Ve(), d = u.measurePageBox();
        qt(c, d), Xy(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ao(this.latestValues) && Xy(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== qe.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = qe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ve(), this.relativeTargetOrigin = Ve(), ts(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ve(), this.targetWithTransforms = Ve()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ej(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : qt(this.target, this.layout.layoutBox), Sk(this.target, this.targetDelta)) : qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ve(), this.relativeTargetOrigin = Ve(), ts(this.relativeTargetOrigin, this.target, p.target), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          so.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || th(this.parent.latestValues) || xk(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === qe.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      uj(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: y } = s;
      if (!y) {
        this.projectionTransform && (this.projectionDelta = gi(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = gi(), this.projectionDeltaWithTransform = gi());
      const g = this.projectionTransform;
      es(this.projectionDelta, this.layoutCorrected, y, this.latestValues), this.projectionTransform = Jy(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), so.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = gi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Ve(), p = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, g = p !== y, x = this.getStack(), m = !x || x.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(Zj));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        o1(d.x, a.x, C), o1(d.y, a.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ts(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Qj(this.relativeTarget, this.relativeTargetOrigin, f, C), b && $j(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Ve()), qt(b, this.relativeTarget)), g && (this.animationValues = c, Cj(c, u, this.latestValues, C, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (dr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Se.update(() => {
        ku.hasAnimatedSinceResize = !0, this.currentAnimation = Fj(0, t1, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(t1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && Mk(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Ve();
          const d = Bt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Bt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        qt(s, l), yi(s, c), es(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Mj()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < e1.length; c++) {
        const d = "rotate" + e1[c];
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
        return jj;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = wu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = wu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !ao(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = Jy(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in ic) {
        if (f[g] === void 0)
          continue;
        const { correct: x, applyTo: m } = ic[g], h = u.transform === "none" ? f[g] : x(f[g], d);
        if (m) {
          const b = m.length;
          for (let S = 0; S < b; S++)
            u[m[S]] = h;
        } else
          u[g] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? wu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(n1), this.root.sharedNodes.clear();
    }
  };
}
function Lj(e) {
  e.updateLayout();
}
function Bj(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: i } = e.options, a = n.source !== e.layout.source;
    i === "size" ? _n((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Bt(f);
      f.min = r[d].min, f.max = f.min + p;
    }) : Mk(i, n.layoutBox, r) && _n((d) => {
      const f = a ? n.measuredBox[d] : n.layoutBox[d], p = Bt(r[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = gi();
    es(s, r, n.layoutBox);
    const l = gi();
    a ? es(l, e.applyTransform(o, !0), n.measuredBox) : es(l, r, n.layoutBox);
    const u = !Ek(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const y = Ve();
          ts(y, n.layoutBox, f.layoutBox);
          const g = Ve();
          ts(g, r, p.layoutBox), Ak(y, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = y, e.relativeParent = d);
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
function Vj(e) {
  so.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Wj(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Uj(e) {
  e.clearSnapshot();
}
function n1(e) {
  e.clearMeasurements();
}
function Hj(e) {
  e.isLayoutDirty = !1;
}
function Gj(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function r1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Kj(e) {
  e.resolveTargetDelta();
}
function Yj(e) {
  e.calcProjection();
}
function qj(e) {
  e.resetRotation();
}
function Xj(e) {
  e.removeLeadSnapshot();
}
function o1(e, t, n) {
  e.translate = Me(t.translate, 0, n), e.scale = Me(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function i1(e, t, n, r) {
  e.min = Me(t.min, n.min, r), e.max = Me(t.max, n.max, r);
}
function Qj(e, t, n, r) {
  i1(e.x, t.x, n.x, r), i1(e.y, t.y, n.y, r);
}
function Zj(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Jj = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, a1 = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), s1 = a1("applewebkit/") && !a1("chrome/") ? Math.round : je;
function l1(e) {
  e.min = s1(e.min), e.max = s1(e.max);
}
function eN(e) {
  l1(e.x), l1(e.y);
}
function Mk(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Jp(Zy(t), Zy(n), 0.2);
}
const tN = $k({
  attachResizeListener: (e, t) => tr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ef = {
  current: void 0
}, Rk = $k({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ef.current) {
      const e = new tN({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ef.current = e;
    }
    return Ef.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), nN = {
  pan: {
    Feature: gj
  },
  drag: {
    Feature: vj,
    ProjectionNode: Rk,
    MeasureLayout: _k
  }
}, rN = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function oN(e) {
  const t = rN.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
function rh(e, t, n = 1) {
  const [r, o] = oN(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const a = i.trim();
    return pk(a) ? parseFloat(a) : a;
  } else
    return Gp(o) ? rh(o, t, n + 1) : o;
}
function iN(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const i = o.get();
    if (!Gp(i))
      return;
    const a = rh(i, r);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Gp(i))
      continue;
    const a = rh(i, r);
    a && (t[o] = a, n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const aN = /* @__PURE__ */ new Set([
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
]), Ok = (e) => aN.has(e), sN = (e) => Object.keys(e).some(Ok), u1 = (e) => e === jo || e === H, c1 = (e, t) => parseFloat(e.split(", ")[t]), d1 = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return c1(o[1], t);
  {
    const i = r.match(/^matrix\((.+)\)$/);
    return i ? c1(i[1], e) : 0;
  }
}, lN = /* @__PURE__ */ new Set(["x", "y", "z"]), uN = Zs.filter((e) => !lN.has(e));
function cN(e) {
  const t = [];
  return uN.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Gi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: d1(4, 13),
  y: d1(5, 14)
};
Gi.translateX = Gi.x;
Gi.translateY = Gi.y;
const dN = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((u) => {
    s[u] = Gi[u](r, i);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = Gi[u](l, i);
  }), e;
}, fN = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(Ok);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = n[l], d = Sa(c);
    const f = t[l];
    let p;
    if (sc(f)) {
      const y = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = Sa(c);
      for (let x = g; x < y && f[x] !== null; x++)
        p ? Vm(Sa(f[x]) === p) : p = Sa(f[x]);
    } else
      p = Sa(f);
    if (d !== p)
      if (u1(d) && u1(p)) {
        const y = u.get();
        typeof y == "string" && u.set(parseFloat(y)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === H && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = cN(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = dN(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), td && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function pN(e, t, n, r) {
  return sN(t) ? fN(e, t, n, r) : { target: t, transitionEnd: r };
}
const hN = (e, t, n, r) => {
  const o = iN(e, t, r);
  return t = o.target, r = o.transitionEnd, pN(e, t, n, r);
}, oh = { current: null }, Ik = { current: !1 };
function mN() {
  if (Ik.current = !0, !!td)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => oh.current = e.matches;
      e.addListener(t), t();
    } else
      oh.current = !1;
}
function vN(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o], a = n[o];
    if (Rt(i))
      e.addValue(o, i), dc(r) && r.add(o);
    else if (Rt(a))
      e.addValue(o, Hi(i, { owner: e })), dc(r) && r.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Hi(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const f1 = /* @__PURE__ */ new WeakMap(), Dk = Object.keys(Rs), gN = Dk.length, p1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], yN = Om.length;
class bN {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Se.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = n.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = rd(n), this.isVariantNode = yw(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Rt(f) && (f.set(s[d], !1), dc(u) && u.add(d));
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
    this.current = t, f1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Ik.current || mN(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : oh.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    f1.delete(this.current), this.projection && this.projection.unmount(), dr(this.notifyUpdate), dr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Fo.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Se.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let l = 0; l < gN; l++) {
      const u = Dk[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Rs[u];
      f && (a = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && mi(d),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ve();
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
    for (let r = 0; r < p1.length; r++) {
      const o = p1[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = vN(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < yN; r++) {
      const o = Om[r], i = this.props[o];
      (Ms(i) || i === !1) && (n[o] = i);
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
    return r === void 0 && n !== void 0 && (r = Hi(n, { owner: this }), this.addValue(t, r)), r;
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
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Bm(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Rt(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Qm()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class zk extends bN {
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
    let a = z4(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
      I4(this, r, a);
      const s = hN(this, r, a, n);
      n = s.transitionEnd, r = s.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function xN(e) {
  return window.getComputedStyle(e);
}
class SN extends zk {
  readValueFromInstance(t, n) {
    if (Fo.has(n)) {
      const r = Gm(n);
      return r && r.default || 0;
    } else {
      const r = xN(t), o = (ww(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return wk(t, n);
  }
  build(t, n, r, o) {
    zm(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Lm(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Rt(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    Ew(t, n, r, o);
  }
}
class wN extends zk {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Fo.has(n)) {
      const r = Gm(n);
      return r && r.default || 0;
    }
    return n = Aw.has(n) ? n : Mm(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Ve();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Mw(t, n);
  }
  build(t, n, r, o) {
    jm(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    $w(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Nm(t.tagName), super.mount(t);
  }
}
const kN = (e, t) => Dm(e) ? new wN(t, { enableHardwareAcceleration: !1 }) : new SN(t, { enableHardwareAcceleration: !0 }), CN = {
  layout: {
    ProjectionNode: Rk,
    MeasureLayout: _k
  }
}, _N = {
  ...X4,
  ...y3,
  ...nN,
  ...CN
}, Vn = /* @__PURE__ */ TF((e, t) => i3(e, t, _N, kN));
function Fk() {
  const e = v.useRef(!1);
  return $m(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function PN() {
  const e = Fk(), [t, n] = v.useState(0), r = v.useCallback(() => {
    e.current && n(t + 1);
  }, [t]);
  return [v.useCallback(() => Se.postRender(r), [r]), t];
}
class TN extends v.Component {
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
function EN({ children: e, isPresent: t }) {
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
  }, [t]), v.createElement(TN, { isPresent: t, childRef: r, sizeRef: o }, v.cloneElement(e, { ref: r }));
}
const Af = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = Rw(AN), l = v.useId(), u = v.useMemo(
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
  }, [n]), a === "popLayout" && (e = v.createElement(EN, { isPresent: n }, e)), v.createElement(Qs.Provider, { value: u }, e);
};
function AN() {
  return /* @__PURE__ */ new Map();
}
function $N(e) {
  return v.useEffect(() => () => e(), []);
}
const lo = (e) => e.key || "";
function MN(e, t) {
  e.forEach((n) => {
    const r = lo(n);
    t.set(r, n);
  });
}
function RN(e) {
  const t = [];
  return v.Children.forEach(e, (n) => {
    v.isValidElement(n) && t.push(n);
  }), t;
}
const No = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = v.useContext(Im).forceRender || PN()[0], l = Fk(), u = RN(e);
  let c = u;
  const d = v.useRef(/* @__PURE__ */ new Map()).current, f = v.useRef(c), p = v.useRef(/* @__PURE__ */ new Map()).current, y = v.useRef(!0);
  if ($m(() => {
    y.current = !1, MN(u, p), f.current = c;
  }), $N(() => {
    y.current = !0, p.clear(), d.clear();
  }), y.current)
    return v.createElement(v.Fragment, null, c.map((h) => v.createElement(Af, { key: lo(h), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const g = f.current.map(lo), x = u.map(lo), m = g.length;
  for (let h = 0; h < m; h++) {
    const b = g[h];
    x.indexOf(b) === -1 && !d.has(b) && d.set(b, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, b) => {
    if (x.indexOf(b) !== -1)
      return;
    const S = p.get(b);
    if (!S)
      return;
    const C = g.indexOf(b);
    let P = h;
    if (!P) {
      const _ = () => {
        d.delete(b);
        const A = Array.from(p.keys()).filter((M) => !x.includes(M));
        if (A.forEach((M) => p.delete(M)), f.current = u.filter((M) => {
          const R = lo(M);
          return (
            // filter out the node exiting
            R === b || // filter out the leftover children
            A.includes(R)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), r && r();
        }
      };
      P = v.createElement(Af, { key: lo(S), isPresent: !1, onExitComplete: _, custom: t, presenceAffectsLayout: i, mode: a }, S), d.set(b, P);
    }
    c.splice(C, 0, P);
  }), c = c.map((h) => {
    const b = h.key;
    return d.has(b) ? h : v.createElement(Af, { key: lo(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), v.createElement(v.Fragment, null, d.size ? c : c.map((h) => v.cloneElement(h)));
};
var ON = {
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
}, jk = v.memo((e) => {
  const {
    id: t,
    message: n,
    onCloseComplete: r,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = ON,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = v.useState(s), p = yj();
  Ui(() => {
    p || r == null || r();
  }, [p]), Ui(() => {
    f(s);
  }, [s]);
  const y = () => f(null), g = () => f(s), x = () => {
    p && o();
  };
  v.useEffect(() => {
    p && i && o();
  }, [p, i, o]), gF(x, d);
  const m = v.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = v.useMemo(() => mF(a), [a]);
  return /* @__PURE__ */ k.jsx(
    Vn.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: g,
      custom: { position: a },
      style: h,
      children: /* @__PURE__ */ k.jsx(
        Y.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Rn(n, { id: t, onClose: x })
        }
      )
    }
  );
});
jk.displayName = "ToastComponent";
var h1 = {
  path: /* @__PURE__ */ k.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ k.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ k.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ k.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, na = te((e, t) => {
  const {
    as: n,
    viewBox: r,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = J("chakra-icon", s), d = Xs("Icon", e), f = {
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
  }, y = r ?? h1.viewBox;
  if (n && typeof n != "string")
    return /* @__PURE__ */ k.jsx(Y.svg, { as: n, ...p, ...u });
  const g = a ?? h1.path;
  return /* @__PURE__ */ k.jsx(Y.svg, { verticalAlign: "middle", viewBox: y, ...p, ...u, children: g });
});
na.displayName = "Icon";
function IN(e) {
  return /* @__PURE__ */ k.jsx(na, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ k.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function DN(e) {
  return /* @__PURE__ */ k.jsx(na, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ k.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function m1(e) {
  return /* @__PURE__ */ k.jsx(na, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ k.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var zN = PA({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Zm = te((e, t) => {
  const n = Xs("Spinner", e), {
    label: r = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Bn(e), u = J("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${zN} ${i} linear infinite`,
    ...n
  };
  return /* @__PURE__ */ k.jsx(
    Y.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && /* @__PURE__ */ k.jsx(Y.span, { srOnly: !0, children: r })
    }
  );
});
Zm.displayName = "Spinner";
var [FN, Jm] = Ke({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [jN, ev] = Ke({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), Nk = {
  info: { icon: DN, colorScheme: "blue" },
  warning: { icon: m1, colorScheme: "orange" },
  success: { icon: IN, colorScheme: "green" },
  error: { icon: m1, colorScheme: "red" },
  loading: { icon: Zm, colorScheme: "blue" }
};
function NN(e) {
  return Nk[e].colorScheme;
}
function LN(e) {
  return Nk[e].icon;
}
var Lk = te(
  function(t, n) {
    const r = ev(), { status: o } = Jm(), i = {
      display: "inline",
      ...r.description
    };
    return /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: J("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
Lk.displayName = "AlertDescription";
function Bk(e) {
  const { status: t } = Jm(), n = LN(t), r = ev(), o = t === "loading" ? r.spinner : r.icon;
  return /* @__PURE__ */ k.jsx(
    Y.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: J("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ k.jsx(n, { h: "100%", w: "100%" })
    }
  );
}
Bk.displayName = "AlertIcon";
var Vk = te(
  function(t, n) {
    const r = ev(), { status: o } = Jm();
    return /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ref: n,
        "data-status": o,
        ...t,
        className: J("chakra-alert__title", t.className),
        __css: r.title
      }
    );
  }
);
Vk.displayName = "AlertTitle";
var Wk = te(function(t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...a } = Bn(t), s = (r = t.colorScheme) != null ? r : NN(o), l = zo("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ k.jsx(FN, { value: { status: o }, children: /* @__PURE__ */ k.jsx(jN, { value: l, children: /* @__PURE__ */ k.jsx(
    Y.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: n,
      ...a,
      className: J("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
Wk.displayName = "Alert";
function BN(e) {
  return /* @__PURE__ */ k.jsx(na, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ k.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var sd = te(
  function(t, n) {
    const r = Xs("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Bn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ k.jsx(
      Y.button,
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
        children: o || /* @__PURE__ */ k.jsx(BN, { width: "1em", height: "1em" })
      }
    );
  }
);
sd.displayName = "CloseButton";
var VN = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, ns = WN(VN);
function WN(e) {
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
      const a = UN(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = uy(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: GN(i)
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
        const a = hw(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!uy(ns.getState(), o).position
  };
}
var v1 = 0;
function UN(e, t = {}) {
  var n, r;
  v1 += 1;
  const o = (n = t.id) != null ? n : v1, i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => ns.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var HN = (e) => {
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
  return /* @__PURE__ */ k.jsxs(
    Wk,
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
        /* @__PURE__ */ k.jsx(Bk, { children: u }),
        /* @__PURE__ */ k.jsxs(Y.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ k.jsx(Vk, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ k.jsx(Lk, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ k.jsx(
          sd,
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
function GN(e = {}) {
  const { render: t, toastComponent: n = HN } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ k.jsx(n, { ...o, ...e });
}
var [KN, J9] = Ke({
  name: "ToastOptionsContext",
  strict: !1
}), YN = (e) => {
  const t = v.useSyncExternalStore(
    ns.subscribe,
    ns.getState,
    ns.getState
  ), {
    motionVariants: n,
    component: r = jk,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ k.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: vF(s),
        children: /* @__PURE__ */ k.jsx(No, { initial: !1, children: l.map((u) => /* @__PURE__ */ k.jsx(
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
  return /* @__PURE__ */ k.jsx(Gs, { ...o, children: a });
}, qN = (e) => function({
  children: n,
  theme: r = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ k.jsxs(pF, { theme: r, ...i, children: [
    /* @__PURE__ */ k.jsx(KN, { value: o == null ? void 0 : o.defaultOptions, children: n }),
    /* @__PURE__ */ k.jsx(YN, { ...o })
  ] });
}, XN = qN(iw), QN = Object.defineProperty, ZN = (e, t, n) => t in e ? QN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, De = (e, t, n) => (ZN(e, typeof t != "symbol" ? t + "" : t, n), n);
function g1(e) {
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
var JN = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function y1(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function b1(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var ih = typeof window < "u" ? v.useLayoutEffect : v.useEffect, pc = (e) => e, eL = class {
  constructor() {
    De(this, "descendants", /* @__PURE__ */ new Map()), De(this, "register", (e) => {
      if (e != null)
        return JN(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), De(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = g1(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), De(this, "destroy", () => {
      this.descendants.clear();
    }), De(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const n = e.indexOf(t.node);
        t.index = n, t.node.dataset.index = t.index.toString();
      });
    }), De(this, "count", () => this.descendants.size), De(this, "enabledCount", () => this.enabledValues().length), De(this, "values", () => Array.from(this.descendants.values()).sort((t, n) => t.index - n.index)), De(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), De(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), De(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), De(this, "first", () => this.item(0)), De(this, "firstEnabled", () => this.enabledItem(0)), De(this, "last", () => this.item(this.descendants.size - 1)), De(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), De(this, "indexOf", (e) => {
      var t, n;
      return e && (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? n : -1;
    }), De(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), De(this, "next", (e, t = !0) => {
      const n = y1(e, this.count(), t);
      return this.item(n);
    }), De(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = y1(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), De(this, "prev", (e, t = !0) => {
      const n = b1(e, this.count() - 1, t);
      return this.item(n);
    }), De(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = b1(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), De(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = g1(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function tL(e, t) {
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
function Qe(...e) {
  return (t) => {
    e.forEach((n) => {
      tL(n, t);
    });
  };
}
function nL(...e) {
  return v.useMemo(() => Qe(...e), e);
}
function rL() {
  const e = v.useRef(new eL());
  return ih(() => () => e.current.destroy()), e.current;
}
var [oL, Uk] = Ke({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function iL(e) {
  const t = Uk(), [n, r] = v.useState(-1), o = v.useRef(null);
  ih(() => () => {
    o.current && t.unregister(o.current);
  }, []), ih(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    n != a && !Number.isNaN(a) && r(a);
  });
  const i = pc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: Qe(i, o)
  };
}
function Hk() {
  return [
    pc(oL),
    () => pc(Uk()),
    () => rL(),
    (o) => iL(o)
  ];
}
var [aL, ld] = Ke({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [sL, tv] = Ke({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  lL,
  e7,
  uL,
  cL
] = Hk(), Gk = te(
  function(t, n) {
    const { getButtonProps: r } = tv(), o = r(t, n), a = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...ld().button
    };
    return /* @__PURE__ */ k.jsx(
      Y.button,
      {
        ...o,
        className: J("chakra-accordion__button", t.className),
        __css: a
      }
    );
  }
);
Gk.displayName = "AccordionButton";
function dL(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = Nr(r), a = Nr(o), [s, l] = v.useState(n), u = t !== void 0, c = u ? t : s, d = Nr(
    (f) => {
      const y = typeof f == "function" ? f(c) : f;
      a(c, y) && (u || l(y), i(y));
    },
    [u, i, c, a]
  );
  return [c, d];
}
function fL(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: i,
    ...a
  } = e;
  mL(e), vL(e);
  const s = uL(), [l, u] = v.useState(-1);
  v.useEffect(() => () => {
    u(-1);
  }, []);
  const [c, d] = dL({
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
            const m = x ? c.concat(p) : c.filter((h) => h !== p);
            d(m);
          } else
            x ? d(p) : i && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: u,
    descendants: s
  };
}
var [pL, nv] = Ke({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function hL(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: i, setFocusedIndex: a } = nv(), s = v.useRef(null), l = v.useId(), u = r ?? l, c = `accordion-button-${u}`, d = `accordion-panel-${u}`;
  gL(e);
  const { register: f, index: p, descendants: y } = cL({
    disabled: t && !n
  }), { isOpen: g, onChange: x } = i(
    p === -1 ? null : p
  );
  yL({ isOpen: g, isDisabled: t });
  const m = () => {
    x == null || x(!0);
  }, h = () => {
    x == null || x(!1);
  }, b = v.useCallback(() => {
    x == null || x(!g), a(p);
  }, [p, a, g, x]), S = v.useCallback(
    (A) => {
      const R = {
        ArrowDown: () => {
          const z = y.nextEnabled(p);
          z == null || z.node.focus();
        },
        ArrowUp: () => {
          const z = y.prevEnabled(p);
          z == null || z.node.focus();
        },
        Home: () => {
          const z = y.firstEnabled();
          z == null || z.node.focus();
        },
        End: () => {
          const z = y.lastEnabled();
          z == null || z.node.focus();
        }
      }[A.key];
      R && (A.preventDefault(), R(A));
    },
    [y, p]
  ), C = v.useCallback(() => {
    a(p);
  }, [a, p]), P = v.useCallback(
    function(M = {}, R = null) {
      return {
        ...M,
        type: "button",
        ref: Qe(f, s, R),
        id: c,
        disabled: !!t,
        "aria-expanded": !!g,
        "aria-controls": d,
        onClick: Ae(M.onClick, b),
        onFocus: Ae(M.onFocus, C),
        onKeyDown: Ae(M.onKeyDown, S)
      };
    },
    [
      c,
      t,
      g,
      b,
      C,
      S,
      d,
      f
    ]
  ), _ = v.useCallback(
    function(M = {}, R = null) {
      return {
        ...M,
        ref: R,
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
    getPanelProps: _,
    htmlProps: o
  };
}
function mL(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  Ys({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function vL(e) {
  Ys({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function gL(e) {
  Ys({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function yL(e) {
  Ys({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function Kk(e) {
  const { isOpen: t, isDisabled: n } = tv(), { reduceMotion: r } = nv(), o = J("chakra-accordion__icon", e.className), i = ld(), a = {
    opacity: n ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: r ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...i.icon
  };
  return /* @__PURE__ */ k.jsx(
    na,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: o,
      __css: a,
      ...e,
      children: /* @__PURE__ */ k.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
Kk.displayName = "AccordionIcon";
var Yk = te(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: i, ...a } = hL(t), l = {
      ...ld().container,
      overflowAnchor: "none"
    }, u = v.useMemo(() => a, [a]);
    return /* @__PURE__ */ k.jsx(sL, { value: u, children: /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ref: n,
        ...i,
        className: J("chakra-accordion__item", o),
        __css: l,
        children: typeof r == "function" ? r({
          isExpanded: !!a.isOpen,
          isDisabled: !!a.isDisabled
        }) : r
      }
    ) });
  }
);
Yk.displayName = "AccordionItem";
var go = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, ka = {
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
function ah(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return ka.slideRight;
    case "left":
      return ka.slideLeft;
    case "bottom":
      return ka.slideDown;
    case "top":
      return ka.slideUp;
    default:
      return ka.slideRight;
  }
}
var Co = {
  enter: {
    duration: 0.2,
    ease: go.easeOut
  },
  exit: {
    duration: 0.1,
    ease: go.easeIn
  }
}, yn = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, bL = (e) => e != null && parseInt(e.toString(), 10) > 0, x1 = {
  exit: {
    height: { duration: 0.2, ease: go.ease },
    opacity: { duration: 0.3, ease: go.ease }
  },
  enter: {
    height: { duration: 0.3, ease: go.ease },
    opacity: { duration: 0.4, ease: go.ease }
  }
}, xL = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var i;
    return {
      ...e && { opacity: bL(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : yn.exit(x1.exit, o)
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
      transition: (i = n == null ? void 0 : n.enter) != null ? i : yn.enter(x1.enter, o)
    };
  }
}, qk = v.forwardRef(
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
      const h = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(h);
    }, []), Ys({
      condition: Number(i) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const y = parseFloat(i.toString()) > 0, g = {
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
    }, x = r ? n : !0, m = n || r ? "enter" : "exit";
    return /* @__PURE__ */ k.jsx(No, { initial: !1, custom: g, children: x && /* @__PURE__ */ k.jsx(
      Vn.div,
      {
        ref: t,
        ...d,
        className: J("chakra-collapse", l),
        style: {
          overflow: "hidden",
          display: "block",
          ...s
        },
        custom: g,
        variants: xL,
        initial: r ? "exit" : !1,
        animate: m,
        exit: "exit"
      }
    ) });
  }
);
qk.displayName = "Collapse";
var SL = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : yn.enter(Co.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : yn.exit(Co.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Xk = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: SL
}, wL = v.forwardRef(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || r ? "enter" : "exit", d = r ? o && r : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ k.jsx(No, { custom: f, children: d && /* @__PURE__ */ k.jsx(
    Vn.div,
    {
      ref: n,
      className: J("chakra-fade", i),
      custom: f,
      ...Xk,
      animate: c,
      ...u
    }
  ) });
});
wL.displayName = "Fade";
var kL = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (i = n == null ? void 0 : n.exit) != null ? i : yn.exit(Co.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : yn.enter(Co.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, Qk = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: kL
}, CL = v.forwardRef(
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
    return /* @__PURE__ */ k.jsx(No, { custom: y, children: f && /* @__PURE__ */ k.jsx(
      Vn.div,
      {
        ref: n,
        className: J("chakra-offset-slide", s),
        ...Qk,
        animate: p,
        custom: y,
        ...d
      }
    ) });
  }
);
CL.displayName = "ScaleFade";
var _L = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var i;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (i = n == null ? void 0 : n.exit) != null ? i : yn.exit(Co.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : yn.enter(Co.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: i }) => {
    var a;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : yn.exit(Co.exit, i),
      ...o ? { ...s, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...s, ...r == null ? void 0 : r.exit } }
    };
  }
}, za = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: _L
}, PL = v.forwardRef(
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
    } = t, p = r ? o && r : !0, y = o || r ? "enter" : "exit", g = {
      offsetX: s,
      offsetY: l,
      reverse: i,
      transition: u,
      transitionEnd: c,
      delay: d
    };
    return /* @__PURE__ */ k.jsx(No, { custom: g, children: p && /* @__PURE__ */ k.jsx(
      Vn.div,
      {
        ref: n,
        className: J("chakra-offset-slide", a),
        custom: g,
        ...za,
        animate: y,
        ...f
      }
    ) });
  }
);
PL.displayName = "SlideFade";
var S1 = {
  exit: {
    duration: 0.15,
    ease: go.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, TL = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: i } = ah({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : yn.exit(S1.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: i } = ah({ direction: e });
    return {
      ...i,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : yn.enter(S1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, Zk = v.forwardRef(function(t, n) {
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
  } = t, p = ah({ direction: r }), y = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = i ? a && i : !0, x = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: r, delay: c };
  return /* @__PURE__ */ k.jsx(No, { custom: m, children: g && /* @__PURE__ */ k.jsx(
    Vn.div,
    {
      ...f,
      ref: n,
      initial: "exit",
      className: J("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: m,
      variants: TL,
      style: y,
      ...d
    }
  ) });
});
Zk.displayName = "Slide";
var Jk = te(
  function(t, n) {
    const { className: r, motionProps: o, ...i } = t, { reduceMotion: a } = nv(), { getPanelProps: s, isOpen: l } = tv(), u = s(i, n), c = J("chakra-accordion__panel", r), d = ld();
    a || delete u.hidden;
    const f = /* @__PURE__ */ k.jsx(Y.div, { ...u, __css: d.panel, className: c });
    return a ? f : /* @__PURE__ */ k.jsx(qk, { in: l, ...o, children: f });
  }
);
Jk.displayName = "AccordionPanel";
var eC = te(function({ children: t, reduceMotion: n, ...r }, o) {
  const i = zo("Accordion", r), a = Bn(r), { htmlProps: s, descendants: l, ...u } = fL(a), c = v.useMemo(
    () => ({ ...u, reduceMotion: !!n }),
    [u, n]
  );
  return /* @__PURE__ */ k.jsx(lL, { value: l, children: /* @__PURE__ */ k.jsx(pL, { value: c, children: /* @__PURE__ */ k.jsx(aL, { value: i, children: /* @__PURE__ */ k.jsx(
    Y.div,
    {
      ref: o,
      ...s,
      className: J("chakra-accordion", r.className),
      __css: i.root,
      children: t
    }
  ) }) }) });
});
eC.displayName = "Accordion";
function EL(e) {
  return v.Children.toArray(e).filter(
    (t) => v.isValidElement(t)
  );
}
var [t7, AL] = Ke({
  strict: !1,
  name: "ButtonGroupContext"
});
function $L(e) {
  const [t, n] = v.useState(!e);
  return { ref: v.useCallback((i) => {
    i && n(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function sh(e) {
  const { children: t, className: n, ...r } = e, o = v.isValidElement(t) ? v.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = J("chakra-button__icon", n);
  return /* @__PURE__ */ k.jsx(
    Y.span,
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
sh.displayName = "ButtonIcon";
function lh(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ k.jsx(Zm, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = J("chakra-button__spinner", i), u = n === "start" ? "marginEnd" : "marginStart", c = v.useMemo(
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
  return /* @__PURE__ */ k.jsx(Y.div, { className: l, ...s, __css: c, children: o });
}
lh.displayName = "ButtonSpinner";
var jn = te((e, t) => {
  const n = AL(), r = Xs("Button", { ...n, ...e }), {
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
    className: g,
    as: x,
    ...m
  } = Bn(e), h = v.useMemo(() => {
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
  }, [r, n]), { ref: b, type: S } = $L(x), C = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ k.jsxs(
    Y.button,
    {
      ref: nL(t, b),
      as: x,
      type: f ?? S,
      "data-active": Qt(a),
      "data-loading": Qt(i),
      __css: h,
      className: J("chakra-button", g),
      ...m,
      disabled: o || i,
      children: [
        i && y === "start" && /* @__PURE__ */ k.jsx(
          lh,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ k.jsx(Y.span, { opacity: 0, children: /* @__PURE__ */ k.jsx(w1, { ...C }) }) : /* @__PURE__ */ k.jsx(w1, { ...C }),
        i && y === "end" && /* @__PURE__ */ k.jsx(
          lh,
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
function w1(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    t && /* @__PURE__ */ k.jsx(sh, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ k.jsx(sh, { marginStart: o, children: n })
  ] });
}
var tC = te(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": i, ...a } = e, s = n || r, l = v.isValidElement(s) ? v.cloneElement(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ k.jsx(
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
tC.displayName = "IconButton";
var [ML, RL] = Ke({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [OL, nC] = Ke({
  strict: !1,
  name: "FormControlContext"
});
function IL(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = v.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = v.useState(!1), [y, g] = v.useState(!1), [x, m] = v.useState(!1), h = v.useCallback(
    (_ = {}, A = null) => ({
      id: d,
      ..._,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Qe(A, (M) => {
        M && g(!0);
      })
    }),
    [d]
  ), b = v.useCallback(
    (_ = {}, A = null) => ({
      ..._,
      ref: A,
      "data-focus": Qt(x),
      "data-disabled": Qt(o),
      "data-invalid": Qt(r),
      "data-readonly": Qt(i),
      id: _.id !== void 0 ? _.id : u,
      htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l
    }),
    [l, o, x, r, i, u]
  ), S = v.useCallback(
    (_ = {}, A = null) => ({
      id: c,
      ..._,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Qe(A, (M) => {
        M && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), C = v.useCallback(
    (_ = {}, A = null) => ({
      ..._,
      ...a,
      ref: A,
      role: "group",
      "data-focus": Qt(x),
      "data-disabled": Qt(o),
      "data-invalid": Qt(r),
      "data-readonly": Qt(i)
    }),
    [a, o, x, r, i]
  ), P = v.useCallback(
    (_ = {}, A = null) => ({
      ..._,
      ref: A,
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
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: y,
    setHasHelpText: g,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: S,
    getRootProps: C,
    getLabelProps: b,
    getRequiredIndicatorProps: P
  };
}
var DL = te(
  function(t, n) {
    const r = zo("Form", t), o = Bn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = IL(o), l = J("chakra-form-control", t.className);
    return /* @__PURE__ */ k.jsx(OL, { value: s, children: /* @__PURE__ */ k.jsx(ML, { value: r, children: /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ...i({}, n),
        className: l,
        __css: r.container
      }
    ) }) });
  }
);
DL.displayName = "FormControl";
var zL = te(
  function(t, n) {
    const r = nC(), o = RL(), i = J("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: i
      }
    );
  }
);
zL.displayName = "FormHelperText";
function FL(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i } = jL(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Qd(n),
    "aria-required": Qd(o),
    "aria-readonly": Qd(r)
  };
}
function jL(e) {
  var t, n, r;
  const o = nC(), {
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
    ...g
  } = e, x = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && x.push(o.feedbackId), o != null && o.hasHelpText && x.push(o.helpTextId), {
    ...g,
    "aria-describedby": x.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = s ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: Ae(o == null ? void 0 : o.onFocus, p),
    onBlur: Ae(o == null ? void 0 : o.onBlur, y)
  };
}
function rv(e, t, n, r) {
  const o = Nr(n);
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
function NL(e) {
  return "current" in e;
}
var rC = () => typeof window < "u";
function LL() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var BL = (e) => rC() && e.test(navigator.vendor), VL = (e) => rC() && e.test(LL()), WL = () => VL(/mac|iphone|ipad|ipod/i), UL = () => WL() && BL(/apple/i);
function HL(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  rv(o, "pointerdown", (i) => {
    if (!UL() || !r)
      return;
    const a = i.target, l = (n ?? [t]).some((u) => {
      const c = NL(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function GL(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var oC = { exports: {} }, KL = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", YL = KL, qL = YL;
function iC() {
}
function aC() {
}
aC.resetWarningCache = iC;
var XL = function() {
  function e(r, o, i, a, s, l) {
    if (l !== qL) {
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
    checkPropTypes: aC,
    resetWarningCache: iC
  };
  return n.PropTypes = n, n;
};
oC.exports = XL();
var QL = oC.exports;
const ro = /* @__PURE__ */ Ns(QL);
var uh = "data-focus-lock", sC = "data-focus-lock-disabled", ZL = "data-no-focus-lock", JL = "data-autofocus-inside", eB = "data-no-autofocus";
function tB(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function nB(e, t) {
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
function lC(e, t) {
  return nB(t || null, function(n) {
    return e.forEach(function(r) {
      return tB(r, n);
    });
  });
}
var $f = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, $n = function() {
  return $n = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, $n.apply(this, arguments);
};
function uC(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function rB(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function cC(e) {
  return e;
}
function dC(e, t) {
  t === void 0 && (t = cC);
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
function ov(e, t) {
  return t === void 0 && (t = cC), dC(e, t);
}
function fC(e) {
  e === void 0 && (e = {});
  var t = dC(null);
  return t.options = $n({ async: !0, ssr: !1 }, e), t;
}
var pC = function(e) {
  var t = e.sideCar, n = uC(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, $n({}, n));
};
pC.isSideCarExport = !0;
function oB(e, t) {
  return e.useMedium(t), pC;
}
var hC = ov({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), mC = ov(), iB = ov(), aB = fC({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), sB = [], iv = /* @__PURE__ */ v.forwardRef(function(t, n) {
  var r, o = v.useState(), i = o[0], a = o[1], s = v.useRef(), l = v.useRef(!1), u = v.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, m = t.className, h = t.whiteList, b = t.hasPositiveIndices, S = t.shards, C = S === void 0 ? sB : S, P = t.as, _ = P === void 0 ? "div" : P, A = t.lockProps, M = A === void 0 ? {} : A, R = t.sideCar, z = t.returnFocus, Q = t.focusOptions, G = t.onActivation, K = t.onDeactivation, X = v.useState({}), q = X[0], O = v.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && G && G(s.current), l.current = !0;
  }, [G]), D = v.useCallback(function() {
    l.current = !1, K && K(s.current);
  }, [K]);
  v.useEffect(function() {
    d || (u.current = null);
  }, []);
  var N = v.useCallback(function(ye) {
    var be = u.current;
    if (be && be.focus) {
      var Ie = typeof z == "function" ? z(be) : z;
      if (Ie) {
        var et = typeof Ie == "object" ? Ie : void 0;
        u.current = null, ye ? Promise.resolve().then(function() {
          return be.focus(et);
        }) : be.focus(et);
      }
    }
  }, [z]), V = v.useCallback(function(ye) {
    l.current && hC.useMedium(ye);
  }, []), L = mC.useMedium, ee = v.useCallback(function(ye) {
    s.current !== ye && (s.current = ye, a(ye));
  }, []), B = Ro((r = {}, r[sC] = d && "disabled", r[uh] = x, r), M), Z = f !== !0, ve = Z && f !== "tail", le = lC([n, ee]);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, Z && [
    // nearest focus guard
    /* @__PURE__ */ v.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: $f
    }),
    // first tabbed element guard
    b ? /* @__PURE__ */ v.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: $f
    }) : null
  ], !d && /* @__PURE__ */ v.createElement(R, {
    id: q,
    sideCar: aB,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: g,
    whiteList: h,
    shards: C,
    onActivation: O,
    onDeactivation: D,
    returnFocus: N,
    focusOptions: Q
  }), /* @__PURE__ */ v.createElement(_, Ro({
    ref: le
  }, B, {
    className: m,
    onBlur: L,
    onFocus: V
  }), c), ve && /* @__PURE__ */ v.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: $f
  }));
});
iv.propTypes = {};
iv.defaultProps = {
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
const vC = iv;
function ch(e, t) {
  return ch = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ch(e, t);
}
function lB(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ch(e, t);
}
function Is(e) {
  "@babel/helpers - typeof";
  return Is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Is(e);
}
function uB(e, t) {
  if (Is(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Is(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cB(e) {
  var t = uB(e, "string");
  return Is(t) === "symbol" ? t : String(t);
}
function dB(e, t, n) {
  return t = cB(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function fB(e, t) {
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
      lB(c, u);
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
        return /* @__PURE__ */ Po.createElement(o, this.props);
      }, c;
    }(v.PureComponent);
    return dB(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var Wn = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, hc = function(e) {
  return Array.isArray(e) ? e : [e];
}, gC = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, pB = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, yC = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, bC = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, hB = function(e, t) {
  return !e || bC(e) || !pB(e) && t(yC(e));
}, xC = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = hB(t, xC.bind(void 0, e));
  return e.set(t, r), r;
}, mB = function(e, t) {
  return e && !bC(e) ? yB(e) ? t(yC(e)) : !1 : !0;
}, SC = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = mB(t, SC.bind(void 0, e));
  return e.set(t, r), r;
}, wC = function(e) {
  return e.dataset;
}, vB = function(e) {
  return e.tagName === "BUTTON";
}, kC = function(e) {
  return e.tagName === "INPUT";
}, CC = function(e) {
  return kC(e) && e.type === "radio";
}, gB = function(e) {
  return !((kC(e) || vB(e)) && (e.type === "hidden" || e.disabled));
}, yB = function(e) {
  var t = e.getAttribute(eB);
  return ![!0, "true", ""].includes(t);
}, av = function(e) {
  var t;
  return !!(e && (!((t = wC(e)) === null || t === void 0) && t.focusGuard));
}, mc = function(e) {
  return !av(e);
}, bB = function(e) {
  return !!e;
}, xB = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, _C = function(e, t, n) {
  return Wn(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(xB);
}, SB = [
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
], sv = SB.join(","), wB = "".concat(sv, ", [data-focus-guard]"), PC = function(e, t) {
  return Wn((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? wB : sv) ? [r] : [], PC(r));
  }, []);
}, kB = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? ud([e.contentDocument.body], t) : [e];
}, ud = function(e, t) {
  return e.reduce(function(n, r) {
    var o, i = PC(r, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return kB(s, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      r.parentNode ? Wn(r.parentNode.querySelectorAll(sv)).filter(function(s) {
        return s === r;
      }) : []
    );
  }, []);
}, CB = function(e) {
  var t = e.querySelectorAll("[".concat(JL, "]"));
  return Wn(t).map(function(n) {
    return ud([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, lv = function(e, t) {
  return Wn(e).filter(function(n) {
    return xC(t, n);
  }).filter(function(n) {
    return gB(n);
  });
}, k1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Wn(e).filter(function(n) {
    return SC(t, n);
  });
}, dh = function(e, t, n) {
  return _C(lv(ud(e, n), t), !0, n);
}, C1 = function(e, t) {
  return _C(lv(ud(e), t), !1);
}, _B = function(e, t) {
  return lv(CB(e), t);
}, Mi = function(e, t) {
  return e.shadowRoot ? Mi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Wn(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? Mi(o, t) : !1;
    }
    return Mi(n, t);
  });
}, PB = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var i = e[r].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, TC = function(e) {
  return e.parentNode ? TC(e.parentNode) : e;
}, uv = function(e) {
  var t = hc(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(uh);
    return n.push.apply(n, o ? PB(Wn(TC(r).querySelectorAll("[".concat(uh, '="').concat(o, '"]:not([').concat(sC, '="disabled"])')))) : [r]), n;
  }, []);
}, TB = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ds = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ds(t.shadowRoot) : t instanceof HTMLIFrameElement && TB(function() {
      return t.contentWindow.document;
    }) ? Ds(t.contentWindow.document) : t;
  }
}, EB = function(e, t) {
  return e === t;
}, AB = function(e, t) {
  return !!Wn(e.querySelectorAll("iframe")).some(function(n) {
    return EB(n, t);
  });
}, EC = function(e, t) {
  return t === void 0 && (t = Ds(gC(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : uv(e).some(function(n) {
    return Mi(n, t) || AB(n, t);
  });
}, $B = function(e) {
  e === void 0 && (e = document);
  var t = Ds(e);
  return t ? Wn(e.querySelectorAll("[".concat(ZL, "]"))).some(function(n) {
    return Mi(n, t);
  }) : !1;
}, MB = function(e, t) {
  return t.filter(CC).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, cv = function(e, t) {
  return CC(e) && e.name ? MB(e, t) : e;
}, RB = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(cv(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, _1 = function(e) {
  return e[0] && e.length > 1 ? cv(e[0], e) : e[0];
}, P1 = function(e, t) {
  return e.length > 1 ? e.indexOf(cv(e[t], e)) : t;
}, AC = "NEW_FOCUS", OB = function(e, t, n, r) {
  var o = e.length, i = e[0], a = e[o - 1], s = av(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var l = n !== void 0 ? t.indexOf(n) : -1, u = r ? t.indexOf(r) : l, c = r ? e.indexOf(r) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), y = RB(t), g = n !== void 0 ? y.indexOf(n) : -1, x = g - (r ? y.indexOf(r) : l), m = P1(e, 0), h = P1(e, o - 1);
    if (l === -1 || c === -1)
      return AC;
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
}, IB = function(e) {
  return function(t) {
    var n, r = (n = wC(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, DB = function(e, t, n) {
  var r = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = k1(r.filter(IB(n)));
  return o && o.length ? _1(o) : _1(k1(t));
}, fh = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && fh(e.parentNode.host || e.parentNode, t), t;
}, Mf = function(e, t) {
  for (var n = fh(e), r = fh(t), o = 0; o < n.length; o += 1) {
    var i = n[o];
    if (r.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, $C = function(e, t, n) {
  var r = hc(e), o = hc(t), i = r[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Mf(a || s, s) || a, n.filter(Boolean).forEach(function(l) {
      var u = Mf(i, l);
      u && (!a || Mi(u, a) ? a = u : a = Mf(u, a));
    });
  }), a;
}, zB = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(_B(r, t));
  }, []);
}, FB = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(bB);
}, jB = function(e, t) {
  var n = Ds(hc(e).length > 0 ? document : gC(e).ownerDocument), r = uv(e).filter(mc), o = $C(n || e, e, r), i = /* @__PURE__ */ new Map(), a = C1(r, i), s = dh(r, i).filter(function(p) {
    var y = p.node;
    return mc(y);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = C1([o], i).map(function(p) {
      var y = p.node;
      return y;
    }), u = FB(l, s), c = u.map(function(p) {
      var y = p.node;
      return y;
    }), d = OB(c, l, n, t);
    if (d === AC) {
      var f = DB(a, c, zB(r, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, NB = function(e) {
  var t = uv(e).filter(mc), n = $C(e, e, t), r = /* @__PURE__ */ new Map(), o = dh([n], r, !0), i = dh(t, r).filter(function(a) {
    var s = a.node;
    return mc(s);
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
      guard: av(s)
    };
  });
}, LB = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Rf = 0, Of = !1, MC = function(e, t, n) {
  n === void 0 && (n = {});
  var r = jB(e, t);
  if (!Of && r) {
    if (Rf > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Of = !0, setTimeout(function() {
        Of = !1;
      }, 1);
      return;
    }
    Rf++, LB(r.node, n.focusOptions), Rf--;
  }
};
function dv(e) {
  setTimeout(e, 1);
}
var BB = function() {
  return document && document.activeElement === document.body;
}, VB = function() {
  return BB() || $B();
}, Ri = null, bi = null, Oi = null, zs = !1, WB = function() {
  return !0;
}, UB = function(t) {
  return (Ri.whiteList || WB)(t);
}, HB = function(t, n) {
  Oi = {
    observerNode: t,
    portaledElement: n
  };
}, GB = function(t) {
  return Oi && Oi.portaledElement === t;
};
function T1(e, t, n, r) {
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
var KB = function(t) {
  return t && "current" in t ? t.current : t;
}, YB = function(t) {
  return t ? !!zs : zs === "meanwhile";
}, qB = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, XB = function(t, n) {
  return n.some(function(r) {
    return qB(t, r, r);
  });
}, vc = function() {
  var t = !1;
  if (Ri) {
    var n = Ri, r = n.observed, o = n.persistentFocus, i = n.autoFocus, a = n.shards, s = n.crossFrame, l = n.focusOptions, u = r || Oi && Oi.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(KB).filter(Boolean));
      if ((!c || UB(c)) && (o || YB(s) || !VB() || !bi && i) && (u && !// active element is "inside" working area
      (EC(d) || // check for shadow-dom contained elements
      c && XB(c, d) || GB(c)) && (document && !bi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = MC(d, bi, {
        focusOptions: l
      }), Oi = {})), zs = !1, bi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = NB(d), y = p.map(function(g) {
          var x = g.node;
          return x;
        }).indexOf(f);
        y > -1 && (p.filter(function(g) {
          var x = g.guard, m = g.node;
          return x && m.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var x = g.node;
          return x.removeAttribute("tabIndex");
        }), T1(y, p.length, 1, p), T1(y, -1, -1, p));
      }
    }
  }
  return t;
}, RC = function(t) {
  vc() && t && (t.stopPropagation(), t.preventDefault());
}, fv = function() {
  return dv(vc);
}, QB = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || HB(r, n);
}, ZB = function() {
  return null;
}, OC = function() {
  zs = "just", dv(function() {
    zs = "meanwhile";
  });
}, JB = function() {
  document.addEventListener("focusin", RC), document.addEventListener("focusout", fv), window.addEventListener("blur", OC);
}, e6 = function() {
  document.removeEventListener("focusin", RC), document.removeEventListener("focusout", fv), window.removeEventListener("blur", OC);
};
function t6(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function n6(e) {
  var t = e.slice(-1)[0];
  t && !Ri && JB();
  var n = Ri, r = n && t && t.id === n.id;
  Ri = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === n.id;
  }).length || n.returnFocus(!t)), t ? (bi = null, (!r || n.observed !== t.observed) && t.onActivation(), vc(), dv(vc)) : (e6(), bi = null);
}
hC.assignSyncMedium(QB);
mC.assignMedium(fv);
iB.assignMedium(function(e) {
  return e({
    moveFocusInside: MC,
    focusInside: EC
  });
});
const r6 = fB(t6, n6)(ZB);
var IC = /* @__PURE__ */ v.forwardRef(function(t, n) {
  return /* @__PURE__ */ v.createElement(vC, Ro({
    sideCar: r6,
    ref: n
  }, t));
}), DC = vC.propTypes || {};
DC.sideCar;
GL(DC, ["sideCar"]);
IC.propTypes = {};
const E1 = IC;
function zC(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function FC(e) {
  var t;
  if (!zC(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function o6(e) {
  var t, n;
  return (n = (t = jC(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function jC(e) {
  return zC(e) ? e.ownerDocument : document;
}
function i6(e) {
  return jC(e).activeElement;
}
var NC = (e) => e.hasAttribute("tabindex"), a6 = (e) => NC(e) && e.tabIndex === -1;
function s6(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function LC(e) {
  return e.parentElement && LC(e.parentElement) ? !0 : e.hidden;
}
function l6(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function BC(e) {
  if (!FC(e) || LC(e) || s6(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : l6(e) ? !0 : NC(e);
}
function u6(e) {
  return e ? FC(e) && BC(e) && !a6(e) : !1;
}
var c6 = [
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
], d6 = c6.join(), f6 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function VC(e) {
  const t = Array.from(
    e.querySelectorAll(d6)
  );
  return t.unshift(e), t.filter((n) => BC(n) && f6(n));
}
var A1, p6 = (A1 = E1.default) != null ? A1 : E1, WC = (e) => {
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
    t != null && t.current ? t.current.focus() : r != null && r.current && VC(r.current).length === 0 && requestAnimationFrame(() => {
      var y;
      (y = r.current) == null || y.focus();
    });
  }, [t, r]), d = v.useCallback(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), f = o && !n;
  return /* @__PURE__ */ k.jsx(
    p6,
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
WC.displayName = "FocusLock";
var h6 = zz ? v.useLayoutEffect : v.useEffect;
function $1(e, t = []) {
  const n = v.useRef(e);
  return h6(() => {
    n.current = e;
  }), v.useCallback((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function m6(e, t) {
  const n = v.useId();
  return v.useMemo(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function v6(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function g6(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = $1(n), a = $1(t), [s, l] = v.useState(e.defaultIsOpen || !1), [u, c] = v6(r, s), d = m6(o, "disclosure"), f = v.useCallback(() => {
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
    getButtonProps: (g = {}) => ({
      ...g,
      "aria-expanded": c,
      "aria-controls": d,
      onClick: Bz(g.onClick, y)
    }),
    getDisclosureProps: (g = {}) => ({
      ...g,
      hidden: !c,
      id: d
    })
  };
}
var cd = te(function(t, n) {
  const { htmlSize: r, ...o } = t, i = zo("Input", o), a = Bn(o), s = FL(a), l = J("chakra-input", t.className);
  return /* @__PURE__ */ k.jsx(
    Y.input,
    {
      size: r,
      ...s,
      __css: i.field,
      ref: n,
      className: l
    }
  );
});
cd.displayName = "Input";
cd.id = "Input";
function y6(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : rn(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
var yo = te(function(t, n) {
  const r = Xs("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Bn(t), u = Zz({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ k.jsx(
    Y.p,
    {
      ref: n,
      className: J("chakra-text", t.className),
      ...u,
      ...l,
      __css: r
    }
  );
});
yo.displayName = "Text";
var UC = (e) => /* @__PURE__ */ k.jsx(
  Y.div,
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
UC.displayName = "StackItem";
function b6(e) {
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
    "&": y6(
      n,
      (o) => r[o]
    )
  };
}
var HC = te((e, t) => {
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
    () => b6({ spacing: a, direction: p }),
    [a, p]
  ), g = !!u, x = !d && !g, m = v.useMemo(() => {
    const b = EL(l);
    return x ? b : b.map((S, C) => {
      const P = typeof S.key < "u" ? S.key : C, _ = C + 1 === b.length, M = d ? /* @__PURE__ */ k.jsx(UC, { children: S }, P) : S;
      if (!g)
        return M;
      const R = v.cloneElement(
        u,
        {
          __css: y
        }
      ), z = _ ? null : R;
      return /* @__PURE__ */ k.jsxs(v.Fragment, { children: [
        M,
        z
      ] }, P);
    });
  }, [
    u,
    y,
    g,
    x,
    d,
    l
  ]), h = J("chakra-stack", c);
  return /* @__PURE__ */ k.jsx(
    Y.div,
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
HC.displayName = "Stack";
var Mn = te((e, t) => /* @__PURE__ */ k.jsx(HC, { align: "center", ...e, direction: "row", ref: t }));
Mn.displayName = "HStack";
var Ki = Y("div");
Ki.displayName = "Box";
var GC = te(function(t, n) {
  const { size: r, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ k.jsx(
    Ki,
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
GC.displayName = "Square";
var x6 = te(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ k.jsx(GC, { size: r, ref: n, borderRadius: "9999px", ...o });
});
x6.displayName = "Circle";
function S6(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function w6(e = {}) {
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
      if (S6(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), u(d.join("")), s();
      }
    };
  }
  return l;
}
function k6(e, t, n, r) {
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
function C6() {
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
function If(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function _6(e = {}) {
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
  } = e, [g, x] = v.useState(!0), [m, h] = v.useState(!1), b = C6(), S = (O) => {
    O && O.tagName !== "BUTTON" && x(!1);
  }, C = g ? d : d || 0, P = n && !r, _ = v.useCallback(
    (O) => {
      if (n) {
        O.stopPropagation(), O.preventDefault();
        return;
      }
      O.currentTarget.focus(), l == null || l(O);
    },
    [n, l]
  ), A = v.useCallback(
    (O) => {
      m && If(O) && (O.preventDefault(), O.stopPropagation(), h(!1), b.remove(document, "keyup", A, !1));
    },
    [m, b]
  ), M = v.useCallback(
    (O) => {
      if (u == null || u(O), n || O.defaultPrevented || O.metaKey || !If(O.nativeEvent) || g)
        return;
      const D = o && O.key === "Enter";
      i && O.key === " " && (O.preventDefault(), h(!0)), D && (O.preventDefault(), O.currentTarget.click()), b.add(document, "keyup", A, !1);
    },
    [
      n,
      g,
      u,
      o,
      i,
      b,
      A
    ]
  ), R = v.useCallback(
    (O) => {
      if (c == null || c(O), n || O.defaultPrevented || O.metaKey || !If(O.nativeEvent) || g)
        return;
      i && O.key === " " && (O.preventDefault(), h(!1), O.currentTarget.click());
    },
    [i, g, n, c]
  ), z = v.useCallback(
    (O) => {
      O.button === 0 && (h(!1), b.remove(document, "mouseup", z, !1));
    },
    [b]
  ), Q = v.useCallback(
    (O) => {
      if (O.button !== 0)
        return;
      if (n) {
        O.stopPropagation(), O.preventDefault();
        return;
      }
      g || h(!0), O.currentTarget.focus({ preventScroll: !0 }), b.add(document, "mouseup", z, !1), a == null || a(O);
    },
    [n, g, a, b, z]
  ), G = v.useCallback(
    (O) => {
      O.button === 0 && (g || h(!1), s == null || s(O));
    },
    [s, g]
  ), K = v.useCallback(
    (O) => {
      if (n) {
        O.preventDefault();
        return;
      }
      f == null || f(O);
    },
    [n, f]
  ), X = v.useCallback(
    (O) => {
      m && (O.preventDefault(), h(!1)), p == null || p(O);
    },
    [m, p]
  ), q = Qe(t, S);
  return g ? {
    ...y,
    ref: q,
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
    ref: q,
    role: "button",
    "data-active": Qt(m),
    "aria-disabled": n ? "true" : void 0,
    tabIndex: P ? void 0 : C,
    onClick: _,
    onMouseDown: Q,
    onMouseUp: G,
    onKeyUp: R,
    onKeyDown: M,
    onMouseOver: K,
    onMouseLeave: X
  };
}
function P6(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = i6(t);
  return !n || t.contains(n) ? !1 : !!u6(n);
}
function KC(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, i = n && !r;
  Ui(() => {
    if (!i || P6(e))
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
var T6 = {
  preventScroll: !0,
  shouldFocus: !1
};
function E6(e, t = T6) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: i } = t, a = A6(e) ? e.current : e, s = o && i, l = v.useRef(s), u = v.useRef(i);
  Ps(() => {
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
        const d = VC(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [i, r, a, n]);
  Ui(() => {
    c();
  }, [c]), rv(a, "transitionend", c);
}
function A6(e) {
  return "current" in e;
}
var Go = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), ht = {
  arrowShadowColor: Go("--popper-arrow-shadow-color"),
  arrowSize: Go("--popper-arrow-size", "8px"),
  arrowSizeHalf: Go("--popper-arrow-size-half"),
  arrowBg: Go("--popper-arrow-bg"),
  transformOrigin: Go("--popper-transform-origin"),
  arrowOffset: Go("--popper-arrow-offset")
};
function $6(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var M6 = {
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
}, R6 = (e) => M6[e], M1 = {
  scroll: !0,
  resize: !0
};
function O6(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...M1, ...e }
  } : t = {
    enabled: e,
    options: M1
  }, t;
}
var I6 = {
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
}, D6 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    R1(e);
  },
  effect: ({ state: e }) => () => {
    R1(e);
  }
}, R1 = (e) => {
  e.elements.popper.style.setProperty(
    ht.transformOrigin.var,
    R6(e.placement)
  );
}, z6 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    F6(e);
  }
}, F6 = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = j6(e.placement);
  if ((t = e.elements) != null && t.arrow && n) {
    Object.assign(e.elements.arrow.style, {
      [n.property]: n.value,
      width: ht.arrowSize.varRef,
      height: ht.arrowSize.varRef,
      zIndex: -1
    });
    const r = {
      [ht.arrowSizeHalf.var]: `calc(${ht.arrowSize.varRef} / 2 - 1px)`,
      [ht.arrowOffset.var]: `calc(${ht.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in r)
      e.elements.arrow.style.setProperty(o, r[o]);
  }
}, j6 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: ht.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: ht.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: ht.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: ht.arrowOffset.varRef };
}, N6 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    O1(e);
  },
  effect: ({ state: e }) => () => {
    O1(e);
  }
}, O1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = $6(e.placement);
  n && t.style.setProperty("--popper-arrow-default-shadow", n), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: ht.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, L6 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, B6 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function V6(e, t = "ltr") {
  var n, r;
  const o = ((n = L6[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = B6[e]) != null ? r : o;
}
var At = "top", ln = "bottom", un = "right", $t = "left", pv = "auto", nl = [At, ln, un, $t], Yi = "start", Fs = "end", W6 = "clippingParents", YC = "viewport", Ca = "popper", U6 = "reference", I1 = /* @__PURE__ */ nl.reduce(function(e, t) {
  return e.concat([t + "-" + Yi, t + "-" + Fs]);
}, []), qC = /* @__PURE__ */ [].concat(nl, [pv]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Yi, t + "-" + Fs]);
}, []), H6 = "beforeRead", G6 = "read", K6 = "afterRead", Y6 = "beforeMain", q6 = "main", X6 = "afterMain", Q6 = "beforeWrite", Z6 = "write", J6 = "afterWrite", eV = [H6, G6, K6, Y6, q6, X6, Q6, Z6, J6];
function Ln(e) {
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
function Oo(e) {
  var t = Vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function on(e) {
  var t = Vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hv(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function tV(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !on(i) || !Ln(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function nV(e) {
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
      !on(o) || !Ln(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const rV = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: tV,
  effect: nV,
  requires: ["computeStyles"]
};
function Nn(e) {
  return e.split("-")[0];
}
var _o = Math.max, gc = Math.min, qi = Math.round;
function ph() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function XC() {
  return !/^((?!chrome|android).)*safari/i.test(ph());
}
function Xi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && on(e) && (o = e.offsetWidth > 0 && qi(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && qi(r.height) / e.offsetHeight || 1);
  var a = Oo(e) ? Vt(e) : window, s = a.visualViewport, l = !XC() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / o, c = (r.top + (l && s ? s.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
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
function mv(e) {
  var t = Xi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function QC(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && hv(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function fr(e) {
  return Vt(e).getComputedStyle(e);
}
function oV(e) {
  return ["table", "td", "th"].indexOf(Ln(e)) >= 0;
}
function Qr(e) {
  return ((Oo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function dd(e) {
  return Ln(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (hv(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Qr(e)
  );
}
function D1(e) {
  return !on(e) || // https://github.com/popperjs/popper-core/issues/837
  fr(e).position === "fixed" ? null : e.offsetParent;
}
function iV(e) {
  var t = /firefox/i.test(ph()), n = /Trident/i.test(ph());
  if (n && on(e)) {
    var r = fr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = dd(e);
  for (hv(o) && (o = o.host); on(o) && ["html", "body"].indexOf(Ln(o)) < 0; ) {
    var i = fr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function rl(e) {
  for (var t = Vt(e), n = D1(e); n && oV(n) && fr(n).position === "static"; )
    n = D1(n);
  return n && (Ln(n) === "html" || Ln(n) === "body" && fr(n).position === "static") ? t : n || iV(e) || t;
}
function vv(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function rs(e, t, n) {
  return _o(e, gc(t, n));
}
function aV(e, t, n) {
  var r = rs(e, t, n);
  return r > n ? n : r;
}
function ZC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function JC(e) {
  return Object.assign({}, ZC(), e);
}
function e_(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var sV = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, JC(typeof t != "number" ? t : e_(t, nl));
};
function lV(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = Nn(n.placement), l = vv(s), u = [$t, un].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = sV(o.padding, n), f = mv(i), p = l === "y" ? At : $t, y = l === "y" ? ln : un, g = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c], x = a[l] - n.rects.reference[l], m = rl(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = g / 2 - x / 2, S = d[p], C = h - f[c] - d[y], P = h / 2 - f[c] / 2 + b, _ = rs(S, P, C), A = l;
    n.modifiersData[r] = (t = {}, t[A] = _, t.centerOffset = _ - P, t);
  }
}
function uV(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || QC(t.elements.popper, o) && (t.elements.arrow = o));
}
const cV = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: lV,
  effect: uV,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Qi(e) {
  return e.split("-")[1];
}
var dV = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function fV(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: qi(n * o) / o || 0,
    y: qi(r * o) / o || 0
  };
}
function z1(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, y = a.y, g = y === void 0 ? 0 : y, x = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = x.x, g = x.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), b = $t, S = At, C = window;
  if (u) {
    var P = rl(n), _ = "clientHeight", A = "clientWidth";
    if (P === Vt(n) && (P = Qr(n), fr(P).position !== "static" && s === "absolute" && (_ = "scrollHeight", A = "scrollWidth")), P = P, o === At || (o === $t || o === un) && i === Fs) {
      S = ln;
      var M = d && P === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[_]
      );
      g -= M - r.height, g *= l ? 1 : -1;
    }
    if (o === $t || (o === At || o === ln) && i === Fs) {
      b = un;
      var R = d && P === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[A]
      );
      p -= R - r.width, p *= l ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: s
  }, u && dV), Q = c === !0 ? fV({
    x: p,
    y: g
  }, Vt(n)) : {
    x: p,
    y: g
  };
  if (p = Q.x, g = Q.y, l) {
    var G;
    return Object.assign({}, z, (G = {}, G[S] = h ? "0" : "", G[b] = m ? "0" : "", G.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", G));
  }
  return Object.assign({}, z, (t = {}, t[S] = h ? g + "px" : "", t[b] = m ? p + "px" : "", t.transform = "", t));
}
function pV(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: Nn(t.placement),
    variation: Qi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, z1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, z1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const hV = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: pV,
  data: {}
};
var Ul = {
  passive: !0
};
function mV(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, a = r.resize, s = a === void 0 ? !0 : a, l = Vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Ul);
  }), s && l.addEventListener("resize", n.update, Ul), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Ul);
    }), s && l.removeEventListener("resize", n.update, Ul);
  };
}
const vV = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: mV,
  data: {}
};
var gV = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Cu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return gV[t];
  });
}
var yV = {
  start: "end",
  end: "start"
};
function F1(e) {
  return e.replace(/start|end/g, function(t) {
    return yV[t];
  });
}
function gv(e) {
  var t = Vt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function yv(e) {
  return Xi(Qr(e)).left + gv(e).scrollLeft;
}
function bV(e, t) {
  var n = Vt(e), r = Qr(e), o = n.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = XC();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + yv(e),
    y: l
  };
}
function xV(e) {
  var t, n = Qr(e), r = gv(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = _o(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = _o(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -r.scrollLeft + yv(e), l = -r.scrollTop;
  return fr(o || n).direction === "rtl" && (s += _o(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function bv(e) {
  var t = fr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function t_(e) {
  return ["html", "body", "#document"].indexOf(Ln(e)) >= 0 ? e.ownerDocument.body : on(e) && bv(e) ? e : t_(dd(e));
}
function os(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = t_(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Vt(r), a = o ? [i].concat(i.visualViewport || [], bv(r) ? r : []) : r, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(os(dd(a)))
  );
}
function hh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function SV(e, t) {
  var n = Xi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function j1(e, t, n) {
  return t === YC ? hh(bV(e, n)) : Oo(t) ? SV(t, n) : hh(xV(Qr(e)));
}
function wV(e) {
  var t = os(dd(e)), n = ["absolute", "fixed"].indexOf(fr(e).position) >= 0, r = n && on(e) ? rl(e) : e;
  return Oo(r) ? t.filter(function(o) {
    return Oo(o) && QC(o, r) && Ln(o) !== "body";
  }) : [];
}
function kV(e, t, n, r) {
  var o = t === "clippingParents" ? wV(e) : [].concat(t), i = [].concat(o, [n]), a = i[0], s = i.reduce(function(l, u) {
    var c = j1(e, u, r);
    return l.top = _o(c.top, l.top), l.right = gc(c.right, l.right), l.bottom = gc(c.bottom, l.bottom), l.left = _o(c.left, l.left), l;
  }, j1(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function n_(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Nn(r) : null, i = r ? Qi(r) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case At:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ln:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case un:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case $t:
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
  var u = o ? vv(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Yi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Fs:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function js(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, a = i === void 0 ? e.strategy : i, s = n.boundary, l = s === void 0 ? W6 : s, u = n.rootBoundary, c = u === void 0 ? YC : u, d = n.elementContext, f = d === void 0 ? Ca : d, p = n.altBoundary, y = p === void 0 ? !1 : p, g = n.padding, x = g === void 0 ? 0 : g, m = JC(typeof x != "number" ? x : e_(x, nl)), h = f === Ca ? U6 : Ca, b = e.rects.popper, S = e.elements[y ? h : f], C = kV(Oo(S) ? S : S.contextElement || Qr(e.elements.popper), l, c, a), P = Xi(e.elements.reference), _ = n_({
    reference: P,
    element: b,
    strategy: "absolute",
    placement: o
  }), A = hh(Object.assign({}, b, _)), M = f === Ca ? A : P, R = {
    top: C.top - M.top + m.top,
    bottom: M.bottom - C.bottom + m.bottom,
    left: C.left - M.left + m.left,
    right: M.right - C.right + m.right
  }, z = e.modifiersData.offset;
  if (f === Ca && z) {
    var Q = z[o];
    Object.keys(R).forEach(function(G) {
      var K = [un, ln].indexOf(G) >= 0 ? 1 : -1, X = [At, ln].indexOf(G) >= 0 ? "y" : "x";
      R[G] += Q[X] * K;
    });
  }
  return R;
}
function CV(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? qC : l, c = Qi(r), d = c ? s ? I1 : I1.filter(function(y) {
    return Qi(y) === c;
  }) : nl, f = d.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(y, g) {
    return y[g] = js(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Nn(g)], y;
  }, {});
  return Object.keys(p).sort(function(y, g) {
    return p[y] - p[g];
  });
}
function _V(e) {
  if (Nn(e) === pv)
    return [];
  var t = Cu(e);
  return [F1(e), t, F1(t)];
}
function PV(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? !0 : p, g = n.allowedAutoPlacements, x = t.options.placement, m = Nn(x), h = m === x, b = l || (h || !y ? [Cu(x)] : _V(x)), S = [x].concat(b).reduce(function(Z, ve) {
      return Z.concat(Nn(ve) === pv ? CV(t, {
        placement: ve,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : ve);
    }, []), C = t.rects.reference, P = t.rects.popper, _ = /* @__PURE__ */ new Map(), A = !0, M = S[0], R = 0; R < S.length; R++) {
      var z = S[R], Q = Nn(z), G = Qi(z) === Yi, K = [At, ln].indexOf(Q) >= 0, X = K ? "width" : "height", q = js(t, {
        placement: z,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), O = K ? G ? un : $t : G ? ln : At;
      C[X] > P[X] && (O = Cu(O));
      var D = Cu(O), N = [];
      if (i && N.push(q[Q] <= 0), s && N.push(q[O] <= 0, q[D] <= 0), N.every(function(Z) {
        return Z;
      })) {
        M = z, A = !1;
        break;
      }
      _.set(z, N);
    }
    if (A)
      for (var V = y ? 3 : 1, L = function(ve) {
        var le = S.find(function(ye) {
          var be = _.get(ye);
          if (be)
            return be.slice(0, ve).every(function(Ie) {
              return Ie;
            });
        });
        if (le)
          return M = le, "break";
      }, ee = V; ee > 0; ee--) {
        var B = L(ee);
        if (B === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const TV = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: PV,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function N1(e, t, n) {
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
function L1(e) {
  return [At, un, ln, $t].some(function(t) {
    return e[t] >= 0;
  });
}
function EV(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = js(t, {
    elementContext: "reference"
  }), s = js(t, {
    altBoundary: !0
  }), l = N1(a, r), u = N1(s, o, i), c = L1(l), d = L1(u);
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
const AV = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: EV
};
function $V(e, t, n) {
  var r = Nn(e), o = [$t, At].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [$t, un].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function MV(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, a = qC.reduce(function(c, d) {
    return c[d] = $V(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const RV = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: MV
};
function OV(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = n_({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const IV = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: OV,
  data: {}
};
function DV(e) {
  return e === "x" ? "y" : "x";
}
function zV(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, p = f === void 0 ? !0 : f, y = n.tetherOffset, g = y === void 0 ? 0 : y, x = js(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = Nn(t.placement), h = Qi(t.placement), b = !h, S = vv(m), C = DV(S), P = t.modifiersData.popperOffsets, _ = t.rects.reference, A = t.rects.popper, M = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, R = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Q = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var G, K = S === "y" ? At : $t, X = S === "y" ? ln : un, q = S === "y" ? "height" : "width", O = P[S], D = O + x[K], N = O - x[X], V = p ? -A[q] / 2 : 0, L = h === Yi ? _[q] : A[q], ee = h === Yi ? -A[q] : -_[q], B = t.elements.arrow, Z = p && B ? mv(B) : {
        width: 0,
        height: 0
      }, ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ZC(), le = ve[K], ye = ve[X], be = rs(0, _[q], Z[q]), Ie = b ? _[q] / 2 - V - be - le - R.mainAxis : L - be - le - R.mainAxis, et = b ? -_[q] / 2 + V + be + ye + R.mainAxis : ee + be + ye + R.mainAxis, tt = t.elements.arrow && rl(t.elements.arrow), Un = tt ? S === "y" ? tt.clientTop || 0 : tt.clientLeft || 0 : 0, Hn = (G = z == null ? void 0 : z[S]) != null ? G : 0, oa = O + Ie - Hn - Un, se = O + et - Hn, lt = rs(p ? gc(D, oa) : D, O, p ? _o(N, se) : N);
      P[S] = lt, Q[S] = lt - O;
    }
    if (s) {
      var Ne, Ot = S === "x" ? At : $t, mr = S === "x" ? ln : un, ut = P[C], xn = C === "y" ? "height" : "width", vr = ut + x[Ot], Gt = ut - x[mr], Bo = [At, $t].indexOf(m) !== -1, ia = (Ne = z == null ? void 0 : z[C]) != null ? Ne : 0, sl = Bo ? vr : ut - _[xn] - A[xn] - ia + R.altAxis, ll = Bo ? ut + _[xn] + A[xn] - ia - R.altAxis : Gt, Zr = p && Bo ? aV(sl, ut, ll) : rs(p ? sl : vr, ut, p ? ll : Gt);
      P[C] = Zr, Q[C] = Zr - ut;
    }
    t.modifiersData[r] = Q;
  }
}
const FV = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: zV,
  requiresIfExists: ["offset"]
};
function jV(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function NV(e) {
  return e === Vt(e) || !on(e) ? gv(e) : jV(e);
}
function LV(e) {
  var t = e.getBoundingClientRect(), n = qi(t.width) / e.offsetWidth || 1, r = qi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function BV(e, t, n) {
  n === void 0 && (n = !1);
  var r = on(t), o = on(t) && LV(t), i = Qr(t), a = Xi(e, o, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ln(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  bv(i)) && (s = NV(t)), on(t) ? (l = Xi(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = yv(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function VV(e) {
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
function WV(e) {
  var t = VV(e);
  return eV.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function UV(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function HV(e) {
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
var B1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function V1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function GV(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? B1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, B1, i),
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
          reference: Oo(s) ? os(s) : s.contextElement ? os(s.contextElement) : [],
          popper: os(l)
        };
        var b = WV(HV([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = b.filter(function(S) {
          return S.enabled;
        }), y(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, b = m.popper;
          if (V1(h, b)) {
            c.rects = {
              reference: BV(h, rl(b), c.options.strategy === "fixed"),
              popper: mv(b)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(R) {
              return c.modifiersData[R.name] = Object.assign({}, R.data);
            });
            for (var S = 0; S < c.orderedModifiers.length; S++) {
              if (c.reset === !0) {
                c.reset = !1, S = -1;
                continue;
              }
              var C = c.orderedModifiers[S], P = C.fn, _ = C.options, A = _ === void 0 ? {} : _, M = C.name;
              typeof P == "function" && (c = P({
                state: c,
                options: A,
                name: M,
                instance: p
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: UV(function() {
        return new Promise(function(x) {
          p.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!V1(s, l))
      return p;
    p.setOptions(u).then(function(x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function y() {
      c.orderedModifiers.forEach(function(x) {
        var m = x.name, h = x.options, b = h === void 0 ? {} : h, S = x.effect;
        if (typeof S == "function") {
          var C = S({
            state: c,
            name: m,
            instance: p,
            options: b
          }), P = function() {
          };
          d.push(C || P);
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
var KV = [vV, IV, hV, rV, RV, TV, FV, cV, AV], YV = /* @__PURE__ */ GV({
  defaultModifiers: KV
});
function r_(e = {}) {
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
  } = e, y = v.useRef(null), g = v.useRef(null), x = v.useRef(null), m = V6(r, p), h = v.useRef(() => {
  }), b = v.useCallback(() => {
    var R;
    !t || !y.current || !g.current || ((R = h.current) == null || R.call(h), x.current = YV(y.current, g.current, {
      placement: m,
      modifiers: [
        N6,
        z6,
        D6,
        {
          ...I6,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...O6(a)
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
    }), x.current.forceUpdate(), h.current = x.current.destroy);
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
    var R;
    !y.current && !g.current && ((R = x.current) == null || R.destroy(), x.current = null);
  }, []);
  const S = v.useCallback(
    (R) => {
      y.current = R, b();
    },
    [b]
  ), C = v.useCallback(
    (R = {}, z = null) => ({
      ...R,
      ref: Qe(S, z)
    }),
    [S]
  ), P = v.useCallback(
    (R) => {
      g.current = R, b();
    },
    [b]
  ), _ = v.useCallback(
    (R = {}, z = null) => ({
      ...R,
      ref: Qe(P, z),
      style: {
        ...R.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, P, f]
  ), A = v.useCallback((R = {}, z = null) => {
    const { size: Q, shadowColor: G, bg: K, style: X, ...q } = R;
    return {
      ...q,
      ref: z,
      "data-popper-arrow": "",
      style: qV(R)
    };
  }, []), M = v.useCallback(
    (R = {}, z = null) => ({
      ...R,
      ref: z,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var R;
      (R = x.current) == null || R.update();
    },
    forceUpdate() {
      var R;
      (R = x.current) == null || R.forceUpdate();
    },
    transformOrigin: ht.transformOrigin.varRef,
    referenceRef: S,
    popperRef: P,
    getPopperProps: _,
    getArrowProps: A,
    getArrowInnerProps: M,
    getReferenceProps: C
  };
}
function qV(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), n && (i["--popper-arrow-shadow-color"] = n), r && (i["--popper-arrow-bg"] = r), i;
}
function o_(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, i = Nr(n), a = Nr(t), [s, l] = v.useState(e.defaultIsOpen || !1), u = r !== void 0 ? r : s, c = r !== void 0, d = v.useId(), f = o ?? `disclosure-${d}`, p = v.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), y = v.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), g = v.useCallback(() => {
    u ? p() : y();
  }, [u, y, p]);
  function x(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(b) {
        var S;
        (S = h.onClick) == null || S.call(h, b), g();
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
    onOpen: y,
    onClose: p,
    onToggle: g,
    isControlled: c,
    getButtonProps: x,
    getDisclosureProps: m
  };
}
function XV(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = Nr(n), a = v.useRef({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  v.useEffect(() => {
    if (!r)
      return;
    const s = (d) => {
      Df(d, t) && (a.isPointerDown = !0);
    }, l = (d) => {
      if (a.ignoreEmulatedMouseEvents) {
        a.ignoreEmulatedMouseEvents = !1;
        return;
      }
      a.isPointerDown && n && Df(d, t) && (a.isPointerDown = !1, o(d));
    }, u = (d) => {
      a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && Df(d, t) && (a.isPointerDown = !1, o(d));
    }, c = i_(t.current);
    return c.addEventListener("mousedown", s, !0), c.addEventListener("mouseup", l, !0), c.addEventListener("touchstart", s, !0), c.addEventListener("touchend", u, !0), () => {
      c.removeEventListener("mousedown", s, !0), c.removeEventListener("mouseup", l, !0), c.removeEventListener("touchstart", s, !0), c.removeEventListener("touchend", u, !0);
    };
  }, [n, t, o, a, r]);
}
function Df(e, t) {
  var n;
  const r = e.target;
  return r && !i_(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function i_(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function a_(e) {
  const { isOpen: t, ref: n } = e, [r, o] = v.useState(t), [i, a] = v.useState(!1);
  return v.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, r]), rv(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var l;
      const u = o6(n.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = n.current) == null || l.dispatchEvent(c);
    }
  };
}
function s_(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  QV,
  ZV,
  JV,
  e8
] = Hk(), [t8, ol] = Ke({
  strict: !1,
  name: "MenuContext"
});
function n8(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function l_(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function W1(e) {
  return l_(e).activeElement === e;
}
function r8(e = {}) {
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
    ...g
  } = e, x = v.useRef(null), m = v.useRef(null), h = JV(), b = v.useCallback(() => {
    requestAnimationFrame(() => {
      var B;
      (B = x.current) == null || B.focus({ preventScroll: !1 });
    });
  }, []), S = v.useCallback(() => {
    const B = setTimeout(() => {
      var Z;
      if (o)
        (Z = o.current) == null || Z.focus();
      else {
        const ve = h.firstEnabled();
        ve && G(ve.index);
      }
    });
    D.current.add(B);
  }, [h, o]), C = v.useCallback(() => {
    const B = setTimeout(() => {
      const Z = h.lastEnabled();
      Z && G(Z.index);
    });
    D.current.add(B);
  }, [h]), P = v.useCallback(() => {
    c == null || c(), i ? S() : b();
  }, [i, S, b, c]), { isOpen: _, onOpen: A, onClose: M, onToggle: R } = o_({
    isOpen: s,
    defaultIsOpen: l,
    onClose: u,
    onOpen: P
  });
  XV({
    enabled: _ && r,
    ref: x,
    handler: (B) => {
      var Z;
      (Z = m.current) != null && Z.contains(B.target) || M();
    }
  });
  const z = r_({
    ...g,
    enabled: _ || y,
    placement: d,
    direction: p
  }), [Q, G] = v.useState(-1);
  Ui(() => {
    _ || G(-1);
  }, [_]), KC(x, {
    focusRef: m,
    visible: _,
    shouldFocus: !0
  });
  const K = a_({ isOpen: _, ref: x }), [X, q] = n8(t, "menu-button", "menu-list"), O = v.useCallback(() => {
    A(), b();
  }, [A, b]), D = v.useRef(/* @__PURE__ */ new Set([]));
  v.useEffect(() => {
    const B = D.current;
    return () => {
      B.forEach((Z) => clearTimeout(Z)), B.clear();
    };
  }, []);
  const N = v.useCallback(() => {
    A(), S();
  }, [S, A]), V = v.useCallback(() => {
    A(), C();
  }, [A, C]), L = v.useCallback(() => {
    var B, Z;
    const ve = l_(x.current), le = (B = x.current) == null ? void 0 : B.contains(ve.activeElement);
    if (!(_ && !le))
      return;
    const be = (Z = h.item(Q)) == null ? void 0 : Z.node;
    be == null || be.focus({ preventScroll: !0 });
  }, [_, Q, h]), ee = v.useRef(null);
  return {
    openAndFocusMenu: O,
    openAndFocusFirstItem: N,
    openAndFocusLastItem: V,
    onTransitionEnd: L,
    unstable__animationState: K,
    descendants: h,
    popper: z,
    buttonId: X,
    menuId: q,
    forceUpdate: z.forceUpdate,
    orientation: "vertical",
    isOpen: _,
    onToggle: R,
    onOpen: A,
    onClose: M,
    menuRef: x,
    buttonRef: m,
    focusedIndex: Q,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: G,
    isLazy: a,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: ee
  };
}
function o8(e = {}, t = null) {
  const n = ol(), { onToggle: r, popper: o, openAndFocusFirstItem: i, openAndFocusLastItem: a } = n, s = v.useCallback(
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
    ref: Qe(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": Qt(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Ae(e.onClick, r),
    onKeyDown: Ae(e.onKeyDown, s)
  };
}
function mh(e) {
  var t;
  return l8(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function i8(e = {}, t = null) {
  const n = ol();
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
  } = n, f = ZV(), p = w6({
    preventDefault: (m) => m.key !== " " && mh(m.target)
  }), y = v.useCallback(
    (m) => {
      if (!m.currentTarget.contains(m.target))
        return;
      const h = m.key, S = {
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
      if (S) {
        m.preventDefault(), S(m);
        return;
      }
      const C = p((P) => {
        const _ = k6(
          f.values(),
          P,
          (A) => {
            var M, R;
            return (R = (M = A == null ? void 0 : A.node) == null ? void 0 : M.textContent) != null ? R : "";
          },
          f.item(r)
        );
        if (_) {
          const A = f.indexOf(_.node);
          o(A);
        }
      });
      mh(m.target) && C(m);
    },
    [
      f,
      r,
      p,
      s,
      o
    ]
  ), g = v.useRef(!1);
  a && (g.current = !0);
  const x = s_({
    wasSelected: g.current,
    enabled: u,
    mode: c,
    isSelected: d.present
  });
  return {
    ...e,
    ref: Qe(i, t),
    children: x ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Ae(e.onKeyDown, y)
  };
}
function a8(e = {}) {
  const { popper: t, isOpen: n } = ol();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function s8(e = {}, t = null) {
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
  } = e, f = ol(), {
    setFocusedIndex: p,
    focusedIndex: y,
    closeOnSelect: g,
    onClose: x,
    menuRef: m,
    isOpen: h,
    menuId: b,
    rafId: S
  } = f, C = v.useRef(null), P = `${b}-menuitem-${v.useId()}`, { index: _, register: A } = e8({
    disabled: s && !l
  }), M = v.useCallback(
    (O) => {
      n == null || n(O), !s && p(_);
    },
    [p, _, s, n]
  ), R = v.useCallback(
    (O) => {
      r == null || r(O), C.current && !W1(C.current) && M(O);
    },
    [M, r]
  ), z = v.useCallback(
    (O) => {
      o == null || o(O), !s && p(-1);
    },
    [p, s, o]
  ), Q = v.useCallback(
    (O) => {
      i == null || i(O), mh(O.currentTarget) && (u ?? g) && x();
    },
    [x, i, g, u]
  ), G = v.useCallback(
    (O) => {
      a == null || a(O), p(_);
    },
    [p, a, _]
  ), K = _ === y, X = s && !l;
  Ui(() => {
    if (h)
      return K && !X && C.current ? (S.current && cancelAnimationFrame(S.current), S.current = requestAnimationFrame(() => {
        var O;
        (O = C.current) == null || O.focus({ preventScroll: !0 }), S.current = null;
      })) : m.current && !W1(m.current) && m.current.focus({ preventScroll: !0 }), () => {
        S.current && cancelAnimationFrame(S.current);
      };
  }, [K, X, m, h]);
  const q = _6({
    onClick: Q,
    onFocus: G,
    onMouseEnter: M,
    onMouseMove: R,
    onMouseLeave: z,
    ref: Qe(A, C, t),
    isDisabled: s,
    isFocusable: l
  });
  return {
    ...d,
    ...q,
    type: c ?? q.type,
    id: P,
    role: "menuitem",
    tabIndex: K ? 0 : -1
  };
}
function l8(e) {
  var t;
  if (!u8(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function u8(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [c8, il] = Ke({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), u_ = (e) => {
  const { children: t } = e, n = zo("Menu", e), r = Bn(e), { direction: o } = qc(), { descendants: i, ...a } = r8({ ...r, direction: o }), s = v.useMemo(() => a, [a]), { isOpen: l, onClose: u, forceUpdate: c } = s;
  return /* @__PURE__ */ k.jsx(QV, { value: i, children: /* @__PURE__ */ k.jsx(t8, { value: s, children: /* @__PURE__ */ k.jsx(c8, { value: n, children: Rn(t, { isOpen: l, onClose: u, forceUpdate: c }) }) }) });
};
u_.displayName = "Menu";
var c_ = te(
  (e, t) => {
    const n = il();
    return /* @__PURE__ */ k.jsx(
      Y.span,
      {
        ref: t,
        ...e,
        __css: n.command,
        className: "chakra-menu__command"
      }
    );
  }
);
c_.displayName = "MenuCommand";
var d8 = te(
  (e, t) => {
    const { type: n, ...r } = e, o = il(), i = r.as || n ? n ?? void 0 : "button", a = v.useMemo(
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
    return /* @__PURE__ */ k.jsx(Y.button, { ref: t, type: i, ...r, __css: a });
  }
), d_ = (e) => {
  const { className: t, children: n, ...r } = e, o = il(), i = v.Children.only(n), a = v.isValidElement(i) ? v.cloneElement(i, {
    focusable: "false",
    "aria-hidden": !0,
    className: J("chakra-menu__icon", i.props.className)
  }) : null, s = J("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ k.jsx(Y.span, { className: s, ...r, __css: o.icon, children: a });
};
d_.displayName = "MenuIcon";
var f_ = te((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: i = "0.75rem",
    children: a,
    ...s
  } = e, l = s8(s, t), c = n || o ? /* @__PURE__ */ k.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: a }) : a;
  return /* @__PURE__ */ k.jsxs(
    d8,
    {
      ...l,
      className: J("chakra-menu__menuitem", l.className),
      children: [
        n && /* @__PURE__ */ k.jsx(d_, { fontSize: "0.8em", marginEnd: r, children: n }),
        c,
        o && /* @__PURE__ */ k.jsx(c_, { marginStart: i, children: o })
      ]
    }
  );
});
f_.displayName = "MenuItem";
var f8 = {
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
}, p8 = Y(Vn.div), p_ = te(function(t, n) {
  var r, o;
  const { rootProps: i, motionProps: a, ...s } = t, {
    isOpen: l,
    onTransitionEnd: u,
    unstable__animationState: c
  } = ol(), d = i8(s, n), f = a8(i), p = il();
  return /* @__PURE__ */ k.jsx(
    Y.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ k.jsx(
        p8,
        {
          variants: f8,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...a,
          className: J("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: u,
          onAnimationComplete: jS(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
p_.displayName = "MenuList";
var h8 = te((e, t) => {
  const n = il();
  return /* @__PURE__ */ k.jsx(
    Y.button,
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
}), h_ = te(
  (e, t) => {
    const { children: n, as: r, ...o } = e, i = o8(o, t), a = r || h8;
    return /* @__PURE__ */ k.jsx(
      a,
      {
        ...i,
        className: J("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ k.jsx(
          Y.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
h_.displayName = "MenuButton";
var m8 = {
  slideInBottom: {
    ...za,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...za,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...za,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...za,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...Qk,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, v8 = Y(Vn.section), g8 = (e) => m8[e || "none"], m_ = v.forwardRef(
  (e, t) => {
    const { preset: n, motionProps: r = g8(n), ...o } = e;
    return /* @__PURE__ */ k.jsx(v8, { ref: t, ...r, ...o });
  }
);
m_.displayName = "ModalTransition";
var y8 = Object.defineProperty, b8 = (e, t, n) => t in e ? y8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, x8 = (e, t, n) => (b8(e, typeof t != "symbol" ? t + "" : t, n), n), S8 = class {
  constructor() {
    x8(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, vh = new S8();
function v_(e, t) {
  const [n, r] = v.useState(0);
  return v.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = vh.add(o);
        r(i);
      }
      return () => {
        vh.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var w8 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ko = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Gl = {}, zf = 0, g_ = function(e) {
  return e && (e.host || g_(e.parentNode));
}, k8 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = g_(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, C8 = function(e, t, n, r) {
  var o = k8(t, Array.isArray(e) ? e : [e]);
  Gl[n] || (Gl[n] = /* @__PURE__ */ new WeakMap());
  var i = Gl[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(r), y = p !== null && p !== "false", g = (Ko.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        Ko.set(f, g), i.set(f, x), a.push(f), g === 1 && y && Hl.set(f, !0), x === 1 && f.setAttribute(n, "true"), y || f.setAttribute(r, "true");
      }
    });
  };
  return c(t), s.clear(), zf++, function() {
    a.forEach(function(d) {
      var f = Ko.get(d) - 1, p = i.get(d) - 1;
      Ko.set(d, f), i.set(d, p), f || (Hl.has(d) || d.removeAttribute(r), Hl.delete(d)), p || d.removeAttribute(n);
    }), zf--, zf || (Ko = /* @__PURE__ */ new WeakMap(), Ko = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Gl = {});
  };
}, _8 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || w8(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), C8(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function P8(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = v.useRef(null), c = v.useRef(null), [d, f, p] = E8(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  T8(u, t && a);
  const y = v_(u, t), g = v.useRef(null), x = v.useCallback((M) => {
    g.current = M.target;
  }, []), m = v.useCallback(
    (M) => {
      M.key === "Escape" && (M.stopPropagation(), i && (n == null || n()), l == null || l());
    },
    [i, n, l]
  ), [h, b] = v.useState(!1), [S, C] = v.useState(!1), P = v.useCallback(
    (M = {}, R = null) => ({
      role: "dialog",
      ...M,
      ref: Qe(R, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": S ? p : void 0,
      onClick: Ae(
        M.onClick,
        (z) => z.stopPropagation()
      )
    }),
    [p, S, d, f, h]
  ), _ = v.useCallback(
    (M) => {
      M.stopPropagation(), g.current === M.target && vh.isTopModal(u.current) && (o && (n == null || n()), s == null || s());
    },
    [n, o, s]
  ), A = v.useCallback(
    (M = {}, R = null) => ({
      ...M,
      ref: Qe(R, c),
      onClick: Ae(M.onClick, _),
      onKeyDown: Ae(M.onKeyDown, m),
      onMouseDown: Ae(M.onMouseDown, x)
    }),
    [m, x, _]
  );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: C,
    setHeaderMounted: b,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: P,
    getDialogContainerProps: A,
    index: y
  };
}
function T8(e, t) {
  const n = e.current;
  v.useEffect(() => {
    if (!(!e.current || !t))
      return _8(e.current);
  }, [t, e, n]);
}
function E8(e, ...t) {
  const n = v.useId(), r = e || n;
  return v.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [A8, ra] = Ke({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [$8, Gr] = Ke({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), xv = (e) => {
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
  } = t, g = zo("Modal", t), m = {
    ...P8(t),
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
  return /* @__PURE__ */ k.jsx($8, { value: m, children: /* @__PURE__ */ k.jsx(A8, { value: g, children: /* @__PURE__ */ k.jsx(No, { onExitComplete: y, children: m.isOpen && /* @__PURE__ */ k.jsx(Gs, { ...n, children: r }) }) }) });
};
xv.displayName = "Modal";
var _u = "right-scroll-bar-position", Pu = "width-before-scroll-bar", M8 = "with-scroll-bars-hidden", R8 = "--removed-body-scroll-bar-size", y_ = fC(), Ff = function() {
}, fd = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Ff,
    onWheelCapture: Ff,
    onTouchMoveCapture: Ff
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, y = e.inert, g = e.allowPinchZoom, x = e.as, m = x === void 0 ? "div" : x, h = e.gapMode, b = uC(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = f, C = lC([n, t]), P = $n($n({}, b), o);
  return v.createElement(
    v.Fragment,
    null,
    c && v.createElement(S, { sideCar: y_, removeScrollBar: u, shards: d, noIsolation: p, inert: y, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: h }),
    a ? v.cloneElement(v.Children.only(s), $n($n({}, P), { ref: C })) : v.createElement(m, $n({}, P, { className: l, ref: C }), s)
  );
});
fd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
fd.classNames = {
  fullWidth: Pu,
  zeroRight: _u
};
var U1, O8 = function() {
  if (U1)
    return U1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function I8() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = O8();
  return t && e.setAttribute("nonce", t), e;
}
function D8(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function z8(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var F8 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = I8()) && (D8(t, n), z8(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, j8 = function() {
  var e = F8();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, b_ = function() {
  var e = j8(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, N8 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, jf = function(e) {
  return parseInt(e || "", 10) || 0;
}, L8 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [jf(n), jf(r), jf(o)];
}, B8 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return N8;
  var t = L8(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, V8 = b_(), W8 = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(M8, ` {
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
  
  .`).concat(_u, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Pu, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(_u, " .").concat(_u, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Pu, " .").concat(Pu, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(R8, ": ").concat(s, `px;
  }
`);
}, U8 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, i = v.useMemo(function() {
    return B8(o);
  }, [o]);
  return v.createElement(V8, { styles: W8(i, !t, o, n ? "" : "!important") });
}, gh = !1;
if (typeof window < "u")
  try {
    var Kl = Object.defineProperty({}, "passive", {
      get: function() {
        return gh = !0, !0;
      }
    });
    window.addEventListener("test", Kl, Kl), window.removeEventListener("test", Kl, Kl);
  } catch {
    gh = !1;
  }
var Yo = gh ? { passive: !1 } : !1, H8 = function(e) {
  return e.tagName === "TEXTAREA";
}, x_ = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !H8(e) && n[t] === "visible")
  );
}, G8 = function(e) {
  return x_(e, "overflowY");
}, K8 = function(e) {
  return x_(e, "overflowX");
}, H1 = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = S_(e, r);
    if (o) {
      var i = w_(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Y8 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, q8 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, S_ = function(e, t) {
  return e === "v" ? G8(t) : K8(t);
}, w_ = function(e, t) {
  return e === "v" ? Y8(t) : q8(t);
}, X8 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Q8 = function(e, t, n, r, o) {
  var i = X8(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = w_(e, s), y = p[0], g = p[1], x = p[2], m = g - x - i * y;
    (y || m) && S_(e, s) && (d += m, f += y), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Yl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, G1 = function(e) {
  return [e.deltaX, e.deltaY];
}, K1 = function(e) {
  return e && "current" in e ? e.current : e;
}, Z8 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, J8 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, e9 = 0, qo = [];
function t9(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(e9++)[0], i = v.useState(b_)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = rB([e.lockRef.current], (e.shards || []).map(K1), !0).filter(Boolean);
      return g.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(g, x) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = Yl(g), h = n.current, b = "deltaX" in g ? g.deltaX : h[0] - m[0], S = "deltaY" in g ? g.deltaY : h[1] - m[1], C, P = g.target, _ = Math.abs(b) > Math.abs(S) ? "h" : "v";
    if ("touches" in g && _ === "h" && P.type === "range")
      return !1;
    var A = H1(_, P);
    if (!A)
      return !0;
    if (A ? C = _ : (C = _ === "v" ? "h" : "v", A = H1(_, P)), !A)
      return !1;
    if (!r.current && "changedTouches" in g && (b || S) && (r.current = C), !C)
      return !0;
    var M = r.current || C;
    return Q8(M, x, g, M === "h" ? b : S, !0);
  }, []), l = v.useCallback(function(g) {
    var x = g;
    if (!(!qo.length || qo[qo.length - 1] !== i)) {
      var m = "deltaY" in x ? G1(x) : Yl(x), h = t.current.filter(function(C) {
        return C.name === x.type && (C.target === x.target || x.target === C.shadowParent) && Z8(C.delta, m);
      })[0];
      if (h && h.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!h) {
        var b = (a.current.shards || []).map(K1).filter(Boolean).filter(function(C) {
          return C.contains(x.target);
        }), S = b.length > 0 ? s(x, b[0]) : !a.current.noIsolation;
        S && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(g, x, m, h) {
    var b = { name: g, delta: x, target: m, should: h, shadowParent: n9(m) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== b;
      });
    }, 1);
  }, []), c = v.useCallback(function(g) {
    n.current = Yl(g), r.current = void 0;
  }, []), d = v.useCallback(function(g) {
    u(g.type, G1(g), g.target, s(g, e.lockRef.current));
  }, []), f = v.useCallback(function(g) {
    u(g.type, Yl(g), g.target, s(g, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return qo.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Yo), document.addEventListener("touchmove", l, Yo), document.addEventListener("touchstart", c, Yo), function() {
      qo = qo.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, Yo), document.removeEventListener("touchmove", l, Yo), document.removeEventListener("touchstart", c, Yo);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    y ? v.createElement(i, { styles: J8(o) }) : null,
    p ? v.createElement(U8, { gapMode: e.gapMode }) : null
  );
}
function n9(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const r9 = oB(y_, t9);
var k_ = v.forwardRef(function(e, t) {
  return v.createElement(fd, $n({}, e, { ref: t, sideCar: r9 }));
});
k_.classNames = fd.classNames;
const o9 = k_;
function C_(e) {
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
  } = Gr(), [f, p] = Ck();
  v.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const y = v_(r, d);
  return /* @__PURE__ */ k.jsx(
    WC,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: r,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ k.jsx(
        o9,
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
var __ = te(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l } = Gr(), u = s(a, t), c = l(o), d = J("chakra-modal__content", n), f = ra(), p = {
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
    }, { motionPreset: g } = Gr();
    return /* @__PURE__ */ k.jsx(C_, { children: /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ...c,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: y,
        children: /* @__PURE__ */ k.jsx(
          m_,
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
__.displayName = "ModalContent";
var [i9, a9] = Ke(), s9 = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function l9(e, t) {
  var n, r;
  if (e)
    return (r = (n = s9[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function u9(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = qc(), l = (t = s.components) == null ? void 0 : t.Drawer, u = l9(o, s.direction);
  return /* @__PURE__ */ k.jsx(i9, { value: { placement: u }, children: /* @__PURE__ */ k.jsx(
    xv,
    {
      isOpen: n,
      onClose: r,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var c9 = Y(Zk), P_ = te(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = Gr(), c = s(a, t), d = l(i), f = J("chakra-modal__content", n), p = ra(), y = {
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
    }, { placement: x } = a9();
    return /* @__PURE__ */ k.jsx(C_, { children: /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ k.jsx(
          c9,
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
P_.displayName = "DrawerContent";
var Sv = te(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: i } = Gr();
    v.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = J("chakra-modal__header", n), l = {
      flex: 0,
      ...ra().header
    };
    return /* @__PURE__ */ k.jsx(
      Y.header,
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
Sv.displayName = "ModalHeader";
var d9 = Y(Vn.div), wv = te(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e, a = J("chakra-modal__overlay", n), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...ra().overlay
    }, { motionPreset: u } = Gr(), d = o || (u === "none" ? {} : Xk);
    return /* @__PURE__ */ k.jsx(
      d9,
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
wv.displayName = "ModalOverlay";
var kv = te((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: i } = Gr();
  v.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = J("chakra-modal__body", n), s = ra();
  return /* @__PURE__ */ k.jsx(
    Y.div,
    {
      ref: t,
      className: a,
      id: o,
      ...r,
      __css: s.body
    }
  );
});
kv.displayName = "ModalBody";
var Cv = te(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: i } = Gr(), a = J("chakra-modal__close-btn", r), s = ra();
    return /* @__PURE__ */ k.jsx(
      sd,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: Ae(n, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
Cv.displayName = "ModalCloseButton";
var [f9, Lo] = Ke({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [p9, al] = Ke({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), T_ = te(
  function(t, n) {
    const { getHeaderProps: r } = Lo(), o = al();
    return /* @__PURE__ */ k.jsx(
      Y.header,
      {
        ...r(t, n),
        className: J("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
T_.displayName = "PopoverHeader";
function _v(e) {
  const t = v.Children.only(e.children), { getTriggerProps: n } = Lo();
  return v.cloneElement(t, n(t.props, t.ref));
}
_v.displayName = "PopoverTrigger";
var Xo = {
  click: "click",
  hover: "hover"
};
function h9(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = Xo.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: y,
    ...g
  } = e, { isOpen: x, onClose: m, onOpen: h, onToggle: b } = o_(e), S = v.useRef(null), C = v.useRef(null), P = v.useRef(null), _ = v.useRef(!1), A = v.useRef(!1);
  x && (A.current = !0);
  const [M, R] = v.useState(!1), [z, Q] = v.useState(!1), G = v.useId(), K = o ?? G, [X, q, O, D] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((se) => `${se}-${K}`), {
    referenceRef: N,
    getArrowProps: V,
    getPopperProps: L,
    getArrowInnerProps: ee,
    forceUpdate: B
  } = r_({
    ...g,
    enabled: x || !!y
  }), Z = a_({ isOpen: x, ref: P });
  HL({
    enabled: x,
    ref: C
  }), KC(P, {
    focusRef: C,
    visible: x,
    shouldFocus: i && u === Xo.click
  }), E6(P, {
    focusRef: r,
    visible: x,
    shouldFocus: a && u === Xo.click
  });
  const ve = s_({
    wasSelected: A.current,
    enabled: f,
    mode: p,
    isSelected: Z.present
  }), le = v.useCallback(
    (se = {}, lt = null) => {
      const Ne = {
        ...se,
        style: {
          ...se.style,
          transformOrigin: ht.transformOrigin.varRef,
          [ht.arrowSize.var]: s ? `${s}px` : void 0,
          [ht.arrowShadowColor.var]: l
        },
        ref: Qe(P, lt),
        children: ve ? se.children : null,
        id: q,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: Ae(se.onKeyDown, (Ot) => {
          n && Ot.key === "Escape" && m();
        }),
        onBlur: Ae(se.onBlur, (Ot) => {
          const mr = Y1(Ot), ut = Nf(P.current, mr), xn = Nf(C.current, mr);
          x && t && (!ut && !xn) && m();
        }),
        "aria-labelledby": M ? O : void 0,
        "aria-describedby": z ? D : void 0
      };
      return u === Xo.hover && (Ne.role = "tooltip", Ne.onMouseEnter = Ae(se.onMouseEnter, () => {
        _.current = !0;
      }), Ne.onMouseLeave = Ae(
        se.onMouseLeave,
        (Ot) => {
          Ot.nativeEvent.relatedTarget !== null && (_.current = !1, setTimeout(() => m(), d));
        }
      )), Ne;
    },
    [
      ve,
      q,
      M,
      O,
      z,
      D,
      u,
      n,
      m,
      x,
      t,
      d,
      l,
      s
    ]
  ), ye = v.useCallback(
    (se = {}, lt = null) => L(
      {
        ...se,
        style: {
          visibility: x ? "visible" : "hidden",
          ...se.style
        }
      },
      lt
    ),
    [x, L]
  ), be = v.useCallback(
    (se, lt = null) => ({
      ...se,
      // If anchor is rendered, it is used as reference.
      ref: Qe(lt, S, N)
    }),
    [S, N]
  ), Ie = v.useRef(), et = v.useRef(), tt = v.useCallback(
    (se) => {
      S.current == null && N(se);
    },
    [N]
  ), Un = v.useCallback(
    (se = {}, lt = null) => {
      const Ne = {
        ...se,
        ref: Qe(C, lt, tt),
        id: X,
        "aria-haspopup": "dialog",
        "aria-expanded": x,
        "aria-controls": q
      };
      return u === Xo.click && (Ne.onClick = Ae(se.onClick, b)), u === Xo.hover && (Ne.onFocus = Ae(se.onFocus, () => {
        Ie.current === void 0 && h();
      }), Ne.onBlur = Ae(se.onBlur, (Ot) => {
        const mr = Y1(Ot), ut = !Nf(P.current, mr);
        x && t && ut && m();
      }), Ne.onKeyDown = Ae(se.onKeyDown, (Ot) => {
        Ot.key === "Escape" && m();
      }), Ne.onMouseEnter = Ae(se.onMouseEnter, () => {
        _.current = !0, Ie.current = window.setTimeout(() => h(), c);
      }), Ne.onMouseLeave = Ae(se.onMouseLeave, () => {
        _.current = !1, Ie.current && (clearTimeout(Ie.current), Ie.current = void 0), et.current = window.setTimeout(() => {
          _.current === !1 && m();
        }, d);
      })), Ne;
    },
    [
      X,
      x,
      q,
      u,
      tt,
      b,
      h,
      t,
      m,
      c,
      d
    ]
  );
  v.useEffect(() => () => {
    Ie.current && clearTimeout(Ie.current), et.current && clearTimeout(et.current);
  }, []);
  const Hn = v.useCallback(
    (se = {}, lt = null) => ({
      ...se,
      id: O,
      ref: Qe(lt, (Ne) => {
        R(!!Ne);
      })
    }),
    [O]
  ), oa = v.useCallback(
    (se = {}, lt = null) => ({
      ...se,
      id: D,
      ref: Qe(lt, (Ne) => {
        Q(!!Ne);
      })
    }),
    [D]
  );
  return {
    forceUpdate: B,
    isOpen: x,
    onAnimationComplete: Z.onComplete,
    onClose: m,
    getAnchorProps: be,
    getArrowProps: V,
    getArrowInnerProps: ee,
    getPopoverPositionerProps: ye,
    getPopoverProps: le,
    getTriggerProps: Un,
    getHeaderProps: Hn,
    getBodyProps: oa
  };
}
function Nf(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function Y1(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Pv(e) {
  const t = zo("Popover", e), { children: n, ...r } = Bn(e), o = qc(), i = h9({ ...r, direction: o.direction });
  return /* @__PURE__ */ k.jsx(f9, { value: i, children: /* @__PURE__ */ k.jsx(p9, { value: t, children: Rn(n, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
Pv.displayName = "Popover";
var Lf = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Tv(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = Lo(), c = al(), d = (t = n ?? r) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ k.jsx(
    Y.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ k.jsx(
        Y.div,
        {
          className: J("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Lf("colors", s),
            "--popper-arrow-bg": Lf("colors", d),
            "--popper-arrow-shadow": Lf("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
Tv.displayName = "PopoverArrow";
var Ev = te(
  function(t, n) {
    const { getBodyProps: r } = Lo(), o = al();
    return /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ...r(t, n),
        className: J("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
Ev.displayName = "PopoverBody";
var Av = te(
  function(t, n) {
    const { onClose: r } = Lo(), o = al();
    return /* @__PURE__ */ k.jsx(
      sd,
      {
        size: "sm",
        onClick: r,
        className: J("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: n,
        ...t
      }
    );
  }
);
Av.displayName = "PopoverCloseButton";
function m9(e) {
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
var v9 = {
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
}, g9 = Y(Vn.section), E_ = te(function(t, n) {
  const { variants: r = v9, ...o } = t, { isOpen: i } = Lo();
  return /* @__PURE__ */ k.jsx(
    g9,
    {
      ref: n,
      variants: m9(r),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
E_.displayName = "PopoverTransition";
var $v = te(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = Lo(), u = al(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ k.jsx(
      Y.div,
      {
        ...s(r),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ k.jsx(
          E_,
          {
            ...o,
            ...a(i, n),
            onAnimationComplete: jS(
              l,
              i.onAnimationComplete
            ),
            className: J("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
$v.displayName = "PopoverContent";
var y9 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, b9 = Object.defineProperty, x9 = Object.defineProperties, S9 = Object.getOwnPropertyDescriptors, yc = Object.getOwnPropertySymbols, A_ = Object.prototype.hasOwnProperty, $_ = Object.prototype.propertyIsEnumerable, q1 = (e, t, n) => t in e ? b9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, X1 = (e, t) => {
  for (var n in t || (t = {}))
    A_.call(t, n) && q1(e, n, t[n]);
  if (yc)
    for (var n of yc(t))
      $_.call(t, n) && q1(e, n, t[n]);
  return e;
}, w9 = (e, t) => x9(e, S9(t)), k9 = (e, t) => {
  var n = {};
  for (var r in e)
    A_.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && yc)
    for (var r of yc(e))
      t.indexOf(r) < 0 && $_.call(e, r) && (n[r] = e[r]);
  return n;
}, hr = (e, t, n) => {
  const r = v.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = k9(a, ["color", "size", "stroke", "children"]);
      return v.createElement(
        "svg",
        X1(w9(X1({
          ref: i
        }, y9), {
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
    color: ro.string,
    size: ro.oneOfType([ro.string, ro.number]),
    stroke: ro.oneOfType([ro.string, ro.number])
  }, r.displayName = `${t}`, r;
}, C9 = hr("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), _9 = hr("history", "IconHistory", [
  ["path", { d: "M12 8l0 4l2 2", key: "svg-0" }],
  ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]
]), P9 = hr("menu-2", "IconMenu2", [
  ["path", { d: "M4 6l16 0", key: "svg-0" }],
  ["path", { d: "M4 12l16 0", key: "svg-1" }],
  ["path", { d: "M4 18l16 0", key: "svg-2" }]
]), T9 = hr("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), Mv = hr("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), E9 = hr("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), M_ = hr("tag", "IconTag", [
  ["path", { d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",
      key: "svg-1"
    }
  ]
]), A9 = hr("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), $9 = hr(
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
let ql;
const M9 = new Uint8Array(16);
function R9() {
  if (!ql && (ql = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ql))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ql(M9);
}
const rt = [];
for (let e = 0; e < 256; ++e)
  rt.push((e + 256).toString(16).slice(1));
function O9(e, t = 0) {
  return rt[e[t + 0]] + rt[e[t + 1]] + rt[e[t + 2]] + rt[e[t + 3]] + "-" + rt[e[t + 4]] + rt[e[t + 5]] + "-" + rt[e[t + 6]] + rt[e[t + 7]] + "-" + rt[e[t + 8]] + rt[e[t + 9]] + "-" + rt[e[t + 10]] + rt[e[t + 11]] + rt[e[t + 12]] + rt[e[t + 13]] + rt[e[t + 14]] + rt[e[t + 15]];
}
const I9 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Q1 = {
  randomUUID: I9
};
function D9(e, t, n) {
  if (Q1.randomUUID && !t && !e)
    return Q1.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || R9)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return O9(r);
}
async function Rv(e, t) {
  const n = e + "/" + Date.now() + ".json";
  z9(n, t);
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
async function z9(e, t) {
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
async function F9(e) {
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
let Fe, kn = null;
async function j9() {
  const e = async () => {
    let n = await R_("workflows");
    n == null && (n = localStorage.getItem("workspace") ?? "{}"), Fe = JSON.parse(n ?? "{}");
  }, t = async () => {
    kn = await L9();
  };
  await Promise.all([e(), t()]);
}
function Z1(e, t) {
  if (Fe == null)
    return;
  const n = Fe[e];
  if (n == null) {
    console.error("updateFlow: workflow not found", e);
    return;
  }
  const r = {
    ...n,
    ...t,
    id: e
  }, o = JSON.stringify(n), i = JSON.stringify(r);
  o !== i && (Fe[e] = {
    ...Fe[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(Fe)), Rv("workflows", JSON.stringify(Fe)));
}
function J1(e, t) {
  if (Fe == null)
    throw new Error("workspace is not loaded");
  const n = D9();
  return Fe[n] = {
    id: n,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(Fe)), Rv("workflows", JSON.stringify(Fe)), Fe[n];
}
function eb() {
  if (Fe == null)
    throw new Error("workspace is not loaded");
  return Object.values(Fe).sort((e, t) => t.updateTime - e.updateTime);
}
function N9(e) {
  if (Fe == null)
    throw new Error("workspace is not loaded");
  delete Fe[e], localStorage.setItem("workspace", JSON.stringify(Fe)), Rv("workflows", JSON.stringify(Fe));
}
async function R_(e) {
  try {
    const t = await fetch(`/workspace/get_db?table=${e}`);
    return t.ok ? await t.json() : void 0;
  } catch (t) {
    console.error("Error fetching workspace:", t);
    return;
  }
}
async function L9() {
  let e = await R_("tags"), t = JSON.parse(e ?? "{}") ?? {};
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
      }), t[n].updateTime = Date.now(), t[n];
    },
    delete(n) {
      delete t[n];
    }
  };
}
const O_ = v.createContext({
  curFlowID: null
});
function B9({ workflow: e }) {
  const [t, n] = v.useState([]), [r, o] = v.useState("");
  return v.useEffect(() => {
    kn && n(kn.listAll() ?? []);
  }, []), kn == null ? null : /* @__PURE__ */ k.jsx(Pv, { children: ({}) => /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsx(_v, { children: /* @__PURE__ */ k.jsx(jn, { variant: "ghost", size: "sm", colorScheme: "teal", children: /* @__PURE__ */ k.jsx(M_, { color: "#718096" }) }) }),
    /* @__PURE__ */ k.jsxs($v, { children: [
      /* @__PURE__ */ k.jsx(Tv, {}),
      /* @__PURE__ */ k.jsx(Av, {}),
      /* @__PURE__ */ k.jsxs(T_, { children: [
        "Add Tags to ",
        /* @__PURE__ */ k.jsx("b", { children: e.name })
      ] }),
      /* @__PURE__ */ k.jsxs(Ev, { children: [
        /* @__PURE__ */ k.jsxs(Mn, { children: [
          /* @__PURE__ */ k.jsx(
            cd,
            {
              placeholder: "New tag name",
              size: "sm",
              value: r,
              onChange: (i) => {
                o(i.target.value);
              }
            }
          ),
          /* @__PURE__ */ k.jsx(
            jn,
            {
              iconSpacing: 1,
              leftIcon: /* @__PURE__ */ k.jsx(Mv, { size: 16 }),
              colorScheme: "teal",
              variant: "solid",
              size: "xs",
              px: 5,
              isDisabled: r.length === 0,
              onClick: () => {
                kn == null || kn.upsert(r), n((kn == null ? void 0 : kn.listAll()) ?? []), o("");
              },
              children: "New Tag"
            }
          )
        ] }),
        t.map((i) => /* @__PURE__ */ k.jsx(yo, { mb: 4, fontWeight: 600, children: i.name }))
      ] })
    ] })
  ] }) });
}
function V9(e) {
  let t = {
    "&": "",
    "<": "",
    ">": "",
    '"': "",
    "'": "",
    "`": "",
    "=": ""
  };
  return String(e).replace(/[&<>"'`=]/g, function(r) {
    return t[r];
  });
}
function W9() {
  const e = [];
  for (let t of Xl.graph._nodes)
    t.type == "T2IAdapterLoader" && (t.type = "ControlNetLoader"), t.type == "ConditioningAverage " && (t.type = "ConditioningAverage"), t.type == "SDV_img2vid_Conditioning" && (t.type = "SVD_img2vid_Conditioning"), t.type in LiteGraph.registered_node_types || (t.type = V9(t.type), e.push(t.type));
  return e;
}
function I_(e) {
  const t = new Date(e), n = String(t.getDate()).padStart(2, "0"), r = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${r}-${n}-${o} ${i}:${a}`;
}
function U9({ onclose: e }) {
  const [t, n] = v.useState([]), r = async () => {
    const o = await F9("workflows");
    if (console.log(o), o == null)
      return;
    const i = JSON.parse(o);
    n(i);
  };
  return v.useEffect(() => {
    r();
  }, []), /* @__PURE__ */ k.jsxs(xv, { onClose: e, size: "xl", isOpen: !0, children: [
    /* @__PURE__ */ k.jsx(wv, {}),
    /* @__PURE__ */ k.jsxs(__, { children: [
      /* @__PURE__ */ k.jsx(Sv, { children: "Backups" }),
      /* @__PURE__ */ k.jsx(Cv, {}),
      /* @__PURE__ */ k.jsx(kv, { children: /* @__PURE__ */ k.jsx(eC, { allowToggle: !0, children: t.map((o) => {
        const i = parseInt(o.fileName.split(".")[0]);
        return /* @__PURE__ */ k.jsxs(Yk, { children: [
          /* @__PURE__ */ k.jsx("h2", { children: /* @__PURE__ */ k.jsxs(Gk, { children: [
            /* @__PURE__ */ k.jsxs(Ki, { as: "span", flex: "1", textAlign: "left", children: [
              "Saved on ",
              I_(i)
            ] }),
            /* @__PURE__ */ k.jsx(Kk, {})
          ] }) }),
          /* @__PURE__ */ k.jsx(Jk, { pb: 4, children: Object.values(o.jsonStr).map((a) => /* @__PURE__ */ k.jsx(Ki, { children: a.name })) })
        ] });
      }) }) })
    ] })
  ] });
}
function H9({}) {
  const { isOpen: e, onOpen: t, onClose: n } = g6();
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    /* @__PURE__ */ k.jsxs(u_, { children: [
      /* @__PURE__ */ k.jsx(
        h_,
        {
          as: tC,
          "aria-label": "Options",
          icon: /* @__PURE__ */ k.jsx(P9, {}),
          variant: "outline"
        }
      ),
      /* @__PURE__ */ k.jsx(p_, { children: /* @__PURE__ */ k.jsx(f_, { onClick: t, icon: /* @__PURE__ */ k.jsx(_9, { size: 16 }), children: "Backups" }) })
    ] }),
    e && /* @__PURE__ */ k.jsx(U9, { onclose: n })
  ] });
}
function G9({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: n
}) {
  const [r, o] = v.useState([]), { colorMode: i } = Ks(), { curFlowID: a } = v.useContext(O_);
  v.useEffect(() => {
    const l = eb();
    o(l);
  }, []);
  const s = (l) => {
    N9(l);
    const u = eb();
    o(u);
  };
  return /* @__PURE__ */ k.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ k.jsxs(
    u9,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ k.jsx(wv, {}),
        /* @__PURE__ */ k.jsxs(P_, { children: [
          /* @__PURE__ */ k.jsx(Cv, {}),
          /* @__PURE__ */ k.jsx(Sv, { children: /* @__PURE__ */ k.jsxs(Mn, { alignItems: "center", children: [
            /* @__PURE__ */ k.jsx(yo, { mr: 6, children: "Recent Workflows" }),
            /* @__PURE__ */ k.jsx(
              jn,
              {
                leftIcon: /* @__PURE__ */ k.jsx(Mv, {}),
                variant: "outline",
                size: "sm",
                colorScheme: "teal",
                onClick: n,
                children: "New"
              }
            ),
            /* @__PURE__ */ k.jsx(H9, {})
          ] }) }),
          /* @__PURE__ */ k.jsxs(kv, { children: [
            /* @__PURE__ */ k.jsx(Mn, { spacing: 4, mb: 6, children: /* @__PURE__ */ k.jsx(
              jn,
              {
                leftIcon: /* @__PURE__ */ k.jsx(M_, {}),
                colorScheme: "gray",
                variant: "solid",
                size: "sm",
                px: 3,
                borderRadius: 16,
                children: "New Tag"
              }
            ) }),
            r.map((l) => {
              const u = l.id === a;
              return /* @__PURE__ */ k.jsxs(Mn, { w: "100%", justify: "space-between", children: [
                /* @__PURE__ */ k.jsxs(
                  Ki,
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
                      /* @__PURE__ */ k.jsx(yo, { fontWeight: "500", children: l.name ?? "untitled" }),
                      /* @__PURE__ */ k.jsxs(yo, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                        "Updated: ",
                        I_(l.updateTime)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ k.jsx(B9, { workflow: l }),
                /* @__PURE__ */ k.jsx(Pv, { children: ({ isOpen: c, onClose: d }) => /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
                  /* @__PURE__ */ k.jsx(_v, { children: /* @__PURE__ */ k.jsx(A9, { color: "#F56565", cursor: "pointer" }) }),
                  /* @__PURE__ */ k.jsxs($v, { children: [
                    /* @__PURE__ */ k.jsx(Tv, {}),
                    /* @__PURE__ */ k.jsx(Av, {}),
                    /* @__PURE__ */ k.jsxs(Ev, { children: [
                      /* @__PURE__ */ k.jsx(yo, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                      /* @__PURE__ */ k.jsx(
                        jn,
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
const K9 = {
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
function Y9() {
  const [e, t] = v.useState([]), n = v.useRef({}), [r, o] = v.useState(null), [i, a] = v.useState("root"), [s, l] = v.useState(!0), [u, c] = v.useState(null), d = v.useRef(null), { colorMode: f, toggleColorMode: p } = Ks(), y = (S) => {
    d.current = S, c(S), setTimeout(() => {
      const C = W9();
      t(C);
    }, 1e3);
  }, g = async () => {
    var P;
    const S = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(_) {
      },
      async addCustomNodeDefs(_) {
        n.current = _;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Xl.registerExtension(S);
    try {
      await j9();
    } catch (_) {
      console.error("error loading db", _);
    }
    l(!1);
    const C = localStorage.getItem("curFlowID");
    if (C)
      y(C), Fe && o(((P = Fe[C]) == null ? void 0 : P.name) ?? "");
    else {
      const _ = localStorage.getItem("workflow"), A = J1(_ ?? "");
      y(A.id), o(A.name ?? "");
    }
  };
  v.useEffect(() => {
    g(), setInterval(() => {
      if (d.current != null) {
        const S = localStorage.getItem("workflow");
        localStorage.setItem("curFlowID", d.current), S != null && Z1(d.current, {
          json: S
        });
      }
    }, 1e3);
  }, []);
  const x = (S) => {
    d.current != null && Z1(d.current, {
      name: S
    });
  }, m = v.useCallback(
    AE(x, 700),
    []
  ), h = (S) => {
    if (Fe == null) {
      alert("Error: Workspace not loaded!");
      return;
    }
    y(S);
    const C = Fe[S];
    if (C == null) {
      alert("Error: Workflow not found! id: " + S);
      return;
    }
    o(C.name), Xl.loadGraphData(JSON.parse(C.json)), a("root");
  }, b = () => {
    const S = K9, C = J1(JSON.stringify(S));
    y(C.id), o(C.name), Xl.loadGraphData(S);
  };
  return s ? null : /* @__PURE__ */ k.jsx(O_.Provider, { value: { curFlowID: u }, children: /* @__PURE__ */ k.jsxs(
    Ki,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ k.jsxs(
          Mn,
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
              /* @__PURE__ */ k.jsxs(Mn, { children: [
                /* @__PURE__ */ k.jsx(
                  jn,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => a("recentFlows"),
                    children: /* @__PURE__ */ k.jsxs(Mn, { gap: 1, children: [
                      /* @__PURE__ */ k.jsx(C9, { size: 21 }),
                      /* @__PURE__ */ k.jsx($9, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ k.jsx(
                  jn,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => b(),
                    children: /* @__PURE__ */ k.jsxs(Mn, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ k.jsx(Mv, { size: 16, color: "white" }),
                      /* @__PURE__ */ k.jsx(yo, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ k.jsx(
                  cd,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: r ?? "",
                    onChange: (S) => {
                      o(S.target.value), m(S.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsx(Mn, { children: /* @__PURE__ */ k.jsx(jn, { onClick: p, variant: "link", children: f === "light" ? /* @__PURE__ */ k.jsx(T9, { size: 20 }) : /* @__PURE__ */ k.jsx(E9, { size: 20 }) }) })
            ]
          }
        ),
        i === "recentFlows" && /* @__PURE__ */ k.jsx(
          G9,
          {
            onclose: () => a("root"),
            loadWorkflowID: h,
            onClickNewFlow: () => {
              b(), a("root");
            }
          }
        )
      ]
    }
  ) });
}
const D_ = document.createElement("div");
document.body.append(D_);
const q9 = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, X9 = Oz({ config: q9 });
Bf.createRoot(D_).render(
  /* @__PURE__ */ k.jsx(Po.StrictMode, { children: /* @__PURE__ */ k.jsxs(XN, { children: [
    /* @__PURE__ */ k.jsx(UA, { initialColorMode: X9.config.initialColorMode }),
    /* @__PURE__ */ k.jsx(Y9, {})
  ] }) })
);
