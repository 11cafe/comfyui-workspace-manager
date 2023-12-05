import { app as Nl } from "/scripts/app.js";
function fP(e, t) {
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
var kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var G1 = { exports: {} }, cc = {}, K1 = { exports: {} }, te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms = Symbol.for("react.element"), pP = Symbol.for("react.portal"), hP = Symbol.for("react.fragment"), mP = Symbol.for("react.strict_mode"), vP = Symbol.for("react.profiler"), gP = Symbol.for("react.provider"), yP = Symbol.for("react.context"), bP = Symbol.for("react.forward_ref"), xP = Symbol.for("react.suspense"), SP = Symbol.for("react.memo"), wP = Symbol.for("react.lazy"), jv = Symbol.iterator;
function kP(e) {
  return e === null || typeof e != "object" ? null : (e = jv && e[jv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, q1 = Object.assign, X1 = {};
function Hi(e, t, r) {
  this.props = e, this.context = t, this.refs = X1, this.updater = r || Y1;
}
Hi.prototype.isReactComponent = {};
Hi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Q1() {
}
Q1.prototype = Hi.prototype;
function fh(e, t, r) {
  this.props = e, this.context = t, this.refs = X1, this.updater = r || Y1;
}
var ph = fh.prototype = new Q1();
ph.constructor = fh;
q1(ph, Hi.prototype);
ph.isPureReactComponent = !0;
var Nv = Array.isArray, Z1 = Object.prototype.hasOwnProperty, hh = { current: null }, J1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function eb(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      Z1.call(t, n) && !J1.hasOwnProperty(n) && (o[n] = t[n]);
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
  return { $$typeof: Ms, type: e, key: i, ref: a, props: o, _owner: hh.current };
}
function CP(e, t) {
  return { $$typeof: Ms, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ms;
}
function _P(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var Bv = /\/+/g;
function vd(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? _P("" + e.key) : t.toString(36);
}
function Bl(e, t, r, n, o) {
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
          case pP:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + vd(a, 0) : n, Nv(o) ? (r = "", e != null && (r = e.replace(Bv, "$&/") + "/"), Bl(o, t, r, "", function(u) {
      return u;
    })) : o != null && (mh(o) && (o = CP(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Bv, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Nv(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + vd(i, s);
      a += Bl(i, t, r, l, o);
    }
  else if (l = kP(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + vd(i, s++), a += Bl(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function ol(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return Bl(e, n, "", "", function(i) {
    return t.call(r, i, o++);
  }), n;
}
function PP(e) {
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
var wt = { current: null }, Vl = { transition: null }, TP = { ReactCurrentDispatcher: wt, ReactCurrentBatchConfig: Vl, ReactCurrentOwner: hh };
te.Children = { map: ol, forEach: function(e, t, r) {
  ol(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return ol(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ol(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mh(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
te.Component = Hi;
te.Fragment = hP;
te.Profiler = vP;
te.PureComponent = fh;
te.StrictMode = mP;
te.Suspense = xP;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TP;
te.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = q1({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = hh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      Z1.call(t, l) && !J1.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return e = { $$typeof: yP, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: gP, _context: e }, e.Consumer = e;
};
te.createElement = eb;
te.createFactory = function(e) {
  var t = eb.bind(null, e);
  return t.type = e, t;
};
te.createRef = function() {
  return { current: null };
};
te.forwardRef = function(e) {
  return { $$typeof: bP, render: e };
};
te.isValidElement = mh;
te.lazy = function(e) {
  return { $$typeof: wP, _payload: { _status: -1, _result: e }, _init: PP };
};
te.memo = function(e, t) {
  return { $$typeof: SP, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function(e) {
  var t = Vl.transition;
  Vl.transition = {};
  try {
    e();
  } finally {
    Vl.transition = t;
  }
};
te.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
te.useCallback = function(e, t) {
  return wt.current.useCallback(e, t);
};
te.useContext = function(e) {
  return wt.current.useContext(e);
};
te.useDebugValue = function() {
};
te.useDeferredValue = function(e) {
  return wt.current.useDeferredValue(e);
};
te.useEffect = function(e, t) {
  return wt.current.useEffect(e, t);
};
te.useId = function() {
  return wt.current.useId();
};
te.useImperativeHandle = function(e, t, r) {
  return wt.current.useImperativeHandle(e, t, r);
};
te.useInsertionEffect = function(e, t) {
  return wt.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function(e, t) {
  return wt.current.useLayoutEffect(e, t);
};
te.useMemo = function(e, t) {
  return wt.current.useMemo(e, t);
};
te.useReducer = function(e, t, r) {
  return wt.current.useReducer(e, t, r);
};
te.useRef = function(e) {
  return wt.current.useRef(e);
};
te.useState = function(e) {
  return wt.current.useState(e);
};
te.useSyncExternalStore = function(e, t, r) {
  return wt.current.useSyncExternalStore(e, t, r);
};
te.useTransition = function() {
  return wt.current.useTransition();
};
te.version = "18.2.0";
K1.exports = te;
var b = K1.exports;
const xo = /* @__PURE__ */ Rs(b), Vv = /* @__PURE__ */ fP({
  __proto__: null,
  default: xo
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
var EP = b, $P = Symbol.for("react.element"), AP = Symbol.for("react.fragment"), RP = Object.prototype.hasOwnProperty, MP = EP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, OP = { key: !0, ref: !0, __self: !0, __source: !0 };
function tb(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    RP.call(t, n) && !OP.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: $P, type: e, key: i, ref: a, props: o, _owner: MP.current };
}
cc.Fragment = AP;
cc.jsx = tb;
cc.jsxs = tb;
G1.exports = cc;
var k = G1.exports, Mf = {}, rb = { exports: {} }, Wt = {}, nb = { exports: {} }, ob = {};
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
  function t(I, j) {
    var B = I.length;
    I.push(j);
    e:
      for (; 0 < B; ) {
        var N = B - 1 >>> 1, X = I[N];
        if (0 < o(X, j))
          I[N] = j, I[B] = X, B = N;
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
    var j = I[0], B = I.pop();
    if (B !== j) {
      I[0] = B;
      e:
        for (var N = 0, X = I.length, H = X >>> 1; N < H; ) {
          var Q = 2 * (N + 1) - 1, Pe = I[Q], se = Q + 1, be = I[se];
          if (0 > o(Pe, B))
            se < X && 0 > o(be, Pe) ? (I[N] = be, I[se] = B, N = se) : (I[N] = Pe, I[Q] = B, N = Q);
          else if (se < X && 0 > o(be, B))
            I[N] = be, I[se] = B, N = se;
          else
            break e;
        }
    }
    return j;
  }
  function o(I, j) {
    var B = I.sortIndex - j.sortIndex;
    return B !== 0 ? B : I.id - j.id;
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
    for (var j = r(u); j !== null; ) {
      if (j.callback === null)
        n(u);
      else if (j.startTime <= I)
        n(u), j.sortIndex = j.expirationTime, t(l, j);
      else
        break;
      j = r(u);
    }
  }
  function w(I) {
    if (g = !1, y(I), !v)
      if (r(l) !== null)
        v = !0, Y(C);
      else {
        var j = r(u);
        j !== null && ee(w, j.startTime - I);
      }
  }
  function C(I, j) {
    v = !1, g && (g = !1, m($), $ = -1), p = !0;
    var B = f;
    try {
      for (y(j), d = r(l); d !== null && (!(d.expirationTime > j) || I && !L()); ) {
        var N = d.callback;
        if (typeof N == "function") {
          d.callback = null, f = d.priorityLevel;
          var X = N(d.expirationTime <= j);
          j = e.unstable_now(), typeof X == "function" ? d.callback = X : d === r(l) && n(l), y(j);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var H = !0;
      else {
        var Q = r(u);
        Q !== null && ee(w, Q.startTime - j), H = !1;
      }
      return H;
    } finally {
      d = null, f = B, p = !1;
    }
  }
  var E = !1, _ = null, $ = -1, R = 5, M = -1;
  function L() {
    return !(e.unstable_now() - M < R);
  }
  function q() {
    if (_ !== null) {
      var I = e.unstable_now();
      M = I;
      var j = !0;
      try {
        j = _(!0, I);
      } finally {
        j ? G() : (E = !1, _ = null);
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
    var K = new MessageChannel(), J = K.port2;
    K.port1.onmessage = q, G = function() {
      J.postMessage(null);
    };
  } else
    G = function() {
      x(q, 0);
    };
  function Y(I) {
    _ = I, E || (E = !0, G());
  }
  function ee(I, j) {
    $ = x(function() {
      I(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    v || p || (v = !0, Y(C));
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
        var j = 3;
        break;
      default:
        j = f;
    }
    var B = f;
    f = j;
    try {
      return I();
    } finally {
      f = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(I, j) {
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
    var B = f;
    f = I;
    try {
      return j();
    } finally {
      f = B;
    }
  }, e.unstable_scheduleCallback = function(I, j, B) {
    var N = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? N + B : N) : B = N, I) {
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
    return X = B + X, I = { id: c++, callback: j, priorityLevel: I, startTime: B, expirationTime: X, sortIndex: -1 }, B > N ? (I.sortIndex = B, t(u, I), r(l) === null && I === r(u) && (g ? (m($), $ = -1) : g = !0, ee(w, B - N))) : (I.sortIndex = X, t(l, I), v || p || (v = !0, Y(C))), I;
  }, e.unstable_shouldYield = L, e.unstable_wrapCallback = function(I) {
    var j = f;
    return function() {
      var B = f;
      f = j;
      try {
        return I.apply(this, arguments);
      } finally {
        f = B;
      }
    };
  };
})(ob);
nb.exports = ob;
var IP = nb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ib = b, Nt = IP;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ab = /* @__PURE__ */ new Set(), Qa = {};
function $o(e, t) {
  $i(e, t), $i(e + "Capture", t);
}
function $i(e, t) {
  for (Qa[e] = t, e = 0; e < t.length; e++)
    ab.add(t[e]);
}
var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Of = Object.prototype.hasOwnProperty, zP = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Wv = {}, Uv = {};
function DP(e) {
  return Of.call(Uv, e) ? !0 : Of.call(Wv, e) ? !1 : zP.test(e) ? Uv[e] = !0 : (Wv[e] = !0, !1);
}
function FP(e, t, r, n) {
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
function LP(e, t, r, n) {
  if (t === null || typeof t > "u" || FP(e, t, r, n))
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
function kt(e, t, r, n, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  lt[e] = new kt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  lt[t] = new kt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  lt[e] = new kt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  lt[e] = new kt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  lt[e] = new kt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  lt[e] = new kt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  lt[e] = new kt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  lt[e] = new kt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  lt[e] = new kt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vh = /[\-:]([a-z])/g;
function gh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    vh,
    gh
  );
  lt[t] = new kt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(vh, gh);
  lt[t] = new kt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(vh, gh);
  lt[t] = new kt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  lt[e] = new kt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
lt.xlinkHref = new kt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  lt[e] = new kt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yh(e, t, r, n) {
  var o = lt.hasOwnProperty(t) ? lt[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (LP(t, r, o, n) && (r = null), n || o === null ? DP(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var un = ib.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, il = Symbol.for("react.element"), Go = Symbol.for("react.portal"), Ko = Symbol.for("react.fragment"), bh = Symbol.for("react.strict_mode"), If = Symbol.for("react.profiler"), sb = Symbol.for("react.provider"), lb = Symbol.for("react.context"), xh = Symbol.for("react.forward_ref"), zf = Symbol.for("react.suspense"), Df = Symbol.for("react.suspense_list"), Sh = Symbol.for("react.memo"), gn = Symbol.for("react.lazy"), ub = Symbol.for("react.offscreen"), Hv = Symbol.iterator;
function ra(e) {
  return e === null || typeof e != "object" ? null : (e = Hv && e[Hv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Fe = Object.assign, gd;
function ya(e) {
  if (gd === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      gd = t && t[1] || "";
    }
  return `
` + gd + e;
}
var yd = !1;
function bd(e, t) {
  if (!e || yd)
    return "";
  yd = !0;
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
    yd = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? ya(e) : "";
}
function jP(e) {
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
      return e = bd(e.type, !1), e;
    case 11:
      return e = bd(e.type.render, !1), e;
    case 1:
      return e = bd(e.type, !0), e;
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
    case Ko:
      return "Fragment";
    case Go:
      return "Portal";
    case If:
      return "Profiler";
    case bh:
      return "StrictMode";
    case zf:
      return "Suspense";
    case Df:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lb:
        return (e.displayName || "Context") + ".Consumer";
      case sb:
        return (e._context.displayName || "Context") + ".Provider";
      case xh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Sh:
        return t = e.displayName || null, t !== null ? t : Ff(e.type) || "Memo";
      case gn:
        t = e._payload, e = e._init;
        try {
          return Ff(e(t));
        } catch {
        }
    }
  return null;
}
function NP(e) {
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
      return t === bh ? "StrictMode" : "Mode";
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
function Ln(e) {
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
function cb(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function BP(e) {
  var t = cb(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function al(e) {
  e._valueTracker || (e._valueTracker = BP(e));
}
function db(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = cb(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function gu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lf(e, t) {
  var r = t.checked;
  return Fe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Gv(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = Ln(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function fb(e, t) {
  t = t.checked, t != null && yh(e, "checked", t, !1);
}
function jf(e, t) {
  fb(e, t);
  var r = Ln(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Nf(e, t.type, r) : t.hasOwnProperty("defaultValue") && Nf(e, t.type, Ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Kv(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function Nf(e, t, r) {
  (t !== "number" || gu(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var ba = Array.isArray;
function mi(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Ln(r), t = null, o = 0; o < e.length; o++) {
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
  return Fe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yv(e, t) {
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
  e._wrapperState = { initialValue: Ln(r) };
}
function pb(e, t) {
  var r = Ln(t.value), n = Ln(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function qv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? hb(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var sl, mb = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (sl = sl || document.createElement("div"), sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = sl.firstChild; e.firstChild; )
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
}, VP = ["Webkit", "ms", "Moz", "O"];
Object.keys($a).forEach(function(e) {
  VP.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), $a[t] = $a[e];
  });
});
function vb(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || $a.hasOwnProperty(e) && $a[e] ? ("" + t).trim() : t + "px";
}
function gb(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = vb(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var WP = Fe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Wf(e, t) {
  if (t) {
    if (WP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Uf(e, t) {
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
var Hf = null;
function wh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Gf = null, vi = null, gi = null;
function Xv(e) {
  if (e = zs(e)) {
    if (typeof Gf != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = mc(t), Gf(e.stateNode, e.type, t));
  }
}
function yb(e) {
  vi ? gi ? gi.push(e) : gi = [e] : vi = e;
}
function bb() {
  if (vi) {
    var e = vi, t = gi;
    if (gi = vi = null, Xv(e), t)
      for (e = 0; e < t.length; e++)
        Xv(t[e]);
  }
}
function xb(e, t) {
  return e(t);
}
function Sb() {
}
var xd = !1;
function wb(e, t, r) {
  if (xd)
    return e(t, r);
  xd = !0;
  try {
    return xb(e, t, r);
  } finally {
    xd = !1, (vi !== null || gi !== null) && (Sb(), bb());
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
var Kf = !1;
if (tn)
  try {
    var na = {};
    Object.defineProperty(na, "passive", { get: function() {
      Kf = !0;
    } }), window.addEventListener("test", na, na), window.removeEventListener("test", na, na);
  } catch {
    Kf = !1;
  }
function UP(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Aa = !1, yu = null, bu = !1, Yf = null, HP = { onError: function(e) {
  Aa = !0, yu = e;
} };
function GP(e, t, r, n, o, i, a, s, l) {
  Aa = !1, yu = null, UP.apply(HP, arguments);
}
function KP(e, t, r, n, o, i, a, s, l) {
  if (GP.apply(this, arguments), Aa) {
    if (Aa) {
      var u = yu;
      Aa = !1, yu = null;
    } else
      throw Error(O(198));
    bu || (bu = !0, Yf = u);
  }
}
function Ao(e) {
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
function kb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Qv(e) {
  if (Ao(e) !== e)
    throw Error(O(188));
}
function YP(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ao(e), t === null)
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
          return Qv(o), e;
        if (i === n)
          return Qv(o), t;
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
function Cb(e) {
  return e = YP(e), e !== null ? _b(e) : null;
}
function _b(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = _b(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Pb = Nt.unstable_scheduleCallback, Zv = Nt.unstable_cancelCallback, qP = Nt.unstable_shouldYield, XP = Nt.unstable_requestPaint, Be = Nt.unstable_now, QP = Nt.unstable_getCurrentPriorityLevel, kh = Nt.unstable_ImmediatePriority, Tb = Nt.unstable_UserBlockingPriority, xu = Nt.unstable_NormalPriority, ZP = Nt.unstable_LowPriority, Eb = Nt.unstable_IdlePriority, dc = null, Rr = null;
function JP(e) {
  if (Rr && typeof Rr.onCommitFiberRoot == "function")
    try {
      Rr.onCommitFiberRoot(dc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var vr = Math.clz32 ? Math.clz32 : rT, eT = Math.log, tT = Math.LN2;
function rT(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (eT(e) / tT | 0) | 0;
}
var ll = 64, ul = 4194304;
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
function Su(e, t) {
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
function nT(e, t) {
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
function oT(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - vr(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = nT(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function qf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $b() {
  var e = ll;
  return ll <<= 1, !(ll & 4194240) && (ll = 64), e;
}
function Sd(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Os(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - vr(t), e[t] = r;
}
function iT(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - vr(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function Ch(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - vr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var ve = 0;
function Ab(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Rb, _h, Mb, Ob, Ib, Xf = !1, cl = [], Tn = null, En = null, $n = null, es = /* @__PURE__ */ new Map(), ts = /* @__PURE__ */ new Map(), xn = [], aT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Jv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tn = null;
      break;
    case "dragenter":
    case "dragleave":
      En = null;
      break;
    case "mouseover":
    case "mouseout":
      $n = null;
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = zs(t), t !== null && _h(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function sT(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return Tn = oa(Tn, e, t, r, n, o), !0;
    case "dragenter":
      return En = oa(En, e, t, r, n, o), !0;
    case "mouseover":
      return $n = oa($n, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return es.set(i, oa(es.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ts.set(i, oa(ts.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function zb(e) {
  var t = ao(e.target);
  if (t !== null) {
    var r = Ao(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = kb(r), t !== null) {
          e.blockedOn = t, Ib(e.priority, function() {
            Mb(r);
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
function Wl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Qf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Hf = n, r.target.dispatchEvent(n), Hf = null;
    } else
      return t = zs(r), t !== null && _h(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function eg(e, t, r) {
  Wl(e) && r.delete(t);
}
function lT() {
  Xf = !1, Tn !== null && Wl(Tn) && (Tn = null), En !== null && Wl(En) && (En = null), $n !== null && Wl($n) && ($n = null), es.forEach(eg), ts.forEach(eg);
}
function ia(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Xf || (Xf = !0, Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, lT)));
}
function rs(e) {
  function t(o) {
    return ia(o, e);
  }
  if (0 < cl.length) {
    ia(cl[0], e);
    for (var r = 1; r < cl.length; r++) {
      var n = cl[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Tn !== null && ia(Tn, e), En !== null && ia(En, e), $n !== null && ia($n, e), es.forEach(t), ts.forEach(t), r = 0; r < xn.length; r++)
    n = xn[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < xn.length && (r = xn[0], r.blockedOn === null); )
    zb(r), r.blockedOn === null && xn.shift();
}
var yi = un.ReactCurrentBatchConfig, wu = !0;
function uT(e, t, r, n) {
  var o = ve, i = yi.transition;
  yi.transition = null;
  try {
    ve = 1, Ph(e, t, r, n);
  } finally {
    ve = o, yi.transition = i;
  }
}
function cT(e, t, r, n) {
  var o = ve, i = yi.transition;
  yi.transition = null;
  try {
    ve = 4, Ph(e, t, r, n);
  } finally {
    ve = o, yi.transition = i;
  }
}
function Ph(e, t, r, n) {
  if (wu) {
    var o = Qf(e, t, r, n);
    if (o === null)
      Rd(e, t, n, ku, r), Jv(e, n);
    else if (sT(o, e, t, r, n))
      n.stopPropagation();
    else if (Jv(e, n), t & 4 && -1 < aT.indexOf(e)) {
      for (; o !== null; ) {
        var i = zs(o);
        if (i !== null && Rb(i), i = Qf(e, t, r, n), i === null && Rd(e, t, n, ku, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      Rd(e, t, n, null, r);
  }
}
var ku = null;
function Qf(e, t, r, n) {
  if (ku = null, e = wh(n), e = ao(e), e !== null)
    if (t = Ao(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = kb(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return ku = e, null;
}
function Db(e) {
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
      switch (QP()) {
        case kh:
          return 1;
        case Tb:
          return 4;
        case xu:
        case ZP:
          return 16;
        case Eb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Cn = null, Th = null, Ul = null;
function Fb() {
  if (Ul)
    return Ul;
  var e, t = Th, r = t.length, n, o = "value" in Cn ? Cn.value : Cn.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return Ul = o.slice(e, 1 < n ? 1 - n : void 0);
}
function Hl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function dl() {
  return !0;
}
function tg() {
  return !1;
}
function Ut(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? dl : tg, this.isPropagationStopped = tg, this;
  }
  return Fe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = dl);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = dl);
  }, persist: function() {
  }, isPersistent: dl }), t;
}
var Gi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Eh = Ut(Gi), Is = Fe({}, Gi, { view: 0, detail: 0 }), dT = Ut(Is), wd, kd, aa, fc = Fe({}, Is, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $h, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== aa && (aa && e.type === "mousemove" ? (wd = e.screenX - aa.screenX, kd = e.screenY - aa.screenY) : kd = wd = 0, aa = e), wd);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : kd;
} }), rg = Ut(fc), fT = Fe({}, fc, { dataTransfer: 0 }), pT = Ut(fT), hT = Fe({}, Is, { relatedTarget: 0 }), Cd = Ut(hT), mT = Fe({}, Gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vT = Ut(mT), gT = Fe({}, Gi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), yT = Ut(gT), bT = Fe({}, Gi, { data: 0 }), ng = Ut(bT), xT = {
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
}, ST = {
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
}, wT = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function kT(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wT[e]) ? !!t[e] : !1;
}
function $h() {
  return kT;
}
var CT = Fe({}, Is, { key: function(e) {
  if (e.key) {
    var t = xT[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Hl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ST[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $h, charCode: function(e) {
  return e.type === "keypress" ? Hl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), _T = Ut(CT), PT = Fe({}, fc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), og = Ut(PT), TT = Fe({}, Is, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $h }), ET = Ut(TT), $T = Fe({}, Gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), AT = Ut($T), RT = Fe({}, fc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), MT = Ut(RT), OT = [9, 13, 27, 32], Ah = tn && "CompositionEvent" in window, Ra = null;
tn && "documentMode" in document && (Ra = document.documentMode);
var IT = tn && "TextEvent" in window && !Ra, Lb = tn && (!Ah || Ra && 8 < Ra && 11 >= Ra), ig = " ", ag = !1;
function jb(e, t) {
  switch (e) {
    case "keyup":
      return OT.indexOf(t.keyCode) !== -1;
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
function Nb(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Yo = !1;
function zT(e, t) {
  switch (e) {
    case "compositionend":
      return Nb(t);
    case "keypress":
      return t.which !== 32 ? null : (ag = !0, ig);
    case "textInput":
      return e = t.data, e === ig && ag ? null : e;
    default:
      return null;
  }
}
function DT(e, t) {
  if (Yo)
    return e === "compositionend" || !Ah && jb(e, t) ? (e = Fb(), Ul = Th = Cn = null, Yo = !1, e) : null;
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
      return Lb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var FT = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!FT[e.type] : t === "textarea";
}
function Bb(e, t, r, n) {
  yb(n), t = Cu(t, "onChange"), 0 < t.length && (r = new Eh("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var Ma = null, ns = null;
function LT(e) {
  Zb(e, 0);
}
function pc(e) {
  var t = Qo(e);
  if (db(t))
    return e;
}
function jT(e, t) {
  if (e === "change")
    return t;
}
var Vb = !1;
if (tn) {
  var _d;
  if (tn) {
    var Pd = "oninput" in document;
    if (!Pd) {
      var lg = document.createElement("div");
      lg.setAttribute("oninput", "return;"), Pd = typeof lg.oninput == "function";
    }
    _d = Pd;
  } else
    _d = !1;
  Vb = _d && (!document.documentMode || 9 < document.documentMode);
}
function ug() {
  Ma && (Ma.detachEvent("onpropertychange", Wb), ns = Ma = null);
}
function Wb(e) {
  if (e.propertyName === "value" && pc(ns)) {
    var t = [];
    Bb(t, ns, e, wh(e)), wb(LT, t);
  }
}
function NT(e, t, r) {
  e === "focusin" ? (ug(), Ma = t, ns = r, Ma.attachEvent("onpropertychange", Wb)) : e === "focusout" && ug();
}
function BT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pc(ns);
}
function VT(e, t) {
  if (e === "click")
    return pc(t);
}
function WT(e, t) {
  if (e === "input" || e === "change")
    return pc(t);
}
function UT(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var br = typeof Object.is == "function" ? Object.is : UT;
function os(e, t) {
  if (br(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Of.call(t, o) || !br(e[o], t[o]))
      return !1;
  }
  return !0;
}
function cg(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function dg(e, t) {
  var r = cg(e);
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
    r = cg(r);
  }
}
function Ub(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ub(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hb() {
  for (var e = window, t = gu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = gu(e.document);
  }
  return t;
}
function Rh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function HT(e) {
  var t = Hb(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Ub(r.ownerDocument.documentElement, r)) {
    if (n !== null && Rh(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = dg(r, i);
        var a = dg(
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
var GT = tn && "documentMode" in document && 11 >= document.documentMode, qo = null, Zf = null, Oa = null, Jf = !1;
function fg(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Jf || qo == null || qo !== gu(n) || (n = qo, "selectionStart" in n && Rh(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Oa && os(Oa, n) || (Oa = n, n = Cu(Zf, "onSelect"), 0 < n.length && (t = new Eh("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = qo)));
}
function fl(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var Xo = { animationend: fl("Animation", "AnimationEnd"), animationiteration: fl("Animation", "AnimationIteration"), animationstart: fl("Animation", "AnimationStart"), transitionend: fl("Transition", "TransitionEnd") }, Td = {}, Gb = {};
tn && (Gb = document.createElement("div").style, "AnimationEvent" in window || (delete Xo.animationend.animation, delete Xo.animationiteration.animation, delete Xo.animationstart.animation), "TransitionEvent" in window || delete Xo.transitionend.transition);
function hc(e) {
  if (Td[e])
    return Td[e];
  if (!Xo[e])
    return e;
  var t = Xo[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in Gb)
      return Td[e] = t[r];
  return e;
}
var Kb = hc("animationend"), Yb = hc("animationiteration"), qb = hc("animationstart"), Xb = hc("transitionend"), Qb = /* @__PURE__ */ new Map(), pg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vn(e, t) {
  Qb.set(e, t), $o(t, [e]);
}
for (var Ed = 0; Ed < pg.length; Ed++) {
  var $d = pg[Ed], KT = $d.toLowerCase(), YT = $d[0].toUpperCase() + $d.slice(1);
  Vn(KT, "on" + YT);
}
Vn(Kb, "onAnimationEnd");
Vn(Yb, "onAnimationIteration");
Vn(qb, "onAnimationStart");
Vn("dblclick", "onDoubleClick");
Vn("focusin", "onFocus");
Vn("focusout", "onBlur");
Vn(Xb, "onTransitionEnd");
$i("onMouseEnter", ["mouseout", "mouseover"]);
$i("onMouseLeave", ["mouseout", "mouseover"]);
$i("onPointerEnter", ["pointerout", "pointerover"]);
$i("onPointerLeave", ["pointerout", "pointerover"]);
$o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$o("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));
function hg(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, KP(n, t, void 0, e), e.currentTarget = null;
}
function Zb(e, t) {
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
          hg(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          hg(o, s, u), i = l;
        }
    }
  }
  if (bu)
    throw e = Yf, bu = !1, Yf = null, e;
}
function Te(e, t) {
  var r = t[op];
  r === void 0 && (r = t[op] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Jb(t, e, 2, !1), r.add(n));
}
function Ad(e, t, r) {
  var n = 0;
  t && (n |= 4), Jb(r, e, n, t);
}
var pl = "_reactListening" + Math.random().toString(36).slice(2);
function is(e) {
  if (!e[pl]) {
    e[pl] = !0, ab.forEach(function(r) {
      r !== "selectionchange" && (qT.has(r) || Ad(r, !1, e), Ad(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pl] || (t[pl] = !0, Ad("selectionchange", !1, t));
  }
}
function Jb(e, t, r, n) {
  switch (Db(t)) {
    case 1:
      var o = uT;
      break;
    case 4:
      o = cT;
      break;
    default:
      o = Ph;
  }
  r = o.bind(null, t, r, e), o = void 0, !Kf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function Rd(e, t, r, n, o) {
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
            if (a = ao(s), a === null)
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
  wb(function() {
    var u = i, c = wh(r), d = [];
    e: {
      var f = Qb.get(e);
      if (f !== void 0) {
        var p = Eh, v = e;
        switch (e) {
          case "keypress":
            if (Hl(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = _T;
            break;
          case "focusin":
            v = "focus", p = Cd;
            break;
          case "focusout":
            v = "blur", p = Cd;
            break;
          case "beforeblur":
          case "afterblur":
            p = Cd;
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
            p = rg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = pT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = ET;
            break;
          case Kb:
          case Yb:
          case qb:
            p = vT;
            break;
          case Xb:
            p = AT;
            break;
          case "scroll":
            p = dT;
            break;
          case "wheel":
            p = MT;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = yT;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = og;
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
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && r !== Hf && (v = r.relatedTarget || r.fromElement) && (ao(v) || v[rn]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (v = r.relatedTarget || r.toElement, p = u, v = v ? ao(v) : null, v !== null && (x = Ao(v), v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (p = null, v = u), p !== v)) {
          if (g = rg, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = og, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = p == null ? f : Qo(p), y = v == null ? f : Qo(v), f = new g(w, h + "leave", p, r, c), f.target = x, f.relatedTarget = y, w = null, ao(c) === u && (g = new g(m, h + "enter", v, r, c), g.target = y, g.relatedTarget = x, w = g), x = w, p && v)
            t: {
              for (g = p, m = v, h = 0, y = g; y; y = Lo(y))
                h++;
              for (y = 0, w = m; w; w = Lo(w))
                y++;
              for (; 0 < h - y; )
                g = Lo(g), h--;
              for (; 0 < y - h; )
                m = Lo(m), y--;
              for (; h--; ) {
                if (g === m || m !== null && g === m.alternate)
                  break t;
                g = Lo(g), m = Lo(m);
              }
              g = null;
            }
          else
            g = null;
          p !== null && mg(d, f, p, g, !1), v !== null && x !== null && mg(d, x, v, g, !0);
        }
      }
      e: {
        if (f = u ? Qo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var C = jT;
        else if (sg(f))
          if (Vb)
            C = WT;
          else {
            C = BT;
            var E = NT;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = VT);
        if (C && (C = C(e, u))) {
          Bb(d, C, r, c);
          break e;
        }
        E && E(e, f, u), e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Nf(f, "number", f.value);
      }
      switch (E = u ? Qo(u) : window, e) {
        case "focusin":
          (sg(E) || E.contentEditable === "true") && (qo = E, Zf = u, Oa = null);
          break;
        case "focusout":
          Oa = Zf = qo = null;
          break;
        case "mousedown":
          Jf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Jf = !1, fg(d, r, c);
          break;
        case "selectionchange":
          if (GT)
            break;
        case "keydown":
        case "keyup":
          fg(d, r, c);
      }
      var _;
      if (Ah)
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
        Yo ? jb(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ && (Lb && r.locale !== "ko" && (Yo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Yo && (_ = Fb()) : (Cn = c, Th = "value" in Cn ? Cn.value : Cn.textContent, Yo = !0)), E = Cu(u, $), 0 < E.length && ($ = new ng($, e, null, r, c), d.push({ event: $, listeners: E }), _ ? $.data = _ : (_ = Nb(r), _ !== null && ($.data = _)))), (_ = IT ? zT(e, r) : DT(e, r)) && (u = Cu(u, "onBeforeInput"), 0 < u.length && (c = new ng("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = _));
    }
    Zb(d, t);
  });
}
function as(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Cu(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ja(e, r), i != null && n.unshift(as(e, i, o)), i = Ja(e, t), i != null && n.push(as(e, i, o))), e = e.return;
  }
  return n;
}
function Lo(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mg(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Ja(r, i), l != null && a.unshift(as(r, l, s))) : o || (l = Ja(r, i), l != null && a.push(as(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var XT = /\r\n?/g, QT = /\u0000|\uFFFD/g;
function vg(e) {
  return (typeof e == "string" ? e : "" + e).replace(XT, `
`).replace(QT, "");
}
function hl(e, t, r) {
  if (t = vg(t), vg(e) !== t && r)
    throw Error(O(425));
}
function _u() {
}
var ep = null, tp = null;
function rp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var np = typeof setTimeout == "function" ? setTimeout : void 0, ZT = typeof clearTimeout == "function" ? clearTimeout : void 0, gg = typeof Promise == "function" ? Promise : void 0, JT = typeof queueMicrotask == "function" ? queueMicrotask : typeof gg < "u" ? function(e) {
  return gg.resolve(null).then(e).catch(e2);
} : np;
function e2(e) {
  setTimeout(function() {
    throw e;
  });
}
function Md(e, t) {
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
function An(e) {
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
function yg(e) {
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
var Ki = Math.random().toString(36).slice(2), $r = "__reactFiber$" + Ki, ss = "__reactProps$" + Ki, rn = "__reactContainer$" + Ki, op = "__reactEvents$" + Ki, t2 = "__reactListeners$" + Ki, r2 = "__reactHandles$" + Ki;
function ao(e) {
  var t = e[$r];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[rn] || r[$r]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = yg(e); e !== null; ) {
          if (r = e[$r])
            return r;
          e = yg(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function zs(e) {
  return e = e[$r] || e[rn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Qo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function mc(e) {
  return e[ss] || null;
}
var ip = [], Zo = -1;
function Wn(e) {
  return { current: e };
}
function $e(e) {
  0 > Zo || (e.current = ip[Zo], ip[Zo] = null, Zo--);
}
function ke(e, t) {
  Zo++, ip[Zo] = e.current, e.current = t;
}
var jn = {}, mt = Wn(jn), Tt = Wn(!1), So = jn;
function Ai(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return jn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in r)
    o[i] = t[i];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Et(e) {
  return e = e.childContextTypes, e != null;
}
function Pu() {
  $e(Tt), $e(mt);
}
function bg(e, t, r) {
  if (mt.current !== jn)
    throw Error(O(168));
  ke(mt, t), ke(Tt, r);
}
function ex(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(O(108, NP(e) || "Unknown", o));
  return Fe({}, r, n);
}
function Tu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn, So = mt.current, ke(mt, e), ke(Tt, Tt.current), !0;
}
function xg(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(O(169));
  r ? (e = ex(e, t, So), n.__reactInternalMemoizedMergedChildContext = e, $e(Tt), $e(mt), ke(mt, e)) : $e(Tt), ke(Tt, r);
}
var Wr = null, vc = !1, Od = !1;
function tx(e) {
  Wr === null ? Wr = [e] : Wr.push(e);
}
function n2(e) {
  vc = !0, tx(e);
}
function Un() {
  if (!Od && Wr !== null) {
    Od = !0;
    var e = 0, t = ve;
    try {
      var r = Wr;
      for (ve = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Wr = null, vc = !1;
    } catch (o) {
      throw Wr !== null && (Wr = Wr.slice(e + 1)), Pb(kh, Un), o;
    } finally {
      ve = t, Od = !1;
    }
  }
  return null;
}
var Jo = [], ei = 0, Eu = null, $u = 0, Qt = [], Zt = 0, wo = null, Gr = 1, Kr = "";
function Jn(e, t) {
  Jo[ei++] = $u, Jo[ei++] = Eu, Eu = e, $u = t;
}
function rx(e, t, r) {
  Qt[Zt++] = Gr, Qt[Zt++] = Kr, Qt[Zt++] = wo, wo = e;
  var n = Gr;
  e = Kr;
  var o = 32 - vr(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - vr(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Gr = 1 << 32 - vr(t) + o | r << o | n, Kr = i + e;
  } else
    Gr = 1 << i | r << o | n, Kr = e;
}
function Mh(e) {
  e.return !== null && (Jn(e, 1), rx(e, 1, 0));
}
function Oh(e) {
  for (; e === Eu; )
    Eu = Jo[--ei], Jo[ei] = null, $u = Jo[--ei], Jo[ei] = null;
  for (; e === wo; )
    wo = Qt[--Zt], Qt[Zt] = null, Kr = Qt[--Zt], Qt[Zt] = null, Gr = Qt[--Zt], Qt[Zt] = null;
}
var Ft = null, Dt = null, Oe = !1, hr = null;
function nx(e, t) {
  var r = Jt(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function Sg(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ft = e, Dt = An(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ft = e, Dt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = wo !== null ? { id: Gr, overflow: Kr } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Jt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Ft = e, Dt = null, !0) : !1;
    default:
      return !1;
  }
}
function ap(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sp(e) {
  if (Oe) {
    var t = Dt;
    if (t) {
      var r = t;
      if (!Sg(e, t)) {
        if (ap(e))
          throw Error(O(418));
        t = An(r.nextSibling);
        var n = Ft;
        t && Sg(e, t) ? nx(n, r) : (e.flags = e.flags & -4097 | 2, Oe = !1, Ft = e);
      }
    } else {
      if (ap(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, Oe = !1, Ft = e;
    }
  }
}
function wg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ft = e;
}
function ml(e) {
  if (e !== Ft)
    return !1;
  if (!Oe)
    return wg(e), Oe = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !rp(e.type, e.memoizedProps)), t && (t = Dt)) {
    if (ap(e))
      throw ox(), Error(O(418));
    for (; t; )
      nx(e, t), t = An(t.nextSibling);
  }
  if (wg(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Dt = An(e.nextSibling);
              break e;
            }
            t--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Dt = null;
    }
  } else
    Dt = Ft ? An(e.stateNode.nextSibling) : null;
  return !0;
}
function ox() {
  for (var e = Dt; e; )
    e = An(e.nextSibling);
}
function Ri() {
  Dt = Ft = null, Oe = !1;
}
function Ih(e) {
  hr === null ? hr = [e] : hr.push(e);
}
var o2 = un.ReactCurrentBatchConfig;
function fr(e, t) {
  if (e && e.defaultProps) {
    t = Fe({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Au = Wn(null), Ru = null, ti = null, zh = null;
function Dh() {
  zh = ti = Ru = null;
}
function Fh(e) {
  var t = Au.current;
  $e(Au), e._currentValue = t;
}
function lp(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)
      break;
    e = e.return;
  }
}
function bi(e, t) {
  Ru = e, zh = ti = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pt = !0), e.firstContext = null);
}
function or(e) {
  var t = e._currentValue;
  if (zh !== e)
    if (e = { context: e, memoizedValue: t, next: null }, ti === null) {
      if (Ru === null)
        throw Error(O(308));
      ti = e, Ru.dependencies = { lanes: 0, firstContext: e };
    } else
      ti = ti.next = e;
  return t;
}
var so = null;
function Lh(e) {
  so === null ? so = [e] : so.push(e);
}
function ix(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, Lh(t)) : (r.next = o.next, o.next = r), t.interleaved = r, nn(e, n);
}
function nn(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var yn = !1;
function jh(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ax(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rn(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, ae & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, nn(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, Lh(n)) : (t.next = o.next, o.next = t), n.interleaved = t, nn(e, r);
}
function Gl(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ch(e, r);
  }
}
function kg(e, t) {
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
function Mu(e, t, r, n) {
  var o = e.updateQueue;
  yn = !1;
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
              d = Fe({}, d, f);
              break e;
            case 2:
              yn = !0;
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
    Co |= a, e.lanes = a, e.memoizedState = d;
  }
}
function Cg(e, t, r) {
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
var sx = new ib.Component().refs;
function up(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Fe({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var gc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ao(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = xt(), o = On(e), i = Qr(n, o);
  i.payload = t, r != null && (i.callback = r), t = Rn(e, i, o), t !== null && (gr(t, e, o, n), Gl(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = xt(), o = On(e), i = Qr(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = Rn(e, i, o), t !== null && (gr(t, e, o, n), Gl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = xt(), n = On(e), o = Qr(r, n);
  o.tag = 2, t != null && (o.callback = t), t = Rn(e, o, n), t !== null && (gr(t, e, n, r), Gl(t, e, n));
} };
function _g(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !os(r, n) || !os(o, i) : !0;
}
function lx(e, t, r) {
  var n = !1, o = jn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = or(i) : (o = Et(t) ? So : mt.current, n = t.contextTypes, i = (n = n != null) ? Ai(e, o) : jn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = gc, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Pg(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && gc.enqueueReplaceState(t, t.state, null);
}
function cp(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = sx, jh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = or(i) : (i = Et(t) ? So : mt.current, o.context = Ai(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (up(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && gc.enqueueReplaceState(o, o.state, null), Mu(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
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
        s === sx && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!r._owner)
      throw Error(O(290, e));
  }
  return e;
}
function vl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Tg(e) {
  var t = e._init;
  return t(e._payload);
}
function ux(e) {
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
    return m = In(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < h ? (m.flags |= 2, h) : y) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, y, w) {
    return h === null || h.tag !== 6 ? (h = Nd(y, m.mode, w), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function l(m, h, y, w) {
    var C = y.type;
    return C === Ko ? c(m, h, y.props.children, w, y.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === gn && Tg(C) === h.type) ? (w = o(h, y.props), w.ref = sa(m, h, y), w.return = m, w) : (w = Zl(y.type, y.key, y.props, null, m.mode, w), w.ref = sa(m, h, y), w.return = m, w);
  }
  function u(m, h, y, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = Bd(y, m.mode, w), h.return = m, h) : (h = o(h, y.children || []), h.return = m, h);
  }
  function c(m, h, y, w, C) {
    return h === null || h.tag !== 7 ? (h = po(y, m.mode, w, C), h.return = m, h) : (h = o(h, y), h.return = m, h);
  }
  function d(m, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Nd("" + h, m.mode, y), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case il:
          return y = Zl(h.type, h.key, h.props, null, m.mode, y), y.ref = sa(m, null, h), y.return = m, y;
        case Go:
          return h = Bd(h, m.mode, y), h.return = m, h;
        case gn:
          var w = h._init;
          return d(m, w(h._payload), y);
      }
      if (ba(h) || ra(h))
        return h = po(h, m.mode, y, null), h.return = m, h;
      vl(m, h);
    }
    return null;
  }
  function f(m, h, y, w) {
    var C = h !== null ? h.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return C !== null ? null : s(m, h, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case il:
          return y.key === C ? l(m, h, y, w) : null;
        case Go:
          return y.key === C ? u(m, h, y, w) : null;
        case gn:
          return C = y._init, f(
            m,
            h,
            C(y._payload),
            w
          );
      }
      if (ba(y) || ra(y))
        return C !== null ? null : c(m, h, y, w, null);
      vl(m, y);
    }
    return null;
  }
  function p(m, h, y, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return m = m.get(y) || null, s(h, m, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case il:
          return m = m.get(w.key === null ? y : w.key) || null, l(h, m, w, C);
        case Go:
          return m = m.get(w.key === null ? y : w.key) || null, u(h, m, w, C);
        case gn:
          var E = w._init;
          return p(m, h, y, E(w._payload), C);
      }
      if (ba(w) || ra(w))
        return m = m.get(y) || null, c(h, m, w, C, null);
      vl(h, w);
    }
    return null;
  }
  function v(m, h, y, w) {
    for (var C = null, E = null, _ = h, $ = h = 0, R = null; _ !== null && $ < y.length; $++) {
      _.index > $ ? (R = _, _ = null) : R = _.sibling;
      var M = f(m, _, y[$], w);
      if (M === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && M.alternate === null && t(m, _), h = i(M, h, $), E === null ? C = M : E.sibling = M, E = M, _ = R;
    }
    if ($ === y.length)
      return r(m, _), Oe && Jn(m, $), C;
    if (_ === null) {
      for (; $ < y.length; $++)
        _ = d(m, y[$], w), _ !== null && (h = i(_, h, $), E === null ? C = _ : E.sibling = _, E = _);
      return Oe && Jn(m, $), C;
    }
    for (_ = n(m, _); $ < y.length; $++)
      R = p(_, m, $, y[$], w), R !== null && (e && R.alternate !== null && _.delete(R.key === null ? $ : R.key), h = i(R, h, $), E === null ? C = R : E.sibling = R, E = R);
    return e && _.forEach(function(L) {
      return t(m, L);
    }), Oe && Jn(m, $), C;
  }
  function g(m, h, y, w) {
    var C = ra(y);
    if (typeof C != "function")
      throw Error(O(150));
    if (y = C.call(y), y == null)
      throw Error(O(151));
    for (var E = C = null, _ = h, $ = h = 0, R = null, M = y.next(); _ !== null && !M.done; $++, M = y.next()) {
      _.index > $ ? (R = _, _ = null) : R = _.sibling;
      var L = f(m, _, M.value, w);
      if (L === null) {
        _ === null && (_ = R);
        break;
      }
      e && _ && L.alternate === null && t(m, _), h = i(L, h, $), E === null ? C = L : E.sibling = L, E = L, _ = R;
    }
    if (M.done)
      return r(
        m,
        _
      ), Oe && Jn(m, $), C;
    if (_ === null) {
      for (; !M.done; $++, M = y.next())
        M = d(m, M.value, w), M !== null && (h = i(M, h, $), E === null ? C = M : E.sibling = M, E = M);
      return Oe && Jn(m, $), C;
    }
    for (_ = n(m, _); !M.done; $++, M = y.next())
      M = p(_, m, $, M.value, w), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? $ : M.key), h = i(M, h, $), E === null ? C = M : E.sibling = M, E = M);
    return e && _.forEach(function(q) {
      return t(m, q);
    }), Oe && Jn(m, $), C;
  }
  function x(m, h, y, w) {
    if (typeof y == "object" && y !== null && y.type === Ko && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case il:
          e: {
            for (var C = y.key, E = h; E !== null; ) {
              if (E.key === C) {
                if (C = y.type, C === Ko) {
                  if (E.tag === 7) {
                    r(m, E.sibling), h = o(E, y.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === gn && Tg(C) === E.type) {
                  r(m, E.sibling), h = o(E, y.props), h.ref = sa(m, E, y), h.return = m, m = h;
                  break e;
                }
                r(m, E);
                break;
              } else
                t(m, E);
              E = E.sibling;
            }
            y.type === Ko ? (h = po(y.props.children, m.mode, w, y.key), h.return = m, m = h) : (w = Zl(y.type, y.key, y.props, null, m.mode, w), w.ref = sa(m, h, y), w.return = m, m = w);
          }
          return a(m);
        case Go:
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
        case gn:
          return E = y._init, x(m, h, E(y._payload), w);
      }
      if (ba(y))
        return v(m, h, y, w);
      if (ra(y))
        return g(m, h, y, w);
      vl(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, h !== null && h.tag === 6 ? (r(m, h.sibling), h = o(h, y), h.return = m, m = h) : (r(m, h), h = Nd(y, m.mode, w), h.return = m, m = h), a(m)) : r(m, h);
  }
  return x;
}
var Mi = ux(!0), cx = ux(!1), Ds = {}, Mr = Wn(Ds), ls = Wn(Ds), us = Wn(Ds);
function lo(e) {
  if (e === Ds)
    throw Error(O(174));
  return e;
}
function Nh(e, t) {
  switch (ke(us, t), ke(ls, e), ke(Mr, Ds), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vf(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vf(t, e);
  }
  $e(Mr), ke(Mr, t);
}
function Oi() {
  $e(Mr), $e(ls), $e(us);
}
function dx(e) {
  lo(us.current);
  var t = lo(Mr.current), r = Vf(t, e.type);
  t !== r && (ke(ls, e), ke(Mr, r));
}
function Bh(e) {
  ls.current === e && ($e(Mr), $e(ls));
}
var Ie = Wn(0);
function Ou(e) {
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
var Id = [];
function Vh() {
  for (var e = 0; e < Id.length; e++)
    Id[e]._workInProgressVersionPrimary = null;
  Id.length = 0;
}
var Kl = un.ReactCurrentDispatcher, zd = un.ReactCurrentBatchConfig, ko = 0, De = null, Ye = null, Je = null, Iu = !1, Ia = !1, cs = 0, i2 = 0;
function ct() {
  throw Error(O(321));
}
function Wh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!br(e[r], t[r]))
      return !1;
  return !0;
}
function Uh(e, t, r, n, o, i) {
  if (ko = i, De = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Kl.current = e === null || e.memoizedState === null ? u2 : c2, e = r(n, o), Ia) {
    i = 0;
    do {
      if (Ia = !1, cs = 0, 25 <= i)
        throw Error(O(301));
      i += 1, Je = Ye = null, t.updateQueue = null, Kl.current = d2, e = r(n, o);
    } while (Ia);
  }
  if (Kl.current = zu, t = Ye !== null && Ye.next !== null, ko = 0, Je = Ye = De = null, Iu = !1, t)
    throw Error(O(300));
  return e;
}
function Hh() {
  var e = cs !== 0;
  return cs = 0, e;
}
function Cr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Je === null ? De.memoizedState = Je = e : Je = Je.next = e, Je;
}
function ir() {
  if (Ye === null) {
    var e = De.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Ye.next;
  var t = Je === null ? De.memoizedState : Je.next;
  if (t !== null)
    Je = t, Ye = e;
  else {
    if (e === null)
      throw Error(O(310));
    Ye = e, e = { memoizedState: Ye.memoizedState, baseState: Ye.baseState, baseQueue: Ye.baseQueue, queue: Ye.queue, next: null }, Je === null ? De.memoizedState = Je = e : Je = Je.next = e;
  }
  return Je;
}
function ds(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Dd(e) {
  var t = ir(), r = t.queue;
  if (r === null)
    throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = Ye, o = n.baseQueue, i = r.pending;
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
      if ((ko & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = n) : l = l.next = d, De.lanes |= c, Co |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, br(n, t.memoizedState) || (Pt = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, De.lanes |= i, Co |= i, o = o.next;
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
    br(i, t.memoizedState) || (Pt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function fx() {
}
function px(e, t) {
  var r = De, n = ir(), o = t(), i = !br(n.memoizedState, o);
  if (i && (n.memoizedState = o, Pt = !0), n = n.queue, Gh(vx.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || Je !== null && Je.memoizedState.tag & 1) {
    if (r.flags |= 2048, fs(9, mx.bind(null, r, n, o, t), void 0, null), et === null)
      throw Error(O(349));
    ko & 30 || hx(r, t, o);
  }
  return o;
}
function hx(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function mx(e, t, r, n) {
  t.value = r, t.getSnapshot = n, gx(t) && yx(e);
}
function vx(e, t, r) {
  return r(function() {
    gx(t) && yx(e);
  });
}
function gx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !br(e, r);
  } catch {
    return !0;
  }
}
function yx(e) {
  var t = nn(e, 1);
  t !== null && gr(t, e, 1, -1);
}
function Eg(e) {
  var t = Cr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ds, lastRenderedState: e }, t.queue = e, e = e.dispatch = l2.bind(null, De, e), [t.memoizedState, e];
}
function fs(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function bx() {
  return ir().memoizedState;
}
function Yl(e, t, r, n) {
  var o = Cr();
  De.flags |= e, o.memoizedState = fs(1 | t, r, void 0, n === void 0 ? null : n);
}
function yc(e, t, r, n) {
  var o = ir();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Ye !== null) {
    var a = Ye.memoizedState;
    if (i = a.destroy, n !== null && Wh(n, a.deps)) {
      o.memoizedState = fs(t, r, i, n);
      return;
    }
  }
  De.flags |= e, o.memoizedState = fs(1 | t, r, i, n);
}
function $g(e, t) {
  return Yl(8390656, 8, e, t);
}
function Gh(e, t) {
  return yc(2048, 8, e, t);
}
function xx(e, t) {
  return yc(4, 2, e, t);
}
function Sx(e, t) {
  return yc(4, 4, e, t);
}
function wx(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function kx(e, t, r) {
  return r = r != null ? r.concat([e]) : null, yc(4, 4, wx.bind(null, t, e), r);
}
function Kh() {
}
function Cx(e, t) {
  var r = ir();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Wh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function _x(e, t) {
  var r = ir();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Wh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function Px(e, t, r) {
  return ko & 21 ? (br(r, t) || (r = $b(), De.lanes |= r, Co |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pt = !0), e.memoizedState = r);
}
function a2(e, t) {
  var r = ve;
  ve = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = zd.transition;
  zd.transition = {};
  try {
    e(!1), t();
  } finally {
    ve = r, zd.transition = n;
  }
}
function Tx() {
  return ir().memoizedState;
}
function s2(e, t, r) {
  var n = On(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, Ex(e))
    $x(t, r);
  else if (r = ix(e, t, r, n), r !== null) {
    var o = xt();
    gr(r, e, n, o), Ax(r, t, n);
  }
}
function l2(e, t, r) {
  var n = On(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Ex(e))
    $x(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, br(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, Lh(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = ix(e, t, o, n), r !== null && (o = xt(), gr(r, e, n, o), Ax(r, t, n));
  }
}
function Ex(e) {
  var t = e.alternate;
  return e === De || t !== null && t === De;
}
function $x(e, t) {
  Ia = Iu = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function Ax(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, Ch(e, r);
  }
}
var zu = { readContext: or, useCallback: ct, useContext: ct, useEffect: ct, useImperativeHandle: ct, useInsertionEffect: ct, useLayoutEffect: ct, useMemo: ct, useReducer: ct, useRef: ct, useState: ct, useDebugValue: ct, useDeferredValue: ct, useTransition: ct, useMutableSource: ct, useSyncExternalStore: ct, useId: ct, unstable_isNewReconciler: !1 }, u2 = { readContext: or, useCallback: function(e, t) {
  return Cr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: or, useEffect: $g, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Yl(
    4194308,
    4,
    wx.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return Yl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Yl(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = Cr();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = Cr();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = s2.bind(null, De, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = Cr();
  return e = { current: e }, t.memoizedState = e;
}, useState: Eg, useDebugValue: Kh, useDeferredValue: function(e) {
  return Cr().memoizedState = e;
}, useTransition: function() {
  var e = Eg(!1), t = e[0];
  return e = a2.bind(null, e[1]), Cr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = De, o = Cr();
  if (Oe) {
    if (r === void 0)
      throw Error(O(407));
    r = r();
  } else {
    if (r = t(), et === null)
      throw Error(O(349));
    ko & 30 || hx(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, $g(vx.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, fs(9, mx.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = Cr(), t = et.identifierPrefix;
  if (Oe) {
    var r = Kr, n = Gr;
    r = (n & ~(1 << 32 - vr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = cs++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = i2++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, c2 = {
  readContext: or,
  useCallback: Cx,
  useContext: or,
  useEffect: Gh,
  useImperativeHandle: kx,
  useInsertionEffect: xx,
  useLayoutEffect: Sx,
  useMemo: _x,
  useReducer: Dd,
  useRef: bx,
  useState: function() {
    return Dd(ds);
  },
  useDebugValue: Kh,
  useDeferredValue: function(e) {
    var t = ir();
    return Px(t, Ye.memoizedState, e);
  },
  useTransition: function() {
    var e = Dd(ds)[0], t = ir().memoizedState;
    return [e, t];
  },
  useMutableSource: fx,
  useSyncExternalStore: px,
  useId: Tx,
  unstable_isNewReconciler: !1
}, d2 = { readContext: or, useCallback: Cx, useContext: or, useEffect: Gh, useImperativeHandle: kx, useInsertionEffect: xx, useLayoutEffect: Sx, useMemo: _x, useReducer: Fd, useRef: bx, useState: function() {
  return Fd(ds);
}, useDebugValue: Kh, useDeferredValue: function(e) {
  var t = ir();
  return Ye === null ? t.memoizedState = e : Px(t, Ye.memoizedState, e);
}, useTransition: function() {
  var e = Fd(ds)[0], t = ir().memoizedState;
  return [e, t];
}, useMutableSource: fx, useSyncExternalStore: px, useId: Tx, unstable_isNewReconciler: !1 };
function Ii(e, t) {
  try {
    var r = "", n = t;
    do
      r += jP(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ld(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function dp(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var f2 = typeof WeakMap == "function" ? WeakMap : Map;
function Rx(e, t, r) {
  r = Qr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Fu || (Fu = !0, Sp = n), dp(e, t);
  }, r;
}
function Mx(e, t, r) {
  r = Qr(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function() {
      return n(o);
    }, r.callback = function() {
      dp(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
    dp(e, t), typeof n != "function" && (Mn === null ? Mn = /* @__PURE__ */ new Set([this]) : Mn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function Ag(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new f2();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = P2.bind(null, e, t, r), t.then(e, e));
}
function Rg(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Mg(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Qr(-1, 1), t.tag = 2, Rn(r, t, 1))), r.lanes |= 1), e);
}
var p2 = un.ReactCurrentOwner, Pt = !1;
function gt(e, t, r, n) {
  t.child = e === null ? cx(t, null, r, n) : Mi(t, e.child, r, n);
}
function Og(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return bi(t, o), n = Uh(e, t, r, n, i, o), r = Hh(), e !== null && !Pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, on(e, t, o)) : (Oe && r && Mh(t), t.flags |= 1, gt(e, t, n, o), t.child);
}
function Ig(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !tm(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ox(e, t, i, n, o)) : (e = Zl(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : os, r(a, n) && e.ref === t.ref)
      return on(e, t, o);
  }
  return t.flags |= 1, e = In(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function Ox(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (os(i, n) && e.ref === t.ref)
      if (Pt = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (Pt = !0);
      else
        return t.lanes = e.lanes, on(e, t, o);
  }
  return fp(e, t, r, n, o);
}
function Ix(e, t, r) {
  var n = t.pendingProps, o = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ke(ni, zt), zt |= r;
    else {
      if (!(r & 1073741824))
        return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ke(ni, zt), zt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, ke(ni, zt), zt |= n;
    }
  else
    i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, ke(ni, zt), zt |= n;
  return gt(e, t, o, r), t.child;
}
function zx(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function fp(e, t, r, n, o) {
  var i = Et(r) ? So : mt.current;
  return i = Ai(t, i), bi(t, o), r = Uh(e, t, r, n, i, o), n = Hh(), e !== null && !Pt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, on(e, t, o)) : (Oe && n && Mh(t), t.flags |= 1, gt(e, t, r, o), t.child);
}
function zg(e, t, r, n, o) {
  if (Et(r)) {
    var i = !0;
    Tu(t);
  } else
    i = !1;
  if (bi(t, o), t.stateNode === null)
    ql(e, t), lx(t, r, n), cp(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = or(u) : (u = Et(r) ? So : mt.current, u = Ai(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && Pg(t, a, n, u), yn = !1;
    var f = t.memoizedState;
    a.state = f, Mu(t, n, a, o), l = t.memoizedState, s !== n || f !== l || Tt.current || yn ? (typeof c == "function" && (up(t, r, c, n), l = t.memoizedState), (s = yn || _g(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, ax(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : fr(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = or(l) : (l = Et(r) ? So : mt.current, l = Ai(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && Pg(t, a, n, l), yn = !1, f = t.memoizedState, a.state = f, Mu(t, n, a, o);
    var v = t.memoizedState;
    s !== d || f !== v || Tt.current || yn ? (typeof p == "function" && (up(t, r, p, n), v = t.memoizedState), (u = yn || _g(t, r, u, n, f, v, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, v, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, v, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = v), a.props = n, a.state = v, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return pp(e, t, r, n, i, o);
}
function pp(e, t, r, n, o, i) {
  zx(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && xg(t, r, !1), on(e, t, i);
  n = t.stateNode, p2.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = Mi(t, e.child, null, i), t.child = Mi(t, null, s, i)) : gt(e, t, s, i), t.memoizedState = n.state, o && xg(t, r, !0), t.child;
}
function Dx(e) {
  var t = e.stateNode;
  t.pendingContext ? bg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bg(e, t.context, !1), Nh(e, t.containerInfo);
}
function Dg(e, t, r, n, o) {
  return Ri(), Ih(o), t.flags |= 256, gt(e, t, r, n), t.child;
}
var hp = { dehydrated: null, treeContext: null, retryLane: 0 };
function mp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fx(e, t, r) {
  var n = t.pendingProps, o = Ie.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ke(Ie, o & 1), e === null)
    return sp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Sc(a, n, 0, null), e = po(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = mp(r), t.memoizedState = hp, e) : Yh(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return h2(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = In(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = In(s, i) : (i = po(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? mp(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = hp, n;
  }
  return i = e.child, e = i.sibling, n = In(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Yh(e, t) {
  return t = Sc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function gl(e, t, r, n) {
  return n !== null && Ih(n), Mi(t, e.child, null, r), e = Yh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function h2(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Ld(Error(O(422))), gl(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = Sc({ mode: "visible", children: n.children }, o, 0, null), i = po(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && Mi(t, e.child, null, a), t.child.memoizedState = mp(a), t.memoizedState = hp, i);
  if (!(t.mode & 1))
    return gl(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(O(419)), n = Ld(i, n, void 0), gl(e, t, a, n);
  }
  if (s = (a & e.childLanes) !== 0, Pt || s) {
    if (n = et, n !== null) {
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
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, nn(e, o), gr(n, e, o, -1));
    }
    return em(), n = Ld(Error(O(421))), gl(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = T2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Dt = An(o.nextSibling), Ft = t, Oe = !0, hr = null, e !== null && (Qt[Zt++] = Gr, Qt[Zt++] = Kr, Qt[Zt++] = wo, Gr = e.id, Kr = e.overflow, wo = t), t = Yh(t, n.children), t.flags |= 4096, t);
}
function Fg(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), lp(e.return, t, r);
}
function jd(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function Lx(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (gt(e, t, n.children, r), n = Ie.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Fg(e, r, t);
          else if (e.tag === 19)
            Fg(e, r, t);
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
  if (ke(Ie, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && Ou(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), jd(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ou(e) === null) {
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
function ql(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function on(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), Co |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, r = In(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = In(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function m2(e, t, r) {
  switch (t.tag) {
    case 3:
      Dx(t), Ri();
      break;
    case 5:
      dx(t);
      break;
    case 1:
      Et(t.type) && Tu(t);
      break;
    case 4:
      Nh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      ke(Au, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (ke(Ie, Ie.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Fx(e, t, r) : (ke(Ie, Ie.current & 1), e = on(e, t, r), e !== null ? e.sibling : null);
      ke(Ie, Ie.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return Lx(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ke(Ie, Ie.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ix(e, t, r);
  }
  return on(e, t, r);
}
var jx, vp, Nx, Bx;
jx = function(e, t) {
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
vp = function() {
};
Nx = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, lo(Mr.current);
    var i = null;
    switch (r) {
      case "input":
        o = Lf(e, o), n = Lf(e, n), i = [];
        break;
      case "select":
        o = Fe({}, o, { value: void 0 }), n = Fe({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Bf(e, o), n = Bf(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = _u);
    }
    Wf(r, n);
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
Bx = function(e, t, r, n) {
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
function dt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function v2(e, t, r) {
  var n = t.pendingProps;
  switch (Oh(t), t.tag) {
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
      return Et(t.type) && Pu(), dt(t), null;
    case 3:
      return n = t.stateNode, Oi(), $e(Tt), $e(mt), Vh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ml(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, hr !== null && (Cp(hr), hr = null))), vp(e, t), dt(t), null;
    case 5:
      Bh(t);
      var o = lo(us.current);
      if (r = t.type, e !== null && t.stateNode != null)
        Nx(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(O(166));
          return dt(t), null;
        }
        if (e = lo(Mr.current), ml(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[$r] = t, n[ss] = i, e = (t.mode & 1) !== 0, r) {
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
              Gv(n, i), Te("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, Te("invalid", n);
              break;
            case "textarea":
              Yv(n, i), Te("invalid", n);
          }
          Wf(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && hl(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && hl(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Qa.hasOwnProperty(a) && s != null && a === "onScroll" && Te("scroll", n);
            }
          switch (r) {
            case "input":
              al(n), Kv(n, i, !0);
              break;
            case "textarea":
              al(n), qv(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = _u);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = hb(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[$r] = t, e[ss] = n, jx(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Uf(r, n), r) {
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
                Gv(e, n), o = Lf(e, n), Te("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = Fe({}, n, { value: void 0 }), Te("invalid", e);
                break;
              case "textarea":
                Yv(e, n), o = Bf(e, n), Te("invalid", e);
                break;
              default:
                o = n;
            }
            Wf(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? gb(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && mb(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Za(e, l) : typeof l == "number" && Za(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qa.hasOwnProperty(i) ? l != null && i === "onScroll" && Te("scroll", e) : l != null && yh(e, i, l, a));
              }
            switch (r) {
              case "input":
                al(e), Kv(e, n, !1);
                break;
              case "textarea":
                al(e), qv(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Ln(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, i = n.value, i != null ? mi(e, !!n.multiple, i, !1) : n.defaultValue != null && mi(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = _u);
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
      return dt(t), null;
    case 6:
      if (e && t.stateNode != null)
        Bx(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(O(166));
        if (r = lo(us.current), lo(Mr.current), ml(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[$r] = t, (i = n.nodeValue !== r) && (e = Ft, e !== null))
            switch (e.tag) {
              case 3:
                hl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && hl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[$r] = t, t.stateNode = n;
      }
      return dt(t), null;
    case 13:
      if ($e(Ie), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Oe && Dt !== null && t.mode & 1 && !(t.flags & 128))
          ox(), Ri(), t.flags |= 98560, i = !1;
        else if (i = ml(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(O(317));
            i[$r] = t;
          } else
            Ri(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          dt(t), i = !1;
        } else
          hr !== null && (Cp(hr), hr = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ie.current & 1 ? qe === 0 && (qe = 3) : em())), t.updateQueue !== null && (t.flags |= 4), dt(t), null);
    case 4:
      return Oi(), vp(e, t), e === null && is(t.stateNode.containerInfo), dt(t), null;
    case 10:
      return Fh(t.type._context), dt(t), null;
    case 17:
      return Et(t.type) && Pu(), dt(t), null;
    case 19:
      if ($e(Ie), i = t.memoizedState, i === null)
        return dt(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          la(i, !1);
        else {
          if (qe !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Ou(e), a !== null) {
                for (t.flags |= 128, la(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return ke(Ie, Ie.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Be() > zi && (t.flags |= 128, n = !0, la(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = Ou(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), la(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !Oe)
              return dt(t), null;
          } else
            2 * Be() - i.renderingStartTime > zi && r !== 1073741824 && (t.flags |= 128, n = !0, la(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Be(), t.sibling = null, r = Ie.current, ke(Ie, n ? r & 1 | 2 : r & 1), t) : (dt(t), null);
    case 22:
    case 23:
      return Jh(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? zt & 1073741824 && (dt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function g2(e, t) {
  switch (Oh(t), t.tag) {
    case 1:
      return Et(t.type) && Pu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Oi(), $e(Tt), $e(mt), Vh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Bh(t), null;
    case 13:
      if ($e(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        Ri();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return $e(Ie), null;
    case 4:
      return Oi(), null;
    case 10:
      return Fh(t.type._context), null;
    case 22:
    case 23:
      return Jh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yl = !1, pt = !1, y2 = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function ri(e, t) {
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
function gp(e, t, r) {
  try {
    r();
  } catch (n) {
    je(e, t, n);
  }
}
var Lg = !1;
function b2(e, t) {
  if (ep = wu, e = Hb(), Rh(e)) {
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
  for (tp = { focusedElem: e, selectionRange: r }, wu = !1, F = t; F !== null; )
    if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, F = e;
    else
      for (; F !== null; ) {
        t = F;
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
          e.return = t.return, F = e;
          break;
        }
        F = t.return;
      }
  return v = Lg, Lg = !1, v;
}
function za(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var o = n = n.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && gp(t, r, i);
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
function yp(e) {
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
function Vx(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Vx(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$r], delete t[ss], delete t[op], delete t[t2], delete t[r2])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Wx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jg(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wx(e.return))
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
function bp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = _u));
  else if (n !== 4 && (e = e.child, e !== null))
    for (bp(e, t, r), e = e.sibling; e !== null; )
      bp(e, t, r), e = e.sibling;
}
function xp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null))
    for (xp(e, t, r), e = e.sibling; e !== null; )
      xp(e, t, r), e = e.sibling;
}
var it = null, pr = !1;
function fn(e, t, r) {
  for (r = r.child; r !== null; )
    Ux(e, t, r), r = r.sibling;
}
function Ux(e, t, r) {
  if (Rr && typeof Rr.onCommitFiberUnmount == "function")
    try {
      Rr.onCommitFiberUnmount(dc, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      pt || ri(r, t);
    case 6:
      var n = it, o = pr;
      it = null, fn(e, t, r), it = n, pr = o, it !== null && (pr ? (e = it, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : it.removeChild(r.stateNode));
      break;
    case 18:
      it !== null && (pr ? (e = it, r = r.stateNode, e.nodeType === 8 ? Md(e.parentNode, r) : e.nodeType === 1 && Md(e, r), rs(e)) : Md(it, r.stateNode));
      break;
    case 4:
      n = it, o = pr, it = r.stateNode.containerInfo, pr = !0, fn(e, t, r), it = n, pr = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pt && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        o = n = n.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && gp(r, t, a), o = o.next;
        } while (o !== n);
      }
      fn(e, t, r);
      break;
    case 1:
      if (!pt && (ri(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          je(r, t, s);
        }
      fn(e, t, r);
      break;
    case 21:
      fn(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (pt = (n = pt) || r.memoizedState !== null, fn(e, t, r), pt = n) : fn(e, t, r);
      break;
    default:
      fn(e, t, r);
  }
}
function Ng(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new y2()), t.forEach(function(n) {
      var o = E2.bind(null, e, n);
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
                it = s.stateNode, pr = !1;
                break e;
              case 3:
                it = s.stateNode.containerInfo, pr = !0;
                break e;
              case 4:
                it = s.stateNode.containerInfo, pr = !0;
                break e;
            }
            s = s.return;
          }
        if (it === null)
          throw Error(O(160));
        Ux(i, a, o), it = null, pr = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        je(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Hx(t, e), t = t.sibling;
}
function Hx(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (cr(t, e), wr(e), n & 4) {
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
      cr(t, e), wr(e), n & 512 && r !== null && ri(r, r.return);
      break;
    case 5:
      if (cr(t, e), wr(e), n & 512 && r !== null && ri(r, r.return), e.flags & 32) {
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
            s === "input" && i.type === "radio" && i.name != null && fb(o, i), Uf(s, a);
            var u = Uf(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? gb(o, d) : c === "dangerouslySetInnerHTML" ? mb(o, d) : c === "children" ? Za(o, d) : yh(o, c, d, u);
            }
            switch (s) {
              case "input":
                jf(o, i);
                break;
              case "textarea":
                pb(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? mi(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? mi(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : mi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ss] = i;
          } catch (g) {
            je(e, e.return, g);
          }
      }
      break;
    case 6:
      if (cr(t, e), wr(e), n & 4) {
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
      if (cr(t, e), wr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          rs(t.containerInfo);
        } catch (g) {
          je(e, e.return, g);
        }
      break;
    case 4:
      cr(t, e), wr(e);
      break;
    case 13:
      cr(t, e), wr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Qh = Be())), n & 4 && Ng(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (pt = (u = pt) || c, cr(t, e), pt = u) : cr(t, e), wr(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (f = F, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  za(4, f, f.return);
                  break;
                case 1:
                  ri(f, f.return);
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
                  ri(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Vg(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, F = p) : Vg(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = vb("display", a));
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
      cr(t, e), wr(e), n & 4 && Ng(e);
      break;
    case 21:
      break;
    default:
      cr(
        t,
        e
      ), wr(e);
  }
}
function wr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Wx(r)) {
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
          var i = jg(e);
          xp(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = jg(e);
          bp(e, s, a);
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
function x2(e, t, r) {
  F = e, Gx(e);
}
function Gx(e, t, r) {
  for (var n = (e.mode & 1) !== 0; F !== null; ) {
    var o = F, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || yl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || pt;
        s = yl;
        var u = pt;
        if (yl = a, (pt = l) && !u)
          for (F = o; F !== null; )
            a = F, l = a.child, a.tag === 22 && a.memoizedState !== null ? Wg(o) : l !== null ? (l.return = a, F = l) : Wg(o);
        for (; i !== null; )
          F = i, Gx(i), i = i.sibling;
        F = o, yl = s, pt = u;
      }
      Bg(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, F = i) : Bg(e);
  }
}
function Bg(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pt || bc(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !pt)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : fr(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Cg(t, i, n);
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
                Cg(t, a, r);
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
        pt || t.flags & 512 && yp(t);
      } catch (f) {
        je(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (r = t.sibling, r !== null) {
      r.return = t.return, F = r;
      break;
    }
    F = t.return;
  }
}
function Vg(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      r.return = t.return, F = r;
      break;
    }
    F = t.return;
  }
}
function Wg(e) {
  for (; F !== null; ) {
    var t = F;
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
            yp(t);
          } catch (l) {
            je(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            yp(t);
          } catch (l) {
            je(t, a, l);
          }
      }
    } catch (l) {
      je(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, F = s;
      break;
    }
    F = t.return;
  }
}
var S2 = Math.ceil, Du = un.ReactCurrentDispatcher, qh = un.ReactCurrentOwner, tr = un.ReactCurrentBatchConfig, ae = 0, et = null, He = null, st = 0, zt = 0, ni = Wn(0), qe = 0, ps = null, Co = 0, xc = 0, Xh = 0, Da = null, Ct = null, Qh = 0, zi = 1 / 0, Vr = null, Fu = !1, Sp = null, Mn = null, bl = !1, _n = null, Lu = 0, Fa = 0, wp = null, Xl = -1, Ql = 0;
function xt() {
  return ae & 6 ? Be() : Xl !== -1 ? Xl : Xl = Be();
}
function On(e) {
  return e.mode & 1 ? ae & 2 && st !== 0 ? st & -st : o2.transition !== null ? (Ql === 0 && (Ql = $b()), Ql) : (e = ve, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Db(e.type)), e) : 1;
}
function gr(e, t, r, n) {
  if (50 < Fa)
    throw Fa = 0, wp = null, Error(O(185));
  Os(e, r, n), (!(ae & 2) || e !== et) && (e === et && (!(ae & 2) && (xc |= r), qe === 4 && Sn(e, st)), $t(e, n), r === 1 && ae === 0 && !(t.mode & 1) && (zi = Be() + 500, vc && Un()));
}
function $t(e, t) {
  var r = e.callbackNode;
  oT(e, t);
  var n = Su(e, e === et ? st : 0);
  if (n === 0)
    r !== null && Zv(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Zv(r), t === 1)
      e.tag === 0 ? n2(Ug.bind(null, e)) : tx(Ug.bind(null, e)), JT(function() {
        !(ae & 6) && Un();
      }), r = null;
    else {
      switch (Ab(n)) {
        case 1:
          r = kh;
          break;
        case 4:
          r = Tb;
          break;
        case 16:
          r = xu;
          break;
        case 536870912:
          r = Eb;
          break;
        default:
          r = xu;
      }
      r = eS(r, Kx.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function Kx(e, t) {
  if (Xl = -1, Ql = 0, ae & 6)
    throw Error(O(327));
  var r = e.callbackNode;
  if (xi() && e.callbackNode !== r)
    return null;
  var n = Su(e, e === et ? st : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = ju(e, n);
  else {
    t = n;
    var o = ae;
    ae |= 2;
    var i = qx();
    (et !== e || st !== t) && (Vr = null, zi = Be() + 500, fo(e, t));
    do
      try {
        C2();
        break;
      } catch (s) {
        Yx(e, s);
      }
    while (!0);
    Dh(), Du.current = i, ae = o, He !== null ? t = 0 : (et = null, st = 0, t = qe);
  }
  if (t !== 0) {
    if (t === 2 && (o = qf(e), o !== 0 && (n = o, t = kp(e, o))), t === 1)
      throw r = ps, fo(e, 0), Sn(e, n), $t(e, Be()), r;
    if (t === 6)
      Sn(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !w2(o) && (t = ju(e, n), t === 2 && (i = qf(e), i !== 0 && (n = i, t = kp(e, i))), t === 1))
        throw r = ps, fo(e, 0), Sn(e, n), $t(e, Be()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          eo(e, Ct, Vr);
          break;
        case 3:
          if (Sn(e, n), (n & 130023424) === n && (t = Qh + 500 - Be(), 10 < t)) {
            if (Su(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              xt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = np(eo.bind(null, e, Ct, Vr), t);
            break;
          }
          eo(e, Ct, Vr);
          break;
        case 4:
          if (Sn(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - vr(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = Be() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * S2(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = np(eo.bind(null, e, Ct, Vr), n);
            break;
          }
          eo(e, Ct, Vr);
          break;
        case 5:
          eo(e, Ct, Vr);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return $t(e, Be()), e.callbackNode === r ? Kx.bind(null, e) : null;
}
function kp(e, t) {
  var r = Da;
  return e.current.memoizedState.isDehydrated && (fo(e, t).flags |= 256), e = ju(e, t), e !== 2 && (t = Ct, Ct = r, t !== null && Cp(t)), e;
}
function Cp(e) {
  Ct === null ? Ct = e : Ct.push.apply(Ct, e);
}
function w2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n], i = o.getSnapshot;
          o = o.value;
          try {
            if (!br(i(), o))
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
function Sn(e, t) {
  for (t &= ~Xh, t &= ~xc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - vr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Ug(e) {
  if (ae & 6)
    throw Error(O(327));
  xi();
  var t = Su(e, 0);
  if (!(t & 1))
    return $t(e, Be()), null;
  var r = ju(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = qf(e);
    n !== 0 && (t = n, r = kp(e, n));
  }
  if (r === 1)
    throw r = ps, fo(e, 0), Sn(e, t), $t(e, Be()), r;
  if (r === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, eo(e, Ct, Vr), $t(e, Be()), null;
}
function Zh(e, t) {
  var r = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ae = r, ae === 0 && (zi = Be() + 500, vc && Un());
  }
}
function _o(e) {
  _n !== null && _n.tag === 0 && !(ae & 6) && xi();
  var t = ae;
  ae |= 1;
  var r = tr.transition, n = ve;
  try {
    if (tr.transition = null, ve = 1, e)
      return e();
  } finally {
    ve = n, tr.transition = r, ae = t, !(ae & 6) && Un();
  }
}
function Jh() {
  zt = ni.current, $e(ni);
}
function fo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, ZT(r)), He !== null)
    for (r = He.return; r !== null; ) {
      var n = r;
      switch (Oh(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && Pu();
          break;
        case 3:
          Oi(), $e(Tt), $e(mt), Vh();
          break;
        case 5:
          Bh(n);
          break;
        case 4:
          Oi();
          break;
        case 13:
          $e(Ie);
          break;
        case 19:
          $e(Ie);
          break;
        case 10:
          Fh(n.type._context);
          break;
        case 22:
        case 23:
          Jh();
      }
      r = r.return;
    }
  if (et = e, He = e = In(e.current, null), st = zt = t, qe = 0, ps = null, Xh = xc = Co = 0, Ct = Da = null, so !== null) {
    for (t = 0; t < so.length; t++)
      if (r = so[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var o = n.next, i = r.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, n.next = a;
        }
        r.pending = n;
      }
    so = null;
  }
  return e;
}
function Yx(e, t) {
  do {
    var r = He;
    try {
      if (Dh(), Kl.current = zu, Iu) {
        for (var n = De.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        Iu = !1;
      }
      if (ko = 0, Je = Ye = De = null, Ia = !1, cs = 0, qh.current = null, r === null || r.return === null) {
        qe = 1, ps = t, He = null;
        break;
      }
      e: {
        var i = e, a = r.return, s = r, l = t;
        if (t = st, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = Rg(a);
          if (p !== null) {
            p.flags &= -257, Mg(p, a, s, i, t), p.mode & 1 && Ag(i, u, t), t = p, l = u;
            var v = t.updateQueue;
            if (v === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(l), t.updateQueue = g;
            } else
              v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Ag(i, u, t), em();
              break e;
            }
            l = Error(O(426));
          }
        } else if (Oe && s.mode & 1) {
          var x = Rg(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), Mg(x, a, s, i, t), Ih(Ii(l, s));
            break e;
          }
        }
        i = l = Ii(l, s), qe !== 4 && (qe = 2), Da === null ? Da = [i] : Da.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Rx(i, l, t);
              kg(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, y = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Mn === null || !Mn.has(y)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Mx(i, s, t);
                kg(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Qx(r);
    } catch (C) {
      t = C, He === r && r !== null && (He = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function qx() {
  var e = Du.current;
  return Du.current = zu, e === null ? zu : e;
}
function em() {
  (qe === 0 || qe === 3 || qe === 2) && (qe = 4), et === null || !(Co & 268435455) && !(xc & 268435455) || Sn(et, st);
}
function ju(e, t) {
  var r = ae;
  ae |= 2;
  var n = qx();
  (et !== e || st !== t) && (Vr = null, fo(e, t));
  do
    try {
      k2();
      break;
    } catch (o) {
      Yx(e, o);
    }
  while (!0);
  if (Dh(), ae = r, Du.current = n, He !== null)
    throw Error(O(261));
  return et = null, st = 0, qe;
}
function k2() {
  for (; He !== null; )
    Xx(He);
}
function C2() {
  for (; He !== null && !qP(); )
    Xx(He);
}
function Xx(e) {
  var t = Jx(e.alternate, e, zt);
  e.memoizedProps = e.pendingProps, t === null ? Qx(e) : He = t, qh.current = null;
}
function Qx(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = g2(r, t), r !== null) {
        r.flags &= 32767, He = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        qe = 6, He = null;
        return;
      }
    } else if (r = v2(r, t, zt), r !== null) {
      He = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      He = t;
      return;
    }
    He = t = e;
  } while (t !== null);
  qe === 0 && (qe = 5);
}
function eo(e, t, r) {
  var n = ve, o = tr.transition;
  try {
    tr.transition = null, ve = 1, _2(e, t, r, n);
  } finally {
    tr.transition = o, ve = n;
  }
  return null;
}
function _2(e, t, r, n) {
  do
    xi();
  while (_n !== null);
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
  if (iT(e, i), e === et && (He = et = null, st = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || bl || (bl = !0, eS(xu, function() {
    return xi(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = tr.transition, tr.transition = null;
    var a = ve;
    ve = 1;
    var s = ae;
    ae |= 4, qh.current = null, b2(e, r), Hx(r, e), HT(tp), wu = !!ep, tp = ep = null, e.current = r, x2(r), XP(), ae = s, ve = a, tr.transition = i;
  } else
    e.current = r;
  if (bl && (bl = !1, _n = e, Lu = o), i = e.pendingLanes, i === 0 && (Mn = null), JP(r.stateNode), $t(e, Be()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Fu)
    throw Fu = !1, e = Sp, Sp = null, e;
  return Lu & 1 && e.tag !== 0 && xi(), i = e.pendingLanes, i & 1 ? e === wp ? Fa++ : (Fa = 0, wp = e) : Fa = 0, Un(), null;
}
function xi() {
  if (_n !== null) {
    var e = Ab(Lu), t = tr.transition, r = ve;
    try {
      if (tr.transition = null, ve = 16 > e ? 16 : e, _n === null)
        var n = !1;
      else {
        if (e = _n, _n = null, Lu = 0, ae & 6)
          throw Error(O(331));
        var o = ae;
        for (ae |= 4, F = e.current; F !== null; ) {
          var i = F, a = i.child;
          if (F.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      za(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, F = d;
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling, p = c.return;
                      if (Vx(c), c === u) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        f.return = p, F = f;
                        break;
                      }
                      F = p;
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
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null)
            a.return = i, F = a;
          else
            e:
              for (; F !== null; ) {
                if (i = F, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      za(9, i, i.return);
                  }
                var m = i.sibling;
                if (m !== null) {
                  m.return = i.return, F = m;
                  break e;
                }
                F = i.return;
              }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          a = F;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null)
            y.return = a, F = y;
          else
            e:
              for (a = h; F !== null; ) {
                if (s = F, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bc(9, s);
                    }
                  } catch (C) {
                    je(s, s.return, C);
                  }
                if (s === a) {
                  F = null;
                  break e;
                }
                var w = s.sibling;
                if (w !== null) {
                  w.return = s.return, F = w;
                  break e;
                }
                F = s.return;
              }
        }
        if (ae = o, Un(), Rr && typeof Rr.onPostCommitFiberRoot == "function")
          try {
            Rr.onPostCommitFiberRoot(dc, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      ve = r, tr.transition = t;
    }
  }
  return !1;
}
function Hg(e, t, r) {
  t = Ii(r, t), t = Rx(e, t, 1), e = Rn(e, t, 1), t = xt(), e !== null && (Os(e, 1, t), $t(e, t));
}
function je(e, t, r) {
  if (e.tag === 3)
    Hg(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hg(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Mn === null || !Mn.has(n))) {
          e = Ii(r, e), e = Mx(t, e, 1), t = Rn(t, e, 1), e = xt(), t !== null && (Os(t, 1, e), $t(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function P2(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = xt(), e.pingedLanes |= e.suspendedLanes & r, et === e && (st & r) === r && (qe === 4 || qe === 3 && (st & 130023424) === st && 500 > Be() - Qh ? fo(e, 0) : Xh |= r), $t(e, t);
}
function Zx(e, t) {
  t === 0 && (e.mode & 1 ? (t = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : t = 1);
  var r = xt();
  e = nn(e, t), e !== null && (Os(e, t, r), $t(e, r));
}
function T2(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), Zx(e, r);
}
function E2(e, t) {
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
  n !== null && n.delete(t), Zx(e, r);
}
var Jx;
Jx = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Tt.current)
      Pt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return Pt = !1, m2(e, t, r);
      Pt = !!(e.flags & 131072);
    }
  else
    Pt = !1, Oe && t.flags & 1048576 && rx(t, $u, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      ql(e, t), e = t.pendingProps;
      var o = Ai(t, mt.current);
      bi(t, r), o = Uh(null, t, n, e, o, r);
      var i = Hh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Et(n) ? (i = !0, Tu(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, jh(t), o.updater = gc, t.stateNode = o, o._reactInternals = t, cp(t, n, e, r), t = pp(null, t, n, !0, i, r)) : (t.tag = 0, Oe && i && Mh(t), gt(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (ql(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = A2(n), e = fr(n, e), o) {
          case 0:
            t = fp(null, t, n, e, r);
            break e;
          case 1:
            t = zg(null, t, n, e, r);
            break e;
          case 11:
            t = Og(null, t, n, e, r);
            break e;
          case 14:
            t = Ig(null, t, n, fr(n.type, e), r);
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
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : fr(n, o), fp(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : fr(n, o), zg(e, t, n, o, r);
    case 3:
      e: {
        if (Dx(t), e === null)
          throw Error(O(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, ax(e, t), Mu(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Ii(Error(O(423)), t), t = Dg(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = Ii(Error(O(424)), t), t = Dg(e, t, n, r, o);
            break e;
          } else
            for (Dt = An(t.stateNode.containerInfo.firstChild), Ft = t, Oe = !0, hr = null, r = cx(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (Ri(), n === o) {
            t = on(e, t, r);
            break e;
          }
          gt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return dx(t), e === null && sp(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, rp(n, o) ? a = null : i !== null && rp(n, i) && (t.flags |= 32), zx(e, t), gt(e, t, a, r), t.child;
    case 6:
      return e === null && sp(t), null;
    case 13:
      return Fx(e, t, r);
    case 4:
      return Nh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Mi(t, null, n, r) : gt(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : fr(n, o), Og(e, t, n, o, r);
    case 7:
      return gt(e, t, t.pendingProps, r), t.child;
    case 8:
      return gt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return gt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, ke(Au, n._currentValue), n._currentValue = a, i !== null)
          if (br(i.value, a)) {
            if (i.children === o.children && !Tt.current) {
              t = on(e, t, r);
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
                      l = Qr(-1, r & -r), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), lp(
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
                a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), lp(a, r, t), a = i.sibling;
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
        gt(e, t, o.children, r), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, n = t.pendingProps.children, bi(t, r), o = or(o), n = n(o), t.flags |= 1, gt(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = fr(n, t.pendingProps), o = fr(n.type, o), Ig(e, t, n, o, r);
    case 15:
      return Ox(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : fr(n, o), ql(e, t), t.tag = 1, Et(n) ? (e = !0, Tu(t)) : e = !1, bi(t, r), lx(t, n, o), cp(t, n, o, r), pp(null, t, n, !0, e, r);
    case 19:
      return Lx(e, t, r);
    case 22:
      return Ix(e, t, r);
  }
  throw Error(O(156, t.tag));
};
function eS(e, t) {
  return Pb(e, t);
}
function $2(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Jt(e, t, r, n) {
  return new $2(e, t, r, n);
}
function tm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function A2(e) {
  if (typeof e == "function")
    return tm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === xh)
      return 11;
    if (e === Sh)
      return 14;
  }
  return 2;
}
function In(e, t) {
  var r = e.alternate;
  return r === null ? (r = Jt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Zl(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    tm(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case Ko:
          return po(r.children, o, i, t);
        case bh:
          a = 8, o |= 8;
          break;
        case If:
          return e = Jt(12, r, t, o | 2), e.elementType = If, e.lanes = i, e;
        case zf:
          return e = Jt(13, r, t, o), e.elementType = zf, e.lanes = i, e;
        case Df:
          return e = Jt(19, r, t, o), e.elementType = Df, e.lanes = i, e;
        case ub:
          return Sc(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case sb:
                a = 10;
                break e;
              case lb:
                a = 9;
                break e;
              case xh:
                a = 11;
                break e;
              case Sh:
                a = 14;
                break e;
              case gn:
                a = 16, n = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = Jt(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function po(e, t, r, n) {
  return e = Jt(7, e, n, t), e.lanes = r, e;
}
function Sc(e, t, r, n) {
  return e = Jt(22, e, n, t), e.elementType = ub, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Nd(e, t, r) {
  return e = Jt(6, e, null, t), e.lanes = r, e;
}
function Bd(e, t, r) {
  return t = Jt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function R2(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Sd(0), this.expirationTimes = Sd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Sd(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function rm(e, t, r, n, o, i, a, s, l) {
  return e = new R2(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Jt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, jh(i), e;
}
function M2(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Go, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function tS(e) {
  if (!e)
    return jn;
  e = e._reactInternals;
  e: {
    if (Ao(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Et(t.type)) {
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
    if (Et(r))
      return ex(e, r, t);
  }
  return t;
}
function rS(e, t, r, n, o, i, a, s, l) {
  return e = rm(r, n, !0, e, o, i, a, s, l), e.context = tS(null), r = e.current, n = xt(), o = On(r), i = Qr(n, o), i.callback = t ?? null, Rn(r, i, o), e.current.lanes = o, Os(e, o, n), $t(e, n), e;
}
function wc(e, t, r, n) {
  var o = t.current, i = xt(), a = On(o);
  return r = tS(r), t.context === null ? t.context = r : t.pendingContext = r, t = Qr(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Rn(o, t, a), e !== null && (gr(e, o, a, i), Gl(e, o, a)), a;
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
function Gg(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function nm(e, t) {
  Gg(e, t), (e = e.alternate) && Gg(e, t);
}
function O2() {
  return null;
}
var nS = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function om(e) {
  this._internalRoot = e;
}
kc.prototype.render = om.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  wc(e, t, null, null);
};
kc.prototype.unmount = om.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _o(function() {
      wc(null, e, null, null);
    }), t[rn] = null;
  }
};
function kc(e) {
  this._internalRoot = e;
}
kc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ob();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < xn.length && t !== 0 && t < xn[r].priority; r++)
      ;
    xn.splice(r, 0, e), r === 0 && zb(e);
  }
};
function im(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Kg() {
}
function I2(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = Nu(a);
        i.call(u);
      };
    }
    var a = rS(t, n, e, 0, null, !1, !1, "", Kg);
    return e._reactRootContainer = a, e[rn] = a.current, is(e.nodeType === 8 ? e.parentNode : e), _o(), a;
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
  var l = rm(e, 0, !1, null, null, !1, !1, "", Kg);
  return e._reactRootContainer = l, e[rn] = l.current, is(e.nodeType === 8 ? e.parentNode : e), _o(function() {
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
    a = I2(r, t, e, o, n);
  return Nu(a);
}
Rb = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = xa(t.pendingLanes);
        r !== 0 && (Ch(t, r | 1), $t(t, Be()), !(ae & 6) && (zi = Be() + 500, Un()));
      }
      break;
    case 13:
      _o(function() {
        var n = nn(e, 1);
        if (n !== null) {
          var o = xt();
          gr(n, e, 1, o);
        }
      }), nm(e, 1);
  }
};
_h = function(e) {
  if (e.tag === 13) {
    var t = nn(e, 134217728);
    if (t !== null) {
      var r = xt();
      gr(t, e, 134217728, r);
    }
    nm(e, 134217728);
  }
};
Mb = function(e) {
  if (e.tag === 13) {
    var t = On(e), r = nn(e, t);
    if (r !== null) {
      var n = xt();
      gr(r, e, t, n);
    }
    nm(e, t);
  }
};
Ob = function() {
  return ve;
};
Ib = function(e, t) {
  var r = ve;
  try {
    return ve = e, t();
  } finally {
    ve = r;
  }
};
Gf = function(e, t, r) {
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
            db(n), jf(n, o);
          }
        }
      }
      break;
    case "textarea":
      pb(e, r);
      break;
    case "select":
      t = r.value, t != null && mi(e, !!r.multiple, t, !1);
  }
};
xb = Zh;
Sb = _o;
var z2 = { usingClientEntryPoint: !1, Events: [zs, Qo, mc, yb, bb, Zh] }, ua = { findFiberByHostInstance: ao, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, D2 = { bundleType: ua.bundleType, version: ua.version, rendererPackageName: ua.rendererPackageName, rendererConfig: ua.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: un.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Cb(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ua.findFiberByHostInstance || O2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xl.isDisabled && xl.supportsFiber)
    try {
      dc = xl.inject(D2), Rr = xl;
    } catch {
    }
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z2;
Wt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!im(t))
    throw Error(O(200));
  return M2(e, t, null, r);
};
Wt.createRoot = function(e, t) {
  if (!im(e))
    throw Error(O(299));
  var r = !1, n = "", o = nS;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = rm(e, 1, !1, null, null, r, !1, n, o), e[rn] = t.current, is(e.nodeType === 8 ? e.parentNode : e), new om(t);
};
Wt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = Cb(t), e = e === null ? null : e.stateNode, e;
};
Wt.flushSync = function(e) {
  return _o(e);
};
Wt.hydrate = function(e, t, r) {
  if (!Cc(t))
    throw Error(O(200));
  return _c(null, e, t, !0, r);
};
Wt.hydrateRoot = function(e, t, r) {
  if (!im(e))
    throw Error(O(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = nS;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = rS(t, null, e, 1, r ?? null, o, !1, i, a), e[rn] = t.current, is(e), n)
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
  return e._reactRootContainer ? (_o(function() {
    _c(null, null, e, !1, function() {
      e._reactRootContainer = null, e[rn] = null;
    });
  }), !0) : !1;
};
Wt.unstable_batchedUpdates = Zh;
Wt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!Cc(r))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return _c(e, t, r, !1, n);
};
Wt.version = "18.2.0-next-9e3b772b8-20220608";
function oS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oS);
    } catch (e) {
      console.error(e);
    }
}
oS(), rb.exports = Wt;
var am = rb.exports, Yg = am;
Mf.createRoot = Yg.createRoot, Mf.hydrateRoot = Yg.hydrateRoot;
var iS = "Expected a function", qg = NaN, F2 = "[object Symbol]", L2 = /^\s+|\s+$/g, j2 = /^[-+]0x[0-9a-f]+$/i, N2 = /^0b[01]+$/i, B2 = /^0o[0-7]+$/i, V2 = parseInt, W2 = typeof kn == "object" && kn && kn.Object === Object && kn, U2 = typeof self == "object" && self && self.Object === Object && self, H2 = W2 || U2 || Function("return this")(), G2 = Object.prototype, K2 = G2.toString, Y2 = Math.max, q2 = Math.min, Vd = function() {
  return H2.Date.now();
};
function X2(e, t, r) {
  var n, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(iS);
  t = Xg(t) || 0, Bu(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? Y2(Xg(r.maxWait) || 0, t) : i, f = "trailing" in r ? !!r.trailing : f);
  function p(E) {
    var _ = n, $ = o;
    return n = o = void 0, u = E, a = e.apply($, _), a;
  }
  function v(E) {
    return u = E, s = setTimeout(m, t), c ? p(E) : a;
  }
  function g(E) {
    var _ = E - l, $ = E - u, R = t - _;
    return d ? q2(R, i - $) : R;
  }
  function x(E) {
    var _ = E - l, $ = E - u;
    return l === void 0 || _ >= t || _ < 0 || d && $ >= i;
  }
  function m() {
    var E = Vd();
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
    return s === void 0 ? a : h(Vd());
  }
  function C() {
    var E = Vd(), _ = x(E);
    if (n = arguments, o = this, l = E, _) {
      if (s === void 0)
        return v(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return C.cancel = y, C.flush = w, C;
}
function Q2(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(iS);
  return Bu(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), X2(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
function Bu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Z2(e) {
  return !!e && typeof e == "object";
}
function J2(e) {
  return typeof e == "symbol" || Z2(e) && K2.call(e) == F2;
}
function Xg(e) {
  if (typeof e == "number")
    return e;
  if (J2(e))
    return qg;
  if (Bu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Bu(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(L2, "");
  var r = N2.test(e);
  return r || B2.test(e) ? V2(e.slice(2), r ? 2 : 8) : j2.test(e) ? qg : +e;
}
var eE = Q2;
const tE = /* @__PURE__ */ Rs(eE);
function rE(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function nE(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var oE = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(nE(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = rE(o);
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
}(), ft = "-ms-", Vu = "-moz-", ce = "-webkit-", aS = "comm", sm = "rule", lm = "decl", iE = "@import", sS = "@keyframes", aE = "@layer", sE = Math.abs, Pc = String.fromCharCode, lE = Object.assign;
function uE(e, t) {
  return at(e, 0) ^ 45 ? (((t << 2 ^ at(e, 0)) << 2 ^ at(e, 1)) << 2 ^ at(e, 2)) << 2 ^ at(e, 3) : 0;
}
function lS(e) {
  return e.trim();
}
function cE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function de(e, t, r) {
  return e.replace(t, r);
}
function _p(e, t) {
  return e.indexOf(t);
}
function at(e, t) {
  return e.charCodeAt(t) | 0;
}
function hs(e, t, r) {
  return e.slice(t, r);
}
function Tr(e) {
  return e.length;
}
function um(e) {
  return e.length;
}
function Sl(e, t) {
  return t.push(e), e;
}
function dE(e, t) {
  return e.map(t).join("");
}
var Tc = 1, Di = 1, uS = 0, Mt = 0, Ue = 0, Yi = "";
function Ec(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Tc, column: Di, length: a, return: "" };
}
function ca(e, t) {
  return lE(Ec("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function fE() {
  return Ue;
}
function pE() {
  return Ue = Mt > 0 ? at(Yi, --Mt) : 0, Di--, Ue === 10 && (Di = 1, Tc--), Ue;
}
function Lt() {
  return Ue = Mt < uS ? at(Yi, Mt++) : 0, Di++, Ue === 10 && (Di = 1, Tc++), Ue;
}
function Or() {
  return at(Yi, Mt);
}
function Jl() {
  return Mt;
}
function Fs(e, t) {
  return hs(Yi, e, t);
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
function cS(e) {
  return Tc = Di = 1, uS = Tr(Yi = e), Mt = 0, [];
}
function dS(e) {
  return Yi = "", e;
}
function eu(e) {
  return lS(Fs(Mt - 1, Pp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hE(e) {
  for (; (Ue = Or()) && Ue < 33; )
    Lt();
  return ms(e) > 2 || ms(Ue) > 3 ? "" : " ";
}
function mE(e, t) {
  for (; --t && Lt() && !(Ue < 48 || Ue > 102 || Ue > 57 && Ue < 65 || Ue > 70 && Ue < 97); )
    ;
  return Fs(e, Jl() + (t < 6 && Or() == 32 && Lt() == 32));
}
function Pp(e) {
  for (; Lt(); )
    switch (Ue) {
      case e:
        return Mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pp(Ue);
        break;
      case 40:
        e === 41 && Pp(e);
        break;
      case 92:
        Lt();
        break;
    }
  return Mt;
}
function vE(e, t) {
  for (; Lt() && e + Ue !== 57; )
    if (e + Ue === 84 && Or() === 47)
      break;
  return "/*" + Fs(t, Mt - 1) + "*" + Pc(e === 47 ? e : Lt());
}
function gE(e) {
  for (; !ms(Or()); )
    Lt();
  return Fs(e, Mt);
}
function yE(e) {
  return dS(tu("", null, null, null, [""], e = cS(e), 0, [0], e));
}
function tu(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, v = 0, g = 1, x = 1, m = 1, h = 0, y = "", w = o, C = i, E = n, _ = y; x; )
    switch (v = h, h = Lt()) {
      case 40:
        if (v != 108 && at(_, d - 1) == 58) {
          _p(_ += de(eu(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += eu(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += hE(v);
        break;
      case 92:
        _ += mE(Jl() - 1, 7);
        continue;
      case 47:
        switch (Or()) {
          case 42:
          case 47:
            Sl(bE(vE(Lt(), Jl()), t, r), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        s[u++] = Tr(_) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (_ = de(_, /\f/g, "")), p > 0 && Tr(_) - d && Sl(p > 32 ? Zg(_ + ";", n, r, d - 1) : Zg(de(_, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if (Sl(E = Qg(_, t, r, u, c, o, s, y, w = [], C = [], d), i), h === 123)
              if (c === 0)
                tu(_, t, E, E, w, i, d, s, C);
              else
                switch (f === 99 && at(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tu(e, E, E, n && Sl(Qg(e, E, E, 0, 0, o, s, y, o, w = [], d), C), o, C, d, s, n ? w : C);
                    break;
                  default:
                    tu(_, E, E, E, [""], C, 0, s, C);
                }
        }
        u = c = p = 0, g = m = 1, y = _ = "", d = a;
        break;
      case 58:
        d = 1 + Tr(_), p = v;
      default:
        if (g < 1) {
          if (h == 123)
            --g;
          else if (h == 125 && g++ == 0 && pE() == 125)
            continue;
        }
        switch (_ += Pc(h), h * g) {
          case 38:
            m = c > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            s[u++] = (Tr(_) - 1) * m, m = 1;
            break;
          case 64:
            Or() === 45 && (_ += eu(Lt())), f = Or(), c = d = Tr(y = _ += gE(Jl())), h++;
            break;
          case 45:
            v === 45 && Tr(_) == 2 && (g = 0);
        }
    }
  return i;
}
function Qg(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = um(f), v = 0, g = 0, x = 0; v < n; ++v)
    for (var m = 0, h = hs(e, d + 1, d = sE(g = a[v])), y = e; m < p; ++m)
      (y = lS(g > 0 ? f[m] + " " + h : de(h, /&\f/g, f[m]))) && (l[x++] = y);
  return Ec(e, t, r, o === 0 ? sm : s, l, u, c);
}
function bE(e, t, r) {
  return Ec(e, t, r, aS, Pc(fE()), hs(e, 2, -2), 0);
}
function Zg(e, t, r, n) {
  return Ec(e, t, r, lm, hs(e, 0, n), hs(e, n + 1, -1), n);
}
function Si(e, t) {
  for (var r = "", n = um(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function xE(e, t, r, n) {
  switch (e.type) {
    case aE:
      if (e.children.length)
        break;
    case iE:
    case lm:
      return e.return = e.return || e.value;
    case aS:
      return "";
    case sS:
      return e.return = e.value + "{" + Si(e.children, n) + "}";
    case sm:
      e.value = e.props.join(",");
  }
  return Tr(r = Si(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function SE(e) {
  var t = um(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function wE(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Jg = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function fS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var kE = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Or(), o === 38 && i === 12 && (r[n] = 1), !ms(i); )
    Lt();
  return Fs(t, Mt);
}, CE = function(t, r) {
  var n = -1, o = 44;
  do
    switch (ms(o)) {
      case 0:
        o === 38 && Or() === 12 && (r[n] = 1), t[n] += kE(Mt - 1, r, n);
        break;
      case 2:
        t[n] += eu(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Or() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Pc(o);
    }
  while (o = Lt());
  return t;
}, _E = function(t, r) {
  return dS(CE(cS(t), r));
}, e0 = /* @__PURE__ */ new WeakMap(), PE = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !e0.get(n)) && !o) {
      e0.set(t, !0);
      for (var i = [], a = _E(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, TE = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function pS(e, t) {
  switch (uE(e, t)) {
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
      return ce + e + Vu + e + ft + e + e;
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
      if (Tr(e) - 1 - t > 6)
        switch (at(e, t + 1)) {
          case 109:
            if (at(e, t + 4) !== 45)
              break;
          case 102:
            return de(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + Vu + (at(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~_p(e, "stretch") ? pS(de(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (at(e, t + 1) !== 115)
        break;
    case 6444:
      switch (at(e, Tr(e) - 3 - (~_p(e, "!important") && 10))) {
        case 107:
          return de(e, ":", ":" + ce) + e;
        case 101:
          return de(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (at(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (at(e, t + 11)) {
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
var EE = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case lm:
        t.return = pS(t.value, t.length);
        break;
      case sS:
        return Si([ca(t, {
          value: de(t.value, "@", "@" + ce)
        })], o);
      case sm:
        if (t.length)
          return dE(t.props, function(i) {
            switch (cE(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Si([ca(t, {
                  props: [de(i, /:(read-\w+)/, ":" + Vu + "$1")]
                })], o);
              case "::placeholder":
                return Si([ca(t, {
                  props: [de(i, /:(plac\w+)/, ":" + ce + "input-$1")]
                }), ca(t, {
                  props: [de(i, /:(plac\w+)/, ":" + Vu + "$1")]
                }), ca(t, {
                  props: [de(i, /:(plac\w+)/, ft + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, $E = [EE], AE = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var x = g.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || $E, i = {}, a, s = [];
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
  var l, u = [PE, TE];
  {
    var c, d = [xE, wE(function(g) {
      c.insert(g);
    })], f = SE(u.concat(o, d)), p = function(x) {
      return Si(yE(x), f);
    };
    l = function(x, m, h, y) {
      c = h, p(x ? x + "{" + m.styles + "}" : m.styles), y && (v.inserted[m.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new oE({
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
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Po.apply(this, arguments);
}
var hS = { exports: {} }, ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt = typeof Symbol == "function" && Symbol.for, cm = tt ? Symbol.for("react.element") : 60103, dm = tt ? Symbol.for("react.portal") : 60106, $c = tt ? Symbol.for("react.fragment") : 60107, Ac = tt ? Symbol.for("react.strict_mode") : 60108, Rc = tt ? Symbol.for("react.profiler") : 60114, Mc = tt ? Symbol.for("react.provider") : 60109, Oc = tt ? Symbol.for("react.context") : 60110, fm = tt ? Symbol.for("react.async_mode") : 60111, Ic = tt ? Symbol.for("react.concurrent_mode") : 60111, zc = tt ? Symbol.for("react.forward_ref") : 60112, Dc = tt ? Symbol.for("react.suspense") : 60113, RE = tt ? Symbol.for("react.suspense_list") : 60120, Fc = tt ? Symbol.for("react.memo") : 60115, Lc = tt ? Symbol.for("react.lazy") : 60116, ME = tt ? Symbol.for("react.block") : 60121, OE = tt ? Symbol.for("react.fundamental") : 60117, IE = tt ? Symbol.for("react.responder") : 60118, zE = tt ? Symbol.for("react.scope") : 60119;
function Ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case cm:
        switch (e = e.type, e) {
          case fm:
          case Ic:
          case $c:
          case Rc:
          case Ac:
          case Dc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Oc:
              case zc:
              case Lc:
              case Fc:
              case Mc:
                return e;
              default:
                return t;
            }
        }
      case dm:
        return t;
    }
  }
}
function mS(e) {
  return Ht(e) === Ic;
}
ge.AsyncMode = fm;
ge.ConcurrentMode = Ic;
ge.ContextConsumer = Oc;
ge.ContextProvider = Mc;
ge.Element = cm;
ge.ForwardRef = zc;
ge.Fragment = $c;
ge.Lazy = Lc;
ge.Memo = Fc;
ge.Portal = dm;
ge.Profiler = Rc;
ge.StrictMode = Ac;
ge.Suspense = Dc;
ge.isAsyncMode = function(e) {
  return mS(e) || Ht(e) === fm;
};
ge.isConcurrentMode = mS;
ge.isContextConsumer = function(e) {
  return Ht(e) === Oc;
};
ge.isContextProvider = function(e) {
  return Ht(e) === Mc;
};
ge.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cm;
};
ge.isForwardRef = function(e) {
  return Ht(e) === zc;
};
ge.isFragment = function(e) {
  return Ht(e) === $c;
};
ge.isLazy = function(e) {
  return Ht(e) === Lc;
};
ge.isMemo = function(e) {
  return Ht(e) === Fc;
};
ge.isPortal = function(e) {
  return Ht(e) === dm;
};
ge.isProfiler = function(e) {
  return Ht(e) === Rc;
};
ge.isStrictMode = function(e) {
  return Ht(e) === Ac;
};
ge.isSuspense = function(e) {
  return Ht(e) === Dc;
};
ge.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === $c || e === Ic || e === Rc || e === Ac || e === Dc || e === RE || typeof e == "object" && e !== null && (e.$$typeof === Lc || e.$$typeof === Fc || e.$$typeof === Mc || e.$$typeof === Oc || e.$$typeof === zc || e.$$typeof === OE || e.$$typeof === IE || e.$$typeof === zE || e.$$typeof === ME);
};
ge.typeOf = Ht;
hS.exports = ge;
var DE = hS.exports, vS = DE, FE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, LE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, gS = {};
gS[vS.ForwardRef] = FE;
gS[vS.Memo] = LE;
var jE = !0;
function NE(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var yS = function(t, r, n) {
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
  jE === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, bS = function(t, r, n) {
  yS(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function BE(e) {
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
var VE = {
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
}, WE = /[A-Z]|^ms/g, UE = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xS = function(t) {
  return t.charCodeAt(1) === 45;
}, t0 = function(t) {
  return t != null && typeof t != "boolean";
}, Wd = /* @__PURE__ */ fS(function(e) {
  return xS(e) ? e : e.replace(WE, "-$&").toLowerCase();
}), r0 = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(UE, function(n, o, i) {
          return Er = {
            name: o,
            styles: i,
            next: Er
          }, o;
        });
  }
  return VE[t] !== 1 && !xS(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
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
        return Er = {
          name: r.name,
          styles: r.styles,
          next: Er
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Er = {
              name: n.name,
              styles: n.styles,
              next: Er
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return HE(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Er, a = r(e);
        return Er = i, vs(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function HE(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += vs(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : t0(a) && (n += Wd(i) + ":" + r0(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          t0(a[s]) && (n += Wd(i) + ":" + r0(i, a[s]) + ";");
      else {
        var l = vs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Wd(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var n0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Er, pm = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Er = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += vs(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += vs(n, r, t[s]), o && (i += a[s]);
  n0.lastIndex = 0;
  for (var l = "", u; (u = n0.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = BE(i) + l;
  return {
    name: c,
    styles: i,
    next: Er
  };
}, GE = function(t) {
  return t();
}, SS = Vv.useInsertionEffect ? Vv.useInsertionEffect : !1, KE = SS || GE, o0 = SS || b.useLayoutEffect, wS = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ AE({
    key: "css"
  }) : null
);
wS.Provider;
var kS = function(t) {
  return /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = b.useContext(wS);
    return t(r, o, n);
  });
}, gs = /* @__PURE__ */ b.createContext({}), YE = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return Po({}, t, r);
}, qE = /* @__PURE__ */ Jg(function(e) {
  return Jg(function(t) {
    return YE(e, t);
  });
}), XE = function(t) {
  var r = b.useContext(gs);
  return t.theme !== r && (r = qE(r)(t.theme)), /* @__PURE__ */ b.createElement(gs.Provider, {
    value: r
  }, t.children);
}, jc = /* @__PURE__ */ kS(function(e, t) {
  var r = e.styles, n = pm([r], void 0, b.useContext(gs)), o = b.useRef();
  return o0(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), o0(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && bS(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function QE() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return pm(t);
}
var Nc = function() {
  var t = QE.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, CS = String.raw, _S = CS`
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
`, ZE = () => /* @__PURE__ */ k.jsx(jc, { styles: _S }), JE = ({ scope: e = "" }) => /* @__PURE__ */ k.jsx(
  jc,
  {
    styles: CS`
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

      ${_S}
    `
  }
);
function e$(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function rt(e = {}) {
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
        i ?? e$(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [t$, r$] = rt({
  strict: !1,
  name: "PortalManagerContext"
});
function PS(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ k.jsx(t$, { value: { zIndex: r }, children: t });
}
PS.displayName = "PortalManager";
var zn = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect, [TS, n$] = rt({
  strict: !1,
  name: "PortalContext"
}), hm = "chakra-portal", o$ = ".chakra-portal", i$ = (e) => /* @__PURE__ */ k.jsx(
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
), a$ = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
  b.useEffect(() => a({}), []);
  const s = n$(), l = r$();
  zn(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = hm, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ k.jsx(i$, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? am.createPortal(
    /* @__PURE__ */ k.jsx(TS, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ k.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, s$ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = hm), l;
  }, [o]), [, s] = b.useState({});
  return zn(() => s({}), []), zn(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? am.createPortal(
    /* @__PURE__ */ k.jsx(TS, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function Ls(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ k.jsx(s$, { containerRef: r, ...n }) : /* @__PURE__ */ k.jsx(a$, { ...n });
}
Ls.className = hm;
Ls.selector = o$;
Ls.displayName = "Portal";
function mm() {
  const e = b.useContext(
    gs
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var vm = b.createContext({});
vm.displayName = "ColorModeContext";
function gm() {
  const e = b.useContext(vm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var wl = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function l$(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? wl.dark : wl.light), document.body.classList.remove(n ? wl.light : wl.dark);
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
var u$ = "chakra-ui-color-mode";
function c$(e) {
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
var d$ = c$(u$), i0 = () => {
};
function a0(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function ES(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = d$
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(
    () => a0(a, s)
  ), [c, d] = b.useState(
    () => a0(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: v, addListener: g } = b.useMemo(
    () => l$({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, m = b.useCallback(
    (w) => {
      const C = w === "system" ? f() : w;
      u(C), p(C === "dark"), v(C), a.set(C);
    },
    [a, f, p, v]
  );
  zn(() => {
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
      toggleColorMode: t ? i0 : h,
      setColorMode: t ? i0 : m,
      forced: t !== void 0
    }),
    [x, h, m, t]
  );
  return /* @__PURE__ */ k.jsx(vm.Provider, { value: y, children: r });
}
ES.displayName = "ColorModeProvider";
var f$ = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function p$(e) {
  let t = e;
  return f$.has(t) || (t = "light"), t;
}
function h$(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = p$(t), i = r === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function m$(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ k.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: h$(e) }
    }
  );
}
function v$() {
  const e = gm(), t = mm();
  return { ...e, theme: t };
}
var ye = (...e) => e.filter(Boolean).join(" ");
function rr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Yr(e, ...t) {
  return g$(e) ? e(...t) : e;
}
var g$ = (e) => typeof e == "function", ie = (e) => e ? "" : void 0, Ud = (e) => e ? !0 : void 0;
function me(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function $S(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Wu = { exports: {} };
Wu.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", v = "[object GeneratorFunction]", g = "[object Map]", x = "[object Number]", m = "[object Null]", h = "[object Object]", y = "[object Proxy]", w = "[object RegExp]", C = "[object Set]", E = "[object String]", _ = "[object Undefined]", $ = "[object WeakMap]", R = "[object ArrayBuffer]", M = "[object DataView]", L = "[object Float32Array]", q = "[object Float64Array]", G = "[object Int8Array]", K = "[object Int16Array]", J = "[object Int32Array]", Y = "[object Uint8Array]", ee = "[object Uint8ClampedArray]", I = "[object Uint16Array]", j = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, N = /^\[object .+?Constructor\]$/, X = /^(?:0|[1-9]\d*)$/, H = {};
  H[L] = H[q] = H[G] = H[K] = H[J] = H[Y] = H[ee] = H[I] = H[j] = !0, H[s] = H[l] = H[R] = H[c] = H[M] = H[d] = H[f] = H[p] = H[g] = H[x] = H[h] = H[w] = H[C] = H[E] = H[$] = !1;
  var Q = typeof kn == "object" && kn && kn.Object === Object && kn, Pe = typeof self == "object" && self && self.Object === Object && self, se = Q || Pe || Function("return this")(), be = t && !t.nodeType && t, we = be && !0 && e && !e.nodeType && e, Ae = we && we.exports === be, Ge = Ae && Q.process, Ke = function() {
    try {
      var S = we && we.require && we.require("util").types;
      return S || Ge && Ge.binding && Ge.binding("util");
    } catch {
    }
  }(), lr = Ke && Ke.isTypedArray;
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
  function Io(S, P) {
    for (var A = -1, D = Array(S); ++A < S; )
      D[A] = P(A);
    return D;
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
  var Qe = Array.prototype, cn = Function.prototype, ut = Object.prototype, Sr = se["__core-js_shared__"], dn = cn.toString, Gt = ut.hasOwnProperty, zo = function() {
    var S = /[^.]+$/.exec(Sr && Sr.keys && Sr.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), Zi = ut.toString, Qs = dn.call(Object), Zs = RegExp(
    "^" + dn.call(Gt).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Kn = Ae ? se.Buffer : void 0, wv = se.Symbol, kv = se.Uint8Array, Cv = Kn ? Kn.allocUnsafe : void 0, _v = le(Object.getPrototypeOf, Object), Pv = Object.create, l_ = ut.propertyIsEnumerable, u_ = Qe.splice, Yn = wv ? wv.toStringTag : void 0, Js = function() {
    try {
      var S = ld(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), c_ = Kn ? Kn.isBuffer : void 0, Tv = Math.max, d_ = Date.now, Ev = ld(se, "Map"), Ji = ld(Object, "create"), f_ = /* @__PURE__ */ function() {
    function S() {
    }
    return function(P) {
      if (!Xn(P))
        return {};
      if (Pv)
        return Pv(P);
      S.prototype = P;
      var A = new S();
      return S.prototype = void 0, A;
    };
  }();
  function qn(S) {
    var P = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++P < A; ) {
      var D = S[P];
      this.set(D[0], D[1]);
    }
  }
  function p_() {
    this.__data__ = Ji ? Ji(null) : {}, this.size = 0;
  }
  function h_(S) {
    var P = this.has(S) && delete this.__data__[S];
    return this.size -= P ? 1 : 0, P;
  }
  function m_(S) {
    var P = this.__data__;
    if (Ji) {
      var A = P[S];
      return A === n ? void 0 : A;
    }
    return Gt.call(P, S) ? P[S] : void 0;
  }
  function v_(S) {
    var P = this.__data__;
    return Ji ? P[S] !== void 0 : Gt.call(P, S);
  }
  function g_(S, P) {
    var A = this.__data__;
    return this.size += this.has(S) ? 0 : 1, A[S] = Ji && P === void 0 ? n : P, this;
  }
  qn.prototype.clear = p_, qn.prototype.delete = h_, qn.prototype.get = m_, qn.prototype.has = v_, qn.prototype.set = g_;
  function Nr(S) {
    var P = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++P < A; ) {
      var D = S[P];
      this.set(D[0], D[1]);
    }
  }
  function y_() {
    this.__data__ = [], this.size = 0;
  }
  function b_(S) {
    var P = this.__data__, A = el(P, S);
    if (A < 0)
      return !1;
    var D = P.length - 1;
    return A == D ? P.pop() : u_.call(P, A, 1), --this.size, !0;
  }
  function x_(S) {
    var P = this.__data__, A = el(P, S);
    return A < 0 ? void 0 : P[A][1];
  }
  function S_(S) {
    return el(this.__data__, S) > -1;
  }
  function w_(S, P) {
    var A = this.__data__, D = el(A, S);
    return D < 0 ? (++this.size, A.push([S, P])) : A[D][1] = P, this;
  }
  Nr.prototype.clear = y_, Nr.prototype.delete = b_, Nr.prototype.get = x_, Nr.prototype.has = S_, Nr.prototype.set = w_;
  function Do(S) {
    var P = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++P < A; ) {
      var D = S[P];
      this.set(D[0], D[1]);
    }
  }
  function k_() {
    this.size = 0, this.__data__ = {
      hash: new qn(),
      map: new (Ev || Nr)(),
      string: new qn()
    };
  }
  function C_(S) {
    var P = rl(this, S).delete(S);
    return this.size -= P ? 1 : 0, P;
  }
  function __(S) {
    return rl(this, S).get(S);
  }
  function P_(S) {
    return rl(this, S).has(S);
  }
  function T_(S, P) {
    var A = rl(this, S), D = A.size;
    return A.set(S, P), this.size += A.size == D ? 0 : 1, this;
  }
  Do.prototype.clear = k_, Do.prototype.delete = C_, Do.prototype.get = __, Do.prototype.has = P_, Do.prototype.set = T_;
  function Fo(S) {
    var P = this.__data__ = new Nr(S);
    this.size = P.size;
  }
  function E_() {
    this.__data__ = new Nr(), this.size = 0;
  }
  function $_(S) {
    var P = this.__data__, A = P.delete(S);
    return this.size = P.size, A;
  }
  function A_(S) {
    return this.__data__.get(S);
  }
  function R_(S) {
    return this.__data__.has(S);
  }
  function M_(S, P) {
    var A = this.__data__;
    if (A instanceof Nr) {
      var D = A.__data__;
      if (!Ev || D.length < r - 1)
        return D.push([S, P]), this.size = ++A.size, this;
      A = this.__data__ = new Do(D);
    }
    return A.set(S, P), this.size = A.size, this;
  }
  Fo.prototype.clear = E_, Fo.prototype.delete = $_, Fo.prototype.get = A_, Fo.prototype.has = R_, Fo.prototype.set = M_;
  function O_(S, P) {
    var A = dd(S), D = !A && cd(S), oe = !A && !D && Ov(S), Se = !A && !D && !oe && zv(S), Re = A || D || oe || Se, re = Re ? Io(S.length, String) : [], Me = re.length;
    for (var Kt in S)
      (P || Gt.call(S, Kt)) && !(Re && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Kt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      oe && (Kt == "offset" || Kt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Se && (Kt == "buffer" || Kt == "byteLength" || Kt == "byteOffset") || // Skip index properties.
      Rv(Kt, Me))) && re.push(Kt);
    return re;
  }
  function ad(S, P, A) {
    (A !== void 0 && !nl(S[P], A) || A === void 0 && !(P in S)) && sd(S, P, A);
  }
  function I_(S, P, A) {
    var D = S[P];
    (!(Gt.call(S, P) && nl(D, A)) || A === void 0 && !(P in S)) && sd(S, P, A);
  }
  function el(S, P) {
    for (var A = S.length; A--; )
      if (nl(S[A][0], P))
        return A;
    return -1;
  }
  function sd(S, P, A) {
    P == "__proto__" && Js ? Js(S, P, {
      configurable: !0,
      enumerable: !0,
      value: A,
      writable: !0
    }) : S[P] = A;
  }
  var z_ = Y_();
  function tl(S) {
    return S == null ? S === void 0 ? _ : m : Yn && Yn in Object(S) ? q_(S) : tP(S);
  }
  function $v(S) {
    return ea(S) && tl(S) == s;
  }
  function D_(S) {
    if (!Xn(S) || J_(S))
      return !1;
    var P = pd(S) ? Zs : N;
    return P.test(iP(S));
  }
  function F_(S) {
    return ea(S) && Iv(S.length) && !!H[tl(S)];
  }
  function L_(S) {
    if (!Xn(S))
      return eP(S);
    var P = Mv(S), A = [];
    for (var D in S)
      D == "constructor" && (P || !Gt.call(S, D)) || A.push(D);
    return A;
  }
  function Av(S, P, A, D, oe) {
    S !== P && z_(P, function(Se, Re) {
      if (oe || (oe = new Fo()), Xn(Se))
        j_(S, P, Re, A, Av, D, oe);
      else {
        var re = D ? D(ud(S, Re), Se, Re + "", S, P, oe) : void 0;
        re === void 0 && (re = Se), ad(S, Re, re);
      }
    }, Dv);
  }
  function j_(S, P, A, D, oe, Se, Re) {
    var re = ud(S, A), Me = ud(P, A), Kt = Re.get(Me);
    if (Kt) {
      ad(S, A, Kt);
      return;
    }
    var It = Se ? Se(re, Me, A + "", S, P, Re) : void 0, ta = It === void 0;
    if (ta) {
      var hd = dd(Me), md = !hd && Ov(Me), Lv = !hd && !md && zv(Me);
      It = Me, hd || md || Lv ? dd(re) ? It = re : aP(re) ? It = H_(re) : md ? (ta = !1, It = V_(Me, !0)) : Lv ? (ta = !1, It = U_(Me, !0)) : It = [] : sP(Me) || cd(Me) ? (It = re, cd(re) ? It = lP(re) : (!Xn(re) || pd(re)) && (It = X_(Me))) : ta = !1;
    }
    ta && (Re.set(Me, It), oe(It, Me, D, Se, Re), Re.delete(Me)), ad(S, A, It);
  }
  function N_(S, P) {
    return nP(rP(S, P, Fv), S + "");
  }
  var B_ = Js ? function(S, P) {
    return Js(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: cP(P),
      writable: !0
    });
  } : Fv;
  function V_(S, P) {
    if (P)
      return S.slice();
    var A = S.length, D = Cv ? Cv(A) : new S.constructor(A);
    return S.copy(D), D;
  }
  function W_(S) {
    var P = new S.constructor(S.byteLength);
    return new kv(P).set(new kv(S)), P;
  }
  function U_(S, P) {
    var A = P ? W_(S.buffer) : S.buffer;
    return new S.constructor(A, S.byteOffset, S.length);
  }
  function H_(S, P) {
    var A = -1, D = S.length;
    for (P || (P = Array(D)); ++A < D; )
      P[A] = S[A];
    return P;
  }
  function G_(S, P, A, D) {
    var oe = !A;
    A || (A = {});
    for (var Se = -1, Re = P.length; ++Se < Re; ) {
      var re = P[Se], Me = D ? D(A[re], S[re], re, A, S) : void 0;
      Me === void 0 && (Me = S[re]), oe ? sd(A, re, Me) : I_(A, re, Me);
    }
    return A;
  }
  function K_(S) {
    return N_(function(P, A) {
      var D = -1, oe = A.length, Se = oe > 1 ? A[oe - 1] : void 0, Re = oe > 2 ? A[2] : void 0;
      for (Se = S.length > 3 && typeof Se == "function" ? (oe--, Se) : void 0, Re && Q_(A[0], A[1], Re) && (Se = oe < 3 ? void 0 : Se, oe = 1), P = Object(P); ++D < oe; ) {
        var re = A[D];
        re && S(P, re, D, Se);
      }
      return P;
    });
  }
  function Y_(S) {
    return function(P, A, D) {
      for (var oe = -1, Se = Object(P), Re = D(P), re = Re.length; re--; ) {
        var Me = Re[S ? re : ++oe];
        if (A(Se[Me], Me, Se) === !1)
          break;
      }
      return P;
    };
  }
  function rl(S, P) {
    var A = S.__data__;
    return Z_(P) ? A[typeof P == "string" ? "string" : "hash"] : A.map;
  }
  function ld(S, P) {
    var A = he(S, P);
    return D_(A) ? A : void 0;
  }
  function q_(S) {
    var P = Gt.call(S, Yn), A = S[Yn];
    try {
      S[Yn] = void 0;
      var D = !0;
    } catch {
    }
    var oe = Zi.call(S);
    return D && (P ? S[Yn] = A : delete S[Yn]), oe;
  }
  function X_(S) {
    return typeof S.constructor == "function" && !Mv(S) ? f_(_v(S)) : {};
  }
  function Rv(S, P) {
    var A = typeof S;
    return P = P ?? a, !!P && (A == "number" || A != "symbol" && X.test(S)) && S > -1 && S % 1 == 0 && S < P;
  }
  function Q_(S, P, A) {
    if (!Xn(A))
      return !1;
    var D = typeof P;
    return (D == "number" ? fd(A) && Rv(P, A.length) : D == "string" && P in A) ? nl(A[P], S) : !1;
  }
  function Z_(S) {
    var P = typeof S;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? S !== "__proto__" : S === null;
  }
  function J_(S) {
    return !!zo && zo in S;
  }
  function Mv(S) {
    var P = S && S.constructor, A = typeof P == "function" && P.prototype || ut;
    return S === A;
  }
  function eP(S) {
    var P = [];
    if (S != null)
      for (var A in Object(S))
        P.push(A);
    return P;
  }
  function tP(S) {
    return Zi.call(S);
  }
  function rP(S, P, A) {
    return P = Tv(P === void 0 ? S.length - 1 : P, 0), function() {
      for (var D = arguments, oe = -1, Se = Tv(D.length - P, 0), Re = Array(Se); ++oe < Se; )
        Re[oe] = D[P + oe];
      oe = -1;
      for (var re = Array(P + 1); ++oe < P; )
        re[oe] = D[oe];
      return re[P] = A(Re), ur(S, this, re);
    };
  }
  function ud(S, P) {
    if (!(P === "constructor" && typeof S[P] == "function") && P != "__proto__")
      return S[P];
  }
  var nP = oP(B_);
  function oP(S) {
    var P = 0, A = 0;
    return function() {
      var D = d_(), oe = i - (D - A);
      if (A = D, oe > 0) {
        if (++P >= o)
          return arguments[0];
      } else
        P = 0;
      return S.apply(void 0, arguments);
    };
  }
  function iP(S) {
    if (S != null) {
      try {
        return dn.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function nl(S, P) {
    return S === P || S !== S && P !== P;
  }
  var cd = $v(/* @__PURE__ */ function() {
    return arguments;
  }()) ? $v : function(S) {
    return ea(S) && Gt.call(S, "callee") && !l_.call(S, "callee");
  }, dd = Array.isArray;
  function fd(S) {
    return S != null && Iv(S.length) && !pd(S);
  }
  function aP(S) {
    return ea(S) && fd(S);
  }
  var Ov = c_ || dP;
  function pd(S) {
    if (!Xn(S))
      return !1;
    var P = tl(S);
    return P == p || P == v || P == u || P == y;
  }
  function Iv(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function Xn(S) {
    var P = typeof S;
    return S != null && (P == "object" || P == "function");
  }
  function ea(S) {
    return S != null && typeof S == "object";
  }
  function sP(S) {
    if (!ea(S) || tl(S) != h)
      return !1;
    var P = _v(S);
    if (P === null)
      return !0;
    var A = Gt.call(P, "constructor") && P.constructor;
    return typeof A == "function" && A instanceof A && dn.call(A) == Qs;
  }
  var zv = lr ? z(lr) : F_;
  function lP(S) {
    return G_(S, Dv(S));
  }
  function Dv(S) {
    return fd(S) ? O_(S, !0) : L_(S);
  }
  var uP = K_(function(S, P, A, D) {
    Av(S, P, A, D);
  });
  function cP(S) {
    return function() {
      return S;
    };
  }
  function Fv(S) {
    return S;
  }
  function dP() {
    return !1;
  }
  e.exports = uP;
})(Wu, Wu.exports);
var y$ = Wu.exports;
const er = /* @__PURE__ */ Rs(y$);
var b$ = (e) => /!(important)?$/.test(e), s0 = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, x$ = (e, t) => (r) => {
  const n = String(t), o = b$(n), i = s0(n), a = e ? `${e}.${i}` : i;
  let s = rr(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = s0(s), o ? `${s} !important` : s;
};
function ym(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = x$(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var kl = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Yt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = ym({
      scale: e,
      transform: t
    }), n;
  };
}
var S$ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function w$(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: S$(t),
    transform: r ? ym({
      scale: r,
      compose: n
    }) : n
  };
}
var AS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function k$() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...AS
  ].join(" ");
}
function C$() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...AS
  ].join(" ");
}
var _$ = {
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
}, P$ = {
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
function T$(e) {
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
var E$ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Tp = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, $$ = new Set(Object.values(Tp)), Ep = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), A$ = (e) => e.trim();
function R$(e, t) {
  if (e == null || Ep.has(e))
    return e;
  if (!($p(e) || Ep.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(A$).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in Tp ? Tp[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if ($$.has(f))
      return f;
    const p = f.indexOf(" "), [v, g] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = $p(g) ? g : g && g.split(" "), m = `colors.${v}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : v;
    return x ? [
      h,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var $p = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), M$ = (e, t) => R$(e, t ?? {});
function O$(e) {
  return /^var\(--.+\)$/.test(e);
}
var I$ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, kr = (e) => (t) => `${e}(${t})`, ne = {
  filter(e) {
    return e !== "auto" ? e : _$;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : P$;
  },
  ring(e) {
    return T$(ne.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? k$() : e === "auto-gpu" ? C$() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = I$(e);
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
    if (O$(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: M$,
  blur: kr("blur"),
  opacity: kr("opacity"),
  brightness: kr("brightness"),
  contrast: kr("contrast"),
  dropShadow: kr("drop-shadow"),
  grayscale: kr("grayscale"),
  hueRotate: (e) => kr("hue-rotate")(ne.degree(e)),
  invert: kr("invert"),
  saturate: kr("saturate"),
  sepia: kr("sepia"),
  bgImage(e) {
    return e == null || $p(e) || Ep.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = E$[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, T = {
  borderWidths: Yt("borderWidths"),
  borderStyles: Yt("borderStyles"),
  colors: Yt("colors"),
  borders: Yt("borders"),
  gradients: Yt("gradients", ne.gradient),
  radii: Yt("radii", ne.px),
  space: Yt("space", kl(ne.vh, ne.px)),
  spaceT: Yt("space", kl(ne.vh, ne.px)),
  degreeT(e) {
    return { property: e, transform: ne.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: ym({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Yt("sizes", kl(ne.vh, ne.px)),
  sizesT: Yt("sizes", kl(ne.vh, ne.fraction)),
  shadows: Yt("shadows"),
  logical: w$,
  blur: Yt("blur", ne.blur)
}, ru = {
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
Object.assign(ru, {
  bgImage: ru.backgroundImage,
  bgImg: ru.backgroundImage
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
var z$ = {
  color: T.colors("color"),
  textColor: T.colors("color"),
  fill: T.colors("fill"),
  stroke: T.colors("stroke")
}, Ap = {
  boxShadow: T.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: T.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: T.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Ap, {
  shadow: Ap.boxShadow
});
var D$ = {
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
}, Uu = {
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
Object.assign(Uu, {
  flexDir: Uu.flexDirection
});
var RS = {
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
}, F$ = {
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
var L$ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: T.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: T.prop("listStyleImage")
};
function j$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var N$ = (e) => {
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
}, B$ = N$(j$), V$ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, W$ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Hd = (e, t, r) => {
  const n = {}, o = B$(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, U$ = {
  srOnly: {
    transform(e) {
      return e === !0 ? V$ : e === "focusable" ? W$ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Hd(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Hd(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Hd(t, e, r)
  }
}, La = {
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
Object.assign(La, {
  insetStart: La.insetInlineStart,
  insetEnd: La.insetInlineEnd
});
var H$ = {
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
var G$ = {
  textDecorationColor: T.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: T.shadows("textShadow")
}, K$ = {
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
}, Y$ = {
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
}, q$ = {
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
}, X$ = {
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
function MS(e) {
  return rr(e) && e.reference ? e.reference : String(e);
}
var Bc = (e, ...t) => t.map(MS).join(` ${e} `).replace(/calc/g, ""), l0 = (...e) => `calc(${Bc("+", ...e)})`, u0 = (...e) => `calc(${Bc("-", ...e)})`, Rp = (...e) => `calc(${Bc("*", ...e)})`, c0 = (...e) => `calc(${Bc("/", ...e)})`, d0 = (e) => {
  const t = MS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Rp(t, -1);
}, oo = Object.assign(
  (e) => ({
    add: (...t) => oo(l0(e, ...t)),
    subtract: (...t) => oo(u0(e, ...t)),
    multiply: (...t) => oo(Rp(e, ...t)),
    divide: (...t) => oo(c0(e, ...t)),
    negate: () => oo(d0(e)),
    toString: () => e.toString()
  }),
  {
    add: l0,
    subtract: u0,
    multiply: Rp,
    divide: c0,
    negate: d0
  }
);
function Q$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Z$(e) {
  const t = Q$(e.toString());
  return eA(J$(t));
}
function J$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function eA(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function tA(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function rA(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function nA(e, t = "") {
  return Z$(`--${tA(e, t)}`);
}
function W(e, t, r) {
  const n = nA(e, r);
  return {
    variable: n,
    reference: rA(n, t)
  };
}
function oA(e, t) {
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
function iA(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function aA(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Mp(e) {
  if (e == null)
    return e;
  const { unitless: t } = aA(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var OS = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, bm = (e) => Object.fromEntries(Object.entries(e).sort(OS));
function f0(e) {
  const t = bm(e);
  return Object.assign(Object.values(t), t);
}
function sA(e) {
  const t = Object.keys(bm(e));
  return new Set(t);
}
function p0(e) {
  var t;
  if (!e)
    return e;
  e = (t = Mp(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function wa(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Mp(e)})`), t && r.push("and", `(max-width: ${Mp(t)})`), r.join(" ");
}
function lA(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = f0(e), n = Object.entries(e).sort(OS).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? p0(d) : void 0, {
      _minW: p0(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: wa(null, d),
      minWQuery: wa(s),
      minMaxQuery: wa(s, d)
    };
  }), o = sA(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: bm(e),
    asArray: f0(e),
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
      for (; iA(s) === null; )
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
}, pn = (e) => IS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Br = (e) => IS((t) => e(t, "~ &"), "[data-peer]", ".peer"), IS = (e, ...t) => t.map(e).join(", "), Vc = {
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
  _groupHover: pn(nt.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Br(nt.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: pn(nt.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Br(nt.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: pn(nt.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Br(nt.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: pn(nt.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Br(nt.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: pn(nt.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Br(nt.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: pn(nt.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Br(nt.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: pn(nt.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Br(nt.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: pn(nt.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Br(nt.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Br(nt.placeholderShown),
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
}, zS = Object.keys(
  Vc
);
function h0(e, t) {
  return W(String(e).replace(/\./g, "-"), void 0, t);
}
function uA(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = h0(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...v] = f, g = `${p}.-${v.join(".")}`, x = oo.negate(s), m = oo.negate(u);
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
      const { reference: x } = h0(v, t == null ? void 0 : t.cssVarPrefix);
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
function cA(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function dA(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function fA(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function m0(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (fA(a) || Array.isArray(a)) {
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
var pA = [
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
function hA(e) {
  return dA(e, pA);
}
function mA(e) {
  return e.semanticTokens;
}
function vA(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var gA = (e) => zS.includes(e) || e === "default";
function yA({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return m0(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), m0(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(gA)
    }
  ), r;
}
function bA(e) {
  var t;
  const r = vA(e), n = hA(r), o = mA(r), i = yA({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = uA(i, { cssVarPrefix: a });
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
    __breakpoints: lA(r.breakpoints)
  }), r;
}
var xm = er(
  {},
  ru,
  ue,
  z$,
  Uu,
  Xt,
  D$,
  H$,
  F$,
  RS,
  U$,
  La,
  Ap,
  Ee,
  X$,
  q$,
  G$,
  K$,
  L$,
  Y$
);
Object.assign({}, Ee, Xt, Uu, RS, La);
var xA = [...Object.keys(xm), ...zS], SA = { ...xm, ...Vc }, wA = (e) => e in SA, kA = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Yr(e[a], t);
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
function CA(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function _A(e) {
  return /^var\(--.+\)$/.test(e);
}
var PA = (e, t) => e.startsWith("--") && typeof t == "string" && !_A(t), TA = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = CA(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function EA(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Yr(i, n), d = kA(c)(n);
    let f = {};
    for (let p in d) {
      const v = d[p];
      let g = Yr(v, n);
      p in r && (p = r[p]), PA(p, g) && (g = TA(n, g));
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
      const h = Yr(x == null ? void 0 : x.property, n);
      if (!a && (x != null && x.static)) {
        const y = Yr(x.static, n);
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
var DS = (e) => (t) => EA({
  theme: t,
  pseudos: Vc,
  configs: xm
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
function $A(e, t) {
  if (Array.isArray(e))
    return e;
  if (rr(e))
    return t(e);
  if (e != null)
    return [e];
}
function AA(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function RA(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = $A(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let v = 0; v < d; v++) {
      const g = t.details[v], x = t.details[AA(c, v)], m = wa(g.minW, x == null ? void 0 : x._minW), h = Yr((s = n[o]) == null ? void 0 : s[c[v]], a);
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
function MA(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = RA(i);
    return er(
      {},
      Yr((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function xr(e) {
  return cA(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var OA = [
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
function IA(e) {
  return rr(e) ? OA.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var zA = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, DA = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, FA = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, LA = {
  property: zA,
  easing: DA,
  duration: FA
}, jA = LA, NA = {
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
}, BA = NA, VA = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, WA = VA, UA = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, HA = UA, GA = {
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
}, KA = GA, YA = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, qA = YA, XA = {
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
}, QA = XA, ZA = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, JA = ZA, eR = {
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
}, FS = eR, LS = {
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
}, tR = {
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
}, rR = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, nR = {
  ...LS,
  ...tR,
  container: rR
}, jS = nR, oR = {
  breakpoints: HA,
  zIndices: BA,
  radii: qA,
  blur: JA,
  colors: KA,
  ...FS,
  sizes: jS,
  shadows: QA,
  space: LS,
  borders: WA,
  transition: jA
}, { defineMultiStyleConfig: iR, definePartsStyle: ka } = _e([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Ur = W("stepper-indicator-size"), oi = W("stepper-icon-size"), ii = W("stepper-title-font-size"), Ca = W("stepper-description-font-size"), da = W("stepper-accent-color"), aR = ka(({ colorScheme: e }) => ({
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
    fontSize: ii.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Ca.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: ii.reference
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
    width: oi.reference,
    height: oi.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Ur.reference,
    height: Ur.reference,
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
      maxHeight: `calc(100% - ${Ur.reference} - 8px)`,
      top: `calc(${Ur.reference} + 4px)`,
      insetStart: `calc(${Ur.reference} / 2 - 1px)`
    }
  }
})), sR = iR({
  baseStyle: aR,
  sizes: {
    xs: ka({
      stepper: {
        [Ur.variable]: "sizes.4",
        [oi.variable]: "sizes.3",
        [ii.variable]: "fontSizes.xs",
        [Ca.variable]: "fontSizes.xs"
      }
    }),
    sm: ka({
      stepper: {
        [Ur.variable]: "sizes.6",
        [oi.variable]: "sizes.4",
        [ii.variable]: "fontSizes.sm",
        [Ca.variable]: "fontSizes.xs"
      }
    }),
    md: ka({
      stepper: {
        [Ur.variable]: "sizes.8",
        [oi.variable]: "sizes.5",
        [ii.variable]: "fontSizes.md",
        [Ca.variable]: "fontSizes.sm"
      }
    }),
    lg: ka({
      stepper: {
        [Ur.variable]: "sizes.10",
        [oi.variable]: "sizes.6",
        [ii.variable]: "fontSizes.lg",
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
var lR = pe("accordion").parts("root", "container", "button", "panel").extend("icon"), uR = pe("alert").parts("title", "description", "container").extend("icon", "spinner"), cR = pe("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), dR = pe("breadcrumb").parts("link", "item", "container").extend("separator");
pe("button").parts();
var fR = pe("checkbox").parts("control", "icon", "container").extend("label");
pe("progress").parts("track", "filledTrack").extend("label");
var pR = pe("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), hR = pe("editable").parts(
  "preview",
  "input",
  "textarea"
), mR = pe("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), vR = pe("formError").parts("text", "icon"), gR = pe("input").parts(
  "addon",
  "field",
  "element",
  "group"
), yR = pe("list").parts("container", "item", "icon"), bR = pe("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), xR = pe("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), SR = pe("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
pe("pininput").parts("field");
var wR = pe("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), kR = pe("progress").parts(
  "label",
  "filledTrack",
  "track"
), CR = pe("radio").parts(
  "container",
  "control",
  "label"
), _R = pe("select").parts("field", "icon"), PR = pe("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), TR = pe("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), ER = pe("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), $R = pe("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), AR = pe("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), RR = pe("tag").parts(
  "container",
  "label",
  "closeButton"
), MR = pe("card").parts(
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
function uo(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class OR extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var _a = OR;
function Sm(e) {
  if (typeof e != "string")
    throw new _a(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = BR.test(e) ? DR(e) : e;
  const r = FR.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(ys(s, 2), 16)), parseInt(ys(a[3] || "f", 2), 16) / 255];
  }
  const n = LR.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = jR.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = NR.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (uo(0, 100, s) !== s)
      throw new _a(e);
    if (uo(0, 100, l) !== l)
      throw new _a(e);
    return [...VR(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new _a(e);
}
function IR(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const v0 = (e) => parseInt(e.replace(/_/g, ""), 36), zR = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = v0(t.substring(0, 3)), n = v0(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function DR(e) {
  const t = e.toLowerCase().trim(), r = zR[IR(t)];
  if (!r)
    throw new _a(e);
  return `#${r}`;
}
const ys = (e, t) => Array.from(Array(t)).map(() => e).join(""), FR = new RegExp(`^#${ys("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), LR = new RegExp(`^#${ys("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), jR = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ys(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), NR = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, BR = /^[a-z]+$/i, g0 = (e) => Math.round(e * 255), VR = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(g0);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(g0);
};
function WR(e, t, r, n) {
  return `rgba(${uo(0, 255, e).toFixed()}, ${uo(0, 255, t).toFixed()}, ${uo(0, 255, r).toFixed()}, ${parseFloat(uo(0, 1, n).toFixed(3))})`;
}
function UR(e, t) {
  const [r, n, o, i] = Sm(e);
  return WR(r, n, o, i - t);
}
function HR(e) {
  const [t, r, n, o] = Sm(e);
  let i = (a) => {
    const s = uo(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function GR(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var KR = (e) => Object.keys(e).length === 0, bt = (e, t, r) => {
  const n = GR(e, `colors.${t}`, t);
  try {
    return HR(n), n;
  } catch {
    return r ?? "#000000";
  }
}, YR = (e) => {
  const [t, r, n] = Sm(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, qR = (e) => (t) => {
  const r = bt(t, e);
  return YR(r) < 128 ? "dark" : "light";
}, XR = (e) => (t) => qR(e)(t) === "dark", Fi = (e, t) => (r) => {
  const n = bt(r, e);
  return UR(n, 1 - t);
};
function y0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var QR = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function ZR(e) {
  const t = QR();
  return !e || KR(e) ? t : e.string && e.colors ? e5(e.string, e.colors) : e.string && !e.colors ? JR(e.string) : e.colors && !e.string ? t5(e.colors) : t;
}
function JR(e) {
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
function e5(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function t5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function V(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function wm(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function NS(e) {
  return rr(e) && e.reference ? e.reference : String(e);
}
var Wc = (e, ...t) => t.map(NS).join(` ${e} `).replace(/calc/g, ""), b0 = (...e) => `calc(${Wc("+", ...e)})`, x0 = (...e) => `calc(${Wc("-", ...e)})`, Op = (...e) => `calc(${Wc("*", ...e)})`, S0 = (...e) => `calc(${Wc("/", ...e)})`, w0 = (e) => {
  const t = NS(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Op(t, -1);
}, Hr = Object.assign(
  (e) => ({
    add: (...t) => Hr(b0(e, ...t)),
    subtract: (...t) => Hr(x0(e, ...t)),
    multiply: (...t) => Hr(Op(e, ...t)),
    divide: (...t) => Hr(S0(e, ...t)),
    negate: () => Hr(w0(e)),
    toString: () => e.toString()
  }),
  {
    add: b0,
    subtract: x0,
    multiply: Op,
    divide: S0,
    negate: w0
  }
);
function r5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function n5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function BS(e) {
  const t = n5(e.toString());
  return t.includes("\\.") ? e : r5(e) ? t.replace(".", "\\.") : e;
}
function o5(e, t = "") {
  return [t, BS(e)].filter(Boolean).join("-");
}
function i5(e, t) {
  return `var(${BS(e)}${t ? `, ${t}` : ""})`;
}
function a5(e, t = "") {
  return `--${o5(e, t)}`;
}
function Xe(e, t) {
  const r = a5(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: i5(r, s5(t == null ? void 0 : t.fallback))
  };
}
function s5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: l5, definePartsStyle: nu } = _e(ER.keys), ja = Xe("switch-track-width"), ho = Xe("switch-track-height"), Gd = Xe("switch-track-diff"), u5 = Hr.subtract(ja, ho), Ip = Xe("switch-thumb-x"), fa = Xe("switch-bg"), c5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ja.reference],
    height: [ho.reference],
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
}, d5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [ho.reference],
  height: [ho.reference],
  _checked: {
    transform: `translateX(${Ip.reference})`
  }
}, f5 = nu((e) => ({
  container: {
    [Gd.variable]: u5,
    [Ip.variable]: Gd.reference,
    _rtl: {
      [Ip.variable]: Hr(Gd).negate().toString()
    }
  },
  track: c5(e),
  thumb: d5
})), p5 = {
  sm: nu({
    container: {
      [ja.variable]: "1.375rem",
      [ho.variable]: "sizes.3"
    }
  }),
  md: nu({
    container: {
      [ja.variable]: "1.875rem",
      [ho.variable]: "sizes.4"
    }
  }),
  lg: nu({
    container: {
      [ja.variable]: "2.875rem",
      [ho.variable]: "sizes.6"
    }
  })
}, h5 = l5({
  baseStyle: f5,
  sizes: p5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: m5, definePartsStyle: wi } = _e($R.keys), v5 = wi({
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
}), Hu = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, g5 = wi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: V("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: V(`${t}.100`, `${t}.700`)(e),
      ...Hu
    },
    td: {
      borderBottom: "1px",
      borderColor: V(`${t}.100`, `${t}.700`)(e),
      ...Hu
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
}), y5 = wi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: V("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: V(`${t}.100`, `${t}.700`)(e),
      ...Hu
    },
    td: {
      borderBottom: "1px",
      borderColor: V(`${t}.100`, `${t}.700`)(e),
      ...Hu
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
}), b5 = {
  simple: g5,
  striped: y5,
  unstyled: {}
}, x5 = {
  sm: wi({
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
  md: wi({
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
  lg: wi({
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
}, S5 = m5({
  baseStyle: v5,
  variants: b5,
  sizes: x5,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), _t = W("tabs-color"), mr = W("tabs-bg"), Cl = W("tabs-border-color"), { defineMultiStyleConfig: w5, definePartsStyle: Ir } = _e(AR.keys), k5 = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, C5 = (e) => {
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
}, _5 = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, P5 = {
  p: 4
}, T5 = Ir((e) => ({
  root: k5(e),
  tab: C5(e),
  tablist: _5(e),
  tabpanel: P5
})), E5 = {
  sm: Ir({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Ir({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Ir({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, $5 = Ir((e) => {
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
        [_t.variable]: `colors.${t}.600`,
        _dark: {
          [_t.variable]: `colors.${t}.300`
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
      color: _t.reference,
      bg: mr.reference
    }
  };
}), A5 = Ir((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Cl.variable]: "transparent",
      _selected: {
        [_t.variable]: `colors.${t}.600`,
        [Cl.variable]: "colors.white",
        _dark: {
          [_t.variable]: `colors.${t}.300`,
          [Cl.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Cl.reference
      },
      color: _t.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), R5 = Ir((e) => {
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
        [_t.variable]: `colors.${t}.600`,
        _dark: {
          [mr.variable]: "colors.gray.800",
          [_t.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: _t.reference,
      bg: mr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), M5 = Ir((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: bt(r, `${t}.700`),
        bg: bt(r, `${t}.100`)
      }
    }
  };
}), O5 = Ir((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [_t.variable]: "colors.gray.600",
      _dark: {
        [_t.variable]: "inherit"
      },
      _selected: {
        [_t.variable]: "colors.white",
        [mr.variable]: `colors.${t}.600`,
        _dark: {
          [_t.variable]: "colors.gray.800",
          [mr.variable]: `colors.${t}.300`
        }
      },
      color: _t.reference,
      bg: mr.reference
    }
  };
}), I5 = Ir({}), z5 = {
  line: $5,
  enclosed: A5,
  "enclosed-colored": R5,
  "soft-rounded": M5,
  "solid-rounded": O5,
  unstyled: I5
}, D5 = w5({
  baseStyle: T5,
  sizes: E5,
  variants: z5,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), Ve = oA("badge", ["bg", "color", "shadow"]), F5 = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: Ve.bg.reference,
  color: Ve.color.reference,
  boxShadow: Ve.shadow.reference
}, L5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = Fi(`${t}.500`, 0.6)(r);
  return {
    [Ve.bg.variable]: `colors.${t}.500`,
    [Ve.color.variable]: "colors.white",
    _dark: {
      [Ve.bg.variable]: n,
      [Ve.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, j5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = Fi(`${t}.200`, 0.16)(r);
  return {
    [Ve.bg.variable]: `colors.${t}.100`,
    [Ve.color.variable]: `colors.${t}.800`,
    _dark: {
      [Ve.bg.variable]: n,
      [Ve.color.variable]: `colors.${t}.200`
    }
  };
}, N5 = (e) => {
  const { colorScheme: t, theme: r } = e, n = Fi(`${t}.200`, 0.8)(r);
  return {
    [Ve.color.variable]: `colors.${t}.500`,
    _dark: {
      [Ve.color.variable]: n
    },
    [Ve.shadow.variable]: `inset 0 0 0px 1px ${Ve.color.reference}`
  };
}, B5 = {
  solid: L5,
  subtle: j5,
  outline: N5
}, Na = {
  baseStyle: F5,
  variants: B5,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: V5, definePartsStyle: mo } = _e(RR.keys), k0 = W("tag-bg"), C0 = W("tag-color"), Kd = W("tag-shadow"), ou = W("tag-min-height"), iu = W("tag-min-width"), au = W("tag-font-size"), su = W("tag-padding-inline"), W5 = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [C0.variable]: Ve.color.reference,
  [k0.variable]: Ve.bg.reference,
  [Kd.variable]: Ve.shadow.reference,
  color: C0.reference,
  bg: k0.reference,
  boxShadow: Kd.reference,
  borderRadius: "md",
  minH: ou.reference,
  minW: iu.reference,
  fontSize: au.reference,
  px: su.reference,
  _focusVisible: {
    [Kd.variable]: "shadows.outline"
  }
}, U5 = {
  lineHeight: 1.2,
  overflow: "visible"
}, H5 = {
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
}, G5 = mo({
  container: W5,
  label: U5,
  closeButton: H5
}), K5 = {
  sm: mo({
    container: {
      [ou.variable]: "sizes.5",
      [iu.variable]: "sizes.5",
      [au.variable]: "fontSizes.xs",
      [su.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: mo({
    container: {
      [ou.variable]: "sizes.6",
      [iu.variable]: "sizes.6",
      [au.variable]: "fontSizes.sm",
      [su.variable]: "space.2"
    }
  }),
  lg: mo({
    container: {
      [ou.variable]: "sizes.8",
      [iu.variable]: "sizes.8",
      [au.variable]: "fontSizes.md",
      [su.variable]: "space.3"
    }
  })
}, Y5 = {
  subtle: mo((e) => {
    var t;
    return {
      container: (t = Na.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: mo((e) => {
    var t;
    return {
      container: (t = Na.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: mo((e) => {
    var t;
    return {
      container: (t = Na.variants) == null ? void 0 : t.outline(e)
    };
  })
}, q5 = V5({
  variants: Y5,
  baseStyle: G5,
  sizes: K5,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: qr, defineMultiStyleConfig: X5 } = _e(gR.keys), ai = W("input-height"), si = W("input-font-size"), li = W("input-padding"), ui = W("input-border-radius"), Q5 = qr({
  addon: {
    height: ai.reference,
    fontSize: si.reference,
    px: li.reference,
    borderRadius: ui.reference
  },
  field: {
    width: "100%",
    height: ai.reference,
    fontSize: si.reference,
    px: li.reference,
    borderRadius: ui.reference,
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
}), hn = {
  lg: {
    [si.variable]: "fontSizes.lg",
    [li.variable]: "space.4",
    [ui.variable]: "radii.md",
    [ai.variable]: "sizes.12"
  },
  md: {
    [si.variable]: "fontSizes.md",
    [li.variable]: "space.4",
    [ui.variable]: "radii.md",
    [ai.variable]: "sizes.10"
  },
  sm: {
    [si.variable]: "fontSizes.sm",
    [li.variable]: "space.3",
    [ui.variable]: "radii.sm",
    [ai.variable]: "sizes.8"
  },
  xs: {
    [si.variable]: "fontSizes.xs",
    [li.variable]: "space.2",
    [ui.variable]: "radii.sm",
    [ai.variable]: "sizes.6"
  }
}, Z5 = {
  lg: qr({
    field: hn.lg,
    group: hn.lg
  }),
  md: qr({
    field: hn.md,
    group: hn.md
  }),
  sm: qr({
    field: hn.sm,
    group: hn.sm
  }),
  xs: qr({
    field: hn.xs,
    group: hn.xs
  })
};
function km(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || V("blue.500", "blue.300")(e),
    errorBorderColor: r || V("red.500", "red.300")(e)
  };
}
var J5 = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = km(e);
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
        borderColor: bt(t, n),
        boxShadow: `0 0 0 1px ${bt(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: bt(t, r),
        boxShadow: `0 0 0 1px ${bt(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: V("inherit", "whiteAlpha.50")(e),
      bg: V("gray.100", "whiteAlpha.300")(e)
    }
  };
}), eM = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = km(e);
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
        borderColor: bt(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: bt(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: V("gray.100", "whiteAlpha.50")(e)
    }
  };
}), tM = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = km(e);
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
        borderColor: bt(t, n),
        boxShadow: `0px 1px 0px 0px ${bt(t, n)}`
      },
      _focusVisible: {
        borderColor: bt(t, r),
        boxShadow: `0px 1px 0px 0px ${bt(t, r)}`
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
}), rM = qr({
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
}), nM = {
  outline: J5,
  filled: eM,
  flushed: tM,
  unstyled: rM
}, fe = X5({
  baseStyle: Q5,
  sizes: Z5,
  variants: nM,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), _0, oM = {
  ...(_0 = fe.baseStyle) == null ? void 0 : _0.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, P0, T0, iM = {
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
  unstyled: (T0 = (P0 = fe.variants) == null ? void 0 : P0.unstyled.field) != null ? T0 : {}
}, E0, $0, A0, R0, M0, O0, I0, z0, aM = {
  xs: ($0 = (E0 = fe.sizes) == null ? void 0 : E0.xs.field) != null ? $0 : {},
  sm: (R0 = (A0 = fe.sizes) == null ? void 0 : A0.sm.field) != null ? R0 : {},
  md: (O0 = (M0 = fe.sizes) == null ? void 0 : M0.md.field) != null ? O0 : {},
  lg: (z0 = (I0 = fe.sizes) == null ? void 0 : I0.lg.field) != null ? z0 : {}
}, sM = {
  baseStyle: oM,
  sizes: aM,
  variants: iM,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, _l = Xe("tooltip-bg"), Yd = Xe("tooltip-fg"), lM = Xe("popper-arrow-bg"), uM = {
  bg: _l.reference,
  color: Yd.reference,
  [_l.variable]: "colors.gray.700",
  [Yd.variable]: "colors.whiteAlpha.900",
  _dark: {
    [_l.variable]: "colors.gray.300",
    [Yd.variable]: "colors.gray.900"
  },
  [lM.variable]: _l.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, cM = {
  baseStyle: uM
}, { defineMultiStyleConfig: dM, definePartsStyle: Pa } = _e(kR.keys), fM = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = V(
    y0(),
    y0("1rem", "rgba(0,0,0,0.1)")
  )(e), a = V(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${bt(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, pM = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, hM = (e) => ({
  bg: V("gray.100", "whiteAlpha.300")(e)
}), mM = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...fM(e)
}), vM = Pa((e) => ({
  label: pM,
  filledTrack: mM(e),
  track: hM(e)
})), gM = {
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
}, yM = dM({
  sizes: gM,
  baseStyle: vM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), bM = (e) => typeof e == "function";
function St(e, ...t) {
  return bM(e) ? e(...t) : e;
}
var { definePartsStyle: lu, defineMultiStyleConfig: xM } = _e(fR.keys), Ba = W("checkbox-size"), SM = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Ba.reference,
    h: Ba.reference,
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
}, wM = {
  _disabled: { cursor: "not-allowed" }
}, kM = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, CM = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, _M = lu((e) => ({
  icon: CM,
  container: wM,
  control: St(SM, e),
  label: kM
})), PM = {
  sm: lu({
    control: { [Ba.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: lu({
    control: { [Ba.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: lu({
    control: { [Ba.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Gu = xM({
  baseStyle: _M,
  sizes: PM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: TM, definePartsStyle: uu } = _e(CR.keys), EM = (e) => {
  var t;
  const r = (t = St(Gu.baseStyle, e)) == null ? void 0 : t.control;
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
}, $M = uu((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Gu).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Gu).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: EM(e)
  };
}), AM = {
  md: uu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: uu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: uu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, RM = TM({
  baseStyle: $M,
  sizes: AM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: MM, definePartsStyle: OM } = _e(_R.keys), Pl = W("select-bg"), D0, IM = {
  ...(D0 = fe.baseStyle) == null ? void 0 : D0.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: Pl.reference,
  [Pl.variable]: "colors.white",
  _dark: {
    [Pl.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: Pl.reference
  }
}, zM = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, DM = OM({
  field: IM,
  icon: zM
}), Tl = {
  paddingInlineEnd: "8"
}, F0, L0, j0, N0, B0, V0, W0, U0, FM = {
  lg: {
    ...(F0 = fe.sizes) == null ? void 0 : F0.lg,
    field: {
      ...(L0 = fe.sizes) == null ? void 0 : L0.lg.field,
      ...Tl
    }
  },
  md: {
    ...(j0 = fe.sizes) == null ? void 0 : j0.md,
    field: {
      ...(N0 = fe.sizes) == null ? void 0 : N0.md.field,
      ...Tl
    }
  },
  sm: {
    ...(B0 = fe.sizes) == null ? void 0 : B0.sm,
    field: {
      ...(V0 = fe.sizes) == null ? void 0 : V0.sm.field,
      ...Tl
    }
  },
  xs: {
    ...(W0 = fe.sizes) == null ? void 0 : W0.xs,
    field: {
      ...(U0 = fe.sizes) == null ? void 0 : U0.xs.field,
      ...Tl
    },
    icon: {
      insetEnd: "1"
    }
  }
}, LM = MM({
  baseStyle: DM,
  sizes: FM,
  variants: fe.variants,
  defaultProps: fe.defaultProps
}), qd = W("skeleton-start-color"), Xd = W("skeleton-end-color"), jM = {
  [qd.variable]: "colors.gray.100",
  [Xd.variable]: "colors.gray.400",
  _dark: {
    [qd.variable]: "colors.gray.800",
    [Xd.variable]: "colors.gray.600"
  },
  background: qd.reference,
  borderColor: Xd.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, NM = {
  baseStyle: jM
}, Qd = W("skip-link-bg"), BM = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Qd.variable]: "colors.white",
    _dark: {
      [Qd.variable]: "colors.gray.700"
    },
    bg: Qd.reference
  }
}, VM = {
  baseStyle: BM
}, { defineMultiStyleConfig: WM, definePartsStyle: Uc } = _e(PR.keys), bs = W("slider-thumb-size"), xs = W("slider-track-size"), wn = W("slider-bg"), UM = (e) => {
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
    ...wm({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, HM = (e) => ({
  ...wm({
    orientation: e.orientation,
    horizontal: { h: xs.reference },
    vertical: { w: xs.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [wn.variable]: "colors.gray.200",
  _dark: {
    [wn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [wn.variable]: "colors.gray.300",
    _dark: {
      [wn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: wn.reference
}), GM = (e) => {
  const { orientation: t } = e;
  return {
    ...wm({
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
}, KM = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [wn.variable]: `colors.${t}.500`,
    _dark: {
      [wn.variable]: `colors.${t}.200`
    },
    bg: wn.reference
  };
}, YM = Uc((e) => ({
  container: UM(e),
  track: HM(e),
  thumb: GM(e),
  filledTrack: KM(e)
})), qM = Uc({
  container: {
    [bs.variable]: "sizes.4",
    [xs.variable]: "sizes.1"
  }
}), XM = Uc({
  container: {
    [bs.variable]: "sizes.3.5",
    [xs.variable]: "sizes.1"
  }
}), QM = Uc({
  container: {
    [bs.variable]: "sizes.2.5",
    [xs.variable]: "sizes.0.5"
  }
}), ZM = {
  lg: qM,
  md: XM,
  sm: QM
}, JM = WM({
  baseStyle: YM,
  sizes: ZM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), io = Xe("spinner-size"), eO = {
  width: [io.reference],
  height: [io.reference]
}, tO = {
  xs: {
    [io.variable]: "sizes.3"
  },
  sm: {
    [io.variable]: "sizes.4"
  },
  md: {
    [io.variable]: "sizes.6"
  },
  lg: {
    [io.variable]: "sizes.8"
  },
  xl: {
    [io.variable]: "sizes.12"
  }
}, rO = {
  baseStyle: eO,
  sizes: tO,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: nO, definePartsStyle: VS } = _e(TR.keys), oO = {
  fontWeight: "medium"
}, iO = {
  opacity: 0.8,
  marginBottom: "2"
}, aO = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, sO = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, lO = VS({
  container: {},
  label: oO,
  helpText: iO,
  number: aO,
  icon: sO
}), uO = {
  md: VS({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, cO = nO({
  baseStyle: lO,
  sizes: uO,
  defaultProps: {
    size: "md"
  }
}), Zd = W("kbd-bg"), dO = {
  [Zd.variable]: "colors.gray.100",
  _dark: {
    [Zd.variable]: "colors.whiteAlpha.100"
  },
  bg: Zd.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, fO = {
  baseStyle: dO
}, pO = {
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
}, hO = {
  baseStyle: pO
}, { defineMultiStyleConfig: mO, definePartsStyle: vO } = _e(yR.keys), gO = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, yO = vO({
  icon: gO
}), bO = mO({
  baseStyle: yO
}), { defineMultiStyleConfig: xO, definePartsStyle: SO } = _e(bR.keys), Pr = W("menu-bg"), Jd = W("menu-shadow"), wO = {
  [Pr.variable]: "#fff",
  [Jd.variable]: "shadows.sm",
  _dark: {
    [Pr.variable]: "colors.gray.700",
    [Jd.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Pr.reference,
  boxShadow: Jd.reference
}, kO = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Pr.variable]: "colors.gray.100",
    _dark: {
      [Pr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Pr.variable]: "colors.gray.200",
    _dark: {
      [Pr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Pr.variable]: "colors.gray.100",
    _dark: {
      [Pr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Pr.reference
}, CO = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, _O = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, PO = {
  opacity: 0.6
}, TO = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, EO = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, $O = SO({
  button: EO,
  list: wO,
  item: kO,
  groupTitle: CO,
  icon: _O,
  command: PO,
  divider: TO
}), AO = xO({
  baseStyle: $O
}), { defineMultiStyleConfig: RO, definePartsStyle: zp } = _e(xR.keys), ef = W("modal-bg"), tf = W("modal-shadow"), MO = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, OO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, IO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [ef.variable]: "colors.white",
    [tf.variable]: "shadows.lg",
    _dark: {
      [ef.variable]: "colors.gray.700",
      [tf.variable]: "shadows.dark-lg"
    },
    bg: ef.reference,
    boxShadow: tf.reference
  };
}, zO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, DO = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, FO = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, LO = {
  px: "6",
  py: "4"
}, jO = zp((e) => ({
  overlay: MO,
  dialogContainer: St(OO, e),
  dialog: St(IO, e),
  header: zO,
  closeButton: DO,
  body: St(FO, e),
  footer: LO
}));
function dr(e) {
  return zp(e === "full" ? {
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
var NO = {
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
}, BO = RO({
  baseStyle: jO,
  sizes: NO,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: VO, definePartsStyle: WS } = _e(SR.keys), Cm = Xe("number-input-stepper-width"), US = Xe("number-input-input-padding"), WO = Hr(Cm).add("0.5rem").toString(), rf = Xe("number-input-bg"), nf = Xe("number-input-color"), of = Xe("number-input-border-color"), UO = {
  [Cm.variable]: "sizes.6",
  [US.variable]: WO
}, HO = (e) => {
  var t, r;
  return (r = (t = St(fe.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, GO = {
  width: Cm.reference
}, KO = {
  borderStart: "1px solid",
  borderStartColor: of.reference,
  color: nf.reference,
  bg: rf.reference,
  [nf.variable]: "colors.chakra-body-text",
  [of.variable]: "colors.chakra-border-color",
  _dark: {
    [nf.variable]: "colors.whiteAlpha.800",
    [of.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [rf.variable]: "colors.gray.200",
    _dark: {
      [rf.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, YO = WS((e) => {
  var t;
  return {
    root: UO,
    field: (t = St(HO, e)) != null ? t : {},
    stepperGroup: GO,
    stepper: KO
  };
});
function El(e) {
  var t, r, n;
  const o = (t = fe.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = FS.fontSizes[a];
  return WS({
    field: {
      ...o.field,
      paddingInlineEnd: US.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Hr(s).multiply(0.75).toString(),
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
var qO = {
  xs: El("xs"),
  sm: El("sm"),
  md: El("md"),
  lg: El("lg")
}, XO = VO({
  baseStyle: YO,
  sizes: qO,
  variants: fe.variants,
  defaultProps: fe.defaultProps
}), H0, QO = {
  ...(H0 = fe.baseStyle) == null ? void 0 : H0.field,
  textAlign: "center"
}, ZO = {
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
}, G0, K0, JO = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = St((t = fe.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = St((t = fe.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = St((t = fe.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (K0 = (G0 = fe.variants) == null ? void 0 : G0.unstyled.field) != null ? K0 : {}
}, eI = {
  baseStyle: QO,
  sizes: ZO,
  variants: JO,
  defaultProps: fe.defaultProps
}, { defineMultiStyleConfig: tI, definePartsStyle: rI } = _e(wR.keys), $l = Xe("popper-bg"), nI = Xe("popper-arrow-bg"), Y0 = Xe("popper-arrow-shadow-color"), oI = { zIndex: 10 }, iI = {
  [$l.variable]: "colors.white",
  bg: $l.reference,
  [nI.variable]: $l.reference,
  [Y0.variable]: "colors.gray.200",
  _dark: {
    [$l.variable]: "colors.gray.700",
    [Y0.variable]: "colors.whiteAlpha.300"
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
}, aI = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, sI = {
  px: 3,
  py: 2
}, lI = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, uI = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, cI = rI({
  popper: oI,
  content: iI,
  header: aI,
  body: sI,
  footer: lI,
  closeButton: uI
}), dI = tI({
  baseStyle: cI
}), { definePartsStyle: Dp, defineMultiStyleConfig: fI } = _e(pR.keys), af = W("drawer-bg"), sf = W("drawer-box-shadow");
function jo(e) {
  return Dp(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var pI = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, hI = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, mI = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [af.variable]: "colors.white",
    [sf.variable]: "shadows.lg",
    _dark: {
      [af.variable]: "colors.gray.700",
      [sf.variable]: "shadows.dark-lg"
    },
    bg: af.reference,
    boxShadow: sf.reference
  };
}, vI = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, gI = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, yI = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, bI = {
  px: "6",
  py: "4"
}, xI = Dp((e) => ({
  overlay: pI,
  dialogContainer: hI,
  dialog: St(mI, e),
  header: vI,
  closeButton: gI,
  body: yI,
  footer: bI
})), SI = {
  xs: jo("xs"),
  sm: jo("md"),
  md: jo("lg"),
  lg: jo("2xl"),
  xl: jo("4xl"),
  full: jo("full")
}, wI = fI({
  baseStyle: xI,
  sizes: SI,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: kI, defineMultiStyleConfig: CI } = _e(hR.keys), _I = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, PI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, TI = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, EI = kI({
  preview: _I,
  input: PI,
  textarea: TI
}), $I = CI({
  baseStyle: EI
}), { definePartsStyle: AI, defineMultiStyleConfig: RI } = _e(mR.keys), ki = W("form-control-color"), MI = {
  marginStart: "1",
  [ki.variable]: "colors.red.500",
  _dark: {
    [ki.variable]: "colors.red.300"
  },
  color: ki.reference
}, OI = {
  mt: "2",
  [ki.variable]: "colors.gray.600",
  _dark: {
    [ki.variable]: "colors.whiteAlpha.600"
  },
  color: ki.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, II = AI({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: MI,
  helperText: OI
}), zI = RI({
  baseStyle: II
}), { definePartsStyle: DI, defineMultiStyleConfig: FI } = _e(vR.keys), Ci = W("form-error-color"), LI = {
  [Ci.variable]: "colors.red.500",
  _dark: {
    [Ci.variable]: "colors.red.300"
  },
  color: Ci.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, jI = {
  marginEnd: "0.5em",
  [Ci.variable]: "colors.red.500",
  _dark: {
    [Ci.variable]: "colors.red.300"
  },
  color: Ci.reference
}, NI = DI({
  text: LI,
  icon: jI
}), BI = FI({
  baseStyle: NI
}), VI = {
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
}, WI = {
  baseStyle: VI
}, UI = {
  fontFamily: "heading",
  fontWeight: "bold"
}, HI = {
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
}, GI = {
  baseStyle: UI,
  sizes: HI,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: KI, definePartsStyle: YI } = _e(dR.keys), lf = W("breadcrumb-link-decor"), qI = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: lf.reference,
  [lf.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [lf.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, XI = YI({
  link: qI
}), QI = KI({
  baseStyle: XI
}), ZI = {
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
}, HS = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: V("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: V("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: V("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Fi(`${t}.200`, 0.12)(r), o = Fi(`${t}.200`, 0.24)(r);
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
}, JI = (e) => {
  const { colorScheme: t } = e, r = V("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...St(HS, e)
  };
}, ez = {
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
}, tz = (e) => {
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
  } = (t = ez[r]) != null ? t : {}, s = V(n, `${r}.200`)(e);
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
}, rz = (e) => {
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
}, nz = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, oz = {
  ghost: HS,
  outline: JI,
  solid: tz,
  link: rz,
  unstyled: nz
}, iz = {
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
}, az = {
  baseStyle: ZI,
  variants: oz,
  sizes: iz,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: vo, defineMultiStyleConfig: sz } = _e(MR.keys), Ku = W("card-bg"), Zr = W("card-padding"), GS = W("card-shadow"), cu = W("card-radius"), KS = W("card-border-width", "0"), YS = W("card-border-color"), lz = vo({
  container: {
    [Ku.variable]: "colors.chakra-body-bg",
    backgroundColor: Ku.reference,
    boxShadow: GS.reference,
    borderRadius: cu.reference,
    color: "chakra-body-text",
    borderWidth: KS.reference,
    borderColor: YS.reference
  },
  body: {
    padding: Zr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Zr.reference
  },
  footer: {
    padding: Zr.reference
  }
}), uz = {
  sm: vo({
    container: {
      [cu.variable]: "radii.base",
      [Zr.variable]: "space.3"
    }
  }),
  md: vo({
    container: {
      [cu.variable]: "radii.md",
      [Zr.variable]: "space.5"
    }
  }),
  lg: vo({
    container: {
      [cu.variable]: "radii.xl",
      [Zr.variable]: "space.7"
    }
  })
}, cz = {
  elevated: vo({
    container: {
      [GS.variable]: "shadows.base",
      _dark: {
        [Ku.variable]: "colors.gray.700"
      }
    }
  }),
  outline: vo({
    container: {
      [KS.variable]: "1px",
      [YS.variable]: "colors.chakra-border-color"
    }
  }),
  filled: vo({
    container: {
      [Ku.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Zr.variable]: 0
    },
    header: {
      [Zr.variable]: 0
    },
    footer: {
      [Zr.variable]: 0
    }
  }
}, dz = sz({
  baseStyle: lz,
  variants: cz,
  sizes: uz,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Va = Xe("close-button-size"), pa = Xe("close-button-bg"), fz = {
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
}, pz = {
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
}, hz = {
  baseStyle: fz,
  sizes: pz,
  defaultProps: {
    size: "md"
  }
}, { variants: mz, defaultProps: vz } = Na, gz = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: Ve.bg.reference,
  color: Ve.color.reference,
  boxShadow: Ve.shadow.reference
}, yz = {
  baseStyle: gz,
  variants: mz,
  defaultProps: vz
}, bz = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, xz = {
  baseStyle: bz
}, Sz = {
  opacity: 0.6,
  borderColor: "inherit"
}, wz = {
  borderStyle: "solid"
}, kz = {
  borderStyle: "dashed"
}, Cz = {
  solid: wz,
  dashed: kz
}, _z = {
  baseStyle: Sz,
  variants: Cz,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: Pz, defineMultiStyleConfig: Tz } = _e(lR.keys), Ez = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, $z = {
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
}, Az = {
  pt: "2",
  px: "4",
  pb: "5"
}, Rz = {
  fontSize: "1.25em"
}, Mz = Pz({
  container: Ez,
  button: $z,
  panel: Az,
  icon: Rz
}), Oz = Tz({ baseStyle: Mz }), { definePartsStyle: js, defineMultiStyleConfig: Iz } = _e(uR.keys), jt = W("alert-fg"), an = W("alert-bg"), zz = js({
  container: {
    bg: an.reference,
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
    color: jt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: jt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function _m(e) {
  const { theme: t, colorScheme: r } = e, n = Fi(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var Dz = js((e) => {
  const { colorScheme: t } = e, r = _m(e);
  return {
    container: {
      [jt.variable]: `colors.${t}.600`,
      [an.variable]: r.light,
      _dark: {
        [jt.variable]: `colors.${t}.200`,
        [an.variable]: r.dark
      }
    }
  };
}), Fz = js((e) => {
  const { colorScheme: t } = e, r = _m(e);
  return {
    container: {
      [jt.variable]: `colors.${t}.600`,
      [an.variable]: r.light,
      _dark: {
        [jt.variable]: `colors.${t}.200`,
        [an.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: jt.reference
    }
  };
}), Lz = js((e) => {
  const { colorScheme: t } = e, r = _m(e);
  return {
    container: {
      [jt.variable]: `colors.${t}.600`,
      [an.variable]: r.light,
      _dark: {
        [jt.variable]: `colors.${t}.200`,
        [an.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: jt.reference
    }
  };
}), jz = js((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [jt.variable]: "colors.white",
      [an.variable]: `colors.${t}.600`,
      _dark: {
        [jt.variable]: "colors.gray.900",
        [an.variable]: `colors.${t}.200`
      },
      color: jt.reference
    }
  };
}), Nz = {
  subtle: Dz,
  "left-accent": Fz,
  "top-accent": Lz,
  solid: jz
}, Bz = Iz({
  baseStyle: zz,
  variants: Nz,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: qS, defineMultiStyleConfig: Vz } = _e(cR.keys), _i = W("avatar-border-color"), Wa = W("avatar-bg"), Ss = W("avatar-font-size"), Li = W("avatar-size"), Wz = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: _i.reference,
  [_i.variable]: "white",
  _dark: {
    [_i.variable]: "colors.gray.800"
  }
}, Uz = {
  bg: Wa.reference,
  fontSize: Ss.reference,
  width: Li.reference,
  height: Li.reference,
  lineHeight: "1",
  [Wa.variable]: "colors.gray.200",
  _dark: {
    [Wa.variable]: "colors.whiteAlpha.400"
  }
}, Hz = (e) => {
  const { name: t, theme: r } = e, n = t ? ZR({ string: t }) : "colors.gray.400", o = XR(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: Wa.reference,
    fontSize: Ss.reference,
    color: i,
    borderColor: _i.reference,
    verticalAlign: "top",
    width: Li.reference,
    height: Li.reference,
    "&:not([data-loaded])": {
      [Wa.variable]: n
    },
    [_i.variable]: "colors.white",
    _dark: {
      [_i.variable]: "colors.gray.800"
    }
  };
}, Gz = {
  fontSize: Ss.reference,
  lineHeight: "1"
}, Kz = qS((e) => ({
  badge: St(Wz, e),
  excessLabel: St(Uz, e),
  container: St(Hz, e),
  label: Gz
}));
function mn(e) {
  const t = e !== "100%" ? jS[e] : void 0;
  return qS({
    container: {
      [Li.variable]: t ?? e,
      [Ss.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Li.variable]: t ?? e,
      [Ss.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var Yz = {
  "2xs": mn(4),
  xs: mn(6),
  sm: mn(8),
  md: mn(12),
  lg: mn(16),
  xl: mn(24),
  "2xl": mn(32),
  full: mn("100%")
}, qz = Vz({
  baseStyle: Kz,
  sizes: Yz,
  defaultProps: {
    size: "md"
  }
}), Xz = {
  Accordion: Oz,
  Alert: Bz,
  Avatar: qz,
  Badge: Na,
  Breadcrumb: QI,
  Button: az,
  Checkbox: Gu,
  CloseButton: hz,
  Code: yz,
  Container: xz,
  Divider: _z,
  Drawer: wI,
  Editable: $I,
  Form: zI,
  FormError: BI,
  FormLabel: WI,
  Heading: GI,
  Input: fe,
  Kbd: fO,
  Link: hO,
  List: bO,
  Menu: AO,
  Modal: BO,
  NumberInput: XO,
  PinInput: eI,
  Popover: dI,
  Progress: yM,
  Radio: RM,
  Select: LM,
  Skeleton: NM,
  SkipLink: VM,
  Slider: JM,
  Spinner: rO,
  Stat: cO,
  Switch: h5,
  Table: S5,
  Tabs: D5,
  Tag: q5,
  Textarea: sM,
  Tooltip: cM,
  Card: dz,
  Stepper: sR
}, Qz = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Zz = {
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
}, Jz = "ltr", eD = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, XS = {
  semanticTokens: Qz,
  direction: Jz,
  ...oR,
  components: Xz,
  styles: Zz,
  config: eD
};
function Ta(e) {
  return typeof e == "function";
}
function tD(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var rD = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return IA(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, tD(
    ...n.map(
      (i) => (a) => Ta(i) ? i(a) : oD(a, i)
    )
  )(o);
}, nD = rD(XS);
function oD(...e) {
  return er({}, ...e, QS);
}
function QS(e, t, r, n) {
  if ((Ta(e) || Ta(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = Ta(e) ? e(...o) : e, a = Ta(t) ? t(...o) : t;
      return er({}, i, a, QS);
    };
}
function iD(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function aD(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var sD = (e) => {
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
}, ZS = sD(aD);
function JS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var ew = (e) => JS(e, (t) => t != null);
function lD(e) {
  return typeof e == "function";
}
function tw(e, ...t) {
  return lD(e) ? e(...t) : e;
}
var uD = typeof Element < "u", cD = typeof Map == "function", dD = typeof Set == "function", fD = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function du(e, t) {
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
        if (!du(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (cD && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!du(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (dD && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (fD && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (uD && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !du(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var pD = function(t, r) {
  try {
    return du(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const hD = /* @__PURE__ */ Rs(pD);
function rw(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = v$(), s = e ? ZS(i, `components.${e}`) : void 0, l = n || s, u = er(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    ew(iD(o, ["children"]))
  ), c = b.useRef({});
  if (l) {
    const f = MA(l)(u);
    hD(c.current, f) || (c.current = f);
  }
  return c.current;
}
function qi(e, t = {}) {
  return rw(e, t);
}
function Ro(e, t = {}) {
  return rw(e, t);
}
var mD = /* @__PURE__ */ new Set([
  ...xA,
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
]), vD = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function gD(e) {
  return vD.has(e) || !mD.has(e);
}
function yD(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function bD(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var xD = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, SD = /* @__PURE__ */ fS(
  function(e) {
    return xD.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wD = SD, kD = function(t) {
  return t !== "theme";
}, q0 = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? wD : kD;
}, X0 = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, CD = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return yS(r, n, o), KE(function() {
    return bS(r, n, o);
  }), null;
}, _D = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = X0(t, r, n), l = s || q0(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var v = kS(function(g, x, m) {
      var h = u && g.as || o, y = "", w = [], C = g;
      if (g.theme == null) {
        C = {};
        for (var E in g)
          C[E] = g[E];
        C.theme = b.useContext(gs);
      }
      typeof g.className == "string" ? y = NE(x.registered, w, g.className) : g.className != null && (y = g.className + " ");
      var _ = pm(d.concat(w), x.registered, C);
      y += x.key + "-" + _.name, a !== void 0 && (y += " " + a);
      var $ = u && s === void 0 ? q0(h) : l, R = {};
      for (var M in g)
        u && M === "as" || // $FlowFixMe
        $(M) && (R[M] = g[M]);
      return R.className = y, R.ref = m, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(CD, {
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
      return e(g, Po({}, r, x, {
        shouldForwardProp: X0(v, x, !0)
      })).apply(void 0, d);
    }, v;
  };
}, PD = [
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
], Yu = _D.bind();
PD.forEach(function(e) {
  Yu[e] = Yu(e);
});
var Q0, TD = (Q0 = Yu.default) != null ? Q0 : Yu, ED = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = JS(a, (d, f) => wA(f)), l = tw(e, t), u = yD(
    {},
    o,
    l,
    ew(s),
    i
  ), c = DS(u)(t.theme);
  return n ? [c, n] : c;
};
function uf(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = gD);
  const o = ED({ baseStyle: r }), i = TD(
    e,
    n
  )(o);
  return xo.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = gm();
    return xo.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function $D() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(uf, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return uf(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, uf(r)), e.get(r);
    }
  });
}
var Z = $D();
function xe(e) {
  return b.forwardRef(e);
}
function AD(e = {}) {
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
function RD(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = b.useMemo(() => bA(r), [r]);
  return /* @__PURE__ */ k.jsxs(XE, { theme: o, children: [
    /* @__PURE__ */ k.jsx(MD, { root: t }),
    n
  ] });
}
function MD({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ k.jsx(jc, { styles: (r) => ({ [t]: r.__cssVars }) });
}
AD({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function OD() {
  const { colorMode: e } = gm();
  return /* @__PURE__ */ k.jsx(
    jc,
    {
      styles: (t) => {
        const r = ZS(t, "styles.global"), n = tw(r, { theme: t, colorMode: e });
        return n ? DS(n)(t) : void 0;
      }
    }
  );
}
var nw = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
nw.displayName = "EnvironmentContext";
function ow(e) {
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
  return /* @__PURE__ */ k.jsxs(nw.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ k.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
ow.displayName = "EnvironmentProvider";
var ID = (e) => {
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
  } = e, d = /* @__PURE__ */ k.jsx(
    ow,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ k.jsx(RD, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ k.jsxs(
    ES,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ k.jsx(JE, { scope: o }) : /* @__PURE__ */ k.jsx(ZE, {}),
        !c && /* @__PURE__ */ k.jsx(OD, {}),
        n ? /* @__PURE__ */ k.jsx(PS, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, zD = (e, t) => e.find((r) => r.id === t);
function Z0(e, t) {
  const r = iw(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function iw(e, t) {
  for (const [r, n] of Object.entries(e))
    if (zD(n, t))
      return r;
}
function DD(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function FD(e) {
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
function zr(e, t = []) {
  const r = b.useRef(e);
  return b.useEffect(() => {
    r.current = e;
  }), b.useCallback((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function LD(e, t) {
  const r = zr(e);
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
const aw = b.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Hc = b.createContext({}), Ns = b.createContext(null), Gc = typeof document < "u", Pm = Gc ? b.useLayoutEffect : b.useEffect, sw = b.createContext({ strict: !1 }), Tm = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), jD = "framerAppearId", lw = "data-" + Tm(jD);
function ND(e, t, r, n) {
  const { visualElement: o } = b.useContext(Hc), i = b.useContext(sw), a = b.useContext(Ns), s = b.useContext(aw).reducedMotion, l = b.useRef();
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
  const c = b.useRef(!!r[lw]);
  return Pm(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), b.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function ci(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function BD(e, t, r) {
  return b.useCallback(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : ci(r) && (r.current = n));
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
const Em = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], $m = ["initial", ...Em];
function Yc(e) {
  return Kc(e.animate) || $m.some((t) => ks(e[t]));
}
function uw(e) {
  return !!(Yc(e) || e.variants);
}
function VD(e, t) {
  if (Yc(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || ks(r) ? r : void 0,
      animate: ks(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function WD(e) {
  const { initial: t, animate: r } = VD(e, b.useContext(Hc));
  return b.useMemo(() => ({ initial: t, animate: r }), [J0(t), J0(r)]);
}
function J0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ey = {
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
for (const e in ey)
  Cs[e] = {
    isEnabled: (t) => ey[e].some((r) => !!t[r])
  };
function UD(e) {
  for (const t in e)
    Cs[t] = {
      ...Cs[t],
      ...e[t]
    };
}
const Am = b.createContext({}), cw = b.createContext({}), HD = Symbol.for("motionComponentSymbol");
function GD({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && UD(e);
  function i(s, l) {
    let u;
    const c = {
      ...b.useContext(aw),
      ...s,
      layoutId: KD(s)
    }, { isStatic: d } = c, f = WD(s), p = n(s, d);
    if (!d && Gc) {
      f.visualElement = ND(o, p, c, t);
      const v = b.useContext(cw), g = b.useContext(sw).strict;
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
      r(o, s, BD(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = b.forwardRef(i);
  return a[HD] = o, a;
}
function KD({ layoutId: e }) {
  const t = b.useContext(Am).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function YD(e) {
  function t(n, o = {}) {
    return GD(e(n, o));
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
const qD = [
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
function Rm(e) {
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
      !!(qD.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const qu = {};
function XD(e) {
  Object.assign(qu, e);
}
const Bs = [
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
], Mo = new Set(Bs);
function dw(e, { layout: t, layoutId: r }) {
  return Mo.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!qu[e] || e === "opacity");
}
const Ot = (e) => !!(e && e.getVelocity), QD = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ZD = Bs.length;
function JD(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < ZD; a++) {
    const s = Bs[a];
    if (e[s] !== void 0) {
      const l = QD[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const fw = (e) => (t) => typeof t == "string" && t.startsWith(e), pw = fw("--"), Fp = fw("var(--"), eF = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, tF = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Nn = (e, t, r) => Math.min(Math.max(r, e), t), Oo = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ua = {
  ...Oo,
  transform: (e) => Nn(0, 1, e)
}, Al = {
  ...Oo,
  default: 1
}, Ha = (e) => Math.round(e * 1e5) / 1e5, qc = /(-)?([\d]*\.?[\d])+/g, hw = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, rF = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Vs(e) {
  return typeof e == "string";
}
const Ws = (e) => ({
  test: (t) => Vs(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), vn = Ws("deg"), Dr = Ws("%"), U = Ws("px"), nF = Ws("vh"), oF = Ws("vw"), ty = {
  ...Dr,
  parse: (e) => Dr.parse(e) / 100,
  transform: (e) => Dr.transform(e * 100)
}, ry = {
  ...Oo,
  transform: Math.round
}, mw = {
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
  rotate: vn,
  rotateX: vn,
  rotateY: vn,
  rotateZ: vn,
  scale: Al,
  scaleX: Al,
  scaleY: Al,
  scaleZ: Al,
  skew: vn,
  skewX: vn,
  skewY: vn,
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
  originX: ty,
  originY: ty,
  originZ: U,
  // Misc
  zIndex: ry,
  // SVG
  fillOpacity: Ua,
  strokeOpacity: Ua,
  numOctaves: ry
};
function Mm(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (pw(d)) {
      i[d] = f;
      continue;
    }
    const p = mw[d], v = tF(f, p);
    if (Mo.has(d)) {
      if (l = !0, a[d] = v, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = v) : o[d] = v;
  }
  if (t.transform || (l || n ? o.transform = JD(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Om = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function vw(e, t, r) {
  for (const n in t)
    !Ot(t[n]) && !dw(n, r) && (e[n] = t[n]);
}
function iF({ transformTemplate: e }, t, r) {
  return b.useMemo(() => {
    const n = Om();
    return Mm(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function aF(e, t, r) {
  const n = e.style || {}, o = {};
  return vw(o, n, e), Object.assign(o, iF(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function sF(e, t, r) {
  const n = {}, o = aF(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const lF = /* @__PURE__ */ new Set([
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
function Xu(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || lF.has(e);
}
let gw = (e) => !Xu(e);
function uF(e) {
  e && (gw = (t) => t.startsWith("on") ? !Xu(t) : e(t));
}
try {
  uF(require("@emotion/is-prop-valid").default);
} catch {
}
function cF(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (gw(o) || r === !0 && Xu(o) || !t && !Xu(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function ny(e, t, r) {
  return typeof e == "string" ? e : U.transform(t + r * e);
}
function dF(e, t, r) {
  const n = ny(t, e.x, e.width), o = ny(r, e.y, e.height);
  return `${n} ${o}`;
}
const fF = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, pF = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function hF(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? fF : pF;
  e[i.offset] = U.transform(-n);
  const a = U.transform(t), s = U.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Im(e, {
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
  if (Mm(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: v, dimensions: g } = e;
  p.transform && (g && (v.transform = p.transform), delete p.transform), g && (o !== void 0 || i !== void 0 || v.transform) && (v.transformOrigin = dF(g, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && hF(p, a, s, l, !1);
}
const yw = () => ({
  ...Om(),
  attrs: {}
}), zm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function mF(e, t, r, n) {
  const o = b.useMemo(() => {
    const i = yw();
    return Im(i, t, { enableHardwareAcceleration: !1 }, zm(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    vw(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function vF(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (Rm(r) ? mF : sF)(n, i, a, r), c = {
      ...cF(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = b.useMemo(() => Ot(d) ? d.get() : d, [d]);
    return b.createElement(r, {
      ...c,
      children: f
    });
  };
}
function bw(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const xw = /* @__PURE__ */ new Set([
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
function Sw(e, t, r, n) {
  bw(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(xw.has(o) ? o : Tm(o), t.attrs[o]);
}
function Dm(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Ot(r[o]) || t.style && Ot(t.style[o]) || dw(o, e)) && (n[o] = r[o]);
  return n;
}
function ww(e, t) {
  const r = Dm(e, t);
  for (const n in e)
    if (Ot(e[n]) || Ot(t[n])) {
      const o = Bs.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Fm(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function kw(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Qu = (e) => Array.isArray(e), gF = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), yF = (e) => Qu(e) ? e[e.length - 1] || 0 : e;
function fu(e) {
  const t = Ot(e) ? e.get() : e;
  return gF(t) ? t.toValue() : t;
}
function bF({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: xF(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const Cw = (e) => (t, r) => {
  const n = b.useContext(Hc), o = b.useContext(Ns), i = () => bF(e, t, n, o);
  return r ? i() : kw(i);
};
function xF(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = fu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Yc(e), u = uw(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Kc(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const v = Fm(e, p);
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
const Ne = (e) => e;
class oy {
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
function SF(e) {
  let t = new oy(), r = new oy(), n = 0, o = !1, i = !1;
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
const Rl = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], wF = 40;
function kF(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Rl.reduce((d, f) => (d[f] = SF(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, wF), 1), o.timestamp = d, o.isProcessing = !0, Rl.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: Rl.reduce((d, f) => {
    const p = i[f];
    return d[f] = (v, g = !1, x = !1) => (r || l(), p.schedule(v, g, x)), d;
  }, {}), cancel: (d) => Rl.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: Ce, cancel: sn, state: Ze, steps: cf } = kF(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, !0), CF = {
  useVisualState: Cw({
    scrapeMotionValuesFromProps: ww,
    createRenderState: yw,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      Ce.read(() => {
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
      }), Ce.render(() => {
        Im(r, n, { enableHardwareAcceleration: !1 }, zm(t.tagName), e.transformTemplate), Sw(t, r);
      });
    }
  })
}, _F = {
  useVisualState: Cw({
    scrapeMotionValuesFromProps: Dm,
    createRenderState: Om
  })
};
function PF(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Rm(e) ? CF : _F,
    preloadedFeatures: r,
    useRender: vF(t),
    createVisualElement: n,
    Component: e
  };
}
function Xr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const _w = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Xc(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const TF = (e) => (t) => _w(t) && e(t, Xc(t));
function Jr(e, t, r, n) {
  return Xr(e, t, TF(r), n);
}
const EF = (e, t) => (r) => t(e(r)), Dn = (...e) => e.reduce(EF);
function Pw(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const iy = Pw("dragHorizontal"), ay = Pw("dragVertical");
function Tw(e) {
  let t = !1;
  if (e === "y")
    t = ay();
  else if (e === "x")
    t = iy();
  else {
    const r = iy(), n = ay();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Ew() {
  const e = Tw(!0);
  return e ? (e(), !1) : !0;
}
class Hn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function sy(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || Ew())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && Ce.update(() => s[n](i, a));
  };
  return Jr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class $F extends Hn {
  mount() {
    this.unmount = Dn(sy(this.node, !0), sy(this.node, !1));
  }
  unmount() {
  }
}
class AF extends Hn {
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
    this.unmount = Dn(Xr(this.node.current, "focus", () => this.onFocus()), Xr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const $w = (e, t) => t ? e === t ? !0 : $w(e, t.parentElement) : !1;
function df(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Xc(r));
}
class RF extends Hn {
  constructor() {
    super(...arguments), this.removeStartListeners = Ne, this.removeEndListeners = Ne, this.removeAccessibleListeners = Ne, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = Jr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        Ce.update(() => {
          $w(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = Jr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = Dn(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || df("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && Ce.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Xr(this.node.current, "keyup", a), df("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Xr(this.node.current, "keydown", t), n = () => {
        this.isPressing && df("cancel", (i, a) => this.cancelPress(i, a));
      }, o = Xr(this.node.current, "blur", n);
      this.removeAccessibleListeners = Dn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Ce.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Ew();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && Ce.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Jr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Xr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Dn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Lp = /* @__PURE__ */ new WeakMap(), ff = /* @__PURE__ */ new WeakMap(), MF = (e) => {
  const t = Lp.get(e.target);
  t && t(e);
}, OF = (e) => {
  e.forEach(MF);
};
function IF({ root: e, ...t }) {
  const r = e || document;
  ff.has(r) || ff.set(r, {});
  const n = ff.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(OF, { root: e, ...t })), n[o];
}
function zF(e, t, r) {
  const n = IF(t);
  return Lp.set(e, r), n.observe(e), () => {
    Lp.delete(e), n.unobserve(e);
  };
}
const DF = {
  some: 0,
  all: 1
};
class FF extends Hn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : DF[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return zF(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(LF(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function LF({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const jF = {
  inView: {
    Feature: FF
  },
  tap: {
    Feature: RF
  },
  focus: {
    Feature: AF
  },
  hover: {
    Feature: $F
  }
};
function Aw(e, t) {
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
function NF(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function BF(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Qc(e, t, r) {
  const n = e.getProps();
  return Fm(n, t, r !== void 0 ? r : n.custom, NF(e), BF(e));
}
let VF = Ne, Lm = Ne;
const Fn = (e) => e * 1e3, en = (e) => e / 1e3, WF = {
  current: !1
}, Rw = (e) => Array.isArray(e) && typeof e[0] == "number";
function Mw(e) {
  return !!(!e || typeof e == "string" && Ow[e] || Rw(e) || Array.isArray(e) && e.every(Mw));
}
const Ea = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, Ow = {
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
function Iw(e) {
  if (e)
    return Rw(e) ? Ea(e) : Array.isArray(e) ? e.map(Iw) : Ow[e];
}
function UF(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = Iw(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function HF(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const zw = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, GF = 1e-7, KF = 12;
function YF(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = zw(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > GF && ++s < KF);
  return a;
}
function Us(e, t, r, n) {
  if (e === t && r === n)
    return Ne;
  const o = (i) => YF(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : zw(o(i), t, n);
}
const qF = Us(0.42, 0, 1, 1), XF = Us(0, 0, 0.58, 1), Dw = Us(0.42, 0, 0.58, 1), QF = (e) => Array.isArray(e) && typeof e[0] != "number", Fw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Lw = (e) => (t) => 1 - e(1 - t), jw = (e) => 1 - Math.sin(Math.acos(e)), jm = Lw(jw), ZF = Fw(jm), Nw = Us(0.33, 1.53, 0.69, 0.99), Nm = Lw(Nw), JF = Fw(Nm), e3 = (e) => (e *= 2) < 1 ? 0.5 * Nm(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), t3 = {
  linear: Ne,
  easeIn: qF,
  easeInOut: Dw,
  easeOut: XF,
  circIn: jw,
  circInOut: ZF,
  circOut: jm,
  backIn: Nm,
  backInOut: JF,
  backOut: Nw,
  anticipate: e3
}, ly = (e) => {
  if (Array.isArray(e)) {
    Lm(e.length === 4);
    const [t, r, n, o] = e;
    return Us(t, r, n, o);
  } else if (typeof e == "string")
    return t3[e];
  return e;
}, Bm = (e, t) => (r) => !!(Vs(r) && rF.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Bw = (e, t, r) => (n) => {
  if (!Vs(n))
    return n;
  const [o, i, a, s] = n.match(qc);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, r3 = (e) => Nn(0, 255, e), pf = {
  ...Oo,
  transform: (e) => Math.round(r3(e))
}, co = {
  test: Bm("rgb", "red"),
  parse: Bw("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + pf.transform(e) + ", " + pf.transform(t) + ", " + pf.transform(r) + ", " + Ha(Ua.transform(n)) + ")"
};
function n3(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const jp = {
  test: Bm("#"),
  parse: n3,
  transform: co.transform
}, di = {
  test: Bm("hsl", "hue"),
  parse: Bw("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Dr.transform(Ha(t)) + ", " + Dr.transform(Ha(r)) + ", " + Ha(Ua.transform(n)) + ")"
}, vt = {
  test: (e) => co.test(e) || jp.test(e) || di.test(e),
  parse: (e) => co.test(e) ? co.parse(e) : di.test(e) ? di.parse(e) : jp.parse(e),
  transform: (e) => Vs(e) ? e : e.hasOwnProperty("red") ? co.transform(e) : di.transform(e)
}, ze = (e, t, r) => -r * e + r * t + e;
function hf(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function o3({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = hf(l, s, e + 1 / 3), i = hf(l, s, e), a = hf(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const mf = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, i3 = [jp, co, di], a3 = (e) => i3.find((t) => t.test(e));
function uy(e) {
  const t = a3(e);
  let r = t.parse(e);
  return t === di && (r = o3(r)), r;
}
const Vw = (e, t) => {
  const r = uy(e), n = uy(t), o = { ...r };
  return (i) => (o.red = mf(r.red, n.red, i), o.green = mf(r.green, n.green, i), o.blue = mf(r.blue, n.blue, i), o.alpha = ze(r.alpha, n.alpha, i), co.transform(o));
};
function s3(e) {
  var t, r;
  return isNaN(e) && Vs(e) && (((t = e.match(qc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(hw)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Ww = {
  regex: eF,
  countKey: "Vars",
  token: "${v}",
  parse: Ne
}, Uw = {
  regex: hw,
  countKey: "Colors",
  token: "${c}",
  parse: vt.parse
}, Hw = {
  regex: qc,
  countKey: "Numbers",
  token: "${n}",
  parse: Oo.parse
};
function vf(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function Zu(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && vf(r, Ww), vf(r, Uw), vf(r, Hw), r;
}
function Gw(e) {
  return Zu(e).values;
}
function Kw(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Zu(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(Ww.token, a[l]) : l < n + r ? s = s.replace(Uw.token, vt.transform(a[l])) : s = s.replace(Hw.token, Ha(a[l]));
    return s;
  };
}
const l3 = (e) => typeof e == "number" ? 0 : e;
function u3(e) {
  const t = Gw(e);
  return Kw(e)(t.map(l3));
}
const Bn = {
  test: s3,
  parse: Gw,
  createTransformer: Kw,
  getAnimatableNone: u3
}, Yw = (e, t) => (r) => `${r > 0 ? t : e}`;
function qw(e, t) {
  return typeof e == "number" ? (r) => ze(e, t, r) : vt.test(e) ? Vw(e, t) : e.startsWith("var(") ? Yw(e, t) : Qw(e, t);
}
const Xw = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => qw(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, c3 = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = qw(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, Qw = (e, t) => {
  const r = Bn.createTransformer(t), n = Zu(e), o = Zu(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? Dn(Xw(n.values, o.values), r) : Yw(e, t);
}, _s = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, cy = (e, t) => (r) => ze(e, t, r);
function d3(e) {
  return typeof e == "number" ? cy : typeof e == "string" ? vt.test(e) ? Vw : Qw : Array.isArray(e) ? Xw : typeof e == "object" ? c3 : cy;
}
function f3(e, t, r) {
  const n = [], o = r || d3(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ne : t;
      s = Dn(l, s);
    }
    n.push(s);
  }
  return n;
}
function Zw(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Lm(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = f3(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = _s(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(Nn(e[0], e[i - 1], u)) : l;
}
function p3(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = _s(0, t, n);
    e.push(ze(r, 1, o));
  }
}
function h3(e) {
  const t = [0];
  return p3(t, e.length - 1), t;
}
function m3(e, t) {
  return e.map((r) => r * t);
}
function v3(e, t) {
  return e.map(() => t || Dw).splice(0, e.length - 1);
}
function Ju({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = QF(n) ? n.map(ly) : ly(n), i = {
    done: !1,
    value: t[0]
  }, a = m3(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : h3(t),
    e
  ), s = Zw(a, t, {
    ease: Array.isArray(o) ? o : v3(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Jw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const g3 = 5;
function ek(e, t, r) {
  const n = Math.max(t - g3, 0);
  return Jw(r - e(n), t - n);
}
const gf = 1e-3, y3 = 0.01, dy = 10, b3 = 0.05, x3 = 1;
function S3({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  VF(e <= Fn(dy));
  let a = 1 - t;
  a = Nn(b3, x3, a), e = Nn(y3, dy, en(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, p = Np(u, a), v = Math.exp(-d);
    return gf - f / p * v;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(u, 2) * e, v = Math.exp(-d), g = Np(Math.pow(u, 2), a);
    return (-o(u) + gf > 0 ? -1 : 1) * ((f - p) * v) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -gf + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = k3(o, i, s);
  if (e = Fn(e), isNaN(l))
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
const w3 = 12;
function k3(e, t, r) {
  let n = r;
  for (let o = 1; o < w3; o++)
    n = n - e(n) / t(n);
  return n;
}
function Np(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const C3 = ["duration", "bounce"], _3 = ["stiffness", "damping", "mass"];
function fy(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function P3(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!fy(e, _3) && fy(e, C3)) {
    const r = S3(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function tk({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = P3(n), p = c ? -en(c) : 0, v = l / (2 * Math.sqrt(s * u)), g = i - o, x = en(Math.sqrt(s / u)), m = Math.abs(g) < 5;
  r || (r = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (v < 1) {
    const y = Np(x, v);
    h = (w) => {
      const C = Math.exp(-v * x * w);
      return i - C * ((p + v * x * g) / y * Math.sin(y * w) + g * Math.cos(y * w));
    };
  } else if (v === 1)
    h = (y) => i - Math.exp(-x * y) * (g + (p + x * g) * y);
  else {
    const y = x * Math.sqrt(v * v - 1);
    h = (w) => {
      const C = Math.exp(-v * x * w), E = Math.min(y * w, 300);
      return i - C * ((p + v * x * g) * Math.sinh(E) + y * g * Math.cosh(E)) / y;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (y) => {
      const w = h(y);
      if (f)
        a.done = y >= d;
      else {
        let C = p;
        y !== 0 && (v < 1 ? C = ek(h, y, w) : C = 0);
        const E = Math.abs(C) <= r, _ = Math.abs(i - w) <= t;
        a.done = E && _;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function py({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
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
  let C, E;
  const _ = ($) => {
    p(f.value) && (C = $, E = tk({
      keyframes: [f.value, v(f.value)],
      velocity: ek(y, $, f.value),
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
      return !E && C === void 0 && (R = !0, w($), _($)), C !== void 0 && $ > C ? E.next($ - C) : (!R && w($), f);
    }
  };
}
const T3 = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => Ce.update(t, !0),
    stop: () => sn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Ze.isProcessing ? Ze.timestamp : performance.now()
  };
}, hy = 2e4;
function my(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < hy; )
    t += r, n = e.next(t);
  return t >= hy ? 1 / 0 : t;
}
const E3 = {
  decay: py,
  inertia: py,
  tween: Ju,
  keyframes: Ju,
  spring: tk
};
function ec({ autoplay: e = !0, delay: t = 0, driver: r = T3, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, v = !1, g, x;
  const m = () => {
    x = new Promise((N) => {
      g = N;
    });
  };
  m();
  let h;
  const y = E3[o] || Ju;
  let w;
  y !== Ju && typeof n[0] != "number" && (w = Zw([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const C = y({ ...f, keyframes: n });
  let E;
  s === "mirror" && (E = y({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let _ = "idle", $ = null, R = null, M = null;
  C.calculatedDuration === null && i && (C.calculatedDuration = my(C));
  const { calculatedDuration: L } = C;
  let q = 1 / 0, G = 1 / 0;
  L !== null && (q = L + a, G = q * (i + 1) - a);
  let K = 0;
  const J = (N) => {
    if (R === null)
      return;
    p > 0 && (R = Math.min(R, N)), p < 0 && (R = Math.min(N - G / p, R)), $ !== null ? K = $ : K = Math.round(N - R) * p;
    const X = K - t * (p >= 0 ? 1 : -1), H = p >= 0 ? X < 0 : X > G;
    K = Math.max(X, 0), _ === "finished" && $ === null && (K = G);
    let Q = K, Pe = C;
    if (i) {
      const Ae = K / q;
      let Ge = Math.floor(Ae), Ke = Ae % 1;
      !Ke && Ae >= 1 && (Ke = 1), Ke === 1 && Ge--, Ge = Math.min(Ge, i + 1);
      const lr = !!(Ge % 2);
      lr && (s === "reverse" ? (Ke = 1 - Ke, a && (Ke -= a / q)) : s === "mirror" && (Pe = E));
      let ur = Nn(0, 1, Ke);
      K > G && (ur = s === "reverse" && lr ? 1 : 0), Q = ur * q;
    }
    const se = H ? { done: !1, value: n[0] } : Pe.next(Q);
    w && (se.value = w(se.value));
    let { done: be } = se;
    !H && L !== null && (be = p >= 0 ? K >= G : K <= 0);
    const we = $ === null && (_ === "finished" || _ === "running" && be);
    return d && d(se.value), we && I(), se;
  }, Y = () => {
    h && h.stop(), h = void 0;
  }, ee = () => {
    _ = "idle", Y(), g(), m(), R = M = null;
  }, I = () => {
    _ = "finished", c && c(), Y(), g();
  }, j = () => {
    if (v)
      return;
    h || (h = r(J));
    const N = h.now();
    l && l(), $ !== null ? R = N - $ : (!R || _ === "finished") && (R = N), _ === "finished" && m(), M = R, $ = null, _ = "running", h.start();
  };
  e && j();
  const B = {
    then(N, X) {
      return x.then(N, X);
    },
    get time() {
      return en(K);
    },
    set time(N) {
      N = Fn(N), K = N, $ !== null || !h || p === 0 ? $ = N : R = h.now() - N / p;
    },
    get duration() {
      const N = C.calculatedDuration === null ? my(C) : C.calculatedDuration;
      return en(N);
    },
    get speed() {
      return p;
    },
    set speed(N) {
      N === p || !h || (p = N, B.time = en(K));
    },
    get state() {
      return _;
    },
    play: j,
    pause: () => {
      _ = "paused", $ = K;
    },
    stop: () => {
      v = !0, _ !== "idle" && (_ = "idle", u && u(), ee());
    },
    cancel: () => {
      M !== null && J(M), ee();
    },
    complete: () => {
      _ = "finished";
    },
    sample: (N) => (R = 0, J(N))
  };
  return B;
}
function $3(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const A3 = $3(() => Object.hasOwnProperty.call(Element.prototype, "animate")), R3 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Ml = 10, M3 = 2e4, O3 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Mw(t.ease);
function I3(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(A3() && R3.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (O3(t, o)) {
    const h = ec({
      ...o,
      repeat: 0,
      delay: 0
    });
    let y = { done: !1, value: c[0] };
    const w = [];
    let C = 0;
    for (; !y.done && C < M3; )
      y = h.sample(C), w.push(y.value), C += Ml;
    p = void 0, c = w, d = C - Ml, f = "linear";
  }
  const v = UF(e.owner.current, t, c, {
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
  o.syncStart && (v.startTime = Ze.isProcessing ? Ze.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const g = () => v.cancel(), x = () => {
    Ce.update(g), s(), u();
  };
  return v.onfinish = () => {
    e.set(HF(c, o)), n && n(), x();
  }, {
    then(h, y) {
      return l.then(h, y);
    },
    attachTimeline(h) {
      return v.timeline = h, v.onfinish = null, Ne;
    },
    get time() {
      return en(v.currentTime || 0);
    },
    set time(h) {
      v.currentTime = Fn(h);
    },
    get speed() {
      return v.playbackRate;
    },
    set speed(h) {
      v.playbackRate = h;
    },
    get duration() {
      return en(d);
    },
    play: () => {
      a || (v.play(), sn(g));
    },
    pause: () => v.pause(),
    stop: () => {
      if (a = !0, v.playState === "idle")
        return;
      const { currentTime: h } = v;
      if (h) {
        const y = ec({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(y.sample(h - Ml).value, y.sample(h).value, Ml);
      }
      x();
    },
    complete: () => v.finish(),
    cancel: x
  };
}
function z3({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: Ne,
    pause: Ne,
    stop: Ne,
    then: (i) => (i(), Promise.resolve()),
    cancel: Ne,
    complete: Ne
  });
  return t ? ec({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const D3 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, F3 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), L3 = {
  type: "keyframes",
  duration: 0.8
}, j3 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, N3 = (e, { keyframes: t }) => t.length > 2 ? L3 : Mo.has(e) ? e.startsWith("scale") ? F3(t[1]) : D3 : j3, Bp = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Bn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), B3 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function V3(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(qc) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = B3.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const W3 = /([a-z-]*)\(.*?\)/g, Vp = {
  ...Bn,
  getAnimatableNone: (e) => {
    const t = e.match(W3);
    return t ? t.map(V3).join(" ") : e;
  }
}, U3 = {
  ...mw,
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
  filter: Vp,
  WebkitFilter: Vp
}, Vm = (e) => U3[e];
function rk(e, t) {
  let r = Vm(e);
  return r !== Vp && (r = Bn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const nk = (e) => /^0[^.\s]+$/.test(e);
function H3(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || nk(e);
}
function G3(e, t, r, n) {
  const o = Bp(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), H3(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = rk(t, s);
    }
  return i;
}
function K3({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Wm(e, t) {
  return e[t] || e.default || e;
}
const Um = (e, t, r, n = {}) => (o) => {
  const i = Wm(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - Fn(a);
  const l = G3(t, e, r, i), u = l[0], c = l[l.length - 1], d = Bp(e, u), f = Bp(e, c);
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
  if (K3(i) || (p = {
    ...p,
    ...N3(e, p)
  }), p.duration && (p.duration = Fn(p.duration)), p.repeatDelay && (p.repeatDelay = Fn(p.repeatDelay)), !d || !f || WF.current || i.type === !1)
    return z3(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const v = I3(t, e, p);
    if (v)
      return v;
  }
  return ec(p);
};
function tc(e) {
  return !!(Ot(e) && e.add);
}
const ok = (e) => /^\-?\d*\.?\d+$/.test(e);
function Hm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Gm(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Km {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Hm(this.subscriptions, t), () => Gm(this.subscriptions, t);
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
const Y3 = (e) => !isNaN(parseFloat(e));
class q3 {
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
      const { delta: i, timestamp: a } = Ze;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, Ce.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Ce.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = Y3(this.current), this.owner = r.owner;
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
    this.events[t] || (this.events[t] = new Km());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), Ce.read(() => {
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
      Jw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function ji(e, t) {
  return new q3(e, t);
}
const ik = (e) => (t) => t.test(e), X3 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, ak = [Oo, U, Dr, vn, oF, nF, X3], ha = (e) => ak.find(ik(e)), Q3 = [...ak, vt, Bn], Z3 = (e) => Q3.find(ik(e));
function J3(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ji(r));
}
function e4(e, t) {
  const r = Qc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = yF(i[a]);
    J3(e, a, s);
  }
}
function t4(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (ok(c) || nk(c)) ? c = parseFloat(c) : !Z3(c) && Bn.test(u) && (c = rk(l, u)), e.addValue(l, ji(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function r4(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function n4(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = r4(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function o4({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function sk(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && o4(c, d))
      continue;
    const v = {
      delay: r,
      elapsed: 0,
      ...Wm(i || {}, d)
    };
    let g = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[lw];
      h && (g = !1, v.elapsed = window.HandoffAppearAnimations(h, d, f, Ce), v.syncStart = !0);
    }
    let x = g && p === f.get();
    if (v.type === "spring" && (f.getVelocity() || v.velocity) && (x = !1), f.animation && (x = !1), x)
      continue;
    f.start(Um(d, f, p, e.shouldReduceMotion && Mo.has(d) ? { type: !1 } : v));
    const m = f.animation;
    tc(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && e4(e, a);
  }), u;
}
function Wp(e, t, r = {}) {
  const n = Qc(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(sk(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return i4(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function i4(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(a4).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(Wp(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function a4(e, t) {
  return e.sortNodePosition(t);
}
function s4(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Wp(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Wp(e, t, r);
  else {
    const o = typeof t == "function" ? Qc(e, t, r.custom) : t;
    n = Promise.all(sk(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const l4 = [...Em].reverse(), u4 = Em.length;
function c4(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => s4(e, r, n)));
}
function d4(e) {
  let t = c4(e);
  const r = p4();
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
    for (let m = 0; m < u4; m++) {
      const h = l4[m], y = r[h], w = c[h] !== void 0 ? c[h] : d[h], C = ks(w), E = h === u ? y.isActive : null;
      E === !1 && (g = m);
      let _ = w === d[h] && w !== c[h] && C;
      if (_ && n && e.manuallyAnimateOnMount && (_ = !1), y.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && E === null || // If we didn't and don't have any defined prop for this animation type
      !w && !y.prevProp || // Or if the prop doesn't define an animation
      Kc(w) || typeof w == "boolean")
        continue;
      const $ = f4(y.prevProp, w);
      let R = $ || // If we're making this variant active, we want to always make it active
      h === u && y.isActive && !_ && C || // If we removed a higher-priority variant (i is in reverse order)
      m > g && C;
      const M = Array.isArray(w) ? w : [w];
      let L = M.reduce(o, {});
      E === !1 && (L = {});
      const { prevResolvedValues: q = {} } = y, G = {
        ...q,
        ...L
      }, K = (J) => {
        R = !0, p.delete(J), y.needsAnimating[J] = !0;
      };
      for (const J in G) {
        const Y = L[J], ee = q[J];
        v.hasOwnProperty(J) || (Y !== ee ? Qu(Y) && Qu(ee) ? !Aw(Y, ee) || $ ? K(J) : y.protectedKeys[J] = !0 : Y !== void 0 ? K(J) : p.add(J) : Y !== void 0 && p.has(J) ? K(J) : y.protectedKeys[J] = !0);
      }
      y.prevProp = w, y.prevResolvedValues = L, y.isActive && (v = { ...v, ...L }), n && e.blockInitialAnimation && (R = !1), R && !_ && f.push(...M.map((J) => ({
        animation: J,
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
function f4(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Aw(t, e) : !1;
}
function Qn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function p4() {
  return {
    animate: Qn(!0),
    whileInView: Qn(),
    whileHover: Qn(),
    whileTap: Qn(),
    whileDrag: Qn(),
    whileFocus: Qn(),
    exit: Qn()
  };
}
class h4 extends Hn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = d4(t));
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
let m4 = 0;
class v4 extends Hn {
  constructor() {
    super(...arguments), this.id = m4++;
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
const g4 = {
  animation: {
    Feature: h4
  },
  exit: {
    Feature: v4
  }
}, vy = (e, t) => Math.abs(e - t);
function y4(e, t) {
  const r = vy(e.x, t.x), n = vy(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class lk {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = bf(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = y4(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: v } = Ze;
      this.history.push({ ...p, timestamp: v });
      const { onStart: g, onMove: x } = this.handlers;
      d || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = yf(d, this.transformPagePoint), Ce.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, v = bf(c.type === "pointercancel" ? this.lastMoveEventInfo : yf(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, v), p && p(c, v);
    }, !_w(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = Xc(t), a = yf(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = Ze;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, bf(a, this.history)), this.removeListeners = Dn(Jr(this.contextWindow, "pointermove", this.handlePointerMove), Jr(this.contextWindow, "pointerup", this.handlePointerUp), Jr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), sn(this.updatePoint);
  }
}
function yf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function gy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function bf({ point: e }, t) {
  return {
    point: e,
    delta: gy(e, uk(t)),
    offset: gy(e, b4(t)),
    velocity: x4(t, 0.1)
  };
}
function b4(e) {
  return e[0];
}
function uk(e) {
  return e[e.length - 1];
}
function x4(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = uk(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Fn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = en(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Bt(e) {
  return e.max - e.min;
}
function Up(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function yy(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = ze(t.min, t.max, e.origin), e.scale = Bt(r) / Bt(t), (Up(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ze(r.min, r.max, e.origin) - e.originPoint, (Up(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ga(e, t, r, n) {
  yy(e.x, t.x, r.x, n ? n.originX : void 0), yy(e.y, t.y, r.y, n ? n.originY : void 0);
}
function by(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Bt(t);
}
function S4(e, t, r) {
  by(e.x, t.x, r.x), by(e.y, t.y, r.y);
}
function xy(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Bt(t);
}
function Ka(e, t, r) {
  xy(e.x, t.x, r.x), xy(e.y, t.y, r.y);
}
function w4(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? ze(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? ze(r, e, n.max) : Math.min(e, r)), e;
}
function Sy(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function k4(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Sy(e.x, r, o),
    y: Sy(e.y, t, n)
  };
}
function wy(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function C4(e, t) {
  return {
    x: wy(e.x, t.x),
    y: wy(e.y, t.y)
  };
}
function _4(e, t) {
  let r = 0.5;
  const n = Bt(e), o = Bt(t);
  return o > n ? r = _s(t.min, t.max - n, e.min) : n > o && (r = _s(e.min, e.max - o, t.min)), Nn(0, 1, r);
}
function P4(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Hp = 0.35;
function T4(e = Hp) {
  return e === !1 ? e = 0 : e === !0 && (e = Hp), {
    x: ky(e, "left", "right"),
    y: ky(e, "top", "bottom")
  };
}
function ky(e, t, r) {
  return {
    min: Cy(e, t),
    max: Cy(e, r)
  };
}
function Cy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const _y = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), fi = () => ({
  x: _y(),
  y: _y()
}), Py = () => ({ min: 0, max: 0 }), We = () => ({
  x: Py(),
  y: Py()
});
function _r(e) {
  return [e("x"), e("y")];
}
function ck({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function E4({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function $4(e, t) {
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
function xf(e) {
  return e === void 0 || e === 1;
}
function Gp({ scale: e, scaleX: t, scaleY: r }) {
  return !xf(e) || !xf(t) || !xf(r);
}
function to(e) {
  return Gp(e) || dk(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function dk(e) {
  return Ty(e.x) || Ty(e.y);
}
function Ty(e) {
  return e && e !== "0%";
}
function rc(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function Ey(e, t, r, n, o) {
  return o !== void 0 && (e = rc(e, o, n)), rc(e, r, n) + t;
}
function Kp(e, t = 0, r = 1, n, o) {
  e.min = Ey(e.min, t, r, n, o), e.max = Ey(e.max, t, r, n, o);
}
function fk(e, { x: t, y: r }) {
  Kp(e.x, t.translate, t.scale, t.originPoint), Kp(e.y, r.translate, r.scale, r.originPoint);
}
function A4(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && pi(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, fk(e, a)), n && to(i.latestValues) && pi(e, i.latestValues));
  }
  t.x = $y(t.x), t.y = $y(t.y);
}
function $y(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function bn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ay(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = ze(e.min, e.max, i);
  Kp(e, t[r], t[n], a, t.scale);
}
const R4 = ["x", "scaleX", "originX"], M4 = ["y", "scaleY", "originY"];
function pi(e, t) {
  Ay(e.x, t, R4), Ay(e.y, t, M4);
}
function pk(e, t) {
  return ck($4(e.getBoundingClientRect(), t));
}
function O4(e, t, r) {
  const n = pk(e, r), { scroll: o } = t;
  return o && (bn(n.x, o.offset.x), bn(n.y, o.offset.y)), n;
}
const hk = ({ current: e }) => e ? e.ownerDocument.defaultView : null, I4 = /* @__PURE__ */ new WeakMap();
class z4 {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = We(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Xc(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Tw(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _r((v) => {
        let g = this.getAxisMotionValue(v).get() || 0;
        if (Dr.test(g)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const m = x.layout.layoutBox[v];
            m && (g = Bt(m) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[v] = g;
      }), f && Ce.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: v } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = D4(v), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, v), this.updateAxis("y", u.point, v), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new lk(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: hk(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Ce.update(() => i(t, r));
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
    if (!n || !Ol(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = w4(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && ci(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = k4(o.layoutBox, r) : this.constraints = !1, this.elastic = T4(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && _r((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = P4(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ci(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = O4(n, o.root, this.visualElement.getTransformPagePoint());
    let a = C4(o.layout.layoutBox, i);
    if (r) {
      const s = r(E4(a));
      this.hasMutatedConstraints = !!s, s && (a = ck(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = _r((c) => {
      if (!Ol(c, r, this.currentDirection))
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
    return n.start(Um(t, n, 0, r));
  }
  stopAnimation() {
    _r((t) => this.getAxisMotionValue(t).stop());
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
    _r((r) => {
      const { drag: n } = this.getProps();
      if (!Ol(r, n, this.currentDirection))
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
    if (!ci(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    _r((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = _4({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), _r((a) => {
      if (!Ol(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set(ze(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    I4.set(this.visualElement, this);
    const t = this.visualElement.current, r = Jr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      ci(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = Xr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (_r((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Hp, dragMomentum: s = !0 } = t;
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
function Ol(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function D4(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class F4 extends Hn {
  constructor(t) {
    super(t), this.removeGroupControls = Ne, this.removeListeners = Ne, this.controls = new z4(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ne;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ry = (e) => (t, r) => {
  e && Ce.update(() => e(t, r));
};
class L4 extends Hn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ne;
  }
  onPointerDown(t) {
    this.session = new lk(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: hk(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ry(t),
      onStart: Ry(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && Ce.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Jr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function mk() {
  const e = b.useContext(Ns);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = b.useId();
  return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function j4() {
  return N4(b.useContext(Ns));
}
function N4(e) {
  return e === null ? !0 : e.isPresent;
}
const pu = {
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
function My(e, t) {
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
    const r = My(e, t.target.x), n = My(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, B4 = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Bn.parse(e);
    if (o.length > 5)
      return n;
    const i = Bn.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = ze(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class V4 extends xo.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    XD(W4), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), pu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Ce.postRender(() => {
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
function vk(e) {
  const [t, r] = mk(), n = b.useContext(Am);
  return xo.createElement(V4, { ...e, layoutGroup: n, switchLayoutGroup: b.useContext(cw), isPresent: t, safeToRemove: r });
}
const W4 = {
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
  boxShadow: B4
}, gk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], U4 = gk.length, Oy = (e) => typeof e == "string" ? parseFloat(e) : e, Iy = (e) => typeof e == "number" || U.test(e);
function H4(e, t, r, n, o, i) {
  o ? (e.opacity = ze(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    G4(n)
  ), e.opacityExit = ze(t.opacity !== void 0 ? t.opacity : 1, 0, K4(n))) : i && (e.opacity = ze(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < U4; a++) {
    const s = `border${gk[a]}Radius`;
    let l = zy(t, s), u = zy(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Iy(l) === Iy(u) ? (e[s] = Math.max(ze(Oy(l), Oy(u), n), 0), (Dr.test(u) || Dr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = ze(t.rotate || 0, r.rotate || 0, n));
}
function zy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const G4 = yk(0, 0.5, jm), K4 = yk(0.5, 0.95, Ne);
function yk(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(_s(e, t, n));
}
function Dy(e, t) {
  e.min = t.min, e.max = t.max;
}
function qt(e, t) {
  Dy(e.x, t.x), Dy(e.y, t.y);
}
function Fy(e, t, r, n, o) {
  return e -= t, e = rc(e, 1 / r, n), o !== void 0 && (e = rc(e, 1 / o, n)), e;
}
function Y4(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (Dr.test(t) && (t = parseFloat(t), t = ze(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = ze(i.min, i.max, n);
  e === i && (s -= t), e.min = Fy(e.min, t, r, s, o), e.max = Fy(e.max, t, r, s, o);
}
function Ly(e, t, [r, n, o], i, a) {
  Y4(e, t[r], t[n], t[o], t.scale, i, a);
}
const q4 = ["x", "scaleX", "originX"], X4 = ["y", "scaleY", "originY"];
function jy(e, t, r, n) {
  Ly(e.x, t, q4, r ? r.x : void 0, n ? n.x : void 0), Ly(e.y, t, X4, r ? r.y : void 0, n ? n.y : void 0);
}
function Ny(e) {
  return e.translate === 0 && e.scale === 1;
}
function bk(e) {
  return Ny(e.x) && Ny(e.y);
}
function Q4(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function xk(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function By(e) {
  return Bt(e.x) / Bt(e.y);
}
class Z4 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Hm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Gm(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Vy(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const J4 = (e, t) => e.depth - t.depth;
class eL {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Hm(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Gm(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(J4), this.isDirty = !1, this.children.forEach(t);
  }
}
function tL(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (sn(n), e(i - t));
  };
  return Ce.read(n, !0), () => sn(n);
}
function rL(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function nL(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function oL(e, t, r) {
  const n = Ot(e) ? e : ji(e);
  return n.start(Um("", n, t, r)), n.animation;
}
const Wy = ["", "X", "Y", "Z"], iL = { visibility: "hidden" }, Uy = 1e3;
let aL = 0;
const ro = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Sk({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = aL++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, ro.totalNodes = ro.resolvedTargetDeltas = ro.recalculatedProjection = 0, this.nodes.forEach(uL), this.nodes.forEach(hL), this.nodes.forEach(mL), this.nodes.forEach(cL), rL(ro);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new eL());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Km()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = nL(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = tL(f, 250), pu.hasAnimatedSinceResize && (pu.hasAnimatedSinceResize = !1, this.nodes.forEach(Gy));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || xL, { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !xk(this.targetLayout, v) || p, y = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || y || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, y);
          const w = {
            ...Wm(g, "layout"),
            onPlay: x,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Gy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, sn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(vL), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Hy);
        return;
      }
      this.isUpdating || this.nodes.forEach(fL), this.isUpdating = !1, this.nodes.forEach(pL), this.nodes.forEach(sL), this.nodes.forEach(lL), this.clearAllSnapshots();
      const s = performance.now();
      Ze.delta = Nn(0, 1e3 / 60, s - Ze.timestamp), Ze.timestamp = s, Ze.isProcessing = !0, cf.update.process(Ze), cf.preRender.process(Ze), cf.render.process(Ze), Ze.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(dL), this.sharedNodes.forEach(gL);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ce.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ce.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = We(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !bk(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || to(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), SL(l), {
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
        return We();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (bn(s.x, l.offset.x), bn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = We();
      qt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            qt(s, a);
            const { scroll: f } = this.root;
            f && (bn(s.x, -f.offset.x), bn(s.y, -f.offset.y));
          }
          bn(s.x, c.offset.x), bn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = We();
      qt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && pi(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), to(c.latestValues) && pi(l, c.latestValues);
      }
      return to(this.latestValues) && pi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = We();
      qt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !to(u.latestValues))
          continue;
        Gp(u.latestValues) && u.updateSnapshot();
        const c = We(), d = u.measurePageBox();
        qt(c, d), jy(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return to(this.latestValues) && jy(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ze.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Ze.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = We(), this.relativeTargetOrigin = We(), Ka(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = We(), this.targetWithTransforms = We()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), S4(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : qt(this.target, this.layout.layoutBox), fk(this.target, this.targetDelta)) : qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = We(), this.relativeTargetOrigin = We(), Ka(this.relativeTargetOrigin, this.target, p.target), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          ro.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Gp(this.parent.latestValues) || dk(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ze.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      A4(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: v } = s;
      if (!v) {
        this.projectionTransform && (this.projectionDelta = fi(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = fi(), this.projectionDeltaWithTransform = fi());
      const g = this.projectionTransform;
      Ga(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = Vy(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), ro.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = fi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = We(), p = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, g = p !== v, x = this.getStack(), m = !x || x.members.length <= 1, h = !!(g && !m && this.options.crossfade === !0 && !this.path.some(bL));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (w) => {
        const C = w / 1e3;
        Ky(d.x, a.x, C), Ky(d.y, a.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ka(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), yL(this.relativeTarget, this.relativeTargetOrigin, f, C), y && Q4(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = We()), qt(y, this.relativeTarget)), g && (this.animationValues = c, H4(c, u, this.latestValues, C, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (sn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ce.update(() => {
        pu.hasAnimatedSinceResize = !0, this.currentAnimation = oL(0, Uy, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Uy), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && wk(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || We();
          const d = Bt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = Bt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        qt(s, l), pi(s, c), Ga(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new Z4()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < Wy.length; c++) {
        const d = "rotate" + Wy[c];
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
        return iL;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = fu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = fu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !to(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = Vy(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: v } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in qu) {
        if (f[g] === void 0)
          continue;
        const { correct: x, applyTo: m } = qu[g], h = u.transform === "none" ? f[g] : x(f[g], d);
        if (m) {
          const y = m.length;
          for (let w = 0; w < y; w++)
            u[m[w]] = h;
        } else
          u[g] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? fu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Hy), this.root.sharedNodes.clear();
    }
  };
}
function sL(e) {
  e.updateLayout();
}
function lL(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? _r((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Bt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : wk(i, r.layoutBox, n) && _r((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = Bt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = fi();
    Ga(s, n, r.layoutBox);
    const l = fi();
    a ? Ga(l, e.applyTransform(o, !0), r.measuredBox) : Ga(l, n, r.layoutBox);
    const u = !bk(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = We();
          Ka(v, r.layoutBox, f.layoutBox);
          const g = We();
          Ka(g, n, p.layoutBox), xk(v, g) || (c = !0), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = v, e.relativeParent = d);
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
function uL(e) {
  ro.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function cL(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function dL(e) {
  e.clearSnapshot();
}
function Hy(e) {
  e.clearMeasurements();
}
function fL(e) {
  e.isLayoutDirty = !1;
}
function pL(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Gy(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function hL(e) {
  e.resolveTargetDelta();
}
function mL(e) {
  e.calcProjection();
}
function vL(e) {
  e.resetRotation();
}
function gL(e) {
  e.removeLeadSnapshot();
}
function Ky(e, t, r) {
  e.translate = ze(t.translate, 0, r), e.scale = ze(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Yy(e, t, r, n) {
  e.min = ze(t.min, r.min, n), e.max = ze(t.max, r.max, n);
}
function yL(e, t, r, n) {
  Yy(e.x, t.x, r.x, n), Yy(e.y, t.y, r.y, n);
}
function bL(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const xL = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, qy = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), Xy = qy("applewebkit/") && !qy("chrome/") ? Math.round : Ne;
function Qy(e) {
  e.min = Xy(e.min), e.max = Xy(e.max);
}
function SL(e) {
  Qy(e.x), Qy(e.y);
}
function wk(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Up(By(t), By(r), 0.2);
}
const wL = Sk({
  attachResizeListener: (e, t) => Xr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Sf = {
  current: void 0
}, kk = Sk({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Sf.current) {
      const e = new wL({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Sf.current = e;
    }
    return Sf.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), kL = {
  pan: {
    Feature: L4
  },
  drag: {
    Feature: F4,
    ProjectionNode: kk,
    MeasureLayout: vk
  }
}, CL = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function _L(e) {
  const t = CL.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function Yp(e, t, r = 1) {
  const [n, o] = _L(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return ok(a) ? parseFloat(a) : a;
  } else
    return Fp(o) ? Yp(o, t, r + 1) : o;
}
function PL(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!Fp(i))
      return;
    const a = Yp(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Fp(i))
      continue;
    const a = Yp(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const TL = /* @__PURE__ */ new Set([
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
]), Ck = (e) => TL.has(e), EL = (e) => Object.keys(e).some(Ck), Zy = (e) => e === Oo || e === U, Jy = (e, t) => parseFloat(e.split(", ")[t]), e1 = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Jy(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? Jy(i[1], e) : 0;
  }
}, $L = /* @__PURE__ */ new Set(["x", "y", "z"]), AL = Bs.filter((e) => !$L.has(e));
function RL(e) {
  const t = [];
  return AL.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Ni = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: e1(4, 13),
  y: e1(5, 14)
};
Ni.translateX = Ni.x;
Ni.translateY = Ni.y;
const ML = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = Ni[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = Ni[u](l, i);
  }), e;
}, OL = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Ck);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = ha(c);
    const f = t[l];
    let p;
    if (Qu(f)) {
      const v = f.length, g = f[0] === null ? 1 : 0;
      c = f[g], d = ha(c);
      for (let x = g; x < v && f[x] !== null; x++)
        p ? Lm(ha(f[x]) === p) : p = ha(f[x]);
    } else
      p = ha(f);
    if (d !== p)
      if (Zy(d) && Zy(p)) {
        const v = u.get();
        typeof v == "string" && u.set(parseFloat(v)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === U && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = RL(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = ML(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Gc && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function IL(e, t, r, n) {
  return EL(t) ? OL(e, t, r, n) : { target: t, transitionEnd: n };
}
const zL = (e, t, r, n) => {
  const o = PL(e, t, n);
  return t = o.target, n = o.transitionEnd, IL(e, t, r, n);
}, qp = { current: null }, _k = { current: !1 };
function DL() {
  if (_k.current = !0, !!Gc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => qp.current = e.matches;
      e.addListener(t), t();
    } else
      qp.current = !1;
}
function FL(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (Ot(i))
      e.addValue(o, i), tc(n) && n.add(o);
    else if (Ot(a))
      e.addValue(o, ji(i, { owner: e })), tc(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ji(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const t1 = /* @__PURE__ */ new WeakMap(), Pk = Object.keys(Cs), LL = Pk.length, r1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], jL = $m.length;
class NL {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Ce.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Yc(r), this.isVariantNode = uw(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && Ot(f) && (f.set(s[d], !1), tc(u) && u.add(d));
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
    this.current = t, t1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), _k.current || DL(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : qp.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    t1.delete(this.current), this.projection && this.projection.unmount(), sn(this.notifyUpdate), sn(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Mo.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && Ce.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let l = 0; l < LL; l++) {
      const u = Pk[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = Cs[u];
      f && (a = f), c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && ci(d),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : We();
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
    for (let n = 0; n < r1.length; n++) {
      const o = r1[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = FL(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < jL; n++) {
      const o = $m[n], i = this.props[o];
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
    return n === void 0 && r !== void 0 && (n = ji(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Fm(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ot(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Km()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Tk extends NL {
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
    let a = n4(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      t4(this, n, a);
      const s = zL(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function BL(e) {
  return window.getComputedStyle(e);
}
class VL extends Tk {
  readValueFromInstance(t, r) {
    if (Mo.has(r)) {
      const n = Vm(r);
      return n && n.default || 0;
    } else {
      const n = BL(t), o = (pw(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return pk(t, r);
  }
  build(t, r, n, o) {
    Mm(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Dm(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ot(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    bw(t, r, n, o);
  }
}
class WL extends Tk {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Mo.has(r)) {
      const n = Vm(r);
      return n && n.default || 0;
    }
    return r = xw.has(r) ? r : Tm(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return We();
  }
  scrapeMotionValuesFromProps(t, r) {
    return ww(t, r);
  }
  build(t, r, n, o) {
    Im(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Sw(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = zm(t.tagName), super.mount(t);
  }
}
const UL = (e, t) => Rm(e) ? new WL(t, { enableHardwareAcceleration: !1 }) : new VL(t, { enableHardwareAcceleration: !0 }), HL = {
  layout: {
    ProjectionNode: kk,
    MeasureLayout: vk
  }
}, GL = {
  ...g4,
  ...jF,
  ...kL,
  ...HL
}, Hs = /* @__PURE__ */ YD((e, t) => PF(e, t, GL, UL));
function Ek() {
  const e = b.useRef(!1);
  return Pm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function KL() {
  const e = Ek(), [t, r] = b.useState(0), n = b.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [b.useCallback(() => Ce.postRender(n), [n]), t];
}
class YL extends b.Component {
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
function qL({ children: e, isPresent: t }) {
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
  }, [t]), b.createElement(YL, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }));
}
const wf = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = kw(XL), l = b.useId(), u = b.useMemo(
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
  }, [r]), a === "popLayout" && (e = b.createElement(qL, { isPresent: r }, e)), b.createElement(Ns.Provider, { value: u }, e);
};
function XL() {
  return /* @__PURE__ */ new Map();
}
function QL(e) {
  return b.useEffect(() => () => e(), []);
}
const no = (e) => e.key || "";
function ZL(e, t) {
  e.forEach((r) => {
    const n = no(r);
    t.set(n, r);
  });
}
function JL(e) {
  const t = [];
  return b.Children.forEach(e, (r) => {
    b.isValidElement(r) && t.push(r);
  }), t;
}
const Zc = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = b.useContext(Am).forceRender || KL()[0], l = Ek(), u = JL(e);
  let c = u;
  const d = b.useRef(/* @__PURE__ */ new Map()).current, f = b.useRef(c), p = b.useRef(/* @__PURE__ */ new Map()).current, v = b.useRef(!0);
  if (Pm(() => {
    v.current = !1, ZL(u, p), f.current = c;
  }), QL(() => {
    v.current = !0, p.clear(), d.clear();
  }), v.current)
    return b.createElement(b.Fragment, null, c.map((h) => b.createElement(wf, { key: no(h), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const g = f.current.map(no), x = u.map(no), m = g.length;
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
    const C = g.indexOf(y);
    let E = h;
    if (!E) {
      const _ = () => {
        d.delete(y);
        const $ = Array.from(p.keys()).filter((R) => !x.includes(R));
        if ($.forEach((R) => p.delete(R)), f.current = u.filter((R) => {
          const M = no(R);
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
      E = b.createElement(wf, { key: no(w), isPresent: !1, onExitComplete: _, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(y, E);
    }
    c.splice(C, 0, E);
  }), c = c.map((h) => {
    const y = h.key;
    return d.has(y) ? h : b.createElement(wf, { key: no(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), b.createElement(b.Fragment, null, d.size ? c : c.map((h) => b.cloneElement(h)));
};
var ej = {
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
}, $k = b.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = ej,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = b.useState(s), p = j4();
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
  }, [p, i, o]), LD(x, d);
  const m = b.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = b.useMemo(() => DD(a), [a]);
  return /* @__PURE__ */ k.jsx(
    Hs.div,
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
      children: /* @__PURE__ */ k.jsx(
        Z.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Yr(r, { id: t, onClose: x })
        }
      )
    }
  );
});
$k.displayName = "ToastComponent";
var n1 = {
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
}, Gs = xe((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = ye("chakra-icon", s), d = qi("Icon", e), f = {
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
  }, v = n ?? n1.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ k.jsx(Z.svg, { as: r, ...p, ...u });
  const g = a ?? n1.path;
  return /* @__PURE__ */ k.jsx(Z.svg, { verticalAlign: "middle", viewBox: v, ...p, ...u, children: g });
});
Gs.displayName = "Icon";
function tj(e) {
  return /* @__PURE__ */ k.jsx(Gs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ k.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function rj(e) {
  return /* @__PURE__ */ k.jsx(Gs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ k.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function o1(e) {
  return /* @__PURE__ */ k.jsx(Gs, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ k.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var nj = Nc({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Ym = xe((e, t) => {
  const r = qi("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = xr(e), u = ye("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${nj} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ k.jsx(
    Z.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ k.jsx(Z.span, { srOnly: !0, children: n })
    }
  );
});
Ym.displayName = "Spinner";
var [oj, qm] = rt({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [ij, Xm] = rt({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), Ak = {
  info: { icon: rj, colorScheme: "blue" },
  warning: { icon: o1, colorScheme: "orange" },
  success: { icon: tj, colorScheme: "green" },
  error: { icon: o1, colorScheme: "red" },
  loading: { icon: Ym, colorScheme: "blue" }
};
function aj(e) {
  return Ak[e].colorScheme;
}
function sj(e) {
  return Ak[e].icon;
}
var Rk = xe(
  function(t, r) {
    const n = Xm(), { status: o } = qm(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ k.jsx(
      Z.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: ye("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
Rk.displayName = "AlertDescription";
function Mk(e) {
  const { status: t } = qm(), r = sj(t), n = Xm(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ k.jsx(
    Z.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: ye("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ k.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
Mk.displayName = "AlertIcon";
var Ok = xe(
  function(t, r) {
    const n = Xm(), { status: o } = qm();
    return /* @__PURE__ */ k.jsx(
      Z.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: ye("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
Ok.displayName = "AlertTitle";
var Ik = xe(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = xr(t), s = (n = t.colorScheme) != null ? n : aj(o), l = Ro("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ k.jsx(oj, { value: { status: o }, children: /* @__PURE__ */ k.jsx(ij, { value: l, children: /* @__PURE__ */ k.jsx(
    Z.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: ye("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
Ik.displayName = "Alert";
function lj(e) {
  return /* @__PURE__ */ k.jsx(Gs, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ k.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Jc = xe(
  function(t, r) {
    const n = qi("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = xr(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ k.jsx(
      Z.button,
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
        children: o || /* @__PURE__ */ k.jsx(lj, { width: "1em", height: "1em" })
      }
    );
  }
);
Jc.displayName = "CloseButton";
var uj = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Ya = cj(uj);
function cj(e) {
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
      const a = dj(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = Z0(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: pj(i)
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
        const a = iw(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!Z0(Ya.getState(), o).position
  };
}
var i1 = 0;
function dj(e, t = {}) {
  var r, n;
  i1 += 1;
  const o = (r = t.id) != null ? r : i1, i = (n = t.position) != null ? n : "bottom";
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
var fj = (e) => {
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
  return /* @__PURE__ */ k.jsxs(
    Ik,
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
        /* @__PURE__ */ k.jsx(Mk, { children: u }),
        /* @__PURE__ */ k.jsxs(Z.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ k.jsx(Ok, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ k.jsx(Rk, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ k.jsx(
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
function pj(e = {}) {
  const { render: t, toastComponent: r = fj } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ k.jsx(r, { ...o, ...e });
}
var [hj, J8] = rt({
  name: "ToastOptionsContext",
  strict: !1
}), mj = (e) => {
  const t = b.useSyncExternalStore(
    Ya.subscribe,
    Ya.getState,
    Ya.getState
  ), {
    motionVariants: r,
    component: n = $k,
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
        style: FD(s),
        children: /* @__PURE__ */ k.jsx(Zc, { initial: !1, children: l.map((u) => /* @__PURE__ */ k.jsx(
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
  return /* @__PURE__ */ k.jsx(Ls, { ...o, children: a });
}, vj = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ k.jsxs(ID, { theme: n, ...i, children: [
    /* @__PURE__ */ k.jsx(hj, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ k.jsx(mj, { ...o })
  ] });
}, gj = vj(XS), yj = Object.defineProperty, bj = (e, t, r) => t in e ? yj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Le = (e, t, r) => (bj(e, typeof t != "symbol" ? t + "" : t, r), r);
function a1(e) {
  return e.sort((t, r) => {
    const n = t.compareDocumentPosition(r);
    if (n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var xj = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function s1(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function l1(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var Xp = typeof window < "u" ? b.useLayoutEffect : b.useEffect, nc = (e) => e, Sj = class {
  constructor() {
    Le(this, "descendants", /* @__PURE__ */ new Map()), Le(this, "register", (e) => {
      if (e != null)
        return xj(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), Le(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = a1(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), Le(this, "destroy", () => {
      this.descendants.clear();
    }), Le(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), Le(this, "count", () => this.descendants.size), Le(this, "enabledCount", () => this.enabledValues().length), Le(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), Le(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), Le(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), Le(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), Le(this, "first", () => this.item(0)), Le(this, "firstEnabled", () => this.enabledItem(0)), Le(this, "last", () => this.item(this.descendants.size - 1)), Le(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), Le(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), Le(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), Le(this, "next", (e, t = !0) => {
      const r = s1(e, this.count(), t);
      return this.item(r);
    }), Le(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = s1(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), Le(this, "prev", (e, t = !0) => {
      const r = l1(e, this.count() - 1, t);
      return this.item(r);
    }), Le(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = l1(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), Le(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = a1(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function wj(e, t) {
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
function yt(...e) {
  return (t) => {
    e.forEach((r) => {
      wj(r, t);
    });
  };
}
function kj(...e) {
  return b.useMemo(() => yt(...e), e);
}
function Cj() {
  const e = b.useRef(new Sj());
  return Xp(() => () => e.current.destroy()), e.current;
}
var [_j, zk] = rt({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function Pj(e) {
  const t = zk(), [r, n] = b.useState(-1), o = b.useRef(null);
  Xp(() => () => {
    o.current && t.unregister(o.current);
  }, []), Xp(() => {
    if (!o.current)
      return;
    const a = Number(o.current.dataset.index);
    r != a && !Number.isNaN(a) && n(a);
  });
  const i = nc(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: yt(i, o)
  };
}
function Tj() {
  return [
    nc(_j),
    () => nc(zk()),
    () => Cj(),
    (o) => Pj(o)
  ];
}
function Ej(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, i = zr(n), a = zr(o), [s, l] = b.useState(r), u = t !== void 0, c = u ? t : s, d = zr(
    (f) => {
      const v = typeof f == "function" ? f(c) : f;
      a(c, v) && (u || l(v), i(v));
    },
    [u, i, c, a]
  );
  return [c, d];
}
var Qp = {
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
function Zp(e) {
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
var u1 = {
  enter: {
    duration: 0.2,
    ease: Qp.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Qp.easeIn
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
}, $j = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : oc.enter(u1.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : oc.exit(u1.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Dk = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: $j
}, Aj = b.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ k.jsx(Zc, { custom: f, children: d && /* @__PURE__ */ k.jsx(
    Hs.div,
    {
      ref: r,
      className: ye("chakra-fade", i),
      custom: f,
      ...Dk,
      animate: c,
      ...u
    }
  ) });
});
Aj.displayName = "Fade";
var c1 = {
  exit: {
    duration: 0.15,
    ease: Qp.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, Rj = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = Zp({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : oc.exit(c1.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = Zp({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : oc.enter(c1.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, Fk = b.forwardRef(function(t, r) {
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
  } = t, p = Zp({ direction: n }), v = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), g = i ? a && i : !0, x = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ k.jsx(Zc, { custom: m, children: g && /* @__PURE__ */ k.jsx(
    Hs.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: ye("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: m,
      variants: Rj,
      style: v,
      ...d
    }
  ) });
});
Fk.displayName = "Slide";
function Mj(e) {
  return b.Children.toArray(e).filter(
    (t) => b.isValidElement(t)
  );
}
var [e9, Oj] = rt({
  strict: !1,
  name: "ButtonGroupContext"
});
function Ij(e) {
  const [t, r] = b.useState(!e);
  return { ref: b.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Jp(e) {
  const { children: t, className: r, ...n } = e, o = b.isValidElement(t) ? b.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = ye("chakra-button__icon", r);
  return /* @__PURE__ */ k.jsx(
    Z.span,
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
Jp.displayName = "ButtonIcon";
function eh(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ k.jsx(Ym, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = ye("chakra-button__spinner", i), u = r === "start" ? "marginEnd" : "marginStart", c = b.useMemo(
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
  return /* @__PURE__ */ k.jsx(Z.div, { className: l, ...s, __css: c, children: o });
}
eh.displayName = "ButtonSpinner";
var go = xe((e, t) => {
  const r = Oj(), n = qi("Button", { ...r, ...e }), {
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
  } = xr(e), h = b.useMemo(() => {
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
  }, [n, r]), { ref: y, type: w } = Ij(x), C = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ k.jsxs(
    Z.button,
    {
      ref: kj(t, y),
      as: x,
      type: f ?? w,
      "data-active": ie(a),
      "data-loading": ie(i),
      __css: h,
      className: ye("chakra-button", g),
      ...m,
      disabled: o || i,
      children: [
        i && v === "start" && /* @__PURE__ */ k.jsx(
          eh,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ k.jsx(Z.span, { opacity: 0, children: /* @__PURE__ */ k.jsx(d1, { ...C }) }) : /* @__PURE__ */ k.jsx(d1, { ...C }),
        i && v === "end" && /* @__PURE__ */ k.jsx(
          eh,
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
go.displayName = "Button";
function d1(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    t && /* @__PURE__ */ k.jsx(Jp, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ k.jsx(Jp, { marginStart: o, children: r })
  ] });
}
var [t9, zj] = rt({
  name: "CheckboxGroupContext",
  strict: !1
});
function Dj(e) {
  const [t, r] = b.useState(e), [n, o] = b.useState(!1);
  return e !== t && (o(!0), r(e)), n;
}
function Fj(e) {
  return /* @__PURE__ */ k.jsx(
    Z.svg,
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
      children: /* @__PURE__ */ k.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function Lj(e) {
  return /* @__PURE__ */ k.jsx(
    Z.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...e,
      children: /* @__PURE__ */ k.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function jj(e) {
  const { isIndeterminate: t, isChecked: r, ...n } = e, o = t ? Lj : Fj;
  return r || t ? /* @__PURE__ */ k.jsx(
    Z.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: /* @__PURE__ */ k.jsx(o, { ...n })
    }
  ) : null;
}
var [Nj, Bj] = rt({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [Vj, Lk] = rt({
  strict: !1,
  name: "FormControlContext"
});
function Wj(e) {
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
      ref: yt($, (R) => {
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
      ref: yt($, (R) => {
        R && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), C = b.useCallback(
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
    getRootProps: C,
    getLabelProps: y,
    getRequiredIndicatorProps: E
  };
}
var Uj = xe(
  function(t, r) {
    const n = Ro("Form", t), o = xr(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = Wj(o), l = ye("chakra-form-control", t.className);
    return /* @__PURE__ */ k.jsx(Vj, { value: s, children: /* @__PURE__ */ k.jsx(Nj, { value: n, children: /* @__PURE__ */ k.jsx(
      Z.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
Uj.displayName = "FormControl";
var Hj = xe(
  function(t, r) {
    const n = Lk(), o = Bj(), i = ye("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ k.jsx(
      Z.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: i
      }
    );
  }
);
Hj.displayName = "FormHelperText";
function Gj(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = jk(e);
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Ud(r),
    "aria-required": Ud(o),
    "aria-readonly": Ud(n)
  };
}
function jk(e) {
  var t, r, n;
  const o = Lk(), {
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
    onFocus: me(o == null ? void 0 : o.onFocus, p),
    onBlur: me(o == null ? void 0 : o.onBlur, v)
  };
}
var Kj = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Yj = () => typeof document < "u", f1 = !1, Ks = null, To = !1, th = !1, rh = /* @__PURE__ */ new Set();
function Qm(e, t) {
  rh.forEach((r) => r(e, t));
}
var qj = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function Xj(e) {
  return !(e.metaKey || !qj && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function p1(e) {
  To = !0, Xj(e) && (Ks = "keyboard", Qm("keyboard", e));
}
function No(e) {
  if (Ks = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    To = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {
    }
    if (r)
      return;
    Qm("pointer", e);
  }
}
function Qj(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function Zj(e) {
  Qj(e) && (To = !0, Ks = "virtual");
}
function Jj(e) {
  e.target === window || e.target === document || (!To && !th && (Ks = "virtual", Qm("virtual", e)), To = !1, th = !1);
}
function eN() {
  To = !1, th = !0;
}
function h1() {
  return Ks !== "pointer";
}
function tN() {
  if (!Yj() || f1)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...r) {
    To = !0, e.apply(this, r);
  }, document.addEventListener("keydown", p1, !0), document.addEventListener("keyup", p1, !0), document.addEventListener("click", Zj, !0), window.addEventListener("focus", Jj, !0), window.addEventListener("blur", eN, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", No, !0), document.addEventListener("pointermove", No, !0), document.addEventListener("pointerup", No, !0)) : (document.addEventListener("mousedown", No, !0), document.addEventListener("mousemove", No, !0), document.addEventListener("mouseup", No, !0)), f1 = !0;
}
function rN(e) {
  tN(), e(h1());
  const t = () => e(h1());
  return rh.add(t), () => {
    rh.delete(t);
  };
}
function nN(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function oN(e = {}) {
  const t = jk(e), {
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
    ...C
  } = e, E = nN(C, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]), _ = zr(p), $ = zr(s), R = zr(l), [M, L] = b.useState(!1), [q, G] = b.useState(!1), [K, J] = b.useState(!1), [Y, ee] = b.useState(!1);
  b.useEffect(() => rN(L), []);
  const I = b.useRef(null), [j, B] = b.useState(!0), [N, X] = b.useState(!!c), H = d !== void 0, Q = H ? d : N, Pe = b.useCallback(
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
  zn(() => {
    I.current && (I.current.indeterminate = !!v);
  }, [v]), ws(() => {
    r && G(!1);
  }, [r, G]), zn(() => {
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
  const se = r && !f, be = b.useCallback(
    (z) => {
      z.key === " " && ee(!0);
    },
    [ee]
  ), we = b.useCallback(
    (z) => {
      z.key === " " && ee(!1);
    },
    [ee]
  );
  zn(() => {
    if (!I.current)
      return;
    I.current.checked !== Q && X(I.current.checked);
  }, [I.current]);
  const Ae = b.useCallback(
    (z = {}, he = null) => {
      const le = (Qe) => {
        q && Qe.preventDefault(), ee(!0);
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
        onMouseDown: me(z.onMouseDown, le),
        onMouseUp: me(z.onMouseUp, () => ee(!1)),
        onMouseEnter: me(
          z.onMouseEnter,
          () => J(!0)
        ),
        onMouseLeave: me(
          z.onMouseLeave,
          () => J(!1)
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
  ), Ge = b.useCallback(
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
  ), Ke = b.useCallback(
    (z = {}, he = null) => ({
      ...E,
      ...z,
      ref: yt(he, (le) => {
        le && B(le.tagName === "LABEL");
      }),
      onClick: me(z.onClick, () => {
        var le;
        j || ((le = I.current) == null || le.click(), requestAnimationFrame(() => {
          var Qe;
          (Qe = I.current) == null || Qe.focus({ preventScroll: !0 });
        }));
      }),
      "data-disabled": ie(r),
      "data-checked": ie(Q),
      "data-invalid": ie(i)
    }),
    [E, r, Q, i, j]
  ), lr = b.useCallback(
    (z = {}, he = null) => ({
      ...z,
      ref: yt(I, he),
      type: "checkbox",
      name: g,
      value: x,
      id: a,
      tabIndex: m,
      onChange: me(z.onChange, Pe),
      onBlur: me(
        z.onBlur,
        $,
        () => G(!1)
      ),
      onFocus: me(
        z.onFocus,
        R,
        () => G(!0)
      ),
      onKeyDown: me(z.onKeyDown, be),
      onKeyUp: me(z.onKeyUp, we),
      required: o,
      checked: Q,
      disabled: se,
      readOnly: n,
      "aria-label": h,
      "aria-labelledby": y,
      "aria-invalid": w ? !!w : i,
      "aria-describedby": u,
      "aria-disabled": r,
      style: Kj
    }),
    [
      g,
      x,
      a,
      Pe,
      $,
      R,
      be,
      we,
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
      onMouseDown: me(z.onMouseDown, iN),
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
    getRootProps: Ke,
    getCheckboxProps: Ae,
    getIndicatorProps: Ge,
    getInputProps: lr,
    getLabelProps: ur,
    htmlProps: E
  };
}
function iN(e) {
  e.preventDefault(), e.stopPropagation();
}
var aN = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
}, sN = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
}, lN = Nc({
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
}), uN = Nc({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}), cN = Nc({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
}), nh = xe(function(t, r) {
  const n = zj(), o = { ...n, ...t }, i = Ro("Checkbox", o), a = xr(t), {
    spacing: s = "0.5rem",
    className: l,
    children: u,
    iconColor: c,
    iconSize: d,
    icon: f = /* @__PURE__ */ k.jsx(jj, {}),
    isChecked: p,
    isDisabled: v = n == null ? void 0 : n.isDisabled,
    onChange: g,
    inputProps: x,
    ...m
  } = a;
  let h = p;
  n != null && n.value && a.value && (h = n.value.includes(a.value));
  let y = g;
  n != null && n.onChange && a.value && (y = $S(n.onChange, g));
  const {
    state: w,
    getInputProps: C,
    getCheckboxProps: E,
    getLabelProps: _,
    getRootProps: $
  } = oN({
    ...m,
    isDisabled: v,
    isChecked: h,
    onChange: y
  }), R = Dj(w.isChecked), M = b.useMemo(
    () => ({
      animation: R ? w.isIndeterminate ? `${uN} 20ms linear, ${cN} 200ms linear` : `${lN} 200ms linear` : void 0,
      fontSize: d,
      color: c,
      ...i.icon
    }),
    [c, d, R, w.isIndeterminate, i.icon]
  ), L = b.cloneElement(f, {
    __css: M,
    isIndeterminate: w.isIndeterminate,
    isChecked: w.isChecked
  });
  return /* @__PURE__ */ k.jsxs(
    Z.label,
    {
      __css: { ...sN, ...i.container },
      className: ye("chakra-checkbox", l),
      ...$(),
      children: [
        /* @__PURE__ */ k.jsx(
          "input",
          {
            className: "chakra-checkbox__input",
            ...C(x, r)
          }
        ),
        /* @__PURE__ */ k.jsx(
          Z.span,
          {
            __css: { ...aN, ...i.control },
            className: "chakra-checkbox__control",
            ...E(),
            children: L
          }
        ),
        u && /* @__PURE__ */ k.jsx(
          Z.span,
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
nh.displayName = "Checkbox";
function Zm(e, t, r, n) {
  const o = zr(r);
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
function dN(e) {
  return "current" in e;
}
var Nk = () => typeof window < "u";
function fN() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var pN = (e) => Nk() && e.test(navigator.vendor), hN = (e) => Nk() && e.test(fN()), mN = () => hN(/mac|iphone|ipad|ipod/i), vN = () => mN() && pN(/apple/i);
function gN(e) {
  const { ref: t, elements: r, enabled: n } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  Zm(o, "pointerdown", (i) => {
    if (!vN() || !n)
      return;
    const a = i.target, l = (r ?? [t]).some((u) => {
      const c = dN(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function yN(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Bk = { exports: {} }, bN = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", xN = bN, SN = xN;
function Vk() {
}
function Wk() {
}
Wk.resetWarningCache = Vk;
var wN = function() {
  function e(n, o, i, a, s, l) {
    if (l !== SN) {
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
    checkPropTypes: Wk,
    resetWarningCache: Vk
  };
  return r.PropTypes = r, r;
};
Bk.exports = wN();
var kN = Bk.exports;
const Zn = /* @__PURE__ */ Rs(kN);
var oh = "data-focus-lock", Uk = "data-focus-lock-disabled", CN = "data-no-focus-lock", _N = "data-autofocus-inside", PN = "data-no-autofocus";
function TN(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function EN(e, t) {
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
function Hk(e, t) {
  return EN(t || null, function(r) {
    return e.forEach(function(n) {
      return TN(n, r);
    });
  });
}
var kf = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Ar = function() {
  return Ar = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Ar.apply(this, arguments);
};
function Gk(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function $N(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Kk(e) {
  return e;
}
function Yk(e, t) {
  t === void 0 && (t = Kk);
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
function Jm(e, t) {
  return t === void 0 && (t = Kk), Yk(e, t);
}
function qk(e) {
  e === void 0 && (e = {});
  var t = Yk(null);
  return t.options = Ar({ async: !0, ssr: !1 }, e), t;
}
var Xk = function(e) {
  var t = e.sideCar, r = Gk(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return b.createElement(n, Ar({}, r));
};
Xk.isSideCarExport = !0;
function AN(e, t) {
  return e.useMedium(t), Xk;
}
var Qk = Jm({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), Zk = Jm(), RN = Jm(), MN = qk({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), ON = [], ev = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o = b.useState(), i = o[0], a = o[1], s = b.useRef(), l = b.useRef(!1), u = b.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, v = t.crossFrame, g = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, m = t.className, h = t.whiteList, y = t.hasPositiveIndices, w = t.shards, C = w === void 0 ? ON : w, E = t.as, _ = E === void 0 ? "div" : E, $ = t.lockProps, R = $ === void 0 ? {} : $, M = t.sideCar, L = t.returnFocus, q = t.focusOptions, G = t.onActivation, K = t.onDeactivation, J = b.useState({}), Y = J[0], ee = b.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && G && G(s.current), l.current = !0;
  }, [G]), I = b.useCallback(function() {
    l.current = !1, K && K(s.current);
  }, [K]);
  b.useEffect(function() {
    d || (u.current = null);
  }, []);
  var j = b.useCallback(function(be) {
    var we = u.current;
    if (we && we.focus) {
      var Ae = typeof L == "function" ? L(we) : L;
      if (Ae) {
        var Ge = typeof Ae == "object" ? Ae : void 0;
        u.current = null, be ? Promise.resolve().then(function() {
          return we.focus(Ge);
        }) : we.focus(Ge);
      }
    }
  }, [L]), B = b.useCallback(function(be) {
    l.current && Qk.useMedium(be);
  }, []), N = Zk.useMedium, X = b.useCallback(function(be) {
    s.current !== be && (s.current = be, a(be));
  }, []), H = Po((n = {}, n[Uk] = d && "disabled", n[oh] = x, n), R), Q = f !== !0, Pe = Q && f !== "tail", se = Hk([r, X]);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, Q && [
    // nearest focus guard
    /* @__PURE__ */ b.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: kf
    }),
    // first tabbed element guard
    y ? /* @__PURE__ */ b.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: kf
    }) : null
  ], !d && /* @__PURE__ */ b.createElement(M, {
    id: Y,
    sideCar: MN,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: v,
    autoFocus: g,
    whiteList: h,
    shards: C,
    onActivation: ee,
    onDeactivation: I,
    returnFocus: j,
    focusOptions: q
  }), /* @__PURE__ */ b.createElement(_, Po({
    ref: se
  }, H, {
    className: m,
    onBlur: N,
    onFocus: B
  }), c), Pe && /* @__PURE__ */ b.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: kf
  }));
});
ev.propTypes = {};
ev.defaultProps = {
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
const Jk = ev;
function ih(e, t) {
  return ih = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ih(e, t);
}
function IN(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ih(e, t);
}
function Ps(e) {
  "@babel/helpers - typeof";
  return Ps = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ps(e);
}
function zN(e, t) {
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
function DN(e) {
  var t = zN(e, "string");
  return Ps(t) === "symbol" ? t : String(t);
}
function FN(e, t, r) {
  return t = DN(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function LN(e, t) {
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
      IN(c, u);
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
        return /* @__PURE__ */ xo.createElement(o, this.props);
      }, c;
    }(b.PureComponent);
    return FN(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var jr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, ic = function(e) {
  return Array.isArray(e) ? e : [e];
}, eC = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, jN = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, tC = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, rC = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, NN = function(e, t) {
  return !e || rC(e) || !jN(e) && t(tC(e));
}, nC = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = NN(t, nC.bind(void 0, e));
  return e.set(t, n), n;
}, BN = function(e, t) {
  return e && !rC(e) ? UN(e) ? t(tC(e)) : !1 : !0;
}, oC = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = BN(t, oC.bind(void 0, e));
  return e.set(t, n), n;
}, iC = function(e) {
  return e.dataset;
}, VN = function(e) {
  return e.tagName === "BUTTON";
}, aC = function(e) {
  return e.tagName === "INPUT";
}, sC = function(e) {
  return aC(e) && e.type === "radio";
}, WN = function(e) {
  return !((aC(e) || VN(e)) && (e.type === "hidden" || e.disabled));
}, UN = function(e) {
  var t = e.getAttribute(PN);
  return ![!0, "true", ""].includes(t);
}, tv = function(e) {
  var t;
  return !!(e && (!((t = iC(e)) === null || t === void 0) && t.focusGuard));
}, ac = function(e) {
  return !tv(e);
}, HN = function(e) {
  return !!e;
}, GN = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, lC = function(e, t, r) {
  return jr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(GN);
}, KN = [
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
], rv = KN.join(","), YN = "".concat(rv, ", [data-focus-guard]"), uC = function(e, t) {
  return jr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? YN : rv) ? [n] : [], uC(n));
  }, []);
}, qN = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? ed([e.contentDocument.body], t) : [e];
}, ed = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = uC(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return qN(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? jr(n.parentNode.querySelectorAll(rv)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, XN = function(e) {
  var t = e.querySelectorAll("[".concat(_N, "]"));
  return jr(t).map(function(r) {
    return ed([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, nv = function(e, t) {
  return jr(e).filter(function(r) {
    return nC(t, r);
  }).filter(function(r) {
    return WN(r);
  });
}, m1 = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), jr(e).filter(function(r) {
    return oC(t, r);
  });
}, ah = function(e, t, r) {
  return lC(nv(ed(e, r), t), !0, r);
}, v1 = function(e, t) {
  return lC(nv(ed(e), t), !1);
}, QN = function(e, t) {
  return nv(XN(e), t);
}, Pi = function(e, t) {
  return e.shadowRoot ? Pi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : jr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? Pi(o, t) : !1;
    }
    return Pi(r, t);
  });
}, ZN = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, cC = function(e) {
  return e.parentNode ? cC(e.parentNode) : e;
}, ov = function(e) {
  var t = ic(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(oh);
    return r.push.apply(r, o ? ZN(jr(cC(n).querySelectorAll("[".concat(oh, '="').concat(o, '"]:not([').concat(Uk, '="disabled"])')))) : [n]), r;
  }, []);
}, JN = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ts = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ts(t.shadowRoot) : t instanceof HTMLIFrameElement && JN(function() {
      return t.contentWindow.document;
    }) ? Ts(t.contentWindow.document) : t;
  }
}, eB = function(e, t) {
  return e === t;
}, tB = function(e, t) {
  return !!jr(e.querySelectorAll("iframe")).some(function(r) {
    return eB(r, t);
  });
}, dC = function(e, t) {
  return t === void 0 && (t = Ts(eC(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : ov(e).some(function(r) {
    return Pi(r, t) || tB(r, t);
  });
}, rB = function(e) {
  e === void 0 && (e = document);
  var t = Ts(e);
  return t ? jr(e.querySelectorAll("[".concat(CN, "]"))).some(function(r) {
    return Pi(r, t);
  }) : !1;
}, nB = function(e, t) {
  return t.filter(sC).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, iv = function(e, t) {
  return sC(e) && e.name ? nB(e, t) : e;
}, oB = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(iv(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, g1 = function(e) {
  return e[0] && e.length > 1 ? iv(e[0], e) : e[0];
}, y1 = function(e, t) {
  return e.length > 1 ? e.indexOf(iv(e[t], e)) : t;
}, fC = "NEW_FOCUS", iB = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = tv(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), v = oB(t), g = r !== void 0 ? v.indexOf(r) : -1, x = g - (n ? v.indexOf(n) : l), m = y1(e, 0), h = y1(e, o - 1);
    if (l === -1 || c === -1)
      return fC;
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
}, aB = function(e) {
  return function(t) {
    var r, n = (r = iC(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, sB = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = m1(n.filter(aB(r)));
  return o && o.length ? g1(o) : g1(m1(t));
}, sh = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && sh(e.parentNode.host || e.parentNode, t), t;
}, Cf = function(e, t) {
  for (var r = sh(e), n = sh(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, pC = function(e, t, r) {
  var n = ic(e), o = ic(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = Cf(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = Cf(i, l);
      u && (!a || Pi(u, a) ? a = u : a = Cf(u, a));
    });
  }), a;
}, lB = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(QN(n, t));
  }, []);
}, uB = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(HN);
}, cB = function(e, t) {
  var r = Ts(ic(e).length > 0 ? document : eC(e).ownerDocument), n = ov(e).filter(ac), o = pC(r || e, e, n), i = /* @__PURE__ */ new Map(), a = v1(n, i), s = ah(n, i).filter(function(p) {
    var v = p.node;
    return ac(v);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = v1([o], i).map(function(p) {
      var v = p.node;
      return v;
    }), u = uB(l, s), c = u.map(function(p) {
      var v = p.node;
      return v;
    }), d = iB(c, l, r, t);
    if (d === fC) {
      var f = sB(a, c, lB(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, dB = function(e) {
  var t = ov(e).filter(ac), r = pC(e, e, t), n = /* @__PURE__ */ new Map(), o = ah([r], n, !0), i = ah(t, n).filter(function(a) {
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
      guard: tv(s)
    };
  });
}, fB = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, _f = 0, Pf = !1, hC = function(e, t, r) {
  r === void 0 && (r = {});
  var n = cB(e, t);
  if (!Pf && n) {
    if (_f > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Pf = !0, setTimeout(function() {
        Pf = !1;
      }, 1);
      return;
    }
    _f++, fB(n.node, r.focusOptions), _f--;
  }
};
function av(e) {
  setTimeout(e, 1);
}
var pB = function() {
  return document && document.activeElement === document.body;
}, hB = function() {
  return pB() || rB();
}, Ti = null, hi = null, Ei = null, Es = !1, mB = function() {
  return !0;
}, vB = function(t) {
  return (Ti.whiteList || mB)(t);
}, gB = function(t, r) {
  Ei = {
    observerNode: t,
    portaledElement: r
  };
}, yB = function(t) {
  return Ei && Ei.portaledElement === t;
};
function b1(e, t, r, n) {
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
var bB = function(t) {
  return t && "current" in t ? t.current : t;
}, xB = function(t) {
  return t ? !!Es : Es === "meanwhile";
}, SB = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, wB = function(t, r) {
  return r.some(function(n) {
    return SB(t, n, n);
  });
}, sc = function() {
  var t = !1;
  if (Ti) {
    var r = Ti, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || Ei && Ei.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(bB).filter(Boolean));
      if ((!c || vB(c)) && (o || xB(s) || !hB() || !hi && i) && (u && !// active element is "inside" working area
      (dC(d) || // check for shadow-dom contained elements
      c && wB(c, d) || yB(c)) && (document && !hi && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = hC(d, hi, {
        focusOptions: l
      }), Ei = {})), Es = !1, hi = document && document.activeElement), document) {
        var f = document && document.activeElement, p = dB(d), v = p.map(function(g) {
          var x = g.node;
          return x;
        }).indexOf(f);
        v > -1 && (p.filter(function(g) {
          var x = g.guard, m = g.node;
          return x && m.dataset.focusAutoGuard;
        }).forEach(function(g) {
          var x = g.node;
          return x.removeAttribute("tabIndex");
        }), b1(v, p.length, 1, p), b1(v, -1, -1, p));
      }
    }
  }
  return t;
}, mC = function(t) {
  sc() && t && (t.stopPropagation(), t.preventDefault());
}, sv = function() {
  return av(sc);
}, kB = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || gB(n, r);
}, CB = function() {
  return null;
}, vC = function() {
  Es = "just", av(function() {
    Es = "meanwhile";
  });
}, _B = function() {
  document.addEventListener("focusin", mC), document.addEventListener("focusout", sv), window.addEventListener("blur", vC);
}, PB = function() {
  document.removeEventListener("focusin", mC), document.removeEventListener("focusout", sv), window.removeEventListener("blur", vC);
};
function TB(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function EB(e) {
  var t = e.slice(-1)[0];
  t && !Ti && _B();
  var r = Ti, n = r && t && t.id === r.id;
  Ti = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (hi = null, (!n || r.observed !== t.observed) && t.onActivation(), sc(), av(sc)) : (PB(), hi = null);
}
Qk.assignSyncMedium(kB);
Zk.assignMedium(sv);
RN.assignMedium(function(e) {
  return e({
    moveFocusInside: hC,
    focusInside: dC
  });
});
const $B = LN(TB, EB)(CB);
var gC = /* @__PURE__ */ b.forwardRef(function(t, r) {
  return /* @__PURE__ */ b.createElement(Jk, Po({
    sideCar: $B,
    ref: r
  }, t));
}), yC = Jk.propTypes || {};
yC.sideCar;
yN(yC, ["sideCar"]);
gC.propTypes = {};
const x1 = gC;
function bC(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function xC(e) {
  var t;
  if (!bC(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function AB(e) {
  var t, r;
  return (r = (t = SC(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function SC(e) {
  return bC(e) ? e.ownerDocument : document;
}
function RB(e) {
  return SC(e).activeElement;
}
var wC = (e) => e.hasAttribute("tabindex"), MB = (e) => wC(e) && e.tabIndex === -1;
function OB(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function kC(e) {
  return e.parentElement && kC(e.parentElement) ? !0 : e.hidden;
}
function IB(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function CC(e) {
  if (!xC(e) || kC(e) || OB(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : IB(e) ? !0 : wC(e);
}
function zB(e) {
  return e ? xC(e) && CC(e) && !MB(e) : !1;
}
var DB = [
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
], FB = DB.join(), LB = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function _C(e) {
  const t = Array.from(
    e.querySelectorAll(FB)
  );
  return t.unshift(e), t.filter((r) => CC(r) && LB(r));
}
var S1, jB = (S1 = x1.default) != null ? S1 : x1, PC = (e) => {
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
    t != null && t.current ? t.current.focus() : n != null && n.current && _C(n.current).length === 0 && requestAnimationFrame(() => {
      var v;
      (v = n.current) == null || v.focus();
    });
  }, [t, n]), d = b.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ k.jsx(
    jB,
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
PC.displayName = "FocusLock";
var lv = xe(function(t, r) {
  const { htmlSize: n, ...o } = t, i = Ro("Input", o), a = xr(o), s = Gj(a), l = ye("chakra-input", t.className);
  return /* @__PURE__ */ k.jsx(
    Z.input,
    {
      size: n,
      ...s,
      __css: i.field,
      ref: r,
      className: l
    }
  );
});
lv.displayName = "Input";
lv.id = "Input";
var TC = xe(function(t, r) {
  const n = qi("Link", t), { className: o, isExternal: i, ...a } = xr(t);
  return /* @__PURE__ */ k.jsx(
    Z.a,
    {
      target: i ? "_blank" : void 0,
      rel: i ? "noopener" : void 0,
      ref: r,
      className: ye("chakra-link", o),
      ...a,
      __css: n
    }
  );
});
TC.displayName = "Link";
function NB(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : rr(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var yo = xe(function(t, r) {
  const n = qi("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = xr(t), u = bD({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ k.jsx(
    Z.p,
    {
      ref: r,
      className: ye("chakra-text", t.className),
      ...u,
      ...l,
      __css: n
    }
  );
});
yo.displayName = "Text";
var EC = (e) => /* @__PURE__ */ k.jsx(
  Z.div,
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
EC.displayName = "StackItem";
function BB(e) {
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
    "&": NB(
      r,
      (o) => n[o]
    )
  };
}
var td = xe((e, t) => {
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
    () => BB({ spacing: a, direction: p }),
    [a, p]
  ), g = !!u, x = !d && !g, m = b.useMemo(() => {
    const y = Mj(l);
    return x ? y : y.map((w, C) => {
      const E = typeof w.key < "u" ? w.key : C, _ = C + 1 === y.length, R = d ? /* @__PURE__ */ k.jsx(EC, { children: w }, E) : w;
      if (!g)
        return R;
      const M = b.cloneElement(
        u,
        {
          __css: v
        }
      ), L = _ ? null : M;
      return /* @__PURE__ */ k.jsxs(b.Fragment, { children: [
        R,
        L
      ] }, E);
    });
  }, [
    u,
    v,
    g,
    x,
    d,
    l
  ]), h = ye("chakra-stack", c);
  return /* @__PURE__ */ k.jsx(
    Z.div,
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
td.displayName = "Stack";
var Pn = xe((e, t) => /* @__PURE__ */ k.jsx(td, { align: "center", ...e, direction: "row", ref: t }));
Pn.displayName = "HStack";
var uv = Z("div");
uv.displayName = "Box";
var $C = xe(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ k.jsx(
    uv,
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
$C.displayName = "Square";
var VB = xe(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ k.jsx($C, { size: n, ref: r, borderRadius: "9999px", ...o });
});
VB.displayName = "Circle";
function WB(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = RB(t);
  return !r || t.contains(r) ? !1 : !!zB(r);
}
function UB(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, i = r && !n;
  ws(() => {
    if (!i || WB(e))
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
var HB = {
  preventScroll: !0,
  shouldFocus: !1
};
function GB(e, t = HB) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: i } = t, a = KB(e) ? e.current : e, s = o && i, l = b.useRef(s), u = b.useRef(i);
  zn(() => {
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
        const d = _C(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [i, n, a, r]);
  ws(() => {
    c();
  }, [c]), Zm(a, "transitionend", c);
}
function KB(e) {
  return "current" in e;
}
var Bo = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), ht = {
  arrowShadowColor: Bo("--popper-arrow-shadow-color"),
  arrowSize: Bo("--popper-arrow-size", "8px"),
  arrowSizeHalf: Bo("--popper-arrow-size-half"),
  arrowBg: Bo("--popper-arrow-bg"),
  transformOrigin: Bo("--popper-transform-origin"),
  arrowOffset: Bo("--popper-arrow-offset")
};
function YB(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var qB = {
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
}, XB = (e) => qB[e], w1 = {
  scroll: !0,
  resize: !0
};
function QB(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...w1, ...e }
  } : t = {
    enabled: e,
    options: w1
  }, t;
}
var ZB = {
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
}, JB = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    k1(e);
  },
  effect: ({ state: e }) => () => {
    k1(e);
  }
}, k1 = (e) => {
  e.elements.popper.style.setProperty(
    ht.transformOrigin.var,
    XB(e.placement)
  );
}, e6 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    t6(e);
  }
}, t6 = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = r6(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: ht.arrowSize.varRef,
      height: ht.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [ht.arrowSizeHalf.var]: `calc(${ht.arrowSize.varRef} / 2 - 1px)`,
      [ht.arrowOffset.var]: `calc(${ht.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, r6 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: ht.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: ht.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: ht.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: ht.arrowOffset.varRef };
}, n6 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    C1(e);
  },
  effect: ({ state: e }) => () => {
    C1(e);
  }
}, C1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = YB(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
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
}, o6 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, i6 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function a6(e, t = "ltr") {
  var r, n;
  const o = ((r = o6[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = i6[e]) != null ? n : o;
}
var At = "top", ar = "bottom", sr = "right", Rt = "left", cv = "auto", Ys = [At, ar, sr, Rt], Bi = "start", $s = "end", s6 = "clippingParents", AC = "viewport", ga = "popper", l6 = "reference", _1 = /* @__PURE__ */ Ys.reduce(function(e, t) {
  return e.concat([t + "-" + Bi, t + "-" + $s]);
}, []), RC = /* @__PURE__ */ [].concat(Ys, [cv]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Bi, t + "-" + $s]);
}, []), u6 = "beforeRead", c6 = "read", d6 = "afterRead", f6 = "beforeMain", p6 = "main", h6 = "afterMain", m6 = "beforeWrite", v6 = "write", g6 = "afterWrite", y6 = [u6, c6, d6, f6, p6, h6, m6, v6, g6];
function Lr(e) {
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
function Eo(e) {
  var t = Vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function nr(e) {
  var t = Vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function dv(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function b6(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !nr(i) || !Lr(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function x6(e) {
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
      !nr(o) || !Lr(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const S6 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: b6,
  effect: x6,
  requires: ["computeStyles"]
};
function Fr(e) {
  return e.split("-")[0];
}
var bo = Math.max, lc = Math.min, Vi = Math.round;
function lh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function MC() {
  return !/^((?!chrome|android).)*safari/i.test(lh());
}
function Wi(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && nr(e) && (o = e.offsetWidth > 0 && Vi(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Vi(n.height) / e.offsetHeight || 1);
  var a = Eo(e) ? Vt(e) : window, s = a.visualViewport, l = !MC() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / o, c = (n.top + (l && s ? s.offsetTop : 0)) / i, d = n.width / o, f = n.height / i;
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
function fv(e) {
  var t = Wi(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function OC(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && dv(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function ln(e) {
  return Vt(e).getComputedStyle(e);
}
function w6(e) {
  return ["table", "td", "th"].indexOf(Lr(e)) >= 0;
}
function Gn(e) {
  return ((Eo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function rd(e) {
  return Lr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (dv(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Gn(e)
  );
}
function P1(e) {
  return !nr(e) || // https://github.com/popperjs/popper-core/issues/837
  ln(e).position === "fixed" ? null : e.offsetParent;
}
function k6(e) {
  var t = /firefox/i.test(lh()), r = /Trident/i.test(lh());
  if (r && nr(e)) {
    var n = ln(e);
    if (n.position === "fixed")
      return null;
  }
  var o = rd(e);
  for (dv(o) && (o = o.host); nr(o) && ["html", "body"].indexOf(Lr(o)) < 0; ) {
    var i = ln(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function qs(e) {
  for (var t = Vt(e), r = P1(e); r && w6(r) && ln(r).position === "static"; )
    r = P1(r);
  return r && (Lr(r) === "html" || Lr(r) === "body" && ln(r).position === "static") ? t : r || k6(e) || t;
}
function pv(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qa(e, t, r) {
  return bo(e, lc(t, r));
}
function C6(e, t, r) {
  var n = qa(e, t, r);
  return n > r ? r : n;
}
function IC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function zC(e) {
  return Object.assign({}, IC(), e);
}
function DC(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var _6 = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, zC(typeof t != "number" ? t : DC(t, Ys));
};
function P6(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, s = Fr(r.placement), l = pv(s), u = [Rt, sr].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = _6(o.padding, r), f = fv(i), p = l === "y" ? At : Rt, v = l === "y" ? ar : sr, g = r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c], x = a[l] - r.rects.reference[l], m = qs(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, y = g / 2 - x / 2, w = d[p], C = h - f[c] - d[v], E = h / 2 - f[c] / 2 + y, _ = qa(w, E, C), $ = l;
    r.modifiersData[n] = (t = {}, t[$] = _, t.centerOffset = _ - E, t);
  }
}
function T6(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || OC(t.elements.popper, o) && (t.elements.arrow = o));
}
const E6 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: P6,
  effect: T6,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ui(e) {
  return e.split("-")[1];
}
var $6 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function A6(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Vi(r * o) / o || 0,
    y: Vi(n * o) / o || 0
  };
}
function T1(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, v = a.y, g = v === void 0 ? 0 : v, x = typeof c == "function" ? c({
    x: p,
    y: g
  }) : {
    x: p,
    y: g
  };
  p = x.x, g = x.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), y = Rt, w = At, C = window;
  if (u) {
    var E = qs(r), _ = "clientHeight", $ = "clientWidth";
    if (E === Vt(r) && (E = Gn(r), ln(E).position !== "static" && s === "absolute" && (_ = "scrollHeight", $ = "scrollWidth")), E = E, o === At || (o === Rt || o === sr) && i === $s) {
      w = ar;
      var R = d && E === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[_]
      );
      g -= R - n.height, g *= l ? 1 : -1;
    }
    if (o === Rt || (o === At || o === ar) && i === $s) {
      y = sr;
      var M = d && E === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[$]
      );
      p -= M - n.width, p *= l ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: s
  }, u && $6), q = c === !0 ? A6({
    x: p,
    y: g
  }, Vt(r)) : {
    x: p,
    y: g
  };
  if (p = q.x, g = q.y, l) {
    var G;
    return Object.assign({}, L, (G = {}, G[w] = h ? "0" : "", G[y] = m ? "0" : "", G.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + g + "px)" : "translate3d(" + p + "px, " + g + "px, 0)", G));
  }
  return Object.assign({}, L, (t = {}, t[w] = h ? g + "px" : "", t[y] = m ? p + "px" : "", t.transform = "", t));
}
function R6(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, s = r.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: Fr(t.placement),
    variation: Ui(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, T1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, T1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const M6 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: R6,
  data: {}
};
var Il = {
  passive: !0
};
function O6(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, s = a === void 0 ? !0 : a, l = Vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Il);
  }), s && l.addEventListener("resize", r.update, Il), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Il);
    }), s && l.removeEventListener("resize", r.update, Il);
  };
}
const I6 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: O6,
  data: {}
};
var z6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function hu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return z6[t];
  });
}
var D6 = {
  start: "end",
  end: "start"
};
function E1(e) {
  return e.replace(/start|end/g, function(t) {
    return D6[t];
  });
}
function hv(e) {
  var t = Vt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function mv(e) {
  return Wi(Gn(e)).left + hv(e).scrollLeft;
}
function F6(e, t) {
  var r = Vt(e), n = Gn(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = MC();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + mv(e),
    y: l
  };
}
function L6(e) {
  var t, r = Gn(e), n = hv(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = bo(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = bo(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + mv(e), l = -n.scrollTop;
  return ln(o || r).direction === "rtl" && (s += bo(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function vv(e) {
  var t = ln(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function FC(e) {
  return ["html", "body", "#document"].indexOf(Lr(e)) >= 0 ? e.ownerDocument.body : nr(e) && vv(e) ? e : FC(rd(e));
}
function Xa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = FC(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Vt(n), a = o ? [i].concat(i.visualViewport || [], vv(n) ? n : []) : n, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Xa(rd(a)))
  );
}
function uh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function j6(e, t) {
  var r = Wi(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function $1(e, t, r) {
  return t === AC ? uh(F6(e, r)) : Eo(t) ? j6(t, r) : uh(L6(Gn(e)));
}
function N6(e) {
  var t = Xa(rd(e)), r = ["absolute", "fixed"].indexOf(ln(e).position) >= 0, n = r && nr(e) ? qs(e) : e;
  return Eo(n) ? t.filter(function(o) {
    return Eo(o) && OC(o, n) && Lr(o) !== "body";
  }) : [];
}
function B6(e, t, r, n) {
  var o = t === "clippingParents" ? N6(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], s = i.reduce(function(l, u) {
    var c = $1(e, u, n);
    return l.top = bo(c.top, l.top), l.right = lc(c.right, l.right), l.bottom = lc(c.bottom, l.bottom), l.left = bo(c.left, l.left), l;
  }, $1(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function LC(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Fr(n) : null, i = n ? Ui(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case At:
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
    case Rt:
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
  var u = o ? pv(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Bi:
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
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, s = r.boundary, l = s === void 0 ? s6 : s, u = r.rootBoundary, c = u === void 0 ? AC : u, d = r.elementContext, f = d === void 0 ? ga : d, p = r.altBoundary, v = p === void 0 ? !1 : p, g = r.padding, x = g === void 0 ? 0 : g, m = zC(typeof x != "number" ? x : DC(x, Ys)), h = f === ga ? l6 : ga, y = e.rects.popper, w = e.elements[v ? h : f], C = B6(Eo(w) ? w : w.contextElement || Gn(e.elements.popper), l, c, a), E = Wi(e.elements.reference), _ = LC({
    reference: E,
    element: y,
    strategy: "absolute",
    placement: o
  }), $ = uh(Object.assign({}, y, _)), R = f === ga ? $ : E, M = {
    top: C.top - R.top + m.top,
    bottom: R.bottom - C.bottom + m.bottom,
    left: C.left - R.left + m.left,
    right: R.right - C.right + m.right
  }, L = e.modifiersData.offset;
  if (f === ga && L) {
    var q = L[o];
    Object.keys(M).forEach(function(G) {
      var K = [sr, ar].indexOf(G) >= 0 ? 1 : -1, J = [At, ar].indexOf(G) >= 0 ? "y" : "x";
      M[G] += q[J] * K;
    });
  }
  return M;
}
function V6(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? RC : l, c = Ui(n), d = c ? s ? _1 : _1.filter(function(v) {
    return Ui(v) === c;
  }) : Ys, f = d.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(v, g) {
    return v[g] = As(e, {
      placement: g,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Fr(g)], v;
  }, {});
  return Object.keys(p).sort(function(v, g) {
    return p[v] - p[g];
  });
}
function W6(e) {
  if (Fr(e) === cv)
    return [];
  var t = hu(e);
  return [E1(e), t, E1(t)];
}
function U6(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, v = p === void 0 ? !0 : p, g = r.allowedAutoPlacements, x = t.options.placement, m = Fr(x), h = m === x, y = l || (h || !v ? [hu(x)] : W6(x)), w = [x].concat(y).reduce(function(Q, Pe) {
      return Q.concat(Fr(Pe) === cv ? V6(t, {
        placement: Pe,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: g
      }) : Pe);
    }, []), C = t.rects.reference, E = t.rects.popper, _ = /* @__PURE__ */ new Map(), $ = !0, R = w[0], M = 0; M < w.length; M++) {
      var L = w[M], q = Fr(L), G = Ui(L) === Bi, K = [At, ar].indexOf(q) >= 0, J = K ? "width" : "height", Y = As(t, {
        placement: L,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), ee = K ? G ? sr : Rt : G ? ar : At;
      C[J] > E[J] && (ee = hu(ee));
      var I = hu(ee), j = [];
      if (i && j.push(Y[q] <= 0), s && j.push(Y[ee] <= 0, Y[I] <= 0), j.every(function(Q) {
        return Q;
      })) {
        R = L, $ = !1;
        break;
      }
      _.set(L, j);
    }
    if ($)
      for (var B = v ? 3 : 1, N = function(Pe) {
        var se = w.find(function(be) {
          var we = _.get(be);
          if (we)
            return we.slice(0, Pe).every(function(Ae) {
              return Ae;
            });
        });
        if (se)
          return R = se, "break";
      }, X = B; X > 0; X--) {
        var H = N(X);
        if (H === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const H6 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: U6,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function A1(e, t, r) {
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
function R1(e) {
  return [At, sr, ar, Rt].some(function(t) {
    return e[t] >= 0;
  });
}
function G6(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = As(t, {
    elementContext: "reference"
  }), s = As(t, {
    altBoundary: !0
  }), l = A1(a, n), u = A1(s, o, i), c = R1(l), d = R1(u);
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
const K6 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: G6
};
function Y6(e, t, r) {
  var n = Fr(e), o = [Rt, At].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Rt, sr].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function q6(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = RC.reduce(function(c, d) {
    return c[d] = Y6(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const X6 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: q6
};
function Q6(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = LC({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Z6 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Q6,
  data: {}
};
function J6(e) {
  return e === "x" ? "y" : "x";
}
function eV(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, v = r.tetherOffset, g = v === void 0 ? 0 : v, x = As(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = Fr(t.placement), h = Ui(t.placement), y = !h, w = pv(m), C = J6(w), E = t.modifiersData.popperOffsets, _ = t.rects.reference, $ = t.rects.popper, R = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, M = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (E) {
    if (i) {
      var G, K = w === "y" ? At : Rt, J = w === "y" ? ar : sr, Y = w === "y" ? "height" : "width", ee = E[w], I = ee + x[K], j = ee - x[J], B = p ? -$[Y] / 2 : 0, N = h === Bi ? _[Y] : $[Y], X = h === Bi ? -$[Y] : -_[Y], H = t.elements.arrow, Q = p && H ? fv(H) : {
        width: 0,
        height: 0
      }, Pe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : IC(), se = Pe[K], be = Pe[J], we = qa(0, _[Y], Q[Y]), Ae = y ? _[Y] / 2 - B - we - se - M.mainAxis : N - we - se - M.mainAxis, Ge = y ? -_[Y] / 2 + B + we + be + M.mainAxis : X + we + be + M.mainAxis, Ke = t.elements.arrow && qs(t.elements.arrow), lr = Ke ? w === "y" ? Ke.clientTop || 0 : Ke.clientLeft || 0 : 0, ur = (G = L == null ? void 0 : L[w]) != null ? G : 0, Io = ee + Ae - ur - lr, z = ee + Ge - ur, he = qa(p ? lc(I, Io) : I, ee, p ? bo(j, z) : j);
      E[w] = he, q[w] = he - ee;
    }
    if (s) {
      var le, Qe = w === "x" ? At : Rt, cn = w === "x" ? ar : sr, ut = E[C], Sr = C === "y" ? "height" : "width", dn = ut + x[Qe], Gt = ut - x[cn], zo = [At, Rt].indexOf(m) !== -1, Zi = (le = L == null ? void 0 : L[C]) != null ? le : 0, Qs = zo ? dn : ut - _[Sr] - $[Sr] - Zi + M.altAxis, Zs = zo ? ut + _[Sr] + $[Sr] - Zi - M.altAxis : Gt, Kn = p && zo ? C6(Qs, ut, Zs) : qa(p ? Qs : dn, ut, p ? Zs : Gt);
      E[C] = Kn, q[C] = Kn - ut;
    }
    t.modifiersData[n] = q;
  }
}
const tV = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: eV,
  requiresIfExists: ["offset"]
};
function rV(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function nV(e) {
  return e === Vt(e) || !nr(e) ? hv(e) : rV(e);
}
function oV(e) {
  var t = e.getBoundingClientRect(), r = Vi(t.width) / e.offsetWidth || 1, n = Vi(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function iV(e, t, r) {
  r === void 0 && (r = !1);
  var n = nr(t), o = nr(t) && oV(t), i = Gn(t), a = Wi(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Lr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  vv(i)) && (s = nV(t)), nr(t) ? (l = Wi(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = mv(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function aV(e) {
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
function sV(e) {
  var t = aV(e);
  return y6.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function lV(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function uV(e) {
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
var M1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function O1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function cV(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? M1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, M1, i),
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
          reference: Eo(s) ? Xa(s) : s.contextElement ? Xa(s.contextElement) : [],
          popper: Xa(l)
        };
        var y = sV(uV([].concat(n, c.options.modifiers)));
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
          if (O1(h, y)) {
            c.rects = {
              reference: iV(h, qs(y), c.options.strategy === "fixed"),
              popper: fv(y)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
              return c.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var C = c.orderedModifiers[w], E = C.fn, _ = C.options, $ = _ === void 0 ? {} : _, R = C.name;
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
      update: lV(function() {
        return new Promise(function(x) {
          p.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!O1(s, l))
      return p;
    p.setOptions(u).then(function(x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function v() {
      c.orderedModifiers.forEach(function(x) {
        var m = x.name, h = x.options, y = h === void 0 ? {} : h, w = x.effect;
        if (typeof w == "function") {
          var C = w({
            state: c,
            name: m,
            instance: p,
            options: y
          }), E = function() {
          };
          d.push(C || E);
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
var dV = [I6, Z6, M6, S6, X6, H6, tV, E6, K6], fV = /* @__PURE__ */ cV({
  defaultModifiers: dV
});
function pV(e = {}) {
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
  } = e, v = b.useRef(null), g = b.useRef(null), x = b.useRef(null), m = a6(n, p), h = b.useRef(() => {
  }), y = b.useCallback(() => {
    var M;
    !t || !v.current || !g.current || ((M = h.current) == null || M.call(h), x.current = fV(v.current, g.current, {
      placement: m,
      modifiers: [
        n6,
        e6,
        JB,
        {
          ...ZB,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...QB(a)
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
  ), C = b.useCallback(
    (M = {}, L = null) => ({
      ...M,
      ref: yt(w, L)
    }),
    [w]
  ), E = b.useCallback(
    (M) => {
      g.current = M, y();
    },
    [y]
  ), _ = b.useCallback(
    (M = {}, L = null) => ({
      ...M,
      ref: yt(E, L),
      style: {
        ...M.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, E, f]
  ), $ = b.useCallback((M = {}, L = null) => {
    const { size: q, shadowColor: G, bg: K, style: J, ...Y } = M;
    return {
      ...Y,
      ref: L,
      "data-popper-arrow": "",
      style: hV(M)
    };
  }, []), R = b.useCallback(
    (M = {}, L = null) => ({
      ...M,
      ref: L,
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
    transformOrigin: ht.transformOrigin.varRef,
    referenceRef: w,
    popperRef: E,
    getPopperProps: _,
    getArrowProps: $,
    getArrowInnerProps: R,
    getReferenceProps: C
  };
}
function hV(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), r && (i["--popper-arrow-shadow-color"] = r), n && (i["--popper-arrow-bg"] = n), i;
}
function mV(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, i = zr(r), a = zr(t), [s, l] = b.useState(e.defaultIsOpen || !1), u = n !== void 0 ? n : s, c = n !== void 0, d = b.useId(), f = o ?? `disclosure-${d}`, p = b.useCallback(() => {
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
function vV(e) {
  const { isOpen: t, ref: r } = e, [n, o] = b.useState(t), [i, a] = b.useState(!1);
  return b.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, n]), Zm(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const u = AB(r.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(c);
    }
  };
}
function gV(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var yV = Object.defineProperty, bV = (e, t, r) => t in e ? yV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, xV = (e, t, r) => (bV(e, typeof t != "symbol" ? t + "" : t, r), r), SV = class {
  constructor() {
    xV(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, ch = new SV();
function jC(e, t) {
  const [r, n] = b.useState(0);
  return b.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = ch.add(o);
        n(i);
      }
      return () => {
        ch.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var wV = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Vo = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ new WeakMap(), Dl = {}, Tf = 0, NC = function(e) {
  return e && (e.host || NC(e.parentNode));
}, kV = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = NC(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, CV = function(e, t, r, n) {
  var o = kV(t, Array.isArray(e) ? e : [e]);
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
        var p = f.getAttribute(n), v = p !== null && p !== "false", g = (Vo.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        Vo.set(f, g), i.set(f, x), a.push(f), g === 1 && v && zl.set(f, !0), x === 1 && f.setAttribute(r, "true"), v || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), Tf++, function() {
    a.forEach(function(d) {
      var f = Vo.get(d) - 1, p = i.get(d) - 1;
      Vo.set(d, f), i.set(d, p), f || (zl.has(d) || d.removeAttribute(n), zl.delete(d)), p || d.removeAttribute(r);
    }), Tf--, Tf || (Vo = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), zl = /* @__PURE__ */ new WeakMap(), Dl = {});
  };
}, _V = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || wV(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), CV(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function PV(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = b.useRef(null), c = b.useRef(null), [d, f, p] = EV(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  TV(u, t && a);
  const v = jC(u, t), g = b.useRef(null), x = b.useCallback((R) => {
    g.current = R.target;
  }, []), m = b.useCallback(
    (R) => {
      R.key === "Escape" && (R.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [h, y] = b.useState(!1), [w, C] = b.useState(!1), E = b.useCallback(
    (R = {}, M = null) => ({
      role: "dialog",
      ...R,
      ref: yt(M, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: me(
        R.onClick,
        (L) => L.stopPropagation()
      )
    }),
    [p, w, d, f, h]
  ), _ = b.useCallback(
    (R) => {
      R.stopPropagation(), g.current === R.target && ch.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), $ = b.useCallback(
    (R = {}, M = null) => ({
      ...R,
      ref: yt(M, c),
      onClick: me(R.onClick, _),
      onKeyDown: me(R.onKeyDown, m),
      onMouseDown: me(R.onMouseDown, x)
    }),
    [m, x, _]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: C,
    setHeaderMounted: y,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: E,
    getDialogContainerProps: $,
    index: v
  };
}
function TV(e, t) {
  const r = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t))
      return _V(e.current);
  }, [t, e, r]);
}
function EV(e, ...t) {
  const r = b.useId(), n = e || r;
  return b.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [$V, Xs] = rt({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [AV, Xi] = rt({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), BC = (e) => {
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
  } = t, g = Ro("Modal", t), m = {
    ...PV(t),
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
  return /* @__PURE__ */ k.jsx(AV, { value: m, children: /* @__PURE__ */ k.jsx($V, { value: g, children: /* @__PURE__ */ k.jsx(Zc, { onExitComplete: v, children: m.isOpen && /* @__PURE__ */ k.jsx(Ls, { ...r, children: n }) }) }) });
};
BC.displayName = "Modal";
var mu = "right-scroll-bar-position", vu = "width-before-scroll-bar", RV = "with-scroll-bars-hidden", MV = "--removed-body-scroll-bar-size", VC = qk(), Ef = function() {
}, nd = b.forwardRef(function(e, t) {
  var r = b.useRef(null), n = b.useState({
    onScrollCapture: Ef,
    onWheelCapture: Ef,
    onTouchMoveCapture: Ef
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, g = e.allowPinchZoom, x = e.as, m = x === void 0 ? "div" : x, h = e.gapMode, y = Gk(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, C = Hk([r, t]), E = Ar(Ar({}, y), o);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: VC, removeScrollBar: u, shards: d, noIsolation: p, inert: v, setCallbacks: i, allowPinchZoom: !!g, lockRef: r, gapMode: h }),
    a ? b.cloneElement(b.Children.only(s), Ar(Ar({}, E), { ref: C })) : b.createElement(m, Ar({}, E, { className: l, ref: C }), s)
  );
});
nd.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
nd.classNames = {
  fullWidth: vu,
  zeroRight: mu
};
var I1, OV = function() {
  if (I1)
    return I1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function IV() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = OV();
  return t && e.setAttribute("nonce", t), e;
}
function zV(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function DV(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var FV = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = IV()) && (zV(t, r), DV(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, LV = function() {
  var e = FV();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, WC = function() {
  var e = LV(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, jV = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $f = function(e) {
  return parseInt(e || "", 10) || 0;
}, NV = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$f(r), $f(n), $f(o)];
}, BV = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return jV;
  var t = NV(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, VV = WC(), WV = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(RV, ` {
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
  
  .`).concat(mu, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(vu, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(mu, " .").concat(mu, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(vu, " .").concat(vu, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(MV, ": ").concat(s, `px;
  }
`);
}, UV = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = b.useMemo(function() {
    return BV(o);
  }, [o]);
  return b.createElement(VV, { styles: WV(i, !t, o, r ? "" : "!important") });
}, dh = !1;
if (typeof window < "u")
  try {
    var Fl = Object.defineProperty({}, "passive", {
      get: function() {
        return dh = !0, !0;
      }
    });
    window.addEventListener("test", Fl, Fl), window.removeEventListener("test", Fl, Fl);
  } catch {
    dh = !1;
  }
var Wo = dh ? { passive: !1 } : !1, HV = function(e) {
  return e.tagName === "TEXTAREA";
}, UC = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !HV(e) && r[t] === "visible")
  );
}, GV = function(e) {
  return UC(e, "overflowY");
}, KV = function(e) {
  return UC(e, "overflowX");
}, z1 = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = HC(e, n);
    if (o) {
      var i = GC(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, YV = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, qV = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, HC = function(e, t) {
  return e === "v" ? GV(t) : KV(t);
}, GC = function(e, t) {
  return e === "v" ? YV(t) : qV(t);
}, XV = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, QV = function(e, t, r, n, o) {
  var i = XV(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = GC(e, s), v = p[0], g = p[1], x = p[2], m = g - x - i * v;
    (v || m) && HC(e, s) && (d += m, f += v), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, Ll = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, D1 = function(e) {
  return [e.deltaX, e.deltaY];
}, F1 = function(e) {
  return e && "current" in e ? e.current : e;
}, ZV = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, JV = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, e8 = 0, Uo = [];
function t8(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), n = b.useRef(), o = b.useState(e8++)[0], i = b.useState(WC)[0], a = b.useRef(e);
  b.useEffect(function() {
    a.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = $N([e.lockRef.current], (e.shards || []).map(F1), !0).filter(Boolean);
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
    var m = Ll(g), h = r.current, y = "deltaX" in g ? g.deltaX : h[0] - m[0], w = "deltaY" in g ? g.deltaY : h[1] - m[1], C, E = g.target, _ = Math.abs(y) > Math.abs(w) ? "h" : "v";
    if ("touches" in g && _ === "h" && E.type === "range")
      return !1;
    var $ = z1(_, E);
    if (!$)
      return !0;
    if ($ ? C = _ : (C = _ === "v" ? "h" : "v", $ = z1(_, E)), !$)
      return !1;
    if (!n.current && "changedTouches" in g && (y || w) && (n.current = C), !C)
      return !0;
    var R = n.current || C;
    return QV(R, x, g, R === "h" ? y : w, !0);
  }, []), l = b.useCallback(function(g) {
    var x = g;
    if (!(!Uo.length || Uo[Uo.length - 1] !== i)) {
      var m = "deltaY" in x ? D1(x) : Ll(x), h = t.current.filter(function(C) {
        return C.name === x.type && (C.target === x.target || x.target === C.shadowParent) && ZV(C.delta, m);
      })[0];
      if (h && h.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!h) {
        var y = (a.current.shards || []).map(F1).filter(Boolean).filter(function(C) {
          return C.contains(x.target);
        }), w = y.length > 0 ? s(x, y[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(g, x, m, h) {
    var y = { name: g, delta: x, target: m, should: h, shadowParent: r8(m) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== y;
      });
    }, 1);
  }, []), c = b.useCallback(function(g) {
    r.current = Ll(g), n.current = void 0;
  }, []), d = b.useCallback(function(g) {
    u(g.type, D1(g), g.target, s(g, e.lockRef.current));
  }, []), f = b.useCallback(function(g) {
    u(g.type, Ll(g), g.target, s(g, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return Uo.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Wo), document.addEventListener("touchmove", l, Wo), document.addEventListener("touchstart", c, Wo), function() {
      Uo = Uo.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", l, Wo), document.removeEventListener("touchmove", l, Wo), document.removeEventListener("touchstart", c, Wo);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    v ? b.createElement(i, { styles: JV(o) }) : null,
    p ? b.createElement(UV, { gapMode: e.gapMode }) : null
  );
}
function r8(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const n8 = AN(VC, t8);
var KC = b.forwardRef(function(e, t) {
  return b.createElement(nd, Ar({}, e, { ref: t, sideCar: n8 }));
});
KC.classNames = nd.classNames;
const o8 = KC;
function i8(e) {
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
  } = Xi(), [f, p] = mk();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const v = jC(n, d);
  return /* @__PURE__ */ k.jsx(
    PC,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ k.jsx(
        o8,
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
var [a8, s8] = rt(), l8 = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function u8(e, t) {
  var r, n;
  if (e)
    return (n = (r = l8[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function YC(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = mm(), l = (t = s.components) == null ? void 0 : t.Drawer, u = u8(o, s.direction);
  return /* @__PURE__ */ k.jsx(a8, { value: { placement: u }, children: /* @__PURE__ */ k.jsx(
    BC,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var c8 = Z(Fk), gv = xe(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = Xi(), c = s(a, t), d = l(i), f = ye("chakra-modal__content", r), p = Xs(), v = {
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
    }, { placement: x } = s8();
    return /* @__PURE__ */ k.jsx(i8, { children: /* @__PURE__ */ k.jsx(
      Z.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: g,
        children: /* @__PURE__ */ k.jsx(
          c8,
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
gv.displayName = "DrawerContent";
var yv = xe(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = Xi();
    b.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = ye("chakra-modal__header", r), l = {
      flex: 0,
      ...Xs().header
    };
    return /* @__PURE__ */ k.jsx(
      Z.header,
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
yv.displayName = "ModalHeader";
var d8 = Z(Hs.div), bv = xe(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = ye("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Xs().overlay
    }, { motionPreset: u } = Xi(), d = o || (u === "none" ? {} : Dk);
    return /* @__PURE__ */ k.jsx(
      d8,
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
bv.displayName = "ModalOverlay";
var xv = xe((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = Xi();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = ye("chakra-modal__body", r), s = Xs();
  return /* @__PURE__ */ k.jsx(
    Z.div,
    {
      ref: t,
      className: a,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
xv.displayName = "ModalBody";
var Sv = xe(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = Xi(), a = ye("chakra-modal__close-btn", n), s = Xs();
    return /* @__PURE__ */ k.jsx(
      Jc,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: me(r, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
Sv.displayName = "ModalCloseButton";
var [f8, Qi] = rt({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [p8, od] = rt({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});
function qC(e) {
  const t = b.Children.only(e.children), { getTriggerProps: r } = Qi();
  return b.cloneElement(t, r(t.props, t.ref));
}
qC.displayName = "PopoverTrigger";
var Ho = {
  click: "click",
  hover: "hover"
};
function h8(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: r = !0,
    initialFocusRef: n,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = Ho.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: v,
    ...g
  } = e, { isOpen: x, onClose: m, onOpen: h, onToggle: y } = mV(e), w = b.useRef(null), C = b.useRef(null), E = b.useRef(null), _ = b.useRef(!1), $ = b.useRef(!1);
  x && ($.current = !0);
  const [R, M] = b.useState(!1), [L, q] = b.useState(!1), G = b.useId(), K = o ?? G, [J, Y, ee, I] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((z) => `${z}-${K}`), {
    referenceRef: j,
    getArrowProps: B,
    getPopperProps: N,
    getArrowInnerProps: X,
    forceUpdate: H
  } = pV({
    ...g,
    enabled: x || !!v
  }), Q = vV({ isOpen: x, ref: E });
  gN({
    enabled: x,
    ref: C
  }), UB(E, {
    focusRef: C,
    visible: x,
    shouldFocus: i && u === Ho.click
  }), GB(E, {
    focusRef: n,
    visible: x,
    shouldFocus: a && u === Ho.click
  });
  const Pe = gV({
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
          transformOrigin: ht.transformOrigin.varRef,
          [ht.arrowSize.var]: s ? `${s}px` : void 0,
          [ht.arrowShadowColor.var]: l
        },
        ref: yt(E, he),
        children: Pe ? z.children : null,
        id: Y,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: me(z.onKeyDown, (Qe) => {
          r && Qe.key === "Escape" && m();
        }),
        onBlur: me(z.onBlur, (Qe) => {
          const cn = L1(Qe), ut = Af(E.current, cn), Sr = Af(C.current, cn);
          x && t && (!ut && !Sr) && m();
        }),
        "aria-labelledby": R ? ee : void 0,
        "aria-describedby": L ? I : void 0
      };
      return u === Ho.hover && (le.role = "tooltip", le.onMouseEnter = me(z.onMouseEnter, () => {
        _.current = !0;
      }), le.onMouseLeave = me(
        z.onMouseLeave,
        (Qe) => {
          Qe.nativeEvent.relatedTarget !== null && (_.current = !1, setTimeout(() => m(), d));
        }
      )), le;
    },
    [
      Pe,
      Y,
      R,
      ee,
      L,
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
  ), be = b.useCallback(
    (z = {}, he = null) => N(
      {
        ...z,
        style: {
          visibility: x ? "visible" : "hidden",
          ...z.style
        }
      },
      he
    ),
    [x, N]
  ), we = b.useCallback(
    (z, he = null) => ({
      ...z,
      // If anchor is rendered, it is used as reference.
      ref: yt(he, w, j)
    }),
    [w, j]
  ), Ae = b.useRef(), Ge = b.useRef(), Ke = b.useCallback(
    (z) => {
      w.current == null && j(z);
    },
    [j]
  ), lr = b.useCallback(
    (z = {}, he = null) => {
      const le = {
        ...z,
        ref: yt(C, he, Ke),
        id: J,
        "aria-haspopup": "dialog",
        "aria-expanded": x,
        "aria-controls": Y
      };
      return u === Ho.click && (le.onClick = me(z.onClick, y)), u === Ho.hover && (le.onFocus = me(z.onFocus, () => {
        Ae.current === void 0 && h();
      }), le.onBlur = me(z.onBlur, (Qe) => {
        const cn = L1(Qe), ut = !Af(E.current, cn);
        x && t && ut && m();
      }), le.onKeyDown = me(z.onKeyDown, (Qe) => {
        Qe.key === "Escape" && m();
      }), le.onMouseEnter = me(z.onMouseEnter, () => {
        _.current = !0, Ae.current = window.setTimeout(() => h(), c);
      }), le.onMouseLeave = me(z.onMouseLeave, () => {
        _.current = !1, Ae.current && (clearTimeout(Ae.current), Ae.current = void 0), Ge.current = window.setTimeout(() => {
          _.current === !1 && m();
        }, d);
      })), le;
    },
    [
      J,
      x,
      Y,
      u,
      Ke,
      y,
      h,
      t,
      m,
      c,
      d
    ]
  );
  b.useEffect(() => () => {
    Ae.current && clearTimeout(Ae.current), Ge.current && clearTimeout(Ge.current);
  }, []);
  const ur = b.useCallback(
    (z = {}, he = null) => ({
      ...z,
      id: ee,
      ref: yt(he, (le) => {
        M(!!le);
      })
    }),
    [ee]
  ), Io = b.useCallback(
    (z = {}, he = null) => ({
      ...z,
      id: I,
      ref: yt(he, (le) => {
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
    getAnchorProps: we,
    getArrowProps: B,
    getArrowInnerProps: X,
    getPopoverPositionerProps: be,
    getPopoverProps: se,
    getTriggerProps: lr,
    getHeaderProps: ur,
    getBodyProps: Io
  };
}
function Af(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function L1(e) {
  var t;
  const r = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : r;
}
function XC(e) {
  const t = Ro("Popover", e), { children: r, ...n } = xr(e), o = mm(), i = h8({ ...n, direction: o.direction });
  return /* @__PURE__ */ k.jsx(f8, { value: i, children: /* @__PURE__ */ k.jsx(p8, { value: t, children: Yr(r, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
XC.displayName = "Popover";
var Rf = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function QC(e) {
  var t;
  const { bg: r, bgColor: n, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = Qi(), c = od(), d = (t = r ?? n) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ k.jsx(
    Z.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ k.jsx(
        Z.div,
        {
          className: ye("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Rf("colors", s),
            "--popper-arrow-bg": Rf("colors", d),
            "--popper-arrow-shadow": Rf("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
QC.displayName = "PopoverArrow";
var ZC = xe(
  function(t, r) {
    const { getBodyProps: n } = Qi(), o = od();
    return /* @__PURE__ */ k.jsx(
      Z.div,
      {
        ...n(t, r),
        className: ye("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
ZC.displayName = "PopoverBody";
var JC = xe(
  function(t, r) {
    const { onClose: n } = Qi(), o = od();
    return /* @__PURE__ */ k.jsx(
      Jc,
      {
        size: "sm",
        onClick: n,
        className: ye("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: r,
        ...t
      }
    );
  }
);
JC.displayName = "PopoverCloseButton";
function m8(e) {
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
var v8 = {
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
}, g8 = Z(Hs.section), e_ = xe(function(t, r) {
  const { variants: n = v8, ...o } = t, { isOpen: i } = Qi();
  return /* @__PURE__ */ k.jsx(
    g8,
    {
      ref: r,
      variants: m8(n),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
e_.displayName = "PopoverTransition";
var t_ = xe(
  function(t, r) {
    const { rootProps: n, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = Qi(), u = od(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ k.jsx(
      Z.div,
      {
        ...s(n),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ k.jsx(
          e_,
          {
            ...o,
            ...a(i, r),
            onAnimationComplete: $S(
              l,
              i.onAnimationComplete
            ),
            className: ye("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
t_.displayName = "PopoverContent";
var [
  y8,
  b8,
  x8,
  r9
] = Tj();
function S8(e) {
  var t;
  const {
    defaultIndex: r,
    onChange: n,
    index: o,
    isManual: i,
    isLazy: a,
    lazyBehavior: s = "unmount",
    orientation: l = "horizontal",
    direction: u = "ltr",
    ...c
  } = e, [d, f] = b.useState(r ?? 0), [p, v] = Ej({
    defaultValue: r ?? 0,
    value: o,
    onChange: n
  });
  b.useEffect(() => {
    o != null && f(o);
  }, [o]);
  const g = x8(), x = b.useId();
  return {
    id: `tabs-${(t = e.id) != null ? t : x}`,
    selectedIndex: p,
    focusedIndex: d,
    setSelectedIndex: v,
    setFocusedIndex: f,
    isManual: i,
    isLazy: a,
    lazyBehavior: s,
    orientation: l,
    descendants: g,
    direction: u,
    htmlProps: c
  };
}
var [w8, k8] = rt({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function C8(e) {
  const { focusedIndex: t, orientation: r, direction: n } = k8(), o = b8(), i = b.useCallback(
    (a) => {
      const s = () => {
        var h;
        const y = o.nextEnabled(t);
        y && ((h = y.node) == null || h.focus());
      }, l = () => {
        var h;
        const y = o.prevEnabled(t);
        y && ((h = y.node) == null || h.focus());
      }, u = () => {
        var h;
        const y = o.firstEnabled();
        y && ((h = y.node) == null || h.focus());
      }, c = () => {
        var h;
        const y = o.lastEnabled();
        y && ((h = y.node) == null || h.focus());
      }, d = r === "horizontal", f = r === "vertical", p = a.key, v = n === "ltr" ? "ArrowLeft" : "ArrowRight", g = n === "ltr" ? "ArrowRight" : "ArrowLeft", m = {
        [v]: () => d && l(),
        [g]: () => d && s(),
        ArrowDown: () => f && s(),
        ArrowUp: () => f && l(),
        Home: u,
        End: c
      }[p];
      m && (a.preventDefault(), m(a));
    },
    [o, t, r, n]
  );
  return {
    ...e,
    role: "tablist",
    "aria-orientation": r,
    onKeyDown: me(e.onKeyDown, i)
  };
}
rt({});
var [_8, P8] = rt({
  name: "TabsStylesContext",
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
}), r_ = xe(function(t, r) {
  const n = Ro("Tabs", t), { children: o, className: i, ...a } = xr(t), { htmlProps: s, descendants: l, ...u } = S8(a), c = b.useMemo(() => u, [u]), { isFitted: d, ...f } = s, p = {
    position: "relative",
    ...n.root
  };
  return /* @__PURE__ */ k.jsx(y8, { value: l, children: /* @__PURE__ */ k.jsx(w8, { value: c, children: /* @__PURE__ */ k.jsx(_8, { value: n, children: /* @__PURE__ */ k.jsx(
    Z.div,
    {
      className: ye("chakra-tabs", i),
      ref: r,
      ...f,
      __css: p,
      children: o
    }
  ) }) }) });
});
r_.displayName = "Tabs";
var n_ = xe(function(t, r) {
  const n = C8({ ...t, ref: r }), i = {
    display: "flex",
    ...P8().tablist
  };
  return /* @__PURE__ */ k.jsx(
    Z.div,
    {
      ...n,
      className: ye("chakra-tabs__tablist", t.className),
      __css: i
    }
  );
});
n_.displayName = "TabList";
var T8 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, E8 = Object.defineProperty, $8 = Object.defineProperties, A8 = Object.getOwnPropertyDescriptors, uc = Object.getOwnPropertySymbols, o_ = Object.prototype.hasOwnProperty, i_ = Object.prototype.propertyIsEnumerable, j1 = (e, t, r) => t in e ? E8(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, N1 = (e, t) => {
  for (var r in t || (t = {}))
    o_.call(t, r) && j1(e, r, t[r]);
  if (uc)
    for (var r of uc(t))
      i_.call(t, r) && j1(e, r, t[r]);
  return e;
}, R8 = (e, t) => $8(e, A8(t)), M8 = (e, t) => {
  var r = {};
  for (var n in e)
    o_.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && uc)
    for (var n of uc(e))
      t.indexOf(n) < 0 && i_.call(e, n) && (r[n] = e[n]);
  return r;
}, id = (e, t, r) => {
  const n = b.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = M8(a, ["color", "size", "stroke", "children"]);
      return b.createElement(
        "svg",
        N1(R8(N1({
          ref: i
        }, T8), {
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
    color: Zn.string,
    size: Zn.oneOfType([Zn.string, Zn.number]),
    stroke: Zn.oneOfType([Zn.string, Zn.number])
  }, n.displayName = `${t}`, n;
}, O8 = id("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), a_ = id("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), I8 = id("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), z8 = id(
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
let jl;
const D8 = new Uint8Array(16);
function F8() {
  if (!jl && (jl = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !jl))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return jl(D8);
}
const ot = [];
for (let e = 0; e < 256; ++e)
  ot.push((e + 256).toString(16).slice(1));
function L8(e, t = 0) {
  return ot[e[t + 0]] + ot[e[t + 1]] + ot[e[t + 2]] + ot[e[t + 3]] + "-" + ot[e[t + 4]] + ot[e[t + 5]] + "-" + ot[e[t + 6]] + ot[e[t + 7]] + "-" + ot[e[t + 8]] + ot[e[t + 9]] + "-" + ot[e[t + 10]] + ot[e[t + 11]] + ot[e[t + 12]] + ot[e[t + 13]] + ot[e[t + 14]] + ot[e[t + 15]];
}
const j8 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), B1 = {
  randomUUID: j8
};
function N8(e, t, r) {
  if (B1.randomUUID && !t && !e)
    return B1.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || F8)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      t[r + o] = n[o];
    return t;
  }
  return L8(n);
}
const V1 = localStorage.getItem("workspace"), yr = V1 != null ? JSON.parse(V1) : {};
function W1(e, t) {
  yr[e] = {
    ...yr[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(yr));
}
function U1(e, t) {
  const r = N8();
  return yr[r] = {
    id: r,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(yr)), yr[r];
}
function H1() {
  return Object.values(yr).sort((e, t) => t.updateTime - e.updateTime);
}
function B8(e) {
  delete yr[e], localStorage.setItem("workspace", JSON.stringify(yr));
}
function V8({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: r
}) {
  const [n, o] = b.useState([]);
  b.useEffect(() => {
    const a = H1();
    o(a);
  }, []);
  const i = (a) => {
    B8(a);
    const s = H1();
    o(s);
  };
  return /* @__PURE__ */ k.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ k.jsxs(
    YC,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ k.jsx(bv, {}),
        /* @__PURE__ */ k.jsxs(gv, { children: [
          /* @__PURE__ */ k.jsx(Sv, {}),
          /* @__PURE__ */ k.jsx(yv, { children: "Recent Workflows" }),
          /* @__PURE__ */ k.jsxs(xv, { children: [
            /* @__PURE__ */ k.jsx(
              go,
              {
                leftIcon: /* @__PURE__ */ k.jsx(a_, {}),
                variant: "outline",
                size: "sm",
                colorScheme: "teal",
                mb: 6,
                onClick: r,
                children: "New"
              }
            ),
            n.map((a) => /* @__PURE__ */ k.jsxs(Pn, { w: "100%", justify: "space-between", children: [
              /* @__PURE__ */ k.jsxs(
                td,
                {
                  gap: 0,
                  w: "90%",
                  borderRadius: 6,
                  p: 2,
                  mb: 2,
                  backgroundColor: "#EEF2F6",
                  cursor: "pointer",
                  onClick: () => {
                    t(a.id);
                  },
                  children: [
                    /* @__PURE__ */ k.jsx(yo, { fontWeight: "500", children: a.name ?? "untitled" }),
                    /* @__PURE__ */ k.jsxs(yo, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                      "Updated: ",
                      W8(a.updateTime)
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ k.jsx(XC, { children: ({ isOpen: s, onClose: l }) => /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
                /* @__PURE__ */ k.jsx(qC, { children: /* @__PURE__ */ k.jsx(I8, { color: "#F56565", cursor: "pointer" }) }),
                /* @__PURE__ */ k.jsxs(t_, { children: [
                  /* @__PURE__ */ k.jsx(QC, {}),
                  /* @__PURE__ */ k.jsx(JC, {}),
                  /* @__PURE__ */ k.jsxs(ZC, { children: [
                    /* @__PURE__ */ k.jsx(yo, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                    /* @__PURE__ */ k.jsx(
                      go,
                      {
                        colorScheme: "red",
                        size: "sm",
                        onClick: () => {
                          i(a.id), l();
                        },
                        children: "Yes, delete"
                      }
                    )
                  ] })
                ] })
              ] }) })
            ] }))
          ] })
        ] })
      ]
    }
  ) });
}
function W8(e) {
  const t = new Date(e), r = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${n}-${r}-${o} ${i}:${a}`;
}
function U8(e) {
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
function H8() {
  const e = [];
  for (let t of Nl.graph._nodes)
    t.type == "T2IAdapterLoader" && (t.type = "ControlNetLoader"), t.type == "ConditioningAverage " && (t.type = "ConditioningAverage"), t.type == "SDV_img2vid_Conditioning" && (t.type = "SVD_img2vid_Conditioning"), t.type in LiteGraph.registered_node_types || (t.type = U8(t.type), e.push(t.type));
  return e;
}
const G8 = {
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
function K8() {
  const [e, t] = b.useState([]), r = b.useRef({}), [n, o] = b.useState(null), [i, a] = b.useState("root"), [s, l] = b.useState(null), u = b.useRef(null);
  b.useEffect(() => {
    u.current = s, console.log("flowID changed:", s);
  }, [s]);
  const c = () => {
    var m;
    const g = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(h) {
      },
      async addCustomNodeDefs(h) {
        r.current = h;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Nl.registerExtension(g);
    const x = localStorage.getItem("curFlowID");
    if (x)
      u.current = x, l(x);
    else {
      const h = localStorage.getItem("workflow"), y = U1(h ?? "");
      u.current = y.id, l(y.id);
    }
    o(((m = yr[u.current]) == null ? void 0 : m.name) ?? ""), setTimeout(() => {
      const h = H8();
      t(h);
    }, 1e3);
  };
  b.useEffect(() => {
    c(), setInterval(() => {
      if (u.current != null) {
        const g = localStorage.getItem("workflow");
        localStorage.setItem("curFlowID", u.current), g != null && W1(u.current, {
          json: g
        });
      }
    }, 1e3);
  }, []);
  const d = (g) => {
    u.current != null && W1(u.current, {
      name: g
    });
  }, f = b.useCallback(
    tE(d, 700),
    []
  ), p = (g) => {
    u.current = g;
    const x = yr[g];
    o(x.name), Nl.loadGraphData(JSON.parse(x.json)), a("root");
  }, v = () => {
    const g = G8, x = U1(JSON.stringify(g));
    u.current = x.id, o(x.name), Nl.loadGraphData(g);
  };
  return /* @__PURE__ */ k.jsxs(
    uv,
    {
      style: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ k.jsx(r_, { variant: "unstyled", children: /* @__PURE__ */ k.jsxs(
          n_,
          {
            defaultValue: "ComfyUI",
            style: { padding: 8, marginLeft: 16 },
            justifyContent: "space-between",
            gap: 4,
            children: [
              /* @__PURE__ */ k.jsxs(Pn, { children: [
                /* @__PURE__ */ k.jsx(
                  go,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => a("recentFlows"),
                    children: /* @__PURE__ */ k.jsxs(Pn, { gap: 1, children: [
                      /* @__PURE__ */ k.jsx(O8, { size: 20 }),
                      /* @__PURE__ */ k.jsx(z8, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ k.jsx(
                  go,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => v(),
                    children: /* @__PURE__ */ k.jsxs(Pn, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ k.jsx(a_, { size: 16, color: "white" }),
                      /* @__PURE__ */ k.jsx(yo, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ k.jsx(
                  lv,
                  {
                    variant: "unstyled",
                    placeholder: "Workflow name",
                    color: "white",
                    value: n ?? "",
                    onChange: (g) => {
                      o(g.target.value), f(g.target.value);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ k.jsx(Pn, { children: /* @__PURE__ */ k.jsx(
                go,
                {
                  colorScheme: "gray",
                  onClick: () => {
                    a("customNodes");
                  },
                  children: e.length === 0 ? "Custom Nodes" : "Install Missing Nodes " + e.length
                }
              ) })
            ]
          }
        ) }),
        i === "recentFlows" && /* @__PURE__ */ k.jsx(
          V8,
          {
            onclose: () => a("root"),
            loadWorkflowID: p,
            onClickNewFlow: () => {
              v(), a("root");
            }
          }
        ),
        /* @__PURE__ */ k.jsx(
          Y8,
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
  );
}
function Y8({
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
  return /* @__PURE__ */ k.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ k.jsxs(
    YC,
    {
      isOpen: t,
      placement: "right",
      onClose: () => r(),
      size: "sm",
      children: [
        /* @__PURE__ */ k.jsx(bv, {}),
        /* @__PURE__ */ k.jsxs(gv, { children: [
          /* @__PURE__ */ k.jsx(Sv, {}),
          /* @__PURE__ */ k.jsx(yv, { children: "Custom Nodes" }),
          /* @__PURE__ */ k.jsxs(xv, { children: [
            /* @__PURE__ */ k.jsxs(Pn, { mb: 3, children: [
              /* @__PURE__ */ k.jsx(
                nh,
                {
                  mr: 6,
                  isChecked: n.length === i.length,
                  onChange: (f) => {
                    f.target.checked ? o([...i.map((p) => p.id)]) : o([]);
                  },
                  children: "Select All"
                }
              ),
              /* @__PURE__ */ k.jsxs(
                go,
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
            /* @__PURE__ */ k.jsx(yo, { mb: 3, color: "GrayText", fontSize: "small", children: "Unselectable nodes are not found in Github, they may be private repos" }),
            e.map((f) => {
              const p = i.find((v) => (v == null ? void 0 : v.id) === f);
              return /* @__PURE__ */ k.jsxs(td, { gap: 0, mb: 2, children: [
                /* @__PURE__ */ k.jsxs(Pn, { children: [
                  /* @__PURE__ */ k.jsx(
                    nh,
                    {
                      isChecked: n.includes(f),
                      disabled: p == null,
                      onChange: (v) => {
                        v.target.checked ? o([...n, f]) : o(n.filter((g) => g !== f));
                      }
                    }
                  ),
                  /* @__PURE__ */ k.jsx("span", { children: f })
                ] }),
                p != null ? /* @__PURE__ */ k.jsx(
                  TC,
                  {
                    color: "teal.500",
                    href: p.gitHtmlUrl,
                    noOfLines: 1,
                    ml: 6,
                    children: p.gitHtmlUrl
                  }
                ) : /* @__PURE__ */ k.jsx(yo, {})
              ] });
            })
          ] })
        ] })
      ]
    }
  ) });
}
const s_ = document.createElement("div");
document.body.prepend(s_);
const q8 = {
  // initialColorMode: "light",
  // useSystemColorMode: false,
}, X8 = nD({ config: q8 });
Mf.createRoot(s_).render(
  /* @__PURE__ */ k.jsx(xo.StrictMode, { children: /* @__PURE__ */ k.jsxs(gj, { children: [
    /* @__PURE__ */ k.jsx(m$, { initialColorMode: X8.config.initialColorMode }),
    /* @__PURE__ */ k.jsx(K8, {})
  ] }) })
);
