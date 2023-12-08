import { app as Fl } from "/scripts/app.js";
function U2(e, t) {
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
var Sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var C1 = { exports: {} }, sc = {}, _1 = { exports: {} }, X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ps = Symbol.for("react.element"), H2 = Symbol.for("react.portal"), G2 = Symbol.for("react.fragment"), K2 = Symbol.for("react.strict_mode"), Y2 = Symbol.for("react.profiler"), q2 = Symbol.for("react.provider"), X2 = Symbol.for("react.context"), Q2 = Symbol.for("react.forward_ref"), Z2 = Symbol.for("react.suspense"), J2 = Symbol.for("react.memo"), e_ = Symbol.for("react.lazy"), kv = Symbol.iterator;
function t_(e) {
  return e === null || typeof e != "object" ? null : (e = kv && e[kv] || e["@@iterator"], typeof e == "function" ? e : null);
}
var P1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, T1 = Object.assign, E1 = {};
function Di(e, t, r) {
  this.props = e, this.context = t, this.refs = E1, this.updater = r || P1;
}
Di.prototype.isReactComponent = {};
Di.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Di.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $1() {
}
$1.prototype = Di.prototype;
function nh(e, t, r) {
  this.props = e, this.context = t, this.refs = E1, this.updater = r || P1;
}
var oh = nh.prototype = new $1();
oh.constructor = nh;
T1(oh, Di.prototype);
oh.isPureReactComponent = !0;
var Cv = Array.isArray, A1 = Object.prototype.hasOwnProperty, ih = { current: null }, R1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M1(e, t, r) {
  var n, o = {}, i = null, a = null;
  if (t != null)
    for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      A1.call(t, n) && !R1.hasOwnProperty(n) && (o[n] = t[n]);
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
  return { $$typeof: Ps, type: e, key: i, ref: a, props: o, _owner: ih.current };
}
function r_(e, t) {
  return { $$typeof: Ps, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ah(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ps;
}
function n_(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var _v = /\/+/g;
function dd(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? n_("" + e.key) : t.toString(36);
}
function Dl(e, t, r, n, o) {
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
          case Ps:
          case H2:
            a = !0;
        }
    }
  if (a)
    return a = e, o = o(a), e = n === "" ? "." + dd(a, 0) : n, Cv(o) ? (r = "", e != null && (r = e.replace(_v, "$&/") + "/"), Dl(o, t, r, "", function(u) {
      return u;
    })) : o != null && (ah(o) && (o = r_(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(_v, "$&/") + "/") + e)), t.push(o)), 1;
  if (a = 0, n = n === "" ? "." : n + ":", Cv(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + dd(i, s);
      a += Dl(i, t, r, l, o);
    }
  else if (l = t_(e), typeof l == "function")
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, l = n + dd(i, s++), a += Dl(i, t, r, l, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function el(e, t, r) {
  if (e == null)
    return e;
  var n = [], o = 0;
  return Dl(e, n, "", "", function(i) {
    return t.call(r, i, o++);
  }), n;
}
function o_(e) {
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
var yt = { current: null }, jl = { transition: null }, i_ = { ReactCurrentDispatcher: yt, ReactCurrentBatchConfig: jl, ReactCurrentOwner: ih };
X.Children = { map: el, forEach: function(e, t, r) {
  el(e, function() {
    t.apply(this, arguments);
  }, r);
}, count: function(e) {
  var t = 0;
  return el(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return el(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ah(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
X.Component = Di;
X.Fragment = G2;
X.Profiler = Y2;
X.PureComponent = nh;
X.StrictMode = K2;
X.Suspense = Z2;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i_;
X.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = T1({}, e.props), o = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = ih.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (l in t)
      A1.call(t, l) && !R1.hasOwnProperty(l) && (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
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
  return { $$typeof: Ps, type: e.type, key: o, ref: i, props: n, _owner: a };
};
X.createContext = function(e) {
  return e = { $$typeof: X2, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: q2, _context: e }, e.Consumer = e;
};
X.createElement = M1;
X.createFactory = function(e) {
  var t = M1.bind(null, e);
  return t.type = e, t;
};
X.createRef = function() {
  return { current: null };
};
X.forwardRef = function(e) {
  return { $$typeof: Q2, render: e };
};
X.isValidElement = ah;
X.lazy = function(e) {
  return { $$typeof: e_, _payload: { _status: -1, _result: e }, _init: o_ };
};
X.memo = function(e, t) {
  return { $$typeof: J2, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function(e) {
  var t = jl.transition;
  jl.transition = {};
  try {
    e();
  } finally {
    jl.transition = t;
  }
};
X.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
X.useCallback = function(e, t) {
  return yt.current.useCallback(e, t);
};
X.useContext = function(e) {
  return yt.current.useContext(e);
};
X.useDebugValue = function() {
};
X.useDeferredValue = function(e) {
  return yt.current.useDeferredValue(e);
};
X.useEffect = function(e, t) {
  return yt.current.useEffect(e, t);
};
X.useId = function() {
  return yt.current.useId();
};
X.useImperativeHandle = function(e, t, r) {
  return yt.current.useImperativeHandle(e, t, r);
};
X.useInsertionEffect = function(e, t) {
  return yt.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function(e, t) {
  return yt.current.useLayoutEffect(e, t);
};
X.useMemo = function(e, t) {
  return yt.current.useMemo(e, t);
};
X.useReducer = function(e, t, r) {
  return yt.current.useReducer(e, t, r);
};
X.useRef = function(e) {
  return yt.current.useRef(e);
};
X.useState = function(e) {
  return yt.current.useState(e);
};
X.useSyncExternalStore = function(e, t, r) {
  return yt.current.useSyncExternalStore(e, t, r);
};
X.useTransition = function() {
  return yt.current.useTransition();
};
X.version = "18.2.0";
_1.exports = X;
var b = _1.exports;
const mo = /* @__PURE__ */ _s(b), Pv = /* @__PURE__ */ U2({
  __proto__: null,
  default: mo
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
var a_ = b, s_ = Symbol.for("react.element"), l_ = Symbol.for("react.fragment"), u_ = Object.prototype.hasOwnProperty, c_ = a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d_ = { key: !0, ref: !0, __self: !0, __source: !0 };
function O1(e, t, r) {
  var n, o = {}, i = null, a = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (n in t)
    u_.call(t, n) && !d_.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in t = e.defaultProps, t)
      o[n] === void 0 && (o[n] = t[n]);
  return { $$typeof: s_, type: e, key: i, ref: a, props: o, _owner: c_.current };
}
sc.Fragment = l_;
sc.jsx = O1;
sc.jsxs = O1;
C1.exports = sc;
var E = C1.exports, Tf = {}, z1 = { exports: {} }, Bt = {}, I1 = { exports: {} }, F1 = {};
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
  function t(z, D) {
    var B = z.length;
    z.push(D);
    e:
      for (; 0 < B; ) {
        var L = B - 1 >>> 1, q = z[L];
        if (0 < o(q, D))
          z[L] = D, z[B] = q, B = L;
        else
          break e;
      }
  }
  function r(z) {
    return z.length === 0 ? null : z[0];
  }
  function n(z) {
    if (z.length === 0)
      return null;
    var D = z[0], B = z.pop();
    if (B !== D) {
      z[0] = B;
      e:
        for (var L = 0, q = z.length, U = q >>> 1; L < U; ) {
          var he = 2 * (L + 1) - 1, Me = z[he], ce = he + 1, ye = z[ce];
          if (0 > o(Me, B))
            ce < q && 0 > o(ye, Me) ? (z[L] = ye, z[ce] = B, L = ce) : (z[L] = Me, z[he] = B, L = he);
          else if (ce < q && 0 > o(ye, B))
            z[L] = ye, z[ce] = B, L = ce;
          else
            break e;
        }
    }
    return D;
  }
  function o(z, D) {
    var B = z.sortIndex - D.sortIndex;
    return B !== 0 ? B : z.id - D.id;
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
  var l = [], u = [], c = 1, d = null, f = 3, p = !1, g = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(z) {
    for (var D = r(u); D !== null; ) {
      if (D.callback === null)
        n(u);
      else if (D.startTime <= z)
        n(u), D.sortIndex = D.expirationTime, t(l, D);
      else
        break;
      D = r(u);
    }
  }
  function w(z) {
    if (y = !1, v(z), !g)
      if (r(l) !== null)
        g = !0, Y(k);
      else {
        var D = r(u);
        D !== null && oe(w, D.startTime - z);
      }
  }
  function k(z, D) {
    g = !1, y && (y = !1, m($), $ = -1), p = !0;
    var B = f;
    try {
      for (v(D), d = r(l); d !== null && (!(d.expirationTime > D) || z && !j()); ) {
        var L = d.callback;
        if (typeof L == "function") {
          d.callback = null, f = d.priorityLevel;
          var q = L(d.expirationTime <= D);
          D = e.unstable_now(), typeof q == "function" ? d.callback = q : d === r(l) && n(l), v(D);
        } else
          n(l);
        d = r(l);
      }
      if (d !== null)
        var U = !0;
      else {
        var he = r(u);
        he !== null && oe(w, he.startTime - D), U = !1;
      }
      return U;
    } finally {
      d = null, f = B, p = !1;
    }
  }
  var T = !1, C = null, $ = -1, R = 5, M = -1;
  function j() {
    return !(e.unstable_now() - M < R);
  }
  function ee() {
    if (C !== null) {
      var z = e.unstable_now();
      M = z;
      var D = !0;
      try {
        D = C(!0, z);
      } finally {
        D ? H() : (T = !1, C = null);
      }
    } else
      T = !1;
  }
  var H;
  if (typeof h == "function")
    H = function() {
      h(ee);
    };
  else if (typeof MessageChannel < "u") {
    var G = new MessageChannel(), K = G.port2;
    G.port1.onmessage = ee, H = function() {
      K.postMessage(null);
    };
  } else
    H = function() {
      x(ee, 0);
    };
  function Y(z) {
    C = z, T || (T = !0, H());
  }
  function oe(z, D) {
    $ = x(function() {
      z(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
    z.callback = null;
  }, e.unstable_continueExecution = function() {
    g || p || (g = !0, Y(k));
  }, e.unstable_forceFrameRate = function(z) {
    0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < z ? Math.floor(1e3 / z) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, e.unstable_next = function(z) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = f;
    }
    var B = f;
    f = D;
    try {
      return z();
    } finally {
      f = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(z, D) {
    switch (z) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        z = 3;
    }
    var B = f;
    f = z;
    try {
      return D();
    } finally {
      f = B;
    }
  }, e.unstable_scheduleCallback = function(z, D, B) {
    var L = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? L + B : L) : B = L, z) {
      case 1:
        var q = -1;
        break;
      case 2:
        q = 250;
        break;
      case 5:
        q = 1073741823;
        break;
      case 4:
        q = 1e4;
        break;
      default:
        q = 5e3;
    }
    return q = B + q, z = { id: c++, callback: D, priorityLevel: z, startTime: B, expirationTime: q, sortIndex: -1 }, B > L ? (z.sortIndex = B, t(u, z), r(l) === null && z === r(u) && (y ? (m($), $ = -1) : y = !0, oe(w, B - L))) : (z.sortIndex = q, t(l, z), g || p || (g = !0, Y(k))), z;
  }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function(z) {
    var D = f;
    return function() {
      var B = f;
      f = D;
      try {
        return z.apply(this, arguments);
      } finally {
        f = B;
      }
    };
  };
})(F1);
I1.exports = F1;
var f_ = I1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D1 = b, Dt = f_;
function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var j1 = /* @__PURE__ */ new Set(), Ha = {};
function ko(e, t) {
  xi(e, t), xi(e + "Capture", t);
}
function xi(e, t) {
  for (Ha[e] = t, e = 0; e < t.length; e++)
    j1.add(t[e]);
}
var Zr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ef = Object.prototype.hasOwnProperty, p_ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Tv = {}, Ev = {};
function h_(e) {
  return Ef.call(Ev, e) ? !0 : Ef.call(Tv, e) ? !1 : p_.test(e) ? Ev[e] = !0 : (Tv[e] = !0, !1);
}
function m_(e, t, r, n) {
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
function v_(e, t, r, n) {
  if (t === null || typeof t > "u" || m_(e, t, r, n))
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
function bt(e, t, r, n, o, i, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a;
}
var nt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  nt[e] = new bt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  nt[t] = new bt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  nt[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  nt[e] = new bt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  nt[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  nt[e] = new bt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  nt[e] = new bt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  nt[e] = new bt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  nt[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sh = /[\-:]([a-z])/g;
function lh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    sh,
    lh
  );
  nt[t] = new bt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(sh, lh);
  nt[t] = new bt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(sh, lh);
  nt[t] = new bt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  nt[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
nt.xlinkHref = new bt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  nt[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uh(e, t, r, n) {
  var o = nt.hasOwnProperty(t) ? nt[t] : null;
  (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (v_(t, r, o, n) && (r = null), n || o === null ? h_(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var an = D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, tl = Symbol.for("react.element"), Do = Symbol.for("react.portal"), jo = Symbol.for("react.fragment"), ch = Symbol.for("react.strict_mode"), $f = Symbol.for("react.profiler"), L1 = Symbol.for("react.provider"), B1 = Symbol.for("react.context"), dh = Symbol.for("react.forward_ref"), Af = Symbol.for("react.suspense"), Rf = Symbol.for("react.suspense_list"), fh = Symbol.for("react.memo"), hn = Symbol.for("react.lazy"), N1 = Symbol.for("react.offscreen"), $v = Symbol.iterator;
function qi(e) {
  return e === null || typeof e != "object" ? null : (e = $v && e[$v] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Re = Object.assign, fd;
function da(e) {
  if (fd === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      fd = t && t[1] || "";
    }
  return `
` + fd + e;
}
var pd = !1;
function hd(e, t) {
  if (!e || pd)
    return "";
  pd = !0;
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
    pd = !1, Error.prepareStackTrace = r;
  }
  return (e = e ? e.displayName || e.name : "") ? da(e) : "";
}
function g_(e) {
  switch (e.tag) {
    case 5:
      return da(e.type);
    case 16:
      return da("Lazy");
    case 13:
      return da("Suspense");
    case 19:
      return da("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = hd(e.type, !1), e;
    case 11:
      return e = hd(e.type.render, !1), e;
    case 1:
      return e = hd(e.type, !0), e;
    default:
      return "";
  }
}
function Mf(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case jo:
      return "Fragment";
    case Do:
      return "Portal";
    case $f:
      return "Profiler";
    case ch:
      return "StrictMode";
    case Af:
      return "Suspense";
    case Rf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case B1:
        return (e.displayName || "Context") + ".Consumer";
      case L1:
        return (e._context.displayName || "Context") + ".Provider";
      case dh:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case fh:
        return t = e.displayName || null, t !== null ? t : Mf(e.type) || "Memo";
      case hn:
        t = e._payload, e = e._init;
        try {
          return Mf(e(t));
        } catch {
        }
    }
  return null;
}
function y_(e) {
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
      return Mf(t);
    case 8:
      return t === ch ? "StrictMode" : "Mode";
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
function On(e) {
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
function V1(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function b_(e) {
  var t = V1(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
function rl(e) {
  e._valueTracker || (e._valueTracker = b_(e));
}
function W1(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var r = t.getValue(), n = "";
  return e && (n = V1(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1;
}
function pu(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Of(e, t) {
  var r = t.checked;
  return Re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function Av(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue, n = t.checked != null ? t.checked : t.defaultChecked;
  r = On(t.value != null ? t.value : r), e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function U1(e, t) {
  t = t.checked, t != null && uh(e, "checked", t, !1);
}
function zf(e, t) {
  U1(e, t);
  var r = On(t.value), n = t.type;
  if (r != null)
    n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? If(e, t.type, r) : t.hasOwnProperty("defaultValue") && If(e, t.type, On(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Rv(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
  }
  r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
}
function If(e, t, r) {
  (t !== "number" || pu(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var fa = Array.isArray;
function ai(e, t, r, n) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < r.length; o++)
      t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + On(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        e[o].selected = !0, n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ff(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(O(91));
  return Re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Mv(e, t) {
  var r = t.value;
  if (r == null) {
    if (r = t.children, t = t.defaultValue, r != null) {
      if (t != null)
        throw Error(O(92));
      if (fa(r)) {
        if (1 < r.length)
          throw Error(O(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), r = t;
  }
  e._wrapperState = { initialValue: On(r) };
}
function H1(e, t) {
  var r = On(t.value), n = On(t.defaultValue);
  r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function Ov(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function G1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Df(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? G1(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var nl, K1 = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, r, n, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (nl = nl || document.createElement("div"), nl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = nl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Ga(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wa = {
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
}, S_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(wa).forEach(function(e) {
  S_.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), wa[t] = wa[e];
  });
});
function Y1(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || wa.hasOwnProperty(e) && wa[e] ? ("" + t).trim() : t + "px";
}
function q1(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0, o = Y1(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o;
    }
}
var x_ = Re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function jf(e, t) {
  if (t) {
    if (x_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Lf(e, t) {
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
var Bf = null;
function ph(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Nf = null, si = null, li = null;
function zv(e) {
  if (e = $s(e)) {
    if (typeof Nf != "function")
      throw Error(O(280));
    var t = e.stateNode;
    t && (t = fc(t), Nf(e.stateNode, e.type, t));
  }
}
function X1(e) {
  si ? li ? li.push(e) : li = [e] : si = e;
}
function Q1() {
  if (si) {
    var e = si, t = li;
    if (li = si = null, zv(e), t)
      for (e = 0; e < t.length; e++)
        zv(t[e]);
  }
}
function Z1(e, t) {
  return e(t);
}
function J1() {
}
var md = !1;
function eb(e, t, r) {
  if (md)
    return e(t, r);
  md = !0;
  try {
    return Z1(e, t, r);
  } finally {
    md = !1, (si !== null || li !== null) && (J1(), Q1());
  }
}
function Ka(e, t) {
  var r = e.stateNode;
  if (r === null)
    return null;
  var n = fc(r);
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
var Vf = !1;
if (Zr)
  try {
    var Xi = {};
    Object.defineProperty(Xi, "passive", { get: function() {
      Vf = !0;
    } }), window.addEventListener("test", Xi, Xi), window.removeEventListener("test", Xi, Xi);
  } catch {
    Vf = !1;
  }
function w_(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var ka = !1, hu = null, mu = !1, Wf = null, k_ = { onError: function(e) {
  ka = !0, hu = e;
} };
function C_(e, t, r, n, o, i, a, s, l) {
  ka = !1, hu = null, w_.apply(k_, arguments);
}
function __(e, t, r, n, o, i, a, s, l) {
  if (C_.apply(this, arguments), ka) {
    if (ka) {
      var u = hu;
      ka = !1, hu = null;
    } else
      throw Error(O(198));
    mu || (mu = !0, Wf = u);
  }
}
function Co(e) {
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
function tb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Iv(e) {
  if (Co(e) !== e)
    throw Error(O(188));
}
function P_(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Co(e), t === null)
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
          return Iv(o), e;
        if (i === n)
          return Iv(o), t;
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
function rb(e) {
  return e = P_(e), e !== null ? nb(e) : null;
}
function nb(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = nb(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var ob = Dt.unstable_scheduleCallback, Fv = Dt.unstable_cancelCallback, T_ = Dt.unstable_shouldYield, E_ = Dt.unstable_requestPaint, De = Dt.unstable_now, $_ = Dt.unstable_getCurrentPriorityLevel, hh = Dt.unstable_ImmediatePriority, ib = Dt.unstable_UserBlockingPriority, vu = Dt.unstable_NormalPriority, A_ = Dt.unstable_LowPriority, ab = Dt.unstable_IdlePriority, lc = null, Tr = null;
function R_(e) {
  if (Tr && typeof Tr.onCommitFiberRoot == "function")
    try {
      Tr.onCommitFiberRoot(lc, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var pr = Math.clz32 ? Math.clz32 : z_, M_ = Math.log, O_ = Math.LN2;
function z_(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (M_(e) / O_ | 0) | 0;
}
var ol = 64, il = 4194304;
function pa(e) {
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
function gu(e, t) {
  var r = e.pendingLanes;
  if (r === 0)
    return 0;
  var n = 0, o = e.suspendedLanes, i = e.pingedLanes, a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? n = pa(s) : (i &= a, i !== 0 && (n = pa(i)));
  } else
    a = r & ~o, a !== 0 ? n = pa(a) : i !== 0 && (n = pa(i));
  if (n === 0)
    return 0;
  if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= n; 0 < t; )
      r = 31 - pr(t), o = 1 << r, n |= e[r], t &= ~o;
  return n;
}
function I_(e, t) {
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
function F_(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var a = 31 - pr(i), s = 1 << a, l = o[a];
    l === -1 ? (!(s & r) || s & n) && (o[a] = I_(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function Uf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function sb() {
  var e = ol;
  return ol <<= 1, !(ol & 4194240) && (ol = 64), e;
}
function vd(e) {
  for (var t = [], r = 0; 31 > r; r++)
    t.push(e);
  return t;
}
function Ts(e, t, r) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pr(t), e[t] = r;
}
function D_(e, t) {
  var r = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - pr(r), i = 1 << o;
    t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i;
  }
}
function mh(e, t) {
  var r = e.entangledLanes |= t;
  for (e = e.entanglements; r; ) {
    var n = 31 - pr(r), o = 1 << n;
    o & t | e[n] & t && (e[n] |= t), r &= ~o;
  }
}
var de = 0;
function lb(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ub, vh, cb, db, fb, Hf = !1, al = [], kn = null, Cn = null, _n = null, Ya = /* @__PURE__ */ new Map(), qa = /* @__PURE__ */ new Map(), gn = [], j_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Dv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kn = null;
      break;
    case "dragenter":
    case "dragleave":
      Cn = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      Ya.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qa.delete(t.pointerId);
  }
}
function Qi(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [o] }, t !== null && (t = $s(t), t !== null && vh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function L_(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return kn = Qi(kn, e, t, r, n, o), !0;
    case "dragenter":
      return Cn = Qi(Cn, e, t, r, n, o), !0;
    case "mouseover":
      return _n = Qi(_n, e, t, r, n, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ya.set(i, Qi(Ya.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, qa.set(i, Qi(qa.get(i) || null, e, t, r, n, o)), !0;
  }
  return !1;
}
function pb(e) {
  var t = no(e.target);
  if (t !== null) {
    var r = Co(t);
    if (r !== null) {
      if (t = r.tag, t === 13) {
        if (t = tb(r), t !== null) {
          e.blockedOn = t, fb(e.priority, function() {
            cb(r);
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
function Ll(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Gf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      Bf = n, r.target.dispatchEvent(n), Bf = null;
    } else
      return t = $s(r), t !== null && vh(t), e.blockedOn = r, !1;
    t.shift();
  }
  return !0;
}
function jv(e, t, r) {
  Ll(e) && r.delete(t);
}
function B_() {
  Hf = !1, kn !== null && Ll(kn) && (kn = null), Cn !== null && Ll(Cn) && (Cn = null), _n !== null && Ll(_n) && (_n = null), Ya.forEach(jv), qa.forEach(jv);
}
function Zi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Hf || (Hf = !0, Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, B_)));
}
function Xa(e) {
  function t(o) {
    return Zi(o, e);
  }
  if (0 < al.length) {
    Zi(al[0], e);
    for (var r = 1; r < al.length; r++) {
      var n = al[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (kn !== null && Zi(kn, e), Cn !== null && Zi(Cn, e), _n !== null && Zi(_n, e), Ya.forEach(t), qa.forEach(t), r = 0; r < gn.length; r++)
    n = gn[r], n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < gn.length && (r = gn[0], r.blockedOn === null); )
    pb(r), r.blockedOn === null && gn.shift();
}
var ui = an.ReactCurrentBatchConfig, yu = !0;
function N_(e, t, r, n) {
  var o = de, i = ui.transition;
  ui.transition = null;
  try {
    de = 1, gh(e, t, r, n);
  } finally {
    de = o, ui.transition = i;
  }
}
function V_(e, t, r, n) {
  var o = de, i = ui.transition;
  ui.transition = null;
  try {
    de = 4, gh(e, t, r, n);
  } finally {
    de = o, ui.transition = i;
  }
}
function gh(e, t, r, n) {
  if (yu) {
    var o = Gf(e, t, r, n);
    if (o === null)
      Pd(e, t, n, bu, r), Dv(e, n);
    else if (L_(o, e, t, r, n))
      n.stopPropagation();
    else if (Dv(e, n), t & 4 && -1 < j_.indexOf(e)) {
      for (; o !== null; ) {
        var i = $s(o);
        if (i !== null && ub(i), i = Gf(e, t, r, n), i === null && Pd(e, t, n, bu, r), i === o)
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else
      Pd(e, t, n, null, r);
  }
}
var bu = null;
function Gf(e, t, r, n) {
  if (bu = null, e = ph(n), e = no(e), e !== null)
    if (t = Co(e), t === null)
      e = null;
    else if (r = t.tag, r === 13) {
      if (e = tb(t), e !== null)
        return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return bu = e, null;
}
function hb(e) {
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
      switch ($_()) {
        case hh:
          return 1;
        case ib:
          return 4;
        case vu:
        case A_:
          return 16;
        case ab:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xn = null, yh = null, Bl = null;
function mb() {
  if (Bl)
    return Bl;
  var e, t = yh, r = t.length, n, o = "value" in xn ? xn.value : xn.textContent, i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++)
    ;
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++)
    ;
  return Bl = o.slice(e, 1 < n ? 1 - n : void 0);
}
function Nl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function sl() {
  return !0;
}
function Lv() {
  return !1;
}
function Nt(e) {
  function t(r, n, o, i, a) {
    this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (r = e[s], this[s] = r ? r(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? sl : Lv, this.isPropagationStopped = Lv, this;
  }
  return Re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = sl);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = sl);
  }, persist: function() {
  }, isPersistent: sl }), t;
}
var ji = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, bh = Nt(ji), Es = Re({}, ji, { view: 0, detail: 0 }), W_ = Nt(Es), gd, yd, Ji, uc = Re({}, Es, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ji && (Ji && e.type === "mousemove" ? (gd = e.screenX - Ji.screenX, yd = e.screenY - Ji.screenY) : yd = gd = 0, Ji = e), gd);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : yd;
} }), Bv = Nt(uc), U_ = Re({}, uc, { dataTransfer: 0 }), H_ = Nt(U_), G_ = Re({}, Es, { relatedTarget: 0 }), bd = Nt(G_), K_ = Re({}, ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Y_ = Nt(K_), q_ = Re({}, ji, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), X_ = Nt(q_), Q_ = Re({}, ji, { data: 0 }), Nv = Nt(Q_), Z_ = {
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
}, J_ = {
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
}, eP = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = eP[e]) ? !!t[e] : !1;
}
function Sh() {
  return tP;
}
var rP = Re({}, Es, { key: function(e) {
  if (e.key) {
    var t = Z_[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Nl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J_[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sh, charCode: function(e) {
  return e.type === "keypress" ? Nl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), nP = Nt(rP), oP = Re({}, uc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vv = Nt(oP), iP = Re({}, Es, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sh }), aP = Nt(iP), sP = Re({}, ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lP = Nt(sP), uP = Re({}, uc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), cP = Nt(uP), dP = [9, 13, 27, 32], xh = Zr && "CompositionEvent" in window, Ca = null;
Zr && "documentMode" in document && (Ca = document.documentMode);
var fP = Zr && "TextEvent" in window && !Ca, vb = Zr && (!xh || Ca && 8 < Ca && 11 >= Ca), Wv = " ", Uv = !1;
function gb(e, t) {
  switch (e) {
    case "keyup":
      return dP.indexOf(t.keyCode) !== -1;
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
function yb(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Lo = !1;
function pP(e, t) {
  switch (e) {
    case "compositionend":
      return yb(t);
    case "keypress":
      return t.which !== 32 ? null : (Uv = !0, Wv);
    case "textInput":
      return e = t.data, e === Wv && Uv ? null : e;
    default:
      return null;
  }
}
function hP(e, t) {
  if (Lo)
    return e === "compositionend" || !xh && gb(e, t) ? (e = mb(), Bl = yh = xn = null, Lo = !1, e) : null;
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
      return vb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mP = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mP[e.type] : t === "textarea";
}
function bb(e, t, r, n) {
  X1(n), t = Su(t, "onChange"), 0 < t.length && (r = new bh("onChange", "change", null, r, n), e.push({ event: r, listeners: t }));
}
var _a = null, Qa = null;
function vP(e) {
  Ab(e, 0);
}
function cc(e) {
  var t = Vo(e);
  if (W1(t))
    return e;
}
function gP(e, t) {
  if (e === "change")
    return t;
}
var Sb = !1;
if (Zr) {
  var Sd;
  if (Zr) {
    var xd = "oninput" in document;
    if (!xd) {
      var Gv = document.createElement("div");
      Gv.setAttribute("oninput", "return;"), xd = typeof Gv.oninput == "function";
    }
    Sd = xd;
  } else
    Sd = !1;
  Sb = Sd && (!document.documentMode || 9 < document.documentMode);
}
function Kv() {
  _a && (_a.detachEvent("onpropertychange", xb), Qa = _a = null);
}
function xb(e) {
  if (e.propertyName === "value" && cc(Qa)) {
    var t = [];
    bb(t, Qa, e, ph(e)), eb(vP, t);
  }
}
function yP(e, t, r) {
  e === "focusin" ? (Kv(), _a = t, Qa = r, _a.attachEvent("onpropertychange", xb)) : e === "focusout" && Kv();
}
function bP(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return cc(Qa);
}
function SP(e, t) {
  if (e === "click")
    return cc(t);
}
function xP(e, t) {
  if (e === "input" || e === "change")
    return cc(t);
}
function wP(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var mr = typeof Object.is == "function" ? Object.is : wP;
function Za(e, t) {
  if (mr(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Ef.call(t, o) || !mr(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Yv(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function qv(e, t) {
  var r = Yv(e);
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
    r = Yv(r);
  }
}
function wb(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function kb() {
  for (var e = window, t = pu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r)
      e = t.contentWindow;
    else
      break;
    t = pu(e.document);
  }
  return t;
}
function wh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function kP(e) {
  var t = kb(), r = e.focusedElem, n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && wb(r.ownerDocument.documentElement, r)) {
    if (n !== null && wh(r)) {
      if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r)
        r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
      else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = r.textContent.length, i = Math.min(n.start, o);
        n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = qv(r, i);
        var a = qv(
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
var CP = Zr && "documentMode" in document && 11 >= document.documentMode, Bo = null, Kf = null, Pa = null, Yf = !1;
function Xv(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Yf || Bo == null || Bo !== pu(n) || (n = Bo, "selectionStart" in n && wh(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Pa && Za(Pa, n) || (Pa = n, n = Su(Kf, "onSelect"), 0 < n.length && (t = new bh("onSelect", "select", null, t, r), e.push({ event: t, listeners: n }), t.target = Bo)));
}
function ll(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
}
var No = { animationend: ll("Animation", "AnimationEnd"), animationiteration: ll("Animation", "AnimationIteration"), animationstart: ll("Animation", "AnimationStart"), transitionend: ll("Transition", "TransitionEnd") }, wd = {}, Cb = {};
Zr && (Cb = document.createElement("div").style, "AnimationEvent" in window || (delete No.animationend.animation, delete No.animationiteration.animation, delete No.animationstart.animation), "TransitionEvent" in window || delete No.transitionend.transition);
function dc(e) {
  if (wd[e])
    return wd[e];
  if (!No[e])
    return e;
  var t = No[e], r;
  for (r in t)
    if (t.hasOwnProperty(r) && r in Cb)
      return wd[e] = t[r];
  return e;
}
var _b = dc("animationend"), Pb = dc("animationiteration"), Tb = dc("animationstart"), Eb = dc("transitionend"), $b = /* @__PURE__ */ new Map(), Qv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dn(e, t) {
  $b.set(e, t), ko(t, [e]);
}
for (var kd = 0; kd < Qv.length; kd++) {
  var Cd = Qv[kd], _P = Cd.toLowerCase(), PP = Cd[0].toUpperCase() + Cd.slice(1);
  Dn(_P, "on" + PP);
}
Dn(_b, "onAnimationEnd");
Dn(Pb, "onAnimationIteration");
Dn(Tb, "onAnimationStart");
Dn("dblclick", "onDoubleClick");
Dn("focusin", "onFocus");
Dn("focusout", "onBlur");
Dn(Eb, "onTransitionEnd");
xi("onMouseEnter", ["mouseout", "mouseover"]);
xi("onMouseLeave", ["mouseout", "mouseover"]);
xi("onPointerEnter", ["pointerout", "pointerover"]);
xi("onPointerLeave", ["pointerout", "pointerover"]);
ko("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ko("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ko("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ko("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ko("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ko("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ha = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), TP = new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));
function Zv(e, t, r) {
  var n = e.type || "unknown-event";
  e.currentTarget = r, __(n, t, void 0, e), e.currentTarget = null;
}
function Ab(e, t) {
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
          Zv(o, s, u), i = l;
        }
      else
        for (a = 0; a < n.length; a++) {
          if (s = n[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
            break e;
          Zv(o, s, u), i = l;
        }
    }
  }
  if (mu)
    throw e = Wf, mu = !1, Wf = null, e;
}
function be(e, t) {
  var r = t[Jf];
  r === void 0 && (r = t[Jf] = /* @__PURE__ */ new Set());
  var n = e + "__bubble";
  r.has(n) || (Rb(t, e, 2, !1), r.add(n));
}
function _d(e, t, r) {
  var n = 0;
  t && (n |= 4), Rb(r, e, n, t);
}
var ul = "_reactListening" + Math.random().toString(36).slice(2);
function Ja(e) {
  if (!e[ul]) {
    e[ul] = !0, j1.forEach(function(r) {
      r !== "selectionchange" && (TP.has(r) || _d(r, !1, e), _d(r, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ul] || (t[ul] = !0, _d("selectionchange", !1, t));
  }
}
function Rb(e, t, r, n) {
  switch (hb(t)) {
    case 1:
      var o = N_;
      break;
    case 4:
      o = V_;
      break;
    default:
      o = gh;
  }
  r = o.bind(null, t, r, e), o = void 0, !Vf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: o }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, { passive: o }) : e.addEventListener(t, r, !1);
}
function Pd(e, t, r, n, o) {
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
            if (a = no(s), a === null)
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
  eb(function() {
    var u = i, c = ph(r), d = [];
    e: {
      var f = $b.get(e);
      if (f !== void 0) {
        var p = bh, g = e;
        switch (e) {
          case "keypress":
            if (Nl(r) === 0)
              break e;
          case "keydown":
          case "keyup":
            p = nP;
            break;
          case "focusin":
            g = "focus", p = bd;
            break;
          case "focusout":
            g = "blur", p = bd;
            break;
          case "beforeblur":
          case "afterblur":
            p = bd;
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
            p = Bv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = H_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = aP;
            break;
          case _b:
          case Pb:
          case Tb:
            p = Y_;
            break;
          case Eb:
            p = lP;
            break;
          case "scroll":
            p = W_;
            break;
          case "wheel":
            p = cP;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = X_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Vv;
        }
        var y = (t & 4) !== 0, x = !y && e === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var w = v.stateNode;
          if (v.tag === 5 && w !== null && (v = w, m !== null && (w = Ka(h, m), w != null && y.push(es(h, w, v)))), x)
            break;
          h = h.return;
        }
        0 < y.length && (f = new p(f, g, null, r, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && r !== Bf && (g = r.relatedTarget || r.fromElement) && (no(g) || g[Jr]))
          break e;
        if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (g = r.relatedTarget || r.toElement, p = u, g = g ? no(g) : null, g !== null && (x = Co(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null, g = u), p !== g)) {
          if (y = Bv, w = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = Vv, w = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = p == null ? f : Vo(p), v = g == null ? f : Vo(g), f = new y(w, h + "leave", p, r, c), f.target = x, f.relatedTarget = v, w = null, no(c) === u && (y = new y(m, h + "enter", g, r, c), y.target = v, y.relatedTarget = x, w = y), x = w, p && g)
            t: {
              for (y = p, m = g, h = 0, v = y; v; v = Ao(v))
                h++;
              for (v = 0, w = m; w; w = Ao(w))
                v++;
              for (; 0 < h - v; )
                y = Ao(y), h--;
              for (; 0 < v - h; )
                m = Ao(m), v--;
              for (; h--; ) {
                if (y === m || m !== null && y === m.alternate)
                  break t;
                y = Ao(y), m = Ao(m);
              }
              y = null;
            }
          else
            y = null;
          p !== null && Jv(d, f, p, y, !1), g !== null && x !== null && Jv(d, x, g, y, !0);
        }
      }
      e: {
        if (f = u ? Vo(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file")
          var k = gP;
        else if (Hv(f))
          if (Sb)
            k = xP;
          else {
            k = bP;
            var T = yP;
          }
        else
          (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = SP);
        if (k && (k = k(e, u))) {
          bb(d, k, r, c);
          break e;
        }
        T && T(e, f, u), e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && If(f, "number", f.value);
      }
      switch (T = u ? Vo(u) : window, e) {
        case "focusin":
          (Hv(T) || T.contentEditable === "true") && (Bo = T, Kf = u, Pa = null);
          break;
        case "focusout":
          Pa = Kf = Bo = null;
          break;
        case "mousedown":
          Yf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Yf = !1, Xv(d, r, c);
          break;
        case "selectionchange":
          if (CP)
            break;
        case "keydown":
        case "keyup":
          Xv(d, r, c);
      }
      var C;
      if (xh)
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
        Lo ? gb(e, r) && ($ = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && ($ = "onCompositionStart");
      $ && (vb && r.locale !== "ko" && (Lo || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Lo && (C = mb()) : (xn = c, yh = "value" in xn ? xn.value : xn.textContent, Lo = !0)), T = Su(u, $), 0 < T.length && ($ = new Nv($, e, null, r, c), d.push({ event: $, listeners: T }), C ? $.data = C : (C = yb(r), C !== null && ($.data = C)))), (C = fP ? pP(e, r) : hP(e, r)) && (u = Su(u, "onBeforeInput"), 0 < u.length && (c = new Nv("onBeforeInput", "beforeinput", null, r, c), d.push({ event: c, listeners: u }), c.data = C));
    }
    Ab(d, t);
  });
}
function es(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Su(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Ka(e, r), i != null && n.unshift(es(e, i, o)), i = Ka(e, t), i != null && n.push(es(e, i, o))), e = e.return;
  }
  return n;
}
function Ao(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jv(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r, l = s.alternate, u = s.stateNode;
    if (l !== null && l === n)
      break;
    s.tag === 5 && u !== null && (s = u, o ? (l = Ka(r, i), l != null && a.unshift(es(r, l, s))) : o || (l = Ka(r, i), l != null && a.push(es(r, l, s)))), r = r.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var EP = /\r\n?/g, $P = /\u0000|\uFFFD/g;
function eg(e) {
  return (typeof e == "string" ? e : "" + e).replace(EP, `
`).replace($P, "");
}
function cl(e, t, r) {
  if (t = eg(t), eg(e) !== t && r)
    throw Error(O(425));
}
function xu() {
}
var qf = null, Xf = null;
function Qf(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Zf = typeof setTimeout == "function" ? setTimeout : void 0, AP = typeof clearTimeout == "function" ? clearTimeout : void 0, tg = typeof Promise == "function" ? Promise : void 0, RP = typeof queueMicrotask == "function" ? queueMicrotask : typeof tg < "u" ? function(e) {
  return tg.resolve(null).then(e).catch(MP);
} : Zf;
function MP(e) {
  setTimeout(function() {
    throw e;
  });
}
function Td(e, t) {
  var r = t, n = 0;
  do {
    var o = r.nextSibling;
    if (e.removeChild(r), o && o.nodeType === 8)
      if (r = o.data, r === "/$") {
        if (n === 0) {
          e.removeChild(o), Xa(t);
          return;
        }
        n--;
      } else
        r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = o;
  } while (r);
  Xa(t);
}
function Pn(e) {
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
function rg(e) {
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
var Li = Math.random().toString(36).slice(2), _r = "__reactFiber$" + Li, ts = "__reactProps$" + Li, Jr = "__reactContainer$" + Li, Jf = "__reactEvents$" + Li, OP = "__reactListeners$" + Li, zP = "__reactHandles$" + Li;
function no(e) {
  var t = e[_r];
  if (t)
    return t;
  for (var r = e.parentNode; r; ) {
    if (t = r[Jr] || r[_r]) {
      if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
        for (e = rg(e); e !== null; ) {
          if (r = e[_r])
            return r;
          e = rg(e);
        }
      return t;
    }
    e = r, r = e.parentNode;
  }
  return null;
}
function $s(e) {
  return e = e[_r] || e[Jr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Vo(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(O(33));
}
function fc(e) {
  return e[ts] || null;
}
var ep = [], Wo = -1;
function jn(e) {
  return { current: e };
}
function xe(e) {
  0 > Wo || (e.current = ep[Wo], ep[Wo] = null, Wo--);
}
function me(e, t) {
  Wo++, ep[Wo] = e.current, e.current = t;
}
var zn = {}, dt = jn(zn), kt = jn(!1), vo = zn;
function wi(e, t) {
  var r = e.type.contextTypes;
  if (!r)
    return zn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in r)
    o[i] = t[i];
  return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ct(e) {
  return e = e.childContextTypes, e != null;
}
function wu() {
  xe(kt), xe(dt);
}
function ng(e, t, r) {
  if (dt.current !== zn)
    throw Error(O(168));
  me(dt, t), me(kt, r);
}
function Mb(e, t, r) {
  var n = e.stateNode;
  if (t = t.childContextTypes, typeof n.getChildContext != "function")
    return r;
  n = n.getChildContext();
  for (var o in n)
    if (!(o in t))
      throw Error(O(108, y_(e) || "Unknown", o));
  return Re({}, r, n);
}
function ku(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zn, vo = dt.current, me(dt, e), me(kt, kt.current), !0;
}
function og(e, t, r) {
  var n = e.stateNode;
  if (!n)
    throw Error(O(169));
  r ? (e = Mb(e, t, vo), n.__reactInternalMemoizedMergedChildContext = e, xe(kt), xe(dt), me(dt, e)) : xe(kt), me(kt, r);
}
var Br = null, pc = !1, Ed = !1;
function Ob(e) {
  Br === null ? Br = [e] : Br.push(e);
}
function IP(e) {
  pc = !0, Ob(e);
}
function Ln() {
  if (!Ed && Br !== null) {
    Ed = !0;
    var e = 0, t = de;
    try {
      var r = Br;
      for (de = 1; e < r.length; e++) {
        var n = r[e];
        do
          n = n(!0);
        while (n !== null);
      }
      Br = null, pc = !1;
    } catch (o) {
      throw Br !== null && (Br = Br.slice(e + 1)), ob(hh, Ln), o;
    } finally {
      de = t, Ed = !1;
    }
  }
  return null;
}
var Uo = [], Ho = 0, Cu = null, _u = 0, qt = [], Xt = 0, go = null, Wr = 1, Ur = "";
function qn(e, t) {
  Uo[Ho++] = _u, Uo[Ho++] = Cu, Cu = e, _u = t;
}
function zb(e, t, r) {
  qt[Xt++] = Wr, qt[Xt++] = Ur, qt[Xt++] = go, go = e;
  var n = Wr;
  e = Ur;
  var o = 32 - pr(n) - 1;
  n &= ~(1 << o), r += 1;
  var i = 32 - pr(t) + o;
  if (30 < i) {
    var a = o - o % 5;
    i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Wr = 1 << 32 - pr(t) + o | r << o | n, Ur = i + e;
  } else
    Wr = 1 << i | r << o | n, Ur = e;
}
function kh(e) {
  e.return !== null && (qn(e, 1), zb(e, 1, 0));
}
function Ch(e) {
  for (; e === Cu; )
    Cu = Uo[--Ho], Uo[Ho] = null, _u = Uo[--Ho], Uo[Ho] = null;
  for (; e === go; )
    go = qt[--Xt], qt[Xt] = null, Ur = qt[--Xt], qt[Xt] = null, Wr = qt[--Xt], qt[Xt] = null;
}
var zt = null, Ot = null, _e = !1, dr = null;
function Ib(e, t) {
  var r = Zt(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
}
function ig(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, zt = e, Ot = Pn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, zt = e, Ot = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (r = go !== null ? { id: Wr, overflow: Ur } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Zt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, zt = e, Ot = null, !0) : !1;
    default:
      return !1;
  }
}
function tp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rp(e) {
  if (_e) {
    var t = Ot;
    if (t) {
      var r = t;
      if (!ig(e, t)) {
        if (tp(e))
          throw Error(O(418));
        t = Pn(r.nextSibling);
        var n = zt;
        t && ig(e, t) ? Ib(n, r) : (e.flags = e.flags & -4097 | 2, _e = !1, zt = e);
      }
    } else {
      if (tp(e))
        throw Error(O(418));
      e.flags = e.flags & -4097 | 2, _e = !1, zt = e;
    }
  }
}
function ag(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  zt = e;
}
function dl(e) {
  if (e !== zt)
    return !1;
  if (!_e)
    return ag(e), _e = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qf(e.type, e.memoizedProps)), t && (t = Ot)) {
    if (tp(e))
      throw Fb(), Error(O(418));
    for (; t; )
      Ib(e, t), t = Pn(t.nextSibling);
  }
  if (ag(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ot = Pn(e.nextSibling);
              break e;
            }
            t--;
          } else
            r !== "$" && r !== "$!" && r !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ot = null;
    }
  } else
    Ot = zt ? Pn(e.stateNode.nextSibling) : null;
  return !0;
}
function Fb() {
  for (var e = Ot; e; )
    e = Pn(e.nextSibling);
}
function ki() {
  Ot = zt = null, _e = !1;
}
function _h(e) {
  dr === null ? dr = [e] : dr.push(e);
}
var FP = an.ReactCurrentBatchConfig;
function ur(e, t) {
  if (e && e.defaultProps) {
    t = Re({}, t), e = e.defaultProps;
    for (var r in e)
      t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Pu = jn(null), Tu = null, Go = null, Ph = null;
function Th() {
  Ph = Go = Tu = null;
}
function Eh(e) {
  var t = Pu.current;
  xe(Pu), e._currentValue = t;
}
function np(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)
      break;
    e = e.return;
  }
}
function ci(e, t) {
  Tu = e, Ph = Go = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (wt = !0), e.firstContext = null);
}
function nr(e) {
  var t = e._currentValue;
  if (Ph !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Go === null) {
      if (Tu === null)
        throw Error(O(308));
      Go = e, Tu.dependencies = { lanes: 0, firstContext: e };
    } else
      Go = Go.next = e;
  return t;
}
var oo = null;
function $h(e) {
  oo === null ? oo = [e] : oo.push(e);
}
function Db(e, t, r, n) {
  var o = t.interleaved;
  return o === null ? (r.next = r, $h(t)) : (r.next = o.next, o.next = r), t.interleaved = r, en(e, n);
}
function en(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
  return r.tag === 3 ? r.stateNode : null;
}
var mn = !1;
function Ah(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function jb(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Yr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Tn(e, t, r) {
  var n = e.updateQueue;
  if (n === null)
    return null;
  if (n = n.shared, te & 2) {
    var o = n.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, en(e, r);
  }
  return o = n.interleaved, o === null ? (t.next = t, $h(n)) : (t.next = o.next, o.next = t), n.interleaved = t, en(e, r);
}
function Vl(e, t, r) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, mh(e, r);
  }
}
function sg(e, t) {
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
function Eu(e, t, r, n) {
  var o = e.updateQueue;
  mn = !1;
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
          var g = e, y = s;
          switch (f = t, p = r, y.tag) {
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
              d = Re({}, d, f);
              break e;
            case 2:
              mn = !0;
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
    bo |= a, e.lanes = a, e.memoizedState = d;
  }
}
function lg(e, t, r) {
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
var Lb = new D1.Component().refs;
function op(e, t, r, n) {
  t = e.memoizedState, r = r(n, t), r = r == null ? t : Re({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
}
var hc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Co(e) === e : !1;
}, enqueueSetState: function(e, t, r) {
  e = e._reactInternals;
  var n = vt(), o = $n(e), i = Yr(n, o);
  i.payload = t, r != null && (i.callback = r), t = Tn(e, i, o), t !== null && (hr(t, e, o, n), Vl(t, e, o));
}, enqueueReplaceState: function(e, t, r) {
  e = e._reactInternals;
  var n = vt(), o = $n(e), i = Yr(n, o);
  i.tag = 1, i.payload = t, r != null && (i.callback = r), t = Tn(e, i, o), t !== null && (hr(t, e, o, n), Vl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var r = vt(), n = $n(e), o = Yr(r, n);
  o.tag = 2, t != null && (o.callback = t), t = Tn(e, o, n), t !== null && (hr(t, e, n, r), Vl(t, e, n));
} };
function ug(e, t, r, n, o, i, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Za(r, n) || !Za(o, i) : !0;
}
function Bb(e, t, r) {
  var n = !1, o = zn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = nr(i) : (o = Ct(t) ? vo : dt.current, n = t.contextTypes, i = (n = n != null) ? wi(e, o) : zn), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hc, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function cg(e, t, r, n) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && hc.enqueueReplaceState(t, t.state, null);
}
function ip(e, t, r, n) {
  var o = e.stateNode;
  o.props = r, o.state = e.memoizedState, o.refs = Lb, Ah(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = nr(i) : (i = Ct(t) ? vo : dt.current, o.context = wi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (op(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hc.enqueueReplaceState(o, o.state, null), Eu(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ea(e, t, r) {
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
        s === Lb && (s = o.refs = {}), a === null ? delete s[i] : s[i] = a;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(O(284));
    if (!r._owner)
      throw Error(O(290, e));
  }
  return e;
}
function fl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function dg(e) {
  var t = e._init;
  return t(e._payload);
}
function Nb(e) {
  function t(m, h) {
    if (e) {
      var v = m.deletions;
      v === null ? (m.deletions = [h], m.flags |= 16) : v.push(h);
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
    return m = An(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, v, w) {
    return h === null || h.tag !== 6 ? (h = Id(v, m.mode, w), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function l(m, h, v, w) {
    var k = v.type;
    return k === jo ? c(m, h, v.props.children, w, v.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === hn && dg(k) === h.type) ? (w = o(h, v.props), w.ref = ea(m, h, v), w.return = m, w) : (w = Yl(v.type, v.key, v.props, null, m.mode, w), w.ref = ea(m, h, v), w.return = m, w);
  }
  function u(m, h, v, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Fd(v, m.mode, w), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function c(m, h, v, w, k) {
    return h === null || h.tag !== 7 ? (h = uo(v, m.mode, w, k), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function d(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Id("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case tl:
          return v = Yl(h.type, h.key, h.props, null, m.mode, v), v.ref = ea(m, null, h), v.return = m, v;
        case Do:
          return h = Fd(h, m.mode, v), h.return = m, h;
        case hn:
          var w = h._init;
          return d(m, w(h._payload), v);
      }
      if (fa(h) || qi(h))
        return h = uo(h, m.mode, v, null), h.return = m, h;
      fl(m, h);
    }
    return null;
  }
  function f(m, h, v, w) {
    var k = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return k !== null ? null : s(m, h, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case tl:
          return v.key === k ? l(m, h, v, w) : null;
        case Do:
          return v.key === k ? u(m, h, v, w) : null;
        case hn:
          return k = v._init, f(
            m,
            h,
            k(v._payload),
            w
          );
      }
      if (fa(v) || qi(v))
        return k !== null ? null : c(m, h, v, w, null);
      fl(m, v);
    }
    return null;
  }
  function p(m, h, v, w, k) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return m = m.get(v) || null, s(h, m, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case tl:
          return m = m.get(w.key === null ? v : w.key) || null, l(h, m, w, k);
        case Do:
          return m = m.get(w.key === null ? v : w.key) || null, u(h, m, w, k);
        case hn:
          var T = w._init;
          return p(m, h, v, T(w._payload), k);
      }
      if (fa(w) || qi(w))
        return m = m.get(v) || null, c(h, m, w, k, null);
      fl(h, w);
    }
    return null;
  }
  function g(m, h, v, w) {
    for (var k = null, T = null, C = h, $ = h = 0, R = null; C !== null && $ < v.length; $++) {
      C.index > $ ? (R = C, C = null) : R = C.sibling;
      var M = f(m, C, v[$], w);
      if (M === null) {
        C === null && (C = R);
        break;
      }
      e && C && M.alternate === null && t(m, C), h = i(M, h, $), T === null ? k = M : T.sibling = M, T = M, C = R;
    }
    if ($ === v.length)
      return r(m, C), _e && qn(m, $), k;
    if (C === null) {
      for (; $ < v.length; $++)
        C = d(m, v[$], w), C !== null && (h = i(C, h, $), T === null ? k = C : T.sibling = C, T = C);
      return _e && qn(m, $), k;
    }
    for (C = n(m, C); $ < v.length; $++)
      R = p(C, m, $, v[$], w), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? $ : R.key), h = i(R, h, $), T === null ? k = R : T.sibling = R, T = R);
    return e && C.forEach(function(j) {
      return t(m, j);
    }), _e && qn(m, $), k;
  }
  function y(m, h, v, w) {
    var k = qi(v);
    if (typeof k != "function")
      throw Error(O(150));
    if (v = k.call(v), v == null)
      throw Error(O(151));
    for (var T = k = null, C = h, $ = h = 0, R = null, M = v.next(); C !== null && !M.done; $++, M = v.next()) {
      C.index > $ ? (R = C, C = null) : R = C.sibling;
      var j = f(m, C, M.value, w);
      if (j === null) {
        C === null && (C = R);
        break;
      }
      e && C && j.alternate === null && t(m, C), h = i(j, h, $), T === null ? k = j : T.sibling = j, T = j, C = R;
    }
    if (M.done)
      return r(
        m,
        C
      ), _e && qn(m, $), k;
    if (C === null) {
      for (; !M.done; $++, M = v.next())
        M = d(m, M.value, w), M !== null && (h = i(M, h, $), T === null ? k = M : T.sibling = M, T = M);
      return _e && qn(m, $), k;
    }
    for (C = n(m, C); !M.done; $++, M = v.next())
      M = p(C, m, $, M.value, w), M !== null && (e && M.alternate !== null && C.delete(M.key === null ? $ : M.key), h = i(M, h, $), T === null ? k = M : T.sibling = M, T = M);
    return e && C.forEach(function(ee) {
      return t(m, ee);
    }), _e && qn(m, $), k;
  }
  function x(m, h, v, w) {
    if (typeof v == "object" && v !== null && v.type === jo && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case tl:
          e: {
            for (var k = v.key, T = h; T !== null; ) {
              if (T.key === k) {
                if (k = v.type, k === jo) {
                  if (T.tag === 7) {
                    r(m, T.sibling), h = o(T, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (T.elementType === k || typeof k == "object" && k !== null && k.$$typeof === hn && dg(k) === T.type) {
                  r(m, T.sibling), h = o(T, v.props), h.ref = ea(m, T, v), h.return = m, m = h;
                  break e;
                }
                r(m, T);
                break;
              } else
                t(m, T);
              T = T.sibling;
            }
            v.type === jo ? (h = uo(v.props.children, m.mode, w, v.key), h.return = m, m = h) : (w = Yl(v.type, v.key, v.props, null, m.mode, w), w.ref = ea(m, h, v), w.return = m, m = w);
          }
          return a(m);
        case Do:
          e: {
            for (T = v.key; h !== null; ) {
              if (h.key === T)
                if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                  r(m, h.sibling), h = o(h, v.children || []), h.return = m, m = h;
                  break e;
                } else {
                  r(m, h);
                  break;
                }
              else
                t(m, h);
              h = h.sibling;
            }
            h = Fd(v, m.mode, w), h.return = m, m = h;
          }
          return a(m);
        case hn:
          return T = v._init, x(m, h, T(v._payload), w);
      }
      if (fa(v))
        return g(m, h, v, w);
      if (qi(v))
        return y(m, h, v, w);
      fl(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (r(m, h.sibling), h = o(h, v), h.return = m, m = h) : (r(m, h), h = Id(v, m.mode, w), h.return = m, m = h), a(m)) : r(m, h);
  }
  return x;
}
var Ci = Nb(!0), Vb = Nb(!1), As = {}, Er = jn(As), rs = jn(As), ns = jn(As);
function io(e) {
  if (e === As)
    throw Error(O(174));
  return e;
}
function Rh(e, t) {
  switch (me(ns, t), me(rs, e), me(Er, As), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Df(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Df(t, e);
  }
  xe(Er), me(Er, t);
}
function _i() {
  xe(Er), xe(rs), xe(ns);
}
function Wb(e) {
  io(ns.current);
  var t = io(Er.current), r = Df(t, e.type);
  t !== r && (me(rs, e), me(Er, r));
}
function Mh(e) {
  rs.current === e && (xe(Er), xe(rs));
}
var Ee = jn(0);
function $u(e) {
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
var $d = [];
function Oh() {
  for (var e = 0; e < $d.length; e++)
    $d[e]._workInProgressVersionPrimary = null;
  $d.length = 0;
}
var Wl = an.ReactCurrentDispatcher, Ad = an.ReactCurrentBatchConfig, yo = 0, Ae = null, Ve = null, Ge = null, Au = !1, Ta = !1, os = 0, DP = 0;
function at() {
  throw Error(O(321));
}
function zh(e, t) {
  if (t === null)
    return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!mr(e[r], t[r]))
      return !1;
  return !0;
}
function Ih(e, t, r, n, o, i) {
  if (yo = i, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wl.current = e === null || e.memoizedState === null ? NP : VP, e = r(n, o), Ta) {
    i = 0;
    do {
      if (Ta = !1, os = 0, 25 <= i)
        throw Error(O(301));
      i += 1, Ge = Ve = null, t.updateQueue = null, Wl.current = WP, e = r(n, o);
    } while (Ta);
  }
  if (Wl.current = Ru, t = Ve !== null && Ve.next !== null, yo = 0, Ge = Ve = Ae = null, Au = !1, t)
    throw Error(O(300));
  return e;
}
function Fh() {
  var e = os !== 0;
  return os = 0, e;
}
function br() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ge === null ? Ae.memoizedState = Ge = e : Ge = Ge.next = e, Ge;
}
function or() {
  if (Ve === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Ve.next;
  var t = Ge === null ? Ae.memoizedState : Ge.next;
  if (t !== null)
    Ge = t, Ve = e;
  else {
    if (e === null)
      throw Error(O(310));
    Ve = e, e = { memoizedState: Ve.memoizedState, baseState: Ve.baseState, baseQueue: Ve.baseQueue, queue: Ve.queue, next: null }, Ge === null ? Ae.memoizedState = Ge = e : Ge = Ge.next = e;
  }
  return Ge;
}
function is(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rd(e) {
  var t = or(), r = t.queue;
  if (r === null)
    throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = Ve, o = n.baseQueue, i = r.pending;
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
      if ((yo & c) === c)
        l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (s = l = d, a = n) : l = l.next = d, Ae.lanes |= c, bo |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? a = n : l.next = s, mr(n, t.memoizedState) || (wt = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n;
  }
  if (e = r.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, Ae.lanes |= i, bo |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Md(e) {
  var t = or(), r = t.queue;
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
    mr(i, t.memoizedState) || (wt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i;
  }
  return [i, n];
}
function Ub() {
}
function Hb(e, t) {
  var r = Ae, n = or(), o = t(), i = !mr(n.memoizedState, o);
  if (i && (n.memoizedState = o, wt = !0), n = n.queue, Dh(Yb.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || Ge !== null && Ge.memoizedState.tag & 1) {
    if (r.flags |= 2048, as(9, Kb.bind(null, r, n, o, t), void 0, null), Ke === null)
      throw Error(O(349));
    yo & 30 || Gb(r, t, o);
  }
  return o;
}
function Gb(e, t, r) {
  e.flags |= 16384, e = { getSnapshot: t, value: r }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
}
function Kb(e, t, r, n) {
  t.value = r, t.getSnapshot = n, qb(t) && Xb(e);
}
function Yb(e, t, r) {
  return r(function() {
    qb(t) && Xb(e);
  });
}
function qb(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !mr(e, r);
  } catch {
    return !0;
  }
}
function Xb(e) {
  var t = en(e, 1);
  t !== null && hr(t, e, 1, -1);
}
function fg(e) {
  var t = br();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: is, lastRenderedState: e }, t.queue = e, e = e.dispatch = BP.bind(null, Ae, e), [t.memoizedState, e];
}
function as(e, t, r, n) {
  return e = { tag: e, create: t, destroy: r, deps: n, next: null }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e;
}
function Qb() {
  return or().memoizedState;
}
function Ul(e, t, r, n) {
  var o = br();
  Ae.flags |= e, o.memoizedState = as(1 | t, r, void 0, n === void 0 ? null : n);
}
function mc(e, t, r, n) {
  var o = or();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Ve !== null) {
    var a = Ve.memoizedState;
    if (i = a.destroy, n !== null && zh(n, a.deps)) {
      o.memoizedState = as(t, r, i, n);
      return;
    }
  }
  Ae.flags |= e, o.memoizedState = as(1 | t, r, i, n);
}
function pg(e, t) {
  return Ul(8390656, 8, e, t);
}
function Dh(e, t) {
  return mc(2048, 8, e, t);
}
function Zb(e, t) {
  return mc(4, 2, e, t);
}
function Jb(e, t) {
  return mc(4, 4, e, t);
}
function eS(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function tS(e, t, r) {
  return r = r != null ? r.concat([e]) : null, mc(4, 4, eS.bind(null, t, e), r);
}
function jh() {
}
function rS(e, t) {
  var r = or();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && zh(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e);
}
function nS(e, t) {
  var r = or();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && zh(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e);
}
function oS(e, t, r) {
  return yo & 21 ? (mr(r, t) || (r = sb(), Ae.lanes |= r, bo |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, wt = !0), e.memoizedState = r);
}
function jP(e, t) {
  var r = de;
  de = r !== 0 && 4 > r ? r : 4, e(!0);
  var n = Ad.transition;
  Ad.transition = {};
  try {
    e(!1), t();
  } finally {
    de = r, Ad.transition = n;
  }
}
function iS() {
  return or().memoizedState;
}
function LP(e, t, r) {
  var n = $n(e);
  if (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }, aS(e))
    sS(t, r);
  else if (r = Db(e, t, r, n), r !== null) {
    var o = vt();
    hr(r, e, n, o), lS(r, t, n);
  }
}
function BP(e, t, r) {
  var n = $n(e), o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (aS(e))
    sS(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var a = t.lastRenderedState, s = i(a, r);
        if (o.hasEagerState = !0, o.eagerState = s, mr(s, a)) {
          var l = t.interleaved;
          l === null ? (o.next = o, $h(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    r = Db(e, t, o, n), r !== null && (o = vt(), hr(r, e, n, o), lS(r, t, n));
  }
}
function aS(e) {
  var t = e.alternate;
  return e === Ae || t !== null && t === Ae;
}
function sS(e, t) {
  Ta = Au = !0;
  var r = e.pending;
  r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
}
function lS(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    n &= e.pendingLanes, r |= n, t.lanes = r, mh(e, r);
  }
}
var Ru = { readContext: nr, useCallback: at, useContext: at, useEffect: at, useImperativeHandle: at, useInsertionEffect: at, useLayoutEffect: at, useMemo: at, useReducer: at, useRef: at, useState: at, useDebugValue: at, useDeferredValue: at, useTransition: at, useMutableSource: at, useSyncExternalStore: at, useId: at, unstable_isNewReconciler: !1 }, NP = { readContext: nr, useCallback: function(e, t) {
  return br().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: nr, useEffect: pg, useImperativeHandle: function(e, t, r) {
  return r = r != null ? r.concat([e]) : null, Ul(
    4194308,
    4,
    eS.bind(null, t, e),
    r
  );
}, useLayoutEffect: function(e, t) {
  return Ul(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ul(4, 2, e, t);
}, useMemo: function(e, t) {
  var r = br();
  return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
}, useReducer: function(e, t, r) {
  var n = br();
  return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, n.queue = e, e = e.dispatch = LP.bind(null, Ae, e), [n.memoizedState, e];
}, useRef: function(e) {
  var t = br();
  return e = { current: e }, t.memoizedState = e;
}, useState: fg, useDebugValue: jh, useDeferredValue: function(e) {
  return br().memoizedState = e;
}, useTransition: function() {
  var e = fg(!1), t = e[0];
  return e = jP.bind(null, e[1]), br().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, r) {
  var n = Ae, o = br();
  if (_e) {
    if (r === void 0)
      throw Error(O(407));
    r = r();
  } else {
    if (r = t(), Ke === null)
      throw Error(O(349));
    yo & 30 || Gb(n, t, r);
  }
  o.memoizedState = r;
  var i = { value: r, getSnapshot: t };
  return o.queue = i, pg(Yb.bind(
    null,
    n,
    i,
    e
  ), [e]), n.flags |= 2048, as(9, Kb.bind(null, n, i, r, t), void 0, null), r;
}, useId: function() {
  var e = br(), t = Ke.identifierPrefix;
  if (_e) {
    var r = Ur, n = Wr;
    r = (n & ~(1 << 32 - pr(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = os++, 0 < r && (t += "H" + r.toString(32)), t += ":";
  } else
    r = DP++, t = ":" + t + "r" + r.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, VP = {
  readContext: nr,
  useCallback: rS,
  useContext: nr,
  useEffect: Dh,
  useImperativeHandle: tS,
  useInsertionEffect: Zb,
  useLayoutEffect: Jb,
  useMemo: nS,
  useReducer: Rd,
  useRef: Qb,
  useState: function() {
    return Rd(is);
  },
  useDebugValue: jh,
  useDeferredValue: function(e) {
    var t = or();
    return oS(t, Ve.memoizedState, e);
  },
  useTransition: function() {
    var e = Rd(is)[0], t = or().memoizedState;
    return [e, t];
  },
  useMutableSource: Ub,
  useSyncExternalStore: Hb,
  useId: iS,
  unstable_isNewReconciler: !1
}, WP = { readContext: nr, useCallback: rS, useContext: nr, useEffect: Dh, useImperativeHandle: tS, useInsertionEffect: Zb, useLayoutEffect: Jb, useMemo: nS, useReducer: Md, useRef: Qb, useState: function() {
  return Md(is);
}, useDebugValue: jh, useDeferredValue: function(e) {
  var t = or();
  return Ve === null ? t.memoizedState = e : oS(t, Ve.memoizedState, e);
}, useTransition: function() {
  var e = Md(is)[0], t = or().memoizedState;
  return [e, t];
}, useMutableSource: Ub, useSyncExternalStore: Hb, useId: iS, unstable_isNewReconciler: !1 };
function Pi(e, t) {
  try {
    var r = "", n = t;
    do
      r += g_(n), n = n.return;
    while (n);
    var o = r;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Od(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function ap(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var UP = typeof WeakMap == "function" ? WeakMap : Map;
function uS(e, t, r) {
  r = Yr(-1, r), r.tag = 3, r.payload = { element: null };
  var n = t.value;
  return r.callback = function() {
    Ou || (Ou = !0, vp = n), ap(e, t);
  }, r;
}
function cS(e, t, r) {
  r = Yr(-1, r), r.tag = 3;
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    r.payload = function() {
      return n(o);
    }, r.callback = function() {
      ap(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
    ap(e, t), typeof n != "function" && (En === null ? En = /* @__PURE__ */ new Set([this]) : En.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), r;
}
function hg(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new UP();
    var o = /* @__PURE__ */ new Set();
    n.set(t, o);
  } else
    o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
  o.has(r) || (o.add(r), e = oT.bind(null, e, t, r), t.then(e, e));
}
function mg(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vg(e, t, r, n, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = Yr(-1, 1), t.tag = 2, Tn(r, t, 1))), r.lanes |= 1), e);
}
var HP = an.ReactCurrentOwner, wt = !1;
function pt(e, t, r, n) {
  t.child = e === null ? Vb(t, null, r, n) : Ci(t, e.child, r, n);
}
function gg(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return ci(t, o), n = Ih(e, t, r, n, i, o), r = Fh(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, tn(e, t, o)) : (_e && r && kh(t), t.flags |= 1, pt(e, t, n, o), t.child);
}
function yg(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !Gh(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, dS(e, t, i, n, o)) : (e = Yl(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var a = i.memoizedProps;
    if (r = r.compare, r = r !== null ? r : Za, r(a, n) && e.ref === t.ref)
      return tn(e, t, o);
  }
  return t.flags |= 1, e = An(i, n), e.ref = t.ref, e.return = t, t.child = e;
}
function dS(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Za(i, n) && e.ref === t.ref)
      if (wt = !1, t.pendingProps = n = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (wt = !0);
      else
        return t.lanes = e.lanes, tn(e, t, o);
  }
  return sp(e, t, r, n, o);
}
function fS(e, t, r) {
  var n = t.pendingProps, o = n.children, i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, me(Yo, Mt), Mt |= r;
    else {
      if (!(r & 1073741824))
        return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, me(Yo, Mt), Mt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = i !== null ? i.baseLanes : r, me(Yo, Mt), Mt |= n;
    }
  else
    i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, me(Yo, Mt), Mt |= n;
  return pt(e, t, o, r), t.child;
}
function pS(e, t) {
  var r = t.ref;
  (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
}
function sp(e, t, r, n, o) {
  var i = Ct(r) ? vo : dt.current;
  return i = wi(t, i), ci(t, o), r = Ih(e, t, r, n, i, o), n = Fh(), e !== null && !wt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, tn(e, t, o)) : (_e && n && kh(t), t.flags |= 1, pt(e, t, r, o), t.child);
}
function bg(e, t, r, n, o) {
  if (Ct(r)) {
    var i = !0;
    ku(t);
  } else
    i = !1;
  if (ci(t, o), t.stateNode === null)
    Hl(e, t), Bb(t, r, n), ip(t, r, n, o), n = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var l = a.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = nr(u) : (u = Ct(r) ? vo : dt.current, u = wi(t, u));
    var c = r.getDerivedStateFromProps, d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== n || l !== u) && cg(t, a, n, u), mn = !1;
    var f = t.memoizedState;
    a.state = f, Eu(t, n, a, o), l = t.memoizedState, s !== n || f !== l || kt.current || mn ? (typeof c == "function" && (op(t, r, c, n), l = t.memoizedState), (s = mn || ug(t, r, s, n, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = l), a.props = n, a.state = l, a.context = u, n = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
  } else {
    a = t.stateNode, jb(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ur(t.type, s), a.props = u, d = t.pendingProps, f = a.context, l = r.contextType, typeof l == "object" && l !== null ? l = nr(l) : (l = Ct(r) ? vo : dt.current, l = wi(t, l));
    var p = r.getDerivedStateFromProps;
    (c = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && cg(t, a, n, l), mn = !1, f = t.memoizedState, a.state = f, Eu(t, n, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || kt.current || mn ? (typeof p == "function" && (op(t, r, p, n), g = t.memoizedState), (u = mn || ug(t, r, u, n, f, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, g, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, g, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = g), a.props = n, a.state = g, a.context = l, n = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1);
  }
  return lp(e, t, r, n, i, o);
}
function lp(e, t, r, n, o, i) {
  pS(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a)
    return o && og(t, r, !1), tn(e, t, i);
  n = t.stateNode, HP.current = t;
  var s = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return t.flags |= 1, e !== null && a ? (t.child = Ci(t, e.child, null, i), t.child = Ci(t, null, s, i)) : pt(e, t, s, i), t.memoizedState = n.state, o && og(t, r, !0), t.child;
}
function hS(e) {
  var t = e.stateNode;
  t.pendingContext ? ng(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ng(e, t.context, !1), Rh(e, t.containerInfo);
}
function Sg(e, t, r, n, o) {
  return ki(), _h(o), t.flags |= 256, pt(e, t, r, n), t.child;
}
var up = { dehydrated: null, treeContext: null, retryLane: 0 };
function cp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mS(e, t, r) {
  var n = t.pendingProps, o = Ee.current, i = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), me(Ee, o & 1), e === null)
    return rp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = { mode: "hidden", children: a }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = yc(a, n, 0, null), e = uo(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = cp(r), t.memoizedState = up, e) : Lh(t, a));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
    return GP(e, t, a, n, s, o, r);
  if (i) {
    i = n.fallback, a = t.mode, o = e.child, s = o.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = An(o, l), n.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = An(s, i) : (i = uo(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? cp(r) : { baseLanes: a.baseLanes | r, cachePool: null, transitions: a.transitions }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = up, n;
  }
  return i = e.child, e = i.sibling, n = An(i, { mode: "visible", children: n.children }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n;
}
function Lh(e, t) {
  return t = yc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function pl(e, t, r, n) {
  return n !== null && _h(n), Ci(t, e.child, null, r), e = Lh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function GP(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256 ? (t.flags &= -257, n = Od(Error(O(422))), pl(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = yc({ mode: "visible", children: n.children }, o, 0, null), i = uo(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && Ci(t, e.child, null, a), t.child.memoizedState = cp(a), t.memoizedState = up, i);
  if (!(t.mode & 1))
    return pl(e, t, a, null);
  if (o.data === "$!") {
    if (n = o.nextSibling && o.nextSibling.dataset, n)
      var s = n.dgst;
    return n = s, i = Error(O(419)), n = Od(i, n, void 0), pl(e, t, a, n);
  }
  if (s = (a & e.childLanes) !== 0, wt || s) {
    if (n = Ke, n !== null) {
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
      o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, en(e, o), hr(n, e, o, -1));
    }
    return Hh(), n = Od(Error(O(421))), pl(e, t, a, n);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = iT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ot = Pn(o.nextSibling), zt = t, _e = !0, dr = null, e !== null && (qt[Xt++] = Wr, qt[Xt++] = Ur, qt[Xt++] = go, Wr = e.id, Ur = e.overflow, go = t), t = Lh(t, n.children), t.flags |= 4096, t);
}
function xg(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), np(e.return, t, r);
}
function zd(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o);
}
function vS(e, t, r) {
  var n = t.pendingProps, o = n.revealOrder, i = n.tail;
  if (pt(e, t, n.children, r), n = Ee.current, n & 2)
    n = n & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && xg(e, r, t);
          else if (e.tag === 19)
            xg(e, r, t);
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
  if (me(Ee, n), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          e = r.alternate, e !== null && $u(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), zd(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && $u(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = r, r = o, o = e;
        }
        zd(t, !0, r, null, i);
        break;
      case "together":
        zd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function tn(e, t, r) {
  if (e !== null && (t.dependencies = e.dependencies), bo |= t.lanes, !(r & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, r = An(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
      e = e.sibling, r = r.sibling = An(e, e.pendingProps), r.return = t;
    r.sibling = null;
  }
  return t.child;
}
function KP(e, t, r) {
  switch (t.tag) {
    case 3:
      hS(t), ki();
      break;
    case 5:
      Wb(t);
      break;
    case 1:
      Ct(t.type) && ku(t);
      break;
    case 4:
      Rh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context, o = t.memoizedProps.value;
      me(Pu, n._currentValue), n._currentValue = o;
      break;
    case 13:
      if (n = t.memoizedState, n !== null)
        return n.dehydrated !== null ? (me(Ee, Ee.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? mS(e, t, r) : (me(Ee, Ee.current & 1), e = tn(e, t, r), e !== null ? e.sibling : null);
      me(Ee, Ee.current & 1);
      break;
    case 19:
      if (n = (r & t.childLanes) !== 0, e.flags & 128) {
        if (n)
          return vS(e, t, r);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), me(Ee, Ee.current), n)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, fS(e, t, r);
  }
  return tn(e, t, r);
}
var gS, dp, yS, bS;
gS = function(e, t) {
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
dp = function() {
};
yS = function(e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    e = t.stateNode, io(Er.current);
    var i = null;
    switch (r) {
      case "input":
        o = Of(e, o), n = Of(e, n), i = [];
        break;
      case "select":
        o = Re({}, o, { value: void 0 }), n = Re({}, n, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Ff(e, o), n = Ff(e, n), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = xu);
    }
    jf(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s)
            s.hasOwnProperty(a) && (r || (r = {}), r[a] = "");
        } else
          u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ha.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
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
          u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ha.hasOwnProperty(u) ? (l != null && u === "onScroll" && be("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
bS = function(e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function ta(e, t) {
  if (!_e)
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
function st(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, r = 0, n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= n, e.childLanes = r, t;
}
function YP(e, t, r) {
  var n = t.pendingProps;
  switch (Ch(t), t.tag) {
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
      return st(t), null;
    case 1:
      return Ct(t.type) && wu(), st(t), null;
    case 3:
      return n = t.stateNode, _i(), xe(kt), xe(dt), Oh(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (dl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dr !== null && (bp(dr), dr = null))), dp(e, t), st(t), null;
    case 5:
      Mh(t);
      var o = io(ns.current);
      if (r = t.type, e !== null && t.stateNode != null)
        yS(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!n) {
          if (t.stateNode === null)
            throw Error(O(166));
          return st(t), null;
        }
        if (e = io(Er.current), dl(t)) {
          n = t.stateNode, r = t.type;
          var i = t.memoizedProps;
          switch (n[_r] = t, n[ts] = i, e = (t.mode & 1) !== 0, r) {
            case "dialog":
              be("cancel", n), be("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              be("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ha.length; o++)
                be(ha[o], n);
              break;
            case "source":
              be("error", n);
              break;
            case "img":
            case "image":
            case "link":
              be(
                "error",
                n
              ), be("load", n);
              break;
            case "details":
              be("toggle", n);
              break;
            case "input":
              Av(n, i), be("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!i.multiple }, be("invalid", n);
              break;
            case "textarea":
              Mv(n, i), be("invalid", n);
          }
          jf(r, i), o = null;
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children" ? typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && cl(n.textContent, s, e), o = ["children", s]) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && cl(
                n.textContent,
                s,
                e
              ), o = ["children", "" + s]) : Ha.hasOwnProperty(a) && s != null && a === "onScroll" && be("scroll", n);
            }
          switch (r) {
            case "input":
              rl(n), Rv(n, i, !0);
              break;
            case "textarea":
              rl(n), Ov(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = xu);
          }
          n = o, t.updateQueue = n, n !== null && (t.flags |= 4);
        } else {
          a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = G1(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, { is: n.is }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[_r] = t, e[ts] = n, gS(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = Lf(r, n), r) {
              case "dialog":
                be("cancel", e), be("close", e), o = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                be("load", e), o = n;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ha.length; o++)
                  be(ha[o], e);
                o = n;
                break;
              case "source":
                be("error", e), o = n;
                break;
              case "img":
              case "image":
              case "link":
                be(
                  "error",
                  e
                ), be("load", e), o = n;
                break;
              case "details":
                be("toggle", e), o = n;
                break;
              case "input":
                Av(e, n), o = Of(e, n), be("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!n.multiple }, o = Re({}, n, { value: void 0 }), be("invalid", e);
                break;
              case "textarea":
                Mv(e, n), o = Ff(e, n), be("invalid", e);
                break;
              default:
                o = n;
            }
            jf(r, o), s = o;
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style" ? q1(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && K1(e, l)) : i === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && Ga(e, l) : typeof l == "number" && Ga(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ha.hasOwnProperty(i) ? l != null && i === "onScroll" && be("scroll", e) : l != null && uh(e, i, l, a));
              }
            switch (r) {
              case "input":
                rl(e), Rv(e, n, !1);
                break;
              case "textarea":
                rl(e), Ov(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + On(n.value));
                break;
              case "select":
                e.multiple = !!n.multiple, i = n.value, i != null ? ai(e, !!n.multiple, i, !1) : n.defaultValue != null && ai(
                  e,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = xu);
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
      return st(t), null;
    case 6:
      if (e && t.stateNode != null)
        bS(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null)
          throw Error(O(166));
        if (r = io(ns.current), io(Er.current), dl(t)) {
          if (n = t.stateNode, r = t.memoizedProps, n[_r] = t, (i = n.nodeValue !== r) && (e = zt, e !== null))
            switch (e.tag) {
              case 3:
                cl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && cl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[_r] = t, t.stateNode = n;
      }
      return st(t), null;
    case 13:
      if (xe(Ee), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (_e && Ot !== null && t.mode & 1 && !(t.flags & 128))
          Fb(), ki(), t.flags |= 98560, i = !1;
        else if (i = dl(t), n !== null && n.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(O(317));
            i[_r] = t;
          } else
            ki(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          st(t), i = !1;
        } else
          dr !== null && (bp(dr), dr = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ee.current & 1 ? We === 0 && (We = 3) : Hh())), t.updateQueue !== null && (t.flags |= 4), st(t), null);
    case 4:
      return _i(), dp(e, t), e === null && Ja(t.stateNode.containerInfo), st(t), null;
    case 10:
      return Eh(t.type._context), st(t), null;
    case 17:
      return Ct(t.type) && wu(), st(t), null;
    case 19:
      if (xe(Ee), i = t.memoizedState, i === null)
        return st(t), null;
      if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
        if (n)
          ta(i, !1);
        else {
          if (We !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = $u(e), a !== null) {
                for (t.flags |= 128, ta(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
                return me(Ee, Ee.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && De() > Ti && (t.flags |= 128, n = !0, ta(i, !1), t.lanes = 4194304);
        }
      else {
        if (!n)
          if (e = $u(a), e !== null) {
            if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), ta(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !_e)
              return st(t), null;
          } else
            2 * De() - i.renderingStartTime > Ti && r !== 1073741824 && (t.flags |= 128, n = !0, ta(i, !1), t.lanes = 4194304);
        i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = De(), t.sibling = null, r = Ee.current, me(Ee, n ? r & 1 | 2 : r & 1), t) : (st(t), null);
    case 22:
    case 23:
      return Uh(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Mt & 1073741824 && (st(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : st(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function qP(e, t) {
  switch (Ch(t), t.tag) {
    case 1:
      return Ct(t.type) && wu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return _i(), xe(kt), xe(dt), Oh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Mh(t), null;
    case 13:
      if (xe(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(O(340));
        ki();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return xe(Ee), null;
    case 4:
      return _i(), null;
    case 10:
      return Eh(t.type._context), null;
    case 22:
    case 23:
      return Uh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hl = !1, ut = !1, XP = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function Ko(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        ze(e, t, n);
      }
    else
      r.current = null;
}
function fp(e, t, r) {
  try {
    r();
  } catch (n) {
    ze(e, t, n);
  }
}
var wg = !1;
function QP(e, t) {
  if (qf = yu, e = kb(), wh(e)) {
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
  for (Xf = { focusedElem: e, selectionRange: r }, yu = !1, F = t; F !== null; )
    if (t = F, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, F = e;
    else
      for (; F !== null; ) {
        t = F;
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
                  var y = g.memoizedProps, x = g.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ur(t.type, y), x);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
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
          ze(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, F = e;
          break;
        }
        F = t.return;
      }
  return g = wg, wg = !1, g;
}
function Ea(e, t, r) {
  var n = t.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var o = n = n.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && fp(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function vc(e, t) {
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
function pp(e) {
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
function SS(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, SS(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[_r], delete t[ts], delete t[Jf], delete t[OP], delete t[zP])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function xS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kg(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || xS(e.return))
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
function hp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = xu));
  else if (n !== 4 && (e = e.child, e !== null))
    for (hp(e, t, r), e = e.sibling; e !== null; )
      hp(e, t, r), e = e.sibling;
}
function mp(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && (e = e.child, e !== null))
    for (mp(e, t, r), e = e.sibling; e !== null; )
      mp(e, t, r), e = e.sibling;
}
var Je = null, cr = !1;
function un(e, t, r) {
  for (r = r.child; r !== null; )
    wS(e, t, r), r = r.sibling;
}
function wS(e, t, r) {
  if (Tr && typeof Tr.onCommitFiberUnmount == "function")
    try {
      Tr.onCommitFiberUnmount(lc, r);
    } catch {
    }
  switch (r.tag) {
    case 5:
      ut || Ko(r, t);
    case 6:
      var n = Je, o = cr;
      Je = null, un(e, t, r), Je = n, cr = o, Je !== null && (cr ? (e = Je, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : Je.removeChild(r.stateNode));
      break;
    case 18:
      Je !== null && (cr ? (e = Je, r = r.stateNode, e.nodeType === 8 ? Td(e.parentNode, r) : e.nodeType === 1 && Td(e, r), Xa(e)) : Td(Je, r.stateNode));
      break;
    case 4:
      n = Je, o = cr, Je = r.stateNode.containerInfo, cr = !0, un(e, t, r), Je = n, cr = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ut && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        o = n = n.next;
        do {
          var i = o, a = i.destroy;
          i = i.tag, a !== void 0 && (i & 2 || i & 4) && fp(r, t, a), o = o.next;
        } while (o !== n);
      }
      un(e, t, r);
      break;
    case 1:
      if (!ut && (Ko(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function"))
        try {
          n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
        } catch (s) {
          ze(r, t, s);
        }
      un(e, t, r);
      break;
    case 21:
      un(e, t, r);
      break;
    case 22:
      r.mode & 1 ? (ut = (n = ut) || r.memoizedState !== null, un(e, t, r), ut = n) : un(e, t, r);
      break;
    default:
      un(e, t, r);
  }
}
function Cg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new XP()), t.forEach(function(n) {
      var o = aT.bind(null, e, n);
      r.has(n) || (r.add(n), n.then(o, o));
    });
  }
}
function sr(e, t) {
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
                Je = s.stateNode, cr = !1;
                break e;
              case 3:
                Je = s.stateNode.containerInfo, cr = !0;
                break e;
              case 4:
                Je = s.stateNode.containerInfo, cr = !0;
                break e;
            }
            s = s.return;
          }
        if (Je === null)
          throw Error(O(160));
        wS(i, a, o), Je = null, cr = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null;
      } catch (u) {
        ze(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      kS(t, e), t = t.sibling;
}
function kS(e, t) {
  var r = e.alternate, n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (sr(t, e), gr(e), n & 4) {
        try {
          Ea(3, e, e.return), vc(3, e);
        } catch (y) {
          ze(e, e.return, y);
        }
        try {
          Ea(5, e, e.return);
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      break;
    case 1:
      sr(t, e), gr(e), n & 512 && r !== null && Ko(r, r.return);
      break;
    case 5:
      if (sr(t, e), gr(e), n & 512 && r !== null && Ko(r, r.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ga(o, "");
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      if (n & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, a = r !== null ? r.memoizedProps : i, s = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null)
          try {
            s === "input" && i.type === "radio" && i.name != null && U1(o, i), Lf(s, a);
            var u = Lf(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a], d = l[a + 1];
              c === "style" ? q1(o, d) : c === "dangerouslySetInnerHTML" ? K1(o, d) : c === "children" ? Ga(o, d) : uh(o, c, d, u);
            }
            switch (s) {
              case "input":
                zf(o, i);
                break;
              case "textarea":
                H1(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null ? ai(o, !!i.multiple, p, !1) : f !== !!i.multiple && (i.defaultValue != null ? ai(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : ai(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ts] = i;
          } catch (y) {
            ze(e, e.return, y);
          }
      }
      break;
    case 6:
      if (sr(t, e), gr(e), n & 4) {
        if (e.stateNode === null)
          throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (y) {
          ze(e, e.return, y);
        }
      }
      break;
    case 3:
      if (sr(t, e), gr(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        try {
          Xa(t.containerInfo);
        } catch (y) {
          ze(e, e.return, y);
        }
      break;
    case 4:
      sr(t, e), gr(e);
      break;
    case 13:
      sr(t, e), gr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Vh = De())), n & 4 && Cg(e);
      break;
    case 22:
      if (c = r !== null && r.memoizedState !== null, e.mode & 1 ? (ut = (u = ut) || c, sr(t, e), ut = u) : sr(t, e), gr(e), n & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (f = F, p = f.child, f.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ea(4, f, f.return);
                  break;
                case 1:
                  Ko(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    n = f, r = f.return;
                    try {
                      t = n, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      ze(n, r, y);
                    }
                  }
                  break;
                case 5:
                  Ko(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Pg(d);
                    continue;
                  }
              }
              p !== null ? (p.return = f, F = p) : Pg(d);
            }
            c = c.sibling;
          }
        e:
          for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = Y1("display", a));
                } catch (y) {
                  ze(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (y) {
                  ze(e, e.return, y);
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
      sr(t, e), gr(e), n & 4 && Cg(e);
      break;
    case 21:
      break;
    default:
      sr(
        t,
        e
      ), gr(e);
  }
}
function gr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (xS(r)) {
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
          n.flags & 32 && (Ga(o, ""), n.flags &= -33);
          var i = kg(e);
          mp(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo, s = kg(e);
          hp(e, s, a);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      ze(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ZP(e, t, r) {
  F = e, CS(e);
}
function CS(e, t, r) {
  for (var n = (e.mode & 1) !== 0; F !== null; ) {
    var o = F, i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || hl;
      if (!a) {
        var s = o.alternate, l = s !== null && s.memoizedState !== null || ut;
        s = hl;
        var u = ut;
        if (hl = a, (ut = l) && !u)
          for (F = o; F !== null; )
            a = F, l = a.child, a.tag === 22 && a.memoizedState !== null ? Tg(o) : l !== null ? (l.return = a, F = l) : Tg(o);
        for (; i !== null; )
          F = i, CS(i), i = i.sibling;
        F = o, hl = s, ut = u;
      }
      _g(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, F = i) : _g(e);
  }
}
function _g(e) {
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
              ut || vc(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !ut)
                if (r === null)
                  n.componentDidMount();
                else {
                  var o = t.elementType === t.type ? r.memoizedProps : ur(t.type, r.memoizedProps);
                  n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && lg(t, i, n);
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
                lg(t, a, r);
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
                    d !== null && Xa(d);
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
        ut || t.flags & 512 && pp(t);
      } catch (f) {
        ze(t, t.return, f);
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
function Pg(e) {
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
function Tg(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            vc(4, t);
          } catch (l) {
            ze(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              ze(t, o, l);
            }
          }
          var i = t.return;
          try {
            pp(t);
          } catch (l) {
            ze(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            pp(t);
          } catch (l) {
            ze(t, a, l);
          }
      }
    } catch (l) {
      ze(t, t.return, l);
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
var JP = Math.ceil, Mu = an.ReactCurrentDispatcher, Bh = an.ReactCurrentOwner, er = an.ReactCurrentBatchConfig, te = 0, Ke = null, Ne = null, rt = 0, Mt = 0, Yo = jn(0), We = 0, ss = null, bo = 0, gc = 0, Nh = 0, $a = null, St = null, Vh = 0, Ti = 1 / 0, Lr = null, Ou = !1, vp = null, En = null, ml = !1, wn = null, zu = 0, Aa = 0, gp = null, Gl = -1, Kl = 0;
function vt() {
  return te & 6 ? De() : Gl !== -1 ? Gl : Gl = De();
}
function $n(e) {
  return e.mode & 1 ? te & 2 && rt !== 0 ? rt & -rt : FP.transition !== null ? (Kl === 0 && (Kl = sb()), Kl) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hb(e.type)), e) : 1;
}
function hr(e, t, r, n) {
  if (50 < Aa)
    throw Aa = 0, gp = null, Error(O(185));
  Ts(e, r, n), (!(te & 2) || e !== Ke) && (e === Ke && (!(te & 2) && (gc |= r), We === 4 && yn(e, rt)), _t(e, n), r === 1 && te === 0 && !(t.mode & 1) && (Ti = De() + 500, pc && Ln()));
}
function _t(e, t) {
  var r = e.callbackNode;
  F_(e, t);
  var n = gu(e, e === Ke ? rt : 0);
  if (n === 0)
    r !== null && Fv(r), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = n & -n, e.callbackPriority !== t) {
    if (r != null && Fv(r), t === 1)
      e.tag === 0 ? IP(Eg.bind(null, e)) : Ob(Eg.bind(null, e)), RP(function() {
        !(te & 6) && Ln();
      }), r = null;
    else {
      switch (lb(n)) {
        case 1:
          r = hh;
          break;
        case 4:
          r = ib;
          break;
        case 16:
          r = vu;
          break;
        case 536870912:
          r = ab;
          break;
        default:
          r = vu;
      }
      r = MS(r, _S.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = r;
  }
}
function _S(e, t) {
  if (Gl = -1, Kl = 0, te & 6)
    throw Error(O(327));
  var r = e.callbackNode;
  if (di() && e.callbackNode !== r)
    return null;
  var n = gu(e, e === Ke ? rt : 0);
  if (n === 0)
    return null;
  if (n & 30 || n & e.expiredLanes || t)
    t = Iu(e, n);
  else {
    t = n;
    var o = te;
    te |= 2;
    var i = TS();
    (Ke !== e || rt !== t) && (Lr = null, Ti = De() + 500, lo(e, t));
    do
      try {
        rT();
        break;
      } catch (s) {
        PS(e, s);
      }
    while (!0);
    Th(), Mu.current = i, te = o, Ne !== null ? t = 0 : (Ke = null, rt = 0, t = We);
  }
  if (t !== 0) {
    if (t === 2 && (o = Uf(e), o !== 0 && (n = o, t = yp(e, o))), t === 1)
      throw r = ss, lo(e, 0), yn(e, n), _t(e, De()), r;
    if (t === 6)
      yn(e, n);
    else {
      if (o = e.current.alternate, !(n & 30) && !eT(o) && (t = Iu(e, n), t === 2 && (i = Uf(e), i !== 0 && (n = i, t = yp(e, i))), t === 1))
        throw r = ss, lo(e, 0), yn(e, n), _t(e, De()), r;
      switch (e.finishedWork = o, e.finishedLanes = n, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Xn(e, St, Lr);
          break;
        case 3:
          if (yn(e, n), (n & 130023424) === n && (t = Vh + 500 - De(), 10 < t)) {
            if (gu(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & n) !== n) {
              vt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Zf(Xn.bind(null, e, St, Lr), t);
            break;
          }
          Xn(e, St, Lr);
          break;
        case 4:
          if (yn(e, n), (n & 4194240) === n)
            break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - pr(n);
            i = 1 << a, a = t[a], a > o && (o = a), n &= ~i;
          }
          if (n = o, n = De() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * JP(n / 1960)) - n, 10 < n) {
            e.timeoutHandle = Zf(Xn.bind(null, e, St, Lr), n);
            break;
          }
          Xn(e, St, Lr);
          break;
        case 5:
          Xn(e, St, Lr);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return _t(e, De()), e.callbackNode === r ? _S.bind(null, e) : null;
}
function yp(e, t) {
  var r = $a;
  return e.current.memoizedState.isDehydrated && (lo(e, t).flags |= 256), e = Iu(e, t), e !== 2 && (t = St, St = r, t !== null && bp(t)), e;
}
function bp(e) {
  St === null ? St = e : St.push.apply(St, e);
}
function eT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && (r = r.stores, r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n], i = o.getSnapshot;
          o = o.value;
          try {
            if (!mr(i(), o))
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
function yn(e, t) {
  for (t &= ~Nh, t &= ~gc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - pr(t), n = 1 << r;
    e[r] = -1, t &= ~n;
  }
}
function Eg(e) {
  if (te & 6)
    throw Error(O(327));
  di();
  var t = gu(e, 0);
  if (!(t & 1))
    return _t(e, De()), null;
  var r = Iu(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Uf(e);
    n !== 0 && (t = n, r = yp(e, n));
  }
  if (r === 1)
    throw r = ss, lo(e, 0), yn(e, t), _t(e, De()), r;
  if (r === 6)
    throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xn(e, St, Lr), _t(e, De()), null;
}
function Wh(e, t) {
  var r = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    te = r, te === 0 && (Ti = De() + 500, pc && Ln());
  }
}
function So(e) {
  wn !== null && wn.tag === 0 && !(te & 6) && di();
  var t = te;
  te |= 1;
  var r = er.transition, n = de;
  try {
    if (er.transition = null, de = 1, e)
      return e();
  } finally {
    de = n, er.transition = r, te = t, !(te & 6) && Ln();
  }
}
function Uh() {
  Mt = Yo.current, xe(Yo);
}
function lo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var r = e.timeoutHandle;
  if (r !== -1 && (e.timeoutHandle = -1, AP(r)), Ne !== null)
    for (r = Ne.return; r !== null; ) {
      var n = r;
      switch (Ch(n), n.tag) {
        case 1:
          n = n.type.childContextTypes, n != null && wu();
          break;
        case 3:
          _i(), xe(kt), xe(dt), Oh();
          break;
        case 5:
          Mh(n);
          break;
        case 4:
          _i();
          break;
        case 13:
          xe(Ee);
          break;
        case 19:
          xe(Ee);
          break;
        case 10:
          Eh(n.type._context);
          break;
        case 22:
        case 23:
          Uh();
      }
      r = r.return;
    }
  if (Ke = e, Ne = e = An(e.current, null), rt = Mt = t, We = 0, ss = null, Nh = gc = bo = 0, St = $a = null, oo !== null) {
    for (t = 0; t < oo.length; t++)
      if (r = oo[t], n = r.interleaved, n !== null) {
        r.interleaved = null;
        var o = n.next, i = r.pending;
        if (i !== null) {
          var a = i.next;
          i.next = o, n.next = a;
        }
        r.pending = n;
      }
    oo = null;
  }
  return e;
}
function PS(e, t) {
  do {
    var r = Ne;
    try {
      if (Th(), Wl.current = Ru, Au) {
        for (var n = Ae.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), n = n.next;
        }
        Au = !1;
      }
      if (yo = 0, Ge = Ve = Ae = null, Ta = !1, os = 0, Bh.current = null, r === null || r.return === null) {
        We = 1, ss = t, Ne = null;
        break;
      }
      e: {
        var i = e, a = r.return, s = r, l = t;
        if (t = rt, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = s, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var p = mg(a);
          if (p !== null) {
            p.flags &= -257, vg(p, a, s, i, t), p.mode & 1 && hg(i, u, t), t = p, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else
              g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              hg(i, u, t), Hh();
              break e;
            }
            l = Error(O(426));
          }
        } else if (_e && s.mode & 1) {
          var x = mg(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), vg(x, a, s, i, t), _h(Pi(l, s));
            break e;
          }
        }
        i = l = Pi(l, s), We !== 4 && (We = 2), $a === null ? $a = [i] : $a.push(i), i = a;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = uS(i, l, t);
              sg(i, m);
              break e;
            case 1:
              s = l;
              var h = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (En === null || !En.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = cS(i, s, t);
                sg(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $S(r);
    } catch (k) {
      t = k, Ne === r && r !== null && (Ne = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function TS() {
  var e = Mu.current;
  return Mu.current = Ru, e === null ? Ru : e;
}
function Hh() {
  (We === 0 || We === 3 || We === 2) && (We = 4), Ke === null || !(bo & 268435455) && !(gc & 268435455) || yn(Ke, rt);
}
function Iu(e, t) {
  var r = te;
  te |= 2;
  var n = TS();
  (Ke !== e || rt !== t) && (Lr = null, lo(e, t));
  do
    try {
      tT();
      break;
    } catch (o) {
      PS(e, o);
    }
  while (!0);
  if (Th(), te = r, Mu.current = n, Ne !== null)
    throw Error(O(261));
  return Ke = null, rt = 0, We;
}
function tT() {
  for (; Ne !== null; )
    ES(Ne);
}
function rT() {
  for (; Ne !== null && !T_(); )
    ES(Ne);
}
function ES(e) {
  var t = RS(e.alternate, e, Mt);
  e.memoizedProps = e.pendingProps, t === null ? $S(e) : Ne = t, Bh.current = null;
}
function $S(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (r = qP(r, t), r !== null) {
        r.flags &= 32767, Ne = r;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        We = 6, Ne = null;
        return;
      }
    } else if (r = YP(r, t, Mt), r !== null) {
      Ne = r;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  We === 0 && (We = 5);
}
function Xn(e, t, r) {
  var n = de, o = er.transition;
  try {
    er.transition = null, de = 1, nT(e, t, r, n);
  } finally {
    er.transition = o, de = n;
  }
  return null;
}
function nT(e, t, r, n) {
  do
    di();
  while (wn !== null);
  if (te & 6)
    throw Error(O(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, r === e.current)
    throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = r.lanes | r.childLanes;
  if (D_(e, i), e === Ke && (Ne = Ke = null, rt = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || ml || (ml = !0, MS(vu, function() {
    return di(), null;
  })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
    i = er.transition, er.transition = null;
    var a = de;
    de = 1;
    var s = te;
    te |= 4, Bh.current = null, QP(e, r), kS(r, e), kP(Xf), yu = !!qf, Xf = qf = null, e.current = r, ZP(r), E_(), te = s, de = a, er.transition = i;
  } else
    e.current = r;
  if (ml && (ml = !1, wn = e, zu = o), i = e.pendingLanes, i === 0 && (En = null), R_(r.stateNode), _t(e, De()), t !== null)
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      o = t[r], n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ou)
    throw Ou = !1, e = vp, vp = null, e;
  return zu & 1 && e.tag !== 0 && di(), i = e.pendingLanes, i & 1 ? e === gp ? Aa++ : (Aa = 0, gp = e) : Aa = 0, Ln(), null;
}
function di() {
  if (wn !== null) {
    var e = lb(zu), t = er.transition, r = de;
    try {
      if (er.transition = null, de = 16 > e ? 16 : e, wn === null)
        var n = !1;
      else {
        if (e = wn, wn = null, zu = 0, te & 6)
          throw Error(O(331));
        var o = te;
        for (te |= 4, F = e.current; F !== null; ) {
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
                      Ea(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null)
                    d.return = c, F = d;
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling, p = c.return;
                      if (SS(c), c === u) {
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
              var g = i.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var x = y.sibling;
                    y.sibling = null, y = x;
                  } while (y !== null);
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
                      Ea(9, i, i.return);
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
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null)
            v.return = a, F = v;
          else
            e:
              for (a = h; F !== null; ) {
                if (s = F, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vc(9, s);
                    }
                  } catch (k) {
                    ze(s, s.return, k);
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
        if (te = o, Ln(), Tr && typeof Tr.onPostCommitFiberRoot == "function")
          try {
            Tr.onPostCommitFiberRoot(lc, e);
          } catch {
          }
        n = !0;
      }
      return n;
    } finally {
      de = r, er.transition = t;
    }
  }
  return !1;
}
function $g(e, t, r) {
  t = Pi(r, t), t = uS(e, t, 1), e = Tn(e, t, 1), t = vt(), e !== null && (Ts(e, 1, t), _t(e, t));
}
function ze(e, t, r) {
  if (e.tag === 3)
    $g(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $g(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (En === null || !En.has(n))) {
          e = Pi(r, e), e = cS(t, e, 1), t = Tn(t, e, 1), e = vt(), t !== null && (Ts(t, 1, e), _t(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function oT(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), t = vt(), e.pingedLanes |= e.suspendedLanes & r, Ke === e && (rt & r) === r && (We === 4 || We === 3 && (rt & 130023424) === rt && 500 > De() - Vh ? lo(e, 0) : Nh |= r), _t(e, t);
}
function AS(e, t) {
  t === 0 && (e.mode & 1 ? (t = il, il <<= 1, !(il & 130023424) && (il = 4194304)) : t = 1);
  var r = vt();
  e = en(e, t), e !== null && (Ts(e, t, r), _t(e, r));
}
function iT(e) {
  var t = e.memoizedState, r = 0;
  t !== null && (r = t.retryLane), AS(e, r);
}
function aT(e, t) {
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
  n !== null && n.delete(t), AS(e, r);
}
var RS;
RS = function(e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || kt.current)
      wt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128))
        return wt = !1, KP(e, t, r);
      wt = !!(e.flags & 131072);
    }
  else
    wt = !1, _e && t.flags & 1048576 && zb(t, _u, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var n = t.type;
      Hl(e, t), e = t.pendingProps;
      var o = wi(t, dt.current);
      ci(t, r), o = Ih(null, t, n, e, o, r);
      var i = Fh();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ct(n) ? (i = !0, ku(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ah(t), o.updater = hc, t.stateNode = o, o._reactInternals = t, ip(t, n, e, r), t = lp(null, t, n, !0, i, r)) : (t.tag = 0, _e && i && kh(t), pt(null, t, o, r), t = t.child), t;
    case 16:
      n = t.elementType;
      e: {
        switch (Hl(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = lT(n), e = ur(n, e), o) {
          case 0:
            t = sp(null, t, n, e, r);
            break e;
          case 1:
            t = bg(null, t, n, e, r);
            break e;
          case 11:
            t = gg(null, t, n, e, r);
            break e;
          case 14:
            t = yg(null, t, n, ur(n.type, e), r);
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
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : ur(n, o), sp(e, t, n, o, r);
    case 1:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : ur(n, o), bg(e, t, n, o, r);
    case 3:
      e: {
        if (hS(t), e === null)
          throw Error(O(387));
        n = t.pendingProps, i = t.memoizedState, o = i.element, jb(e, t), Eu(t, n, null, r);
        var a = t.memoizedState;
        if (n = a.element, i.isDehydrated)
          if (i = { element: n, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Pi(Error(O(423)), t), t = Sg(e, t, n, r, o);
            break e;
          } else if (n !== o) {
            o = Pi(Error(O(424)), t), t = Sg(e, t, n, r, o);
            break e;
          } else
            for (Ot = Pn(t.stateNode.containerInfo.firstChild), zt = t, _e = !0, dr = null, r = Vb(t, null, n, r), t.child = r; r; )
              r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if (ki(), n === o) {
            t = tn(e, t, r);
            break e;
          }
          pt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Wb(t), e === null && rp(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, Qf(n, o) ? a = null : i !== null && Qf(n, i) && (t.flags |= 32), pS(e, t), pt(e, t, a, r), t.child;
    case 6:
      return e === null && rp(t), null;
    case 13:
      return mS(e, t, r);
    case 4:
      return Rh(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Ci(t, null, n, r) : pt(e, t, n, r), t.child;
    case 11:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : ur(n, o), gg(e, t, n, o, r);
    case 7:
      return pt(e, t, t.pendingProps, r), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, me(Pu, n._currentValue), n._currentValue = a, i !== null)
          if (mr(i.value, a)) {
            if (i.children === o.children && !kt.current) {
              t = tn(e, t, r);
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
                      l = Yr(-1, r & -r), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                      }
                    }
                    i.lanes |= r, l = i.alternate, l !== null && (l.lanes |= r), np(
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
                a.lanes |= r, s = a.alternate, s !== null && (s.lanes |= r), np(a, r, t), a = i.sibling;
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
        pt(e, t, o.children, r), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, n = t.pendingProps.children, ci(t, r), o = nr(o), n = n(o), t.flags |= 1, pt(e, t, n, r), t.child;
    case 14:
      return n = t.type, o = ur(n, t.pendingProps), o = ur(n.type, o), yg(e, t, n, o, r);
    case 15:
      return dS(e, t, t.type, t.pendingProps, r);
    case 17:
      return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : ur(n, o), Hl(e, t), t.tag = 1, Ct(n) ? (e = !0, ku(t)) : e = !1, ci(t, r), Bb(t, n, o), ip(t, n, o, r), lp(null, t, n, !0, e, r);
    case 19:
      return vS(e, t, r);
    case 22:
      return fS(e, t, r);
  }
  throw Error(O(156, t.tag));
};
function MS(e, t) {
  return ob(e, t);
}
function sT(e, t, r, n) {
  this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Zt(e, t, r, n) {
  return new sT(e, t, r, n);
}
function Gh(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function lT(e) {
  if (typeof e == "function")
    return Gh(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === dh)
      return 11;
    if (e === fh)
      return 14;
  }
  return 2;
}
function An(e, t) {
  var r = e.alternate;
  return r === null ? (r = Zt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
}
function Yl(e, t, r, n, o, i) {
  var a = 2;
  if (n = e, typeof e == "function")
    Gh(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case jo:
          return uo(r.children, o, i, t);
        case ch:
          a = 8, o |= 8;
          break;
        case $f:
          return e = Zt(12, r, t, o | 2), e.elementType = $f, e.lanes = i, e;
        case Af:
          return e = Zt(13, r, t, o), e.elementType = Af, e.lanes = i, e;
        case Rf:
          return e = Zt(19, r, t, o), e.elementType = Rf, e.lanes = i, e;
        case N1:
          return yc(r, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case L1:
                a = 10;
                break e;
              case B1:
                a = 9;
                break e;
              case dh:
                a = 11;
                break e;
              case fh:
                a = 14;
                break e;
              case hn:
                a = 16, n = null;
                break e;
            }
          throw Error(O(130, e == null ? e : typeof e, ""));
      }
  return t = Zt(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t;
}
function uo(e, t, r, n) {
  return e = Zt(7, e, n, t), e.lanes = r, e;
}
function yc(e, t, r, n) {
  return e = Zt(22, e, n, t), e.elementType = N1, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
}
function Id(e, t, r) {
  return e = Zt(6, e, null, t), e.lanes = r, e;
}
function Fd(e, t, r) {
  return t = Zt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function uT(e, t, r, n, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vd(0), this.expirationTimes = vd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vd(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Kh(e, t, r, n, o, i, a, s, l) {
  return e = new uT(e, t, r, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Zt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ah(i), e;
}
function cT(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Do, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function OS(e) {
  if (!e)
    return zn;
  e = e._reactInternals;
  e: {
    if (Co(e) !== e || e.tag !== 1)
      throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ct(t.type)) {
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
    if (Ct(r))
      return Mb(e, r, t);
  }
  return t;
}
function zS(e, t, r, n, o, i, a, s, l) {
  return e = Kh(r, n, !0, e, o, i, a, s, l), e.context = OS(null), r = e.current, n = vt(), o = $n(r), i = Yr(n, o), i.callback = t ?? null, Tn(r, i, o), e.current.lanes = o, Ts(e, o, n), _t(e, n), e;
}
function bc(e, t, r, n) {
  var o = t.current, i = vt(), a = $n(o);
  return r = OS(r), t.context === null ? t.context = r : t.pendingContext = r, t = Yr(i, a), t.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Tn(o, t, a), e !== null && (hr(e, o, a, i), Vl(e, o, a)), a;
}
function Fu(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ag(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Yh(e, t) {
  Ag(e, t), (e = e.alternate) && Ag(e, t);
}
function dT() {
  return null;
}
var IS = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qh(e) {
  this._internalRoot = e;
}
Sc.prototype.render = qh.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(O(409));
  bc(e, t, null, null);
};
Sc.prototype.unmount = qh.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    So(function() {
      bc(null, e, null, null);
    }), t[Jr] = null;
  }
};
function Sc(e) {
  this._internalRoot = e;
}
Sc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = db();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < gn.length && t !== 0 && t < gn[r].priority; r++)
      ;
    gn.splice(r, 0, e), r === 0 && pb(e);
  }
};
function Xh(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Rg() {
}
function fT(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function() {
        var u = Fu(a);
        i.call(u);
      };
    }
    var a = zS(t, n, e, 0, null, !1, !1, "", Rg);
    return e._reactRootContainer = a, e[Jr] = a.current, Ja(e.nodeType === 8 ? e.parentNode : e), So(), a;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function() {
      var u = Fu(l);
      s.call(u);
    };
  }
  var l = Kh(e, 0, !1, null, null, !1, !1, "", Rg);
  return e._reactRootContainer = l, e[Jr] = l.current, Ja(e.nodeType === 8 ? e.parentNode : e), So(function() {
    bc(t, l, r, n);
  }), l;
}
function wc(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var l = Fu(a);
        s.call(l);
      };
    }
    bc(t, a, e, o);
  } else
    a = fT(r, t, e, o, n);
  return Fu(a);
}
ub = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = pa(t.pendingLanes);
        r !== 0 && (mh(t, r | 1), _t(t, De()), !(te & 6) && (Ti = De() + 500, Ln()));
      }
      break;
    case 13:
      So(function() {
        var n = en(e, 1);
        if (n !== null) {
          var o = vt();
          hr(n, e, 1, o);
        }
      }), Yh(e, 1);
  }
};
vh = function(e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var r = vt();
      hr(t, e, 134217728, r);
    }
    Yh(e, 134217728);
  }
};
cb = function(e) {
  if (e.tag === 13) {
    var t = $n(e), r = en(e, t);
    if (r !== null) {
      var n = vt();
      hr(r, e, t, n);
    }
    Yh(e, t);
  }
};
db = function() {
  return de;
};
fb = function(e, t) {
  var r = de;
  try {
    return de = e, t();
  } finally {
    de = r;
  }
};
Nf = function(e, t, r) {
  switch (t) {
    case "input":
      if (zf(e, r), t = r.name, r.type === "radio" && t != null) {
        for (r = e; r.parentNode; )
          r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = fc(n);
            if (!o)
              throw Error(O(90));
            W1(n), zf(n, o);
          }
        }
      }
      break;
    case "textarea":
      H1(e, r);
      break;
    case "select":
      t = r.value, t != null && ai(e, !!r.multiple, t, !1);
  }
};
Z1 = Wh;
J1 = So;
var pT = { usingClientEntryPoint: !1, Events: [$s, Vo, fc, X1, Q1, Wh] }, ra = { findFiberByHostInstance: no, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, hT = { bundleType: ra.bundleType, version: ra.version, rendererPackageName: ra.rendererPackageName, rendererConfig: ra.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: an.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = rb(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ra.findFiberByHostInstance || dT, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber)
    try {
      lc = vl.inject(hT), Tr = vl;
    } catch {
    }
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pT;
Bt.createPortal = function(e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xh(t))
    throw Error(O(200));
  return cT(e, t, null, r);
};
Bt.createRoot = function(e, t) {
  if (!Xh(e))
    throw Error(O(299));
  var r = !1, n = "", o = IS;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Kh(e, 1, !1, null, null, r, !1, n, o), e[Jr] = t.current, Ja(e.nodeType === 8 ? e.parentNode : e), new qh(t);
};
Bt.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = rb(t), e = e === null ? null : e.stateNode, e;
};
Bt.flushSync = function(e) {
  return So(e);
};
Bt.hydrate = function(e, t, r) {
  if (!xc(t))
    throw Error(O(200));
  return wc(null, e, t, !0, r);
};
Bt.hydrateRoot = function(e, t, r) {
  if (!Xh(e))
    throw Error(O(405));
  var n = r != null && r.hydratedSources || null, o = !1, i = "", a = IS;
  if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = zS(t, null, e, 1, r ?? null, o, !1, i, a), e[Jr] = t.current, Ja(e), n)
    for (e = 0; e < n.length; e++)
      r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(
        r,
        o
      );
  return new Sc(t);
};
Bt.render = function(e, t, r) {
  if (!xc(t))
    throw Error(O(200));
  return wc(null, e, t, !1, r);
};
Bt.unmountComponentAtNode = function(e) {
  if (!xc(e))
    throw Error(O(40));
  return e._reactRootContainer ? (So(function() {
    wc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Jr] = null;
    });
  }), !0) : !1;
};
Bt.unstable_batchedUpdates = Wh;
Bt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
  if (!xc(r))
    throw Error(O(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(O(38));
  return wc(e, t, r, !1, n);
};
Bt.version = "18.2.0-next-9e3b772b8-20220608";
function FS() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FS);
    } catch (e) {
      console.error(e);
    }
}
FS(), z1.exports = Bt;
var Qh = z1.exports, Mg = Qh;
Tf.createRoot = Mg.createRoot, Tf.hydrateRoot = Mg.hydrateRoot;
var DS = "Expected a function", Og = NaN, mT = "[object Symbol]", vT = /^\s+|\s+$/g, gT = /^[-+]0x[0-9a-f]+$/i, yT = /^0b[01]+$/i, bT = /^0o[0-7]+$/i, ST = parseInt, xT = typeof Sn == "object" && Sn && Sn.Object === Object && Sn, wT = typeof self == "object" && self && self.Object === Object && self, kT = xT || wT || Function("return this")(), CT = Object.prototype, _T = CT.toString, PT = Math.max, TT = Math.min, Dd = function() {
  return kT.Date.now();
};
function ET(e, t, r) {
  var n, o, i, a, s, l, u = 0, c = !1, d = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(DS);
  t = zg(t) || 0, Du(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? PT(zg(r.maxWait) || 0, t) : i, f = "trailing" in r ? !!r.trailing : f);
  function p(T) {
    var C = n, $ = o;
    return n = o = void 0, u = T, a = e.apply($, C), a;
  }
  function g(T) {
    return u = T, s = setTimeout(m, t), c ? p(T) : a;
  }
  function y(T) {
    var C = T - l, $ = T - u, R = t - C;
    return d ? TT(R, i - $) : R;
  }
  function x(T) {
    var C = T - l, $ = T - u;
    return l === void 0 || C >= t || C < 0 || d && $ >= i;
  }
  function m() {
    var T = Dd();
    if (x(T))
      return h(T);
    s = setTimeout(m, y(T));
  }
  function h(T) {
    return s = void 0, f && n ? p(T) : (n = o = void 0, a);
  }
  function v() {
    s !== void 0 && clearTimeout(s), u = 0, n = l = o = s = void 0;
  }
  function w() {
    return s === void 0 ? a : h(Dd());
  }
  function k() {
    var T = Dd(), C = x(T);
    if (n = arguments, o = this, l = T, C) {
      if (s === void 0)
        return g(l);
      if (d)
        return s = setTimeout(m, t), p(l);
    }
    return s === void 0 && (s = setTimeout(m, t)), a;
  }
  return k.cancel = v, k.flush = w, k;
}
function $T(e, t, r) {
  var n = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(DS);
  return Du(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), ET(e, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
function Du(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function AT(e) {
  return !!e && typeof e == "object";
}
function RT(e) {
  return typeof e == "symbol" || AT(e) && _T.call(e) == mT;
}
function zg(e) {
  if (typeof e == "number")
    return e;
  if (RT(e))
    return Og;
  if (Du(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Du(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(vT, "");
  var r = yT.test(e);
  return r || bT.test(e) ? ST(e.slice(2), r ? 2 : 8) : gT.test(e) ? Og : +e;
}
var MT = $T;
const OT = /* @__PURE__ */ _s(MT);
function zT(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function IT(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var FT = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(IT(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = zT(o);
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
}(), lt = "-ms-", ju = "-moz-", ae = "-webkit-", jS = "comm", Zh = "rule", Jh = "decl", DT = "@import", LS = "@keyframes", jT = "@layer", LT = Math.abs, kc = String.fromCharCode, BT = Object.assign;
function NT(e, t) {
  return tt(e, 0) ^ 45 ? (((t << 2 ^ tt(e, 0)) << 2 ^ tt(e, 1)) << 2 ^ tt(e, 2)) << 2 ^ tt(e, 3) : 0;
}
function BS(e) {
  return e.trim();
}
function VT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function se(e, t, r) {
  return e.replace(t, r);
}
function Sp(e, t) {
  return e.indexOf(t);
}
function tt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ls(e, t, r) {
  return e.slice(t, r);
}
function kr(e) {
  return e.length;
}
function em(e) {
  return e.length;
}
function gl(e, t) {
  return t.push(e), e;
}
function WT(e, t) {
  return e.map(t).join("");
}
var Cc = 1, Ei = 1, NS = 0, Et = 0, Be = 0, Bi = "";
function _c(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Cc, column: Ei, length: a, return: "" };
}
function na(e, t) {
  return BT(_c("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function UT() {
  return Be;
}
function HT() {
  return Be = Et > 0 ? tt(Bi, --Et) : 0, Ei--, Be === 10 && (Ei = 1, Cc--), Be;
}
function It() {
  return Be = Et < NS ? tt(Bi, Et++) : 0, Ei++, Be === 10 && (Ei = 1, Cc++), Be;
}
function $r() {
  return tt(Bi, Et);
}
function ql() {
  return Et;
}
function Rs(e, t) {
  return ls(Bi, e, t);
}
function us(e) {
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
function VS(e) {
  return Cc = Ei = 1, NS = kr(Bi = e), Et = 0, [];
}
function WS(e) {
  return Bi = "", e;
}
function Xl(e) {
  return BS(Rs(Et - 1, xp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function GT(e) {
  for (; (Be = $r()) && Be < 33; )
    It();
  return us(e) > 2 || us(Be) > 3 ? "" : " ";
}
function KT(e, t) {
  for (; --t && It() && !(Be < 48 || Be > 102 || Be > 57 && Be < 65 || Be > 70 && Be < 97); )
    ;
  return Rs(e, ql() + (t < 6 && $r() == 32 && It() == 32));
}
function xp(e) {
  for (; It(); )
    switch (Be) {
      case e:
        return Et;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xp(Be);
        break;
      case 40:
        e === 41 && xp(e);
        break;
      case 92:
        It();
        break;
    }
  return Et;
}
function YT(e, t) {
  for (; It() && e + Be !== 57; )
    if (e + Be === 84 && $r() === 47)
      break;
  return "/*" + Rs(t, Et - 1) + "*" + kc(e === 47 ? e : It());
}
function qT(e) {
  for (; !us($r()); )
    It();
  return Rs(e, Et);
}
function XT(e) {
  return WS(Ql("", null, null, null, [""], e = VS(e), 0, [0], e));
}
function Ql(e, t, r, n, o, i, a, s, l) {
  for (var u = 0, c = 0, d = a, f = 0, p = 0, g = 0, y = 1, x = 1, m = 1, h = 0, v = "", w = o, k = i, T = n, C = v; x; )
    switch (g = h, h = It()) {
      case 40:
        if (g != 108 && tt(C, d - 1) == 58) {
          Sp(C += se(Xl(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Xl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += GT(g);
        break;
      case 92:
        C += KT(ql() - 1, 7);
        continue;
      case 47:
        switch ($r()) {
          case 42:
          case 47:
            gl(QT(YT(It(), ql()), t, r), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * y:
        s[u++] = kr(C) * m;
      case 125 * y:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (C = se(C, /\f/g, "")), p > 0 && kr(C) - d && gl(p > 32 ? Fg(C + ";", n, r, d - 1) : Fg(se(C, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            C += ";";
          default:
            if (gl(T = Ig(C, t, r, u, c, o, s, v, w = [], k = [], d), i), h === 123)
              if (c === 0)
                Ql(C, t, T, T, w, i, d, s, k);
              else
                switch (f === 99 && tt(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ql(e, T, T, n && gl(Ig(e, T, T, 0, 0, o, s, v, o, w = [], d), k), o, k, d, s, n ? w : k);
                    break;
                  default:
                    Ql(C, T, T, T, [""], k, 0, s, k);
                }
        }
        u = c = p = 0, y = m = 1, v = C = "", d = a;
        break;
      case 58:
        d = 1 + kr(C), p = g;
      default:
        if (y < 1) {
          if (h == 123)
            --y;
          else if (h == 125 && y++ == 0 && HT() == 125)
            continue;
        }
        switch (C += kc(h), h * y) {
          case 38:
            m = c > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            s[u++] = (kr(C) - 1) * m, m = 1;
            break;
          case 64:
            $r() === 45 && (C += Xl(It())), f = $r(), c = d = kr(v = C += qT(ql())), h++;
            break;
          case 45:
            g === 45 && kr(C) == 2 && (y = 0);
        }
    }
  return i;
}
function Ig(e, t, r, n, o, i, a, s, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], p = em(f), g = 0, y = 0, x = 0; g < n; ++g)
    for (var m = 0, h = ls(e, d + 1, d = LT(y = a[g])), v = e; m < p; ++m)
      (v = BS(y > 0 ? f[m] + " " + h : se(h, /&\f/g, f[m]))) && (l[x++] = v);
  return _c(e, t, r, o === 0 ? Zh : s, l, u, c);
}
function QT(e, t, r) {
  return _c(e, t, r, jS, kc(UT()), ls(e, 2, -2), 0);
}
function Fg(e, t, r, n) {
  return _c(e, t, r, Jh, ls(e, 0, n), ls(e, n + 1, -1), n);
}
function fi(e, t) {
  for (var r = "", n = em(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function ZT(e, t, r, n) {
  switch (e.type) {
    case jT:
      if (e.children.length)
        break;
    case DT:
    case Jh:
      return e.return = e.return || e.value;
    case jS:
      return "";
    case LS:
      return e.return = e.value + "{" + fi(e.children, n) + "}";
    case Zh:
      e.value = e.props.join(",");
  }
  return kr(r = fi(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function JT(e) {
  var t = em(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function eE(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Dg = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function US(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var tE = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = $r(), o === 38 && i === 12 && (r[n] = 1), !us(i); )
    It();
  return Rs(t, Et);
}, rE = function(t, r) {
  var n = -1, o = 44;
  do
    switch (us(o)) {
      case 0:
        o === 38 && $r() === 12 && (r[n] = 1), t[n] += tE(Et - 1, r, n);
        break;
      case 2:
        t[n] += Xl(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = $r() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += kc(o);
    }
  while (o = It());
  return t;
}, nE = function(t, r) {
  return WS(rE(VS(t), r));
}, jg = /* @__PURE__ */ new WeakMap(), oE = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !jg.get(n)) && !o) {
      jg.set(t, !0);
      for (var i = [], a = nE(r, i), s = n.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, iE = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function HS(e, t) {
  switch (NT(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
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
      return ae + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + ju + e + lt + e + e;
    case 6828:
    case 4268:
      return ae + e + lt + e + e;
    case 6165:
      return ae + e + lt + "flex-" + e + e;
    case 5187:
      return ae + e + se(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + lt + "flex-$1$2") + e;
    case 5443:
      return ae + e + lt + "flex-item-" + se(e, /flex-|-self/, "") + e;
    case 4675:
      return ae + e + lt + "flex-line-pack" + se(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ae + e + lt + se(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + lt + se(e, "basis", "preferred-size") + e;
    case 6060:
      return ae + "box-" + se(e, "-grow", "") + ae + e + lt + se(e, "grow", "positive") + e;
    case 4554:
      return ae + se(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return se(se(se(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return se(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return se(se(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return se(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
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
      if (kr(e) - 1 - t > 6)
        switch (tt(e, t + 1)) {
          case 109:
            if (tt(e, t + 4) !== 45)
              break;
          case 102:
            return se(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + ju + (tt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Sp(e, "stretch") ? HS(se(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (tt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (tt(e, kr(e) - 3 - (~Sp(e, "!important") && 10))) {
        case 107:
          return se(e, ":", ":" + ae) + e;
        case 101:
          return se(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ae + (tt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + lt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (tt(e, t + 11)) {
        case 114:
          return ae + e + lt + se(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + lt + se(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + lt + se(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ae + e + lt + e + e;
  }
  return e;
}
var aE = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Jh:
        t.return = HS(t.value, t.length);
        break;
      case LS:
        return fi([na(t, {
          value: se(t.value, "@", "@" + ae)
        })], o);
      case Zh:
        if (t.length)
          return WT(t.props, function(i) {
            switch (VT(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return fi([na(t, {
                  props: [se(i, /:(read-\w+)/, ":" + ju + "$1")]
                })], o);
              case "::placeholder":
                return fi([na(t, {
                  props: [se(i, /:(plac\w+)/, ":" + ae + "input-$1")]
                }), na(t, {
                  props: [se(i, /:(plac\w+)/, ":" + ju + "$1")]
                }), na(t, {
                  props: [se(i, /:(plac\w+)/, lt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, sE = [aE], lE = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || sE, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var x = y.getAttribute("data-emotion").split(" "), m = 1; m < x.length; m++)
        i[x[m]] = !0;
      s.push(y);
    }
  );
  var l, u = [oE, iE];
  {
    var c, d = [ZT, eE(function(y) {
      c.insert(y);
    })], f = JT(u.concat(o, d)), p = function(x) {
      return fi(XT(x), f);
    };
    l = function(x, m, h, v) {
      c = h, p(x ? x + "{" + m.styles + "}" : m.styles), v && (g.inserted[m.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new FT({
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
  return g.sheet.hydrate(s), g;
};
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xo.apply(this, arguments);
}
var GS = { exports: {} }, fe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye = typeof Symbol == "function" && Symbol.for, tm = Ye ? Symbol.for("react.element") : 60103, rm = Ye ? Symbol.for("react.portal") : 60106, Pc = Ye ? Symbol.for("react.fragment") : 60107, Tc = Ye ? Symbol.for("react.strict_mode") : 60108, Ec = Ye ? Symbol.for("react.profiler") : 60114, $c = Ye ? Symbol.for("react.provider") : 60109, Ac = Ye ? Symbol.for("react.context") : 60110, nm = Ye ? Symbol.for("react.async_mode") : 60111, Rc = Ye ? Symbol.for("react.concurrent_mode") : 60111, Mc = Ye ? Symbol.for("react.forward_ref") : 60112, Oc = Ye ? Symbol.for("react.suspense") : 60113, uE = Ye ? Symbol.for("react.suspense_list") : 60120, zc = Ye ? Symbol.for("react.memo") : 60115, Ic = Ye ? Symbol.for("react.lazy") : 60116, cE = Ye ? Symbol.for("react.block") : 60121, dE = Ye ? Symbol.for("react.fundamental") : 60117, fE = Ye ? Symbol.for("react.responder") : 60118, pE = Ye ? Symbol.for("react.scope") : 60119;
function Vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case tm:
        switch (e = e.type, e) {
          case nm:
          case Rc:
          case Pc:
          case Ec:
          case Tc:
          case Oc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ac:
              case Mc:
              case Ic:
              case zc:
              case $c:
                return e;
              default:
                return t;
            }
        }
      case rm:
        return t;
    }
  }
}
function KS(e) {
  return Vt(e) === Rc;
}
fe.AsyncMode = nm;
fe.ConcurrentMode = Rc;
fe.ContextConsumer = Ac;
fe.ContextProvider = $c;
fe.Element = tm;
fe.ForwardRef = Mc;
fe.Fragment = Pc;
fe.Lazy = Ic;
fe.Memo = zc;
fe.Portal = rm;
fe.Profiler = Ec;
fe.StrictMode = Tc;
fe.Suspense = Oc;
fe.isAsyncMode = function(e) {
  return KS(e) || Vt(e) === nm;
};
fe.isConcurrentMode = KS;
fe.isContextConsumer = function(e) {
  return Vt(e) === Ac;
};
fe.isContextProvider = function(e) {
  return Vt(e) === $c;
};
fe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tm;
};
fe.isForwardRef = function(e) {
  return Vt(e) === Mc;
};
fe.isFragment = function(e) {
  return Vt(e) === Pc;
};
fe.isLazy = function(e) {
  return Vt(e) === Ic;
};
fe.isMemo = function(e) {
  return Vt(e) === zc;
};
fe.isPortal = function(e) {
  return Vt(e) === rm;
};
fe.isProfiler = function(e) {
  return Vt(e) === Ec;
};
fe.isStrictMode = function(e) {
  return Vt(e) === Tc;
};
fe.isSuspense = function(e) {
  return Vt(e) === Oc;
};
fe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Pc || e === Rc || e === Ec || e === Tc || e === Oc || e === uE || typeof e == "object" && e !== null && (e.$$typeof === Ic || e.$$typeof === zc || e.$$typeof === $c || e.$$typeof === Ac || e.$$typeof === Mc || e.$$typeof === dE || e.$$typeof === fE || e.$$typeof === pE || e.$$typeof === cE);
};
fe.typeOf = Vt;
GS.exports = fe;
var hE = GS.exports, YS = hE, mE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qS = {};
qS[YS.ForwardRef] = mE;
qS[YS.Memo] = vE;
var gE = !0;
function yE(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var XS = function(t, r, n) {
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
  gE === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, QS = function(t, r, n) {
  XS(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function bE(e) {
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
var SE = {
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
}, xE = /[A-Z]|^ms/g, wE = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ZS = function(t) {
  return t.charCodeAt(1) === 45;
}, Lg = function(t) {
  return t != null && typeof t != "boolean";
}, jd = /* @__PURE__ */ US(function(e) {
  return ZS(e) ? e : e.replace(xE, "-$&").toLowerCase();
}), Bg = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(wE, function(n, o, i) {
          return Cr = {
            name: o,
            styles: i,
            next: Cr
          }, o;
        });
  }
  return SE[t] !== 1 && !ZS(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function cs(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Cr = {
          name: r.name,
          styles: r.styles,
          next: Cr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Cr = {
              name: n.name,
              styles: n.styles,
              next: Cr
            }, n = n.next;
        var o = r.styles + ";";
        return o;
      }
      return kE(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Cr, a = r(e);
        return Cr = i, cs(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function kE(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += cs(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Lg(a) && (n += jd(i) + ":" + Bg(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Lg(a[s]) && (n += jd(i) + ":" + Bg(i, a[s]) + ";");
      else {
        var l = cs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += jd(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var Ng = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Cr, om = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Cr = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += cs(n, r, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += cs(n, r, t[s]), o && (i += a[s]);
  Ng.lastIndex = 0;
  for (var l = "", u; (u = Ng.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    u[1];
  var c = bE(i) + l;
  return {
    name: c,
    styles: i,
    next: Cr
  };
}, CE = function(t) {
  return t();
}, JS = Pv.useInsertionEffect ? Pv.useInsertionEffect : !1, _E = JS || CE, Vg = JS || b.useLayoutEffect, ex = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ lE({
    key: "css"
  }) : null
);
ex.Provider;
var tx = function(t) {
  return /* @__PURE__ */ b.forwardRef(function(r, n) {
    var o = b.useContext(ex);
    return t(r, o, n);
  });
}, ds = /* @__PURE__ */ b.createContext({}), PE = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    return n;
  }
  return xo({}, t, r);
}, TE = /* @__PURE__ */ Dg(function(e) {
  return Dg(function(t) {
    return PE(e, t);
  });
}), EE = function(t) {
  var r = b.useContext(ds);
  return t.theme !== r && (r = TE(r)(t.theme)), /* @__PURE__ */ b.createElement(ds.Provider, {
    value: r
  }, t.children);
}, Fc = /* @__PURE__ */ tx(function(e, t) {
  var r = e.styles, n = om([r], void 0, b.useContext(ds)), o = b.useRef();
  return Vg(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Vg(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && QS(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
function $E() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return om(t);
}
var AE = function() {
  var t = $E.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, rx = String.raw, nx = rx`
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
`, RE = () => /* @__PURE__ */ E.jsx(Fc, { styles: nx }), ME = ({ scope: e = "" }) => /* @__PURE__ */ E.jsx(
  Fc,
  {
    styles: rx`
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

      ${nx}
    `
  }
);
function OE(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Wt(e = {}) {
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
        i ?? OE(n, o)
      );
      throw d.name = "ContextError", (u = Error.captureStackTrace) == null || u.call(Error, d, l), d;
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [zE, IE] = Wt({
  strict: !1,
  name: "PortalManagerContext"
});
function ox(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ E.jsx(zE, { value: { zIndex: r }, children: t });
}
ox.displayName = "PortalManager";
var fs = globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect, [ix, FE] = Wt({
  strict: !1,
  name: "PortalContext"
}), im = "chakra-portal", DE = ".chakra-portal", jE = (e) => /* @__PURE__ */ E.jsx(
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
), LE = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = b.useState(null), i = b.useRef(null), [, a] = b.useState({});
  b.useEffect(() => a({}), []);
  const s = FE(), l = IE();
  fs(() => {
    if (!n)
      return;
    const c = n.ownerDocument, d = t ? s ?? c.body : c.body;
    if (!d)
      return;
    i.current = c.createElement("div"), i.current.className = im, d.appendChild(i.current), a({});
    const f = i.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const u = l != null && l.zIndex ? /* @__PURE__ */ E.jsx(jE, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return i.current ? Qh.createPortal(
    /* @__PURE__ */ E.jsx(ix, { value: i.current, children: u }),
    i.current
  ) : /* @__PURE__ */ E.jsx(
    "span",
    {
      ref: (c) => {
        c && o(c);
      }
    }
  );
}, BE = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, i = o ?? (typeof window < "u" ? document.body : void 0), a = b.useMemo(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = im), l;
  }, [o]), [, s] = b.useState({});
  return fs(() => s({}), []), fs(() => {
    if (!(!a || !i))
      return i.appendChild(a), () => {
        i.removeChild(a);
      };
  }, [a, i]), i && a ? Qh.createPortal(
    /* @__PURE__ */ E.jsx(ix, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function Ms(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ E.jsx(BE, { containerRef: r, ...n }) : /* @__PURE__ */ E.jsx(LE, { ...n });
}
Ms.className = im;
Ms.selector = DE;
Ms.displayName = "Portal";
function am() {
  const e = b.useContext(
    ds
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var sm = b.createContext({});
sm.displayName = "ColorModeContext";
function Os() {
  const e = b.useContext(sm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var yl = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function NE(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? yl.dark : yl.light), document.body.classList.remove(n ? yl.light : yl.dark);
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
var VE = "chakra-ui-color-mode";
function WE(e) {
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
var UE = WE(VE), Wg = () => {
};
function Ug(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function ax(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: i
    } = {},
    colorModeManager: a = UE
  } = e, s = o === "dark" ? "dark" : "light", [l, u] = b.useState(
    () => Ug(a, s)
  ), [c, d] = b.useState(
    () => Ug(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: g, addListener: y } = b.useMemo(
    () => NE({ preventTransition: i }),
    [i]
  ), x = o === "system" && !l ? c : l, m = b.useCallback(
    (w) => {
      const k = w === "system" ? f() : w;
      u(k), p(k === "dark"), g(k), a.set(k);
    },
    [a, f, p, g]
  );
  fs(() => {
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
      return y(m);
  }, [n, y, m]);
  const v = b.useMemo(
    () => ({
      colorMode: t ?? x,
      toggleColorMode: t ? Wg : h,
      setColorMode: t ? Wg : m,
      forced: t !== void 0
    }),
    [x, h, m, t]
  );
  return /* @__PURE__ */ E.jsx(sm.Provider, { value: v, children: r });
}
ax.displayName = "ColorModeProvider";
var HE = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function GE(e) {
  let t = e;
  return HE.has(t) || (t = "light"), t;
}
function KE(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = GE(t), i = r === "cookie", a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? a : s}`.trim();
}
function YE(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ E.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: KE(e) }
    }
  );
}
function qE() {
  const e = Os(), t = am();
  return { ...e, theme: t };
}
var we = (...e) => e.filter(Boolean).join(" ");
function tr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Hr(e, ...t) {
  return XE(e) ? e(...t) : e;
}
var XE = (e) => typeof e == "function", Sr = (e) => e ? "" : void 0, Ld = (e) => e ? !0 : void 0;
function et(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function QE(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Lu = { exports: {} };
Lu.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", u = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", g = "[object GeneratorFunction]", y = "[object Map]", x = "[object Number]", m = "[object Null]", h = "[object Object]", v = "[object Proxy]", w = "[object RegExp]", k = "[object Set]", T = "[object String]", C = "[object Undefined]", $ = "[object WeakMap]", R = "[object ArrayBuffer]", M = "[object DataView]", j = "[object Float32Array]", ee = "[object Float64Array]", H = "[object Int8Array]", G = "[object Int16Array]", K = "[object Int32Array]", Y = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", z = "[object Uint16Array]", D = "[object Uint32Array]", B = /[\\^$.*+?()[\]{}|]/g, L = /^\[object .+?Constructor\]$/, q = /^(?:0|[1-9]\d*)$/, U = {};
  U[j] = U[ee] = U[H] = U[G] = U[K] = U[Y] = U[oe] = U[z] = U[D] = !0, U[s] = U[l] = U[R] = U[c] = U[M] = U[d] = U[f] = U[p] = U[y] = U[x] = U[h] = U[w] = U[k] = U[T] = U[$] = !1;
  var he = typeof Sn == "object" && Sn && Sn.Object === Object && Sn, Me = typeof self == "object" && self && self.Object === Object && self, ce = he || Me || Function("return this")(), ye = t && !t.nodeType && t, Te = ye && !0 && e && !e.nodeType && e, Oe = Te && Te.exports === ye, qe = Oe && he.process, Xe = function() {
    try {
      var S = Te && Te.require && Te.require("util").types;
      return S || qe && qe.binding && qe.binding("util");
    } catch {
    }
  }(), Ir = Xe && Xe.isTypedArray;
  function Fr(S, _, A) {
    switch (A.length) {
      case 0:
        return S.call(_);
      case 1:
        return S.call(_, A[0]);
      case 2:
        return S.call(_, A[0], A[1]);
      case 3:
        return S.call(_, A[0], A[1], A[2]);
    }
    return S.apply(_, A);
  }
  function Ui(S, _) {
    for (var A = -1, I = Array(S); ++A < S; )
      I[A] = _(A);
    return I;
  }
  function re(S) {
    return function(_) {
      return S(_);
    };
  }
  function ot(S, _) {
    return S == null ? void 0 : S[_];
  }
  function Fe(S, _) {
    return function(A) {
      return S(_(A));
    };
  }
  var At = Array.prototype, sn = Function.prototype, it = Object.prototype, vr = ce["__core-js_shared__"], ln = sn.toString, Ut = it.hasOwnProperty, To = function() {
    var S = /[^.]+$/.exec(vr && vr.keys && vr.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), Hi = it.toString, Ks = ln.call(Object), Ys = RegExp(
    "^" + ln.call(Ut).replace(B, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Wn = Oe ? ce.Buffer : void 0, av = ce.Symbol, sv = ce.Uint8Array, lv = Wn ? Wn.allocUnsafe : void 0, uv = Fe(Object.getPrototypeOf, Object), cv = Object.create, BC = it.propertyIsEnumerable, NC = At.splice, Un = av ? av.toStringTag : void 0, qs = function() {
    try {
      var S = nd(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), VC = Wn ? Wn.isBuffer : void 0, dv = Math.max, WC = Date.now, fv = nd(ce, "Map"), Gi = nd(Object, "create"), UC = /* @__PURE__ */ function() {
    function S() {
    }
    return function(_) {
      if (!Gn(_))
        return {};
      if (cv)
        return cv(_);
      S.prototype = _;
      var A = new S();
      return S.prototype = void 0, A;
    };
  }();
  function Hn(S) {
    var _ = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++_ < A; ) {
      var I = S[_];
      this.set(I[0], I[1]);
    }
  }
  function HC() {
    this.__data__ = Gi ? Gi(null) : {}, this.size = 0;
  }
  function GC(S) {
    var _ = this.has(S) && delete this.__data__[S];
    return this.size -= _ ? 1 : 0, _;
  }
  function KC(S) {
    var _ = this.__data__;
    if (Gi) {
      var A = _[S];
      return A === n ? void 0 : A;
    }
    return Ut.call(_, S) ? _[S] : void 0;
  }
  function YC(S) {
    var _ = this.__data__;
    return Gi ? _[S] !== void 0 : Ut.call(_, S);
  }
  function qC(S, _) {
    var A = this.__data__;
    return this.size += this.has(S) ? 0 : 1, A[S] = Gi && _ === void 0 ? n : _, this;
  }
  Hn.prototype.clear = HC, Hn.prototype.delete = GC, Hn.prototype.get = KC, Hn.prototype.has = YC, Hn.prototype.set = qC;
  function Dr(S) {
    var _ = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++_ < A; ) {
      var I = S[_];
      this.set(I[0], I[1]);
    }
  }
  function XC() {
    this.__data__ = [], this.size = 0;
  }
  function QC(S) {
    var _ = this.__data__, A = Xs(_, S);
    if (A < 0)
      return !1;
    var I = _.length - 1;
    return A == I ? _.pop() : NC.call(_, A, 1), --this.size, !0;
  }
  function ZC(S) {
    var _ = this.__data__, A = Xs(_, S);
    return A < 0 ? void 0 : _[A][1];
  }
  function JC(S) {
    return Xs(this.__data__, S) > -1;
  }
  function e2(S, _) {
    var A = this.__data__, I = Xs(A, S);
    return I < 0 ? (++this.size, A.push([S, _])) : A[I][1] = _, this;
  }
  Dr.prototype.clear = XC, Dr.prototype.delete = QC, Dr.prototype.get = ZC, Dr.prototype.has = JC, Dr.prototype.set = e2;
  function Eo(S) {
    var _ = -1, A = S == null ? 0 : S.length;
    for (this.clear(); ++_ < A; ) {
      var I = S[_];
      this.set(I[0], I[1]);
    }
  }
  function t2() {
    this.size = 0, this.__data__ = {
      hash: new Hn(),
      map: new (fv || Dr)(),
      string: new Hn()
    };
  }
  function r2(S) {
    var _ = Zs(this, S).delete(S);
    return this.size -= _ ? 1 : 0, _;
  }
  function n2(S) {
    return Zs(this, S).get(S);
  }
  function o2(S) {
    return Zs(this, S).has(S);
  }
  function i2(S, _) {
    var A = Zs(this, S), I = A.size;
    return A.set(S, _), this.size += A.size == I ? 0 : 1, this;
  }
  Eo.prototype.clear = t2, Eo.prototype.delete = r2, Eo.prototype.get = n2, Eo.prototype.has = o2, Eo.prototype.set = i2;
  function $o(S) {
    var _ = this.__data__ = new Dr(S);
    this.size = _.size;
  }
  function a2() {
    this.__data__ = new Dr(), this.size = 0;
  }
  function s2(S) {
    var _ = this.__data__, A = _.delete(S);
    return this.size = _.size, A;
  }
  function l2(S) {
    return this.__data__.get(S);
  }
  function u2(S) {
    return this.__data__.has(S);
  }
  function c2(S, _) {
    var A = this.__data__;
    if (A instanceof Dr) {
      var I = A.__data__;
      if (!fv || I.length < r - 1)
        return I.push([S, _]), this.size = ++A.size, this;
      A = this.__data__ = new Eo(I);
    }
    return A.set(S, _), this.size = A.size, this;
  }
  $o.prototype.clear = a2, $o.prototype.delete = s2, $o.prototype.get = l2, $o.prototype.has = u2, $o.prototype.set = c2;
  function d2(S, _) {
    var A = ad(S), I = !A && id(S), J = !A && !I && gv(S), pe = !A && !I && !J && bv(S), ke = A || I || J || pe, Q = ke ? Ui(S.length, String) : [], Ce = Q.length;
    for (var Ht in S)
      (_ || Ut.call(S, Ht)) && !(ke && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ht == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      J && (Ht == "offset" || Ht == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      pe && (Ht == "buffer" || Ht == "byteLength" || Ht == "byteOffset") || // Skip index properties.
      mv(Ht, Ce))) && Q.push(Ht);
    return Q;
  }
  function td(S, _, A) {
    (A !== void 0 && !Js(S[_], A) || A === void 0 && !(_ in S)) && rd(S, _, A);
  }
  function f2(S, _, A) {
    var I = S[_];
    (!(Ut.call(S, _) && Js(I, A)) || A === void 0 && !(_ in S)) && rd(S, _, A);
  }
  function Xs(S, _) {
    for (var A = S.length; A--; )
      if (Js(S[A][0], _))
        return A;
    return -1;
  }
  function rd(S, _, A) {
    _ == "__proto__" && qs ? qs(S, _, {
      configurable: !0,
      enumerable: !0,
      value: A,
      writable: !0
    }) : S[_] = A;
  }
  var p2 = P2();
  function Qs(S) {
    return S == null ? S === void 0 ? C : m : Un && Un in Object(S) ? T2(S) : O2(S);
  }
  function pv(S) {
    return Ki(S) && Qs(S) == s;
  }
  function h2(S) {
    if (!Gn(S) || R2(S))
      return !1;
    var _ = ld(S) ? Ys : L;
    return _.test(D2(S));
  }
  function m2(S) {
    return Ki(S) && yv(S.length) && !!U[Qs(S)];
  }
  function v2(S) {
    if (!Gn(S))
      return M2(S);
    var _ = vv(S), A = [];
    for (var I in S)
      I == "constructor" && (_ || !Ut.call(S, I)) || A.push(I);
    return A;
  }
  function hv(S, _, A, I, J) {
    S !== _ && p2(_, function(pe, ke) {
      if (J || (J = new $o()), Gn(pe))
        g2(S, _, ke, A, hv, I, J);
      else {
        var Q = I ? I(od(S, ke), pe, ke + "", S, _, J) : void 0;
        Q === void 0 && (Q = pe), td(S, ke, Q);
      }
    }, Sv);
  }
  function g2(S, _, A, I, J, pe, ke) {
    var Q = od(S, A), Ce = od(_, A), Ht = ke.get(Ce);
    if (Ht) {
      td(S, A, Ht);
      return;
    }
    var Rt = pe ? pe(Q, Ce, A + "", S, _, ke) : void 0, Yi = Rt === void 0;
    if (Yi) {
      var ud = ad(Ce), cd = !ud && gv(Ce), wv = !ud && !cd && bv(Ce);
      Rt = Ce, ud || cd || wv ? ad(Q) ? Rt = Q : j2(Q) ? Rt = k2(Q) : cd ? (Yi = !1, Rt = S2(Ce, !0)) : wv ? (Yi = !1, Rt = w2(Ce, !0)) : Rt = [] : L2(Ce) || id(Ce) ? (Rt = Q, id(Q) ? Rt = B2(Q) : (!Gn(Q) || ld(Q)) && (Rt = E2(Ce))) : Yi = !1;
    }
    Yi && (ke.set(Ce, Rt), J(Rt, Ce, I, pe, ke), ke.delete(Ce)), td(S, A, Rt);
  }
  function y2(S, _) {
    return I2(z2(S, _, xv), S + "");
  }
  var b2 = qs ? function(S, _) {
    return qs(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: V2(_),
      writable: !0
    });
  } : xv;
  function S2(S, _) {
    if (_)
      return S.slice();
    var A = S.length, I = lv ? lv(A) : new S.constructor(A);
    return S.copy(I), I;
  }
  function x2(S) {
    var _ = new S.constructor(S.byteLength);
    return new sv(_).set(new sv(S)), _;
  }
  function w2(S, _) {
    var A = _ ? x2(S.buffer) : S.buffer;
    return new S.constructor(A, S.byteOffset, S.length);
  }
  function k2(S, _) {
    var A = -1, I = S.length;
    for (_ || (_ = Array(I)); ++A < I; )
      _[A] = S[A];
    return _;
  }
  function C2(S, _, A, I) {
    var J = !A;
    A || (A = {});
    for (var pe = -1, ke = _.length; ++pe < ke; ) {
      var Q = _[pe], Ce = I ? I(A[Q], S[Q], Q, A, S) : void 0;
      Ce === void 0 && (Ce = S[Q]), J ? rd(A, Q, Ce) : f2(A, Q, Ce);
    }
    return A;
  }
  function _2(S) {
    return y2(function(_, A) {
      var I = -1, J = A.length, pe = J > 1 ? A[J - 1] : void 0, ke = J > 2 ? A[2] : void 0;
      for (pe = S.length > 3 && typeof pe == "function" ? (J--, pe) : void 0, ke && $2(A[0], A[1], ke) && (pe = J < 3 ? void 0 : pe, J = 1), _ = Object(_); ++I < J; ) {
        var Q = A[I];
        Q && S(_, Q, I, pe);
      }
      return _;
    });
  }
  function P2(S) {
    return function(_, A, I) {
      for (var J = -1, pe = Object(_), ke = I(_), Q = ke.length; Q--; ) {
        var Ce = ke[S ? Q : ++J];
        if (A(pe[Ce], Ce, pe) === !1)
          break;
      }
      return _;
    };
  }
  function Zs(S, _) {
    var A = S.__data__;
    return A2(_) ? A[typeof _ == "string" ? "string" : "hash"] : A.map;
  }
  function nd(S, _) {
    var A = ot(S, _);
    return h2(A) ? A : void 0;
  }
  function T2(S) {
    var _ = Ut.call(S, Un), A = S[Un];
    try {
      S[Un] = void 0;
      var I = !0;
    } catch {
    }
    var J = Hi.call(S);
    return I && (_ ? S[Un] = A : delete S[Un]), J;
  }
  function E2(S) {
    return typeof S.constructor == "function" && !vv(S) ? UC(uv(S)) : {};
  }
  function mv(S, _) {
    var A = typeof S;
    return _ = _ ?? a, !!_ && (A == "number" || A != "symbol" && q.test(S)) && S > -1 && S % 1 == 0 && S < _;
  }
  function $2(S, _, A) {
    if (!Gn(A))
      return !1;
    var I = typeof _;
    return (I == "number" ? sd(A) && mv(_, A.length) : I == "string" && _ in A) ? Js(A[_], S) : !1;
  }
  function A2(S) {
    var _ = typeof S;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? S !== "__proto__" : S === null;
  }
  function R2(S) {
    return !!To && To in S;
  }
  function vv(S) {
    var _ = S && S.constructor, A = typeof _ == "function" && _.prototype || it;
    return S === A;
  }
  function M2(S) {
    var _ = [];
    if (S != null)
      for (var A in Object(S))
        _.push(A);
    return _;
  }
  function O2(S) {
    return Hi.call(S);
  }
  function z2(S, _, A) {
    return _ = dv(_ === void 0 ? S.length - 1 : _, 0), function() {
      for (var I = arguments, J = -1, pe = dv(I.length - _, 0), ke = Array(pe); ++J < pe; )
        ke[J] = I[_ + J];
      J = -1;
      for (var Q = Array(_ + 1); ++J < _; )
        Q[J] = I[J];
      return Q[_] = A(ke), Fr(S, this, Q);
    };
  }
  function od(S, _) {
    if (!(_ === "constructor" && typeof S[_] == "function") && _ != "__proto__")
      return S[_];
  }
  var I2 = F2(b2);
  function F2(S) {
    var _ = 0, A = 0;
    return function() {
      var I = WC(), J = i - (I - A);
      if (A = I, J > 0) {
        if (++_ >= o)
          return arguments[0];
      } else
        _ = 0;
      return S.apply(void 0, arguments);
    };
  }
  function D2(S) {
    if (S != null) {
      try {
        return ln.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function Js(S, _) {
    return S === _ || S !== S && _ !== _;
  }
  var id = pv(/* @__PURE__ */ function() {
    return arguments;
  }()) ? pv : function(S) {
    return Ki(S) && Ut.call(S, "callee") && !BC.call(S, "callee");
  }, ad = Array.isArray;
  function sd(S) {
    return S != null && yv(S.length) && !ld(S);
  }
  function j2(S) {
    return Ki(S) && sd(S);
  }
  var gv = VC || W2;
  function ld(S) {
    if (!Gn(S))
      return !1;
    var _ = Qs(S);
    return _ == p || _ == g || _ == u || _ == v;
  }
  function yv(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= a;
  }
  function Gn(S) {
    var _ = typeof S;
    return S != null && (_ == "object" || _ == "function");
  }
  function Ki(S) {
    return S != null && typeof S == "object";
  }
  function L2(S) {
    if (!Ki(S) || Qs(S) != h)
      return !1;
    var _ = uv(S);
    if (_ === null)
      return !0;
    var A = Ut.call(_, "constructor") && _.constructor;
    return typeof A == "function" && A instanceof A && ln.call(A) == Ks;
  }
  var bv = Ir ? re(Ir) : m2;
  function B2(S) {
    return C2(S, Sv(S));
  }
  function Sv(S) {
    return sd(S) ? d2(S, !0) : v2(S);
  }
  var N2 = _2(function(S, _, A, I) {
    hv(S, _, A, I);
  });
  function V2(S) {
    return function() {
      return S;
    };
  }
  function xv(S) {
    return S;
  }
  function W2() {
    return !1;
  }
  e.exports = N2;
})(Lu, Lu.exports);
var ZE = Lu.exports;
const Jt = /* @__PURE__ */ _s(ZE);
var JE = (e) => /!(important)?$/.test(e), Hg = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, e$ = (e, t) => (r) => {
  const n = String(t), o = JE(n), i = Hg(n), a = e ? `${e}.${i}` : i;
  let s = tr(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = Hg(s), o ? `${s} !important` : s;
};
function lm(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = e$(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var bl = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Gt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = lm({
      scale: e,
      transform: t
    }), n;
  };
}
var t$ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function r$(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: t$(t),
    transform: r ? lm({
      scale: r,
      compose: n
    }) : n
  };
}
var sx = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function n$() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...sx
  ].join(" ");
}
function o$() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...sx
  ].join(" ");
}
var i$ = {
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
}, a$ = {
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
function s$(e) {
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
var l$ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, wp = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, u$ = new Set(Object.values(wp)), kp = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), c$ = (e) => e.trim();
function d$(e, t) {
  if (e == null || kp.has(e))
    return e;
  if (!(Cp(e) || kp.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...u] = a.split(",").map(c$).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0)
    return e;
  const c = l in wp ? wp[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (u$.has(f))
      return f;
    const p = f.indexOf(" "), [g, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], x = Cp(y) ? y : y && y.split(" "), m = `colors.${g}`, h = m in t.__cssMap ? t.__cssMap[m].varRef : g;
    return x ? [
      h,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : h;
  });
  return `${s}(${d.join(", ")})`;
}
var Cp = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), f$ = (e, t) => d$(e, t ?? {});
function p$(e) {
  return /^var\(--.+\)$/.test(e);
}
var h$ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, yr = (e) => (t) => `${e}(${t})`, Z = {
  filter(e) {
    return e !== "auto" ? e : i$;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : a$;
  },
  ring(e) {
    return s$(Z.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? n$() : e === "auto-gpu" ? o$() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = h$(e);
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
    if (p$(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: f$,
  blur: yr("blur"),
  opacity: yr("opacity"),
  brightness: yr("brightness"),
  contrast: yr("contrast"),
  dropShadow: yr("drop-shadow"),
  grayscale: yr("grayscale"),
  hueRotate: (e) => yr("hue-rotate")(Z.degree(e)),
  invert: yr("invert"),
  saturate: yr("saturate"),
  sepia: yr("sepia"),
  bgImage(e) {
    return e == null || Cp(e) || kp.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = l$[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, P = {
  borderWidths: Gt("borderWidths"),
  borderStyles: Gt("borderStyles"),
  colors: Gt("colors"),
  borders: Gt("borders"),
  gradients: Gt("gradients", Z.gradient),
  radii: Gt("radii", Z.px),
  space: Gt("space", bl(Z.vh, Z.px)),
  spaceT: Gt("space", bl(Z.vh, Z.px)),
  degreeT(e) {
    return { property: e, transform: Z.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: lm({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Gt("sizes", bl(Z.vh, Z.px)),
  sizesT: Gt("sizes", bl(Z.vh, Z.fraction)),
  shadows: Gt("shadows"),
  logical: r$,
  blur: Gt("blur", Z.blur)
}, Zl = {
  background: P.colors("background"),
  backgroundColor: P.colors("backgroundColor"),
  backgroundImage: P.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Z.bgClip },
  bgSize: P.prop("backgroundSize"),
  bgPosition: P.prop("backgroundPosition"),
  bg: P.colors("background"),
  bgColor: P.colors("backgroundColor"),
  bgPos: P.prop("backgroundPosition"),
  bgRepeat: P.prop("backgroundRepeat"),
  bgAttachment: P.prop("backgroundAttachment"),
  bgGradient: P.gradients("backgroundImage"),
  bgClip: { transform: Z.bgClip }
};
Object.assign(Zl, {
  bgImage: Zl.backgroundImage,
  bgImg: Zl.backgroundImage
});
var ie = {
  border: P.borders("border"),
  borderWidth: P.borderWidths("borderWidth"),
  borderStyle: P.borderStyles("borderStyle"),
  borderColor: P.colors("borderColor"),
  borderRadius: P.radii("borderRadius"),
  borderTop: P.borders("borderTop"),
  borderBlockStart: P.borders("borderBlockStart"),
  borderTopLeftRadius: P.radii("borderTopLeftRadius"),
  borderStartStartRadius: P.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: P.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: P.radii("borderTopRightRadius"),
  borderStartEndRadius: P.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: P.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: P.borders("borderRight"),
  borderInlineEnd: P.borders("borderInlineEnd"),
  borderBottom: P.borders("borderBottom"),
  borderBlockEnd: P.borders("borderBlockEnd"),
  borderBottomLeftRadius: P.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: P.radii("borderBottomRightRadius"),
  borderLeft: P.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: P.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: P.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: P.borders(["borderLeft", "borderRight"]),
  borderInline: P.borders("borderInline"),
  borderY: P.borders(["borderTop", "borderBottom"]),
  borderBlock: P.borders("borderBlock"),
  borderTopWidth: P.borderWidths("borderTopWidth"),
  borderBlockStartWidth: P.borderWidths("borderBlockStartWidth"),
  borderTopColor: P.colors("borderTopColor"),
  borderBlockStartColor: P.colors("borderBlockStartColor"),
  borderTopStyle: P.borderStyles("borderTopStyle"),
  borderBlockStartStyle: P.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: P.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: P.borderWidths("borderBlockEndWidth"),
  borderBottomColor: P.colors("borderBottomColor"),
  borderBlockEndColor: P.colors("borderBlockEndColor"),
  borderBottomStyle: P.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: P.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: P.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: P.borderWidths("borderInlineStartWidth"),
  borderLeftColor: P.colors("borderLeftColor"),
  borderInlineStartColor: P.colors("borderInlineStartColor"),
  borderLeftStyle: P.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: P.borderStyles("borderInlineStartStyle"),
  borderRightWidth: P.borderWidths("borderRightWidth"),
  borderInlineEndWidth: P.borderWidths("borderInlineEndWidth"),
  borderRightColor: P.colors("borderRightColor"),
  borderInlineEndColor: P.colors("borderInlineEndColor"),
  borderRightStyle: P.borderStyles("borderRightStyle"),
  borderInlineEndStyle: P.borderStyles("borderInlineEndStyle"),
  borderTopRadius: P.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: P.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: P.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: P.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ie, {
  rounded: ie.borderRadius,
  roundedTop: ie.borderTopRadius,
  roundedTopLeft: ie.borderTopLeftRadius,
  roundedTopRight: ie.borderTopRightRadius,
  roundedTopStart: ie.borderStartStartRadius,
  roundedTopEnd: ie.borderStartEndRadius,
  roundedBottom: ie.borderBottomRadius,
  roundedBottomLeft: ie.borderBottomLeftRadius,
  roundedBottomRight: ie.borderBottomRightRadius,
  roundedBottomStart: ie.borderEndStartRadius,
  roundedBottomEnd: ie.borderEndEndRadius,
  roundedLeft: ie.borderLeftRadius,
  roundedRight: ie.borderRightRadius,
  roundedStart: ie.borderInlineStartRadius,
  roundedEnd: ie.borderInlineEndRadius,
  borderStart: ie.borderInlineStart,
  borderEnd: ie.borderInlineEnd,
  borderTopStartRadius: ie.borderStartStartRadius,
  borderTopEndRadius: ie.borderStartEndRadius,
  borderBottomStartRadius: ie.borderEndStartRadius,
  borderBottomEndRadius: ie.borderEndEndRadius,
  borderStartRadius: ie.borderInlineStartRadius,
  borderEndRadius: ie.borderInlineEndRadius,
  borderStartWidth: ie.borderInlineStartWidth,
  borderEndWidth: ie.borderInlineEndWidth,
  borderStartColor: ie.borderInlineStartColor,
  borderEndColor: ie.borderInlineEndColor,
  borderStartStyle: ie.borderInlineStartStyle,
  borderEndStyle: ie.borderInlineEndStyle
});
var m$ = {
  color: P.colors("color"),
  textColor: P.colors("color"),
  fill: P.colors("fill"),
  stroke: P.colors("stroke")
}, _p = {
  boxShadow: P.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: P.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: P.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(_p, {
  shadow: _p.boxShadow
});
var v$ = {
  filter: { transform: Z.filter },
  blur: P.blur("--chakra-blur"),
  brightness: P.propT("--chakra-brightness", Z.brightness),
  contrast: P.propT("--chakra-contrast", Z.contrast),
  hueRotate: P.propT("--chakra-hue-rotate", Z.hueRotate),
  invert: P.propT("--chakra-invert", Z.invert),
  saturate: P.propT("--chakra-saturate", Z.saturate),
  dropShadow: P.propT("--chakra-drop-shadow", Z.dropShadow),
  backdropFilter: { transform: Z.backdropFilter },
  backdropBlur: P.blur("--chakra-backdrop-blur"),
  backdropBrightness: P.propT(
    "--chakra-backdrop-brightness",
    Z.brightness
  ),
  backdropContrast: P.propT("--chakra-backdrop-contrast", Z.contrast),
  backdropHueRotate: P.propT(
    "--chakra-backdrop-hue-rotate",
    Z.hueRotate
  ),
  backdropInvert: P.propT("--chakra-backdrop-invert", Z.invert),
  backdropSaturate: P.propT("--chakra-backdrop-saturate", Z.saturate)
}, Bu = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Z.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: P.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: P.space("gap"),
  rowGap: P.space("rowGap"),
  columnGap: P.space("columnGap")
};
Object.assign(Bu, {
  flexDir: Bu.flexDirection
});
var lx = {
  gridGap: P.space("gridGap"),
  gridColumnGap: P.space("gridColumnGap"),
  gridRowGap: P.space("gridRowGap"),
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
}, g$ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Z.outline },
  outlineOffset: !0,
  outlineColor: P.colors("outlineColor")
}, Yt = {
  width: P.sizesT("width"),
  inlineSize: P.sizesT("inlineSize"),
  height: P.sizes("height"),
  blockSize: P.sizes("blockSize"),
  boxSize: P.sizes(["width", "height"]),
  minWidth: P.sizes("minWidth"),
  minInlineSize: P.sizes("minInlineSize"),
  minHeight: P.sizes("minHeight"),
  minBlockSize: P.sizes("minBlockSize"),
  maxWidth: P.sizes("maxWidth"),
  maxInlineSize: P.sizes("maxInlineSize"),
  maxHeight: P.sizes("maxHeight"),
  maxBlockSize: P.sizes("maxBlockSize"),
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
  float: P.propT("float", Z.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Yt, {
  w: Yt.width,
  h: Yt.height,
  minW: Yt.minWidth,
  maxW: Yt.maxWidth,
  minH: Yt.minHeight,
  maxH: Yt.maxHeight,
  overscroll: Yt.overscrollBehavior,
  overscrollX: Yt.overscrollBehaviorX,
  overscrollY: Yt.overscrollBehaviorY
});
var y$ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: P.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: P.prop("listStyleImage")
};
function b$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var S$ = (e) => {
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
}, x$ = S$(b$), w$ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, k$ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Bd = (e, t, r) => {
  const n = {}, o = x$(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, C$ = {
  srOnly: {
    transform(e) {
      return e === !0 ? w$ : e === "focusable" ? k$ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Bd(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Bd(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Bd(t, e, r)
  }
}, Ra = {
  position: !0,
  pos: P.prop("position"),
  zIndex: P.prop("zIndex", "zIndices"),
  inset: P.spaceT("inset"),
  insetX: P.spaceT(["left", "right"]),
  insetInline: P.spaceT("insetInline"),
  insetY: P.spaceT(["top", "bottom"]),
  insetBlock: P.spaceT("insetBlock"),
  top: P.spaceT("top"),
  insetBlockStart: P.spaceT("insetBlockStart"),
  bottom: P.spaceT("bottom"),
  insetBlockEnd: P.spaceT("insetBlockEnd"),
  left: P.spaceT("left"),
  insetInlineStart: P.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: P.spaceT("right"),
  insetInlineEnd: P.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Ra, {
  insetStart: Ra.insetInlineStart,
  insetEnd: Ra.insetInlineEnd
});
var _$ = {
  ring: { transform: Z.ring },
  ringColor: P.colors("--chakra-ring-color"),
  ringOffset: P.prop("--chakra-ring-offset-width"),
  ringOffsetColor: P.colors("--chakra-ring-offset-color"),
  ringInset: P.prop("--chakra-ring-inset")
}, Se = {
  margin: P.spaceT("margin"),
  marginTop: P.spaceT("marginTop"),
  marginBlockStart: P.spaceT("marginBlockStart"),
  marginRight: P.spaceT("marginRight"),
  marginInlineEnd: P.spaceT("marginInlineEnd"),
  marginBottom: P.spaceT("marginBottom"),
  marginBlockEnd: P.spaceT("marginBlockEnd"),
  marginLeft: P.spaceT("marginLeft"),
  marginInlineStart: P.spaceT("marginInlineStart"),
  marginX: P.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: P.spaceT("marginInline"),
  marginY: P.spaceT(["marginTop", "marginBottom"]),
  marginBlock: P.spaceT("marginBlock"),
  padding: P.space("padding"),
  paddingTop: P.space("paddingTop"),
  paddingBlockStart: P.space("paddingBlockStart"),
  paddingRight: P.space("paddingRight"),
  paddingBottom: P.space("paddingBottom"),
  paddingBlockEnd: P.space("paddingBlockEnd"),
  paddingLeft: P.space("paddingLeft"),
  paddingInlineStart: P.space("paddingInlineStart"),
  paddingInlineEnd: P.space("paddingInlineEnd"),
  paddingX: P.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: P.space("paddingInline"),
  paddingY: P.space(["paddingTop", "paddingBottom"]),
  paddingBlock: P.space("paddingBlock")
};
Object.assign(Se, {
  m: Se.margin,
  mt: Se.marginTop,
  mr: Se.marginRight,
  me: Se.marginInlineEnd,
  marginEnd: Se.marginInlineEnd,
  mb: Se.marginBottom,
  ml: Se.marginLeft,
  ms: Se.marginInlineStart,
  marginStart: Se.marginInlineStart,
  mx: Se.marginX,
  my: Se.marginY,
  p: Se.padding,
  pt: Se.paddingTop,
  py: Se.paddingY,
  px: Se.paddingX,
  pb: Se.paddingBottom,
  pl: Se.paddingLeft,
  ps: Se.paddingInlineStart,
  paddingStart: Se.paddingInlineStart,
  pr: Se.paddingRight,
  pe: Se.paddingInlineEnd,
  paddingEnd: Se.paddingInlineEnd
});
var P$ = {
  textDecorationColor: P.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: P.shadows("textShadow")
}, T$ = {
  clipPath: !0,
  transform: P.propT("transform", Z.transform),
  transformOrigin: !0,
  translateX: P.spaceT("--chakra-translate-x"),
  translateY: P.spaceT("--chakra-translate-y"),
  skewX: P.degreeT("--chakra-skew-x"),
  skewY: P.degreeT("--chakra-skew-y"),
  scaleX: P.prop("--chakra-scale-x"),
  scaleY: P.prop("--chakra-scale-y"),
  scale: P.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: P.degreeT("--chakra-rotate")
}, E$ = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: P.prop("transitionDuration", "transition.duration"),
  transitionProperty: P.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: P.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, $$ = {
  fontFamily: P.prop("fontFamily", "fonts"),
  fontSize: P.prop("fontSize", "fontSizes", Z.px),
  fontWeight: P.prop("fontWeight", "fontWeights"),
  lineHeight: P.prop("lineHeight", "lineHeights"),
  letterSpacing: P.prop("letterSpacing", "letterSpacings"),
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
}, A$ = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: P.spaceT("scrollMargin"),
  scrollMarginTop: P.spaceT("scrollMarginTop"),
  scrollMarginBottom: P.spaceT("scrollMarginBottom"),
  scrollMarginLeft: P.spaceT("scrollMarginLeft"),
  scrollMarginRight: P.spaceT("scrollMarginRight"),
  scrollMarginX: P.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: P.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: P.spaceT("scrollPadding"),
  scrollPaddingTop: P.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: P.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: P.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: P.spaceT("scrollPaddingRight"),
  scrollPaddingX: P.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: P.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function ux(e) {
  return tr(e) && e.reference ? e.reference : String(e);
}
var Dc = (e, ...t) => t.map(ux).join(` ${e} `).replace(/calc/g, ""), Gg = (...e) => `calc(${Dc("+", ...e)})`, Kg = (...e) => `calc(${Dc("-", ...e)})`, Pp = (...e) => `calc(${Dc("*", ...e)})`, Yg = (...e) => `calc(${Dc("/", ...e)})`, qg = (e) => {
  const t = ux(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Pp(t, -1);
}, eo = Object.assign(
  (e) => ({
    add: (...t) => eo(Gg(e, ...t)),
    subtract: (...t) => eo(Kg(e, ...t)),
    multiply: (...t) => eo(Pp(e, ...t)),
    divide: (...t) => eo(Yg(e, ...t)),
    negate: () => eo(qg(e)),
    toString: () => e.toString()
  }),
  {
    add: Gg,
    subtract: Kg,
    multiply: Pp,
    divide: Yg,
    negate: qg
  }
);
function R$(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function M$(e) {
  const t = R$(e.toString());
  return z$(O$(t));
}
function O$(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function z$(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function I$(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function F$(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function D$(e, t = "") {
  return M$(`--${I$(e, t)}`);
}
function V(e, t, r) {
  const n = D$(e, r);
  return {
    variable: n,
    reference: F$(n, t)
  };
}
function j$(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = V(`${e}-${o}`, i);
      continue;
    }
    r[n] = V(`${e}-${n}`);
  }
  return r;
}
function L$(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function B$(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Tp(e) {
  if (e == null)
    return e;
  const { unitless: t } = B$(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var cx = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, um = (e) => Object.fromEntries(Object.entries(e).sort(cx));
function Xg(e) {
  const t = um(e);
  return Object.assign(Object.values(t), t);
}
function N$(e) {
  const t = Object.keys(um(e));
  return new Set(t);
}
function Qg(e) {
  var t;
  if (!e)
    return e;
  e = (t = Tp(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function ma(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Tp(e)})`), t && r.push("and", `(max-width: ${Tp(t)})`), r.join(" ");
}
function V$(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Xg(e), n = Object.entries(e).sort(cx).map(([a, s], l, u) => {
    var c;
    let [, d] = (c = u[l + 1]) != null ? c : [];
    return d = parseFloat(d) > 0 ? Qg(d) : void 0, {
      _minW: Qg(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: ma(null, d),
      minWQuery: ma(s),
      minMaxQuery: ma(s, d)
    };
  }), o = N$(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: um(e),
    asArray: Xg(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => ma(a)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(a) {
      if (!tr(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; L$(s) === null; )
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
var Qe = {
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
}, cn = (e) => dx((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), jr = (e) => dx((t) => e(t, "~ &"), "[data-peer]", ".peer"), dx = (e, ...t) => t.map(e).join(", "), jc = {
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
  _groupHover: cn(Qe.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: jr(Qe.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: cn(Qe.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: jr(Qe.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: cn(Qe.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: jr(Qe.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: cn(Qe.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: jr(Qe.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: cn(Qe.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: jr(Qe.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: cn(Qe.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: jr(Qe.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: cn(Qe.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: jr(Qe.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: cn(Qe.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: jr(Qe.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: jr(Qe.placeholderShown),
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
}, fx = Object.keys(
  jc
);
function Zg(e, t) {
  return V(String(e).replace(/\./g, "-"), void 0, t);
}
function W$(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: u } = Zg(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...g] = f, y = `${p}.-${g.join(".")}`, x = eo.negate(s), m = eo.negate(u);
        n[y] = {
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
      const g = [String(o).split(".")[0], f].join(".");
      if (!e[g])
        return f;
      const { reference: x } = Zg(g, t == null ? void 0 : t.cssVarPrefix);
      return x;
    }, d = tr(s) ? s : { default: s };
    r = Jt(
      r,
      Object.entries(d).reduce(
        (f, [p, g]) => {
          var y, x;
          if (!g)
            return f;
          const m = c(`${g}`);
          if (p === "default")
            return f[l] = m, f;
          const h = (x = (y = jc) == null ? void 0 : y[p]) != null ? x : p;
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
function U$(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function H$(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function G$(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Jg(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (G$(a) || Array.isArray(a)) {
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
var K$ = [
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
function Y$(e) {
  return H$(e, K$);
}
function q$(e) {
  return e.semanticTokens;
}
function X$(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var Q$ = (e) => fx.includes(e) || e === "default";
function Z$({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return Jg(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), Jg(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(Q$)
    }
  ), r;
}
function J$(e) {
  var t;
  const r = X$(e), n = Y$(r), o = q$(r), i = Z$({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
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
  } = W$(i, { cssVarPrefix: a });
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
    __breakpoints: V$(r.breakpoints)
  }), r;
}
var cm = Jt(
  {},
  Zl,
  ie,
  m$,
  Bu,
  Yt,
  v$,
  _$,
  g$,
  lx,
  C$,
  Ra,
  _p,
  Se,
  A$,
  $$,
  P$,
  T$,
  y$,
  E$
);
Object.assign({}, Se, Yt, Bu, lx, Ra);
var eA = [...Object.keys(cm), ...fx], tA = { ...cm, ...jc }, rA = (e) => e in tA, nA = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = Hr(e[a], t);
    if (s == null)
      continue;
    if (s = tr(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function oA(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function iA(e) {
  return /^var\(--.+\)$/.test(e);
}
var aA = (e, t) => e.startsWith("--") && typeof t == "string" && !iA(t), sA = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var u, c;
    return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef;
  }, i = (l) => {
    var u;
    return (u = o(l)) != null ? u : l;
  }, [a, s] = oA(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function lA(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, u;
    const c = Hr(i, n), d = nA(c)(n);
    let f = {};
    for (let p in d) {
      const g = d[p];
      let y = Hr(g, n);
      p in r && (p = r[p]), aA(p, y) && (y = sA(n, y));
      let x = t[p];
      if (x === !0 && (x = { property: p }), tr(y)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = Jt(
          {},
          f[p],
          o(y, !0)
        );
        continue;
      }
      let m = (u = (l = x == null ? void 0 : x.transform) == null ? void 0 : l.call(x, y, n, c)) != null ? u : y;
      m = x != null && x.processResult ? o(m, !0) : m;
      const h = Hr(x == null ? void 0 : x.property, n);
      if (!a && (x != null && x.static)) {
        const v = Hr(x.static, n);
        f = Jt({}, f, v);
      }
      if (h && Array.isArray(h)) {
        for (const v of h)
          f[v] = m;
        continue;
      }
      if (h) {
        h === "&" && tr(m) ? f = Jt({}, f, m) : f[h] = m;
        continue;
      }
      if (tr(m)) {
        f = Jt({}, f, m);
        continue;
      }
      f[p] = m;
    }
    return f;
  };
  return o;
}
var px = (e) => (t) => lA({
  theme: t,
  pseudos: jc,
  configs: cm
})(e);
function ge(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function uA(e, t) {
  if (Array.isArray(e))
    return e;
  if (tr(e))
    return t(e);
  if (e != null)
    return [e];
}
function cA(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function dA(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const u = {}, c = uA(i, t.toArrayValue);
    if (!c)
      return u;
    const d = c.length, f = d === 1, p = !!n.parts;
    for (let g = 0; g < d; g++) {
      const y = t.details[g], x = t.details[cA(c, g)], m = ma(y.minW, x == null ? void 0 : x._minW), h = Hr((s = n[o]) == null ? void 0 : s[c[g]], a);
      if (h) {
        if (p) {
          (l = n.parts) == null || l.forEach((v) => {
            Jt(u, {
              [v]: f ? h[v] : { [m]: h[v] }
            });
          });
          continue;
        }
        if (!p) {
          f ? Jt(u, h) : u[m] = h;
          continue;
        }
        u[m] = h;
      }
    }
    return u;
  };
}
function fA(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = dA(i);
    return Jt(
      {},
      Hr((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function Bn(e) {
  return U$(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var pA = [
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
function hA(e) {
  return tr(e) ? pA.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var mA = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, vA = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, gA = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, yA = {
  property: mA,
  easing: vA,
  duration: gA
}, bA = yA, SA = {
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
}, xA = SA, wA = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, kA = wA, CA = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, _A = CA, PA = {
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
}, TA = PA, EA = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, $A = EA, AA = {
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
}, RA = AA, MA = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, OA = MA, zA = {
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
}, hx = zA, mx = {
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
}, IA = {
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
}, FA = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, DA = {
  ...mx,
  ...IA,
  container: FA
}, vx = DA, jA = {
  breakpoints: _A,
  zIndices: xA,
  radii: $A,
  blur: OA,
  colors: TA,
  ...hx,
  sizes: vx,
  shadows: RA,
  space: mx,
  borders: kA,
  transition: bA
}, { defineMultiStyleConfig: LA, definePartsStyle: va } = ge([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Nr = V("stepper-indicator-size"), qo = V("stepper-icon-size"), Xo = V("stepper-title-font-size"), ga = V("stepper-description-font-size"), oa = V("stepper-accent-color"), BA = va(({ colorScheme: e }) => ({
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
    [oa.variable]: `colors.${e}.500`,
    _dark: {
      [oa.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Xo.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ga.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Xo.reference
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
    width: qo.reference,
    height: qo.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Nr.reference,
    height: Nr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: oa.reference
    },
    "&[data-status=complete]": {
      bg: oa.reference,
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
      bg: oa.reference
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
      maxHeight: `calc(100% - ${Nr.reference} - 8px)`,
      top: `calc(${Nr.reference} + 4px)`,
      insetStart: `calc(${Nr.reference} / 2 - 1px)`
    }
  }
})), NA = LA({
  baseStyle: BA,
  sizes: {
    xs: va({
      stepper: {
        [Nr.variable]: "sizes.4",
        [qo.variable]: "sizes.3",
        [Xo.variable]: "fontSizes.xs",
        [ga.variable]: "fontSizes.xs"
      }
    }),
    sm: va({
      stepper: {
        [Nr.variable]: "sizes.6",
        [qo.variable]: "sizes.4",
        [Xo.variable]: "fontSizes.sm",
        [ga.variable]: "fontSizes.xs"
      }
    }),
    md: va({
      stepper: {
        [Nr.variable]: "sizes.8",
        [qo.variable]: "sizes.5",
        [Xo.variable]: "fontSizes.md",
        [ga.variable]: "fontSizes.sm"
      }
    }),
    lg: va({
      stepper: {
        [Nr.variable]: "sizes.10",
        [qo.variable]: "sizes.6",
        [Xo.variable]: "fontSizes.lg",
        [ga.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function ue(e, t = {}) {
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
    return ue(e, t);
  }
  function i(...c) {
    for (const d of c)
      d in t || (t[d] = l(d));
    return ue(e, t);
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
var VA = ue("accordion").parts("root", "container", "button", "panel").extend("icon"), WA = ue("alert").parts("title", "description", "container").extend("icon", "spinner"), UA = ue("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), HA = ue("breadcrumb").parts("link", "item", "container").extend("separator");
ue("button").parts();
var GA = ue("checkbox").parts("control", "icon", "container").extend("label");
ue("progress").parts("track", "filledTrack").extend("label");
var KA = ue("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), YA = ue("editable").parts(
  "preview",
  "input",
  "textarea"
), qA = ue("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), XA = ue("formError").parts("text", "icon"), QA = ue("input").parts(
  "addon",
  "field",
  "element",
  "group"
), ZA = ue("list").parts("container", "item", "icon"), JA = ue("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), e5 = ue("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), t5 = ue("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
ue("pininput").parts("field");
var r5 = ue("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), n5 = ue("progress").parts(
  "label",
  "filledTrack",
  "track"
), o5 = ue("radio").parts(
  "container",
  "control",
  "label"
), i5 = ue("select").parts("field", "icon"), a5 = ue("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), s5 = ue("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), l5 = ue("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), u5 = ue("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), c5 = ue("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), d5 = ue("tag").parts(
  "container",
  "label",
  "closeButton"
), f5 = ue("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
ue("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function ao(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class p5 extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var ya = p5;
function dm(e) {
  if (typeof e != "string")
    throw new ya(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = x5.test(e) ? v5(e) : e;
  const r = g5.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(ps(s, 2), 16)), parseInt(ps(a[3] || "f", 2), 16) / 255];
  }
  const n = y5.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = b5.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = S5.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (ao(0, 100, s) !== s)
      throw new ya(e);
    if (ao(0, 100, l) !== l)
      throw new ya(e);
    return [...w5(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new ya(e);
}
function h5(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const e0 = (e) => parseInt(e.replace(/_/g, ""), 36), m5 = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = e0(t.substring(0, 3)), n = e0(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function v5(e) {
  const t = e.toLowerCase().trim(), r = m5[h5(t)];
  if (!r)
    throw new ya(e);
  return `#${r}`;
}
const ps = (e, t) => Array.from(Array(t)).map(() => e).join(""), g5 = new RegExp(`^#${ps("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), y5 = new RegExp(`^#${ps("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), b5 = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ps(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), S5 = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, x5 = /^[a-z]+$/i, t0 = (e) => Math.round(e * 255), w5 = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(t0);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, u = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, u = a) : o >= 3 && o < 4 ? (l = a, u = i) : o >= 4 && o < 5 ? (s = a, u = i) : o >= 5 && o < 6 && (s = i, u = a);
  const c = n - i / 2, d = s + c, f = l + c, p = u + c;
  return [d, f, p].map(t0);
};
function k5(e, t, r, n) {
  return `rgba(${ao(0, 255, e).toFixed()}, ${ao(0, 255, t).toFixed()}, ${ao(0, 255, r).toFixed()}, ${parseFloat(ao(0, 1, n).toFixed(3))})`;
}
function C5(e, t) {
  const [r, n, o, i] = dm(e);
  return k5(r, n, o, i - t);
}
function _5(e) {
  const [t, r, n, o] = dm(e);
  let i = (a) => {
    const s = ao(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function P5(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var T5 = (e) => Object.keys(e).length === 0, ht = (e, t, r) => {
  const n = P5(e, `colors.${t}`, t);
  try {
    return _5(n), n;
  } catch {
    return r ?? "#000000";
  }
}, E5 = (e) => {
  const [t, r, n] = dm(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, $5 = (e) => (t) => {
  const r = ht(t, e);
  return E5(r) < 128 ? "dark" : "light";
}, A5 = (e) => (t) => $5(e)(t) === "dark", $i = (e, t) => (r) => {
  const n = ht(r, e);
  return C5(n, 1 - t);
};
function r0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var R5 = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function M5(e) {
  const t = R5();
  return !e || T5(e) ? t : e.string && e.colors ? z5(e.string, e.colors) : e.string && !e.colors ? O5(e.string) : e.colors && !e.string ? I5(e.colors) : t;
}
function O5(e) {
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
function z5(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function I5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function N(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function fm(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function gx(e) {
  return tr(e) && e.reference ? e.reference : String(e);
}
var Lc = (e, ...t) => t.map(gx).join(` ${e} `).replace(/calc/g, ""), n0 = (...e) => `calc(${Lc("+", ...e)})`, o0 = (...e) => `calc(${Lc("-", ...e)})`, Ep = (...e) => `calc(${Lc("*", ...e)})`, i0 = (...e) => `calc(${Lc("/", ...e)})`, a0 = (e) => {
  const t = gx(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Ep(t, -1);
}, Vr = Object.assign(
  (e) => ({
    add: (...t) => Vr(n0(e, ...t)),
    subtract: (...t) => Vr(o0(e, ...t)),
    multiply: (...t) => Vr(Ep(e, ...t)),
    divide: (...t) => Vr(i0(e, ...t)),
    negate: () => Vr(a0(e)),
    toString: () => e.toString()
  }),
  {
    add: n0,
    subtract: o0,
    multiply: Ep,
    divide: i0,
    negate: a0
  }
);
function F5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function D5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function yx(e) {
  const t = D5(e.toString());
  return t.includes("\\.") ? e : F5(e) ? t.replace(".", "\\.") : e;
}
function j5(e, t = "") {
  return [t, yx(e)].filter(Boolean).join("-");
}
function L5(e, t) {
  return `var(${yx(e)}${t ? `, ${t}` : ""})`;
}
function B5(e, t = "") {
  return `--${j5(e, t)}`;
}
function Ue(e, t) {
  const r = B5(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: L5(r, N5(t == null ? void 0 : t.fallback))
  };
}
function N5(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: V5, definePartsStyle: Jl } = ge(l5.keys), Ma = Ue("switch-track-width"), co = Ue("switch-track-height"), Nd = Ue("switch-track-diff"), W5 = Vr.subtract(Ma, co), $p = Ue("switch-thumb-x"), ia = Ue("switch-bg"), U5 = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Ma.reference],
    height: [co.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [ia.variable]: "colors.gray.300",
    _dark: {
      [ia.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [ia.variable]: `colors.${t}.500`,
      _dark: {
        [ia.variable]: `colors.${t}.200`
      }
    },
    bg: ia.reference
  };
}, H5 = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [co.reference],
  height: [co.reference],
  _checked: {
    transform: `translateX(${$p.reference})`
  }
}, G5 = Jl((e) => ({
  container: {
    [Nd.variable]: W5,
    [$p.variable]: Nd.reference,
    _rtl: {
      [$p.variable]: Vr(Nd).negate().toString()
    }
  },
  track: U5(e),
  thumb: H5
})), K5 = {
  sm: Jl({
    container: {
      [Ma.variable]: "1.375rem",
      [co.variable]: "sizes.3"
    }
  }),
  md: Jl({
    container: {
      [Ma.variable]: "1.875rem",
      [co.variable]: "sizes.4"
    }
  }),
  lg: Jl({
    container: {
      [Ma.variable]: "2.875rem",
      [co.variable]: "sizes.6"
    }
  })
}, Y5 = V5({
  baseStyle: G5,
  sizes: K5,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: q5, definePartsStyle: pi } = ge(u5.keys), X5 = pi({
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
}), Nu = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, Q5 = pi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: N("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...Nu
    },
    td: {
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...Nu
    },
    caption: {
      color: N("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), Z5 = pi((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: N("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...Nu
    },
    td: {
      borderBottom: "1px",
      borderColor: N(`${t}.100`, `${t}.700`)(e),
      ...Nu
    },
    caption: {
      color: N("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: N(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: N(`${t}.100`, `${t}.700`)(e)
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
}), J5 = {
  simple: Q5,
  striped: Z5,
  unstyled: {}
}, eR = {
  sm: pi({
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
  md: pi({
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
  lg: pi({
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
}, tR = q5({
  baseStyle: X5,
  variants: J5,
  sizes: eR,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), xt = V("tabs-color"), fr = V("tabs-bg"), Sl = V("tabs-border-color"), { defineMultiStyleConfig: rR, definePartsStyle: Ar } = ge(c5.keys), nR = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, oR = (e) => {
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
}, iR = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, aR = {
  p: 4
}, sR = Ar((e) => ({
  root: nR(e),
  tab: oR(e),
  tablist: iR(e),
  tabpanel: aR
})), lR = {
  sm: Ar({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Ar({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Ar({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, uR = Ar((e) => {
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
        [xt.variable]: `colors.${t}.600`,
        _dark: {
          [xt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [fr.variable]: "colors.gray.200",
        _dark: {
          [fr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: xt.reference,
      bg: fr.reference
    }
  };
}), cR = Ar((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Sl.variable]: "transparent",
      _selected: {
        [xt.variable]: `colors.${t}.600`,
        [Sl.variable]: "colors.white",
        _dark: {
          [xt.variable]: `colors.${t}.300`,
          [Sl.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Sl.reference
      },
      color: xt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), dR = Ar((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [fr.variable]: "colors.gray.50",
      _dark: {
        [fr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [fr.variable]: "colors.white",
        [xt.variable]: `colors.${t}.600`,
        _dark: {
          [fr.variable]: "colors.gray.800",
          [xt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: xt.reference,
      bg: fr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), fR = Ar((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: ht(r, `${t}.700`),
        bg: ht(r, `${t}.100`)
      }
    }
  };
}), pR = Ar((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [xt.variable]: "colors.gray.600",
      _dark: {
        [xt.variable]: "inherit"
      },
      _selected: {
        [xt.variable]: "colors.white",
        [fr.variable]: `colors.${t}.600`,
        _dark: {
          [xt.variable]: "colors.gray.800",
          [fr.variable]: `colors.${t}.300`
        }
      },
      color: xt.reference,
      bg: fr.reference
    }
  };
}), hR = Ar({}), mR = {
  line: uR,
  enclosed: cR,
  "enclosed-colored": dR,
  "soft-rounded": fR,
  "solid-rounded": pR,
  unstyled: hR
}, vR = rR({
  baseStyle: sR,
  sizes: lR,
  variants: mR,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), je = j$("badge", ["bg", "color", "shadow"]), gR = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: je.bg.reference,
  color: je.color.reference,
  boxShadow: je.shadow.reference
}, yR = (e) => {
  const { colorScheme: t, theme: r } = e, n = $i(`${t}.500`, 0.6)(r);
  return {
    [je.bg.variable]: `colors.${t}.500`,
    [je.color.variable]: "colors.white",
    _dark: {
      [je.bg.variable]: n,
      [je.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, bR = (e) => {
  const { colorScheme: t, theme: r } = e, n = $i(`${t}.200`, 0.16)(r);
  return {
    [je.bg.variable]: `colors.${t}.100`,
    [je.color.variable]: `colors.${t}.800`,
    _dark: {
      [je.bg.variable]: n,
      [je.color.variable]: `colors.${t}.200`
    }
  };
}, SR = (e) => {
  const { colorScheme: t, theme: r } = e, n = $i(`${t}.200`, 0.8)(r);
  return {
    [je.color.variable]: `colors.${t}.500`,
    _dark: {
      [je.color.variable]: n
    },
    [je.shadow.variable]: `inset 0 0 0px 1px ${je.color.reference}`
  };
}, xR = {
  solid: yR,
  subtle: bR,
  outline: SR
}, Oa = {
  baseStyle: gR,
  variants: xR,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: wR, definePartsStyle: fo } = ge(d5.keys), s0 = V("tag-bg"), l0 = V("tag-color"), Vd = V("tag-shadow"), eu = V("tag-min-height"), tu = V("tag-min-width"), ru = V("tag-font-size"), nu = V("tag-padding-inline"), kR = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [l0.variable]: je.color.reference,
  [s0.variable]: je.bg.reference,
  [Vd.variable]: je.shadow.reference,
  color: l0.reference,
  bg: s0.reference,
  boxShadow: Vd.reference,
  borderRadius: "md",
  minH: eu.reference,
  minW: tu.reference,
  fontSize: ru.reference,
  px: nu.reference,
  _focusVisible: {
    [Vd.variable]: "shadows.outline"
  }
}, CR = {
  lineHeight: 1.2,
  overflow: "visible"
}, _R = {
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
}, PR = fo({
  container: kR,
  label: CR,
  closeButton: _R
}), TR = {
  sm: fo({
    container: {
      [eu.variable]: "sizes.5",
      [tu.variable]: "sizes.5",
      [ru.variable]: "fontSizes.xs",
      [nu.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: fo({
    container: {
      [eu.variable]: "sizes.6",
      [tu.variable]: "sizes.6",
      [ru.variable]: "fontSizes.sm",
      [nu.variable]: "space.2"
    }
  }),
  lg: fo({
    container: {
      [eu.variable]: "sizes.8",
      [tu.variable]: "sizes.8",
      [ru.variable]: "fontSizes.md",
      [nu.variable]: "space.3"
    }
  })
}, ER = {
  subtle: fo((e) => {
    var t;
    return {
      container: (t = Oa.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: fo((e) => {
    var t;
    return {
      container: (t = Oa.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: fo((e) => {
    var t;
    return {
      container: (t = Oa.variants) == null ? void 0 : t.outline(e)
    };
  })
}, $R = wR({
  variants: ER,
  baseStyle: PR,
  sizes: TR,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Gr, defineMultiStyleConfig: AR } = ge(QA.keys), Qo = V("input-height"), Zo = V("input-font-size"), Jo = V("input-padding"), ei = V("input-border-radius"), RR = Gr({
  addon: {
    height: Qo.reference,
    fontSize: Zo.reference,
    px: Jo.reference,
    borderRadius: ei.reference
  },
  field: {
    width: "100%",
    height: Qo.reference,
    fontSize: Zo.reference,
    px: Jo.reference,
    borderRadius: ei.reference,
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
}), dn = {
  lg: {
    [Zo.variable]: "fontSizes.lg",
    [Jo.variable]: "space.4",
    [ei.variable]: "radii.md",
    [Qo.variable]: "sizes.12"
  },
  md: {
    [Zo.variable]: "fontSizes.md",
    [Jo.variable]: "space.4",
    [ei.variable]: "radii.md",
    [Qo.variable]: "sizes.10"
  },
  sm: {
    [Zo.variable]: "fontSizes.sm",
    [Jo.variable]: "space.3",
    [ei.variable]: "radii.sm",
    [Qo.variable]: "sizes.8"
  },
  xs: {
    [Zo.variable]: "fontSizes.xs",
    [Jo.variable]: "space.2",
    [ei.variable]: "radii.sm",
    [Qo.variable]: "sizes.6"
  }
}, MR = {
  lg: Gr({
    field: dn.lg,
    group: dn.lg
  }),
  md: Gr({
    field: dn.md,
    group: dn.md
  }),
  sm: Gr({
    field: dn.sm,
    group: dn.sm
  }),
  xs: Gr({
    field: dn.xs,
    group: dn.xs
  })
};
function pm(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || N("blue.500", "blue.300")(e),
    errorBorderColor: r || N("red.500", "red.300")(e)
  };
}
var OR = Gr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = pm(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: N("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ht(t, n),
        boxShadow: `0 0 0 1px ${ht(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: ht(t, r),
        boxShadow: `0 0 0 1px ${ht(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: N("inherit", "whiteAlpha.50")(e),
      bg: N("gray.100", "whiteAlpha.300")(e)
    }
  };
}), zR = Gr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = pm(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: N("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: N("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ht(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: ht(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: N("gray.100", "whiteAlpha.50")(e)
    }
  };
}), IR = Gr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = pm(e);
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
        borderColor: ht(t, n),
        boxShadow: `0px 1px 0px 0px ${ht(t, n)}`
      },
      _focusVisible: {
        borderColor: ht(t, r),
        boxShadow: `0px 1px 0px 0px ${ht(t, r)}`
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
}), FR = Gr({
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
}), DR = {
  outline: OR,
  filled: zR,
  flushed: IR,
  unstyled: FR
}, le = AR({
  baseStyle: RR,
  sizes: MR,
  variants: DR,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), u0, jR = {
  ...(u0 = le.baseStyle) == null ? void 0 : u0.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, c0, d0, LR = {
  outline: (e) => {
    var t, r;
    return (r = (t = le.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = le.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = le.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (d0 = (c0 = le.variants) == null ? void 0 : c0.unstyled.field) != null ? d0 : {}
}, f0, p0, h0, m0, v0, g0, y0, b0, BR = {
  xs: (p0 = (f0 = le.sizes) == null ? void 0 : f0.xs.field) != null ? p0 : {},
  sm: (m0 = (h0 = le.sizes) == null ? void 0 : h0.sm.field) != null ? m0 : {},
  md: (g0 = (v0 = le.sizes) == null ? void 0 : v0.md.field) != null ? g0 : {},
  lg: (b0 = (y0 = le.sizes) == null ? void 0 : y0.lg.field) != null ? b0 : {}
}, NR = {
  baseStyle: jR,
  sizes: BR,
  variants: LR,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, xl = Ue("tooltip-bg"), Wd = Ue("tooltip-fg"), VR = Ue("popper-arrow-bg"), WR = {
  bg: xl.reference,
  color: Wd.reference,
  [xl.variable]: "colors.gray.700",
  [Wd.variable]: "colors.whiteAlpha.900",
  _dark: {
    [xl.variable]: "colors.gray.300",
    [Wd.variable]: "colors.gray.900"
  },
  [VR.variable]: xl.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, UR = {
  baseStyle: WR
}, { defineMultiStyleConfig: HR, definePartsStyle: ba } = ge(n5.keys), GR = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = N(
    r0(),
    r0("1rem", "rgba(0,0,0,0.1)")
  )(e), a = N(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${ht(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, KR = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, YR = (e) => ({
  bg: N("gray.100", "whiteAlpha.300")(e)
}), qR = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...GR(e)
}), XR = ba((e) => ({
  label: KR,
  filledTrack: qR(e),
  track: YR(e)
})), QR = {
  xs: ba({
    track: { h: "1" }
  }),
  sm: ba({
    track: { h: "2" }
  }),
  md: ba({
    track: { h: "3" }
  }),
  lg: ba({
    track: { h: "4" }
  })
}, ZR = HR({
  sizes: QR,
  baseStyle: XR,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), JR = (e) => typeof e == "function";
function gt(e, ...t) {
  return JR(e) ? e(...t) : e;
}
var { definePartsStyle: ou, defineMultiStyleConfig: eM } = ge(GA.keys), za = V("checkbox-size"), tM = (e) => {
  const { colorScheme: t } = e;
  return {
    w: za.reference,
    h: za.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: N(`${t}.500`, `${t}.200`)(e),
      borderColor: N(`${t}.500`, `${t}.200`)(e),
      color: N("white", "gray.900")(e),
      _hover: {
        bg: N(`${t}.600`, `${t}.300`)(e),
        borderColor: N(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: N("gray.200", "transparent")(e),
        bg: N("gray.200", "whiteAlpha.300")(e),
        color: N("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: N(`${t}.500`, `${t}.200`)(e),
      borderColor: N(`${t}.500`, `${t}.200`)(e),
      color: N("white", "gray.900")(e)
    },
    _disabled: {
      bg: N("gray.100", "whiteAlpha.100")(e),
      borderColor: N("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: N("red.500", "red.300")(e)
    }
  };
}, rM = {
  _disabled: { cursor: "not-allowed" }
}, nM = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, oM = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, iM = ou((e) => ({
  icon: oM,
  container: rM,
  control: gt(tM, e),
  label: nM
})), aM = {
  sm: ou({
    control: { [za.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: ou({
    control: { [za.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: ou({
    control: { [za.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Vu = eM({
  baseStyle: iM,
  sizes: aM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: sM, definePartsStyle: iu } = ge(o5.keys), lM = (e) => {
  var t;
  const r = (t = gt(Vu.baseStyle, e)) == null ? void 0 : t.control;
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
}, uM = iu((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Vu).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Vu).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: lM(e)
  };
}), cM = {
  md: iu({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: iu({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: iu({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, dM = sM({
  baseStyle: uM,
  sizes: cM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: fM, definePartsStyle: pM } = ge(i5.keys), wl = V("select-bg"), S0, hM = {
  ...(S0 = le.baseStyle) == null ? void 0 : S0.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: wl.reference,
  [wl.variable]: "colors.white",
  _dark: {
    [wl.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: wl.reference
  }
}, mM = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, vM = pM({
  field: hM,
  icon: mM
}), kl = {
  paddingInlineEnd: "8"
}, x0, w0, k0, C0, _0, P0, T0, E0, gM = {
  lg: {
    ...(x0 = le.sizes) == null ? void 0 : x0.lg,
    field: {
      ...(w0 = le.sizes) == null ? void 0 : w0.lg.field,
      ...kl
    }
  },
  md: {
    ...(k0 = le.sizes) == null ? void 0 : k0.md,
    field: {
      ...(C0 = le.sizes) == null ? void 0 : C0.md.field,
      ...kl
    }
  },
  sm: {
    ...(_0 = le.sizes) == null ? void 0 : _0.sm,
    field: {
      ...(P0 = le.sizes) == null ? void 0 : P0.sm.field,
      ...kl
    }
  },
  xs: {
    ...(T0 = le.sizes) == null ? void 0 : T0.xs,
    field: {
      ...(E0 = le.sizes) == null ? void 0 : E0.xs.field,
      ...kl
    },
    icon: {
      insetEnd: "1"
    }
  }
}, yM = fM({
  baseStyle: vM,
  sizes: gM,
  variants: le.variants,
  defaultProps: le.defaultProps
}), Ud = V("skeleton-start-color"), Hd = V("skeleton-end-color"), bM = {
  [Ud.variable]: "colors.gray.100",
  [Hd.variable]: "colors.gray.400",
  _dark: {
    [Ud.variable]: "colors.gray.800",
    [Hd.variable]: "colors.gray.600"
  },
  background: Ud.reference,
  borderColor: Hd.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, SM = {
  baseStyle: bM
}, Gd = V("skip-link-bg"), xM = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Gd.variable]: "colors.white",
    _dark: {
      [Gd.variable]: "colors.gray.700"
    },
    bg: Gd.reference
  }
}, wM = {
  baseStyle: xM
}, { defineMultiStyleConfig: kM, definePartsStyle: Bc } = ge(a5.keys), hs = V("slider-thumb-size"), ms = V("slider-track-size"), bn = V("slider-bg"), CM = (e) => {
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
    ...fm({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, _M = (e) => ({
  ...fm({
    orientation: e.orientation,
    horizontal: { h: ms.reference },
    vertical: { w: ms.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [bn.variable]: "colors.gray.200",
  _dark: {
    [bn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [bn.variable]: "colors.gray.300",
    _dark: {
      [bn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: bn.reference
}), PM = (e) => {
  const { orientation: t } = e;
  return {
    ...fm({
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
    w: hs.reference,
    h: hs.reference,
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
}, TM = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [bn.variable]: `colors.${t}.500`,
    _dark: {
      [bn.variable]: `colors.${t}.200`
    },
    bg: bn.reference
  };
}, EM = Bc((e) => ({
  container: CM(e),
  track: _M(e),
  thumb: PM(e),
  filledTrack: TM(e)
})), $M = Bc({
  container: {
    [hs.variable]: "sizes.4",
    [ms.variable]: "sizes.1"
  }
}), AM = Bc({
  container: {
    [hs.variable]: "sizes.3.5",
    [ms.variable]: "sizes.1"
  }
}), RM = Bc({
  container: {
    [hs.variable]: "sizes.2.5",
    [ms.variable]: "sizes.0.5"
  }
}), MM = {
  lg: $M,
  md: AM,
  sm: RM
}, OM = kM({
  baseStyle: EM,
  sizes: MM,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), to = Ue("spinner-size"), zM = {
  width: [to.reference],
  height: [to.reference]
}, IM = {
  xs: {
    [to.variable]: "sizes.3"
  },
  sm: {
    [to.variable]: "sizes.4"
  },
  md: {
    [to.variable]: "sizes.6"
  },
  lg: {
    [to.variable]: "sizes.8"
  },
  xl: {
    [to.variable]: "sizes.12"
  }
}, FM = {
  baseStyle: zM,
  sizes: IM,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: DM, definePartsStyle: bx } = ge(s5.keys), jM = {
  fontWeight: "medium"
}, LM = {
  opacity: 0.8,
  marginBottom: "2"
}, BM = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, NM = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, VM = bx({
  container: {},
  label: jM,
  helpText: LM,
  number: BM,
  icon: NM
}), WM = {
  md: bx({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, UM = DM({
  baseStyle: VM,
  sizes: WM,
  defaultProps: {
    size: "md"
  }
}), Kd = V("kbd-bg"), HM = {
  [Kd.variable]: "colors.gray.100",
  _dark: {
    [Kd.variable]: "colors.whiteAlpha.100"
  },
  bg: Kd.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, GM = {
  baseStyle: HM
}, KM = {
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
}, YM = {
  baseStyle: KM
}, { defineMultiStyleConfig: qM, definePartsStyle: XM } = ge(ZA.keys), QM = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, ZM = XM({
  icon: QM
}), JM = qM({
  baseStyle: ZM
}), { defineMultiStyleConfig: eO, definePartsStyle: tO } = ge(JA.keys), wr = V("menu-bg"), Yd = V("menu-shadow"), rO = {
  [wr.variable]: "#fff",
  [Yd.variable]: "shadows.sm",
  _dark: {
    [wr.variable]: "colors.gray.700",
    [Yd.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: wr.reference,
  boxShadow: Yd.reference
}, nO = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [wr.variable]: "colors.gray.100",
    _dark: {
      [wr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [wr.variable]: "colors.gray.200",
    _dark: {
      [wr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [wr.variable]: "colors.gray.100",
    _dark: {
      [wr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: wr.reference
}, oO = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, iO = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, aO = {
  opacity: 0.6
}, sO = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, lO = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, uO = tO({
  button: lO,
  list: rO,
  item: nO,
  groupTitle: oO,
  icon: iO,
  command: aO,
  divider: sO
}), cO = eO({
  baseStyle: uO
}), { defineMultiStyleConfig: dO, definePartsStyle: Ap } = ge(e5.keys), qd = V("modal-bg"), Xd = V("modal-shadow"), fO = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, pO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, hO = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [qd.variable]: "colors.white",
    [Xd.variable]: "shadows.lg",
    _dark: {
      [qd.variable]: "colors.gray.700",
      [Xd.variable]: "shadows.dark-lg"
    },
    bg: qd.reference,
    boxShadow: Xd.reference
  };
}, mO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, vO = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, gO = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, yO = {
  px: "6",
  py: "4"
}, bO = Ap((e) => ({
  overlay: fO,
  dialogContainer: gt(pO, e),
  dialog: gt(hO, e),
  header: mO,
  closeButton: vO,
  body: gt(gO, e),
  footer: yO
}));
function lr(e) {
  return Ap(e === "full" ? {
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
var SO = {
  xs: lr("xs"),
  sm: lr("sm"),
  md: lr("md"),
  lg: lr("lg"),
  xl: lr("xl"),
  "2xl": lr("2xl"),
  "3xl": lr("3xl"),
  "4xl": lr("4xl"),
  "5xl": lr("5xl"),
  "6xl": lr("6xl"),
  full: lr("full")
}, xO = dO({
  baseStyle: bO,
  sizes: SO,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: wO, definePartsStyle: Sx } = ge(t5.keys), hm = Ue("number-input-stepper-width"), xx = Ue("number-input-input-padding"), kO = Vr(hm).add("0.5rem").toString(), Qd = Ue("number-input-bg"), Zd = Ue("number-input-color"), Jd = Ue("number-input-border-color"), CO = {
  [hm.variable]: "sizes.6",
  [xx.variable]: kO
}, _O = (e) => {
  var t, r;
  return (r = (t = gt(le.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, PO = {
  width: hm.reference
}, TO = {
  borderStart: "1px solid",
  borderStartColor: Jd.reference,
  color: Zd.reference,
  bg: Qd.reference,
  [Zd.variable]: "colors.chakra-body-text",
  [Jd.variable]: "colors.chakra-border-color",
  _dark: {
    [Zd.variable]: "colors.whiteAlpha.800",
    [Jd.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Qd.variable]: "colors.gray.200",
    _dark: {
      [Qd.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, EO = Sx((e) => {
  var t;
  return {
    root: CO,
    field: (t = gt(_O, e)) != null ? t : {},
    stepperGroup: PO,
    stepper: TO
  };
});
function Cl(e) {
  var t, r, n;
  const o = (t = le.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = hx.fontSizes[a];
  return Sx({
    field: {
      ...o.field,
      paddingInlineEnd: xx.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Vr(s).multiply(0.75).toString(),
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
var $O = {
  xs: Cl("xs"),
  sm: Cl("sm"),
  md: Cl("md"),
  lg: Cl("lg")
}, AO = wO({
  baseStyle: EO,
  sizes: $O,
  variants: le.variants,
  defaultProps: le.defaultProps
}), $0, RO = {
  ...($0 = le.baseStyle) == null ? void 0 : $0.field,
  textAlign: "center"
}, MO = {
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
}, A0, R0, OO = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = gt((t = le.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = gt((t = le.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = gt((t = le.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (R0 = (A0 = le.variants) == null ? void 0 : A0.unstyled.field) != null ? R0 : {}
}, zO = {
  baseStyle: RO,
  sizes: MO,
  variants: OO,
  defaultProps: le.defaultProps
}, { defineMultiStyleConfig: IO, definePartsStyle: FO } = ge(r5.keys), _l = Ue("popper-bg"), DO = Ue("popper-arrow-bg"), M0 = Ue("popper-arrow-shadow-color"), jO = { zIndex: 10 }, LO = {
  [_l.variable]: "colors.white",
  bg: _l.reference,
  [DO.variable]: _l.reference,
  [M0.variable]: "colors.gray.200",
  _dark: {
    [_l.variable]: "colors.gray.700",
    [M0.variable]: "colors.whiteAlpha.300"
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
}, BO = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, NO = {
  px: 3,
  py: 2
}, VO = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, WO = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, UO = FO({
  popper: jO,
  content: LO,
  header: BO,
  body: NO,
  footer: VO,
  closeButton: WO
}), HO = IO({
  baseStyle: UO
}), { definePartsStyle: Rp, defineMultiStyleConfig: GO } = ge(KA.keys), ef = V("drawer-bg"), tf = V("drawer-box-shadow");
function Ro(e) {
  return Rp(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var KO = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, YO = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, qO = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [ef.variable]: "colors.white",
    [tf.variable]: "shadows.lg",
    _dark: {
      [ef.variable]: "colors.gray.700",
      [tf.variable]: "shadows.dark-lg"
    },
    bg: ef.reference,
    boxShadow: tf.reference
  };
}, XO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, QO = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, ZO = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, JO = {
  px: "6",
  py: "4"
}, ez = Rp((e) => ({
  overlay: KO,
  dialogContainer: YO,
  dialog: gt(qO, e),
  header: XO,
  closeButton: QO,
  body: ZO,
  footer: JO
})), tz = {
  xs: Ro("xs"),
  sm: Ro("md"),
  md: Ro("lg"),
  lg: Ro("2xl"),
  xl: Ro("4xl"),
  full: Ro("full")
}, rz = GO({
  baseStyle: ez,
  sizes: tz,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: nz, defineMultiStyleConfig: oz } = ge(YA.keys), iz = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, az = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, sz = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, lz = nz({
  preview: iz,
  input: az,
  textarea: sz
}), uz = oz({
  baseStyle: lz
}), { definePartsStyle: cz, defineMultiStyleConfig: dz } = ge(qA.keys), hi = V("form-control-color"), fz = {
  marginStart: "1",
  [hi.variable]: "colors.red.500",
  _dark: {
    [hi.variable]: "colors.red.300"
  },
  color: hi.reference
}, pz = {
  mt: "2",
  [hi.variable]: "colors.gray.600",
  _dark: {
    [hi.variable]: "colors.whiteAlpha.600"
  },
  color: hi.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, hz = cz({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: fz,
  helperText: pz
}), mz = dz({
  baseStyle: hz
}), { definePartsStyle: vz, defineMultiStyleConfig: gz } = ge(XA.keys), mi = V("form-error-color"), yz = {
  [mi.variable]: "colors.red.500",
  _dark: {
    [mi.variable]: "colors.red.300"
  },
  color: mi.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, bz = {
  marginEnd: "0.5em",
  [mi.variable]: "colors.red.500",
  _dark: {
    [mi.variable]: "colors.red.300"
  },
  color: mi.reference
}, Sz = vz({
  text: yz,
  icon: bz
}), xz = gz({
  baseStyle: Sz
}), wz = {
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
}, kz = {
  baseStyle: wz
}, Cz = {
  fontFamily: "heading",
  fontWeight: "bold"
}, _z = {
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
}, Pz = {
  baseStyle: Cz,
  sizes: _z,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: Tz, definePartsStyle: Ez } = ge(HA.keys), rf = V("breadcrumb-link-decor"), $z = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: rf.reference,
  [rf.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [rf.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, Az = Ez({
  link: $z
}), Rz = Tz({
  baseStyle: Az
}), Mz = {
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
}, wx = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: N("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: N("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: N("gray.200", "whiteAlpha.300")(e) }
    };
  const n = $i(`${t}.200`, 0.12)(r), o = $i(`${t}.200`, 0.24)(r);
  return {
    color: N(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: N(`${t}.50`, n)(e)
    },
    _active: {
      bg: N(`${t}.100`, o)(e)
    }
  };
}, Oz = (e) => {
  const { colorScheme: t } = e, r = N("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...gt(wx, e)
  };
}, zz = {
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
}, Iz = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = N("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: N("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: N("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: N("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: i = `${r}.600`,
    activeBg: a = `${r}.700`
  } = (t = zz[r]) != null ? t : {}, s = N(n, `${r}.200`)(e);
  return {
    bg: s,
    color: N(o, "gray.800")(e),
    _hover: {
      bg: N(i, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: N(a, `${r}.400`)(e) }
  };
}, Fz = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: N(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: N(`${t}.700`, `${t}.500`)(e)
    }
  };
}, Dz = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, jz = {
  ghost: wx,
  outline: Oz,
  solid: Iz,
  link: Fz,
  unstyled: Dz
}, Lz = {
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
}, Bz = {
  baseStyle: Mz,
  variants: jz,
  sizes: Lz,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: po, defineMultiStyleConfig: Nz } = ge(f5.keys), Wu = V("card-bg"), qr = V("card-padding"), kx = V("card-shadow"), au = V("card-radius"), Cx = V("card-border-width", "0"), _x = V("card-border-color"), Vz = po({
  container: {
    [Wu.variable]: "colors.chakra-body-bg",
    backgroundColor: Wu.reference,
    boxShadow: kx.reference,
    borderRadius: au.reference,
    color: "chakra-body-text",
    borderWidth: Cx.reference,
    borderColor: _x.reference
  },
  body: {
    padding: qr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: qr.reference
  },
  footer: {
    padding: qr.reference
  }
}), Wz = {
  sm: po({
    container: {
      [au.variable]: "radii.base",
      [qr.variable]: "space.3"
    }
  }),
  md: po({
    container: {
      [au.variable]: "radii.md",
      [qr.variable]: "space.5"
    }
  }),
  lg: po({
    container: {
      [au.variable]: "radii.xl",
      [qr.variable]: "space.7"
    }
  })
}, Uz = {
  elevated: po({
    container: {
      [kx.variable]: "shadows.base",
      _dark: {
        [Wu.variable]: "colors.gray.700"
      }
    }
  }),
  outline: po({
    container: {
      [Cx.variable]: "1px",
      [_x.variable]: "colors.chakra-border-color"
    }
  }),
  filled: po({
    container: {
      [Wu.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [qr.variable]: 0
    },
    header: {
      [qr.variable]: 0
    },
    footer: {
      [qr.variable]: 0
    }
  }
}, Hz = Nz({
  baseStyle: Vz,
  variants: Uz,
  sizes: Wz,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Ia = Ue("close-button-size"), aa = Ue("close-button-bg"), Gz = {
  w: [Ia.reference],
  h: [Ia.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [aa.variable]: "colors.blackAlpha.100",
    _dark: {
      [aa.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [aa.variable]: "colors.blackAlpha.200",
    _dark: {
      [aa.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: aa.reference
}, Kz = {
  lg: {
    [Ia.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Ia.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Ia.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, Yz = {
  baseStyle: Gz,
  sizes: Kz,
  defaultProps: {
    size: "md"
  }
}, { variants: qz, defaultProps: Xz } = Oa, Qz = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: je.bg.reference,
  color: je.color.reference,
  boxShadow: je.shadow.reference
}, Zz = {
  baseStyle: Qz,
  variants: qz,
  defaultProps: Xz
}, Jz = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, e3 = {
  baseStyle: Jz
}, t3 = {
  opacity: 0.6,
  borderColor: "inherit"
}, r3 = {
  borderStyle: "solid"
}, n3 = {
  borderStyle: "dashed"
}, o3 = {
  solid: r3,
  dashed: n3
}, i3 = {
  baseStyle: t3,
  variants: o3,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: a3, defineMultiStyleConfig: s3 } = ge(VA.keys), l3 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, u3 = {
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
}, c3 = {
  pt: "2",
  px: "4",
  pb: "5"
}, d3 = {
  fontSize: "1.25em"
}, f3 = a3({
  container: l3,
  button: u3,
  panel: c3,
  icon: d3
}), p3 = s3({ baseStyle: f3 }), { definePartsStyle: zs, defineMultiStyleConfig: h3 } = ge(WA.keys), Ft = V("alert-fg"), rn = V("alert-bg"), m3 = zs({
  container: {
    bg: rn.reference,
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
    color: Ft.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Ft.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function mm(e) {
  const { theme: t, colorScheme: r } = e, n = $i(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var v3 = zs((e) => {
  const { colorScheme: t } = e, r = mm(e);
  return {
    container: {
      [Ft.variable]: `colors.${t}.600`,
      [rn.variable]: r.light,
      _dark: {
        [Ft.variable]: `colors.${t}.200`,
        [rn.variable]: r.dark
      }
    }
  };
}), g3 = zs((e) => {
  const { colorScheme: t } = e, r = mm(e);
  return {
    container: {
      [Ft.variable]: `colors.${t}.600`,
      [rn.variable]: r.light,
      _dark: {
        [Ft.variable]: `colors.${t}.200`,
        [rn.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Ft.reference
    }
  };
}), y3 = zs((e) => {
  const { colorScheme: t } = e, r = mm(e);
  return {
    container: {
      [Ft.variable]: `colors.${t}.600`,
      [rn.variable]: r.light,
      _dark: {
        [Ft.variable]: `colors.${t}.200`,
        [rn.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Ft.reference
    }
  };
}), b3 = zs((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Ft.variable]: "colors.white",
      [rn.variable]: `colors.${t}.600`,
      _dark: {
        [Ft.variable]: "colors.gray.900",
        [rn.variable]: `colors.${t}.200`
      },
      color: Ft.reference
    }
  };
}), S3 = {
  subtle: v3,
  "left-accent": g3,
  "top-accent": y3,
  solid: b3
}, x3 = h3({
  baseStyle: m3,
  variants: S3,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: Px, defineMultiStyleConfig: w3 } = ge(UA.keys), vi = V("avatar-border-color"), Fa = V("avatar-bg"), vs = V("avatar-font-size"), Ai = V("avatar-size"), k3 = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: vi.reference,
  [vi.variable]: "white",
  _dark: {
    [vi.variable]: "colors.gray.800"
  }
}, C3 = {
  bg: Fa.reference,
  fontSize: vs.reference,
  width: Ai.reference,
  height: Ai.reference,
  lineHeight: "1",
  [Fa.variable]: "colors.gray.200",
  _dark: {
    [Fa.variable]: "colors.whiteAlpha.400"
  }
}, _3 = (e) => {
  const { name: t, theme: r } = e, n = t ? M5({ string: t }) : "colors.gray.400", o = A5(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: Fa.reference,
    fontSize: vs.reference,
    color: i,
    borderColor: vi.reference,
    verticalAlign: "top",
    width: Ai.reference,
    height: Ai.reference,
    "&:not([data-loaded])": {
      [Fa.variable]: n
    },
    [vi.variable]: "colors.white",
    _dark: {
      [vi.variable]: "colors.gray.800"
    }
  };
}, P3 = {
  fontSize: vs.reference,
  lineHeight: "1"
}, T3 = Px((e) => ({
  badge: gt(k3, e),
  excessLabel: gt(C3, e),
  container: gt(_3, e),
  label: P3
}));
function fn(e) {
  const t = e !== "100%" ? vx[e] : void 0;
  return Px({
    container: {
      [Ai.variable]: t ?? e,
      [vs.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Ai.variable]: t ?? e,
      [vs.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var E3 = {
  "2xs": fn(4),
  xs: fn(6),
  sm: fn(8),
  md: fn(12),
  lg: fn(16),
  xl: fn(24),
  "2xl": fn(32),
  full: fn("100%")
}, $3 = w3({
  baseStyle: T3,
  sizes: E3,
  defaultProps: {
    size: "md"
  }
}), A3 = {
  Accordion: p3,
  Alert: x3,
  Avatar: $3,
  Badge: Oa,
  Breadcrumb: Rz,
  Button: Bz,
  Checkbox: Vu,
  CloseButton: Yz,
  Code: Zz,
  Container: e3,
  Divider: i3,
  Drawer: rz,
  Editable: uz,
  Form: mz,
  FormError: xz,
  FormLabel: kz,
  Heading: Pz,
  Input: le,
  Kbd: GM,
  Link: YM,
  List: JM,
  Menu: cO,
  Modal: xO,
  NumberInput: AO,
  PinInput: zO,
  Popover: HO,
  Progress: ZR,
  Radio: dM,
  Select: yM,
  Skeleton: SM,
  SkipLink: wM,
  Slider: OM,
  Spinner: FM,
  Stat: UM,
  Switch: Y5,
  Table: tR,
  Tabs: vR,
  Tag: $R,
  Textarea: NR,
  Tooltip: UR,
  Card: Hz,
  Stepper: NA
}, R3 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, M3 = {
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
}, O3 = "ltr", z3 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, Tx = {
  semanticTokens: R3,
  direction: O3,
  ...jA,
  components: A3,
  styles: M3,
  config: z3
};
function Sa(e) {
  return typeof e == "function";
}
function I3(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var F3 = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return hA(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, I3(
    ...n.map(
      (i) => (a) => Sa(i) ? i(a) : j3(a, i)
    )
  )(o);
}, D3 = F3(Tx);
function j3(...e) {
  return Jt({}, ...e, Ex);
}
function Ex(e, t, r, n) {
  if ((Sa(e) || Sa(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = Sa(e) ? e(...o) : e, a = Sa(t) ? t(...o) : t;
      return Jt({}, i, a, Ex);
    };
}
function L3(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function B3(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var N3 = (e) => {
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
}, $x = N3(B3);
function Ax(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var Rx = (e) => Ax(e, (t) => t != null);
function V3(e) {
  return typeof e == "function";
}
function Mx(e, ...t) {
  return V3(e) ? e(...t) : e;
}
var W3 = typeof Element < "u", U3 = typeof Map == "function", H3 = typeof Set == "function", G3 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function su(e, t) {
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
        if (!su(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (U3 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!su(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (H3 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (G3 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (W3 && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !su(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var K3 = function(t, r) {
  try {
    return su(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Y3 = /* @__PURE__ */ _s(K3);
function Ox(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = qE(), s = e ? $x(i, `components.${e}`) : void 0, l = n || s, u = Jt(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    Rx(L3(o, ["children"]))
  ), c = b.useRef({});
  if (l) {
    const f = fA(l)(u);
    Y3(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Is(e, t = {}) {
  return Ox(e, t);
}
function Fs(e, t = {}) {
  return Ox(e, t);
}
var q3 = /* @__PURE__ */ new Set([
  ...eA,
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
]), X3 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function Q3(e) {
  return X3.has(e) || !q3.has(e);
}
function Z3(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function J3(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var e4 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, t4 = /* @__PURE__ */ US(
  function(e) {
    return e4.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), r4 = t4, n4 = function(t) {
  return t !== "theme";
}, O0 = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? r4 : n4;
}, z0 = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, o4 = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return XS(r, n, o), _E(function() {
    return QS(r, n, o);
  }), null;
}, i4 = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = z0(t, r, n), l = s || O0(o), u = !l("as");
  return function() {
    var c = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      d.push(c[0][0]);
      for (var f = c.length, p = 1; p < f; p++)
        d.push(c[p], c[0][p]);
    }
    var g = tx(function(y, x, m) {
      var h = u && y.as || o, v = "", w = [], k = y;
      if (y.theme == null) {
        k = {};
        for (var T in y)
          k[T] = y[T];
        k.theme = b.useContext(ds);
      }
      typeof y.className == "string" ? v = yE(x.registered, w, y.className) : y.className != null && (v = y.className + " ");
      var C = om(d.concat(w), x.registered, k);
      v += x.key + "-" + C.name, a !== void 0 && (v += " " + a);
      var $ = u && s === void 0 ? O0(h) : l, R = {};
      for (var M in y)
        u && M === "as" || // $FlowFixMe
        $(M) && (R[M] = y[M]);
      return R.className = v, R.ref = m, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(o4, {
        cache: x,
        serialized: C,
        isStringTag: typeof h == "string"
      }), /* @__PURE__ */ b.createElement(h, R));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return "." + a;
      }
    }), g.withComponent = function(y, x) {
      return e(y, xo({}, r, x, {
        shouldForwardProp: z0(g, x, !0)
      })).apply(void 0, d);
    }, g;
  };
}, a4 = [
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
], Uu = i4.bind();
a4.forEach(function(e) {
  Uu[e] = Uu(e);
});
var I0, s4 = (I0 = Uu.default) != null ? I0 : Uu, l4 = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = Ax(a, (d, f) => rA(f)), l = Mx(e, t), u = Z3(
    {},
    o,
    l,
    Rx(s),
    i
  ), c = px(u)(t.theme);
  return n ? [c, n] : c;
};
function nf(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Q3);
  const o = l4({ baseStyle: r }), i = s4(
    e,
    n
  )(o);
  return mo.forwardRef(function(l, u) {
    const { colorMode: c, forced: d } = Os();
    return mo.createElement(i, {
      ref: u,
      "data-theme": d ? c : void 0,
      ...l
    });
  });
}
function u4() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(nf, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return nf(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, nf(r)), e.get(r);
    }
  });
}
var ne = u4();
function Pe(e) {
  return b.forwardRef(e);
}
function c4(e = {}) {
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
function d4(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = b.useMemo(() => J$(r), [r]);
  return /* @__PURE__ */ E.jsxs(EE, { theme: o, children: [
    /* @__PURE__ */ E.jsx(f4, { root: t }),
    n
  ] });
}
function f4({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ E.jsx(Fc, { styles: (r) => ({ [t]: r.__cssVars }) });
}
c4({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function p4() {
  const { colorMode: e } = Os();
  return /* @__PURE__ */ E.jsx(
    Fc,
    {
      styles: (t) => {
        const r = $x(t, "styles.global"), n = Mx(r, { theme: t, colorMode: e });
        return n ? px(n)(t) : void 0;
      }
    }
  );
}
var zx = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
zx.displayName = "EnvironmentContext";
function Ix(e) {
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
  return /* @__PURE__ */ E.jsxs(zx.Provider, { value: i, children: [
    t,
    a && /* @__PURE__ */ E.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
Ix.displayName = "EnvironmentProvider";
var h4 = (e) => {
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
  } = e, d = /* @__PURE__ */ E.jsx(
    Ix,
    {
      environment: s,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ E.jsx(d4, { theme: a, cssVarsRoot: l, children: /* @__PURE__ */ E.jsxs(
    ax,
    {
      colorModeManager: r,
      options: a.config,
      children: [
        i ? /* @__PURE__ */ E.jsx(ME, { scope: o }) : /* @__PURE__ */ E.jsx(RE, {}),
        !c && /* @__PURE__ */ E.jsx(p4, {}),
        n ? /* @__PURE__ */ E.jsx(ox, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, m4 = (e, t) => e.find((r) => r.id === t);
function F0(e, t) {
  const r = Fx(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function Fx(e, t) {
  for (const [r, n] of Object.entries(e))
    if (m4(n, t))
      return r;
}
function v4(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function g4(e) {
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
function Hu(e, t = []) {
  const r = b.useRef(e);
  return b.useEffect(() => {
    r.current = e;
  }), b.useCallback((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function y4(e, t) {
  const r = Hu(e);
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
function Gu(e, t) {
  const r = b.useRef(!1), n = b.useRef(!1);
  b.useEffect(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), b.useEffect(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const Dx = b.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Nc = b.createContext({}), Ds = b.createContext(null), Vc = typeof document < "u", vm = Vc ? b.useLayoutEffect : b.useEffect, jx = b.createContext({ strict: !1 }), gm = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), b4 = "framerAppearId", Lx = "data-" + gm(b4);
function S4(e, t, r, n) {
  const { visualElement: o } = b.useContext(Nc), i = b.useContext(jx), a = b.useContext(Ds), s = b.useContext(Dx).reducedMotion, l = b.useRef();
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
  const c = b.useRef(!!r[Lx]);
  return vm(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), b.useEffect(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (window.HandoffAppearAnimations = !1, c.current = !1));
  }), u;
}
function ti(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function x4(e, t, r) {
  return b.useCallback(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : ti(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function gs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Wc(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const ym = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], bm = ["initial", ...ym];
function Uc(e) {
  return Wc(e.animate) || bm.some((t) => gs(e[t]));
}
function Bx(e) {
  return !!(Uc(e) || e.variants);
}
function w4(e, t) {
  if (Uc(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || gs(r) ? r : void 0,
      animate: gs(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function k4(e) {
  const { initial: t, animate: r } = w4(e, b.useContext(Nc));
  return b.useMemo(() => ({ initial: t, animate: r }), [D0(t), D0(r)]);
}
function D0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const j0 = {
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
}, ys = {};
for (const e in j0)
  ys[e] = {
    isEnabled: (t) => j0[e].some((r) => !!t[r])
  };
function C4(e) {
  for (const t in e)
    ys[t] = {
      ...ys[t],
      ...e[t]
    };
}
const Sm = b.createContext({}), Nx = b.createContext({}), _4 = Symbol.for("motionComponentSymbol");
function P4({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && C4(e);
  function i(s, l) {
    let u;
    const c = {
      ...b.useContext(Dx),
      ...s,
      layoutId: T4(s)
    }, { isStatic: d } = c, f = k4(s), p = n(s, d);
    if (!d && Vc) {
      f.visualElement = S4(o, p, c, t);
      const g = b.useContext(Nx), y = b.useContext(jx).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        y,
        e,
        g
      ));
    }
    return b.createElement(
      Nc.Provider,
      { value: f },
      u && f.visualElement ? b.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      r(o, s, x4(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const a = b.forwardRef(i);
  return a[_4] = o, a;
}
function T4({ layoutId: e }) {
  const t = b.useContext(Sm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function E4(e) {
  function t(n, o = {}) {
    return P4(e(n, o));
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
const $4 = [
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
function xm(e) {
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
      !!($4.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Ku = {};
function A4(e) {
  Object.assign(Ku, e);
}
const js = [
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
], _o = new Set(js);
function Vx(e, { layout: t, layoutId: r }) {
  return _o.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Ku[e] || e === "opacity");
}
const $t = (e) => !!(e && e.getVelocity), R4 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, M4 = js.length;
function O4(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < M4; a++) {
    const s = js[a];
    if (e[s] !== void 0) {
      const l = R4[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const Wx = (e) => (t) => typeof t == "string" && t.startsWith(e), Ux = Wx("--"), Mp = Wx("var(--"), z4 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, I4 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, In = (e, t, r) => Math.min(Math.max(r, e), t), Po = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Da = {
  ...Po,
  transform: (e) => In(0, 1, e)
}, Pl = {
  ...Po,
  default: 1
}, ja = (e) => Math.round(e * 1e5) / 1e5, Hc = /(-)?([\d]*\.?[\d])+/g, Hx = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, F4 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ls(e) {
  return typeof e == "string";
}
const Bs = (e) => ({
  test: (t) => Ls(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), pn = Bs("deg"), Rr = Bs("%"), W = Bs("px"), D4 = Bs("vh"), j4 = Bs("vw"), L0 = {
  ...Rr,
  parse: (e) => Rr.parse(e) / 100,
  transform: (e) => Rr.transform(e * 100)
}, B0 = {
  ...Po,
  transform: Math.round
}, Gx = {
  // Border props
  borderWidth: W,
  borderTopWidth: W,
  borderRightWidth: W,
  borderBottomWidth: W,
  borderLeftWidth: W,
  borderRadius: W,
  radius: W,
  borderTopLeftRadius: W,
  borderTopRightRadius: W,
  borderBottomRightRadius: W,
  borderBottomLeftRadius: W,
  // Positioning props
  width: W,
  maxWidth: W,
  height: W,
  maxHeight: W,
  size: W,
  top: W,
  right: W,
  bottom: W,
  left: W,
  // Spacing props
  padding: W,
  paddingTop: W,
  paddingRight: W,
  paddingBottom: W,
  paddingLeft: W,
  margin: W,
  marginTop: W,
  marginRight: W,
  marginBottom: W,
  marginLeft: W,
  // Transform props
  rotate: pn,
  rotateX: pn,
  rotateY: pn,
  rotateZ: pn,
  scale: Pl,
  scaleX: Pl,
  scaleY: Pl,
  scaleZ: Pl,
  skew: pn,
  skewX: pn,
  skewY: pn,
  distance: W,
  translateX: W,
  translateY: W,
  translateZ: W,
  x: W,
  y: W,
  z: W,
  perspective: W,
  transformPerspective: W,
  opacity: Da,
  originX: L0,
  originY: L0,
  originZ: W,
  // Misc
  zIndex: B0,
  // SVG
  fillOpacity: Da,
  strokeOpacity: Da,
  numOctaves: B0
};
function wm(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, u = !1, c = !0;
  for (const d in t) {
    const f = t[d];
    if (Ux(d)) {
      i[d] = f;
      continue;
    }
    const p = Gx[d], g = I4(f, p);
    if (_o.has(d)) {
      if (l = !0, a[d] = g, !c)
        continue;
      f !== (p.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, s[d] = g) : o[d] = g;
  }
  if (t.transform || (l || n ? o.transform = O4(e.transform, r, c, n) : o.transform && (o.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const km = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Kx(e, t, r) {
  for (const n in t)
    !$t(t[n]) && !Vx(n, r) && (e[n] = t[n]);
}
function L4({ transformTemplate: e }, t, r) {
  return b.useMemo(() => {
    const n = km();
    return wm(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function B4(e, t, r) {
  const n = e.style || {}, o = {};
  return Kx(o, n, e), Object.assign(o, L4(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function N4(e, t, r) {
  const n = {}, o = B4(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const V4 = /* @__PURE__ */ new Set([
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
function Yu(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || V4.has(e);
}
let Yx = (e) => !Yu(e);
function W4(e) {
  e && (Yx = (t) => t.startsWith("on") ? !Yu(t) : e(t));
}
try {
  W4(require("@emotion/is-prop-valid").default);
} catch {
}
function U4(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Yx(o) || r === !0 && Yu(o) || !t && !Yu(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function N0(e, t, r) {
  return typeof e == "string" ? e : W.transform(t + r * e);
}
function H4(e, t, r) {
  const n = N0(t, e.x, e.width), o = N0(r, e.y, e.height);
  return `${n} ${o}`;
}
const G4 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, K4 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Y4(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? G4 : K4;
  e[i.offset] = W.transform(-n);
  const a = W.transform(t), s = W.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Cm(e, {
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
  if (wm(e, u, c, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: g, dimensions: y } = e;
  p.transform && (y && (g.transform = p.transform), delete p.transform), y && (o !== void 0 || i !== void 0 || g.transform) && (g.transformOrigin = H4(y, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), a !== void 0 && Y4(p, a, s, l, !1);
}
const qx = () => ({
  ...km(),
  attrs: {}
}), _m = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function q4(e, t, r, n) {
  const o = b.useMemo(() => {
    const i = qx();
    return Cm(i, t, { enableHardwareAcceleration: !1 }, _m(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Kx(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function X4(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (xm(r) ? q4 : N4)(n, i, a, r), c = {
      ...U4(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = b.useMemo(() => $t(d) ? d.get() : d, [d]);
    return b.createElement(r, {
      ...c,
      children: f
    });
  };
}
function Xx(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const Qx = /* @__PURE__ */ new Set([
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
function Zx(e, t, r, n) {
  Xx(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Qx.has(o) ? o : gm(o), t.attrs[o]);
}
function Pm(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    ($t(r[o]) || t.style && $t(t.style[o]) || Vx(o, e)) && (n[o] = r[o]);
  return n;
}
function Jx(e, t) {
  const r = Pm(e, t);
  for (const n in e)
    if ($t(e[n]) || $t(t[n])) {
      const o = js.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Tm(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function ew(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const qu = (e) => Array.isArray(e), Q4 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Z4 = (e) => qu(e) ? e[e.length - 1] || 0 : e;
function lu(e) {
  const t = $t(e) ? e.get() : e;
  return Q4(t) ? t.toValue() : t;
}
function J4({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: eI(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const tw = (e) => (t, r) => {
  const n = b.useContext(Nc), o = b.useContext(Ds), i = () => J4(e, t, n, o);
  return r ? i() : ew(i);
};
function eI(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const f in i)
    o[f] = lu(i[f]);
  let { initial: a, animate: s } = e;
  const l = Uc(e), u = Bx(e);
  t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return d && typeof d != "boolean" && !Wc(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const g = Tm(e, p);
    if (!g)
      return;
    const { transitionEnd: y, transition: x, ...m } = g;
    for (const h in m) {
      let v = m[h];
      if (Array.isArray(v)) {
        const w = c ? v.length - 1 : 0;
        v = v[w];
      }
      v !== null && (o[h] = v);
    }
    for (const h in y)
      o[h] = y[h];
  }), o;
}
const Ie = (e) => e;
class V0 {
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
function tI(e) {
  let t = new V0(), r = new V0(), n = 0, o = !1, i = !1;
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
const Tl = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], rI = 40;
function nI(e, t) {
  let r = !1, n = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = Tl.reduce((d, f) => (d[f] = tI(() => r = !0), d), {}), a = (d) => i[d].process(o), s = () => {
    const d = performance.now();
    r = !1, o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, rI), 1), o.timestamp = d, o.isProcessing = !0, Tl.forEach(a), o.isProcessing = !1, r && t && (n = !1, e(s));
  }, l = () => {
    r = !0, n = !0, o.isProcessing || e(s);
  };
  return { schedule: Tl.reduce((d, f) => {
    const p = i[f];
    return d[f] = (g, y = !1, x = !1) => (r || l(), p.schedule(g, y, x)), d;
  }, {}), cancel: (d) => Tl.forEach((f) => i[f].cancel(d)), state: o, steps: i };
}
const { schedule: ve, cancel: nn, state: He, steps: of } = nI(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0), oI = {
  useVisualState: tw({
    scrapeMotionValuesFromProps: Jx,
    createRenderState: qx,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      ve.read(() => {
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
      }), ve.render(() => {
        Cm(r, n, { enableHardwareAcceleration: !1 }, _m(t.tagName), e.transformTemplate), Zx(t, r);
      });
    }
  })
}, iI = {
  useVisualState: tw({
    scrapeMotionValuesFromProps: Pm,
    createRenderState: km
  })
};
function aI(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...xm(e) ? oI : iI,
    preloadedFeatures: r,
    useRender: X4(t),
    createVisualElement: n,
    Component: e
  };
}
function Kr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const rw = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Gc(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const sI = (e) => (t) => rw(t) && e(t, Gc(t));
function Xr(e, t, r, n) {
  return Kr(e, t, sI(r), n);
}
const lI = (e, t) => (r) => t(e(r)), Rn = (...e) => e.reduce(lI);
function nw(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const W0 = nw("dragHorizontal"), U0 = nw("dragVertical");
function ow(e) {
  let t = !1;
  if (e === "y")
    t = U0();
  else if (e === "x")
    t = W0();
  else {
    const r = W0(), n = U0();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function iw() {
  const e = ow(!0);
  return e ? (e(), !1) : !0;
}
class Nn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function H0(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || iw())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && ve.update(() => s[n](i, a));
  };
  return Xr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class uI extends Nn {
  mount() {
    this.unmount = Rn(H0(this.node, !0), H0(this.node, !1));
  }
  unmount() {
  }
}
class cI extends Nn {
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
    this.unmount = Rn(Kr(this.node.current, "focus", () => this.onFocus()), Kr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const aw = (e, t) => t ? e === t ? !0 : aw(e, t.parentElement) : !1;
function af(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Gc(r));
}
class dI extends Nn {
  constructor() {
    super(...arguments), this.removeStartListeners = Ie, this.removeEndListeners = Ie, this.removeAccessibleListeners = Ie, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = Xr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c } = this.node.getProps();
        ve.update(() => {
          aw(this.node.current, s.target) ? u && u(s, l) : c && c(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = Xr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = Rn(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || af("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && ve.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Kr(this.node.current, "keyup", a), af("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Kr(this.node.current, "keydown", t), n = () => {
        this.isPressing && af("cancel", (i, a) => this.cancelPress(i, a));
      }, o = Kr(this.node.current, "blur", n);
      this.removeAccessibleListeners = Rn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && ve.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !iw();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && ve.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Xr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Kr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Rn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Op = /* @__PURE__ */ new WeakMap(), sf = /* @__PURE__ */ new WeakMap(), fI = (e) => {
  const t = Op.get(e.target);
  t && t(e);
}, pI = (e) => {
  e.forEach(fI);
};
function hI({ root: e, ...t }) {
  const r = e || document;
  sf.has(r) || sf.set(r, {});
  const n = sf.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(pI, { root: e, ...t })), n[o];
}
function mI(e, t, r) {
  const n = hI(t);
  return Op.set(e, r), n.observe(e), () => {
    Op.delete(e), n.unobserve(e);
  };
}
const vI = {
  some: 0,
  all: 1
};
class gI extends Nn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : vI[o]
    }, s = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return mI(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(yI(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function yI({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const bI = {
  inView: {
    Feature: gI
  },
  tap: {
    Feature: dI
  },
  focus: {
    Feature: cI
  },
  hover: {
    Feature: uI
  }
};
function sw(e, t) {
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
function SI(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function xI(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Kc(e, t, r) {
  const n = e.getProps();
  return Tm(n, t, r !== void 0 ? r : n.custom, SI(e), xI(e));
}
let wI = Ie, Em = Ie;
const Mn = (e) => e * 1e3, Qr = (e) => e / 1e3, kI = {
  current: !1
}, lw = (e) => Array.isArray(e) && typeof e[0] == "number";
function uw(e) {
  return !!(!e || typeof e == "string" && cw[e] || lw(e) || Array.isArray(e) && e.every(uw));
}
const xa = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, cw = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: xa([0, 0.65, 0.55, 1]),
  circOut: xa([0.55, 0, 1, 0.45]),
  backIn: xa([0.31, 0.01, 0.66, -0.59]),
  backOut: xa([0.33, 1.53, 0.69, 0.99])
};
function dw(e) {
  if (e)
    return lw(e) ? xa(e) : Array.isArray(e) ? e.map(dw) : cw[e];
}
function CI(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = dw(s);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: n,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
function _I(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const fw = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, PI = 1e-7, TI = 12;
function EI(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = fw(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > PI && ++s < TI);
  return a;
}
function Ns(e, t, r, n) {
  if (e === t && r === n)
    return Ie;
  const o = (i) => EI(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : fw(o(i), t, n);
}
const $I = Ns(0.42, 0, 1, 1), AI = Ns(0, 0, 0.58, 1), pw = Ns(0.42, 0, 0.58, 1), RI = (e) => Array.isArray(e) && typeof e[0] != "number", hw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, mw = (e) => (t) => 1 - e(1 - t), vw = (e) => 1 - Math.sin(Math.acos(e)), $m = mw(vw), MI = hw($m), gw = Ns(0.33, 1.53, 0.69, 0.99), Am = mw(gw), OI = hw(Am), zI = (e) => (e *= 2) < 1 ? 0.5 * Am(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), II = {
  linear: Ie,
  easeIn: $I,
  easeInOut: pw,
  easeOut: AI,
  circIn: vw,
  circInOut: MI,
  circOut: $m,
  backIn: Am,
  backInOut: OI,
  backOut: gw,
  anticipate: zI
}, G0 = (e) => {
  if (Array.isArray(e)) {
    Em(e.length === 4);
    const [t, r, n, o] = e;
    return Ns(t, r, n, o);
  } else if (typeof e == "string")
    return II[e];
  return e;
}, Rm = (e, t) => (r) => !!(Ls(r) && F4.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), yw = (e, t, r) => (n) => {
  if (!Ls(n))
    return n;
  const [o, i, a, s] = n.match(Hc);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, FI = (e) => In(0, 255, e), lf = {
  ...Po,
  transform: (e) => Math.round(FI(e))
}, so = {
  test: Rm("rgb", "red"),
  parse: yw("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + lf.transform(e) + ", " + lf.transform(t) + ", " + lf.transform(r) + ", " + ja(Da.transform(n)) + ")"
};
function DI(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const zp = {
  test: Rm("#"),
  parse: DI,
  transform: so.transform
}, ri = {
  test: Rm("hsl", "hue"),
  parse: yw("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Rr.transform(ja(t)) + ", " + Rr.transform(ja(r)) + ", " + ja(Da.transform(n)) + ")"
}, ft = {
  test: (e) => so.test(e) || zp.test(e) || ri.test(e),
  parse: (e) => so.test(e) ? so.parse(e) : ri.test(e) ? ri.parse(e) : zp.parse(e),
  transform: (e) => Ls(e) ? e : e.hasOwnProperty("red") ? so.transform(e) : ri.transform(e)
}, $e = (e, t, r) => -r * e + r * t + e;
function uf(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function jI({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = uf(l, s, e + 1 / 3), i = uf(l, s, e), a = uf(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const cf = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, LI = [zp, so, ri], BI = (e) => LI.find((t) => t.test(e));
function K0(e) {
  const t = BI(e);
  let r = t.parse(e);
  return t === ri && (r = jI(r)), r;
}
const bw = (e, t) => {
  const r = K0(e), n = K0(t), o = { ...r };
  return (i) => (o.red = cf(r.red, n.red, i), o.green = cf(r.green, n.green, i), o.blue = cf(r.blue, n.blue, i), o.alpha = $e(r.alpha, n.alpha, i), so.transform(o));
};
function NI(e) {
  var t, r;
  return isNaN(e) && Ls(e) && (((t = e.match(Hc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Hx)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const Sw = {
  regex: z4,
  countKey: "Vars",
  token: "${v}",
  parse: Ie
}, xw = {
  regex: Hx,
  countKey: "Colors",
  token: "${c}",
  parse: ft.parse
}, ww = {
  regex: Hc,
  countKey: "Numbers",
  token: "${n}",
  parse: Po.parse
};
function df(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function Xu(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && df(r, Sw), df(r, xw), df(r, ww), r;
}
function kw(e) {
  return Xu(e).values;
}
function Cw(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Xu(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(Sw.token, a[l]) : l < n + r ? s = s.replace(xw.token, ft.transform(a[l])) : s = s.replace(ww.token, ja(a[l]));
    return s;
  };
}
const VI = (e) => typeof e == "number" ? 0 : e;
function WI(e) {
  const t = kw(e);
  return Cw(e)(t.map(VI));
}
const Fn = {
  test: NI,
  parse: kw,
  createTransformer: Cw,
  getAnimatableNone: WI
}, _w = (e, t) => (r) => `${r > 0 ? t : e}`;
function Pw(e, t) {
  return typeof e == "number" ? (r) => $e(e, t, r) : ft.test(e) ? bw(e, t) : e.startsWith("var(") ? _w(e, t) : Ew(e, t);
}
const Tw = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => Pw(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, UI = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Pw(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, Ew = (e, t) => {
  const r = Fn.createTransformer(t), n = Xu(e), o = Xu(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? Rn(Tw(n.values, o.values), r) : _w(e, t);
}, bs = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Y0 = (e, t) => (r) => $e(e, t, r);
function HI(e) {
  return typeof e == "number" ? Y0 : typeof e == "string" ? ft.test(e) ? bw : Ew : Array.isArray(e) ? Tw : typeof e == "object" ? UI : Y0;
}
function GI(e, t, r) {
  const n = [], o = r || HI(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Ie : t;
      s = Rn(l, s);
    }
    n.push(s);
  }
  return n;
}
function $w(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (Em(i === t.length), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = GI(t, n, o), s = a.length, l = (u) => {
    let c = 0;
    if (s > 1)
      for (; c < e.length - 2 && !(u < e[c + 1]); c++)
        ;
    const d = bs(e[c], e[c + 1], u);
    return a[c](d);
  };
  return r ? (u) => l(In(e[0], e[i - 1], u)) : l;
}
function KI(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = bs(0, t, n);
    e.push($e(r, 1, o));
  }
}
function YI(e) {
  const t = [0];
  return KI(t, e.length - 1), t;
}
function qI(e, t) {
  return e.map((r) => r * t);
}
function XI(e, t) {
  return e.map(() => t || pw).splice(0, e.length - 1);
}
function Qu({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = RI(n) ? n.map(G0) : G0(n), i = {
    done: !1,
    value: t[0]
  }, a = qI(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : YI(t),
    e
  ), s = $w(a, t, {
    ease: Array.isArray(o) ? o : XI(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Aw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const QI = 5;
function Rw(e, t, r) {
  const n = Math.max(t - QI, 0);
  return Aw(r - e(n), t - n);
}
const ff = 1e-3, ZI = 0.01, q0 = 10, JI = 0.05, eF = 1;
function tF({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  wI(e <= Mn(q0));
  let a = 1 - t;
  a = In(JI, eF, a), e = In(ZI, q0, Qr(e)), a < 1 ? (o = (u) => {
    const c = u * a, d = c * e, f = c - r, p = Ip(u, a), g = Math.exp(-d);
    return ff - f / p * g;
  }, i = (u) => {
    const d = u * a * e, f = d * r + r, p = Math.pow(a, 2) * Math.pow(u, 2) * e, g = Math.exp(-d), y = Ip(Math.pow(u, 2), a);
    return (-o(u) + ff > 0 ? -1 : 1) * ((f - p) * g) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - r) * e + 1;
    return -ff + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (r - u) * (e * e);
    return c * d;
  });
  const s = 5 / e, l = nF(o, i, s);
  if (e = Mn(e), isNaN(l))
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
const rF = 12;
function nF(e, t, r) {
  let n = r;
  for (let o = 1; o < rF; o++)
    n = n - e(n) / t(n);
  return n;
}
function Ip(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const oF = ["duration", "bounce"], iF = ["stiffness", "damping", "mass"];
function X0(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function aF(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!X0(e, iF) && X0(e, oF)) {
    const r = tF(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Mw({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f } = aF(n), p = c ? -Qr(c) : 0, g = l / (2 * Math.sqrt(s * u)), y = i - o, x = Qr(Math.sqrt(s / u)), m = Math.abs(y) < 5;
  r || (r = m ? 0.01 : 2), t || (t = m ? 5e-3 : 0.5);
  let h;
  if (g < 1) {
    const v = Ip(x, g);
    h = (w) => {
      const k = Math.exp(-g * x * w);
      return i - k * ((p + g * x * y) / v * Math.sin(v * w) + y * Math.cos(v * w));
    };
  } else if (g === 1)
    h = (v) => i - Math.exp(-x * v) * (y + (p + x * y) * v);
  else {
    const v = x * Math.sqrt(g * g - 1);
    h = (w) => {
      const k = Math.exp(-g * x * w), T = Math.min(v * w, 300);
      return i - k * ((p + g * x * y) * Math.sinh(T) + v * y * Math.cosh(T)) / v;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (v) => {
      const w = h(v);
      if (f)
        a.done = v >= d;
      else {
        let k = p;
        v !== 0 && (g < 1 ? k = Rw(h, v, w) : k = 0);
        const T = Math.abs(k) <= r, C = Math.abs(i - w) <= t;
        a.done = T && C;
      }
      return a.value = a.done ? i : w, a;
    }
  };
}
function Q0({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = ($) => s !== void 0 && $ < s || l !== void 0 && $ > l, g = ($) => s === void 0 ? l : l === void 0 || Math.abs(s - $) < Math.abs(l - $) ? s : l;
  let y = r * t;
  const x = d + y, m = a === void 0 ? x : a(x);
  m !== x && (y = m - d);
  const h = ($) => -y * Math.exp(-$ / n), v = ($) => m + h($), w = ($) => {
    const R = h($), M = v($);
    f.done = Math.abs(R) <= u, f.value = f.done ? m : M;
  };
  let k, T;
  const C = ($) => {
    p(f.value) && (k = $, T = Mw({
      keyframes: [f.value, g(f.value)],
      velocity: Rw(v, $, f.value),
      damping: o,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return C(0), {
    calculatedDuration: null,
    next: ($) => {
      let R = !1;
      return !T && k === void 0 && (R = !0, w($), C($)), k !== void 0 && $ > k ? T.next($ - k) : (!R && w($), f);
    }
  };
}
const sF = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => ve.update(t, !0),
    stop: () => nn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => He.isProcessing ? He.timestamp : performance.now()
  };
}, Z0 = 2e4;
function J0(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Z0; )
    t += r, n = e.next(t);
  return t >= Z0 ? 1 / 0 : t;
}
const lF = {
  decay: Q0,
  inertia: Q0,
  tween: Qu,
  keyframes: Qu,
  spring: Mw
};
function Zu({ autoplay: e = !0, delay: t = 0, driver: r = sF, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let p = 1, g = !1, y, x;
  const m = () => {
    x = new Promise((L) => {
      y = L;
    });
  };
  m();
  let h;
  const v = lF[o] || Qu;
  let w;
  v !== Qu && typeof n[0] != "number" && (w = $w([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const k = v({ ...f, keyframes: n });
  let T;
  s === "mirror" && (T = v({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let C = "idle", $ = null, R = null, M = null;
  k.calculatedDuration === null && i && (k.calculatedDuration = J0(k));
  const { calculatedDuration: j } = k;
  let ee = 1 / 0, H = 1 / 0;
  j !== null && (ee = j + a, H = ee * (i + 1) - a);
  let G = 0;
  const K = (L) => {
    if (R === null)
      return;
    p > 0 && (R = Math.min(R, L)), p < 0 && (R = Math.min(L - H / p, R)), $ !== null ? G = $ : G = Math.round(L - R) * p;
    const q = G - t * (p >= 0 ? 1 : -1), U = p >= 0 ? q < 0 : q > H;
    G = Math.max(q, 0), C === "finished" && $ === null && (G = H);
    let he = G, Me = k;
    if (i) {
      const Oe = G / ee;
      let qe = Math.floor(Oe), Xe = Oe % 1;
      !Xe && Oe >= 1 && (Xe = 1), Xe === 1 && qe--, qe = Math.min(qe, i + 1);
      const Ir = !!(qe % 2);
      Ir && (s === "reverse" ? (Xe = 1 - Xe, a && (Xe -= a / ee)) : s === "mirror" && (Me = T));
      let Fr = In(0, 1, Xe);
      G > H && (Fr = s === "reverse" && Ir ? 1 : 0), he = Fr * ee;
    }
    const ce = U ? { done: !1, value: n[0] } : Me.next(he);
    w && (ce.value = w(ce.value));
    let { done: ye } = ce;
    !U && j !== null && (ye = p >= 0 ? G >= H : G <= 0);
    const Te = $ === null && (C === "finished" || C === "running" && ye);
    return d && d(ce.value), Te && z(), ce;
  }, Y = () => {
    h && h.stop(), h = void 0;
  }, oe = () => {
    C = "idle", Y(), y(), m(), R = M = null;
  }, z = () => {
    C = "finished", c && c(), Y(), y();
  }, D = () => {
    if (g)
      return;
    h || (h = r(K));
    const L = h.now();
    l && l(), $ !== null ? R = L - $ : (!R || C === "finished") && (R = L), C === "finished" && m(), M = R, $ = null, C = "running", h.start();
  };
  e && D();
  const B = {
    then(L, q) {
      return x.then(L, q);
    },
    get time() {
      return Qr(G);
    },
    set time(L) {
      L = Mn(L), G = L, $ !== null || !h || p === 0 ? $ = L : R = h.now() - L / p;
    },
    get duration() {
      const L = k.calculatedDuration === null ? J0(k) : k.calculatedDuration;
      return Qr(L);
    },
    get speed() {
      return p;
    },
    set speed(L) {
      L === p || !h || (p = L, B.time = Qr(G));
    },
    get state() {
      return C;
    },
    play: D,
    pause: () => {
      C = "paused", $ = G;
    },
    stop: () => {
      g = !0, C !== "idle" && (C = "idle", u && u(), oe());
    },
    cancel: () => {
      M !== null && K(M), oe();
    },
    complete: () => {
      C = "finished";
    },
    sample: (L) => (R = 0, K(L))
  };
  return B;
}
function uF(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const cF = uF(() => Object.hasOwnProperty.call(Element.prototype, "animate")), dF = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), El = 10, fF = 2e4, pF = (e, t) => t.type === "spring" || e === "backgroundColor" || !uw(t.ease);
function hF(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(cF() && dF.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const u = () => {
    l = new Promise((h) => {
      s = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (pF(t, o)) {
    const h = Zu({
      ...o,
      repeat: 0,
      delay: 0
    });
    let v = { done: !1, value: c[0] };
    const w = [];
    let k = 0;
    for (; !v.done && k < fF; )
      v = h.sample(k), w.push(v.value), k += El;
    p = void 0, c = w, d = k - El, f = "linear";
  }
  const g = CI(e.owner.current, t, c, {
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
  o.syncStart && (g.startTime = He.isProcessing ? He.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
  const y = () => g.cancel(), x = () => {
    ve.update(y), s(), u();
  };
  return g.onfinish = () => {
    e.set(_I(c, o)), n && n(), x();
  }, {
    then(h, v) {
      return l.then(h, v);
    },
    attachTimeline(h) {
      return g.timeline = h, g.onfinish = null, Ie;
    },
    get time() {
      return Qr(g.currentTime || 0);
    },
    set time(h) {
      g.currentTime = Mn(h);
    },
    get speed() {
      return g.playbackRate;
    },
    set speed(h) {
      g.playbackRate = h;
    },
    get duration() {
      return Qr(d);
    },
    play: () => {
      a || (g.play(), nn(y));
    },
    pause: () => g.pause(),
    stop: () => {
      if (a = !0, g.playState === "idle")
        return;
      const { currentTime: h } = g;
      if (h) {
        const v = Zu({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(v.sample(h - El).value, v.sample(h).value, El);
      }
      x();
    },
    complete: () => g.finish(),
    cancel: x
  };
}
function mF({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: Ie,
    pause: Ie,
    stop: Ie,
    then: (i) => (i(), Promise.resolve()),
    cancel: Ie,
    complete: Ie
  });
  return t ? Zu({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const vF = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, gF = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), yF = {
  type: "keyframes",
  duration: 0.8
}, bF = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, SF = (e, { keyframes: t }) => t.length > 2 ? yF : _o.has(e) ? e.startsWith("scale") ? gF(t[1]) : vF : bF, Fp = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Fn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), xF = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function wF(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Hc) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = xF.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const kF = /([a-z-]*)\(.*?\)/g, Dp = {
  ...Fn,
  getAnimatableNone: (e) => {
    const t = e.match(kF);
    return t ? t.map(wF).join(" ") : e;
  }
}, CF = {
  ...Gx,
  // Color props
  color: ft,
  backgroundColor: ft,
  outlineColor: ft,
  fill: ft,
  stroke: ft,
  // Border props
  borderColor: ft,
  borderTopColor: ft,
  borderRightColor: ft,
  borderBottomColor: ft,
  borderLeftColor: ft,
  filter: Dp,
  WebkitFilter: Dp
}, Mm = (e) => CF[e];
function Ow(e, t) {
  let r = Mm(e);
  return r !== Dp && (r = Fn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const zw = (e) => /^0[^.\s]+$/.test(e);
function _F(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || zw(e);
}
function PF(e, t, r, n) {
  const o = Fp(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]), _F(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Ow(t, s);
    }
  return i;
}
function TF({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Om(e, t) {
  return e[t] || e.default || e;
}
const zm = (e, t, r, n = {}) => (o) => {
  const i = Om(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - Mn(a);
  const l = PF(t, e, r, i), u = l[0], c = l[l.length - 1], d = Fp(e, u), f = Fp(e, c);
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
  if (TF(i) || (p = {
    ...p,
    ...SF(e, p)
  }), p.duration && (p.duration = Mn(p.duration)), p.repeatDelay && (p.repeatDelay = Mn(p.repeatDelay)), !d || !f || kI.current || i.type === !1)
    return mF(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const g = hF(t, e, p);
    if (g)
      return g;
  }
  return Zu(p);
};
function Ju(e) {
  return !!($t(e) && e.add);
}
const Iw = (e) => /^\-?\d*\.?\d+$/.test(e);
function Im(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Fm(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Dm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Im(this.subscriptions, t), () => Fm(this.subscriptions, t);
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
const EF = (e) => !isNaN(parseFloat(e));
class $F {
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
      const { delta: i, timestamp: a } = He;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, ve.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => ve.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = EF(this.current), this.owner = r.owner;
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
    this.events[t] || (this.events[t] = new Dm());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), ve.read(() => {
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
      Aw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Ri(e, t) {
  return new $F(e, t);
}
const Fw = (e) => (t) => t.test(e), AF = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Dw = [Po, W, Rr, pn, j4, D4, AF], sa = (e) => Dw.find(Fw(e)), RF = [...Dw, ft, Fn], MF = (e) => RF.find(Fw(e));
function OF(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ri(r));
}
function zF(e, t) {
  const r = Kc(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = Z4(i[a]);
    OF(e, a, s);
  }
}
function IF(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (Iw(c) || zw(c)) ? c = parseFloat(c) : !MF(c) && Fn.test(u) && (c = Ow(l, u)), e.addValue(l, Ri(c, { owner: e })), r[l] === void 0 && (r[l] = c), c !== null && e.setBaseTarget(l, c));
    }
}
function FF(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function DF(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = FF(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function jF({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function jw(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || c && jF(c, d))
      continue;
    const g = {
      delay: r,
      elapsed: 0,
      ...Om(i || {}, d)
    };
    let y = !0;
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const h = e.getProps()[Lx];
      h && (y = !1, g.elapsed = window.HandoffAppearAnimations(h, d, f, ve), g.syncStart = !0);
    }
    let x = y && p === f.get();
    if (g.type === "spring" && (f.getVelocity() || g.velocity) && (x = !1), f.animation && (x = !1), x)
      continue;
    f.start(zm(d, f, p, e.shouldReduceMotion && _o.has(d) ? { type: !1 } : g));
    const m = f.animation;
    Ju(l) && (l.add(d), m.then(() => l.remove(d))), u.push(m);
  }
  return a && Promise.all(u).then(() => {
    a && zF(e, a);
  }), u;
}
function jp(e, t, r = {}) {
  const n = Kc(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(jw(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
    return LF(e, t, u + l, c, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function LF(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return Array.from(e.variantChildren).sort(BF).forEach((u, c) => {
    u.notify("AnimationStart", t), a.push(jp(u, t, {
      ...i,
      delay: r + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function BF(e, t) {
  return e.sortNodePosition(t);
}
function NF(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => jp(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = jp(e, t, r);
  else {
    const o = typeof t == "function" ? Kc(e, t, r.custom) : t;
    n = Promise.all(jw(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const VF = [...ym].reverse(), WF = ym.length;
function UF(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => NF(e, r, n)));
}
function HF(e) {
  let t = UF(e);
  const r = KF();
  let n = !0;
  const o = (l, u) => {
    const c = Kc(e, u);
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
    for (let m = 0; m < WF; m++) {
      const h = VF[m], v = r[h], w = c[h] !== void 0 ? c[h] : d[h], k = gs(w), T = h === u ? v.isActive : null;
      T === !1 && (y = m);
      let C = w === d[h] && w !== c[h] && k;
      if (C && n && e.manuallyAnimateOnMount && (C = !1), v.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !w && !v.prevProp || // Or if the prop doesn't define an animation
      Wc(w) || typeof w == "boolean")
        continue;
      const $ = GF(v.prevProp, w);
      let R = $ || // If we're making this variant active, we want to always make it active
      h === u && v.isActive && !C && k || // If we removed a higher-priority variant (i is in reverse order)
      m > y && k;
      const M = Array.isArray(w) ? w : [w];
      let j = M.reduce(o, {});
      T === !1 && (j = {});
      const { prevResolvedValues: ee = {} } = v, H = {
        ...ee,
        ...j
      }, G = (K) => {
        R = !0, p.delete(K), v.needsAnimating[K] = !0;
      };
      for (const K in H) {
        const Y = j[K], oe = ee[K];
        g.hasOwnProperty(K) || (Y !== oe ? qu(Y) && qu(oe) ? !sw(Y, oe) || $ ? G(K) : v.protectedKeys[K] = !0 : Y !== void 0 ? G(K) : p.add(K) : Y !== void 0 && p.has(K) ? G(K) : v.protectedKeys[K] = !0);
      }
      v.prevProp = w, v.prevResolvedValues = j, v.isActive && (g = { ...g, ...j }), n && e.blockInitialAnimation && (R = !1), R && !C && f.push(...M.map((K) => ({
        animation: K,
        options: { type: h, ...l }
      })));
    }
    if (p.size) {
      const m = {};
      p.forEach((h) => {
        const v = e.getBaseTarget(h);
        v !== void 0 && (m[h] = v);
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
      var g;
      return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
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
function GF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !sw(t, e) : !1;
}
function Kn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function KF() {
  return {
    animate: Kn(!0),
    whileInView: Kn(),
    whileHover: Kn(),
    whileTap: Kn(),
    whileDrag: Kn(),
    whileFocus: Kn(),
    exit: Kn()
  };
}
class YF extends Nn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = HF(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Wc(t) && (this.unmount = t.subscribe(this.node));
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
let qF = 0;
class XF extends Nn {
  constructor() {
    super(...arguments), this.id = qF++;
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
const QF = {
  animation: {
    Feature: YF
  },
  exit: {
    Feature: XF
  }
}, ey = (e, t) => Math.abs(e - t);
function ZF(e, t) {
  const r = ey(e.x, t.x), n = ey(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Lw {
  constructor(t, r, { transformPagePoint: n, contextWindow: o } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = hf(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, f = ZF(c.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !f)
        return;
      const { point: p } = c, { timestamp: g } = He;
      this.history.push({ ...p, timestamp: g });
      const { onStart: y, onMove: x } = this.handlers;
      d || (y && y(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, d) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = pf(d, this.transformPagePoint), ve.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, d) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: f, onSessionEnd: p } = this.handlers, g = hf(c.type === "pointercancel" ? this.lastMoveEventInfo : pf(d, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, g), p && p(c, g);
    }, !rw(t))
      return;
    this.handlers = r, this.transformPagePoint = n, this.contextWindow = o || window;
    const i = Gc(t), a = pf(i, this.transformPagePoint), { point: s } = a, { timestamp: l } = He;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: u } = r;
    u && u(t, hf(a, this.history)), this.removeListeners = Rn(Xr(this.contextWindow, "pointermove", this.handlePointerMove), Xr(this.contextWindow, "pointerup", this.handlePointerUp), Xr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), nn(this.updatePoint);
  }
}
function pf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ty(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function hf({ point: e }, t) {
  return {
    point: e,
    delta: ty(e, Bw(t)),
    offset: ty(e, JF(t)),
    velocity: eD(t, 0.1)
  };
}
function JF(e) {
  return e[0];
}
function Bw(e) {
  return e[e.length - 1];
}
function eD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Bw(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Mn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = Qr(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function jt(e) {
  return e.max - e.min;
}
function Lp(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function ry(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = $e(t.min, t.max, e.origin), e.scale = jt(r) / jt(t), (Lp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = $e(r.min, r.max, e.origin) - e.originPoint, (Lp(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function La(e, t, r, n) {
  ry(e.x, t.x, r.x, n ? n.originX : void 0), ry(e.y, t.y, r.y, n ? n.originY : void 0);
}
function ny(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + jt(t);
}
function tD(e, t, r) {
  ny(e.x, t.x, r.x), ny(e.y, t.y, r.y);
}
function oy(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + jt(t);
}
function Ba(e, t, r) {
  oy(e.x, t.x, r.x), oy(e.y, t.y, r.y);
}
function rD(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? $e(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? $e(r, e, n.max) : Math.min(e, r)), e;
}
function iy(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function nD(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: iy(e.x, r, o),
    y: iy(e.y, t, n)
  };
}
function ay(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function oD(e, t) {
  return {
    x: ay(e.x, t.x),
    y: ay(e.y, t.y)
  };
}
function iD(e, t) {
  let r = 0.5;
  const n = jt(e), o = jt(t);
  return o > n ? r = bs(t.min, t.max - n, e.min) : n > o && (r = bs(e.min, e.max - o, t.min)), In(0, 1, r);
}
function aD(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Bp = 0.35;
function sD(e = Bp) {
  return e === !1 ? e = 0 : e === !0 && (e = Bp), {
    x: sy(e, "left", "right"),
    y: sy(e, "top", "bottom")
  };
}
function sy(e, t, r) {
  return {
    min: ly(e, t),
    max: ly(e, r)
  };
}
function ly(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const uy = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ni = () => ({
  x: uy(),
  y: uy()
}), cy = () => ({ min: 0, max: 0 }), Le = () => ({
  x: cy(),
  y: cy()
});
function xr(e) {
  return [e("x"), e("y")];
}
function Nw({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function lD({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function uD(e, t) {
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
function mf(e) {
  return e === void 0 || e === 1;
}
function Np({ scale: e, scaleX: t, scaleY: r }) {
  return !mf(e) || !mf(t) || !mf(r);
}
function Qn(e) {
  return Np(e) || Vw(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Vw(e) {
  return dy(e.x) || dy(e.y);
}
function dy(e) {
  return e && e !== "0%";
}
function ec(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function fy(e, t, r, n, o) {
  return o !== void 0 && (e = ec(e, o, n)), ec(e, r, n) + t;
}
function Vp(e, t = 0, r = 1, n, o) {
  e.min = fy(e.min, t, r, n, o), e.max = fy(e.max, t, r, n, o);
}
function Ww(e, { x: t, y: r }) {
  Vp(e.x, t.translate, t.scale, t.originPoint), Vp(e.y, r.translate, r.scale, r.originPoint);
}
function cD(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && oi(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, Ww(e, a)), n && Qn(i.latestValues) && oi(e, i.latestValues));
  }
  t.x = py(t.x), t.y = py(t.y);
}
function py(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function vn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function hy(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = $e(e.min, e.max, i);
  Vp(e, t[r], t[n], a, t.scale);
}
const dD = ["x", "scaleX", "originX"], fD = ["y", "scaleY", "originY"];
function oi(e, t) {
  hy(e.x, t, dD), hy(e.y, t, fD);
}
function Uw(e, t) {
  return Nw(uD(e.getBoundingClientRect(), t));
}
function pD(e, t, r) {
  const n = Uw(e, r), { scroll: o } = t;
  return o && (vn(n.x, o.offset.x), vn(n.y, o.offset.y)), n;
}
const Hw = ({ current: e }) => e ? e.ownerDocument.defaultView : null, hD = /* @__PURE__ */ new WeakMap();
class mD {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Le(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Gc(l, "page").point);
    }, i = (l, u) => {
      const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
      if (c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ow(c), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), xr((g) => {
        let y = this.getAxisMotionValue(g).get() || 0;
        if (Rr.test(y)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const m = x.layout.layoutBox[g];
            m && (y = jt(m) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[g] = y;
      }), f && ve.update(() => f(l, u), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, a = (l, u) => {
      const { dragPropagation: c, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: g } = u;
      if (d && this.currentDirection === null) {
        this.currentDirection = vD(g), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), p && p(l, u);
    }, s = (l, u) => this.stop(l, u);
    this.panSession = new Lw(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      contextWindow: Hw(this.visualElement)
    });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ve.update(() => i(t, r));
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
    if (!n || !$l(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = rD(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
    r && ti(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = nD(o.layoutBox, r) : this.constraints = !1, this.elastic = sD(n), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && xr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = aD(o.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ti(t))
      return !1;
    const n = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = pD(n, o.root, this.visualElement.getTransformPagePoint());
    let a = oD(o.layout.layoutBox, i);
    if (r) {
      const s = r(lD(a));
      this.hasMutatedConstraints = !!s, s && (a = Nw(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, u = xr((c) => {
      if (!$l(c, r, this.currentDirection))
        return;
      let d = l && l[c] || {};
      a && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, g = {
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
      return this.startAxisValueAnimation(c, g);
    });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(zm(t, n, 0, r));
  }
  stopAnimation() {
    xr((t) => this.getAxisMotionValue(t).stop());
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
    xr((r) => {
      const { drag: n } = this.getProps();
      if (!$l(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - $e(a, s, 0.5));
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
    if (!ti(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    xr((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = iD({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), xr((a) => {
      if (!$l(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: u } = this.constraints[a];
      s.set($e(l, u, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    hD.set(this.visualElement, this);
    const t = this.visualElement.current, r = Xr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      ti(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = Kr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (xr((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Bp, dragMomentum: s = !0 } = t;
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
function $l(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function vD(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class gD extends Nn {
  constructor(t) {
    super(t), this.removeGroupControls = Ie, this.removeListeners = Ie, this.controls = new mD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ie;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const my = (e) => (t, r) => {
  e && ve.update(() => e(t, r));
};
class yD extends Nn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ie;
  }
  onPointerDown(t) {
    this.session = new Lw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Hw(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: my(t),
      onStart: my(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && ve.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Xr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Gw() {
  const e = b.useContext(Ds);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = b.useId();
  return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function bD() {
  return SD(b.useContext(Ds));
}
function SD(e) {
  return e === null ? !0 : e.isPresent;
}
const uu = {
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
function vy(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const la = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (W.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = vy(e, t.target.x), n = vy(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, xD = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Fn.parse(e);
    if (o.length > 5)
      return n;
    const i = Fn.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const u = $e(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= u), typeof o[3 + a] == "number" && (o[3 + a] /= u), i(o);
  }
};
class wD extends mo.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    A4(kD), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), uu.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || ve.postRender(() => {
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
function Kw(e) {
  const [t, r] = Gw(), n = b.useContext(Sm);
  return mo.createElement(wD, { ...e, layoutGroup: n, switchLayoutGroup: b.useContext(Nx), isPresent: t, safeToRemove: r });
}
const kD = {
  borderRadius: {
    ...la,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: la,
  borderTopRightRadius: la,
  borderBottomLeftRadius: la,
  borderBottomRightRadius: la,
  boxShadow: xD
}, Yw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], CD = Yw.length, gy = (e) => typeof e == "string" ? parseFloat(e) : e, yy = (e) => typeof e == "number" || W.test(e);
function _D(e, t, r, n, o, i) {
  o ? (e.opacity = $e(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    PD(n)
  ), e.opacityExit = $e(t.opacity !== void 0 ? t.opacity : 1, 0, TD(n))) : i && (e.opacity = $e(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < CD; a++) {
    const s = `border${Yw[a]}Radius`;
    let l = by(t, s), u = by(r, s);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || yy(l) === yy(u) ? (e[s] = Math.max($e(gy(l), gy(u), n), 0), (Rr.test(u) || Rr.test(l)) && (e[s] += "%")) : e[s] = u;
  }
  (t.rotate || r.rotate) && (e.rotate = $e(t.rotate || 0, r.rotate || 0, n));
}
function by(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const PD = qw(0, 0.5, $m), TD = qw(0.5, 0.95, Ie);
function qw(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(bs(e, t, n));
}
function Sy(e, t) {
  e.min = t.min, e.max = t.max;
}
function Kt(e, t) {
  Sy(e.x, t.x), Sy(e.y, t.y);
}
function xy(e, t, r, n, o) {
  return e -= t, e = ec(e, 1 / r, n), o !== void 0 && (e = ec(e, 1 / o, n)), e;
}
function ED(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (Rr.test(t) && (t = parseFloat(t), t = $e(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = $e(i.min, i.max, n);
  e === i && (s -= t), e.min = xy(e.min, t, r, s, o), e.max = xy(e.max, t, r, s, o);
}
function wy(e, t, [r, n, o], i, a) {
  ED(e, t[r], t[n], t[o], t.scale, i, a);
}
const $D = ["x", "scaleX", "originX"], AD = ["y", "scaleY", "originY"];
function ky(e, t, r, n) {
  wy(e.x, t, $D, r ? r.x : void 0, n ? n.x : void 0), wy(e.y, t, AD, r ? r.y : void 0, n ? n.y : void 0);
}
function Cy(e) {
  return e.translate === 0 && e.scale === 1;
}
function Xw(e) {
  return Cy(e.x) && Cy(e.y);
}
function RD(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Qw(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function _y(e) {
  return jt(e.x) / jt(e.y);
}
class MD {
  constructor() {
    this.members = [];
  }
  add(t) {
    Im(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Fm(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Py(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `), u && (n += `rotateX(${u}deg) `), c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const OD = (e, t) => e.depth - t.depth;
class zD {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Im(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Fm(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(OD), this.isDirty = !1, this.children.forEach(t);
  }
}
function ID(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (nn(n), e(i - t));
  };
  return ve.read(n, !0), () => nn(n);
}
function FD(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function DD(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function jD(e, t, r) {
  const n = $t(e) ? e : Ri(e);
  return n.start(zm("", n, t, r)), n.animation;
}
const Ty = ["", "X", "Y", "Z"], LD = { visibility: "hidden" }, Ey = 1e3;
let BD = 0;
const Zn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Zw({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = BD++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Zn.totalNodes = Zn.resolvedTargetDeltas = Zn.recalculatedProjection = 0, this.nodes.forEach(WD), this.nodes.forEach(YD), this.nodes.forEach(qD), this.nodes.forEach(UD), FD(Zn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new zD());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Dm()), this.eventHandlers.get(a).add(s);
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
      this.isSVG = DD(a), this.instance = a;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = ID(f, 250), uu.hasAnimatedSinceResize && (uu.hasAnimatedSinceResize = !1, this.nodes.forEach(Ay));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || ej, { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !Qw(this.targetLayout, g) || p, v = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const w = {
            ...Om(y, "layout"),
            onPlay: x,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Ay(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, nn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(XD), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach($y);
        return;
      }
      this.isUpdating || this.nodes.forEach(GD), this.isUpdating = !1, this.nodes.forEach(KD), this.nodes.forEach(ND), this.nodes.forEach(VD), this.clearAllSnapshots();
      const s = performance.now();
      He.delta = In(0, 1e3 / 60, s - He.timestamp), He.timestamp = s, He.isProcessing = !0, of.update.process(He), of.preRender.process(He), of.render.process(He), He.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(HD), this.sharedNodes.forEach(QD);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ve.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ve.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = Le(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Xw(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      a && (s || Qn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), tj(l), {
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
        return Le();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (vn(s.x, l.offset.x), vn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = Le();
      Kt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Kt(s, a);
            const { scroll: f } = this.root;
            f && (vn(s.x, -f.offset.x), vn(s.y, -f.offset.y));
          }
          vn(s.x, c.offset.x), vn(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = Le();
      Kt(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s && c.options.layoutScroll && c.scroll && c !== c.root && oi(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Qn(c.latestValues) && oi(l, c.latestValues);
      }
      return Qn(this.latestValues) && oi(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = Le();
      Kt(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Qn(u.latestValues))
          continue;
        Np(u.latestValues) && u.updateSnapshot();
        const c = Le(), d = u.measurePageBox();
        Kt(c, d), ky(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Qn(this.latestValues) && ky(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== He.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = He.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), Ba(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Le(), this.targetWithTransforms = Le()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), tD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Kt(this.target, this.layout.layoutBox), Ww(this.target, this.targetDelta)) : Kt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Le(), this.relativeTargetOrigin = Le(), Ba(this.relativeTargetOrigin, this.target, p.target), Kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Zn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Np(this.parent.latestValues) || Vw(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let u = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === He.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      Kt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      cD(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: g } = s;
      if (!g) {
        this.projectionTransform && (this.projectionDelta = ni(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = ni(), this.projectionDeltaWithTransform = ni());
      const y = this.projectionTransform;
      La(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = Py(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Zn.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = ni();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Le(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, x = this.getStack(), m = !x || x.members.length <= 1, h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(JD));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (w) => {
        const k = w / 1e3;
        Ry(d.x, a.x, k), Ry(d.y, a.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ba(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), ZD(this.relativeTarget, this.relativeTargetOrigin, f, k), v && RD(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = Le()), Kt(v, this.relativeTarget)), y && (this.animationValues = c, _D(c, u, this.latestValues, k, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (nn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ve.update(() => {
        uu.hasAnimatedSinceResize = !0, this.currentAnimation = jD(0, Ey, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ey), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: u, latestValues: c } = a;
      if (!(!s || !l || !u)) {
        if (this !== a && this.layout && u && Jw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Le();
          const d = jt(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = jt(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        Kt(s, l), oi(s, c), La(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new MD()), this.sharedNodes.get(a).add(s);
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
      for (let c = 0; c < Ty.length; c++) {
        const d = "rotate" + Ty[c];
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
        return LD;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = lu(a == null ? void 0 : a.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = lu(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Qn(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = Py(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in Ku) {
        if (f[y] === void 0)
          continue;
        const { correct: x, applyTo: m } = Ku[y], h = u.transform === "none" ? f[y] : x(f[y], d);
        if (m) {
          const v = m.length;
          for (let w = 0; w < v; w++)
            u[m[w]] = h;
        } else
          u[y] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? lu(a == null ? void 0 : a.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach($y), this.root.sharedNodes.clear();
    }
  };
}
function ND(e) {
  e.updateLayout();
}
function VD(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? xr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = jt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : Jw(i, r.layoutBox, n) && xr((d) => {
      const f = a ? r.measuredBox[d] : r.layoutBox[d], p = jt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = ni();
    La(s, n, r.layoutBox);
    const l = ni();
    a ? La(l, e.applyTransform(o, !0), r.measuredBox) : La(l, n, r.layoutBox);
    const u = !Xw(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = Le();
          Ba(g, r.layoutBox, f.layoutBox);
          const y = Le();
          Ba(y, n, p.layoutBox), Qw(g, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = d);
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
function WD(e) {
  Zn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function UD(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function HD(e) {
  e.clearSnapshot();
}
function $y(e) {
  e.clearMeasurements();
}
function GD(e) {
  e.isLayoutDirty = !1;
}
function KD(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Ay(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function YD(e) {
  e.resolveTargetDelta();
}
function qD(e) {
  e.calcProjection();
}
function XD(e) {
  e.resetRotation();
}
function QD(e) {
  e.removeLeadSnapshot();
}
function Ry(e, t, r) {
  e.translate = $e(t.translate, 0, r), e.scale = $e(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function My(e, t, r, n) {
  e.min = $e(t.min, r.min, n), e.max = $e(t.max, r.max, n);
}
function ZD(e, t, r, n) {
  My(e.x, t.x, r.x, n), My(e.y, t.y, r.y, n);
}
function JD(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ej = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Oy = (e) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e), zy = Oy("applewebkit/") && !Oy("chrome/") ? Math.round : Ie;
function Iy(e) {
  e.min = zy(e.min), e.max = zy(e.max);
}
function tj(e) {
  Iy(e.x), Iy(e.y);
}
function Jw(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Lp(_y(t), _y(r), 0.2);
}
const rj = Zw({
  attachResizeListener: (e, t) => Kr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), vf = {
  current: void 0
}, ek = Zw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!vf.current) {
      const e = new rj({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), vf.current = e;
    }
    return vf.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), nj = {
  pan: {
    Feature: yD
  },
  drag: {
    Feature: gD,
    ProjectionNode: ek,
    MeasureLayout: Kw
  }
}, oj = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function ij(e) {
  const t = oj.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
function Wp(e, t, r = 1) {
  const [n, o] = ij(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return Iw(a) ? parseFloat(a) : a;
  } else
    return Mp(o) ? Wp(o, t, r + 1) : o;
}
function aj(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!Mp(i))
      return;
    const a = Wp(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!Mp(i))
      continue;
    const a = Wp(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const sj = /* @__PURE__ */ new Set([
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
]), tk = (e) => sj.has(e), lj = (e) => Object.keys(e).some(tk), Fy = (e) => e === Po || e === W, Dy = (e, t) => parseFloat(e.split(", ")[t]), jy = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Dy(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? Dy(i[1], e) : 0;
  }
}, uj = /* @__PURE__ */ new Set(["x", "y", "z"]), cj = js.filter((e) => !uj.has(e));
function dj(e) {
  const t = [];
  return cj.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Mi = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: jy(4, 13),
  y: jy(5, 14)
};
Mi.translateX = Mi.x;
Mi.translateY = Mi.y;
const fj = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((u) => {
    s[u] = Mi[u](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((u) => {
    const c = t.getValue(u);
    c && c.jump(s[u]), e[u] = Mi[u](l, i);
  }), e;
}, pj = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(tk);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const u = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let c = r[l], d = sa(c);
    const f = t[l];
    let p;
    if (qu(f)) {
      const g = f.length, y = f[0] === null ? 1 : 0;
      c = f[y], d = sa(c);
      for (let x = y; x < g && f[x] !== null; x++)
        p ? Em(sa(f[x]) === p) : p = sa(f[x]);
    } else
      p = sa(f);
    if (d !== p)
      if (Fy(d) && Fy(p)) {
        const g = u.get();
        typeof g == "string" && u.set(parseFloat(g)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === W && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(p.transform(c)) : t[l] = d.transform(f) : (a || (i = dj(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], u.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, u = fj(t, e, s);
    return i.length && i.forEach(([c, d]) => {
      e.getValue(c).set(d);
    }), e.render(), Vc && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function hj(e, t, r, n) {
  return lj(t) ? pj(e, t, r, n) : { target: t, transitionEnd: n };
}
const mj = (e, t, r, n) => {
  const o = aj(e, t, n);
  return t = o.target, n = o.transitionEnd, hj(e, t, r, n);
}, Up = { current: null }, rk = { current: !1 };
function vj() {
  if (rk.current = !0, !!Vc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Up.current = e.matches;
      e.addListener(t), t();
    } else
      Up.current = !1;
}
function gj(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if ($t(i))
      e.addValue(o, i), Ju(n) && n.add(o);
    else if ($t(a))
      e.addValue(o, Ri(i, { owner: e })), Ju(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Ri(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Ly = /* @__PURE__ */ new WeakMap(), nk = Object.keys(ys), yj = nk.length, By = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], bj = bm.length;
class Sj {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => ve.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = Uc(r), this.isVariantNode = Bx(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && $t(f) && (f.set(s[d], !1), Ju(u) && u.add(d));
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
    this.current = t, Ly.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), rk.current || vj(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Up.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ly.delete(this.current), this.projection && this.projection.unmount(), nn(this.notifyUpdate), nn(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = _o.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ve.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
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
    for (let l = 0; l < yj; l++) {
      const u = nk[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: p } = ys[u];
      f && (a = f), c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), p && (s = p));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && ti(d),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Le();
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
    for (let n = 0; n < By.length; n++) {
      const o = By[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = gj(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < bj; n++) {
      const o = bm[n], i = this.props[o];
      (gs(i) || i === !1) && (r[o] = i);
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
    return n === void 0 && r !== void 0 && (n = Ri(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Tm(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !$t(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Dm()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class ok extends Sj {
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
    let a = DF(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      IF(this, n, a);
      const s = mj(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function xj(e) {
  return window.getComputedStyle(e);
}
class wj extends ok {
  readValueFromInstance(t, r) {
    if (_o.has(r)) {
      const n = Mm(r);
      return n && n.default || 0;
    } else {
      const n = xj(t), o = (Ux(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Uw(t, r);
  }
  build(t, r, n, o) {
    wm(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Pm(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    $t(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Xx(t, r, n, o);
  }
}
class kj extends ok {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (_o.has(r)) {
      const n = Mm(r);
      return n && n.default || 0;
    }
    return r = Qx.has(r) ? r : gm(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Le();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Jx(t, r);
  }
  build(t, r, n, o) {
    Cm(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Zx(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = _m(t.tagName), super.mount(t);
  }
}
const Cj = (e, t) => xm(e) ? new kj(t, { enableHardwareAcceleration: !1 }) : new wj(t, { enableHardwareAcceleration: !0 }), _j = {
  layout: {
    ProjectionNode: ek,
    MeasureLayout: Kw
  }
}, Pj = {
  ...QF,
  ...bI,
  ...nj,
  ..._j
}, Vs = /* @__PURE__ */ E4((e, t) => aI(e, t, Pj, Cj));
function ik() {
  const e = b.useRef(!1);
  return vm(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Tj() {
  const e = ik(), [t, r] = b.useState(0), n = b.useCallback(() => {
    e.current && r(t + 1);
  }, [t]);
  return [b.useCallback(() => ve.postRender(n), [n]), t];
}
class Ej extends b.Component {
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
function $j({ children: e, isPresent: t }) {
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
  }, [t]), b.createElement(Ej, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }));
}
const gf = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: i, mode: a }) => {
  const s = ew(Aj), l = b.useId(), u = b.useMemo(
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
  }, [r]), a === "popLayout" && (e = b.createElement($j, { isPresent: r }, e)), b.createElement(Ds.Provider, { value: u }, e);
};
function Aj() {
  return /* @__PURE__ */ new Map();
}
function Rj(e) {
  return b.useEffect(() => () => e(), []);
}
const Jn = (e) => e.key || "";
function Mj(e, t) {
  e.forEach((r) => {
    const n = Jn(r);
    t.set(n, r);
  });
}
function Oj(e) {
  const t = [];
  return b.Children.forEach(e, (r) => {
    b.isValidElement(r) && t.push(r);
  }), t;
}
const Yc = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: i = !0, mode: a = "sync" }) => {
  const s = b.useContext(Sm).forceRender || Tj()[0], l = ik(), u = Oj(e);
  let c = u;
  const d = b.useRef(/* @__PURE__ */ new Map()).current, f = b.useRef(c), p = b.useRef(/* @__PURE__ */ new Map()).current, g = b.useRef(!0);
  if (vm(() => {
    g.current = !1, Mj(u, p), f.current = c;
  }), Rj(() => {
    g.current = !0, p.clear(), d.clear();
  }), g.current)
    return b.createElement(b.Fragment, null, c.map((h) => b.createElement(gf, { key: Jn(h), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: i, mode: a }, h)));
  c = [...c];
  const y = f.current.map(Jn), x = u.map(Jn), m = y.length;
  for (let h = 0; h < m; h++) {
    const v = y[h];
    x.indexOf(v) === -1 && !d.has(v) && d.set(v, void 0);
  }
  return a === "wait" && d.size && (c = []), d.forEach((h, v) => {
    if (x.indexOf(v) !== -1)
      return;
    const w = p.get(v);
    if (!w)
      return;
    const k = y.indexOf(v);
    let T = h;
    if (!T) {
      const C = () => {
        d.delete(v);
        const $ = Array.from(p.keys()).filter((R) => !x.includes(R));
        if ($.forEach((R) => p.delete(R)), f.current = u.filter((R) => {
          const M = Jn(R);
          return (
            // filter out the node exiting
            M === v || // filter out the leftover children
            $.includes(M)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          s(), n && n();
        }
      };
      T = b.createElement(gf, { key: Jn(w), isPresent: !1, onExitComplete: C, custom: t, presenceAffectsLayout: i, mode: a }, w), d.set(v, T);
    }
    c.splice(k, 0, T);
  }), c = c.map((h) => {
    const v = h.key;
    return d.has(v) ? h : b.createElement(gf, { key: Jn(h), isPresent: !0, presenceAffectsLayout: i, mode: a }, h);
  }), b.createElement(b.Fragment, null, d.size ? c : c.map((h) => b.cloneElement(h)));
};
var zj = {
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
}, ak = b.memo((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: i = !1,
    position: a = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: u = zj,
    toastSpacing: c = "0.5rem"
  } = e, [d, f] = b.useState(s), p = bD();
  Gu(() => {
    p || n == null || n();
  }, [p]), Gu(() => {
    f(s);
  }, [s]);
  const g = () => f(null), y = () => f(s), x = () => {
    p && o();
  };
  b.useEffect(() => {
    p && i && o();
  }, [p, i, o]), y4(x, d);
  const m = b.useMemo(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: c,
      ...l
    }),
    [l, c]
  ), h = b.useMemo(() => v4(a), [a]);
  return /* @__PURE__ */ E.jsx(
    Vs.div,
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
      style: h,
      children: /* @__PURE__ */ E.jsx(
        ne.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: m,
          children: Hr(r, { id: t, onClose: x })
        }
      )
    }
  );
});
ak.displayName = "ToastComponent";
var Ny = {
  path: /* @__PURE__ */ E.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ E.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ E.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ E.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Ws = Pe((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: i = !1,
    children: a,
    className: s,
    __css: l,
    ...u
  } = e, c = we("chakra-icon", s), d = Is("Icon", e), f = {
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
  }, g = n ?? Ny.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ E.jsx(ne.svg, { as: r, ...p, ...u });
  const y = a ?? Ny.path;
  return /* @__PURE__ */ E.jsx(ne.svg, { verticalAlign: "middle", viewBox: g, ...p, ...u, children: y });
});
Ws.displayName = "Icon";
function Ij(e) {
  return /* @__PURE__ */ E.jsx(Ws, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ E.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function Fj(e) {
  return /* @__PURE__ */ E.jsx(Ws, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ E.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function Vy(e) {
  return /* @__PURE__ */ E.jsx(Ws, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ E.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var Dj = AE({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), jm = Pe((e, t) => {
  const r = Is("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = Bn(e), u = we("chakra-spinner", s), c = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${Dj} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ E.jsx(
    ne.div,
    {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && /* @__PURE__ */ E.jsx(ne.span, { srOnly: !0, children: n })
    }
  );
});
jm.displayName = "Spinner";
var [jj, Lm] = Wt({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [Lj, Bm] = Wt({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), sk = {
  info: { icon: Fj, colorScheme: "blue" },
  warning: { icon: Vy, colorScheme: "orange" },
  success: { icon: Ij, colorScheme: "green" },
  error: { icon: Vy, colorScheme: "red" },
  loading: { icon: jm, colorScheme: "blue" }
};
function Bj(e) {
  return sk[e].colorScheme;
}
function Nj(e) {
  return sk[e].icon;
}
var lk = Pe(
  function(t, r) {
    const n = Bm(), { status: o } = Lm(), i = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ E.jsx(
      ne.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: we("chakra-alert__desc", t.className),
        __css: i
      }
    );
  }
);
lk.displayName = "AlertDescription";
function uk(e) {
  const { status: t } = Lm(), r = Nj(t), n = Bm(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ E.jsx(
    ne.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: we("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ E.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
uk.displayName = "AlertIcon";
var ck = Pe(
  function(t, r) {
    const n = Bm(), { status: o } = Lm();
    return /* @__PURE__ */ E.jsx(
      ne.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: we("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
ck.displayName = "AlertTitle";
var dk = Pe(function(t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = Bn(t), s = (n = t.colorScheme) != null ? n : Bj(o), l = Fs("Alert", { ...t, colorScheme: s }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ E.jsx(jj, { value: { status: o }, children: /* @__PURE__ */ E.jsx(Lj, { value: l, children: /* @__PURE__ */ E.jsx(
    ne.div,
    {
      "data-status": o,
      role: i ? "alert" : void 0,
      ref: r,
      ...a,
      className: we("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
dk.displayName = "Alert";
function Vj(e) {
  return /* @__PURE__ */ E.jsx(Ws, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ E.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var qc = Pe(
  function(t, r) {
    const n = Is("CloseButton", t), { children: o, isDisabled: i, __css: a, ...s } = Bn(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ E.jsx(
      ne.button,
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
        children: o || /* @__PURE__ */ E.jsx(Vj, { width: "1em", height: "1em" })
      }
    );
  }
);
qc.displayName = "CloseButton";
var Wj = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Na = Uj(Wj);
function Uj(e) {
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
      const a = Hj(o, i), { position: s, id: l } = a;
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
        const s = { ...a }, { position: l, index: u } = F0(s, o);
        return l && u !== -1 && (s[l][u] = {
          ...s[l][u],
          ...i,
          message: Kj(i)
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
        const a = Fx(i, o);
        return a ? {
          ...i,
          [a]: i[a].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : i;
      });
    },
    isActive: (o) => !!F0(Na.getState(), o).position
  };
}
var Wy = 0;
function Hj(e, t = {}) {
  var r, n;
  Wy += 1;
  const o = (r = t.id) != null ? r : Wy, i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Na.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var Gj = (e) => {
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
  return /* @__PURE__ */ E.jsxs(
    dk,
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
        /* @__PURE__ */ E.jsx(uk, { children: u }),
        /* @__PURE__ */ E.jsxs(ne.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ E.jsx(ck, { id: c == null ? void 0 : c.title, children: o }),
          s && /* @__PURE__ */ E.jsx(lk, { id: c == null ? void 0 : c.description, display: "block", children: s })
        ] }),
        i && /* @__PURE__ */ E.jsx(
          qc,
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
function Kj(e = {}) {
  const { render: t, toastComponent: r = Gj } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ E.jsx(r, { ...o, ...e });
}
var [Yj, XV] = Wt({
  name: "ToastOptionsContext",
  strict: !1
}), qj = (e) => {
  const t = b.useSyncExternalStore(
    Na.subscribe,
    Na.getState,
    Na.getState
  ), {
    motionVariants: r,
    component: n = ak,
    portalProps: o
  } = e, a = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ E.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        "aria-label": `Notifications-${s}`,
        id: `chakra-toast-manager-${s}`,
        style: g4(s),
        children: /* @__PURE__ */ E.jsx(Yc, { initial: !1, children: l.map((u) => /* @__PURE__ */ E.jsx(
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
  return /* @__PURE__ */ E.jsx(Ms, { ...o, children: a });
}, Xj = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...i
}) {
  return /* @__PURE__ */ E.jsxs(h4, { theme: n, ...i, children: [
    /* @__PURE__ */ E.jsx(Yj, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ E.jsx(qj, { ...o })
  ] });
}, Qj = Xj(Tx);
function Zj(e, t) {
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
function Qt(...e) {
  return (t) => {
    e.forEach((r) => {
      Zj(r, t);
    });
  };
}
function Jj(...e) {
  return b.useMemo(() => Qt(...e), e);
}
var Hp = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, ua = {
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
function Gp(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return ua.slideRight;
    case "left":
      return ua.slideLeft;
    case "bottom":
      return ua.slideDown;
    case "top":
      return ua.slideUp;
    default:
      return ua.slideRight;
  }
}
var Uy = {
  enter: {
    duration: 0.2,
    ease: Hp.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Hp.easeIn
  }
}, tc = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, eL = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : tc.enter(Uy.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : tc.exit(Uy.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, fk = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: eL
}, tL = b.forwardRef(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: i,
    transition: a,
    transitionEnd: s,
    delay: l,
    ...u
  } = t, c = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: a, transitionEnd: s, delay: l };
  return /* @__PURE__ */ E.jsx(Yc, { custom: f, children: d && /* @__PURE__ */ E.jsx(
    Vs.div,
    {
      ref: r,
      className: we("chakra-fade", i),
      custom: f,
      ...fk,
      animate: c,
      ...u
    }
  ) });
});
tL.displayName = "Fade";
var Hy = {
  exit: {
    duration: 0.15,
    ease: Hp.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, rL = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: i } = Gp({ direction: e });
    return {
      ...i,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : tc.exit(Hy.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: i } = Gp({ direction: e });
    return {
      ...i,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : tc.enter(Hy.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, pk = b.forwardRef(function(t, r) {
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
  } = t, p = Gp({ direction: n }), g = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), y = i ? a && i : !0, x = a || i ? "enter" : "exit", m = { transitionEnd: u, transition: l, direction: n, delay: c };
  return /* @__PURE__ */ E.jsx(Yc, { custom: m, children: y && /* @__PURE__ */ E.jsx(
    Vs.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: we("chakra-slide", s),
      animate: x,
      exit: "exit",
      custom: m,
      variants: rL,
      style: g,
      ...d
    }
  ) });
});
pk.displayName = "Slide";
function nL(e) {
  return b.Children.toArray(e).filter(
    (t) => b.isValidElement(t)
  );
}
var [QV, oL] = Wt({
  strict: !1,
  name: "ButtonGroupContext"
});
function iL(e) {
  const [t, r] = b.useState(!e);
  return { ref: b.useCallback((i) => {
    i && r(i.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Kp(e) {
  const { children: t, className: r, ...n } = e, o = b.isValidElement(t) ? b.cloneElement(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, i = we("chakra-button__icon", r);
  return /* @__PURE__ */ E.jsx(
    ne.span,
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
Kp.displayName = "ButtonIcon";
function Yp(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ E.jsx(jm, { color: "currentColor", width: "1em", height: "1em" }),
    className: i,
    __css: a,
    ...s
  } = e, l = we("chakra-button__spinner", i), u = r === "start" ? "marginEnd" : "marginStart", c = b.useMemo(
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
  return /* @__PURE__ */ E.jsx(ne.div, { className: l, ...s, __css: c, children: o });
}
Yp.displayName = "ButtonSpinner";
var gi = Pe((e, t) => {
  const r = oL(), n = Is("Button", { ...r, ...e }), {
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
    spinnerPlacement: g = "start",
    className: y,
    as: x,
    ...m
  } = Bn(e), h = b.useMemo(() => {
    const T = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...!!r && { _focus: T }
    };
  }, [n, r]), { ref: v, type: w } = iL(x), k = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ E.jsxs(
    ne.button,
    {
      ref: Jj(t, v),
      as: x,
      type: f ?? w,
      "data-active": Sr(a),
      "data-loading": Sr(i),
      __css: h,
      className: we("chakra-button", y),
      ...m,
      disabled: o || i,
      children: [
        i && g === "start" && /* @__PURE__ */ E.jsx(
          Yp,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        i ? c || /* @__PURE__ */ E.jsx(ne.span, { opacity: 0, children: /* @__PURE__ */ E.jsx(Gy, { ...k }) }) : /* @__PURE__ */ E.jsx(Gy, { ...k }),
        i && g === "end" && /* @__PURE__ */ E.jsx(
          Yp,
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
gi.displayName = "Button";
function Gy(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    t && /* @__PURE__ */ E.jsx(Kp, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ E.jsx(Kp, { marginStart: o, children: r })
  ] });
}
var [aL, sL] = Wt({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [lL, hk] = Wt({
  strict: !1,
  name: "FormControlContext"
});
function uL(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: i,
    ...a
  } = e, s = b.useId(), l = t || `field-${s}`, u = `${l}-label`, c = `${l}-feedback`, d = `${l}-helptext`, [f, p] = b.useState(!1), [g, y] = b.useState(!1), [x, m] = b.useState(!1), h = b.useCallback(
    (C = {}, $ = null) => ({
      id: d,
      ...C,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Qt($, (R) => {
        R && y(!0);
      })
    }),
    [d]
  ), v = b.useCallback(
    (C = {}, $ = null) => ({
      ...C,
      ref: $,
      "data-focus": Sr(x),
      "data-disabled": Sr(o),
      "data-invalid": Sr(n),
      "data-readonly": Sr(i),
      id: C.id !== void 0 ? C.id : u,
      htmlFor: C.htmlFor !== void 0 ? C.htmlFor : l
    }),
    [l, o, x, n, i, u]
  ), w = b.useCallback(
    (C = {}, $ = null) => ({
      id: c,
      ...C,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: Qt($, (R) => {
        R && p(!0);
      }),
      "aria-live": "polite"
    }),
    [c]
  ), k = b.useCallback(
    (C = {}, $ = null) => ({
      ...C,
      ...a,
      ref: $,
      role: "group",
      "data-focus": Sr(x),
      "data-disabled": Sr(o),
      "data-invalid": Sr(n),
      "data-readonly": Sr(i)
    }),
    [a, o, x, n, i]
  ), T = b.useCallback(
    (C = {}, $ = null) => ({
      ...C,
      ref: $,
      role: "presentation",
      "aria-hidden": !0,
      children: C.children || "*"
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
    hasHelpText: g,
    setHasHelpText: y,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: a,
    getHelpTextProps: h,
    getErrorMessageProps: w,
    getRootProps: k,
    getLabelProps: v,
    getRequiredIndicatorProps: T
  };
}
var cL = Pe(
  function(t, r) {
    const n = Fs("Form", t), o = Bn(t), {
      getRootProps: i,
      htmlProps: a,
      ...s
    } = uL(o), l = we("chakra-form-control", t.className);
    return /* @__PURE__ */ E.jsx(lL, { value: s, children: /* @__PURE__ */ E.jsx(aL, { value: n, children: /* @__PURE__ */ E.jsx(
      ne.div,
      {
        ...i({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
cL.displayName = "FormControl";
var dL = Pe(
  function(t, r) {
    const n = hk(), o = sL(), i = we("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ E.jsx(
      ne.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: i
      }
    );
  }
);
dL.displayName = "FormHelperText";
function fL(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...i } = pL(e);
  return {
    ...i,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Ld(r),
    "aria-required": Ld(o),
    "aria-readonly": Ld(n)
  };
}
function pL(e) {
  var t, r, n;
  const o = hk(), {
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
  } = e, x = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && x.push(o.feedbackId), o != null && o.hasHelpText && x.push(o.helpTextId), {
    ...y,
    "aria-describedby": x.join(" ") || void 0,
    id: i ?? (o == null ? void 0 : o.id),
    isDisabled: (t = a ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (r = s ?? d) != null ? r : o == null ? void 0 : o.isReadOnly,
    isRequired: (n = l ?? u) != null ? n : o == null ? void 0 : o.isRequired,
    isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
    onFocus: et(o == null ? void 0 : o.onFocus, p),
    onBlur: et(o == null ? void 0 : o.onBlur, g)
  };
}
function Nm(e, t, r, n) {
  const o = Hu(r);
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
function hL(e) {
  return "current" in e;
}
var mk = () => typeof window < "u";
function mL() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var vL = (e) => mk() && e.test(navigator.vendor), gL = (e) => mk() && e.test(mL()), yL = () => gL(/mac|iphone|ipad|ipod/i), bL = () => yL() && vL(/apple/i);
function SL(e) {
  const { ref: t, elements: r, enabled: n } = e, o = () => {
    var i, a;
    return (a = (i = t.current) == null ? void 0 : i.ownerDocument) != null ? a : document;
  };
  Nm(o, "pointerdown", (i) => {
    if (!bL() || !n)
      return;
    const a = i.target, l = (r ?? [t]).some((u) => {
      const c = hL(u) ? u.current : u;
      return (c == null ? void 0 : c.contains(a)) || c === a;
    });
    o().activeElement !== a && l && (i.preventDefault(), a.focus());
  });
}
function xL(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var vk = { exports: {} }, wL = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", kL = wL, CL = kL;
function gk() {
}
function yk() {
}
yk.resetWarningCache = gk;
var _L = function() {
  function e(n, o, i, a, s, l) {
    if (l !== CL) {
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
    checkPropTypes: yk,
    resetWarningCache: gk
  };
  return r.PropTypes = r, r;
};
vk.exports = _L();
var PL = vk.exports;
const Yn = /* @__PURE__ */ _s(PL);
var qp = "data-focus-lock", bk = "data-focus-lock-disabled", TL = "data-no-focus-lock", EL = "data-autofocus-inside", $L = "data-no-autofocus";
function AL(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function RL(e, t) {
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
function Sk(e, t) {
  return RL(t || null, function(r) {
    return e.forEach(function(n) {
      return AL(n, r);
    });
  });
}
var yf = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
}, Pr = function() {
  return Pr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Pr.apply(this, arguments);
};
function xk(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function ML(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function wk(e) {
  return e;
}
function kk(e, t) {
  t === void 0 && (t = wk);
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
function Vm(e, t) {
  return t === void 0 && (t = wk), kk(e, t);
}
function Ck(e) {
  e === void 0 && (e = {});
  var t = kk(null);
  return t.options = Pr({ async: !0, ssr: !1 }, e), t;
}
var _k = function(e) {
  var t = e.sideCar, r = xk(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return b.createElement(n, Pr({}, r));
};
_k.isSideCarExport = !0;
function OL(e, t) {
  return e.useMedium(t), _k;
}
var Pk = Vm({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), Tk = Vm(), zL = Vm(), IL = Ck({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), FL = [], Wm = /* @__PURE__ */ b.forwardRef(function(t, r) {
  var n, o = b.useState(), i = o[0], a = o[1], s = b.useRef(), l = b.useRef(!1), u = b.useRef(null), c = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, g = t.crossFrame, y = t.autoFocus;
  t.allowTextSelection;
  var x = t.group, m = t.className, h = t.whiteList, v = t.hasPositiveIndices, w = t.shards, k = w === void 0 ? FL : w, T = t.as, C = T === void 0 ? "div" : T, $ = t.lockProps, R = $ === void 0 ? {} : $, M = t.sideCar, j = t.returnFocus, ee = t.focusOptions, H = t.onActivation, G = t.onDeactivation, K = b.useState({}), Y = K[0], oe = b.useCallback(function() {
    u.current = u.current || document && document.activeElement, s.current && H && H(s.current), l.current = !0;
  }, [H]), z = b.useCallback(function() {
    l.current = !1, G && G(s.current);
  }, [G]);
  b.useEffect(function() {
    d || (u.current = null);
  }, []);
  var D = b.useCallback(function(ye) {
    var Te = u.current;
    if (Te && Te.focus) {
      var Oe = typeof j == "function" ? j(Te) : j;
      if (Oe) {
        var qe = typeof Oe == "object" ? Oe : void 0;
        u.current = null, ye ? Promise.resolve().then(function() {
          return Te.focus(qe);
        }) : Te.focus(qe);
      }
    }
  }, [j]), B = b.useCallback(function(ye) {
    l.current && Pk.useMedium(ye);
  }, []), L = Tk.useMedium, q = b.useCallback(function(ye) {
    s.current !== ye && (s.current = ye, a(ye));
  }, []), U = xo((n = {}, n[bk] = d && "disabled", n[qp] = x, n), R), he = f !== !0, Me = he && f !== "tail", ce = Sk([r, q]);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, he && [
    // nearest focus guard
    /* @__PURE__ */ b.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: yf
    }),
    // first tabbed element guard
    v ? /* @__PURE__ */ b.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: yf
    }) : null
  ], !d && /* @__PURE__ */ b.createElement(M, {
    id: Y,
    sideCar: IL,
    observed: i,
    disabled: d,
    persistentFocus: p,
    crossFrame: g,
    autoFocus: y,
    whiteList: h,
    shards: k,
    onActivation: oe,
    onDeactivation: z,
    returnFocus: D,
    focusOptions: ee
  }), /* @__PURE__ */ b.createElement(C, xo({
    ref: ce
  }, U, {
    className: m,
    onBlur: L,
    onFocus: B
  }), c), Me && /* @__PURE__ */ b.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: yf
  }));
});
Wm.propTypes = {};
Wm.defaultProps = {
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
const Ek = Wm;
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Xp(e, t);
}
function DL(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xp(e, t);
}
function Ss(e) {
  "@babel/helpers - typeof";
  return Ss = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ss(e);
}
function jL(e, t) {
  if (Ss(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ss(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LL(e) {
  var t = jL(e, "string");
  return Ss(t) === "symbol" ? t : String(t);
}
function BL(e, t, r) {
  return t = LL(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function NL(e, t) {
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
      DL(c, u);
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
        return /* @__PURE__ */ mo.createElement(o, this.props);
      }, c;
    }(b.PureComponent);
    return BL(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var zr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, rc = function(e) {
  return Array.isArray(e) ? e : [e];
}, $k = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, VL = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Ak = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Rk = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, WL = function(e, t) {
  return !e || Rk(e) || !VL(e) && t(Ak(e));
}, Mk = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = WL(t, Mk.bind(void 0, e));
  return e.set(t, n), n;
}, UL = function(e, t) {
  return e && !Rk(e) ? KL(e) ? t(Ak(e)) : !1 : !0;
}, Ok = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = UL(t, Ok.bind(void 0, e));
  return e.set(t, n), n;
}, zk = function(e) {
  return e.dataset;
}, HL = function(e) {
  return e.tagName === "BUTTON";
}, Ik = function(e) {
  return e.tagName === "INPUT";
}, Fk = function(e) {
  return Ik(e) && e.type === "radio";
}, GL = function(e) {
  return !((Ik(e) || HL(e)) && (e.type === "hidden" || e.disabled));
}, KL = function(e) {
  var t = e.getAttribute($L);
  return ![!0, "true", ""].includes(t);
}, Um = function(e) {
  var t;
  return !!(e && (!((t = zk(e)) === null || t === void 0) && t.focusGuard));
}, nc = function(e) {
  return !Um(e);
}, YL = function(e) {
  return !!e;
}, qL = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, Dk = function(e, t, r) {
  return zr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(qL);
}, XL = [
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
], Hm = XL.join(","), QL = "".concat(Hm, ", [data-focus-guard]"), jk = function(e, t) {
  return zr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? QL : Hm) ? [n] : [], jk(n));
  }, []);
}, ZL = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? Xc([e.contentDocument.body], t) : [e];
}, Xc = function(e, t) {
  return e.reduce(function(r, n) {
    var o, i = jk(n, t), a = (o = []).concat.apply(o, i.map(function(s) {
      return ZL(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      a,
      // add if node is tabbable itself
      n.parentNode ? zr(n.parentNode.querySelectorAll(Hm)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, JL = function(e) {
  var t = e.querySelectorAll("[".concat(EL, "]"));
  return zr(t).map(function(r) {
    return Xc([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, Gm = function(e, t) {
  return zr(e).filter(function(r) {
    return Mk(t, r);
  }).filter(function(r) {
    return GL(r);
  });
}, Ky = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), zr(e).filter(function(r) {
    return Ok(t, r);
  });
}, Qp = function(e, t, r) {
  return Dk(Gm(Xc(e, r), t), !0, r);
}, Yy = function(e, t) {
  return Dk(Gm(Xc(e), t), !1);
}, eB = function(e, t) {
  return Gm(JL(e), t);
}, yi = function(e, t) {
  return e.shadowRoot ? yi(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : zr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? yi(o, t) : !1;
    }
    return yi(r, t);
  });
}, tB = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var i = e[n].compareDocumentPosition(e[o]);
      (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(a, s) {
    return !t.has(s);
  });
}, Lk = function(e) {
  return e.parentNode ? Lk(e.parentNode) : e;
}, Km = function(e) {
  var t = rc(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(qp);
    return r.push.apply(r, o ? tB(zr(Lk(n).querySelectorAll("[".concat(qp, '="').concat(o, '"]:not([').concat(bk, '="disabled"])')))) : [n]), r;
  }, []);
}, rB = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, xs = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? xs(t.shadowRoot) : t instanceof HTMLIFrameElement && rB(function() {
      return t.contentWindow.document;
    }) ? xs(t.contentWindow.document) : t;
  }
}, nB = function(e, t) {
  return e === t;
}, oB = function(e, t) {
  return !!zr(e.querySelectorAll("iframe")).some(function(r) {
    return nB(r, t);
  });
}, Bk = function(e, t) {
  return t === void 0 && (t = xs($k(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Km(e).some(function(r) {
    return yi(r, t) || oB(r, t);
  });
}, iB = function(e) {
  e === void 0 && (e = document);
  var t = xs(e);
  return t ? zr(e.querySelectorAll("[".concat(TL, "]"))).some(function(r) {
    return yi(r, t);
  }) : !1;
}, aB = function(e, t) {
  return t.filter(Fk).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, Ym = function(e, t) {
  return Fk(e) && e.name ? aB(e, t) : e;
}, sB = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(Ym(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, qy = function(e) {
  return e[0] && e.length > 1 ? Ym(e[0], e) : e[0];
}, Xy = function(e, t) {
  return e.length > 1 ? e.indexOf(Ym(e[t], e)) : t;
}, Nk = "NEW_FOCUS", lB = function(e, t, r, n) {
  var o = e.length, i = e[0], a = e[o - 1], s = Um(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, u = n ? t.indexOf(n) : l, c = n ? e.indexOf(n) : -1, d = l - u, f = t.indexOf(i), p = t.indexOf(a), g = sB(t), y = r !== void 0 ? g.indexOf(r) : -1, x = y - (n ? g.indexOf(n) : l), m = Xy(e, 0), h = Xy(e, o - 1);
    if (l === -1 || c === -1)
      return Nk;
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
}, uB = function(e) {
  return function(t) {
    var r, n = (r = zk(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, cB = function(e, t, r) {
  var n = e.map(function(i) {
    var a = i.node;
    return a;
  }), o = Ky(n.filter(uB(r)));
  return o && o.length ? qy(o) : qy(Ky(t));
}, Zp = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Zp(e.parentNode.host || e.parentNode, t), t;
}, bf = function(e, t) {
  for (var r = Zp(e), n = Zp(t), o = 0; o < r.length; o += 1) {
    var i = r[o];
    if (n.indexOf(i) >= 0)
      return i;
  }
  return !1;
}, Vk = function(e, t, r) {
  var n = rc(e), o = rc(t), i = n[0], a = !1;
  return o.filter(Boolean).forEach(function(s) {
    a = bf(a || s, s) || a, r.filter(Boolean).forEach(function(l) {
      var u = bf(i, l);
      u && (!a || yi(u, a) ? a = u : a = bf(u, a));
    });
  }), a;
}, dB = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(eB(n, t));
  }, []);
}, fB = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(YL);
}, pB = function(e, t) {
  var r = xs(rc(e).length > 0 ? document : $k(e).ownerDocument), n = Km(e).filter(nc), o = Vk(r || e, e, n), i = /* @__PURE__ */ new Map(), a = Yy(n, i), s = Qp(n, i).filter(function(p) {
    var g = p.node;
    return nc(g);
  });
  if (!(!s[0] && (s = a, !s[0]))) {
    var l = Yy([o], i).map(function(p) {
      var g = p.node;
      return g;
    }), u = fB(l, s), c = u.map(function(p) {
      var g = p.node;
      return g;
    }), d = lB(c, l, r, t);
    if (d === Nk) {
      var f = cB(a, c, dB(n, i));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : u[d];
  }
}, hB = function(e) {
  var t = Km(e).filter(nc), r = Vk(e, e, t), n = /* @__PURE__ */ new Map(), o = Qp([r], n, !0), i = Qp(t, n).filter(function(a) {
    var s = a.node;
    return nc(s);
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
      guard: Um(s)
    };
  });
}, mB = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Sf = 0, xf = !1, Wk = function(e, t, r) {
  r === void 0 && (r = {});
  var n = pB(e, t);
  if (!xf && n) {
    if (Sf > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), xf = !0, setTimeout(function() {
        xf = !1;
      }, 1);
      return;
    }
    Sf++, mB(n.node, r.focusOptions), Sf--;
  }
};
function qm(e) {
  setTimeout(e, 1);
}
var vB = function() {
  return document && document.activeElement === document.body;
}, gB = function() {
  return vB() || iB();
}, bi = null, ii = null, Si = null, ws = !1, yB = function() {
  return !0;
}, bB = function(t) {
  return (bi.whiteList || yB)(t);
}, SB = function(t, r) {
  Si = {
    observerNode: t,
    portaledElement: r
  };
}, xB = function(t) {
  return Si && Si.portaledElement === t;
};
function Qy(e, t, r, n) {
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
var wB = function(t) {
  return t && "current" in t ? t.current : t;
}, kB = function(t) {
  return t ? !!ws : ws === "meanwhile";
}, CB = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, _B = function(t, r) {
  return r.some(function(n) {
    return CB(t, n, n);
  });
}, oc = function() {
  var t = !1;
  if (bi) {
    var r = bi, n = r.observed, o = r.persistentFocus, i = r.autoFocus, a = r.shards, s = r.crossFrame, l = r.focusOptions, u = n || Si && Si.portaledElement, c = document && document.activeElement;
    if (u) {
      var d = [u].concat(a.map(wB).filter(Boolean));
      if ((!c || bB(c)) && (o || kB(s) || !gB() || !ii && i) && (u && !// active element is "inside" working area
      (Bk(d) || // check for shadow-dom contained elements
      c && _B(c, d) || xB(c)) && (document && !ii && c && !i ? (c.blur && c.blur(), document.body.focus()) : (t = Wk(d, ii, {
        focusOptions: l
      }), Si = {})), ws = !1, ii = document && document.activeElement), document) {
        var f = document && document.activeElement, p = hB(d), g = p.map(function(y) {
          var x = y.node;
          return x;
        }).indexOf(f);
        g > -1 && (p.filter(function(y) {
          var x = y.guard, m = y.node;
          return x && m.dataset.focusAutoGuard;
        }).forEach(function(y) {
          var x = y.node;
          return x.removeAttribute("tabIndex");
        }), Qy(g, p.length, 1, p), Qy(g, -1, -1, p));
      }
    }
  }
  return t;
}, Uk = function(t) {
  oc() && t && (t.stopPropagation(), t.preventDefault());
}, Xm = function() {
  return qm(oc);
}, PB = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || SB(n, r);
}, TB = function() {
  return null;
}, Hk = function() {
  ws = "just", qm(function() {
    ws = "meanwhile";
  });
}, EB = function() {
  document.addEventListener("focusin", Uk), document.addEventListener("focusout", Xm), window.addEventListener("blur", Hk);
}, $B = function() {
  document.removeEventListener("focusin", Uk), document.removeEventListener("focusout", Xm), window.removeEventListener("blur", Hk);
};
function AB(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function RB(e) {
  var t = e.slice(-1)[0];
  t && !bi && EB();
  var r = bi, n = r && t && t.id === r.id;
  bi = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var i = o.id;
    return i === r.id;
  }).length || r.returnFocus(!t)), t ? (ii = null, (!n || r.observed !== t.observed) && t.onActivation(), oc(), qm(oc)) : ($B(), ii = null);
}
Pk.assignSyncMedium(PB);
Tk.assignMedium(Xm);
zL.assignMedium(function(e) {
  return e({
    moveFocusInside: Wk,
    focusInside: Bk
  });
});
const MB = NL(AB, RB)(TB);
var Gk = /* @__PURE__ */ b.forwardRef(function(t, r) {
  return /* @__PURE__ */ b.createElement(Ek, xo({
    sideCar: MB,
    ref: r
  }, t));
}), Kk = Ek.propTypes || {};
Kk.sideCar;
xL(Kk, ["sideCar"]);
Gk.propTypes = {};
const Zy = Gk;
function Yk(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function qk(e) {
  var t;
  if (!Yk(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function OB(e) {
  var t, r;
  return (r = (t = Xk(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function Xk(e) {
  return Yk(e) ? e.ownerDocument : document;
}
function zB(e) {
  return Xk(e).activeElement;
}
var Qk = (e) => e.hasAttribute("tabindex"), IB = (e) => Qk(e) && e.tabIndex === -1;
function FB(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Zk(e) {
  return e.parentElement && Zk(e.parentElement) ? !0 : e.hidden;
}
function DB(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function Jk(e) {
  if (!qk(e) || Zk(e) || FB(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : DB(e) ? !0 : Qk(e);
}
function jB(e) {
  return e ? qk(e) && Jk(e) && !IB(e) : !1;
}
var LB = [
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
], BB = LB.join(), NB = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function eC(e) {
  const t = Array.from(
    e.querySelectorAll(BB)
  );
  return t.unshift(e), t.filter((r) => Jk(r) && NB(r));
}
var Jy, VB = (Jy = Zy.default) != null ? Jy : Zy, tC = (e) => {
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
    t != null && t.current ? t.current.focus() : n != null && n.current && eC(n.current).length === 0 && requestAnimationFrame(() => {
      var g;
      (g = n.current) == null || g.focus();
    });
  }, [t, n]), d = b.useCallback(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ E.jsx(
    VB,
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
tC.displayName = "FocusLock";
var Qm = Pe(function(t, r) {
  const { htmlSize: n, ...o } = t, i = Fs("Input", o), a = Bn(o), s = fL(a), l = we("chakra-input", t.className);
  return /* @__PURE__ */ E.jsx(
    ne.input,
    {
      size: n,
      ...s,
      __css: i.field,
      ref: r,
      className: l
    }
  );
});
Qm.displayName = "Input";
Qm.id = "Input";
function WB(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : tr(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
var Va = Pe(function(t, r) {
  const n = Is("Text", t), { className: o, align: i, decoration: a, casing: s, ...l } = Bn(t), u = J3({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ E.jsx(
    ne.p,
    {
      ref: r,
      className: we("chakra-text", t.className),
      ...u,
      ...l,
      __css: n
    }
  );
});
Va.displayName = "Text";
var rC = (e) => /* @__PURE__ */ E.jsx(
  ne.div,
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
rC.displayName = "StackItem";
function UB(e) {
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
    "&": WB(
      r,
      (o) => n[o]
    )
  };
}
var nC = Pe((e, t) => {
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
  } = e, p = r ? "row" : n ?? "column", g = b.useMemo(
    () => UB({ spacing: a, direction: p }),
    [a, p]
  ), y = !!u, x = !d && !y, m = b.useMemo(() => {
    const v = nL(l);
    return x ? v : v.map((w, k) => {
      const T = typeof w.key < "u" ? w.key : k, C = k + 1 === v.length, R = d ? /* @__PURE__ */ E.jsx(rC, { children: w }, T) : w;
      if (!y)
        return R;
      const M = b.cloneElement(
        u,
        {
          __css: g
        }
      ), j = C ? null : M;
      return /* @__PURE__ */ E.jsxs(b.Fragment, { children: [
        R,
        j
      ] }, T);
    });
  }, [
    u,
    g,
    y,
    x,
    d,
    l
  ]), h = we("chakra-stack", c);
  return /* @__PURE__ */ E.jsx(
    ne.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: i,
      flexDirection: p,
      flexWrap: s,
      gap: y ? void 0 : a,
      className: h,
      ...f,
      children: m
    }
  );
});
nC.displayName = "Stack";
var ro = Pe((e, t) => /* @__PURE__ */ E.jsx(nC, { align: "center", ...e, direction: "row", ref: t }));
ro.displayName = "HStack";
var Qc = ne("div");
Qc.displayName = "Box";
var oC = Pe(function(t, r) {
  const { size: n, centerContent: o = !0, ...i } = t, a = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ E.jsx(
    Qc,
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
oC.displayName = "Square";
var HB = Pe(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ E.jsx(oC, { size: n, ref: r, borderRadius: "9999px", ...o });
});
HB.displayName = "Circle";
function GB(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = zB(t);
  return !r || t.contains(r) ? !1 : !!jB(r);
}
function KB(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, i = r && !n;
  Gu(() => {
    if (!i || GB(e))
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
var YB = {
  preventScroll: !0,
  shouldFocus: !1
};
function qB(e, t = YB) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: i } = t, a = XB(e) ? e.current : e, s = o && i, l = b.useRef(s), u = b.useRef(i);
  fs(() => {
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
        const d = eC(a);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [i, n, a, r]);
  Gu(() => {
    c();
  }, [c]), Nm(a, "transitionend", c);
}
function XB(e) {
  return "current" in e;
}
var Mo = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), ct = {
  arrowShadowColor: Mo("--popper-arrow-shadow-color"),
  arrowSize: Mo("--popper-arrow-size", "8px"),
  arrowSizeHalf: Mo("--popper-arrow-size-half"),
  arrowBg: Mo("--popper-arrow-bg"),
  transformOrigin: Mo("--popper-transform-origin"),
  arrowOffset: Mo("--popper-arrow-offset")
};
function QB(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var ZB = {
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
}, JB = (e) => ZB[e], e1 = {
  scroll: !0,
  resize: !0
};
function eN(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...e1, ...e }
  } : t = {
    enabled: e,
    options: e1
  }, t;
}
var tN = {
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
}, rN = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    t1(e);
  },
  effect: ({ state: e }) => () => {
    t1(e);
  }
}, t1 = (e) => {
  e.elements.popper.style.setProperty(
    ct.transformOrigin.var,
    JB(e.placement)
  );
}, nN = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    oN(e);
  }
}, oN = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = iN(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: ct.arrowSize.varRef,
      height: ct.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [ct.arrowSizeHalf.var]: `calc(${ct.arrowSize.varRef} / 2 - 1px)`,
      [ct.arrowOffset.var]: `calc(${ct.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, iN = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: ct.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: ct.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: ct.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: ct.arrowOffset.varRef };
}, aN = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    r1(e);
  },
  effect: ({ state: e }) => () => {
    r1(e);
  }
}, r1 = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = QB(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: ct.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, sN = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, lN = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function uN(e, t = "ltr") {
  var r, n;
  const o = ((r = sN[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = lN[e]) != null ? n : o;
}
var Pt = "top", ir = "bottom", ar = "right", Tt = "left", Zm = "auto", Us = [Pt, ir, ar, Tt], Oi = "start", ks = "end", cN = "clippingParents", iC = "viewport", ca = "popper", dN = "reference", n1 = /* @__PURE__ */ Us.reduce(function(e, t) {
  return e.concat([t + "-" + Oi, t + "-" + ks]);
}, []), aC = /* @__PURE__ */ [].concat(Us, [Zm]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Oi, t + "-" + ks]);
}, []), fN = "beforeRead", pN = "read", hN = "afterRead", mN = "beforeMain", vN = "main", gN = "afterMain", yN = "beforeWrite", bN = "write", SN = "afterWrite", xN = [fN, pN, hN, mN, vN, gN, yN, bN, SN];
function Or(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Lt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function wo(e) {
  var t = Lt(e).Element;
  return e instanceof t || e instanceof Element;
}
function rr(e) {
  var t = Lt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Jm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Lt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function wN(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !rr(i) || !Or(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var s = o[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function kN(e) {
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
      !rr(o) || !Or(o) || (Object.assign(o.style, s), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const CN = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: wN,
  effect: kN,
  requires: ["computeStyles"]
};
function Mr(e) {
  return e.split("-")[0];
}
var ho = Math.max, ic = Math.min, zi = Math.round;
function Jp() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function sC() {
  return !/^((?!chrome|android).)*safari/i.test(Jp());
}
function Ii(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && rr(e) && (o = e.offsetWidth > 0 && zi(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && zi(n.height) / e.offsetHeight || 1);
  var a = wo(e) ? Lt(e) : window, s = a.visualViewport, l = !sC() && r, u = (n.left + (l && s ? s.offsetLeft : 0)) / o, c = (n.top + (l && s ? s.offsetTop : 0)) / i, d = n.width / o, f = n.height / i;
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
function ev(e) {
  var t = Ii(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function lC(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Jm(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function on(e) {
  return Lt(e).getComputedStyle(e);
}
function _N(e) {
  return ["table", "td", "th"].indexOf(Or(e)) >= 0;
}
function Vn(e) {
  return ((wo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Zc(e) {
  return Or(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Jm(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vn(e)
  );
}
function o1(e) {
  return !rr(e) || // https://github.com/popperjs/popper-core/issues/837
  on(e).position === "fixed" ? null : e.offsetParent;
}
function PN(e) {
  var t = /firefox/i.test(Jp()), r = /Trident/i.test(Jp());
  if (r && rr(e)) {
    var n = on(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Zc(e);
  for (Jm(o) && (o = o.host); rr(o) && ["html", "body"].indexOf(Or(o)) < 0; ) {
    var i = on(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Hs(e) {
  for (var t = Lt(e), r = o1(e); r && _N(r) && on(r).position === "static"; )
    r = o1(r);
  return r && (Or(r) === "html" || Or(r) === "body" && on(r).position === "static") ? t : r || PN(e) || t;
}
function tv(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Wa(e, t, r) {
  return ho(e, ic(t, r));
}
function TN(e, t, r) {
  var n = Wa(e, t, r);
  return n > r ? r : n;
}
function uC() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function cC(e) {
  return Object.assign({}, uC(), e);
}
function dC(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var EN = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, cC(typeof t != "number" ? t : dC(t, Us));
};
function $N(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, s = Mr(r.placement), l = tv(s), u = [Tt, ar].indexOf(s) >= 0, c = u ? "height" : "width";
  if (!(!i || !a)) {
    var d = EN(o.padding, r), f = ev(i), p = l === "y" ? Pt : Tt, g = l === "y" ? ir : ar, y = r.rects.reference[c] + r.rects.reference[l] - a[l] - r.rects.popper[c], x = a[l] - r.rects.reference[l], m = Hs(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, v = y / 2 - x / 2, w = d[p], k = h - f[c] - d[g], T = h / 2 - f[c] / 2 + v, C = Wa(w, T, k), $ = l;
    r.modifiersData[n] = (t = {}, t[$] = C, t.centerOffset = C - T, t);
  }
}
function AN(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || lC(t.elements.popper, o) && (t.elements.arrow = o));
}
const RN = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $N,
  effect: AN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Fi(e) {
  return e.split("-")[1];
}
var MN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ON(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: zi(r * o) / o || 0,
    y: zi(n * o) / o || 0
  };
}
function i1(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = a.x, p = f === void 0 ? 0 : f, g = a.y, y = g === void 0 ? 0 : g, x = typeof c == "function" ? c({
    x: p,
    y
  }) : {
    x: p,
    y
  };
  p = x.x, y = x.y;
  var m = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), v = Tt, w = Pt, k = window;
  if (u) {
    var T = Hs(r), C = "clientHeight", $ = "clientWidth";
    if (T === Lt(r) && (T = Vn(r), on(T).position !== "static" && s === "absolute" && (C = "scrollHeight", $ = "scrollWidth")), T = T, o === Pt || (o === Tt || o === ar) && i === ks) {
      w = ir;
      var R = d && T === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[C]
      );
      y -= R - n.height, y *= l ? 1 : -1;
    }
    if (o === Tt || (o === Pt || o === ir) && i === ks) {
      v = ar;
      var M = d && T === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[$]
      );
      p -= M - n.width, p *= l ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: s
  }, u && MN), ee = c === !0 ? ON({
    x: p,
    y
  }, Lt(r)) : {
    x: p,
    y
  };
  if (p = ee.x, y = ee.y, l) {
    var H;
    return Object.assign({}, j, (H = {}, H[w] = h ? "0" : "", H[v] = m ? "0" : "", H.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + y + "px)" : "translate3d(" + p + "px, " + y + "px, 0)", H));
  }
  return Object.assign({}, j, (t = {}, t[w] = h ? y + "px" : "", t[v] = m ? p + "px" : "", t.transform = "", t));
}
function zN(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, s = r.roundOffsets, l = s === void 0 ? !0 : s, u = {
    placement: Mr(t.placement),
    variation: Fi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, i1(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, i1(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const IN = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zN,
  data: {}
};
var Al = {
  passive: !0
};
function FN(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, s = a === void 0 ? !0 : a, l = Lt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Al);
  }), s && l.addEventListener("resize", r.update, Al), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Al);
    }), s && l.removeEventListener("resize", r.update, Al);
  };
}
const DN = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: FN,
  data: {}
};
var jN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function cu(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return jN[t];
  });
}
var LN = {
  start: "end",
  end: "start"
};
function a1(e) {
  return e.replace(/start|end/g, function(t) {
    return LN[t];
  });
}
function rv(e) {
  var t = Lt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function nv(e) {
  return Ii(Vn(e)).left + rv(e).scrollLeft;
}
function BN(e, t) {
  var r = Lt(e), n = Vn(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, s = 0, l = 0;
  if (o) {
    i = o.width, a = o.height;
    var u = sC();
    (u || !u && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + nv(e),
    y: l
  };
}
function NN(e) {
  var t, r = Vn(e), n = rv(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = ho(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = ho(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + nv(e), l = -n.scrollTop;
  return on(o || r).direction === "rtl" && (s += ho(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function ov(e) {
  var t = on(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function fC(e) {
  return ["html", "body", "#document"].indexOf(Or(e)) >= 0 ? e.ownerDocument.body : rr(e) && ov(e) ? e : fC(Zc(e));
}
function Ua(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = fC(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Lt(n), a = o ? [i].concat(i.visualViewport || [], ov(n) ? n : []) : n, s = t.concat(a);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ua(Zc(a)))
  );
}
function eh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function VN(e, t) {
  var r = Ii(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function s1(e, t, r) {
  return t === iC ? eh(BN(e, r)) : wo(t) ? VN(t, r) : eh(NN(Vn(e)));
}
function WN(e) {
  var t = Ua(Zc(e)), r = ["absolute", "fixed"].indexOf(on(e).position) >= 0, n = r && rr(e) ? Hs(e) : e;
  return wo(n) ? t.filter(function(o) {
    return wo(o) && lC(o, n) && Or(o) !== "body";
  }) : [];
}
function UN(e, t, r, n) {
  var o = t === "clippingParents" ? WN(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], s = i.reduce(function(l, u) {
    var c = s1(e, u, n);
    return l.top = ho(c.top, l.top), l.right = ic(c.right, l.right), l.bottom = ic(c.bottom, l.bottom), l.left = ho(c.left, l.left), l;
  }, s1(e, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function pC(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Mr(n) : null, i = n ? Fi(n) : null, a = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Pt:
      l = {
        x: a,
        y: t.y - r.height
      };
      break;
    case ir:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ar:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Tt:
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
  var u = o ? tv(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Oi:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case ks:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function Cs(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, s = r.boundary, l = s === void 0 ? cN : s, u = r.rootBoundary, c = u === void 0 ? iC : u, d = r.elementContext, f = d === void 0 ? ca : d, p = r.altBoundary, g = p === void 0 ? !1 : p, y = r.padding, x = y === void 0 ? 0 : y, m = cC(typeof x != "number" ? x : dC(x, Us)), h = f === ca ? dN : ca, v = e.rects.popper, w = e.elements[g ? h : f], k = UN(wo(w) ? w : w.contextElement || Vn(e.elements.popper), l, c, a), T = Ii(e.elements.reference), C = pC({
    reference: T,
    element: v,
    strategy: "absolute",
    placement: o
  }), $ = eh(Object.assign({}, v, C)), R = f === ca ? $ : T, M = {
    top: k.top - R.top + m.top,
    bottom: R.bottom - k.bottom + m.bottom,
    left: k.left - R.left + m.left,
    right: R.right - k.right + m.right
  }, j = e.modifiersData.offset;
  if (f === ca && j) {
    var ee = j[o];
    Object.keys(M).forEach(function(H) {
      var G = [ar, ir].indexOf(H) >= 0 ? 1 : -1, K = [Pt, ir].indexOf(H) >= 0 ? "y" : "x";
      M[H] += ee[K] * G;
    });
  }
  return M;
}
function HN(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? aC : l, c = Fi(n), d = c ? s ? n1 : n1.filter(function(g) {
    return Fi(g) === c;
  }) : Us, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(g, y) {
    return g[y] = Cs(e, {
      placement: y,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[Mr(y)], g;
  }, {});
  return Object.keys(p).sort(function(g, y) {
    return p[g] - p[y];
  });
}
function GN(e) {
  if (Mr(e) === Zm)
    return [];
  var t = cu(e);
  return [a1(e), t, a1(t)];
}
function KN(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !0 : a, l = r.fallbackPlacements, u = r.padding, c = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, g = p === void 0 ? !0 : p, y = r.allowedAutoPlacements, x = t.options.placement, m = Mr(x), h = m === x, v = l || (h || !g ? [cu(x)] : GN(x)), w = [x].concat(v).reduce(function(he, Me) {
      return he.concat(Mr(Me) === Zm ? HN(t, {
        placement: Me,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : Me);
    }, []), k = t.rects.reference, T = t.rects.popper, C = /* @__PURE__ */ new Map(), $ = !0, R = w[0], M = 0; M < w.length; M++) {
      var j = w[M], ee = Mr(j), H = Fi(j) === Oi, G = [Pt, ir].indexOf(ee) >= 0, K = G ? "width" : "height", Y = Cs(t, {
        placement: j,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), oe = G ? H ? ar : Tt : H ? ir : Pt;
      k[K] > T[K] && (oe = cu(oe));
      var z = cu(oe), D = [];
      if (i && D.push(Y[ee] <= 0), s && D.push(Y[oe] <= 0, Y[z] <= 0), D.every(function(he) {
        return he;
      })) {
        R = j, $ = !1;
        break;
      }
      C.set(j, D);
    }
    if ($)
      for (var B = g ? 3 : 1, L = function(Me) {
        var ce = w.find(function(ye) {
          var Te = C.get(ye);
          if (Te)
            return Te.slice(0, Me).every(function(Oe) {
              return Oe;
            });
        });
        if (ce)
          return R = ce, "break";
      }, q = B; q > 0; q--) {
        var U = L(q);
        if (U === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const YN = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: KN,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function l1(e, t, r) {
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
function u1(e) {
  return [Pt, ar, ir, Tt].some(function(t) {
    return e[t] >= 0;
  });
}
function qN(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Cs(t, {
    elementContext: "reference"
  }), s = Cs(t, {
    altBoundary: !0
  }), l = l1(a, n), u = l1(s, o, i), c = u1(l), d = u1(u);
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
const XN = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: qN
};
function QN(e, t, r) {
  var n = Mr(e), o = [Tt, Pt].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * o, [Tt, ar].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function ZN(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = aC.reduce(function(c, d) {
    return c[d] = QN(d, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = a;
}
const JN = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ZN
};
function e6(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = pC({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const t6 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: e6,
  data: {}
};
function r6(e) {
  return e === "x" ? "y" : "x";
}
function n6(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, s = a === void 0 ? !1 : a, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, g = r.tetherOffset, y = g === void 0 ? 0 : g, x = Cs(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = Mr(t.placement), h = Fi(t.placement), v = !h, w = tv(m), k = r6(w), T = t.modifiersData.popperOffsets, C = t.rects.reference, $ = t.rects.popper, R = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, M = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ee = {
    x: 0,
    y: 0
  };
  if (T) {
    if (i) {
      var H, G = w === "y" ? Pt : Tt, K = w === "y" ? ir : ar, Y = w === "y" ? "height" : "width", oe = T[w], z = oe + x[G], D = oe - x[K], B = p ? -$[Y] / 2 : 0, L = h === Oi ? C[Y] : $[Y], q = h === Oi ? -$[Y] : -C[Y], U = t.elements.arrow, he = p && U ? ev(U) : {
        width: 0,
        height: 0
      }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : uC(), ce = Me[G], ye = Me[K], Te = Wa(0, C[Y], he[Y]), Oe = v ? C[Y] / 2 - B - Te - ce - M.mainAxis : L - Te - ce - M.mainAxis, qe = v ? -C[Y] / 2 + B + Te + ye + M.mainAxis : q + Te + ye + M.mainAxis, Xe = t.elements.arrow && Hs(t.elements.arrow), Ir = Xe ? w === "y" ? Xe.clientTop || 0 : Xe.clientLeft || 0 : 0, Fr = (H = j == null ? void 0 : j[w]) != null ? H : 0, Ui = oe + Oe - Fr - Ir, re = oe + qe - Fr, ot = Wa(p ? ic(z, Ui) : z, oe, p ? ho(D, re) : D);
      T[w] = ot, ee[w] = ot - oe;
    }
    if (s) {
      var Fe, At = w === "x" ? Pt : Tt, sn = w === "x" ? ir : ar, it = T[k], vr = k === "y" ? "height" : "width", ln = it + x[At], Ut = it - x[sn], To = [Pt, Tt].indexOf(m) !== -1, Hi = (Fe = j == null ? void 0 : j[k]) != null ? Fe : 0, Ks = To ? ln : it - C[vr] - $[vr] - Hi + M.altAxis, Ys = To ? it + C[vr] + $[vr] - Hi - M.altAxis : Ut, Wn = p && To ? TN(Ks, it, Ys) : Wa(p ? Ks : ln, it, p ? Ys : Ut);
      T[k] = Wn, ee[k] = Wn - it;
    }
    t.modifiersData[n] = ee;
  }
}
const o6 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: n6,
  requiresIfExists: ["offset"]
};
function i6(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function a6(e) {
  return e === Lt(e) || !rr(e) ? rv(e) : i6(e);
}
function s6(e) {
  var t = e.getBoundingClientRect(), r = zi(t.width) / e.offsetWidth || 1, n = zi(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function l6(e, t, r) {
  r === void 0 && (r = !1);
  var n = rr(t), o = rr(t) && s6(t), i = Vn(t), a = Ii(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Or(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ov(i)) && (s = a6(t)), rr(t) ? (l = Ii(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = nv(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function u6(e) {
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
function c6(e) {
  var t = u6(e);
  return xN.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function d6(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function f6(e) {
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
var c1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function d1() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function p6(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? c1 : o;
  return function(s, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, c1, i),
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
        y(), c.options = Object.assign({}, i, c.options, h), c.scrollParents = {
          reference: wo(s) ? Ua(s) : s.contextElement ? Ua(s.contextElement) : [],
          popper: Ua(l)
        };
        var v = c6(f6([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = v.filter(function(w) {
          return w.enabled;
        }), g(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, v = m.popper;
          if (d1(h, v)) {
            c.rects = {
              reference: l6(h, Hs(v), c.options.strategy === "fixed"),
              popper: ev(v)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
              return c.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var k = c.orderedModifiers[w], T = k.fn, C = k.options, $ = C === void 0 ? {} : C, R = k.name;
              typeof T == "function" && (c = T({
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
      update: d6(function() {
        return new Promise(function(x) {
          p.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!d1(s, l))
      return p;
    p.setOptions(u).then(function(x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function g() {
      c.orderedModifiers.forEach(function(x) {
        var m = x.name, h = x.options, v = h === void 0 ? {} : h, w = x.effect;
        if (typeof w == "function") {
          var k = w({
            state: c,
            name: m,
            instance: p,
            options: v
          }), T = function() {
          };
          d.push(k || T);
        }
      });
    }
    function y() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return p;
  };
}
var h6 = [DN, t6, IN, CN, JN, YN, o6, RN, XN], m6 = /* @__PURE__ */ p6({
  defaultModifiers: h6
});
function v6(e = {}) {
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
  } = e, g = b.useRef(null), y = b.useRef(null), x = b.useRef(null), m = uN(n, p), h = b.useRef(() => {
  }), v = b.useCallback(() => {
    var M;
    !t || !g.current || !y.current || ((M = h.current) == null || M.call(h), x.current = m6(g.current, y.current, {
      placement: m,
      modifiers: [
        aN,
        nN,
        rN,
        {
          ...tN,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...eN(a)
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
    !g.current && !y.current && ((M = x.current) == null || M.destroy(), x.current = null);
  }, []);
  const w = b.useCallback(
    (M) => {
      g.current = M, v();
    },
    [v]
  ), k = b.useCallback(
    (M = {}, j = null) => ({
      ...M,
      ref: Qt(w, j)
    }),
    [w]
  ), T = b.useCallback(
    (M) => {
      y.current = M, v();
    },
    [v]
  ), C = b.useCallback(
    (M = {}, j = null) => ({
      ...M,
      ref: Qt(T, j),
      style: {
        ...M.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, T, f]
  ), $ = b.useCallback((M = {}, j = null) => {
    const { size: ee, shadowColor: H, bg: G, style: K, ...Y } = M;
    return {
      ...Y,
      ref: j,
      "data-popper-arrow": "",
      style: g6(M)
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
    transformOrigin: ct.transformOrigin.varRef,
    referenceRef: w,
    popperRef: T,
    getPopperProps: C,
    getArrowProps: $,
    getArrowInnerProps: R,
    getReferenceProps: k
  };
}
function g6(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, i = { ...o, position: "absolute" };
  return t && (i["--popper-arrow-size"] = t), r && (i["--popper-arrow-shadow-color"] = r), n && (i["--popper-arrow-bg"] = n), i;
}
function y6(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, i = Hu(r), a = Hu(t), [s, l] = b.useState(e.defaultIsOpen || !1), u = n !== void 0 ? n : s, c = n !== void 0, d = b.useId(), f = o ?? `disclosure-${d}`, p = b.useCallback(() => {
    c || l(!1), a == null || a();
  }, [c, a]), g = b.useCallback(() => {
    c || l(!0), i == null || i();
  }, [c, i]), y = b.useCallback(() => {
    u ? p() : g();
  }, [u, g, p]);
  function x(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(v) {
        var w;
        (w = h.onClick) == null || w.call(h, v), y();
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
    onOpen: g,
    onClose: p,
    onToggle: y,
    isControlled: c,
    getButtonProps: x,
    getDisclosureProps: m
  };
}
function b6(e) {
  const { isOpen: t, ref: r } = e, [n, o] = b.useState(t), [i, a] = b.useState(!1);
  return b.useEffect(() => {
    i || (o(t), a(!0));
  }, [t, i, n]), Nm(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const u = OB(r.current), c = new u.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(c);
    }
  };
}
function S6(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var x6 = Object.defineProperty, w6 = (e, t, r) => t in e ? x6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, k6 = (e, t, r) => (w6(e, typeof t != "symbol" ? t + "" : t, r), r), C6 = class {
  constructor() {
    k6(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, th = new C6();
function hC(e, t) {
  const [r, n] = b.useState(0);
  return b.useEffect(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const i = th.add(o);
        n(i);
      }
      return () => {
        th.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var _6 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Oo = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap(), Ml = {}, wf = 0, mC = function(e) {
  return e && (e.host || mC(e.parentNode));
}, P6 = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = mC(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, T6 = function(e, t, r, n) {
  var o = P6(t, Array.isArray(e) ? e : [e]);
  Ml[r] || (Ml[r] = /* @__PURE__ */ new WeakMap());
  var i = Ml[r], a = [], s = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || s.has(d) || (s.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        c(f);
      else {
        var p = f.getAttribute(n), g = p !== null && p !== "false", y = (Oo.get(f) || 0) + 1, x = (i.get(f) || 0) + 1;
        Oo.set(f, y), i.set(f, x), a.push(f), y === 1 && g && Rl.set(f, !0), x === 1 && f.setAttribute(r, "true"), g || f.setAttribute(n, "true");
      }
    });
  };
  return c(t), s.clear(), wf++, function() {
    a.forEach(function(d) {
      var f = Oo.get(d) - 1, p = i.get(d) - 1;
      Oo.set(d, f), i.set(d, p), f || (Rl.has(d) || d.removeAttribute(n), Rl.delete(d)), p || d.removeAttribute(r);
    }), wf--, wf || (Oo = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap(), Ml = {});
  };
}, E6 = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || _6(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), T6(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function $6(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: i = !0,
    useInert: a = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, u = b.useRef(null), c = b.useRef(null), [d, f, p] = R6(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  A6(u, t && a);
  const g = hC(u, t), y = b.useRef(null), x = b.useCallback((R) => {
    y.current = R.target;
  }, []), m = b.useCallback(
    (R) => {
      R.key === "Escape" && (R.stopPropagation(), i && (r == null || r()), l == null || l());
    },
    [i, r, l]
  ), [h, v] = b.useState(!1), [w, k] = b.useState(!1), T = b.useCallback(
    (R = {}, M = null) => ({
      role: "dialog",
      ...R,
      ref: Qt(M, u),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": h ? f : void 0,
      "aria-describedby": w ? p : void 0,
      onClick: et(
        R.onClick,
        (j) => j.stopPropagation()
      )
    }),
    [p, w, d, f, h]
  ), C = b.useCallback(
    (R) => {
      R.stopPropagation(), y.current === R.target && th.isTopModal(u.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), $ = b.useCallback(
    (R = {}, M = null) => ({
      ...R,
      ref: Qt(M, c),
      onClick: et(R.onClick, C),
      onKeyDown: et(R.onKeyDown, m),
      onMouseDown: et(R.onMouseDown, x)
    }),
    [m, x, C]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: k,
    setHeaderMounted: v,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: T,
    getDialogContainerProps: $,
    index: g
  };
}
function A6(e, t) {
  const r = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t))
      return E6(e.current);
  }, [t, e, r]);
}
function R6(e, ...t) {
  const r = b.useId(), n = e || r;
  return b.useMemo(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [M6, Gs] = Wt({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [O6, Ni] = Wt({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), vC = (e) => {
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
    onCloseComplete: g
  } = t, y = Fs("Modal", t), m = {
    ...$6(t),
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
  return /* @__PURE__ */ E.jsx(O6, { value: m, children: /* @__PURE__ */ E.jsx(M6, { value: y, children: /* @__PURE__ */ E.jsx(Yc, { onExitComplete: g, children: m.isOpen && /* @__PURE__ */ E.jsx(Ms, { ...r, children: n }) }) }) });
};
vC.displayName = "Modal";
var du = "right-scroll-bar-position", fu = "width-before-scroll-bar", z6 = "with-scroll-bars-hidden", I6 = "--removed-body-scroll-bar-size", gC = Ck(), kf = function() {
}, Jc = b.forwardRef(function(e, t) {
  var r = b.useRef(null), n = b.useState({
    onScrollCapture: kf,
    onWheelCapture: kf,
    onTouchMoveCapture: kf
  }), o = n[0], i = n[1], a = e.forwardProps, s = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, g = e.inert, y = e.allowPinchZoom, x = e.as, m = x === void 0 ? "div" : x, h = e.gapMode, v = xk(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, k = Sk([r, t]), T = Pr(Pr({}, v), o);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: gC, removeScrollBar: u, shards: d, noIsolation: p, inert: g, setCallbacks: i, allowPinchZoom: !!y, lockRef: r, gapMode: h }),
    a ? b.cloneElement(b.Children.only(s), Pr(Pr({}, T), { ref: k })) : b.createElement(m, Pr({}, T, { className: l, ref: k }), s)
  );
});
Jc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Jc.classNames = {
  fullWidth: fu,
  zeroRight: du
};
var f1, F6 = function() {
  if (f1)
    return f1;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function D6() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = F6();
  return t && e.setAttribute("nonce", t), e;
}
function j6(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function L6(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var B6 = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = D6()) && (j6(t, r), L6(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, N6 = function() {
  var e = B6();
  return function(t, r) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, yC = function() {
  var e = N6(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, V6 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Cf = function(e) {
  return parseInt(e || "", 10) || 0;
}, W6 = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Cf(r), Cf(n), Cf(o)];
}, U6 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return V6;
  var t = W6(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, H6 = yC(), G6 = function(e, t, r, n) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(z6, ` {
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
  
  .`).concat(du, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(fu, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(du, " .").concat(du, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(fu, " .").concat(fu, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(I6, ": ").concat(s, `px;
  }
`);
}, K6 = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, i = b.useMemo(function() {
    return U6(o);
  }, [o]);
  return b.createElement(H6, { styles: G6(i, !t, o, r ? "" : "!important") });
}, rh = !1;
if (typeof window < "u")
  try {
    var Ol = Object.defineProperty({}, "passive", {
      get: function() {
        return rh = !0, !0;
      }
    });
    window.addEventListener("test", Ol, Ol), window.removeEventListener("test", Ol, Ol);
  } catch {
    rh = !1;
  }
var zo = rh ? { passive: !1 } : !1, Y6 = function(e) {
  return e.tagName === "TEXTAREA";
}, bC = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Y6(e) && r[t] === "visible")
  );
}, q6 = function(e) {
  return bC(e, "overflowY");
}, X6 = function(e) {
  return bC(e, "overflowX");
}, p1 = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = SC(e, n);
    if (o) {
      var i = xC(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Q6 = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Z6 = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, SC = function(e, t) {
  return e === "v" ? q6(t) : X6(t);
}, xC = function(e, t) {
  return e === "v" ? Q6(t) : Z6(t);
}, J6 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, eV = function(e, t, r, n, o) {
  var i = J6(e, window.getComputedStyle(t).direction), a = i * n, s = r.target, l = t.contains(s), u = !1, c = a > 0, d = 0, f = 0;
  do {
    var p = xC(e, s), g = p[0], y = p[1], x = p[2], m = y - x - i * g;
    (g || m) && SC(e, s) && (d += m, f += g), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u;
}, zl = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, h1 = function(e) {
  return [e.deltaX, e.deltaY];
}, m1 = function(e) {
  return e && "current" in e ? e.current : e;
}, tV = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, rV = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, nV = 0, Io = [];
function oV(e) {
  var t = b.useRef([]), r = b.useRef([0, 0]), n = b.useRef(), o = b.useState(nV++)[0], i = b.useState(yC)[0], a = b.useRef(e);
  b.useEffect(function() {
    a.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = ML([e.lockRef.current], (e.shards || []).map(m1), !0).filter(Boolean);
      return y.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = b.useCallback(function(y, x) {
    if ("touches" in y && y.touches.length === 2)
      return !a.current.allowPinchZoom;
    var m = zl(y), h = r.current, v = "deltaX" in y ? y.deltaX : h[0] - m[0], w = "deltaY" in y ? y.deltaY : h[1] - m[1], k, T = y.target, C = Math.abs(v) > Math.abs(w) ? "h" : "v";
    if ("touches" in y && C === "h" && T.type === "range")
      return !1;
    var $ = p1(C, T);
    if (!$)
      return !0;
    if ($ ? k = C : (k = C === "v" ? "h" : "v", $ = p1(C, T)), !$)
      return !1;
    if (!n.current && "changedTouches" in y && (v || w) && (n.current = k), !k)
      return !0;
    var R = n.current || k;
    return eV(R, x, y, R === "h" ? v : w, !0);
  }, []), l = b.useCallback(function(y) {
    var x = y;
    if (!(!Io.length || Io[Io.length - 1] !== i)) {
      var m = "deltaY" in x ? h1(x) : zl(x), h = t.current.filter(function(k) {
        return k.name === x.type && (k.target === x.target || x.target === k.shadowParent) && tV(k.delta, m);
      })[0];
      if (h && h.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!h) {
        var v = (a.current.shards || []).map(m1).filter(Boolean).filter(function(k) {
          return k.contains(x.target);
        }), w = v.length > 0 ? s(x, v[0]) : !a.current.noIsolation;
        w && x.cancelable && x.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(y, x, m, h) {
    var v = { name: y, delta: x, target: m, should: h, shadowParent: iV(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== v;
      });
    }, 1);
  }, []), c = b.useCallback(function(y) {
    r.current = zl(y), n.current = void 0;
  }, []), d = b.useCallback(function(y) {
    u(y.type, h1(y), y.target, s(y, e.lockRef.current));
  }, []), f = b.useCallback(function(y) {
    u(y.type, zl(y), y.target, s(y, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return Io.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, zo), document.addEventListener("touchmove", l, zo), document.addEventListener("touchstart", c, zo), function() {
      Io = Io.filter(function(y) {
        return y !== i;
      }), document.removeEventListener("wheel", l, zo), document.removeEventListener("touchmove", l, zo), document.removeEventListener("touchstart", c, zo);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    g ? b.createElement(i, { styles: rV(o) }) : null,
    p ? b.createElement(K6, { gapMode: e.gapMode }) : null
  );
}
function iV(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const aV = OL(gC, oV);
var wC = b.forwardRef(function(e, t) {
  return b.createElement(Jc, Pr({}, e, { ref: t, sideCar: aV }));
});
wC.classNames = Jc.classNames;
const sV = wC;
function lV(e) {
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
  } = Ni(), [f, p] = Gw();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = hC(n, d);
  return /* @__PURE__ */ E.jsx(
    tC,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: c,
      children: /* @__PURE__ */ E.jsx(
        sV,
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
var [uV, cV] = Wt(), dV = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function fV(e, t) {
  var r, n;
  if (e)
    return (n = (r = dV[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function pV(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: i,
    ...a
  } = e, s = am(), l = (t = s.components) == null ? void 0 : t.Drawer, u = fV(o, s.direction);
  return /* @__PURE__ */ E.jsx(uV, { value: { placement: u }, children: /* @__PURE__ */ E.jsx(
    vC,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...a,
      children: i
    }
  ) });
}
var hV = ne(pk), kC = Pe(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: i,
      ...a
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: u } = Ni(), c = s(a, t), d = l(i), f = we("chakra-modal__content", r), p = Gs(), g = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, y = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: x } = cV();
    return /* @__PURE__ */ E.jsx(lV, { children: /* @__PURE__ */ E.jsx(
      ne.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: y,
        children: /* @__PURE__ */ E.jsx(
          hV,
          {
            motionProps: o,
            direction: x,
            in: u,
            className: f,
            ...c,
            __css: g,
            children: n
          }
        )
      }
    ) });
  }
);
kC.displayName = "DrawerContent";
var CC = Pe(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: i } = Ni();
    b.useEffect(() => (i(!0), () => i(!1)), [i]);
    const a = we("chakra-modal__header", r), l = {
      flex: 0,
      ...Gs().header
    };
    return /* @__PURE__ */ E.jsx(
      ne.header,
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
CC.displayName = "ModalHeader";
var mV = ne(Vs.div), _C = Pe(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...i } = e, a = we("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Gs().overlay
    }, { motionPreset: u } = Ni(), d = o || (u === "none" ? {} : fk);
    return /* @__PURE__ */ E.jsx(
      mV,
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
_C.displayName = "ModalOverlay";
var PC = Pe((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: i } = Ni();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const a = we("chakra-modal__body", r), s = Gs();
  return /* @__PURE__ */ E.jsx(
    ne.div,
    {
      ref: t,
      className: a,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
PC.displayName = "ModalBody";
var TC = Pe(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: i } = Ni(), a = we("chakra-modal__close-btn", n), s = Gs();
    return /* @__PURE__ */ E.jsx(
      qc,
      {
        ref: t,
        __css: s.closeButton,
        className: a,
        onClick: et(r, (l) => {
          l.stopPropagation(), i();
        }),
        ...o
      }
    );
  }
);
TC.displayName = "ModalCloseButton";
var [vV, Vi] = Wt({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [gV, ed] = Wt({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});
function EC(e) {
  const t = b.Children.only(e.children), { getTriggerProps: r } = Vi();
  return b.cloneElement(t, r(t.props, t.ref));
}
EC.displayName = "PopoverTrigger";
var Fo = {
  click: "click",
  hover: "hover"
};
function yV(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: r = !0,
    initialFocusRef: n,
    id: o,
    returnFocusOnClose: i = !0,
    autoFocus: a = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: u = Fo.click,
    openDelay: c = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: g,
    ...y
  } = e, { isOpen: x, onClose: m, onOpen: h, onToggle: v } = y6(e), w = b.useRef(null), k = b.useRef(null), T = b.useRef(null), C = b.useRef(!1), $ = b.useRef(!1);
  x && ($.current = !0);
  const [R, M] = b.useState(!1), [j, ee] = b.useState(!1), H = b.useId(), G = o ?? H, [K, Y, oe, z] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((re) => `${re}-${G}`), {
    referenceRef: D,
    getArrowProps: B,
    getPopperProps: L,
    getArrowInnerProps: q,
    forceUpdate: U
  } = v6({
    ...y,
    enabled: x || !!g
  }), he = b6({ isOpen: x, ref: T });
  SL({
    enabled: x,
    ref: k
  }), KB(T, {
    focusRef: k,
    visible: x,
    shouldFocus: i && u === Fo.click
  }), qB(T, {
    focusRef: n,
    visible: x,
    shouldFocus: a && u === Fo.click
  });
  const Me = S6({
    wasSelected: $.current,
    enabled: f,
    mode: p,
    isSelected: he.present
  }), ce = b.useCallback(
    (re = {}, ot = null) => {
      const Fe = {
        ...re,
        style: {
          ...re.style,
          transformOrigin: ct.transformOrigin.varRef,
          [ct.arrowSize.var]: s ? `${s}px` : void 0,
          [ct.arrowShadowColor.var]: l
        },
        ref: Qt(T, ot),
        children: Me ? re.children : null,
        id: Y,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: et(re.onKeyDown, (At) => {
          r && At.key === "Escape" && m();
        }),
        onBlur: et(re.onBlur, (At) => {
          const sn = v1(At), it = _f(T.current, sn), vr = _f(k.current, sn);
          x && t && (!it && !vr) && m();
        }),
        "aria-labelledby": R ? oe : void 0,
        "aria-describedby": j ? z : void 0
      };
      return u === Fo.hover && (Fe.role = "tooltip", Fe.onMouseEnter = et(re.onMouseEnter, () => {
        C.current = !0;
      }), Fe.onMouseLeave = et(
        re.onMouseLeave,
        (At) => {
          At.nativeEvent.relatedTarget !== null && (C.current = !1, setTimeout(() => m(), d));
        }
      )), Fe;
    },
    [
      Me,
      Y,
      R,
      oe,
      j,
      z,
      u,
      r,
      m,
      x,
      t,
      d,
      l,
      s
    ]
  ), ye = b.useCallback(
    (re = {}, ot = null) => L(
      {
        ...re,
        style: {
          visibility: x ? "visible" : "hidden",
          ...re.style
        }
      },
      ot
    ),
    [x, L]
  ), Te = b.useCallback(
    (re, ot = null) => ({
      ...re,
      // If anchor is rendered, it is used as reference.
      ref: Qt(ot, w, D)
    }),
    [w, D]
  ), Oe = b.useRef(), qe = b.useRef(), Xe = b.useCallback(
    (re) => {
      w.current == null && D(re);
    },
    [D]
  ), Ir = b.useCallback(
    (re = {}, ot = null) => {
      const Fe = {
        ...re,
        ref: Qt(k, ot, Xe),
        id: K,
        "aria-haspopup": "dialog",
        "aria-expanded": x,
        "aria-controls": Y
      };
      return u === Fo.click && (Fe.onClick = et(re.onClick, v)), u === Fo.hover && (Fe.onFocus = et(re.onFocus, () => {
        Oe.current === void 0 && h();
      }), Fe.onBlur = et(re.onBlur, (At) => {
        const sn = v1(At), it = !_f(T.current, sn);
        x && t && it && m();
      }), Fe.onKeyDown = et(re.onKeyDown, (At) => {
        At.key === "Escape" && m();
      }), Fe.onMouseEnter = et(re.onMouseEnter, () => {
        C.current = !0, Oe.current = window.setTimeout(() => h(), c);
      }), Fe.onMouseLeave = et(re.onMouseLeave, () => {
        C.current = !1, Oe.current && (clearTimeout(Oe.current), Oe.current = void 0), qe.current = window.setTimeout(() => {
          C.current === !1 && m();
        }, d);
      })), Fe;
    },
    [
      K,
      x,
      Y,
      u,
      Xe,
      v,
      h,
      t,
      m,
      c,
      d
    ]
  );
  b.useEffect(() => () => {
    Oe.current && clearTimeout(Oe.current), qe.current && clearTimeout(qe.current);
  }, []);
  const Fr = b.useCallback(
    (re = {}, ot = null) => ({
      ...re,
      id: oe,
      ref: Qt(ot, (Fe) => {
        M(!!Fe);
      })
    }),
    [oe]
  ), Ui = b.useCallback(
    (re = {}, ot = null) => ({
      ...re,
      id: z,
      ref: Qt(ot, (Fe) => {
        ee(!!Fe);
      })
    }),
    [z]
  );
  return {
    forceUpdate: U,
    isOpen: x,
    onAnimationComplete: he.onComplete,
    onClose: m,
    getAnchorProps: Te,
    getArrowProps: B,
    getArrowInnerProps: q,
    getPopoverPositionerProps: ye,
    getPopoverProps: ce,
    getTriggerProps: Ir,
    getHeaderProps: Fr,
    getBodyProps: Ui
  };
}
function _f(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function v1(e) {
  var t;
  const r = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : r;
}
function $C(e) {
  const t = Fs("Popover", e), { children: r, ...n } = Bn(e), o = am(), i = yV({ ...n, direction: o.direction });
  return /* @__PURE__ */ E.jsx(vV, { value: i, children: /* @__PURE__ */ E.jsx(gV, { value: t, children: Hr(r, {
    isOpen: i.isOpen,
    onClose: i.onClose,
    forceUpdate: i.forceUpdate
  }) }) });
}
$C.displayName = "Popover";
var Pf = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function AC(e) {
  var t;
  const { bg: r, bgColor: n, backgroundColor: o, shadow: i, boxShadow: a, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: u } = Vi(), c = ed(), d = (t = r ?? n) != null ? t : o, f = i ?? a;
  return /* @__PURE__ */ E.jsx(
    ne.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ E.jsx(
        ne.div,
        {
          className: we("chakra-popover__arrow", e.className),
          ...u(e),
          __css: {
            "--popper-arrow-shadow-color": Pf("colors", s),
            "--popper-arrow-bg": Pf("colors", d),
            "--popper-arrow-shadow": Pf("shadows", f),
            ...c.arrow
          }
        }
      )
    }
  );
}
AC.displayName = "PopoverArrow";
var RC = Pe(
  function(t, r) {
    const { getBodyProps: n } = Vi(), o = ed();
    return /* @__PURE__ */ E.jsx(
      ne.div,
      {
        ...n(t, r),
        className: we("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
RC.displayName = "PopoverBody";
var MC = Pe(
  function(t, r) {
    const { onClose: n } = Vi(), o = ed();
    return /* @__PURE__ */ E.jsx(
      qc,
      {
        size: "sm",
        onClick: n,
        className: we("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: r,
        ...t
      }
    );
  }
);
MC.displayName = "PopoverCloseButton";
function bV(e) {
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
var SV = {
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
}, xV = ne(Vs.section), OC = Pe(function(t, r) {
  const { variants: n = SV, ...o } = t, { isOpen: i } = Vi();
  return /* @__PURE__ */ E.jsx(
    xV,
    {
      ref: r,
      variants: bV(n),
      initial: !1,
      animate: i ? "enter" : "exit",
      ...o
    }
  );
});
OC.displayName = "PopoverTransition";
var zC = Pe(
  function(t, r) {
    const { rootProps: n, motionProps: o, ...i } = t, { getPopoverProps: a, getPopoverPositionerProps: s, onAnimationComplete: l } = Vi(), u = ed(), c = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...u.content
    };
    return /* @__PURE__ */ E.jsx(
      ne.div,
      {
        ...s(n),
        __css: u.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ E.jsx(
          OC,
          {
            ...o,
            ...a(i, r),
            onAnimationComplete: QE(
              l,
              i.onAnimationComplete
            ),
            className: we("chakra-popover__content", t.className),
            __css: c
          }
        )
      }
    );
  }
);
zC.displayName = "PopoverContent";
var wV = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, kV = Object.defineProperty, CV = Object.defineProperties, _V = Object.getOwnPropertyDescriptors, ac = Object.getOwnPropertySymbols, IC = Object.prototype.hasOwnProperty, FC = Object.prototype.propertyIsEnumerable, g1 = (e, t, r) => t in e ? kV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, y1 = (e, t) => {
  for (var r in t || (t = {}))
    IC.call(t, r) && g1(e, r, t[r]);
  if (ac)
    for (var r of ac(t))
      FC.call(t, r) && g1(e, r, t[r]);
  return e;
}, PV = (e, t) => CV(e, _V(t)), TV = (e, t) => {
  var r = {};
  for (var n in e)
    IC.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && ac)
    for (var n of ac(e))
      t.indexOf(n) < 0 && FC.call(e, n) && (r[n] = e[n]);
  return r;
}, Wi = (e, t, r) => {
  const n = b.forwardRef(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: l = 24, stroke: u = 2, children: c } = a, d = TV(a, ["color", "size", "stroke", "children"]);
      return b.createElement(
        "svg",
        y1(PV(y1({
          ref: i
        }, wV), {
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
    color: Yn.string,
    size: Yn.oneOfType([Yn.string, Yn.number]),
    stroke: Yn.oneOfType([Yn.string, Yn.number])
  }, n.displayName = `${t}`, n;
}, EV = Wi("folder", "IconFolder", [
  [
    "path",
    {
      d: "M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ]
]), $V = Wi("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), DC = Wi("plus", "IconPlus", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M5 12l14 0", key: "svg-1" }]
]), AV = Wi("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]), RV = Wi("trash", "IconTrash", [
  ["path", { d: "M4 7l16 0", key: "svg-0" }],
  ["path", { d: "M10 11l0 6", key: "svg-1" }],
  ["path", { d: "M14 11l0 6", key: "svg-2" }],
  [
    "path",
    { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }
  ],
  ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]
]), MV = Wi(
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
let Il;
const OV = new Uint8Array(16);
function zV() {
  if (!Il && (Il = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Il))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Il(OV);
}
const Ze = [];
for (let e = 0; e < 256; ++e)
  Ze.push((e + 256).toString(16).slice(1));
function IV(e, t = 0) {
  return Ze[e[t + 0]] + Ze[e[t + 1]] + Ze[e[t + 2]] + Ze[e[t + 3]] + "-" + Ze[e[t + 4]] + Ze[e[t + 5]] + "-" + Ze[e[t + 6]] + Ze[e[t + 7]] + "-" + Ze[e[t + 8]] + Ze[e[t + 9]] + "-" + Ze[e[t + 10]] + Ze[e[t + 11]] + Ze[e[t + 12]] + Ze[e[t + 13]] + Ze[e[t + 14]] + Ze[e[t + 15]];
}
const FV = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), b1 = {
  randomUUID: FV
};
function DV(e, t, r) {
  if (b1.randomUUID && !t && !e)
    return b1.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || zV)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    r = r || 0;
    for (let o = 0; o < 16; ++o)
      t[r + o] = n[o];
    return t;
  }
  return IV(n);
}
let mt = {};
async function jV() {
  const e = async () => {
    let r = await k1("workflows");
    r == null && (r = localStorage.getItem("workspace")), mt = JSON.parse(r ?? "{}");
  }, t = async () => {
    let r = await k1("tags");
    JSON.parse(r ?? "{}");
  };
  await Promise.all([e(), t()]);
}
function S1(e, t) {
  mt[e] = {
    ...mt[e],
    ...t,
    id: e,
    updateTime: Date.now()
  }, localStorage.setItem("workspace", JSON.stringify(mt)), iv("workflows", JSON.stringify(mt));
}
function x1(e, t) {
  const r = DV();
  return mt[r] = {
    id: r,
    name: t ?? "Untitled Flow",
    json: e,
    updateTime: Date.now(),
    tags: []
  }, localStorage.setItem("workspace", JSON.stringify(mt)), iv("workflows", JSON.stringify(mt)), mt[r];
}
function w1() {
  return Object.values(mt).sort((e, t) => t.updateTime - e.updateTime);
}
function LV(e) {
  delete mt[e], localStorage.setItem("workspace", JSON.stringify(mt)), iv("workflows", JSON.stringify(mt));
}
async function iv(e, t) {
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
async function k1(e) {
  try {
    return await (await fetch(`/workspace/get_db?table=${e}`)).json();
  } catch (t) {
    return console.error("Error fetching workspace:", t), null;
  }
}
const jC = b.createContext({
  curFlowID: null
});
function BV({
  onclose: e,
  loadWorkflowID: t,
  onClickNewFlow: r
}) {
  const [n, o] = b.useState([]), { colorMode: i } = Os(), { curFlowID: a } = b.useContext(jC);
  b.useEffect(() => {
    const l = w1();
    o(l);
  }, []);
  const s = (l) => {
    LV(l);
    const u = w1();
    o(u);
  };
  return /* @__PURE__ */ E.jsx("div", { style: { position: "absolute", top: 0, left: 0, right: 0 }, children: /* @__PURE__ */ E.jsxs(
    pV,
    {
      isOpen: !0,
      placement: "left",
      onClose: () => e(),
      size: "sm",
      children: [
        /* @__PURE__ */ E.jsx(_C, {}),
        /* @__PURE__ */ E.jsxs(kC, { children: [
          /* @__PURE__ */ E.jsx(TC, {}),
          /* @__PURE__ */ E.jsx(CC, { children: "Recent Workflows" }),
          /* @__PURE__ */ E.jsxs(PC, { children: [
            /* @__PURE__ */ E.jsx(
              gi,
              {
                leftIcon: /* @__PURE__ */ E.jsx(DC, {}),
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
              return /* @__PURE__ */ E.jsxs(ro, { w: "100%", justify: "space-between", children: [
                /* @__PURE__ */ E.jsxs(
                  Qc,
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
                      /* @__PURE__ */ E.jsx(Va, { fontWeight: "500", children: l.name ?? "untitled" }),
                      /* @__PURE__ */ E.jsxs(Va, { color: "GrayText", ml: 2, fontSize: "sm", children: [
                        "Updated: ",
                        NV(l.updateTime)
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ E.jsx($C, { children: ({ isOpen: c, onClose: d }) => /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
                  /* @__PURE__ */ E.jsx(EC, { children: /* @__PURE__ */ E.jsx(RV, { color: "#F56565", cursor: "pointer" }) }),
                  /* @__PURE__ */ E.jsxs(zC, { children: [
                    /* @__PURE__ */ E.jsx(AC, {}),
                    /* @__PURE__ */ E.jsx(MC, {}),
                    /* @__PURE__ */ E.jsxs(RC, { children: [
                      /* @__PURE__ */ E.jsx(Va, { mb: 4, fontWeight: 600, children: "Are you sure you want to delete this workflow?" }),
                      /* @__PURE__ */ E.jsx(
                        gi,
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
function NV(e) {
  const t = new Date(e), r = String(t.getDate()).padStart(2, "0"), n = String(t.getMonth() + 1).padStart(2, "0"), o = t.getFullYear(), i = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0");
  return `${n}-${r}-${o} ${i}:${a}`;
}
function VV(e) {
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
function WV() {
  const e = [];
  for (let t of Fl.graph._nodes)
    t.type == "T2IAdapterLoader" && (t.type = "ControlNetLoader"), t.type == "ConditioningAverage " && (t.type = "ConditioningAverage"), t.type == "SDV_img2vid_Conditioning" && (t.type = "SVD_img2vid_Conditioning"), t.type in LiteGraph.registered_node_types || (t.type = VV(t.type), e.push(t.type));
  return e;
}
const UV = {
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
function HV() {
  const [e, t] = b.useState([]), r = b.useRef({}), [n, o] = b.useState(null), [i, a] = b.useState("root"), [s, l] = b.useState(!0), [u, c] = b.useState(null), d = b.useRef(null), { colorMode: f, toggleColorMode: p } = Os(), g = (w) => {
    d.current = w, c(w), setTimeout(() => {
      const k = WV();
      t(k);
    }, 1e3);
  }, y = async () => {
    var T;
    const w = {
      // Unique name for the extension
      name: "WorkspaceManager",
      async setup(C) {
      },
      async addCustomNodeDefs(C) {
        r.current = C;
      }
      // async loadedGraphNode(node: LGraphNode, app: ComfyApp) {},
    };
    Fl.registerExtension(w);
    try {
      await jV();
    } catch (C) {
      console.error("error loading db", C);
    }
    l(!1);
    const k = localStorage.getItem("curFlowID");
    if (k)
      g(k), o(((T = mt[k]) == null ? void 0 : T.name) ?? "");
    else {
      const C = localStorage.getItem("workflow"), $ = x1(C ?? "");
      g($.id), o($.name ?? "");
    }
  };
  b.useEffect(() => {
    y(), setInterval(() => {
      if (d.current != null) {
        const w = localStorage.getItem("workflow");
        localStorage.setItem("curFlowID", d.current), w != null && S1(d.current, {
          json: w
        });
      }
    }, 1e3);
  }, []);
  const x = (w) => {
    d.current != null && S1(d.current, {
      name: w
    });
  }, m = b.useCallback(
    OT(x, 700),
    []
  ), h = (w) => {
    g(w);
    const k = mt[w];
    o(k.name), Fl.loadGraphData(JSON.parse(k.json)), a("root");
  }, v = () => {
    const w = UV, k = x1(JSON.stringify(w));
    g(k.id), o(k.name), Fl.loadGraphData(w);
  };
  return s ? null : /* @__PURE__ */ E.jsx(jC.Provider, { value: { curFlowID: u }, children: /* @__PURE__ */ E.jsxs(
    Qc,
    {
      style: {
        width: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      },
      children: [
        /* @__PURE__ */ E.jsxs(
          ro,
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
              /* @__PURE__ */ E.jsxs(ro, { children: [
                /* @__PURE__ */ E.jsx(
                  gi,
                  {
                    size: "sm",
                    "aria-label": "workspace folder",
                    onClick: () => a("recentFlows"),
                    children: /* @__PURE__ */ E.jsxs(ro, { gap: 1, children: [
                      /* @__PURE__ */ E.jsx(EV, { size: 21 }),
                      /* @__PURE__ */ E.jsx(MV, { size: 8 })
                    ] })
                  }
                ),
                /* @__PURE__ */ E.jsx(
                  gi,
                  {
                    size: "sm",
                    variant: "outline",
                    colorScheme: "teal",
                    "aria-label": "workspace folder",
                    onClick: () => v(),
                    children: /* @__PURE__ */ E.jsxs(ro, { gap: 1, px: 3, children: [
                      /* @__PURE__ */ E.jsx(DC, { size: 16, color: "white" }),
                      /* @__PURE__ */ E.jsx(Va, { color: "white", fontSize: "sm", children: "New" })
                    ] })
                  }
                ),
                /* @__PURE__ */ E.jsx(
                  Qm,
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
              /* @__PURE__ */ E.jsx(ro, { children: /* @__PURE__ */ E.jsx(gi, { onClick: p, variant: "link", children: f === "light" ? /* @__PURE__ */ E.jsx($V, { size: 20 }) : /* @__PURE__ */ E.jsx(AV, { size: 20 }) }) })
            ]
          }
        ),
        i === "recentFlows" && /* @__PURE__ */ E.jsx(
          BV,
          {
            onclose: () => a("root"),
            loadWorkflowID: h,
            onClickNewFlow: () => {
              v(), a("root");
            }
          }
        )
      ]
    }
  ) });
}
const LC = document.createElement("div");
document.body.append(LC);
const GV = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, KV = D3({ config: GV });
Tf.createRoot(LC).render(
  /* @__PURE__ */ E.jsx(mo.StrictMode, { children: /* @__PURE__ */ E.jsxs(Qj, { children: [
    /* @__PURE__ */ E.jsx(YE, { initialColorMode: KV.config.initialColorMode }),
    /* @__PURE__ */ E.jsx(HV, {})
  ] }) })
);
